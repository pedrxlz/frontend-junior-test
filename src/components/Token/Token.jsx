import React from "react";

import { Link } from "react-router-dom";

function Token(props) {
  const token = JSON.parse(props.tokenJson);
  return (
    <div>
      {/* <Link /> */}
      <span>{token.tokenName}</span>
      <span>{token.balanceValue}</span>
    </div>
  );
}

export default Token;
