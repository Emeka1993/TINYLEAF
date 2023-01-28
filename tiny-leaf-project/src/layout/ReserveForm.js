import React, { useState } from "react";
import "../layout/Globals.css"

const ReserveForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [comments, setComments] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  
  };

  return (
    <div className="style-form">
      <h1>Reserve a Table</h1>
      <p>We take bookings for groups up to 6. We get busy on weekends so best to book early to avoid disappointment!</p>
      <form className="reserve-form" onSubmit={handleSubmit}>
        <label>
          Date:
          <input
           className="input-box"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          Time:
          <input
          className="input-box"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
        <br />
        <label>
          Group Size:
          <input
          className="group"
            type="number"
            value={groupSize}
            onChange={(e) => setGroupSize(e.target.value)}
            min="1"
            max="6"
          />
        </label>
        <br />
        <label>
          Name:
          <input
          className="input-box"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Contact Number:
          <input
          className="input-box"
            type="tel"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Comments/Requests:
          <textarea value={comments} onChange={(e) => setComments(e.target.value)} />
        </label>
        <br />
        <label>
          <input
          className="input-box"
            type="checkbox"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
          />
          By requesting this booking, I am accepting Tiny Leaf's Terms and Conditions.
        </label>
        <br />
        <button style={{backgroundColor: "#86907D"}} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReserveForm;
