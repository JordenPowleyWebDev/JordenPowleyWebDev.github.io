/**
 * ------------------------------------------------
 * Jorden Powly GitHub CV
 * ------------------------------------------------
 * Google Analytics Code
 * @desc        - Contains all analytical functions 
 *                for the site
 * @requires    - jQuery
 * ------------------------------------------------
 */

const BASE_URL = "/";

/**
 * On Ready
 */
$(document).ready(function(){
    /**
     * Start Google Analytic Code
     */
    (function(i, s, o, g, r, a, m){
        i["GoogleAnalyticsObject"] = r;
        i[r] = i[r] || function (){
            (i[r].q = i[r].q || []).push(arguments)
        },
        i[r].l = 1 * new Date();
        a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    });
    (window, document, "script", "https://www.google-analytics.com/analytics.js", "ga");
    
    ga("create", "UA-128341357-1", "auto");
    ga('send', {
        hitType: 'pageview',
        page: BASE_URL + "home",
        title: "Home"
    });

    /**
     * End Google Analytic Code
     */
});

/**
 * changeAnalyticPage()
 * @desc - Pings Google with a spoofed new page
 * @param {String} pageURL      - New page URL
 * @param {String} pageTitle    - New page title
 */
function changeAnalyticPage(pageURL, pageTitle){
    // Spoof the page view
    ga('send', {
        hitType: 'pageview',
        page: BASE_URL + pageURL,
        title: pageTitle
    });
} // END changeAnalyticPage()