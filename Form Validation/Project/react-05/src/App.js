import React from 'react'
import RegistrationForm from './ValidationForm/RegistrationForm'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
const App = () => {
  return <>
    <Router>
      <Routes>
        <Route path='/' element={<RegistrationForm />} />
      </Routes>
    </Router>
  </>
}

export default App