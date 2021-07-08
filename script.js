function hideStickerMessages(){
    const stickerMessages = document.querySelectorAll('[class^="clickableSticker"]'); // Find all Messages with stickers on it
    stickerMessages.forEach(stikMsg => {
        if(stikMsg.style.display !== "none") stikMsg.style.display = "none"; // Hide the message if it's not already hidden.
    });
};
setInterval(hideStickerMessages, 500); // Repeat every half second. Recommended to keep at 500, but raise/ lower if you wish.
