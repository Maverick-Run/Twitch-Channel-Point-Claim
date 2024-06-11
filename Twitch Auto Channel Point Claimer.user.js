// ==UserScript==
// @name         Twitch Auto Channel Point Claimer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Now auto claim bonus channel points when afk or watching the stream in fullscreen
// @author       Sparkles-SP (Updated by Maverick.dev)
// @match        https://www.twitch.tv/*
// @grant        none
// ==/UserScript==

(function() {


var first = true;
var time = 0;
var hasBeenClaimed = "script started, no claims yet!";
var x = 1
window.setInterval(function(){

    // Update to use the button Aria Label as the old classname is no longer valid
    if (document.querySelector('[aria-label="Claim Bonus"]') != null) {
        console.clear();
        // Update to use the button Aria Label as the old classname is no longer valid
        eventFire(document.querySelector('[aria-label="Claim Bonus"]'), 'click');
        console.log("You have claimed " + x.toString() + " times this session making a total of " + (50 * x).toString() + " claimed");
        hasBeenClaimed = "last claim, you have claimed " + x.toString() + " times this session making a total of " + (50 * x).toString() + " claimed";
        x += 1;
        time = 0;
    }
    else if (time % 10 == 0.0 && !first){
        console.clear();
        console.log(time.toString() + " seconds have passed since " + hasBeenClaimed)
    }

    time += 2;
    first = false;

    }, 2000);
})();

function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
};

