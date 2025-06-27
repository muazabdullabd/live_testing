(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[725], {
    8519: function(e, t, l) {
        Promise.resolve().then(l.bind(l, 658))
    },
    658: function(e, t, l) {
        "use strict";
        l.r(t),
        l.d(t, {
            default: function() {
                return f
            }
        });
        var s = l(7437)
          , a = l(6854)
          , r = l(9531)
          , o = l(4446)
          , c = l(4635)
          , n = l(4008)
          , i = l(6356)
          , d = l(5789)
          , u = l(4182)
          , m = l(3580)
          , x = l(2265)
          , h = l(6463)
          , b = e => {
            let {modalIsOpen: t, setModalIsOpen: l, resultData: a} = e
              , [r,b] = (0,
            x.useState)("")
              , g = (0,
            h.useRouter)();
            (0,
            x.useEffect)( () => {
                b("".concat(window.origin, "/group-results?").concat("" !== a.from && "" !== a.to ? "from=".concat(a.from, "&to=").concat(a.to, "&").concat("" !== a.custom ? "custom=".concat(a.custom, "&") : "") : "", "semester=").concat(a.semester, "&regulation=").concat(a.regulation, "&exam=").concat(a.exam))
            }
            , []);
            let p = e => e < 10 ? "0".concat(e) : e.toString()
              , [f,j,v] = (0,
            u.ry)({
                onSuccess: e => {
                    let t = document.createElement("a");
                    t.download = "".concat("" !== a.from && "" !== a.to ? "".concat(a.from, "-").concat(a.to, "_") : "").concat("" !== a.custom ? "".concat(a.custom, "_") : "").concat(a.regulation, "_").concat(a.exam, "_BTEBResultHub.jpeg"),
                    t.href = e,
                    t.click()
                }
            });
            return (0,
            s.jsx)(o.M, {
                children: t && (0,
                s.jsx)(c.E.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: () => l(!1),
                    className: "bg-slate-900/20 backdrop-blur p-4 fixed inset-0 z-50 grid place-items-center cursor-pointer popup-viewer",
                    children: (0,
                    s.jsx)(c.E.div, {
                        initial: {
                            scale: 0,
                            rotate: "12.5deg"
                        },
                        animate: {
                            scale: 1,
                            rotate: "0deg"
                        },
                        exit: {
                            scale: 0,
                            rotate: "0deg"
                        },
                        onClick: e => e.stopPropagation(),
                        className: "w-full max-w-xl overflow-hidden",
                        ref: v,
                        children: (0,
                        s.jsxs)("div", {
                            className: "bg-white dark:bg-slate-900 w-full relative rounded-lg border-2 border-gray-700 cursor-default max-h-[90vh] scrollbar-thin",
                            children: [(0,
                            s.jsxs)("div", {
                                className: "absolute flex justify-between w-full",
                                children: [(0,
                                s.jsxs)("div", {
                                    className: "dropdown",
                                    children: [(0,
                                    s.jsx)("div", {
                                        tabIndex: 0,
                                        role: "button",
                                        className: "text-xl p-2 bg-gray-200 dark:bg-gray-700 rounded-tl",
                                        children: (0,
                                        s.jsx)(n.ZES, {})
                                    }), (0,
                                    s.jsxs)("ul", {
                                        tabIndex: 0,
                                        className: "dropdown-content z-[1] menu p-2 shadow-xl bg-white dark:bg-slate-800 rounded-box w-max",
                                        children: [(0,
                                        s.jsx)("li", {
                                            children: (0,
                                            s.jsx)(d.CopyToClipboard, {
                                                text: r,
                                                onCopy: () => {
                                                    m.Am.success("URL Copied!")
                                                }
                                                ,
                                                children: (0,
                                                s.jsx)("button", {
                                                    children: "Copy"
                                                })
                                            })
                                        }), (0,
                                        s.jsx)("li", {
                                            children: (0,
                                            s.jsx)("button", {
                                                onClick: e => {
                                                    e.target.closest(".dropdown-content").style.visibility = "hidden",
                                                    j(),
                                                    setTimeout( () => {
                                                        e.target.closest(".dropdown-content").style.visibility = "visible"
                                                    }
                                                    , 100)
                                                }
                                                ,
                                                children: "ScreenShot"
                                            })
                                        })]
                                    })]
                                }), (0,
                                s.jsx)("button", {
                                    className: "text-xl p-2 bg-gray-200 dark:bg-gray-700 rounded-tr",
                                    onClick: () => l(!1),
                                    children: (0,
                                    s.jsx)(i.lTq, {})
                                })]
                            }), (0,
                            s.jsxs)("div", {
                                className: "py-5 px-6",
                                children: [(0,
                                s.jsxs)("header", {
                                    className: "text-center dark:text-white",
                                    children: [(0,
                                    s.jsx)("h2", {
                                        className: "text-2xl font-lato font-bold",
                                        children: a.exam.split("-").map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(" ")
                                    }), (0,
                                    s.jsxs)("p", {
                                        className: "text-sm",
                                        children: [["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"][a.semester - 1], " Semester -", " ", a.regulation, " Regulation"]
                                    }), (0,
                                    s.jsx)("p", {
                                        className: "max-w-[480px] overflow-x-auto whitespace-nowrap my-2 mx-auto sm:scrollbar-thin sm:scrollbar-track-rounded-full sm:scrollbar-thumb-rounded-full sm:scrollbar-thumb-gray-500 sm:scrollbar-track-gray-200",
                                        children: (0,
                                        s.jsx)("span", {
                                            children: "" === a.custom ? "".concat(a.from, " - ").concat(a.to) : "" === a.from && "" === a.to ? "".concat(a.custom.replaceAll(",", ", ")) : "".concat(a.from, " - ").concat(a.to, ", ").concat(a.custom.replaceAll(",", ", "))
                                        })
                                    })]
                                }), (0,
                                s.jsx)("div", {
                                    className: "divider"
                                }), (0,
                                s.jsx)("div", {
                                    className: "space-y-5",
                                    children: (0,
                                    s.jsx)("div", {
                                        className: "relative overflow-x-auto shadow-md sm:rounded-t-lg max-h-[65vh] overflow-y-auto sm:scrollbar-thin sm:scrollbar-track-rounded-full sm:scrollbar-thumb-rounded-full sm:scrollbar-thumb-gray-500 dark:sm:scrollbar-thumb-gray-800 sm:scrollbar-track-gray-200 dark:sm:scrollbar-track-gray-500",
                                        children: (0,
                                        s.jsxs)("table", {
                                            className: "w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400 text-center",
                                            children: [(0,
                                            s.jsx)("thead", {
                                                className: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",
                                                children: (0,
                                                s.jsxs)("tr", {
                                                    children: [(0,
                                                    s.jsx)("th", {
                                                        scope: "col",
                                                        className: "px-6 py-3",
                                                        children: "SL No"
                                                    }), (0,
                                                    s.jsx)("th", {
                                                        scope: "col",
                                                        className: "px-6 py-3",
                                                        children: "Roll"
                                                    }), (0,
                                                    s.jsx)("th", {
                                                        scope: "col",
                                                        className: "px-6 py-3",
                                                        children: "Result"
                                                    })]
                                                })
                                            }), (0,
                                            s.jsx)("tbody", {
                                                children: a.resultData.map( (e, t) => (0,
                                                s.jsxs)("tr", {
                                                    className: "odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 cursor-pointer group",
                                                    onClick: () => g.push("/results?roll=".concat(e.roll, "&exam=").concat(a.exam, "&regulation=").concat(a.regulation)),
                                                    children: [(0,
                                                    s.jsx)("td", {
                                                        className: "px-6 py-4",
                                                        children: p(t + 1)
                                                    }), (0,
                                                    s.jsx)("th", {
                                                        scope: "row",
                                                        className: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white group-hover:underline underline-offset-4",
                                                        children: e.roll
                                                    }), "object" == typeof e.result ? (0,
                                                    s.jsxs)("td", {
                                                        className: "px-6 py-4 font-medium text-red-600 whitespace-nowrap text-wrap group-hover:underline underline-offset-4",
                                                        children: [e.result.length, " Referred(s)"]
                                                    }) : (0,
                                                    s.jsx)("td", {
                                                        className: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white group-hover:underline underline-offset-4",
                                                        children: e.result
                                                    })]
                                                }, e.roll))
                                            })]
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                })
            })
        }
        ;
        l(5614);
        var g = l(3497)
          , p = l(7666)
          , f = () => {
            var e, t, l;
            let {selectionsData: o} = (0,
            x.useContext)(p.Z)
              , [c,n] = (0,
            x.useState)([{
                value: "diploma-in-engineering",
                label: "Diploma in Engineering"
            }, {
                value: "diploma-in-textile",
                label: "Diploma in Textile"
            }])
              , [i,d] = (0,
            x.useState)([{
                value: "2022",
                label: "2022"
            }, {
                value: "2016",
                label: "2016"
            }, {
                value: "2010",
                label: "2010"
            }])
              , [u,f] = (0,
            x.useState)(!1)
              , [j,v] = (0,
            x.useState)(!1)
              , [y,w] = (0,
            x.useState)({})
              , k = (0,
            x.useRef)()
              , N = (0,
            x.useRef)()
              , R = (0,
            x.useRef)()
              , _ = (0,
            x.useRef)()
              , S = (0,
            h.useSearchParams)()
              , C = S.get("from")
              , E = S.get("to")
              , D = S.get("custom")
              , G = null !== (e = S.get("exam")) && void 0 !== e ? e : "diploma-in-engineering"
              , P = null !== (t = S.get("regulation")) && void 0 !== t ? t : "2022"
              , B = null !== (l = S.get("semester")) && void 0 !== l ? l : "1";
            (0,
            x.useEffect)( () => {
                var e, t, l;
                if (!D && (!C || !E))
                    return;
                let s = k.current;
                D && (s.customRolls.value = D),
                C && (s.fromRoll.value = C,
                s.toRoll.value = E),
                N.current.setValue(null !== (e = c.find(e => e.value === G)) && void 0 !== e ? e : c[0]),
                _.current.setValue(null !== (t = T.find(e => e.value === B)) && void 0 !== t ? t : T[0]),
                R.current.setValue(null !== (l = i.find(e => e.value === P)) && void 0 !== l ? l : i[0])
            }
            , []),
            (0,
            x.useEffect)( () => {
                if (0 === o.length)
                    return;
                n(o.map(e => ({
                    value: e.exam,
                    label: e.exam.split("-").map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(" ")
                }))),
                d([...o[0].regulations.map(e => ({
                    value: e,
                    label: e
                }))]);
                let e = o[0].regulations.reduce( (e, t) => Number(t) > Number(e) ? t : e, o[0].regulations[0]);
                R.current.setValue({
                    label: e,
                    value: e
                })
            }
            , [o]);
            let T = [{
                value: "1",
                label: "1st Semester"
            }, {
                value: "2",
                label: "2nd Semester"
            }, {
                value: "3",
                label: "3rd Semester"
            }, {
                value: "4",
                label: "4th Semester"
            }, {
                value: "5",
                label: "5th Semester"
            }, {
                value: "6",
                label: "6th Semester"
            }, {
                value: "7",
                label: "7th Semester"
            }, {
                value: "8",
                label: "8th Semester"
            }]
              , A = async e => {
                let t;
                e.preventDefault();
                let l = e.target
                  , s = l.fromRoll.value
                  , a = l.toRoll.value
                  , r = l.customRolls.value
                  , o = l.exam.value
                  , c = l.regulation.value
                  , n = l.semester.value;
                if ("" === r && ("" === s || "" === a)) {
                    m.Am.error("Please Enter Roll First!");
                    return
                }
                if ("" === r && (6 !== s.length || 6 !== a.length)) {
                    m.Am.error("Roll must be 6 digits long");
                    return
                }
                f(!0);
                try {
                    t = await (0,
                    g.w)("/results/group", {
                        from: s,
                        to: a,
                        custom: r,
                        exam: o,
                        regulation: c,
                        semester: n
                    })
                } catch (e) {
                    m.Am.error("Some error occurred!"),
                    f(!1);
                    return
                }
                t.success ? (w(t),
                v(!0)) : m.Am.error(t.message),
                f(!1)
            }
            ;
            return (0,
            x.useEffect)( () => {
                j ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""
            }
            , [j]),
            (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)("title", {
                    children: "Group Results || BTEB Result Hub"
                }), (0,
                s.jsx)("meta", {
                    name: "description",
                    content: "Check group results for diploma courses under the Bangladesh Technical Education Board. Easily find and compare group performance."
                }), (0,
                s.jsx)("meta", {
                    name: "keywords",
                    content: "group results, BTEB, diploma results, group performance, Bangladesh Technical Education Board"
                }), (0,
                s.jsx)(b, {
                    modalIsOpen: j,
                    setModalIsOpen: v,
                    resultData: y,
                    copyUrl: "URL to Copy"
                }), (0,
                s.jsxs)("div", {
                    className: "py-10 px-5 sm:px-10",
                    children: [(0,
                    s.jsxs)("section", {
                        className: "flex gap-8 items-center justify-between flex-col-reverse lg:flex-row",
                        children: [(0,
                        s.jsx)("div", {
                            className: "w-full sm:max-w-lg lg:w-[42%]",
                            children: (0,
                            s.jsx)("img", {
                                src: a.Z.src,
                                alt: "Group Results",
                                className: "w-full"
                            })
                        }), (0,
                        s.jsxs)("div", {
                            className: "flex flex-col items-center justify-center gap-10",
                            children: [(0,
                            s.jsxs)("header", {
                                className: "dark:text-white text-center",
                                children: [(0,
                                s.jsx)("h3", {
                                    className: "text-3xl font-bold font-lato mb-1",
                                    children: "Group Results Check"
                                }), (0,
                                s.jsx)("p", {
                                    children: "Get Results of Group, Sorted by Grade!"
                                })]
                            }), (0,
                            s.jsxs)("form", {
                                className: "rounded-lg shadow-lg border md:mt-0 w-80 sm:w-[30rem] bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-700 p-5 space-y-4",
                                onSubmit: A,
                                ref: k,
                                children: [(0,
                                s.jsx)("div", {
                                    children: (0,
                                    s.jsxs)("label", {
                                        className: "block text-sm font-medium dark:text-black [&_.select\\_\\_control]:dark:bg-gray-700 [&_.select\\_\\_control]:border-gray-600 [&_.select\\_\\_control]:cursor-pointer [&_.select\\_\\_single-value]:dark:!text-white",
                                        children: [(0,
                                        s.jsxs)("p", {
                                            className: "mb-2 dark:text-white",
                                            children: ["Exam ", (0,
                                            s.jsx)("span", {
                                                className: "text-red-600",
                                                children: "*"
                                            })]
                                        }), (0,
                                        s.jsx)(r.ZP, {
                                            className: "basic-single",
                                            classNamePrefix: "select",
                                            isDisabled: !1,
                                            isLoading: !1,
                                            isClearable: !1,
                                            isRtl: !1,
                                            isSearchable: !1,
                                            defaultValue: c[0],
                                            name: "exam",
                                            options: c,
                                            ref: N,
                                            onChange: e => {
                                                d([...o.find(t => t.exam === e.value).regulations.map(e => ({
                                                    value: e,
                                                    label: e
                                                }))]);
                                                let t = o.find(t => t.exam === e.value).regulations.reduce( (e, t) => Number(t) > Number(e) ? t : e, o.find(t => t.exam === e.value).regulations[0]);
                                                R.current.setValue({
                                                    label: t,
                                                    value: t
                                                })
                                            }
                                        })]
                                    })
                                }), (0,
                                s.jsx)("div", {
                                    children: (0,
                                    s.jsxs)("label", {
                                        className: "block text-sm font-medium dark:text-black [&_.select\\_\\_control]:dark:bg-gray-700 [&_.select\\_\\_control]:border-gray-600 [&_.select\\_\\_control]:cursor-pointer [&_.select\\_\\_single-value]:dark:!text-white",
                                        children: [(0,
                                        s.jsxs)("p", {
                                            className: "mb-2 dark:text-white",
                                            children: ["Regulation ", (0,
                                            s.jsx)("span", {
                                                className: "text-red-600",
                                                children: "*"
                                            })]
                                        }), (0,
                                        s.jsx)(r.ZP, {
                                            className: "basic-single",
                                            classNamePrefix: "select",
                                            isDisabled: !1,
                                            isLoading: !1,
                                            isClearable: !1,
                                            isRtl: !1,
                                            isSearchable: !1,
                                            defaultValue: i[0],
                                            name: "regulation",
                                            options: i,
                                            ref: R
                                        })]
                                    })
                                }), (0,
                                s.jsx)("div", {
                                    children: (0,
                                    s.jsxs)("label", {
                                        className: "block text-sm font-medium dark:text-black [&_.select\\_\\_control]:dark:bg-gray-700 [&_.select\\_\\_control]:border-gray-600 [&_.select\\_\\_control]:cursor-pointer [&_.select\\_\\_single-value]:dark:!text-white",
                                        children: [(0,
                                        s.jsxs)("p", {
                                            className: "mb-2 dark:text-white",
                                            children: ["Semester ", (0,
                                            s.jsx)("span", {
                                                className: "text-red-600",
                                                children: "*"
                                            })]
                                        }), (0,
                                        s.jsx)(r.ZP, {
                                            className: "basic-single",
                                            classNamePrefix: "select",
                                            isDisabled: !1,
                                            isLoading: !1,
                                            isClearable: !1,
                                            isRtl: !1,
                                            isSearchable: !1,
                                            defaultValue: T[0],
                                            name: "semester",
                                            options: T,
                                            ref: _
                                        })]
                                    })
                                }), (0,
                                s.jsxs)("div", {
                                    className: "flex gap-4",
                                    children: [(0,
                                    s.jsx)("div", {
                                        children: (0,
                                        s.jsxs)("label", {
                                            className: "block text-sm font-medium dark:text-white",
                                            children: [(0,
                                            s.jsx)("p", {
                                                className: "mb-2",
                                                children: "From Roll"
                                            }), (0,
                                            s.jsx)("input", {
                                                type: "number",
                                                name: "fromRoll",
                                                className: "border sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500",
                                                placeholder: "600000"
                                            })]
                                        })
                                    }), (0,
                                    s.jsx)("div", {
                                        children: (0,
                                        s.jsxs)("label", {
                                            className: "block text-sm font-medium dark:text-white",
                                            children: [(0,
                                            s.jsx)("p", {
                                                className: "mb-2",
                                                children: "To Roll"
                                            }), (0,
                                            s.jsx)("input", {
                                                type: "number",
                                                name: "toRoll",
                                                className: "border sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500",
                                                placeholder: "600010"
                                            })]
                                        })
                                    })]
                                }), (0,
                                s.jsx)("div", {
                                    children: (0,
                                    s.jsxs)("label", {
                                        className: "block text-sm font-medium dark:text-white",
                                        children: [(0,
                                        s.jsx)("p", {
                                            className: "mb-2",
                                            children: "Custom Rolls"
                                        }), (0,
                                        s.jsx)("input", {
                                            type: "text",
                                            name: "customRolls",
                                            className: "border sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500",
                                            placeholder: "600001, 500001, 700001..."
                                        })]
                                    })
                                }), (0,
                                s.jsx)("button", {
                                    className: "btn w-full btn-info !pointer-events-auto text-white ".concat(u ? "cursor-not-allowed" : ""),
                                    type: "submit",
                                    disabled: u,
                                    children: u ? (0,
                                    s.jsx)("span", {
                                        className: "loading"
                                    }) : "Get Result"
                                })]
                            })]
                        })]
                    }), (0,
                    s.jsxs)("section", {
                        className: "space-y-10",
                        children: [(0,
                        s.jsxs)("section", {
                            children: [(0,
                            s.jsx)("h2", {
                                className: "text-xl font-semibold font-lato mb-2 dark:text-white",
                                children: "Group Results (Explained)"
                            }), (0,
                            s.jsx)("p", {
                                children: "Efficiency meets clarity in our Group Results tool. Designed for collective result analysis, this feature allows you to access and compare outcomes within specified roll number ranges. Witness the power of data organization as results are ranked according to grading, offering valuable insights into group performance. Whether you're evaluating large cohorts or specific segments, our tool simplifies the process and enhances decision-making."
                            })]
                        }), (0,
                        s.jsxs)("section", {
                            children: [(0,
                            s.jsx)("h2", {
                                className: "text-xl font-semibold font-lato mb-2 dark:text-white",
                                children: "How to Check Your Result"
                            }), (0,
                            s.jsx)("p", {
                                children: 'Enter your Roll Range or Custom Rolls to get Your Result. You can also Selecct Exam, Regulation and Semester. In the End, just click on "Get Result" to view your Goup results.'
                            })]
                        }), (0,
                        s.jsxs)("section", {
                            children: [(0,
                            s.jsx)("h2", {
                                className: "text-xl font-semibold font-lato mb-2 dark:text-white",
                                children: "Supported Exam Results"
                            }), (0,
                            s.jsx)("ul", {
                                className: "list-inside list-disc",
                                children: c.map( (e, t) => (0,
                                s.jsx)("li", {
                                    children: e.label
                                }, t))
                            })]
                        })]
                    })]
                })]
            })
        }
    },
    7666: function(e, t, l) {
        "use strict";
        let s = (0,
        l(2265).createContext)(null);
        t.Z = s
    },
    3497: function(e, t, l) {
        "use strict";
        l.d(t, {
            w: function() {
                return r
            }
        });
        let s = e => {
            for (let t = 0; t < e.length - 1; t += 2)
                [e[t],e[t + 1]] = [e[t + 1], e[t]];
            return e
        }
          , a = () => {
            let e = String(Date.now() + 18e4)
              , t = Math.floor(15 * Math.random()) + 1
              , l = [];
            for (let s of e)
                l.push(String(parseInt(s, 10) + t));
            return JSON.stringify({
                key: s(l).join("-"),
                ref: t
            })
        }
          , r = async (e, t) => {
            let l = new URLSearchParams(t)
              , s = "".concat("https://btebresulthub-server.vercel.app").concat(e);
            t && (s += "?".concat(l.toString()));
            let r = {
                validator: a()
            }
              , o = await fetch(s, {
                headers: r
            });
            return await o.json()
        }
    },
    6854: function(e, t) {
        "use strict";
        t.Z = {
            src: "/_next/static/media/group.d2df48c9.svg",
            height: 500,
            width: 750,
            blurWidth: 0,
            blurHeight: 0
        }
    }
}, function(e) {
    e.O(0, [51, 422, 14, 415, 89, 531, 437, 971, 23, 744], function() {
        return e(e.s = 8519)
    }),
    _N_E = e.O()
}
]);
