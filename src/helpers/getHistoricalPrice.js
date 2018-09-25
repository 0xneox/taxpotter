import axios from 'axios';

// LIMITED TO 15 REQUESTS A SECOND!
export default function getHistoricalPrice(timeStamp) {
	const request = axios.get(
		`https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=USD&ts=${timeStamp}`
	);
	return request;
}
