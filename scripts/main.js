/* everything between is a comment */
// this is a comment

// image switcher

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pin-up-girl.jpg') {
      myImage.setAttribute('src','images/pin-up-girl-2.jpg');
    } else {
      myImage.setAttribute('src','images/pin-up-girl.jpg');
    }
}

// personalized welcome message

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Enter name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = myName + ', likes\'em most in autumn';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = myName + ', likes\'em most in autumn';
}

myButton.onclick = function() {
  setUserName();
}
