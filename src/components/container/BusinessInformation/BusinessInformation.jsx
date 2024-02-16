import { GeneralInformation, Documents } from './index'
const BusinessInformation = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-y-2">
            <div className="w-full md:w-[67%] flex flex-col ">
                <h1 className='text-[#58a9fa]'>GENERAL INFORMATION</h1>
            </div>
            <GeneralInformation />
            <div className="w-full md:w-[67%] flex flex-col ">
                <h1 className='text-[#58a9fa]'>DOCUMENTS</h1>
                <p>Once the following documents are signed, you&apos;ll be ready to get started</p>
            </div>
            <div className="w-full md:w-[67%] flex flex-col ">
                <Documents />
            </div>
            <div className="w-full md:w-[67%] flex flex-col ">
                <h1 className='text-[#58a9fa]'>COI POF UPLOAD</h1>
                <p>Once the following documents are signed, you&apos;ll be ready to get started</p>
            </div>
            <div className="w-full md:w-[67%] flex flex-col ">
                <Documents />
            </div>
        </div>
    )
}

export default BusinessInformation