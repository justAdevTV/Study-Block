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

    	var tabId = tabs[0].id;
    	var currentUrl = tabs[0].url;

    	chrome.tabs.update(tabId ,{
			'url': 'promt.html',
			'active': true
		}, function() {
			setTimeout(function(){
				navigateBackToPage(tabId ,currentUrl);
				//chrome.storage.sync.set({'isStudying': true});
			}, 8000);
		});

	});

}

function navigateBackToPage(tab, oldPage) {
	chrome.tabs.update(tab ,{
		'url': oldPage,
		'active': true
	});
}