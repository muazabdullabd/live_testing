(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[89], {
    42: function(e, t, r) {
        "use strict";
        var n = r(5786)
          , o = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        };
        e.exports = function(e, t) {
            var r, i, a, l, c, u, s, f, p = !1;
            t || (t = {}),
            a = t.debug || !1;
            try {
                if (c = n(),
                u = document.createRange(),
                s = document.getSelection(),
                (f = document.createElement("span")).textContent = e,
                f.ariaHidden = "true",
                f.style.all = "unset",
                f.style.position = "fixed",
                f.style.top = 0,
                f.style.clip = "rect(0, 0, 0, 0)",
                f.style.whiteSpace = "pre",
                f.style.webkitUserSelect = "text",
                f.style.MozUserSelect = "text",
                f.style.msUserSelect = "text",
                f.style.userSelect = "text",
                f.addEventListener("copy", function(r) {
                    if (r.stopPropagation(),
                    t.format) {
                        if (r.preventDefault(),
                        void 0 === r.clipboardData) {
                            a && console.warn("unable to use e.clipboardData"),
                            a && console.warn("trying IE specific stuff"),
                            window.clipboardData.clearData();
                            var n = o[t.format] || o.default;
                            window.clipboardData.setData(n, e)
                        } else
                            r.clipboardData.clearData(),
                            r.clipboardData.setData(t.format, e)
                    }
                    t.onCopy && (r.preventDefault(),
                    t.onCopy(r.clipboardData))
                }),
                document.body.appendChild(f),
                u.selectNodeContents(f),
                s.addRange(u),
                !document.execCommand("copy"))
                    throw Error("copy command was unsuccessful");
                p = !0
            } catch (n) {
                a && console.error("unable to copy using execCommand: ", n),
                a && console.warn("trying IE specific stuff");
                try {
                    window.clipboardData.setData(t.format || "text", e),
                    t.onCopy && t.onCopy(window.clipboardData),
                    p = !0
                } catch (n) {
                    a && console.error("unable to copy using clipboardData: ", n),
                    a && console.error("falling back to prompt"),
                    r = "message"in t ? t.message : "Copy to clipboard: #{key}, Enter",
                    i = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C",
                    l = r.replace(/#{\s*key\s*}/g, i),
                    window.prompt(l, e)
                }
            } finally {
                s && ("function" == typeof s.removeRange ? s.removeRange(u) : s.removeAllRanges()),
                f && document.body.removeChild(f),
                c()
            }
            return p
        }
    },
    7586: function(e, t, r) {
        "use strict";
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.CopyToClipboard = void 0;
        var o = l(r(2265))
          , i = l(r(42))
          , a = ["text", "onCopy", "options", "children"];
        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function c(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? c(Object(r), !0).forEach(function(t) {
                    d(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        function s(e, t) {
            return (s = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function f(e) {
            if (void 0 === e)
                throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function p(e) {
            return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function d(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var h = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && s(e, t)
            }(c, e);
            var t, r, l = (t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, r = p(c);
                return e = t ? Reflect.construct(r, arguments, p(this).constructor) : r.apply(this, arguments),
                function(e, t) {
                    if (t && ("object" === n(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw TypeError("Derived constructors may only return object or undefined");
                    return f(e)
                }(this, e)
            }
            );
            function c() {
                var e;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw TypeError("Cannot call a class as a function")
                }(this, c);
                for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                return d(f(e = l.call.apply(l, [this].concat(r))), "onClick", function(t) {
                    var r = e.props
                      , n = r.text
                      , a = r.onCopy
                      , l = r.children
                      , c = r.options
                      , u = o.default.Children.only(l)
                      , s = (0,
                    i.default)(n, c);
                    a && a(n, s),
                    u && u.props && "function" == typeof u.props.onClick && u.props.onClick(t)
                }),
                e
            }
            return r = [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.text,
                    e.onCopy,
                    e.options,
                    e.children)
                      , r = function(e, t) {
                        if (null == e)
                            return {};
                        var r, n, o = function(e, t) {
                            if (null == e)
                                return {};
                            var r, n, o = {}, i = Object.keys(e);
                            for (n = 0; n < i.length; n++)
                                r = i[n],
                                t.indexOf(r) >= 0 || (o[r] = e[r]);
                            return o
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < i.length; n++)
                                r = i[n],
                                !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                        }
                        return o
                    }(e, a)
                      , n = o.default.Children.only(t);
                    return o.default.cloneElement(n, u(u({}, r), {}, {
                        onClick: this.onClick
                    }))
                }
            }],
            function(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }(c.prototype, r),
            Object.defineProperty(c, "prototype", {
                writable: !1
            }),
            c
        }(o.default.PureComponent);
        t.CopyToClipboard = h,
        d(h, "defaultProps", {
            onCopy: void 0,
            options: void 0
        })
    },
    5789: function(e, t, r) {
        "use strict";
        var n = r(7586).CopyToClipboard;
        n.CopyToClipboard = n,
        e.exports = n
    },
    5786: function(e) {
        e.exports = function() {
            var e = document.getSelection();
            if (!e.rangeCount)
                return function() {}
                ;
            for (var t = document.activeElement, r = [], n = 0; n < e.rangeCount; n++)
                r.push(e.getRangeAt(n));
            switch (t.tagName.toUpperCase()) {
            case "INPUT":
            case "TEXTAREA":
                t.blur();
                break;
            default:
                t = null
            }
            return e.removeAllRanges(),
            function() {
                "Caret" === e.type && e.removeAllRanges(),
                e.rangeCount || r.forEach(function(t) {
                    e.addRange(t)
                }),
                t && t.focus()
            }
        }
    },
    4182: function(e, t, r) {
        "use strict";
        let n, o, i, a;
        r.d(t, {
            ry: function() {
                return ec
            }
        }),
        Object.prototype.hasOwnProperty,
        n = function(e) {
            if ("u" > typeof require)
                return require.apply(this, arguments);
            throw Error('Dynamic require of "' + e + '" is not supported')
        }
        ,
        "u" > typeof require ? require : "u" > typeof Proxy && new Proxy(n,{
            get: (e, t) => ("u" > typeof require ? require : e)[t]
        });
        var l = (o = () => {}
        ,
        () => (o && (i = o(o = 0)),
        i));
        l();
        let c = ( () => {
            let e = 0
              , t = () => `0000${(1679616 * Math.random() << 0).toString(36)}`.slice(-4);
            return () => (e += 1,
            `u${t()}${e}`)
        }
        )();
        function u(e) {
            let t = [];
            for (let r = 0, n = e.length; r < n; r++)
                t.push(e[r]);
            return t
        }
        function s(e, t) {
            let r = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
            return r ? parseFloat(r.replace("px", "")) : 0
        }
        function f(e, t={}) {
            return {
                width: t.width || function(e) {
                    let t = s(e, "border-left-width")
                      , r = s(e, "border-right-width");
                    return e.clientWidth + t + r
                }(e),
                height: t.height || function(e) {
                    let t = s(e, "border-top-width")
                      , r = s(e, "border-bottom-width");
                    return e.clientHeight + t + r
                }(e)
            }
        }
        function p(e) {
            return new Promise( (t, r) => {
                let n = new Image;
                n.decode = () => t(n),
                n.onload = () => t(n),
                n.onerror = r,
                n.crossOrigin = "anonymous",
                n.decoding = "async",
                n.src = e
            }
            )
        }
        async function d(e) {
            return Promise.resolve().then( () => new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(e => `data:image/svg+xml;charset=utf-8,${e}`)
        }
        async function h(e, t, r) {
            let n = "http://www.w3.org/2000/svg"
              , o = document.createElementNS(n, "svg")
              , i = document.createElementNS(n, "foreignObject");
            return o.setAttribute("width", `${t}`),
            o.setAttribute("height", `${r}`),
            o.setAttribute("viewBox", `0 0 ${t} ${r}`),
            i.setAttribute("width", "100%"),
            i.setAttribute("height", "100%"),
            i.setAttribute("x", "0"),
            i.setAttribute("y", "0"),
            i.setAttribute("externalResourcesRequired", "true"),
            o.appendChild(i),
            i.appendChild(e),
            d(o)
        }
        let y = (e, t) => {
            if (e instanceof t)
                return !0;
            let r = Object.getPrototypeOf(e);
            return null !== r && (r.constructor.name === t.name || y(r, t))
        }
        ;
        function g(e, t, r) {
            let n = window.getComputedStyle(e, r)
              , o = n.getPropertyValue("content");
            if ("" === o || "none" === o)
                return;
            let i = c();
            try {
                t.className = `${t.className} ${i}`
            } catch (e) {
                return
            }
            let a = document.createElement("style");
            a.appendChild(function(e, t, r) {
                let n = `.${e}:${t}`
                  , o = r.cssText ? function(e) {
                    let t = e.getPropertyValue("content");
                    return `${e.cssText} content: '${t.replace(/'|"/g, "")}';`
                }(r) : u(r).map(e => {
                    let t = r.getPropertyValue(e)
                      , n = r.getPropertyPriority(e);
                    return `${e}: ${t}${n ? " !important" : ""};`
                }
                ).join(" ");
                return document.createTextNode(`${n}{${o}}`)
            }(i, r, n)),
            t.appendChild(a)
        }
        let m = "application/font-woff"
          , w = "image/jpeg"
          , b = {
            woff: m,
            woff2: m,
            ttf: "application/font-truetype",
            eot: "application/vnd.ms-fontobject",
            png: "image/png",
            jpg: w,
            jpeg: w,
            gif: "image/gif",
            tiff: "image/tiff",
            svg: "image/svg+xml",
            webp: "image/webp"
        };
        function v(e) {
            return b[(function(e) {
                let t = /\.([^./]*?)$/g.exec(e);
                return t ? t[1] : ""
            }
            )(e).toLowerCase()] || ""
        }
        function O(e) {
            return -1 !== e.search(/^(data:)/)
        }
        function C(e, t) {
            return `data:${t};base64,${e}`
        }
        async function E(e, t, r) {
            let n = await fetch(e, t);
            if (404 === n.status)
                throw Error(`Resource "${n.url}" not found`);
            let o = await n.blob();
            return new Promise( (e, t) => {
                let i = new FileReader;
                i.onerror = t,
                i.onloadend = () => {
                    try {
                        e(r({
                            res: n,
                            result: i.result
                        }))
                    } catch (e) {
                        t(e)
                    }
                }
                ,
                i.readAsDataURL(o)
            }
            )
        }
        let S = {};
        async function P(e, t, r) {
            var n, o, i;
            let a, l;
            let c = (n = e,
            o = t,
            i = r.includeQueryParams,
            l = n.replace(/\?.*/, ""),
            i && (l = n),
            /ttf|otf|eot|woff2?/i.test(l) && (l = l.replace(/.*\//, "")),
            o ? `[${o}]${l}` : l);
            if (null != S[c])
                return S[c];
            r.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + new Date().getTime());
            try {
                let n = await E(e, r.fetchRequestInit, ({res: e, result: r}) => (t || (t = e.headers.get("Content-Type") || ""),
                r.split(/,/)[1]));
                a = C(n, t)
            } catch (n) {
                a = r.imagePlaceholder || "";
                let t = `Failed to fetch resource: ${e}`;
                n && (t = "string" == typeof n ? n : n.message),
                t && console.warn(t)
            }
            return S[c] = a,
            a
        }
        async function x(e) {
            let t = e.toDataURL();
            return "data:," === t ? e.cloneNode(!1) : p(t)
        }
        async function j(e, t) {
            if (e.currentSrc) {
                let t = document.createElement("canvas")
                  , r = t.getContext("2d");
                return t.width = e.clientWidth,
                t.height = e.clientHeight,
                null == r || r.drawImage(e, 0, 0, t.width, t.height),
                p(t.toDataURL())
            }
            let r = e.poster
              , n = v(r);
            return p(await P(r, n, t))
        }
        async function R(e) {
            var t;
            try {
                if (null === (t = null == e ? void 0 : e.contentDocument) || void 0 === t ? void 0 : t.body)
                    return await N(e.contentDocument.body, {}, !0)
            } catch (e) {}
            return e.cloneNode(!1)
        }
        async function D(e, t) {
            return y(e, HTMLCanvasElement) ? x(e) : y(e, HTMLVideoElement) ? j(e, t) : y(e, HTMLIFrameElement) ? R(e) : e.cloneNode(!1)
        }
        let T = e => null != e.tagName && "SLOT" === e.tagName.toUpperCase();
        async function $(e, t, r) {
            var n, o;
            let i = [];
            return T(e) && e.assignedNodes ? i = u(e.assignedNodes()) : y(e, HTMLIFrameElement) && (null === (n = e.contentDocument) || void 0 === n ? void 0 : n.body) ? i = u(e.contentDocument.body.childNodes) : i = u((null !== (o = e.shadowRoot) && void 0 !== o ? o : e).childNodes),
            0 === i.length || y(e, HTMLVideoElement) || await i.reduce( (e, n) => e.then( () => N(n, r)).then(e => {
                e && t.appendChild(e)
            }
            ), Promise.resolve()),
            t
        }
        async function k(e, t) {
            let r = e.querySelectorAll ? e.querySelectorAll("use") : [];
            if (0 === r.length)
                return e;
            let n = {};
            for (let o = 0; o < r.length; o++) {
                let i = r[o].getAttribute("xlink:href");
                if (i) {
                    let r = e.querySelector(i)
                      , o = document.querySelector(i);
                    r || !o || n[i] || (n[i] = await N(o, t, !0))
                }
            }
            let o = Object.values(n);
            if (o.length) {
                let t = "http://www.w3.org/1999/xhtml"
                  , r = document.createElementNS(t, "svg");
                r.setAttribute("xmlns", t),
                r.style.position = "absolute",
                r.style.width = "0",
                r.style.height = "0",
                r.style.overflow = "hidden",
                r.style.display = "none";
                let n = document.createElementNS(t, "defs");
                r.appendChild(n);
                for (let e = 0; e < o.length; e++)
                    n.appendChild(o[e]);
                e.appendChild(r)
            }
            return e
        }
        async function N(e, t, r) {
            return r || !t.filter || t.filter(e) ? Promise.resolve(e).then(e => D(e, t)).then(r => $(e, r, t)).then(t => {
                var r, n;
                return r = e,
                y(n = t, Element) && (!function(e, t) {
                    let r = t.style;
                    if (!r)
                        return;
                    let n = window.getComputedStyle(e);
                    n.cssText ? (r.cssText = n.cssText,
                    r.transformOrigin = n.transformOrigin) : u(n).forEach(o => {
                        let i = n.getPropertyValue(o);
                        if ("font-size" === o && i.endsWith("px")) {
                            let e = Math.floor(parseFloat(i.substring(0, i.length - 2))) - .1;
                            i = `${e}px`
                        }
                        y(e, HTMLIFrameElement) && "display" === o && "inline" === i && (i = "block"),
                        "d" === o && t.getAttribute("d") && (i = `path(${t.getAttribute("d")})`),
                        r.setProperty(o, i, n.getPropertyPriority(o))
                    }
                    )
                }(r, n),
                g(r, n, ":before"),
                g(r, n, ":after"),
                y(r, HTMLTextAreaElement) && (n.innerHTML = r.value),
                y(r, HTMLInputElement) && n.setAttribute("value", r.value),
                function(e, t) {
                    if (y(e, HTMLSelectElement)) {
                        let r = Array.from(t.children).find(t => e.value === t.getAttribute("value"));
                        r && r.setAttribute("selected", "")
                    }
                }(r, n)),
                n
            }
            ).then(e => k(e, t)) : null
        }
        let A = /url\((['"]?)([^'"]+?)\1\)/g
          , L = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g
          , I = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
        async function q(e, t, r, n, o) {
            try {
                let i;
                let a = r ? function(e, t) {
                    if (e.match(/^[a-z]+:\/\//i))
                        return e;
                    if (e.match(/^\/\//))
                        return window.location.protocol + e;
                    if (e.match(/^[a-z]+:/i))
                        return e;
                    let r = document.implementation.createHTMLDocument()
                      , n = r.createElement("base")
                      , o = r.createElement("a");
                    return r.head.appendChild(n),
                    r.body.appendChild(o),
                    t && (n.href = t),
                    o.href = e,
                    o.href
                }(t, r) : t
                  , l = v(t);
                if (o) {
                    let e = await o(a);
                    i = C(e, l)
                } else
                    i = await P(a, l, n);
                return e.replace(function(e) {
                    let t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
                    return RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g")
                }(t), `$1${i}$3`)
            } catch (e) {}
            return e
        }
        function _(e) {
            return -1 !== e.search(A)
        }
        async function M(e, t, r) {
            if (!_(e))
                return e;
            let n = function(e, {preferredFontFormat: t}) {
                return t ? e.replace(I, e => {
                    for (; ; ) {
                        let[r,,n] = L.exec(e) || [];
                        if (!n)
                            return "";
                        if (n === t)
                            return `src: ${r};`
                    }
                }
                ) : e
            }(e, r);
            return (function(e) {
                let t = [];
                return e.replace(A, (e, r, n) => (t.push(n),
                e)),
                t.filter(e => !O(e))
            }
            )(n).reduce( (e, n) => e.then(e => q(e, n, t, r)), Promise.resolve(n))
        }
        async function U(e, t, r) {
            var n;
            let o = null === (n = t.style) || void 0 === n ? void 0 : n.getPropertyValue(e);
            if (o) {
                let n = await M(o, null, r);
                return t.style.setProperty(e, n, t.style.getPropertyPriority(e)),
                !0
            }
            return !1
        }
        async function H(e, t) {
            await U("background", e, t) || await U("background-image", e, t),
            await U("mask", e, t) || await U("mask-image", e, t)
        }
        async function V(e, t) {
            let r = y(e, HTMLImageElement);
            if (!(r && !O(e.src)) && !(y(e, SVGImageElement) && !O(e.href.baseVal)))
                return;
            let n = r ? e.src : e.href.baseVal
              , o = await P(n, v(n), t);
            await new Promise( (t, n) => {
                e.onload = t,
                e.onerror = n,
                e.decode && (e.decode = t),
                "lazy" === e.loading && (e.loading = "eager"),
                r ? (e.srcset = "",
                e.src = o) : e.href.baseVal = o
            }
            )
        }
        async function z(e, t) {
            let r = u(e.childNodes).map(e => F(e, t));
            await Promise.all(r).then( () => e)
        }
        async function F(e, t) {
            y(e, Element) && (await H(e, t),
            await V(e, t),
            await z(e, t))
        }
        let B = {};
        async function W(e) {
            let t = B[e];
            if (null != t)
                return t;
            let r = await fetch(e);
            return t = {
                url: e,
                cssText: await r.text()
            },
            B[e] = t,
            t
        }
        async function X(e, t) {
            let r = e.cssText
              , n = /url\(["']?([^"')]+)["']?\)/g;
            return Promise.all((r.match(/url\([^)]+\)/g) || []).map(async o => {
                let i = o.replace(n, "$1");
                return i.startsWith("https://") || (i = new URL(i,e.url).href),
                E(i, t.fetchRequestInit, ({result: e}) => (r = r.replace(o, `url(${e})`),
                [o, e]))
            }
            )).then( () => r)
        }
        function G(e) {
            if (null == e)
                return [];
            let t = []
              , r = e.replace(/(\/\*[\s\S]*?\*\/)/gi, "")
              , n = RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
            for (; ; ) {
                let e = n.exec(r);
                if (null === e)
                    break;
                t.push(e[0])
            }
            r = r.replace(n, "");
            let o = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi
              , i = RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", "gi");
            for (; ; ) {
                let e = o.exec(r);
                if (null === e) {
                    if (null === (e = i.exec(r)))
                        break;
                    o.lastIndex = i.lastIndex
                } else
                    i.lastIndex = o.lastIndex;
                t.push(e[0])
            }
            return t
        }
        async function Q(e, t) {
            let r = []
              , n = [];
            return e.forEach(r => {
                if ("cssRules"in r)
                    try {
                        u(r.cssRules || []).forEach( (e, o) => {
                            if (e.type === CSSRule.IMPORT_RULE) {
                                let i = o + 1
                                  , a = e.href
                                  , l = W(a).then(e => X(e, t)).then(e => G(e).forEach(e => {
                                    try {
                                        r.insertRule(e, e.startsWith("@import") ? i += 1 : r.cssRules.length)
                                    } catch (t) {
                                        console.error("Error inserting rule from remote css", {
                                            rule: e,
                                            error: t
                                        })
                                    }
                                }
                                )).catch(e => {
                                    console.error("Error loading remote css", e.toString())
                                }
                                );
                                n.push(l)
                            }
                        }
                        )
                    } catch (i) {
                        let o = e.find(e => null == e.href) || document.styleSheets[0];
                        null != r.href && n.push(W(r.href).then(e => X(e, t)).then(e => G(e).forEach(e => {
                            o.insertRule(e, r.cssRules.length)
                        }
                        )).catch(e => {
                            console.error("Error loading remote stylesheet", e)
                        }
                        )),
                        console.error("Error inlining remote css file", i)
                    }
            }
            ),
            Promise.all(n).then( () => (e.forEach(e => {
                if ("cssRules"in e)
                    try {
                        u(e.cssRules || []).forEach(e => {
                            r.push(e)
                        }
                        )
                    } catch (t) {
                        console.error(`Error while reading CSS rules from ${e.href}`, t)
                    }
            }
            ),
            r))
        }
        async function J(e, t) {
            if (null == e.ownerDocument)
                throw Error("Provided element is not within a Document");
            let r = u(e.ownerDocument.styleSheets);
            return (await Q(r, t)).filter(e => e.type === CSSRule.FONT_FACE_RULE).filter(e => _(e.style.getPropertyValue("src")))
        }
        async function K(e, t) {
            let r = await J(e, t);
            return (await Promise.all(r.map(e => {
                let r = e.parentStyleSheet ? e.parentStyleSheet.href : null;
                return M(e.cssText, r, t)
            }
            ))).join("\n")
        }
        async function Y(e, t) {
            let r = null != t.fontEmbedCSS ? t.fontEmbedCSS : t.skipFonts ? null : await K(e, t);
            if (r) {
                let t = document.createElement("style")
                  , n = document.createTextNode(r);
                t.appendChild(n),
                e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
            }
        }
        async function Z(e, t={}) {
            let {width: r, height: n} = f(e, t)
              , o = await N(e, t, !0);
            return await Y(o, t),
            await F(o, t),
            !function(e, t) {
                let {style: r} = e;
                t.backgroundColor && (r.backgroundColor = t.backgroundColor),
                t.width && (r.width = `${t.width}px`),
                t.height && (r.height = `${t.height}px`);
                let n = t.style;
                null != n && Object.keys(n).forEach(e => {
                    r[e] = n[e]
                }
                )
            }(o, t),
            await h(o, r, n)
        }
        async function ee(e, t={}) {
            let {width: r, height: n} = f(e, t)
              , o = await Z(e, t)
              , i = await p(o)
              , a = document.createElement("canvas")
              , l = a.getContext("2d")
              , c = t.pixelRatio || function() {
                let e, t;
                try {
                    t = process
                } catch (e) {}
                let r = t && t.env ? t.env.devicePixelRatio : null;
                return r && Number.isNaN(e = parseInt(r, 10)) && (e = 1),
                e || window.devicePixelRatio || 1
            }()
              , u = t.canvasWidth || r
              , s = t.canvasHeight || n;
            return a.width = u * c,
            a.height = s * c,
            !t.skipAutoScale && (a.width > 16384 || a.height > 16384) && (a.width > 16384 && a.height > 16384 ? a.width > a.height ? (a.height *= 16384 / a.width,
            a.width = 16384) : (a.width *= 16384 / a.height,
            a.height = 16384) : a.width > 16384 ? (a.height *= 16384 / a.width,
            a.width = 16384) : (a.width *= 16384 / a.height,
            a.height = 16384)),
            a.style.width = `${u}`,
            a.style.height = `${s}`,
            t.backgroundColor && (l.fillStyle = t.backgroundColor,
            l.fillRect(0, 0, a.width, a.height)),
            l.drawImage(i, 0, 0, a.width, a.height),
            a
        }
        async function et(e, t={}) {
            let {width: r, height: n} = f(e, t);
            return (await ee(e, t)).getContext("2d").getImageData(0, 0, r, n).data
        }
        async function er(e, t={}) {
            return (await ee(e, t)).toDataURL()
        }
        async function en(e, t={}) {
            return (await ee(e, t)).toDataURL("image/jpeg", t.quality || 1)
        }
        async function eo(e, t={}) {
            let r = await ee(e, t);
            return await function(e, t={}) {
                return new Promise(e.toBlob ? r => {
                    e.toBlob(r, t.type ? t.type : "image/png", t.quality ? t.quality : 1)
                }
                : r => {
                    let n = window.atob(e.toDataURL(t.type ? t.type : void 0, t.quality ? t.quality : void 0).split(",")[1])
                      , o = n.length
                      , i = new Uint8Array(o);
                    for (let e = 0; e < o; e += 1)
                        i[e] = n.charCodeAt(e);
                    r(new Blob([i],{
                        type: t.type ? t.type : "image/png"
                    }))
                }
                )
            }(r)
        }
        l(),
        l();
        var ei = {
            status: "idle",
            error: null,
            data: null
        }
          , ea = r(2265);
        function el(e) {
            let t = (e, t) => {
                switch (t.type) {
                case "loading":
                    return {
                        ...e,
                        status: "loading"
                    };
                case "success":
                    return {
                        ...e,
                        status: "success",
                        data: t.data
                    };
                case "error":
                    return {
                        ...e,
                        status: "error",
                        error: t.error
                    };
                default:
                    return e
                }
            }
            ;
            return function(r) {
                let n = (0,
                ea.useRef)()
                  , [o,i] = (0,
                ea.useReducer)(t, ei);
                async function a() {
                    try {
                        if (!n.current && !r?.selector)
                            throw Error("A dom element must be selected: use the selector option or the ref");
                        r?.onStart && r.onStart(),
                        i({
                            type: "loading"
                        }),
                        r?.onLoading && r.onLoading();
                        let t = r?.selector ? document.querySelector(r.selector) : n.current
                          , o = await e(t, r);
                        return i({
                            type: "success",
                            data: o
                        }),
                        r?.onSuccess && r.onSuccess(o),
                        o
                    } catch (t) {
                        let e = t?.message || "Unknown error";
                        return console.error("Error generating image from component:", e),
                        i({
                            type: "error",
                            error: e
                        }),
                        r?.onError && r.onError(e),
                        null
                    }
                }
                return [function({status: e, ...t}) {
                    return {
                        ...t,
                        status: e,
                        isError: "error" === e,
                        isLoading: "loading" === e,
                        isSuccess: "success" === e,
                        isIdle: "idle" === e
                    }
                }(o), () => {
                    a()
                }
                , function(e) {
                    !n.current && e && (n.current = e)
                }
                ]
            }
        }
        l(),
        l(),
        el(Z),
        el(en);
        var ec = el(er);
        el(eo),
        el(ee),
        el(et),
        l();
        var eu = ((a = eu || {}).Idle = "idle",
        a.Loading = "loading",
        a.Success = "success",
        a.Error = "error",
        a);
        l()
    },
    1810: function(e, t, r) {
        "use strict";
        r.d(t, {
            w_: function() {
                return s
            }
        });
        var n = r(2265)
          , o = {
            color: void 0,
            size: void 0,
            className: void 0,
            style: void 0,
            attr: void 0
        }
          , i = n.createContext && n.createContext(o)
          , a = ["attr", "size", "title"];
        function l() {
            return (l = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function c(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? c(Object(r), !0).forEach(function(t) {
                    var n, o;
                    n = t,
                    o = r[t],
                    (n = function(e) {
                        var t = function(e, t) {
                            if ("object" != typeof e || !e)
                                return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                                var n = r.call(e, t || "default");
                                if ("object" != typeof n)
                                    return n;
                                throw TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === t ? String : Number)(e)
                        }(e, "string");
                        return "symbol" == typeof t ? t : t + ""
                    }(n))in e ? Object.defineProperty(e, n, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[n] = o
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        function s(e) {
            return t => n.createElement(f, l({
                attr: u({}, e.attr)
            }, t), function e(t) {
                return t && t.map( (t, r) => n.createElement(t.tag, u({
                    key: r
                }, t.attr), e(t.child)))
            }(e.child))
        }
        function f(e) {
            var t = t => {
                var r, {attr: o, size: i, title: c} = e, s = function(e, t) {
                    if (null == e)
                        return {};
                    var r, n, o = function(e, t) {
                        if (null == e)
                            return {};
                        var r = {};
                        for (var n in e)
                            if (Object.prototype.hasOwnProperty.call(e, n)) {
                                if (t.indexOf(n) >= 0)
                                    continue;
                                r[n] = e[n]
                            }
                        return r
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < i.length; n++)
                            r = i[n],
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                    return o
                }(e, a), f = i || t.size || "1em";
                return t.className && (r = t.className),
                e.className && (r = (r ? r + " " : "") + e.className),
                n.createElement("svg", l({
                    stroke: "currentColor",
                    fill: "currentColor",
                    strokeWidth: "0"
                }, t.attr, o, s, {
                    className: r,
                    style: u(u({
                        color: e.color || t.color
                    }, t.style), e.style),
                    height: f,
                    width: f,
                    xmlns: "http://www.w3.org/2000/svg"
                }), c && n.createElement("title", null, c), e.children)
            }
            ;
            return void 0 !== i ? n.createElement(i.Consumer, null, e => t(e)) : t(o)
        }
    }
}]);
