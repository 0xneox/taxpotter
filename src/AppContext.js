import React, { Component } from 'react';
import web3 from './web3.js';
import getEthPrice from './helpers/getEthPrice';
import getTransactionCount from './helpers/getTransactionCount';
import getTransactions from './helpers/getTransactions';
import getHistoricalValues from './helpers/getHistoricalValues';

const AppContext = React.createContext();

class AppProvider extends Component {
	state = {
		ethPrice: '',
		percentChange24h: '',
		address: '',
		isAddress: false,
		isAuth: false,
		balance: '',
		transactionCount: '',
		transactions: [],
		incomingTransactions: [],
		outgoingTransactions: [],
		incomingHistoricalValues: [],
		outgoingHistoricalValues: []
	};

	componentDidMount() {
		getEthPrice()
			.then(response => {
				// current Ethereum price in USD
				const ethPrice = response.data.data.quotes.USD.price;
				const percentChange24h = response.data.data.quotes.USD.percent_change_24h;

				this.setState({
					ethPrice,
					percentChange24h
				});
			})
			.catch(error => {
				console.log(error);
			});
	}

	// address entered into AddressForm
	handleAddressInput = async address => {
		this.setState({
			address
		});

		// check address provided is a valid ethereum address
		const isAddress = await web3.utils.isAddress(address);

		if (isAddress) {
			this.setState({
				isAddress: true
			});
		} else {
			this.setState({
				isAddress: false
			});
		}

		// get transaction count - only if valid address is supplied
		if (isAddress) {
			await getTransactionCount(address).then(async response => {
				const transactionCount = await response.data.n_tx;

				this.setState({
					transactionCount
				});
			});
		}

		// if address is valid and transaction are found - authorize access to 'results page'
		if (this.state.transactionCount > 0) {
			this.setState({
				isAuth: true
			});
		} else {
			this.setState({
				isAuth: false
			});
		}
	};

	// when AddressForm is submitted
	getAddressData = async () => {
		const { address, isAuth, transactionCount } = this.state;

		// if transactions are found
		if (isAuth) {
			const weiBalance = await web3.eth.getBalance(address);

			this.setState({
				// convert balance from wei to ether
				balance: web3.utils.fromWei(weiBalance, 'ether')
			});

			getTransactions(address)
				.then(async response => {
					const transactions = await response.data.result;

					const incomingTransactions = await transactions.filter(
						transaction => transaction.to === address.toLowerCase()
					);

					const outgoingTransactions = await transactions.filter(
						transaction => transaction.to !== address.toLowerCase()
					);

					const incomingHistoricalValues = await getHistoricalValues(incomingTransactions);
					const outgoingHistoricalValues = await getHistoricalValues(outgoingTransactions);

					this.setState({
						transactions,
						incomingTransactions,
						outgoingTransactions,
						incomingHistoricalValues,
						outgoingHistoricalValues
					});
				})
				.catch(error => {
					console.log(error);
				});
			// if isAuth results in 'false'
		} else alert('Invald Ethereum Address!');
	};

	render() {
		const {
			ethPrice,
			percentChange24h,
			address,
			isAddress,
			isAuth,
			balance,
			transactionCount,
			transactions,
			incomingTransactions,
			outgoingTransactions,
			incomingHistoricalValues,
			outgoingHistoricalValues
		} = this.state;
		const { handleAddressInput, getAddressData } = this;
		const { children } = this.props;

		return (
			<AppContext.Provider
				value={{
					ethPrice,
					percentChange24h,
					address,
					isAddress,
					isAuth,
					balance,
					transactionCount,
					transactions,
					incomingTransactions,
					outgoingTransactions,
					incomingHistoricalValues,
					outgoingHistoricalValues,
					handleAddressInput,
					getAddressData
				}}
			>
				{children}
			</AppContext.Provider>
		);
	}
}

const AppConsumer = AppContext.Consumer;

export { AppProvider, AppConsumer };
