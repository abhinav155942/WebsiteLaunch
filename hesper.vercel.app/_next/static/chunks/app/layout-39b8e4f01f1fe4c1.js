(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7177], {
        153: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => l
            });
            var r = n(5155),
                o = n(2115);

            function l(e) {
                let {
                    error: t,
                    reset: n
                } = e, l = (0, o.useRef)(""), i = (0, o.useRef)();
                return ((0, o.useEffect)(() => {
                    if (window.parent === window) return;
                    let e = e => window.parent.postMessage(e, "*"),
                        t = t => {
                            var n;
                            return e({
                                type: "ERROR_CAPTURED",
                                error: {
                                    message: t.message,
                                    stack: null == (n = t.error) ? void 0 : n.stack,
                                    filename: t.filename,
                                    lineno: t.lineno,
                                    colno: t.colno,
                                    source: "window.onerror"
                                },
                                timestamp: Date.now()
                            })
                        },
                        n = t => {
                            var n, r, o;
                            return e({
                                type: "ERROR_CAPTURED",
                                error: {
                                    message: null != (o = null == (n = t.reason) ? void 0 : n.message) ? o : String(t.reason),
                                    stack: null == (r = t.reason) ? void 0 : r.stack,
                                    source: "unhandledrejection"
                                },
                                timestamp: Date.now()
                            })
                        };
                    return window.addEventListener("error", t), window.addEventListener("unhandledrejection", n), i.current = setInterval(() => {
                        var t, n, r;
                        let o = document.querySelector("[data-nextjs-dialog-overlay]"),
                            i = null != (t = null == o ? void 0 : o.querySelector("h1, h2, .error-message, [data-nextjs-dialog-body]")) ? t : null,
                            a = null != (r = null != (n = null == i ? void 0 : i.textContent) ? n : null == i ? void 0 : i.innerHTML) ? r : "";
                        a && a !== l.current && (l.current = a, e({
                            type: "ERROR_CAPTURED",
                            error: {
                                message: a,
                                source: "nextjs-dev-overlay"
                            },
                            timestamp: Date.now()
                        }))
                    }, 1e3), () => {
                        window.removeEventListener("error", t), window.removeEventListener("unhandledrejection", n), i.current && clearInterval(i.current)
                    }
                }, []), (0, o.useEffect)(() => {
                    t && window.parent.postMessage({
                        type: "global-error-reset",
                        error: {
                            message: t.message,
                            stack: t.stack,
                            digest: t.digest,
                            name: t.name
                        },
                        timestamp: Date.now(),
                        userAgent: navigator.userAgent
                    }, "*")
                }, [t]), t) ? (0, r.jsx)("html", {
                    children: (0, r.jsx)("body", {
                        className: "min-h-screen bg-background text-foreground flex items-center justify-center p-4",
                        children: (0, r.jsxs)("div", {
                            className: "max-w-md w-full text-center space-y-6",
                            children: [(0, r.jsxs)("div", {
                                className: "space-y-2",
                                children: [(0, r.jsx)("h1", {
                                    className: "text-2xl font-bold text-destructive",
                                    children: "Something went wrong!"
                                }), (0, r.jsx)("p", {
                                    className: "text-muted-foreground",
                                    children: "An unexpected error occurred. Please try again fixing with Orchids"
                                })]
                            }), (0, r.jsx)("div", {
                                className: "space-y-2",
                                children: !1
                            })]
                        })
                    })
                }) : null
            }
        },
        347: () => {},
        2344: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => f
            });
            var r = n(5155),
                o = n(2115);
            let l = "ORCHIDS_HOVER_v1",
                i = "orchids_visual_edit_mode",
                a = "orchids_focused_element",
                s = "",
                u = e => {
                    try {
                        let t = JSON.stringify(e);
                        if (t === s) return;
                        s = t
                    } catch (e) {}
                    window.parent.postMessage(e, "*")
                },
                d = e => {
                    var t;
                    let n = e.tagName.toLowerCase();
                    if ("true" === e.contentEditable || "input" === n || "textarea" === n) return !0;
                    if (["p", "h1", "h2", "h3", "h4", "h5", "h6", "span", "div", "li", "td", "th", "label", "a", "button"].includes(n) && (null == (t = e.textContent) ? void 0 : t.trim())) {
                        let t = Array.from(e.childNodes).some(e => {
                            var t;
                            return e.nodeType === Node.TEXT_NODE && (null == (t = e.textContent) ? void 0 : t.trim())
                        });
                        if (0 === e.childElementCount || e.childElementCount <= 1 && t) return !0
                    }
                    return !1
                },
                c = e => {
                    let t = "";
                    for (let n of e.childNodes) n.nodeType === Node.TEXT_NODE && (t += n.textContent || "");
                    return t
                },
                m = e => {
                    let t = e.split(":");
                    if (t.length < 3) return null;
                    let n = parseInt(t.pop() || "0"),
                        r = parseInt(t.pop() || "0"),
                        o = t.join(":");
                    return isNaN(r) || isNaN(n) ? null : {
                        filePath: o,
                        line: r,
                        column: n
                    }
                },
                g = e => {
                    let t = window.getComputedStyle(e),
                        n = (e, t) => {
                            if ("backgroundColor" === t && ("rgba(0, 0, 0, 0)" === e || "rgb(0, 0, 0, 0)" === e || "transparent" === e || "" === e)) return "transparent";
                            if ("backgroundImage" === t && ("none" === e || "" === e) || "textDecoration" === t && (e.includes("none") || "" === e)) return "none";
                            if ("fontStyle" === t && ("normal" === e || "" === e)) return "normal";
                            if ("fontWeight" === t) {
                                let t = parseInt(e);
                                return isNaN(t) ? e || "400" : String(t)
                            }
                            return "opacity" === t && ("1" === e || "" === e) ? "1" : (t.includes("padding") || t.includes("margin")) && ("0px" === e || "0" === e) || "borderRadius" === t && ("0px" === e || "0" === e) ? "0" : "letterSpacing" === t && ("normal" === e || "0px" === e) || "gap" === t && ("normal" === e || "0px" === e) ? "normal" : e
                        };
                    return {
                        fontSize: n(t.fontSize, "fontSize"),
                        color: n(t.color, "color"),
                        fontWeight: n(t.fontWeight, "fontWeight"),
                        fontStyle: n(t.fontStyle, "fontStyle"),
                        textDecoration: n(t.textDecoration, "textDecoration"),
                        textAlign: n(t.textAlign, "textAlign"),
                        lineHeight: n(t.lineHeight, "lineHeight"),
                        letterSpacing: n(t.letterSpacing, "letterSpacing"),
                        paddingLeft: n(t.paddingLeft, "paddingLeft"),
                        paddingRight: n(t.paddingRight, "paddingRight"),
                        paddingTop: n(t.paddingTop, "paddingTop"),
                        paddingBottom: n(t.paddingBottom, "paddingBottom"),
                        marginLeft: n(t.marginLeft, "marginLeft"),
                        marginRight: n(t.marginRight, "marginRight"),
                        marginTop: n(t.marginTop, "marginTop"),
                        marginBottom: n(t.marginBottom, "marginBottom"),
                        backgroundColor: n(t.backgroundColor, "backgroundColor"),
                        backgroundImage: n(t.backgroundImage, "backgroundImage"),
                        borderRadius: n(t.borderRadius, "borderRadius"),
                        fontFamily: n(t.fontFamily, "fontFamily"),
                        opacity: n(t.opacity, "opacity"),
                        display: n(t.display, "display"),
                        flexDirection: n(t.flexDirection, "flexDirection"),
                        alignItems: n(t.alignItems, "alignItems"),
                        justifyContent: n(t.justifyContent, "justifyContent"),
                        gap: n(t.gap, "gap")
                    }
                },
                p = e => {
                    if (!e) return "";
                    try {
                        let t = new URL(e, window.location.origin);
                        if ("/_next/image" === t.pathname) {
                            let e = t.searchParams.get("url");
                            if (e) return decodeURIComponent(e)
                        }
                        return t.href
                    } catch (t) {
                        return e
                    }
                },
                h = e => {
                    if (e.includes("\n")) {
                        let t = e.replace(/\n/g, "\\n");
                        return "{`".concat(t, "`}")
                    }
                    return e
                };

            function f() {
                let [e, t] = (0, o.useState)(null), [n, s] = (0, o.useState)([]), [f, v] = (0, o.useState)(null), [w, b] = (0, o.useState)(null), [y, E] = (0, o.useState)(() => "true" === localStorage.getItem(i)), [x, S] = (0, o.useState)(!1), [L, R] = (0, o.useState)(null), [C, I] = (0, o.useState)(null), [A, T] = (0, o.useState)(!1), [N, D] = (0, o.useState)(null), [_, M] = (0, o.useState)(null), k = (0, o.useRef)(!1), P = (0, o.useRef)(null), j = (0, o.useRef)(null), z = (0, o.useRef)(null), O = (0, o.useRef)(!1), B = (0, o.useRef)(null), F = (0, o.useRef)(""), H = (0, o.useRef)(""), U = (0, o.useRef)(null), q = (0, o.useRef)(null), W = (0, o.useRef)(!1), Y = (0, o.useRef)(null), X = (0, o.useRef)({}), V = (0, o.useRef)(new Map), K = (0, o.useRef)(!1), Z = (0, o.useRef)(0), $ = (0, o.useRef)(null), G = (0, o.useRef)(new Set), J = (0, o.useRef)(new Map), Q = (0, o.useRef)(new Map);
                (0, o.useEffect)(() => {
                    O.current = y, localStorage.setItem(i, String(y))
                }, [y]), (0, o.useEffect)(() => {
                    y && (window.parent.postMessage({
                        type: l,
                        msg: "VISUAL_EDIT_MODE_ACK",
                        active: !0
                    }, "*"), window.parent.postMessage({
                        type: l,
                        msg: "VISUAL_EDIT_MODE_RESTORED",
                        active: !0
                    }, "*"), setTimeout(() => {
                        {
                            let e = localStorage.getItem(a);
                            if (e) try {
                                let {
                                    id: t
                                } = JSON.parse(e), n = document.querySelector('[data-orchids-id="'.concat(t, '"]'));
                                if (n) {
                                    let e = n.getBoundingClientRect(),
                                        t = new MouseEvent("click", {
                                            clientX: e.left + e.width / 2,
                                            clientY: e.top + e.height / 2,
                                            bubbles: !0,
                                            cancelable: !0
                                        });
                                    n.dispatchEvent(t)
                                }
                            } catch (e) {}
                        }
                    }, 500))
                }, []);
                let ee = e => ({
                        top: e.top - 4,
                        left: e.left - 4,
                        width: e.width + 8,
                        height: e.height + 8
                    }),
                    et = () => {
                        z.current && v(ee(z.current.getBoundingClientRect()))
                    };
                (0, o.useEffect)(() => {
                    if (y && !Y.current) {
                        let e = document.createElement("style");
                        e.textContent = '\n        [contenteditable="true"]:focus {\n          outline: none !important;\n          box-shadow: none !important;\n          border-color: inherit !important;\n        }\n        [contenteditable="true"] {\n          cursor: text !important;\n        }\n        /* Prevent the default blue highlight on contenteditable */\n        [contenteditable="true"]::selection {\n          background-color: rgba(59, 130, 246, 0.3);\n        }\n        [contenteditable="true"]::-moz-selection {\n          background-color: rgba(59, 130, 246, 0.3);\n        }\n        /* Prevent child elements from being editable */\n        [contenteditable="true"] [contenteditable="false"] {\n          user-select: none !important;\n          -webkit-user-select: none !important;\n          -moz-user-select: none !important;\n          -ms-user-select: none !important;\n          opacity: 0.7 !important;\n          cursor: default !important;\n        }\n        /* Ensure protected elements can\'t be selected */\n        [data-orchids-protected="true"] {\n          user-select: none !important;\n          -webkit-user-select: none !important;\n          -moz-user-select: none !important;\n          -ms-user-select: none !important;\n        }\n      ', document.head.appendChild(e), Y.current = e
                    } else !y && Y.current && (Y.current.remove(), Y.current = null);
                    return () => {
                        Y.current && (Y.current.remove(), Y.current = null)
                    }
                }, [y]);
                let en = e => {
                        e.querySelectorAll("*").forEach(e => {
                            e.contentEditable = "false", e.setAttribute("data-orchids-protected", "true"), e.style.userSelect = "none", e.style.webkitUserSelect = "none"
                        })
                    },
                    er = e => {
                        e.querySelectorAll('[data-orchids-protected="true"]').forEach(e => {
                            e.removeAttribute("contenteditable"), e.removeAttribute("data-orchids-protected"), e.style.userSelect = "", e.style.webkitUserSelect = ""
                        })
                    },
                    eo = e => {
                        let t, n;
                        if (e !== q.current) return void console.warn("Attempting to handle text change for non-editing element");
                        let r = e.getAttribute("data-orchids-id");
                        if (r && (t = e.childElementCount > 0 ? c(e) : e.innerText || e.textContent || "") !== (n = F.current)) {
                            let e = m(r);
                            if (!e) return;
                            u({
                                type: l,
                                msg: "TEXT_CHANGED",
                                id: r,
                                oldText: h(n),
                                newText: h(t),
                                filePath: e.filePath,
                                line: e.line,
                                column: e.column
                            }), F.current = t
                        }
                    },
                    el = (e, t) => {
                        let n = e.getAttribute("data-orchids-id");
                        if (!n || !m(n)) return;
                        document.querySelectorAll('[data-orchids-id="'.concat(n, '"]')).forEach(e => {
                            Object.entries(t).forEach(t => {
                                let [n, r] = t, o = n.replace(/([A-Z])/g, "-$1").toLowerCase(), l = r;
                                "backgroundColor" === n && ("transparent" === r || "rgba(0, 0, 0, 0)" === r || "rgb(0, 0, 0, 0)" === r) && (l = "transparent"), "backgroundColor" === n && "transparent" === l || "backgroundImage" === n && "none" === r || "textDecoration" === n && "none" === r || "fontStyle" === n && "normal" === r || "opacity" === n && "1" === r || (n.includes("padding") || n.includes("margin")) && "0" === r || "borderRadius" === n && "0" === r || "letterSpacing" === n && "normal" === r || "gap" === n && "normal" === r ? e.style.removeProperty(o) : e.style.setProperty(o, l, "important")
                            })
                        });
                        let r = V.current.get(n) || {};
                        V.current.set(n, { ...r,
                            ...t
                        }), K.current = !0, requestAnimationFrame(() => {
                            et()
                        })
                    },
                    ei = e => {
                        if (!K.current) return;
                        let t = e.getAttribute("data-orchids-id");
                        if (!t) return;
                        let n = m(t);
                        if (!n) return;
                        let r = V.current.get(t);
                        r && 0 !== Object.keys(r).length && (u({
                            type: l,
                            msg: "STYLE_BLUR",
                            id: t,
                            styles: r,
                            className: e.getAttribute("class") || "",
                            filePath: n.filePath,
                            line: n.line,
                            column: n.column
                        }), K.current = !1)
                    },
                    ea = () => {
                        let e = U.current;
                        if (!e) return;
                        let t = e.getAttribute("data-orchids-id");
                        if (!t) return;
                        let n = m(t);
                        if (!n) return;
                        let r = p(e.src),
                            o = p(H.current);
                        r && r !== o && (u({
                            type: l,
                            msg: "IMAGE_BLUR",
                            id: t,
                            oldSrc: o,
                            newSrc: r,
                            filePath: n.filePath,
                            line: n.line,
                            column: n.column
                        }), H.current = r, U.current = null)
                    };
                (0, o.useEffect)(() => {
                    function e(e) {
                        var t, n, r;
                        if ((null == (t = e.data) ? void 0 : t.type) === "ORCHIDS_STYLE_UPDATE") {
                            let {
                                elementId: t,
                                styles: n
                            } = e.data, r = document.querySelectorAll('[data-orchids-id="'.concat(t, '"]'));
                            if (r.length > 0) {
                                let e = n.fontFamily || n.fontFamily;
                                if (e) {
                                    let t = e.replace(/['\s]+/g, "+");
                                    if (!G.current.has(t)) {
                                        let e = document.createElement("link");
                                        e.rel = "stylesheet", e.href = "https://fonts.googleapis.com/css2?family=".concat(t, ":wght@400&display=swap"), document.head.appendChild(e), G.current.add(t)
                                    }
                                }
                                if (e) {
                                    J.current.set(t, e);
                                    let n = Q.current.get(t);
                                    n && clearTimeout(n);
                                    let r = window.setTimeout(() => {
                                        J.current.delete(t), Q.current.delete(t)
                                    }, 2e3);
                                    Q.current.set(t, r)
                                }
                                r.forEach(e => {
                                    z.current === e ? el(e, n) : Object.entries(n).forEach(t => {
                                        let [n, r] = t, o = n.replace(/([A-Z])/g, "-$1").toLowerCase(), l = String(r);
                                        "backgroundColor" === n && ("transparent" === r || "rgba(0, 0, 0, 0)" === r || "rgb(0, 0, 0, 0)" === r) && (l = "transparent"), "backgroundColor" === n && "transparent" === l || "backgroundImage" === n && "none" === r || "textDecoration" === n && "none" === r || "fontStyle" === n && "normal" === r || "opacity" === n && "1" === r || (n.includes("padding") || n.includes("margin")) && "0" === r || "borderRadius" === n && "0" === r || "letterSpacing" === n && "normal" === r || "gap" === n && "normal" === r ? e.style.removeProperty(o) : e.style.setProperty(o, l, "important")
                                    })
                                })
                            }
                        } else if ((null == (n = e.data) ? void 0 : n.type) === "ORCHIDS_IMAGE_UPDATE") {
                            let {
                                elementId: t,
                                src: n,
                                oldSrc: r
                            } = e.data, o = null;
                            if (document.querySelectorAll('[data-orchids-id="'.concat(t, '"]')).forEach(e => {
                                    if ("img" === e.tagName.toLowerCase()) {
                                        let t = p(e.src);
                                        o || (o = e), r && p(r) === t && (o = e)
                                    }
                                }), !o) return;
                            if ("img" === o.tagName.toLowerCase()) {
                                let e = o;
                                e.removeAttribute("srcset"), e.srcset = "", e.src = n, H.current = p(n), U.current = e, e.onload = () => et()
                            }
                        } else if ((null == (r = e.data) ? void 0 : r.type) === "RESIZE_ELEMENT") {
                            let {
                                elementId: t,
                                width: n,
                                height: r
                            } = e.data, o = document.querySelector('[data-orchids-id="'.concat(t, '"]'));
                            o && z.current === o && (o.style.setProperty("width", "".concat(n, "px"), "important"), o.style.setProperty("height", "".concat(r, "px"), "important"), et())
                        }
                    }
                    return window.addEventListener("message", e), () => window.removeEventListener("message", e)
                }, []);
                let es = (e, n) => {
                    if (!z.current) return;
                    e.preventDefault(), e.stopPropagation();
                    let r = z.current.getBoundingClientRect();
                    t(null), P.current = null, document.body.style.pointerEvents = "none", document.querySelectorAll(".resize-handle").forEach(e => {
                        e.style.pointerEvents = "auto"
                    }), S(!0), k.current = !0, R(n), I({
                        x: e.clientX,
                        y: e.clientY,
                        width: r.width,
                        height: r.height
                    })
                };
                (0, o.useEffect)(() => {
                    if (!x || !C || !L || !z.current) return;
                    let n = n => {
                            var r;
                            let o = n.clientX - C.x,
                                i = n.clientY - C.y,
                                a = C.width,
                                s = C.height;
                            L.includes("e") && (a = C.width + o), L.includes("w") && (a = C.width - o), L.includes("s") && (s = C.height + i), L.includes("n") && (s = C.height - i);
                            let u = null == (r = z.current) ? void 0 : r.parentElement;
                            if (u) {
                                let e = u.getBoundingClientRect(),
                                    t = window.getComputedStyle(u),
                                    n = parseFloat(t.paddingLeft) || 0,
                                    r = parseFloat(t.paddingRight) || 0,
                                    o = parseFloat(t.paddingTop) || 0,
                                    l = parseFloat(t.paddingBottom) || 0,
                                    i = e.width - n - r,
                                    d = e.height - o - l,
                                    c = s > d;
                                a = Math.max(20, a > i ? a : Math.min(a, i)), s = Math.max(20, c ? s : Math.min(s, d))
                            } else a = Math.max(20, a), s = Math.max(20, s);
                            e && t(null), w && window.parent.postMessage({
                                type: l,
                                msg: "RESIZE_ELEMENT",
                                elementId: w,
                                width: Math.round(a),
                                height: Math.round(s)
                            }, "*")
                        },
                        r = () => {
                            if (z.current && w) {
                                let e = z.current,
                                    t = window.getComputedStyle(e),
                                    n = parseFloat(t.width) || e.offsetWidth,
                                    r = parseFloat(t.height) || e.offsetHeight,
                                    o = t.maxWidth,
                                    i = t.maxHeight,
                                    a = e.parentElement,
                                    s = "".concat(Math.round(n), "px"),
                                    u = "".concat(Math.round(r), "px");
                                if (a) {
                                    let e = a.getBoundingClientRect(),
                                        t = window.getComputedStyle(a),
                                        o = parseFloat(t.paddingLeft) || 0,
                                        l = parseFloat(t.paddingRight) || 0,
                                        i = parseFloat(t.paddingTop) || 0,
                                        d = parseFloat(t.paddingBottom) || 0,
                                        c = e.width - o - l,
                                        m = e.height - i - d,
                                        g = n / c * 100,
                                        p = r / m * 100;
                                    (.1 > Math.abs(g - Math.round(g)) || [25, 33.333, 50, 66.667, 75, 100].some(e => .5 > Math.abs(g - e))) && (s = "".concat(Math.round(10 * g) / 10, "%")), .1 > Math.abs(p - Math.round(p)) && [25, 50, 75, 100].includes(Math.round(p)) && (u = "".concat(Math.round(p), "%"))
                                }
                                let d = {};
                                d.width = s, d.height = u, o && "none" !== o && "initial" !== o && (d.maxWidth = s), i && "none" !== i && "initial" !== i && (d.maxHeight = u);
                                let c = {
                                        type: l,
                                        msg: "STYLE_BLUR",
                                        id: w,
                                        styles: d,
                                        filePath: "",
                                        line: 0,
                                        column: 0,
                                        className: e.getAttribute("class") || ""
                                    },
                                    g = e.getAttribute("data-orchids-id");
                                if (g) {
                                    let e = m(g);
                                    e && (c.filePath = e.filePath, c.line = e.line, c.column = e.column)
                                }
                                window.parent.postMessage(c, "*")
                            }
                            S(!1), k.current = !1, R(null), I(null), document.body.style.pointerEvents = "", P.current = null
                        };
                    return document.addEventListener("mousemove", n), document.addEventListener("mouseup", r), () => {
                        document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", r)
                    }
                }, [x, C, L, w, e]);
                let eu = () => {
                    if (q.current) {
                        let e = q.current;
                        q.current = null, ei(e), eo(e), e.childElementCount > 0 && er(e), W.current || (e.contentEditable = "false");
                        let t = (e.getAttribute("style") || "").replace(/outline:\s*none\s*!important;?/gi, "").replace(/box-shadow:\s*none\s*!important;?/gi, "").trim().replace(/;\s*;/g, ";").replace(/^;|;$/g, "");
                        t ? e.setAttribute("style", t) : e.removeAttribute("style"), e.blur();
                        let n = e._editHandlers;
                        n && (e.removeEventListener("focus", n.focus), e.removeEventListener("blur", n.blur), e.removeEventListener("input", n.input), delete e._editHandlers), W.current = !1, F.current = ""
                    }
                };
                return (0, o.useEffect)(() => {
                    if (!y) return;
                    let e = e => {
                            let t = e.target.closest("a");
                            t && !t.isContentEditable && (e.preventDefault(), e.stopPropagation())
                        },
                        t = e => {
                            e.preventDefault(), e.stopPropagation()
                        };
                    return document.addEventListener("click", e, !0), document.addEventListener("submit", t, !0), () => {
                        document.removeEventListener("click", e, !0), document.removeEventListener("submit", t, !0)
                    }
                }, [y]), (0, o.useEffect)(() => {
                    y || (eu(), V.current.clear(), K.current = !1, U.current = null)
                }, [y]), (0, o.useEffect)(() => {
                    if (z.current) {
                        let e = () => {
                            if (et(), z.current && w) {
                                let e = ee(z.current.getBoundingClientRect());
                                e && u({
                                    type: l,
                                    msg: "FOCUS_MOVED",
                                    id: w,
                                    rect: {
                                        top: e.top,
                                        left: e.left,
                                        width: e.width,
                                        height: e.height
                                    }
                                })
                            }
                        };
                        window.addEventListener("scroll", e, !0), window.addEventListener("resize", e);
                        let t = new ResizeObserver(e);
                        return t.observe(z.current), () => {
                            window.removeEventListener("scroll", e, !0), window.removeEventListener("resize", e), t.disconnect()
                        }
                    }
                }, [w]), (0, o.useEffect)(() => {
                    function e(e) {
                        var n, r;
                        if (k.current || !O.current || A) return;
                        let o = null != (r = null == (n = document.elementFromPoint(e.clientX, e.clientY)) ? void 0 : n.closest("[data-orchids-id]")) ? r : null;
                        if (o !== P.current) {
                            if (P.current = o, !o) {
                                t(null), s([]), D(null), j.current = null, ea(), u({
                                    type: l,
                                    msg: "HIT",
                                    id: null,
                                    tag: null,
                                    rect: null
                                });
                                return
                            }
                            let e = o.getAttribute("data-orchids-id");
                            if (e === j.current) return;
                            j.current = e;
                            let n = o.getAttribute("data-orchids-name") || o.tagName.toLowerCase(),
                                r = document.querySelectorAll('[data-orchids-id="'.concat(e, '"]')),
                                i = [];
                            r.forEach(e => {
                                if (e.getAttribute("data-orchids-id") === w) return;
                                let t = e.getBoundingClientRect();
                                i.push(ee(t))
                            }), s(i), e !== w ? t(ee(o.getBoundingClientRect())) : t(null), D(n), u({
                                type: l,
                                msg: "HIT",
                                id: e,
                                tag: n,
                                rect: e !== w ? ee(o.getBoundingClientRect()) : null
                            })
                        }
                    }

                    function n() {
                        O.current && !k.current && (t(null), s([]), D(null), ea(), P.current = null, j.current = null, u({
                            type: l,
                            msg: "HIT",
                            id: null,
                            tag: null,
                            rect: null
                        }))
                    }

                    function r(e) {
                        var t;
                        if (k.current || !O.current) return;
                        let n = null == (t = e.target) ? void 0 : t.closest("[data-orchids-id]");
                        if (n && d(n) && (W.current = "true" === n.contentEditable, !W.current)) {
                            let e = n.getAttribute("style") || "";
                            n.setAttribute("style", "".concat(e, "; outline: none !important; box-shadow: none !important;")), n.contentEditable = "true", n.childElementCount > 0 && en(n)
                        }
                    }

                    function o(e) {
                        if (k.current || !O.current) return;
                        let n = Date.now();
                        if (n - Z.current < 100) return;
                        Z.current = n;
                        let r = e.target.closest("[data-orchids-id]");
                        if (r) {
                            let n = r.getAttribute("data-orchids-name") || r.tagName.toLowerCase(),
                                o = r.getAttribute("data-orchids-id"),
                                i = d(r),
                                m = "a" === r.tagName.toLowerCase() || !!r.closest("a"),
                                h = "button" === r.tagName.toLowerCase() || "button" === r.getAttribute("role");
                            (m || h || !i) && (e.preventDefault(), e.stopPropagation());
                            let f = z.current;
                            z.current = r, b(o), M(n), o && localStorage.setItem(a, JSON.stringify({
                                id: o,
                                tag: n
                            }));
                            let w = document.querySelectorAll('[data-orchids-id="'.concat(o, '"]')),
                                y = [];
                            if (w.forEach(e => {
                                    if (e === r) return;
                                    let t = e.getBoundingClientRect();
                                    y.push(ee(t))
                                }), s(y), y.length > 0 && D(n), "img" === r.tagName.toLowerCase() ? U.current = r : U.current = null, X.current = g(r), i && ($.current && (clearTimeout($.current), $.current = null), q.current && q.current !== r && (q.current.blur(), eu()), r !== q.current)) {
                                q.current = r, r.childElementCount > 0 ? F.current = c(r) : F.current = r.innerText || r.textContent || "";
                                let e = {
                                    handleFocus: () => {
                                        r === q.current && (ei(r), r.childElementCount > 0 ? F.current = c(r) : F.current = r.innerText || r.textContent || "", K.current = !1)
                                    },
                                    handleBlur: () => {
                                        r === q.current && (ei(r), eo(r))
                                    },
                                    handleInput: () => {
                                        if (r !== q.current) return
                                    }
                                };
                                r.addEventListener("focus", e.handleFocus), r.addEventListener("blur", e.handleBlur), r.addEventListener("input", e.handleInput), r._editHandlers = {
                                    focus: e.handleFocus,
                                    blur: e.handleBlur,
                                    input: e.handleInput
                                }
                            }
                            let E = ee(r.getBoundingClientRect());
                            v(E), t(null);
                            let x = r.getAttribute("class") || "",
                                S = "img" === r.tagName.toLowerCase() ? r.src : void 0;
                            S && (H.current = p(S));
                            let L = g(r);
                            u({
                                type: l,
                                msg: "ELEMENT_CLICKED",
                                id: o,
                                tag: n,
                                rect: E ? {
                                    top: E.top,
                                    left: E.left,
                                    width: E.width,
                                    height: E.height
                                } : {
                                    top: 0,
                                    left: 0,
                                    width: 0,
                                    height: 0
                                },
                                clickPosition: {
                                    x: e.clientX,
                                    y: e.clientY
                                },
                                isEditable: i,
                                currentStyles: L,
                                className: x,
                                src: S
                            }), setTimeout(() => {
                                ea(), f && f !== r && ei(f), q.current && q.current !== r && eu()
                            }, 0)
                        } else z.current && (ea(), ei(z.current), eu(), z.current = null, b(null), M(null), v(null), t(null), s([]), D(null), localStorage.removeItem(a), u({
                            type: l,
                            msg: "ELEMENT_CLICKED",
                            id: null,
                            tag: null,
                            rect: {
                                top: 0,
                                left: 0,
                                width: 0,
                                height: 0
                            },
                            clickPosition: {
                                x: e.clientX,
                                y: e.clientY
                            },
                            isEditable: !1,
                            currentStyles: {},
                            className: ""
                        }))
                    }

                    function m(e) {
                        var n;
                        if ((null == (n = e.data) ? void 0 : n.type) === l) {
                            if ("PREVIEW_FONT" === e.data.msg && "elementId" in e.data) {
                                let {
                                    elementId: t,
                                    fontFamily: n
                                } = e.data;
                                if (J.current.has(t)) return;
                                let r = document.querySelector('[data-orchids-id="'.concat(t, '"]'));
                                if (!r) return;
                                let o = n.replace(/\s+/g, "+");
                                if (!G.current.has(o)) {
                                    let e = document.createElement("link");
                                    e.rel = "stylesheet", e.href = "https://fonts.googleapis.com/css2?family=".concat(o, ":wght@400&display=swap"), document.head.appendChild(e), G.current.add(o)
                                }
                                r.style.fontFamily = "'".concat(n, "', sans-serif");
                                return
                            }
                            if ("SCROLL" === e.data.msg && "dx" in e.data && "dy" in e.data && window.scrollBy(e.data.dx, e.data.dy), "VISUAL_EDIT_MODE" === e.data.msg && "active" in e.data) {
                                let n = e.data.active;
                                E(n), n || (localStorage.removeItem(i), localStorage.removeItem(a)), window.parent.postMessage({
                                    type: l,
                                    msg: "VISUAL_EDIT_MODE_ACK",
                                    active: n
                                }, "*"), n || (ea(), eu(), U.current = null, t(null), s([]), v(null), b(null), P.current = null, z.current = null, K.current = !1, D(null), M(null), u({
                                    type: l,
                                    msg: "HIT",
                                    id: null,
                                    tag: null,
                                    rect: null
                                }))
                            }
                            if ("CLEAR_INLINE_STYLES" === e.data.msg && "elementId" in e.data && (document.querySelectorAll('[data-orchids-id="'.concat(e.data.elementId, '"]')).forEach(e => {
                                    ["fontSize", "color", "fontWeight", "fontStyle", "textDecoration", "textAlign", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "backgroundColor", "backgroundImage"].forEach(t => {
                                        e.style[t] = ""
                                    })
                                }), V.current.delete(e.data.elementId)), "SHOW_ELEMENT_HOVER" === e.data.msg && "elementId" in e.data) {
                                let {
                                    elementId: t
                                } = e.data;
                                if (!t) {
                                    s([]), D(null);
                                    return
                                }
                                let n = document.querySelectorAll('[data-orchids-id="'.concat(t, '"]'));
                                if (n.length > 0) {
                                    let e = [],
                                        t = "";
                                    n.forEach(n => {
                                        if (n === z.current) return;
                                        let r = n.getBoundingClientRect();
                                        e.push(ee(r)), t || (t = n.getAttribute("data-orchids-name") || n.tagName.toLowerCase())
                                    }), s(e), D(e.length > 0 ? t : null)
                                }
                            }
                        }
                    }

                    function h() {
                        !k.current && O.current && (T(!0), t(null), s([]), u({
                            type: l,
                            msg: "SCROLL_STARTED"
                        }), B.current && clearTimeout(B.current), B.current = window.setTimeout(() => {
                            T(!1), u({
                                type: l,
                                msg: "SCROLL_STOPPED"
                            })
                        }, 16))
                    }
                    return document.addEventListener("pointermove", e, {
                        passive: !0
                    }), document.addEventListener("pointerleave", n), document.addEventListener("mousedown", r, {
                        capture: !0
                    }), document.addEventListener("click", o, {
                        capture: !0
                    }), window.addEventListener("message", m), window.addEventListener("scroll", h, !0), () => {
                        document.removeEventListener("pointermove", e), document.removeEventListener("pointerleave", n), document.removeEventListener("mousedown", r, !0), document.removeEventListener("click", o, !0), window.removeEventListener("message", m), window.removeEventListener("scroll", h, !0), B.current && clearTimeout(B.current)
                    }
                }, [w, x]), (0, r.jsxs)(r.Fragment, {
                    children: [y && !x && (0, r.jsx)(r.Fragment, {
                        children: n.filter(e => null !== e).map((e, t) => (0, r.jsxs)("div", {
                            children: [(0, r.jsx)("div", {
                                className: "fixed pointer-events-none border-[0.5px] border-[#38bdf8] bg-blue-200/20 border-dashed rounded-sm",
                                style: {
                                    zIndex: 1e5,
                                    left: e.left,
                                    top: e.top,
                                    width: e.width,
                                    height: e.height
                                }
                            }), N && (0, r.jsx)("div", {
                                className: "fixed pointer-events-none text-[10px] text-white bg-[#38bdf8] px-1 py-0.5 rounded-sm",
                                style: {
                                    zIndex: 100001,
                                    left: e.left,
                                    top: e.top - 20
                                },
                                children: N
                            })]
                        }, t))
                    }), y && f && (0, r.jsxs)(r.Fragment, {
                        children: [_ && (0, r.jsx)("div", {
                            className: "fixed text-[10px] font-semibold text-white bg-[#3b82f6] px-1 rounded-sm pointer-events-none select-none",
                            style: {
                                zIndex: 100003,
                                left: f.left - 4,
                                top: f.top - 16
                            },
                            children: _
                        }), (0, r.jsx)("div", {
                            className: "fixed pointer-events-none border-[1.5px] border-[#38bdf8] rounded-sm",
                            style: {
                                zIndex: 100001,
                                left: f.left,
                                top: f.top,
                                width: f.width,
                                height: f.height
                            }
                        }), !x && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("div", {
                                className: "fixed w-2 h-2 bg-[#38bdf8] rounded-full cursor-nw-resize pointer-events-auto resize-handle",
                                style: {
                                    zIndex: 100002,
                                    left: f.left - 4,
                                    top: f.top - 4
                                },
                                onMouseDown: e => es(e, "nw")
                            }), (0, r.jsx)("div", {
                                className: "fixed w-2 h-2 bg-[#38bdf8] rounded-full cursor-ne-resize pointer-events-auto resize-handle",
                                style: {
                                    zIndex: 100002,
                                    left: f.left + f.width - 4,
                                    top: f.top - 4
                                },
                                onMouseDown: e => es(e, "ne")
                            }), (0, r.jsx)("div", {
                                className: "fixed w-2 h-2 bg-[#38bdf8] rounded-full cursor-sw-resize pointer-events-auto resize-handle",
                                style: {
                                    zIndex: 100002,
                                    left: f.left - 4,
                                    top: f.top + f.height - 4
                                },
                                onMouseDown: e => es(e, "sw")
                            }), (0, r.jsx)("div", {
                                className: "fixed w-2 h-2 bg-[#38bdf8] rounded-full cursor-se-resize pointer-events-auto resize-handle",
                                style: {
                                    zIndex: 100002,
                                    left: f.left + f.width - 4,
                                    top: f.top + f.height - 4
                                },
                                onMouseDown: e => es(e, "se")
                            }), (0, r.jsx)("div", {
                                className: "fixed w-2 h-2 bg-[#38bdf8] rounded-full cursor-n-resize pointer-events-auto resize-handle",
                                style: {
                                    zIndex: 100002,
                                    left: f.left + f.width / 2 - 4,
                                    top: f.top - 4
                                },
                                onMouseDown: e => es(e, "n")
                            }), (0, r.jsx)("div", {
                                className: "fixed w-2 h-2 bg-[#38bdf8] rounded-full cursor-s-resize pointer-events-auto resize-handle",
                                style: {
                                    zIndex: 100002,
                                    left: f.left + f.width / 2 - 4,
                                    top: f.top + f.height - 4
                                },
                                onMouseDown: e => es(e, "s")
                            }), (0, r.jsx)("div", {
                                className: "fixed w-2 h-2 bg-[#38bdf8] rounded-full cursor-w-resize pointer-events-auto resize-handle",
                                style: {
                                    zIndex: 100002,
                                    left: f.left - 4,
                                    top: f.top + f.height / 2 - 4
                                },
                                onMouseDown: e => es(e, "w")
                            }), (0, r.jsx)("div", {
                                className: "fixed w-2 h-2 bg-[#38bdf8] rounded-full cursor-e-resize pointer-events-auto resize-handle",
                                style: {
                                    zIndex: 100002,
                                    left: f.left + f.width - 4,
                                    top: f.top + f.height / 2 - 4
                                },
                                onMouseDown: e => es(e, "e")
                            })]
                        })]
                    })]
                })
            }
        },
        5059: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 3864)), Promise.resolve().then(n.t.bind(n, 9243, 23)), Promise.resolve().then(n.t.bind(n, 347, 23)), Promise.resolve().then(n.bind(n, 153)), Promise.resolve().then(n.bind(n, 9074)), Promise.resolve().then(n.bind(n, 2344))
        },
        9074: (e, t, n) => {
            "use strict";
            n.d(t, {
                Toaster: () => i
            });
            var r = n(5155),
                o = n(1362),
                l = n(6671);
            let i = e => {
                let { ...t
                } = e, {
                    theme: n = "system"
                } = (0, o.D)();
                return (0, r.jsx)(l.l$, {
                    theme: n,
                    className: "toaster group",
                    style: {
                        "--normal-bg": "var(--popover)",
                        "--normal-text": "var(--popover-foreground)",
                        "--normal-border": "var(--border)"
                    },
                    ...t
                })
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [7690, 3753, 4629, 8441, 1684, 7358], () => t(5059)), _N_E = e.O()
    }
]);