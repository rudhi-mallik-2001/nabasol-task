import useDetails from "../../../../context/getDetails"

const Progress = () => {
  const {currentPage} =useDetails()
  const progressBarWidth=currentPage===1?"w-[33.3%]":currentPage===2?"w-[67%]":"w-full"
  const InformationTColor=currentPage>=2?"text-[#EDEEFD]":"text-[#bdc7ed]"
  const AdditionalTColor=currentPage>3?"text-[#EDEEFD]":"text-[#bdc7ed]"

  return (
    <div className="w-full h-[60px] flex flex-row justify-between items-center p-0 relative">
      <div className={`${progressBarWidth} h-full absolute top-0 left-0 z-[-1] bg-gradient-to-r from-[#9fdcfe] to-[#72b0fb] rounded-tl-[20px] rounded-tr-[30px] rounded-br-[30px]`}></div>
      <div className=" w-full h-full absolute top-0 left-0 z-[-2] bg-[#EDEEFD] p-0 rounded-t-[20px] "></div>
      <div className="w-[33.3%] h-full flex flex-row justify-center items-center gap-2 text-[#fbfdfe] text-[12px] md:text-[18px]">
        <span className="inline-block text-center text-[#bdc7ed] h-4 w-4 md:h-6 md:w-6 rounded-full bg-[#fff]">1</span>
        <span>Your Profile</span>
      </div>
      <div className={`w-[33.3%] h-full flex flex-row justify-center items-center gap-2 text-[12px] md:text-[18px] ${InformationTColor}`}>
        <span className="inline-block text-center text-[#bdc7ed] h-4 w-4 md:h-6 md:w-6 rounded-full bg-[#fff]">2</span>
        <span>Business Information</span>
      </div>
      <div className={`w-[33.3%] h-full flex flex-row justify-center items-center gap-2 text-[12px] md:text-[18px] ${AdditionalTColor}`}>
        <span className="inline-block text-center text-[#bdc7ed] h-4 w-4 md:h-6 md:w-6 rounded-full bg-[#fff]">3</span>
        <span>Additional Users</span>
      </div>
    </div>
  )
}

export default Progress