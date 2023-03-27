// Loading Screen Animation

const loadingScreen = document.getElementById('loadingScreen');
const loadingNoodle = document.getElementById('loadingNoodle');

const noodleSpin = [
    { transform: 'rotate(0deg)'},
    { transform: 'rotate(215deg)'},
    { transform: 'rotate(180deg)'},
    { transform: 'rotate(145deg)'},
    { transform: 'rotate(180deg)'},

];

const noodleTiming = {
    duration: 1500,
    iterations: Infinity,
}

loadingNoodle.animate(noodleSpin, noodleTiming);

// Page Load Event Listener for Loading Screen

document.onreadystatechange = function() {
    setTimeout(function() {
        if (document.readyState == "complete") {
            loadingScreen.style.display = 'none';
        }
    }, 500)
}