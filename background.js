chrome.runtime.onMessage.addListener(function (message) {
  if (message.name === "redirect") {
    chrome.tabs.query({url: ["*://msdn.microsoft.com/*", "*://docs.microsoft.com/*", "*://azure.microsoft.com/*"]}, function (tabs) {
      var regexPattern = /\/([a-z]{2}-[a-z]{2})\//i;
            
      chrome.storage.sync.get("msDefaultDocLanguage", function (data) {
        if (data.msDefaultDocLanguage) {
          tabs.forEach(function (tab) {
            if (tab.url.indexOf(data.msDefaultDocLanguage) === -1) {
              var newUrl = tab.url.replace(regexPattern, "/" + data.msDefaultDocLanguage + "/");
              chrome.tabs.update(tab.id, {url: newUrl});
            }
          })  
        }
      });     
    });
  }
});