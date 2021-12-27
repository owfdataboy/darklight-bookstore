/*============================Menu Table===================

/* ============================= 1, init  ============================= */
$(document).ready(function () {
    cart.init();
    owlCarousel.init();
    category.init();
    bookAction.init();
    seeMore.init();
});

/* ============================= 2, cart  ============================= */
const cart = {
    init: function () {
        this.count();
        this.removeProduct();
        this.tabPayment();
    },
    count: function () {
        $(".num-in .plus").click(function () {
            let number = $(this).closest(".num-in").attr("number-product");
            if (number == 0) {
                $(this).off("click");
            } else {
                let th = $(this).closest(".num-in").find(".in-num");
                th.val(+th.val() + 1);
            }
        });
        $(".num-in .minus").click(function () {
            let number = $(this).closest(".num-in").attr("number-product");
            if (number == 0) {
                $(this).off("click");
            } else {
                let th = $(this).closest(".num-in").find(".in-num");
                if (th.val() > 1) {
                    th.val(+th.val() - 1);
                }
            }
        });
    },
    tabPayment: function () {
        $(".payment-group .paymentMethod .method").click(function () {
            $(".payment-group .paymentMethod .method").removeClass("active");
            $(this).addClass("active");
        });
    },
    removeProduct: function () {
        $(".section-checkout__left-item .left-item__delete").click(function () {
            $($(this).closest(".section-checkout__left-item")[0]).fadeOut(
                "slow",
                function () {
                    $(this).remove();
                }
            );
            $(this).fadeOut("slow", function () {
                $(this).remove();
            });
        });
    },
};

/* ============================= 3, Category  ============================= */
const category = {
    init: function () {
        this.configEventExpand();
        this.selectOptions();
    },
    configEventExpand: function () {
        const main = document.querySelectorAll("section.section-category");
        main.forEach((item, index) => {
            const allLists = item.querySelectorAll(".category-item");
            allLists.forEach((target) =>
                target.addEventListener("click", () => {
                    target.classList.toggle("active");
                })
            );
        });
    },
    selectOptions: function () {
        const allSectionOption = document.querySelectorAll(
            ".category-filter .list-select"
        );
        allSectionOption.forEach((item) => {
            const allOptions = item.querySelectorAll(".button-component");
            allOptions.forEach((btn, btnIndex) =>
                btn.addEventListener("click", () => {
                    allOptions.forEach((ele, indexEle) => {
                        if (indexEle !== btnIndex)
                            ele.classList.remove("active");
                    });
                    btn.classList.toggle("active");
                })
            );
        });
    },
};

/* ============================= 4, Book action  ============================= */
const bookAction = {
    init: function () {
        this.config();
    },
    config: function () {
        const mains = document.querySelectorAll(".section-book-detail-action");
        mains.forEach((main) => {
            const heartBtn = main.querySelector(".action-item.love");
            const shareBtn = main.querySelector(".action-item.share");
            const pinteresttBtn = main.querySelector(".action-item.pinterest");

            const checkActiveBtn = (item) => {
                item.classList.toggle("active");
            };

            heartBtn.addEventListener("click", () => checkActiveBtn(heartBtn));
            shareBtn.addEventListener("click", () => checkActiveBtn(shareBtn));
            pinteresttBtn.addEventListener("click", () =>
                checkActiveBtn(pinteresttBtn)
            );
        });
    },
};

/* ============================= 5, Owl Carousel  ============================= */
const owlCarousel = {
    init: function () {
        this.setupListVideoCarousel();
        this.setupListBookCarousel();
        this.setupBannerCarousel();
    },
    setupListVideoCarousel: function () {
        const $owl = $("#list-video__box.owl-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1.5,
                },
                575: {
                    items: 3.5,
                },
            },
            loop: true,
            rewind: false,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            smartSpeed: 600,
            mouseDrag: true,
            nav: true,
            dots: false,
            navText: [
                "<img src='./assets/icons/icon-angle-left-white.svg'>",
                "<img src='./assets/icons/icon-angle-right-white.svg'>",
            ],
            autoWidth: false,
            margin: 30,
        });
        $owl.trigger("refresh.owl.carousel");
    },
    setupListBookCarousel: function () {
        let loop = false;
        if (window.innerWidth > 768) loop = false;
        else loop = true;
        var $owl = $("#list-book__box.owl-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 2.2,
                },
                768: {
                    items: 5,
                },
            },
            loop,
            rewind: false,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            smartSpeed: 600,
            mouseDrag: true,
            dots: false,
            navText: [
                "<img src='./assets/icons/icon-angle-left-white.svg'>",
                "<img src='./assets/icons/icon-angle-right-white.svg'>",
            ],
            nav: true,
            autoWidth: false,
            margin: 0,
        });
        $owl.trigger("refresh.owl.carousel");
    },
    setupBannerCarousel: function () {
        var $owl = $("#banner-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
            },
            loop: true,
            rewind: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            smartSpeed: 600,
            mouseDrag: true,
            nav: true,
            dots: true,
            navText: [
                "<img src='./assets/icons/icon-angle-left-blue.svg'>",
                "<img src='./assets/icons/icon-angle-right-blue.svg'>",
            ],
        });
        $owl.trigger("refresh.owl.carousel");
    },
};

/* ============================= 6, See more  ============================= */
const seeMore = {
    init() {
        this.config();
    },
    config() {
        const main = document.querySelectorAll(".see-more-wrapper");
        main.forEach((item, index) => {
            const btnSeeMore = item.querySelector(".see-more-btn");
            btnSeeMore.addEventListener("click", () => {
                item.classList.toggle("see-more-expand");
                const textBtn = btnSeeMore.querySelector("span");
                const imgBtn = btnSeeMore.querySelector("img");
                if (item.className.includes("see-more-expand")) {
                    textBtn.innerHTML = "Thu gọn";
                    imgBtn.src = "./assets/icons/icon-angle-up-blue.svg";
                } else {
                    textBtn.innerHTML = "Xem thêm";
                    imgBtn.src = "./assets/icons/icon-angle-down-blue.svg";
                }
            });
        });
    },
};
