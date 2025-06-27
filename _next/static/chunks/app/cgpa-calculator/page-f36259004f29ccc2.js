(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[49], {
    1007: function(e, a, t) {
        Promise.resolve().then(t.bind(t, 1879))
    },
    1879: function(e, a, t) {
        "use strict";
        t.r(a);
        var l = t(7437)
          , r = t(7666)
          , s = t(3497)
          , n = t(6463)
          , c = t(2265);
        t(5614);
        var i = t(9531)
          , d = t(3580);
        a.default = () => {
            var e, a;
            let {selectionsData: t} = (0,
            c.useContext)(r.Z)
              , [o,u] = (0,
            c.useState)([{
                value: "diploma-in-engineering",
                label: "Diploma in Engineering"
            }, {
                value: "diploma-in-textile",
                label: "Diploma in Textile"
            }])
              , [m,x] = (0,
            c.useState)([{
                value: "2010",
                label: "2010"
            }, {
                value: "2016",
                label: "2016"
            }, {
                value: "2022",
                label: "2022"
            }])
              , [h,b] = (0,
            c.useState)(!1)
              , g = (0,
            c.useRef)()
              , p = (0,
            c.useRef)()
              , f = (0,
            c.useRef)()
              , y = (0,
            n.useSearchParams)()
              , j = y.get("roll")
              , k = null !== (e = y.get("exam")) && void 0 !== e ? e : "diploma-in-engineering"
              , N = null !== (a = y.get("regulation")) && void 0 !== a ? a : "2022";
            (0,
            c.useEffect)( () => {
                var e, a;
                j && (p.current.setValue(null !== (e = o.find(e => e.value === k)) && void 0 !== e ? e : o[0]),
                f.current.setValue(null !== (a = m.find(e => e.value === N)) && void 0 !== a ? a : m[0]),
                g.current.roll.value = j,
                R(g.current, !0))
            }
            , []),
            (0,
            c.useEffect)( () => {
                if (0 === t.length)
                    return;
                u(t.map(e => ({
                    value: e.exam,
                    label: e.exam.split("-").map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(" ")
                }))),
                x([{
                    value: "any",
                    label: "Any"
                }, ...t[0].regulations.map(e => ({
                    value: e,
                    label: e
                }))]);
                let e = t[0].regulations.reduce( (e, a) => Number(a) > Number(e) ? a : e, t[0].regulations[0]);
                f.current.setValue({
                    label: e,
                    value: e
                })
            }
            , [t]);
            let v = [{
                value: "2010",
                label: "2010"
            }, {
                value: "2016",
                label: "2016"
            }, {
                value: "2022",
                label: "2022"
            }]
              , [w,_] = (0,
            c.useState)("0.00")
              , C = (0,
            c.useRef)(null)
              , A = e => "" === e ? 0 : parseFloat(e)
              , S = {
                2010: [5, 5, 5, 15, 15, 20, 25, 10],
                2016: [5, 5, 5, 10, 15, 20, 25, 15],
                2022: [5, 5, 10, 10, 20, 20, 20, 10]
            }
              , P = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"]
              , R = async function(e) {
                let a, t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                t || e.preventDefault();
                let l = e;
                t || (l = l.target);
                let r = l.roll.value
                  , n = l.exam.value
                  , c = l.regulation.value;
                if (6 !== r.length) {
                    d.Am.error("Roll must be 6 digits long!");
                    return
                }
                b(!0);
                try {
                    a = await (0,
                    s.w)("/results/individual/".concat(r), {
                        exam: n,
                        regulation: c
                    })
                } catch (e) {
                    d.Am.error("Some error occurred!"),
                    b(!1);
                    return
                }
                if (!a.success) {
                    b(!1),
                    d.Am.error(a.message);
                    return
                }
                let i = C.current;
                for (let e of a.resultData) {
                    let a = "semester_0".concat(e.semester);
                    i[a] && (i[a].value = e.passed ? e.result : "")
                }
                d.Am.success("Result Filled for ".concat(r)),
                b(!1),
                l.reset()
            };
            return (0,
            l.jsxs)(l.Fragment, {
                children: [(0,
                l.jsx)("title", {
                    children: "CGPA Calculator || BTEB Result Hub"
                }), (0,
                l.jsx)("meta", {
                    name: "description",
                    content: "Use our CGPA calculator to accurately calculate your cumulative grade point average for diploma courses under the Bangladesh Technical Education Board."
                }), (0,
                l.jsx)("meta", {
                    name: "keywords",
                    content: "CGPA calculator, diploma CGPA, BTEB, calculate CGPA, grade point average, Bangladesh Technical Education Board"
                }), (0,
                l.jsxs)("div", {
                    className: "py-10 px-5 sm:px-10 space-y-10",
                    children: [(0,
                    l.jsxs)("section", {
                        className: "flex gap-10 items-center justify-between flex-col lg:flex-row",
                        children: [(0,
                        l.jsxs)("div", {
                            className: "flex flex-col items-center justify-center gap-8",
                            children: [(0,
                            l.jsxs)("header", {
                                className: "dark:text-white text-center",
                                children: [(0,
                                l.jsx)("h3", {
                                    className: "text-3xl font-bold font-lato mb-1",
                                    children: "CGPA Calculator"
                                }), (0,
                                l.jsx)("p", {
                                    children: "Calculate your Final CGPA!"
                                })]
                            }), (0,
                            l.jsxs)("form", {
                                className: "rounded-lg shadow-lg border md:mt-0 w-80 sm:w-[30rem] bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-700 p-5 space-y-4",
                                onSubmit: e => {
                                    e.preventDefault();
                                    let a = e.target
                                      , t = Array.from({
                                        length: 8
                                    }, (e, t) => A(a["semester_0".concat(t + 1)].value));
                                    if (t.every(e => 0 === e))
                                        return;
                                    let l = S[a.regulation.value]
                                      , r = 0
                                      , s = 0;
                                    for (let e = 0; e < t.length; e++)
                                        r += t[e] * (l[e] / 100),
                                        s += l[e] / 100;
                                    _((r / s).toFixed(2))
                                }
                                ,
                                ref: C,
                                children: [(0,
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
                                        l.jsx)(i.ZP, {
                                            className: "basic-single",
                                            classNamePrefix: "select",
                                            isDisabled: !1,
                                            isLoading: !1,
                                            isClearable: !1,
                                            isRtl: !1,
                                            isSearchable: !1,
                                            defaultValue: v[0],
                                            name: "regulation",
                                            options: v
                                        })]
                                    })
                                }), (0,
                                l.jsxs)("div", {
                                    className: "flex gap-4",
                                    children: [(0,
                                    l.jsx)("div", {
                                        children: (0,
                                        l.jsxs)("label", {
                                            className: "block text-sm font-medium dark:text-white",
                                            children: [(0,
                                            l.jsx)("p", {
                                                className: "mb-2",
                                                children: "1st Semester"
                                            }), (0,
                                            l.jsx)("input", {
                                                type: "number",
                                                step: "any",
                                                name: "semester_01",
                                                className: "border sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500",
                                                placeholder: "0.00"
                                            })]
                                        })
                                    }), (0,
                                    l.jsx)("div", {
                                        children: (0,
                                        l.jsxs)("label", {
                                            className: "block text-sm font-medium dark:text-white",
                                            children: [(0,
                                            l.jsx)("p", {
                                                className: "mb-2",
                                                children: "2nd Semester"
                                            }), (0,
                                            l.jsx)("input", {
                                                type: "number",
                                                step: "any",
                                                name: "semester_02",
                                                className: "border sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500",
                                                placeholder: "0.00"
                                            })]
                                        })
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "flex gap-4",
                                    children: [(0,
                                    l.jsx)("div", {
                                        children: (0,
                                        l.jsxs)("label", {
                                            className: "block text-sm font-medium dark:text-white",
                                            children: [(0,
                                            l.jsx)("p", {
                                                className: "mb-2",
                                                children: "3rd Semester"
                                            }), (0,
                                            l.jsx)("input", {
                                                type: "number",
                                                step: "any",
                                                name: "semester_03",
                                                className: "border sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500",
                                                placeholder: "0.00"
                                            })]
                                        })
                                    }), (0,
                                    l.jsx)("div", {
                                        children: (0,
                                        l.jsxs)("label", {
                                            className: "block text-sm font-medium dark:text-white",
                                            children: [(0,
                                            l.jsx)("p", {
                                                className: "mb-2",
                                                children: "4th Semester"
                                            }), (0,
                                            l.jsx)("input", {
                                                type: "number",
                                                step: "any",
                                                name: "semester_04",
                                                className: "border sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500",
                                                placeholder: "0.00"
                                            })]
                                        })
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "flex gap-4",
                                    children: [(0,
                                    l.jsx)("div", {
                                        children: (0,
                                        l.jsxs)("label", {
                                            className: "block text-sm font-medium dark:text-white",
                                            children: [(0,
                                            l.jsx)("p", {
                                                className: "mb-2",
                                                children: "5th Semester"
                                            }), (0,
                                            l.jsx)("input", {
                                                type: "number",
                                                step: "any",
                                                name: "semester_05",
                                                className: "border sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500",
                                                placeholder: "0.00"
                                            })]
                                        })
                                    }), (0,
                                    l.jsx)("div", {
                                        children: (0,
                                        l.jsxs)("label", {
                                            className: "block text-sm font-medium dark:text-white",
                                            children: [(0,
                                            l.jsx)("p", {
                                                className: "mb-2",
                                                children: "6th Semester"
                                            }), (0,
                                            l.jsx)("input", {
                                                type: "number",
                                                step: "any",
                                                name: "semester_06",
                                                className: "border sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500",
                                                placeholder: "0.00"
                                            })]
                                        })
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "flex gap-4",
                                    children: [(0,
                                    l.jsx)("div", {
                                        children: (0,
                                        l.jsxs)("label", {
                                            className: "block text-sm font-medium dark:text-white",
                                            children: [(0,
                                            l.jsx)("p", {
                                                className: "mb-2",
                                                children: "7th Semester"
                                            }), (0,
                                            l.jsx)("input", {
                                                type: "number",
                                                step: "any",
                                                name: "semester_07",
                                                className: "border sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500",
                                                placeholder: "0.00"
                                            })]
                                        })
                                    }), (0,
                                    l.jsx)("div", {
                                        children: (0,
                                        l.jsxs)("label", {
                                            className: "block text-sm font-medium dark:text-white",
                                            children: [(0,
                                            l.jsx)("p", {
                                                className: "mb-2",
                                                children: "8th Semester"
                                            }), (0,
                                            l.jsx)("input", {
                                                type: "number",
                                                step: "any",
                                                name: "semester_08",
                                                className: "border sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500",
                                                placeholder: "0.00"
                                            })]
                                        })
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [(0,
                                    l.jsx)("button", {
                                        className: "btn btn-error text-white",
                                        type: "reset",
                                        children: "Clear"
                                    }), (0,
                                    l.jsx)("button", {
                                        className: "btn btn-info text-white",
                                        type: "submit",
                                        children: "Calculate CGPA"
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "text-center font-lato text-2xl",
                                    children: [(0,
                                    l.jsx)("span", {
                                        className: "dark:text-[#BFDBFE]",
                                        children: "CGPA:"
                                    }), " ", (0,
                                    l.jsx)("span", {
                                        className: "text-[#4A4A4A] dark:text-[#FEF08A] font-black",
                                        children: w
                                    })]
                                })]
                            })]
                        }), (0,
                        l.jsxs)("div", {
                            className: "flex flex-col items-center justify-center gap-8",
                            children: [(0,
                            l.jsxs)("header", {
                                className: "dark:text-white text-center",
                                children: [(0,
                                l.jsx)("h3", {
                                    className: "text-3xl font-bold font-lato mb-1",
                                    children: "Fill Result"
                                }), (0,
                                l.jsx)("p", {
                                    children: "Lazy to Type? Fill your result Automatically!"
                                })]
                            }), (0,
                            l.jsxs)("form", {
                                className: "rounded-lg shadow-lg border md:mt-0 w-80 sm:w-96 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-700 p-5 space-y-4",
                                onSubmit: R,
                                ref: g,
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
                                        l.jsx)(i.ZP, {
                                            className: "basic-single",
                                            classNamePrefix: "select",
                                            isDisabled: !1,
                                            isLoading: !1,
                                            isClearable: !1,
                                            isRtl: !1,
                                            isSearchable: !1,
                                            defaultValue: o[0],
                                            name: "exam",
                                            options: o,
                                            ref: p,
                                            onChange: e => {
                                                var a;
                                                x([{
                                                    value: "any",
                                                    label: "Any"
                                                }, ...null === (a = t.find(a => a.exam === e.value)) || void 0 === a ? void 0 : a.regulations.map(e => ({
                                                    value: e,
                                                    label: e
                                                }))]);
                                                let l = t.find(a => a.exam === e.value).regulations.reduce( (e, a) => Number(a) > Number(e) ? a : e, t.find(a => a.exam === e.value).regulations[0]);
                                                f.current.setValue({
                                                    label: l,
                                                    value: l
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
                                        l.jsx)(i.ZP, {
                                            className: "basic-single",
                                            classNamePrefix: "select",
                                            isDisabled: !1,
                                            isLoading: !1,
                                            isClearable: !1,
                                            isRtl: !1,
                                            isSearchable: !1,
                                            defaultValue: m.at(-1),
                                            name: "regulation",
                                            options: m,
                                            ref: f
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
                                    className: "btn w-full btn-info !pointer-events-auto text-white ".concat(h ? "cursor-not-allowed" : ""),
                                    type: "submit",
                                    disabled: h,
                                    children: h ? (0,
                                    l.jsx)("span", {
                                        className: "loading"
                                    }) : "Fill Result"
                                })]
                            })]
                        })]
                    }), (0,
                    l.jsxs)("section", {
                        className: "space-y-5",
                        children: [(0,
                        l.jsxs)("section", {
                            children: [(0,
                            l.jsx)("h2", {
                                className: "text-2xl font-semibold font-lato mb-4 dark:text-white",
                                children: "Semester CGPA Priority"
                            }), (0,
                            l.jsx)("div", {
                                className: "relative overflow-x-auto shadow-md sm:rounded-lg max-w-xl",
                                children: (0,
                                l.jsxs)("table", {
                                    className: "w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400 text-center",
                                    children: [(0,
                                    l.jsx)("thead", {
                                        className: " text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",
                                        children: (0,
                                        l.jsxs)("tr", {
                                            children: [(0,
                                            l.jsx)("th", {
                                                scope: "col",
                                                className: "px-6 py-3",
                                                children: "Semester"
                                            }), (0,
                                            l.jsx)("th", {
                                                scope: "col",
                                                className: "px-6 py-3",
                                                children: "2010"
                                            }), (0,
                                            l.jsx)("th", {
                                                scope: "col",
                                                className: "px-6 py-3",
                                                children: "2016"
                                            }), (0,
                                            l.jsx)("th", {
                                                scope: "col",
                                                className: "px-6 py-3",
                                                children: "2022"
                                            })]
                                        })
                                    }), (0,
                                    l.jsx)("tbody", {
                                        children: [[5, 5, 5], [5, 5, 5], [5, 5, 10], [15, 10, 10], [15, 15, 20], [20, 20, 20], [25, 25, 20], [10, 15, 10]].map( (e, a) => (0,
                                        l.jsxs)("tr", {
                                            className: "odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700",
                                            children: [(0,
                                            l.jsx)("td", {
                                                className: "px-6 py-4",
                                                children: P[a]
                                            }), (0,
                                            l.jsxs)("th", {
                                                className: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",
                                                children: [e[0], "%"]
                                            }), (0,
                                            l.jsxs)("td", {
                                                className: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",
                                                children: [e[1], "%"]
                                            }), (0,
                                            l.jsxs)("td", {
                                                className: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",
                                                children: [e[2], "%"]
                                            })]
                                        }, a))
                                    })]
                                })
                            })]
                        }), (0,
                        l.jsxs)("section", {
                            children: [(0,
                            l.jsx)("h2", {
                                className: "text-xl font-semibold font-lato mb-2 dark:text-white",
                                children: "CGPA Calculator (Explanied)"
                            }), (0,
                            l.jsx)("p", {
                                children: "Empower yourself with our versatile CGPA Calculator tool. Whether you're a student striving to understand your academic standing or an institution accommodating diverse grading systems, this tool adapts to your needs. Manually input grades or retrieve them using your roll number, facilitating accurate CGPA computation across semesters. With support for various regulation-grade systems, our tool ensures precision while alleviating complexity."
                            })]
                        })]
                    })]
                })]
            })
        }
    },
    7666: function(e, a, t) {
        "use strict";
        let l = (0,
        t(2265).createContext)(null);
        a.Z = l
    },
    3497: function(e, a, t) {
        "use strict";
        t.d(a, {
            w: function() {
                return s
            }
        });
        let l = e => {
            for (let a = 0; a < e.length - 1; a += 2)
                [e[a],e[a + 1]] = [e[a + 1], e[a]];
            return e
        }
          , r = () => {
            let e = String(Date.now() + 18e4)
              , a = Math.floor(15 * Math.random()) + 1
              , t = [];
            for (let l of e)
                t.push(String(parseInt(l, 10) + a));
            return JSON.stringify({
                key: l(t).join("-"),
                ref: a
            })
        }
          , s = async (e, a) => {
            let t = new URLSearchParams(a)
              , l = "".concat("https://btebresulthub-server.vercel.app").concat(e);
            a && (l += "?".concat(t.toString()));
            let s = {
                validator: r()
            }
              , n = await fetch(l, {
                headers: s
            });
            return await n.json()
        }
    }
}, function(e) {
    e.O(0, [14, 415, 531, 971, 23, 744], function() {
        return e(e.s = 1007)
    }),
    _N_E = e.O()
}
]);
