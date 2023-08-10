import React from "react";

const SideBar = () => {
    return (
      <div className="sidebar flex flex-col p-4 w-[100%] h-[100%] justify-between">
        <div className="flex h-[20%] w-[89%] justify-between">
          <div className="h-[4rem] w-[4rem] rounded-full bg-orange-500 text-white flex justify-center items-center relative">
            <div className="text-center">NR</div>
            <div className="h-[16px] w-[16px] rounded-full bg-green-600 border-orange-50 absolute bottom-0 right-1 border-2 border-white"></div>
          </div>
          <div className="flex flex-col w-[75%]">
            <div className="font-semibold text-xl">Rolande Raimondi</div>
            <div className="font-normal mt-1">Research Nurse</div>
          </div>
        </div>
        <div className="flex h-[10%] w-[80%] justify-between ml-5">
          <h4 className="font-semibold text-2xl">Conversations</h4>
          <div className="h-[28px] w-[28px] rounded-full border-2 border-slate-400 text-center">
            +
          </div>
        </div>
        <div className="flex flex-col h-[70%] ">
          <div className="flex w-[48%] justify-between ml-2">
                <div className="h-[40px] w-[40px] bg-slate-400 rounded-lg text-2xl text-center">
                #
                </div>
                <p>Poland Office</p>
          </div>
          <div className="flex h-[50px] w-[100%] justify-between ml-2 bg-blue-500 mt-4">
                <div className=" w-[40px] bg-slate-400 text-white rounded-lg text-2xl text-center">
                #
                </div>
                <p className=" w-[100%] text-white mt-2">
                introductions
                </p>
          </div>
          <div className="flex w-[48%] justify-between ml-2 mt-4">
                <div className="h-[40px] w-[40px] bg-slate-400 rounded-lg text-2xl text-center">
                #
                </div>
                <p>India Office</p>
            </div>
        </div>
      </div>
    );
};

export default SideBar;
