// IMPORT PRODUCT

import Products from './product__shop.js';
import {cartItem} from './product__shop.js';

// GET EML
const getElm = (selector) => document.querySelector(selector);



// GET PRODUCT LIST FROM API
const getProductsList = () => {
    const promise = axios({
        method: 'GET',
        url: 'https://6512e424b8c6ce52b3966bc0.mockapi.io/thienFood',
    })

    promise
        .then((result) => {
            renderTable(result.data)
        })
        .catch((err) => {
            console.log(err);
        })
}
getProductsList()


// SHOW DATA FROM API TO UI

const renderTable = (productList) => {
    let htmlContent = '';
    productList.forEach((product) => {
        htmlContent +=
            `
        <div class="cyberPhone__Card">
        <div class="topLogo">
            <div class="logo">
                <span>
                    <i class="fab fa-apple"></i>
                </span>
            </div>
            <div class="infor">
                <p>
                    In Stock
                </p>
            </div>
        </div>
        <div class="img">
            <img src="${product.img}" alt="">
        </div>
        <div class="detail">
            <div class="detail__Name">
                <h4>${product.name}</h4>
            </div>
            <div class="detail__Caption">
                <h5>${product.desc}</h5>
            </div>
            <div class="detail__Desc">
                <h6>${product.screen}</h6>
                <h6>${product.backCamera}</h6>
                <h6>${product.frontCamera}</h6>
            </div>
            <div class="detail__Bot">
                <div class="bot__Price">
                    <p>$${product.price}</p>
                </div>
                <button onclick="getProductsInfor(${product.id})">ADD</button>
            </div>
        </div>
    </div>
    `
    });

    getElm('#cyberPhone__Shop').innerHTML = htmlContent
}

// SHOW DATA AFTER FILL TO UI

const renderFillTable = (productList) =>{
    let htmlContent = ''
    let fillValue = getElm('#proFilter').value
    productList.forEach((product) => {
        if(product.type === fillValue){
           htmlContent +=
           `
       <div class="cyberPhone__Card">
       <div class="topLogo">
           <div class="logo">
               <span>
                   <i class="fab fa-apple"></i>
               </span>
           </div>
           <div class="infor">
               <p>
                   In Stock
               </p>
           </div>
       </div>
       <div class="img">
           <img src="${product.img}" alt="">
       </div>
       <div class="detail">
           <div class="detail__Name">
               <h4>${product.name}</h4>
           </div>
           <div class="detail__Caption">
               <h5>${product.desc}</h5>
           </div>
           <div class="detail__Desc">
               <h6>${product.screen}</h6>
               <h6>${product.backCamera}</h6>
               <h6>${product.frontCamera}</h6>
           </div>
           <div class="detail__Bot">
               <div class="bot__Price">
                   <p>$${product.price}</p>
               </div>
               <button onclick="getProductsInfor(${product.id})">ADD</button>
           </div>
       </div>
   </div>
   `
   getElm('#cyberPhone__Shop').innerHTML = htmlContent
        }
        else if(fillValue === '1'){
            getElm('#alert__choses').style.display = 'block'
        }
    })
    
}


// FILTER
window.cyberPhone__Fill = () => {
    const promise = axios({
        method: 'GET',
        url: 'https://6512e424b8c6ce52b3966bc0.mockapi.io/thienFood',
    })

    promise
        .then((result) => {
            renderFillTable(result.data)
        })
        .catch((err) => {
            console.log(err);
        })
}

// ----------------GET AND POST DATA TO API---------------

window.getProductsInfor = (id) => {
    
    const promise = axios({
        method: 'GET',
        url: `https://6512e424b8c6ce52b3966bc0.mockapi.io/thienFood/${id}`,
    })

    promise
        .then((result) => {
           newCartItem(result.data)
           getCartItemList()
        })
        .catch((err) => {
            console.log(err);
        })
        
}

const newCartItem = (cartItemInfor) =>{
    let cartItemDetail = new cartItem(
        cartItemInfor.id,
        cartItemInfor.img,
        cartItemInfor.name,
        cartItemInfor.price
        )
        postCartItemData(cartItemDetail)
}



const postCartItemData = (PutData) => {
    const promise = axios({
        method: 'POST',
        url: 'https://651d71e144e393af2d59cdfb.mockapi.io/cartItem',
        data:
            PutData
        
    })
    promise
    .then((result)=>{
        console.log(result);
        getCartItemList()
    })
    .catch((err)=>{
        console.log(err);
    })
}
// ---------------------------------------------------------
// -------------RENDER DATA FROM API AFTER POST --------

const getCartItemList = ()=>{
    const promise = axios({
        method: 'GET',
        url: 'https://651d71e144e393af2d59cdfb.mockapi.io/cartItem',
    })

    promise
        .then((result) => {
            renderCartTable(result.data)
            cartTotal(result.data)
        })
        .catch((err) => {
            console.log(err);
        })
}

getCartItemList()

const renderCartTable = (dataRender) => {
    let htmlCartContent = '';
    dataRender.forEach((cartItem) => {
        htmlCartContent +=
            `
            <div class="cart__PrList">

            <div class="cart-style" id="td__img">
                <img src="${cartItem.img}" alt="">
            </div>

            <div class="cart-style" id="td__ProName">
                <p>${cartItem.name}</p>
            </div>

            <div class="cart-style" id="td__Number">
                <button><i class="fa fa-angle-left"></i></button>
                <p>1</p>
                <button><i class="fa fa-chevron-right"></i></button>
            </div>

            <div class="cart-style" id="td__Price">
                <p>$${cartItem.price}</p>
            </div>

            <div class="cart-style" id="td__Del">
                <button onclick="delProFrCart(${cartItem.id})"><i class="fa fa-trash"></i></button>
            </div>

        </div>
    `
    });

    getElm('#cart__bodyID').innerHTML = htmlCartContent
}

const cartTotal = (mathData)=>{
    let total = 0
    mathData.forEach((data)=>{
        total += data.price
    })
    console.log(total);
    getElm('#cartTotal').innerHTML =`<h3>Total: ${total}</h3>`
}

// ----------------DELETE PRODUCT AWAY FROM CART-----------------

window.delProFrCart = (id) =>{
    const promise = axios({
        method: 'DELETE',
        url: `https://651d71e144e393af2d59cdfb.mockapi.io/cartItem/${id}`
    })
    promise
    .then((result)=>{
        console.log(result);
        getCartItemList()
    })
    .catch((err)=>{
        console.log(err);
    })
}

