

let person = `{
    "name": "Shany",
    "country": "Israel",
    "age": "31"
}`

let personObject = JSON.parse(person);

let blarg = document.getElementById('name');
let age = document.getElementById('age');
let country = document.getElementById('country');

blarg.innerText = personObject.name;
age.innerText = personObject.age;
country.innerText = personObject.country; 