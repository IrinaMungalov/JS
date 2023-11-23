// main logic


const renderProducts = function () {
    for(let i=0; i<products.length; i++)
    
    catalogDiv.innerHTML += `
    
        <div class="product">
            <h2>${products[i].name}</h2>
            <img src="${products[i].image}"/>
            <p>${products[i].price}</p>
            <button 
                onclick="buy(${i})"
                ${products[i].avilable ? '' : 'disabled'}>BUY
            </button>
        </div>
    `
}

//                      i
//                      v
const buy = function (index) {
    cart.push(index)
    renderCart()
}

const renderCart = function () {

    // HW1:
    // add condition so it renders "empty" if no products in the cart

    if (cart.length == 0) {
        cartDiv.innerHTML = "Empty";
    } else {
        cartDiv.innerHTML = `
        items: ${cart.length}
    `
    }
    
    // HW2: 
    // add total cost of all selected items
    // hints:
    //    for loop -> on each iteration
    //    sum -> for

    for( let i=0; i<cart.length; i++) {
        let selected_index = cart[i]
        console.log( products[selected_index].price)
    }  
    

}