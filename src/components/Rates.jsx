import axios from "axios";
import { useState } from "react";

const Rates = () => {

    const [currency, setCurrency] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchBooks = () => {
        setLoading(true);
        setError(null);
        const currencyUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        axios.get(currencyUrl)
        .then(({data}) => {
            setCurrency(data.bpi.EUR);
            // console.log(data.bpi.EUR);
        })
        .catch(error => {
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        })
    }

    return <div>
        <h1>Current Conversion Rates</h1>
            <button onClick={fetchBooks}>Fetch $</button>
            {console.log(currency)}
                <p>{currency.code}</p>
                <p>{currency.description}</p>
                <p>{currency.rate}</p>
    </div>
}

export default Rates;