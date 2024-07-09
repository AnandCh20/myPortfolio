import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/SideBar';
import Home from './pages/Home';  
import Projects from './pages/Projects'; 
import Contact from './pages/Contact'; 
import './main.css'

const App = () => {
  return (
    <div id="container1">
      <SideBar />
      <div className="p-3">
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
