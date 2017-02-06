$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['accueil', 'bellevue', 'quartier-bellevue', 'encombrants-solidaires', 'ampleur-association', 'operateurs', 'environnements-solidaires', 'lien-social', 'porte-à-porte', 'explication-nom', 'conclusion', 'crédit'],
        navigation: true,
        navigationPosition: 'right',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        onLeave: function(index, nextIndex, direction)
        {
            if (nextIndex===1)
            {
                $('#fp-nav').fadeOut();
            }

            
        },
        afterLoad: function(anchorLink, index)
        {
            if (index===1)
            {
                $('#fp-nav').hide();
                $("#text_slide3").removeClass('dezoom');
                $("#titre_slide3").removeClass('apparition_text_slide3');
                $("#ville1_side3").removeClass('apparition_ville1_slide3');
                $("#text_slide3").removeClass('disparition_text_slide3');
                $("#titre_slide3").removeClass('disparition_text_slide3');
            }
            else
            {
                $('#fp-nav').fadeIn();
            }

            if (index===3)
            {
                $("#text_slide3").addClass('dezoom');
                $("#titre_slide3").addClass('apparition_text_slide3');
                $("#ville1_side3").addClass('apparition_ville1_slide3');
                $("#text_slide3").addClass('disparition_text_slide3');
                $("#titre_slide3").addClass('disparition_text_slide3');
                $("#ville1_side3").addClass('disparition_ville1_slide3');
            }
        },
        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
});





/*var $window = $(window);
var $div_concerné = $('#slide3');
 
var scroll_max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var wrapper_height = $('#wrapper').height();
var wrapper_width = $('#wrapper').width();
 
$window.scroll(function() {
    //console.log(scroll_max);
         
    $('#slide3').css("top", "+=300");
    $('#slide3').css("left", "+=300");
       
});*/