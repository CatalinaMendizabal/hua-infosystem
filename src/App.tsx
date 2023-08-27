import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./screens/home";
import Record from "./screens/record";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/record" element={<Record />} />
        <Route path="/results" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
