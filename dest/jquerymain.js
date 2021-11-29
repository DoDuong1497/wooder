$(document).ready(function(){

    $(".back-to-top a").click(function(e) {
        e.preventDefault();
        $(document).scrollTop(0);
    });





    $(".btn-nav").on("click", function() {
        $(this).toggleClass("open");
        $(".menu-mobile").toggleClass("open");
    });

    $(window).on("resize", function() {
        if($(document).width() > 992){
            $(".btn-nav").removeClass("open");
            $(".menu-mobile").removeClass("open");
        }
    });

    





    let heightHeader = $("header").height();
    let heightSlider = $(".slider").height(); 

    $(document).on("scroll", function () {
        let scrollY = $(document).scrollTop();

        if (scrollY > heightSlider - heightHeader) {
            $("header").addClass("active");
        }else{
            $("header").removeClass("active");
        }
    })





    $(".lang-current").on("click", function (e) {
        e.stopPropagation();
        $(".lang-option").toggleClass("open");
    })
    
    $(document).on("click", function () {
        $(".lang-option").removeClass("open");
    })
    
    
    $(".lang-option__item").on("click", function () {
        let langCurrentText = $(".lang-current__name").text();
        let text = $(this).text();
        $(".lang-current__name").html(text);
        $(this).html(langCurrentText);
    })




    let divSection = [];

    $(".menu li a").each(function(index, element) {
        let linkHref = $(element).attr("href").replace("#", ".");
        divSection.push(linkHref);

        $(element).on("click", function (e) {
            e.preventDefault();
            let location = $(divSection[index]).offset().top;
            $(window).scrollTop(location - $('header').height());
            $(".menu li a").removeClass("active");
            $(this).addClass("active");
        })
    })

    $(window).on("scroll", function () {
        let scrollY = $(document).scrollTop();
    
        $(divSection).each((indexDivSection, eleDivSection) => {
            if (scrollY > $(eleDivSection).offset().top - heightHeader && scrollY < $(eleDivSection).offset().top + $(eleDivSection).outerHeight()) {
                $(".menu li a").each((index, element) => {
                    $(element).removeClass("active");
                });
                $(".menu li a").eq(indexDivSection).addClass("active");
            } else {
                $(".menu li a").eq(indexDivSection).removeClass("active");
            }
        });
    })





    let proIntroItem = $(".product-intro__video .item .thumbnail");
    let linkDefault = "https://www.youtube.com/embed/";

    function openModalVideo(item){
        $(".modal").addClass("active");
        let idVideo = $(item).children("div").attr("data-src");
        $(".modal-video iframe").attr("src", `${linkDefault}${idVideo}?rel=0&amp;autoplay=1`);
    }

    function closeModal() {
        $(".modal").removeClass("active");
        $(".modal-wrap .btn-close").removeClass("active");
        $(".modal-video iframe").attr("src", "");
    };

    proIntroItem.each((index, element) => {
        $(element).on("click", function (e) {
            e.stopPropagation();
            openModalVideo($(this));
        })
    })

    $(".info .btn").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        openModalVideo($(this));
    })

    $(document).on("click", function() {
        closeModal();
    });






    $('.main-carousel').flickity({
        cellAlign: 'center',
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        lazyLoad: true,
        wrapAround: true
    });

    
    let $sliderWooder = $('.main-carousel').flickity();

    $sliderWooder.on( 'change.flickity', function( event, index ) {
        $(".paging-dots__item").removeClass("active");
        $(".paging-dots__item").eq(index).addClass("active");
        let idSlider = (index + 1).toString().padStart(2,"0");
        $(".paging-number").text(idSlider);
    });

    $(".paging-dots__item").eq(0).addClass("active");

    $('.paging-dots').on( 'click', '.paging-dots__item', function() {
        $(".paging-dots__item").removeClass("active");
        var index = $(this).index();
        $(this).addClass("active");
        $sliderWooder.flickity( 'select', index );
    });

    $('.control .--prev').on( 'click', function() {
        $('.main-carousel').flickity('previous');
    });

    $('.control .--next').on( 'click', function() {
        $('.main-carousel').flickity('next');
    });

    $(".paging-dots__item").each((index, element) => {
        $(element).on("click", function() {
            $('.main-carousel').flickity( 'select', index );
        })
    })





    // let sliderItem = $(".slider-item");
    // let pagingSliderDot = $(".paging-dots__item");
    // let currentSlider = 0;

    // sliderItem.each((index, element) => {
    //     if($(element).hasClass("active")){
    //         currentSlider = index;
    //     }
    // });

    // $(".paging-number").text(`${currentSlider + 1}`);

    // $(pagingSliderDot[currentSlider]).addClass("active");
    
    // function toSlider(index) {
    //     $(sliderItem[currentSlider]).removeClass("active");
    //     $(pagingSliderDot[currentSlider]).removeClass("active");
    //     $(sliderItem[index]).addClass("active");
    //     $(pagingSliderDot[index]).addClass("active");
    //     currentSlider = index;
    //     $(".paging-number").text(`${currentSlider + 1}`);
    // }

    // $(".control .--next").on("click", function (e) {
    //     e.preventDefault();
    //     if (currentSlider < sliderItem.length - 1) {
    //         toSlider(currentSlider + 1);
    //     } else {
    //         toSlider(0);
    //     }
    // });

    // $(".control .--prev").on("click", function (e) {
    //     e.preventDefault();
    //     if (currentSlider > 0) {
    //         toSlider(currentSlider - 1);
    //     }else{
    //         toSlider(sliderItem.length - 1);
    //     }
    // });

    // pagingSliderDot.each((index, element) => {
    //     $(element).on("click", function() {
    //         toSlider(index);
    //     })
    // })





    $(".tags-link").each((index, element) => {
        $(element).on("click", function(e){
            e.preventDefault();
            //remove all active class
            $(".news-category").each((indexCategory, itemCategory) => {
                $(itemCategory).removeClass("active");
                $(".tags-link").eq(indexCategory).removeClass("active");
            });
    
            $(element).addClass('active');
            $(".news-category").eq(index).addClass('active');
        });
    });





    $(".faq-wrap__accordion").each((index, element) => {
        $(element).on("click", function () {
            $(".faq-wrap__content").each((indexFaqContent, itemFaqContent) => {
                $(itemFaqContent).removeClass("active");
                $(".faq-wrap__accordion").eq(indexFaqContent).removeClass("active");
            })
    
            $(this).addClass("active");
            $(".faq-wrap__content").eq(index).addClass("active");
        });
    })
    





    setTimeout(() => {
        let viewPage = $(window).innerHeight();
        let viewBody = $(".homepage").outerHeight();
        
    
        $(window).on("scroll", function () {
            let scrollY = $(document).scrollTop();
            let progressPercent = (scrollY / (viewBody - viewPage) * 100);
    
            $(".header-progress").css("width", `${progressPercent}%`);
        })
    }, 1000);




    

    $('.photos-wrap').flickity({
        cellAlign: 'center',
        freeScroll: true,
        contain: true,
        prevNextButtons: false,
        pageDots: false
    });

    let $carouselPhoto = $('.photos-wrap').flickity();

    let $progressPhoto = $('.timeline-percent');

    $carouselPhoto.on( 'scroll.flickity', function( event, progress ) {
        progress = Math.max( 0, Math.min( 1, progress ) );
        $progressPhoto.width( progress * 100 + '%' );
    });
    
});







