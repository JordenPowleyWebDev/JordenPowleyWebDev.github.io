/**
 * ------------------------------------------------
 * Jorden Powly GitHub CV
 * ------------------------------------------------
 * Generics JS File
 * @desc        - Contains non-site specific js 
 *                functionality.
 * @requires    - jQuery
 * ------------------------------------------------
 */

 /**
  * elementInViewport()
  * @desc - Calculates whether a passed element is 
  *         within the current viewport
  * @param {Object} $element    - Element to be calculated
  * @return {boolean}
  */
 function elementInViewport($element){
    //  Calculate the dimensions of the element
    var elementTop = $element.offset().top;
    var elementBottom = elementTop + $element.outerHeight();

    //  Calculate the dimensions of the viewport
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    //  Compare the dimensions and return
    return elementBottom > viewportTop && elementTop < viewportBottom;
 } // END elementInViewport()