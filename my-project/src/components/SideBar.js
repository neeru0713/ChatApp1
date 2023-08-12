import React, { useState } from "react";
import ChatName from "./ChatName";

const SideBar = () => {
    const [chatname, setChatname] = useState('');


    function selectedChatname(name) {
        console.log(name);
        setChatname(name)
    }

    
  return (
    <div className="sidebar flex flex-col w-[100%] h-[100%] justify-between">
      <div className="flex h-[20%] w-[89%] p-4 justify-between">
        <div className="h-[4rem] w-[4rem] rounded-full bg-orange-500 text-white flex justify-center items-center relative">
          <div className="text-center">NR</div>
          <div className="h-[16px] w-[16px] rounded-full bg-green-600 border-orange-50 absolute bottom-0 right-1 border-2 border-white"></div>
        </div>
        <div className="flex flex-col w-[75%]">
          <div className="font-semibold text-xl">Rolande Raimondi</div>
          <div className="font-normal mt-1">Research Nurse</div>
        </div>
      </div>
      <div className="flex h-[10%] w-[80%] items-center ml-4">
        <h4 className="w-[70%] font-semibold text-2xl">Conversations</h4>
        <div className="h-[28px] w-[28px] rounded-full border-2 border-slate-400 text-center">
          +
        </div>
      </div>
      <div className="flex flex-col h-[70%] ">
        <ChatName name="Poland Office" selectedChatname={selectedChatname} selected={chatname === "Poland Office"}/>
        <ChatName name="introduction" selectedChatname={selectedChatname} selected={chatname ==="introduction"}/>
        <ChatName name="India Office" selectedChatname={selectedChatname} selected={chatname === "India Office"}/>
      </div>
    </div>
  );
};

export default SideBar;
