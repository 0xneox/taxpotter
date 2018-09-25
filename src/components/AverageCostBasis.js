import React from 'react';
import styled from 'styled-components';
import { AppConsumer } from '../AppContext';
import ReactTooltip from 'react-tooltip';
import calculateAvgCostBasis from '../helpers/calculateAvgCostBasis';

const CostBasisWrapper = styled.section`
	display: flex;
	flex-direction: column;
	margin: 2em 0em 2em 0;
	text-align: center;
`;

const CostBasisHeader = styled.h2`
	display: flex;
	align-self: center;
	align-items: center;
`;

const CostBasisContent = styled.div`
	align-self: center;
	background-color: rgb(38, 44, 61);
	border: 1px solid rgb(97, 129, 227);
	display: flex;
	justify-content: center;
	margin-top: 0.5em;
	padding: 1em;
`;

export default function AverageCostBasis() {
	return (
		<AppConsumer>
			{({ incomingHistoricalValues }) => (
				<CostBasisWrapper>
					<CostBasisHeader>
						Net Cost Basis<p>
							<i className="material-icons">info</i>
						</p>
						<ReactTooltip place="top" type="warning" />
					</CostBasisHeader>
					<CostBasisContent>${calculateAvgCostBasis(incomingHistoricalValues).toFixed(2)}</CostBasisContent>
				</CostBasisWrapper>
			)}
		</AppConsumer>
	);
}
