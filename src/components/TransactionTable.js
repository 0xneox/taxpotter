import React from 'react';
import styled from 'styled-components';
import { device } from '../styles/MediaQueries';
import TransactionRows from './TransactionRows';

const TableWrapper = styled.section`
	margin-top: 2em;
	text-align: center;
	width: 100%;

	@media ${device.mobileS} {
		display: none;
	}

	@media ${device.tablet} {
		display: block;
	}
`;

const TableHeader = styled.h1``;

const Table = styled.table`
	border: 1px solid rgb(97, 129, 227);
	font-size: 0.9em;
	margin: 0.5em auto 0 auto;
	width: 90%;
`;

const TableRow = styled.tr``;

const DataTitle = styled.td`
	background: rgb(38, 44, 61);
	padding: 0.75em;
	text-align: center;
`;

export default function TransactionTable() {
	return (
		<TableWrapper>
			<TableHeader>Transactions</TableHeader>
			<Table className={'data-table'} cellPadding="0" cellSpacing="0">
				<thead>
					<TableRow>
						<DataTitle>Date - Time</DataTitle>
						<DataTitle>Type</DataTitle>
						<DataTitle>From</DataTitle>
						<DataTitle>To</DataTitle>
						<DataTitle>Value (ETH)</DataTitle>
					</TableRow>
				</thead>
				<tbody>
					<TransactionRows />
				</tbody>
			</Table>
		</TableWrapper>
	);
}
