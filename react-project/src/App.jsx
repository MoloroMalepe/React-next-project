import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./App.css";

function App() {
  // Initialized as an empty array
  const [data, setData] = useState([]);

  //using useEffect to fetch the data from the api
  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((response) => response.json())
      .then((res) => setData(res));
    // .then( setData);
  });
  if (data) {
    return (
      <ul>
        {data.map((user) => (
          <li>{user.message}</li>
        ))}
      </ul>
    );
  }
  return <p>No users</p>;
}

export default App;
