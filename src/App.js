import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NoteState from "./context/notes/NoteState";
import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Chatpage from "./components/Chatpage";


function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  return (
    <>
      <NoteState>
        <Router>
          <Navbar/>
        <Alert alert={alert}/>
          <Routes>
            <Route exact path="/Home" element={<Home showAlert={showAlert}/>}></Route>
            <Route exact path="/chats" element={<Chatpage showAlert={showAlert}/>}></Route>
            <Route exact path="/" element={<Login showAlert={showAlert}/>}></Route>
            <Route exact path="/Signup" element={<Signup showAlert={showAlert}/>}></Route>
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
