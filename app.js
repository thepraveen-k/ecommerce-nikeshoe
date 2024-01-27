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


    let chosenProduct = products[0];
        let currentIndex = 0;

        const updateSlider = () => {
            const itemWidth = document.querySelector(".sliderItem").offsetWidth;
            wrapper.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
        };

        menuItems.forEach((item, index) => {
            item.addEventListener("click", () => {
                currentIndex = index;
                chosenProduct = products[index];
                updateSlider();
                updateProductDetails();
            });
        });

        const updateProductDetails = () => {
            const currentProductImg = document.querySelector(".productImg");
            const currentProductTitle = document.querySelector(".productTitle");
            const currentProductPrice = document.querySelector(".productPrice");

            currentProductTitle.textContent = chosenProduct.title;
            currentProductPrice.textContent = "₹" + chosenProduct.price;
            currentProductImg.src = chosenProduct.colors[0].img;

            const currentProductColors = document.querySelectorAll(".color");
            currentProductColors.forEach((color, index) => {
                color.style.backgroundColor = chosenProduct.colors[index].code;
            });
        };

        const currentProductColors = document.querySelectorAll(".color");
        currentProductColors.forEach((color, index) => {
            color.addEventListener("click", () => {
                const currentProductImg = document.querySelector(".productImg");
                currentProductImg.src = chosenProduct.colors[index].img;
            });
        });

        const currentProductSizes = document.querySelectorAll(".size");
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

        // Add next and previous functionality
        const nextButton = document.querySelector(".nextButton");
        const prevButton = document.querySelector(".prevButton");

        nextButton.addEventListener("click", () => {
            if (currentIndex < products.length - 1) {
                currentIndex++;
                chosenProduct = products[currentIndex];
                updateSlider();
                updateProductDetails();
            }
        });

        prevButton.addEventListener("click", () => {
            if (currentIndex > 0) {
                currentIndex--;
                chosenProduct = products[currentIndex];
                updateSlider();
                updateProductDetails();
            }
        });

        // Ensure the slider is updated on initial load
        updateSlider();
        updateProductDetails();
    });

    // Add code to make the payment section responsive
    window.addEventListener("resize", function () {
        const payment = document.querySelector(".payment");

        if (window.innerWidth <= 768) {
            // Set styles for mobile view
            payment.style.width = "100%";
            payment.style.padding = "10px";
        } else {
            // Reset styles for larger screens
            payment.style.width = "500px";
            payment.style.padding = "10px 50px";
        }
    });

    const productButton = document.querySelector(".productButton");
    const payment = document.querySelector(".payment");
    const close = document.querySelector(".close");

    productButton.addEventListener("click", () => {
        payment.style.display = "flex";
    });

    close.addEventListener("click", () => {
        payment.style.display = "none";
    });

