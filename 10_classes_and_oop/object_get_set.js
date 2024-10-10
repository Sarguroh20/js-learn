const User = {
    _email : 'coffee@cof.com',
    _password: 'abc',

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    }
}

// Factory Function
const tea = Object.create(User)
console.log(tea.email);

// ( _ Underscore ) refers to private property...