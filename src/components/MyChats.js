import React, { useContext, useEffect } from "react";
import chatContext from "../context/chat/chatContext";
import { useState } from "react";
import { getSender } from "../config/ChatLogics";
import ChatLoading from "./ChatLoading";
import { AddIcon } from "@chakra-ui/icons";
import { Box, Stack, Text } from "@chakra-ui/layout";
import "react-toastify/dist/ReactToastify.css";
import GroupChatModal from "./GroupChatModal";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { ToastContainer, toast} from "react-toastify";

const MyChats = ({fetchagain}) => {
  const context = useContext(chatContext);
  const { selectedChat, setSelectedChat, chats,setChats,host} = context;
  const [loggedUser, setLoggedUser] = useState();
  const toastOptions = {
    position: "bottom-left",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    isClosable: true,
  };

  const fetchChats = async () => {
    //console.log(user._id);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token'),
        },
      };

      const { data } = await axios.get(`${host}/api/chat/fetchchat`, config);
      setChats(data);
    } catch (error) {
      toast.error( "Failed to Load the chats",toastOptions);
    }
  };

  useEffect(() => {
    setLoggedUser(localStorage.getItem("token"));
    fetchChats();

    // eslint-disable-next-line
  }, [fetchagain]);

  

  return (
    <>
     <Box
      display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
      flexDir="column"
      alignItems="center"
      p={3}
      bg="white"
      w={{ base: "100%", md: "31%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <Box
        pb={3}
        px={3}
        fontSize={{ base: "28px", md: "30px" }}
        fontFamily="Work sans"
        display="flex"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        My Chats
        <GroupChatModal>
          <Button
            display="flex"
            fontSize={{ base: "17px", md: "10px", lg: "17px" }}
            rightIcon={<AddIcon />}
          >
            New Group Chat
          </Button>
        </GroupChatModal>
      </Box>
      <Box
        display="flex"
        flexDir="column"
        p={3}
        bg="#F8F8F8"
        w="100%"
        h="100%"
        borderRadius="lg"
        overflowY="hidden"
      >
        {chats ? (
          <Stack overflowY="scroll">
            {chats.map((chat) => (
              <Box
                onClick={() => setSelectedChat(chat)}
                cursor="pointer"
                bg={selectedChat === chat ? "#38B2AC" : "#E8E8E8"}
                color={selectedChat === chat ? "white" : "black"}
                px={3}
                py={2}
                borderRadius="lg"
                key={chat._id}
              >
                <Text>
                  {!chat.isGroupChat
                    ? getSender(loggedUser, chat.users)
                    : chat.chatName}
                </Text>
                {chat.latestMessage && (
                  <Text fontSize="xs">
                    {/* <b>{chat.latestMessage.sender.username} : </b> */}
                    {chat.latestMessage.content.length > 50
                      ? chat.latestMessage.content.substring(0, 51) + "..."
                      : chat.latestMessage.content}
                  </Text>
                )}
              </Box>
            ))}
          </Stack>
        ) : (
          <ChatLoading />
        )}
      </Box>
     <ToastContainer/>
    </Box>
    </>
  );
};

export default MyChats;
