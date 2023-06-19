import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./main.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp.jsx'
import Succeess from './components/Succeess.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <BrowserRouter>
      <Routes>
          <Route index element={<SignUp />} />
          <Route path="success" element={<Succeess />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
