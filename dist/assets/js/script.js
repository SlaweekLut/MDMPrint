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
});;
let files = document.querySelectorAll('.files')
let inputsFile = document.querySelectorAll('.file-input')

inputsFile.forEach(function(item, index) {
  item.addEventListener('change', event => onFileSelected(event, index))
})


function onFileSelected(event, index) {
  let selectedFile = event.target.files;

  for (let i = 0; i < selectedFile.length; i++) {
    const element = selectedFile[i];
    let uploadFile = document.createElement('div')
    let imgFile = document.createElement('img')
    let textFile = document.createElement('p')
    let loadFile = document.createElement('div')
    loadFile.classList.add('file-load')
    uploadFile.classList.add('file')
    imgFile.classList.add('file__img')
    textFile.classList.add('file__text', 'font-lg', 'font-weight-medium')
    uploadFile.appendChild(imgFile)
    uploadFile.appendChild(textFile)
    uploadFile.appendChild(loadFile)
    imgFile.style.opacity = 0
    let xhr = new XMLHttpRequest();

    xhr.upload.onprogress = function (event) {
      val = Math.ceil(event.loaded / (event.total / 160))
      prcn = Math.ceil(event.loaded / (event.total / 100))
      loadFile.innerHTML = 
          `
          <p class='file-load__precent font-lg font-weight-medium'>${prcn}%</p>
          <svg width="50" height="50" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" ></circle>
            <circle cx="25" cy="25" r="20" style="stroke-dasharray: ${val},160"></circle>
          </svg > 
          `
    };

    textFile.innerText = element.name
    let reader = new FileReader();
    reader.onload = function (element) {
      if (element.target.result.indexOf('image') != -1) {
        imgFile.src = element.target.result;
      }
      else imgFile.src = '/assets/img/upload-document.svg'
    };
    xhr.onloadend = function (element) {
      imgFile.style.opacity = 1
      uploadFile.removeChild(loadFile)
    }
    xhr.open("POST", "");
    xhr.send(element);

    reader.readAsDataURL(element);
    files[index].appendChild(uploadFile)
  }
};

let popupContainer = document.querySelector('.popup-container')

let services = document.querySelector(".header-services"),
  servicesButton = document.querySelector(".header-services__title")

let searchFilter = document.querySelector(".header-search__fillter")

let orderPopup = document.querySelector(".order-popup"),
  orderPopupOpen = [ document.querySelector("#orderPopupOpen"), document.querySelector("#mobileOrderPopupOpen") ],
  orderPopupClose = document.querySelector("#orderPopupClose"),
  orderPopupSelect = document.querySelector("#orderPopupDeliver")

let orderChoiseDeliver = document.querySelectorAll(".choise-deliver"),
  orderDeliverText = document.querySelector(".deliver-text"),
  orderPopupSelectAddress = document.querySelector("#orderPopupAddress"),
  orderChoiseAddress = document.querySelectorAll(".choise-address"),
  orderAddressText = document.querySelector(".address-text")

let cityPopup = document.querySelector(".city-popup"),
  cityPopupOpen = document.querySelectorAll(".city-popup-open"),
  cityPopupClose = document.querySelector("#cityPopupClose")

let searchPopup = document.querySelector(".search-popup"),
  searchPopupOpen = document.querySelector("#searchPopupOpen"),
  searchPopupClose = document.querySelector("#searchPopupClose")

let navMobile = document.querySelector(".header-mobile"),
  navMobileOpen = document.querySelector("#navMobileOpen"),
  navMobileClose = document.querySelector("#navMobileClose"),
  navMobileDropdown = document.querySelectorAll(".nav-mobile-dropdown"),
  navMobileBtn = document.querySelectorAll(".nav-mobile-item__main-dropdown-title"),
  navDropdownList = document.querySelectorAll(".nav-mobile-item__dropdown-list"),
  navDropdownBtn = document.querySelectorAll(".nav-mobile-item__dropdown-btn"),
  navCategoryList = document.querySelectorAll(".nav-mobile-item__dropdown-category"),
  navCategoryBtn = document.querySelectorAll(".nav-mobile-item__dropdown-category-title"),
  navSearchMobileOpen = document.querySelector('.nav-search__open'),
  navSearchMobileDropdown = document.querySelector('.nav-search-dropdown'),
  navSearchMobileClose = document.querySelector('.nav-search__close')

let servicesCategoryList = document.querySelectorAll(".header-menu-categories-products__row"),
  servicesCategoryBtn = document.querySelectorAll(".header-menu-categories-item__title"),
  titleMobileItem = document.querySelectorAll(".title-mobile__item"),
  mainChoiseCategories = document.querySelectorAll( ".main-services-choice-categories__item" ),
  orderSelect = document.querySelector("#orderDeliver"),
  orderBlockDeliverText = document.querySelector(".deliver-block-text"),
  orderBlockChoiseDeliver = document.querySelectorAll(".choise-block-deliver"),
  orderBlockSelectAddress = document.querySelector("#orderAddress"),
  orderBlockAddressText = document.querySelector(".address-block-text"),
  orderBlockChoiseAddress = document.querySelectorAll(".choise-block-address"),
  faqDropdown = document.querySelectorAll(".info-faq-item"),
  calculatorNavBtn = document.querySelectorAll(".calculator-nav__btn"),
  calculatorPrice = document.querySelector(".calculator-price"),
  priceTable = document.querySelector(".price-table")

let calculatorOrder = document.querySelector(".calculator-order"),
  calculatorOtherBtn = document.querySelectorAll(".calculator-other-nav__btn"),
  calculatorSelect = document.querySelectorAll(".calculator-select"),
  calculatorOtherFile = document.querySelector(".calculator-other-file"),
  calculatorOthertTemplates = document.querySelector(".calculator-other-templates"),
  calculatorOthertResult = document.querySelector(".calculator-other-result"),
  calculatorDeliver = document.querySelector('#calculatorDeliver'),
  calculatorAddress = document.querySelector('#calculatorAddress'),
  calculatorChoiseDeliver = document.querySelectorAll(".choise-calculator-deliver"),
  calculatorDeliverText = document.querySelector(".deliver-calculator-text"),
  calculatorChoiseAddress = document.querySelectorAll(".choise-calculator-address"),
  calculatorAddressText = document.querySelector(".address-calculator-text")

let priceTableDropdown = document.querySelectorAll(".price-table-dropdown"),
  infoNavBtn = document.querySelectorAll(".info-choice__btn"),
  infoAdvantages = document.querySelector('.info-advantages-container'),
  infoDeliver = document.querySelector('.info-deliver-container'),
  infoPayment = document.querySelector('.info-payment-container'),
  infoFaq = document.querySelector('.info-faq-container'),
  infoReview = document.querySelector('.info-review-container'),
  infoDescription = document.querySelector('.info-description-container'),
  popupWorks = document.querySelector('.popup-works'),
  popupWorksClose = document.querySelectorAll('.popup-close', '.popup-works-close'),
  popupWorksOpen = document.querySelectorAll('.works-slide'),
  popupWorksMore = [...document.querySelectorAll('.popup-works-link')],
  popupWorksMoreClose = [...document.querySelectorAll('.close-more-works')],
  popupWorksMoreRow = [...document.querySelectorAll('.popup-works-slide__row')],
  popupReviewMore = [...document.querySelectorAll('.popup-review-link')],
  popupReviewMoreClose = [...document.querySelectorAll('.close-more-review')],
  popupReviewMoreRow = [...document.querySelectorAll('.popup-review-slide__row')],
  popupReview = document.querySelector('.popup-review'),
  popupReviewClose = document.querySelectorAll('.popup-close', '.popup-review-close'),
  popupReviewOpen = document.querySelectorAll('.review-item-photo__item'),
  mapControl = document.querySelectorAll('.map-control'),
  mapMap = document.querySelector('.office-map'),
  mapMetro = document.querySelector('.office-metro'),
  mapList = document.querySelector('.office-list'),
  officeControl = document.querySelectorAll('.office-control'),
  officeOffices = document.querySelector('.office-offices'),
  officeContacts = document.querySelector('.office-contacts'),
  officeDocuments = document.querySelector('.office-documents'),
  ourWorksItem = document.querySelectorAll('.our-works-item'),
  infoChoiceMobileTitle = document.querySelector('.info-choice-mobile__title'),
  infoChoiceMobileBtn = document.querySelectorAll('.info-choice-mobile__btn'),
  calculatorChoiceMobileTitle = document.querySelector('.calculator-nav-mobile__title'),
  calculatorChoiceMobileBtn = document.querySelectorAll('.calculator-nav-mobile__btn'),
  officeChoiceMobileTitle = document.querySelector('.office-nav-mobile__title'),
  officeChoiceMobileBtn = document.querySelectorAll('.office-nav-mobile__btn')

let calculatorBlockService = document.querySelector( ".calculator-block-service" ),
  calculatorBlockPrint = document.querySelector(".calculator-block-print"),
  calculatorBlockMaterial = document.querySelector(".calculator-block-material"),
  calculatorBlockLaminate = document.querySelector(".calculator-block-laminate"),
  calculatorBlockPrime = document.querySelector(".calculator-block-prime"),
  calculatorBlockFinish = document.querySelector(".calculator-block-finish"),
  calculatorBlockCut = document.querySelector(".calculator-block-cut"),
  calculatorBlockFormate = document.querySelector(".calculator-block-formate"),
  choiseBlockService = document.querySelectorAll(".choise-block-service"),
  choiseBlockPrint = document.querySelectorAll(".choise-block-print"),
  choiseBlockMaterial = document.querySelectorAll(".choise-block-material"),
  choiseBlockLaminate = document.querySelectorAll(".choise-block-laminate"),
  choiseBlockPrime = document.querySelectorAll(".choise-block-prime"),
  choiseBlockFinish = document.querySelectorAll(".choise-block-finish"),
  choiseBlockCut = document.querySelectorAll(".choise-block-cut"),
  choiseBlockFormate = document.querySelectorAll(".choise-block-formate");

let orderPopupClick = document.querySelector('.order-popup-click'),
    cartPopup = document.querySelector('.popup-payment'),
    oneClick = [...document.querySelectorAll('.oneclick')],
    addCart = [...document.querySelectorAll('.addcart')],
    closeOrderPopupClick = document.querySelector('#orderClickPopupClose'),
    clickDeliver = document.querySelector('#clickDeliver'),
    clickAddress = document.querySelector('#clickAddress'),
    clickChoiseDeliver = document.querySelectorAll(".choise-click-deliver"),
    clickDeliverText = document.querySelector(".deliver-click-text"),
    clickChoiseAddress = document.querySelectorAll(".choise-click-address"),
    clickAddressText = document.querySelector(".address-click-text"),
    popupPaymentClose = document.querySelector('.popup-payment-close'),
    popupPaymentList = document.querySelectorAll('.popup-payment-item__more'),
    popupPaymentComment = document.querySelectorAll('.popup-payment-item__comment'),
    popupPaymentListHeader = document.querySelectorAll('.popup-payment-item__more-header'),
    popupPaymentCommentHeader = document.querySelectorAll('.popup-payment-item__comment-header'),
    cartList = [...document.querySelectorAll('.cart-item__more')],
    cartComment = [...document.querySelectorAll('.cart-item__comment')],
    cartListHeader = [...document.querySelectorAll('.cart-item__more-header')],
    cartCommentHeader = [...document.querySelectorAll('.cart-item__comment-header')],
		productColumnNav = [...document.querySelectorAll('.product-column-nav__item')],
		productColumnType = [...document.querySelectorAll('.product-column-types__type')],
    reviewItemMorePhoto = [...document.querySelectorAll('.review-item-photo__item-last')],
    reviewItemMorePhotoRow = [...document.querySelectorAll('.review-item-photo__hidden')],
    reviewItemPhoto = [...document.querySelectorAll('.review-item-photo')],
    filterDropdownTitle = [...document.querySelectorAll('.filter-dropdown__title')],
    filterDropdownList = [...document.querySelectorAll('.filter-dropdown-list')],
    registrationNavBtn = document.querySelectorAll('.registration-nav__title'), 
    registrationNavColumn = document.querySelectorAll('.registration-column') 

let popupDiscount = document.querySelector('.discount-popup');
let printType = document.querySelectorAll('.print-column-type-item')

const opencloseBtn = (element) => element.classList.toggle("active");
const closeBtn = (element) => element.classList.remove("active");
const openBtn = (element) => element.classList.add("active");
const oneOpenBtn = (element, index) => {
  element.forEach((item) => {
    if (item.classList.contains("active")) item.classList.remove("active");
  });
  element[index].classList.add("active");
};
const selectOpen = (item, index, list) => {
  if(list[index].classList.contains('active')) list[index].classList.remove('active')
  else {
    for (let i = 0; i < list.length; i++) {
      list[i].classList.remove('active')
      list[index].classList.add('active')
    }
  }
}

if(registrationNavBtn) {
  registrationNavBtn.forEach((item, index) => {
    item.addEventListener('click', () => {
      oneOpenBtn(registrationNavColumn,index)
      oneOpenBtn(registrationNavBtn,index)
    })
  })
}
if(filterDropdownTitle) {
  filterDropdownTitle.forEach((item, index) => {
    item.addEventListener('click', () => {
      if(!filterDropdownList[index].classList.contains('active'))openBtn(filterDropdownList[index])
      else {
        filterDropdownList[index].classList.remove('active')
      }
    })
  })
}
if(reviewItemMorePhoto) {
  reviewItemMorePhoto.forEach((item, index) => {
    item.addEventListener('click', () => {
      item.classList.add('active')
      reviewItemMorePhotoRow[index].classList.add('active')
    })
  })
}
if(popupWorksMore) {
  popupWorksMore.forEach((item, index) => {
    item.addEventListener('click', () => {
      popupWorksMoreRow[index].classList.add('active')
    })
  })
  popupWorksMoreClose.forEach((item, index) => {
    item.addEventListener('click', () => {
      popupWorksMoreRow[index].classList.remove('active')
    })
  })
}
if(popupReviewMore) {
  popupReviewMore.forEach((item, index) => {
    item.addEventListener('click', () => {
      popupReviewMoreRow[index].classList.add('active')
    })
  })
  popupReviewMoreClose.forEach((item, index) => {
    item.addEventListener('click', () => {
      popupReviewMoreRow[index].classList.remove('active')
    })
  })
}
if(calculatorChoiceMobileTitle) {
  calculatorChoiceMobileTitle.addEventListener('click', () => {
    opencloseBtn(calculatorChoiceMobileTitle)
  })
  calculatorChoiceMobileBtn.forEach(item => {
    item.addEventListener('click', () => {
      switch (+item.value) {
        case 0:
          calculatorPrice.classList.add("active");
          priceTable.classList.remove("active");
          calculatorOrder.classList.remove("active");
          calculatorChoiceMobileTitle.innerHTML = item.innerText + '<img src="assets/img/arrow.svg" alt="Стрелочка">'
          calculatorChoiceMobileBtn.forEach(element => {
            closeBtn(element)
          })
          openBtn(item)
          break;
        case 1:
          calculatorPrice.classList.remove("active");
          priceTable.classList.add("active");
          calculatorOrder.classList.remove("active");
          calculatorChoiceMobileTitle.innerHTML = item.innerText + '<img src="assets/img/arrow.svg" alt="Стрелочка">'
          calculatorChoiceMobileBtn.forEach(element => {
            closeBtn(element)
          })
          openBtn(item)
          break;
        case 2:
          calculatorPrice.classList.remove("active");
          priceTable.classList.remove("active");
          calculatorOrder.classList.add("active");
          calculatorChoiceMobileTitle.innerHTML = item.innerText + '<img src="assets/img/arrow.svg" alt="Стрелочка">'
          calculatorChoiceMobileBtn.forEach(element => {
            closeBtn(element)
          })
          openBtn(item)
          break;
      }
      closeBtn(calculatorChoiceMobileTitle)
    })
  })
}
if(officeChoiceMobileTitle) {
  officeChoiceMobileTitle.addEventListener('click', () => {
    opencloseBtn(officeChoiceMobileTitle)
  })
  officeChoiceMobileBtn.forEach(item => {
    item.addEventListener('click', () => {
      switch (+item.value) {
        case 0:
          console.log(1);
          officeOffices.classList.add("active");
          officeContacts.classList.remove("active");
          officeDocuments.classList.remove("active");
          officeChoiceMobileTitle.innerHTML = item.innerHTML + '<img src="assets/img/arrow.svg" alt="Стрелочка">'
          officeChoiceMobileBtn.forEach(element => {
            closeBtn(element)
          })
          openBtn(item)
          break;
        case 1:
          officeOffices.classList.remove("active");
          officeContacts.classList.add("active");
          officeDocuments.classList.remove("active");
          officeChoiceMobileTitle.innerHTML = item.innerHTML + '<img src="assets/img/arrow.svg" alt="Стрелочка">'
          officeChoiceMobileBtn.forEach(element => {
            closeBtn(element)
          })
          openBtn(item)
          break;
        case 2:
          officeOffices.classList.remove("active");
          officeContacts.classList.remove("active");
          officeDocuments.classList.add("active");
          officeChoiceMobileTitle.innerHTML = item.innerHTML + '<img src="assets/img/arrow.svg" alt="Стрелочка">'
          officeChoiceMobileBtn.forEach(element => {
            closeBtn(element)
          })
          openBtn(item)
          break;
        }
      closeBtn(officeChoiceMobileTitle)
    })
  })
}
if(infoChoiceMobileTitle) {
  infoChoiceMobileTitle.addEventListener('click', () => {
    opencloseBtn(infoChoiceMobileTitle)
  })
  infoChoiceMobileBtn.forEach(item => {
    item.addEventListener('click', () => {
      switch (+item.value) {
        case 0:
          infoAdvantages.classList.add("active");
          infoDeliver.classList.remove("active");
          infoPayment.classList.remove("active");
          infoFaq.classList.remove("active");
          infoReview.classList.remove("active");
          infoDescription.classList.remove("active");
          infoChoiceMobileTitle.innerHTML = item.innerText + '<img src="assets/img/arrow.svg" alt="Стрелочка">'
          infoChoiceMobileBtn.forEach(element => {
            closeBtn(element)
          })
          openBtn(item)
          break;
        case 1:
          infoAdvantages.classList.remove("active");
          infoDeliver.classList.add("active");
          infoPayment.classList.remove("active");
          infoFaq.classList.remove("active");
          infoReview.classList.remove("active");
          infoDescription.classList.remove("active");
          infoChoiceMobileTitle.innerHTML = item.innerText + '<img src="assets/img/arrow.svg" alt="Стрелочка">'
          infoChoiceMobileBtn.forEach(element => {
            closeBtn(element)
          })
          openBtn(item)
          break;
        case 2:
          infoAdvantages.classList.remove("active");
          infoDeliver.classList.remove("active");
          infoPayment.classList.add("active");
          infoFaq.classList.remove("active");
          infoReview.classList.remove("active");
          infoDescription.classList.remove("active");
          infoChoiceMobileTitle.innerHTML = item.innerText + '<img src="assets/img/arrow.svg" alt="Стрелочка">'
          infoChoiceMobileBtn.forEach(element => {
            closeBtn(element)
          })
          openBtn(item)
          break;
        case 3:
          infoAdvantages.classList.remove("active");
          infoDeliver.classList.remove("active");
          infoPayment.classList.remove("active");
          infoFaq.classList.add("active");
          infoReview.classList.remove("active");
          infoDescription.classList.remove("active");
          infoChoiceMobileTitle.innerHTML = item.innerText + '<img src="assets/img/arrow.svg" alt="Стрелочка">'
          infoChoiceMobileBtn.forEach(element => {
            closeBtn(element)
          })
          openBtn(item)
          break;
        case 4:
          infoAdvantages.classList.remove("active");
          infoDeliver.classList.remove("active");
          infoPayment.classList.remove("active");
          infoFaq.classList.remove("active");
          infoReview.classList.add("active");
          infoDescription.classList.remove("active");
          infoChoiceMobileTitle.innerHTML = item.innerText + '<img src="assets/img/arrow.svg" alt="Стрелочка">'
          infoChoiceMobileBtn.forEach(element => {
            closeBtn(element)
          })
          openBtn(item)
          break;
        case 5:
          infoAdvantages.classList.remove("active");
          infoDeliver.classList.remove("active");
          infoPayment.classList.remove("active");
          infoFaq.classList.remove("active");
          infoReview.classList.remove("active");
          infoDescription.classList.add("active");
          infoChoiceMobileTitle.innerHTML = item.innerText + '<img src="assets/img/arrow.svg" alt="Стрелочка">'
          infoChoiceMobileBtn.forEach(element => {
            closeBtn(element)
          })
          openBtn(item)
          break;
      }
      closeBtn(infoChoiceMobileTitle)
    })
  })
}
if(navSearchMobileOpen) {
  navSearchMobileOpen.addEventListener('click', () => openBtn(navSearchMobileDropdown))
  navSearchMobileClose.addEventListener('click', () => closeBtn(navSearchMobileDropdown))
}
if(popupDiscount) window.addEventListener('scroll', () => {
  if(window.scrollY > 600) popupDiscount.classList.add('active')
  else popupDiscount.classList.remove('active') 
})
if(productColumnNav) productColumnNav.forEach((item, index) => item.addEventListener('click', () => {
	closeBtn(productColumnType, index);
	oneOpenBtn(productColumnNav, index);
}))
if(ourWorksItem) ourWorksItem.forEach((item, index) => item.addEventListener('click',() => openBtn(popupWorks)))
if(cartListHeader) cartListHeader.forEach((item, index) => item.addEventListener('click',() => selectOpen(item, index, cartList)))
if(cartCommentHeader) cartCommentHeader.forEach((item, index) => item.addEventListener('click',() => selectOpen(item, index, cartComment)))
if(popupPaymentListHeader) popupPaymentListHeader.forEach((item, index) => item.addEventListener('click',() => selectOpen(item, index, popupPaymentList)))
if(popupPaymentCommentHeader) popupPaymentCommentHeader.forEach((item, index) => item.addEventListener('click',() => selectOpen(item, index, popupPaymentComment)))
if(popupPaymentClose) popupPaymentClose.addEventListener('click', () => closeBtn(cartPopup))
if(addCart) addCart.forEach(item => item.addEventListener('click', () => openBtn(cartPopup)))
if(oneClick) oneClick.forEach(item => item.addEventListener('click', () => openBtn(orderPopupClick)))
if(closeOrderPopupClick) closeOrderPopupClick.addEventListener('click', () => closeBtn(orderPopupClick))
if(printType) printType.forEach((item, index) => item.addEventListener('click',() => oneOpenBtn(printType, index)))
if(searchFilter) searchFilter.addEventListener('click', () => opencloseBtn(searchFilter))
if(servicesButton) servicesButton.addEventListener("click", () => opencloseBtn(services));
if(orderPopupOpen) orderPopupOpen.forEach((item) => item.addEventListener("click", () => {
  if(navMobile.classList.contains('active')) navMobile.classList.remove('active')
  openBtn(orderPopup)
}));
if(orderPopupClose) orderPopupClose.addEventListener("click", () => closeBtn(orderPopup));
if(cityPopupOpen) cityPopupOpen.forEach((item) => item.addEventListener("click", () => openBtn(cityPopup)));
if(cityPopupClose) cityPopupClose.addEventListener("click", () => closeBtn(cityPopup));
if(searchPopupOpen) searchPopupOpen.addEventListener("click", () => openBtn(searchPopup));
if(searchPopupClose) searchPopupClose.addEventListener("click", () => closeBtn(searchPopup));
if(navMobileOpen) navMobileOpen.addEventListener("click", () => openBtn(navMobile));
if(navMobileClose) navMobileClose.addEventListener("click", () => closeBtn(navMobile));
if(navMobileBtn) navMobileBtn.forEach((item, index) => item.addEventListener("click", () => opencloseBtn(navMobileDropdown[index])) );
if(navDropdownBtn) navDropdownBtn.forEach((item, index) => item.addEventListener("click", () => opencloseBtn(navDropdownList[index])));
if(navCategoryBtn) navCategoryBtn.forEach((item, index) => item.addEventListener("click", () => opencloseBtn(navCategoryList[index])));
if(servicesCategoryBtn) servicesCategoryBtn.forEach((item, index) => item.addEventListener("click", () => oneOpenBtn(servicesCategoryList, index)));
if(orderPopupSelect) orderPopupSelect.addEventListener("click", () =>opencloseBtn(orderPopupSelect));
if(orderPopupSelectAddress) orderPopupSelectAddress.addEventListener("click", () => opencloseBtn(orderPopupSelectAddress));
if(titleMobileItem) titleMobileItem.forEach((item, index) => item.addEventListener("click", () => {
  if(item.classList.contains('active')) item.classList.remove('active') 
  else oneOpenBtn(titleMobileItem, index)
}));
if(mainChoiseCategories) mainChoiseCategories.forEach((item, index) => item.addEventListener("click", () => oneOpenBtn(mainChoiseCategories, index)) );
if(orderSelect) orderSelect.addEventListener("click", () => opencloseBtn(orderSelect));
if(orderBlockSelectAddress) orderBlockSelectAddress.addEventListener("click", () => opencloseBtn(orderBlockSelectAddress));
if(faqDropdown) faqDropdown.forEach((item, index) => item.addEventListener("click", () => {
  if(item.classList.contains('active')) item.classList.remove('active') 
  else oneOpenBtn(faqDropdown, index)
}));
if(priceTableDropdown) priceTableDropdown.forEach((item, index) => item.addEventListener("click", () => oneOpenBtn(priceTableDropdown, index)));
if(popupWorksOpen) popupWorksOpen.forEach(item => item.addEventListener('click', () => openBtn(popupWorks)))
if(popupWorksClose) popupWorksClose.forEach(item => item.addEventListener('click', () => closeBtn(popupWorks)))
if(popupReviewOpen) popupReviewOpen.forEach(item => item.addEventListener('click', () => openBtn(popupReview)))
if(popupReviewClose) popupReviewClose.forEach(item => item.addEventListener('click', () => closeBtn(popupReview)))
if(calculatorAddress) calculatorAddress.addEventListener('click',() => opencloseBtn(calculatorAddress))
if(calculatorDeliver) calculatorDeliver.addEventListener('click',() => opencloseBtn(calculatorDeliver))
if(clickAddress) clickAddress.addEventListener('click',() => opencloseBtn(clickAddress))
if(clickDeliver) clickDeliver.addEventListener('click',() => opencloseBtn(clickDeliver))
orderBlockChoiseDeliver.forEach((item) =>
  item.addEventListener("click", function () {
    if (item.innerText == "Самовывоз")
      orderBlockSelectAddress.classList.add("self");
    if (item.innerText != "Самовывоз")
      orderBlockSelectAddress.classList.remove("self");
    orderBlockDeliverText.innerText = item.innerText;
  })
);
orderBlockChoiseAddress.forEach((item) =>
  item.addEventListener("click", function () {
    orderBlockAddressText.innerText = item.innerText;
  })
);
orderChoiseDeliver.forEach((item) =>
  item.addEventListener("click", function () {
    if (item.innerText == "Самовывоз")
      orderPopupSelectAddress.classList.add("self");
    if (item.innerText != "Самовывоз")
      orderPopupSelectAddress.classList.remove("self");
    orderDeliverText.innerText = item.innerText;
  })
);
orderChoiseAddress.forEach((item) =>
  item.addEventListener("click", function () {
    orderAddressText.innerText = item.innerText;
  })
);
calculatorChoiseDeliver.forEach((item) =>
  item.addEventListener("click", function () {
    if (item.innerText == "Самовывоз")
      calculatorAddress.classList.add("self");
    if (item.innerText != "Самовывоз")
      calculatorAddress.classList.remove("self");
    calculatorDeliverText.innerText = item.innerText;
  })
);
calculatorChoiseAddress.forEach((item) =>
  item.addEventListener("click", function () {
    calculatorAddressText.innerText = item.innerText;
  })
);
clickChoiseDeliver.forEach((item) =>
  item.addEventListener("click", function () {
    if (item.innerText == "Самовывоз")
      clickAddress.classList.add("self");
    if (item.innerText != "Самовывоз")
      clickAddress.classList.remove("self");
    clickDeliverText.innerText = item.innerText;
  })
);
clickChoiseAddress.forEach((item) =>
  item.addEventListener("click", function () {
    clickAddressText.innerText = item.innerText;
  })
);

mapControl.forEach((item, index) => {
  item.addEventListener("click", () => {
    oneOpenBtn(mapControl, index);
    switch (index) {
      case 0:
        mapList.classList.add("active");
        mapMap.classList.remove("active");
        mapMetro.classList.remove("active");
        break;
      case 1:
        mapList.classList.remove("active");
        mapMap.classList.add("active");
        mapMetro.classList.remove("active");
        break;
      case 2:
        mapList.classList.remove("active");
        mapMap.classList.remove("active");
        mapMetro.classList.add("active");
        break;
    }
  });
});
officeControl.forEach((item, index) => {
  item.addEventListener("click", () => {
    oneOpenBtn(officeControl, index);
    switch (index) {
      case 0:
        officeOffices.classList.add("active");
        officeContacts.classList.remove("active");
        officeDocuments.classList.remove("active");
        break;
      case 1:
        officeOffices.classList.remove("active");
        officeContacts.classList.add("active");
        officeDocuments.classList.remove("active");
        break;
      case 2:
        officeOffices.classList.remove("active");
        officeContacts.classList.remove("active");
        officeDocuments.classList.add("active");
        break;
    }
  });
});
calculatorNavBtn.forEach((item, index) => {
  item.addEventListener("click", () => {
    oneOpenBtn(calculatorNavBtn, index);
    switch (index) {
      case 0:
        calculatorPrice.classList.add("active");
        priceTable.classList.remove("active");
        calculatorOrder.classList.remove("active");
        break;
      case 1:
        calculatorPrice.classList.remove("active");
        priceTable.classList.add("active");
        calculatorOrder.classList.remove("active");
        break;
      case 2:
        calculatorPrice.classList.remove("active");
        priceTable.classList.remove("active");
        calculatorOrder.classList.add("active");
        break;
    }
  });
});
infoNavBtn.forEach((item, index) => {
  item.addEventListener("click", () => {
    oneOpenBtn(infoNavBtn, index);
    switch (index) {
      case 0:
        infoAdvantages.classList.add("active");
        infoDeliver.classList.remove("active");
        infoPayment.classList.remove("active");
        infoFaq.classList.remove("active");
        infoReview.classList.remove("active");
        infoDescription.classList.remove("active");
        break;
      case 1:
        infoAdvantages.classList.remove("active");
        infoDeliver.classList.add("active");
        infoPayment.classList.remove("active");
        infoFaq.classList.remove("active");
        infoReview.classList.remove("active");
        infoDescription.classList.remove("active");
        break;
      case 2:
        infoAdvantages.classList.remove("active");
        infoDeliver.classList.remove("active");
        infoPayment.classList.add("active");
        infoFaq.classList.remove("active");
        infoReview.classList.remove("active");
        infoDescription.classList.remove("active");
        break;
      case 3:
        infoAdvantages.classList.remove("active");
        infoDeliver.classList.remove("active");
        infoPayment.classList.remove("active");
        infoFaq.classList.add("active");
        infoReview.classList.remove("active");
        infoDescription.classList.remove("active");
        break;
      case 4:
        infoAdvantages.classList.remove("active");
        infoDeliver.classList.remove("active");
        infoPayment.classList.remove("active");
        infoFaq.classList.remove("active");
        infoReview.classList.add("active");
        infoDescription.classList.remove("active");
        break;
      case 5:
        infoAdvantages.classList.remove("active");
        infoDeliver.classList.remove("active");
        infoPayment.classList.remove("active");
        infoFaq.classList.remove("active");
        infoReview.classList.remove("active");
        infoDescription.classList.add("active");
        break;
    }
  });
});
calculatorOtherBtn.forEach((item, index) => {
  item.addEventListener("click", () => {
    oneOpenBtn(calculatorOtherBtn, index);
    switch (index) {
      case 0:
        calculatorOtherFile.classList.add("active");
        calculatorOthertTemplates.classList.remove("active");
        calculatorOthertResult.classList.remove("active");
        break;
      case 1:
        calculatorOtherFile.classList.remove("active");
        calculatorOthertTemplates.classList.add("active");
        calculatorOthertResult.classList.remove("active");
        break;
      case 2:
        calculatorOtherFile.classList.remove("active");
        calculatorOthertTemplates.classList.remove("active");
        calculatorOthertResult.classList.add("active");
        break;
    }
  });
});

const choise = (list, text) => {
  list.forEach((item) =>
    item.addEventListener("click", function () {
      text.innerText = item.innerText
    })
  );
};

if(calculatorBlockService)
  calculatorBlockService.addEventListener("click", () =>
    choise(choiseBlockService, calculatorBlockService),
  );
if(calculatorBlockPrint)
calculatorBlockPrint.addEventListener("click", () =>
  choise(choiseBlockPrint, calculatorBlockPrint)
);
if(calculatorBlockMaterial)
calculatorBlockMaterial.addEventListener("click", () =>
  choise(choiseBlockMaterial, calculatorBlockMaterial)
);
if(calculatorBlockLaminate)
calculatorBlockLaminate.addEventListener("click", () =>
  choise(choiseBlockLaminate, calculatorBlockLaminate)
);
if(calculatorBlockPrime)
calculatorBlockPrime.addEventListener("click", () =>
  choise(choiseBlockPrime, calculatorBlockPrime)
);
if(calculatorBlockFinish)
calculatorBlockFinish.addEventListener("click", () =>
  choise(choiseBlockFinish, calculatorBlockFinish)
);
if(calculatorBlockCut)
calculatorBlockCut.addEventListener("click", () =>
  choise(choiseBlockCut, calculatorBlockCut)
);
if(calculatorBlockFormate)
calculatorBlockFormate.addEventListener("click", () =>
  choise(choiseBlockFormate, calculatorBlockFormate)
);

calculatorSelect.forEach((item, index) => {
  item.addEventListener("click", () => selectOpen(item, index, calculatorSelect))
})

