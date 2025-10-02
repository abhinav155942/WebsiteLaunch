"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3465], {
        133: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(9946).A)("rotate-ccw", [
                ["path", {
                    d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
                    key: "1357e3"
                }],
                ["path", {
                    d: "M3 3v5h5",
                    key: "1xhq8a"
                }]
            ])
        },
        333: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(9946).A)("thumbs-up", [
                ["path", {
                    d: "M7 10v12",
                    key: "1qc93n"
                }],
                ["path", {
                    d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
                    key: "emmmcr"
                }]
            ])
        },
        381: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(9946).A)("settings", [
                ["path", {
                    d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
                    key: "1i5ecw"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "3",
                    key: "1v7zrd"
                }]
            ])
        },
        1284: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(9946).A)("info", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }],
                ["path", {
                    d: "M12 16v-4",
                    key: "1dtifu"
                }],
                ["path", {
                    d: "M12 8h.01",
                    key: "e9boi3"
                }]
            ])
        },
        1285: (e, t, n) => {
            n.d(t, {
                B: () => u
            });
            var r, o = n(2115),
                i = n(2712),
                a = (r || (r = n.t(o, 2)))[" useId ".trim().toString()] || (() => void 0),
                l = 0;

            function u(e) {
                let [t, n] = o.useState(a());
                return (0, i.N)(() => {
                    e || n(e => e ? ? String(l++))
                }, [e]), e || (t ? `radix-${t}` : "")
            }
        },
        1497: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(9946).A)("message-square", [
                ["path", {
                    d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
                    key: "18887p"
                }]
            ])
        },
        1539: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(9946).A)("zap", [
                ["path", {
                    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
                    key: "1xq2db"
                }]
            ])
        },
        1586: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(9946).A)("credit-card", [
                ["rect", {
                    width: "20",
                    height: "14",
                    x: "2",
                    y: "5",
                    rx: "2",
                    key: "ynyp8z"
                }],
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "10",
                    y2: "10",
                    key: "1b3vmo"
                }]
            ])
        },
        2293: (e, t, n) => {
            n.d(t, {
                Oh: () => i
            });
            var r = n(2115),
                o = 0;

            function i() {
                r.useEffect(() => {
                    var e, t;
                    let n = document.querySelectorAll("[data-radix-focus-guard]");
                    return document.body.insertAdjacentElement("afterbegin", null != (e = n[0]) ? e : a()), document.body.insertAdjacentElement("beforeend", null != (t = n[1]) ? t : a()), o++, () => {
                        1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), o--
                    }
                }, [])
            }

            function a() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
            }
        },
        2355: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(9946).A)("chevron-left", [
                ["path", {
                    d: "m15 18-6-6 6-6",
                    key: "1wnfg3"
                }]
            ])
        },
        2486: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(9946).A)("send", [
                ["path", {
                    d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
                    key: "1ffxy3"
                }],
                ["path", {
                    d: "m21.854 2.147-10.94 10.939",
                    key: "12cjpa"
                }]
            ])
        },
        2525: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(9946).A)("trash-2", [
                ["path", {
                    d: "M10 11v6",
                    key: "nco0om"
                }],
                ["path", {
                    d: "M14 11v6",
                    key: "outv1u"
                }],
                ["path", {
                    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
                    key: "miytrc"
                }],
                ["path", {
                    d: "M3 6h18",
                    key: "d0wm0j"
                }],
                ["path", {
                    d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
                    key: "e791ji"
                }]
            ])
        },
        2874: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(9946).A)("mail-check", [
                ["path", {
                    d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",
                    key: "12jkf8"
                }],
                ["path", {
                    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
                    key: "1ocrg3"
                }],
                ["path", {
                    d: "m16 19 2 2 4-4",
                    key: "1b14m6"
                }]
            ])
        },
        3052: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(9946).A)("chevron-right", [
                ["path", {
                    d: "m9 18 6-6-6-6",
                    key: "mthhwq"
                }]
            ])
        },
        3795: (e, t, n) => {
            n.d(t, {
                A: () => V
            });
            var r, o, i = function() {
                return (i = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            };

            function a(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) 0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
                return n
            }
            Object.create;
            Object.create;
            var l = ("function" == typeof SuppressedError && SuppressedError, n(2115)),
                u = "right-scroll-bar-position",
                c = "width-before-scroll-bar";

            function s(e, t) {
                return "function" == typeof e ? e(t) : e && (e.current = t), e
            }
            var d = "undefined" != typeof window ? l.useLayoutEffect : l.useEffect,
                f = new WeakMap;

            function p(e) {
                return e
            }
            var h = function(e) {
                    void 0 === e && (e = {});
                    var t, n, r, o, a = (t = null, void 0 === n && (n = p), r = [], o = !1, {
                        read: function() {
                            if (o) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                            return r.length ? r[r.length - 1] : null
                        },
                        useMedium: function(e) {
                            var t = n(e, o);
                            return r.push(t),
                                function() {
                                    r = r.filter(function(e) {
                                        return e !== t
                                    })
                                }
                        },
                        assignSyncMedium: function(e) {
                            for (o = !0; r.length;) {
                                var t = r;
                                r = [], t.forEach(e)
                            }
                            r = {
                                push: function(t) {
                                    return e(t)
                                },
                                filter: function() {
                                    return r
                                }
                            }
                        },
                        assignMedium: function(e) {
                            o = !0;
                            var t = [];
                            if (r.length) {
                                var n = r;
                                r = [], n.forEach(e), t = r
                            }
                            var i = function() {
                                    var n = t;
                                    t = [], n.forEach(e)
                                },
                                a = function() {
                                    return Promise.resolve().then(i)
                                };
                            a(), r = {
                                push: function(e) {
                                    t.push(e), a()
                                },
                                filter: function(e) {
                                    return t = t.filter(e), r
                                }
                            }
                        }
                    });
                    return a.options = i({
                        async: !0,
                        ssr: !1
                    }, e), a
                }(),
                m = function() {},
                v = l.forwardRef(function(e, t) {
                    var n, r, o, u, c = l.useRef(null),
                        p = l.useState({
                            onScrollCapture: m,
                            onWheelCapture: m,
                            onTouchMoveCapture: m
                        }),
                        v = p[0],
                        g = p[1],
                        y = e.forwardProps,
                        w = e.children,
                        x = e.className,
                        b = e.removeScrollBar,
                        E = e.enabled,
                        C = e.shards,
                        k = e.sideCar,
                        R = e.noRelative,
                        M = e.noIsolation,
                        A = e.inert,
                        T = e.allowPinchZoom,
                        j = e.as,
                        D = e.gapMode,
                        L = a(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        S = (n = [c, t], r = function(e) {
                            return n.forEach(function(t) {
                                return s(t, e)
                            })
                        }, (o = (0, l.useState)(function() {
                            return {
                                value: null,
                                callback: r,
                                facade: {
                                    get current() {
                                        return o.value
                                    },
                                    set current(value) {
                                        var e = o.value;
                                        e !== value && (o.value = value, o.callback(value, e))
                                    }
                                }
                            }
                        })[0]).callback = r, u = o.facade, d(function() {
                            var e = f.get(u);
                            if (e) {
                                var t = new Set(e),
                                    r = new Set(n),
                                    o = u.current;
                                t.forEach(function(e) {
                                    r.has(e) || s(e, null)
                                }), r.forEach(function(e) {
                                    t.has(e) || s(e, o)
                                })
                            }
                            f.set(u, n)
                        }, [n]), u),
                        P = i(i({}, L), v);
                    return l.createElement(l.Fragment, null, E && l.createElement(k, {
                        sideCar: h,
                        removeScrollBar: b,
                        shards: C,
                        noRelative: R,
                        noIsolation: M,
                        inert: A,
                        setCallbacks: g,
                        allowPinchZoom: !!T,
                        lockRef: c,
                        gapMode: D
                    }), y ? l.cloneElement(l.Children.only(w), i(i({}, P), {
                        ref: S
                    })) : l.createElement(void 0 === j ? "div" : j, i({}, P, {
                        className: x,
                        ref: S
                    }), w))
                });
            v.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, v.classNames = {
                fullWidth: c,
                zeroRight: u
            };
            var g = function(e) {
                var t = e.sideCar,
                    n = a(e, ["sideCar"]);
                if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
                var r = t.read();
                if (!r) throw Error("Sidecar medium not found");
                return l.createElement(r, i({}, n))
            };
            g.isSideCarExport = !0;
            var y = function() {
                    var e = 0,
                        t = null;
                    return {
                        add: function(r) {
                            if (0 == e && (t = function() {
                                    if (!document) return null;
                                    var e = document.createElement("style");
                                    e.type = "text/css";
                                    var t = o || n.nc;
                                    return t && e.setAttribute("nonce", t), e
                                }())) {
                                var i, a;
                                (i = t).styleSheet ? i.styleSheet.cssText = r : i.appendChild(document.createTextNode(r)), a = t, (document.head || document.getElementsByTagName("head")[0]).appendChild(a)
                            }
                            e++
                        },
                        remove: function() {
                            --e || !t || (t.parentNode && t.parentNode.removeChild(t), t = null)
                        }
                    }
                },
                w = function() {
                    var e = y();
                    return function(t, n) {
                        l.useEffect(function() {
                            return e.add(t),
                                function() {
                                    e.remove()
                                }
                        }, [t && n])
                    }
                },
                x = function() {
                    var e = w();
                    return function(t) {
                        return e(t.styles, t.dynamic), null
                    }
                },
                b = {
                    left: 0,
                    top: 0,
                    right: 0,
                    gap: 0
                },
                E = function(e) {
                    return parseInt(e || "", 10) || 0
                },
                C = function(e) {
                    var t = window.getComputedStyle(document.body),
                        n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                        r = t["padding" === e ? "paddingTop" : "marginTop"],
                        o = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [E(n), E(r), E(o)]
                },
                k = function(e) {
                    if (void 0 === e && (e = "margin"), "undefined" == typeof window) return b;
                    var t = C(e),
                        n = document.documentElement.clientWidth,
                        r = window.innerWidth;
                    return {
                        left: t[0],
                        top: t[1],
                        right: t[2],
                        gap: Math.max(0, r - n + t[2] - t[0])
                    }
                },
                R = x(),
                M = "data-scroll-locked",
                A = function(e, t, n, r) {
                    var o = e.left,
                        i = e.top,
                        a = e.right,
                        l = e.gap;
                    return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(l, "px ").concat(r, ";\n  }\n  body[").concat(M, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(a, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(l, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(u, " {\n    right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(c, " {\n    margin-right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(u, " .").concat(u, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(c, " .").concat(c, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(M, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(l, "px;\n  }\n")
                },
                T = function() {
                    var e = parseInt(document.body.getAttribute(M) || "0", 10);
                    return isFinite(e) ? e : 0
                },
                j = function() {
                    l.useEffect(function() {
                        return document.body.setAttribute(M, (T() + 1).toString()),
                            function() {
                                var e = T() - 1;
                                e <= 0 ? document.body.removeAttribute(M) : document.body.setAttribute(M, e.toString())
                            }
                    }, [])
                },
                D = function(e) {
                    var t = e.noRelative,
                        n = e.noImportant,
                        r = e.gapMode,
                        o = void 0 === r ? "margin" : r;
                    j();
                    var i = l.useMemo(function() {
                        return k(o)
                    }, [o]);
                    return l.createElement(R, {
                        styles: A(i, !t, o, n ? "" : "!important")
                    })
                },
                L = !1;
            if ("undefined" != typeof window) try {
                var S = Object.defineProperty({}, "passive", {
                    get: function() {
                        return L = !0, !0
                    }
                });
                window.addEventListener("test", S, S), window.removeEventListener("test", S, S)
            } catch (e) {
                L = !1
            }
            var P = !!L && {
                    passive: !1
                },
                O = function(e, t) {
                    if (!(e instanceof Element)) return !1;
                    var n = window.getComputedStyle(e);
                    return "hidden" !== n[t] && (n.overflowY !== n.overflowX || "TEXTAREA" === e.tagName || "visible" !== n[t])
                },
                N = function(e, t) {
                    var n = t.ownerDocument,
                        r = t;
                    do {
                        if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), I(e, r)) {
                            var o = F(e, r);
                            if (o[1] > o[2]) return !0
                        }
                        r = r.parentNode
                    } while (r && r !== n.body);
                    return !1
                },
                I = function(e, t) {
                    return "v" === e ? O(t, "overflowY") : O(t, "overflowX")
                },
                F = function(e, t) {
                    return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
                },
                _ = function(e, t, n, r, o) {
                    var i, a = (i = window.getComputedStyle(t).direction, "h" === e && "rtl" === i ? -1 : 1),
                        l = a * r,
                        u = n.target,
                        c = t.contains(u),
                        s = !1,
                        d = l > 0,
                        f = 0,
                        p = 0;
                    do {
                        if (!u) break;
                        var h = F(e, u),
                            m = h[0],
                            v = h[1] - h[2] - a * m;
                        (m || v) && I(e, u) && (f += v, p += m);
                        var g = u.parentNode;
                        u = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g
                    } while (!c && u !== document.body || c && (t.contains(u) || t === u));
                    return d && (o && 1 > Math.abs(f) || !o && l > f) ? s = !0 : !d && (o && 1 > Math.abs(p) || !o && -l > p) && (s = !0), s
                },
                K = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                B = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                W = function(e) {
                    return e && "current" in e ? e.current : e
                },
                H = 0,
                G = [];
            let z = (r = function(e) {
                var t = l.useRef([]),
                    n = l.useRef([0, 0]),
                    r = l.useRef(),
                    o = l.useState(H++)[0],
                    i = l.useState(x)[0],
                    a = l.useRef(e);
                l.useEffect(function() {
                    a.current = e
                }, [e]), l.useEffect(function() {
                    if (e.inert) {
                        document.body.classList.add("block-interactivity-".concat(o));
                        var t = (function(e, t, n) {
                            if (n || 2 == arguments.length)
                                for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                            return e.concat(r || Array.prototype.slice.call(t))
                        })([e.lockRef.current], (e.shards || []).map(W), !0).filter(Boolean);
                        return t.forEach(function(e) {
                                return e.classList.add("allow-interactivity-".concat(o))
                            }),
                            function() {
                                document.body.classList.remove("block-interactivity-".concat(o)), t.forEach(function(e) {
                                    return e.classList.remove("allow-interactivity-".concat(o))
                                })
                            }
                    }
                }, [e.inert, e.lockRef.current, e.shards]);
                var u = l.useCallback(function(e, t) {
                        if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !a.current.allowPinchZoom;
                        var o, i = K(e),
                            l = n.current,
                            u = "deltaX" in e ? e.deltaX : l[0] - i[0],
                            c = "deltaY" in e ? e.deltaY : l[1] - i[1],
                            s = e.target,
                            d = Math.abs(u) > Math.abs(c) ? "h" : "v";
                        if ("touches" in e && "h" === d && "range" === s.type) return !1;
                        var f = N(d, s);
                        if (!f) return !0;
                        if (f ? o = d : (o = "v" === d ? "h" : "v", f = N(d, s)), !f) return !1;
                        if (!r.current && "changedTouches" in e && (u || c) && (r.current = o), !o) return !0;
                        var p = r.current || o;
                        return _(p, t, e, "h" === p ? u : c, !0)
                    }, []),
                    c = l.useCallback(function(e) {
                        if (G.length && G[G.length - 1] === i) {
                            var n = "deltaY" in e ? B(e) : K(e),
                                r = t.current.filter(function(t) {
                                    var r;
                                    return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (r = t.delta, r[0] === n[0] && r[1] === n[1])
                                })[0];
                            if (r && r.should) {
                                e.cancelable && e.preventDefault();
                                return
                            }
                            if (!r) {
                                var o = (a.current.shards || []).map(W).filter(Boolean).filter(function(t) {
                                    return t.contains(e.target)
                                });
                                (o.length > 0 ? u(e, o[0]) : !a.current.noIsolation) && e.cancelable && e.preventDefault()
                            }
                        }
                    }, []),
                    s = l.useCallback(function(e, n, r, o) {
                        var i = {
                            name: e,
                            delta: n,
                            target: r,
                            should: o,
                            shadowParent: function(e) {
                                for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
                                return t
                            }(r)
                        };
                        t.current.push(i), setTimeout(function() {
                            t.current = t.current.filter(function(e) {
                                return e !== i
                            })
                        }, 1)
                    }, []),
                    d = l.useCallback(function(e) {
                        n.current = K(e), r.current = void 0
                    }, []),
                    f = l.useCallback(function(t) {
                        s(t.type, B(t), t.target, u(t, e.lockRef.current))
                    }, []),
                    p = l.useCallback(function(t) {
                        s(t.type, K(t), t.target, u(t, e.lockRef.current))
                    }, []);
                l.useEffect(function() {
                    return G.push(i), e.setCallbacks({
                            onScrollCapture: f,
                            onWheelCapture: f,
                            onTouchMoveCapture: p
                        }), document.addEventListener("wheel", c, P), document.addEventListener("touchmove", c, P), document.addEventListener("touchstart", d, P),
                        function() {
                            G = G.filter(function(e) {
                                return e !== i
                            }), document.removeEventListener("wheel", c, P), document.removeEventListener("touchmove", c, P), document.removeEventListener("touchstart", d, P)
                        }
                }, []);
                var h = e.removeScrollBar,
                    m = e.inert;
                return l.createElement(l.Fragment, null, m ? l.createElement(i, {
                    styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
                }) : null, h ? l.createElement(D, {
                    noRelative: e.noRelative,
                    gapMode: e.gapMode
                }) : null)
            }, h.useMedium(r), g);
            var q = l.forwardRef(function(e, t) {
                return l.createElement(v, i({}, e, {
                    ref: t,
                    sideCar: z
                }))
            });
            q.classNames = v.classNames;
            let V = q
        },
        3837: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(9946).A)("file-down", [
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
                    key: "1rqfz7"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4",
                    key: "tnqrlb"
                }],
                ["path", {
                    d: "M12 18v-6",
                    key: "17g6i2"
                }],
                ["path", {
                    d: "m9 15 3 3 3-3",
                    key: "1npd3o"
                }]
            ])
        },
        3921: (e, t, n) => {
            n.d(t, {
                i3: () => Z,
                UC: () => Y,
                ZL: () => X,
                Kq: () => q,
                bL: () => V,
                l9: () => U
            });
            var r = n(2115),
                o = n(5185),
                i = n(6101),
                a = n(6081),
                l = n(9178),
                u = n(1285),
                c = n(5152),
                s = n(4378),
                d = n(8905),
                f = n(3655),
                p = n(9708),
                h = n(5845),
                m = n(5155),
                v = Object.freeze({
                    position: "absolute",
                    border: 0,
                    width: 1,
                    height: 1,
                    padding: 0,
                    margin: -1,
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    wordWrap: "normal"
                }),
                g = r.forwardRef((e, t) => (0, m.jsx)(f.sG.span, { ...e,
                    ref: t,
                    style: { ...v,
                        ...e.style
                    }
                }));
            g.displayName = "VisuallyHidden";
            var [y, w] = (0, a.A)("Tooltip", [c.Bk]), x = (0, c.Bk)(), b = "TooltipProvider", E = "tooltip.open", [C, k] = y(b), R = e => {
                let {
                    __scopeTooltip: t,
                    delayDuration: n = 700,
                    skipDelayDuration: o = 300,
                    disableHoverableContent: i = !1,
                    children: a
                } = e, l = r.useRef(!0), u = r.useRef(!1), c = r.useRef(0);
                return r.useEffect(() => {
                    let e = c.current;
                    return () => window.clearTimeout(e)
                }, []), (0, m.jsx)(C, {
                    scope: t,
                    isOpenDelayedRef: l,
                    delayDuration: n,
                    onOpen: r.useCallback(() => {
                        window.clearTimeout(c.current), l.current = !1
                    }, []),
                    onClose: r.useCallback(() => {
                        window.clearTimeout(c.current), c.current = window.setTimeout(() => l.current = !0, o)
                    }, [o]),
                    isPointerInTransitRef: u,
                    onPointerInTransitChange: r.useCallback(e => {
                        u.current = e
                    }, []),
                    disableHoverableContent: i,
                    children: a
                })
            };
            R.displayName = b;
            var M = "Tooltip",
                [A, T] = y(M),
                j = e => {
                    let {
                        __scopeTooltip: t,
                        children: n,
                        open: o,
                        defaultOpen: i,
                        onOpenChange: a,
                        disableHoverableContent: l,
                        delayDuration: s
                    } = e, d = k(M, e.__scopeTooltip), f = x(t), [p, v] = r.useState(null), g = (0, u.B)(), y = r.useRef(0), w = null != l ? l : d.disableHoverableContent, b = null != s ? s : d.delayDuration, C = r.useRef(!1), [R, T] = (0, h.i)({
                        prop: o,
                        defaultProp: null != i && i,
                        onChange: e => {
                            e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(E))) : d.onClose(), null == a || a(e)
                        },
                        caller: M
                    }), j = r.useMemo(() => R ? C.current ? "delayed-open" : "instant-open" : "closed", [R]), D = r.useCallback(() => {
                        window.clearTimeout(y.current), y.current = 0, C.current = !1, T(!0)
                    }, [T]), L = r.useCallback(() => {
                        window.clearTimeout(y.current), y.current = 0, T(!1)
                    }, [T]), S = r.useCallback(() => {
                        window.clearTimeout(y.current), y.current = window.setTimeout(() => {
                            C.current = !0, T(!0), y.current = 0
                        }, b)
                    }, [b, T]);
                    return r.useEffect(() => () => {
                        y.current && (window.clearTimeout(y.current), y.current = 0)
                    }, []), (0, m.jsx)(c.bL, { ...f,
                        children: (0, m.jsx)(A, {
                            scope: t,
                            contentId: g,
                            open: R,
                            stateAttribute: j,
                            trigger: p,
                            onTriggerChange: v,
                            onTriggerEnter: r.useCallback(() => {
                                d.isOpenDelayedRef.current ? S() : D()
                            }, [d.isOpenDelayedRef, S, D]),
                            onTriggerLeave: r.useCallback(() => {
                                w ? L() : (window.clearTimeout(y.current), y.current = 0)
                            }, [L, w]),
                            onOpen: D,
                            onClose: L,
                            disableHoverableContent: w,
                            children: n
                        })
                    })
                };
            j.displayName = M;
            var D = "TooltipTrigger",
                L = r.forwardRef((e, t) => {
                    let {
                        __scopeTooltip: n,
                        ...a
                    } = e, l = T(D, n), u = k(D, n), s = x(n), d = r.useRef(null), p = (0, i.s)(t, d, l.onTriggerChange), h = r.useRef(!1), v = r.useRef(!1), g = r.useCallback(() => h.current = !1, []);
                    return r.useEffect(() => () => document.removeEventListener("pointerup", g), [g]), (0, m.jsx)(c.Mz, {
                        asChild: !0,
                        ...s,
                        children: (0, m.jsx)(f.sG.button, {
                            "aria-describedby": l.open ? l.contentId : void 0,
                            "data-state": l.stateAttribute,
                            ...a,
                            ref: p,
                            onPointerMove: (0, o.mK)(e.onPointerMove, e => {
                                "touch" !== e.pointerType && (v.current || u.isPointerInTransitRef.current || (l.onTriggerEnter(), v.current = !0))
                            }),
                            onPointerLeave: (0, o.mK)(e.onPointerLeave, () => {
                                l.onTriggerLeave(), v.current = !1
                            }),
                            onPointerDown: (0, o.mK)(e.onPointerDown, () => {
                                l.open && l.onClose(), h.current = !0, document.addEventListener("pointerup", g, {
                                    once: !0
                                })
                            }),
                            onFocus: (0, o.mK)(e.onFocus, () => {
                                h.current || l.onOpen()
                            }),
                            onBlur: (0, o.mK)(e.onBlur, l.onClose),
                            onClick: (0, o.mK)(e.onClick, l.onClose)
                        })
                    })
                });
            L.displayName = D;
            var S = "TooltipPortal",
                [P, O] = y(S, {
                    forceMount: void 0
                }),
                N = e => {
                    let {
                        __scopeTooltip: t,
                        forceMount: n,
                        children: r,
                        container: o
                    } = e, i = T(S, t);
                    return (0, m.jsx)(P, {
                        scope: t,
                        forceMount: n,
                        children: (0, m.jsx)(d.C, {
                            present: n || i.open,
                            children: (0, m.jsx)(s.Z, {
                                asChild: !0,
                                container: o,
                                children: r
                            })
                        })
                    })
                };
            N.displayName = S;
            var I = "TooltipContent",
                F = r.forwardRef((e, t) => {
                    let n = O(I, e.__scopeTooltip),
                        {
                            forceMount: r = n.forceMount,
                            side: o = "top",
                            ...i
                        } = e,
                        a = T(I, e.__scopeTooltip);
                    return (0, m.jsx)(d.C, {
                        present: r || a.open,
                        children: a.disableHoverableContent ? (0, m.jsx)(H, {
                            side: o,
                            ...i,
                            ref: t
                        }) : (0, m.jsx)(_, {
                            side: o,
                            ...i,
                            ref: t
                        })
                    })
                }),
                _ = r.forwardRef((e, t) => {
                    let n = T(I, e.__scopeTooltip),
                        o = k(I, e.__scopeTooltip),
                        a = r.useRef(null),
                        l = (0, i.s)(t, a),
                        [u, c] = r.useState(null),
                        {
                            trigger: s,
                            onClose: d
                        } = n,
                        f = a.current,
                        {
                            onPointerInTransitChange: p
                        } = o,
                        h = r.useCallback(() => {
                            c(null), p(!1)
                        }, [p]),
                        v = r.useCallback((e, t) => {
                            let n = e.currentTarget,
                                r = {
                                    x: e.clientX,
                                    y: e.clientY
                                },
                                o = function(e, t) {
                                    let n = Math.abs(t.top - e.y),
                                        r = Math.abs(t.bottom - e.y),
                                        o = Math.abs(t.right - e.x),
                                        i = Math.abs(t.left - e.x);
                                    switch (Math.min(n, r, o, i)) {
                                        case i:
                                            return "left";
                                        case o:
                                            return "right";
                                        case n:
                                            return "top";
                                        case r:
                                            return "bottom";
                                        default:
                                            throw Error("unreachable")
                                    }
                                }(r, n.getBoundingClientRect());
                            c(function(e) {
                                let t = e.slice();
                                return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : 1 * !!(e.y > t.y)),
                                    function(e) {
                                        if (e.length <= 1) return e.slice();
                                        let t = [];
                                        for (let n = 0; n < e.length; n++) {
                                            let r = e[n];
                                            for (; t.length >= 2;) {
                                                let e = t[t.length - 1],
                                                    n = t[t.length - 2];
                                                if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
                                                else break
                                            }
                                            t.push(r)
                                        }
                                        t.pop();
                                        let n = [];
                                        for (let t = e.length - 1; t >= 0; t--) {
                                            let r = e[t];
                                            for (; n.length >= 2;) {
                                                let e = n[n.length - 1],
                                                    t = n[n.length - 2];
                                                if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
                                                else break
                                            }
                                            n.push(r)
                                        }
                                        return (n.pop(), 1 === t.length && 1 === n.length && t[0].x === n[0].x && t[0].y === n[0].y) ? t : t.concat(n)
                                    }(t)
                            }([... function(e, t) {
                                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
                                    r = [];
                                switch (t) {
                                    case "top":
                                        r.push({
                                            x: e.x - n,
                                            y: e.y + n
                                        }, {
                                            x: e.x + n,
                                            y: e.y + n
                                        });
                                        break;
                                    case "bottom":
                                        r.push({
                                            x: e.x - n,
                                            y: e.y - n
                                        }, {
                                            x: e.x + n,
                                            y: e.y - n
                                        });
                                        break;
                                    case "left":
                                        r.push({
                                            x: e.x + n,
                                            y: e.y - n
                                        }, {
                                            x: e.x + n,
                                            y: e.y + n
                                        });
                                        break;
                                    case "right":
                                        r.push({
                                            x: e.x - n,
                                            y: e.y - n
                                        }, {
                                            x: e.x - n,
                                            y: e.y + n
                                        })
                                }
                                return r
                            }(r, o), ... function(e) {
                                let {
                                    top: t,
                                    right: n,
                                    bottom: r,
                                    left: o
                                } = e;
                                return [{
                                    x: o,
                                    y: t
                                }, {
                                    x: n,
                                    y: t
                                }, {
                                    x: n,
                                    y: r
                                }, {
                                    x: o,
                                    y: r
                                }]
                            }(t.getBoundingClientRect())])), p(!0)
                        }, [p]);
                    return r.useEffect(() => () => h(), [h]), r.useEffect(() => {
                        if (s && f) {
                            let e = e => v(e, f),
                                t = e => v(e, s);
                            return s.addEventListener("pointerleave", e), f.addEventListener("pointerleave", t), () => {
                                s.removeEventListener("pointerleave", e), f.removeEventListener("pointerleave", t)
                            }
                        }
                    }, [s, f, v, h]), r.useEffect(() => {
                        if (u) {
                            let e = e => {
                                let t = e.target,
                                    n = {
                                        x: e.clientX,
                                        y: e.clientY
                                    },
                                    r = (null == s ? void 0 : s.contains(t)) || (null == f ? void 0 : f.contains(t)),
                                    o = ! function(e, t) {
                                        let {
                                            x: n,
                                            y: r
                                        } = e, o = !1;
                                        for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                                            let a = t[e],
                                                l = t[i],
                                                u = a.x,
                                                c = a.y,
                                                s = l.x,
                                                d = l.y;
                                            c > r != d > r && n < (s - u) * (r - c) / (d - c) + u && (o = !o)
                                        }
                                        return o
                                    }(n, u);
                                r ? h() : o && (h(), d())
                            };
                            return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
                        }
                    }, [s, f, u, d, h]), (0, m.jsx)(H, { ...e,
                        ref: l
                    })
                }),
                [K, B] = y(M, {
                    isInside: !1
                }),
                W = (0, p.Dc)("TooltipContent"),
                H = r.forwardRef((e, t) => {
                    let {
                        __scopeTooltip: n,
                        children: o,
                        "aria-label": i,
                        onEscapeKeyDown: a,
                        onPointerDownOutside: u,
                        ...s
                    } = e, d = T(I, n), f = x(n), {
                        onClose: p
                    } = d;
                    return r.useEffect(() => (document.addEventListener(E, p), () => document.removeEventListener(E, p)), [p]), r.useEffect(() => {
                        if (d.trigger) {
                            let e = e => {
                                let t = e.target;
                                (null == t ? void 0 : t.contains(d.trigger)) && p()
                            };
                            return window.addEventListener("scroll", e, {
                                capture: !0
                            }), () => window.removeEventListener("scroll", e, {
                                capture: !0
                            })
                        }
                    }, [d.trigger, p]), (0, m.jsx)(l.qW, {
                        asChild: !0,
                        disableOutsidePointerEvents: !1,
                        onEscapeKeyDown: a,
                        onPointerDownOutside: u,
                        onFocusOutside: e => e.preventDefault(),
                        onDismiss: p,
                        children: (0, m.jsxs)(c.UC, {
                            "data-state": d.stateAttribute,
                            ...f,
                            ...s,
                            ref: t,
                            style: { ...s.style,
                                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                            },
                            children: [(0, m.jsx)(W, {
                                children: o
                            }), (0, m.jsx)(K, {
                                scope: n,
                                isInside: !0,
                                children: (0, m.jsx)(g, {
                                    id: d.contentId,
                                    role: "tooltip",
                                    children: i || o
                                })
                            })]
                        })
                    })
                });
            F.displayName = I;
            var G = "TooltipArrow",
                z = r.forwardRef((e, t) => {
                    let {
                        __scopeTooltip: n,
                        ...r
                    } = e, o = x(n);
                    return B(G, n).isInside ? null : (0, m.jsx)(c.i3, { ...o,
                        ...r,
                        ref: t
                    })
                });
            z.displayName = G;
            var q = R,
                V = j,
                U = L,
                X = N,
                Y = F,
                Z = z
        },
        4357: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(9946).A)("copy", [
                ["rect", {
                    width: "14",
                    height: "14",
                    x: "8",
                    y: "8",
                    rx: "2",
                    ry: "2",
                    key: "17jyea"
                }],
                ["path", {
                    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
                    key: "zix9uf"
                }]
            ])
        },
        4378: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(2115),
                o = n(7650),
                i = n(3655),
                a = n(2712),
                l = n(5155),
                u = r.forwardRef((e, t) => {
                    var n, u;
                    let {
                        container: c,
                        ...s
                    } = e, [d, f] = r.useState(!1);
                    (0, a.N)(() => f(!0), []);
                    let p = c || d && (null == (u = globalThis) || null == (n = u.document) ? void 0 : n.body);
                    return p ? o.createPortal((0, l.jsx)(i.sG.div, { ...s,
                        ref: t
                    }), p) : null
                });
            u.displayName = "Portal"
        },
        4416: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(9946).A)("x", [
                ["path", {
                    d: "M18 6 6 18",
                    key: "1bl5f8"
                }],
                ["path", {
                    d: "m6 6 12 12",
                    key: "d8bk6v"
                }]
            ])
        },
        4616: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(9946).A)("plus", [
                ["path", {
                    d: "M5 12h14",
                    key: "1ays0h"
                }],
                ["path", {
                    d: "M12 5v14",
                    key: "s699le"
                }]
            ])
        },
        4783: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(9946).A)("menu", [
                ["path", {
                    d: "M4 5h16",
                    key: "1tepv9"
                }],
                ["path", {
                    d: "M4 12h16",
                    key: "1lakjw"
                }],
                ["path", {
                    d: "M4 19h16",
                    key: "1djgab"
                }]
            ])
        },
        5152: (e, t, n) => {
            n.d(t, {
                Mz: () => te,
                i3: () => tn,
                UC: () => tt,
                bL: () => e7,
                Bk: () => eU
            });
            var r = n(2115);
            let o = ["top", "right", "bottom", "left"],
                i = Math.min,
                a = Math.max,
                l = Math.round,
                u = Math.floor,
                c = e => ({
                    x: e,
                    y: e
                }),
                s = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                d = {
                    start: "end",
                    end: "start"
                };

            function f(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function p(e) {
                return e.split("-")[0]
            }

            function h(e) {
                return e.split("-")[1]
            }

            function m(e) {
                return "x" === e ? "y" : "x"
            }

            function v(e) {
                return "y" === e ? "height" : "width"
            }
            let g = new Set(["top", "bottom"]);

            function y(e) {
                return g.has(p(e)) ? "y" : "x"
            }

            function w(e) {
                return e.replace(/start|end/g, e => d[e])
            }
            let x = ["left", "right"],
                b = ["right", "left"],
                E = ["top", "bottom"],
                C = ["bottom", "top"];

            function k(e) {
                return e.replace(/left|right|bottom|top/g, e => s[e])
            }

            function R(e) {
                return "number" != typeof e ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...e
                } : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function M(e) {
                let {
                    x: t,
                    y: n,
                    width: r,
                    height: o
                } = e;
                return {
                    width: r,
                    height: o,
                    top: n,
                    left: t,
                    right: t + r,
                    bottom: n + o,
                    x: t,
                    y: n
                }
            }

            function A(e, t, n) {
                let r, {
                        reference: o,
                        floating: i
                    } = e,
                    a = y(t),
                    l = m(y(t)),
                    u = v(l),
                    c = p(t),
                    s = "y" === a,
                    d = o.x + o.width / 2 - i.width / 2,
                    f = o.y + o.height / 2 - i.height / 2,
                    g = o[u] / 2 - i[u] / 2;
                switch (c) {
                    case "top":
                        r = {
                            x: d,
                            y: o.y - i.height
                        };
                        break;
                    case "bottom":
                        r = {
                            x: d,
                            y: o.y + o.height
                        };
                        break;
                    case "right":
                        r = {
                            x: o.x + o.width,
                            y: f
                        };
                        break;
                    case "left":
                        r = {
                            x: o.x - i.width,
                            y: f
                        };
                        break;
                    default:
                        r = {
                            x: o.x,
                            y: o.y
                        }
                }
                switch (h(t)) {
                    case "start":
                        r[l] -= g * (n && s ? -1 : 1);
                        break;
                    case "end":
                        r[l] += g * (n && s ? -1 : 1)
                }
                return r
            }
            let T = async (e, t, n) => {
                let {
                    placement: r = "bottom",
                    strategy: o = "absolute",
                    middleware: i = [],
                    platform: a
                } = n, l = i.filter(Boolean), u = await (null == a.isRTL ? void 0 : a.isRTL(t)), c = await a.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o
                }), {
                    x: s,
                    y: d
                } = A(c, r, u), f = r, p = {}, h = 0;
                for (let n = 0; n < l.length; n++) {
                    let {
                        name: i,
                        fn: m
                    } = l[n], {
                        x: v,
                        y: g,
                        data: y,
                        reset: w
                    } = await m({
                        x: s,
                        y: d,
                        initialPlacement: r,
                        placement: f,
                        strategy: o,
                        middlewareData: p,
                        rects: c,
                        platform: a,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    s = null != v ? v : s, d = null != g ? g : d, p = { ...p,
                        [i]: { ...p[i],
                            ...y
                        }
                    }, w && h <= 50 && (h++, "object" == typeof w && (w.placement && (f = w.placement), w.rects && (c = !0 === w.rects ? await a.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: o
                    }) : w.rects), {
                        x: s,
                        y: d
                    } = A(c, f, u)), n = -1)
                }
                return {
                    x: s,
                    y: d,
                    placement: f,
                    strategy: o,
                    middlewareData: p
                }
            };
            async function j(e, t) {
                var n;
                void 0 === t && (t = {});
                let {
                    x: r,
                    y: o,
                    platform: i,
                    rects: a,
                    elements: l,
                    strategy: u
                } = e, {
                    boundary: c = "clippingAncestors",
                    rootBoundary: s = "viewport",
                    elementContext: d = "floating",
                    altBoundary: p = !1,
                    padding: h = 0
                } = f(t, e), m = R(h), v = l[p ? "floating" === d ? "reference" : "floating" : d], g = M(await i.getClippingRect({
                    element: null == (n = await (null == i.isElement ? void 0 : i.isElement(v))) || n ? v : v.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(l.floating)),
                    boundary: c,
                    rootBoundary: s,
                    strategy: u
                })), y = "floating" === d ? {
                    x: r,
                    y: o,
                    width: a.floating.width,
                    height: a.floating.height
                } : a.reference, w = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(l.floating)), x = await (null == i.isElement ? void 0 : i.isElement(w)) && await (null == i.getScale ? void 0 : i.getScale(w)) || {
                    x: 1,
                    y: 1
                }, b = M(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                    elements: l,
                    rect: y,
                    offsetParent: w,
                    strategy: u
                }) : y);
                return {
                    top: (g.top - b.top + m.top) / x.y,
                    bottom: (b.bottom - g.bottom + m.bottom) / x.y,
                    left: (g.left - b.left + m.left) / x.x,
                    right: (b.right - g.right + m.right) / x.x
                }
            }

            function D(e, t) {
                return {
                    top: e.top - t.height,
                    right: e.right - t.width,
                    bottom: e.bottom - t.height,
                    left: e.left - t.width
                }
            }

            function L(e) {
                return o.some(t => e[t] >= 0)
            }
            let S = new Set(["left", "top"]);
            async function P(e, t) {
                let {
                    placement: n,
                    platform: r,
                    elements: o
                } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), a = p(n), l = h(n), u = "y" === y(n), c = S.has(a) ? -1 : 1, s = i && u ? -1 : 1, d = f(t, e), {
                    mainAxis: m,
                    crossAxis: v,
                    alignmentAxis: g
                } = "number" == typeof d ? {
                    mainAxis: d,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: d.mainAxis || 0,
                    crossAxis: d.crossAxis || 0,
                    alignmentAxis: d.alignmentAxis
                };
                return l && "number" == typeof g && (v = "end" === l ? -1 * g : g), u ? {
                    x: v * s,
                    y: m * c
                } : {
                    x: m * c,
                    y: v * s
                }
            }

            function O() {
                return "undefined" != typeof window
            }

            function N(e) {
                return _(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }

            function I(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function F(e) {
                var t;
                return null == (t = (_(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }

            function _(e) {
                return !!O() && (e instanceof Node || e instanceof I(e).Node)
            }

            function K(e) {
                return !!O() && (e instanceof Element || e instanceof I(e).Element)
            }

            function B(e) {
                return !!O() && (e instanceof HTMLElement || e instanceof I(e).HTMLElement)
            }

            function W(e) {
                return !!O() && "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof I(e).ShadowRoot)
            }
            let H = new Set(["inline", "contents"]);

            function G(e) {
                let {
                    overflow: t,
                    overflowX: n,
                    overflowY: r,
                    display: o
                } = ee(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !H.has(o)
            }
            let z = new Set(["table", "td", "th"]),
                q = [":popover-open", ":modal"];

            function V(e) {
                return q.some(t => {
                    try {
                        return e.matches(t)
                    } catch (e) {
                        return !1
                    }
                })
            }
            let U = ["transform", "translate", "scale", "rotate", "perspective"],
                X = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
                Y = ["paint", "layout", "strict", "content"];

            function Z(e) {
                let t = $(),
                    n = K(e) ? ee(e) : e;
                return U.some(e => !!n[e] && "none" !== n[e]) || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || X.some(e => (n.willChange || "").includes(e)) || Y.some(e => (n.contain || "").includes(e))
            }

            function $() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
            }
            let J = new Set(["html", "body", "#document"]);

            function Q(e) {
                return J.has(N(e))
            }

            function ee(e) {
                return I(e).getComputedStyle(e)
            }

            function et(e) {
                return K(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.scrollX,
                    scrollTop: e.scrollY
                }
            }

            function en(e) {
                if ("html" === N(e)) return e;
                let t = e.assignedSlot || e.parentNode || W(e) && e.host || F(e);
                return W(t) ? t.host : t
            }

            function er(e, t, n) {
                var r;
                void 0 === t && (t = []), void 0 === n && (n = !0);
                let o = function e(t) {
                        let n = en(t);
                        return Q(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : B(n) && G(n) ? n : e(n)
                    }(e),
                    i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
                    a = I(o);
                if (i) {
                    let e = eo(a);
                    return t.concat(a, a.visualViewport || [], G(o) ? o : [], e && n ? er(e) : [])
                }
                return t.concat(o, er(o, [], n))
            }

            function eo(e) {
                return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
            }

            function ei(e) {
                let t = ee(e),
                    n = parseFloat(t.width) || 0,
                    r = parseFloat(t.height) || 0,
                    o = B(e),
                    i = o ? e.offsetWidth : n,
                    a = o ? e.offsetHeight : r,
                    u = l(n) !== i || l(r) !== a;
                return u && (n = i, r = a), {
                    width: n,
                    height: r,
                    $: u
                }
            }

            function ea(e) {
                return K(e) ? e : e.contextElement
            }

            function el(e) {
                let t = ea(e);
                if (!B(t)) return c(1);
                let n = t.getBoundingClientRect(),
                    {
                        width: r,
                        height: o,
                        $: i
                    } = ei(t),
                    a = (i ? l(n.width) : n.width) / r,
                    u = (i ? l(n.height) : n.height) / o;
                return a && Number.isFinite(a) || (a = 1), u && Number.isFinite(u) || (u = 1), {
                    x: a,
                    y: u
                }
            }
            let eu = c(0);

            function ec(e) {
                let t = I(e);
                return $() && t.visualViewport ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop
                } : eu
            }

            function es(e, t, n, r) {
                var o;
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                let i = e.getBoundingClientRect(),
                    a = ea(e),
                    l = c(1);
                t && (r ? K(r) && (l = el(r)) : l = el(e));
                let u = (void 0 === (o = n) && (o = !1), r && (!o || r === I(a)) && o) ? ec(a) : c(0),
                    s = (i.left + u.x) / l.x,
                    d = (i.top + u.y) / l.y,
                    f = i.width / l.x,
                    p = i.height / l.y;
                if (a) {
                    let e = I(a),
                        t = r && K(r) ? I(r) : r,
                        n = e,
                        o = eo(n);
                    for (; o && r && t !== n;) {
                        let e = el(o),
                            t = o.getBoundingClientRect(),
                            r = ee(o),
                            i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                            a = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
                        s *= e.x, d *= e.y, f *= e.x, p *= e.y, s += i, d += a, o = eo(n = I(o))
                    }
                }
                return M({
                    width: f,
                    height: p,
                    x: s,
                    y: d
                })
            }

            function ed(e, t) {
                let n = et(e).scrollLeft;
                return t ? t.left + n : es(F(e)).left + n
            }

            function ef(e, t) {
                let n = e.getBoundingClientRect();
                return {
                    x: n.left + t.scrollLeft - ed(e, n),
                    y: n.top + t.scrollTop
                }
            }
            let ep = new Set(["absolute", "fixed"]);

            function eh(e, t, n) {
                let r;
                if ("viewport" === t) r = function(e, t) {
                    let n = I(e),
                        r = F(e),
                        o = n.visualViewport,
                        i = r.clientWidth,
                        a = r.clientHeight,
                        l = 0,
                        u = 0;
                    if (o) {
                        i = o.width, a = o.height;
                        let e = $();
                        (!e || e && "fixed" === t) && (l = o.offsetLeft, u = o.offsetTop)
                    }
                    let c = ed(r);
                    if (c <= 0) {
                        let e = r.ownerDocument,
                            t = e.body,
                            n = getComputedStyle(t),
                            o = "CSS1Compat" === e.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
                            a = Math.abs(r.clientWidth - t.clientWidth - o);
                        a <= 25 && (i -= a)
                    } else c <= 25 && (i += c);
                    return {
                        width: i,
                        height: a,
                        x: l,
                        y: u
                    }
                }(e, n);
                else if ("document" === t) r = function(e) {
                    let t = F(e),
                        n = et(e),
                        r = e.ownerDocument.body,
                        o = a(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
                        i = a(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
                        l = -n.scrollLeft + ed(e),
                        u = -n.scrollTop;
                    return "rtl" === ee(r).direction && (l += a(t.clientWidth, r.clientWidth) - o), {
                        width: o,
                        height: i,
                        x: l,
                        y: u
                    }
                }(F(e));
                else if (K(t)) r = function(e, t) {
                    let n = es(e, !0, "fixed" === t),
                        r = n.top + e.clientTop,
                        o = n.left + e.clientLeft,
                        i = B(e) ? el(e) : c(1),
                        a = e.clientWidth * i.x,
                        l = e.clientHeight * i.y;
                    return {
                        width: a,
                        height: l,
                        x: o * i.x,
                        y: r * i.y
                    }
                }(t, n);
                else {
                    let n = ec(e);
                    r = {
                        x: t.x - n.x,
                        y: t.y - n.y,
                        width: t.width,
                        height: t.height
                    }
                }
                return M(r)
            }

            function em(e) {
                return "static" === ee(e).position
            }

            function ev(e, t) {
                if (!B(e) || "fixed" === ee(e).position) return null;
                if (t) return t(e);
                let n = e.offsetParent;
                return F(e) === n && (n = n.ownerDocument.body), n
            }

            function eg(e, t) {
                var n;
                let r = I(e);
                if (V(e)) return r;
                if (!B(e)) {
                    let t = en(e);
                    for (; t && !Q(t);) {
                        if (K(t) && !em(t)) return t;
                        t = en(t)
                    }
                    return r
                }
                let o = ev(e, t);
                for (; o && (n = o, z.has(N(n))) && em(o);) o = ev(o, t);
                return o && Q(o) && em(o) && !Z(o) ? r : o || function(e) {
                    let t = en(e);
                    for (; B(t) && !Q(t);) {
                        if (Z(t)) return t;
                        if (V(t)) break;
                        t = en(t)
                    }
                    return null
                }(e) || r
            }
            let ey = async function(e) {
                    let t = this.getOffsetParent || eg,
                        n = this.getDimensions,
                        r = await n(e.floating);
                    return {
                        reference: function(e, t, n) {
                            let r = B(t),
                                o = F(t),
                                i = "fixed" === n,
                                a = es(e, !0, i, t),
                                l = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                u = c(0);
                            if (r || !r && !i)
                                if (("body" !== N(t) || G(o)) && (l = et(t)), r) {
                                    let e = es(t, !0, i, t);
                                    u.x = e.x + t.clientLeft, u.y = e.y + t.clientTop
                                } else o && (u.x = ed(o));
                            i && !r && o && (u.x = ed(o));
                            let s = !o || r || i ? c(0) : ef(o, l);
                            return {
                                x: a.left + l.scrollLeft - u.x - s.x,
                                y: a.top + l.scrollTop - u.y - s.y,
                                width: a.width,
                                height: a.height
                            }
                        }(e.reference, await t(e.floating), e.strategy),
                        floating: {
                            x: 0,
                            y: 0,
                            width: r.width,
                            height: r.height
                        }
                    }
                },
                ew = {
                    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                        let {
                            elements: t,
                            rect: n,
                            offsetParent: r,
                            strategy: o
                        } = e, i = "fixed" === o, a = F(r), l = !!t && V(t.floating);
                        if (r === a || l && i) return n;
                        let u = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            s = c(1),
                            d = c(0),
                            f = B(r);
                        if ((f || !f && !i) && (("body" !== N(r) || G(a)) && (u = et(r)), B(r))) {
                            let e = es(r);
                            s = el(r), d.x = e.x + r.clientLeft, d.y = e.y + r.clientTop
                        }
                        let p = !a || f || i ? c(0) : ef(a, u);
                        return {
                            width: n.width * s.x,
                            height: n.height * s.y,
                            x: n.x * s.x - u.scrollLeft * s.x + d.x + p.x,
                            y: n.y * s.y - u.scrollTop * s.y + d.y + p.y
                        }
                    },
                    getDocumentElement: F,
                    getClippingRect: function(e) {
                        let {
                            element: t,
                            boundary: n,
                            rootBoundary: r,
                            strategy: o
                        } = e, l = [..."clippingAncestors" === n ? V(t) ? [] : function(e, t) {
                            let n = t.get(e);
                            if (n) return n;
                            let r = er(e, [], !1).filter(e => K(e) && "body" !== N(e)),
                                o = null,
                                i = "fixed" === ee(e).position,
                                a = i ? en(e) : e;
                            for (; K(a) && !Q(a);) {
                                let t = ee(a),
                                    n = Z(a);
                                n || "fixed" !== t.position || (o = null), (i ? !n && !o : !n && "static" === t.position && !!o && ep.has(o.position) || G(a) && !n && function e(t, n) {
                                    let r = en(t);
                                    return !(r === n || !K(r) || Q(r)) && ("fixed" === ee(r).position || e(r, n))
                                }(e, a)) ? r = r.filter(e => e !== a) : o = t, a = en(a)
                            }
                            return t.set(e, r), r
                        }(t, this._c) : [].concat(n), r], u = l[0], c = l.reduce((e, n) => {
                            let r = eh(t, n, o);
                            return e.top = a(r.top, e.top), e.right = i(r.right, e.right), e.bottom = i(r.bottom, e.bottom), e.left = a(r.left, e.left), e
                        }, eh(t, u, o));
                        return {
                            width: c.right - c.left,
                            height: c.bottom - c.top,
                            x: c.left,
                            y: c.top
                        }
                    },
                    getOffsetParent: eg,
                    getElementRects: ey,
                    getClientRects: function(e) {
                        return Array.from(e.getClientRects())
                    },
                    getDimensions: function(e) {
                        let {
                            width: t,
                            height: n
                        } = ei(e);
                        return {
                            width: t,
                            height: n
                        }
                    },
                    getScale: el,
                    isElement: K,
                    isRTL: function(e) {
                        return "rtl" === ee(e).direction
                    }
                };

            function ex(e, t) {
                return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
            }
            let eb = e => ({
                    name: "arrow",
                    options: e,
                    async fn(t) {
                        let {
                            x: n,
                            y: r,
                            placement: o,
                            rects: l,
                            platform: u,
                            elements: c,
                            middlewareData: s
                        } = t, {
                            element: d,
                            padding: p = 0
                        } = f(e, t) || {};
                        if (null == d) return {};
                        let g = R(p),
                            w = {
                                x: n,
                                y: r
                            },
                            x = m(y(o)),
                            b = v(x),
                            E = await u.getDimensions(d),
                            C = "y" === x,
                            k = C ? "clientHeight" : "clientWidth",
                            M = l.reference[b] + l.reference[x] - w[x] - l.floating[b],
                            A = w[x] - l.reference[x],
                            T = await (null == u.getOffsetParent ? void 0 : u.getOffsetParent(d)),
                            j = T ? T[k] : 0;
                        j && await (null == u.isElement ? void 0 : u.isElement(T)) || (j = c.floating[k] || l.floating[b]);
                        let D = j / 2 - E[b] / 2 - 1,
                            L = i(g[C ? "top" : "left"], D),
                            S = i(g[C ? "bottom" : "right"], D),
                            P = j - E[b] - S,
                            O = j / 2 - E[b] / 2 + (M / 2 - A / 2),
                            N = a(L, i(O, P)),
                            I = !s.arrow && null != h(o) && O !== N && l.reference[b] / 2 - (O < L ? L : S) - E[b] / 2 < 0,
                            F = I ? O < L ? O - L : O - P : 0;
                        return {
                            [x]: w[x] + F,
                            data: {
                                [x]: N,
                                centerOffset: O - N - F,
                                ...I && {
                                    alignmentOffset: F
                                }
                            },
                            reset: I
                        }
                    }
                }),
                eE = (e, t, n) => {
                    let r = new Map,
                        o = {
                            platform: ew,
                            ...n
                        },
                        i = { ...o.platform,
                            _c: r
                        };
                    return T(e, t, { ...o,
                        platform: i
                    })
                };
            var eC = n(7650),
                ek = "undefined" != typeof document ? r.useLayoutEffect : function() {};

            function eR(e, t) {
                let n, r, o;
                if (e === t) return !0;
                if (typeof e != typeof t) return !1;
                if ("function" == typeof e && e.toString() === t.toString()) return !0;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if ((n = e.length) !== t.length) return !1;
                        for (r = n; 0 != r--;)
                            if (!eR(e[r], t[r])) return !1;
                        return !0
                    }
                    if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
                    for (r = n; 0 != r--;)
                        if (!({}).hasOwnProperty.call(t, o[r])) return !1;
                    for (r = n; 0 != r--;) {
                        let n = o[r];
                        if (("_owner" !== n || !e.$$typeof) && !eR(e[n], t[n])) return !1
                    }
                    return !0
                }
                return e != e && t != t
            }

            function eM(e) {
                return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
            }

            function eA(e, t) {
                let n = eM(e);
                return Math.round(t * n) / n
            }

            function eT(e) {
                let t = r.useRef(e);
                return ek(() => {
                    t.current = e
                }), t
            }
            let ej = e => ({
                    name: "arrow",
                    options: e,
                    fn(t) {
                        let {
                            element: n,
                            padding: r
                        } = "function" == typeof e ? e(t) : e;
                        return n && ({}).hasOwnProperty.call(n, "current") ? null != n.current ? eb({
                            element: n.current,
                            padding: r
                        }).fn(t) : {} : n ? eb({
                            element: n,
                            padding: r
                        }).fn(t) : {}
                    }
                }),
                eD = (e, t) => ({ ... function(e) {
                        return void 0 === e && (e = 0), {
                            name: "offset",
                            options: e,
                            async fn(t) {
                                var n, r;
                                let {
                                    x: o,
                                    y: i,
                                    placement: a,
                                    middlewareData: l
                                } = t, u = await P(t, e);
                                return a === (null == (n = l.offset) ? void 0 : n.placement) && null != (r = l.arrow) && r.alignmentOffset ? {} : {
                                    x: o + u.x,
                                    y: i + u.y,
                                    data: { ...u,
                                        placement: a
                                    }
                                }
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                eL = (e, t) => ({ ... function(e) {
                        return void 0 === e && (e = {}), {
                            name: "shift",
                            options: e,
                            async fn(t) {
                                let {
                                    x: n,
                                    y: r,
                                    placement: o
                                } = t, {
                                    mainAxis: l = !0,
                                    crossAxis: u = !1,
                                    limiter: c = {
                                        fn: e => {
                                            let {
                                                x: t,
                                                y: n
                                            } = e;
                                            return {
                                                x: t,
                                                y: n
                                            }
                                        }
                                    },
                                    ...s
                                } = f(e, t), d = {
                                    x: n,
                                    y: r
                                }, h = await j(t, s), v = y(p(o)), g = m(v), w = d[g], x = d[v];
                                if (l) {
                                    let e = "y" === g ? "top" : "left",
                                        t = "y" === g ? "bottom" : "right",
                                        n = w + h[e],
                                        r = w - h[t];
                                    w = a(n, i(w, r))
                                }
                                if (u) {
                                    let e = "y" === v ? "top" : "left",
                                        t = "y" === v ? "bottom" : "right",
                                        n = x + h[e],
                                        r = x - h[t];
                                    x = a(n, i(x, r))
                                }
                                let b = c.fn({ ...t,
                                    [g]: w,
                                    [v]: x
                                });
                                return { ...b,
                                    data: {
                                        x: b.x - n,
                                        y: b.y - r,
                                        enabled: {
                                            [g]: l,
                                            [v]: u
                                        }
                                    }
                                }
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                eS = (e, t) => ({ ... function(e) {
                        return void 0 === e && (e = {}), {
                            options: e,
                            fn(t) {
                                let {
                                    x: n,
                                    y: r,
                                    placement: o,
                                    rects: i,
                                    middlewareData: a
                                } = t, {
                                    offset: l = 0,
                                    mainAxis: u = !0,
                                    crossAxis: c = !0
                                } = f(e, t), s = {
                                    x: n,
                                    y: r
                                }, d = y(o), h = m(d), v = s[h], g = s[d], w = f(l, t), x = "number" == typeof w ? {
                                    mainAxis: w,
                                    crossAxis: 0
                                } : {
                                    mainAxis: 0,
                                    crossAxis: 0,
                                    ...w
                                };
                                if (u) {
                                    let e = "y" === h ? "height" : "width",
                                        t = i.reference[h] - i.floating[e] + x.mainAxis,
                                        n = i.reference[h] + i.reference[e] - x.mainAxis;
                                    v < t ? v = t : v > n && (v = n)
                                }
                                if (c) {
                                    var b, E;
                                    let e = "y" === h ? "width" : "height",
                                        t = S.has(p(o)),
                                        n = i.reference[d] - i.floating[e] + (t && (null == (b = a.offset) ? void 0 : b[d]) || 0) + (t ? 0 : x.crossAxis),
                                        r = i.reference[d] + i.reference[e] + (t ? 0 : (null == (E = a.offset) ? void 0 : E[d]) || 0) - (t ? x.crossAxis : 0);
                                    g < n ? g = n : g > r && (g = r)
                                }
                                return {
                                    [h]: v,
                                    [d]: g
                                }
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                eP = (e, t) => ({ ... function(e) {
                        return void 0 === e && (e = {}), {
                            name: "flip",
                            options: e,
                            async fn(t) {
                                var n, r, o, i, a;
                                let {
                                    placement: l,
                                    middlewareData: u,
                                    rects: c,
                                    initialPlacement: s,
                                    platform: d,
                                    elements: g
                                } = t, {
                                    mainAxis: R = !0,
                                    crossAxis: M = !0,
                                    fallbackPlacements: A,
                                    fallbackStrategy: T = "bestFit",
                                    fallbackAxisSideDirection: D = "none",
                                    flipAlignment: L = !0,
                                    ...S
                                } = f(e, t);
                                if (null != (n = u.arrow) && n.alignmentOffset) return {};
                                let P = p(l),
                                    O = y(s),
                                    N = p(s) === s,
                                    I = await (null == d.isRTL ? void 0 : d.isRTL(g.floating)),
                                    F = A || (N || !L ? [k(s)] : function(e) {
                                        let t = k(e);
                                        return [w(e), t, w(t)]
                                    }(s)),
                                    _ = "none" !== D;
                                !A && _ && F.push(... function(e, t, n, r) {
                                    let o = h(e),
                                        i = function(e, t, n) {
                                            switch (e) {
                                                case "top":
                                                case "bottom":
                                                    if (n) return t ? b : x;
                                                    return t ? x : b;
                                                case "left":
                                                case "right":
                                                    return t ? E : C;
                                                default:
                                                    return []
                                            }
                                        }(p(e), "start" === n, r);
                                    return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(w)))), i
                                }(s, L, D, I));
                                let K = [s, ...F],
                                    B = await j(t, S),
                                    W = [],
                                    H = (null == (r = u.flip) ? void 0 : r.overflows) || [];
                                if (R && W.push(B[P]), M) {
                                    let e = function(e, t, n) {
                                        void 0 === n && (n = !1);
                                        let r = h(e),
                                            o = m(y(e)),
                                            i = v(o),
                                            a = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                                        return t.reference[i] > t.floating[i] && (a = k(a)), [a, k(a)]
                                    }(l, c, I);
                                    W.push(B[e[0]], B[e[1]])
                                }
                                if (H = [...H, {
                                        placement: l,
                                        overflows: W
                                    }], !W.every(e => e <= 0)) {
                                    let e = ((null == (o = u.flip) ? void 0 : o.index) || 0) + 1,
                                        t = K[e];
                                    if (t && ("alignment" !== M || O === y(t) || H.every(e => y(e.placement) !== O || e.overflows[0] > 0))) return {
                                        data: {
                                            index: e,
                                            overflows: H
                                        },
                                        reset: {
                                            placement: t
                                        }
                                    };
                                    let n = null == (i = H.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : i.placement;
                                    if (!n) switch (T) {
                                        case "bestFit":
                                            {
                                                let e = null == (a = H.filter(e => {
                                                    if (_) {
                                                        let t = y(e.placement);
                                                        return t === O || "y" === t
                                                    }
                                                    return !0
                                                }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : a[0];e && (n = e);
                                                break
                                            }
                                        case "initialPlacement":
                                            n = s
                                    }
                                    if (l !== n) return {
                                        reset: {
                                            placement: n
                                        }
                                    }
                                }
                                return {}
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                eO = (e, t) => ({ ... function(e) {
                        return void 0 === e && (e = {}), {
                            name: "size",
                            options: e,
                            async fn(t) {
                                var n, r;
                                let o, l, {
                                        placement: u,
                                        rects: c,
                                        platform: s,
                                        elements: d
                                    } = t,
                                    {
                                        apply: m = () => {},
                                        ...v
                                    } = f(e, t),
                                    g = await j(t, v),
                                    w = p(u),
                                    x = h(u),
                                    b = "y" === y(u),
                                    {
                                        width: E,
                                        height: C
                                    } = c.floating;
                                "top" === w || "bottom" === w ? (o = w, l = x === (await (null == s.isRTL ? void 0 : s.isRTL(d.floating)) ? "start" : "end") ? "left" : "right") : (l = w, o = "end" === x ? "top" : "bottom");
                                let k = C - g.top - g.bottom,
                                    R = E - g.left - g.right,
                                    M = i(C - g[o], k),
                                    A = i(E - g[l], R),
                                    T = !t.middlewareData.shift,
                                    D = M,
                                    L = A;
                                if (null != (n = t.middlewareData.shift) && n.enabled.x && (L = R), null != (r = t.middlewareData.shift) && r.enabled.y && (D = k), T && !x) {
                                    let e = a(g.left, 0),
                                        t = a(g.right, 0),
                                        n = a(g.top, 0),
                                        r = a(g.bottom, 0);
                                    b ? L = E - 2 * (0 !== e || 0 !== t ? e + t : a(g.left, g.right)) : D = C - 2 * (0 !== n || 0 !== r ? n + r : a(g.top, g.bottom))
                                }
                                await m({ ...t,
                                    availableWidth: L,
                                    availableHeight: D
                                });
                                let S = await s.getDimensions(d.floating);
                                return E !== S.width || C !== S.height ? {
                                    reset: {
                                        rects: !0
                                    }
                                } : {}
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                eN = (e, t) => ({ ... function(e) {
                        return void 0 === e && (e = {}), {
                            name: "hide",
                            options: e,
                            async fn(t) {
                                let {
                                    rects: n
                                } = t, {
                                    strategy: r = "referenceHidden",
                                    ...o
                                } = f(e, t);
                                switch (r) {
                                    case "referenceHidden":
                                        {
                                            let e = D(await j(t, { ...o,
                                                elementContext: "reference"
                                            }), n.reference);
                                            return {
                                                data: {
                                                    referenceHiddenOffsets: e,
                                                    referenceHidden: L(e)
                                                }
                                            }
                                        }
                                    case "escaped":
                                        {
                                            let e = D(await j(t, { ...o,
                                                altBoundary: !0
                                            }), n.floating);
                                            return {
                                                data: {
                                                    escapedOffsets: e,
                                                    escaped: L(e)
                                                }
                                            }
                                        }
                                    default:
                                        return {}
                                }
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                eI = (e, t) => ({ ...ej(e),
                    options: [e, t]
                });
            var eF = n(3655),
                e_ = n(5155),
                eK = r.forwardRef((e, t) => {
                    let {
                        children: n,
                        width: r = 10,
                        height: o = 5,
                        ...i
                    } = e;
                    return (0, e_.jsx)(eF.sG.svg, { ...i,
                        ref: t,
                        width: r,
                        height: o,
                        viewBox: "0 0 30 10",
                        preserveAspectRatio: "none",
                        children: e.asChild ? n : (0, e_.jsx)("polygon", {
                            points: "0,0 30,0 15,10"
                        })
                    })
                });
            eK.displayName = "Arrow";
            var eB = n(6101),
                eW = n(6081),
                eH = n(9033),
                eG = n(2712),
                ez = n(1275),
                eq = "Popper",
                [eV, eU] = (0, eW.A)(eq),
                [eX, eY] = eV(eq),
                eZ = e => {
                    let {
                        __scopePopper: t,
                        children: n
                    } = e, [o, i] = r.useState(null);
                    return (0, e_.jsx)(eX, {
                        scope: t,
                        anchor: o,
                        onAnchorChange: i,
                        children: n
                    })
                };
            eZ.displayName = eq;
            var e$ = "PopperAnchor",
                eJ = r.forwardRef((e, t) => {
                    let {
                        __scopePopper: n,
                        virtualRef: o,
                        ...i
                    } = e, a = eY(e$, n), l = r.useRef(null), u = (0, eB.s)(t, l), c = r.useRef(null);
                    return r.useEffect(() => {
                        let e = c.current;
                        c.current = (null == o ? void 0 : o.current) || l.current, e !== c.current && a.onAnchorChange(c.current)
                    }), o ? null : (0, e_.jsx)(eF.sG.div, { ...i,
                        ref: u
                    })
                });
            eJ.displayName = e$;
            var eQ = "PopperContent",
                [e0, e1] = eV(eQ),
                e2 = r.forwardRef((e, t) => {
                    var n, o, l, c, s, d, f, p;
                    let {
                        __scopePopper: h,
                        side: m = "bottom",
                        sideOffset: v = 0,
                        align: g = "center",
                        alignOffset: y = 0,
                        arrowPadding: w = 0,
                        avoidCollisions: x = !0,
                        collisionBoundary: b = [],
                        collisionPadding: E = 0,
                        sticky: C = "partial",
                        hideWhenDetached: k = !1,
                        updatePositionStrategy: R = "optimized",
                        onPlaced: M,
                        ...A
                    } = e, T = eY(eQ, h), [j, D] = r.useState(null), L = (0, eB.s)(t, e => D(e)), [S, P] = r.useState(null), O = (0, ez.X)(S), N = null != (f = null == O ? void 0 : O.width) ? f : 0, I = null != (p = null == O ? void 0 : O.height) ? p : 0, _ = "number" == typeof E ? E : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...E
                    }, K = Array.isArray(b) ? b : [b], B = K.length > 0, W = {
                        padding: _,
                        boundary: K.filter(e4),
                        altBoundary: B
                    }, {
                        refs: H,
                        floatingStyles: G,
                        placement: z,
                        isPositioned: q,
                        middlewareData: V
                    } = function(e) {
                        void 0 === e && (e = {});
                        let {
                            placement: t = "bottom",
                            strategy: n = "absolute",
                            middleware: o = [],
                            platform: i,
                            elements: {
                                reference: a,
                                floating: l
                            } = {},
                            transform: u = !0,
                            whileElementsMounted: c,
                            open: s
                        } = e, [d, f] = r.useState({
                            x: 0,
                            y: 0,
                            strategy: n,
                            placement: t,
                            middlewareData: {},
                            isPositioned: !1
                        }), [p, h] = r.useState(o);
                        eR(p, o) || h(o);
                        let [m, v] = r.useState(null), [g, y] = r.useState(null), w = r.useCallback(e => {
                            e !== C.current && (C.current = e, v(e))
                        }, []), x = r.useCallback(e => {
                            e !== k.current && (k.current = e, y(e))
                        }, []), b = a || m, E = l || g, C = r.useRef(null), k = r.useRef(null), R = r.useRef(d), M = null != c, A = eT(c), T = eT(i), j = eT(s), D = r.useCallback(() => {
                            if (!C.current || !k.current) return;
                            let e = {
                                placement: t,
                                strategy: n,
                                middleware: p
                            };
                            T.current && (e.platform = T.current), eE(C.current, k.current, e).then(e => {
                                let t = { ...e,
                                    isPositioned: !1 !== j.current
                                };
                                L.current && !eR(R.current, t) && (R.current = t, eC.flushSync(() => {
                                    f(t)
                                }))
                            })
                        }, [p, t, n, T, j]);
                        ek(() => {
                            !1 === s && R.current.isPositioned && (R.current.isPositioned = !1, f(e => ({ ...e,
                                isPositioned: !1
                            })))
                        }, [s]);
                        let L = r.useRef(!1);
                        ek(() => (L.current = !0, () => {
                            L.current = !1
                        }), []), ek(() => {
                            if (b && (C.current = b), E && (k.current = E), b && E) {
                                if (A.current) return A.current(b, E, D);
                                D()
                            }
                        }, [b, E, D, A, M]);
                        let S = r.useMemo(() => ({
                                reference: C,
                                floating: k,
                                setReference: w,
                                setFloating: x
                            }), [w, x]),
                            P = r.useMemo(() => ({
                                reference: b,
                                floating: E
                            }), [b, E]),
                            O = r.useMemo(() => {
                                let e = {
                                    position: n,
                                    left: 0,
                                    top: 0
                                };
                                if (!P.floating) return e;
                                let t = eA(P.floating, d.x),
                                    r = eA(P.floating, d.y);
                                return u ? { ...e,
                                    transform: "translate(" + t + "px, " + r + "px)",
                                    ...eM(P.floating) >= 1.5 && {
                                        willChange: "transform"
                                    }
                                } : {
                                    position: n,
                                    left: t,
                                    top: r
                                }
                            }, [n, u, P.floating, d.x, d.y]);
                        return r.useMemo(() => ({ ...d,
                            update: D,
                            refs: S,
                            elements: P,
                            floatingStyles: O
                        }), [d, D, S, P, O])
                    }({
                        strategy: "fixed",
                        placement: m + ("center" !== g ? "-" + g : ""),
                        whileElementsMounted: function() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return function(e, t, n, r) {
                                let o;
                                void 0 === r && (r = {});
                                let {
                                    ancestorScroll: l = !0,
                                    ancestorResize: c = !0,
                                    elementResize: s = "function" == typeof ResizeObserver,
                                    layoutShift: d = "function" == typeof IntersectionObserver,
                                    animationFrame: f = !1
                                } = r, p = ea(e), h = l || c ? [...p ? er(p) : [], ...er(t)] : [];
                                h.forEach(e => {
                                    l && e.addEventListener("scroll", n, {
                                        passive: !0
                                    }), c && e.addEventListener("resize", n)
                                });
                                let m = p && d ? function(e, t) {
                                        let n, r = null,
                                            o = F(e);

                                        function l() {
                                            var e;
                                            clearTimeout(n), null == (e = r) || e.disconnect(), r = null
                                        }
                                        return ! function c(s, d) {
                                            void 0 === s && (s = !1), void 0 === d && (d = 1), l();
                                            let f = e.getBoundingClientRect(),
                                                {
                                                    left: p,
                                                    top: h,
                                                    width: m,
                                                    height: v
                                                } = f;
                                            if (s || t(), !m || !v) return;
                                            let g = u(h),
                                                y = u(o.clientWidth - (p + m)),
                                                w = {
                                                    rootMargin: -g + "px " + -y + "px " + -u(o.clientHeight - (h + v)) + "px " + -u(p) + "px",
                                                    threshold: a(0, i(1, d)) || 1
                                                },
                                                x = !0;

                                            function b(t) {
                                                let r = t[0].intersectionRatio;
                                                if (r !== d) {
                                                    if (!x) return c();
                                                    r ? c(!1, r) : n = setTimeout(() => {
                                                        c(!1, 1e-7)
                                                    }, 1e3)
                                                }
                                                1 !== r || ex(f, e.getBoundingClientRect()) || c(), x = !1
                                            }
                                            try {
                                                r = new IntersectionObserver(b, { ...w,
                                                    root: o.ownerDocument
                                                })
                                            } catch (e) {
                                                r = new IntersectionObserver(b, w)
                                            }
                                            r.observe(e)
                                        }(!0), l
                                    }(p, n) : null,
                                    v = -1,
                                    g = null;
                                s && (g = new ResizeObserver(e => {
                                    let [r] = e;
                                    r && r.target === p && g && (g.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
                                        var e;
                                        null == (e = g) || e.observe(t)
                                    })), n()
                                }), p && !f && g.observe(p), g.observe(t));
                                let y = f ? es(e) : null;
                                return f && function t() {
                                    let r = es(e);
                                    y && !ex(y, r) && n(), y = r, o = requestAnimationFrame(t)
                                }(), n(), () => {
                                    var e;
                                    h.forEach(e => {
                                        l && e.removeEventListener("scroll", n), c && e.removeEventListener("resize", n)
                                    }), null == m || m(), null == (e = g) || e.disconnect(), g = null, f && cancelAnimationFrame(o)
                                }
                            }(...t, {
                                animationFrame: "always" === R
                            })
                        },
                        elements: {
                            reference: T.anchor
                        },
                        middleware: [eD({
                            mainAxis: v + I,
                            alignmentAxis: y
                        }), x && eL({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: "partial" === C ? eS() : void 0,
                            ...W
                        }), x && eP({ ...W
                        }), eO({ ...W,
                            apply: e => {
                                let {
                                    elements: t,
                                    rects: n,
                                    availableWidth: r,
                                    availableHeight: o
                                } = e, {
                                    width: i,
                                    height: a
                                } = n.reference, l = t.floating.style;
                                l.setProperty("--radix-popper-available-width", "".concat(r, "px")), l.setProperty("--radix-popper-available-height", "".concat(o, "px")), l.setProperty("--radix-popper-anchor-width", "".concat(i, "px")), l.setProperty("--radix-popper-anchor-height", "".concat(a, "px"))
                            }
                        }), S && eI({
                            element: S,
                            padding: w
                        }), e6({
                            arrowWidth: N,
                            arrowHeight: I
                        }), k && eN({
                            strategy: "referenceHidden",
                            ...W
                        })]
                    }), [U, X] = e8(z), Y = (0, eH.c)(M);
                    (0, eG.N)(() => {
                        q && (null == Y || Y())
                    }, [q, Y]);
                    let Z = null == (n = V.arrow) ? void 0 : n.x,
                        $ = null == (o = V.arrow) ? void 0 : o.y,
                        J = (null == (l = V.arrow) ? void 0 : l.centerOffset) !== 0,
                        [Q, ee] = r.useState();
                    return (0, eG.N)(() => {
                        j && ee(window.getComputedStyle(j).zIndex)
                    }, [j]), (0, e_.jsx)("div", {
                        ref: H.setFloating,
                        "data-radix-popper-content-wrapper": "",
                        style: { ...G,
                            transform: q ? G.transform : "translate(0, -200%)",
                            minWidth: "max-content",
                            zIndex: Q,
                            "--radix-popper-transform-origin": [null == (c = V.transformOrigin) ? void 0 : c.x, null == (s = V.transformOrigin) ? void 0 : s.y].join(" "),
                            ...(null == (d = V.hide) ? void 0 : d.referenceHidden) && {
                                visibility: "hidden",
                                pointerEvents: "none"
                            }
                        },
                        dir: e.dir,
                        children: (0, e_.jsx)(e0, {
                            scope: h,
                            placedSide: U,
                            onArrowChange: P,
                            arrowX: Z,
                            arrowY: $,
                            shouldHideArrow: J,
                            children: (0, e_.jsx)(eF.sG.div, {
                                "data-side": U,
                                "data-align": X,
                                ...A,
                                ref: L,
                                style: { ...A.style,
                                    animation: q ? void 0 : "none"
                                }
                            })
                        })
                    })
                });
            e2.displayName = eQ;
            var e5 = "PopperArrow",
                e3 = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                },
                e9 = r.forwardRef(function(e, t) {
                    let {
                        __scopePopper: n,
                        ...r
                    } = e, o = e1(e5, n), i = e3[o.placedSide];
                    return (0, e_.jsx)("span", {
                        ref: o.onArrowChange,
                        style: {
                            position: "absolute",
                            left: o.arrowX,
                            top: o.arrowY,
                            [i]: 0,
                            transformOrigin: {
                                top: "",
                                right: "0 0",
                                bottom: "center 0",
                                left: "100% 0"
                            }[o.placedSide],
                            transform: {
                                top: "translateY(100%)",
                                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                                bottom: "rotate(180deg)",
                                left: "translateY(50%) rotate(-90deg) translateX(50%)"
                            }[o.placedSide],
                            visibility: o.shouldHideArrow ? "hidden" : void 0
                        },
                        children: (0, e_.jsx)(eK, { ...r,
                            ref: t,
                            style: { ...r.style,
                                display: "block"
                            }
                        })
                    })
                });

            function e4(e) {
                return null !== e
            }
            e9.displayName = e5;
            var e6 = e => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    var n, r, o, i, a;
                    let {
                        placement: l,
                        rects: u,
                        middlewareData: c
                    } = t, s = (null == (n = c.arrow) ? void 0 : n.centerOffset) !== 0, d = s ? 0 : e.arrowWidth, f = s ? 0 : e.arrowHeight, [p, h] = e8(l), m = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    }[h], v = (null != (i = null == (r = c.arrow) ? void 0 : r.x) ? i : 0) + d / 2, g = (null != (a = null == (o = c.arrow) ? void 0 : o.y) ? a : 0) + f / 2, y = "", w = "";
                    return "bottom" === p ? (y = s ? m : "".concat(v, "px"), w = "".concat(-f, "px")) : "top" === p ? (y = s ? m : "".concat(v, "px"), w = "".concat(u.floating.height + f, "px")) : "right" === p ? (y = "".concat(-f, "px"), w = s ? m : "".concat(g, "px")) : "left" === p && (y = "".concat(u.floating.width + f, "px"), w = s ? m : "".concat(g, "px")), {
                        data: {
                            x: y,
                            y: w
                        }
                    }
                }
            });

            function e8(e) {
                let [t, n = "center"] = e.split("-");
                return [t, n]
            }
            var e7 = eZ,
                te = eJ,
                tt = e2,
                tn = e9
        },
        5452: (e, t, n) => {
            n.d(t, {
                UC: () => ee,
                VY: () => en,
                ZL: () => J,
                bL: () => $,
                bm: () => er,
                hE: () => et,
                hJ: () => Q
            });
            var r = n(2115),
                o = n(5185),
                i = n(6101),
                a = n(6081),
                l = n(1285),
                u = n(5845),
                c = n(9178),
                s = n(7900),
                d = n(4378),
                f = n(8905),
                p = n(3655),
                h = n(2293),
                m = n(3795),
                v = n(8168),
                g = n(9708),
                y = n(5155),
                w = "Dialog",
                [x, b] = (0, a.A)(w),
                [E, C] = x(w),
                k = e => {
                    let {
                        __scopeDialog: t,
                        children: n,
                        open: o,
                        defaultOpen: i,
                        onOpenChange: a,
                        modal: c = !0
                    } = e, s = r.useRef(null), d = r.useRef(null), [f, p] = (0, u.i)({
                        prop: o,
                        defaultProp: null != i && i,
                        onChange: a,
                        caller: w
                    });
                    return (0, y.jsx)(E, {
                        scope: t,
                        triggerRef: s,
                        contentRef: d,
                        contentId: (0, l.B)(),
                        titleId: (0, l.B)(),
                        descriptionId: (0, l.B)(),
                        open: f,
                        onOpenChange: p,
                        onOpenToggle: r.useCallback(() => p(e => !e), [p]),
                        modal: c,
                        children: n
                    })
                };
            k.displayName = w;
            var R = "DialogTrigger";
            r.forwardRef((e, t) => {
                let {
                    __scopeDialog: n,
                    ...r
                } = e, a = C(R, n), l = (0, i.s)(t, a.triggerRef);
                return (0, y.jsx)(p.sG.button, {
                    type: "button",
                    "aria-haspopup": "dialog",
                    "aria-expanded": a.open,
                    "aria-controls": a.contentId,
                    "data-state": q(a.open),
                    ...r,
                    ref: l,
                    onClick: (0, o.mK)(e.onClick, a.onOpenToggle)
                })
            }).displayName = R;
            var M = "DialogPortal",
                [A, T] = x(M, {
                    forceMount: void 0
                }),
                j = e => {
                    let {
                        __scopeDialog: t,
                        forceMount: n,
                        children: o,
                        container: i
                    } = e, a = C(M, t);
                    return (0, y.jsx)(A, {
                        scope: t,
                        forceMount: n,
                        children: r.Children.map(o, e => (0, y.jsx)(f.C, {
                            present: n || a.open,
                            children: (0, y.jsx)(d.Z, {
                                asChild: !0,
                                container: i,
                                children: e
                            })
                        }))
                    })
                };
            j.displayName = M;
            var D = "DialogOverlay",
                L = r.forwardRef((e, t) => {
                    let n = T(D, e.__scopeDialog),
                        {
                            forceMount: r = n.forceMount,
                            ...o
                        } = e,
                        i = C(D, e.__scopeDialog);
                    return i.modal ? (0, y.jsx)(f.C, {
                        present: r || i.open,
                        children: (0, y.jsx)(P, { ...o,
                            ref: t
                        })
                    }) : null
                });
            L.displayName = D;
            var S = (0, g.TL)("DialogOverlay.RemoveScroll"),
                P = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = C(D, n);
                    return (0, y.jsx)(m.A, {
                        as: S,
                        allowPinchZoom: !0,
                        shards: [o.contentRef],
                        children: (0, y.jsx)(p.sG.div, {
                            "data-state": q(o.open),
                            ...r,
                            ref: t,
                            style: {
                                pointerEvents: "auto",
                                ...r.style
                            }
                        })
                    })
                }),
                O = "DialogContent",
                N = r.forwardRef((e, t) => {
                    let n = T(O, e.__scopeDialog),
                        {
                            forceMount: r = n.forceMount,
                            ...o
                        } = e,
                        i = C(O, e.__scopeDialog);
                    return (0, y.jsx)(f.C, {
                        present: r || i.open,
                        children: i.modal ? (0, y.jsx)(I, { ...o,
                            ref: t
                        }) : (0, y.jsx)(F, { ...o,
                            ref: t
                        })
                    })
                });
            N.displayName = O;
            var I = r.forwardRef((e, t) => {
                    let n = C(O, e.__scopeDialog),
                        a = r.useRef(null),
                        l = (0, i.s)(t, n.contentRef, a);
                    return r.useEffect(() => {
                        let e = a.current;
                        if (e) return (0, v.Eq)(e)
                    }, []), (0, y.jsx)(_, { ...e,
                        ref: l,
                        trapFocus: n.open,
                        disableOutsidePointerEvents: !0,
                        onCloseAutoFocus: (0, o.mK)(e.onCloseAutoFocus, e => {
                            var t;
                            e.preventDefault(), null == (t = n.triggerRef.current) || t.focus()
                        }),
                        onPointerDownOutside: (0, o.mK)(e.onPointerDownOutside, e => {
                            let t = e.detail.originalEvent,
                                n = 0 === t.button && !0 === t.ctrlKey;
                            (2 === t.button || n) && e.preventDefault()
                        }),
                        onFocusOutside: (0, o.mK)(e.onFocusOutside, e => e.preventDefault())
                    })
                }),
                F = r.forwardRef((e, t) => {
                    let n = C(O, e.__scopeDialog),
                        o = r.useRef(!1),
                        i = r.useRef(!1);
                    return (0, y.jsx)(_, { ...e,
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: t => {
                            var r, a;
                            null == (r = e.onCloseAutoFocus) || r.call(e, t), t.defaultPrevented || (o.current || null == (a = n.triggerRef.current) || a.focus(), t.preventDefault()), o.current = !1, i.current = !1
                        },
                        onInteractOutside: t => {
                            var r, a;
                            null == (r = e.onInteractOutside) || r.call(e, t), t.defaultPrevented || (o.current = !0, "pointerdown" === t.detail.originalEvent.type && (i.current = !0));
                            let l = t.target;
                            (null == (a = n.triggerRef.current) ? void 0 : a.contains(l)) && t.preventDefault(), "focusin" === t.detail.originalEvent.type && i.current && t.preventDefault()
                        }
                    })
                }),
                _ = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        trapFocus: o,
                        onOpenAutoFocus: a,
                        onCloseAutoFocus: l,
                        ...u
                    } = e, d = C(O, n), f = r.useRef(null), p = (0, i.s)(t, f);
                    return (0, h.Oh)(), (0, y.jsxs)(y.Fragment, {
                        children: [(0, y.jsx)(s.n, {
                            asChild: !0,
                            loop: !0,
                            trapped: o,
                            onMountAutoFocus: a,
                            onUnmountAutoFocus: l,
                            children: (0, y.jsx)(c.qW, {
                                role: "dialog",
                                id: d.contentId,
                                "aria-describedby": d.descriptionId,
                                "aria-labelledby": d.titleId,
                                "data-state": q(d.open),
                                ...u,
                                ref: p,
                                onDismiss: () => d.onOpenChange(!1)
                            })
                        }), (0, y.jsxs)(y.Fragment, {
                            children: [(0, y.jsx)(Y, {
                                titleId: d.titleId
                            }), (0, y.jsx)(Z, {
                                contentRef: f,
                                descriptionId: d.descriptionId
                            })]
                        })]
                    })
                }),
                K = "DialogTitle",
                B = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = C(K, n);
                    return (0, y.jsx)(p.sG.h2, {
                        id: o.titleId,
                        ...r,
                        ref: t
                    })
                });
            B.displayName = K;
            var W = "DialogDescription",
                H = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = C(W, n);
                    return (0, y.jsx)(p.sG.p, {
                        id: o.descriptionId,
                        ...r,
                        ref: t
                    })
                });
            H.displayName = W;
            var G = "DialogClose",
                z = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, i = C(G, n);
                    return (0, y.jsx)(p.sG.button, {
                        type: "button",
                        ...r,
                        ref: t,
                        onClick: (0, o.mK)(e.onClick, () => i.onOpenChange(!1))
                    })
                });

            function q(e) {
                return e ? "open" : "closed"
            }
            z.displayName = G;
            var V = "DialogTitleWarning",
                [U, X] = (0, a.q)(V, {
                    contentName: O,
                    titleName: K,
                    docsSlug: "dialog"
                }),
                Y = e => {
                    let {
                        titleId: t
                    } = e, n = X(V), o = "`".concat(n.contentName, "` requires a `").concat(n.titleName, "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName, "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);
                    return r.useEffect(() => {
                        t && (document.getElementById(t) || console.error(o))
                    }, [o, t]), null
                },
                Z = e => {
                    let {
                        contentRef: t,
                        descriptionId: n
                    } = e, o = X("DialogDescriptionWarning"), i = "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(o.contentName, "}.");
                    return r.useEffect(() => {
                        var e;
                        let r = null == (e = t.current) ? void 0 : e.getAttribute("aria-describedby");
                        n && r && (document.getElementById(n) || console.warn(i))
                    }, [i, t, n]), null
                },
                $ = k,
                J = j,
                Q = L,
                ee = N,
                et = B,
                en = H,
                er = z
        },
        5580: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(9946).A)("thumbs-down", [
                ["path", {
                    d: "M17 14V2",
                    key: "8ymqnk"
                }],
                ["path", {
                    d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",
                    key: "m61m77"
                }]
            ])
        },
        5623: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(9946).A)("ellipsis", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "1",
                    key: "41hilf"
                }],
                ["circle", {
                    cx: "19",
                    cy: "12",
                    r: "1",
                    key: "1wjl8i"
                }],
                ["circle", {
                    cx: "5",
                    cy: "12",
                    r: "1",
                    key: "1pcz8c"
                }]
            ])
        },
        6474: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(9946).A)("chevron-down", [
                ["path", {
                    d: "m6 9 6 6 6-6",
                    key: "qrunsl"
                }]
            ])
        },
        6767: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(9946).A)("smartphone", [
                ["rect", {
                    width: "14",
                    height: "20",
                    x: "5",
                    y: "2",
                    rx: "2",
                    ry: "2",
                    key: "1yt0o3"
                }],
                ["path", {
                    d: "M12 18h.01",
                    key: "mhygvu"
                }]
            ])
        },
        7900: (e, t, n) => {
            n.d(t, {
                n: () => d
            });
            var r = n(2115),
                o = n(6101),
                i = n(3655),
                a = n(9033),
                l = n(5155),
                u = "focusScope.autoFocusOnMount",
                c = "focusScope.autoFocusOnUnmount",
                s = {
                    bubbles: !1,
                    cancelable: !0
                },
                d = r.forwardRef((e, t) => {
                    let {
                        loop: n = !1,
                        trapped: d = !1,
                        onMountAutoFocus: v,
                        onUnmountAutoFocus: g,
                        ...y
                    } = e, [w, x] = r.useState(null), b = (0, a.c)(v), E = (0, a.c)(g), C = r.useRef(null), k = (0, o.s)(t, e => x(e)), R = r.useRef({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    r.useEffect(() => {
                        if (d) {
                            let e = function(e) {
                                    if (R.paused || !w) return;
                                    let t = e.target;
                                    w.contains(t) ? C.current = t : h(C.current, {
                                        select: !0
                                    })
                                },
                                t = function(e) {
                                    if (R.paused || !w) return;
                                    let t = e.relatedTarget;
                                    null !== t && (w.contains(t) || h(C.current, {
                                        select: !0
                                    }))
                                };
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            let n = new MutationObserver(function(e) {
                                if (document.activeElement === document.body)
                                    for (let t of e) t.removedNodes.length > 0 && h(w)
                            });
                            return w && n.observe(w, {
                                childList: !0,
                                subtree: !0
                            }), () => {
                                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
                            }
                        }
                    }, [d, w, R.paused]), r.useEffect(() => {
                        if (w) {
                            m.add(R);
                            let e = document.activeElement;
                            if (!w.contains(e)) {
                                let t = new CustomEvent(u, s);
                                w.addEventListener(u, b), w.dispatchEvent(t), t.defaultPrevented || (function(e) {
                                    let {
                                        select: t = !1
                                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = document.activeElement;
                                    for (let r of e)
                                        if (h(r, {
                                                select: t
                                            }), document.activeElement !== n) return
                                }(f(w).filter(e => "A" !== e.tagName), {
                                    select: !0
                                }), document.activeElement === e && h(w))
                            }
                            return () => {
                                w.removeEventListener(u, b), setTimeout(() => {
                                    let t = new CustomEvent(c, s);
                                    w.addEventListener(c, E), w.dispatchEvent(t), t.defaultPrevented || h(null != e ? e : document.body, {
                                        select: !0
                                    }), w.removeEventListener(c, E), m.remove(R)
                                }, 0)
                            }
                        }
                    }, [w, b, E, R]);
                    let M = r.useCallback(e => {
                        if (!n && !d || R.paused) return;
                        let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            r = document.activeElement;
                        if (t && r) {
                            let t = e.currentTarget,
                                [o, i] = function(e) {
                                    let t = f(e);
                                    return [p(t, e), p(t.reverse(), e)]
                                }(t);
                            o && i ? e.shiftKey || r !== i ? e.shiftKey && r === o && (e.preventDefault(), n && h(i, {
                                select: !0
                            })) : (e.preventDefault(), n && h(o, {
                                select: !0
                            })) : r === t && e.preventDefault()
                        }
                    }, [n, d, R.paused]);
                    return (0, l.jsx)(i.sG.div, {
                        tabIndex: -1,
                        ...y,
                        ref: k,
                        onKeyDown: M
                    })
                });

            function f(e) {
                let t = [],
                    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: e => {
                            let t = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                for (; n.nextNode();) t.push(n.currentNode);
                return t
            }

            function p(e, t) {
                for (let n of e)
                    if (! function(e, t) {
                            let {
                                upTo: n
                            } = t;
                            if ("hidden" === getComputedStyle(e).visibility) return !0;
                            for (; e && (void 0 === n || e !== n);) {
                                if ("none" === getComputedStyle(e).display) return !0;
                                e = e.parentElement
                            }
                            return !1
                        }(n, {
                            upTo: t
                        })) return n
            }

            function h(e) {
                let {
                    select: t = !1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (e && e.focus) {
                    var n;
                    let r = document.activeElement;
                    e.focus({
                        preventScroll: !0
                    }), e !== r && (n = e) instanceof HTMLInputElement && "select" in n && t && e.select()
                }
            }
            d.displayName = "FocusScope";
            var m = function() {
                let e = [];
                return {
                    add(t) {
                        let n = e[0];
                        t !== n && (null == n || n.pause()), (e = v(e, t)).unshift(t)
                    },
                    remove(t) {
                        var n;
                        null == (n = (e = v(e, t))[0]) || n.resume()
                    }
                }
            }();

            function v(e, t) {
                let n = [...e],
                    r = n.indexOf(t);
                return -1 !== r && n.splice(r, 1), n
            }
        },
        7951: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(9946).A)("crown", [
                ["path", {
                    d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
                    key: "1vdc57"
                }],
                ["path", {
                    d: "M5 21h14",
                    key: "11awu3"
                }]
            ])
        },
        8136: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(9946).A)("building", [
                ["path", {
                    d: "M12 10h.01",
                    key: "1nrarc"
                }],
                ["path", {
                    d: "M12 14h.01",
                    key: "1etili"
                }],
                ["path", {
                    d: "M12 6h.01",
                    key: "1vi96p"
                }],
                ["path", {
                    d: "M16 10h.01",
                    key: "1m94wz"
                }],
                ["path", {
                    d: "M16 14h.01",
                    key: "1gbofw"
                }],
                ["path", {
                    d: "M16 6h.01",
                    key: "1x0f13"
                }],
                ["path", {
                    d: "M8 10h.01",
                    key: "19clt8"
                }],
                ["path", {
                    d: "M8 14h.01",
                    key: "6423bh"
                }],
                ["path", {
                    d: "M8 6h.01",
                    key: "1dz90k"
                }],
                ["path", {
                    d: "M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3",
                    key: "cabbwy"
                }],
                ["rect", {
                    x: "4",
                    y: "2",
                    width: "16",
                    height: "20",
                    rx: "2",
                    key: "1uxh74"
                }]
            ])
        },
        8168: (e, t, n) => {
            n.d(t, {
                Eq: () => s
            });
            var r = function(e) {
                    return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
                },
                o = new WeakMap,
                i = new WeakMap,
                a = {},
                l = 0,
                u = function(e) {
                    return e && (e.host || u(e.parentNode))
                },
                c = function(e, t, n, r) {
                    var c = (Array.isArray(e) ? e : [e]).map(function(e) {
                        if (t.contains(e)) return e;
                        var n = u(e);
                        return n && t.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null)
                    }).filter(function(e) {
                        return !!e
                    });
                    a[n] || (a[n] = new WeakMap);
                    var s = a[n],
                        d = [],
                        f = new Set,
                        p = new Set(c),
                        h = function(e) {
                            !e || f.has(e) || (f.add(e), h(e.parentNode))
                        };
                    c.forEach(h);
                    var m = function(e) {
                        !e || p.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                            if (f.has(e)) m(e);
                            else try {
                                var t = e.getAttribute(r),
                                    a = null !== t && "false" !== t,
                                    l = (o.get(e) || 0) + 1,
                                    u = (s.get(e) || 0) + 1;
                                o.set(e, l), s.set(e, u), d.push(e), 1 === l && a && i.set(e, !0), 1 === u && e.setAttribute(n, "true"), a || e.setAttribute(r, "true")
                            } catch (t) {
                                console.error("aria-hidden: cannot operate on ", e, t)
                            }
                        })
                    };
                    return m(t), f.clear(), l++,
                        function() {
                            d.forEach(function(e) {
                                var t = o.get(e) - 1,
                                    a = s.get(e) - 1;
                                o.set(e, t), s.set(e, a), t || (i.has(e) || e.removeAttribute(r), i.delete(e)), a || e.removeAttribute(n)
                            }), --l || (o = new WeakMap, o = new WeakMap, i = new WeakMap, a = {})
                        }
                },
                s = function(e, t, n) {
                    void 0 === n && (n = "data-aria-hidden");
                    var o = Array.from(Array.isArray(e) ? e : [e]),
                        i = t || r(e);
                    return i ? (o.push.apply(o, Array.from(i.querySelectorAll("[aria-live], script"))), c(o, i, n, "aria-hidden")) : function() {
                        return null
                    }
                }
        },
        8578: (e, t, n) => {
            n.d(t, {
                H_: () => tx,
                UC: () => tv,
                YJ: () => tg,
                q7: () => tw,
                VF: () => tC,
                JU: () => ty,
                ZL: () => tm,
                z6: () => tb,
                hN: () => tE,
                bL: () => tp,
                wv: () => tk,
                Pb: () => tR,
                G5: () => tA,
                ZP: () => tM,
                l9: () => th
            });
            var r, o = n(2115),
                i = n(5185),
                a = n(6101),
                l = n(6081),
                u = n(5845),
                c = n(3655);

            function s(e, t, n) {
                if (!t.has(e)) throw TypeError("attempted to " + n + " private field on non-instance");
                return t.get(e)
            }

            function d(e, t) {
                var n = s(e, t, "get");
                return n.get ? n.get.call(e) : n.value
            }

            function f(e, t, n) {
                var r = s(e, t, "set");
                if (r.set) r.set.call(e, n);
                else {
                    if (!r.writable) throw TypeError("attempted to set read only private field");
                    r.value = n
                }
                return n
            }
            var p = n(9708),
                h = n(5155);

            function m(e) {
                let t = e + "CollectionProvider",
                    [n, r] = (0, l.A)(t),
                    [i, u] = n(t, {
                        collectionRef: {
                            current: null
                        },
                        itemMap: new Map
                    }),
                    c = e => {
                        let {
                            scope: t,
                            children: n
                        } = e, r = o.useRef(null), a = o.useRef(new Map).current;
                        return (0, h.jsx)(i, {
                            scope: t,
                            itemMap: a,
                            collectionRef: r,
                            children: n
                        })
                    };
                c.displayName = t;
                let s = e + "CollectionSlot",
                    d = (0, p.TL)(s),
                    f = o.forwardRef((e, t) => {
                        let {
                            scope: n,
                            children: r
                        } = e, o = u(s, n), i = (0, a.s)(t, o.collectionRef);
                        return (0, h.jsx)(d, {
                            ref: i,
                            children: r
                        })
                    });
                f.displayName = s;
                let m = e + "CollectionItemSlot",
                    v = "data-radix-collection-item",
                    g = (0, p.TL)(m),
                    y = o.forwardRef((e, t) => {
                        let {
                            scope: n,
                            children: r,
                            ...i
                        } = e, l = o.useRef(null), c = (0, a.s)(t, l), s = u(m, n);
                        return o.useEffect(() => (s.itemMap.set(l, {
                            ref: l,
                            ...i
                        }), () => void s.itemMap.delete(l))), (0, h.jsx)(g, { ...{
                                [v]: ""
                            },
                            ref: c,
                            children: r
                        })
                    });
                return y.displayName = m, [{
                    Provider: c,
                    Slot: f,
                    ItemSlot: y
                }, function(t) {
                    let n = u(e + "CollectionConsumer", t);
                    return o.useCallback(() => {
                        let e = n.collectionRef.current;
                        if (!e) return [];
                        let t = Array.from(e.querySelectorAll("[".concat(v, "]")));
                        return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current))
                    }, [n.collectionRef, n.itemMap])
                }, r]
            }
            var v = new WeakMap;

            function g(e, t) {
                if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
                let n = function(e, t) {
                    let n = e.length,
                        r = y(t),
                        o = r >= 0 ? r : n + r;
                    return o < 0 || o >= n ? -1 : o
                }(e, t);
                return -1 === n ? void 0 : e[n]
            }

            function y(e) {
                return e != e || 0 === e ? 0 : Math.trunc(e)
            }
            r = new WeakMap;
            var w = o.createContext(void 0);

            function x(e) {
                let t = o.useContext(w);
                return e || t || "ltr"
            }
            var b = n(9178),
                E = n(2293),
                C = n(7900),
                k = n(1285),
                R = n(5152),
                M = n(4378),
                A = n(8905),
                T = n(9033),
                j = "rovingFocusGroup.onEntryFocus",
                D = {
                    bubbles: !1,
                    cancelable: !0
                },
                L = "RovingFocusGroup",
                [S, P, O] = m(L),
                [N, I] = (0, l.A)(L, [O]),
                [F, _] = N(L),
                K = o.forwardRef((e, t) => (0, h.jsx)(S.Provider, {
                    scope: e.__scopeRovingFocusGroup,
                    children: (0, h.jsx)(S.Slot, {
                        scope: e.__scopeRovingFocusGroup,
                        children: (0, h.jsx)(B, { ...e,
                            ref: t
                        })
                    })
                }));
            K.displayName = L;
            var B = o.forwardRef((e, t) => {
                    let {
                        __scopeRovingFocusGroup: n,
                        orientation: r,
                        loop: l = !1,
                        dir: s,
                        currentTabStopId: d,
                        defaultCurrentTabStopId: f,
                        onCurrentTabStopIdChange: p,
                        onEntryFocus: m,
                        preventScrollOnEntryFocus: v = !1,
                        ...g
                    } = e, y = o.useRef(null), w = (0, a.s)(t, y), b = x(s), [E, C] = (0, u.i)({
                        prop: d,
                        defaultProp: null != f ? f : null,
                        onChange: p,
                        caller: L
                    }), [k, R] = o.useState(!1), M = (0, T.c)(m), A = P(n), S = o.useRef(!1), [O, N] = o.useState(0);
                    return o.useEffect(() => {
                        let e = y.current;
                        if (e) return e.addEventListener(j, M), () => e.removeEventListener(j, M)
                    }, [M]), (0, h.jsx)(F, {
                        scope: n,
                        orientation: r,
                        dir: b,
                        loop: l,
                        currentTabStopId: E,
                        onItemFocus: o.useCallback(e => C(e), [C]),
                        onItemShiftTab: o.useCallback(() => R(!0), []),
                        onFocusableItemAdd: o.useCallback(() => N(e => e + 1), []),
                        onFocusableItemRemove: o.useCallback(() => N(e => e - 1), []),
                        children: (0, h.jsx)(c.sG.div, {
                            tabIndex: k || 0 === O ? -1 : 0,
                            "data-orientation": r,
                            ...g,
                            ref: w,
                            style: {
                                outline: "none",
                                ...e.style
                            },
                            onMouseDown: (0, i.mK)(e.onMouseDown, () => {
                                S.current = !0
                            }),
                            onFocus: (0, i.mK)(e.onFocus, e => {
                                let t = !S.current;
                                if (e.target === e.currentTarget && t && !k) {
                                    let t = new CustomEvent(j, D);
                                    if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                                        let e = A().filter(e => e.focusable);
                                        z([e.find(e => e.active), e.find(e => e.id === E), ...e].filter(Boolean).map(e => e.ref.current), v)
                                    }
                                }
                                S.current = !1
                            }),
                            onBlur: (0, i.mK)(e.onBlur, () => R(!1))
                        })
                    })
                }),
                W = "RovingFocusGroupItem",
                H = o.forwardRef((e, t) => {
                    let {
                        __scopeRovingFocusGroup: n,
                        focusable: r = !0,
                        active: a = !1,
                        tabStopId: l,
                        children: u,
                        ...s
                    } = e, d = (0, k.B)(), f = l || d, p = _(W, n), m = p.currentTabStopId === f, v = P(n), {
                        onFocusableItemAdd: g,
                        onFocusableItemRemove: y,
                        currentTabStopId: w
                    } = p;
                    return o.useEffect(() => {
                        if (r) return g(), () => y()
                    }, [r, g, y]), (0, h.jsx)(S.ItemSlot, {
                        scope: n,
                        id: f,
                        focusable: r,
                        active: a,
                        children: (0, h.jsx)(c.sG.span, {
                            tabIndex: m ? 0 : -1,
                            "data-orientation": p.orientation,
                            ...s,
                            ref: t,
                            onMouseDown: (0, i.mK)(e.onMouseDown, e => {
                                r ? p.onItemFocus(f) : e.preventDefault()
                            }),
                            onFocus: (0, i.mK)(e.onFocus, () => p.onItemFocus(f)),
                            onKeyDown: (0, i.mK)(e.onKeyDown, e => {
                                if ("Tab" === e.key && e.shiftKey) return void p.onItemShiftTab();
                                if (e.target !== e.currentTarget) return;
                                let t = function(e, t, n) {
                                    var r;
                                    let o = (r = e.key, "rtl" !== n ? r : "ArrowLeft" === r ? "ArrowRight" : "ArrowRight" === r ? "ArrowLeft" : r);
                                    if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(o)) && !("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(o))) return G[o]
                                }(e, p.orientation, p.dir);
                                if (void 0 !== t) {
                                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                                    e.preventDefault();
                                    let n = v().filter(e => e.focusable).map(e => e.ref.current);
                                    if ("last" === t) n.reverse();
                                    else if ("prev" === t || "next" === t) {
                                        "prev" === t && n.reverse();
                                        let r = n.indexOf(e.currentTarget);
                                        n = p.loop ? function(e, t) {
                                            return e.map((n, r) => e[(t + r) % e.length])
                                        }(n, r + 1) : n.slice(r + 1)
                                    }
                                    setTimeout(() => z(n))
                                }
                            }),
                            children: "function" == typeof u ? u({
                                isCurrentTabStop: m,
                                hasTabStop: null != w
                            }) : u
                        })
                    })
                });
            H.displayName = W;
            var G = {
                ArrowLeft: "prev",
                ArrowUp: "prev",
                ArrowRight: "next",
                ArrowDown: "next",
                PageUp: "first",
                Home: "first",
                PageDown: "last",
                End: "last"
            };

            function z(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = document.activeElement;
                for (let r of e)
                    if (r === n || (r.focus({
                            preventScroll: t
                        }), document.activeElement !== n)) return
            }
            var q = n(8168),
                V = n(3795),
                U = ["Enter", " "],
                X = ["ArrowUp", "PageDown", "End"],
                Y = ["ArrowDown", "PageUp", "Home", ...X],
                Z = {
                    ltr: [...U, "ArrowRight"],
                    rtl: [...U, "ArrowLeft"]
                },
                $ = {
                    ltr: ["ArrowLeft"],
                    rtl: ["ArrowRight"]
                },
                J = "Menu",
                [Q, ee, et] = m(J),
                [en, er] = (0, l.A)(J, [et, R.Bk, I]),
                eo = (0, R.Bk)(),
                ei = I(),
                [ea, el] = en(J),
                [eu, ec] = en(J),
                es = e => {
                    let {
                        __scopeMenu: t,
                        open: n = !1,
                        children: r,
                        dir: i,
                        onOpenChange: a,
                        modal: l = !0
                    } = e, u = eo(t), [c, s] = o.useState(null), d = o.useRef(!1), f = (0, T.c)(a), p = x(i);
                    return o.useEffect(() => {
                        let e = () => {
                                d.current = !0, document.addEventListener("pointerdown", t, {
                                    capture: !0,
                                    once: !0
                                }), document.addEventListener("pointermove", t, {
                                    capture: !0,
                                    once: !0
                                })
                            },
                            t = () => d.current = !1;
                        return document.addEventListener("keydown", e, {
                            capture: !0
                        }), () => {
                            document.removeEventListener("keydown", e, {
                                capture: !0
                            }), document.removeEventListener("pointerdown", t, {
                                capture: !0
                            }), document.removeEventListener("pointermove", t, {
                                capture: !0
                            })
                        }
                    }, []), (0, h.jsx)(R.bL, { ...u,
                        children: (0, h.jsx)(ea, {
                            scope: t,
                            open: n,
                            onOpenChange: f,
                            content: c,
                            onContentChange: s,
                            children: (0, h.jsx)(eu, {
                                scope: t,
                                onClose: o.useCallback(() => f(!1), [f]),
                                isUsingKeyboardRef: d,
                                dir: p,
                                modal: l,
                                children: r
                            })
                        })
                    })
                };
            es.displayName = J;
            var ed = o.forwardRef((e, t) => {
                let {
                    __scopeMenu: n,
                    ...r
                } = e, o = eo(n);
                return (0, h.jsx)(R.Mz, { ...o,
                    ...r,
                    ref: t
                })
            });
            ed.displayName = "MenuAnchor";
            var ef = "MenuPortal",
                [ep, eh] = en(ef, {
                    forceMount: void 0
                }),
                em = e => {
                    let {
                        __scopeMenu: t,
                        forceMount: n,
                        children: r,
                        container: o
                    } = e, i = el(ef, t);
                    return (0, h.jsx)(ep, {
                        scope: t,
                        forceMount: n,
                        children: (0, h.jsx)(A.C, {
                            present: n || i.open,
                            children: (0, h.jsx)(M.Z, {
                                asChild: !0,
                                container: o,
                                children: r
                            })
                        })
                    })
                };
            em.displayName = ef;
            var ev = "MenuContent",
                [eg, ey] = en(ev),
                ew = o.forwardRef((e, t) => {
                    let n = eh(ev, e.__scopeMenu),
                        {
                            forceMount: r = n.forceMount,
                            ...o
                        } = e,
                        i = el(ev, e.__scopeMenu),
                        a = ec(ev, e.__scopeMenu);
                    return (0, h.jsx)(Q.Provider, {
                        scope: e.__scopeMenu,
                        children: (0, h.jsx)(A.C, {
                            present: r || i.open,
                            children: (0, h.jsx)(Q.Slot, {
                                scope: e.__scopeMenu,
                                children: a.modal ? (0, h.jsx)(ex, { ...o,
                                    ref: t
                                }) : (0, h.jsx)(eb, { ...o,
                                    ref: t
                                })
                            })
                        })
                    })
                }),
                ex = o.forwardRef((e, t) => {
                    let n = el(ev, e.__scopeMenu),
                        r = o.useRef(null),
                        l = (0, a.s)(t, r);
                    return o.useEffect(() => {
                        let e = r.current;
                        if (e) return (0, q.Eq)(e)
                    }, []), (0, h.jsx)(eC, { ...e,
                        ref: l,
                        trapFocus: n.open,
                        disableOutsidePointerEvents: n.open,
                        disableOutsideScroll: !0,
                        onFocusOutside: (0, i.mK)(e.onFocusOutside, e => e.preventDefault(), {
                            checkForDefaultPrevented: !1
                        }),
                        onDismiss: () => n.onOpenChange(!1)
                    })
                }),
                eb = o.forwardRef((e, t) => {
                    let n = el(ev, e.__scopeMenu);
                    return (0, h.jsx)(eC, { ...e,
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        disableOutsideScroll: !1,
                        onDismiss: () => n.onOpenChange(!1)
                    })
                }),
                eE = (0, p.TL)("MenuContent.ScrollLock"),
                eC = o.forwardRef((e, t) => {
                    let {
                        __scopeMenu: n,
                        loop: r = !1,
                        trapFocus: l,
                        onOpenAutoFocus: u,
                        onCloseAutoFocus: c,
                        disableOutsidePointerEvents: s,
                        onEntryFocus: d,
                        onEscapeKeyDown: f,
                        onPointerDownOutside: p,
                        onFocusOutside: m,
                        onInteractOutside: v,
                        onDismiss: g,
                        disableOutsideScroll: y,
                        ...w
                    } = e, x = el(ev, n), k = ec(ev, n), M = eo(n), A = ei(n), T = ee(n), [j, D] = o.useState(null), L = o.useRef(null), S = (0, a.s)(t, L, x.onContentChange), P = o.useRef(0), O = o.useRef(""), N = o.useRef(0), I = o.useRef(null), F = o.useRef("right"), _ = o.useRef(0), B = y ? V.A : o.Fragment, W = e => {
                        var t, n;
                        let r = O.current + e,
                            o = T().filter(e => !e.disabled),
                            i = document.activeElement,
                            a = null == (t = o.find(e => e.ref.current === i)) ? void 0 : t.textValue,
                            l = function(e, t, n) {
                                var r;
                                let o = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
                                    i = n ? e.indexOf(n) : -1,
                                    a = (r = Math.max(i, 0), e.map((t, n) => e[(r + n) % e.length]));
                                1 === o.length && (a = a.filter(e => e !== n));
                                let l = a.find(e => e.toLowerCase().startsWith(o.toLowerCase()));
                                return l !== n ? l : void 0
                            }(o.map(e => e.textValue), r, a),
                            u = null == (n = o.find(e => e.textValue === l)) ? void 0 : n.ref.current;
                        ! function e(t) {
                            O.current = t, window.clearTimeout(P.current), "" !== t && (P.current = window.setTimeout(() => e(""), 1e3))
                        }(r), u && setTimeout(() => u.focus())
                    };
                    o.useEffect(() => () => window.clearTimeout(P.current), []), (0, E.Oh)();
                    let H = o.useCallback(e => {
                        var t, n;
                        return F.current === (null == (t = I.current) ? void 0 : t.side) && function(e, t) {
                            return !!t && function(e, t) {
                                let {
                                    x: n,
                                    y: r
                                } = e, o = !1;
                                for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                                    let a = t[e],
                                        l = t[i],
                                        u = a.x,
                                        c = a.y,
                                        s = l.x,
                                        d = l.y;
                                    c > r != d > r && n < (s - u) * (r - c) / (d - c) + u && (o = !o)
                                }
                                return o
                            }({
                                x: e.clientX,
                                y: e.clientY
                            }, t)
                        }(e, null == (n = I.current) ? void 0 : n.area)
                    }, []);
                    return (0, h.jsx)(eg, {
                        scope: n,
                        searchRef: O,
                        onItemEnter: o.useCallback(e => {
                            H(e) && e.preventDefault()
                        }, [H]),
                        onItemLeave: o.useCallback(e => {
                            var t;
                            H(e) || (null == (t = L.current) || t.focus(), D(null))
                        }, [H]),
                        onTriggerLeave: o.useCallback(e => {
                            H(e) && e.preventDefault()
                        }, [H]),
                        pointerGraceTimerRef: N,
                        onPointerGraceIntentChange: o.useCallback(e => {
                            I.current = e
                        }, []),
                        children: (0, h.jsx)(B, { ...y ? {
                                as: eE,
                                allowPinchZoom: !0
                            } : void 0,
                            children: (0, h.jsx)(C.n, {
                                asChild: !0,
                                trapped: l,
                                onMountAutoFocus: (0, i.mK)(u, e => {
                                    var t;
                                    e.preventDefault(), null == (t = L.current) || t.focus({
                                        preventScroll: !0
                                    })
                                }),
                                onUnmountAutoFocus: c,
                                children: (0, h.jsx)(b.qW, {
                                    asChild: !0,
                                    disableOutsidePointerEvents: s,
                                    onEscapeKeyDown: f,
                                    onPointerDownOutside: p,
                                    onFocusOutside: m,
                                    onInteractOutside: v,
                                    onDismiss: g,
                                    children: (0, h.jsx)(K, {
                                        asChild: !0,
                                        ...A,
                                        dir: k.dir,
                                        orientation: "vertical",
                                        loop: r,
                                        currentTabStopId: j,
                                        onCurrentTabStopIdChange: D,
                                        onEntryFocus: (0, i.mK)(d, e => {
                                            k.isUsingKeyboardRef.current || e.preventDefault()
                                        }),
                                        preventScrollOnEntryFocus: !0,
                                        children: (0, h.jsx)(R.UC, {
                                            role: "menu",
                                            "aria-orientation": "vertical",
                                            "data-state": e$(x.open),
                                            "data-radix-menu-content": "",
                                            dir: k.dir,
                                            ...M,
                                            ...w,
                                            ref: S,
                                            style: {
                                                outline: "none",
                                                ...w.style
                                            },
                                            onKeyDown: (0, i.mK)(w.onKeyDown, e => {
                                                let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget,
                                                    n = e.ctrlKey || e.altKey || e.metaKey,
                                                    r = 1 === e.key.length;
                                                t && ("Tab" === e.key && e.preventDefault(), !n && r && W(e.key));
                                                let o = L.current;
                                                if (e.target !== o || !Y.includes(e.key)) return;
                                                e.preventDefault();
                                                let i = T().filter(e => !e.disabled).map(e => e.ref.current);
                                                X.includes(e.key) && i.reverse(),
                                                    function(e) {
                                                        let t = document.activeElement;
                                                        for (let n of e)
                                                            if (n === t || (n.focus(), document.activeElement !== t)) return
                                                    }(i)
                                            }),
                                            onBlur: (0, i.mK)(e.onBlur, e => {
                                                e.currentTarget.contains(e.target) || (window.clearTimeout(P.current), O.current = "")
                                            }),
                                            onPointerMove: (0, i.mK)(e.onPointerMove, e0(e => {
                                                let t = e.target,
                                                    n = _.current !== e.clientX;
                                                e.currentTarget.contains(t) && n && (F.current = e.clientX > _.current ? "right" : "left", _.current = e.clientX)
                                            }))
                                        })
                                    })
                                })
                            })
                        })
                    })
                });
            ew.displayName = ev;
            var ek = o.forwardRef((e, t) => {
                let {
                    __scopeMenu: n,
                    ...r
                } = e;
                return (0, h.jsx)(c.sG.div, {
                    role: "group",
                    ...r,
                    ref: t
                })
            });
            ek.displayName = "MenuGroup";
            var eR = o.forwardRef((e, t) => {
                let {
                    __scopeMenu: n,
                    ...r
                } = e;
                return (0, h.jsx)(c.sG.div, { ...r,
                    ref: t
                })
            });
            eR.displayName = "MenuLabel";
            var eM = "MenuItem",
                eA = "menu.itemSelect",
                eT = o.forwardRef((e, t) => {
                    let {
                        disabled: n = !1,
                        onSelect: r,
                        ...l
                    } = e, u = o.useRef(null), s = ec(eM, e.__scopeMenu), d = ey(eM, e.__scopeMenu), f = (0, a.s)(t, u), p = o.useRef(!1);
                    return (0, h.jsx)(ej, { ...l,
                        ref: f,
                        disabled: n,
                        onClick: (0, i.mK)(e.onClick, () => {
                            let e = u.current;
                            if (!n && e) {
                                let t = new CustomEvent(eA, {
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                e.addEventListener(eA, e => null == r ? void 0 : r(e), {
                                    once: !0
                                }), (0, c.hO)(e, t), t.defaultPrevented ? p.current = !1 : s.onClose()
                            }
                        }),
                        onPointerDown: t => {
                            var n;
                            null == (n = e.onPointerDown) || n.call(e, t), p.current = !0
                        },
                        onPointerUp: (0, i.mK)(e.onPointerUp, e => {
                            var t;
                            p.current || null == (t = e.currentTarget) || t.click()
                        }),
                        onKeyDown: (0, i.mK)(e.onKeyDown, e => {
                            let t = "" !== d.searchRef.current;
                            n || t && " " === e.key || U.includes(e.key) && (e.currentTarget.click(), e.preventDefault())
                        })
                    })
                });
            eT.displayName = eM;
            var ej = o.forwardRef((e, t) => {
                    let {
                        __scopeMenu: n,
                        disabled: r = !1,
                        textValue: l,
                        ...u
                    } = e, s = ey(eM, n), d = ei(n), f = o.useRef(null), p = (0, a.s)(t, f), [m, v] = o.useState(!1), [g, y] = o.useState("");
                    return o.useEffect(() => {
                        let e = f.current;
                        if (e) {
                            var t;
                            y((null != (t = e.textContent) ? t : "").trim())
                        }
                    }, [u.children]), (0, h.jsx)(Q.ItemSlot, {
                        scope: n,
                        disabled: r,
                        textValue: null != l ? l : g,
                        children: (0, h.jsx)(H, {
                            asChild: !0,
                            ...d,
                            focusable: !r,
                            children: (0, h.jsx)(c.sG.div, {
                                role: "menuitem",
                                "data-highlighted": m ? "" : void 0,
                                "aria-disabled": r || void 0,
                                "data-disabled": r ? "" : void 0,
                                ...u,
                                ref: p,
                                onPointerMove: (0, i.mK)(e.onPointerMove, e0(e => {
                                    r ? s.onItemLeave(e) : (s.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({
                                        preventScroll: !0
                                    }))
                                })),
                                onPointerLeave: (0, i.mK)(e.onPointerLeave, e0(e => s.onItemLeave(e))),
                                onFocus: (0, i.mK)(e.onFocus, () => v(!0)),
                                onBlur: (0, i.mK)(e.onBlur, () => v(!1))
                            })
                        })
                    })
                }),
                eD = o.forwardRef((e, t) => {
                    let {
                        checked: n = !1,
                        onCheckedChange: r,
                        ...o
                    } = e;
                    return (0, h.jsx)(e_, {
                        scope: e.__scopeMenu,
                        checked: n,
                        children: (0, h.jsx)(eT, {
                            role: "menuitemcheckbox",
                            "aria-checked": eJ(n) ? "mixed" : n,
                            ...o,
                            ref: t,
                            "data-state": eQ(n),
                            onSelect: (0, i.mK)(o.onSelect, () => null == r ? void 0 : r(!!eJ(n) || !n), {
                                checkForDefaultPrevented: !1
                            })
                        })
                    })
                });
            eD.displayName = "MenuCheckboxItem";
            var eL = "MenuRadioGroup",
                [eS, eP] = en(eL, {
                    value: void 0,
                    onValueChange: () => {}
                }),
                eO = o.forwardRef((e, t) => {
                    let {
                        value: n,
                        onValueChange: r,
                        ...o
                    } = e, i = (0, T.c)(r);
                    return (0, h.jsx)(eS, {
                        scope: e.__scopeMenu,
                        value: n,
                        onValueChange: i,
                        children: (0, h.jsx)(ek, { ...o,
                            ref: t
                        })
                    })
                });
            eO.displayName = eL;
            var eN = "MenuRadioItem",
                eI = o.forwardRef((e, t) => {
                    let {
                        value: n,
                        ...r
                    } = e, o = eP(eN, e.__scopeMenu), a = n === o.value;
                    return (0, h.jsx)(e_, {
                        scope: e.__scopeMenu,
                        checked: a,
                        children: (0, h.jsx)(eT, {
                            role: "menuitemradio",
                            "aria-checked": a,
                            ...r,
                            ref: t,
                            "data-state": eQ(a),
                            onSelect: (0, i.mK)(r.onSelect, () => {
                                var e;
                                return null == (e = o.onValueChange) ? void 0 : e.call(o, n)
                            }, {
                                checkForDefaultPrevented: !1
                            })
                        })
                    })
                });
            eI.displayName = eN;
            var eF = "MenuItemIndicator",
                [e_, eK] = en(eF, {
                    checked: !1
                }),
                eB = o.forwardRef((e, t) => {
                    let {
                        __scopeMenu: n,
                        forceMount: r,
                        ...o
                    } = e, i = eK(eF, n);
                    return (0, h.jsx)(A.C, {
                        present: r || eJ(i.checked) || !0 === i.checked,
                        children: (0, h.jsx)(c.sG.span, { ...o,
                            ref: t,
                            "data-state": eQ(i.checked)
                        })
                    })
                });
            eB.displayName = eF;
            var eW = o.forwardRef((e, t) => {
                let {
                    __scopeMenu: n,
                    ...r
                } = e;
                return (0, h.jsx)(c.sG.div, {
                    role: "separator",
                    "aria-orientation": "horizontal",
                    ...r,
                    ref: t
                })
            });
            eW.displayName = "MenuSeparator";
            var eH = o.forwardRef((e, t) => {
                let {
                    __scopeMenu: n,
                    ...r
                } = e, o = eo(n);
                return (0, h.jsx)(R.i3, { ...o,
                    ...r,
                    ref: t
                })
            });
            eH.displayName = "MenuArrow";
            var eG = "MenuSub",
                [ez, eq] = en(eG),
                eV = e => {
                    let {
                        __scopeMenu: t,
                        children: n,
                        open: r = !1,
                        onOpenChange: i
                    } = e, a = el(eG, t), l = eo(t), [u, c] = o.useState(null), [s, d] = o.useState(null), f = (0, T.c)(i);
                    return o.useEffect(() => (!1 === a.open && f(!1), () => f(!1)), [a.open, f]), (0, h.jsx)(R.bL, { ...l,
                        children: (0, h.jsx)(ea, {
                            scope: t,
                            open: r,
                            onOpenChange: f,
                            content: s,
                            onContentChange: d,
                            children: (0, h.jsx)(ez, {
                                scope: t,
                                contentId: (0, k.B)(),
                                triggerId: (0, k.B)(),
                                trigger: u,
                                onTriggerChange: c,
                                children: n
                            })
                        })
                    })
                };
            eV.displayName = eG;
            var eU = "MenuSubTrigger",
                eX = o.forwardRef((e, t) => {
                    let n = el(eU, e.__scopeMenu),
                        r = ec(eU, e.__scopeMenu),
                        l = eq(eU, e.__scopeMenu),
                        u = ey(eU, e.__scopeMenu),
                        c = o.useRef(null),
                        {
                            pointerGraceTimerRef: s,
                            onPointerGraceIntentChange: d
                        } = u,
                        f = {
                            __scopeMenu: e.__scopeMenu
                        },
                        p = o.useCallback(() => {
                            c.current && window.clearTimeout(c.current), c.current = null
                        }, []);
                    return o.useEffect(() => p, [p]), o.useEffect(() => {
                        let e = s.current;
                        return () => {
                            window.clearTimeout(e), d(null)
                        }
                    }, [s, d]), (0, h.jsx)(ed, {
                        asChild: !0,
                        ...f,
                        children: (0, h.jsx)(ej, {
                            id: l.triggerId,
                            "aria-haspopup": "menu",
                            "aria-expanded": n.open,
                            "aria-controls": l.contentId,
                            "data-state": e$(n.open),
                            ...e,
                            ref: (0, a.t)(t, l.onTriggerChange),
                            onClick: t => {
                                var r;
                                null == (r = e.onClick) || r.call(e, t), e.disabled || t.defaultPrevented || (t.currentTarget.focus(), n.open || n.onOpenChange(!0))
                            },
                            onPointerMove: (0, i.mK)(e.onPointerMove, e0(t => {
                                u.onItemEnter(t), !t.defaultPrevented && (e.disabled || n.open || c.current || (u.onPointerGraceIntentChange(null), c.current = window.setTimeout(() => {
                                    n.onOpenChange(!0), p()
                                }, 100)))
                            })),
                            onPointerLeave: (0, i.mK)(e.onPointerLeave, e0(e => {
                                var t, r;
                                p();
                                let o = null == (t = n.content) ? void 0 : t.getBoundingClientRect();
                                if (o) {
                                    let t = null == (r = n.content) ? void 0 : r.dataset.side,
                                        i = "right" === t,
                                        a = o[i ? "left" : "right"],
                                        l = o[i ? "right" : "left"];
                                    u.onPointerGraceIntentChange({
                                        area: [{
                                            x: e.clientX + (i ? -5 : 5),
                                            y: e.clientY
                                        }, {
                                            x: a,
                                            y: o.top
                                        }, {
                                            x: l,
                                            y: o.top
                                        }, {
                                            x: l,
                                            y: o.bottom
                                        }, {
                                            x: a,
                                            y: o.bottom
                                        }],
                                        side: t
                                    }), window.clearTimeout(s.current), s.current = window.setTimeout(() => u.onPointerGraceIntentChange(null), 300)
                                } else {
                                    if (u.onTriggerLeave(e), e.defaultPrevented) return;
                                    u.onPointerGraceIntentChange(null)
                                }
                            })),
                            onKeyDown: (0, i.mK)(e.onKeyDown, t => {
                                let o = "" !== u.searchRef.current;
                                if (!e.disabled && (!o || " " !== t.key) && Z[r.dir].includes(t.key)) {
                                    var i;
                                    n.onOpenChange(!0), null == (i = n.content) || i.focus(), t.preventDefault()
                                }
                            })
                        })
                    })
                });
            eX.displayName = eU;
            var eY = "MenuSubContent",
                eZ = o.forwardRef((e, t) => {
                    let n = eh(ev, e.__scopeMenu),
                        {
                            forceMount: r = n.forceMount,
                            ...l
                        } = e,
                        u = el(ev, e.__scopeMenu),
                        c = ec(ev, e.__scopeMenu),
                        s = eq(eY, e.__scopeMenu),
                        d = o.useRef(null),
                        f = (0, a.s)(t, d);
                    return (0, h.jsx)(Q.Provider, {
                        scope: e.__scopeMenu,
                        children: (0, h.jsx)(A.C, {
                            present: r || u.open,
                            children: (0, h.jsx)(Q.Slot, {
                                scope: e.__scopeMenu,
                                children: (0, h.jsx)(eC, {
                                    id: s.contentId,
                                    "aria-labelledby": s.triggerId,
                                    ...l,
                                    ref: f,
                                    align: "start",
                                    side: "rtl" === c.dir ? "left" : "right",
                                    disableOutsidePointerEvents: !1,
                                    disableOutsideScroll: !1,
                                    trapFocus: !1,
                                    onOpenAutoFocus: e => {
                                        var t;
                                        c.isUsingKeyboardRef.current && (null == (t = d.current) || t.focus()), e.preventDefault()
                                    },
                                    onCloseAutoFocus: e => e.preventDefault(),
                                    onFocusOutside: (0, i.mK)(e.onFocusOutside, e => {
                                        e.target !== s.trigger && u.onOpenChange(!1)
                                    }),
                                    onEscapeKeyDown: (0, i.mK)(e.onEscapeKeyDown, e => {
                                        c.onClose(), e.preventDefault()
                                    }),
                                    onKeyDown: (0, i.mK)(e.onKeyDown, e => {
                                        let t = e.currentTarget.contains(e.target),
                                            n = $[c.dir].includes(e.key);
                                        if (t && n) {
                                            var r;
                                            u.onOpenChange(!1), null == (r = s.trigger) || r.focus(), e.preventDefault()
                                        }
                                    })
                                })
                            })
                        })
                    })
                });

            function e$(e) {
                return e ? "open" : "closed"
            }

            function eJ(e) {
                return "indeterminate" === e
            }

            function eQ(e) {
                return eJ(e) ? "indeterminate" : e ? "checked" : "unchecked"
            }

            function e0(e) {
                return t => "mouse" === t.pointerType ? e(t) : void 0
            }
            eZ.displayName = eY;
            var e1 = "DropdownMenu",
                [e2, e5] = (0, l.A)(e1, [er]),
                e3 = er(),
                [e9, e4] = e2(e1),
                e6 = e => {
                    let {
                        __scopeDropdownMenu: t,
                        children: n,
                        dir: r,
                        open: i,
                        defaultOpen: a,
                        onOpenChange: l,
                        modal: c = !0
                    } = e, s = e3(t), d = o.useRef(null), [f, p] = (0, u.i)({
                        prop: i,
                        defaultProp: null != a && a,
                        onChange: l,
                        caller: e1
                    });
                    return (0, h.jsx)(e9, {
                        scope: t,
                        triggerId: (0, k.B)(),
                        triggerRef: d,
                        contentId: (0, k.B)(),
                        open: f,
                        onOpenChange: p,
                        onOpenToggle: o.useCallback(() => p(e => !e), [p]),
                        modal: c,
                        children: (0, h.jsx)(es, { ...s,
                            open: f,
                            onOpenChange: p,
                            dir: r,
                            modal: c,
                            children: n
                        })
                    })
                };
            e6.displayName = e1;
            var e8 = "DropdownMenuTrigger",
                e7 = o.forwardRef((e, t) => {
                    let {
                        __scopeDropdownMenu: n,
                        disabled: r = !1,
                        ...o
                    } = e, l = e4(e8, n), u = e3(n);
                    return (0, h.jsx)(ed, {
                        asChild: !0,
                        ...u,
                        children: (0, h.jsx)(c.sG.button, {
                            type: "button",
                            id: l.triggerId,
                            "aria-haspopup": "menu",
                            "aria-expanded": l.open,
                            "aria-controls": l.open ? l.contentId : void 0,
                            "data-state": l.open ? "open" : "closed",
                            "data-disabled": r ? "" : void 0,
                            disabled: r,
                            ...o,
                            ref: (0, a.t)(t, l.triggerRef),
                            onPointerDown: (0, i.mK)(e.onPointerDown, e => {
                                !r && 0 === e.button && !1 === e.ctrlKey && (l.onOpenToggle(), l.open || e.preventDefault())
                            }),
                            onKeyDown: (0, i.mK)(e.onKeyDown, e => {
                                !r && (["Enter", " "].includes(e.key) && l.onOpenToggle(), "ArrowDown" === e.key && l.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(e.key) && e.preventDefault())
                            })
                        })
                    })
                });
            e7.displayName = e8;
            var te = e => {
                let {
                    __scopeDropdownMenu: t,
                    ...n
                } = e, r = e3(t);
                return (0, h.jsx)(em, { ...r,
                    ...n
                })
            };
            te.displayName = "DropdownMenuPortal";
            var tt = "DropdownMenuContent",
                tn = o.forwardRef((e, t) => {
                    let {
                        __scopeDropdownMenu: n,
                        ...r
                    } = e, a = e4(tt, n), l = e3(n), u = o.useRef(!1);
                    return (0, h.jsx)(ew, {
                        id: a.contentId,
                        "aria-labelledby": a.triggerId,
                        ...l,
                        ...r,
                        ref: t,
                        onCloseAutoFocus: (0, i.mK)(e.onCloseAutoFocus, e => {
                            var t;
                            u.current || null == (t = a.triggerRef.current) || t.focus(), u.current = !1, e.preventDefault()
                        }),
                        onInteractOutside: (0, i.mK)(e.onInteractOutside, e => {
                            let t = e.detail.originalEvent,
                                n = 0 === t.button && !0 === t.ctrlKey,
                                r = 2 === t.button || n;
                            (!a.modal || r) && (u.current = !0)
                        }),
                        style: { ...e.style,
                            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
                        }
                    })
                });
            tn.displayName = tt;
            var tr = o.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: n,
                    ...r
                } = e, o = e3(n);
                return (0, h.jsx)(ek, { ...o,
                    ...r,
                    ref: t
                })
            });
            tr.displayName = "DropdownMenuGroup";
            var to = o.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: n,
                    ...r
                } = e, o = e3(n);
                return (0, h.jsx)(eR, { ...o,
                    ...r,
                    ref: t
                })
            });
            to.displayName = "DropdownMenuLabel";
            var ti = o.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: n,
                    ...r
                } = e, o = e3(n);
                return (0, h.jsx)(eT, { ...o,
                    ...r,
                    ref: t
                })
            });
            ti.displayName = "DropdownMenuItem";
            var ta = o.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: n,
                    ...r
                } = e, o = e3(n);
                return (0, h.jsx)(eD, { ...o,
                    ...r,
                    ref: t
                })
            });
            ta.displayName = "DropdownMenuCheckboxItem";
            var tl = o.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: n,
                    ...r
                } = e, o = e3(n);
                return (0, h.jsx)(eO, { ...o,
                    ...r,
                    ref: t
                })
            });
            tl.displayName = "DropdownMenuRadioGroup";
            var tu = o.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: n,
                    ...r
                } = e, o = e3(n);
                return (0, h.jsx)(eI, { ...o,
                    ...r,
                    ref: t
                })
            });
            tu.displayName = "DropdownMenuRadioItem";
            var tc = o.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: n,
                    ...r
                } = e, o = e3(n);
                return (0, h.jsx)(eB, { ...o,
                    ...r,
                    ref: t
                })
            });
            tc.displayName = "DropdownMenuItemIndicator";
            var ts = o.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: n,
                    ...r
                } = e, o = e3(n);
                return (0, h.jsx)(eW, { ...o,
                    ...r,
                    ref: t
                })
            });
            ts.displayName = "DropdownMenuSeparator", o.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: n,
                    ...r
                } = e, o = e3(n);
                return (0, h.jsx)(eH, { ...o,
                    ...r,
                    ref: t
                })
            }).displayName = "DropdownMenuArrow";
            var td = o.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: n,
                    ...r
                } = e, o = e3(n);
                return (0, h.jsx)(eX, { ...o,
                    ...r,
                    ref: t
                })
            });
            td.displayName = "DropdownMenuSubTrigger";
            var tf = o.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: n,
                    ...r
                } = e, o = e3(n);
                return (0, h.jsx)(eZ, { ...o,
                    ...r,
                    ref: t,
                    style: { ...e.style,
                        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
                    }
                })
            });
            tf.displayName = "DropdownMenuSubContent";
            var tp = e6,
                th = e7,
                tm = te,
                tv = tn,
                tg = tr,
                ty = to,
                tw = ti,
                tx = ta,
                tb = tl,
                tE = tu,
                tC = tc,
                tk = ts,
                tR = e => {
                    let {
                        __scopeDropdownMenu: t,
                        children: n,
                        open: r,
                        onOpenChange: o,
                        defaultOpen: i
                    } = e, a = e3(t), [l, c] = (0, u.i)({
                        prop: r,
                        defaultProp: null != i && i,
                        onChange: o,
                        caller: "DropdownMenuSub"
                    });
                    return (0, h.jsx)(eV, { ...a,
                        open: l,
                        onOpenChange: c,
                        children: n
                    })
                },
                tM = td,
                tA = tf
        },
        9033: (e, t, n) => {
            n.d(t, {
                c: () => o
            });
            var r = n(2115);

            function o(e) {
                let t = r.useRef(e);
                return r.useEffect(() => {
                    t.current = e
                }), r.useMemo(() => (...e) => t.current ? .(...e), [])
            }
        },
        9178: (e, t, n) => {
            n.d(t, {
                qW: () => f
            });
            var r, o = n(2115),
                i = n(5185),
                a = n(3655),
                l = n(6101),
                u = n(9033),
                c = n(5155),
                s = "dismissableLayer.update",
                d = o.createContext({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                f = o.forwardRef((e, t) => {
                    var n, f;
                    let {
                        disableOutsidePointerEvents: m = !1,
                        onEscapeKeyDown: v,
                        onPointerDownOutside: g,
                        onFocusOutside: y,
                        onInteractOutside: w,
                        onDismiss: x,
                        ...b
                    } = e, E = o.useContext(d), [C, k] = o.useState(null), R = null != (f = null == C ? void 0 : C.ownerDocument) ? f : null == (n = globalThis) ? void 0 : n.document, [, M] = o.useState({}), A = (0, l.s)(t, e => k(e)), T = Array.from(E.layers), [j] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1), D = T.indexOf(j), L = C ? T.indexOf(C) : -1, S = E.layersWithOutsidePointerEventsDisabled.size > 0, P = L >= D, O = function(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null == (t = globalThis) ? void 0 : t.document,
                            r = (0, u.c)(e),
                            i = o.useRef(!1),
                            a = o.useRef(() => {});
                        return o.useEffect(() => {
                            let e = e => {
                                    if (e.target && !i.current) {
                                        let t = function() {
                                                h("dismissableLayer.pointerDownOutside", r, o, {
                                                    discrete: !0
                                                })
                                            },
                                            o = {
                                                originalEvent: e
                                            };
                                        "touch" === e.pointerType ? (n.removeEventListener("click", a.current), a.current = t, n.addEventListener("click", a.current, {
                                            once: !0
                                        })) : t()
                                    } else n.removeEventListener("click", a.current);
                                    i.current = !1
                                },
                                t = window.setTimeout(() => {
                                    n.addEventListener("pointerdown", e)
                                }, 0);
                            return () => {
                                window.clearTimeout(t), n.removeEventListener("pointerdown", e), n.removeEventListener("click", a.current)
                            }
                        }, [n, r]), {
                            onPointerDownCapture: () => i.current = !0
                        }
                    }(e => {
                        let t = e.target,
                            n = [...E.branches].some(e => e.contains(t));
                        P && !n && (null == g || g(e), null == w || w(e), e.defaultPrevented || null == x || x())
                    }, R), N = function(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null == (t = globalThis) ? void 0 : t.document,
                            r = (0, u.c)(e),
                            i = o.useRef(!1);
                        return o.useEffect(() => {
                            let e = e => {
                                e.target && !i.current && h("dismissableLayer.focusOutside", r, {
                                    originalEvent: e
                                }, {
                                    discrete: !1
                                })
                            };
                            return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e)
                        }, [n, r]), {
                            onFocusCapture: () => i.current = !0,
                            onBlurCapture: () => i.current = !1
                        }
                    }(e => {
                        let t = e.target;
                        ![...E.branches].some(e => e.contains(t)) && (null == y || y(e), null == w || w(e), e.defaultPrevented || null == x || x())
                    }, R);
                    return ! function(e, t = globalThis ? .document) {
                        let n = (0, u.c)(e);
                        o.useEffect(() => {
                            let e = e => {
                                "Escape" === e.key && n(e)
                            };
                            return t.addEventListener("keydown", e, {
                                capture: !0
                            }), () => t.removeEventListener("keydown", e, {
                                capture: !0
                            })
                        }, [n, t])
                    }(e => {
                        L === E.layers.size - 1 && (null == v || v(e), !e.defaultPrevented && x && (e.preventDefault(), x()))
                    }, R), o.useEffect(() => {
                        if (C) return m && (0 === E.layersWithOutsidePointerEventsDisabled.size && (r = R.body.style.pointerEvents, R.body.style.pointerEvents = "none"), E.layersWithOutsidePointerEventsDisabled.add(C)), E.layers.add(C), p(), () => {
                            m && 1 === E.layersWithOutsidePointerEventsDisabled.size && (R.body.style.pointerEvents = r)
                        }
                    }, [C, R, m, E]), o.useEffect(() => () => {
                        C && (E.layers.delete(C), E.layersWithOutsidePointerEventsDisabled.delete(C), p())
                    }, [C, E]), o.useEffect(() => {
                        let e = () => M({});
                        return document.addEventListener(s, e), () => document.removeEventListener(s, e)
                    }, []), (0, c.jsx)(a.sG.div, { ...b,
                        ref: A,
                        style: {
                            pointerEvents: S ? P ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: (0, i.mK)(e.onFocusCapture, N.onFocusCapture),
                        onBlurCapture: (0, i.mK)(e.onBlurCapture, N.onBlurCapture),
                        onPointerDownCapture: (0, i.mK)(e.onPointerDownCapture, O.onPointerDownCapture)
                    })
                });

            function p() {
                let e = new CustomEvent(s);
                document.dispatchEvent(e)
            }

            function h(e, t, n, r) {
                let {
                    discrete: o
                } = r, i = n.originalEvent.target, l = new CustomEvent(e, {
                    bubbles: !1,
                    cancelable: !0,
                    detail: n
                });
                t && i.addEventListener(e, t, {
                    once: !0
                }), o ? (0, a.hO)(i, l) : i.dispatchEvent(l)
            }
            f.displayName = "DismissableLayer", o.forwardRef((e, t) => {
                let n = o.useContext(d),
                    r = o.useRef(null),
                    i = (0, l.s)(t, r);
                return o.useEffect(() => {
                    let e = r.current;
                    if (e) return n.branches.add(e), () => {
                        n.branches.delete(e)
                    }
                }, [n.branches]), (0, c.jsx)(a.sG.div, { ...e,
                    ref: i
                })
            }).displayName = "DismissableLayerBranch"
        },
        9376: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(9946).A)("brain", [
                ["path", {
                    d: "M12 18V5",
                    key: "adv99a"
                }],
                ["path", {
                    d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",
                    key: "1e3is1"
                }],
                ["path", {
                    d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",
                    key: "1gqd8o"
                }],
                ["path", {
                    d: "M17.997 5.125a4 4 0 0 1 2.526 5.77",
                    key: "iwvgf7"
                }],
                ["path", {
                    d: "M18 18a4 4 0 0 0 2-7.464",
                    key: "efp6ie"
                }],
                ["path", {
                    d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",
                    key: "1gq6am"
                }],
                ["path", {
                    d: "M6 18a4 4 0 0 1-2-7.464",
                    key: "k1g0md"
                }],
                ["path", {
                    d: "M6.003 5.125a4 4 0 0 0-2.526 5.77",
                    key: "q97ue3"
                }]
            ])
        },
        9428: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(9946).A)("circle", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }]
            ])
        },
        9588: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(9946).A)("mic", [
                ["path", {
                    d: "M12 19v3",
                    key: "npa21l"
                }],
                ["path", {
                    d: "M19 10v2a7 7 0 0 1-14 0v-2",
                    key: "1vc78b"
                }],
                ["rect", {
                    x: "9",
                    y: "2",
                    width: "6",
                    height: "13",
                    rx: "3",
                    key: "s6n7sd"
                }]
            ])
        },
        9869: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(9946).A)("upload", [
                ["path", {
                    d: "M12 3v12",
                    key: "1x0j5s"
                }],
                ["path", {
                    d: "m17 8-5-5-5 5",
                    key: "7q97r8"
                }],
                ["path", {
                    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
                    key: "ih7n3h"
                }]
            ])
        }
    }
]);