import React from "react";
import { AiOutlineUser } from "react-icons//ai";
import SearchBar from "./SearchBar";


const Chat = () => {
  return (
    <div className="h-[100%] flex flex-col pt-2 ml-4 relative">
      <h4 className=" font-semibold text-xl mb-2">Introductions</h4>
      <div className="flex justify-between">
        <p className="text-slate-400 mb-4">
          This Channel Is Company Wide Chatter
        </p>
        <div className="flex mr-5">
          <p className="text-slate-400 mr-4">3|100</p>
          <AiOutlineUser />
        </div>
      </div>
      <hr />
        <SearchBar />
    </div>
  );
};

export default Chat;
