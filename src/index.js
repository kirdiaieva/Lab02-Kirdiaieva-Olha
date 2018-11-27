import './scss/main.scss';

var categories;
var products;

$.ajax({
    url: "http://nit.tron.net.ua/api/category/list"
}).then(function (result) {
    categories = result;
    for(var i=0; i<categories.length; i++){
        printCategory(categories[i].description)
    }
});

$.ajax({
    url: "http://nit.tron.net.ua/api/product/list"
}).then(function (result) {
    products = result;
    for(var i = 0; i<products.length; i++){
        createProductCard(products[i].image_url);
        /*addProductImage();
        addProductName(products[i].name);
        addProductPrice(products[i].price);
        addProductNewPrice();
        addAddToCartButton();*/
    }
});

var category;
function printCategory(value) {
    category = "<span class='category'>" + value + "</span>";
    document.getElementById("categories-list").innerHTML += category;
}

var productCard;
function createProductCard(image){
    productCard = "<div class='product-card'><img class='product-image' src='"+ image +"'></div>";
    document.getElementById("product-list").innerHTML += productCard;
}