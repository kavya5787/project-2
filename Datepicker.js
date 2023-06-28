import React, { useState } from "react";

function MyDatePicker() {
  const [date, setDate] = useState();
  console.log("date", date);
  return (
    <>
      <div id="about" className="block aboutBlock">
        <div className="container-fluid">
          <div className="titleHolder"></div>
          <h1> Selected Date : {date}</h1>
          <input type="date" onChange={(e) => setDate(e.target.value)} />
        </div>
      </div>
    </>
  );
}

export default MyDatePicker;
