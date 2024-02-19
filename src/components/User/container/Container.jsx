import { useState } from 'react'
import { Progress, ProgressDetails, BusinessInformation, ProfileInformation, useDetails, checkDetails } from './index'
import { Link } from 'react-router-dom'
const Container = () => {
  const { currentPage, nextPage, prevPage, details } = useDetails()
  const [error, setError] = useState({ error: false, message: "" })
  const openStepTow = () => {
    const keys = ['fname', 'lname', 'password', 'cpassword', 'phone', 'email']
    console.log(details)
    if (details.password === details.cpassword) {
      if (checkDetails(details, keys)) {
        nextPage();
        setError({ error: false, message: '' })
      }
      else {
        setError({ error: true, message: "All * Fields are Important" })
      }
    }else{
      setError({ error: true, message: "Password must be equal as Confirm Password" })
    }
  }
  const openStepOne = () => {
    prevPage();
  }
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-full md:w-[80%] p-2 md:p-0 drop-shadow-lg flex flex-col rounded-[20px]'>
        <Progress />
        <div className='w-full p-2 bg-[#fff] flex flex-col gap-2 pb-[3rem] rounded-b-[20px] relative'>
          
          {
            <span className="absolute top-0 text-[red]">
              {error.error === true ? error.message : ''}
            </span>
          }
          { <ProfileInformation  toggle={currentPage===1?'flex':'hidden'}/>}
          { <BusinessInformation  toggle={currentPage===2?'flex':'hidden'}/>}
        </div>
        <div className='w-full bg-[#FFF] p-2 rounded-lg flex flex-row justify-between items-center  my-3'>
          <div className='w-[50%] flex flex-row justify-start items-center'>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="left-arrow" fill='#72b0fb'>
                <path d="m12.3 17.71 6.486 6.486a1 1 0 0 0 1.414-1.414L14.418 17l5.782-5.782a1 1 0 0 0-1.414-1.414L12.3 16.29a.997.997 0 0 0-.292.71c0 .258.096.514.292.71z"></path></svg>
            </span>
            <Link to="/" className='font-bold text-[#72b0fb]'>Back to Login</Link>
          </div>
          <div className='w-[50%] flex flex-row justify-end items-center gap-2'>
            {currentPage > 1 && <button
              onClick={() => openStepOne()}
              className='border-2 border-[#72b0fb] text-[#72b0fb] px-[15px] py-2 rounded-md flex flex-row justify-end items-center'>
              Previous Step
              <span>
                <svg height="26" viewBox="0 0 1792 1792" width="26" fill="white" className="text-[#fff]" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z" />
                </svg>
              </span>
            </button>}
            {currentPage < 2 && <button
              onClick={() => openStepTow()}
              className='bg-[#6d55d9] text-[#fff] px-[15px] py-2 rounded-md flex flex-row justify-end items-center'>
              Next Step
              <span >
                <svg height="26" viewBox="0 0 1792 1792" width="26" fill="white" className="text-[#fff]" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z" />
                </svg>
              </span>
            </button>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container