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
})({"lwRXP":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "4fd5d99e93244685";
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

},{}],"fpQr3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _gsap = require("gsap");
var _scrollToPlugin = require("gsap/ScrollToPlugin");
var _lenis = require("lenis");
var _lenisDefault = parcelHelpers.interopDefault(_lenis);
(0, _gsap.gsap).registerPlugin((0, _scrollToPlugin.ScrollToPlugin));
class ScrollComponent {
    constructor(options = {}){
        // options
        this.opts = {
            target: "",
            duration: 400,
            smooth: false,
            offset: false
        };
        this.opts = Object.assign(this.opts, options);
        this.y = 0;
        this.limit = 0;
        this.scroll = this.opts.target ? document.querySelectorAll(this.opts.target)[0] : document;
        // smoothScroll
        this.smoothScroll = false;
    // init
    }
    _touchDetector() {
        return new Promise((resolve, reject)=>{
            const smoothScroll = new (0, _lenisDefault.default)({
                syncTouch: false
            });
            this.smooth = smoothScroll;
            //get scroll value
            this.smooth.on("scroll", ({ scroll, limit, velocity, direction, progress })=>{
                this.y = scroll;
                this.limit = limit;
                window.appEvent.trigger("app:scroll", [
                    this.y,
                    this.limit
                ]);
            });
            this._scrollEvent();
            resolve(true);
            const modal = document.querySelector(".cky-modal");
            modal.addEventListener("mouseenter", ()=>{
                this.smooth.stop();
            });
            modal.addEventListener("mouseleave", ()=>{
                this.smooth.start();
            });
            modal.addEventListener("wheel", function(e) {
                $(".cky-preference-body-wrapper").scrollTop($(".cky-preference-body-wrapper").scrollTop() + e.deltaY);
            });
        });
    }
    _clickEvents() {
        $("body").on("click", "[data-scrollto]", (e)=>{
            e.preventDefault();
            e.stopPropagation();
            let $target = $(e.currentTarget);
            let data = $target.data("scrollto");
            if (data === "") data = $target.attr("href");
            console.log("DATA", data);
            this.smooth.scrollTo(document.querySelector(data));
        //this.scrollTo(data);
        });
    }
    _scrollEvent() {
        this.scroll.addEventListener("scroll", (event)=>{
            this.y = this.scroll.scrollTop;
            this.limit = this.scroll.scrollHeight - window.innerHeight;
            window.appEvent.trigger("app:scroll", [
                this.y,
                this.limit
            ]);
        });
    }
    _scrollToPosition(pos, time) {
        console.log("_scrollToPosition", pos, time);
        if (this.opts.smooth) {
            if (time === 0) this.smooth.scrollTo(pos, {
                offset: 0,
                immediate: true
            });
            else this.smooth.scrollTo(pos, {
                offset: 0,
                dration: time
            });
        } else if (time == 0) (0, _gsap.gsap).set(this.scroll, {
            scrollTo: pos
        });
        else (0, _gsap.gsap).to(this.scroll, {
            duration: time / 1000,
            ease: "power3.out",
            scrollTo: pos
        });
    }
    scrollTo(target, time = false, offset = false) {
        // check duration
        if (time === false) time = this.opts.duration;
        // check target
        if (typeof target === "string") target = $(target).offset().top + $(this.scroll).scrollTop();
        // check offset
        if (offset === false) offset = this.opts.offset;
        let newOffset = 0;
        if (offset) {
            if (typeof offset === "string") $(offset).each(function() {
                newOffset += $(this).outerHeight(true);
                console.log("newOffset", newOffset);
            });
            else if (typeof offset == "number") newOffset = this.opts.offset;
            else if (typeof offset === "function") newOffset = this.opts.offset();
        }
        if (newOffset > 0) target -= newOffset;
        this._scrollToPosition(target, time);
    }
    updateView() {
        this.opts.smooth == true && Window.isTouchDevice;
    }
    initView() {
        this.scrollTo(0, 0);
        if (window.location.hash) {
            if ($(window.location.hash).length > 0) this.scrollTo(window.location.hash, 0);
        }
    }
    init() {
        return new Promise((resolve, reject)=>{
            // touch detector
            this._touchDetector();
            // click events
            this._clickEvents();
            resolve(true);
        });
    }
}
exports.default = ScrollComponent;

},{"gsap":"fPSuC","gsap/ScrollToPlugin":"9xJDW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","lenis":"JS2ak"}],"9xJDW":[function(require,module,exports) {
/*!
 * ScrollToPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ScrollToPlugin", ()=>ScrollToPlugin);
parcelHelpers.export(exports, "default", ()=>ScrollToPlugin);
var gsap, _coreInitted, _window, _docEl, _body, _toArray, _config, ScrollTrigger, _windowExists = function _windowExists() {
    return typeof window !== "undefined";
}, _getGSAP = function _getGSAP() {
    return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
}, _isString = function _isString(value) {
    return typeof value === "string";
}, _isFunction = function _isFunction(value) {
    return typeof value === "function";
}, _max = function _max(element, axis) {
    var dim = axis === "x" ? "Width" : "Height", scroll = "scroll" + dim, client = "client" + dim;
    return element === _window || element === _docEl || element === _body ? Math.max(_docEl[scroll], _body[scroll]) - (_window["inner" + dim] || _docEl[client] || _body[client]) : element[scroll] - element["offset" + dim];
}, _buildGetter = function _buildGetter(e, axis) {
    //pass in an element and an axis ("x" or "y") and it'll return a getter function for the scroll position of that element (like scrollTop or scrollLeft, although if the element is the window, it'll use the pageXOffset/pageYOffset or the documentElement's scrollTop/scrollLeft or document.body's. Basically this streamlines things and makes a very fast getter across browsers.
    var p = "scroll" + (axis === "x" ? "Left" : "Top");
    if (e === _window) {
        if (e.pageXOffset != null) p = "page" + axis.toUpperCase() + "Offset";
        else e = _docEl[p] != null ? _docEl : _body;
    }
    return function() {
        return e[p];
    };
}, _clean = function _clean(value, index, target, targets) {
    _isFunction(value) && (value = value(index, target, targets));
    if (typeof value !== "object") return _isString(value) && value !== "max" && value.charAt(1) !== "=" ? {
        x: value,
        y: value
    } : {
        y: value
    }; //if we don't receive an object as the parameter, assume the user intends "y".
    else if (value.nodeType) return {
        y: value,
        x: value
    };
    else {
        var result = {}, p;
        for(p in value)result[p] = p !== "onAutoKill" && _isFunction(value[p]) ? value[p](index, target, targets) : value[p];
        return result;
    }
}, _getOffset = function _getOffset(element, container) {
    element = _toArray(element)[0];
    if (!element || !element.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
        x: 0,
        y: 0
    };
    var rect = element.getBoundingClientRect(), isRoot = !container || container === _window || container === _body, cRect = isRoot ? {
        top: _docEl.clientTop - (_window.pageYOffset || _docEl.scrollTop || _body.scrollTop || 0),
        left: _docEl.clientLeft - (_window.pageXOffset || _docEl.scrollLeft || _body.scrollLeft || 0)
    } : container.getBoundingClientRect(), offsets = {
        x: rect.left - cRect.left,
        y: rect.top - cRect.top
    };
    if (!isRoot && container) {
        //only add the current scroll position if it's not the window/body.
        offsets.x += _buildGetter(container, "x")();
        offsets.y += _buildGetter(container, "y")();
    }
    return offsets;
}, _parseVal = function _parseVal(value, target, axis, currentVal, offset) {
    return !isNaN(value) && typeof value !== "object" ? parseFloat(value) - offset : _isString(value) && value.charAt(1) === "=" ? parseFloat(value.substr(2)) * (value.charAt(0) === "-" ? -1 : 1) + currentVal - offset : value === "max" ? _max(target, axis) - offset : Math.min(_max(target, axis), _getOffset(value, target)[axis] - offset);
}, _initCore = function _initCore() {
    gsap = _getGSAP();
    if (_windowExists() && gsap && typeof document !== "undefined" && document.body) {
        _window = window;
        _body = document.body;
        _docEl = document.documentElement;
        _toArray = gsap.utils.toArray;
        gsap.config({
            autoKillThreshold: 7
        });
        _config = gsap.config();
        _coreInitted = 1;
    }
};
var ScrollToPlugin = {
    version: "3.12.5",
    name: "scrollTo",
    rawVars: 1,
    register: function register(core) {
        gsap = core;
        _initCore();
    },
    init: function init(target, value, tween, index, targets) {
        _coreInitted || _initCore();
        var data = this, snapType = gsap.getProperty(target, "scrollSnapType");
        data.isWin = target === _window;
        data.target = target;
        data.tween = tween;
        value = _clean(value, index, target, targets);
        data.vars = value;
        data.autoKill = !!value.autoKill;
        data.getX = _buildGetter(target, "x");
        data.getY = _buildGetter(target, "y");
        data.x = data.xPrev = data.getX();
        data.y = data.yPrev = data.getY();
        ScrollTrigger || (ScrollTrigger = gsap.core.globals().ScrollTrigger);
        gsap.getProperty(target, "scrollBehavior") === "smooth" && gsap.set(target, {
            scrollBehavior: "auto"
        });
        if (snapType && snapType !== "none") {
            // disable scroll snapping to avoid strange behavior
            data.snap = 1;
            data.snapInline = target.style.scrollSnapType;
            target.style.scrollSnapType = "none";
        }
        if (value.x != null) {
            data.add(data, "x", data.x, _parseVal(value.x, target, "x", data.x, value.offsetX || 0), index, targets);
            data._props.push("scrollTo_x");
        } else data.skipX = 1;
        if (value.y != null) {
            data.add(data, "y", data.y, _parseVal(value.y, target, "y", data.y, value.offsetY || 0), index, targets);
            data._props.push("scrollTo_y");
        } else data.skipY = 1;
    },
    render: function render(ratio, data) {
        var pt = data._pt, target = data.target, tween = data.tween, autoKill = data.autoKill, xPrev = data.xPrev, yPrev = data.yPrev, isWin = data.isWin, snap = data.snap, snapInline = data.snapInline, x, y, yDif, xDif, threshold;
        while(pt){
            pt.r(ratio, pt.d);
            pt = pt._next;
        }
        x = isWin || !data.skipX ? data.getX() : xPrev;
        y = isWin || !data.skipY ? data.getY() : yPrev;
        yDif = y - yPrev;
        xDif = x - xPrev;
        threshold = _config.autoKillThreshold;
        if (data.x < 0) //can't scroll to a position less than 0! Might happen if someone uses a Back.easeOut or Elastic.easeOut when scrolling back to the top of the page (for example)
        data.x = 0;
        if (data.y < 0) data.y = 0;
        if (autoKill) {
            //note: iOS has a bug that throws off the scroll by several pixels, so we need to check if it's within 7 pixels of the previous one that we set instead of just looking for an exact match.
            if (!data.skipX && (xDif > threshold || xDif < -threshold) && x < _max(target, "x")) data.skipX = 1; //if the user scrolls separately, we should stop tweening!
            if (!data.skipY && (yDif > threshold || yDif < -threshold) && y < _max(target, "y")) data.skipY = 1; //if the user scrolls separately, we should stop tweening!
            if (data.skipX && data.skipY) {
                tween.kill();
                data.vars.onAutoKill && data.vars.onAutoKill.apply(tween, data.vars.onAutoKillParams || []);
            }
        }
        if (isWin) _window.scrollTo(!data.skipX ? data.x : x, !data.skipY ? data.y : y);
        else {
            data.skipY || (target.scrollTop = data.y);
            data.skipX || (target.scrollLeft = data.x);
        }
        if (snap && (ratio === 1 || ratio === 0)) {
            y = target.scrollTop;
            x = target.scrollLeft;
            snapInline ? target.style.scrollSnapType = snapInline : target.style.removeProperty("scroll-snap-type");
            target.scrollTop = y + 1; // bug in Safari causes the element to totally reset its scroll position when scroll-snap-type changes, so we need to set it to a slightly different value and then back again to work around this bug.
            target.scrollLeft = x + 1;
            target.scrollTop = y;
            target.scrollLeft = x;
        }
        data.xPrev = data.x;
        data.yPrev = data.y;
        ScrollTrigger && ScrollTrigger.update();
    },
    kill: function kill(property) {
        var both = property === "scrollTo", i = this._props.indexOf(property);
        if (both || property === "scrollTo_x") this.skipX = 1;
        if (both || property === "scrollTo_y") this.skipY = 1;
        i > -1 && this._props.splice(i, 1);
        return !this._props.length;
    }
};
ScrollToPlugin.max = _max;
ScrollToPlugin.getOffset = _getOffset;
ScrollToPlugin.buildGetter = _buildGetter;
_getGSAP() && gsap.registerPlugin(ScrollToPlugin);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"JS2ak":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Lenis);
function clamp(t, e, i) {
    return Math.max(t, Math.min(e, i));
}
class Animate {
    advance(t) {
        if (!this.isRunning) return;
        let e = !1;
        if (this.lerp) this.value = function damp(t, e, i, s) {
            return function lerp(t, e, i) {
                return (1 - i) * t + i * e;
            }(t, e, 1 - Math.exp(-i * s));
        }(this.value, this.to, 60 * this.lerp, t), Math.round(this.value) === this.to && (this.value = this.to, e = !0);
        else {
            this.currentTime += t;
            const i = clamp(0, this.currentTime / this.duration, 1);
            e = i >= 1;
            const s = e ? 1 : this.easing(i);
            this.value = this.from + (this.to - this.from) * s;
        }
        e && this.stop(), this.onUpdate?.(this.value, e);
    }
    stop() {
        this.isRunning = !1;
    }
    fromTo(t, e, { lerp: i = .1, duration: s = 1, easing: o = (t)=>t, onStart: n, onUpdate: r }) {
        this.from = this.value = t, this.to = e, this.lerp = i, this.duration = s, this.easing = o, this.currentTime = 0, this.isRunning = !0, n?.(), this.onUpdate = r;
    }
}
class Dimensions {
    constructor({ wrapper: t, content: e, autoResize: i = !0, debounce: s = 250 } = {}){
        this.wrapper = t, this.content = e, i && (this.debouncedResize = function debounce(t, e) {
            let i;
            return function() {
                let s = arguments, o = this;
                clearTimeout(i), i = setTimeout(function() {
                    t.apply(o, s);
                }, e);
            };
        }(this.resize, s), this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
    }
    destroy() {
        this.wrapperResizeObserver?.disconnect(), this.contentResizeObserver?.disconnect(), window.removeEventListener("resize", this.debouncedResize, !1);
    }
    resize = ()=>{
        this.onWrapperResize(), this.onContentResize();
    };
    onWrapperResize = ()=>{
        this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight);
    };
    onContentResize = ()=>{
        this.wrapper === window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth);
    };
    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
        };
    }
}
class Emitter {
    constructor(){
        this.events = {};
    }
    emit(t, ...e) {
        let i = this.events[t] || [];
        for(let t = 0, s = i.length; t < s; t++)i[t](...e);
    }
    on(t, e) {
        return this.events[t]?.push(e) || (this.events[t] = [
            e
        ]), ()=>{
            this.events[t] = this.events[t]?.filter((t)=>e !== t);
        };
    }
    off(t, e) {
        this.events[t] = this.events[t]?.filter((t)=>e !== t);
    }
    destroy() {
        this.events = {};
    }
}
const t = 100 / 6;
class VirtualScroll {
    constructor(t, { wheelMultiplier: e = 1, touchMultiplier: i = 1 }){
        this.element = t, this.wheelMultiplier = e, this.touchMultiplier = i, this.touchStart = {
            x: null,
            y: null
        }, this.emitter = new Emitter, window.addEventListener("resize", this.onWindowResize, !1), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, {
            passive: !1
        }), this.element.addEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }), this.element.addEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }), this.element.addEventListener("touchend", this.onTouchEnd, {
            passive: !1
        });
    }
    on(t, e) {
        return this.emitter.on(t, e);
    }
    destroy() {
        this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, !1), this.element.removeEventListener("wheel", this.onWheel, {
            passive: !1
        }), this.element.removeEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }), this.element.removeEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }), this.element.removeEventListener("touchend", this.onTouchEnd, {
            passive: !1
        });
    }
    onTouchStart = (t)=>{
        const { clientX: e, clientY: i } = t.targetTouches ? t.targetTouches[0] : t;
        this.touchStart.x = e, this.touchStart.y = i, this.lastDelta = {
            x: 0,
            y: 0
        }, this.emitter.emit("scroll", {
            deltaX: 0,
            deltaY: 0,
            event: t
        });
    };
    onTouchMove = (t)=>{
        const { clientX: e, clientY: i } = t.targetTouches ? t.targetTouches[0] : t, s = -(e - this.touchStart.x) * this.touchMultiplier, o = -(i - this.touchStart.y) * this.touchMultiplier;
        this.touchStart.x = e, this.touchStart.y = i, this.lastDelta = {
            x: s,
            y: o
        }, this.emitter.emit("scroll", {
            deltaX: s,
            deltaY: o,
            event: t
        });
    };
    onTouchEnd = (t)=>{
        this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: t
        });
    };
    onWheel = (e)=>{
        let { deltaX: i, deltaY: s, deltaMode: o } = e;
        i *= 1 === o ? t : 2 === o ? this.windowWidth : 1, s *= 1 === o ? t : 2 === o ? this.windowHeight : 1, i *= this.wheelMultiplier, s *= this.wheelMultiplier, this.emitter.emit("scroll", {
            deltaX: i,
            deltaY: s,
            event: e
        });
    };
    onWindowResize = ()=>{
        this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight;
    };
}
class Lenis {
    constructor({ wrapper: t = window, content: e = document.documentElement, wheelEventsTarget: i = t, eventsTarget: s = i, smoothWheel: o = !0, syncTouch: n = !1, syncTouchLerp: r = .075, touchInertiaMultiplier: l = 35, duration: h, easing: a = (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t)), lerp: c = !h && .1, infinite: u = !1, orientation: d = "vertical", gestureOrientation: p = "vertical", touchMultiplier: m = 1, wheelMultiplier: v = 1, autoResize: g = !0, prevent: S = !1, __experimental__naiveDimensions: w = !1 } = {}){
        this.__isScrolling = !1, this.__isStopped = !1, this.__isLocked = !1, this.onVirtualScroll = ({ deltaX: t, deltaY: e, event: i })=>{
            if (i.ctrlKey) return;
            const s = i.type.includes("touch"), o = i.type.includes("wheel");
            this.isTouching = "touchstart" === i.type || "touchmove" === i.type;
            if (this.options.syncTouch && s && "touchstart" === i.type && !this.isStopped && !this.isLocked) return void this.reset();
            const n = 0 === t && 0 === e, r = "vertical" === this.options.gestureOrientation && 0 === e || "horizontal" === this.options.gestureOrientation && 0 === t;
            if (n || r) return;
            let l = i.composedPath();
            l = l.slice(0, l.indexOf(this.rootElement));
            const h = this.options.prevent;
            if (l.find((t)=>{
                var e, i, n, r, l;
                return ("function" == typeof h ? null == h ? void 0 : h(t) : h) || (null === (e = t.hasAttribute) || void 0 === e ? void 0 : e.call(t, "data-lenis-prevent")) || s && (null === (i = t.hasAttribute) || void 0 === i ? void 0 : i.call(t, "data-lenis-prevent-touch")) || o && (null === (n = t.hasAttribute) || void 0 === n ? void 0 : n.call(t, "data-lenis-prevent-wheel")) || (null === (r = t.classList) || void 0 === r ? void 0 : r.contains("lenis")) && !(null === (l = t.classList) || void 0 === l ? void 0 : l.contains("lenis-stopped"));
            })) return;
            if (this.isStopped || this.isLocked) return void i.preventDefault();
            if (!(this.options.syncTouch && s || this.options.smoothWheel && o)) return this.isScrolling = "native", void this.animate.stop();
            i.preventDefault();
            let a = e;
            "both" === this.options.gestureOrientation ? a = Math.abs(e) > Math.abs(t) ? e : t : "horizontal" === this.options.gestureOrientation && (a = t);
            const c = s && this.options.syncTouch, u = s && "touchend" === i.type && Math.abs(a) > 5;
            u && (a = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + a, Object.assign({
                programmatic: !1
            }, c ? {
                lerp: u ? this.options.syncTouchLerp : 1
            } : {
                lerp: this.options.lerp,
                duration: this.options.duration,
                easing: this.options.easing
            }));
        }, this.onNativeScroll = ()=>{
            if (clearTimeout(this.__resetVelocityTimeout), delete this.__resetVelocityTimeout, this.__preventNextNativeScrollEvent) delete this.__preventNextNativeScrollEvent;
            else if (!1 === this.isScrolling || "native" === this.isScrolling) {
                const t = this.animatedScroll;
                this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - t, this.direction = Math.sign(this.animatedScroll - t), this.isScrolling = !!this.hasScrolled && "native", this.emit(), 0 !== this.velocity && (this.__resetVelocityTimeout = setTimeout(()=>{
                    this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = !1, this.emit();
                }, 400));
            }
        }, window.lenisVersion = "1.1.1", t !== document.documentElement && t !== document.body || (t = window), this.options = {
            wrapper: t,
            content: e,
            wheelEventsTarget: i,
            eventsTarget: s,
            smoothWheel: o,
            syncTouch: n,
            syncTouchLerp: r,
            touchInertiaMultiplier: l,
            duration: h,
            easing: a,
            lerp: c,
            infinite: u,
            gestureOrientation: p,
            orientation: d,
            touchMultiplier: m,
            wheelMultiplier: v,
            autoResize: g,
            prevent: S,
            __experimental__naiveDimensions: w
        }, this.animate = new Animate, this.emitter = new Emitter, this.dimensions = new Dimensions({
            wrapper: t,
            content: e,
            autoResize: g
        }), this.updateClassName(), this.userData = {}, this.time = 0, this.velocity = this.lastVelocity = 0, this.isLocked = !1, this.isStopped = !1, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1), this.virtualScroll = new VirtualScroll(s, {
            touchMultiplier: m,
            wheelMultiplier: v
        }), this.virtualScroll.on("scroll", this.onVirtualScroll);
    }
    destroy() {
        this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName();
    }
    on(t, e) {
        return this.emitter.on(t, e);
    }
    off(t, e) {
        return this.emitter.off(t, e);
    }
    setScroll(t) {
        this.isHorizontal ? this.rootElement.scrollLeft = t : this.rootElement.scrollTop = t;
    }
    resize() {
        this.dimensions.resize();
    }
    emit({ userData: t = {} } = {}) {
        this.userData = t, this.emitter.emit("scroll", this), this.userData = {};
    }
    reset() {
        this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop();
    }
    start() {
        this.isStopped && (this.isStopped = !1, this.reset());
    }
    stop() {
        this.isStopped || (this.isStopped = !0, this.animate.stop(), this.reset());
    }
    raf(t) {
        const e = t - (this.time || t);
        this.time = t, this.animate.advance(.001 * e);
    }
    scrollTo(t, { offset: e = 0, immediate: i = !1, lock: s = !1, duration: o = this.options.duration, easing: n = this.options.easing, lerp: r = !o && this.options.lerp, onStart: l, onComplete: h, force: a = !1, programmatic: c = !0, userData: u = {} } = {}) {
        if (!this.isStopped && !this.isLocked || a) {
            if ([
                "top",
                "left",
                "start"
            ].includes(t)) t = 0;
            else if ([
                "bottom",
                "right",
                "end"
            ].includes(t)) t = this.limit;
            else {
                let i;
                if ("string" == typeof t ? i = document.querySelector(t) : (null == t ? void 0 : t.nodeType) && (i = t), i) {
                    if (this.options.wrapper !== window) {
                        const t = this.options.wrapper.getBoundingClientRect();
                        e -= this.isHorizontal ? t.left : t.top;
                    }
                    const s = i.getBoundingClientRect();
                    t = (this.isHorizontal ? s.left : s.top) + this.animatedScroll;
                }
            }
            if ("number" == typeof t) {
                if (t += e, t = Math.round(t), this.options.infinite ? c && (this.targetScroll = this.animatedScroll = this.scroll) : t = clamp(0, t, this.limit), i) return this.animatedScroll = this.targetScroll = t, this.setScroll(this.scroll), this.reset(), void (null == h || h(this));
                t !== this.targetScroll && (c || (this.targetScroll = t), this.animate.fromTo(this.animatedScroll, t, {
                    duration: o,
                    easing: n,
                    lerp: r,
                    onStart: ()=>{
                        s && (this.isLocked = !0), this.isScrolling = "smooth", null == l || l(this);
                    },
                    onUpdate: (t, e)=>{
                        this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = t - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = t, this.setScroll(this.scroll), c && (this.targetScroll = t), e || this.emit({
                            userData: u
                        }), e && (this.reset(), this.emit({
                            userData: u
                        }), null == h || h(this), this.__preventNextNativeScrollEvent = !0);
                    }
                }));
            }
        }
    }
    get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
    }
    get limit() {
        return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
    }
    get isHorizontal() {
        return "horizontal" === this.options.orientation;
    }
    get actualScroll() {
        return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
    }
    get scroll() {
        return this.options.infinite ? function modulo(t, e) {
            return (t % e + e) % e;
        }(this.animatedScroll, this.limit) : this.animatedScroll;
    }
    get progress() {
        return 0 === this.limit ? 1 : this.scroll / this.limit;
    }
    get isScrolling() {
        return this.__isScrolling;
    }
    set isScrolling(t) {
        this.__isScrolling !== t && (this.__isScrolling = t, this.updateClassName());
    }
    get isStopped() {
        return this.__isStopped;
    }
    set isStopped(t) {
        this.__isStopped !== t && (this.__isStopped = t, this.updateClassName());
    }
    get isLocked() {
        return this.__isLocked;
    }
    set isLocked(t) {
        this.__isLocked !== t && (this.__isLocked = t, this.updateClassName());
    }
    get isSmooth() {
        return "smooth" === this.isScrolling;
    }
    get className() {
        let t = "lenis";
        return this.isStopped && (t += " lenis-stopped"), this.isLocked && (t += " lenis-locked"), this.isScrolling && (t += " lenis-scrolling"), "smooth" === this.isScrolling && (t += " lenis-smooth"), t;
    }
    updateClassName() {
        this.cleanUpClassName(), this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim();
    }
    cleanUpClassName() {
        this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["lwRXP"], null, "parcelRequiree21d")

//# sourceMappingURL=ScrollComponent.93244685.js.map
