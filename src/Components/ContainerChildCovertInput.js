import React, { useState} from 'react'

function ContainerChildCovertInput(props) {
    const [currency, setCurrency] = useState(0);
    const [number, setNumber] = useState(0);
    const [numberToCalculate, setCalculate] = useState(0);
    const [currencyName, setCurrencyName] = useState("");

    const items = [];

    function eventHandler(){      
        setCalculate(number*currency);
    }

    function handleSelectChange(e){

        if (e.target.options[e.target.selectedIndex].text !== "Choose Currency")
        {
             setCurrencyName(e.target.options[e.target.selectedIndex].text)
        }
        
        setCurrency(e.target.value)
    }

    for (const name in props.currency)
    {
        items.push(<option value={props.currency[name]}>{name}</option>)
    } 
    return (
        <div>
        <input id="inputfield" type="number" placeholder={number} onChange={e => setNumber(e.target.value)}/>
            <label>Covert input from Euro to</label>
            <select   placeholder="Choose Currency"  onChange={handleSelectChange}>
            <option value={0}>Choose Currency</option>
                {items}
            </select>           
            <button onClick={eventHandler}>Convert</button>
            <span>{" " + numberToCalculate + " " + currencyName}</span>
        </div>
    )
}

export default ContainerChildCovertInput




