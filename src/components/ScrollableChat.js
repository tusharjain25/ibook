import { Avatar } from "@chakra-ui/avatar";
import { Tooltip } from "@chakra-ui/tooltip";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../config/ChatLogics";
import chatContext from "../context/chat/chatContext";
import React, { useContext } from "react";


const ScrollableChat = ({messages }) => {
    const context = useContext(chatContext);
    const {user} = context;

  return (
      <>
      <InfiniteScroll  dataLength={messages.length}>
        {isSameSender && isSameUser && messages &&
          messages.map((m, i) => (
            <div style={{ display: "flex" }} key={m._id} >
              {(isSameSender(messages, m, i, user._id) ||
                isLastMessage(messages, i,user._id)) && (
                <Tooltip label={m.sender.username} placement="bottom-start" hasArrow>
                  <Avatar
                    mt="7px"
                    mr={1}
                    size="sm"
                    cursor="pointer"
                    name={m.sender.username}
                    src={m.sender.pic}
                  />
                </Tooltip>
              )}
          
                  {
                    user && <span
                    style={{
                      // backgroundColor: `${
                      //   m.sender._id === user._id ? "#BEE3F8" : "#B9F5D0"
                      // }`,
                      marginLeft: isSameSenderMargin(messages, m, i, user._id),
                      marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
                      borderRadius: "20px",
                      padding: "5px 15px",
                      maxWidth: "75%",
                    }}
                  >
                    {m.content}
                  </span>
                  }
              
            </div>
          ))}
      </InfiniteScroll>
     </>
    
  );
};

export default ScrollableChat;