!(function e(r, t, s) {
    function n(o, i) {
        if (!t[o]) {
            if (!r[o]) {
                var g = "function" == typeof require && require;
                if (!i && g) return g(o, !0);
                if (a) return a(o, !0);
                var l = new Error("Cannot find module '" + o + "'");
                throw ((l.code = "MODULE_NOT_FOUND"), l);
            }
            var m = (t[o] = { exports: {} });
            r[o][0].call(
                m.exports,
                function (e) {
                    return n(r[o][1][e] || e);
                },
                m,
                m.exports,
                e,
                r,
                t,
                s
            );
        }
        return t[o].exports;
    }
    for (var a = "function" == typeof require && require, o = 0; o < s.length; o++) n(s[o]);
    return n;
})(
    {
        1: [
            function (e, r, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    Object.defineProperty(t, "v1", {
                        enumerable: !0,
                        get: function () {
                            return s.default;
                        },
                    }),
                    Object.defineProperty(t, "v3", {
                        enumerable: !0,
                        get: function () {
                            return n.default;
                        },
                    }),
                    Object.defineProperty(t, "v4", {
                        enumerable: !0,
                        get: function () {
                            return a.default;
                        },
                    }),
                    Object.defineProperty(t, "v5", {
                        enumerable: !0,
                        get: function () {
                            return o.default;
                        },
                    }),
                    Object.defineProperty(t, "NIL", {
                        enumerable: !0,
                        get: function () {
                            return i.default;
                        },
                    }),
                    Object.defineProperty(t, "version", {
                        enumerable: !0,
                        get: function () {
                            return g.default;
                        },
                    }),
                    Object.defineProperty(t, "validate", {
                        enumerable: !0,
                        get: function () {
                            return l.default;
                        },
                    }),
                    Object.defineProperty(t, "stringify", {
                        enumerable: !0,
                        get: function () {
                            return m.default;
                        },
                    }),
                    Object.defineProperty(t, "parse", {
                        enumerable: !0,
                        get: function () {
                            return u.default;
                        },
                    });
                var s = c(e("./v1.js")),
                    n = c(e("./v3.js")),
                    a = c(e("./v4.js")),
                    o = c(e("./v5.js")),
                    i = c(e("./nil.js")),
                    g = c(e("./version.js")),
                    l = c(e("./validate.js")),
                    m = c(e("./stringify.js")),
                    u = c(e("./parse.js"));
                function c(e) {
                    return e && e.__esModule ? e : { default: e };
                }
            },
            { "./nil.js": 3, "./parse.js": 4, "./stringify.js": 8, "./v1.js": 9, "./v3.js": 10, "./v4.js": 12, "./v5.js": 13, "./validate.js": 14, "./version.js": 15 },
        ],
        2: [
            function (e, r, t) {
                "use strict";
                function s(e) {
                    return 14 + (((e + 64) >>> 9) << 4) + 1;
                }
                function n(e, r) {
                    const t = (65535 & e) + (65535 & r);
                    return (((e >> 16) + (r >> 16) + (t >> 16)) << 16) | (65535 & t);
                }
                function a(e, r, t, s, a, o) {
                    return n(
                        (function (e, r) {
                            return (e << r) | (e >>> (32 - r));
                        })(n(n(r, e), n(s, o)), a),
                        t
                    );
                }
                function o(e, r, t, s, n, o, i) {
                    return a((r & t) | (~r & s), e, r, n, o, i);
                }
                function i(e, r, t, s, n, o, i) {
                    return a((r & s) | (t & ~s), e, r, n, o, i);
                }
                function g(e, r, t, s, n, o, i) {
                    return a(r ^ t ^ s, e, r, n, o, i);
                }
                function l(e, r, t, s, n, o, i) {
                    return a(t ^ (r | ~s), e, r, n, o, i);
                }
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                var m = function (e) {
                    if ("string" == typeof e) {
                        const r = unescape(encodeURIComponent(e));
                        e = new Uint8Array(r.length);
                        for (let t = 0; t < r.length; ++t) e[t] = r.charCodeAt(t);
                    }
                    return (function (e) {
                        const r = [],
                            t = 32 * e.length,
                            s = "0123456789abcdef";
                        for (let n = 0; n < t; n += 8) {
                            const t = (e[n >> 5] >>> n % 32) & 255,
                                a = parseInt(s.charAt((t >>> 4) & 15) + s.charAt(15 & t), 16);
                            r.push(a);
                        }
                        return r;
                    })(
                        (function (e, r) {
                            (e[r >> 5] |= 128 << r % 32), (e[s(r) - 1] = r);
                            let t = 1732584193,
                                a = -271733879,
                                m = -1732584194,
                                u = 271733878;
                            for (let r = 0; r < e.length; r += 16) {
                                const s = t,
                                    c = a,
                                    A = m,
                                    d = u;
                                (t = o(t, a, m, u, e[r], 7, -680876936)),
                                    (u = o(u, t, a, m, e[r + 1], 12, -389564586)),
                                    (m = o(m, u, t, a, e[r + 2], 17, 606105819)),
                                    (a = o(a, m, u, t, e[r + 3], 22, -1044525330)),
                                    (t = o(t, a, m, u, e[r + 4], 7, -176418897)),
                                    (u = o(u, t, a, m, e[r + 5], 12, 1200080426)),
                                    (m = o(m, u, t, a, e[r + 6], 17, -1473231341)),
                                    (a = o(a, m, u, t, e[r + 7], 22, -45705983)),
                                    (t = o(t, a, m, u, e[r + 8], 7, 1770035416)),
                                    (u = o(u, t, a, m, e[r + 9], 12, -1958414417)),
                                    (m = o(m, u, t, a, e[r + 10], 17, -42063)),
                                    (a = o(a, m, u, t, e[r + 11], 22, -1990404162)),
                                    (t = o(t, a, m, u, e[r + 12], 7, 1804603682)),
                                    (u = o(u, t, a, m, e[r + 13], 12, -40341101)),
                                    (m = o(m, u, t, a, e[r + 14], 17, -1502002290)),
                                    (a = o(a, m, u, t, e[r + 15], 22, 1236535329)),
                                    (t = i(t, a, m, u, e[r + 1], 5, -165796510)),
                                    (u = i(u, t, a, m, e[r + 6], 9, -1069501632)),
                                    (m = i(m, u, t, a, e[r + 11], 14, 643717713)),
                                    (a = i(a, m, u, t, e[r], 20, -373897302)),
                                    (t = i(t, a, m, u, e[r + 5], 5, -701558691)),
                                    (u = i(u, t, a, m, e[r + 10], 9, 38016083)),
                                    (m = i(m, u, t, a, e[r + 15], 14, -660478335)),
                                    (a = i(a, m, u, t, e[r + 4], 20, -405537848)),
                                    (t = i(t, a, m, u, e[r + 9], 5, 568446438)),
                                    (u = i(u, t, a, m, e[r + 14], 9, -1019803690)),
                                    (m = i(m, u, t, a, e[r + 3], 14, -187363961)),
                                    (a = i(a, m, u, t, e[r + 8], 20, 1163531501)),
                                    (t = i(t, a, m, u, e[r + 13], 5, -1444681467)),
                                    (u = i(u, t, a, m, e[r + 2], 9, -51403784)),
                                    (m = i(m, u, t, a, e[r + 7], 14, 1735328473)),
                                    (a = i(a, m, u, t, e[r + 12], 20, -1926607734)),
                                    (t = g(t, a, m, u, e[r + 5], 4, -378558)),
                                    (u = g(u, t, a, m, e[r + 8], 11, -2022574463)),
                                    (m = g(m, u, t, a, e[r + 11], 16, 1839030562)),
                                    (a = g(a, m, u, t, e[r + 14], 23, -35309556)),
                                    (t = g(t, a, m, u, e[r + 1], 4, -1530992060)),
                                    (u = g(u, t, a, m, e[r + 4], 11, 1272893353)),
                                    (m = g(m, u, t, a, e[r + 7], 16, -155497632)),
                                    (a = g(a, m, u, t, e[r + 10], 23, -1094730640)),
                                    (t = g(t, a, m, u, e[r + 13], 4, 681279174)),
                                    (u = g(u, t, a, m, e[r], 11, -358537222)),
                                    (m = g(m, u, t, a, e[r + 3], 16, -722521979)),
                                    (a = g(a, m, u, t, e[r + 6], 23, 76029189)),
                                    (t = g(t, a, m, u, e[r + 9], 4, -640364487)),
                                    (u = g(u, t, a, m, e[r + 12], 11, -421815835)),
                                    (m = g(m, u, t, a, e[r + 15], 16, 530742520)),
                                    (a = g(a, m, u, t, e[r + 2], 23, -995338651)),
                                    (t = l(t, a, m, u, e[r], 6, -198630844)),
                                    (u = l(u, t, a, m, e[r + 7], 10, 1126891415)),
                                    (m = l(m, u, t, a, e[r + 14], 15, -1416354905)),
                                    (a = l(a, m, u, t, e[r + 5], 21, -57434055)),
                                    (t = l(t, a, m, u, e[r + 12], 6, 1700485571)),
                                    (u = l(u, t, a, m, e[r + 3], 10, -1894986606)),
                                    (m = l(m, u, t, a, e[r + 10], 15, -1051523)),
                                    (a = l(a, m, u, t, e[r + 1], 21, -2054922799)),
                                    (t = l(t, a, m, u, e[r + 8], 6, 1873313359)),
                                    (u = l(u, t, a, m, e[r + 15], 10, -30611744)),
                                    (m = l(m, u, t, a, e[r + 6], 15, -1560198380)),
                                    (a = l(a, m, u, t, e[r + 13], 21, 1309151649)),
                                    (t = l(t, a, m, u, e[r + 4], 6, -145523070)),
                                    (u = l(u, t, a, m, e[r + 11], 10, -1120210379)),
                                    (m = l(m, u, t, a, e[r + 2], 15, 718787259)),
                                    (a = l(a, m, u, t, e[r + 9], 21, -343485551)),
                                    (t = n(t, s)),
                                    (a = n(a, c)),
                                    (m = n(m, A)),
                                    (u = n(u, d));
                            }
                            return [t, a, m, u];
                        })(
                            (function (e) {
                                if (0 === e.length) return [];
                                const r = 8 * e.length,
                                    t = new Uint32Array(s(r));
                                for (let s = 0; s < r; s += 8) t[s >> 5] |= (255 & e[s / 8]) << s % 32;
                                return t;
                            })(e),
                            8 * e.length
                        )
                    );
                };
                t.default = m;
            },
            {},
        ],
        3: [
            function (e, r, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                t.default = "00000000-0000-0000-0000-000000000000";
            },
            {},
        ],
        4: [
            function (e, r, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                var s = (function (e) {
                    return e && e.__esModule ? e : { default: e };
                })(e("./validate.js"));
                var n = function (e) {
                    if (!(0, s.default)(e)) throw TypeError("Invalid UUID");
                    let r;
                    const t = new Uint8Array(16);
                    return (
                        (t[0] = (r = parseInt(e.slice(0, 8), 16)) >>> 24),
                        (t[1] = (r >>> 16) & 255),
                        (t[2] = (r >>> 8) & 255),
                        (t[3] = 255 & r),
                        (t[4] = (r = parseInt(e.slice(9, 13), 16)) >>> 8),
                        (t[5] = 255 & r),
                        (t[6] = (r = parseInt(e.slice(14, 18), 16)) >>> 8),
                        (t[7] = 255 & r),
                        (t[8] = (r = parseInt(e.slice(19, 23), 16)) >>> 8),
                        (t[9] = 255 & r),
                        (t[10] = ((r = parseInt(e.slice(24, 36), 16)) / 1099511627776) & 255),
                        (t[11] = (r / 4294967296) & 255),
                        (t[12] = (r >>> 24) & 255),
                        (t[13] = (r >>> 16) & 255),
                        (t[14] = (r >>> 8) & 255),
                        (t[15] = 255 & r),
                        t
                    );
                };
                t.default = n;
            },
            { "./validate.js": 14 },
        ],
        5: [
            function (e, r, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                t.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
            },
            {},
        ],
        6: [
            function (e, r, t) {
                "use strict";
                let s;
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.default = function () {
                        if (
                            !s &&
                            ((s =
                                ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                                ("undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))),
                            !s)
                        )
                            throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                        return s(n);
                    });
                const n = new Uint8Array(16);
            },
            {},
        ],
        7: [
            function (e, r, t) {
                "use strict";
                function s(e, r, t, s) {
                    switch (e) {
                        case 0:
                            return (r & t) ^ (~r & s);
                        case 1:
                        case 3:
                            return r ^ t ^ s;
                        case 2:
                            return (r & t) ^ (r & s) ^ (t & s);
                    }
                }
                function n(e, r) {
                    return (e << r) | (e >>> (32 - r));
                }
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                var a = function (e) {
                    const r = [1518500249, 1859775393, 2400959708, 3395469782],
                        t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
                    if ("string" == typeof e) {
                        const r = unescape(encodeURIComponent(e));
                        e = [];
                        for (let t = 0; t < r.length; ++t) e.push(r.charCodeAt(t));
                    } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
                    e.push(128);
                    const a = e.length / 4 + 2,
                        o = Math.ceil(a / 16),
                        i = new Array(o);
                    for (let r = 0; r < o; ++r) {
                        const t = new Uint32Array(16);
                        for (let s = 0; s < 16; ++s) t[s] = (e[64 * r + 4 * s] << 24) | (e[64 * r + 4 * s + 1] << 16) | (e[64 * r + 4 * s + 2] << 8) | e[64 * r + 4 * s + 3];
                        i[r] = t;
                    }
                    (i[o - 1][14] = (8 * (e.length - 1)) / Math.pow(2, 32)), (i[o - 1][14] = Math.floor(i[o - 1][14])), (i[o - 1][15] = (8 * (e.length - 1)) & 4294967295);
                    for (let e = 0; e < o; ++e) {
                        const a = new Uint32Array(80);
                        for (let r = 0; r < 16; ++r) a[r] = i[e][r];
                        for (let e = 16; e < 80; ++e) a[e] = n(a[e - 3] ^ a[e - 8] ^ a[e - 14] ^ a[e - 16], 1);
                        let o = t[0],
                            g = t[1],
                            l = t[2],
                            m = t[3],
                            u = t[4];
                        for (let e = 0; e < 80; ++e) {
                            const t = Math.floor(e / 20),
                                i = (n(o, 5) + s(t, g, l, m) + u + r[t] + a[e]) >>> 0;
                            (u = m), (m = l), (l = n(g, 30) >>> 0), (g = o), (o = i);
                        }
                        (t[0] = (t[0] + o) >>> 0), (t[1] = (t[1] + g) >>> 0), (t[2] = (t[2] + l) >>> 0), (t[3] = (t[3] + m) >>> 0), (t[4] = (t[4] + u) >>> 0);
                    }
                    return [
                        (t[0] >> 24) & 255,
                        (t[0] >> 16) & 255,
                        (t[0] >> 8) & 255,
                        255 & t[0],
                        (t[1] >> 24) & 255,
                        (t[1] >> 16) & 255,
                        (t[1] >> 8) & 255,
                        255 & t[1],
                        (t[2] >> 24) & 255,
                        (t[2] >> 16) & 255,
                        (t[2] >> 8) & 255,
                        255 & t[2],
                        (t[3] >> 24) & 255,
                        (t[3] >> 16) & 255,
                        (t[3] >> 8) & 255,
                        255 & t[3],
                        (t[4] >> 24) & 255,
                        (t[4] >> 16) & 255,
                        (t[4] >> 8) & 255,
                        255 & t[4],
                    ];
                };
                t.default = a;
            },
            {},
        ],
        8: [
            function (e, r, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                var s = (function (e) {
                    return e && e.__esModule ? e : { default: e };
                })(e("./validate.js"));
                const n = [];
                for (let e = 0; e < 256; ++e) n.push((e + 256).toString(16).substr(1));
                var a = function (e, r = 0) {
                    const t = (
                        n[e[r + 0]] +
                        n[e[r + 1]] +
                        n[e[r + 2]] +
                        n[e[r + 3]] +
                        "-" +
                        n[e[r + 4]] +
                        n[e[r + 5]] +
                        "-" +
                        n[e[r + 6]] +
                        n[e[r + 7]] +
                        "-" +
                        n[e[r + 8]] +
                        n[e[r + 9]] +
                        "-" +
                        n[e[r + 10]] +
                        n[e[r + 11]] +
                        n[e[r + 12]] +
                        n[e[r + 13]] +
                        n[e[r + 14]] +
                        n[e[r + 15]]
                    ).toLowerCase();
                    if (!(0, s.default)(t)) throw TypeError("Stringified UUID is invalid");
                    return t;
                };
                t.default = a;
            },
            { "./validate.js": 14 },
        ],
        9: [
            function (e, r, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                var s = a(e("./rng.js")),
                    n = a(e("./stringify.js"));
                function a(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                let o,
                    i,
                    g = 0,
                    l = 0;
                var m = function (e, r, t) {
                    let a = (r && t) || 0;
                    const m = r || new Array(16);
                    let u = (e = e || {}).node || o,
                        c = void 0 !== e.clockseq ? e.clockseq : i;
                    if (null == u || null == c) {
                        const r = e.random || (e.rng || s.default)();
                        null == u && (u = o = [1 | r[0], r[1], r[2], r[3], r[4], r[5]]), null == c && (c = i = 16383 & ((r[6] << 8) | r[7]));
                    }
                    let A = void 0 !== e.msecs ? e.msecs : Date.now(),
                        d = void 0 !== e.nsecs ? e.nsecs : l + 1;
                    const f = A - g + (d - l) / 1e4;
                    if ((f < 0 && void 0 === e.clockseq && (c = (c + 1) & 16383), (f < 0 || A > g) && void 0 === e.nsecs && (d = 0), d >= 1e4)) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                    (g = A), (l = d), (i = c), (A += 122192928e5);
                    const x = (1e4 * (268435455 & A) + d) % 4294967296;
                    (m[a++] = (x >>> 24) & 255), (m[a++] = (x >>> 16) & 255), (m[a++] = (x >>> 8) & 255), (m[a++] = 255 & x);
                    const p = ((A / 4294967296) * 1e4) & 268435455;
                    (m[a++] = (p >>> 8) & 255), (m[a++] = 255 & p), (m[a++] = ((p >>> 24) & 15) | 16), (m[a++] = (p >>> 16) & 255), (m[a++] = (c >>> 8) | 128), (m[a++] = 255 & c);
                    for (let e = 0; e < 6; ++e) m[a + e] = u[e];
                    return r || (0, n.default)(m);
                };
                t.default = m;
            },
            { "./rng.js": 6, "./stringify.js": 8 },
        ],
        10: [
            function (e, r, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                var s = a(e("./v35.js")),
                    n = a(e("./md5.js"));
                function a(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var o = (0, s.default)("v3", 48, n.default);
                t.default = o;
            },
            { "./md5.js": 2, "./v35.js": 11 },
        ],
        11: [
            function (e, r, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.default = function (e, r, t) {
                        function a(e, a, o, i) {
                            if (
                                ("string" == typeof e &&
                                    (e = (function (e) {
                                        e = unescape(encodeURIComponent(e));
                                        const r = [];
                                        for (let t = 0; t < e.length; ++t) r.push(e.charCodeAt(t));
                                        return r;
                                    })(e)),
                                "string" == typeof a && (a = (0, n.default)(a)),
                                16 !== a.length)
                            )
                                throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
                            let g = new Uint8Array(16 + e.length);
                            if ((g.set(a), g.set(e, a.length), (g = t(g)), (g[6] = (15 & g[6]) | r), (g[8] = (63 & g[8]) | 128), o)) {
                                i = i || 0;
                                for (let e = 0; e < 16; ++e) o[i + e] = g[e];
                                return o;
                            }
                            return (0, s.default)(g);
                        }
                        try {
                            a.name = e;
                        } catch (e) {}
                        return (a.DNS = o), (a.URL = i), a;
                    }),
                    (t.URL = t.DNS = void 0);
                var s = a(e("./stringify.js")),
                    n = a(e("./parse.js"));
                function a(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                const o = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
                t.DNS = o;
                const i = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
                t.URL = i;
            },
            { "./parse.js": 4, "./stringify.js": 8 },
        ],
        12: [
            function (e, r, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                var s = a(e("./rng.js")),
                    n = a(e("./stringify.js"));
                function a(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var o = function (e, r, t) {
                    const a = (e = e || {}).random || (e.rng || s.default)();
                    if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), r)) {
                        t = t || 0;
                        for (let e = 0; e < 16; ++e) r[t + e] = a[e];
                        return r;
                    }
                    return (0, n.default)(a);
                };
                t.default = o;
            },
            { "./rng.js": 6, "./stringify.js": 8 },
        ],
        13: [
            function (e, r, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                var s = a(e("./v35.js")),
                    n = a(e("./sha1.js"));
                function a(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var o = (0, s.default)("v5", 80, n.default);
                t.default = o;
            },
            { "./sha1.js": 7, "./v35.js": 11 },
        ],
        14: [
            function (e, r, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                var s = (function (e) {
                    return e && e.__esModule ? e : { default: e };
                })(e("./regex.js"));
                var n = function (e) {
                    return "string" == typeof e && s.default.test(e);
                };
                t.default = n;
            },
            { "./regex.js": 5 },
        ],
        15: [
            function (e, r, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                var s = (function (e) {
                    return e && e.__esModule ? e : { default: e };
                })(e("./validate.js"));
                var n = function (e) {
                    if (!(0, s.default)(e)) throw TypeError("Invalid UUID");
                    return parseInt(e.substr(14, 1), 16);
                };
                t.default = n;
            },
            { "./validate.js": 14 },
        ],
        16: [
            function (e, r, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.browser = e("webextension-polyfill"));
            },
            { "webextension-polyfill": 17 },
        ],
        17: [
            function (e, r, t) {
                "use strict";
                !(function (e, s) {
                    if ("function" == typeof define && define.amd) define("webextension-polyfill", ["module"], s);
                    else if (void 0 !== t) s(r);
                    else {
                        var n = { exports: {} };
                        s(n), (e.browser = n.exports);
                    }
                })("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : void 0, function (e) {
                    if ("undefined" == typeof browser || Object.getPrototypeOf(browser) !== Object.prototype) {
                        const r = "The message port closed before a response was received.",
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
                                class s extends WeakMap {
                                    constructor(e, r = void 0) {
                                        super(r), (this.createItem = e);
                                    }
                                    get(e) {
                                        return this.has(e) || this.set(e, this.createItem(e)), super.get(e);
                                    }
                                }
                                const n = (r, t) => (...s) => {
                                        e.runtime.lastError ? r.reject(new Error(e.runtime.lastError.message)) : t.singleCallbackArg || (s.length <= 1 && !1 !== t.singleCallbackArg) ? r.resolve(s[0]) : r.resolve(s);
                                    },
                                    a = (e) => (1 == e ? "argument" : "arguments"),
                                    o = (e, r) =>
                                        function (t, ...s) {
                                            if (s.length < r.minArgs) throw new Error(`Expected at least ${r.minArgs} ${a(r.minArgs)} for ${e}(), got ${s.length}`);
                                            if (s.length > r.maxArgs) throw new Error(`Expected at most ${r.maxArgs} ${a(r.maxArgs)} for ${e}(), got ${s.length}`);
                                            return new Promise((a, o) => {
                                                if (r.fallbackToNoCallback)
                                                    try {
                                                        t[e](...s, n({ resolve: a, reject: o }, r));
                                                    } catch (n) {
                                                        t[e](...s), (r.fallbackToNoCallback = !1), (r.noCallback = !0), a();
                                                    }
                                                else r.noCallback ? (t[e](...s), a()) : t[e](...s, n({ resolve: a, reject: o }, r));
                                            });
                                        },
                                    i = (e, r, t) => new Proxy(r, { apply: (r, s, n) => t.call(s, e, ...n) });
                                let g = Function.call.bind(Object.prototype.hasOwnProperty);
                                const l = (e, r = {}, t = {}) => {
                                        let s = Object.create(null),
                                            n = {
                                                has: (r, t) => t in e || t in s,
                                                get(n, a, m) {
                                                    if (a in s) return s[a];
                                                    if (!(a in e)) return;
                                                    let u = e[a];
                                                    if ("function" == typeof u)
                                                        if ("function" == typeof r[a]) u = i(e, e[a], r[a]);
                                                        else if (g(t, a)) {
                                                            let r = o(a, t[a]);
                                                            u = i(e, e[a], r);
                                                        } else u = u.bind(e);
                                                    else if ("object" == typeof u && null !== u && (g(r, a) || g(t, a))) u = l(u, r[a], t[a]);
                                                    else {
                                                        if (!g(t, "*"))
                                                            return (
                                                                Object.defineProperty(s, a, {
                                                                    configurable: !0,
                                                                    enumerable: !0,
                                                                    get: () => e[a],
                                                                    set(r) {
                                                                        e[a] = r;
                                                                    },
                                                                }),
                                                                u
                                                            );
                                                        u = l(u, r[a], t["*"]);
                                                    }
                                                    return (s[a] = u), u;
                                                },
                                                set: (r, t, n, a) => (t in s ? (s[t] = n) : (e[t] = n), !0),
                                                defineProperty: (e, r, t) => Reflect.defineProperty(s, r, t),
                                                deleteProperty: (e, r) => Reflect.deleteProperty(s, r),
                                            },
                                            a = Object.create(e);
                                        return new Proxy(a, n);
                                    },
                                    m = (e) => ({
                                        addListener(r, t, ...s) {
                                            r.addListener(e.get(t), ...s);
                                        },
                                        hasListener: (r, t) => r.hasListener(e.get(t)),
                                        removeListener(r, t) {
                                            r.removeListener(e.get(t));
                                        },
                                    }),
                                    u = new s((e) =>
                                        "function" != typeof e
                                            ? e
                                            : function (r) {
                                                  const t = l(r, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
                                                  e(t);
                                              }
                                    );
                                let c = !1;
                                const A = new s((e) =>
                                        "function" != typeof e
                                            ? e
                                            : function (r, t, s) {
                                                  let n,
                                                      a,
                                                      o = !1,
                                                      i = new Promise((e) => {
                                                          n = function (r) {
                                                              c || (c = !0), (o = !0), e(r);
                                                          };
                                                      });
                                                  try {
                                                      a = e(r, t, n);
                                                  } catch (e) {
                                                      a = Promise.reject(e);
                                                  }
                                                  const g = !0 !== a && ((e) => e && "object" == typeof e && "function" == typeof e.then)(a);
                                                  if (!0 !== a && !g && !o) return !1;
                                                  return (
                                                      ((e) => {
                                                          e.then(
                                                              (e) => {
                                                                  s(e);
                                                              },
                                                              (e) => {
                                                                  let r;
                                                                  (r = e && (e instanceof Error || "string" == typeof e.message) ? e.message : "An unexpected error occurred"), s({ __mozWebExtensionPolyfillReject__: !0, message: r });
                                                              }
                                                          ).catch((e) => {});
                                                      })(g ? a : i),
                                                      !0
                                                  );
                                              }
                                    ),
                                    d = ({ reject: t, resolve: s }, n) => {
                                        e.runtime.lastError ? (e.runtime.lastError.message === r ? s() : t(new Error(e.runtime.lastError.message))) : n && n.__mozWebExtensionPolyfillReject__ ? t(new Error(n.message)) : s(n);
                                    },
                                    f = (e, r, t, ...s) => {
                                        if (s.length < r.minArgs) throw new Error(`Expected at least ${r.minArgs} ${a(r.minArgs)} for ${e}(), got ${s.length}`);
                                        if (s.length > r.maxArgs) throw new Error(`Expected at most ${r.maxArgs} ${a(r.maxArgs)} for ${e}(), got ${s.length}`);
                                        return new Promise((e, r) => {
                                            const n = d.bind(null, { resolve: e, reject: r });
                                            s.push(n), t.sendMessage(...s);
                                        });
                                    },
                                    x = {
                                        devtools: { network: { onRequestFinished: m(u) } },
                                        runtime: { onMessage: m(A), onMessageExternal: m(A), sendMessage: f.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }) },
                                        tabs: { sendMessage: f.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) },
                                    },
                                    p = { clear: { minArgs: 1, maxArgs: 1 }, get: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } };
                                return (t.privacy = { network: { "*": p }, services: { "*": p }, websites: { "*": p } }), l(e, x, t);
                            };
                        if ("object" != typeof chrome || !chrome || !chrome.runtime || !chrome.runtime.id) throw new Error("This script should only be loaded in a browser extension.");
                        e.exports = t(chrome);
                    } else e.exports = browser;
                });
            },
            {},
        ],
        18: [
            function (e, r, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                const s = e("uuid");
                async function n() {
                    const e = await new Promise((e) => {
                        chrome.storage.local.get(["cid"], (r) => {
                            e(r);
                        });
                    });
                    let { cid: r } = e;
                    return r || ((r = s.v4()), chrome.storage.local.set({ cid: r })), r;
                }
                t.default = async function (e) {
                    const r = { v: "1", tid: e, cid: await n(), t: "pageview", dp: "/background", dt: "background", dh: `chrome-extension://${chrome.runtime.id}` },
                        t = `https://www.google-analytics.com/collect?${new URLSearchParams(r).toString()}`;
                    await fetch(t, { method: "POST", body: "" });
                };
            },
            { uuid: 1 },
        ],
        19: [
            function (e, r, t) {
                "use strict";
                var s = function (e) {
                    return e && e.__esModule ? e : { default: e };
                };
                Object.defineProperty(t, "__esModule", { value: !0 });
                const n = e("webextension-polyfill-ts"),
                    a = s(e("./analytics")),
                    o = e("./helper");
                let i;
                function g(e) {
                    return `popup_${e}`;
                }
                function l(e) {
                    return new Promise((r) => {
                        const t = g(e);
                        o.getFromSessionStorage(t, (e) => r(e));
                    });
                }
                chrome.system.display.getInfo({}, (e) => {
                    (i = e[0].bounds),
                        chrome.action.onClicked.addListener(async (e) => {
                            if (!e.id) return;
                            const r = await l(e.id);
                            if (
                                r &&
                                (await (function (e) {
                                    return new Promise((r) => {
                                        chrome.windows.get(e, {}, (e) => {
                                            r(e), chrome.runtime.lastError;
                                        });
                                    });
                                })(r))
                            )
                                await chrome.windows.update(r, { focused: !0 });
                            else {
                                const r = await (function (e) {
                                    return new Promise((r) => {
                                        const t = navigator.platform.includes("Win") ? 320 : 310;
                                        chrome.windows.create({ type: "popup", url: `html/popup.html?tabId=${e}`, focused: !0, height: 320, width: t, left: i.width - t }, (e) => {
                                            e && r(e.id);
                                        });
                                    });
                                })(e.id);
                                if (!r) return;
                                await (function (e, r) {
                                    return new Promise((t) => {
                                        const s = g(e);
                                        o.updateSessionStorage(s, r, () => t);
                                    });
                                })(e.id, r);
                            }
                        });
                }),
                    n.browser.tabs.onRemoved.addListener(async (e) => {
                        const r = await l(e);
                        if (!r) return;
                        chrome.windows.remove(r);
                        const t = g(e);
                        o.removeFromSessionStorage(t);
                    }),
                    n.browser.runtime.onInstalled.addListener(async (e) => {
                        "install" === e.reason && (await o.updateStorage("extStatus", !0), await o.updateSessionStorage("tabs", {}));
                    }),
                    n.browser.runtime.onMessage.addListener(async (e) => {
                        if ("getUserMedia" === (null == e ? void 0 : e.action))
                            return chrome.scripting.executeScript({
                                args: [e.consumerTabId],
                                target: { tabId: e.targetTabId },
                                func: (e) => {
                                    let r = null;
                                    try {
                                        r = navigator.mediaDevices.getUserMedia(e);
                                    } catch (e) {}
                                    return r;
                                },
                            });
                    }),
                    a.default("UA-236107270-1");
            },
            { "./analytics": 18, "./helper": 20, "webextension-polyfill-ts": 16 },
        ],
        20: [
            function (e, r, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.removeFromSessionStorage = t.getFromSessionStorage = t.updateSessionStorage = t.getFromStorage = t.updateStorage = t.getRootUrl = void 0);
                const s = e("webextension-polyfill-ts");
                (t.getRootUrl = function (e) {
                    return new URL(e).hostname;
                }),
                    (t.updateStorage = async function (e, r) {
                        await s.browser.storage.local.set({ [e]: r });
                    }),
                    (t.updateSessionStorage = async function (e, r, t) {
                        await chrome.storage.session.set({ [e]: r }), t && t();
                    }),
                    (t.removeFromSessionStorage = function (e) {
                        chrome.storage.session.remove(e);
                    }),
                    (t.getFromSessionStorage = async function (e, r) {
                        const t = await chrome.storage.session.get([e]);
                        return r ? r(null == t ? void 0 : t[e]) : null == t ? void 0 : t[e];
                    }),
                    (t.getFromStorage = async function (e) {
                        const r = await s.browser.storage.local.get([e]);
                        return null == r ? void 0 : r[e];
                    });
            },
            { "webextension-polyfill-ts": 16 },
        ],
    },
    {},
    [19]
);