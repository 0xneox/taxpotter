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
	color: #ff7272;
	text-align: center;
`;

export default function OutgoingTransactionRows() {
	return (
		<AppConsumer>
			{({ outgoingHistoricalValues }) =>
				outgoingHistoricalValues.map(transaction => (
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
