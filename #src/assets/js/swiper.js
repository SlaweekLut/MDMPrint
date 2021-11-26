const title = new Swiper('.title-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    spaceBetween: 40,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
const features = new Swiper('.features-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    draggable: false,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    simulateTouch:false,
    breakpoints: {
        1200: {
            slidesPerView: 4,
            spaceBetween: 70,
        },
        300: {
            slidesPerView: 1,
            spaceBetween: 20,
        }
    }
});
if(window.innerWidth <= 1200) {
    const products = new Swiper('.products-swiper', {
            direction: 'horizontal',
            loop: true,
            draggable: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            slidesPerView: 1,
            spaceBetween: 50,
    });
    const info = new Swiper('.info-swiper', {
            direction: 'horizontal',
            loop: true,
            draggable: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            slidesPerView: 1,
            spaceBetween: 50,
    });
    const infoPayment = new Swiper('.info-payment-swiper', {
            direction: 'horizontal',
            loop: true,
            draggable: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            slidesPerView: 1,
    });
}
window.addEventListener('resize',() => {
    if(window.innerWidth <= 1200) {
        const products = new Swiper('.products-swiper', {
            direction: 'horizontal',
            loop: true,
            draggable: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            slidesPerView: 1,
            spaceBetween: 20,
        });
        const info = new Swiper('.info-swiper', {
            direction: 'horizontal',
            loop: true,
            draggable: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            slidesPerView: 1,
            spaceBetween: 50,
        });
        const infoPayment = new Swiper('.info-payment-swiper', {
                direction: 'horizontal',
                loop: true,
                draggable: false,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                slidesPerView: 1,
        });
    }
})
const blog = new Swiper('.blog-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    draggable: false,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    simulateTouch:false,
    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 70,
        },
        720: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        300: {
            slidesPerView: 1,
            spaceBetween: 20,
        }
    }
});
const recommendation = new Swiper('.recommendation-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    draggable: false,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    simulateTouch:false,
    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 70,
        },
        720: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        300: {
            slidesPerView: 1,
            spaceBetween: 20,
        }
    }
});
const clients = new Swiper('.clients-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    draggable: false,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    simulateTouch:false,
    breakpoints: {
        1200: {
            slidesPerView: 6,
        },
        720: {
            slidesPerView: 4,
            spaceBetween: 0
        },
        300: {
            slidesPerView: 1,
            spaceBetween: 40,
        }
    }
});
const review = new Swiper('.info-review-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    draggable: false,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    simulateTouch:false,
    slidesPerView: 1,
    spaceBetween: 20,
});
const works = new Swiper('.works-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    draggable: false,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1200: {
            slidesPerView: 5,
        },
        720: {
            slidesPerView: 3,
        },
        300: {
            slidesPerView: 1,
            spaceBetween: 40,
        }
    }
});
const popupworks = new Swiper('.popup-works-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    draggable: false,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});
const popupworksmobile = new Swiper('.popup-works-mobile-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    draggable: false,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    pagination: {
        clickable: true,
        el: '.popup-works-mobile-pagination',
        type: 'bullets',
    },
});
const popupreview = new Swiper('.popup-review-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    draggable: false,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});
const popupreviewmobile = new Swiper('.popup-review-mobile-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    draggable: false,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    pagination: {
        clickable: true,
        el: '.popup-review-mobile-pagination',
        type: 'bullets',
    },
});