chrome.runtime.onMessage.addListener(function (message) {
  if (message.name === "redirect") {
    chrome.tabs.getSelected(null, function (tab) {  
      var regexPattern = /\/([a-z]{2}-[a-z]{2})\//i;
      var currentUrl = tab.url;
      
      chrome.storage.sync.get("msDefaultDocLanguage", function (data) {
        if (data.msDefaultDocLanguage) {
          if (currentUrl.indexOf(data.msDefaultDocLanguage) === -1) {
            var newUrl = currentUrl.replace(regexPattern, "/" + data.msDefaultDocLanguage + "/");
            chrome.tabs.update(null, {url: newUrl});
          }  
        }
      });     
    });
  }
});