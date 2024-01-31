chrome.browserAction.onClicked.addListener(function(tab) {
    var currentUrl = tab.url;
    var archiveUrl = "https://archive.is/newest/" + currentUrl;
    chrome.tabs.update(tab.id, {url: archiveUrl});
  });
  