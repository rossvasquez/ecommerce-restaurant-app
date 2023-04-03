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

localStorage.removeItem('Order Total');

const cartDisplay = document.getElementById("cart");
const itemWrapper = document.getElementById("itemWrapper1");
const totalItems = document.getElementById("totalWrapper");
const itemMethod = document.getElementById("itemMethod");
const continueWrapper = document.getElementById("continueWrapper");
const cartEmpty = document.getElementById("emptyCartWrapper");
const methodWrapper = document.getElementById("methodWrapper");
const subTotal = document.getElementById("subTotal");
const tax = document.getElementById("tax");
const deliveryFee = document.getElementById("deliveryFee");
const total = document.getElementById("total");
let cartTotalPrice = 0;
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
let myTotal = 0;
let deliveryTotal = 0;
let taxTotal = 0;

const placeSearchInput = document.getElementById('place-search-input');
const dateValue = document.getElementById("dateValue");
const timeValue = document.getElementById("timeValue");
const ordNotes = document.getElementById('orderNotes');

dateValue.addEventListener('blur', function () {
    localStorage.setItem("orderDate", dateValue.value);
})

timeValue.addEventListener('blur', function () {
    localStorage.setItem("Order Time", timeValue.value);
})

placeSearchInput.addEventListener('blur', function () {
    localStorage.setItem("Order Address", placeSearchInput.value);
})

ordNotes.addEventListener('onchange', function () {
    localStorage.setItem('Order Notes', ordNotes.innerText);
})

placeSearch({
    key: 'ylb3ZYXfn5qNXIzW8zYv0TuIM4oTXzSq',
    container: document.querySelector('#place-search-input'),
    useDeviceLocation: false,
    collection: ['airport', 'address', 'adminArea', 'poi', 'franchise'],
    templates: {
        suggestion: function (result) {
            return `Deliver To: ${result.name} `;
        }
    }
});

let methodCount = 0;
const delivBtn = document.getElementById("delivery");
const pickBtn = document.getElementById("pickup");
delivBtn.style.setProperty('--delivery-color', 'whitesmoke');
pickBtn.style.setProperty('--pickup-color', 'whitesmoke');
delivBtn.style.setProperty('--delivery-cursor', 'pointer');
pickBtn.style.setProperty('--pickup-cursor', 'auto');
pickBtn.setAttribute('disabled', true);

delivBtn.onclick = function () {
    methodCount = 1;
    placeSearchInput.disabled = false;
    placeSearchInput.style.backgroundColor = "white";
    delivBtn.style.backgroundColor = "none";
    delivBtn.style.backgroundImage = 'linear-gradient(350deg, #971b2f, #a93d4f)';
    pickBtn.style.backgroundColor = "whitesmoke";
    pickBtn.style.backgroundImage = 'none';
    pickBtn.style.color = "black";
    delivBtn.style.color = "whitesmoke";
    delivBtn.style.setProperty('--delivery-cursor', 'auto');
    pickBtn.style.setProperty('--pickup-cursor', 'pointer');
    delivBtn.style.setProperty('--delivery-color', 'whitesmoke');
    pickBtn.style.setProperty('--pickup-color', 'black');
    deliveryTotal += 30;
    deliveryFee.innerText = formatter.format(deliveryTotal);
    taxTotal += (30*.06);
    tax.innerText = formatter.format(taxTotal);
    myTotal += (30 + (30*.06));
    total.innerText = formatter.format(myTotal);
    localStorage.setItem("Order Method", "Delivery");
    pickBtn.disabled = false;
    delivBtn.disabled = true;
    
}

pickBtn.onclick = function () {
    placeSearchInput.style.borderColor = "black";
    placeSearchInput.placeholder = "Delivery Address...";
    methodCount = 0;
    placeSearchInput.disabled = true;
    placeSearchInput.style.backgroundColor = "rgb(216, 216, 216)";
    delivBtn.style.backgroundColor = "whitesmoke";
    delivBtn.style.backgroundImage = 'none';
    pickBtn.style.backgroundColor = "none";
    pickBtn.style.backgroundImage = 'linear-gradient(350deg, #971b2f, #a93d4f)';
    pickBtn.style.color = "whitesmoke";
    delivBtn.style.color = "black";
    delivBtn.style.setProperty('--delivery-cursor', 'pointer');
    pickBtn.style.setProperty('--pickup-cursor', 'auto');
    delivBtn.style.setProperty('--delivery-color', 'whitesmoke');
    pickBtn.style.setProperty('--pickup-color', 'whitesmoke');
    deliveryTotal -= 30;
    deliveryFee.innerText = formatter.format(deliveryTotal);
    taxTotal -= (30*.06);
    tax.innerText = formatter.format(taxTotal);
    myTotal -= (30 + (30*.06));
    total.innerText = formatter.format(myTotal);
    localStorage.setItem("Order Method", "Pickup");
    pickBtn.disabled = true;
    delivBtn.disabled = false;
}

const locationPin = document.getElementById("locationPin");

const mqInput = document.getElementsByClassName("mq-input");

const mqInputIcon = document.getElementsByClassName("mq-input-icon");

const storeHours = document.getElementsByClassName('storeHours');

mqInput[0].addEventListener("focus", function () {
    locationPin.style.display = "none";
    mqInputIcon[0].style.display = "block";
})

const myContinue = document.getElementById('continue');

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

myContinue.addEventListener('click', function () {
    let myAddress = placeSearchInput.value;
    let myTime = timeValue.value;
    let myDate = dateValue.value;
    let myNotes = ordNotes.value;
    let openTime = Date.parse(myDate + "T10:30");
    let closeTime = Date.parse(myDate + "T19:30");
    let testTime = Date.parse(myDate + "T" + myTime);
    let lsArray = [];

    for(i=0;i<localStorage.length;i++){
        lsArray.push(localStorage.getItem(localStorage.key(i)));
    }

    if (lsArray.includes('Plates') === false) {
        localStorage.setItem('Plates', 'No');
    }
    
    if (lsArray.includes('Silverware') === false) {
        localStorage.setItem('Silverware', 'No');
    }
    
    if (lsArray.includes('Napkins') === false) {
        localStorage.setItem('Napkins', 'No');
    }
    
    if (lsArray.includes('Serving Utensils') === false) {
        localStorage.setItem('Serving Utensils', 'No');
    }
    
    if (lsArray.includes('Order Address') === false) {
        localStorage.setItem('Order Address', '');
    }
    
    if (myDate >= today) {
        storeHours[1].style.display = "none";
        dateValue.style.borderColor = "black";
        if (openTime < testTime && testTime < closeTime) {
            localStorage.setItem("orderDate", myDate);
            localStorage.setItem("Order Time", myTime);
            localStorage.setItem("Order Total", myTotal);
            localStorage.setItem('Order Notes', myNotes);
            storeHours[0].style.display = "none";
            timeValue.style.borderColor = "black";
            if (methodCount === 0) {
                localStorage.setItem("Order Method", "Pickup");
                window.location.href = "../checkout-page/checkout.html";
            } else {
                if (myAddress == '') {
                    placeSearchInput.style.borderColor = "red";
                    placeSearchInput.placeholder = "Enter Delivery Address";
                    scrollToTop();
                } else {
                    localStorage.setItem("Order Address", placeSearchInput.value);
                    window.location.href = "../checkout-page/checkout.html";
                }
            }
        } else {
            timeValue.style.borderColor = "red";
            storeHours[0].style.display = "block";
            scrollToTop();
        }
    } else {
        storeHours[0].style.display = "none";
        timeValue.style.borderColor = "black";
        dateValue.style.borderColor = "red";
        storeHours[1].style.display = "block";
        scrollToTop();
    }

    this.style.backgroundColor = "#63b0bb";
    this.style.color = "whitesmoke";

})

var someDate = new Date();
var numberOfDaysToAdd = 2;
var result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
var today = someDate.toISOString().split('T')[0];
document.getElementById("dateValue").setAttribute('min', today);
document.getElementById("dateValue").setAttribute('value', today);

let margin = "225px";
let marginTotal = "488px";
let totalsTop = "726px";
let hiddenCount = 0;
let itemQuantMaster = 0;
let plateCount = 0;
let silverwareCount = 0;
let napkinCount = 0;
let servingUtensilCount = 0;
let wrapperTotal = 0;
const itemCountDisplay = document.getElementById("itemCountDisplay");
const utensil = document.getElementById('utensil');
const plates = document.getElementById('plates');
const silverware = document.getElementById('silverware');
const napkins = document.getElementById('napkins');
const servingUtensils = document.getElementById('servingUtensils');
const pageWrapper = document.getElementById('pageWrapper');
const checkoutTotals = document.getElementsByClassName('checkoutTotals');

let windowH = 0;
let windowW = window.innerWidth;

function myScrollHeight() {
    windowH = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
}

if (window.innerWidth <= 625) {
    margin = '385px';
    marginTotal = '648px';
    utensil.style.top = '430px';
    myScrollHeight();
    wrapperTotal = (windowH - 50) + "px";
    pageWrapper.style.height = wrapperTotal;
}

window.addEventListener('resize', function() {
    if (windowW != this.innerWidth) {
        this.location.reload();
        }
})

for (let i = 0; i <= localStorage.length; i++) {
    let item = localStorage.key(i);
    if (i < localStorage.length) {
        if (item == "Cart Count") {
            console.log(localStorage.getItem(item));
            if (localStorage.getItem(item) == '[]') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }
        } else if (item == 'Plates') {
            if (localStorage.getItem(item) == 'Yes') {
                plates.style.backgroundColor = "none";
                plates.style.backgroundImage = 'linear-gradient(350deg, #971b2f, #a93d4f)';
                plates.style.color = 'whitesmoke';
                plateCount = 1;
            }
        } else if (item == 'Silverware') {
            if (localStorage.getItem(item) == 'Yes') {
                silverware.style.backgroundColor = "none";
                silverware.style.backgroundImage = 'linear-gradient(350deg, #971b2f, #a93d4f)';
                silverware.style.color = 'whitesmoke';
                silverwareCount = 1;
            }
        } else if (item == 'Napkins') {
            if (localStorage.getItem(item) == 'Yes') {
                napkins.style.backgroundColor = "none";
                napkins.style.backgroundImage = 'linear-gradient(350deg, #971b2f, #a93d4f)';
                napkins.style.color = 'whitesmoke';
                napkinCount = 1;
            }
        } else if (item == 'Serving Utensils') {
            if (localStorage.getItem(item) == 'Yes') {
                servingUtensils.style.backgroundColor = "none";
                servingUtensils.style.backgroundImage = 'linear-gradient(350deg, #971b2f, #a93d4f)';
                servingUtensils.style.color = 'whitesmoke';
                servingUtensilCount = 1;
            }
        } else if (item == "Order Method") {
            if (localStorage.getItem(item) == 'Delivery') {
                delivBtn.click();
            }
        } else if (item == "Order Time") {
            timeValue.value = localStorage.getItem(item);
        } else if (item == "orderDate") {
            dateValue.value = localStorage.getItem(item);
        } else if (item == "Order Address") {
            placeSearchInput.value = localStorage.getItem(item);
        } else if (item == 'Order Notes') {
            if (localStorage.getItem(item) == '') {
                
            } else {
                ordNotes.value = localStorage.getItem(item);
            }
        } else {
            const itemInfo = localStorage.getItem(item);
            console.log(item);
            let modLoc = item.indexOf('*');
            let notesLoc = item.indexOf('%');
            let beep = JSON.parse(itemInfo);
            let itemQuant = beep.length;
            itemQuantMaster += itemQuant;
            let cartProduct1 = document.createElement("div");
            cartProduct1.className = "cartProduct";
            const itemCount1 = document.getElementsByClassName("cartProduct");
            if (itemCount1.length > 0) {
                let addMargin = (Number(margin.replace('px', ''))) + 110;
                let addMarginTotal = (Number(marginTotal.replace('px', ''))) + 110;
                margin = addMargin.toString() + "px";
                marginTotal = addMarginTotal.toString() + "px";
                if (window.innerWidth <= 625) {
                    let addTopTotal = (Number(totalsTop.replace('px', ''))) + 110;
                    let addWrapper = (Number(wrapperTotal.replace('px', ''))) + 110;
                    totalsTop = addTopTotal.toString() + "px";
                    wrapperTotal = addWrapper.toString() + "px";
                    pageWrapper.style.height = wrapperTotal;
                    for(x = 0; x < checkoutTotals.length; x++) {
                        checkoutTotals[x].style.top = totalsTop;
                        console.log(x);
                        console.log(addTopTotal)
                    }
                }
                cartProduct1.style.marginTop = margin;
                totalItems.style.marginTop = marginTotal;
            } else {

            }
            itemWrapper.appendChild(cartProduct1);
            let cartItem = document.createElement("p");
            cartItem.className = "cartItem";
            if (item.includes('*')) {
                cartItem.innerText = item.slice(5, modLoc);
            } else {
                cartItem.innerText = item.slice(5);
            }
            let cartQuantity = document.createElement("p");
            cartQuantity.className = "cartQuantity";
            cartQuantity.innerText = "QTY: " + itemQuant;
            cartProduct1.appendChild(cartItem);
            cartProduct1.appendChild(cartQuantity);
            let removeItem = document.createElement("button");
            removeItem.type = "button";
            removeItem.className = "removeItem";
            removeItem.onclick = function () {
                let cartCount = localStorage.getItem("Cart Count");
                let cartArr = JSON.parse(cartCount);
                if (itemQuant > 1) {
                    beep.pop();
                    cartArr.pop();
                    let cartCount1 = JSON.stringify(cartArr);
                    let itemInfo1 = JSON.stringify(beep);
                    localStorage.setItem("Cart Count", cartCount1);
                    localStorage.setItem(item, itemInfo1);
                    location.reload();
                } else {
                    cartArr.pop();
                    let cartCount1 = JSON.stringify(cartArr);
                    localStorage.setItem("Cart Count", cartCount1);
                    localStorage.removeItem(item);
                    location.reload();
                }
            }
            cartProduct1.appendChild(removeItem);
            let removeItemImg = document.createElement("img");
            removeItemImg.src = '../../assets/static/removeIcon.png';
            removeItemImg.className = 'removeItemImg';
            removeItem.appendChild(removeItemImg);
            if (item.includes('*')) {
                let itemMods = document.createElement('div');
                itemMods.className = 'itemMods';
                itemMods.innerText = item.slice(modLoc + 1, notesLoc);
                cartProduct1.appendChild(itemMods);
            }
            if (item.includes('%')) {
                let itemNotes = document.createElement('div');
                itemNotes.className = 'itemNotes';
                itemNotes.innerText = item.slice(notesLoc + 1);
                cartProduct1.appendChild(itemNotes);
            }
            let itemPrice = document.createElement("div");
            itemPrice.className = "itemPrice";
            let itemPriceTotal = 0;
            itemPriceTotal = Number(item.slice(0, 5)) * itemQuant;
            cartTotalPrice += itemPriceTotal;
            itemPrice.innerText = formatter.format(itemPriceTotal);
            cartProduct1.appendChild(itemPrice);
        }

    } else if (itemQuantMaster > 0) {
        totalItems.style.display = "block";
        itemMethod.style.display = "block";
        methodWrapper.style.display = "block";
        utensil.style.display = 'block';
        itemCountDisplay.innerText += " " + itemQuantMaster;
        subTotal.innerText = formatter.format(cartTotalPrice);
        taxTotal = cartTotalPrice * .06;
        tax.innerText = formatter.format(taxTotal);
        deliveryFee.innerText = formatter.format(deliveryTotal);
        myTotal = cartTotalPrice + taxTotal + deliveryTotal;
        total.innerText = formatter.format(myTotal);
    } else if (itemQuantMaster < 1) {
        totalItems.style.display = "none";
        itemMethod.style.display = "none";
        methodWrapper.style.display = "none";
        utensil.style.display = 'none';
        cartEmpty.style.display = "block";
    }
}

plates.addEventListener('click', function() {
    if(plateCount == 0){
        plates.style.backgroundColor = "none";
        plates.style.backgroundImage = 'linear-gradient(350deg, #971b2f, #a93d4f)';
        plates.style.color = 'whitesmoke';
        localStorage.setItem('Plates', 'Yes');
        plateCount++;
    } else {
        plates.style.backgroundColor = "whitesmoke";
        plates.style.backgroundImage = 'none';
        plates.style.color = 'black';
        localStorage.setItem('Plates', 'No');
        plateCount--;
    }
})

silverware.addEventListener('click', function() {
    if(silverwareCount == 0){
        silverware.style.backgroundColor = "none";
        silverware.style.backgroundImage = 'linear-gradient(350deg, #971b2f, #a93d4f)';
        silverware.style.color = 'whitesmoke';
        localStorage.setItem('Silverware', 'Yes');
        silverwareCount++;
    } else {
        silverware.style.backgroundColor = "whitesmoke";
        silverware.style.backgroundImage = 'none';
        silverware.style.color = 'black';
        localStorage.setItem('Silverware', 'No');
        silverwareCount--;
    }
})

napkins.addEventListener('click', function() {
    if(napkinCount == 0){
        napkins.style.backgroundColor = "none";
        napkins.style.backgroundImage = 'linear-gradient(350deg, #971b2f, #a93d4f)';
        napkins.style.color = 'whitesmoke';
        localStorage.setItem('Napkins', 'Yes');
        napkinCount++;
    } else {
        napkins.style.backgroundColor = "whitesmoke";
        napkins.style.backgroundImage = 'none';
        napkins.style.color = 'black';
        localStorage.setItem('Napkins', 'No');
        napkinCount--;
    }
})

servingUtensils.addEventListener('click', function() {
    if(servingUtensilCount == 0){
        servingUtensils.style.backgroundColor = "none";
        servingUtensils.style.backgroundImage = 'linear-gradient(350deg, #971b2f, #a93d4f)';
        servingUtensils.style.color = 'whitesmoke';
        localStorage.setItem('Serving Utensils', 'Yes');
        servingUtensilCount++;
    } else {
        servingUtensils.style.backgroundColor = "whitesmoke";
        servingUtensils.style.backgroundImage = 'none';
        servingUtensils.style.color = 'black';
        localStorage.setItem('Serving Utensils', 'No');
        servingUtensilCount--;
    }
})
