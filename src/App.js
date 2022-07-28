import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NoteState from "./context/notes/NoteState";


function App() {
  return (
    <>
      <NoteState>
        <Router>
         
          <Routes>
            <Route exact path="/Home" element={<Home />}></Route>
            <Route exact path="/" element={<Login />}></Route>
            <Route exact path="/Signup" element={<Signup />}></Route>
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
