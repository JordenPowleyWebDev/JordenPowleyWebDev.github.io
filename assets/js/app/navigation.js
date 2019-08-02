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
         * Loads in a new page
         *
         * @param {Object} $element    - Element to be calculated
         */
        function navTraverse ($element) {
            // Pull the data from the nav item
            var location = "/content" + $element.attr('href') + ".html";
            var route = $element.data('route');

            // Cover the wrapper
            $('#main_nav_container').addClass('transition');

            // Fade out the other nav items
            $element.addClass('main');
            $('#main_nav_container .nav_item:not(.main)').addClass('fade');

            // Ajax in the file
            $.ajax({
                url: location,
                complete: function (data) {
                    setTimeout(function () {
                        // Change the page address
                        window.history.pushState("", "", route);

                        // Clear out the wrapper and load in the new page
                        $('#wrapper').html(data.responseText);


                        setTimeout(function () {
                            // Close the main nav
                            closeMainNav();
                        }, 1000);

                        setTimeout(function () {
                            // Remove transition classes
                            $('#main_nav_container').removeClass('transition');
                            $('#main_nav_container .nav_item').removeClass('fade');
                            $('#main_nav_container .nav_item').removeClass('main');
                        }, 1500);
                    }, 500);
                }
            });
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

            // Prevent body scrolling
            $('body').addClass('no-scroll');
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

            // Allow body scrolling
            $('body').removeClass('no-scroll');
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

        // Detect click on a nav link
        $('.nav_item').on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();

            navTraverse($(this));
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