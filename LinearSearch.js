const users = [
    { name: 'kishor', email:'kris@gmail.com'},
    { name: 'Bishal', email:'bish@gmail.com'},
    { name: 'Parkash', email:'Parkash@gmail.com'},
    { name: 'Moanoj', email:'manoj@gmail.com'},
    { name: 'shikhar', email:'shikhar@gmail.com'},
];

function isUserExist(users, val) {
    for (let user of users) {
        if(user.name === val ) {
            return true;
        }
    }
    return false;
}

let result = isUserExist(users,'kishor')
console.log(result)


// console.log(users)
