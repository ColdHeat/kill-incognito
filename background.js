function closeIncognito() {
  chrome.windows.getAll({ populate: false }, function(windows) {
    for (var i = 0; i < windows.length; i++) {
      if (windows[i].incognito === true) {
        chrome.windows.remove(windows[i].id);
      }
    }
  });
}

chrome.commands.onCommand.addListener(function(command) {
  closeIncognito();
});

chrome.browserAction.onClicked.addListener(function(tab) {
  closeIncognito();
});
