import axios from 'axios';
import APIKEY from './apiKeys';

export default function getTransactions(address) {
	const request = axios.get(
		`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${APIKEY}`
	);
	return request;
}
