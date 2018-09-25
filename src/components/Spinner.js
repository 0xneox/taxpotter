import React from 'react';
import styled from 'styled-components';
import { RingLoader } from 'react-spinners';

const SpinnerWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 2em;
`;

export default function Spinner() {
	return (
		<SpinnerWrapper>
			<RingLoader color={'#76ff72'} size={150} />
		</SpinnerWrapper>
	);
}
