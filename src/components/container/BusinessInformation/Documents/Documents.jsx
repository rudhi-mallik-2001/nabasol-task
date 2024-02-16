
const Documents = () => {
    return (
        <div className="w-full flex flex-row flex-wrap text-[#526991] justify-center items-center gap-2">
            <div className="w-full flex flex-row justify-between">
                <div className="w-[93%] rounded-md border p-2">
                    <div className="w-full flex items-center justify-between space-x-4">
                        <div>
                            <p className="text-sm font-medium ">
                                Electronically sign the agreement(s)
                            </p>
                        </div>
                        {/* <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="h-6 w-6 cursor-pointer text-green-600"
                        >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div> */}
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-6 w-6 text-green-600"
                            >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>
                <button className="flex justify-center items-center bg-[#6d55d9] rounded-md px-[7px]">
                    <svg height="26" viewBox="0 0 1792 1792" width="26" fill="white" className="text-[#fff]" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z" />
                    </svg>
                </button>
            </div>
            <div className="w-full flex flex-row justify-between">
                <div className="w-[93%] rounded-md border p-2 flex items-center justify-between space-x-4">
                    <div>
                        <p className="text-sm font-medium ">
                            Electronically sign the agreement(s)
                        </p>
                    </div>
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 cursor-pointer text-red-600"
                        >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                </div>
                <button className="flex justify-center items-center bg-[#6d55d9] rounded-md px-[7px]">
                    <svg height="26" viewBox="0 0 1792 1792" width="26" fill="white" className="text-[#fff]" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Documents