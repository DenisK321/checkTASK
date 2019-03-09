'use strict'

let logins = ['Sasha', 'Dmitry', 'Ilya'];

let whatIsYourLogin = prompt('What Is your login');

const isLoginValid = (obj)  => !!Oblect.keys(obj).lendth >= 4 && Oblect.keys(obj).lendth <= 16;

console.log(
    isLoginValid(whatIsYourLogin)
);


// const isLoginValid = function(whatIsYourLogin){
//     whatIsYourLogin = whatIsYourLogin.length >= 4 && whatIsYourLogin.length <= 16
//     return whatIsYourLogin
// }

