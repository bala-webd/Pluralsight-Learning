import React, { useState } from "react";

// function logRandom() {
//   console.log(Math.random());
// }

function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);
  return (
    <div>
      <button onClick={handleClick}>+{props.increment}</button>
    </div>
  );
}

export default Button;
