import React from "react";

import Token from "../../components/Token/Token";
import useLocalStorage from "../../hooks/useLocalStorage";

import "./Home.css";

function Home() {
  const [tokens, setTokens] = useLocalStorage("tokens");
  if (tokens) {
    return (
      <div className="container">
        <ul>
          <li className="subtitle-container">
            <span className="token-name">Tokens</span>
            <span className="token-balance">Balance</span>
          </li>
          {tokens.map((elem, index) => {
            return (
              <li key={index}>
                <Token id={index} name={elem.name} balance={elem.balance} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Home;
