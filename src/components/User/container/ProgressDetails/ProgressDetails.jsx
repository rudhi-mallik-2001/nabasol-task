
const ProgressDetails = ({step,data}) => {
  return (
    <div className="w-full h-fit flex flex-col justify-between items-center p-0 relative text-[#526991] mt-[35px] text-center">
      <p className="text-[#bdc7ed]">Step {step}</p>
      <h1 className="text-[28px] ">{data.title}</h1>
      <p className="text-[12px]">{data.messsage}</p>
    </div>
  )
}

export default ProgressDetails