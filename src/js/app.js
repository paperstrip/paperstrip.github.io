import $ from "jquery";
window.$ = window.jQuery = $;
let styles = [
  "background: black",
  "color: white",
  "display: block",

  "line-height: 40px",
  "text-align: center",
  "fontsize: 20px",
  "font-weight: lighter",
].join(";");

console.info("%c HANDMADED WITH ❤ BY WIBICOM ", styles);

/****************************************************
 *****************************************************
 *GESTION DU PUBLIC PATH DYNAMIC ;
 *****************************************************
 ****************************************************/
/****************************************************
 *****************************************************
 *IMPORT GLOBALS DEPENDENCIES FROM NODE MODULES;
 *****************************************************
 ****************************************************/
window.isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0) ? true : false;

window.dev = true;
async function lazyLoadJQuery() {
  if (typeof jQuery !== "undefined") {
    // If jQuery is already loaded, resolve immediately

    Promise.resolve(true).then(() => {
      lazyLoadInitScript();
    });
  } else {
    // If jQuery is not loaded, lazy load it

    // Call lazyLoadInitScript() after jQuery is loaded

    lazyLoadInitScript();
  }
}

// Lazy load other scripts after jQuery is loaded
const lazyLoadInitScript = () => {
  new Promise((resolve) => {
    import(
      /* webpackMode: "lazy" */ /* webpackChunkName: "init" */ "./init.js"
    ).then(() => {
      // The 'init.js' file is now loaded and executed
      resolve(true);
    });
  });
};

// Call the lazy load function when needed
lazyLoadJQuery();
let DEBUG = window.dev;
if (!DEBUG) {
  if (!window.console) window.console = {};
  var methods = ["log", "debug", "warn", "info"];
  for (var i = 0; i < methods.length; i++) {
    console[methods[i]] = function () { };
  }
}
