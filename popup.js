function sendToBackground(data){
  chrome.runtime.sendMessage(data);
}

//no direct way to send to iframe, send to background and route to iframe from there. 

function initOnLoad()
{
  sendToBackground({from: 'content', message: 'hi from content'});

  //create iframe and inject into page
  var iframe = document.createElement("iframe");
  iframe.src = chrome.extension.getURL('/iframe/hackbar.html?view=hackbar');
  iframe.classList.add("hackbar");
  iframe.id = 'hackbar';
  //add iframe to Twitter page
  document.body.appendChild(iframe);

  console.log('Injected iframe');

  //listen for messages from iframe
  window.addEventListener('message', function(event) {
    if(event.data.from)
    {
      console.log('Content.js received a message from iframe: ');
      console.log(event.data);
    }
  }, false);

  //listen for messages from background
  chrome.extension.onMessage.addListener(function(request, sender, sendResponse){
    if(request.from)
    {
      console.log('Received msg from BG');
      console.log(request);
    }
  });
}

initOnLoad();
