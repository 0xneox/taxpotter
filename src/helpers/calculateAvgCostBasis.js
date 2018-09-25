export default function calculateAvgCostBasis(incomingHistoricalValues) {
	let totalIncomingEther = 0;
	let totalUsdValue = 0;

	incomingHistoricalValues.forEach(transaction => {
		totalIncomingEther = totalIncomingEther + Number(transaction.value);
		totalUsdValue = totalUsdValue + transaction.price;
	});

	return totalUsdValue / totalIncomingEther;
}
