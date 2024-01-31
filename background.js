chrome.action.onClicked.addListener((tab) => {
  // This listener is required to enable the popup when the extension icon is clicked.
  // No additional code is needed here if all the logic is in popup.js
  // chrome.scripting.executeScript({
  //   target: { tabId: tab.id },
  //   files: ['redirect.js']
  // });
});
 