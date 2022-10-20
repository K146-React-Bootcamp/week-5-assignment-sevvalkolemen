import React, { useState } from "react";

function Counter({ data }) {
  const [number, setNumber] = useState(0);
  console.log("Counter Componenti Render Edildi");
  return (
    <div className="d-flex align-items-center flex-column">
      <h2>{number}</h2>
      <button
        className="btn btn-secondary"
        onClick={() => setNumber(number + 1)}
      >
        Click
      </button>
      <br />
      <code>{JSON.stringify(data.name)}</code>
    </div>
  );
}

export default Counter;
