document.getElementById("submit-btn").addEventListener("click", function(){
    chrome.runtime.sendMessage({canGoBack: true});
});

document.getElementById("skip-btn").addEventListener("click", function(){
    chrome.runtime.sendMessage({canGoBack: true});
});

document.getElementById("submit-btn").addEventListener("click", function(){

	var textLength = $('#response-box').val().length;

	if (textLength <= 0) {
		Materialize.toast('You must type a response.', 4000);
	} else {
    	$('#correct-modal').modal('open');
	}

});

$(function() {

	var url = '';

	$.ajax({
	  url: url,
	  success:function(data){
	    alert(data);
	  }
	});

	$('.modal').modal();
	$('#question').text('Sample question should go in this area');
});