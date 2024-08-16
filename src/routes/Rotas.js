import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import Criar from './pages/criar/Criar';


const Rotas = () => {
  return (
    <Router>
        <nav>
            <ul>
                <Link to="/">a</Link>
                <Link to="/criar">a</Link>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/criar" element={<Criar />} />
       </Routes>
    </Router>
    
  )
}

export default Rotas;