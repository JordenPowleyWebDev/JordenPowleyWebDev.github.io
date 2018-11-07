/**
 * ------------------------------------------------
 * Jorden Powly GitHub CV
 * ------------------------------------------------
 * Main JS File
 * @desc        - Contains all primary functions of 
 *                the site.
 * @requires    - jQuery
 * ------------------------------------------------
 */

/**
 * On Ready
 */
$(document).ready(function(){
    /**
     * On load functions 
     */
    $('a.nav_animation').on('click', function(event){
        event.preventDefault();
        event.stopPropagation();

        navTraverse($(this));
     });
    
    /**
     * Page Event Listeners
     */

    // Detect click on hamburger menu
    $('#hamburger_icon').on('click', function(event){
        event.preventDefault();
        event.stopPropagation();

        hamburgerFunction();
    });

    // Detect click on email symbol
    $('#email_icon').on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        emailFunction();
    });

    // Prevent nar bar click through
    $('.navigation_icons').on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
    });

    /**
     * Scroll Event Listeners
     */
    $(window).on("scroll", function(event){
        navbarVisible();
    });

});

/**
 * navTraverse()
 * @desc - Overrides standard nav link functionailty
 *         and moves to the appropriate location.
 * @param {Object} $navItem      - Nav item being clicked
 */
function navTraverse($navItem){
    // Pull the required information from the nav item
    var target = $navItem.attr('href');
    
    // Remove the hash from the href -> Spoof page visit
    var name = $navItem.data('title');
    changeAnalyticPage(name, name);

    // Traverse to the location
    $([document.documentElement, document.body]).animate({
        scrollTop: $(target).offset().top,
        complete: function () {
            return true;
        }
    }, 1000);
} // END navTraverse()

/**
 * navbarVisible()
 * @desc - Uses the current windows position to detect if the nav menu
 *         should be displayed or not
 */
function navbarVisible(){
    // Check if hero section is out of view
    if(!elementInViewport($('#hero'))){
        // Display the nav menu
        $('.navigation_icons').removeClass('invisible');
    } else{
        // Hide the nav menu
        $('.navigation_icons').addClass('invisible');
    }
} // END navbarVisible()

/**
 * hamburgerFunction()
 * @desc - Executes the hamurger functionality
 *       - Traverse to the top of the page
 *       - If already traversing -> cancel
 */
function hamburgerFunction(){
    // Check for class on the hamburger menu
    $('#hamburger_icon').addClass('open');

    // Scroll to the top
    $([document.documentElement, document.body]).animate({
        scrollTop: 0,
        complete: function (){
            $('#hamburger_icon').removeClass('open');
        }
    }, {
        duration: 1000,
        complete: function () {
            $('#hamburger_icon').removeClass('open');
        }
    });
} // END hamburgerFunction()

/**
 * emailFunction()
 * @desc - Executes the email functionality
 *       - Traverse to the top of the page
 *       - If already traversing -> cancel
 */
function emailFunction() {
    // Check for class on the hamburger menu
    $('#email_icon').addClass('open');

    // Scroll to the top
    $([document.documentElement, document.body]).animate({
        scrollTop: $($('#contact')).offset().top,
        complete: function () {
            $('#email_icon').removeClass('open');
        }
    }, {
            duration: 1000,
            complete: function () {
                $('#email_icon').removeClass('open');
            }
        });
} // END emailFunction()