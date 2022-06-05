import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
    parse = require('https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js');
    parse = require('https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js');
    
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyBqN0Q3QOCjEHLUcx7_V9cZ5AuGCdSfnJ8",
      authDomain: "covinfo-1da58.firebaseapp.com",
      projectId: "covinfo-1da58",
      storageBucket: "covinfo-1da58.appspot.com",
      messagingSenderId: "1640050010",
      appId: "1:1640050010:web:00dddc23c35d854f70d763",
      measurementId: "G-KZLF5SCSCV"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

//GLOBAL
var products = JSON.parse(localStorage.getItem('cart'));
var cartItems = [];
var cart_n = document.getElementById('cart_n');
var table = document.getElementById("table");
var total=0;

// HTML
function tableHTML(i){
    return `
            <tr>
                <th scope ="row">${i+1}</th>
                <td>
                    <img style="width: 90px;" src="${products[i].url}" >
                </td>
                <td>${products[i].name}</td>
                <td>1</td>
                <td>${products[i].price}</td>
            </tr>
    `;
}

//BUY
function buy() {
    var d =new Date();
    var t = d.getTime();
    var counter = t;
    counter +=1;
    let db = app.database().ref("order/"+counter);
    let itemdb={
        id:counter,
        order:counter-895,
        total:total
    }
    db.set(itemdb);
    swal({
        position:'center',
        type:'success',
        title: 'Purchase made successfully!',
        text:`Your purchase order is: ${itemdb.order}`,
        showConfirmButton:true,
        timer:50000
    });
    clean();
}

function clean(){
    localStorage.clear();
    for (let index = 0; index < products.length; index++) {
        table.innerHTML+=tableHTML(index);
        total=total+parseInt(products[index].price);
        
    }
    total+=0;
    table.innerHTML=`
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
    `;
    cart_n.innerHTML='';
    document.getElementById("btnBuy").style.display="none";
    document.getElementById("btnClean").style.display="none";
}

  //RENDER
function render() {
    <h1>test</h1>
    // for (let index = 0; index < products.length; index++) {
    //     table.innerHTML+=tableHTML(index);
    //     total=total+parseInt(products[index].price);
    // }
    // table.innerHTML+=`
    //     <tr>
    //         <th scope="col"></th>
    //         <th scope="col"></th>
    //         <th scope="col"></th>
    //         <th scope="col"></th>
    //         <th scope="col">${total}</th>
    //     </tr>
    // `;
}