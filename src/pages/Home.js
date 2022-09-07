import React from "react";

import Chatpage from "./Chatpage";
//import Notes from "./Notes";
//import { useNavigate } from "react-router-dom";


const Home = (props) => {
 // const navigate = useNavigate();
  const {showAlert}=props;

  // const handleClick=(e)=> {
  //   e.preventDefault();
  //   navigate('/Chatpage')
  // }
  return (
    <>
      <div >
        {/* <Notes showAlert={showAlert} /> */}
       <Chatpage  showAlert={showAlert}/>
       {/* <button type="button" className="btn btn-primary" onClick={handleClick}>chatting</button> */}
      </div>
    </>
  );
};

export default Home;
