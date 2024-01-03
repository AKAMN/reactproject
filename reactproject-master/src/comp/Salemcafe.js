import React, { useState } from 'react'
import './mystyle.css'
function Salemcafe() {
  const [stock1, setStock1] = useState(5);
  const [stock2, setStock2] = useState(5);
  const [soldItem, setSoldItem] = useState(0);

  const buy1 = () => {
    if (stock1 > 0) {
      let s1 = stock1;
      setStock1(s1 - 1);
      let si = soldItem;
      setSoldItem(si + 1);
    }
    else {
      setStock1(0);
    }
  }
  const buy2 = () => {
    if (stock2 > 0) {
      let s2 = stock2;
      setStock2(s2 - 1);
      let si = soldItem;
      setSoldItem(si + 1);
    }
    else {
      setStock2(0);
    }
  }



  return (
    <div className='center'>
      <center>
        <h1>Salem Café</h1>
        <table>
          <tr>
            <td>Blueberry Muffins</td>
            <td>In Stock <b>{stock1}</b> </td>
            <td><button onClick={buy1}>Buy Now</button></td>
          </tr>
          <tr>
            <td> Chocolate Chip Cookies</td>
            <td>In Stock <b>{stock2}</b></td>
            <td><button type='button' onClick={buy2}>Buy Now</button></td>
          </tr>

        </table>
        Total Sold Item <b>{soldItem}</b>
      </center>
    </div>
  )
}

export default Salemcafe