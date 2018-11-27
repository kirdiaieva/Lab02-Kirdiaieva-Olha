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
});

var category;
function printCategory(value) {
    category = "<span class='category'>" + value + "</span>";
    document.getElementById("categories-list").innerHTML += category;
}

var product;
function createProduct(value){
    product = "<div class='product-card'>" + value + "</div>";
    document.getElementById("product-list").innerHTML += product;
}