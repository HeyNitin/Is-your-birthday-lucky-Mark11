import { useState } from "react";
import "./styles.css";

export default function App() {
  var [luckyNumber, setluckyNumber] = useState(0);
  var [sum, setSum] = useState(0);

  var [message, setMessage] = useState("");

  function dateHandler(event) {
    var dob = event.target.value;
    dob = dob.replaceAll("-", "");
    let sum = 0;

    for (let i = 0; i < dob.length; i++) {
      sum += +Number(dob.charAt(i));
    }
    setSum(sum);
  }

  function luckyNumberHandler(event) {
    var luckyNumber = event.target.value;
    setluckyNumber(luckyNumber);
  }

  function checker() {
    if (sum && luckyNumber) {
      if (sum % luckyNumber === 0) {
        var message = "Your Birthdate is Lucky!";
        setMessage(message);
      } else {
        message = "Your Birthdate is Not Lucky!";
        setMessage(message);
      }
    } else {
      message = "Please enter both fields!";
      setMessage(message);
    }
  }

  return (
    <div className="App">
      <h1>Is Your Birthday Lucky?</h1>

      <div className="dob">
        <h3>Enter Date of Birth:</h3>

        <input type="date" onChange={dateHandler}></input>
      </div>

      <div className="luckyNumber">
        <h3>Enter your lucky number:</h3>
        <input onChange={luckyNumberHandler}></input>
      </div>

      <div className="check">
        <button onClick={checker}>Check</button>
      </div>

      <div>
        <textarea defaultValue={message}></textarea>
      </div>
    </div>
  );
}
