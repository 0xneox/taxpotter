import axios from 'axios';

export default function getTransactionCount(address) {
	const request = axios.get(`https://api.blockcypher.com/v1/eth/main/addrs/${address}`);
	return request;
}
