import React, { useState } from "react";

function App() {
  //setInterval(getTime, 1000);

  const Time = new Date().toLocaleTimeString();

  function getTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  const [time, setTime] = useState(Time);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
