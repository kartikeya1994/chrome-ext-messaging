var sendToContentScript = function (data){
	//sends the message to all content scripts running on currently active tab. 
	//use chrome.tabs.sendMessage(tab.id, data) directly to send to specific tab. 
	chrome.tabs.getSelected(null, function (tab){
		chrome.tabs.sendMessage(tab.id, data);
	});
};


//listen to messages from content scripts anf iframes from any tab
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		console.log('Background.js received a message: ');
		console.log(request);
		sendToContentScript({from: 'bg', message:'hi from background'});
	}
);