var tabId;
var currentUrl;

chrome.webNavigation.onBeforeNavigate.addListener(function(details) { 
    chrome.storage.sync.get('isStudying', function(res){
		var isStudying = res.isStudying;

		if (isStudying) {
			promptUser();
		}
	});
});

function promptUser() {

	var url;

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {

    	tabId = tabs[0].id;
    	currentUrl = tabs[0].url;

    	chrome.tabs.update(tabId ,{
			'url': 'promt.html',
			'active': true
		});

	});
}

chrome.runtime.onMessage.addListener(function(request, sender, callback) {
    if (request.canGoBack) {
		navigateBackToPage(tabId, currentUrl);
    }
});

function navigateBackToPage(tab, oldPage) {
	chrome.tabs.update(tab ,{
		'url': oldPage,
		'active': true
	});
}