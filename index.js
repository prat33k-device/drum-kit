
var buttons = document.querySelectorAll(".drum");

function clicked() {
    alert("I got Clicked!");
}

function changeColor() {
    this.style.color = "white";                
}                                       

function playSound(key) {                                                        // function which plays the sound

    

    switch(key) {

        case "w":
            var tom1Sound = new Audio("sounds/tom-1.mp3");
            tom1Sound.play();
            break;
        
        case "a":
            var tom2Sound = new Audio("sounds/tom-2.mp3");
            tom2Sound.play();
            break;

        case "s":
            var tom3Sound = new Audio("sounds/tom-3.mp3");
            tom3Sound.play();
            break;

        case "d":
            var tom4Sound = new Audio("sounds/tom-4.mp3");
            tom4Sound.play();
            break;

        case "j":
            var snareSound = new Audio("sounds/snare.mp3");
            snareSound.play();
            break;

        case "k":
            var crashSound = new Audio("sounds/crash.mp3");
            crashSound.play();
            break;

        case "l":
            var kickSound = new Audio("sounds/kick-bass.mp3");
            kickSound.play();
            break;

        default:
            console.log("default case in switch statement");             // if some case is missed then it will warn me
            break;

    }
}



function buttonAnimation(keyPress) {                                            // animation function
    document.querySelector("." + keyPress).classList.add("pressed");

    setTimeout(function() {                                                     // calls the anonymous function after 100ms time delay
        document.querySelector("." + keyPress).classList.remove("pressed");
    }, 100);
}




for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        var buttonInnerHtml = this.innerHTML;                          // this will return the identity of object by which the function is called

        playSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });                                                               // listens to click event
}



document.addEventListener("keydown", function (event) {              // keydown eventListener listens to key presses and event tells about the key been pressed
    playSound(event.key);
    buttonAnimation(event.key);

 });