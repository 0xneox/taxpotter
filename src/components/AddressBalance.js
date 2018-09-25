import React from 'react';
import { AppConsumer } from '../AppContext';
import styled from 'styled-components';

const BalanceWrapper = styled.section`
	display: flex;
	flex-direction: column;
	margin-top: 2em;
	text-align: center;
`;

const BalanceHeader = styled.h2``;

const BalanceInfo = styled.div`
	align-self: center;
	background-color: rgb(38, 44, 61);
	border: 1px solid rgb(97, 129, 227);
	display: flex;
	justify-content: center;
	margin-top: 0.5em;
	padding: 1em;
`;

export default function AddressBalance() {
	return (
		<AppConsumer>
			{({ ethPrice, balance }) => (
				<BalanceWrapper>
					<BalanceHeader>Balance</BalanceHeader>
					<BalanceInfo>
						<p>{balance} ETH = $</p>
						<p>
							{Number(ethPrice * balance).toLocaleString(undefined, {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2
							})}
						</p>
					</BalanceInfo>
				</BalanceWrapper>
			)}
		</AppConsumer>
	);
}
