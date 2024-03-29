async function onVisualize(event, tab) {
    let { selectionText } = event;
    let { url } = tab;

    let payload = btoa(encodeURIComponent(JSON.stringify({ text: selectionText, url })));
    let pageURL = chrome.runtime.getURL('visualizer.html');
    let popupURL = `${pageURL}?${payload}`;

    let options = {
        url: popupURL,
        focused: true,
        type: chrome.windows.WindowType.POPUP,
        state: chrome.windows.WindowState.NORMAL,
        width: 667,
        height: 304
    };

    await chrome.windows.create(options);
}

async function onDonate() {
    await chrome.tabs.create({ url: 'https://github.com/schmich/crypto-address-visualizer#donate' });
}

async function onPrivacySecurity() {
    await chrome.tabs.create({ url: 'https://github.com/schmich/crypto-address-visualizer#privacy--security' });
}

async function onViewSourceCode() {
    await chrome.tabs.create({ url: 'https://github.com/schmich/crypto-address-visualizer' });
}

chrome.contextMenus.onClicked.addListener((event, tab) => {
    let { menuItemId } = event;

    if (menuItemId == 'visualize') {
        onVisualize(event, tab);
    } else if (menuItemId == 'donate') {
        onDonate();
    } else if (menuItemId == 'privacy-security') {
        onPrivacySecurity();
    } else if (menuItemId == 'view-source-code') {
        onViewSourceCode();
    }
});

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        contexts: ['selection'],
        id: 'visualize',
        title: 'Crypto Address Visualizer'
    });

    chrome.contextMenus.create({
        contexts: ['action'],
        id: 'donate',
        title: 'Donate'
    });

    chrome.contextMenus.create({
        contexts: ['action'],
        id: 'privacy-security',
        title: 'Privacy && Security'
    });

    chrome.contextMenus.create({
        contexts: ['action'],
        id: 'view-source-code',
        title: 'View Source Code'
    });
});