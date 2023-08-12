import React from "react";
import Message from "./Message";

const Messages = ({data}) => {


  return ( 
    <div>
      {data.map((item) => (
          <Message
           message={item}
          />
      ))}
    </div>
  );
};

export default Messages;
 
