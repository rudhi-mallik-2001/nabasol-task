const Validatation = (value, type) => {
    let ans = {}
    switch (type) {
        case 'fname':
            var fname = /^[a-zA-Z]+$/;

            // Check if the name matches the pattern
            if (fname.test(value)) {
                ans = {
                    error: false,
                    message: ''
                }
            } else {
                ans = {
                    error: true,
                    message: "Enter valid First name"
                }
            }
            break;
        case 'lname':
            var lnamePattern = /^[a-zA-Z]+$/;

            // Check if the name matches the pattern
            if (lnamePattern.test(value)) {
                ans = {
                    error: false,
                    message: ''
                }
            } else {
                ans = {
                    error: true,
                    message: "Enter valid Last name"
                }
            }
            break;
        case 'phone':
            var phonePattern = /^[6-9]\d{9}$/;
            if (phonePattern.test(value)) {
                ans = {
                    error: false,
                    message: ''
                }
            } else {
                ans = {
                    error: true,
                    message: "Enter valid Phone Number"
                }
            }
            break;
        case 'password':
            var passwordpattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[a-zA-Z]).{8,}$/;

            // Check if the password matches the pattern
            if (passwordpattern.test(value)) {
                ans = {
                    error: false,
                    message: ''
                }
            } else {
                ans = {
                    error: true,
                    message: "Enter valid Password"
                }
            }
            break;
        case 'cpassword':
            var cpasswordpattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[a-zA-Z]).{8,}$/;
            // Check if the password matches the pattern
            if (cpasswordpattern.test(value)) {
                ans = {
                    error: false,
                    message: ''
                }
            } else {
                ans = {
                    error: true,
                    message: "Enter valid Password"
                }
            }
            break;
        case 'email':
            var emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailpattern.test(value)) {
                ans = {
                    error: false,
                    message: emailpattern.test(value)
                }
            } else {
                console.log(value)
                ans = {
                    error: true,
                    message: "Enter valid Email"
                }
            }
            break;
        default:
            break;
    }
    return ans;
}

export default Validatation;