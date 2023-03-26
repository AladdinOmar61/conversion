/* eslint-disable react/prop-types */
import { useState } from 'react';

const Rates = ({ currency, loading }) => {
	const [sort, setSort] = useState('desc');
	const [click, setClick] = useState(false);
	const [rates, setRates] = useState([]);

	const sortHandle = () => {
		setClick(true);
		let currUSD = 1 / currency.USD.rate_float;
		let currEUR = 1 / currency.EUR.rate_float;
		let currGBP = 1 / currency.GBP.rate_float;

		let rates2 = [currUSD, currEUR, currGBP];

		if (sort === 'desc') {
			const ascRates = rates2.sort((a, b) => b - a);

			setRates([...ascRates]);
			setSort('asc');
		} else {
			const ascRates = rates2.sort((a, b) => a - b);

			setRates([...ascRates]);
			setSort('desc');
		}
	};

	return (
		<div className="rates-container">
			<h1 className="rates-header">Current Conversion Rates</h1>
			<h3 className="rates-title">Rates</h3>
			{!click && (
				<div className="rate-floats">
					<p>1 BTC is {loading && 1 / currency.USD.rate_float}</p>
					<p>1 BTC is {loading && 1 / currency.EUR.rate_float}</p>
					<p>1 BTC is {loading && 1 / currency.GBP.rate_float}</p>
					<button className="sort-btn" onClick={sortHandle}>
						Sort
					</button>
				</div>
			)}

			{click && (
				<div className="rate-floats">
					{rates.map((rate, code) => {
						return (
							<div key={code}>
								<p>1 BTC is {rate}</p>
							</div>
						);
					})}
					<button className="sort-btn" onClick={sortHandle}>
						Sort
					</button>
				</div>
			)}
		</div>
	);
};

export default Rates;
