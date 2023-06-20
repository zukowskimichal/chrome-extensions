var blocked_domains = ["*://*.facebook.com/*", "*://*.twitter.com/*"];

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; },
    {urls: blocked_domains},
    ["blocking"]
);
