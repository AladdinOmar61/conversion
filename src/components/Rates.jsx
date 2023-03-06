import { useState } from "react";

const Rates = ({currency, loading}) => {     
    
    const [sort, setSort] = useState('asc');
    const [click, setClick] = useState(false);

    // const rates = Object.keys(currency);
    // console.log(rates);

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

    // rates[0].rate = loading && 1 / currency.EUR.rate_float;
    // rates[1].rate = loading && 1 / currency.EUR.rate_float;
    // rates[2].rate = loading && 1 / currency.GBP.rate_float;

    const sortHandle = () => {
        setClick(true);
        if(sort === 'asc') {
            rates.sort((a, b) => a.rate - b.rate);
            setSort('desc');
        } else {
            rates.sort((a, b) => b.rate - a.rate);
            setSort('asc');
        }
        
    }

    // const sortHandle = () => {
    //     const newOrder = sortOrder === "asc" ? "desc" : "asc";
    //     const sortedRates = exchangeRates.sort((a, b) => {
    //       return newOrder === "asc" ? a.rate - b.rate : b.rate - a.rate;
    //     });
    //     setExchangeRates(sortedRates);
    //     setSortOrder(newOrder);
    //   };


    return <div>
        <h1>Current Conversion Rates</h1>
        <h3>Rates <button onClick={sortHandle}>Sort</button></h3>
    <div className="rate-floats">
        {click && rates.map(({type, rate}) => {
            return <div key={type}>
            <p>1 {type} is {rate} BTC </p>
            {console.log(rate)}
            </div> 
        })}

{!click && rates.map(({type, rate}) => {
            return <div key={type}>
            <p>1 {type} is {rate} BTC </p>
            {console.log(rate)}
            </div> 
        })}
        
            </div>
    </div>
}


export default Rates;