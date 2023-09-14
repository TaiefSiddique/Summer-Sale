var i = 1;
var discountPriceNumber = 0;
var totalPriceNumber = 0;
applyCouponButton = document.getElementById("apply-coupon-btn");
applyCouponButton.disabled = true;
makePurchaseButton = document.getElementById("make-purchase-btn")
makePurchaseButton.disabled = true;
function addToCart(prodName, prodPrice) {
    addToList(prodName);
    addToPrice(prodPrice);
}
function addToList(prodName) {
    const prodNameText = document.getElementById(prodName).innerText;
    const cartProducts = document.getElementById("cart-products");
    const cartProduct = document.createElement("li");
    cartProduct.innerText = i + ". " + prodNameText;
    cartProducts.appendChild(cartProduct);
    i++;

}

function couponApplied() {
    const input = document.getElementById("coupon-input").value;
    if (input == "SELL200") {
        const totalPriceText = document.getElementById("total-price").innerText;
        totalPriceNumber = parseFloat(totalPriceText);

        discountPriceNumber = 0.2 * totalPriceNumber;
        document.getElementById("discount-price").innerText = discountPriceNumber;
        updateTotal();
    }
    else {
        alert('Invalid COUPON');
    }
}

function addToPrice(prodPrice) {
    const prodPriceText = document.getElementById(prodPrice).innerText;
    const prodPriceNumber = parseFloat(prodPriceText);

    const totalPriceText = document.getElementById("total-price").innerText;
    totalPriceNumber = parseFloat(totalPriceText);
    totalPriceNumber += prodPriceNumber;
    if(totalPriceNumber>=200) enableCouponButton();
    if(totalPriceNumber>0) enablePurchaseButton();
    document.getElementById("total-price").innerText = totalPriceNumber;
    updateTotal();
}

function updateTotal() {
    totalPriceNumber = parseFloat(document.getElementById("total-price").innerText);
    let finalPrice = totalPriceNumber - discountPriceNumber;

    document.getElementById("final-price").innerText = finalPrice;
    
}


function enableCouponButton(){
    applyCouponButton = document.getElementById("apply-coupon-btn");
    applyCouponButton.disabled = false;
}
function enablePurchaseButton(){
    makePurchaseButton = document.getElementById("make-purchase-btn")
makePurchaseButton.disabled = false;
}

function my_modal_8(){
    document.getElementById("my_modal_8").style.display = "block";
}
function simulateLinkClick() {
   
    // var link = document.querySelector('a[href="#my_modal_8"]');
    // console.log(link);
    // if (link) {
    //   // Create and dispatch a click event on the link
    //   var clickEvent = new MouseEvent('click', {
    //     bubbles: true,
    //     cancelable: true,
    //     view: window
    //   });
    //   link.dispatchEvent(clickEvent);
    // }
    
    var modalContainer = document.getElementById("my_modal_8");
    console.log(modalContainer.classList)
    modalContainer.classList.remove("hidden");
}