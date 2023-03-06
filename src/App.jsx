import './App.css'
import axios from "axios";
import { useState, useEffect } from "react"
import Conversions from './components/Conversions';
import Rates from './components/Rates'

function App() {

  const [page, setPage] = useState('rates');

  

  const ratesHandler = () => {
    setPage('rates');
  }

  const conversionHandler = () => {
    setPage('conversion');
  }

//   const fetchCurrency = async () => {
//     setLoading(true);
//     const {data: {bpi}} = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
//     setCurrency(bpi)
// }

// useEffect(() => {
//     fetchCurrency();
// }, []);

  return (
    <div className="App">
      <div className="nav-bar">
      <button className="nav-btn" onClick={ratesHandler}>Rates</button>
      <button className="nav-btn" onClick={conversionHandler}>Conversions</button>
      </div>
      {page === 'rates' && <Rates/>}
      {page === 'conversion' && <Conversions/>}
    </div>
  )
}

export default App
