import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
  useMatches
} from "/build/_shared/chunk-DEMPFQNT.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-FN3KWL4V.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// empty-module:./env.server
var require_env = __commonJS({
  "empty-module:./env.server"(exports, module) {
    module.exports = {};
  }
});

// app/utils/client/sw-hook.js
var import_react2 = __toESM(require_react());
var isMount = true;
function useSWEffect() {
  let location = useLocation();
  let matches = useMatches();
  function isPromise(p) {
    if (typeof p === "object" && typeof p.then === "function") {
      return true;
    }
    return false;
  }
  (0, import_react2.useEffect)(() => {
    var _a;
    let mounted = isMount;
    isMount = false;
    if ("serviceWorker" in navigator) {
      if (navigator.serviceWorker.controller) {
        (_a = navigator.serviceWorker.controller) == null ? void 0 : _a.postMessage({
          type: "REMIX_NAVIGATION",
          isMount: mounted,
          location,
          matches: matches.filter((route) => {
            if (route.data) {
              return Object.values(route.data).filter((elem) => {
                return isPromise(elem);
              }).length === 0;
            }
            return true;
          }),
          manifest: window.__remixManifest
        });
      } else {
        let listener = async () => {
          var _a2;
          await navigator.serviceWorker.ready;
          (_a2 = navigator.serviceWorker.controller) == null ? void 0 : _a2.postMessage({
            type: "REMIX_NAVIGATION",
            isMount: mounted,
            location,
            matches: matches.filter((route) => {
              if (route.data) {
                return Object.values(route.data).filter((elem) => {
                  return isPromise(elem);
                }).length === 0;
              }
              return true;
            }),
            manifest: window.__remixManifest
          });
        };
        navigator.serviceWorker.addEventListener("controllerchange", listener);
        return () => {
          navigator.serviceWorker.removeEventListener(
            "controllerchange",
            listener
          );
        };
      }
    }
  }, [location, matches]);
}

// app/root.jsx
var import_env = __toESM(require_env());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => ({
  charset: "utf-8",
  title: "vocabify",
  viewport: "width=device-width,initial-scale=1",
  description: "Personal AI-powered vocabulary teacher.",
  "og:image": "https://vocabify.vercel.app/social.png"
});
function App() {
  const data = useLoaderData();
  useSWEffect();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 28,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", { rel: "manifest", href: "/resources/manifest.webmanifest" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 29,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 30,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 27,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 33,
        columnNumber: 5
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 33,
        columnNumber: 16
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 33,
        columnNumber: 38
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `window.ENV=${JSON.stringify(data.ENV)}`
          }
        },
        void 0,
        false,
        {
          fileName: "app/root.jsx",
          lineNumber: 34,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 39,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 32,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 26,
    columnNumber: 3
  }, this);
}
export {
  App as default,
  meta
};
//# sourceMappingURL=/build/root-GCSAT3UE.js.map
