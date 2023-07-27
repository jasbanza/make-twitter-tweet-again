// This content script will run at document_start, so it has access to modify the favicon element directly.

// Ask the background script for the local file URL


function changeFaviconToLocalFile() {
  try {
    const faviconUrl = chrome.runtime.getURL("favicon.ico");
    const existingFavicon = document.querySelector("link[rel='shortcut icon']");
    if (existingFavicon) {
      existingFavicon.href = faviconUrl;
    } else {
      const link = document.createElement("link");
      link.type = "image/x-icon";
      link.rel = "shortcut icon";
      link.href = faviconUrl;
   //   document.head.appendChild(link);
    }
  } catch (error) {
    console.log("It didn't work");
  }
}

function changeSVG(node) {
  node.innerHTML = `<path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>`;
}

// changeFavicon();

// document.addEventListener("DOMContentLoaded", changeFavicon);

function checkSVG() {
  const node = document.querySelector(
    "div.css-1dbjc4n.r-dnmrzs.r-1vvnge1 > h1 > a > div > svg > g"
  );
  if (node) {
    changeSVG(node);
  } else {
    setTimeout(checkSVG, 20);
  }
}

checkSVG();

// Use MutationObserver to detect changes in the SVG element and update it accordingly
const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    mutation.addedNodes.forEach(function (node) {
      if (
        node.tagName === "LINK" &&
        node.getAttribute("rel") === "shortcut icon"
      ) {
        changeFaviconToLocalFile();
      }
    });
  });
});

// Start observing changes to the document
observer.observe(document, { childList: true, subtree: true });


/*

// This content script will run at document_start, so it has access to modify the favicon element directly.

// Ask the background script for the local file URL

function changeFaviconToLocalFile() {
  try {
    chrome.runtime.sendMessage(
      { action: "getFaviconUrl" },
      function (response) {
        if (response && response.faviconUrl) {
          const faviconUrl = response.faviconUrl;
          const existingFavicon = document.querySelector(
            "link[rel='shortcut icon']"
          );
          if (existingFavicon) {
            existingFavicon.href = faviconUrl;
          } else {
            const link = document.createElement("link");
            link.type = "image/x-icon";
            link.rel = "shortcut icon";
            link.href = faviconUrl;
            document.head.appendChild(link);
          }
        }
      }
    );
  } catch (error) {
    console.log("It didn't work");
  }
}

function changeSVG(node) {
  node.innerHTML = `<path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>`;
}

// changeFavicon();

// document.addEventListener("DOMContentLoaded", changeFavicon);

function checkSVG() {
  const node = document.querySelector(
    "div.css-1dbjc4n.r-dnmrzs.r-1vvnge1 > h1 > a > div > svg > g"
  );
  if (node) {
    changeSVG(node);
  } else {
    setTimeout(checkSVG, 20);
  }
}

checkSVG();

// Use MutationObserver to detect changes in the SVG element and update it accordingly
const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    mutation.addedNodes.forEach(function (node) {
      if (
        node.tagName === "LINK" &&
        node.getAttribute("rel") === "shortcut icon"
      ) {
        changeFaviconToLocalFile();
      }
    });
  });
});

// Start observing changes to the document
observer.observe(document, { childList: true, subtree: true });
*/