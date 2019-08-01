(function(A, d, $) {
    var navigationFunctions = function() {

        /**
         * ------------------------------------------------
         *
         * Navigation Global Variables
         *
         * ------------------------------------------------
         */

        /**
         * ------------------------------------------------
         *
         * Navigation Functions
         *
         * ------------------------------------------------
         */

        /**
         * elementInViewport()
         *
         * Calculates whether a passed element is
         * within the current viewport
         *
         * @param {Object} $element    - Element to be calculated
         * @return {boolean}
         */
        function elementInViewport ($element) {
            //  Calculate the dimensions of the element
            var elementTop = $element.offset().top;
            var elementBottom = elementTop + $element.outerHeight();

            //  Calculate the dimensions of the viewport
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            //  Compare the dimensions and return
            return elementBottom > viewportTop && elementTop < viewportBottom;
        } // END elementInViewport()

        /**
         * navbarVisible()
         *
         * Uses the current windows position to detect if the nav menu
         * should be displayed or not
         */
        function navbarVisible (){
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
         * navTraverse()
         *
         * Scrolls to the target location
         */
        function navTraverse () {

        } // END navTraverse()

        /**
         * openMainNav()
         *
         * Opens the main navigation menu
         */
        function openMainNav () {
            // Adjust hamburger icon classes
            $('#hamburger_icon').addClass('open');
            $('#hamburger_icon').addClass('white');
            $('#hamburger_icon').removeClass('red_pink');

            // Adjust email icon classes
            $('#email_icon').addClass('white');
            $('#email_icon').removeClass('red_pink');

            // Adjust footer classes
            $('#footer').addClass('transparent');

            // Adjust main nav classes
            $('#main_nav_container').addClass('open');
        } // END openMainNav()

        /**
         * closeMainNav()
         *
         * Closes the main navigation menu
         */
        function closeMainNav () {
            // Adjust hamburger icon classes
            $('#hamburger_icon').removeClass('open');
            $('#hamburger_icon').removeClass('white');
            $('#hamburger_icon').addClass('red_pink');

            // Adjust email icon classes
            $('#email_icon').removeClass('white');
            $('#email_icon').addClass('red_pink');

            // Adjust footer classes
            $('#footer').removeClass('transparent')

            // Adjust main nav classes
            $('#main_nav_container').removeClass('open');
        } // END closeMainNav()

        /**
         * hamburgerFunction()
         *
         * Executes the hamburger menu functionality
         */
        function hamburgerFunction () {
            if ($('#hamburger_icon').hasClass('open')) {
                closeMainNav();
            } else {
                openMainNav();
            }
        } // END hamburgerFunction()

        /**
         * emailFunction()
         *
         * Executes the email functionality
         * Traverse to the top of the page
         * If already traversing -> cancel
         */
        function emailFunction () {
            // Check if the hamburger menu is open and close if needed
            if ($('#hamburger_icon').hasClass('open')) {
                closeMainNav();
            }

            // Check for class on the hamburger menu
            $('#email_icon').addClass('open');

            // Scroll to the top
            $([document.documentElement, document.body]).animate({
                scrollTop: $($('#footer')).offset().top,
                complete: function () {
                    $('#email_icon').removeClass('open');
                }
            }, {
                duration: 500,
                complete: function () {
                    $('#email_icon').removeClass('open');
                }
            });
        } // END emailFunction()

        /**
         * ------------------------------------------------
         *
         * Page Event Handlers
         *
         * ------------------------------------------------
         */

        // Detect click on the hamburger icon
        $('#hamburger_icon').on('click', function (event) {
           event.stopPropagation();

            hamburgerFunction();
        });

        // Detect click on the email icon
        $('#email_icon').on('click', function (event) {
            event.stopPropagation();

            emailFunction();
        });

        /**
         * ------------------------------------------------
         *
         * On Page Load
         *
         * ------------------------------------------------
         */
    };

    A.navigationFunctions = new navigationFunctions();
}(application, document, jQuery));