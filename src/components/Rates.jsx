import axios from "axios";
import { useState, useEffect } from "react";

const Rates = () => {  

    const [currency, setCurrency] = useState({});
    const [loading, setLoading] = useState(false);
    const [sort, setSort] = useState('asc');
    const [click, setClick] = useState(false);

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

    const fetchCurrency = async () => {
        const {data: {bpi}} = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
        setCurrency(bpi)
        setLoading(true);
    }
    
    useEffect(() => {
        fetchCurrency();
    }, []);

    rates[0].rate = loading && 1 / currency.USD.rate_float;
    rates[1].rate = loading && 1 / currency.EUR.rate_float;
    rates[2].rate = loading && 1 / currency.GBP.rate_float;

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


    return <div>
        <h1>Current Conversion Rates</h1>
        <h3>Rates <button onClick={sortHandle}>Sort</button></h3>
    <div className="rate-floats">
        {!click && rates.map(({type, rate}) => {
            return <div key={type}>
            <p>1 {type} is {rate} BTC </p>
            {console.log(rate)}
            </div> 
        })}
        {click && rates.map(({type, rate}) => {
            return <div key={type}>
            <p>1 {type} is {rate} BTC </p>
            {console.log(rate)}
            </div> 
        })}
        
            </div>
    </div>
}


export default Rates;