import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes , Route} from "react-router-dom"; 
import Home from './components/Home';
import Update from './components/Update';
import Create from './components/Create';
function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/edit/:id' element={<Update/>}/>
        </Routes>
      </Router>
  )
} 

export default App