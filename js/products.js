class Product {
	constructor (category, name, logo, site) {
		this.category = category;
		this.name = name;
		this.site = site;
		this.logo = logo;
	}
	
	toString() {
		return "<div class = 'product'>" +
				"<img src = '../images/icons/" + this.logo + ".svg' alt = "+ this.logo + " width = '250px' height = '250px'/>" +
				"<h1>" + this.name + "<p>" +
				"<input type = 'button' class = 'open' value = 'Read more' onclick=\"location.href='" + this.site + "';\"></div>"
	}
	
};

class Category {
	constructor (name, id) {
		this.name = name;
		this.id = id;
	}
	
	toString() {
		return "<option value ='" + this.id + "'>" + this.name + "</option>"
	}
	
};

var base_category = [
	new Category("Calculators", 1),
	new Category("Algorithmic machines", 2),
];
setUpCategory();

var base_product = [
	new Product(1, "Finite state machine calculator", "fsmc_logo", "https://ausf-software.github.io/fsmc/"),
	new Product(1, "Finite-state machine minimization calculator", "dfsmmc_logo", "https://ausf-software.github.io/dfsmmc/"),
	new Product(1, "Hamming Code Calculator", "hcc_logo", "https://ausf-software.github.io/hcc/"),
	new Product(2, "Markov Algorithm", "hcc_logo", "https://ausf-software.github.io/markov-algorithm/"),
	new Product(2, "Multi tape Turing machine emulator", "hcc_logo", "https://ausf-software.github.io/multitape-turing/"),
	new Product(2, "Post machine emulator", "hcc_logo", "https://ausf-software.github.io/post-machine/"),
];
setProducts();

document.getElementById("submit_button").onclick = function(){
	setProducts();
}

function setProducts() {
	var input = document.getElementById('select_category');
	var div = document.getElementById('product_section_container');
	var st = "";
	
	if (input.value == 0) {
		for (var i = 0; i < base_product.length; i++) {
			st += base_product[i].toString();
		}
	} else {
		for (var i = 0; i < base_product.length; i++) {
			if (base_product[i].category == input.value) {
				st += base_product[i].toString();
			}
		}
	}
	
	div.innerHTML = st;
}

function setUpCategory() {
	var input = document.getElementById('select_category');
	for (var i = 0; i < base_category.length; i++) {
		input.innerHTML += base_category[i].toString();
	}
}