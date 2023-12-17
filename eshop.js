document.addEventListener('DOMContentLoaded', function() //javascript se nacte az po nacteni strnaky (resi problem s kosikem)
{ 
    


let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let products = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => { //kliknu na obrazek kosiku a zpristupmnim kosik
    body.classList.add('active');
});

closeShopping.addEventListener('click', () => { //kliknu na box "Zavřít" a zavřu okno košík
    body.classList.remove('active');
});

console.log(openShopping);
console.log(listCard);

const productContainer = document.querySelector('.products');

    
    const productsData = [
        {
            name: "Auto",
            description: "Pořádně rychlá kára",
            price: "100 000",
            //imageSrc: "auto.jpg" ,
        },
        {
            name: "traktor",
            description: "traktor zetor",
            price: "150000",
            imageSrc: "product2.jpg",
        },
        
    ];


    productsData.forEach((productData) => {
       
        const productDiv = document.createElement('div');
        productDiv.classList.add('product'); 

        
        const productImage = document.createElement('img');
        productImage.src = productData.imageSrc; 

        const productName = document.createElement('h2');
        productName.textContent = productData.name;

        const productDescription = document.createElement('p');
        productDescription.textContent = productData.description;

        const productPrice = document.createElement('p');
        productPrice.textContent = productData.price;

       
        productDiv.appendChild(productImage);
        productDiv.appendChild(productName);
        productDiv.appendChild(productDescription);
        productDiv.appendChild(productPrice);

        
        productContainer.appendChild(productDiv);
    });


})