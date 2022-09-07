import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoteState from "./context/notes/NoteState";
import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import ChatState from "./context/chat/ChatState";
import Chatpage from "./pages/Chatpage";



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
    <ChatState>
      <NoteState>
       
      <Navbar/>
            <Alert alert={alert}/>
        <div className="app">
          <Routes>
          
            <Route exact path="/Home" element={<Home showAlert={showAlert}/>}></Route>
            <Route exact path="/Chatpage" element={<Chatpage showAlert={showAlert}/>}></Route>
            <Route exact path="/" element={<Login showAlert={showAlert}/>}></Route>
            <Route exact path="/Signup" element={<Signup showAlert={showAlert}/>}></Route>
          </Routes>
          </div>
      </NoteState>
      </ChatState>
    </>
  );
}

export default App;
