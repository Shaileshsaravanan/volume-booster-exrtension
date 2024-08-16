!(function e(s, t, r) {
    function n(i, o) {
        if (!t[i]) {
            if (!s[i]) {
                var g = "function" == typeof require && require;
                if (!o && g) return g(i, !0);
                if (a) return a(i, !0);
                var m = new Error("Cannot find module '" + i + "'");
                throw ((m.code = "MODULE_NOT_FOUND"), m);
            }
            var l = (t[i] = { exports: {} });
            s[i][0].call(
                l.exports,
                function (e) {
                    return n(s[i][1][e] || e);
                },
                l,
                l.exports,
                e,
                s,
                t,
                r
            );
        }
        return t[i].exports;
    }
    for (var a = "function" == typeof require && require, i = 0; i < r.length; i++) n(r[i]);
    return n;
})(
    {
        1: [
            function (e, s, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.browser = e("webextension-polyfill"));
            },
            { "webextension-polyfill": 2 },
        ],
        2: [
            function (e, s, t) {
                !(function (e, r) {
                    if ("function" == typeof define && define.amd) define("webextension-polyfill", ["module"], r);
                    else if (void 0 !== t) r(s);
                    else {
                        var n = { exports: {} };
                        r(n), (e.browser = n.exports);
                    }
                })("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : this, function (e) {
                    "use strict";
                    if ("undefined" == typeof browser || Object.getPrototypeOf(browser) !== Object.prototype) {
                        const s = "The message port closed before a response was received.",
                            t = (e) => {
                                const t = {
                                    alarms: { clear: { minArgs: 0, maxArgs: 1 }, clearAll: { minArgs: 0, maxArgs: 0 }, get: { minArgs: 0, maxArgs: 1 }, getAll: { minArgs: 0, maxArgs: 0 } },
                                    bookmarks: {
                                        create: { minArgs: 1, maxArgs: 1 },
                                        get: { minArgs: 1, maxArgs: 1 },
                                        getChildren: { minArgs: 1, maxArgs: 1 },
                                        getRecent: { minArgs: 1, maxArgs: 1 },
                                        getSubTree: { minArgs: 1, maxArgs: 1 },
                                        getTree: { minArgs: 0, maxArgs: 0 },
                                        move: { minArgs: 2, maxArgs: 2 },
                                        remove: { minArgs: 1, maxArgs: 1 },
                                        removeTree: { minArgs: 1, maxArgs: 1 },
                                        search: { minArgs: 1, maxArgs: 1 },
                                        update: { minArgs: 2, maxArgs: 2 },
                                    },
                                    browserAction: {
                                        disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                                        enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                                        getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                                        getBadgeText: { minArgs: 1, maxArgs: 1 },
                                        getPopup: { minArgs: 1, maxArgs: 1 },
                                        getTitle: { minArgs: 1, maxArgs: 1 },
                                        openPopup: { minArgs: 0, maxArgs: 0 },
                                        setBadgeBackgroundColor: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                        setBadgeText: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                        setIcon: { minArgs: 1, maxArgs: 1 },
                                        setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                        setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                    },
                                    browsingData: {
                                        remove: { minArgs: 2, maxArgs: 2 },
                                        removeCache: { minArgs: 1, maxArgs: 1 },
                                        removeCookies: { minArgs: 1, maxArgs: 1 },
                                        removeDownloads: { minArgs: 1, maxArgs: 1 },
                                        removeFormData: { minArgs: 1, maxArgs: 1 },
                                        removeHistory: { minArgs: 1, maxArgs: 1 },
                                        removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                                        removePasswords: { minArgs: 1, maxArgs: 1 },
                                        removePluginData: { minArgs: 1, maxArgs: 1 },
                                        settings: { minArgs: 0, maxArgs: 0 },
                                    },
                                    commands: { getAll: { minArgs: 0, maxArgs: 0 } },
                                    contextMenus: { remove: { minArgs: 1, maxArgs: 1 }, removeAll: { minArgs: 0, maxArgs: 0 }, update: { minArgs: 2, maxArgs: 2 } },
                                    cookies: { get: { minArgs: 1, maxArgs: 1 }, getAll: { minArgs: 1, maxArgs: 1 }, getAllCookieStores: { minArgs: 0, maxArgs: 0 }, remove: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } },
                                    devtools: {
                                        inspectedWindow: { eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 } },
                                        panels: { create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 }, elements: { createSidebarPane: { minArgs: 1, maxArgs: 1 } } },
                                    },
                                    downloads: {
                                        cancel: { minArgs: 1, maxArgs: 1 },
                                        download: { minArgs: 1, maxArgs: 1 },
                                        erase: { minArgs: 1, maxArgs: 1 },
                                        getFileIcon: { minArgs: 1, maxArgs: 2 },
                                        open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                        pause: { minArgs: 1, maxArgs: 1 },
                                        removeFile: { minArgs: 1, maxArgs: 1 },
                                        resume: { minArgs: 1, maxArgs: 1 },
                                        search: { minArgs: 1, maxArgs: 1 },
                                        show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                    },
                                    extension: { isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 }, isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 } },
                                    history: {
                                        addUrl: { minArgs: 1, maxArgs: 1 },
                                        deleteAll: { minArgs: 0, maxArgs: 0 },
                                        deleteRange: { minArgs: 1, maxArgs: 1 },
                                        deleteUrl: { minArgs: 1, maxArgs: 1 },
                                        getVisits: { minArgs: 1, maxArgs: 1 },
                                        search: { minArgs: 1, maxArgs: 1 },
                                    },
                                    i18n: { detectLanguage: { minArgs: 1, maxArgs: 1 }, getAcceptLanguages: { minArgs: 0, maxArgs: 0 } },
                                    identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
                                    idle: { queryState: { minArgs: 1, maxArgs: 1 } },
                                    management: { get: { minArgs: 1, maxArgs: 1 }, getAll: { minArgs: 0, maxArgs: 0 }, getSelf: { minArgs: 0, maxArgs: 0 }, setEnabled: { minArgs: 2, maxArgs: 2 }, uninstallSelf: { minArgs: 0, maxArgs: 1 } },
                                    notifications: {
                                        clear: { minArgs: 1, maxArgs: 1 },
                                        create: { minArgs: 1, maxArgs: 2 },
                                        getAll: { minArgs: 0, maxArgs: 0 },
                                        getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                                        update: { minArgs: 2, maxArgs: 2 },
                                    },
                                    pageAction: {
                                        getPopup: { minArgs: 1, maxArgs: 1 },
                                        getTitle: { minArgs: 1, maxArgs: 1 },
                                        hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                        setIcon: { minArgs: 1, maxArgs: 1 },
                                        setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                        setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                        show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                    },
                                    permissions: { contains: { minArgs: 1, maxArgs: 1 }, getAll: { minArgs: 0, maxArgs: 0 }, remove: { minArgs: 1, maxArgs: 1 }, request: { minArgs: 1, maxArgs: 1 } },
                                    runtime: {
                                        getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                                        getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                                        openOptionsPage: { minArgs: 0, maxArgs: 0 },
                                        requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                                        sendMessage: { minArgs: 1, maxArgs: 3 },
                                        sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                                        setUninstallURL: { minArgs: 1, maxArgs: 1 },
                                    },
                                    sessions: { getDevices: { minArgs: 0, maxArgs: 1 }, getRecentlyClosed: { minArgs: 0, maxArgs: 1 }, restore: { minArgs: 0, maxArgs: 1 } },
                                    storage: {
                                        local: { clear: { minArgs: 0, maxArgs: 0 }, get: { minArgs: 0, maxArgs: 1 }, getBytesInUse: { minArgs: 0, maxArgs: 1 }, remove: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } },
                                        managed: { get: { minArgs: 0, maxArgs: 1 }, getBytesInUse: { minArgs: 0, maxArgs: 1 } },
                                        sync: { clear: { minArgs: 0, maxArgs: 0 }, get: { minArgs: 0, maxArgs: 1 }, getBytesInUse: { minArgs: 0, maxArgs: 1 }, remove: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } },
                                    },
                                    tabs: {
                                        captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                                        create: { minArgs: 1, maxArgs: 1 },
                                        detectLanguage: { minArgs: 0, maxArgs: 1 },
                                        discard: { minArgs: 0, maxArgs: 1 },
                                        duplicate: { minArgs: 1, maxArgs: 1 },
                                        executeScript: { minArgs: 1, maxArgs: 2 },
                                        get: { minArgs: 1, maxArgs: 1 },
                                        getCurrent: { minArgs: 0, maxArgs: 0 },
                                        getZoom: { minArgs: 0, maxArgs: 1 },
                                        getZoomSettings: { minArgs: 0, maxArgs: 1 },
                                        goBack: { minArgs: 0, maxArgs: 1 },
                                        goForward: { minArgs: 0, maxArgs: 1 },
                                        highlight: { minArgs: 1, maxArgs: 1 },
                                        insertCSS: { minArgs: 1, maxArgs: 2 },
                                        move: { minArgs: 2, maxArgs: 2 },
                                        query: { minArgs: 1, maxArgs: 1 },
                                        reload: { minArgs: 0, maxArgs: 2 },
                                        remove: { minArgs: 1, maxArgs: 1 },
                                        removeCSS: { minArgs: 1, maxArgs: 2 },
                                        sendMessage: { minArgs: 2, maxArgs: 3 },
                                        setZoom: { minArgs: 1, maxArgs: 2 },
                                        setZoomSettings: { minArgs: 1, maxArgs: 2 },
                                        update: { minArgs: 1, maxArgs: 2 },
                                    },
                                    topSites: { get: { minArgs: 0, maxArgs: 0 } },
                                    webNavigation: { getAllFrames: { minArgs: 1, maxArgs: 1 }, getFrame: { minArgs: 1, maxArgs: 1 } },
                                    webRequest: { handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 } },
                                    windows: {
                                        create: { minArgs: 0, maxArgs: 1 },
                                        get: { minArgs: 1, maxArgs: 2 },
                                        getAll: { minArgs: 0, maxArgs: 1 },
                                        getCurrent: { minArgs: 0, maxArgs: 1 },
                                        getLastFocused: { minArgs: 0, maxArgs: 1 },
                                        remove: { minArgs: 1, maxArgs: 1 },
                                        update: { minArgs: 2, maxArgs: 2 },
                                    },
                                };
                                if (0 === Object.keys(t).length) throw new Error("api-metadata.json has not been included in browser-polyfill");
                                class r extends WeakMap {
                                    constructor(e, s = void 0) {
                                        super(s), (this.createItem = e);
                                    }
                                    get(e) {
                                        return this.has(e) || this.set(e, this.createItem(e)), super.get(e);
                                    }
                                }
                                const n = (s, t) => (...r) => {
                                        e.runtime.lastError ? s.reject(new Error(e.runtime.lastError.message)) : t.singleCallbackArg || (r.length <= 1 && !1 !== t.singleCallbackArg) ? s.resolve(r[0]) : s.resolve(r);
                                    },
                                    a = (e) => (1 == e ? "argument" : "arguments"),
                                    i = (e, s) =>
                                        function (t, ...r) {
                                            if (r.length < s.minArgs) throw new Error(`Expected at least ${s.minArgs} ${a(s.minArgs)} for ${e}(), got ${r.length}`);
                                            if (r.length > s.maxArgs) throw new Error(`Expected at most ${s.maxArgs} ${a(s.maxArgs)} for ${e}(), got ${r.length}`);
                                            return new Promise((a, i) => {
                                                if (s.fallbackToNoCallback)
                                                    try {
                                                        t[e](...r, n({ resolve: a, reject: i }, s));
                                                    } catch (n) {
                                                        t[e](...r), (s.fallbackToNoCallback = !1), (s.noCallback = !0), a();
                                                    }
                                                else s.noCallback ? (t[e](...r), a()) : t[e](...r, n({ resolve: a, reject: i }, s));
                                            });
                                        },
                                    o = (e, s, t) => new Proxy(s, { apply: (s, r, n) => t.call(r, e, ...n) });
                                let g = Function.call.bind(Object.prototype.hasOwnProperty);
                                const m = (e, s = {}, t = {}) => {
                                        let r = Object.create(null),
                                            n = {
                                                has: (s, t) => t in e || t in r,
                                                get(n, a, l) {
                                                    if (a in r) return r[a];
                                                    if (!(a in e)) return;
                                                    let A = e[a];
                                                    if ("function" == typeof A)
                                                        if ("function" == typeof s[a]) A = o(e, e[a], s[a]);
                                                        else if (g(t, a)) {
                                                            let s = i(a, t[a]);
                                                            A = o(e, e[a], s);
                                                        } else A = A.bind(e);
                                                    else if ("object" == typeof A && null !== A && (g(s, a) || g(t, a))) A = m(A, s[a], t[a]);
                                                    else {
                                                        if (!g(t, "*"))
                                                            return (
                                                                Object.defineProperty(r, a, {
                                                                    configurable: !0,
                                                                    enumerable: !0,
                                                                    get: () => e[a],
                                                                    set(s) {
                                                                        e[a] = s;
                                                                    },
                                                                }),
                                                                A
                                                            );
                                                        A = m(A, s[a], t["*"]);
                                                    }
                                                    return (r[a] = A), A;
                                                },
                                                set: (s, t, n, a) => (t in r ? (r[t] = n) : (e[t] = n), !0),
                                                defineProperty: (e, s, t) => Reflect.defineProperty(r, s, t),
                                                deleteProperty: (e, s) => Reflect.deleteProperty(r, s),
                                            },
                                            a = Object.create(e);
                                        return new Proxy(a, n);
                                    },
                                    l = (e) => ({
                                        addListener(s, t, ...r) {
                                            s.addListener(e.get(t), ...r);
                                        },
                                        hasListener: (s, t) => s.hasListener(e.get(t)),
                                        removeListener(s, t) {
                                            s.removeListener(e.get(t));
                                        },
                                    }),
                                    A = new r((e) =>
                                        "function" != typeof e
                                            ? e
                                            : function (s) {
                                                  const t = m(s, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
                                                  e(t);
                                              }
                                    );
                                let c = !1;
                                const u = new r((e) =>
                                        "function" != typeof e
                                            ? e
                                            : function (s, t, r) {
                                                  let n,
                                                      a,
                                                      i = !1,
                                                      o = new Promise((e) => {
                                                          n = function (s) {
                                                              c || (c = !0), (i = !0), e(s);
                                                          };
                                                      });
                                                  try {
                                                      a = e(s, t, n);
                                                  } catch (e) {
                                                      a = Promise.reject(e);
                                                  }
                                                  const g = !0 !== a && ((e) => e && "object" == typeof e && "function" == typeof e.then)(a);
                                                  if (!0 !== a && !g && !i) return !1;
                                                  return (
                                                      ((e) => {
                                                          e.then(
                                                              (e) => {
                                                                  r(e);
                                                              },
                                                              (e) => {
                                                                  let s;
                                                                  (s = e && (e instanceof Error || "string" == typeof e.message) ? e.message : "An unexpected error occurred"), r({ __mozWebExtensionPolyfillReject__: !0, message: s });
                                                              }
                                                          ).catch((e) => {});
                                                      })(g ? a : o),
                                                      !0
                                                  );
                                              }
                                    ),
                                    d = ({ reject: t, resolve: r }, n) => {
                                        e.runtime.lastError ? (e.runtime.lastError.message === s ? r() : t(new Error(e.runtime.lastError.message))) : n && n.__mozWebExtensionPolyfillReject__ ? t(new Error(n.message)) : r(n);
                                    },
                                    x = (e, s, t, ...r) => {
                                        if (r.length < s.minArgs) throw new Error(`Expected at least ${s.minArgs} ${a(s.minArgs)} for ${e}(), got ${r.length}`);
                                        if (r.length > s.maxArgs) throw new Error(`Expected at most ${s.maxArgs} ${a(s.maxArgs)} for ${e}(), got ${r.length}`);
                                        return new Promise((e, s) => {
                                            const n = d.bind(null, { resolve: e, reject: s });
                                            r.push(n), t.sendMessage(...r);
                                        });
                                    },
                                    h = {
                                        devtools: { network: { onRequestFinished: l(A) } },
                                        runtime: { onMessage: l(u), onMessageExternal: l(u), sendMessage: x.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }) },
                                        tabs: { sendMessage: x.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) },
                                    },
                                    b = { clear: { minArgs: 1, maxArgs: 1 }, get: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } };
                                return (t.privacy = { network: { "*": b }, services: { "*": b }, websites: { "*": b } }), m(e, h, t);
                            };
                        if ("object" != typeof chrome || !chrome || !chrome.runtime || !chrome.runtime.id) throw new Error("This script should only be loaded in a browser extension.");
                        e.exports = t(chrome);
                    } else e.exports = browser;
                });
            },
            {},
        ],
        3: [
            function (e, s, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.removeFromSessionStorage = t.getFromSessionStorage = t.updateSessionStorage = t.getFromStorage = t.updateStorage = t.getRootUrl = void 0);
                const r = e("webextension-polyfill-ts");
                (t.getRootUrl = function (e) {
                    return new URL(e).hostname;
                }),
                    (t.updateStorage = async function (e, s) {
                        await r.browser.storage.local.set({ [e]: s });
                    }),
                    (t.updateSessionStorage = async function (e, s, t) {
                        await chrome.storage.session.set({ [e]: s }), t && t();
                    }),
                    (t.removeFromSessionStorage = function (e) {
                        chrome.storage.session.remove(e);
                    }),
                    (t.getFromSessionStorage = async function (e, s) {
                        const t = await chrome.storage.session.get([e]);
                        return s ? s(null == t ? void 0 : t[e]) : null == t ? void 0 : t[e];
                    }),
                    (t.getFromStorage = async function (e) {
                        const s = await r.browser.storage.local.get([e]);
                        return null == s ? void 0 : s[e];
                    });
            },
            { "webextension-polyfill-ts": 1 },
        ],
        4: [
            function (e, s, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                const r = e("webextension-polyfill-ts"),
                    n = e("./helper");
                new (class {
                    constructor() {
                        (this.volumeInput = document.getElementById("volume")),
                            (this.volumeRange = document.getElementById("volume-range")),
                            (this.body = document.querySelector("body")),
                            (this.toggle = document.getElementById("toggle")),
                            (this.logo = document.getElementById("logo")),
                            (this.rangeThumb = document.querySelector(".range-thumb")),
                            (this.rangeProgress = document.querySelector(".range-progress")),
                            (this.domain = document.getElementById("domain")),
                            (this.volume = 100),
                            (this.audioState = {}),
                            this.run();
                    }
                    async run() {
                        this.initListeners(), await this.synchronizeWithStorage(), this.viewDomain();
                        (await n.getFromStorage("extStatus")) && this.runBooster();
                    }
                    switchExtension(e) {
                        e ? this.runBooster() : this.disableBooster(), this.switchStatus(e);
                    }
                    initListeners() {
                        this.initDOMListeners(),
                            chrome.storage.local.onChanged.addListener((e) => {
                                if (!e.extStatus) return;
                                const s = e.extStatus.newValue;
                                this.switchExtension(s);
                            });
                    }
                    initDOMListeners() {
                        this.toggle.addEventListener("change", async () => {
                            this.toggle.checked ? this.enableExtension() : this.disableExtension();
                        }),
                            this.volumeRange.addEventListener("input", (e) => {
                                const s = e.target.value;
                                (this.volume = Number(s)), (this.volumeInput.value = String(s)), this.updateVolumeRangeProgress(), this.boostVolume();
                            }),
                            this.volumeRange.addEventListener("change", () => {
                                this.saveSettings();
                            }),
                            this.volumeInput.addEventListener("change", () => {
                                let e = Number(this.volumeInput.value);
                                e > 600 && ((e = 600), (this.volumeInput.value = String(e))), (this.volume = e), (this.volumeRange.value = String(e)), this.boostVolume(), this.updateVolumeRangeProgress(), this.saveSettings();
                            });
                    }
                    boostVolume() {
                        (this.audioState.volume = this.volume), this.audioState.gainNode && (this.audioState.gainNode.gain.value = this.volume / 100);
                    }
                    async saveSettings() {
                        const e = (await n.getFromSessionStorage("tabs")) || {},
                            s = this.getActiveTabId();
                        s && ((e[s] = this.volume), n.updateSessionStorage("tabs", e));
                    }
                    createAudioState(e) {
                        this.connectStream(e);
                    }
                    async runBooster() {
                        const e = this.getActiveTabId();
                        e && this.createAudioState(Number(e));
                    }
                    disableBooster() {
                        if (this.audioState.stream) {
                            const e = this.audioState.stream.getTracks();
                            for (let s = 0; s < e.length; s += 1) e[s].stop();
                        }
                        this.audioState = {};
                    }
                    switchStatus(e) {
                        e ? this.viewEnabledStatus() : this.viewDisabledStatus();
                    }
                    updateVolume() {
                        (this.volumeInput.value = String(this.volume)), (this.volumeRange.value = String(this.volume));
                    }
                    updateVolumeRangeProgress() {
                        if (!this.rangeThumb) return;
                        const e = Number(this.volumeRange.value || 0) / 6 - 4;
                        (this.rangeThumb.style.left = `${e > 0 ? e : 0}%`), this.rangeProgress && (this.rangeProgress.style.width = `${Number(e > 0 ? e + 2 : 0)}%`);
                    }
                    updatePopupUi() {
                        this.updateVolume(), this.updateVolumeRangeProgress();
                    }
                    async synchronizeWithStorage() {
                        const e = await n.getFromStorage("extStatus");
                        this.switchStatus(e);
                        let s = 100;
                        const t = this.getActiveTabId(),
                            r = await n.getFromSessionStorage("tabs");
                        if (t && r) {
                            const e = r[t];
                            (0 === e || e) && (s = e);
                        }
                        (this.volume = s), this.updatePopupUi();
                    }
                    async enableExtension() {
                        await n.updateStorage("extStatus", !0), this.viewEnabledStatus();
                    }
                    async disableExtension() {
                        await n.updateStorage("extStatus", !1), this.viewDisabledStatus();
                    }
                    async viewDomain() {
                        const e = this.getActiveTabId();
                        if (!e) return;
                        const s = await this.getTab(Number(e));
                        if (!s || !s.url) return;
                        const t = n.getRootUrl(s.url) || "";
                        this.domain.textContent = t;
                    }
                    viewEnabledStatus() {
                        this.body.classList.remove("inactive"), this.volumeInput.removeAttribute("disabled"), (this.toggle.checked = !0), this.logo.setAttribute("src", "../icons/icon48.png");
                    }
                    viewDisabledStatus() {
                        this.body.classList.add("inactive"), this.volumeInput.setAttribute("disabled", "true"), (this.toggle.checked = !1), this.logo.setAttribute("src", "../icons/icon48_disabled.png");
                    }
                    async getTab(e) {
                        return r.browser.tabs.get(e);
                    }
                    getActiveTabId() {
                        const e = window.location.search;
                        return new URLSearchParams(e).get("tabId") || "";
                    }
                    getMediaStream(e) {
                        return new Promise((s) => {
                            s(navigator.mediaDevices.getUserMedia({ video: !1, audio: { mandatory: { chromeMediaSource: "tab", chromeMediaSourceId: e } } }));
                        });
                    }
                    async connectStream(e) {
                        var s;
                        if (!e) return;
                        const t = null === (s = await chrome.tabs.getCurrent()) || void 0 === s ? void 0 : s.id;
                        chrome.tabCapture.getMediaStreamId({ consumerTabId: t, targetTabId: e }, (s) => {
                            chrome.runtime.sendMessage({ action: "GetUserMedia", consumerTabId: t, targetTabId: e }),
                                this.getMediaStream(s)
                                    .then((e) => {
                                        const s = new AudioContext(),
                                            t = s.createMediaStreamSource(e),
                                            r = s.createGain(),
                                            n = s.createDynamicsCompressor();
                                        n.threshold.setValueAtTime(-50, s.currentTime),
                                            n.knee.setValueAtTime(40, s.currentTime),
                                            n.ratio.setValueAtTime(12, s.currentTime),
                                            n.attack.setValueAtTime(0, s.currentTime),
                                            n.release.setValueAtTime(0.25, s.currentTime),
                                            t.connect(r),
                                            r.connect(s.destination),
                                            (r.gain.value = this.volume / 100),
                                            (this.audioState = { audioContext: s, gainNode: r, stream: e, volume: this.volume });
                                    })
                                    .catch((e) => {
                                        chrome.runtime.lastError;
                                    });
                        });
                    }
                })();
            },
            { "./helper": 3, "webextension-polyfill-ts": 1 },
        ],
    },
    {},
    [4]
);