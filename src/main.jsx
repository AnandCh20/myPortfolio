import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/SideBar';
import Home from './pages/Home'; 
// import About from './pages/About'; 
import Projects from './pages/Projects'; 
import Contact from './pages/Contact'; 

const App = () => {
  return (
    <div className="d-flex p-3" style={{ minWidth: '20vw'}}>
      <SideBar />
      <div className="flex-grow-1 p-3">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
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
