import { useState } from "react";
import { Input, Validatation, useDetails } from "../index";

const GeneralInformation = () => {
    const { addDetails, details } = useDetails()

    const [error, setError] = useState({
        type: "",
        error: false,
        message: ""
    })

    const addValidation = (value, type) => {
        const validate = Validatation(value, type)
        if (validate.error === false) {
            const data = {}
            data[type] = value
            addDetails(data);
            setError({ error: validate.error, message: validate.message, type: type })
        } else
            setError({ error: validate.error, message: validate.message, type: type })
    }
    console.log(details)
    return (
        <div className="w-full flex flex-row flex-wrap text-[#526991] justify-center items-center gap-2 relative">
            {
                <span className="absolute top-[-155px] text-[red]">
                    {error.error === true ? error.message : ''}
                </span>
            }
            <Input
                label="Brand Name*"
                placeholder="Input Your Brand Name "
                type="text"
                className={error.type === "brand-name" && error.error === true ? "border-rose-600" : "border-black/30"}
                onBlur={(e) => { addValidation(e.target.value, "brand-name") }}
            />

            <div className="w-full md:w-1/3 flex flex-col gap-2">
                <label
                    className="flex flex-row gap-x-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="brand-type"
                >
                    Brand Type*
                    <span className="flex flex-row relative tooltip-container" data-tooltip="Local: Brands with distribution in 3 divisions or less OR multiple divisions but a total of 150 stores or less. National: Brands with distribution in 4 or more divisions or in more than 150 stores. 
                    ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-question-circle-fill cursor-pointer" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                        </svg>
                        {/* <span  className="absolute right-[-65px] top-0 p-2 bg-[#516892a3] text-white text-[12px]">
                            he llo jh df ja df dfj ds fj ad sjf jg sd hf
                        </span> */}
                    </span>

                </label>
                <select id="brand-type" name="brand-type" className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm text-[#c2c1c1] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                onBlur={(e) => { addValidation(e.target.value, "brand-type") }} 
                >
                    <option value="" >Select Type of your Brand</option>
                    <option value="nike">Nike</option>
                    <option value="adidas">Adidas</option>
                    <option value="puma">Puma</option>
                    <option value="reebok">Reebok</option>
                </select>
            </div>
            <Input
                label="Street Address*"
                placeholder="Input Your Street Address"
                type="text"
                className={error.type === "street-address" && error.error === true ? "border-rose-600" : "border-black/30"}
                onBlur={(e) => { addValidation(e.target.value, "street-address") }}
            />
            <Input
                label="City*"
                placeholder="Input City"
                type="text"
                className={error.type === "city" && error.error === true ? "border-rose-600" : "border-black/30"}
                onBlur={(e) => { addValidation(e.target.value, "city") }}
            />
            <Input
                label="Zip Code*"
                placeholder="Input Zip Code"
                type="text"
                className={error.type === "zip-code" && error.error === true ? "border-rose-600" : "border-black/30"}
                onBlur={(e) => { addValidation(e.target.value, "zip-code") }}
            />
            <Input
                label="Tax ID Number*"
                placeholder="Input Tax ID Number"
                type="text"
                className={error.type === "tax-id" && error.error === true ? "border-rose-600" : "border-black/30"}
                onBlur={(e) => { addValidation(e.target.value, "tax-id") }}
            />

        </div>
    )
}
export default GeneralInformation;