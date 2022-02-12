import React, { useState } from "react";

function App() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);



  function handleChange(e) {
    const newValue = e.target.value;
    setInputText(newValue);
  }
  
  function addItem(e) {
    e.preventDefault();
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      
      <div className="form">
      <form>
        <input type="text" value={inputText} onChange={handleChange}/>
        <button type="submit" onClick={addItem}>
          <span>Add</span>
        </button>
        </form>

      </div>
      <div>
        <ul>
          {items.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>

    </div>
    
  );
}

export default App;