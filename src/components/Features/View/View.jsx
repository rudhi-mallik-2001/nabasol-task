import { useState } from "react"

const View = ({ name }) => {
    const [selected, setSelected] = useState('List')
    if (JSON.parse(localStorage.getItem("view") === null)) {
        localStorage.setItem("view", JSON.stringify('List'))
    }
    const handelView = (view) => {
        setSelected(view)
        localStorage.setItem("view", JSON.stringify(view))
    }
    return (
        <div className={`w-full h-full ${name} flex-col pt-4 gap-4`}>
            <div className='text-center text-black-500 font-bold text-[16px]'>
                <p>Select View</p>
            </div>
            <div className='text-center text-[12px]'>
                <p>You can also costomize this view in seting</p>
            </div>
            <div className="w-full flex flex-row gap-2">
                <div className="w-[50%] flex flex-col justify-center items-center  ">
                    <div className={`w-full flex flex-col justify-center items-center border-2  p-4 cursor-pointer ${selected === 'List' ? 'border-indigo-500' : 'border-[#d9d9d9]'} rounded-md`}
                        onClick={() => handelView('List')}
                    >
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="#d9d9d9" className="bi bi-list-task" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z" />
                                <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z" />
                                <path fillRule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z" />
                            </svg>
                        </span>
                    </div>
                    <p>List view</p>
                </div>
                <div className="w-[50%] flex flex-col justify-center items-center">
                    <div className={`w-full flex flex-col justify-center items-center border-2  p-4 cursor-pointer ${selected === 'Board' ? 'border-indigo-500' : 'border-[#d9d9d9]'}  rounded-md`}
                        onClick={() => handelView('Board')}
                    >
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="#d9d9d9" className="bi bi-kanban" viewBox="0 0 16 16">
                                <path d="M13.5 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                <path d="M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z" />
                            </svg>
                        </span>
                    </div>
                    <p>Board view</p>
                </div>

            </div>
        </div>
    )
}

export default View