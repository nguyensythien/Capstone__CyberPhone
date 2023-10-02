// IMPORT PRODUCT

import Products from './product__shop.js';
import cartItem from './product__shop.js';

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
            console.log(result.data);
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
                <button id="${product.id}">ADD</button>
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
               <button id="${product.id}">ADD</button>
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
            console.log(result.data);
            renderFillTable(result.data)

        })
        .catch((err) => {
            console.log(err);
        })
}


// const cart1 = new cartItem('123', 'thien', 5, 1000)
// console.log(cart1);

const itemList = {}
window.pushItem = () =>{
    const promise = axios({
        method: 'PUT',
        url: 'https://6512e424b8c6ce52b3966bc0.mockapi.io/item'
    })
}