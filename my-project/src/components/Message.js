import React from 'react'

const Message = ({message}) => {
    return (
      <div className="flex flex-col">
        <div className="w-[12em] flex items-center ">
          <p className="flex justify-center items-center bg-red-400 rounded-full h-[40px] w-[40px] text-white text-lg">
            <p> {message.nickName} </p>
          </p>
          <p className="text-center text-lg font-semibold pl-3">{message.name}</p>
          <p className="text-black text-sm pl-3">{message.date}</p>
        </div>
        <div className="h-[3.5rem] max-w-max bg-white p-2 rounded-tr-lg rounded-br-lg rounded-bl-lg ml-[3.5rem]">
          <p>{message.message}</p>
        </div>
      </div>
    );
}

export default Message