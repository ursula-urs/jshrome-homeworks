const products = document.querySelectorAll(".product");
const button = document.querySelectorAll(".product__add")
const cartProducts = document.querySelector(".cart__products");

products.forEach(product =>{
    const count = product.querySelector(".product__quantity-value");
    const add = product.querySelector(".product__quantity-control_inc");
    const remove = product.querySelector(".product__quantity-control_dec");
    const button = product.querySelector(".product__add");
    
    remove.addEventListener("click", ()=>{
        let nowcount = parseInt(count.textContent);
        nowcount -=1;
        if(nowcount < 1){
            return;
        }
        count.textContent = nowcount;
    })

    add.addEventListener("click", ()=>{
         let nowcount = parseInt(count.textContent);
         nowcount +=1;
         count.textContent = nowcount;
    })

    button.addEventListener("click", ()=>{
        const img = product.querySelector(".product__image");
        const imageSrc = img.src;
        const art = product.getAttribute("data-id");

    const cartProduct = cartProducts.querySelector(`[data-id="${art}"]`);
   if (!cartProduct) {
    cartProducts.insertAdjacentHTML("afterbegin", `
        <div class="cart__product" data-id="${art}">
        <img class="cart__product-image" src="${imageSrc}">
        <div class="cart__product-count">${count.textContent}</div>
    </div>
    `);
    
} else {
   const cardcount = cartProduct.querySelector(".cart__product-count");
    let nowcount = parseInt(cardcount.textContent);
    nowcount += parseInt(count.textContent);
    cardcount.textContent = nowcount;
    
 }
    });
});

