var tabId;
var currentUrl;
var blockedSites = [
	{
		site: '.google.'
	}
];

chrome.webNavigation.onBeforeNavigate.addListener(function(details) { 
    
	// .includes("world");
    chrome.storage.sync.get('isStudying', function(res){
		var isStudying = res.isStudying;

		if (isStudying) {

			chrome.tabs.getSelected(null, function (tab) {
				var url = new URL(tab.url);
				domain = url.hostname;

				blockedSites.forEach(function(e) {
					if (domain.includes(e.site)) {
						promptUser();
					}
				});
		
			});
		}
	});
});

function promptUser() {

	var url;

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {

    	tabId = tabs[0].id;
    	currentUrl = tabs[0].url;

    	chrome.tabs.update(tabId ,{
			'url': 'prompt.html',
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