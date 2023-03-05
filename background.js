chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
      text: "OFF",
    });
});

chrome.action.onClicked.addListener(async (tab) => {
    const currentState = await chrome.action.getBadgeText({ tabId: tab.id });
    const nextState = currentState === 'ON' ? 'OFF' : 'ON'

    await chrome.action.setBadgeText({
        tabId: tab.id,
        text: nextState,
    });

    if (nextState === "ON") {
        await chrome.tabs.sendMessage(tab.id, {isEnbled: true});
    } else if (nextState === "OFF") {
        await chrome.tabs.sendMessage(tab.id, {isEnbled: false});
    }
});
