import React from "react";
import Navbar from "./Navbar";
import Notes from "./Notes";
// import Alert from "./Alert";

const Home = () => {
  return (
    <>
      {/* <Alert msg="this is a amazing website"/> */}
      <Navbar />
      <div className="container">
        <Notes />
      </div>
    </>
  );
};

export default Home;
