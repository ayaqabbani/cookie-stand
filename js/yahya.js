'use strict';
let form=document.getElementById('myform');
form.addEventListener('submit',myFunc);
function myFunc(event){
event.preventDefault();
console.log(event.target.username.value);
}