import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
export default function ToggleVisibility({ children }) {

  // React state to manage visibility
  const [show, setShow] = useState();

  // function to toggle the boolean value
  function toggleShow() {
    setShow(!show);
  }
  var buttonText = show ? "Hide Component" : "Show Component";

  return (
    <div className="component-container">
     toggleShow()
      <Button variant="primary"  onClick={toggleShow}>Primary School</Button>
       {show && children}
    </div>
  );
}