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
            //$('#titre_gauche').hide();
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

                $('#div_apparition_fleche').addClass('apparition_fleche');

                /* Reset animation autres pages */
                /*$("#text_slide3").removeClass('dezoom');
                $("#titre_slide3").removeClass('apparition_text_slide3');
                $("#ville1_side3").removeClass('apparition_ville1_slide3');
                $("#text_slide3").removeClass('disparition_text_slide3');
                $("#titre_slide3").removeClass('disparition_text_slide3');*/
            }
            else
            {
                $('#fp-nav').fadeIn();
            }

            if (index===3)
            {
                $("#text_slide3_app").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', anim_apres_dezoom);
                $("#ville1_slide3").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', anim_apres_app_ville1);
                $("#text_slide3_app").addClass('dezoom');
            }

            if (index===11)
            {
                $('#p1').addClass('apparition_p1');
                $('#p2').addClass('apparition_p2');
                $('#p3').addClass('apparition_p3');
                $('#social_network').addClass('apparition_logos');
            }
            if (index==6){
                //$("#t2").fadeIn(2000);
                $("#t2").addClass('apparition_t2');
                $("#op1").addClass('apparition_op1');

                $("#t22").addClass('disparition_t2');
                $("#op11").addClass('disparition_op1');
                $("#op2").addClass('apparition_op2');
                $("#t3").addClass('apparition_t3');
                $("#t4").addClass('apparition_t4');
                $("#t33").addClass('disparition_t3');
                $("#t44").addClass('disparition_t3');
                $("#op22").addClass('disparition_op2');
                $("#op3").addClass('apparition_op3');
                $("#t5").addClass('apparition_t5');
                $("#op4").addClass('apparition_op4');
                $("#t6").addClass('apparition_t6');
                //$("#t2").hide();
            }
            if (index===7) {
                $("#titre1_s7").addClass('apparition_titre_slide5');
                $("#titre2_s7").addClass('apparition_temps2_slide5');
                $("#titre_s7").addClass('dezoom_s7');
                $("#img_nadia").addClass('apparition_temps4_slide5');
                $("#texte_s7").addClass('apparition_temps5_slide5');

            }
            if (index===8) {
                $("#titre_s8").addClass('apparition_titre_slide5');
                $("#text_slide8").addClass('apparition_temps2_slide5');
                $("#myChart2").addClass('apparition_temps4_slide5');
            }
            if (index===5) {
                $("#titre_gauche").addClass('apparition_titre_slide5');
                $("#titre_droite").addClass('apparition_temps2_slide5');
                $("#bloc_texte").addClass('apparition_temps5_slide5');
                $("#img_bloc1").addClass('apparition_temps2_slide5');
                $("#img_bloc2").addClass('apparition_temps3_slide5');
                $("#img_bloc3").addClass('apparition_temps3_slide5');
                $("#img_bloc4").addClass('apparition_temps3_slide5');
                $("#img_bloc5").addClass('apparition_temps3_slide5');
                $("#img_bloc6").addClass('apparition_temps3_slide5');
                $("#img_bloc7").addClass('apparition_temps3_slide5');
                $("#img_bloc8").addClass('apparition_temps3_slide5');
                $("#micro-onde").addClass('apparition_temps6_slide5');
                $("#lave").addClass('apparition_temps6_slide5');
                $("#commode").addClass('apparition_temps6_slide5');
                $("#grille_pain").addClass('apparition_temps6_slide5');
                $("#traits").addClass('apparition_temps3_slide5');
                $("#nom_bailleur").addClass('apparition_temps4_slide5');
                $("#texte_gauche").addClass('apparition_temps7_slide5');
                $("#ligne").addClass('apparition_temps7_slide5');
                $("#dates").addClass('apparition_temps4_slide5');

            }
        },
        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
});

function anim_apres_dezoom (e) {
    $("#titre_slide3").addClass('apparition_titre_slide3');
    $("#ville1_slide3").addClass('apparition_ville1_slide3');
};

function anim_apres_app_ville1 (e) {
    document.querySelector("#ville1_slide3").style.bottom="-50%";
    $("#ville1_slide3").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {var myElement = document.querySelector("#ville1_slide3").style.opacity="0";});
    $("#ville1_slide3").addClass('disparition_ville1_slide3');
    $("#text_slide3_disp").addClass('disparition_text_slide3');
    $("#ville2_slide3").addClass('apparition_ville2_slide3');
};