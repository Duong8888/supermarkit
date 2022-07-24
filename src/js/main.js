// dữ liệu 

var productList = [
    {
        'id': 1,
        'name': 'Hand Cream',
        'avatar': 'https://static.wixstatic.com/media/c837a6_b8785d0e4dbe4a1f8fe00c6c36e25422~mv2.jpg/v1/fill/w_252,h_252,al_c,q_80,usm_0.66_1.00_0.01/c837a6_b8785d0e4dbe4a1f8fe00c6c36e25422~mv2.webp',
        'desc': "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
        'price': 2,
        'categoriesId': 4
    },

    {
        'id': 2,
        'name': 'Herbal Tea 16 ct.',
        'avatar': 'https://static.wixstatic.com/media/c837a6_260c0b2e4a224901b112978a8a2c1c6e~mv2.jpg/v1/fill/w_252,h_252,al_c,q_80,usm_0.66_1.00_0.01/c837a6_260c0b2e4a224901b112978a8a2c1c6e~mv2.webp',
        'desc': "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
        'price': 5,
        'categoriesId': 2
    },

    {
        'id': 3,
        'name': 'Strawberries - 1lb',
        'avatar': 'https://static.wixstatic.com/media/c837a6_7f6d45dc2b004e88ac1f4eee127ff332~mv2.jpg/v1/fill/w_252,h_252,al_c,q_80,usm_0.66_1.00_0.01/c837a6_7f6d45dc2b004e88ac1f4eee127ff332~mv2.webp',
        'desc': "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
        'price': 3,
        'categoriesId': 1
    },

    {
        'id': 4,
        'name': 'Hass Avocados, Ready-to-Eat - 1lb',
        'avatar': 'https://static.wixstatic.com/media/c837a6_b5b9284a44384c8dbce0bc27bad2dda4~mv2.jpg/v1/fill/w_252,h_252,al_c,q_80,usm_0.66_1.00_0.01/c837a6_b5b9284a44384c8dbce0bc27bad2dda4~mv2.webp',
        'desc': "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
        'price': 9,
        'categoriesId': 4
    },

    {
        'id': 5,
        'name': 'Tuna Steak Fillet - 1lb',
        'avatar': 'https://static.wixstatic.com/media/c837a6_58835d9ae93f4c43af863ba0e76ae2a0~mv2.jpg/v1/fill/w_207,h_207,al_c,q_80,usm_0.66_1.00_0.01/c837a6_58835d9ae93f4c43af863ba0e76ae2a0~mv2.webp',
        'desc': "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
        'price': 1,
        'categoriesId': 4
    },

    {
        'id': 6,
        'name': 'Cream Cheese Spread 8 oz.',
        'avatar': 'https://static.wixstatic.com/media/c837a6_cc314d70076e442fadd82ce2e39758a1~mv2.jpg/v1/fill/w_207,h_207,al_c,q_80,usm_0.66_1.00_0.01/c837a6_cc314d70076e442fadd82ce2e39758a1~mv2.webp',
        'desc': "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
        'price': 2.99,
        'categoriesId': 5
    },

    {
        'id': 7,
        'name': 'Thin Spaghetti.',
        'avatar': 'https://static.wixstatic.com/media/c837a6_568af83ef77c4945aa44dd71cafbeb22~mv2.jpg/v1/fill/w_207,h_207,al_c,q_80,usm_0.66_1.00_0.01/c837a6_568af83ef77c4945aa44dd71cafbeb22~mv2.webp',
        'desc': "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
        'price': 4.5,
        'categoriesId': 6
    },

    {
        'id': 8,
        'name': 'Oats and Honey Granola Cereal.',
        'avatar': 'https://static.wixstatic.com/media/c837a6_2dde4d0405d34e2497319ee16a9a096d~mv2.jpg/v1/fill/w_207,h_207,al_c,q_80,usm_0.66_1.00_0.01/c837a6_2dde4d0405d34e2497319ee16a9a096d~mv2.webp',
        'desc': "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
        'price': 8,
        'categoriesId': 2
    },

    {
        'id': 9,
        'name': 'Decaffeinated Instant Coffee',
        'avatar': 'https://static.wixstatic.com/media/c837a6_a3f22d6f9d5740d4ba7e81fdcb2dad1c~mv2.jpg/v1/fill/w_207,h_207,al_c,q_80,usm_0.66_1.00_0.01/c837a6_a3f22d6f9d5740d4ba7e81fdcb2dad1c~mv2.webp',
        'desc': "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
        'price': 8,
        'categoriesId': 2
    },
    {
        'id': 10,
        'name': 'Brown Ale Glass Bottle 16 oz.',
        'avatar': 'https://static.wixstatic.com/media/c837a6_2bd65ba805394358838d82695f3b92e1~mv2.jpg/v1/fill/w_207,h_207,al_c,q_80,usm_0.66_1.00_0.01/c837a6_2bd65ba805394358838d82695f3b92e1~mv2.webp',
        'desc': "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
        'price': 8,
        'categoriesId': 3
    },

    {
        'id': 11,
        'name': 'Banana Bunch - 1lb',
        'avatar': 'https://static.wixstatic.com/media/c837a6_433f9eaf55034486964ef040c3b817f5~mv2.jpg/v1/fill/w_234,h_312,al_c,q_80,usm_0.66_1.00_0.01/c837a6_433f9eaf55034486964ef040c3b817f5~mv2.webp',
        'desc': "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
        'price': 4,
        'categoriesId': 8
    },
    {
        'id': 12,
        'name': 'Whole Milk Gallon, 64 oz.',
        'avatar': 'https://static.wixstatic.com/media/c837a6_12ade01a54ff4859a2f9fa4deaf534a3~mv2.jpg/v1/fill/w_234,h_312,al_c,q_80,usm_0.66_1.00_0.01/c837a6_12ade01a54ff4859a2f9fa4deaf534a3~mv2.webp',
        'desc': "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
        'price': 3,
        'categoriesId': 6
    },
    {
        'id': 13,
        'name': 'Natural Large White Eggs',
        'avatar': 'https://static.wixstatic.com/media/c837a6_6846a2d83d89405eb592b3f0dc2d683b~mv2.jpg/v1/fill/w_234,h_312,al_c,q_80,usm_0.66_1.00_0.01/c837a6_6846a2d83d89405eb592b3f0dc2d683b~mv2.webp',
        'desc': "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
        'price': 4.9,
        'categoriesId': 8
    },
    {
        'id': 14,
        'name': 'Greenhouse Cucumber - 1lb',
        'avatar': 'https://static.wixstatic.com/media/c837a6_4da77aa2a0d64d599c150d9d023a931a~mv2.jpg/v1/fill/w_234,h_312,al_c,q_80,usm_0.66_1.00_0.01/c837a6_4da77aa2a0d64d599c150d9d023a931a~mv2.webp',
        'desc': "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
        'price': 4,
        'categoriesId': 8
    },
    {
        'id': 15,
        'name': 'Fresh-Squeezed Orange Juice.',
        'avatar': 'https://static.wixstatic.com/media/c837a6_04e4857ebe0c4ea3b9fccda10ff08c81~mv2.jpg/v1/fill/w_234,h_312,al_c,q_80,usm_0.66_1.00_0.01/c837a6_04e4857ebe0c4ea3b9fccda10ff08c81~mv2.webp',
        'desc': "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
        'price': 4,
        'categoriesId': 7
    },
    {
        'id': 16,
        'name': 'Beefsteak Tomatoes, Large -1lb',
        'avatar': 'https://static.wixstatic.com/media/c837a6_b6904147666f40988c2b7c4bd616982c~mv2.jpg/v1/fill/w_234,h_312,al_c,q_80,usm_0.66_1.00_0.01/c837a6_b6904147666f40988c2b7c4bd616982c~mv2.webp',
        'desc': "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
        'price': 4,
        'categoriesId': 1
    },


];
var categoriesList = [
    {
        'id': 1,
        'categoriesName': 'Vegetables',
        'img': 'https://static.wixstatic.com/media/c837a6_54f3e8f5b6ed4a6a92a3e7e72c45c6c0~mv2.png/v1/fill/w_338,h_299,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_99478112_2.png'
    },
    {
        'id': 2,
        'categoriesName': 'Bakery',
        'img': 'https://static.wixstatic.com/media/c837a6_27969dc29ca74784bdcda6dfb7f8e8f5~mv2.png/v1/fill/w_386,h_248,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_1485281813.png'
    },
    {
        'id': 3,
        'categoriesName': 'Wine',
        'img': 'https://static.wixstatic.com/media/c837a6_24bc47c82c4e44c496b517fad1b91a80~mv2.png/v1/fill/w_284,h_384,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/B_009_3.png'
    },
    {
        'id': 4,
        'categoriesName': 'Dairy & Eggs',
        'img': 'https://static.wixstatic.com/media/c837a6_f5efa954aaab4579816a29703d8ab59f~mv2.png/v1/fill/w_354,h_299,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_136358678.png'
    },
    {
        'id': 5,
        'categoriesName': 'Meat & Poultry',
        'img': 'https://static.wixstatic.com/media/c837a6_c91b032b1ce6483ca30e14bea694fac9~mv2.png/v1/fill/w_353,h_257,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_1383180032_2.png'
    },
    {
        'id': 6,
        'categoriesName': 'Soft Drinks',
        'img': 'https://static.wixstatic.com/media/c837a6_78211f5f45854b4dbbb99c5779e8fc6e~mv2.png/v1/fill/w_279,h_399,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_1434271904_4.png'
    },
    {
        'id': 7,
        'categoriesName': 'Cleaning Supplies',
        'img': 'https://static.wixstatic.com/media/c837a6_9ea4c59481ae46049411e798469725b8~mv2.png/v1/fill/w_297,h_318,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_123544366.png'
    },
    {
        'id': 8,
        'categoriesName': 'Cereal & Snacks',
        'img': 'https://static.wixstatic.com/media/c837a6_467f29f6d4ef4fdf8897910dec40537a~mv2.png/v1/fill/w_300,h_341,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Korn_Flakes_2.png'
    },

];



// kết thúc animation loading
var container = document.querySelector('.container');
var loading = document.querySelector('.loading');
if (loading) {
    setTimeout(function () {
        loading.style.opacity = '0';
        loading.style.zIndex = '-100';
    }, 2000);
}


// duyệt mảng rproduct hiển thị sản phẩm

var boxProduct = document.querySelectorAll('.main-slider-best');
if (boxProduct) {
    function displayProduct() {
        for (let item of productList) {
            for (let i in boxProduct) {
                boxProduct[i].innerHTML += `
                    <div class="product">
                    <a href="detail.html?id=${item.id}" class="avatar-product">
                        <img src="${item.avatar}" alt="">
                    </a>
                    <a href="" class="name-price">
                        <span class="name-product">${item.name}</span>
                        <span class="price-product">$${item.price}</span>
                    </a>
                    <div class="add-cart">
                        <form action="">
                            <div class="minus">-</div>
                            <input type="text" value="1" class="numberProduct">
                            <div class="add">+</div>
                        </form>
                        <div class="btn-add-cart" id="${item.id}" onclick = "addCart(this)">Add to Cart</div>
                    </div>
                    </div>
            `;
            }

        }
    }
    displayProduct();
}

// slider sản phẩm
var next = document.querySelectorAll('.bx-chevron-right');
var back = document.querySelectorAll('.bx-chevron-left');
var productSlider = document.querySelectorAll('.product');
var widthSlide = document.querySelector('.main-slider-best');
if (widthSlide) {
    var responsive = container.getClientRects()[0];
    var widthMain = widthSlide.getClientRects()[0];
    if (responsive.width > 1024) {
        var px = ((widthMain.width) / 100) * 20;
    } else if (responsive.width > 740) {
        var px = ((widthMain.width) / 100) * 25;
    } else {
        var px = ((widthMain.width) / 100) * 100;
    }

    var count = 0;
    var countRun = 0;
    function sliderNext() {

        console.log(countRun);
        if (countRun == productList.length - 5 && responsive.width > 1024) {
            return;
        } else if (countRun == productList.length - 4 && responsive.width > 740) {
            return;
        } else if (countRun == productList.length - 1) {
            return;
        }
        count += px;
        for (let i of productSlider) {
            i.style.transform = 'translateX(' + -count + 'px)';
        }
        countRun++;
    }

    function sliderBack() {
        if (countRun == 0 && responsive.width > 1024) {
            return;
        } else if (countRun == 0 && responsive.width > 740) {
            return;
        } else if (countRun == 0) {
            return;
        }
        count -= px;
        for (let i of productSlider) {
            i.style.transform = 'translateX(' + -count + 'px)';
        }
        countRun--;
    }


    for (let index = 0; index < next.length; index++) {
        next[index].addEventListener('click', sliderNext);
        back[index].addEventListener('click', sliderBack);
    };
}


// sử lý onscroll bg sub footer
/* transform: translateX(-10%); */
var bg = document.querySelector('.sub-footer-bg>img');
if (bg) {
    var z = 0;
    function animationBg() {

        var x = bg.getClientRects()[0];
        if (x.top < 100) {
            if (z <= 200) {
                bg.style.transform = 'translateX(-' + z + 'px)';
                z += 20;
            }
        } else {
            if (z >= 0) {
                bg.style.transform = 'translateX(-' + z + 'px)';
                z -= 20;
            }
        }
    }
    window.addEventListener('scroll', animationBg);
}

// duyệt mảng hiển thị categories

var mainCategories = document.querySelector('.main-categories');
if (mainCategories) {
    function displayCategories() {
        for (let item of categoriesList) {
            mainCategories.innerHTML += `
                    <div class="box-categories">
                        <div class="categories-img">
                            <img src="${item.img}" alt="">
                        </div>
                        <p class="categories-name">
                            ${item.categoriesName}
                        </p>
                    </div>
            `;
        }
    }
    displayCategories();
}


// validate form
var signUp = document.querySelector('#submit-signUp');
var signIn = document.querySelector('#submit-signIn');
var contact =  document.querySelector('#contactSubmit');
function checkFrom() {
    var countErro = 0;
    let name = document.querySelector('#name');
    let lastname = document.querySelector('#lastname');
    let phone = document.querySelector('#phone');
    let email = document.querySelector('#email');
    let pass = document.querySelector('#password');
    let rePass = document.querySelector('#re-password');
    let span = document.querySelectorAll('span');
    let spanContact = document.querySelectorAll('.spanErro');
    if (signUp) {
        if (name.value.length == 0) {
            span[2].innerText = "Vui lòng nhập tên.";
            countErro++;
        } else {
            span[2].innerText = "";
        }
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
            span[1].innerText = "Email không hợp lệ.";
            countErro++;
        } else {
            span[1].innerText = "";
        }
        if (pass.value.length == 0) {
            span[3].innerText = "Vui lòng nhập password.";
            countErro++;
        } else {
            span[3].innerText = "";
        }
        if (rePass.value != pass.value) {
            span[4].innerText = "Mật Khẩu không Khớp.";
            countErro++;
        } else {
            span[4].innerText = "";
        }
        if (countErro == 0) {
            swal("Sent", "Sign Up Success.", "success");
        }
    } else if (signIn) {
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
            span[1].innerText = "Email không hợp lệ.";
            countErro++;
        } else {
            span[1].innerText = "";
        }
        if (pass.value.length == 0) {
            span[2].innerText = "Vui lòng nhập password.";
            countErro++;
        } else {
            span[2].innerText = "";
        }
        if (countErro == 0) {
            swal("Sent", "Logged in successfully.", "success");
        }
    }else if (contact) {
        if (name.value.length == 0) {
            spanContact[0].innerText = "Vui lòng nhập tên";
            countErro++;
        } else {
            spanContact[0].innerText = "";
        }
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
            spanContact[2].innerText = "Email không hợp lệ.";
            countErro++;
        } else {
            spanContact[2].innerText = "";
        }
        if (lastname.value.length == 0) {
            spanContact[1].innerText = "Vui lòng nhập họ.";
            countErro++;
        } else {
            spanContact[1].innerText = "";
        }
        if (phone.value.length == 0) {
            spanContact[3].innerText = "Vui lòng nhập số điện thoại.";
            countErro++;
        } else {
            spanContact[3].innerText = "";
        }

        if (countErro == 0) {
            swal("Sent", "Logged in successfully.", "success");
        }
    }
}
if(contact){
    contact.addEventListener('click', checkFrom);
}
if (signUp) {
    signUp.addEventListener('click', checkFrom);
}

if (signIn) {
    signIn.addEventListener('click', checkFrom);
}


// detail product 
var mainDetail = document.querySelector('.detail-product');
if (mainDetail) {
    var idProduct = new URLSearchParams(window.location.search).get('id');
    function detailDisplay() {
        for (let i of productList) {
            if (i.id == idProduct) {
                var idDetail = i;
            }
        }
        mainDetail.innerHTML = `
        <article class="detail-product">
        <div class="detail-left">
            <img src="${idDetail.avatar}" alt="">
        </div>
        <div class="detail-right">
            <form action="">
                <p class="detail-name">${idDetail.name}</p>
                <span class="detail-price">$${idDetail.price}</span>
                <label for="quantity">Quantity</label>
                <input type="number" value="1" min="0" id="quantity">
                <button>Add Cart</button>
            </form>
            <div class="detail-info">
                <p class="desc-content">${idDetail.desc}</p>
                </div>
            </div>
        </article>
        `;
    }
    detailDisplay();
}
// hiển thị giá khi kéo thanh price
var sliderPrice = document.querySelector('.select-price>input');
var spanPricespanPrice = document.querySelector('.select-price>span');
var titleCategories = document.querySelector('.title-display-categories');
if (sliderPrice) {
    sliderPrice.onmousemove = function () {
        spanPricespanPrice.innerText = "$" + sliderPrice.value;
        productList.forEach(element => {
            mainProductList.innerHTML = ``;
        });
        for (let item in productList) {
            if (productList[item].price <= sliderPrice.value) {

                mainProductList.innerHTML += `
                    <div class="product">
                        <a href="detail.html?id=${productList[item].id}" class="avatar-product">
                            <img src="${productList[item].avatar}" alt="">
                        </a>
                        <a href="" class="name-price">
                            <span class="name-product">${productList[item].name}</span>
                            <span class="price-product">$${productList[item].price}</span>
                        </a>
                        <div class="add-cart">
                            <form action="">
                                <div class="minus">-</div>
                                <input type="text" value="1" class="numberProduct">
                                <div class="add">+</div>
                            </form>
                            <div class="btn-add-cart" id="${productList[item].id}" onclick = "addCart(this)">Add to Cart</div>
                        </div>
                    </div>
                `;
            }
        }
    }
}


var sidebar = document.querySelector('.categories-menu');
//  hiển thị sidebar categories
if (sliderPrice) {
    function displaySidebar() {
        categoriesList.forEach(element => {
            sidebar.innerHTML += `
                <li class="categories-items" onclick="animationClick(this)">${element.categoriesName}</li>
            `;
        });
    }
    displaySidebar();
}

// hiển thị product bên trang product
var mainProductList = document.querySelector('.list-items');
if (mainProductList) {
    function displayProduct2() {
        for (let item of productList) {
            mainProductList.innerHTML += `
            <div class="product">
                <a href="detail.html?id=${item.id}" class="avatar-product">
                    <img src="${item.avatar}" alt="">
                </a>
                <a href="" class="name-price">
                    <span class="name-product">${item.name}</span>
                    <span class="price-product">$${item.price}</span>
                </a>
                <div class="add-cart">
                    <form action="">
                        <div class="minus">-</div>
                        <input type="text" value="1" class="numberProduct">
                        <div class="add">+</div>
                    </form>
                    <div class="btn-add-cart" id="${item.id}" onclick = "addCart(this)">Add to Cart</div>
                </div>
            </div>
        `;
        }

    }
    displayProduct2();
}


// xử lí thanh price và animation click categories và hiển thị sản phẩm
var indexList = document.querySelectorAll('.categories-items');
var activeBg = document.querySelector('.activeBg');

var first = document.querySelector('.first');


if (sliderPrice) {
    function overlay() {
        mainProductList.style.animation = 'overlay 2s';
        setTimeout(function () {
            mainProductList.style.animation = '';
        }, 1000);
    }
    function animationClick(e) {
        // sử lý active khi phần tử dc click
        for (let i in indexList) {
            if (indexList[i].innerHTML == e.innerHTML) {
                indexList.forEach(element => {
                    element.style.color = '#000';
                });
                activeBg.style.transform = 'translateY(' + i + '00%)';
                indexList[i].style.color = '#fff';
                // thay đổi title
                titleCategories.innerText = e.innerText;
                overlay();
            }
        }
        var newId = 0;
        for (let key in categoriesList) {
            if (e.innerText == categoriesList[key].categoriesName) {
                newId = categoriesList[key].id;
            }
        };
        // xóa dữ liệu cũ
        productList.forEach(element => {
            mainProductList.innerHTML = ``;
        });
        // lọc sản phẩm theo danh mục
        for (let i of productList) {
            if (newId == i.categoriesId) {
                mainProductList.innerHTML += `
                <div class="product">
                    <a href="detail.html?id=${i.id}" class="avatar-product">
                        <img src="${i.avatar}" alt="">
                    </a>
                    <a href="" class="name-price">
                        <span class="name-product">${i.name}</span>
                        <span class="price-product">$${i.price}</span>
                    </a>
                    <div class="add-cart">
                        <form action="">
                            <div class="minus">-</div>
                            <input type="text" value="1" class="numberProduct">
                            <div class="add">+</div>
                        </form>
                        <div class="btn-add-cart" id="${i.id}" onclick = "addCart(this)">Add to Cart</div>
                    </div>
                </div>
            `;
            }
        }
    }
    // hiển thị toàn bộ sản phẩm khi bấm vào all categories
    first.addEventListener('click', function () {
        // xóa dữ liệu cũ click nhiều lần vẫn ok :V
        productList.forEach(element => {
            mainProductList.innerHTML = ``;
        });
        displayProduct2();
    });


}

// thêm số lượng sản phẩm + tiền khi thêm sản phẩm

var add = document.querySelectorAll('.add');
var minus = document.querySelectorAll('.minus');
var numberProduct = document.querySelectorAll('.numberProduct');
var priceProduct = document.querySelectorAll('.price-product');
if (add || minus || sliderPrice) {
    var arrPrice = [];
    for (var i = 0; i < add.length; i++) {
        var gia = priceProduct[i].innerText.slice(1);
        arrPrice.push(gia);
    }
    for (let i in add) {
        add[i].onclick = function () {
            numberProduct[i].value++;
            priceProduct[i].innerText = "$" + Math.round((numberProduct[i].value) * arrPrice[i]);
        };
        minus[i].onclick = function () {
            if (numberProduct[i].value < 1) {
                numberProduct[i].value = 1;
            }
            numberProduct[i].value--;
            priceProduct[i].innerText = "$" + Math.round((numberProduct[i].value) * arrPrice[i]);
        };
    }

}

var btnAdd = document.querySelectorAll('.btn-add-cart');
if (btnAdd) {
    var overlayCart = document.querySelector('.main-overlay');
    var sidebarCart = document.querySelector('.sidebar-cart');
    var sidebarMani = document.querySelector('.main-sidebar');
    var cartNew = [];
    var countSidebar = 0;
    function addCart(a) {
        // khá là ok la
        var idCart = a.id
        cartNew.push(idCart);
        for(let item of productList){
            if(item.id == a.id){
                sidebarMani.innerHTML += `
                <div class="box-product-sidebar">
                    <div class="product-avatar-sidebar">
                        <img src="${item.avatar}" alt="">
                    </div>
                    <div class="cart-info">
                        <p class="name-product-sidebar">${item.name}</p>
                        <p class="porduct-price-sidebar">$${item.price}</p>
                    </div>
                </div>
                `;
            }
        }
        animationCart();
        addLocalStorage();
    }
    
    function animationCart() {
        if (countSidebar % 2 == 0) {
            overlayCart.style.zIndex = '100';
            sidebarCart.style.transform = 'translateX(0%)';
        } else {
            overlayCart.style.zIndex = '-1';
            sidebarCart.style.transform = 'translateX(100%)';
        }
        countSidebar++;
    }
    if(overlayCart){
        overlayCart.addEventListener('click',animationCart);
    }
    var countAdd = 0;
    function addLocalStorage() {
        localStorage.setItem('arrCartId', cartNew);
    }
    function removeLocalStorage() {
        localStorage.clear(arrCart);
    }

    var mainCart = document.querySelector('.main-cart');
    if(mainCart){
        function displayMyCart() {
            var getId = localStorage.getItem('arrCartId');
            var arrID = getId.split(",");
            for(let i of productList){
                for(let j of arrID){
                    if(i.id == j){
                        mainCart.innerHTML += `
                        <div class="product-add-cart">
                            <div class="cart-left">
                                <img src="${i.avatar}" alt="">
                            </div>
                            <div class="cart-right">
                                <p class="name-product-cart">${i.name}</p>
                                <p class="price-product-cart">$${i.price}</p>
                                <form action="">
                                    <div class="minus-product-cart">-</div>
                                    <input type="text" value="1" class="numberProduct">
                                    <div class="add-product-cart">+</div>
                                </form>
                            </div>
                            <i onclick = "removeProductCart(this)" class="bx bx-x"></i>
                        </div>
                    `;
                    }
                }
            }
        }
        displayMyCart();
        function removeProductCart(ev){
        }
    }
}

// hiệu ứng animation từ thư viện js "scrollrevealjs.org"
ScrollReveal().reveal('.main-slider-best', { duration: 2000});
ScrollReveal().reveal('.box-categories', { interval: 300 });
ScrollReveal().reveal('.item-location', { interval: 300 });














