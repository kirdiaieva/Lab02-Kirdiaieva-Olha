import './scss/main.scss';

var categories;
var products;
var category;
var productCard;

//show windows on click
$("#categories-button").click(showCategories);
$("#basket-button").click(showBasket);

//get all categories
$.ajax({
    url: "http://nit.tron.net.ua/api/category/list"
}).then(function (result) {
    categories = result;
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
    category = "<span class='category'>" + name + "</span>";
    document.getElementById("categories-list").innerHTML += category;
}

function createProductCard(){
    productCard = "<div class='product-card'></div>";
    document.getElementById("product-list").innerHTML += productCard;
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

function createAddToBasketButton(id){
    productCards[id].innerHTML += "<div class='add-to-basket-button'> Add to basket </div>";
}

const categoriesList = document.getElementById("categories-list");
var displayCategories = false;

function showCategories(){
    if (!displayCategories){
        categoriesList.style.display = "block";
        displayCategories = true;
    }
    else{
        categoriesList.style.display = "none";
        displayCategories = false;
    }
}

const basketWindow = document.getElementById("basket-window");
var displayBasket = false;

function showBasket(){
    if (!displayBasket){
        basketWindow.style.display = "block";
        displayBasket = true;
    }
    else{
        basketWindow.style.display = "none";
        displayBasket = false;
    }
}