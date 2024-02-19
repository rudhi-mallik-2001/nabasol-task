const Validatation = (value, type) => {
    let ans = {}
    switch (type) {
        case 'brand-name':
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
                    message: "Enter valid Brand Name"
                }
            }
            break;
        case 'street-address':
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
                    message: "Enter valid Street Address"
                }
            }
            break;
        case 'zip-code':
            var phonePattern = /^\d{6}$/;
            if (phonePattern.test(value)) {
                ans = {
                    error: false,
                    message: ''
                }
            } else {
                ans = {
                    error: true,
                    message: "Enter Zip Code"
                }
            }
            break;
        case 'city':
            var passwordpattern = /^[a-zA-Z]+$/;

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
        case 'tax-id':
            var taxIDPattern = /^\d{9}$/
            // Check if the password matches the pattern
            if (taxIDPattern.test(value)) {
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
        case 'brand-type':
            var brandType = /^[a-zA-Z]+$/;
            if (brandType.test(value)) {
                ans = {
                    error: false,
                    message: ''
                }
            } else {
                ans = {
                    error: true,
                    message: "Select valid Brand Type"
                }
            }
            break;
        default:
            break;
    }
    return ans;
}

export default Validatation;