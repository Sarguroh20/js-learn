const accountId = 155443
let accountEmail = "ts@google.com"
var accountPassword = "123456"
accountCity = "Mumbai"
let accountState;

// accountId = 2    // Not allowed
accountEmail = "st@gd.com"
accountPassword = "654321"
accountCity = "Pune"

console.log(accountId);

/*
    Prefer not to use var
    because of issue in block scope & functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])