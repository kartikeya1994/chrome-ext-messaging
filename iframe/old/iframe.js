function sendToContent(data){
	window.parent.postMessage(data, '*');
};

function sendToBackground(data){
    chrome.runtime.sendMessage(data);
}

console.log('In iframe.js');

var sent = false;

//listen for messages from background
chrome.extension.onMessage.addListener(function(request, sender, sendResponse){
    if(request.from)
    {
    	console.log('iframe.js received message:');
    	console.log(request);
        
        sendToContent({from: 'iframe', message: 'hi from iframe'});
        sendToBackground({from: 'iframe', message: 'hi from iframe'});
    }
});


