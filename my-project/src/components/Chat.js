import React, {useState} from "react";
import { AiOutlineUser } from "react-icons//ai";
import SearchBar from "./SearchBar";
import Messages from "./Messages";

const Chat = () => {
      const [data, setData] = useState([
      ]);
      
    function addMessages(message) {
        setData([...data, message]);
    }
    
  return (
    <div className="h-[100%] flex flex-col pt-2 pl-4 relative bg-slate-200">
      <h4 className=" font-semibold text-xl mb-2">Introductions</h4>
      <div className="flex justify-between">
        <p className="text-slate-500 mb-4">
          This Channel Is Company Wide Chatter
        </p>
        <div className="flex mr-5">
          <p className="text-slate-400 mr-4">3|100</p>
          <AiOutlineUser />
        </div>
      </div>
      <hr />
          <Messages
              data={data}
          />
          <SearchBar
              addMessages={addMessages}
          />
    </div>
  );
};

export default Chat;
