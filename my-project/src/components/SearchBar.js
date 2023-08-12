import React,
{ useState } from "react";
import { LiaSmileSolid } from "react-icons/lia";
import { VscSend } from "react-icons/vsc";

const SearchBar = ({addMessages}) => {
    const [inputValue, setInputValue] = useState("");
    
    const handleInputChange = (event) => {
        console.log(inputValue);
      setInputValue(event.target.value);
    };

    const createMessage = () => {
        setInputValue('')
        const d = new Date();
        const h = d.getHours();
        const m = d.getMinutes();

        const t = h + ":" + m;
        const names = ["Ritish", "Neeru", "Titin", "Ragu", "Danu"]
        const index = Math.floor(Math.random() * 5);

        let obj = {
          nickName: "JS",
          name: names[index],
          date: t,
            message: inputValue,
          
        };

      addMessages(obj);
    };


  return (
    <div className="flex absolute bottom-2 w-[95%] border rounded-full border-black p-2">
      <input
        value={inputValue}
        onChange={handleInputChange}
        type="text"
        placeholder="Type a message..."
        className="w-[100%] bg-transparent outline-none"
      />
      <VscSend 
      onClick={createMessage}
      className="h-[2rem] w-[2rem] mr-4" />
      <LiaSmileSolid className="h-[2rem] w-[2rem]" />
    </div>
  );
};

export default SearchBar;
