//Variables

let allContainerCart = document.querySelector('.carts');
let containerBuyCart = document.querySelector('.card-items');
let priceTotal = document.querySelector('.price-total')
let amountProduct = document.querySelector('.count-product');

let buyThings =[];
let totalCard = 0;
let countProduct = 0;
//functions

loadEventListeners();
function loadEventListeners(){
    allContainerCart.addEventListener('click', addProduct);
    containerBuyCart.addEventListener('click', deleteProduct);
}

function addProduct(e){
    e.preventDefault();
    if(e.target.classList.contains('btn-add-cart')) {
        const selecProduct = e.target.parentElement;
        readTheContent(selecProduct);
        //console.log(e.target.parentElement);
    }
    
}

function deleteProduct(e) {
  if (e.target.classList.contains('delete-product')) {
      const deleteId = e.target.getAttribute('data-id');
      buyThings.forEach(value => {
        if (value.id == deleteId) {
            let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
            totalCard =  totalCard - priceReduce;
            totalCard = totalCard.toFixed(2);
        }
    });
    buyThings = buyThings.filter(product => product.id !== deleteId);
    
    countProduct--;
}
//FIX: El contador se quedaba con "1" aunque ubiera 0 productos
if (buyThings.length === 0) {
    priceTotal.innerHTML = 0;
    amountProduct.innerHTML = 0;
}
loadHtml();
}


function readTheContent(product){
  const infoProduct ={
       
      image: product.querySelector('div img').src,
      title: product.querySelector('.title').textContent,
      price: product.querySelector('p span').textContent,
      id: product.querySelector('a').getAttribute('data-id'),
      amount: 1
      
      
    }
    totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
    totalCard = totalCard.toFixed(2);

    const exist = buyThings.some(product => product.id === infoProduct.id);
    if (exist) {
        const pro = buyThings.map(product => {
            if (product.id === infoProduct.id) {
                product.amount++;
                return product;
            } else {
                return product
            }
        });
        buyThings = [...pro];
    } else {
        buyThings = [...buyThings, infoProduct]
        countProduct++;
    }
    loadHtml();
    //console.log(infoProduct);
}

function loadHtml(){
    clearHtml();
  buyThings.forEach(product =>{
    const {image, title,price, amount, id} = product;
    const row = document.createElement('div');
    row.classList.add('item');
    row.innerHTML = `
    
    <img src="${image}" style="width: 130px; height=30px"alt="imagen-seleccionada">
    <p class="title">${title}</p>
    <p>$<span class="precio">&nbsp;${price}</span></p>
    <h3 class="cantidad">Cantidad ${amount}</h3>
    <div>
    <span class="delete-product"data-id="${id}">X</span>
    <br>
    `;
    containerBuyCart.appendChild(row);
    priceTotal.innerHTML = totalCard;
    amountProduct.innerHTML = countProduct;
  });
}

function clearHtml(){
  containerBuyCart.innerHTML = '';
}
