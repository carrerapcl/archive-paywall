document.getElementById('redirect').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var currentUrl = tabs[0].url;
      var archiveUrl = "https://archive.is/newest/" + currentUrl;
      chrome.tabs.update(tabs[0].id, {url: archiveUrl});
    });
  });
    