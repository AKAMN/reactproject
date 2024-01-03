import { React, useState } from "react";
import "./mystyle.css";

export default function Housing() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");

  const bookMonth = async (e) => {
    e.preventDefault();
    let sal = parseInt(value1);
    let pos = parseFloat(value2);
    let coh = parseInt(value3);

    if (value1 === "" || value2 === "" || value3 === "") {
      alert("Please Enter all Details");
      return;
    }
    if (pos < 0 || pos > 1) {
      alert("Please Enter Portion of Salary\nBetween 0 to 1 in Point");
      return;
    }

    let pm = sal / 12;
    let x = pm * pos;
    let d = coh / x;

    alert("You have to save salery for " + d + " month");
  };

  const onChange1 = (event) => {
    setValue1(event.target.value);
  };

  const onChange2 = (event) => {
    setValue2(event.target.value);
  };

  const onChange3 = (event) => {
    setValue3(event.target.value);
  };

  return (
    <>
      <div className="center">
        <center>
          <h4 className="makeh1center">Month Calculator</h4>
        </center>
        <table>
          <tr>
            <td>
              <span>Annual Salary:</span>
            </td>
            <td>
              <input
                id="inp"
                type="number"
                value={value1}
                onChange={onChange1}
              />
            </td>
          </tr>
          <tr>
            <td>
              <span>Portion of Salary</span>
            </td>
            <td>
              <input
                id="inp"
                type="number"
                value={value2}
                onChange={onChange2}
              />
            </td>
          </tr>
          <tr>
            <td>
              <span>Cost of Dream Home</span>
            </td>
            <td>
              <input
                id="inp"
                type="number"
                value={value3}
                onChange={onChange3}
              />
            </td>
          </tr>
        </table>
        <center>
          <input id="btn" type="button" onClick={bookMonth} value={"Check"} />
        </center>
      </div>
     
    </>
  );
}
