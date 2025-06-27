(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[87], {
    7895: function(e, t, s) {
        Promise.resolve().then(s.bind(s, 4386))
    },
    7138: function(e, t, s) {
        "use strict";
        s.d(t, {
            default: function() {
                return a.a
            }
        });
        var l = s(231)
          , a = s.n(l)
    },
    4386: function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, {
            default: function() {
                return y
            }
        });
        var l = s(7437)
          , a = s(8230)
          , r = s(2265)
          , n = s(9531)
          , i = s(4446)
          , c = s(4635)
          , o = s(4008)
          , d = s(5097)
          , u = s(6356)
          , m = s(5789)
          , x = s(4182)
          , h = s(7138)
          , b = s(3580)
          , g = e => {
            let {modalIsOpen: t, setModalIsOpen: s, resultData: a} = e
              , [n,g] = (0,
            r.useState)("")
              , p = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];
            (0,
            r.useEffect)( () => {
                g("".concat(window.origin, "/results?roll=").concat(a.roll, "&regulation=").concat(a.regulation, "&exam=").concat(a.exam))
            }
            , []);
            let[f,j,y] = (0,
            x.ry)({
                onSuccess: e => {
                    let t = document.createElement("a");
                    t.download = "".concat(a.roll, "_").concat(a.regulation, "_").concat(a.exam, "_BTEBResultHub.jpeg"),
                    t.href = e,
                    t.click()
                }
            })
              , v = e => {
                let t = 0;
                for (let s of e)
                    !1 === s.passed && (t += s.result.failedList.length);
                return t
            }
            ;
            return (0,
            l.jsx)(i.M, {
                children: t && (0,
                l.jsx)(c.E.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: () => s(!1),
                    className: "bg-slate-900/20 backdrop-blur p-4 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer popup-viewer",
                    children: (0,
                    l.jsx)(c.E.div, {
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
                        ref: y,
                        children: (0,
                        l.jsxs)("div", {
                            className: "bg-white dark:bg-slate-900 w-full relative rounded-lg border-2 border-gray-700 cursor-default",
                            children: [(0,
                            l.jsxs)("div", {
                                className: "absolute flex justify-between w-full",
                                children: [(0,
                                l.jsxs)("div", {
                                    className: "dropdown",
                                    children: [(0,
                                    l.jsx)("div", {
                                        tabIndex: 0,
                                        role: "button",
                                        className: "text-xl p-2 bg-gray-200 dark:bg-gray-700 rounded-tl-md",
                                        children: (0,
                                        l.jsx)(o.ZES, {})
                                    }), (0,
                                    l.jsxs)("ul", {
                                        tabIndex: 0,
                                        className: "dropdown-content z-[1] menu p-2 shadow-xl bg-white dark:bg-slate-800 rounded-box w-max",
                                        children: [(0,
                                        l.jsx)("li", {
                                            children: (0,
                                            l.jsx)(m.CopyToClipboard, {
                                                text: n,
                                                onCopy: () => {
                                                    b.Am.success("URL Copied!")
                                                }
                                                ,
                                                children: (0,
                                                l.jsx)("button", {
                                                    children: "Copy"
                                                })
                                            })
                                        }), (0,
                                        l.jsx)("li", {
                                            children: (0,
                                            l.jsx)("button", {
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
                                        }), (0,
                                        l.jsx)("li", {
                                            children: (0,
                                            l.jsx)(h.default, {
                                                href: "/cgpa-calculator?roll=".concat(a.roll, "&regulation=").concat(a.regulation, "&exam=").concat(a.exam),
                                                children: "Calculate CGPA"
                                            })
                                        })]
                                    })]
                                }), (0,
                                l.jsx)("button", {
                                    className: "text-xl p-2 bg-gray-200 dark:bg-gray-700 rounded-tr-md",
                                    onClick: () => s(!1),
                                    children: (0,
                                    l.jsx)(u.lTq, {})
                                })]
                            }), (0,
                            l.jsxs)("div", {
                                className: "py-5 px-6",
                                children: [(0,
                                l.jsxs)("header", {
                                    className: "text-center dark:text-white",
                                    children: [(0,
                                    l.jsxs)("h2", {
                                        className: "text-2xl font-lato font-bold",
                                        children: ["Roll: ", a.roll]
                                    }), (0,
                                    l.jsxs)("p", {
                                        className: "text-sm",
                                        children: [a.exam.split("-").map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(" "), " ", "(", a.regulation, ")"]
                                    }), (0,
                                    l.jsxs)(h.default, {
                                        className: "underline-offset-4 hover:underline",
                                        href: "/institute-results?id=".concat(a.instituteData.code),
                                        onClick: () => {
                                            document.body.style.overflow = ""
                                        }
                                        ,
                                        children: [a.instituteData.name, ",", " ", a.instituteData.district]
                                    })]
                                }), (0,
                                l.jsx)("div", {
                                    className: "divider"
                                }), (0,
                                l.jsxs)("div", {
                                    className: "space-y-5 max-h-[65vh] overflow-y-auto sm:scrollbar-thin sm:scrollbar-track-rounded-full sm:scrollbar-thumb-rounded-full sm:scrollbar-thumb-gray-500 dark:sm:scrollbar-thumb-gray-800 sm:scrollbar-track-gray-200 dark:sm:scrollbar-track-gray-500",
                                    children: [0 !== v(a.resultData) && (0,
                                    l.jsxs)("p", {
                                        className: "p-2 mb-2 font-semibold text-center text-red-700 bg-red-200 border-b-2 border-red-500 dark:bg-red-300 sm:text-lg",
                                        children: [v(a.resultData), " Subject(s) Yet to Pass"]
                                    }), a.resultData.find(e => "8" === e.semester && void 0 !== e.cgpa) && (0,
                                    l.jsxs)("p", {
                                        className: "p-2 mb-2 bg-green-200 border-b-2 border-green-500 dark:bg-green-300n text-[blue] text-xl font-black text-center font-lato",
                                        children: ["CGPA:", " ", a.resultData.find(e => "8" === e.semester && void 0 !== e.cgpa).cgpa]
                                    }), a.resultData.map(e => (0,
                                    l.jsxs)("div", {
                                        children: [(0,
                                        l.jsxs)("p", {
                                            className: "flex justify-between items-end mb-2",
                                            children: [(0,
                                            l.jsxs)("span", {
                                                className: "text-sm sm:text-xl dark:text-white font-semibold",
                                                children: [p[e.semester - 1], " Semester:", " "]
                                            }), " ", (0,
                                            l.jsx)("span", {
                                                className: "text-xs sm:text-sm flex gap-1 items-center ".concat(e.passed ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-500"),
                                                children: e.passed ? (0,
                                                l.jsxs)(l.Fragment, {
                                                    children: [(0,
                                                    l.jsx)(d.XZG, {}), "Passed"]
                                                }) : (0,
                                                l.jsxs)(l.Fragment, {
                                                    children: [" ", (0,
                                                    l.jsx)("span", {
                                                        className: "font-semibold dark:text-white",
                                                        children: e.result.failedList.length
                                                    }), " ", "Referred(s)", " "]
                                                })
                                            }), " ", (0,
                                            l.jsxs)("span", {
                                                className: "text-xs sm:text-sm flex gap-1 items-center",
                                                children: [(0,
                                                l.jsx)(d.LH9, {}), new Date(e.publishedAt.replace(/-/g, "/")).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric"
                                                })]
                                            })]
                                        }), "object" == typeof e.result ? (0,
                                        l.jsxs)("div", {
                                            className: "[&_*:not(last-child)]:border-b *:border-gray-700",
                                            children: [e.result.failedList.map(e => (0,
                                            l.jsxs)("h3", {
                                                className: "text-red-700 text-sm p-2 bg-red-300",
                                                children: [e.subjectCode, " - ", e.subjectName, " ", (0,
                                                l.jsx)("span", {
                                                    className: "badge badge-sm",
                                                    children: "T" === e.failedType ? "Theory" : "P" === e.failedType ? "Practical" : "Theory & Practical"
                                                })]
                                            }, e.subjectCode)), e.result.passedList.map(e => (0,
                                            l.jsxs)("h3", {
                                                className: "text-green-800 text-sm p-2 bg-green-300",
                                                children: [e.subjectCode, " - ", e.subjectName, " ", (0,
                                                l.jsx)("span", {
                                                    className: "badge badge-sm",
                                                    children: "T" === e.failedType ? "Theory" : "P" === e.failedType ? "Practical" : "Theory & Practical"
                                                })]
                                            }, e.subjectCode))]
                                        }) : (0,
                                        l.jsxs)("h3", {
                                            className: "text-[blue] text-xl font-black text-center font-lato p-2 bg-green-300",
                                            children: ["CGPA: ", e.result]
                                        })]
                                    }, e.semester))]
                                })]
                            })]
                        })
                    })
                })
            })
        }
        ;
        s(5614);
        var p = s(3497)
          , f = s(7666)
          , j = s(6463)
          , y = () => {
            var e, t;
            let {selectionsData: s} = (0,
            r.useContext)(f.Z)
              , [i,c] = (0,
            r.useState)([{
                value: "diploma-in-engineering",
                label: "Diploma In Engineering"
            }, {
                value: "diploma-in-textile",
                label: "Diploma In Textile"
            }])
              , [o,d] = (0,
            r.useState)([{
                value: "2022",
                label: "2022"
            }, {
                value: "2016",
                label: "2016"
            }, {
                value: "2010",
                label: "2010"
            }])
              , [u,m] = (0,
            r.useState)(!1)
              , [x,h] = (0,
            r.useState)(!1)
              , [y,v] = (0,
            r.useState)({})
              , w = (0,
            r.useRef)()
              , N = (0,
            r.useRef)()
              , k = (0,
            r.useRef)()
              , _ = (0,
            j.useSearchParams)()
              , C = _.get("roll")
              , S = null !== (e = _.get("exam")) && void 0 !== e ? e : "diploma-in-engineering"
              , R = null !== (t = _.get("regulation")) && void 0 !== t ? t : "2022";
            (0,
            r.useEffect)( () => {
                var e, t;
                C && (w.current.setValue(null !== (e = i.find(e => e.value === S)) && void 0 !== e ? e : i[0]),
                N.current.setValue(null !== (t = o.find(e => e.value === R)) && void 0 !== t ? t : o[0]),
                k.current.roll.value = C,
                E(k.current, !0))
            }
            , []),
            (0,
            r.useEffect)( () => {
                if (0 === s.length)
                    return;
                c(s.map(e => ({
                    value: e.exam,
                    label: e.exam.split("-").map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(" ")
                }))),
                d([{
                    value: "any",
                    label: "Any"
                }, ...s[0].regulations.map(e => ({
                    value: e,
                    label: e
                }))]);
                let e = s[0].regulations.reduce( (e, t) => Number(t) > Number(e) ? t : e, s[0].regulations[0]);
                N.current.setValue({
                    label: e,
                    value: e
                })
            }
            , [s]);
            let E = async function(e) {
                let t, s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                s || e.preventDefault();
                let l = e;
                s || (l = l.target);
                let a = l.roll.value
                  , r = l.exam.value
                  , n = l.regulation.value;
                if (6 !== a.length) {
                    b.Am.error("Roll must be 6 digits long!");
                    return
                }
                m(!0);
                try {
                    t = await (0,
                    p.w)("/results/individual/".concat(a), {
                        exam: r,
                        regulation: n
                    })
                } catch (e) {
                    b.Am.error("Some error occurred!"),
                    m(!1);
                    return
                }
                t.success ? (v(t),
                h(!0)) : b.Am.error(t.message),
                m(!1)
            };
            return (0,
            r.useEffect)( () => {
                x ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""
            }
            , [x]),
            (0,
            l.jsxs)(l.Fragment, {
                children: [(0,
                l.jsx)("title", {
                    children: "Your Exam Results || BTEB Result Hub"
                }), (0,
                l.jsx)("meta", {
                    name: "description",
                    content: "View your individual diploma results from the Bangladesh Technical Education Board. Quick and easy access to your academic performance."
                }), (0,
                l.jsx)("meta", {
                    name: "keywords",
                    content: "individual results, BTEB, diploma results, student results, Bangladesh Technical Education Board"
                }), (0,
                l.jsx)(g, {
                    modalIsOpen: x,
                    setModalIsOpen: h,
                    resultData: y
                }), (0,
                l.jsxs)("div", {
                    className: "py-10 px-5 sm:px-10 space-y-10",
                    children: [(0,
                    l.jsxs)("section", {
                        className: "flex gap-8 items-center justify-between flex-col-reverse lg:flex-row",
                        children: [(0,
                        l.jsx)("div", {
                            className: "w-full sm:max-w-lg lg:w-[42%]",
                            children: (0,
                            l.jsx)("img", {
                                src: a.Z.src,
                                alt: "Individual Results",
                                className: "w-full"
                            })
                        }), (0,
                        l.jsxs)("div", {
                            className: "flex flex-col items-center justify-center gap-10",
                            children: [(0,
                            l.jsxs)("header", {
                                className: "dark:text-white text-center",
                                children: [(0,
                                l.jsx)("h3", {
                                    className: "text-3xl font-bold font-lato mb-1",
                                    children: "Individual Result Check"
                                }), (0,
                                l.jsx)("p", {
                                    children: "Check your Results in One Click!"
                                })]
                            }), (0,
                            l.jsxs)("form", {
                                className: "rounded-lg shadow-lg border md:mt-0 w-80 sm:w-[30rem] bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-700 p-5 space-y-4",
                                onSubmit: E,
                                ref: k,
                                children: [(0,
                                l.jsx)("div", {
                                    children: (0,
                                    l.jsxs)("label", {
                                        className: "block text-sm font-medium dark:text-black [&_.select\\_\\_control]:dark:bg-gray-700 [&_.select\\_\\_control]:border-gray-600 [&_.select\\_\\_control]:cursor-pointer [&_.select\\_\\_single-value]:dark:!text-white",
                                        children: [(0,
                                        l.jsxs)("p", {
                                            className: "mb-2 dark:text-white",
                                            children: ["Exam ", (0,
                                            l.jsx)("span", {
                                                className: "text-red-600",
                                                children: "*"
                                            })]
                                        }), (0,
                                        l.jsx)(n.ZP, {
                                            className: "basic-single",
                                            classNamePrefix: "select",
                                            isDisabled: !1,
                                            isLoading: !1,
                                            isClearable: !1,
                                            isRtl: !1,
                                            isSearchable: !1,
                                            defaultValue: i[0],
                                            name: "exam",
                                            options: i,
                                            ref: w,
                                            onChange: e => {
                                                d([{
                                                    value: "any",
                                                    label: "Any"
                                                }, ...s.find(t => t.exam === e.value).regulations.map(e => ({
                                                    value: e,
                                                    label: e
                                                }))]);
                                                let t = s.find(t => t.exam === e.value).regulations.reduce( (e, t) => Number(t) > Number(e) ? t : e, s.find(t => t.exam === e.value).regulations[0]);
                                                N.current.setValue({
                                                    label: t,
                                                    value: t
                                                })
                                            }
                                        })]
                                    })
                                }), (0,
                                l.jsx)("div", {
                                    children: (0,
                                    l.jsxs)("label", {
                                        className: "block text-sm font-medium dark:text-black [&_.select\\_\\_control]:dark:bg-gray-700 [&_.select\\_\\_control]:border-gray-600 [&_.select\\_\\_control]:cursor-pointer [&_.select\\_\\_single-value]:dark:!text-white",
                                        children: [(0,
                                        l.jsxs)("p", {
                                            className: "mb-2 dark:text-white",
                                            children: ["Regulation ", (0,
                                            l.jsx)("span", {
                                                className: "text-red-600",
                                                children: "*"
                                            })]
                                        }), (0,
                                        l.jsx)(n.ZP, {
                                            className: "basic-single",
                                            classNamePrefix: "select",
                                            isDisabled: !1,
                                            isLoading: !1,
                                            isClearable: !1,
                                            isRtl: !1,
                                            isSearchable: !1,
                                            defaultValue: o[0],
                                            name: "regulation",
                                            options: o,
                                            ref: N
                                        })]
                                    })
                                }), (0,
                                l.jsx)("div", {
                                    children: (0,
                                    l.jsxs)("label", {
                                        className: "block text-sm font-medium dark:text-white",
                                        children: [(0,
                                        l.jsxs)("p", {
                                            className: "mb-2",
                                            children: ["Roll Number ", (0,
                                            l.jsx)("span", {
                                                className: "text-red-600",
                                                children: "*"
                                            })]
                                        }), (0,
                                        l.jsx)("input", {
                                            type: "number",
                                            name: "roll",
                                            className: "border sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500",
                                            placeholder: "600000",
                                            required: !0
                                        })]
                                    })
                                }), (0,
                                l.jsx)("button", {
                                    className: "btn w-full btn-info !pointer-events-auto text-white ".concat(u ? "cursor-not-allowed" : ""),
                                    type: "submit",
                                    disabled: u,
                                    children: u ? (0,
                                    l.jsx)("span", {
                                        className: "loading"
                                    }) : "Get Result"
                                })]
                            })]
                        })]
                    }), (0,
                    l.jsxs)("section", {
                        className: "space-y-6",
                        children: [(0,
                        l.jsxs)("section", {
                            children: [(0,
                            l.jsx)("h2", {
                                className: "text-xl font-semibold font-lato mb-2 dark:text-white",
                                children: "Individual Result (Explained)"
                            }), (0,
                            l.jsx)("p", {
                                children: "Elevate the experience of result viewing for diploma students with our Individual Result tool. No more navigating through complex PDF files - simply enter your roll number, and our website will swiftly parse the official PDF documents to instantly present your result. Seamlessly view your grades and performance across different semesters, allowing you to track your progress with ease. With the option to copy the result link or capture a screenshot, sharing your achievements has never been simpler."
                            })]
                        }), (0,
                        l.jsxs)("section", {
                            children: [(0,
                            l.jsx)("h2", {
                                className: "text-xl font-semibold font-lato mb-2 dark:text-white",
                                children: "How to Check Your Result"
                            }), (0,
                            l.jsx)("p", {
                                children: 'Enter your Roll number in the form, Select your Exam and Regulation and click on "Get Result" to view your diploma results.'
                            })]
                        }), (0,
                        l.jsxs)("section", {
                            children: [(0,
                            l.jsx)("h2", {
                                className: "text-xl font-semibold font-lato mb-2 dark:text-white",
                                children: "Supported Exam Results"
                            }), (0,
                            l.jsx)("ul", {
                                className: "list-inside list-disc",
                                children: i.map( (e, t) => (0,
                                l.jsx)("li", {
                                    children: e.label
                                }, t))
                            })]
                        }), (0,
                        l.jsxs)("section", {
                            children: [(0,
                            l.jsx)("h2", {
                                className: "text-xl font-semibold font-lato mb-2 dark:text-white",
                                children: "Multiple Semester Results (Explained)"
                            }), (0,
                            l.jsx)("p", {
                                children: "A single semester might have several results, each with a publication date listed at the top. However, only the most recent result is considered final for that semester. Previous results are simply historical records. Therefore, don't be confused if past results indicated you had referred."
                            })]
                        })]
                    })]
                })]
            })
        }
    },
    7666: function(e, t, s) {
        "use strict";
        let l = (0,
        s(2265).createContext)(null);
        t.Z = l
    },
    3497: function(e, t, s) {
        "use strict";
        s.d(t, {
            w: function() {
                return r
            }
        });
        let l = e => {
            for (let t = 0; t < e.length - 1; t += 2)
                [e[t],e[t + 1]] = [e[t + 1], e[t]];
            return e
        }
          , a = () => {
            let e = String(Date.now() + 18e4)
              , t = Math.floor(15 * Math.random()) + 1
              , s = [];
            for (let l of e)
                s.push(String(parseInt(l, 10) + t));
            return JSON.stringify({
                key: l(s).join("-"),
                ref: t
            })
        }
          , r = async (e, t) => {
            let s = new URLSearchParams(t)
              , l = "".concat("https://btebresulthub-server.vercel.app").concat(e);
            t && (l += "?".concat(s.toString()));
            let r = {
                validator: a()
            }
              , n = await fetch(l, {
                headers: r
            });
            return await n.json()
        }
    },
    8230: function(e, t) {
        "use strict";
        t.Z = {
            src: "/_next/static/media/result.af055e3e.svg",
            height: 900,
            width: 1200,
            blurWidth: 0,
            blurHeight: 0
        }
    }
}, function(e) {
    e.O(0, [51, 706, 422, 14, 231, 415, 89, 531, 437, 971, 23, 744], function() {
        return e(e.s = 7895)
    }),
    _N_E = e.O()
}
]);
