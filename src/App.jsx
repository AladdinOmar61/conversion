import './App.css'
import { useState } from "react"
import Conversions from './components/Conversions';
import Rates from './components/Rates'

function App() {

  const [page, setPage] = useState(false);

  const pageHandler = () => {
    if(page === false) {
    setPage(true);
    } else {
      setPage(false);
    }
  }

  return (
    <div className="App">
      <div className="nav-bar">
      <button onClick={pageHandler}>Rates</button>
      <button onClick={pageHandler}>Conversions</button>
      </div>
      {!page && <Rates/>}
      {page && <Conversions/>}
    </div>
  )
}

export default App
