import React, { useState } from "react";
import "../layout/Form.css"


function ReserveForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [comments, setComments] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ date, time, groupSize, name, contactNumber, comments });
  };


    return (
      <>
        <div className="title-subtitle">
          <h2>Reserve a Table</h2>
          <p>We take bookings for groups up to 6. We get busy on weekends so best to book early to avoid disappointment!</p>
        </div>
        <div className="center-form">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                className="form-date"
                type="text"
                placeholder="Date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
              <input
                className="form-time"
                type="text"
                placeholder="Time"
                value={time}
                onChange={(event) => setTime(event.target.value)}
              />
              <input
                className="form-text"
                type="text"
                placeholder="Group Size"
                value={groupSize}
                onChange={(event) => setGroupSize(event.target.value)}
              />
            </div>
            <div>
              <input
                className="form-name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <input
                className="form-number"
                type="text"
                placeholder="Contact Number"
                value={contactNumber}
                onChange={(event) => setContactNumber(event.target.value)}
              />
            </div>
            <div>
              <textarea
                className="form-comment"
                placeholder="Comments/Requests"
                value={comments}
                onChange={(event) => setComments(event.target.value)}
              />
            </div>
            <div>
              <input
                className="checkbox-box"
                type="checkbox"
                checked={acceptTerms}
                onChange={(event) => setAcceptTerms(event.target.checked)}
              />
              By requesting this booking, I am accepting Tiny Leaf's Terms and Conditions.
            </div>
            <button type="submit" className="button">
              Reserve
            </button>
          </form>
        </div>
      </>
    );
}

export default ReserveForm;
