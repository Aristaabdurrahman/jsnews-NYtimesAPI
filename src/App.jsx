import { BrowserRouter as Router, Routes, Route, redirect } from "react-router-dom";
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './App.css'
import Home from './Pages/Home.jsx';
import User from "./Pages/User.jsx";
import List from "./Pages/DetailPages/List.jsx";


function App() {

  //set starting coin of 100.000
  var getcoins = localStorage.getItem("coins")
  if (getcoins == null) {
    localStorage.setItem('coins', 100000)
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list-articles" element={<List/>} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  )
}

export default App
