import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { AppProvider, AppConsumer } from './AppContext';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import HeaderBar from './components/HeaderBar';
import AddressForm from './components/AddressForm';
import AddressExamples from './components/AddressExamples';
import Spinner from './components/Spinner';
import AddressBalance from './components/AddressBalance';
import TransactionTable from './components/TransactionTable';
import IncomingOutgoingTablesWrapper from './components/IncomingOutgoingTablesWrapper';
import AverageCostBasis from './components/AverageCostBasis';

import registerServiceWorker from './registerServiceWorker';

// app will redirect user back to '/' route when they try to visit '/results' route
const ProtectedRoute = ({ component: Component, ...rest }) => (
	<AppConsumer>
		{({ isAuth }) => (
			<Route render={props => (isAuth ? <Component {...props} /> : <Redirect to="/" />)} {...rest} />
		)}
	</AppConsumer>
);

const Home = () => {
	return (
		<div>
			<AddressForm />
			<AddressExamples />
		</div>
	);
};

// results will render a spinner until all transactions are received from the request
const Results = () => {
	return (
		<AppConsumer>
			{({ transactions }) => (
				<div>
					{transactions.length === 0 ? (
						<Spinner />
					) : (
						<div>
							<AddressBalance />
							<TransactionTable />
							<IncomingOutgoingTablesWrapper />
							<AverageCostBasis />
						</div>
					)}
				</div>
			)}
		</AppConsumer>
	);
};

const App = () => (
	<div>
		<Router>
			<AppProvider>
				<HeaderBar />
				<Switch>
					<Route exact path="/" component={Home} />
					<ProtectedRoute path="/results" component={Results} />
				</Switch>
			</AppProvider>
		</Router>
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
