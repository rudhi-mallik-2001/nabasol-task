
const ProfileInformation = () => {
    return (
        <div className="w-full min-h-[300px] flex flex-row flex-wrap text-[#526991] justify-center items-start gap-2 pt-8">
            <div className="w-full flex flex-row flex-wrap text-[#526991] justify-center items-center gap-2">
                <div className="w-full md:w-1/3 flex flex-col gap-2">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="first-name"
                    >
                        First Name*
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-[#c2c1c1] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Input Your First Name"
                        id="first-name"
                    />
                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-2">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="brand-type"
                    >
                        Last Name*
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-[#c2c1c1] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Input Your Last Name "
                        id="last-name"
                    />
                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-2">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="email"
                    >
                        Email*
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-[#c2c1c1] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Input Your Email"
                        id="email"
                    />
                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-2">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="phone"
                    >
                        Phone Number*
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-[#c2c1c1] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Input Your Phone Number"
                        id="phone"
                    />
                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-2">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="Password"
                    >
                        Password*
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-[#c2c1c1] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Create Password"
                        id="Password"
                    />
                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-2">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="password-conf"
                    >
                        Confirm Password*
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-[#c2c1c1] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Confirm Your Passwordr"
                        id="password-conf"
                    />
                </div>
            </div>
        </div>
    )
}

export default ProfileInformation