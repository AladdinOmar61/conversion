import { useState } from "react";

const Conversions = ({currency, loading}) => {

    const [amount, setAmount] = useState(1);
    const [crncy, setCrncy] = useState('USD');
    const [index, setIndex] = useState(0);

        let currUSD = currency.USD.rate_float;
        let currEUR = currency.EUR.rate_float;
        let currGBP = currency.GBP.rate_float;

        let rates = [currUSD, currEUR, currGBP];

    const amountHandler = (e) => {
        setAmount(e.target.value)
    }

    const currencyHandler = (e) => {
        if(e.target.value === 'USD') {
            setIndex(0);
        } else if (e.target.value === 'EUR') {
            setIndex(1);
        } else {
            setIndex(2);
        }
        setCrncy(e.target.value);
      };
    

    return <div className="conversion-container">
    <h1 className='conversion-header'>Conversions</h1>
    <div className="currency-div">
<label htmlFor="currencies">Choose a Currency:</label>
<input type="text" value={amount} onChange={amountHandler}></input>
<select className="curr-selector" name="currencies" id="currencies" value={crncy} onChange={currencyHandler}>
  <option value="USD">USD</option>
  <option value="EUR">EUR</option>
  <option value="GBP">GBP</option>
</select>
<p>{amount} {crncy} = {amount / rates[index]} BTC</p>
</div>
</div>
}

export default Conversions;