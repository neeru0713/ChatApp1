import React from "react";
import { LiaSmileSolid } from "react-icons/lia";
import { VscSend } from "react-icons/vsc";


const SearchBar = () => {
  

  return (
    <div className="flex absolute bottom-2 w-[100%] border rounded-full border-black p-2">
      <input
        type="text"
        placeholder="Type a message..."
        className="w-[100%] "
      />
      <VscSend className="h-[2rem] w-[2rem] mr-4" />
      <LiaSmileSolid className="h-[2rem] w-[2rem]" />
    </div>
  );
};

export default SearchBar;
