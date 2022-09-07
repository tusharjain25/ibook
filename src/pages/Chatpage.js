import React, { useContext, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import chatContext from '../context/chat/chatContext';
import Chatbox from '../components/Chatbox';
import MyChats from "../components/MyChats";
import Chatdrawer from '../components/Chatdrawer';

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false)
  const context = useContext(chatContext);
  const {user,setUser } = context;
  
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('token')){ 
      setUser('token')
    }else{
        navigate("/");
     }
        // eslint-disable-next-line
    }, [navigate])
 
  return (
    <>
      <div style={{ width: "100%" }}>
      {user && <Chatdrawer />}
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>

    </>
  )
}

export default Chatpage
