import React from 'react';
import styled from 'styled-components';
import { AppConsumer } from '../AppContext';
import convertTimeStamp from '../helpers/convertTimeStamp';

const TransactionRow = styled.tr``;

const TransactionData = styled.td`
	padding: 0.5em;
	text-align: center;
`;

const ValueData = styled.td`
	color: #76ff72;
	text-align: center;
`;

export default function IncomingTransactionRows() {
	return (
		<AppConsumer>
			{({ incomingHistoricalValues }) =>
				incomingHistoricalValues.map(transaction => (
					<TransactionRow key={transaction.timeStamp}>
						<TransactionData>{convertTimeStamp(transaction.timeStamp)}</TransactionData>
						<ValueData>{Number(transaction.value).toLocaleString()}</ValueData>
						<TransactionData>
							{Number(transaction.price).toLocaleString(undefined, {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2
							})}
						</TransactionData>
					</TransactionRow>
				))
			}
		</AppConsumer>
	);
}
