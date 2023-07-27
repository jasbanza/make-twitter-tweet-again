# make-twitter-tweet-again
> *We didn't ask for an 'X'*

So here's a Chrome browser extension to bring back the bird logo!
- [Chrome Web Store (pending review!)](https://chrome.google.com/webstore/detail/)

![promo](https://github.com/jasbanza/make-twitter-tweet-again/assets/1925470/fc0daf9e-b399-4057-a362-d57b3801e4c8)

## Build for Chrome Web Store

### Windows
#### option 1
- Run `build.bat`. This will create `./build/extension.zip`
- Deploy extension.zip to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/).
#### option 2
- Manually zip the contents of `./src` to `extension.zip`

## Test locally

1. Go to [chrome://extensions](chrome://extensions) 
2. Enable `developer mode`
3. Drag and drop the `./src` folder to install the extension.
