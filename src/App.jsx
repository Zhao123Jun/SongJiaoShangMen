import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import ModuleSelect from './pages/ModuleSelect'
import BasicInfo from './pages/BaseInfo'
import ServiceCenter from './pages/ServiceCenter' 
import ExecutionRecord from './pages/ExecutionRecord'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/module-select" element={<ModuleSelect />} />
        <Route path="/basic-info" element={<BasicInfo />} />
        <Route path="/service-center" element={<ServiceCenter />} /> 
        <Route path="/execution-record" element={<ExecutionRecord />} /> 
      </Routes>
    </Router>
  )
}
