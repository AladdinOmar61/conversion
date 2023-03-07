import { useState, useEffect } from 'react'

const Footer = ({time}) => {

    const [refresh, setRefresh] = useState(false);

    const timeToRefresh = 300000;

    useEffect(() => {
        const interval = setInterval(() => {
          setRefresh(true);
          timeToRefresh-1000;
        }, timeToRefresh)

        return () => clearInterval(interval);
      }, [timeToRefresh])

      const canRefresh = () => {
        if(!refresh) {
            alert("must wait 5 minutes before each refresh");
        } else {
            window.location.reload();
            alert("refreshing");
        }
      }

    return <div>
    <p className="time-refresh">Data date: {new Date(time).toLocaleString()}<br/><button className="refresh-btn" onClick={canRefresh}>Refresh</button></p>
    
    </div>
}

export default Footer;