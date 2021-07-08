# Hide Sticker Messages

This still works as of Thursday, 8 July 2021<br>
This repository is for those looking to hide the messages with stickers from discord. If reading this far into the future, please note that this may not work, so don't complain to me if it stops working.<br>

###  **The script will need to re-pasted in every time you start discord. As such if you somehow fuck something up, restarting discord should fix whatever you broke.**
#### _**I hold no responsibility for you breaking your discord or other things happening**_

<br>
To use these, while discord is open, press <i>Ctrl + Shift + I</i>. You will be presented with a giant console.
First and foremost you'll be greeted with a giant message telling you that pasting anything inside the console has a high chance of being a scam.
If you are unsure about the legitmacy of this script. Stop and don't continue. If you're a risk taker/ can actually read javascript and can verify the legitimacy of the script ignore the message.

Copy and paste the script into the console and hit enter.<br>
## New Userscript (tested with ViolentMonkey)
Install Userscript: https://github.com/CansecoDev/Discord-Hide-Sticker-Messages/raw/master/script.user.js<br>
Some things to note:
- The "new message" banner will still appear, as well as an empty message from the authorthat posted an sticker.
- Closing or updating discord will stop the script, requiring you to re-enable it.
- Messages with stickers will not disappear instantly, but within half a second of them being posted.
- This does not delete them from the channel, server or any such action. It simply hides the message client side. Other people can still see the messages.

```js
function hideStickerMessages(){
    const stickerMessages = document.querySelectorAll('[class^="clickableSticker"]'); // Find all Messages with stickers on it
    stickerMessages.forEach(stikMsg => {
        if(stikMsg.style.display !== "none") stikMsg.style.display = "none"; // Hide the message if it's not already hidden.
    });
};
setInterval(hideStickerMessages, 500); // Repeat every half second. Recommended to keep at 500, but raise/ lower if you wish.

```
