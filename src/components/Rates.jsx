import { useState } from "react";

const Rates = ({currency, loading}) => {     
    
    const [sort, setSort] = useState('asc');
    const [click, setClick] = useState(false);
    const [rates, setRates] = useState([]);


    const sortHandle = () => {
        // setClick(true);
        let currUSD = 1 / currency.USD.rate_float;
        let currEUR = 1 / currency.EUR.rate_float;
        let currGBP = 1 / currency.GBP.rate_float;

        let rates2 = [currUSD, currEUR, currGBP];

        // setRates(rates2);

        if(sort === 'asc') {
            const ascRates = rates2.sort((a, b) => a - b)
            
            setRates([...ascRates])
            setSort('desc');
        } else {
            const ascRates = rates2.sort((a, b) => b - a)
            
            setRates([...ascRates])
            setSort('asc');
        }
        console.log(rates);
    }


    return <div>
        <h1>Current Conversion Rates</h1>
        <h3>Rates <button onClick={sortHandle}>Sort</button></h3>
    {<div className="rate-floats">
        {rates.map((rate) => {
        return <div>
        <p>{rate}</p>
        </div>
        })}
    </div>}
    </div>
}


export default Rates;