import { useState } from "react";

const Conversions = ({currency, loading}) => {

    const [amount, setAmount] = useState(1);
    const [crncy, setCrncy] = useState('USD');
    const [index, setIndex] = useState(0);

    const rates = [
        {
            type: 'USD',
            rate: 0,
        },
        {
            type: 'EUR',
            rate: 0
        },
        {
            type: 'GBP',
            rate: 0
        }
    ];

    rates[0].rate = loading && currency.USD.rate_float;
    rates[1].rate = loading && currency.EUR.rate_float;
    rates[2].rate = loading && currency.GBP.rate_float;

    const amountHandler = (e) => {
        setAmount(e.target.value)
    }

    const currencyHandler = (e) => {
        setCrncy(e.target.value);
        switch(crncy) {
            case 'USD':
            setIndex(0);
            case 'EUR':
            setIndex(1);
            case 'GBP':
            setIndex(2);
        }
      };
    

    return <div>
    <h1>Conversions</h1>
<label htmlFor="currencies">Choose a Currency:</label>
<input type="text" value={amount} onChange={amountHandler}></input>
<select name="currencies" id="currencies" value={crncy} onChange={currencyHandler}>
  <option value="USD">USD</option>
  <option value="EUR">EUR</option>
  <option value="GBP">GBP</option>
</select>

<p>{amount} {crncy} = {amount / rates[index].rate}</p>

</div>
}

export default Conversions;