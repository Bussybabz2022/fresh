import React from 'react'
import './App.css';
import Header from './components/header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Router/Home'
import About from './components/Router/About'
import Contact from './components/Router/Contact'


function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>


      </Routes>

    </Router>
    </>
    
  );
}

export default App;
