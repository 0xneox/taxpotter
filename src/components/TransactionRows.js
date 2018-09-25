import React from 'react';
import styled from 'styled-components';
import web3 from '../web3.js';
import { AppConsumer } from '../AppContext';
import convertTimeStamp from '../helpers/convertTimeStamp';

const TransactionRow = styled.tr``;

const TransactionData = styled.td`
	padding: 0.5em;
	text-align: center;
`;

export default function TransactionRows() {
	return (
		<AppConsumer>
			{({ address, transactions }) =>
				transactions.map(transaction => (
					// use timestamp as the key for each table row
					<TransactionRow key={transaction.timeStamp}>
						<TransactionData>{convertTimeStamp(transaction.timeStamp)}</TransactionData>
						<TransactionData
							className={address.toLowerCase() === transaction.to ? 'green-text' : 'red-text'}
						>
							{address.toLowerCase() === transaction.to ? 'IN' : 'OUT'}
						</TransactionData>
						<TransactionData>{transaction.from}</TransactionData>
						<TransactionData>{transaction.to}</TransactionData>
						<TransactionData
							className={address.toLowerCase() === transaction.to ? 'green-text' : 'red-text'}
						>
							{Number(web3.utils.fromWei(transaction.value, 'ether')).toLocaleString()}
						</TransactionData>
					</TransactionRow>
				))
			}
		</AppConsumer>
	);
}
