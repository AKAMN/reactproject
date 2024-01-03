import React, { useState } from 'react'
import './mystyle.css'
function Electricbill() {
    const [htmldata, sethtml] = useState("");
    const [unit, setUnit] = useState(0);

    const onchange = (event) => {
        setUnit(event.target.value);
    }

    const calculate = () => {
        let x = unit;
        let total = 0;

        if (x < 101) {
            total = 0;
        }
        if (x > 100 && x < 201) {
            total = 100;
            if (x > 150) {
                total = 100 + (x - 150) * 3.75;
            }
        }
        if (x > 200 && x < 401) {
            total = 250;
            if (x > 350) {
                total = 250 + (x - 350) * 4;
            }
        }
        if (x > 400 && x < 601) {
            total = 300;
            if (x > 450) {
                total = 300 + (x - 450) * 4.25;
            }
        }
        if (x > 600) {
            total = 400 + (x - 600) * 5;
        }

        const hdata = `
        <table>
        <tr><td>Consumed Units:</td><td>${x}</td></tr>
        <tr><td>Total Current Charges Rs. </td><td>${total}</td></tr>
        <tr><td>Current Charges Rs.</td><td>${total}</td></tr>
        <tr><td>Fixed Cost Rs.(+) </td><td>50</td></tr>
        <tr><td>Subsidy Fixed Cost Rs.(-) </td><td>00.00</td></tr>
        <tr><td>New Subsidy Rs.(-) </td><td>250.0</td></tr>
        <tr><td>Net Amount Rs. </td><td>${total}</td></tr>
        </table>
        `
        sethtml(hdata);

    }
    return (
        <div className='center'>
            <center>
                <input type="number" onChange={onchange} placeholder='Enter Consumption Unit ' />
                <button type='button' onClick={calculate}>Calculate</button>
                <div dangerouslySetInnerHTML={{ __html: htmldata }} />

            </center>
        </div>
    )
}

export default Electricbill;

