document.getElementById("submit-btn").addEventListener("click", function(){
    chrome.runtime.sendMessage({canGoBack: true});
});