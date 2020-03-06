import 'bootstrap/dist/css/bootstrap.css';
import React , { useState, useEffect} from "react"
import '../App.css';
import ContainerChildCovertInput from './ContainerChildCovertInput';

function ContainerChildListCurrencyTicker() {
    const [USD, setCountUSD] = useState(0);
    const [GBP, setCountGBP] = useState(0);
    const [SEK, setCountSEK] = useState(0);
    const [JPY, setCountJPY] = useState(0);
    const [NOK, setCountNOK] = useState(0);
    const list = 
        {USD : USD,
         GBP : GBP,
         SEK : SEK,
         JPY : JPY,
         NOK : NOK
        }
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    fetchData();      
  });
 
    async function fetchData() {
        let url = "https://api.exchangeratesapi.io/latest"
        let result = await fetch(url).then(Response => Response.json())
        setCountUSD(result.rates.USD)
        setCountGBP(result.rates.GBP)
        setCountSEK(result.rates.SEK)
        setCountJPY(result.rates.JPY)
        setCountNOK(result.rates.NOK)
        list.USD = result.rates.USD
        list.GBP = result.rates.GBP
        list.SEK = result.rates.SEK
        list.JPY = result.rates.JPY
        list.NOK = result.rates.NOK     
    }
    return (
        <React.Fragment>
            <ul className="list-group list-group-horizontal justify-content-center">
                        <li className="list-group-item">EURO/USD: {USD}</li>
                        <li className="list-group-item">EURO/GBP: {GBP}</li>
                        <li className="list-group-item">EURO/SEK: {SEK}</li>
                        <li className="list-group-item">EURO/JPY: {JPY}</li>
                        <li className="list-group-item">EURO/NOK {NOK}</li>
                    </ul>
                    <ContainerChildCovertInput currency={list}/>
        </React.Fragment>
        
    )
}

export default ContainerChildListCurrencyTicker

