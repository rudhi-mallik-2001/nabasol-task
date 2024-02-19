
const ProgressDetails = ({step}) => {
  return (
    <div className="w-full h-fit flex flex-col justify-between items-center p-0 relative text-[#526991] mt-[35px] text-center">
      <p className="text-[#bdc7ed]">Step {step}</p>
      <h1 className="text-[28px] ">Business Information</h1>
      <p>Please, enter information about your company.</p>
    </div>
  )
}

export default ProgressDetails