import 'bootstrap/dist/css/bootstrap.css';
import React from "react"
import '../App.css';
import ContainerChildListCurrencyTicker from './ContainerChildListCurrencyTicker';
import ContainerChildCovertInput from './ContainerChildCovertInput';


function Container() {
    return (
        <div className="container-css">
            <p>Currency Converter</p>
            <ContainerChildListCurrencyTicker/>
        </div>
    )
}
export default Container

