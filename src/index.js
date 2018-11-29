import './scss/main.scss';

var categories;
var products;
var displayCategories = false;
var displayBasket = false;

//show windows on click
$("#categories-button").click(showCategories);
$("#basket-button").click(showBasket);
$("#dim-screen").click(hideProductWindow);

//get all categories
$.ajax({
    url: "http://nit.tron.net.ua/api/category/list"
}).then(function (result) {
    categories = result;
    categories.unshift({"id":"1","name":"All products","description":"All products"});
    for(var i=0; i<categories.length; i++){
        printCategory(categories[i].name)
    }
});

//show all products
$.ajax({
    url: "http://nit.tron.net.ua/api/product/list"
}).then(function (result) {
    products = result;
    for(var i = 0; i<products.length; i++){
        createProductCard();
        addProductPrice(i, products[i].price, products[i].special_price);
        addProductImage(i, products[i].image_url);
        addProductName(i, products[i].name);
        createAddToBasketButton(i);
    }
});

function printCategory(name) {
    $("#categories-list").append("<span class='category'>" + name + "</span>");
}

function createProductCard(){
    $("#product-list").append("<div class='product-card'></div>");
}

var productCards = document.getElementsByClassName("product-card");

function addProductImage(id, image) {
    productCards[id].innerHTML += "<div class='image-container'><img class='product-image' src='" + image + "'></div>";
}

function addProductName(id, name) {
    productCards[id].innerHTML += "<span class='product-name'>" + name + "</span>";
}

function addProductPrice(id, price, newPrice){
    if (newPrice!==null) {
        productCards[id].innerHTML += "<span class='product-price'>" + newPrice + " UAH</span>";
        productCards[id].innerHTML += "<span class='old-product-price'>" + price + " UAH</span>";
    }
    else{
        productCards[id].innerHTML += "<span class='product-price'>" + price + " UAH</span>";
    }
}

function createAddToBasketButton(){
    $(".product-card").append("<div class='add-to-basket-button'>Add to basket</div>");
    //productCards[id].innerHTML += "<div class='add-to-basket-button'> Add to basket </div>";
}

function showProductWindow() {
    $("#dim-screen").css("display", "block");
    $("#product-window").css("display", "block");
}

function hideProductWindow() {
    $("#dim-screen").css("display", "none");
    $("#product-window").css("display", "none");
}

function showCategories(){
    if (!displayCategories){
        $("#categories-list").css("display", "block");
        displayCategories = true;
    }
    else{
        $("#categories-list").css("display", "none");
        displayCategories = false;
    }
}

function showBasket(){
    if (!displayBasket){
        $("#basket-window").css("display", "block");
        displayBasket = true;
    }
    else{
        $("#basket-window").css("display", "none");
        displayBasket = false;
    }
}
