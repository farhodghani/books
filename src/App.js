import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  } from "react-router-dom";
import Detail from './components/Detail';
import Content from './components/Content';

const App = () => {
  
  return(
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
