let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/BDigit.jpeg') {
        myImage.setAttribute('src', 'images/BDigit2.jpeg');
    } else {
        myImage.setAttribute('src', 'images/BDigit.jpeg');
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Business World, welcome ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Business world, welcome ' + storedName;
}

myButton.addEventListener('click', function() {
    setUserName();
});