module.exports = [
"[project]/packages/lib/utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
(()=>{
    const e = new Error("Cannot find module 'clsx'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'tailwind-merge'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
function cn(...inputs) {
    return twMerge(clsx(inputs));
}
}),
"[project]/packages/components/boundary.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VisualComponentBoundary",
    ()=>VisualComponentBoundary,
    "VisualSuspenseBoundary",
    ()=>VisualSuspenseBoundary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.2-canary.15_babel-plugin-react-compiler@1.0.0_react-dom@19.3.0-canary-100fc4a_aa28d138aff5507317c089db25e7d94f/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/lib/utils.ts [app-rsc] (ecmascript)");
;
;
function VisualSuspenseBoundary({ children, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative border border-dashed border-blue-500/50 p-4 pt-8 bg-blue-500/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 -m-px px-1.5 py-0.5 text-xs text-blue-500 border-r border-b border-dashed border-blue-500/50",
                children: label || "suspense"
            }, void 0, false, {
                fileName: "[project]/packages/components/boundary.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/packages/components/boundary.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
function VisualComponentBoundary({ children, label, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("relative border border-dashed border-neutral-500/50 p-4 pt-8", className),
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 -m-px px-1.5 py-0.5 text-xs text-neutral-500 border-r border-b border-inherit",
                children: label
            }, void 0, false, {
                fileName: "[project]/packages/components/boundary.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/packages/components/boundary.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/packages/components/root-nav.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "RootNav",
    ()=>RootNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.2-canary.15_babel-plugin-react-compiler@1.0.0_react-dom@19.3.0-canary-100fc4a_aa28d138aff5507317c089db25e7d94f/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const RootNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RootNav() from the server but RootNav is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/packages/components/root-nav.tsx <module evaluation>", "RootNav");
}),
"[project]/packages/components/root-nav.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "RootNav",
    ()=>RootNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.2-canary.15_babel-plugin-react-compiler@1.0.0_react-dom@19.3.0-canary-100fc4a_aa28d138aff5507317c089db25e7d94f/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const RootNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RootNav() from the server but RootNav is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/packages/components/root-nav.tsx", "RootNav");
}),
"[project]/packages/components/root-nav.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$root$2d$nav$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/components/root-nav.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$root$2d$nav$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/packages/components/root-nav.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$root$2d$nav$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/apps/ppr-no-fallbacks/app/exhibit-b/[lang]/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RootHeader",
    ()=>RootHeader,
    "default",
    ()=>Layout,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.2-canary.15_babel-plugin-react-compiler@1.0.0_react-dom@19.3.0-canary-100fc4a_aa28d138aff5507317c089db25e7d94f/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.2-canary.15_babel-plugin-react-compiler@1.0.0_react-dom@19.3.0-canary-100fc4a_aa28d138aff5507317c089db25e7d94f/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$boundary$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/components/boundary.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$root$2d$nav$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/components/root-nav.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
async function generateStaticParams() {
    return [
        {
            lang: "_"
        }
    ];
}
async function RootHeader({ lang }) {
    const l = await lang;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Cache Components and Suspense UX Demos (No Suspense in Root Layout)"
            }, void 0, false, {
                fileName: "[project]/apps/ppr-no-fallbacks/app/exhibit-b/[lang]/layout.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$root$2d$nav$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RootNav"], {
                lang: l
            }, void 0, false, {
                fileName: "[project]/apps/ppr-no-fallbacks/app/exhibit-b/[lang]/layout.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/ppr-no-fallbacks/app/exhibit-b/[lang]/layout.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function Layout({ children, params }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: "dark flex justify-center items-center h-svh",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "fixed top-0 left-0 right-0 flex justify-center items-center gap-4 py-4 z-50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/exhibit-a/en",
                            className: "text-xs",
                            prefetch: false,
                            children: "exhibit a"
                        }, void 0, false, {
                            fileName: "[project]/apps/ppr-no-fallbacks/app/exhibit-b/[lang]/layout.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/exhibit-b/en",
                            className: "text-xs text-yellow-500",
                            prefetch: false,
                            children: "exhibit b"
                        }, void 0, false, {
                            fileName: "[project]/apps/ppr-no-fallbacks/app/exhibit-b/[lang]/layout.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/ppr-no-fallbacks/app/exhibit-b/[lang]/layout.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$boundary$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VisualComponentBoundary"], {
                    label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-red-500/60",
                        children: "/exhibit-b/[lang]/layout.tsx"
                    }, void 0, false, {
                        fileName: "[project]/apps/ppr-no-fallbacks/app/exhibit-b/[lang]/layout.tsx",
                        lineNumber: 43,
                        columnNumber: 13
                    }, void 0),
                    className: "w-full max-w-4xl h-full max-h-[720px] p-8 px-16 pt-12 border-red-500/30 border-solid",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-6 w-full h-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(RootHeader, {
                                lang: params.then((p)=>p.lang)
                            }, void 0, false, {
                                fileName: "[project]/apps/ppr-no-fallbacks/app/exhibit-b/[lang]/layout.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            children
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/ppr-no-fallbacks/app/exhibit-b/[lang]/layout.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/ppr-no-fallbacks/app/exhibit-b/[lang]/layout.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/ppr-no-fallbacks/app/exhibit-b/[lang]/layout.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/ppr-no-fallbacks/app/exhibit-b/[lang]/layout.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/.pnpm/next@16.0.2-canary.15_babel-plugin-react-compiler@1.0.0_react-dom@19.3.0-canary-100fc4a_aa28d138aff5507317c089db25e7d94f/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.2-canary.15_babel-plugin-react-compiler@1.0.0_react-dom@19.3.0-canary-100fc4a_aa28d138aff5507317c089db25e7d94f/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/node_modules/.pnpm/next@16.0.2-canary.15_babel-plugin-react-compiler@1.0.0_react-dom@19.3.0-canary-100fc4a_aa28d138aff5507317c089db25e7d94f/node_modules/next/dist/client/app-dir/link.js <module evaluation>"));
}),
"[project]/node_modules/.pnpm/next@16.0.2-canary.15_babel-plugin-react-compiler@1.0.0_react-dom@19.3.0-canary-100fc4a_aa28d138aff5507317c089db25e7d94f/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy)", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.2-canary.15_babel-plugin-react-compiler@1.0.0_react-dom@19.3.0-canary-100fc4a_aa28d138aff5507317c089db25e7d94f/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/node_modules/.pnpm/next@16.0.2-canary.15_babel-plugin-react-compiler@1.0.0_react-dom@19.3.0-canary-100fc4a_aa28d138aff5507317c089db25e7d94f/node_modules/next/dist/client/app-dir/link.js"));
}),
"[project]/node_modules/.pnpm/next@16.0.2-canary.15_babel-plugin-react-compiler@1.0.0_react-dom@19.3.0-canary-100fc4a_aa28d138aff5507317c089db25e7d94f/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.2-canary.15_babel-plugin-react-compiler@1.0.0_react-dom@19.3.0-canary-100fc4a_aa28d138aff5507317c089db25e7d94f/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.2-canary.15_babel-plugin-react-compiler@1.0.0_react-dom@19.3.0-canary-100fc4a_aa28d138aff5507317c089db25e7d94f/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$15_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$3$2e$0$2d$canary$2d$100fc4a_aa28d138aff5507317c089db25e7d94f$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/node_modules/.pnpm/next@16.0.2-canary.15_babel-plugin-react-compiler@1.0.0_react-dom@19.3.0-canary-100fc4a_aa28d138aff5507317c089db25e7d94f/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return _link.useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-rsc] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.2-canary.15_babel-plugin-react-compiler@1.0.0_react-dom@19.3.0-canary-100fc4a_aa28d138aff5507317c089db25e7d94f/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
const _link = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.2-canary.15_babel-plugin-react-compiler@1.0.0_react-dom@19.3.0-canary-100fc4a_aa28d138aff5507317c089db25e7d94f/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)"));
function LinkComponent(props) {
    const isLegacyBehavior = props.legacyBehavior;
    const childIsHostComponent = typeof props.children === 'string' || typeof props.children === 'number' || typeof props.children?.type === 'string';
    const childIsClientComponent = props.children?.type?.$$typeof === Symbol.for('react.client.reference');
    if (isLegacyBehavior && !childIsHostComponent && !childIsClientComponent) {
        if (props.children?.type?.$$typeof === Symbol.for('react.lazy')) {
            console.error(`Using a Lazy Component as a direct child of \`<Link legacyBehavior>\` from a Server Component is not supported. If you need legacyBehavior, wrap your Lazy Component in a Client Component that renders the Link's \`<a>\` tag.`);
        } else {
            console.error(`Using a Server Component as a direct child of \`<Link legacyBehavior>\` is not supported. If you need legacyBehavior, wrap your Server Component in a Client Component that renders the Link's \`<a>\` tag.`);
        }
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_link.default, {
        ...props
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.react-server.js.map
}),
];

//# sourceMappingURL=_a00d86e2._.js.map