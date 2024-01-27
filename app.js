document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".sliderWrapper");
    const menuItems = document.querySelectorAll(".menuItem");


    const products = [
        {
            id: 1,
            title: "Air Force",
            price: 2000,
            colors: [
                {
                    code: "black",
                    img: "img/air.png",
                },
                {
                    code: "red",
                    img: "img/air3.png",
                },
            ],
        },
        {
            id: 2,
            title: "Air Jordan",
            price: 3000,
            colors: [
                {
                    code: "lightgray",
                    img: "img/jordan.png",
                },
                {
                    code: "rgba(9,142,107,255)",
                    img: "img/jordan2.png",
                },
            ],
        },
        {
            id: 3,
            title: "Blazer",
            price: 4000,
            colors: [
                {
                    code: "lightgray",
                    img: "img/blazer.png",
                },
                {
                    code: "#054129",
                    img: "img/blazer2.png",
                },
            ],
        },
        {
            id: 4,
            title: "Crater",
            price: 5000,
            colors: [
                {
                    code: "black",
                    img: "img/crater.png",
                },
                {
                    code: "#d0d5dd",
                    img: "img/crater2.png",
                },
            ],
        },
        {
            id: 5,
            title: "Hippier",
            price: 6000,
            colors: [
                {
                    code: "gray",
                    img: "img/hippie.png",
                },
                {
                    code: "black",
                    img: "img/hippie2.png",
                },
            ],
        },
    ];
    



let choosenProduct = products[0];

    const currentProductImg = document.querySelector(".productImg");
    const currentProductTitle = document.querySelector(".productTitle");
    const currentProductPrice = document.querySelector(".productPrice");
    const currentProductColors = document.querySelectorAll(".color");
    const currentProductSizes = document.querySelectorAll(".size");

    menuItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            const itemWidth = document.querySelector(".sliderItem").offsetWidth;
            wrapper.style.transform = `translateX(${-index * itemWidth}px)`;

            choosenProduct = products[index];

            currentProductTitle.textContent = choosenProduct.title;
            currentProductPrice.textContent = "₹" + choosenProduct.price;
            currentProductImg.src = choosenProduct.colors[0].img;

            currentProductColors.forEach((color, index) => {
                color.style.backgroundColor = choosenProduct.colors[index].code;
            });
        });
    });

    currentProductColors.forEach((color, index) => {
        color.addEventListener("click", () => {
            currentProductImg.src = choosenProduct.colors[index].img;
        });
    });

    currentProductSizes.forEach((size, index) => {
        size.addEventListener("click", () => {
            currentProductSizes.forEach((s) => {
                s.style.backgroundColor = "white";
                s.style.color = "black";
            });
            size.style.backgroundColor = "black";
            size.style.color = "white";
        });
    });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close"); 


productButton.addEventListener("click", () => {
    payment.style.display = "flex"
})

close.addEventListener("click", () => {
    payment.style.display = "none"
})