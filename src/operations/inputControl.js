class InputControl{
    static emailMatch(email){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       return re.test(String(email).toLowerCase())
    }
    static passwordGreater(password){
        return password.length>3
    }
    static passwordLesser(password){
       return password.length<30
    }
}


export default InputControl