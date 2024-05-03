let cart = [];

let items = [
    {
        title: "Margherita Pizza",
        price: 130,
        rating: 4.7,
        photo: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Farmhouse Pizza",
        price: 180,
        rating: 3.9,
        photo: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Chicken Tikka Pizza",
        price:  240,
        rating: 4.4,
        photo: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
        title: "Veggie Supreme Pizza",
        price:  310,
        rating: 4.0,
        photo: "https://images.unsplash.com/photo-1627461985459-51600559fffe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
        title: "Pepperoni Pizza",
        price:  190,
        rating: 4.5,
        photo: "https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
        title: "BBQ Chicken Pizza",
        price:  240 ,
        rating: 4.2,
        photo: "https://images.unsplash.com/photo-1618213837799-25d5552820d3?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
        title: "Mushroom and Olive Pizza",
        price:  290,
        rating: 4.8,
        photo: "https://images.unsplash.com/photo-1617343267017-e344bdc7ec94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
        title: "Hawaiian Pizza",
        price: 200 ,
        rating: 5,
        photo: "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
        title: "Cheese Burst Pizza ",
        price:  170,
        rating: 3.9,
        photo: "https://plus.unsplash.com/premium_photo-1672198597143-45a4b5f064c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
        title: "Veggie Delight Sandwich",
        price: 70 ,
        rating: 4.5,
        photo: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
        title: "Grilled Cheese Sandwich",
        price: 45 ,
        rating: 4.8,
        photo: "https://images.unsplash.com/photo-1528736235302-52922df5c122?q=80&w=1908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
        title: "Bombay Sandwich",
        price: 90 ,
        rating: 4.1,
        photo: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
        title: "Aloo Toast Sandwich",
        price:  65,
        rating: 3.1,
        photo: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
        title: "Veggie Sub Sandwich",
        price:  120,
        rating: 4.4,
        photo: "https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
        title: "Tandoori Chicken Sandwich",
        price:  155,
        rating: 4.7,
        photo: "https://images.unsplash.com/photo-1592415486689-125cbbfcbee2?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
        title: "Masala Chai (Spiced Tea)",
        price:  40,
        rating: 4.95,
        photo: "https://images.unsplash.com/photo-1553381006-e9b84d5952c8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
        title: "Lassi",
        price:  60,
        rating: 4.7,
        photo: "https://images.unsplash.com/photo-1527406619566-0159590b8540?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
        title: "Thandai",
        price: 100 ,
        rating: 4.5,
        photo: "https://images.unsplash.com/photo-1616429266184-7455498d96db?q=80&w=1832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
        title: "Samosa",
        price: 30,
        rating: 4.8,
        photo: "https://images.unsplash.com/photo-1589301773859-bb024d3ad558?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
        title: "Bhel Puri",
        price: 50,
        rating: 4.0,
        photo: "https://images.unsplash.com/photo-1641642398289-a1fb63ee58a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
        title: "Dosa",
        price: 95,
        rating: 4.7,
        photo: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
        title: "Pav Bhaji",
        price: 145,
        rating: 4.1,
        photo: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
        title: "Chaat",
        price: 40,
        rating: 3.4,
        photo: "https://images.unsplash.com/photo-1653850280260-aa3b9e00b230?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
        title: "Paneer Tikka",
        price: 70,
        rating: 3.9,
        photo: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
        title: "Chocolate Milkshake",
        price: 30,
        rating: 4.8,
        photo: "https://images.unsplash.com/photo-1591864384134-8a21ffb51cb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
        title: "Mango Milkshake",
        price: 45,
        rating: 3.4,
        photo: "https://images.unsplash.com/photo-1655476148304-1d1214683af4?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
        title: "Strawberry Milkshake",
        price: 50,
        rating: 5,
        photo: "https://images.unsplash.com/photo-1604503036177-6ac038850279?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];




let Hot_Deals_btn = document.querySelector(".Hot-Deals-btn");
let hotdeals_slider = document.querySelector(".hotdeals-slider");
Hot_Deals_btn.addEventListener("mouseleave", function() {
    hotdeals_slider.style.marginTop = "-100%";
});
Hot_Deals_btn.addEventListener("mouseenter", function() {
    hotdeals_slider.style.marginTop = "0%";
});
hotdeals_slider.addEventListener("mouseleave", function() {
    hotdeals_slider.style.marginTop = "-100%";
});
hotdeals_slider.addEventListener("mouseenter", function() {
    hotdeals_slider.style.marginTop = "0%";
});
let Pizza_btn = document.querySelector(".Pizza-btn");
let pizzas_slidr = document.querySelector(".pizzas-slidr");
Pizza_btn.addEventListener("mouseleave", function() {
    pizzas_slidr.style.marginTop = "-100%";
});
Pizza_btn.addEventListener("mouseenter", function() {
    pizzas_slidr.style.marginTop = "0%";
});
pizzas_slidr.addEventListener("mouseleave", function() {
    pizzas_slidr.style.marginTop = "-100%";
});
pizzas_slidr.addEventListener("mouseenter", function() {
    pizzas_slidr.style.marginTop = "0%";
});
let nearstoutletbtn = document.querySelector(".button-89");
let about_slider_map = document.querySelector('.about-slider-map');
nearstoutletbtn.addEventListener("click", function() {
    if (about_slider_map.style.display === "block") {
        about_slider_map.style.display = "none";
        document.querySelectorAll(".about-slidr h4").forEach(function(element) {
            element.style.display = "block";
        });
        document.querySelectorAll(".about-slidr p").forEach(function(element) {
            element.style.display = "block";
        });
    } else {
        about_slider_map.style.display = "block";
        document.querySelectorAll(".about-slidr h4").forEach(function(element) {
            element.style.display = "none";
        });
        document.querySelectorAll(".about-slidr p").forEach(function(element) {
            element.style.display = "none";
        });
    }
});
let About_btn = document.querySelector(".About-btn");
let about_slidr = document.querySelector(".about-slidr");
About_btn.addEventListener("mouseleave", function() {
    about_slidr.style.marginTop = "-100%";
});
About_btn.addEventListener("mouseenter", function() {
    about_slidr.style.marginTop = "0%";
});
about_slidr.addEventListener("mouseleave", function() {
    about_slidr.style.marginTop = "-100%";
});
about_slidr.addEventListener("mouseenter", function() {
    about_slidr.style.marginTop = "0%";
});
let nav_menubar = document.querySelector(".nav-menubar");
let three_bar_slider = document.querySelector(".three-bar-slider");
nav_menubar.addEventListener("click",function(){
    if (three_bar_slider.style.display === "block") {
        three_bar_slider.style.display = "none";
    } else {
        three_bar_slider.style.display = "block";
    }
})







let itemCardContainer = document.querySelector(".items-area");

items.forEach(function(item) {
    let itemCard = document.createElement("div");
    itemCard.classList.add("addinfoincart");

    itemCard.innerHTML = `
        <div class="itemcard">
            <div class="addinfoincart">
                <img src="${item.photo}" alt="coverimg">
                <div class="itemcard-textarea">
                    <div class="itemcard-textarealeft">
                        <span class="itemcard-title">${item.title}</span>
                        <span class="itemcard-catagory">Fast Food....</span>
                        <span class="itemcard-rating">${item.rating}<i class="fa-solid fa-star"></i></span>
                    </div>
                    <div class="itemcard-textarearight">
                        <span class="costofitem">₹${item.price} for one</span>
                        <button class="button-55" role="button"><i class="fa-solid fa-cart-plus"></i></button>
                    </div>
                </div>
            </div> 
        </div>
    `;

    itemCardContainer.appendChild(itemCard);
});




document.addEventListener("DOMContentLoaded", function() {
    let itemlistContainer = document.querySelector(".caetsli");

    itemlistContainer.addEventListener("click", function(event) {
        if (event.target.classList.contains("list-delete")) {
            let cartItem = event.target.closest(".cart-iteml");
            let cartItemTitle = cartItem.querySelector(".cart-list-title").textContent;

            // Find the index of the item in the cart array
            let index = cart.findIndex(item => item.title === cartItemTitle);

            // Check if the item exists in the cart array
            if (index !== -1) {
                // Update the quantity in the cart array
                cart[index].quantity--;
                // Remove the item from the DOM if the quantity is less than or equal to 0
                if (cart[index].quantity <= 0) {
                    cart.splice(index, 1); // Remove the item from the cart array
                    cartItem.remove(); // Remove the item from the DOM
                } else {
                    // Update the quantity displayed in the DOM
                    cartItem.querySelector(".cart-list-quntity").textContent = `Quantity - ${cart[index].quantity}`;
                }
                // Update the total quantity and total cost display
                updateCartDisplay();
            }
        }
    });
});

function updateCartDisplay() {
    let totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    let totalCost = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    document.querySelector(".cart-item-number").textContent = totalQuantity;
    document.querySelector(".Item-Cost").textContent = `Item Cost - ₹ ${totalCost}`;
    document.querySelector(".Item-qun").textContent = `Item Quantity - ${totalQuantity}`;
    document.querySelector(".total-bill").textContent = `Total - ₹ ${totalCost}`;
}








let addcart = document.querySelectorAll(".button-55");
addcart.forEach(function(button) {
    button.addEventListener("click", function(event) {
        let itemCard = event.target.closest(".itemcard");
        let itemTitle = itemCard.querySelector(".itemcard-title").textContent;
        let itemProfileImg = itemCard.querySelector(".addinfoincart img");
        let itemProfile = itemProfileImg ? itemProfileImg.getAttribute("src") : "Image not found";
        let itemPrice = itemCard.querySelector(".costofitem").textContent;
        
        // Parse the price string to extract the numerical value
        let priceString = itemPrice;
        let priceValue = parseInt(priceString.match(/\d+/)[0]);
        
        // Find the index of the existing item in the cart array
        let existingItemIndex = cart.findIndex(item => item.title === itemTitle);
        
        if (existingItemIndex !== -1) {
           
            cart[existingItemIndex].quantity += 1;
        } else {
           
            let newCartItem = {
                title: itemTitle,
                price: priceValue,
                photo: itemProfile,
                quantity: 1  
            };
            cart.push(newCartItem);
        }
        


        let totalCost = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
let totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

        document.querySelector(".cart-item-number").textContent = totalQuantity;
        document.querySelector(".Item-Cost").textContent = `Item Cost - ₹${totalCost}`;
        document.querySelector(".Item-qun").textContent = `Item Quantity - ${totalQuantity}`;
        document.querySelector(".total-bill").textContent = `Total - ₹${totalCost + 40}`; 

        let itemlistContainers = document.querySelector(".caetsli");
        itemlistContainers.innerHTML = ""; 

cart.forEach(function(item) {
    let cartiteml = document.createElement("div");
    cartiteml.classList.add("cart-iteml");

    cartiteml.innerHTML = `<div class="cart-iteml">
        <img src="${item.photo}">
        <div class="cart-list-text">
            <span class="cart-list-title">${item.title}</span>
            <span class="cart-list-Price">₹ ${item.price}</span>
            <span class="cart-list-quntity">Quantity - ${item.quantity}</span>
        </div>
        <button class="list-delete">X</button>
    </div>`;

    itemlistContainers.appendChild(cartiteml);
});

    });
});

let nav_cart = document.querySelector(".nav-cart");
let cart_slider = document.querySelector(".cart-slider");
let marginTop = "-200%"; // Initial value

nav_cart.addEventListener("click", function() {
    if (marginTop === "-200%") {
        marginTop = "0"; // Toggle to 0 if currently -200%
    } else {
        marginTop = "-200%"; // Toggle to -200% if currently 0
    }
    cart_slider.style.marginTop = marginTop; // Apply the new marginTop value
});


