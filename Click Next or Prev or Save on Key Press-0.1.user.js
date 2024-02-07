// ==UserScript==
// @name         Click Next or Prev or Save on Key Press
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically click the Next or Prev or Save button on webpage (specifically for SF) 
// @author       Pasan Undugodage
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Define the key combination (e.g., Ctrl + . )
    const nextTargetKey = '.';
    const prevTargetKey = ',';
    const saveTargetKey = '/'
    const ctrlKey = 'Control';
    // Function to handle key press event
    function handleKeyPress(event) {
        if ( event.ctrlKey && event.key === nextTargetKey ) {
            // Locate the Next button by its name attribute
            var nextButton = document.querySelector('input[name="goNext"]');
            if (nextButton) {
                // Simulate a click on the Next button
                nextButton.click();
            }
        }
        if ( event.ctrlKey && event.key === prevTargetKey ) {
            // Locate the Next button by its name attribute
            var prevButton = document.querySelector('input[name="goPrevious"]');
            if (prevButton) {
                // Simulate a click on the Next button
                prevButton.click();
            }
        }
        if ( event.ctrlKey && event.key === saveTargetKey ) {
            // Locate the Next button by its name attribute
            var saveButton = document.querySelector('input[name="save"]');
            if (saveButton) {
                // Simulate a click on the Next button
                saveButton.click();
            }
        }
    }

    // Add event listener for key press
    document.addEventListener('keydown', handleKeyPress);
})();