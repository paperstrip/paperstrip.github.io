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
})({"eer9P":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "807366c66dbed327";
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

},{}],"8exb0":[function(require,module,exports) {
/***************************************************
██╗    ██╗██╗██████╗ ██╗ ██████╗ ██████╗ ███╗   ███╗
██║    ██║██║██╔══██╗██║██╔════╝██╔═══██╗████╗ ████║
██║ █╗ ██║██║██████╔╝██║██║     ██║   ██║██╔████╔██║
██║███╗██║██║██╔══██╗██║██║     ██║   ██║██║╚██╔╝██║
╚███╔███╔╝██║██████╔╝██║╚██████╗╚██████╔╝██║ ╚═╝ ██║
 ╚══╝╚══╝ ╚═╝╚═════╝ ╚═╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝
***************************************************/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _router = require("@barba/router");
var _routerDefault = parcelHelpers.interopDefault(_router);
var _core = require("@barba/core");
var _coreDefault = parcelHelpers.interopDefault(_core);
/**************************************************/ var _defaultJs = require("./transitions/default.js");
/**************************************************/ var _routerJs = require("./router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
/**************************************************/ // app event
var _appEventComponent = require("./components/AppEventComponent");
var _appEventComponentDefault = parcelHelpers.interopDefault(_appEventComponent);
// form
var _formComponent = require("./components/FormComponent");
var _formComponentDefault = parcelHelpers.interopDefault(_formComponent);
var _formMessageJs = require("./views/formMessage.js");
var _formMessageJsDefault = parcelHelpers.interopDefault(_formMessageJs);
/**************************************************/ var _parsleyjs = require("parsleyjs");
var _imageLoaderComponent = require("./components/ImageLoaderComponent");
var _imageLoaderComponentDefault = parcelHelpers.interopDefault(_imageLoaderComponent);
/**************************************************/ var _landingLoaderJs = require("./views/landingLoader.js");
var _landingLoaderJsDefault = parcelHelpers.interopDefault(_landingLoaderJs);
var _imageReplaceJs = require("./views/imageReplace.js");
var _imageReplaceJsDefault = parcelHelpers.interopDefault(_imageReplaceJs);
//import FancyComponent from "../components/FancyComponent";
/**************************************************/ window.barbaInstance = (0, _coreDefault.default);
window.barbaRouter = (0, _routerDefault.default);
window.appRouter = new (0, _routerJsDefault.default)();
window.appEvent = new (0, _appEventComponentDefault.default)();
window.formComponent = new (0, _formComponentDefault.default)();
window.formMessage = new (0, _formMessageJsDefault.default)();
window.imageLoader = new (0, _imageLoaderComponentDefault.default)();
window.imageReplace = new function() {
    this.replace = function(target) {
        (0, _imageReplaceJsDefault.default)(target);
    };
};
window.landingLoader = new (0, _landingLoaderJsDefault.default)(1);
class Barba {
    constructor(){
        window.transitions = [];
        this.instance = window.barbaInstance;
        this.instance.use(window.appRouter, {
            routes
        });
    }
    addCustomIntro(introduction) {
        window.landingLoader = introduction;
    }
    setDefaultTransition(transitionObject) {
        if (transitionObject) window.defaultTransition = transitionObject;
        else window.defaultTransition = window.barbaDefaultTransition;
        window.transitions.push(window.defaultTransition);
    }
    addTransition(transitionObject) {
        window.transitions.push(transitionObject);
    }
    init() {
        //window.imageLoader.lazy();
        (0, _imageReplaceJsDefault.default)($('[data-barba="container"]:last-of-type'));
        window.initGlobal();
        window.formComponent.initGlobal();
        window.formMessage.init();
        //window.fancy = new FancyComponent();
        // ADD CONFIG ON HISTORY CHANGE
        (function(history1) {
            var pushState = history1.pushState;
            history1.pushState = function(state) {
                if (typeof history1.onpushstate == "function") history1.onpushstate({
                    state: state
                });
                return pushState.apply(history1, arguments);
            };
        })(window.history);
        window.onpopstate = history.onpushstate = function(e) {
            window.appEvent.trigger("app:barba:historyChange");
        };
        this.instance.hooks.beforeLeave((data)=>{
            window.appEvent.trigger("app:barba:isChanging");
            if (data.trigger == "back" || data.trigger == "forward") return;
            localStorage.setItem("windowTop", window.pageYOffset);
            localStorage.setItem("windowTopGlobalScrol", window.globalScroll.y);
        });
        this.instance.hooks.beforeEnter((data)=>{
            //window.imageLoader.lazy();
            window.appEvent.trigger("app:barba:beforeEnter");
            (0, _imageReplaceJsDefault.default)($('[data-barba="container"]:last-of-type'));
            let inlineScripts = data.next.container.querySelectorAll("script");
            inlineScripts.forEach((script)=>eval(script.innerHTML));
            window.initView();
            window.formMessage.init();
            window.formComponent.initView();
            document.body.id = typeof data.next.namespace !== "undefined" ? data.next.namespace : "";
            console.log("DEBUGG ICI", data.next);
            history.scrollRestoration = "manual";
        });
        this.instance.hooks.enter((data)=>{
            window.appEvent.trigger("app:barba:isLoaded");
        });
        this.instance.hooks.after((data)=>{
            if (data.trigger == "back" || data.trigger == "forward") {
                window.scrollTo(0, localStorage.getItem("windowTop"));
                if (window.globalScroll) window.globalScroll.scrollTo(parseInt(localStorage.getItem("windowTopGlobalScrol")), 0);
            } else {
                window.scrollTo(0, 0);
                if (window.globalScroll) window.globalScroll.initView();
            }
        });
        this.instance.init({
            views: window.views,
            debug: true,
            cacheIgnore: false,
            prefetchIgnore: false,
            prevent: (el)=>{
                if (el.href == document.location.href) {
                    el.event.preventDefault();
                    return false;
                }
            },
            transitions: window.transitions,
            timeout: 10000
        });
    }
}
exports.default = Barba;

},{"@barba/router":"7e0H6","@barba/core":"gIWbX","./transitions/default.js":"9U1TN","./router.js":"2NIN4","./components/AppEventComponent":"1cQHs","./components/FormComponent":"fjawa","./views/formMessage.js":"3aUcP","parsleyjs":"g5c5V","./components/ImageLoaderComponent":"bu8sX","./views/landingLoader.js":"hHQDV","./views/imageReplace.js":"19Rfv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7e0H6":[function(require,module,exports) {
!function(t, i) {
    module.exports = i();
}(this, function() {
    var t = "2.1.10";
    return new (function() {
        function i() {
            this.name = "@barba/router", this.version = t, this.routeNames = [], this.routesByName = {};
        }
        var n = i.prototype;
        return n.install = function(t, i) {
            var n = this, e = (void 0 === i ? {} : i).routes, o = void 0 === e ? [] : e;
            this.logger = new t.Logger(this.name), this.logger.info(this.version), this.barba = t, o.forEach(function(t) {
                var i = t.name, e = t.path, o = [], r = n.barba.helpers.pathToRegexp(e, o);
                n.routeNames.indexOf(i) > -1 ? console.warn("[@barba/router] Duplicated route name (" + i + ")") : (n.routeNames.push(i), n.routesByName[i] = {
                    keys: o,
                    path: e,
                    regex: r
                });
            }), t.schemaPage.route = void 0;
        }, n.init = function() {
            this.barba.transitions.store.add("rule", {
                position: 1,
                value: {
                    name: "route",
                    type: "object"
                }
            }), this.barba.hooks.page(this.resolveRoutes, this), this.barba.hooks.reset(this.resolveRoutes, this);
        }, n.resolveUrl = function(t) {
            for(var i = this, n = this.barba.url.parse(t).path, e = {
                name: name,
                params: {}
            }, o = function(t, o) {
                var r = i.routeNames[t], s = i.routesByName[r], u = s.keys, f = s.regex.exec(n);
                if (null !== f) return e.name = r, u.forEach(function(t, i) {
                    e.params[t.name] = f[i + 1];
                }), {
                    v: e
                };
            }, r = 0, s = this.routeNames.length; r < s; r++){
                var u = o(r);
                if ("object" == typeof u) return u.v;
            }
            return null;
        }, n.resolveRoutes = function(t) {
            var i = t.current, n = t.next;
            i.route = i.url.href ? this.resolveUrl(i.url.href) : void 0, n.route = n.url.href ? this.resolveUrl(n.url.href) : void 0;
        }, i;
    }());
});

},{}],"gIWbX":[function(require,module,exports) {
!function(t, n) {
    module.exports = n();
}(this, function() {
    function t(t, n) {
        for(var r = 0; r < n.length; r++){
            var e = n[r];
            e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e);
        }
    }
    function n(n, r, e) {
        return r && t(n.prototype, r), e && t(n, e), n;
    }
    function r() {
        return (r = Object.assign || function(t) {
            for(var n = 1; n < arguments.length; n++){
                var r = arguments[n];
                for(var e in r)Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
            }
            return t;
        }).apply(this, arguments);
    }
    function e(t, n) {
        t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
    }
    function i(t) {
        return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
    }
    function o(t, n) {
        return (o = Object.setPrototypeOf || function(t, n) {
            return t.__proto__ = n, t;
        })(t, n);
    }
    function u(t, n, r) {
        return (u = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
            } catch (t) {
                return !1;
            }
        }() ? Reflect.construct : function(t, n, r) {
            var e = [
                null
            ];
            e.push.apply(e, n);
            var i = new (Function.bind.apply(t, e));
            return r && o(i, r.prototype), i;
        }).apply(null, arguments);
    }
    function f(t) {
        var n = "function" == typeof Map ? new Map : void 0;
        return (f = function(t) {
            if (null === t || -1 === Function.toString.call(t).indexOf("[native code]")) return t;
            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== n) {
                if (n.has(t)) return n.get(t);
                n.set(t, r);
            }
            function r() {
                return u(t, arguments, i(this).constructor);
            }
            return r.prototype = Object.create(t.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), o(r, t);
        })(t);
    }
    function s(t, n) {
        try {
            var r = t();
        } catch (t) {
            return n(t);
        }
        return r && r.then ? r.then(void 0, n) : r;
    }
    "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
    var c, a = "2.9.7", h = function() {};
    !function(t) {
        t[t.off = 0] = "off", t[t.error = 1] = "error", t[t.warning = 2] = "warning", t[t.info = 3] = "info", t[t.debug = 4] = "debug";
    }(c || (c = {}));
    var v = c.off, l = function() {
        function t(t) {
            this.t = t;
        }
        t.getLevel = function() {
            return v;
        }, t.setLevel = function(t) {
            return v = c[t];
        };
        var n = t.prototype;
        return n.error = function() {
            for(var t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r];
            this.i(console.error, c.error, n);
        }, n.warn = function() {
            for(var t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r];
            this.i(console.warn, c.warning, n);
        }, n.info = function() {
            for(var t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r];
            this.i(console.info, c.info, n);
        }, n.debug = function() {
            for(var t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r];
            this.i(console.log, c.debug, n);
        }, n.i = function(n, r, e) {
            r <= t.getLevel() && n.apply(console, [
                "[" + this.t + "] "
            ].concat(e));
        }, t;
    }(), d = O, m = E, p = g, w = x, b = T, y = "/", P = new RegExp([
        "(\\\\.)",
        "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"
    ].join("|"), "g");
    function g(t, n) {
        for(var r, e = [], i = 0, o = 0, u = "", f = n && n.delimiter || y, s = n && n.whitelist || void 0, c = !1; null !== (r = P.exec(t));){
            var a = r[0], h = r[1], v = r.index;
            if (u += t.slice(o, v), o = v + a.length, h) u += h[1], c = !0;
            else {
                var l = "", d = r[2], m = r[3], p = r[4], w = r[5];
                if (!c && u.length) {
                    var b = u.length - 1, g = u[b];
                    (!s || s.indexOf(g) > -1) && (l = g, u = u.slice(0, b));
                }
                u && (e.push(u), u = "", c = !1);
                var E = m || p, x = l || f;
                e.push({
                    name: d || i++,
                    prefix: l,
                    delimiter: x,
                    optional: "?" === w || "*" === w,
                    repeat: "+" === w || "*" === w,
                    pattern: E ? A(E) : "[^" + k(x === f ? x : x + f) + "]+?"
                });
            }
        }
        return (u || o < t.length) && e.push(u + t.substr(o)), e;
    }
    function E(t, n) {
        return function(r, e) {
            var i = t.exec(r);
            if (!i) return !1;
            for(var o = i[0], u = i.index, f = {}, s = e && e.decode || decodeURIComponent, c = 1; c < i.length; c++)if (void 0 !== i[c]) {
                var a = n[c - 1];
                f[a.name] = a.repeat ? i[c].split(a.delimiter).map(function(t) {
                    return s(t, a);
                }) : s(i[c], a);
            }
            return {
                path: o,
                index: u,
                params: f
            };
        };
    }
    function x(t, n) {
        for(var r = new Array(t.length), e = 0; e < t.length; e++)"object" == typeof t[e] && (r[e] = new RegExp("^(?:" + t[e].pattern + ")$", R(n)));
        return function(n, e) {
            for(var i = "", o = e && e.encode || encodeURIComponent, u = !e || !1 !== e.validate, f = 0; f < t.length; f++){
                var s = t[f];
                if ("string" != typeof s) {
                    var c, a = n ? n[s.name] : void 0;
                    if (Array.isArray(a)) {
                        if (!s.repeat) throw new TypeError('Expected "' + s.name + '" to not repeat, but got array');
                        if (0 === a.length) {
                            if (s.optional) continue;
                            throw new TypeError('Expected "' + s.name + '" to not be empty');
                        }
                        for(var h = 0; h < a.length; h++){
                            if (c = o(a[h], s), u && !r[f].test(c)) throw new TypeError('Expected all "' + s.name + '" to match "' + s.pattern + '"');
                            i += (0 === h ? s.prefix : s.delimiter) + c;
                        }
                    } else if ("string" != typeof a && "number" != typeof a && "boolean" != typeof a) {
                        if (!s.optional) throw new TypeError('Expected "' + s.name + '" to be ' + (s.repeat ? "an array" : "a string"));
                    } else {
                        if (c = o(String(a), s), u && !r[f].test(c)) throw new TypeError('Expected "' + s.name + '" to match "' + s.pattern + '", but got "' + c + '"');
                        i += s.prefix + c;
                    }
                } else i += s;
            }
            return i;
        };
    }
    function k(t) {
        return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    }
    function A(t) {
        return t.replace(/([=!:$/()])/g, "\\$1");
    }
    function R(t) {
        return t && t.sensitive ? "" : "i";
    }
    function T(t, n, r) {
        for(var e = (r = r || {}).strict, i = !1 !== r.start, o = !1 !== r.end, u = r.delimiter || y, f = [].concat(r.endsWith || []).map(k).concat("$").join("|"), s = i ? "^" : "", c = 0; c < t.length; c++){
            var a = t[c];
            if ("string" == typeof a) s += k(a);
            else {
                var h = a.repeat ? "(?:" + a.pattern + ")(?:" + k(a.delimiter) + "(?:" + a.pattern + "))*" : a.pattern;
                n && n.push(a), s += a.optional ? a.prefix ? "(?:" + k(a.prefix) + "(" + h + "))?" : "(" + h + ")?" : k(a.prefix) + "(" + h + ")";
            }
        }
        if (o) e || (s += "(?:" + k(u) + ")?"), s += "$" === f ? "$" : "(?=" + f + ")";
        else {
            var v = t[t.length - 1], l = "string" == typeof v ? v[v.length - 1] === u : void 0 === v;
            e || (s += "(?:" + k(u) + "(?=" + f + "))?"), l || (s += "(?=" + k(u) + "|" + f + ")");
        }
        return new RegExp(s, R(r));
    }
    function O(t, n, r) {
        return t instanceof RegExp ? function(t, n) {
            if (!n) return t;
            var r = t.source.match(/\((?!\?)/g);
            if (r) for(var e = 0; e < r.length; e++)n.push({
                name: e,
                prefix: null,
                delimiter: null,
                optional: !1,
                repeat: !1,
                pattern: null
            });
            return t;
        }(t, n) : Array.isArray(t) ? function(t, n, r) {
            for(var e = [], i = 0; i < t.length; i++)e.push(O(t[i], n, r).source);
            return new RegExp("(?:" + e.join("|") + ")", R(r));
        }(t, n, r) : function(t, n, r) {
            return T(g(t, r), n, r);
        }(t, n, r);
    }
    d.match = function(t, n) {
        var r = [];
        return E(O(t, r, n), r);
    }, d.regexpToFunction = m, d.parse = p, d.compile = function(t, n) {
        return x(g(t, n), n);
    }, d.tokensToFunction = w, d.tokensToRegExp = b;
    var S = {
        container: "container",
        history: "history",
        namespace: "namespace",
        prefix: "data-barba",
        prevent: "prevent",
        wrapper: "wrapper"
    }, j = new (function() {
        function t() {
            this.o = S, this.u = new DOMParser;
        }
        var n = t.prototype;
        return n.toString = function(t) {
            return t.outerHTML;
        }, n.toDocument = function(t) {
            return this.u.parseFromString(t, "text/html");
        }, n.toElement = function(t) {
            var n = document.createElement("div");
            return n.innerHTML = t, n;
        }, n.getHtml = function(t) {
            return void 0 === t && (t = document), this.toString(t.documentElement);
        }, n.getWrapper = function(t) {
            return void 0 === t && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]');
        }, n.getContainer = function(t) {
            return void 0 === t && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]');
        }, n.removeContainer = function(t) {
            document.body.contains(t) && t.parentNode.removeChild(t);
        }, n.addContainer = function(t, n) {
            var r = this.getContainer();
            r ? this.s(t, r) : n.appendChild(t);
        }, n.getNamespace = function(t) {
            void 0 === t && (t = document);
            var n = t.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
            return n ? n.getAttribute(this.o.prefix + "-" + this.o.namespace) : null;
        }, n.getHref = function(t) {
            if (t.tagName && "a" === t.tagName.toLowerCase()) {
                if ("string" == typeof t.href) return t.href;
                var n = t.getAttribute("href") || t.getAttribute("xlink:href");
                if (n) return this.resolveUrl(n.baseVal || n);
            }
            return null;
        }, n.resolveUrl = function() {
            for(var t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r];
            var e = n.length;
            if (0 === e) throw new Error("resolveUrl requires at least one argument; got none.");
            var i = document.createElement("base");
            if (i.href = arguments[0], 1 === e) return i.href;
            var o = document.getElementsByTagName("head")[0];
            o.insertBefore(i, o.firstChild);
            for(var u, f = document.createElement("a"), s = 1; s < e; s++)f.href = arguments[s], i.href = u = f.href;
            return o.removeChild(i), u;
        }, n.s = function(t, n) {
            n.parentNode.insertBefore(t, n.nextSibling);
        }, t;
    }()), M = new (function() {
        function t() {
            this.h = [], this.v = -1;
        }
        var e = t.prototype;
        return e.init = function(t, n) {
            this.l = "barba";
            var r = {
                ns: n,
                scroll: {
                    x: window.scrollX,
                    y: window.scrollY
                },
                url: t
            };
            this.h.push(r), this.v = 0;
            var e = {
                from: this.l,
                index: 0,
                states: [].concat(this.h)
            };
            window.history && window.history.replaceState(e, "", t);
        }, e.change = function(t, n, r) {
            if (r && r.state) {
                var e = r.state, i = e.index;
                n = this.m(this.v - i), this.replace(e.states), this.v = i;
            } else this.add(t, n);
            return n;
        }, e.add = function(t, n) {
            var r = this.size, e = this.p(n), i = {
                ns: "tmp",
                scroll: {
                    x: window.scrollX,
                    y: window.scrollY
                },
                url: t
            };
            this.h.push(i), this.v = r;
            var o = {
                from: this.l,
                index: r,
                states: [].concat(this.h)
            };
            switch(e){
                case "push":
                    window.history && window.history.pushState(o, "", t);
                    break;
                case "replace":
                    window.history && window.history.replaceState(o, "", t);
            }
        }, e.update = function(t, n) {
            var e = n || this.v, i = r({}, this.get(e), {}, t);
            this.set(e, i);
        }, e.remove = function(t) {
            t ? this.h.splice(t, 1) : this.h.pop(), this.v--;
        }, e.clear = function() {
            this.h = [], this.v = -1;
        }, e.replace = function(t) {
            this.h = t;
        }, e.get = function(t) {
            return this.h[t];
        }, e.set = function(t, n) {
            return this.h[t] = n;
        }, e.p = function(t) {
            var n = "push", r = t, e = S.prefix + "-" + S.history;
            return r.hasAttribute && r.hasAttribute(e) && (n = r.getAttribute(e)), n;
        }, e.m = function(t) {
            return Math.abs(t) > 1 ? t > 0 ? "forward" : "back" : 0 === t ? "popstate" : t > 0 ? "back" : "forward";
        }, n(t, [
            {
                key: "current",
                get: function() {
                    return this.h[this.v];
                }
            },
            {
                key: "state",
                get: function() {
                    return this.h[this.h.length - 1];
                }
            },
            {
                key: "previous",
                get: function() {
                    return this.v < 1 ? null : this.h[this.v - 1];
                }
            },
            {
                key: "size",
                get: function() {
                    return this.h.length;
                }
            }
        ]), t;
    }()), L = function(t, n) {
        try {
            var r = function() {
                if (!n.next.html) return Promise.resolve(t).then(function(t) {
                    var r = n.next;
                    if (t) {
                        var e = j.toElement(t);
                        r.namespace = j.getNamespace(e), r.container = j.getContainer(e), r.html = t, M.update({
                            ns: r.namespace
                        });
                        var i = j.toDocument(t);
                        document.title = i.title;
                    }
                });
            }();
            return Promise.resolve(r && r.then ? r.then(function() {}) : void 0);
        } catch (t) {
            return Promise.reject(t);
        }
    }, $ = d, _ = {
        __proto__: null,
        update: L,
        nextTick: function() {
            return new Promise(function(t) {
                window.requestAnimationFrame(t);
            });
        },
        pathToRegexp: $
    }, q = function() {
        return window.location.origin;
    }, B = function(t) {
        return void 0 === t && (t = window.location.href), U(t).port;
    }, U = function(t) {
        var n, r = t.match(/:\d+/);
        if (null === r) /^http/.test(t) && (n = 80), /^https/.test(t) && (n = 443);
        else {
            var e = r[0].substring(1);
            n = parseInt(e, 10);
        }
        var i, o = t.replace(q(), ""), u = {}, f = o.indexOf("#");
        f >= 0 && (i = o.slice(f + 1), o = o.slice(0, f));
        var s = o.indexOf("?");
        return s >= 0 && (u = D(o.slice(s + 1)), o = o.slice(0, s)), {
            hash: i,
            path: o,
            port: n,
            query: u
        };
    }, D = function(t) {
        return t.split("&").reduce(function(t, n) {
            var r = n.split("=");
            return t[r[0]] = r[1], t;
        }, {});
    }, F = function(t) {
        return void 0 === t && (t = window.location.href), t.replace(/(\/#.*|\/|#.*)$/, "");
    }, H = {
        __proto__: null,
        getHref: function() {
            return window.location.href;
        },
        getOrigin: q,
        getPort: B,
        getPath: function(t) {
            return void 0 === t && (t = window.location.href), U(t).path;
        },
        parse: U,
        parseQuery: D,
        clean: F
    };
    function I(t, n, r) {
        return void 0 === n && (n = 2e3), new Promise(function(e, i) {
            var o = new XMLHttpRequest;
            o.onreadystatechange = function() {
                if (o.readyState === XMLHttpRequest.DONE) {
                    if (200 === o.status) e(o.responseText);
                    else if (o.status) {
                        var n = {
                            status: o.status,
                            statusText: o.statusText
                        };
                        r(t, n), i(n);
                    }
                }
            }, o.ontimeout = function() {
                var e = new Error("Timeout error [" + n + "]");
                r(t, e), i(e);
            }, o.onerror = function() {
                var n = new Error("Fetch error");
                r(t, n), i(n);
            }, o.open("GET", t), o.timeout = n, o.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), o.setRequestHeader("x-barba", "yes"), o.send();
        });
    }
    var C = function(t) {
        return !!t && ("object" == typeof t || "function" == typeof t) && "function" == typeof t.then;
    };
    function N(t, n) {
        return void 0 === n && (n = {}), function() {
            for(var r = arguments.length, e = new Array(r), i = 0; i < r; i++)e[i] = arguments[i];
            var o = !1, u = new Promise(function(r, i) {
                n.async = function() {
                    return o = !0, function(t, n) {
                        t ? i(t) : r(n);
                    };
                };
                var u = t.apply(n, e);
                o || (C(u) ? u.then(r, i) : r(u));
            });
            return u;
        };
    }
    var X = new (function(t) {
        function n() {
            var n;
            return (n = t.call(this) || this).logger = new l("@barba/core"), n.all = [
                "ready",
                "page",
                "reset",
                "currentAdded",
                "currentRemoved",
                "nextAdded",
                "nextRemoved",
                "beforeOnce",
                "once",
                "afterOnce",
                "before",
                "beforeLeave",
                "leave",
                "afterLeave",
                "beforeEnter",
                "enter",
                "afterEnter",
                "after"
            ], n.registered = new Map, n.init(), n;
        }
        e(n, t);
        var r = n.prototype;
        return r.init = function() {
            var t = this;
            this.registered.clear(), this.all.forEach(function(n) {
                t[n] || (t[n] = function(r, e) {
                    t.registered.has(n) || t.registered.set(n, new Set), t.registered.get(n).add({
                        ctx: e || {},
                        fn: r
                    });
                });
            });
        }, r.do = function(t) {
            for(var n = this, r = arguments.length, e = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)e[i - 1] = arguments[i];
            if (this.registered.has(t)) {
                var o = Promise.resolve();
                return this.registered.get(t).forEach(function(t) {
                    o = o.then(function() {
                        return N(t.fn, t.ctx).apply(void 0, e);
                    });
                }), o.catch(function(r) {
                    n.logger.debug("Hook error [" + t + "]"), n.logger.error(r);
                });
            }
            return Promise.resolve();
        }, r.clear = function() {
            var t = this;
            this.all.forEach(function(n) {
                delete t[n];
            }), this.init();
        }, r.help = function() {
            this.logger.info("Available hooks: " + this.all.join(","));
            var t = [];
            this.registered.forEach(function(n, r) {
                return t.push(r);
            }), this.logger.info("Registered hooks: " + t.join(","));
        }, n;
    }(h)), z = function() {
        function t(t) {
            if (this.P = [], "boolean" == typeof t) this.g = t;
            else {
                var n = Array.isArray(t) ? t : [
                    t
                ];
                this.P = n.map(function(t) {
                    return $(t);
                });
            }
        }
        return t.prototype.checkHref = function(t) {
            if ("boolean" == typeof this.g) return this.g;
            var n = U(t).path;
            return this.P.some(function(t) {
                return null !== t.exec(n);
            });
        }, t;
    }(), G = function(t) {
        function n(n) {
            var r;
            return (r = t.call(this, n) || this).k = new Map, r;
        }
        e(n, t);
        var i = n.prototype;
        return i.set = function(t, n, r) {
            return this.k.set(t, {
                action: r,
                request: n
            }), {
                action: r,
                request: n
            };
        }, i.get = function(t) {
            return this.k.get(t);
        }, i.getRequest = function(t) {
            return this.k.get(t).request;
        }, i.getAction = function(t) {
            return this.k.get(t).action;
        }, i.has = function(t) {
            return !this.checkHref(t) && this.k.has(t);
        }, i.delete = function(t) {
            return this.k.delete(t);
        }, i.update = function(t, n) {
            var e = r({}, this.k.get(t), {}, n);
            return this.k.set(t, e), e;
        }, n;
    }(z), Q = function() {
        return !window.history.pushState;
    }, W = function(t) {
        return !t.el || !t.href;
    }, J = function(t) {
        var n = t.event;
        return n.which > 1 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey;
    }, K = function(t) {
        var n = t.el;
        return n.hasAttribute("target") && "_blank" === n.target;
    }, V = function(t) {
        var n = t.el;
        return void 0 !== n.protocol && window.location.protocol !== n.protocol || void 0 !== n.hostname && window.location.hostname !== n.hostname;
    }, Y = function(t) {
        var n = t.el;
        return void 0 !== n.port && B() !== B(n.href);
    }, Z = function(t) {
        var n = t.el;
        return n.getAttribute && "string" == typeof n.getAttribute("download");
    }, tt = function(t) {
        return t.el.hasAttribute(S.prefix + "-" + S.prevent);
    }, nt = function(t) {
        return Boolean(t.el.closest("[" + S.prefix + "-" + S.prevent + '="all"]'));
    }, rt = function(t) {
        var n = t.href;
        return F(n) === F() && B(n) === B();
    }, et = function(t) {
        function n(n) {
            var r;
            return (r = t.call(this, n) || this).suite = [], r.tests = new Map, r.init(), r;
        }
        e(n, t);
        var r = n.prototype;
        return r.init = function() {
            this.add("pushState", Q), this.add("exists", W), this.add("newTab", J), this.add("blank", K), this.add("corsDomain", V), this.add("corsPort", Y), this.add("download", Z), this.add("preventSelf", tt), this.add("preventAll", nt), this.add("sameUrl", rt, !1);
        }, r.add = function(t, n, r) {
            void 0 === r && (r = !0), this.tests.set(t, n), r && this.suite.push(t);
        }, r.run = function(t, n, r, e) {
            return this.tests.get(t)({
                el: n,
                event: r,
                href: e
            });
        }, r.checkLink = function(t, n, r) {
            var e = this;
            return this.suite.some(function(i) {
                return e.run(i, t, n, r);
            });
        }, n;
    }(z), it = function(t) {
        function n(r, e) {
            var i;
            void 0 === e && (e = "Barba error");
            for(var o = arguments.length, u = new Array(o > 2 ? o - 2 : 0), f = 2; f < o; f++)u[f - 2] = arguments[f];
            return (i = t.call.apply(t, [
                this
            ].concat(u)) || this).error = r, i.label = e, Error.captureStackTrace && Error.captureStackTrace(function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
            }(i), n), i.name = "BarbaError", i;
        }
        return e(n, t), n;
    }(f(Error)), ot = function() {
        function t(t) {
            void 0 === t && (t = []), this.logger = new l("@barba/core"), this.all = [], this.page = [], this.once = [], this.A = [
                {
                    name: "namespace",
                    type: "strings"
                },
                {
                    name: "custom",
                    type: "function"
                }
            ], t && (this.all = this.all.concat(t)), this.update();
        }
        var n = t.prototype;
        return n.add = function(t, n) {
            switch(t){
                case "rule":
                    this.A.splice(n.position || 0, 0, n.value);
                    break;
                case "transition":
                default:
                    this.all.push(n);
            }
            this.update();
        }, n.resolve = function(t, n) {
            var r = this;
            void 0 === n && (n = {});
            var e = n.once ? this.once : this.page;
            e = e.filter(n.self ? function(t) {
                return t.name && "self" === t.name;
            } : function(t) {
                return !t.name || "self" !== t.name;
            });
            var i = new Map, o = e.find(function(e) {
                var o = !0, u = {};
                return !(!n.self || "self" !== e.name) || (r.A.reverse().forEach(function(n) {
                    o && (o = r.R(e, n, t, u), e.from && e.to && (o = r.R(e, n, t, u, "from") && r.R(e, n, t, u, "to")), e.from && !e.to && (o = r.R(e, n, t, u, "from")), !e.from && e.to && (o = r.R(e, n, t, u, "to")));
                }), i.set(e, u), o);
            }), u = i.get(o), f = [];
            if (f.push(n.once ? "once" : "page"), n.self && f.push("self"), u) {
                var s, c = [
                    o
                ];
                Object.keys(u).length > 0 && c.push(u), (s = this.logger).info.apply(s, [
                    "Transition found [" + f.join(",") + "]"
                ].concat(c));
            } else this.logger.info("No transition found [" + f.join(",") + "]");
            return o;
        }, n.update = function() {
            var t = this;
            this.all = this.all.map(function(n) {
                return t.T(n);
            }).sort(function(t, n) {
                return t.priority - n.priority;
            }).reverse().map(function(t) {
                return delete t.priority, t;
            }), this.page = this.all.filter(function(t) {
                return void 0 !== t.leave || void 0 !== t.enter;
            }), this.once = this.all.filter(function(t) {
                return void 0 !== t.once;
            });
        }, n.R = function(t, n, r, e, i) {
            var o = !0, u = !1, f = t, s = n.name, c = s, a = s, h = s, v = i ? f[i] : f, l = "to" === i ? r.next : r.current;
            if (i ? v && v[s] : v[s]) {
                switch(n.type){
                    case "strings":
                    default:
                        var d = Array.isArray(v[c]) ? v[c] : [
                            v[c]
                        ];
                        l[c] && -1 !== d.indexOf(l[c]) && (u = !0), -1 === d.indexOf(l[c]) && (o = !1);
                        break;
                    case "object":
                        var m = Array.isArray(v[a]) ? v[a] : [
                            v[a]
                        ];
                        l[a] ? (l[a].name && -1 !== m.indexOf(l[a].name) && (u = !0), -1 === m.indexOf(l[a].name) && (o = !1)) : o = !1;
                        break;
                    case "function":
                        v[h](r) ? u = !0 : o = !1;
                }
                u && (i ? (e[i] = e[i] || {}, e[i][s] = f[i][s]) : e[s] = f[s]);
            }
            return o;
        }, n.O = function(t, n, r) {
            var e = 0;
            return (t[n] || t.from && t.from[n] || t.to && t.to[n]) && (e += Math.pow(10, r), t.from && t.from[n] && (e += 1), t.to && t.to[n] && (e += 2)), e;
        }, n.T = function(t) {
            var n = this;
            t.priority = 0;
            var r = 0;
            return this.A.forEach(function(e, i) {
                r += n.O(t, e.name, i + 1);
            }), t.priority = r, t;
        }, t;
    }(), ut = function() {
        function t(t) {
            void 0 === t && (t = []), this.logger = new l("@barba/core"), this.S = !1, this.store = new ot(t);
        }
        var r = t.prototype;
        return r.get = function(t, n) {
            return this.store.resolve(t, n);
        }, r.doOnce = function(t) {
            var n = t.data, r = t.transition;
            try {
                var e = function() {
                    i.S = !1;
                }, i = this, o = r || {};
                i.S = !0;
                var u = s(function() {
                    return Promise.resolve(i.j("beforeOnce", n, o)).then(function() {
                        return Promise.resolve(i.once(n, o)).then(function() {
                            return Promise.resolve(i.j("afterOnce", n, o)).then(function() {});
                        });
                    });
                }, function(t) {
                    i.S = !1, i.logger.debug("Transition error [before/after/once]"), i.logger.error(t);
                });
                return Promise.resolve(u && u.then ? u.then(e) : e());
            } catch (t) {
                return Promise.reject(t);
            }
        }, r.doPage = function(t) {
            var n = t.data, r = t.transition, e = t.page, i = t.wrapper;
            try {
                var o = function(t) {
                    if (u) return t;
                    f.S = !1;
                }, u = !1, f = this, c = r || {}, a = !0 === c.sync || !1;
                f.S = !0;
                var h = s(function() {
                    function t() {
                        return Promise.resolve(f.j("before", n, c)).then(function() {
                            var t = !1;
                            function r(r) {
                                return t ? r : Promise.resolve(f.remove(n)).then(function() {
                                    return Promise.resolve(f.j("after", n, c)).then(function() {});
                                });
                            }
                            var o = function() {
                                if (a) return s(function() {
                                    return Promise.resolve(f.add(n, i)).then(function() {
                                        return Promise.resolve(f.j("beforeLeave", n, c)).then(function() {
                                            return Promise.resolve(f.j("beforeEnter", n, c)).then(function() {
                                                return Promise.resolve(Promise.all([
                                                    f.leave(n, c),
                                                    f.enter(n, c)
                                                ])).then(function() {
                                                    return Promise.resolve(f.j("afterLeave", n, c)).then(function() {
                                                        return Promise.resolve(f.j("afterEnter", n, c)).then(function() {});
                                                    });
                                                });
                                            });
                                        });
                                    });
                                }, function(t) {
                                    if (f.M(t)) throw new it(t, "Transition error [sync]");
                                });
                                var r = function(r) {
                                    return t ? r : s(function() {
                                        var t = function() {
                                            if (!1 !== o) return Promise.resolve(f.add(n, i)).then(function() {
                                                return Promise.resolve(f.j("beforeEnter", n, c)).then(function() {
                                                    return Promise.resolve(f.enter(n, c, o)).then(function() {
                                                        return Promise.resolve(f.j("afterEnter", n, c)).then(function() {});
                                                    });
                                                });
                                            });
                                        }();
                                        if (t && t.then) return t.then(function() {});
                                    }, function(t) {
                                        if (f.M(t)) throw new it(t, "Transition error [before/after/enter]");
                                    });
                                }, o = !1, u = s(function() {
                                    return Promise.resolve(f.j("beforeLeave", n, c)).then(function() {
                                        return Promise.resolve(Promise.all([
                                            f.leave(n, c),
                                            L(e, n)
                                        ]).then(function(t) {
                                            return t[0];
                                        })).then(function(t) {
                                            return o = t, Promise.resolve(f.j("afterLeave", n, c)).then(function() {});
                                        });
                                    });
                                }, function(t) {
                                    if (f.M(t)) throw new it(t, "Transition error [before/after/leave]");
                                });
                                return u && u.then ? u.then(r) : r(u);
                            }();
                            return o && o.then ? o.then(r) : r(o);
                        });
                    }
                    var r = function() {
                        if (a) return Promise.resolve(L(e, n)).then(function() {});
                    }();
                    return r && r.then ? r.then(t) : t();
                }, function(t) {
                    if (f.S = !1, t.name && "BarbaError" === t.name) throw f.logger.debug(t.label), f.logger.error(t.error), t;
                    throw f.logger.debug("Transition error [page]"), f.logger.error(t), t;
                });
                return Promise.resolve(h && h.then ? h.then(o) : o(h));
            } catch (t) {
                return Promise.reject(t);
            }
        }, r.once = function(t, n) {
            try {
                return Promise.resolve(X.do("once", t, n)).then(function() {
                    return n.once ? N(n.once, n)(t) : Promise.resolve();
                });
            } catch (t) {
                return Promise.reject(t);
            }
        }, r.leave = function(t, n) {
            try {
                return Promise.resolve(X.do("leave", t, n)).then(function() {
                    return n.leave ? N(n.leave, n)(t) : Promise.resolve();
                });
            } catch (t) {
                return Promise.reject(t);
            }
        }, r.enter = function(t, n, r) {
            try {
                return Promise.resolve(X.do("enter", t, n)).then(function() {
                    return n.enter ? N(n.enter, n)(t, r) : Promise.resolve();
                });
            } catch (t) {
                return Promise.reject(t);
            }
        }, r.add = function(t, n) {
            try {
                return j.addContainer(t.next.container, n), X.do("nextAdded", t), Promise.resolve();
            } catch (t) {
                return Promise.reject(t);
            }
        }, r.remove = function(t) {
            try {
                return j.removeContainer(t.current.container), X.do("currentRemoved", t), Promise.resolve();
            } catch (t) {
                return Promise.reject(t);
            }
        }, r.M = function(t) {
            return t.message ? !/Timeout error|Fetch error/.test(t.message) : !t.status;
        }, r.j = function(t, n, r) {
            try {
                return Promise.resolve(X.do(t, n, r)).then(function() {
                    return r[t] ? N(r[t], r)(n) : Promise.resolve();
                });
            } catch (t) {
                return Promise.reject(t);
            }
        }, n(t, [
            {
                key: "isRunning",
                get: function() {
                    return this.S;
                },
                set: function(t) {
                    this.S = t;
                }
            },
            {
                key: "hasOnce",
                get: function() {
                    return this.store.once.length > 0;
                }
            },
            {
                key: "hasSelf",
                get: function() {
                    return this.store.all.some(function(t) {
                        return "self" === t.name;
                    });
                }
            },
            {
                key: "shouldWait",
                get: function() {
                    return this.store.all.some(function(t) {
                        return t.to && !t.to.route || t.sync;
                    });
                }
            }
        ]), t;
    }(), ft = function() {
        function t(t) {
            var n = this;
            this.names = [
                "beforeLeave",
                "afterLeave",
                "beforeEnter",
                "afterEnter"
            ], this.byNamespace = new Map, 0 !== t.length && (t.forEach(function(t) {
                n.byNamespace.set(t.namespace, t);
            }), this.names.forEach(function(t) {
                X[t](n.L(t));
            }));
        }
        return t.prototype.L = function(t) {
            var n = this;
            return function(r) {
                var e = t.match(/enter/i) ? r.next : r.current, i = n.byNamespace.get(e.namespace);
                return i && i[t] ? N(i[t], i)(r) : Promise.resolve();
            };
        }, t;
    }();
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(t) {
        var n = this;
        do {
            if (n.matches(t)) return n;
            n = n.parentElement || n.parentNode;
        }while (null !== n && 1 === n.nodeType);
        return null;
    });
    var st = {
        container: null,
        html: "",
        namespace: "",
        url: {
            hash: "",
            href: "",
            path: "",
            port: null,
            query: {}
        }
    };
    return new (function() {
        function t() {
            this.version = a, this.schemaPage = st, this.Logger = l, this.logger = new l("@barba/core"), this.plugins = [], this.hooks = X, this.dom = j, this.helpers = _, this.history = M, this.request = I, this.url = H;
        }
        var e = t.prototype;
        return e.use = function(t, n) {
            var r = this.plugins;
            r.indexOf(t) > -1 ? this.logger.warn("Plugin [" + t.name + "] already installed.") : "function" == typeof t.install ? (t.install(this, n), r.push(t)) : this.logger.warn("Plugin [" + t.name + '] has no "install" method.');
        }, e.init = function(t) {
            var n = void 0 === t ? {} : t, e = n.transitions, i = void 0 === e ? [] : e, o = n.views, u = void 0 === o ? [] : o, f = n.schema, s = void 0 === f ? S : f, c = n.requestError, a = n.timeout, h = void 0 === a ? 2e3 : a, v = n.cacheIgnore, d = void 0 !== v && v, m = n.prefetchIgnore, p = void 0 !== m && m, w = n.preventRunning, b = void 0 !== w && w, y = n.prevent, P = void 0 === y ? null : y, g = n.debug, E = n.logLevel;
            if (l.setLevel(!0 === (void 0 !== g && g) ? "debug" : void 0 === E ? "off" : E), this.logger.info(this.version), Object.keys(s).forEach(function(t) {
                S[t] && (S[t] = s[t]);
            }), this.$ = c, this.timeout = h, this.cacheIgnore = d, this.prefetchIgnore = p, this.preventRunning = b, this._ = this.dom.getWrapper(), !this._) throw new Error("[@barba/core] No Barba wrapper found");
            this._.setAttribute("aria-live", "polite"), this.q();
            var x = this.data.current;
            if (!x.container) throw new Error("[@barba/core] No Barba container found");
            if (this.cache = new G(d), this.prevent = new et(p), this.transitions = new ut(i), this.views = new ft(u), null !== P) {
                if ("function" != typeof P) throw new Error("[@barba/core] Prevent should be a function");
                this.prevent.add("preventCustom", P);
            }
            this.history.init(x.url.href, x.namespace), this.B = this.B.bind(this), this.U = this.U.bind(this), this.D = this.D.bind(this), this.F(), this.plugins.forEach(function(t) {
                return t.init();
            });
            var k = this.data;
            k.trigger = "barba", k.next = k.current, k.current = r({}, this.schemaPage), this.hooks.do("ready", k), this.once(k), this.q();
        }, e.destroy = function() {
            this.q(), this.H(), this.history.clear(), this.hooks.clear(), this.plugins = [];
        }, e.force = function(t) {
            window.location.assign(t);
        }, e.go = function(t, n, r) {
            var e;
            if (void 0 === n && (n = "barba"), this.transitions.isRunning) this.force(t);
            else if (!(e = "popstate" === n ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(t) : this.prevent.run("sameUrl", null, null, t)) || this.transitions.hasSelf) return n = this.history.change(t, n, r), r && (r.stopPropagation(), r.preventDefault()), this.page(t, n, e);
        }, e.once = function(t) {
            try {
                var n = this;
                return Promise.resolve(n.hooks.do("beforeEnter", t)).then(function() {
                    function r() {
                        return Promise.resolve(n.hooks.do("afterEnter", t)).then(function() {});
                    }
                    var e = function() {
                        if (n.transitions.hasOnce) {
                            var r = n.transitions.get(t, {
                                once: !0
                            });
                            return Promise.resolve(n.transitions.doOnce({
                                transition: r,
                                data: t
                            })).then(function() {});
                        }
                    }();
                    return e && e.then ? e.then(r) : r();
                });
            } catch (t) {
                return Promise.reject(t);
            }
        }, e.page = function(t, n, e) {
            try {
                var i = function() {
                    var t = o.data;
                    return Promise.resolve(o.hooks.do("page", t)).then(function() {
                        var n = s(function() {
                            var n = o.transitions.get(t, {
                                once: !1,
                                self: e
                            });
                            return Promise.resolve(o.transitions.doPage({
                                data: t,
                                page: u,
                                transition: n,
                                wrapper: o._
                            })).then(function() {
                                o.q();
                            });
                        }, function() {
                            0 === l.getLevel() && o.force(t.current.url.href);
                        });
                        if (n && n.then) return n.then(function() {});
                    });
                }, o = this;
                o.data.next.url = r({
                    href: t
                }, o.url.parse(t)), o.data.trigger = n;
                var u = o.cache.has(t) ? o.cache.update(t, {
                    action: "click"
                }).request : o.cache.set(t, o.request(t, o.timeout, o.onRequestError.bind(o, n)), "click").request, f = function() {
                    if (o.transitions.shouldWait) return Promise.resolve(L(u, o.data)).then(function() {});
                }();
                return Promise.resolve(f && f.then ? f.then(i) : i());
            } catch (t) {
                return Promise.reject(t);
            }
        }, e.onRequestError = function(t) {
            this.transitions.isRunning = !1;
            for(var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), e = 1; e < n; e++)r[e - 1] = arguments[e];
            var i = r[0], o = r[1], u = this.cache.getAction(i);
            return this.cache.delete(i), this.$ && !1 === this.$(t, u, i, o) || "click" === u && this.force(i), false;
        }, e.prefetch = function(t) {
            var n = this;
            this.cache.has(t) || this.cache.set(t, this.request(t, this.timeout, this.onRequestError.bind(this, "barba")).catch(function(t) {
                n.logger.error(t);
            }), "prefetch");
        }, e.F = function() {
            !0 !== this.prefetchIgnore && (document.addEventListener("mouseover", this.B), document.addEventListener("touchstart", this.B)), document.addEventListener("click", this.U), window.addEventListener("popstate", this.D);
        }, e.H = function() {
            !0 !== this.prefetchIgnore && (document.removeEventListener("mouseover", this.B), document.removeEventListener("touchstart", this.B)), document.removeEventListener("click", this.U), window.removeEventListener("popstate", this.D);
        }, e.B = function(t) {
            var n = this, r = this.I(t);
            if (r) {
                var e = this.dom.getHref(r);
                this.prevent.checkHref(e) || this.cache.has(e) || this.cache.set(e, this.request(e, this.timeout, this.onRequestError.bind(this, r)).catch(function(t) {
                    n.logger.error(t);
                }), "enter");
            }
        }, e.U = function(t) {
            var n = this.I(t);
            if (n) return this.transitions.isRunning && this.preventRunning ? (t.preventDefault(), void t.stopPropagation()) : void this.go(this.dom.getHref(n), n, t);
        }, e.D = function(t) {
            this.go(this.url.getHref(), "popstate", t);
        }, e.I = function(t) {
            for(var n = t.target; n && !this.dom.getHref(n);)n = n.parentNode;
            if (n && !this.prevent.checkLink(n, t, this.dom.getHref(n))) return n;
        }, e.q = function() {
            var t = this.url.getHref(), n = {
                container: this.dom.getContainer(),
                html: this.dom.getHtml(),
                namespace: this.dom.getNamespace(),
                url: r({
                    href: t
                }, this.url.parse(t))
            };
            this.C = {
                current: n,
                next: r({}, this.schemaPage),
                trigger: void 0
            }, this.hooks.do("reset", this.data);
        }, n(t, [
            {
                key: "data",
                get: function() {
                    return this.C;
                }
            },
            {
                key: "wrapper",
                get: function() {
                    return this._;
                }
            }
        ]), t;
    }());
});

},{}],"9U1TN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _gsap = require("gsap");
var _screenLoaderJs = require("../views/ScreenLoader.js");
var _screenLoaderJsDefault = parcelHelpers.interopDefault(_screenLoaderJs);
window.loadingScreen = new (0, _screenLoaderJsDefault.default)(.25, .25);
window.barbaDefaultTransition = {
    name: "loadingScreen",
    sync: false,
    before: function(data) {
        var done = this.async();
        window.menuNav.hide().then(function(res) {
            window.loadingScreen.show().then(function(res) {
                done();
                window.appEvent.trigger("app:barba:beforeDone");
                window.appEvent.trigger("app:barba:beforeEnter");
            });
        });
    },
    beforeLeave: function(data) {
    //var  done = this.async();
    },
    afterLeave: function(data) {},
    beforeEnter: function(data) {
        var done = this.async();
        window.imageLoader.load(data.next.container, function() {
            done();
        });
    },
    enter: function(data) {
        appEvent.trigger("app:launcEnterAnimation");
        (0, _gsap.gsap).set(data.next.container, {
            autoAlpha: 1
        });
        window.appEvent.trigger("app:transition:isEnter");
        window.appEvent.trigger("app:transition:after");
    },
    after: function(data) {
        var done = this.async();
        window.appEvent.trigger("app:transition:after");
        window.loadingScreen.hide().then(function() {
            done();
        });
    }
};

},{"gsap":"fPSuC","../views/ScreenLoader.js":"eNIi3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eNIi3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ScreenLoader);
var _gsap = require("gsap");
function ScreenLoader(timingIn, timingOut) {
    (0, _gsap.gsap).set($("*[data-barba-loadingscreen]"), {
        autoAlpha: 0
    });
    this.show = function() {
        return new Promise(function(resolve) {
            let tl = (0, _gsap.gsap).timeline({
                repeat: 0,
                paused: true,
                onComplete: function() {
                    resolve(true);
                }
            });
            $("*[data-barba-loadingscreen]").addClass("active");
            tl.fromTo("*[data-barba-loadingscreen]", {
                autoAlpha: 0,
                duration: timingIn,
                ease: "power2.in"
            }, {
                autoAlpha: 1,
                duration: timingIn,
                ease: "power2.in"
            });
            tl.play();
        }, "hide");
    };
    this.hide = function() {
        return new Promise(function(resolve) {
            let tl = (0, _gsap.gsap).timeline({
                repeat: 0,
                paused: true,
                onStart: function() {
                    appEvent.trigger("app:threejsAnimation:start");
                },
                onComplete: function() {
                    resolve(true);
                    $("*[data-barba-loadingscreen]").removeClass("active");
                }
            });
            tl.fromTo("*[data-barba-loadingscreen]", {
                autoAlpha: 1,
                duration: timingOut,
                ease: "power2.in"
            }, {
                autoAlpha: 0,
                duration: timingOut,
                ease: "power2.in"
            });
            tl.play();
            appEvent.trigger("app:threejsAnimation:start");
            return;
        }, "show");
    };
}

},{"gsap":"fPSuC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2NIN4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Router);
var _fetchJs = require("../fetch.js");
var _fetchJsDefault = parcelHelpers.interopDefault(_fetchJs);
function Router(instance, router) {
    window.views = [];
    window.routes = [];
    this.instance = instance;
    this.router = router;
    let ajaxifyRoutes = data.ajaxify.routes;
    ajaxifyRoutes.forEach(function(elements) {
        let route = new Object;
        route.path = elements[0];
        route.name = elements[1] + elements[2].charAt(0).toUpperCase() + elements[2].slice(1);
        window.routes.push(route);
        window.views.push({
            namespace: route.name,
            beforeEnter (data1) {
                var done = this.async();
                (0, _fetchJsDefault.default)(elements[1]).then(function(res) {
                    if (window[elements[1]]) {
                        window[elements[1]][elements[2]]();
                        window.controller = elements[1];
                    }
                    done();
                });
            }
        });
    });
}

},{"../fetch.js":"3MHo1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3MHo1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>FetchContent);
function FetchContent(res) {
    return new Promise(function(resolve) {
        const cssPromise = new Promise((resolve)=>{
            require(/*webpackMode:"lazy"*/ /* webpackChunkName: "[request]" */ `../assets/stylesheets/modules/${res}.scss`).then(()=>{
                console.log("Loaded CSS", res);
                resolve(true);
            }, (err)=>{
                console.log("Error", err);
                resolve(true);
            });
        });
        const jsPromise = new Promise((resolve)=>{
            require(/*webpackMode:"lazy"*/ /* webpackChunkName: "[request]" */ `./controllers/${res}`).then(()=>{
                console.log("Loaded JS", res);
                resolve(true);
            }, (err)=>{
                console.log("Error", err);
                resolve(true);
            });
        });
        Promise.all([
            cssPromise,
            jsPromise
        ]).then(()=>{
            resolve(true);
        });
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1cQHs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class AppEventComponent {
    constructor(){
        // handlers
        this.handlers = {};
        this.resizeHandlers = {};
        // init
        this._init();
    }
    reset() {}
    add(handler, handlers = false) {
        if (!handlers) handlers = this.handlers;
        let handlerStr = handler.toString();
        if (handlerStr in handlers) return handlers[handlerStr];
        else {
            handlers[handlerStr] = handler;
            return handler;
        }
    }
    remove(handler) {
        let handlerStr = handler.toString();
        if (handlerStr in this.handlers) delete this.handlers.handlerStr;
    }
    listen(command, handler, newGlobal = null) {
        handler = this.add(handler);
        $(document).off(command, handler).on(command, handler);
        return this;
    }
    resize(handler, newGlobal = null) {
        this.add(handler, this.resizeHandlers);
        return this;
    }
    trigger(events, args = null) {
        if (events == "resize") ;
        else if (events.indexOf(":") !== -1) {
            args = args || [];
            $(document).trigger(events, args);
        }
        return this;
    }
    _resizeHandler() {
        // load all scripts
        let i;
        for(i in this.resizeHandlers)this.resizeHandlers[i]();
    }
    _init() {
        // resize
        let cachedWidth = window.innerWidth;
        let cachedHeight = window.innerHeight;
        $(window).on("resize orientationchange", ()=>{
            let newWidth = window.innerWidth;
            let newHeight = window.innerHeight;
            if (newWidth !== cachedWidth || newHeight !== cachedHeight) {
                // new width
                cachedWidth = newWidth;
                cachedHeight = newHeight;
                this._resizeHandler();
            }
        });
    }
    _isFunction(functionToCheck) {
        return functionToCheck && ({}).toString.call(functionToCheck) === "[object Function]";
    }
}
exports.default = AppEventComponent;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fjawa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class FormComponent {
    constructor(){
        this.recaptchaRenders = {};
        this.timout = false;
        this.loaded = false;
        this.recaptchaIsRenders = false;
    }
    initGlobal() {
        this._ajaxForm();
        this._ajaxFormMessage();
        this._goForm();
    }
    initView() {
        if ($().parsley) {
            console.log("formcomponent initialize parsley");
            $("[data-form],[data-form-message],[data-form-go]").parsley({
                //excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden], [disabled], :hidden",
                errorsContainer: function(pEle) {
                    if (pEle.$element.is("select") && pEle.$element.next(".select2").length > 0) {
                        if (pEle.$element.next("select2errorsContainer").length == 0) pEle.$element.next(".select2").after('<div class="select2errorsContainer"></div>');
                        return pEle.$element.next().next();
                    }
                }
            });
        }
        // générer les recaptcha
        $("[data-form], [data-form-message]").find("[data-recaptcha]").each((i, element)=>{
            let $this = $(element);
            if ($this.find(".grecaptcha-badge").length > 0) return true;
            let $form = $this.parents("form[data-form-message], form[data-form]");
            let command = $form.is("[data-form-message]") ? "formMessage" : "form";
            $this.attr("id", "recaptcha-" + command + "-" + this._createUID());
            this._redendRecaptcha($form).then(()=>{
                this._render($this, command, $form, this.recaptchaRenders);
            });
        });
    }
    _render($el, command, $form) {
        this.recaptchaRenders[$el.attr("id")] = grecaptcha.render($el.attr("id"), {
            "sitekey": data.recaptchaKey,
            "badge": "inline",
            "hl": "fr",
            "type": "image",
            "size": "invisible",
            "callback": ()=>{
                this._formSubmit(command, $form[0]);
            }
        });
    }
    _redendRecaptcha($form) {
        return new Promise((resolve)=>{
            // remove focus to avoid js error:
            if (this.recaptchaIsRenders == false) $form.find("input,select,textarea").one("focus", ()=>{
                this._initCaptcha(this.timout).then(()=>{
                    resolve(true);
                    this.recaptchaIsRenders = true;
                });
            });
            else resolve(true);
        });
    }
    _initCaptcha(timout = false) {
        return new Promise((resolve)=>{
            if ($("#lazyReacptcha").length == 0) {
                let head = document.getElementsByTagName("head")[0];
                let script = document.createElement("script");
                script.id = "lazyReacptcha";
                script.type = "text/javascript";
                script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
                head.appendChild(script);
            }
            let captchaScript = document.getElementById("lazyReacptcha");
            captchaScript.onload = ()=>{
                grecaptcha.ready(()=>{
                    if (typeof grecaptcha === "undefined") ;
                    else resolve(true);
                });
            };
        });
    }
    _goForm() {
        $("body").on("submit", "form[data-form-go]", (e)=>{
            e.preventDefault();
            let $form = $(e.currentTarget);
            window.barba.go($form.attr("action") + "?" + $form.serialize());
        });
    }
    _ajaxForm() {
        $("body").on("submit", "form[data-form]", (e)=>{
            e.preventDefault();
            let $form = $(e.currentTarget);
            $form.addClass("is-processing");
            if ($form.find("[data-recaptcha]").length > 0) grecaptcha.execute(this.recaptchaRenders[$form.find("[data-recaptcha]").attr("id")]);
            else this._formSubmit("form", e.currentTarget);
        });
    }
    _ajaxFormMessage() {
        $("body").on("submit", "form[data-form-message]", (e)=>{
            e.preventDefault();
            let $form = $(e.currentTarget);
            $form.addClass("is-processing");
            if ($form.find("[data-recaptcha]").length > 0) {
                console.log(this.recaptchaRenders, $form.find("[data-recaptcha]").attr("id"));
                console.log(this.recaptchaRenders, $form.find("[data-recaptcha]").attr("id"));
                grecaptcha.reset(this.recaptchaRenders, $form.find("[data-recaptcha]").attr("id"));
                grecaptcha.execute(this.recaptchaRenders[$form.find("[data-recaptcha]").attr("id")]);
            } else this._formSubmit("formMessage", e.currentTarget);
        });
    }
    _formSubmit(command, el) {
        let $form = $(el);
        let name = $form.data("form-message") ? $form.data("form-message") : $form.data("form");
        let method = $form.attr("method");
        let formData = new FormData(el);
        if (method == "get") formData = $form.serialize();
        $form.find("[data-recaptcha]").length;
        if (name != "") window.appEvent.trigger(command + ":" + name + ":process", [
            $form
        ]);
        $form.addClass("is-processing");
        window.appEvent.trigger(command + ":ajax:process", [
            $form
        ]);
        const lang = document.documentElement.lang;
        let currentLanguage = "fr";
        switch(lang){
            case "nl-BE":
                currentLanguage = "nl";
                break;
            case "en-US":
                currentLanguage = "en";
                break;
            case "en-GB":
                currentLanguage = "en";
                break;
        }
        $.ajax({
            url: $form.attr("action") ? $form.attr("action") : $form.attr("data-action"),
            type: method,
            data: formData,
            success: (response)=>{
                if ($form.find("[data-recaptcha]").length > 0) grecaptcha.reset(this.recaptchaRenders[$form.find("[data-recaptcha]").attr("id")]);
                $form.removeClass("is-processing");
                if (name != "") window.appEvent.trigger(command + ":" + name + ":success", [
                    response,
                    $form
                ]);
                window.appEvent.trigger(command + ":ajax:success", [
                    response,
                    $form
                ]);
                if ($form.attr("data-redirect")) window.barba.instance.force($form.attr("data-redirect"));
            },
            error: (xhr, status)=>{
                $form.removeClass("is-processing");
                if (name != "") window.appEvent.trigger(command + ":" + name + ":error", [
                    $form
                ]);
                window.appEvent.trigger(command + ":ajax:error", [
                    $form
                ]);
            },
            contentType: false,
            processData: false
        });
    }
    _createUID() {
        var dt = new Date().getTime();
        var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
            var r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c == "x" ? r : r & 0x3 | 0x8).toString(16);
        });
        return uuid;
    }
}
exports.default = FormComponent;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3aUcP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>FormMessage);
function FormMessage() {
    this.init = function() {
        window.appEvent.listen("formMessage:ajax:process", function(data, el) {
            $(el).addClass("is-processing");
            $(el).removeClass("form-error");
            $(el).removeClass("form-success");
            $(el).find("[data-form-message-success], [data-form-message-error]").attr("style", "");
        });
        window.appEvent.listen("formMessage:ajax:success", function(data, response, el) {
            $(el).removeClass("is-processing");
            $(el).find('input:not([type="hidden"]), textarea').val("");
            $(el).find('input[type="checkbox"]').prop("checked", false);
            if (response == true || response === 1 || response === "1" || response.success === true) {
                $(el).addClass("form-success");
                $(el).removeClass("form-error");
                if ($(el).find("[data-form-message-success]").length > 0) $(el).find("[data-form-message-success]").slideDown(300, function() {
                    setTimeout(()=>{
                        $(el).find("[data-form-message-success]").slideUp(300);
                    }, 3000);
                });
            } else {
                $(el).removeClass("form-success");
                $(el).addClass("form-error");
                if ($(el).find("[data-form-message-error]").length > 0) $(el).find("[data-form-message-error]").slideDown(300);
            }
        });
        window.appEvent.listen("formMessage:ajax:error", function(data, el) {
            $(el).removeClass("is-processing");
            $(el).addClass("form-error");
            $(el).removeClass("form-success");
        });
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g5c5V":[function(require,module,exports) {
var global = arguments[3];
/*!
* Parsley.js
* Version 2.9.2 - built Tue, Dec 10th 2019, 6:18 pm
* http://parsleyjs.org
* Guillaume Potier - <guillaume@wisembly.com>
* Marc-Andre Lafortune - <petroselinum@marc-andre.ca>
* MIT Licensed
*/ // The source code below is generated by babel as
// Parsley is written in ECMAScript 6
//
(function(global, factory) {
    module.exports = factory(require("8078549732c5647f"));
})(this, function($) {
    "use strict";
    function _typeof(obj) {
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function(obj) {
            return typeof obj;
        };
        else _typeof = function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        return _typeof(obj);
    }
    function _extends() {
        _extends = Object.assign || function(target) {
            for(var i = 1; i < arguments.length; i++){
                var source = arguments[i];
                for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
            }
            return target;
        };
        return _extends.apply(this, arguments);
    }
    function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
    }
    function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }
    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
            for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)arr2[i] = arr[i];
            return arr2;
        }
    }
    function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
    }
    function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
    }
    function _iterableToArrayLimit(arr, i) {
        if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally{
            try {
                if (!_n && _i["return"] != null) _i["return"]();
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
    var globalID = 1;
    var pastWarnings = {};
    var Utils = {
        // Parsley DOM-API
        // returns object from dom attributes and values
        attr: function attr(element, namespace, obj) {
            var i;
            var attribute;
            var attributes;
            var regex = new RegExp("^" + namespace, "i");
            if ("undefined" === typeof obj) obj = {};
            else {
                // Clear all own properties. This won't affect prototype's values
                for(i in obj)if (obj.hasOwnProperty(i)) delete obj[i];
            }
            if (!element) return obj;
            attributes = element.attributes;
            for(i = attributes.length; i--;){
                attribute = attributes[i];
                if (attribute && attribute.specified && regex.test(attribute.name)) obj[this.camelize(attribute.name.slice(namespace.length))] = this.deserializeValue(attribute.value);
            }
            return obj;
        },
        checkAttr: function checkAttr(element, namespace, _checkAttr) {
            return element.hasAttribute(namespace + _checkAttr);
        },
        setAttr: function setAttr(element, namespace, attr, value) {
            element.setAttribute(this.dasherize(namespace + attr), String(value));
        },
        getType: function getType(element) {
            return element.getAttribute("type") || "text";
        },
        generateID: function generateID() {
            return "" + globalID++;
        },
        /** Third party functions **/ deserializeValue: function deserializeValue(value) {
            var num;
            try {
                return value ? value == "true" || (value == "false" ? false : value == "null" ? null : !isNaN(num = Number(value)) ? num : /^[\[\{]/.test(value) ? JSON.parse(value) : value) : value;
            } catch (e) {
                return value;
            }
        },
        // Zepto camelize function
        camelize: function camelize(str) {
            return str.replace(/-+(.)?/g, function(match, chr) {
                return chr ? chr.toUpperCase() : "";
            });
        },
        // Zepto dasherize function
        dasherize: function dasherize(str) {
            return str.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase();
        },
        warn: function warn() {
            var _window$console;
            if (window.console && "function" === typeof window.console.warn) (_window$console = window.console).warn.apply(_window$console, arguments);
        },
        warnOnce: function warnOnce(msg) {
            if (!pastWarnings[msg]) {
                pastWarnings[msg] = true;
                this.warn.apply(this, arguments);
            }
        },
        _resetWarnings: function _resetWarnings() {
            pastWarnings = {};
        },
        trimString: function trimString(string) {
            return string.replace(/^\s+|\s+$/g, "");
        },
        parse: {
            date: function date(string) {
                var parsed = string.match(/^(\d{4,})-(\d\d)-(\d\d)$/);
                if (!parsed) return null;
                var _parsed$map = parsed.map(function(x) {
                    return parseInt(x, 10);
                }), _parsed$map2 = _slicedToArray(_parsed$map, 4), _ = _parsed$map2[0], year = _parsed$map2[1], month = _parsed$map2[2], day = _parsed$map2[3];
                var date = new Date(year, month - 1, day);
                if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) return null;
                return date;
            },
            string: function string(_string) {
                return _string;
            },
            integer: function integer(string) {
                if (isNaN(string)) return null;
                return parseInt(string, 10);
            },
            number: function number(string) {
                if (isNaN(string)) throw null;
                return parseFloat(string);
            },
            "boolean": function _boolean(string) {
                return !/^\s*false\s*$/i.test(string);
            },
            object: function object(string) {
                return Utils.deserializeValue(string);
            },
            regexp: function regexp(_regexp) {
                var flags = ""; // Test if RegExp is literal, if not, nothing to be done, otherwise, we need to isolate flags and pattern
                if (/^\/.*\/(?:[gimy]*)$/.test(_regexp)) {
                    // Replace the regexp literal string with the first match group: ([gimy]*)
                    // If no flag is present, this will be a blank string
                    flags = _regexp.replace(/.*\/([gimy]*)$/, "$1"); // Again, replace the regexp literal string with the first match group:
                    // everything excluding the opening and closing slashes and the flags
                    _regexp = _regexp.replace(new RegExp("^/(.*?)/" + flags + "$"), "$1");
                } else // Anchor regexp:
                _regexp = "^" + _regexp + "$";
                return new RegExp(_regexp, flags);
            }
        },
        parseRequirement: function parseRequirement(requirementType, string) {
            var converter = this.parse[requirementType || "string"];
            if (!converter) throw 'Unknown requirement specification: "' + requirementType + '"';
            var converted = converter(string);
            if (converted === null) throw "Requirement is not a ".concat(requirementType, ': "').concat(string, '"');
            return converted;
        },
        namespaceEvents: function namespaceEvents(events, namespace) {
            events = this.trimString(events || "").split(/\s+/);
            if (!events[0]) return "";
            return $.map(events, function(evt) {
                return "".concat(evt, ".").concat(namespace);
            }).join(" ");
        },
        difference: function difference(array, remove) {
            // This is O(N^2), should be optimized
            var result = [];
            $.each(array, function(_, elem) {
                if (remove.indexOf(elem) == -1) result.push(elem);
            });
            return result;
        },
        // Alter-ego to native Promise.all, but for jQuery
        all: function all(promises) {
            // jQuery treats $.when() and $.when(singlePromise) differently; let's avoid that and add spurious elements
            return $.when.apply($, _toConsumableArray(promises).concat([
                42,
                42
            ]));
        },
        // Object.create polyfill, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#Polyfill
        objectCreate: Object.create || function() {
            var Object1 = function Object1() {};
            return function(prototype) {
                if (arguments.length > 1) throw Error("Second argument not supported");
                if (_typeof(prototype) != "object") throw TypeError("Argument must be an object");
                Object1.prototype = prototype;
                var result = new Object1();
                Object1.prototype = null;
                return result;
            };
        }(),
        _SubmitSelector: 'input[type="submit"], button:submit'
    };
    // All these options could be overriden and specified directly in DOM using
    // `data-parsley-` default DOM-API
    // eg: `inputs` can be set in DOM using `data-parsley-inputs="input, textarea"`
    // eg: `data-parsley-stop-on-first-failing-constraint="false"`
    var Defaults = {
        // ### General
        // Default data-namespace for DOM API
        namespace: "data-parsley-",
        // Supported inputs by default
        inputs: "input, textarea, select",
        // Excluded inputs by default
        excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
        // Stop validating field on highest priority failing constraint
        priorityEnabled: true,
        // ### Field only
        // identifier used to group together inputs (e.g. radio buttons...)
        multiple: null,
        // identifier (or array of identifiers) used to validate only a select group of inputs
        group: null,
        // ### UI
        // Enable\Disable error messages
        uiEnabled: true,
        // Key events threshold before validation
        validationThreshold: 3,
        // Focused field on form validation error. 'first'|'last'|'none'
        focus: "first",
        // event(s) that will trigger validation before first failure. eg: `input`...
        trigger: false,
        // event(s) that will trigger validation after first failure.
        triggerAfterFailure: "input",
        // Class that would be added on every failing validation Parsley field
        errorClass: "parsley-error",
        // Same for success validation
        successClass: "parsley-success",
        // Return the `$element` that will receive these above success or error classes
        // Could also be (and given directly from DOM) a valid selector like `'#div'`
        classHandler: function classHandler(Field) {},
        // Return the `$element` where errors will be appended
        // Could also be (and given directly from DOM) a valid selector like `'#div'`
        errorsContainer: function errorsContainer(Field) {},
        // ul elem that would receive errors' list
        errorsWrapper: '<ul class="parsley-errors-list"></ul>',
        // li elem that would receive error message
        errorTemplate: "<li></li>"
    };
    var Base = function Base() {
        this.__id__ = Utils.generateID();
    };
    Base.prototype = {
        asyncSupport: true,
        // Deprecated
        _pipeAccordingToValidationResult: function _pipeAccordingToValidationResult() {
            var _this = this;
            var pipe = function pipe() {
                var r = $.Deferred();
                if (true !== _this.validationResult) r.reject();
                return r.resolve().promise();
            };
            return [
                pipe,
                pipe
            ];
        },
        actualizeOptions: function actualizeOptions() {
            Utils.attr(this.element, this.options.namespace, this.domOptions);
            if (this.parent && this.parent.actualizeOptions) this.parent.actualizeOptions();
            return this;
        },
        _resetOptions: function _resetOptions(initOptions) {
            this.domOptions = Utils.objectCreate(this.parent.options);
            this.options = Utils.objectCreate(this.domOptions); // Shallow copy of ownProperties of initOptions:
            for(var i in initOptions)if (initOptions.hasOwnProperty(i)) this.options[i] = initOptions[i];
            this.actualizeOptions();
        },
        _listeners: null,
        // Register a callback for the given event name
        // Callback is called with context as the first argument and the `this`
        // The context is the current parsley instance, or window.Parsley if global
        // A return value of `false` will interrupt the calls
        on: function on(name, fn) {
            this._listeners = this._listeners || {};
            var queue = this._listeners[name] = this._listeners[name] || [];
            queue.push(fn);
            return this;
        },
        // Deprecated. Use `on` instead
        subscribe: function subscribe(name, fn) {
            $.listenTo(this, name.toLowerCase(), fn);
        },
        // Unregister a callback (or all if none is given) for the given event name
        off: function off(name, fn) {
            var queue = this._listeners && this._listeners[name];
            if (queue) {
                if (!fn) delete this._listeners[name];
                else {
                    for(var i = queue.length; i--;)if (queue[i] === fn) queue.splice(i, 1);
                }
            }
            return this;
        },
        // Deprecated. Use `off`
        unsubscribe: function unsubscribe(name, fn) {
            $.unsubscribeTo(this, name.toLowerCase());
        },
        // Trigger an event of the given name
        // A return value of `false` interrupts the callback chain
        // Returns false if execution was interrupted
        trigger: function trigger(name, target, extraArg) {
            target = target || this;
            var queue = this._listeners && this._listeners[name];
            var result;
            if (queue) for(var i = queue.length; i--;){
                result = queue[i].call(target, target, extraArg);
                if (result === false) return result;
            }
            if (this.parent) return this.parent.trigger(name, target, extraArg);
            return true;
        },
        asyncIsValid: function asyncIsValid(group, force) {
            Utils.warnOnce("asyncIsValid is deprecated; please use whenValid instead");
            return this.whenValid({
                group: group,
                force: force
            });
        },
        _findRelated: function _findRelated() {
            return this.options.multiple ? $(this.parent.element.querySelectorAll("[".concat(this.options.namespace, 'multiple="').concat(this.options.multiple, '"]'))) : this.$element;
        }
    };
    var convertArrayRequirement = function convertArrayRequirement(string, length) {
        var m = string.match(/^\s*\[(.*)\]\s*$/);
        if (!m) throw 'Requirement is not an array: "' + string + '"';
        var values = m[1].split(",").map(Utils.trimString);
        if (values.length !== length) throw "Requirement has " + values.length + " values when " + length + " are needed";
        return values;
    };
    var convertExtraOptionRequirement = function convertExtraOptionRequirement(requirementSpec, string, extraOptionReader) {
        var main = null;
        var extra = {};
        for(var key in requirementSpec)if (key) {
            var value = extraOptionReader(key);
            if ("string" === typeof value) value = Utils.parseRequirement(requirementSpec[key], value);
            extra[key] = value;
        } else main = Utils.parseRequirement(requirementSpec[key], string);
        return [
            main,
            extra
        ];
    }; // A Validator needs to implement the methods `validate` and `parseRequirements`
    var Validator = function Validator(spec) {
        $.extend(true, this, spec);
    };
    Validator.prototype = {
        // Returns `true` iff the given `value` is valid according the given requirements.
        validate: function validate(value, requirementFirstArg) {
            if (this.fn) {
                // Legacy style validator
                if (arguments.length > 3) requirementFirstArg = [].slice.call(arguments, 1, -1); // Skip first arg (value) and last (instance), combining the rest
                return this.fn(value, requirementFirstArg);
            }
            if (Array.isArray(value)) {
                if (!this.validateMultiple) throw "Validator `" + this.name + "` does not handle multiple values";
                return this.validateMultiple.apply(this, arguments);
            } else {
                var instance = arguments[arguments.length - 1];
                if (this.validateDate && instance._isDateInput()) {
                    arguments[0] = Utils.parse.date(arguments[0]);
                    if (arguments[0] === null) return false;
                    return this.validateDate.apply(this, arguments);
                }
                if (this.validateNumber) {
                    if (!value) return true;
                    if (isNaN(value)) return false;
                    arguments[0] = parseFloat(arguments[0]);
                    return this.validateNumber.apply(this, arguments);
                }
                if (this.validateString) return this.validateString.apply(this, arguments);
                throw "Validator `" + this.name + "` only handles multiple values";
            }
        },
        // Parses `requirements` into an array of arguments,
        // according to `this.requirementType`
        parseRequirements: function parseRequirements(requirements, extraOptionReader) {
            if ("string" !== typeof requirements) // Assume requirement already parsed
            // but make sure we return an array
            return Array.isArray(requirements) ? requirements : [
                requirements
            ];
            var type = this.requirementType;
            if (Array.isArray(type)) {
                var values = convertArrayRequirement(requirements, type.length);
                for(var i = 0; i < values.length; i++)values[i] = Utils.parseRequirement(type[i], values[i]);
                return values;
            } else if ($.isPlainObject(type)) return convertExtraOptionRequirement(type, requirements, extraOptionReader);
            else return [
                Utils.parseRequirement(type, requirements)
            ];
        },
        // Defaults:
        requirementType: "string",
        priority: 2
    };
    var ValidatorRegistry = function ValidatorRegistry(validators, catalog) {
        this.__class__ = "ValidatorRegistry"; // Default Parsley locale is en
        this.locale = "en";
        this.init(validators || {}, catalog || {});
    };
    var typeTesters = {
        email: /^((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))$/,
        // Follow https://www.w3.org/TR/html5/infrastructure.html#floating-point-numbers
        number: /^-?(\d*\.)?\d+(e[-+]?\d+)?$/i,
        integer: /^-?\d+$/,
        digits: /^\d+$/,
        alphanum: /^\w+$/i,
        date: {
            test: function test(value) {
                return Utils.parse.date(value) !== null;
            }
        },
        url: new RegExp("^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-zA-Z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$")
    };
    typeTesters.range = typeTesters.number; // See http://stackoverflow.com/a/10454560/8279
    var decimalPlaces = function decimalPlaces(num) {
        var match = ("" + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
        if (!match) return 0;
        return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
    }; // parseArguments('number', ['1', '2']) => [1, 2]
    var parseArguments = function parseArguments(type, args) {
        return args.map(Utils.parse[type]);
    }; // operatorToValidator returns a validating function for an operator function, applied to the given type
    var operatorToValidator = function operatorToValidator(type, operator) {
        return function(value) {
            for(var _len = arguments.length, requirementsAndInput = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)requirementsAndInput[_key - 1] = arguments[_key];
            requirementsAndInput.pop(); // Get rid of `input` argument
            return operator.apply(void 0, [
                value
            ].concat(_toConsumableArray(parseArguments(type, requirementsAndInput))));
        };
    };
    var comparisonOperator = function comparisonOperator(operator) {
        return {
            validateDate: operatorToValidator("date", operator),
            validateNumber: operatorToValidator("number", operator),
            requirementType: operator.length <= 2 ? "string" : [
                "string",
                "string"
            ],
            // Support operators with a 1 or 2 requirement(s)
            priority: 30
        };
    };
    ValidatorRegistry.prototype = {
        init: function init(validators, catalog) {
            this.catalog = catalog; // Copy prototype's validators:
            this.validators = _extends({}, this.validators);
            for(var name in validators)this.addValidator(name, validators[name].fn, validators[name].priority);
            window.Parsley.trigger("parsley:validator:init");
        },
        // Set new messages locale if we have dictionary loaded in ParsleyConfig.i18n
        setLocale: function setLocale(locale) {
            if ("undefined" === typeof this.catalog[locale]) throw new Error(locale + " is not available in the catalog");
            this.locale = locale;
            return this;
        },
        // Add a new messages catalog for a given locale. Set locale for this catalog if set === `true`
        addCatalog: function addCatalog(locale, messages, set) {
            if ("object" === _typeof(messages)) this.catalog[locale] = messages;
            if (true === set) return this.setLocale(locale);
            return this;
        },
        // Add a specific message for a given constraint in a given locale
        addMessage: function addMessage(locale, name, message) {
            if ("undefined" === typeof this.catalog[locale]) this.catalog[locale] = {};
            this.catalog[locale][name] = message;
            return this;
        },
        // Add messages for a given locale
        addMessages: function addMessages(locale, nameMessageObject) {
            for(var name in nameMessageObject)this.addMessage(locale, name, nameMessageObject[name]);
            return this;
        },
        // Add a new validator
        //
        //    addValidator('custom', {
        //        requirementType: ['integer', 'integer'],
        //        validateString: function(value, from, to) {},
        //        priority: 22,
        //        messages: {
        //          en: "Hey, that's no good",
        //          fr: "Aye aye, pas bon du tout",
        //        }
        //    })
        //
        // Old API was addValidator(name, function, priority)
        //
        addValidator: function addValidator(name, arg1, arg2) {
            if (this.validators[name]) Utils.warn('Validator "' + name + '" is already defined.');
            else if (Defaults.hasOwnProperty(name)) {
                Utils.warn('"' + name + '" is a restricted keyword and is not a valid validator name.');
                return;
            }
            return this._setValidator.apply(this, arguments);
        },
        hasValidator: function hasValidator(name) {
            return !!this.validators[name];
        },
        updateValidator: function updateValidator(name, arg1, arg2) {
            if (!this.validators[name]) {
                Utils.warn('Validator "' + name + '" is not already defined.');
                return this.addValidator.apply(this, arguments);
            }
            return this._setValidator.apply(this, arguments);
        },
        removeValidator: function removeValidator(name) {
            if (!this.validators[name]) Utils.warn('Validator "' + name + '" is not defined.');
            delete this.validators[name];
            return this;
        },
        _setValidator: function _setValidator(name, validator, priority) {
            if ("object" !== _typeof(validator)) // Old style validator, with `fn` and `priority`
            validator = {
                fn: validator,
                priority: priority
            };
            if (!validator.validate) validator = new Validator(validator);
            this.validators[name] = validator;
            for(var locale in validator.messages || {})this.addMessage(locale, name, validator.messages[locale]);
            return this;
        },
        getErrorMessage: function getErrorMessage(constraint) {
            var message; // Type constraints are a bit different, we have to match their requirements too to find right error message
            if ("type" === constraint.name) {
                var typeMessages = this.catalog[this.locale][constraint.name] || {};
                message = typeMessages[constraint.requirements];
            } else message = this.formatMessage(this.catalog[this.locale][constraint.name], constraint.requirements);
            return message || this.catalog[this.locale].defaultMessage || this.catalog.en.defaultMessage;
        },
        // Kind of light `sprintf()` implementation
        formatMessage: function formatMessage(string, parameters) {
            if ("object" === _typeof(parameters)) {
                for(var i in parameters)string = this.formatMessage(string, parameters[i]);
                return string;
            }
            return "string" === typeof string ? string.replace(/%s/i, parameters) : "";
        },
        // Here is the Parsley default validators list.
        // A validator is an object with the following key values:
        //  - priority: an integer
        //  - requirement: 'string' (default), 'integer', 'number', 'regexp' or an Array of these
        //  - validateString, validateMultiple, validateNumber: functions returning `true`, `false` or a promise
        // Alternatively, a validator can be a function that returns such an object
        //
        validators: {
            notblank: {
                validateString: function validateString(value) {
                    return /\S/.test(value);
                },
                priority: 2
            },
            required: {
                validateMultiple: function validateMultiple(values) {
                    return values.length > 0;
                },
                validateString: function validateString(value) {
                    return /\S/.test(value);
                },
                priority: 512
            },
            type: {
                validateString: function validateString(value, type) {
                    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}, _ref$step = _ref.step, step = _ref$step === void 0 ? "any" : _ref$step, _ref$base = _ref.base, base = _ref$base === void 0 ? 0 : _ref$base;
                    var tester = typeTesters[type];
                    if (!tester) throw new Error("validator type `" + type + "` is not supported");
                    if (!value) return true; // Builtin validators all accept empty strings, except `required` of course
                    if (!tester.test(value)) return false;
                    if ("number" === type) {
                        if (!/^any$/i.test(step || "")) {
                            var nb = Number(value);
                            var decimals = Math.max(decimalPlaces(step), decimalPlaces(base));
                            if (decimalPlaces(nb) > decimals) return false; // Be careful of rounding errors by using integers.
                            var toInt = function toInt(f) {
                                return Math.round(f * Math.pow(10, decimals));
                            };
                            if ((toInt(nb) - toInt(base)) % toInt(step) != 0) return false;
                        }
                    }
                    return true;
                },
                requirementType: {
                    "": "string",
                    step: "string",
                    base: "number"
                },
                priority: 256
            },
            pattern: {
                validateString: function validateString(value, regexp) {
                    if (!value) return true; // Builtin validators all accept empty strings, except `required` of course
                    return regexp.test(value);
                },
                requirementType: "regexp",
                priority: 64
            },
            minlength: {
                validateString: function validateString(value, requirement) {
                    if (!value) return true; // Builtin validators all accept empty strings, except `required` of course
                    return value.length >= requirement;
                },
                requirementType: "integer",
                priority: 30
            },
            maxlength: {
                validateString: function validateString(value, requirement) {
                    return value.length <= requirement;
                },
                requirementType: "integer",
                priority: 30
            },
            length: {
                validateString: function validateString(value, min, max) {
                    if (!value) return true; // Builtin validators all accept empty strings, except `required` of course
                    return value.length >= min && value.length <= max;
                },
                requirementType: [
                    "integer",
                    "integer"
                ],
                priority: 30
            },
            mincheck: {
                validateMultiple: function validateMultiple(values, requirement) {
                    return values.length >= requirement;
                },
                requirementType: "integer",
                priority: 30
            },
            maxcheck: {
                validateMultiple: function validateMultiple(values, requirement) {
                    return values.length <= requirement;
                },
                requirementType: "integer",
                priority: 30
            },
            check: {
                validateMultiple: function validateMultiple(values, min, max) {
                    return values.length >= min && values.length <= max;
                },
                requirementType: [
                    "integer",
                    "integer"
                ],
                priority: 30
            },
            min: comparisonOperator(function(value, requirement) {
                return value >= requirement;
            }),
            max: comparisonOperator(function(value, requirement) {
                return value <= requirement;
            }),
            range: comparisonOperator(function(value, min, max) {
                return value >= min && value <= max;
            }),
            equalto: {
                validateString: function validateString(value, refOrValue) {
                    if (!value) return true; // Builtin validators all accept empty strings, except `required` of course
                    var $reference = $(refOrValue);
                    if ($reference.length) return value === $reference.val();
                    else return value === refOrValue;
                },
                priority: 256
            },
            euvatin: {
                validateString: function validateString(value, refOrValue) {
                    if (!value) return true; // Builtin validators all accept empty strings, except `required` of course
                    var re = /^[A-Z][A-Z][A-Za-z0-9 -]{2,}$/;
                    return re.test(value);
                },
                priority: 30
            }
        }
    };
    var UI = {};
    var diffResults = function diffResults(newResult, oldResult, deep) {
        var added = [];
        var kept = [];
        for(var i = 0; i < newResult.length; i++){
            var found = false;
            for(var j = 0; j < oldResult.length; j++)if (newResult[i].assert.name === oldResult[j].assert.name) {
                found = true;
                break;
            }
            if (found) kept.push(newResult[i]);
            else added.push(newResult[i]);
        }
        return {
            kept: kept,
            added: added,
            removed: !deep ? diffResults(oldResult, newResult, true).added : []
        };
    };
    UI.Form = {
        _actualizeTriggers: function _actualizeTriggers() {
            var _this = this;
            this.$element.on("submit.Parsley", function(evt) {
                _this.onSubmitValidate(evt);
            });
            this.$element.on("click.Parsley", Utils._SubmitSelector, function(evt) {
                _this.onSubmitButton(evt);
            }); // UI could be disabled
            if (false === this.options.uiEnabled) return;
            this.element.setAttribute("novalidate", "");
        },
        focus: function focus() {
            this._focusedField = null;
            if (true === this.validationResult || "none" === this.options.focus) return null;
            for(var i = 0; i < this.fields.length; i++){
                var field = this.fields[i];
                if (true !== field.validationResult && field.validationResult.length > 0 && "undefined" === typeof field.options.noFocus) {
                    this._focusedField = field.$element;
                    if ("first" === this.options.focus) break;
                }
            }
            if (null === this._focusedField) return null;
            return this._focusedField.focus();
        },
        _destroyUI: function _destroyUI() {
            // Reset all event listeners
            this.$element.off(".Parsley");
        }
    };
    UI.Field = {
        _reflowUI: function _reflowUI() {
            this._buildUI(); // If this field doesn't have an active UI don't bother doing something
            if (!this._ui) return; // Diff between two validation results
            var diff = diffResults(this.validationResult, this._ui.lastValidationResult); // Then store current validation result for next reflow
            this._ui.lastValidationResult = this.validationResult; // Handle valid / invalid / none field class
            this._manageStatusClass(); // Add, remove, updated errors messages
            this._manageErrorsMessages(diff); // Triggers impl
            this._actualizeTriggers(); // If field is not valid for the first time, bind keyup trigger to ease UX and quickly inform user
            if ((diff.kept.length || diff.added.length) && !this._failedOnce) {
                this._failedOnce = true;
                this._actualizeTriggers();
            }
        },
        // Returns an array of field's error message(s)
        getErrorsMessages: function getErrorsMessages() {
            // No error message, field is valid
            if (true === this.validationResult) return [];
            var messages = [];
            for(var i = 0; i < this.validationResult.length; i++)messages.push(this.validationResult[i].errorMessage || this._getErrorMessage(this.validationResult[i].assert));
            return messages;
        },
        // It's a goal of Parsley that this method is no longer required [#1073]
        addError: function addError(name) {
            var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, message = _ref.message, assert = _ref.assert, _ref$updateClass = _ref.updateClass, updateClass = _ref$updateClass === void 0 ? true : _ref$updateClass;
            this._buildUI();
            this._addError(name, {
                message: message,
                assert: assert
            });
            if (updateClass) this._errorClass();
        },
        // It's a goal of Parsley that this method is no longer required [#1073]
        updateError: function updateError(name) {
            var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, message = _ref2.message, assert = _ref2.assert, _ref2$updateClass = _ref2.updateClass, updateClass = _ref2$updateClass === void 0 ? true : _ref2$updateClass;
            this._buildUI();
            this._updateError(name, {
                message: message,
                assert: assert
            });
            if (updateClass) this._errorClass();
        },
        // It's a goal of Parsley that this method is no longer required [#1073]
        removeError: function removeError(name) {
            var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _ref3$updateClass = _ref3.updateClass, updateClass = _ref3$updateClass === void 0 ? true : _ref3$updateClass;
            this._buildUI();
            this._removeError(name); // edge case possible here: remove a standard Parsley error that is still failing in this.validationResult
            // but highly improbable cuz' manually removing a well Parsley handled error makes no sense.
            if (updateClass) this._manageStatusClass();
        },
        _manageStatusClass: function _manageStatusClass() {
            if (this.hasConstraints() && this.needsValidation() && true === this.validationResult) this._successClass();
            else if (this.validationResult.length > 0) this._errorClass();
            else this._resetClass();
        },
        _manageErrorsMessages: function _manageErrorsMessages(diff) {
            if ("undefined" !== typeof this.options.errorsMessagesDisabled) return; // Case where we have errorMessage option that configure an unique field error message, regardless failing validators
            if ("undefined" !== typeof this.options.errorMessage) {
                if (diff.added.length || diff.kept.length) {
                    this._insertErrorWrapper();
                    if (0 === this._ui.$errorsWrapper.find(".parsley-custom-error-message").length) this._ui.$errorsWrapper.append($(this.options.errorTemplate).addClass("parsley-custom-error-message"));
                    this._ui.$errorClassHandler.attr("aria-describedby", this._ui.errorsWrapperId);
                    return this._ui.$errorsWrapper.addClass("filled").attr("aria-hidden", "false").find(".parsley-custom-error-message").html(this.options.errorMessage);
                }
                this._ui.$errorClassHandler.removeAttr("aria-describedby");
                return this._ui.$errorsWrapper.removeClass("filled").attr("aria-hidden", "true").find(".parsley-custom-error-message").remove();
            } // Show, hide, update failing constraints messages
            for(var i = 0; i < diff.removed.length; i++)this._removeError(diff.removed[i].assert.name);
            for(i = 0; i < diff.added.length; i++)this._addError(diff.added[i].assert.name, {
                message: diff.added[i].errorMessage,
                assert: diff.added[i].assert
            });
            for(i = 0; i < diff.kept.length; i++)this._updateError(diff.kept[i].assert.name, {
                message: diff.kept[i].errorMessage,
                assert: diff.kept[i].assert
            });
        },
        _addError: function _addError(name, _ref4) {
            var message = _ref4.message, assert = _ref4.assert;
            this._insertErrorWrapper();
            this._ui.$errorClassHandler.attr("aria-describedby", this._ui.errorsWrapperId);
            this._ui.$errorsWrapper.addClass("filled").attr("aria-hidden", "false").append($(this.options.errorTemplate).addClass("parsley-" + name).html(message || this._getErrorMessage(assert)));
        },
        _updateError: function _updateError(name, _ref5) {
            var message = _ref5.message, assert = _ref5.assert;
            this._ui.$errorsWrapper.addClass("filled").find(".parsley-" + name).html(message || this._getErrorMessage(assert));
        },
        _removeError: function _removeError(name) {
            this._ui.$errorClassHandler.removeAttr("aria-describedby");
            this._ui.$errorsWrapper.removeClass("filled").attr("aria-hidden", "true").find(".parsley-" + name).remove();
        },
        _getErrorMessage: function _getErrorMessage(constraint) {
            var customConstraintErrorMessage = constraint.name + "Message";
            if ("undefined" !== typeof this.options[customConstraintErrorMessage]) return window.Parsley.formatMessage(this.options[customConstraintErrorMessage], constraint.requirements);
            return window.Parsley.getErrorMessage(constraint);
        },
        _buildUI: function _buildUI() {
            // UI could be already built or disabled
            if (this._ui || false === this.options.uiEnabled) return;
            var _ui = {}; // Give field its Parsley id in DOM
            this.element.setAttribute(this.options.namespace + "id", this.__id__);
            /** Generate important UI elements and store them in this **/ // $errorClassHandler is the $element that woul have parsley-error and parsley-success classes
            _ui.$errorClassHandler = this._manageClassHandler(); // $errorsWrapper is a div that would contain the various field errors, it will be appended into $errorsContainer
            _ui.errorsWrapperId = "parsley-id-" + (this.options.multiple ? "multiple-" + this.options.multiple : this.__id__);
            _ui.$errorsWrapper = $(this.options.errorsWrapper).attr("id", _ui.errorsWrapperId); // ValidationResult UI storage to detect what have changed bwt two validations, and update DOM accordingly
            _ui.lastValidationResult = [];
            _ui.validationInformationVisible = false; // Store it in this for later
            this._ui = _ui;
        },
        // Determine which element will have `parsley-error` and `parsley-success` classes
        _manageClassHandler: function _manageClassHandler() {
            // Class handled could also be determined by function given in Parsley options
            if ("string" === typeof this.options.classHandler && $(this.options.classHandler).length) return $(this.options.classHandler); // Class handled could also be determined by function given in Parsley options
            var $handlerFunction = this.options.classHandler; // It might also be the function name of a global function
            if ("string" === typeof this.options.classHandler && "function" === typeof window[this.options.classHandler]) $handlerFunction = window[this.options.classHandler];
            if ("function" === typeof $handlerFunction) {
                var $handler = $handlerFunction.call(this, this); // If this function returned a valid existing DOM element, go for it
                if ("undefined" !== typeof $handler && $handler.length) return $handler;
            } else if ("object" === _typeof($handlerFunction) && $handlerFunction instanceof jQuery && $handlerFunction.length) return $handlerFunction;
            else if ($handlerFunction) Utils.warn("The class handler `" + $handlerFunction + "` does not exist in DOM nor as a global JS function");
            return this._inputHolder();
        },
        _inputHolder: function _inputHolder() {
            // if simple element (input, texatrea, select...) it will perfectly host the classes and precede the error container
            if (!this.options.multiple || this.element.nodeName === "SELECT") return this.$element; // But if multiple element (radio, checkbox), that would be their parent
            return this.$element.parent();
        },
        _insertErrorWrapper: function _insertErrorWrapper() {
            var $errorsContainer = this.options.errorsContainer; // Nothing to do if already inserted
            if (0 !== this._ui.$errorsWrapper.parent().length) return this._ui.$errorsWrapper.parent();
            if ("string" === typeof $errorsContainer) {
                if ($($errorsContainer).length) return $($errorsContainer).append(this._ui.$errorsWrapper);
                else if ("function" === typeof window[$errorsContainer]) $errorsContainer = window[$errorsContainer];
                else Utils.warn("The errors container `" + $errorsContainer + "` does not exist in DOM nor as a global JS function");
            }
            if ("function" === typeof $errorsContainer) $errorsContainer = $errorsContainer.call(this, this);
            if ("object" === _typeof($errorsContainer) && $errorsContainer.length) return $errorsContainer.append(this._ui.$errorsWrapper);
            return this._inputHolder().after(this._ui.$errorsWrapper);
        },
        _actualizeTriggers: function _actualizeTriggers() {
            var _this2 = this;
            var $toBind = this._findRelated();
            var trigger; // Remove Parsley events already bound on this field
            $toBind.off(".Parsley");
            if (this._failedOnce) $toBind.on(Utils.namespaceEvents(this.options.triggerAfterFailure, "Parsley"), function() {
                _this2._validateIfNeeded();
            });
            else if (trigger = Utils.namespaceEvents(this.options.trigger, "Parsley")) $toBind.on(trigger, function(event) {
                _this2._validateIfNeeded(event);
            });
        },
        _validateIfNeeded: function _validateIfNeeded(event) {
            var _this3 = this;
            // For keyup, keypress, keydown, input... events that could be a little bit obstrusive
            // do not validate if val length < min threshold on first validation. Once field have been validated once and info
            // about success or failure have been displayed, always validate with this trigger to reflect every yalidation change.
            if (event && /key|input/.test(event.type)) {
                if (!(this._ui && this._ui.validationInformationVisible) && this.getValue().length <= this.options.validationThreshold) return;
            }
            if (this.options.debounce) {
                window.clearTimeout(this._debounced);
                this._debounced = window.setTimeout(function() {
                    return _this3.validate();
                }, this.options.debounce);
            } else this.validate();
        },
        _resetUI: function _resetUI() {
            // Reset all event listeners
            this._failedOnce = false;
            this._actualizeTriggers(); // Nothing to do if UI never initialized for this field
            if ("undefined" === typeof this._ui) return; // Reset all errors' li
            this._ui.$errorsWrapper.removeClass("filled").children().remove(); // Reset validation class
            this._resetClass(); // Reset validation flags and last validation result
            this._ui.lastValidationResult = [];
            this._ui.validationInformationVisible = false;
        },
        _destroyUI: function _destroyUI() {
            this._resetUI();
            if ("undefined" !== typeof this._ui) this._ui.$errorsWrapper.remove();
            delete this._ui;
        },
        _successClass: function _successClass() {
            this._ui.validationInformationVisible = true;
            this._ui.$errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass);
        },
        _errorClass: function _errorClass() {
            this._ui.validationInformationVisible = true;
            this._ui.$errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass);
        },
        _resetClass: function _resetClass() {
            this._ui.$errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass);
        }
    };
    var Form = function Form(element, domOptions, options) {
        this.__class__ = "Form";
        this.element = element;
        this.$element = $(element);
        this.domOptions = domOptions;
        this.options = options;
        this.parent = window.Parsley;
        this.fields = [];
        this.validationResult = null;
    };
    var statusMapping = {
        pending: null,
        resolved: true,
        rejected: false
    };
    Form.prototype = {
        onSubmitValidate: function onSubmitValidate(event) {
            var _this = this;
            // This is a Parsley generated submit event, do not validate, do not prevent, simply exit and keep normal behavior
            if (true === event.parsley) return; // If we didn't come here through a submit button, use the first one in the form
            var submitSource = this._submitSource || this.$element.find(Utils._SubmitSelector)[0];
            this._submitSource = null;
            this.$element.find(".parsley-synthetic-submit-button").prop("disabled", true);
            if (submitSource && null !== submitSource.getAttribute("formnovalidate")) return;
            window.Parsley._remoteCache = {};
            var promise = this.whenValidate({
                event: event
            });
            if ("resolved" === promise.state() && false !== this._trigger("submit")) ;
            else {
                // Rejected or pending: cancel this submit
                event.stopImmediatePropagation();
                event.preventDefault();
                if ("pending" === promise.state()) promise.done(function() {
                    _this._submit(submitSource);
                });
            }
        },
        onSubmitButton: function onSubmitButton(event) {
            this._submitSource = event.currentTarget;
        },
        // internal
        // _submit submits the form, this time without going through the validations.
        // Care must be taken to "fake" the actual submit button being clicked.
        _submit: function _submit(submitSource) {
            if (false === this._trigger("submit")) return; // Add submit button's data
            if (submitSource) {
                var $synthetic = this.$element.find(".parsley-synthetic-submit-button").prop("disabled", false);
                if (0 === $synthetic.length) $synthetic = $('<input class="parsley-synthetic-submit-button" type="hidden">').appendTo(this.$element);
                $synthetic.attr({
                    name: submitSource.getAttribute("name"),
                    value: submitSource.getAttribute("value")
                });
            }
            this.$element.trigger(_extends($.Event("submit"), {
                parsley: true
            }));
        },
        // Performs validation on fields while triggering events.
        // @returns `true` if all validations succeeds, `false`
        // if a failure is immediately detected, or `null`
        // if dependant on a promise.
        // Consider using `whenValidate` instead.
        validate: function validate(options) {
            if (arguments.length >= 1 && !$.isPlainObject(options)) {
                Utils.warnOnce("Calling validate on a parsley form without passing arguments as an object is deprecated.");
                var _arguments = Array.prototype.slice.call(arguments), group = _arguments[0], force = _arguments[1], event = _arguments[2];
                options = {
                    group: group,
                    force: force,
                    event: event
                };
            }
            return statusMapping[this.whenValidate(options).state()];
        },
        whenValidate: function whenValidate() {
            var _this2 = this, _Utils$all$done$fail$;
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, group = _ref.group, force = _ref.force, event = _ref.event;
            this.submitEvent = event;
            if (event) this.submitEvent = _extends({}, event, {
                preventDefault: function preventDefault() {
                    Utils.warnOnce("Using `this.submitEvent.preventDefault()` is deprecated; instead, call `this.validationResult = false`");
                    _this2.validationResult = false;
                }
            });
            this.validationResult = true; // fire validate event to eventually modify things before every validation
            this._trigger("validate"); // Refresh form DOM options and form's fields that could have changed
            this._refreshFields();
            var promises = this._withoutReactualizingFormOptions(function() {
                return $.map(_this2.fields, function(field) {
                    return field.whenValidate({
                        force: force,
                        group: group
                    });
                });
            });
            return (_Utils$all$done$fail$ = Utils.all(promises).done(function() {
                _this2._trigger("success");
            }).fail(function() {
                _this2.validationResult = false;
                _this2.focus();
                _this2._trigger("error");
            }).always(function() {
                _this2._trigger("validated");
            })).pipe.apply(_Utils$all$done$fail$, _toConsumableArray(this._pipeAccordingToValidationResult()));
        },
        // Iterate over refreshed fields, and stop on first failure.
        // Returns `true` if all fields are valid, `false` if a failure is detected
        // or `null` if the result depends on an unresolved promise.
        // Prefer using `whenValid` instead.
        isValid: function isValid(options) {
            if (arguments.length >= 1 && !$.isPlainObject(options)) {
                Utils.warnOnce("Calling isValid on a parsley form without passing arguments as an object is deprecated.");
                var _arguments2 = Array.prototype.slice.call(arguments), group = _arguments2[0], force = _arguments2[1];
                options = {
                    group: group,
                    force: force
                };
            }
            return statusMapping[this.whenValid(options).state()];
        },
        // Iterate over refreshed fields and validate them.
        // Returns a promise.
        // A validation that immediately fails will interrupt the validations.
        whenValid: function whenValid() {
            var _this3 = this;
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, group = _ref2.group, force = _ref2.force;
            this._refreshFields();
            var promises = this._withoutReactualizingFormOptions(function() {
                return $.map(_this3.fields, function(field) {
                    return field.whenValid({
                        group: group,
                        force: force
                    });
                });
            });
            return Utils.all(promises);
        },
        refresh: function refresh() {
            this._refreshFields();
            return this;
        },
        // Reset UI
        reset: function reset() {
            // Form case: emit a reset event for each field
            for(var i = 0; i < this.fields.length; i++)this.fields[i].reset();
            this._trigger("reset");
        },
        // Destroy Parsley instance (+ UI)
        destroy: function destroy() {
            // Field case: emit destroy event to clean UI and then destroy stored instance
            this._destroyUI(); // Form case: destroy all its fields and then destroy stored instance
            for(var i = 0; i < this.fields.length; i++)this.fields[i].destroy();
            this.$element.removeData("Parsley");
            this._trigger("destroy");
        },
        _refreshFields: function _refreshFields() {
            return this.actualizeOptions()._bindFields();
        },
        _bindFields: function _bindFields() {
            var _this4 = this;
            var oldFields = this.fields;
            this.fields = [];
            this.fieldsMappedById = {};
            this._withoutReactualizingFormOptions(function() {
                _this4.$element.find(_this4.options.inputs).not(_this4.options.excluded).not("[".concat(_this4.options.namespace, "excluded=true]")).each(function(_, element) {
                    var fieldInstance = new window.Parsley.Factory(element, {}, _this4); // Only add valid and not excluded `Field` and `FieldMultiple` children
                    if ("Field" === fieldInstance.__class__ || "FieldMultiple" === fieldInstance.__class__) {
                        var uniqueId = fieldInstance.__class__ + "-" + fieldInstance.__id__;
                        if ("undefined" === typeof _this4.fieldsMappedById[uniqueId]) {
                            _this4.fieldsMappedById[uniqueId] = fieldInstance;
                            _this4.fields.push(fieldInstance);
                        }
                    }
                });
                $.each(Utils.difference(oldFields, _this4.fields), function(_, field) {
                    field.reset();
                });
            });
            return this;
        },
        // Internal only.
        // Looping on a form's fields to do validation or similar
        // will trigger reactualizing options on all of them, which
        // in turn will reactualize the form's options.
        // To avoid calling actualizeOptions so many times on the form
        // for nothing, _withoutReactualizingFormOptions temporarily disables
        // the method actualizeOptions on this form while `fn` is called.
        _withoutReactualizingFormOptions: function _withoutReactualizingFormOptions(fn) {
            var oldActualizeOptions = this.actualizeOptions;
            this.actualizeOptions = function() {
                return this;
            };
            var result = fn();
            this.actualizeOptions = oldActualizeOptions;
            return result;
        },
        // Internal only.
        // Shortcut to trigger an event
        // Returns true iff event is not interrupted and default not prevented.
        _trigger: function _trigger(eventName) {
            return this.trigger("form:" + eventName);
        }
    };
    var Constraint = function Constraint(parsleyField, name, requirements, priority, isDomConstraint) {
        var validatorSpec = window.Parsley._validatorRegistry.validators[name];
        var validator = new Validator(validatorSpec);
        priority = priority || parsleyField.options[name + "Priority"] || validator.priority;
        isDomConstraint = true === isDomConstraint;
        _extends(this, {
            validator: validator,
            name: name,
            requirements: requirements,
            priority: priority,
            isDomConstraint: isDomConstraint
        });
        this._parseRequirements(parsleyField.options);
    };
    var capitalize = function capitalize(str) {
        var cap = str[0].toUpperCase();
        return cap + str.slice(1);
    };
    Constraint.prototype = {
        validate: function validate(value, instance) {
            var _this$validator;
            return (_this$validator = this.validator).validate.apply(_this$validator, [
                value
            ].concat(_toConsumableArray(this.requirementList), [
                instance
            ]));
        },
        _parseRequirements: function _parseRequirements(options) {
            var _this = this;
            this.requirementList = this.validator.parseRequirements(this.requirements, function(key) {
                return options[_this.name + capitalize(key)];
            });
        }
    };
    var Field = function Field(field, domOptions, options, parsleyFormInstance) {
        this.__class__ = "Field";
        this.element = field;
        this.$element = $(field); // Set parent if we have one
        if ("undefined" !== typeof parsleyFormInstance) this.parent = parsleyFormInstance;
        this.options = options;
        this.domOptions = domOptions; // Initialize some properties
        this.constraints = [];
        this.constraintsByName = {};
        this.validationResult = true; // Bind constraints
        this._bindConstraints();
    };
    var statusMapping$1 = {
        pending: null,
        resolved: true,
        rejected: false
    };
    Field.prototype = {
        // # Public API
        // Validate field and trigger some events for mainly `UI`
        // @returns `true`, an array of the validators that failed, or
        // `null` if validation is not finished. Prefer using whenValidate
        validate: function validate(options) {
            if (arguments.length >= 1 && !$.isPlainObject(options)) {
                Utils.warnOnce("Calling validate on a parsley field without passing arguments as an object is deprecated.");
                options = {
                    options: options
                };
            }
            var promise = this.whenValidate(options);
            if (!promise) return true;
            switch(promise.state()){
                case "pending":
                    return null;
                case "resolved":
                    return true;
                case "rejected":
                    return this.validationResult;
            }
        },
        // Validate field and trigger some events for mainly `UI`
        // @returns a promise that succeeds only when all validations do
        // or `undefined` if field is not in the given `group`.
        whenValidate: function whenValidate() {
            var _this$whenValid$alway, _this = this;
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, force = _ref.force, group = _ref.group;
            // do not validate a field if not the same as given validation group
            this.refresh();
            if (group && !this._isInGroup(group)) return;
            this.value = this.getValue(); // Field Validate event. `this.value` could be altered for custom needs
            this._trigger("validate");
            return (_this$whenValid$alway = this.whenValid({
                force: force,
                value: this.value,
                _refreshed: true
            }).always(function() {
                _this._reflowUI();
            }).done(function() {
                _this._trigger("success");
            }).fail(function() {
                _this._trigger("error");
            }).always(function() {
                _this._trigger("validated");
            })).pipe.apply(_this$whenValid$alway, _toConsumableArray(this._pipeAccordingToValidationResult()));
        },
        hasConstraints: function hasConstraints() {
            return 0 !== this.constraints.length;
        },
        // An empty optional field does not need validation
        needsValidation: function needsValidation(value) {
            if ("undefined" === typeof value) value = this.getValue(); // If a field is empty and not required, it is valid
            // Except if `data-parsley-validate-if-empty` explicitely added, useful for some custom validators
            if (!value.length && !this._isRequired() && "undefined" === typeof this.options.validateIfEmpty) return false;
            return true;
        },
        _isInGroup: function _isInGroup(group) {
            if (Array.isArray(this.options.group)) return -1 !== $.inArray(group, this.options.group);
            return this.options.group === group;
        },
        // Just validate field. Do not trigger any event.
        // Returns `true` iff all constraints pass, `false` if there are failures,
        // or `null` if the result can not be determined yet (depends on a promise)
        // See also `whenValid`.
        isValid: function isValid(options) {
            if (arguments.length >= 1 && !$.isPlainObject(options)) {
                Utils.warnOnce("Calling isValid on a parsley field without passing arguments as an object is deprecated.");
                var _arguments = Array.prototype.slice.call(arguments), force = _arguments[0], value = _arguments[1];
                options = {
                    force: force,
                    value: value
                };
            }
            var promise = this.whenValid(options);
            if (!promise) return true;
            return statusMapping$1[promise.state()];
        },
        // Just validate field. Do not trigger any event.
        // @returns a promise that succeeds only when all validations do
        // or `undefined` if the field is not in the given `group`.
        // The argument `force` will force validation of empty fields.
        // If a `value` is given, it will be validated instead of the value of the input.
        whenValid: function whenValid() {
            var _this2 = this;
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref2$force = _ref2.force, force = _ref2$force === void 0 ? false : _ref2$force, value = _ref2.value, group = _ref2.group, _refreshed = _ref2._refreshed;
            // Recompute options and rebind constraints to have latest changes
            if (!_refreshed) this.refresh(); // do not validate a field if not the same as given validation group
            if (group && !this._isInGroup(group)) return;
            this.validationResult = true; // A field without constraint is valid
            if (!this.hasConstraints()) return $.when(); // Value could be passed as argument, needed to add more power to 'field:validate'
            if ("undefined" === typeof value || null === value) value = this.getValue();
            if (!this.needsValidation(value) && true !== force) return $.when();
            var groupedConstraints = this._getGroupedConstraints();
            var promises = [];
            $.each(groupedConstraints, function(_, constraints) {
                // Process one group of constraints at a time, we validate the constraints
                // and combine the promises together.
                var promise = Utils.all($.map(constraints, function(constraint) {
                    return _this2._validateConstraint(value, constraint);
                }));
                promises.push(promise);
                if (promise.state() === "rejected") return false; // Interrupt processing if a group has already failed
            });
            return Utils.all(promises);
        },
        // @returns a promise
        _validateConstraint: function _validateConstraint(value, constraint) {
            var _this3 = this;
            var result = constraint.validate(value, this); // Map false to a failed promise
            if (false === result) result = $.Deferred().reject(); // Make sure we return a promise and that we record failures
            return Utils.all([
                result
            ]).fail(function(errorMessage) {
                if (!(_this3.validationResult instanceof Array)) _this3.validationResult = [];
                _this3.validationResult.push({
                    assert: constraint,
                    errorMessage: "string" === typeof errorMessage && errorMessage
                });
            });
        },
        // @returns Parsley field computed value that could be overrided or configured in DOM
        getValue: function getValue() {
            var value; // Value could be overriden in DOM or with explicit options
            if ("function" === typeof this.options.value) value = this.options.value(this);
            else if ("undefined" !== typeof this.options.value) value = this.options.value;
            else value = this.$element.val(); // Handle wrong DOM or configurations
            if ("undefined" === typeof value || null === value) return "";
            return this._handleWhitespace(value);
        },
        // Reset UI
        reset: function reset() {
            this._resetUI();
            return this._trigger("reset");
        },
        // Destroy Parsley instance (+ UI)
        destroy: function destroy() {
            // Field case: emit destroy event to clean UI and then destroy stored instance
            this._destroyUI();
            this.$element.removeData("Parsley");
            this.$element.removeData("FieldMultiple");
            this._trigger("destroy");
        },
        // Actualize options and rebind constraints
        refresh: function refresh() {
            this._refreshConstraints();
            return this;
        },
        _refreshConstraints: function _refreshConstraints() {
            return this.actualizeOptions()._bindConstraints();
        },
        refreshConstraints: function refreshConstraints() {
            Utils.warnOnce("Parsley's refreshConstraints is deprecated. Please use refresh");
            return this.refresh();
        },
        /**
    * Add a new constraint to a field
    *
    * @param {String}   name
    * @param {Mixed}    requirements      optional
    * @param {Number}   priority          optional
    * @param {Boolean}  isDomConstraint   optional
    */ addConstraint: function addConstraint(name, requirements, priority, isDomConstraint) {
            if (window.Parsley._validatorRegistry.validators[name]) {
                var constraint = new Constraint(this, name, requirements, priority, isDomConstraint); // if constraint already exist, delete it and push new version
                if ("undefined" !== this.constraintsByName[constraint.name]) this.removeConstraint(constraint.name);
                this.constraints.push(constraint);
                this.constraintsByName[constraint.name] = constraint;
            }
            return this;
        },
        // Remove a constraint
        removeConstraint: function removeConstraint(name) {
            for(var i = 0; i < this.constraints.length; i++)if (name === this.constraints[i].name) {
                this.constraints.splice(i, 1);
                break;
            }
            delete this.constraintsByName[name];
            return this;
        },
        // Update a constraint (Remove + re-add)
        updateConstraint: function updateConstraint(name, parameters, priority) {
            return this.removeConstraint(name).addConstraint(name, parameters, priority);
        },
        // # Internals
        // Internal only.
        // Bind constraints from config + options + DOM
        _bindConstraints: function _bindConstraints() {
            var constraints = [];
            var constraintsByName = {}; // clean all existing DOM constraints to only keep javascript user constraints
            for(var i = 0; i < this.constraints.length; i++)if (false === this.constraints[i].isDomConstraint) {
                constraints.push(this.constraints[i]);
                constraintsByName[this.constraints[i].name] = this.constraints[i];
            }
            this.constraints = constraints;
            this.constraintsByName = constraintsByName; // then re-add Parsley DOM-API constraints
            for(var name in this.options)this.addConstraint(name, this.options[name], undefined, true);
             // finally, bind special HTML5 constraints
            return this._bindHtml5Constraints();
        },
        // Internal only.
        // Bind specific HTML5 constraints to be HTML5 compliant
        _bindHtml5Constraints: function _bindHtml5Constraints() {
            // html5 required
            if (null !== this.element.getAttribute("required")) this.addConstraint("required", true, undefined, true); // html5 pattern
            if (null !== this.element.getAttribute("pattern")) this.addConstraint("pattern", this.element.getAttribute("pattern"), undefined, true); // range
            var min = this.element.getAttribute("min");
            var max = this.element.getAttribute("max");
            if (null !== min && null !== max) this.addConstraint("range", [
                min,
                max
            ], undefined, true); // HTML5 min
            else if (null !== min) this.addConstraint("min", min, undefined, true); // HTML5 max
            else if (null !== max) this.addConstraint("max", max, undefined, true); // length
            if (null !== this.element.getAttribute("minlength") && null !== this.element.getAttribute("maxlength")) this.addConstraint("length", [
                this.element.getAttribute("minlength"),
                this.element.getAttribute("maxlength")
            ], undefined, true); // HTML5 minlength
            else if (null !== this.element.getAttribute("minlength")) this.addConstraint("minlength", this.element.getAttribute("minlength"), undefined, true); // HTML5 maxlength
            else if (null !== this.element.getAttribute("maxlength")) this.addConstraint("maxlength", this.element.getAttribute("maxlength"), undefined, true); // html5 types
            var type = Utils.getType(this.element); // Small special case here for HTML5 number: integer validator if step attribute is undefined or an integer value, number otherwise
            if ("number" === type) return this.addConstraint("type", [
                "number",
                {
                    step: this.element.getAttribute("step") || "1",
                    base: min || this.element.getAttribute("value")
                }
            ], undefined, true); // Regular other HTML5 supported types
            else if (/^(email|url|range|date)$/i.test(type)) return this.addConstraint("type", type, undefined, true);
            return this;
        },
        // Internal only.
        // Field is required if have required constraint without `false` value
        _isRequired: function _isRequired() {
            if ("undefined" === typeof this.constraintsByName.required) return false;
            return false !== this.constraintsByName.required.requirements;
        },
        // Internal only.
        // Shortcut to trigger an event
        _trigger: function _trigger(eventName) {
            return this.trigger("field:" + eventName);
        },
        // Internal only
        // Handles whitespace in a value
        // Use `data-parsley-whitespace="squish"` to auto squish input value
        // Use `data-parsley-whitespace="trim"` to auto trim input value
        _handleWhitespace: function _handleWhitespace(value) {
            if (true === this.options.trimValue) Utils.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"');
            if ("squish" === this.options.whitespace) value = value.replace(/\s{2,}/g, " ");
            if ("trim" === this.options.whitespace || "squish" === this.options.whitespace || true === this.options.trimValue) value = Utils.trimString(value);
            return value;
        },
        _isDateInput: function _isDateInput() {
            var c = this.constraintsByName.type;
            return c && c.requirements === "date";
        },
        // Internal only.
        // Returns the constraints, grouped by descending priority.
        // The result is thus an array of arrays of constraints.
        _getGroupedConstraints: function _getGroupedConstraints() {
            if (false === this.options.priorityEnabled) return [
                this.constraints
            ];
            var groupedConstraints = [];
            var index = {}; // Create array unique of priorities
            for(var i = 0; i < this.constraints.length; i++){
                var p = this.constraints[i].priority;
                if (!index[p]) groupedConstraints.push(index[p] = []);
                index[p].push(this.constraints[i]);
            } // Sort them by priority DESC
            groupedConstraints.sort(function(a, b) {
                return b[0].priority - a[0].priority;
            });
            return groupedConstraints;
        }
    };
    var Multiple = function Multiple() {
        this.__class__ = "FieldMultiple";
    };
    Multiple.prototype = {
        // Add new `$element` sibling for multiple field
        addElement: function addElement($element) {
            this.$elements.push($element);
            return this;
        },
        // See `Field._refreshConstraints()`
        _refreshConstraints: function _refreshConstraints() {
            var fieldConstraints;
            this.constraints = []; // Select multiple special treatment
            if (this.element.nodeName === "SELECT") {
                this.actualizeOptions()._bindConstraints();
                return this;
            } // Gather all constraints for each input in the multiple group
            for(var i = 0; i < this.$elements.length; i++){
                // Check if element have not been dynamically removed since last binding
                if (!$("html").has(this.$elements[i]).length) {
                    this.$elements.splice(i, 1);
                    continue;
                }
                fieldConstraints = this.$elements[i].data("FieldMultiple")._refreshConstraints().constraints;
                for(var j = 0; j < fieldConstraints.length; j++)this.addConstraint(fieldConstraints[j].name, fieldConstraints[j].requirements, fieldConstraints[j].priority, fieldConstraints[j].isDomConstraint);
            }
            return this;
        },
        // See `Field.getValue()`
        getValue: function getValue() {
            // Value could be overriden in DOM
            if ("function" === typeof this.options.value) return this.options.value(this);
            else if ("undefined" !== typeof this.options.value) return this.options.value; // Radio input case
            if (this.element.nodeName === "INPUT") {
                var type = Utils.getType(this.element);
                if (type === "radio") return this._findRelated().filter(":checked").val() || ""; // checkbox input case
                if (type === "checkbox") {
                    var values = [];
                    this._findRelated().filter(":checked").each(function() {
                        values.push($(this).val());
                    });
                    return values;
                }
            } // Select multiple case
            if (this.element.nodeName === "SELECT" && null === this.$element.val()) return []; // Default case that should never happen
            return this.$element.val();
        },
        _init: function _init() {
            this.$elements = [
                this.$element
            ];
            return this;
        }
    };
    var Factory = function Factory(element, options, parsleyFormInstance) {
        this.element = element;
        this.$element = $(element); // If the element has already been bound, returns its saved Parsley instance
        var savedparsleyFormInstance = this.$element.data("Parsley");
        if (savedparsleyFormInstance) {
            // If the saved instance has been bound without a Form parent and there is one given in this call, add it
            if ("undefined" !== typeof parsleyFormInstance && savedparsleyFormInstance.parent === window.Parsley) {
                savedparsleyFormInstance.parent = parsleyFormInstance;
                savedparsleyFormInstance._resetOptions(savedparsleyFormInstance.options);
            }
            if ("object" === _typeof(options)) _extends(savedparsleyFormInstance.options, options);
            return savedparsleyFormInstance;
        } // Parsley must be instantiated with a DOM element or jQuery $element
        if (!this.$element.length) throw new Error("You must bind Parsley on an existing element.");
        if ("undefined" !== typeof parsleyFormInstance && "Form" !== parsleyFormInstance.__class__) throw new Error("Parent instance must be a Form instance");
        this.parent = parsleyFormInstance || window.Parsley;
        return this.init(options);
    };
    Factory.prototype = {
        init: function init(options) {
            this.__class__ = "Parsley";
            this.__version__ = "2.9.2";
            this.__id__ = Utils.generateID(); // Pre-compute options
            this._resetOptions(options); // A Form instance is obviously a `<form>` element but also every node that is not an input and has the `data-parsley-validate` attribute
            if (this.element.nodeName === "FORM" || Utils.checkAttr(this.element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs)) return this.bind("parsleyForm"); // Every other element is bound as a `Field` or `FieldMultiple`
            return this.isMultiple() ? this.handleMultiple() : this.bind("parsleyField");
        },
        isMultiple: function isMultiple() {
            var type = Utils.getType(this.element);
            return type === "radio" || type === "checkbox" || this.element.nodeName === "SELECT" && null !== this.element.getAttribute("multiple");
        },
        // Multiples fields are a real nightmare :(
        // Maybe some refactoring would be appreciated here...
        handleMultiple: function handleMultiple() {
            var _this = this;
            var name;
            var parsleyMultipleInstance; // Handle multiple name
            this.options.multiple = this.options.multiple || (name = this.element.getAttribute("name")) || this.element.getAttribute("id"); // Special select multiple input
            if (this.element.nodeName === "SELECT" && null !== this.element.getAttribute("multiple")) {
                this.options.multiple = this.options.multiple || this.__id__;
                return this.bind("parsleyFieldMultiple"); // Else for radio / checkboxes, we need a `name` or `data-parsley-multiple` to properly bind it
            } else if (!this.options.multiple) {
                Utils.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.", this.$element);
                return this;
            } // Remove special chars
            this.options.multiple = this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g, ""); // Add proper `data-parsley-multiple` to siblings if we have a valid multiple name
            if (name) $('input[name="' + name + '"]').each(function(i, input) {
                var type = Utils.getType(input);
                if (type === "radio" || type === "checkbox") input.setAttribute(_this.options.namespace + "multiple", _this.options.multiple);
            });
             // Check here if we don't already have a related multiple instance saved
            var $previouslyRelated = this._findRelated();
            for(var i = 0; i < $previouslyRelated.length; i++){
                parsleyMultipleInstance = $($previouslyRelated.get(i)).data("Parsley");
                if ("undefined" !== typeof parsleyMultipleInstance) {
                    if (!this.$element.data("FieldMultiple")) parsleyMultipleInstance.addElement(this.$element);
                    break;
                }
            } // Create a secret Field instance for every multiple field. It will be stored in `data('FieldMultiple')`
            // And will be useful later to access classic `Field` stuff while being in a `FieldMultiple` instance
            this.bind("parsleyField", true);
            return parsleyMultipleInstance || this.bind("parsleyFieldMultiple");
        },
        // Return proper `Form`, `Field` or `FieldMultiple`
        bind: function bind(type, doNotStore) {
            var parsleyInstance;
            switch(type){
                case "parsleyForm":
                    parsleyInstance = $.extend(new Form(this.element, this.domOptions, this.options), new Base(), window.ParsleyExtend)._bindFields();
                    break;
                case "parsleyField":
                    parsleyInstance = $.extend(new Field(this.element, this.domOptions, this.options, this.parent), new Base(), window.ParsleyExtend);
                    break;
                case "parsleyFieldMultiple":
                    parsleyInstance = $.extend(new Field(this.element, this.domOptions, this.options, this.parent), new Multiple(), new Base(), window.ParsleyExtend)._init();
                    break;
                default:
                    throw new Error(type + "is not a supported Parsley type");
            }
            if (this.options.multiple) Utils.setAttr(this.element, this.options.namespace, "multiple", this.options.multiple);
            if ("undefined" !== typeof doNotStore) {
                this.$element.data("FieldMultiple", parsleyInstance);
                return parsleyInstance;
            } // Store the freshly bound instance in a DOM element for later access using jQuery `data()`
            this.$element.data("Parsley", parsleyInstance); // Tell the world we have a new Form or Field instance!
            parsleyInstance._actualizeTriggers();
            parsleyInstance._trigger("init");
            return parsleyInstance;
        }
    };
    var vernums = $.fn.jquery.split(".");
    if (parseInt(vernums[0]) <= 1 && parseInt(vernums[1]) < 8) throw "The loaded version of jQuery is too old. Please upgrade to 1.8.x or better.";
    if (!vernums.forEach) Utils.warn("Parsley requires ES5 to run properly. Please include https://github.com/es-shims/es5-shim");
     // Inherit `on`, `off` & `trigger` to Parsley:
    var Parsley = _extends(new Base(), {
        element: document,
        $element: $(document),
        actualizeOptions: null,
        _resetOptions: null,
        Factory: Factory,
        version: "2.9.2"
    }); // Supplement Field and Form with Base
    // This way, the constructors will have access to those methods
    _extends(Field.prototype, UI.Field, Base.prototype);
    _extends(Form.prototype, UI.Form, Base.prototype); // Inherit actualizeOptions and _resetOptions:
    _extends(Factory.prototype, Base.prototype); // ### jQuery API
    // `$('.elem').parsley(options)` or `$('.elem').psly(options)`
    $.fn.parsley = $.fn.psly = function(options) {
        if (this.length > 1) {
            var instances = [];
            this.each(function() {
                instances.push($(this).parsley(options));
            });
            return instances;
        } // Return undefined if applied to non existing DOM element
        if (this.length == 0) return;
        return new Factory(this[0], options);
    }; // ### Field and Form extension
    // Ensure the extension is now defined if it wasn't previously
    if ("undefined" === typeof window.ParsleyExtend) window.ParsleyExtend = {}; // ### Parsley config
    // Inherit from ParsleyDefault, and copy over any existing values
    Parsley.options = _extends(Utils.objectCreate(Defaults), window.ParsleyConfig);
    window.ParsleyConfig = Parsley.options; // Old way of accessing global options
    // ### Globals
    window.Parsley = window.psly = Parsley;
    Parsley.Utils = Utils;
    window.ParsleyUtils = {};
    $.each(Utils, function(key, value) {
        if ("function" === typeof value) window.ParsleyUtils[key] = function() {
            Utils.warnOnce("Accessing `window.ParsleyUtils` is deprecated. Use `window.Parsley.Utils` instead.");
            return Utils[key].apply(Utils, arguments);
        };
    }); // ### Define methods that forward to the registry, and deprecate all access except through window.Parsley
    var registry = window.Parsley._validatorRegistry = new ValidatorRegistry(window.ParsleyConfig.validators, window.ParsleyConfig.i18n);
    window.ParsleyValidator = {};
    $.each("setLocale addCatalog addMessage addMessages getErrorMessage formatMessage addValidator updateValidator removeValidator hasValidator".split(" "), function(i, method) {
        window.Parsley[method] = function() {
            return registry[method].apply(registry, arguments);
        };
        window.ParsleyValidator[method] = function() {
            var _window$Parsley;
            Utils.warnOnce("Accessing the method '".concat(method, "' through Validator is deprecated. Simply call 'window.Parsley.").concat(method, "(...)'"));
            return (_window$Parsley = window.Parsley)[method].apply(_window$Parsley, arguments);
        };
    }); // ### UI
    // Deprecated global object
    window.Parsley.UI = UI;
    window.ParsleyUI = {
        removeError: function removeError(instance, name, doNotUpdateClass) {
            var updateClass = true !== doNotUpdateClass;
            Utils.warnOnce("Accessing UI is deprecated. Call 'removeError' on the instance directly. Please comment in issue 1073 as to your need to call this method.");
            return instance.removeError(name, {
                updateClass: updateClass
            });
        },
        getErrorsMessages: function getErrorsMessages(instance) {
            Utils.warnOnce("Accessing UI is deprecated. Call 'getErrorsMessages' on the instance directly.");
            return instance.getErrorsMessages();
        }
    };
    $.each("addError updateError".split(" "), function(i, method) {
        window.ParsleyUI[method] = function(instance, name, message, assert, doNotUpdateClass) {
            var updateClass = true !== doNotUpdateClass;
            Utils.warnOnce("Accessing UI is deprecated. Call '".concat(method, "' on the instance directly. Please comment in issue 1073 as to your need to call this method."));
            return instance[method](name, {
                message: message,
                assert: assert,
                updateClass: updateClass
            });
        };
    }); // ### PARSLEY auto-binding
    // Prevent it by setting `ParsleyConfig.autoBind` to `false`
    if (false !== window.ParsleyConfig.autoBind) $(function() {
        // Works only on `data-parsley-validate`.
        if ($("[data-parsley-validate]").length) $("[data-parsley-validate]").parsley();
    });
    var o = $({});
    var deprecated = function deprecated() {
        Utils.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley");
    }; // Returns an event handler that calls `fn` with the arguments it expects
    function adapt(fn, context) {
        // Store to allow unbinding
        if (!fn.parsleyAdaptedCallback) fn.parsleyAdaptedCallback = function() {
            var args = Array.prototype.slice.call(arguments, 0);
            args.unshift(this);
            fn.apply(context || o, args);
        };
        return fn.parsleyAdaptedCallback;
    }
    var eventPrefix = "parsley:"; // Converts 'parsley:form:validate' into 'form:validate'
    function eventName(name) {
        if (name.lastIndexOf(eventPrefix, 0) === 0) return name.substr(eventPrefix.length);
        return name;
    } // $.listen is deprecated. Use Parsley.on instead.
    $.listen = function(name, callback) {
        var context;
        deprecated();
        if ("object" === _typeof(arguments[1]) && "function" === typeof arguments[2]) {
            context = arguments[1];
            callback = arguments[2];
        }
        if ("function" !== typeof callback) throw new Error("Wrong parameters");
        window.Parsley.on(eventName(name), adapt(callback, context));
    };
    $.listenTo = function(instance, name, fn) {
        deprecated();
        if (!(instance instanceof Field) && !(instance instanceof Form)) throw new Error("Must give Parsley instance");
        if ("string" !== typeof name || "function" !== typeof fn) throw new Error("Wrong parameters");
        instance.on(eventName(name), adapt(fn));
    };
    $.unsubscribe = function(name, fn) {
        deprecated();
        if ("string" !== typeof name || "function" !== typeof fn) throw new Error("Wrong arguments");
        window.Parsley.off(eventName(name), fn.parsleyAdaptedCallback);
    };
    $.unsubscribeTo = function(instance, name) {
        deprecated();
        if (!(instance instanceof Field) && !(instance instanceof Form)) throw new Error("Must give Parsley instance");
        instance.off(eventName(name));
    };
    $.unsubscribeAll = function(name) {
        deprecated();
        window.Parsley.off(eventName(name));
        $("form,input,textarea,select").each(function() {
            var instance = $(this).data("Parsley");
            if (instance) instance.off(eventName(name));
        });
    }; // $.emit is deprecated. Use jQuery events instead.
    $.emit = function(name, instance) {
        var _instance;
        deprecated();
        var instanceGiven = instance instanceof Field || instance instanceof Form;
        var args = Array.prototype.slice.call(arguments, instanceGiven ? 2 : 1);
        args.unshift(eventName(name));
        if (!instanceGiven) instance = window.Parsley;
        (_instance = instance).trigger.apply(_instance, _toConsumableArray(args));
    };
    $.extend(true, Parsley, {
        asyncValidators: {
            "default": {
                fn: function fn(xhr) {
                    // By default, only status 2xx are deemed successful.
                    // Note: we use status instead of state() because responses with status 200
                    // but invalid messages (e.g. an empty body for content type set to JSON) will
                    // result in state() === 'rejected'.
                    return xhr.status >= 200 && xhr.status < 300;
                },
                url: false
            },
            reverse: {
                fn: function fn(xhr) {
                    // If reverse option is set, a failing ajax request is considered successful
                    return xhr.status < 200 || xhr.status >= 300;
                },
                url: false
            }
        },
        addAsyncValidator: function addAsyncValidator(name, fn, url, options) {
            Parsley.asyncValidators[name] = {
                fn: fn,
                url: url || false,
                options: options || {}
            };
            return this;
        }
    });
    Parsley.addValidator("remote", {
        requirementType: {
            "": "string",
            "validator": "string",
            "reverse": "boolean",
            "options": "object"
        },
        validateString: function validateString(value, url, options, instance) {
            var data = {};
            var ajaxOptions;
            var csr;
            var validator = options.validator || (true === options.reverse ? "reverse" : "default");
            if ("undefined" === typeof Parsley.asyncValidators[validator]) throw new Error("Calling an undefined async validator: `" + validator + "`");
            url = Parsley.asyncValidators[validator].url || url; // Fill current value
            if (url.indexOf("{value}") > -1) url = url.replace("{value}", encodeURIComponent(value));
            else data[instance.element.getAttribute("name") || instance.element.getAttribute("id")] = value;
             // Merge options passed in from the function with the ones in the attribute
            var remoteOptions = $.extend(true, options.options || {}, Parsley.asyncValidators[validator].options); // All `$.ajax(options)` could be overridden or extended directly from DOM in `data-parsley-remote-options`
            ajaxOptions = $.extend(true, {}, {
                url: url,
                data: data,
                type: "GET"
            }, remoteOptions); // Generate store key based on ajax options
            instance.trigger("field:ajaxoptions", instance, ajaxOptions);
            csr = $.param(ajaxOptions); // Initialise querry cache
            if ("undefined" === typeof Parsley._remoteCache) Parsley._remoteCache = {}; // Try to retrieve stored xhr
            var xhr = Parsley._remoteCache[csr] = Parsley._remoteCache[csr] || $.ajax(ajaxOptions);
            var handleXhr = function handleXhr() {
                var result = Parsley.asyncValidators[validator].fn.call(instance, xhr, url, options);
                if (!result) result = $.Deferred().reject();
                return $.when(result);
            };
            return xhr.then(handleXhr, handleXhr);
        },
        priority: -1
    });
    Parsley.on("form:submit", function() {
        Parsley._remoteCache = {};
    });
    Base.prototype.addAsyncValidator = function() {
        Utils.warnOnce("Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`");
        return Parsley.addAsyncValidator.apply(Parsley, arguments);
    };
    // This is included with the Parsley library itself,
    Parsley.addMessages("en", {
        defaultMessage: "This value seems to be invalid.",
        type: {
            email: "This value should be a valid email.",
            url: "This value should be a valid url.",
            number: "This value should be a valid number.",
            integer: "This value should be a valid integer.",
            digits: "This value should be digits.",
            alphanum: "This value should be alphanumeric."
        },
        notblank: "This value should not be blank.",
        required: "This value is required.",
        pattern: "This value seems to be invalid.",
        min: "This value should be greater than or equal to %s.",
        max: "This value should be lower than or equal to %s.",
        range: "This value should be between %s and %s.",
        minlength: "This value is too short. It should have %s characters or more.",
        maxlength: "This value is too long. It should have %s characters or fewer.",
        length: "This value length is invalid. It should be between %s and %s characters long.",
        mincheck: "You must select at least %s choices.",
        maxcheck: "You must select %s choices or fewer.",
        check: "You must select between %s and %s choices.",
        equalto: "This value should be the same.",
        euvatin: "It's not a valid VAT Identification Number."
    });
    Parsley.setLocale("en");
    function InputEvent() {
        var _this = this;
        var globals = window || global; // Slightly odd way construct our object. This way methods are force bound.
        // Used to test for duplicate library.
        _extends(this, {
            // For browsers that do not support isTrusted, assumes event is native.
            isNativeEvent: function isNativeEvent(evt) {
                return evt.originalEvent && evt.originalEvent.isTrusted !== false;
            },
            fakeInputEvent: function fakeInputEvent(evt) {
                if (_this.isNativeEvent(evt)) $(evt.target).trigger("input");
            },
            misbehaves: function misbehaves(evt) {
                if (_this.isNativeEvent(evt)) {
                    _this.behavesOk(evt);
                    $(document).on("change.inputevent", evt.data.selector, _this.fakeInputEvent);
                    _this.fakeInputEvent(evt);
                }
            },
            behavesOk: function behavesOk(evt) {
                if (_this.isNativeEvent(evt)) $(document) // Simply unbinds the testing handler
                .off("input.inputevent", evt.data.selector, _this.behavesOk).off("change.inputevent", evt.data.selector, _this.misbehaves);
            },
            // Bind the testing handlers
            install: function install() {
                if (globals.inputEventPatched) return;
                globals.inputEventPatched = "0.0.3";
                for(var _i = 0, _arr = [
                    "select",
                    'input[type="checkbox"]',
                    'input[type="radio"]',
                    'input[type="file"]'
                ]; _i < _arr.length; _i++){
                    var selector = _arr[_i];
                    $(document).on("input.inputevent", selector, {
                        selector: selector
                    }, _this.behavesOk).on("change.inputevent", selector, {
                        selector: selector
                    }, _this.misbehaves);
                }
            },
            uninstall: function uninstall() {
                delete globals.inputEventPatched;
                $(document).off(".inputevent");
            }
        });
    }
    var inputevent = new InputEvent();
    inputevent.install();
    return Parsley;
});

},{"8078549732c5647f":"hgMhh"}],"bu8sX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _gsap = require("gsap");
var _imageReplaceJs = require("../views/imageReplace.js");
var _imageReplaceJsDefault = parcelHelpers.interopDefault(_imageReplaceJs);
class ImageLoader {
    constructor(){}
    load(html, callback) {
        let $images = $(html).find("img:not([data-lazy])");
        let counter = $images.length;
        if (counter == 0) callback();
        else {
            let loaded = 0;
            $images.each(function(index) {
                let src = "currentSrc" in this ? this.currentSrc : this.src;
                let $img = $("<img />");
                let onComplete = function() {
                    loaded++;
                    if (loaded >= counter) callback();
                };
                $img.attr("src", src).on("load", onComplete).on("error", onComplete);
            });
        }
    }
    lazy(el) {
        return new Promise(function(resolve) {
            $(el).find("[data-lazy-src]:not(.loaded)").each(function() {
                let $this = $(this);
                if ($this.parent("video").length > 0) {
                    $this.attr("src", $this.data("lazy-src")).addClass("loaded");
                    $this.parent("video")[0].load();
                    $this.parent("video")[0].addEventListener("canplay", ()=>{
                        $this.parents().find("[data-lazy-placeholder]").addClass("loaded");
                        $this.parent("video").addClass("loaded");
                        window.appEvent.trigger("resize");
                    }, false);
                } else {
                    (0, _gsap.gsap).set($this, {
                        opacity: 0
                    });
                    if ($this.parent(".js-replace-image").length) (0, _gsap.gsap).set($this.parent(".js-replace-image"), {
                        opacity: 0
                    });
                    if ($this.attr("loading") == "lazy") $this.attr("loading", "eager");
                    $this.attr("src", $this.data("lazy-src")).addClass("loaded");
                    $this[0].onload = function() {
                        console.log($(this).attr("src") + " loaded");
                        (0, _gsap.gsap).to($this, .3, {
                            opacity: 1,
                            onComplete: function() {}
                        });
                        if ($this.parent(".js-replace-image").length) {
                            (0, _imageReplaceJsDefault.default)($this.parent(".js-replace-image").parent());
                            (0, _gsap.gsap).to($this.parent(".js-replace-image"), .3, {
                                opacity: 1,
                                onComplete: function() {}
                            });
                        }
                        resolve(true);
                    };
                }
            });
        });
    }
}
exports.default = ImageLoader;

},{"gsap":"fPSuC","../views/imageReplace.js":"19Rfv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"19Rfv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>imageReplace);
function imageReplace($container) {
    let timeout = false;
    $container = $container || $("body");
    $container.find(".js-replace-image:not(.jsImageReplaced)").each(function(index) {
        let image = $(this).find("img")[0];
        if (image != undefined) {
            let $this = $(this);
            let src = "currentSrc" in image ? image.currentSrc : image.src;
            if (src == undefined || src == "" || src == null) {
                if (timeout) window.clearTimeout(timeout);
                timeout = window.setTimeout(function() {
                    imageReplace($('[data-barba="container"]:last-of-type'));
                }, 100);
            } else {
                $this.css("background-image", "url(" + src + ")");
                $this.addClass("jsImageReplaced");
            }
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hHQDV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>LandingLoader);
var _gsap = require("gsap");
function LandingLoader(timing) {
    let target = $("*[data-barba-introductionscreen]");
    target;
    this.init = function() {
        if (window.dev) {
            $(target).remove();
            return;
        }
        if (target) {
            let fade = (0, _gsap.gsap).timeline({
                onStart: ()=>{
                    window.scrollAnimation.update();
                },
                onComplete: ()=>{
                    $(target).remove();
                    $("body").addClass("loaded");
                },
                onUpdate: function() {
                //borderTimeline.progress(this.progress())
                }
            });
            fade.to("#circle-background", {
                duration: 1.4,
                strokeDashoffset: 0,
                ease: "none"
            }, "drawing");
            fade.to("#logo-baseline *", {
                duration: .25,
                filter: "blur(0)",
                autoAlpha: 1,
                ease: "power2.inOut",
                stagger: .1
            }, "drawing");
            fade.to("#logo-letter-a,#logo-letter-n", {
                duration: 1,
                strokeDashoffset: 0,
                stagger: .4,
                ease: "power1.inOut"
            }, "drawing");
            /*fade.to('#circle-background', {
        fill: '#ffffff',
        ease: 'power1.inOut',
        duration: .45
      }, 'showColor')*/ fade.to("#introduction-screen", {
                backgroundColor: "#FFFFFF",
                ease: "power1.inOut",
                duration: .45,
                delay: .2
            }, "invert");
            fade.to("#circle-background", {
                fill: "#000000",
                ease: " power1.inOut",
                duration: .45,
                delay: .2
            }, "invert");
            fade.to("#logo-baseline *", {
                fill: "#000000",
                ease: "power1.inOut",
                duration: .45,
                delay: .2
            }, "invert");
            fade.to("#logo-letter-a,#logo-letter-n", {
                stroke: "#FFFFFF",
                ease: "power1.inOut",
                duration: .6,
                delay: .2
            }, "invert");
            fade.to("#introduction-screen", {
                autoAlpha: 0,
                duration: .8,
                ease: "power2.inOut",
                onStart: ()=>{
                    appEvent.trigger("app:threejsAnimation:start");
                }
            }, "hideLoader");
        } else return false;
    };
    this.simpleInit = function() {
        (0, _gsap.gsap).to("#introduction-screen", {
            autoAlpha: 0,
            duration: .6,
            ease: "power2.out",
            onStart: ()=>{
                appEvent.trigger("app:threejsAnimation:start");
                $("#scene").css("z-index", 2);
            },
            onComplete: ()=>{
                $("#introduction-screen").remove();
            }
        }, "hideLoader");
    };
}

},{"gsap":"fPSuC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["eer9P"], null, "parcelRequiree21d")

//# sourceMappingURL=barba.6dbed327.js.map
