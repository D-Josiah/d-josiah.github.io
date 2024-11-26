import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Index from './Index.jsx';
import Login from './Login.jsx';
import SignIn from './SignIn.jsx';
import About from './About.jsx';
import Footer from './Footer.jsx';

import './scss/style.css';
import ClinicApt from './ClinicApt.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/ClinicApt" element={<ClinicApt />} />
      </Routes>
      
    
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
