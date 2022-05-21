import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage'
import IssuePage from './pages/IssuePage'
import ErrorPage from './pages/ErrorPage'
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import './css/app.css'

function App() {

  const [user, setUser] = useState('')

  useEffect(() => {
    (
      async () => {
        const response = await fetch('http://127.0.0.1:8000/user', {
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        })
        const content = await response.json()
        setUser(content.name)
      }
    )()
  })

  return (
    <div className='container-fluid wrapper'>
      <Router>
        <Nav user={user} setUser={setUser}/>
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/projects" element={<ProjectPage user={user} />} />
          <Route path="/issues" element={<IssuePage user={user} />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
