import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route } from "react-router-dom"
import App from './App'
import Almedalen from './pages/Almedalen'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/*
    <Router>
      <Route path="/" element={<App />} />
      <Route path="/almedalen" element={<Almedalen />} />

</Router> */}
  </React.StrictMode>,
)
