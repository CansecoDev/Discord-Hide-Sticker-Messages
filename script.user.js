// ==UserScript==
// @name        Discord Hide Sticker Messages
// @namespace   https://github.com/CansecoDev/Discord-Hide-Sticker-Messages
// @match       https://discord.com/*
// @downloadURL https://raw.githubusercontent.com/CansecoDev/Discord-Hide-Sticker-Messages/master/script.user.js
// @homepageURL https://github.com/CansecoDev/Discord-Hide-Sticker-Messages
// @supportURL  https://github.com/CansecoDev/Discord-Hide-Sticker-Messages/issues
// @grant       none
// @version     1.0
// @author      Multrarix, CansecoDev
// @description 07/08/2021, 2:05:42 AM
// ==/UserScript==

function hideStickerMessages(){
    const stickerMessages = document.querySelectorAll('[class^="clickableSticker"]'); // Find all Messages with stickers on it
    stickerMessages.forEach(stikMsg => {
        if(stikMsg.style.display !== "none") stikMsg.style.display = "none"; // Hide the message if it's not already hidden.
    });
};
setInterval(hideStickerMessages, 500); // Repeat every half second. Recommended to keep at 500, but raise/ lower if you wish.
