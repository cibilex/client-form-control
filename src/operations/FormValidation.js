import InputControl from "./inputControl"

class FormValidation{
    constructor(email,password){
        this.email=email,
        this.password=password
    }
    emailControl(){
        if(!InputControl.emailMatch(this.email))  return "pls enter a valid email"
    }
    passwordControl(){
        if(!InputControl.passwordGreater(this.password)) return "password must be greater than 3"
        if(!InputControl.passwordLesser(this.password)) return "password must be lesser than 30"
    }
    lastValidation(){
        const error={}
        if(!this.email)error.email="pls enter a email"
        if(!this.password)error.password="pls enter a password"
        return error
    }
}


export default FormValidation   