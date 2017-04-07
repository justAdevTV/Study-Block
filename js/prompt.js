document.getElementById("skip-btn").addEventListener("click", function(){
    chrome.runtime.sendMessage({canGoBack: true});
});

document.getElementById("submit-btn").addEventListener("click", function(){
    $('#correct-modal').modal('open');
});

$(function() {
	$('.modal').modal();
	// $('#response-box').focus().click();
});