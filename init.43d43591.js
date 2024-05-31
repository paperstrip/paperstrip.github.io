// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jORsq":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "ad8b822743d43591";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"l17dj":[function(require,module,exports) {
var _thematiquesTransitionJs = require("./_barba/transitions/thematiques-transition.js");
window.initGlobal = function() {
    if (window.navigator.userAgent.match(/MSIE|Trident/) !== null) $("body").addClass("is-ie");
    if (window.isTouchDevice === true) {
        $("body").addClass("is-touch").removeClass("is-desktop");
        try {
            for(var si in document.styleSheets){
                var styleSheet = document.styleSheets[si];
                if (!styleSheet.rules) continue;
                for(var ri = styleSheet.rules.length - 1; ri >= 0; ri--){
                    if (!styleSheet.rules[ri].selectorText) continue;
                    if (styleSheet.rules[ri].selectorText.match(":hover")) styleSheet.deleteRule(ri);
                }
            }
        } catch (ex) {}
    } else $("body").addClass("is-desktop").removeClass("is-touch");
    /*let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--dynamic-vh', `${vh}px`);

    let resizeTimout = false
    let windowWidth = window.innerWidth
    window.appEvent.resize(() => {
        let dynamicVh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--dynamic-vh', `${dynamicVh}px`);
        let header = document.querySelector('header');
        document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
        let headerTop = header.querySelector('.header-top')
        document.documentElement.style.setProperty('--header-height-min', `${headerTop.clientHeight}px`);

        if (window.innerWidth != windowWidth) {
            windowWidth = window.innerWidth
            window.menuNav.menuResizeHandler()
        }

    }, true)*/ appEvent.listen("app:launcEnterAnimation", ()=>{
        window.scrollAnimation.update();
    });
    window.menuNav.initView();
    window.appEvent.listen("app:barba:isLoaded", ()=>{
        window.menuNav.initView();
        if ($("[data-loop-section].duplicated").length) $("[data-loop-section].duplicated").remove();
        window.globalScroll.smooth.options.infinite = false;
    });
    appEvent.listen("app:threejsAnimation:start", ()=>{
        window.scrollAnimation.lazyload();
        window.scrollAnimation.initView();
        window.scrollAnimation.update();
        window.scrollAnimation.initEnterAnimation();
    });
};
window.initView = function() {
    window.menuNav.updateCurrentLink();
};
// Promise pour charger Barba.js
const barbaJsPromise = new Promise((resolve)=>{
    require(/*webpackMode:"lazy"*/ /*eagger*/ /* webpackChunkName: "barbaSysthem" */ "98b37612e401cdee").then(({ default: BarbaJs })=>{
        window.barba = new BarbaJs();
        window.barba.setDefaultTransition();
        window.barba.addTransition(window.thematiquesTransition);
        resolve(true);
    });
});
// Promise pour charger ScrollAnimation
const ScrollAnimationPromise = new Promise((resolve)=>{
    require(/*webpackMode:"lazy"*/ /*eagger*/ /* webpackChunkName: "scrollAnimationSysthem" */ "c35de93b1f058064").then(()=>{
        resolve(true);
    });
});
// Promise pour charger ScrollComponent
const ScrollComponentPromise = new Promise((resolve)=>{
    require(/*webpackMode:"lazy"*/ /*eagger*/ /* webpackChunkName: "scrollComponentSysthem" */ "601a2c1eea238718").then(({ default: ScrollComponent })=>{
        window.globalScroll = new ScrollComponent({
            smooth: true,
            offset: "header"
        });
        resolve(true);
    });
});
// Promise pour charger MenuNav
const MenuNavPromise = new Promise((resolve)=>{
    require(/*webpackMode:"lazy"*/ /*eagger*/ /* webpackChunkName: "menuNavSysthem" */ "54fc0c0f62d0d2a7").then(({ default: ScrollComponent })=>{
        window.menuNav.init();
        resolve(true);
    });
});
// Vérification de la condition pour déterminer le mode de chargement
// Fonction pour initialiser l'application
const initializeApp = ()=>{
    Promise.all([
        barbaJsPromise,
        ScrollComponentPromise,
        ScrollAnimationPromise,
        MenuNavPromise
    ]).then(()=>{
        window.barba.init();
        window.globalScroll.init().then(()=>{
            window.scrollAnimation.init();
            window.scrollAnimation.initGlobal();
            window.scrollAnimation.lazyload();
            window.landingLoader.init();
        });
    });
};
// Appel de la fonction d'initialisation de l'application
initializeApp();

},{"./_barba/transitions/thematiques-transition.js":"k1ncf","98b37612e401cdee":"3aSFs","c35de93b1f058064":"lRUDk","601a2c1eea238718":"76Uvs","54fc0c0f62d0d2a7":"3KMhG"}],"k1ncf":[function(require,module,exports) {
var _gsap = require("gsap");
window.thematiquesTransition = {
    name: "themathiquesTransition",
    sync: true,
    from: {
        namespace: [
            "thematiquesIndex"
        ]
    },
    to: {
        namespace: [
            "thematiquesDetails"
        ]
    },
    before: function(data) {
        var done = this.async();
        console.log($(data.trigger).parent());
        let hideElement = (0, _gsap.gsap).timeline({
            onComplete: ()=>{
                done();
                $(document).trigger("app:barba:beforeDone");
            }
        });
        window.thematiquesSlideshow.slideTo($(data.trigger).parent().index(), 400);
        hideElement.to("[data-barba-namespace]:last-child .swiper-top .swiper-slide:not(.swiper-slide-active)", {
            yPercent: -100,
            autoAlpha: 0,
            ease: "power2.out"
        }, "hide");
        hideElement.to("[data-barba-namespace]:last-child .swiper-content .swiper-slide:not(.swiper-slide-active)", {
            yPercent: 100,
            autoAlpha: 0,
            ease: "power2.out"
        }, "hide");
        hideElement.to("[data-barba-namespace]:last-child .swiper-content .swiper-slide.swiper-slide-active .meta,[data-barba-namespace]:last-child .swiper-content .swiper-slide.swiper-slide-active .btn-cta", {
            autoAlpha: 0,
            ease: "power2.out"
        }, "hide");
    },
    beforeLeave: function(data) {
        var done = this.async();
        window.globalScroll.smooth.stop();
        (0, _gsap.gsap).set(data.next.container, {
            autoAlpha: 0,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%"
        });
        (0, _gsap.gsap).set('[data-barba="container"]:last-child .thematique-header__action .btn', {
            yPercent: 100
        });
        let moveElement = (0, _gsap.gsap).timeline({
            onComplete: ()=>{
                done();
            //$(document).trigger('app:barba:beforeDone');
            }
        });
        let $title = $('[data-barba="container"]:last-child h1');
        let matchTitle = [];
        let titleBound = $title[0].getBoundingClientRect();
        matchTitle["fontSize"] = $title.css("font-size");
        matchTitle["top"] = titleBound.top;
        matchTitle["left"] = titleBound.left;
        matchTitle["width"] = titleBound.width;
        let titlePrevBound = $('[data-barba="container"]:first-child .swiper-slide.swiper-slide-active h2')[0].getBoundingClientRect();
        let $galleryNext = $('[data-barba="container"]:last-child .row.gallery');
        let matchGallery = [];
        let galleryBound = $galleryNext[0].getBoundingClientRect();
        let galleryPrevBound = $('[data-barba="container"]:first-child .row.gallery')[0].getBoundingClientRect();
        matchGallery["top"] = galleryBound.top;
        matchGallery["left"] = galleryBound.x;
        matchGallery["width"] = galleryBound.width;
        console.log(titleBound);
        (0, _gsap.gsap).set('[data-barba="container"]:first-child .swiper-content .swiper-slide.swiper-slide-active h2', {
            position: "absolute"
        });
        (0, _gsap.gsap).set('[data-barba="container"]:first-child .swiper-top .swiper-slide.swiper-slide-active .row.gallery', {
            position: "absolute",
            //top: galleryPrevBound.top,
            minWidth: "auto",
            transformOrigin: "top center",
            //left: galleryPrevBound.left,
            width: galleryPrevBound.width
        });
        moveElement.to('[data-barba="container"]:first-child .swiper-top .swiper-slide.swiper-slide-active .row.gallery', {
            //width: matchGallery['width'],
            //left: matchGallery['left'] + (matchGallery['width'] / 2)
            y: -galleryPrevBound.top - galleryPrevBound.height + matchGallery["top"],
            duration: .8,
            ease: "power2.inOut"
        }, "order");
        moveElement.to('[data-barba="container"]:first-child .swiper-content .swiper-slide.swiper-slide-active h2', {
            fontSize: matchTitle["fontSize"],
            y: -titlePrevBound.top + matchTitle["top"],
            duration: .8,
            ease: "power2.inOut"
        }, "order");
        moveElement.to('[data-barba="container"]:first-child .swiper-top .swiper-slide.swiper-slide-active .row.gallery', {
            //scale: matchGallery['width'] / galleryPrevBound.width,
            x: matchGallery["width"] / 2 - galleryPrevBound.width / 2 - 2.5,
            width: matchGallery["width"],
            duration: .8,
            ease: "power2.out"
        }, "scale");
        moveElement.to('[data-barba="container"]:first-child .swiper-top .swiper-slide.swiper-slide-active .row.gallery', {
            //scale: matchGallery['width'] / galleryPrevBound.width,
            marginLeft: "-5px",
            marginRight: "-5px",
            duration: .8,
            ease: "power2.out"
        }, "scale");
        moveElement.to('[data-barba="container"]:first-child .swiper-top .swiper-slide.swiper-slide-active .row.gallery .cover-image-wrapper', {
            //scale: matchGallery['width'] / galleryPrevBound.width,
            padding: "5px",
            duration: .8,
            ease: "power2.out"
        }, "scale");
        moveElement.to('[data-barba="container"]:first-child .swiper-content .swiper-slide.swiper-slide-active h2', {
            x: -(window.innerWidth / 2 - matchTitle["width"] / 2) + matchTitle["left"],
            duration: .8,
            ease: "power2.out"
        }, "scale");
    /*moveElement.to('[data-barba-namespace]:first-child .swiper-content .swiper-slide.swiper-slide-active h2', {
            fontSize: matchTitle['fontSize'],
        })*/ },
    beforeEnter: function(data) {
        //done();
        $(document).trigger("app:barba:beforeEnter");
        var done = this.async();
        console.log("Transition", data);
        (0, _gsap.gsap).set(data.current.container, {
            autoAlpha: 0,
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%"
        });
        (0, _gsap.gsap).set(data.next.container, {
            autoAlpha: 1,
            position: "relative",
            top: 0,
            left: 0,
            width: "100%"
        });
        appEvent.trigger("app:threejsAnimation:start");
        (0, _gsap.gsap).fromTo('[data-barba="container"]:last-child .thematique-header__action .btn', {
            yPercent: 100,
            duration: .8,
            ease: "power2.inOut"
        }, {
            yPercent: 0,
            duration: .8,
            ease: "power2.inOut",
            onComplete: ()=>{
                done();
            }
        });
    },
    enter: function(data) {
        $(data.next.container).removeClass("is-pending");
        window.globalScroll.smooth.start();
    //$(document).trigger('app:transition:isEnter');
    }
};

},{"gsap":"fPSuC"}],"3aSFs":[function(require,module,exports) {
module.exports = Promise.all([
    require("a0d8c2a6327a55a3")(require("5673201f4a2434b0").getBundleURL("eTM5S") + "init.93c19158.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    }),
    require("a0d8c2a6327a55a3")(require("5673201f4a2434b0").getBundleURL("eTM5S") + "jquery.fbc40b49.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    }),
    require("a0d8c2a6327a55a3")(require("5673201f4a2434b0").getBundleURL("eTM5S") + "barba.6dbed327.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    })
]).then(()=>module.bundle.root("8exb0"));

},{"a0d8c2a6327a55a3":"61B45","5673201f4a2434b0":"lgJ39"}],"61B45":[function(require,module,exports) {
"use strict";
var cacheLoader = require("ca2a84f7fa4a3bb0");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    });
});

},{"ca2a84f7fa4a3bb0":"j49pS"}],"j49pS":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case "preload":
            return cachedPreloads;
        case "prefetch":
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"lRUDk":[function(require,module,exports) {
module.exports = Promise.all([
    require("38c15adf93bb997c")(require("95a2f89c2874b959").getBundleURL("eTM5S") + "init.93c19158.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    }),
    require("38c15adf93bb997c")(require("95a2f89c2874b959").getBundleURL("eTM5S") + "scrollAnimation.7c2268dd.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    })
]).then(()=>module.bundle.root("hx8E4"));

},{"38c15adf93bb997c":"61B45","95a2f89c2874b959":"lgJ39"}],"76Uvs":[function(require,module,exports) {
module.exports = Promise.all([
    require("a93b501ac889b08f")(require("c4be7604148f85aa").getBundleURL("eTM5S") + "init.93c19158.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    }),
    require("a93b501ac889b08f")(require("c4be7604148f85aa").getBundleURL("eTM5S") + "ScrollComponent.93244685.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    })
]).then(()=>module.bundle.root("fpQr3"));

},{"a93b501ac889b08f":"61B45","c4be7604148f85aa":"lgJ39"}],"3KMhG":[function(require,module,exports) {
module.exports = Promise.all([
    require("209a9ca9fe4646fe")(require("bf97bfa4c8b651dc").getBundleURL("eTM5S") + "init.93c19158.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    }),
    require("209a9ca9fe4646fe")(require("bf97bfa4c8b651dc").getBundleURL("eTM5S") + "menuNav.c153be8d.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    })
]).then(()=>module.bundle.root("kdoWv"));

},{"209a9ca9fe4646fe":"61B45","bf97bfa4c8b651dc":"lgJ39"}]},["jORsq"], null, "parcelRequiree21d")

//# sourceMappingURL=init.43d43591.js.map
