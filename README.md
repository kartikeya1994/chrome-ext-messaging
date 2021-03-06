#Chrome Extension Messaging Sample

The JavaScript components of Chrome extensions have several restrictions due to cross-origin policy. This sample extension serves as boilerplate code for first-timers.

Comedy of restrictions: 
- `background.js` runs independent of tabs. 
- `content.js` is tab-specific. 
- Only `background.js` can make web requests. 
- Only `content.js` can access DOM of the page.
- `iframe.js` can neither access DOM nor make web requests.
- `background.js` cannot see `iframe.js` and must talk to it through the content script that injected it. 

`background.js`, `iframe.js`, and content scripts must rely on each other using message passing for functions they cannot perform.

`popup.js` works like a content script.

Here's a working example of an extension made that uses iframes: [Claw4Twitter](https://chrome.google.com/webstore/detail/claw4twitter/pdohffpcbhglhgaijgonjedlcnjaiagd?hl=en), [source](https://github.com/somyavasudevan/claw4twitter)
