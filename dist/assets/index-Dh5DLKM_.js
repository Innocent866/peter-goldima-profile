(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function co(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var lc = { exports: {} },
  fo = {},
  oc = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wr = Symbol.for("react.element"),
  mp = Symbol.for("react.portal"),
  vp = Symbol.for("react.fragment"),
  gp = Symbol.for("react.strict_mode"),
  yp = Symbol.for("react.profiler"),
  wp = Symbol.for("react.provider"),
  xp = Symbol.for("react.context"),
  Ep = Symbol.for("react.forward_ref"),
  Sp = Symbol.for("react.suspense"),
  kp = Symbol.for("react.memo"),
  Cp = Symbol.for("react.lazy"),
  Ps = Symbol.iterator;
function Np(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ps && e[Ps]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ic = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  uc = Object.assign,
  sc = {};
function Xn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = sc),
    (this.updater = n || ic);
}
Xn.prototype.isReactComponent = {};
Xn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Xn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ac() {}
ac.prototype = Xn.prototype;
function hu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = sc),
    (this.updater = n || ic);
}
var mu = (hu.prototype = new ac());
mu.constructor = hu;
uc(mu, Xn.prototype);
mu.isPureReactComponent = !0;
var Ts = Array.isArray,
  cc = Object.prototype.hasOwnProperty,
  vu = { current: null },
  fc = { key: !0, ref: !0, __self: !0, __source: !0 };
function dc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      cc.call(t, r) && !fc.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Wr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: vu.current,
  };
}
function Rp(e, t) {
  return {
    $$typeof: Wr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function gu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Wr;
}
function Pp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var _s = /\/+/g;
function Oo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Pp("" + e.key)
    : t.toString(36);
}
function wl(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Wr:
          case mp:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Oo(i, 0) : r),
      Ts(l)
        ? ((n = ""),
          e != null && (n = e.replace(_s, "$&/") + "/"),
          wl(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (gu(l) &&
            (l = Rp(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(_s, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Ts(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Oo(o, u);
      i += wl(o, t, n, s, l);
    }
  else if (((s = Np(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Oo(o, u++)), (i += wl(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function br(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    wl(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Tp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var xe = { current: null },
  xl = { transition: null },
  _p = {
    ReactCurrentDispatcher: xe,
    ReactCurrentBatchConfig: xl,
    ReactCurrentOwner: vu,
  };
function pc() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = {
  map: br,
  forEach: function (e, t, n) {
    br(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      br(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      br(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!gu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
z.Component = Xn;
z.Fragment = vp;
z.Profiler = yp;
z.PureComponent = hu;
z.StrictMode = gp;
z.Suspense = Sp;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _p;
z.act = pc;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = uc({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = vu.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      cc.call(t, s) &&
        !fc.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: Wr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: xp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: wp, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = dc;
z.createFactory = function (e) {
  var t = dc.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: Ep, render: e };
};
z.isValidElement = gu;
z.lazy = function (e) {
  return { $$typeof: Cp, _payload: { _status: -1, _result: e }, _init: Tp };
};
z.memo = function (e, t) {
  return { $$typeof: kp, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = xl.transition;
  xl.transition = {};
  try {
    e();
  } finally {
    xl.transition = t;
  }
};
z.unstable_act = pc;
z.useCallback = function (e, t) {
  return xe.current.useCallback(e, t);
};
z.useContext = function (e) {
  return xe.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return xe.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return xe.current.useEffect(e, t);
};
z.useId = function () {
  return xe.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return xe.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return xe.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return xe.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return xe.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return xe.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return xe.current.useRef(e);
};
z.useState = function (e) {
  return xe.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return xe.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return xe.current.useTransition();
};
z.version = "18.3.1";
oc.exports = z;
var c = oc.exports;
const ge = co(c);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jp = c,
  Lp = Symbol.for("react.element"),
  Op = Symbol.for("react.fragment"),
  Mp = Object.prototype.hasOwnProperty,
  Dp = jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  zp = { key: !0, ref: !0, __self: !0, __source: !0 };
function hc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Mp.call(t, r) && !zp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Lp,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Dp.current,
  };
}
fo.Fragment = Op;
fo.jsx = hc;
fo.jsxs = hc;
lc.exports = fo;
var g = lc.exports,
  di = {},
  mc = { exports: {} },
  ze = {},
  vc = { exports: {} },
  gc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, j) {
    var O = N.length;
    N.push(j);
    e: for (; 0 < O; ) {
      var F = (O - 1) >>> 1,
        V = N[F];
      if (0 < l(V, j)) (N[F] = j), (N[O] = V), (O = F);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var j = N[0],
      O = N.pop();
    if (O !== j) {
      N[0] = O;
      e: for (var F = 0, V = N.length, ue = V >>> 1; F < ue; ) {
        var U = 2 * (F + 1) - 1,
          ke = N[U],
          B = U + 1,
          kt = N[B];
        if (0 > l(ke, O))
          B < V && 0 > l(kt, ke)
            ? ((N[F] = kt), (N[B] = O), (F = B))
            : ((N[F] = ke), (N[U] = O), (F = U));
        else if (B < V && 0 > l(kt, O)) (N[F] = kt), (N[B] = O), (F = B);
        else break e;
      }
    }
    return j;
  }
  function l(N, j) {
    var O = N.sortIndex - j.sortIndex;
    return O !== 0 ? O : N.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    a = [],
    p = 1,
    m = null,
    h = 3,
    y = !1,
    w = !1,
    E = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(N) {
    for (var j = n(a); j !== null; ) {
      if (j.callback === null) r(a);
      else if (j.startTime <= N)
        r(a), (j.sortIndex = j.expirationTime), t(s, j);
      else break;
      j = n(a);
    }
  }
  function x(N) {
    if (((E = !1), v(N), !w))
      if (n(s) !== null) (w = !0), fe(C);
      else {
        var j = n(a);
        j !== null && b(x, j.startTime - N);
      }
  }
  function C(N, j) {
    (w = !1), E && ((E = !1), d(T), (T = -1)), (y = !0);
    var O = h;
    try {
      for (
        v(j), m = n(s);
        m !== null && (!(m.expirationTime > j) || (N && !te()));

      ) {
        var F = m.callback;
        if (typeof F == "function") {
          (m.callback = null), (h = m.priorityLevel);
          var V = F(m.expirationTime <= j);
          (j = e.unstable_now()),
            typeof V == "function" ? (m.callback = V) : m === n(s) && r(s),
            v(j);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var ue = !0;
      else {
        var U = n(a);
        U !== null && b(x, U.startTime - j), (ue = !1);
      }
      return ue;
    } finally {
      (m = null), (h = O), (y = !1);
    }
  }
  var R = !1,
    P = null,
    T = -1,
    D = 5,
    L = -1;
  function te() {
    return !(e.unstable_now() - L < D);
  }
  function Fe() {
    if (P !== null) {
      var N = e.unstable_now();
      L = N;
      var j = !0;
      try {
        j = P(!0, N);
      } finally {
        j ? Se() : ((R = !1), (P = null));
      }
    } else R = !1;
  }
  var Se;
  if (typeof f == "function")
    Se = function () {
      f(Fe);
    };
  else if (typeof MessageChannel < "u") {
    var ot = new MessageChannel(),
      it = ot.port2;
    (ot.port1.onmessage = Fe),
      (Se = function () {
        it.postMessage(null);
      });
  } else
    Se = function () {
      S(Fe, 0);
    };
  function fe(N) {
    (P = N), R || ((R = !0), Se());
  }
  function b(N, j) {
    T = S(function () {
      N(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || y || ((w = !0), fe(C));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (D = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (N) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = h;
      }
      var O = h;
      h = j;
      try {
        return N();
      } finally {
        h = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, j) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var O = h;
      h = N;
      try {
        return j();
      } finally {
        h = O;
      }
    }),
    (e.unstable_scheduleCallback = function (N, j, O) {
      var F = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? F + O : F))
          : (O = F),
        N)
      ) {
        case 1:
          var V = -1;
          break;
        case 2:
          V = 250;
          break;
        case 5:
          V = 1073741823;
          break;
        case 4:
          V = 1e4;
          break;
        default:
          V = 5e3;
      }
      return (
        (V = O + V),
        (N = {
          id: p++,
          callback: j,
          priorityLevel: N,
          startTime: O,
          expirationTime: V,
          sortIndex: -1,
        }),
        O > F
          ? ((N.sortIndex = O),
            t(a, N),
            n(s) === null &&
              N === n(a) &&
              (E ? (d(T), (T = -1)) : (E = !0), b(x, O - F)))
          : ((N.sortIndex = V), t(s, N), w || y || ((w = !0), fe(C))),
        N
      );
    }),
    (e.unstable_shouldYield = te),
    (e.unstable_wrapCallback = function (N) {
      var j = h;
      return function () {
        var O = h;
        h = j;
        try {
          return N.apply(this, arguments);
        } finally {
          h = O;
        }
      };
    });
})(gc);
vc.exports = gc;
var Ip = vc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fp = c,
  De = Ip;
function k(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var yc = new Set(),
  Cr = {};
function dn(e, t) {
  Un(e, t), Un(e + "Capture", t);
}
function Un(e, t) {
  for (Cr[e] = t, e = 0; e < t.length; e++) yc.add(t[e]);
}
var mt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  pi = Object.prototype.hasOwnProperty,
  $p =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  js = {},
  Ls = {};
function Ap(e) {
  return pi.call(Ls, e)
    ? !0
    : pi.call(js, e)
    ? !1
    : $p.test(e)
    ? (Ls[e] = !0)
    : ((js[e] = !0), !1);
}
function Up(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Bp(e, t, n, r) {
  if (t === null || typeof t > "u" || Up(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ee(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ce[e] = new Ee(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ce[t] = new Ee(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ce[e] = new Ee(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ce[e] = new Ee(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ce[e] = new Ee(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ce[e] = new Ee(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ce[e] = new Ee(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ce[e] = new Ee(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ce[e] = new Ee(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var yu = /[\-:]([a-z])/g;
function wu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(yu, wu);
    ce[t] = new Ee(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(yu, wu);
    ce[t] = new Ee(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(yu, wu);
  ce[t] = new Ee(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ce[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new Ee(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ce[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function xu(e, t, n, r) {
  var l = ce.hasOwnProperty(t) ? ce[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Bp(t, n, l, r) && (n = null),
    r || l === null
      ? Ap(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var wt = Fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  el = Symbol.for("react.element"),
  En = Symbol.for("react.portal"),
  Sn = Symbol.for("react.fragment"),
  Eu = Symbol.for("react.strict_mode"),
  hi = Symbol.for("react.profiler"),
  wc = Symbol.for("react.provider"),
  xc = Symbol.for("react.context"),
  Su = Symbol.for("react.forward_ref"),
  mi = Symbol.for("react.suspense"),
  vi = Symbol.for("react.suspense_list"),
  ku = Symbol.for("react.memo"),
  Nt = Symbol.for("react.lazy"),
  Ec = Symbol.for("react.offscreen"),
  Os = Symbol.iterator;
function tr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Os && e[Os]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Z = Object.assign,
  Mo;
function cr(e) {
  if (Mo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Mo = (t && t[1]) || "";
    }
  return (
    `
` +
    Mo +
    e
  );
}
var Do = !1;
function zo(e, t) {
  if (!e || Do) return "";
  Do = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Do = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? cr(e) : "";
}
function Hp(e) {
  switch (e.tag) {
    case 5:
      return cr(e.type);
    case 16:
      return cr("Lazy");
    case 13:
      return cr("Suspense");
    case 19:
      return cr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = zo(e.type, !1)), e;
    case 11:
      return (e = zo(e.type.render, !1)), e;
    case 1:
      return (e = zo(e.type, !0)), e;
    default:
      return "";
  }
}
function gi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Sn:
      return "Fragment";
    case En:
      return "Portal";
    case hi:
      return "Profiler";
    case Eu:
      return "StrictMode";
    case mi:
      return "Suspense";
    case vi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case xc:
        return (e.displayName || "Context") + ".Consumer";
      case wc:
        return (e._context.displayName || "Context") + ".Provider";
      case Su:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ku:
        return (
          (t = e.displayName || null), t !== null ? t : gi(e.type) || "Memo"
        );
      case Nt:
        (t = e._payload), (e = e._init);
        try {
          return gi(e(t));
        } catch {}
    }
  return null;
}
function Wp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return gi(t);
    case 8:
      return t === Eu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Bt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Sc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Vp(e) {
  var t = Sc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function tl(e) {
  e._valueTracker || (e._valueTracker = Vp(e));
}
function kc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Sc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Dl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function yi(e, t) {
  var n = t.checked;
  return Z({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ms(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Bt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Cc(e, t) {
  (t = t.checked), t != null && xu(e, "checked", t, !1);
}
function wi(e, t) {
  Cc(e, t);
  var n = Bt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? xi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && xi(e, t.type, Bt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ds(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function xi(e, t, n) {
  (t !== "number" || Dl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var fr = Array.isArray;
function Dn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Bt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ei(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return Z({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function zs(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (fr(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Bt(n) };
}
function Nc(e, t) {
  var n = Bt(t.value),
    r = Bt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Is(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Rc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Si(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Rc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var nl,
  Pc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        nl = nl || document.createElement("div"),
          nl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = nl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Nr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var mr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Kp = ["Webkit", "ms", "Moz", "O"];
Object.keys(mr).forEach(function (e) {
  Kp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (mr[t] = mr[e]);
  });
});
function Tc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (mr.hasOwnProperty(e) && mr[e])
    ? ("" + t).trim()
    : t + "px";
}
function _c(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Tc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Qp = Z(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ki(e, t) {
  if (t) {
    if (Qp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function Ci(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ni = null;
function Cu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ri = null,
  zn = null,
  In = null;
function Fs(e) {
  if ((e = Qr(e))) {
    if (typeof Ri != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = go(t)), Ri(e.stateNode, e.type, t));
  }
}
function jc(e) {
  zn ? (In ? In.push(e) : (In = [e])) : (zn = e);
}
function Lc() {
  if (zn) {
    var e = zn,
      t = In;
    if (((In = zn = null), Fs(e), t)) for (e = 0; e < t.length; e++) Fs(t[e]);
  }
}
function Oc(e, t) {
  return e(t);
}
function Mc() {}
var Io = !1;
function Dc(e, t, n) {
  if (Io) return e(t, n);
  Io = !0;
  try {
    return Oc(e, t, n);
  } finally {
    (Io = !1), (zn !== null || In !== null) && (Mc(), Lc());
  }
}
function Rr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = go(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var Pi = !1;
if (mt)
  try {
    var nr = {};
    Object.defineProperty(nr, "passive", {
      get: function () {
        Pi = !0;
      },
    }),
      window.addEventListener("test", nr, nr),
      window.removeEventListener("test", nr, nr);
  } catch {
    Pi = !1;
  }
function Xp(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (p) {
    this.onError(p);
  }
}
var vr = !1,
  zl = null,
  Il = !1,
  Ti = null,
  Yp = {
    onError: function (e) {
      (vr = !0), (zl = e);
    },
  };
function Gp(e, t, n, r, l, o, i, u, s) {
  (vr = !1), (zl = null), Xp.apply(Yp, arguments);
}
function Jp(e, t, n, r, l, o, i, u, s) {
  if ((Gp.apply(this, arguments), vr)) {
    if (vr) {
      var a = zl;
      (vr = !1), (zl = null);
    } else throw Error(k(198));
    Il || ((Il = !0), (Ti = a));
  }
}
function pn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function zc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function $s(e) {
  if (pn(e) !== e) throw Error(k(188));
}
function Zp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = pn(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return $s(l), e;
        if (o === r) return $s(l), t;
        o = o.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function Ic(e) {
  return (e = Zp(e)), e !== null ? Fc(e) : null;
}
function Fc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Fc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var $c = De.unstable_scheduleCallback,
  As = De.unstable_cancelCallback,
  qp = De.unstable_shouldYield,
  bp = De.unstable_requestPaint,
  ee = De.unstable_now,
  eh = De.unstable_getCurrentPriorityLevel,
  Nu = De.unstable_ImmediatePriority,
  Ac = De.unstable_UserBlockingPriority,
  Fl = De.unstable_NormalPriority,
  th = De.unstable_LowPriority,
  Uc = De.unstable_IdlePriority,
  po = null,
  nt = null;
function nh(e) {
  if (nt && typeof nt.onCommitFiberRoot == "function")
    try {
      nt.onCommitFiberRoot(po, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ge = Math.clz32 ? Math.clz32 : oh,
  rh = Math.log,
  lh = Math.LN2;
function oh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((rh(e) / lh) | 0)) | 0;
}
var rl = 64,
  ll = 4194304;
function dr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function $l(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = dr(u)) : ((o &= i), o !== 0 && (r = dr(o)));
  } else (i = n & ~l), i !== 0 ? (r = dr(i)) : o !== 0 && (r = dr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ge(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function ih(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function uh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Ge(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = ih(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function _i(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Bc() {
  var e = rl;
  return (rl <<= 1), !(rl & 4194240) && (rl = 64), e;
}
function Fo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Vr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ge(t)),
    (e[t] = n);
}
function sh(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ge(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Ru(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ge(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var A = 0;
function Hc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Wc,
  Pu,
  Vc,
  Kc,
  Qc,
  ji = !1,
  ol = [],
  Mt = null,
  Dt = null,
  zt = null,
  Pr = new Map(),
  Tr = new Map(),
  Pt = [],
  ah =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Us(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Mt = null;
      break;
    case "dragenter":
    case "dragleave":
      Dt = null;
      break;
    case "mouseover":
    case "mouseout":
      zt = null;
      break;
    case "pointerover":
    case "pointerout":
      Pr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Tr.delete(t.pointerId);
  }
}
function rr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = Qr(t)), t !== null && Pu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function ch(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Mt = rr(Mt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Dt = rr(Dt, e, t, n, r, l)), !0;
    case "mouseover":
      return (zt = rr(zt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Pr.set(o, rr(Pr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Tr.set(o, rr(Tr.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Xc(e) {
  var t = en(e.target);
  if (t !== null) {
    var n = pn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = zc(n)), t !== null)) {
          (e.blockedOn = t),
            Qc(e.priority, function () {
              Vc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function El(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Li(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ni = r), n.target.dispatchEvent(r), (Ni = null);
    } else return (t = Qr(n)), t !== null && Pu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Bs(e, t, n) {
  El(e) && n.delete(t);
}
function fh() {
  (ji = !1),
    Mt !== null && El(Mt) && (Mt = null),
    Dt !== null && El(Dt) && (Dt = null),
    zt !== null && El(zt) && (zt = null),
    Pr.forEach(Bs),
    Tr.forEach(Bs);
}
function lr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ji ||
      ((ji = !0),
      De.unstable_scheduleCallback(De.unstable_NormalPriority, fh)));
}
function _r(e) {
  function t(l) {
    return lr(l, e);
  }
  if (0 < ol.length) {
    lr(ol[0], e);
    for (var n = 1; n < ol.length; n++) {
      var r = ol[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Mt !== null && lr(Mt, e),
      Dt !== null && lr(Dt, e),
      zt !== null && lr(zt, e),
      Pr.forEach(t),
      Tr.forEach(t),
      n = 0;
    n < Pt.length;
    n++
  )
    (r = Pt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Pt.length && ((n = Pt[0]), n.blockedOn === null); )
    Xc(n), n.blockedOn === null && Pt.shift();
}
var Fn = wt.ReactCurrentBatchConfig,
  Al = !0;
function dh(e, t, n, r) {
  var l = A,
    o = Fn.transition;
  Fn.transition = null;
  try {
    (A = 1), Tu(e, t, n, r);
  } finally {
    (A = l), (Fn.transition = o);
  }
}
function ph(e, t, n, r) {
  var l = A,
    o = Fn.transition;
  Fn.transition = null;
  try {
    (A = 4), Tu(e, t, n, r);
  } finally {
    (A = l), (Fn.transition = o);
  }
}
function Tu(e, t, n, r) {
  if (Al) {
    var l = Li(e, t, n, r);
    if (l === null) Xo(e, t, r, Ul, n), Us(e, r);
    else if (ch(l, e, t, n, r)) r.stopPropagation();
    else if ((Us(e, r), t & 4 && -1 < ah.indexOf(e))) {
      for (; l !== null; ) {
        var o = Qr(l);
        if (
          (o !== null && Wc(o),
          (o = Li(e, t, n, r)),
          o === null && Xo(e, t, r, Ul, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Xo(e, t, r, null, n);
  }
}
var Ul = null;
function Li(e, t, n, r) {
  if (((Ul = null), (e = Cu(r)), (e = en(e)), e !== null))
    if (((t = pn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = zc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ul = e), null;
}
function Yc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (eh()) {
        case Nu:
          return 1;
        case Ac:
          return 4;
        case Fl:
        case th:
          return 16;
        case Uc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Lt = null,
  _u = null,
  Sl = null;
function Gc() {
  if (Sl) return Sl;
  var e,
    t = _u,
    n = t.length,
    r,
    l = "value" in Lt ? Lt.value : Lt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Sl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function kl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function il() {
  return !0;
}
function Hs() {
  return !1;
}
function Ie(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? il
        : Hs),
      (this.isPropagationStopped = Hs),
      this
    );
  }
  return (
    Z(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = il));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = il));
      },
      persist: function () {},
      isPersistent: il,
    }),
    t
  );
}
var Yn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ju = Ie(Yn),
  Kr = Z({}, Yn, { view: 0, detail: 0 }),
  hh = Ie(Kr),
  $o,
  Ao,
  or,
  ho = Z({}, Kr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Lu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== or &&
            (or && e.type === "mousemove"
              ? (($o = e.screenX - or.screenX), (Ao = e.screenY - or.screenY))
              : (Ao = $o = 0),
            (or = e)),
          $o);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ao;
    },
  }),
  Ws = Ie(ho),
  mh = Z({}, ho, { dataTransfer: 0 }),
  vh = Ie(mh),
  gh = Z({}, Kr, { relatedTarget: 0 }),
  Uo = Ie(gh),
  yh = Z({}, Yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  wh = Ie(yh),
  xh = Z({}, Yn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Eh = Ie(xh),
  Sh = Z({}, Yn, { data: 0 }),
  Vs = Ie(Sh),
  kh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Ch = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Nh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Rh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Nh[e]) ? !!t[e] : !1;
}
function Lu() {
  return Rh;
}
var Ph = Z({}, Kr, {
    key: function (e) {
      if (e.key) {
        var t = kh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = kl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Ch[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Lu,
    charCode: function (e) {
      return e.type === "keypress" ? kl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? kl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Th = Ie(Ph),
  _h = Z({}, ho, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ks = Ie(_h),
  jh = Z({}, Kr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Lu,
  }),
  Lh = Ie(jh),
  Oh = Z({}, Yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Mh = Ie(Oh),
  Dh = Z({}, ho, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  zh = Ie(Dh),
  Ih = [9, 13, 27, 32],
  Ou = mt && "CompositionEvent" in window,
  gr = null;
mt && "documentMode" in document && (gr = document.documentMode);
var Fh = mt && "TextEvent" in window && !gr,
  Jc = mt && (!Ou || (gr && 8 < gr && 11 >= gr)),
  Qs = " ",
  Xs = !1;
function Zc(e, t) {
  switch (e) {
    case "keyup":
      return Ih.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function qc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var kn = !1;
function $h(e, t) {
  switch (e) {
    case "compositionend":
      return qc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Xs = !0), Qs);
    case "textInput":
      return (e = t.data), e === Qs && Xs ? null : e;
    default:
      return null;
  }
}
function Ah(e, t) {
  if (kn)
    return e === "compositionend" || (!Ou && Zc(e, t))
      ? ((e = Gc()), (Sl = _u = Lt = null), (kn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Jc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Uh = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ys(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Uh[e.type] : t === "textarea";
}
function bc(e, t, n, r) {
  jc(r),
    (t = Bl(t, "onChange")),
    0 < t.length &&
      ((n = new ju("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var yr = null,
  jr = null;
function Bh(e) {
  ff(e, 0);
}
function mo(e) {
  var t = Rn(e);
  if (kc(t)) return e;
}
function Hh(e, t) {
  if (e === "change") return t;
}
var ef = !1;
if (mt) {
  var Bo;
  if (mt) {
    var Ho = "oninput" in document;
    if (!Ho) {
      var Gs = document.createElement("div");
      Gs.setAttribute("oninput", "return;"),
        (Ho = typeof Gs.oninput == "function");
    }
    Bo = Ho;
  } else Bo = !1;
  ef = Bo && (!document.documentMode || 9 < document.documentMode);
}
function Js() {
  yr && (yr.detachEvent("onpropertychange", tf), (jr = yr = null));
}
function tf(e) {
  if (e.propertyName === "value" && mo(jr)) {
    var t = [];
    bc(t, jr, e, Cu(e)), Dc(Bh, t);
  }
}
function Wh(e, t, n) {
  e === "focusin"
    ? (Js(), (yr = t), (jr = n), yr.attachEvent("onpropertychange", tf))
    : e === "focusout" && Js();
}
function Vh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return mo(jr);
}
function Kh(e, t) {
  if (e === "click") return mo(t);
}
function Qh(e, t) {
  if (e === "input" || e === "change") return mo(t);
}
function Xh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ze = typeof Object.is == "function" ? Object.is : Xh;
function Lr(e, t) {
  if (Ze(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!pi.call(t, l) || !Ze(e[l], t[l])) return !1;
  }
  return !0;
}
function Zs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function qs(e, t) {
  var n = Zs(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Zs(n);
  }
}
function nf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? nf(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function rf() {
  for (var e = window, t = Dl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Dl(e.document);
  }
  return t;
}
function Mu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Yh(e) {
  var t = rf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    nf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Mu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = qs(n, o));
        var i = qs(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Gh = mt && "documentMode" in document && 11 >= document.documentMode,
  Cn = null,
  Oi = null,
  wr = null,
  Mi = !1;
function bs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Mi ||
    Cn == null ||
    Cn !== Dl(r) ||
    ((r = Cn),
    "selectionStart" in r && Mu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (wr && Lr(wr, r)) ||
      ((wr = r),
      (r = Bl(Oi, "onSelect")),
      0 < r.length &&
        ((t = new ju("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Cn))));
}
function ul(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Nn = {
    animationend: ul("Animation", "AnimationEnd"),
    animationiteration: ul("Animation", "AnimationIteration"),
    animationstart: ul("Animation", "AnimationStart"),
    transitionend: ul("Transition", "TransitionEnd"),
  },
  Wo = {},
  lf = {};
mt &&
  ((lf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Nn.animationend.animation,
    delete Nn.animationiteration.animation,
    delete Nn.animationstart.animation),
  "TransitionEvent" in window || delete Nn.transitionend.transition);
function vo(e) {
  if (Wo[e]) return Wo[e];
  if (!Nn[e]) return e;
  var t = Nn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in lf) return (Wo[e] = t[n]);
  return e;
}
var of = vo("animationend"),
  uf = vo("animationiteration"),
  sf = vo("animationstart"),
  af = vo("transitionend"),
  cf = new Map(),
  ea =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Vt(e, t) {
  cf.set(e, t), dn(t, [e]);
}
for (var Vo = 0; Vo < ea.length; Vo++) {
  var Ko = ea[Vo],
    Jh = Ko.toLowerCase(),
    Zh = Ko[0].toUpperCase() + Ko.slice(1);
  Vt(Jh, "on" + Zh);
}
Vt(of, "onAnimationEnd");
Vt(uf, "onAnimationIteration");
Vt(sf, "onAnimationStart");
Vt("dblclick", "onDoubleClick");
Vt("focusin", "onFocus");
Vt("focusout", "onBlur");
Vt(af, "onTransitionEnd");
Un("onMouseEnter", ["mouseout", "mouseover"]);
Un("onMouseLeave", ["mouseout", "mouseover"]);
Un("onPointerEnter", ["pointerout", "pointerover"]);
Un("onPointerLeave", ["pointerout", "pointerover"]);
dn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
dn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
dn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
dn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
dn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
dn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var pr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  qh = new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));
function ta(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Jp(r, t, void 0, e), (e.currentTarget = null);
}
function ff(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          ta(l, u, a), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          ta(l, u, a), (o = s);
        }
    }
  }
  if (Il) throw ((e = Ti), (Il = !1), (Ti = null), e);
}
function K(e, t) {
  var n = t[$i];
  n === void 0 && (n = t[$i] = new Set());
  var r = e + "__bubble";
  n.has(r) || (df(t, e, 2, !1), n.add(r));
}
function Qo(e, t, n) {
  var r = 0;
  t && (r |= 4), df(n, e, r, t);
}
var sl = "_reactListening" + Math.random().toString(36).slice(2);
function Or(e) {
  if (!e[sl]) {
    (e[sl] = !0),
      yc.forEach(function (n) {
        n !== "selectionchange" && (qh.has(n) || Qo(n, !1, e), Qo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[sl] || ((t[sl] = !0), Qo("selectionchange", !1, t));
  }
}
function df(e, t, n, r) {
  switch (Yc(t)) {
    case 1:
      var l = dh;
      break;
    case 4:
      l = ph;
      break;
    default:
      l = Tu;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Pi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Xo(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = en(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Dc(function () {
    var a = o,
      p = Cu(n),
      m = [];
    e: {
      var h = cf.get(e);
      if (h !== void 0) {
        var y = ju,
          w = e;
        switch (e) {
          case "keypress":
            if (kl(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Th;
            break;
          case "focusin":
            (w = "focus"), (y = Uo);
            break;
          case "focusout":
            (w = "blur"), (y = Uo);
            break;
          case "beforeblur":
          case "afterblur":
            y = Uo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Ws;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = vh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Lh;
            break;
          case of:
          case uf:
          case sf:
            y = wh;
            break;
          case af:
            y = Mh;
            break;
          case "scroll":
            y = hh;
            break;
          case "wheel":
            y = zh;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Eh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Ks;
        }
        var E = (t & 4) !== 0,
          S = !E && e === "scroll",
          d = E ? (h !== null ? h + "Capture" : null) : h;
        E = [];
        for (var f = a, v; f !== null; ) {
          v = f;
          var x = v.stateNode;
          if (
            (v.tag === 5 &&
              x !== null &&
              ((v = x),
              d !== null && ((x = Rr(f, d)), x != null && E.push(Mr(f, x, v)))),
            S)
          )
            break;
          f = f.return;
        }
        0 < E.length &&
          ((h = new y(h, w, null, n, p)), m.push({ event: h, listeners: E }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Ni &&
            (w = n.relatedTarget || n.fromElement) &&
            (en(w) || w[vt]))
        )
          break e;
        if (
          (y || h) &&
          ((h =
            p.window === p
              ? p
              : (h = p.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          y
            ? ((w = n.relatedTarget || n.toElement),
              (y = a),
              (w = w ? en(w) : null),
              w !== null &&
                ((S = pn(w)), w !== S || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((y = null), (w = a)),
          y !== w)
        ) {
          if (
            ((E = Ws),
            (x = "onMouseLeave"),
            (d = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((E = Ks),
              (x = "onPointerLeave"),
              (d = "onPointerEnter"),
              (f = "pointer")),
            (S = y == null ? h : Rn(y)),
            (v = w == null ? h : Rn(w)),
            (h = new E(x, f + "leave", y, n, p)),
            (h.target = S),
            (h.relatedTarget = v),
            (x = null),
            en(p) === a &&
              ((E = new E(d, f + "enter", w, n, p)),
              (E.target = v),
              (E.relatedTarget = S),
              (x = E)),
            (S = x),
            y && w)
          )
            t: {
              for (E = y, d = w, f = 0, v = E; v; v = gn(v)) f++;
              for (v = 0, x = d; x; x = gn(x)) v++;
              for (; 0 < f - v; ) (E = gn(E)), f--;
              for (; 0 < v - f; ) (d = gn(d)), v--;
              for (; f--; ) {
                if (E === d || (d !== null && E === d.alternate)) break t;
                (E = gn(E)), (d = gn(d));
              }
              E = null;
            }
          else E = null;
          y !== null && na(m, h, y, E, !1),
            w !== null && S !== null && na(m, S, w, E, !0);
        }
      }
      e: {
        if (
          ((h = a ? Rn(a) : window),
          (y = h.nodeName && h.nodeName.toLowerCase()),
          y === "select" || (y === "input" && h.type === "file"))
        )
          var C = Hh;
        else if (Ys(h))
          if (ef) C = Qh;
          else {
            C = Vh;
            var R = Wh;
          }
        else
          (y = h.nodeName) &&
            y.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (C = Kh);
        if (C && (C = C(e, a))) {
          bc(m, C, n, p);
          break e;
        }
        R && R(e, h, a),
          e === "focusout" &&
            (R = h._wrapperState) &&
            R.controlled &&
            h.type === "number" &&
            xi(h, "number", h.value);
      }
      switch (((R = a ? Rn(a) : window), e)) {
        case "focusin":
          (Ys(R) || R.contentEditable === "true") &&
            ((Cn = R), (Oi = a), (wr = null));
          break;
        case "focusout":
          wr = Oi = Cn = null;
          break;
        case "mousedown":
          Mi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Mi = !1), bs(m, n, p);
          break;
        case "selectionchange":
          if (Gh) break;
        case "keydown":
        case "keyup":
          bs(m, n, p);
      }
      var P;
      if (Ou)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        kn
          ? Zc(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Jc &&
          n.locale !== "ko" &&
          (kn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && kn && (P = Gc())
            : ((Lt = p),
              (_u = "value" in Lt ? Lt.value : Lt.textContent),
              (kn = !0))),
        (R = Bl(a, T)),
        0 < R.length &&
          ((T = new Vs(T, e, null, n, p)),
          m.push({ event: T, listeners: R }),
          P ? (T.data = P) : ((P = qc(n)), P !== null && (T.data = P)))),
        (P = Fh ? $h(e, n) : Ah(e, n)) &&
          ((a = Bl(a, "onBeforeInput")),
          0 < a.length &&
            ((p = new Vs("onBeforeInput", "beforeinput", null, n, p)),
            m.push({ event: p, listeners: a }),
            (p.data = P)));
    }
    ff(m, t);
  });
}
function Mr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Bl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Rr(e, n)),
      o != null && r.unshift(Mr(e, o, l)),
      (o = Rr(e, t)),
      o != null && r.push(Mr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function gn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function na(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = Rr(n, o)), s != null && i.unshift(Mr(n, s, u)))
        : l || ((s = Rr(n, o)), s != null && i.push(Mr(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var bh = /\r\n?/g,
  em = /\u0000|\uFFFD/g;
function ra(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      bh,
      `
`
    )
    .replace(em, "");
}
function al(e, t, n) {
  if (((t = ra(t)), ra(e) !== t && n)) throw Error(k(425));
}
function Hl() {}
var Di = null,
  zi = null;
function Ii(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Fi = typeof setTimeout == "function" ? setTimeout : void 0,
  tm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  la = typeof Promise == "function" ? Promise : void 0,
  nm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof la < "u"
      ? function (e) {
          return la.resolve(null).then(e).catch(rm);
        }
      : Fi;
function rm(e) {
  setTimeout(function () {
    throw e;
  });
}
function Yo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), _r(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  _r(t);
}
function It(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function oa(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Gn = Math.random().toString(36).slice(2),
  tt = "__reactFiber$" + Gn,
  Dr = "__reactProps$" + Gn,
  vt = "__reactContainer$" + Gn,
  $i = "__reactEvents$" + Gn,
  lm = "__reactListeners$" + Gn,
  om = "__reactHandles$" + Gn;
function en(e) {
  var t = e[tt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[vt] || n[tt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = oa(e); e !== null; ) {
          if ((n = e[tt])) return n;
          e = oa(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Qr(e) {
  return (
    (e = e[tt] || e[vt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Rn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function go(e) {
  return e[Dr] || null;
}
var Ai = [],
  Pn = -1;
function Kt(e) {
  return { current: e };
}
function Q(e) {
  0 > Pn || ((e.current = Ai[Pn]), (Ai[Pn] = null), Pn--);
}
function W(e, t) {
  Pn++, (Ai[Pn] = e.current), (e.current = t);
}
var Ht = {},
  me = Kt(Ht),
  Pe = Kt(!1),
  un = Ht;
function Bn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ht;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Te(e) {
  return (e = e.childContextTypes), e != null;
}
function Wl() {
  Q(Pe), Q(me);
}
function ia(e, t, n) {
  if (me.current !== Ht) throw Error(k(168));
  W(me, t), W(Pe, n);
}
function pf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, Wp(e) || "Unknown", l));
  return Z({}, n, r);
}
function Vl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ht),
    (un = me.current),
    W(me, e),
    W(Pe, Pe.current),
    !0
  );
}
function ua(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = pf(e, t, un)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Q(Pe),
      Q(me),
      W(me, e))
    : Q(Pe),
    W(Pe, n);
}
var ct = null,
  yo = !1,
  Go = !1;
function hf(e) {
  ct === null ? (ct = [e]) : ct.push(e);
}
function im(e) {
  (yo = !0), hf(e);
}
function Qt() {
  if (!Go && ct !== null) {
    Go = !0;
    var e = 0,
      t = A;
    try {
      var n = ct;
      for (A = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ct = null), (yo = !1);
    } catch (l) {
      throw (ct !== null && (ct = ct.slice(e + 1)), $c(Nu, Qt), l);
    } finally {
      (A = t), (Go = !1);
    }
  }
  return null;
}
var Tn = [],
  _n = 0,
  Kl = null,
  Ql = 0,
  Ae = [],
  Ue = 0,
  sn = null,
  ft = 1,
  dt = "";
function Zt(e, t) {
  (Tn[_n++] = Ql), (Tn[_n++] = Kl), (Kl = e), (Ql = t);
}
function mf(e, t, n) {
  (Ae[Ue++] = ft), (Ae[Ue++] = dt), (Ae[Ue++] = sn), (sn = e);
  var r = ft;
  e = dt;
  var l = 32 - Ge(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Ge(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (ft = (1 << (32 - Ge(t) + l)) | (n << l) | r),
      (dt = o + e);
  } else (ft = (1 << o) | (n << l) | r), (dt = e);
}
function Du(e) {
  e.return !== null && (Zt(e, 1), mf(e, 1, 0));
}
function zu(e) {
  for (; e === Kl; )
    (Kl = Tn[--_n]), (Tn[_n] = null), (Ql = Tn[--_n]), (Tn[_n] = null);
  for (; e === sn; )
    (sn = Ae[--Ue]),
      (Ae[Ue] = null),
      (dt = Ae[--Ue]),
      (Ae[Ue] = null),
      (ft = Ae[--Ue]),
      (Ae[Ue] = null);
}
var Me = null,
  Oe = null,
  X = !1,
  Ye = null;
function vf(e, t) {
  var n = Be(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function sa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Me = e), (Oe = It(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Me = e), (Oe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = sn !== null ? { id: ft, overflow: dt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Be(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Me = e),
            (Oe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ui(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Bi(e) {
  if (X) {
    var t = Oe;
    if (t) {
      var n = t;
      if (!sa(e, t)) {
        if (Ui(e)) throw Error(k(418));
        t = It(n.nextSibling);
        var r = Me;
        t && sa(e, t)
          ? vf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (X = !1), (Me = e));
      }
    } else {
      if (Ui(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (X = !1), (Me = e);
    }
  }
}
function aa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Me = e;
}
function cl(e) {
  if (e !== Me) return !1;
  if (!X) return aa(e), (X = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ii(e.type, e.memoizedProps))),
    t && (t = Oe))
  ) {
    if (Ui(e)) throw (gf(), Error(k(418)));
    for (; t; ) vf(e, t), (t = It(t.nextSibling));
  }
  if ((aa(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Oe = It(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Oe = null;
    }
  } else Oe = Me ? It(e.stateNode.nextSibling) : null;
  return !0;
}
function gf() {
  for (var e = Oe; e; ) e = It(e.nextSibling);
}
function Hn() {
  (Oe = Me = null), (X = !1);
}
function Iu(e) {
  Ye === null ? (Ye = [e]) : Ye.push(e);
}
var um = wt.ReactCurrentBatchConfig;
function ir(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function fl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ca(e) {
  var t = e._init;
  return t(e._payload);
}
function yf(e) {
  function t(d, f) {
    if (e) {
      var v = d.deletions;
      v === null ? ((d.deletions = [f]), (d.flags |= 16)) : v.push(f);
    }
  }
  function n(d, f) {
    if (!e) return null;
    for (; f !== null; ) t(d, f), (f = f.sibling);
    return null;
  }
  function r(d, f) {
    for (d = new Map(); f !== null; )
      f.key !== null ? d.set(f.key, f) : d.set(f.index, f), (f = f.sibling);
    return d;
  }
  function l(d, f) {
    return (d = Ut(d, f)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, f, v) {
    return (
      (d.index = v),
      e
        ? ((v = d.alternate),
          v !== null
            ? ((v = v.index), v < f ? ((d.flags |= 2), f) : v)
            : ((d.flags |= 2), f))
        : ((d.flags |= 1048576), f)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, f, v, x) {
    return f === null || f.tag !== 6
      ? ((f = ni(v, d.mode, x)), (f.return = d), f)
      : ((f = l(f, v)), (f.return = d), f);
  }
  function s(d, f, v, x) {
    var C = v.type;
    return C === Sn
      ? p(d, f, v.props.children, x, v.key)
      : f !== null &&
        (f.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Nt &&
            ca(C) === f.type))
      ? ((x = l(f, v.props)), (x.ref = ir(d, f, v)), (x.return = d), x)
      : ((x = jl(v.type, v.key, v.props, null, d.mode, x)),
        (x.ref = ir(d, f, v)),
        (x.return = d),
        x);
  }
  function a(d, f, v, x) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== v.containerInfo ||
      f.stateNode.implementation !== v.implementation
      ? ((f = ri(v, d.mode, x)), (f.return = d), f)
      : ((f = l(f, v.children || [])), (f.return = d), f);
  }
  function p(d, f, v, x, C) {
    return f === null || f.tag !== 7
      ? ((f = ln(v, d.mode, x, C)), (f.return = d), f)
      : ((f = l(f, v)), (f.return = d), f);
  }
  function m(d, f, v) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = ni("" + f, d.mode, v)), (f.return = d), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case el:
          return (
            (v = jl(f.type, f.key, f.props, null, d.mode, v)),
            (v.ref = ir(d, null, f)),
            (v.return = d),
            v
          );
        case En:
          return (f = ri(f, d.mode, v)), (f.return = d), f;
        case Nt:
          var x = f._init;
          return m(d, x(f._payload), v);
      }
      if (fr(f) || tr(f))
        return (f = ln(f, d.mode, v, null)), (f.return = d), f;
      fl(d, f);
    }
    return null;
  }
  function h(d, f, v, x) {
    var C = f !== null ? f.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return C !== null ? null : u(d, f, "" + v, x);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case el:
          return v.key === C ? s(d, f, v, x) : null;
        case En:
          return v.key === C ? a(d, f, v, x) : null;
        case Nt:
          return (C = v._init), h(d, f, C(v._payload), x);
      }
      if (fr(v) || tr(v)) return C !== null ? null : p(d, f, v, x, null);
      fl(d, v);
    }
    return null;
  }
  function y(d, f, v, x, C) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (d = d.get(v) || null), u(f, d, "" + x, C);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case el:
          return (d = d.get(x.key === null ? v : x.key) || null), s(f, d, x, C);
        case En:
          return (d = d.get(x.key === null ? v : x.key) || null), a(f, d, x, C);
        case Nt:
          var R = x._init;
          return y(d, f, v, R(x._payload), C);
      }
      if (fr(x) || tr(x)) return (d = d.get(v) || null), p(f, d, x, C, null);
      fl(f, x);
    }
    return null;
  }
  function w(d, f, v, x) {
    for (
      var C = null, R = null, P = f, T = (f = 0), D = null;
      P !== null && T < v.length;
      T++
    ) {
      P.index > T ? ((D = P), (P = null)) : (D = P.sibling);
      var L = h(d, P, v[T], x);
      if (L === null) {
        P === null && (P = D);
        break;
      }
      e && P && L.alternate === null && t(d, P),
        (f = o(L, f, T)),
        R === null ? (C = L) : (R.sibling = L),
        (R = L),
        (P = D);
    }
    if (T === v.length) return n(d, P), X && Zt(d, T), C;
    if (P === null) {
      for (; T < v.length; T++)
        (P = m(d, v[T], x)),
          P !== null &&
            ((f = o(P, f, T)), R === null ? (C = P) : (R.sibling = P), (R = P));
      return X && Zt(d, T), C;
    }
    for (P = r(d, P); T < v.length; T++)
      (D = y(P, d, T, v[T], x)),
        D !== null &&
          (e && D.alternate !== null && P.delete(D.key === null ? T : D.key),
          (f = o(D, f, T)),
          R === null ? (C = D) : (R.sibling = D),
          (R = D));
    return (
      e &&
        P.forEach(function (te) {
          return t(d, te);
        }),
      X && Zt(d, T),
      C
    );
  }
  function E(d, f, v, x) {
    var C = tr(v);
    if (typeof C != "function") throw Error(k(150));
    if (((v = C.call(v)), v == null)) throw Error(k(151));
    for (
      var R = (C = null), P = f, T = (f = 0), D = null, L = v.next();
      P !== null && !L.done;
      T++, L = v.next()
    ) {
      P.index > T ? ((D = P), (P = null)) : (D = P.sibling);
      var te = h(d, P, L.value, x);
      if (te === null) {
        P === null && (P = D);
        break;
      }
      e && P && te.alternate === null && t(d, P),
        (f = o(te, f, T)),
        R === null ? (C = te) : (R.sibling = te),
        (R = te),
        (P = D);
    }
    if (L.done) return n(d, P), X && Zt(d, T), C;
    if (P === null) {
      for (; !L.done; T++, L = v.next())
        (L = m(d, L.value, x)),
          L !== null &&
            ((f = o(L, f, T)), R === null ? (C = L) : (R.sibling = L), (R = L));
      return X && Zt(d, T), C;
    }
    for (P = r(d, P); !L.done; T++, L = v.next())
      (L = y(P, d, T, L.value, x)),
        L !== null &&
          (e && L.alternate !== null && P.delete(L.key === null ? T : L.key),
          (f = o(L, f, T)),
          R === null ? (C = L) : (R.sibling = L),
          (R = L));
    return (
      e &&
        P.forEach(function (Fe) {
          return t(d, Fe);
        }),
      X && Zt(d, T),
      C
    );
  }
  function S(d, f, v, x) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Sn &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case el:
          e: {
            for (var C = v.key, R = f; R !== null; ) {
              if (R.key === C) {
                if (((C = v.type), C === Sn)) {
                  if (R.tag === 7) {
                    n(d, R.sibling),
                      (f = l(R, v.props.children)),
                      (f.return = d),
                      (d = f);
                    break e;
                  }
                } else if (
                  R.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Nt &&
                    ca(C) === R.type)
                ) {
                  n(d, R.sibling),
                    (f = l(R, v.props)),
                    (f.ref = ir(d, R, v)),
                    (f.return = d),
                    (d = f);
                  break e;
                }
                n(d, R);
                break;
              } else t(d, R);
              R = R.sibling;
            }
            v.type === Sn
              ? ((f = ln(v.props.children, d.mode, x, v.key)),
                (f.return = d),
                (d = f))
              : ((x = jl(v.type, v.key, v.props, null, d.mode, x)),
                (x.ref = ir(d, f, v)),
                (x.return = d),
                (d = x));
          }
          return i(d);
        case En:
          e: {
            for (R = v.key; f !== null; ) {
              if (f.key === R)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === v.containerInfo &&
                  f.stateNode.implementation === v.implementation
                ) {
                  n(d, f.sibling),
                    (f = l(f, v.children || [])),
                    (f.return = d),
                    (d = f);
                  break e;
                } else {
                  n(d, f);
                  break;
                }
              else t(d, f);
              f = f.sibling;
            }
            (f = ri(v, d.mode, x)), (f.return = d), (d = f);
          }
          return i(d);
        case Nt:
          return (R = v._init), S(d, f, R(v._payload), x);
      }
      if (fr(v)) return w(d, f, v, x);
      if (tr(v)) return E(d, f, v, x);
      fl(d, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        f !== null && f.tag === 6
          ? (n(d, f.sibling), (f = l(f, v)), (f.return = d), (d = f))
          : (n(d, f), (f = ni(v, d.mode, x)), (f.return = d), (d = f)),
        i(d))
      : n(d, f);
  }
  return S;
}
var Wn = yf(!0),
  wf = yf(!1),
  Xl = Kt(null),
  Yl = null,
  jn = null,
  Fu = null;
function $u() {
  Fu = jn = Yl = null;
}
function Au(e) {
  var t = Xl.current;
  Q(Xl), (e._currentValue = t);
}
function Hi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function $n(e, t) {
  (Yl = e),
    (Fu = jn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ne = !0), (e.firstContext = null));
}
function We(e) {
  var t = e._currentValue;
  if (Fu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), jn === null)) {
      if (Yl === null) throw Error(k(308));
      (jn = e), (Yl.dependencies = { lanes: 0, firstContext: e });
    } else jn = jn.next = e;
  return t;
}
var tn = null;
function Uu(e) {
  tn === null ? (tn = [e]) : tn.push(e);
}
function xf(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Uu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    gt(e, r)
  );
}
function gt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Rt = !1;
function Bu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ef(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function pt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ft(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      gt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Uu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    gt(e, n)
  );
}
function Cl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ru(e, n);
  }
}
function fa(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Gl(e, t, n, r) {
  var l = e.updateQueue;
  Rt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), i === null ? (o = a) : (i.next = a), (i = s);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (u = p.lastBaseUpdate),
      u !== i &&
        (u === null ? (p.firstBaseUpdate = a) : (u.next = a),
        (p.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var m = l.baseState;
    (i = 0), (p = a = s = null), (u = o);
    do {
      var h = u.lane,
        y = u.eventTime;
      if ((r & h) === h) {
        p !== null &&
          (p = p.next =
            {
              eventTime: y,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            E = u;
          switch (((h = t), (y = n), E.tag)) {
            case 1:
              if (((w = E.payload), typeof w == "function")) {
                m = w.call(y, m, h);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = E.payload),
                (h = typeof w == "function" ? w.call(y, m, h) : w),
                h == null)
              )
                break e;
              m = Z({}, m, h);
              break e;
            case 2:
              Rt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [u]) : h.push(u));
      } else
        (y = {
          eventTime: y,
          lane: h,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          p === null ? ((a = p = y), (s = m)) : (p = p.next = y),
          (i |= h);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (h = u),
          (u = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (p === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = p),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (cn |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function da(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(k(191, l));
        l.call(r);
      }
    }
}
var Xr = {},
  rt = Kt(Xr),
  zr = Kt(Xr),
  Ir = Kt(Xr);
function nn(e) {
  if (e === Xr) throw Error(k(174));
  return e;
}
function Hu(e, t) {
  switch ((W(Ir, t), W(zr, e), W(rt, Xr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Si(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Si(t, e));
  }
  Q(rt), W(rt, t);
}
function Vn() {
  Q(rt), Q(zr), Q(Ir);
}
function Sf(e) {
  nn(Ir.current);
  var t = nn(rt.current),
    n = Si(t, e.type);
  t !== n && (W(zr, e), W(rt, n));
}
function Wu(e) {
  zr.current === e && (Q(rt), Q(zr));
}
var Y = Kt(0);
function Jl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Jo = [];
function Vu() {
  for (var e = 0; e < Jo.length; e++)
    Jo[e]._workInProgressVersionPrimary = null;
  Jo.length = 0;
}
var Nl = wt.ReactCurrentDispatcher,
  Zo = wt.ReactCurrentBatchConfig,
  an = 0,
  G = null,
  re = null,
  oe = null,
  Zl = !1,
  xr = !1,
  Fr = 0,
  sm = 0;
function de() {
  throw Error(k(321));
}
function Ku(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ze(e[n], t[n])) return !1;
  return !0;
}
function Qu(e, t, n, r, l, o) {
  if (
    ((an = o),
    (G = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Nl.current = e === null || e.memoizedState === null ? dm : pm),
    (e = n(r, l)),
    xr)
  ) {
    o = 0;
    do {
      if (((xr = !1), (Fr = 0), 25 <= o)) throw Error(k(301));
      (o += 1),
        (oe = re = null),
        (t.updateQueue = null),
        (Nl.current = hm),
        (e = n(r, l));
    } while (xr);
  }
  if (
    ((Nl.current = ql),
    (t = re !== null && re.next !== null),
    (an = 0),
    (oe = re = G = null),
    (Zl = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function Xu() {
  var e = Fr !== 0;
  return (Fr = 0), e;
}
function be() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return oe === null ? (G.memoizedState = oe = e) : (oe = oe.next = e), oe;
}
function Ve() {
  if (re === null) {
    var e = G.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = re.next;
  var t = oe === null ? G.memoizedState : oe.next;
  if (t !== null) (oe = t), (re = e);
  else {
    if (e === null) throw Error(k(310));
    (re = e),
      (e = {
        memoizedState: re.memoizedState,
        baseState: re.baseState,
        baseQueue: re.baseQueue,
        queue: re.queue,
        next: null,
      }),
      oe === null ? (G.memoizedState = oe = e) : (oe = oe.next = e);
  }
  return oe;
}
function $r(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function qo(e) {
  var t = Ve(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = re,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      a = o;
    do {
      var p = a.lane;
      if ((an & p) === p)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var m = {
          lane: p,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = m), (i = r)) : (s = s.next = m),
          (G.lanes |= p),
          (cn |= p);
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? (i = r) : (s.next = u),
      Ze(r, t.memoizedState) || (Ne = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (G.lanes |= o), (cn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function bo(e) {
  var t = Ve(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Ze(o, t.memoizedState) || (Ne = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function kf() {}
function Cf(e, t) {
  var n = G,
    r = Ve(),
    l = t(),
    o = !Ze(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Ne = !0)),
    (r = r.queue),
    Yu(Pf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (oe !== null && oe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ar(9, Rf.bind(null, n, r, l, t), void 0, null),
      ie === null)
    )
      throw Error(k(349));
    an & 30 || Nf(n, t, l);
  }
  return l;
}
function Nf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Rf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Tf(t) && _f(e);
}
function Pf(e, t, n) {
  return n(function () {
    Tf(t) && _f(e);
  });
}
function Tf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ze(e, n);
  } catch {
    return !0;
  }
}
function _f(e) {
  var t = gt(e, 1);
  t !== null && Je(t, e, 1, -1);
}
function pa(e) {
  var t = be();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $r,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = fm.bind(null, G, e)),
    [t.memoizedState, e]
  );
}
function Ar(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function jf() {
  return Ve().memoizedState;
}
function Rl(e, t, n, r) {
  var l = be();
  (G.flags |= e),
    (l.memoizedState = Ar(1 | t, n, void 0, r === void 0 ? null : r));
}
function wo(e, t, n, r) {
  var l = Ve();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (re !== null) {
    var i = re.memoizedState;
    if (((o = i.destroy), r !== null && Ku(r, i.deps))) {
      l.memoizedState = Ar(t, n, o, r);
      return;
    }
  }
  (G.flags |= e), (l.memoizedState = Ar(1 | t, n, o, r));
}
function ha(e, t) {
  return Rl(8390656, 8, e, t);
}
function Yu(e, t) {
  return wo(2048, 8, e, t);
}
function Lf(e, t) {
  return wo(4, 2, e, t);
}
function Of(e, t) {
  return wo(4, 4, e, t);
}
function Mf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Df(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), wo(4, 4, Mf.bind(null, t, e), n)
  );
}
function Gu() {}
function zf(e, t) {
  var n = Ve();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ku(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function If(e, t) {
  var n = Ve();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ku(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ff(e, t, n) {
  return an & 21
    ? (Ze(n, t) || ((n = Bc()), (G.lanes |= n), (cn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ne = !0)), (e.memoizedState = n));
}
function am(e, t) {
  var n = A;
  (A = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Zo.transition;
  Zo.transition = {};
  try {
    e(!1), t();
  } finally {
    (A = n), (Zo.transition = r);
  }
}
function $f() {
  return Ve().memoizedState;
}
function cm(e, t, n) {
  var r = At(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Af(e))
  )
    Uf(t, n);
  else if (((n = xf(e, t, n, r)), n !== null)) {
    var l = ye();
    Je(n, e, r, l), Bf(n, t, r);
  }
}
function fm(e, t, n) {
  var r = At(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Af(e)) Uf(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Ze(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Uu(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = xf(e, t, l, r)),
      n !== null && ((l = ye()), Je(n, e, r, l), Bf(n, t, r));
  }
}
function Af(e) {
  var t = e.alternate;
  return e === G || (t !== null && t === G);
}
function Uf(e, t) {
  xr = Zl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Bf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ru(e, n);
  }
}
var ql = {
    readContext: We,
    useCallback: de,
    useContext: de,
    useEffect: de,
    useImperativeHandle: de,
    useInsertionEffect: de,
    useLayoutEffect: de,
    useMemo: de,
    useReducer: de,
    useRef: de,
    useState: de,
    useDebugValue: de,
    useDeferredValue: de,
    useTransition: de,
    useMutableSource: de,
    useSyncExternalStore: de,
    useId: de,
    unstable_isNewReconciler: !1,
  },
  dm = {
    readContext: We,
    useCallback: function (e, t) {
      return (be().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: We,
    useEffect: ha,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Rl(4194308, 4, Mf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Rl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Rl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = be();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = be();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = cm.bind(null, G, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = be();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: pa,
    useDebugValue: Gu,
    useDeferredValue: function (e) {
      return (be().memoizedState = e);
    },
    useTransition: function () {
      var e = pa(!1),
        t = e[0];
      return (e = am.bind(null, e[1])), (be().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = G,
        l = be();
      if (X) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), ie === null)) throw Error(k(349));
        an & 30 || Nf(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        ha(Pf.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Ar(9, Rf.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = be(),
        t = ie.identifierPrefix;
      if (X) {
        var n = dt,
          r = ft;
        (n = (r & ~(1 << (32 - Ge(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Fr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = sm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  pm = {
    readContext: We,
    useCallback: zf,
    useContext: We,
    useEffect: Yu,
    useImperativeHandle: Df,
    useInsertionEffect: Lf,
    useLayoutEffect: Of,
    useMemo: If,
    useReducer: qo,
    useRef: jf,
    useState: function () {
      return qo($r);
    },
    useDebugValue: Gu,
    useDeferredValue: function (e) {
      var t = Ve();
      return Ff(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = qo($r)[0],
        t = Ve().memoizedState;
      return [e, t];
    },
    useMutableSource: kf,
    useSyncExternalStore: Cf,
    useId: $f,
    unstable_isNewReconciler: !1,
  },
  hm = {
    readContext: We,
    useCallback: zf,
    useContext: We,
    useEffect: Yu,
    useImperativeHandle: Df,
    useInsertionEffect: Lf,
    useLayoutEffect: Of,
    useMemo: If,
    useReducer: bo,
    useRef: jf,
    useState: function () {
      return bo($r);
    },
    useDebugValue: Gu,
    useDeferredValue: function (e) {
      var t = Ve();
      return re === null ? (t.memoizedState = e) : Ff(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = bo($r)[0],
        t = Ve().memoizedState;
      return [e, t];
    },
    useMutableSource: kf,
    useSyncExternalStore: Cf,
    useId: $f,
    unstable_isNewReconciler: !1,
  };
function Qe(e, t) {
  if (e && e.defaultProps) {
    (t = Z({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Wi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Z({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var xo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? pn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      l = At(e),
      o = pt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Ft(e, o, l)),
      t !== null && (Je(t, e, l, r), Cl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      l = At(e),
      o = pt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Ft(e, o, l)),
      t !== null && (Je(t, e, l, r), Cl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ye(),
      r = At(e),
      l = pt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Ft(e, l, r)),
      t !== null && (Je(t, e, r, n), Cl(t, e, r));
  },
};
function ma(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Lr(n, r) || !Lr(l, o)
      : !0
  );
}
function Hf(e, t, n) {
  var r = !1,
    l = Ht,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = We(o))
      : ((l = Te(t) ? un : me.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Bn(e, l) : Ht)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = xo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function va(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && xo.enqueueReplaceState(t, t.state, null);
}
function Vi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Bu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = We(o))
    : ((o = Te(t) ? un : me.current), (l.context = Bn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Wi(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && xo.enqueueReplaceState(l, l.state, null),
      Gl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Kn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Hp(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ei(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ki(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var mm = typeof WeakMap == "function" ? WeakMap : Map;
function Wf(e, t, n) {
  (n = pt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      eo || ((eo = !0), (tu = r)), Ki(e, t);
    }),
    n
  );
}
function Vf(e, t, n) {
  (n = pt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ki(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Ki(e, t),
          typeof r != "function" &&
            ($t === null ? ($t = new Set([this])) : $t.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function ga(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new mm();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = _m.bind(null, e, t, n)), t.then(e, e));
}
function ya(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function wa(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = pt(-1, 1)), (t.tag = 2), Ft(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var vm = wt.ReactCurrentOwner,
  Ne = !1;
function ve(e, t, n, r) {
  t.child = e === null ? wf(t, null, n, r) : Wn(t, e.child, n, r);
}
function xa(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    $n(t, l),
    (r = Qu(e, t, n, r, o, l)),
    (n = Xu()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        yt(e, t, l))
      : (X && n && Du(t), (t.flags |= 1), ve(e, t, r, l), t.child)
  );
}
function Ea(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !rs(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Kf(e, t, o, r, l))
      : ((e = jl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Lr), n(i, r) && e.ref === t.ref)
    )
      return yt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Ut(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Kf(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Lr(o, r) && e.ref === t.ref)
      if (((Ne = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Ne = !0);
      else return (t.lanes = e.lanes), yt(e, t, l);
  }
  return Qi(e, t, n, r, l);
}
function Qf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        W(On, Le),
        (Le |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          W(On, Le),
          (Le |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        W(On, Le),
        (Le |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      W(On, Le),
      (Le |= r);
  return ve(e, t, l, n), t.child;
}
function Xf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Qi(e, t, n, r, l) {
  var o = Te(n) ? un : me.current;
  return (
    (o = Bn(t, o)),
    $n(t, l),
    (n = Qu(e, t, n, r, o, l)),
    (r = Xu()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        yt(e, t, l))
      : (X && r && Du(t), (t.flags |= 1), ve(e, t, n, l), t.child)
  );
}
function Sa(e, t, n, r, l) {
  if (Te(n)) {
    var o = !0;
    Vl(t);
  } else o = !1;
  if (($n(t, l), t.stateNode === null))
    Pl(e, t), Hf(t, n, r), Vi(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = We(a))
      : ((a = Te(n) ? un : me.current), (a = Bn(t, a)));
    var p = n.getDerivedStateFromProps,
      m =
        typeof p == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && va(t, i, r, a)),
      (Rt = !1);
    var h = t.memoizedState;
    (i.state = h),
      Gl(t, r, i, l),
      (s = t.memoizedState),
      u !== r || h !== s || Pe.current || Rt
        ? (typeof p == "function" && (Wi(t, n, p, r), (s = t.memoizedState)),
          (u = Rt || ma(t, n, u, r, h, s, a))
            ? (m ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = a),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Ef(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : Qe(t.type, u)),
      (i.props = a),
      (m = t.pendingProps),
      (h = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = We(s))
        : ((s = Te(n) ? un : me.current), (s = Bn(t, s)));
    var y = n.getDerivedStateFromProps;
    (p =
      typeof y == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== m || h !== s) && va(t, i, r, s)),
      (Rt = !1),
      (h = t.memoizedState),
      (i.state = h),
      Gl(t, r, i, l);
    var w = t.memoizedState;
    u !== m || h !== w || Pe.current || Rt
      ? (typeof y == "function" && (Wi(t, n, y, r), (w = t.memoizedState)),
        (a = Rt || ma(t, n, a, r, h, w, s) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = s),
        (r = a))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Xi(e, t, n, r, o, l);
}
function Xi(e, t, n, r, l, o) {
  Xf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && ua(t, n, !1), yt(e, t, o);
  (r = t.stateNode), (vm.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Wn(t, e.child, null, o)), (t.child = Wn(t, null, u, o)))
      : ve(e, t, u, o),
    (t.memoizedState = r.state),
    l && ua(t, n, !0),
    t.child
  );
}
function Yf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ia(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ia(e, t.context, !1),
    Hu(e, t.containerInfo);
}
function ka(e, t, n, r, l) {
  return Hn(), Iu(l), (t.flags |= 256), ve(e, t, n, r), t.child;
}
var Yi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Gi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Gf(e, t, n) {
  var r = t.pendingProps,
    l = Y.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    W(Y, l & 1),
    e === null)
  )
    return (
      Bi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = ko(i, r, 0, null)),
              (e = ln(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Gi(n)),
              (t.memoizedState = Yi),
              e)
            : Ju(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return gm(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Ut(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = Ut(u, o)) : ((o = ln(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Gi(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Yi),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Ut(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ju(e, t) {
  return (
    (t = ko({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function dl(e, t, n, r) {
  return (
    r !== null && Iu(r),
    Wn(t, e.child, null, n),
    (e = Ju(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function gm(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ei(Error(k(422)))), dl(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = ko({ mode: "visible", children: r.children }, l, 0, null)),
        (o = ln(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Wn(t, e.child, null, i),
        (t.child.memoizedState = Gi(i)),
        (t.memoizedState = Yi),
        o);
  if (!(t.mode & 1)) return dl(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(k(419))), (r = ei(o, r, void 0)), dl(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), Ne || u)) {
    if (((r = ie), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), gt(e, l), Je(r, e, l, -1));
    }
    return ns(), (r = ei(Error(k(421)))), dl(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = jm.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Oe = It(l.nextSibling)),
      (Me = t),
      (X = !0),
      (Ye = null),
      e !== null &&
        ((Ae[Ue++] = ft),
        (Ae[Ue++] = dt),
        (Ae[Ue++] = sn),
        (ft = e.id),
        (dt = e.overflow),
        (sn = t)),
      (t = Ju(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ca(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Hi(e.return, t, n);
}
function ti(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Jf(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ve(e, t, r.children, n), (r = Y.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ca(e, n, t);
        else if (e.tag === 19) Ca(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((W(Y, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Jl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ti(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Jl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ti(t, !0, n, null, o);
        break;
      case "together":
        ti(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Pl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function yt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (cn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ut(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ut(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function ym(e, t, n) {
  switch (t.tag) {
    case 3:
      Yf(t), Hn();
      break;
    case 5:
      Sf(t);
      break;
    case 1:
      Te(t.type) && Vl(t);
      break;
    case 4:
      Hu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      W(Xl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (W(Y, Y.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Gf(e, t, n)
          : (W(Y, Y.current & 1),
            (e = yt(e, t, n)),
            e !== null ? e.sibling : null);
      W(Y, Y.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Jf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        W(Y, Y.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Qf(e, t, n);
  }
  return yt(e, t, n);
}
var Zf, Ji, qf, bf;
Zf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ji = function () {};
qf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), nn(rt.current);
    var o = null;
    switch (n) {
      case "input":
        (l = yi(e, l)), (r = yi(e, r)), (o = []);
        break;
      case "select":
        (l = Z({}, l, { value: void 0 })),
          (r = Z({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Ei(e, l)), (r = Ei(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Hl);
    }
    ki(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Cr.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (Cr.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && K("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
bf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ur(e, t) {
  if (!X)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function wm(e, t, n) {
  var r = t.pendingProps;
  switch ((zu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return pe(t), null;
    case 1:
      return Te(t.type) && Wl(), pe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Vn(),
        Q(Pe),
        Q(me),
        Vu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (cl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ye !== null && (lu(Ye), (Ye = null)))),
        Ji(e, t),
        pe(t),
        null
      );
    case 5:
      Wu(t);
      var l = nn(Ir.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        qf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return pe(t), null;
        }
        if (((e = nn(rt.current)), cl(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[tt] = t), (r[Dr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              K("cancel", r), K("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              K("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < pr.length; l++) K(pr[l], r);
              break;
            case "source":
              K("error", r);
              break;
            case "img":
            case "image":
            case "link":
              K("error", r), K("load", r);
              break;
            case "details":
              K("toggle", r);
              break;
            case "input":
              Ms(r, o), K("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                K("invalid", r);
              break;
            case "textarea":
              zs(r, o), K("invalid", r);
          }
          ki(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      al(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      al(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Cr.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  K("scroll", r);
            }
          switch (n) {
            case "input":
              tl(r), Ds(r, o, !0);
              break;
            case "textarea":
              tl(r), Is(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Hl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Rc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[tt] = t),
            (e[Dr] = r),
            Zf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Ci(n, r)), n)) {
              case "dialog":
                K("cancel", e), K("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                K("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < pr.length; l++) K(pr[l], e);
                l = r;
                break;
              case "source":
                K("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                K("error", e), K("load", e), (l = r);
                break;
              case "details":
                K("toggle", e), (l = r);
                break;
              case "input":
                Ms(e, r), (l = yi(e, r)), K("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = Z({}, r, { value: void 0 })),
                  K("invalid", e);
                break;
              case "textarea":
                zs(e, r), (l = Ei(e, r)), K("invalid", e);
                break;
              default:
                l = r;
            }
            ki(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? _c(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Pc(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Nr(e, s)
                    : typeof s == "number" && Nr(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Cr.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && K("scroll", e)
                      : s != null && xu(e, o, s, i));
              }
            switch (n) {
              case "input":
                tl(e), Ds(e, r, !1);
                break;
              case "textarea":
                tl(e), Is(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Bt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Dn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Dn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Hl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return pe(t), null;
    case 6:
      if (e && t.stateNode != null) bf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = nn(Ir.current)), nn(rt.current), cl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[tt] = t),
            (o = r.nodeValue !== n) && ((e = Me), e !== null))
          )
            switch (e.tag) {
              case 3:
                al(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  al(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[tt] = t),
            (t.stateNode = r);
      }
      return pe(t), null;
    case 13:
      if (
        (Q(Y),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (X && Oe !== null && t.mode & 1 && !(t.flags & 128))
          gf(), Hn(), (t.flags |= 98560), (o = !1);
        else if (((o = cl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(k(317));
            o[tt] = t;
          } else
            Hn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          pe(t), (o = !1);
        } else Ye !== null && (lu(Ye), (Ye = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Y.current & 1 ? le === 0 && (le = 3) : ns())),
          t.updateQueue !== null && (t.flags |= 4),
          pe(t),
          null);
    case 4:
      return (
        Vn(), Ji(e, t), e === null && Or(t.stateNode.containerInfo), pe(t), null
      );
    case 10:
      return Au(t.type._context), pe(t), null;
    case 17:
      return Te(t.type) && Wl(), pe(t), null;
    case 19:
      if ((Q(Y), (o = t.memoizedState), o === null)) return pe(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) ur(o, !1);
        else {
          if (le !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Jl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    ur(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return W(Y, (Y.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ee() > Qn &&
            ((t.flags |= 128), (r = !0), ur(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Jl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ur(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !X)
            )
              return pe(t), null;
          } else
            2 * ee() - o.renderingStartTime > Qn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ur(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ee()),
          (t.sibling = null),
          (n = Y.current),
          W(Y, r ? (n & 1) | 2 : n & 1),
          t)
        : (pe(t), null);
    case 22:
    case 23:
      return (
        ts(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Le & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function xm(e, t) {
  switch ((zu(t), t.tag)) {
    case 1:
      return (
        Te(t.type) && Wl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Vn(),
        Q(Pe),
        Q(me),
        Vu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Wu(t), null;
    case 13:
      if ((Q(Y), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        Hn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Q(Y), null;
    case 4:
      return Vn(), null;
    case 10:
      return Au(t.type._context), null;
    case 22:
    case 23:
      return ts(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var pl = !1,
  he = !1,
  Em = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function Ln(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        q(e, t, r);
      }
    else n.current = null;
}
function Zi(e, t, n) {
  try {
    n();
  } catch (r) {
    q(e, t, r);
  }
}
var Na = !1;
function Sm(e, t) {
  if (((Di = Al), (e = rf()), Mu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            a = 0,
            p = 0,
            m = e,
            h = null;
          t: for (;;) {
            for (
              var y;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = i + l),
                m !== o || (r !== 0 && m.nodeType !== 3) || (s = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (y = m.firstChild) !== null;

            )
              (h = m), (m = y);
            for (;;) {
              if (m === e) break t;
              if (
                (h === n && ++a === l && (u = i),
                h === o && ++p === r && (s = i),
                (y = m.nextSibling) !== null)
              )
                break;
              (m = h), (h = m.parentNode);
            }
            m = y;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (zi = { focusedElem: e, selectionRange: n }, Al = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var E = w.memoizedProps,
                    S = w.memoizedState,
                    d = t.stateNode,
                    f = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? E : Qe(t.type, E),
                      S
                    );
                  d.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (x) {
          q(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (w = Na), (Na = !1), w;
}
function Er(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Zi(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Eo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function qi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function ed(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), ed(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[tt], delete t[Dr], delete t[$i], delete t[lm], delete t[om])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function td(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ra(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || td(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function bi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Hl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (bi(e, t, n), e = e.sibling; e !== null; ) bi(e, t, n), (e = e.sibling);
}
function eu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (eu(e, t, n), e = e.sibling; e !== null; ) eu(e, t, n), (e = e.sibling);
}
var se = null,
  Xe = !1;
function Ct(e, t, n) {
  for (n = n.child; n !== null; ) nd(e, t, n), (n = n.sibling);
}
function nd(e, t, n) {
  if (nt && typeof nt.onCommitFiberUnmount == "function")
    try {
      nt.onCommitFiberUnmount(po, n);
    } catch {}
  switch (n.tag) {
    case 5:
      he || Ln(n, t);
    case 6:
      var r = se,
        l = Xe;
      (se = null),
        Ct(e, t, n),
        (se = r),
        (Xe = l),
        se !== null &&
          (Xe
            ? ((e = se),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : se.removeChild(n.stateNode));
      break;
    case 18:
      se !== null &&
        (Xe
          ? ((e = se),
            (n = n.stateNode),
            e.nodeType === 8
              ? Yo(e.parentNode, n)
              : e.nodeType === 1 && Yo(e, n),
            _r(e))
          : Yo(se, n.stateNode));
      break;
    case 4:
      (r = se),
        (l = Xe),
        (se = n.stateNode.containerInfo),
        (Xe = !0),
        Ct(e, t, n),
        (se = r),
        (Xe = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !he &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Zi(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Ct(e, t, n);
      break;
    case 1:
      if (
        !he &&
        (Ln(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          q(n, t, u);
        }
      Ct(e, t, n);
      break;
    case 21:
      Ct(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((he = (r = he) || n.memoizedState !== null), Ct(e, t, n), (he = r))
        : Ct(e, t, n);
      break;
    default:
      Ct(e, t, n);
  }
}
function Pa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Em()),
      t.forEach(function (r) {
        var l = Lm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Ke(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (se = u.stateNode), (Xe = !1);
              break e;
            case 3:
              (se = u.stateNode.containerInfo), (Xe = !0);
              break e;
            case 4:
              (se = u.stateNode.containerInfo), (Xe = !0);
              break e;
          }
          u = u.return;
        }
        if (se === null) throw Error(k(160));
        nd(o, i, l), (se = null), (Xe = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        q(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) rd(t, e), (t = t.sibling);
}
function rd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ke(t, e), qe(e), r & 4)) {
        try {
          Er(3, e, e.return), Eo(3, e);
        } catch (E) {
          q(e, e.return, E);
        }
        try {
          Er(5, e, e.return);
        } catch (E) {
          q(e, e.return, E);
        }
      }
      break;
    case 1:
      Ke(t, e), qe(e), r & 512 && n !== null && Ln(n, n.return);
      break;
    case 5:
      if (
        (Ke(t, e),
        qe(e),
        r & 512 && n !== null && Ln(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Nr(l, "");
        } catch (E) {
          q(e, e.return, E);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && Cc(l, o),
              Ci(u, i);
            var a = Ci(u, o);
            for (i = 0; i < s.length; i += 2) {
              var p = s[i],
                m = s[i + 1];
              p === "style"
                ? _c(l, m)
                : p === "dangerouslySetInnerHTML"
                ? Pc(l, m)
                : p === "children"
                ? Nr(l, m)
                : xu(l, p, m, a);
            }
            switch (u) {
              case "input":
                wi(l, o);
                break;
              case "textarea":
                Nc(l, o);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null
                  ? Dn(l, !!o.multiple, y, !1)
                  : h !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Dn(l, !!o.multiple, o.defaultValue, !0)
                      : Dn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Dr] = o;
          } catch (E) {
            q(e, e.return, E);
          }
      }
      break;
    case 6:
      if ((Ke(t, e), qe(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (E) {
          q(e, e.return, E);
        }
      }
      break;
    case 3:
      if (
        (Ke(t, e), qe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          _r(t.containerInfo);
        } catch (E) {
          q(e, e.return, E);
        }
      break;
    case 4:
      Ke(t, e), qe(e);
      break;
    case 13:
      Ke(t, e),
        qe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (bu = ee())),
        r & 4 && Pa(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((he = (a = he) || p), Ke(t, e), (he = a)) : Ke(t, e),
        qe(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !p && e.mode & 1)
        )
          for (_ = e, p = e.child; p !== null; ) {
            for (m = _ = p; _ !== null; ) {
              switch (((h = _), (y = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Er(4, h, h.return);
                  break;
                case 1:
                  Ln(h, h.return);
                  var w = h.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (E) {
                      q(r, n, E);
                    }
                  }
                  break;
                case 5:
                  Ln(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    _a(m);
                    continue;
                  }
              }
              y !== null ? ((y.return = h), (_ = y)) : _a(m);
            }
            p = p.sibling;
          }
        e: for (p = null, m = e; ; ) {
          if (m.tag === 5) {
            if (p === null) {
              p = m;
              try {
                (l = m.stateNode),
                  a
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = m.stateNode),
                      (s = m.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Tc("display", i)));
              } catch (E) {
                q(e, e.return, E);
              }
            }
          } else if (m.tag === 6) {
            if (p === null)
              try {
                m.stateNode.nodeValue = a ? "" : m.memoizedProps;
              } catch (E) {
                q(e, e.return, E);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            p === m && (p = null), (m = m.return);
          }
          p === m && (p = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Ke(t, e), qe(e), r & 4 && Pa(e);
      break;
    case 21:
      break;
    default:
      Ke(t, e), qe(e);
  }
}
function qe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (td(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Nr(l, ""), (r.flags &= -33));
          var o = Ra(e);
          eu(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Ra(e);
          bi(e, u, i);
          break;
        default:
          throw Error(k(161));
      }
    } catch (s) {
      q(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function km(e, t, n) {
  (_ = e), ld(e);
}
function ld(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || pl;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || he;
        u = pl;
        var a = he;
        if (((pl = i), (he = s) && !a))
          for (_ = l; _ !== null; )
            (i = _),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? ja(l)
                : s !== null
                ? ((s.return = i), (_ = s))
                : ja(l);
        for (; o !== null; ) (_ = o), ld(o), (o = o.sibling);
        (_ = l), (pl = u), (he = a);
      }
      Ta(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (_ = o)) : Ta(e);
  }
}
function Ta(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              he || Eo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !he)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Qe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && da(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                da(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var p = a.memoizedState;
                  if (p !== null) {
                    var m = p.dehydrated;
                    m !== null && _r(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        he || (t.flags & 512 && qi(t));
      } catch (h) {
        q(t, t.return, h);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function _a(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function ja(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Eo(4, t);
          } catch (s) {
            q(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              q(t, l, s);
            }
          }
          var o = t.return;
          try {
            qi(t);
          } catch (s) {
            q(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            qi(t);
          } catch (s) {
            q(t, i, s);
          }
      }
    } catch (s) {
      q(t, t.return, s);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (_ = u);
      break;
    }
    _ = t.return;
  }
}
var Cm = Math.ceil,
  bl = wt.ReactCurrentDispatcher,
  Zu = wt.ReactCurrentOwner,
  He = wt.ReactCurrentBatchConfig,
  I = 0,
  ie = null,
  ne = null,
  ae = 0,
  Le = 0,
  On = Kt(0),
  le = 0,
  Ur = null,
  cn = 0,
  So = 0,
  qu = 0,
  Sr = null,
  Ce = null,
  bu = 0,
  Qn = 1 / 0,
  at = null,
  eo = !1,
  tu = null,
  $t = null,
  hl = !1,
  Ot = null,
  to = 0,
  kr = 0,
  nu = null,
  Tl = -1,
  _l = 0;
function ye() {
  return I & 6 ? ee() : Tl !== -1 ? Tl : (Tl = ee());
}
function At(e) {
  return e.mode & 1
    ? I & 2 && ae !== 0
      ? ae & -ae
      : um.transition !== null
      ? (_l === 0 && (_l = Bc()), _l)
      : ((e = A),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Yc(e.type))),
        e)
    : 1;
}
function Je(e, t, n, r) {
  if (50 < kr) throw ((kr = 0), (nu = null), Error(k(185)));
  Vr(e, n, r),
    (!(I & 2) || e !== ie) &&
      (e === ie && (!(I & 2) && (So |= n), le === 4 && Tt(e, ae)),
      _e(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((Qn = ee() + 500), yo && Qt()));
}
function _e(e, t) {
  var n = e.callbackNode;
  uh(e, t);
  var r = $l(e, e === ie ? ae : 0);
  if (r === 0)
    n !== null && As(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && As(n), t === 1))
      e.tag === 0 ? im(La.bind(null, e)) : hf(La.bind(null, e)),
        nm(function () {
          !(I & 6) && Qt();
        }),
        (n = null);
    else {
      switch (Hc(r)) {
        case 1:
          n = Nu;
          break;
        case 4:
          n = Ac;
          break;
        case 16:
          n = Fl;
          break;
        case 536870912:
          n = Uc;
          break;
        default:
          n = Fl;
      }
      n = dd(n, od.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function od(e, t) {
  if (((Tl = -1), (_l = 0), I & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (An() && e.callbackNode !== n) return null;
  var r = $l(e, e === ie ? ae : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = no(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var o = ud();
    (ie !== e || ae !== t) && ((at = null), (Qn = ee() + 500), rn(e, t));
    do
      try {
        Pm();
        break;
      } catch (u) {
        id(e, u);
      }
    while (!0);
    $u(),
      (bl.current = o),
      (I = l),
      ne !== null ? (t = 0) : ((ie = null), (ae = 0), (t = le));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = _i(e)), l !== 0 && ((r = l), (t = ru(e, l)))), t === 1)
    )
      throw ((n = Ur), rn(e, 0), Tt(e, r), _e(e, ee()), n);
    if (t === 6) Tt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Nm(l) &&
          ((t = no(e, r)),
          t === 2 && ((o = _i(e)), o !== 0 && ((r = o), (t = ru(e, o)))),
          t === 1))
      )
        throw ((n = Ur), rn(e, 0), Tt(e, r), _e(e, ee()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          qt(e, Ce, at);
          break;
        case 3:
          if (
            (Tt(e, r), (r & 130023424) === r && ((t = bu + 500 - ee()), 10 < t))
          ) {
            if ($l(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ye(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Fi(qt.bind(null, e, Ce, at), t);
            break;
          }
          qt(e, Ce, at);
          break;
        case 4:
          if ((Tt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ge(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = ee() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Cm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Fi(qt.bind(null, e, Ce, at), r);
            break;
          }
          qt(e, Ce, at);
          break;
        case 5:
          qt(e, Ce, at);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return _e(e, ee()), e.callbackNode === n ? od.bind(null, e) : null;
}
function ru(e, t) {
  var n = Sr;
  return (
    e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256),
    (e = no(e, t)),
    e !== 2 && ((t = Ce), (Ce = n), t !== null && lu(t)),
    e
  );
}
function lu(e) {
  Ce === null ? (Ce = e) : Ce.push.apply(Ce, e);
}
function Nm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Ze(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Tt(e, t) {
  for (
    t &= ~qu,
      t &= ~So,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ge(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function La(e) {
  if (I & 6) throw Error(k(327));
  An();
  var t = $l(e, 0);
  if (!(t & 1)) return _e(e, ee()), null;
  var n = no(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = _i(e);
    r !== 0 && ((t = r), (n = ru(e, r)));
  }
  if (n === 1) throw ((n = Ur), rn(e, 0), Tt(e, t), _e(e, ee()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    qt(e, Ce, at),
    _e(e, ee()),
    null
  );
}
function es(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((Qn = ee() + 500), yo && Qt());
  }
}
function fn(e) {
  Ot !== null && Ot.tag === 0 && !(I & 6) && An();
  var t = I;
  I |= 1;
  var n = He.transition,
    r = A;
  try {
    if (((He.transition = null), (A = 1), e)) return e();
  } finally {
    (A = r), (He.transition = n), (I = t), !(I & 6) && Qt();
  }
}
function ts() {
  (Le = On.current), Q(On);
}
function rn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), tm(n)), ne !== null))
    for (n = ne.return; n !== null; ) {
      var r = n;
      switch ((zu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Wl();
          break;
        case 3:
          Vn(), Q(Pe), Q(me), Vu();
          break;
        case 5:
          Wu(r);
          break;
        case 4:
          Vn();
          break;
        case 13:
          Q(Y);
          break;
        case 19:
          Q(Y);
          break;
        case 10:
          Au(r.type._context);
          break;
        case 22:
        case 23:
          ts();
      }
      n = n.return;
    }
  if (
    ((ie = e),
    (ne = e = Ut(e.current, null)),
    (ae = Le = t),
    (le = 0),
    (Ur = null),
    (qu = So = cn = 0),
    (Ce = Sr = null),
    tn !== null)
  ) {
    for (t = 0; t < tn.length; t++)
      if (((n = tn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    tn = null;
  }
  return e;
}
function id(e, t) {
  do {
    var n = ne;
    try {
      if (($u(), (Nl.current = ql), Zl)) {
        for (var r = G.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Zl = !1;
      }
      if (
        ((an = 0),
        (oe = re = G = null),
        (xr = !1),
        (Fr = 0),
        (Zu.current = null),
        n === null || n.return === null)
      ) {
        (le = 1), (Ur = t), (ne = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = ae),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            p = u,
            m = p.tag;
          if (!(p.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = p.alternate;
            h
              ? ((p.updateQueue = h.updateQueue),
                (p.memoizedState = h.memoizedState),
                (p.lanes = h.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var y = ya(i);
          if (y !== null) {
            (y.flags &= -257),
              wa(y, i, u, o, t),
              y.mode & 1 && ga(o, a, t),
              (t = y),
              (s = a);
            var w = t.updateQueue;
            if (w === null) {
              var E = new Set();
              E.add(s), (t.updateQueue = E);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              ga(o, a, t), ns();
              break e;
            }
            s = Error(k(426));
          }
        } else if (X && u.mode & 1) {
          var S = ya(i);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              wa(S, i, u, o, t),
              Iu(Kn(s, u));
            break e;
          }
        }
        (o = s = Kn(s, u)),
          le !== 4 && (le = 2),
          Sr === null ? (Sr = [o]) : Sr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = Wf(o, s, t);
              fa(o, d);
              break e;
            case 1:
              u = s;
              var f = o.type,
                v = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    ($t === null || !$t.has(v))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var x = Vf(o, u, t);
                fa(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      ad(n);
    } catch (C) {
      (t = C), ne === n && n !== null && (ne = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ud() {
  var e = bl.current;
  return (bl.current = ql), e === null ? ql : e;
}
function ns() {
  (le === 0 || le === 3 || le === 2) && (le = 4),
    ie === null || (!(cn & 268435455) && !(So & 268435455)) || Tt(ie, ae);
}
function no(e, t) {
  var n = I;
  I |= 2;
  var r = ud();
  (ie !== e || ae !== t) && ((at = null), rn(e, t));
  do
    try {
      Rm();
      break;
    } catch (l) {
      id(e, l);
    }
  while (!0);
  if (($u(), (I = n), (bl.current = r), ne !== null)) throw Error(k(261));
  return (ie = null), (ae = 0), le;
}
function Rm() {
  for (; ne !== null; ) sd(ne);
}
function Pm() {
  for (; ne !== null && !qp(); ) sd(ne);
}
function sd(e) {
  var t = fd(e.alternate, e, Le);
  (e.memoizedProps = e.pendingProps),
    t === null ? ad(e) : (ne = t),
    (Zu.current = null);
}
function ad(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = xm(n, t)), n !== null)) {
        (n.flags &= 32767), (ne = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (le = 6), (ne = null);
        return;
      }
    } else if (((n = wm(n, t, Le)), n !== null)) {
      ne = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ne = t;
      return;
    }
    ne = t = e;
  } while (t !== null);
  le === 0 && (le = 5);
}
function qt(e, t, n) {
  var r = A,
    l = He.transition;
  try {
    (He.transition = null), (A = 1), Tm(e, t, n, r);
  } finally {
    (He.transition = l), (A = r);
  }
  return null;
}
function Tm(e, t, n, r) {
  do An();
  while (Ot !== null);
  if (I & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (sh(e, o),
    e === ie && ((ne = ie = null), (ae = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      hl ||
      ((hl = !0),
      dd(Fl, function () {
        return An(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = He.transition), (He.transition = null);
    var i = A;
    A = 1;
    var u = I;
    (I |= 4),
      (Zu.current = null),
      Sm(e, n),
      rd(n, e),
      Yh(zi),
      (Al = !!Di),
      (zi = Di = null),
      (e.current = n),
      km(n),
      bp(),
      (I = u),
      (A = i),
      (He.transition = o);
  } else e.current = n;
  if (
    (hl && ((hl = !1), (Ot = e), (to = l)),
    (o = e.pendingLanes),
    o === 0 && ($t = null),
    nh(n.stateNode),
    _e(e, ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (eo) throw ((eo = !1), (e = tu), (tu = null), e);
  return (
    to & 1 && e.tag !== 0 && An(),
    (o = e.pendingLanes),
    o & 1 ? (e === nu ? kr++ : ((kr = 0), (nu = e))) : (kr = 0),
    Qt(),
    null
  );
}
function An() {
  if (Ot !== null) {
    var e = Hc(to),
      t = He.transition,
      n = A;
    try {
      if (((He.transition = null), (A = 16 > e ? 16 : e), Ot === null))
        var r = !1;
      else {
        if (((e = Ot), (Ot = null), (to = 0), I & 6)) throw Error(k(331));
        var l = I;
        for (I |= 4, _ = e.current; _ !== null; ) {
          var o = _,
            i = o.child;
          if (_.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (_ = a; _ !== null; ) {
                  var p = _;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Er(8, p, o);
                  }
                  var m = p.child;
                  if (m !== null) (m.return = p), (_ = m);
                  else
                    for (; _ !== null; ) {
                      p = _;
                      var h = p.sibling,
                        y = p.return;
                      if ((ed(p), p === a)) {
                        _ = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = y), (_ = h);
                        break;
                      }
                      _ = y;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var E = w.child;
                if (E !== null) {
                  w.child = null;
                  do {
                    var S = E.sibling;
                    (E.sibling = null), (E = S);
                  } while (E !== null);
                }
              }
              _ = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (_ = i);
          else
            e: for (; _ !== null; ) {
              if (((o = _), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Er(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (_ = d);
                break e;
              }
              _ = o.return;
            }
        }
        var f = e.current;
        for (_ = f; _ !== null; ) {
          i = _;
          var v = i.child;
          if (i.subtreeFlags & 2064 && v !== null) (v.return = i), (_ = v);
          else
            e: for (i = f; _ !== null; ) {
              if (((u = _), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Eo(9, u);
                  }
                } catch (C) {
                  q(u, u.return, C);
                }
              if (u === i) {
                _ = null;
                break e;
              }
              var x = u.sibling;
              if (x !== null) {
                (x.return = u.return), (_ = x);
                break e;
              }
              _ = u.return;
            }
        }
        if (
          ((I = l), Qt(), nt && typeof nt.onPostCommitFiberRoot == "function")
        )
          try {
            nt.onPostCommitFiberRoot(po, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (A = n), (He.transition = t);
    }
  }
  return !1;
}
function Oa(e, t, n) {
  (t = Kn(n, t)),
    (t = Wf(e, t, 1)),
    (e = Ft(e, t, 1)),
    (t = ye()),
    e !== null && (Vr(e, 1, t), _e(e, t));
}
function q(e, t, n) {
  if (e.tag === 3) Oa(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Oa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            ($t === null || !$t.has(r)))
        ) {
          (e = Kn(n, e)),
            (e = Vf(t, e, 1)),
            (t = Ft(t, e, 1)),
            (e = ye()),
            t !== null && (Vr(t, 1, e), _e(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function _m(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ye()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ie === e &&
      (ae & n) === n &&
      (le === 4 || (le === 3 && (ae & 130023424) === ae && 500 > ee() - bu)
        ? rn(e, 0)
        : (qu |= n)),
    _e(e, t);
}
function cd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ll), (ll <<= 1), !(ll & 130023424) && (ll = 4194304))
      : (t = 1));
  var n = ye();
  (e = gt(e, t)), e !== null && (Vr(e, t, n), _e(e, n));
}
function jm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), cd(e, n);
}
function Lm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), cd(e, n);
}
var fd;
fd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Pe.current) Ne = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ne = !1), ym(e, t, n);
      Ne = !!(e.flags & 131072);
    }
  else (Ne = !1), X && t.flags & 1048576 && mf(t, Ql, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Pl(e, t), (e = t.pendingProps);
      var l = Bn(t, me.current);
      $n(t, n), (l = Qu(null, t, r, e, l, n));
      var o = Xu();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Te(r) ? ((o = !0), Vl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Bu(t),
            (l.updater = xo),
            (t.stateNode = l),
            (l._reactInternals = t),
            Vi(t, r, e, n),
            (t = Xi(null, t, r, !0, o, n)))
          : ((t.tag = 0), X && o && Du(t), ve(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Pl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Mm(r)),
          (e = Qe(r, e)),
          l)
        ) {
          case 0:
            t = Qi(null, t, r, e, n);
            break e;
          case 1:
            t = Sa(null, t, r, e, n);
            break e;
          case 11:
            t = xa(null, t, r, e, n);
            break e;
          case 14:
            t = Ea(null, t, r, Qe(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Qe(r, l)),
        Qi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Qe(r, l)),
        Sa(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Yf(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Ef(e, t),
          Gl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = Kn(Error(k(423)), t)), (t = ka(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Kn(Error(k(424)), t)), (t = ka(e, t, r, n, l));
            break e;
          } else
            for (
              Oe = It(t.stateNode.containerInfo.firstChild),
                Me = t,
                X = !0,
                Ye = null,
                n = wf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Hn(), r === l)) {
            t = yt(e, t, n);
            break e;
          }
          ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Sf(t),
        e === null && Bi(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Ii(r, l) ? (i = null) : o !== null && Ii(r, o) && (t.flags |= 32),
        Xf(e, t),
        ve(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Bi(t), null;
    case 13:
      return Gf(e, t, n);
    case 4:
      return (
        Hu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Wn(t, null, r, n)) : ve(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Qe(r, l)),
        xa(e, t, r, l, n)
      );
    case 7:
      return ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          W(Xl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Ze(o.value, i)) {
            if (o.children === l.children && !Pe.current) {
              t = yt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = pt(-1, n & -n)), (s.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var p = a.pending;
                        p === null
                          ? (s.next = s)
                          : ((s.next = p.next), (p.next = s)),
                          (a.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Hi(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(k(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Hi(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ve(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        $n(t, n),
        (l = We(l)),
        (r = r(l)),
        (t.flags |= 1),
        ve(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Qe(r, t.pendingProps)),
        (l = Qe(r.type, l)),
        Ea(e, t, r, l, n)
      );
    case 15:
      return Kf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Qe(r, l)),
        Pl(e, t),
        (t.tag = 1),
        Te(r) ? ((e = !0), Vl(t)) : (e = !1),
        $n(t, n),
        Hf(t, r, l),
        Vi(t, r, l, n),
        Xi(null, t, r, !0, e, n)
      );
    case 19:
      return Jf(e, t, n);
    case 22:
      return Qf(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function dd(e, t) {
  return $c(e, t);
}
function Om(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Be(e, t, n, r) {
  return new Om(e, t, n, r);
}
function rs(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Mm(e) {
  if (typeof e == "function") return rs(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Su)) return 11;
    if (e === ku) return 14;
  }
  return 2;
}
function Ut(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Be(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function jl(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) rs(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Sn:
        return ln(n.children, l, o, t);
      case Eu:
        (i = 8), (l |= 8);
        break;
      case hi:
        return (
          (e = Be(12, n, t, l | 2)), (e.elementType = hi), (e.lanes = o), e
        );
      case mi:
        return (e = Be(13, n, t, l)), (e.elementType = mi), (e.lanes = o), e;
      case vi:
        return (e = Be(19, n, t, l)), (e.elementType = vi), (e.lanes = o), e;
      case Ec:
        return ko(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case wc:
              i = 10;
              break e;
            case xc:
              i = 9;
              break e;
            case Su:
              i = 11;
              break e;
            case ku:
              i = 14;
              break e;
            case Nt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Be(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function ln(e, t, n, r) {
  return (e = Be(7, e, r, t)), (e.lanes = n), e;
}
function ko(e, t, n, r) {
  return (
    (e = Be(22, e, r, t)),
    (e.elementType = Ec),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ni(e, t, n) {
  return (e = Be(6, e, null, t)), (e.lanes = n), e;
}
function ri(e, t, n) {
  return (
    (t = Be(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Dm(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Fo(0)),
    (this.expirationTimes = Fo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Fo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function ls(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new Dm(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Be(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Bu(o),
    e
  );
}
function zm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: En,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function pd(e) {
  if (!e) return Ht;
  e = e._reactInternals;
  e: {
    if (pn(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Te(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Te(n)) return pf(e, n, t);
  }
  return t;
}
function hd(e, t, n, r, l, o, i, u, s) {
  return (
    (e = ls(n, r, !0, e, l, o, i, u, s)),
    (e.context = pd(null)),
    (n = e.current),
    (r = ye()),
    (l = At(n)),
    (o = pt(r, l)),
    (o.callback = t ?? null),
    Ft(n, o, l),
    (e.current.lanes = l),
    Vr(e, l, r),
    _e(e, r),
    e
  );
}
function Co(e, t, n, r) {
  var l = t.current,
    o = ye(),
    i = At(l);
  return (
    (n = pd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = pt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ft(l, t, i)),
    e !== null && (Je(e, l, i, o), Cl(e, l, i)),
    i
  );
}
function ro(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ma(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function os(e, t) {
  Ma(e, t), (e = e.alternate) && Ma(e, t);
}
function Im() {
  return null;
}
var md =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function is(e) {
  this._internalRoot = e;
}
No.prototype.render = is.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Co(e, t, null, null);
};
No.prototype.unmount = is.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    fn(function () {
      Co(null, e, null, null);
    }),
      (t[vt] = null);
  }
};
function No(e) {
  this._internalRoot = e;
}
No.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Kc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Pt.length && t !== 0 && t < Pt[n].priority; n++);
    Pt.splice(n, 0, e), n === 0 && Xc(e);
  }
};
function us(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ro(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Da() {}
function Fm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = ro(i);
        o.call(a);
      };
    }
    var i = hd(t, r, e, 0, null, !1, !1, "", Da);
    return (
      (e._reactRootContainer = i),
      (e[vt] = i.current),
      Or(e.nodeType === 8 ? e.parentNode : e),
      fn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = ro(s);
      u.call(a);
    };
  }
  var s = ls(e, 0, !1, null, null, !1, !1, "", Da);
  return (
    (e._reactRootContainer = s),
    (e[vt] = s.current),
    Or(e.nodeType === 8 ? e.parentNode : e),
    fn(function () {
      Co(t, s, n, r);
    }),
    s
  );
}
function Po(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = ro(i);
        u.call(s);
      };
    }
    Co(t, i, e, l);
  } else i = Fm(n, t, e, l, r);
  return ro(i);
}
Wc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = dr(t.pendingLanes);
        n !== 0 &&
          (Ru(t, n | 1), _e(t, ee()), !(I & 6) && ((Qn = ee() + 500), Qt()));
      }
      break;
    case 13:
      fn(function () {
        var r = gt(e, 1);
        if (r !== null) {
          var l = ye();
          Je(r, e, 1, l);
        }
      }),
        os(e, 1);
  }
};
Pu = function (e) {
  if (e.tag === 13) {
    var t = gt(e, 134217728);
    if (t !== null) {
      var n = ye();
      Je(t, e, 134217728, n);
    }
    os(e, 134217728);
  }
};
Vc = function (e) {
  if (e.tag === 13) {
    var t = At(e),
      n = gt(e, t);
    if (n !== null) {
      var r = ye();
      Je(n, e, t, r);
    }
    os(e, t);
  }
};
Kc = function () {
  return A;
};
Qc = function (e, t) {
  var n = A;
  try {
    return (A = e), t();
  } finally {
    A = n;
  }
};
Ri = function (e, t, n) {
  switch (t) {
    case "input":
      if ((wi(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = go(r);
            if (!l) throw Error(k(90));
            kc(r), wi(r, l);
          }
        }
      }
      break;
    case "textarea":
      Nc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Dn(e, !!n.multiple, t, !1);
  }
};
Oc = es;
Mc = fn;
var $m = { usingClientEntryPoint: !1, Events: [Qr, Rn, go, jc, Lc, es] },
  sr = {
    findFiberByHostInstance: en,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Am = {
    bundleType: sr.bundleType,
    version: sr.version,
    rendererPackageName: sr.rendererPackageName,
    rendererConfig: sr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: wt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ic(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: sr.findFiberByHostInstance || Im,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ml = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ml.isDisabled && ml.supportsFiber)
    try {
      (po = ml.inject(Am)), (nt = ml);
    } catch {}
}
ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $m;
ze.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!us(t)) throw Error(k(200));
  return zm(e, t, null, n);
};
ze.createRoot = function (e, t) {
  if (!us(e)) throw Error(k(299));
  var n = !1,
    r = "",
    l = md;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = ls(e, 1, !1, null, null, n, !1, r, l)),
    (e[vt] = t.current),
    Or(e.nodeType === 8 ? e.parentNode : e),
    new is(t)
  );
};
ze.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = Ic(t)), (e = e === null ? null : e.stateNode), e;
};
ze.flushSync = function (e) {
  return fn(e);
};
ze.hydrate = function (e, t, n) {
  if (!Ro(t)) throw Error(k(200));
  return Po(null, e, t, !0, n);
};
ze.hydrateRoot = function (e, t, n) {
  if (!us(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = md;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = hd(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[vt] = t.current),
    Or(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new No(t);
};
ze.render = function (e, t, n) {
  if (!Ro(t)) throw Error(k(200));
  return Po(null, e, t, !1, n);
};
ze.unmountComponentAtNode = function (e) {
  if (!Ro(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (fn(function () {
        Po(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[vt] = null);
        });
      }),
      !0)
    : !1;
};
ze.unstable_batchedUpdates = es;
ze.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ro(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Po(e, t, n, !1, r);
};
ze.version = "18.3.1-next-f1338f8080-20240426";
function vd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vd);
    } catch (e) {
      console.error(e);
    }
}
vd(), (mc.exports = ze);
var gd = mc.exports;
const Mn = co(gd);
var za = gd;
(di.createRoot = za.createRoot), (di.hydrateRoot = za.hydrateRoot);
var ss = {};
Object.defineProperty(ss, "__esModule", { value: !0 });
ss.parse = Qm;
ss.serialize = Xm;
const Um = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
  Bm = /^[\u0021-\u003A\u003C-\u007E]*$/,
  Hm =
    /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
  Wm = /^[\u0020-\u003A\u003D-\u007E]*$/,
  Vm = Object.prototype.toString,
  Km = (() => {
    const e = function () {};
    return (e.prototype = Object.create(null)), e;
  })();
function Qm(e, t) {
  const n = new Km(),
    r = e.length;
  if (r < 2) return n;
  const l = (t == null ? void 0 : t.decode) || Ym;
  let o = 0;
  do {
    const i = e.indexOf("=", o);
    if (i === -1) break;
    const u = e.indexOf(";", o),
      s = u === -1 ? r : u;
    if (i > s) {
      o = e.lastIndexOf(";", i - 1) + 1;
      continue;
    }
    const a = Ia(e, o, i),
      p = Fa(e, i, a),
      m = e.slice(a, p);
    if (n[m] === void 0) {
      let h = Ia(e, i + 1, s),
        y = Fa(e, s, h);
      const w = l(e.slice(h, y));
      n[m] = w;
    }
    o = s + 1;
  } while (o < r);
  return n;
}
function Ia(e, t, n) {
  do {
    const r = e.charCodeAt(t);
    if (r !== 32 && r !== 9) return t;
  } while (++t < n);
  return n;
}
function Fa(e, t, n) {
  for (; t > n; ) {
    const r = e.charCodeAt(--t);
    if (r !== 32 && r !== 9) return t + 1;
  }
  return n;
}
function Xm(e, t, n) {
  const r = (n == null ? void 0 : n.encode) || encodeURIComponent;
  if (!Um.test(e)) throw new TypeError(`argument name is invalid: ${e}`);
  const l = r(t);
  if (!Bm.test(l)) throw new TypeError(`argument val is invalid: ${t}`);
  let o = e + "=" + l;
  if (!n) return o;
  if (n.maxAge !== void 0) {
    if (!Number.isInteger(n.maxAge))
      throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);
    o += "; Max-Age=" + n.maxAge;
  }
  if (n.domain) {
    if (!Hm.test(n.domain))
      throw new TypeError(`option domain is invalid: ${n.domain}`);
    o += "; Domain=" + n.domain;
  }
  if (n.path) {
    if (!Wm.test(n.path))
      throw new TypeError(`option path is invalid: ${n.path}`);
    o += "; Path=" + n.path;
  }
  if (n.expires) {
    if (!Gm(n.expires) || !Number.isFinite(n.expires.valueOf()))
      throw new TypeError(`option expires is invalid: ${n.expires}`);
    o += "; Expires=" + n.expires.toUTCString();
  }
  if (
    (n.httpOnly && (o += "; HttpOnly"),
    n.secure && (o += "; Secure"),
    n.partitioned && (o += "; Partitioned"),
    n.priority)
  )
    switch (typeof n.priority == "string" ? n.priority.toLowerCase() : void 0) {
      case "low":
        o += "; Priority=Low";
        break;
      case "medium":
        o += "; Priority=Medium";
        break;
      case "high":
        o += "; Priority=High";
        break;
      default:
        throw new TypeError(`option priority is invalid: ${n.priority}`);
    }
  if (n.sameSite)
    switch (
      typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite
    ) {
      case !0:
      case "strict":
        o += "; SameSite=Strict";
        break;
      case "lax":
        o += "; SameSite=Lax";
        break;
      case "none":
        o += "; SameSite=None";
        break;
      default:
        throw new TypeError(`option sameSite is invalid: ${n.sameSite}`);
    }
  return o;
}
function Ym(e) {
  if (e.indexOf("%") === -1) return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function Gm(e) {
  return Vm.call(e) === "[object Date]";
}
/**
 * react-router v7.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var $a = "popstate";
function Jm(e = {}) {
  function t(r, l) {
    let { pathname: o, search: i, hash: u } = r.location;
    return ou(
      "",
      { pathname: o, search: i, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : Br(l);
  }
  return qm(t, n, null, e);
}
function J(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Xt(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Zm() {
  return Math.random().toString(36).substring(2, 10);
}
function Aa(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ou(e, t, n = null, r) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...(typeof t == "string" ? Jn(t) : t),
    state: n,
    key: (t && t.key) || r || Zm(),
  };
}
function Br({ pathname: e = "/", search: t = "", hash: n = "" }) {
  return (
    t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t),
    n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n),
    e
  );
}
function Jn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function qm(e, t, n, r = {}) {
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = "POP",
    s = null,
    a = p();
  a == null && ((a = 0), i.replaceState({ ...i.state, idx: a }, ""));
  function p() {
    return (i.state || { idx: null }).idx;
  }
  function m() {
    u = "POP";
    let S = p(),
      d = S == null ? null : S - a;
    (a = S), s && s({ action: u, location: E.location, delta: d });
  }
  function h(S, d) {
    u = "PUSH";
    let f = ou(E.location, S, d);
    a = p() + 1;
    let v = Aa(f, a),
      x = E.createHref(f);
    try {
      i.pushState(v, "", x);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      l.location.assign(x);
    }
    o && s && s({ action: u, location: E.location, delta: 1 });
  }
  function y(S, d) {
    u = "REPLACE";
    let f = ou(E.location, S, d);
    a = p();
    let v = Aa(f, a),
      x = E.createHref(f);
    i.replaceState(v, "", x),
      o && s && s({ action: u, location: E.location, delta: 0 });
  }
  function w(S) {
    let d = l.location.origin !== "null" ? l.location.origin : l.location.href,
      f = typeof S == "string" ? S : Br(S);
    return (
      (f = f.replace(/ $/, "%20")),
      J(
        d,
        `No window.location.(origin|href) available to create URL for href: ${f}`
      ),
      new URL(f, d)
    );
  }
  let E = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(S) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener($a, m),
        (s = S),
        () => {
          l.removeEventListener($a, m), (s = null);
        }
      );
    },
    createHref(S) {
      return t(l, S);
    },
    createURL: w,
    encodeLocation(S) {
      let d = w(S);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: h,
    replace: y,
    go(S) {
      return i.go(S);
    },
  };
  return E;
}
function yd(e, t, n = "/") {
  return bm(e, t, n, !1);
}
function bm(e, t, n, r) {
  let l = typeof t == "string" ? Jn(t) : t,
    o = Wt(l.pathname || "/", n);
  if (o == null) return null;
  let i = wd(e);
  ev(i);
  let u = null;
  for (let s = 0; u == null && s < i.length; ++s) {
    let a = fv(o);
    u = av(i[s], a, r);
  }
  return u;
}
function wd(e, t = [], n = [], r = "") {
  let l = (o, i, u) => {
    let s = {
      relativePath: u === void 0 ? o.path || "" : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    s.relativePath.startsWith("/") &&
      (J(
        s.relativePath.startsWith(r),
        `Absolute route path "${s.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let a = ht([r, s.relativePath]),
      p = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (J(
        o.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${a}".`
      ),
      wd(o.children, t, p, a)),
      !(o.path == null && !o.index) &&
        t.push({ path: a, score: uv(a, o.index), routesMeta: p });
  };
  return (
    e.forEach((o, i) => {
      var u;
      if (o.path === "" || !((u = o.path) != null && u.includes("?"))) l(o, i);
      else for (let s of xd(o.path)) l(o, i, s);
    }),
    t
  );
}
function xd(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = xd(r.join("/")),
    u = [];
  return (
    u.push(...i.map((s) => (s === "" ? o : [o, s].join("/")))),
    l && u.push(...i),
    u.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function ev(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : sv(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
var tv = /^:[\w-]+$/,
  nv = 3,
  rv = 2,
  lv = 1,
  ov = 10,
  iv = -2,
  Ua = (e) => e === "*";
function uv(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Ua) && (r += iv),
    t && (r += rv),
    n
      .filter((l) => !Ua(l))
      .reduce((l, o) => l + (tv.test(o) ? nv : o === "" ? lv : ov), r)
  );
}
function sv(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function av(e, t, n = !1) {
  let { routesMeta: r } = e,
    l = {},
    o = "/",
    i = [];
  for (let u = 0; u < r.length; ++u) {
    let s = r[u],
      a = u === r.length - 1,
      p = o === "/" ? t : t.slice(o.length) || "/",
      m = lo(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: a },
        p
      ),
      h = s.route;
    if (
      (!m &&
        a &&
        n &&
        !r[r.length - 1].route.index &&
        (m = lo(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          p
        )),
      !m)
    )
      return null;
    Object.assign(l, m.params),
      i.push({
        params: l,
        pathname: ht([o, m.pathname]),
        pathnameBase: mv(ht([o, m.pathnameBase])),
        route: h,
      }),
      m.pathnameBase !== "/" && (o = ht([o, m.pathnameBase]));
  }
  return i;
}
function lo(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = cv(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((a, { paramName: p, isOptional: m }, h) => {
      if (p === "*") {
        let w = u[h] || "";
        i = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const y = u[h];
      return (
        m && !y ? (a[p] = void 0) : (a[p] = (y || "").replace(/%2F/g, "/")), a
      );
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function cv(e, t = !1, n = !0) {
  Xt(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, u, s) => (
            r.push({ paramName: u, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function fv(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Xt(
        !1,
        `The URL path "${e}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
      ),
      e
    );
  }
}
function Wt(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function dv(e, t = "/") {
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Jn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : pv(n, t)) : t,
    search: vv(r),
    hash: gv(l),
  };
}
function pv(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function li(e, t, n, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    r
  )}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function hv(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Ed(e) {
  let t = hv(e);
  return t.map((n, r) => (r === t.length - 1 ? n.pathname : n.pathnameBase));
}
function Sd(e, t, n, r = !1) {
  let l;
  typeof e == "string"
    ? (l = Jn(e))
    : ((l = { ...e }),
      J(
        !l.pathname || !l.pathname.includes("?"),
        li("?", "pathname", "search", l)
      ),
      J(
        !l.pathname || !l.pathname.includes("#"),
        li("#", "pathname", "hash", l)
      ),
      J(!l.search || !l.search.includes("#"), li("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    u;
  if (i == null) u = n;
  else {
    let m = t.length - 1;
    if (!r && i.startsWith("..")) {
      let h = i.split("/");
      for (; h[0] === ".."; ) h.shift(), (m -= 1);
      l.pathname = h.join("/");
    }
    u = m >= 0 ? t[m] : "/";
  }
  let s = dv(l, u),
    a = i && i !== "/" && i.endsWith("/"),
    p = (o || i === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (a || p) && (s.pathname += "/"), s;
}
var ht = (e) => e.join("/").replace(/\/\/+/g, "/"),
  mv = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  vv = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  gv = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function yv(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
var kd = ["POST", "PUT", "PATCH", "DELETE"];
new Set(kd);
var wv = ["GET", ...kd];
new Set(wv);
var Zn = c.createContext(null);
Zn.displayName = "DataRouter";
var To = c.createContext(null);
To.displayName = "DataRouterState";
var Cd = c.createContext({ isTransitioning: !1 });
Cd.displayName = "ViewTransition";
var xv = c.createContext(new Map());
xv.displayName = "Fetchers";
var Ev = c.createContext(null);
Ev.displayName = "Await";
var lt = c.createContext(null);
lt.displayName = "Navigation";
var Yr = c.createContext(null);
Yr.displayName = "Location";
var xt = c.createContext({ outlet: null, matches: [], isDataRoute: !1 });
xt.displayName = "Route";
var as = c.createContext(null);
as.displayName = "RouteError";
function Sv(e, { relative: t } = {}) {
  J(Gr(), "useHref() may be used only in the context of a <Router> component.");
  let { basename: n, navigator: r } = c.useContext(lt),
    { hash: l, pathname: o, search: i } = Jr(e, { relative: t }),
    u = o;
  return (
    n !== "/" && (u = o === "/" ? n : ht([n, o])),
    r.createHref({ pathname: u, search: i, hash: l })
  );
}
function Gr() {
  return c.useContext(Yr) != null;
}
function hn() {
  return (
    J(
      Gr(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    c.useContext(Yr).location
  );
}
var Nd =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Rd(e) {
  c.useContext(lt).static || c.useLayoutEffect(e);
}
function kv() {
  let { isDataRoute: e } = c.useContext(xt);
  return e ? Iv() : Cv();
}
function Cv() {
  J(
    Gr(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = c.useContext(Zn),
    { basename: t, navigator: n } = c.useContext(lt),
    { matches: r } = c.useContext(xt),
    { pathname: l } = hn(),
    o = JSON.stringify(Ed(r)),
    i = c.useRef(!1);
  return (
    Rd(() => {
      i.current = !0;
    }),
    c.useCallback(
      (s, a = {}) => {
        if ((Xt(i.current, Nd), !i.current)) return;
        if (typeof s == "number") {
          n.go(s);
          return;
        }
        let p = Sd(s, JSON.parse(o), l, a.relative === "path");
        e == null &&
          t !== "/" &&
          (p.pathname = p.pathname === "/" ? t : ht([t, p.pathname])),
          (a.replace ? n.replace : n.push)(p, a.state, a);
      },
      [t, n, o, l, e]
    )
  );
}
c.createContext(null);
function Jr(e, { relative: t } = {}) {
  let { matches: n } = c.useContext(xt),
    { pathname: r } = hn(),
    l = JSON.stringify(Ed(n));
  return c.useMemo(() => Sd(e, JSON.parse(l), r, t === "path"), [e, l, r, t]);
}
function Nv(e, t) {
  return Pd(e, t);
}
function Pd(e, t, n, r) {
  var E;
  J(
    Gr(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: l } = c.useContext(lt),
    { matches: o } = c.useContext(xt),
    i = o[o.length - 1],
    u = i ? i.params : {};
  i && i.pathname;
  let s = i ? i.pathnameBase : "/";
  i && i.route;
  let a = hn(),
    p;
  if (t) {
    let S = typeof t == "string" ? Jn(t) : t;
    J(
      s === "/" || ((E = S.pathname) == null ? void 0 : E.startsWith(s)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${s}" but pathname "${S.pathname}" was given in the \`location\` prop.`
    ),
      (p = S);
  } else p = a;
  let m = p.pathname || "/",
    h = m;
  if (s !== "/") {
    let S = s.replace(/^\//, "").split("/");
    h = "/" + m.replace(/^\//, "").split("/").slice(S.length).join("/");
  }
  let y = yd(e, { pathname: h }),
    w = jv(
      y &&
        y.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, u, S.params),
            pathname: ht([
              s,
              l.encodeLocation
                ? l.encodeLocation(S.pathname).pathname
                : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === "/"
                ? s
                : ht([
                    s,
                    l.encodeLocation
                      ? l.encodeLocation(S.pathnameBase).pathname
                      : S.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && w
    ? c.createElement(
        Yr.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...p,
            },
            navigationType: "POP",
          },
        },
        w
      )
    : w;
}
function Rv() {
  let e = zv(),
    t = yv(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return c.createElement(
    c.Fragment,
    null,
    c.createElement("h2", null, "Unexpected Application Error!"),
    c.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? c.createElement("pre", { style: l }, n) : null,
    null
  );
}
var Pv = c.createElement(Rv, null),
  Tv = class extends c.Component {
    constructor(e) {
      super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== "idle" && e.revalidation === "idle")
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(
        "React Router caught the following error during render",
        e,
        t
      );
    }
    render() {
      return this.state.error !== void 0
        ? c.createElement(
            xt.Provider,
            { value: this.props.routeContext },
            c.createElement(as.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function _v({ routeContext: e, match: t, children: n }) {
  let r = c.useContext(Zn);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = t.route.id),
    c.createElement(xt.Provider, { value: e }, n)
  );
}
function jv(e, t = [], n = null, r = null) {
  if (e == null) {
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (t.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else return null;
  }
  let l = e,
    o = n == null ? void 0 : n.errors;
  if (o != null) {
    let s = l.findIndex(
      (a) => a.route.id && (o == null ? void 0 : o[a.route.id]) !== void 0
    );
    J(
      s >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        o
      ).join(",")}`
    ),
      (l = l.slice(0, Math.min(l.length, s + 1)));
  }
  let i = !1,
    u = -1;
  if (n)
    for (let s = 0; s < l.length; s++) {
      let a = l[s];
      if (
        ((a.route.HydrateFallback || a.route.hydrateFallbackElement) && (u = s),
        a.route.id)
      ) {
        let { loaderData: p, errors: m } = n,
          h =
            a.route.loader &&
            !p.hasOwnProperty(a.route.id) &&
            (!m || m[a.route.id] === void 0);
        if (a.route.lazy || h) {
          (i = !0), u >= 0 ? (l = l.slice(0, u + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((s, a, p) => {
    let m,
      h = !1,
      y = null,
      w = null;
    n &&
      ((m = o && a.route.id ? o[a.route.id] : void 0),
      (y = a.route.errorElement || Pv),
      i &&
        (u < 0 && p === 0
          ? (Fv(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (h = !0),
            (w = null))
          : u === p &&
            ((h = !0), (w = a.route.hydrateFallbackElement || null))));
    let E = t.concat(l.slice(0, p + 1)),
      S = () => {
        let d;
        return (
          m
            ? (d = y)
            : h
            ? (d = w)
            : a.route.Component
            ? (d = c.createElement(a.route.Component, null))
            : a.route.element
            ? (d = a.route.element)
            : (d = s),
          c.createElement(_v, {
            match: a,
            routeContext: { outlet: s, matches: E, isDataRoute: n != null },
            children: d,
          })
        );
      };
    return n && (a.route.ErrorBoundary || a.route.errorElement || p === 0)
      ? c.createElement(Tv, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: m,
          children: S(),
          routeContext: { outlet: null, matches: E, isDataRoute: !0 },
        })
      : S();
  }, null);
}
function cs(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Lv(e) {
  let t = c.useContext(Zn);
  return J(t, cs(e)), t;
}
function Ov(e) {
  let t = c.useContext(To);
  return J(t, cs(e)), t;
}
function Mv(e) {
  let t = c.useContext(xt);
  return J(t, cs(e)), t;
}
function fs(e) {
  let t = Mv(e),
    n = t.matches[t.matches.length - 1];
  return (
    J(n.route.id, `${e} can only be used on routes that contain a unique "id"`),
    n.route.id
  );
}
function Dv() {
  return fs("useRouteId");
}
function zv() {
  var r;
  let e = c.useContext(as),
    t = Ov("useRouteError"),
    n = fs("useRouteError");
  return e !== void 0 ? e : (r = t.errors) == null ? void 0 : r[n];
}
function Iv() {
  let { router: e } = Lv("useNavigate"),
    t = fs("useNavigate"),
    n = c.useRef(!1);
  return (
    Rd(() => {
      n.current = !0;
    }),
    c.useCallback(
      async (l, o = {}) => {
        Xt(n.current, Nd),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : await e.navigate(l, { fromRouteId: t, ...o }));
      },
      [e, t]
    )
  );
}
var Ba = {};
function Fv(e, t, n) {
  Ba[e] || ((Ba[e] = !0), Xt(!1, n));
}
c.memo($v);
function $v({ routes: e, future: t, state: n }) {
  return Pd(e, void 0, n, t);
}
function Ll(e) {
  J(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Av({
  basename: e = "/",
  children: t = null,
  location: n,
  navigationType: r = "POP",
  navigator: l,
  static: o = !1,
}) {
  J(
    !Gr(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let i = e.replace(/^\/*/, "/"),
    u = c.useMemo(
      () => ({ basename: i, navigator: l, static: o, future: {} }),
      [i, l, o]
    );
  typeof n == "string" && (n = Jn(n));
  let {
      pathname: s = "/",
      search: a = "",
      hash: p = "",
      state: m = null,
      key: h = "default",
    } = n,
    y = c.useMemo(() => {
      let w = Wt(s, i);
      return w == null
        ? null
        : {
            location: { pathname: w, search: a, hash: p, state: m, key: h },
            navigationType: r,
          };
    }, [i, s, a, p, m, h, r]);
  return (
    Xt(
      y != null,
      `<Router basename="${i}"> is not able to match the URL "${s}${a}${p}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    y == null
      ? null
      : c.createElement(
          lt.Provider,
          { value: u },
          c.createElement(Yr.Provider, { children: t, value: y })
        )
  );
}
function Uv({ children: e, location: t }) {
  return Nv(iu(e), t);
}
function iu(e, t = []) {
  let n = [];
  return (
    c.Children.forEach(e, (r, l) => {
      if (!c.isValidElement(r)) return;
      let o = [...t, l];
      if (r.type === c.Fragment) {
        n.push.apply(n, iu(r.props.children, o));
        return;
      }
      J(
        r.type === Ll,
        `[${
          typeof r.type == "string" ? r.type : r.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        J(
          !r.props.index || !r.props.children,
          "An index route cannot have child routes."
        );
      let i = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        hydrateFallbackElement: r.props.hydrateFallbackElement,
        HydrateFallback: r.props.HydrateFallback,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.hasErrorBoundary === !0 ||
          r.props.ErrorBoundary != null ||
          r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = iu(r.props.children, o)), n.push(i);
    }),
    n
  );
}
var Ol = "get",
  Ml = "application/x-www-form-urlencoded";
function _o(e) {
  return e != null && typeof e.tagName == "string";
}
function Bv(e) {
  return _o(e) && e.tagName.toLowerCase() === "button";
}
function Hv(e) {
  return _o(e) && e.tagName.toLowerCase() === "form";
}
function Wv(e) {
  return _o(e) && e.tagName.toLowerCase() === "input";
}
function Vv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Kv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Vv(e);
}
var vl = null;
function Qv() {
  if (vl === null)
    try {
      new FormData(document.createElement("form"), 0), (vl = !1);
    } catch {
      vl = !0;
    }
  return vl;
}
var Xv = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function oi(e) {
  return e != null && !Xv.has(e)
    ? (Xt(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ml}"`
      ),
      null)
    : e;
}
function Yv(e, t) {
  let n, r, l, o, i;
  if (Hv(e)) {
    let u = e.getAttribute("action");
    (r = u ? Wt(u, t) : null),
      (n = e.getAttribute("method") || Ol),
      (l = oi(e.getAttribute("enctype")) || Ml),
      (o = new FormData(e));
  } else if (Bv(e) || (Wv(e) && (e.type === "submit" || e.type === "image"))) {
    let u = e.form;
    if (u == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let s = e.getAttribute("formaction") || u.getAttribute("action");
    if (
      ((r = s ? Wt(s, t) : null),
      (n = e.getAttribute("formmethod") || u.getAttribute("method") || Ol),
      (l =
        oi(e.getAttribute("formenctype")) ||
        oi(u.getAttribute("enctype")) ||
        Ml),
      (o = new FormData(u, e)),
      !Qv())
    ) {
      let { name: a, type: p, value: m } = e;
      if (p === "image") {
        let h = a ? `${a}.` : "";
        o.append(`${h}x`, "0"), o.append(`${h}y`, "0");
      } else a && o.append(a, m);
    }
  } else {
    if (_o(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (n = Ol), (r = null), (l = Ml), (i = e);
  }
  return (
    o && l === "text/plain" && ((i = o), (o = void 0)),
    { action: r, method: n.toLowerCase(), encType: l, formData: o, body: i }
  );
}
function ds(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
async function Gv(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let n = await import(e.module);
    return (t[e.id] = n), n;
  } catch (n) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`
      ),
      console.error(n),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Jv(e) {
  return e == null
    ? !1
    : e.href == null
    ? e.rel === "preload" &&
      typeof e.imageSrcSet == "string" &&
      typeof e.imageSizes == "string"
    : typeof e.rel == "string" && typeof e.href == "string";
}
async function Zv(e, t, n) {
  let r = await Promise.all(
    e.map(async (l) => {
      let o = t.routes[l.route.id];
      if (o) {
        let i = await Gv(o, n);
        return i.links ? i.links() : [];
      }
      return [];
    })
  );
  return tg(
    r
      .flat(1)
      .filter(Jv)
      .filter((l) => l.rel === "stylesheet" || l.rel === "preload")
      .map((l) =>
        l.rel === "stylesheet"
          ? { ...l, rel: "prefetch", as: "style" }
          : { ...l, rel: "prefetch" }
      )
  );
}
function Ha(e, t, n, r, l, o) {
  let i = (s, a) => (n[a] ? s.route.id !== n[a].route.id : !0),
    u = (s, a) => {
      var p;
      return (
        n[a].pathname !== s.pathname ||
        (((p = n[a].route.path) == null ? void 0 : p.endsWith("*")) &&
          n[a].params["*"] !== s.params["*"])
      );
    };
  return o === "assets"
    ? t.filter((s, a) => i(s, a) || u(s, a))
    : o === "data"
    ? t.filter((s, a) => {
        var m;
        let p = r.routes[s.route.id];
        if (!p || !p.hasLoader) return !1;
        if (i(s, a) || u(s, a)) return !0;
        if (s.route.shouldRevalidate) {
          let h = s.route.shouldRevalidate({
            currentUrl: new URL(l.pathname + l.search + l.hash, window.origin),
            currentParams: ((m = n[0]) == null ? void 0 : m.params) || {},
            nextUrl: new URL(e, window.origin),
            nextParams: s.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof h == "boolean") return h;
        }
        return !0;
      })
    : [];
}
function qv(e, t) {
  return bv(
    e
      .map((n) => {
        let r = t.routes[n.route.id];
        if (!r) return [];
        let l = [r.module];
        return r.imports && (l = l.concat(r.imports)), l;
      })
      .flat(1)
  );
}
function bv(e) {
  return [...new Set(e)];
}
function eg(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t;
}
function tg(e, t) {
  let n = new Set();
  return (
    new Set(t),
    e.reduce((r, l) => {
      let o = JSON.stringify(eg(l));
      return n.has(o) || (n.add(o), r.push({ key: o, link: l })), r;
    }, [])
  );
}
function ng(e) {
  let t =
    typeof e == "string"
      ? new URL(
          e,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : e;
  return (
    t.pathname === "/"
      ? (t.pathname = "_root.data")
      : (t.pathname = `${t.pathname.replace(/\/$/, "")}.data`),
    t
  );
}
function rg() {
  let e = c.useContext(Zn);
  return (
    ds(
      e,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    e
  );
}
function lg() {
  let e = c.useContext(To);
  return (
    ds(
      e,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    e
  );
}
var ps = c.createContext(void 0);
ps.displayName = "FrameworkContext";
function Td() {
  let e = c.useContext(ps);
  return (
    ds(e, "You must render this element inside a <HydratedRouter> element"), e
  );
}
function og(e, t) {
  let n = c.useContext(ps),
    [r, l] = c.useState(!1),
    [o, i] = c.useState(!1),
    {
      onFocus: u,
      onBlur: s,
      onMouseEnter: a,
      onMouseLeave: p,
      onTouchStart: m,
    } = t,
    h = c.useRef(null);
  c.useEffect(() => {
    if ((e === "render" && i(!0), e === "viewport")) {
      let E = (d) => {
          d.forEach((f) => {
            i(f.isIntersecting);
          });
        },
        S = new IntersectionObserver(E, { threshold: 0.5 });
      return (
        h.current && S.observe(h.current),
        () => {
          S.disconnect();
        }
      );
    }
  }, [e]),
    c.useEffect(() => {
      if (r) {
        let E = setTimeout(() => {
          i(!0);
        }, 100);
        return () => {
          clearTimeout(E);
        };
      }
    }, [r]);
  let y = () => {
      l(!0);
    },
    w = () => {
      l(!1), i(!1);
    };
  return n
    ? e !== "intent"
      ? [o, h, {}]
      : [
          o,
          h,
          {
            onFocus: ar(u, y),
            onBlur: ar(s, w),
            onMouseEnter: ar(a, y),
            onMouseLeave: ar(p, w),
            onTouchStart: ar(m, y),
          },
        ]
    : [!1, h, {}];
}
function ar(e, t) {
  return (n) => {
    e && e(n), n.defaultPrevented || t(n);
  };
}
function ig({ page: e, ...t }) {
  let { router: n } = rg(),
    r = c.useMemo(() => yd(n.routes, e, n.basename), [n.routes, e, n.basename]);
  return r
    ? c.createElement(sg, { page: e, matches: r, ...t })
    : (console.warn(`Tried to prefetch ${e} but no routes matched.`), null);
}
function ug(e) {
  let { manifest: t, routeModules: n } = Td(),
    [r, l] = c.useState([]);
  return (
    c.useEffect(() => {
      let o = !1;
      return (
        Zv(e, t, n).then((i) => {
          o || l(i);
        }),
        () => {
          o = !0;
        }
      );
    }, [e, t, n]),
    r
  );
}
function sg({ page: e, matches: t, ...n }) {
  let r = hn(),
    { manifest: l, routeModules: o } = Td(),
    { loaderData: i, matches: u } = lg(),
    s = c.useMemo(() => Ha(e, t, u, l, r, "data"), [e, t, u, l, r]),
    a = c.useMemo(() => Ha(e, t, u, l, r, "assets"), [e, t, u, l, r]),
    p = c.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let y = new Set(),
        w = !1;
      if (
        (t.forEach((S) => {
          var f;
          let d = l.routes[S.route.id];
          !d ||
            !d.hasLoader ||
            ((!s.some((v) => v.route.id === S.route.id) &&
              S.route.id in i &&
              (f = o[S.route.id]) != null &&
              f.shouldRevalidate) ||
            d.hasClientLoader
              ? (w = !0)
              : y.add(S.route.id));
        }),
        y.size === 0)
      )
        return [];
      let E = ng(e);
      return (
        w &&
          y.size > 0 &&
          E.searchParams.set(
            "_routes",
            t
              .filter((S) => y.has(S.route.id))
              .map((S) => S.route.id)
              .join(",")
          ),
        [E.pathname + E.search]
      );
    }, [i, r, l, s, t, e, o]),
    m = c.useMemo(() => qv(a, l), [a, l]),
    h = ug(a);
  return c.createElement(
    c.Fragment,
    null,
    p.map((y) =>
      c.createElement("link", {
        key: y,
        rel: "prefetch",
        as: "fetch",
        href: y,
        ...n,
      })
    ),
    m.map((y) =>
      c.createElement("link", { key: y, rel: "modulepreload", href: y, ...n })
    ),
    h.map(({ key: y, link: w }) => c.createElement("link", { key: y, ...w }))
  );
}
function ag(...e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
var _d =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  _d && (window.__reactRouterVersion = "7.0.1");
} catch {}
function cg({ basename: e, children: t, window: n }) {
  let r = c.useRef();
  r.current == null && (r.current = Jm({ window: n, v5Compat: !0 }));
  let l = r.current,
    [o, i] = c.useState({ action: l.action, location: l.location }),
    u = c.useCallback(
      (s) => {
        c.startTransition(() => i(s));
      },
      [i]
    );
  return (
    c.useLayoutEffect(() => l.listen(u), [l, u]),
    c.createElement(Av, {
      basename: e,
      children: t,
      location: o.location,
      navigationType: o.action,
      navigator: l,
    })
  );
}
var jd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Re = c.forwardRef(function (
    {
      onClick: t,
      discover: n = "render",
      prefetch: r = "none",
      relative: l,
      reloadDocument: o,
      replace: i,
      state: u,
      target: s,
      to: a,
      preventScrollReset: p,
      viewTransition: m,
      ...h
    },
    y
  ) {
    let { basename: w } = c.useContext(lt),
      E = typeof a == "string" && jd.test(a),
      S,
      d = !1;
    if (typeof a == "string" && E && ((S = a), _d))
      try {
        let D = new URL(window.location.href),
          L = a.startsWith("//") ? new URL(D.protocol + a) : new URL(a),
          te = Wt(L.pathname, w);
        L.origin === D.origin && te != null
          ? (a = te + L.search + L.hash)
          : (d = !0);
      } catch {
        Xt(
          !1,
          `<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let f = Sv(a, { relative: l }),
      [v, x, C] = og(r, h),
      R = hg(a, {
        replace: i,
        state: u,
        target: s,
        preventScrollReset: p,
        relative: l,
        viewTransition: m,
      });
    function P(D) {
      t && t(D), D.defaultPrevented || R(D);
    }
    let T = c.createElement("a", {
      ...h,
      ...C,
      href: S || f,
      onClick: d || o ? t : P,
      ref: ag(y, x),
      target: s,
      "data-discover": !E && n === "render" ? "true" : void 0,
    });
    return v && !E
      ? c.createElement(c.Fragment, null, T, c.createElement(ig, { page: f }))
      : T;
  });
Re.displayName = "Link";
var fg = c.forwardRef(function (
  {
    "aria-current": t = "page",
    caseSensitive: n = !1,
    className: r = "",
    end: l = !1,
    style: o,
    to: i,
    viewTransition: u,
    children: s,
    ...a
  },
  p
) {
  let m = Jr(i, { relative: a.relative }),
    h = hn(),
    y = c.useContext(To),
    { navigator: w, basename: E } = c.useContext(lt),
    S = y != null && wg(m) && u === !0,
    d = w.encodeLocation ? w.encodeLocation(m).pathname : m.pathname,
    f = h.pathname,
    v =
      y && y.navigation && y.navigation.location
        ? y.navigation.location.pathname
        : null;
  n ||
    ((f = f.toLowerCase()),
    (v = v ? v.toLowerCase() : null),
    (d = d.toLowerCase())),
    v && E && (v = Wt(v, E) || v);
  const x = d !== "/" && d.endsWith("/") ? d.length - 1 : d.length;
  let C = f === d || (!l && f.startsWith(d) && f.charAt(x) === "/"),
    R =
      v != null &&
      (v === d || (!l && v.startsWith(d) && v.charAt(d.length) === "/")),
    P = { isActive: C, isPending: R, isTransitioning: S },
    T = C ? t : void 0,
    D;
  typeof r == "function"
    ? (D = r(P))
    : (D = [
        r,
        C ? "active" : null,
        R ? "pending" : null,
        S ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let L = typeof o == "function" ? o(P) : o;
  return c.createElement(
    Re,
    {
      ...a,
      "aria-current": T,
      className: D,
      ref: p,
      style: L,
      to: i,
      viewTransition: u,
    },
    typeof s == "function" ? s(P) : s
  );
});
fg.displayName = "NavLink";
var dg = c.forwardRef(
  (
    {
      discover: e = "render",
      fetcherKey: t,
      navigate: n,
      reloadDocument: r,
      replace: l,
      state: o,
      method: i = Ol,
      action: u,
      onSubmit: s,
      relative: a,
      preventScrollReset: p,
      viewTransition: m,
      ...h
    },
    y
  ) => {
    let w = gg(),
      E = yg(u, { relative: a }),
      S = i.toLowerCase() === "get" ? "get" : "post",
      d = typeof u == "string" && jd.test(u),
      f = (v) => {
        if ((s && s(v), v.defaultPrevented)) return;
        v.preventDefault();
        let x = v.nativeEvent.submitter,
          C = (x == null ? void 0 : x.getAttribute("formmethod")) || i;
        w(x || v.currentTarget, {
          fetcherKey: t,
          method: C,
          navigate: n,
          replace: l,
          state: o,
          relative: a,
          preventScrollReset: p,
          viewTransition: m,
        });
      };
    return c.createElement("form", {
      ref: y,
      method: S,
      action: E,
      onSubmit: r ? s : f,
      ...h,
      "data-discover": !d && e === "render" ? "true" : void 0,
    });
  }
);
dg.displayName = "Form";
function pg(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ld(e) {
  let t = c.useContext(Zn);
  return J(t, pg(e)), t;
}
function hg(
  e,
  {
    target: t,
    replace: n,
    state: r,
    preventScrollReset: l,
    relative: o,
    viewTransition: i,
  } = {}
) {
  let u = kv(),
    s = hn(),
    a = Jr(e, { relative: o });
  return c.useCallback(
    (p) => {
      if (Kv(p, t)) {
        p.preventDefault();
        let m = n !== void 0 ? n : Br(s) === Br(a);
        u(e, {
          replace: m,
          state: r,
          preventScrollReset: l,
          relative: o,
          viewTransition: i,
        });
      }
    },
    [s, u, a, n, r, t, e, l, o, i]
  );
}
var mg = 0,
  vg = () => `__${String(++mg)}__`;
function gg() {
  let { router: e } = Ld("useSubmit"),
    { basename: t } = c.useContext(lt),
    n = Dv();
  return c.useCallback(
    async (r, l = {}) => {
      let { action: o, method: i, encType: u, formData: s, body: a } = Yv(r, t);
      if (l.navigate === !1) {
        let p = l.fetcherKey || vg();
        await e.fetch(p, n, l.action || o, {
          preventScrollReset: l.preventScrollReset,
          formData: s,
          body: a,
          formMethod: l.method || i,
          formEncType: l.encType || u,
          flushSync: l.flushSync,
        });
      } else
        await e.navigate(l.action || o, {
          preventScrollReset: l.preventScrollReset,
          formData: s,
          body: a,
          formMethod: l.method || i,
          formEncType: l.encType || u,
          replace: l.replace,
          state: l.state,
          fromRouteId: n,
          flushSync: l.flushSync,
          viewTransition: l.viewTransition,
        });
    },
    [e, t, n]
  );
}
function yg(e, { relative: t } = {}) {
  let { basename: n } = c.useContext(lt),
    r = c.useContext(xt);
  J(r, "useFormAction must be used inside a RouteContext");
  let [l] = r.matches.slice(-1),
    o = { ...Jr(e || ".", { relative: t }) },
    i = hn();
  if (e == null) {
    o.search = i.search;
    let u = new URLSearchParams(o.search),
      s = u.getAll("index");
    if (s.some((p) => p === "")) {
      u.delete("index"),
        s.filter((m) => m).forEach((m) => u.append("index", m));
      let p = u.toString();
      o.search = p ? `?${p}` : "";
    }
  }
  return (
    (!e || e === ".") &&
      l.route.index &&
      (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"),
    n !== "/" && (o.pathname = o.pathname === "/" ? n : ht([n, o.pathname])),
    Br(o)
  );
}
function wg(e, t = {}) {
  let n = c.useContext(Cd);
  J(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: r } = Ld("useViewTransitionState"),
    l = Jr(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let o = Wt(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    i = Wt(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return lo(l.pathname, i) != null || lo(l.pathname, o) != null;
}
new TextEncoder();
var Od = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var o = "", i = 0; i < arguments.length; i++) {
        var u = arguments[i];
        u && (o = l(o, r(u)));
      }
      return o;
    }
    function r(o) {
      if (typeof o == "string" || typeof o == "number") return o;
      if (typeof o != "object") return "";
      if (Array.isArray(o)) return n.apply(null, o);
      if (
        o.toString !== Object.prototype.toString &&
        !o.toString.toString().includes("[native code]")
      )
        return o.toString();
      var i = "";
      for (var u in o) t.call(o, u) && o[u] && (i = l(i, u));
      return i;
    }
    function l(o, i) {
      return i ? (o ? o + " " + i : o + i) : o;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(Od);
var xg = Od.exports;
const we = co(xg),
  Eg = ["as", "disabled"];
function Sg(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function kg(e) {
  return !e || e.trim() === "#";
}
function hs({
  tagName: e,
  disabled: t,
  href: n,
  target: r,
  rel: l,
  role: o,
  onClick: i,
  tabIndex: u = 0,
  type: s,
}) {
  e || (n != null || r != null || l != null ? (e = "a") : (e = "button"));
  const a = { tagName: e };
  if (e === "button") return [{ type: s || "button", disabled: t }, a];
  const p = (h) => {
      if (((t || (e === "a" && kg(n))) && h.preventDefault(), t)) {
        h.stopPropagation();
        return;
      }
      i == null || i(h);
    },
    m = (h) => {
      h.key === " " && (h.preventDefault(), p(h));
    };
  return (
    e === "a" && (n || (n = "#"), t && (n = void 0)),
    [
      {
        role: o ?? "button",
        disabled: void 0,
        tabIndex: t ? void 0 : u,
        href: n,
        target: e === "a" ? r : void 0,
        "aria-disabled": t || void 0,
        rel: e === "a" ? l : void 0,
        onClick: p,
        onKeyDown: m,
      },
      a,
    ]
  );
}
const Cg = c.forwardRef((e, t) => {
  let { as: n, disabled: r } = e,
    l = Sg(e, Eg);
  const [o, { tagName: i }] = hs(Object.assign({ tagName: n, disabled: r }, l));
  return g.jsx(i, Object.assign({}, l, o, { ref: t }));
});
Cg.displayName = "Button";
const Ng = ["xxl", "xl", "lg", "md", "sm", "xs"],
  Rg = "xs",
  Md = c.createContext({ prefixes: {}, breakpoints: Ng, minBreakpoint: Rg });
function Et(e, t) {
  const { prefixes: n } = c.useContext(Md);
  return e || n[t] || t;
}
function Pg() {
  const { dir: e } = c.useContext(Md);
  return e === "rtl";
}
const Dd = c.forwardRef(
  (
    {
      as: e,
      bsPrefix: t,
      variant: n = "primary",
      size: r,
      active: l = !1,
      disabled: o = !1,
      className: i,
      ...u
    },
    s
  ) => {
    const a = Et(t, "btn"),
      [p, { tagName: m }] = hs({ tagName: e, disabled: o, ...u }),
      h = m;
    return g.jsx(h, {
      ...p,
      ...u,
      ref: s,
      disabled: o,
      className: we(
        i,
        a,
        l && "active",
        n && `${a}-${n}`,
        r && `${a}-${r}`,
        u.href && o && "disabled"
      ),
    });
  }
);
Dd.displayName = "Button";
const Tg =
    typeof global < "u" &&
    global.navigator &&
    global.navigator.product === "ReactNative",
  _g = typeof document < "u",
  jg = _g || Tg ? c.useLayoutEffect : c.useEffect,
  uu = new WeakMap(),
  Wa = (e, t) => {
    if (!e || !t) return;
    const n = uu.get(t) || new Map();
    uu.set(t, n);
    let r = n.get(e);
    return r || ((r = t.matchMedia(e)), (r.refCount = 0), n.set(r.media, r)), r;
  };
function Lg(e, t = typeof window > "u" ? void 0 : window) {
  const n = Wa(e, t),
    [r, l] = c.useState(() => (n ? n.matches : !1));
  return (
    jg(() => {
      let o = Wa(e, t);
      if (!o) return l(!1);
      let i = uu.get(t);
      const u = () => {
        l(o.matches);
      };
      return (
        o.refCount++,
        o.addListener(u),
        u(),
        () => {
          o.removeListener(u),
            o.refCount--,
            o.refCount <= 0 && (i == null || i.delete(o.media)),
            (o = void 0);
        }
      );
    }, [e]),
    r
  );
}
function Og(e) {
  const t = Object.keys(e);
  function n(u, s) {
    return u === s ? s : u ? `${u} and ${s}` : s;
  }
  function r(u) {
    return t[Math.min(t.indexOf(u) + 1, t.length - 1)];
  }
  function l(u) {
    const s = r(u);
    let a = e[s];
    return (
      typeof a == "number" ? (a = `${a - 0.2}px`) : (a = `calc(${a} - 0.2px)`),
      `(max-width: ${a})`
    );
  }
  function o(u) {
    let s = e[u];
    return typeof s == "number" && (s = `${s}px`), `(min-width: ${s})`;
  }
  function i(u, s, a) {
    let p;
    typeof u == "object"
      ? ((p = u), (a = s), (s = !0))
      : ((s = s || !0), (p = { [u]: s }));
    let m = c.useMemo(
      () =>
        Object.entries(p).reduce(
          (h, [y, w]) => (
            (w === "up" || w === !0) && (h = n(h, o(y))),
            (w === "down" || w === !0) && (h = n(h, l(y))),
            h
          ),
          ""
        ),
      [JSON.stringify(p)]
    );
    return Lg(m, a);
  }
  return i;
}
const Mg = Og({ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 });
function zd(e) {
  const t = c.useRef(e);
  return (
    c.useEffect(() => {
      t.current = e;
    }, [e]),
    t
  );
}
function oo(e) {
  const t = zd(e);
  return c.useCallback(
    function (...n) {
      return t.current && t.current(...n);
    },
    [t]
  );
}
function ms(e) {
  return (e && e.ownerDocument) || document;
}
function ii(e) {
  e === void 0 && (e = ms());
  try {
    var t = e.activeElement;
    return !t || !t.nodeName ? null : t;
  } catch {
    return e.body;
  }
}
function Va(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition)
    return e === t || !!(e.compareDocumentPosition(t) & 16);
}
const jo = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
var su = !1,
  au = !1;
try {
  var ui = {
    get passive() {
      return (su = !0);
    },
    get once() {
      return (au = su = !0);
    },
  };
  jo &&
    (window.addEventListener("test", ui, ui),
    window.removeEventListener("test", ui, !0));
} catch {}
function Dg(e, t, n, r) {
  if (r && typeof r != "boolean" && !au) {
    var l = r.once,
      o = r.capture,
      i = n;
    !au &&
      l &&
      ((i =
        n.__once ||
        function u(s) {
          this.removeEventListener(t, u, o), n.call(this, s);
        }),
      (n.__once = i)),
      e.addEventListener(t, i, su ? r : o);
  }
  e.addEventListener(t, n, r);
}
function zg(e, t, n, r) {
  var l = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, l),
    n.__once && e.removeEventListener(t, n.__once, l);
}
function io(e, t, n, r) {
  return (
    Dg(e, t, n, r),
    function () {
      zg(e, t, n, r);
    }
  );
}
function Ig() {
  const e = c.useRef(!0),
    t = c.useRef(() => e.current);
  return (
    c.useEffect(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    t.current
  );
}
function Fg(e) {
  const t = c.useRef(e);
  return (t.current = e), t;
}
function $g(e) {
  const t = Fg(e);
  c.useEffect(() => () => t.current(), []);
}
function Ag(e) {
  const t = c.useRef(null);
  return (
    c.useEffect(() => {
      t.current = e;
    }),
    t.current
  );
}
function Ug(e) {
  const t = c.useRef(e);
  return (
    c.useEffect(() => {
      t.current = e;
    }, [e]),
    t
  );
}
function _t(e) {
  const t = Ug(e);
  return c.useCallback(
    function (...n) {
      return t.current && t.current(...n);
    },
    [t]
  );
}
function Bg(e) {
  var t = ms(e);
  return (t && t.defaultView) || window;
}
function Hg(e, t) {
  return Bg(e).getComputedStyle(e, t);
}
var Wg = /([A-Z])/g;
function Vg(e) {
  return e.replace(Wg, "-$1").toLowerCase();
}
var Kg = /^ms-/;
function gl(e) {
  return Vg(e).replace(Kg, "-ms-");
}
var Qg =
  /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function Xg(e) {
  return !!(e && Qg.test(e));
}
function on(e, t) {
  var n = "",
    r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(gl(t)) || Hg(e).getPropertyValue(gl(t));
  Object.keys(t).forEach(function (l) {
    var o = t[l];
    !o && o !== 0
      ? e.style.removeProperty(gl(l))
      : Xg(l)
      ? (r += l + "(" + o + ") ")
      : (n += gl(l) + ": " + o + ";");
  }),
    r && (n += "transform: " + r + ";"),
    (e.style.cssText += ";" + n);
}
const Yg = "data-rr-ui-";
function Gg(e) {
  return `${Yg}${e}`;
}
function Jg(e = document) {
  const t = e.defaultView;
  return Math.abs(t.innerWidth - e.documentElement.clientWidth);
}
const Ka = Gg("modal-open");
class vs {
  constructor({
    ownerDocument: t,
    handleContainerOverflow: n = !0,
    isRTL: r = !1,
  } = {}) {
    (this.handleContainerOverflow = n),
      (this.isRTL = r),
      (this.modals = []),
      (this.ownerDocument = t);
  }
  getScrollbarWidth() {
    return Jg(this.ownerDocument);
  }
  getElement() {
    return (this.ownerDocument || document).body;
  }
  setModalAttributes(t) {}
  removeModalAttributes(t) {}
  setContainerStyle(t) {
    const n = { overflow: "hidden" },
      r = this.isRTL ? "paddingLeft" : "paddingRight",
      l = this.getElement();
    (t.style = { overflow: l.style.overflow, [r]: l.style[r] }),
      t.scrollBarWidth &&
        (n[r] = `${parseInt(on(l, r) || "0", 10) + t.scrollBarWidth}px`),
      l.setAttribute(Ka, ""),
      on(l, n);
  }
  reset() {
    [...this.modals].forEach((t) => this.remove(t));
  }
  removeContainerStyle(t) {
    const n = this.getElement();
    n.removeAttribute(Ka), Object.assign(n.style, t.style);
  }
  add(t) {
    let n = this.modals.indexOf(t);
    return (
      n !== -1 ||
        ((n = this.modals.length),
        this.modals.push(t),
        this.setModalAttributes(t),
        n !== 0) ||
        ((this.state = { scrollBarWidth: this.getScrollbarWidth(), style: {} }),
        this.handleContainerOverflow && this.setContainerStyle(this.state)),
      n
    );
  }
  remove(t) {
    const n = this.modals.indexOf(t);
    n !== -1 &&
      (this.modals.splice(n, 1),
      !this.modals.length &&
        this.handleContainerOverflow &&
        this.removeContainerStyle(this.state),
      this.removeModalAttributes(t));
  }
  isTopModal(t) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === t;
  }
}
const Id = c.createContext(jo ? window : void 0);
Id.Provider;
function gs() {
  return c.useContext(Id);
}
const si = (e, t) =>
  jo
    ? e == null
      ? (t || ms()).body
      : (typeof e == "function" && (e = e()),
        e && "current" in e && (e = e.current),
        e && ("nodeType" in e || e.getBoundingClientRect) ? e : null)
    : null;
function Zg(e, t) {
  const n = gs(),
    [r, l] = c.useState(() => si(e, n == null ? void 0 : n.document));
  if (!r) {
    const o = si(e);
    o && l(o);
  }
  return (
    c.useEffect(() => {}, [t, r]),
    c.useEffect(() => {
      const o = si(e);
      o !== r && l(o);
    }, [e, r]),
    r
  );
}
const Qa = (e) =>
  !e || typeof e == "function"
    ? e
    : (t) => {
        e.current = t;
      };
function qg(e, t) {
  const n = Qa(e),
    r = Qa(t);
  return (l) => {
    n && n(l), r && r(l);
  };
}
function ys(e, t) {
  return c.useMemo(() => qg(e, t), [e, t]);
}
const bg =
    typeof global < "u" &&
    global.navigator &&
    global.navigator.product === "ReactNative",
  ey = typeof document < "u",
  Xa = ey || bg ? c.useLayoutEffect : c.useEffect;
function ty({
  children: e,
  in: t,
  onExited: n,
  mountOnEnter: r,
  unmountOnExit: l,
}) {
  const o = c.useRef(null),
    i = c.useRef(t),
    u = _t(n);
  c.useEffect(() => {
    t ? (i.current = !0) : u(o.current);
  }, [t, u]);
  const s = ys(o, e.ref),
    a = c.cloneElement(e, { ref: s });
  return t ? a : l || (!i.current && r) ? null : a;
}
function ny(e) {
  return e.code === "Escape" || e.keyCode === 27;
}
function ry() {
  const e = c.version.split(".");
  return { major: +e[0], minor: +e[1], patch: +e[2] };
}
function ws(e) {
  if (!e || typeof e == "function") return null;
  const { major: t } = ry();
  return t >= 19 ? e.props.ref : e.ref;
}
const ly = [
  "onEnter",
  "onEntering",
  "onEntered",
  "onExit",
  "onExiting",
  "onExited",
  "addEndListener",
  "children",
];
function oy(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function iy(e) {
  let {
      onEnter: t,
      onEntering: n,
      onEntered: r,
      onExit: l,
      onExiting: o,
      onExited: i,
      addEndListener: u,
      children: s,
    } = e,
    a = oy(e, ly);
  const p = c.useRef(null),
    m = ys(p, ws(s)),
    h = (x) => (C) => {
      x && p.current && x(p.current, C);
    },
    y = c.useCallback(h(t), [t]),
    w = c.useCallback(h(n), [n]),
    E = c.useCallback(h(r), [r]),
    S = c.useCallback(h(l), [l]),
    d = c.useCallback(h(o), [o]),
    f = c.useCallback(h(i), [i]),
    v = c.useCallback(h(u), [u]);
  return Object.assign(
    {},
    a,
    { nodeRef: p },
    t && { onEnter: y },
    n && { onEntering: w },
    r && { onEntered: E },
    l && { onExit: S },
    o && { onExiting: d },
    i && { onExited: f },
    u && { addEndListener: v },
    {
      children:
        typeof s == "function"
          ? (x, C) => s(x, Object.assign({}, C, { ref: m }))
          : c.cloneElement(s, { ref: m }),
    }
  );
}
const uy = ["component"];
function sy(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
const ay = c.forwardRef((e, t) => {
  let { component: n } = e,
    r = sy(e, uy);
  const l = iy(r);
  return g.jsx(n, Object.assign({ ref: t }, l));
});
function cy({ in: e, onTransition: t }) {
  const n = c.useRef(null),
    r = c.useRef(!0),
    l = _t(t);
  return (
    Xa(() => {
      if (!n.current) return;
      let o = !1;
      return (
        l({ in: e, element: n.current, initial: r.current, isStale: () => o }),
        () => {
          o = !0;
        }
      );
    }, [e, l]),
    Xa(
      () => (
        (r.current = !1),
        () => {
          r.current = !0;
        }
      ),
      []
    ),
    n
  );
}
function fy({ children: e, in: t, onExited: n, onEntered: r, transition: l }) {
  const [o, i] = c.useState(!t);
  t && o && i(!1);
  const u = cy({
      in: !!t,
      onTransition: (a) => {
        const p = () => {
          a.isStale() ||
            (a.in
              ? r == null || r(a.element, a.initial)
              : (i(!0), n == null || n(a.element)));
        };
        Promise.resolve(l(a)).then(p, (m) => {
          throw (a.in || i(!0), m);
        });
      },
    }),
    s = ys(u, e.ref);
  return o && !t ? null : c.cloneElement(e, { ref: s });
}
function Ya(e, t, n) {
  return e
    ? g.jsx(ay, Object.assign({}, n, { component: e }))
    : t
    ? g.jsx(fy, Object.assign({}, n, { transition: t }))
    : g.jsx(ty, Object.assign({}, n));
}
const dy = [
  "show",
  "role",
  "className",
  "style",
  "children",
  "backdrop",
  "keyboard",
  "onBackdropClick",
  "onEscapeKeyDown",
  "transition",
  "runTransition",
  "backdropTransition",
  "runBackdropTransition",
  "autoFocus",
  "enforceFocus",
  "restoreFocus",
  "restoreFocusOptions",
  "renderDialog",
  "renderBackdrop",
  "manager",
  "container",
  "onShow",
  "onHide",
  "onExit",
  "onExited",
  "onExiting",
  "onEnter",
  "onEntering",
  "onEntered",
];
function py(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
let ai;
function hy(e) {
  return (
    ai || (ai = new vs({ ownerDocument: e == null ? void 0 : e.document })), ai
  );
}
function my(e) {
  const t = gs(),
    n = e || hy(t),
    r = c.useRef({ dialog: null, backdrop: null });
  return Object.assign(r.current, {
    add: () => n.add(r.current),
    remove: () => n.remove(r.current),
    isTopModal: () => n.isTopModal(r.current),
    setDialogRef: c.useCallback((l) => {
      r.current.dialog = l;
    }, []),
    setBackdropRef: c.useCallback((l) => {
      r.current.backdrop = l;
    }, []),
  });
}
const Fd = c.forwardRef((e, t) => {
  let {
      show: n = !1,
      role: r = "dialog",
      className: l,
      style: o,
      children: i,
      backdrop: u = !0,
      keyboard: s = !0,
      onBackdropClick: a,
      onEscapeKeyDown: p,
      transition: m,
      runTransition: h,
      backdropTransition: y,
      runBackdropTransition: w,
      autoFocus: E = !0,
      enforceFocus: S = !0,
      restoreFocus: d = !0,
      restoreFocusOptions: f,
      renderDialog: v,
      renderBackdrop: x = ($) => g.jsx("div", Object.assign({}, $)),
      manager: C,
      container: R,
      onShow: P,
      onHide: T = () => {},
      onExit: D,
      onExited: L,
      onExiting: te,
      onEnter: Fe,
      onEntering: Se,
      onEntered: ot,
    } = e,
    it = py(e, dy);
  const fe = gs(),
    b = Zg(R),
    N = my(C),
    j = Ig(),
    O = Ag(n),
    [F, V] = c.useState(!n),
    ue = c.useRef(null);
  c.useImperativeHandle(t, () => N, [N]),
    jo && !O && n && (ue.current = ii(fe == null ? void 0 : fe.document)),
    n && F && V(!1);
  const U = _t(() => {
      if (
        (N.add(),
        (vn.current = io(document, "keydown", ut)),
        (mn.current = io(document, "focus", () => setTimeout(B), !0)),
        P && P(),
        E)
      ) {
        var $, Zr;
        const bn = ii(
          ($ = (Zr = N.dialog) == null ? void 0 : Zr.ownerDocument) != null
            ? $
            : fe == null
            ? void 0
            : fe.document
        );
        N.dialog &&
          bn &&
          !Va(N.dialog, bn) &&
          ((ue.current = bn), N.dialog.focus());
      }
    }),
    ke = _t(() => {
      if (
        (N.remove(),
        vn.current == null || vn.current(),
        mn.current == null || mn.current(),
        d)
      ) {
        var $;
        ($ = ue.current) == null || $.focus == null || $.focus(f),
          (ue.current = null);
      }
    });
  c.useEffect(() => {
    !n || !b || U();
  }, [n, b, U]),
    c.useEffect(() => {
      F && ke();
    }, [F, ke]),
    $g(() => {
      ke();
    });
  const B = _t(() => {
      if (!S || !j() || !N.isTopModal()) return;
      const $ = ii(fe == null ? void 0 : fe.document);
      N.dialog && $ && !Va(N.dialog, $) && N.dialog.focus();
    }),
    kt = _t(($) => {
      $.target === $.currentTarget && (a == null || a($), u === !0 && T());
    }),
    ut = _t(($) => {
      s &&
        ny($) &&
        N.isTopModal() &&
        (p == null || p($), $.defaultPrevented || T());
    }),
    mn = c.useRef(),
    vn = c.useRef(),
    $e = (...$) => {
      V(!0), L == null || L(...$);
    };
  if (!b) return null;
  const je = Object.assign(
    {
      role: r,
      ref: N.setDialogRef,
      "aria-modal": r === "dialog" ? !0 : void 0,
    },
    it,
    { style: o, className: l, tabIndex: -1 }
  );
  let Yt = v
    ? v(je)
    : g.jsx(
        "div",
        Object.assign({}, je, {
          children: c.cloneElement(i, { role: "document" }),
        })
      );
  Yt = Ya(m, h, {
    unmountOnExit: !0,
    mountOnEnter: !0,
    appear: !0,
    in: !!n,
    onExit: D,
    onExiting: te,
    onExited: $e,
    onEnter: Fe,
    onEntering: Se,
    onEntered: ot,
    children: Yt,
  });
  let Gt = null;
  return (
    u &&
      ((Gt = x({ ref: N.setBackdropRef, onClick: kt })),
      (Gt = Ya(y, w, {
        in: !!n,
        appear: !0,
        mountOnEnter: !0,
        unmountOnExit: !0,
        children: Gt,
      }))),
    g.jsx(g.Fragment, {
      children: Mn.createPortal(g.jsxs(g.Fragment, { children: [Gt, Yt] }), b),
    })
  );
});
Fd.displayName = "Modal";
const vy = Object.assign(Fd, { Manager: vs });
function $d(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue;
      n[r] = e[r];
    }
  return n;
}
function cu(e, t) {
  return (
    (cu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    cu(e, t)
  );
}
function gy(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    cu(e, t);
}
var Ad = { exports: {} },
  yy = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  wy = yy,
  xy = wy;
function Ud() {}
function Bd() {}
Bd.resetWarningCache = Ud;
var Ey = function () {
  function e(r, l, o, i, u, s) {
    if (s !== xy) {
      var a = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((a.name = "Invariant Violation"), a);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Bd,
    resetWarningCache: Ud,
  };
  return (n.PropTypes = n), n;
};
Ad.exports = Ey();
var Sy = Ad.exports;
const ci = co(Sy),
  Ga = { disabled: !1 },
  Hd = ge.createContext(null);
var ky = function (t) {
    return t.scrollTop;
  },
  hr = "unmounted",
  bt = "exited",
  et = "entering",
  jt = "entered",
  uo = "exiting",
  St = (function (e) {
    gy(t, e);
    function t(r, l) {
      var o;
      o = e.call(this, r, l) || this;
      var i = l,
        u = i && !i.isMounting ? r.enter : r.appear,
        s;
      return (
        (o.appearStatus = null),
        r.in
          ? u
            ? ((s = bt), (o.appearStatus = et))
            : (s = jt)
          : r.unmountOnExit || r.mountOnEnter
          ? (s = hr)
          : (s = bt),
        (o.state = { status: s }),
        (o.nextCallback = null),
        o
      );
    }
    t.getDerivedStateFromProps = function (l, o) {
      var i = l.in;
      return i && o.status === hr ? { status: bt } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (l) {
        var o = null;
        if (l !== this.props) {
          var i = this.state.status;
          this.props.in
            ? i !== et && i !== jt && (o = et)
            : (i === et || i === jt) && (o = uo);
        }
        this.updateStatus(!1, o);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var l = this.props.timeout,
          o,
          i,
          u;
        return (
          (o = i = u = l),
          l != null &&
            typeof l != "number" &&
            ((o = l.exit),
            (i = l.enter),
            (u = l.appear !== void 0 ? l.appear : i)),
          { exit: o, enter: i, appear: u }
        );
      }),
      (n.updateStatus = function (l, o) {
        if ((l === void 0 && (l = !1), o !== null))
          if ((this.cancelNextCallback(), o === et)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var i = this.props.nodeRef
                ? this.props.nodeRef.current
                : Mn.findDOMNode(this);
              i && ky(i);
            }
            this.performEnter(l);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === bt &&
            this.setState({ status: hr });
      }),
      (n.performEnter = function (l) {
        var o = this,
          i = this.props.enter,
          u = this.context ? this.context.isMounting : l,
          s = this.props.nodeRef ? [u] : [Mn.findDOMNode(this), u],
          a = s[0],
          p = s[1],
          m = this.getTimeouts(),
          h = u ? m.appear : m.enter;
        if ((!l && !i) || Ga.disabled) {
          this.safeSetState({ status: jt }, function () {
            o.props.onEntered(a);
          });
          return;
        }
        this.props.onEnter(a, p),
          this.safeSetState({ status: et }, function () {
            o.props.onEntering(a, p),
              o.onTransitionEnd(h, function () {
                o.safeSetState({ status: jt }, function () {
                  o.props.onEntered(a, p);
                });
              });
          });
      }),
      (n.performExit = function () {
        var l = this,
          o = this.props.exit,
          i = this.getTimeouts(),
          u = this.props.nodeRef ? void 0 : Mn.findDOMNode(this);
        if (!o || Ga.disabled) {
          this.safeSetState({ status: bt }, function () {
            l.props.onExited(u);
          });
          return;
        }
        this.props.onExit(u),
          this.safeSetState({ status: uo }, function () {
            l.props.onExiting(u),
              l.onTransitionEnd(i.exit, function () {
                l.safeSetState({ status: bt }, function () {
                  l.props.onExited(u);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (l, o) {
        (o = this.setNextCallback(o)), this.setState(l, o);
      }),
      (n.setNextCallback = function (l) {
        var o = this,
          i = !0;
        return (
          (this.nextCallback = function (u) {
            i && ((i = !1), (o.nextCallback = null), l(u));
          }),
          (this.nextCallback.cancel = function () {
            i = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (l, o) {
        this.setNextCallback(o);
        var i = this.props.nodeRef
            ? this.props.nodeRef.current
            : Mn.findDOMNode(this),
          u = l == null && !this.props.addEndListener;
        if (!i || u) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var s = this.props.nodeRef
              ? [this.nextCallback]
              : [i, this.nextCallback],
            a = s[0],
            p = s[1];
          this.props.addEndListener(a, p);
        }
        l != null && setTimeout(this.nextCallback, l);
      }),
      (n.render = function () {
        var l = this.state.status;
        if (l === hr) return null;
        var o = this.props,
          i = o.children;
        o.in,
          o.mountOnEnter,
          o.unmountOnExit,
          o.appear,
          o.enter,
          o.exit,
          o.timeout,
          o.addEndListener,
          o.onEnter,
          o.onEntering,
          o.onEntered,
          o.onExit,
          o.onExiting,
          o.onExited,
          o.nodeRef;
        var u = $d(o, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return ge.createElement(
          Hd.Provider,
          { value: null },
          typeof i == "function"
            ? i(l, u)
            : ge.cloneElement(ge.Children.only(i), u)
        );
      }),
      t
    );
  })(ge.Component);
St.contextType = Hd;
St.propTypes = {};
function yn() {}
St.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: yn,
  onEntering: yn,
  onEntered: yn,
  onExit: yn,
  onExiting: yn,
  onExited: yn,
};
St.UNMOUNTED = hr;
St.EXITED = bt;
St.ENTERING = et;
St.ENTERED = jt;
St.EXITING = uo;
function Cy(e, t, n, r) {
  if ((r === void 0 && (r = !0), e)) {
    var l = document.createEvent("HTMLEvents");
    l.initEvent(t, n, r), e.dispatchEvent(l);
  }
}
function Ny(e) {
  var t = on(e, "transitionDuration") || "",
    n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function Ry(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1,
    l = setTimeout(function () {
      r || Cy(e, "transitionend", !0);
    }, t + n),
    o = io(
      e,
      "transitionend",
      function () {
        r = !0;
      },
      { once: !0 }
    );
  return function () {
    clearTimeout(l), o();
  };
}
function Py(e, t, n, r) {
  n == null && (n = Ny(e) || 0);
  var l = Ry(e, n, r),
    o = io(e, "transitionend", t);
  return function () {
    l(), o();
  };
}
function Ja(e, t) {
  const n = on(e, t) || "",
    r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function xs(e, t) {
  const n = Ja(e, "transitionDuration"),
    r = Ja(e, "transitionDelay"),
    l = Py(
      e,
      (o) => {
        o.target === e && (l(), t(o));
      },
      n + r
    );
}
function Wd(e) {
  e.offsetHeight;
}
const Za = (e) =>
  !e || typeof e == "function"
    ? e
    : (t) => {
        e.current = t;
      };
function Ty(e, t) {
  const n = Za(e),
    r = Za(t);
  return (l) => {
    n && n(l), r && r(l);
  };
}
function _y(e, t) {
  return c.useMemo(() => Ty(e, t), [e, t]);
}
function jy(e) {
  return e && "setState" in e ? Mn.findDOMNode(e) : e ?? null;
}
const Es = ge.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: l,
        onExited: o,
        addEndListener: i,
        children: u,
        childRef: s,
        ...a
      },
      p
    ) => {
      const m = c.useRef(null),
        h = _y(m, s),
        y = (R) => {
          h(jy(R));
        },
        w = (R) => (P) => {
          R && m.current && R(m.current, P);
        },
        E = c.useCallback(w(e), [e]),
        S = c.useCallback(w(t), [t]),
        d = c.useCallback(w(n), [n]),
        f = c.useCallback(w(r), [r]),
        v = c.useCallback(w(l), [l]),
        x = c.useCallback(w(o), [o]),
        C = c.useCallback(w(i), [i]);
      return g.jsx(St, {
        ref: p,
        ...a,
        onEnter: E,
        onEntered: d,
        onEntering: S,
        onExit: f,
        onExited: x,
        onExiting: v,
        addEndListener: C,
        nodeRef: m,
        children:
          typeof u == "function"
            ? (R, P) => u(R, { ...P, ref: y })
            : ge.cloneElement(u, { ref: y }),
      });
    }
  ),
  Ly = { [et]: "show", [jt]: "show" },
  Vd = c.forwardRef(
    (
      {
        className: e,
        children: t,
        transitionClasses: n = {},
        onEnter: r,
        ...l
      },
      o
    ) => {
      const i = {
          in: !1,
          timeout: 300,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          ...l,
        },
        u = c.useCallback(
          (s, a) => {
            Wd(s), r == null || r(s, a);
          },
          [r]
        );
      return g.jsx(Es, {
        ref: o,
        addEndListener: xs,
        ...i,
        onEnter: u,
        childRef: ws(t),
        children: (s, a) =>
          c.cloneElement(t, {
            ...a,
            className: we("fade", e, t.props.className, Ly[s], n[s]),
          }),
      });
    }
  );
Vd.displayName = "Fade";
const Kd = c.forwardRef(
  ({ className: e, bsPrefix: t, as: n = "div", ...r }, l) => (
    (t = Et(t, "offcanvas-body")),
    g.jsx(n, { ref: l, className: we(e, t), ...r })
  )
);
Kd.displayName = "OffcanvasBody";
const Oy = { [et]: "show", [jt]: "show" },
  Qd = c.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        children: n,
        in: r = !1,
        mountOnEnter: l = !1,
        unmountOnExit: o = !1,
        appear: i = !1,
        ...u
      },
      s
    ) => (
      (e = Et(e, "offcanvas")),
      g.jsx(Es, {
        ref: s,
        addEndListener: xs,
        in: r,
        mountOnEnter: l,
        unmountOnExit: o,
        appear: i,
        ...u,
        childRef: ws(n),
        children: (a, p) =>
          c.cloneElement(n, {
            ...p,
            className: we(
              t,
              n.props.className,
              (a === et || a === uo) && `${e}-toggling`,
              Oy[a]
            ),
          }),
      })
    )
  );
Qd.displayName = "OffcanvasToggling";
const Xd = c.createContext({ onHide() {} }),
  My = {
    "aria-label": ci.string,
    onClick: ci.func,
    variant: ci.oneOf(["white"]),
  },
  Ss = c.forwardRef(
    ({ className: e, variant: t, "aria-label": n = "Close", ...r }, l) =>
      g.jsx("button", {
        ref: l,
        type: "button",
        className: we("btn-close", t && `btn-close-${t}`, e),
        "aria-label": n,
        ...r,
      })
  );
Ss.displayName = "CloseButton";
Ss.propTypes = My;
const Dy = c.forwardRef(
    (
      {
        closeLabel: e = "Close",
        closeVariant: t,
        closeButton: n = !1,
        onHide: r,
        children: l,
        ...o
      },
      i
    ) => {
      const u = c.useContext(Xd),
        s = oo(() => {
          u == null || u.onHide(), r == null || r();
        });
      return g.jsxs("div", {
        ref: i,
        ...o,
        children: [
          l,
          n && g.jsx(Ss, { "aria-label": e, variant: t, onClick: s }),
        ],
      });
    }
  ),
  Yd = c.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        closeLabel: n = "Close",
        closeButton: r = !1,
        ...l
      },
      o
    ) => (
      (e = Et(e, "offcanvas-header")),
      g.jsx(Dy, {
        ref: o,
        ...l,
        className: we(t, e),
        closeLabel: n,
        closeButton: r,
      })
    )
  );
Yd.displayName = "OffcanvasHeader";
const zy = (e) =>
    c.forwardRef((t, n) =>
      g.jsx("div", { ...t, ref: n, className: we(t.className, e) })
    ),
  Iy = zy("h5"),
  Gd = c.forwardRef(
    ({ className: e, bsPrefix: t, as: n = Iy, ...r }, l) => (
      (t = Et(t, "offcanvas-title")),
      g.jsx(n, { ref: l, className: we(e, t), ...r })
    )
  );
Gd.displayName = "OffcanvasTitle";
function Fy(e, t) {
  return e.classList
    ? e.classList.contains(t)
    : (" " + (e.className.baseVal || e.className) + " ").indexOf(
        " " + t + " "
      ) !== -1;
}
function $y(e, t) {
  e.classList
    ? e.classList.add(t)
    : Fy(e, t) ||
      (typeof e.className == "string"
        ? (e.className = e.className + " " + t)
        : e.setAttribute(
            "class",
            ((e.className && e.className.baseVal) || "") + " " + t
          ));
}
var Ay = Function.prototype.bind.call(Function.prototype.call, [].slice);
function wn(e, t) {
  return Ay(e.querySelectorAll(t));
}
function qa(e, t) {
  return e
    .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
    .replace(/\s+/g, " ")
    .replace(/^\s*|\s*$/g, "");
}
function Uy(e, t) {
  e.classList
    ? e.classList.remove(t)
    : typeof e.className == "string"
    ? (e.className = qa(e.className, t))
    : e.setAttribute(
        "class",
        qa((e.className && e.className.baseVal) || "", t)
      );
}
const xn = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler",
};
class Jd extends vs {
  adjustAndStore(t, n, r) {
    const l = n.style[t];
    (n.dataset[t] = l), on(n, { [t]: `${parseFloat(on(n, t)) + r}px` });
  }
  restore(t, n) {
    const r = n.dataset[t];
    r !== void 0 && (delete n.dataset[t], on(n, { [t]: r }));
  }
  setContainerStyle(t) {
    super.setContainerStyle(t);
    const n = this.getElement();
    if (($y(n, "modal-open"), !t.scrollBarWidth)) return;
    const r = this.isRTL ? "paddingLeft" : "paddingRight",
      l = this.isRTL ? "marginLeft" : "marginRight";
    wn(n, xn.FIXED_CONTENT).forEach((o) =>
      this.adjustAndStore(r, o, t.scrollBarWidth)
    ),
      wn(n, xn.STICKY_CONTENT).forEach((o) =>
        this.adjustAndStore(l, o, -t.scrollBarWidth)
      ),
      wn(n, xn.NAVBAR_TOGGLER).forEach((o) =>
        this.adjustAndStore(l, o, t.scrollBarWidth)
      );
  }
  removeContainerStyle(t) {
    super.removeContainerStyle(t);
    const n = this.getElement();
    Uy(n, "modal-open");
    const r = this.isRTL ? "paddingLeft" : "paddingRight",
      l = this.isRTL ? "marginLeft" : "marginRight";
    wn(n, xn.FIXED_CONTENT).forEach((o) => this.restore(r, o)),
      wn(n, xn.STICKY_CONTENT).forEach((o) => this.restore(l, o)),
      wn(n, xn.NAVBAR_TOGGLER).forEach((o) => this.restore(l, o));
  }
}
let fi;
function By(e) {
  return fi || (fi = new Jd(e)), fi;
}
function Hy(e) {
  return g.jsx(Qd, { ...e });
}
function Wy(e) {
  return g.jsx(Vd, { ...e });
}
const Zd = c.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      children: n,
      "aria-labelledby": r,
      placement: l = "start",
      responsive: o,
      show: i = !1,
      backdrop: u = !0,
      keyboard: s = !0,
      scroll: a = !1,
      onEscapeKeyDown: p,
      onShow: m,
      onHide: h,
      container: y,
      autoFocus: w = !0,
      enforceFocus: E = !0,
      restoreFocus: S = !0,
      restoreFocusOptions: d,
      onEntered: f,
      onExit: v,
      onExiting: x,
      onEnter: C,
      onEntering: R,
      onExited: P,
      backdropClassName: T,
      manager: D,
      renderStaticNode: L = !1,
      ...te
    },
    Fe
  ) => {
    const Se = c.useRef();
    e = Et(e, "offcanvas");
    const [ot, it] = c.useState(!1),
      fe = oo(h),
      b = Mg(o || "xs", "up");
    c.useEffect(() => {
      it(o ? i && !b : i);
    }, [i, o, b]);
    const N = c.useMemo(() => ({ onHide: fe }), [fe]);
    function j() {
      return (
        D ||
        (a
          ? (Se.current ||
              (Se.current = new Jd({ handleContainerOverflow: !1 })),
            Se.current)
          : By())
      );
    }
    const O = (U, ...ke) => {
        U && (U.style.visibility = "visible"), C == null || C(U, ...ke);
      },
      F = (U, ...ke) => {
        U && (U.style.visibility = ""), P == null || P(...ke);
      },
      V = c.useCallback(
        (U) => g.jsx("div", { ...U, className: we(`${e}-backdrop`, T) }),
        [T, e]
      ),
      ue = (U) =>
        g.jsx("div", {
          ...U,
          ...te,
          className: we(t, o ? `${e}-${o}` : e, `${e}-${l}`),
          "aria-labelledby": r,
          children: n,
        });
    return g.jsxs(g.Fragment, {
      children: [
        !ot && (o || L) && ue({}),
        g.jsx(Xd.Provider, {
          value: N,
          children: g.jsx(vy, {
            show: ot,
            ref: Fe,
            backdrop: u,
            container: y,
            keyboard: s,
            autoFocus: w,
            enforceFocus: E && !a,
            restoreFocus: S,
            restoreFocusOptions: d,
            onEscapeKeyDown: p,
            onShow: m,
            onHide: fe,
            onEnter: O,
            onEntering: R,
            onEntered: f,
            onExit: v,
            onExiting: x,
            onExited: F,
            manager: j(),
            transition: Hy,
            backdropTransition: Wy,
            renderBackdrop: V,
            renderDialog: ue,
          }),
        }),
      ],
    });
  }
);
Zd.displayName = "Offcanvas";
const yl = Object.assign(Zd, { Body: Kd, Header: Yd, Title: Gd });
var qd = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  ba = ge.createContext && ge.createContext(qd),
  Vy = ["attr", "size", "title"];
function Ky(e, t) {
  if (e == null) return {};
  var n = Qy(e, t),
    r,
    l;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (l = 0; l < o.length; l++)
      (r = o[l]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Qy(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function so() {
  return (
    (so = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    so.apply(this, arguments)
  );
}
function ec(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ao(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ec(Object(n), !0).forEach(function (r) {
          Xy(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : ec(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Xy(e, t, n) {
  return (
    (t = Yy(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Yy(e) {
  var t = Gy(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Gy(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function bd(e) {
  return (
    e &&
    e.map((t, n) =>
      ge.createElement(t.tag, ao({ key: n }, t.attr), bd(t.child))
    )
  );
}
function qn(e) {
  return (t) =>
    ge.createElement(Jy, so({ attr: ao({}, e.attr) }, t), bd(e.child));
}
function Jy(e) {
  var t = (n) => {
    var { attr: r, size: l, title: o } = e,
      i = Ky(e, Vy),
      u = l || n.size || "1em",
      s;
    return (
      n.className && (s = n.className),
      e.className && (s = (s ? s + " " : "") + e.className),
      ge.createElement(
        "svg",
        so(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          i,
          {
            className: s,
            style: ao(ao({ color: e.color || n.color }, n.style), e.style),
            height: u,
            width: u,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        o && ge.createElement("title", null, o),
        e.children
      )
    );
  };
  return ba !== void 0
    ? ge.createElement(ba.Consumer, null, (n) => t(n))
    : t(qd);
}
function Zy(e) {
  return qn({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z",
        },
        child: [],
      },
    ],
  })(e);
}
const qy = () => {
    const [e, t] = c.useState(!1),
      n = () => t(!1),
      r = () => t(!0);
    return g.jsxs(g.Fragment, {
      children: [
        g.jsx(Dd, {
          variant: "none",
          onClick: r,
          className: "me-2 text-white border border-2",
          children: g.jsx(Zy, {}),
        }),
        g.jsxs(yl, {
          show: e,
          onHide: n,
          className: "bg-dark w-50",
          children: [
            g.jsx(yl.Header, {
              closeButton: !0,
              children: g.jsx(yl.Title, {
                children: g.jsx("div", {
                  children: g.jsx("img", { src: "#", alt: "LOGO" }),
                }),
              }),
            }),
            g.jsxs(yl.Body, {
              children: [
                g.jsxs("div", {
                  className: "canvas-ul",
                  children: [
                    g.jsx(Re, {
                      to: "/",
                      className: "canvas-link",
                      children: "Home",
                    }),
                    g.jsx(Re, {
                      to: "/about",
                      className: "canvas-link",
                      children: "About",
                    }),
                    g.jsx(Re, {
                      to: "/contact",
                      className: "canvas-link",
                      children: "Contact",
                    }),
                  ],
                }),
                g.jsxs("div", {
                  className:
                    "text-center text-white mt-5 d-flex flex-column gap-1",
                  children: [
                    g.jsx("hr", {}),
                    g.jsx("p", {
                      children: "Mouth Throne Limited Homes & Properties",
                    }),
                    g.jsx("p", { children: "Mouth Throne Foods" }),
                    g.jsx("hr", {}),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  by = () =>
    g.jsx(g.Fragment, {
      children: g.jsx("nav", {
        className: "nav-main-div",
        children: g.jsxs("div", {
          className: "container nav pe-5",
          children: [
            g.jsx(Re, {
              to: "/",
              children: g.jsx("img", { src: "path-to-logo.png", alt: "LOGO" }),
            }),
            g.jsxs("div", {
              children: [
                g.jsx("div", {
                  className: "d-lg-none d-md-none",
                  children: g.jsx(qy, {}),
                }),
                g.jsxs("ul", {
                  className: "nav-ul",
                  children: [
                    g.jsx("li", {
                      children: g.jsx(Re, { to: "/", children: "Home" }),
                    }),
                    g.jsx("li", {
                      children: g.jsx(Re, { to: "/about", children: "About" }),
                    }),
                    g.jsx("li", {
                      children: g.jsx(Re, {
                        to: "/contact",
                        children: "Contact",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    });
function e0(e) {
  return qn({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M256 48C141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208S370.4 48 256 48zm0 62.4c34.3 0 62.4 28.1 62.4 62.4s-28.1 62.4-62.4 62.4-62.4-28.1-62.4-62.4 28.1-62.4 62.4-62.4zm0 300.4c-52 0-97.8-27-124.8-66.6 1-41.6 83.2-64.5 124.8-64.5s123.8 22.9 124.8 64.5c-27 39.5-72.8 66.6-124.8 66.6z",
        },
        child: [],
      },
    ],
  })(e);
}
const t0 = [
    {
      title: "Diverse Expertise",
      description:
        "Group brings in-depth knowledge and a commitment to excellence in each sector.",
    },
    {
      title: "Integrity and Quality",
      description:
        "Our products and services uphold high standards, ensuring client satisfaction and trust",
    },
    {
      title: "Client-Centered Philosophy",
      description:
        "We prioritize client needs, exceeding expectations and fostering strong, lasting relationships.",
    },
  ],
  n0 = () =>
    g.jsx("div", {
      className: "workwithus-background",
      children: g.jsxs("div", {
        className: "container my-5",
        children: [
          g.jsx("h1", {
            className: "text-center fw-bold",
            children: "WHY YOU SHOULD CHOOSE US",
          }),
          g.jsx("div", {
            className: "workwithus-us-container",
            children: t0.map((e, t) =>
              g.jsxs(
                "div",
                {
                  className: "workwithus-us",
                  children: [
                    g.jsx("h2", { className: "mb-4", children: e.title }),
                    g.jsx("p", { children: e.description }),
                  ],
                },
                t
              )
            ),
          }),
        ],
      }),
    });
function r0(e, t) {
  const n = c.useRef(!0);
  c.useEffect(() => {
    if (n.current) {
      n.current = !1;
      return;
    }
    return e();
  }, t);
}
function l0() {
  const e = c.useRef(!0),
    t = c.useRef(() => e.current);
  return (
    c.useEffect(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    t.current
  );
}
function o0(e) {
  const t = c.useRef(e);
  return (t.current = e), t;
}
function i0(e) {
  const t = o0(e);
  c.useEffect(() => () => t.current(), []);
}
const fu = 2 ** 31 - 1;
function ep(e, t, n) {
  const r = n - Date.now();
  e.current = r <= fu ? setTimeout(t, r) : setTimeout(() => ep(e, t, n), fu);
}
function u0() {
  const e = l0(),
    t = c.useRef();
  return (
    i0(() => clearTimeout(t.current)),
    c.useMemo(() => {
      const n = () => clearTimeout(t.current);
      function r(l, o = 0) {
        e() &&
          (n(),
          o <= fu ? (t.current = setTimeout(l, o)) : ep(t, l, Date.now() + o));
      }
      return { set: r, clear: n, handleRef: t };
    }, [])
  );
}
const s0 = ["onKeyDown"];
function a0(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function c0(e) {
  return !e || e.trim() === "#";
}
const du = c.forwardRef((e, t) => {
  let { onKeyDown: n } = e,
    r = a0(e, s0);
  const [l] = hs(Object.assign({ tagName: "a" }, r)),
    o = _t((i) => {
      l.onKeyDown(i), n == null || n(i);
    });
  return c0(r.href) || r.role === "button"
    ? g.jsx("a", Object.assign({ ref: t }, r, l, { onKeyDown: o }))
    : g.jsx("a", Object.assign({ ref: t }, r, { onKeyDown: n }));
});
du.displayName = "Anchor";
function pu() {
  return (
    (pu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    pu.apply(null, arguments)
  );
}
function tc(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function f0(e) {
  var t = d0(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function d0(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function p0(e, t, n) {
  var r = c.useRef(e !== void 0),
    l = c.useState(t),
    o = l[0],
    i = l[1],
    u = e !== void 0,
    s = r.current;
  return (
    (r.current = u),
    !u && s && o !== t && i(t),
    [
      u ? e : o,
      c.useCallback(
        function (a) {
          for (
            var p = arguments.length, m = new Array(p > 1 ? p - 1 : 0), h = 1;
            h < p;
            h++
          )
            m[h - 1] = arguments[h];
          n && n.apply(void 0, [a].concat(m)), i(a);
        },
        [n]
      ),
    ]
  );
}
function h0(e, t) {
  return Object.keys(t).reduce(function (n, r) {
    var l,
      o = n,
      i = o[tc(r)],
      u = o[r],
      s = $d(o, [tc(r), r].map(f0)),
      a = t[r],
      p = p0(u, i, e[a]),
      m = p[0],
      h = p[1];
    return pu({}, s, ((l = {}), (l[r] = m), (l[a] = h), l));
  }, e);
}
const tp = c.forwardRef(
  ({ className: e, bsPrefix: t, as: n = "div", ...r }, l) => (
    (t = Et(t, "carousel-caption")),
    g.jsx(n, { ref: l, className: we(e, t), ...r })
  )
);
tp.displayName = "CarouselCaption";
const np = c.forwardRef(
  ({ as: e = "div", bsPrefix: t, className: n, ...r }, l) => {
    const o = we(n, Et(t, "carousel-item"));
    return g.jsx(e, { ref: l, ...r, className: o });
  }
);
np.displayName = "CarouselItem";
function nc(e, t) {
  let n = 0;
  return c.Children.map(e, (r) => (c.isValidElement(r) ? t(r, n++) : r));
}
function m0(e, t) {
  let n = 0;
  c.Children.forEach(e, (r) => {
    c.isValidElement(r) && t(r, n++);
  });
}
const v0 = 40;
function g0(e) {
  if (!e || !e.style || !e.parentNode || !e.parentNode.style) return !1;
  const t = getComputedStyle(e);
  return (
    t.display !== "none" &&
    t.visibility !== "hidden" &&
    getComputedStyle(e.parentNode).display !== "none"
  );
}
const rp = c.forwardRef(({ defaultActiveIndex: e = 0, ...t }, n) => {
  const {
      as: r = "div",
      bsPrefix: l,
      slide: o = !0,
      fade: i = !1,
      controls: u = !0,
      indicators: s = !0,
      indicatorLabels: a = [],
      activeIndex: p,
      onSelect: m,
      onSlide: h,
      onSlid: y,
      interval: w = 5e3,
      keyboard: E = !0,
      onKeyDown: S,
      pause: d = "hover",
      onMouseOver: f,
      onMouseOut: v,
      wrap: x = !0,
      touch: C = !0,
      onTouchStart: R,
      onTouchMove: P,
      onTouchEnd: T,
      prevIcon: D = g.jsx("span", {
        "aria-hidden": "true",
        className: "carousel-control-prev-icon",
      }),
      prevLabel: L = "Previous",
      nextIcon: te = g.jsx("span", {
        "aria-hidden": "true",
        className: "carousel-control-next-icon",
      }),
      nextLabel: Fe = "Next",
      variant: Se,
      className: ot,
      children: it,
      ...fe
    } = h0({ defaultActiveIndex: e, ...t }, { activeIndex: "onSelect" }),
    b = Et(l, "carousel"),
    N = Pg(),
    j = c.useRef(null),
    [O, F] = c.useState("next"),
    [V, ue] = c.useState(!1),
    [U, ke] = c.useState(!1),
    [B, kt] = c.useState(p || 0);
  c.useEffect(() => {
    !U &&
      p !== B &&
      (j.current ? F(j.current) : F((p || 0) > B ? "next" : "prev"),
      o && ke(!0),
      kt(p || 0));
  }, [p, U, B, o]),
    c.useEffect(() => {
      j.current && (j.current = null);
    });
  let ut = 0,
    mn;
  m0(it, (M, H) => {
    ++ut, H === p && (mn = M.props.interval);
  });
  const vn = zd(mn),
    $e = c.useCallback(
      (M) => {
        if (U) return;
        let H = B - 1;
        if (H < 0) {
          if (!x) return;
          H = ut - 1;
        }
        (j.current = "prev"), m == null || m(H, M);
      },
      [U, B, m, x, ut]
    ),
    je = oo((M) => {
      if (U) return;
      let H = B + 1;
      if (H >= ut) {
        if (!x) return;
        H = 0;
      }
      (j.current = "next"), m == null || m(H, M);
    }),
    Yt = c.useRef();
  c.useImperativeHandle(n, () => ({ element: Yt.current, prev: $e, next: je }));
  const Gt = oo(() => {
      !document.hidden && g0(Yt.current) && (N ? $e() : je());
    }),
    $ = O === "next" ? "start" : "end";
  r0(() => {
    o || (h == null || h(B, $), y == null || y(B, $));
  }, [B]);
  const Zr = `${b}-item-${O}`,
    bn = `${b}-item-${$}`,
    ip = c.useCallback(
      (M) => {
        Wd(M), h == null || h(B, $);
      },
      [h, B, $]
    ),
    up = c.useCallback(() => {
      ke(!1), y == null || y(B, $);
    }, [y, B, $]),
    sp = c.useCallback(
      (M) => {
        if (E && !/input|textarea/i.test(M.target.tagName))
          switch (M.key) {
            case "ArrowLeft":
              M.preventDefault(), N ? je(M) : $e(M);
              return;
            case "ArrowRight":
              M.preventDefault(), N ? $e(M) : je(M);
              return;
          }
        S == null || S(M);
      },
      [E, S, $e, je, N]
    ),
    ap = c.useCallback(
      (M) => {
        d === "hover" && ue(!0), f == null || f(M);
      },
      [d, f]
    ),
    cp = c.useCallback(
      (M) => {
        ue(!1), v == null || v(M);
      },
      [v]
    ),
    ks = c.useRef(0),
    qr = c.useRef(0),
    Cs = u0(),
    fp = c.useCallback(
      (M) => {
        (ks.current = M.touches[0].clientX),
          (qr.current = 0),
          d === "hover" && ue(!0),
          R == null || R(M);
      },
      [d, R]
    ),
    dp = c.useCallback(
      (M) => {
        M.touches && M.touches.length > 1
          ? (qr.current = 0)
          : (qr.current = M.touches[0].clientX - ks.current),
          P == null || P(M);
      },
      [P]
    ),
    pp = c.useCallback(
      (M) => {
        if (C) {
          const H = qr.current;
          Math.abs(H) > v0 && (H > 0 ? $e(M) : je(M));
        }
        d === "hover" &&
          Cs.set(() => {
            ue(!1);
          }, w || void 0),
          T == null || T(M);
      },
      [C, d, $e, je, Cs, w, T]
    ),
    Ns = w != null && !V && !U,
    Lo = c.useRef();
  c.useEffect(() => {
    var M, H;
    if (!Ns) return;
    const st = N ? $e : je;
    return (
      (Lo.current = window.setInterval(
        document.visibilityState ? Gt : st,
        (M = (H = vn.current) != null ? H : w) != null ? M : void 0
      )),
      () => {
        Lo.current !== null && clearInterval(Lo.current);
      }
    );
  }, [Ns, $e, je, vn, w, Gt, N]);
  const Rs = c.useMemo(
    () =>
      s &&
      Array.from({ length: ut }, (M, H) => (st) => {
        m == null || m(H, st);
      }),
    [s, ut, m]
  );
  return g.jsxs(r, {
    ref: Yt,
    ...fe,
    onKeyDown: sp,
    onMouseOver: ap,
    onMouseOut: cp,
    onTouchStart: fp,
    onTouchMove: dp,
    onTouchEnd: pp,
    className: we(ot, b, o && "slide", i && `${b}-fade`, Se && `${b}-${Se}`),
    children: [
      s &&
        g.jsx("div", {
          className: `${b}-indicators`,
          children: nc(it, (M, H) =>
            g.jsx(
              "button",
              {
                type: "button",
                "data-bs-target": "",
                "aria-label": a != null && a.length ? a[H] : `Slide ${H + 1}`,
                className: H === B ? "active" : void 0,
                onClick: Rs ? Rs[H] : void 0,
                "aria-current": H === B,
              },
              H
            )
          ),
        }),
      g.jsx("div", {
        className: `${b}-inner`,
        children: nc(it, (M, H) => {
          const st = H === B;
          return o
            ? g.jsx(Es, {
                in: st,
                onEnter: st ? ip : void 0,
                onEntered: st ? up : void 0,
                addEndListener: xs,
                children: (er, hp) =>
                  c.cloneElement(M, {
                    ...hp,
                    className: we(
                      M.props.className,
                      st && er !== "entered" && Zr,
                      (er === "entered" || er === "exiting") && "active",
                      (er === "entering" || er === "exiting") && bn
                    ),
                  }),
              })
            : c.cloneElement(M, {
                className: we(M.props.className, st && "active"),
              });
        }),
      }),
      u &&
        g.jsxs(g.Fragment, {
          children: [
            (x || p !== 0) &&
              g.jsxs(du, {
                className: `${b}-control-prev`,
                onClick: $e,
                children: [
                  D,
                  L &&
                    g.jsx("span", {
                      className: "visually-hidden",
                      children: L,
                    }),
                ],
              }),
            (x || p !== ut - 1) &&
              g.jsxs(du, {
                className: `${b}-control-next`,
                onClick: je,
                children: [
                  te,
                  Fe &&
                    g.jsx("span", {
                      className: "visually-hidden",
                      children: Fe,
                    }),
                ],
              }),
          ],
        }),
    ],
  });
});
rp.displayName = "Carousel";
const Jt = Object.assign(rp, { Caption: tp, Item: np }),
  y0 = "/assets/Project1-ftXuJcSA.jpg",
  w0 = "/assets/ongoing-project-BX8LGTLl.jpg",
  x0 = "/assets/project2-DJI1XPXc.jpg",
  E0 = () => {
    const [e, t] = c.useState(0),
      n = (r) => {
        t(r);
      };
    return g.jsxs("div", {
      children: [
        g.jsxs("div", {
          className: "my-5",
          children: [
            g.jsx("h1", {
              className: "text-center my-5 pt-5 fw-bold",
              children: "PROJECT DELIVERED",
            }),
            g.jsxs(Jt, {
              activeIndex: e,
              onSelect: n,
              children: [
                g.jsxs(Jt.Item, {
                  children: [
                    g.jsx("div", {
                      className: "swipe-image",
                      children: g.jsx("img", { src: y0, alt: "" }),
                    }),
                    g.jsxs(Jt.Caption, {
                      children: [
                        g.jsx("h1", {
                          className: "text-dark",
                          children: "First slide label",
                        }),
                        g.jsx("p", {
                          className: "text-dark",
                          children:
                            "Nulla vitae elit libero, a pharetra augue mollis interdum.",
                        }),
                      ],
                    }),
                  ],
                }),
                g.jsxs(Jt.Item, {
                  children: [
                    g.jsx("div", {
                      className: "swipe-image",
                      children: g.jsx("img", { src: w0, alt: "" }),
                    }),
                    g.jsxs(Jt.Caption, {
                      children: [
                        g.jsx("h1", {
                          className: "text-dark",
                          children: "This is an ongoing project",
                        }),
                        g.jsx("p", {
                          className: "text-dark",
                          children:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        }),
                      ],
                    }),
                  ],
                }),
                g.jsxs(Jt.Item, {
                  children: [
                    g.jsx("div", {
                      className: "swipe-image",
                      children: g.jsx("img", { src: x0, alt: "" }),
                    }),
                    g.jsxs(Jt.Caption, {
                      children: [
                        g.jsx("h1", {
                          className: "text-dark",
                          children: "Third slide label",
                        }),
                        g.jsx("p", {
                          className: "text-dark",
                          children:
                            "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        g.jsx("hr", {}),
      ],
    });
  },
  S0 = "/assets/mr%20terri1-DQnf3y3l.jpg",
  k0 = "/assets/mr-abuchi-comment-CaCkFAid.jpg",
  C0 = "/assets/mrs%20olakemi-VeKEKnrT.jpg",
  N0 = [
    {
      name: "Mr. Samuel Ucha",
      comment:
        "Specializing in real estate, Mouth Throne Limited offers comprehensive services in property sales, rentals, management, consulting, and evaluation. With deep market insight and a client-first approach, we help clients find, manage, and maximize their property investments with confidence and ease.",
      image: S0,
    },
    {
      name: "Mrs. Folakemi Jegede",
      comment:
        "Focused on beauty and self-care, Mouth Throne Cosmetics delivers a range of skincare, haircare, and beauty products crafted from premium ingredients. By combining innovation with natural care, we empower our clients to feel and look their best.",
      image: C0,
    },
    {
      name: "Mr. Abuchi peter ugwu",
      comment:
        "Mouth Throne Foods is dedicated to redefining the culinary experience by offering fresh, high-quality food products. With a focus on quality sourcing and exceptional taste, we provide nutritious and delicious options, catering to a wide array of palates.",
      image: k0,
    },
  ],
  R0 = () =>
    g.jsxs("div", {
      className: "container py-5",
      children: [
        g.jsx("div", {
          className: "d-flex justify-content-center",
          children: g.jsx("h1", {
            className: "text-center mb-5 comment-title",
            children: "A few words from people that choose to work with me",
          }),
        }),
        g.jsx("div", {
          className: "comment-col-cart",
          children: N0.map((e, t) =>
            g.jsxs("div", {
              children: [
                g.jsxs(
                  "div",
                  {
                    className: "comment-cart",
                    children: [
                      g.jsx("div", {
                        className: "comment-image",
                        children: g.jsx("img", { src: e.image, alt: "" }),
                      }),
                      g.jsxs("div", {
                        className: "comment-text",
                        children: [
                          g.jsx("p", { children: e.comment }),
                          g.jsx("h4", { children: e.name }),
                        ],
                      }),
                    ],
                  },
                  t
                ),
                g.jsx("div", {
                  className: "d-lg-none d-md-none",
                  children: g.jsx("hr", {}),
                }),
              ],
            })
          ),
        }),
      ],
    }),
  P0 = () =>
    g.jsxs("div", {
      style: { backgroundColor: "#f7f9fb" },
      children: [
        g.jsx("header", {
          id: "header",
          className: "header",
          children: g.jsx("div", {
            className: "container",
            children: g.jsx("div", {
              className: "row",
              children: g.jsx("div", {
                className: "col-lg-6",
                children: g.jsxs("div", {
                  className: "text-container",
                  children: [
                    g.jsx("h1", {
                      className: "h1-large",
                      children:
                        "Mouth Throne Group Excellence Across Industries",
                    }),
                    g.jsx(Re, {
                      className:
                        "btn-solid-lg page-scroll text-decoration-none",
                      to: "/about",
                      children: "Discover",
                    }),
                    g.jsxs(Re, {
                      className:
                        "btn-outline-lg page-scroll text-decoration-none",
                      to: "/contact",
                      children: [g.jsx(e0, {}), " Contact Me"],
                    }),
                  ],
                }),
              }),
            }),
          }),
        }),
        g.jsx(n0, {}),
        g.jsx(E0, {}),
        g.jsx(R0, {}),
      ],
    }),
  T0 = "/assets/real-estate-CL24EYyQ.jpg",
  _0 = "/assets/restaurant-pK5anv8L.jpg",
  j0 = "/assets/Full-Range-BE86Kr-z.jpeg",
  L0 = [
    {
      title: "Mouth Throne Limited - Homes & Properties",
      description:
        "Specializing in real estate, Mouth Throne Limited offers comprehensive services in property sales, rentals, management, consulting, and evaluation. With deep market insight and a client-first approach, we help clients find, manage, and maximize their property investments with confidence and ease.",
      image: T0,
    },
    {
      title: "Mouth Throne Cosmetics",
      description:
        "Focused on beauty and self-care, Mouth Throne Cosmetics delivers a range of skincare, haircare, and beauty products crafted from premium ingredients. By combining innovation with natural care, we empower our clients to feel and look their best.",
      style: !0,
      image: j0,
    },
    {
      title: "Mouth Throne Foods",
      description:
        "Mouth Throne Foods is dedicated to redefining the culinary experience by offering fresh, high-quality food products. With a focus on quality sourcing and exceptional taste, we provide nutritious and delicious options, catering to a wide array of palates.",
      image: _0,
    },
  ],
  O0 = () =>
    g.jsxs("div", {
      style: { backgroundColor: "#f7f9fb" },
      children: [
        g.jsx("div", {
          className: "about-title",
          children: g.jsx("h1", {
            className: "fw-bold text-center p-5",
            children: "ABOUT US",
          }),
        }),
        g.jsx("div", {
          className: "container py-5",
          children: g.jsx("div", {
            className: "about-us-container",
            children: L0.map((e, t) =>
              g.jsxs(
                "div",
                {
                  className: e.style ? "about-div" : "about-div-style",
                  children: [
                    g.jsx("div", {
                      className: "about-img-div",
                      children: g.jsx("img", { src: e.image, alt: e.title }),
                    }),
                    g.jsxs("div", {
                      className: "about-text",
                      children: [
                        g.jsx("h2", {
                          className: "about-us-title",
                          children: e.title,
                        }),
                        g.jsx("p", {
                          className: "about-us-description",
                          children: e.description,
                        }),
                        g.jsx("button", {
                          className: "about-btn",
                          children: g.jsx(Re, {
                            className: "text-decoration-none text-white",
                            to: "/contact",
                            children: "Contact now",
                          }),
                        }),
                      ],
                    }),
                  ],
                },
                t
              )
            ),
          }),
        }),
      ],
    }),
  Hr = { _origin: "https://api.emailjs.com" },
  M0 = (e, t = "https://api.emailjs.com") => {
    (Hr._userID = e), (Hr._origin = t);
  },
  lp = (e, t, n) => {
    if (!e)
      throw "The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";
    if (!t)
      throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!n)
      throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
    return !0;
  };
class rc {
  constructor(t) {
    (this.status = t.status), (this.text = t.responseText);
  }
}
const op = (e, t, n = {}) =>
    new Promise((r, l) => {
      const o = new XMLHttpRequest();
      o.addEventListener("load", ({ target: i }) => {
        const u = new rc(i);
        u.status === 200 || u.text === "OK" ? r(u) : l(u);
      }),
        o.addEventListener("error", ({ target: i }) => {
          l(new rc(i));
        }),
        o.open("POST", Hr._origin + e, !0),
        Object.keys(n).forEach((i) => {
          o.setRequestHeader(i, n[i]);
        }),
        o.send(t);
    }),
  D0 = (e, t, n, r) => {
    const l = r || Hr._userID;
    return (
      lp(l, e, t),
      op(
        "/api/v1.0/email/send",
        JSON.stringify({
          lib_version: "3.2.0",
          user_id: l,
          service_id: e,
          template_id: t,
          template_params: n,
        }),
        { "Content-type": "application/json" }
      )
    );
  },
  z0 = (e) => {
    let t;
    if (
      (typeof e == "string" ? (t = document.querySelector(e)) : (t = e),
      !t || t.nodeName !== "FORM")
    )
      throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
    return t;
  },
  I0 = (e, t, n, r) => {
    const l = r || Hr._userID,
      o = z0(n);
    lp(l, e, t);
    const i = new FormData(o);
    return (
      i.append("lib_version", "3.2.0"),
      i.append("service_id", e),
      i.append("template_id", t),
      i.append("user_id", l),
      op("/api/v1.0/email/send-form", i)
    );
  },
  F0 = { init: M0, send: D0, sendForm: I0 },
  $0 = () => {
    const [e, t] = c.useState(!1),
      [n, r] = c.useState({ user_name: "", user_email: "", message: "" }),
      l = (o) => {
        o.preventDefault();
        try {
          t(!0),
            F0.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", n, "YOUR_USER_ID")
              .then(() => {
                alert("Message sent successfully!"),
                  r({ user_name: "", user_email: "", message: "" });
              })
              .catch((i) => {
                alert("Failed to send the message. Please try again."),
                  console.error("Error:", i);
              })
              .finally(() => {
                t(!1);
              });
        } catch (i) {
          console.error("Unexpected error:", i),
            alert("An unexpected error occurred."),
            t(!1);
        }
      };
    return g.jsxs("div", {
      style: { backgroundColor: "#f7f9fb" },
      children: [
        g.jsx("div", {
          className: "contact-title",
          children: g.jsx("h1", {
            className: "text-center fw-bold p-5",
            children: "CONTACT DETAILS",
          }),
        }),
        g.jsx("div", {
          className:
            "container d-flex justify-content-center pb-5 align-items-center",
          children: g.jsxs("form", {
            action: "",
            onSubmit: l,
            className: "form",
            children: [
              g.jsxs("div", {
                className: "form-field-div",
                children: [
                  g.jsx("input", {
                    type: "text",
                    id: "name",
                    value: n.user_name,
                    onChange: (o) => r({ ...n, user_name: o.target.value }),
                  }),
                  g.jsx("label", { htmlFor: "name", children: "Name" }),
                ],
              }),
              g.jsxs("div", {
                className: "form-field-div",
                children: [
                  g.jsx("input", {
                    type: "email",
                    id: "email",
                    value: n.user_email,
                    onChange: (o) => r({ ...n, user_email: o.target.value }),
                  }),
                  g.jsx("label", { htmlFor: "email", children: "Email" }),
                ],
              }),
              g.jsxs("div", {
                className: "form-field-div",
                children: [
                  g.jsx("textarea", {
                    id: "message",
                    name: "message",
                    value: n.message,
                    onChange: (o) => r({ ...n, message: o.target.value }),
                    rows: "4",
                    required: !0,
                  }),
                  " ",
                  g.jsx("label", { htmlFor: "message", children: "Message" }),
                ],
              }),
              g.jsx("div", {
                children: g.jsx("button", {
                  className: "button",
                  disabled: e,
                  children: e ? "Sending..." : "Send Message",
                }),
              }),
            ],
          }),
        }),
      ],
    });
  };
function A0(e) {
  return qn({
    tag: "svg",
    attr: { viewBox: "0 0 320 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
        },
        child: [],
      },
    ],
  })(e);
}
function U0(e) {
  return qn({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
        },
        child: [],
      },
    ],
  })(e);
}
function B0(e) {
  return qn({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
        },
        child: [],
      },
    ],
  })(e);
}
function H0(e) {
  return qn({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z",
        },
        child: [],
      },
    ],
  })(e);
}
const W0 = () =>
    g.jsx("div", {
      className: "footer-container",
      children: g.jsxs("div", {
        className: "container py-5",
        children: [
          g.jsx("img", { src: "#", alt: "LOGO" }),
          g.jsx("h4", {
            className: "text-center mt-5 mb-3 text-white",
            children: "Social Media Handles",
          }),
          g.jsxs("div", {
            className: "footer-social-media",
            children: [
              g.jsx("div", {
                className: "footer-image",
                children: g.jsx(A0, {}),
              }),
              g.jsx("div", {
                className: "footer-image",
                children: g.jsx(H0, {}),
              }),
              g.jsx("div", {
                className: "footer-image",
                children: g.jsx(U0, {}),
              }),
              g.jsx("div", {
                className: "footer-image",
                children: g.jsx(B0, {}),
              }),
            ],
          }),
          g.jsx("h4", {
            className: "text-center mt-5 mb-3 text-white",
            children: "Easy Contact",
          }),
          g.jsxs("div", {
            children: [
              g.jsx(Re, {
                to: "mailto:pgoldima@yahoo.com",
                target: "blank",
                className: "d-flex align-items-center justify-content-center",
                children: "pgoldima@yahoo.com",
              }),
              g.jsx(Re, {
                to: "tel:08184204450",
                className:
                  "d-flex my-4 align-items-center justify-content-center",
                children: "08184204450",
              }),
            ],
          }),
        ],
      }),
    }),
  V0 = () =>
    g.jsx("div", {
      children: g.jsxs(cg, {
        children: [
          g.jsx(by, {}),
          g.jsxs(Uv, {
            children: [
              g.jsx(Ll, { path: "/", element: g.jsx(P0, {}) }),
              g.jsx(Ll, { path: "/about", element: g.jsx(O0, {}) }),
              g.jsx(Ll, { path: "/contact", element: g.jsx($0, {}) }),
            ],
          }),
          g.jsx(W0, {}),
        ],
      }),
    });
di.createRoot(document.getElementById("root")).render(
  g.jsx(ge.StrictMode, { children: g.jsx(V0, {}) })
);
