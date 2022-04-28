import React from "react";

import { useParams } from "react-router-dom";

function Math() {
  const { a, b } = useParams();
  console.log("What are params", a, b, typeof a, typeof b);
  return (
    <div>
      Math Time!!!
      <br></br>
      {a} + {b} = {Number(a) + Number(b)}
    </div>
  );
}

export default Math;
