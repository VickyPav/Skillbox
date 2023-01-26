var myName = prompt('What is your name?');
var mySurname = prompt('Enter your last name')
var myBirthYear = prompt ('Enter your year of birth');
var currentYear = 2023;
var age = currentYear - myBirthYear;
if (age < 20) {
    alert ('Hi, ' + myName +' '+ mySurname +'!');
}
else if (age>+20 && age<40) {
    alert ('Hello, ' + myName +' '+ mySurname + '.');
}
else {
    alert ('Good afternoon, '+ myName +' '+ mySurname + '.')
}

