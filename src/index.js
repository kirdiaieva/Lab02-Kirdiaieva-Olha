import './scss/main.scss';

var categories;
var products;
var displayCategories = false;
var displayBasket = false;

//show windows on click
$("#categories-button").on('click', showCategories);
$("#basket-button").on('click', showBasket);
$("#dim-screen").on('click', hideProductWindow);
$(document).on('click', '.product-image', showProductWindow);

function getAllCategories(){
    $.ajax({
        url: "https://nit.tron.net.ua/api/category/list"
    }).then(function (result) {
        categories = result;
        categories.unshift({"id":"1","name":"All products","description":"All products"});
        for(var i=0; i<categories.length; i++){
            printCategory(categories[i].name, categories[i].id);
        }
        $('.category').on('click', function () {
            showProducts(event.target.id.substring(9));
        })
    });
}

function printCategory(name, id) {
    //document.getElementById("categories-list").innerHTML += "<span class='category' onclick='showProducts(" + id + ")'>" + name + "</span>";
    $("#categories-list").append("<span class='category' id='category-" + id + "'>" + name + "</span>");

}

function showProducts(id){
    $("#product-list").empty();
    var url;
    if (id==1)
        url = "https://nit.tron.net.ua/api/product/list";
    else{
        url = "https://nit.tron.net.ua/api/product/list/category/" + id;
    }
    $.ajax({
        url: url
    }).then(function (result) {
        products = result;
        for(var i = 0; i<products.length; i++){
            createProductCard(i, products[i].price, products[i].special_price, products[i].image_url, products[i].name);
        }
    });
}

//show all products when document is ready
$(document).ready(function(){
    showProducts(1);
    getAllCategories();
});

function createProductCard(id, price, newPrice, image, name){
    if (newPrice!==null) {
        $("#product-list").append("<div class='product-card'><span class='product-price'>" + newPrice + " UAH</span><span class='old-product-price'>" + price + " UAH</span><div class='image-container'><img class='product-image' src='" + image + "'></div><span class='product-name'>" + name + "</span><div class='add-to-basket-button'>Add to basket</div></div>");
    }
    else{
        $("#product-list").append("<div class='product-card'><span class='product-price'>" + price + " UAH</span><div class='image-container'><img class='product-image' src='" + image + "'></div><span class='product-name'>" + name + "</span><div class='add-to-basket-button'>Add to basket</div></div>");
    }
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
