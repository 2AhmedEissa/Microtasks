import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Tasks from './components/Tasks';
import Login from './components/Login';
import Signup from './components/SignUp';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <Router basename="/Microtasks">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ContactSection />
    </Router>
  );
}

export default App;
