import React from 'react';
import styled from 'styled-components';
import { device } from '../styles/MediaQueries';
import OutgoingTransactionRows from './OutgoingTransactionRows';

const TableWrapper = styled.div`
	text-align: center;

	@media ${device.mobileS} {
		margin-top: 2em;
		width: 95%;
	}

	@media ${device.tablet} {
		margin-top: 0;
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
	background: rgb(38, 44, 61);
	padding: 0.75em;
	text-align: center;
`;

export default function OutgoingTransactionTable() {
	return (
		<TableWrapper>
			<TableHeader>Spent</TableHeader>
			<Table className={'data-table'} cellPadding="0" cellSpacing="0">
				<thead>
					<TableRow>
						<DataTitle>Date - Time</DataTitle>
						<DataTitle>Value (ETH)</DataTitle>
						<DataTitle>Value (USD)</DataTitle>
					</TableRow>
				</thead>
				<tbody>
					<OutgoingTransactionRows />
				</tbody>
			</Table>
		</TableWrapper>
	);
}
