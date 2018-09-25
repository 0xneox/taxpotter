import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	font-size: 0.9em;
	justify-content: center;
	margin-top: 3em;
`;

const AddressContainer = styled.div`
	background-color: rgb(38, 44, 61);
	border: 1px solid rgb(97, 129, 227);
	padding: 1em 1em 0.5em 1em;
	text-align: center;
`;

const AddressHeader = styled.h1`
	margin-bottom: 1em;
`;

const Address = styled.p`
	margin-bottom: 0.5em;
`;

export default function AddressExamples() {
	return (
		<Wrapper>
			<AddressContainer>
				<AddressHeader>Address Examples</AddressHeader>
				<Address>0x924b20c71E8F726E6F6A2Ae19fe466e293a029C0</Address>
				<Address>0xAa25FfEa6Fd55f2B8595fBE08959F75735954a01</Address>

			</AddressContainer>
		</Wrapper>
	);
}
