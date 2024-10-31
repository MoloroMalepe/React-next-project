import ReactDOM from "react-dom";
import { useState } from "react";
import React from "react";
import "./App.css";

function CongratulationsMessage({ name }) {
  return <p>Congratulations {name}!</p>;
}

function ChangeNameButton({ onChangeName }) {
  return <button onClick={onChangeName}>Change winner</button>;
}

function App() {
  const [name, setName] = useState("Steph");

  React.useEffect(() => {
    document.title = `Celebrate, ${name}!`;
  }, [name]);

  const handleChangeName = () => {
    setName("Lori");
  };

  return (
    <div>
      <CongratulationsMessage name={name} />
      <ChangeNameButton onChangeName={handleChangeName} />
    </div>
  );
}

export default App;
