import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Books from './pages/Books';
import AddBooks from './pages/AddBooks';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/Books" element={<Books />} />
          <Route path="/AddBooks" element={<AddBooks />} />
        </Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
