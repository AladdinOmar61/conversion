import './App.css'
import axios from "axios";
import { useState, useEffect } from "react"
import Conversions from './components/Conversions';
import Rates from './components/Rates'
import Footer from './components/Footer';

function App() {

  const [page, setPage] = useState('rates');
  const [currency, setCurrency] = useState({});
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState(null);
  const [refresh, setRefresh] = useState(true);
  

  const ratesHandler = () => {
    setPage('rates');
  }

  const conversionHandler = () => {
    setPage('conversion');
  }

  const fetchCurrency = async () => {
    const {data: {bpi, time}} = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
    setLoading(true);
    setCurrency(bpi);
    console.log(bpi);
    setTime(time.updatedISO);
}

useEffect(() => {
    fetchCurrency();
}, []);

// useEffect(() => {
//   const interval = setInterval(() => {
//     setRefresh(true);
//   }, 300000)

//   return () => clearInterval(interval);
// }, [])

  return (
    <div className="App">
      <div className="nav-bar">
      <button className="nav-btn" onClick={ratesHandler}>Rates</button>
      <button className="nav-btn" onClick={conversionHandler}>Conversions</button>
      </div>
      {page === 'rates' && <Rates fetchCurrency={fetchCurrency} currency={currency} setCurrency={setCurrency} loading={loading}/>}
      {page === 'conversion' && <Conversions fetchCurrency={fetchCurrency} currency={currency} setCurrency={setCurrency} loading={loading}/>}
      {time ? <Footer time={time}/> : null}
    </div>
  )
}

export default App
