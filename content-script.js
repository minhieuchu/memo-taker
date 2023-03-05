let isEnbled = true;
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    isEnbled = message.isEnbled;
});
