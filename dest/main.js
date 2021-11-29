// //BACK TO TOP

// let backtotop = document.querySelector(".back-to-top a");

// function topMain(){
//     window.scrollTo(0, 0);
// }

// backtotop.addEventListener("click", topMain);



// // MENU NAV

// let btnNav = document.querySelector(".btn-nav");
// let menuNav = document.querySelector(".menu-mobile");

// btnNav.addEventListener("click", function(){
//     this.classList.toggle("open");
//     menuNav.classList.toggle("open");
// });

// function hideNav() {
//     btnNav.classList.remove("open");
//     menuNav.classList.remove("open");
// }

// window.addEventListener("resize", function() {
//     if (window.innerWidth > 992) {
//         hideNav();
//     }
// });




// // MENU TOGGLE

// let slider = document.querySelector(".slider");
// let header = document.querySelector("header");

// let heightHeader = header.clientHeight;
// let heightSlider = slider.clientHeight;

// function toggleHeader() {
//     let scrollY = window.pageYOffset;

//     if (scrollY > heightSlider - heightHeader) {
//         header.classList.add("active");
//     }else{
//         header.classList.remove("active");
//     }
// }

// document.addEventListener("scroll", toggleHeader);


// // MENU LANGUAGE

// let btnLang = document.querySelector(".lang-current"),
//     tbLangOp = document.querySelector(".lang-option"),
//     langItem = document.querySelectorAll(".lang-option__item"),
//     nameLang = document.querySelector(".lang-current__name");

// btnLang.addEventListener("click", function(e) {
//     e.stopPropagation();
//     tbLangOp.classList.toggle("open");
// });

// document.addEventListener("click", function() {
//     tbLangOp.classList.remove("open");
// });

// langItem.forEach(item => {
//     item.addEventListener("click", function() {
//         let langCurrentText = nameLang.textContent;
//         let text = this.textContent;
//         nameLang.innerHTML = text;
//         this.innerHTML = langCurrentText;
//     });
// });




// let classMenuLink = document.querySelectorAll(".menu li a");
// let divSection = [];

// function removeActiveLink() {
//     classMenuLink.forEach(element => {
//         element.classList.remove("active");
//     });
// }


// classMenuLink.forEach(item => {
//     let linkHref = item.getAttribute("href").replace("#", ".");
//     let classSection = document.querySelector(linkHref);
//     divSection.push(classSection);

//     item.addEventListener("click", function (e) {
//         e.preventDefault();
//         let location = classSection.offsetTop;
//         window.scroll({
//             top: location,
//             left: 0,
//             behavior: 'smooth'
//         })
        
//         removeActiveLink();

//         this.classList.add("active");
//     });
    
// });


// window.addEventListener("scroll", function () {
//     let scrollY = window.pageYOffset;

//     divSection.forEach((item, i) => {

//         if (scrollY > item.offsetTop - heightHeader && scrollY < item.offsetTop + item.offsetHeight) {
//             removeActiveLink();
//             classMenuLink[i].classList.add("active");
//         } else {
//             classMenuLink[i].classList.remove("active");
//         }
//     });
// })







// let proIntroItem = document.querySelectorAll(".product-intro__video .item .thumbnail");
// let btnWatchVideo = document.querySelector(".info .btn");
// let openModal = document.querySelector(".modal");
// let linkVideo = openModal.querySelector(".modal-video iframe");
// let btnClose = openModal.querySelector(".modal-wrap .btn-close");
// let linkDefault = "https://www.youtube.com/embed/";


// function openModalVideo(item){
//     openModal.classList.add("active");
//     let idVideo = item.querySelector(".video-src").getAttribute("data-src");
//     linkVideo.setAttribute("src", `${linkDefault}${idVideo}?rel=0&amp;autoplay=1`);
// }

// function closeModal() {
//     openModal.classList.remove("active");
//     btnClose.classList.remove("active");
//     linkVideo.setAttribute("src", "");
// };

// proIntroItem.forEach(item => {
//     item.addEventListener("click", function (e) {
//         e.stopPropagation();
//         openModalVideo(this);
//     })
// });

// btnWatchVideo.addEventListener("click", function (e) {
//     e.preventDefault();
//     e.stopPropagation();
//     openModalVideo(this);
// })


// document.addEventListener("click", function() {
//     closeModal();
// });




// let sliderItem = document.querySelectorAll(".slider-item");
// let btnNext = document.querySelector(".control .--next");
// let btnPrev = document.querySelector(".control .--prev");
// let pagingSliderNum = document.querySelector(".paging-number");
// let pagingSliderDot = document.querySelectorAll(".paging-dots__item");
// let currentSlider = 0;


// sliderItem.forEach((element, index) => {
//     if(element.classList.contains("active")){
//         currentSlider = index;
//     }
// });

// pagingSliderNum.innerHTML = `0${currentSlider + 1}`;

// pagingSliderDot[currentSlider].classList.add("active");

// function toSlider(index) {
//     sliderItem[currentSlider].classList.remove("active");
//     pagingSliderDot[currentSlider].classList.remove("active");
//     sliderItem[index].classList.add("active");
//     pagingSliderDot[index].classList.add("active");
//     currentSlider = index;
//     pagingSliderNum.innerHTML = `0${currentSlider + 1}`;
// }


// btnNext.addEventListener("click", function (e) {
//     e.preventDefault();
//     if (currentSlider < sliderItem.length - 1) {
//         toSlider(currentSlider + 1);
//     } else {
//         toSlider(0);
//     }
// });

// btnPrev.addEventListener("click", function (e) {
//     e.preventDefault();
//     if (currentSlider > 0) {
//         toSlider(currentSlider - 1);
//     }else{
//         toSlider(sliderItem.length - 1);
//     }
// });


// pagingSliderDot.forEach((ele, index) => {
//     ele.addEventListener("click", function() {
//         toSlider(index);
//     })
// })



// let tagName = document.querySelectorAll(".tags-link");
// let newsCategory = document.querySelectorAll(".news-category");


// tagName.forEach((element, index) => {
//     element.addEventListener("click", function(e){
//         e.preventDefault();
//         //remove all active class
//         newsCategory.forEach((itemCategory, i) => {
//             itemCategory.classList.remove("active");
//             tagName[i].classList.remove("active");
//         });

//         element.classList.add('active');
//         newsCategory[index].classList.add('active');
//     });
// });


// let faqBtn = document.querySelectorAll(".faq-wrap__accordion");
// let faqContent = document.querySelectorAll(".faq-wrap__content");

// faqBtn.forEach((item, index) => {
//     item.addEventListener("click", function () {
//         faqContent.forEach((itemFaqContent, i) => {
//             itemFaqContent.classList.remove("active");
//             faqBtn[i].classList.remove("active");
//         })

//         this.classList.add("active");
//         faqContent[index].classList.add("active");

//         // this.classList.toggle("active");
//         // if (this.classList.contains("active")) {
//         //     faqContent[index].classList.add("active");
//         // } else {
//         //     faqContent[index].classList.remove("active");
//         // }
//     });
// });







// setTimeout(() => {
//     let viewPage = window.innerHeight;
//     let viewBody = document.querySelector(".homepage").offsetHeight;
    

//     window.addEventListener("scroll", function () {
//         let scrollPage = window.pageYOffset;
//         let headerProgress = document.querySelector(".header-progress");
//         let progressPercent = (scrollPage / (viewBody - viewPage) * 100);

//         headerProgress.style.width = `${progressPercent}%`;
//     })
// }, 1000);

var initPhotoSwipeFromDOM = function(gallerySelector) {

    // parse slide data (url, title, size ...) from DOM elements 
    // (children of gallerySelector)
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for(var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes 
            if(figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };



            if(figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML; 
            }

            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            } 

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if(!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) { 
                continue; 
            }

            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }



        if(index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};

        if(hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');  
            if(pair.length < 2) {
                continue;
            }           
            params[pair[0]] = pair[1];
        }

        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        options = {

            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect(); 

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            }

        };

        // PhotoSwipe opened from URL
        if(fromURL) {
            if(options.galleryPIDs) {
                // parse real index when custom PIDs are used 
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if( isNaN(options.index) ) {
            return;
        }

        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll( gallerySelector );

    console.log({galleryElements});
    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
};


window.addEventListener("load", function () {

    initPhotoSwipeFromDOM('.carousel-img');
    // const galleryItems = $('.gallery__carousel .image').on('click', (e) => {
    //     e.preventDefault()
    // })
})