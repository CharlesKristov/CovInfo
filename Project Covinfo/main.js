//GLOBAL
var products=[];
var carItems=[];
var cart_n = document.getElementById('cart_n');
// DIVS
var hotSalesDIV = document.getElementById("hotSalesDIV");
var bookingAmbulanceDIV = document.getElementById("bookingAmbulanceDIV");
var covid19MedDIV = document.getElementById("covid19MedDIV");
//INFORMATION
var HOTSALES = [
    {name: 'Panadol Forte Merah', price:12000}, 
    {name: 'Panadol Forte Paracetamol', price:15000},
    {name: 'Zadol Forte', price:12000}, 
    {name: 'Betadine', price:15000},
    {name: 'Salonpas', price:20000},
    {name: 'Vitamin C', price:65000}
];
var BOOKINGAMBULANCE = [
    {name: 'Rumah Sakit Awal Bros', price:200000},
    {name: 'Rumah Sakit Primaya', price:180000},
    {name: 'Rumah Sakit Siloam', price: 150000}
];
var COVID19MED = [
    {name: 'Ivermectin', price:130000}, 
    {name: 'Ivermectin 2', price:130000}, 
    {name: 'Ivermectin 3', price:130000}, 
    {name: 'Ivermectin', price:130000}
];
//HTML
function HTMLhotSalesProduct(con) {
    let URL = `Asset-code/hotSalesAsset/hotSales${con}.jpg`;
    let btn = `btnHotSales${con}`;
    return `
        <div class ="col-md-4">
            <div class = "card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}"    
                alt = "Card image cap">  
                <div class="card-body box-shadow-15">
                    <i style = "color:orange;" class="fa fa-star"></i>
                    <i style = "color:orange;" class="fa fa-star"></i>
                    <i style = "color:orange;" class="fa fa-star"></i>
                    <i style = "color:orange;" class="fa fa-star"></i>
                    <p class="card-text">Name: ${HOTSALES[con-1].name}</p>
                    <p class="card-text">Price: Rp. ${HOTSALES[con-1].price},00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type-"button" onclick="cart2('${HOTSALES[con-1].name}', '${HOTSALES[con-1].price}', '${URL}', '${con}', '${btn}')"
                            class="btn btn-sm btn-outline-secondary" >Buy</button>
                            
                            <button id="${btn}" type-"button" onclick="cart('${HOTSALES[con-1].name}', '${HOTSALES[con-1].price}', '${URL}', '${con}', '${btn}')"
                            class="btn btn-sm btn-outline-secondary" >Add to cart</button>
                        </div>
                        <small class="text-muted">Free shipping</small>
                    </div> 
                </div>  
            </div>
        </div>
    `
}

// function HTMLhotSalesProduct(con) {
//     let URL = `Asset-code/bookAmbulanceAsset/RS${con}.jpg`;
//     let btn = `btnRS${con}`;
//     return `
//         <div class ="col-md-4">
//             <div class = "card mb-4 shadow-sm">
//                 <img class="card-img-top" style="height:16rem;" src="${URL}"    
//                 alt = "Card image cap">  
//                 <div class="card-body box-shadow-15">
//                     <i style = "color:orange;" class="fa fa-star"></i>
//                     <i style = "color:orange;" class="fa fa-star"></i>
//                     <i style = "color:orange;" class="fa fa-star"></i>
//                     <i style = "color:orange;" class="fa fa-star"></i>
//                     <p class="card-text">Name: ${RS[con-1].name}</p>
//                     <p class="card-text">Price: Rp. ${RS[con-1].price},00</p>
//                     <div class="d-flex justify-content-between align-items-center">
//                         <div class="btn-group">
//                             <button type-"button" onclick="cart2('${RS[con-1].name}', '${RS[con-1].price}', '${URL}', '${con}', '${btn}')"
//                             class="btn btn-sm btn-outline-secondary" >Buy</button>
                            
//                             <button id="${btn}" type-"button" onclick="cart('${RS[con-1].name}', '${RS[con-1].price}', '${URL}', '${con}', '${btn}')"
//                             class="btn btn-sm btn-outline-secondary" >Add to cart</button>
//                         </div>
//                         <small class="text-muted">Free shipping</small>
//                     </div> 
//                 </div>  
//             </div>
//         </div>
//     `
// }

//RENDER
function render() {
    for (let index = 1; index <= 6 ; index++) {
        hotSalesDIV.innerHTML+=`${HTMLhotSalesProduct(index)}`;
    }
}

//di elliot 1:31:24
