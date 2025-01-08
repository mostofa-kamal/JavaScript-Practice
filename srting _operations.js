   // how to add or concatenate strings

let myName = "Md Mostofa";
let yourName = "Tahidur Rahman";

// var fullName = myName + ' ' +yourName;
    
let age = 30;

document.write("My name: " + myName + "<br>" + "My age: " + age);

document.write(`<h1> MY NAME  ${myName.toUpperCase()} MY AGE: ${age} </h1>`);

document.write("<h1> your name: " + yourName.toLowerCase()+ "</h2><br>");

let client = 'YesBank';

document.write(client.toLowerCase() == 'yesbank');

document.write('<br><br>');

document.write(`CLIENT NAME IS ${client.toUpperCase()}`);

document.write('<br><br>');

document.write(`<input type="text" value="${myName}">`);

document.write('<br><br>');

// Library functions for string

let firstName = prompt('Enter your name');

document.write(`Entered name: ${firstName}`);


// document.write(String(age).length);
