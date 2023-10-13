import "./App.css";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your name: ${name}\n Your email Email: ${email}`);
  };
  return (
    <div className="App">
      <h1>React input and forms - task#4</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name :
          <input type="text" name="name" value={name} onChange={handleInputChanges}
          />
        </label>
        <br />
        <label>
          Email :
          <input type="email" name="email" value={email} onChange={handleInputChanges}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default App;
