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


// Initializing Local Storage

const len = localStorage.length;

if (len === 0) {
localStorage.setItem("Cart Count", "[]");
}

// Initializing Cart Count

const cartDisplay = document.getElementById("cart");

let bing = localStorage.getItem('Cart Count');
let cartCount = JSON.parse(bing);
let cartNumber = cartCount.length;
if (cartNumber >= 1){
cartDisplay.innerText = "Cart (" + cartNumber + ")";
}

// Initializing Item Wrappers

const macWrapper = document.getElementsByClassName("macWrapper");
const noodleWrapper = document.getElementsByClassName("noodleWrapper");
const riceWrapper = document.getElementsByClassName("riceWrapper");
const saladWrapper = document.getElementsByClassName("saladWrapper");
const sideWrapper = document.getElementsByClassName("sides");
const dessertWrapper = document.getElementsByClassName("dessert");
const pageWrapper = document.getElementById("pageWrapper");
const myFooter = document.getElementById("myFooter");

// Menu Selection Handling

const catSelect = document.getElementById('catSelect');
const bowlSelect = document.getElementById('bowlSelect');
const menuFeed = document.getElementById('menuFeed');
const menuFeed1 = document.getElementById('menuFeed1');
const itemTypeCAT = document.getElementsByClassName("itemTypeCAT");
const productHeader = document.getElementsByClassName('productHeader');
let menu = 0;

itemTypeCAT[0].style.display = 'block';
productHeader[0].style.display = 'block';
macWrapper[0].style.display = 'block';
catSelect.style.setProperty('--cat-cursor', 'auto');
bowlSelect.style.setProperty('--bowl-cursor', 'pointer');
catSelect.style.setProperty('--cat-image', 'linear-gradient(180deg, #78bac6, #63b0bb)');
bowlSelect.style.setProperty('--bowl-image', 'linear-gradient(0deg, #971b2f, #a93d4f)');


catSelect.addEventListener('click', function() {
    catSelect.style.backgroundImage = 'linear-gradient(180deg, #78bac6, #63b0bb)';
    catSelect.style.backgroundColor = 'none';
    catSelect.style.boxShadow = 'none';
    bowlSelect.style.backgroundColor = '#868686';
    bowlSelect.style.boxShadow = 'inset 1px 1px 4px rgba(0, 0, 0, 0.150)';
    bowlSelect.style.backgroundImage = 'none';
    catSelect.style.setProperty('--cat-cursor', 'auto');
    bowlSelect.style.setProperty('--bowl-cursor', 'pointer');
    catSelect.style.setProperty('--cat-image', 'linear-gradient(180deg, #78bac6, #63b0bb)');
    bowlSelect.style.setProperty('--bowl-image', 'linear-gradient(0deg, #971b2f, #a93d4f)');
    menuFeed.style.display = "block";
    menuFeed1.style.display = "none";
    itemTypeCAT[0].style.display = 'block';
    productHeader[0].style.display = 'block';
    macWrapper[0].style.display = 'inline-table';
    macWrapper[1].style.display = 'none';
    noodleWrapper[1].style.display = 'none';
    riceWrapper[1].style.display = 'none';
    saladWrapper[1].style.display = 'none';
    itemTypeCAT[1].style.display = 'none';
    productHeader[1].style.display = 'none';
    menu = 0;
})

bowlSelect.addEventListener('click', function() {
    catSelect.style.backgroundImage = 'none';
    catSelect.style.backgroundColor = '#868686';
    catSelect.style.boxShadow = 'inset -1px 1px 4px rgba(0, 0, 0, 0.150)';
    bowlSelect.style.backgroundColor = 'none';
    bowlSelect.style.boxShadow = 'none';
    bowlSelect.style.backgroundImage = 'linear-gradient(180deg, #78bac6, #63b0bb)';
    catSelect.style.setProperty('--cat-cursor', 'pointer');
    bowlSelect.style.setProperty('--bowl-cursor', 'auto');
    catSelect.style.setProperty('--cat-image', 'linear-gradient(0deg, #971b2f, #a93d4f)');
    bowlSelect.style.setProperty('--bowl-image', 'linear-gradient(180deg, #78bac6, #63b0bb)');
    menuFeed.style.display = "none";
    menuFeed1.style.display = "block";
    itemTypeCAT[0].style.display = 'none';
    productHeader[0].style.display = 'none';
    macWrapper[0].style.display = 'none';
    noodleWrapper[0].style.display = 'none';
    riceWrapper[0].style.display = 'none';
    saladWrapper[0].style.display = 'none';
    sideWrapper[0].style.display = 'none';
    dessertWrapper[0].style.display = 'none';
    macWrapper[1].style.display = 'inline-table';
    itemTypeCAT[1].style.display = 'block';
    productHeader[1].style.display = 'block';
    menu = 1;
})

// Scroll Height Handling

let windowH = 0;
let windowW = window.innerWidth;

function myScrollHeight() {
    windowH = document.documentElement.scrollHeight;
}

function thatScrollHeight() {
    windowH2 = document.documentElement.scrollHeight;
}

myScrollHeight();

pageWrapper.style.height = windowH + 'px';

if (windowW >= 585) {
    window.addEventListener('resize', function(){
        if (windowW != this.innerWidth) {
        this.location.reload();
        }
})
}

// Menu Dropdowns Handling

function itemsSelected() {
    if (itemTypeCAT[menu].value == "macBowlz") {
        noodleWrapper[menu].style.display = "none";
        riceWrapper[menu].style.display = "none";
        saladWrapper[menu].style.display = "none";
        if (menu < 1) {
            sideWrapper[menu].style.display = "none";
            dessertWrapper[menu].style.display = "none";
        }
        macWrapper[menu].style.display = "inline-table";
        myFooter.style.top = windowH + 160 + 'px';
        pageWrapper.style.height = windowH + 100 + 'px';
    } else if (itemTypeCAT[menu].value == "noodleBowlz") {
        macWrapper[menu].style.display = "none";
        riceWrapper[menu].style.display = "none";
        saladWrapper[menu].style.display = "none";
        if (menu < 1) {
            sideWrapper[menu].style.display = "none";
            dessertWrapper[menu].style.display = "none";
        }
        noodleWrapper[menu].style.display = "inline-table";
        if (windowW < 585) {
            myFooter.style.top = windowH + 1703 + 'px';
            pageWrapper.style.height = windowH + 1643 + 'px';
        } else {
            myFooter.style.top = windowH + 470.5 + 'px';
            pageWrapper.style.height = windowH + 410.5 + 'px';
        }
    } else if (itemTypeCAT[menu].value == "riceBowlz") {
        macWrapper[menu].style.display = "none";
        saladWrapper[menu].style.display = "none";
        if (menu < 1) {
            sideWrapper[menu].style.display = "none";
            dessertWrapper[menu].style.display = "none";
        }
        noodleWrapper[menu].style.display = "none";
        riceWrapper[menu].style.display = "inline-table";
        if (windowW < 585) {
            myFooter.style.top = windowH - 120.5 + 'px';
            pageWrapper.style.height = windowH - 240.5 + 'px';
        } else {
            myFooter.style.top = document.documentElement.scrollHeight - 40 + 'px';
            pageWrapper.style.height = document.documentElement.scrollHeight - 100 + 'px';
        }
    } else if (itemTypeCAT[menu].value == "saladBowlz") {
        macWrapper[menu].style.display = "none";
        if (menu < 1) {
            sideWrapper[menu].style.display = "none";
            dessertWrapper[menu].style.display = "none";
        }
        noodleWrapper[menu].style.display = "none";
        riceWrapper[menu].style.display = "none";
        saladWrapper[menu].style.display = "inline-table";
        if (windowW < 585) {
            myFooter.style.top = windowH + 421 + 'px';
            pageWrapper.style.height = windowH + 361 + 'px';
        } else {
            myFooter.style.top = document.documentElement.scrollHeight - 40 + 'px';
            pageWrapper.style.height = document.documentElement.scrollHeight - 100 + 'px';
        }
    } else if (itemTypeCAT[menu].value == "sides") {
        macWrapper[menu].style.display = "none";
        saladWrapper[menu].style.display = "none";
        dessertWrapper[menu].style.display = "none";
        noodleWrapper[menu].style.display = "none";
        riceWrapper[menu].style.display = "none";
        sideWrapper[menu].style.display = "inline-table";
        myFooter.style.top = windowH + 160 + 'px';
        pageWrapper.style.height = windowH + 100 + 'px';
    } else if (itemTypeCAT[menu].value == "dessert") {
        macWrapper[menu].style.display = "none";
        saladWrapper[menu].style.display = "none";
        sideWrapper[menu].style.display = "none";
        noodleWrapper[menu].style.display = "none";
        riceWrapper[menu].style.display = "none";
        dessertWrapper[menu].style.display = "inline-table";
        myFooter.style.top = windowH - 40 + 'px';
        pageWrapper.style.height = windowH - 100 + 'px';
    }
}

document.onload = itemsSelected();

itemTypeCAT[0].addEventListener('change', itemsSelected)
itemTypeCAT[1].addEventListener('change', itemsSelected)

// Handling Add to Cart click on products
// Some items result in pop-up with product options(adding ingredients to food)
// Some add directly to the cart

const addToCart = document.getElementsByClassName("addCart");
const cartDesc = document.getElementsByClassName("cartDesc");
const popUp = document.getElementById("popUp");
const popUp2 = document.getElementById("popUp2");
const popUp3 = document.getElementById("popUp3");
const popUpBack = document.getElementById("popUpBack");
let itemsNum = addToCart.length;

let thisName = '';

function popUpCart() {
    myScrollHeight();
    popUpBack.style.height = (windowH - 170) + 'px';
    popUpBack.style.display = "block";
    popUp.style.display = "block";
    if (menu == 0) {
        showPrice[0].innerText = '5.00/each';
    } else if (menu == 1) {
        showPrice[0].innerText = '0.99/each';
    }
}

function popUpCart2() {
    myScrollHeight();
    popUpBack.style.height = (windowH - 170) + 'px';
    popUpBack.style.display = "block";
    popUp2.style.display = "block";
}

function popUpCart3() {
    myScrollHeight();
    popUpBack.style.height = (windowH - 170) + 'px';
    popUpBack.style.display = "block";
    popUp3.style.display = "block";
}

function addItem(thisCart) {
    if (myQty.value > 0) {
        if (localStorage.getItem(thisCart) === null) {
            let mac = [];
            for (i=0; i < myQty.value; i++) {
                mac.push("x");
            }
            let storage = JSON.stringify(mac);
            localStorage.setItem(thisCart, storage);
        } else {
            let ding = localStorage.getItem(thisCart);
            let mac = JSON.parse(ding);
            for (i=0; i < myQty.value; i++) {
                mac.push("x");
            }
            let storage = JSON.stringify(mac);
            localStorage.setItem(thisCart, storage);
        }
        let cartCount = JSON.parse(localStorage.getItem("Cart Count"));
        for (i=0; i < myQty.value; i++) {
            cartCount.push("x");
        }
        let cartNumber = cartCount.length;
        cartDisplay.innerText = "Cart (" + cartNumber + ")";
        let storage1 = JSON.stringify(cartCount)
        localStorage.setItem("Cart Count", storage1);
    }
    popUpBack.style.display = "none";
    popUp.style.display = "none";
    myQty.value = '1';
    broteinDrop.value = 'none1';
    mod.value = '';
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

for (let i = 0; i < itemsNum; i++ ) {
    if (i < 22) {
        addToCart[i].addEventListener('click', function() {
            thisName = this.value;
            popUpCart();
        })
    } else if (i === 22) {
        addToCart[i].addEventListener('click', function() {
            thisName = this.value;
            popUpCart2();
        })
    } else if (i === 23) {
        addToCart[i].addEventListener('click', function() {
            thisName = this.value;
            popUpCart3();
        })
    } else if (i < 27) {
        addToCart[i].addEventListener('click', function() {
            thisName = this.value;
            addItem(thisName);
        })
    } else {
        addToCart[i].addEventListener('click', function() {
            thisName = this.value;
            popUpCart();
        })
    }
    addToCart[i].addEventListener('mouseover', function() {
        cartDesc[i].style.opacity="1";
        addToCart[i].style.opacity="1";
        addToCart[i].style.backgroundColor = "none";
        addToCart[i].style.backgroundImage = "linear-gradient(180deg, #85bdc7, #63b0bb)";

    })
    addToCart[i].addEventListener('mouseout', function() {
        cartDesc[i].style.opacity="0";
        addToCart[i].style.opacity="0";
        addToCart[i].style.backgroundColor = "#63afbbdc";
        addToCart[i].style.backgroundImage = "none";
    })
    cartDesc[i].addEventListener('mouseover', function() {
        cartDesc[i].style.opacity="1";
        addToCart[i].style.opacity="1";
    })
    cartDesc[i].addEventListener('mouseout', function() {
        cartDesc[i].style.opacity="0";
        addToCart[i].style.opacity="0";
    })
}

// Handling what occurs inside of the product modification pop-ups

const contCart = document.getElementById("contCart");
const myQty = document.getElementById('qty');
const broteinDrop = document.getElementById('broteinDrop');
const mod = document.getElementById('mod');

const contCartP = document.getElementById("contCartP");
const myQtyP = document.getElementById('qty2');
const broteinDropP = document.getElementById('broteinDrop2');

const contCartV = document.getElementById("contCartV");
const myQtyV = document.getElementById('qty3');
const broteinDropV = document.getElementById('broteinDrop3');
const addIns = document.getElementsByClassName('addIns');

let addIng = document.getElementById('addIng');
let addIngP = document.getElementById('addIngP');
let mods = document.getElementById('mods');
let derp = document.getElementById('derp');
let listTop = 97;
let buttonTop = 130;
let modsTop = 70;
let buttonCount = 0;
let showCount = 129;

const showPrice = document.getElementsByClassName('showPrice');

// The yellow plus icon in the pop up

addIng.addEventListener('click', function(){
    let ingCopy = addIns[0].cloneNode(true);
    ingCopy.classList.add('addIns');
    ingCopy.style.top = listTop + 30 + 'px';
    addIng.style.top = buttonTop + 30 + 'px';
    mods.style.marginTop = modsTop + 30 + 'px';
    showPrice[0].style.top = showCount + 30 + 'px';
    showCount = showCount + 30;
    listTop = listTop + 30;
    buttonTop = buttonTop + 30;
    modsTop = modsTop + 30;
    ingCopy.value = 'none';
    derp.appendChild(ingCopy);
    buttonCount++;
})

const showPrice1 = document.getElementById('showPrice1');

// The protein dropdown in the pop up. Displays price if you select
// a protein.

broteinDrop.addEventListener('change', function() {
    if (menu == 1) {
        showPrice1.innerText = '+2.99';
    } else if (menu == 0) {
        showPrice1.innerText = '+12.00';
    }
    if (this.value == 'none1') {
        showPrice1.style.display = 'none';
    } else {
        showPrice1.style.display = 'block';
    }
})

// Handling what happens when you continue through product modifications
// and add to cart.

function addItem1(thisCart) {
    if (myQtyP.value > 0) {
        if (localStorage.getItem(thisCart) === null) {
            let mac = [];
            for (i=0; i < myQtyP.value; i++) {
                mac.push("x");
            }
            let storage = JSON.stringify(mac);
            localStorage.setItem(thisCart, storage);
        } else {
            let ding = localStorage.getItem(thisCart);
            let mac = JSON.parse(ding);
            for (i=0; i < myQtyP.value; i++) {
                mac.push("x");
            }
            let storage = JSON.stringify(mac);
            localStorage.setItem(thisCart, storage);
        }
        let cartCount = JSON.parse(localStorage.getItem("Cart Count"));
        for (i=0; i < myQtyP.value; i++) {
            cartCount.push("x");
        }
        let cartNumber = cartCount.length;
        cartDisplay.innerText = "Cart (" + cartNumber + ")";
        let storage1 = JSON.stringify(cartCount)
        localStorage.setItem("Cart Count", storage1);
    }
    popUpBack.style.display = "none";
    popUp2.style.display = "none";
    myQtyP.value = '1';
    broteinDrop.value = 'none1';
    mod.value = '';
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

function addItem2(thisCart) {
    if (myQtyV.value > 0) {
        if (localStorage.getItem(thisCart) === null) {
            let mac = [];
            for (i=0; i < myQtyV.value; i++) {
                mac.push("x");
            }
            let storage = JSON.stringify(mac);
            localStorage.setItem(thisCart, storage);
        } else {
            let ding = localStorage.getItem(thisCart);
            let mac = JSON.parse(ding);
            for (i=0; i < myQtyV.value; i++) {
                mac.push("x");
            }
            let storage = JSON.stringify(mac);
            localStorage.setItem(thisCart, storage);
        }
        let cartCount = JSON.parse(localStorage.getItem("Cart Count"));
        for (i=0; i < myQtyV.value; i++) {
            cartCount.push("x");
        }
        let cartNumber = cartCount.length;
        cartDisplay.innerText = "Cart (" + cartNumber + ")";
        let storage1 = JSON.stringify(cartCount)
        localStorage.setItem("Cart Count", storage1);
    }
    popUpBack.style.display = "none";
    popUp3.style.display = "none";
    myQtyV.value = '1';
    broteinDrop.value = 'none1';
    mod.value = '';
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

contCartP.addEventListener('click', function() {
    thisCart = thisName + broteinDropP.value;
    addItem1(thisCart);
})

contCartV.addEventListener('click', function() {
    thisCart = thisName + broteinDropV.value;
    addItem2(thisCart);
})

contCart.addEventListener('click', function() {
    let newPrice = 0;
    let thisIng = '';
    let thisCart = thisName;
    for (i = 0; i <= buttonCount; i++) {
        if (addIns[i].value == 'none') {
            thisIng = '*';
        } else {
            if (menu == 0){
                newPrice += 5;
            } else {
                newPrice += .99;
            }
            if (thisIng.includes('*')) {
                thisIng += ', ADD ' + addIns[i].value;
            } else {
                thisIng += '*' + 'ADD ' + addIns[i].value;
            }
        }
    }
    buttonCount = 0;
    if (broteinDrop.value == 'none1') {
        thisCart = thisName + thisIng;
    } else {
        let thisPrice = thisName.slice(0,5);
        console.log(thisPrice);
        let newName = thisName.slice(5) + broteinDrop.value + thisIng;
        let newPrice1 = 0;
        if (menu == 0) {
            newPrice += Number(thisPrice) + 12;
            newPrice1 = newPrice + '.00';
        } else {
            newPrice += Number(thisPrice) + Number('02.99');
            console.log(newPrice);
            if (newPrice < 10) {
                newPrice = '0' + newPrice
                console.log(newPrice);
            }
        }
        thisCart = newPrice + newName;
    }
    if (mod.value == '') {
        thisCart += '%'
    } else {
        thisCart += '%Notes: ' + mod.value;
    }
    addItem(thisCart);
    addIns[0].value = 'none';
    showPrice1.style.display = 'none';
    for (x = addIns.length; x > 1; x--) {
        let y = x-1;
        addIns[y].remove();
        addIng.style.top = buttonTop - 30 + 'px';
        mods.style.marginTop = modsTop - 30 + 'px';
        showPrice[0].style.top = showCount - 30 + 'px';
        showCount = showCount - 30;
        listTop = listTop - 30;
        buttonTop = buttonTop - 30;
        modsTop = modsTop - 30;
    }
})

// Go to cart by clicking on cart button in header

cartDisplay.addEventListener('click', function () {
    window.location.href="cart.html";
})

