import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";


function App() {
 
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/"   element={<Home/>}>  
          </Route>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/Login"     element={<Login/>}>
          </Route>
          <Route exact path="/Signup"    element={<Signup/>}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
