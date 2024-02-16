import { Progress, ProgressDetails, BusinessInformation, ProfileInformation } from './index'
const Container = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-full md:w-[80%] p-2 md:p-0 drop-shadow-lg flex flex-col rounded-[20px]'>
        <Progress />
        <div className='w-full p-2 bg-[#fff] flex flex-col gap-2 pb-[3rem] rounded-b-[20px]'>
          <ProgressDetails />
          {/* <BusinessInformation /> */}
          <ProfileInformation />
        </div>
        <div className='w-full h-[100px] p-2 md:p-0  flex flex-row justify-between items-center '>
          <div className='w-[50%] flex flex-row justify-start items-center'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="left-arrow"><path d="m12.3 17.71 6.486 6.486a1 1 0 0 0 1.414-1.414L14.418 17l5.782-5.782a1 1 0 0 0-1.414-1.414L12.3 16.29a.997.997 0 0 0-.292.71c0 .258.096.514.292.71z"></path></svg>
            </div>
            <p className='font-bold'>Back to Login</p>
          </div>
          <div className='w-[50%]'>
            <button>Next Step</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container