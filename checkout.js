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
    document.onreadystatechange = function() {
        setTimeout(function() {
            if (document.readyState == "complete") {
                loadingScreen.style.display = 'none';
            }
        }, 500)
    }
}

const myDate = document.getElementById('myDate');
const myMethod = document.getElementById('myMethod');
const myTime = document.getElementById('myTime');
const myAddress = document.getElementById('myAddress');
const totalNum = document.getElementById('totalNum');
const checkTotal = document.getElementById('checkTotal');
const checkItem = document.getElementById('checkItem');
const itemMethod = document.getElementById('itemMethod');
const orderNotes = document.getElementById('ordNotes');
const subBtn = document.getElementById('submitButton');
const utensil = document.getElementById('utensils');
let theNotes = localStorage.getItem("Order Notes");

let windowH = 0;
let windowW = window.innerWidth;

function myScrollHeight() {
    windowH = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
}

myScrollHeight();

window.addEventListener('resize', function(){
    if (windowW != this.innerWidth) {
        this.location.reload();
        }
})

let myMover = 43;
let itemMethy = 78;
let itemTot = 152;
let utensilTot = 76;

let subTop = 515;
let pwH = 725;
let utensilCount = 0;

for (i = 0; i < localStorage.length; i++) {
    let item = localStorage.key(i);
    if (item == 'Plates') {
        if (localStorage.getItem(item) == 'Yes') {
            utensil.style.display = 'block';
            utensil.innerText += ' Plates |';
            if (utensilCount == 0) {
            itemMethy += 30;
            itemTot += 30;
            utensilCount++;
            console.log('yeet');
            }
        }
    } else if (item == 'Silverware') {
        if (localStorage.getItem(item) == 'Yes') {
            utensil.style.display = 'block';
            utensil.innerText += ' Silverware |';
            if (utensilCount == 0) {
                itemMethy += 30;
                itemTot += 30;
                utensilCount++;
                console.log('yeet');
                }
        }
    } else if (item == 'Napkins') {
        if (localStorage.getItem(item) == 'Yes') {
            utensil.style.display = 'block';
            utensil.innerText += ' Napkins |';
            if (utensilCount == 0) {
                itemMethy += 30;
                itemTot += 30;
                utensilCount++;
                }
        }
    } else if (item == 'Serving Utensils') {
        if (localStorage.getItem(item) == 'Yes') {
            utensil.style.display = 'block';
            utensil.innerText += ' Serving Utensils |';
            if (utensilCount == 0) {
                itemMethy += 30;
                itemTot += 30;
                utensilCount++;
                }
        }
    console.log(utensilCount);
    } else if (item == "orderDate") {
        let myDay = localStorage.getItem("orderDate").slice(8,10);
        let myMonth = localStorage.getItem("orderDate").slice(5,7);
        let myYear = localStorage.getItem("orderDate").slice(0,4);

        myDate.innerText = myMonth + "/" + myDay + "/" + myYear;
    } else if (item == 'Order Notes') {
        if (theNotes == "") {
            orderNotes.style.display = 'none';
        } else {
            orderNotes.innerText += theNotes;
            subTop += 50;
            pwH += 50;
            subBtn.style.top = subTop + 'px';
        }
    } else if (item == 'Order Time') {
        let myTitem = localStorage.getItem("Order Time").slice(0,2);

        let myTestHour = Number(myTitem);
        let myMinute = localStorage.getItem("Order Time").slice(3,5);

        let timeStamp = '';
        let myHour = 0;

        if (myTestHour > 12) {
            myHour = myTestHour - 12;
            timeStamp = ' PM';
        } else if (myTestHour = 12) {
            myHour = myTestHour;
            timeStamp = ' PM'
        } else {
            myHour = myTestHour;
            timeStamp = ' AM';
        }

        let startOfTime = myHour + ':';

        myTime.innerText = startOfTime + myMinute + timeStamp;
    } else if (item == 'Order Method') {
        let ordMethd = localStorage.getItem('Order Method');

        myMethod.innerText = ordMethd;

        if (ordMethd == 'Delivery') {
            let ordLoc = localStorage.getItem('Order Address');
            myAddress.innerText = ordLoc;
            itemTot += 25;
            checkTotal.style.marginTop = itemTot + 'px';
        } else {
            myAddress.style.display = "none";
        }
    } else if (item == 'Order Total') {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          });
        
        let myTotal = localStorage.getItem('Order Total');
        totalNum.innerText = formatter.format(myTotal);
    } else if (item == 'Order Address' || item == 'Cart Count') {

    } else {
        setTimeout(function() {
            let itemName = document.createElement('p');
            itemName.className = 'itemName';
            itemName.style.top = myMover + 'px';
            let itemQty = document.createElement('p');
            itemQty.className = 'itemQty';
            itemQty.style.top = myMover + 'px';
            myMover += 30;
            if (item.includes('*')) {
                let godzilla = item.indexOf('*');
                itemName.innerText = item.slice(5, godzilla);
            } else {
                itemName.innerText = item.slice(5);
            }
            let itemArr = JSON.parse(localStorage.getItem(item));
            let len = itemArr.length;
            itemQty.innerText = 'x' + len;
            checkItem.appendChild(itemName);
            checkItem.appendChild(itemQty);
            itemMethod.style.marginTop = itemMethy + 'px';
            itemMethy += 30;
            checkTotal.style.marginTop = itemTot + 'px';
            itemTot += 30;
            utensil.style.top = utensilTot + 'px';
            utensilTot += 30;
        }, 0)
    }
}

const checkoutForm = document.getElementsByClassName('checkoutForm');

setTimeout(function() {
    const itemName = document.getElementsByClassName('itemName');
    if (window.innerWidth <= 565) {
        let formHeight = 230;
        let pageHeight = 900;
        let buttonTop = 670;
        if (theNotes == '') {
        
        } else {
            pageHeight = 980;
            formHeight = 310;
            buttonTop = 750;
        }
        for(x = 0; x < itemName.length; x++) {
            formHeight += 30;
            pageHeight += 30;
            buttonTop += 30;
        }
        checkoutForm[0].style.marginTop = formHeight + 'px';
        subBtn.style.top = buttonTop + 'px';
        pageWrapper.style.height = pageHeight + 'px';
        console.log(formHeight);
    } else {
        let buttonTop = 565;
        let pageHeight = 820;
        if (itemName.length > 10) {
            for(y = 10; y < itemName.length; y++) {
                buttonTop += 30;
                pageHeight += 30;
            }
            subBtn.style.top = buttonTop + 'px';
            pageWrapper.style.height = pageHeight + "px";
    }
    }
} , 4)

subBtn.addEventListener('click', function( e ) {
    if( ! confirm('Select "Ok" to confirm you are ready to place your order.') ) {
        e.preventDefault();
    } else {
        window.location.href = "confirmed.html";
        localStorage.clear();
    }
})

function preventBack() {
    window.history.forward(); 
}
  
setTimeout("preventBack()", 0);
  
window.onunload = function () { null };