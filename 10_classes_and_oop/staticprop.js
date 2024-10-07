class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`); 
    }

    static createId(){
        return `123`;
    }
}

const ts = new User("TS")
// console.log(ts.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const st = new Teacher("st", "st@newmail.com")
st.logMe();
console.log(st.createId())