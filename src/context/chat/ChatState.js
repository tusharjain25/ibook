import chatContext from "./chatContext";
import React from "react";
import { useState} from "react";


const ChatState = (props) => {
  const host = "http://localhost:5000";
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState();
  

  return (
    <chatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
       host
      }}
    >
      {props.children}
    </chatContext.Provider>
  );
};

export default ChatState;
