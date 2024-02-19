import { useState } from "react";
import { Input, ProgressDetails, Validatation, useDetails } from "../index";
const ProfileInformation = (props) => {
    const {toggle}=props
    const { currentPage } = useDetails()
    const { addDetails } = useDetails()

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
    
    const data = {
        title: 'Account Information',
        messsage: 'Please, enter information about your company.'
    }
    // console.log(error,details)
    return (
        <div className={`w-full min-h-[300px] ${toggle} flex-row flex-wrap text-[#526991] justify-center items-start gap-3 pt-2 relative`}>
            <ProgressDetails step={currentPage} data={data}/>
            {
                <span className="absolute top-[10px]  text-[red]">
                    {error.error === true ? error.message : ''}
                </span>
            }
            <div className="w-full flex flex-row flex-wrap text-[#526991] justify-center items-center gap-2">
                <Input
                    label="First Name*"
                    placeholder="Input Your First Name"
                    type="text"
                    className={error.type === "fname" && error.error === true ? "border-rose-600" : "border-black/30"}
                    onBlur={(e) => { addValidation(e.target.value, "fname") }}
                />
                <Input
                    label="Last Name*"
                    placeholder="Input Your Last Name"
                    type="text"
                    className={error.type === "lname" && error.error === true ? "border-rose-600" : "border-black/30"}
                    onBlur={(e) => { addValidation(e.target.value, "lname") }}
                />
                <Input
                    label="Email*"
                    placeholder="Input Your Email"
                    type="email"
                    className={error.type === "email" && error.error === true ? "border-rose-600" : "border-black/30"}
                    onBlur={(e) => { addValidation(e.target.value, "email") }}
                />
                <Input
                    label="Phone Number*"
                    placeholder="Input Your Phone Number"
                    type="text"
                    pattern="[0-9]*"
                    maxLength="10"
                    className={error.type === "phone" && error.error === true ? "border-rose-600" : "border-black/30"}
                    onBlur={(e) => { addValidation(e.target.value, "phone") }}
                />
                <Input
                    label="Password*"
                    placeholder="Create Password"
                    type="password"
                    className={error.type === "password" && error.error === true ? "border-rose-600" : "border-black/30"}
                    onBlur={(e) => { addValidation(e.target.value, "password") }}
                />
                <Input
                    label="Confirm Password*"
                    placeholder="Confirm Your Passwordr"
                    type="password"
                    className={error.type === "cpassword" && error.error === true ? "border-rose-600" : "border-black/30"}
                    onBlur={(e) => { addValidation(e.target.value, "cpassword") }}
                />

            </div>
        </div>
    )
}

export default ProfileInformation