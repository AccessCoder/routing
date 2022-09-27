import React from 'react';
import './App.css';
import HomePage from "./Pages/HomePage";
import {HashRouter, Route, Routes} from "react-router-dom";
import ButtonPage from "./Pages/ButtonPage";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
        <h1> Fancy RouterPage</h1>
      <HashRouter>
          <NavBar/>
          <Routes>
              <Route path={"/"} element={<HomePage/>}/>
              <Route path={"/button"} element={<ButtonPage/>}/>
          </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
