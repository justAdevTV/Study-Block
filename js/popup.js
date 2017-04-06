document.addEventListener('DOMContentLoaded', function() {

	chrome.storage.sync.get('isStudying', function(res){
		var isStudying = res.isStudying;

		if (isStudying) {
			document.getElementById('study_button').innerHTML = "Stop";
		} else {
			document.getElementById('study_button').innerHTML = "Start";
		}

	});

	var link = document.getElementById('study_button');
    // onClick's logic below:
    link.addEventListener('click', function() { 
    	toggleStudyMode();
    });
});

function toggleStudyMode() {

	chrome.storage.sync.get('isStudying', function(res){
		var isStudying = res.isStudying;

		if (isStudying) {
			isStudying = false;
			document.getElementById('study_button').innerHTML = "Stop";
		} else {
			isStudying = true;
			document.getElementById('study_button').innerHTML = "Start";
		}

		chrome.storage.sync.set({'isStudying': isStudying});

	});

}