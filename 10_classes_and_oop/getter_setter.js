class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value;
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}ts`
    }

    set password(value){
        this._password = value
    }
}

const ts = new User("ts@ai.com", "123abc")
console.log(ts.email);
console.log(ts.password);