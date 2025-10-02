(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8974], {
        285: (e, t, s) => {
            "use strict";
            s.d(t, {
                $: () => l
            });
            var a = s(5155);
            s(2115);
            var r = s(9708),
                n = s(2085),
                i = s(9434);
            let o = (0, n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
                variants: {
                    variant: {
                        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
                        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
                        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
                        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                        link: "text-primary underline-offset-4 hover:underline"
                    },
                    size: {
                        default: "h-9 px-4 py-2 has-[>svg]:px-3",
                        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
                        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                        icon: "size-9"
                    }
                },
                defaultVariants: {
                    variant: "default",
                    size: "default"
                }
            });

            function l(e) {
                let {
                    className: t,
                    variant: s,
                    size: n,
                    asChild: l = !1,
                    ...c
                } = e, d = l ? r.DX : "button";
                return (0, a.jsx)(d, {
                    "data-slot": "button",
                    className: (0, i.A)(o({
                        variant: s,
                        size: n,
                        className: t
                    })),
                    ...c
                })
            }
        },
        1618: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 9456))
        },
        7297: (e, t, s) => {
            "use strict";
            s.d(t, {
                CI: () => n,
                Hh: () => r,
                Jv: () => a,
                wV: () => i
            });
            let {
                signIn: a,
                signUp: r,
                signOut: n,
                useSession: i,
                sendVerificationEmail: o,
                forgetPassword: l,
                resetPassword: c
            } = (0, s(7399).MB)({
                baseURL: window.location.origin,
                fetchOptions: {
                    auth: {
                        type: "Bearer",
                        token: () => localStorage.getItem("bearer_token") || ""
                    },
                    onSuccess: e => {
                        let t = e.response.headers.get("set-auth-token");
                        t && localStorage.setItem("bearer_token", t)
                    }
                }
            })
        },
        9434: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => i,
                cn: () => n
            });
            var a = s(2596),
                r = s(9688);

            function n() {
                for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                return (0, r.QP)((0, a.A)(t))
            }
            let i = n
        },
        9456: (e, t, s) => {
            "use strict";
            s.d(t, {
                HomeClient: () => eu
            });
            var a = s(5155),
                r = s(2115),
                n = s(1539),
                i = s(9376),
                o = s(4783),
                l = s(6474),
                c = s(7951),
                d = s(6874),
                m = s.n(d),
                u = s(6671),
                p = s(8578),
                x = s(3052),
                h = s(5196),
                f = s(9428),
                g = s(9434);
            let b = p.bL,
                v = p.l9;
            p.YJ, p.ZL, p.Pb, p.z6, r.forwardRef((e, t) => {
                let {
                    className: s,
                    inset: r,
                    children: n,
                    ...i
                } = e;
                return (0, a.jsxs)(p.ZP, {
                    ref: t,
                    className: (0, g.A)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", r && "pl-8", s),
                    ...i,
                    children: [n, (0, a.jsx)(x.A, {
                        className: "ml-auto h-4 w-4"
                    })]
                })
            }).displayName = p.ZP.displayName, r.forwardRef((e, t) => {
                let {
                    className: s,
                    ...r
                } = e;
                return (0, a.jsx)(p.ZL, {
                    children: (0, a.jsx)(p.G5, {
                        ref: t,
                        className: (0, g.A)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", s),
                        ...r
                    })
                })
            }).displayName = p.G5.displayName;
            let j = r.forwardRef((e, t) => {
                let {
                    className: s,
                    sideOffset: r = 4,
                    ...n
                } = e;
                return (0, a.jsx)(p.ZL, {
                    children: (0, a.jsx)(p.UC, {
                        ref: t,
                        sideOffset: r,
                        className: (0, g.A)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", s),
                        ...n
                    })
                })
            });
            j.displayName = p.UC.displayName;
            let w = r.forwardRef((e, t) => {
                let {
                    className: s,
                    inset: r,
                    ...n
                } = e;
                return (0, a.jsx)(p.q7, {
                    ref: t,
                    className: (0, g.A)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", r && "pl-8", s),
                    ...n
                })
            });
            w.displayName = p.q7.displayName, r.forwardRef((e, t) => {
                let {
                    className: s,
                    children: r,
                    checked: n,
                    ...i
                } = e;
                return (0, a.jsxs)(p.H_, {
                    ref: t,
                    className: (0, g.A)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", s),
                    checked: n,
                    ...i,
                    children: [(0, a.jsx)("span", {
                        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: (0, a.jsx)(p.VF, {
                            children: (0, a.jsx)(h.A, {
                                className: "h-4 w-4"
                            })
                        })
                    }), r]
                })
            }).displayName = p.H_.displayName, r.forwardRef((e, t) => {
                let {
                    className: s,
                    children: r,
                    ...n
                } = e;
                return (0, a.jsxs)(p.hN, {
                    ref: t,
                    className: (0, g.A)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", s),
                    ...n,
                    children: [(0, a.jsx)("span", {
                        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: (0, a.jsx)(p.VF, {
                            children: (0, a.jsx)(f.A, {
                                className: "h-4 w-4 fill-current"
                            })
                        })
                    }), r]
                })
            }).displayName = p.hN.displayName;
            let y = r.forwardRef((e, t) => {
                let {
                    className: s,
                    inset: r,
                    ...n
                } = e;
                return (0, a.jsx)(p.JU, {
                    ref: t,
                    className: (0, g.A)("px-2 py-1.5 text-sm font-semibold", r && "pl-8", s),
                    ...n
                })
            });
            y.displayName = p.JU.displayName;
            let N = r.forwardRef((e, t) => {
                let {
                    className: s,
                    ...r
                } = e;
                return (0, a.jsx)(p.wv, {
                    ref: t,
                    className: (0, g.A)("-mx-1 my-1 h-px bg-muted", s),
                    ...r
                })
            });
            N.displayName = p.wv.displayName;
            var k = s(7297),
                S = s(5695);
            let A = e => {
                let {
                    onMenuClick: t,
                    selectedModel: s,
                    onModelChange: d
                } = e, [p, x] = r.useState("Hesper 1.0v"), [h, f] = (0, r.useState)(0), [g, y] = (0, r.useState)(!1), {
                    data: N,
                    isPending: A,
                    refetch: C
                } = (0, k.wV)(), [R, _] = (0, r.useState)(!1), E = (0, S.useRouter)();
                (0, r.useEffect)(() => {
                    "hesper-1.0v" === s ? x("Hesper 1.0v") : x("Hesper Pro")
                }, [s]), (0, r.useEffect)(() => {
                    z(), D()
                }, [N]);
                let z = async () => {
                        let e = localStorage.getItem("bearer_token");
                        if (!e) return void f(0);
                        try {
                            let t = await fetch("/api/user/credits", {
                                headers: {
                                    Authorization: "Bearer ".concat(e),
                                    "Content-Type": "application/json"
                                }
                            });
                            if (t.ok) {
                                let e = await t.json();
                                f(e.credits)
                            } else {
                                let e = await t.json();
                                u.oR.error(e.error || "Failed to fetch credits"), f(0)
                            }
                        } catch (e) {
                            u.oR.error("Failed to fetch credits"), f(0)
                        }
                    },
                    D = async () => {
                        let e = localStorage.getItem("bearer_token");
                        if (!e) return void y(!1);
                        try {
                            let t = await fetch("/api/user/subscription", {
                                headers: {
                                    Authorization: "Bearer ".concat(e),
                                    "Content-Type": "application/json"
                                }
                            });
                            if (t.ok) {
                                let e = await t.json(),
                                    s = Date.now(),
                                    a = e.subscriptionExpiry ? new Date(e.subscriptionExpiry).getTime() : null,
                                    r = ("basic" === e.subscriptionPlan || "pro" === e.subscriptionPlan) && (!a || a > s);
                                y(r)
                            } else y(!1)
                        } catch (e) {
                            console.error("Failed to check subscription:", e), y(!1)
                        }
                    },
                    P = e => "hesper-1.0v" === e ? g ? "100 messages/day" : "30 messages/day" : "hesper-pro" === e ? g ? "50 messages/day" : "3 messages/day" : "",
                    I = Math.max(0, Math.min(h, g ? 50 : 3)),
                    L = Math.max(0, Math.min(h, g ? 100 : 30)),
                    H = [{
                        id: "hesper-1.0v",
                        name: "Hesper 1.0v",
                        icon: n.A,
                        description: "Fast responses, general AI assistance",
                        limits: P("hesper-1.0v"),
                        badge: "Free"
                    }, {
                        id: "hesper-pro",
                        name: "Hesper Pro",
                        icon: i.A,
                        description: "Advanced reasoning & research capabilities",
                        limits: P("hesper-pro"),
                        badge: "Pro"
                    }],
                    M = (H.find(e => e.id === s) || H[0]).icon,
                    F = async () => {
                        let {
                            error: e
                        } = await (0, k.CI)();
                        if (null == e ? void 0 : e.code) return void u.oR.error(e.code);
                        localStorage.removeItem("bearer_token"), await C(), E.push("/")
                    };
                return (0, a.jsxs)("header", {
                    className: "flex h-16 w-full items-center justify-between border-b border-border bg-background px-2 md:px-4 lg:px-6 font-sans",
                    children: [(0, a.jsxs)("div", {
                        className: "flex items-center gap-1 md:gap-2",
                        children: [t && (0, a.jsx)("button", {
                            onClick: t,
                            className: "md:hidden p-1.5 rounded-lg hover:bg-muted transition-colors",
                            "aria-label": "Menu",
                            children: (0, a.jsx)(o.A, {
                                className: "h-4 w-4 text-foreground"
                            })
                        }), (0, a.jsx)("span", {
                            className: "text-base md:text-lg lg:text-xl xl:text-[22px] font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 bg-clip-text text-transparent",
                            children: "Hesper"
                        }), (0, a.jsxs)(b, {
                            children: [(0, a.jsx)(v, {
                                asChild: !0,
                                children: (0, a.jsxs)("button", {
                                    className: "flex items-center gap-1 md:gap-1.5 lg:gap-2 rounded-md px-2 py-1 md:px-2.5 md:py-1.5 lg:px-3 lg:py-2 border border-border bg-background text-xs md:text-sm font-normal text-foreground transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring min-w-0 md:min-w-[120px] lg:min-w-[140px] xl:min-w-[160px]",
                                    children: [(0, a.jsx)(M, {
                                        className: "h-3.5 w-3.5 md:h-4 md:w-4 shrink-0 flex-shrink-0"
                                    }), (0, a.jsx)("span", {
                                        className: "hidden xs:inline truncate max-w-[80px] md:max-w-[100px]",
                                        children: p
                                    }), (0, a.jsx)("span", {
                                        className: "xs:hidden truncate",
                                        children: "Model"
                                    }), (0, a.jsx)(l.A, {
                                        className: "h-3.5 w-3.5 md:h-4 md:w-4 shrink-0 opacity-50 ml-auto flex-shrink-0"
                                    })]
                                })
                            }), (0, a.jsxs)(j, {
                                align: "start",
                                className: "w-[280px] md:w-[320px] p-2",
                                children: [H.map(e => {
                                    let t = e.icon,
                                        r = s === e.id;
                                    return (0, a.jsxs)(w, {
                                        onClick: () => d(e.id),
                                        className: "flex flex-col items-start gap-2 p-3 cursor-pointer rounded-md transition-colors ".concat(r ? "bg-primary/10 border border-primary/20" : "hover:bg-secondary"),
                                        children: [(0, a.jsxs)("div", {
                                            className: "flex items-center gap-2 w-full",
                                            children: [(0, a.jsx)(t, {
                                                className: "h-4 w-4 shrink-0"
                                            }), (0, a.jsx)("span", {
                                                className: "font-medium flex-1",
                                                children: e.name
                                            }), (0, a.jsxs)("div", {
                                                className: "flex items-center gap-2",
                                                children: ["Pro" === e.badge && (0, a.jsx)(c.A, {
                                                    className: "h-3 w-3 text-amber-500"
                                                }), (0, a.jsx)("span", {
                                                    className: "text-xs px-2 py-0.5 rounded-full ".concat("Pro" === e.badge ? "bg-amber-100 text-amber-700" : "bg-green-100 text-green-700"),
                                                    children: e.badge
                                                })]
                                            })]
                                        }), (0, a.jsx)("p", {
                                            className: "text-xs text-muted-foreground leading-relaxed",
                                            children: e.description
                                        }), (0, a.jsxs)("div", {
                                            className: "flex items-center justify-between w-full",
                                            children: [(0, a.jsx)("span", {
                                                className: "text-xs text-muted-foreground",
                                                children: e.limits
                                            }), !g && (0, a.jsx)(m(), {
                                                href: "/checkout",
                                                className: "text-xs text-primary hover:underline",
                                                onClick: e => e.stopPropagation(),
                                                children: "Upgrade"
                                            })]
                                        })]
                                    }, e.id)
                                }), (0, a.jsx)("div", {
                                    className: "border-t mt-2 pt-2",
                                    children: (0, a.jsx)(m(), {
                                        href: "/about-hesper",
                                        className: "flex items-center gap-2 p-2 text-xs text-muted-foreground hover:text-foreground transition-colors",
                                        children: "Learn more about Hesper models"
                                    })
                                })]
                            })]
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "flex items-center gap-1 md:gap-2 lg:gap-3 xl:gap-6",
                        children: [(0, a.jsx)(m(), {
                            href: "/subscriptions",
                            className: "hidden xl:block text-sm text-muted-foreground hover:text-primary transition-colors",
                            children: "Subscriptions"
                        }), (0, a.jsxs)(m(), {
                            href: "/checkout",
                            className: "hidden xl:block text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap",
                            children: [(0, a.jsx)("span", {
                                className: "hidden sm:inline",
                                children: "Credits: "
                            }), h]
                        }), (0, a.jsxs)("div", {
                            className: "relative flex-shrink-0",
                            children: [(0, a.jsxs)("button", {
                                className: "inline-flex h-7 md:h-8 lg:h-9 items-center justify-center rounded-lg border border-border bg-background px-2 md:px-2.5 lg:px-3 text-xs md:text-sm font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 whitespace-nowrap",
                                onClick: () => _(e => !e),
                                onMouseEnter: () => _(!0),
                                onMouseLeave: () => _(!1),
                                children: [(0, a.jsx)("span", {
                                    className: "hidden md:inline",
                                    children: "View messages"
                                }), (0, a.jsx)("span", {
                                    className: "md:hidden text-xs",
                                    children: "Usage"
                                })]
                            }), R && (0, a.jsxs)("div", {
                                className: "absolute right-0 mt-2 w-[280px] rounded-lg border border-border bg-popover p-3 text-sm shadow-md z-50",
                                children: [(0, a.jsx)("p", {
                                    className: "text-muted-foreground mb-1",
                                    children: "Usage based on your credits and plan"
                                }), (0, a.jsxs)("p", {
                                    className: "text-foreground",
                                    children: ["Hesper Pro = ", I, " messages remaining / Hesper 1.0v = ", L, " messages remaining."]
                                })]
                            })]
                        }), (null == N ? void 0 : N.user) ? (0, a.jsxs)(b, {
                            children: [(0, a.jsx)(v, {
                                asChild: !0,
                                children: (0, a.jsxs)("button", {
                                    className: "inline-flex h-7 md:h-8 lg:h-9 items-center justify-center rounded-lg border border-border bg-background px-2 md:px-2.5 lg:px-3 text-xs md:text-sm font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                                    children: [(0, a.jsx)("span", {
                                        className: "max-w-[80px] md:max-w-[120px] lg:max-w-[140px] truncate",
                                        children: N.user.name || N.user.email
                                    }), (0, a.jsx)(l.A, {
                                        className: "ml-0.5 md:ml-1 lg:ml-2 h-3.5 w-3.5 md:h-4 md:w-4 shrink-0 opacity-60"
                                    })]
                                })
                            }), (0, a.jsxs)(j, {
                                align: "end",
                                className: "w-48 p-1",
                                children: [(0, a.jsx)(w, {
                                    asChild: !0,
                                    children: (0, a.jsx)(m(), {
                                        href: "/settings",
                                        children: "Settings"
                                    })
                                }), (0, a.jsx)(w, {
                                    onClick: F,
                                    className: "text-destructive focus:text-destructive",
                                    children: "Log out"
                                })]
                            })]
                        }) : (0, a.jsx)(m(), {
                            href: "/sign-in",
                            className: "inline-flex h-7 md:h-8 lg:h-9 items-center justify-center rounded-lg bg-primary px-2.5 md:px-3 lg:px-4 xl:px-6 text-xs md:text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 flex-shrink-0",
                            children: "Sign in"
                        })]
                    })]
                })
            };
            var C = s(1284),
                R = s(6767),
                _ = s(1586),
                E = s(8136),
                z = s(4616),
                D = s(1497),
                P = s(2525),
                I = s(381),
                L = s(285),
                H = s(3921);

            function M(e) {
                let {
                    delayDuration: t = 0,
                    ...s
                } = e;
                return (0, a.jsx)(H.Kq, {
                    "data-slot": "tooltip-provider",
                    delayDuration: t,
                    ...s
                })
            }

            function F(e) {
                let { ...t
                } = e;
                return (0, a.jsx)(M, {
                    children: (0, a.jsx)(H.bL, {
                        "data-slot": "tooltip",
                        ...t
                    })
                })
            }

            function O(e) {
                let { ...t
                } = e;
                return (0, a.jsx)(H.l9, {
                    "data-slot": "tooltip-trigger",
                    ...t
                })
            }

            function T(e) {
                let {
                    className: t,
                    sideOffset: s = 0,
                    children: r,
                    ...n
                } = e;
                return (0, a.jsx)(H.ZL, {
                    children: (0, a.jsxs)(H.UC, {
                        "data-slot": "tooltip-content",
                        sideOffset: s,
                        className: (0, g.A)("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance", t),
                        ...n,
                        children: [r, (0, a.jsx)(H.i3, {
                            className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"
                        })]
                    })
                })
            }
            var U = s(5452),
                J = s(4416);

            function q(e) {
                let { ...t
                } = e;
                return (0, a.jsx)(U.bL, {
                    "data-slot": "dialog",
                    ...t
                })
            }

            function B(e) {
                let { ...t
                } = e;
                return (0, a.jsx)(U.ZL, {
                    "data-slot": "dialog-portal",
                    ...t
                })
            }

            function V(e) {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, a.jsx)(U.hJ, {
                    "data-slot": "dialog-overlay",
                    className: (0, g.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", t),
                    ...s
                })
            }

            function $(e) {
                let {
                    className: t,
                    children: s,
                    showCloseButton: r = !0,
                    ...n
                } = e;
                return (0, a.jsxs)(B, {
                    "data-slot": "dialog-portal",
                    children: [(0, a.jsx)(V, {}), (0, a.jsxs)(U.UC, {
                        "data-slot": "dialog-content",
                        className: (0, g.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", t),
                        ...n,
                        children: [s, r && (0, a.jsxs)(U.bm, {
                            "data-slot": "dialog-close",
                            className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                            children: [(0, a.jsx)(J.A, {}), (0, a.jsx)("span", {
                                className: "sr-only",
                                children: "Close"
                            })]
                        })]
                    })]
                })
            }

            function G(e) {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, a.jsx)("div", {
                    "data-slot": "dialog-header",
                    className: (0, g.cn)("flex flex-col gap-2 text-center sm:text-left", t),
                    ...s
                })
            }

            function Z(e) {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, a.jsx)("div", {
                    "data-slot": "dialog-footer",
                    className: (0, g.cn)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", t),
                    ...s
                })
            }

            function W(e) {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, a.jsx)(U.hE, {
                    "data-slot": "dialog-title",
                    className: (0, g.cn)("text-lg leading-none font-semibold", t),
                    ...s
                })
            }

            function K(e) {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, a.jsx)(U.VY, {
                    "data-slot": "dialog-description",
                    className: (0, g.cn)("text-muted-foreground text-sm", t),
                    ...s
                })
            }

            function Y(e) {
                let {
                    sidebarOpen: t,
                    setSidebarOpen: s,
                    isMobile: n,
                    onNewChat: i,
                    onSelectSession: l
                } = e, [c, d] = r.useState([]), [u, p] = r.useState(null);
                r.useEffect(() => {
                    let e = () => {
                        try {
                            let e = localStorage.getItem("hesper_chat_sessions"),
                                t = e ? JSON.parse(e) : [];
                            d(Array.isArray(t) ? t : [])
                        } catch (e) {
                            d([])
                        }
                    };
                    e();
                    let t = () => e();
                    return window.addEventListener("hesper:chat-sessions-updated", t), () => window.removeEventListener("hesper:chat-sessions-updated", t)
                }, []);
                let x = e => {
                        null == l || l(e);
                        try {
                            localStorage.setItem("hesper_selected_session_id", e), window.dispatchEvent(new CustomEvent("hesper:chat-session-selected", {
                                detail: {
                                    id: e
                                }
                            }))
                        } catch (e) {}
                        n && s(!1)
                    },
                    h = "bg-card p-2 transition-all duration-300 ease-in-out overflow-y-auto",
                    f = t ? n ? "w-full" : "w-[280px]" : "w-[72px]";
                h += " ".concat(n ? "h-screen" : "h-full"), h += " ".concat(f), n ? t ? h += " fixed inset-y-0 left-0 z-50 flex flex-col" : h += " hidden" : h += " flex flex-col";
                let g = [{
                    icon: C.A,
                    label: "About Hesper",
                    href: "/about-hesper"
                }, {
                    icon: R.A,
                    label: "Hesper App",
                    href: "#"
                }, {
                    icon: _.A,
                    label: "Subscriptions",
                    href: "/subscriptions"
                }, {
                    icon: E.A,
                    label: "For Business",
                    href: "#"
                }, {
                    icon: _.A,
                    label: "Checkout",
                    href: "/checkout"
                }];
                return (0, a.jsx)(M, {
                    delayDuration: 0,
                    children: (0, a.jsxs)("aside", {
                        className: h,
                        children: [(0, a.jsx)("div", {
                            className: "mb-3 sm:mb-4 flex h-[56px] items-center ".concat(t ? "justify-start ml-1" : "justify-center", " min-h-[44px]"),
                            children: (0, a.jsxs)(F, {
                                children: [(0, a.jsx)(O, {
                                    asChild: !0,
                                    children: (0, a.jsxs)(L.$, {
                                        variant: "ghost",
                                        size: "icon",
                                        onClick: () => s(!t),
                                        className: "h-12 w-12 rounded-full text-sidebar-foreground hover:bg-sidebar-accent min-h-[44px] min-w-[44px]",
                                        children: [(0, a.jsx)(o.A, {
                                            className: "h-6 w-6"
                                        }), (0, a.jsx)("span", {
                                            className: "sr-only",
                                            children: "Toggle sidebar"
                                        })]
                                    })
                                }), (0, a.jsx)(T, {
                                    side: "right",
                                    children: (0, a.jsx)("p", {
                                        children: "Expand menu"
                                    })
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            className: "flex ".concat(t ? "justify-start" : "justify-center"),
                            children: (0, a.jsxs)(F, {
                                children: [(0, a.jsx)(O, {
                                    asChild: !0,
                                    children: (0, a.jsxs)(L.$, {
                                        variant: "ghost",
                                        className: "flex h-14 items-center justify-start rounded-full bg-sidebar-accent text-sm font-medium text-sidebar-foreground transition-all duration-200 ease-in-out hover:bg-sidebar-accent/90 ".concat(t ? "w-auto px-4" : "w-14 justify-center px-0"),
                                        onClick: i,
                                        children: [(0, a.jsx)(z.A, {
                                            className: "h-6 w-6"
                                        }), t && (0, a.jsx)("span", {
                                            className: "ml-4 whitespace-nowrap",
                                            children: "New chat"
                                        })]
                                    })
                                }), !t && (0, a.jsx)(T, {
                                    side: "right",
                                    children: (0, a.jsx)("p", {
                                        children: "New chat"
                                    })
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            className: "mt-4 sm:mt-6 flex flex-col space-y-2",
                            children: g.map((e, r) => (0, a.jsxs)(F, {
                                children: [(0, a.jsx)(O, {
                                    asChild: !0,
                                    children: (0, a.jsx)(m(), {
                                        href: e.href,
                                        onClick: () => n && s(!1),
                                        children: (0, a.jsxs)(L.$, {
                                            variant: "ghost",
                                            className: "flex h-12 items-center text-sidebar-foreground transition-all duration-300 hover:bg-sidebar-accent min-h-[44px] ".concat(t ? "w-full justify-start px-3 sm:px-4" : "w-12 justify-center px-0"),
                                            children: [(0, a.jsx)(e.icon, {
                                                className: "h-5 w-5"
                                            }), t && (0, a.jsx)("span", {
                                                className: "ml-2 sm:ml-3 whitespace-nowrap text-sm font-medium truncate",
                                                children: e.label
                                            })]
                                        })
                                    })
                                }), !t && (0, a.jsx)(T, {
                                    side: "right",
                                    children: (0, a.jsx)("p", {
                                        children: e.label
                                    })
                                })]
                            }, r))
                        }), (0, a.jsx)("div", {
                            className: "flex-1 transition-opacity ".concat(t ? "animate-in fade-in-0 duration-500" : "opacity-0 pointer-events-none"),
                            children: t && (0, a.jsxs)("div", {
                                className: "mt-8 h-full overflow-y-auto px-2 text-left",
                                children: [(0, a.jsx)("h2", {
                                    className: "px-2 text-base font-medium text-foreground mb-4 font-['Google_Sans']",
                                    children: "Recent"
                                }), (0, a.jsxs)("div", {
                                    className: "space-y-1",
                                    children: [0 === c.length && (0, a.jsx)("div", {
                                        className: "px-2 py-1 text-sm text-muted-foreground",
                                        children: "No chats yet"
                                    }), c.map(e => (0, a.jsxs)("div", {
                                        className: "relative group",
                                        children: [(0, a.jsxs)("button", {
                                            type: "button",
                                            onClick: () => x(e.id),
                                            className: "w-full flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-sidebar-accent text-left",
                                            title: e.title,
                                            children: [(0, a.jsx)(D.A, {
                                                className: "h-4 w-4 text-sidebar-foreground flex-shrink-0"
                                            }), (0, a.jsx)("span", {
                                                className: "truncate text-sm flex-1",
                                                children: e.title || "Untitled chat"
                                            })]
                                        }), (0, a.jsxs)(L.$, {
                                            variant: "ghost",
                                            size: "icon",
                                            className: "absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity",
                                            onClick: t => {
                                                t.stopPropagation(), p(e.id)
                                            },
                                            children: [(0, a.jsx)(P.A, {
                                                className: "h-3 w-3"
                                            }), (0, a.jsx)("span", {
                                                className: "sr-only",
                                                children: "Delete chat"
                                            })]
                                        })]
                                    }, e.id))]
                                }), (0, a.jsx)(q, {
                                    open: null !== u,
                                    onOpenChange: () => p(null),
                                    children: (0, a.jsxs)($, {
                                        children: [(0, a.jsxs)(G, {
                                            children: [(0, a.jsx)(W, {
                                                children: "Delete Chat"
                                            }), (0, a.jsx)(K, {
                                                children: "Are you sure you want to delete this chat? This action cannot be undone."
                                            })]
                                        }), (0, a.jsxs)(Z, {
                                            children: [(0, a.jsx)(L.$, {
                                                variant: "outline",
                                                onClick: () => p(null),
                                                children: "Cancel"
                                            }), (0, a.jsx)(L.$, {
                                                variant: "destructive",
                                                onClick: () => {
                                                    if (u) {
                                                        let e = c.filter(e => e.id !== u);
                                                        d(e);
                                                        try {
                                                            localStorage.setItem("hesper_chat_sessions", JSON.stringify(e)), window.dispatchEvent(new CustomEvent("hesper:chat-sessions-updated"))
                                                        } catch (e) {}
                                                    }
                                                    p(null)
                                                },
                                                children: "Delete"
                                            })]
                                        })]
                                    })
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            className: "mt-auto flex flex-col items-center space-y-2",
                            children: (0, a.jsxs)(F, {
                                children: [(0, a.jsx)(O, {
                                    asChild: !0,
                                    children: (0, a.jsxs)(L.$, {
                                        variant: "ghost",
                                        className: "flex h-14 items-center rounded-full text-sidebar-foreground transition-all duration-300 hover:bg-sidebar-accent ".concat(t ? "w-full justify-start px-4" : "w-14 justify-center px-0"),
                                        children: [(0, a.jsx)(I.A, {
                                            className: "h-6 w-6"
                                        }), t && (0, a.jsx)("span", {
                                            className: "ml-4 whitespace-nowrap font-['Google_Sans']",
                                            children: "Settings"
                                        })]
                                    })
                                }), !t && (0, a.jsx)(T, {
                                    side: "right",
                                    children: (0, a.jsx)("p", {
                                        children: "Settings"
                                    })
                                })]
                            })
                        })]
                    })
                })
            }
            var Q = s(9588),
                X = s(2355),
                ee = s(5623),
                et = s(3837),
                es = s(2874),
                ea = s(4357),
                er = s(133),
                en = s(333),
                ei = s(5580),
                eo = s(9869),
                el = s(2486);
            async function ec(e, t, s) {
                try {
                    let a = localStorage.getItem("bearer_token"),
                        r = await fetch("/api/hesper/chat", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                ...a ? {
                                    Authorization: "Bearer ".concat(a)
                                } : {}
                            },
                            body: JSON.stringify({
                                message: e,
                                model: t,
                                chat_history: Array.isArray(s) ? s.slice(-6) : []
                            })
                        });
                    if (!r.ok) {
                        let e = await r.text().catch(() => "");
                        throw Error(e || "Webhook error: ".concat(r.status))
                    }
                    let n = await r.text();
                    if (n.trim().startsWith("{") && n.trim().endsWith("}")) try {
                        let e = JSON.parse(n);
                        return e.output || e.reply || e.message || e.text || e.content || n
                    } catch (e) {}
                    return n
                } catch (e) {
                    throw Error((null == e ? void 0 : e.message) || "Failed to contact chat service")
                }
            }

            function ed(e) {
                let {
                    selectedModel: t,
                    onBack: s,
                    initialMessage: o,
                    currentSessionId: c,
                    onLoadSession: d
                } = e, [m, p] = (0, r.useState)([]), [x, h] = (0, r.useState)(""), [f, g] = (0, r.useState)(!1), [k, S] = (0, r.useState)(!1), [A, C] = (0, r.useState)(!1), [R, _] = (0, r.useState)(!1), [E, z] = (0, r.useState)(!1), [D, P] = (0, r.useState)(!1), [I, L] = (0, r.useState)(!1), H = (0, r.useRef)(null), M = (0, r.useRef)(null), F = (0, r.useRef)(null), O = (0, r.useRef)(null), T = (0, r.useRef)(0), U = (0, r.useRef)(null), J = (0, r.useRef)(!1), q = (0, r.useRef)(!1), B = (0, r.useRef)(null), V = e => {
                    if (!e || !/<ul>/i.test(e) || !/Name:|Email:|LinkedIn:/i.test(e)) return [];
                    try {
                        let t = new DOMParser().parseFromString("<div>".concat(e, "</div>"), "text/html");
                        return Array.from(t.querySelectorAll("ul")).map(e => {
                            let t = Array.from(e.querySelectorAll("li")),
                                s = {},
                                a = t.find(e => /name:/i.test(e.textContent || ""));
                            a && (s.name = (a.textContent || "").replace(/\s*Name:\s*/i, "").trim());
                            let r = e.querySelector('a[href^="mailto:"]');
                            if (r) {
                                var n;
                                s.email = (null == (n = r.textContent) ? void 0 : n.trim()) || r.href.replace(/^mailto:/, "")
                            } else {
                                let e = t.find(e => /email:/i.test(e.textContent || ""));
                                e && (s.email = (e.textContent || "").replace(/\s*Email:\s*/i, "").trim())
                            }
                            let i = Array.from(e.querySelectorAll("a")).find(e => /linkedin\.com\//i.test(e.href));
                            if (i) s.linkedin = i.href;
                            else {
                                let e = t.find(e => /linkedin:/i.test(e.textContent || ""));
                                e && (s.linkedin = (e.textContent || "").replace(/\s*LinkedIn:\s*/i, "").trim())
                            }
                            return s
                        }).filter(e => e.name || e.email || e.linkedin)
                    } catch (e) {
                        return []
                    }
                }, $ = e => {
                    var t;
                    B.current || (B.current = "s_".concat(Date.now()));
                    let s = B.current,
                        a = ((null == (t = e.find(e => "user" === e.type)) ? void 0 : t.content) || "New chat").slice(0, 60),
                        r = Date.now(),
                        n = e.map(e => ({
                            role: "user" === e.type ? "user" : "assistant",
                            content: e.content,
                            timestamp: e.timestamp instanceof Date ? e.timestamp.toISOString() : new Date().toISOString()
                        }));
                    try {
                        localStorage.setItem("hesper_chat_session_".concat(s), JSON.stringify({
                            id: s,
                            title: a,
                            lastUpdated: r,
                            messages: n
                        }));
                        let e = localStorage.getItem("hesper_chat_sessions"),
                            t = [];
                        if (e) try {
                            t = JSON.parse(e) || []
                        } catch (e) {
                            t = []
                        }
                        let i = t.findIndex(e => e.id === s);
                        i >= 0 ? t[i] = {
                            id: s,
                            title: a,
                            lastUpdated: r
                        } : t.unshift({
                            id: s,
                            title: a,
                            lastUpdated: r
                        }), t = t.sort((e, t) => t.lastUpdated - e.lastUpdated).slice(0, 50), localStorage.setItem("hesper_chat_sessions", JSON.stringify(t)), window.dispatchEvent(new CustomEvent("hesper:chat-sessions-updated"))
                    } catch (e) {}
                }, G = e => e.filter(e => !e.isTyping && e.content).map(e => ({
                    role: "user" === e.type ? "user" : "assistant",
                    content: e.content
                })).slice(-6);
                (0, r.useEffect)(() => {
                    if (!("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) return;
                    let e = new(window.SpeechRecognition || window.webkitSpeechRecognition);
                    e.continuous = !1, e.interimResults = !1, e.lang = "en-US", e.onstart = () => {
                        P(!0)
                    }, e.onresult = e => {
                        var t;
                        h(e.results[0][0].transcript), null == (t = M.current) || t.focus()
                    }, e.onerror = e => {
                        u.oR.error("Microphone error: ".concat(e.error)), P(!1)
                    }, e.onend = () => {
                        P(!1)
                    }, U.current = e
                }, []);
                let Z = () => {
                    var e;
                    null == (e = H.current) || e.scrollIntoView({
                        behavior: "smooth"
                    }), C(!1), _(!1)
                };
                (0, r.useEffect)(() => {
                    let e = O.current;
                    if (!e) return;
                    let t = e.scrollHeight - e.scrollTop - e.clientHeight < 120,
                        s = m.length > T.current;
                    t ? Z() : (C(!0), s && _(!0)), T.current = m.length
                }, [m]), (0, r.useEffect)(() => {
                    var e;
                    null == (e = M.current) || e.focus(), o && 0 === m.length && !E && (z(!0), Y(o))
                }, [o]), (0, r.useEffect)(() => {
                    let e = O.current;
                    if (!e) return;
                    let t = () => {
                        let t = e.scrollHeight - e.scrollTop - e.clientHeight < 60;
                        C(!t), t && _(!1)
                    };
                    return e.addEventListener("scroll", t, {
                        passive: !0
                    }), () => e.removeEventListener("scroll", t)
                }, []), (0, r.useEffect)(() => {
                    c && c !== B.current && !I && W(c)
                }, [c]);
                let W = async e => {
                        try {
                            let s = localStorage.getItem("hesper_chat_session_".concat(e));
                            if (s) {
                                let a = JSON.parse(s).messages.map(e => ({
                                    id: "loaded-".concat(e.role, "-").concat(Date.now() + Math.random()),
                                    type: e.role,
                                    content: e.content,
                                    timestamp: new Date(e.timestamp),
                                    modelName: "hesper-pro" === t ? "Hesper Pro" : "Hesper"
                                })).filter(e => e.content);
                                p(a), B.current = e, null == d || d(e), L(!0), window.dispatchEvent(new CustomEvent("hesper:load-session", {
                                    detail: {
                                        id: e
                                    }
                                }))
                            }
                        } catch (e) {
                            console.error("Failed to load session:", e)
                        }
                    },
                    K = () => {
                        p([]), h(""), B.current = null, L(!1), window.dispatchEvent(new CustomEvent("hesper:new-chat"))
                    };
                (0, r.useEffect)(() => {
                    null === c && K()
                }, [c]);
                let Y = async e => {
                        if (J.current) return;
                        J.current = !0;
                        let s = "hesper-pro" === t ? "Hesper Pro" : "Hesper",
                            a = {
                                id: "user-".concat(Date.now()),
                                type: "user",
                                content: e,
                                timestamp: new Date
                            };
                        p([a]), g(!0), S(!0);
                        let r = {
                            id: "typing-".concat(Date.now()),
                            type: "assistant",
                            content: "",
                            timestamp: new Date,
                            isTyping: !0,
                            modelName: s
                        };
                        p(e => [...e, r]);
                        try {
                            let r = G([a]),
                                n = await ec(e, t, r),
                                i = {
                                    id: "assistant-".concat(Date.now()),
                                    type: "assistant",
                                    content: n || "",
                                    timestamp: new Date,
                                    modelName: s
                                };
                            p(e => {
                                let t = e.filter(e => !e.isTyping),
                                    s = [...t].reverse().find(e => "assistant" === e.type),
                                    a = s && s.content.trim() === (n || "").trim() ? t : [...t, i];
                                return $(a), a
                            })
                        } catch (e) {
                            p([a]), u.oR.error("Failed to get response. Please try again."), $([a])
                        } finally {
                            g(!1), S(!1), J.current = !1
                        }
                    },
                    ed = async e => {
                        if (!e.trim() || f || q.current || J.current) return;
                        q.current = !0, J.current = !0;
                        let s = "hesper-pro" === t ? "Hesper Pro" : "Hesper",
                            a = {
                                id: "user-".concat(Date.now()),
                                type: "user",
                                content: e.trim(),
                                timestamp: new Date
                            };
                        p(e => {
                            let t = [...e, a];
                            return $(t), t
                        }), h(""), g(!0), S(!0);
                        let r = {
                            id: "typing-".concat(Date.now()),
                            type: "assistant",
                            content: "",
                            timestamp: new Date,
                            isTyping: !0,
                            modelName: s
                        };
                        p(e => [...e, r]);
                        try {
                            let e = G([...m, a]),
                                r = await ec(a.content, t, e),
                                n = {
                                    id: "assistant-".concat(Date.now()),
                                    type: "assistant",
                                    content: r || "",
                                    timestamp: new Date,
                                    modelName: s
                                };
                            p(e => {
                                let t = e.filter(e => !e.isTyping),
                                    s = [...t].reverse().find(e => "assistant" === e.type),
                                    a = s && s.content.trim() === (r || "").trim() ? t : [...t, n];
                                return $(a), a
                            })
                        } catch (e) {
                            p(e => {
                                let t = e.filter(e => !e.isTyping);
                                return $(t), t
                            }), u.oR.error("Failed to get response. Please try again.")
                        } finally {
                            g(!1), S(!1), q.current = !1, J.current = !1
                        }
                    },
                    em = async e => {
                        e.preventDefault(), ed(x)
                    },
                    eu = async e => {
                        try {
                            await navigator.clipboard.writeText(e), u.oR.success("Copied to clipboard")
                        } catch (e) {
                            u.oR.error("Failed to copy")
                        }
                    },
                    ep = () => {
                        if (m.length < 2) return;
                        let e = [...m].reverse().find(e => "user" === e.type);
                        e && (p(e => e.filter(e => e.id !== m[m.length - 1].id)), h(e.content), em(new Event("submit")))
                    },
                    ex = "hesper-pro" === t ? {
                        icon: (0, a.jsx)(i.A, {
                            className: "h-4 w-4"
                        }),
                        name: "Hesper Pro",
                        description: "Advanced reasoning model"
                    } : {
                        icon: (0, a.jsx)(n.A, {
                            className: "h-4 w-4"
                        }),
                        name: "Hesper",
                        description: "Fast general AI model"
                    },
                    eh = () => {
                        let [e, t] = (0, r.useState)(0);
                        return (0, r.useEffect)(() => {
                            let e = 0,
                                s = performance.now(),
                                a = () => {
                                    t(performance.now() - s), e = requestAnimationFrame(a)
                                };
                            return e = requestAnimationFrame(a), () => cancelAnimationFrame(e)
                        }, []), (0, a.jsxs)("div", {
                            className: "inline-flex items-center gap-2 text-xs text-muted-foreground",
                            role: "status",
                            "aria-live": "polite",
                            children: [(0, a.jsx)("span", {
                                className: "relative inline-flex items-center justify-center",
                                children: (0, a.jsx)("span", {
                                    className: "w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[linear-gradient(135deg,var(--color-primary),var(--color-chart-5))] shadow-[0_0_8px_rgba(26,115,232,0.35)] [animation:var(--animate-shape-morph)]",
                                    "aria-hidden": !0
                                })
                            }), (0, a.jsxs)("span", {
                                className: "inline-flex items-center gap-1",
                                children: [(0, a.jsx)("span", {
                                    className: "sr-only",
                                    children: "Assistant is typing"
                                }), (0, a.jsx)("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-muted-foreground/70 animate-bounce"
                                }), (0, a.jsx)("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-muted-foreground/70 animate-bounce",
                                    style: {
                                        animationDelay: "0.15s"
                                    }
                                }), (0, a.jsx)("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-muted-foreground/70 animate-bounce",
                                    style: {
                                        animationDelay: "0.3s"
                                    }
                                })]
                            })]
                        })
                    };
                return (0, a.jsxs)("div", {
                    className: "relative flex flex-col min-h-[100dvh] w-full max-w-4xl mx-auto px-0 sm:px-4",
                    children: [(0, a.jsxs)("div", {
                        className: "flex items-center justify-between p-2 border-b border-border bg-card",
                        children: [(0, a.jsxs)("button", {
                            onClick: s,
                            className: "text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 min-h-[36px]",
                            children: [(0, a.jsx)(X.A, {
                                className: "h-4 w-4"
                            }), "Back to homepage"]
                        }), (0, a.jsxs)("div", {
                            className: "flex items-center gap-1 sm:gap-2 text-xs sm:text-sm hidden sm:flex",
                            children: [ex.icon, (0, a.jsx)("span", {
                                className: "font-medium truncate",
                                children: ex.name
                            }), (0, a.jsx)("span", {
                                className: "text-muted-foreground",
                                children: "•"
                            }), (0, a.jsx)("span", {
                                className: "text-muted-foreground truncate",
                                children: ex.description
                            })]
                        })]
                    }), (0, a.jsx)("div", {
                        className: "px-3 py-2 text-[11px] sm:text-xs bg-[#FFF3CD] text-[#8A6D3B] border-b border-border",
                        children: "⚠️ Please setup your SMTP in Settings so the AI Agent can send emails."
                    }), (0, a.jsxs)("div", {
                        ref: O,
                        className: "flex-1 overflow-y-auto p-2 pb-1 scroll-smooth scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent",
                        role: "log",
                        "aria-live": "polite",
                        children: [0 === m.length && (0, a.jsxs)("div", {
                            className: "text-center py-12",
                            children: [(0, a.jsx)("div", {
                                className: "mb-4 mx-auto w-8",
                                children: ex.icon
                            }), (0, a.jsx)("h3", {
                                className: "text-lg font-medium mb-2",
                                children: "Start a conversation"
                            }), (0, a.jsx)("p", {
                                className: "text-muted-foreground text-sm max-w-md mx-auto",
                                children: "Ask me anything! I'm here to help with questions, tasks, and creative projects."
                            })]
                        }), m.map((e, t) => {
                            var s;
                            return (0, a.jsxs)("div", {
                                className: "w-full",
                                children: [t > 0 && (0, a.jsx)("div", {
                                    className: "h-px bg-border my-3 sm:my-4"
                                }), "assistant" === e.type && (0, a.jsxs)("div", {
                                    className: "flex items-center gap-1 sm:gap-2 mb-2",
                                    children: [ex.icon, (0, a.jsx)("span", {
                                        className: "text-xs sm:text-sm font-medium text-muted-foreground !w-20 !h-full !whitespace-pre-line",
                                        children: null != (s = e.modelName) ? s : ex.name
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "pb-1 sm:pb-0",
                                    children: e.isTyping ? (0, a.jsx)("div", {
                                        className: "flex items-center gap-2",
                                        role: "status",
                                        "aria-live": "polite",
                                        children: (0, a.jsx)(eh, {})
                                    }) : (() => {
                                        let t = "assistant" === e.type ? V(e.content) : [];
                                        return t.length > 0 ? (0, a.jsxs)("div", {
                                            className: "space-y-3",
                                            children: [(0, a.jsxs)("div", {
                                                className: "flex items-center justify-between",
                                                children: [(0, a.jsxs)("div", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: ["Leads found: ", t.length]
                                                }), (0, a.jsxs)(b, {
                                                    children: [(0, a.jsx)(v, {
                                                        asChild: !0,
                                                        children: (0, a.jsx)("button", {
                                                            type: "button",
                                                            className: "p-1.5 rounded-lg hover:bg-muted transition-colors min-h-[32px] min-w-[32px] inline-flex items-center justify-center",
                                                            "aria-label": "Leads actions",
                                                            children: (0, a.jsx)(ee.A, {
                                                                className: "h-4 w-4 text-muted-foreground"
                                                            })
                                                        })
                                                    }), (0, a.jsxs)(j, {
                                                        align: "end",
                                                        className: "w-44",
                                                        children: [(0, a.jsx)(y, {
                                                            children: "Leads actions"
                                                        }), (0, a.jsx)(N, {}), (0, a.jsxs)(w, {
                                                            onClick: () => {
                                                                let e = ["name", "email", "linkedin"],
                                                                    s = e => {
                                                                        let t = (null != e ? e : "").replace(/"/g, '""');
                                                                        return /[",\n]/.test(t) ? '"'.concat(t, '"') : t
                                                                    },
                                                                    a = t.map(t => e.map(e => s(t[e]))),
                                                                    r = new Blob([
                                                                        [e.join(","), ...a.map(e => e.join(","))].join("\n")
                                                                    ], {
                                                                        type: "text/csv;charset=utf-8;"
                                                                    }),
                                                                    n = URL.createObjectURL(r),
                                                                    i = document.createElement("a");
                                                                i.href = n, i.download = "leads-".concat(new Date().toISOString().slice(0, 10), ".csv"), document.body.appendChild(i), i.click(), document.body.removeChild(i), URL.revokeObjectURL(n), u.oR.success("CSV exported")
                                                            },
                                                            className: "cursor-pointer",
                                                            children: [(0, a.jsx)(et.A, {
                                                                className: "mr-2 h-4 w-4"
                                                            }), " Export CSV"]
                                                        }), (0, a.jsxs)(w, {
                                                            onClick: () => {
                                                                let e = t.filter(e => !!e.email).length;
                                                                u.oR.info("".concat(e, " email").concat(1 === e ? "" : "s", " queued for verification"))
                                                            },
                                                            className: "cursor-pointer",
                                                            children: [(0, a.jsx)(es.A, {
                                                                className: "mr-2 h-4 w-4"
                                                            }), " Verify emails"]
                                                        })]
                                                    })]
                                                })]
                                            }), (0, a.jsx)("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3",
                                                children: t.map((e, t) => (0, a.jsxs)("div", {
                                                    className: "rounded-lg border border-border bg-card p-3",
                                                    children: [e.name && (0, a.jsx)("div", {
                                                        className: "font-medium text-sm mb-1",
                                                        children: e.name
                                                    }), (0, a.jsxs)("div", {
                                                        className: "space-y-1 text-sm",
                                                        children: [e.email && (0, a.jsxs)("div", {
                                                            className: "truncate",
                                                            children: [(0, a.jsx)("span", {
                                                                className: "text-muted-foreground mr-1",
                                                                children: "Email:"
                                                            }), (0, a.jsx)("a", {
                                                                className: "underline",
                                                                href: "mailto:".concat(e.email),
                                                                children: e.email
                                                            })]
                                                        }), e.linkedin && (0, a.jsxs)("div", {
                                                            className: "truncate",
                                                            children: [(0, a.jsx)("span", {
                                                                className: "text-muted-foreground mr-1",
                                                                children: "LinkedIn:"
                                                            }), (0, a.jsx)("a", {
                                                                className: "underline",
                                                                href: e.linkedin,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                children: e.linkedin.replace(/^https?:\/\//, "")
                                                            })]
                                                        })]
                                                    })]
                                                }, t))
                                            })]
                                        }) : (0, a.jsx)("div", {
                                            className: "whitespace-pre-wrap text-sm leading-relaxed !text-black !bg-white !shadow-none !border-double break-words",
                                            children: e.content
                                        })
                                    })()
                                }), "assistant" === e.type && !e.isTyping && (0, a.jsxs)("div", {
                                    className: "flex items-center gap-1 sm:gap-2 mt-2 flex-wrap",
                                    children: [(0, a.jsx)("button", {
                                        onClick: () => eu(e.content),
                                        className: "p-1.5 rounded-lg hover:bg-muted transition-colors min-h-[36px] min-w-[36px]",
                                        title: "Copy",
                                        children: (0, a.jsx)(ea.A, {
                                            className: "h-4 w-4 text-muted-foreground"
                                        })
                                    }), (0, a.jsx)("button", {
                                        onClick: ep,
                                        className: "p-1.5 rounded-lg hover:bg-muted transition-colors",
                                        title: "Regenerate",
                                        children: (0, a.jsx)(er.A, {
                                            className: "h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground"
                                        })
                                    }), (0, a.jsx)("button", {
                                        className: "p-1.5 rounded-lg hover:bg-muted transition-colors",
                                        title: "Good response",
                                        children: (0, a.jsx)(en.A, {
                                            className: "h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground"
                                        })
                                    }), (0, a.jsx)("button", {
                                        className: "p-1.5 rounded-lg hover:bg-muted transition-colors",
                                        title: "Bad response",
                                        children: (0, a.jsx)(ei.A, {
                                            className: "h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground"
                                        })
                                    })]
                                })]
                            }, e.id)
                        }), (0, a.jsx)("div", {
                            ref: H
                        })]
                    }), A && (0, a.jsx)("button", {
                        onClick: Z,
                        className: "absolute bottom-20 sm:bottom-24 sm:bottom-28 right-2 sm:right-3 sm:right-4 z-10 inline-flex items-center gap-1 sm:gap-2 rounded-full bg-card border border-border px-2 sm:px-3 py-2 shadow hover:bg-secondary transition-colors min-h-[40px]",
                        children: R ? (0, a.jsx)("span", {
                            className: "text-xs text-muted-foreground",
                            children: "New messages"
                        }) : (0, a.jsx)(l.A, {
                            className: "h-4 w-4 text-muted-foreground"
                        })
                    }), (0, a.jsxs)("div", {
                        className: "p-2 border-t border-border bg-card pb-[env(safe-area-inset-bottom)]",
                        children: [(0, a.jsxs)("form", {
                            onSubmit: em,
                            className: "relative",
                            children: [(0, a.jsxs)("div", {
                                className: "flex items-center gap-1 sm:gap-2 sm:gap-3 bg-secondary rounded-full py-1 pl-3 sm:pl-4 sm:pl-6 pr-1 sm:pr-2 shadow-sm focus-within:ring-2 focus-within:ring-primary/20 min-h-[44px]",
                                children: [(0, a.jsx)("input", {
                                    ref: M,
                                    type: "text",
                                    value: x,
                                    onChange: e => h(e.target.value),
                                    placeholder: "Ask ".concat(ex.name, "..."),
                                    disabled: f,
                                    className: "flex-grow bg-transparent text-base text-foreground placeholder-muted-foreground outline-none border-none py-2 sm:py-3 px-2 sm:px-4 disabled:opacity-50 min-w-0",
                                    style: {
                                        WebkitAppearance: "none"
                                    }
                                }), (0, a.jsxs)("div", {
                                    className: "flex items-center gap-0.5 sm:gap-1 sm:gap-2",
                                    children: [(0, a.jsx)("button", {
                                        type: "button",
                                        disabled: f,
                                        onClick: () => {
                                            var e;
                                            return null == (e = F.current) ? void 0 : e.click()
                                        },
                                        className: "p-1.5 sm:p-2 sm:p-2.5 rounded-full hover:bg-muted/80 transition-colors min-h-[36px] min-w-[36px] disabled:opacity-50",
                                        "aria-label": "Attach file",
                                        children: (0, a.jsx)(eo.A, {
                                            className: "h-4 sm:h-5 w-4 sm:w-5 text-muted-foreground"
                                        })
                                    }), (0, a.jsx)("button", {
                                        type: "button",
                                        onClick: () => {
                                            U.current && !f && (D ? U.current.stop() : U.current.start())
                                        },
                                        disabled: f,
                                        className: "p-1.5 sm:p-2 sm:p-2.5 rounded-full transition-colors min-h-[36px] min-w-[36px] ".concat(D ? "bg-destructive/10 text-destructive" : "hover:bg-muted/80 text-muted-foreground"),
                                        "aria-label": D ? "Stop microphone" : "Use microphone",
                                        children: (0, a.jsx)(Q.A, {
                                            className: "h-4 sm:h-5 w-4 sm:w-5 ".concat(D ? "animate-pulse" : "")
                                        })
                                    }), (0, a.jsx)("button", {
                                        type: "button",
                                        onClick: () => ed(x),
                                        disabled: !x.trim() || f,
                                        className: "p-1.5 sm:p-2 sm:p-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-h-[36px] min-w-[36px]",
                                        "aria-label": "Send message",
                                        children: (0, a.jsx)(el.A, {
                                            className: "h-4 sm:h-5 w-4 sm:w-5"
                                        })
                                    })]
                                })]
                            }), (0, a.jsx)("input", {
                                ref: F,
                                type: "file",
                                className: "hidden",
                                onChange: e => {
                                    var t, s;
                                    let a = null == (t = e.target.files) ? void 0 : t[0];
                                    a && (h(e => "".concat(e, " [attached: ").concat(a.name, "]").trim()), null == (s = M.current) || s.focus(), e.target.value = "")
                                }
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "text-center mt-2 sm:mt-3 hidden sm:block",
                            children: [(0, a.jsx)("p", {
                                className: "text-xs text-muted-foreground",
                                children: "hesper-pro" === t ? "Pro model provides deeper analysis and research-backed responses" : "Fast responses for everyday questions and tasks"
                            }), (0, a.jsxs)("p", {
                                className: "text-[11px] text-muted-foreground mt-1",
                                children: ["⚠️ Please setup your SMTP in Settings so the AI Agent can send emails. ", (0, a.jsx)("a", {
                                    href: "/settings",
                                    className: "underline underline-offset-2",
                                    children: "Open Settings"
                                })]
                            })]
                        })]
                    })]
                })
            }

            function em(e) {
                let {
                    selectedModel: t = "hesper-1.0v",
                    chatMode: s,
                    onChatModeChange: n,
                    chatKey: i,
                    currentSessionId: o,
                    onLoadSession: l
                } = e, [c, d] = (0, r.useState)(s || !1), [m, p] = (0, r.useState)(""), [x, h] = (0, r.useState)(0), [f, g] = (0, r.useState)(!1), b = (0, r.useRef)(null);
                (0, r.useEffect)(() => {
                    void 0 !== s && d(s)
                }, [s]);
                let v = e => {
                    d(e), null == n || n(e)
                };
                (0, r.useEffect)(() => {
                    j()
                }, []);
                let j = async () => {
                        let e = localStorage.getItem("bearer_token");
                        if (!e) return void u.oR.error("Please log in to view credits");
                        try {
                            let t = await fetch("/api/user/credits", {
                                headers: {
                                    Authorization: "Bearer ".concat(e),
                                    "Content-Type": "application/json"
                                }
                            });
                            if (t.ok) {
                                let e = await t.json();
                                h(e.credits)
                            } else {
                                let e = await t.json();
                                u.oR.error(e.error || "Failed to fetch credits")
                            }
                        } catch (e) {
                            u.oR.error("Failed to fetch credits")
                        }
                    },
                    w = () => {
                        if (!("webkitSpeechRecognition" in window)) return void u.oR.error("Speech recognition not supported in this browser");
                        let e = new(window.SpeechRecognition || window.webkitSpeechRecognition);
                        e.lang = "en-US", e.interimResults = !1, e.maxAlternatives = 1, e.onstart = () => {
                            g(!0), u.oR.success("Listening... Speak now!")
                        }, e.onresult = e => {
                            p(e.results[0][0].transcript)
                        }, e.onend = () => {
                            g(!1)
                        }, e.onerror = e => {
                            g(!1), "not-allowed" === e.error ? u.oR.error("Microphone access denied. Please allow access and try again.") : u.oR.error("Voice input failed. Please try again.")
                        }, e.start(), b.current = e
                    },
                    y = () => {
                        b.current && b.current.stop(), g(!1)
                    };
                return c ? (0, a.jsx)("div", {
                    className: "w-full h-full flex flex-col",
                    children: (0, a.jsx)(ed, {
                        selectedModel: t,
                        onBack: () => v(!1),
                        initialMessage: m,
                        currentSessionId: o,
                        onLoadSession: l
                    })
                }) : (0, a.jsxs)("div", {
                    className: "h-full flex flex-col justify-between px-4",
                    children: [(0, a.jsx)("div", {
                        className: "flex-1 flex items-center justify-center",
                        children: (0, a.jsxs)("div", {
                            className: "w-full max-w-[900px] flex flex-col items-center justify-center",
                            children: [(0, a.jsxs)("div", {
                                className: "text-center mb-6 sm:mb-10 w-full",
                                children: [(0, a.jsxs)("h1", {
                                    className: "font-['Google_Sans'] font-normal text-4xl sm:text-5xl md:text-[56px] leading-[1.15] text-foreground/80",
                                    children: ["Meet ", (0, a.jsx)("span", {
                                        className: "bg-gradient-to-r from-[#5f3dc4] via-[#ff6b6b] to-[#4ecdc4] bg-clip-text text-transparent",
                                        children: "Hesper,"
                                    })]
                                }), (0, a.jsxs)("h2", {
                                    className: "font-['Google_Sans'] font-normal text-4xl sm:text-5xl md:text-[56px] leading-[1.15] text-foreground/80 mt-1",
                                    children: ["your ", (0, a.jsx)("span", {
                                        className: "bg-gradient-to-r from-[#5f3dc4] via-[#ff6b6b] to-[#4ecdc4] bg-clip-text text-transparent",
                                        children: "personal AI assistant"
                                    })]
                                })]
                            }), (0, a.jsx)("div", {
                                className: "w-full max-w-[768px] mb-4",
                                children: (0, a.jsx)("form", {
                                    onSubmit: e => {
                                        e.preventDefault(), m.trim() && v(!0)
                                    },
                                    children: (0, a.jsxs)("div", {
                                        className: "relative flex items-center w-full bg-secondary rounded-full py-1 pl-4 sm:pl-6 pr-2 shadow-sm focus-within:ring-1 focus-within:ring-blue-300",
                                        children: [(0, a.jsx)("input", {
                                            type: "text",
                                            value: m,
                                            onChange: e => p(e.target.value),
                                            placeholder: "Ask Hesper",
                                            className: "flex-grow bg-transparent text-base md:text-lg text-foreground placeholder-muted-foreground outline-none border-none py-3 px-2 sm:px-4"
                                        }), (0, a.jsx)("button", {
                                            type: "button",
                                            onClick: () => {
                                                f ? y() : w()
                                            },
                                            disabled: f,
                                            className: "p-2 rounded-full transition-colors ".concat(f ? "animate-pulse bg-primary/10 text-primary" : "hover:bg-muted/80"),
                                            "aria-label": f ? "Stop microphone" : "Use microphone",
                                            children: (0, a.jsx)(Q.A, {
                                                className: "h-6 w-6 ".concat(f ? "text-primary" : "text-foreground/80")
                                            })
                                        })]
                                    })
                                })
                            })]
                        })
                    }), (0, a.jsx)("footer", {
                        className: "w-full max-w-[768px] text-center pb-4 pt-2",
                        children: (0, a.jsxs)("p", {
                            className: "text-xs leading-relaxed text-muted-foreground mx-auto max-w-[500px]",
                            children: [(0, a.jsx)("a", {
                                href: "/terms",
                                className: "px-2 hover:underline text-primary",
                                children: "Terms and Conditions"
                            }), ",", (0, a.jsx)("a", {
                                href: "/privacy",
                                className: "px-2 hover:underline text-primary",
                                children: "Privacy Policy"
                            }), ", and", (0, a.jsx)("a", {
                                href: "/terms",
                                className: "px-2 hover:underline text-primary",
                                children: "Disclaimer"
                            }), " apply. Hesper can make mistakes, so double-check it."]
                        })
                    })]
                })
            }
            let eu = () => {
                let [e, t] = (0, r.useState)(!1), [s, n] = (0, r.useState)(!1), [i, o] = (0, r.useState)("hesper-1.0v"), [l, c] = (0, r.useState)(!1), [d, m] = (0, r.useState)(0), [u, p] = (0, r.useState)(null);
                (0, r.useEffect)(() => {
                    let e = () => t(window.innerWidth < 768);
                    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                }, []);
                let x = e => {
                    p(e), c(!0)
                };
                return (0, a.jsxs)("div", {
                    className: "flex h-screen flex-col bg-background overflow-hidden",
                    children: [(0, a.jsx)(A, {
                        onMenuClick: () => n(!s),
                        selectedModel: i,
                        onModelChange: o
                    }), (0, a.jsxs)("div", {
                        className: "flex flex-1 overflow-hidden relative",
                        children: [(0, a.jsx)(Y, {
                            sidebarOpen: s,
                            setSidebarOpen: n,
                            isMobile: e,
                            onNewChat: () => {
                                c(!0), m(e => e + 1), p(null), n(!1)
                            },
                            onSelectSession: x
                        }), e && s && (0, a.jsx)("div", {
                            className: "fixed inset-0 bg-black/50 z-40",
                            onClick: () => n(!1)
                        }), (0, a.jsx)("div", {
                            className: "flex-1 overflow-auto ".concat(e ? "w-full" : ""),
                            children: (0, a.jsx)(em, {
                                selectedModel: i,
                                chatMode: l,
                                onChatModeChange: c,
                                chatKey: d,
                                currentSessionId: u,
                                onLoadSession: x
                            })
                        })]
                    })]
                })
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [4277, 3753, 6874, 4982, 7148, 3465, 8441, 1684, 7358], () => t(1618)), _N_E = e.O()
    }
]);