import web3 from '../web3.js';
import getHistoricalPrice from './getHistoricalPrice';

export default async function getHistoricalValues(transactions) {
	const pricePromises = await transactions.map(transaction => {
		const { timeStamp, value } = transaction;
		return getHistoricalPrice(timeStamp).then(request => {
			return request.data.ETH.USD * web3.utils.fromWei(value, 'ether');
		});
	});

	const resolvedPricePromises = await Promise.all(pricePromises);

	const transactionsObjs = await transactions.map(transaction => {
		const { timeStamp, value } = transaction;
		return {
			timeStamp: timeStamp,
			value: web3.utils.fromWei(value, 'ether')
		};
	});

	const HistoricalValues = await transactionsObjs.map((obj, index) => {
		return Object.assign({}, obj, { price: resolvedPricePromises[index] });
	});

	return HistoricalValues;
}
