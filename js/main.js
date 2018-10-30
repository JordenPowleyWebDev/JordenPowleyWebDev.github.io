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
    $('a').on('click', function(event){
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

    /**
     * Scroll Event Listeners
     */
    $(window).on("scroll", function(event){
        hamburgerVisible();
        mailVisible();
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
    
    // Traverse to the location
    $([document.documentElement, document.body]).animate({
        scrollTop: $(target).offset().top
    }, 1000);
} // END navTraverse()

/**
 * hamburgerVisible()
 * @desc - Uses the current windows position to detect if the hamburger
 *         icon should be displayed or not
 */
function hamburgerVisible(){
    // Check if hero section is out of view
    if(!elementInViewport($('#hero'))){
        // Display the hamburger menu
        $('#hamburger_icon').removeClass('invisible');
    } else{
        // Hide the hamburger menu
        $('#hamburger_icon').addClass('invisible');
    }
} // END hamburgerVisible()

/**
 * mailVisible()
 * @desc - Uses the current windows position to detect if the mail 
 *         icon should be displayed or not
 */
function mailVisible() {
    // Check if hero section is out of view
    if (!elementInViewport($('#hero'))) {
        // Display the mail icon
        $('#mail_icon').removeClass('invisible');
    } else {
        // Hide the mail icon
        $('#mail_icon').addClass('invisible');
    }
} // END mailVisible()

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