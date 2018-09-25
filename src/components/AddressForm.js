import React from 'react';
import { AppConsumer } from '../AppContext';
import styled from 'styled-components';
import { device } from '../styles/MediaQueries';
import Spinner from './Spinner';
import { NavLink } from 'react-router-dom';

const FormWrapper = styled.section`
	display: flex;
	justify-content: center;
	margin-top: 3em;
	width: 100%;
`;

const Form = styled.form`
	align-items: center;
	background-color: rgb(38, 44, 61);
	border: 1px solid rgb(97, 129, 227);
	display: flex;
	flex-direction: column;
	height: autopx;
	justify-content: space-around;
	padding: 1em 0 1em 0;

	@media ${device.mobileS} {
		width: 90%;
	}

	@media ${device.tablet} {
		width: 75%;
	}

	@media ${device.laptop} {
		width: 50%;
	}
`;

const FormLabel = styled.label``;

const FormInput = styled.input`
	border: 1px solid rgb(97, 129, 227);
	background-color: rgb(82, 105, 117);
	color: white;
	font-size: 1.1em;
	margin-top: 1em;
	padding: 0.5em;
	width: 90%;
`;

const ButtonLabel = styled.label`
	background-color: rgb(97, 129, 227);
	border: 1px solid white;
	border-radius: 3px;
	font-size: 1.2em;
	padding: 0.5em;
	&:hover {
		background-color: rgba(97, 129, 227, 0.8);
		cursor: pointer;
	}
`;

const Button = styled.button`
	display: none;
`;

export default function AddressForm() {
	return (
		<AppConsumer>
			{({ address, isAuth, handleAddressInput, getAddressData }) => (
				<FormWrapper>
					<Form
						onSubmit={event => {
							event.preventDefault();
						}}
					>
						<FormLabel>Enter an Ethereum Address [currenly supports upto 20 transactions]</FormLabel>
						<FormInput value={address} onChange={event => handleAddressInput(event.target.value)} />
						{/* Wrap the submit button with a NavLink to the 'results' page only when transactions are found */}
						{isAuth ? (
							<NavLink
								to="/results"
								style={{ textDecoration: 'none', color: 'white', margin: '3em 0 1em 0' }}
							>
								<ButtonLabel htmlFor="submitButton" onClick={getAddressData}>
									Submit
								</ButtonLabel>
								<Button type="submit" id="submitButton" onClick={getAddressData} />
							</NavLink>
						) : (
							<Spinner />
						)}
					</Form>
				</FormWrapper>
			)}
		</AppConsumer>
	);
}
