import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-FN3KWL4V.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// node_modules/regenerator-runtime/runtime.js
var require_runtime = __commonJS({
  "node_modules/regenerator-runtime/runtime.js"(exports, module) {
    var runtime = function(exports2) {
      "use strict";
      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
      };
      var undefined2;
      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
      function define2(obj, key, value) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return obj[key];
      }
      try {
        define2({}, "");
      } catch (err) {
        define2 = function(obj, key, value) {
          return obj[key] = value;
        };
      }
      function wrap(innerFn, outerFn, self2, tryLocsList) {
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self2, context) });
        return generator;
      }
      exports2.wrap = wrap;
      function tryCatch(fn, obj, arg) {
        try {
          return { type: "normal", arg: fn.call(obj, arg) };
        } catch (err) {
          return { type: "throw", arg: err };
        }
      }
      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed";
      var ContinueSentinel = {};
      function Generator() {
      }
      function GeneratorFunction() {
      }
      function GeneratorFunctionPrototype() {
      }
      var IteratorPrototype = {};
      define2(IteratorPrototype, iteratorSymbol, function() {
        return this;
      });
      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
      if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        IteratorPrototype = NativeIteratorPrototype;
      }
      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = GeneratorFunctionPrototype;
      defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
      defineProperty(
        GeneratorFunctionPrototype,
        "constructor",
        { value: GeneratorFunction, configurable: true }
      );
      GeneratorFunction.displayName = define2(
        GeneratorFunctionPrototype,
        toStringTagSymbol,
        "GeneratorFunction"
      );
      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function(method) {
          define2(prototype, method, function(arg) {
            return this._invoke(method, arg);
          });
        });
      }
      exports2.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
      };
      exports2.mark = function(genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;
          define2(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
      };
      exports2.awrap = function(arg) {
        return { __await: arg };
      };
      function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);
          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;
            if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
              return PromiseImpl.resolve(value.__await).then(function(value2) {
                invoke("next", value2, resolve, reject);
              }, function(err) {
                invoke("throw", err, resolve, reject);
              });
            }
            return PromiseImpl.resolve(value).then(function(unwrapped) {
              result.value = unwrapped;
              resolve(result);
            }, function(error) {
              return invoke("throw", error, resolve, reject);
            });
          }
        }
        var previousPromise;
        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function(resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(
            callInvokeWithMethodAndArg,
            callInvokeWithMethodAndArg
          ) : callInvokeWithMethodAndArg();
        }
        defineProperty(this, "_invoke", { value: enqueue });
      }
      defineIteratorMethods(AsyncIterator.prototype);
      define2(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
      });
      exports2.AsyncIterator = AsyncIterator;
      exports2.async = function(innerFn, outerFn, self2, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0)
          PromiseImpl = Promise;
        var iter = new AsyncIterator(
          wrap(innerFn, outerFn, self2, tryLocsList),
          PromiseImpl
        );
        return exports2.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
      };
      function makeInvokeMethod(innerFn, self2, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }
          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            }
            return doneResult();
          }
          context.method = method;
          context.arg = arg;
          while (true) {
            var delegate = context.delegate;
            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);
              if (delegateResult) {
                if (delegateResult === ContinueSentinel)
                  continue;
                return delegateResult;
              }
            }
            if (context.method === "next") {
              context.sent = context._sent = context.arg;
            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }
              context.dispatchException(context.arg);
            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }
            state = GenStateExecuting;
            var record = tryCatch(innerFn, self2, context);
            if (record.type === "normal") {
              state = context.done ? GenStateCompleted : GenStateSuspendedYield;
              if (record.arg === ContinueSentinel) {
                continue;
              }
              return {
                value: record.arg,
                done: context.done
              };
            } else if (record.type === "throw") {
              state = GenStateCompleted;
              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      }
      function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method;
        var method = delegate.iterator[methodName];
        if (method === undefined2) {
          context.delegate = null;
          if (methodName === "throw" && delegate.iterator["return"]) {
            context.method = "return";
            context.arg = undefined2;
            maybeInvokeDelegate(delegate, context);
            if (context.method === "throw") {
              return ContinueSentinel;
            }
          }
          if (methodName !== "return") {
            context.method = "throw";
            context.arg = new TypeError(
              "The iterator does not provide a '" + methodName + "' method"
            );
          }
          return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }
        if (info.done) {
          context[delegate.resultName] = info.value;
          context.next = delegate.nextLoc;
          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined2;
          }
        } else {
          return info;
        }
        context.delegate = null;
        return ContinueSentinel;
      }
      defineIteratorMethods(Gp);
      define2(Gp, toStringTagSymbol, "Generator");
      define2(Gp, iteratorSymbol, function() {
        return this;
      });
      define2(Gp, "toString", function() {
        return "[object Generator]";
      });
      function pushTryEntry(locs) {
        var entry = { tryLoc: locs[0] };
        if (1 in locs) {
          entry.catchLoc = locs[1];
        }
        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
      }
      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }
      function Context(tryLocsList) {
        this.tryEntries = [{ tryLoc: "root" }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }
      exports2.keys = function(val) {
        var object = Object(val);
        var keys = [];
        for (var key in object) {
          keys.push(key);
        }
        keys.reverse();
        return function next() {
          while (keys.length) {
            var key2 = keys.pop();
            if (key2 in object) {
              next.value = key2;
              next.done = false;
              return next;
            }
          }
          next.done = true;
          return next;
        };
      };
      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];
          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }
          if (typeof iterable.next === "function") {
            return iterable;
          }
          if (!isNaN(iterable.length)) {
            var i = -1, next = function next2() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next2.value = iterable[i];
                  next2.done = false;
                  return next2;
                }
              }
              next2.value = undefined2;
              next2.done = true;
              return next2;
            };
            return next.next = next;
          }
        }
        return { next: doneResult };
      }
      exports2.values = values;
      function doneResult() {
        return { value: undefined2, done: true };
      }
      Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
          this.prev = 0;
          this.next = 0;
          this.sent = this._sent = undefined2;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined2;
          this.tryEntries.forEach(resetTryEntry);
          if (!skipTempReset) {
            for (var name in this) {
              if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined2;
              }
            }
          }
        },
        stop: function() {
          this.done = true;
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;
          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }
          return this.rval;
        },
        dispatchException: function(exception) {
          if (this.done) {
            throw exception;
          }
          var context = this;
          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;
            if (caught) {
              context.method = "next";
              context.arg = undefined2;
            }
            return !!caught;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;
            if (entry.tryLoc === "root") {
              return handle("end");
            }
            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");
              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },
        abrupt: function(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }
          if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            finallyEntry = null;
          }
          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;
          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }
          return this.complete(record);
        },
        complete: function(record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }
          if (record.type === "break" || record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }
          return ContinueSentinel;
        },
        finish: function(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },
        "catch": function(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;
              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }
              return thrown;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName,
            nextLoc
          };
          if (this.method === "next") {
            this.arg = undefined2;
          }
          return ContinueSentinel;
        }
      };
      return exports2;
    }(
      typeof module === "object" ? module.exports : {}
    );
    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      if (typeof globalThis === "object") {
        globalThis.regeneratorRuntime = runtime;
      } else {
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    }
  }
});

// node_modules/@speechly/browser-client/core/speechly.es.js
var speechly_es_exports = {};
__export(speechly_es_exports, {
  AudioSourceState: () => AudioSourceState,
  BrowserClient: () => BrowserClient,
  BrowserMicrophone: () => BrowserMicrophone,
  CloudDecoder: () => CloudDecoder,
  ControllerSignal: () => ControllerSignal,
  DecoderDefaultOptions: () => DecoderDefaultOptions,
  DecoderState: () => DecoderState,
  DefaultSampleRate: () => DefaultSampleRate,
  ErrAlreadyInitialized: () => ErrAlreadyInitialized,
  ErrAlreadyStarted: () => ErrAlreadyStarted,
  ErrAlreadyStopped: () => ErrAlreadyStopped,
  ErrAppIdChangeWithoutProjectLogin: () => ErrAppIdChangeWithoutProjectLogin,
  ErrDeviceNotSupported: () => ErrDeviceNotSupported,
  ErrKeyNotFound: () => ErrKeyNotFound,
  ErrNoAudioConsent: () => ErrNoAudioConsent,
  ErrNoStorageSupport: () => ErrNoStorageSupport,
  ErrNotInitialized: () => ErrNotInitialized,
  EventCallbacks: () => EventCallbacks,
  ListenerArray: () => ListenerArray,
  SegmentState: () => SegmentState,
  StreamDefaultOptions: () => StreamDefaultOptions,
  VadDefaultOptions: () => VadDefaultOptions,
  WebsocketError: () => WebsocketError,
  WebsocketResponseType: () => WebsocketResponseType,
  WorkerSignal: () => WorkerSignal,
  stateToString: () => stateToString
});
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function stateToString(state) {
  var _a;
  return (_a = states.get(state)) !== null && _a !== void 0 ? _a : "unknown";
}
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}
function validate(uuid) {
  return typeof uuid === "string" && REGEX.test(uuid);
}
function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  if (!validate(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return stringify(rnds);
}
function fetchToken(baseUrl, projectId, appId2, deviceId, fetcher = fetch, nowFn = Date.now) {
  var _a;
  return __awaiter(this, void 0, void 0, function* () {
    let body;
    if (projectId !== void 0) {
      body = { projectId, deviceId };
    } else {
      body = { appId: appId2, deviceId };
    }
    const response = yield fetcher(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
    const json = yield response.json();
    if (response.status !== 200) {
      throw Error((_a = json.error) !== null && _a !== void 0 ? _a : `Speechly API login request failed with ${response.status}`);
    }
    if (json.access_token === void 0) {
      throw Error("Invalid login response from Speechly API");
    }
    if (!validateToken(json.access_token, projectId, appId2, deviceId, nowFn)) {
      throw Error("Invalid token received from Speechly API");
    }
    return json.access_token;
  });
}
function validateToken(token, projectId, appId2, deviceId, now = Date.now) {
  const decoded = decodeToken(token);
  if (decoded.expiresAtMs - now() < minTokenValidTime) {
    return false;
  }
  if (decoded.appId !== appId2 || decoded.projectId !== projectId) {
    return false;
  }
  if (decoded.deviceId !== deviceId) {
    return false;
  }
  return true;
}
function decodeToken(token) {
  const b = token.split(".")[1];
  let body;
  try {
    body = JSON.parse(base64.exports.decode(b));
  } catch (e) {
    throw new Error("Error decoding Speechly token!");
  }
  return {
    appId: body.appId,
    projectId: body.projectId,
    deviceId: body.deviceId,
    configId: body.configId,
    scopes: body.scope.split(" "),
    issuer: body.iss,
    audience: body.aud,
    expiresAtMs: body.exp * 1e3
  };
}
function decodeBase64(base642, enableUnicode) {
  var binaryString = atob(base642);
  if (enableUnicode) {
    var binaryView = new Uint8Array(binaryString.length);
    for (var i = 0, n = binaryString.length; i < n; ++i) {
      binaryView[i] = binaryString.charCodeAt(i);
    }
    return String.fromCharCode.apply(null, new Uint16Array(binaryView.buffer));
  }
  return binaryString;
}
function createURL(base642, sourcemapArg, enableUnicodeArg) {
  var sourcemap = sourcemapArg === void 0 ? null : sourcemapArg;
  var enableUnicode = enableUnicodeArg === void 0 ? false : enableUnicodeArg;
  var source = decodeBase64(base642, enableUnicode);
  var start = source.indexOf("\n", 10) + 1;
  var body = source.substring(start) + (sourcemap ? "//# sourceMappingURL=" + sourcemap : "");
  var blob = new Blob([body], { type: "application/javascript" });
  return URL.createObjectURL(blob);
}
function createBase64WorkerFactory(base642, sourcemapArg, enableUnicodeArg) {
  var url;
  return function WorkerFactory2(options) {
    url = url || createURL(base642, sourcemapArg, enableUnicodeArg);
    return new Worker(url, options);
  };
}
function parseTentativeTranscript(data, timeOffset) {
  return data.words.map(({ word, index, start_timestamp, end_timestamp }) => {
    return {
      value: word,
      index,
      startTimestamp: start_timestamp + timeOffset,
      endTimestamp: end_timestamp + timeOffset,
      isFinal: false
    };
  });
}
function parseTranscript(data, timeOffset) {
  return {
    value: data.word,
    index: data.index,
    startTimestamp: data.start_timestamp + timeOffset,
    endTimestamp: data.end_timestamp + timeOffset,
    isFinal: true
  };
}
function parseTentativeEntities(data) {
  return data.entities.map(({ entity, value, start_position, end_position }) => {
    return {
      type: entity,
      value,
      startPosition: start_position,
      endPosition: end_position,
      isFinal: false
    };
  });
}
function parseEntity(data) {
  return {
    type: data.entity,
    value: data.value,
    startPosition: data.start_position,
    endPosition: data.end_position,
    isFinal: true
  };
}
function parseIntent(data, isFinal) {
  return {
    intent: data.intent,
    isFinal
  };
}
function generateWsUrl(baseUrl, sampleRate) {
  const params = new URLSearchParams();
  params.append("sampleRate", sampleRate.toString());
  return `${baseUrl}?${params.toString()}`;
}
function iOS() {
  const iosPlatforms = ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"];
  return iosPlatforms.indexOf(navigator.platform) >= 0 || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
var ErrDeviceNotSupported, ErrAppIdChangeWithoutProjectLogin, WebsocketError, DefaultSampleRate, SegmentState, ErrNotInitialized, ErrAlreadyInitialized, ErrNoAudioConsent, AudioSourceState, BrowserMicrophone, WebsocketResponseType, WorkerSignal, ControllerSignal, ErrNoStorageSupport, ErrKeyNotFound, DecoderDefaultOptions, VadDefaultOptions, StreamDefaultOptions, DecoderState, ListenerArray, EventCallbacks, ErrAlreadyStarted, ErrAlreadyStopped, states, getRandomValues, rnds8, REGEX, byteToHex, i, commonjsGlobal, base64, minTokenValidTime, WorkerFactory, WebWorkerController, LocalStorage, deviceIdStorageKey, authTokenKey, CloudDecoder, audioworklet, BrowserClient;
var init_speechly_es = __esm({
  "node_modules/@speechly/browser-client/core/speechly.es.js"() {
    ErrDeviceNotSupported = new Error("Current device does not support microphone API");
    ErrAppIdChangeWithoutProjectLogin = new Error("AppId changed without project login");
    WebsocketError = class extends Error {
      constructor(reason, code, wasClean, ...params) {
        super(...params);
        this.name = `WebsocketError code ${code}`;
        this.message = reason;
        this.code = code;
        this.wasClean = wasClean;
      }
    };
    DefaultSampleRate = 16e3;
    SegmentState = class {
      constructor(contextId, segmentIndex) {
        this.isFinalized = false;
        this.words = [];
        this.entities = /* @__PURE__ */ new Map();
        this.intent = { intent: "", isFinal: false };
        this.contextId = contextId;
        this.id = segmentIndex;
      }
      toSegment() {
        let i = 0;
        const entities = new Array(this.entities.size);
        this.entities.forEach((v) => {
          entities[i] = v;
          i++;
        });
        return {
          id: this.id,
          contextId: this.contextId,
          isFinal: this.isFinalized,
          words: this.words,
          entities,
          intent: this.intent
        };
      }
      toString() {
        const segment = this.toSegment();
        const words = segment.words.filter((w) => w.value);
        const cleanSegment = Object.assign(Object.assign({}, segment), { words });
        return JSON.stringify(cleanSegment, null, 2);
      }
      updateTranscript(words) {
        words.forEach((w) => {
          if (!this.isFinalized || w.isFinal) {
            this.words[w.index] = w;
          }
        });
        return this;
      }
      updateEntities(entities) {
        entities.forEach((e) => {
          if (!this.isFinalized || e.isFinal) {
            this.entities.set(this.entityMapKey(e), e);
          }
        });
        return this;
      }
      updateIntent(intent) {
        if (!this.isFinalized || intent.isFinal) {
          this.intent = intent;
        }
        return this;
      }
      finalize() {
        this.entities.forEach((val, key) => {
          if (!val.isFinal) {
            this.entities.delete(key);
          }
        });
        this.words = this.words.filter((w) => w.isFinal);
        if (!this.intent.isFinal) {
          this.intent.intent = "";
          this.intent.isFinal = true;
        }
        this.isFinalized = true;
        return this;
      }
      entityMapKey(e) {
        return `${e.startPosition.toString()}:${e.endPosition.toString()}`;
      }
    };
    ErrNotInitialized = new Error("Microphone is not initialized");
    ErrAlreadyInitialized = new Error("Microphone is already initialized");
    ErrNoAudioConsent = new Error("Microphone consent is not given");
    (function(AudioSourceState2) {
      AudioSourceState2["NoAudioConsent"] = "NoAudioConsent";
      AudioSourceState2["NoBrowserSupport"] = "NoBrowserSupport";
      AudioSourceState2["Stopped"] = "Stopped";
      AudioSourceState2["Starting"] = "Starting";
      AudioSourceState2["Started"] = "Started";
    })(AudioSourceState || (AudioSourceState = {}));
    BrowserMicrophone = class {
      constructor() {
        this.muted = false;
        this.initialized = false;
        this.state = AudioSourceState.Stopped;
        this.debug = false;
        this.stateChangeCbs = [];
        try {
          const constraints = window.navigator.mediaDevices.getSupportedConstraints();
          this.nativeResamplingSupported = constraints.sampleRate === true;
          this.autoGainControlSupported = constraints.autoGainControl === true;
        } catch (_a) {
          this.nativeResamplingSupported = false;
          this.autoGainControlSupported = false;
        }
      }
      onStateChange(cb) {
        this.stateChangeCbs.push(cb);
      }
      initialize() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
          if (this.initialized) {
            return;
          }
          if (((_a = window.navigator) === null || _a === void 0 ? void 0 : _a.mediaDevices) === void 0) {
            this.setState(AudioSourceState.NoBrowserSupport);
            throw ErrDeviceNotSupported;
          }
          const mediaStreamConstraints = {
            video: false
          };
          if (this.nativeResamplingSupported || this.autoGainControlSupported) {
            mediaStreamConstraints.audio = {
              sampleRate: DefaultSampleRate,
              autoGainControl: this.autoGainControlSupported
            };
          } else {
            mediaStreamConstraints.audio = true;
          }
          try {
            this.setState(AudioSourceState.Starting);
            this.mediaStream = yield window.navigator.mediaDevices.getUserMedia(mediaStreamConstraints);
          } catch (err) {
            this.setState(AudioSourceState.NoAudioConsent);
            console.error(err);
            throw ErrNoAudioConsent;
          }
          this.initialized = true;
          this.muted = true;
          this.setState(AudioSourceState.Started);
        });
      }
      setState(newState) {
        if (this.state === newState) {
          return;
        }
        if (this.debug) {
          console.log("[BrowserMicrophone]", this.state, "->", newState);
        }
        this.state = newState;
        this.stateChangeCbs.forEach((cb) => cb(newState));
      }
      close() {
        return __awaiter(this, void 0, void 0, function* () {
          if (!this.initialized)
            return;
          this.muted = true;
          const stream = this.mediaStream;
          stream.getTracks().forEach((t) => t.stop());
          this.mediaStream = void 0;
          this.initialized = false;
          this.setState(AudioSourceState.Stopped);
        });
      }
      isRecording() {
        return !this.muted;
      }
    };
    (function(WebsocketResponseType2) {
      WebsocketResponseType2["Started"] = "started";
      WebsocketResponseType2["Stopped"] = "stopped";
      WebsocketResponseType2["SegmentEnd"] = "segment_end";
      WebsocketResponseType2["Transcript"] = "transcript";
      WebsocketResponseType2["Entity"] = "entity";
      WebsocketResponseType2["Intent"] = "intent";
      WebsocketResponseType2["TentativeTranscript"] = "tentative_transcript";
      WebsocketResponseType2["TentativeEntities"] = "tentative_entities";
      WebsocketResponseType2["TentativeIntent"] = "tentative_intent";
    })(WebsocketResponseType || (WebsocketResponseType = {}));
    (function(WorkerSignal2) {
      WorkerSignal2["Opened"] = "WEBSOCKET_OPEN";
      WorkerSignal2["Closed"] = "WEBSOCKET_CLOSED";
      WorkerSignal2["AudioProcessorReady"] = "SOURCE_SAMPLE_RATE_SET_SUCCESS";
      WorkerSignal2["VadSignalHigh"] = "VadSignalHigh";
      WorkerSignal2["VadSignalLow"] = "VadSignalLow";
      WorkerSignal2["RequestContextStart"] = "RequestContextStart";
    })(WorkerSignal || (WorkerSignal = {}));
    (function(ControllerSignal2) {
      ControllerSignal2["connect"] = "connect";
      ControllerSignal2["initAudioProcessor"] = "initAudioProcessor";
      ControllerSignal2["adjustAudioProcessor"] = "adjustAudioProcessor";
      ControllerSignal2["SET_SHARED_ARRAY_BUFFERS"] = "SET_SHARED_ARRAY_BUFFERS";
      ControllerSignal2["CLOSE"] = "CLOSE";
      ControllerSignal2["START_CONTEXT"] = "START_CONTEXT";
      ControllerSignal2["SWITCH_CONTEXT"] = "SWITCH_CONTEXT";
      ControllerSignal2["STOP_CONTEXT"] = "STOP_CONTEXT";
      ControllerSignal2["AUDIO"] = "AUDIO";
      ControllerSignal2["startStream"] = "startStream";
      ControllerSignal2["stopStream"] = "stopStream";
      ControllerSignal2["setContextOptions"] = "setContextOptions";
    })(ControllerSignal || (ControllerSignal = {}));
    ErrNoStorageSupport = new Error("Current device does not support storage API");
    ErrKeyNotFound = new Error("Requested key was not present in storage");
    DecoderDefaultOptions = {
      connect: true,
      apiUrl: "https://api.speechly.com",
      sampleRate: DefaultSampleRate,
      debug: false,
      logSegments: false,
      frameMillis: 30,
      historyFrames: 5
    };
    VadDefaultOptions = {
      enabled: false,
      controlListening: true,
      signalToNoiseDb: 3,
      noiseGateDb: -24,
      noiseLearnHalftimeMillis: 400,
      signalSearchFrames: 5,
      signalActivation: 0.7,
      signalRelease: 0.2,
      signalSustainMillis: 3e3
    };
    StreamDefaultOptions = {
      preserveSegments: false,
      sampleRate: DefaultSampleRate,
      immediate: false,
      autoStarted: false
    };
    (function(DecoderState2) {
      DecoderState2[DecoderState2["Failed"] = 0] = "Failed";
      DecoderState2[DecoderState2["Disconnected"] = 1] = "Disconnected";
      DecoderState2[DecoderState2["Connected"] = 2] = "Connected";
      DecoderState2[DecoderState2["Active"] = 3] = "Active";
    })(DecoderState || (DecoderState = {}));
    ListenerArray = class extends Array {
      addEventListener(e) {
        this.push(e);
      }
      removeEventListener(e) {
        const index = this.findIndex((cb) => cb === e);
        if (index >= 0) {
          this.splice(index, 1);
        }
      }
    };
    EventCallbacks = class {
      constructor() {
        this.stateChangeCbs = new ListenerArray();
        this.transcriptCbs = new ListenerArray();
        this.entityCbs = new ListenerArray();
        this.intentCbs = new ListenerArray();
        this.segmentChangeCbs = new ListenerArray();
        this.tentativeTranscriptCbs = new ListenerArray();
        this.tentativeEntityCbs = new ListenerArray();
        this.tentativeIntentCbs = new ListenerArray();
        this.contextStartedCbs = new ListenerArray();
        this.contextStoppedCbs = new ListenerArray();
        this.onVadStateChange = new ListenerArray();
      }
    };
    ErrAlreadyStarted = new Error("BrowserClient already started");
    ErrAlreadyStopped = new Error("BrowserClient already stopped");
    states = /* @__PURE__ */ new Map([
      [DecoderState.Failed, "Failed"],
      [DecoderState.Disconnected, "Disconnected"],
      [DecoderState.Connected, "Connected"],
      [DecoderState.Active, "Active"]
    ]);
    rnds8 = new Uint8Array(16);
    REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    byteToHex = [];
    for (i = 0; i < 256; ++i) {
      byteToHex.push((i + 256).toString(16).substr(1));
    }
    commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    base64 = { exports: {} };
    (function(module, exports) {
      (function(root) {
        var freeExports = exports;
        var freeModule = module && module.exports == freeExports && module;
        var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal;
        if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
          root = freeGlobal;
        }
        var InvalidCharacterError = function(message) {
          this.message = message;
        };
        InvalidCharacterError.prototype = new Error();
        InvalidCharacterError.prototype.name = "InvalidCharacterError";
        var error = function(message) {
          throw new InvalidCharacterError(message);
        };
        var TABLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var REGEX_SPACE_CHARACTERS = /[\t\n\f\r ]/g;
        var decode = function(input) {
          input = String(input).replace(REGEX_SPACE_CHARACTERS, "");
          var length = input.length;
          if (length % 4 == 0) {
            input = input.replace(/==?$/, "");
            length = input.length;
          }
          if (length % 4 == 1 || /[^+a-zA-Z0-9/]/.test(input)) {
            error(
              "Invalid character: the string to be decoded is not correctly encoded."
            );
          }
          var bitCounter = 0;
          var bitStorage;
          var buffer;
          var output = "";
          var position = -1;
          while (++position < length) {
            buffer = TABLE.indexOf(input.charAt(position));
            bitStorage = bitCounter % 4 ? bitStorage * 64 + buffer : buffer;
            if (bitCounter++ % 4) {
              output += String.fromCharCode(
                255 & bitStorage >> (-2 * bitCounter & 6)
              );
            }
          }
          return output;
        };
        var encode = function(input) {
          input = String(input);
          if (/[^\0-\xFF]/.test(input)) {
            error(
              "The string to be encoded contains characters outside of the Latin1 range."
            );
          }
          var padding = input.length % 3;
          var output = "";
          var position = -1;
          var a;
          var b;
          var c;
          var buffer;
          var length = input.length - padding;
          while (++position < length) {
            a = input.charCodeAt(position) << 16;
            b = input.charCodeAt(++position) << 8;
            c = input.charCodeAt(++position);
            buffer = a + b + c;
            output += TABLE.charAt(buffer >> 18 & 63) + TABLE.charAt(buffer >> 12 & 63) + TABLE.charAt(buffer >> 6 & 63) + TABLE.charAt(buffer & 63);
          }
          if (padding == 2) {
            a = input.charCodeAt(position) << 8;
            b = input.charCodeAt(++position);
            buffer = a + b;
            output += TABLE.charAt(buffer >> 10) + TABLE.charAt(buffer >> 4 & 63) + TABLE.charAt(buffer << 2 & 63) + "=";
          } else if (padding == 1) {
            buffer = input.charCodeAt(position);
            output += TABLE.charAt(buffer >> 2) + TABLE.charAt(buffer << 4 & 63) + "==";
          }
          return output;
        };
        var base642 = {
          "encode": encode,
          "decode": decode,
          "version": "0.1.0"
        };
        if (freeExports && !freeExports.nodeType) {
          if (freeModule) {
            freeModule.exports = base642;
          } else {
            for (var key in base642) {
              base642.hasOwnProperty(key) && (freeExports[key] = base642[key]);
            }
          }
        } else {
          root.base64 = base642;
        }
      })(commonjsGlobal);
    })(base64, base64.exports);
    minTokenValidTime = 60 * 60 * 1e3;
    WorkerFactory = createBase64WorkerFactory("Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwp2YXIgd29ya2VyX2NvZGUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHsKICAgICd1c2Ugc3RyaWN0JzsKCiAgICAvKioKICAgICAqIEBpbnRlcm5hbAogICAgICovCiAgICBjbGFzcyBBdWRpb1Rvb2xzIHsKICAgICAgICBzdGF0aWMgZG93bnNhbXBsZShzcmMsIGRlc3QsIHNvdXJjZUluZGV4ID0gMCwgc291cmNlTGVuZ3RoID0gLTEsIGRlc3RJbmRleCA9IDAsIGRlc3RMZW5ndGggPSAtMSkgewogICAgICAgICAgICBpZiAoc291cmNlTGVuZ3RoIDwgMCkKICAgICAgICAgICAgICAgIHNvdXJjZUxlbmd0aCA9IHNyYy5sZW5ndGggLSBzb3VyY2VJbmRleDsKICAgICAgICAgICAgaWYgKGRlc3RMZW5ndGggPCAwKQogICAgICAgICAgICAgICAgZGVzdExlbmd0aCA9IGRlc3QubGVuZ3RoIC0gZGVzdEluZGV4OwogICAgICAgICAgICBpZiAoZGVzdExlbmd0aCA+IHNvdXJjZUxlbmd0aCkgewogICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBkb3duc2FtcGxlOiBzb3VyY2UgYXJyYXkgbGVuZ3RoICgke3NvdXJjZUxlbmd0aH0pIGlzIHNob3J0ZXIgdGhhbiBkZXN0aW5hdGlvbiAoJHtkZXN0TGVuZ3RofSlgKTsKICAgICAgICAgICAgfQogICAgICAgICAgICBpZiAoZGVzdExlbmd0aCA9PT0gMCkgewogICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBkb3duc2FtcGxlOiBzb3VyY2UgYXJyYXkgbGVuZ3RoICgke3NvdXJjZUxlbmd0aH0pIGNhbid0IGJlIGRvd25zYW1wbGVkIHRvIHplcm8tbGVuZ3RoIGRlc3RpbmF0aW9uLmApOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGlmIChzb3VyY2VMZW5ndGggPT09IDApIHsKICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigiQ2FuJ3QgZG93bnNhbXBsZTogc291cmNlIHJhbmdlIGNhbid0IGJlIHplcm8gbGVuZ3RoLiIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGlmIChzb3VyY2VMZW5ndGggPT09IDEpIHsKICAgICAgICAgICAgICAgIGRlc3RbMF0gPSBzcmNbMF07CiAgICAgICAgICAgICAgICByZXR1cm47CiAgICAgICAgICAgIH0KICAgICAgICAgICAgbGV0IGRlc3RJbmRleEZyYWN0aW9uID0gMC4wOwogICAgICAgICAgICBjb25zdCBkZXN0U3RlcCA9IChkZXN0TGVuZ3RoIC0gMSkgLyAoc291cmNlTGVuZ3RoIC0gMSk7CiAgICAgICAgICAgIGxldCBzdW0gPSAwOwogICAgICAgICAgICBsZXQgdG90YWxXZWlnaHQgPSAwOwogICAgICAgICAgICBjb25zdCBzb3VyY2VFbmRJbmRleCA9IHNvdXJjZUluZGV4ICsgc291cmNlTGVuZ3RoOwogICAgICAgICAgICBmb3IgKDsgc291cmNlSW5kZXggPCBzb3VyY2VFbmRJbmRleDsgc291cmNlSW5kZXgrKykgewogICAgICAgICAgICAgICAgY29uc3Qgd2VpZ2h0ID0gMC41IC0gTWF0aC5hYnMoZGVzdEluZGV4RnJhY3Rpb24pOwogICAgICAgICAgICAgICAgc3VtICs9IHNyY1tzb3VyY2VJbmRleF0gKiB3ZWlnaHQ7CiAgICAgICAgICAgICAgICB0b3RhbFdlaWdodCArPSB3ZWlnaHQ7CiAgICAgICAgICAgICAgICBkZXN0SW5kZXhGcmFjdGlvbiArPSBkZXN0U3RlcDsKICAgICAgICAgICAgICAgIGlmIChkZXN0SW5kZXhGcmFjdGlvbiA+PSAwLjUpIHsKICAgICAgICAgICAgICAgICAgICBkZXN0SW5kZXhGcmFjdGlvbiAtPSAxOwogICAgICAgICAgICAgICAgICAgIGRlc3RbZGVzdEluZGV4KytdID0gc3VtIC8gdG90YWxXZWlnaHQ7CiAgICAgICAgICAgICAgICAgICAgc3VtID0gMDsKICAgICAgICAgICAgICAgICAgICB0b3RhbFdlaWdodCA9IDA7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgLy8gUHV0IGxhc3QgdmFsdWUgaW4gcGxhY2UKICAgICAgICAgICAgaWYgKHRvdGFsV2VpZ2h0ID4gMCkgewogICAgICAgICAgICAgICAgZGVzdFtkZXN0SW5kZXgrK10gPSBzdW0gLyB0b3RhbFdlaWdodDsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgICAgICBzdGF0aWMgZ2V0RW5lcmd5KHNhbXBsZXMsIHN0YXJ0ID0gMCwgbGVuZ3RoID0gLTEpIHsKICAgICAgICAgICAgaWYgKGxlbmd0aCA8IDApCiAgICAgICAgICAgICAgICBsZW5ndGggPSBzYW1wbGVzLmxlbmd0aCAtIHN0YXJ0OwogICAgICAgICAgICBpZiAobGVuZ3RoIDw9IDApCiAgICAgICAgICAgICAgICByZXR1cm4gMDsKICAgICAgICAgICAgY29uc3QgZW5kSW5kZXggPSBzdGFydCArIGxlbmd0aDsKICAgICAgICAgICAgbGV0IHN1bUVuZXJneVNxdWFyZWQgPSAwLjA7CiAgICAgICAgICAgIGZvciAoOyBzdGFydCA8IGVuZEluZGV4OyBzdGFydCsrKSB7CiAgICAgICAgICAgICAgICBzdW1FbmVyZ3lTcXVhcmVkICs9IHNhbXBsZXNbc3RhcnRdICogc2FtcGxlc1tzdGFydF07CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydChzdW1FbmVyZ3lTcXVhcmVkIC8gbGVuZ3RoKTsKICAgICAgICB9CiAgICAgICAgc3RhdGljIGdldEF1ZGlvUGVhayhzYW1wbGVzLCBzdGFydCA9IDAsIGxlbmd0aCA9IC0xKSB7CiAgICAgICAgICAgIGlmIChsZW5ndGggPCAwKQogICAgICAgICAgICAgICAgbGVuZ3RoID0gc2FtcGxlcy5sZW5ndGggLSBzdGFydDsKICAgICAgICAgICAgaWYgKGxlbmd0aCA8PSAwKQogICAgICAgICAgICAgICAgcmV0dXJuIDA7CiAgICAgICAgICAgIGNvbnN0IGVuZEluZGV4ID0gc3RhcnQgKyBsZW5ndGg7CiAgICAgICAgICAgIGxldCBwZWFrID0gMDsKICAgICAgICAgICAgZm9yICg7IHN0YXJ0IDwgZW5kSW5kZXg7IHN0YXJ0KyspIHsKICAgICAgICAgICAgICAgIGlmIChzYW1wbGVzW3N0YXJ0XSA+IHBlYWspIHsKICAgICAgICAgICAgICAgICAgICBwZWFrID0gc2FtcGxlc1tzdGFydF07CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIHBlYWs7CiAgICAgICAgfQogICAgICAgIHN0YXRpYyBjb252ZXJ0SW50MTZUb0Zsb2F0KHNyYywgZGVzdCwgc3JjU3RhcnRTYW1wbGUgPSAwLCBsZW5ndGhTYW1wbGVzID0gLTEsIGRzdEluZGV4ID0gMCkgewogICAgICAgICAgICBpZiAobGVuZ3RoU2FtcGxlcyA8IDApCiAgICAgICAgICAgICAgICBsZW5ndGhTYW1wbGVzID0gc3JjLmxlbmd0aCAvIDIgLSBzcmNTdGFydFNhbXBsZTsKICAgICAgICAgICAgY29uc3QgbWF4TGVuID0gTWF0aC5taW4oKHNyYy5sZW5ndGggLyAyKSAtIHNyY1N0YXJ0U2FtcGxlLCBkZXN0Lmxlbmd0aCAtIGRzdEluZGV4KTsKICAgICAgICAgICAgbGVuZ3RoU2FtcGxlcyA9IE1hdGgubWluKGxlbmd0aFNhbXBsZXMsIG1heExlbik7CiAgICAgICAgICAgIGlmIChsZW5ndGhTYW1wbGVzIDw9IDApCiAgICAgICAgICAgICAgICByZXR1cm4gMDsKICAgICAgICAgICAgbGV0IGJ5dGVJbmRleCA9IHNyY1N0YXJ0U2FtcGxlICogMjsKICAgICAgICAgICAgY29uc3QgZW5kQnl0ZSA9IGJ5dGVJbmRleCArIGxlbmd0aFNhbXBsZXMgKiAyOwogICAgICAgICAgICB3aGlsZSAoYnl0ZUluZGV4IDwgZW5kQnl0ZSkgewogICAgICAgICAgICAgICAgZGVzdFtkc3RJbmRleCsrXSA9ICgoc3JjW2J5dGVJbmRleCsrXSArIChzcmNbYnl0ZUluZGV4KytdIDw8IDgpKSkgLyAweDdmZmY7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIGxlbmd0aFNhbXBsZXM7CiAgICAgICAgfQogICAgICAgIHN0YXRpYyBjb252ZXJ0RmxvYXRUb0ludDE2KHNyYywgZGVzdCwgc291cmNlSW5kZXggPSAwLCBzb3VyY2VMZW5ndGggPSAtMSwgZHN0SW5kZXggPSAwKSB7CiAgICAgICAgICAgIGlmIChzb3VyY2VMZW5ndGggPCAwKQogICAgICAgICAgICAgICAgc291cmNlTGVuZ3RoID0gc3JjLmxlbmd0aCAtIHNvdXJjZUluZGV4OwogICAgICAgICAgICBjb25zdCBlbmRJbmRleCA9IHNvdXJjZUluZGV4ICsgc291cmNlTGVuZ3RoOwogICAgICAgICAgICB3aGlsZSAoc291cmNlSW5kZXggPCBlbmRJbmRleCkgewogICAgICAgICAgICAgICAgZGVzdFtkc3RJbmRleCsrXSA9IH5+KHNyY1tzb3VyY2VJbmRleCsrXSAqIDB4N2ZmZik7IC8vIFF1aWNrIHRydW5jYXRlLCBubyByb3VuZGluZwogICAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIHN0YXRpYyBlbmVyZ3lUb0RiKGVuZXJneSkgewogICAgICAgICAgICByZXR1cm4gKDEwLjAgKiBNYXRoLmxvZyhlbmVyZ3kpIC8gQXVkaW9Ub29scy5MT0dfMl9QTFVTX0xPR181KTsKICAgICAgICB9CiAgICAgICAgc3RhdGljIGRiVG9FbmVyZ3koZGIpIHsKICAgICAgICAgICAgcmV0dXJuIE1hdGgucG93KDEwLjAsIGRiIC8gMTAuMCk7CiAgICAgICAgfQogICAgfQogICAgQXVkaW9Ub29scy5MT0dfMl9QTFVTX0xPR181ID0gTWF0aC5sb2coMikgKyBNYXRoLmxvZyg1KTsKCiAgICAvKioKICAgICAqIEBpbnRlcm5hbAogICAgICovCiAgICBjbGFzcyBBdWRpb1Byb2Nlc3NvciB7CiAgICAgICAgY29uc3RydWN0b3IoaW5wdXRTYW1wbGVSYXRlLCBvdXRwdXRTYW1wbGVSYXRlLCBmcmFtZU1pbGxpcywgaGlzdG9yeUZyYW1lcykgewogICAgICAgICAgICAvKioKICAgICAgICAgICAgICogU2VuZGluZyBzdGF0ZS4gSWYgdHJ1ZSwgQXVkaW9Qcm9jZXNzb3IgaXMgY3VycmVudGx5IHNlbmRpbmcgYXVkaW8gdmlhIG9uU2VuZEF1ZGlvIGNhbGxiYWNrCiAgICAgICAgICAgICAqLwogICAgICAgICAgICB0aGlzLmlzU2VuZGluZyA9IGZhbHNlOwogICAgICAgICAgICAvKioKICAgICAgICAgICAgICogQ3VycmVudCBjb3VudCBvZiBkb3duc2FtcGxlZCBhbmQgY29udGludW91c2x5IHByb2Nlc3NlZCBzYW1wbGVzICh0aHJ1IFByb2Nlc3NBdWRpbykgZnJvbSBzdGFydCBvZiBzdHJlYW0KICAgICAgICAgICAgICovCiAgICAgICAgICAgIHRoaXMuc3RyZWFtU2FtcGxlUG9zID0gMDsKICAgICAgICAgICAgdGhpcy5zYW1wbGVzU2VudCA9IDA7CiAgICAgICAgICAgIHRoaXMudXR0ZXJhbmNlU2VyaWFsID0gLTE7CiAgICAgICAgICAgIHRoaXMub25TZW5kQXVkaW8gPSAoc2FtcGxlcywgc3RhcnRJbmRleCwgbGVuZ3RoKSA9PiB7IH07CiAgICAgICAgICAgIHRoaXMub25WYWRTdGF0ZUNoYW5nZSA9IChpc1NpZ25hbERldGVjdGVkKSA9PiB7IH07CiAgICAgICAgICAgIHRoaXMuaW5wdXRTYW1wbGVSYXRlID0gMTYwMDA7CiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxTYW1wbGVSYXRlID0gMTYwMDA7CiAgICAgICAgICAgIHRoaXMuaGlzdG9yeUZyYW1lcyA9IDU7CiAgICAgICAgICAgIHRoaXMuZnJhbWVNaWxsaXMgPSAzMDsKICAgICAgICAgICAgdGhpcy5jdXJyZW50RnJhbWVOdW1iZXIgPSAwOwogICAgICAgICAgICB0aGlzLmZyYW1lU2FtcGxlUG9zID0gMDsKICAgICAgICAgICAgdGhpcy5zdHJlYW1GcmFtZVBvcyA9IDA7CiAgICAgICAgICAgIHRoaXMud2FzU2lnbmFsRGV0ZWN0ZWQgPSBmYWxzZTsKICAgICAgICAgICAgdGhpcy5pbnB1dFNhbXBsZVJhdGUgPSBpbnB1dFNhbXBsZVJhdGU7CiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxTYW1wbGVSYXRlID0gb3V0cHV0U2FtcGxlUmF0ZTsKICAgICAgICAgICAgdGhpcy5mcmFtZU1pbGxpcyA9IGZyYW1lTWlsbGlzOwogICAgICAgICAgICB0aGlzLmhpc3RvcnlGcmFtZXMgPSBoaXN0b3J5RnJhbWVzOwogICAgICAgICAgICB0aGlzLmZyYW1lU2FtcGxlcyA9IH5+KHRoaXMuaW50ZXJuYWxTYW1wbGVSYXRlICogdGhpcy5mcmFtZU1pbGxpcyAvIDEwMDApOwogICAgICAgICAgICB0aGlzLnNhbXBsZVJpbmdCdWZmZXIgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuZnJhbWVTYW1wbGVzICogdGhpcy5oaXN0b3J5RnJhbWVzKTsKICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICogUHJvY2VzcyBzcGVlY2ggYXVkaW8gc2FtcGxlcyBmcm9tIGEgbWljcm9waG9uZSBvciBvdGhlciBhdWRpbyBzb3VyY2UuCiAgICAgICAgICoKICAgICAgICAgKiBZb3UgY2FuIGNvbnRyb2wgd2hlbiB0byBzdGFydCBhbmQgc3RvcCBwcm9jZXNzIHNwZWVjaCBlaXRoZXIgbWFudWFsbHkgd2l0aCA8c2VlIGNyZWY9IlN0YXJ0Q29udGV4dCIvPiBhbmQgPHNlZSBjcmVmPSJTdG9wQ29udGV4dCIvPiBvcgogICAgICAgICAqIGF1dG9tYXRpY2FsbHkgYnkgcHJvdmlkaW5nIGEgdm9pY2UgYWN0aXZpdHkgZGV0ZWN0aW9uIChWQUQpIGZpZWxkIHRvIDxzZWUgY3JlZj0iU3BlZWNobHlDbGllbnQiLz4uCiAgICAgICAgICoKICAgICAgICAgKiBUaGUgYXVkaW8gaXMgaGFuZGxlZCBhcyBmb2xsb3dzOgogICAgICAgICAqIC0gRG93bnNhbXBsZSB0byAxNmtIeiBpZiBuZWVkZWQKICAgICAgICAgKiAtIEFkZCB0byBoaXN0b3J5IHJpbmdidWZmZXIKICAgICAgICAgKiAtIENhbGN1bGF0ZSBlbmVyZ3kgKFZBRCkKICAgICAgICAgKiAtIEF1dG9tYXRpYyBTdGFydC9TdG9wQ29udGV4dCAoVkFEKQogICAgICAgICAqIC0gU2VuZCB1dHRlcmFuY2UgYXVkaW8gdG8gU3BlZWNobHkgU0xVIGRlY29kZXIKICAgICAgICAgKgogICAgICAgICAqIEBwYXJhbSBmbG9hdHMgLSBBcnJheSBvZiBmbG9hdCBjb250YWluaW5nIHNhbXBsZXMgdG8gZmVlZCB0byB0aGUgYXVkaW8gcGlwZWxpbmUuIEVhY2ggc2FtcGxlIG5lZWRzIHRvIGJlIGluIHJhbmdlIC0xZi4uMWYuCiAgICAgICAgICogQHBhcmFtIHN0YXJ0IC0gU3RhcnQgaW5kZXggb2YgYXVkaW8gdG8gcHJvY2VzcyBpbiBzYW1wbGVzIChkZWZhdWx0OiBgMGApLgogICAgICAgICAqIEBwYXJhbSBsZW5ndGggLSBMZW5ndGggb2YgYXVkaW8gdG8gcHJvY2VzcyBpbiBzYW1wbGVzIG9yIGAtMWAgdG8gcHJvY2VzcyB0aGUgd2hvbGUgYXJyYXkgKGRlZmF1bHQ6IGAtMWApLgogICAgICAgICAqIEBwYXJhbSBlb3NfYXRfZW5kIC0gU3RvcFN0cmVhbSBpbnRlcm5hbGx5IHVzZXMgdGhpcyB0byBmb3JjZSBwcm9jZXNzaW5nIG9mIGxhc3Qgc3ViZnJhbWUgYXQgZW5kIG9mIGF1ZGlvIHN0cmVhbSAoZGVmYXVsdDogYGZhbHNlYCkuCiAgICAgICAgICogQHJldHVybnMKICAgICAgICAgKi8KICAgICAgICBwcm9jZXNzQXVkaW8oZmxvYXRzLCBzdGFydCA9IDAsIGxlbmd0aCA9IC0xLCBlb3NfYXRfZW5kID0gZmFsc2UpIHsKICAgICAgICAgICAgaWYgKGxlbmd0aCA8IDApCiAgICAgICAgICAgICAgICBsZW5ndGggPSBmbG9hdHMubGVuZ3RoOwogICAgICAgICAgICBpZiAobGVuZ3RoID09PSAwKSB7CiAgICAgICAgICAgICAgICBpZiAoZW9zX2F0X2VuZCkgewogICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0VvcygpOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgcmV0dXJuOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGxldCBpID0gc3RhcnQ7CiAgICAgICAgICAgIGNvbnN0IGVuZEluZGV4ID0gc3RhcnQgKyBsZW5ndGg7CiAgICAgICAgICAgIHdoaWxlIChpIDwgZW5kSW5kZXgpIHsKICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lQmFzZSA9IHRoaXMuY3VycmVudEZyYW1lTnVtYmVyICogdGhpcy5mcmFtZVNhbXBsZXM7CiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnB1dFNhbXBsZVJhdGUgPT09IHRoaXMuaW50ZXJuYWxTYW1wbGVSYXRlKSB7CiAgICAgICAgICAgICAgICAgICAgLy8gQ29weSBpbnB1dCBzYW1wbGVzIHRvIGZpbGwgY3VycmVudCByaW5nYnVmZmVyIGZyYW1lCiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2FtcGxlc1RvRmlsbEZyYW1lID0gTWF0aC5taW4oZW5kSW5kZXggLSBpLCB0aGlzLmZyYW1lU2FtcGxlcyAtIHRoaXMuZnJhbWVTYW1wbGVQb3MpOwogICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lRW5kSW5kZXggPSB0aGlzLmZyYW1lU2FtcGxlUG9zICsgc2FtcGxlc1RvRmlsbEZyYW1lOwogICAgICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLmZyYW1lU2FtcGxlUG9zIDwgZnJhbWVFbmRJbmRleCkgewogICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNhbXBsZVJpbmdCdWZmZXJbZnJhbWVCYXNlICsgdGhpcy5mcmFtZVNhbXBsZVBvcysrXSA9IGZsb2F0c1tpKytdOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgICAgICAgIC8vIERvd25zYW1wbGUgaW5wdXQgc2FtcGxlcyB0byBmaWxsIGN1cnJlbnQgcmluZ2J1ZmZlciBmcmFtZQogICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhdGlvID0gMS4wICogdGhpcy5pbnB1dFNhbXBsZVJhdGUgLyB0aGlzLmludGVybmFsU2FtcGxlUmF0ZTsKICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFNhbXBsZXNUb0ZpbGxGcmFtZSA9IE1hdGgubWluKGVuZEluZGV4IC0gaSwgTWF0aC5yb3VuZChyYXRpbyAqICh0aGlzLmZyYW1lU2FtcGxlcyAtIHRoaXMuZnJhbWVTYW1wbGVQb3MpKSk7CiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2FtcGxlc1RvRmlsbEZyYW1lID0gTWF0aC5taW4oTWF0aC5yb3VuZCgoZW5kSW5kZXggLSBpKSAvIHJhdGlvKSwgdGhpcy5mcmFtZVNhbXBsZXMgLSB0aGlzLmZyYW1lU2FtcGxlUG9zKTsKICAgICAgICAgICAgICAgICAgICBpZiAoc2FtcGxlc1RvRmlsbEZyYW1lID4gMCkgewogICAgICAgICAgICAgICAgICAgICAgICBBdWRpb1Rvb2xzLmRvd25zYW1wbGUoZmxvYXRzLCB0aGlzLnNhbXBsZVJpbmdCdWZmZXIsIGksIGlucHV0U2FtcGxlc1RvRmlsbEZyYW1lLCBmcmFtZUJhc2UgKyB0aGlzLmZyYW1lU2FtcGxlUG9zLCBzYW1wbGVzVG9GaWxsRnJhbWUpOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICBpICs9IGlucHV0U2FtcGxlc1RvRmlsbEZyYW1lOwogICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVTYW1wbGVQb3MgKz0gc2FtcGxlc1RvRmlsbEZyYW1lOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgY29uc3QgZW9zID0gaSA9PT0gZW5kSW5kZXggJiYgZW9zX2F0X2VuZDsKICAgICAgICAgICAgICAgIC8vIFByb2Nlc3MgZnJhbWUKICAgICAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lU2FtcGxlUG9zID09PSB0aGlzLmZyYW1lU2FtcGxlcyB8fCBlb3MpIHsKICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWJGcmFtZVNhbXBsZXMgPSBlb3MgPyB0aGlzLmZyYW1lU2FtcGxlUG9zIDogdGhpcy5mcmFtZVNhbXBsZXM7CiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzRnJhbWUodGhpcy5zYW1wbGVSaW5nQnVmZmVyLCBmcmFtZUJhc2UsIHN1YkZyYW1lU2FtcGxlcywgZW9zKTsKICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NlbmRpbmcpIHsKICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2FtcGxlc1NlbnQgPT09IDApIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YXJ0IG9mIHRoZSB1dHRlcmFuY2UgLSBzZW5kIGhpc3RvcnkgZnJhbWVzCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZW5kSGlzdG9yeSA9IE1hdGgubWluKHRoaXMuc3RyZWFtRnJhbWVQb3MsIHRoaXMuaGlzdG9yeUZyYW1lcyAtIDEpOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhpc3RvcnlGcmFtZUluZGV4ID0gKHRoaXMuY3VycmVudEZyYW1lTnVtYmVyICsgdGhpcy5oaXN0b3J5RnJhbWVzIC0gc2VuZEhpc3RvcnkpICUgdGhpcy5oaXN0b3J5RnJhbWVzOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGhpc3RvcnlGcmFtZUluZGV4ICE9PSB0aGlzLmN1cnJlbnRGcmFtZU51bWJlcikgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25TZW5kQXVkaW8odGhpcy5zYW1wbGVSaW5nQnVmZmVyLCBoaXN0b3J5RnJhbWVJbmRleCAqIHRoaXMuZnJhbWVTYW1wbGVzLCB0aGlzLmZyYW1lU2FtcGxlcyk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zYW1wbGVzU2VudCArPSB0aGlzLmZyYW1lU2FtcGxlczsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5RnJhbWVJbmRleCA9IChoaXN0b3J5RnJhbWVJbmRleCArIDEpICUgdGhpcy5oaXN0b3J5RnJhbWVzOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25TZW5kQXVkaW8odGhpcy5zYW1wbGVSaW5nQnVmZmVyLCBmcmFtZUJhc2UsIHN1YkZyYW1lU2FtcGxlcyk7CiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2FtcGxlc1NlbnQgKz0gc3ViRnJhbWVTYW1wbGVzOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICBpZiAoZW9zKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RyZWFtU2FtcGxlUG9zICs9IHN1YkZyYW1lU2FtcGxlczsKICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzRW9zKCk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZnJhbWVTYW1wbGVQb3MgPT09IHRoaXMuZnJhbWVTYW1wbGVzKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVTYW1wbGVQb3MgPSAwOwogICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0cmVhbUZyYW1lUG9zICs9IDE7CiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RyZWFtU2FtcGxlUG9zICs9IHN1YkZyYW1lU2FtcGxlczsKICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RnJhbWVOdW1iZXIgPSAodGhpcy5jdXJyZW50RnJhbWVOdW1iZXIgKyAxKSAlIHRoaXMuaGlzdG9yeUZyYW1lczsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICBpZiAodGhpcy52YWQpIHsKICAgICAgICAgICAgICAgICAgICB0aGlzLndhc1NpZ25hbERldGVjdGVkID0gdGhpcy52YWQuaXNTaWduYWxEZXRlY3RlZDsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgIH0KICAgICAgICBzZXRTZW5kQXVkaW8oYWN0aXZlKSB7CiAgICAgICAgICAgIHRoaXMuaXNTZW5kaW5nID0gYWN0aXZlOwogICAgICAgICAgICBpZiAoYWN0aXZlKSB7CiAgICAgICAgICAgICAgICB0aGlzLnNhbXBsZXNTZW50ID0gMDsKICAgICAgICAgICAgICAgIHRoaXMudXR0ZXJhbmNlU2VyaWFsKys7CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgcmVzZXQoaW5wdXRTYW1wbGVSYXRlKSB7CiAgICAgICAgICAgIHZhciBfYTsKICAgICAgICAgICAgdGhpcy5pc1NlbmRpbmcgPSBmYWxzZTsKICAgICAgICAgICAgdGhpcy5zdHJlYW1GcmFtZVBvcyA9IDA7CiAgICAgICAgICAgIHRoaXMuc3RyZWFtU2FtcGxlUG9zID0gMDsKICAgICAgICAgICAgdGhpcy5mcmFtZVNhbXBsZVBvcyA9IDA7CiAgICAgICAgICAgIHRoaXMuY3VycmVudEZyYW1lTnVtYmVyID0gMDsKICAgICAgICAgICAgdGhpcy51dHRlcmFuY2VTZXJpYWwgPSAtMTsKICAgICAgICAgICAgaWYgKGlucHV0U2FtcGxlUmF0ZSkKICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRTYW1wbGVSYXRlID0gaW5wdXRTYW1wbGVSYXRlOwogICAgICAgICAgICB0aGlzLndhc1NpZ25hbERldGVjdGVkID0gZmFsc2U7CiAgICAgICAgICAgIChfYSA9IHRoaXMudmFkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVzZXRWQUQoKTsKICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICogQHJldHVybnMgY3VycmVudCBwb3NpdGlvbiBpbiBzdHJlYW0gaW4gbWlsbGlzZWNvbmRzCiAgICAgICAgICovCiAgICAgICAgZ2V0U3RyZWFtUG9zaXRpb24oKSB7CiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMuc3RyZWFtU2FtcGxlUG9zIC8gdGhpcy5pbnRlcm5hbFNhbXBsZVJhdGUgKiAxMDAwKTsKICAgICAgICB9CiAgICAgICAgZW9zKCkgewogICAgICAgICAgICB0aGlzLnByb2Nlc3NBdWRpbyh0aGlzLnNhbXBsZVJpbmdCdWZmZXIsIDAsIHRoaXMuZnJhbWVTYW1wbGVQb3MsIHRydWUpOwogICAgICAgIH0KICAgICAgICBwcm9jZXNzRnJhbWUoZmxvYXRzLCBzdGFydCA9IDAsIGxlbmd0aCA9IC0xLCBlb3MgPSBmYWxzZSkgewogICAgICAgICAgICB2YXIgX2E7CiAgICAgICAgICAgIGlmICgoX2EgPSB0aGlzLnZhZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnZhZE9wdGlvbnMuZW5hYmxlZCkgewogICAgICAgICAgICAgICAgdGhpcy52YWQucHJvY2Vzc0ZyYW1lKGZsb2F0cywgc3RhcnQsIGxlbmd0aCwgZW9zKTsKICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhZC5pc1NpZ25hbERldGVjdGVkICE9PSB0aGlzLndhc1NpZ25hbERldGVjdGVkKSB7CiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblZhZFN0YXRlQ2hhbmdlKHRoaXMudmFkLmlzU2lnbmFsRGV0ZWN0ZWQpOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIHByb2Nlc3NFb3MoKSB7CiAgICAgICAgICAgIHZhciBfYTsKICAgICAgICAgICAgaWYgKHRoaXMuaXNTZW5kaW5nICYmICgoX2EgPSB0aGlzLnZhZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnZhZE9wdGlvbnMuZW5hYmxlZCkpIHsKICAgICAgICAgICAgICAgIC8vIEVuc3VyZSBWQUQgc3RhdGUgY2hhbmdlIG9uIGVuZC1vZi1zdHJlYW0KICAgICAgICAgICAgICAgIHRoaXMudmFkLnJlc2V0VkFEKCk7CiAgICAgICAgICAgICAgICB0aGlzLm9uVmFkU3RhdGVDaGFuZ2UoZmFsc2UpOwogICAgICAgICAgICB9CiAgICAgICAgfQogICAgfQoKICAgIC8qKgogICAgICogQWRhcHRpdmUgZW5lcmd5IHRocmVzaG9sZCB2b2ljZSBhY3Rpdml0eSBkZXRlY3Rpb24gKFZBRCkgaW1wbGVtZW50YXRpb24uCiAgICAgKiBJdCBjYW4gYmUgdXNlZCB0byBlbmFibGUgaGFuZHMtZnJlZSBvcGVyYXRpb24gb2YgdGhlIFNMVSBkZWNvZGVyLgogICAgICoKICAgICAqIFdoZW4gZW5vdWdoIGZyYW1lcyB3aXRoIGEgc2lnbmFsIHN0cm9uZ2VyIHRoYW4gU2lnbmFsVG9Ob2lzZURiIGhhdmUgYmVlbiBkZXRlY3RlZCwgSXNTaWduYWxEZXRlY3RlZCBnb2VzIHRydWUuIFdoZW4gZW5vdWdoIHNpbGVudCBmcmFtZXMgaGF2ZSBiZWVuIGRldGVjdGVkLCBJc1NpZ25hbERldGVjdGVkIGdvZXMgZmFsc2UgYWZ0ZXIgdGhlIHN1c3RhaW4gdGltZS4KICAgICAqIFVzZSBpdHMgcHVibGljIGZpZWxkcyB0byBjb25maWd1cmUgdGhlIHN0YXRpYyBub2lzZSBnYXRlIGxldmVsLCBzaWduYWwtdG8tbm9pc2UgbGV2ZWwsIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIHRyZXNob2xkIChyYXRpbyBvZiBzaWduYWwgdG8gc2lsZW50IGZyYW1lcykgYW5kIHRoZSBzaWduYWwgc3VzdGFpbiB0aW1lLgogICAgICogVGhlIGJhY2tncm91bmQgbm9pc2UgbGV2ZWwgZ3JhZHVhbGx5IGFkYXB0cyB3aGVuIG5vIHNpZ25hbCBpcyBkZXRlY3RlZC4KICAgICAqCiAgICAgKiBJc1NpZ25hbERldGVjdGVkIGNhbiBiZSB1c2VkIHRvIGRyaXZlIFNwZWVjaGx5Q2xpZW50J3MgU3RhcnRDb250ZXh0IGFuZCBTdG9wQ29udGV4dCBhdXRvbWF0aWNhbGx5IGJ5IHNldHRpbmcgQ29udHJvbExpc3RlbmluZyB0cnVlLgogICAgICogQGludGVybmFsCiAgICAgKi8KICAgIGNsYXNzIEVuZXJneVRyZXNob2xkVkFEIHsKICAgICAgICBjb25zdHJ1Y3RvcihmcmFtZU1pbGxpcywgdmFkT3B0aW9ucykgewogICAgICAgICAgICB0aGlzLmlzU2lnbmFsRGV0ZWN0ZWQgPSBmYWxzZTsKICAgICAgICAgICAgdGhpcy5zaWduYWxEYiA9IC05MC4wOwogICAgICAgICAgICB0aGlzLm5vaXNlTGV2ZWxEYiA9IC05MC4wOwogICAgICAgICAgICB0aGlzLmZyYW1lTWlsbGlzID0gMzA7CiAgICAgICAgICAgIHRoaXMuZW5lcmd5ID0gMC4wOwogICAgICAgICAgICB0aGlzLmJhc2VsaW5lRW5lcmd5ID0gLTEuMDsKICAgICAgICAgICAgdGhpcy5sb3VkRnJhbWVCaXRzID0gMDsKICAgICAgICAgICAgdGhpcy52YWRTdXN0YWluTWlsbGlzTGVmdCA9IDA7CiAgICAgICAgICAgIHRoaXMuZnJhbWVNaWxsaXMgPSBmcmFtZU1pbGxpczsKICAgICAgICAgICAgdGhpcy52YWRPcHRpb25zID0gdmFkT3B0aW9uczsKICAgICAgICB9CiAgICAgICAgYWRqdXN0VmFkT3B0aW9ucyh2YWRPcHRpb25zKSB7CiAgICAgICAgICAgIHRoaXMudmFkT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy52YWRPcHRpb25zKSwgdmFkT3B0aW9ucyk7CiAgICAgICAgfQogICAgICAgIHJlc2V0VkFEKCkgewogICAgICAgICAgICB0aGlzLmlzU2lnbmFsRGV0ZWN0ZWQgPSBmYWxzZTsKICAgICAgICAgICAgdGhpcy5sb3VkRnJhbWVCaXRzID0gMDsKICAgICAgICAgICAgdGhpcy5lbmVyZ3kgPSAwOwogICAgICAgICAgICB0aGlzLmJhc2VsaW5lRW5lcmd5ID0gLTE7CiAgICAgICAgfQogICAgICAgIHByb2Nlc3NGcmFtZShmbG9hdHMsIHN0YXJ0ID0gMCwgbGVuZ3RoID0gLTEsIGVvcyA9IGZhbHNlKSB7CiAgICAgICAgICAgIGlmICghdGhpcy52YWRPcHRpb25zLmVuYWJsZWQpIHsKICAgICAgICAgICAgICAgIHRoaXMucmVzZXRWQUQoKTsKICAgICAgICAgICAgICAgIHJldHVybjsKICAgICAgICAgICAgfQogICAgICAgICAgICBpZiAoZW9zKQogICAgICAgICAgICAgICAgcmV0dXJuOwogICAgICAgICAgICB0aGlzLmVuZXJneSA9IEF1ZGlvVG9vbHMuZ2V0RW5lcmd5KGZsb2F0cywgc3RhcnQsIGxlbmd0aCk7CiAgICAgICAgICAgIGlmICh0aGlzLmJhc2VsaW5lRW5lcmd5IDwgMCkgewogICAgICAgICAgICAgICAgdGhpcy5iYXNlbGluZUVuZXJneSA9IHRoaXMuZW5lcmd5OwogICAgICAgICAgICB9CiAgICAgICAgICAgIGNvbnN0IGlzTG91ZEZyYW1lID0gdGhpcy5lbmVyZ3kgPiBNYXRoLm1heChBdWRpb1Rvb2xzLmRiVG9FbmVyZ3kodGhpcy52YWRPcHRpb25zLm5vaXNlR2F0ZURiKSwgdGhpcy5iYXNlbGluZUVuZXJneSAqIEF1ZGlvVG9vbHMuZGJUb0VuZXJneSh0aGlzLnZhZE9wdGlvbnMuc2lnbmFsVG9Ob2lzZURiKSk7CiAgICAgICAgICAgIHRoaXMucHVzaEZyYW1lSGlzdG9yeShpc0xvdWRGcmFtZSk7CiAgICAgICAgICAgIHRoaXMuaXNTaWduYWxEZXRlY3RlZCA9IHRoaXMuZGV0ZXJtaW5lTmV3U2lnbmFsU3RhdGUodGhpcy5pc1NpZ25hbERldGVjdGVkKTsKICAgICAgICAgICAgdGhpcy5hZGFwdEJhY2tncm91bmROb2lzZSgpOwogICAgICAgICAgICB0aGlzLnNpZ25hbERiID0gQXVkaW9Ub29scy5lbmVyZ3lUb0RiKHRoaXMuZW5lcmd5IC8gdGhpcy5iYXNlbGluZUVuZXJneSk7CiAgICAgICAgICAgIHRoaXMubm9pc2VMZXZlbERiID0gQXVkaW9Ub29scy5lbmVyZ3lUb0RiKHRoaXMuYmFzZWxpbmVFbmVyZ3kpOwogICAgICAgIH0KICAgICAgICBkZXRlcm1pbmVOZXdTaWduYWxTdGF0ZShjdXJyZW50U3RhdGUpIHsKICAgICAgICAgICAgdGhpcy52YWRTdXN0YWluTWlsbGlzTGVmdCA9IE1hdGgubWF4KHRoaXMudmFkU3VzdGFpbk1pbGxpc0xlZnQgLSB0aGlzLmZyYW1lTWlsbGlzLCAwKTsKICAgICAgICAgICAgY29uc3QgbG91ZEZyYW1lcyA9IHRoaXMuY291bnRMb3VkRnJhbWVzKHRoaXMudmFkT3B0aW9ucy5zaWduYWxTZWFyY2hGcmFtZXMpOwogICAgICAgICAgICBjb25zdCBhY3RpdmF0aW9uRnJhbWVzID0gTWF0aC5yb3VuZCh0aGlzLnZhZE9wdGlvbnMuc2lnbmFsQWN0aXZhdGlvbiAqIHRoaXMudmFkT3B0aW9ucy5zaWduYWxTZWFyY2hGcmFtZXMpOwogICAgICAgICAgICBjb25zdCByZWxlYXNlRnJhbWVzID0gTWF0aC5yb3VuZCh0aGlzLnZhZE9wdGlvbnMuc2lnbmFsUmVsZWFzZSAqIHRoaXMudmFkT3B0aW9ucy5zaWduYWxTZWFyY2hGcmFtZXMpOwogICAgICAgICAgICBpZiAobG91ZEZyYW1lcyA+PSBhY3RpdmF0aW9uRnJhbWVzKSB7CiAgICAgICAgICAgICAgICAvLyBSZW5ldyBzdXN0YWluIHRpbWUKICAgICAgICAgICAgICAgIHRoaXMudmFkU3VzdGFpbk1pbGxpc0xlZnQgPSB0aGlzLnZhZE9wdGlvbnMuc2lnbmFsU3VzdGFpbk1pbGxpczsKICAgICAgICAgICAgICAgIHJldHVybiB0cnVlOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGlmIChsb3VkRnJhbWVzIDw9IHJlbGVhc2VGcmFtZXMgJiYgdGhpcy52YWRTdXN0YWluTWlsbGlzTGVmdCA9PT0gMCkgewogICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiBjdXJyZW50U3RhdGU7CiAgICAgICAgfQogICAgICAgIGFkYXB0QmFja2dyb3VuZE5vaXNlKCkgewogICAgICAgICAgICAvLyBHcmFkdWFsbHkgbGVhcm4gYmFja2dyb3VuZCBub2lzZSBsZXZlbAogICAgICAgICAgICBpZiAoIXRoaXMuaXNTaWduYWxEZXRlY3RlZCkgewogICAgICAgICAgICAgICAgaWYgKHRoaXMudmFkT3B0aW9ucy5ub2lzZUxlYXJuSGFsZnRpbWVNaWxsaXMgPiAwKSB7CiAgICAgICAgICAgICAgICAgICAgdmFyIGRlY2F5ID0gTWF0aC5wb3coMi4wLCAtdGhpcy5mcmFtZU1pbGxpcyAvIHRoaXMudmFkT3B0aW9ucy5ub2lzZUxlYXJuSGFsZnRpbWVNaWxsaXMpOwogICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZWxpbmVFbmVyZ3kgPSAodGhpcy5iYXNlbGluZUVuZXJneSAqIGRlY2F5KSArICh0aGlzLmVuZXJneSAqICgxIC0gZGVjYXkpKTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgIH0KICAgICAgICBwdXNoRnJhbWVIaXN0b3J5KGlzTG91ZCkgewogICAgICAgICAgICB0aGlzLmxvdWRGcmFtZUJpdHMgPSAoaXNMb3VkID8gMSA6IDApIHwgKHRoaXMubG91ZEZyYW1lQml0cyA8PCAxKTsKICAgICAgICB9CiAgICAgICAgY291bnRMb3VkRnJhbWVzKG51bUhpc3RvcnlGcmFtZXMpIHsKICAgICAgICAgICAgbGV0IG51bUFjdGl2ZUZyYW1lcyA9IDA7CiAgICAgICAgICAgIGxldCB0ID0gdGhpcy5sb3VkRnJhbWVCaXRzOwogICAgICAgICAgICB3aGlsZSAobnVtSGlzdG9yeUZyYW1lcyA+IDApIHsKICAgICAgICAgICAgICAgIGlmICgodCAmIDEpID09PSAxKQogICAgICAgICAgICAgICAgICAgIG51bUFjdGl2ZUZyYW1lcysrOwogICAgICAgICAgICAgICAgdCA9IHQgPj4gMTsKICAgICAgICAgICAgICAgIG51bUhpc3RvcnlGcmFtZXMtLTsKICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gbnVtQWN0aXZlRnJhbWVzOwogICAgICAgIH0KICAgIH0KCiAgICAvKioKICAgICAqIEtub3duIFdlYlNvY2tldCByZXNwb25zZSB0eXBlcy4KICAgICAqIEBpbnRlcm5hbAogICAgICovCiAgICB2YXIgV2Vic29ja2V0UmVzcG9uc2VUeXBlOwogICAgKGZ1bmN0aW9uIChXZWJzb2NrZXRSZXNwb25zZVR5cGUpIHsKICAgICAgICBXZWJzb2NrZXRSZXNwb25zZVR5cGVbIlN0YXJ0ZWQiXSA9ICJzdGFydGVkIjsKICAgICAgICBXZWJzb2NrZXRSZXNwb25zZVR5cGVbIlN0b3BwZWQiXSA9ICJzdG9wcGVkIjsKICAgICAgICBXZWJzb2NrZXRSZXNwb25zZVR5cGVbIlNlZ21lbnRFbmQiXSA9ICJzZWdtZW50X2VuZCI7CiAgICAgICAgV2Vic29ja2V0UmVzcG9uc2VUeXBlWyJUcmFuc2NyaXB0Il0gPSAidHJhbnNjcmlwdCI7CiAgICAgICAgV2Vic29ja2V0UmVzcG9uc2VUeXBlWyJFbnRpdHkiXSA9ICJlbnRpdHkiOwogICAgICAgIFdlYnNvY2tldFJlc3BvbnNlVHlwZVsiSW50ZW50Il0gPSAiaW50ZW50IjsKICAgICAgICBXZWJzb2NrZXRSZXNwb25zZVR5cGVbIlRlbnRhdGl2ZVRyYW5zY3JpcHQiXSA9ICJ0ZW50YXRpdmVfdHJhbnNjcmlwdCI7CiAgICAgICAgV2Vic29ja2V0UmVzcG9uc2VUeXBlWyJUZW50YXRpdmVFbnRpdGllcyJdID0gInRlbnRhdGl2ZV9lbnRpdGllcyI7CiAgICAgICAgV2Vic29ja2V0UmVzcG9uc2VUeXBlWyJUZW50YXRpdmVJbnRlbnQiXSA9ICJ0ZW50YXRpdmVfaW50ZW50IjsKICAgIH0pKFdlYnNvY2tldFJlc3BvbnNlVHlwZSB8fCAoV2Vic29ja2V0UmVzcG9uc2VUeXBlID0ge30pKTsKICAgIC8qKgogICAgICogTWVzc2FnZXMgZnJvbSB3b3JrZXIgdG8gY29udHJvbGxlcgogICAgICogQGludGVybmFsCiAgICAgKi8KICAgIHZhciBXb3JrZXJTaWduYWw7CiAgICAoZnVuY3Rpb24gKFdvcmtlclNpZ25hbCkgewogICAgICAgIFdvcmtlclNpZ25hbFsiT3BlbmVkIl0gPSAiV0VCU09DS0VUX09QRU4iOwogICAgICAgIFdvcmtlclNpZ25hbFsiQ2xvc2VkIl0gPSAiV0VCU09DS0VUX0NMT1NFRCI7CiAgICAgICAgV29ya2VyU2lnbmFsWyJBdWRpb1Byb2Nlc3NvclJlYWR5Il0gPSAiU09VUkNFX1NBTVBMRV9SQVRFX1NFVF9TVUNDRVNTIjsKICAgICAgICBXb3JrZXJTaWduYWxbIlZhZFNpZ25hbEhpZ2giXSA9ICJWYWRTaWduYWxIaWdoIjsKICAgICAgICBXb3JrZXJTaWduYWxbIlZhZFNpZ25hbExvdyJdID0gIlZhZFNpZ25hbExvdyI7CiAgICAgICAgV29ya2VyU2lnbmFsWyJSZXF1ZXN0Q29udGV4dFN0YXJ0Il0gPSAiUmVxdWVzdENvbnRleHRTdGFydCI7CiAgICB9KShXb3JrZXJTaWduYWwgfHwgKFdvcmtlclNpZ25hbCA9IHt9KSk7CiAgICAvKioKICAgICAqIE1lc3NhZ2VzIGZyb20gY29udHJvbGxlciB0byB3b3JrZXIKICAgICAqIEBpbnRlcm5hbAogICAgICovCiAgICB2YXIgQ29udHJvbGxlclNpZ25hbDsKICAgIChmdW5jdGlvbiAoQ29udHJvbGxlclNpZ25hbCkgewogICAgICAgIENvbnRyb2xsZXJTaWduYWxbImNvbm5lY3QiXSA9ICJjb25uZWN0IjsKICAgICAgICBDb250cm9sbGVyU2lnbmFsWyJpbml0QXVkaW9Qcm9jZXNzb3IiXSA9ICJpbml0QXVkaW9Qcm9jZXNzb3IiOwogICAgICAgIENvbnRyb2xsZXJTaWduYWxbImFkanVzdEF1ZGlvUHJvY2Vzc29yIl0gPSAiYWRqdXN0QXVkaW9Qcm9jZXNzb3IiOwogICAgICAgIENvbnRyb2xsZXJTaWduYWxbIlNFVF9TSEFSRURfQVJSQVlfQlVGRkVSUyJdID0gIlNFVF9TSEFSRURfQVJSQVlfQlVGRkVSUyI7CiAgICAgICAgQ29udHJvbGxlclNpZ25hbFsiQ0xPU0UiXSA9ICJDTE9TRSI7CiAgICAgICAgQ29udHJvbGxlclNpZ25hbFsiU1RBUlRfQ09OVEVYVCJdID0gIlNUQVJUX0NPTlRFWFQiOwogICAgICAgIENvbnRyb2xsZXJTaWduYWxbIlNXSVRDSF9DT05URVhUIl0gPSAiU1dJVENIX0NPTlRFWFQiOwogICAgICAgIENvbnRyb2xsZXJTaWduYWxbIlNUT1BfQ09OVEVYVCJdID0gIlNUT1BfQ09OVEVYVCI7CiAgICAgICAgQ29udHJvbGxlclNpZ25hbFsiQVVESU8iXSA9ICJBVURJTyI7CiAgICAgICAgQ29udHJvbGxlclNpZ25hbFsic3RhcnRTdHJlYW0iXSA9ICJzdGFydFN0cmVhbSI7CiAgICAgICAgQ29udHJvbGxlclNpZ25hbFsic3RvcFN0cmVhbSJdID0gInN0b3BTdHJlYW0iOwogICAgICAgIENvbnRyb2xsZXJTaWduYWxbInNldENvbnRleHRPcHRpb25zIl0gPSAic2V0Q29udGV4dE9wdGlvbnMiOwogICAgfSkoQ29udHJvbGxlclNpZ25hbCB8fCAoQ29udHJvbGxlclNpZ25hbCA9IHt9KSk7CgogICAgY29uc3QgQ09OVFJPTCA9IHsKICAgICAgICBXUklURV9JTkRFWDogMCwKICAgICAgICBGUkFNRVNfQVZBSUxBQkxFOiAxLAogICAgICAgIExPQ0s6IDIsCiAgICB9OwogICAgLyoqCiAgICAgKiBXZWIgd29ya2VyIHRvIGhhbmRsZSBzdHJlYW1pbmcgYXVkaW8gdG8gY2xvdWQgYW5kIHJlY2VpdmluZyBzcGVlY2ggcHJvY2Vzc2luZyByZXN1bHRzLgogICAgICogQWxzbyBoYW5kbGVzIGF1ZGlvIHByb2Nlc3NpbmcgbGlrZSBtYWludGFpbmluZyBoaXN0b3J5IHJpbmdidWZmZXIgYW5kIHJ1bm5pbmcgdGhlIFZBRAogICAgICogQGludGVybmFsCiAgICAgKi8KICAgIGNsYXNzIFdlYnNvY2tldENsaWVudCB7CiAgICAgICAgY29uc3RydWN0b3IoY3R4KSB7CiAgICAgICAgICAgIHRoaXMudGFyZ2V0U2FtcGxlUmF0ZSA9IDE2MDAwOwogICAgICAgICAgICB0aGlzLmlzQ29udGV4dFN0YXJ0ZWQgPSBmYWxzZTsKICAgICAgICAgICAgdGhpcy5hdWRpb0NvbnRleHRTdGFydFRpbWVzID0gW107CiAgICAgICAgICAgIHRoaXMuaW1tZWRpYXRlTW9kZSA9IGZhbHNlOwogICAgICAgICAgICB0aGlzLmZyYW1lTWlsbGlzID0gMzA7CiAgICAgICAgICAgIHRoaXMub3V0cHV0QXVkaW9GcmFtZSA9IG5ldyBJbnQxNkFycmF5KHRoaXMuZnJhbWVNaWxsaXMgKiB0aGlzLnRhcmdldFNhbXBsZVJhdGUgLyAxMDAwKTsKICAgICAgICAgICAgdGhpcy5kZWJ1ZyA9IGZhbHNlOwogICAgICAgICAgICAvLyBXZWJTb2NrZXQncyBjbG9zZSBoYW5kbGVyLCBjYWxsZWQgd2hlbiBlbmNvdW50ZXJpbmcgYSBub24gdXNlci1pbml0aWF0ZWQgY2xvc2UsIGUuZy4KICAgICAgICAgICAgLy8gLSBuZXR3b3JrIHVucmVhY2hhYmxlIG9yIHVuYWJsZSB0byAocmUpY29ubmVjdCAoY29kZSAxMDA2KQogICAgICAgICAgICAvLyBMaXN0IG9mIENsb3NlRXZlbnQuY29kZSB2YWx1ZXM6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DbG9zZUV2ZW50L2NvZGUKICAgICAgICAgICAgdGhpcy5vbldlYnNvY2tldENsb3NlID0gKGV2ZW50KSA9PiB7CiAgICAgICAgICAgICAgICBpZiAodGhpcy5kZWJ1ZykgewogICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbV2ViU29ja2V0Q2xpZW50XScsICdvbldlYnNvY2tldENsb3NlJyk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlV2Vic29ja2V0KGV2ZW50LmNvZGUsIGV2ZW50LnJlYXNvbiwgZXZlbnQud2FzQ2xlYW4sIGZhbHNlKTsKICAgICAgICAgICAgfTsKICAgICAgICAgICAgdGhpcy5vbldlYnNvY2tldE9wZW4gPSAoX2V2ZW50KSA9PiB7CiAgICAgICAgICAgICAgICBpZiAodGhpcy5kZWJ1ZykgewogICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbV2ViU29ja2V0Q2xpZW50XScsICd3ZWJzb2NrZXQgb3BlbmVkJyk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB0aGlzLndvcmtlckN0eC5wb3N0TWVzc2FnZSh7IHR5cGU6IFdvcmtlclNpZ25hbC5PcGVuZWQgfSk7CiAgICAgICAgICAgIH07CiAgICAgICAgICAgIHRoaXMub25XZWJzb2NrZXRFcnJvciA9IChfZXZlbnQpID0+IHsKICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlYnVnKSB7CiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tXZWJTb2NrZXRDbGllbnRdJywgJ3dlYnNvY2tldCBlcnJvcicpOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9OwogICAgICAgICAgICB0aGlzLm9uV2Vic29ja2V0TWVzc2FnZSA9IChldmVudCkgPT4gewogICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlOwogICAgICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICBjYXRjaCAoZSkgewogICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tXZWJTb2NrZXRDbGllbnRdJywgJ2Vycm9yIHBhcnNpbmcgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyOicsIGUpOwogICAgICAgICAgICAgICAgICAgIHJldHVybjsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS50eXBlID09PSBXZWJzb2NrZXRSZXNwb25zZVR5cGUuU3RhcnRlZCkgewogICAgICAgICAgICAgICAgICAgIC8vIEFwcGVuZCBjbGllbnQtc2lkZSBtZXRhZGF0YSB0byB0aGUgYmFja2VuZCBtZXNzYWdlCiAgICAgICAgICAgICAgICAgICAgbGV0IGF1ZGlvQ29udGV4dFN0YXJ0VGltZSA9IHRoaXMuYXVkaW9Db250ZXh0U3RhcnRUaW1lcy5zaGlmdCgpOwogICAgICAgICAgICAgICAgICAgIGlmIChhdWRpb0NvbnRleHRTdGFydFRpbWUgPT09IHVuZGVmaW5lZCkgewogICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ05vIHZhbGlkIHZhbHVlIGZvciBjb250ZXh0U3RhcnRNaWxsaXMnKTsKICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW9Db250ZXh0U3RhcnRUaW1lID0gMDsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRDb250ZXh0UGFyYW1zID0gewogICAgICAgICAgICAgICAgICAgICAgICBhdWRpb1N0YXJ0VGltZU1pbGxpczogYXVkaW9Db250ZXh0U3RhcnRUaW1lLAogICAgICAgICAgICAgICAgICAgIH07CiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UucGFyYW1zID0gc3RhcnRDb250ZXh0UGFyYW1zOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgdGhpcy53b3JrZXJDdHgucG9zdE1lc3NhZ2UocmVzcG9uc2UpOwogICAgICAgICAgICB9OwogICAgICAgICAgICB0aGlzLndvcmtlckN0eCA9IGN0eDsKICAgICAgICB9CiAgICAgICAgY29ubmVjdChhcGlVcmwsIGF1dGhUb2tlbiwgdGFyZ2V0U2FtcGxlUmF0ZSwgZGVidWcpIHsKICAgICAgICAgICAgdGhpcy5kZWJ1ZyA9IGRlYnVnOwogICAgICAgICAgICBpZiAodGhpcy5kZWJ1ZykgewogICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tXZWJTb2NrZXRDbGllbnRdJywgJ2Nvbm5lY3RpbmcgdG8gJywgYXBpVXJsKTsKICAgICAgICAgICAgfQogICAgICAgICAgICB0aGlzLnRhcmdldFNhbXBsZVJhdGUgPSB0YXJnZXRTYW1wbGVSYXRlOwogICAgICAgICAgICB0aGlzLmlzQ29udGV4dFN0YXJ0ZWQgPSBmYWxzZTsKICAgICAgICAgICAgdGhpcy53ZWJzb2NrZXQgPSBuZXcgV2ViU29ja2V0KGFwaVVybCwgYXV0aFRva2VuKTsKICAgICAgICAgICAgdGhpcy53ZWJzb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsIHRoaXMub25XZWJzb2NrZXRPcGVuKTsKICAgICAgICAgICAgdGhpcy53ZWJzb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMub25XZWJzb2NrZXRNZXNzYWdlKTsKICAgICAgICAgICAgdGhpcy53ZWJzb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0aGlzLm9uV2Vic29ja2V0RXJyb3IpOwogICAgICAgICAgICB0aGlzLndlYnNvY2tldC5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMub25XZWJzb2NrZXRDbG9zZSk7CiAgICAgICAgfQogICAgICAgIGluaXRBdWRpb1Byb2Nlc3Nvcihzb3VyY2VTYW1wbGVSYXRlLCBmcmFtZU1pbGxpcywgaGlzdG9yeUZyYW1lcywgdmFkT3B0aW9ucykgewogICAgICAgICAgICB0aGlzLmF1ZGlvUHJvY2Vzc29yID0gbmV3IEF1ZGlvUHJvY2Vzc29yKHNvdXJjZVNhbXBsZVJhdGUsIHRoaXMudGFyZ2V0U2FtcGxlUmF0ZSwgZnJhbWVNaWxsaXMsIGhpc3RvcnlGcmFtZXMpOwogICAgICAgICAgICBpZiAodmFkT3B0aW9ucykgewogICAgICAgICAgICAgICAgdGhpcy5hdWRpb1Byb2Nlc3Nvci52YWQgPSBuZXcgRW5lcmd5VHJlc2hvbGRWQUQoZnJhbWVNaWxsaXMsIHZhZE9wdGlvbnMpOwogICAgICAgICAgICAgICAgdGhpcy5hdWRpb1Byb2Nlc3Nvci5vblZhZFN0YXRlQ2hhbmdlID0gKGlzU2lnbmFsRGV0ZWN0ZWQpID0+IHsKICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iOwogICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWRPcHRpb25zID0gKF9iID0gKF9hID0gdGhpcy5hdWRpb1Byb2Nlc3NvcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnZhZCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnZhZE9wdGlvbnM7CiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50VmFkT3B0aW9ucykKICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuOwogICAgICAgICAgICAgICAgICAgIGlmIChpc1NpZ25hbERldGVjdGVkKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pbW1lZGlhdGVNb2RlKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndvcmtlckN0eC5wb3N0TWVzc2FnZSh7IHR5cGU6IFdvcmtlclNpZ25hbC5WYWRTaWduYWxIaWdoIH0pOwogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJlbnRWYWRPcHRpb25zLmNvbnRyb2xMaXN0ZW5pbmcpIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRDb250ZXh0KHRoaXMuZGVmYXVsdENvbnRleHRPcHRpb25zKTsKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICBpZiAoIWlzU2lnbmFsRGV0ZWN0ZWQpIHsKICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmltbWVkaWF0ZU1vZGUpIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud29ya2VyQ3R4LnBvc3RNZXNzYWdlKHsgdHlwZTogV29ya2VyU2lnbmFsLlZhZFNpZ25hbExvdyB9KTsKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjdXJyZW50VmFkT3B0aW9ucy5jb250cm9sTGlzdGVuaW5nKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BDb250ZXh0KCk7CiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9OwogICAgICAgICAgICB9CiAgICAgICAgICAgIHRoaXMuYXVkaW9Qcm9jZXNzb3Iub25TZW5kQXVkaW8gPSAoZmxvYXRzLCBzdGFydEluZGV4LCBsZW5ndGgpID0+IHsKICAgICAgICAgICAgICAgIEF1ZGlvVG9vbHMuY29udmVydEZsb2F0VG9JbnQxNihmbG9hdHMsIHRoaXMub3V0cHV0QXVkaW9GcmFtZSwgc3RhcnRJbmRleCwgbGVuZ3RoKTsKICAgICAgICAgICAgICAgIHRoaXMuc2VuZCh0aGlzLm91dHB1dEF1ZGlvRnJhbWUpOwogICAgICAgICAgICB9OwogICAgICAgICAgICBpZiAodGhpcy53b3JrZXJDdHggPT09IHVuZGVmaW5lZCkKICAgICAgICAgICAgICAgIHJldHVybjsKICAgICAgICAgICAgdGhpcy53b3JrZXJDdHgucG9zdE1lc3NhZ2UoeyB0eXBlOiBXb3JrZXJTaWduYWwuQXVkaW9Qcm9jZXNzb3JSZWFkeSB9KTsKICAgICAgICB9CiAgICAgICAgLyoqCiAgICAgICAgICogQ29udHJvbCBhdWRpbyBwcm9jZXNzb3IgcGFyYW1ldGVycwogICAgICAgICAqIEBwYXJhbSBhcCAtIEF1ZGlvIHByb2Nlc3NvciBwYXJhbWV0ZXJzIHRvIGFkanVzdAogICAgICAgICAqLwogICAgICAgIGFkanVzdEF1ZGlvUHJvY2Vzc29yKGFwKSB7CiAgICAgICAgICAgIGlmICh0aGlzLmF1ZGlvUHJvY2Vzc29yICYmIGFwLnZhZCkgewogICAgICAgICAgICAgICAgaWYgKCF0aGlzLmF1ZGlvUHJvY2Vzc29yLnZhZCkgewogICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gVkFEIGluIEF1ZGlvUHJvY2Vzc29yLiBEaWQgeW91IGRlZmluZSBgdmFkYCBpbiBCcm93c2VyQ2xpZW50IGNvbnN0cnVjdG9yIHBhcmFtZXRlcnM/Jyk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvUHJvY2Vzc29yLnZhZC5hZGp1c3RWYWRPcHRpb25zKGFwLnZhZCk7CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgc2V0U2hhcmVkQXJyYXlCdWZmZXJzKGNvbnRyb2xTQUIsIGRhdGFTQUIpIHsKICAgICAgICAgICAgdGhpcy5jb250cm9sU0FCID0gbmV3IEludDMyQXJyYXkoY29udHJvbFNBQik7CiAgICAgICAgICAgIHRoaXMuZGF0YVNBQiA9IG5ldyBGbG9hdDMyQXJyYXkoZGF0YVNBQik7CiAgICAgICAgICAgIGNvbnN0IGF1ZGlvSGFuZGxlSW50ZXJ2YWwgPSB0aGlzLmRhdGFTQUIubGVuZ3RoIC8gMzI7IC8vIG1zCiAgICAgICAgICAgIGlmICh0aGlzLmRlYnVnKSB7CiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW1dlYlNvY2tldENsaWVudF0nLCAnQXVkaW8gaGFuZGxlIGludGVydmFsJywgYXVkaW9IYW5kbGVJbnRlcnZhbCwgJ21zJyk7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgc2V0SW50ZXJ2YWwodGhpcy5wcm9jZXNzQXVkaW9TQUIuYmluZCh0aGlzKSwgYXVkaW9IYW5kbGVJbnRlcnZhbCk7CiAgICAgICAgfQogICAgICAgIHN0YXJ0U3RyZWFtKHN0cmVhbU9wdGlvbnMpIHsKICAgICAgICAgICAgaWYgKCF0aGlzLmF1ZGlvUHJvY2Vzc29yKSB7CiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIEF1ZGlvUHJvY2Vzc29yJyk7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgdGhpcy5pbW1lZGlhdGVNb2RlID0gc3RyZWFtT3B0aW9ucy5pbW1lZGlhdGU7CiAgICAgICAgICAgIHRoaXMuYXVkaW9Qcm9jZXNzb3IucmVzZXQoc3RyZWFtT3B0aW9ucy5zYW1wbGVSYXRlKTsKICAgICAgICAgICAgdGhpcy5hdWRpb0NvbnRleHRTdGFydFRpbWVzID0gW107CiAgICAgICAgfQogICAgICAgIHN0b3BTdHJlYW0oKSB7CiAgICAgICAgICAgIGlmICghdGhpcy5hdWRpb1Byb2Nlc3NvcikgewogICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBBdWRpb1Byb2Nlc3NvcicpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIC8vIFNlbmQgRU9TLiBFbnN1cmUgVkFEIHdpbGwgZ28gb2ZmIGF0IGVuZCBvZiBzdHJlYW0gYW5kIHN0b3BDb250ZXh0IGlzIGNhbGxlZCBpbiBpbW1lZGlhdGUgbW9kZQogICAgICAgICAgICB0aGlzLmF1ZGlvUHJvY2Vzc29yLmVvcygpOwogICAgICAgIH0KICAgICAgICAvKioKICAgICAgICAgKiBQcm9jZXNzZXMgYW5kIHNlbmRzIGF1ZGlvCiAgICAgICAgICogQHBhcmFtIGF1ZGlvQ2h1bmsgLSBhdWRpbyBkYXRhIHRvIHByb2Nlc3MKICAgICAgICAgKi8KICAgICAgICBwcm9jZXNzQXVkaW8oYXVkaW9DaHVuaykgewogICAgICAgICAgICBpZiAoIXRoaXMuYXVkaW9Qcm9jZXNzb3IpIHsKICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gQXVkaW9Qcm9jZXNzb3InKTsKICAgICAgICAgICAgfQogICAgICAgICAgICB0aGlzLmF1ZGlvUHJvY2Vzc29yLnByb2Nlc3NBdWRpbyhhdWRpb0NodW5rKTsKICAgICAgICB9CiAgICAgICAgcHJvY2Vzc0F1ZGlvU0FCKCkgewogICAgICAgICAgICBpZiAoIXRoaXMuY29udHJvbFNBQiB8fCAhdGhpcy5kYXRhU0FCKSB7CiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIFNoYXJlZEFycmF5QnVmZmVycycpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGNvbnN0IGZyYW1lc0F2YWlsYWJsZSA9IHRoaXMuY29udHJvbFNBQltDT05UUk9MLkZSQU1FU19BVkFJTEFCTEVdOwogICAgICAgICAgICBjb25zdCBsb2NrID0gdGhpcy5jb250cm9sU0FCW0NPTlRST0wuTE9DS107CiAgICAgICAgICAgIGlmIChsb2NrID09PSAwICYmIGZyYW1lc0F2YWlsYWJsZSA+IDApIHsKICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGFTQUIuc3ViYXJyYXkoMCwgZnJhbWVzQXZhaWxhYmxlKTsKICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbFNBQltDT05UUk9MLkZSQU1FU19BVkFJTEFCTEVdID0gMDsKICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbFNBQltDT05UUk9MLldSSVRFX0lOREVYXSA9IDA7CiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7CiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzQXVkaW8oZGF0YSk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgc3RhcnRDb250ZXh0KGNvbnRleHRPcHRpb25zKSB7CiAgICAgICAgICAgIHZhciBfYTsKICAgICAgICAgICAgaWYgKCF0aGlzLmF1ZGlvUHJvY2Vzc29yKSB7CiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignTm8gQXVkaW9Qcm9jZXNzb3InKTsKICAgICAgICAgICAgfQogICAgICAgICAgICBpZiAodGhpcy5pc0NvbnRleHRTdGFydGVkKSB7CiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbV2ViU29ja2V0Q2xpZW50XScsICJjYW4ndCBzdGFydCBjb250ZXh0OiBhY3RpdmUgY29udGV4dCBleGlzdHMiKTsKICAgICAgICAgICAgICAgIHJldHVybjsKICAgICAgICAgICAgfQogICAgICAgICAgICB0aGlzLmF1ZGlvUHJvY2Vzc29yLnNldFNlbmRBdWRpbyh0cnVlKTsKICAgICAgICAgICAgdGhpcy5pc0NvbnRleHRTdGFydGVkID0gdHJ1ZTsKICAgICAgICAgICAgdGhpcy5hdWRpb0NvbnRleHRTdGFydFRpbWVzLnB1c2godGhpcy5hdWRpb1Byb2Nlc3Nvci5nZXRTdHJlYW1Qb3NpdGlvbigpKTsKICAgICAgICAgICAgdGhpcy53b3JrZXJDdHgucG9zdE1lc3NhZ2UoeyB0eXBlOiBXb3JrZXJTaWduYWwuUmVxdWVzdENvbnRleHRTdGFydCB9KTsKICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSAoX2EgPSB0aGlzLmRlZmF1bHRDb250ZXh0T3B0aW9ucykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDoge307CiAgICAgICAgICAgIGlmIChjb250ZXh0T3B0aW9ucyAhPT0gdW5kZWZpbmVkKSB7CiAgICAgICAgICAgICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKSwgY29udGV4dE9wdGlvbnMpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBjb250ZXh0T3B0aW9uc1RvTXNnKG9wdGlvbnMpOwogICAgICAgICAgICBtZXNzYWdlLmV2ZW50ID0gJ3N0YXJ0JzsKICAgICAgICAgICAgdGhpcy5zZW5kKEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTsKICAgICAgICB9CiAgICAgICAgc3RvcENvbnRleHQoKSB7CiAgICAgICAgICAgIGlmICghdGhpcy5hdWRpb1Byb2Nlc3NvcikgewogICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ05vIEF1ZGlvUHJvY2Vzc29yJyk7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ29udGV4dFN0YXJ0ZWQpIHsKICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tXZWJTb2NrZXRDbGllbnRdJywgImNhbid0IHN0b3AgY29udGV4dDogbm8gYWN0aXZlIGNvbnRleHQiKTsKICAgICAgICAgICAgICAgIHJldHVybjsKICAgICAgICAgICAgfQogICAgICAgICAgICB0aGlzLmF1ZGlvUHJvY2Vzc29yLnNldFNlbmRBdWRpbyhmYWxzZSk7CiAgICAgICAgICAgIHRoaXMuaXNDb250ZXh0U3RhcnRlZCA9IGZhbHNlOwogICAgICAgICAgICBjb25zdCBTdG9wRXZlbnRKU09OID0gSlNPTi5zdHJpbmdpZnkoeyBldmVudDogJ3N0b3AnIH0pOwogICAgICAgICAgICB0aGlzLnNlbmQoU3RvcEV2ZW50SlNPTik7CiAgICAgICAgfQogICAgICAgIHN3aXRjaENvbnRleHQoY29udGV4dE9wdGlvbnMpIHsKICAgICAgICAgICAgaWYgKCF0aGlzLndlYnNvY2tldCkgewogICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1dlYlNvY2tldCBpcyB1bmRlZmluZWQnKTsKICAgICAgICAgICAgfQogICAgICAgICAgICBpZiAoIXRoaXMuaXNDb250ZXh0U3RhcnRlZCkgewogICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignW1dlYlNvY2tldENsaWVudF0nLCAiY2FuJ3Qgc3dpdGNoIGNvbnRleHQ6IG5vIGFjdGl2ZSBjb250ZXh0Iik7CiAgICAgICAgICAgICAgICByZXR1cm47CiAgICAgICAgICAgIH0KICAgICAgICAgICAgaWYgKChjb250ZXh0T3B0aW9ucyA9PT0gbnVsbCB8fCBjb250ZXh0T3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGV4dE9wdGlvbnMuYXBwSWQpID09PSB1bmRlZmluZWQpIHsKICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tXZWJTb2NrZXRDbGllbnRdJywgImNhbid0IHN3aXRjaCBjb250ZXh0OiBuZXcgYXBwIGlkIGlzIHVuZGVmaW5lZCIpOwogICAgICAgICAgICAgICAgcmV0dXJuOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGNvbnN0IFN0b3BFdmVudEpTT04gPSBKU09OLnN0cmluZ2lmeSh7IGV2ZW50OiAnc3RvcCcgfSk7CiAgICAgICAgICAgIHRoaXMuc2VuZChTdG9wRXZlbnRKU09OKTsKICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGNvbnRleHRPcHRpb25zVG9Nc2coY29udGV4dE9wdGlvbnMpOwogICAgICAgICAgICBtZXNzYWdlLmV2ZW50ID0gJ3N0YXJ0JzsKICAgICAgICAgICAgdGhpcy5zZW5kKEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTsKICAgICAgICB9CiAgICAgICAgY2xvc2VXZWJzb2NrZXQoY29kZSA9IDEwMDUsIHJlYXNvbiA9ICdObyBTdGF0dXMgUmVjZWl2ZWQnLCB3YXNDbGVhbiA9IHRydWUsIHVzZXJJbml0aWF0ZWQgPSB0cnVlKSB7CiAgICAgICAgICAgIHZhciBfYTsKICAgICAgICAgICAgaWYgKCF0aGlzLndlYnNvY2tldCkgewogICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdXZWJTb2NrZXQgYWxyZWFkeSBjbG9zZWQnKTsKICAgICAgICAgICAgICAgIHJldHVybjsKICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIGlmICh0aGlzLmRlYnVnKSB7CiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW1dlYlNvY2tldENsaWVudF0nLCB1c2VySW5pdGlhdGVkID8gJ1dlYnNvY2tldCBjbG9zZSByZXF1ZXN0ZWQnIDogJ1dlYnNvY2tldCBjbG9zZWQnKTsKICAgICAgICAgICAgfQogICAgICAgICAgICAvLyBSZXNldCBhdWRpb3Byb2Nlc3NvciBzbyBpdCB3b24ndCB0cnkgdG8gc2VuZCBhdWRpbyB0aGUgZmlyc3QgdGhpbmcgd2hlbiByZWNvbm5lY3QgaGFwcGVucy4gVGhpcyB3aWxsIGxlYWQgdG8gYSByZWNvbm5lY3QgbG9vcC4KICAgICAgICAgICAgKF9hID0gdGhpcy5hdWRpb1Byb2Nlc3NvcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlc2V0KCk7CiAgICAgICAgICAgIC8vIFdlIGRvbid0IHdhbnQgYW55IG1vcmUgbWVzc2FnZXMgZnJvbSB0aGUgY2xvc2luZyB3ZWJzb2NrZXQKICAgICAgICAgICAgdGhpcy53ZWJzb2NrZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3BlbicsIHRoaXMub25XZWJzb2NrZXRPcGVuKTsKICAgICAgICAgICAgdGhpcy53ZWJzb2NrZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMub25XZWJzb2NrZXRNZXNzYWdlKTsKICAgICAgICAgICAgdGhpcy53ZWJzb2NrZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0aGlzLm9uV2Vic29ja2V0RXJyb3IpOwogICAgICAgICAgICB0aGlzLndlYnNvY2tldC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMub25XZWJzb2NrZXRDbG9zZSk7CiAgICAgICAgICAgIC8vIElmIHdlJ3JlIGhlcmUgZHVlIHRvIGEgY2FsbCB0byBvbldlYlNvY2tldAogICAgICAgICAgICBpZiAodXNlckluaXRpYXRlZCkgewogICAgICAgICAgICAgICAgdGhpcy53ZWJzb2NrZXQuY2xvc2UoY29kZSwgcmVhc29uKTsKICAgICAgICAgICAgfQogICAgICAgICAgICB0aGlzLndlYnNvY2tldCA9IHVuZGVmaW5lZDsKICAgICAgICAgICAgdGhpcy53b3JrZXJDdHgucG9zdE1lc3NhZ2UoewogICAgICAgICAgICAgICAgdHlwZTogV29ya2VyU2lnbmFsLkNsb3NlZCwKICAgICAgICAgICAgICAgIGNvZGUsCiAgICAgICAgICAgICAgICByZWFzb24sCiAgICAgICAgICAgICAgICB3YXNDbGVhbiwKICAgICAgICAgICAgfSk7CiAgICAgICAgfQogICAgICAgIHNlbmQoZGF0YSkgewogICAgICAgICAgICBpZiAoIXRoaXMud2Vic29ja2V0KSB7CiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIFdlYnNvY2tldCcpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGlmICh0aGlzLndlYnNvY2tldC5yZWFkeVN0YXRlICE9PSB0aGlzLndlYnNvY2tldC5PUEVOKSB7CiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEV4cGVjdGVkIE9QRU4gV2Vic29ja2V0IHN0YXRlLCBidXQgZ290ICR7dGhpcy53ZWJzb2NrZXQucmVhZHlTdGF0ZX1gKTsKICAgICAgICAgICAgICAgIHJldHVybjsKICAgICAgICAgICAgfQogICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgICAgdGhpcy53ZWJzb2NrZXQuc2VuZChkYXRhKTsKICAgICAgICAgICAgfQogICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHsKICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbV2ViU29ja2V0Q2xpZW50XScsICdzZXJ2ZXIgY29ubmVjdGlvbiBlcnJvcicsIGVycm9yKTsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgICAgICBzZXRDb250ZXh0T3B0aW9ucyhvcHRpb25zKSB7CiAgICAgICAgICAgIHRoaXMuZGVmYXVsdENvbnRleHRPcHRpb25zID0gb3B0aW9uczsKICAgICAgICB9CiAgICB9CiAgICBjb25zdCBjdHggPSBzZWxmOwogICAgY29uc3Qgd2Vic29ja2V0Q2xpZW50ID0gbmV3IFdlYnNvY2tldENsaWVudChjdHgpOwogICAgY3R4Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChlKSB7CiAgICAgICAgc3dpdGNoIChlLmRhdGEudHlwZSkgewogICAgICAgICAgICBjYXNlIENvbnRyb2xsZXJTaWduYWwuY29ubmVjdDoKICAgICAgICAgICAgICAgIHdlYnNvY2tldENsaWVudC5jb25uZWN0KGUuZGF0YS5hcGlVcmwsIGUuZGF0YS5hdXRoVG9rZW4sIGUuZGF0YS50YXJnZXRTYW1wbGVSYXRlLCBlLmRhdGEuZGVidWcpOwogICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgIGNhc2UgQ29udHJvbGxlclNpZ25hbC5pbml0QXVkaW9Qcm9jZXNzb3I6CiAgICAgICAgICAgICAgICB3ZWJzb2NrZXRDbGllbnQuaW5pdEF1ZGlvUHJvY2Vzc29yKGUuZGF0YS5zb3VyY2VTYW1wbGVSYXRlLCBlLmRhdGEuZnJhbWVNaWxsaXMsIGUuZGF0YS5oaXN0b3J5RnJhbWVzLCBlLmRhdGEudmFkT3B0aW9ucyk7CiAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgY2FzZSBDb250cm9sbGVyU2lnbmFsLmFkanVzdEF1ZGlvUHJvY2Vzc29yOgogICAgICAgICAgICAgICAgd2Vic29ja2V0Q2xpZW50LmFkanVzdEF1ZGlvUHJvY2Vzc29yKGUuZGF0YS5wYXJhbXMpOwogICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgIGNhc2UgQ29udHJvbGxlclNpZ25hbC5TRVRfU0hBUkVEX0FSUkFZX0JVRkZFUlM6CiAgICAgICAgICAgICAgICB3ZWJzb2NrZXRDbGllbnQuc2V0U2hhcmVkQXJyYXlCdWZmZXJzKGUuZGF0YS5jb250cm9sU0FCLCBlLmRhdGEuZGF0YVNBQik7CiAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgY2FzZSBDb250cm9sbGVyU2lnbmFsLkNMT1NFOgogICAgICAgICAgICAgICAgd2Vic29ja2V0Q2xpZW50LmNsb3NlV2Vic29ja2V0KDEwMDAsICdDbG9zZSByZXF1ZXN0ZWQgYnkgY2xpZW50JywgdHJ1ZSwgdHJ1ZSk7CiAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgY2FzZSBDb250cm9sbGVyU2lnbmFsLnN0YXJ0U3RyZWFtOgogICAgICAgICAgICAgICAgd2Vic29ja2V0Q2xpZW50LnN0YXJ0U3RyZWFtKGUuZGF0YS5zdHJlYW1PcHRpb25zKTsKICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICBjYXNlIENvbnRyb2xsZXJTaWduYWwuc3RvcFN0cmVhbToKICAgICAgICAgICAgICAgIHdlYnNvY2tldENsaWVudC5zdG9wU3RyZWFtKCk7CiAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgY2FzZSBDb250cm9sbGVyU2lnbmFsLlNUQVJUX0NPTlRFWFQ6CiAgICAgICAgICAgICAgICB3ZWJzb2NrZXRDbGllbnQuc3RhcnRDb250ZXh0KGUuZGF0YS5vcHRpb25zKTsKICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICBjYXNlIENvbnRyb2xsZXJTaWduYWwuU1dJVENIX0NPTlRFWFQ6CiAgICAgICAgICAgICAgICB3ZWJzb2NrZXRDbGllbnQuc3dpdGNoQ29udGV4dChlLmRhdGEub3B0aW9ucyk7CiAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgY2FzZSBDb250cm9sbGVyU2lnbmFsLlNUT1BfQ09OVEVYVDoKICAgICAgICAgICAgICAgIHdlYnNvY2tldENsaWVudC5zdG9wQ29udGV4dCgpOwogICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgIGNhc2UgQ29udHJvbGxlclNpZ25hbC5BVURJTzoKICAgICAgICAgICAgICAgIHdlYnNvY2tldENsaWVudC5wcm9jZXNzQXVkaW8oZS5kYXRhLnBheWxvYWQpOwogICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgIGNhc2UgQ29udHJvbGxlclNpZ25hbC5zZXRDb250ZXh0T3B0aW9uczoKICAgICAgICAgICAgICAgIHdlYnNvY2tldENsaWVudC5zZXRDb250ZXh0T3B0aW9ucyhlLmRhdGEub3B0aW9ucyk7CiAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgZGVmYXVsdDoKICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXT1JLRVInLCBlKTsKICAgICAgICB9CiAgICB9OwogICAgZnVuY3Rpb24gY29udGV4dE9wdGlvbnNUb01zZyhjb250ZXh0T3B0aW9ucykgewogICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB7CiAgICAgICAgICAgIG9wdGlvbnM6IHsKICAgICAgICAgICAgICAgIHRpbWV6b25lOiBbSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLnRpbWVab25lXSwKICAgICAgICAgICAgfSwKICAgICAgICB9OwogICAgICAgIGlmIChjb250ZXh0T3B0aW9ucyA9PT0gdW5kZWZpbmVkKQogICAgICAgICAgICByZXR1cm4gbWVzc2FnZTsKICAgICAgICBtZXNzYWdlLm9wdGlvbnMudm9jYWJ1bGFyeSA9IGNvbnRleHRPcHRpb25zLnZvY2FidWxhcnk7CiAgICAgICAgbWVzc2FnZS5vcHRpb25zLnZvY2FidWxhcnlfYmlhcyA9IGNvbnRleHRPcHRpb25zLnZvY2FidWxhcnlCaWFzOwogICAgICAgIG1lc3NhZ2Uub3B0aW9ucy5zaWxlbmNlX3RyaWdnZXJlZF9zZWdtZW50YXRpb24gPSBjb250ZXh0T3B0aW9ucy5zaWxlbmNlVHJpZ2dlcmVkU2VnbWVudGF0aW9uOwogICAgICAgIGlmIChjb250ZXh0T3B0aW9ucy5ub25TdHJlYW1pbmdObHUpIHsKICAgICAgICAgICAgbWVzc2FnZS5vcHRpb25zLm5vbl9zdHJlYW1pbmdfbmx1ID0gWyd5ZXMnXTsKICAgICAgICB9CiAgICAgICAgZWxzZSB7CiAgICAgICAgICAgIG1lc3NhZ2Uub3B0aW9ucy5ub25fc3RyZWFtaW5nX25sdSA9IFsnbm8nXTsKICAgICAgICB9CiAgICAgICAgaWYgKChjb250ZXh0T3B0aW9ucyA9PT0gbnVsbCB8fCBjb250ZXh0T3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGV4dE9wdGlvbnMudGltZXpvbmUpICE9PSB1bmRlZmluZWQpIHsKICAgICAgICAgICAgbWVzc2FnZS5vcHRpb25zLnRpbWV6b25lID0gY29udGV4dE9wdGlvbnMgPT09IG51bGwgfHwgY29udGV4dE9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRleHRPcHRpb25zLnRpbWV6b25lOyAvLyBvdmVycmlkZSBicm93c2VyIHRpbWV6b25lCiAgICAgICAgfQogICAgICAgIGlmIChjb250ZXh0T3B0aW9ucy5hcHBJZCAhPT0gdW5kZWZpbmVkKSB7CiAgICAgICAgICAgIG1lc3NhZ2UuYXBwSWQgPSBjb250ZXh0T3B0aW9ucy5hcHBJZDsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7CiAgICB9CgogICAgZXhwb3J0cy5jb250ZXh0T3B0aW9uc1RvTXNnID0gY29udGV4dE9wdGlvbnNUb01zZzsKICAgIGV4cG9ydHNbImRlZmF1bHQiXSA9IFdlYnNvY2tldENsaWVudDsKCiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pOwoKICAgIHJldHVybiBleHBvcnRzOwoKfSkoe30pOwoK", null, false);
    WebWorkerController = class {
      onResponse(cb) {
        this.onResponseCb = cb;
      }
      onClose(cb) {
        this.onCloseCb = cb;
      }
      constructor() {
        this.startCbs = [];
        this.stopCbs = [];
        this.onResponseCb = () => {
        };
        this.onCloseCb = () => {
        };
        this.onWebsocketMessage = (event) => {
          const response = event.data;
          switch (response.type) {
            case WorkerSignal.Opened:
              if (this.onInitResolve) {
                this.onInitResolve();
              }
              break;
            case WorkerSignal.Closed:
              const e = new WebsocketError(event.data.reason, event.data.code, event.data.wasClean);
              if (this.onInitReject) {
                this.onInitReject(e);
              } else {
                this.onCloseCb(e);
              }
              break;
            case WorkerSignal.AudioProcessorReady:
              if (this.resolveSourceSampleRateSet != null) {
                this.resolveSourceSampleRateSet();
              }
              break;
            case WebsocketResponseType.Started:
              this.onResponseCb(response);
              this.startCbs.forEach((cb) => {
                try {
                  cb(void 0, response.audio_context);
                } catch (e2) {
                  console.error('[SpeechlyClient] Error while invoking "onStart" callback:', e2);
                }
              });
              this.startCbs.length = 0;
              break;
            case WebsocketResponseType.Stopped:
              this.onResponseCb(response);
              this.stopCbs.forEach((cb) => {
                try {
                  cb(void 0, response.audio_context);
                } catch (e2) {
                  console.error('[SpeechlyClient] Error while invoking "onStop" callback:', e2);
                }
              });
              this.stopCbs.length = 0;
              break;
            default:
              this.onResponseCb(response);
          }
        };
        this.worker = new WorkerFactory();
        this.worker.addEventListener("message", this.onWebsocketMessage);
      }
      initialize(apiUrl, authToken, targetSampleRate, debug) {
        return __awaiter(this, void 0, void 0, function* () {
          this.worker.postMessage({
            type: ControllerSignal.connect,
            apiUrl,
            authToken,
            targetSampleRate,
            debug
          });
          this.startCbs = [];
          this.stopCbs = [];
          return new Promise((resolve, reject) => {
            this.onInitResolve = () => {
              this.onInitResolve = void 0;
              this.onInitReject = void 0;
              resolve();
            };
            this.onInitReject = (err) => {
              this.onInitResolve = void 0;
              this.onInitReject = void 0;
              reject(err);
            };
          });
        });
      }
      initAudioProcessor(sourceSampleRate, frameMillis, historyFrames, vadOptions) {
        return __awaiter(this, void 0, void 0, function* () {
          this.worker.postMessage({
            type: ControllerSignal.initAudioProcessor,
            sourceSampleRate,
            frameMillis,
            historyFrames,
            vadOptions
          });
          return new Promise((resolve) => {
            this.resolveSourceSampleRateSet = resolve;
          });
        });
      }
      adjustAudioProcessor(ap) {
        this.worker.postMessage({
          type: ControllerSignal.adjustAudioProcessor,
          params: ap
        });
      }
      close() {
        return __awaiter(this, void 0, void 0, function* () {
          return new Promise((resolve, reject) => {
            this.worker.postMessage({
              type: ControllerSignal.CLOSE,
              code: 1e3,
              message: "Client has ended the session"
            });
            resolve();
          });
        });
      }
      startStream(streamOptions) {
        return __awaiter(this, void 0, void 0, function* () {
          this.worker.postMessage({ type: ControllerSignal.startStream, streamOptions });
        });
      }
      stopStream() {
        return __awaiter(this, void 0, void 0, function* () {
          this.worker.postMessage({ type: ControllerSignal.stopStream });
        });
      }
      startContext(options) {
        return __awaiter(this, void 0, void 0, function* () {
          return new Promise((resolve, reject) => {
            this.startCbs.push((err, id) => {
              if (err !== void 0) {
                reject(err);
              } else {
                resolve(id);
              }
            });
            this.worker.postMessage({ type: ControllerSignal.START_CONTEXT, options });
          });
        });
      }
      stopContext() {
        return __awaiter(this, void 0, void 0, function* () {
          return new Promise((resolve, reject) => {
            this.stopCbs.push((err, id) => {
              if (err !== void 0) {
                reject(err);
              } else {
                resolve(id);
              }
            });
            this.worker.postMessage({ type: ControllerSignal.STOP_CONTEXT });
          });
        });
      }
      switchContext(options) {
        return __awaiter(this, void 0, void 0, function* () {
          return new Promise((resolve, reject) => {
            this.startCbs.push((err, id) => {
              if (err !== void 0) {
                reject(err);
              } else {
                resolve(id);
              }
            });
            this.worker.postMessage({ type: ControllerSignal.SWITCH_CONTEXT, options });
          });
        });
      }
      postMessage(message) {
        this.worker.postMessage(message);
      }
      sendAudio(audioChunk) {
        this.worker.postMessage({ type: ControllerSignal.AUDIO, payload: audioChunk });
      }
      setContextOptions(options) {
        return __awaiter(this, void 0, void 0, function* () {
          this.worker.postMessage({ type: ControllerSignal.setContextOptions, options });
        });
      }
    };
    LocalStorage = class {
      constructor() {
        this.storage = window.localStorage;
      }
      get(key) {
        const val = this.storage.getItem(key);
        return val;
      }
      set(key, val) {
        this.storage.setItem(key, val);
      }
      getOrSet(key, genFn) {
        let val = this.storage.getItem(key);
        if (val === null) {
          val = genFn();
          this.storage.setItem(key, val);
        }
        return val;
      }
    };
    deviceIdStorageKey = "speechly-device-id";
    authTokenKey = "speechly-auth-token";
    CloudDecoder = class {
      constructor(options) {
        var _a, _b;
        this.streamOptions = StreamDefaultOptions;
        this.activeContexts = 0;
        this.audioContexts = /* @__PURE__ */ new Map();
        this.maxReconnectAttemptCount = 10;
        this.connectAttempt = 0;
        this.connectPromise = null;
        this.cbs = [];
        this.state = DecoderState.Disconnected;
        this.handleWebsocketResponse = (response) => {
          var _a2;
          if (this.debug) {
            console.log("[Decoder]", "Received response", response);
          }
          switch (response.type) {
            case WorkerSignal.VadSignalHigh:
              this.cbs.forEach((cb) => cb.onVadStateChange.forEach((f) => f(true)));
              break;
            case WorkerSignal.VadSignalLow:
              this.cbs.forEach((cb) => cb.onVadStateChange.forEach((f) => f(false)));
              break;
            case WorkerSignal.RequestContextStart:
              this.activeContexts++;
              break;
            case WebsocketResponseType.Started: {
              const params = response.params;
              this.audioContexts.set(response.audio_context, {
                segments: /* @__PURE__ */ new Map(),
                audioStartTimeMillis: (_a2 = params === null || params === void 0 ? void 0 : params.audioStartTimeMillis) !== null && _a2 !== void 0 ? _a2 : 0
              });
              this.cbs.forEach((cb) => cb.contextStartedCbs.forEach((f) => f(response.audio_context)));
              break;
            }
            case WebsocketResponseType.Stopped: {
              this.activeContexts--;
              this.cbs.forEach((cb) => cb.contextStoppedCbs.forEach((f) => f(response.audio_context)));
              if (!this.streamOptions.preserveSegments) {
                this.audioContexts.delete(response.audio_context);
              }
              if (this.resolveStopStream !== void 0 && this.activeContexts === 0) {
                this.resolveStopStream();
              }
              break;
            }
            default:
              this.handleSegmentUpdate(response);
              break;
          }
        };
        this.handleSegmentUpdate = (response) => {
          var _a2;
          const { audio_context, segment_id, type } = response;
          let { data } = response;
          const context = this.audioContexts.get(audio_context);
          if (context === void 0) {
            console.warn("[Decoder]", "Received response for non-existent context", audio_context);
            return;
          }
          let segmentState = (_a2 = context.segments.get(segment_id)) !== null && _a2 !== void 0 ? _a2 : new SegmentState(audio_context, segment_id);
          switch (type) {
            case WebsocketResponseType.TentativeTranscript:
              data = data;
              const words = parseTentativeTranscript(data, context.audioStartTimeMillis);
              const transcript = data.transcript;
              this.cbs.forEach((cb) => cb.tentativeTranscriptCbs.forEach((f) => f(audio_context, segment_id, words, transcript)));
              segmentState = segmentState.updateTranscript(words);
              break;
            case WebsocketResponseType.Transcript:
              data = data;
              const word = parseTranscript(data, context.audioStartTimeMillis);
              this.cbs.forEach((cb) => cb.transcriptCbs.forEach((f) => f(audio_context, segment_id, word)));
              segmentState = segmentState.updateTranscript([word]);
              break;
            case WebsocketResponseType.TentativeEntities:
              data = data;
              const entities = parseTentativeEntities(data);
              this.cbs.forEach((cb) => cb.tentativeEntityCbs.forEach((f) => f(audio_context, segment_id, entities)));
              segmentState = segmentState.updateEntities(entities);
              break;
            case WebsocketResponseType.Entity:
              data = data;
              const entity = parseEntity(data);
              this.cbs.forEach((cb) => cb.entityCbs.forEach((f) => f(audio_context, segment_id, entity)));
              segmentState = segmentState.updateEntities([entity]);
              break;
            case WebsocketResponseType.TentativeIntent:
              data = data;
              const tentativeIntent = parseIntent(data, false);
              this.cbs.forEach((cb) => cb.tentativeIntentCbs.forEach((f) => f(audio_context, segment_id, tentativeIntent)));
              segmentState = segmentState.updateIntent(tentativeIntent);
              break;
            case WebsocketResponseType.Intent:
              data = data;
              const intent = parseIntent(data, true);
              this.cbs.forEach((cb) => cb.intentCbs.forEach((f) => f(audio_context, segment_id, intent)));
              segmentState = segmentState.updateIntent(intent);
              break;
            case WebsocketResponseType.SegmentEnd:
              segmentState = segmentState.finalize();
              break;
          }
          context.segments.set(segment_id, segmentState);
          this.audioContexts.set(audio_context, context);
          if (this.logSegments) {
            console.info(segmentState.toString());
          }
          this.cbs.forEach((cb) => cb.segmentChangeCbs.forEach((f) => f(segmentState.toSegment())));
        };
        this.handleWebsocketClosure = (err) => {
          if (err.code === 1e3) {
            if (this.debug) {
              console.log("[Decoder]", "Websocket closed", err);
            }
          } else {
            console.error("[Decoder]", "Websocket closed due to error", err);
            if (this.deviceId === void 0) {
              this.setState(DecoderState.Failed);
              console.error("[Decoder]", "No deviceId. Giving up reconnecting.");
              return;
            }
            this.setState(DecoderState.Disconnected);
            this.activeContexts = 0;
            this.audioContexts.clear();
            this.reconnect();
          }
        };
        this.logSegments = options.logSegments;
        this.appId = options.appId;
        this.projectId = options.projectId;
        this.sampleRate = options.sampleRate;
        this.debug = options.debug;
        if (this.appId !== void 0 && this.projectId !== void 0) {
          throw Error("[Decoder] You cannot use both appId and projectId at the same time");
        } else if (this.appId === void 0 && this.projectId === void 0) {
          throw Error("[Decoder] Either an appId or a projectId is required");
        }
        const apiUrl = options.apiUrl;
        this.apiUrl = generateWsUrl(apiUrl.replace("http", "ws") + "/ws/v1", this.sampleRate);
        this.loginUrl = `${apiUrl}/login`;
        try {
          this.storage = (_a = options.storage) !== null && _a !== void 0 ? _a : new LocalStorage();
          this.deviceId = this.storage.getOrSet(deviceIdStorageKey, v4);
        } catch (err) {
          this.deviceId = v4();
        }
        this.apiClient = new WebWorkerController();
        this.apiClient.onResponse(this.handleWebsocketResponse);
        this.apiClient.onClose(this.handleWebsocketClosure);
        if ((_b = options.connect) !== null && _b !== void 0 ? _b : true) {
          this.connect();
        }
      }
      getReconnectDelayMs(attempt) {
        return Math.pow(2, attempt) * 100;
      }
      sleep(ms) {
        return __awaiter(this, void 0, void 0, function* () {
          return new Promise((resolve) => setTimeout(resolve, ms));
        });
      }
      connect() {
        return __awaiter(this, void 0, void 0, function* () {
          if (this.connectPromise === null) {
            this.connectPromise = (() => __awaiter(this, void 0, void 0, function* () {
              var _a;
              this.setState(DecoderState.Disconnected);
              const storedToken = (_a = this.storage) === null || _a === void 0 ? void 0 : _a.get(authTokenKey);
              if (!storedToken || !validateToken(storedToken, this.projectId, this.appId, this.deviceId)) {
                try {
                  this.authToken = yield fetchToken(this.loginUrl, this.projectId, this.appId, this.deviceId, fetch);
                  if (this.storage) {
                    this.storage.set(authTokenKey, this.authToken);
                  }
                } catch (err) {
                  this.connectPromise = null;
                  this.setState(DecoderState.Failed);
                  throw err;
                }
              } else {
                this.authToken = storedToken;
              }
              try {
                yield this.apiClient.initialize(this.apiUrl, this.authToken, this.sampleRate, this.debug);
              } catch (err) {
                this.connectPromise = null;
                if (!(err instanceof WebsocketError && err.code === 1e3)) {
                  this.setState(DecoderState.Failed);
                }
                throw err;
              }
              this.advanceState(DecoderState.Connected);
            }))();
          }
          yield this.connectPromise;
        });
      }
      adjustAudioProcessor(ap) {
        this.apiClient.adjustAudioProcessor(ap);
      }
      close() {
        return __awaiter(this, void 0, void 0, function* () {
          let error;
          try {
            yield this.apiClient.close();
          } catch (err) {
            error = err.message;
          }
          this.audioContexts.clear();
          this.activeContexts = 0;
          this.connectPromise = null;
          this.setState(DecoderState.Disconnected);
          if (error !== void 0) {
            throw Error(error);
          }
        });
      }
      startStream(streamOptions) {
        return __awaiter(this, void 0, void 0, function* () {
          if (this.debug) {
            console.log("[Decoder]", "startStream");
          }
          this.streamOptions = streamOptions;
          this.audioContexts.clear();
          this.activeContexts = 0;
          yield this.apiClient.startStream(streamOptions);
        });
      }
      stopStream() {
        return __awaiter(this, void 0, void 0, function* () {
          if (this.debug) {
            console.log("[Decoder]", "stopStream");
          }
          yield this.apiClient.stopStream();
          yield this.waitResults();
        });
      }
      waitResults() {
        return __awaiter(this, void 0, void 0, function* () {
          if (this.activeContexts > 0) {
            const p = new Promise((resolve) => {
              this.resolveStopStream = resolve;
            });
            yield p;
          }
          this.resolveStopStream = void 0;
        });
      }
      startContext(options) {
        return __awaiter(this, void 0, void 0, function* () {
          if (this.state === DecoderState.Failed) {
            throw Error("[Decoder] startContext cannot be run in Failed state.");
          } else if (this.state < DecoderState.Connected) {
            yield this.connect();
          } else if (this.state > DecoderState.Connected) {
            throw Error("[Decoder] Unable to complete startContext: Expected Connected state, but was in " + stateToString(this.state) + ".");
          }
          this.setState(DecoderState.Active);
          let contextId;
          if (this.projectId != null) {
            if (options === null || options === void 0 ? void 0 : options.appId) {
              contextId = yield this.apiClient.startContext(options);
            } else {
              throw new Error("options.appId is required with project login");
            }
          } else {
            if ((options === null || options === void 0 ? void 0 : options.appId) != null && this.appId !== (options === null || options === void 0 ? void 0 : options.appId)) {
              this.setState(DecoderState.Failed);
              throw ErrAppIdChangeWithoutProjectLogin;
            }
            contextId = yield this.apiClient.startContext(options);
          }
          if (this.state < DecoderState.Active) {
            throw Error("[Decoder] Unable to complete startContext: Problem acquiring contextId");
          }
          return contextId;
        });
      }
      sendAudio(audio) {
        this.apiClient.sendAudio(audio);
      }
      stopContext(stopDelayMs) {
        return __awaiter(this, void 0, void 0, function* () {
          if (this.state === DecoderState.Failed) {
            throw Error("[Decoder] stopContext cannot be run in unrecovable error state.");
          } else if (this.state !== DecoderState.Active) {
            throw Error("[Decoder] Unable to complete stopContext: Expected Active state, but was in " + stateToString(this.state) + ".");
          }
          if (stopDelayMs > 0) {
            yield this.sleep(stopDelayMs);
          }
          const contextId = yield this.apiClient.stopContext();
          this.setState(DecoderState.Connected);
          return contextId;
        });
      }
      switchContext(options) {
        return __awaiter(this, void 0, void 0, function* () {
          if (this.state !== DecoderState.Active) {
            throw Error("[Decoder] Unable to complete switchContext: Expected Active state, but was in " + stateToString(this.state) + ".");
          }
          const contextId = yield this.apiClient.switchContext(options);
          return contextId;
        });
      }
      registerListener(listener) {
        this.cbs.push(listener);
      }
      initAudioProcessor(sourceSampleRate, frameMillis, historyFrames, vadOptions) {
        return __awaiter(this, void 0, void 0, function* () {
          yield this.apiClient.initAudioProcessor(sourceSampleRate, frameMillis, historyFrames, vadOptions);
        });
      }
      useSharedArrayBuffers(controlSAB, dataSAB) {
        this.apiClient.postMessage({
          type: "SET_SHARED_ARRAY_BUFFERS",
          controlSAB,
          dataSAB
        });
      }
      setContextOptions(options) {
        return __awaiter(this, void 0, void 0, function* () {
          yield this.apiClient.setContextOptions(options);
        });
      }
      reconnect() {
        return __awaiter(this, void 0, void 0, function* () {
          console.log("Speechly reconnecting");
          this.connectPromise = null;
          if (this.connectAttempt < this.maxReconnectAttemptCount) {
            yield this.sleep(this.getReconnectDelayMs(this.connectAttempt++));
            yield this.connect();
          } else {
            console.error("[Decoder] Maximum reconnect count reached, giving up automatic reconnect.");
          }
        });
      }
      advanceState(newState) {
        if (this.state >= newState) {
          return;
        }
        this.setState(newState);
      }
      setState(newState) {
        if (this.state === newState) {
          return;
        }
        if (this.debug) {
          console.log("[Decoder]", stateToString(this.state), "->", stateToString(newState));
        }
        this.state = newState;
        this.cbs.forEach((cb) => {
          var _a;
          return (_a = cb.stateChangeCbs) === null || _a === void 0 ? void 0 : _a.forEach((f) => f(newState));
        });
      }
      getSegments() {
        const result = [];
        this.audioContexts.forEach((audioContext, _) => {
          audioContext.segments.forEach((segment, _2) => {
            const deepCopy = JSON.parse(JSON.stringify(segment));
            result.push(deepCopy);
          });
        });
        return result;
      }
    };
    audioworklet = `
// Indices for the Control SAB.
const CONTROL = {
  'WRITE_INDEX': 0,
  'FRAMES_AVAILABLE': 1,
  'LOCK': 2,
};

class SpeechlyProcessor extends AudioWorkletProcessor {
  constructor() {
    super();

    this._initialized = false;
    this.debug = false;
    this.port.onmessage = this._initialize.bind(this);
  }

  _initialize(event) {
    this.controlSAB = new Int32Array(event.data.controlSAB);
    this.dataSAB = new Float32Array(event.data.dataSAB);
    this.debug = event.data.debug;
    if (this.debug) {
      console.log('[BrowserClient AudioWorkletNode]', 'initializing audioworklet');
    }
    this.sharedBufferSize = this.dataSAB.length;
    this.buffer = new Float32Array(0);
    this._initialized = true;
  }

  _transferDataToSharedBuffer(data) {
    this.controlSAB[CONTROL.LOCK] = 1;
    let inputWriteIndex = this.controlSAB[CONTROL.WRITE_INDEX];
    if (this.controlSAB[CONTROL.FRAMES_AVAILABLE] > 0) {
      if (inputWriteIndex + data.length > this.sharedBufferSize) {
        // console.log('buffer overflow')
        inputWriteIndex = 0;
      }
    }
    this.dataSAB.set(data, inputWriteIndex);
    this.controlSAB[CONTROL.WRITE_INDEX] = inputWriteIndex + data.length;
    this.controlSAB[CONTROL.FRAMES_AVAILABLE] = inputWriteIndex + data.length;
    this.controlSAB[CONTROL.LOCK] = 0;
  }

  _pushData(data) {
    if (this.debug) {
      const signalEnergy = getStandardDeviation(data)
      this.port.postMessage({
        type: 'STATS',
        signalEnergy: signalEnergy,
        samples: data.length,
      });
    }

    if (this.buffer.length > this.sharedBufferSize) {
      const dataToTransfer = this.buffer.subarray(0, this.sharedBufferSize);
      this._transferDataToSharedBuffer(dataToTransfer);
      this.buffer = this.buffer.subarray(this.sharedBufferSize);
    }
    let concat = new Float32Array(this.buffer.length + data.length);
    concat.set(this.buffer);
    concat.set(data, this.buffer.length);
    this.buffer = concat;
  }

  process(inputs, outputs, parameters) {
    const inputChannelData = inputs[0][0];
    if (inputChannelData !== undefined) {
      if (this.controlSAB && this.dataSAB) {
        this._pushData(inputChannelData);
      } else {
        this.port.postMessage({
          type: 'DATA',
          frames: inputChannelData
        });
      }
    }

    return true;
  }
}

function getStandardDeviation(array) {
  const n = array.length
  const mean = array.reduce((a, b) => a + b) / n
  return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
}

registerProcessor('speechly-worklet', SpeechlyProcessor);
`;
    BrowserClient = class {
      constructor(customOptions) {
        var _a, _b;
        this.contextStopDelay = 250;
        this.debug = false;
        this.initialized = false;
        this.audioProcessorInitialized = false;
        this.isStreaming = false;
        this.active = false;
        this.listeningPromise = null;
        this.streamOptions = Object.assign({}, StreamDefaultOptions);
        this.stats = {
          maxSignalEnergy: 0,
          sentSamples: 0
        };
        this.decoderOptions = Object.assign(Object.assign(Object.assign({}, DecoderDefaultOptions), customOptions), { vad: customOptions.vad ? Object.assign(Object.assign({}, VadDefaultOptions), customOptions.vad) : void 0 });
        const constraints = window.navigator.mediaDevices.getSupportedConstraints();
        this.nativeResamplingSupported = constraints.sampleRate === true;
        this.isMobileSafari = iOS();
        this.isSafari = this.isMobileSafari || window.safari !== void 0;
        this.useSAB = !this.isSafari;
        this.debug = (_a = this.decoderOptions.debug) !== null && _a !== void 0 ? _a : true;
        this.callbacks = new EventCallbacks();
        this.callbacks.stateChangeCbs.addEventListener(this.handleStateChange.bind(this));
        this.callbacks.onVadStateChange.addEventListener(this.autoControlListening.bind(this));
        this.decoder = (_b = this.decoderOptions.decoder) !== null && _b !== void 0 ? _b : new CloudDecoder(this.decoderOptions);
        this.decoder.registerListener(this.callbacks);
      }
      initialize(options) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
          if (this.initialized) {
            return;
          }
          if (this.debug) {
            console.log("[BrowserClient]", "initializing");
          }
          this.initialized = true;
          try {
            yield this.decoder.connect();
          } catch (err) {
            this.initialized = false;
            if (err instanceof WebsocketError) {
              if (err.code === 1e3) {
                if (this.debug) {
                  console.log("[BrowserClient]", "Early close of websocket.");
                }
                return;
              }
              throw Error(`Unable to connect. Most likely there is no connection to network. Websocket error code: ${err.code}`);
            } else {
              throw err;
            }
          }
          try {
            const opts = {};
            if (this.nativeResamplingSupported) {
              opts.sampleRate = DefaultSampleRate;
            }
            if (window.webkitAudioContext !== void 0) {
              try {
                this.audioContext = new window.webkitAudioContext(opts);
              } catch (err) {
                if (this.debug) {
                  console.log("[BrowserClient]", "creating audioContext without samplerate conversion", err);
                }
                this.audioContext = new window.webkitAudioContext();
              }
            } else {
              this.audioContext = new window.AudioContext(opts);
              if (window.webkitAudioContext !== void 0) {
                yield this.audioContext.resume();
              }
            }
          } catch (_c) {
            this.initialized = false;
            throw ErrDeviceNotSupported;
          }
          if (!this.isSafari && window.AudioWorkletNode !== void 0) {
            if (this.debug) {
              console.log("[BrowserClient]", "using AudioWorkletNode");
            }
            const blob = new Blob([audioworklet], { type: "text/javascript" });
            const blobURL = window.URL.createObjectURL(blob);
            yield this.audioContext.audioWorklet.addModule(blobURL);
            this.speechlyNode = new AudioWorkletNode(this.audioContext, "speechly-worklet");
            this.speechlyNode.connect(this.audioContext.destination);
            if (this.useSAB && window.SharedArrayBuffer !== void 0) {
              if (this.debug) {
                console.log("[BrowserClient]", "using SharedArrayBuffer");
              }
              const controlSAB = new window.SharedArrayBuffer(4 * Int32Array.BYTES_PER_ELEMENT);
              const dataSAB = new window.SharedArrayBuffer(1024 * Float32Array.BYTES_PER_ELEMENT);
              this.decoder.useSharedArrayBuffers(controlSAB, dataSAB);
              this.speechlyNode.port.postMessage({
                type: "SET_SHARED_ARRAY_BUFFERS",
                controlSAB,
                dataSAB,
                debug: this.debug
              });
            } else {
              if (this.debug) {
                console.log("[BrowserClient]", "can not use SharedArrayBuffer");
              }
            }
            this.speechlyNode.port.onmessage = (event) => {
              switch (event.data.type) {
                case "STATS":
                  if (event.data.signalEnergy > this.stats.maxSignalEnergy) {
                    this.stats.maxSignalEnergy = event.data.signalEnergy;
                  }
                  this.stats.sentSamples += parseInt(event.data.samples);
                  break;
                case "DATA":
                  this.handleAudio(event.data.frames);
                  break;
              }
            };
          } else {
            if (this.debug) {
              console.log("[BrowserClient]", "using ScriptProcessorNode");
            }
            if (window.webkitAudioContext !== void 0) {
              const resampleRatio = this.audioContext.sampleRate / DefaultSampleRate;
              const bufSize = 4096 * Math.pow(2, Math.ceil(Math.log(resampleRatio) / Math.log(2)));
              this.audioProcessor = this.audioContext.createScriptProcessor(bufSize, 1, 1);
            } else {
              this.audioProcessor = this.audioContext.createScriptProcessor(void 0, 1, 1);
            }
            this.audioProcessor.connect(this.audioContext.destination);
            this.audioProcessor.addEventListener("audioprocess", (event) => {
              this.handleAudio(event.inputBuffer.getChannelData(0));
            });
          }
          if (this.debug) {
            console.log("[BrowserClient]", "audioContext sampleRate is", (_a = this.audioContext) === null || _a === void 0 ? void 0 : _a.sampleRate);
          }
          this.streamOptions.sampleRate = (_b = this.audioContext) === null || _b === void 0 ? void 0 : _b.sampleRate;
          yield this.decoder.initAudioProcessor(this.streamOptions.sampleRate, this.decoderOptions.frameMillis, this.decoderOptions.historyFrames, this.decoderOptions.vad);
          this.audioProcessorInitialized = true;
          if (options === null || options === void 0 ? void 0 : options.mediaStream) {
            yield this.attach(options === null || options === void 0 ? void 0 : options.mediaStream);
          }
        });
      }
      attach(mediaStream) {
        var _a, _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function* () {
          yield this.initialize();
          yield this.detach();
          this.stream = (_a = this.audioContext) === null || _a === void 0 ? void 0 : _a.createMediaStreamSource(mediaStream);
          if (((_b = this.audioContext) === null || _b === void 0 ? void 0 : _b.state) !== "running") {
            if (this.debug) {
              console.log("[BrowserClient]", "audioContext resume required, state is", (_c = this.audioContext) === null || _c === void 0 ? void 0 : _c.state);
            }
            yield (_d = this.audioContext) === null || _d === void 0 ? void 0 : _d.resume();
          }
          if (this.speechlyNode) {
            (_e = this.stream) === null || _e === void 0 ? void 0 : _e.connect(this.speechlyNode);
          } else if (this.audioProcessor) {
            (_f = this.stream) === null || _f === void 0 ? void 0 : _f.connect(this.audioProcessor);
          } else {
            throw Error("[BrowserClient] cannot attach to mediaStream, not initialized");
          }
          yield this.autoControlStream();
        });
      }
      isActive() {
        return this.active;
      }
      start(options) {
        return __awaiter(this, void 0, void 0, function* () {
          if (this.active) {
            throw ErrAlreadyStarted;
          }
          this.active = true;
          const contextId = yield this.queueTask(() => __awaiter(this, void 0, void 0, function* () {
            yield this.initialize();
            if (!this.isStreaming) {
              yield this.startStream({ autoStarted: true });
            }
            const contextId2 = yield this.decoder.startContext(options);
            return contextId2;
          }));
          return contextId;
        });
      }
      stop(stopDelayMs = this.contextStopDelay) {
        return __awaiter(this, void 0, void 0, function* () {
          if (!this.active) {
            throw ErrAlreadyStopped;
          }
          this.active = false;
          const contextId = yield this.queueTask(() => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
              const contextId2 = yield this.decoder.stopContext(stopDelayMs);
              if (!((_a = this.decoderOptions.vad) === null || _a === void 0 ? void 0 : _a.enabled) && this.isStreaming && this.streamOptions.autoStarted) {
                yield this.stopStream();
              }
              if (this.stats.sentSamples === 0) {
                console.warn("[BrowserClient]", "audioContext contained no audio data");
              }
              return contextId2;
            } catch (err) {
              console.warn("[BrowserClient]", "stop() failed", err);
            } finally {
              this.stats.sentSamples = 0;
            }
          }));
          return contextId;
        });
      }
      setContextOptions(options) {
        return __awaiter(this, void 0, void 0, function* () {
          yield this.decoder.setContextOptions(options);
        });
      }
      adjustAudioProcessor(ap) {
        var _a;
        if (ap.vad) {
          if (this.decoderOptions.vad) {
            this.decoderOptions.vad = Object.assign(Object.assign({}, this.decoderOptions.vad), ap.vad);
          } else {
            throw Error("Unable to adjust VAD - it was not defined in the constructor");
          }
        }
        this.decoder.adjustAudioProcessor(ap);
        if ((_a = this.decoderOptions.vad) === null || _a === void 0 ? void 0 : _a.enabled) {
          this.autoControlStream();
        } else {
          if (this.active) {
            this.stop();
          }
        }
      }
      uploadAudioData(audioData, options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
          yield this.initialize();
          const audioBuffer = yield (_a = this.audioContext) === null || _a === void 0 ? void 0 : _a.decodeAudioData(audioData);
          if (audioBuffer === void 0) {
            throw Error("Could not decode audioData");
          }
          const samples = audioBuffer.getChannelData(0);
          if (audioBuffer.numberOfChannels > 1) {
            const chan1samples = audioBuffer.getChannelData(1);
            for (let i = 0; i < samples.length; i++) {
              samples[i] = (samples[i] + chan1samples[i]) / 2;
            }
          }
          if (this.active)
            yield this.stop(0);
          if (this.isStreaming)
            yield this.stopStream();
          yield this.startStream({
            sampleRate: audioBuffer.sampleRate,
            preserveSegments: true,
            immediate: true
          });
          const vadActive = ((_b = this.decoderOptions.vad) === null || _b === void 0 ? void 0 : _b.enabled) && ((_c = this.decoderOptions.vad) === null || _c === void 0 ? void 0 : _c.controlListening);
          const chunkMillis = 1e3;
          let throttlingWaitMillis = 0;
          if (!vadActive) {
            yield this.start(options);
          } else {
            if (options)
              yield this.setContextOptions(options);
            if (this.decoderOptions.vad.signalSustainMillis >= chunkMillis) {
              const allowedContexts = 10;
              const lookbackWindowMillis = 1e4;
              const worstCaseContextsInLookback = lookbackWindowMillis / this.decoderOptions.vad.signalSustainMillis;
              const maxSpeedUp = allowedContexts / worstCaseContextsInLookback;
              throttlingWaitMillis = chunkMillis / maxSpeedUp;
            } else {
              console.warn(`Throttling disabled due to low (<= ${chunkMillis}) VAD sustain value. Server may disconnect while processing if contexts are created at high rate.`);
            }
            throttlingWaitMillis = 0;
          }
          let sendBuffer;
          const chunkSamples = Math.round(audioBuffer.sampleRate * chunkMillis / 1e3);
          for (let b = 0; b < samples.length; b += chunkSamples) {
            const e = b + chunkSamples;
            if (e > samples.length) {
              sendBuffer = samples.slice(b);
            } else {
              sendBuffer = samples.slice(b, e);
            }
            this.handleAudio(sendBuffer);
            yield this.sleep(throttlingWaitMillis);
          }
          if (!vadActive) {
            yield this.stop(0);
          }
          yield this.stopStream();
          const result = this.decoder.getSegments();
          return result;
        });
      }
      startStream(streamOptionOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
          this.streamOptions = Object.assign(Object.assign(Object.assign({}, this.streamOptions), { autoStarted: false }), streamOptionOverrides);
          yield this.decoder.startStream(this.streamOptions);
          this.isStreaming = true;
        });
      }
      stopStream() {
        return __awaiter(this, void 0, void 0, function* () {
          if (this.isStreaming) {
            this.isStreaming = false;
            yield this.decoder.stopStream();
          }
        });
      }
      queueTask(task) {
        return __awaiter(this, void 0, void 0, function* () {
          const prevTask = this.listeningPromise;
          this.listeningPromise = (() => __awaiter(this, void 0, void 0, function* () {
            yield prevTask;
            return task();
          }))();
          return this.listeningPromise;
        });
      }
      autoControlListening(vadActive) {
        var _a;
        if (this.debug) {
          console.log("[BrowserClient]", "autoControlListening", vadActive);
        }
        if ((_a = this.decoderOptions.vad) === null || _a === void 0 ? void 0 : _a.controlListening) {
          if (vadActive) {
            if (!this.active)
              this.start();
          } else {
            if (this.active)
              this.stop(0);
          }
        }
      }
      autoControlStream() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
          if (!this.audioProcessorInitialized)
            return;
          if (!this.stream)
            return;
          if (((_a = this.decoderOptions.vad) === null || _a === void 0 ? void 0 : _a.enabled) && !this.isStreaming) {
            yield this.startStream({ autoStarted: true });
            return;
          }
          if (!((_b = this.decoderOptions.vad) === null || _b === void 0 ? void 0 : _b.enabled) && this.isStreaming && this.streamOptions.autoStarted) {
            yield this.stopStream();
          }
        });
      }
      handleStateChange(decoderState) {
        switch (decoderState) {
          case DecoderState.Disconnected:
          case DecoderState.Failed:
            this.stopStream();
            this.active = false;
            this.listeningPromise = null;
            break;
        }
      }
      detach() {
        return __awaiter(this, void 0, void 0, function* () {
          if (this.active) {
            yield this.stop(0);
          }
          if (this.stream) {
            this.stream.disconnect();
            this.stream = void 0;
          }
        });
      }
      close() {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
          if (this.debug) {
            console.log("[BrowserClient]", "close");
          }
          yield this.detach();
          if (this.speechlyNode !== null) {
            (_a = this.speechlyNode) === null || _a === void 0 ? void 0 : _a.port.close();
            (_b = this.speechlyNode) === null || _b === void 0 ? void 0 : _b.disconnect();
          }
          if (this.audioProcessor !== void 0) {
            (_c = this.audioProcessor) === null || _c === void 0 ? void 0 : _c.disconnect();
          }
          yield this.decoder.close();
          this.initialized = false;
          this.listeningPromise = null;
        });
      }
      sleep(ms) {
        return __awaiter(this, void 0, void 0, function* () {
          return new Promise((resolve) => setTimeout(resolve, ms));
        });
      }
      handleAudio(array) {
        if (this.isStreaming) {
          this.stats.sentSamples += array.length;
          this.decoder.sendAudio(array);
        }
      }
      onStart(cb) {
        this.callbacks.contextStartedCbs.addEventListener(cb);
      }
      onStop(cb) {
        this.callbacks.contextStoppedCbs.addEventListener(cb);
      }
      onSegmentChange(cb) {
        this.callbacks.segmentChangeCbs.addEventListener(cb);
      }
      onTranscript(cb) {
        this.callbacks.transcriptCbs.addEventListener(cb);
      }
      onEntity(cb) {
        this.callbacks.entityCbs.addEventListener(cb);
      }
      onIntent(cb) {
        this.callbacks.intentCbs.addEventListener(cb);
      }
      onTentativeTranscript(cb) {
        this.callbacks.tentativeTranscriptCbs.addEventListener(cb);
      }
      onTentativeEntities(cb) {
        this.callbacks.tentativeEntityCbs.addEventListener(cb);
      }
      onTentativeIntent(cb) {
        this.callbacks.tentativeIntentCbs.addEventListener(cb);
      }
      onStateChange(cb) {
        this.callbacks.stateChangeCbs.addEventListener(cb);
      }
    };
  }
});

// node_modules/@speechly/speech-recognition-polyfill/dist/types.js
var require_types = __commonJS({
  "node_modules/@speechly/speech-recognition-polyfill/dist/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SpeechRecognitionFailedError = exports.MicrophoneNotAllowedError = void 0;
    exports.MicrophoneNotAllowedError = {
      error: "not-allowed",
      message: "User did not give permission to use the microphone"
    };
    exports.SpeechRecognitionFailedError = {
      error: "audio-capture",
      message: "Speech recognition failed"
    };
  }
});

// node_modules/@speechly/speech-recognition-polyfill/dist/createSpeechRecognition.js
var require_createSpeechRecognition = __commonJS({
  "node_modules/@speechly/speech-recognition-polyfill/dist/createSpeechRecognition.js"(exports) {
    "use strict";
    var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createSpeechlySpeechRecognition = void 0;
    var browser_client_1 = (init_speechly_es(), __toCommonJS(speechly_es_exports));
    var types_1 = require_types();
    var createSpeechlySpeechRecognition2 = (appId2) => {
      var _a;
      var _b;
      const browserSupportsAudioApis = typeof window !== "undefined" && ((_a = window.navigator) === null || _a === void 0 ? void 0 : _a.mediaDevices) !== void 0 && (window.AudioContext !== void 0 || window.webkitAudioContext !== void 0);
      return _b = class SpeechlySpeechRecognition {
        constructor() {
          this.aborted = false;
          this.transcribing = false;
          this.taskQueue = null;
          this.continuous = false;
          this.interimResults = false;
          this.onresult = () => {
          };
          this.onend = () => {
          };
          this.onerror = () => {
          };
          this.start = () => __awaiter2(this, void 0, void 0, function* () {
            try {
              this.aborted = false;
              yield this._start();
            } catch (e) {
              if (e === browser_client_1.ErrNoAudioConsent) {
                this.onerror(types_1.MicrophoneNotAllowedError);
              } else {
                this.onerror(types_1.SpeechRecognitionFailedError);
              }
            }
          });
          this.stop = () => __awaiter2(this, void 0, void 0, function* () {
            yield this._stop();
          });
          this.abort = () => __awaiter2(this, void 0, void 0, function* () {
            this.aborted = true;
            yield this._stop();
          });
          this._start = () => __awaiter2(this, void 0, void 0, function* () {
            if (this.transcribing) {
              return;
            }
            this.transcribing = true;
            const startTask = () => __awaiter2(this, void 0, void 0, function* () {
              yield this.microphone.initialize();
              const { mediaStream } = this.microphone;
              if (mediaStream === null || mediaStream === void 0) {
                throw browser_client_1.ErrDeviceNotSupported;
              }
              yield this.client.attach(mediaStream);
              yield this.client.start();
            });
            yield this.enqueueTask(startTask);
          });
          this._stop = () => __awaiter2(this, void 0, void 0, function* () {
            if (!this.transcribing) {
              return;
            }
            this.transcribing = false;
            const stopTask = () => __awaiter2(this, void 0, void 0, function* () {
              try {
                yield this.client.stop();
                yield this.client.detach();
                yield this.microphone.close();
                this.onend();
              } catch (e) {
              }
            });
            yield this.enqueueTask(stopTask);
          });
          this.enqueueTask = (task) => __awaiter2(this, void 0, void 0, function* () {
            const queuedTask = () => __awaiter2(this, void 0, void 0, function* () {
              yield this.taskQueue;
              yield task();
            });
            this.taskQueue = queuedTask();
            yield this.taskQueue;
          });
          this.handleResult = (segment) => {
            if (this.aborted) {
              return;
            }
            if (!this.interimResults && !segment.isFinal) {
              return;
            }
            const transcript = segment.words.map((x) => x.value).filter((x) => x).join(" ");
            const results = [
              {
                0: {
                  transcript,
                  confidence: 1
                },
                isFinal: segment.isFinal
              }
            ];
            this.onresult({ results, resultIndex: 0 });
            if (!this.continuous && segment.isFinal) {
              this.abort().catch(() => {
              });
            }
          };
          this.client = new browser_client_1.BrowserClient({ appId: appId2 });
          this.microphone = new browser_client_1.BrowserMicrophone();
          this.client.onSegmentChange(this.handleResult);
        }
      }, _b.hasBrowserSupport = browserSupportsAudioApis, _b;
    };
    exports.createSpeechlySpeechRecognition = createSpeechlySpeechRecognition2;
    exports.default = exports.createSpeechlySpeechRecognition;
  }
});

// node_modules/@speechly/speech-recognition-polyfill/dist/index.js
var require_dist = __commonJS({
  "node_modules/@speechly/speech-recognition-polyfill/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_createSpeechRecognition(), exports);
    __exportStar(require_types(), exports);
  }
});

// node_modules/react-speech-recognition/lib/utils.js
var require_utils = __commonJS({
  "node_modules/react-speech-recognition/lib/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.browserSupportsPolyfills = exports.compareTwoStringsUsingDiceCoefficient = exports.commandToRegExp = exports.concatTranscripts = exports.debounce = void 0;
    var debounce = function debounce2(func, wait, immediate) {
      var timeout;
      return function() {
        var context = this;
        var args = arguments;
        var later = function later2() {
          timeout = null;
          if (!immediate)
            func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow)
          func.apply(context, args);
      };
    };
    exports.debounce = debounce;
    var concatTranscripts = function concatTranscripts2() {
      for (var _len = arguments.length, transcriptParts = new Array(_len), _key = 0; _key < _len; _key++) {
        transcriptParts[_key] = arguments[_key];
      }
      return transcriptParts.map(function(t) {
        return t.trim();
      }).join(" ").trim();
    };
    exports.concatTranscripts = concatTranscripts;
    var optionalParam = /\s*\((.*?)\)\s*/g;
    var optionalRegex = /(\(\?:[^)]+\))\?/g;
    var namedParam = /(\(\?)?:\w+/g;
    var splatParam = /\*/g;
    var escapeRegExp = /[-{}[\]+?.,\\^$|#]/g;
    var commandToRegExp = function commandToRegExp2(command) {
      if (command instanceof RegExp) {
        return new RegExp(command.source, "i");
      }
      command = command.replace(escapeRegExp, "\\$&").replace(optionalParam, "(?:$1)?").replace(namedParam, function(match, optional) {
        return optional ? match : "([^\\s]+)";
      }).replace(splatParam, "(.*?)").replace(optionalRegex, "\\s*$1?\\s*");
      return new RegExp("^" + command + "$", "i");
    };
    exports.commandToRegExp = commandToRegExp;
    var compareTwoStringsUsingDiceCoefficient = function compareTwoStringsUsingDiceCoefficient2(first, second) {
      first = first.replace(/\s+/g, "").toLowerCase();
      second = second.replace(/\s+/g, "").toLowerCase();
      if (!first.length && !second.length)
        return 1;
      if (!first.length || !second.length)
        return 0;
      if (first === second)
        return 1;
      if (first.length === 1 && second.length === 1)
        return 0;
      if (first.length < 2 || second.length < 2)
        return 0;
      var firstBigrams = /* @__PURE__ */ new Map();
      for (var i = 0; i < first.length - 1; i++) {
        var bigram = first.substring(i, i + 2);
        var count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) + 1 : 1;
        firstBigrams.set(bigram, count);
      }
      var intersectionSize = 0;
      for (var _i = 0; _i < second.length - 1; _i++) {
        var _bigram = second.substring(_i, _i + 2);
        var _count = firstBigrams.has(_bigram) ? firstBigrams.get(_bigram) : 0;
        if (_count > 0) {
          firstBigrams.set(_bigram, _count - 1);
          intersectionSize++;
        }
      }
      return 2 * intersectionSize / (first.length + second.length - 2);
    };
    exports.compareTwoStringsUsingDiceCoefficient = compareTwoStringsUsingDiceCoefficient;
    var browserSupportsPolyfills = function browserSupportsPolyfills2() {
      return typeof window !== "undefined" && window.navigator !== void 0 && window.navigator.mediaDevices !== void 0 && window.navigator.mediaDevices.getUserMedia !== void 0 && (window.AudioContext !== void 0 || window.webkitAudioContext !== void 0);
    };
    exports.browserSupportsPolyfills = browserSupportsPolyfills;
  }
});

// node_modules/react-speech-recognition/lib/constants.js
var require_constants = __commonJS({
  "node_modules/react-speech-recognition/lib/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.APPEND_TRANSCRIPT = exports.CLEAR_TRANSCRIPT = void 0;
    var CLEAR_TRANSCRIPT = "CLEAR_TRANSCRIPT";
    exports.CLEAR_TRANSCRIPT = CLEAR_TRANSCRIPT;
    var APPEND_TRANSCRIPT = "APPEND_TRANSCRIPT";
    exports.APPEND_TRANSCRIPT = APPEND_TRANSCRIPT;
  }
});

// node_modules/react-speech-recognition/lib/actions.js
var require_actions = __commonJS({
  "node_modules/react-speech-recognition/lib/actions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.appendTranscript = exports.clearTranscript = void 0;
    var _constants = require_constants();
    var clearTranscript = function clearTranscript2() {
      return {
        type: _constants.CLEAR_TRANSCRIPT
      };
    };
    exports.clearTranscript = clearTranscript;
    var appendTranscript = function appendTranscript2(interimTranscript, finalTranscript) {
      return {
        type: _constants.APPEND_TRANSCRIPT,
        payload: {
          interimTranscript,
          finalTranscript
        }
      };
    };
    exports.appendTranscript = appendTranscript;
  }
});

// node_modules/react-speech-recognition/lib/reducers.js
var require_reducers = __commonJS({
  "node_modules/react-speech-recognition/lib/reducers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.transcriptReducer = void 0;
    var _constants = require_constants();
    var _utils = require_utils();
    var transcriptReducer = function transcriptReducer2(state, action) {
      switch (action.type) {
        case _constants.CLEAR_TRANSCRIPT:
          return {
            interimTranscript: "",
            finalTranscript: ""
          };
        case _constants.APPEND_TRANSCRIPT:
          return {
            interimTranscript: action.payload.interimTranscript,
            finalTranscript: (0, _utils.concatTranscripts)(state.finalTranscript, action.payload.finalTranscript)
          };
        default:
          throw new Error();
      }
    };
    exports.transcriptReducer = transcriptReducer;
  }
});

// node_modules/react-speech-recognition/lib/isAndroid.js
var require_isAndroid = __commonJS({
  "node_modules/react-speech-recognition/lib/isAndroid.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _default = function _default2() {
      return /(android)/i.test(typeof navigator !== "undefined" ? navigator.userAgent : "");
    };
    exports["default"] = _default;
  }
});

// node_modules/react-speech-recognition/lib/NativeSpeechRecognition.js
var require_NativeSpeechRecognition = __commonJS({
  "node_modules/react-speech-recognition/lib/NativeSpeechRecognition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = exports.isNative = void 0;
    var NativeSpeechRecognition = typeof window !== "undefined" && (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition || window.oSpeechRecognition);
    var isNative = function isNative2(SpeechRecognition2) {
      return SpeechRecognition2 === NativeSpeechRecognition;
    };
    exports.isNative = isNative;
    var _default = NativeSpeechRecognition;
    exports["default"] = _default;
  }
});

// node_modules/react-speech-recognition/lib/RecognitionManager.js
var require_RecognitionManager = __commonJS({
  "node_modules/react-speech-recognition/lib/RecognitionManager.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _isAndroid = _interopRequireDefault(require_isAndroid());
    var _utils = require_utils();
    var _NativeSpeechRecognition = require_NativeSpeechRecognition();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      if (info.done) {
        resolve(value);
      } else {
        Promise.resolve(value).then(_next, _throw);
      }
    }
    function _asyncToGenerator(fn) {
      return function() {
        var self2 = this, args = arguments;
        return new Promise(function(resolve, reject) {
          var gen = fn.apply(self2, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }
          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }
          _next(void 0);
        });
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var RecognitionManager = /* @__PURE__ */ function() {
      function RecognitionManager2(SpeechRecognition2) {
        _classCallCheck(this, RecognitionManager2);
        this.recognition = null;
        this.pauseAfterDisconnect = false;
        this.interimTranscript = "";
        this.finalTranscript = "";
        this.listening = false;
        this.isMicrophoneAvailable = true;
        this.subscribers = {};
        this.onStopListening = function() {
        };
        this.previousResultWasFinalOnly = false;
        this.resetTranscript = this.resetTranscript.bind(this);
        this.startListening = this.startListening.bind(this);
        this.stopListening = this.stopListening.bind(this);
        this.abortListening = this.abortListening.bind(this);
        this.setSpeechRecognition = this.setSpeechRecognition.bind(this);
        this.disableRecognition = this.disableRecognition.bind(this);
        this.setSpeechRecognition(SpeechRecognition2);
        if ((0, _isAndroid["default"])()) {
          this.updateFinalTranscript = (0, _utils.debounce)(this.updateFinalTranscript, 250, true);
        }
      }
      _createClass(RecognitionManager2, [{
        key: "setSpeechRecognition",
        value: function setSpeechRecognition(SpeechRecognition2) {
          var browserSupportsRecogniser = !!SpeechRecognition2 && ((0, _NativeSpeechRecognition.isNative)(SpeechRecognition2) || (0, _utils.browserSupportsPolyfills)());
          if (browserSupportsRecogniser) {
            this.disableRecognition();
            this.recognition = new SpeechRecognition2();
            this.recognition.continuous = false;
            this.recognition.interimResults = true;
            this.recognition.onresult = this.updateTranscript.bind(this);
            this.recognition.onend = this.onRecognitionDisconnect.bind(this);
            this.recognition.onerror = this.onError.bind(this);
          }
          this.emitBrowserSupportsSpeechRecognitionChange(browserSupportsRecogniser);
        }
      }, {
        key: "subscribe",
        value: function subscribe(id, callbacks) {
          this.subscribers[id] = callbacks;
        }
      }, {
        key: "unsubscribe",
        value: function unsubscribe(id) {
          delete this.subscribers[id];
        }
      }, {
        key: "emitListeningChange",
        value: function emitListeningChange(listening) {
          var _this = this;
          this.listening = listening;
          Object.keys(this.subscribers).forEach(function(id) {
            var onListeningChange = _this.subscribers[id].onListeningChange;
            onListeningChange(listening);
          });
        }
      }, {
        key: "emitMicrophoneAvailabilityChange",
        value: function emitMicrophoneAvailabilityChange(isMicrophoneAvailable) {
          var _this2 = this;
          this.isMicrophoneAvailable = isMicrophoneAvailable;
          Object.keys(this.subscribers).forEach(function(id) {
            var onMicrophoneAvailabilityChange = _this2.subscribers[id].onMicrophoneAvailabilityChange;
            onMicrophoneAvailabilityChange(isMicrophoneAvailable);
          });
        }
      }, {
        key: "emitTranscriptChange",
        value: function emitTranscriptChange(interimTranscript, finalTranscript) {
          var _this3 = this;
          Object.keys(this.subscribers).forEach(function(id) {
            var onTranscriptChange = _this3.subscribers[id].onTranscriptChange;
            onTranscriptChange(interimTranscript, finalTranscript);
          });
        }
      }, {
        key: "emitClearTranscript",
        value: function emitClearTranscript() {
          var _this4 = this;
          Object.keys(this.subscribers).forEach(function(id) {
            var onClearTranscript = _this4.subscribers[id].onClearTranscript;
            onClearTranscript();
          });
        }
      }, {
        key: "emitBrowserSupportsSpeechRecognitionChange",
        value: function emitBrowserSupportsSpeechRecognitionChange(browserSupportsSpeechRecognitionChange) {
          var _this5 = this;
          Object.keys(this.subscribers).forEach(function(id) {
            var _this5$subscribers$id = _this5.subscribers[id], onBrowserSupportsSpeechRecognitionChange = _this5$subscribers$id.onBrowserSupportsSpeechRecognitionChange, onBrowserSupportsContinuousListeningChange = _this5$subscribers$id.onBrowserSupportsContinuousListeningChange;
            onBrowserSupportsSpeechRecognitionChange(browserSupportsSpeechRecognitionChange);
            onBrowserSupportsContinuousListeningChange(browserSupportsSpeechRecognitionChange);
          });
        }
      }, {
        key: "disconnect",
        value: function disconnect(disconnectType) {
          if (this.recognition && this.listening) {
            switch (disconnectType) {
              case "ABORT":
                this.pauseAfterDisconnect = true;
                this.abort();
                break;
              case "RESET":
                this.pauseAfterDisconnect = false;
                this.abort();
                break;
              case "STOP":
              default:
                this.pauseAfterDisconnect = true;
                this.stop();
            }
          }
        }
      }, {
        key: "disableRecognition",
        value: function disableRecognition() {
          if (this.recognition) {
            this.recognition.onresult = function() {
            };
            this.recognition.onend = function() {
            };
            this.recognition.onerror = function() {
            };
            if (this.listening) {
              this.stopListening();
            }
          }
        }
      }, {
        key: "onError",
        value: function onError(event) {
          if (event && event.error && event.error === "not-allowed") {
            this.emitMicrophoneAvailabilityChange(false);
            this.disableRecognition();
          }
        }
      }, {
        key: "onRecognitionDisconnect",
        value: function onRecognitionDisconnect() {
          this.onStopListening();
          this.listening = false;
          if (this.pauseAfterDisconnect) {
            this.emitListeningChange(false);
          } else if (this.recognition) {
            if (this.recognition.continuous) {
              this.startListening({
                continuous: this.recognition.continuous
              });
            } else {
              this.emitListeningChange(false);
            }
          }
          this.pauseAfterDisconnect = false;
        }
      }, {
        key: "updateTranscript",
        value: function updateTranscript(_ref) {
          var results = _ref.results, resultIndex = _ref.resultIndex;
          var currentIndex = resultIndex === void 0 ? results.length - 1 : resultIndex;
          this.interimTranscript = "";
          this.finalTranscript = "";
          for (var i = currentIndex; i < results.length; ++i) {
            if (results[i].isFinal && (!(0, _isAndroid["default"])() || results[i][0].confidence > 0)) {
              this.updateFinalTranscript(results[i][0].transcript);
            } else {
              this.interimTranscript = (0, _utils.concatTranscripts)(this.interimTranscript, results[i][0].transcript);
            }
          }
          var isDuplicateResult = false;
          if (this.interimTranscript === "" && this.finalTranscript !== "") {
            if (this.previousResultWasFinalOnly) {
              isDuplicateResult = true;
            }
            this.previousResultWasFinalOnly = true;
          } else {
            this.previousResultWasFinalOnly = false;
          }
          if (!isDuplicateResult) {
            this.emitTranscriptChange(this.interimTranscript, this.finalTranscript);
          }
        }
      }, {
        key: "updateFinalTranscript",
        value: function updateFinalTranscript(newFinalTranscript) {
          this.finalTranscript = (0, _utils.concatTranscripts)(this.finalTranscript, newFinalTranscript);
        }
      }, {
        key: "resetTranscript",
        value: function resetTranscript() {
          this.disconnect("RESET");
        }
      }, {
        key: "startListening",
        value: function() {
          var _startListening = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee() {
            var _ref2, _ref2$continuous, continuous, language, isContinuousChanged, isLanguageChanged, _args = arguments;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _ref2 = _args.length > 0 && _args[0] !== void 0 ? _args[0] : {}, _ref2$continuous = _ref2.continuous, continuous = _ref2$continuous === void 0 ? false : _ref2$continuous, language = _ref2.language;
                    if (this.recognition) {
                      _context.next = 3;
                      break;
                    }
                    return _context.abrupt("return");
                  case 3:
                    isContinuousChanged = continuous !== this.recognition.continuous;
                    isLanguageChanged = language && language !== this.recognition.lang;
                    if (!(isContinuousChanged || isLanguageChanged)) {
                      _context.next = 11;
                      break;
                    }
                    if (!this.listening) {
                      _context.next = 9;
                      break;
                    }
                    _context.next = 9;
                    return this.stopListening();
                  case 9:
                    this.recognition.continuous = isContinuousChanged ? continuous : this.recognition.continuous;
                    this.recognition.lang = isLanguageChanged ? language : this.recognition.lang;
                  case 11:
                    if (this.listening) {
                      _context.next = 22;
                      break;
                    }
                    if (!this.recognition.continuous) {
                      this.resetTranscript();
                      this.emitClearTranscript();
                    }
                    _context.prev = 13;
                    _context.next = 16;
                    return this.start();
                  case 16:
                    this.emitListeningChange(true);
                    _context.next = 22;
                    break;
                  case 19:
                    _context.prev = 19;
                    _context.t0 = _context["catch"](13);
                    if (!(_context.t0 instanceof DOMException)) {
                      this.emitMicrophoneAvailabilityChange(false);
                    }
                  case 22:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[13, 19]]);
          }));
          function startListening() {
            return _startListening.apply(this, arguments);
          }
          return startListening;
        }()
      }, {
        key: "abortListening",
        value: function() {
          var _abortListening = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee2() {
            var _this6 = this;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.disconnect("ABORT");
                    this.emitListeningChange(false);
                    _context2.next = 4;
                    return new Promise(function(resolve) {
                      _this6.onStopListening = resolve;
                    });
                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
          function abortListening() {
            return _abortListening.apply(this, arguments);
          }
          return abortListening;
        }()
      }, {
        key: "stopListening",
        value: function() {
          var _stopListening = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee3() {
            var _this7 = this;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.disconnect("STOP");
                    this.emitListeningChange(false);
                    _context3.next = 4;
                    return new Promise(function(resolve) {
                      _this7.onStopListening = resolve;
                    });
                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
          function stopListening() {
            return _stopListening.apply(this, arguments);
          }
          return stopListening;
        }()
      }, {
        key: "getRecognition",
        value: function getRecognition() {
          return this.recognition;
        }
      }, {
        key: "start",
        value: function() {
          var _start = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!(this.recognition && !this.listening)) {
                      _context4.next = 4;
                      break;
                    }
                    _context4.next = 3;
                    return this.recognition.start();
                  case 3:
                    this.listening = true;
                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
          function start() {
            return _start.apply(this, arguments);
          }
          return start;
        }()
      }, {
        key: "stop",
        value: function stop() {
          if (this.recognition && this.listening) {
            this.recognition.stop();
            this.listening = false;
          }
        }
      }, {
        key: "abort",
        value: function abort() {
          if (this.recognition && this.listening) {
            this.recognition.abort();
            this.listening = false;
          }
        }
      }]);
      return RecognitionManager2;
    }();
    exports["default"] = RecognitionManager;
  }
});

// node_modules/react-speech-recognition/lib/SpeechRecognition.js
var require_SpeechRecognition = __commonJS({
  "node_modules/react-speech-recognition/lib/SpeechRecognition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = exports.useSpeechRecognition = void 0;
    var _react = require_react();
    var _utils = require_utils();
    var _actions = require_actions();
    var _reducers = require_reducers();
    var _RecognitionManager = _interopRequireDefault(require_RecognitionManager());
    var _isAndroid = _interopRequireDefault(require_isAndroid());
    var _NativeSpeechRecognition = _interopRequireDefault(require_NativeSpeechRecognition());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      if (info.done) {
        resolve(value);
      } else {
        Promise.resolve(value).then(_next, _throw);
      }
    }
    function _asyncToGenerator(fn) {
      return function() {
        var self2 = this, args = arguments;
        return new Promise(function(resolve, reject) {
          var gen = fn.apply(self2, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }
          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }
          _next(void 0);
        });
      };
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
        return Array.from(iter);
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function _iterableToArrayLimit(arr, i) {
      if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = void 0;
      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    var _browserSupportsSpeechRecognition = !!_NativeSpeechRecognition["default"];
    var _browserSupportsContinuousListening = _browserSupportsSpeechRecognition && !(0, _isAndroid["default"])();
    var recognitionManager;
    var useSpeechRecognition2 = function useSpeechRecognition3() {
      var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$transcribing = _ref.transcribing, transcribing = _ref$transcribing === void 0 ? true : _ref$transcribing, _ref$clearTranscriptO = _ref.clearTranscriptOnListen, clearTranscriptOnListen = _ref$clearTranscriptO === void 0 ? true : _ref$clearTranscriptO, _ref$commands = _ref.commands, commands = _ref$commands === void 0 ? [] : _ref$commands;
      var _useState = (0, _react.useState)(SpeechRecognition2.getRecognitionManager()), _useState2 = _slicedToArray(_useState, 1), recognitionManager2 = _useState2[0];
      var _useState3 = (0, _react.useState)(_browserSupportsSpeechRecognition), _useState4 = _slicedToArray(_useState3, 2), browserSupportsSpeechRecognition = _useState4[0], setBrowserSupportsSpeechRecognition = _useState4[1];
      var _useState5 = (0, _react.useState)(_browserSupportsContinuousListening), _useState6 = _slicedToArray(_useState5, 2), browserSupportsContinuousListening = _useState6[0], setBrowserSupportsContinuousListening = _useState6[1];
      var _useReducer = (0, _react.useReducer)(_reducers.transcriptReducer, {
        interimTranscript: recognitionManager2.interimTranscript,
        finalTranscript: ""
      }), _useReducer2 = _slicedToArray(_useReducer, 2), _useReducer2$ = _useReducer2[0], interimTranscript = _useReducer2$.interimTranscript, finalTranscript = _useReducer2$.finalTranscript, dispatch = _useReducer2[1];
      var _useState7 = (0, _react.useState)(recognitionManager2.listening), _useState8 = _slicedToArray(_useState7, 2), listening = _useState8[0], setListening = _useState8[1];
      var _useState9 = (0, _react.useState)(recognitionManager2.isMicrophoneAvailable), _useState10 = _slicedToArray(_useState9, 2), isMicrophoneAvailable = _useState10[0], setMicrophoneAvailable = _useState10[1];
      var commandsRef = (0, _react.useRef)(commands);
      commandsRef.current = commands;
      var dispatchClearTranscript = function dispatchClearTranscript2() {
        dispatch((0, _actions.clearTranscript)());
      };
      var resetTranscript = (0, _react.useCallback)(function() {
        recognitionManager2.resetTranscript();
        dispatchClearTranscript();
      }, [recognitionManager2]);
      var testFuzzyMatch = function testFuzzyMatch2(command, input, fuzzyMatchingThreshold) {
        var commandToString = _typeof(command) === "object" ? command.toString() : command;
        var commandWithoutSpecials = commandToString.replace(/[&/\\#,+()!$~%.'":*?<>{}]/g, "").replace(/  +/g, " ").trim();
        var howSimilar = (0, _utils.compareTwoStringsUsingDiceCoefficient)(commandWithoutSpecials, input);
        if (howSimilar >= fuzzyMatchingThreshold) {
          return {
            command,
            commandWithoutSpecials,
            howSimilar,
            isFuzzyMatch: true
          };
        }
        return null;
      };
      var testMatch = function testMatch2(command, input) {
        var pattern = (0, _utils.commandToRegExp)(command);
        var result = pattern.exec(input);
        if (result) {
          return {
            command,
            parameters: result.slice(1)
          };
        }
        return null;
      };
      var matchCommands = (0, _react.useCallback)(function(newInterimTranscript, newFinalTranscript) {
        commandsRef.current.forEach(function(_ref2) {
          var command = _ref2.command, callback = _ref2.callback, _ref2$matchInterim = _ref2.matchInterim, matchInterim = _ref2$matchInterim === void 0 ? false : _ref2$matchInterim, _ref2$isFuzzyMatch = _ref2.isFuzzyMatch, isFuzzyMatch = _ref2$isFuzzyMatch === void 0 ? false : _ref2$isFuzzyMatch, _ref2$fuzzyMatchingTh = _ref2.fuzzyMatchingThreshold, fuzzyMatchingThreshold = _ref2$fuzzyMatchingTh === void 0 ? 0.8 : _ref2$fuzzyMatchingTh, _ref2$bestMatchOnly = _ref2.bestMatchOnly, bestMatchOnly = _ref2$bestMatchOnly === void 0 ? false : _ref2$bestMatchOnly;
          var input = !newFinalTranscript && matchInterim ? newInterimTranscript.trim() : newFinalTranscript.trim();
          var subcommands = Array.isArray(command) ? command : [command];
          var results = subcommands.map(function(subcommand) {
            if (isFuzzyMatch) {
              return testFuzzyMatch(subcommand, input, fuzzyMatchingThreshold);
            }
            return testMatch(subcommand, input);
          }).filter(function(x) {
            return x;
          });
          if (isFuzzyMatch && bestMatchOnly && results.length >= 2) {
            results.sort(function(a, b) {
              return b.howSimilar - a.howSimilar;
            });
            var _results$ = results[0], _command = _results$.command, commandWithoutSpecials = _results$.commandWithoutSpecials, howSimilar = _results$.howSimilar;
            callback(commandWithoutSpecials, input, howSimilar, {
              command: _command,
              resetTranscript
            });
          } else {
            results.forEach(function(result) {
              if (result.isFuzzyMatch) {
                var _command2 = result.command, _commandWithoutSpecials = result.commandWithoutSpecials, _howSimilar = result.howSimilar;
                callback(_commandWithoutSpecials, input, _howSimilar, {
                  command: _command2,
                  resetTranscript
                });
              } else {
                var _command3 = result.command, parameters = result.parameters;
                callback.apply(void 0, _toConsumableArray(parameters).concat([{
                  command: _command3,
                  resetTranscript
                }]));
              }
            });
          }
        });
      }, [resetTranscript]);
      var handleTranscriptChange = (0, _react.useCallback)(function(newInterimTranscript, newFinalTranscript) {
        if (transcribing) {
          dispatch((0, _actions.appendTranscript)(newInterimTranscript, newFinalTranscript));
        }
        matchCommands(newInterimTranscript, newFinalTranscript);
      }, [matchCommands, transcribing]);
      var handleClearTranscript = (0, _react.useCallback)(function() {
        if (clearTranscriptOnListen) {
          dispatchClearTranscript();
        }
      }, [clearTranscriptOnListen]);
      (0, _react.useEffect)(function() {
        var id = SpeechRecognition2.counter;
        SpeechRecognition2.counter += 1;
        var callbacks = {
          onListeningChange: setListening,
          onMicrophoneAvailabilityChange: setMicrophoneAvailable,
          onTranscriptChange: handleTranscriptChange,
          onClearTranscript: handleClearTranscript,
          onBrowserSupportsSpeechRecognitionChange: setBrowserSupportsSpeechRecognition,
          onBrowserSupportsContinuousListeningChange: setBrowserSupportsContinuousListening
        };
        recognitionManager2.subscribe(id, callbacks);
        return function() {
          recognitionManager2.unsubscribe(id);
        };
      }, [transcribing, clearTranscriptOnListen, recognitionManager2, handleTranscriptChange, handleClearTranscript]);
      var transcript = (0, _utils.concatTranscripts)(finalTranscript, interimTranscript);
      return {
        transcript,
        interimTranscript,
        finalTranscript,
        listening,
        isMicrophoneAvailable,
        resetTranscript,
        browserSupportsSpeechRecognition,
        browserSupportsContinuousListening
      };
    };
    exports.useSpeechRecognition = useSpeechRecognition2;
    var SpeechRecognition2 = {
      counter: 0,
      applyPolyfill: function applyPolyfill(PolyfillSpeechRecognition) {
        if (recognitionManager) {
          recognitionManager.setSpeechRecognition(PolyfillSpeechRecognition);
        } else {
          recognitionManager = new _RecognitionManager["default"](PolyfillSpeechRecognition);
        }
        var browserSupportsPolyfill = !!PolyfillSpeechRecognition && (0, _utils.browserSupportsPolyfills)();
        _browserSupportsSpeechRecognition = browserSupportsPolyfill;
        _browserSupportsContinuousListening = browserSupportsPolyfill;
      },
      removePolyfill: function removePolyfill() {
        if (recognitionManager) {
          recognitionManager.setSpeechRecognition(_NativeSpeechRecognition["default"]);
        } else {
          recognitionManager = new _RecognitionManager["default"](_NativeSpeechRecognition["default"]);
        }
        _browserSupportsSpeechRecognition = !!_NativeSpeechRecognition["default"];
        _browserSupportsContinuousListening = _browserSupportsSpeechRecognition && !(0, _isAndroid["default"])();
      },
      getRecognitionManager: function getRecognitionManager() {
        if (!recognitionManager) {
          recognitionManager = new _RecognitionManager["default"](_NativeSpeechRecognition["default"]);
        }
        return recognitionManager;
      },
      getRecognition: function getRecognition() {
        var recognitionManager2 = SpeechRecognition2.getRecognitionManager();
        return recognitionManager2.getRecognition();
      },
      startListening: function() {
        var _startListening = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee() {
          var _ref3, continuous, language, recognitionManager2, _args = arguments;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _ref3 = _args.length > 0 && _args[0] !== void 0 ? _args[0] : {}, continuous = _ref3.continuous, language = _ref3.language;
                  recognitionManager2 = SpeechRecognition2.getRecognitionManager();
                  _context.next = 4;
                  return recognitionManager2.startListening({
                    continuous,
                    language
                  });
                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        function startListening() {
          return _startListening.apply(this, arguments);
        }
        return startListening;
      }(),
      stopListening: function() {
        var _stopListening = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee2() {
          var recognitionManager2;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  recognitionManager2 = SpeechRecognition2.getRecognitionManager();
                  _context2.next = 3;
                  return recognitionManager2.stopListening();
                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        function stopListening() {
          return _stopListening.apply(this, arguments);
        }
        return stopListening;
      }(),
      abortListening: function() {
        var _abortListening = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee3() {
          var recognitionManager2;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  recognitionManager2 = SpeechRecognition2.getRecognitionManager();
                  _context3.next = 3;
                  return recognitionManager2.abortListening();
                case 3:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));
        function abortListening() {
          return _abortListening.apply(this, arguments);
        }
        return abortListening;
      }(),
      browserSupportsSpeechRecognition: function browserSupportsSpeechRecognition() {
        return _browserSupportsSpeechRecognition;
      },
      browserSupportsContinuousListening: function browserSupportsContinuousListening() {
        return _browserSupportsContinuousListening;
      }
    };
    var _default = SpeechRecognition2;
    exports["default"] = _default;
  }
});

// node_modules/react-speech-recognition/lib/index.js
var require_lib = __commonJS({
  "node_modules/react-speech-recognition/lib/index.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "useSpeechRecognition", {
      enumerable: true,
      get: function get() {
        return _SpeechRecognition.useSpeechRecognition;
      }
    });
    exports["default"] = void 0;
    var _SpeechRecognition = _interopRequireWildcard(require_SpeechRecognition());
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    var _default = _SpeechRecognition["default"];
    exports["default"] = _default;
  }
});

// node_modules/dompurify/dist/purify.js
var require_purify = __commonJS({
  "node_modules/dompurify/dist/purify.js"(exports, module) {
    (function(global2, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, global2.DOMPurify = factory());
    })(exports, function() {
      "use strict";
      function _typeof(obj) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
          return typeof obj2;
        } : function(obj2) {
          return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        }, _typeof(obj);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _construct(Parent, args, Class) {
        if (_isNativeReflectConstruct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct2(Parent2, args2, Class2) {
            var a = [null];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _setPrototypeOf(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr))
          return _arrayLikeToArray(arr);
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr))
          return arr;
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _iterableToArrayLimit(arr, i) {
        var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
        if (_i == null)
          return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _s, _e;
        try {
          for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null)
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it)
              o = it;
            var i = 0;
            var F = function() {
            };
            return {
              s: F,
              n: function() {
                if (i >= o.length)
                  return {
                    done: true
                  };
                return {
                  done: false,
                  value: o[i++]
                };
              },
              e: function(e) {
                throw e;
              },
              f: F
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true, didErr = false, err;
        return {
          s: function() {
            it = it.call(o);
          },
          n: function() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function(e) {
            didErr = true;
            err = e;
          },
          f: function() {
            try {
              if (!normalCompletion && it.return != null)
                it.return();
            } finally {
              if (didErr)
                throw err;
            }
          }
        };
      }
      var entries = Object.entries, setPrototypeOf = Object.setPrototypeOf, isFrozen = Object.isFrozen, getPrototypeOf = Object.getPrototypeOf, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var freeze = Object.freeze, seal = Object.seal, create = Object.create;
      var _ref = typeof Reflect !== "undefined" && Reflect, apply = _ref.apply, construct = _ref.construct;
      if (!apply) {
        apply = function apply2(fun, thisValue, args) {
          return fun.apply(thisValue, args);
        };
      }
      if (!freeze) {
        freeze = function freeze2(x) {
          return x;
        };
      }
      if (!seal) {
        seal = function seal2(x) {
          return x;
        };
      }
      if (!construct) {
        construct = function construct2(Func, args) {
          return _construct(Func, _toConsumableArray(args));
        };
      }
      var arrayForEach = unapply(Array.prototype.forEach);
      var arrayPop = unapply(Array.prototype.pop);
      var arrayPush = unapply(Array.prototype.push);
      var stringToLowerCase = unapply(String.prototype.toLowerCase);
      var stringToString = unapply(String.prototype.toString);
      var stringMatch = unapply(String.prototype.match);
      var stringReplace = unapply(String.prototype.replace);
      var stringIndexOf = unapply(String.prototype.indexOf);
      var stringTrim = unapply(String.prototype.trim);
      var regExpTest = unapply(RegExp.prototype.test);
      var typeErrorCreate = unconstruct(TypeError);
      function unapply(func) {
        return function(thisArg) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          return apply(func, thisArg, args);
        };
      }
      function unconstruct(func) {
        return function() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          return construct(func, args);
        };
      }
      function addToSet(set, array, transformCaseFunc) {
        transformCaseFunc = transformCaseFunc ? transformCaseFunc : stringToLowerCase;
        if (setPrototypeOf) {
          setPrototypeOf(set, null);
        }
        var l = array.length;
        while (l--) {
          var element = array[l];
          if (typeof element === "string") {
            var lcElement = transformCaseFunc(element);
            if (lcElement !== element) {
              if (!isFrozen(array)) {
                array[l] = lcElement;
              }
              element = lcElement;
            }
          }
          set[element] = true;
        }
        return set;
      }
      function clone(object) {
        var newObject = create(null);
        var _iterator = _createForOfIteratorHelper(entries(object)), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var _step$value = _slicedToArray(_step.value, 2), property = _step$value[0], value = _step$value[1];
            newObject[property] = value;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return newObject;
      }
      function lookupGetter(object, prop) {
        while (object !== null) {
          var desc = getOwnPropertyDescriptor(object, prop);
          if (desc) {
            if (desc.get) {
              return unapply(desc.get);
            }
            if (typeof desc.value === "function") {
              return unapply(desc.value);
            }
          }
          object = getPrototypeOf(object);
        }
        function fallbackValue(element) {
          console.warn("fallback value for", element);
          return null;
        }
        return fallbackValue;
      }
      var html$1 = freeze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
      var svg$1 = freeze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
      var svgFilters = freeze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
      var svgDisallowed = freeze(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
      var mathMl$1 = freeze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]);
      var mathMlDisallowed = freeze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
      var text = freeze(["#text"]);
      var html = freeze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]);
      var svg = freeze(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
      var mathMl = freeze(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
      var xml = freeze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
      var MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
      var ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
      var TMPLIT_EXPR = seal(/\${[\w\W]*}/gm);
      var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/);
      var ARIA_ATTR = seal(/^aria-[\-\w]+$/);
      var IS_ALLOWED_URI = seal(
        /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
      );
      var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
      var ATTR_WHITESPACE = seal(
        /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
      );
      var DOCTYPE_NAME = seal(/^html$/i);
      var getGlobal = function getGlobal2() {
        return typeof window === "undefined" ? null : window;
      };
      var _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, document2) {
        if (_typeof(trustedTypes) !== "object" || typeof trustedTypes.createPolicy !== "function") {
          return null;
        }
        var suffix = null;
        var ATTR_NAME = "data-tt-policy-suffix";
        if (document2.currentScript && document2.currentScript.hasAttribute(ATTR_NAME)) {
          suffix = document2.currentScript.getAttribute(ATTR_NAME);
        }
        var policyName = "dompurify" + (suffix ? "#" + suffix : "");
        try {
          return trustedTypes.createPolicy(policyName, {
            createHTML: function createHTML(html2) {
              return html2;
            },
            createScriptURL: function createScriptURL(scriptUrl) {
              return scriptUrl;
            }
          });
        } catch (_) {
          console.warn("TrustedTypes policy " + policyName + " could not be created.");
          return null;
        }
      };
      function createDOMPurify() {
        var window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
        var DOMPurify4 = function DOMPurify5(root) {
          return createDOMPurify(root);
        };
        DOMPurify4.version = "3.0.1";
        DOMPurify4.removed = [];
        if (!window2 || !window2.document || window2.document.nodeType !== 9) {
          DOMPurify4.isSupported = false;
          return DOMPurify4;
        }
        var originalDocument = window2.document;
        var document2 = window2.document;
        var DocumentFragment = window2.DocumentFragment, HTMLTemplateElement = window2.HTMLTemplateElement, Node = window2.Node, Element = window2.Element, NodeFilter = window2.NodeFilter, _window$NamedNodeMap = window2.NamedNodeMap, NamedNodeMap = _window$NamedNodeMap === void 0 ? window2.NamedNodeMap || window2.MozNamedAttrMap : _window$NamedNodeMap, HTMLFormElement = window2.HTMLFormElement, DOMParser = window2.DOMParser, trustedTypes = window2.trustedTypes;
        var ElementPrototype = Element.prototype;
        var cloneNode = lookupGetter(ElementPrototype, "cloneNode");
        var getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
        var getChildNodes = lookupGetter(ElementPrototype, "childNodes");
        var getParentNode = lookupGetter(ElementPrototype, "parentNode");
        if (typeof HTMLTemplateElement === "function") {
          var template = document2.createElement("template");
          if (template.content && template.content.ownerDocument) {
            document2 = template.content.ownerDocument;
          }
        }
        var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);
        var emptyHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML("") : "";
        var _document = document2, implementation = _document.implementation, createNodeIterator = _document.createNodeIterator, createDocumentFragment = _document.createDocumentFragment, getElementsByTagName = _document.getElementsByTagName;
        var importNode = originalDocument.importNode;
        var hooks = {};
        DOMPurify4.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && typeof implementation.createHTMLDocument !== "undefined";
        var MUSTACHE_EXPR$1 = MUSTACHE_EXPR, ERB_EXPR$1 = ERB_EXPR, TMPLIT_EXPR$1 = TMPLIT_EXPR, DATA_ATTR$1 = DATA_ATTR, ARIA_ATTR$1 = ARIA_ATTR, IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA, ATTR_WHITESPACE$1 = ATTR_WHITESPACE;
        var IS_ALLOWED_URI$1 = IS_ALLOWED_URI;
        var ALLOWED_TAGS = null;
        var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(html$1), _toConsumableArray(svg$1), _toConsumableArray(svgFilters), _toConsumableArray(mathMl$1), _toConsumableArray(text)));
        var ALLOWED_ATTR = null;
        var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray(html), _toConsumableArray(svg), _toConsumableArray(mathMl), _toConsumableArray(xml)));
        var CUSTOM_ELEMENT_HANDLING = Object.seal(Object.create(null, {
          tagNameCheck: {
            writable: true,
            configurable: false,
            enumerable: true,
            value: null
          },
          attributeNameCheck: {
            writable: true,
            configurable: false,
            enumerable: true,
            value: null
          },
          allowCustomizedBuiltInElements: {
            writable: true,
            configurable: false,
            enumerable: true,
            value: false
          }
        }));
        var FORBID_TAGS = null;
        var FORBID_ATTR = null;
        var ALLOW_ARIA_ATTR = true;
        var ALLOW_DATA_ATTR = true;
        var ALLOW_UNKNOWN_PROTOCOLS = false;
        var ALLOW_SELF_CLOSE_IN_ATTR = true;
        var SAFE_FOR_TEMPLATES = false;
        var WHOLE_DOCUMENT = false;
        var SET_CONFIG = false;
        var FORCE_BODY = false;
        var RETURN_DOM = false;
        var RETURN_DOM_FRAGMENT = false;
        var RETURN_TRUSTED_TYPE = false;
        var SANITIZE_DOM = true;
        var SANITIZE_NAMED_PROPS = false;
        var SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
        var KEEP_CONTENT = true;
        var IN_PLACE = false;
        var USE_PROFILES = {};
        var FORBID_CONTENTS = null;
        var DEFAULT_FORBID_CONTENTS = addToSet({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
        var DATA_URI_TAGS = null;
        var DEFAULT_DATA_URI_TAGS = addToSet({}, ["audio", "video", "img", "source", "image", "track"]);
        var URI_SAFE_ATTRIBUTES = null;
        var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
        var MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
        var SVG_NAMESPACE = "http://www.w3.org/2000/svg";
        var HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
        var NAMESPACE = HTML_NAMESPACE;
        var IS_EMPTY_INPUT = false;
        var ALLOWED_NAMESPACES = null;
        var DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
        var PARSER_MEDIA_TYPE;
        var SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
        var DEFAULT_PARSER_MEDIA_TYPE = "text/html";
        var transformCaseFunc;
        var CONFIG = null;
        var formElement = document2.createElement("form");
        var isRegexOrFunction = function isRegexOrFunction2(testValue) {
          return testValue instanceof RegExp || testValue instanceof Function;
        };
        var _parseConfig = function _parseConfig2(cfg) {
          if (CONFIG && CONFIG === cfg) {
            return;
          }
          if (!cfg || _typeof(cfg) !== "object") {
            cfg = {};
          }
          cfg = clone(cfg);
          PARSER_MEDIA_TYPE = SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE;
          transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
          ALLOWED_TAGS = "ALLOWED_TAGS" in cfg ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
          ALLOWED_ATTR = "ALLOWED_ATTR" in cfg ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
          ALLOWED_NAMESPACES = "ALLOWED_NAMESPACES" in cfg ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
          URI_SAFE_ATTRIBUTES = "ADD_URI_SAFE_ATTR" in cfg ? addToSet(
            clone(DEFAULT_URI_SAFE_ATTRIBUTES),
            cfg.ADD_URI_SAFE_ATTR,
            transformCaseFunc
          ) : DEFAULT_URI_SAFE_ATTRIBUTES;
          DATA_URI_TAGS = "ADD_DATA_URI_TAGS" in cfg ? addToSet(
            clone(DEFAULT_DATA_URI_TAGS),
            cfg.ADD_DATA_URI_TAGS,
            transformCaseFunc
          ) : DEFAULT_DATA_URI_TAGS;
          FORBID_CONTENTS = "FORBID_CONTENTS" in cfg ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
          FORBID_TAGS = "FORBID_TAGS" in cfg ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
          FORBID_ATTR = "FORBID_ATTR" in cfg ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
          USE_PROFILES = "USE_PROFILES" in cfg ? cfg.USE_PROFILES : false;
          ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
          ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
          ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
          ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
          SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
          WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
          RETURN_DOM = cfg.RETURN_DOM || false;
          RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
          RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
          FORCE_BODY = cfg.FORCE_BODY || false;
          SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
          SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
          KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
          IN_PLACE = cfg.IN_PLACE || false;
          IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$1;
          NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
          CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
          if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
            CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
          }
          if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
            CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
          }
          if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") {
            CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
          }
          if (SAFE_FOR_TEMPLATES) {
            ALLOW_DATA_ATTR = false;
          }
          if (RETURN_DOM_FRAGMENT) {
            RETURN_DOM = true;
          }
          if (USE_PROFILES) {
            ALLOWED_TAGS = addToSet({}, _toConsumableArray(text));
            ALLOWED_ATTR = [];
            if (USE_PROFILES.html === true) {
              addToSet(ALLOWED_TAGS, html$1);
              addToSet(ALLOWED_ATTR, html);
            }
            if (USE_PROFILES.svg === true) {
              addToSet(ALLOWED_TAGS, svg$1);
              addToSet(ALLOWED_ATTR, svg);
              addToSet(ALLOWED_ATTR, xml);
            }
            if (USE_PROFILES.svgFilters === true) {
              addToSet(ALLOWED_TAGS, svgFilters);
              addToSet(ALLOWED_ATTR, svg);
              addToSet(ALLOWED_ATTR, xml);
            }
            if (USE_PROFILES.mathMl === true) {
              addToSet(ALLOWED_TAGS, mathMl$1);
              addToSet(ALLOWED_ATTR, mathMl);
              addToSet(ALLOWED_ATTR, xml);
            }
          }
          if (cfg.ADD_TAGS) {
            if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
              ALLOWED_TAGS = clone(ALLOWED_TAGS);
            }
            addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
          }
          if (cfg.ADD_ATTR) {
            if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
              ALLOWED_ATTR = clone(ALLOWED_ATTR);
            }
            addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
          }
          if (cfg.ADD_URI_SAFE_ATTR) {
            addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
          }
          if (cfg.FORBID_CONTENTS) {
            if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
              FORBID_CONTENTS = clone(FORBID_CONTENTS);
            }
            addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
          }
          if (KEEP_CONTENT) {
            ALLOWED_TAGS["#text"] = true;
          }
          if (WHOLE_DOCUMENT) {
            addToSet(ALLOWED_TAGS, ["html", "head", "body"]);
          }
          if (ALLOWED_TAGS.table) {
            addToSet(ALLOWED_TAGS, ["tbody"]);
            delete FORBID_TAGS.tbody;
          }
          if (freeze) {
            freeze(cfg);
          }
          CONFIG = cfg;
        };
        var MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ["mi", "mo", "mn", "ms", "mtext"]);
        var HTML_INTEGRATION_POINTS = addToSet({}, ["foreignobject", "desc", "title", "annotation-xml"]);
        var COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ["title", "style", "font", "a", "script"]);
        var ALL_SVG_TAGS = addToSet({}, svg$1);
        addToSet(ALL_SVG_TAGS, svgFilters);
        addToSet(ALL_SVG_TAGS, svgDisallowed);
        var ALL_MATHML_TAGS = addToSet({}, mathMl$1);
        addToSet(ALL_MATHML_TAGS, mathMlDisallowed);
        var _checkValidNamespace = function _checkValidNamespace2(element) {
          var parent = getParentNode(element);
          if (!parent || !parent.tagName) {
            parent = {
              namespaceURI: NAMESPACE,
              tagName: "template"
            };
          }
          var tagName = stringToLowerCase(element.tagName);
          var parentTagName = stringToLowerCase(parent.tagName);
          if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
            return false;
          }
          if (element.namespaceURI === SVG_NAMESPACE) {
            if (parent.namespaceURI === HTML_NAMESPACE) {
              return tagName === "svg";
            }
            if (parent.namespaceURI === MATHML_NAMESPACE) {
              return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
            }
            return Boolean(ALL_SVG_TAGS[tagName]);
          }
          if (element.namespaceURI === MATHML_NAMESPACE) {
            if (parent.namespaceURI === HTML_NAMESPACE) {
              return tagName === "math";
            }
            if (parent.namespaceURI === SVG_NAMESPACE) {
              return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
            }
            return Boolean(ALL_MATHML_TAGS[tagName]);
          }
          if (element.namespaceURI === HTML_NAMESPACE) {
            if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
              return false;
            }
            if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
              return false;
            }
            return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
          }
          if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) {
            return true;
          }
          return false;
        };
        var _forceRemove = function _forceRemove2(node) {
          arrayPush(DOMPurify4.removed, {
            element: node
          });
          try {
            node.parentNode.removeChild(node);
          } catch (_) {
            node.remove();
          }
        };
        var _removeAttribute = function _removeAttribute2(name, node) {
          try {
            arrayPush(DOMPurify4.removed, {
              attribute: node.getAttributeNode(name),
              from: node
            });
          } catch (_) {
            arrayPush(DOMPurify4.removed, {
              attribute: null,
              from: node
            });
          }
          node.removeAttribute(name);
          if (name === "is" && !ALLOWED_ATTR[name]) {
            if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
              try {
                _forceRemove(node);
              } catch (_) {
              }
            } else {
              try {
                node.setAttribute(name, "");
              } catch (_) {
              }
            }
          }
        };
        var _initDocument = function _initDocument2(dirty) {
          var doc;
          var leadingWhitespace;
          if (FORCE_BODY) {
            dirty = "<remove></remove>" + dirty;
          } else {
            var matches = stringMatch(dirty, /^[\r\n\t ]+/);
            leadingWhitespace = matches && matches[0];
          }
          if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) {
            dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
          }
          var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
          if (NAMESPACE === HTML_NAMESPACE) {
            try {
              doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
            } catch (_) {
            }
          }
          if (!doc || !doc.documentElement) {
            doc = implementation.createDocument(NAMESPACE, "template", null);
            try {
              doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
            } catch (_) {
            }
          }
          var body = doc.body || doc.documentElement;
          if (dirty && leadingWhitespace) {
            body.insertBefore(document2.createTextNode(leadingWhitespace), body.childNodes[0] || null);
          }
          if (NAMESPACE === HTML_NAMESPACE) {
            return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
          }
          return WHOLE_DOCUMENT ? doc.documentElement : body;
        };
        var _createIterator = function _createIterator2(root) {
          return createNodeIterator.call(
            root.ownerDocument || root,
            root,
            NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT,
            null,
            false
          );
        };
        var _isClobbered = function _isClobbered2(elm) {
          return elm instanceof HTMLFormElement && (typeof elm.nodeName !== "string" || typeof elm.textContent !== "string" || typeof elm.removeChild !== "function" || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== "function" || typeof elm.setAttribute !== "function" || typeof elm.namespaceURI !== "string" || typeof elm.insertBefore !== "function" || typeof elm.hasChildNodes !== "function");
        };
        var _isNode = function _isNode2(object) {
          return _typeof(Node) === "object" ? object instanceof Node : object && _typeof(object) === "object" && typeof object.nodeType === "number" && typeof object.nodeName === "string";
        };
        var _executeHook = function _executeHook2(entryPoint, currentNode, data) {
          if (!hooks[entryPoint]) {
            return;
          }
          arrayForEach(hooks[entryPoint], function(hook) {
            hook.call(DOMPurify4, currentNode, data, CONFIG);
          });
        };
        var _sanitizeElements = function _sanitizeElements2(currentNode) {
          var content;
          _executeHook("beforeSanitizeElements", currentNode, null);
          if (_isClobbered(currentNode)) {
            _forceRemove(currentNode);
            return true;
          }
          var tagName = transformCaseFunc(currentNode.nodeName);
          _executeHook("uponSanitizeElement", currentNode, {
            tagName,
            allowedTags: ALLOWED_TAGS
          });
          if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
            _forceRemove(currentNode);
            return true;
          }
          if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
            if (!FORBID_TAGS[tagName] && _basicCustomElementTest(tagName)) {
              if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName))
                return false;
              if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName))
                return false;
            }
            if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
              var parentNode = getParentNode(currentNode) || currentNode.parentNode;
              var childNodes = getChildNodes(currentNode) || currentNode.childNodes;
              if (childNodes && parentNode) {
                var childCount = childNodes.length;
                for (var i = childCount - 1; i >= 0; --i) {
                  parentNode.insertBefore(cloneNode(childNodes[i], true), getNextSibling(currentNode));
                }
              }
            }
            _forceRemove(currentNode);
            return true;
          }
          if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
            _forceRemove(currentNode);
            return true;
          }
          if ((tagName === "noscript" || tagName === "noembed") && regExpTest(/<\/no(script|embed)/i, currentNode.innerHTML)) {
            _forceRemove(currentNode);
            return true;
          }
          if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
            content = currentNode.textContent;
            content = stringReplace(content, MUSTACHE_EXPR$1, " ");
            content = stringReplace(content, ERB_EXPR$1, " ");
            content = stringReplace(content, TMPLIT_EXPR$1, " ");
            if (currentNode.textContent !== content) {
              arrayPush(DOMPurify4.removed, {
                element: currentNode.cloneNode()
              });
              currentNode.textContent = content;
            }
          }
          _executeHook("afterSanitizeElements", currentNode, null);
          return false;
        };
        var _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
          if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document2 || value in formElement)) {
            return false;
          }
          if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR$1, lcName))
            ;
          else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName))
            ;
          else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
            if (_basicCustomElementTest(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value)))
              ;
            else {
              return false;
            }
          } else if (URI_SAFE_ATTRIBUTES[lcName])
            ;
          else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, "")))
            ;
          else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag])
            ;
          else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, "")))
            ;
          else if (!value)
            ;
          else {
            return false;
          }
          return true;
        };
        var _basicCustomElementTest = function _basicCustomElementTest2(tagName) {
          return tagName.indexOf("-") > 0;
        };
        var _sanitizeAttributes = function _sanitizeAttributes2(currentNode) {
          var attr;
          var value;
          var lcName;
          var l;
          _executeHook("beforeSanitizeAttributes", currentNode, null);
          var attributes = currentNode.attributes;
          if (!attributes) {
            return;
          }
          var hookEvent = {
            attrName: "",
            attrValue: "",
            keepAttr: true,
            allowedAttributes: ALLOWED_ATTR
          };
          l = attributes.length;
          while (l--) {
            attr = attributes[l];
            var _attr = attr, name = _attr.name, namespaceURI = _attr.namespaceURI;
            value = name === "value" ? attr.value : stringTrim(attr.value);
            lcName = transformCaseFunc(name);
            hookEvent.attrName = lcName;
            hookEvent.attrValue = value;
            hookEvent.keepAttr = true;
            hookEvent.forceKeepAttr = void 0;
            _executeHook("uponSanitizeAttribute", currentNode, hookEvent);
            value = hookEvent.attrValue;
            if (hookEvent.forceKeepAttr) {
              continue;
            }
            _removeAttribute(name, currentNode);
            if (!hookEvent.keepAttr) {
              continue;
            }
            if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
              _removeAttribute(name, currentNode);
              continue;
            }
            if (SAFE_FOR_TEMPLATES) {
              value = stringReplace(value, MUSTACHE_EXPR$1, " ");
              value = stringReplace(value, ERB_EXPR$1, " ");
              value = stringReplace(value, TMPLIT_EXPR$1, " ");
            }
            var lcTag = transformCaseFunc(currentNode.nodeName);
            if (!_isValidAttribute(lcTag, lcName, value)) {
              continue;
            }
            if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name")) {
              _removeAttribute(name, currentNode);
              value = SANITIZE_NAMED_PROPS_PREFIX + value;
            }
            if (trustedTypesPolicy && _typeof(trustedTypes) === "object" && typeof trustedTypes.getAttributeType === "function") {
              if (namespaceURI)
                ;
              else {
                switch (trustedTypes.getAttributeType(lcTag, lcName)) {
                  case "TrustedHTML":
                    value = trustedTypesPolicy.createHTML(value);
                    break;
                  case "TrustedScriptURL":
                    value = trustedTypesPolicy.createScriptURL(value);
                    break;
                }
              }
            }
            try {
              if (namespaceURI) {
                currentNode.setAttributeNS(namespaceURI, name, value);
              } else {
                currentNode.setAttribute(name, value);
              }
              arrayPop(DOMPurify4.removed);
            } catch (_) {
            }
          }
          _executeHook("afterSanitizeAttributes", currentNode, null);
        };
        var _sanitizeShadowDOM = function _sanitizeShadowDOM2(fragment) {
          var shadowNode;
          var shadowIterator = _createIterator(fragment);
          _executeHook("beforeSanitizeShadowDOM", fragment, null);
          while (shadowNode = shadowIterator.nextNode()) {
            _executeHook("uponSanitizeShadowNode", shadowNode, null);
            if (_sanitizeElements(shadowNode)) {
              continue;
            }
            if (shadowNode.content instanceof DocumentFragment) {
              _sanitizeShadowDOM2(shadowNode.content);
            }
            _sanitizeAttributes(shadowNode);
          }
          _executeHook("afterSanitizeShadowDOM", fragment, null);
        };
        DOMPurify4.sanitize = function(dirty) {
          var cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var body;
          var importedNode;
          var currentNode;
          var returnNode;
          IS_EMPTY_INPUT = !dirty;
          if (IS_EMPTY_INPUT) {
            dirty = "<!-->";
          }
          if (typeof dirty !== "string" && !_isNode(dirty)) {
            if (typeof dirty.toString !== "function") {
              throw typeErrorCreate("toString is not a function");
            } else {
              dirty = dirty.toString();
              if (typeof dirty !== "string") {
                throw typeErrorCreate("dirty is not a string, aborting");
              }
            }
          }
          if (!DOMPurify4.isSupported) {
            return dirty;
          }
          if (!SET_CONFIG) {
            _parseConfig(cfg);
          }
          DOMPurify4.removed = [];
          if (typeof dirty === "string") {
            IN_PLACE = false;
          }
          if (IN_PLACE) {
            if (dirty.nodeName) {
              var tagName = transformCaseFunc(dirty.nodeName);
              if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
                throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
              }
            }
          } else if (dirty instanceof Node) {
            body = _initDocument("<!---->");
            importedNode = body.ownerDocument.importNode(dirty, true);
            if (importedNode.nodeType === 1 && importedNode.nodeName === "BODY") {
              body = importedNode;
            } else if (importedNode.nodeName === "HTML") {
              body = importedNode;
            } else {
              body.appendChild(importedNode);
            }
          } else {
            if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && dirty.indexOf("<") === -1) {
              return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
            }
            body = _initDocument(dirty);
            if (!body) {
              return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
            }
          }
          if (body && FORCE_BODY) {
            _forceRemove(body.firstChild);
          }
          var nodeIterator = _createIterator(IN_PLACE ? dirty : body);
          while (currentNode = nodeIterator.nextNode()) {
            if (_sanitizeElements(currentNode)) {
              continue;
            }
            if (currentNode.content instanceof DocumentFragment) {
              _sanitizeShadowDOM(currentNode.content);
            }
            _sanitizeAttributes(currentNode);
          }
          if (IN_PLACE) {
            return dirty;
          }
          if (RETURN_DOM) {
            if (RETURN_DOM_FRAGMENT) {
              returnNode = createDocumentFragment.call(body.ownerDocument);
              while (body.firstChild) {
                returnNode.appendChild(body.firstChild);
              }
            } else {
              returnNode = body;
            }
            if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmod) {
              returnNode = importNode.call(originalDocument, returnNode, true);
            }
            return returnNode;
          }
          var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
          if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
            serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
          }
          if (SAFE_FOR_TEMPLATES) {
            serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$1, " ");
            serializedHTML = stringReplace(serializedHTML, ERB_EXPR$1, " ");
            serializedHTML = stringReplace(serializedHTML, TMPLIT_EXPR$1, " ");
          }
          return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
        };
        DOMPurify4.setConfig = function(cfg) {
          _parseConfig(cfg);
          SET_CONFIG = true;
        };
        DOMPurify4.clearConfig = function() {
          CONFIG = null;
          SET_CONFIG = false;
        };
        DOMPurify4.isValidAttribute = function(tag, attr, value) {
          if (!CONFIG) {
            _parseConfig({});
          }
          var lcTag = transformCaseFunc(tag);
          var lcName = transformCaseFunc(attr);
          return _isValidAttribute(lcTag, lcName, value);
        };
        DOMPurify4.addHook = function(entryPoint, hookFunction) {
          if (typeof hookFunction !== "function") {
            return;
          }
          hooks[entryPoint] = hooks[entryPoint] || [];
          arrayPush(hooks[entryPoint], hookFunction);
        };
        DOMPurify4.removeHook = function(entryPoint) {
          if (hooks[entryPoint]) {
            return arrayPop(hooks[entryPoint]);
          }
        };
        DOMPurify4.removeHooks = function(entryPoint) {
          if (hooks[entryPoint]) {
            hooks[entryPoint] = [];
          }
        };
        DOMPurify4.removeAllHooks = function() {
          hooks = {};
        };
        return DOMPurify4;
      }
      var purify = createDOMPurify();
      return purify;
    });
  }
});

// node_modules/axios/lib/helpers/bind.js
var require_bind = __commonJS({
  "node_modules/axios/lib/helpers/bind.js"(exports, module) {
    "use strict";
    module.exports = function bind(fn, thisArg) {
      return function wrap() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        return fn.apply(thisArg, args);
      };
    };
  }
});

// node_modules/axios/lib/utils.js
var require_utils2 = __commonJS({
  "node_modules/axios/lib/utils.js"(exports, module) {
    "use strict";
    var bind = require_bind();
    var toString = Object.prototype.toString;
    function isArray(val) {
      return Array.isArray(val);
    }
    function isUndefined(val) {
      return typeof val === "undefined";
    }
    function isBuffer(val) {
      return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
    }
    function isArrayBuffer(val) {
      return toString.call(val) === "[object ArrayBuffer]";
    }
    function isFormData(val) {
      return toString.call(val) === "[object FormData]";
    }
    function isArrayBufferView(val) {
      var result;
      if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        result = ArrayBuffer.isView(val);
      } else {
        result = val && val.buffer && isArrayBuffer(val.buffer);
      }
      return result;
    }
    function isString(val) {
      return typeof val === "string";
    }
    function isNumber(val) {
      return typeof val === "number";
    }
    function isObject(val) {
      return val !== null && typeof val === "object";
    }
    function isPlainObject(val) {
      if (toString.call(val) !== "[object Object]") {
        return false;
      }
      var prototype = Object.getPrototypeOf(val);
      return prototype === null || prototype === Object.prototype;
    }
    function isDate(val) {
      return toString.call(val) === "[object Date]";
    }
    function isFile(val) {
      return toString.call(val) === "[object File]";
    }
    function isBlob(val) {
      return toString.call(val) === "[object Blob]";
    }
    function isFunction(val) {
      return toString.call(val) === "[object Function]";
    }
    function isStream(val) {
      return isObject(val) && isFunction(val.pipe);
    }
    function isURLSearchParams(val) {
      return toString.call(val) === "[object URLSearchParams]";
    }
    function trim(str) {
      return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
    }
    function isStandardBrowserEnv() {
      if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
        return false;
      }
      return typeof window !== "undefined" && typeof document !== "undefined";
    }
    function forEach(obj, fn) {
      if (obj === null || typeof obj === "undefined") {
        return;
      }
      if (typeof obj !== "object") {
        obj = [obj];
      }
      if (isArray(obj)) {
        for (var i = 0, l = obj.length; i < l; i++) {
          fn.call(null, obj[i], i, obj);
        }
      } else {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn.call(null, obj[key], key, obj);
          }
        }
      }
    }
    function merge() {
      var result = {};
      function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) {
          result[key] = merge(result[key], val);
        } else if (isPlainObject(val)) {
          result[key] = merge({}, val);
        } else if (isArray(val)) {
          result[key] = val.slice();
        } else {
          result[key] = val;
        }
      }
      for (var i = 0, l = arguments.length; i < l; i++) {
        forEach(arguments[i], assignValue);
      }
      return result;
    }
    function extend(a, b, thisArg) {
      forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === "function") {
          a[key] = bind(val, thisArg);
        } else {
          a[key] = val;
        }
      });
      return a;
    }
    function stripBOM(content) {
      if (content.charCodeAt(0) === 65279) {
        content = content.slice(1);
      }
      return content;
    }
    module.exports = {
      isArray,
      isArrayBuffer,
      isBuffer,
      isFormData,
      isArrayBufferView,
      isString,
      isNumber,
      isObject,
      isPlainObject,
      isUndefined,
      isDate,
      isFile,
      isBlob,
      isFunction,
      isStream,
      isURLSearchParams,
      isStandardBrowserEnv,
      forEach,
      merge,
      extend,
      trim,
      stripBOM
    };
  }
});

// node_modules/axios/lib/helpers/buildURL.js
var require_buildURL = __commonJS({
  "node_modules/axios/lib/helpers/buildURL.js"(exports, module) {
    "use strict";
    var utils = require_utils2();
    function encode(val) {
      return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    module.exports = function buildURL(url, params, paramsSerializer) {
      if (!params) {
        return url;
      }
      var serializedParams;
      if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
      } else if (utils.isURLSearchParams(params)) {
        serializedParams = params.toString();
      } else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
          if (val === null || typeof val === "undefined") {
            return;
          }
          if (utils.isArray(val)) {
            key = key + "[]";
          } else {
            val = [val];
          }
          utils.forEach(val, function parseValue(v) {
            if (utils.isDate(v)) {
              v = v.toISOString();
            } else if (utils.isObject(v)) {
              v = JSON.stringify(v);
            }
            parts.push(encode(key) + "=" + encode(v));
          });
        });
        serializedParams = parts.join("&");
      }
      if (serializedParams) {
        var hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) {
          url = url.slice(0, hashmarkIndex);
        }
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
      }
      return url;
    };
  }
});

// node_modules/axios/lib/core/InterceptorManager.js
var require_InterceptorManager = __commonJS({
  "node_modules/axios/lib/core/InterceptorManager.js"(exports, module) {
    "use strict";
    var utils = require_utils2();
    function InterceptorManager() {
      this.handlers = [];
    }
    InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    };
    InterceptorManager.prototype.eject = function eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    };
    InterceptorManager.prototype.forEach = function forEach(fn) {
      utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    };
    module.exports = InterceptorManager;
  }
});

// node_modules/axios/lib/helpers/normalizeHeaderName.js
var require_normalizeHeaderName = __commonJS({
  "node_modules/axios/lib/helpers/normalizeHeaderName.js"(exports, module) {
    "use strict";
    var utils = require_utils2();
    module.exports = function normalizeHeaderName(headers, normalizedName) {
      utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
          headers[normalizedName] = value;
          delete headers[name];
        }
      });
    };
  }
});

// node_modules/axios/lib/core/enhanceError.js
var require_enhanceError = __commonJS({
  "node_modules/axios/lib/core/enhanceError.js"(exports, module) {
    "use strict";
    module.exports = function enhanceError(error, config, code, request, response) {
      error.config = config;
      if (code) {
        error.code = code;
      }
      error.request = request;
      error.response = response;
      error.isAxiosError = true;
      error.toJSON = function toJSON() {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code,
          status: this.response && this.response.status ? this.response.status : null
        };
      };
      return error;
    };
  }
});

// node_modules/axios/lib/defaults/transitional.js
var require_transitional = __commonJS({
  "node_modules/axios/lib/defaults/transitional.js"(exports, module) {
    "use strict";
    module.exports = {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false
    };
  }
});

// node_modules/axios/lib/core/createError.js
var require_createError = __commonJS({
  "node_modules/axios/lib/core/createError.js"(exports, module) {
    "use strict";
    var enhanceError = require_enhanceError();
    module.exports = function createError(message, config, code, request, response) {
      var error = new Error(message);
      return enhanceError(error, config, code, request, response);
    };
  }
});

// node_modules/axios/lib/core/settle.js
var require_settle = __commonJS({
  "node_modules/axios/lib/core/settle.js"(exports, module) {
    "use strict";
    var createError = require_createError();
    module.exports = function settle(resolve, reject, response) {
      var validateStatus = response.config.validateStatus;
      if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
      } else {
        reject(createError(
          "Request failed with status code " + response.status,
          response.config,
          null,
          response.request,
          response
        ));
      }
    };
  }
});

// node_modules/axios/lib/helpers/cookies.js
var require_cookies = __commonJS({
  "node_modules/axios/lib/helpers/cookies.js"(exports, module) {
    "use strict";
    var utils = require_utils2();
    module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + "=" + encodeURIComponent(value));
          if (utils.isNumber(expires)) {
            cookie.push("expires=" + new Date(expires).toGMTString());
          }
          if (utils.isString(path)) {
            cookie.push("path=" + path);
          }
          if (utils.isString(domain)) {
            cookie.push("domain=" + domain);
          }
          if (secure === true) {
            cookie.push("secure");
          }
          document.cookie = cookie.join("; ");
        },
        read: function read(name) {
          var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
          return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
          this.write(name, "", Date.now() - 864e5);
        }
      };
    }() : function nonStandardBrowserEnv() {
      return {
        write: function write() {
        },
        read: function read() {
          return null;
        },
        remove: function remove() {
        }
      };
    }();
  }
});

// node_modules/axios/lib/helpers/isAbsoluteURL.js
var require_isAbsoluteURL = __commonJS({
  "node_modules/axios/lib/helpers/isAbsoluteURL.js"(exports, module) {
    "use strict";
    module.exports = function isAbsoluteURL(url) {
      return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
    };
  }
});

// node_modules/axios/lib/helpers/combineURLs.js
var require_combineURLs = __commonJS({
  "node_modules/axios/lib/helpers/combineURLs.js"(exports, module) {
    "use strict";
    module.exports = function combineURLs(baseURL, relativeURL) {
      return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
    };
  }
});

// node_modules/axios/lib/core/buildFullPath.js
var require_buildFullPath = __commonJS({
  "node_modules/axios/lib/core/buildFullPath.js"(exports, module) {
    "use strict";
    var isAbsoluteURL = require_isAbsoluteURL();
    var combineURLs = require_combineURLs();
    module.exports = function buildFullPath(baseURL, requestedURL) {
      if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL);
      }
      return requestedURL;
    };
  }
});

// node_modules/axios/lib/helpers/parseHeaders.js
var require_parseHeaders = __commonJS({
  "node_modules/axios/lib/helpers/parseHeaders.js"(exports, module) {
    "use strict";
    var utils = require_utils2();
    var ignoreDuplicateOf = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent"
    ];
    module.exports = function parseHeaders(headers) {
      var parsed = {};
      var key;
      var val;
      var i;
      if (!headers) {
        return parsed;
      }
      utils.forEach(headers.split("\n"), function parser(line) {
        i = line.indexOf(":");
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
        if (key) {
          if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
            return;
          }
          if (key === "set-cookie") {
            parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
          }
        }
      });
      return parsed;
    };
  }
});

// node_modules/axios/lib/helpers/isURLSameOrigin.js
var require_isURLSameOrigin = __commonJS({
  "node_modules/axios/lib/helpers/isURLSameOrigin.js"(exports, module) {
    "use strict";
    var utils = require_utils2();
    module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement("a");
      var originURL;
      function resolveURL(url) {
        var href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }
      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin(requestURL) {
        var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    }() : function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    }();
  }
});

// node_modules/axios/lib/cancel/Cancel.js
var require_Cancel = __commonJS({
  "node_modules/axios/lib/cancel/Cancel.js"(exports, module) {
    "use strict";
    function Cancel(message) {
      this.message = message;
    }
    Cancel.prototype.toString = function toString() {
      return "Cancel" + (this.message ? ": " + this.message : "");
    };
    Cancel.prototype.__CANCEL__ = true;
    module.exports = Cancel;
  }
});

// node_modules/axios/lib/adapters/xhr.js
var require_xhr = __commonJS({
  "node_modules/axios/lib/adapters/xhr.js"(exports, module) {
    "use strict";
    var utils = require_utils2();
    var settle = require_settle();
    var cookies = require_cookies();
    var buildURL = require_buildURL();
    var buildFullPath = require_buildFullPath();
    var parseHeaders = require_parseHeaders();
    var isURLSameOrigin = require_isURLSameOrigin();
    var createError = require_createError();
    var transitionalDefaults = require_transitional();
    var Cancel = require_Cancel();
    module.exports = function xhrAdapter(config) {
      return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        var responseType = config.responseType;
        var onCanceled;
        function done() {
          if (config.cancelToken) {
            config.cancelToken.unsubscribe(onCanceled);
          }
          if (config.signal) {
            config.signal.removeEventListener("abort", onCanceled);
          }
        }
        if (utils.isFormData(requestData)) {
          delete requestHeaders["Content-Type"];
        }
        var request = new XMLHttpRequest();
        if (config.auth) {
          var username = config.auth.username || "";
          var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
          requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
        }
        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
        request.timeout = config.timeout;
        function onloadend() {
          if (!request) {
            return;
          }
          var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
          var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
          var response = {
            data: responseData,
            status: request.status,
            statusText: request.statusText,
            headers: responseHeaders,
            config,
            request
          };
          settle(function _resolve(value) {
            resolve(value);
            done();
          }, function _reject(err) {
            reject(err);
            done();
          }, response);
          request = null;
        }
        if ("onloadend" in request) {
          request.onloadend = onloadend;
        } else {
          request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) {
              return;
            }
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
              return;
            }
            setTimeout(onloadend);
          };
        }
        request.onabort = function handleAbort() {
          if (!request) {
            return;
          }
          reject(createError("Request aborted", config, "ECONNABORTED", request));
          request = null;
        };
        request.onerror = function handleError() {
          reject(createError("Network Error", config, null, request));
          request = null;
        };
        request.ontimeout = function handleTimeout() {
          var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
          var transitional = config.transitional || transitionalDefaults;
          if (config.timeoutErrorMessage) {
            timeoutErrorMessage = config.timeoutErrorMessage;
          }
          reject(createError(
            timeoutErrorMessage,
            config,
            transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
            request
          ));
          request = null;
        };
        if (utils.isStandardBrowserEnv()) {
          var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
          if (xsrfValue) {
            requestHeaders[config.xsrfHeaderName] = xsrfValue;
          }
        }
        if ("setRequestHeader" in request) {
          utils.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
              delete requestHeaders[key];
            } else {
              request.setRequestHeader(key, val);
            }
          });
        }
        if (!utils.isUndefined(config.withCredentials)) {
          request.withCredentials = !!config.withCredentials;
        }
        if (responseType && responseType !== "json") {
          request.responseType = config.responseType;
        }
        if (typeof config.onDownloadProgress === "function") {
          request.addEventListener("progress", config.onDownloadProgress);
        }
        if (typeof config.onUploadProgress === "function" && request.upload) {
          request.upload.addEventListener("progress", config.onUploadProgress);
        }
        if (config.cancelToken || config.signal) {
          onCanceled = function(cancel) {
            if (!request) {
              return;
            }
            reject(!cancel || cancel && cancel.type ? new Cancel("canceled") : cancel);
            request.abort();
            request = null;
          };
          config.cancelToken && config.cancelToken.subscribe(onCanceled);
          if (config.signal) {
            config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
          }
        }
        if (!requestData) {
          requestData = null;
        }
        request.send(requestData);
      });
    };
  }
});

// node_modules/axios/lib/defaults/index.js
var require_defaults = __commonJS({
  "node_modules/axios/lib/defaults/index.js"(exports, module) {
    "use strict";
    var utils = require_utils2();
    var normalizeHeaderName = require_normalizeHeaderName();
    var enhanceError = require_enhanceError();
    var transitionalDefaults = require_transitional();
    var DEFAULT_CONTENT_TYPE = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    function setContentTypeIfUnset(headers, value) {
      if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
        headers["Content-Type"] = value;
      }
    }
    function getDefaultAdapter() {
      var adapter;
      if (typeof XMLHttpRequest !== "undefined") {
        adapter = require_xhr();
      } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
        adapter = require_xhr();
      }
      return adapter;
    }
    function stringifySafely(rawValue, parser, encoder) {
      if (utils.isString(rawValue)) {
        try {
          (parser || JSON.parse)(rawValue);
          return utils.trim(rawValue);
        } catch (e) {
          if (e.name !== "SyntaxError") {
            throw e;
          }
        }
      }
      return (encoder || JSON.stringify)(rawValue);
    }
    var defaults = {
      transitional: transitionalDefaults,
      adapter: getDefaultAdapter(),
      transformRequest: [function transformRequest(data, headers) {
        normalizeHeaderName(headers, "Accept");
        normalizeHeaderName(headers, "Content-Type");
        if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
          return data;
        }
        if (utils.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (utils.isURLSearchParams(data)) {
          setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
          return data.toString();
        }
        if (utils.isObject(data) || headers && headers["Content-Type"] === "application/json") {
          setContentTypeIfUnset(headers, "application/json");
          return stringifySafely(data);
        }
        return data;
      }],
      transformResponse: [function transformResponse(data) {
        var transitional = this.transitional || defaults.transitional;
        var silentJSONParsing = transitional && transitional.silentJSONParsing;
        var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
        var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
        if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
          try {
            return JSON.parse(data);
          } catch (e) {
            if (strictJSONParsing) {
              if (e.name === "SyntaxError") {
                throw enhanceError(e, this, "E_JSON_PARSE");
              }
              throw e;
            }
          }
        }
        return data;
      }],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
      },
      headers: {
        common: {
          "Accept": "application/json, text/plain, */*"
        }
      }
    };
    utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
      defaults.headers[method] = {};
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
    });
    module.exports = defaults;
  }
});

// node_modules/axios/lib/core/transformData.js
var require_transformData = __commonJS({
  "node_modules/axios/lib/core/transformData.js"(exports, module) {
    "use strict";
    var utils = require_utils2();
    var defaults = require_defaults();
    module.exports = function transformData(data, headers, fns) {
      var context = this || defaults;
      utils.forEach(fns, function transform(fn) {
        data = fn.call(context, data, headers);
      });
      return data;
    };
  }
});

// node_modules/axios/lib/cancel/isCancel.js
var require_isCancel = __commonJS({
  "node_modules/axios/lib/cancel/isCancel.js"(exports, module) {
    "use strict";
    module.exports = function isCancel(value) {
      return !!(value && value.__CANCEL__);
    };
  }
});

// node_modules/axios/lib/core/dispatchRequest.js
var require_dispatchRequest = __commonJS({
  "node_modules/axios/lib/core/dispatchRequest.js"(exports, module) {
    "use strict";
    var utils = require_utils2();
    var transformData = require_transformData();
    var isCancel = require_isCancel();
    var defaults = require_defaults();
    var Cancel = require_Cancel();
    function throwIfCancellationRequested(config) {
      if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
      }
      if (config.signal && config.signal.aborted) {
        throw new Cancel("canceled");
      }
    }
    module.exports = function dispatchRequest(config) {
      throwIfCancellationRequested(config);
      config.headers = config.headers || {};
      config.data = transformData.call(
        config,
        config.data,
        config.headers,
        config.transformRequest
      );
      config.headers = utils.merge(
        config.headers.common || {},
        config.headers[config.method] || {},
        config.headers
      );
      utils.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        function cleanHeaderConfig(method) {
          delete config.headers[method];
        }
      );
      var adapter = config.adapter || defaults.adapter;
      return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        response.data = transformData.call(
          config,
          response.data,
          response.headers,
          config.transformResponse
        );
        return response;
      }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config);
          if (reason && reason.response) {
            reason.response.data = transformData.call(
              config,
              reason.response.data,
              reason.response.headers,
              config.transformResponse
            );
          }
        }
        return Promise.reject(reason);
      });
    };
  }
});

// node_modules/axios/lib/core/mergeConfig.js
var require_mergeConfig = __commonJS({
  "node_modules/axios/lib/core/mergeConfig.js"(exports, module) {
    "use strict";
    var utils = require_utils2();
    module.exports = function mergeConfig(config1, config2) {
      config2 = config2 || {};
      var config = {};
      function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
          return utils.merge(target, source);
        } else if (utils.isPlainObject(source)) {
          return utils.merge({}, source);
        } else if (utils.isArray(source)) {
          return source.slice();
        }
        return source;
      }
      function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) {
          return getMergedValue(config1[prop], config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          return getMergedValue(void 0, config1[prop]);
        }
      }
      function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          return getMergedValue(void 0, config2[prop]);
        }
      }
      function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          return getMergedValue(void 0, config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          return getMergedValue(void 0, config1[prop]);
        }
      }
      function mergeDirectKeys(prop) {
        if (prop in config2) {
          return getMergedValue(config1[prop], config2[prop]);
        } else if (prop in config1) {
          return getMergedValue(void 0, config1[prop]);
        }
      }
      var mergeMap = {
        "url": valueFromConfig2,
        "method": valueFromConfig2,
        "data": valueFromConfig2,
        "baseURL": defaultToConfig2,
        "transformRequest": defaultToConfig2,
        "transformResponse": defaultToConfig2,
        "paramsSerializer": defaultToConfig2,
        "timeout": defaultToConfig2,
        "timeoutMessage": defaultToConfig2,
        "withCredentials": defaultToConfig2,
        "adapter": defaultToConfig2,
        "responseType": defaultToConfig2,
        "xsrfCookieName": defaultToConfig2,
        "xsrfHeaderName": defaultToConfig2,
        "onUploadProgress": defaultToConfig2,
        "onDownloadProgress": defaultToConfig2,
        "decompress": defaultToConfig2,
        "maxContentLength": defaultToConfig2,
        "maxBodyLength": defaultToConfig2,
        "transport": defaultToConfig2,
        "httpAgent": defaultToConfig2,
        "httpsAgent": defaultToConfig2,
        "cancelToken": defaultToConfig2,
        "socketPath": defaultToConfig2,
        "responseEncoding": defaultToConfig2,
        "validateStatus": mergeDirectKeys
      };
      utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
        var merge = mergeMap[prop] || mergeDeepProperties;
        var configValue = merge(prop);
        utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
      });
      return config;
    };
  }
});

// node_modules/axios/lib/env/data.js
var require_data = __commonJS({
  "node_modules/axios/lib/env/data.js"(exports, module) {
    module.exports = {
      "version": "0.26.1"
    };
  }
});

// node_modules/axios/lib/helpers/validator.js
var require_validator = __commonJS({
  "node_modules/axios/lib/helpers/validator.js"(exports, module) {
    "use strict";
    var VERSION = require_data().version;
    var validators = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
      validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
      };
    });
    var deprecatedWarnings = {};
    validators.transitional = function transitional(validator, version, message) {
      function formatMessage(opt, desc) {
        return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
      }
      return function(value, opt, opts) {
        if (validator === false) {
          throw new Error(formatMessage(opt, " has been removed" + (version ? " in " + version : "")));
        }
        if (version && !deprecatedWarnings[opt]) {
          deprecatedWarnings[opt] = true;
          console.warn(
            formatMessage(
              opt,
              " has been deprecated since v" + version + " and will be removed in the near future"
            )
          );
        }
        return validator ? validator(value, opt, opts) : true;
      };
    };
    function assertOptions(options, schema, allowUnknown) {
      if (typeof options !== "object") {
        throw new TypeError("options must be an object");
      }
      var keys = Object.keys(options);
      var i = keys.length;
      while (i-- > 0) {
        var opt = keys[i];
        var validator = schema[opt];
        if (validator) {
          var value = options[opt];
          var result = value === void 0 || validator(value, opt, options);
          if (result !== true) {
            throw new TypeError("option " + opt + " must be " + result);
          }
          continue;
        }
        if (allowUnknown !== true) {
          throw Error("Unknown option " + opt);
        }
      }
    }
    module.exports = {
      assertOptions,
      validators
    };
  }
});

// node_modules/axios/lib/core/Axios.js
var require_Axios = __commonJS({
  "node_modules/axios/lib/core/Axios.js"(exports, module) {
    "use strict";
    var utils = require_utils2();
    var buildURL = require_buildURL();
    var InterceptorManager = require_InterceptorManager();
    var dispatchRequest = require_dispatchRequest();
    var mergeConfig = require_mergeConfig();
    var validator = require_validator();
    var validators = validator.validators;
    function Axios(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    Axios.prototype.request = function request(configOrUrl, config) {
      if (typeof configOrUrl === "string") {
        config = config || {};
        config.url = configOrUrl;
      } else {
        config = configOrUrl || {};
      }
      config = mergeConfig(this.defaults, config);
      if (config.method) {
        config.method = config.method.toLowerCase();
      } else if (this.defaults.method) {
        config.method = this.defaults.method.toLowerCase();
      } else {
        config.method = "get";
      }
      var transitional = config.transitional;
      if (transitional !== void 0) {
        validator.assertOptions(transitional, {
          silentJSONParsing: validators.transitional(validators.boolean),
          forcedJSONParsing: validators.transitional(validators.boolean),
          clarifyTimeoutError: validators.transitional(validators.boolean)
        }, false);
      }
      var requestInterceptorChain = [];
      var synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      var responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      var promise;
      if (!synchronousRequestInterceptors) {
        var chain = [dispatchRequest, void 0];
        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain = chain.concat(responseInterceptorChain);
        promise = Promise.resolve(config);
        while (chain.length) {
          promise = promise.then(chain.shift(), chain.shift());
        }
        return promise;
      }
      var newConfig = config;
      while (requestInterceptorChain.length) {
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected(error);
          break;
        }
      }
      try {
        promise = dispatchRequest(newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      while (responseInterceptorChain.length) {
        promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
      }
      return promise;
    };
    Axios.prototype.getUri = function getUri(config) {
      config = mergeConfig(this.defaults, config);
      return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
    };
    utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
      Axios.prototype[method] = function(url, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          url,
          data: (config || {}).data
        }));
      };
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      Axios.prototype[method] = function(url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          url,
          data
        }));
      };
    });
    module.exports = Axios;
  }
});

// node_modules/axios/lib/cancel/CancelToken.js
var require_CancelToken = __commonJS({
  "node_modules/axios/lib/cancel/CancelToken.js"(exports, module) {
    "use strict";
    var Cancel = require_Cancel();
    function CancelToken(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      var resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      var token = this;
      this.promise.then(function(cancel) {
        if (!token._listeners)
          return;
        var i;
        var l = token._listeners.length;
        for (i = 0; i < l; i++) {
          token._listeners[i](cancel);
        }
        token._listeners = null;
      });
      this.promise.then = function(onfulfilled) {
        var _resolve;
        var promise = new Promise(function(resolve) {
          token.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
          token.unsubscribe(_resolve);
        };
        return promise;
      };
      executor(function cancel(message) {
        if (token.reason) {
          return;
        }
        token.reason = new Cancel(message);
        resolvePromise(token.reason);
      });
    }
    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    };
    CancelToken.prototype.subscribe = function subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    };
    CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      var index = this._listeners.indexOf(listener);
      if (index !== -1) {
        this._listeners.splice(index, 1);
      }
    };
    CancelToken.source = function source() {
      var cancel;
      var token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token,
        cancel
      };
    };
    module.exports = CancelToken;
  }
});

// node_modules/axios/lib/helpers/spread.js
var require_spread = __commonJS({
  "node_modules/axios/lib/helpers/spread.js"(exports, module) {
    "use strict";
    module.exports = function spread(callback) {
      return function wrap(arr) {
        return callback.apply(null, arr);
      };
    };
  }
});

// node_modules/axios/lib/helpers/isAxiosError.js
var require_isAxiosError = __commonJS({
  "node_modules/axios/lib/helpers/isAxiosError.js"(exports, module) {
    "use strict";
    var utils = require_utils2();
    module.exports = function isAxiosError(payload) {
      return utils.isObject(payload) && payload.isAxiosError === true;
    };
  }
});

// node_modules/axios/lib/axios.js
var require_axios = __commonJS({
  "node_modules/axios/lib/axios.js"(exports, module) {
    "use strict";
    var utils = require_utils2();
    var bind = require_bind();
    var Axios = require_Axios();
    var mergeConfig = require_mergeConfig();
    var defaults = require_defaults();
    function createInstance(defaultConfig) {
      var context = new Axios(defaultConfig);
      var instance = bind(Axios.prototype.request, context);
      utils.extend(instance, Axios.prototype, context);
      utils.extend(instance, context);
      instance.create = function create(instanceConfig) {
        return createInstance(mergeConfig(defaultConfig, instanceConfig));
      };
      return instance;
    }
    var axios = createInstance(defaults);
    axios.Axios = Axios;
    axios.Cancel = require_Cancel();
    axios.CancelToken = require_CancelToken();
    axios.isCancel = require_isCancel();
    axios.VERSION = require_data().version;
    axios.all = function all(promises) {
      return Promise.all(promises);
    };
    axios.spread = require_spread();
    axios.isAxiosError = require_isAxiosError();
    module.exports = axios;
    module.exports.default = axios;
  }
});

// node_modules/axios/index.js
var require_axios2 = __commonJS({
  "node_modules/axios/index.js"(exports, module) {
    module.exports = require_axios();
  }
});

// node_modules/openai/dist/base.js
var require_base = __commonJS({
  "node_modules/openai/dist/base.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RequiredError = exports.BaseAPI = exports.COLLECTION_FORMATS = exports.BASE_PATH = void 0;
    var axios_1 = require_axios2();
    exports.BASE_PATH = "https://api.openai.com/v1".replace(/\/+$/, "");
    exports.COLLECTION_FORMATS = {
      csv: ",",
      ssv: " ",
      tsv: "	",
      pipes: "|"
    };
    var BaseAPI = class {
      constructor(configuration2, basePath = exports.BASE_PATH, axios = axios_1.default) {
        this.basePath = basePath;
        this.axios = axios;
        if (configuration2) {
          this.configuration = configuration2;
          this.basePath = configuration2.basePath || this.basePath;
        }
      }
    };
    exports.BaseAPI = BaseAPI;
    var RequiredError = class extends Error {
      constructor(field, msg) {
        super(msg);
        this.field = field;
        this.name = "RequiredError";
      }
    };
    exports.RequiredError = RequiredError;
  }
});

// node_modules/openai/dist/common.js
var require_common = __commonJS({
  "node_modules/openai/dist/common.js"(exports) {
    "use strict";
    var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createRequestFunction = exports.toPathString = exports.serializeDataIfNeeded = exports.setSearchParams = exports.setOAuthToObject = exports.setBearerAuthToObject = exports.setBasicAuthToObject = exports.setApiKeyToObject = exports.assertParamExists = exports.DUMMY_BASE_URL = void 0;
    var base_1 = require_base();
    exports.DUMMY_BASE_URL = "https://example.com";
    exports.assertParamExists = function(functionName, paramName, paramValue) {
      if (paramValue === null || paramValue === void 0) {
        throw new base_1.RequiredError(paramName, `Required parameter ${paramName} was null or undefined when calling ${functionName}.`);
      }
    };
    exports.setApiKeyToObject = function(object, keyParamName, configuration2) {
      return __awaiter2(this, void 0, void 0, function* () {
        if (configuration2 && configuration2.apiKey) {
          const localVarApiKeyValue = typeof configuration2.apiKey === "function" ? yield configuration2.apiKey(keyParamName) : yield configuration2.apiKey;
          object[keyParamName] = localVarApiKeyValue;
        }
      });
    };
    exports.setBasicAuthToObject = function(object, configuration2) {
      if (configuration2 && (configuration2.username || configuration2.password)) {
        object["auth"] = { username: configuration2.username, password: configuration2.password };
      }
    };
    exports.setBearerAuthToObject = function(object, configuration2) {
      return __awaiter2(this, void 0, void 0, function* () {
        if (configuration2 && configuration2.accessToken) {
          const accessToken = typeof configuration2.accessToken === "function" ? yield configuration2.accessToken() : yield configuration2.accessToken;
          object["Authorization"] = "Bearer " + accessToken;
        }
      });
    };
    exports.setOAuthToObject = function(object, name, scopes, configuration2) {
      return __awaiter2(this, void 0, void 0, function* () {
        if (configuration2 && configuration2.accessToken) {
          const localVarAccessTokenValue = typeof configuration2.accessToken === "function" ? yield configuration2.accessToken(name, scopes) : yield configuration2.accessToken;
          object["Authorization"] = "Bearer " + localVarAccessTokenValue;
        }
      });
    };
    function setFlattenedQueryParams(urlSearchParams, parameter, key = "") {
      if (parameter == null)
        return;
      if (typeof parameter === "object") {
        if (Array.isArray(parameter)) {
          parameter.forEach((item) => setFlattenedQueryParams(urlSearchParams, item, key));
        } else {
          Object.keys(parameter).forEach((currentKey) => setFlattenedQueryParams(urlSearchParams, parameter[currentKey], `${key}${key !== "" ? "." : ""}${currentKey}`));
        }
      } else {
        if (urlSearchParams.has(key)) {
          urlSearchParams.append(key, parameter);
        } else {
          urlSearchParams.set(key, parameter);
        }
      }
    }
    exports.setSearchParams = function(url, ...objects) {
      const searchParams = new URLSearchParams(url.search);
      setFlattenedQueryParams(searchParams, objects);
      url.search = searchParams.toString();
    };
    exports.serializeDataIfNeeded = function(value, requestOptions, configuration2) {
      const nonString = typeof value !== "string";
      const needsSerialization = nonString && configuration2 && configuration2.isJsonMime ? configuration2.isJsonMime(requestOptions.headers["Content-Type"]) : nonString;
      return needsSerialization ? JSON.stringify(value !== void 0 ? value : {}) : value || "";
    };
    exports.toPathString = function(url) {
      return url.pathname + url.search + url.hash;
    };
    exports.createRequestFunction = function(axiosArgs, globalAxios, BASE_PATH, configuration2) {
      return (axios = globalAxios, basePath = BASE_PATH) => {
        const axiosRequestArgs = Object.assign(Object.assign({}, axiosArgs.options), { url: ((configuration2 === null || configuration2 === void 0 ? void 0 : configuration2.basePath) || basePath) + axiosArgs.url });
        return axios.request(axiosRequestArgs);
      };
    };
  }
});

// node_modules/openai/dist/api.js
var require_api = __commonJS({
  "node_modules/openai/dist/api.js"(exports) {
    "use strict";
    var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OpenAIApi = exports.OpenAIApiFactory = exports.OpenAIApiFp = exports.OpenAIApiAxiosParamCreator = exports.CreateImageRequestResponseFormatEnum = exports.CreateImageRequestSizeEnum = exports.ChatCompletionResponseMessageRoleEnum = exports.ChatCompletionRequestMessageRoleEnum = void 0;
    var axios_1 = require_axios2();
    var common_1 = require_common();
    var base_1 = require_base();
    exports.ChatCompletionRequestMessageRoleEnum = {
      System: "system",
      User: "user",
      Assistant: "assistant"
    };
    exports.ChatCompletionResponseMessageRoleEnum = {
      System: "system",
      User: "user",
      Assistant: "assistant"
    };
    exports.CreateImageRequestSizeEnum = {
      _256x256: "256x256",
      _512x512: "512x512",
      _1024x1024: "1024x1024"
    };
    exports.CreateImageRequestResponseFormatEnum = {
      Url: "url",
      B64Json: "b64_json"
    };
    exports.OpenAIApiAxiosParamCreator = function(configuration2) {
      return {
        cancelFineTune: (fineTuneId, options = {}) => __awaiter2(this, void 0, void 0, function* () {
          common_1.assertParamExists("cancelFineTune", "fineTuneId", fineTuneId);
          const localVarPath = `/fine-tunes/{fine_tune_id}/cancel`.replace(`{${"fine_tune_id"}}`, encodeURIComponent(String(fineTuneId)));
          const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
          let baseOptions;
          if (configuration2) {
            baseOptions = configuration2.baseOptions;
          }
          const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
          const localVarHeaderParameter = {};
          const localVarQueryParameter = {};
          common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
          let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
          localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
          return {
            url: common_1.toPathString(localVarUrlObj),
            options: localVarRequestOptions
          };
        }),
        createAnswer: (createAnswerRequest, options = {}) => __awaiter2(this, void 0, void 0, function* () {
          common_1.assertParamExists("createAnswer", "createAnswerRequest", createAnswerRequest);
          const localVarPath = `/answers`;
          const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
          let baseOptions;
          if (configuration2) {
            baseOptions = configuration2.baseOptions;
          }
          const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
          const localVarHeaderParameter = {};
          const localVarQueryParameter = {};
          localVarHeaderParameter["Content-Type"] = "application/json";
          common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
          let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
          localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
          localVarRequestOptions.data = common_1.serializeDataIfNeeded(createAnswerRequest, localVarRequestOptions, configuration2);
          return {
            url: common_1.toPathString(localVarUrlObj),
            options: localVarRequestOptions
          };
        }),
        createChatCompletion: (createChatCompletionRequest, options = {}) => __awaiter2(this, void 0, void 0, function* () {
          common_1.assertParamExists("createChatCompletion", "createChatCompletionRequest", createChatCompletionRequest);
          const localVarPath = `/chat/completions`;
          const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
          let baseOptions;
          if (configuration2) {
            baseOptions = configuration2.baseOptions;
          }
          const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
          const localVarHeaderParameter = {};
          const localVarQueryParameter = {};
          localVarHeaderParameter["Content-Type"] = "application/json";
          common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
          let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
          localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
          localVarRequestOptions.data = common_1.serializeDataIfNeeded(createChatCompletionRequest, localVarRequestOptions, configuration2);
          return {
            url: common_1.toPathString(localVarUrlObj),
            options: localVarRequestOptions
          };
        }),
        createClassification: (createClassificationRequest, options = {}) => __awaiter2(this, void 0, void 0, function* () {
          common_1.assertParamExists("createClassification", "createClassificationRequest", createClassificationRequest);
          const localVarPath = `/classifications`;
          const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
          let baseOptions;
          if (configuration2) {
            baseOptions = configuration2.baseOptions;
          }
          const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
          const localVarHeaderParameter = {};
          const localVarQueryParameter = {};
          localVarHeaderParameter["Content-Type"] = "application/json";
          common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
          let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
          localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
          localVarRequestOptions.data = common_1.serializeDataIfNeeded(createClassificationRequest, localVarRequestOptions, configuration2);
          return {
            url: common_1.toPathString(localVarUrlObj),
            options: localVarRequestOptions
          };
        }),
        createCompletion: (createCompletionRequest, options = {}) => __awaiter2(this, void 0, void 0, function* () {
          common_1.assertParamExists("createCompletion", "createCompletionRequest", createCompletionRequest);
          const localVarPath = `/completions`;
          const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
          let baseOptions;
          if (configuration2) {
            baseOptions = configuration2.baseOptions;
          }
          const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
          const localVarHeaderParameter = {};
          const localVarQueryParameter = {};
          localVarHeaderParameter["Content-Type"] = "application/json";
          common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
          let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
          localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
          localVarRequestOptions.data = common_1.serializeDataIfNeeded(createCompletionRequest, localVarRequestOptions, configuration2);
          return {
            url: common_1.toPathString(localVarUrlObj),
            options: localVarRequestOptions
          };
        }),
        createEdit: (createEditRequest, options = {}) => __awaiter2(this, void 0, void 0, function* () {
          common_1.assertParamExists("createEdit", "createEditRequest", createEditRequest);
          const localVarPath = `/edits`;
          const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
          let baseOptions;
          if (configuration2) {
            baseOptions = configuration2.baseOptions;
          }
          const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
          const localVarHeaderParameter = {};
          const localVarQueryParameter = {};
          localVarHeaderParameter["Content-Type"] = "application/json";
          common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
          let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
          localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
          localVarRequestOptions.data = common_1.serializeDataIfNeeded(createEditRequest, localVarRequestOptions, configuration2);
          return {
            url: common_1.toPathString(localVarUrlObj),
            options: localVarRequestOptions
          };
        }),
        createEmbedding: (createEmbeddingRequest, options = {}) => __awaiter2(this, void 0, void 0, function* () {
          common_1.assertParamExists("createEmbedding", "createEmbeddingRequest", createEmbeddingRequest);
          const localVarPath = `/embeddings`;
          const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
          let baseOptions;
          if (configuration2) {
            baseOptions = configuration2.baseOptions;
          }
          const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
          const localVarHeaderParameter = {};
          const localVarQueryParameter = {};
          localVarHeaderParameter["Content-Type"] = "application/json";
          common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
          let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
          localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
          localVarRequestOptions.data = common_1.serializeDataIfNeeded(createEmbeddingRequest, localVarRequestOptions, configuration2);
          return {
            url: common_1.toPathString(localVarUrlObj),
            options: localVarRequestOptions
          };
        }),
        createFile: (file, purpose, options = {}) => __awaiter2(this, void 0, void 0, function* () {
          common_1.assertParamExists("createFile", "file", file);
          common_1.assertParamExists("createFile", "purpose", purpose);
          const localVarPath = `/files`;
          const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
          let baseOptions;
          if (configuration2) {
            baseOptions = configuration2.baseOptions;
          }
          const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
          const localVarHeaderParameter = {};
          const localVarQueryParameter = {};
          const localVarFormParams = new (configuration2 && configuration2.formDataCtor || FormData)();
          if (file !== void 0) {
            localVarFormParams.append("file", file);
          }
          if (purpose !== void 0) {
            localVarFormParams.append("purpose", purpose);
          }
          localVarHeaderParameter["Content-Type"] = "multipart/form-data";
          common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
          let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
          localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), localVarFormParams.getHeaders()), headersFromBaseOptions), options.headers);
          localVarRequestOptions.data = localVarFormParams;
          return {
            url: common_1.toPathString(localVarUrlObj),
            options: localVarRequestOptions
          };
        }),
        createFineTune: (createFineTuneRequest, options = {}) => __awaiter2(this, void 0, void 0, function* () {
          common_1.assertParamExists("createFineTune", "createFineTuneRequest", createFineTuneRequest);
          const localVarPath = `/fine-tunes`;
          const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
          let baseOptions;
          if (configuration2) {
            baseOptions = configuration2.baseOptions;
          }
          const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
          const localVarHeaderParameter = {};
          const localVarQueryParameter = {};
          localVarHeaderParameter["Content-Type"] = "application/json";
          common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
          let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
          localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
          localVarRequestOptions.data = common_1.serializeDataIfNeeded(createFineTuneRequest, localVarRequestOptions, configuration2);
          return {
            url: common_1.toPathString(localVarUrlObj),
            options: localVarRequestOptions
          };
        }),
        createImage: (createImageRequest, options = {}) => __awaiter2(this, void 0, void 0, function* () {
          common_1.assertParamExists("createImage", "createImageRequest", createImageRequest);
          const localVarPath = `/images/generations`;
          const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
          let baseOptions;
          if (configuration2) {
            baseOptions = configuration2.baseOptions;
          }
          const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
          const localVarHeaderParameter = {};
          const localVarQueryParameter = {};
          localVarHeaderParameter["Content-Type"] = "application/json";
          common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
          let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
          localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
          localVarRequestOptions.data = common_1.serializeDataIfNeeded(createImageRequest, localVarRequestOptions, configuration2);
          return {
            url: common_1.toPathString(localVarUrlObj),
            options: localVarRequestOptions
          };
        }),
        createImageEdit: (image, prompt, mask, n, size, responseFormat, user, options = {}) => __awaiter2(this, void 0, void 0, function* () {
          common_1.assertParamExists("createImageEdit", "image", image);
          common_1.assertParamExists("createImageEdit", "prompt", prompt);
          const localVarPath = `/images/edits`;
          const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
          let baseOptions;
          if (configuration2) {
            baseOptions = configuration2.baseOptions;
          }
          const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
          const localVarHeaderParameter = {};
          const localVarQueryParameter = {};
          const localVarFormParams = new (configuration2 && configuration2.formDataCtor || FormData)();
          if (image !== void 0) {
            localVarFormParams.append("image", image);
          }
          if (mask !== void 0) {
            localVarFormParams.append("mask", mask);
          }
          if (prompt !== void 0) {
            localVarFormParams.append("prompt", prompt);
          }
          if (n !== void 0) {
            localVarFormParams.append("n", n);
          }
          if (size !== void 0) {
            localVarFormParams.append("size", size);
          }
          if (responseFormat !== void 0) {
            localVarFormParams.append("response_format", responseFormat);
          }
          if (user !== void 0) {
            localVarFormParams.append("user", user);
          }
          localVarHeaderParameter["Content-Type"] = "multipart/form-data";
          common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
          let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
          localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), localVarFormParams.getHeaders()), headersFromBaseOptions), options.headers);
          localVarRequestOptions.data = localVarFormParams;
          return {
            url: common_1.toPathString(localVarUrlObj),
            options: localVarRequestOptions
          };
        }),
        createImageVariation: (image, n, size, responseFormat, user, options = {}) => __awaiter2(this, void 0, void 0, function* () {
          common_1.assertParamExists("createImageVariation", "image", image);
          const localVarPath = `/images/variations`;
          const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
          let baseOptions;
          if (configuration2) {
            baseOptions = configuration2.baseOptions;
          }
          const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
          const localVarHeaderParameter = {};
          const localVarQueryParameter = {};
          const localVarFormParams = new (configuration2 && configuration2.formDataCtor || FormData)();
          if (image !== void 0) {
            localVarFormParams.append("image", image);
          }
          if (n !== void 0) {
            localVarFormParams.append("n", n);
          }
          if (size !== void 0) {
            localVarFormParams.append("size", size);
          }
          if (responseFormat !== void 0) {
            localVarFormParams.append("response_format", responseFormat);
          }
          if (user !== void 0) {
            localVarFormParams.append("user", user);
          }
          localVarHeaderParameter["Content-Type"] = "multipart/form-data";
          common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
          let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
          localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), localVarFormParams.getHeaders()), headersFromBaseOptions), options.headers);
          localVarRequestOptions.data = localVarFormParams;
          return {
            url: common_1.toPathString(localVarUrlObj),
            options: localVarRequestOptions
          };
        }),
        createModeration: (createModerationRequest, options = {}) => __awaiter2(this, void 0, void 0, function* () {
          common_1.assertParamExists("createModeration", "createModerationRequest", createModerationRequest);
          const localVarPath = `/moderations`;
          const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
          let baseOptions;
          if (configuration2) {
            baseOptions = configuration2.baseOptions;
          }
          const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
          const localVarHeaderParameter = {};
          const localVarQueryParameter = {};
          localVarHeaderParameter["Content-Type"] = "application/json";
          common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
          let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
          localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
          localVarRequestOptions.data = common_1.serializeDataIfNeeded(createModerationRequest, localVarRequestOptions, configuration2);
          return {
            url: common_1.toPathString(localVarUrlObj),
            options: localVarRequestOptions
          };
        }),
        createSearch: (engineId, createSearchRequest, options = {}) => __awaiter2(this, void 0, void 0, function* () {
          common_1.assertParamExists("createSearch", "engineId", engineId);
          common_1.assertParamExists("createSearch", "createSearchRequest", createSearchRequest);
          const localVarPath = `/engines/{engine_id}/search`.replace(`{${"engine_id"}}`, encodeURIComponent(String(engineId)));
          const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
          let baseOptions;
          if (configuration2) {
            baseOptions = configuration2.baseOptions;
          }
          const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
          const localVarHeaderParameter = {};
          const localVarQueryParameter = {};
          localVarHeaderParameter["Content-Type"] = "application/json";
          common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
          let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
          localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
          localVarRequestOptions.data = common_1.serializeDataIfNeeded(createSearchRequest, localVarRequestOptions, configuration2);
          return {
            url: common_1.toPathString(localVarUrlObj),
            options: localVarRequestOptions
          };
        }),
        createTranscription: (file, model, prompt, responseFormat, temperature, language, options = {}) => __awaiter2(this, void 0, void 0, function* () {
          common_1.assertParamExists("createTranscription", "file", file);
          common_1.assertParamExists("createTranscription", "model", model);
          const localVarPath = `/audio/transcriptions`;
          const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
          let baseOptions;
          if (configuration2) {
            baseOptions = configuration2.baseOptions;
          }
          const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
          const localVarHeaderParameter = {};
          const localVarQueryParameter = {};
          const localVarFormParams = new (configuration2 && configuration2.formDataCtor || FormData)();
          if (file !== void 0) {
            localVarFormParams.append("file", file);
          }
          if (model !== void 0) {
            localVarFormParams.append("model", model);
          }
          if (prompt !== void 0) {
            localVarFormParams.append("prompt", prompt);
          }
          if (responseFormat !== void 0) {
            localVarFormParams.append("response_format", responseFormat);
          }
          if (temperature !== void 0) {
            localVarFormParams.append("temperature", temperature);
          }
          if (language !== void 0) {
            localVarFormParams.append("language", language);
          }
          localVarHeaderParameter["Content-Type"] = "multipart/form-data";
          common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
          let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
          localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), localVarFormParams.getHeaders()), headersFromBaseOptions), options.headers);
          localVarRequestOptions.data = localVarFormParams;
          return {
            url: common_1.toPathString(localVarUrlObj),
            options: localVarRequestOptions
          };
        }),
        createTranslation: (file, model, prompt, responseFormat, temperature, options = {}) => __awaiter2(this, void 0, void 0, function* () {
          common_1.assertParamExists("createTranslation", "file", file);
          common_1.assertParamExists("createTranslation", "model", model);
          const localVarPath = `/audio/translations`;
          const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
          let baseOptions;
          if (configuration2) {
            baseOptions = configuration2.baseOptions;
          }
          const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
          const localVarHeaderParameter = {};
          const localVarQueryParameter = {};
          const localVarFormParams = new (configuration2 && configuration2.formDataCtor || FormData)();
          if (file !== void 0) {
            localVarFormParams.append("file", file);
          }
          if (model !== void 0) {
            localVarFormParams.append("model", model);
          }
          if (prompt !== void 0) {
            localVarFormParams.append("prompt", prompt);
          }
          if (responseFormat !== void 0) {
            localVarFormParams.append("response_format", responseFormat);
          }
          if (temperature !== void 0) {
            localVarFormParams.append("temperature", temperature);
          }
          localVarHeaderParameter["Content-Type"] = "multipart/form-data";
          common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
          let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
          localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), localVarFormParams.getHeaders()), headersFromBaseOptions), options.headers);
          localVarRequestOptions.data = localVarFormParams;
          return {
            url: common_1.toPathString(localVarUrlObj),
            options: localVarRequestOptions
          };
        }),
        deleteFile: (fileId, options = {}) => __awaiter2(this, void 0, void 0, function* () {
          common_1.assertParamExists("deleteFile", "fileId", fileId);
          const localVarPath = `/files/{file_id}`.replace(`{${"file_id"}}`, encodeURIComponent(String(fileId)));
          const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
          let baseOptions;
          if (configuration2) {
            baseOptions = configuration2.baseOptions;
          }
          const localVarRequestOptions = Object.assign(Object.assign({ method: "DELETE" }, baseOptions), options);
          const localVarHeaderParameter = {};
          const localVarQueryParameter = {};
          common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
          let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
          localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
          return {
            url: common_1.toPathString(localVarUrlObj),
            options: localVarRequestOptions
          };
        }),
        deleteModel: (model, options = {}) => __awaiter2(this, void 0, void 0, function* () {
          common_1.assertParamExists("deleteModel", "model", model);
          const localVarPath = `/models/{model}`.replace(`{${"model"}}`, encodeURIComponent(String(model)));
          const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
          let baseOptions;
          if (configuration2) {
            baseOptions = configuration2.baseOptions;
          }
          const localVarRequestOptions = Object.assign(Object.assign({ method: "DELETE" }, baseOptions), options);
          const localVarHeaderParameter = {};
          const localVarQueryParameter = {};
          common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
          let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
          localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
          return {
            url: common_1.toPathString(localVarUrlObj),
            options: localVarRequestOptions
          };
        }),
        downloadFile: (fileId, options = {}) => __awaiter2(this, void 0, void 0, function* () {
          common_1.assertParamExists("downloadFile", "fileId", fileId);
          const localVarPath = `/files/{file_id}/content`.replace(`{${"file_id"}}`, encodeURIComponent(String(fileId)));
          const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
          let baseOptions;
          if (configuration2) {
            baseOptions = configuration2.baseOptions;
          }
          const localVarRequestOptions = Object.assign(Object.assign({ method: "GET" }, baseOptions), options);
          const localVarHeaderParameter = {};
          const localVarQueryParameter = {};
          common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
          let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
          localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
          return {
            url: common_1.toPathString(localVarUrlObj),
            options: localVarRequestOptions
          };
        }),
        listEngines: (options = {}) => __awaiter2(this, void 0, void 0, function* () {
          const localVarPath = `/engines`;
          const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
          let baseOptions;
          if (configuration2) {
            baseOptions = configuration2.baseOptions;
          }
          const localVarRequestOptions = Object.assign(Object.assign({ method: "GET" }, baseOptions), options);
          const localVarHeaderParameter = {};
          const localVarQueryParameter = {};
          common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
          let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
          localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
          return {
            url: common_1.toPathString(localVarUrlObj),
            options: localVarRequestOptions
          };
        }),
        listFiles: (options = {}) => __awaiter2(this, void 0, void 0, function* () {
          const localVarPath = `/files`;
          const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
          let baseOptions;
          if (configuration2) {
            baseOptions = configuration2.baseOptions;
          }
          const localVarRequestOptions = Object.assign(Object.assign({ method: "GET" }, baseOptions), options);
          const localVarHeaderParameter = {};
          const localVarQueryParameter = {};
          common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
          let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
          localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
          return {
            url: common_1.toPathString(localVarUrlObj),
            options: localVarRequestOptions
          };
        }),
        listFineTuneEvents: (fineTuneId, stream, options = {}) => __awaiter2(this, void 0, void 0, function* () {
          common_1.assertParamExists("listFineTuneEvents", "fineTuneId", fineTuneId);
          const localVarPath = `/fine-tunes/{fine_tune_id}/events`.replace(`{${"fine_tune_id"}}`, encodeURIComponent(String(fineTuneId)));
          const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
          let baseOptions;
          if (configuration2) {
            baseOptions = configuration2.baseOptions;
          }
          const localVarRequestOptions = Object.assign(Object.assign({ method: "GET" }, baseOptions), options);
          const localVarHeaderParameter = {};
          const localVarQueryParameter = {};
          if (stream !== void 0) {
            localVarQueryParameter["stream"] = stream;
          }
          common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
          let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
          localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
          return {
            url: common_1.toPathString(localVarUrlObj),
            options: localVarRequestOptions
          };
        }),
        listFineTunes: (options = {}) => __awaiter2(this, void 0, void 0, function* () {
          const localVarPath = `/fine-tunes`;
          const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
          let baseOptions;
          if (configuration2) {
            baseOptions = configuration2.baseOptions;
          }
          const localVarRequestOptions = Object.assign(Object.assign({ method: "GET" }, baseOptions), options);
          const localVarHeaderParameter = {};
          const localVarQueryParameter = {};
          common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
          let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
          localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
          return {
            url: common_1.toPathString(localVarUrlObj),
            options: localVarRequestOptions
          };
        }),
        listModels: (options = {}) => __awaiter2(this, void 0, void 0, function* () {
          const localVarPath = `/models`;
          const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
          let baseOptions;
          if (configuration2) {
            baseOptions = configuration2.baseOptions;
          }
          const localVarRequestOptions = Object.assign(Object.assign({ method: "GET" }, baseOptions), options);
          const localVarHeaderParameter = {};
          const localVarQueryParameter = {};
          common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
          let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
          localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
          return {
            url: common_1.toPathString(localVarUrlObj),
            options: localVarRequestOptions
          };
        }),
        retrieveEngine: (engineId, options = {}) => __awaiter2(this, void 0, void 0, function* () {
          common_1.assertParamExists("retrieveEngine", "engineId", engineId);
          const localVarPath = `/engines/{engine_id}`.replace(`{${"engine_id"}}`, encodeURIComponent(String(engineId)));
          const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
          let baseOptions;
          if (configuration2) {
            baseOptions = configuration2.baseOptions;
          }
          const localVarRequestOptions = Object.assign(Object.assign({ method: "GET" }, baseOptions), options);
          const localVarHeaderParameter = {};
          const localVarQueryParameter = {};
          common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
          let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
          localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
          return {
            url: common_1.toPathString(localVarUrlObj),
            options: localVarRequestOptions
          };
        }),
        retrieveFile: (fileId, options = {}) => __awaiter2(this, void 0, void 0, function* () {
          common_1.assertParamExists("retrieveFile", "fileId", fileId);
          const localVarPath = `/files/{file_id}`.replace(`{${"file_id"}}`, encodeURIComponent(String(fileId)));
          const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
          let baseOptions;
          if (configuration2) {
            baseOptions = configuration2.baseOptions;
          }
          const localVarRequestOptions = Object.assign(Object.assign({ method: "GET" }, baseOptions), options);
          const localVarHeaderParameter = {};
          const localVarQueryParameter = {};
          common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
          let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
          localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
          return {
            url: common_1.toPathString(localVarUrlObj),
            options: localVarRequestOptions
          };
        }),
        retrieveFineTune: (fineTuneId, options = {}) => __awaiter2(this, void 0, void 0, function* () {
          common_1.assertParamExists("retrieveFineTune", "fineTuneId", fineTuneId);
          const localVarPath = `/fine-tunes/{fine_tune_id}`.replace(`{${"fine_tune_id"}}`, encodeURIComponent(String(fineTuneId)));
          const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
          let baseOptions;
          if (configuration2) {
            baseOptions = configuration2.baseOptions;
          }
          const localVarRequestOptions = Object.assign(Object.assign({ method: "GET" }, baseOptions), options);
          const localVarHeaderParameter = {};
          const localVarQueryParameter = {};
          common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
          let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
          localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
          return {
            url: common_1.toPathString(localVarUrlObj),
            options: localVarRequestOptions
          };
        }),
        retrieveModel: (model, options = {}) => __awaiter2(this, void 0, void 0, function* () {
          common_1.assertParamExists("retrieveModel", "model", model);
          const localVarPath = `/models/{model}`.replace(`{${"model"}}`, encodeURIComponent(String(model)));
          const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
          let baseOptions;
          if (configuration2) {
            baseOptions = configuration2.baseOptions;
          }
          const localVarRequestOptions = Object.assign(Object.assign({ method: "GET" }, baseOptions), options);
          const localVarHeaderParameter = {};
          const localVarQueryParameter = {};
          common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
          let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
          localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
          return {
            url: common_1.toPathString(localVarUrlObj),
            options: localVarRequestOptions
          };
        })
      };
    };
    exports.OpenAIApiFp = function(configuration2) {
      const localVarAxiosParamCreator = exports.OpenAIApiAxiosParamCreator(configuration2);
      return {
        cancelFineTune(fineTuneId, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const localVarAxiosArgs = yield localVarAxiosParamCreator.cancelFineTune(fineTuneId, options);
            return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
          });
        },
        createAnswer(createAnswerRequest, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const localVarAxiosArgs = yield localVarAxiosParamCreator.createAnswer(createAnswerRequest, options);
            return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
          });
        },
        createChatCompletion(createChatCompletionRequest, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const localVarAxiosArgs = yield localVarAxiosParamCreator.createChatCompletion(createChatCompletionRequest, options);
            return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
          });
        },
        createClassification(createClassificationRequest, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const localVarAxiosArgs = yield localVarAxiosParamCreator.createClassification(createClassificationRequest, options);
            return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
          });
        },
        createCompletion(createCompletionRequest, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const localVarAxiosArgs = yield localVarAxiosParamCreator.createCompletion(createCompletionRequest, options);
            return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
          });
        },
        createEdit(createEditRequest, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const localVarAxiosArgs = yield localVarAxiosParamCreator.createEdit(createEditRequest, options);
            return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
          });
        },
        createEmbedding(createEmbeddingRequest, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const localVarAxiosArgs = yield localVarAxiosParamCreator.createEmbedding(createEmbeddingRequest, options);
            return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
          });
        },
        createFile(file, purpose, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const localVarAxiosArgs = yield localVarAxiosParamCreator.createFile(file, purpose, options);
            return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
          });
        },
        createFineTune(createFineTuneRequest, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const localVarAxiosArgs = yield localVarAxiosParamCreator.createFineTune(createFineTuneRequest, options);
            return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
          });
        },
        createImage(createImageRequest, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const localVarAxiosArgs = yield localVarAxiosParamCreator.createImage(createImageRequest, options);
            return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
          });
        },
        createImageEdit(image, prompt, mask, n, size, responseFormat, user, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const localVarAxiosArgs = yield localVarAxiosParamCreator.createImageEdit(image, prompt, mask, n, size, responseFormat, user, options);
            return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
          });
        },
        createImageVariation(image, n, size, responseFormat, user, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const localVarAxiosArgs = yield localVarAxiosParamCreator.createImageVariation(image, n, size, responseFormat, user, options);
            return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
          });
        },
        createModeration(createModerationRequest, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const localVarAxiosArgs = yield localVarAxiosParamCreator.createModeration(createModerationRequest, options);
            return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
          });
        },
        createSearch(engineId, createSearchRequest, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const localVarAxiosArgs = yield localVarAxiosParamCreator.createSearch(engineId, createSearchRequest, options);
            return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
          });
        },
        createTranscription(file, model, prompt, responseFormat, temperature, language, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const localVarAxiosArgs = yield localVarAxiosParamCreator.createTranscription(file, model, prompt, responseFormat, temperature, language, options);
            return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
          });
        },
        createTranslation(file, model, prompt, responseFormat, temperature, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const localVarAxiosArgs = yield localVarAxiosParamCreator.createTranslation(file, model, prompt, responseFormat, temperature, options);
            return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
          });
        },
        deleteFile(fileId, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const localVarAxiosArgs = yield localVarAxiosParamCreator.deleteFile(fileId, options);
            return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
          });
        },
        deleteModel(model, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const localVarAxiosArgs = yield localVarAxiosParamCreator.deleteModel(model, options);
            return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
          });
        },
        downloadFile(fileId, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const localVarAxiosArgs = yield localVarAxiosParamCreator.downloadFile(fileId, options);
            return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
          });
        },
        listEngines(options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const localVarAxiosArgs = yield localVarAxiosParamCreator.listEngines(options);
            return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
          });
        },
        listFiles(options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const localVarAxiosArgs = yield localVarAxiosParamCreator.listFiles(options);
            return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
          });
        },
        listFineTuneEvents(fineTuneId, stream, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const localVarAxiosArgs = yield localVarAxiosParamCreator.listFineTuneEvents(fineTuneId, stream, options);
            return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
          });
        },
        listFineTunes(options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const localVarAxiosArgs = yield localVarAxiosParamCreator.listFineTunes(options);
            return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
          });
        },
        listModels(options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const localVarAxiosArgs = yield localVarAxiosParamCreator.listModels(options);
            return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
          });
        },
        retrieveEngine(engineId, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const localVarAxiosArgs = yield localVarAxiosParamCreator.retrieveEngine(engineId, options);
            return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
          });
        },
        retrieveFile(fileId, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const localVarAxiosArgs = yield localVarAxiosParamCreator.retrieveFile(fileId, options);
            return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
          });
        },
        retrieveFineTune(fineTuneId, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const localVarAxiosArgs = yield localVarAxiosParamCreator.retrieveFineTune(fineTuneId, options);
            return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
          });
        },
        retrieveModel(model, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const localVarAxiosArgs = yield localVarAxiosParamCreator.retrieveModel(model, options);
            return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration2);
          });
        }
      };
    };
    exports.OpenAIApiFactory = function(configuration2, basePath, axios) {
      const localVarFp = exports.OpenAIApiFp(configuration2);
      return {
        cancelFineTune(fineTuneId, options) {
          return localVarFp.cancelFineTune(fineTuneId, options).then((request) => request(axios, basePath));
        },
        createAnswer(createAnswerRequest, options) {
          return localVarFp.createAnswer(createAnswerRequest, options).then((request) => request(axios, basePath));
        },
        createChatCompletion(createChatCompletionRequest, options) {
          return localVarFp.createChatCompletion(createChatCompletionRequest, options).then((request) => request(axios, basePath));
        },
        createClassification(createClassificationRequest, options) {
          return localVarFp.createClassification(createClassificationRequest, options).then((request) => request(axios, basePath));
        },
        createCompletion(createCompletionRequest, options) {
          return localVarFp.createCompletion(createCompletionRequest, options).then((request) => request(axios, basePath));
        },
        createEdit(createEditRequest, options) {
          return localVarFp.createEdit(createEditRequest, options).then((request) => request(axios, basePath));
        },
        createEmbedding(createEmbeddingRequest, options) {
          return localVarFp.createEmbedding(createEmbeddingRequest, options).then((request) => request(axios, basePath));
        },
        createFile(file, purpose, options) {
          return localVarFp.createFile(file, purpose, options).then((request) => request(axios, basePath));
        },
        createFineTune(createFineTuneRequest, options) {
          return localVarFp.createFineTune(createFineTuneRequest, options).then((request) => request(axios, basePath));
        },
        createImage(createImageRequest, options) {
          return localVarFp.createImage(createImageRequest, options).then((request) => request(axios, basePath));
        },
        createImageEdit(image, prompt, mask, n, size, responseFormat, user, options) {
          return localVarFp.createImageEdit(image, prompt, mask, n, size, responseFormat, user, options).then((request) => request(axios, basePath));
        },
        createImageVariation(image, n, size, responseFormat, user, options) {
          return localVarFp.createImageVariation(image, n, size, responseFormat, user, options).then((request) => request(axios, basePath));
        },
        createModeration(createModerationRequest, options) {
          return localVarFp.createModeration(createModerationRequest, options).then((request) => request(axios, basePath));
        },
        createSearch(engineId, createSearchRequest, options) {
          return localVarFp.createSearch(engineId, createSearchRequest, options).then((request) => request(axios, basePath));
        },
        createTranscription(file, model, prompt, responseFormat, temperature, language, options) {
          return localVarFp.createTranscription(file, model, prompt, responseFormat, temperature, language, options).then((request) => request(axios, basePath));
        },
        createTranslation(file, model, prompt, responseFormat, temperature, options) {
          return localVarFp.createTranslation(file, model, prompt, responseFormat, temperature, options).then((request) => request(axios, basePath));
        },
        deleteFile(fileId, options) {
          return localVarFp.deleteFile(fileId, options).then((request) => request(axios, basePath));
        },
        deleteModel(model, options) {
          return localVarFp.deleteModel(model, options).then((request) => request(axios, basePath));
        },
        downloadFile(fileId, options) {
          return localVarFp.downloadFile(fileId, options).then((request) => request(axios, basePath));
        },
        listEngines(options) {
          return localVarFp.listEngines(options).then((request) => request(axios, basePath));
        },
        listFiles(options) {
          return localVarFp.listFiles(options).then((request) => request(axios, basePath));
        },
        listFineTuneEvents(fineTuneId, stream, options) {
          return localVarFp.listFineTuneEvents(fineTuneId, stream, options).then((request) => request(axios, basePath));
        },
        listFineTunes(options) {
          return localVarFp.listFineTunes(options).then((request) => request(axios, basePath));
        },
        listModels(options) {
          return localVarFp.listModels(options).then((request) => request(axios, basePath));
        },
        retrieveEngine(engineId, options) {
          return localVarFp.retrieveEngine(engineId, options).then((request) => request(axios, basePath));
        },
        retrieveFile(fileId, options) {
          return localVarFp.retrieveFile(fileId, options).then((request) => request(axios, basePath));
        },
        retrieveFineTune(fineTuneId, options) {
          return localVarFp.retrieveFineTune(fineTuneId, options).then((request) => request(axios, basePath));
        },
        retrieveModel(model, options) {
          return localVarFp.retrieveModel(model, options).then((request) => request(axios, basePath));
        }
      };
    };
    var OpenAIApi2 = class extends base_1.BaseAPI {
      cancelFineTune(fineTuneId, options) {
        return exports.OpenAIApiFp(this.configuration).cancelFineTune(fineTuneId, options).then((request) => request(this.axios, this.basePath));
      }
      createAnswer(createAnswerRequest, options) {
        return exports.OpenAIApiFp(this.configuration).createAnswer(createAnswerRequest, options).then((request) => request(this.axios, this.basePath));
      }
      createChatCompletion(createChatCompletionRequest, options) {
        return exports.OpenAIApiFp(this.configuration).createChatCompletion(createChatCompletionRequest, options).then((request) => request(this.axios, this.basePath));
      }
      createClassification(createClassificationRequest, options) {
        return exports.OpenAIApiFp(this.configuration).createClassification(createClassificationRequest, options).then((request) => request(this.axios, this.basePath));
      }
      createCompletion(createCompletionRequest, options) {
        return exports.OpenAIApiFp(this.configuration).createCompletion(createCompletionRequest, options).then((request) => request(this.axios, this.basePath));
      }
      createEdit(createEditRequest, options) {
        return exports.OpenAIApiFp(this.configuration).createEdit(createEditRequest, options).then((request) => request(this.axios, this.basePath));
      }
      createEmbedding(createEmbeddingRequest, options) {
        return exports.OpenAIApiFp(this.configuration).createEmbedding(createEmbeddingRequest, options).then((request) => request(this.axios, this.basePath));
      }
      createFile(file, purpose, options) {
        return exports.OpenAIApiFp(this.configuration).createFile(file, purpose, options).then((request) => request(this.axios, this.basePath));
      }
      createFineTune(createFineTuneRequest, options) {
        return exports.OpenAIApiFp(this.configuration).createFineTune(createFineTuneRequest, options).then((request) => request(this.axios, this.basePath));
      }
      createImage(createImageRequest, options) {
        return exports.OpenAIApiFp(this.configuration).createImage(createImageRequest, options).then((request) => request(this.axios, this.basePath));
      }
      createImageEdit(image, prompt, mask, n, size, responseFormat, user, options) {
        return exports.OpenAIApiFp(this.configuration).createImageEdit(image, prompt, mask, n, size, responseFormat, user, options).then((request) => request(this.axios, this.basePath));
      }
      createImageVariation(image, n, size, responseFormat, user, options) {
        return exports.OpenAIApiFp(this.configuration).createImageVariation(image, n, size, responseFormat, user, options).then((request) => request(this.axios, this.basePath));
      }
      createModeration(createModerationRequest, options) {
        return exports.OpenAIApiFp(this.configuration).createModeration(createModerationRequest, options).then((request) => request(this.axios, this.basePath));
      }
      createSearch(engineId, createSearchRequest, options) {
        return exports.OpenAIApiFp(this.configuration).createSearch(engineId, createSearchRequest, options).then((request) => request(this.axios, this.basePath));
      }
      createTranscription(file, model, prompt, responseFormat, temperature, language, options) {
        return exports.OpenAIApiFp(this.configuration).createTranscription(file, model, prompt, responseFormat, temperature, language, options).then((request) => request(this.axios, this.basePath));
      }
      createTranslation(file, model, prompt, responseFormat, temperature, options) {
        return exports.OpenAIApiFp(this.configuration).createTranslation(file, model, prompt, responseFormat, temperature, options).then((request) => request(this.axios, this.basePath));
      }
      deleteFile(fileId, options) {
        return exports.OpenAIApiFp(this.configuration).deleteFile(fileId, options).then((request) => request(this.axios, this.basePath));
      }
      deleteModel(model, options) {
        return exports.OpenAIApiFp(this.configuration).deleteModel(model, options).then((request) => request(this.axios, this.basePath));
      }
      downloadFile(fileId, options) {
        return exports.OpenAIApiFp(this.configuration).downloadFile(fileId, options).then((request) => request(this.axios, this.basePath));
      }
      listEngines(options) {
        return exports.OpenAIApiFp(this.configuration).listEngines(options).then((request) => request(this.axios, this.basePath));
      }
      listFiles(options) {
        return exports.OpenAIApiFp(this.configuration).listFiles(options).then((request) => request(this.axios, this.basePath));
      }
      listFineTuneEvents(fineTuneId, stream, options) {
        return exports.OpenAIApiFp(this.configuration).listFineTuneEvents(fineTuneId, stream, options).then((request) => request(this.axios, this.basePath));
      }
      listFineTunes(options) {
        return exports.OpenAIApiFp(this.configuration).listFineTunes(options).then((request) => request(this.axios, this.basePath));
      }
      listModels(options) {
        return exports.OpenAIApiFp(this.configuration).listModels(options).then((request) => request(this.axios, this.basePath));
      }
      retrieveEngine(engineId, options) {
        return exports.OpenAIApiFp(this.configuration).retrieveEngine(engineId, options).then((request) => request(this.axios, this.basePath));
      }
      retrieveFile(fileId, options) {
        return exports.OpenAIApiFp(this.configuration).retrieveFile(fileId, options).then((request) => request(this.axios, this.basePath));
      }
      retrieveFineTune(fineTuneId, options) {
        return exports.OpenAIApiFp(this.configuration).retrieveFineTune(fineTuneId, options).then((request) => request(this.axios, this.basePath));
      }
      retrieveModel(model, options) {
        return exports.OpenAIApiFp(this.configuration).retrieveModel(model, options).then((request) => request(this.axios, this.basePath));
      }
    };
    exports.OpenAIApi = OpenAIApi2;
  }
});

// node_modules/openai/package.json
var require_package = __commonJS({
  "node_modules/openai/package.json"(exports, module) {
    module.exports = {
      name: "openai",
      version: "3.2.1",
      description: "Node.js library for the OpenAI API",
      repository: {
        type: "git",
        url: "git@github.com:openai/openai-node.git"
      },
      keywords: [
        "openai",
        "open",
        "ai",
        "gpt-3",
        "gpt3"
      ],
      author: "OpenAI",
      license: "MIT",
      main: "./dist/index.js",
      types: "./dist/index.d.ts",
      scripts: {
        build: "tsc --outDir dist/"
      },
      dependencies: {
        axios: "^0.26.0",
        "form-data": "^4.0.0"
      },
      devDependencies: {
        "@types/node": "^12.11.5",
        typescript: "^3.6.4"
      }
    };
  }
});

// node_modules/form-data/lib/browser.js
var require_browser = __commonJS({
  "node_modules/form-data/lib/browser.js"(exports, module) {
    module.exports = typeof self == "object" ? self.FormData : window.FormData;
  }
});

// node_modules/openai/dist/configuration.js
var require_configuration = __commonJS({
  "node_modules/openai/dist/configuration.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Configuration = void 0;
    var packageJson = require_package();
    var Configuration2 = class {
      constructor(param = {}) {
        this.apiKey = param.apiKey;
        this.organization = param.organization;
        this.username = param.username;
        this.password = param.password;
        this.accessToken = param.accessToken;
        this.basePath = param.basePath;
        this.baseOptions = param.baseOptions;
        this.formDataCtor = param.formDataCtor;
        if (!this.baseOptions) {
          this.baseOptions = {};
        }
        this.baseOptions.headers = Object.assign({ "User-Agent": `OpenAI/NodeJS/${packageJson.version}`, "Authorization": `Bearer ${this.apiKey}` }, this.baseOptions.headers);
        if (this.organization) {
          this.baseOptions.headers["OpenAI-Organization"] = this.organization;
        }
        if (!this.formDataCtor) {
          this.formDataCtor = require_browser();
        }
      }
      isJsonMime(mime) {
        const jsonMime = new RegExp("^(application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(;.*)?$", "i");
        return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === "application/json-patch+json");
      }
    };
    exports.Configuration = Configuration2;
  }
});

// node_modules/openai/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/openai/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !exports2.hasOwnProperty(p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_api(), exports);
    __exportStar(require_configuration(), exports);
  }
});

// app/routes/index.jsx
var import_react3 = __toESM(require_react());

// app/styles/index.css
var styles_default = "/build/_assets/index-MCSCH5UA.css";

// app/styles/input.css
var input_default = "/build/_assets/input-SLJ6PGXN.css";

// app/components/input.js
var import_react2 = __toESM(require_react());
var import_regenerator_runtime = __toESM(require_runtime());
var import_speech_recognition_polyfill = __toESM(require_dist());
var import_react_speech_recognition = __toESM(require_lib());

// app/api/prompt.js
var import_dompurify = __toESM(require_purify());
var import_openai = __toESM(require_dist2());
var configuration = new import_openai.Configuration({
  apiKey: ENV.OPENAI_API_KEY
});
var openai = new import_openai.OpenAIApi(configuration);
async function submitPrompt(word = "") {
  if (!configuration.apiKey) {
    return Promise.reject({});
  }
  word = import_dompurify.default.sanitize(word);
  if (word.trim().length === 0) {
    return Promise.reject({ message: "Please enter a valid word" });
  }
  try {
    const completion = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      prompt: generatePrompt(word),
      temperature: 0.5,
      max_tokens: 3e3
    });
    return completion.data.choices[0].text;
  } catch (error) {
    return Promise.reject({ error });
  }
}
function generatePrompt(word) {
  return `Define the word ${word}. Then give me an example of its use in a sentence. Use proper grammar and punctuation. 
  
  Return in json format like: {"definition": "<definition>", "example": "<example>"}`;
}

// app/components/input.js
var import_dompurify3 = __toESM(require_purify());

// node_modules/react-spinners/esm/helpers/unitConverter.js
var cssUnit = {
  cm: true,
  mm: true,
  in: true,
  px: true,
  pt: true,
  pc: true,
  em: true,
  ex: true,
  ch: true,
  rem: true,
  vw: true,
  vh: true,
  vmin: true,
  vmax: true,
  "%": true
};
function parseLengthAndUnit(size) {
  if (typeof size === "number") {
    return {
      value: size,
      unit: "px"
    };
  }
  var value;
  var valueString = (size.match(/^[0-9.]*/) || "").toString();
  if (valueString.includes(".")) {
    value = parseFloat(valueString);
  } else {
    value = parseInt(valueString, 10);
  }
  var unit = (size.match(/[^0-9]*$/) || "").toString();
  if (cssUnit[unit]) {
    return {
      value,
      unit
    };
  }
  console.warn("React Spinners: ".concat(size, " is not a valid css value. Defaulting to ").concat(value, "px."));
  return {
    value,
    unit: "px"
  };
}

// node_modules/react-spinners/esm/helpers/animation.js
var createAnimation = function(loaderName, frames, suffix) {
  var animationName = "react-spinners-".concat(loaderName, "-").concat(suffix);
  if (typeof window == "undefined" || !window.document) {
    return animationName;
  }
  var styleEl = document.createElement("style");
  document.head.appendChild(styleEl);
  var styleSheet = styleEl.sheet;
  var keyFrames = "\n    @keyframes ".concat(animationName, " {\n      ").concat(frames, "\n    }\n  ");
  if (styleSheet) {
    styleSheet.insertRule(keyFrames, 0);
  }
  return animationName;
};

// node_modules/react-spinners/esm/PropagateLoader.js
var React = __toESM(require_react());
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var distance = [1, 3, 5];
var propagate = [
  createAnimation("PropagateLoader", "25% {transform: translateX(-".concat(distance[0], "rem) scale(0.75)}\n    50% {transform: translateX(-").concat(distance[1], "rem) scale(0.6)}\n    75% {transform: translateX(-").concat(distance[2], "rem) scale(0.5)}\n    95% {transform: translateX(0rem) scale(1)}"), "propogate-0"),
  createAnimation("PropagateLoader", "25% {transform: translateX(-".concat(distance[0], "rem) scale(0.75)}\n    50% {transform: translateX(-").concat(distance[1], "rem) scale(0.6)}\n    75% {transform: translateX(-").concat(distance[1], "rem) scale(0.6)}\n    95% {transform: translateX(0rem) scale(1)}"), "propogate-1"),
  createAnimation("PropagateLoader", "25% {transform: translateX(-".concat(distance[0], "rem) scale(0.75)}\n    75% {transform: translateX(-").concat(distance[0], "rem) scale(0.75)}\n    95% {transform: translateX(0rem) scale(1)}"), "propogate-2"),
  createAnimation("PropagateLoader", "25% {transform: translateX(".concat(distance[0], "rem) scale(0.75)}\n    75% {transform: translateX(").concat(distance[0], "rem) scale(0.75)}\n    95% {transform: translateX(0rem) scale(1)}"), "propogate-3"),
  createAnimation("PropagateLoader", "25% {transform: translateX(".concat(distance[0], "rem) scale(0.75)}\n    50% {transform: translateX(").concat(distance[1], "rem) scale(0.6)}\n    75% {transform: translateX(").concat(distance[1], "rem) scale(0.6)}\n    95% {transform: translateX(0rem) scale(1)}"), "propogate-4"),
  createAnimation("PropagateLoader", "25% {transform: translateX(".concat(distance[0], "rem) scale(0.75)}\n    50% {transform: translateX(").concat(distance[1], "rem) scale(0.6)}\n    75% {transform: translateX(").concat(distance[2], "rem) scale(0.5)}\n    95% {transform: translateX(0rem) scale(1)}"), "propogate-5")
];
function PropagateLoader(_a) {
  var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 15 : _f, additionalprops = __rest(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size"]);
  var _g = parseLengthAndUnit(size), value = _g.value, unit = _g.unit;
  var wrapper = __assign({ display: "inherit", position: "relative" }, cssOverride);
  var style = function(i) {
    return {
      position: "absolute",
      fontSize: "".concat(value / 3).concat(unit),
      width: "".concat(value).concat(unit),
      height: "".concat(value).concat(unit),
      background: color,
      borderRadius: "50%",
      animation: "".concat(propagate[i], " ").concat(1.5 / speedMultiplier, "s infinite"),
      animationFillMode: "forwards"
    };
  };
  if (!loading) {
    return null;
  }
  return React.createElement(
    "span",
    __assign({ style: wrapper }, additionalprops),
    React.createElement("span", { style: style(0) }),
    React.createElement("span", { style: style(1) }),
    React.createElement("span", { style: style(2) }),
    React.createElement("span", { style: style(3) }),
    React.createElement("span", { style: style(4) }),
    React.createElement("span", { style: style(5) })
  );
}
var PropagateLoader_default = PropagateLoader;

// app/components/response.js
var import_dompurify2 = __toESM(require_purify());
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Response({ query, data }) {
  const responseRef = (0, import_react.useRef)();
  (0, import_react.useEffect)(() => {
    responseRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  function boldQuery(query2, response) {
    if (!query2 || !response) {
      return;
    }
    const regex = new RegExp(query2, "gi");
    return response.replace(regex, `<b>${query2}</b>`);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "response", ref: responseRef, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        dangerouslySetInnerHTML: {
          __html: import_dompurify2.default.sanitize(boldQuery(query, data.definition))
        }
      },
      void 0,
      false,
      {
        fileName: "app/components/response.js",
        lineNumber: 24,
        columnNumber: 4
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/components/response.js",
      lineNumber: 29,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        dangerouslySetInnerHTML: {
          __html: `"${import_dompurify2.default.sanitize(boldQuery(query, data.example))}"`
        }
      },
      void 0,
      false,
      {
        fileName: "app/components/response.js",
        lineNumber: 30,
        columnNumber: 4
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/response.js",
    lineNumber: 23,
    columnNumber: 3
  }, this);
}

// app/components/input.js
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var appId = "c95dfa5c-ef43-437c-8400-f64515f67846";
var SpeechlySpeechRecognition = (0, import_speech_recognition_polyfill.createSpeechlySpeechRecognition)(appId);
import_react_speech_recognition.default.applyPolyfill(SpeechlySpeechRecognition);
function Input() {
  const [isReady, setIsReady] = (0, import_react2.useState)(false);
  const [query, setQuery] = (0, import_react2.useState)("");
  const [speechInput, setSpeechInput] = (0, import_react2.useState)("");
  const [response, setResponse] = (0, import_react2.useState)("");
  const [isLoading, setIsLoading] = (0, import_react2.useState)(false);
  const [error, setError] = (0, import_react2.useState)("");
  const genericError = "Something went wrong :(<br/>Please try again.";
  const {
    transcript,
    resetTranscript,
    listening,
    browserSupportsSpeechRecognition
  } = (0, import_react_speech_recognition.useSpeechRecognition)();
  (0, import_react2.useEffect)(() => {
    if (transcript) {
      setSpeechInput(transcript);
      import_react_speech_recognition.default.stopListening();
    }
  }, [transcript]);
  (0, import_react2.useEffect)(() => {
    setIsReady(true);
  }, []);
  async function onSubmit(e) {
    e.preventDefault();
    setQuery(speechInput);
    setResponse("");
    setIsLoading(true);
    setError("");
    try {
      const response2 = await submitPrompt(speechInput);
      const formattedResult = JSON.parse(response2.replace(/\n/g, ""));
      setResponse(formattedResult);
      setIsLoading(false);
    } catch (error2) {
      setError(error2.message || genericError);
      setIsLoading(false);
    }
  }
  function reset() {
    setQuery("");
    setSpeechInput("");
    setResponse("");
    resetTranscript();
    import_react_speech_recognition.default.stopListening();
    setError("");
  }
  if (!isReady) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "input-component", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: [
      "say or type a word/phrase/whatever,",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/components/input.js",
        lineNumber: 80,
        columnNumber: 5
      }, this),
      "get a definition and example."
    ] }, void 0, true, {
      fileName: "app/components/input.js",
      lineNumber: 78,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { onSubmit, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "input-container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "input",
          {
            tabIndex: "1",
            type: "text",
            className: "word-input",
            value: speechInput,
            placeholder: "type something",
            onChange: (e) => setSpeechInput(e.target.value)
          },
          void 0,
          false,
          {
            fileName: "app/components/input.js",
            lineNumber: 89,
            columnNumber: 7
          },
          this
        ),
        !listening && browserSupportsSpeechRecognition && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "button-container", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "button",
            {
              className: "start-microphone",
              type: "button",
              tabIndex: "-1",
              onClick: import_react_speech_recognition.default.startListening
            },
            void 0,
            false,
            {
              fileName: "app/components/input.js",
              lineNumber: 101,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z" }, void 0, false, {
            fileName: "app/components/input.js",
            lineNumber: 109,
            columnNumber: 10
          }, this) }, void 0, false, {
            fileName: "app/components/input.js",
            lineNumber: 108,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/input.js",
          lineNumber: 100,
          columnNumber: 8
        }, this),
        listening && browserSupportsSpeechRecognition && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "button-container", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "button",
            {
              className: "stop-microphone",
              type: "button",
              tabIndex: "-1",
              onClick: import_react_speech_recognition.default.stopListening
            },
            void 0,
            false,
            {
              fileName: "app/components/input.js",
              lineNumber: 117,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L472.1 344.7c15.2-26 23.9-56.3 23.9-88.7V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 21.2-5.1 41.1-14.2 58.7L416 300.8V96c0-53-43-96-96-96s-96 43-96 96v54.3L38.8 5.1zM344 430.4c20.4-2.8 39.7-9.1 57.3-18.2l-43.1-33.9C346.1 382 333.3 384 320 384c-70.7 0-128-57.3-128-128v-8.7L144.7 210c-.5 1.9-.7 3.9-.7 6v40c0 89.1 66.2 162.7 152 174.4V464H248c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H344V430.4z" }, void 0, false, {
            fileName: "app/components/input.js",
            lineNumber: 126,
            columnNumber: 10
          }, this) }, void 0, false, {
            fileName: "app/components/input.js",
            lineNumber: 125,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/input.js",
          lineNumber: 116,
          columnNumber: 8
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/input.js",
        lineNumber: 87,
        columnNumber: 6
      }, this),
      listening && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "listening", children: "listening..." }, void 0, false, {
        fileName: "app/components/input.js",
        lineNumber: 132,
        columnNumber: 20
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "buttons", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "submit-btn",
            onClick: onSubmit,
            disabled: isLoading || !speechInput,
            children: "submit"
          },
          void 0,
          false,
          {
            fileName: "app/components/input.js",
            lineNumber: 136,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "button",
          {
            type: "button",
            tabIndex: "-1",
            onClick: reset,
            disabled: !speechInput,
            children: "reset"
          },
          void 0,
          false,
          {
            fileName: "app/components/input.js",
            lineNumber: 146,
            columnNumber: 7
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/input.js",
        lineNumber: 134,
        columnNumber: 6
      }, this),
      error && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "div",
        {
          className: "error",
          dangerouslySetInnerHTML: {
            __html: import_dompurify3.default.sanitize(error)
          }
        },
        void 0,
        false,
        {
          fileName: "app/components/input.js",
          lineNumber: 158,
          columnNumber: 7
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/input.js",
      lineNumber: 86,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/components/input.js",
      lineNumber: 85,
      columnNumber: 4
    }, this),
    isLoading && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PropagateLoader_default, { color: "#005277", className: "loader" }, void 0, false, {
      fileName: "app/components/input.js",
      lineNumber: 169,
      columnNumber: 18
    }, this),
    response && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Response, { data: response, query }, void 0, false, {
      fileName: "app/components/input.js",
      lineNumber: 172,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/input.js",
    lineNumber: 77,
    columnNumber: 3
  }, this);
}
var input_default2 = Input;

// app/routes/index.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function links() {
  return [
    {
      rel: "stylesheet",
      href: styles_default
    },
    {
      rel: "stylesheet",
      href: input_default
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "apple-touch-icon.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "favicon-32x32.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "favicon-16x16.png"
    },
    {
      rel: "icon",
      type: "image/x-icon",
      href: "favicon.ico"
    },
    { rel: "manifest", href: "site.webmanifest" }
  ];
}
function Index() {
  const [isReady, setIsReady] = (0, import_react3.useState)(false);
  (0, import_react3.useEffect)(() => {
    setIsReady(true);
  }, []);
  if (!isReady) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "app", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "vocabify" }, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 56,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 55,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "main", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(input_default2, {}, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 60,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 59,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.jsx",
    lineNumber: 54,
    columnNumber: 3
  }, this);
}
export {
  Index as default,
  links
};
//# sourceMappingURL=/build/routes/index-H5G6MR6R.js.map
