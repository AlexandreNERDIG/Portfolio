import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Mail, Phone, Linkedin, Instagram, GitHub, Download } from 'react-feather';
import Resume from '../Annexe/Poubelle/Resume';
import ContactPage from './components/ContactPage';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import ProjectList from './components/ProjectList';
import ResumeV2 from './components/ResumeV2';
import './App.css'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Resume" element={<ResumeV2 />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/ProjectList" element={<ProjectList />} />
        <Route path='/Test' element={<ContactPage></ContactPage>} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
