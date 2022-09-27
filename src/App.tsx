import React, {useState} from 'react';
import './App.css';
import HomePage from "./Pages/HomePage";
import {HashRouter, Route, Routes} from "react-router-dom";
import ButtonPage from "./Pages/ButtonPage";
import NavBar from "./Components/NavBar";

function App() {

    const[input, setInput] = useState("");

  return (
    <div className="App">
        <h1> Fancy RouterPage</h1>
      <HashRouter>
          <NavBar/>
          <p>Make a wish for a buttonName</p>
          <input onChange={(e)=>setInput(e.target.value)}/>
          <Routes>
              <Route path={"/"} element={<HomePage/>}/>
              <Route path={"/button"} element={<ButtonPage name={input}/>}/>
          </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
