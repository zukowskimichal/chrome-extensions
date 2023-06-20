var blocked_domains = ["*://*.facebook.com/*", "*://*.twitter.com/*"];

var callback = function(details) { return {cancel: true}};
var filter = {urls: blocked_domains};
var opt_extraInfoSpec = ["blocking"];

chrome.webRequest.onBeforeRequest.addListener(callback,filter,opt_extraInfoSpec);
