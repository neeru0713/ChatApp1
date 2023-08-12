import React from "react";

const ChatName = ({ name, selectedChatname, selected }) => {
  function handleClick(e) {
    selectedChatname(e.target.innerText);
  }

  return (
    <div
      className={`flex items-center h-[8%] mb-3 py-1 h-[3rem] pl-2 cursor-pointer ${
        selected ? "bg-blue-500 text-white" : ""
      }`}
      >
          
      <div className="w-[12%] h-[80%] bg-slate-400 rounded-lg text-2xl text-center">
        <p>#</p>
      </div>
      <p className="h-100 w-100 text-lg pl-4 " onClick={handleClick}>
        {name}
      </p>
    </div>
  );
};

export default ChatName;
