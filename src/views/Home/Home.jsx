import React from "react";
import { useEffect, useState } from "react";

import Token from "../../components/Token/Token";

import "./Home.css";

function Home() {
  const [tokens, setTokens] = useState([]);

  const handleAddFriend = () => {
    setTokens((prevToken) => [
      ...prevToken,
      {
        name: "Random Friend Name",
        age: 20, // Random age
      },
    ]);
  };

  useEffect(() => {
    let id = localStorage.getItem("id");

    for (let i = 1; i <= id; i++) {
      let token = localStorage.getItem(i);

      if (token === null) {
        continue;
      }
      setTokens((prevToken) => [...prevToken, token]);
    }
  }, []);
  return (
    <ul>
      {tokens.map((elem, index) => {
        console.log(elem, index);
        return (
          <li key={index}>
            <Token tokenJson={elem} />
          </li>
        );
      })}
      {/* {console.log(tokens)} */}
    </ul>
  );
}

export default Home;
