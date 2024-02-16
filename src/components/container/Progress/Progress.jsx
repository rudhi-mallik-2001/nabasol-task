
const Progress = () => {
  return (
    <div className="w-full h-[60px] flex flex-row justify-between items-center p-0 relative">
      <div className="w-[64%] h-full absolute top-0 left-0 z-[-1] bg-gradient-to-r from-[#9fdcfe] to-[#72b0fb] rounded-tl-[20px] rounded-tr-[30px] rounded-br-[30px]"></div>
      <div className=" w-full h-full absolute top-0 left-0 z-[-2] bg-[#EDEEFD] p-0 rounded-t-[20px] "></div>
      <div className="w-[33.3%] h-full flex flex-row justify-center items-center gap-2 text-[#fbfdfe]">
        <span className="inline-block text-center text-[#bdc7ed] h-6 w-6 rounded-full bg-[#fff]">1</span>
        <span>Your Profile</span>
      </div>
      <div className="w-[33.3%] h-full flex flex-row justify-center items-center gap-2 text-[#EDEEFD]">
        <span className="inline-block text-center text-[#bdc7ed] h-6 w-6 rounded-full bg-[#fff]">2</span>
        <span>Business Information</span>
      </div>
      <div className="w-[33.3%] h-full flex flex-row justify-center items-center gap-2 text-[#bdc7ed]">
        <span className="inline-block text-center text-[#bdc7ed] h-6 w-6 rounded-full bg-[#fff]">3</span>
        <span>Additional Users</span>
      </div>
    </div>
  )
}

export default Progress