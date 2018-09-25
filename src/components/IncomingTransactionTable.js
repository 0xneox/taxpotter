import React from 'react';
import styled from 'styled-components';
import { device } from '../styles/MediaQueries';
import IncomingTransactionRows from './IncomingTransactionRows';

const TableWrapper = styled.div`
	text-align: center;

	@media ${device.mobileS} {
		width: 95%;
	}

	@media ${device.tablet} {
		width: 500px;
	}
`;

const TableHeader = styled.h1``;

const Table = styled.table`
	border: 1px solid rgb(97, 129, 227);
	font-size: 0.9em;
	margin: 0 auto;
	margin-top: 0.5em;
	width: 100%;
`;

const TableRow = styled.tr``;

const DataTitle = styled.td`
	background: rgb(38, 45, 60);
	padding: 0.75em;
	text-align: center;
`;

export default function IncomingTransactionTable() {
	return (
		<TableWrapper>
			<TableHeader>Recieved</TableHeader>
			<Table className={'data-table'} cellPadding="0" cellSpacing="0">
				<thead>
					<TableRow>
						<DataTitle>Date - Time</DataTitle>
						<DataTitle>Value (ETH)</DataTitle>
						<DataTitle>Value (USD)</DataTitle>
					</TableRow>
				</thead>
				<tbody>
					<IncomingTransactionRows />
				</tbody>
			</Table>
		</TableWrapper>
	);
}
