import axios from 'axios';

export default function getEthPrice() {
	const request = axios.get(`https://api.coinmarketcap.com/v2/ticker/1027/?convert=USD`);
	return request;
}
