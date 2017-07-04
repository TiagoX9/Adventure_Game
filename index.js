var user = prompt('Padawan choose your name!').toUpperCase();
var choice = Math.floor(Math.random() * 10);

var jediSith = function () {
    if (choice <= 5) {
        document.getElementById("fate").innerHTML = " Welcome to the Darkside, Darth " + user + " !";
        setTimeout(function () {
                window.location = 'darkside/darkside.html'
            },
            3000);
    } else {
    document.getElementById("fate").innerHTML = " Welcome, master Jedi " + user + " !";
        setTimeout(function () {
                window.location = 'lightside/lightside.html'
            },
            3000);
    }
};