const checkDetails=(details,keys)=>{
    for (var i = 0; i < keys.length; i++) {
        if (!details.hasOwnProperty(keys[i])) {
            return false;
        }
    }
    return true;
}

export default checkDetails;