import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js';
import { getDatabase, ref, onValue } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js';

const itemTemp = document.getElementById("itemTemp");
const pageWrapper = document.getElementById("pageWrapper");

const firebaseConfig = {
    apiKey: "AIzaSyChYcq4zhc5P_AuL_Qx0yNtLH2RtE00IKw",
    authDomain: "catering-order-system-2ae86.firebaseapp.com",
    databaseURL: "https://catering-order-system-2ae86-default-rtdb.firebaseio.com",
    projectId: "catering-order-system-2ae86",
    storageBucket: "catering-order-system-2ae86.appspot.com",
    messagingSenderId: "837227972667",
    appId: "1:837227972667:web:6fb3c179d3c74765f5b41e",
    measurementId: "G-7XY9NTQD8B"
  };

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const ordersRef = ref(database, 'orders');

onValue(ordersRef, (snapshot) => {
  snapshot.forEach(function(childSnapshot) {
    // Get the child data and do something with it
    let orderData = childSnapshot.val();
    // Example: Append a div element with the order's name to the DOM
    let item = itemTemp.cloneNode(true);
    let method = item.firstChild;
    let date = method.nextSibling;
    let time = date.nextSibling;
    let total = time.nextSibling;
    method.firstChild.innerHTML = orderData.order_method;
    date.firstChild.innerHTML = orderData.order_date;
    time.firstChild.innerHTML = orderData.order_time;
    total.firstChild.innerHTML = orderData.order_total;
    method.firstChild.style = "font-weight: normal;";
    date.firstChild.style = "font-weight: normal;";
    time.firstChild.style = "font-weight: normal;";
    total.firstChild.style = "font-weight: normal;";
    pageWrapper.appendChild(item);
  });
});