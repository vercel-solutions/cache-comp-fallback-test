(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/packages/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$4$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwind-merge@3.4.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$4$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/components/root-nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RootNav",
    ()=>RootNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.2-canary.15_babel-plugin-react-compiler@1.0.0_react-dom@19.3.0-canary-100fc4a_aa28d138aff5507317c089db25e7d94f/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.2-canary.15_babel-plugin-react-compiler@1.0.0_react-dom@19.3.0-canary-100fc4a_aa28d138aff5507317c089db25e7d94f/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.2-canary.15_babel-plugin-react-compiler@1.0.0_react-dom@19.3.0-canary-100fc4a_aa28d138aff5507317c089db25e7d94f/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.2-canary.15_babel-plugin-react-compiler@1.0.0_react-dom@19.3.0-canary-100fc4a_aa28d138aff5507317c089db25e7d94f/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function RootNav(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "4b37e1ef932d20d87d38b93905dea90fae00d3a3c7515f23a82e722681a4d3e0") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4b37e1ef932d20d87d38b93905dea90fae00d3a3c7515f23a82e722681a4d3e0";
    }
    const { lang } = t0;
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const exhibitPrefix = pathname.startsWith("/exhibit-b") ? "exhibit-b" : "exhibit-a";
    const homeHref = `/${exhibitPrefix}/${lang}`;
    const demo1Href = `/${exhibitPrefix}/${lang}/demo1`;
    const demo2Href = `/${exhibitPrefix}/${lang}/demo2`;
    const isHomeActive = pathname === homeHref;
    let T0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    if ($[1] !== demo1Href || $[2] !== demo2Href || $[3] !== homeHref || $[4] !== isHomeActive || $[5] !== pathname) {
        const isDemo1Active = pathname.startsWith(demo1Href);
        const isDemo2Active = pathname.startsWith(demo2Href);
        t3 = "flex gap-4";
        let t6;
        if ($[12] !== isHomeActive) {
            t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs", {
                "text-yellow-500": isHomeActive
            });
            $[12] = isHomeActive;
            $[13] = t6;
        } else {
            t6 = $[13];
        }
        if ($[14] !== homeHref || $[15] !== t6) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: homeHref,
                className: t6,
                children: "home"
            }, void 0, false, {
                fileName: "[project]/packages/components/root-nav.tsx",
                lineNumber: 45,
                columnNumber: 12
            }, this);
            $[14] = homeHref;
            $[15] = t6;
            $[16] = t4;
        } else {
            t4 = $[16];
        }
        const t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs", {
            "text-yellow-500": isDemo1Active
        });
        if ($[17] !== demo1Href || $[18] !== t7) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: demo1Href,
                className: t7,
                children: "demo one"
            }, void 0, false, {
                fileName: "[project]/packages/components/root-nav.tsx",
                lineNumber: 56,
                columnNumber: 12
            }, this);
            $[17] = demo1Href;
            $[18] = t7;
            $[19] = t5;
        } else {
            t5 = $[19];
        }
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
        t1 = demo2Href;
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs", {
            "text-yellow-500": isDemo2Active
        });
        $[1] = demo1Href;
        $[2] = demo2Href;
        $[3] = homeHref;
        $[4] = isHomeActive;
        $[5] = pathname;
        $[6] = T0;
        $[7] = t1;
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
    } else {
        T0 = $[6];
        t1 = $[7];
        t2 = $[8];
        t3 = $[9];
        t4 = $[10];
        t5 = $[11];
    }
    let t6;
    if ($[20] !== T0 || $[21] !== t1 || $[22] !== t2) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            href: t1,
            className: t2,
            children: "demo two"
        }, void 0, false, {
            fileName: "[project]/packages/components/root-nav.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[20] = T0;
        $[21] = t1;
        $[22] = t2;
        $[23] = t6;
    } else {
        t6 = $[23];
    }
    let t7;
    if ($[24] !== t3 || $[25] !== t4 || $[26] !== t5 || $[27] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: t3,
            children: [
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/packages/components/root-nav.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        $[24] = t3;
        $[25] = t4;
        $[26] = t5;
        $[27] = t6;
        $[28] = t7;
    } else {
        t7 = $[28];
    }
    return t7;
}
_s(RootNav, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = RootNav;
var _c;
__turbopack_context__.k.register(_c, "RootNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=packages_0b150c8f._.js.map