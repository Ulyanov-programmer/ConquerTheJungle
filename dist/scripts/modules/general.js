export function returnScrollbarWidth(){return window.innerWidth-document.querySelector("html").clientWidth}export function isNullOrWhiteSpaces(...e){for(const t of e)if(!t||t.trim()==="")return!0;return!1}export function sleep(e){return new Promise(t=>setTimeout(t,e))}export function elementsIsExist(...e){for(let t of e)if(document.querySelector(t)==null)return!1;return!0}export function elementIsExistWithLog(e,...t){for(let r of t)if(document.querySelector(r)==null)return console.log(`[${e}] Some element is not exist.`),!1;return!0}
