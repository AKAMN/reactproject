import { React, useState } from "react";
import "./mystyle.css";

var data = require("../data.json");

function Gotaxi() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [carType, setCarType] = useState('');
  const [bookingSlip, setBookingSlip] = useState('');



  const bookNow = async (e) => {
    e.preventDefault();

    let chargePerKm;
    if(value1==="" || value2==="" ||value3===""){
      alert("Please Enter all Details");
      return;

    }
    if (carType === 'Hatchback') {
      chargePerKm = 15;
    } else if (carType === 'Sedan') {
      chargePerKm = 20;
    } else if (carType === 'SUV') {
      chargePerKm = 30;
    }
    else {
      alert("Select Car Type");
      return;
    }

    const distance = 10;
    const totalCharge = distance * chargePerKm;


    const bookingSlipHTML = `
      <h4>Booking Slip</h4>
      <p><bold>Starting Point:</bold> ${value1}</p>
      <p><bold>Destination:</bold> ${value2}</p>
      <p><bold>Pickup Time:</bold> ${value3}</p>
      <p><bold>Car Type:</bold> ${carType}</p>
      <p><bold>Total Charges:</bold> Rs${totalCharge}</p>
    `;
    setBookingSlip(bookingSlipHTML);
  };

  const onChange1 = (event) => {
    setValue1(event.target.value);
  };

  const onChange2 = (event) => {
    setValue2(event.target.value);
  };

  const onChange3 = (event) => {
    setValue3(event.target.value);
  }

  const onSearch1 = (searchTerm) => {
    setValue1(searchTerm);
    console.log("Data", searchTerm);
  };

  const onSearch2 = (searchTerm) => {
    setValue2(searchTerm);
    console.log("Data", searchTerm);
  };

  return (
    <>
      <div className="center">
        <center>
          <h4 className="makeh1center">GoTaxi</h4>
        </center>
        <table>
          <tr>
            <td>
              <span>Starting point:</span>
            </td>
            <td>
              <input
                id="inp"
                type="text"
                value={value1}
                onChange={onChange1}
                placeholder="Enter City Name"
              />
              <div>
                {data
                  .filter((item) => {
                    const searchTerm = value1.toLowerCase();
                    const full_name = item.full_name.toLowerCase();

                    return (
                      searchTerm &&
                      full_name.startsWith(searchTerm) &&
                      full_name !== searchTerm
                    );
                  })
                  .map((item) => (
                    <div
                      onClick={() => {
                        onSearch1(item.full_name);
                      }}
                    >
                      {item.full_name}
                    </div>
                  ))}
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <span>Destination:</span>
            </td>
            <td>
              <input
                id="inp"

                type="text"
                value={value2}
                onChange={onChange2}
                placeholder="Enter City Name"
              />
              <div>
                {data
                  .filter((item) => {
                    const searchTerm = value2.toLowerCase();
                    const full_name = item.full_name.toLowerCase();

                    return (
                      searchTerm &&
                      full_name.startsWith(searchTerm) &&
                      full_name !== searchTerm
                    );
                  })
                  .map((item) => (
                    <div
                      onClick={() => {
                        onSearch2(item.full_name);
                      }}
                    >
                      {item.full_name}
                    </div>
                  ))}
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <span>Date and Time:</span>
            </td>
            <td>
              <input
                id="inp"

                type="datetime-local"
                value={value3}
                onChange={onChange3}

              /></td>


          </tr>
          <tr>
            <td>
              <span>Type of car</span>
            </td>
            <td>
              <select id="select" className="pad" onChange={(e) => setCarType(e.target.value)}>
                <option value="null">Select</option>

                <option value="Hatchback">Hatchback</option>
                <option value="SUV">SUV</option>
                <option value="Sedan">Sedan</option>
              </select>
            </td>
          </tr>
        </table>
        <center>
          <input id="btn" type="button" onClick={bookNow} value={"Book"} />
        </center>
      </div>
      <center>
      <div dangerouslySetInnerHTML={{ __html: bookingSlip }} />

      </center>
    </>
  );
}

export default Gotaxi;
