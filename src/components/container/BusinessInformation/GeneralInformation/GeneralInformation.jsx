const GeneralInformation = () => {
    return (
        <div className="w-full flex flex-row flex-wrap text-[#526991] justify-center items-center gap-2">
                <div className="w-full md:w-1/3 flex flex-col gap-2">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="name"
                    >
                        Brand Name*
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-[#c2c1c1] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Input Your Brand Name "
                        id="name"
                    />
                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-2">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="brand-type"
                    >
                        Brand Type*
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-[#c2c1c1] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Select Type of your Brand "
                        id="brand-type"
                    />
                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-2">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="street-address"
                    >
                        Street Address*
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-[#c2c1c1] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Input Your Street Address"
                        id="street-address"
                    />
                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-2">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="city"
                    >
                        City*
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-[#c2c1c1] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Input City"
                        id="city"
                    />
                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-2">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="zip-code"
                    >
                        Zip Code*
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-[#c2c1c1] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Input Zip Code"
                        id="zip-code"
                    />
                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-2">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="tax-id"
                    >
                        Tax ID Number*
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-[#c2c1c1] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Input Tax ID Number"
                        id="tax-id"
                    />
                </div>
        </div>
    )
}
export default GeneralInformation;