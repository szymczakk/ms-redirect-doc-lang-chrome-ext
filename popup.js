document.addEventListener('DOMContentLoaded', function () {
  var defaultLangInput = document.getElementById('defaultLang');
  var saveButton = document.getElementById('saveLang');
  
  chrome.storage.sync.get("msDefaultDocLanguage", function (data) {
    defaultLangInput.value = data.msDefaultDocLanguage;
  });

  saveButton.addEventListener('click', function (e) {
    chrome.storage.sync.set({"msDefaultDocLanguage": defaultLangInput.value})
  }, false);
}, false);