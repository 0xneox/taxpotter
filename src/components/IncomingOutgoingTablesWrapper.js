import React from 'react';
import styled from 'styled-components';

import IncomingTransactionTable from './IncomingTransactionTable';
import OutgoingTransactionTable from './OutgoingTransactionTable';

const TablesWrapper = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	margin: 2em auto 0em auto;
`;

export default function IncomingOutgoingTablesWrapper() {
	return (
		<TablesWrapper>
			<IncomingTransactionTable />
			<OutgoingTransactionTable />
		</TablesWrapper>
	);
}
