// src/App.js

import React from "react";
import Otp from "./Otp";
import "./App.css"; // You can remove this if you don't have additional styling

function App() {

  const handleOtpSubmit = (otp) => {
    alert(`Submitted OTP: ${otp}`);
    // You can replace the alert with your authentication logic
  };

  return (
    <div className="App">
      <Otp length={4} onSubmit={handleOtpSubmit} />
    </div>
  );
}

export default App;