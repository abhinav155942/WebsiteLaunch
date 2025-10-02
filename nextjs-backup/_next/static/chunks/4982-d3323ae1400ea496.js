"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4982], {
        2085: (e, t, n) => {
            n.d(t, {
                F: () => s
            });
            var r = n(2596);
            let o = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
                i = r.$,
                s = (e, t) => n => {
                    var r;
                    if ((null == t ? void 0 : t.variants) == null) return i(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
                    let {
                        variants: s,
                        defaultVariants: l
                    } = t, a = Object.keys(s).map(e => {
                        let t = null == n ? void 0 : n[e],
                            r = null == l ? void 0 : l[e];
                        if (null === t) return null;
                        let i = o(t) || o(r);
                        return s[e][i]
                    }), u = n && Object.entries(n).reduce((e, t) => {
                        let [n, r] = t;
                        return void 0 === r || (e[n] = r), e
                    }, {});
                    return i(e, a, null == t || null == (r = t.compoundVariants) ? void 0 : r.reduce((e, t) => {
                        let {
                            class: n,
                            className: r,
                            ...o
                        } = t;
                        return Object.entries(o).every(e => {
                            let [t, n] = e;
                            return Array.isArray(n) ? n.includes({ ...l,
                                ...u
                            }[t]) : ({ ...l,
                                ...u
                            })[t] === n
                        }) ? [...e, n, r] : e
                    }, []), null == n ? void 0 : n.class, null == n ? void 0 : n.className)
                }
        },
        3655: (e, t, n) => {
            n.d(t, {
                hO: () => a,
                sG: () => l
            });
            var r = n(2115),
                o = n(7650),
                i = n(9708),
                s = n(5155),
                l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
                    let n = (0, i.TL)(`Primitive.${t}`),
                        o = r.forwardRef((e, r) => {
                            let {
                                asChild: o,
                                ...i
                            } = e;
                            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, s.jsx)(o ? n : t, { ...i,
                                ref: r
                            })
                        });
                    return o.displayName = `Primitive.${t}`, { ...e,
                        [t]: o
                    }
                }, {});

            function a(e, t) {
                e && o.flushSync(() => e.dispatchEvent(t))
            }
        },
        6101: (e, t, n) => {
            n.d(t, {
                s: () => s,
                t: () => i
            });
            var r = n(2115);

            function o(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t)
            }

            function i(...e) {
                return t => {
                    let n = !1,
                        r = e.map(e => {
                            let r = o(e, t);
                            return n || "function" != typeof r || (n = !0), r
                        });
                    if (n) return () => {
                        for (let t = 0; t < r.length; t++) {
                            let n = r[t];
                            "function" == typeof n ? n() : o(e[t], null)
                        }
                    }
                }
            }

            function s(...e) {
                return r.useCallback(i(...e), e)
            }
        },
        7399: (e, t, n) => {
            n.d(t, {
                MB: () => z
            });
            var r = Object.defineProperty,
                o = Object.defineProperties,
                i = Object.getOwnPropertyDescriptors,
                s = Object.getOwnPropertySymbols,
                l = Object.prototype.hasOwnProperty,
                a = Object.prototype.propertyIsEnumerable,
                u = (e, t, n) => t in e ? r(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                c = (e, t) => {
                    for (var n in t || (t = {})) l.call(t, n) && u(e, n, t[n]);
                    if (s)
                        for (var n of s(t)) a.call(t, n) && u(e, n, t[n]);
                    return e
                },
                f = (e, t) => o(e, i(t)),
                p = class extends Error {
                    constructor(e, t, n) {
                        super(t || e.toString(), {
                            cause: n
                        }), this.status = e, this.statusText = t, this.error = n
                    }
                },
                d = async (e, t) => {
                    var n, r, o, i, s, l;
                    let a = t || {},
                        u = {
                            onRequest: [null == t ? void 0 : t.onRequest],
                            onResponse: [null == t ? void 0 : t.onResponse],
                            onSuccess: [null == t ? void 0 : t.onSuccess],
                            onError: [null == t ? void 0 : t.onError],
                            onRetry: [null == t ? void 0 : t.onRetry]
                        };
                    if (!t || !(null == t ? void 0 : t.plugins)) return {
                        url: e,
                        options: a,
                        hooks: u
                    };
                    for (let c of (null == t ? void 0 : t.plugins) || []) {
                        if (c.init) {
                            let r = await (null == (n = c.init) ? void 0 : n.call(c, e.toString(), t));
                            a = r.options || a, e = r.url
                        }
                        u.onRequest.push(null == (r = c.hooks) ? void 0 : r.onRequest), u.onResponse.push(null == (o = c.hooks) ? void 0 : o.onResponse), u.onSuccess.push(null == (i = c.hooks) ? void 0 : i.onSuccess), u.onError.push(null == (s = c.hooks) ? void 0 : s.onError), u.onRetry.push(null == (l = c.hooks) ? void 0 : l.onRetry)
                    }
                    return {
                        url: e,
                        options: a,
                        hooks: u
                    }
                },
                h = class {
                    constructor(e) {
                        this.options = e
                    }
                    shouldAttemptRetry(e, t) {
                        return this.options.shouldRetry ? Promise.resolve(e < this.options.attempts && this.options.shouldRetry(t)) : Promise.resolve(e < this.options.attempts)
                    }
                    getDelay() {
                        return this.options.delay
                    }
                },
                y = class {
                    constructor(e) {
                        this.options = e
                    }
                    shouldAttemptRetry(e, t) {
                        return this.options.shouldRetry ? Promise.resolve(e < this.options.attempts && this.options.shouldRetry(t)) : Promise.resolve(e < this.options.attempts)
                    }
                    getDelay(e) {
                        return Math.min(this.options.maxDelay, this.options.baseDelay * 2 ** e)
                    }
                },
                v = async e => {
                    let t = {},
                        n = async e => "function" == typeof e ? await e() : e;
                    if (null == e ? void 0 : e.auth) {
                        if ("Bearer" === e.auth.type) {
                            let r = await n(e.auth.token);
                            if (!r) return t;
                            t.authorization = `Bearer ${r}`
                        } else if ("Basic" === e.auth.type) {
                            let r = n(e.auth.username),
                                o = n(e.auth.password);
                            if (!r || !o) return t;
                            t.authorization = `Basic ${btoa(`${r}:${o}`)}`
                        } else if ("Custom" === e.auth.type) {
                            let r = n(e.auth.value);
                            if (!r) return t;
                            t.authorization = `${n(e.auth.prefix)} ${r}`
                        }
                    }
                    return t
                },
                g = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;

            function m(e) {
                if (void 0 === e) return !1;
                let t = typeof e;
                return "string" === t || "number" === t || "boolean" === t || null === t || "object" === t && (!!Array.isArray(e) || !e.buffer && (e.constructor && "Object" === e.constructor.name || "function" == typeof e.toJSON))
            }

            function b(e) {
                try {
                    return JSON.parse(e)
                } catch (t) {
                    return e
                }
            }

            function w(e) {
                return "function" == typeof e
            }
            async function R(e) {
                let t = new Headers(null == e ? void 0 : e.headers);
                for (let [n, r] of Object.entries(await v(e) || {})) t.set(n, r);
                if (!t.has("content-type")) {
                    let n = m(null == e ? void 0 : e.body) ? "application/json" : null;
                    n && t.set("content-type", n)
                }
                return t
            }
            var T = class e extends Error {
                constructor(t, n) {
                    super(n || JSON.stringify(t, null, 2)), this.issues = t, Object.setPrototypeOf(this, e.prototype)
                }
            };
            async function O(e, t) {
                let n = await e["~standard"].validate(t);
                if (n.issues) throw new T(n.issues);
                return n.value
            }
            var S = ["get", "post", "put", "patch", "delete"],
                E = e => ({
                    id: "apply-schema",
                    name: "Apply Schema",
                    version: "1.0.0",
                    async init(t, n) {
                        var r, o, i, s;
                        let l = (null == (o = null == (r = e.plugins) ? void 0 : r.find(e => {
                            var n;
                            return null != (n = e.schema) && !!n.config && (t.startsWith(e.schema.config.baseURL || "") || t.startsWith(e.schema.config.prefix || ""))
                        })) ? void 0 : o.schema) || e.schema;
                        if (l) {
                            let e = t;
                            (null == (i = l.config) ? void 0 : i.prefix) && e.startsWith(l.config.prefix) && (e = e.replace(l.config.prefix, ""), l.config.baseURL && (t = t.replace(l.config.prefix, l.config.baseURL))), (null == (s = l.config) ? void 0 : s.baseURL) && e.startsWith(l.config.baseURL) && (e = e.replace(l.config.baseURL, ""));
                            let r = l.schema[e];
                            if (r) {
                                let e = f(c({}, n), {
                                    method: r.method,
                                    output: r.output
                                });
                                return (null == n ? void 0 : n.disableValidation) || (e = f(c({}, e), {
                                    body: r.input ? await O(r.input, null == n ? void 0 : n.body) : null == n ? void 0 : n.body,
                                    params: r.params ? await O(r.params, null == n ? void 0 : n.params) : null == n ? void 0 : n.params,
                                    query: r.query ? await O(r.query, null == n ? void 0 : n.query) : null == n ? void 0 : n.query
                                })), {
                                    url: t,
                                    options: e
                                }
                            }
                        }
                        return {
                            url: t,
                            options: n
                        }
                    }
                }),
                j = e => async function(t, n) {
                    let r = f(c(c({}, e), n), {
                        plugins: [...(null == e ? void 0 : e.plugins) || [], E(e || {})]
                    });
                    if (null == e ? void 0 : e.catchAllError) try {
                        return await P(t, r)
                    } catch (e) {
                        return {
                            data: null,
                            error: {
                                status: 500,
                                statusText: "Fetch Error",
                                message: "Fetch related error. Captured by catchAllError option. See error property for more details.",
                                error: e
                            }
                        }
                    }
                    return await P(t, r)
                },
                P = async (e, t) => {
                    var n, r, o, i, s, l, a, u;
                    let {
                        hooks: v,
                        url: T,
                        options: E
                    } = await d(e, t), j = function(e) {
                        if (null == e ? void 0 : e.customFetchImpl) return e.customFetchImpl;
                        if ("undefined" != typeof globalThis && w(globalThis.fetch)) return globalThis.fetch;
                        if ("undefined" != typeof window && w(window.fetch)) return window.fetch;
                        throw Error("No fetch implementation found")
                    }(E), x = new AbortController, _ = null != (n = E.signal) ? n : x.signal, U = function(e, t) {
                        let {
                            baseURL: n,
                            params: r,
                            query: o
                        } = t || {
                            query: {},
                            params: {},
                            baseURL: ""
                        }, i = e.startsWith("http") ? e.split("/").slice(0, 3).join("/") : n || "";
                        if (e.startsWith("@")) {
                            let t = e.toString().split("@")[1].split("/")[0];
                            S.includes(t) && (e = e.replace(`@${t}/`, "/"))
                        }
                        i.endsWith("/") || (i += "/");
                        let [s, l] = e.replace(i, "").split("?"), a = new URLSearchParams(l);
                        for (let [e, t] of Object.entries(o || {})) null != t && a.set(e, String(t));
                        if (r)
                            if (Array.isArray(r))
                                for (let [e, t] of s.split("/").filter(e => e.startsWith(":")).entries()) {
                                    let n = r[e];
                                    s = s.replace(t, n)
                                } else
                                    for (let [e, t] of Object.entries(r)) s = s.replace(`:${e}`, String(t));
                        (s = s.split("/").map(encodeURIComponent).join("/")).startsWith("/") && (s = s.slice(1));
                        let u = a.toString();
                        return (u = u.length > 0 ? `?${u}`.replace(/\+/g, "%20") : "", i.startsWith("http")) ? new URL(`${s}${u}`, i) : `${i}${s}${u}`
                    }(T, E), $ = function(e) {
                        if (!(null == e ? void 0 : e.body)) return null;
                        let t = new Headers(null == e ? void 0 : e.headers);
                        if (m(e.body) && !t.has("content-type")) {
                            for (let [t, n] of Object.entries(null == e ? void 0 : e.body)) n instanceof Date && (e.body[t] = n.toISOString());
                            return JSON.stringify(e.body)
                        }
                        return e.body
                    }(E), A = await R(E), I = function(e, t) {
                        var n;
                        if (null == t ? void 0 : t.method) return t.method.toUpperCase();
                        if (e.startsWith("@")) {
                            let r = null == (n = e.split("@")[1]) ? void 0 : n.split("/")[0];
                            return S.includes(r) ? r.toUpperCase() : (null == t ? void 0 : t.body) ? "POST" : "GET"
                        }
                        return (null == t ? void 0 : t.body) ? "POST" : "GET"
                    }(T, E), L = f(c({}, E), {
                        url: U,
                        headers: A,
                        body: $,
                        method: I,
                        signal: _
                    });
                    for (let e of v.onRequest)
                        if (e) {
                            let t = await e(L);
                            t instanceof Object && (L = t)
                        }("pipeTo" in L && "function" == typeof L.pipeTo || "function" == typeof(null == (r = null == t ? void 0 : t.body) ? void 0 : r.pipe)) && !("duplex" in L) && (L.duplex = "half");
                    let {
                        clearTimeout: N
                    } = function(e, t) {
                        let n;
                        return !(null == e ? void 0 : e.signal) && (null == e ? void 0 : e.timeout) && (n = setTimeout(() => null == t ? void 0 : t.abort(), null == e ? void 0 : e.timeout)), {
                            abortTimeout: n,
                            clearTimeout: () => {
                                n && clearTimeout(n)
                            }
                        }
                    }(E, x), k = await j(L.url, L);
                    N();
                    let C = {
                        response: k,
                        request: L
                    };
                    for (let e of v.onResponse)
                        if (e) {
                            let n = await e(f(c({}, C), {
                                response: (null == (o = null == t ? void 0 : t.hookOptions) ? void 0 : o.cloneResponse) ? k.clone() : k
                            }));
                            n instanceof Response ? k = n : n instanceof Object && (k = n.response)
                        }
                    if (k.ok) {
                        if ("HEAD" === L.method) return {
                            data: "",
                            error: null
                        };
                        let e = function(e) {
                                let t = e.headers.get("content-type"),
                                    n = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]);
                                if (!t) return "json";
                                let r = t.split(";").shift() || "";
                                return g.test(r) ? "json" : n.has(r) || r.startsWith("text/") ? "text" : "blob"
                            }(k),
                            n = {
                                data: "",
                                response: k,
                                request: L
                            };
                        if ("json" === e || "text" === e) {
                            let e = await k.text(),
                                t = null != (i = L.jsonParser) ? i : b;
                            n.data = await t(e)
                        } else n.data = await k[e]();
                        for (let e of ((null == L ? void 0 : L.output) && L.output && !L.disableValidation && (n.data = await O(L.output, n.data)), v.onSuccess)) e && await e(f(c({}, n), {
                            response: (null == (s = null == t ? void 0 : t.hookOptions) ? void 0 : s.cloneResponse) ? k.clone() : k
                        }));
                        return (null == t ? void 0 : t.throw) ? n.data : {
                            data: n.data,
                            error: null
                        }
                    }
                    let q = null != (l = null == t ? void 0 : t.jsonParser) ? l : b,
                        W = await k.text(),
                        D = function(e) {
                            try {
                                return JSON.parse(e), !0
                            } catch (e) {
                                return !1
                            }
                        }(W),
                        B = D ? await q(W) : null,
                        F = {
                            response: k,
                            responseText: W,
                            request: L,
                            error: f(c({}, B), {
                                status: k.status,
                                statusText: k.statusText
                            })
                        };
                    for (let e of v.onError) e && await e(f(c({}, F), {
                        response: (null == (a = null == t ? void 0 : t.hookOptions) ? void 0 : a.cloneResponse) ? k.clone() : k
                    }));
                    if (null == t ? void 0 : t.retry) {
                        let n = function(e) {
                                if ("number" == typeof e) return new h({
                                    type: "linear",
                                    attempts: e,
                                    delay: 1e3
                                });
                                switch (e.type) {
                                    case "linear":
                                        return new h(e);
                                    case "exponential":
                                        return new y(e);
                                    default:
                                        throw Error("Invalid retry strategy")
                                }
                            }(t.retry),
                            r = null != (u = t.retryAttempt) ? u : 0;
                        if (await n.shouldAttemptRetry(r, k)) {
                            for (let e of v.onRetry) e && await e(C);
                            let o = n.getDelay(r);
                            return await new Promise(e => setTimeout(e, o)), await P(e, f(c({}, t), {
                                retryAttempt: r + 1
                            }))
                        }
                    }
                    if (null == t ? void 0 : t.throw) throw new p(k.status, k.statusText, D ? B : W);
                    return {
                        data: null,
                        error: f(c({}, B), {
                            status: k.status,
                            statusText: k.statusText
                        })
                    }
                },
                x = n(9509);
            let _ = Object.create(null),
                U = e => globalThis.process ? .env || globalThis.Deno ? .env.toObject() || globalThis.__env__ || (e ? _ : globalThis),
                $ = new Proxy(_, {
                    get: (e, t) => U()[t] ? ? _[t],
                    has: (e, t) => t in U() || t in _,
                    set: (e, t, n) => (U(!0)[t] = n, !0),
                    deleteProperty(e, t) {
                        if (!t) return !1;
                        let n = U(!0);
                        return delete n[t], !0
                    },
                    ownKeys: () => Object.keys(U(!0))
                });
            void 0 !== x && x.env;
            class A extends Error {
                constructor(e, t) {
                    super(e), this.name = "BetterAuthError", this.message = e, this.cause = t, this.stack = ""
                }
            }

            function I(e, t = "/api/auth") {
                return ! function(e) {
                    try {
                        let t = new URL(e);
                        return "/" !== t.pathname
                    } catch (t) {
                        throw new A(`Invalid base URL: ${e}. Please provide a valid base URL.`)
                    }
                }(e) ? (t = t.startsWith("/") ? t : `/${t}`, `${e.replace(/\/+$/,"")}${t}`) : e
            }
            let L = [],
                N = 0,
                k = 0,
                C = e => {
                    let t = [],
                        n = {
                            get: () => (n.lc || n.listen(() => {})(), n.value),
                            lc: 0,
                            listen: e => (n.lc = t.push(e), () => {
                                for (let t = N + 4; t < L.length;) L[t] === e ? L.splice(t, 4) : t += 4;
                                let r = t.indexOf(e);
                                ~r && (t.splice(r, 1), --n.lc || n.off())
                            }),
                            notify(e, r) {
                                k++;
                                let o = !L.length;
                                for (let o of t) L.push(o, n.value, e, r);
                                if (o) {
                                    for (N = 0; N < L.length; N += 4) L[N](L[N + 1], L[N + 2], L[N + 3]);
                                    L.length = 0
                                }
                            },
                            off() {},
                            set(e) {
                                let t = n.value;
                                t !== e && (n.value = e, n.notify(t))
                            },
                            subscribe(e) {
                                let t = n.listen(e);
                                return e(n.value), t
                            },
                            value: e
                        };
                    return n
                },
                q = (e, t, n, r) => (e.events = e.events || {}, e.events[n + 10] || (e.events[n + 10] = r(t => {
                    e.events[n].reduceRight((e, t) => (t(e), e), {
                        shared: {},
                        ...t
                    })
                })), e.events[n] = e.events[n] || [], e.events[n].push(t), () => {
                    let r = e.events[n],
                        o = r.indexOf(t);
                    r.splice(o, 1), r.length || (delete e.events[n], e.events[n + 10](), delete e.events[n + 10])
                }),
                W = (e, t) => q(e, n => {
                    let r = t(n);
                    r && e.events[6].push(r)
                }, 5, t => {
                    let n = e.listen;
                    e.listen = (...r) => (e.lc || e.active || (e.active = !0, t()), n(...r));
                    let r = e.off;
                    return e.events[6] = [], e.off = () => {
                        r(), setTimeout(() => {
                            if (e.active && !e.lc) {
                                for (let t of (e.active = !1, e.events[6])) t();
                                e.events[6] = []
                            }
                        }, 1e3)
                    }, () => {
                        e.listen = n, e.off = r
                    }
                }),
                D = "undefined" == typeof window,
                B = (e, t, n, r) => {
                    let o = C({
                            data: null,
                            error: null,
                            isPending: !0,
                            isRefetching: !1,
                            refetch: e => i(e)
                        }),
                        i = e => {
                            let i = "function" == typeof r ? r({
                                data: o.get().data,
                                error: o.get().error,
                                isPending: o.get().isPending
                            }) : r;
                            n(t, { ...i,
                                query: { ...i ? .query,
                                    ...e ? .query
                                },
                                async onSuccess(e) {
                                    o.set({
                                        data: e.data,
                                        error: null,
                                        isPending: !1,
                                        isRefetching: !1,
                                        refetch: o.value.refetch
                                    }), await i ? .onSuccess ? .(e)
                                },
                                async onError(e) {
                                    let {
                                        request: t
                                    } = e, n = "number" == typeof t.retry ? t.retry : t.retry ? .attempts, r = t.retryAttempt || 0;
                                    n && r < n || (o.set({
                                        error: e.error,
                                        data: null,
                                        isPending: !1,
                                        isRefetching: !1,
                                        refetch: o.value.refetch
                                    }), await i ? .onError ? .(e))
                                },
                                async onRequest(e) {
                                    let t = o.get();
                                    o.set({
                                        isPending: null === t.data,
                                        data: t.data,
                                        error: null,
                                        isRefetching: !0,
                                        refetch: o.value.refetch
                                    }), await i ? .onRequest ? .(e)
                                }
                            }).catch(e => {
                                o.set({
                                    error: e,
                                    data: null,
                                    isPending: !1,
                                    isRefetching: !1,
                                    refetch: o.value.refetch
                                })
                            })
                        };
                    e = Array.isArray(e) ? e : [e];
                    let s = !1;
                    for (let t of e) t.subscribe(() => {
                        D || (s ? i() : W(o, () => {
                            let e = setTimeout(() => {
                                s || (i(), s = !0)
                            }, 0);
                            return () => {
                                o.off(), t.off(), clearTimeout(e)
                            }
                        }))
                    });
                    return o
                },
                F = {
                    proto: /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
                    constructor: /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
                    protoShort: /"__proto__"\s*:/,
                    constructorShort: /"constructor"\s*:/
                },
                V = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/,
                G = {
                    true: !0,
                    false: !1,
                    null: null,
                    undefined: void 0,
                    nan: Number.NaN,
                    infinity: Number.POSITIVE_INFINITY,
                    "-infinity": Number.NEGATIVE_INFINITY
                },
                H = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,7}))?(?:Z|([+-])(\d{2}):(\d{2}))$/,
                J = {
                    id: "redirect",
                    name: "Redirect",
                    hooks: {
                        onSuccess(e) {
                            if (e.data ? .url && e.data ? .redirect && "undefined" != typeof window && window.location && window.location) try {
                                window.location.href = e.data.url
                            } catch {}
                        }
                    }
                },
                M = (e, t) => {
                    let n = "credentials" in Request.prototype,
                        r = function(e, t, n, r) {
                            if (e) return I(e, t);
                            if (!1 !== r) {
                                let e = $.BETTER_AUTH_URL || $.NEXT_PUBLIC_BETTER_AUTH_URL || $.PUBLIC_BETTER_AUTH_URL || $.NUXT_PUBLIC_BETTER_AUTH_URL || $.NUXT_PUBLIC_AUTH_URL || ("/" !== $.BASE_URL ? $.BASE_URL : void 0);
                                if (e) return I(e, t)
                            }
                            let o = n ? .headers.get("x-forwarded-host"),
                                i = n ? .headers.get("x-forwarded-proto");
                            if (o && i) return I(`${i}://${o}`, t);
                            if (n) {
                                let e = function(e) {
                                    try {
                                        return new URL(e).origin
                                    } catch (e) {
                                        return null
                                    }
                                }(n.url);
                                if (!e) throw new A("Could not get origin from request. Please provide a valid base URL.");
                                return I(e, t)
                            }
                            if ("undefined" != typeof window && window.location) return I(window.location.origin, t)
                        }(e ? .baseURL, e ? .basePath, void 0, t) ? ? "/api/auth",
                        o = e ? .plugins ? .flatMap(e => e.fetchPlugins).filter(e => void 0 !== e) || [],
                        i = {
                            id: "lifecycle-hooks",
                            name: "lifecycle-hooks",
                            hooks: {
                                onSuccess: e ? .fetchOptions ? .onSuccess,
                                onError: e ? .fetchOptions ? .onError,
                                onRequest: e ? .fetchOptions ? .onRequest,
                                onResponse: e ? .fetchOptions ? .onResponse
                            }
                        },
                        {
                            onSuccess: s,
                            onError: l,
                            onRequest: a,
                            onResponse: u,
                            ...c
                        } = e ? .fetchOptions || {},
                        f = j({
                            baseURL: r,
                            ...n ? {
                                credentials: "include"
                            } : {},
                            method: "GET",
                            jsonParser: e => e ? function(e, t = {
                                strict: !0
                            }) {
                                return function(e, t = {}) {
                                    let {
                                        strict: n = !1,
                                        warnings: r = !1,
                                        reviver: o,
                                        parseDates: i = !0
                                    } = t;
                                    if ("string" != typeof e) return e;
                                    let s = e.trim();
                                    if (s.length > 0 && '"' === s[0] && s.endsWith('"') && !s.slice(1, -1).includes('"')) return s.slice(1, -1);
                                    let l = s.toLowerCase();
                                    if (l.length <= 9 && l in G) return G[l];
                                    if (!V.test(s)) {
                                        if (n) throw SyntaxError("[better-json] Invalid JSON");
                                        return e
                                    }
                                    if (Object.entries(F).some(([e, t]) => {
                                            let n = t.test(s);
                                            return n && r && console.warn(`[better-json] Detected potential prototype pollution attempt using ${e} pattern`), n
                                        }) && n) throw Error("[better-json] Potential prototype pollution attempt detected");
                                    try {
                                        return JSON.parse(s, (e, t) => {
                                            if ("__proto__" === e || "constructor" === e && t && "object" == typeof t && "prototype" in t) {
                                                r && console.warn(`[better-json] Dropping "${e}" key to prevent prototype pollution`);
                                                return
                                            }
                                            if (i && "string" == typeof t) {
                                                let e = function(e) {
                                                    let t = H.exec(e);
                                                    if (!t) return null;
                                                    let [, n, r, o, i, s, l, a, u, c, f] = t, p = new Date(Date.UTC(parseInt(n, 10), parseInt(r, 10) - 1, parseInt(o, 10), parseInt(i, 10), parseInt(s, 10), parseInt(l, 10), a ? parseInt(a.padEnd(3, "0"), 10) : 0));
                                                    if (u) {
                                                        let e = (60 * parseInt(c, 10) + parseInt(f, 10)) * ("+" === u ? -1 : 1);
                                                        p.setUTCMinutes(p.getUTCMinutes() + e)
                                                    }
                                                    return p instanceof Date && !isNaN(p.getTime()) ? p : null
                                                }(t);
                                                if (e) return e
                                            }
                                            return o ? o(e, t) : t
                                        })
                                    } catch (t) {
                                        if (n) throw t;
                                        return e
                                    }
                                }(e, t)
                            }(e, {
                                strict: !1
                            }) : null,
                            customFetchImpl: fetch,
                            ...c,
                            plugins: [i, ...c.plugins || [], ...e ? .disableDefaultFetchPlugins ? [] : [J], ...o]
                        }),
                        {
                            $sessionSignal: p,
                            session: d
                        } = function(e) {
                            let t = C(!1);
                            return {
                                session: B(t, "/get-session", e, {
                                    method: "GET"
                                }),
                                $sessionSignal: t
                            }
                        }(f),
                        h = e ? .plugins || [],
                        y = {},
                        v = {
                            $sessionSignal: p,
                            session: d
                        },
                        g = {
                            "/sign-out": "POST",
                            "/revoke-sessions": "POST",
                            "/revoke-other-sessions": "POST",
                            "/delete-user": "POST"
                        },
                        m = [{
                            signal: "$sessionSignal",
                            matcher: e => "/sign-out" === e || "/update-user" === e || e.startsWith("/sign-in") || e.startsWith("/sign-up") || "/delete-user" === e || "/verify-email" === e
                        }];
                    for (let e of h) e.getAtoms && Object.assign(v, e.getAtoms ? .(f)), e.pathMethods && Object.assign(g, e.pathMethods), e.atomListeners && m.push(...e.atomListeners);
                    let b = {
                        notify: e => {
                            v[e].set(!v[e].get())
                        },
                        listen: (e, t) => {
                            v[e].subscribe(t)
                        },
                        atoms: v
                    };
                    for (let t of h) t.getActions && Object.assign(y, t.getActions ? .(f, b, e));
                    return {
                        get baseURL() {
                            return r
                        },
                        pluginsActions: y,
                        pluginsAtoms: v,
                        pluginPathMethods: g,
                        atomListeners: m,
                        $fetch: f,
                        $store: b
                    }
                };
            var X = n(2115);

            function z(e) {
                var t, n;
                let {
                    pluginPathMethods: r,
                    pluginsActions: o,
                    pluginsAtoms: i,
                    $fetch: s,
                    $store: l,
                    atomListeners: a
                } = M(e), u = {};
                for (let [e, t] of Object.entries(i)) {
                    u[`use${(n=e).charAt(0).toUpperCase()+n.slice(1)}`] = () => (function(e, t = {}) {
                        let n = (0, X.useRef)(e.get()),
                            {
                                keys: r,
                                deps: o = [e, r]
                            } = t,
                            i = (0, X.useCallback)(t => {
                                let o = e => {
                                    n.current !== e && (n.current = e, t())
                                };
                                return (o(e.value), r ? .length) ? function(e, t, n) {
                                    let r = new Set(t).add(void 0);
                                    return e.listen((e, t, o) => {
                                        r.has(o) && n(e, t, o)
                                    })
                                }(e, r, o) : e.listen(o)
                            }, o),
                            s = () => n.current;
                        return (0, X.useSyncExternalStore)(i, s, s)
                    })(t)
                }
                return t = { ...o,
                        ...u,
                        $fetch: s,
                        $store: l
                    },
                    function e(n = []) {
                        return new Proxy(function() {}, {
                            get(r, o) {
                                var i;
                                if ("then" === o || "catch" === o || "finally" === o) return;
                                let s = [...n, o],
                                    l = t;
                                for (let e of s)
                                    if (l && "object" == typeof l && e in l) l = l[e];
                                    else {
                                        l = void 0;
                                        break
                                    }
                                return "function" == typeof l ? l : "object" == typeof(i = l) && null !== i && "get" in i && "function" == typeof i.get && "lc" in i && "number" == typeof i.lc ? l : e(s)
                            },
                            apply: async (e, t, o) => {
                                let l = "/" + n.map(e => e.replace(/[A-Z]/g, e => `-${e.toLowerCase()}`)).join("/"),
                                    u = o[0] || {},
                                    c = o[1] || {},
                                    {
                                        query: f,
                                        fetchOptions: p,
                                        ...d
                                    } = u,
                                    h = { ...c,
                                        ...p
                                    },
                                    y = function(e, t, n) {
                                        let r = t[e],
                                            {
                                                fetchOptions: o,
                                                query: i,
                                                ...s
                                            } = n || {};
                                        return r || (o ? .method ? o.method : s && Object.keys(s).length > 0 ? "POST" : "GET")
                                    }(l, r, u);
                                return await s(l, { ...h,
                                    body: "GET" === y ? void 0 : { ...d,
                                        ...h ? .body || {}
                                    },
                                    query: f || h ? .query,
                                    method: y,
                                    async onSuccess(e) {
                                        await h ? .onSuccess ? .(e);
                                        let t = a ? .find(e => e.matcher(l));
                                        if (!t) return;
                                        let n = i[t.signal];
                                        if (!n) return;
                                        let r = n.get();
                                        setTimeout(() => {
                                            n.set(!r)
                                        }, 10)
                                    }
                                })
                            }
                        })
                    }()
            }
        },
        9708: (e, t, n) => {
            n.d(t, {
                DX: () => l,
                Dc: () => u,
                TL: () => s
            });
            var r = n(2115),
                o = n(6101),
                i = n(5155);

            function s(e) {
                let t = function(e) {
                        let t = r.forwardRef((e, t) => {
                            let {
                                children: n,
                                ...i
                            } = e;
                            if (r.isValidElement(n)) {
                                var s;
                                let e, l, a = (s = n, (l = (e = Object.getOwnPropertyDescriptor(s.props, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning) ? s.ref : (l = (e = Object.getOwnPropertyDescriptor(s, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning) ? s.props.ref : s.props.ref || s.ref),
                                    u = function(e, t) {
                                        let n = { ...t
                                        };
                                        for (let r in t) {
                                            let o = e[r],
                                                i = t[r];
                                            /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                                                let t = i(...e);
                                                return o(...e), t
                                            } : o && (n[r] = o) : "style" === r ? n[r] = { ...o,
                                                ...i
                                            } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                                        }
                                        return { ...e,
                                            ...n
                                        }
                                    }(i, n.props);
                                return n.type !== r.Fragment && (u.ref = t ? (0, o.t)(t, a) : a), r.cloneElement(n, u)
                            }
                            return r.Children.count(n) > 1 ? r.Children.only(null) : null
                        });
                        return t.displayName = `${e}.SlotClone`, t
                    }(e),
                    n = r.forwardRef((e, n) => {
                        let {
                            children: o,
                            ...s
                        } = e, l = r.Children.toArray(o), a = l.find(c);
                        if (a) {
                            let e = a.props.children,
                                o = l.map(t => t !== a ? t : r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null);
                            return (0, i.jsx)(t, { ...s,
                                ref: n,
                                children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
                            })
                        }
                        return (0, i.jsx)(t, { ...s,
                            ref: n,
                            children: o
                        })
                    });
                return n.displayName = `${e}.Slot`, n
            }
            var l = s("Slot"),
                a = Symbol("radix.slottable");

            function u(e) {
                let t = ({
                    children: e
                }) => (0, i.jsx)(i.Fragment, {
                    children: e
                });
                return t.displayName = `${e}.Slottable`, t.__radixId = a, t
            }

            function c(e) {
                return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === a
            }
        }
    }
]);