chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "submitSurvey") {
    const skew = message.skew;

    // Handle storing or processing the skew value
    console.log('Received survey result:', skew);

    // Optionally, store the result in local storage or send it to a server
    chrome.storage.local.set({ [sender.tab.url]: skew }, () => {
      sendResponse({ status: "success" });
    });

    return true;  // Indicate that the response will be sent asynchronously
  }
});
