import { useState } from 'react'
import { TaskContainer, TeamContainer, View, ManageTeam } from './index'
const Features = () => {
  const [page, setPage] = useState(1)
  return (
    <div className='min-w-full min-h-screen flex flex-row flex-wrap justify-center items-center gap-x-2 bg-image'>
      <div className='w-[350px] md:w-[400px] min-h-[400px] bg-[#fff] rounded-md border shadow-lg flex flex-col items-start  px-4 py-2  gap-2 justify-between'>
        <TaskContainer name={page === 1 ? "flex" : 'hidden'} />
        <TeamContainer name={page === 2 ? "flex" : 'hidden'} />
        <View name={page === 3 ? "flex" : 'hidden'} />
        <ManageTeam name={page === 4 ? "flex" : 'hidden'} />
        <div className='w-full flex flex-col gap-2 justify-start'>
          <div className='w-full flex flex-row justify-start text-blue-500'>
            {page > 1 ?
              <div className='w-[40%] flex flex-row justify-start items-center text-center text-[12px] cursor-pointer'
                onClick={() => setPage((pre) => pre - 1)}
              >
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
                  </svg>
                </span>
                <span>
                  Back
                </span>
              </div> : ''}
            {page <= 3 ?
              <div className={`flex flex-row justify-start items-center ${page === 1 ? "w-full justify-center" : "w-[50%] justify-start"}`}>

                <button className='flex h-6 rounded-md border-2 border-indigo-500  px-5 py-1 text-[12px] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 bg-blue-500 text-white text-center'
                  onClick={() => setPage((pre) => pre + 1)}

                >
                  Next
                </button>
              </div>
              : ''}
          </div>
          <div className='w-full flex flex-row justify-center items-center gap-x-2'>
            <div className={`${page === 1 ? 'bg-[#b6b3b3] w-3' : 'bg-[#d9d9d9] w-2'} h-2 rounded-full`}></div>
            <div className={`${page === 2 ? 'bg-[#b6b3b3] w-3' : 'bg-[#d9d9d9] w-2'} h-2 rounded-full`}></div>
            <div className={`${page === 3 ? 'bg-[#b6b3b3] w-3' : 'bg-[#d9d9d9] w-2'} h-2 rounded-full`}></div>
            <div className={`${page === 4 ? 'bg-[#b6b3b3] w-3' : 'bg-[#d9d9d9] w-2'} h-2 rounded-full`}></div>
          </div>
        </div>

      </div>
    </div >
  )
}

export default Features