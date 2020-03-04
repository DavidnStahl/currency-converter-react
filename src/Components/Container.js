import 'bootstrap/dist/css/bootstrap.css';
import React from "react"
import '../App.css';


function Container() {
    return (
        <div className="container-css">
                   <p>Currency Converter</p>
                   <ul class="list-group list-group-horizontal justify-content-center">
                        <li class="list-group-item">USD: 10,1841</li>
                        <li class="list-group-item">Eur: 11,3167</li>
                        <li class="list-group-item">GBP: 12,9699</li>
                        <li class="list-group-item">DKK: 1,4912</li>
                        <li class="list-group-item">NOK 1,0685</li>
                    </ul>
        </div>
    )
}
export default Container

