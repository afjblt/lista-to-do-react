import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Header from './components/Header'

import './App.css'
import Home from './components/Home'
import TaskDetails from './components/TaskDetails'
import Button from './components/Button'

const App = () => {
  return (
    <Router>
      <div className="container">
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/:taskTitle" exact element={<TaskDetails />}/>
          </Routes>
          
      </div>
    </Router>
  )
}

export default App;