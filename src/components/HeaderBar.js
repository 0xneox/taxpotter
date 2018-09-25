import React from 'react';
import { AppConsumer } from '../AppContext';
import styled from 'styled-components';
import { device } from '../styles/MediaQueries';
import { NavLink } from 'react-router-dom';

const HeaderWrapper = styled.section`
	align-items: center;
	background-color: rgb(38, 44, 61);
	display: flex;
	justify-content: space-between;
	height: 5em;
	padding: 0 1em 0 1em;
	width: 100%;
`;

const SymbolContainer = styled.div`
	align-items: center;
	background-color: rgb(38, 44, 61);
	display: flex;
	padding: 0.5em;
`;

const EthSymbol = styled.img`
	align-self: center;
	margin-right: 0.5em;
	width: 40px;
`;

const HeaderText = styled.h1`
	@media ${device.mobileS} {
		font-size: 0.8em;
	}

	@media ${device.mobileM} {
		font-size: 1em;
	}

	@media ${device.tablet} {
		font-size: 1.2em;
	}
`;

const EthPriceInfo = styled.div`
	background-color: rgb(38, 44, 61);
	padding: 0.5em;

	@media ${device.mobileS} {
		font-size: 0.7em;
	}

	@media ${device.mobileM} {
		font-size: 0.9em;
	}
`;

const PercentChangeWrapper = styled.div`
	display: flex;
`;

export default function HeaderBar() {
	return (
		<AppConsumer>
			{({ ethPrice, percentChange24h }) => (
				<HeaderWrapper>
					<NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
						<SymbolContainer>
							<EthSymbol
								id={`headerBar-eth-symbol`}
								src={`https://raw.githubusercontent.com/cjdowner/cryptocurrency-icons/master/128/color/`}
								alt=""
							/>
							<HeaderText>Taxpotter Alpha </HeaderText>
						</SymbolContainer>
					</NavLink>

				</HeaderWrapper>
			)}
		</AppConsumer>
	);
}
