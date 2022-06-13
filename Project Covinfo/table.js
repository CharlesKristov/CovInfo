const firebaseConfig = {
    apiKey: "AIzaSyBqN0Q3QOCjEHLUcx7_V9cZ5AuGCdSfnJ8",
    authDomain: "covinfo-1da58.firebaseapp.com",
    databaseURL: "https://covinfo-1da58-default-rtdb.firebaseio.com/",
    projectId: "covinfo-1da58",
    storageBucket: "covinfo-1da58.appspot.com",
    messagingSenderId: "1640050010",
    appId: "1:1640050010:web:00dddc23c35d854f70d763",
    measurementId: "G-KZLF5SCSCV"
  };
firebase.initializeApp(firebaseConfig);


function renderTable(){
    var order=firebase.database().ref("order/");
    order.on("child_added", function(data){
        var orderValue = data.val();
        document.getElementById("table").innerHTML+=`
            <tr>
                <td>${orderValue.id}</td>
                <td>${orderValue.order}</td>
                <td>${orderValue.total}</td>
            </tr>
        `;
    });
};