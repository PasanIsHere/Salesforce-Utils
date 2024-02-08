// ==UserScript==
// @name         SF Navigation Macros 
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Macro to click Next/Prev/Save buttons on webpages (specifically for SF) 
// @author       Pasan Undugodage
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict'; 

    // Define key bindings 
    const keyBindings = {
        '.': 'goNext',
        ',': 'goPrevious',
        '/': 'save'
    };

    // Function to handle button click events
    function handleClick(targetName) {
        // Find the button by its name attribute
        const button = document.querySelector(`input[name="${targetName}"]`);
        if (button) button.click();
    }

    // Add event listener for key presses
    document.addEventListener('keydown', event => {
        if (event.ctrlKey && event.key in keyBindings) {
            // Call the handleClick function with the corresponding button name
            handleClick(keyBindings[event.key]);
        }
    });
})();