(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[634], {
    8805: function(t, e, i) {
        Promise.resolve().then(i.bind(i, 6729))
    },
    7138: function(t, e, i) {
        "use strict";
        i.d(e, {
            default: function() {
                return n.a
            }
        });
        var s = i(231)
          , n = i.n(s)
    },
    6729: function(t, e, i) {
        "use strict";
        i.r(e),
        i.d(e, {
            default: function() {
                return N
            }
        });
        var s = i(7437)
          , n = i(6463)
          , a = i(7138)
          , r = i(7261)
          , u = i(731)
          , c = i(3043)
          , l = i(6356)
          , o = i(5789)
          , d = i(4182);
        i(5614);
        var h = i(3580)
          , m = i(2265)
          , x = i(3497)
          , p = () => {
            let[t,e] = (0,
            m.useState)(null)
              , [i,p] = (0,
            m.useState)("")
              , g = (0,
            n.useRouter)()
              , y = (0,
            n.useSearchParams)()
              , N = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];
            (0,
            m.useEffect)( () => {
                (async () => {
                    let t = await (0,
                    x.w)("/results/institute/".concat(y.get("id")));
                    if (!t.success) {
                        g.push("/institute-results");
                        return
                    }
                    e(t)
                }
                )(),
                p(window.location.href)
            }
            , []);
            let[C,f,j] = (0,
            d.ry)({
                onSuccess: e => {
                    let i = document.createElement("a");
                    i.download = "".concat(t.instituteData.name, "_Results_BTEBResultHub.jpeg"),
                    i.href = e,
                    i.click()
                }
            });
            return (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsxs)("title", {
                    children: [" ", t ? "".concat(t.instituteData.name, '," "\n          ').concat(t.instituteData.district) : "Institute", " ", "Latest Results || BTEB Result Hub"]
                }), t ? (0,
                s.jsxs)("div", {
                    className: "py-10 px-5 sm:px-10 printable",
                    ref: j,
                    children: [(0,
                    s.jsxs)("header", {
                        className: "dark:text-white text-center mb-7",
                        children: [(0,
                        s.jsxs)("h3", {
                            className: "text-xl sm:text-2xl font-bold font-lato mb-1",
                            children: [t.instituteData.name, ",", " ", t.instituteData.district]
                        }), (0,
                        s.jsx)("p", {
                            className: "",
                            children: "Latest Results and Statistics"
                        }), (0,
                        s.jsxs)("div", {
                            className: "flex gap-4 items-center justify-center my-3",
                            children: [(0,
                            s.jsx)(o.CopyToClipboard, {
                                text: i,
                                onCopy: () => {
                                    h.Am.success("URL Copied!")
                                }
                                ,
                                children: (0,
                                s.jsxs)("button", {
                                    className: "btn dark:btn-neutral rounded-md",
                                    children: [(0,
                                    s.jsx)(l.Fqs, {}), " Copy"]
                                })
                            }), (0,
                            s.jsxs)("button", {
                                className: "btn dark:btn-neutral rounded-md",
                                onClick: () => window.print(),
                                children: [(0,
                                s.jsx)(c.NFd, {}), " Download"]
                            }), (0,
                            s.jsxs)("button", {
                                className: "btn dark:btn-neutral rounded-md",
                                onClick: f,
                                children: [(0,
                                s.jsx)(u.hEd, {}), " ScreenShot"]
                            })]
                        })]
                    }), (0,
                    s.jsx)("section", {
                        className: "space-y-8",
                        children: t.resultData.map( (e, i) => (0,
                        s.jsxs)("div", {
                            children: [(0,
                            s.jsx)("h4", {
                                className: "text-2xl font-lato font-semibold mb-4",
                                children: new Date(e.publishedAt.replace(/-/g, "/")).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric"
                                })
                            }), (0,
                            s.jsx)("div", {
                                className: "grid gap-4 grid-cols-1 md:grid-cols-2 px-1 sm:px-4",
                                children: e.data.map( (i, n) => (0,
                                s.jsxs)(a.default, {
                                    className: "p-4 sm:p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex items-center gap-4 justify-between text-sm sm:text-base",
                                    href: "./institute-results/details?id=".concat(y.get("id"), "&date=").concat(e.publishedAt, "&semester=").concat(i.semester, "&regulation=").concat(i.regulation),
                                    children: [(0,
                                    s.jsxs)("div", {
                                        className: "space-y-1",
                                        children: [(0,
                                        s.jsxs)("h5", {
                                            children: [N[i.semester - 1], " Semester -", " ", i.regulation]
                                        }), (0,
                                        s.jsx)("p", {
                                            children: t.exam
                                        }), (0,
                                        s.jsxs)("div", {
                                            className: "flex gap-3 items-center pt-2",
                                            children: [(0,
                                            s.jsx)("span", {
                                                className: "badge badge-success",
                                                children: i.passed
                                            }), (0,
                                            s.jsx)("span", {
                                                className: "badge badge-error",
                                                children: i.failed
                                            }), (0,
                                            s.jsx)("span", {
                                                className: "badge badge-info",
                                                children: i.totalResults
                                            })]
                                        })]
                                    }), (0,
                                    s.jsxs)("div", {
                                        className: "btn",
                                        children: [(0,
                                        s.jsx)(r.o6F, {}), " Details"]
                                    })]
                                }, n))
                            })]
                        }, i))
                    })]
                }) : (0,
                s.jsxs)("div", {
                    className: "py-6 w-full h-[65vh] flex flex-col justify-center items-center",
                    children: [(0,
                    s.jsx)("p", {
                        className: "text-4xl font-semibold",
                        children: "Please Wait!"
                    }), (0,
                    s.jsx)("p", {
                        className: "text-xl mb-14",
                        children: "Loading Data..."
                    }), (0,
                    s.jsxs)("div", {
                        role: "status",
                        className: "flex justify-center",
                        children: [(0,
                        s.jsxs)("svg", {
                            "aria-hidden": "true",
                            className: "w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",
                            viewBox: "0 0 100 101",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0,
                            s.jsx)("path", {
                                d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                                fill: "currentColor"
                            }), (0,
                            s.jsx)("path", {
                                d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                                fill: "currentFill"
                            })]
                        }), (0,
                        s.jsx)("span", {
                            className: "sr-only",
                            children: "Loading..."
                        })]
                    })]
                })]
            })
        }
          , g = JSON.parse('[{"instituteCode":"38033","instituteName":"Barguna Polytechnic Institute","instituteDistrict":"Barguna"},{"instituteCode":"42045","instituteName":"Barisal Polytechnic Institute","instituteDistrict":"Barisal"},{"instituteCode":"40029","instituteName":"Bhola Polytechnic Institute","instituteDistrict":"Bhola"},{"instituteCode":"20099","instituteName":"Bogra Polytechnic Institute","instituteDistrict":"Bogra"},{"instituteCode":"64024","instituteName":"Brahmanbaria Polytechnic Institute","instituteDistrict":"Brahmanbaria"},{"instituteCode":"66035","instituteName":"Chandpur Polytechnic Institute","instituteDistrict":"Chandpur"},{"instituteCode":"22052","instituteName":"Chapai Nawabganj Polytechnic Institute","instituteDistrict":"Chapai Nawabganj"},{"instituteCode":"70048","instituteName":"Chittagong Polytechnic Institute","instituteDistrict":"Chittagong"},{"instituteCode":"29043","instituteName":"Chuadanga Polytechnic Institute","instituteDistrict":"Chuadanga"},{"instituteCode":"65054","instituteName":"Comilla Polytechnic Institute","instituteDistrict":"Comilla"},{"instituteCode":"74009","instituteName":"Cox\'s Bazar Polytechnic Institute","instituteDistrict":"Cox\'s Bazar"},{"instituteCode":"50117","instituteName":"Dhaka Polytechnic Institute","instituteDistrict":"Dhaka"},{"instituteCode":"13085","instituteName":"Dinajpur Polytechnic Institute","instituteDistrict":"Dinajpur"},{"instituteCode":"46026","instituteName":"Faridpur Polytechnic Institute","instituteDistrict":"Faridpur"},{"instituteCode":"69015","instituteName":"Feni Polytechnic Institute","instituteDistrict":"Feni"},{"instituteCode":"53082","instituteName":"Gazipur Polytechnic Institute","instituteDistrict":"Gazipur"},{"instituteCode":"45015","instituteName":"Gopalganj Polytechnic Institute","instituteDistrict":"Gopalganj"},{"instituteCode":"63010","instituteName":"Habiganj Polytechnic Institute","instituteDistrict":"Habiganj"},{"instituteCode":"33053","instituteName":"Jessore Polytechnic Institute","instituteDistrict":"Jessore"},{"instituteCode":"35048","instituteName":"Khulna Polytechnic Institute","instituteDistrict":"Khulna"},{"instituteCode":"59060","instituteName":"Kishoreganj Polytechnic Institute","instituteDistrict":"Kishoreganj"},{"instituteCode":"17057","instituteName":"Kurigram Polytechnic Institute","instituteDistrict":"Kurigram"},{"instituteCode":"27040","instituteName":"Kushtia Polytechnic Institute","instituteDistrict":"Kushtia"},{"instituteCode":"67016","instituteName":"Lakshmipur Polytechnic Institute","instituteDistrict":"Lakshmipur"},{"instituteCode":"31036","instituteName":"Magura Polytechnic Institute","instituteDistrict":"Magura"},{"instituteCode":"62024","instituteName":"Moulvibazar Polytechnic Institute","instituteDistrict":"Moulvibazar"},{"instituteCode":"49021","instituteName":"Munshiganj Polytechnic Institute","instituteDistrict":"Munshiganj"},{"instituteCode":"57067","instituteName":"Mymensingh Polytechnic Institute","instituteDistrict":"Mymensingh"},{"instituteCode":"21064","instituteName":"Naogaon Polytechnic Institute","instituteDistrict":"Naogaon"},{"instituteCode":"51040","instituteName":"Narayanganj Polytechnic Institute","instituteDistrict":"Narayanganj"},{"instituteCode":"52041","instituteName":"Narsingdi Polytechnic Institute","instituteDistrict":"Narsingdi"},{"instituteCode":"26062","instituteName":"Pabna Polytechnic Institute","instituteDistrict":"Pabna"},{"instituteCode":"39051","instituteName":"Patuakhali Polytechnic Institute","instituteDistrict":"Patuakhali"},{"instituteCode":"23105","instituteName":"Rajshahi Polytechnic Institute","instituteDistrict":"Rajshahi"},{"instituteCode":"16058","instituteName":"Rangpur Polytechnic Institute","instituteDistrict":"Rangpur"},{"instituteCode":"34048","instituteName":"Satkhira Polytechnic Institute","instituteDistrict":"Satkhira"},{"instituteCode":"43014","instituteName":"Shariatpur Polytechnic Institute","instituteDistrict":"Shariatpur"},{"instituteCode":"56018","instituteName":"Sherpur Polytechnic Institute","instituteDistrict":"Sherpur"},{"instituteCode":"25064","instituteName":"Sirajganj Polytechnic Institute","instituteDistrict":"Sirajganj"},{"instituteCode":"61016","instituteName":"Sylhet Polytechnic Institute","instituteDistrict":"Sylhet"},{"instituteCode":"54049","instituteName":"Tangail Polytechnic Institute","instituteDistrict":"Tangail"},{"instituteCode":"12053","instituteName":"Thakurgaon Polytechnic Institute","instituteDistrict":"Thakurgaon"}]')
          , y = () => {
            let[t,e] = (0,
            m.useState)(g);
            return (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)("title", {
                    children: "Your Institute Results || BTEB Result Hub"
                }), (0,
                s.jsx)("meta", {
                    name: "description",
                    content: "Explore institute-wide diploma results from the Bangladesh Technical Education Board. Compare and analyze academic performance across different institutions."
                }), (0,
                s.jsx)("meta", {
                    name: "keywords",
                    content: "institute results, BTEB, diploma results, academic performance, Bangladesh Technical Education Board"
                }), (0,
                s.jsxs)("div", {
                    className: "py-10 px-5 sm:px-10 space-y-10",
                    children: [(0,
                    s.jsxs)("section", {
                        children: [(0,
                        s.jsxs)("header", {
                            className: "dark:text-white text-center mb-7",
                            children: [(0,
                            s.jsx)("h3", {
                                className: "text-3xl font-bold font-lato mb-1",
                                children: "Institute Results"
                            }), (0,
                            s.jsx)("p", {
                                children: "Get Overview of your Institute in One Click!"
                            })]
                        }), (0,
                        s.jsxs)("div", {
                            className: "relative mb-4",
                            children: [(0,
                            s.jsx)("input", {
                                type: "text",
                                name: "instituteSearchText",
                                id: "floating_outlined",
                                className: "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                                placeholder: "",
                                onChange: t => {
                                    e(g.filter(e => "".concat(e.instituteName, ", ").concat(e.instituteDistrict, " (").concat(e.instituteCode, ")").toLowerCase().includes(t.target.value.toLowerCase())))
                                }
                            }), (0,
                            s.jsx)("label", {
                                htmlFor: "floating_outlined",
                                className: "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1",
                                children: "Search your Institute"
                            })]
                        }), (0,
                        s.jsx)("div", {
                            className: "flex flex-col gap-2",
                            children: 0 === t.length ? (0,
                            s.jsx)("p", {
                                className: "text-lg dark:text-white",
                                children: "No Institute Found!"
                            }) : t.map(t => (0,
                            s.jsxs)(a.default, {
                                href: "/institute-results?id=".concat(t.instituteCode),
                                className: "w-fit sm:text-lg text-blue-700 dark:text-blue-500 hover:underline underline-offset-4",
                                children: [t.instituteName, ", ", t.instituteDistrict, " (", t.instituteCode, ")"]
                            }, t.instituteCode))
                        })]
                    }), (0,
                    s.jsxs)("section", {
                        children: [(0,
                        s.jsx)("h2", {
                            className: "text-xl font-semibold font-lato mb-2 dark:text-white",
                            children: "Institute Results (Explained)"
                        }), (0,
                        s.jsx)("p", {
                            children: "Here you can Select your Institute to get a Overview of Results. This list may only contain the Public Polytechnic Institute Names. But you can still get your Private Institute Results by clicking your Institute name when you View your own result!"
                        })]
                    })]
                })]
            })
        }
          , N = () => (0,
        n.useSearchParams)().get("id") ? (0,
        s.jsx)(p, {}) : (0,
        s.jsx)(y, {})
    },
    3497: function(t, e, i) {
        "use strict";
        i.d(e, {
            w: function() {
                return a
            }
        });
        let s = t => {
            for (let e = 0; e < t.length - 1; e += 2)
                [t[e],t[e + 1]] = [t[e + 1], t[e]];
            return t
        }
          , n = () => {
            let t = String(Date.now() + 18e4)
              , e = Math.floor(15 * Math.random()) + 1
              , i = [];
            for (let s of t)
                i.push(String(parseInt(s, 10) + e));
            return JSON.stringify({
                key: s(i).join("-"),
                ref: e
            })
        }
          , a = async (t, e) => {
            let i = new URLSearchParams(e)
              , s = "".concat("https://btebresulthub-server.vercel.app").concat(t);
            e && (s += "?".concat(i.toString()));
            let a = {
                validator: n()
            }
              , r = await fetch(s, {
                headers: a
            });
            return await r.json()
        }
    }
}, function(t) {
    t.O(0, [51, 844, 694, 212, 14, 231, 415, 89, 971, 23, 744], function() {
        return t(t.s = 8805)
    }),
    _N_E = t.O()
}
]);
