var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __require = /* @__PURE__ */ ((x5) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x5, {
  get: (a6, b4) => (typeof require !== "undefined" ? require : a6)[b4]
}) : x5)(function(x5) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x5 + '" is not supported');
});
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// .wrangler/tmp/bundle-AGHusP/checked-fetch.js
function checkURL(request, init2) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init2) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
var urls;
var init_checked_fetch = __esm({
  ".wrangler/tmp/bundle-AGHusP/checked-fetch.js"() {
    "use strict";
    urls = /* @__PURE__ */ new Set();
    __name(checkURL, "checkURL");
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        const [request, init2] = argArray;
        checkURL(request, init2);
        return Reflect.apply(target, thisArg, argArray);
      }
    });
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_checked_fetch();
    init_modules_watch_stub();
  }
});

// ../../../AppData/Local/pnpm-cache/dlx/b9e695ba2d2dc904251c8241b58aca395678c13c8a527d83783e59324265e1db/19c3db68b0c-42a8/node_modules/.pnpm/wrangler@4.63.0/node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "../../../AppData/Local/pnpm-cache/dlx/b9e695ba2d2dc904251c8241b58aca395678c13c8a527d83783e59324265e1db/19c3db68b0c-42a8/node_modules/.pnpm/wrangler@4.63.0/node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// .output/server/chunks/_/query_compiler_fast_bg.mjs
var query_compiler_fast_bg_exports = {};
__export(query_compiler_fast_bg_exports, {
  QueryCompiler: () => F,
  __wbg_Error_e83987f665cf5504: () => O,
  __wbg_Number_bb48ca12f395cd08: () => B,
  __wbg_String_8f0eb39a4a4c2f66: () => N,
  __wbg___wbindgen_boolean_get_6d5a1ee65bab5f68: () => U,
  __wbg___wbindgen_debug_string_df47ffb5e35e6763: () => R,
  __wbg___wbindgen_in_bb933bd9e1b3bc0f: () => $,
  __wbg___wbindgen_is_object_c818261d21f283a4: () => q,
  __wbg___wbindgen_is_string_fbb76cb2940daafd: () => C,
  __wbg___wbindgen_is_undefined_2d472862bd29a478: () => k,
  __wbg___wbindgen_jsval_loose_eq_b664b38a2f582147: () => W,
  __wbg___wbindgen_number_get_a20bf9b85341449d: () => V,
  __wbg___wbindgen_string_get_e4f06c90489ad01b: () => z,
  __wbg___wbindgen_throw_b855445ff6a94295: () => L,
  __wbg_entries_e171b586f8f6bdbf: () => P,
  __wbg_getTime_14776bfb48a1bff9: () => Q,
  __wbg_get_7bed016f185add81: () => Y,
  __wbg_get_with_ref_key_1dc361bd10053bfe: () => G,
  __wbg_instanceof_ArrayBuffer_70beb1189ca63b38: () => J,
  __wbg_instanceof_Uint8Array_20c8e73002f7af98: () => X,
  __wbg_isSafeInteger_d216eda7911dde36: () => H,
  __wbg_length_69bca3cb64fc8748: () => K,
  __wbg_length_cdd215e10d9dd507: () => Z,
  __wbg_new_0_f9740686d739025c: () => v,
  __wbg_new_1acc0b6eea89d040: () => ee,
  __wbg_new_5a79be3ab53b8aa5: () => te,
  __wbg_new_68651c719dcda04e: () => ne,
  __wbg_new_e17d9f43105b08be: () => re,
  __wbg_prototypesetcall_2a6620b6922694b2: () => _e,
  __wbg_set_3f1d0b984ed272ed: () => oe,
  __wbg_set_907fb406c34a251d: () => ce,
  __wbg_set_c213c871859d6500: () => ie,
  __wbg_set_message_82ae475bb413aa5c: () => se,
  __wbg_set_wasm: () => D,
  __wbindgen_cast_2241b6af4c4b2941: () => ue,
  __wbindgen_cast_4625c577ab2ec9ee: () => fe,
  __wbindgen_cast_9ae0607507abb057: () => be,
  __wbindgen_cast_d6cd19b81560fd6e: () => de,
  __wbindgen_init_externref_table: () => ae
});
import "node:buffer";
import "node:timers";
import "node:events";
import "node:process";
import "cloudflare:workers";
function D(e11) {
  n = e11;
}
function a() {
  return (null === t || 0 === t.byteLength) && (t = new Uint8Array(n.memory.buffer)), t;
}
function m(e11, n3) {
  return (function(e12, n4) {
    return r += n4, r >= 2146435072 && (_ = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), _.decode(), r = n4), _.decode(a().subarray(e12, e12 + n4));
  })(e11 >>>= 0, n3);
}
function l(e11, n3, t8) {
  if (void 0 === t8) {
    const t9 = i.encode(e11), _5 = n3(t9.length, 1) >>> 0;
    return a().subarray(_5, _5 + t9.length).set(t9), o = t9.length, _5;
  }
  let _4 = e11.length, r6 = n3(_4, 1) >>> 0;
  const c6 = a();
  let s6 = 0;
  for (; s6 < _4; s6++) {
    const n4 = e11.charCodeAt(s6);
    if (n4 > 127) break;
    c6[r6 + s6] = n4;
  }
  if (s6 !== _4) {
    0 !== s6 && (e11 = e11.slice(s6)), r6 = t8(r6, _4, _4 = s6 + 3 * e11.length, 1) >>> 0;
    const n4 = a().subarray(r6 + s6, r6 + _4);
    s6 += i.encodeInto(e11, n4).written, r6 = t8(r6, _4, s6, 1) >>> 0;
  }
  return o = s6, r6;
}
function u() {
  return (null === c || true === c.buffer.detached || void 0 === c.buffer.detached && c.buffer !== n.memory.buffer) && (c = new DataView(n.memory.buffer)), c;
}
function x(e11) {
  return null == e11;
}
function S(e11) {
  const n3 = typeof e11;
  if ("number" == n3 || "boolean" == n3 || null == e11) return `${e11}`;
  if ("string" == n3) return `"${e11}"`;
  if ("symbol" == n3) {
    const n4 = e11.description;
    return null == n4 ? "Symbol" : `Symbol(${n4})`;
  }
  if ("function" == n3) {
    const n4 = e11.name;
    return "string" == typeof n4 && n4.length > 0 ? `Function(${n4})` : "Function";
  }
  if (Array.isArray(e11)) {
    const n4 = e11.length;
    let t9 = "[";
    n4 > 0 && (t9 += S(e11[0]));
    for (let _5 = 1; _5 < n4; _5++) t9 += ", " + S(e11[_5]);
    return t9 += "]", t9;
  }
  const t8 = /\[object ([^\]]+)\]/.exec(toString.call(e11));
  let _4;
  if (!(t8 && t8.length > 1)) return toString.call(e11);
  if (_4 = t8[1], "Object" == _4) try {
    return "Object(" + JSON.stringify(e11) + ")";
  } catch {
    return "Object";
  }
  return e11 instanceof Error ? `${e11.name}: ${e11.message}
${e11.stack}` : _4;
}
function w(e11) {
  const t8 = n.__wbindgen_externrefs.get(e11);
  return n.__externref_table_dealloc(e11), t8;
}
function O(e11, n3) {
  return Error(m(e11, n3));
}
function B(e11) {
  return Number(e11);
}
function N(e11, t8) {
  const _4 = l(String(t8), n.__wbindgen_malloc, n.__wbindgen_realloc), r6 = o;
  u().setInt32(e11 + 4, r6, true), u().setInt32(e11 + 0, _4, true);
}
function U(e11) {
  const n3 = "boolean" == typeof e11 ? e11 : void 0;
  return x(n3) ? 16777215 : n3 ? 1 : 0;
}
function R(e11, t8) {
  const _4 = l(S(t8), n.__wbindgen_malloc, n.__wbindgen_realloc), r6 = o;
  u().setInt32(e11 + 4, r6, true), u().setInt32(e11 + 0, _4, true);
}
function $(e11, n3) {
  return e11 in n3;
}
function q(e11) {
  return "object" == typeof e11 && null !== e11;
}
function C(e11) {
  return "string" == typeof e11;
}
function k(e11) {
  return void 0 === e11;
}
function W(e11, n3) {
  return e11 == n3;
}
function V(e11, n3) {
  const t8 = "number" == typeof n3 ? n3 : void 0;
  u().setFloat64(e11 + 8, x(t8) ? 0 : t8, true), u().setInt32(e11 + 0, !x(t8), true);
}
function z(e11, t8) {
  const _4 = "string" == typeof t8 ? t8 : void 0;
  var r6 = x(_4) ? 0 : l(_4, n.__wbindgen_malloc, n.__wbindgen_realloc), i6 = o;
  u().setInt32(e11 + 4, i6, true), u().setInt32(e11 + 0, r6, true);
}
function L(e11, n3) {
  throw new Error(m(e11, n3));
}
function P(e11) {
  return Object.entries(e11);
}
function Q(e11) {
  return e11.getTime();
}
function Y(e11, n3) {
  return e11[n3 >>> 0];
}
function G(e11, n3) {
  return e11[n3];
}
function J(e11) {
  let n3;
  try {
    n3 = e11 instanceof ArrayBuffer;
  } catch {
    n3 = false;
  }
  return n3;
}
function X(e11) {
  let n3;
  try {
    n3 = e11 instanceof Uint8Array;
  } catch {
    n3 = false;
  }
  return n3;
}
function H(e11) {
  return Number.isSafeInteger(e11);
}
function K(e11) {
  return e11.length;
}
function Z(e11) {
  return e11.length;
}
function v() {
  return /* @__PURE__ */ new Date();
}
function ee() {
  return new Object();
}
function te(e11) {
  return new Uint8Array(e11);
}
function ne() {
  return /* @__PURE__ */ new Map();
}
function re() {
  return new Array();
}
function _e(e11, n3, t8) {
  Uint8Array.prototype.set.call((function(e12, n4) {
    return e12 >>>= 0, a().subarray(e12 / 1, e12 / 1 + n4);
  })(e11, n3), t8);
}
function oe(e11, n3, t8) {
  e11[n3] = t8;
}
function ce(e11, n3, t8) {
  return e11.set(n3, t8);
}
function ie(e11, n3, t8) {
  e11[n3 >>> 0] = t8;
}
function se(n3, t8) {
  ar.PRISMA_WASM_PANIC_REGISTRY.set_message(m(n3, t8));
}
function ue(e11, n3) {
  return m(e11, n3);
}
function fe(e11) {
  return BigInt.asUintN(64, e11);
}
function be(e11) {
  return e11;
}
function de(e11) {
  return e11;
}
function ae() {
  const e11 = n.__wbindgen_externrefs, t8 = e11.grow(4);
  e11.set(0, void 0), e11.set(t8 + 0, void 0), e11.set(t8 + 1, null), e11.set(t8 + 2, true), e11.set(t8 + 3, false);
}
var h, n, t, _, r, o, i, c, s, F;
var init_query_compiler_fast_bg = __esm({
  ".output/server/chunks/_/query_compiler_fast_bg.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_nitro();
    h = /* @__PURE__ */ __name(() => {
    }, "h");
    __name(D, "D");
    h.prototype = h;
    t = null;
    __name(a, "a");
    _ = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
    _.decode();
    r = 0;
    __name(m, "m");
    o = 0;
    i = new TextEncoder();
    __name(l, "l");
    "encodeInto" in i || (i.encodeInto = function(e11, n3) {
      const t8 = i.encode(e11);
      return n3.set(t8), { read: e11.length, written: t8.length };
    });
    c = null;
    __name(u, "u");
    __name(x, "x");
    __name(S, "S");
    __name(w, "w");
    s = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
    }, "register"), unregister: /* @__PURE__ */ __name(() => {
    }, "unregister") } : new FinalizationRegistry((e11) => n.__wbg_querycompiler_free(e11 >>> 0, 1));
    F = class {
      static {
        __name(this, "F");
      }
      __destroy_into_raw() {
        const e11 = this.__wbg_ptr;
        return this.__wbg_ptr = 0, s.unregister(this), e11;
      }
      free() {
        const e11 = this.__destroy_into_raw();
        n.__wbg_querycompiler_free(e11, 0);
      }
      compileBatch(e11) {
        const t8 = l(e11, n.__wbindgen_malloc, n.__wbindgen_realloc), _4 = o, r6 = n.querycompiler_compileBatch(this.__wbg_ptr, t8, _4);
        if (r6[2]) throw w(r6[1]);
        return w(r6[0]);
      }
      constructor(e11) {
        const t8 = n.querycompiler_new(e11);
        if (t8[2]) throw w(t8[1]);
        return this.__wbg_ptr = t8[0] >>> 0, s.register(this, this.__wbg_ptr, this), this;
      }
      compile(e11) {
        const t8 = l(e11, n.__wbindgen_malloc, n.__wbindgen_realloc), _4 = o, r6 = n.querycompiler_compile(this.__wbg_ptr, t8, _4);
        if (r6[2]) throw w(r6[1]);
        return w(r6[0]);
      }
    };
    __name(O, "O");
    __name(B, "B");
    __name(N, "N");
    __name(U, "U");
    __name(R, "R");
    __name($, "$");
    __name(q, "q");
    __name(C, "C");
    __name(k, "k");
    __name(W, "W");
    __name(V, "V");
    __name(z, "z");
    __name(L, "L");
    __name(P, "P");
    __name(Q, "Q");
    __name(Y, "Y");
    __name(G, "G");
    __name(J, "J");
    __name(X, "X");
    __name(H, "H");
    __name(K, "K");
    __name(Z, "Z");
    __name(v, "v");
    __name(ee, "ee");
    __name(te, "te");
    __name(ne, "ne");
    __name(re, "re");
    __name(_e, "_e");
    __name(oe, "oe");
    __name(ce, "ce");
    __name(ie, "ie");
    __name(se, "se");
    __name(ue, "ue");
    __name(fe, "fe");
    __name(be, "be");
    __name(de, "de");
    __name(ae, "ae");
    Symbol.dispose && (F.prototype[Symbol.dispose] = F.prototype.free);
  }
});

// .output/server/chunks/_/query_compiler_fast_bg2.mjs
var query_compiler_fast_bg2_exports = {};
__export(query_compiler_fast_bg2_exports, {
  default: () => a2
});
var a2;
var init_query_compiler_fast_bg2 = __esm({
  ".output/server/chunks/_/query_compiler_fast_bg2.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    a2 = import("./57e7a36c2a815bccc54346f1aa0e141274363527-query_compiler_fast_bg-57e7a36c2a815bcc.wasm").then((a6) => a6.default || a6);
  }
});

// .output/server/chunks/_/prisma.mjs
import { Buffer as h2 } from "node:buffer";
import * as f from "node:events";
import * as p from "node:util";
import * as m3 from "node:crypto";
import * as g from "node:dns";
import y from "node:fs/promises";
import * as w2 from "node:net";
import * as b from "node:tls";
import * as v2 from "node:path";
import * as _2 from "node:stream";
import * as S2 from "node:string_decoder";
import { setImmediate as E } from "node:timers";
function hasBatchIndex(n3) {
  return "number" == typeof n3.batchRequestIdx;
}
function setClassName(n3, l6) {
  Object.defineProperty(n3, "name", { value: l6, configurable: true });
}
function setClassName2(n3, l6) {
  Object.defineProperty(n3, "name", { value: l6, configurable: true });
}
function digitsToString(n3) {
  var l6, c6, u5, h7 = n3.length - 1, f6 = "", p5 = n3[0];
  if (h7 > 0) {
    for (f6 += p5, l6 = 1; l6 < h7; l6++) (c6 = 7 - (u5 = n3[l6] + "").length) && (f6 += getZeroString(c6)), f6 += u5;
    (c6 = 7 - (u5 = (p5 = n3[l6]) + "").length) && (f6 += getZeroString(c6));
  } else if (0 === p5) return "0";
  for (; p5 % 10 == 0; ) p5 /= 10;
  return f6 + p5;
}
function checkInt32(n3, l6, c6) {
  if (n3 !== ~~n3 || n3 < l6 || n3 > c6) throw Error(se2 + n3);
}
function checkRoundingDigits(n3, l6, c6, u5) {
  var h7, f6, p5, m7;
  for (f6 = n3[0]; f6 >= 10; f6 /= 10) --l6;
  return --l6 < 0 ? (l6 += 7, h7 = 0) : (h7 = Math.ceil((l6 + 1) / 7), l6 %= 7), f6 = ge(10, 7 - l6), m7 = n3[h7] % f6 | 0, null == u5 ? l6 < 3 ? (0 == l6 ? m7 = m7 / 100 | 0 : 1 == l6 && (m7 = m7 / 10 | 0), p5 = c6 < 4 && 99999 == m7 || c6 > 3 && 49999 == m7 || 5e4 == m7 || 0 == m7) : p5 = (c6 < 4 && m7 + 1 == f6 || c6 > 3 && m7 + 1 == f6 / 2) && (n3[h7 + 1] / f6 / 100 | 0) == ge(10, l6 - 2) - 1 || (m7 == f6 / 2 || 0 == m7) && !(n3[h7 + 1] / f6 / 100 | 0) : l6 < 4 ? (0 == l6 ? m7 = m7 / 1e3 | 0 : 1 == l6 ? m7 = m7 / 100 | 0 : 2 == l6 && (m7 = m7 / 10 | 0), p5 = (u5 || c6 < 4) && 9999 == m7 || !u5 && c6 > 3 && 4999 == m7) : p5 = ((u5 || c6 < 4) && m7 + 1 == f6 || !u5 && c6 > 3 && m7 + 1 == f6 / 2) && (n3[h7 + 1] / f6 / 1e3 | 0) == ge(10, l6 - 3) - 1, p5;
}
function convertBase(n3, l6, c6) {
  for (var u5, h7, f6 = [0], p5 = 0, m7 = n3.length; p5 < m7; ) {
    for (h7 = f6.length; h7--; ) f6[h7] *= l6;
    for (f6[0] += K2.indexOf(n3.charAt(p5++)), u5 = 0; u5 < f6.length; u5++) f6[u5] > c6 - 1 && (void 0 === f6[u5 + 1] && (f6[u5 + 1] = 0), f6[u5 + 1] += f6[u5] / c6 | 0, f6[u5] %= c6);
  }
  return f6.reverse();
}
function finalise(n3, l6, c6, u5) {
  var h7, f6, p5, m7, g5, y5, w5, b4, v5, _4 = n3.constructor;
  e: if (null != l6) {
    if (!(b4 = n3.d)) return n3;
    for (h7 = 1, m7 = b4[0]; m7 >= 10; m7 /= 10) h7++;
    if ((f6 = l6 - h7) < 0) f6 += 7, p5 = l6, g5 = (w5 = b4[v5 = 0]) / ge(10, h7 - p5 - 1) % 10 | 0;
    else if ((v5 = Math.ceil((f6 + 1) / 7)) >= (m7 = b4.length)) {
      if (!u5) break e;
      for (; m7++ <= v5; ) b4.push(0);
      w5 = g5 = 0, h7 = 1, p5 = (f6 %= 7) - 7 + 1;
    } else {
      for (w5 = m7 = b4[v5], h7 = 1; m7 >= 10; m7 /= 10) h7++;
      g5 = (p5 = (f6 %= 7) - 7 + h7) < 0 ? 0 : w5 / ge(10, h7 - p5 - 1) % 10 | 0;
    }
    if (u5 = u5 || l6 < 0 || void 0 !== b4[v5 + 1] || (p5 < 0 ? w5 : w5 % ge(10, h7 - p5 - 1)), y5 = c6 < 4 ? (g5 || u5) && (0 == c6 || c6 == (n3.s < 0 ? 3 : 2)) : g5 > 5 || 5 == g5 && (4 == c6 || u5 || 6 == c6 && (f6 > 0 ? p5 > 0 ? w5 / ge(10, h7 - p5) : 0 : b4[v5 - 1]) % 10 & 1 || c6 == (n3.s < 0 ? 8 : 7)), l6 < 1 || !b4[0]) return b4.length = 0, y5 ? (l6 -= n3.e + 1, b4[0] = ge(10, (7 - l6 % 7) % 7), n3.e = -l6 || 0) : b4[0] = n3.e = 0, n3;
    if (0 == f6 ? (b4.length = v5, m7 = 1, v5--) : (b4.length = v5 + 1, m7 = ge(10, 7 - f6), b4[v5] = p5 > 0 ? (w5 / ge(10, h7 - p5) % ge(10, p5) | 0) * m7 : 0), y5) for (; ; ) {
      if (0 == v5) {
        for (f6 = 1, p5 = b4[0]; p5 >= 10; p5 /= 10) f6++;
        for (p5 = b4[0] += m7, m7 = 1; p5 >= 10; p5 /= 10) m7++;
        f6 != m7 && (n3.e++, b4[0] == Ae && (b4[0] = 1));
        break;
      }
      if (b4[v5] += m7, b4[v5] != Ae) break;
      b4[v5--] = 0, m7 = 1;
    }
    for (f6 = b4.length; 0 === b4[--f6]; ) b4.pop();
  }
  return ne2 && (n3.e > _4.maxE ? (n3.d = null, n3.e = NaN) : n3.e < _4.minE && (n3.e = 0, n3.d = [0])), n3;
}
function finiteToString(n3, l6, c6) {
  if (!n3.isFinite()) return nonFiniteToString(n3);
  var u5, h7 = n3.e, f6 = digitsToString(n3.d), p5 = f6.length;
  return l6 ? (c6 && (u5 = c6 - p5) > 0 ? f6 = f6.charAt(0) + "." + f6.slice(1) + getZeroString(u5) : p5 > 1 && (f6 = f6.charAt(0) + "." + f6.slice(1)), f6 = f6 + (n3.e < 0 ? "e" : "e+") + n3.e) : h7 < 0 ? (f6 = "0." + getZeroString(-h7 - 1) + f6, c6 && (u5 = c6 - p5) > 0 && (f6 += getZeroString(u5))) : h7 >= p5 ? (f6 += getZeroString(h7 + 1 - p5), c6 && (u5 = c6 - h7 - 1) > 0 && (f6 = f6 + "." + getZeroString(u5))) : ((u5 = h7 + 1) < p5 && (f6 = f6.slice(0, u5) + "." + f6.slice(u5)), c6 && (u5 = c6 - p5) > 0 && (h7 + 1 === p5 && (f6 += "."), f6 += getZeroString(u5))), f6;
}
function getBase10Exponent(n3, l6) {
  var c6 = n3[0];
  for (l6 *= 7; c6 >= 10; c6 /= 10) l6++;
  return l6;
}
function getLn10(n3, l6, c6) {
  if (l6 > Ie) throw ne2 = true, c6 && (n3.precision = c6), Error(ae2);
  return finalise(new n3(Z2), l6, 1, true);
}
function getPi(n3, l6, c6) {
  if (l6 > ke) throw Error(ae2);
  return finalise(new n3(X2), l6, c6, true);
}
function getPrecision(n3) {
  var l6 = n3.length - 1, c6 = 7 * l6 + 1;
  if (l6 = n3[l6]) {
    for (; l6 % 10 == 0; l6 /= 10) c6--;
    for (l6 = n3[0]; l6 >= 10; l6 /= 10) c6++;
  }
  return c6;
}
function getZeroString(n3) {
  for (var l6 = ""; n3--; ) l6 += "0";
  return l6;
}
function intPow(n3, l6, c6, u5) {
  var h7, f6 = new n3(1), p5 = Math.ceil(u5 / 7 + 4);
  for (ne2 = false; ; ) {
    if (c6 % 2 && truncate$2((f6 = f6.times(l6)).d, p5) && (h7 = true), 0 === (c6 = fe2(c6 / 2))) {
      c6 = f6.d.length - 1, h7 && 0 === f6.d[c6] && ++f6.d[c6];
      break;
    }
    truncate$2((l6 = l6.times(l6)).d, p5);
  }
  return ne2 = true, f6;
}
function isOdd(n3) {
  return 1 & n3.d[n3.d.length - 1];
}
function maxOrMin(n3, l6, c6) {
  for (var u5, h7, f6 = new n3(l6[0]), p5 = 0; ++p5 < l6.length; ) {
    if (!(h7 = new n3(l6[p5])).s) {
      f6 = h7;
      break;
    }
    ((u5 = f6.cmp(h7)) === c6 || 0 === u5 && f6.s === c6) && (f6 = h7);
  }
  return f6;
}
function naturalExponential(n3, l6) {
  var c6, u5, h7, f6, p5, m7, g5, y5 = 0, w5 = 0, b4 = 0, v5 = n3.constructor, _4 = v5.rounding, S6 = v5.precision;
  if (!n3.d || !n3.d[0] || n3.e > 17) return new v5(n3.d ? n3.d[0] ? n3.s < 0 ? 0 : 1 / 0 : 1 : n3.s ? n3.s < 0 ? 0 : n3 : NaN);
  for (null == l6 ? (ne2 = false, g5 = S6) : g5 = l6, m7 = new v5(0.03125); n3.e > -2; ) n3 = n3.times(m7), b4 += 5;
  for (g5 += u5 = Math.log(ge(2, b4)) / Math.LN10 * 2 + 5 | 0, c6 = f6 = p5 = new v5(1), v5.precision = g5; ; ) {
    if (f6 = finalise(f6.times(n3), g5, 1), c6 = c6.times(++w5), digitsToString((m7 = p5.plus(Me(f6, c6, g5, 1))).d).slice(0, g5) === digitsToString(p5.d).slice(0, g5)) {
      for (h7 = b4; h7--; ) p5 = finalise(p5.times(p5), g5, 1);
      if (null != l6) return v5.precision = S6, p5;
      if (!(y5 < 3 && checkRoundingDigits(p5.d, g5 - u5, _4, y5))) return finalise(p5, v5.precision = S6, _4, ne2 = true);
      v5.precision = g5 += 10, c6 = f6 = m7 = new v5(1), w5 = 0, y5++;
    }
    p5 = m7;
  }
}
function naturalLogarithm(n3, l6) {
  var c6, u5, h7, f6, p5, m7, g5, y5, w5, b4, v5, _4 = 1, S6 = n3, E5 = S6.d, T5 = S6.constructor, x5 = T5.rounding, P5 = T5.precision;
  if (S6.s < 0 || !E5 || !E5[0] || !S6.e && 1 == E5[0] && 1 == E5.length) return new T5(E5 && !E5[0] ? -1 / 0 : 1 != S6.s ? NaN : E5 ? 0 : S6);
  if (null == l6 ? (ne2 = false, w5 = P5) : w5 = l6, T5.precision = w5 += 10, u5 = (c6 = digitsToString(E5)).charAt(0), !(Math.abs(f6 = S6.e) < 15e14)) return y5 = getLn10(T5, w5 + 2, P5).times(f6 + ""), S6 = naturalLogarithm(new T5(u5 + "." + c6.slice(1)), w5 - 10).plus(y5), T5.precision = P5, null == l6 ? finalise(S6, P5, x5, ne2 = true) : S6;
  for (; u5 < 7 && 1 != u5 || 1 == u5 && c6.charAt(1) > 3; ) u5 = (c6 = digitsToString((S6 = S6.times(n3)).d)).charAt(0), _4++;
  for (f6 = S6.e, u5 > 1 ? (S6 = new T5("0." + c6), f6++) : S6 = new T5(u5 + "." + c6.slice(1)), b4 = S6, g5 = p5 = S6 = Me(S6.minus(1), S6.plus(1), w5, 1), v5 = finalise(S6.times(S6), w5, 1), h7 = 3; ; ) {
    if (p5 = finalise(p5.times(v5), w5, 1), digitsToString((y5 = g5.plus(Me(p5, new T5(h7), w5, 1))).d).slice(0, w5) === digitsToString(g5.d).slice(0, w5)) {
      if (g5 = g5.times(2), 0 !== f6 && (g5 = g5.plus(getLn10(T5, w5 + 2, P5).times(f6 + ""))), g5 = Me(g5, new T5(_4), w5, 1), null != l6) return T5.precision = P5, g5;
      if (!checkRoundingDigits(g5.d, w5 - 10, x5, m7)) return finalise(g5, T5.precision = P5, x5, ne2 = true);
      T5.precision = w5 += 10, y5 = p5 = S6 = Me(b4.minus(1), b4.plus(1), w5, 1), v5 = finalise(S6.times(S6), w5, 1), h7 = m7 = 1;
    }
    g5 = y5, h7 += 2;
  }
}
function nonFiniteToString(n3) {
  return String(n3.s * n3.s / 0);
}
function parseDecimal(n3, l6) {
  var c6, u5, h7;
  for ((c6 = l6.indexOf(".")) > -1 && (l6 = l6.replace(".", "")), (u5 = l6.search(/e/i)) > 0 ? (c6 < 0 && (c6 = u5), c6 += +l6.slice(u5 + 1), l6 = l6.substring(0, u5)) : c6 < 0 && (c6 = l6.length), u5 = 0; 48 === l6.charCodeAt(u5); u5++) ;
  for (h7 = l6.length; 48 === l6.charCodeAt(h7 - 1); --h7) ;
  if (l6 = l6.slice(u5, h7)) {
    if (h7 -= u5, n3.e = c6 = c6 - u5 - 1, n3.d = [], u5 = (c6 + 1) % 7, c6 < 0 && (u5 += 7), u5 < h7) {
      for (u5 && n3.d.push(+l6.slice(0, u5)), h7 -= 7; u5 < h7; ) n3.d.push(+l6.slice(u5, u5 += 7));
      u5 = 7 - (l6 = l6.slice(u5)).length;
    } else u5 -= h7;
    for (; u5--; ) l6 += "0";
    n3.d.push(+l6), ne2 && (n3.e > n3.constructor.maxE ? (n3.d = null, n3.e = NaN) : n3.e < n3.constructor.minE && (n3.e = 0, n3.d = [0]));
  } else n3.e = 0, n3.d = [0];
  return n3;
}
function taylorSeries(n3, l6, c6, u5, h7) {
  var f6, p5, m7, g5, y5 = n3.precision, w5 = Math.ceil(y5 / 7);
  for (ne2 = false, g5 = c6.times(c6), m7 = new n3(u5); ; ) {
    if (p5 = Me(m7.times(g5), new n3(l6++ * l6++), y5, 1), m7 = h7 ? u5.plus(p5) : u5.minus(p5), u5 = Me(p5.times(g5), new n3(l6++ * l6++), y5, 1), void 0 !== (p5 = m7.plus(u5)).d[w5]) {
      for (f6 = w5; p5.d[f6] === m7.d[f6] && f6--; ) ;
      if (-1 == f6) break;
    }
    f6 = m7, m7 = u5, u5 = p5, p5 = f6;
  }
  return ne2 = true, p5.d.length = w5 + 1, p5;
}
function tinyPow(n3, l6) {
  for (var c6 = n3; --l6; ) c6 *= n3;
  return c6;
}
function toLessThanHalfPi(n3, l6) {
  var c6, u5 = l6.s < 0, h7 = getPi(n3, n3.precision, 1), f6 = h7.times(0.5);
  if ((l6 = l6.abs()).lte(f6)) return W2 = u5 ? 4 : 1, l6;
  if ((c6 = l6.divToInt(h7)).isZero()) W2 = u5 ? 3 : 2;
  else {
    if ((l6 = l6.minus(c6.times(h7))).lte(f6)) return W2 = isOdd(c6) ? u5 ? 2 : 3 : u5 ? 4 : 1, l6;
    W2 = isOdd(c6) ? u5 ? 1 : 4 : u5 ? 3 : 2;
  }
  return l6.minus(h7).abs();
}
function toStringBinary(n3, l6, c6, u5) {
  var h7, f6, p5, m7, g5, y5, w5, b4, v5, _4 = n3.constructor, S6 = void 0 !== c6;
  if (S6 ? (checkInt32(c6, 1, G2), void 0 === u5 ? u5 = _4.rounding : checkInt32(u5, 0, 8)) : (c6 = _4.precision, u5 = _4.rounding), n3.isFinite()) {
    for (S6 ? (h7 = 2, 16 == l6 ? c6 = 4 * c6 - 3 : 8 == l6 && (c6 = 3 * c6 - 2)) : h7 = l6, (p5 = (w5 = finiteToString(n3)).indexOf(".")) >= 0 && (w5 = w5.replace(".", ""), (v5 = new _4(1)).e = w5.length - p5, v5.d = convertBase(finiteToString(v5), 10, h7), v5.e = v5.d.length), f6 = g5 = (b4 = convertBase(w5, 10, h7)).length; 0 == b4[--g5]; ) b4.pop();
    if (b4[0]) {
      if (p5 < 0 ? f6-- : ((n3 = new _4(n3)).d = b4, n3.e = f6, b4 = (n3 = Me(n3, v5, c6, u5, 0, h7)).d, f6 = n3.e, y5 = V2), p5 = b4[c6], m7 = h7 / 2, y5 = y5 || void 0 !== b4[c6 + 1], y5 = u5 < 4 ? (void 0 !== p5 || y5) && (0 === u5 || u5 === (n3.s < 0 ? 3 : 2)) : p5 > m7 || p5 === m7 && (4 === u5 || y5 || 6 === u5 && 1 & b4[c6 - 1] || u5 === (n3.s < 0 ? 8 : 7)), b4.length = c6, y5) for (; ++b4[--c6] > h7 - 1; ) b4[c6] = 0, c6 || (++f6, b4.unshift(1));
      for (g5 = b4.length; !b4[g5 - 1]; --g5) ;
      for (p5 = 0, w5 = ""; p5 < g5; p5++) w5 += K2.charAt(b4[p5]);
      if (S6) {
        if (g5 > 1) if (16 == l6 || 8 == l6) {
          for (p5 = 16 == l6 ? 4 : 3, --g5; g5 % p5; g5++) w5 += "0";
          for (g5 = (b4 = convertBase(w5, h7, l6)).length; !b4[g5 - 1]; --g5) ;
          for (p5 = 1, w5 = "1."; p5 < g5; p5++) w5 += K2.charAt(b4[p5]);
        } else w5 = w5.charAt(0) + "." + w5.slice(1);
        w5 = w5 + (f6 < 0 ? "p" : "p+") + f6;
      } else if (f6 < 0) {
        for (; ++f6; ) w5 = "0" + w5;
        w5 = "0." + w5;
      } else if (++f6 > g5) for (f6 -= g5; f6--; ) w5 += "0";
      else f6 < g5 && (w5 = w5.slice(0, f6) + "." + w5.slice(f6));
    } else w5 = S6 ? "0p+0" : "0";
    w5 = (16 == l6 ? "0x" : 2 == l6 ? "0b" : 8 == l6 ? "0o" : "") + w5;
  } else w5 = nonFiniteToString(n3);
  return n3.s < 0 ? "-" + w5 : w5;
}
function truncate$2(n3, l6) {
  if (n3.length > l6) return n3.length = l6, true;
}
function abs(n3) {
  return new this(n3).abs();
}
function acos(n3) {
  return new this(n3).acos();
}
function acosh(n3) {
  return new this(n3).acosh();
}
function add$1(n3, l6) {
  return new this(n3).plus(l6);
}
function asin(n3) {
  return new this(n3).asin();
}
function asinh(n3) {
  return new this(n3).asinh();
}
function atan(n3) {
  return new this(n3).atan();
}
function atanh(n3) {
  return new this(n3).atanh();
}
function atan2(n3, l6) {
  n3 = new this(n3), l6 = new this(l6);
  var c6, u5 = this.precision, h7 = this.rounding, f6 = u5 + 4;
  return n3.s && l6.s ? n3.d || l6.d ? !l6.d || n3.isZero() ? (c6 = l6.s < 0 ? getPi(this, u5, h7) : new this(0)).s = n3.s : !n3.d || l6.isZero() ? (c6 = getPi(this, f6, 1).times(0.5)).s = n3.s : l6.s < 0 ? (this.precision = f6, this.rounding = 1, c6 = this.atan(Me(n3, l6, f6, 1)), l6 = getPi(this, f6, 1), this.precision = u5, this.rounding = h7, c6 = n3.s < 0 ? c6.minus(l6) : c6.plus(l6)) : c6 = this.atan(Me(n3, l6, f6, 1)) : (c6 = getPi(this, f6, 1).times(l6.s > 0 ? 0.25 : 0.75)).s = n3.s : c6 = new this(NaN), c6;
}
function cbrt(n3) {
  return new this(n3).cbrt();
}
function ceil(n3) {
  return finalise(n3 = new this(n3), n3.e + 1, 2);
}
function clamp(n3, l6, c6) {
  return new this(n3).clamp(l6, c6);
}
function config$1(n3) {
  if (!n3 || "object" != typeof n3) throw Error(ie2 + "Object expected");
  var l6, c6, u5, h7 = true === n3.defaults, f6 = ["precision", 1, G2, "rounding", 0, 8, "toExpNeg", -z2, 0, "toExpPos", 0, z2, "maxE", 0, z2, "minE", -z2, 0, "modulo", 0, 9];
  for (l6 = 0; l6 < f6.length; l6 += 3) if (c6 = f6[l6], h7 && (this[c6] = ee2[c6]), void 0 !== (u5 = n3[c6])) {
    if (!(fe2(u5) === u5 && u5 >= f6[l6 + 1] && u5 <= f6[l6 + 2])) throw Error(se2 + c6 + ": " + u5);
    this[c6] = u5;
  }
  if (c6 = "crypto", h7 && (this[c6] = ee2[c6]), void 0 !== (u5 = n3[c6])) {
    if (true !== u5 && false !== u5 && 0 !== u5 && 1 !== u5) throw Error(se2 + c6 + ": " + u5);
    if (u5) {
      if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw Error(oe2);
      this[c6] = true;
    } else this[c6] = false;
  }
  return this;
}
function cos(n3) {
  return new this(n3).cos();
}
function cosh(n3) {
  return new this(n3).cosh();
}
function div(n3, l6) {
  return new this(n3).div(l6);
}
function exp(n3) {
  return new this(n3).exp();
}
function floor(n3) {
  return finalise(n3 = new this(n3), n3.e + 1, 3);
}
function hypot() {
  var n3, l6, c6 = new this(0);
  for (ne2 = false, n3 = 0; n3 < arguments.length; ) if ((l6 = new this(arguments[n3++])).d) c6.d && (c6 = c6.plus(l6.times(l6)));
  else {
    if (l6.s) return ne2 = true, new this(1 / 0);
    c6 = l6;
  }
  return ne2 = true, c6.sqrt();
}
function isDecimalInstance(n3) {
  return n3 instanceof Le || n3 && n3.toStringTag === ce2 || false;
}
function ln$1(n3) {
  return new this(n3).ln();
}
function log$1(n3, l6) {
  return new this(n3).log(l6);
}
function log2(n3) {
  return new this(n3).log(2);
}
function log10(n3) {
  return new this(n3).log(10);
}
function max() {
  return maxOrMin(this, arguments, -1);
}
function min() {
  return maxOrMin(this, arguments, 1);
}
function mod(n3, l6) {
  return new this(n3).mod(l6);
}
function mul(n3, l6) {
  return new this(n3).mul(l6);
}
function pow(n3, l6) {
  return new this(n3).pow(l6);
}
function random(n3) {
  var l6, c6, u5, h7, f6 = 0, p5 = new this(1), m7 = [];
  if (void 0 === n3 ? n3 = this.precision : checkInt32(n3, 1, G2), u5 = Math.ceil(n3 / 7), this.crypto) if (crypto.getRandomValues) for (l6 = crypto.getRandomValues(new Uint32Array(u5)); f6 < u5; ) (h7 = l6[f6]) >= 429e7 ? l6[f6] = crypto.getRandomValues(new Uint32Array(1))[0] : m7[f6++] = h7 % 1e7;
  else {
    if (!crypto.randomBytes) throw Error(oe2);
    for (l6 = crypto.randomBytes(u5 *= 4); f6 < u5; ) (h7 = l6[f6] + (l6[f6 + 1] << 8) + (l6[f6 + 2] << 16) + ((127 & l6[f6 + 3]) << 24)) >= 214e7 ? crypto.randomBytes(4).copy(l6, f6) : (m7.push(h7 % 1e7), f6 += 4);
    f6 = u5 / 4;
  }
  else for (; f6 < u5; ) m7[f6++] = 1e7 * Math.random() | 0;
  for (n3 %= 7, (u5 = m7[--f6]) && n3 && (h7 = ge(10, 7 - n3), m7[f6] = (u5 / h7 | 0) * h7); 0 === m7[f6]; f6--) m7.pop();
  if (f6 < 0) c6 = 0, m7 = [0];
  else {
    for (c6 = -1; 0 === m7[0]; c6 -= 7) m7.shift();
    for (u5 = 1, h7 = m7[0]; h7 >= 10; h7 /= 10) u5++;
    u5 < 7 && (c6 -= 7 - u5);
  }
  return p5.e = c6, p5.d = m7, p5;
}
function round(n3) {
  return finalise(n3 = new this(n3), n3.e + 1, this.rounding);
}
function sign(n3) {
  return (n3 = new this(n3)).d ? n3.d[0] ? n3.s : 0 * n3.s : n3.s || NaN;
}
function sin(n3) {
  return new this(n3).sin();
}
function sinh(n3) {
  return new this(n3).sinh();
}
function sqrt(n3) {
  return new this(n3).sqrt();
}
function sub(n3, l6) {
  return new this(n3).sub(l6);
}
function sum() {
  var n3 = 0, l6 = arguments, c6 = new this(l6[n3]);
  for (ne2 = false; c6.s && ++n3 < l6.length; ) c6 = c6.plus(l6[n3]);
  return ne2 = true, finalise(c6, this.precision, this.rounding);
}
function tan(n3) {
  return new this(n3).tan();
}
function tanh(n3) {
  return new this(n3).tanh();
}
function trunc(n3) {
  return finalise(n3 = new this(n3), n3.e + 1, 1);
}
function yn(n3, l6) {
  if ("utf8" === (l6 = l6.toLowerCase()) || "utf-8" === l6) return new ze(Ke.encode(n3));
  if ("base64" === l6 || "base64url" === l6) return n3 = (n3 = n3.replace(/-/g, "+").replace(/_/g, "/")).replace(/[^A-Za-z0-9+/]/g, ""), new ze([...atob(n3)].map((n4) => n4.charCodeAt(0)));
  if ("binary" === l6 || "ascii" === l6 || "latin1" === l6 || "latin-1" === l6) return new ze([...n3].map((n4) => n4.charCodeAt(0)));
  if ("ucs2" === l6 || "ucs-2" === l6 || "utf16le" === l6 || "utf-16le" === l6) {
    let l7 = new ze(2 * n3.length), c6 = new DataView(l7.buffer);
    for (let l8 = 0; l8 < n3.length; l8++) c6.setUint16(2 * l8, n3.charCodeAt(l8), true);
    return l7;
  }
  if ("hex" === l6) {
    let l7 = new ze(n3.length / 2);
    for (let c6 = 0, u5 = 0; u5 < n3.length; u5 += 2, c6++) l7[c6] = parseInt(n3.slice(u5, u5 + 2), 16);
    return l7;
  }
  $i(`encoding "${l6}"`);
}
function tu(n3) {
  let l6 = Object.getOwnPropertyNames(DataView.prototype).filter((n4) => n4.startsWith("get") || n4.startsWith("set")), c6 = l6.map((n4) => n4.replace("get", "read").replace("set", "write")), i6 = /* @__PURE__ */ __name((n4, c7) => function(u5 = 0) {
    return Q2(u5, "offset"), te2(u5, "offset"), J2(u5, "offset", this.length - 1), new DataView(this.buffer)[l6[n4]](u5, c7);
  }, "i"), o4 = /* @__PURE__ */ __name((n4, c7) => function(u5, h7 = 0) {
    let f6 = l6[n4].match(/set(\w+\d+)/)[1].toLowerCase(), p5 = Ge[f6];
    return Q2(h7, "offset"), te2(h7, "offset"), J2(h7, "offset", this.length - 1), (function(n5, l7, c8, u6) {
      if (n5 < c8 || n5 > u6) {
        let h8 = new RangeError(`The value of "${l7}" is out of range. It must be >= ${c8} and <= ${u6}. Received ${n5}`);
        throw h8.code = "ERR_OUT_OF_RANGE", h8;
      }
    })(u5, "value", p5[0], p5[1]), new DataView(this.buffer)[l6[n4]](h7, u5, c7), h7 + parseInt(l6[n4].match(/\d+/)[0]) / 8;
  }, "o");
  c6.forEach((l7, c7) => {
    l7.startsWith("read") && (n3[l7] = i6(c7, false), n3[l7 + "LE"] = i6(c7, true), n3[l7 + "BE"] = i6(c7, false)), l7.startsWith("write") && (n3[l7] = o4(c7, false), n3[l7 + "LE"] = o4(c7, true), n3[l7 + "BE"] = o4(c7, false)), ((l8) => {
      l8.forEach((l9) => {
        l9.includes("Uint") && (n3[l9.replace("Uint", "UInt")] = n3[l9]), l9.includes("Float64") && (n3[l9.replace("Float64", "Double")] = n3[l9]), l9.includes("Float32") && (n3[l9.replace("Float32", "Float")] = n3[l9]);
      });
    })([l7, l7 + "LE", l7 + "BE"]);
  });
}
function $i(n3) {
  throw new Error(`Buffer polyfill does not implement "${n3}"`);
}
function lr(n3, l6) {
  if (!(n3 instanceof Uint8Array)) throw new TypeError(`The "${l6}" argument must be an instance of Buffer or Uint8Array`);
}
function J2(n3, l6, c6 = rt + 1) {
  if (n3 < 0 || n3 > c6) {
    let u5 = new RangeError(`The value of "${l6}" is out of range. It must be >= 0 && <= ${c6}. Received ${n3}`);
    throw u5.code = "ERR_OUT_OF_RANGE", u5;
  }
}
function Q2(n3, l6) {
  if ("number" != typeof n3) {
    let c6 = new TypeError(`The "${l6}" argument must be of type number. Received type ${typeof n3}.`);
    throw c6.code = "ERR_INVALID_ARG_TYPE", c6;
  }
}
function te2(n3, l6) {
  if (!Number.isInteger(n3) || Number.isNaN(n3)) {
    let c6 = new RangeError(`The value of "${l6}" is out of range. It must be an integer. Received ${n3}`);
    throw c6.code = "ERR_OUT_OF_RANGE", c6;
  }
}
function Ui(n3, l6) {
  if ("string" != typeof n3) {
    let c6 = new TypeError(`The "${l6}" argument must be of type string. Received type ${typeof n3}`);
    throw c6.code = "ERR_INVALID_ARG_TYPE", c6;
  }
}
function lu(n3, l6 = "utf8") {
  return ze.from(n3, l6);
}
function ji(n3, l6) {
  var c6, u5, h7, f6, p5, m7, g5, y5, w5 = n3.constructor, b4 = w5.precision;
  if (!n3.s || !l6.s) return l6.s || (l6 = new w5(n3)), Ct ? L2(l6, b4) : l6;
  if (g5 = n3.d, y5 = l6.d, p5 = n3.e, h7 = l6.e, g5 = g5.slice(), f6 = p5 - h7) {
    for (f6 < 0 ? (u5 = g5, f6 = -f6, m7 = y5.length) : (u5 = y5, h7 = p5, m7 = g5.length), f6 > (m7 = (p5 = Math.ceil(b4 / Qt)) > m7 ? p5 + 1 : m7 + 1) && (f6 = m7, u5.length = 1), u5.reverse(); f6--; ) u5.push(0);
    u5.reverse();
  }
  for ((m7 = g5.length) - (f6 = y5.length) < 0 && (f6 = m7, u5 = y5, y5 = g5, g5 = u5), c6 = 0; f6; ) c6 = (g5[--f6] = g5[f6] + y5[f6] + c6) / Bt | 0, g5[f6] %= Bt;
  for (c6 && (g5.unshift(c6), ++h7), m7 = g5.length; 0 == g5[--m7]; ) g5.pop();
  return l6.d = g5, l6.e = h7, Ct ? L2(l6, b4) : l6;
}
function de2(n3, l6, c6) {
  if (n3 !== ~~n3 || n3 < l6 || n3 > c6) throw Error(Rt + n3);
}
function me(n3) {
  var l6, c6, u5, h7 = n3.length - 1, f6 = "", p5 = n3[0];
  if (h7 > 0) {
    for (f6 += p5, l6 = 1; l6 < h7; l6++) u5 = n3[l6] + "", (c6 = Qt - u5.length) && (f6 += ve(c6)), f6 += u5;
    p5 = n3[l6], (c6 = Qt - (u5 = p5 + "").length) && (f6 += ve(c6));
  } else if (0 === p5) return "0";
  for (; p5 % 10 == 0; ) p5 /= 10;
  return f6 + p5;
}
function Qi(n3, l6) {
  var c6, u5, h7, f6, p5, m7 = 0, g5 = 0, y5 = n3.constructor, w5 = y5.precision;
  if (H2(n3) > 16) throw Error(Dt + H2(n3));
  if (!n3.s) return new y5(jt);
  for (Ct = false, p5 = w5, f6 = new y5(0.03125); n3.abs().gte(0.1); ) n3 = n3.times(f6), g5 += 5;
  for (p5 += Math.log(Lt(2, g5)) / Math.LN10 * 2 + 5 | 0, c6 = u5 = h7 = new y5(jt), y5.precision = p5; ; ) {
    if (u5 = L2(u5.times(n3), p5), c6 = c6.times(++m7), me((f6 = h7.plus(zt(u5, c6, p5))).d).slice(0, p5) === me(h7.d).slice(0, p5)) {
      for (; g5--; ) h7 = L2(h7.times(h7), p5);
      return y5.precision = w5, null == l6 ? (Ct = true, L2(h7, w5)) : h7;
    }
    h7 = f6;
  }
}
function H2(n3) {
  for (var l6 = n3.e * Qt, c6 = n3.d[0]; c6 >= 10; c6 /= 10) l6++;
  return l6;
}
function wn(n3, l6, c6) {
  if (l6 > n3.LN10.sd()) throw Ct = true, c6 && (n3.precision = c6), Error(kt + "LN10 precision limit exceeded");
  return L2(new n3(n3.LN10), l6);
}
function ve(n3) {
  for (var l6 = ""; n3--; ) l6 += "0";
  return l6;
}
function Tt(n3, l6) {
  var c6, u5, h7, f6, p5, m7, g5, y5, w5, b4 = 1, v5 = n3, _4 = v5.d, S6 = v5.constructor, E5 = S6.precision;
  if (v5.s < 1) throw Error(kt + (v5.s ? "NaN" : "-Infinity"));
  if (v5.eq(jt)) return new S6(0);
  if (null == l6 ? (Ct = false, y5 = E5) : y5 = l6, v5.eq(10)) return null == l6 && (Ct = true), wn(S6, y5);
  if (y5 += 10, S6.precision = y5, u5 = (c6 = me(_4)).charAt(0), f6 = H2(v5), !(Math.abs(f6) < 15e14)) return g5 = wn(S6, y5 + 2, E5).times(f6 + ""), v5 = Tt(new S6(u5 + "." + c6.slice(1)), y5 - 10).plus(g5), S6.precision = E5, null == l6 ? (Ct = true, L2(v5, E5)) : v5;
  for (; u5 < 7 && 1 != u5 || 1 == u5 && c6.charAt(1) > 3; ) u5 = (c6 = me((v5 = v5.times(n3)).d)).charAt(0), b4++;
  for (f6 = H2(v5), u5 > 1 ? (v5 = new S6("0." + c6), f6++) : v5 = new S6(u5 + "." + c6.slice(1)), m7 = p5 = v5 = zt(v5.minus(jt), v5.plus(jt), y5), w5 = L2(v5.times(v5), y5), h7 = 3; ; ) {
    if (p5 = L2(p5.times(w5), y5), me((g5 = m7.plus(zt(p5, new S6(h7), y5))).d).slice(0, y5) === me(m7.d).slice(0, y5)) return m7 = m7.times(2), 0 !== f6 && (m7 = m7.plus(wn(S6, y5 + 2, E5).times(f6 + ""))), m7 = zt(m7, new S6(b4), y5), S6.precision = E5, null == l6 ? (Ct = true, L2(m7, E5)) : m7;
    m7 = g5, h7 += 2;
  }
}
function qi(n3, l6) {
  var c6, u5, h7;
  for ((c6 = l6.indexOf(".")) > -1 && (l6 = l6.replace(".", "")), (u5 = l6.search(/e/i)) > 0 ? (c6 < 0 && (c6 = u5), c6 += +l6.slice(u5 + 1), l6 = l6.substring(0, u5)) : c6 < 0 && (c6 = l6.length), u5 = 0; 48 === l6.charCodeAt(u5); ) ++u5;
  for (h7 = l6.length; 48 === l6.charCodeAt(h7 - 1); ) --h7;
  if (l6 = l6.slice(u5, h7)) {
    if (h7 -= u5, c6 = c6 - u5 - 1, n3.e = Mt(c6 / Qt), n3.d = [], u5 = (c6 + 1) % Qt, c6 < 0 && (u5 += Qt), u5 < h7) {
      for (u5 && n3.d.push(+l6.slice(0, u5)), h7 -= Qt; u5 < h7; ) n3.d.push(+l6.slice(u5, u5 += Qt));
      l6 = l6.slice(u5), u5 = Qt - l6.length;
    } else u5 -= h7;
    for (; u5--; ) l6 += "0";
    if (n3.d.push(+l6), Ct && (n3.e > Wt || n3.e < -Wt)) throw Error(Dt + c6);
  } else n3.s = 0, n3.e = 0, n3.d = [0];
  return n3;
}
function L2(n3, l6, c6) {
  var u5, h7, f6, p5, m7, g5, y5, w5, b4 = n3.d;
  for (p5 = 1, f6 = b4[0]; f6 >= 10; f6 /= 10) p5++;
  if ((u5 = l6 - p5) < 0) u5 += Qt, h7 = l6, y5 = b4[w5 = 0];
  else {
    if ((w5 = Math.ceil((u5 + 1) / Qt)) >= (f6 = b4.length)) return n3;
    for (y5 = f6 = b4[w5], p5 = 1; f6 >= 10; f6 /= 10) p5++;
    h7 = (u5 %= Qt) - Qt + p5;
  }
  if (void 0 !== c6 && (m7 = y5 / (f6 = Lt(10, p5 - h7 - 1)) % 10 | 0, g5 = l6 < 0 || void 0 !== b4[w5 + 1] || y5 % f6, g5 = c6 < 4 ? (m7 || g5) && (0 == c6 || c6 == (n3.s < 0 ? 3 : 2)) : m7 > 5 || 5 == m7 && (4 == c6 || g5 || 6 == c6 && (u5 > 0 ? h7 > 0 ? y5 / Lt(10, p5 - h7) : 0 : b4[w5 - 1]) % 10 & 1 || c6 == (n3.s < 0 ? 8 : 7))), l6 < 1 || !b4[0]) return g5 ? (f6 = H2(n3), b4.length = 1, l6 = l6 - f6 - 1, b4[0] = Lt(10, (Qt - l6 % Qt) % Qt), n3.e = Mt(-l6 / Qt) || 0) : (b4.length = 1, b4[0] = n3.e = n3.s = 0), n3;
  if (0 == u5 ? (b4.length = w5, f6 = 1, w5--) : (b4.length = w5 + 1, f6 = Lt(10, Qt - u5), b4[w5] = h7 > 0 ? (y5 / Lt(10, p5 - h7) % Lt(10, h7) | 0) * f6 : 0), g5) for (; ; ) {
    if (0 == w5) {
      (b4[0] += f6) == Bt && (b4[0] = 1, ++n3.e);
      break;
    }
    if (b4[w5] += f6, b4[w5] != Bt) break;
    b4[w5--] = 0, f6 = 1;
  }
  for (u5 = b4.length; 0 === b4[--u5]; ) b4.pop();
  if (Ct && (n3.e > Wt || n3.e < -Wt)) throw Error(Dt + H2(n3));
  return n3;
}
function Hi(n3, l6) {
  var c6, u5, h7, f6, p5, m7, g5, y5, w5, b4, v5 = n3.constructor, _4 = v5.precision;
  if (!n3.s || !l6.s) return l6.s ? l6.s = -l6.s : l6 = new v5(n3), Ct ? L2(l6, _4) : l6;
  if (g5 = n3.d, b4 = l6.d, u5 = l6.e, y5 = n3.e, g5 = g5.slice(), p5 = y5 - u5) {
    for ((w5 = p5 < 0) ? (c6 = g5, p5 = -p5, m7 = b4.length) : (c6 = b4, u5 = y5, m7 = g5.length), p5 > (h7 = Math.max(Math.ceil(_4 / Qt), m7) + 2) && (p5 = h7, c6.length = 1), c6.reverse(), h7 = p5; h7--; ) c6.push(0);
    c6.reverse();
  } else {
    for ((w5 = (h7 = g5.length) < (m7 = b4.length)) && (m7 = h7), h7 = 0; h7 < m7; h7++) if (g5[h7] != b4[h7]) {
      w5 = g5[h7] < b4[h7];
      break;
    }
    p5 = 0;
  }
  for (w5 && (c6 = g5, g5 = b4, b4 = c6, l6.s = -l6.s), m7 = g5.length, h7 = b4.length - m7; h7 > 0; --h7) g5[m7++] = 0;
  for (h7 = b4.length; h7 > p5; ) {
    if (g5[--h7] < b4[h7]) {
      for (f6 = h7; f6 && 0 === g5[--f6]; ) g5[f6] = Bt - 1;
      --g5[f6], g5[h7] += Bt;
    }
    g5[h7] -= b4[h7];
  }
  for (; 0 === g5[--m7]; ) g5.pop();
  for (; 0 === g5[0]; g5.shift()) --u5;
  return g5[0] ? (l6.d = g5, l6.e = u5, Ct ? L2(l6, _4) : l6) : new v5(0);
}
function _e2(n3, l6, c6) {
  var u5, h7 = H2(n3), f6 = me(n3.d), p5 = f6.length;
  return l6 ? (c6 && (u5 = c6 - p5) > 0 ? f6 = f6.charAt(0) + "." + f6.slice(1) + ve(u5) : p5 > 1 && (f6 = f6.charAt(0) + "." + f6.slice(1)), f6 = f6 + (h7 < 0 ? "e" : "e+") + h7) : h7 < 0 ? (f6 = "0." + ve(-h7 - 1) + f6, c6 && (u5 = c6 - p5) > 0 && (f6 += ve(u5))) : h7 >= p5 ? (f6 += ve(h7 + 1 - p5), c6 && (u5 = c6 - h7 - 1) > 0 && (f6 = f6 + "." + ve(u5))) : ((u5 = h7 + 1) < p5 && (f6 = f6.slice(0, u5) + "." + f6.slice(u5)), c6 && (u5 = c6 - p5) > 0 && (h7 + 1 === p5 && (f6 += "."), f6 += ve(u5))), n3.s < 0 ? "-" + f6 : f6;
}
function Vi(n3, l6) {
  if (n3.length > l6) return n3.length = l6, true;
}
function Ji(n3) {
  var l6, c6, u5;
  function i6(n4) {
    var l7 = this;
    if (!(l7 instanceof i6)) return new i6(n4);
    if (l7.constructor = i6, n4 instanceof i6) return l7.s = n4.s, l7.e = n4.e, void (l7.d = (n4 = n4.d) ? n4.slice() : n4);
    if ("number" == typeof n4) {
      if (0 * n4 != 0) throw Error(Rt + n4);
      if (n4 > 0) l7.s = 1;
      else {
        if (!(n4 < 0)) return l7.s = 0, l7.e = 0, void (l7.d = [0]);
        n4 = -n4, l7.s = -1;
      }
      return n4 === ~~n4 && n4 < 1e7 ? (l7.e = 0, void (l7.d = [n4])) : qi(l7, n4.toString());
    }
    if ("string" != typeof n4) throw Error(Rt + n4);
    if (45 === n4.charCodeAt(0) ? (n4 = n4.slice(1), l7.s = -1) : l7.s = 1, !Ft.test(n4)) throw Error(Rt + n4);
    qi(l7, n4);
  }
  __name(i6, "i");
  if (i6.prototype = Jt, i6.ROUND_UP = 0, i6.ROUND_DOWN = 1, i6.ROUND_CEIL = 2, i6.ROUND_FLOOR = 3, i6.ROUND_HALF_UP = 4, i6.ROUND_HALF_DOWN = 5, i6.ROUND_HALF_EVEN = 6, i6.ROUND_HALF_CEIL = 7, i6.ROUND_HALF_FLOOR = 8, i6.clone = Ji, i6.config = i6.set = pu, void 0 === n3 && (n3 = {}), n3) for (u5 = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], l6 = 0; l6 < u5.length; ) n3.hasOwnProperty(c6 = u5[l6++]) || (n3[c6] = this[c6]);
  return i6.config(n3), i6;
}
function pu(n3) {
  if (!n3 || "object" != typeof n3) throw Error(kt + "Object expected");
  var l6, c6, u5, h7 = ["precision", 1, At, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
  for (l6 = 0; l6 < h7.length; l6 += 3) if (void 0 !== (u5 = n3[c6 = h7[l6]])) {
    if (!(Mt(u5) === u5 && u5 >= h7[l6 + 1] && u5 <= h7[l6 + 2])) throw Error(Rt + c6 + ": " + u5);
    this[c6] = u5;
  }
  if (void 0 !== (u5 = n3[c6 = "LN10"])) {
    if (u5 != Math.LN10) throw Error(Rt + c6 + ": " + u5);
    this[c6] = new this(u5);
  }
  return this;
}
function dr() {
  return globalThis.crypto.randomUUID();
}
function fr(n3, l6, c6) {
  return void 0 !== l6 && (n3 = void 0 !== c6 ? n3.subarray(l6, l6 + c6) : n3.subarray(l6)), globalThis.crypto.getRandomValues(n3);
}
function go(n3) {
  return new tr(n3);
}
function Ki(n3) {
  return "function" == typeof n3 ? n3 : (l6) => l6.$extends(n3);
}
function zi(n3) {
  return n3;
}
function Yi(...n3) {
  return (n4) => n4;
}
function Ce(n3) {
  return n3.substring(0, 1).toLowerCase() + n3.substring(1);
}
function Pt(n3) {
  let l6;
  return { get: /* @__PURE__ */ __name(() => (l6 || (l6 = { value: n3() }), l6.value), "get") };
}
function F2(n3, l6) {
  let c6 = new RegExp(`\\x1b\\[${l6}m`, "g"), u5 = `\x1B[${n3}m`, h7 = `\x1B[${l6}m`;
  return function(n4) {
    return Gr && null != n4 ? u5 + (~("" + n4).indexOf(h7) ? n4.replace(c6, h7 + u5) : n4) + h7 : n4;
  };
}
function An(n3) {
  if (!(function(n4) {
    return n4?.toString().startsWith(`${mn}//`) ?? false;
  })(n3)) return false;
  let { host: l6 } = new URL(n3);
  return l6.includes("localhost") || l6.includes("127.0.0.1") || l6.includes("[::1]");
}
function bu(...n3) {
  console.log(...n3);
}
function vn(n3, ...l6) {
  _n.warn() && console.warn(`${bn.warn} ${n3}`, ...l6);
}
function xu(n3, ...l6) {
  console.info(`${bn.info} ${n3}`, ...l6);
}
function Eu(n3, ...l6) {
  console.error(`${bn.error} ${n3}`, ...l6);
}
function Tu(n3, ...l6) {
  console.log(`${bn.query} ${n3}`, ...l6);
}
function Te(n3, l6) {
  throw new Error(l6);
}
function Ye(n3) {
  if ("string" != typeof n3) throw new TypeError(`Expected a \`string\`, got \`${typeof n3}\``);
  return n3.replace(Sn, "");
}
function wr(n3, l6) {
  let c6 = {};
  for (let u5 of Object.keys(n3)) c6[u5] = l6(n3[u5], u5);
  return c6;
}
function Ot(n3, l6) {
  Object.defineProperty(n3, "name", { value: l6, configurable: true });
}
function Xe(n3) {
  return n3 instanceof Date || "[object Date]" === Object.prototype.toString.call(n3);
}
function br(n3) {
  return "Invalid Date" !== n3.toString();
}
function et(n3) {
  return !!Le.isDecimal(n3) || null !== n3 && "object" == typeof n3 && "number" == typeof n3.s && "number" == typeof n3.e && "function" == typeof n3.toFixed && Array.isArray(n3.d);
}
function vu(n3) {
  return { name: n3.name, values: n3.values.map((n4) => n4.name) };
}
function Ou({ functionName: n3, location: l6, message: c6, isPanic: u5, contextLines: h7, callArguments: f6 }, p5) {
  let m7 = [""], g5 = l6 ? " in" : ":";
  if (u5 ? (m7.push(p5.red(`Oops, an unknown error occurred! This is ${p5.bold("on us")}, you did nothing wrong.`)), m7.push(p5.red(`It occurred in the ${p5.bold(`\`${n3}\``)} invocation${g5}`))) : m7.push(p5.red(`Invalid ${p5.bold(`\`${n3}\``)} invocation${g5}`)), l6 && m7.push(p5.underline((function(n4) {
    let l7 = [n4.fileName];
    return n4.lineNumber && l7.push(String(n4.lineNumber)), n4.columnNumber && l7.push(String(n4.columnNumber)), l7.join(":");
  })(l6))), h7) {
    m7.push("");
    let n4 = [h7.toString()];
    f6 && (n4.push(f6), n4.push(p5.dim(")"))), m7.push(n4.join("")), f6 && m7.push("");
  } else m7.push(""), f6 && m7.push(f6), m7.push("");
  return m7.push(c6), m7.join("\n");
}
function Er(n3) {
  let l6, c6 = n3.showColors ? xn : Pn;
  return l6 = typeof $getTemplateParameters < "u" ? $getTemplateParameters(n3, c6) : (function({ message: n4, originalMethod: l7, isPanic: c7, callArguments: u5 }) {
    return { functionName: `prisma.${l7}()`, message: n4, isPanic: c7 ?? false, callArguments: u5 };
  })(n3), Ou(l6, c6);
}
function Oo(n3, l6, c6) {
  let u5 = (function(n4) {
    let l7 = /* @__PURE__ */ new Map(), c7 = [];
    for (let u6 of n4) {
      if ("InvalidArgumentType" !== u6.kind) {
        c7.push(u6);
        continue;
      }
      let n5 = `${u6.selectionPath.join(".")}:${u6.argumentPath.join(".")}`, h8 = l7.get(n5);
      h8 ? l7.set(n5, { ...u6, argument: { ...u6.argument, typeNames: Nu(h8.argument.typeNames, u6.argument.typeNames) } }) : l7.set(n5, u6);
    }
    return c7.push(...l7.values()), c7;
  })(ko(n3)), h7 = (function(n4) {
    return (function(n5, l7) {
      if (0 === n5.length) return;
      let c7 = n5[0];
      for (let u6 = 1; u6 < n5.length; u6++) l7(c7, n5[u6]) < 0 && (c7 = n5[u6]);
      return c7;
    })(n4, (n5, l7) => {
      let c7 = Ro(n5), u6 = Ro(l7);
      return c7 !== u6 ? c7 - u6 : Io(n5) - Io(l7);
    });
  })(u5);
  h7 ? Tr(h7, l6, c6) : l6.addErrorMessage(() => "Unknown error");
}
function ko(n3) {
  return n3.errors.flatMap((n4) => "Union" === n4.kind ? ko(n4) : [n4]);
}
function Nu(n3, l6) {
  return [...new Set(n3.concat(l6))];
}
function Ro(n3) {
  let l6 = 0;
  return Array.isArray(n3.selectionPath) && (l6 += n3.selectionPath.length), Array.isArray(n3.argumentPath) && (l6 += n3.argumentPath.length), l6;
}
function Io(n3) {
  switch (n3.kind) {
    case "InvalidArgumentValue":
    case "ValueTooLarge":
      return 20;
    case "InvalidArgumentType":
      return 10;
    case "RequiredArgumentMissing":
      return -10;
    default:
      return 0;
  }
}
function Tr(n3, l6, c6) {
  switch (n3.kind) {
    case "MutuallyExclusiveFields":
      !(function(n4, l7) {
        let c7 = l7.arguments.getDeepSubSelectionValue(n4.selectionPath)?.asObject();
        c7 && (c7.getField(n4.firstField)?.markAsError(), c7.getField(n4.secondField)?.markAsError()), l7.addErrorMessage((l8) => `Please ${l8.bold("either")} use ${l8.green(`\`${n4.firstField}\``)} or ${l8.green(`\`${n4.secondField}\``)}, but ${l8.red("not both")} at the same time.`);
      })(n3, l6);
      break;
    case "IncludeOnScalar":
      !(function(n4, l7) {
        let [c7, u5] = ot(n4.selectionPath), h7 = n4.outputType, f6 = l7.arguments.getDeepSelectionParent(c7)?.value;
        if (f6 && (f6.getField(u5)?.markAsError(), h7)) for (let n5 of h7.fields) n5.isRelation && f6.addSuggestion(new Cn(n5.name, "true"));
        l7.addErrorMessage((n5) => {
          let l8 = `Invalid scalar field ${n5.red(`\`${u5}\``)} for ${n5.bold("include")} statement`;
          return l8 += h7 ? ` on model ${n5.bold(h7.name)}. ${Nt(n5)}` : ".", l8 += `
Note that ${n5.bold("include")} statements only accept relation fields.`, l8;
        });
      })(n3, l6);
      break;
    case "EmptySelection":
      !(function(n4, l7, c7) {
        let u5 = l7.arguments.getDeepSubSelectionValue(n4.selectionPath)?.asObject();
        if (u5) {
          let c8 = u5.getField("omit")?.value.asObject();
          if (c8) return void (function(n5, l8, c9) {
            c9.removeAllFields();
            for (let l9 of n5.outputType.fields) c9.addSuggestion(new Cn(l9.name, "false"));
            l8.addErrorMessage((l9) => `The ${l9.red("omit")} statement includes every field of the model ${l9.bold(n5.outputType.name)}. At least one field must be included in the result`);
          })(n4, l7, c8);
          if (u5.hasField("select")) return void (function(n5, l8) {
            let c9 = n5.outputType, u6 = l8.arguments.getDeepSelectionParent(n5.selectionPath)?.value, h7 = u6?.isEmpty() ?? false;
            u6 && (u6.removeAllFields(), Uo(u6, c9)), l8.addErrorMessage((n6) => h7 ? `The ${n6.red("`select`")} statement for type ${n6.bold(c9.name)} must not be empty. ${Nt(n6)}` : `The ${n6.red("`select`")} statement for type ${n6.bold(c9.name)} needs ${n6.bold("at least one truthy value")}.`);
          })(n4, l7);
        }
        if (c7?.[Ce(n4.outputType.name)]) return void (function(n5, l8) {
          let c8 = new Kn();
          for (let l9 of n5.outputType.fields) l9.isRelation || c8.addField(l9.name, "false");
          let u6 = new Cn("omit", c8).makeRequired();
          if (0 === n5.selectionPath.length) l8.arguments.addSuggestion(u6);
          else {
            let [c9, h7] = ot(n5.selectionPath), f6 = l8.arguments.getDeepSelectionParent(c9)?.value.asObject()?.getField(h7);
            if (f6) {
              let n6 = f6?.value.asObject() ?? new Bn();
              n6.addSuggestion(u6), f6.value = n6;
            }
          }
          l8.addErrorMessage((l9) => `The global ${l9.red("omit")} configuration excludes every field of the model ${l9.bold(n5.outputType.name)}. At least one field must be included in the result`);
        })(n4, l7);
        l7.addErrorMessage(() => `Unknown field at "${n4.selectionPath.join(".")} selection"`);
      })(n3, l6, c6);
      break;
    case "UnknownSelectionField":
      !(function(n4, l7) {
        let c7 = $o(n4.selectionPath, l7);
        if ("unknown" !== c7.parentKind) {
          c7.field.markAsError();
          let l8 = c7.parent;
          switch (c7.parentKind) {
            case "select":
              Uo(l8, n4.outputType);
              break;
            case "include":
              !(function(n5, l9) {
                for (let c8 of l9.fields) c8.isRelation && !n5.hasField(c8.name) && n5.addSuggestion(new Cn(c8.name, "true"));
              })(l8, n4.outputType);
              break;
            case "omit":
              !(function(n5, l9) {
                for (let c8 of l9.fields) !n5.hasField(c8.name) && !c8.isRelation && n5.addSuggestion(new Cn(c8.name, "true"));
              })(l8, n4.outputType);
          }
        }
        l7.addErrorMessage((l8) => {
          let u5 = [`Unknown field ${l8.red(`\`${c7.fieldName}\``)}`];
          return "unknown" !== c7.parentKind && u5.push(`for ${l8.bold(c7.parentKind)} statement`), u5.push(`on model ${l8.bold(`\`${n4.outputType.name}\``)}.`), u5.push(Nt(l8)), u5.join(" ");
        });
      })(n3, l6);
      break;
    case "InvalidSelectionValue":
      !(function(n4, l7) {
        let c7 = $o(n4.selectionPath, l7);
        "unknown" !== c7.parentKind && c7.field.value.markAsError(), l7.addErrorMessage((l8) => `Invalid value for selection field \`${l8.red(c7.fieldName)}\`: ${n4.underlyingError}`);
      })(n3, l6);
      break;
    case "UnknownArgument":
      !(function(n4, l7) {
        let c7 = n4.argumentPath[0], u5 = l7.arguments.getDeepSubSelectionValue(n4.selectionPath)?.asObject();
        u5 && (u5.getField(c7)?.markAsError(), (function(n5, l8) {
          for (let c8 of l8) n5.hasField(c8.name) || n5.addSuggestion(new Cn(c8.name, c8.typeNames.join(" | ")));
        })(u5, n4.arguments)), l7.addErrorMessage((l8) => _o(l8, c7, n4.arguments.map((n5) => n5.name)));
      })(n3, l6);
      break;
    case "UnknownInputField":
      !(function(n4, l7) {
        let [c7, u5] = ot(n4.argumentPath), h7 = l7.arguments.getDeepSubSelectionValue(n4.selectionPath)?.asObject();
        if (h7) {
          h7.getDeepField(n4.argumentPath)?.markAsError();
          let l8 = h7.getDeepFieldValue(c7)?.asObject();
          l8 && qo(l8, n4.inputType);
        }
        l7.addErrorMessage((l8) => _o(l8, u5, n4.inputType.fields.map((n5) => n5.name)));
      })(n3, l6);
      break;
    case "RequiredArgumentMissing":
      !(function(n4, l7) {
        let c7;
        l7.addErrorMessage((n5) => c7?.value instanceof Gn && "null" === c7.value.text ? `Argument \`${n5.green(f6)}\` must not be ${n5.red("null")}.` : `Argument \`${n5.green(f6)}\` is missing.`);
        let u5 = l7.arguments.getDeepSubSelectionValue(n4.selectionPath)?.asObject();
        if (!u5) return;
        let [h7, f6] = ot(n4.argumentPath), p5 = new Kn(), m7 = u5.getDeepFieldValue(h7)?.asObject();
        if (m7) {
          if (c7 = m7.getField(f6), c7 && m7.removeField(f6), 1 === n4.inputTypes.length && "object" === n4.inputTypes[0].kind) {
            for (let l8 of n4.inputTypes[0].fields) p5.addField(l8.name, l8.typeNames.join(" | "));
            m7.addSuggestion(new Cn(f6, p5).makeRequired());
          } else {
            let l8 = n4.inputTypes.map(Fo).join(" | ");
            m7.addSuggestion(new Cn(f6, l8).makeRequired());
          }
          if (n4.dependentArgumentPath) {
            u5.getDeepField(n4.dependentArgumentPath)?.markAsError();
            let [, c8] = ot(n4.dependentArgumentPath);
            l7.addErrorMessage((n5) => `Argument \`${n5.green(f6)}\` is required because argument \`${n5.green(c8)}\` was provided.`);
          }
        }
      })(n3, l6);
      break;
    case "InvalidArgumentType":
      !(function(n4, l7) {
        let c7 = n4.argument.name, u5 = l7.arguments.getDeepSubSelectionValue(n4.selectionPath)?.asObject();
        u5 && u5.getDeepFieldValue(n4.argumentPath)?.markAsError(), l7.addErrorMessage((l8) => {
          let u6 = Cr("or", n4.argument.typeNames.map((n5) => l8.green(n5)));
          return `Argument \`${l8.bold(c7)}\`: Invalid value provided. Expected ${u6}, provided ${l8.red(n4.inferredType)}.`;
        });
      })(n3, l6);
      break;
    case "InvalidArgumentValue":
      !(function(n4, l7) {
        let c7 = n4.argument.name, u5 = l7.arguments.getDeepSubSelectionValue(n4.selectionPath)?.asObject();
        u5 && u5.getDeepFieldValue(n4.argumentPath)?.markAsError(), l7.addErrorMessage((l8) => {
          let u6 = [`Invalid value for argument \`${l8.bold(c7)}\``];
          if (n4.underlyingError && u6.push(`: ${n4.underlyingError}`), u6.push("."), n4.argument.typeNames.length > 0) {
            let c8 = Cr("or", n4.argument.typeNames.map((n5) => l8.green(n5)));
            u6.push(` Expected ${c8}.`);
          }
          return u6.join("");
        });
      })(n3, l6);
      break;
    case "ValueTooLarge":
      !(function(n4, l7) {
        let c7, u5 = n4.argument.name, h7 = l7.arguments.getDeepSubSelectionValue(n4.selectionPath)?.asObject();
        if (h7) {
          let l8 = h7.getDeepField(n4.argumentPath)?.value;
          l8?.markAsError(), l8 instanceof Gn && (c7 = l8.text);
        }
        l7.addErrorMessage((n5) => {
          let l8 = ["Unable to fit value"];
          return c7 && l8.push(n5.red(c7)), l8.push(`into a 64-bit signed integer for field \`${n5.bold(u5)}\``), l8.join(" ");
        });
      })(n3, l6);
      break;
    case "SomeFieldsMissing":
      !(function(n4, l7) {
        let c7 = n4.argumentPath[n4.argumentPath.length - 1], u5 = l7.arguments.getDeepSubSelectionValue(n4.selectionPath)?.asObject();
        if (u5) {
          let l8 = u5.getDeepFieldValue(n4.argumentPath)?.asObject();
          l8 && qo(l8, n4.inputType);
        }
        l7.addErrorMessage((l8) => {
          let u6 = [`Argument \`${l8.bold(c7)}\` of type ${l8.bold(n4.inputType.name)} needs`];
          return 1 === n4.constraints.minFieldCount ? n4.constraints.requiredFields ? u6.push(`${l8.green("at least one of")} ${Cr("or", n4.constraints.requiredFields.map((n5) => `\`${l8.bold(n5)}\``))} arguments.`) : u6.push(`${l8.green("at least one")} argument.`) : u6.push(`${l8.green(`at least ${n4.constraints.minFieldCount}`)} arguments.`), u6.push(Nt(l8)), u6.join(" ");
        });
      })(n3, l6);
      break;
    case "TooManyFieldsGiven":
      !(function(n4, l7) {
        let c7 = n4.argumentPath[n4.argumentPath.length - 1], u5 = l7.arguments.getDeepSubSelectionValue(n4.selectionPath)?.asObject(), h7 = [];
        if (u5) {
          let l8 = u5.getDeepFieldValue(n4.argumentPath)?.asObject();
          l8 && (l8.markAsError(), h7 = Object.keys(l8.getFields()));
        }
        l7.addErrorMessage((l8) => {
          let u6 = [`Argument \`${l8.bold(c7)}\` of type ${l8.bold(n4.inputType.name)} needs`];
          return 1 === n4.constraints.minFieldCount && 1 == n4.constraints.maxFieldCount ? u6.push(`${l8.green("exactly one")} argument,`) : 1 == n4.constraints.maxFieldCount ? u6.push(`${l8.green("at most one")} argument,`) : u6.push(`${l8.green(`at most ${n4.constraints.maxFieldCount}`)} arguments,`), u6.push(`but you provided ${Cr("and", h7.map((n5) => l8.red(n5)))}. Please choose`), 1 === n4.constraints.maxFieldCount ? u6.push("one.") : u6.push(`${n4.constraints.maxFieldCount}.`), u6.join(" ");
        });
      })(n3, l6);
      break;
    case "Union":
      Oo(n3, l6, c6);
      break;
    default:
      throw new Error("not implemented: " + n3.kind);
  }
}
function _o(n3, l6, c6) {
  let u5 = [`Unknown argument \`${n3.red(l6)}\`.`], h7 = (function(n4, l7) {
    let c7, u6 = 1 / 0;
    for (let h8 of l7) {
      let l8 = (0, In.default)(n4, h8);
      l8 > Yn || l8 < u6 && (u6 = l8, c7 = h8);
    }
    return c7;
  })(l6, c6);
  return h7 && u5.push(`Did you mean \`${n3.green(h7)}\`?`), c6.length > 0 && u5.push(Nt(n3)), u5.join(" ");
}
function Fo(n3) {
  return "list" === n3.kind ? `${Fo(n3.elementType)}[]` : n3.name;
}
function Uo(n3, l6) {
  for (let c6 of l6.fields) n3.hasField(c6.name) || n3.addSuggestion(new Cn(c6.name, "true"));
}
function $o(n3, l6) {
  let [c6, u5] = ot(n3), h7 = l6.arguments.getDeepSubSelectionValue(c6)?.asObject();
  if (!h7) return { parentKind: "unknown", fieldName: u5 };
  let f6 = h7.getFieldValue("select")?.asObject(), p5 = h7.getFieldValue("include")?.asObject(), m7 = h7.getFieldValue("omit")?.asObject(), g5 = f6?.getField(u5);
  return f6 && g5 ? { parentKind: "select", parent: f6, field: g5, fieldName: u5 } : (g5 = p5?.getField(u5), p5 && g5 ? { parentKind: "include", field: g5, parent: p5, fieldName: u5 } : (g5 = m7?.getField(u5), m7 && g5 ? { parentKind: "omit", field: g5, parent: m7, fieldName: u5 } : { parentKind: "unknown", fieldName: u5 }));
}
function qo(n3, l6) {
  if ("object" === l6.kind) for (let c6 of l6.fields) n3.hasField(c6.name) || n3.addSuggestion(new Cn(c6.name, c6.typeNames.join(" | ")));
}
function ot(n3) {
  let l6 = [...n3], c6 = l6.pop();
  if (!c6) throw new Error("unexpected empty path");
  return [l6, c6];
}
function Nt({ green: n3, enabled: l6 }) {
  return "Available options are " + (l6 ? `listed in ${n3("green")}` : "marked with ?") + ".";
}
function Cr(n3, l6) {
  if (1 === l6.length) return l6[0];
  let c6 = [...l6], u5 = c6.pop();
  return `${c6.join(", ")} ${n3} ${u5}`;
}
function st(n3) {
  return n3 instanceof Zn;
}
function at(n3) {
  return new ti(Bo(n3));
}
function Bo(n3) {
  let l6 = new Bn();
  for (let [c6, u5] of Object.entries(n3)) {
    let n4 = new ei(c6, jo(u5));
    l6.addField(n4);
  }
  return l6;
}
function jo(n3) {
  if ("string" == typeof n3) return new Gn(JSON.stringify(n3));
  if ("number" == typeof n3 || "boolean" == typeof n3) return new Gn(String(n3));
  if ("bigint" == typeof n3) return new Gn(`${n3}n`);
  if (null === n3) return new Gn("null");
  if (void 0 === n3) return new Gn("undefined");
  if (et(n3)) return new Gn(`new Prisma.Decimal("${n3.toFixed()}")`);
  if (n3 instanceof Uint8Array) return nt.isBuffer(n3) ? new Gn(`Buffer.alloc(${n3.byteLength})`) : new Gn(`new Uint8Array(${n3.byteLength})`);
  if (n3 instanceof Date) {
    let l6 = br(n3) ? n3.toISOString() : "Invalid Date";
    return new Gn(`new Date("${l6}")`);
  }
  return n3 instanceof O2 ? new Gn(`Prisma.${n3._getName()}`) : st(n3) ? new Gn(`prisma.${Ce(n3.modelName)}.$fields.${n3.name}`) : Array.isArray(n3) ? (function(n4) {
    let l6 = new Un();
    for (let c6 of n4) l6.addItem(jo(c6));
    return l6;
  })(n3) : "object" == typeof n3 ? Bo(n3) : new Gn(Object.prototype.toString.call(n3));
}
function Rr(n3, l6) {
  let c6 = "pretty" === l6 ? Rn : On;
  return { message: n3.renderAllMessages(c6), args: new Nn(0, { colors: c6 }).write(n3).toString() };
}
function Ir({ args: n3, errors: l6, errorFormat: c6, callsite: u5, originalMethod: h7, clientVersion: f6, globalOmit: p5 }) {
  let m7 = at(n3);
  for (let n4 of l6) Tr(n4, m7, p5);
  let { message: g5, args: y5 } = Rr(m7, c6), w5 = Er({ message: g5, callsite: u5, originalMethod: h7, showColors: "pretty" === c6, callArguments: y5 });
  throw new C2(w5, { clientVersion: f6 });
}
function ye(n3) {
  return n3.replace(/^./, (n4) => n4.toLowerCase());
}
function Ho(n3, l6, c6) {
  let u5 = ye(c6);
  return l6.result && (l6.result.$allModels || l6.result[u5]) ? (function(n4) {
    let l7 = new Mr(), r6 = /* @__PURE__ */ __name((c7, u6) => l7.getOrCreate(c7, () => u6.has(c7) ? [c7] : (u6.add(c7), n4[c7] ? n4[c7].needs.flatMap((n5) => r6(n5, u6)) : [c7])), "r");
    return wr(n4, (n5) => ({ ...n5, needs: r6(n5.name, /* @__PURE__ */ new Set()) }));
  })({ ...n3, ...Qo(l6.name, n3, l6.result.$allModels), ...Qo(l6.name, n3, l6.result[u5]) }) : n3;
}
function Qo(n3, l6, c6) {
  return c6 ? wr(c6, ({ needs: n4, compute: c7 }, u5) => ({ name: u5, needs: n4 ? Object.keys(n4).filter((l7) => n4[l7]) : [], compute: sc(l6, u5, c7) })) : {};
}
function sc(n3, l6, c6) {
  let u5 = n3?.[l6]?.compute;
  return u5 ? (n4) => c6({ ...n4, [l6]: u5(n4) }) : c6;
}
function he(n3) {
  return n3 instanceof di;
}
function _t({ select: n3, include: l6, ...c6 } = {}, u5) {
  let h7 = c6.omit;
  return delete c6.omit, { arguments: Yo(c6, u5), selection: dc(n3, l6, h7, u5) };
}
function dc(n3, l6, c6, u5) {
  return n3 ? (l6 ? u5.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "include", secondField: "select", selectionPath: u5.getSelectionPath() }) : c6 && u5.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "omit", secondField: "select", selectionPath: u5.getSelectionPath() }), (function(n4, l7) {
    let c7 = {}, u6 = l7.getComputedFields(), h7 = (function(n5, l8) {
      if (!l8) return n5;
      let c8 = { ...n5 };
      for (let u7 of Object.values(l8)) if (n5[u7.name]) for (let n6 of u7.needs) c8[n6] = true;
      return c8;
    })(n4, u6);
    for (let [n5, f6] of Object.entries(h7)) {
      if (he(f6)) continue;
      let h8 = l7.nestSelection(n5);
      Ln(f6, h8);
      let p5 = l7.findField(n5);
      if (!u6?.[n5] || p5) {
        if (false === f6 || void 0 === f6 || he(f6)) {
          c7[n5] = false;
          continue;
        }
        if (true === f6) {
          c7[n5] = "object" !== p5?.kind || _t({}, h8);
          continue;
        }
        c7[n5] = _t(f6, h8);
      }
    }
    return c7;
  })(n3, u5)) : (function(n4, l7, c7) {
    let u6 = {};
    return n4.modelOrType && !n4.isRawAction() && (u6.$composites = true, u6.$scalars = true), l7 && (function(n5, l8, c8) {
      for (let [u7, h7] of Object.entries(l8)) {
        if (he(h7)) continue;
        let l9 = c8.nestSelection(u7);
        if (Ln(h7, l9), false === h7 || void 0 === h7) {
          n5[u7] = false;
          continue;
        }
        let f6 = c8.findField(u7);
        (f6 && "object" !== f6.kind && c8.throwValidationError({ kind: "IncludeOnScalar", selectionPath: c8.getSelectionPath().concat(u7), outputType: c8.getOutputTypeDescription() }), f6) ? n5[u7] = _t(true === h7 ? {} : h7, l9) : n5[u7] = true === h7 || _t(h7, l9);
      }
    })(u6, l7, n4), (function(n5, l8, c8) {
      let u7 = c8.getComputedFields(), h7 = { ...c8.getGlobalOmit(), ...l8 }, f6 = (function(n6, l9) {
        if (!l9) return n6;
        let c9 = { ...n6 };
        for (let u8 of Object.values(l9)) if (!n6[u8.name]) for (let n7 of u8.needs) delete c9[n7];
        return c9;
      })(h7, u7);
      for (let [l9, h8] of Object.entries(f6)) {
        if (he(h8)) continue;
        Ln(h8, c8.nestSelection(l9));
        let f7 = c8.findField(l9);
        u7?.[l9] && !f7 || (n5[l9] = !h8);
      }
    })(u6, c7, n4), u6;
  })(u5, l6, c6);
}
function Zo(n3, l6) {
  if (null === n3) return null;
  if ("string" == typeof n3 || "number" == typeof n3 || "boolean" == typeof n3) return n3;
  if ("bigint" == typeof n3) return { $type: "BigInt", value: String(n3) };
  if (Xe(n3)) {
    if (br(n3)) return { $type: "DateTime", value: n3.toISOString() };
    l6.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: l6.getSelectionPath(), argumentPath: l6.getArgumentPath(), argument: { name: l6.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
  }
  if ((function(n4) {
    return n4 instanceof ci;
  })(n3)) return { $type: "Param", value: n3.name };
  if (st(n3)) return { $type: "FieldRef", value: { _ref: n3.name, _container: n3.modelName } };
  if (Array.isArray(n3)) return (function(n4, l7) {
    let c6 = [];
    for (let u5 = 0; u5 < n4.length; u5++) {
      let h7 = l7.nestArgument(String(u5)), f6 = n4[u5];
      if (void 0 === f6 || he(f6)) {
        let n5 = void 0 === f6 ? "undefined" : "Prisma.skip";
        l7.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: h7.getSelectionPath(), argumentPath: h7.getArgumentPath(), argument: { name: `${l7.getArgumentName()}[${u5}]`, typeNames: [] }, underlyingError: `Can not use \`${n5}\` value within array. Use \`null\` or filter out \`${n5}\` values` });
      }
      c6.push(Zo(f6, h7));
    }
    return c6;
  })(n3, l6);
  if (ArrayBuffer.isView(n3)) {
    let { buffer: l7, byteOffset: c6, byteLength: u5 } = n3;
    return { $type: "Bytes", value: nt.from(l7, c6, u5).toString("base64") };
  }
  if ((function(n4) {
    return "object" == typeof n4 && null !== n4 && true === n4.__prismaRawParameters__;
  })(n3)) return n3.values;
  if (et(n3)) return { $type: "Decimal", value: n3.toFixed() };
  if (n3 instanceof O2) {
    if (!/* @__PURE__ */ (function(n4) {
      return n4 === U2;
    })(n3) && !/* @__PURE__ */ (function(n4) {
      return n4 === j;
    })(n3) && !/* @__PURE__ */ (function(n4) {
      return n4 === B2;
    })(n3)) throw new Error("Invalid ObjectEnumValue");
    return { $type: "Enum", value: n3._getName() };
  }
  return (function(n4) {
    return "object" == typeof n4 && null !== n4 && "function" == typeof n4.toJSON;
  })(n3) ? n3.toJSON() : "object" == typeof n3 ? Yo(n3, l6) : void l6.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: l6.getSelectionPath(), argumentPath: l6.getArgumentPath(), argument: { name: l6.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(n3)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
}
function Yo(n3, l6) {
  if (n3.$type) return { $type: "Raw", value: n3 };
  let c6 = {};
  for (let u5 in n3) {
    let h7 = n3[u5], f6 = l6.nestArgument(u5);
    he(h7) || (void 0 !== h7 ? c6[u5] = Zo(h7, f6) : l6.isPreviewFeatureOn("strictUndefinedChecks") && l6.throwValidationError({ kind: "InvalidArgumentValue", argumentPath: f6.getArgumentPath(), selectionPath: l6.getSelectionPath(), argument: { name: l6.getArgumentName(), typeNames: [] }, underlyingError: mi }));
  }
  return c6;
}
function Ln(n3, l6) {
  void 0 === n3 && l6.isPreviewFeatureOn("strictUndefinedChecks") && l6.throwValidationError({ kind: "InvalidSelectionValue", selectionPath: l6.getSelectionPath(), underlyingError: mi });
}
function Nr(n3) {
  return null != n3 && n3[Pi] === Pi;
}
function Ut(n3) {
  return { getKeys: /* @__PURE__ */ __name(() => Object.keys(n3), "getKeys"), getPropertyValue: /* @__PURE__ */ __name((l6) => n3[l6], "getPropertyValue") };
}
function Y2(n3, l6) {
  return { getKeys: /* @__PURE__ */ __name(() => [n3], "getKeys"), getPropertyValue: /* @__PURE__ */ __name(() => l6(), "getPropertyValue") };
}
function Ue(n3) {
  let l6 = new Mr();
  return { getKeys: /* @__PURE__ */ __name(() => n3.getKeys(), "getKeys"), getPropertyValue: /* @__PURE__ */ __name((c6) => l6.getOrCreate(c6, () => n3.getPropertyValue(c6)), "getPropertyValue"), getPropertyDescriptor: /* @__PURE__ */ __name((l7) => n3.getPropertyDescriptor?.(l7), "getPropertyDescriptor") };
}
function _r(n3) {
  let l6 = new Set(n3);
  return { getPrototypeOf: /* @__PURE__ */ __name(() => Object.prototype, "getPrototypeOf"), getOwnPropertyDescriptor: /* @__PURE__ */ __name(() => Ci, "getOwnPropertyDescriptor"), has: /* @__PURE__ */ __name((n4, c6) => l6.has(c6), "has"), set: /* @__PURE__ */ __name((n4, c6, u5) => l6.add(c6) && Reflect.set(n4, c6, u5), "set"), ownKeys: /* @__PURE__ */ __name(() => [...l6], "ownKeys") };
}
function le(n3, l6) {
  let c6 = (function(n4) {
    let l7 = /* @__PURE__ */ new Map();
    for (let c7 of n4) {
      let n5 = c7.getKeys();
      for (let u6 of n5) l7.set(u6, c7);
    }
    return l7;
  })(l6), u5 = /* @__PURE__ */ new Set(), h7 = new Proxy(n3, { get(n4, l7) {
    if (u5.has(l7)) return n4[l7];
    let h8 = c6.get(l7);
    return h8 ? h8.getPropertyValue(l7) : n4[l7];
  }, has(n4, l7) {
    if (u5.has(l7)) return true;
    let h8 = c6.get(l7);
    return h8 ? h8.has?.(l7) ?? true : Reflect.has(n4, l7);
  }, ownKeys(n4) {
    let l7 = ts(Reflect.ownKeys(n4), c6), h8 = ts(Array.from(c6.keys()), c6);
    return [.../* @__PURE__ */ new Set([...l7, ...h8, ...u5])];
  }, set: /* @__PURE__ */ __name((n4, l7, h8) => false !== c6.get(l7)?.getPropertyDescriptor?.(l7)?.writable && (u5.add(l7), Reflect.set(n4, l7, h8)), "set"), getOwnPropertyDescriptor(n4, l7) {
    let u6 = Reflect.getOwnPropertyDescriptor(n4, l7);
    if (u6 && !u6.configurable) return u6;
    let h8 = c6.get(l7);
    return h8 ? h8.getPropertyDescriptor ? { ...Ci, ...h8?.getPropertyDescriptor(l7) } : Ci : u6;
  }, defineProperty: /* @__PURE__ */ __name((n4, l7, c7) => (u5.add(l7), Reflect.defineProperty(n4, l7, c7)), "defineProperty"), getPrototypeOf: /* @__PURE__ */ __name(() => Object.prototype, "getPrototypeOf") });
  return h7[Ni] = function() {
    let n4 = { ...this };
    return delete n4[Ni], n4;
  }, h7;
}
function ts(n3, l6) {
  return n3.filter((n4) => l6.get(n4)?.has?.(n4) ?? true);
}
function ut(n3) {
  return { getKeys: /* @__PURE__ */ __name(() => n3, "getKeys"), has: /* @__PURE__ */ __name(() => false, "has"), getPropertyValue() {
  } };
}
function Re(n3) {
  return "function" == typeof $EnabledCallSite && "minimal" !== n3 ? new $EnabledCallSite() : new Oi();
}
function ct(n3 = {}) {
  let l6 = (function(n4 = {}) {
    return "boolean" == typeof n4._count ? { ...n4, _count: { _all: n4._count } } : n4;
  })(n3);
  return Object.entries(l6).reduce((n4, [l7, c6]) => (void 0 !== Di[l7] ? n4.select[l7] = { select: c6 } : n4[l7] = c6, n4), { select: {} });
}
function Fr(n3 = {}) {
  return (l6) => ("boolean" == typeof n3._count && (l6._count = l6._count._all), l6);
}
function Sc(n3 = {}) {
  let { select: l6, ...c6 } = n3;
  return ct("object" == typeof l6 ? { ...c6, _count: l6 } : { ...c6, _count: { _all: true } });
}
function Rc(n3 = {}) {
  return "object" == typeof n3.select ? (l6) => Fr(n3)(l6)._count : (l6) => Fr(n3)(l6)._count._all;
}
function Ic(n3 = {}) {
  let l6 = ct(n3);
  if (Array.isArray(l6.by)) for (let n4 of l6.by) "string" == typeof n4 && (l6.select[n4] = true);
  else "string" == typeof l6.by && (l6.select[l6.by] = true);
  return l6;
}
function Oc(n3 = {}) {
  return (l6) => ("boolean" == typeof n3?._count && l6.forEach((n4) => {
    n4._count = n4._count._all;
  }), l6);
}
function as(n3, l6, c6) {
  return "aggregate" === l6 ? (n4) => (function(n5, l7) {
    return l7({ action: "aggregate", unpacker: Fr(n5), argsMapper: ct })(n5);
  })(n4, c6) : "count" === l6 ? (n4) => (function(n5, l7) {
    return l7({ action: "count", unpacker: Rc(n5), argsMapper: Sc })(n5);
  })(n4, c6) : "groupBy" === l6 ? (n4) => (function(n5, l7) {
    return l7({ action: "groupBy", unpacker: Oc(n5), argsMapper: Ic })(n5);
  })(n4, c6) : void 0;
}
function Mc(n3, l6, c6) {
  return void 0 === l6 ? n3 ?? {} : ((n4, l7, c7) => us(l7).reduceRight((l8, c8, u5, h7) => Object.assign({}, $n(n4, h7.slice(0, u5)), { [c8]: l8 }), c7))(l6, c6, n3 || true);
}
function qn(n3, l6, c6, u5, h7, f6) {
  let p5 = n3._runtimeDataModel.models[l6].fields.reduce((n4, l7) => ({ ...n4, [l7.name]: l7 }), {});
  return (m7) => {
    let g5 = Re(n3._errorFormat), y5 = (function(n4, l7) {
      return void 0 === n4 || void 0 === l7 ? [] : [...l7, "select", n4];
    })(u5, h7), w5 = Mc(m7, f6, y5), b4 = c6({ dataPath: y5, callsite: g5 })(w5), v5 = (function(n4, l7) {
      return n4._runtimeDataModel.models[l7].fields.filter((n5) => "object" === n5.kind).map((n5) => n5.name);
    })(n3, l6);
    return new Proxy(b4, { get(l7, u6) {
      if (!v5.includes(u6)) return l7[u6];
      let h8 = [p5[u6].type, c6, u6];
      return qn(n3, ...h8, ...[y5, w5]);
    }, ..._r([...v5, ...Object.getOwnPropertyNames(b4)]) });
  };
}
function Vn(n3, l6) {
  let c6 = n3._extensions.getAllModelExtensions(l6) ?? {};
  return le({}, [_c(n3, l6), Uc(n3, l6), Ut(c6), Y2("name", () => l6), Y2("$name", () => l6), Y2("$parent", () => n3._appliedParent)]);
}
function _c(n3, l6) {
  let c6 = ye(l6), u5 = Object.keys(Tn).concat("count");
  return { getKeys: /* @__PURE__ */ __name(() => u5, "getKeys"), getPropertyValue(u6) {
    let h7 = u6, s6 = /* @__PURE__ */ __name((f6) => (p5) => {
      let m7 = Re(n3._errorFormat);
      return n3._createPrismaPromise((g5) => {
        let y5 = { args: p5, dataPath: [], action: h7, model: l6, clientMethod: `${c6}.${u6}`, jsModelName: c6, transaction: g5, callsite: m7 };
        return n3._request({ ...y5, ...f6 });
      }, { action: h7, args: p5, model: l6 });
    }, "s");
    return Li.includes(h7) ? qn(n3, l6, s6) : (function(n4) {
      return Bi.includes(n4);
    })(u6) ? as(0, u6, s6) : s6({});
  } };
}
function Uc(n3, l6) {
  return Ue(Y2("fields", () => {
    let c6 = n3._runtimeDataModel.models[l6];
    return (function(n4, l7) {
      let c7 = (function(n5, l8) {
        let c8 = {};
        for (let u5 of n5) c8[u5[l8]] = u5;
        return c8;
      })(l7.fields.filter((n5) => !n5.relationName), "name");
      return new Proxy({}, { get(l8, u5) {
        if (u5 in l8 || "symbol" == typeof u5) return l8[u5];
        let h7 = c7[u5];
        return h7 ? new Zn(n4, u5, h7.type, h7.isList, "enum" === h7.kind) : void 0;
      }, ..._r(Object.keys(c7)) });
    })(l6, c6);
  }));
}
function $t(n3) {
  let l6 = [$c(n3), qc(n3), Y2(Wi, () => n3), Y2("$parent", () => n3._appliedParent)], c6 = n3._extensions.getAllClientExtensions();
  return c6 && l6.push(Ut(c6)), le(n3, l6);
}
function $c(n3) {
  let l6 = Object.getPrototypeOf(n3._originalClient), c6 = [...new Set(Object.getOwnPropertyNames(l6))];
  return { getKeys: /* @__PURE__ */ __name(() => c6, "getKeys"), getPropertyValue: /* @__PURE__ */ __name((l7) => n3[l7], "getPropertyValue") };
}
function qc(n3) {
  let l6 = Object.keys(n3._runtimeDataModel.models), c6 = l6.map(ye), u5 = [...new Set(l6.concat(c6))];
  return Ue({ getKeys: /* @__PURE__ */ __name(() => u5, "getKeys"), getPropertyValue(l7) {
    let c7 = (function(n4) {
      return n4.replace(/^./, (n5) => n5.toUpperCase());
    })(l7);
    return void 0 !== n3._runtimeDataModel.models[c7] ? Vn(n3, c7) : void 0 !== n3._runtimeDataModel.models[l7] ? Vn(n3, l7) : void 0;
  }, getPropertyDescriptor(n4) {
    if (!c6.includes(n4)) return { enumerable: false };
  } });
}
function ds(n3) {
  if ("function" == typeof n3) return n3(this);
  return $t(Object.create(this._originalClient, { _extensions: { value: this._extensions.append(n3) }, _appliedParent: { value: this, configurable: true }, $on: { value: void 0 } }));
}
function Vc(n3, l6) {
  return l6.every((l7) => (function(n4, l8) {
    return Object.prototype.hasOwnProperty.call(n4, l8);
  })(n3, l7));
}
function Bc(n3, l6) {
  return Ue(Y2(n3.name, () => n3.compute(l6)));
}
function Ur({ visitor: n3, result: l6, args: c6, runtimeDataModel: u5, modelName: h7 }) {
  if (Array.isArray(l6)) {
    for (let f7 = 0; f7 < l6.length; f7++) l6[f7] = Ur({ result: l6[f7], args: c6, modelName: h7, runtimeDataModel: u5, visitor: n3 });
    return l6;
  }
  let f6 = n3(l6, h7, c6) ?? l6;
  return c6.include && gs({ includeOrSelect: c6.include, result: f6, parentModelName: h7, runtimeDataModel: u5, visitor: n3 }), c6.select && gs({ includeOrSelect: c6.select, result: f6, parentModelName: h7, runtimeDataModel: u5, visitor: n3 }), f6;
}
function gs({ includeOrSelect: n3, result: l6, parentModelName: c6, runtimeDataModel: u5, visitor: h7 }) {
  for (let [f6, p5] of Object.entries(n3)) {
    if (!p5 || null == l6[f6] || he(p5)) continue;
    let n4 = u5.models[c6].fields.find((n5) => n5.name === f6);
    if (!n4 || "object" !== n4.kind || !n4.relationName) continue;
    let m7 = "object" == typeof p5 ? p5 : {};
    l6[f6] = Ur({ visitor: h7, result: l6[f6], args: m7, modelName: n4.type, runtimeDataModel: u5 });
  }
}
function ys({ result: n3, modelName: l6, args: c6, extensions: u5, runtimeDataModel: h7, globalOmit: f6 }) {
  return u5.isEmpty() || null == n3 || "object" != typeof n3 || !h7.models[l6] ? n3 : Ur({ result: n3, args: c6 ?? {}, modelName: l6, runtimeDataModel: h7, visitor: /* @__PURE__ */ __name((n4, l7, c7) => {
    let h8 = ye(l7);
    return (function({ result: n5, modelName: l8, select: c8, omit: u6, extensions: h9 }) {
      let f7 = h9.getAllComputedFields(l8);
      if (!f7) return n5;
      let p5 = [], m7 = [];
      for (let l9 of Object.values(f7)) {
        if (u6) {
          if (u6[l9.name]) continue;
          let n6 = l9.needs.filter((n7) => u6[n7]);
          n6.length > 0 && m7.push(ut(n6));
        } else if (c8) {
          if (!c8[l9.name]) continue;
          let n6 = l9.needs.filter((n7) => !c8[n7]);
          n6.length > 0 && m7.push(ut(n6));
        }
        Vc(n5, l9.needs) && p5.push(Bc(l9, le(n5, p5)));
      }
      return p5.length > 0 || m7.length > 0 ? le(n5, [...p5, ...m7]) : n5;
    })({ result: n4, modelName: h8, select: c7.select, omit: c7.select ? void 0 : { ...f6?.[h8], ...c7.omit }, extensions: u5 });
  }, "visitor") });
}
function bs(n3) {
  if (n3 instanceof Fe) return (function(n4) {
    return new Fe(n4.strings, n4.values);
  })(n3);
  if (Nr(n3)) return (function(n4) {
    return new Ai(n4.sql, n4.values);
  })(n3);
  if (Array.isArray(n3)) {
    let l7 = [n3[0]];
    for (let c6 = 1; c6 < n3.length; c6++) l7[c6] = qt(n3[c6]);
    return l7;
  }
  let l6 = {};
  for (let c6 in n3) l6[c6] = qt(n3[c6]);
  return l6;
}
function qt(n3) {
  if ("object" != typeof n3 || null == n3 || n3 instanceof O2 || st(n3)) return n3;
  if (et(n3)) return new Le(n3.toFixed());
  if (Xe(n3)) return /* @__PURE__ */ new Date(+n3);
  if (ArrayBuffer.isView(n3)) return n3.slice(0);
  if (Array.isArray(n3)) {
    let l6, c6 = n3.length;
    for (l6 = Array(c6); c6--; ) l6[c6] = qt(n3[c6]);
    return l6;
  }
  if ("object" == typeof n3) {
    let l6 = {};
    for (let c6 in n3) "__proto__" === c6 ? Object.defineProperty(l6, c6, { value: qt(n3[c6]), configurable: true, enumerable: true, writable: true }) : l6[c6] = qt(n3[c6]);
    return l6;
  }
  Te(0, "Unknown value");
}
function Es(n3, l6, c6, u5 = 0) {
  return n3._createPrismaPromise((h7) => {
    let f6 = l6.customDataProxyFetch;
    return "transaction" in l6 && void 0 !== h7 && ("batch" === l6.transaction?.kind && l6.transaction.lock.then(), l6.transaction = h7), u5 === c6.length ? n3._executeRequest(l6) : c6[u5]({ model: l6.model, operation: l6.model ? l6.action : l6.clientMethod, args: bs(l6.args ?? {}), __internalParams: l6, query: /* @__PURE__ */ __name((h8, p5 = l6) => {
      let m7 = p5.customDataProxyFetch;
      return p5.customDataProxyFetch = vs(f6, m7), p5.args = h8, Es(n3, p5, c6, u5 + 1);
    }, "query") });
  });
}
function Ts(n3, l6) {
  let { jsModelName: c6, action: u5, clientMethod: h7 } = l6, f6 = c6 ? u5 : h7;
  if (n3._extensions.isEmpty()) return n3._executeRequest(l6);
  let p5 = n3._extensions.getAllQueryCallbacks(c6 ?? "$none", f6);
  return Es(n3, l6, p5);
}
function Ps(n3) {
  return (l6) => {
    let c6 = { requests: l6 }, u5 = l6[0].extensions.getAllBatchQueryCallbacks();
    return u5.length ? As(c6, u5, 0, n3) : n3(c6);
  };
}
function As(n3, l6, c6, u5) {
  if (c6 === l6.length) return u5(n3);
  let h7 = n3.customDataProxyFetch, f6 = n3.requests[0].transaction;
  return l6[c6]({ args: { queries: n3.requests.map((n4) => ({ model: n4.modelName, operation: n4.action, args: n4.args })), transaction: f6 ? { isolationLevel: "batch" === f6.kind ? f6.isolationLevel : void 0 } : void 0 }, __internalParams: n3, query(f7, p5 = n3) {
    let m7 = p5.customDataProxyFetch;
    return p5.customDataProxyFetch = vs(h7, m7), As(p5, l6, c6 + 1, u5);
  } });
}
function vs(n3 = xs, l6 = xs) {
  return (c6) => n3(l6(c6));
}
function D2(n3, l6) {
  throw new Error(l6);
}
function jn(n3, l6) {
  return n3 === l6 || null !== n3 && null !== l6 && "object" == typeof n3 && "object" == typeof l6 && Object.keys(n3).length === Object.keys(l6).length && Object.keys(n3).every((c6) => jn(n3[c6], l6[c6]));
}
function pt(n3, l6) {
  let c6 = Object.keys(n3), u5 = Object.keys(l6);
  return (c6.length < u5.length ? c6 : u5).every((c7) => {
    if (typeof n3[c7] == typeof l6[c7] && "object" != typeof n3[c7]) return n3[c7] === l6[c7];
    if (Le.isDecimal(n3[c7]) || Le.isDecimal(l6[c7])) {
      let u6 = Cs(n3[c7]), h7 = Cs(l6[c7]);
      return u6 && h7 && u6.equals(h7);
    }
    if (n3[c7] instanceof Uint8Array || l6[c7] instanceof Uint8Array) {
      let u6 = Ss(n3[c7]), h7 = Ss(l6[c7]);
      return u6 && h7 && u6.equals(h7);
    }
    return n3[c7] instanceof Date || l6[c7] instanceof Date ? Rs(n3[c7])?.getTime() === Rs(l6[c7])?.getTime() : "bigint" == typeof n3[c7] || "bigint" == typeof l6[c7] ? Is(n3[c7]) === Is(l6[c7]) : "number" == typeof n3[c7] || "number" == typeof l6[c7] ? Os(n3[c7]) === Os(l6[c7]) : jn(n3[c7], l6[c7]);
  });
}
function Cs(n3) {
  return Le.isDecimal(n3) ? n3 : "number" == typeof n3 || "string" == typeof n3 ? new Le(n3) : void 0;
}
function Ss(n3) {
  return nt.isBuffer(n3) ? n3 : n3 instanceof Uint8Array ? nt.from(n3.buffer, n3.byteOffset, n3.byteLength) : "string" == typeof n3 ? nt.from(n3, "base64") : void 0;
}
function Rs(n3) {
  return n3 instanceof Date ? n3 : "string" == typeof n3 || "number" == typeof n3 ? new Date(n3) : void 0;
}
function Is(n3) {
  return "bigint" == typeof n3 ? n3 : "number" == typeof n3 || "string" == typeof n3 ? BigInt(n3) : void 0;
}
function Os(n3) {
  return "number" == typeof n3 ? n3 : "string" == typeof n3 ? Number(n3) : void 0;
}
function Vt(n3) {
  return JSON.stringify(n3, (n4, l6) => "bigint" == typeof l6 ? l6.toString() : ArrayBuffer.isView(l6) ? nt.from(l6.buffer, l6.byteOffset, l6.byteLength).toString("base64") : l6);
}
function $e(n3) {
  return null === n3 ? n3 : Array.isArray(n3) ? n3.map($e) : "object" == typeof n3 ? (function(n4) {
    return null !== n4 && "object" == typeof n4 && "string" == typeof n4.$type;
  })(n3) ? (function({ $type: n4, value: l6 }) {
    switch (n4) {
      case "BigInt":
        return BigInt(l6);
      case "Bytes": {
        let { buffer: n5, byteOffset: c6, byteLength: u5 } = nt.from(l6, "base64");
        return new Uint8Array(n5, c6, u5);
      }
      case "DateTime":
        return new Date(l6);
      case "Decimal":
        return new Le(l6);
      case "Json":
        return JSON.parse(l6);
      default:
        D2(0, "Unknown tagged value");
    }
  })(n3) : null !== n3.constructor && "Object" !== n3.constructor.name ? n3 : (function(n4, l6) {
    let c6 = {};
    for (let u5 of Object.keys(n4)) c6[u5] = l6(n4[u5], u5);
    return c6;
  })(n3, $e) : n3;
}
function qr(n3) {
  return "DriverAdapterError" === n3.name && "object" == typeof n3.cause;
}
function mt(n3) {
  if (!qr(n3)) throw n3;
  let l6 = (function(n4) {
    switch (n4.cause.kind) {
      case "AuthenticationFailed":
        return "P1000";
      case "DatabaseNotReachable":
        return "P1001";
      case "DatabaseDoesNotExist":
        return "P1003";
      case "SocketTimeout":
        return "P1008";
      case "DatabaseAlreadyExists":
        return "P1009";
      case "DatabaseAccessDenied":
        return "P1010";
      case "TlsConnectionError":
        return "P1011";
      case "ConnectionClosed":
        return "P1017";
      case "TransactionAlreadyClosed":
        return "P1018";
      case "LengthMismatch":
        return "P2000";
      case "UniqueConstraintViolation":
        return "P2002";
      case "ForeignKeyConstraintViolation":
        return "P2003";
      case "InvalidInputValue":
        return "P2007";
      case "UnsupportedNativeDataType":
        return "P2010";
      case "NullConstraintViolation":
        return "P2011";
      case "ValueOutOfRange":
        return "P2020";
      case "TableDoesNotExist":
        return "P2021";
      case "ColumnNotFound":
        return "P2022";
      case "InvalidIsolationLevel":
      case "InconsistentColumnData":
        return "P2023";
      case "MissingFullTextSearchIndex":
        return "P2030";
      case "TransactionWriteConflict":
        return "P2034";
      case "GenericJs":
        return "P2036";
      case "TooManyConnections":
        return "P2037";
      case "postgres":
      case "sqlite":
      case "mysql":
      case "mssql":
        return;
      default:
        D2(n4.cause, `Unknown error: ${n4.cause}`);
    }
  })(n3), c6 = ks(n3);
  throw l6 && c6 ? new Oa(c6, l6, { driverAdapterError: n3 }) : n3;
}
function Hn(n3) {
  throw qr(n3) ? new Oa(`Raw query failed. Code: \`${n3.cause.originalCode ?? "N/A"}\`. Message: \`${n3.cause.originalMessage ?? ks(n3)}\``, "P2010", { driverAdapterError: n3 }) : n3;
}
function ks(n3) {
  switch (n3.cause.kind) {
    case "AuthenticationFailed":
      return `Authentication failed against the database server, the provided database credentials for \`${n3.cause.user ?? "(not available)"}\` are not valid`;
    case "DatabaseNotReachable": {
      let l6 = n3.cause.host && n3.cause.port ? `${n3.cause.host}:${n3.cause.port}` : n3.cause.host;
      return "Can't reach database server" + (l6 ? ` at ${l6}` : "");
    }
    case "DatabaseDoesNotExist":
      return `Database \`${n3.cause.db ?? "(not available)"}\` does not exist on the database server`;
    case "SocketTimeout":
      return "Operation has timed out";
    case "DatabaseAlreadyExists":
      return `Database \`${n3.cause.db ?? "(not available)"}\` already exists on the database server`;
    case "DatabaseAccessDenied":
      return `User was denied access on the database \`${n3.cause.db ?? "(not available)"}\``;
    case "TlsConnectionError":
      return `Error opening a TLS connection: ${n3.cause.reason}`;
    case "ConnectionClosed":
      return "Server has closed the connection.";
    case "TransactionAlreadyClosed":
      return n3.cause.cause;
    case "LengthMismatch":
      return `The provided value for the column is too long for the column's type. Column: ${n3.cause.column ?? "(not available)"}`;
    case "UniqueConstraintViolation":
      return `Unique constraint failed on the ${Qn(n3.cause.constraint)}`;
    case "ForeignKeyConstraintViolation":
      return `Foreign key constraint violated on the ${Qn(n3.cause.constraint)}`;
    case "UnsupportedNativeDataType":
      return `Failed to deserialize column of type '${n3.cause.type}'. If you're using $queryRaw and this column is explicitly marked as \`Unsupported\` in your Prisma schema, try casting this column to any supported Prisma type such as \`String\`.`;
    case "NullConstraintViolation":
      return `Null constraint violation on the ${Qn(n3.cause.constraint)}`;
    case "ValueOutOfRange":
      return `Value out of range for the type: ${n3.cause.cause}`;
    case "TableDoesNotExist":
      return `The table \`${n3.cause.table ?? "(not available)"}\` does not exist in the current database.`;
    case "ColumnNotFound":
      return `The column \`${n3.cause.column ?? "(not available)"}\` does not exist in the current database.`;
    case "InvalidIsolationLevel":
      return `Error in connector: Conversion error: ${n3.cause.level}`;
    case "InconsistentColumnData":
      return `Inconsistent column data: ${n3.cause.cause}`;
    case "MissingFullTextSearchIndex":
      return "Cannot find a fulltext index to use for the native search, try adding a @@fulltext([Fields...]) to your schema";
    case "TransactionWriteConflict":
      return "Transaction failed due to a write conflict or a deadlock. Please retry your transaction";
    case "GenericJs":
      return `Error in external connector (id ${n3.cause.id})`;
    case "TooManyConnections":
      return `Too many database connections opened: ${n3.cause.cause}`;
    case "InvalidInputValue":
      return `Invalid input value: ${n3.cause.message}`;
    case "sqlite":
    case "postgres":
    case "mysql":
    case "mssql":
      return;
    default:
      D2(n3.cause, `Unknown error: ${n3.cause}`);
  }
}
function Qn(n3) {
  return n3 && "fields" in n3 ? `fields: (${n3.fields.map((n4) => `\`${n4}\``).join(", ")})` : n3 && "index" in n3 ? `constraint: \`${n3.index}\`` : n3 && "foreignKey" in n3 ? "foreign key" : "(not available)";
}
function Ls(n3, l6, c6) {
  switch (l6.type) {
    case "affectedRows":
      if ("number" != typeof n3) throw new Da(`Expected an affected rows count, got: ${typeof n3} (${n3})`);
      return { count: n3 };
    case "object":
      return Wn(n3, l6.fields, c6, l6.skipNulls);
    case "field":
      return Jn(n3, "<result>", l6.fieldType, c6);
    default:
      D2(0, `Invalid data mapping type: '${l6.type}'`);
  }
}
function Wn(n3, l6, c6, u5) {
  if (null === n3) return null;
  if (Array.isArray(n3)) {
    let h7 = n3;
    return u5 && (h7 = h7.filter((n4) => null !== n4)), h7.map((n4) => Ds(n4, l6, c6));
  }
  if ("object" == typeof n3) return Ds(n3, l6, c6);
  if ("string" == typeof n3) {
    let h7;
    try {
      h7 = JSON.parse(n3);
    } catch (n4) {
      throw new Da("Expected an array or object, got a string that is not valid JSON", { cause: n4 });
    }
    return Wn(h7, l6, c6, u5);
  }
  throw new Da("Expected an array or an object, got: " + typeof n3);
}
function Ds(n3, l6, c6) {
  if ("object" != typeof n3) throw new Da(`Expected an object, but got '${typeof n3}'`);
  let u5 = {};
  for (let [h7, f6] of (function(n4) {
    let l7 = Ma.get(n4);
    return l7 || (l7 = Object.entries(n4), Ma.set(n4, l7)), l7;
  })(l6)) switch (f6.type) {
    case "affectedRows":
      throw new Da(`Unexpected 'AffectedRows' node in data mapping for field '${h7}'`);
    case "object": {
      let { serializedName: l7, fields: p5, skipNulls: m7 } = f6;
      if (null !== l7 && !Object.hasOwn(n3, l7)) throw new Da(`Missing data field (Object): '${h7}'; node: ${JSON.stringify(f6)}; data: ${JSON.stringify(n3)}`);
      let g5 = null !== l7 ? n3[l7] : n3;
      u5[h7] = Wn(g5, p5, c6, m7);
      break;
    }
    case "field":
      {
        let l7 = f6.dbName;
        if (!Object.hasOwn(n3, l7)) throw new Da(`Missing data field (Value): '${l7}'; node: ${JSON.stringify(f6)}; data: ${JSON.stringify(n3)}`);
        u5[h7] = tp(n3[l7], l7, f6.fieldType, c6);
      }
      break;
    default:
      D2(0, `DataMapper: Invalid data mapping node type: '${f6.type}'`);
  }
  return u5;
}
function tp(n3, l6, c6, u5) {
  return null === n3 ? "list" === c6.arity ? [] : null : "list" === c6.arity ? n3.map((n4, h7) => Jn(n4, `${l6}[${h7}]`, c6, u5)) : Jn(n3, l6, c6, u5);
}
function Jn(n3, l6, c6, u5) {
  switch (c6.type) {
    case "unsupported":
      return n3;
    case "string":
      if ("string" != typeof n3) throw new Da(`Expected a string in column '${l6}', got ${typeof n3}: ${n3}`);
      return n3;
    case "int":
      switch (typeof n3) {
        case "number":
          return Math.trunc(n3);
        case "string": {
          let c7 = Math.trunc(Number(n3));
          if (Number.isNaN(c7) || !Number.isFinite(c7)) throw new Da(`Expected an integer in column '${l6}', got string: ${n3}`);
          if (!Number.isSafeInteger(c7)) throw new Da(`Integer value in column '${l6}' is too large to represent as a JavaScript number without loss of precision, got: ${n3}. Consider using BigInt type.`);
          return c7;
        }
        default:
          throw new Da(`Expected an integer in column '${l6}', got ${typeof n3}: ${n3}`);
      }
    case "bigint":
      if ("number" != typeof n3 && "string" != typeof n3) throw new Da(`Expected a bigint in column '${l6}', got ${typeof n3}: ${n3}`);
      return { $type: "BigInt", value: n3 };
    case "float":
      if ("number" == typeof n3) return n3;
      if ("string" == typeof n3) {
        let c7 = Number(n3);
        if (Number.isNaN(c7) && !/^[-+]?nan$/.test(n3.toLowerCase())) throw new Da(`Expected a float in column '${l6}', got string: ${n3}`);
        return c7;
      }
      throw new Da(`Expected a float in column '${l6}', got ${typeof n3}: ${n3}`);
    case "boolean":
      if ("boolean" == typeof n3) return n3;
      if ("number" == typeof n3) return 1 === n3;
      if ("string" == typeof n3) {
        if ("true" === n3 || "TRUE" === n3 || "1" === n3) return true;
        if ("false" === n3 || "FALSE" === n3 || "0" === n3) return false;
        throw new Da(`Expected a boolean in column '${l6}', got ${typeof n3}: ${n3}`);
      }
      if (Array.isArray(n3) || n3 instanceof Uint8Array) {
        for (let l7 of n3) if (0 !== l7) return true;
        return false;
      }
      throw new Da(`Expected a boolean in column '${l6}', got ${typeof n3}: ${n3}`);
    case "decimal":
      if ("number" != typeof n3 && "string" != typeof n3 && !Le.isDecimal(n3)) throw new Da(`Expected a decimal in column '${l6}', got ${typeof n3}: ${n3}`);
      return { $type: "Decimal", value: n3 };
    case "datetime":
      if ("string" == typeof n3) return { $type: "DateTime", value: np(n3) };
      if ("number" == typeof n3 || n3 instanceof Date) return { $type: "DateTime", value: n3 };
      throw new Da(`Expected a date in column '${l6}', got ${typeof n3}: ${n3}`);
    case "object":
      return { $type: "Json", value: Vt(n3) };
    case "json":
      return { $type: "Json", value: `${n3}` };
    case "bytes":
      switch (c6.encoding) {
        case "base64":
          if ("string" != typeof n3) throw new Da(`Expected a base64-encoded byte array in column '${l6}', got ${typeof n3}: ${n3}`);
          return { $type: "Bytes", value: n3 };
        case "hex":
          if ("string" != typeof n3 || !n3.startsWith("\\x")) throw new Da(`Expected a hex-encoded byte array in column '${l6}', got ${typeof n3}: ${n3}`);
          return { $type: "Bytes", value: nt.from(n3.slice(2), "hex").toString("base64") };
        case "array":
          if (Array.isArray(n3)) return { $type: "Bytes", value: nt.from(n3).toString("base64") };
          if (n3 instanceof Uint8Array) return { $type: "Bytes", value: nt.from(n3).toString("base64") };
          throw new Da(`Expected a byte array in column '${l6}', got ${typeof n3}: ${n3}`);
        default:
          D2(c6.encoding, `DataMapper: Unknown bytes encoding: ${c6.encoding}`);
      }
      break;
    case "enum": {
      let l7 = u5[c6.name];
      if (void 0 === l7) throw new Da(`Unknown enum '${c6.name}'`);
      let h7 = l7[`${n3}`];
      if (void 0 === h7) throw new Da(`Value '${n3}' not found in enum '${c6.name}'`);
      return h7;
    }
    default:
      D2(0, `DataMapper: Unknown result type: ${c6.type}`);
  }
}
function np(n3) {
  let l6 = Za.exec(n3);
  if (null === l6) return `${n3}T00:00:00Z`;
  let c6 = n3, [u5, h7, f6] = l6;
  if (void 0 !== h7 && "Z" !== h7 && void 0 === f6 ? c6 = `${n3}:00` : void 0 === h7 && (c6 = `${n3}Z`), u5.length === n3.length) return `1970-01-01T${c6}`;
  let p5 = l6.index - 1;
  return " " === c6[p5] && (c6 = `${c6.slice(0, p5)}T${c6.slice(p5 + 1)}`), c6;
}
function we(n3) {
  if ("object" != typeof n3) return n3;
  var l6, c6, u5 = Object.prototype.toString.call(n3);
  if ("[object Object]" === u5) {
    if (n3.constructor !== Object && "function" == typeof n3.constructor) for (l6 in c6 = new n3.constructor(), n3) n3.hasOwnProperty(l6) && c6[l6] !== n3[l6] && (c6[l6] = we(n3[l6]));
    else for (l6 in c6 = {}, n3) "__proto__" === l6 ? Object.defineProperty(c6, l6, { value: we(n3[l6]), configurable: true, enumerable: true, writable: true }) : c6[l6] = we(n3[l6]);
    return c6;
  }
  if ("[object Array]" === u5) {
    for (l6 = n3.length, c6 = Array(l6); l6--; ) c6[l6] = we(n3[l6]);
    return c6;
  }
  return "[object Set]" === u5 ? (c6 = /* @__PURE__ */ new Set(), n3.forEach(function(n4) {
    c6.add(we(n4));
  }), c6) : "[object Map]" === u5 ? (c6 = /* @__PURE__ */ new Map(), n3.forEach(function(n4, l7) {
    c6.set(we(l7), we(n4));
  }), c6) : "[object Date]" === u5 ? /* @__PURE__ */ new Date(+n3) : "[object RegExp]" === u5 ? ((c6 = new RegExp(n3.source, n3.flags)).lastIndex = n3.lastIndex, c6) : "[object DataView]" === u5 ? new n3.constructor(we(n3.buffer)) : "[object ArrayBuffer]" === u5 ? n3.slice(0) : "Array]" === u5.slice(-6) ? new n3.constructor(n3) : n3;
}
function Vr(n3, l6) {
  let c6 = {};
  for (let u5 of n3) {
    let n4 = u5(we(l6));
    for (let [l7, u6] of Object.entries(n4)) void 0 !== u6 && (c6[l7] = u6);
  }
  return c6;
}
function _s(n3, l6) {
  return (function(n4) {
    let l7 = Object.entries(n4);
    return 0 === l7.length ? "" : (l7.sort(([n5], [l8]) => n5.localeCompare(l8)), `/*${l7.map(([n5, l8]) => `${encodeURIComponent(n5)}='${encodeURIComponent(l8).replace(/'/g, "\\'")}'`).join(",")}*/`);
  })(Vr(n3, l6));
}
function Fs(n3, l6) {
  return l6 ? `${n3} ${l6}` : n3;
}
function op(n3) {
  switch (n3) {
    case "postgresql":
    case "postgres":
    case "prisma+postgres":
      return "postgresql";
    case "sqlserver":
      return "mssql";
    case "mysql":
    case "sqlite":
    case "cockroachdb":
    case "mongodb":
      return n3;
    default:
      D2(0, `Unknown provider: ${n3}`);
  }
}
async function Br({ query: n3, tracingHelper: l6, provider: c6, onQuery: u5, execute: h7 }) {
  let f6 = void 0 === u5 ? h7 : async () => {
    let l7 = /* @__PURE__ */ new Date(), c7 = ft.now(), f7 = await h7(), p5 = ft.now();
    return u5({ timestamp: l7, duration: p5 - c7, query: n3.sql, params: n3.args }), f7;
  };
  return l6.isEnabled() ? await l6.runInChildSpan({ name: "db_query", kind: La.CLIENT, attributes: { "db.query.text": n3.sql, "db.system.name": op(c6) } }, f6) : f6();
}
function qe(n3, l6) {
  var c6 = "000000000" + n3;
  return c6.substr(c6.length - l6);
}
function jr(n3) {
  return "string" == typeof n3 && /^c[a-z0-9]{20,32}$/.test(n3);
}
function ii(n3 = 21) {
  !(function(n4) {
    !lo || lo.length < n4 ? (lo = nt.allocUnsafe(128 * n4), er.getRandomValues(lo), co = 0) : co + n4 > lo.length && (er.getRandomValues(lo), co = 0), co += n4;
  })(n3 |= 0);
  let l6 = "";
  for (let c6 = co - n3; c6 < co; c6++) l6 += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[63 & lo[c6]];
  return l6;
}
function Xp(n3) {
  let l6 = Math.floor(32 * n3());
  return 32 === l6 && (l6 = 31), ho.charAt(l6);
}
function em(n3) {
  let l6 = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : typeof globalThis < "u" || typeof globalThis < "u" ? globalThis : null, c6 = l6 && (l6.crypto || l6.msCrypto) || (typeof nr < "u" ? nr : null);
  if ("function" == typeof c6?.getRandomValues) return () => {
    let n4 = new Uint8Array(1);
    return c6.getRandomValues(n4), n4[0] / 255;
  };
  if ("function" == typeof c6?.randomBytes) return () => c6.randomBytes(1).readUInt8() / 255;
  if (nr?.randomBytes) return () => nr.randomBytes(1).readUInt8() / 255;
  throw new po(uo.PRNGDetectFailure, "Failed to find a reliable PRNG");
}
function _a(n3, l6) {
  let c6 = em();
  return (function(n4, l7 = 10) {
    if (isNaN(n4)) throw new po(uo.EncodeTimeValueMalformed, `Time must be a number: ${n4}`);
    if (n4 > fo) throw new po(uo.EncodeTimeSizeExceeded, `Cannot encode a time larger than ${fo}: ${n4}`);
    if (n4 < 0) throw new po(uo.EncodeTimeNegative, `Time must be positive: ${n4}`);
    if (false === Number.isInteger(n4)) throw new po(uo.EncodeTimeValueMalformed, `Time must be an integer: ${n4}`);
    let c7, u5 = "";
    for (let h7 = l7; h7 > 0; h7--) c7 = n4 % 32, u5 = ho.charAt(c7) + u5, n4 = (n4 - c7) / 32;
    return u5;
  })(Date.now(), 10) + (function(n4, l7) {
    let c7 = "";
    for (; n4 > 0; n4--) c7 = Xp(l7) + c7;
    return c7;
  })(16, c6);
}
function Wr(n3, l6 = 0) {
  return (mo[n3[l6 + 0]] + mo[n3[l6 + 1]] + mo[n3[l6 + 2]] + mo[n3[l6 + 3]] + "-" + mo[n3[l6 + 4]] + mo[n3[l6 + 5]] + "-" + mo[n3[l6 + 6]] + mo[n3[l6 + 7]] + "-" + mo[n3[l6 + 8]] + mo[n3[l6 + 9]] + "-" + mo[n3[l6 + 10]] + mo[n3[l6 + 11]] + mo[n3[l6 + 12]] + mo[n3[l6 + 13]] + mo[n3[l6 + 14]] + mo[n3[l6 + 15]]).toLowerCase();
}
function yt() {
  return wo > yo.length - 16 && (fr(yo), wo = 0), yo.slice(wo, wo += 16);
}
function Fa(n3, l6, c6, u5, h7 = 0) {
  if (n3.length < 16) throw new Error("Random bytes length must be >= 16");
  if (u5) {
    if (h7 < 0 || h7 + 16 > u5.length) throw new RangeError(`UUID byte range ${h7}:${h7 + 15} is out of buffer bounds`);
  } else u5 = new Uint8Array(16), h7 = 0;
  return l6 ??= Date.now(), c6 ??= 127 * n3[6] << 24 | n3[7] << 16 | n3[8] << 8 | n3[9], u5[h7++] = l6 / 1099511627776 & 255, u5[h7++] = l6 / 4294967296 & 255, u5[h7++] = l6 / 16777216 & 255, u5[h7++] = l6 / 65536 & 255, u5[h7++] = l6 / 256 & 255, u5[h7++] = 255 & l6, u5[h7++] = 112 | c6 >>> 28 & 15, u5[h7++] = c6 >>> 20 & 255, u5[h7++] = 128 | c6 >>> 14 & 63, u5[h7++] = c6 >>> 6 & 255, u5[h7++] = c6 << 2 & 255 | 3 & n3[10], u5[h7++] = n3[11], u5[h7++] = n3[12], u5[h7++] = n3[13], u5[h7++] = n3[14], u5[h7++] = n3[15], u5;
}
function Zr(n3, l6) {
  return null == n3 ? n3 : "string" == typeof n3 ? Zr(JSON.parse(n3), l6) : Array.isArray(n3) ? (function(n4, l7) {
    if (null !== l7.distinct) {
      n4 = (function(n5, l8) {
        let c6 = /* @__PURE__ */ new Set(), u5 = [];
        for (let h7 of n5) {
          let n6 = ht(h7, l8);
          c6.has(n6) || (c6.add(n6), u5.push(h7));
        }
        return u5;
      })(n4, null !== l7.linkingFields ? [...l7.distinct, ...l7.linkingFields] : l7.distinct);
    }
    return l7.pagination && (n4 = (function(n5, l8, c6) {
      if (null === c6) return $a(n5, l8);
      let u5 = /* @__PURE__ */ new Map();
      for (let l9 of n5) {
        let n6 = ht(l9, c6);
        u5.has(n6) || u5.set(n6, []), u5.get(n6).push(l9);
      }
      let h7 = Array.from(u5.entries());
      return h7.sort(([n6], [l9]) => n6 < l9 ? -1 : n6 > l9 ? 1 : 0), h7.flatMap(([, n6]) => $a(n6, l8));
    })(n4, l7.pagination, l7.linkingFields)), l7.reverse && n4.reverse(), 0 === Object.keys(l7.nested).length ? n4 : n4.map((n5) => qa(n5, l7.nested));
  })(n3, l6) : (function(n4, l7) {
    if (l7.pagination) {
      let { skip: c6, take: u5, cursor: h7 } = l7.pagination;
      if (null !== c6 && c6 > 0 || 0 === u5 || null !== h7 && !pt(n4, h7)) return null;
    }
    return qa(n4, l7.nested);
  })(n3, l6);
}
function qa(n3, l6) {
  for (let [c6, u5] of Object.entries(l6)) n3[c6] = Zr(n3[c6], u5);
  return n3;
}
function $a(n3, { cursor: l6, skip: c6, take: u5 }) {
  let h7 = null !== l6 ? n3.findIndex((n4) => pt(n4, l6)) : 0;
  if (-1 === h7) return [];
  let f6 = h7 + (c6 ?? 0), p5 = null !== u5 ? f6 + u5 : n3.length;
  return n3.slice(f6, p5);
}
function ht(n3, l6) {
  return JSON.stringify(l6.map((l7) => n3[l7]));
}
function gi(n3) {
  return "object" == typeof n3 && null !== n3 && "param" === n3.prisma__type;
}
function yi(n3) {
  return "object" == typeof n3 && null !== n3 && "generatorCall" === n3.prisma__type;
}
function bi(n3, l6, c6, u5) {
  let h7 = n3.args.map((n4) => ue2(n4, l6, c6));
  switch (n3.type) {
    case "rawSql":
      return [fm(n3.sql, h7, n3.argTypes)];
    case "templateSql":
      return (n3.chunkable ? (function(n4, l7, c7) {
        let u6 = 0, h8 = 0;
        for (let c8 of wi(n4, l7, void 0)) {
          let n5 = 0;
          for (let l8 of Va(c8)) n5++;
          h8 = Math.max(h8, n5), u6 += n5;
        }
        let f6 = [[]];
        for (let p5 of wi(n4, l7, void 0)) switch (p5.type) {
          case "parameter":
            for (let n5 of f6) n5.push(p5.value);
            break;
          case "stringChunk":
            break;
          case "parameterTuple": {
            let n5 = p5.value.length, l8 = [];
            if (c7 && 1 === f6.length && n5 === h8 && u6 > c7 && u6 - n5 < c7) {
              let h9 = c7 - (u6 - n5);
              l8 = hm(p5.value, h9);
            } else l8 = [p5.value];
            f6 = f6.flatMap((n6) => l8.map((l9) => [...n6, l9]));
            break;
          }
          case "parameterTupleList": {
            let n5 = p5.value.reduce((n6, l9) => n6 + l9.length, 0), l8 = [], m7 = [], g5 = 0;
            for (let y5 of p5.value) c7 && 1 === f6.length && n5 === h8 && m7.length > 0 && u6 - n5 + g5 + y5.length > c7 && (l8.push(m7), m7 = [], g5 = 0), m7.push(y5), g5 += y5.length;
            m7.length > 0 && l8.push(m7), f6 = f6.flatMap((n6) => l8.map((l9) => [...n6, l9]));
            break;
          }
        }
        return f6;
      })(n3.fragments, h7, u5) : [h7]).map((l7) => {
        if (void 0 !== u5 && l7.length > u5) throw new Oa("The query parameter limit supported by your database is exceeded.", "P2029");
        return (function(n4, l8, c7, u6) {
          let h8 = "", f6 = { placeholderNumber: 1 }, p5 = [], m7 = [];
          for (let g5 of wi(n4, c7, u6)) {
            if (h8 += dm(g5, l8, f6), "stringChunk" === g5.type) continue;
            let n5 = p5.length, c8 = p5.push(...Va(g5)) - n5;
            if ("tuple" === g5.argType.arity) {
              if (c8 % g5.argType.elements.length !== 0) throw new Error(`Malformed query template. Expected the number of parameters to match the tuple arity, but got ${c8} parameters for a tuple of arity ${g5.argType.elements.length}.`);
              for (let n6 = 0; n6 < c8 / g5.argType.elements.length; n6++) m7.push(...g5.argType.elements);
            } else for (let n6 = 0; n6 < c8; n6++) m7.push(g5.argType);
          }
          return { sql: h8, args: p5, argTypes: m7 };
        })(n3.fragments, n3.placeholderFormat, l7, n3.argTypes);
      });
    default:
      D2(n3.type, "Invalid query type");
  }
}
function ue2(n3, l6, c6) {
  for (; gm(n3); ) if (gi(n3)) {
    let c7 = l6[n3.prisma__value.name];
    if (void 0 === c7) throw new Error(`Missing value for query variable ${n3.prisma__value.name}`);
    n3 = c7;
  } else if (yi(n3)) {
    let { name: u5, args: h7 } = n3.prisma__value, f6 = c6[u5];
    if (!f6) throw new Error(`Encountered an unknown generator '${u5}'`);
    n3 = f6.generate(...h7.map((n4) => ue2(n4, l6, c6)));
  } else D2(0, `Unexpected unevaluated value type: ${n3}`);
  return Array.isArray(n3) && (n3 = n3.map((n4) => ue2(n4, l6, c6))), n3;
}
function dm(n3, l6, c6) {
  let u5 = n3.type;
  switch (u5) {
    case "parameter":
      return hi(l6, c6.placeholderNumber++);
    case "stringChunk":
      return n3.chunk;
    case "parameterTuple":
      return `(${0 == n3.value.length ? "NULL" : n3.value.map(() => hi(l6, c6.placeholderNumber++)).join(",")})`;
    case "parameterTupleList":
      return n3.value.map((u6) => {
        let h7 = u6.map(() => hi(l6, c6.placeholderNumber++)).join(n3.itemSeparator);
        return `${n3.itemPrefix}${h7}${n3.itemSuffix}`;
      }).join(n3.groupSeparator);
    default:
      D2(0, "Invalid fragment type");
  }
}
function hi(n3, l6) {
  return n3.hasNumbering ? `${n3.prefix}${l6}` : n3.prefix;
}
function fm(n3, l6, c6) {
  return { sql: n3, args: l6, argTypes: c6 };
}
function gm(n3) {
  return gi(n3) || yi(n3);
}
function* wi(n3, l6, c6) {
  let u5 = 0;
  for (let h7 of n3) switch (h7.type) {
    case "parameter":
      if (u5 >= l6.length) throw new Error(`Malformed query template. Fragments attempt to read over ${l6.length} parameters.`);
      yield { ...h7, value: l6[u5], argType: c6?.[u5] }, u5++;
      break;
    case "stringChunk":
      yield h7;
      break;
    case "parameterTuple": {
      if (u5 >= l6.length) throw new Error(`Malformed query template. Fragments attempt to read over ${l6.length} parameters.`);
      let n4 = l6[u5];
      yield { ...h7, value: Array.isArray(n4) ? n4 : [n4], argType: c6?.[u5] }, u5++;
      break;
    }
    case "parameterTupleList": {
      if (u5 >= l6.length) throw new Error(`Malformed query template. Fragments attempt to read over ${l6.length} parameters.`);
      let n4 = l6[u5];
      if (!Array.isArray(n4)) throw new Error("Malformed query template. Tuple list expected.");
      if (0 === n4.length) throw new Error("Malformed query template. Tuple list cannot be empty.");
      for (let l7 of n4) if (!Array.isArray(l7)) throw new Error("Malformed query template. Tuple expected.");
      yield { ...h7, value: n4, argType: c6?.[u5] }, u5++;
      break;
    }
  }
}
function* Va(n3) {
  switch (n3.type) {
    case "parameter":
      yield n3.value;
      break;
    case "stringChunk":
      break;
    case "parameterTuple":
      yield* n3.value;
      break;
    case "parameterTupleList":
      for (let l6 of n3.value) yield* l6;
  }
}
function hm(n3, l6) {
  let c6 = [];
  for (let u5 = 0; u5 < n3.length; u5 += l6) c6.push(n3.slice(u5, u5 + l6));
  return c6;
}
function Ba(n3) {
  return n3.rows.map((l6) => l6.reduce((l7, c6, u5) => (l7[n3.columnNames[u5]] = c6, l7), {}));
}
function ja(n3) {
  return { columns: n3.columnNames, types: n3.columnTypes.map((n4) => (function(n5) {
    switch (n5) {
      case Zi:
        return "int";
      case Xi:
        return "bigint";
      case es:
        return "float";
      case rs:
        return "double";
      case os:
        return "string";
      case ps:
        return "enum";
      case ms:
        return "bytes";
      case is:
        return "bool";
      case ss:
        return "char";
      case ns:
        return "decimal";
      case fs:
        return "json";
      case Ns:
        return "uuid";
      case hs:
        return "datetime";
      case ls:
        return "date";
      case cs:
        return "time";
      case Ms:
        return "int-array";
      case $s:
        return "bigint-array";
      case qs:
        return "float-array";
      case Us:
        return "double-array";
      case fa:
      case Pa:
        return "string-array";
      case Aa:
        return "bytes-array";
      case ca:
        return "bool-array";
      case ha:
        return "char-array";
      case Vs:
        return "decimal-array";
      case Ta:
        return "json-array";
      case Na:
        return "uuid-array";
      case ba:
        return "datetime-array";
      case pa:
        return "date-array";
      case wa:
        return "time-array";
      case ka:
        return "unknown";
      case ws:
        return "string";
      default:
        D2(0, `Unexpected column type: ${n5}`);
    }
  })(n4)), rows: n3.rows.map((l6) => l6.map((l7, c6) => Kt(l7, n3.columnTypes[c6]))) };
}
function Kt(n3, l6) {
  if (null === n3) return null;
  switch (l6) {
    case Zi:
      switch (typeof n3) {
        case "number":
          return Math.trunc(n3);
        case "string":
          return Math.trunc(Number(n3));
        default:
          throw new Error(`Cannot serialize value of type ${typeof n3} as Int32`);
      }
    case Ms:
      if (!Array.isArray(n3)) throw new Error(`Cannot serialize value of type ${typeof n3} as Int32Array`);
      return n3.map((n4) => Kt(n4, Zi));
    case Xi:
      switch (typeof n3) {
        case "number":
          return BigInt(Math.trunc(n3));
        case "string":
          return n3;
        default:
          throw new Error(`Cannot serialize value of type ${typeof n3} as Int64`);
      }
    case $s:
      if (!Array.isArray(n3)) throw new Error(`Cannot serialize value of type ${typeof n3} as Int64Array`);
      return n3.map((n4) => Kt(n4, Xi));
    case fs:
      if ("string" == typeof n3) return JSON.parse(n3);
      throw new Error(`Cannot serialize value of type ${typeof n3} as Json`);
    case Ta:
      if (!Array.isArray(n3)) throw new Error(`Cannot serialize value of type ${typeof n3} as JsonArray`);
      return n3.map((n4) => Kt(n4, fs));
    case is:
      switch (typeof n3) {
        case "boolean":
          return n3;
        case "string":
          return "true" === n3 || "1" === n3;
        case "number":
          return 1 === n3;
        default:
          throw new Error(`Cannot serialize value of type ${typeof n3} as Boolean`);
      }
    case ca:
      if (!Array.isArray(n3)) throw new Error(`Cannot serialize value of type ${typeof n3} as BooleanArray`);
      return n3.map((n4) => Kt(n4, is));
    default:
      return n3;
  }
}
function Qa(n3, l6, c6) {
  if (!l6.every((l7) => xi(n3, l7))) {
    let l7 = (function(n4, l8) {
      switch (l8.error_identifier) {
        case "RELATION_VIOLATION":
          return `The change you are trying to make would violate the required relation '${l8.context.relation}' between the \`${l8.context.modelA}\` and \`${l8.context.modelB}\` models.`;
        case "MISSING_RECORD":
          return `An operation failed because it depends on one or more records that were required but not found. No record was found for ${l8.context.operation}.`;
        case "MISSING_RELATED_RECORD": {
          let n5 = l8.context.neededFor ? ` (needed to ${l8.context.neededFor})` : "";
          return `An operation failed because it depends on one or more records that were required but not found. No '${l8.context.model}' record${n5} was found for ${l8.context.operation} on ${l8.context.relationType} relation '${l8.context.relation}'.`;
        }
        case "INCOMPLETE_CONNECT_INPUT":
          return `An operation failed because it depends on one or more records that were required but not found. Expected ${l8.context.expectedRows} records to be connected, found only ${Array.isArray(n4) ? n4.length : n4}.`;
        case "INCOMPLETE_CONNECT_OUTPUT":
          return `The required connected records were not found. Expected ${l8.context.expectedRows} records to be connected after connect operation on ${l8.context.relationType} relation '${l8.context.relation}', found ${Array.isArray(n4) ? n4.length : n4}.`;
        case "RECORDS_NOT_CONNECTED":
          return `The records for relation \`${l8.context.relation}\` between the \`${l8.context.parent}\` and \`${l8.context.child}\` models are not connected.`;
        default:
          D2(0, `Unknown error identifier: ${l8}`);
      }
    })(n3, c6), u5 = (function(n4) {
      switch (n4.error_identifier) {
        case "RELATION_VIOLATION":
          return "P2014";
        case "RECORDS_NOT_CONNECTED":
          return "P2017";
        case "INCOMPLETE_CONNECT_OUTPUT":
          return "P2018";
        case "MISSING_RECORD":
        case "MISSING_RELATED_RECORD":
        case "INCOMPLETE_CONNECT_INPUT":
          return "P2025";
        default:
          D2(0, `Unknown error identifier: ${n4}`);
      }
    })(c6);
    throw new Oa(l7, u5, c6.context);
  }
}
function xi(n3, l6) {
  switch (l6.type) {
    case "rowCountEq":
      return Array.isArray(n3) ? n3.length === l6.args : null === n3 ? 0 === l6.args : 1 === l6.args;
    case "rowCountNeq":
      return Array.isArray(n3) ? n3.length !== l6.args : null === n3 ? 0 !== l6.args : 1 !== l6.args;
    case "affectedRowCountEq":
      return n3 === l6.args;
    case "never":
      return false;
    default:
      D2(0, `Unknown rule type: ${l6.type}`);
  }
}
function Ha(n3) {
  return Array.isArray(n3) ? 0 === n3.length : null == n3;
}
function Ei(n3) {
  return Array.isArray(n3) ? n3 : [n3];
}
function be2(n3) {
  if ("number" == typeof n3) return n3;
  if ("string" == typeof n3) return Number(n3);
  throw new Error("Expected number, got " + typeof n3);
}
function Yr(n3) {
  if ("object" == typeof n3 && null !== n3) return n3;
  throw new Error("Expected object, got " + typeof n3);
}
function Wa(n3, l6) {
  return Array.isArray(n3) ? n3.map((n4) => Wa(n4, l6)) : "object" == typeof n3 && null !== n3 ? n3[l6] ?? null : n3;
}
function Em(n3, l6) {
  for (let { joinExpr: c6, childRecords: u5 } of l6) {
    let l7 = c6.on.map(([n4]) => n4), h7 = c6.on.map(([, n4]) => n4), f6 = {};
    for (let u6 of Array.isArray(n3) ? n3 : [n3]) {
      let n4 = Yr(u6), h8 = ht(n4, l7);
      f6[h8] || (f6[h8] = []), f6[h8].push(n4), c6.isRelationUnique ? n4[c6.parentField] = null : n4[c6.parentField] = [];
    }
    for (let n4 of Array.isArray(u5) ? u5 : [u5]) {
      if (null === n4) continue;
      let l8 = ht(Yr(n4), h7);
      for (let u6 of f6[l8] ?? []) c6.isRelationUnique ? u6[c6.parentField] = n4 : u6[c6.parentField].push(n4);
    }
  }
  return n3;
}
function Tm(n3, l6, c6, u5) {
  switch (n3.type) {
    case "value":
      return ue2(n3.value, c6, u5);
    case "lastInsertId":
      return l6;
    default:
      D2(0, `Unexpected field initializer type: ${n3.type}`);
  }
}
function Pm(n3, l6, c6, u5) {
  switch (n3.type) {
    case "set":
      return ue2(n3.value, c6, u5);
    case "add":
      return be2(l6) + be2(ue2(n3.value, c6, u5));
    case "subtract":
      return be2(l6) - be2(ue2(n3.value, c6, u5));
    case "multiply":
      return be2(l6) * be2(ue2(n3.value, c6, u5));
    case "divide": {
      let h7 = be2(l6), f6 = be2(ue2(n3.value, c6, u5));
      return 0 === f6 ? null : h7 / f6;
    }
    default:
      D2(0, `Unexpected field operation type: ${n3.type}`);
  }
}
function Ja(n3, l6) {
  if (!l6 || 0 === l6.plugins.length) return n3;
  let c6 = _s(l6.plugins, { query: l6.queryInfo, sql: n3.sql });
  return c6 ? { ...n3, sql: Fs(n3.sql, c6) } : n3;
}
async function Ga() {
  return (await (async function() {
    return globalThis.crypto ?? await Promise.resolve().then(() => (sr(), Xt));
  })()).randomUUID();
}
async function Ka(n3, l6) {
  return new Promise((c6) => {
    n3.addEventListener(l6, c6, { once: true });
  });
}
function za(n3, l6) {
  return void 0 !== l6 ? setTimeout(n3, l6) : void 0;
}
function Xa(n3) {
  let l6;
  try {
    l6 = JSON.parse(n3);
  } catch (n4) {
    throw new Error(`Received invalid serialized parameters: ${n4.message}`);
  }
  if (!Array.isArray(l6)) throw new Error("Received invalid serialized parameters: expected an array");
  let c6 = l6.map((n4) => el(n4)), u5 = l6.map((n4) => (function(n5) {
    return Array.isArray(n5) ? { scalarType: n5.length > 0 ? Ya(n5[0]) : "unknown", arity: "list" } : { scalarType: Ya(n5), arity: "scalar" };
  })(n4));
  return { args: c6, argTypes: u5 };
}
function el(n3) {
  if (Array.isArray(n3)) return n3.map((n4) => el(n4));
  if ("object" == typeof n3 && null !== n3 && "prisma__value" in n3) {
    if (!("prisma__type" in n3)) throw new Error("Invalid serialized parameter, prisma__type should be present when prisma__value is present");
    return `${n3.prisma__value}`;
  }
  return "object" == typeof n3 && null !== n3 ? JSON.stringify(n3) : n3;
}
function Ya(n3) {
  return "object" == typeof n3 && null !== n3 && "prisma__type" in n3 && "string" == typeof n3.prisma__type && n3.prisma__type in rl ? rl[n3.prisma__type] : "number" == typeof n3 ? "decimal" : "string" == typeof n3 ? "string" : "unknown";
}
function sl({ version: n3, binaryTarget: l6, title: c6, description: u5, engineVersion: h7, database: f6, query: p5 }) {
  let m7 = (function(n4 = 7500) {
    let l7 = cn.map(([n5, ...l8]) => `${n5} ${l8.map((n6) => "string" == typeof n6 ? n6 : JSON.stringify(n6)).join(" ")}`).join("\n");
    return l7.length < n4 ? l7 : l7.slice(-n4);
  })(6e3 - (p5?.length ?? 0)), g5 = (function(n4) {
    return n4.split("\n").map((n5) => n5.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join("\n");
  })(Ye(m7)), y5 = u5 ? `# Description
\`\`\`
${u5}
\`\`\`` : "", w5 = (function({ title: n4, user: l7 = "prisma", repo: c7 = "prisma", template: u6 = "bug_report.yml", body: h8 }) {
    return (0, nl.default)({ user: l7, repo: c7, template: u6, title: n4, body: h8 });
  })({ title: c6, body: Ye(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${lt.version?.padEnd(19)}| 
| OS              | ${l6?.padEnd(19)}|
| Prisma Client   | ${n3?.padEnd(19)}|
| Query Engine    | ${h7?.padEnd(19)}|
| Database        | ${f6?.padEnd(19)}|

${y5}

## Logs
\`\`\`
${g5}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${p5 ? (function(n4) {
    return n4 ? n4.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (n5) => `${n5[0]}5`) : "";
  })(p5) : ""}
\`\`\`
`) });
  return `${c6}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${en(w5)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
}
function al(n3, l6, c6) {
  let u5 = {}, h7 = u5.encode || encodeURIComponent;
  if ("function" != typeof h7) throw new TypeError("option encode is invalid");
  if (!ol.test(n3)) throw new TypeError("argument name is invalid");
  let f6 = h7(l6);
  if (f6 && !ol.test(f6)) throw new TypeError("argument val is invalid");
  let p5 = n3 + "=" + f6;
  if (void 0 !== u5.maxAge && null !== u5.maxAge) {
    let n4 = u5.maxAge - 0;
    if (Number.isNaN(n4) || !Number.isFinite(n4)) throw new TypeError("option maxAge is invalid");
    p5 += "; Max-Age=" + Math.floor(n4);
  }
  if (u5.domain) {
    if (!ol.test(u5.domain)) throw new TypeError("option domain is invalid");
    p5 += "; Domain=" + u5.domain;
  }
  if (u5.path) {
    if (!ol.test(u5.path)) throw new TypeError("option path is invalid");
    p5 += "; Path=" + u5.path;
  }
  if (u5.expires) {
    if (!(function(n4) {
      return "[object Date]" === Object.prototype.toString.call(n4) || n4 instanceof Date;
    })(u5.expires) || Number.isNaN(u5.expires.valueOf())) throw new TypeError("option expires is invalid");
    p5 += "; Expires=" + u5.expires.toUTCString();
  }
  if (u5.httpOnly && (p5 += "; HttpOnly"), u5.secure && (p5 += "; Secure"), u5.priority) switch ("string" == typeof u5.priority ? u5.priority.toLowerCase() : u5.priority) {
    case "low":
      p5 += "; Priority=Low";
      break;
    case "medium":
      p5 += "; Priority=Medium";
      break;
    case "high":
      p5 += "; Priority=High";
      break;
    default:
      throw new TypeError("option priority is invalid");
  }
  if (u5.sameSite) switch ("string" == typeof u5.sameSite ? u5.sameSite.toLowerCase() : u5.sameSite) {
    case true:
      p5 += "; SameSite=Strict";
      break;
    case "lax":
      p5 += "; SameSite=Lax";
      break;
    case "strict":
      p5 += "; SameSite=Strict";
      break;
    case "none":
      p5 += "; SameSite=None";
      break;
    default:
      throw new TypeError("option sameSite is invalid");
  }
  return u5.partitioned && (p5 += "; Partitioned"), p5;
}
function ll(n3, l6) {
  let c6 = (n3 || "").split(";").filter((n4) => "string" == typeof n4 && !!n4.trim()), u5 = (function(n4) {
    let l7 = "", c7 = "", u6 = n4.split("=");
    return u6.length > 1 ? (l7 = u6.shift(), c7 = u6.join("=")) : c7 = n4, { name: l7, value: c7 };
  })(c6.shift() || ""), h7 = u5.name, f6 = u5.value;
  try {
    f6 = false === l6?.decode ? f6 : (l6?.decode || decodeURIComponent)(f6);
  } catch {
  }
  let p5 = { name: h7, value: f6 };
  for (let n4 of c6) {
    let l7 = n4.split("="), c7 = (l7.shift() || "").trimStart().toLowerCase(), u6 = l7.join("=");
    switch (c7) {
      case "expires":
        p5.expires = new Date(u6);
        break;
      case "max-age":
        p5.maxAge = Number.parseInt(u6, 10);
        break;
      case "secure":
        p5.secure = true;
        break;
      case "httponly":
        p5.httpOnly = true;
        break;
      case "samesite":
        p5.sameSite = u6;
        break;
      default:
        p5[c7] = u6;
    }
  }
  return p5;
}
function Ti(n3) {
  return new Date((function(n4) {
    return 1e3 * n4[0] + n4[1] / 1e6;
  })(n3));
}
function yl(n3, l6, c6) {
  return sl({ binaryTarget: void 0, title: l6, version: n3.config.clientVersion, engineVersion: "unknown", database: n3.config.activeProvider, query: c6 });
}
function hl(n3) {
  return "queryRaw" === n3.action || "executeRaw" === n3.action;
}
function wl(n3) {
  let l6 = n3.query.arguments.query, { args: c6, argTypes: u5 } = Xa(n3.query.arguments.parameters);
  return { type: "queryRaw" === n3.action ? "query" : "execute", args: { type: "rawSql", sql: l6, args: c6, argTypes: u5 } };
}
function xt(n3) {
  try {
    return Pl(n3, "fast");
  } catch {
    return Pl(n3, "slow");
  }
}
function Pl(n3, l6) {
  return JSON.stringify(n3.map((n4) => vl(n4, l6)));
}
function vl(n3, l6) {
  if (Array.isArray(n3)) return n3.map((n4) => vl(n4, l6));
  if ("bigint" == typeof n3) return { prisma__type: "bigint", prisma__value: n3.toString() };
  if (Xe(n3)) return { prisma__type: "date", prisma__value: n3.toJSON() };
  if (Le.isDecimal(n3)) return { prisma__type: "decimal", prisma__value: n3.toJSON() };
  if (nt.isBuffer(n3)) return { prisma__type: "bytes", prisma__value: n3.toString("base64") };
  if ((function(n4) {
    return n4 instanceof ArrayBuffer || n4 instanceof SharedArrayBuffer || "object" == typeof n4 && null !== n4 && ("ArrayBuffer" === n4[Symbol.toStringTag] || "SharedArrayBuffer" === n4[Symbol.toStringTag]);
  })(n3)) return { prisma__type: "bytes", prisma__value: nt.from(n3).toString("base64") };
  if (ArrayBuffer.isView(n3)) {
    let { buffer: l7, byteOffset: c6, byteLength: u5 } = n3;
    return { prisma__type: "bytes", prisma__value: nt.from(l7, c6, u5).toString("base64") };
  }
  return "object" == typeof n3 && "slow" === l6 ? Cl(n3) : n3;
}
function Cl(n3) {
  if ("object" != typeof n3 || null === n3) return n3;
  if ("function" == typeof n3.toJSON) return n3.toJSON();
  if (Array.isArray(n3)) return n3.map(Al);
  let l6 = {};
  for (let c6 of Object.keys(n3)) l6[c6] = Al(n3[c6]);
  return l6;
}
function Al(n3) {
  return "bigint" == typeof n3 ? n3.toString() : Cl(n3);
}
function Si(n3, l6, c6, u5) {
  if (("postgresql" === n3 || "cockroachdb" === n3) && c6.length > 0 && kl.exec(l6)) throw new Error(`Running ALTER using ${u5} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
}
function Ii(n3) {
  return function(l6, c6) {
    let u5, o4 = /* @__PURE__ */ __name((c7 = n3) => {
      try {
        return void 0 === c7 || "itx" === c7?.kind ? u5 ??= Ol(l6(c7)) : Ol(l6(c7));
      } catch (n4) {
        return Promise.reject(n4);
      }
    }, "o");
    return { get spec() {
      return c6;
    }, then: /* @__PURE__ */ __name((n4, l7) => o4().then(n4, l7), "then"), catch: /* @__PURE__ */ __name((n4) => o4().catch(n4), "catch"), finally: /* @__PURE__ */ __name((n4) => o4().finally(n4), "finally"), requestTransaction(n4) {
      let l7 = o4(n4);
      return l7.requestTransaction ? l7.requestTransaction(n4) : l7;
    }, [Symbol.toStringTag]: "PrismaPromise" };
  };
}
function Ol(n3) {
  return "function" == typeof n3.then ? n3 : Promise.resolve(n3);
}
function _l(n3) {
  return "string" == typeof n3 ? n3 : n3.reduce((n4, l6) => {
    let c6 = "string" == typeof l6 ? l6 : l6.level;
    return "query" === c6 ? n4 : !n4 || "info" !== l6 && "info" !== n4 ? c6 : "info";
  }, void 0);
}
function ki(n3) {
  return `(${Object.keys(n3).sort().map((l6) => {
    let c6 = n3[l6];
    return "object" == typeof c6 && null !== c6 ? `(${l6} ${ki(c6)})` : l6;
  }).join(" ")})`;
}
function Mi(n3) {
  return Ql[n3];
}
function Je(n3, l6) {
  if (null === l6) return l6;
  switch (n3) {
    case "bigint":
      return BigInt(l6);
    case "bytes": {
      let { buffer: n4, byteOffset: c6, byteLength: u5 } = nt.from(l6, "base64");
      return new Uint8Array(n4, c6, u5);
    }
    case "decimal":
      return new Le(l6);
    case "datetime":
    case "date":
      return new Date(l6);
    case "time":
      return /* @__PURE__ */ new Date(`1970-01-01T${l6}Z`);
    case "bigint-array":
      return l6.map((n4) => Je("bigint", n4));
    case "bytes-array":
      return l6.map((n4) => Je("bytes", n4));
    case "decimal-array":
      return l6.map((n4) => Je("decimal", n4));
    case "datetime-array":
      return l6.map((n4) => Je("datetime", n4));
    case "date-array":
      return l6.map((n4) => Je("date", n4));
    case "time-array":
      return l6.map((n4) => Je("time", n4));
    default:
      return l6;
  }
}
function Zm(n3) {
  if (n3) {
    if ("batch" === n3.kind) return { kind: "batch", options: { isolationLevel: n3.isolationLevel } };
    if ("itx" === n3.kind) return { kind: "itx", options: Ul(n3) };
    Te(0, "Unknown transaction kind");
  }
}
function Ul(n3) {
  return { id: n3.id, payload: n3.payload };
}
function $l(n3) {
  if ("Union" === n3.kind) return { kind: "Union", errors: n3.errors.map($l) };
  if (Array.isArray(n3.selectionPath)) {
    let [, ...l6] = n3.selectionPath;
    return { ...n3, selectionPath: l6 };
  }
  return n3;
}
function Hl(n3, l6) {
  for (let [c6, u5] of Object.entries(n3)) {
    if (!Xl.includes(c6)) {
      let n4 = rr(c6, Xl);
      throw new Zl(`Unknown property ${c6} provided to PrismaClient constructor.${n4}`);
    }
    rc[c6](u5, l6);
  }
  !(function(n4) {
    let l7 = void 0 !== n4.adapter, c6 = void 0 !== n4.accelerateUrl;
    if (l7 && c6) throw new Zl('The "adapter" and "accelerateUrl" options are mutually exclusive. Please provide only one of them.');
    if (!l7 && !c6) throw new Zl('Using engine type "client" requires either "adapter" or "accelerateUrl" to be provided to PrismaClient constructor.');
  })(n3);
}
function rr(n3, l6) {
  if (0 === l6.length || "string" != typeof n3) return "";
  let c6 = (function(n4, l7) {
    if (0 === l7.length) return null;
    let c7 = l7.map((l8) => ({ value: l8, distance: (0, Yl.default)(n4, l8) }));
    c7.sort((n5, l8) => n5.distance < l8.distance ? -1 : 1);
    let u5 = c7[0];
    return u5.distance < 3 ? u5.value : null;
  })(n3, l6);
  return c6 ? ` Did you mean "${c6}"?` : "";
}
function nd(n3, l6) {
  return jl(l6.models, n3) ?? jl(l6.types, n3);
}
function jl(n3, l6) {
  let c6 = Object.keys(n3).find((n4) => Ce(n4) === l6);
  if (c6) return n3[c6];
}
function cd(n3) {
  class t8 {
    static {
      __name(this, "t");
    }
    _originalClient = this;
    _runtimeDataModel;
    _requestHandler;
    _connectionPromise;
    _disconnectionPromise;
    _engineConfig;
    _accelerateEngineConfig;
    _clientVersion;
    _errorFormat;
    _tracingHelper;
    _previewFeatures;
    _activeProvider;
    _globalOmit;
    _extensions;
    _engine;
    _appliedParent;
    _createPrismaPromise = Ii();
    constructor(l6) {
      if (!l6) throw new x2("`PrismaClient` needs to be constructed with a non-empty, valid `PrismaClientOptions`:\n\n```\nnew PrismaClient({\n  ...\n})\n```\n\nor\n\n```\nconstructor() {\n  super({ ... });\n}\n```\n          ", Kl);
      n3 = l6.__internal?.configOverride?.(n3) ?? n3, Hl(l6, n3);
      let c6, u5 = new ir().on("error", () => {
      });
      if (this._extensions = oi.empty(), this._previewFeatures = n3.previewFeatures, this._clientVersion = n3.clientVersion ?? Kl, this._activeProvider = n3.activeProvider, this._globalOmit = l6?.omit, this._tracingHelper = new Vl(), l6.adapter) {
        c6 = l6.adapter;
        let u6 = "postgresql" === n3.activeProvider || "cockroachdb" === n3.activeProvider ? "postgres" : n3.activeProvider;
        if (c6.provider !== u6) throw new x2(`The Driver Adapter \`${c6.adapterName}\`, based on \`${c6.provider}\`, is not compatible with the provider \`${u6}\` specified in the Prisma schema.`, this._clientVersion);
      }
      try {
        let h7 = l6 ?? {}, f6 = true === (h7.__internal ?? {}).debug;
        if (f6 && pn.enable("prisma:client"), h7.errorFormat ? this._errorFormat = h7.errorFormat : "production" === lt.env.NODE_ENV ? this._errorFormat = "minimal" : (lt.env.NO_COLOR, this._errorFormat = "colorless"), this._runtimeDataModel = n3.runtimeDataModel, this._engineConfig = { enableDebugLogs: f6, logLevel: h7.log && _l(h7.log), logQueries: h7.log && !!("string" == typeof h7.log ? "query" === h7.log : h7.log.find((n4) => "string" == typeof n4 ? "query" === n4 : "query" === n4.level)), compilerWasm: n3.compilerWasm, clientVersion: n3.clientVersion, previewFeatures: this._previewFeatures, activeProvider: n3.activeProvider, inlineSchema: n3.inlineSchema, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: h7.transactionOptions?.maxWait ?? 2e3, timeout: h7.transactionOptions?.timeout ?? 5e3, isolationLevel: h7.transactionOptions?.isolationLevel }, logEmitter: u5, adapter: c6, accelerateUrl: h7.accelerateUrl, sqlCommenters: h7.comments }, this._accelerateEngineConfig = Object.create(this._engineConfig), this._accelerateEngineConfig.accelerateUtils = { resolveDatasourceUrl: /* @__PURE__ */ __name(() => {
          if (h7.accelerateUrl) return h7.accelerateUrl;
          throw new x2('`accelerateUrl` is required when using `@prisma/extension-accelerate`:\n\nnew PrismaClient({\n  accelerateUrl: "prisma://...",\n}).$extends(withAccelerate())\n', n3.clientVersion);
        }, "resolveDatasourceUrl") }, nc("clientVersion", n3.clientVersion), this._engine = (function(n4) {
          return new Nl(n4);
        })(this._engineConfig), this._requestHandler = new Gl(this, u5), h7.log) for (let n4 of h7.log) {
          let l7 = "string" == typeof n4 ? n4 : "stdout" === n4.emit ? n4.level : null;
          l7 && this.$on(l7, (n5) => {
            gn.log(`${gn.tags[l7] ?? ""}`, n5.message || n5.query);
          });
        }
      } catch (n4) {
        throw n4.clientVersion = this._clientVersion, n4;
      }
      return this._appliedParent = $t(this);
    }
    get [Symbol.toStringTag]() {
      return "PrismaClient";
    }
    $on(n4, l6) {
      return "beforeExit" === n4 ? this._engine.onBeforeExit(l6) : n4 && this._engineConfig.logEmitter.on(n4, l6), this;
    }
    $connect() {
      try {
        return this._engine.start();
      } catch (n4) {
        throw n4.clientVersion = this._clientVersion, n4;
      }
    }
    async $disconnect() {
      try {
        await this._engine.stop();
      } catch (n4) {
        throw n4.clientVersion = this._clientVersion, n4;
      } finally {
        cn.length = 0;
      }
    }
    $executeRawInternal(n4, l6, c6, u5) {
      let h7 = this._activeProvider;
      return this._request({ action: "executeRaw", args: c6, transaction: n4, clientMethod: l6, argsMapper: Ri({ clientMethod: l6, activeProvider: h7 }), callsite: Re(this._errorFormat), dataPath: [], middlewareArgsMapper: u5 });
    }
    $executeRaw(n4, ...l6) {
      return this._createPrismaPromise((c6) => {
        if (void 0 !== n4.raw || void 0 !== n4.sql) {
          let [u5, h7] = Wl(n4, l6);
          return Si(this._activeProvider, u5.text, u5.values, Array.isArray(n4) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(c6, "$executeRaw", u5, h7);
        }
        throw new C2("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
      });
    }
    $executeRawUnsafe(n4, ...l6) {
      return this._createPrismaPromise((c6) => (Si(this._activeProvider, n4, l6, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(c6, "$executeRawUnsafe", [n4, ...l6])));
    }
    $runCommandRaw(l6) {
      if ("mongodb" !== n3.activeProvider) throw new C2(`The ${n3.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
      return this._createPrismaPromise((n4) => this._request({ args: l6, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: El, callsite: Re(this._errorFormat), transaction: n4 }));
    }
    async $queryRawInternal(n4, l6, c6, u5) {
      let h7 = this._activeProvider;
      return this._request({ action: "queryRaw", args: c6, transaction: n4, clientMethod: l6, argsMapper: Ri({ clientMethod: l6, activeProvider: h7 }), callsite: Re(this._errorFormat), dataPath: [], middlewareArgsMapper: u5 });
    }
    $queryRaw(n4, ...l6) {
      return this._createPrismaPromise((c6) => {
        if (void 0 !== n4.raw || void 0 !== n4.sql) return this.$queryRawInternal(c6, "$queryRaw", ...Wl(n4, l6));
        throw new C2("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
      });
    }
    $queryRawTyped(n4) {
      return this._createPrismaPromise((l6) => {
        if (!this._hasPreviewFlag("typedSql")) throw new C2("`typedSql` preview feature must be enabled in order to access $queryRawTyped API", { clientVersion: this._clientVersion });
        return this.$queryRawInternal(l6, "$queryRawTyped", n4);
      });
    }
    $queryRawUnsafe(n4, ...l6) {
      return this._createPrismaPromise((c6) => this.$queryRawInternal(c6, "$queryRawUnsafe", [n4, ...l6]));
    }
    _transactionWithArray({ promises: n4, options: l6 }) {
      let c6 = oc.nextId(), u5 = (function(n5, l7 = () => {
      }) {
        let c7, u6 = new Promise((n6) => c7 = n6);
        return { then: /* @__PURE__ */ __name((h8) => (0 === --n5 && c7(l7()), h8?.(u6)), "then") };
      })(n4.length), h7 = n4.map((n5, h8) => {
        if ("PrismaPromise" !== n5?.[Symbol.toStringTag]) throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
        let f6 = l6?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel, p5 = { kind: "batch", id: c6, index: h8, isolationLevel: f6, lock: u5 };
        return n5.requestTransaction?.(p5) ?? n5;
      });
      return (function(n5) {
        return 0 === n5.length ? Promise.resolve([]) : new Promise((l7, c7) => {
          let u6 = new Array(n5.length), h8 = null, f6 = false, p5 = 0, a6 = /* @__PURE__ */ __name(() => {
            f6 || (p5++, p5 === n5.length && (f6 = true, h8 ? c7(h8) : l7(u6)));
          }, "a"), d4 = /* @__PURE__ */ __name((n6) => {
            f6 || (f6 = true, c7(n6));
          }, "d");
          for (let l8 = 0; l8 < n5.length; l8++) n5[l8].then((n6) => {
            u6[l8] = n6, a6();
          }, (n6) => {
            hasBatchIndex(n6) ? n6.batchRequestIdx === l8 ? d4(n6) : (h8 || (h8 = n6), a6()) : d4(n6);
          });
        });
      })(h7);
    }
    async _transactionWithCallback({ callback: n4, options: l6 }) {
      let c6, u5 = { traceparent: this._tracingHelper.getTraceParent() }, h7 = { maxWait: l6?.maxWait ?? this._engineConfig.transactionOptions.maxWait, timeout: l6?.timeout ?? this._engineConfig.transactionOptions.timeout, isolationLevel: l6?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel }, f6 = await this._engine.transaction("start", u5, h7);
      try {
        let l7 = { kind: "itx", ...f6 };
        c6 = await n4(this._createItxClient(l7)), await this._engine.transaction("commit", u5, f6);
      } catch (n5) {
        throw await this._engine.transaction("rollback", u5, f6).catch(() => {
        }), n5;
      }
      return c6;
    }
    _createItxClient(n4) {
      return le($t(le((function(n5) {
        return n5[Wi] ? n5[Wi] : n5;
      })(this), [Y2("_appliedParent", () => this._appliedParent._createItxClient(n4)), Y2("_createPrismaPromise", () => Ii(n4)), Y2(ac, () => n4.id)])), [ut(Gi)]);
    }
    $transaction(n4, l6) {
      let c6;
      c6 = "function" == typeof n4 ? "@prisma/adapter-d1" === this._engineConfig.adapter?.adapterName ? () => {
        throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
      } : () => this._transactionWithCallback({ callback: n4, options: l6 }) : () => this._transactionWithArray({ promises: n4, options: l6 });
      return this._tracingHelper.runInChildSpan({ name: "transaction", attributes: { method: "$transaction" } }, c6);
    }
    _request(n4) {
      n4.otelParentCtx = this._tracingHelper.getActiveContext();
      let l6 = n4.middlewareArgsMapper ?? ic, c6 = { args: l6.requestArgsToMiddlewareArgs(n4.args), dataPath: n4.dataPath, runInTransaction: !!n4.transaction, action: n4.action, model: n4.model }, u5 = { operation: { name: "operation", attributes: { method: c6.action, model: c6.model, name: c6.model ? `${c6.model}.${c6.action}` : c6.action } } }, a6 = /* @__PURE__ */ __name(async (c7) => {
        let { runInTransaction: u6, args: h7, ...f6 } = c7, p5 = { ...n4, ...f6 };
        h7 && (p5.args = l6.middlewareArgsToRequestArgs(h7)), void 0 !== n4.transaction && false === u6 && delete p5.transaction;
        let m7 = await Ts(this, p5);
        return p5.model ? ys({ result: m7, modelName: p5.model, args: p5.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel, globalOmit: this._globalOmit }) : m7;
      }, "a");
      return this._tracingHelper.runInChildSpan(u5.operation, () => a6(c6));
    }
    async _executeRequest({ args: n4, clientMethod: l6, dataPath: c6, callsite: u5, action: h7, model: f6, argsMapper: p5, transaction: m7, unpacker: g5, otelParentCtx: y5, customDataProxyFetch: w5 }) {
      try {
        n4 = p5 ? p5(n4) : n4;
        let b4 = { name: "serialize" }, v5 = this._tracingHelper.runInChildSpan(b4, () => (function({ modelName: n5, action: l7, args: c7, runtimeDataModel: u6, extensions: h8 = oi.empty(), callsite: f7, clientMethod: p6, errorFormat: m8, clientVersion: g6, previewFeatures: y6, globalOmit: w6 }) {
          let b5 = new vi({ runtimeDataModel: u6, modelName: n5, action: l7, rootArgs: c7, callsite: f7, extensions: h8, selectionPath: [], argumentPath: [], originalMethod: p6, errorFormat: m8, clientVersion: g6, previewFeatures: y6, globalOmit: w6 });
          return { modelName: n5, action: pi[l7], query: _t(c7, b5) };
        })({ modelName: f6, runtimeDataModel: this._runtimeDataModel, action: h7, args: n4, clientMethod: l6, callsite: u5, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures, globalOmit: this._globalOmit }));
        return pn.enabled("prisma:client") && (nc("Prisma Client call:"), nc(`prisma.${l6}(${(function(n5) {
          if (void 0 === n5) return "";
          let l7 = at(n5);
          return new Nn(0, { colors: On }).write(l7).toString();
        })(n4)})`), nc("Generated request:"), nc(JSON.stringify(v5, null, 2) + "\n")), "batch" === m7?.kind && await m7.lock, this._requestHandler.request({ protocolQuery: v5, modelName: f6, action: h7, clientMethod: l6, dataPath: c6, callsite: u5, args: n4, extensions: this._extensions, transaction: m7, unpacker: g5, otelParentCtx: y5, otelChildCtx: this._tracingHelper.getActiveContext(), globalOmit: this._globalOmit, customDataProxyFetch: w5 });
      } catch (n5) {
        throw n5.clientVersion = this._clientVersion, n5;
      }
    }
    _hasPreviewFlag(n4) {
      return !!this._engineConfig.previewFeatures?.includes(n4);
    }
    $extends = ds;
  }
  return t8;
}
function Wl(n3, l6) {
  return (function(n4) {
    return Array.isArray(n4) && Array.isArray(n4.raw);
  })(n3) ? [new Fe(n3, l6), Dl] : [n3, Ml];
}
function init(n3, l6) {
  let c6 = new RegExp(`\\x1b\\[${l6}m`, "g"), u5 = `\x1B[${n3}m`, h7 = `\x1B[${l6}m`;
  return function(n4) {
    return wc.enabled && null != n4 ? u5 + (~("" + n4).indexOf(h7) ? n4.replace(c6, h7 + u5) : n4) + h7 : n4;
  };
}
function getDefaultExportFromCjs(n3) {
  return n3 && n3.__esModule && Object.prototype.hasOwnProperty.call(n3, "default") ? n3.default : n3;
}
function getDefaultExportFromNamespaceIfNotNamed(n3) {
  return n3 && Object.prototype.hasOwnProperty.call(n3, "default") && 1 === Object.keys(n3).length ? n3.default : n3;
}
function requirePostgresArray() {
  if (Ku) return vd;
  Ku = 1, vd.parse = function(n3, l6) {
    return new ArrayParser(n3, l6).parse();
  };
  class ArrayParser {
    static {
      __name(this, "ArrayParser");
    }
    constructor(n3, l6) {
      this.source = n3, this.transform = l6 || identity, this.position = 0, this.entries = [], this.recorded = [], this.dimension = 0;
    }
    isEof() {
      return this.position >= this.source.length;
    }
    nextCharacter() {
      var n3 = this.source[this.position++];
      return "\\" === n3 ? { value: this.source[this.position++], escaped: true } : { value: n3, escaped: false };
    }
    record(n3) {
      this.recorded.push(n3);
    }
    newEntry(n3) {
      var l6;
      (this.recorded.length > 0 || n3) && ("NULL" !== (l6 = this.recorded.join("")) || n3 || (l6 = null), null !== l6 && (l6 = this.transform(l6)), this.entries.push(l6), this.recorded = []);
    }
    consumeDimensions() {
      if ("[" === this.source[0]) for (; !this.isEof(); ) {
        if ("=" === this.nextCharacter().value) break;
      }
    }
    parse(n3) {
      var l6, c6, u5;
      for (this.consumeDimensions(); !this.isEof(); ) if ("{" !== (l6 = this.nextCharacter()).value || u5) {
        if ("}" !== l6.value || u5) '"' !== l6.value || l6.escaped ? "," !== l6.value || u5 ? this.record(l6.value) : this.newEntry() : (u5 && this.newEntry(true), u5 = !u5);
        else if (this.dimension--, !this.dimension && (this.newEntry(), n3)) return this.entries;
      } else this.dimension++, this.dimension > 1 && (c6 = new ArrayParser(this.source.substr(this.position - 1), this.transform), this.entries.push(c6.parse(true)), this.position += c6.position - 2);
      if (0 !== this.dimension) throw new Error("array dimension not balanced");
      return this.entries;
    }
  }
  function identity(n3) {
    return n3;
  }
  __name(identity, "identity");
  return vd;
}
function requireArrayParser() {
  if (Zu) return Yu;
  Zu = 1;
  var n3 = requirePostgresArray();
  return Yu = { create: /* @__PURE__ */ __name(function(l6, c6) {
    return { parse: /* @__PURE__ */ __name(function() {
      return n3.parse(l6, c6);
    }, "parse") };
  }, "create") };
}
function requirePostgresDate() {
  if (ed) return Xu;
  ed = 1;
  var n3 = /(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/, l6 = /^(\d{1,})-(\d{2})-(\d{2})( BC)?$/, c6 = /([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/, u5 = /^-?infinity$/;
  function bcYearToNegativeYear(n4) {
    return -(n4 - 1);
  }
  __name(bcYearToNegativeYear, "bcYearToNegativeYear");
  function is0To99(n4) {
    return n4 >= 0 && n4 < 100;
  }
  __name(is0To99, "is0To99");
  return Xu = /* @__PURE__ */ __name(function(h7) {
    if (u5.test(h7)) return Number(h7.replace("i", "I"));
    var f6 = n3.exec(h7);
    if (!f6) return (function(n4) {
      var c7 = l6.exec(n4);
      if (!c7) return;
      var u6 = parseInt(c7[1], 10), h8 = !!c7[4];
      h8 && (u6 = bcYearToNegativeYear(u6));
      var f7 = parseInt(c7[2], 10) - 1, p6 = c7[3], m8 = new Date(u6, f7, p6);
      is0To99(u6) && m8.setFullYear(u6);
      return m8;
    })(h7) || null;
    var p5 = !!f6[8], m7 = parseInt(f6[1], 10);
    p5 && (m7 = bcYearToNegativeYear(m7));
    var g5, y5 = parseInt(f6[2], 10) - 1, w5 = f6[3], b4 = parseInt(f6[4], 10), v5 = parseInt(f6[5], 10), _4 = parseInt(f6[6], 10), S6 = f6[7];
    S6 = S6 ? 1e3 * parseFloat(S6) : 0;
    var E5 = (function(n4) {
      if (n4.endsWith("+00")) return 0;
      var l7 = c6.exec(n4.split(" ")[1]);
      if (!l7) return;
      var u6 = l7[1];
      if ("Z" === u6) return 0;
      var h8 = "-" === u6 ? -1 : 1, f7 = 3600 * parseInt(l7[2], 10) + 60 * parseInt(l7[3] || 0, 10) + parseInt(l7[4] || 0, 10);
      return f7 * h8 * 1e3;
    })(h7);
    return null != E5 ? (g5 = new Date(Date.UTC(m7, y5, w5, b4, v5, _4, S6)), is0To99(m7) && g5.setUTCFullYear(m7), 0 !== E5 && g5.setTime(g5.getTime() - E5)) : (g5 = new Date(m7, y5, w5, b4, v5, _4, S6), is0To99(m7) && g5.setFullYear(m7)), g5;
  }, "Xu"), Xu;
}
function requireMutable() {
  if (rd) return td;
  rd = 1, td = /* @__PURE__ */ __name(function(l6) {
    for (var c6 = 1; c6 < arguments.length; c6++) {
      var u5 = arguments[c6];
      for (var h7 in u5) n3.call(u5, h7) && (l6[h7] = u5[h7]);
    }
    return l6;
  }, "td");
  var n3 = Object.prototype.hasOwnProperty;
  return td;
}
function requirePostgresInterval() {
  if (sd) return id;
  sd = 1;
  var n3 = requireMutable();
  function PostgresInterval(l7) {
    if (!(this instanceof PostgresInterval)) return new PostgresInterval(l7);
    n3(this, (function(n4) {
      if (!n4) return {};
      var l8 = p5.exec(n4), c7 = "-" === l8[8];
      return Object.keys(m7).reduce(function(n5, u6) {
        var h8, f7, p6 = m7[u6], y5 = l8[p6];
        return y5 && (y5 = "milliseconds" === u6 ? (f7 = (h8 = y5) + "000000".slice(h8.length), parseInt(f7, 10) / 1e3) : parseInt(y5, 10)) ? (c7 && ~g5.indexOf(u6) && (y5 *= -1), n5[u6] = y5, n5) : n5;
      }, {});
    })(l7));
  }
  __name(PostgresInterval, "PostgresInterval");
  id = PostgresInterval;
  var l6 = ["seconds", "minutes", "hours", "days", "months", "years"];
  PostgresInterval.prototype.toPostgres = function() {
    var n4 = l6.filter(this.hasOwnProperty, this);
    return this.milliseconds && n4.indexOf("seconds") < 0 && n4.push("seconds"), 0 === n4.length ? "0" : n4.map(function(n5) {
      var l7 = this[n5] || 0;
      return "seconds" === n5 && this.milliseconds && (l7 = (l7 + this.milliseconds / 1e3).toFixed(6).replace(/\.?0+$/, "")), l7 + " " + n5;
    }, this).join(" ");
  };
  var c6 = { years: "Y", months: "M", days: "D", hours: "H", minutes: "M", seconds: "S" }, u5 = ["years", "months", "days"], h7 = ["hours", "minutes", "seconds"];
  PostgresInterval.prototype.toISOString = PostgresInterval.prototype.toISO = function() {
    return "P" + u5.map(buildProperty, this).join("") + "T" + h7.map(buildProperty, this).join("");
    function buildProperty(n4) {
      var l7 = this[n4] || 0;
      return "seconds" === n4 && this.milliseconds && (l7 = (l7 + this.milliseconds / 1e3).toFixed(6).replace(/0+$/, "")), l7 + c6[n4];
    }
    __name(buildProperty, "buildProperty");
  };
  var f6 = "([+-]?\\d+)", p5 = new RegExp([f6 + "\\s+years?", f6 + "\\s+mons?", f6 + "\\s+days?", "([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?"].map(function(n4) {
    return "(" + n4 + ")?";
  }).join("\\s*")), m7 = { years: 2, months: 4, days: 6, hours: 9, minutes: 10, seconds: 11, milliseconds: 12 }, g5 = ["hours", "minutes", "seconds", "milliseconds"];
  return id;
}
function requirePostgresBytea() {
  if (od) return ad;
  od = 1;
  var n3 = h2.from || h2;
  return ad = /* @__PURE__ */ __name(function(l6) {
    if (/^\\x/.test(l6)) return n3(l6.substr(2), "hex");
    for (var c6 = "", u5 = 0; u5 < l6.length; ) if ("\\" !== l6[u5]) c6 += l6[u5], ++u5;
    else if (/[0-7]{3}/.test(l6.substr(u5 + 1, 3))) c6 += String.fromCharCode(parseInt(l6.substr(u5 + 1, 3), 8)), u5 += 4;
    else {
      for (var h7 = 1; u5 + h7 < l6.length && "\\" === l6[u5 + h7]; ) h7++;
      for (var f6 = 0; f6 < Math.floor(h7 / 2); ++f6) c6 += "\\";
      u5 += 2 * Math.floor(h7 / 2);
    }
    return n3(c6, "binary");
  }, "ad");
}
function requireTextParsers() {
  if (ud) return ld;
  ud = 1;
  var n3 = requirePostgresArray(), l6 = requireArrayParser(), c6 = requirePostgresDate(), u5 = requirePostgresInterval(), h7 = requirePostgresBytea();
  function allowNull(n4) {
    return function(l7) {
      return null === l7 ? l7 : n4(l7);
    };
  }
  __name(allowNull, "allowNull");
  function parseBool(n4) {
    return null === n4 ? n4 : "TRUE" === n4 || "t" === n4 || "true" === n4 || "y" === n4 || "yes" === n4 || "on" === n4 || "1" === n4;
  }
  __name(parseBool, "parseBool");
  function parseBoolArray(l7) {
    return l7 ? n3.parse(l7, parseBool) : null;
  }
  __name(parseBoolArray, "parseBoolArray");
  function parseBaseTenInt(n4) {
    return parseInt(n4, 10);
  }
  __name(parseBaseTenInt, "parseBaseTenInt");
  function parseIntegerArray(l7) {
    return l7 ? n3.parse(l7, allowNull(parseBaseTenInt)) : null;
  }
  __name(parseIntegerArray, "parseIntegerArray");
  function parseBigIntegerArray(l7) {
    return l7 ? n3.parse(l7, allowNull(function(n4) {
      return parseBigInteger(n4).trim();
    })) : null;
  }
  __name(parseBigIntegerArray, "parseBigIntegerArray");
  var parsePointArray = /* @__PURE__ */ __name(function(n4) {
    return n4 ? l6.create(n4, function(n5) {
      return null !== n5 && (n5 = parsePoint(n5)), n5;
    }).parse() : null;
  }, "parsePointArray"), parseFloatArray = /* @__PURE__ */ __name(function(n4) {
    return n4 ? l6.create(n4, function(n5) {
      return null !== n5 && (n5 = parseFloat(n5)), n5;
    }).parse() : null;
  }, "parseFloatArray"), parseStringArray = /* @__PURE__ */ __name(function(n4) {
    return n4 ? l6.create(n4).parse() : null;
  }, "parseStringArray"), parseDateArray = /* @__PURE__ */ __name(function(n4) {
    return n4 ? l6.create(n4, function(n5) {
      return null !== n5 && (n5 = c6(n5)), n5;
    }).parse() : null;
  }, "parseDateArray"), parseIntervalArray = /* @__PURE__ */ __name(function(n4) {
    return n4 ? l6.create(n4, function(n5) {
      return null !== n5 && (n5 = u5(n5)), n5;
    }).parse() : null;
  }, "parseIntervalArray"), parseByteAArray = /* @__PURE__ */ __name(function(l7) {
    return l7 ? n3.parse(l7, allowNull(h7)) : null;
  }, "parseByteAArray"), parseInteger = /* @__PURE__ */ __name(function(n4) {
    return parseInt(n4, 10);
  }, "parseInteger"), parseBigInteger = /* @__PURE__ */ __name(function(n4) {
    var l7 = String(n4);
    return /^\d+$/.test(l7) ? l7 : n4;
  }, "parseBigInteger"), parseJsonArray = /* @__PURE__ */ __name(function(l7) {
    return l7 ? n3.parse(l7, allowNull(JSON.parse)) : null;
  }, "parseJsonArray"), parsePoint = /* @__PURE__ */ __name(function(n4) {
    return "(" !== n4[0] ? null : (n4 = n4.substring(1, n4.length - 1).split(","), { x: parseFloat(n4[0]), y: parseFloat(n4[1]) });
  }, "parsePoint"), parseCircle = /* @__PURE__ */ __name(function(n4) {
    if ("<" !== n4[0] && "(" !== n4[1]) return null;
    for (var l7 = "(", c7 = "", u6 = false, h8 = 2; h8 < n4.length - 1; h8++) u6 || (l7 += n4[h8]), ")" !== n4[h8] ? u6 && "," !== n4[h8] && (c7 += n4[h8]) : u6 = true;
    var f6 = parsePoint(l7);
    return f6.radius = parseFloat(c7), f6;
  }, "parseCircle");
  return ld = { init: /* @__PURE__ */ __name(function(n4) {
    n4(20, parseBigInteger), n4(21, parseInteger), n4(23, parseInteger), n4(26, parseInteger), n4(700, parseFloat), n4(701, parseFloat), n4(16, parseBool), n4(1082, c6), n4(1114, c6), n4(1184, c6), n4(600, parsePoint), n4(651, parseStringArray), n4(718, parseCircle), n4(1e3, parseBoolArray), n4(1001, parseByteAArray), n4(1005, parseIntegerArray), n4(1007, parseIntegerArray), n4(1028, parseIntegerArray), n4(1016, parseBigIntegerArray), n4(1017, parsePointArray), n4(1021, parseFloatArray), n4(1022, parseFloatArray), n4(1231, parseFloatArray), n4(1014, parseStringArray), n4(1015, parseStringArray), n4(1008, parseStringArray), n4(1009, parseStringArray), n4(1040, parseStringArray), n4(1041, parseStringArray), n4(1115, parseDateArray), n4(1182, parseDateArray), n4(1185, parseDateArray), n4(1186, u5), n4(1187, parseIntervalArray), n4(17, h7), n4(114, JSON.parse.bind(JSON)), n4(3802, JSON.parse.bind(JSON)), n4(199, parseJsonArray), n4(3807, parseJsonArray), n4(3907, parseStringArray), n4(2951, parseStringArray), n4(791, parseStringArray), n4(1183, parseStringArray), n4(1270, parseStringArray);
  }, "init") };
}
function requirePgInt8() {
  if (hd) return dd;
  hd = 1;
  var n3 = 1e6;
  return dd = /* @__PURE__ */ __name(function(l6) {
    var c6 = l6.readInt32BE(0), u5 = l6.readUInt32BE(4), h7 = "";
    c6 < 0 && (c6 = ~c6 + (0 === u5), u5 = 1 + ~u5 >>> 0, h7 = "-");
    var f6, p5, m7, g5, y5, w5, b4 = "";
    if (f6 = c6 % n3, c6 = c6 / n3 >>> 0, m7 = "" + ((p5 = 4294967296 * f6 + u5) - n3 * (u5 = p5 / n3 >>> 0)), 0 === u5 && 0 === c6) return h7 + m7 + b4;
    for (g5 = "", y5 = 6 - m7.length, w5 = 0; w5 < y5; w5++) g5 += "0";
    if (b4 = g5 + m7 + b4, f6 = c6 % n3, c6 = c6 / n3 >>> 0, m7 = "" + ((p5 = 4294967296 * f6 + u5) - n3 * (u5 = p5 / n3 >>> 0)), 0 === u5 && 0 === c6) return h7 + m7 + b4;
    for (g5 = "", y5 = 6 - m7.length, w5 = 0; w5 < y5; w5++) g5 += "0";
    if (b4 = g5 + m7 + b4, f6 = c6 % n3, c6 = c6 / n3 >>> 0, m7 = "" + ((p5 = 4294967296 * f6 + u5) - n3 * (u5 = p5 / n3 >>> 0)), 0 === u5 && 0 === c6) return h7 + m7 + b4;
    for (g5 = "", y5 = 6 - m7.length, w5 = 0; w5 < y5; w5++) g5 += "0";
    return b4 = g5 + m7 + b4, h7 + (m7 = "" + (p5 = 4294967296 * (f6 = c6 % n3) + u5) % n3) + b4;
  }, "dd"), dd;
}
function requireBinaryParsers() {
  if (pd) return fd;
  pd = 1;
  var n3 = requirePgInt8(), parseBits = /* @__PURE__ */ __name(function(n4, l6, c6, u5, h7) {
    u5 = u5 || false, h7 = h7 || function(n5, l7, c7) {
      return n5 * Math.pow(2, c7) + l7;
    };
    var f6 = (c6 = c6 || 0) >> 3, inv = /* @__PURE__ */ __name(function(n5) {
      return u5 ? 255 & ~n5 : n5;
    }, "inv"), p5 = 255, m7 = 8 - c6 % 8;
    l6 < m7 && (p5 = 255 << 8 - l6 & 255, m7 = l6), c6 && (p5 >>= c6 % 8);
    var g5 = 0;
    c6 % 8 + l6 >= 8 && (g5 = h7(0, inv(n4[f6]) & p5, m7));
    for (var y5 = l6 + c6 >> 3, w5 = f6 + 1; w5 < y5; w5++) g5 = h7(g5, inv(n4[w5]), 8);
    var b4 = (l6 + c6) % 8;
    return b4 > 0 && (g5 = h7(g5, inv(n4[y5]) >> 8 - b4, b4)), g5;
  }, "parseBits"), parseFloatFromBits = /* @__PURE__ */ __name(function(n4, l6, c6) {
    var u5 = Math.pow(2, c6 - 1) - 1, h7 = parseBits(n4, 1), f6 = parseBits(n4, c6, 1);
    if (0 === f6) return 0;
    var p5 = 1, m7 = parseBits(n4, l6, c6 + 1, false, function(n5, l7, c7) {
      0 === n5 && (n5 = 1);
      for (var u6 = 1; u6 <= c7; u6++) p5 /= 2, (l7 & 1 << c7 - u6) > 0 && (n5 += p5);
      return n5;
    });
    return f6 == Math.pow(2, c6 + 1) - 1 ? 0 === m7 ? 0 === h7 ? 1 / 0 : -1 / 0 : NaN : (0 === h7 ? 1 : -1) * Math.pow(2, f6 - u5) * m7;
  }, "parseFloatFromBits"), parseInt16 = /* @__PURE__ */ __name(function(n4) {
    return 1 == parseBits(n4, 1) ? -1 * (parseBits(n4, 15, 1, true) + 1) : parseBits(n4, 15, 1);
  }, "parseInt16"), parseInt32 = /* @__PURE__ */ __name(function(n4) {
    return 1 == parseBits(n4, 1) ? -1 * (parseBits(n4, 31, 1, true) + 1) : parseBits(n4, 31, 1);
  }, "parseInt32"), parseFloat32 = /* @__PURE__ */ __name(function(n4) {
    return parseFloatFromBits(n4, 23, 8);
  }, "parseFloat32"), parseFloat64 = /* @__PURE__ */ __name(function(n4) {
    return parseFloatFromBits(n4, 52, 11);
  }, "parseFloat64"), parseNumeric = /* @__PURE__ */ __name(function(n4) {
    var l6 = parseBits(n4, 16, 32);
    if (49152 == l6) return NaN;
    for (var c6 = Math.pow(1e4, parseBits(n4, 16, 16)), u5 = 0, h7 = parseBits(n4, 16), f6 = 0; f6 < h7; f6++) u5 += parseBits(n4, 16, 64 + 16 * f6) * c6, c6 /= 1e4;
    var p5 = Math.pow(10, parseBits(n4, 16, 48));
    return (0 === l6 ? 1 : -1) * Math.round(u5 * p5) / p5;
  }, "parseNumeric"), parseDate = /* @__PURE__ */ __name(function(n4, l6) {
    var c6 = parseBits(l6, 1), u5 = parseBits(l6, 63, 1), h7 = new Date((0 === c6 ? 1 : -1) * u5 / 1e3 + 9466848e5);
    return n4 || h7.setTime(h7.getTime() + 6e4 * h7.getTimezoneOffset()), h7.usec = u5 % 1e3, h7.getMicroSeconds = function() {
      return this.usec;
    }, h7.setMicroSeconds = function(n5) {
      this.usec = n5;
    }, h7.getUTCMicroSeconds = function() {
      return this.usec;
    }, h7;
  }, "parseDate"), parseArray = /* @__PURE__ */ __name(function(n4) {
    var l6 = parseBits(n4, 32);
    parseBits(n4, 32, 32);
    for (var c6 = parseBits(n4, 32, 64), u5 = 96, h7 = [], f6 = 0; f6 < l6; f6++) h7[f6] = parseBits(n4, 32, u5), u5 += 32, u5 += 32;
    var parseElement = /* @__PURE__ */ __name(function(l7) {
      var c7, h8 = parseBits(n4, 32, u5);
      return u5 += 32, 4294967295 == h8 ? null : 23 == l7 || 20 == l7 ? (c7 = parseBits(n4, 8 * h8, u5), u5 += 8 * h8, c7) : 25 == l7 ? c7 = n4.toString(this.encoding, u5 >> 3, (u5 += h8 << 3) >> 3) : void console.log("ERROR: ElementType not implemented: " + l7);
    }, "parseElement"), parse = /* @__PURE__ */ __name(function(n5, l7) {
      var c7, u6 = [];
      if (n5.length > 1) {
        var h8 = n5.shift();
        for (c7 = 0; c7 < h8; c7++) u6[c7] = parse(n5, l7);
        n5.unshift(h8);
      } else for (c7 = 0; c7 < n5[0]; c7++) u6[c7] = parseElement(l7);
      return u6;
    }, "parse");
    return parse(h7, c6);
  }, "parseArray"), parseText = /* @__PURE__ */ __name(function(n4) {
    return n4.toString("utf8");
  }, "parseText"), parseBool = /* @__PURE__ */ __name(function(n4) {
    return null === n4 ? null : parseBits(n4, 8) > 0;
  }, "parseBool");
  return fd = { init: /* @__PURE__ */ __name(function(l6) {
    l6(20, n3), l6(21, parseInt16), l6(23, parseInt32), l6(26, parseInt32), l6(1700, parseNumeric), l6(700, parseFloat32), l6(701, parseFloat64), l6(16, parseBool), l6(1114, parseDate.bind(null, false)), l6(1184, parseDate.bind(null, true)), l6(1e3, parseArray), l6(1007, parseArray), l6(1016, parseArray), l6(1008, parseArray), l6(1009, parseArray), l6(25, parseText);
  }, "init") };
}
function requireBuiltins() {
  return gd ? md : (gd = 1, md = { BOOL: 16, BYTEA: 17, CHAR: 18, INT8: 20, INT2: 21, INT4: 23, REGPROC: 24, TEXT: 25, OID: 26, TID: 27, XID: 28, CID: 29, JSON: 114, XML: 142, PG_NODE_TREE: 194, SMGR: 210, PATH: 602, POLYGON: 604, CIDR: 650, FLOAT4: 700, FLOAT8: 701, ABSTIME: 702, RELTIME: 703, TINTERVAL: 704, CIRCLE: 718, MACADDR8: 774, MONEY: 790, MACADDR: 829, INET: 869, ACLITEM: 1033, BPCHAR: 1042, VARCHAR: 1043, DATE: 1082, TIME: 1083, TIMESTAMP: 1114, TIMESTAMPTZ: 1184, INTERVAL: 1186, TIMETZ: 1266, BIT: 1560, VARBIT: 1562, NUMERIC: 1700, REFCURSOR: 1790, REGPROCEDURE: 2202, REGOPER: 2203, REGOPERATOR: 2204, REGCLASS: 2205, REGTYPE: 2206, UUID: 2950, TXID_SNAPSHOT: 2970, PG_LSN: 3220, PG_NDISTINCT: 3361, PG_DEPENDENCIES: 3402, TSVECTOR: 3614, TSQUERY: 3615, GTSVECTOR: 3642, REGCONFIG: 3734, REGDICTIONARY: 3769, JSONB: 3802, REGNAMESPACE: 4089, REGROLE: 4096 });
}
function requirePgTypes() {
  if (yd) return bd;
  yd = 1;
  var n3 = requireTextParsers(), l6 = requireBinaryParsers(), c6 = requireArrayParser(), u5 = requireBuiltins();
  bd.getTypeParser = function(n4, l7) {
    if (!h7[l7 = l7 || "text"]) return noParse;
    return h7[l7][n4] || noParse;
  }, bd.setTypeParser = function(n4, l7, c7) {
    "function" == typeof l7 && (c7 = l7, l7 = "text");
    h7[l7][n4] = c7;
  }, bd.arrayParser = c6, bd.builtins = u5;
  var h7 = { text: {}, binary: {} };
  function noParse(n4) {
    return String(n4);
  }
  __name(noParse, "noParse");
  return n3.init(function(n4, l7) {
    h7.text[n4] = l7;
  }), l6.init(function(n4, l7) {
    h7.binary[n4] = l7;
  }), bd;
}
function escapeElement(n3) {
  return '"' + n3.replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"';
}
function arrayString(n3) {
  let l6 = "{";
  for (let c6 = 0; c6 < n3.length; c6++) if (c6 > 0 && (l6 += ","), null === n3[c6] || void 0 === n3[c6]) l6 += "NULL";
  else if (Array.isArray(n3[c6])) l6 += arrayString(n3[c6]);
  else if (ArrayBuffer.isView(n3[c6])) {
    let u5 = n3[c6];
    if (!(u5 instanceof h2)) {
      const n4 = h2.from(u5.buffer, u5.byteOffset, u5.byteLength);
      u5 = n4.length === u5.byteLength ? n4 : n4.slice(u5.byteOffset, u5.byteOffset + u5.byteLength);
    }
    l6 += "\\\\x" + u5.toString("hex");
  } else l6 += escapeElement(prepareValue(n3[c6]));
  return l6 += "}", l6;
}
function requireUtilsLegacy() {
  if (Nd) return Cd;
  Nd = 1;
  const n3 = Id;
  function md5(l6) {
    return n3.createHash("md5").update(l6, "utf-8").digest("hex");
  }
  __name(md5, "md5");
  return Cd = { postgresMd5PasswordHash: /* @__PURE__ */ __name(function(n4, l6, c6) {
    const u5 = md5(l6 + n4);
    return "md5" + md5(h2.concat([h2.from(u5), c6]));
  }, "postgresMd5PasswordHash"), randomBytes: n3.randomBytes, deriveKey: /* @__PURE__ */ __name(async function(l6, c6, u5) {
    return n3.pbkdf2Sync(l6, c6, u5, 32, "sha256");
  }, "deriveKey"), sha256: /* @__PURE__ */ __name(function(l6) {
    return n3.createHash("sha256").update(l6).digest();
  }, "sha256"), hashByName: /* @__PURE__ */ __name(function(l6, c6) {
    return l6 = l6.replace(/(\D)-/, "$1"), n3.createHash(l6).update(c6).digest();
  }, "hashByName"), hmacSha256: /* @__PURE__ */ __name(function(l6, c6) {
    return n3.createHmac("sha256", l6).update(c6).digest();
  }, "hmacSha256"), md5 }, Cd;
}
function requireUtilsWebcrypto() {
  if (Od) return kd;
  Od = 1;
  const n3 = Id;
  kd = { postgresMd5PasswordHash: /* @__PURE__ */ __name(async function(n4, l7, c7) {
    const u6 = await md5(l7 + n4);
    return "md5" + await md5(h2.concat([h2.from(u6), c7]));
  }, "postgresMd5PasswordHash"), randomBytes: /* @__PURE__ */ __name(function(n4) {
    return l6.getRandomValues(h2.alloc(n4));
  }, "randomBytes"), deriveKey: /* @__PURE__ */ __name(async function(n4, l7, h7) {
    const f6 = await c6.importKey("raw", u5.encode(n4), "PBKDF2", false, ["deriveBits"]), p5 = { name: "PBKDF2", hash: "SHA-256", salt: l7, iterations: h7 };
    return await c6.deriveBits(p5, f6, 256, ["deriveBits"]);
  }, "deriveKey"), sha256: /* @__PURE__ */ __name(async function(n4) {
    return await c6.digest("SHA-256", n4);
  }, "sha256"), hashByName: /* @__PURE__ */ __name(async function(n4, l7) {
    return await c6.digest(n4, l7);
  }, "hashByName"), hmacSha256: /* @__PURE__ */ __name(async function(n4, l7) {
    const h7 = await c6.importKey("raw", n4, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
    return await c6.sign("HMAC", h7, u5.encode(l7));
  }, "hmacSha256"), md5 };
  const l6 = n3.webcrypto || globalThis.crypto, c6 = l6.subtle, u5 = new TextEncoder();
  async function md5(l7) {
    try {
      return n3.createHash("md5").update(l7, "utf-8").digest("hex");
    } catch (n4) {
      const h7 = "string" == typeof l7 ? u5.encode(l7) : l7, f6 = await c6.digest("MD5", h7);
      return Array.from(new Uint8Array(f6)).map((n5) => n5.toString(16).padStart(2, "0")).join("");
    }
  }
  __name(md5, "md5");
  return kd;
}
function x509Error(n3, l6) {
  return new Error("SASL channel binding: " + n3 + " when parsing public certificate " + l6.toString("base64"));
}
function readASN1Length(n3, l6) {
  let c6 = n3[l6++];
  if (c6 < 128) return { length: c6, index: l6 };
  const u5 = 127 & c6;
  if (u5 > 4) throw x509Error("bad length", n3);
  c6 = 0;
  for (let h7 = 0; h7 < u5; h7++) c6 = c6 << 8 | n3[l6++];
  return { length: c6, index: l6 };
}
function readASN1OID(n3, l6) {
  if (6 !== n3[l6++]) throw x509Error("non-OID data", n3);
  const { length: c6, index: u5 } = readASN1Length(n3, l6), h7 = (l6 = u5) + c6, f6 = n3[l6++];
  let p5 = (f6 / 40 | 0) + "." + f6 % 40;
  for (; l6 < h7; ) {
    let c7 = 0;
    for (; l6 < h7; ) {
      const u6 = n3[l6++];
      if (c7 = c7 << 7 | 127 & u6, u6 < 128) break;
    }
    p5 += "." + c7;
  }
  return { oid: p5, index: l6 };
}
function expectASN1Seq(n3, l6) {
  if (48 !== n3[l6++]) throw x509Error("non-sequence data", n3);
  return readASN1Length(n3, l6);
}
function isBase64(n3) {
  return /^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(n3);
}
function parseAttributePairs(n3) {
  if ("string" != typeof n3) throw new TypeError("SASL: attribute pairs text must be a string");
  return new Map(n3.split(",").map((n4) => {
    if (!/^.=/.test(n4)) throw new Error("SASL: Invalid attribute pair entry");
    return [n4[0], n4.substring(2)];
  }));
}
function TypeOverrides$2(n3) {
  this._types = n3 || Fd, this.text = {}, this.binary = {};
}
function callbackify(n3) {
  const fnc = /* @__PURE__ */ __name(function(...l6) {
    const c6 = l6.pop();
    n3().catch((n4) => c6(n4)).then((n4) => c6(void 0, n4));
  }, "fnc");
  return fnc.__promisify__ = n3, fnc.native = fnc, fnc;
}
function parse$6(n3, l6 = {}) {
  if ("/" === n3.charAt(0)) {
    const l7 = n3.split(" ");
    return { host: l7[0], database: l7[1] };
  }
  const c6 = {};
  let u5, h7 = false;
  / |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(n3) && (n3 = encodeURI(n3).replace(/%25(\d\d)/g, "%$1"));
  try {
    try {
      u5 = new URL(n3, "postgres://base");
    } catch (l7) {
      u5 = new URL(n3.replace("@/", "@___DUMMY___/"), "postgres://base"), h7 = true;
    }
  } catch (n4) {
    throw n4.input && (n4.input = "*****REDACTED*****"), n4;
  }
  for (const n4 of u5.searchParams.entries()) c6[n4[0]] = n4[1];
  if (c6.user = c6.user || decodeURIComponent(u5.username), c6.password = c6.password || decodeURIComponent(u5.password), "socket:" == u5.protocol) return c6.host = decodeURI(u5.pathname), c6.database = u5.searchParams.get("db"), c6.client_encoding = u5.searchParams.get("encoding"), c6;
  const f6 = h7 ? "" : u5.hostname;
  c6.host ? f6 && /^%2f/i.test(f6) && (u5.pathname = f6 + u5.pathname) : c6.host = decodeURIComponent(f6), c6.port || (c6.port = u5.port);
  const p5 = u5.pathname.slice(1) || null;
  c6.database = p5 ? decodeURI(p5) : null, "true" !== c6.ssl && "1" !== c6.ssl || (c6.ssl = true), "0" === c6.ssl && (c6.ssl = false), (c6.sslcert || c6.sslkey || c6.sslrootcert || c6.sslmode) && (c6.ssl = {});
  const m7 = c6.sslcert || c6.sslkey || c6.sslrootcert ? pp : null;
  if (c6.sslcert && (c6.ssl.cert = m7.readFileSync(c6.sslcert).toString()), c6.sslkey && (c6.ssl.key = m7.readFileSync(c6.sslkey).toString()), c6.sslrootcert && (c6.ssl.ca = m7.readFileSync(c6.sslrootcert).toString()), l6.useLibpqCompat && c6.uselibpqcompat) throw new Error("Both useLibpqCompat and uselibpqcompat are set. Please use only one of them.");
  if ("true" === c6.uselibpqcompat || l6.useLibpqCompat) switch (c6.sslmode) {
    case "disable":
      c6.ssl = false;
      break;
    case "prefer":
      c6.ssl.rejectUnauthorized = false;
      break;
    case "require":
      c6.sslrootcert ? c6.ssl.checkServerIdentity = function() {
      } : c6.ssl.rejectUnauthorized = false;
      break;
    case "verify-ca":
      if (!c6.ssl.ca) throw new Error("SECURITY WARNING: Using sslmode=verify-ca requires specifying a CA with sslrootcert. If a public CA is used, verify-ca allows connections to a server that somebody else may have registered with the CA, making you vulnerable to Man-in-the-Middle attacks. Either specify a custom CA certificate with sslrootcert parameter or use sslmode=verify-full for proper security.");
      c6.ssl.checkServerIdentity = function() {
      };
  }
  else switch (c6.sslmode) {
    case "disable":
      c6.ssl = false;
      break;
    case "prefer":
    case "require":
    case "verify-ca":
    case "verify-full":
      "verify-full" !== c6.sslmode && deprecatedSslModeWarning(c6.sslmode);
      break;
    case "no-verify":
      c6.ssl.rejectUnauthorized = false;
  }
  return c6;
}
function toClientConfig$1(n3) {
  const l6 = Object.entries(n3).reduce((n4, [l7, c6]) => {
    if ("ssl" === l7) {
      const u5 = c6;
      "boolean" == typeof u5 && (n4[l7] = u5), "object" == typeof u5 && (n4[l7] = (function(n5) {
        const l8 = Object.entries(n5).reduce((n6, [l9, c7]) => (null != c7 && (n6[l9] = c7), n6), {});
        return l8;
      })(u5));
    } else if (null != c6) if ("port" === l7) {
      if ("" !== c6) {
        const u5 = parseInt(c6, 10);
        if (isNaN(u5)) throw new Error(`Invalid ${l7}: ${c6}`);
        n4[l7] = u5;
      }
    } else n4[l7] = c6;
    return n4;
  }, {});
  return l6;
}
function deprecatedSslModeWarning(l6) {
  !deprecatedSslModeWarning.warned && void 0 !== m2 && m2.emitWarning && (deprecatedSslModeWarning.warned = true, m2.emitWarning(`SECURITY WARNING: The SSL modes 'prefer', 'require', and 'verify-ca' are treated as aliases for 'verify-full'.
In the next major version (pg-connection-string v3.0.0 and pg v9.0.0), these modes will adopt standard libpq semantics, which have weaker security guarantees.

To prepare for this change:
- If you want the current behavior, explicitly use 'sslmode=verify-full'
- If you want libpq compatibility now, use 'uselibpqcompat=true&sslmode=${l6}'

See https://www.postgresql.org/docs/current/libpq-ssl.html for libpq SSL mode definitions.`));
}
function dump(n3) {
  if (n3 instanceof Uint8Array || n3 instanceof ArrayBuffer) {
    const l6 = h2.from(n3).toString("hex");
    return `
>>> STR: "${new TextDecoder().decode(n3).replace(/\n/g, "\\n")}"
>>> HEX: ${l6}
`;
  }
  return n3;
}
function log(...n3) {
  wm && console.log(...n3.map(dump));
}
function requireSplit2() {
  if (Bm) return jm;
  Bm = 1;
  const { Transform: n3 } = Fm, { StringDecoder: l6 } = Um, c6 = Symbol("last"), u5 = Symbol("decoder");
  function transform(n4, l7, h7) {
    let f6;
    if (this.overflow) {
      if (f6 = this[u5].write(n4).split(this.matcher), 1 === f6.length) return h7();
      f6.shift(), this.overflow = false;
    } else this[c6] += this[u5].write(n4), f6 = this[c6].split(this.matcher);
    this[c6] = f6.pop();
    for (let n5 = 0; n5 < f6.length; n5++) try {
      push(this, this.mapper(f6[n5]));
    } catch (n6) {
      return h7(n6);
    }
    this.overflow = this[c6].length > this.maxLength, !this.overflow || this.skipOverflow ? h7() : h7(new Error("maximum buffer reached"));
  }
  __name(transform, "transform");
  function flush(n4) {
    if (this[c6] += this[u5].end(), this[c6]) try {
      push(this, this.mapper(this[c6]));
    } catch (l7) {
      return n4(l7);
    }
    n4();
  }
  __name(flush, "flush");
  function push(n4, l7) {
    void 0 !== l7 && n4.push(l7);
  }
  __name(push, "push");
  function noop(n4) {
    return n4;
  }
  __name(noop, "noop");
  return jm = /* @__PURE__ */ __name(function(h7, f6, p5) {
    switch (h7 = h7 || /\r?\n/, f6 = f6 || noop, p5 = p5 || {}, arguments.length) {
      case 1:
        "function" == typeof h7 ? (f6 = h7, h7 = /\r?\n/) : "object" != typeof h7 || h7 instanceof RegExp || h7[Symbol.split] || (p5 = h7, h7 = /\r?\n/);
        break;
      case 2:
        "function" == typeof h7 ? (p5 = f6, f6 = h7, h7 = /\r?\n/) : "object" == typeof f6 && (p5 = f6, f6 = noop);
    }
    (p5 = Object.assign({}, p5)).autoDestroy = true, p5.transform = transform, p5.flush = flush, p5.readableObjectMode = true;
    const m7 = new n3(p5);
    return m7[c6] = "", m7[u5] = new l6("utf8"), m7.matcher = h7, m7.mapper = f6, m7.maxLength = p5.maxLength, m7.skipOverflow = p5.skipOverflow || false, m7.overflow = false, m7._destroy = function(n4, l7) {
      this._writableState.errorEmitted = false, l7(n4);
    }, m7;
  }, "jm"), jm;
}
function requireHelper() {
  return Vm || (Vm = 1, (function(l6) {
    var c6 = $m, u5 = Fm.Stream, h7 = requireSplit2(), f6 = Sd, p5 = "win32" === m2.platform, m7 = m2.stderr;
    var g5 = ["host", "port", "database", "user", "password"], y5 = g5.length, w5 = g5[y5 - 1];
    function warn() {
      if (m7 instanceof u5 && true === m7.writable) {
        var n3 = Array.prototype.slice.call(arguments).concat("\n");
        m7.write(f6.format.apply(f6, n3));
      }
    }
    __name(warn, "warn");
    Object.defineProperty(l6.exports, "isWin", { get: /* @__PURE__ */ __name(function() {
      return p5;
    }, "get"), set: /* @__PURE__ */ __name(function(n3) {
      p5 = n3;
    }, "set") }), l6.exports.warnTo = function(n3) {
      var l7 = m7;
      return m7 = n3, l7;
    }, l6.exports.getFileName = function(l7) {
      var u6 = l7 || m2.env;
      return u6.PGPASSFILE || (p5 ? c6.join(u6.APPDATA || "./", "postgresql", "pgpass.conf") : c6.join(u6.HOME || "./", ".pgpass"));
    }, l6.exports.usePgPass = function(l7, c7) {
      return !Object.prototype.hasOwnProperty.call(m2.env, "PGPASSWORD") && (!!p5 || (c7 = c7 || "<unkn>", 32768 != (61440 & l7.mode) ? (warn('WARNING: password file "%s" is not a plain file', c7), false) : !(63 & l7.mode) || (warn('WARNING: password file "%s" has group or world access; permissions should be u=rw (0600) or less', c7), false)));
    };
    var b4 = l6.exports.match = function(n3, l7) {
      return g5.slice(0, -1).reduce(function(c7, u6, h8) {
        return 1 == h8 && Number(n3[u6] || 5432) === Number(l7[u6]) ? c7 && true : c7 && ("*" === l7[u6] || l7[u6] === n3[u6]);
      }, true);
    };
    l6.exports.getPassword = function(n3, l7, c7) {
      var u6, f7 = l7.pipe(h7());
      var onErr = /* @__PURE__ */ __name(function(n4) {
        l7.destroy(), warn("WARNING: error on reading file: %s", n4), c7(void 0);
      }, "onErr");
      l7.on("error", onErr), f7.on("data", function(l8) {
        var c8 = v5(l8);
        c8 && _4(c8) && b4(n3, c8) && (u6 = c8[w5], f7.end());
      }).on("end", function() {
        l7.destroy(), c7(u6);
      }).on("error", onErr);
    };
    var v5 = l6.exports.parseLine = function(l7) {
      if (l7.length < 11 || l7.match(/^\s+#/)) return null;
      for (var c7 = "", u6 = "", h8 = 0, f7 = 0, p6 = {}, addToObj = function(c8, u7, h9) {
        var f8 = l7.substring(u7, h9);
        Object.hasOwnProperty.call(m2.env, "PGPASS_NO_DEESCAPE") || (f8 = f8.replace(/\\([:\\])/g, "$1")), p6[g5[c8]] = f8;
      }, m8 = 0; m8 < l7.length - 1; m8 += 1) {
        if (c7 = l7.charAt(m8 + 1), u6 = l7.charAt(m8), h8 == y5 - 1) {
          addToObj(h8, f7);
          break;
        }
        m8 >= 0 && ":" == c7 && "\\" !== u6 && (addToObj(h8, f7, m8 + 1), f7 = m8 + 2, h8 += 1);
      }
      return p6 = Object.keys(p6).length === y5 ? p6 : null;
    }, _4 = l6.exports.isValidEntry = function(n3) {
      for (var l7 = { 0: function(n4) {
        return n4.length > 0;
      }, 1: function(n4) {
        return "*" === n4 || (n4 = Number(n4), isFinite(n4) && n4 > 0 && n4 < 9007199254740992 && Math.floor(n4) === n4);
      }, 2: function(n4) {
        return n4.length > 0;
      }, 3: function(n4) {
        return n4.length > 0;
      }, 4: function(n4) {
        return n4.length > 0;
      } }, c7 = 0; c7 < g5.length; c7 += 1) {
        if (!(0, l7[c7])(n3[g5[c7]] || "")) return false;
      }
      return true;
    };
  })(qm)), qm.exports;
}
function requireLib() {
  if (Qm) return Lm.exports;
  Qm = 1;
  var n3 = pp, l6 = requireHelper();
  return Lm.exports = function(c6, u5) {
    var h7 = l6.getFileName();
    n3.stat(h7, function(f6, p5) {
      if (f6 || !l6.usePgPass(p5, h7)) return u5(void 0);
      var m7 = n3.createReadStream(h7);
      l6.getPassword(c6, m7, u5);
    });
  }, Lm.exports.warnTo = l6.warnTo, Lm.exports;
}
function promisify(n3, l6) {
  if (l6) return { callback: l6, result: void 0 };
  let c6, u5;
  return { callback: /* @__PURE__ */ __name(function(n4, l7) {
    n4 ? c6(n4) : u5(l7);
  }, "callback"), result: new n3(function(n4, l7) {
    u5 = n4, c6 = l7;
  }).catch((n4) => {
    throw Error.captureStackTrace(n4), n4;
  }) };
}
function requireQuery() {
  if (fg) return wg.exports;
  fg = 1;
  const l6 = Gu.EventEmitter, c6 = Sd, u5 = Pd, h7 = wg.exports = function(n3, c7, h8) {
    l6.call(this), n3 = u5.normalizeQueryConfig(n3, c7, h8), this.text = n3.text, this.values = n3.values, this.name = n3.name, this.queryMode = n3.queryMode, this.callback = n3.callback, this.state = "new", this._arrayMode = "array" === n3.rowMode, this._emitRowEvents = false, this.on("newListener", function(n4) {
      "row" === n4 && (this._emitRowEvents = true);
    }.bind(this));
  };
  c6.inherits(h7, l6);
  const f6 = { sqlState: "code", statementPosition: "position", messagePrimary: "message", context: "where", schemaName: "schema", tableName: "table", columnName: "column", dataTypeName: "dataType", constraintName: "constraint", sourceFile: "file", sourceLine: "line", sourceFunction: "routine" };
  return h7.prototype.handleError = function(n3) {
    const l7 = this.native.pq.resultErrorFields();
    if (l7) for (const c7 in l7) {
      n3[f6[c7] || c7] = l7[c7];
    }
    this.callback ? this.callback(n3) : this.emit("error", n3), this.state = "error";
  }, h7.prototype.then = function(n3, l7) {
    return this._getPromise().then(n3, l7);
  }, h7.prototype.catch = function(n3) {
    return this._getPromise().catch(n3);
  }, h7.prototype._getPromise = function() {
    return this._promise || (this._promise = new Promise(function(n3, l7) {
      this._once("end", n3), this._once("error", l7);
    }.bind(this))), this._promise;
  }, h7.prototype.submit = function(l7) {
    this.state = "running";
    const c7 = this;
    this.native = l7.native, l7.native.arrayMode = this._arrayMode;
    let after = /* @__PURE__ */ __name(function(n3, u6, h8) {
      if (l7.native.arrayMode = false, E(function() {
        c7.emit("_done");
      }), n3) return c7.handleError(n3);
      c7._emitRowEvents && (h8.length > 1 ? u6.forEach((n4, l8) => {
        n4.forEach((n5) => {
          c7.emit("row", n5, h8[l8]);
        });
      }) : u6.forEach(function(n4) {
        c7.emit("row", n4, h8);
      })), c7.state = "end", c7.emit("end", h8), c7.callback && c7.callback(null, h8);
    }, "after");
    if (m2.domain && (after = m2.domain.bind(after)), this.name) {
      this.name.length > 63 && (console.error("Warning! Postgres only supports 63 characters for query names."), console.error("You supplied %s (%s)", this.name, this.name.length), console.error("This can cause conflicts and silent errors executing queries"));
      const n3 = (this.values || []).map(u5.prepareValue);
      if (l7.namedQueries[this.name]) {
        if (this.text && l7.namedQueries[this.name] !== this.text) {
          const n4 = new Error(`Prepared statements must be unique - '${this.name}' was used for a different statement`);
          return after(n4);
        }
        return l7.native.execute(this.name, n3, after);
      }
      return l7.native.prepare(this.name, this.text, n3.length, function(u6) {
        return u6 ? after(u6) : (l7.namedQueries[c7.name] = c7.text, c7.native.execute(c7.name, n3, after));
      });
    }
    if (this.values) {
      if (!Array.isArray(this.values)) {
        const n4 = new Error("Query values must be an array");
        return after(n4);
      }
      const n3 = this.values.map(u5.prepareValue);
      l7.native.query(this.text, n3, after);
    } else "extended" === this.queryMode ? l7.native.query(this.text, [], after) : l7.native.query(this.text, after);
  }, wg.exports;
}
function requireClient() {
  if (pg) return yg.exports;
  var l6;
  pg = 1;
  try {
    l6 = __require("pg-native");
  } catch (n3) {
    throw n3;
  }
  const c6 = Ud, u5 = Gu.EventEmitter, h7 = Sd, f6 = xp, p5 = requireQuery(), m7 = yg.exports = function(n3) {
    u5.call(this), n3 = n3 || {}, this._Promise = n3.Promise || Ju.Promise, this._types = new c6(n3.types), this.native = new l6({ types: this._types }), this._queryQueue = [], this._ending = false, this._connecting = false, this._connected = false, this._queryable = true;
    const h8 = this.connectionParameters = new f6(n3);
    n3.nativeConnectionString && (h8.nativeConnectionString = n3.nativeConnectionString), this.user = h8.user, Object.defineProperty(this, "password", { configurable: true, enumerable: false, writable: true, value: h8.password }), this.database = h8.database, this.host = h8.host, this.port = h8.port, this.namedQueries = {};
  };
  return m7.Query = p5, h7.inherits(m7, u5), m7.prototype._errorAllQueries = function(l7) {
    const enqueueError = /* @__PURE__ */ __name((c7) => {
      m2.nextTick(() => {
        c7.native = this.native, c7.handleError(l7);
      });
    }, "enqueueError");
    this._hasActiveQuery() && (enqueueError(this._activeQuery), this._activeQuery = null), this._queryQueue.forEach(enqueueError), this._queryQueue.length = 0;
  }, m7.prototype._connect = function(l7) {
    const c7 = this;
    this._connecting ? m2.nextTick(() => l7(new Error("Client has already been connected. You cannot reuse a client."))) : (this._connecting = true, this.connectionParameters.getLibpqConnectionString(function(n3, u6) {
      if (c7.connectionParameters.nativeConnectionString && (u6 = c7.connectionParameters.nativeConnectionString), n3) return l7(n3);
      c7.native.connect(u6, function(n4) {
        if (n4) return c7.native.end(), l7(n4);
        c7._connected = true, c7.native.on("error", function(n5) {
          c7._queryable = false, c7._errorAllQueries(n5), c7.emit("error", n5);
        }), c7.native.on("notification", function(n5) {
          c7.emit("notification", { channel: n5.relname, payload: n5.extra });
        }), c7.emit("connect"), c7._pulseQueryQueue(true), l7(null, this);
      });
    }));
  }, m7.prototype.connect = function(n3) {
    if (!n3) return new this._Promise((n4, l7) => {
      this._connect((c7) => {
        c7 ? l7(c7) : n4(this);
      });
    });
    this._connect(n3);
  }, m7.prototype.query = function(l7, c7, u6) {
    let h8, f7, m8, g5, y5;
    if (null == l7) throw new TypeError("Client was passed a null or undefined query");
    if ("function" == typeof l7.submit) m8 = l7.query_timeout || this.connectionParameters.query_timeout, f7 = h8 = l7, "function" == typeof c7 && (l7.callback = c7);
    else if (m8 = l7.query_timeout || this.connectionParameters.query_timeout, h8 = new p5(l7, c7, u6), !h8.callback) {
      let n3, l8;
      f7 = new this._Promise((c8, u7) => {
        n3 = c8, l8 = u7;
      }).catch((n4) => {
        throw Error.captureStackTrace(n4), n4;
      }), h8.callback = (c8, u7) => c8 ? l8(c8) : n3(u7);
    }
    return m8 && (y5 = h8.callback, g5 = setTimeout(() => {
      const l8 = new Error("Query read timeout");
      m2.nextTick(() => {
        h8.handleError(l8, this.connection);
      }), y5(l8), h8.callback = () => {
      };
      const c8 = this._queryQueue.indexOf(h8);
      c8 > -1 && this._queryQueue.splice(c8, 1), this._pulseQueryQueue();
    }, m8), h8.callback = (n3, l8) => {
      clearTimeout(g5), y5(n3, l8);
    }), this._queryable ? this._ending ? (h8.native = this.native, m2.nextTick(() => {
      h8.handleError(new Error("Client was closed and is not queryable"));
    }), f7) : (this._queryQueue.push(h8), this._pulseQueryQueue(), f7) : (h8.native = this.native, m2.nextTick(() => {
      h8.handleError(new Error("Client has encountered a connection error and is not queryable"));
    }), f7);
  }, m7.prototype.end = function(l7) {
    const c7 = this;
    let u6;
    return this._ending = true, this._connected || this.once("connect", this.end.bind(this, l7)), l7 || (u6 = new this._Promise(function(n3, c8) {
      l7 = /* @__PURE__ */ __name((l8) => l8 ? c8(l8) : n3(), "l");
    })), this.native.end(function() {
      c7._errorAllQueries(new Error("Connection terminated")), m2.nextTick(() => {
        c7.emit("end"), l7 && l7();
      });
    }), u6;
  }, m7.prototype._hasActiveQuery = function() {
    return this._activeQuery && "error" !== this._activeQuery.state && "end" !== this._activeQuery.state;
  }, m7.prototype._pulseQueryQueue = function(n3) {
    if (!this._connected) return;
    if (this._hasActiveQuery()) return;
    const l7 = this._queryQueue.shift();
    if (!l7) return void (n3 || this.emit("drain"));
    this._activeQuery = l7, l7.submit(this);
    const c7 = this;
    l7.once("_done", function() {
      c7._pulseQueryQueue();
    });
  }, m7.prototype.cancel = function(n3) {
    this._activeQuery === n3 ? this.native.cancel(function() {
    }) : -1 !== this._queryQueue.indexOf(n3) && this._queryQueue.splice(this._queryQueue.indexOf(n3), 1);
  }, m7.prototype.ref = function() {
  }, m7.prototype.unref = function() {
  }, m7.prototype.setTypeParser = function(n3, l7, c7) {
    return this._types.setTypeParser(n3, l7, c7);
  }, m7.prototype.getTypeParser = function(n3, l7) {
    return this._types.getTypeParser(n3, l7);
  }, yg.exports;
}
function requireNative() {
  return gg ? mg : (gg = 1, mg = requireClient());
}
function makeParseArrayWithTransform(n3) {
  const l6 = null != n3;
  return function(c6) {
    const u5 = c6.length - 1;
    if (1 === u5) return [];
    if ("}" !== c6[u5]) throw new Error("Invalid array text - must end with }");
    let h7 = 0;
    if ("[" === c6[h7] && (h7 = c6.indexOf("=") + 1), "{" !== c6[h7++]) throw new Error("Invalid array text - must start with {");
    const f6 = [];
    let p5 = f6;
    const m7 = [];
    let g5 = h7, y5 = "", w5 = true;
    for (; h7 < u5; ++h7) {
      let f7 = c6[h7];
      if ('"' === f7) {
        g5 = ++h7;
        let u6 = c6.indexOf('"', g5), f8 = c6.indexOf("\\", g5);
        for (; -1 !== f8 && f8 < u6; ) {
          h7 = f8;
          y5 += c6.slice(g5, h7), g5 = ++h7, u6 === h7++ && (u6 = c6.indexOf('"', h7)), f8 = c6.indexOf("\\", h7);
        }
        h7 = u6;
        y5 += c6.slice(g5, h7), p5.push(l6 ? n3(y5) : y5), y5 = "", w5 = false;
      } else if ("{" === f7) {
        const n4 = [];
        p5.push(n4), m7.push(p5), p5 = n4, g5 = h7 + 1, w5 = true;
      } else if ("," === f7) w5 = true;
      else if ("}" === f7) {
        w5 = false;
        const n4 = m7.pop();
        if (void 0 === n4) throw new Error("Invalid array text - too many '}'");
        p5 = n4;
      } else {
        if (!w5) throw new Error("Was expecting delimeter");
        {
          for (g5 = h7; "," !== (f7 = c6[h7]) && "}" !== f7 && h7 < u5; ) ++h7;
          const m8 = c6.slice(g5, h7--);
          p5.push("NULL" === m8 ? null : l6 ? n3(m8) : m8), w5 = false;
        }
      }
    }
    return f6;
  };
}
function normalize_array(n3) {
  return (l6) => {
    return c6 = l6, null != (u5 = n3) ? makeParseArrayWithTransform(u5)(c6) : kg(c6);
    var c6, u5;
  };
}
function normalize_numeric(n3) {
  return n3;
}
function normalize_date(n3) {
  return n3;
}
function normalize_timestamp(n3) {
  return `${n3.replace(" ", "T")}+00:00`;
}
function normalize_timestamptz(n3) {
  return n3.replace(" ", "T").replace(/[+-]\d{2}(:\d{2})?$/, "+00:00");
}
function normalize_time(n3) {
  return n3;
}
function normalize_money(n3) {
  return n3.slice(1);
}
function toJson(n3) {
  return n3;
}
function normalizeBit(n3) {
  return n3;
}
function mapArg(n3, l6) {
  if (null === n3) return null;
  if (Array.isArray(n3) && "list" === l6.arity) return n3.map((n4) => mapArg(n4, l6));
  if ("string" == typeof n3 && "datetime" === l6.scalarType && (n3 = new Date(n3)), n3 instanceof Date) switch (l6.dbType) {
    case "TIME":
    case "TIMETZ":
      return (function(n4) {
        const pad = /* @__PURE__ */ __name((n5, l8 = 2) => String(n5).padStart(l8, "0"), "pad"), l7 = n4.getUTCMilliseconds();
        return pad(n4.getUTCHours()) + ":" + pad(n4.getUTCMinutes()) + ":" + pad(n4.getUTCSeconds()) + (l7 ? "." + String(l7).padStart(3, "0") : "");
      })(n3);
    case "DATE":
      return (function(n4) {
        const pad = /* @__PURE__ */ __name((n5, l7 = 2) => String(n5).padStart(l7, "0"), "pad");
        return pad(n4.getUTCFullYear(), 4) + "-" + pad(n4.getUTCMonth() + 1) + "-" + pad(n4.getUTCDate());
      })(n3);
    default:
      return (function(n4) {
        const pad = /* @__PURE__ */ __name((n5, l8 = 2) => String(n5).padStart(l8, "0"), "pad"), l7 = n4.getUTCMilliseconds();
        return pad(n4.getUTCFullYear(), 4) + "-" + pad(n4.getUTCMonth() + 1) + "-" + pad(n4.getUTCDate()) + " " + pad(n4.getUTCHours()) + ":" + pad(n4.getUTCMinutes()) + ":" + pad(n4.getUTCSeconds()) + (l7 ? "." + String(l7).padStart(3, "0") : "");
      })(n3);
  }
  return "string" == typeof n3 && "bytes" === l6.scalarType ? h2.from(n3, "base64") : ArrayBuffer.isView(n3) ? new Uint8Array(n3.buffer, n3.byteOffset, n3.byteLength) : n3;
}
function convertDriverError(n3) {
  if ((function(n4) {
    return "string" == typeof n4.code && "string" == typeof n4.syscall && "number" == typeof n4.errno && py.has(n4.code);
  })(n3)) return (function(n4) {
    switch (n4.code) {
      case "ENOTFOUND":
      case "ECONNREFUSED":
        return { kind: "DatabaseNotReachable", host: n4.address ?? n4.hostname, port: n4.port };
      case "ECONNRESET":
        return { kind: "ConnectionClosed" };
      case "ETIMEDOUT":
        return { kind: "SocketTimeout" };
    }
  })(n3);
  if ((function(n4) {
    if ("string" == typeof n4.code) return fy.has(n4.code);
    switch (n4.message) {
      case "The server does not support SSL connections":
      case "There was an error establishing an SSL connection":
        return true;
    }
    return false;
  })(n3)) return { kind: "TlsConnectionError", reason: n3.message };
  if ((function(n4) {
    return !("string" != typeof n4.code || "string" != typeof n4.message || "string" != typeof n4.severity || "string" != typeof n4.detail && void 0 !== n4.detail || "string" != typeof n4.column && void 0 !== n4.column || "string" != typeof n4.hint && void 0 !== n4.hint);
  })(n3)) return { originalCode: n3.code, originalMessage: n3.message, ...mapDriverError(n3) };
  throw n3;
}
function mapDriverError(n3) {
  switch (n3.code) {
    case "22001":
      return { kind: "LengthMismatch", column: n3.column };
    case "22003":
      return { kind: "ValueOutOfRange", cause: n3.message };
    case "22P02":
      return { kind: "InvalidInputValue", message: n3.message };
    case "23505": {
      const l6 = n3.detail?.match(/Key \(([^)]+)\)/)?.at(1)?.split(", ");
      return { kind: "UniqueConstraintViolation", constraint: void 0 !== l6 ? { fields: l6 } : void 0 };
    }
    case "23502": {
      const l6 = n3.detail?.match(/Key \(([^)]+)\)/)?.at(1)?.split(", ");
      return { kind: "NullConstraintViolation", constraint: void 0 !== l6 ? { fields: l6 } : void 0 };
    }
    case "23503": {
      let l6;
      return n3.column ? l6 = { fields: [n3.column] } : n3.constraint && (l6 = { index: n3.constraint }), { kind: "ForeignKeyConstraintViolation", constraint: l6 };
    }
    case "3D000":
      return { kind: "DatabaseDoesNotExist", db: n3.message.split(" ").at(1)?.split('"').at(1) };
    case "28000":
      return { kind: "DatabaseAccessDenied", db: n3.message.split(",").find((n4) => n4.startsWith(" database"))?.split('"').at(1) };
    case "28P01":
      return { kind: "AuthenticationFailed", user: n3.message.split(" ").pop()?.split('"').at(1) };
    case "40001":
      return { kind: "TransactionWriteConflict" };
    case "42P01":
      return { kind: "TableDoesNotExist", table: n3.message.split(" ").at(1)?.split('"').at(1) };
    case "42703":
      return { kind: "ColumnNotFound", column: n3.message.split(" ").at(1)?.split('"').at(1) };
    case "42P04":
      return { kind: "DatabaseAlreadyExists", db: n3.message.split(" ").at(1)?.split('"').at(1) };
    case "53300":
      return { kind: "TooManyConnections", cause: n3.message };
    default:
      return { kind: "postgres", code: n3.code ?? "N/A", severity: n3.severity ?? "N/A", message: n3.message, detail: n3.detail, column: n3.column, hint: n3.hint };
  }
}
function usePrisma() {
  const n3 = new vy({ connectionString: "postgres://e6fc40930c12f122cfa876caae3d4072923a4cdc1bbcd86c50d64952ed86397e:sk_bsFKpT4WKYZymFfX8ZcK5@db.prisma.io:5432/postgres?sslmode=require" });
  return new cc({ adapter: n3 });
}
var T, x2, P2, A, I, C2, N2, k2, O2, R2, M, $2, q2, U2, j, B2, V2, W2, z2, G2, K2, Z2, X2, ee2, ne2, ie2, se2, ae2, oe2, ce2, fe2, ge, Se, Ee, xe, Pe, Ae, Ie, ke, De, Me, Le, Fe, je, Be, Ve, Qe, He, We, pe, re2, Et, Fi, Ne, ze, Ge, Ke, Ze, tt, rt, nt, it, lt, dt, ft, gt, wt, bt, vt, St, At, It, Ct, kt, Rt, Dt, Mt, Lt, Ft, jt, Bt, Qt, Ht, Wt, Jt, zt, Gt, Yt, Zt, Xt, er, tr, nr, ir, sr, ar2, or, cr, ur, hr, pr, mr, gr, yr, vr, Sr, xr, Pr, kr, Or, Dr, Mr, Lr, $r, Qr, Hr, zr, Gr, Kr, Xr, en, tn, rn, nn, sn, an, on, ln, cn, un, dn, hn, fn, pn, mn, gn, bn, _n, Sn, En, Tn, xn, Pn, In, Cn, Nn, kn, Ar, On, Rn, Dn, Mn, Fn, Un, Bn, Gn, Kn, Yn, Zn, ei, ti, ai, oi, ci, ui, di, fi, pi, mi, vi, _i, Pi, Ai, Ci, Ni, Oi, Di, us, $n, Li, Bi, Wi, Gi, xs, Zi, Xi, es, rs, ns, is, ss, os, ls, cs, hs, fs, ps, ms, ws, Ns, Ms, $s, qs, Us, Vs, ca, ha, fa, pa, wa, ba, Ta, Pa, Aa, Na, ka, Oa, Da, Ma, La, Ua, Za, eo, to, ro, no, io, so, ao, oo, lo, co, uo, ho, fo, po, mo, yo, wo, bo, si, vo, li, So, Eo, To, xo, Po, Ao, Co, No, Do, Mo, Lo, Vo, Wo, Jo, zo, Go, Ko, Xo, tl, rl, nl, il, ol, cl, ul, dl, fl, pl, ml, gl, bl, Sl, Tl, xl, Il, Nl, El, kl, Rl, Ri, Dl, Ml, Ll, ql, Fl, Bl, Vl, Ql, Jl, zl, Gl, Kl, Yl, Zl, Xl, ec, tc, rc, nc, ic, ac, oc, lc, cc, uc, hc, fc, pc, mc, gc, yc, wc, bc, vc, Ec, Tc, xc, Pc, Ac, Cc, Nc, kc, Dc, Lc, Fc, jc, Qc, Hc, Wc, Jc, zc, Gc, Kc, Yc, Zc, Xc, eu, ru, nu, iu, su, au, ou, cu, uu, du, hu, fu, mu, gu, yu, wu, _u, Su, Pu, Au, Iu, Cu, ku, Ru, Du, Mu, Lu, $u, qu, Fu, Uu, ju, Bu, Vu, Qu, Hu, Wu, Ju, zu, Gu, Ku, Yu, Zu, Xu, ed, td, rd, id, sd, ad, od, ld, ud, dd, hd, fd, pd, md, gd, yd, wd, bd, vd, _d, Sd, Ed, Td, xd, prepareValue, Pd, Ad, Id, Cd, Nd, kd, Od, Rd, Dd, Md, Ld, $d, qd, Fd, Ud, jd, Bd, Vd, Qd, Hd, Wd, Jd, zd, Gd, Kd, Yd, Zd, Xd, eh, th, rh, nh, ih, sh, ah, oh, lh, ch, uh, dh, hh, fh, ph, mh, gh, yh, wh, bh, vh, _h, Sh, Eh, Th, xh, Ph, Ah, Ih, Ch, Nh, kh, Oh, Rh, Dh, Mh, Lh, $h, qh, Fh, Uh, jh, Bh, Vh, Qh, Hh, Wh, Jh, zh, Gh, Kh, Yh, Zh, Xh, ef, tf, rf, nf, sf, af, of, lf, cf, uf, df, hf, ff, pf, mf, gf, yf, wf, bf, vf, _f, Sf, Ef, Tf, xf, Pf, Af, If, Cf, Nf, existsSync, kf, Of, Rf, Df, Mf, Lf, $f, qf, Ff, Uf, jf, Bf, Vf, Qf, Hf, Wf, Jf, zf, Gf, Kf, Yf, Zf, Xf, ep, rp, ip, sp, ap, lp, cp, up, dp, hp, fp, pp, mp, gp, yp, wp, bp, vp, _p, Sp, Ep, Tp, val, quoteParamValue, add, xp, Pp, Ap, Ip, Cp, Np, kp, Op, Rp, Dp, Mp, Lp, $p, qp, Fp, Up, jp, Bp, cstringMessage, Vp, Qp, codeOnlyBuffer, Hp, Wp, Jp, zp, Gp, Kp, Yp, Zp, tm, rm, nm, im, parseReadyForQueryMessage, parseCommandCompleteMessage, parseCopyData, parseCopyInMessage, parseCopyOutMessage, parseCopyMessage, parseNotificationMessage, parseRowDescriptionMessage, parseField, parseParameterDescriptionMessage, parseDataRowMessage, parseParameterStatusMessage, parseBackendKeyData, parseAuthenticationResponse, parseErrorMessage, sm, am, om, lm, cm, um, pm, mm, ym, wm, bm, vm, _m, Sm, xm, Am, Im, Cm, Nm, km, Om, Rm, Dm, Mm, Lm, $m, qm, Fm, Um, jm, Bm, Vm, Qm, Hm, Wm, Jm, zm, Gm, Km, Ym, Xm, eg, tg, rg, ng, ig, sg, ag, og, lg, cg, NOOP, removeWhere, IdleItem, PendingItem, ug, dg, hg, fg, pg, mg, gg, yg, wg, bg, vg, _g, Sg, Eg, Tg, xg, Pg, Ag, Ig, Cg, Ng, kg, Og, Rg, Dg, Mg, Lg, $g, qg, Fg, Ug, jg, Bg, Vg, Qg, Hg, Wg, Jg, zg, Gg, Kg, Yg, Zg, Xg, ey, ty, ry, ny, iy, sy, ay, oy, ly, cy, uy, dy, hy, fy, py, my, gy, yy, wy, by, vy;
var init_prisma = __esm({
  ".output/server/chunks/_/prisma.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_nitro();
    T = Object.freeze(Object.defineProperty({ __proto__: null, get Client() {
      return vg;
    }, get Connection() {
      return Sg;
    }, get DatabaseError() {
      return xg;
    }, get Pool() {
      return _g;
    }, get Query() {
      return Tg;
    }, get Result() {
      return Ig;
    }, get TypeOverrides() {
      return Cg;
    }, get default() {
      return bg;
    }, get defaults() {
      return Ng;
    }, get escapeIdentifier() {
      return Pg;
    }, get escapeLiteral() {
      return Ag;
    }, get types() {
      return Eg;
    } }, Symbol.toStringTag, { value: "Module" }));
    __name(hasBatchIndex, "hasBatchIndex");
    __name(setClassName, "setClassName");
    x2 = class _PrismaClientInitializationError extends Error {
      static {
        __name(this, "_PrismaClientInitializationError");
      }
      clientVersion;
      errorCode;
      retryable;
      constructor(n3, l6, c6) {
        super(n3), this.name = "PrismaClientInitializationError", this.clientVersion = l6, this.errorCode = c6, Error.captureStackTrace(_PrismaClientInitializationError);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
      }
    };
    setClassName(x2, "PrismaClientInitializationError");
    P2 = class extends Error {
      static {
        __name(this, "P");
      }
      code;
      meta;
      clientVersion;
      batchRequestIdx;
      constructor(n3, { code: l6, clientVersion: c6, meta: u5, batchRequestIdx: h7 }) {
        super(n3), this.name = "PrismaClientKnownRequestError", this.code = l6, this.clientVersion = c6, this.meta = u5, Object.defineProperty(this, "batchRequestIdx", { value: h7, enumerable: false, writable: true });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
      }
    };
    setClassName(P2, "PrismaClientKnownRequestError"), setClassName(class extends Error {
      clientVersion;
      _isPanic;
      constructor({ clientVersion: n3, error: l6 }) {
        var c6;
        super((function(n4) {
          if (n4.fields?.message) {
            let l7 = n4.fields?.message;
            return n4.fields?.file && (l7 += ` in ${n4.fields.file}`, n4.fields?.line && (l7 += `:${n4.fields.line}`), n4.fields?.column && (l7 += `:${n4.fields.column}`)), n4.fields?.reason && (l7 += `
${n4.fields?.reason}`), l7;
          }
          return "Unknown error";
        })(l6) ?? "Unknown error"), this._isPanic = (c6 = l6, "PANIC" === c6.fields?.message), this.clientVersion = n3;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustError";
      }
      isPanic() {
        return this._isPanic;
      }
    }, "PrismaClientRustError");
    A = class extends Error {
      static {
        __name(this, "A");
      }
      clientVersion;
      constructor(n3, l6) {
        super(n3), this.name = "PrismaClientRustPanicError", this.clientVersion = l6;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
      }
    };
    setClassName(A, "PrismaClientRustPanicError");
    I = class extends Error {
      static {
        __name(this, "I");
      }
      clientVersion;
      batchRequestIdx;
      constructor(n3, { clientVersion: l6, batchRequestIdx: c6 }) {
        super(n3), this.name = "PrismaClientUnknownRequestError", this.clientVersion = l6, Object.defineProperty(this, "batchRequestIdx", { value: c6, writable: true, enumerable: false });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
      }
    };
    setClassName(I, "PrismaClientUnknownRequestError");
    C2 = class extends Error {
      static {
        __name(this, "C");
      }
      name = "PrismaClientValidationError";
      clientVersion;
      constructor(n3, { clientVersion: l6 }) {
        super(n3), this.clientVersion = l6;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
      }
    };
    setClassName(C2, "PrismaClientValidationError");
    N2 = Symbol();
    k2 = /* @__PURE__ */ new WeakMap();
    O2 = class {
      static {
        __name(this, "O");
      }
      constructor(n3) {
        n3 === N2 ? k2.set(this, `Prisma.${this._getName()}`) : k2.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return k2.get(this);
      }
    };
    __name(setClassName2, "setClassName2");
    R2 = class extends O2 {
      static {
        __name(this, "R");
      }
      _getNamespace() {
        return "NullTypes";
      }
    };
    M = class extends R2 {
      static {
        __name(this, "M");
      }
      #e;
    };
    setClassName2(M, "DbNull");
    $2 = class extends R2 {
      static {
        __name(this, "$");
      }
      #t;
    };
    setClassName2($2, "JsonNull");
    q2 = class extends R2 {
      static {
        __name(this, "q");
      }
      #r;
    };
    setClassName2(q2, "AnyNull");
    U2 = new M(N2);
    j = new $2(N2);
    B2 = new q2(N2);
    z2 = 9e15;
    G2 = 1e9;
    K2 = "0123456789abcdef";
    Z2 = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
    X2 = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
    ee2 = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -z2, maxE: z2, crypto: false };
    ne2 = true;
    ie2 = "[DecimalError] ";
    se2 = ie2 + "Invalid argument: ";
    ae2 = ie2 + "Precision limit exceeded";
    oe2 = ie2 + "crypto unavailable";
    ce2 = "[object Decimal]";
    fe2 = Math.floor;
    ge = Math.pow;
    Se = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
    Ee = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
    xe = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
    Pe = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    Ae = 1e7;
    Ie = Z2.length - 1;
    ke = X2.length - 1;
    De = { toStringTag: ce2 };
    __name(digitsToString, "digitsToString");
    __name(checkInt32, "checkInt32");
    __name(checkRoundingDigits, "checkRoundingDigits");
    __name(convertBase, "convertBase");
    De.absoluteValue = De.abs = function() {
      var n3 = new this.constructor(this);
      return n3.s < 0 && (n3.s = 1), finalise(n3);
    }, De.ceil = function() {
      return finalise(new this.constructor(this), this.e + 1, 2);
    }, De.clampedTo = De.clamp = function(n3, l6) {
      var c6 = this, u5 = c6.constructor;
      if (n3 = new u5(n3), l6 = new u5(l6), !n3.s || !l6.s) return new u5(NaN);
      if (n3.gt(l6)) throw Error(se2 + l6);
      return c6.cmp(n3) < 0 ? n3 : c6.cmp(l6) > 0 ? l6 : new u5(c6);
    }, De.comparedTo = De.cmp = function(n3) {
      var l6, c6, u5, h7, f6 = this, p5 = f6.d, m7 = (n3 = new f6.constructor(n3)).d, g5 = f6.s, y5 = n3.s;
      if (!p5 || !m7) return g5 && y5 ? g5 !== y5 ? g5 : p5 === m7 ? 0 : !p5 ^ g5 < 0 ? 1 : -1 : NaN;
      if (!p5[0] || !m7[0]) return p5[0] ? g5 : m7[0] ? -y5 : 0;
      if (g5 !== y5) return g5;
      if (f6.e !== n3.e) return f6.e > n3.e ^ g5 < 0 ? 1 : -1;
      for (l6 = 0, c6 = (u5 = p5.length) < (h7 = m7.length) ? u5 : h7; l6 < c6; ++l6) if (p5[l6] !== m7[l6]) return p5[l6] > m7[l6] ^ g5 < 0 ? 1 : -1;
      return u5 === h7 ? 0 : u5 > h7 ^ g5 < 0 ? 1 : -1;
    }, De.cosine = De.cos = function() {
      var n3, l6, c6 = this, u5 = c6.constructor;
      return c6.d ? c6.d[0] ? (n3 = u5.precision, l6 = u5.rounding, u5.precision = n3 + Math.max(c6.e, c6.sd()) + 7, u5.rounding = 1, c6 = (function(n4, l7) {
        var c7, u6, h7;
        if (l7.isZero()) return l7;
        u6 = l7.d.length, u6 < 32 ? h7 = (1 / tinyPow(4, c7 = Math.ceil(u6 / 3))).toString() : (c7 = 16, h7 = "2.3283064365386962890625e-10");
        n4.precision += c7, l7 = taylorSeries(n4, 1, l7.times(h7), new n4(1));
        for (var f6 = c7; f6--; ) {
          var p5 = l7.times(l7);
          l7 = p5.times(p5).minus(p5).times(8).plus(1);
        }
        return n4.precision -= c7, l7;
      })(u5, toLessThanHalfPi(u5, c6)), u5.precision = n3, u5.rounding = l6, finalise(2 == W2 || 3 == W2 ? c6.neg() : c6, n3, l6, true)) : new u5(1) : new u5(NaN);
    }, De.cubeRoot = De.cbrt = function() {
      var n3, l6, c6, u5, h7, f6, p5, m7, g5, y5, w5 = this, b4 = w5.constructor;
      if (!w5.isFinite() || w5.isZero()) return new b4(w5);
      for (ne2 = false, (f6 = w5.s * ge(w5.s * w5, 1 / 3)) && Math.abs(f6) != 1 / 0 ? u5 = new b4(f6.toString()) : (c6 = digitsToString(w5.d), (f6 = ((n3 = w5.e) - c6.length + 1) % 3) && (c6 += 1 == f6 || -2 == f6 ? "0" : "00"), f6 = ge(c6, 1 / 3), n3 = fe2((n3 + 1) / 3) - (n3 % 3 == (n3 < 0 ? -1 : 2)), (u5 = new b4(c6 = f6 == 1 / 0 ? "5e" + n3 : (c6 = f6.toExponential()).slice(0, c6.indexOf("e") + 1) + n3)).s = w5.s), p5 = (n3 = b4.precision) + 3; ; ) if (y5 = (g5 = (m7 = u5).times(m7).times(m7)).plus(w5), u5 = Me(y5.plus(w5).times(m7), y5.plus(g5), p5 + 2, 1), digitsToString(m7.d).slice(0, p5) === (c6 = digitsToString(u5.d)).slice(0, p5)) {
        if ("9999" != (c6 = c6.slice(p5 - 3, p5 + 1)) && (h7 || "4999" != c6)) {
          +c6 && (+c6.slice(1) || "5" != c6.charAt(0)) || (finalise(u5, n3 + 1, 1), l6 = !u5.times(u5).times(u5).eq(w5));
          break;
        }
        if (!h7 && (finalise(m7, n3 + 1, 0), m7.times(m7).times(m7).eq(w5))) {
          u5 = m7;
          break;
        }
        p5 += 4, h7 = 1;
      }
      return ne2 = true, finalise(u5, n3, b4.rounding, l6);
    }, De.decimalPlaces = De.dp = function() {
      var n3, l6 = this.d, c6 = NaN;
      if (l6) {
        if (c6 = 7 * ((n3 = l6.length - 1) - fe2(this.e / 7)), n3 = l6[n3]) for (; n3 % 10 == 0; n3 /= 10) c6--;
        c6 < 0 && (c6 = 0);
      }
      return c6;
    }, De.dividedBy = De.div = function(n3) {
      return Me(this, new this.constructor(n3));
    }, De.dividedToIntegerBy = De.divToInt = function(n3) {
      var l6 = this.constructor;
      return finalise(Me(this, new l6(n3), 0, 1, 1), l6.precision, l6.rounding);
    }, De.equals = De.eq = function(n3) {
      return 0 === this.cmp(n3);
    }, De.floor = function() {
      return finalise(new this.constructor(this), this.e + 1, 3);
    }, De.greaterThan = De.gt = function(n3) {
      return this.cmp(n3) > 0;
    }, De.greaterThanOrEqualTo = De.gte = function(n3) {
      var l6 = this.cmp(n3);
      return 1 == l6 || 0 === l6;
    }, De.hyperbolicCosine = De.cosh = function() {
      var n3, l6, c6, u5, h7, f6 = this, p5 = f6.constructor, m7 = new p5(1);
      if (!f6.isFinite()) return new p5(f6.s ? 1 / 0 : NaN);
      if (f6.isZero()) return m7;
      c6 = p5.precision, u5 = p5.rounding, p5.precision = c6 + Math.max(f6.e, f6.sd()) + 4, p5.rounding = 1, (h7 = f6.d.length) < 32 ? l6 = (1 / tinyPow(4, n3 = Math.ceil(h7 / 3))).toString() : (n3 = 16, l6 = "2.3283064365386962890625e-10"), f6 = taylorSeries(p5, 1, f6.times(l6), new p5(1), true);
      for (var g5, y5 = n3, w5 = new p5(8); y5--; ) g5 = f6.times(f6), f6 = m7.minus(g5.times(w5.minus(g5.times(w5))));
      return finalise(f6, p5.precision = c6, p5.rounding = u5, true);
    }, De.hyperbolicSine = De.sinh = function() {
      var n3, l6, c6, u5, h7 = this, f6 = h7.constructor;
      if (!h7.isFinite() || h7.isZero()) return new f6(h7);
      if (l6 = f6.precision, c6 = f6.rounding, f6.precision = l6 + Math.max(h7.e, h7.sd()) + 4, f6.rounding = 1, (u5 = h7.d.length) < 3) h7 = taylorSeries(f6, 2, h7, h7, true);
      else {
        n3 = (n3 = 1.4 * Math.sqrt(u5)) > 16 ? 16 : 0 | n3, h7 = taylorSeries(f6, 2, h7 = h7.times(1 / tinyPow(5, n3)), h7, true);
        for (var p5, m7 = new f6(5), g5 = new f6(16), y5 = new f6(20); n3--; ) p5 = h7.times(h7), h7 = h7.times(m7.plus(p5.times(g5.times(p5).plus(y5))));
      }
      return f6.precision = l6, f6.rounding = c6, finalise(h7, l6, c6, true);
    }, De.hyperbolicTangent = De.tanh = function() {
      var n3, l6, c6 = this, u5 = c6.constructor;
      return c6.isFinite() ? c6.isZero() ? new u5(c6) : (n3 = u5.precision, l6 = u5.rounding, u5.precision = n3 + 7, u5.rounding = 1, Me(c6.sinh(), c6.cosh(), u5.precision = n3, u5.rounding = l6)) : new u5(c6.s);
    }, De.inverseCosine = De.acos = function() {
      var n3 = this, l6 = n3.constructor, c6 = n3.abs().cmp(1), u5 = l6.precision, h7 = l6.rounding;
      return -1 !== c6 ? 0 === c6 ? n3.isNeg() ? getPi(l6, u5, h7) : new l6(0) : new l6(NaN) : n3.isZero() ? getPi(l6, u5 + 4, h7).times(0.5) : (l6.precision = u5 + 6, l6.rounding = 1, n3 = new l6(1).minus(n3).div(n3.plus(1)).sqrt().atan(), l6.precision = u5, l6.rounding = h7, n3.times(2));
    }, De.inverseHyperbolicCosine = De.acosh = function() {
      var n3, l6, c6 = this, u5 = c6.constructor;
      return c6.lte(1) ? new u5(c6.eq(1) ? 0 : NaN) : c6.isFinite() ? (n3 = u5.precision, l6 = u5.rounding, u5.precision = n3 + Math.max(Math.abs(c6.e), c6.sd()) + 4, u5.rounding = 1, ne2 = false, c6 = c6.times(c6).minus(1).sqrt().plus(c6), ne2 = true, u5.precision = n3, u5.rounding = l6, c6.ln()) : new u5(c6);
    }, De.inverseHyperbolicSine = De.asinh = function() {
      var n3, l6, c6 = this, u5 = c6.constructor;
      return !c6.isFinite() || c6.isZero() ? new u5(c6) : (n3 = u5.precision, l6 = u5.rounding, u5.precision = n3 + 2 * Math.max(Math.abs(c6.e), c6.sd()) + 6, u5.rounding = 1, ne2 = false, c6 = c6.times(c6).plus(1).sqrt().plus(c6), ne2 = true, u5.precision = n3, u5.rounding = l6, c6.ln());
    }, De.inverseHyperbolicTangent = De.atanh = function() {
      var n3, l6, c6, u5, h7 = this, f6 = h7.constructor;
      return h7.isFinite() ? h7.e >= 0 ? new f6(h7.abs().eq(1) ? h7.s / 0 : h7.isZero() ? h7 : NaN) : (n3 = f6.precision, l6 = f6.rounding, u5 = h7.sd(), Math.max(u5, n3) < 2 * -h7.e - 1 ? finalise(new f6(h7), n3, l6, true) : (f6.precision = c6 = u5 - h7.e, h7 = Me(h7.plus(1), new f6(1).minus(h7), c6 + n3, 1), f6.precision = n3 + 4, f6.rounding = 1, h7 = h7.ln(), f6.precision = n3, f6.rounding = l6, h7.times(0.5))) : new f6(NaN);
    }, De.inverseSine = De.asin = function() {
      var n3, l6, c6, u5, h7 = this, f6 = h7.constructor;
      return h7.isZero() ? new f6(h7) : (l6 = h7.abs().cmp(1), c6 = f6.precision, u5 = f6.rounding, -1 !== l6 ? 0 === l6 ? ((n3 = getPi(f6, c6 + 4, u5).times(0.5)).s = h7.s, n3) : new f6(NaN) : (f6.precision = c6 + 6, f6.rounding = 1, h7 = h7.div(new f6(1).minus(h7.times(h7)).sqrt().plus(1)).atan(), f6.precision = c6, f6.rounding = u5, h7.times(2)));
    }, De.inverseTangent = De.atan = function() {
      var n3, l6, c6, u5, h7, f6, p5, m7, g5, y5 = this, w5 = y5.constructor, b4 = w5.precision, v5 = w5.rounding;
      if (y5.isFinite()) {
        if (y5.isZero()) return new w5(y5);
        if (y5.abs().eq(1) && b4 + 4 <= ke) return (p5 = getPi(w5, b4 + 4, v5).times(0.25)).s = y5.s, p5;
      } else {
        if (!y5.s) return new w5(NaN);
        if (b4 + 4 <= ke) return (p5 = getPi(w5, b4 + 4, v5).times(0.5)).s = y5.s, p5;
      }
      for (w5.precision = m7 = b4 + 10, w5.rounding = 1, n3 = c6 = Math.min(28, m7 / 7 + 2 | 0); n3; --n3) y5 = y5.div(y5.times(y5).plus(1).sqrt().plus(1));
      for (ne2 = false, l6 = Math.ceil(m7 / 7), u5 = 1, g5 = y5.times(y5), p5 = new w5(y5), h7 = y5; -1 !== n3; ) if (h7 = h7.times(g5), f6 = p5.minus(h7.div(u5 += 2)), h7 = h7.times(g5), void 0 !== (p5 = f6.plus(h7.div(u5 += 2))).d[l6]) for (n3 = l6; p5.d[n3] === f6.d[n3] && n3--; ) ;
      return c6 && (p5 = p5.times(2 << c6 - 1)), ne2 = true, finalise(p5, w5.precision = b4, w5.rounding = v5, true);
    }, De.isFinite = function() {
      return !!this.d;
    }, De.isInteger = De.isInt = function() {
      return !!this.d && fe2(this.e / 7) > this.d.length - 2;
    }, De.isNaN = function() {
      return !this.s;
    }, De.isNegative = De.isNeg = function() {
      return this.s < 0;
    }, De.isPositive = De.isPos = function() {
      return this.s > 0;
    }, De.isZero = function() {
      return !!this.d && 0 === this.d[0];
    }, De.lessThan = De.lt = function(n3) {
      return this.cmp(n3) < 0;
    }, De.lessThanOrEqualTo = De.lte = function(n3) {
      return this.cmp(n3) < 1;
    }, De.logarithm = De.log = function(n3) {
      var l6, c6, u5, h7, f6, p5, m7, g5, y5 = this, w5 = y5.constructor, b4 = w5.precision, v5 = w5.rounding;
      if (null == n3) n3 = new w5(10), l6 = true;
      else {
        if (c6 = (n3 = new w5(n3)).d, n3.s < 0 || !c6 || !c6[0] || n3.eq(1)) return new w5(NaN);
        l6 = n3.eq(10);
      }
      if (c6 = y5.d, y5.s < 0 || !c6 || !c6[0] || y5.eq(1)) return new w5(c6 && !c6[0] ? -1 / 0 : 1 != y5.s ? NaN : c6 ? 0 : 1 / 0);
      if (l6) if (c6.length > 1) f6 = true;
      else {
        for (h7 = c6[0]; h7 % 10 == 0; ) h7 /= 10;
        f6 = 1 !== h7;
      }
      if (ne2 = false, p5 = naturalLogarithm(y5, m7 = b4 + 5), u5 = l6 ? getLn10(w5, m7 + 10) : naturalLogarithm(n3, m7), checkRoundingDigits((g5 = Me(p5, u5, m7, 1)).d, h7 = b4, v5)) do {
        if (p5 = naturalLogarithm(y5, m7 += 10), u5 = l6 ? getLn10(w5, m7 + 10) : naturalLogarithm(n3, m7), g5 = Me(p5, u5, m7, 1), !f6) {
          +digitsToString(g5.d).slice(h7 + 1, h7 + 15) + 1 == 1e14 && (g5 = finalise(g5, b4 + 1, 0));
          break;
        }
      } while (checkRoundingDigits(g5.d, h7 += 10, v5));
      return ne2 = true, finalise(g5, b4, v5);
    }, De.minus = De.sub = function(n3) {
      var l6, c6, u5, h7, f6, p5, m7, g5, y5, w5, b4, v5, _4 = this, S6 = _4.constructor;
      if (n3 = new S6(n3), !_4.d || !n3.d) return _4.s && n3.s ? _4.d ? n3.s = -n3.s : n3 = new S6(n3.d || _4.s !== n3.s ? _4 : NaN) : n3 = new S6(NaN), n3;
      if (_4.s != n3.s) return n3.s = -n3.s, _4.plus(n3);
      if (y5 = _4.d, v5 = n3.d, m7 = S6.precision, g5 = S6.rounding, !y5[0] || !v5[0]) {
        if (v5[0]) n3.s = -n3.s;
        else {
          if (!y5[0]) return new S6(3 === g5 ? -0 : 0);
          n3 = new S6(_4);
        }
        return ne2 ? finalise(n3, m7, g5) : n3;
      }
      if (c6 = fe2(n3.e / 7), w5 = fe2(_4.e / 7), y5 = y5.slice(), f6 = w5 - c6) {
        for ((b4 = f6 < 0) ? (l6 = y5, f6 = -f6, p5 = v5.length) : (l6 = v5, c6 = w5, p5 = y5.length), f6 > (u5 = Math.max(Math.ceil(m7 / 7), p5) + 2) && (f6 = u5, l6.length = 1), l6.reverse(), u5 = f6; u5--; ) l6.push(0);
        l6.reverse();
      } else {
        for ((b4 = (u5 = y5.length) < (p5 = v5.length)) && (p5 = u5), u5 = 0; u5 < p5; u5++) if (y5[u5] != v5[u5]) {
          b4 = y5[u5] < v5[u5];
          break;
        }
        f6 = 0;
      }
      for (b4 && (l6 = y5, y5 = v5, v5 = l6, n3.s = -n3.s), p5 = y5.length, u5 = v5.length - p5; u5 > 0; --u5) y5[p5++] = 0;
      for (u5 = v5.length; u5 > f6; ) {
        if (y5[--u5] < v5[u5]) {
          for (h7 = u5; h7 && 0 === y5[--h7]; ) y5[h7] = Ae - 1;
          --y5[h7], y5[u5] += Ae;
        }
        y5[u5] -= v5[u5];
      }
      for (; 0 === y5[--p5]; ) y5.pop();
      for (; 0 === y5[0]; y5.shift()) --c6;
      return y5[0] ? (n3.d = y5, n3.e = getBase10Exponent(y5, c6), ne2 ? finalise(n3, m7, g5) : n3) : new S6(3 === g5 ? -0 : 0);
    }, De.modulo = De.mod = function(n3) {
      var l6, c6 = this, u5 = c6.constructor;
      return n3 = new u5(n3), !c6.d || !n3.s || n3.d && !n3.d[0] ? new u5(NaN) : !n3.d || c6.d && !c6.d[0] ? finalise(new u5(c6), u5.precision, u5.rounding) : (ne2 = false, 9 == u5.modulo ? (l6 = Me(c6, n3.abs(), 0, 3, 1)).s *= n3.s : l6 = Me(c6, n3, 0, u5.modulo, 1), l6 = l6.times(n3), ne2 = true, c6.minus(l6));
    }, De.naturalExponential = De.exp = function() {
      return naturalExponential(this);
    }, De.naturalLogarithm = De.ln = function() {
      return naturalLogarithm(this);
    }, De.negated = De.neg = function() {
      var n3 = new this.constructor(this);
      return n3.s = -n3.s, finalise(n3);
    }, De.plus = De.add = function(n3) {
      var l6, c6, u5, h7, f6, p5, m7, g5, y5, w5, b4 = this, v5 = b4.constructor;
      if (n3 = new v5(n3), !b4.d || !n3.d) return b4.s && n3.s ? b4.d || (n3 = new v5(n3.d || b4.s === n3.s ? b4 : NaN)) : n3 = new v5(NaN), n3;
      if (b4.s != n3.s) return n3.s = -n3.s, b4.minus(n3);
      if (y5 = b4.d, w5 = n3.d, m7 = v5.precision, g5 = v5.rounding, !y5[0] || !w5[0]) return w5[0] || (n3 = new v5(b4)), ne2 ? finalise(n3, m7, g5) : n3;
      if (f6 = fe2(b4.e / 7), u5 = fe2(n3.e / 7), y5 = y5.slice(), h7 = f6 - u5) {
        for (h7 < 0 ? (c6 = y5, h7 = -h7, p5 = w5.length) : (c6 = w5, u5 = f6, p5 = y5.length), h7 > (p5 = (f6 = Math.ceil(m7 / 7)) > p5 ? f6 + 1 : p5 + 1) && (h7 = p5, c6.length = 1), c6.reverse(); h7--; ) c6.push(0);
        c6.reverse();
      }
      for ((p5 = y5.length) - (h7 = w5.length) < 0 && (h7 = p5, c6 = w5, w5 = y5, y5 = c6), l6 = 0; h7; ) l6 = (y5[--h7] = y5[h7] + w5[h7] + l6) / Ae | 0, y5[h7] %= Ae;
      for (l6 && (y5.unshift(l6), ++u5), p5 = y5.length; 0 == y5[--p5]; ) y5.pop();
      return n3.d = y5, n3.e = getBase10Exponent(y5, u5), ne2 ? finalise(n3, m7, g5) : n3;
    }, De.precision = De.sd = function(n3) {
      var l6, c6 = this;
      if (void 0 !== n3 && n3 !== !!n3 && 1 !== n3 && 0 !== n3) throw Error(se2 + n3);
      return c6.d ? (l6 = getPrecision(c6.d), n3 && c6.e + 1 > l6 && (l6 = c6.e + 1)) : l6 = NaN, l6;
    }, De.round = function() {
      var n3 = this, l6 = n3.constructor;
      return finalise(new l6(n3), n3.e + 1, l6.rounding);
    }, De.sine = De.sin = function() {
      var n3, l6, c6 = this, u5 = c6.constructor;
      return c6.isFinite() ? c6.isZero() ? new u5(c6) : (n3 = u5.precision, l6 = u5.rounding, u5.precision = n3 + Math.max(c6.e, c6.sd()) + 7, u5.rounding = 1, c6 = (function(n4, l7) {
        var c7, u6 = l7.d.length;
        if (u6 < 3) return l7.isZero() ? l7 : taylorSeries(n4, 2, l7, l7);
        c7 = (c7 = 1.4 * Math.sqrt(u6)) > 16 ? 16 : 0 | c7, l7 = l7.times(1 / tinyPow(5, c7)), l7 = taylorSeries(n4, 2, l7, l7);
        for (var h7, f6 = new n4(5), p5 = new n4(16), m7 = new n4(20); c7--; ) h7 = l7.times(l7), l7 = l7.times(f6.plus(h7.times(p5.times(h7).minus(m7))));
        return l7;
      })(u5, toLessThanHalfPi(u5, c6)), u5.precision = n3, u5.rounding = l6, finalise(W2 > 2 ? c6.neg() : c6, n3, l6, true)) : new u5(NaN);
    }, De.squareRoot = De.sqrt = function() {
      var n3, l6, c6, u5, h7, f6, p5 = this, m7 = p5.d, g5 = p5.e, y5 = p5.s, w5 = p5.constructor;
      if (1 !== y5 || !m7 || !m7[0]) return new w5(!y5 || y5 < 0 && (!m7 || m7[0]) ? NaN : m7 ? p5 : 1 / 0);
      for (ne2 = false, 0 == (y5 = Math.sqrt(+p5)) || y5 == 1 / 0 ? (((l6 = digitsToString(m7)).length + g5) % 2 == 0 && (l6 += "0"), y5 = Math.sqrt(l6), g5 = fe2((g5 + 1) / 2) - (g5 < 0 || g5 % 2), u5 = new w5(l6 = y5 == 1 / 0 ? "5e" + g5 : (l6 = y5.toExponential()).slice(0, l6.indexOf("e") + 1) + g5)) : u5 = new w5(y5.toString()), c6 = (g5 = w5.precision) + 3; ; ) if (u5 = (f6 = u5).plus(Me(p5, f6, c6 + 2, 1)).times(0.5), digitsToString(f6.d).slice(0, c6) === (l6 = digitsToString(u5.d)).slice(0, c6)) {
        if ("9999" != (l6 = l6.slice(c6 - 3, c6 + 1)) && (h7 || "4999" != l6)) {
          +l6 && (+l6.slice(1) || "5" != l6.charAt(0)) || (finalise(u5, g5 + 1, 1), n3 = !u5.times(u5).eq(p5));
          break;
        }
        if (!h7 && (finalise(f6, g5 + 1, 0), f6.times(f6).eq(p5))) {
          u5 = f6;
          break;
        }
        c6 += 4, h7 = 1;
      }
      return ne2 = true, finalise(u5, g5, w5.rounding, n3);
    }, De.tangent = De.tan = function() {
      var n3, l6, c6 = this, u5 = c6.constructor;
      return c6.isFinite() ? c6.isZero() ? new u5(c6) : (n3 = u5.precision, l6 = u5.rounding, u5.precision = n3 + 10, u5.rounding = 1, (c6 = c6.sin()).s = 1, c6 = Me(c6, new u5(1).minus(c6.times(c6)).sqrt(), n3 + 10, 0), u5.precision = n3, u5.rounding = l6, finalise(2 == W2 || 4 == W2 ? c6.neg() : c6, n3, l6, true)) : new u5(NaN);
    }, De.times = De.mul = function(n3) {
      var l6, c6, u5, h7, f6, p5, m7, g5, y5, w5 = this, b4 = w5.constructor, v5 = w5.d, _4 = (n3 = new b4(n3)).d;
      if (n3.s *= w5.s, !(v5 && v5[0] && _4 && _4[0])) return new b4(!n3.s || v5 && !v5[0] && !_4 || _4 && !_4[0] && !v5 ? NaN : v5 && _4 ? 0 * n3.s : n3.s / 0);
      for (c6 = fe2(w5.e / 7) + fe2(n3.e / 7), (g5 = v5.length) < (y5 = _4.length) && (f6 = v5, v5 = _4, _4 = f6, p5 = g5, g5 = y5, y5 = p5), f6 = [], u5 = p5 = g5 + y5; u5--; ) f6.push(0);
      for (u5 = y5; --u5 >= 0; ) {
        for (l6 = 0, h7 = g5 + u5; h7 > u5; ) m7 = f6[h7] + _4[u5] * v5[h7 - u5 - 1] + l6, f6[h7--] = m7 % Ae | 0, l6 = m7 / Ae | 0;
        f6[h7] = (f6[h7] + l6) % Ae | 0;
      }
      for (; !f6[--p5]; ) f6.pop();
      return l6 ? ++c6 : f6.shift(), n3.d = f6, n3.e = getBase10Exponent(f6, c6), ne2 ? finalise(n3, b4.precision, b4.rounding) : n3;
    }, De.toBinary = function(n3, l6) {
      return toStringBinary(this, 2, n3, l6);
    }, De.toDecimalPlaces = De.toDP = function(n3, l6) {
      var c6 = this, u5 = c6.constructor;
      return c6 = new u5(c6), void 0 === n3 ? c6 : (checkInt32(n3, 0, G2), void 0 === l6 ? l6 = u5.rounding : checkInt32(l6, 0, 8), finalise(c6, n3 + c6.e + 1, l6));
    }, De.toExponential = function(n3, l6) {
      var c6, u5 = this, h7 = u5.constructor;
      return void 0 === n3 ? c6 = finiteToString(u5, true) : (checkInt32(n3, 0, G2), void 0 === l6 ? l6 = h7.rounding : checkInt32(l6, 0, 8), c6 = finiteToString(u5 = finalise(new h7(u5), n3 + 1, l6), true, n3 + 1)), u5.isNeg() && !u5.isZero() ? "-" + c6 : c6;
    }, De.toFixed = function(n3, l6) {
      var c6, u5, h7 = this, f6 = h7.constructor;
      return void 0 === n3 ? c6 = finiteToString(h7) : (checkInt32(n3, 0, G2), void 0 === l6 ? l6 = f6.rounding : checkInt32(l6, 0, 8), c6 = finiteToString(u5 = finalise(new f6(h7), n3 + h7.e + 1, l6), false, n3 + u5.e + 1)), h7.isNeg() && !h7.isZero() ? "-" + c6 : c6;
    }, De.toFraction = function(n3) {
      var l6, c6, u5, h7, f6, p5, m7, g5, y5, w5, b4, v5, _4 = this, S6 = _4.d, E5 = _4.constructor;
      if (!S6) return new E5(_4);
      if (y5 = c6 = new E5(1), u5 = g5 = new E5(0), p5 = (f6 = (l6 = new E5(u5)).e = getPrecision(S6) - _4.e - 1) % 7, l6.d[0] = ge(10, p5 < 0 ? 7 + p5 : p5), null == n3) n3 = f6 > 0 ? l6 : y5;
      else {
        if (!(m7 = new E5(n3)).isInt() || m7.lt(y5)) throw Error(se2 + m7);
        n3 = m7.gt(l6) ? f6 > 0 ? l6 : y5 : m7;
      }
      for (ne2 = false, m7 = new E5(digitsToString(S6)), w5 = E5.precision, E5.precision = f6 = 7 * S6.length * 2; b4 = Me(m7, l6, 0, 1, 1), 1 != (h7 = c6.plus(b4.times(u5))).cmp(n3); ) c6 = u5, u5 = h7, h7 = y5, y5 = g5.plus(b4.times(h7)), g5 = h7, h7 = l6, l6 = m7.minus(b4.times(h7)), m7 = h7;
      return h7 = Me(n3.minus(c6), u5, 0, 1, 1), g5 = g5.plus(h7.times(y5)), c6 = c6.plus(h7.times(u5)), g5.s = y5.s = _4.s, v5 = Me(y5, u5, f6, 1).minus(_4).abs().cmp(Me(g5, c6, f6, 1).minus(_4).abs()) < 1 ? [y5, u5] : [g5, c6], E5.precision = w5, ne2 = true, v5;
    }, De.toHexadecimal = De.toHex = function(n3, l6) {
      return toStringBinary(this, 16, n3, l6);
    }, De.toNearest = function(n3, l6) {
      var c6 = this, u5 = c6.constructor;
      if (c6 = new u5(c6), null == n3) {
        if (!c6.d) return c6;
        n3 = new u5(1), l6 = u5.rounding;
      } else {
        if (n3 = new u5(n3), void 0 === l6 ? l6 = u5.rounding : checkInt32(l6, 0, 8), !c6.d) return n3.s ? c6 : n3;
        if (!n3.d) return n3.s && (n3.s = c6.s), n3;
      }
      return n3.d[0] ? (ne2 = false, c6 = Me(c6, n3, 0, l6, 1).times(n3), ne2 = true, finalise(c6)) : (n3.s = c6.s, c6 = n3), c6;
    }, De.toNumber = function() {
      return +this;
    }, De.toOctal = function(n3, l6) {
      return toStringBinary(this, 8, n3, l6);
    }, De.toPower = De.pow = function(n3) {
      var l6, c6, u5, h7, f6, p5, m7 = this, g5 = m7.constructor, y5 = +(n3 = new g5(n3));
      if (!(m7.d && n3.d && m7.d[0] && n3.d[0])) return new g5(ge(+m7, y5));
      if ((m7 = new g5(m7)).eq(1)) return m7;
      if (u5 = g5.precision, f6 = g5.rounding, n3.eq(1)) return finalise(m7, u5, f6);
      if ((l6 = fe2(n3.e / 7)) >= n3.d.length - 1 && (c6 = y5 < 0 ? -y5 : y5) <= 9007199254740991) return h7 = intPow(g5, m7, c6, u5), n3.s < 0 ? new g5(1).div(h7) : finalise(h7, u5, f6);
      if ((p5 = m7.s) < 0) {
        if (l6 < n3.d.length - 1) return new g5(NaN);
        if (1 & n3.d[l6] || (p5 = 1), 0 == m7.e && 1 == m7.d[0] && 1 == m7.d.length) return m7.s = p5, m7;
      }
      return (l6 = 0 != (c6 = ge(+m7, y5)) && isFinite(c6) ? new g5(c6 + "").e : fe2(y5 * (Math.log("0." + digitsToString(m7.d)) / Math.LN10 + m7.e + 1))) > g5.maxE + 1 || l6 < g5.minE - 1 ? new g5(l6 > 0 ? p5 / 0 : 0) : (ne2 = false, g5.rounding = m7.s = 1, c6 = Math.min(12, (l6 + "").length), (h7 = naturalExponential(n3.times(naturalLogarithm(m7, u5 + c6)), u5)).d && checkRoundingDigits((h7 = finalise(h7, u5 + 5, 1)).d, u5, f6) && (l6 = u5 + 10, +digitsToString((h7 = finalise(naturalExponential(n3.times(naturalLogarithm(m7, l6 + c6)), l6), l6 + 5, 1)).d).slice(u5 + 1, u5 + 15) + 1 == 1e14 && (h7 = finalise(h7, u5 + 1, 0))), h7.s = p5, ne2 = true, g5.rounding = f6, finalise(h7, u5, f6));
    }, De.toPrecision = function(n3, l6) {
      var c6, u5 = this, h7 = u5.constructor;
      return void 0 === n3 ? c6 = finiteToString(u5, u5.e <= h7.toExpNeg || u5.e >= h7.toExpPos) : (checkInt32(n3, 1, G2), void 0 === l6 ? l6 = h7.rounding : checkInt32(l6, 0, 8), c6 = finiteToString(u5 = finalise(new h7(u5), n3, l6), n3 <= u5.e || u5.e <= h7.toExpNeg, n3)), u5.isNeg() && !u5.isZero() ? "-" + c6 : c6;
    }, De.toSignificantDigits = De.toSD = function(n3, l6) {
      var c6 = this.constructor;
      return void 0 === n3 ? (n3 = c6.precision, l6 = c6.rounding) : (checkInt32(n3, 1, G2), void 0 === l6 ? l6 = c6.rounding : checkInt32(l6, 0, 8)), finalise(new c6(this), n3, l6);
    }, De.toString = function() {
      var n3 = this, l6 = n3.constructor, c6 = finiteToString(n3, n3.e <= l6.toExpNeg || n3.e >= l6.toExpPos);
      return n3.isNeg() && !n3.isZero() ? "-" + c6 : c6;
    }, De.truncated = De.trunc = function() {
      return finalise(new this.constructor(this), this.e + 1, 1);
    }, De.valueOf = De.toJSON = function() {
      var n3 = this, l6 = n3.constructor, c6 = finiteToString(n3, n3.e <= l6.toExpNeg || n3.e >= l6.toExpPos);
      return n3.isNeg() ? "-" + c6 : c6;
    };
    Me = /* @__PURE__ */ (function() {
      function multiplyInteger(n3, l6, c6) {
        var u5, h7 = 0, f6 = n3.length;
        for (n3 = n3.slice(); f6--; ) u5 = n3[f6] * l6 + h7, n3[f6] = u5 % c6 | 0, h7 = u5 / c6 | 0;
        return h7 && n3.unshift(h7), n3;
      }
      __name(multiplyInteger, "multiplyInteger");
      function compare(n3, l6, c6, u5) {
        var h7, f6;
        if (c6 != u5) f6 = c6 > u5 ? 1 : -1;
        else for (h7 = f6 = 0; h7 < c6; h7++) if (n3[h7] != l6[h7]) {
          f6 = n3[h7] > l6[h7] ? 1 : -1;
          break;
        }
        return f6;
      }
      __name(compare, "compare");
      function subtract(n3, l6, c6, u5) {
        for (var h7 = 0; c6--; ) n3[c6] -= h7, h7 = n3[c6] < l6[c6] ? 1 : 0, n3[c6] = h7 * u5 + n3[c6] - l6[c6];
        for (; !n3[0] && n3.length > 1; ) n3.shift();
      }
      __name(subtract, "subtract");
      return function(n3, l6, c6, u5, h7, f6) {
        var p5, m7, g5, y5, w5, b4, v5, _4, S6, E5, T5, x5, P5, A4, I5, C5, N5, k5, O6, R5, M4 = n3.constructor, $5 = n3.s == l6.s ? 1 : -1, q5 = n3.d, U5 = l6.d;
        if (!(q5 && q5[0] && U5 && U5[0])) return new M4(n3.s && l6.s && (q5 ? !U5 || q5[0] != U5[0] : U5) ? q5 && 0 == q5[0] || !U5 ? 0 * $5 : $5 / 0 : NaN);
        for (f6 ? (w5 = 1, m7 = n3.e - l6.e) : (f6 = Ae, w5 = 7, m7 = fe2(n3.e / w5) - fe2(l6.e / w5)), O6 = U5.length, N5 = q5.length, E5 = (S6 = new M4($5)).d = [], g5 = 0; U5[g5] == (q5[g5] || 0); g5++) ;
        if (U5[g5] > (q5[g5] || 0) && m7--, null == c6 ? (A4 = c6 = M4.precision, u5 = M4.rounding) : A4 = h7 ? c6 + (n3.e - l6.e) + 1 : c6, A4 < 0) E5.push(1), b4 = true;
        else {
          if (A4 = A4 / w5 + 2 | 0, g5 = 0, 1 == O6) {
            for (y5 = 0, U5 = U5[0], A4++; (g5 < N5 || y5) && A4--; g5++) I5 = y5 * f6 + (q5[g5] || 0), E5[g5] = I5 / U5 | 0, y5 = I5 % U5 | 0;
            b4 = y5 || g5 < N5;
          } else {
            for ((y5 = f6 / (U5[0] + 1) | 0) > 1 && (U5 = multiplyInteger(U5, y5, f6), q5 = multiplyInteger(q5, y5, f6), O6 = U5.length, N5 = q5.length), C5 = O6, x5 = (T5 = q5.slice(0, O6)).length; x5 < O6; ) T5[x5++] = 0;
            (R5 = U5.slice()).unshift(0), k5 = U5[0], U5[1] >= f6 / 2 && ++k5;
            do {
              y5 = 0, (p5 = compare(U5, T5, O6, x5)) < 0 ? (P5 = T5[0], O6 != x5 && (P5 = P5 * f6 + (T5[1] || 0)), (y5 = P5 / k5 | 0) > 1 ? (y5 >= f6 && (y5 = f6 - 1), 1 == (p5 = compare(v5 = multiplyInteger(U5, y5, f6), T5, _4 = v5.length, x5 = T5.length)) && (y5--, subtract(v5, O6 < _4 ? R5 : U5, _4, f6))) : (0 == y5 && (p5 = y5 = 1), v5 = U5.slice()), (_4 = v5.length) < x5 && v5.unshift(0), subtract(T5, v5, x5, f6), -1 == p5 && (p5 = compare(U5, T5, O6, x5 = T5.length)) < 1 && (y5++, subtract(T5, O6 < x5 ? R5 : U5, x5, f6)), x5 = T5.length) : 0 === p5 && (y5++, T5 = [0]), E5[g5++] = y5, p5 && T5[0] ? T5[x5++] = q5[C5] || 0 : (T5 = [q5[C5]], x5 = 1);
            } while ((C5++ < N5 || void 0 !== T5[0]) && A4--);
            b4 = void 0 !== T5[0];
          }
          E5[0] || E5.shift();
        }
        if (1 == w5) S6.e = m7, V2 = b4;
        else {
          for (g5 = 1, y5 = E5[0]; y5 >= 10; y5 /= 10) g5++;
          S6.e = g5 + m7 * w5 - 1, finalise(S6, h7 ? c6 + S6.e + 1 : c6, u5, b4);
        }
        return S6;
      };
    })();
    __name(finalise, "finalise");
    __name(finiteToString, "finiteToString");
    __name(getBase10Exponent, "getBase10Exponent");
    __name(getLn10, "getLn10");
    __name(getPi, "getPi");
    __name(getPrecision, "getPrecision");
    __name(getZeroString, "getZeroString");
    __name(intPow, "intPow");
    __name(isOdd, "isOdd");
    __name(maxOrMin, "maxOrMin");
    __name(naturalExponential, "naturalExponential");
    __name(naturalLogarithm, "naturalLogarithm");
    __name(nonFiniteToString, "nonFiniteToString");
    __name(parseDecimal, "parseDecimal");
    __name(taylorSeries, "taylorSeries");
    __name(tinyPow, "tinyPow");
    __name(toLessThanHalfPi, "toLessThanHalfPi");
    __name(toStringBinary, "toStringBinary");
    __name(truncate$2, "truncate$2");
    __name(abs, "abs");
    __name(acos, "acos");
    __name(acosh, "acosh");
    __name(add$1, "add$1");
    __name(asin, "asin");
    __name(asinh, "asinh");
    __name(atan, "atan");
    __name(atanh, "atanh");
    __name(atan2, "atan2");
    __name(cbrt, "cbrt");
    __name(ceil, "ceil");
    __name(clamp, "clamp");
    __name(config$1, "config$1");
    __name(cos, "cos");
    __name(cosh, "cosh");
    __name(div, "div");
    __name(exp, "exp");
    __name(floor, "floor");
    __name(hypot, "hypot");
    __name(isDecimalInstance, "isDecimalInstance");
    __name(ln$1, "ln$1");
    __name(log$1, "log$1");
    __name(log2, "log2");
    __name(log10, "log10");
    __name(max, "max");
    __name(min, "min");
    __name(mod, "mod");
    __name(mul, "mul");
    __name(pow, "pow");
    __name(random, "random");
    __name(round, "round");
    __name(sign, "sign");
    __name(sin, "sin");
    __name(sinh, "sinh");
    __name(sqrt, "sqrt");
    __name(sub, "sub");
    __name(sum, "sum");
    __name(tan, "tan");
    __name(tanh, "tanh");
    __name(trunc, "trunc");
    De[Symbol.for("nodejs.util.inspect.custom")] = De.toString, De[Symbol.toStringTag] = "Decimal";
    Le = De.constructor = (/* @__PURE__ */ __name(function clone(n3) {
      var l6, c6, u5;
      function Decimal2(n4) {
        var l7, c7, u6, h7 = this;
        if (!(h7 instanceof Decimal2)) return new Decimal2(n4);
        if (h7.constructor = Decimal2, isDecimalInstance(n4)) return h7.s = n4.s, void (ne2 ? !n4.d || n4.e > Decimal2.maxE ? (h7.e = NaN, h7.d = null) : n4.e < Decimal2.minE ? (h7.e = 0, h7.d = [0]) : (h7.e = n4.e, h7.d = n4.d.slice()) : (h7.e = n4.e, h7.d = n4.d ? n4.d.slice() : n4.d));
        if ("number" === (u6 = typeof n4)) {
          if (0 === n4) return h7.s = 1 / n4 < 0 ? -1 : 1, h7.e = 0, void (h7.d = [0]);
          if (n4 < 0 ? (n4 = -n4, h7.s = -1) : h7.s = 1, n4 === ~~n4 && n4 < 1e7) {
            for (l7 = 0, c7 = n4; c7 >= 10; c7 /= 10) l7++;
            return void (ne2 ? l7 > Decimal2.maxE ? (h7.e = NaN, h7.d = null) : l7 < Decimal2.minE ? (h7.e = 0, h7.d = [0]) : (h7.e = l7, h7.d = [n4]) : (h7.e = l7, h7.d = [n4]));
          }
          return 0 * n4 != 0 ? (n4 || (h7.s = NaN), h7.e = NaN, void (h7.d = null)) : parseDecimal(h7, n4.toString());
        }
        if ("string" === u6) return 45 === (c7 = n4.charCodeAt(0)) ? (n4 = n4.slice(1), h7.s = -1) : (43 === c7 && (n4 = n4.slice(1)), h7.s = 1), Pe.test(n4) ? parseDecimal(h7, n4) : (function(n5, l8) {
          var c8, u7, h8, f6, p5, m7, g5, y5, w5;
          if (l8.indexOf("_") > -1) {
            if (l8 = l8.replace(/(\d)_(?=\d)/g, "$1"), Pe.test(l8)) return parseDecimal(n5, l8);
          } else if ("Infinity" === l8 || "NaN" === l8) return +l8 || (n5.s = NaN), n5.e = NaN, n5.d = null, n5;
          if (Ee.test(l8)) c8 = 16, l8 = l8.toLowerCase();
          else if (Se.test(l8)) c8 = 2;
          else {
            if (!xe.test(l8)) throw Error(se2 + l8);
            c8 = 8;
          }
          for ((f6 = l8.search(/p/i)) > 0 ? (g5 = +l8.slice(f6 + 1), l8 = l8.substring(2, f6)) : l8 = l8.slice(2), p5 = (f6 = l8.indexOf(".")) >= 0, u7 = n5.constructor, p5 && (f6 = (m7 = (l8 = l8.replace(".", "")).length) - f6, h8 = intPow(u7, new u7(c8), f6, 2 * f6)), f6 = w5 = (y5 = convertBase(l8, c8, Ae)).length - 1; 0 === y5[f6]; --f6) y5.pop();
          return f6 < 0 ? new u7(0 * n5.s) : (n5.e = getBase10Exponent(y5, w5), n5.d = y5, ne2 = false, p5 && (n5 = Me(n5, h8, 4 * m7)), g5 && (n5 = n5.times(Math.abs(g5) < 54 ? ge(2, g5) : Le.pow(2, g5))), ne2 = true, n5);
        })(h7, n4);
        if ("bigint" === u6) return n4 < 0 ? (n4 = -n4, h7.s = -1) : h7.s = 1, parseDecimal(h7, n4.toString());
        throw Error(se2 + n4);
      }
      __name(Decimal2, "Decimal2");
      if (Decimal2.prototype = De, Decimal2.ROUND_UP = 0, Decimal2.ROUND_DOWN = 1, Decimal2.ROUND_CEIL = 2, Decimal2.ROUND_FLOOR = 3, Decimal2.ROUND_HALF_UP = 4, Decimal2.ROUND_HALF_DOWN = 5, Decimal2.ROUND_HALF_EVEN = 6, Decimal2.ROUND_HALF_CEIL = 7, Decimal2.ROUND_HALF_FLOOR = 8, Decimal2.EUCLID = 9, Decimal2.config = Decimal2.set = config$1, Decimal2.clone = clone, Decimal2.isDecimal = isDecimalInstance, Decimal2.abs = abs, Decimal2.acos = acos, Decimal2.acosh = acosh, Decimal2.add = add$1, Decimal2.asin = asin, Decimal2.asinh = asinh, Decimal2.atan = atan, Decimal2.atanh = atanh, Decimal2.atan2 = atan2, Decimal2.cbrt = cbrt, Decimal2.ceil = ceil, Decimal2.clamp = clamp, Decimal2.cos = cos, Decimal2.cosh = cosh, Decimal2.div = div, Decimal2.exp = exp, Decimal2.floor = floor, Decimal2.hypot = hypot, Decimal2.ln = ln$1, Decimal2.log = log$1, Decimal2.log10 = log10, Decimal2.log2 = log2, Decimal2.max = max, Decimal2.min = min, Decimal2.mod = mod, Decimal2.mul = mul, Decimal2.pow = pow, Decimal2.random = random, Decimal2.round = round, Decimal2.sign = sign, Decimal2.sin = sin, Decimal2.sinh = sinh, Decimal2.sqrt = sqrt, Decimal2.sub = sub, Decimal2.sum = sum, Decimal2.tan = tan, Decimal2.tanh = tanh, Decimal2.trunc = trunc, void 0 === n3 && (n3 = {}), n3 && true !== n3.defaults) for (u5 = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], l6 = 0; l6 < u5.length; ) n3.hasOwnProperty(c6 = u5[l6++]) || (n3[c6] = this[c6]);
      return Decimal2.config(n3), Decimal2;
    }, "clone"))(ee2);
    Z2 = new Le(Z2), X2 = new Le(X2);
    Fe = class _Sql {
      static {
        __name(this, "_Sql");
      }
      constructor(n3, l6) {
        if (n3.length - 1 !== l6.length) {
          if (0 === n3.length) throw new TypeError("Expected at least 1 string");
          throw new TypeError(`Expected ${n3.length} strings to have ${n3.length - 1} values`);
        }
        const c6 = l6.reduce((n4, l7) => n4 + (l7 instanceof _Sql ? l7.values.length : 1), 0);
        this.values = new Array(c6), this.strings = new Array(c6 + 1), this.strings[0] = n3[0];
        let u5 = 0, h7 = 0;
        for (; u5 < l6.length; ) {
          const c7 = l6[u5++], f6 = n3[u5];
          if (c7 instanceof _Sql) {
            this.strings[h7] += c7.strings[0];
            let n4 = 0;
            for (; n4 < c7.values.length; ) this.values[h7++] = c7.values[n4++], this.strings[h7] = c7.strings[n4];
            this.strings[h7] += f6;
          } else this.values[h7++] = c7, this.strings[h7] = f6;
        }
      }
      get sql() {
        const n3 = this.strings.length;
        let l6 = 1, c6 = this.strings[0];
        for (; l6 < n3; ) c6 += `?${this.strings[l6++]}`;
        return c6;
      }
      get statement() {
        const n3 = this.strings.length;
        let l6 = 1, c6 = this.strings[0];
        for (; l6 < n3; ) c6 += `:${l6}${this.strings[l6++]}`;
        return c6;
      }
      get text() {
        const n3 = this.strings.length;
        let l6 = 1, c6 = this.strings[0];
        for (; l6 < n3; ) c6 += `$${l6}${this.strings[l6++]}`;
        return c6;
      }
      inspect() {
        return { sql: this.sql, statement: this.statement, text: this.text, values: this.values };
      }
    };
    new Fe([""], []);
    je = Object.create;
    Be = Object.defineProperty;
    Ve = Object.getOwnPropertyDescriptor;
    Qe = Object.getOwnPropertyNames;
    He = Object.getPrototypeOf;
    We = Object.prototype.hasOwnProperty;
    pe = /* @__PURE__ */ __name((n3, l6) => () => (n3 && (l6 = n3(n3 = 0)), l6), "pe");
    re2 = /* @__PURE__ */ __name((n3, l6) => () => (l6 || n3((l6 = { exports: {} }).exports, l6), l6.exports), "re");
    Et = /* @__PURE__ */ __name((n3, l6) => {
      for (var c6 in l6) Be(n3, c6, { get: l6[c6], enumerable: true });
    }, "Et");
    Fi = /* @__PURE__ */ __name((n3, l6, c6, u5) => {
      if (l6 && "object" == typeof l6 || "function" == typeof l6) for (let h7 of Qe(l6)) !We.call(n3, h7) && h7 !== c6 && Be(n3, h7, { get: /* @__PURE__ */ __name(() => l6[h7], "get"), enumerable: !(u5 = Ve(l6, h7)) || u5.enumerable });
      return n3;
    }, "Fi");
    Ne = /* @__PURE__ */ __name((n3, l6, c6) => (c6 = null != n3 ? je(He(n3)) : {}, Fi(!l6 && n3 && n3.__esModule ? c6 : Be(c6, "default", { value: n3, enumerable: true }), n3)), "Ne");
    __name(yn, "yn");
    __name(tu, "tu");
    __name($i, "$i");
    __name(lr, "lr");
    __name(J2, "J");
    __name(Q2, "Q");
    __name(te2, "te");
    __name(Ui, "Ui");
    __name(lu, "lu");
    wt = pe(() => {
      ze = class e11 extends Uint8Array {
        static {
          __name(this, "e");
        }
        _isBuffer = true;
        get offset() {
          return this.byteOffset;
        }
        static alloc(n3, l6 = 0, c6 = "utf8") {
          return Ui(c6, "encoding"), e11.allocUnsafe(n3).fill(l6, c6);
        }
        static allocUnsafe(n3) {
          return e11.from(n3);
        }
        static allocUnsafeSlow(n3) {
          return e11.from(n3);
        }
        static isBuffer(n3) {
          return n3 && !!n3._isBuffer;
        }
        static byteLength(n3, l6 = "utf8") {
          if ("string" == typeof n3) return yn(n3, l6).byteLength;
          if (n3 && n3.byteLength) return n3.byteLength;
          let c6 = new TypeError('The "string" argument must be of type string or an instance of Buffer or ArrayBuffer.');
          throw c6.code = "ERR_INVALID_ARG_TYPE", c6;
        }
        static isEncoding(n3) {
          return tt.includes(n3);
        }
        static compare(n3, l6) {
          lr(n3, "buff1"), lr(l6, "buff2");
          for (let c6 = 0; c6 < n3.length; c6++) {
            if (n3[c6] < l6[c6]) return -1;
            if (n3[c6] > l6[c6]) return 1;
          }
          return n3.length === l6.length ? 0 : n3.length > l6.length ? 1 : -1;
        }
        static from(n3, l6 = "utf8") {
          if (n3 && "object" == typeof n3 && "Buffer" === n3.type) return new e11(n3.data);
          if ("number" == typeof n3) return new e11(new Uint8Array(n3));
          if ("string" == typeof n3) return yn(n3, l6);
          if (ArrayBuffer.isView(n3)) {
            let { byteOffset: l7, byteLength: c6, buffer: u5 } = n3;
            return "map" in n3 && "function" == typeof n3.map ? new e11(n3.map((n4) => n4 % 256), l7, c6) : new e11(u5, l7, c6);
          }
          if (n3 && "object" == typeof n3 && ("length" in n3 || "byteLength" in n3 || "buffer" in n3)) return new e11(n3);
          throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
        }
        static concat(n3, l6) {
          if (0 === n3.length) return e11.alloc(0);
          let c6 = [].concat(...n3.map((n4) => [...n4])), u5 = e11.alloc(void 0 !== l6 ? l6 : c6.length);
          return u5.set(void 0 !== l6 ? c6.slice(0, l6) : c6), u5;
        }
        slice(n3 = 0, l6 = this.length) {
          return this.subarray(n3, l6);
        }
        subarray(n3 = 0, l6 = this.length) {
          return Object.setPrototypeOf(super.subarray(n3, l6), e11.prototype);
        }
        reverse() {
          return super.reverse(), this;
        }
        readIntBE(n3, l6) {
          Q2(n3, "offset"), te2(n3, "offset"), J2(n3, "offset", this.length - 1), Q2(l6, "byteLength"), te2(l6, "byteLength");
          let c6 = new DataView(this.buffer, n3, l6), u5 = 0;
          for (let n4 = 0; n4 < l6; n4++) u5 = 256 * u5 + c6.getUint8(n4);
          return 128 & c6.getUint8(0) && (u5 -= Math.pow(256, l6)), u5;
        }
        readIntLE(n3, l6) {
          Q2(n3, "offset"), te2(n3, "offset"), J2(n3, "offset", this.length - 1), Q2(l6, "byteLength"), te2(l6, "byteLength");
          let c6 = new DataView(this.buffer, n3, l6), u5 = 0;
          for (let n4 = 0; n4 < l6; n4++) u5 += c6.getUint8(n4) * Math.pow(256, n4);
          return 128 & c6.getUint8(l6 - 1) && (u5 -= Math.pow(256, l6)), u5;
        }
        readUIntBE(n3, l6) {
          Q2(n3, "offset"), te2(n3, "offset"), J2(n3, "offset", this.length - 1), Q2(l6, "byteLength"), te2(l6, "byteLength");
          let c6 = new DataView(this.buffer, n3, l6), u5 = 0;
          for (let n4 = 0; n4 < l6; n4++) u5 = 256 * u5 + c6.getUint8(n4);
          return u5;
        }
        readUintBE(n3, l6) {
          return this.readUIntBE(n3, l6);
        }
        readUIntLE(n3, l6) {
          Q2(n3, "offset"), te2(n3, "offset"), J2(n3, "offset", this.length - 1), Q2(l6, "byteLength"), te2(l6, "byteLength");
          let c6 = new DataView(this.buffer, n3, l6), u5 = 0;
          for (let n4 = 0; n4 < l6; n4++) u5 += c6.getUint8(n4) * Math.pow(256, n4);
          return u5;
        }
        readUintLE(n3, l6) {
          return this.readUIntLE(n3, l6);
        }
        writeIntBE(n3, l6, c6) {
          return n3 = n3 < 0 ? n3 + Math.pow(256, c6) : n3, this.writeUIntBE(n3, l6, c6);
        }
        writeIntLE(n3, l6, c6) {
          return n3 = n3 < 0 ? n3 + Math.pow(256, c6) : n3, this.writeUIntLE(n3, l6, c6);
        }
        writeUIntBE(n3, l6, c6) {
          Q2(l6, "offset"), te2(l6, "offset"), J2(l6, "offset", this.length - 1), Q2(c6, "byteLength"), te2(c6, "byteLength");
          let u5 = new DataView(this.buffer, l6, c6);
          for (let l7 = c6 - 1; l7 >= 0; l7--) u5.setUint8(l7, 255 & n3), n3 /= 256;
          return l6 + c6;
        }
        writeUintBE(n3, l6, c6) {
          return this.writeUIntBE(n3, l6, c6);
        }
        writeUIntLE(n3, l6, c6) {
          Q2(l6, "offset"), te2(l6, "offset"), J2(l6, "offset", this.length - 1), Q2(c6, "byteLength"), te2(c6, "byteLength");
          let u5 = new DataView(this.buffer, l6, c6);
          for (let l7 = 0; l7 < c6; l7++) u5.setUint8(l7, 255 & n3), n3 /= 256;
          return l6 + c6;
        }
        writeUintLE(n3, l6, c6) {
          return this.writeUIntLE(n3, l6, c6);
        }
        toJSON() {
          return { type: "Buffer", data: Array.from(this) };
        }
        swap16() {
          let n3 = new DataView(this.buffer, this.byteOffset, this.byteLength);
          for (let l6 = 0; l6 < this.length; l6 += 2) n3.setUint16(l6, n3.getUint16(l6, true), false);
          return this;
        }
        swap32() {
          let n3 = new DataView(this.buffer, this.byteOffset, this.byteLength);
          for (let l6 = 0; l6 < this.length; l6 += 4) n3.setUint32(l6, n3.getUint32(l6, true), false);
          return this;
        }
        swap64() {
          let n3 = new DataView(this.buffer, this.byteOffset, this.byteLength);
          for (let l6 = 0; l6 < this.length; l6 += 8) n3.setBigUint64(l6, n3.getBigUint64(l6, true), false);
          return this;
        }
        compare(n3, l6 = 0, c6 = n3.length, u5 = 0, h7 = this.length) {
          return lr(n3, "target"), Q2(l6, "targetStart"), Q2(c6, "targetEnd"), Q2(u5, "sourceStart"), Q2(h7, "sourceEnd"), J2(l6, "targetStart"), J2(c6, "targetEnd", n3.length), J2(u5, "sourceStart"), J2(h7, "sourceEnd", this.length), e11.compare(this.slice(u5, h7), n3.slice(l6, c6));
        }
        equals(n3) {
          return lr(n3, "otherBuffer"), this.length === n3.length && this.every((l6, c6) => l6 === n3[c6]);
        }
        copy(n3, l6 = 0, c6 = 0, u5 = this.length) {
          J2(l6, "targetStart"), J2(c6, "sourceStart", this.length), J2(u5, "sourceEnd"), l6 >>>= 0, c6 >>>= 0, u5 >>>= 0;
          let h7 = 0;
          for (; c6 < u5 && void 0 !== this[c6] && void 0 !== n3[l6]; ) n3[l6] = this[c6], h7++, c6++, l6++;
          return h7;
        }
        write(n3, l6, c6, u5 = "utf8") {
          let h7 = "string" == typeof l6 ? 0 : l6 ?? 0, f6 = "string" == typeof c6 ? this.length - h7 : c6 ?? this.length - h7;
          return u5 = "string" == typeof l6 ? l6 : "string" == typeof c6 ? c6 : u5, Q2(h7, "offset"), Q2(f6, "length"), J2(h7, "offset", this.length), J2(f6, "length", this.length), ("ucs2" === u5 || "ucs-2" === u5 || "utf16le" === u5 || "utf-16le" === u5) && (f6 -= f6 % 2), yn(n3, u5).copy(this, h7, 0, f6);
        }
        fill(n3 = 0, l6 = 0, c6 = this.length, u5 = "utf-8") {
          let h7 = "string" == typeof l6 ? 0 : l6, f6 = "string" == typeof c6 ? this.length : c6;
          if (u5 = "string" == typeof l6 ? l6 : "string" == typeof c6 ? c6 : u5, n3 = e11.from("number" == typeof n3 ? [n3] : n3 ?? [], u5), Ui(u5, "encoding"), J2(h7, "offset", this.length), J2(f6, "end", this.length), 0 !== n3.length) for (let l7 = h7; l7 < f6; l7 += n3.length) super.set(n3.slice(0, n3.length + l7 >= this.length ? this.length - l7 : n3.length), l7);
          return this;
        }
        includes(n3, l6 = null, c6 = "utf-8") {
          return -1 !== this.indexOf(n3, l6, c6);
        }
        lastIndexOf(n3, l6 = null, c6 = "utf-8") {
          return this.indexOf(n3, l6, c6, true);
        }
        indexOf(n3, l6 = null, c6 = "utf-8", u5 = false) {
          let h7 = u5 ? this.findLastIndex.bind(this) : this.findIndex.bind(this);
          c6 = "string" == typeof l6 ? l6 : c6;
          let f6 = e11.from("number" == typeof n3 ? [n3] : n3, c6), p5 = "string" == typeof l6 ? 0 : l6;
          return p5 = "number" == typeof l6 ? p5 : null, p5 = Number.isNaN(p5) ? null : p5, p5 ??= u5 ? this.length : 0, p5 = p5 < 0 ? this.length + p5 : p5, 0 === f6.length && false === u5 ? p5 >= this.length ? this.length : p5 : 0 === f6.length && true === u5 ? (p5 >= this.length ? this.length : p5) || this.length : h7((n4, l7) => (u5 ? l7 <= p5 : l7 >= p5) && this[l7] === f6[0] && f6.every((n5, c7) => this[l7 + c7] === n5));
        }
        toString(n3 = "utf8", l6 = 0, c6 = this.length) {
          if (l6 = l6 < 0 ? 0 : l6, n3 = n3.toString().toLowerCase(), c6 <= 0) return "";
          if ("utf8" === n3 || "utf-8" === n3) return Ze.decode(this.slice(l6, c6));
          if ("base64" === n3 || "base64url" === n3) {
            let l7 = btoa(this.reduce((n4, l8) => n4 + it(l8), ""));
            return "base64url" === n3 ? l7.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : l7;
          }
          if ("binary" === n3 || "ascii" === n3 || "latin1" === n3 || "latin-1" === n3) return this.slice(l6, c6).reduce((l7, c7) => l7 + it(c7 & ("ascii" === n3 ? 127 : 255)), "");
          if ("ucs2" === n3 || "ucs-2" === n3 || "utf16le" === n3 || "utf-16le" === n3) {
            let n4 = new DataView(this.buffer.slice(l6, c6));
            return Array.from({ length: n4.byteLength / 2 }, (l7, c7) => 2 * c7 + 1 < n4.byteLength ? it(n4.getUint16(2 * c7, true)) : "").join("");
          }
          if ("hex" === n3) return this.slice(l6, c6).reduce((n4, l7) => n4 + l7.toString(16).padStart(2, "0"), "");
          $i(`encoding "${n3}"`);
        }
        toLocaleString() {
          return this.toString();
        }
        inspect() {
          return `<Buffer ${this.toString("hex").match(/.{1,2}/g).join(" ")}>`;
        }
      }, Ge = { int8: [-128, 127], int16: [-32768, 32767], int32: [-2147483648, 2147483647], uint8: [0, 255], uint16: [0, 65535], uint32: [0, 4294967295], float32: [-1 / 0, 1 / 0], float64: [-1 / 0, 1 / 0], bigint64: [-0x8000000000000000n, 0x7fffffffffffffffn], biguint64: [0n, 0xffffffffffffffffn] }, Ke = new TextEncoder(), Ze = new TextDecoder(), tt = ["utf8", "utf-8", "hex", "base64", "ascii", "binary", "base64url", "ucs2", "ucs-2", "utf16le", "utf-16le", "latin1", "latin-1"], rt = 4294967295, tu(ze.prototype), nt = new Proxy(lu, { construct: /* @__PURE__ */ __name((n3, [l6, c6]) => ze.from(l6, c6), "construct"), get: /* @__PURE__ */ __name((n3, l6) => ze[l6], "get") }), it = String.fromCodePoint;
    });
    bt = pe(() => {
      lt = { nextTick: /* @__PURE__ */ __name((n3, ...l6) => {
        setTimeout(() => {
          n3(...l6);
        }, 0);
      }, "nextTick"), env: {}, version: "", cwd: /* @__PURE__ */ __name(() => "/", "cwd"), stderr: {}, argv: ["/bin/node"], pid: 1e4 }, { cwd: dt } = lt;
    });
    vt = pe(() => {
      ft = globalThis.performance ?? (() => {
        let n3 = Date.now();
        return { now: /* @__PURE__ */ __name(() => Date.now() - n3, "now") };
      })();
    });
    St = pe(() => {
      (gt = /* @__PURE__ */ __name(() => {
      }, "gt")).prototype = gt;
    });
    __name(ji, "ji");
    __name(de2, "de");
    __name(me, "me");
    __name(Qi, "Qi");
    __name(H2, "H");
    __name(wn, "wn");
    __name(ve, "ve");
    __name(Tt, "Tt");
    __name(qi, "qi");
    __name(L2, "L");
    __name(Hi, "Hi");
    __name(_e2, "_e");
    __name(Vi, "Vi");
    __name(Ji, "Ji");
    __name(pu, "pu");
    Yt = pe(() => {
      wt(), bt(), vt(), St(), Zt(), At = 1e9, It = { precision: 20, rounding: 4, toExpNeg: -7, toExpPos: 21, LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286" }, Ct = true, Rt = (kt = "[DecimalError] ") + "Invalid argument: ", Dt = kt + "Exponent out of range: ", Mt = Math.floor, Lt = Math.pow, Ft = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Bt = 1e7, Wt = Mt((Ht = 9007199254740991) / (Qt = 7)), (Jt = {}).absoluteValue = Jt.abs = function() {
        var n3 = new this.constructor(this);
        return n3.s && (n3.s = 1), n3;
      }, Jt.comparedTo = Jt.cmp = function(n3) {
        var l6, c6, u5, h7, f6 = this;
        if (n3 = new f6.constructor(n3), f6.s !== n3.s) return f6.s || -n3.s;
        if (f6.e !== n3.e) return f6.e > n3.e ^ f6.s < 0 ? 1 : -1;
        for (l6 = 0, c6 = (u5 = f6.d.length) < (h7 = n3.d.length) ? u5 : h7; l6 < c6; ++l6) if (f6.d[l6] !== n3.d[l6]) return f6.d[l6] > n3.d[l6] ^ f6.s < 0 ? 1 : -1;
        return u5 === h7 ? 0 : u5 > h7 ^ f6.s < 0 ? 1 : -1;
      }, Jt.decimalPlaces = Jt.dp = function() {
        var n3 = this, l6 = n3.d.length - 1, c6 = (l6 - n3.e) * Qt;
        if (l6 = n3.d[l6]) for (; l6 % 10 == 0; l6 /= 10) c6--;
        return c6 < 0 ? 0 : c6;
      }, Jt.dividedBy = Jt.div = function(n3) {
        return zt(this, new this.constructor(n3));
      }, Jt.dividedToIntegerBy = Jt.idiv = function(n3) {
        var l6 = this.constructor;
        return L2(zt(this, new l6(n3), 0, 1), l6.precision);
      }, Jt.equals = Jt.eq = function(n3) {
        return !this.cmp(n3);
      }, Jt.exponent = function() {
        return H2(this);
      }, Jt.greaterThan = Jt.gt = function(n3) {
        return this.cmp(n3) > 0;
      }, Jt.greaterThanOrEqualTo = Jt.gte = function(n3) {
        return this.cmp(n3) >= 0;
      }, Jt.isInteger = Jt.isint = function() {
        return this.e > this.d.length - 2;
      }, Jt.isNegative = Jt.isneg = function() {
        return this.s < 0;
      }, Jt.isPositive = Jt.ispos = function() {
        return this.s > 0;
      }, Jt.isZero = function() {
        return 0 === this.s;
      }, Jt.lessThan = Jt.lt = function(n3) {
        return this.cmp(n3) < 0;
      }, Jt.lessThanOrEqualTo = Jt.lte = function(n3) {
        return this.cmp(n3) < 1;
      }, Jt.logarithm = Jt.log = function(n3) {
        var l6, c6 = this, u5 = c6.constructor, h7 = u5.precision, f6 = h7 + 5;
        if (void 0 === n3) n3 = new u5(10);
        else if ((n3 = new u5(n3)).s < 1 || n3.eq(jt)) throw Error(kt + "NaN");
        if (c6.s < 1) throw Error(kt + (c6.s ? "NaN" : "-Infinity"));
        return c6.eq(jt) ? new u5(0) : (Ct = false, l6 = zt(Tt(c6, f6), Tt(n3, f6), f6), Ct = true, L2(l6, h7));
      }, Jt.minus = Jt.sub = function(n3) {
        var l6 = this;
        return n3 = new l6.constructor(n3), l6.s == n3.s ? Hi(l6, n3) : ji(l6, (n3.s = -n3.s, n3));
      }, Jt.modulo = Jt.mod = function(n3) {
        var l6, c6 = this, u5 = c6.constructor, h7 = u5.precision;
        if (!(n3 = new u5(n3)).s) throw Error(kt + "NaN");
        return c6.s ? (Ct = false, l6 = zt(c6, n3, 0, 1).times(n3), Ct = true, c6.minus(l6)) : L2(new u5(c6), h7);
      }, Jt.naturalExponential = Jt.exp = function() {
        return Qi(this);
      }, Jt.naturalLogarithm = Jt.ln = function() {
        return Tt(this);
      }, Jt.negated = Jt.neg = function() {
        var n3 = new this.constructor(this);
        return n3.s = -n3.s || 0, n3;
      }, Jt.plus = Jt.add = function(n3) {
        var l6 = this;
        return n3 = new l6.constructor(n3), l6.s == n3.s ? ji(l6, n3) : Hi(l6, (n3.s = -n3.s, n3));
      }, Jt.precision = Jt.sd = function(n3) {
        var l6, c6, u5, h7 = this;
        if (void 0 !== n3 && n3 !== !!n3 && 1 !== n3 && 0 !== n3) throw Error(Rt + n3);
        if (l6 = H2(h7) + 1, c6 = (u5 = h7.d.length - 1) * Qt + 1, u5 = h7.d[u5]) {
          for (; u5 % 10 == 0; u5 /= 10) c6--;
          for (u5 = h7.d[0]; u5 >= 10; u5 /= 10) c6++;
        }
        return n3 && l6 > c6 ? l6 : c6;
      }, Jt.squareRoot = Jt.sqrt = function() {
        var n3, l6, c6, u5, h7, f6, p5, m7 = this, g5 = m7.constructor;
        if (m7.s < 1) {
          if (!m7.s) return new g5(0);
          throw Error(kt + "NaN");
        }
        for (n3 = H2(m7), Ct = false, 0 == (h7 = Math.sqrt(+m7)) || h7 == 1 / 0 ? (((l6 = me(m7.d)).length + n3) % 2 == 0 && (l6 += "0"), h7 = Math.sqrt(l6), n3 = Mt((n3 + 1) / 2) - (n3 < 0 || n3 % 2), h7 == 1 / 0 ? l6 = "5e" + n3 : l6 = (l6 = h7.toExponential()).slice(0, l6.indexOf("e") + 1) + n3, u5 = new g5(l6)) : u5 = new g5(h7.toString()), h7 = p5 = (c6 = g5.precision) + 3; ; ) if (u5 = (f6 = u5).plus(zt(m7, f6, p5 + 2)).times(0.5), me(f6.d).slice(0, p5) === (l6 = me(u5.d)).slice(0, p5)) {
          if (l6 = l6.slice(p5 - 3, p5 + 1), h7 == p5 && "4999" == l6) {
            if (L2(f6, c6 + 1, 0), f6.times(f6).eq(m7)) {
              u5 = f6;
              break;
            }
          } else if ("9999" != l6) break;
          p5 += 4;
        }
        return Ct = true, L2(u5, c6);
      }, Jt.times = Jt.mul = function(n3) {
        var l6, c6, u5, h7, f6, p5, m7, g5, y5, w5 = this, b4 = w5.constructor, v5 = w5.d, _4 = (n3 = new b4(n3)).d;
        if (!w5.s || !n3.s) return new b4(0);
        for (n3.s *= w5.s, c6 = w5.e + n3.e, (g5 = v5.length) < (y5 = _4.length) && (f6 = v5, v5 = _4, _4 = f6, p5 = g5, g5 = y5, y5 = p5), f6 = [], u5 = p5 = g5 + y5; u5--; ) f6.push(0);
        for (u5 = y5; --u5 >= 0; ) {
          for (l6 = 0, h7 = g5 + u5; h7 > u5; ) m7 = f6[h7] + _4[u5] * v5[h7 - u5 - 1] + l6, f6[h7--] = m7 % Bt | 0, l6 = m7 / Bt | 0;
          f6[h7] = (f6[h7] + l6) % Bt | 0;
        }
        for (; !f6[--p5]; ) f6.pop();
        return l6 ? ++c6 : f6.shift(), n3.d = f6, n3.e = c6, Ct ? L2(n3, b4.precision) : n3;
      }, Jt.toDecimalPlaces = Jt.todp = function(n3, l6) {
        var c6 = this, u5 = c6.constructor;
        return c6 = new u5(c6), void 0 === n3 ? c6 : (de2(n3, 0, At), void 0 === l6 ? l6 = u5.rounding : de2(l6, 0, 8), L2(c6, n3 + H2(c6) + 1, l6));
      }, Jt.toExponential = function(n3, l6) {
        var c6, u5 = this, h7 = u5.constructor;
        return void 0 === n3 ? c6 = _e2(u5, true) : (de2(n3, 0, At), void 0 === l6 ? l6 = h7.rounding : de2(l6, 0, 8), c6 = _e2(u5 = L2(new h7(u5), n3 + 1, l6), true, n3 + 1)), c6;
      }, Jt.toFixed = function(n3, l6) {
        var c6, u5, h7 = this, f6 = h7.constructor;
        return void 0 === n3 ? _e2(h7) : (de2(n3, 0, At), void 0 === l6 ? l6 = f6.rounding : de2(l6, 0, 8), c6 = _e2((u5 = L2(new f6(h7), n3 + H2(h7) + 1, l6)).abs(), false, n3 + H2(u5) + 1), h7.isneg() && !h7.isZero() ? "-" + c6 : c6);
      }, Jt.toInteger = Jt.toint = function() {
        var n3 = this, l6 = n3.constructor;
        return L2(new l6(n3), H2(n3) + 1, l6.rounding);
      }, Jt.toNumber = function() {
        return +this;
      }, Jt.toPower = Jt.pow = function(n3) {
        var l6, c6, u5, h7, f6, p5, m7 = this, g5 = m7.constructor, y5 = +(n3 = new g5(n3));
        if (!n3.s) return new g5(jt);
        if (!(m7 = new g5(m7)).s) {
          if (n3.s < 1) throw Error(kt + "Infinity");
          return m7;
        }
        if (m7.eq(jt)) return m7;
        if (u5 = g5.precision, n3.eq(jt)) return L2(m7, u5);
        if (p5 = (l6 = n3.e) >= (c6 = n3.d.length - 1), f6 = m7.s, p5) {
          if ((c6 = y5 < 0 ? -y5 : y5) <= Ht) {
            for (h7 = new g5(jt), l6 = Math.ceil(u5 / Qt + 4), Ct = false; c6 % 2 && Vi((h7 = h7.times(m7)).d, l6), 0 !== (c6 = Mt(c6 / 2)); ) Vi((m7 = m7.times(m7)).d, l6);
            return Ct = true, n3.s < 0 ? new g5(jt).div(h7) : L2(h7, u5);
          }
        } else if (f6 < 0) throw Error(kt + "NaN");
        return f6 = f6 < 0 && 1 & n3.d[Math.max(l6, c6)] ? -1 : 1, m7.s = 1, Ct = false, h7 = n3.times(Tt(m7, u5 + 12)), Ct = true, (h7 = Qi(h7)).s = f6, h7;
      }, Jt.toPrecision = function(n3, l6) {
        var c6, u5, h7 = this, f6 = h7.constructor;
        return void 0 === n3 ? u5 = _e2(h7, (c6 = H2(h7)) <= f6.toExpNeg || c6 >= f6.toExpPos) : (de2(n3, 1, At), void 0 === l6 ? l6 = f6.rounding : de2(l6, 0, 8), u5 = _e2(h7 = L2(new f6(h7), n3, l6), n3 <= (c6 = H2(h7)) || c6 <= f6.toExpNeg, n3)), u5;
      }, Jt.toSignificantDigits = Jt.tosd = function(n3, l6) {
        var c6 = this.constructor;
        return void 0 === n3 ? (n3 = c6.precision, l6 = c6.rounding) : (de2(n3, 1, At), void 0 === l6 ? l6 = c6.rounding : de2(l6, 0, 8)), L2(new c6(this), n3, l6);
      }, Jt.toString = Jt.valueOf = Jt.val = Jt.toJSON = Jt[Symbol.for("nodejs.util.inspect.custom")] = function() {
        var n3 = this, l6 = H2(n3), c6 = n3.constructor;
        return _e2(n3, l6 <= c6.toExpNeg || l6 >= c6.toExpPos);
      }, zt = /* @__PURE__ */ (function() {
        function e11(n3, l6) {
          var c6, u5 = 0, h7 = n3.length;
          for (n3 = n3.slice(); h7--; ) c6 = n3[h7] * l6 + u5, n3[h7] = c6 % Bt | 0, u5 = c6 / Bt | 0;
          return u5 && n3.unshift(u5), n3;
        }
        __name(e11, "e");
        function t8(n3, l6, c6, u5) {
          var h7, f6;
          if (c6 != u5) f6 = c6 > u5 ? 1 : -1;
          else for (h7 = f6 = 0; h7 < c6; h7++) if (n3[h7] != l6[h7]) {
            f6 = n3[h7] > l6[h7] ? 1 : -1;
            break;
          }
          return f6;
        }
        __name(t8, "t");
        function r6(n3, l6, c6) {
          for (var u5 = 0; c6--; ) n3[c6] -= u5, u5 = n3[c6] < l6[c6] ? 1 : 0, n3[c6] = u5 * Bt + n3[c6] - l6[c6];
          for (; !n3[0] && n3.length > 1; ) n3.shift();
        }
        __name(r6, "r");
        return function(n3, l6, c6, u5) {
          var h7, f6, p5, m7, g5, y5, w5, b4, v5, _4, S6, E5, T5, x5, P5, A4, I5, C5, N5 = n3.constructor, k5 = n3.s == l6.s ? 1 : -1, O6 = n3.d, R5 = l6.d;
          if (!n3.s) return new N5(n3);
          if (!l6.s) throw Error(kt + "Division by zero");
          for (f6 = n3.e - l6.e, I5 = R5.length, P5 = O6.length, b4 = (w5 = new N5(k5)).d = [], p5 = 0; R5[p5] == (O6[p5] || 0); ) ++p5;
          if (R5[p5] > (O6[p5] || 0) && --f6, (E5 = null == c6 ? c6 = N5.precision : u5 ? c6 + (H2(n3) - H2(l6)) + 1 : c6) < 0) return new N5(0);
          if (E5 = E5 / Qt + 2 | 0, p5 = 0, 1 == I5) for (m7 = 0, R5 = R5[0], E5++; (p5 < P5 || m7) && E5--; p5++) T5 = m7 * Bt + (O6[p5] || 0), b4[p5] = T5 / R5 | 0, m7 = T5 % R5 | 0;
          else {
            for ((m7 = Bt / (R5[0] + 1) | 0) > 1 && (R5 = e11(R5, m7), O6 = e11(O6, m7), I5 = R5.length, P5 = O6.length), x5 = I5, _4 = (v5 = O6.slice(0, I5)).length; _4 < I5; ) v5[_4++] = 0;
            (C5 = R5.slice()).unshift(0), A4 = R5[0], R5[1] >= Bt / 2 && ++A4;
            do {
              m7 = 0, (h7 = t8(R5, v5, I5, _4)) < 0 ? (S6 = v5[0], I5 != _4 && (S6 = S6 * Bt + (v5[1] || 0)), (m7 = S6 / A4 | 0) > 1 ? (m7 >= Bt && (m7 = Bt - 1), 1 == (h7 = t8(g5 = e11(R5, m7), v5, y5 = g5.length, _4 = v5.length)) && (m7--, r6(g5, I5 < y5 ? C5 : R5, y5))) : (0 == m7 && (h7 = m7 = 1), g5 = R5.slice()), (y5 = g5.length) < _4 && g5.unshift(0), r6(v5, g5, _4), -1 == h7 && ((h7 = t8(R5, v5, I5, _4 = v5.length)) < 1 && (m7++, r6(v5, I5 < _4 ? C5 : R5, _4))), _4 = v5.length) : 0 === h7 && (m7++, v5 = [0]), b4[p5++] = m7, h7 && v5[0] ? v5[_4++] = O6[x5] || 0 : (v5 = [O6[x5]], _4 = 1);
            } while ((x5++ < P5 || void 0 !== v5[0]) && E5--);
          }
          return b4[0] || b4.shift(), w5.e = f6, L2(w5, u5 ? c6 + H2(w5) + 1 : c6);
        };
      })(), Gt = Ji(It), jt = new Gt(1);
    });
    Zt = pe(() => {
      Yt();
    });
    Xt = {};
    __name(dr, "dr");
    __name(fr, "fr");
    __name(go, "go");
    Et(Xt, { Hash: /* @__PURE__ */ __name(() => tr, "Hash"), createHash: /* @__PURE__ */ __name(() => go, "createHash"), default: /* @__PURE__ */ __name(() => nr, "default"), randomFillSync: /* @__PURE__ */ __name(() => fr, "randomFillSync"), randomUUID: /* @__PURE__ */ __name(() => dr, "randomUUID"), webcrypto: /* @__PURE__ */ __name(() => er, "webcrypto") });
    sr = pe(() => {
      wt(), bt(), vt(), St(), Zt(), er = globalThis.crypto, nr = { webcrypto: er, randomUUID: dr, randomFillSync: fr, createHash: go, Hash: tr = class {
        static {
          __name(this, "tr");
        }
        #n = [];
        #i;
        constructor(n3) {
          this.#i = n3;
        }
        update(n3) {
          this.#n.push(n3);
        }
        async digest() {
          let n3 = new Uint8Array(this.#n.reduce((n4, l7) => n4 + l7.length, 0)), l6 = 0;
          for (let c7 of this.#n) n3.set(c7, l6), l6 += c7.length;
          let c6 = await globalThis.crypto.subtle.digest(this.#i, n3);
          return new Uint8Array(c6);
        }
      } };
    });
    ar2 = re2(() => {
      wt(), bt(), vt(), St(), Zt();
    });
    or = re2((n3, l6) => {
      l6.exports = { name: "@prisma/engines-version", version: "7.3.0-16.9d6ad21cbbceab97458517b147a6a09ff43aa735", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "9d6ad21cbbceab97458517b147a6a09ff43aa735" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.76", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
    });
    cr = re2((n3) => {
      wt(), bt(), vt(), St(), Zt(), Object.defineProperty(n3, "__esModule", { value: true }), n3.enginesVersion = void 0, n3.enginesVersion = or().prisma.enginesVersion;
    });
    ur = re2((n3, l6) => {
      wt(), bt(), vt(), St(), Zt(), l6.exports = (n4, l7 = 1, c6) => {
        if (c6 = { indent: " ", includeEmptyLines: false, ...c6 }, "string" != typeof n4) throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof n4}\``);
        if ("number" != typeof l7) throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof l7}\``);
        if ("string" != typeof c6.indent) throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof c6.indent}\``);
        if (0 === l7) return n4;
        let u5 = c6.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return n4.replace(u5, c6.indent.repeat(l7));
      };
    });
    hr = re2((n3, l6) => {
      wt(), bt(), vt(), St(), Zt(), l6.exports = (n4 = {}) => {
        let l7;
        if (n4.repoUrl) l7 = n4.repoUrl;
        else {
          if (!n4.user || !n4.repo) throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
          l7 = `https://github.com/${n4.user}/${n4.repo}`;
        }
        let c6 = new URL(`${l7}/issues/new`), u5 = ["body", "title", "labels", "template", "milestone", "assignee", "projects"];
        for (let l8 of u5) {
          let u6 = n4[l8];
          if (void 0 !== u6) {
            if ("labels" === l8 || "projects" === l8) {
              if (!Array.isArray(u6)) throw new TypeError(`The \`${l8}\` option should be an array`);
              u6 = u6.join(",");
            }
            c6.searchParams.set(l8, u6);
          }
        }
        return c6.toString();
      }, l6.exports.default = l6.exports;
    });
    pr = re2((n3, l6) => {
      wt(), bt(), vt(), St(), Zt(), l6.exports = /* @__PURE__ */ (function() {
        function e11(n4, l7, c6, u5, h7) {
          return n4 < l7 || c6 < l7 ? n4 > c6 ? c6 + 1 : n4 + 1 : u5 === h7 ? l7 : l7 + 1;
        }
        __name(e11, "e");
        return function(n4, l7) {
          if (n4 === l7) return 0;
          if (n4.length > l7.length) {
            var c6 = n4;
            n4 = l7, l7 = c6;
          }
          for (var u5 = n4.length, h7 = l7.length; u5 > 0 && n4.charCodeAt(u5 - 1) === l7.charCodeAt(h7 - 1); ) u5--, h7--;
          for (var f6 = 0; f6 < u5 && n4.charCodeAt(f6) === l7.charCodeAt(f6); ) f6++;
          if (h7 -= f6, 0 === (u5 -= f6) || h7 < 3) return h7;
          var p5, m7, g5, y5, w5, b4, v5, _4, S6, E5, T5, x5, P5 = 0, A4 = [];
          for (p5 = 0; p5 < u5; p5++) A4.push(p5 + 1), A4.push(n4.charCodeAt(f6 + p5));
          for (var I5 = A4.length - 1; P5 < h7 - 3; ) for (S6 = l7.charCodeAt(f6 + (m7 = P5)), E5 = l7.charCodeAt(f6 + (g5 = P5 + 1)), T5 = l7.charCodeAt(f6 + (y5 = P5 + 2)), x5 = l7.charCodeAt(f6 + (w5 = P5 + 3)), b4 = P5 += 4, p5 = 0; p5 < I5; p5 += 2) m7 = e11(v5 = A4[p5], m7, g5, S6, _4 = A4[p5 + 1]), g5 = e11(m7, g5, y5, E5, _4), y5 = e11(g5, y5, w5, T5, _4), b4 = e11(y5, w5, b4, x5, _4), A4[p5] = b4, w5 = y5, y5 = g5, g5 = m7, m7 = v5;
          for (; P5 < h7; ) for (S6 = l7.charCodeAt(f6 + (m7 = P5)), b4 = ++P5, p5 = 0; p5 < I5; p5 += 2) v5 = A4[p5], A4[p5] = b4 = e11(v5, m7, b4, S6, A4[p5 + 1]), m7 = v5;
          return b4;
        };
      })();
    });
    mr = pe(() => {
      wt(), bt(), vt(), St(), Zt();
    });
    gr = pe(() => {
      wt(), bt(), vt(), St(), Zt();
    });
    yr = pe(() => {
      wt(), bt(), vt(), St(), Zt(), ir = class {
        static {
          __name(this, "ir");
        }
        events = {};
        on(n3, l6) {
          return this.events[n3] || (this.events[n3] = []), this.events[n3].push(l6), this;
        }
        emit(n3, ...l6) {
          return !!this.events[n3] && (this.events[n3].forEach((n4) => {
            n4(...l6);
          }), true);
        }
      };
    });
    vr = re2((n3) => {
      function zn(n4) {
        if (!Number.isSafeInteger(n4) || n4 < 0) throw new Error("positive integer expected, got " + n4);
      }
      __name(zn, "zn");
      function Bs(n4, ...l6) {
        if (!(function(n5) {
          return n5 instanceof Uint8Array || ArrayBuffer.isView(n5) && "Uint8Array" === n5.constructor.name;
        })(n4)) throw new Error("Uint8Array expected");
        if (l6.length > 0 && !l6.includes(n4.length)) throw new Error("Uint8Array expected of length " + l6 + ", got length=" + n4.length);
      }
      __name(Bs, "Bs");
      wt(), bt(), vt(), St(), Zt(), Object.defineProperty(n3, "__esModule", { value: true }), n3.anumber = zn, n3.abytes = Bs, n3.ahash = function(n4) {
        if ("function" != typeof n4 || "function" != typeof n4.create) throw new Error("Hash should be wrapped by utils.wrapConstructor");
        zn(n4.outputLen), zn(n4.blockLen);
      }, n3.aexists = function(n4, l6 = true) {
        if (n4.destroyed) throw new Error("Hash instance has been destroyed");
        if (l6 && n4.finished) throw new Error("Hash#digest() has already been called");
      }, n3.aoutput = function(n4, l6) {
        Bs(n4);
        let c6 = l6.outputLen;
        if (n4.length < c6) throw new Error("digestInto() expects output buffer of length at least " + c6);
      };
    });
    Sr = re2((n3) => {
      wt(), bt(), vt(), St(), Zt(), Object.defineProperty(n3, "__esModule", { value: true }), n3.add5L = n3.add5H = n3.add4H = n3.add4L = n3.add3H = n3.add3L = n3.rotlBL = n3.rotlBH = n3.rotlSL = n3.rotlSH = n3.rotr32L = n3.rotr32H = n3.rotrBL = n3.rotrBH = n3.rotrSL = n3.rotrSH = n3.shrSL = n3.shrSH = n3.toBig = void 0, n3.fromBig = Xn, n3.split = js, n3.add = na;
      var l6 = BigInt(2 ** 32 - 1), c6 = BigInt(32);
      function Xn(n4, u6 = false) {
        return u6 ? { h: Number(n4 & l6), l: Number(n4 >> c6 & l6) } : { h: 0 | Number(n4 >> c6 & l6), l: 0 | Number(n4 & l6) };
      }
      __name(Xn, "Xn");
      function js(n4, l7 = false) {
        let c7 = new Uint32Array(n4.length), u6 = new Uint32Array(n4.length);
        for (let h7 = 0; h7 < n4.length; h7++) {
          let { h: f6, l: p5 } = Xn(n4[h7], l7);
          [c7[h7], u6[h7]] = [f6, p5];
        }
        return [c7, u6];
      }
      __name(js, "js");
      var Qs = /* @__PURE__ */ __name((n4, l7) => BigInt(n4 >>> 0) << c6 | BigInt(l7 >>> 0), "Qs");
      n3.toBig = Qs;
      var Hs = /* @__PURE__ */ __name((n4, l7, c7) => n4 >>> c7, "Hs");
      n3.shrSH = Hs;
      var Js = /* @__PURE__ */ __name((n4, l7, c7) => n4 << 32 - c7 | l7 >>> c7, "Js");
      n3.shrSL = Js;
      var Ws = /* @__PURE__ */ __name((n4, l7, c7) => n4 >>> c7 | l7 << 32 - c7, "Ws");
      n3.rotrSH = Ws;
      var Gs = /* @__PURE__ */ __name((n4, l7, c7) => n4 << 32 - c7 | l7 >>> c7, "Gs");
      n3.rotrSL = Gs;
      var Ks = /* @__PURE__ */ __name((n4, l7, c7) => n4 << 64 - c7 | l7 >>> c7 - 32, "Ks");
      n3.rotrBH = Ks;
      var zs = /* @__PURE__ */ __name((n4, l7, c7) => n4 >>> c7 - 32 | l7 << 64 - c7, "zs");
      n3.rotrBL = zs;
      var Zs = /* @__PURE__ */ __name((n4, l7) => l7, "Zs");
      n3.rotr32H = Zs;
      var Ys = /* @__PURE__ */ __name((n4, l7) => n4, "Ys");
      n3.rotr32L = Ys;
      var Xs = /* @__PURE__ */ __name((n4, l7, c7) => n4 << c7 | l7 >>> 32 - c7, "Xs");
      n3.rotlSH = Xs;
      var ea = /* @__PURE__ */ __name((n4, l7, c7) => l7 << c7 | n4 >>> 32 - c7, "ea");
      n3.rotlSL = ea;
      var ta = /* @__PURE__ */ __name((n4, l7, c7) => l7 << c7 - 32 | n4 >>> 64 - c7, "ta");
      n3.rotlBH = ta;
      var ra = /* @__PURE__ */ __name((n4, l7, c7) => n4 << c7 - 32 | l7 >>> 64 - c7, "ra");
      function na(n4, l7, c7, u6) {
        let h7 = (l7 >>> 0) + (u6 >>> 0);
        return { h: n4 + c7 + (h7 / 2 ** 32 | 0) | 0, l: 0 | h7 };
      }
      __name(na, "na");
      n3.rotlBL = ra;
      var ia = /* @__PURE__ */ __name((n4, l7, c7) => (n4 >>> 0) + (l7 >>> 0) + (c7 >>> 0), "ia");
      n3.add3L = ia;
      var oa = /* @__PURE__ */ __name((n4, l7, c7, u6) => l7 + c7 + u6 + (n4 / 2 ** 32 | 0) | 0, "oa");
      n3.add3H = oa;
      var sa = /* @__PURE__ */ __name((n4, l7, c7, u6) => (n4 >>> 0) + (l7 >>> 0) + (c7 >>> 0) + (u6 >>> 0), "sa");
      n3.add4L = sa;
      var aa = /* @__PURE__ */ __name((n4, l7, c7, u6, h7) => l7 + c7 + u6 + h7 + (n4 / 2 ** 32 | 0) | 0, "aa");
      n3.add4H = aa;
      var la = /* @__PURE__ */ __name((n4, l7, c7, u6, h7) => (n4 >>> 0) + (l7 >>> 0) + (c7 >>> 0) + (u6 >>> 0) + (h7 >>> 0), "la");
      n3.add5L = la;
      var ua = /* @__PURE__ */ __name((n4, l7, c7, u6, h7, f6) => l7 + c7 + u6 + h7 + f6 + (n4 / 2 ** 32 | 0) | 0, "ua");
      n3.add5H = ua;
      var u5 = { fromBig: Xn, split: js, toBig: Qs, shrSH: Hs, shrSL: Js, rotrSH: Ws, rotrSL: Gs, rotrBH: Ks, rotrBL: zs, rotr32H: Zs, rotr32L: Ys, rotlSH: Xs, rotlSL: ea, rotlBH: ta, rotlBL: ra, add: na, add3L: ia, add3H: oa, add4L: sa, add4H: aa, add5H: ua, add5L: la };
      n3.default = u5;
    });
    xr = re2((n3) => {
      wt(), bt(), vt(), St(), Zt(), Object.defineProperty(n3, "__esModule", { value: true }), n3.crypto = void 0;
      var l6, c6 = (sr(), l6 = Xt, Fi(Be({}, "__esModule", { value: true }), l6));
      n3.crypto = c6 && "object" == typeof c6 && "webcrypto" in c6 ? c6.webcrypto : c6 && "object" == typeof c6 && "randomBytes" in c6 ? c6 : void 0;
    });
    Pr = re2((n3) => {
      wt(), bt(), vt(), St(), Zt(), Object.defineProperty(n3, "__esModule", { value: true }), n3.Hash = n3.nextTick = n3.byteSwapIfBE = n3.isLE = void 0, n3.isBytes = function(n4) {
        return n4 instanceof Uint8Array || ArrayBuffer.isView(n4) && "Uint8Array" === n4.constructor.name;
      }, n3.u8 = function(n4) {
        return new Uint8Array(n4.buffer, n4.byteOffset, n4.byteLength);
      }, n3.u32 = function(n4) {
        return new Uint32Array(n4.buffer, n4.byteOffset, Math.floor(n4.byteLength / 4));
      }, n3.createView = function(n4) {
        return new DataView(n4.buffer, n4.byteOffset, n4.byteLength);
      }, n3.rotr = function(n4, l7) {
        return n4 << 32 - l7 | n4 >>> l7;
      }, n3.rotl = function(n4, l7) {
        return n4 << l7 | n4 >>> 32 - l7 >>> 0;
      }, n3.byteSwap = ri, n3.byteSwap32 = function(n4) {
        for (let l7 = 0; l7 < n4.length; l7++) n4[l7] = ri(n4[l7]);
      }, n3.bytesToHex = function(n4) {
        (0, c6.abytes)(n4);
        let l7 = "";
        for (let c7 = 0; c7 < n4.length; c7++) l7 += u5[n4[c7]];
        return l7;
      }, n3.hexToBytes = function(n4) {
        if ("string" != typeof n4) throw new Error("hex string expected, got " + typeof n4);
        let l7 = n4.length, c7 = l7 / 2;
        if (l7 % 2) throw new Error("hex string expected, got unpadded hex of length " + l7);
        let u6 = new Uint8Array(c7);
        for (let l8 = 0, h8 = 0; l8 < c7; l8++, h8 += 2) {
          let c8 = ma(n4.charCodeAt(h8)), f6 = ma(n4.charCodeAt(h8 + 1));
          if (void 0 === c8 || void 0 === f6) {
            let l9 = n4[h8] + n4[h8 + 1];
            throw new Error('hex string expected, got non-hex character "' + l9 + '" at index ' + h8);
          }
          u6[l8] = 16 * c8 + f6;
        }
        return u6;
      }, n3.asyncLoop = async function(l7, c7, u6) {
        let h8 = Date.now();
        for (let f6 = 0; f6 < l7; f6++) {
          u6(f6);
          let l8 = Date.now() - h8;
          l8 >= 0 && l8 < c7 || (await (0, n3.nextTick)(), h8 += l8);
        }
      }, n3.utf8ToBytes = da, n3.toBytes = Jr, n3.concatBytes = function(...n4) {
        let l7 = 0;
        for (let u7 = 0; u7 < n4.length; u7++) {
          let h8 = n4[u7];
          (0, c6.abytes)(h8), l7 += h8.length;
        }
        let u6 = new Uint8Array(l7);
        for (let l8 = 0, c7 = 0; l8 < n4.length; l8++) {
          let h8 = n4[l8];
          u6.set(h8, c7), c7 += h8.length;
        }
        return u6;
      }, n3.checkOpts = function(n4, l7) {
        if (void 0 !== l7 && "[object Object]" !== {}.toString.call(l7)) throw new Error("Options should be object or undefined");
        return Object.assign(n4, l7);
      }, n3.wrapConstructor = function(n4) {
        let t8 = /* @__PURE__ */ __name((l8) => n4().update(Jr(l8)).digest(), "t"), l7 = n4();
        return t8.outputLen = l7.outputLen, t8.blockLen = l7.blockLen, t8.create = () => n4(), t8;
      }, n3.wrapConstructorWithOpts = function(n4) {
        let t8 = /* @__PURE__ */ __name((l8, c7) => n4(c7).update(Jr(l8)).digest(), "t"), l7 = n4({});
        return t8.outputLen = l7.outputLen, t8.blockLen = l7.blockLen, t8.create = (l8) => n4(l8), t8;
      }, n3.wrapXOFConstructorWithOpts = function(n4) {
        let t8 = /* @__PURE__ */ __name((l8, c7) => n4(c7).update(Jr(l8)).digest(), "t"), l7 = n4({});
        return t8.outputLen = l7.outputLen, t8.blockLen = l7.blockLen, t8.create = (l8) => n4(l8), t8;
      }, n3.randomBytes = function(n4 = 32) {
        if (l6.crypto && "function" == typeof l6.crypto.getRandomValues) return l6.crypto.getRandomValues(new Uint8Array(n4));
        if (l6.crypto && "function" == typeof l6.crypto.randomBytes) return l6.crypto.randomBytes(n4);
        throw new Error("crypto.getRandomValues must be defined");
      };
      var l6 = xr(), c6 = vr();
      function ri(n4) {
        return n4 << 24 & 4278190080 | n4 << 8 & 16711680 | n4 >>> 8 & 65280 | n4 >>> 24 & 255;
      }
      __name(ri, "ri");
      n3.isLE = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0], n3.byteSwapIfBE = n3.isLE ? (n4) => n4 : (n4) => ri(n4);
      var u5 = Array.from({ length: 256 }, (n4, l7) => l7.toString(16).padStart(2, "0"));
      var h7 = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function ma(n4) {
        return n4 >= h7._0 && n4 <= h7._9 ? n4 - h7._0 : n4 >= h7.A && n4 <= h7.F ? n4 - (h7.A - 10) : n4 >= h7.a && n4 <= h7.f ? n4 - (h7.a - 10) : void 0;
      }
      __name(ma, "ma");
      function da(n4) {
        if ("string" != typeof n4) throw new Error("utf8ToBytes expected string, got " + typeof n4);
        return new Uint8Array(new TextEncoder().encode(n4));
      }
      __name(da, "da");
      function Jr(n4) {
        return "string" == typeof n4 && (n4 = da(n4)), (0, c6.abytes)(n4), n4;
      }
      __name(Jr, "Jr");
      n3.nextTick = async () => {
      };
      n3.Hash = class {
        clone() {
          return this._cloneInto();
        }
      };
    });
    kr = re2((n3) => {
      wt(), bt(), vt(), St(), Zt(), Object.defineProperty(n3, "__esModule", { value: true }), n3.shake256 = n3.shake128 = n3.keccak_512 = n3.keccak_384 = n3.keccak_256 = n3.keccak_224 = n3.sha3_512 = n3.sha3_384 = n3.sha3_256 = n3.sha3_224 = n3.Keccak = void 0, n3.keccakP = xa;
      var l6 = vr(), c6 = Sr(), u5 = Pr(), h7 = [], f6 = [], p5 = [], m7 = BigInt(0), g5 = BigInt(1), y5 = BigInt(2), w5 = BigInt(7), b4 = BigInt(256), v5 = BigInt(113);
      for (let n4 = 0, l7 = g5, c7 = 1, u6 = 0; n4 < 24; n4++) {
        [c7, u6] = [u6, (2 * c7 + 3 * u6) % 5], h7.push(2 * (5 * u6 + c7)), f6.push((n4 + 1) * (n4 + 2) / 2 % 64);
        let _5 = m7;
        for (let n5 = 0; n5 < 7; n5++) l7 = (l7 << g5 ^ (l7 >> w5) * v5) % b4, l7 & y5 && (_5 ^= g5 << (g5 << BigInt(n5)) - g5);
        p5.push(_5);
      }
      var [_4, S6] = (0, c6.split)(p5, true), ga = /* @__PURE__ */ __name((n4, l7, u6) => u6 > 32 ? (0, c6.rotlBH)(n4, l7, u6) : (0, c6.rotlSH)(n4, l7, u6), "ga"), ya = /* @__PURE__ */ __name((n4, l7, u6) => u6 > 32 ? (0, c6.rotlBL)(n4, l7, u6) : (0, c6.rotlSL)(n4, l7, u6), "ya");
      function xa(n4, l7 = 24) {
        let c7 = new Uint32Array(10);
        for (let u6 = 24 - l7; u6 < 24; u6++) {
          for (let l9 = 0; l9 < 10; l9++) c7[l9] = n4[l9] ^ n4[l9 + 10] ^ n4[l9 + 20] ^ n4[l9 + 30] ^ n4[l9 + 40];
          for (let l9 = 0; l9 < 10; l9 += 2) {
            let u7 = (l9 + 8) % 10, h8 = (l9 + 2) % 10, f7 = c7[h8], p7 = c7[h8 + 1], m8 = ga(f7, p7, 1) ^ c7[u7], g6 = ya(f7, p7, 1) ^ c7[u7 + 1];
            for (let c8 = 0; c8 < 50; c8 += 10) n4[l9 + c8] ^= m8, n4[l9 + c8 + 1] ^= g6;
          }
          let l8 = n4[2], p6 = n4[3];
          for (let c8 = 0; c8 < 24; c8++) {
            let u7 = f6[c8], m8 = ga(l8, p6, u7), g6 = ya(l8, p6, u7), y6 = h7[c8];
            l8 = n4[y6], p6 = n4[y6 + 1], n4[y6] = m8, n4[y6 + 1] = g6;
          }
          for (let l9 = 0; l9 < 50; l9 += 10) {
            for (let u7 = 0; u7 < 10; u7++) c7[u7] = n4[l9 + u7];
            for (let u7 = 0; u7 < 10; u7++) n4[l9 + u7] ^= ~c7[(u7 + 2) % 10] & c7[(u7 + 4) % 10];
          }
          n4[0] ^= _4[u6], n4[1] ^= S6[u6];
        }
        c7.fill(0);
      }
      __name(xa, "xa");
      var E5 = class e11 extends u5.Hash {
        static {
          __name(this, "e");
        }
        constructor(n4, c7, h8, f7 = false, p6 = 24) {
          if (super(), this.blockLen = n4, this.suffix = c7, this.outputLen = h8, this.enableXOF = f7, this.rounds = p6, this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, (0, l6.anumber)(h8), 0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
          this.state = new Uint8Array(200), this.state32 = (0, u5.u32)(this.state);
        }
        keccak() {
          u5.isLE || (0, u5.byteSwap32)(this.state32), xa(this.state32, this.rounds), u5.isLE || (0, u5.byteSwap32)(this.state32), this.posOut = 0, this.pos = 0;
        }
        update(n4) {
          (0, l6.aexists)(this);
          let { blockLen: c7, state: h8 } = this, f7 = (n4 = (0, u5.toBytes)(n4)).length;
          for (let l7 = 0; l7 < f7; ) {
            let u6 = Math.min(c7 - this.pos, f7 - l7);
            for (let c8 = 0; c8 < u6; c8++) h8[this.pos++] ^= n4[l7++];
            this.pos === c7 && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = true;
          let { state: n4, suffix: l7, pos: c7, blockLen: u6 } = this;
          n4[c7] ^= l7, !!(128 & l7) && c7 === u6 - 1 && this.keccak(), n4[u6 - 1] ^= 128, this.keccak();
        }
        writeInto(n4) {
          (0, l6.aexists)(this, false), (0, l6.abytes)(n4), this.finish();
          let c7 = this.state, { blockLen: u6 } = this;
          for (let l7 = 0, h8 = n4.length; l7 < h8; ) {
            this.posOut >= u6 && this.keccak();
            let f7 = Math.min(u6 - this.posOut, h8 - l7);
            n4.set(c7.subarray(this.posOut, this.posOut + f7), l7), this.posOut += f7, l7 += f7;
          }
          return n4;
        }
        xofInto(n4) {
          if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
          return this.writeInto(n4);
        }
        xof(n4) {
          return (0, l6.anumber)(n4), this.xofInto(new Uint8Array(n4));
        }
        digestInto(n4) {
          if ((0, l6.aoutput)(n4, this), this.finished) throw new Error("digest() was already called");
          return this.writeInto(n4), this.destroy(), n4;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          this.destroyed = true, this.state.fill(0);
        }
        _cloneInto(n4) {
          let { blockLen: l7, suffix: c7, outputLen: u6, rounds: h8, enableXOF: f7 } = this;
          return n4 || (n4 = new e11(l7, c7, u6, f7, h8)), n4.state32.set(this.state32), n4.pos = this.pos, n4.posOut = this.posOut, n4.finished = this.finished, n4.rounds = h8, n4.suffix = c7, n4.outputLen = u6, n4.enableXOF = f7, n4.destroyed = this.destroyed, n4;
        }
      };
      n3.Keccak = E5;
      var Oe3 = /* @__PURE__ */ __name((n4, l7, c7) => (0, u5.wrapConstructor)(() => new E5(l7, n4, c7)), "Oe");
      n3.sha3_224 = Oe3(6, 144, 28), n3.sha3_256 = Oe3(6, 136, 32), n3.sha3_384 = Oe3(6, 104, 48), n3.sha3_512 = Oe3(6, 72, 64), n3.keccak_224 = Oe3(1, 144, 28), n3.keccak_256 = Oe3(1, 136, 32), n3.keccak_384 = Oe3(1, 104, 48), n3.keccak_512 = Oe3(1, 72, 64);
      var Ea = /* @__PURE__ */ __name((n4, l7, c7) => (0, u5.wrapXOFConstructorWithOpts)((u6 = {}) => new E5(l7, n4, void 0 === u6.dkLen ? c7 : u6.dkLen, true)), "Ea");
      n3.shake128 = Ea(31, 168, 16), n3.shake256 = Ea(31, 136, 32);
    });
    Or = re2((n3, l6) => {
      wt(), bt(), vt(), St(), Zt();
      var { sha3_512: c6 } = kr(), ni = /* @__PURE__ */ __name((n4 = 4, l7 = Math.random) => {
        let c7 = "";
        for (; c7.length < n4; ) c7 += Math.floor(36 * l7()).toString(36);
        return c7;
      }, "ni");
      function va(n4) {
        let l7 = 0n;
        for (let c7 of n4.values()) {
          l7 = (l7 << 8n) + BigInt(c7);
        }
        return l7;
      }
      __name(va, "va");
      var Ca = /* @__PURE__ */ __name((n4 = "") => va(c6(n4)).toString(36).slice(1), "Ca"), u5 = Array.from({ length: 26 }, (n4, l7) => String.fromCharCode(l7 + 97)), Sa = /* @__PURE__ */ __name(({ globalObj: n4 = typeof globalThis < "u" ? globalThis : {}, random: l7 = Math.random } = {}) => {
        let c7 = Object.keys(n4).toString(), u6 = c7.length ? c7 + ni(32, l7) : ni(32, l7);
        return Ca(u6).substring(0, 32);
      }, "Sa"), Ra = /* @__PURE__ */ __name((n4) => () => n4++, "Ra"), Ia = /* @__PURE__ */ __name(({ random: n4 = Math.random, counter: l7 = Ra(Math.floor(476782367 * n4())), length: c7 = 24, fingerprint: h8 = Sa({ random: n4 }) } = {}) => function() {
        let f6 = ((n5) => u5[Math.floor(n5() * u5.length)])(n4), p5 = Date.now().toString(36), m7 = l7().toString(36), g5 = ni(c7, n4);
        return `${f6 + Ca(`${p5 + g5 + m7 + h8}`).substring(1, c7)}`;
      }, "Ia"), h7 = Ia();
      l6.exports.getConstants = () => ({ defaultLength: 24, bigLength: 32 }), l6.exports.init = Ia, l6.exports.createId = h7, l6.exports.bufToBigInt = va, l6.exports.createCounter = Ra, l6.exports.createFingerprint = Sa, l6.exports.isCuid = (n4, { minLength: l7 = 2, maxLength: c7 = 32 } = {}) => {
        let u6 = n4.length, h8 = /^[0-9a-z]+$/;
        try {
          if ("string" == typeof n4 && u6 >= l7 && u6 <= c7 && h8.test(n4)) return true;
        } finally {
        }
        return false;
      };
    });
    Dr = re2((n3, l6) => {
      wt(), bt(), vt(), St(), Zt();
      var { createId: c6, init: u5, getConstants: h7, isCuid: f6 } = Or();
      l6.exports.createId = c6, l6.exports.init = u5, l6.exports.getConstants = h7, l6.exports.isCuid = f6;
    });
    wt(), bt(), vt(), St(), Zt();
    __name(Ki, "Ki");
    __name(zi, "zi");
    Et({}, { defineExtension: /* @__PURE__ */ __name(() => Ki, "defineExtension"), getExtensionContext: /* @__PURE__ */ __name(() => zi, "getExtensionContext") }), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt();
    __name(Yi, "Yi");
    Et({}, { validator: /* @__PURE__ */ __name(() => Yi, "validator") }), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt();
    Mr = class {
      static {
        __name(this, "Mr");
      }
      _map = /* @__PURE__ */ new Map();
      get(n3) {
        return this._map.get(n3)?.value;
      }
      set(n3, l6) {
        this._map.set(n3, { value: l6 });
      }
      getOrCreate(n3, l6) {
        let c6 = this._map.get(n3);
        if (c6) return c6.value;
        let u5 = l6();
        return this.set(n3, u5), u5;
      }
    };
    __name(Ce, "Ce");
    __name(Pt, "Pt");
    wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt();
    zr = true;
    typeof lt < "u" && ({ FORCE_COLOR: Lr, NODE_DISABLE_COLORS: $r, NO_COLOR: Qr, TERM: Hr } = lt.env || {}, zr = lt.stdout && lt.stdout.isTTY);
    Gr = !$r && null == Qr && "dumb" !== Hr && (null != Lr && "0" !== Lr || zr);
    __name(F2, "F");
    Kr = F2(1, 22);
    Xr = F2(2, 22);
    en = F2(4, 24);
    tn = F2(31, 39);
    rn = F2(32, 39);
    nn = F2(33, 39);
    sn = F2(34, 39);
    an = F2(36, 39);
    on = F2(90, 39);
    wt(), bt(), vt(), St(), Zt();
    ln = ["green", "yellow", "blue", "magenta", "cyan", "red"];
    cn = [];
    un = Date.now();
    dn = 0;
    hn = typeof lt < "u" ? lt.env : {};
    globalThis.DEBUG ??= hn.DEBUG ?? "", globalThis.DEBUG_COLORS ??= !hn.DEBUG_COLORS || "true" === hn.DEBUG_COLORS;
    fn = { enable(n3) {
      "string" == typeof n3 && (globalThis.DEBUG = n3);
    }, disable() {
      let n3 = globalThis.DEBUG;
      return globalThis.DEBUG = "", n3;
    }, enabled(n3) {
      let l6 = globalThis.DEBUG.split(",").map((n4) => n4.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), c6 = l6.some((l7) => "" !== l7 && "-" !== l7[0] && n3.match(RegExp(l7.split("*").join(".*") + "$"))), u5 = l6.some((l7) => "" !== l7 && "-" === l7[0] && n3.match(RegExp(l7.slice(1).split("*").join(".*") + "$")));
      return c6 && !u5;
    }, log: /* @__PURE__ */ __name((...n3) => {
      let [l6, c6, ...u5] = n3;
      (console.warn ?? console.log)(`${l6} ${c6}`, ...u5);
    }, "log"), formatters: {} };
    pn = new Proxy(function(n3) {
      let l6 = { color: ln[dn++ % ln.length], enabled: fn.enabled(n3), namespace: n3, log: fn.log, extend: /* @__PURE__ */ __name(() => {
      }, "extend") };
      return new Proxy((...n4) => {
        let { enabled: c6, namespace: u5, log: h7 } = l6;
        if (0 !== n4.length && cn.push([u5, ...n4]), cn.length > 100 && cn.shift(), fn.enabled(u5) || c6) {
          let l7 = n4.map((n5) => "string" == typeof n5 ? n5 : (function(n6, l8 = 2) {
            let c8 = /* @__PURE__ */ new Set();
            return JSON.stringify(n6, (n7, l9) => {
              if ("object" == typeof l9 && null !== l9) {
                if (c8.has(l9)) return "[Circular *]";
                c8.add(l9);
              } else if ("bigint" == typeof l9) return l9.toString();
              return l9;
            }, l8);
          })(n5)), c7 = `+${Date.now() - un}ms`;
          un = Date.now(), h7(u5, ...l7, c7);
        }
      }, { get: /* @__PURE__ */ __name((n4, c6) => l6[c6], "get"), set: /* @__PURE__ */ __name((n4, c6, u5) => l6[c6] = u5, "set") });
    }, { get: /* @__PURE__ */ __name((n3, l6) => fn[l6], "get"), set: /* @__PURE__ */ __name((n3, l6, c6) => fn[l6] = c6, "set") });
    wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt();
    mn = "prisma+postgres:";
    __name(An, "An");
    gn = {};
    Et(gn, { error: /* @__PURE__ */ __name(() => Eu, "error"), info: /* @__PURE__ */ __name(() => xu, "info"), log: /* @__PURE__ */ __name(() => bu, "log"), query: /* @__PURE__ */ __name(() => Tu, "query"), should: /* @__PURE__ */ __name(() => _n, "should"), tags: /* @__PURE__ */ __name(() => bn, "tags"), warn: /* @__PURE__ */ __name(() => vn, "warn") }), wt(), bt(), vt(), St(), Zt();
    bn = { error: tn("prisma:error"), warn: nn("prisma:warn"), info: an("prisma:info"), query: sn("prisma:query") };
    _n = { warn: /* @__PURE__ */ __name(() => !lt.env.PRISMA_DISABLE_WARNINGS, "warn") };
    __name(bu, "bu");
    __name(vn, "vn");
    __name(xu, "xu");
    __name(Eu, "Eu");
    __name(Tu, "Tu");
    __name(Te, "Te");
    wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt();
    Sn = (function({ onlyFirst: n3 = false } = {}) {
      let l6 = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");
      return new RegExp(l6, n3 ? void 0 : "g");
    })();
    __name(Ye, "Ye");
    __name(wr, "wr");
    __name(Ot, "Ot");
    __name(Xe, "Xe");
    __name(br, "br");
    __name(et, "et");
    wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt();
    __name(vu, "vu");
    Et({}, { ModelAction: /* @__PURE__ */ __name(() => Tn, "ModelAction"), datamodelEnumToSchemaEnum: /* @__PURE__ */ __name(() => vu, "datamodelEnumToSchemaEnum") }), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt();
    Tn = ((En = Tn || {}).findUnique = "findUnique", En.findUniqueOrThrow = "findUniqueOrThrow", En.findFirst = "findFirst", En.findFirstOrThrow = "findFirstOrThrow", En.findMany = "findMany", En.create = "create", En.createMany = "createMany", En.createManyAndReturn = "createManyAndReturn", En.update = "update", En.updateMany = "updateMany", En.updateManyAndReturn = "updateManyAndReturn", En.upsert = "upsert", En.delete = "delete", En.deleteMany = "deleteMany", En.groupBy = "groupBy", En.count = "count", En.aggregate = "aggregate", En.findRaw = "findRaw", En.aggregateRaw = "aggregateRaw", En);
    Ne(ur());
    xn = { red: tn, gray: on, dim: Xr, bold: Kr, underline: en, highlightSource: /* @__PURE__ */ __name((n3) => n3.highlight(), "highlightSource") };
    Pn = { red: /* @__PURE__ */ __name((n3) => n3, "red"), gray: /* @__PURE__ */ __name((n3) => n3, "gray"), dim: /* @__PURE__ */ __name((n3) => n3, "dim"), bold: /* @__PURE__ */ __name((n3) => n3, "bold"), underline: /* @__PURE__ */ __name((n3) => n3, "underline"), highlightSource: /* @__PURE__ */ __name((n3) => n3, "highlightSource") };
    __name(Ou, "Ou");
    __name(Er, "Er");
    wt(), bt(), vt(), St(), Zt();
    In = Ne(pr());
    __name(Oo, "Oo");
    __name(ko, "ko");
    __name(Nu, "Nu");
    __name(Ro, "Ro");
    __name(Io, "Io");
    wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt();
    Cn = class {
      static {
        __name(this, "Cn");
      }
      constructor(n3, l6) {
        this.name = n3, this.value = l6;
      }
      isRequired = false;
      makeRequired() {
        return this.isRequired = true, this;
      }
      write(n3) {
        let { colors: { green: l6 } } = n3.context;
        n3.addMarginSymbol(l6(this.isRequired ? "+" : "?")), n3.write(l6(this.name)), this.isRequired || n3.write(l6("?")), n3.write(l6(": ")), "string" == typeof this.value ? n3.write(l6(this.value)) : n3.write(this.value);
      }
    };
    wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), gr(), wt(), bt(), vt(), St(), Zt();
    Nn = class {
      static {
        __name(this, "Nn");
      }
      constructor(n3 = 0, l6) {
        this.context = l6, this.currentIndent = n3;
      }
      lines = [];
      currentLine = "";
      currentIndent = 0;
      marginSymbol;
      afterNextNewLineCallback;
      write(n3) {
        return "string" == typeof n3 ? this.currentLine += n3 : n3.write(this), this;
      }
      writeJoined(n3, l6, c6 = (n4, l7) => l7.write(n4)) {
        let u5 = l6.length - 1;
        for (let h7 = 0; h7 < l6.length; h7++) c6(l6[h7], this), h7 !== u5 && this.write(n3);
        return this;
      }
      writeLine(n3) {
        return this.write(n3).newLine();
      }
      newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let n3 = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, n3?.(), this;
      }
      withIndent(n3) {
        return this.indent(), n3(this), this.unindent(), this;
      }
      afterNextNewline(n3) {
        return this.afterNextNewLineCallback = n3, this;
      }
      indent() {
        return this.currentIndent++, this;
      }
      unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
      }
      addMarginSymbol(n3) {
        return this.marginSymbol = n3, this;
      }
      toString() {
        return this.lines.concat(this.indentedCurrentLine()).join("\n");
      }
      getCurrentLineLength() {
        return this.currentLine.length;
      }
      indentedCurrentLine() {
        let n3 = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + n3.slice(1) : n3;
      }
    };
    mr(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt();
    kn = class {
      static {
        __name(this, "kn");
      }
      constructor(n3) {
        this.value = n3;
      }
      write(n3) {
        n3.write(this.value);
      }
      markAsError() {
        this.value.markAsError();
      }
    };
    wt(), bt(), vt(), St(), Zt();
    Ar = /* @__PURE__ */ __name((n3) => n3, "Ar");
    On = { bold: Ar, red: Ar, green: Ar, dim: Ar, enabled: false };
    Rn = { bold: Kr, red: tn, green: rn, dim: Xr, enabled: true };
    Dn = { write(n3) {
      n3.writeLine(",");
    } };
    wt(), bt(), vt(), St(), Zt();
    Mn = class {
      static {
        __name(this, "Mn");
      }
      constructor(n3) {
        this.contents = n3;
      }
      isUnderlined = false;
      color = /* @__PURE__ */ __name((n3) => n3, "color");
      underline() {
        return this.isUnderlined = true, this;
      }
      setColor(n3) {
        return this.color = n3, this;
      }
      write(n3) {
        let l6 = n3.getCurrentLineLength();
        n3.write(this.color(this.contents)), this.isUnderlined && n3.afterNextNewline(() => {
          n3.write(" ".repeat(l6)).writeLine(this.color("~".repeat(this.contents.length)));
        });
      }
    };
    wt(), bt(), vt(), St(), Zt();
    Fn = class {
      static {
        __name(this, "Fn");
      }
      hasError = false;
      markAsError() {
        return this.hasError = true, this;
      }
    };
    Un = class extends Fn {
      static {
        __name(this, "Un");
      }
      items = [];
      addItem(n3) {
        return this.items.push(new kn(n3)), this;
      }
      getField(n3) {
        return this.items[n3];
      }
      getPrintWidth() {
        return 0 === this.items.length ? 2 : Math.max(...this.items.map((n3) => n3.value.getPrintWidth())) + 2;
      }
      write(n3) {
        0 !== this.items.length ? this.writeWithItems(n3) : this.writeEmpty(n3);
      }
      writeEmpty(n3) {
        let l6 = new Mn("[]");
        this.hasError && l6.setColor(n3.context.colors.red).underline(), n3.write(l6);
      }
      writeWithItems(n3) {
        let { colors: l6 } = n3.context;
        n3.writeLine("[").withIndent(() => n3.writeJoined(Dn, this.items).newLine()).write("]"), this.hasError && n3.afterNextNewline(() => {
          n3.writeLine(l6.red("~".repeat(this.getPrintWidth())));
        });
      }
      asObject() {
      }
    };
    Bn = class e extends Fn {
      static {
        __name(this, "e");
      }
      fields = {};
      suggestions = [];
      addField(n3) {
        this.fields[n3.name] = n3;
      }
      addSuggestion(n3) {
        this.suggestions.push(n3);
      }
      getField(n3) {
        return this.fields[n3];
      }
      getDeepField(n3) {
        let [l6, ...c6] = n3, u5 = this.getField(l6);
        if (!u5) return;
        let h7 = u5;
        for (let n4 of c6) {
          let l7;
          if (h7.value instanceof e ? l7 = h7.value.getField(n4) : h7.value instanceof Un && (l7 = h7.value.getField(Number(n4))), !l7) return;
          h7 = l7;
        }
        return h7;
      }
      getDeepFieldValue(n3) {
        return 0 === n3.length ? this : this.getDeepField(n3)?.value;
      }
      hasField(n3) {
        return !!this.getField(n3);
      }
      removeAllFields() {
        this.fields = {};
      }
      removeField(n3) {
        delete this.fields[n3];
      }
      getFields() {
        return this.fields;
      }
      isEmpty() {
        return 0 === Object.keys(this.fields).length;
      }
      getFieldValue(n3) {
        return this.getField(n3)?.value;
      }
      getDeepSubSelectionValue(n3) {
        let l6 = this;
        for (let c6 of n3) {
          if (!(l6 instanceof e)) return;
          let n4 = l6.getSubSelectionValue(c6);
          if (!n4) return;
          l6 = n4;
        }
        return l6;
      }
      getDeepSelectionParent(n3) {
        let l6 = this.getSelectionParent();
        if (!l6) return;
        let c6 = l6;
        for (let l7 of n3) {
          let n4 = c6.value.getFieldValue(l7);
          if (!(n4 && n4 instanceof e)) return;
          let u5 = n4.getSelectionParent();
          if (!u5) return;
          c6 = u5;
        }
        return c6;
      }
      getSelectionParent() {
        let n3 = this.getField("select")?.value.asObject();
        if (n3) return { kind: "select", value: n3 };
        let l6 = this.getField("include")?.value.asObject();
        return l6 ? { kind: "include", value: l6 } : void 0;
      }
      getSubSelectionValue(n3) {
        return this.getSelectionParent()?.value.fields[n3].value;
      }
      getPrintWidth() {
        let n3 = Object.values(this.fields);
        return 0 == n3.length ? 2 : Math.max(...n3.map((n4) => n4.getPrintWidth())) + 2;
      }
      write(n3) {
        let l6 = Object.values(this.fields);
        0 !== l6.length || 0 !== this.suggestions.length ? this.writeWithContents(n3, l6) : this.writeEmpty(n3);
      }
      asObject() {
        return this;
      }
      writeEmpty(n3) {
        let l6 = new Mn("{}");
        this.hasError && l6.setColor(n3.context.colors.red).underline(), n3.write(l6);
      }
      writeWithContents(n3, l6) {
        n3.writeLine("{").withIndent(() => {
          n3.writeJoined(Dn, [...l6, ...this.suggestions]).newLine();
        }), n3.write("}"), this.hasError && n3.afterNextNewline(() => {
          n3.writeLine(n3.context.colors.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    wt(), bt(), vt(), St(), Zt();
    Gn = class extends Fn {
      static {
        __name(this, "Gn");
      }
      constructor(n3) {
        super(), this.text = n3;
      }
      getPrintWidth() {
        return this.text.length;
      }
      write(n3) {
        let l6 = new Mn(this.text);
        this.hasError && l6.underline().setColor(n3.context.colors.red), n3.write(l6);
      }
      asObject() {
      }
    };
    wt(), bt(), vt(), St(), Zt();
    Kn = class {
      static {
        __name(this, "Kn");
      }
      fields = [];
      addField(n3, l6) {
        return this.fields.push({ write(c6) {
          let { green: u5, dim: h7 } = c6.context.colors;
          c6.write(u5(h7(`${n3}: ${l6}`))).addMarginSymbol(u5(h7("+")));
        } }), this;
      }
      write(n3) {
        let { colors: { green: l6 } } = n3.context;
        n3.writeLine(l6("{")).withIndent(() => {
          n3.writeJoined(Dn, this.fields).newLine();
        }).write(l6("}")).addMarginSymbol(l6("+"));
      }
    };
    __name(Tr, "Tr");
    __name(_o, "_o");
    __name(Fo, "Fo");
    __name(Uo, "Uo");
    __name($o, "$o");
    __name(qo, "qo");
    __name(ot, "ot");
    __name(Nt, "Nt");
    __name(Cr, "Cr");
    Yn = 3;
    wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt();
    Zn = class {
      static {
        __name(this, "Zn");
      }
      modelName;
      name;
      typeName;
      isList;
      isEnum;
      constructor(n3, l6, c6, u5, h7) {
        this.modelName = n3, this.name = l6, this.typeName = c6, this.isList = u5, this.isEnum = h7;
      }
      _toGraphQLInputType() {
        return `${this.isList ? "List" : ""}${this.isEnum ? "Enum" : ""}${this.typeName}FieldRefInput<${this.modelName}>`;
      }
    };
    __name(st, "st");
    wt(), bt(), vt(), St(), Zt();
    ei = class {
      static {
        __name(this, "ei");
      }
      constructor(n3, l6) {
        this.name = n3, this.value = l6;
      }
      hasError = false;
      markAsError() {
        this.hasError = true;
      }
      getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + 2;
      }
      write(n3) {
        let l6 = new Mn(this.name);
        this.hasError && l6.underline().setColor(n3.context.colors.red), n3.write(l6).write(": ").write(this.value);
      }
    };
    ti = class {
      static {
        __name(this, "ti");
      }
      arguments;
      errorMessages = [];
      constructor(n3) {
        this.arguments = n3;
      }
      write(n3) {
        n3.write(this.arguments);
      }
      addErrorMessage(n3) {
        this.errorMessages.push(n3);
      }
      renderAllMessages(n3) {
        return this.errorMessages.map((l6) => l6(n3)).join("\n");
      }
    };
    __name(at, "at");
    __name(Bo, "Bo");
    __name(jo, "jo");
    __name(Rr, "Rr");
    __name(Ir, "Ir");
    __name(ye, "ye");
    __name(Ho, "Ho");
    __name(Qo, "Qo");
    __name(sc, "sc");
    wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt();
    ai = class {
      static {
        __name(this, "ai");
      }
      constructor(n3, l6) {
        this.extension = n3, this.previous = l6;
      }
      computedFieldsCache = new Mr();
      modelExtensionsCache = new Mr();
      queryCallbacksCache = new Mr();
      clientExtensions = Pt(() => this.extension.client ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client } : this.previous?.getAllClientExtensions());
      batchCallbacks = Pt(() => {
        let n3 = this.previous?.getAllBatchQueryCallbacks() ?? [], l6 = this.extension.query?.$__internalBatch;
        return l6 ? n3.concat(l6) : n3;
      });
      getAllComputedFields(n3) {
        return this.computedFieldsCache.getOrCreate(n3, () => Ho(this.previous?.getAllComputedFields(n3), this.extension, n3));
      }
      getAllClientExtensions() {
        return this.clientExtensions.get();
      }
      getAllModelExtensions(n3) {
        return this.modelExtensionsCache.getOrCreate(n3, () => {
          let l6 = ye(n3);
          return this.extension.model && (this.extension.model[l6] || this.extension.model.$allModels) ? { ...this.previous?.getAllModelExtensions(n3), ...this.extension.model.$allModels, ...this.extension.model[l6] } : this.previous?.getAllModelExtensions(n3);
        });
      }
      getAllQueryCallbacks(n3, l6) {
        return this.queryCallbacksCache.getOrCreate(`${n3}:${l6}`, () => {
          let c6 = this.previous?.getAllQueryCallbacks(n3, l6) ?? [], u5 = [], h7 = this.extension.query;
          return h7 && (h7[n3] || h7.$allModels || h7[l6] || h7.$allOperations) ? (void 0 !== h7[n3] && (void 0 !== h7[n3][l6] && u5.push(h7[n3][l6]), void 0 !== h7[n3].$allOperations && u5.push(h7[n3].$allOperations)), "$none" !== n3 && void 0 !== h7.$allModels && (void 0 !== h7.$allModels[l6] && u5.push(h7.$allModels[l6]), void 0 !== h7.$allModels.$allOperations && u5.push(h7.$allModels.$allOperations)), void 0 !== h7[l6] && u5.push(h7[l6]), void 0 !== h7.$allOperations && u5.push(h7.$allOperations), c6.concat(u5)) : c6;
        });
      }
      getAllBatchQueryCallbacks() {
        return this.batchCallbacks.get();
      }
    };
    oi = class e2 {
      static {
        __name(this, "e");
      }
      constructor(n3) {
        this.head = n3;
      }
      static empty() {
        return new e2();
      }
      static single(n3) {
        return new e2(new ai(n3));
      }
      isEmpty() {
        return void 0 === this.head;
      }
      append(n3) {
        return new e2(new ai(n3, this.head));
      }
      getAllComputedFields(n3) {
        return this.head?.getAllComputedFields(n3);
      }
      getAllClientExtensions() {
        return this.head?.getAllClientExtensions();
      }
      getAllModelExtensions(n3) {
        return this.head?.getAllModelExtensions(n3);
      }
      getAllQueryCallbacks(n3, l6) {
        return this.head?.getAllQueryCallbacks(n3, l6) ?? [];
      }
      getAllBatchQueryCallbacks() {
        return this.head?.getAllBatchQueryCallbacks() ?? [];
      }
    };
    wt(), bt(), vt(), St(), Zt();
    ci = class {
      static {
        __name(this, "ci");
      }
      constructor(n3) {
        this.name = n3;
      }
    };
    wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt();
    ui = Symbol();
    di = class {
      static {
        __name(this, "di");
      }
      constructor(n3) {
        if (n3 !== ui) throw new Error("Skip instance can not be constructed directly");
      }
      ifUndefined(n3) {
        return void 0 === n3 ? fi : n3;
      }
    };
    fi = new di(ui);
    __name(he, "he");
    pi = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", createManyAndReturn: "createManyAndReturn", update: "updateOne", updateMany: "updateMany", updateManyAndReturn: "updateManyAndReturn", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
    mi = "explicitly `undefined` values are not allowed";
    __name(_t, "_t");
    __name(dc, "dc");
    __name(Zo, "Zo");
    __name(Yo, "Yo");
    __name(Ln, "Ln");
    vi = class e3 {
      static {
        __name(this, "e");
      }
      constructor(n3) {
        this.params = n3, this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]);
      }
      modelOrType;
      throwValidationError(n3) {
        Ir({ errors: [n3], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion, globalOmit: this.params.globalOmit });
      }
      getSelectionPath() {
        return this.params.selectionPath;
      }
      getArgumentPath() {
        return this.params.argumentPath;
      }
      getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1];
      }
      getOutputTypeDescription() {
        if (this.params.modelName && this.modelOrType) return { name: this.params.modelName, fields: this.modelOrType.fields.map((n3) => ({ name: n3.name, typeName: "boolean", isRelation: "object" === n3.kind })) };
      }
      isRawAction() {
        return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
      }
      isPreviewFeatureOn(n3) {
        return this.params.previewFeatures.includes(n3);
      }
      getComputedFields() {
        if (this.params.modelName) return this.params.extensions.getAllComputedFields(this.params.modelName);
      }
      findField(n3) {
        return this.modelOrType?.fields.find((l6) => l6.name === n3);
      }
      nestSelection(n3) {
        let l6 = this.findField(n3), c6 = "object" === l6?.kind ? l6.type : void 0;
        return new e3({ ...this.params, modelName: c6, selectionPath: this.params.selectionPath.concat(n3) });
      }
      getGlobalOmit() {
        return this.params.modelName && this.shouldApplyGlobalOmit() ? this.params.globalOmit?.[Ce(this.params.modelName)] ?? {} : {};
      }
      shouldApplyGlobalOmit() {
        switch (this.params.action) {
          case "findFirst":
          case "findFirstOrThrow":
          case "findUniqueOrThrow":
          case "findMany":
          case "upsert":
          case "findUnique":
          case "createManyAndReturn":
          case "create":
          case "update":
          case "updateManyAndReturn":
          case "delete":
            return true;
          case "executeRaw":
          case "aggregateRaw":
          case "runCommandRaw":
          case "findRaw":
          case "createMany":
          case "deleteMany":
          case "groupBy":
          case "updateMany":
          case "count":
          case "aggregate":
          case "queryRaw":
            return false;
          default:
            Te(this.params.action, "Unknown action");
        }
      }
      nestArgument(n3) {
        return new e3({ ...this.params, argumentPath: this.params.argumentPath.concat(n3) });
      }
    };
    wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt();
    _i = /* @__PURE__ */ new WeakMap();
    Pi = "$$PrismaTypedSql";
    Ai = class {
      static {
        __name(this, "Ai");
      }
      constructor(n3, l6) {
        _i.set(this, { sql: n3, values: l6 }), Object.defineProperty(this, Pi, { value: Pi });
      }
      get sql() {
        return _i.get(this).sql;
      }
      get values() {
        return _i.get(this).values;
      }
    };
    __name(Nr, "Nr");
    __name(Ut, "Ut");
    __name(Y2, "Y");
    __name(Ue, "Ue");
    wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), yr(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt();
    Ci = { enumerable: true, configurable: true, writable: true };
    __name(_r, "_r");
    Ni = Symbol.for("nodejs.util.inspect.custom");
    __name(le, "le");
    __name(ts, "ts");
    __name(ut, "ut");
    wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt();
    Oi = class {
      static {
        __name(this, "Oi");
      }
      getLocation() {
        return null;
      }
    };
    __name(Re, "Re");
    wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt();
    Di = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
    __name(ct, "ct");
    __name(Fr, "Fr");
    __name(Sc, "Sc");
    __name(Rc, "Rc");
    __name(Ic, "Ic");
    __name(Oc, "Oc");
    __name(as, "as");
    wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt();
    us = /* @__PURE__ */ __name((n3) => Array.isArray(n3) ? n3 : n3.split("."), "us");
    $n = /* @__PURE__ */ __name((n3, l6) => us(l6).reduce((n4, l7) => n4 && n4[l7], n3), "$n");
    __name(Mc, "Mc");
    __name(qn, "qn");
    Li = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
    Bi = ["aggregate", "count", "groupBy"];
    __name(Vn, "Vn");
    __name(_c, "_c");
    __name(Uc, "Uc");
    wt(), bt(), vt(), St(), Zt();
    Wi = Symbol();
    __name($t, "$t");
    __name($c, "$c");
    __name(qc, "qc");
    __name(ds, "ds");
    __name(Vc, "Vc");
    __name(Bc, "Bc");
    __name(Ur, "Ur");
    __name(gs, "gs");
    __name(ys, "ys");
    wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt();
    Gi = ["$connect", "$disconnect", "$on", "$transaction", "$extends"];
    __name(bs, "bs");
    __name(qt, "qt");
    __name(Es, "Es");
    __name(Ts, "Ts");
    __name(Ps, "Ps");
    __name(As, "As");
    xs = /* @__PURE__ */ __name((n3) => n3, "xs");
    __name(vs, "vs");
    __name(D2, "D");
    __name(jn, "jn");
    __name(pt, "pt");
    __name(Cs, "Cs");
    __name(Ss, "Ss");
    __name(Rs, "Rs");
    __name(Is, "Is");
    __name(Os, "Os");
    __name(Vt, "Vt");
    __name($e, "$e");
    __name(qr, "qr");
    wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt();
    Zi = 0;
    Xi = 1;
    es = 2;
    rs = 3;
    ns = 4;
    is = 5;
    ss = 6;
    os = 7;
    ls = 8;
    cs = 9;
    hs = 10;
    fs = 11;
    ps = 12;
    ms = 13;
    ws = 14;
    Ns = 15;
    Ms = 64;
    $s = 65;
    qs = 66;
    Us = 67;
    Vs = 68;
    ca = 69;
    ha = 70;
    fa = 71;
    pa = 72;
    wa = 73;
    ba = 74;
    Ta = 75;
    Pa = 76;
    Aa = 77;
    Na = 78;
    ka = 128;
    Oa = class extends Error {
      static {
        __name(this, "Oa");
      }
      name = "UserFacingError";
      code;
      meta;
      constructor(n3, l6, c6) {
        super(n3), this.code = l6, this.meta = c6 ?? {};
      }
      toQueryResponseErrorObject() {
        return { error: this.message, user_facing_error: { is_panic: false, message: this.message, meta: this.meta, error_code: this.code } };
      }
    };
    __name(mt, "mt");
    __name(Hn, "Hn");
    __name(ks, "ks");
    __name(Qn, "Qn");
    wt(), bt(), vt(), St(), Zt();
    Da = class extends Oa {
      static {
        __name(this, "Da");
      }
      name = "DataMapperError";
      constructor(n3, l6) {
        super(n3, "P2023", l6);
      }
    };
    Ma = /* @__PURE__ */ new WeakMap();
    __name(Ls, "Ls");
    __name(Wn, "Wn");
    __name(Ds, "Ds");
    __name(tp, "tp");
    __name(Jn, "Jn");
    Za = /\d{2}:\d{2}:\d{2}(?:\.\d+)?(Z|[+-]\d{2}(:?\d{2})?)?$/;
    __name(np, "np");
    __name(we, "we");
    __name(Vr, "Vr");
    __name(_s, "_s");
    __name(Fs, "Fs");
    __name(op, "op");
    __name(Br, "Br");
    __name(qe, "qe");
    wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), (Ua = La || (La = {}))[Ua.INTERNAL = 0] = "INTERNAL", Ua[Ua.SERVER = 1] = "SERVER", Ua[Ua.CLIENT = 2] = "CLIENT", Ua[Ua.PRODUCER = 3] = "PRODUCER", Ua[Ua.CONSUMER = 4] = "CONSUMER", wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt();
    eo = Ne(ar2(), 1);
    to = qe(lt.pid.toString(36), 2);
    ro = (function() {
      try {
        return eo.default.hostname();
      } catch {
        return lt.env._CLUSTER_NETWORK_NAME_ || lt.env.COMPUTERNAME || "hostname";
      }
    })();
    no = ro.length;
    io = qe(ro.split("").reduce(function(n3, l6) {
      return +n3 + l6.charCodeAt(0);
    }, +no + 36).toString(36), 2);
    __name(jr, "jr");
    wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt();
    so = (function(n3) {
      let l6 = Math.pow(36, 4), c6 = 0;
      function o4() {
        return qe((Math.random() * l6 | 0).toString(36), 4);
      }
      __name(o4, "o");
      function a6() {
        return "c" + (/* @__PURE__ */ new Date()).getTime().toString(36) + qe((c6 = c6 < l6 ? c6 : 0, c6++, c6 - 1).toString(36), 4) + n3() + (o4() + o4());
      }
      __name(a6, "a");
      return a6.fingerprint = n3, a6.isCuid = jr, a6;
    })(function() {
      return to + io;
    });
    ao = so;
    oo = Ne(Dr());
    wt(), bt(), vt(), St(), Zt(), sr(), wt(), bt(), vt(), St(), Zt();
    __name(ii, "ii");
    wt(), bt(), vt(), St(), Zt(), sr();
    ho = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
    fo = 281474976710655;
    !(function(n3) {
      n3.Base32IncorrectEncoding = "B32_ENC_INVALID", n3.DecodeTimeInvalidCharacter = "DEC_TIME_CHAR", n3.DecodeTimeValueMalformed = "DEC_TIME_MALFORMED", n3.EncodeTimeNegative = "ENC_TIME_NEG", n3.EncodeTimeSizeExceeded = "ENC_TIME_SIZE_EXCEED", n3.EncodeTimeValueMalformed = "ENC_TIME_MALFORMED", n3.PRNGDetectFailure = "PRNG_DETECT", n3.ULIDInvalid = "ULID_INVALID", n3.Unexpected = "UNEXPECTED", n3.UUIDInvalid = "UUID_INVALID";
    })(uo || (uo = {}));
    po = class extends Error {
      static {
        __name(this, "po");
      }
      constructor(n3, l6) {
        super(`${l6} (${n3})`), this.name = "ULIDError", this.code = n3;
      }
    };
    __name(Xp, "Xp");
    __name(em, "em");
    __name(_a, "_a");
    wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt();
    mo = [];
    for (let n3 = 0; n3 < 256; ++n3) mo.push((n3 + 256).toString(16).slice(1));
    __name(Wr, "Wr");
    wt(), bt(), vt(), St(), Zt(), sr();
    yo = new Uint8Array(256);
    wo = yo.length;
    __name(yt, "yt");
    wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), sr();
    bo = { randomUUID: dr };
    si = /* @__PURE__ */ __name(function(n3, l6, c6) {
      if (bo.randomUUID && !l6 && !n3) return bo.randomUUID();
      let u5 = (n3 = n3 || {}).random ?? n3.rng?.() ?? yt();
      if (u5.length < 16) throw new Error("Random bytes length must be >= 16");
      if (u5[6] = 15 & u5[6] | 64, u5[8] = 63 & u5[8] | 128, l6) {
        if ((c6 = c6 || 0) < 0 || c6 + 16 > l6.length) throw new RangeError(`UUID byte range ${c6}:${c6 + 15} is out of buffer bounds`);
        for (let n4 = 0; n4 < 16; ++n4) l6[c6 + n4] = u5[n4];
        return l6;
      }
      return Wr(u5);
    }, "si");
    wt(), bt(), vt(), St(), Zt();
    vo = {};
    __name(Fa, "Fa");
    li = /* @__PURE__ */ __name(function(n3, l6, c6) {
      let u5;
      if (n3) u5 = Fa(n3.random ?? n3.rng?.() ?? yt(), n3.msecs, n3.seq, l6, c6);
      else {
        let n4 = Date.now(), h7 = yt();
        (function(n5, l7, c7) {
          n5.msecs ??= -1 / 0, n5.seq ??= 0, l7 > n5.msecs ? (n5.seq = c7[6] << 23 | c7[7] << 16 | c7[8] << 8 | c7[9], n5.msecs = l7) : (n5.seq = n5.seq + 1 | 0, 0 === n5.seq && n5.msecs++);
        })(vo, n4, h7), u5 = Fa(h7, vo.msecs, vo.seq, l6, c6);
      }
      return l6 ?? Wr(u5);
    }, "li");
    So = class {
      static {
        __name(this, "So");
      }
      #n = {};
      constructor() {
        this.register("uuid", new To()), this.register("cuid", new xo()), this.register("ulid", new Po()), this.register("nanoid", new Ao()), this.register("product", new Co());
      }
      snapshot() {
        return Object.create(this.#n, { now: { value: new Eo() } });
      }
      register(n3, l6) {
        this.#n[n3] = l6;
      }
    };
    Eo = class {
      static {
        __name(this, "Eo");
      }
      #n = /* @__PURE__ */ new Date();
      generate() {
        return this.#n.toISOString();
      }
    };
    To = class {
      static {
        __name(this, "To");
      }
      generate(n3) {
        if (4 === n3) return si();
        if (7 === n3) return li();
        throw new Error("Invalid UUID generator arguments");
      }
    };
    xo = class {
      static {
        __name(this, "xo");
      }
      generate(n3) {
        if (1 === n3) return ao();
        if (2 === n3) return (0, oo.createId)();
        throw new Error("Invalid CUID generator arguments");
      }
    };
    Po = class {
      static {
        __name(this, "Po");
      }
      generate() {
        return _a();
      }
    };
    Ao = class {
      static {
        __name(this, "Ao");
      }
      generate(n3) {
        if ("number" == typeof n3) return ii(n3);
        if (void 0 === n3) return ii();
        throw new Error("Invalid Nanoid generator arguments");
      }
    };
    Co = class {
      static {
        __name(this, "Co");
      }
      generate(n3, l6) {
        if (void 0 === n3 || void 0 === l6) throw new Error("Invalid Product generator arguments");
        return Array.isArray(n3) && Array.isArray(l6) ? n3.flatMap((n4) => l6.map((l7) => [n4, l7])) : Array.isArray(n3) ? n3.map((n4) => [n4, l6]) : Array.isArray(l6) ? l6.map((l7) => [n3, l7]) : [[n3, l6]];
      }
    };
    __name(Zr, "Zr");
    __name(qa, "qa");
    __name($a, "$a");
    __name(ht, "ht");
    __name(gi, "gi");
    __name(yi, "yi");
    __name(bi, "bi");
    __name(ue2, "ue");
    __name(dm, "dm");
    __name(hi, "hi");
    __name(fm, "fm");
    __name(gm, "gm");
    __name(wi, "wi");
    __name(Va, "Va");
    __name(hm, "hm");
    __name(Ba, "Ba");
    __name(ja, "ja");
    __name(Kt, "Kt");
    __name(Qa, "Qa");
    __name(xi, "xi");
    wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt();
    No = class e4 {
      static {
        __name(this, "e");
      }
      #n;
      #i = new So();
      #s;
      #a;
      #o;
      #l;
      #c;
      constructor({ onQuery: n3, tracingHelper: l6, serializer: c6, rawSerializer: u5, provider: h7, connectionInfo: f6 }) {
        this.#n = n3, this.#s = l6, this.#a = c6, this.#o = u5 ?? c6, this.#l = h7, this.#c = f6;
      }
      static forSql(n3) {
        return new e4({ onQuery: n3.onQuery, tracingHelper: n3.tracingHelper, serializer: Ba, rawSerializer: ja, provider: n3.provider, connectionInfo: n3.connectionInfo });
      }
      async run(n3, l6) {
        let { value: c6 } = await this.interpretNode(n3, { ...l6, generators: this.#i.snapshot() }).catch((n4) => mt(n4));
        return c6;
      }
      async interpretNode(n3, l6) {
        switch (n3.type) {
          case "value":
            return { value: ue2(n3.args, l6.scope, l6.generators) };
          case "seq": {
            let c6;
            for (let u5 of n3.args) c6 = await this.interpretNode(u5, l6);
            return c6 ?? { value: void 0 };
          }
          case "get":
            return { value: l6.scope[n3.args.name] };
          case "let": {
            let c6 = Object.create(l6.scope);
            for (let u5 of n3.args.bindings) {
              let { value: n4 } = await this.interpretNode(u5.expr, { ...l6, scope: c6 });
              c6[u5.name] = n4;
            }
            return this.interpretNode(n3.args.expr, { ...l6, scope: c6 });
          }
          case "getFirstNonEmpty":
            for (let c6 of n3.args.names) {
              let n4 = l6.scope[c6];
              if (!Ha(n4)) return { value: n4 };
            }
            return { value: [] };
          case "concat": {
            let c6 = await Promise.all(n3.args.map((n4) => this.interpretNode(n4, l6).then((n5) => n5.value)));
            return { value: c6.length > 0 ? c6.reduce((n4, l7) => n4.concat(Ei(l7)), []) : [] };
          }
          case "sum": {
            let c6 = await Promise.all(n3.args.map((n4) => this.interpretNode(n4, l6).then((n5) => n5.value)));
            return { value: c6.length > 0 ? c6.reduce((n4, l7) => be2(n4) + be2(l7)) : 0 };
          }
          case "execute": {
            let c6 = bi(n3.args, l6.scope, l6.generators, this.#u()), u5 = 0;
            for (let h7 of c6) {
              let c7 = Ja(h7, l6.sqlCommenter);
              u5 += await this.#d(c7, l6.queryable, () => l6.queryable.executeRaw(c7).catch((l7) => "rawSql" === n3.args.type ? Hn(l7) : mt(l7)));
            }
            return { value: u5 };
          }
          case "query": {
            let c6, u5 = bi(n3.args, l6.scope, l6.generators, this.#u());
            for (let h7 of u5) {
              let u6 = Ja(h7, l6.sqlCommenter), f6 = await this.#d(u6, l6.queryable, () => l6.queryable.queryRaw(u6).catch((l7) => "rawSql" === n3.args.type ? Hn(l7) : mt(l7)));
              void 0 === c6 ? c6 = f6 : (c6.rows.push(...f6.rows), c6.lastInsertId = f6.lastInsertId);
            }
            return { value: "rawSql" === n3.args.type ? this.#o(c6) : this.#a(c6), lastInsertId: c6?.lastInsertId };
          }
          case "reverse": {
            let { value: c6, lastInsertId: u5 } = await this.interpretNode(n3.args, l6);
            return { value: Array.isArray(c6) ? c6.reverse() : c6, lastInsertId: u5 };
          }
          case "unique": {
            let { value: c6, lastInsertId: u5 } = await this.interpretNode(n3.args, l6);
            if (!Array.isArray(c6)) return { value: c6, lastInsertId: u5 };
            if (c6.length > 1) throw new Error(`Expected zero or one element, got ${c6.length}`);
            return { value: c6[0] ?? null, lastInsertId: u5 };
          }
          case "required": {
            let { value: c6, lastInsertId: u5 } = await this.interpretNode(n3.args, l6);
            if (Ha(c6)) throw new Error("Required value is empty");
            return { value: c6, lastInsertId: u5 };
          }
          case "mapField": {
            let { value: c6, lastInsertId: u5 } = await this.interpretNode(n3.args.records, l6);
            return { value: Wa(c6, n3.args.field), lastInsertId: u5 };
          }
          case "join": {
            let { value: c6, lastInsertId: u5 } = await this.interpretNode(n3.args.parent, l6);
            return null === c6 ? { value: null, lastInsertId: u5 } : { value: Em(c6, await Promise.all(n3.args.children.map(async (n4) => ({ joinExpr: n4, childRecords: (await this.interpretNode(n4.child, l6)).value })))), lastInsertId: u5 };
          }
          case "transaction": {
            if (!l6.transactionManager.enabled) return this.interpretNode(n3.args, l6);
            let c6 = l6.transactionManager.manager, u5 = await c6.startInternalTransaction(), h7 = await c6.getTransaction(u5, "query");
            try {
              let f6 = await this.interpretNode(n3.args, { ...l6, queryable: h7 });
              return await c6.commitTransaction(u5.id), f6;
            } catch (n4) {
              throw await c6.rollbackTransaction(u5.id), n4;
            }
          }
          case "dataMap": {
            let { value: c6, lastInsertId: u5 } = await this.interpretNode(n3.args.expr, l6);
            return { value: Ls(c6, n3.args.structure, n3.args.enums), lastInsertId: u5 };
          }
          case "validate": {
            let { value: c6, lastInsertId: u5 } = await this.interpretNode(n3.args.expr, l6);
            return Qa(c6, n3.args.rules, n3.args), { value: c6, lastInsertId: u5 };
          }
          case "if": {
            let { value: c6 } = await this.interpretNode(n3.args.value, l6);
            return xi(c6, n3.args.rule) ? await this.interpretNode(n3.args.then, l6) : await this.interpretNode(n3.args.else, l6);
          }
          case "unit":
            return { value: void 0 };
          case "diff": {
            let { value: c6 } = await this.interpretNode(n3.args.from, l6), { value: u5 } = await this.interpretNode(n3.args.to, l6), o4 = /* @__PURE__ */ __name((l7) => null !== l7 ? ht(Yr(l7), n3.args.fields) : null, "o"), h7 = new Set(Ei(u5).map(o4));
            return { value: Ei(c6).filter((n4) => !h7.has(o4(n4))) };
          }
          case "process": {
            let { value: c6, lastInsertId: u5 } = await this.interpretNode(n3.args.expr, l6);
            return { value: Zr(c6, n3.args.operations), lastInsertId: u5 };
          }
          case "initializeRecord": {
            let { lastInsertId: c6 } = await this.interpretNode(n3.args.expr, l6), u5 = {};
            for (let [h7, f6] of Object.entries(n3.args.fields)) u5[h7] = Tm(f6, c6, l6.scope, l6.generators);
            return { value: u5, lastInsertId: c6 };
          }
          case "mapRecord": {
            let { value: c6, lastInsertId: u5 } = await this.interpretNode(n3.args.expr, l6), h7 = null === c6 ? {} : Yr(c6);
            for (let [c7, u6] of Object.entries(n3.args.fields)) h7[c7] = Pm(u6, h7[c7], l6.scope, l6.generators);
            return { value: h7, lastInsertId: u5 };
          }
          default:
            D2(0, `Unexpected node type: ${n3.type}`);
        }
      }
      #u() {
        return void 0 !== this.#c?.maxBindValues ? this.#c.maxBindValues : this.#h();
      }
      #h() {
        if (void 0 !== this.#l) switch (this.#l) {
          case "cockroachdb":
          case "postgres":
          case "postgresql":
          case "prisma+postgres":
            return 32766;
          case "mysql":
            return 65535;
          case "sqlite":
            return 999;
          case "sqlserver":
            return 2098;
          case "mongodb":
            return;
          default:
            D2(this.#l, `Unexpected provider: ${this.#l}`);
        }
      }
      #d(n3, l6, c6) {
        return Br({ query: n3, execute: c6, provider: this.#l ?? l6.provider, tracingHelper: this.#s, onQuery: this.#n });
      }
    };
    __name(Ha, "Ha");
    __name(Ei, "Ei");
    __name(be2, "be");
    __name(Yr, "Yr");
    __name(Wa, "Wa");
    __name(Em, "Em");
    __name(Tm, "Tm");
    __name(Pm, "Pm");
    __name(Ja, "Ja");
    __name(Ga, "Ga");
    __name(Ka, "Ka");
    wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt();
    Do = class extends Oa {
      static {
        __name(this, "Do");
      }
      name = "TransactionManagerError";
      constructor(n3, l6) {
        super("Transaction API error: " + n3, "P2028", l6);
      }
    };
    Mo = class extends Do {
      static {
        __name(this, "Mo");
      }
      constructor() {
        super("Transaction not found. Transaction ID is invalid, refers to an old closed transaction Prisma doesn't have information about anymore, or was obtained before disconnecting.");
      }
    };
    Lo = class extends Do {
      static {
        __name(this, "Lo");
      }
      constructor(n3) {
        super(`Transaction already closed: A ${n3} cannot be executed on a committed transaction.`);
      }
    };
    Vo = class extends Do {
      static {
        __name(this, "Vo");
      }
      constructor(n3) {
        super(`Transaction already closed: A ${n3} cannot be executed on a transaction that was rolled back.`);
      }
    };
    Wo = class extends Do {
      static {
        __name(this, "Wo");
      }
      constructor() {
        super("Unable to start a transaction in the given time.");
      }
    };
    Jo = class extends Do {
      static {
        __name(this, "Jo");
      }
      constructor(n3, { timeout: l6, timeTaken: c6 }) {
        super(`A ${n3} cannot be executed on an expired transaction. The timeout for this transaction was ${l6} ms, however ${c6} ms passed since the start of the transaction. Consider increasing the interactive transaction timeout or doing less work in the transaction.`, { operation: n3, timeout: l6, timeTaken: c6 });
      }
    };
    zo = class extends Do {
      static {
        __name(this, "zo");
      }
      constructor(n3) {
        super(`Internal Consistency Error: ${n3}`);
      }
    };
    Go = class extends Do {
      static {
        __name(this, "Go");
      }
      constructor(n3) {
        super(`Invalid isolation level: ${n3}`, { isolationLevel: n3 });
      }
    };
    Ko = pn("prisma:client:transactionManager");
    Xo = class {
      static {
        __name(this, "Xo");
      }
      transactions = /* @__PURE__ */ new Map();
      closedTransactions = [];
      driverAdapter;
      transactionOptions;
      tracingHelper;
      #n;
      #i;
      constructor({ driverAdapter: n3, transactionOptions: l6, tracingHelper: c6, onQuery: u5, provider: h7 }) {
        this.driverAdapter = n3, this.transactionOptions = l6, this.tracingHelper = c6, this.#n = u5, this.#i = h7;
      }
      async startInternalTransaction(n3) {
        let l6 = void 0 !== n3 ? this.#c(n3) : {};
        return await this.tracingHelper.runInChildSpan("start_transaction", () => this.#s(l6));
      }
      async startTransaction(n3) {
        let l6 = void 0 !== n3 ? this.#c(n3) : this.transactionOptions;
        return await this.tracingHelper.runInChildSpan("start_transaction", () => this.#s(l6));
      }
      async #s(n3) {
        let l6 = { id: await Ga(), status: "waiting", timer: void 0, timeout: n3.timeout, startedAt: Date.now(), transaction: void 0 }, c6 = new AbortController(), u5 = za(() => c6.abort(), n3.maxWait);
        u5?.unref?.();
        let h7 = this.driverAdapter.startTransaction(n3.isolationLevel).catch(mt);
        switch (l6.transaction = await Promise.race([h7.finally(() => clearTimeout(u5)), Ka(c6.signal, "abort").then(() => {
        })]), this.transactions.set(l6.id, l6), l6.status) {
          case "waiting":
            if (c6.signal.aborted) throw h7.then((n4) => n4.rollback()).catch((n4) => Ko("error in discarded transaction:", n4)), await this.#l(l6, "timed_out"), new Wo();
            return l6.status = "running", l6.timer = this.#o(l6.id, n3.timeout), { id: l6.id };
          case "timed_out":
          case "running":
          case "committed":
          case "rolled_back":
            throw new zo(`Transaction in invalid state ${l6.status} although it just finished startup.`);
          default:
            D2(l6.status, "Unknown transaction status.");
        }
      }
      async commitTransaction(n3) {
        return await this.tracingHelper.runInChildSpan("commit_transaction", async () => {
          let l6 = this.#a(n3, "commit");
          await this.#l(l6, "committed");
        });
      }
      async rollbackTransaction(n3) {
        return await this.tracingHelper.runInChildSpan("rollback_transaction", async () => {
          let l6 = this.#a(n3, "rollback");
          await this.#l(l6, "rolled_back");
        });
      }
      async getTransaction(n3, l6) {
        let c6 = this.#a(n3.id, l6);
        if ("closing" === c6.status && (await c6.closing, c6 = this.#a(n3.id, l6)), !c6.transaction) throw new Mo();
        return c6.transaction;
      }
      #a(n3, l6) {
        let c6 = this.transactions.get(n3);
        if (!c6) {
          let c7 = this.closedTransactions.find((l7) => l7.id === n3);
          if (!c7) throw Ko("Transaction not found.", n3), new Mo();
          switch (Ko("Transaction already closed.", { transactionId: n3, status: c7.status }), c7.status) {
            case "closing":
            case "waiting":
            case "running":
              throw new zo("Active transaction found in closed transactions list.");
            case "committed":
              throw new Lo(l6);
            case "rolled_back":
              throw new Vo(l6);
            case "timed_out":
              throw new Jo(l6, { timeout: c7.timeout, timeTaken: Date.now() - c7.startedAt });
          }
        }
        if (["committed", "rolled_back", "timed_out"].includes(c6.status)) throw new zo("Closed transaction found in active transactions map.");
        return c6;
      }
      async cancelAllTransactions() {
        await Promise.allSettled([...this.transactions.values()].map((n3) => this.#l(n3, "rolled_back")));
      }
      #o(n3, l6) {
        let c6 = Date.now(), u5 = za(async () => {
          Ko("Transaction timed out.", { transactionId: n3, timeoutStartedAt: c6, timeout: l6 });
          let u6 = this.transactions.get(n3);
          u6 && ["running", "waiting"].includes(u6.status) ? await this.#l(u6, "timed_out") : Ko("Transaction already committed or rolled back when timeout happened.", n3);
        }, l6);
        return u5?.unref?.(), u5;
      }
      async #l(n3, l6) {
        "closing" === n3.status ? (await n3.closing, this.#a(n3.id, "committed" === l6 ? "commit" : "rollback")) : await Object.assign(n3, { status: "closing", reason: l6, closing: (async () => {
          Ko("Closing transaction.", { transactionId: n3.id, status: l6 });
          try {
            if (n3.transaction && "committed" === l6) if (n3.transaction.options.usePhantomQuery) await this.#u({ sql: '-- Implicit "COMMIT" query via underlying driver', args: [], argTypes: [] }, n3.transaction, () => n3.transaction.commit());
            else {
              let l7 = { sql: "COMMIT", args: [], argTypes: [] };
              await this.#u(l7, n3.transaction, () => n3.transaction.executeRaw(l7)).then(() => n3.transaction.commit(), (l8) => {
                let s6 = /* @__PURE__ */ __name(() => Promise.reject(l8), "s");
                return n3.transaction.rollback().then(s6, s6);
              });
            }
            else if (n3.transaction) if (n3.transaction.options.usePhantomQuery) await this.#u({ sql: '-- Implicit "ROLLBACK" query via underlying driver', args: [], argTypes: [] }, n3.transaction, () => n3.transaction.rollback());
            else {
              let l7 = { sql: "ROLLBACK", args: [], argTypes: [] };
              try {
                await this.#u(l7, n3.transaction, () => n3.transaction.executeRaw(l7));
              } finally {
                await n3.transaction.rollback();
              }
            }
          } finally {
            n3.status = l6, clearTimeout(n3.timer), n3.timer = void 0, this.transactions.delete(n3.id), this.closedTransactions.push(n3), this.closedTransactions.length > 100 && this.closedTransactions.shift();
          }
        })() }).closing;
      }
      #c(n3) {
        if (!n3.timeout) throw new Do("timeout is required");
        if (!n3.maxWait) throw new Do("maxWait is required");
        if ("SNAPSHOT" === n3.isolationLevel) throw new Go(n3.isolationLevel);
        return { ...n3, timeout: n3.timeout, maxWait: n3.maxWait };
      }
      #u(n3, l6, c6) {
        return Br({ query: n3, execute: c6, provider: this.#i ?? l6.provider, tracingHelper: this.tracingHelper, onQuery: this.#n });
      }
    };
    __name(za, "za");
    tl = "7.3.0";
    wt(), bt(), vt(), St(), Zt();
    rl = { bigint: "bigint", date: "datetime", decimal: "decimal", bytes: "bytes" };
    __name(Xa, "Xa");
    __name(el, "el");
    __name(Ya, "Ya");
    wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt();
    nl = Ne(hr());
    __name(sl, "sl");
    wt(), bt(), vt(), St(), Zt();
    il = class e5 {
      static {
        __name(this, "e");
      }
      #n;
      #i;
      #s;
      #a;
      #o;
      constructor(n3, l6, c6) {
        this.#n = n3, this.#i = l6, this.#s = c6, this.#a = l6.getConnectionInfo?.(), this.#o = No.forSql({ onQuery: this.#n.onQuery, tracingHelper: this.#n.tracingHelper, provider: this.#n.provider, connectionInfo: this.#a });
      }
      static async connect(n3) {
        let l6, c6;
        try {
          l6 = await n3.driverAdapterFactory.connect(), c6 = new Xo({ driverAdapter: l6, transactionOptions: n3.transactionOptions, tracingHelper: n3.tracingHelper, onQuery: n3.onQuery, provider: n3.provider });
        } catch (n4) {
          throw await l6?.dispose(), n4;
        }
        return new e5(n3, l6, c6);
      }
      getConnectionInfo() {
        let n3 = this.#a ?? { supportsRelationJoins: false };
        return Promise.resolve({ provider: this.#i.provider, connectionInfo: n3 });
      }
      async execute({ plan: n3, placeholderValues: l6, transaction: c6, batchIndex: u5, queryInfo: h7 }) {
        let f6 = c6 ? await this.#s.getTransaction(c6, void 0 !== u5 ? "batch query" : "query") : this.#i;
        return await this.#o.run(n3, { queryable: f6, transactionManager: c6 ? { enabled: false } : { enabled: true, manager: this.#s }, scope: l6, sqlCommenter: this.#n.sqlCommenters && { plugins: this.#n.sqlCommenters, queryInfo: h7 } });
      }
      async startTransaction(n3) {
        return { ...await this.#s.startTransaction(n3), payload: void 0 };
      }
      async commitTransaction(n3) {
        await this.#s.commitTransaction(n3.id);
      }
      async rollbackTransaction(n3) {
        await this.#s.rollbackTransaction(n3.id);
      }
      async disconnect() {
        try {
          await this.#s.cancelAllTransactions();
        } finally {
          await this.#i.dispose();
        }
      }
      apiKey() {
        return null;
      }
    };
    wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt();
    ol = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
    __name(al, "al");
    __name(ll, "ll");
    wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt();
    cl = class extends Error {
      static {
        __name(this, "cl");
      }
      clientVersion;
      cause;
      constructor(n3, l6) {
        super(n3), this.clientVersion = l6.clientVersion, this.cause = l6.cause;
      }
      get [Symbol.toStringTag]() {
        return this.name;
      }
    };
    ul = class extends cl {
      static {
        __name(this, "ul");
      }
      isRetryable;
      constructor(n3, l6) {
        super(n3, l6), this.isRetryable = l6.isRetryable ?? true;
      }
    };
    wt(), bt(), vt(), St(), Zt();
    dl = class extends ul {
      static {
        __name(this, "dl");
      }
      name = "InvalidDatasourceError";
      code = "P6001";
      constructor(n3, l6) {
        super(n3, (function(n4, l7) {
          return { ...n4, isRetryable: l7 };
        })(l6, false));
      }
    };
    Ot(dl, "InvalidDatasourceError"), wt(), bt(), vt(), St(), Zt();
    fl = Ne(cr());
    pl = class {
      static {
        __name(this, "pl");
      }
      apiKey;
      tracingHelper;
      logLevel;
      logQueries;
      engineHash;
      constructor({ apiKey: n3, tracingHelper: l6, logLevel: c6, logQueries: u5, engineHash: h7 }) {
        this.apiKey = n3, this.tracingHelper = l6, this.logLevel = c6, this.logQueries = u5, this.engineHash = h7;
      }
      build({ traceparent: n3, transactionId: l6 } = {}) {
        let c6 = { Accept: "application/json", Authorization: `Bearer ${this.apiKey}`, "Content-Type": "application/json", "Prisma-Engine-Hash": this.engineHash, "Prisma-Engine-Version": fl.enginesVersion };
        this.tracingHelper.isEnabled() && (c6.traceparent = n3 ?? this.tracingHelper.getTraceParent()), l6 && (c6["X-Transaction-Id"] = l6);
        let u5 = this.#n();
        return u5.length > 0 && (c6["X-Capture-Telemetry"] = u5.join(", ")), c6;
      }
      #n() {
        let n3 = [];
        return this.tracingHelper.isEnabled() && n3.push("tracing"), this.logLevel && n3.push(this.logLevel), this.logQueries && n3.push("query"), n3;
      }
    };
    __name(Ti, "Ti");
    wt(), bt(), vt(), St(), Zt();
    ml = pn("prisma:client:clientEngine:remoteExecutor");
    gl = class {
      static {
        __name(this, "gl");
      }
      #n;
      #i;
      #s;
      #a;
      #o;
      #l;
      constructor(n3) {
        this.#n = n3.clientVersion, this.#a = n3.logEmitter, this.#o = n3.tracingHelper, this.#l = n3.sqlCommenters;
        let { url: l6, apiKey: c6 } = (function(n4) {
          let l7, c7 = { clientVersion: n4.clientVersion };
          try {
            l7 = new URL(n4.accelerateUrl);
          } catch (n5) {
            let l8 = n5.message;
            throw new dl(`Error validating \`accelerateUrl\`, the URL cannot be parsed, reason: ${l8}`, c7);
          }
          let { protocol: u5, searchParams: h7 } = l7;
          if ("prisma:" !== u5 && u5 !== mn) throw new dl("Error validating `accelerateUrl`: the URL must start with the protocol `prisma://` or `prisma+postgres://`", c7);
          let f6 = h7.get("api_key");
          if (null === f6 || f6.length < 1) throw new dl("Error validating `accelerateUrl`: the URL must contain a valid API key", c7);
          let p5 = An(l7) ? "http:" : "https:";
          return lt.env.TEST_CLIENT_ENGINE_REMOTE_EXECUTOR && l7.searchParams.has("use_http") && (p5 = "http:"), { apiKey: f6, url: new URL(l7.href.replace(u5, p5)) };
        })({ clientVersion: n3.clientVersion, accelerateUrl: n3.accelerateUrl });
        this.#s = new bl(l6), this.#i = new pl({ apiKey: c6, engineHash: n3.clientVersion, logLevel: n3.logLevel, logQueries: n3.logQueries, tracingHelper: n3.tracingHelper });
      }
      async getConnectionInfo() {
        return await this.#c({ path: "/connection-info", method: "GET" });
      }
      async execute({ plan: n3, placeholderValues: l6, batchIndex: c6, model: u5, operation: h7, transaction: f6, customFetch: p5, queryInfo: m7 }) {
        let g5 = m7 && this.#l?.length ? Vr(this.#l, { query: m7 }) : void 0;
        return (await this.#c({ path: f6 ? `/transaction/${f6.id}/query` : "/query", method: "POST", body: { model: u5, operation: h7, plan: n3, params: l6, comments: g5 && Object.keys(g5).length > 0 ? g5 : void 0 }, batchRequestIdx: c6, fetch: p5 })).data;
      }
      async startTransaction(n3) {
        return { ...await this.#c({ path: "/transaction/start", method: "POST", body: n3 }), payload: void 0 };
      }
      async commitTransaction(n3) {
        await this.#c({ path: `/transaction/${n3.id}/commit`, method: "POST" });
      }
      async rollbackTransaction(n3) {
        await this.#c({ path: `/transaction/${n3.id}/rollback`, method: "POST" });
      }
      disconnect() {
        return Promise.resolve();
      }
      apiKey() {
        return this.#i.apiKey;
      }
      async #c({ path: n3, method: l6, body: c6, fetch: u5 = globalThis.fetch, batchRequestIdx: h7 }) {
        let f6 = await this.#s.request({ method: l6, path: n3, headers: this.#i.build(), body: c6, fetch: u5 });
        f6.ok || await this.#u(f6, h7);
        let p5 = await f6.json();
        return "object" == typeof p5.extensions && null !== p5.extensions && this.#h(p5.extensions), p5;
      }
      async #u(n3, l6) {
        let c6, u5 = n3.headers.get("Prisma-Error-Code"), h7 = await n3.text(), f6 = h7;
        try {
          c6 = JSON.parse(h7);
        } catch {
          c6 = {};
        }
        "string" == typeof c6.code && (u5 = c6.code), "string" == typeof c6.error ? f6 = c6.error : "string" == typeof c6.message ? f6 = c6.message : "object" == typeof c6.InvalidRequestError && null !== c6.InvalidRequestError && "string" == typeof c6.InvalidRequestError.reason && (f6 = c6.InvalidRequestError.reason), f6 = f6 || `HTTP ${n3.status}: ${n3.statusText}`;
        let p5 = "object" == typeof c6.meta && null !== c6.meta ? c6.meta : c6;
        throw new P2(f6, { clientVersion: this.#n, code: u5 ?? "P6000", batchRequestIdx: l6, meta: p5 });
      }
      #h(n3) {
        if (n3.logs) for (let l6 of n3.logs) this.#d(l6);
        n3.spans && this.#o.dispatchEngineSpans(n3.spans);
      }
      #d(n3) {
        switch (n3.level) {
          case "debug":
          case "trace":
            ml(n3);
            break;
          case "error":
          case "warn":
          case "info":
            this.#a.emit(n3.level, { timestamp: Ti(n3.timestamp), message: n3.attributes.message ?? "", target: n3.target ?? "RemoteExecutor" });
            break;
          case "query":
            this.#a.emit("query", { query: n3.attributes.query ?? "", timestamp: Ti(n3.timestamp), duration: n3.attributes.duration_ms ?? 0, params: n3.attributes.params ?? "", target: n3.target ?? "RemoteExecutor" });
            break;
          default:
            throw new Error(`Unexpected log level: ${n3.level}`);
        }
      }
    };
    bl = class {
      static {
        __name(this, "bl");
      }
      #n;
      #i;
      #s;
      constructor(n3) {
        this.#n = n3, this.#i = /* @__PURE__ */ new Map();
      }
      async request({ method: n3, path: l6, headers: c6, body: u5, fetch: h7 }) {
        let f6 = new URL(l6, this.#n), p5 = this.#a(f6);
        p5 && (c6.Cookie = p5), this.#s && (c6["Accelerate-Query-Engine-Jwt"] = this.#s);
        let m7 = await h7(f6.href, { method: n3, body: void 0 !== u5 ? JSON.stringify(u5) : void 0, headers: c6 });
        return ml(n3, f6, m7.status, m7.statusText), this.#s = m7.headers.get("Accelerate-Query-Engine-Jwt") ?? void 0, this.#o(f6, m7), m7;
      }
      #a(n3) {
        let l6 = [], c6 = /* @__PURE__ */ new Date();
        for (let [u5, h7] of this.#i) {
          if (h7.expires && h7.expires < c6) {
            this.#i.delete(u5);
            continue;
          }
          let f6 = h7.domain ?? n3.hostname, p5 = h7.path ?? "/";
          n3.hostname.endsWith(f6) && n3.pathname.startsWith(p5) && l6.push(al(h7.name, h7.value));
        }
        return l6.length > 0 ? l6.join("; ") : void 0;
      }
      #o(n3, l6) {
        let c6 = l6.headers.getSetCookie?.() || [];
        if (0 === c6.length) {
          let n4 = l6.headers.get("Set-Cookie");
          n4 && c6.push(n4);
        }
        for (let l7 of c6) {
          let c7 = ll(l7), u5 = c7.domain ?? n3.hostname, h7 = c7.path ?? "/", f6 = `${u5}:${h7}:${c7.name}`;
          this.#i.set(f6, { name: c7.name, value: c7.value, domain: u5, path: h7, expires: c7.expires });
        }
      }
    };
    wt(), bt(), vt(), St(), Zt();
    Sl = {};
    Tl = { async loadQueryCompiler(n3) {
      let l6, { clientVersion: c6, compilerWasm: u5 } = n3;
      if (void 0 === u5) throw new x2("WASM query compiler was unexpectedly `undefined`", c6);
      return void 0 === n3.activeProvider || void 0 === Sl[n3.activeProvider] ? (l6 = (async () => {
        let n4 = await u5.getRuntime(), l7 = await u5.getQueryCompilerWasmModule();
        if (null == l7) throw new x2("The loaded wasm module was unexpectedly `undefined` or `null` once loaded", c6);
        let h7 = { [u5.importName]: n4 }, f6 = new WebAssembly.Instance(l7, h7), p5 = f6.exports.__wbindgen_start;
        return n4.__wbg_set_wasm(f6.exports), p5(), n4.QueryCompiler;
      })(), void 0 !== n3.activeProvider && (Sl[n3.activeProvider] = l6)) : l6 = Sl[n3.activeProvider], await l6;
    } };
    xl = pn("prisma:client:clientEngine");
    Il = globalThis;
    Il.PRISMA_WASM_PANIC_REGISTRY = { set_message(n3) {
      throw new A(n3, tl);
    } };
    Nl = class {
      static {
        __name(this, "Nl");
      }
      name = "ClientEngine";
      #n;
      #i = { type: "disconnected" };
      #s;
      #a;
      config;
      datamodel;
      logEmitter;
      logQueries;
      logLevel;
      tracingHelper;
      #o;
      constructor(n3, l6) {
        if (void 0 !== n3.accelerateUrl) this.#a = { remote: true, accelerateUrl: n3.accelerateUrl };
        else {
          if (!n3.adapter) throw new x2("Missing configured driver adapter. Engine type `client` requires an active driver adapter. Please check your PrismaClient initialization code.", n3.clientVersion, "P2038");
          this.#a = { remote: false, driverAdapterFactory: n3.adapter }, xl("Using driver adapter: %O", n3.adapter);
        }
        this.#s = l6 ?? Tl, this.config = n3, this.logQueries = n3.logQueries ?? false, this.logLevel = n3.logLevel ?? "error", this.logEmitter = n3.logEmitter, this.datamodel = n3.inlineSchema, this.tracingHelper = n3.tracingHelper, n3.enableDebugLogs && (this.logLevel = "debug"), this.logQueries && (this.#o = (n4) => {
          this.logEmitter.emit("query", { ...n4, params: Vt(n4.params), target: "ClientEngine" });
        });
      }
      async #l() {
        switch (this.#i.type) {
          case "disconnected": {
            let n3 = this.tracingHelper.runInChildSpan("connect", async () => {
              let n4, l6;
              try {
                n4 = await this.#c(), l6 = await this.#u(n4);
              } catch (c7) {
                throw this.#i = { type: "disconnected" }, l6?.free(), await n4?.disconnect(), c7;
              }
              let c6 = { executor: n4, queryCompiler: l6 };
              return this.#i = { type: "connected", engine: c6 }, c6;
            });
            return this.#i = { type: "connecting", promise: n3 }, await n3;
          }
          case "connecting":
            return await this.#i.promise;
          case "connected":
            return this.#i.engine;
          case "disconnecting":
            return await this.#i.promise, await this.#l();
        }
      }
      async #c() {
        return this.#a.remote ? new gl({ clientVersion: this.config.clientVersion, accelerateUrl: this.#a.accelerateUrl, logEmitter: this.logEmitter, logLevel: this.logLevel, logQueries: this.logQueries, tracingHelper: this.tracingHelper, sqlCommenters: this.config.sqlCommenters }) : await il.connect({ driverAdapterFactory: this.#a.driverAdapterFactory, tracingHelper: this.tracingHelper, transactionOptions: { ...this.config.transactionOptions, isolationLevel: this.#f(this.config.transactionOptions.isolationLevel) }, onQuery: this.#o, provider: this.config.activeProvider, sqlCommenters: this.config.sqlCommenters });
      }
      async #u(n3) {
        let l6 = this.#n;
        void 0 === l6 && (l6 = await this.#s.loadQueryCompiler(this.config), this.#n = l6);
        let { provider: c6, connectionInfo: u5 } = await n3.getConnectionInfo();
        try {
          return this.#p(() => new l6({ datamodel: this.datamodel, provider: c6, connectionInfo: u5 }), void 0, false);
        } catch (n4) {
          throw this.#h(n4);
        }
      }
      #h(n3) {
        if (n3 instanceof A) return n3;
        try {
          let l6 = JSON.parse(n3.message);
          return new x2(l6.message, this.config.clientVersion, l6.error_code);
        } catch {
          return n3;
        }
      }
      #d(n3, l6) {
        if (n3 instanceof x2) return n3;
        if ("GenericFailure" === n3.code && n3.message?.startsWith("PANIC:")) return new A(yl(this, n3.message, l6), this.config.clientVersion);
        if (n3 instanceof Oa) return new P2(n3.message, { code: n3.code, meta: n3.meta, clientVersion: this.config.clientVersion });
        try {
          let l7 = JSON.parse(n3);
          return new I(`${l7.message}
${l7.backtrace}`, { clientVersion: this.config.clientVersion });
        } catch {
          return n3;
        }
      }
      #m(n3) {
        return n3 instanceof A ? n3 : "string" == typeof n3.message && "string" == typeof n3.code ? new P2(n3.message, { code: n3.code, meta: n3.meta, clientVersion: this.config.clientVersion }) : "string" == typeof n3.message ? new I(n3.message, { clientVersion: this.config.clientVersion }) : n3;
      }
      #p(n3, l6, c6 = true) {
        let u5, h7 = Il.PRISMA_WASM_PANIC_REGISTRY.set_message;
        globalThis.PRISMA_WASM_PANIC_REGISTRY.set_message = (n4) => {
          u5 = n4;
        };
        try {
          return n3();
        } finally {
          if (globalThis.PRISMA_WASM_PANIC_REGISTRY.set_message = h7, u5) throw this.#n = void 0, c6 && this.stop().catch((n4) => xl("failed to disconnect:", n4)), new A(yl(this, u5, l6), this.config.clientVersion);
        }
      }
      onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the client engine, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
      }
      async start() {
        await this.#l();
      }
      async stop() {
        switch (this.#i.type) {
          case "disconnected":
            return;
          case "connecting":
            return await this.#i.promise, await this.stop();
          case "connected": {
            let n3 = this.#i.engine, l6 = this.tracingHelper.runInChildSpan("disconnect", async () => {
              try {
                await n3.executor.disconnect(), n3.queryCompiler.free();
              } finally {
                this.#i = { type: "disconnected" };
              }
            });
            return this.#i = { type: "disconnecting", promise: l6 }, await l6;
          }
          case "disconnecting":
            return await this.#i.promise;
        }
      }
      version() {
        return "unknown";
      }
      async transaction(n3, l6, c6) {
        let u5, { executor: h7 } = await this.#l();
        try {
          if ("start" === n3) {
            let n4 = c6;
            u5 = await h7.startTransaction({ ...n4, isolationLevel: this.#f(n4.isolationLevel) });
          } else if ("commit" === n3) {
            let n4 = c6;
            await h7.commitTransaction(n4);
          } else if ("rollback" === n3) {
            let n4 = c6;
            await h7.rollbackTransaction(n4);
          } else Te(0, "Invalid transaction action.");
        } catch (n4) {
          throw this.#d(n4);
        }
        return u5 ? { id: u5.id, payload: void 0 } : void 0;
      }
      async request(n3, { interactiveTransaction: l6, customDataProxyFetch: c6 }) {
        xl("sending request");
        let { executor: u5, queryCompiler: h7 } = await this.#l().catch((l7) => {
          throw this.#d(l7, JSON.stringify(n3));
        }), f6 = this.#g(n3, h7);
        try {
          xl("query plan created", f6);
          let h8 = {}, p5 = await u5.execute({ plan: f6, model: n3.modelName, operation: n3.action, placeholderValues: h8, transaction: l6, batchIndex: void 0, customFetch: c6?.(globalThis.fetch), queryInfo: { type: "single", modelName: n3.modelName, action: n3.action, query: n3.query } });
          return xl("query plan executed"), { data: { [n3.action]: p5 } };
        } catch (l7) {
          throw this.#d(l7, JSON.stringify(n3));
        }
      }
      async requestBatch(n3, { transaction: l6, customDataProxyFetch: c6 }) {
        if (0 === n3.length) return [];
        let u5 = n3[0].action, h7 = n3[0].modelName, f6 = (function(n4, l7) {
          return { batch: n4, transaction: "batch" === l7?.kind ? { isolationLevel: l7.options.isolationLevel } : void 0 };
        })(n3, l6), { executor: p5, queryCompiler: m7 } = await this.#l().catch((n4) => {
          throw this.#d(n4, JSON.stringify(f6));
        }), g5 = this.#y(f6, m7);
        try {
          let f7;
          "itx" === l6?.kind && (f7 = l6.options);
          let m8 = {};
          switch (g5.type) {
            case "multi": {
              if ("itx" !== l6?.kind) {
                let n4 = l6?.options.isolationLevel ? { ...this.config.transactionOptions, isolationLevel: l6.options.isolationLevel } : this.config.transactionOptions;
                f7 = await this.transaction("start", {}, n4);
              }
              let u6 = [], h8 = false;
              for (let [l7, y5] of g5.plans.entries()) try {
                let h9 = await p5.execute({ plan: y5, placeholderValues: m8, model: n3[l7].modelName, operation: n3[l7].action, batchIndex: l7, transaction: f7, customFetch: c6?.(globalThis.fetch), queryInfo: { type: "single", ...n3[l7] } });
                u6.push({ data: { [n3[l7].action]: h9 } });
              } catch (n4) {
                u6.push(n4), h8 = true;
                break;
              }
              return void 0 !== f7 && "itx" !== l6?.kind && (h8 ? await this.transaction("rollback", {}, f7) : await this.transaction("commit", {}, f7)), u6;
            }
            case "compacted":
              if (!n3.every((n4) => n4.action === u5 && n4.modelName === h7)) {
                let l7 = n3.map((n4) => n4.action).join(", "), c7 = n3.map((n4) => n4.modelName).join(", ");
                throw new Error(`Internal error: All queries in a compacted batch must have the same action and model name, but received actions: [${l7}] and model names: [${c7}]. This indicates a bug in the client. Please report this issue to the Prisma team with your query details.`);
              }
              if (void 0 === h7) throw new Error("Internal error: A compacted batch cannot contain raw queries. This indicates a bug in the client. Please report this issue to the Prisma team with your query details.");
              return (function(n4, l7) {
                let c7 = n4.map((n5) => l7.keys.reduce((l8, c8) => (l8[c8] = $e(n5[c8]), l8), {})), u6 = new Set(l7.nestedSelection);
                return l7.arguments.map((h8) => {
                  let f8 = c7.findIndex((n5) => pt(n5, h8));
                  if (-1 === f8) return l7.expectNonEmpty ? new Oa("An operation failed because it depends on one or more records that were required but not found", "P2025") : null;
                  {
                    let l8 = Object.entries(n4[f8]).filter(([n5]) => u6.has(n5));
                    return Object.fromEntries(l8);
                  }
                });
              })(await p5.execute({ plan: g5.plan, placeholderValues: m8, model: h7, operation: u5, batchIndex: void 0, transaction: f7, customFetch: c6?.(globalThis.fetch), queryInfo: { type: "compacted", action: u5, modelName: h7, queries: n3 } }), g5).map((n4) => ({ data: { [u5]: n4 } }));
          }
        } catch (n4) {
          throw this.#d(n4, JSON.stringify(f6));
        }
      }
      async apiKey() {
        let { executor: n3 } = await this.#l();
        return n3.apiKey();
      }
      #g(n3, l6) {
        if (hl(n3)) return wl(n3);
        try {
          return this.#p(() => this.#w({ queries: [n3], execute: /* @__PURE__ */ __name(() => l6.compile(JSON.stringify(n3)), "execute") }));
        } catch (n4) {
          throw this.#m(n4);
        }
      }
      #y(n3, l6) {
        let c6 = n3.batch.filter(hl);
        if (c6.length === n3.batch.length) return { type: "multi", plans: c6.map((n4) => wl(n4)) };
        try {
          return this.#p(() => this.#w({ queries: n3.batch, execute: /* @__PURE__ */ __name(() => l6.compileBatch(JSON.stringify(n3)), "execute") }));
        } catch (n4) {
          throw this.#m(n4);
        }
      }
      #f(n3) {
        switch (n3) {
          case void 0:
            return;
          case "ReadUncommitted":
            return "READ UNCOMMITTED";
          case "ReadCommitted":
            return "READ COMMITTED";
          case "RepeatableRead":
            return "REPEATABLE READ";
          case "Serializable":
            return "SERIALIZABLE";
          case "Snapshot":
            return "SNAPSHOT";
          default:
            throw new P2(`Inconsistent column data: Conversion failed: Invalid isolation level \`${n3}\``, { code: "P2023", clientVersion: this.config.clientVersion, meta: { providedIsolationLevel: n3 } });
        }
      }
      #w({ queries: n3, execute: l6 }) {
        return this.tracingHelper.runInChildSpan({ name: "compile", attributes: { models: n3.map((n4) => n4.modelName).filter((n4) => void 0 !== n4), actions: n3.map((n4) => n4.action) } }, l6);
      }
    };
    __name(yl, "yl");
    __name(hl, "hl");
    __name(wl, "wl");
    wt(), bt(), vt(), St(), Zt();
    El = /* @__PURE__ */ __name((n3) => ({ command: n3 }), "El");
    wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt();
    __name(xt, "xt");
    __name(Pl, "Pl");
    __name(vl, "vl");
    __name(Cl, "Cl");
    __name(Al, "Al");
    wt(), bt(), vt(), St(), Zt();
    kl = /^(\s*alter\s)/i;
    Rl = pn("prisma:client");
    __name(Si, "Si");
    Ri = /* @__PURE__ */ __name(({ clientMethod: n3, activeProvider: l6 }) => (c6) => {
      let u5, h7 = "";
      if (Nr(c6)) h7 = c6.sql, u5 = { values: xt(c6.values), __prismaRawParameters__: true };
      else if (Array.isArray(c6)) {
        let [n4, ...l7] = c6;
        h7 = n4, u5 = { values: xt(l7 || []), __prismaRawParameters__: true };
      } else switch (l6) {
        case "sqlite":
        case "mysql":
          h7 = c6.sql, u5 = { values: xt(c6.values), __prismaRawParameters__: true };
          break;
        case "cockroachdb":
        case "postgresql":
        case "postgres":
          h7 = c6.text, u5 = { values: xt(c6.values), __prismaRawParameters__: true };
          break;
        case "sqlserver":
          h7 = ((n4) => n4.strings.reduce((n5, l7, c7) => `${n5}@P${c7}${l7}`))(c6), u5 = { values: xt(c6.values), __prismaRawParameters__: true };
          break;
        default:
          throw new Error(`The ${l6} provider does not support ${n3}`);
      }
      return Rl(u5?.values ? `prisma.${n3}(${h7}, ${u5.values})` : `prisma.${n3}(${h7})`), { query: h7, parameters: u5 };
    }, "Ri");
    Dl = { requestArgsToMiddlewareArgs: /* @__PURE__ */ __name((n3) => [n3.strings, ...n3.values], "requestArgsToMiddlewareArgs"), middlewareArgsToRequestArgs(n3) {
      let [l6, ...c6] = n3;
      return new Fe(l6, c6);
    } };
    Ml = { requestArgsToMiddlewareArgs: /* @__PURE__ */ __name((n3) => [n3], "requestArgsToMiddlewareArgs"), middlewareArgsToRequestArgs: /* @__PURE__ */ __name((n3) => n3[0], "middlewareArgsToRequestArgs") };
    __name(Ii, "Ii");
    __name(Ol, "Ol");
    wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt();
    Ll = "7.3.0".split(".")[0];
    ql = `V${Ll}_PRISMA_INSTRUMENTATION`;
    Fl = globalThis;
    Bl = { isEnabled: /* @__PURE__ */ __name(() => false, "isEnabled"), getTraceParent: /* @__PURE__ */ __name(() => "00-10-10-00", "getTraceParent"), dispatchEngineSpans() {
    }, getActiveContext() {
    }, runInChildSpan: /* @__PURE__ */ __name((n3, l6) => l6(), "runInChildSpan") };
    Vl = class {
      static {
        __name(this, "Vl");
      }
      isEnabled() {
        return this.getTracingHelper().isEnabled();
      }
      getTraceParent(n3) {
        return this.getTracingHelper().getTraceParent(n3);
      }
      dispatchEngineSpans(n3) {
        return this.getTracingHelper().dispatchEngineSpans(n3);
      }
      getActiveContext() {
        return this.getTracingHelper().getActiveContext();
      }
      runInChildSpan(n3, l6) {
        return this.getTracingHelper().runInChildSpan(n3, l6);
      }
      getTracingHelper() {
        return (function() {
          let n3 = Fl[ql];
          return n3?.helper ? n3.helper : Fl.PRISMA_INSTRUMENTATION?.helper;
        })() ?? Bl;
      }
    };
    __name(_l, "_l");
    __name(ki, "ki");
    wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt();
    Ql = { aggregate: false, aggregateRaw: false, createMany: true, createManyAndReturn: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateManyAndReturn: true, updateOne: true, upsertOne: true };
    __name(Mi, "Mi");
    wt(), bt(), vt(), St(), Zt();
    Jl = class {
      static {
        __name(this, "Jl");
      }
      constructor(n3) {
        this.options = n3, this.batches = {};
      }
      batches;
      tickActive = false;
      request(n3) {
        let l6 = this.options.batchBy(n3);
        return l6 ? (this.batches[l6] || (this.batches[l6] = [], this.tickActive || (this.tickActive = true, lt.nextTick(() => {
          this.dispatchBatches(), this.tickActive = false;
        }))), new Promise((c6, u5) => {
          this.batches[l6].push({ request: n3, resolve: c6, reject: u5 });
        })) : this.options.singleLoader(n3);
      }
      dispatchBatches() {
        for (let n3 in this.batches) {
          let l6 = this.batches[n3];
          delete this.batches[n3], 1 === l6.length ? this.options.singleLoader(l6[0].request).then((n4) => {
            n4 instanceof Error ? l6[0].reject(n4) : l6[0].resolve(n4);
          }).catch((n4) => {
            l6[0].reject(n4);
          }) : (l6.sort((n4, l7) => this.options.batchOrder(n4.request, l7.request)), this.options.batchLoader(l6.map((n4) => n4.request)).then((n4) => {
            if (n4 instanceof Error) for (let c6 = 0; c6 < l6.length; c6++) l6[c6].reject(n4);
            else for (let c6 = 0; c6 < l6.length; c6++) {
              let u5 = n4[c6];
              u5 instanceof Error ? l6[c6].reject(u5) : l6[c6].resolve(u5);
            }
          }).catch((n4) => {
            for (let c6 = 0; c6 < l6.length; c6++) l6[c6].reject(n4);
          }));
        }
      }
      get [Symbol.toStringTag]() {
        return "DataLoader";
      }
    };
    __name(Je, "Je");
    wt(), bt(), vt(), St(), Zt();
    zl = pn("prisma:client:request_handler");
    Gl = class {
      static {
        __name(this, "Gl");
      }
      client;
      dataloader;
      logEmitter;
      constructor(n3, l6) {
        this.logEmitter = l6, this.client = n3, this.dataloader = new Jl({ batchLoader: Ps(async ({ requests: n4, customDataProxyFetch: l7 }) => {
          let { transaction: c6, otelParentCtx: u5 } = n4[0], h7 = n4.map((n5) => n5.protocolQuery), f6 = this.client._tracingHelper.getTraceParent(u5), p5 = n4.some((n5) => Mi(n5.protocolQuery.action));
          return (await this.client._engine.requestBatch(h7, { traceparent: f6, transaction: Zm(c6), containsWrite: p5, customDataProxyFetch: l7 })).map((l8, c7) => {
            if (l8 instanceof Error) return l8;
            try {
              return this.mapQueryEngineResult(n4[c7], l8);
            } catch (n5) {
              return n5;
            }
          });
        }), singleLoader: /* @__PURE__ */ __name(async (n4) => {
          let l7 = "itx" === n4.transaction?.kind ? Ul(n4.transaction) : void 0, c6 = await this.client._engine.request(n4.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: l7, isWrite: Mi(n4.protocolQuery.action), customDataProxyFetch: n4.customDataProxyFetch });
          return this.mapQueryEngineResult(n4, c6);
        }, "singleLoader"), batchBy: /* @__PURE__ */ __name((n4) => n4.transaction?.id ? `transaction-${n4.transaction.id}` : (function(n5) {
          if ("findUnique" !== n5.action && "findUniqueOrThrow" !== n5.action) return;
          let l7 = [];
          return n5.modelName && l7.push(n5.modelName), n5.query.arguments && l7.push(ki(n5.query.arguments)), l7.push(ki(n5.query.selection)), l7.join("");
        })(n4.protocolQuery), "batchBy"), batchOrder: /* @__PURE__ */ __name((n4, l7) => "batch" === n4.transaction?.kind && "batch" === l7.transaction?.kind ? n4.transaction.index - l7.transaction.index : 0, "batchOrder") });
      }
      async request(n3) {
        try {
          return await this.dataloader.request(n3);
        } catch (l6) {
          let { clientMethod: c6, callsite: u5, transaction: h7, args: f6, modelName: p5 } = n3;
          this.handleAndLogRequestError({ error: l6, clientMethod: c6, callsite: u5, transaction: h7, args: f6, modelName: p5, globalOmit: n3.globalOmit });
        }
      }
      mapQueryEngineResult({ dataPath: n3, unpacker: l6 }, c6) {
        let u5 = c6?.data, h7 = this.unpack(u5, n3, l6);
        return lt.env.PRISMA_CLIENT_GET_TIME ? { data: h7 } : h7;
      }
      handleAndLogRequestError(n3) {
        try {
          this.handleRequestError(n3);
        } catch (l6) {
          throw this.logEmitter && this.logEmitter.emit("error", { message: l6.message, target: n3.clientMethod, timestamp: /* @__PURE__ */ new Date() }), l6;
        }
      }
      handleRequestError({ error: n3, clientMethod: l6, callsite: c6, transaction: u5, args: h7, modelName: f6, globalOmit: p5 }) {
        if (zl(n3), (function(n4, l7) {
          return hasBatchIndex(n4) && "batch" === l7?.kind && n4.batchRequestIdx !== l7.index;
        })(n3, u5)) throw n3;
        if (n3 instanceof P2 && (function(n4) {
          return "P2009" === n4.code || "P2012" === n4.code;
        })(n3)) {
          Ir({ args: h7, errors: [$l(n3.meta)], callsite: c6, errorFormat: this.client._errorFormat, originalMethod: l6, clientVersion: this.client._clientVersion, globalOmit: p5 });
        }
        let m7 = n3.message;
        if (c6 && (m7 = Er({ callsite: c6, originalMethod: l6, isPanic: n3.isPanic, showColors: "pretty" === this.client._errorFormat, message: m7 })), m7 = this.sanitizeMessage(m7), n3.code) {
          let l7 = f6 ? { modelName: f6, ...n3.meta } : n3.meta;
          throw new P2(m7, { code: n3.code, clientVersion: this.client._clientVersion, meta: l7, batchRequestIdx: n3.batchRequestIdx });
        }
        if (n3.isPanic) throw new A(m7, this.client._clientVersion);
        if (n3 instanceof I) throw new I(m7, { clientVersion: this.client._clientVersion, batchRequestIdx: n3.batchRequestIdx });
        if (n3 instanceof x2) throw new x2(m7, this.client._clientVersion);
        if (n3 instanceof A) throw new A(m7, this.client._clientVersion);
        throw n3.clientVersion = this.client._clientVersion, n3;
      }
      sanitizeMessage(n3) {
        return this.client._errorFormat && "pretty" !== this.client._errorFormat ? Ye(n3) : n3;
      }
      unpack(n3, l6, c6) {
        if (!n3 || (n3.data && (n3 = n3.data), !n3)) return n3;
        let u5 = Object.keys(n3)[0], h7 = Object.values(n3)[0], f6 = l6.filter((n4) => "select" !== n4 && "include" !== n4), p5 = $n(h7, f6), m7 = "queryRaw" === u5 ? (function(n4) {
          let l7 = [], c7 = (function(n5) {
            let l8 = {};
            for (let c8 = 0; c8 < n5.columns.length; c8++) l8[n5.columns[c8]] = null;
            return l8;
          })(n4);
          for (let u6 = 0; u6 < n4.rows.length; u6++) {
            let h8 = n4.rows[u6], f7 = { ...c7 };
            for (let l8 = 0; l8 < h8.length; l8++) f7[n4.columns[l8]] = Je(n4.types[l8], h8[l8]);
            l7.push(f7);
          }
          return l7;
        })(p5) : $e(p5);
        return c6 ? c6(m7) : m7;
      }
      get [Symbol.toStringTag]() {
        return "RequestHandler";
      }
    };
    __name(Zm, "Zm");
    __name(Ul, "Ul");
    __name($l, "$l");
    wt(), bt(), vt(), St(), Zt();
    Kl = tl;
    wt(), bt(), vt(), St(), Zt();
    Yl = Ne(pr());
    wt(), bt(), vt(), St(), Zt();
    Zl = class extends Error {
      static {
        __name(this, "Zl");
      }
      constructor(n3) {
        super(n3 + "\nRead more at https://pris.ly/d/client-constructor"), this.name = "PrismaClientConstructorValidationError";
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
      }
    };
    Ot(Zl, "PrismaClientConstructorValidationError");
    Xl = ["errorFormat", "adapter", "accelerateUrl", "log", "transactionOptions", "omit", "comments", "__internal"];
    ec = ["pretty", "colorless", "minimal"];
    tc = ["info", "query", "warn", "error"];
    rc = { adapter: /* @__PURE__ */ __name(() => {
    }, "adapter"), accelerateUrl: /* @__PURE__ */ __name((n3) => {
      if (void 0 !== n3) {
        if ("string" != typeof n3) throw new Zl(`Invalid value ${JSON.stringify(n3)} for "accelerateUrl" provided to PrismaClient constructor.`);
        if (0 === n3.trim().length) throw new Zl('"accelerateUrl" provided to PrismaClient constructor must be a non-empty string.');
      }
    }, "accelerateUrl"), errorFormat: /* @__PURE__ */ __name((n3) => {
      if (n3) {
        if ("string" != typeof n3) throw new Zl(`Invalid value ${JSON.stringify(n3)} for "errorFormat" provided to PrismaClient constructor.`);
        if (!ec.includes(n3)) {
          let l6 = rr(n3, ec);
          throw new Zl(`Invalid errorFormat ${n3} provided to PrismaClient constructor.${l6}`);
        }
      }
    }, "errorFormat"), log: /* @__PURE__ */ __name((n3) => {
      if (n3) {
        if (!Array.isArray(n3)) throw new Zl(`Invalid value ${JSON.stringify(n3)} for "log" provided to PrismaClient constructor.`);
        for (let l6 of n3) {
          t8(l6);
          let n4 = { level: t8, emit: /* @__PURE__ */ __name((n5) => {
            let l7 = ["stdout", "event"];
            if (!l7.includes(n5)) {
              let c6 = rr(n5, l7);
              throw new Zl(`Invalid value ${JSON.stringify(n5)} for "emit" in logLevel provided to PrismaClient constructor.${c6}`);
            }
          }, "emit") };
          if (l6 && "object" == typeof l6) for (let [c6, u5] of Object.entries(l6)) {
            if (!n4[c6]) throw new Zl(`Invalid property ${c6} for "log" provided to PrismaClient constructor`);
            n4[c6](u5);
          }
        }
      }
      function t8(n4) {
        if ("string" == typeof n4 && !tc.includes(n4)) {
          let l6 = rr(n4, tc);
          throw new Zl(`Invalid log level "${n4}" provided to PrismaClient constructor.${l6}`);
        }
      }
      __name(t8, "t");
    }, "log"), transactionOptions: /* @__PURE__ */ __name((n3) => {
      if (!n3) return;
      let l6 = n3.maxWait;
      if (null != l6 && l6 <= 0) throw new Zl(`Invalid value ${l6} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
      let c6 = n3.timeout;
      if (null != c6 && c6 <= 0) throw new Zl(`Invalid value ${c6} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
    }, "transactionOptions"), omit: /* @__PURE__ */ __name((n3, l6) => {
      if ("object" != typeof n3) throw new Zl('"omit" option is expected to be an object.');
      if (null === n3) throw new Zl('"omit" option can not be `null`');
      let c6 = [];
      for (let [u5, h7] of Object.entries(n3)) {
        let n4 = nd(u5, l6.runtimeDataModel);
        if (n4) for (let [l7, f6] of Object.entries(h7)) {
          let h8 = n4.fields.find((n5) => n5.name === l7);
          h8 ? h8.relationName ? c6.push({ kind: "RelationInOmit", modelKey: u5, fieldName: l7 }) : "boolean" != typeof f6 && c6.push({ kind: "InvalidFieldValue", modelKey: u5, fieldName: l7 }) : c6.push({ kind: "UnknownField", modelKey: u5, fieldName: l7 });
        }
        else c6.push({ kind: "UnknownModel", modelKey: u5 });
      }
      if (c6.length > 0) throw new Zl((function(n4, l7) {
        let c7 = at(n4);
        for (let n5 of l7) switch (n5.kind) {
          case "UnknownModel":
            c7.arguments.getField(n5.modelKey)?.markAsError(), c7.addErrorMessage(() => `Unknown model name: ${n5.modelKey}.`);
            break;
          case "UnknownField":
            c7.arguments.getDeepField([n5.modelKey, n5.fieldName])?.markAsError(), c7.addErrorMessage(() => `Model "${n5.modelKey}" does not have a field named "${n5.fieldName}".`);
            break;
          case "RelationInOmit":
            c7.arguments.getDeepField([n5.modelKey, n5.fieldName])?.markAsError(), c7.addErrorMessage(() => 'Relations are already excluded by default and can not be specified in "omit".');
            break;
          case "InvalidFieldValue":
            c7.arguments.getDeepFieldValue([n5.modelKey, n5.fieldName])?.markAsError(), c7.addErrorMessage(() => "Omit field option value must be a boolean.");
        }
        let { message: u5, args: h7 } = Rr(c7, "colorless");
        return `Error validating "omit" option:

${h7}

${u5}`;
      })(n3, c6));
    }, "omit"), comments: /* @__PURE__ */ __name((n3) => {
      if (void 0 !== n3) {
        if (!Array.isArray(n3)) throw new Zl(`Invalid value ${JSON.stringify(n3)} for "comments" provided to PrismaClient constructor. Expected an array of SQL commenter plugins.`);
        for (let l6 = 0; l6 < n3.length; l6++) if ("function" != typeof n3[l6]) throw new Zl(`Invalid value at index ${l6} for "comments" provided to PrismaClient constructor. Each plugin must be a function.`);
      }
    }, "comments"), __internal: /* @__PURE__ */ __name((n3) => {
      if (!n3) return;
      let l6 = ["debug", "engine", "configOverride"];
      if ("object" != typeof n3) throw new Zl(`Invalid value ${JSON.stringify(n3)} for "__internal" to PrismaClient constructor`);
      for (let [c6] of Object.entries(n3)) if (!l6.includes(c6)) {
        let n4 = rr(c6, l6);
        throw new Zl(`Invalid property ${JSON.stringify(c6)} for "__internal" provided to PrismaClient constructor.${n4}`);
      }
    }, "__internal") };
    __name(Hl, "Hl");
    __name(rr, "rr");
    __name(nd, "nd");
    __name(jl, "jl");
    wt(), bt(), vt(), St(), Zt();
    nc = pn("prisma:client");
    "object" == typeof globalThis && (globalThis.NODE_CLIENT = true);
    ic = { requestArgsToMiddlewareArgs: /* @__PURE__ */ __name((n3) => n3, "requestArgsToMiddlewareArgs"), middlewareArgsToRequestArgs: /* @__PURE__ */ __name((n3) => n3, "middlewareArgsToRequestArgs") };
    ac = Symbol.for("prisma.client.transaction.id");
    oc = { id: 0, nextId() {
      return ++this.id;
    } };
    __name(cd, "cd");
    __name(Wl, "Wl");
    wt(), bt(), vt(), St(), Zt(), wt(), bt(), vt(), St(), Zt();
    lc = { previewFeatures: [], clientVersion: "7.3.0", engineVersion: "9d6ad21cbbceab97458517b147a6a09ff43aa735", activeProvider: "postgresql", inlineSchema: 'generator client {\n  provider     = "prisma-client"\n  output       = "../generated/prisma"\n  moduleFormat = "esm"\n  //previewFeatures = ["queryCompiler", "driverAdapters"]\n  runtime      = "workerd"\n}\n\ndatasource db {\n  provider = "postgresql"\n}\n\nmodel User {\n  id          Int          @id @default(autoincrement())\n  first_name  String\n  middle_name String?\n  last_name   String\n  email       String       @unique\n  password    String\n  posts       Post[]\n  comments    Comment[]\n  images      UserImage[]\n  created_at  DateTime     @default(now())\n  updated_at  DateTime     @updatedAt\n  deleted_at  DateTime?\n  roles       Role[]       @relation("UserRoles")\n  permissions Permission[] @relation("UserPermissions")\n}\n\nmodel UserImage {\n  id          Int       @id @default(autoincrement())\n  url         String\n  description String?\n  user        User      @relation(fields: [user_id], references: [id])\n  user_id     Int\n  created_at  DateTime  @default(now())\n  updated_at  DateTime  @updatedAt\n  deleted_at  DateTime?\n}\n\nmodel Comment {\n  id         Int       @id @default(autoincrement())\n  content    String\n  user       User      @relation(fields: [user_id], references: [id])\n  user_id    Int\n  post       Post      @relation(fields: [post_id], references: [id])\n  post_id    Int\n  created_at DateTime  @default(now())\n  updated_at DateTime  @updatedAt\n  deleted_at DateTime?\n}\n\nmodel Branch {\n  id         Int       @id @default(autoincrement())\n  name       String\n  status     String    @default("OPEN")\n  created_at DateTime  @default(now())\n  updated_at DateTime  @updatedAt\n  deleted_at DateTime?\n}\n\nmodel Post {\n  id         Int         @id @default(autoincrement())\n  title      String\n  content    String?\n  published  Boolean     @default(false)\n  user       User        @relation(fields: [user_id], references: [id])\n  user_id    Int\n  comments   Comment[]\n  images     PostImage[]\n  created_at DateTime    @default(now())\n  updated_at DateTime    @updatedAt\n  deleted_at DateTime?\n}\n\nmodel PostImage {\n  id          Int       @id @default(autoincrement())\n  url         String\n  description String?\n  post        Post      @relation(fields: [post_id], references: [id])\n  post_id     Int\n  created_at  DateTime  @default(now())\n  updated_at  DateTime  @updatedAt\n  deleted_at  DateTime?\n}\n\nmodel Role {\n  id          Int          @id @default(autoincrement())\n  name        String\n  description String\n  created_at  DateTime     @default(now())\n  updated_at  DateTime     @updatedAt\n  deleted_at  DateTime?\n  users       User[]       @relation("UserRoles")\n  permissions Permission[] @relation("RolePermissions")\n}\n\nmodel Permission {\n  id          Int       @id @default(autoincrement())\n  name        String\n  description String\n  created_at  DateTime  @default(now())\n  updated_at  DateTime  @updatedAt\n  deleted_at  DateTime?\n  roles       Role[]    @relation("RolePermissions")\n  users       User[]    @relation("UserPermissions")\n}\n', runtimeDataModel: { models: {}, enums: {}, types: {} } };
    lc.runtimeDataModel = JSON.parse('{"models":{"User":{"fields":[{"name":"id","kind":"scalar","type":"Int"},{"name":"first_name","kind":"scalar","type":"String"},{"name":"middle_name","kind":"scalar","type":"String"},{"name":"last_name","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"password","kind":"scalar","type":"String"},{"name":"posts","kind":"object","type":"Post","relationName":"PostToUser"},{"name":"comments","kind":"object","type":"Comment","relationName":"CommentToUser"},{"name":"images","kind":"object","type":"UserImage","relationName":"UserToUserImage"},{"name":"created_at","kind":"scalar","type":"DateTime"},{"name":"updated_at","kind":"scalar","type":"DateTime"},{"name":"deleted_at","kind":"scalar","type":"DateTime"},{"name":"roles","kind":"object","type":"Role","relationName":"UserRoles"},{"name":"permissions","kind":"object","type":"Permission","relationName":"UserPermissions"}],"dbName":null},"UserImage":{"fields":[{"name":"id","kind":"scalar","type":"Int"},{"name":"url","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"UserToUserImage"},{"name":"user_id","kind":"scalar","type":"Int"},{"name":"created_at","kind":"scalar","type":"DateTime"},{"name":"updated_at","kind":"scalar","type":"DateTime"},{"name":"deleted_at","kind":"scalar","type":"DateTime"}],"dbName":null},"Comment":{"fields":[{"name":"id","kind":"scalar","type":"Int"},{"name":"content","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"CommentToUser"},{"name":"user_id","kind":"scalar","type":"Int"},{"name":"post","kind":"object","type":"Post","relationName":"CommentToPost"},{"name":"post_id","kind":"scalar","type":"Int"},{"name":"created_at","kind":"scalar","type":"DateTime"},{"name":"updated_at","kind":"scalar","type":"DateTime"},{"name":"deleted_at","kind":"scalar","type":"DateTime"}],"dbName":null},"Branch":{"fields":[{"name":"id","kind":"scalar","type":"Int"},{"name":"name","kind":"scalar","type":"String"},{"name":"status","kind":"scalar","type":"String"},{"name":"created_at","kind":"scalar","type":"DateTime"},{"name":"updated_at","kind":"scalar","type":"DateTime"},{"name":"deleted_at","kind":"scalar","type":"DateTime"}],"dbName":null},"Post":{"fields":[{"name":"id","kind":"scalar","type":"Int"},{"name":"title","kind":"scalar","type":"String"},{"name":"content","kind":"scalar","type":"String"},{"name":"published","kind":"scalar","type":"Boolean"},{"name":"user","kind":"object","type":"User","relationName":"PostToUser"},{"name":"user_id","kind":"scalar","type":"Int"},{"name":"comments","kind":"object","type":"Comment","relationName":"CommentToPost"},{"name":"images","kind":"object","type":"PostImage","relationName":"PostToPostImage"},{"name":"created_at","kind":"scalar","type":"DateTime"},{"name":"updated_at","kind":"scalar","type":"DateTime"},{"name":"deleted_at","kind":"scalar","type":"DateTime"}],"dbName":null},"PostImage":{"fields":[{"name":"id","kind":"scalar","type":"Int"},{"name":"url","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"post","kind":"object","type":"Post","relationName":"PostToPostImage"},{"name":"post_id","kind":"scalar","type":"Int"},{"name":"created_at","kind":"scalar","type":"DateTime"},{"name":"updated_at","kind":"scalar","type":"DateTime"},{"name":"deleted_at","kind":"scalar","type":"DateTime"}],"dbName":null},"Role":{"fields":[{"name":"id","kind":"scalar","type":"Int"},{"name":"name","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"created_at","kind":"scalar","type":"DateTime"},{"name":"updated_at","kind":"scalar","type":"DateTime"},{"name":"deleted_at","kind":"scalar","type":"DateTime"},{"name":"users","kind":"object","type":"User","relationName":"UserRoles"},{"name":"permissions","kind":"object","type":"Permission","relationName":"RolePermissions"}],"dbName":null},"Permission":{"fields":[{"name":"id","kind":"scalar","type":"Int"},{"name":"name","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"created_at","kind":"scalar","type":"DateTime"},{"name":"updated_at","kind":"scalar","type":"DateTime"},{"name":"deleted_at","kind":"scalar","type":"DateTime"},{"name":"roles","kind":"object","type":"Role","relationName":"RolePermissions"},{"name":"users","kind":"object","type":"User","relationName":"UserPermissions"}],"dbName":null}},"enums":{},"types":{}}'), lc.compilerWasm = { getRuntime: /* @__PURE__ */ __name(async () => await Promise.resolve().then(() => (init_query_compiler_fast_bg(), query_compiler_fast_bg_exports)), "getRuntime"), getQueryCompilerWasmModule: /* @__PURE__ */ __name(async () => {
      const { default: n3 } = await Promise.resolve().then(() => (init_query_compiler_fast_bg2(), query_compiler_fast_bg2_exports));
      return n3;
    }, "getQueryCompilerWasmModule"), importName: "./query_compiler_fast_bg.js" }, ("undefined" != typeof globalThis && globalThis.DEBUG || (void 0 !== m2 && m2.env, 0)) && pn.enable("undefined" != typeof globalThis && globalThis.DEBUG || void 0 !== m2 && m2.env && false || void 0), globalThis.__dirname = "/";
    cc = cd(lc);
    mc = Object.defineProperty;
    gc = {};
    ((n3, l6) => {
      for (var c6 in l6) mc(n3, c6, { get: l6[c6], enumerable: true });
    })(gc, { $: /* @__PURE__ */ __name(() => wc, "$"), bgBlack: /* @__PURE__ */ __name(() => zc, "bgBlack"), bgBlue: /* @__PURE__ */ __name(() => Zc, "bgBlue"), bgCyan: /* @__PURE__ */ __name(() => eu, "bgCyan"), bgGreen: /* @__PURE__ */ __name(() => Kc, "bgGreen"), bgMagenta: /* @__PURE__ */ __name(() => Xc, "bgMagenta"), bgRed: /* @__PURE__ */ __name(() => Gc, "bgRed"), bgWhite: /* @__PURE__ */ __name(() => ru, "bgWhite"), bgYellow: /* @__PURE__ */ __name(() => Yc, "bgYellow"), black: /* @__PURE__ */ __name(() => Nc, "black"), blue: /* @__PURE__ */ __name(() => Fc, "blue"), bold: /* @__PURE__ */ __name(() => vc, "bold"), cyan: /* @__PURE__ */ __name(() => Qc, "cyan"), dim: /* @__PURE__ */ __name(() => Ec, "dim"), gray: /* @__PURE__ */ __name(() => Wc, "gray"), green: /* @__PURE__ */ __name(() => Dc, "green"), grey: /* @__PURE__ */ __name(() => Jc, "grey"), hidden: /* @__PURE__ */ __name(() => Ac, "hidden"), inverse: /* @__PURE__ */ __name(() => Pc, "inverse"), italic: /* @__PURE__ */ __name(() => Tc, "italic"), magenta: /* @__PURE__ */ __name(() => jc, "magenta"), red: /* @__PURE__ */ __name(() => kc, "red"), reset: /* @__PURE__ */ __name(() => bc, "reset"), strikethrough: /* @__PURE__ */ __name(() => Cc, "strikethrough"), underline: /* @__PURE__ */ __name(() => xc, "underline"), white: /* @__PURE__ */ __name(() => Hc, "white"), yellow: /* @__PURE__ */ __name(() => Lc, "yellow") });
    yc = true;
    void 0 !== m2 && ({ FORCE_COLOR: uc, NODE_DISABLE_COLORS: hc, NO_COLOR: fc, TERM: pc } = m2.env || {}, yc = m2.stdout && m2.stdout.isTTY);
    wc = { enabled: !hc && null == fc && "dumb" !== pc && (null != uc && "0" !== uc || yc) };
    __name(init, "init");
    bc = init(0, 0);
    vc = init(1, 22);
    Ec = init(2, 22);
    Tc = init(3, 23);
    xc = init(4, 24);
    Pc = init(7, 27);
    Ac = init(8, 28);
    Cc = init(9, 29);
    Nc = init(30, 39);
    kc = init(31, 39);
    Dc = init(32, 39);
    Lc = init(33, 39);
    Fc = init(34, 39);
    jc = init(35, 39);
    Qc = init(36, 39);
    Hc = init(37, 39);
    Wc = init(90, 39);
    Jc = init(90, 39);
    zc = init(40, 49);
    Gc = init(41, 49);
    Kc = init(42, 49);
    Yc = init(43, 49);
    Zc = init(44, 49);
    Xc = init(45, 49);
    eu = init(46, 49);
    ru = init(47, 49);
    nu = ["green", "yellow", "blue", "magenta", "cyan", "red"];
    iu = [];
    su = Date.now();
    au = 0;
    ou = void 0 !== m2 ? m2.env : {};
    globalThis.DEBUG ??= ou.DEBUG ?? "", globalThis.DEBUG_COLORS ??= !ou.DEBUG_COLORS || "true" === ou.DEBUG_COLORS;
    cu = { enable(n3) {
      "string" == typeof n3 && (globalThis.DEBUG = n3);
    }, disable() {
      const n3 = globalThis.DEBUG;
      return globalThis.DEBUG = "", n3;
    }, enabled(n3) {
      const l6 = globalThis.DEBUG.split(",").map((n4) => n4.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), c6 = l6.some((l7) => "" !== l7 && "-" !== l7[0] && n3.match(RegExp(l7.split("*").join(".*") + "$"))), u5 = l6.some((l7) => "" !== l7 && "-" === l7[0] && n3.match(RegExp(l7.slice(1).split("*").join(".*") + "$")));
      return c6 && !u5;
    }, log: /* @__PURE__ */ __name((...n3) => {
      const [l6, c6, ...u5] = n3;
      (console.warn ?? console.log)(`${l6} ${c6}`, ...u5);
    }, "log"), formatters: {} };
    uu = new Proxy(function(n3) {
      const l6 = { color: nu[au++ % nu.length], enabled: cu.enabled(n3), namespace: n3, log: cu.log, extend: /* @__PURE__ */ __name(() => {
      }, "extend") };
      return new Proxy((...n4) => {
        const { enabled: c6, namespace: u5, color: h7, log: f6 } = l6;
        if (0 !== n4.length && iu.push([u5, ...n4]), iu.length > 100 && iu.shift(), cu.enabled(u5) || c6) {
          const l7 = n4.map((n5) => "string" == typeof n5 ? n5 : (function(n6, l8 = 2) {
            const c8 = /* @__PURE__ */ new Set();
            return JSON.stringify(n6, (n7, l9) => {
              if ("object" == typeof l9 && null !== l9) {
                if (c8.has(l9)) return "[Circular *]";
                c8.add(l9);
              } else if ("bigint" == typeof l9) return l9.toString();
              return l9;
            }, l8);
          })(n5)), c7 = `+${Date.now() - su}ms`;
          su = Date.now(), globalThis.DEBUG_COLORS ? f6(gc[h7](vc(u5)), ...l7, gc[h7](c7)) : f6(u5, ...l7, c7);
        }
      }, { get: /* @__PURE__ */ __name((n4, c6) => l6[c6], "get"), set: /* @__PURE__ */ __name((n4, c6, u5) => l6[c6] = u5, "set") });
    }, { get: /* @__PURE__ */ __name((n3, l6) => cu[l6], "get"), set: /* @__PURE__ */ __name((n3, l6, c6) => cu[l6] = c6, "set") });
    du = class extends Error {
      static {
        __name(this, "du");
      }
      name = "DriverAdapterError";
      cause;
      constructor(n3) {
        super("string" == typeof n3.message ? n3.message : n3.kind), this.cause = n3;
      }
    };
    uu("driver-adapter-utils");
    hu = 0;
    fu = 1;
    mu = 2;
    gu = 3;
    yu = 4;
    wu = 5;
    _u = 7;
    Su = 8;
    Pu = 9;
    Au = 10;
    Iu = 11;
    Cu = 13;
    ku = 15;
    Ru = 64;
    Du = 65;
    Mu = 66;
    Lu = 67;
    $u = 68;
    qu = 69;
    Fu = 70;
    Uu = 71;
    ju = 72;
    Bu = 73;
    Vu = 74;
    Qu = 75;
    Hu = 77;
    Wu = 78;
    Ju = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    __name(getDefaultExportFromCjs, "getDefaultExportFromCjs");
    __name(getDefaultExportFromNamespaceIfNotNamed, "getDefaultExportFromNamespaceIfNotNamed");
    zu = { exports: {} };
    Gu = getDefaultExportFromNamespaceIfNotNamed(f);
    wd = { exports: {} };
    bd = {};
    vd = {};
    __name(requirePostgresArray, "requirePostgresArray");
    __name(requireArrayParser, "requireArrayParser");
    __name(requirePostgresDate, "requirePostgresDate");
    __name(requireMutable, "requireMutable");
    __name(requirePostgresInterval, "requirePostgresInterval");
    __name(requirePostgresBytea, "requirePostgresBytea");
    __name(requireTextParsers, "requireTextParsers");
    __name(requirePgInt8, "requirePgInt8");
    __name(requireBinaryParsers, "requireBinaryParsers");
    __name(requireBuiltins, "requireBuiltins");
    __name(requirePgTypes, "requirePgTypes");
    !(function(l6) {
      let c6;
      try {
        c6 = "win32" === m2.platform ? m2.env.USERNAME : m2.env.USER;
      } catch {
      }
      l6.exports = { host: "localhost", user: c6, database: void 0, password: null, connectionString: void 0, port: 5432, rows: 0, binary: false, max: 10, idleTimeoutMillis: 3e4, client_encoding: "", ssl: false, application_name: void 0, fallback_application_name: void 0, options: void 0, parseInputDatesAsUTC: false, statement_timeout: false, lock_timeout: false, idle_in_transaction_session_timeout: false, query_timeout: false, connect_timeout: 0, keepalives: 1, keepalives_idle: 0 };
      const u5 = requirePgTypes(), h7 = u5.getTypeParser(20, "text"), f6 = u5.getTypeParser(1016, "text");
      l6.exports.__defineSetter__("parseInt8", function(n3) {
        u5.setTypeParser(20, "text", n3 ? u5.getTypeParser(23, "text") : h7), u5.setTypeParser(1016, "text", n3 ? u5.getTypeParser(1007, "text") : f6);
      });
    })(wd);
    _d = wd.exports;
    Sd = getDefaultExportFromNamespaceIfNotNamed(p);
    Ed = _d;
    Td = Sd;
    ({ isDate: xd } = Td.types || Td);
    __name(escapeElement, "escapeElement");
    __name(arrayString, "arrayString");
    prepareValue = /* @__PURE__ */ __name(function(n3, l6) {
      if (null == n3) return null;
      if ("object" == typeof n3) {
        if (n3 instanceof h2) return n3;
        if (ArrayBuffer.isView(n3)) {
          const l7 = h2.from(n3.buffer, n3.byteOffset, n3.byteLength);
          return l7.length === n3.byteLength ? l7 : l7.slice(n3.byteOffset, n3.byteOffset + n3.byteLength);
        }
        return xd(n3) ? Ed.parseInputDatesAsUTC ? (function(n4) {
          let l7 = n4.getUTCFullYear();
          const c6 = l7 < 1;
          c6 && (l7 = Math.abs(l7) + 1);
          let u5 = String(l7).padStart(4, "0") + "-" + String(n4.getUTCMonth() + 1).padStart(2, "0") + "-" + String(n4.getUTCDate()).padStart(2, "0") + "T" + String(n4.getUTCHours()).padStart(2, "0") + ":" + String(n4.getUTCMinutes()).padStart(2, "0") + ":" + String(n4.getUTCSeconds()).padStart(2, "0") + "." + String(n4.getUTCMilliseconds()).padStart(3, "0");
          u5 += "+00:00", c6 && (u5 += " BC");
          return u5;
        })(n3) : (function(n4) {
          let l7 = -n4.getTimezoneOffset(), c6 = n4.getFullYear();
          const u5 = c6 < 1;
          u5 && (c6 = Math.abs(c6) + 1);
          let h7 = String(c6).padStart(4, "0") + "-" + String(n4.getMonth() + 1).padStart(2, "0") + "-" + String(n4.getDate()).padStart(2, "0") + "T" + String(n4.getHours()).padStart(2, "0") + ":" + String(n4.getMinutes()).padStart(2, "0") + ":" + String(n4.getSeconds()).padStart(2, "0") + "." + String(n4.getMilliseconds()).padStart(3, "0");
          l7 < 0 ? (h7 += "-", l7 *= -1) : h7 += "+";
          h7 += String(Math.floor(l7 / 60)).padStart(2, "0") + ":" + String(l7 % 60).padStart(2, "0"), u5 && (h7 += " BC");
          return h7;
        })(n3) : Array.isArray(n3) ? arrayString(n3) : (function(n4, l7) {
          if (n4 && "function" == typeof n4.toPostgres) {
            if (-1 !== (l7 = l7 || []).indexOf(n4)) throw new Error('circular reference detected while preparing "' + n4 + '" for query');
            return l7.push(n4), prepareValue(n4.toPostgres(prepareValue), l7);
          }
          return JSON.stringify(n4);
        })(n3, l6);
      }
      return n3.toString();
    }, "prepareValue");
    Pd = { prepareValue: /* @__PURE__ */ __name(function(n3) {
      return prepareValue(n3);
    }, "prepareValue"), normalizeQueryConfig: /* @__PURE__ */ __name(function(n3, l6, c6) {
      return n3 = "string" == typeof n3 ? { text: n3 } : n3, l6 && ("function" == typeof l6 ? n3.callback = l6 : n3.values = l6), c6 && (n3.callback = c6), n3;
    }, "normalizeQueryConfig"), escapeIdentifier: /* @__PURE__ */ __name(function(n3) {
      return '"' + n3.replace(/"/g, '""') + '"';
    }, "escapeIdentifier"), escapeLiteral: /* @__PURE__ */ __name(function(n3) {
      let l6 = false, c6 = "'";
      if (null == n3) return "''";
      if ("string" != typeof n3) return "''";
      for (let u5 = 0; u5 < n3.length; u5++) {
        const h7 = n3[u5];
        "'" === h7 ? c6 += h7 + h7 : "\\" === h7 ? (c6 += h7 + h7, l6 = true) : c6 += h7;
      }
      return c6 += "'", true === l6 && (c6 = " E" + c6), c6;
    }, "escapeLiteral") };
    Ad = { exports: {} };
    Id = getDefaultExportFromNamespaceIfNotNamed(m3);
    __name(requireUtilsLegacy, "requireUtilsLegacy");
    __name(requireUtilsWebcrypto, "requireUtilsWebcrypto");
    Rd = parseInt(m2.versions && m2.versions.node && m2.versions.node.split(".")[0]) < 15;
    Ad.exports = Rd ? requireUtilsLegacy() : requireUtilsWebcrypto();
    Dd = Ad.exports;
    __name(x509Error, "x509Error");
    __name(readASN1Length, "readASN1Length");
    __name(readASN1OID, "readASN1OID");
    __name(expectASN1Seq, "expectASN1Seq");
    Md = { signatureAlgorithmHashFromCertificate: /* @__PURE__ */ __name(function(n3, l6) {
      void 0 === l6 && (l6 = 0), l6 = expectASN1Seq(n3, l6).index;
      const { length: c6, index: u5 } = expectASN1Seq(n3, l6);
      l6 = expectASN1Seq(n3, l6 = u5 + c6).index;
      const { oid: h7, index: f6 } = readASN1OID(n3, l6);
      switch (h7) {
        case "1.2.840.113549.1.1.4":
          return "MD5";
        case "1.2.840.113549.1.1.5":
        case "1.2.840.10045.4.1":
          return "SHA-1";
        case "1.2.840.113549.1.1.11":
        case "1.2.840.10045.4.3.2":
          return "SHA-256";
        case "1.2.840.113549.1.1.12":
        case "1.2.840.10045.4.3.3":
          return "SHA-384";
        case "1.2.840.113549.1.1.13":
        case "1.2.840.10045.4.3.4":
        case "1.3.101.110":
        case "1.3.101.112":
          return "SHA-512";
        case "1.2.840.113549.1.1.14":
        case "1.2.840.10045.4.3.1":
          return "SHA-224";
        case "1.2.840.113549.1.1.15":
          return "SHA512-224";
        case "1.2.840.113549.1.1.16":
          return "SHA512-256";
        case "1.2.840.113549.1.1.10": {
          if (l6 = expectASN1Seq(n3, l6 = f6).index, 160 !== n3[l6++]) throw x509Error("non-tag data", n3);
          l6 = expectASN1Seq(n3, l6 = readASN1Length(n3, l6).index).index;
          const { oid: c7 } = readASN1OID(n3, l6);
          switch (c7) {
            case "1.2.840.113549.2.5":
              return "MD5";
            case "1.3.14.3.2.26":
              return "SHA-1";
            case "2.16.840.1.101.3.4.2.1":
              return "SHA-256";
            case "2.16.840.1.101.3.4.2.2":
              return "SHA-384";
            case "2.16.840.1.101.3.4.2.3":
              return "SHA-512";
          }
          throw x509Error("unknown hash OID " + c7, n3);
        }
        case "1.3.101.111":
        case "1.3.101.113":
          throw x509Error("Ed448 certificate channel binding is not currently supported by Postgres");
      }
      throw x509Error("unknown OID " + h7, n3);
    }, "signatureAlgorithmHashFromCertificate") };
    Ld = Dd;
    ({ signatureAlgorithmHashFromCertificate: $d } = Md);
    __name(isBase64, "isBase64");
    __name(parseAttributePairs, "parseAttributePairs");
    qd = { startSession: /* @__PURE__ */ __name(function(n3, l6) {
      const c6 = ["SCRAM-SHA-256"];
      l6 && c6.unshift("SCRAM-SHA-256-PLUS");
      const u5 = c6.find((l7) => n3.includes(l7));
      if (!u5) throw new Error("SASL: Only mechanism(s) " + c6.join(" and ") + " are supported");
      if ("SCRAM-SHA-256-PLUS" === u5 && "function" != typeof l6.getPeerCertificate) throw new Error("SASL: Mechanism SCRAM-SHA-256-PLUS requires a certificate");
      const h7 = Ld.randomBytes(18).toString("base64");
      return { mechanism: u5, clientNonce: h7, response: ("SCRAM-SHA-256-PLUS" === u5 ? "p=tls-server-end-point" : l6 ? "y" : "n") + ",,n=*,r=" + h7, message: "SASLInitialResponse" };
    }, "startSession"), continueSession: /* @__PURE__ */ __name(async function(n3, l6, c6, u5) {
      if ("SASLInitialResponse" !== n3.message) throw new Error("SASL: Last message was not SASLInitialResponse");
      if ("string" != typeof l6) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string");
      if ("" === l6) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a non-empty string");
      if ("string" != typeof c6) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a string");
      const f6 = (function(n4) {
        const l7 = parseAttributePairs(n4), c7 = l7.get("r");
        if (!c7) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing");
        if (!(function(n5) {
          if ("string" != typeof n5) throw new TypeError("SASL: text must be a string");
          return n5.split("").map((l8, c8) => n5.charCodeAt(c8)).every((n6) => n6 >= 33 && n6 <= 43 || n6 >= 45 && n6 <= 126);
        })(c7)) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce must only contain printable characters");
        const u6 = l7.get("s");
        if (!u6) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing");
        if (!isBase64(u6)) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must be base64");
        const h7 = l7.get("i");
        if (!h7) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing");
        if (!/^[1-9][0-9]*$/.test(h7)) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: invalid iteration count");
        const f7 = parseInt(h7, 10);
        return { nonce: c7, salt: u6, iteration: f7 };
      })(c6);
      if (!f6.nonce.startsWith(n3.clientNonce)) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");
      if (f6.nonce.length === n3.clientNonce.length) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too short");
      const p5 = "n=*,r=" + n3.clientNonce, m7 = "r=" + f6.nonce + ",s=" + f6.salt + ",i=" + f6.iteration;
      let g5 = u5 ? "eSws" : "biws";
      if ("SCRAM-SHA-256-PLUS" === n3.mechanism) {
        const n4 = u5.getPeerCertificate().raw;
        let l7 = $d(n4);
        "MD5" !== l7 && "SHA-1" !== l7 || (l7 = "SHA-256");
        const c7 = await Ld.hashByName(l7, n4);
        g5 = h2.concat([h2.from("p=tls-server-end-point,,"), h2.from(c7)]).toString("base64");
      }
      const y5 = "c=" + g5 + ",r=" + f6.nonce, w5 = p5 + "," + m7 + "," + y5, b4 = h2.from(f6.salt, "base64"), v5 = await Ld.deriveKey(l6, b4, f6.iteration), _4 = await Ld.hmacSha256(v5, "Client Key"), S6 = await Ld.sha256(_4), E5 = await Ld.hmacSha256(S6, w5), T5 = (function(n4, l7) {
        if (!h2.isBuffer(n4)) throw new TypeError("first argument must be a Buffer");
        if (!h2.isBuffer(l7)) throw new TypeError("second argument must be a Buffer");
        if (n4.length !== l7.length) throw new Error("Buffer lengths must match");
        if (0 === n4.length) throw new Error("Buffers cannot be empty");
        return h2.from(n4.map((c7, u6) => n4[u6] ^ l7[u6]));
      })(h2.from(_4), h2.from(E5)).toString("base64"), x5 = await Ld.hmacSha256(v5, "Server Key"), P5 = await Ld.hmacSha256(x5, w5);
      n3.message = "SASLResponse", n3.serverSignature = h2.from(P5).toString("base64"), n3.response = y5 + ",p=" + T5;
    }, "continueSession"), finalizeSession: /* @__PURE__ */ __name(function(n3, l6) {
      if ("SASLResponse" !== n3.message) throw new Error("SASL: Last message was not SASLResponse");
      if ("string" != typeof l6) throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: serverData must be a string");
      const { serverSignature: c6 } = (function(n4) {
        const l7 = parseAttributePairs(n4), c7 = l7.get("v");
        if (!c7) throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing");
        if (!isBase64(c7)) throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64");
        return { serverSignature: c7 };
      })(l6);
      if (c6 !== n3.serverSignature) throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature does not match");
    }, "finalizeSession") };
    Fd = requirePgTypes();
    __name(TypeOverrides$2, "TypeOverrides$2");
    TypeOverrides$2.prototype.getOverrides = function(n3) {
      switch (n3) {
        case "text":
          return this.text;
        case "binary":
          return this.binary;
        default:
          return {};
      }
    }, TypeOverrides$2.prototype.setTypeParser = function(n3, l6, c6) {
      "function" == typeof l6 && (c6 = l6, l6 = "text"), this.getOverrides(l6)[n3] = c6;
    }, TypeOverrides$2.prototype.getTypeParser = function(n3, l6) {
      return l6 = l6 || "text", this.getOverrides(l6)[n3] || this._types.getTypeParser(n3, l6);
    };
    Ud = TypeOverrides$2;
    jd = getDefaultExportFromNamespaceIfNotNamed(g);
    Bd = notImplementedClass("fs.Dir");
    Vd = notImplementedClass("fs.Dirent");
    Qd = notImplementedClass("fs.Stats");
    Hd = notImplementedClass("fs.ReadStream");
    Wd = notImplementedClass("fs.WriteStream");
    Jd = Hd;
    zd = Wd;
    Gd = notImplemented("fs.access");
    Kd = notImplemented("fs.copyFile");
    Yd = notImplemented("fs.cp");
    Zd = notImplemented("fs.open");
    Xd = notImplemented("fs.opendir");
    eh = notImplemented("fs.rename");
    th = notImplemented("fs.truncate");
    rh = notImplemented("fs.rm");
    nh = notImplemented("fs.rmdir");
    ih = notImplemented("fs.mkdir");
    sh = notImplemented("fs.readdir");
    ah = notImplemented("fs.readlink");
    oh = notImplemented("fs.symlink");
    lh = notImplemented("fs.lstat");
    ch = notImplemented("fs.stat");
    uh = notImplemented("fs.link");
    dh = notImplemented("fs.unlink");
    hh = notImplemented("fs.chmod");
    fh = notImplemented("fs.lchmod");
    ph = notImplemented("fs.lchown");
    mh = notImplemented("fs.chown");
    gh = notImplemented("fs.utimes");
    yh = notImplemented("fs.lutimes");
    wh = notImplemented("fs.realpath");
    bh = notImplemented("fs.mkdtemp");
    vh = notImplemented("fs.writeFile");
    _h = notImplemented("fs.appendFile");
    Sh = notImplemented("fs.readFile");
    Eh = notImplemented("fs.statfs");
    __name(callbackify, "callbackify");
    Th = callbackify(Gd);
    xh = callbackify(_h);
    Ph = callbackify(mh);
    Ah = callbackify(hh);
    Ih = callbackify(Kd);
    Ch = callbackify(Yd);
    Nh = callbackify(ph);
    kh = callbackify(fh);
    Oh = callbackify(uh);
    Rh = callbackify(lh);
    Dh = callbackify(yh);
    Mh = callbackify(ih);
    Lh = callbackify(bh);
    $h = callbackify(wh);
    qh = callbackify(Zd);
    Fh = callbackify(Xd);
    Uh = callbackify(sh);
    jh = callbackify(Sh);
    Bh = callbackify(ah);
    Vh = callbackify(eh);
    Qh = callbackify(rh);
    Hh = callbackify(nh);
    Wh = callbackify(ch);
    Jh = callbackify(oh);
    zh = callbackify(th);
    Gh = callbackify(dh);
    Kh = callbackify(gh);
    Yh = callbackify(vh);
    Zh = callbackify(Eh);
    Xh = notImplementedAsync("fs.close");
    ef = notImplementedAsync("fs.createReadStream");
    tf = notImplementedAsync("fs.createWriteStream");
    rf = notImplementedAsync("fs.exists");
    nf = notImplementedAsync("fs.fchown");
    sf = notImplementedAsync("fs.fchmod");
    af = notImplementedAsync("fs.fdatasync");
    of = notImplementedAsync("fs.fstat");
    lf = notImplementedAsync("fs.fsync");
    cf = notImplementedAsync("fs.ftruncate");
    uf = notImplementedAsync("fs.futimes");
    df = notImplementedAsync("fs.lstatSync");
    hf = notImplementedAsync("fs.read");
    ff = notImplementedAsync("fs.readv");
    pf = notImplementedAsync("fs.realpathSync");
    mf = notImplementedAsync("fs.statSync");
    gf = notImplementedAsync("fs.unwatchFile");
    yf = notImplementedAsync("fs.watch");
    wf = notImplementedAsync("fs.watchFile");
    bf = notImplementedAsync("fs.write");
    vf = notImplementedAsync("fs.writev");
    _f = notImplementedAsync("fs._toUnixTimestamp");
    Sf = notImplementedAsync("fs.openAsBlob");
    Ef = notImplementedAsync("fs.glob");
    Tf = notImplemented("fs.appendFileSync");
    xf = notImplemented("fs.accessSync");
    Pf = notImplemented("fs.chownSync");
    Af = notImplemented("fs.chmodSync");
    If = notImplemented("fs.closeSync");
    Cf = notImplemented("fs.copyFileSync");
    Nf = notImplemented("fs.cpSync");
    existsSync = /* @__PURE__ */ __name(() => false, "existsSync");
    kf = notImplemented("fs.fchownSync");
    Of = notImplemented("fs.fchmodSync");
    Rf = notImplemented("fs.fdatasyncSync");
    Df = notImplemented("fs.fstatSync");
    Mf = notImplemented("fs.fsyncSync");
    Lf = notImplemented("fs.ftruncateSync");
    $f = notImplemented("fs.futimesSync");
    qf = notImplemented("fs.lchownSync");
    Ff = notImplemented("fs.lchmodSync");
    Uf = notImplemented("fs.linkSync");
    jf = notImplemented("fs.lutimesSync");
    Bf = notImplemented("fs.mkdirSync");
    Vf = notImplemented("fs.mkdtempSync");
    Qf = notImplemented("fs.openSync");
    Hf = notImplemented("fs.opendirSync");
    Wf = notImplemented("fs.readdirSync");
    Jf = notImplemented("fs.readSync");
    zf = notImplemented("fs.readvSync");
    Gf = notImplemented("fs.readFileSync");
    Kf = notImplemented("fs.readlinkSync");
    Yf = notImplemented("fs.renameSync");
    Zf = notImplemented("fs.rmSync");
    Xf = notImplemented("fs.rmdirSync");
    ep = notImplemented("fs.symlinkSync");
    rp = notImplemented("fs.truncateSync");
    ip = notImplemented("fs.unlinkSync");
    sp = notImplemented("fs.utimesSync");
    ap = notImplemented("fs.writeFileSync");
    lp = notImplemented("fs.writeSync");
    cp = notImplemented("fs.writevSync");
    up = notImplemented("fs.statfsSync");
    dp = notImplemented("fs.globSync");
    hp = Object.freeze(Object.defineProperty({ __proto__: null, COPYFILE_EXCL: 1, COPYFILE_FICLONE: 2, COPYFILE_FICLONE_FORCE: 4, EXTENSIONLESS_FORMAT_JAVASCRIPT: 0, EXTENSIONLESS_FORMAT_WASM: 1, F_OK: 0, O_APPEND: 1024, O_CREAT: 64, O_DIRECT: 16384, O_DIRECTORY: 65536, O_DSYNC: 4096, O_EXCL: 128, O_NOATIME: 262144, O_NOCTTY: 256, O_NOFOLLOW: 131072, O_NONBLOCK: 2048, O_RDONLY: 0, O_RDWR: 2, O_SYNC: 1052672, O_TRUNC: 512, O_WRONLY: 1, R_OK: 4, S_IFBLK: 24576, S_IFCHR: 8192, S_IFDIR: 16384, S_IFIFO: 4096, S_IFLNK: 40960, S_IFMT: 61440, S_IFREG: 32768, S_IFSOCK: 49152, S_IRGRP: 32, S_IROTH: 4, S_IRUSR: 256, S_IRWXG: 56, S_IRWXO: 7, S_IRWXU: 448, S_IWGRP: 16, S_IWOTH: 2, S_IWUSR: 128, S_IXGRP: 8, S_IXOTH: 1, S_IXUSR: 64, UV_DIRENT_BLOCK: 7, UV_DIRENT_CHAR: 6, UV_DIRENT_DIR: 2, UV_DIRENT_FIFO: 4, UV_DIRENT_FILE: 1, UV_DIRENT_LINK: 3, UV_DIRENT_SOCKET: 5, UV_DIRENT_UNKNOWN: 0, UV_FS_COPYFILE_EXCL: 1, UV_FS_COPYFILE_FICLONE: 2, UV_FS_COPYFILE_FICLONE_FORCE: 4, UV_FS_O_FILEMAP: 0, UV_FS_SYMLINK_DIR: 1, UV_FS_SYMLINK_JUNCTION: 2, W_OK: 2, X_OK: 1 }, Symbol.toStringTag, { value: "Module" }));
    fp = { F_OK: 0, R_OK: 4, W_OK: 2, X_OK: 1, constants: hp, promises: y, Dir: Bd, Dirent: Vd, FileReadStream: Jd, FileWriteStream: zd, ReadStream: Hd, Stats: Qd, WriteStream: Wd, _toUnixTimestamp: _f, access: Th, accessSync: xf, appendFile: xh, appendFileSync: Tf, chmod: Ah, chmodSync: Af, chown: Ph, chownSync: Pf, close: Xh, closeSync: If, copyFile: Ih, copyFileSync: Cf, cp: Ch, cpSync: Nf, createReadStream: ef, createWriteStream: tf, exists: rf, existsSync, fchmod: sf, fchmodSync: Of, fchown: nf, fchownSync: kf, fdatasync: af, fdatasyncSync: Rf, fstat: of, fstatSync: Df, fsync: lf, fsyncSync: Mf, ftruncate: cf, ftruncateSync: Lf, futimes: uf, futimesSync: $f, glob: Ef, lchmod: kh, globSync: dp, lchmodSync: Ff, lchown: Nh, lchownSync: qf, link: Oh, linkSync: Uf, lstat: Rh, lstatSync: df, lutimes: Dh, lutimesSync: jf, mkdir: Mh, mkdirSync: Bf, mkdtemp: Lh, mkdtempSync: Vf, open: qh, openAsBlob: Sf, openSync: Qf, opendir: Fh, opendirSync: Hf, read: hf, readFile: jh, readFileSync: Gf, readSync: Jf, readdir: Uh, readdirSync: Wf, readlink: Bh, readlinkSync: Kf, readv: ff, readvSync: zf, realpath: $h, realpathSync: pf, rename: Vh, renameSync: Yf, rm: Qh, rmSync: Zf, rmdir: Hh, rmdirSync: Xf, stat: Wh, statSync: mf, statfs: Zh, statfsSync: up, symlink: Jh, symlinkSync: ep, truncate: zh, truncateSync: rp, unlink: Gh, unlinkSync: ip, unwatchFile: gf, utimes: Kh, utimesSync: sp, watch: yf, watchFile: wf, write: bf, writeFile: Yh, writeFileSync: ap, writeSync: lp, writev: vf, writevSync: cp };
    pp = getDefaultExportFromNamespaceIfNotNamed(Object.freeze(Object.defineProperty({ __proto__: null, Dir: Bd, Dirent: Vd, F_OK: 0, FileReadStream: Jd, FileWriteStream: zd, R_OK: 4, ReadStream: Hd, Stats: Qd, W_OK: 2, WriteStream: Wd, X_OK: 1, _toUnixTimestamp: _f, access: Th, accessSync: xf, appendFile: xh, appendFileSync: Tf, chmod: Ah, chmodSync: Af, chown: Ph, chownSync: Pf, close: Xh, closeSync: If, constants: hp, copyFile: Ih, copyFileSync: Cf, cp: Ch, cpSync: Nf, createReadStream: ef, createWriteStream: tf, default: fp, exists: rf, existsSync, fchmod: sf, fchmodSync: Of, fchown: nf, fchownSync: kf, fdatasync: af, fdatasyncSync: Rf, fstat: of, fstatSync: Df, fsync: lf, fsyncSync: Mf, ftruncate: cf, ftruncateSync: Lf, futimes: uf, futimesSync: $f, glob: Ef, globSync: dp, lchmod: kh, lchmodSync: Ff, lchown: Nh, lchownSync: qf, link: Oh, linkSync: Uf, lstat: Rh, lstatSync: df, lutimes: Dh, lutimesSync: jf, mkdir: Mh, mkdirSync: Bf, mkdtemp: Lh, mkdtempSync: Vf, open: qh, openAsBlob: Sf, openSync: Qf, opendir: Fh, opendirSync: Hf, promises: y, read: hf, readFile: jh, readFileSync: Gf, readSync: Jf, readdir: Uh, readdirSync: Wf, readlink: Bh, readlinkSync: Kf, readv: ff, readvSync: zf, realpath: $h, realpathSync: pf, rename: Vh, renameSync: Yf, rm: Qh, rmSync: Zf, rmdir: Hh, rmdirSync: Xf, stat: Wh, statSync: mf, statfs: Zh, statfsSync: up, symlink: Jh, symlinkSync: ep, truncate: zh, truncateSync: rp, unlink: Gh, unlinkSync: ip, unwatchFile: gf, utimes: Kh, utimesSync: sp, watch: yf, watchFile: wf, write: bf, writeFile: Yh, writeFileSync: ap, writeSync: lp, writev: vf, writevSync: cp }, Symbol.toStringTag, { value: "Module" })));
    __name(parse$6, "parse$6");
    __name(toClientConfig$1, "toClientConfig$1");
    __name(deprecatedSslModeWarning, "deprecatedSslModeWarning");
    mp = parse$6;
    parse$6.parse = parse$6, parse$6.toClientConfig = toClientConfig$1, parse$6.parseIntoClientConfig = function(n3) {
      return toClientConfig$1(parse$6(n3));
    };
    gp = getDefaultExportFromCjs(mp);
    yp = gp.parse;
    wp = gp.parse;
    bp = gp.toClientConfig;
    vp = gp.parseIntoClientConfig;
    _p = Object.freeze(Object.defineProperty({ __proto__: null, default: yp, parse: wp, parseIntoClientConfig: vp, toClientConfig: bp }, Symbol.toStringTag, { value: "Module" }));
    Sp = jd;
    Ep = _d;
    Tp = getDefaultExportFromNamespaceIfNotNamed(_p).parse;
    val = /* @__PURE__ */ __name(function(l6, c6, u5) {
      return c6[l6] ? c6[l6] : (void 0 === u5 ? u5 = m2.env["PG" + l6.toUpperCase()] : false === u5 || (u5 = m2.env[u5]), u5 || Ep[l6]);
    }, "val");
    quoteParamValue = /* @__PURE__ */ __name(function(n3) {
      return "'" + ("" + n3).replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'";
    }, "quoteParamValue");
    add = /* @__PURE__ */ __name(function(n3, l6, c6) {
      const u5 = l6[c6];
      null != u5 && n3.push(c6 + "=" + quoteParamValue(u5));
    }, "add");
    xp = class {
      static {
        __name(this, "xp");
      }
      constructor(l6) {
        (l6 = "string" == typeof l6 ? Tp(l6) : l6 || {}).connectionString && (l6 = Object.assign({}, l6, Tp(l6.connectionString))), this.user = val("user", l6), this.database = val("database", l6), void 0 === this.database && (this.database = this.user), this.port = parseInt(val("port", l6), 10), this.host = val("host", l6), Object.defineProperty(this, "password", { configurable: true, enumerable: false, writable: true, value: val("password", l6) }), this.binary = val("binary", l6), this.options = val("options", l6), this.ssl = void 0 === l6.ssl ? (function() {
          switch (m2.env.PGSSLMODE) {
            case "disable":
              return false;
            case "prefer":
            case "require":
            case "verify-ca":
            case "verify-full":
              return true;
            case "no-verify":
              return { rejectUnauthorized: false };
          }
          return Ep.ssl;
        })() : l6.ssl, "string" == typeof this.ssl && "true" === this.ssl && (this.ssl = true), "no-verify" === this.ssl && (this.ssl = { rejectUnauthorized: false }), this.ssl && this.ssl.key && Object.defineProperty(this.ssl, "key", { enumerable: false }), this.client_encoding = val("client_encoding", l6), this.replication = val("replication", l6), this.isDomainSocket = !(this.host || "").indexOf("/"), this.application_name = val("application_name", l6, "PGAPPNAME"), this.fallback_application_name = val("fallback_application_name", l6, false), this.statement_timeout = val("statement_timeout", l6, false), this.lock_timeout = val("lock_timeout", l6, false), this.idle_in_transaction_session_timeout = val("idle_in_transaction_session_timeout", l6, false), this.query_timeout = val("query_timeout", l6, false), void 0 === l6.connectionTimeoutMillis ? this.connect_timeout = m2.env.PGCONNECT_TIMEOUT || 0 : this.connect_timeout = Math.floor(l6.connectionTimeoutMillis / 1e3), false === l6.keepAlive ? this.keepalives = 0 : true === l6.keepAlive && (this.keepalives = 1), "number" == typeof l6.keepAliveInitialDelayMillis && (this.keepalives_idle = Math.floor(l6.keepAliveInitialDelayMillis / 1e3));
      }
      getLibpqConnectionString(n3) {
        const l6 = [];
        add(l6, this, "user"), add(l6, this, "password"), add(l6, this, "port"), add(l6, this, "application_name"), add(l6, this, "fallback_application_name"), add(l6, this, "connect_timeout"), add(l6, this, "options");
        const c6 = "object" == typeof this.ssl ? this.ssl : this.ssl ? { sslmode: this.ssl } : {};
        if (add(l6, c6, "sslmode"), add(l6, c6, "sslca"), add(l6, c6, "sslkey"), add(l6, c6, "sslcert"), add(l6, c6, "sslrootcert"), this.database && l6.push("dbname=" + quoteParamValue(this.database)), this.replication && l6.push("replication=" + quoteParamValue(this.replication)), this.host && l6.push("host=" + quoteParamValue(this.host)), this.isDomainSocket) return n3(null, l6.join(" "));
        this.client_encoding && l6.push("client_encoding=" + quoteParamValue(this.client_encoding)), Sp.lookup(this.host, function(c7, u5) {
          return c7 ? n3(c7, null) : (l6.push("hostaddr=" + quoteParamValue(u5)), n3(null, l6.join(" ")));
        });
      }
    };
    Pp = requirePgTypes();
    Ap = /^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/;
    Ip = class {
      static {
        __name(this, "Ip");
      }
      constructor(n3, l6) {
        this.command = null, this.rowCount = null, this.oid = null, this.rows = [], this.fields = [], this._parsers = void 0, this._types = l6, this.RowCtor = null, this.rowAsArray = "array" === n3, this.rowAsArray && (this.parseRow = this._parseRowAsArray), this._prebuiltEmptyResultObject = null;
      }
      addCommandComplete(n3) {
        let l6;
        l6 = n3.text ? Ap.exec(n3.text) : Ap.exec(n3.command), l6 && (this.command = l6[1], l6[3] ? (this.oid = parseInt(l6[2], 10), this.rowCount = parseInt(l6[3], 10)) : l6[2] && (this.rowCount = parseInt(l6[2], 10)));
      }
      _parseRowAsArray(n3) {
        const l6 = new Array(n3.length);
        for (let c6 = 0, u5 = n3.length; c6 < u5; c6++) {
          const u6 = n3[c6];
          l6[c6] = null !== u6 ? this._parsers[c6](u6) : null;
        }
        return l6;
      }
      parseRow(n3) {
        const l6 = { ...this._prebuiltEmptyResultObject };
        for (let c6 = 0, u5 = n3.length; c6 < u5; c6++) {
          const u6 = n3[c6], f6 = this.fields[c6].name;
          if (null !== u6) {
            const n4 = "binary" === this.fields[c6].format ? h2.from(u6) : u6;
            l6[f6] = this._parsers[c6](n4);
          } else l6[f6] = null;
        }
        return l6;
      }
      addRow(n3) {
        this.rows.push(n3);
      }
      addFields(n3) {
        this.fields = n3, this.fields.length && (this._parsers = new Array(n3.length));
        const l6 = {};
        for (let c6 = 0; c6 < n3.length; c6++) {
          const u5 = n3[c6];
          l6[u5.name] = null, this._types ? this._parsers[c6] = this._types.getTypeParser(u5.dataTypeID, u5.format || "text") : this._parsers[c6] = Pp.getTypeParser(u5.dataTypeID, u5.format || "text");
        }
        this._prebuiltEmptyResultObject = { ...l6 };
      }
    };
    ({ EventEmitter: Cp } = Gu);
    Np = Ip;
    kp = Pd;
    Op = class extends Cp {
      static {
        __name(this, "Op");
      }
      constructor(l6, c6, u5) {
        super(), l6 = kp.normalizeQueryConfig(l6, c6, u5), this.text = l6.text, this.values = l6.values, this.rows = l6.rows, this.types = l6.types, this.name = l6.name, this.queryMode = l6.queryMode, this.binary = l6.binary, this.portal = l6.portal || "", this.callback = l6.callback, this._rowMode = l6.rowMode, m2.domain && l6.callback && (this.callback = m2.domain.bind(l6.callback)), this._result = new Np(this._rowMode, this.types), this._results = this._result, this._canceledDueToError = false;
      }
      requiresPreparation() {
        return "extended" === this.queryMode || (!!this.name || (!!this.rows || !!this.text && (!!this.values && this.values.length > 0)));
      }
      _checkForMultirow() {
        this._result.command && (Array.isArray(this._results) || (this._results = [this._result]), this._result = new Np(this._rowMode, this._result._types), this._results.push(this._result));
      }
      handleRowDescription(n3) {
        this._checkForMultirow(), this._result.addFields(n3.fields), this._accumulateRows = this.callback || !this.listeners("row").length;
      }
      handleDataRow(n3) {
        let l6;
        if (!this._canceledDueToError) {
          try {
            l6 = this._result.parseRow(n3.fields);
          } catch (n4) {
            return void (this._canceledDueToError = n4);
          }
          this.emit("row", l6, this._result), this._accumulateRows && this._result.addRow(l6);
        }
      }
      handleCommandComplete(n3, l6) {
        this._checkForMultirow(), this._result.addCommandComplete(n3), this.rows && l6.sync();
      }
      handleEmptyQuery(n3) {
        this.rows && n3.sync();
      }
      handleError(n3, l6) {
        if (this._canceledDueToError && (n3 = this._canceledDueToError, this._canceledDueToError = false), this.callback) return this.callback(n3);
        this.emit("error", n3);
      }
      handleReadyForQuery(l6) {
        if (this._canceledDueToError) return this.handleError(this._canceledDueToError, l6);
        if (this.callback) try {
          this.callback(null, this._results);
        } catch (l7) {
          m2.nextTick(() => {
            throw l7;
          });
        }
        this.emit("end", this._results);
      }
      submit(n3) {
        if ("string" != typeof this.text && "string" != typeof this.name) return new Error("A query must have either text or a name. Supplying neither is unsupported.");
        const l6 = n3.parsedStatements[this.name];
        if (this.text && l6 && this.text !== l6) return new Error(`Prepared statements must be unique - '${this.name}' was used for a different statement`);
        if (this.values && !Array.isArray(this.values)) return new Error("Query values must be an array");
        if (this.requiresPreparation()) {
          n3.stream.cork && n3.stream.cork();
          try {
            this.prepare(n3);
          } finally {
            n3.stream.uncork && n3.stream.uncork();
          }
        } else n3.query(this.text);
        return null;
      }
      hasBeenParsed(n3) {
        return this.name && n3.parsedStatements[this.name];
      }
      handlePortalSuspended(n3) {
        this._getRows(n3, this.rows);
      }
      _getRows(n3, l6) {
        n3.execute({ portal: this.portal, rows: l6 }), l6 ? n3.flush() : n3.sync();
      }
      prepare(n3) {
        this.hasBeenParsed(n3) || n3.parse({ text: this.text, name: this.name, types: this.types });
        try {
          n3.bind({ portal: this.portal, statement: this.name, values: this.values, binary: this.binary, valueMapper: kp.prepareValue });
        } catch (l6) {
          return void this.handleError(l6, n3);
        }
        n3.describe({ type: "P", name: this.portal || "" }), this._getRows(n3, this.rows);
      }
      handleCopyInResponse(n3) {
        n3.sendCopyFail("No source stream defined");
      }
      handleCopyData(n3, l6) {
      }
    };
    Rp = {};
    Dp = {};
    Object.defineProperty(Dp, "__esModule", { value: true }), Dp.NoticeMessage = Dp.DataRowMessage = Dp.CommandCompleteMessage = Dp.ReadyForQueryMessage = Dp.NotificationResponseMessage = Dp.BackendKeyDataMessage = Dp.AuthenticationMD5Password = Dp.ParameterStatusMessage = Dp.ParameterDescriptionMessage = Dp.RowDescriptionMessage = Dp.Field = Dp.CopyResponse = Dp.CopyDataMessage = Dp.DatabaseError = Dp.copyDone = Dp.emptyQuery = Dp.replicationStart = Dp.portalSuspended = Dp.noData = Dp.closeComplete = Dp.bindComplete = Dp.parseComplete = void 0, Dp.parseComplete = { name: "parseComplete", length: 5 }, Dp.bindComplete = { name: "bindComplete", length: 5 }, Dp.closeComplete = { name: "closeComplete", length: 5 }, Dp.noData = { name: "noData", length: 5 }, Dp.portalSuspended = { name: "portalSuspended", length: 5 }, Dp.replicationStart = { name: "replicationStart", length: 4 }, Dp.emptyQuery = { name: "emptyQuery", length: 4 }, Dp.copyDone = { name: "copyDone", length: 4 };
    Mp = class extends Error {
      static {
        __name(this, "Mp");
      }
      constructor(n3, l6, c6) {
        super(n3), this.length = l6, this.name = c6;
      }
    };
    Dp.DatabaseError = Mp;
    Dp.CopyDataMessage = class {
      constructor(n3, l6) {
        this.length = n3, this.chunk = l6, this.name = "copyData";
      }
    };
    Dp.CopyResponse = class {
      constructor(n3, l6, c6, u5) {
        this.length = n3, this.name = l6, this.binary = c6, this.columnTypes = new Array(u5);
      }
    };
    Dp.Field = class {
      constructor(n3, l6, c6, u5, h7, f6, p5) {
        this.name = n3, this.tableID = l6, this.columnID = c6, this.dataTypeID = u5, this.dataTypeSize = h7, this.dataTypeModifier = f6, this.format = p5;
      }
    };
    Dp.RowDescriptionMessage = class {
      constructor(n3, l6) {
        this.length = n3, this.fieldCount = l6, this.name = "rowDescription", this.fields = new Array(this.fieldCount);
      }
    };
    Dp.ParameterDescriptionMessage = class {
      constructor(n3, l6) {
        this.length = n3, this.parameterCount = l6, this.name = "parameterDescription", this.dataTypeIDs = new Array(this.parameterCount);
      }
    };
    Dp.ParameterStatusMessage = class {
      constructor(n3, l6, c6) {
        this.length = n3, this.parameterName = l6, this.parameterValue = c6, this.name = "parameterStatus";
      }
    };
    Dp.AuthenticationMD5Password = class {
      constructor(n3, l6) {
        this.length = n3, this.salt = l6, this.name = "authenticationMD5Password";
      }
    };
    Dp.BackendKeyDataMessage = class {
      constructor(n3, l6, c6) {
        this.length = n3, this.processID = l6, this.secretKey = c6, this.name = "backendKeyData";
      }
    };
    Dp.NotificationResponseMessage = class {
      constructor(n3, l6, c6, u5) {
        this.length = n3, this.processId = l6, this.channel = c6, this.payload = u5, this.name = "notification";
      }
    };
    Dp.ReadyForQueryMessage = class {
      constructor(n3, l6) {
        this.length = n3, this.status = l6, this.name = "readyForQuery";
      }
    };
    Dp.CommandCompleteMessage = class {
      constructor(n3, l6) {
        this.length = n3, this.text = l6, this.name = "commandComplete";
      }
    };
    Dp.DataRowMessage = class {
      constructor(n3, l6) {
        this.length = n3, this.fields = l6, this.name = "dataRow", this.fieldCount = l6.length;
      }
    };
    Dp.NoticeMessage = class {
      constructor(n3, l6) {
        this.length = n3, this.message = l6, this.name = "notice";
      }
    };
    Lp = {};
    $p = {};
    Object.defineProperty($p, "__esModule", { value: true }), $p.Writer = void 0;
    $p.Writer = class {
      constructor(n3 = 256) {
        this.size = n3, this.offset = 5, this.headerPosition = 0, this.buffer = h2.allocUnsafe(n3);
      }
      ensure(n3) {
        if (this.buffer.length - this.offset < n3) {
          const l6 = this.buffer, c6 = l6.length + (l6.length >> 1) + n3;
          this.buffer = h2.allocUnsafe(c6), l6.copy(this.buffer);
        }
      }
      addInt32(n3) {
        return this.ensure(4), this.buffer[this.offset++] = n3 >>> 24 & 255, this.buffer[this.offset++] = n3 >>> 16 & 255, this.buffer[this.offset++] = n3 >>> 8 & 255, this.buffer[this.offset++] = n3 >>> 0 & 255, this;
      }
      addInt16(n3) {
        return this.ensure(2), this.buffer[this.offset++] = n3 >>> 8 & 255, this.buffer[this.offset++] = n3 >>> 0 & 255, this;
      }
      addCString(n3) {
        if (n3) {
          const l6 = h2.byteLength(n3);
          this.ensure(l6 + 1), this.buffer.write(n3, this.offset, "utf-8"), this.offset += l6;
        } else this.ensure(1);
        return this.buffer[this.offset++] = 0, this;
      }
      addString(n3 = "") {
        const l6 = h2.byteLength(n3);
        return this.ensure(l6), this.buffer.write(n3, this.offset), this.offset += l6, this;
      }
      add(n3) {
        return this.ensure(n3.length), n3.copy(this.buffer, this.offset), this.offset += n3.length, this;
      }
      join(n3) {
        if (n3) {
          this.buffer[this.headerPosition] = n3;
          const l6 = this.offset - (this.headerPosition + 1);
          this.buffer.writeInt32BE(l6, this.headerPosition + 1);
        }
        return this.buffer.slice(n3 ? 0 : 5, this.offset);
      }
      flush(n3) {
        const l6 = this.join(n3);
        return this.offset = 5, this.headerPosition = 0, this.buffer = h2.allocUnsafe(this.size), l6;
      }
    }, Object.defineProperty(Lp, "__esModule", { value: true }), Lp.serialize = void 0;
    qp = $p;
    Fp = new qp.Writer();
    Up = [];
    jp = new qp.Writer();
    Bp = h2.from([69, 0, 0, 0, 9, 0, 0, 0, 0, 0]);
    cstringMessage = /* @__PURE__ */ __name((n3, l6) => {
      const c6 = 4 + h2.byteLength(l6) + 1, u5 = h2.allocUnsafe(1 + c6);
      return u5[0] = n3, u5.writeInt32BE(c6, 1), u5.write(l6, 5, "utf-8"), u5[c6] = 0, u5;
    }, "cstringMessage");
    Vp = Fp.addCString("P").flush(68);
    Qp = Fp.addCString("S").flush(68);
    codeOnlyBuffer = /* @__PURE__ */ __name((n3) => h2.from([n3, 0, 0, 0, 4]), "codeOnlyBuffer");
    Hp = codeOnlyBuffer(72);
    Wp = codeOnlyBuffer(83);
    Jp = codeOnlyBuffer(88);
    zp = codeOnlyBuffer(99);
    Gp = { startup: /* @__PURE__ */ __name((n3) => {
      Fp.addInt16(3).addInt16(0);
      for (const l7 of Object.keys(n3)) Fp.addCString(l7).addCString(n3[l7]);
      Fp.addCString("client_encoding").addCString("UTF8");
      const l6 = Fp.addCString("").flush(), c6 = l6.length + 4;
      return new qp.Writer().addInt32(c6).add(l6).flush();
    }, "startup"), password: /* @__PURE__ */ __name((n3) => Fp.addCString(n3).flush(112), "password"), requestSsl: /* @__PURE__ */ __name(() => {
      const n3 = h2.allocUnsafe(8);
      return n3.writeInt32BE(8, 0), n3.writeInt32BE(80877103, 4), n3;
    }, "requestSsl"), sendSASLInitialResponseMessage: /* @__PURE__ */ __name(function(n3, l6) {
      return Fp.addCString(n3).addInt32(h2.byteLength(l6)).addString(l6), Fp.flush(112);
    }, "sendSASLInitialResponseMessage"), sendSCRAMClientFinalMessage: /* @__PURE__ */ __name(function(n3) {
      return Fp.addString(n3).flush(112);
    }, "sendSCRAMClientFinalMessage"), query: /* @__PURE__ */ __name((n3) => Fp.addCString(n3).flush(81), "query"), parse: /* @__PURE__ */ __name((n3) => {
      const l6 = n3.name || "";
      l6.length > 63 && (console.error("Warning! Postgres only supports 63 characters for query names."), console.error("You supplied %s (%s)", l6, l6.length), console.error("This can cause conflicts and silent errors executing queries"));
      const c6 = n3.types || Up, u5 = c6.length, h7 = Fp.addCString(l6).addCString(n3.text).addInt16(u5);
      for (let n4 = 0; n4 < u5; n4++) h7.addInt32(c6[n4]);
      return Fp.flush(80);
    }, "parse"), bind: /* @__PURE__ */ __name((n3 = {}) => {
      const l6 = n3.portal || "", c6 = n3.statement || "", u5 = n3.binary || false, f6 = n3.values || Up, p5 = f6.length;
      return Fp.addCString(l6).addCString(c6), Fp.addInt16(p5), (function(n4, l7) {
        for (let c7 = 0; c7 < n4.length; c7++) {
          const u6 = l7 ? l7(n4[c7], c7) : n4[c7];
          null == u6 ? (Fp.addInt16(0), jp.addInt32(-1)) : u6 instanceof h2 ? (Fp.addInt16(1), jp.addInt32(u6.length), jp.add(u6)) : (Fp.addInt16(0), jp.addInt32(h2.byteLength(u6)), jp.addString(u6));
        }
      })(f6, n3.valueMapper), Fp.addInt16(p5), Fp.add(jp.flush()), Fp.addInt16(1), Fp.addInt16(u5 ? 1 : 0), Fp.flush(66);
    }, "bind"), execute: /* @__PURE__ */ __name((n3) => {
      if (!n3 || !n3.portal && !n3.rows) return Bp;
      const l6 = n3.portal || "", c6 = n3.rows || 0, u5 = h2.byteLength(l6), f6 = 4 + u5 + 1 + 4, p5 = h2.allocUnsafe(1 + f6);
      return p5[0] = 69, p5.writeInt32BE(f6, 1), p5.write(l6, 5, "utf-8"), p5[u5 + 5] = 0, p5.writeUInt32BE(c6, p5.length - 4), p5;
    }, "execute"), describe: /* @__PURE__ */ __name((n3) => n3.name ? cstringMessage(68, `${n3.type}${n3.name || ""}`) : "P" === n3.type ? Vp : Qp, "describe"), close: /* @__PURE__ */ __name((n3) => {
      const l6 = `${n3.type}${n3.name || ""}`;
      return cstringMessage(67, l6);
    }, "close"), flush: /* @__PURE__ */ __name(() => Hp, "flush"), sync: /* @__PURE__ */ __name(() => Wp, "sync"), end: /* @__PURE__ */ __name(() => Jp, "end"), copyData: /* @__PURE__ */ __name((n3) => Fp.add(n3).flush(100), "copyData"), copyDone: /* @__PURE__ */ __name(() => zp, "copyDone"), copyFail: /* @__PURE__ */ __name((n3) => cstringMessage(102, n3), "copyFail"), cancel: /* @__PURE__ */ __name((n3, l6) => {
      const c6 = h2.allocUnsafe(16);
      return c6.writeInt32BE(16, 0), c6.writeInt16BE(1234, 4), c6.writeInt16BE(5678, 6), c6.writeInt32BE(n3, 8), c6.writeInt32BE(l6, 12), c6;
    }, "cancel") };
    Lp.serialize = Gp;
    Kp = {};
    Yp = {};
    Object.defineProperty(Yp, "__esModule", { value: true }), Yp.BufferReader = void 0;
    Zp = h2.allocUnsafe(0);
    Yp.BufferReader = class {
      constructor(n3 = 0) {
        this.offset = n3, this.buffer = Zp, this.encoding = "utf-8";
      }
      setBuffer(n3, l6) {
        this.offset = n3, this.buffer = l6;
      }
      int16() {
        const n3 = this.buffer.readInt16BE(this.offset);
        return this.offset += 2, n3;
      }
      byte() {
        const n3 = this.buffer[this.offset];
        return this.offset++, n3;
      }
      int32() {
        const n3 = this.buffer.readInt32BE(this.offset);
        return this.offset += 4, n3;
      }
      uint32() {
        const n3 = this.buffer.readUInt32BE(this.offset);
        return this.offset += 4, n3;
      }
      string(n3) {
        const l6 = this.buffer.toString(this.encoding, this.offset, this.offset + n3);
        return this.offset += n3, l6;
      }
      cstring() {
        const n3 = this.offset;
        let l6 = n3;
        for (; 0 !== this.buffer[l6++]; ) ;
        return this.offset = l6, this.buffer.toString(this.encoding, n3, l6 - 1);
      }
      bytes(n3) {
        const l6 = this.buffer.slice(this.offset, this.offset + n3);
        return this.offset += n3, l6;
      }
    }, Object.defineProperty(Kp, "__esModule", { value: true }), Kp.Parser = void 0;
    tm = Dp;
    rm = Yp;
    nm = -1;
    im = h2.allocUnsafe(0);
    Kp.Parser = class {
      constructor(n3) {
        if (this.buffer = im, this.bufferLength = 0, this.bufferOffset = 0, this.reader = new rm.BufferReader(), "binary" === (null == n3 ? void 0 : n3.mode)) throw new Error("Binary mode not supported yet");
        this.mode = (null == n3 ? void 0 : n3.mode) || "text";
      }
      parse(n3, l6) {
        this.mergeBuffer(n3);
        const c6 = this.bufferOffset + this.bufferLength;
        let u5 = this.bufferOffset;
        for (; u5 + 5 <= c6; ) {
          const n4 = this.buffer[u5], h7 = this.buffer.readUInt32BE(u5 + 1), f6 = 1 + h7;
          if (!(f6 + u5 <= c6)) break;
          l6(this.handlePacket(u5 + 5, n4, h7, this.buffer)), u5 += f6;
        }
        u5 === c6 ? (this.buffer = im, this.bufferLength = 0, this.bufferOffset = 0) : (this.bufferLength = c6 - u5, this.bufferOffset = u5);
      }
      mergeBuffer(n3) {
        if (this.bufferLength > 0) {
          const l6 = this.bufferLength + n3.byteLength;
          if (l6 + this.bufferOffset > this.buffer.byteLength) {
            let n4;
            if (l6 <= this.buffer.byteLength && this.bufferOffset >= this.bufferLength) n4 = this.buffer;
            else {
              let c6 = 2 * this.buffer.byteLength;
              for (; l6 >= c6; ) c6 *= 2;
              n4 = h2.allocUnsafe(c6);
            }
            this.buffer.copy(n4, 0, this.bufferOffset, this.bufferOffset + this.bufferLength), this.buffer = n4, this.bufferOffset = 0;
          }
          n3.copy(this.buffer, this.bufferOffset + this.bufferLength), this.bufferLength = l6;
        } else this.buffer = n3, this.bufferOffset = 0, this.bufferLength = n3.byteLength;
      }
      handlePacket(n3, l6, c6, u5) {
        const { reader: h7 } = this;
        let f6;
        switch (h7.setBuffer(n3, u5), l6) {
          case 50:
            f6 = tm.bindComplete;
            break;
          case 49:
            f6 = tm.parseComplete;
            break;
          case 51:
            f6 = tm.closeComplete;
            break;
          case 110:
            f6 = tm.noData;
            break;
          case 115:
            f6 = tm.portalSuspended;
            break;
          case 99:
            f6 = tm.copyDone;
            break;
          case 87:
            f6 = tm.replicationStart;
            break;
          case 73:
            f6 = tm.emptyQuery;
            break;
          case 68:
            f6 = parseDataRowMessage(h7);
            break;
          case 67:
            f6 = parseCommandCompleteMessage(h7);
            break;
          case 90:
            f6 = parseReadyForQueryMessage(h7);
            break;
          case 65:
            f6 = parseNotificationMessage(h7);
            break;
          case 82:
            f6 = parseAuthenticationResponse(h7, c6);
            break;
          case 83:
            f6 = parseParameterStatusMessage(h7);
            break;
          case 75:
            f6 = parseBackendKeyData(h7);
            break;
          case 69:
            f6 = parseErrorMessage(h7, "error");
            break;
          case 78:
            f6 = parseErrorMessage(h7, "notice");
            break;
          case 84:
            f6 = parseRowDescriptionMessage(h7);
            break;
          case 116:
            f6 = parseParameterDescriptionMessage(h7);
            break;
          case 71:
            f6 = parseCopyInMessage(h7);
            break;
          case 72:
            f6 = parseCopyOutMessage(h7);
            break;
          case 100:
            f6 = parseCopyData(h7, c6);
            break;
          default:
            return new tm.DatabaseError("received invalid response: " + l6.toString(16), c6, "error");
        }
        return h7.setBuffer(0, im), f6.length = c6, f6;
      }
    };
    parseReadyForQueryMessage = /* @__PURE__ */ __name((n3) => {
      const l6 = n3.string(1);
      return new tm.ReadyForQueryMessage(nm, l6);
    }, "parseReadyForQueryMessage");
    parseCommandCompleteMessage = /* @__PURE__ */ __name((n3) => {
      const l6 = n3.cstring();
      return new tm.CommandCompleteMessage(nm, l6);
    }, "parseCommandCompleteMessage");
    parseCopyData = /* @__PURE__ */ __name((n3, l6) => {
      const c6 = n3.bytes(l6 - 4);
      return new tm.CopyDataMessage(nm, c6);
    }, "parseCopyData");
    parseCopyInMessage = /* @__PURE__ */ __name((n3) => parseCopyMessage(n3, "copyInResponse"), "parseCopyInMessage");
    parseCopyOutMessage = /* @__PURE__ */ __name((n3) => parseCopyMessage(n3, "copyOutResponse"), "parseCopyOutMessage");
    parseCopyMessage = /* @__PURE__ */ __name((n3, l6) => {
      const c6 = 0 !== n3.byte(), u5 = n3.int16(), h7 = new tm.CopyResponse(nm, l6, c6, u5);
      for (let l7 = 0; l7 < u5; l7++) h7.columnTypes[l7] = n3.int16();
      return h7;
    }, "parseCopyMessage");
    parseNotificationMessage = /* @__PURE__ */ __name((n3) => {
      const l6 = n3.int32(), c6 = n3.cstring(), u5 = n3.cstring();
      return new tm.NotificationResponseMessage(nm, l6, c6, u5);
    }, "parseNotificationMessage");
    parseRowDescriptionMessage = /* @__PURE__ */ __name((n3) => {
      const l6 = n3.int16(), c6 = new tm.RowDescriptionMessage(nm, l6);
      for (let u5 = 0; u5 < l6; u5++) c6.fields[u5] = parseField(n3);
      return c6;
    }, "parseRowDescriptionMessage");
    parseField = /* @__PURE__ */ __name((n3) => {
      const l6 = n3.cstring(), c6 = n3.uint32(), u5 = n3.int16(), h7 = n3.uint32(), f6 = n3.int16(), p5 = n3.int32(), m7 = 0 === n3.int16() ? "text" : "binary";
      return new tm.Field(l6, c6, u5, h7, f6, p5, m7);
    }, "parseField");
    parseParameterDescriptionMessage = /* @__PURE__ */ __name((n3) => {
      const l6 = n3.int16(), c6 = new tm.ParameterDescriptionMessage(nm, l6);
      for (let u5 = 0; u5 < l6; u5++) c6.dataTypeIDs[u5] = n3.int32();
      return c6;
    }, "parseParameterDescriptionMessage");
    parseDataRowMessage = /* @__PURE__ */ __name((n3) => {
      const l6 = n3.int16(), c6 = new Array(l6);
      for (let u5 = 0; u5 < l6; u5++) {
        const l7 = n3.int32();
        c6[u5] = -1 === l7 ? null : n3.string(l7);
      }
      return new tm.DataRowMessage(nm, c6);
    }, "parseDataRowMessage");
    parseParameterStatusMessage = /* @__PURE__ */ __name((n3) => {
      const l6 = n3.cstring(), c6 = n3.cstring();
      return new tm.ParameterStatusMessage(nm, l6, c6);
    }, "parseParameterStatusMessage");
    parseBackendKeyData = /* @__PURE__ */ __name((n3) => {
      const l6 = n3.int32(), c6 = n3.int32();
      return new tm.BackendKeyDataMessage(nm, l6, c6);
    }, "parseBackendKeyData");
    parseAuthenticationResponse = /* @__PURE__ */ __name((n3, l6) => {
      const c6 = n3.int32(), u5 = { name: "authenticationOk", length: l6 };
      switch (c6) {
        case 0:
          break;
        case 3:
          8 === u5.length && (u5.name = "authenticationCleartextPassword");
          break;
        case 5:
          if (12 === u5.length) {
            u5.name = "authenticationMD5Password";
            const l7 = n3.bytes(4);
            return new tm.AuthenticationMD5Password(nm, l7);
          }
          break;
        case 10:
          {
            let l7;
            u5.name = "authenticationSASL", u5.mechanisms = [];
            do {
              l7 = n3.cstring(), l7 && u5.mechanisms.push(l7);
            } while (l7);
          }
          break;
        case 11:
          u5.name = "authenticationSASLContinue", u5.data = n3.string(l6 - 8);
          break;
        case 12:
          u5.name = "authenticationSASLFinal", u5.data = n3.string(l6 - 8);
          break;
        default:
          throw new Error("Unknown authenticationOk message type " + c6);
      }
      return u5;
    }, "parseAuthenticationResponse");
    parseErrorMessage = /* @__PURE__ */ __name((n3, l6) => {
      const c6 = {};
      let u5 = n3.string(1);
      for (; "\0" !== u5; ) c6[u5] = n3.cstring(), u5 = n3.string(1);
      const h7 = c6.M, f6 = "notice" === l6 ? new tm.NoticeMessage(nm, h7) : new tm.DatabaseError(h7, nm, l6);
      return f6.severity = c6.S, f6.code = c6.C, f6.detail = c6.D, f6.hint = c6.H, f6.position = c6.P, f6.internalPosition = c6.p, f6.internalQuery = c6.q, f6.where = c6.W, f6.schema = c6.s, f6.table = c6.t, f6.column = c6.c, f6.dataType = c6.d, f6.constraint = c6.n, f6.file = c6.F, f6.line = c6.L, f6.routine = c6.R, f6;
    }, "parseErrorMessage");
    !(function(n3) {
      Object.defineProperty(n3, "__esModule", { value: true }), n3.DatabaseError = n3.serialize = n3.parse = void 0;
      const l6 = Dp;
      Object.defineProperty(n3, "DatabaseError", { enumerable: true, get: /* @__PURE__ */ __name(function() {
        return l6.DatabaseError;
      }, "get") });
      const c6 = Lp;
      Object.defineProperty(n3, "serialize", { enumerable: true, get: /* @__PURE__ */ __name(function() {
        return c6.serialize;
      }, "get") });
      const u5 = Kp;
      n3.parse = function(n4, l7) {
        const c7 = new u5.Parser();
        return n4.on("data", (n5) => c7.parse(n5, l7)), new Promise((l8) => n4.on("end", () => l8()));
      };
    })(Rp);
    sm = Rp.DatabaseError;
    am = Rp.serialize;
    om = Rp.parse;
    lm = Object.freeze(Object.defineProperty({ __proto__: null, DatabaseError: sm, parse: om, serialize: am }, Symbol.toStringTag, { value: "Module" }));
    cm = getDefaultExportFromNamespaceIfNotNamed(w2);
    um = getDefaultExportFromNamespaceIfNotNamed(b);
    pm = {};
    Object.defineProperty(pm, "__esModule", { value: true }), pm.CloudflareSocket = void 0;
    mm = Gu;
    ym = class extends mm.EventEmitter {
      static {
        __name(this, "ym");
      }
      constructor(n3) {
        super(), this.ssl = n3, this.writable = false, this.destroyed = false, this._upgrading = false, this._upgraded = false, this._cfSocket = null, this._cfWriter = null, this._cfReader = null;
      }
      setNoDelay() {
        return this;
      }
      setKeepAlive() {
        return this;
      }
      ref() {
        return this;
      }
      unref() {
        return this;
      }
      async connect(n3, l6, c6) {
        try {
          log("connecting"), c6 && this.once("connect", c6);
          const u5 = this.ssl ? { secureTransport: "starttls" } : {}, h7 = (await import("cloudflare:sockets")).connect;
          return this._cfSocket = h7(`${l6}:${n3}`, u5), this._cfWriter = this._cfSocket.writable.getWriter(), this._addClosedHandler(), this._cfReader = this._cfSocket.readable.getReader(), this.ssl ? this._listenOnce().catch((n4) => this.emit("error", n4)) : this._listen().catch((n4) => this.emit("error", n4)), await this._cfWriter.ready, log("socket ready"), this.writable = true, this.emit("connect"), this;
        } catch (n4) {
          this.emit("error", n4);
        }
      }
      async _listen() {
        for (; ; ) {
          log("awaiting receive from CF socket");
          const { done: n3, value: l6 } = await this._cfReader.read();
          if (log("CF socket received:", n3, l6), n3) {
            log("done");
            break;
          }
          this.emit("data", h2.from(l6));
        }
      }
      async _listenOnce() {
        log("awaiting first receive from CF socket");
        const { done: n3, value: l6 } = await this._cfReader.read();
        log("First CF socket received:", n3, l6), this.emit("data", h2.from(l6));
      }
      write(n3, l6 = "utf8", c6 = () => {
      }) {
        return 0 === n3.length ? c6() : ("string" == typeof n3 && (n3 = h2.from(n3, l6)), log("sending data direct:", n3), this._cfWriter.write(n3).then(() => {
          log("data sent"), c6();
        }, (n4) => {
          log("send error", n4), c6(n4);
        }), true);
      }
      end(n3 = h2.alloc(0), l6 = "utf8", c6 = () => {
      }) {
        return log("ending CF socket"), this.write(n3, l6, (n4) => {
          this._cfSocket.close(), c6 && c6(n4);
        }), this;
      }
      destroy(n3) {
        return log("destroying CF socket", n3), this.destroyed = true, this.end();
      }
      startTls(n3) {
        this._upgraded ? this.emit("error", "Cannot call `startTls()` more than once on a socket") : (this._cfWriter.releaseLock(), this._cfReader.releaseLock(), this._upgrading = true, this._cfSocket = this._cfSocket.startTls(n3), this._cfWriter = this._cfSocket.writable.getWriter(), this._cfReader = this._cfSocket.readable.getReader(), this._addClosedHandler(), this._listen().catch((n4) => this.emit("error", n4)));
      }
      _addClosedHandler() {
        this._cfSocket.closed.then(() => {
          this._upgrading ? (this._upgrading = false, this._upgraded = true) : (log("CF socket closed"), this._cfSocket = null, this.emit("close"));
        }).catch((n3) => this.emit("error", n3));
      }
    };
    pm.CloudflareSocket = ym;
    wm = false;
    __name(dump, "dump");
    __name(log, "log");
    bm = pm.CloudflareSocket;
    vm = getDefaultExportFromNamespaceIfNotNamed(Object.freeze(Object.defineProperty({ __proto__: null, CloudflareSocket: bm }, Symbol.toStringTag, { value: "Module" })));
    ({ getStream: _m, getSecureStream: Sm } = (function() {
      if ((function() {
        if ("object" == typeof navigator && null !== navigator && true) return true;
        if ("function" == typeof Response) {
          const n3 = new Response(null, { cf: { thing: true } });
          if ("object" == typeof n3.cf && null !== n3.cf && n3.cf.thing) return true;
        }
        return false;
      })()) return /* @__PURE__ */ (function() {
        function getStream(n3) {
          const { CloudflareSocket: l6 } = vm;
          return new l6(n3);
        }
        __name(getStream, "getStream");
        function getSecureStream(n3) {
          return n3.socket.startTls(n3), n3.socket;
        }
        __name(getSecureStream, "getSecureStream");
        return { getStream, getSecureStream };
      })();
      return /* @__PURE__ */ (function() {
        function getStream(n3) {
          return new cm.Socket();
        }
        __name(getStream, "getStream");
        function getSecureStream(n3) {
          return um.connect(n3);
        }
        __name(getSecureStream, "getSecureStream");
        return { getStream, getSecureStream };
      })();
    })());
    xm = { getStream: _m, getSecureStream: Sm };
    Am = Gu.EventEmitter;
    ({ parse: Im, serialize: Cm } = lm);
    ({ getStream: Nm, getSecureStream: km } = xm);
    Om = Cm.flush();
    Rm = Cm.sync();
    Dm = Cm.end();
    Mm = class extends Am {
      static {
        __name(this, "Mm");
      }
      constructor(n3) {
        super(), n3 = n3 || {}, this.stream = n3.stream || Nm(n3.ssl), "function" == typeof this.stream && (this.stream = this.stream(n3)), this._keepAlive = n3.keepAlive, this._keepAliveInitialDelayMillis = n3.keepAliveInitialDelayMillis, this.parsedStatements = {}, this.ssl = n3.ssl || false, this._ending = false, this._emitMessage = false;
        const l6 = this;
        this.on("newListener", function(n4) {
          "message" === n4 && (l6._emitMessage = true);
        });
      }
      connect(n3, l6) {
        const c6 = this;
        this._connecting = true, this.stream.setNoDelay(true), this.stream.connect(n3, l6), this.stream.once("connect", function() {
          c6._keepAlive && c6.stream.setKeepAlive(true, c6._keepAliveInitialDelayMillis), c6.emit("connect");
        });
        const reportStreamError = /* @__PURE__ */ __name(function(n4) {
          (!c6._ending || "ECONNRESET" !== n4.code && "EPIPE" !== n4.code) && c6.emit("error", n4);
        }, "reportStreamError");
        if (this.stream.on("error", reportStreamError), this.stream.on("close", function() {
          c6.emit("end");
        }), !this.ssl) return this.attachListeners(this.stream);
        this.stream.once("data", function(n4) {
          switch (n4.toString("utf8")) {
            case "S":
              break;
            case "N":
              return c6.stream.end(), c6.emit("error", new Error("The server does not support SSL connections"));
            default:
              return c6.stream.end(), c6.emit("error", new Error("There was an error establishing an SSL connection"));
          }
          const u5 = { socket: c6.stream };
          true !== c6.ssl && (Object.assign(u5, c6.ssl), "key" in c6.ssl && (u5.key = c6.ssl.key));
          const h7 = cm;
          h7.isIP && 0 === h7.isIP(l6) && (u5.servername = l6);
          try {
            c6.stream = km(u5);
          } catch (n5) {
            return c6.emit("error", n5);
          }
          c6.attachListeners(c6.stream), c6.stream.on("error", reportStreamError), c6.emit("sslconnect");
        });
      }
      attachListeners(n3) {
        Im(n3, (n4) => {
          const l6 = "error" === n4.name ? "errorMessage" : n4.name;
          this._emitMessage && this.emit("message", n4), this.emit(l6, n4);
        });
      }
      requestSsl() {
        this.stream.write(Cm.requestSsl());
      }
      startup(n3) {
        this.stream.write(Cm.startup(n3));
      }
      cancel(n3, l6) {
        this._send(Cm.cancel(n3, l6));
      }
      password(n3) {
        this._send(Cm.password(n3));
      }
      sendSASLInitialResponseMessage(n3, l6) {
        this._send(Cm.sendSASLInitialResponseMessage(n3, l6));
      }
      sendSCRAMClientFinalMessage(n3) {
        this._send(Cm.sendSCRAMClientFinalMessage(n3));
      }
      _send(n3) {
        return !!this.stream.writable && this.stream.write(n3);
      }
      query(n3) {
        this._send(Cm.query(n3));
      }
      parse(n3) {
        this._send(Cm.parse(n3));
      }
      bind(n3) {
        this._send(Cm.bind(n3));
      }
      execute(n3) {
        this._send(Cm.execute(n3));
      }
      flush() {
        this.stream.writable && this.stream.write(Om);
      }
      sync() {
        this._ending = true, this._send(Rm);
      }
      ref() {
        this.stream.ref();
      }
      unref() {
        this.stream.unref();
      }
      end() {
        if (this._ending = true, this._connecting && this.stream.writable) return this.stream.write(Dm, () => {
          this.stream.end();
        });
        this.stream.end();
      }
      close(n3) {
        this._send(Cm.close(n3));
      }
      describe(n3) {
        this._send(Cm.describe(n3));
      }
      sendCopyFromChunk(n3) {
        this._send(Cm.copyData(n3));
      }
      endCopyFrom() {
        this._send(Cm.copyDone());
      }
      sendCopyFail(n3) {
        this._send(Cm.copyFail(n3));
      }
    };
    Lm = { exports: {} };
    $m = getDefaultExportFromNamespaceIfNotNamed(v2);
    qm = { exports: {} };
    Fm = getDefaultExportFromNamespaceIfNotNamed(_2);
    Um = getDefaultExportFromNamespaceIfNotNamed(S2);
    __name(requireSplit2, "requireSplit2");
    __name(requireHelper, "requireHelper");
    __name(requireLib, "requireLib");
    Hm = Gu.EventEmitter;
    Wm = Pd;
    Jm = Sd;
    zm = qd;
    Gm = Ud;
    Km = xp;
    Ym = Op;
    Xm = _d;
    eg = Mm;
    tg = Dd;
    rg = Jm.deprecate(() => {
    }, "Client.activeQuery is deprecated and will be removed in a future version.");
    ng = Jm.deprecate(() => {
    }, "Client.queryQueue is deprecated and will be removed in a future version.");
    ig = Jm.deprecate(() => {
    }, "pgpass support is deprecated and will be removed in a future version. You can provide an async function as the password property to the Client/Pool constructor that returns a password instead. Within this funciton you can call the pgpass module in your own code.");
    sg = Jm.deprecate(() => {
    }, "Passing a custom Promise implementation to the Client/Pool constructor is deprecated and will be removed in a future version.");
    ag = class extends Hm {
      static {
        __name(this, "ag");
      }
      constructor(n3) {
        super(), this.connectionParameters = new Km(n3), this.user = this.connectionParameters.user, this.database = this.connectionParameters.database, this.port = this.connectionParameters.port, this.host = this.connectionParameters.host, Object.defineProperty(this, "password", { configurable: true, enumerable: false, writable: true, value: this.connectionParameters.password }), this.replication = this.connectionParameters.replication;
        const l6 = n3 || {};
        l6.Promise && sg(), this._Promise = l6.Promise || Ju.Promise, this._types = new Gm(l6.types), this._ending = false, this._ended = false, this._connecting = false, this._connected = false, this._connectionError = false, this._queryable = true, this._activeQuery = null, this.enableChannelBinding = Boolean(l6.enableChannelBinding), this.connection = l6.connection || new eg({ stream: l6.stream, ssl: this.connectionParameters.ssl, keepAlive: l6.keepAlive || false, keepAliveInitialDelayMillis: l6.keepAliveInitialDelayMillis || 0, encoding: this.connectionParameters.client_encoding || "utf8" }), this._queryQueue = [], this.binary = l6.binary || Xm.binary, this.processID = null, this.secretKey = null, this.ssl = this.connectionParameters.ssl || false, this.ssl && this.ssl.key && Object.defineProperty(this.ssl, "key", { enumerable: false }), this._connectionTimeoutMillis = l6.connectionTimeoutMillis || 0;
      }
      get activeQuery() {
        return rg(), this._activeQuery;
      }
      set activeQuery(n3) {
        rg(), this._activeQuery = n3;
      }
      _getActiveQuery() {
        return this._activeQuery;
      }
      _errorAllQueries(l6) {
        const enqueueError = /* @__PURE__ */ __name((c7) => {
          m2.nextTick(() => {
            c7.handleError(l6, this.connection);
          });
        }, "enqueueError"), c6 = this._getActiveQuery();
        c6 && (enqueueError(c6), this._activeQuery = null), this._queryQueue.forEach(enqueueError), this._queryQueue.length = 0;
      }
      _connect(l6) {
        const c6 = this, u5 = this.connection;
        if (this._connectionCallback = l6, this._connecting || this._connected) {
          const c7 = new Error("Client has already been connected. You cannot reuse a client.");
          return void m2.nextTick(() => {
            l6(c7);
          });
        }
        this._connecting = true, this._connectionTimeoutMillis > 0 && (this.connectionTimeoutHandle = setTimeout(() => {
          u5._ending = true, u5.stream.destroy(new Error("timeout expired"));
        }, this._connectionTimeoutMillis), this.connectionTimeoutHandle.unref && this.connectionTimeoutHandle.unref()), this.host && 0 === this.host.indexOf("/") ? u5.connect(this.host + "/.s.PGSQL." + this.port) : u5.connect(this.port, this.host), u5.on("connect", function() {
          c6.ssl ? u5.requestSsl() : u5.startup(c6.getStartupConf());
        }), u5.on("sslconnect", function() {
          u5.startup(c6.getStartupConf());
        }), this._attachListeners(u5), u5.once("end", () => {
          const l7 = this._ending ? new Error("Connection terminated") : new Error("Connection terminated unexpectedly");
          clearTimeout(this.connectionTimeoutHandle), this._errorAllQueries(l7), this._ended = true, this._ending || (this._connecting && !this._connectionError ? this._connectionCallback ? this._connectionCallback(l7) : this._handleErrorEvent(l7) : this._connectionError || this._handleErrorEvent(l7)), m2.nextTick(() => {
            this.emit("end");
          });
        });
      }
      connect(n3) {
        if (!n3) return new this._Promise((n4, l6) => {
          this._connect((c6) => {
            c6 ? l6(c6) : n4(this);
          });
        });
        this._connect(n3);
      }
      _attachListeners(n3) {
        n3.on("authenticationCleartextPassword", this._handleAuthCleartextPassword.bind(this)), n3.on("authenticationMD5Password", this._handleAuthMD5Password.bind(this)), n3.on("authenticationSASL", this._handleAuthSASL.bind(this)), n3.on("authenticationSASLContinue", this._handleAuthSASLContinue.bind(this)), n3.on("authenticationSASLFinal", this._handleAuthSASLFinal.bind(this)), n3.on("backendKeyData", this._handleBackendKeyData.bind(this)), n3.on("error", this._handleErrorEvent.bind(this)), n3.on("errorMessage", this._handleErrorMessage.bind(this)), n3.on("readyForQuery", this._handleReadyForQuery.bind(this)), n3.on("notice", this._handleNotice.bind(this)), n3.on("rowDescription", this._handleRowDescription.bind(this)), n3.on("dataRow", this._handleDataRow.bind(this)), n3.on("portalSuspended", this._handlePortalSuspended.bind(this)), n3.on("emptyQuery", this._handleEmptyQuery.bind(this)), n3.on("commandComplete", this._handleCommandComplete.bind(this)), n3.on("parseComplete", this._handleParseComplete.bind(this)), n3.on("copyInResponse", this._handleCopyInResponse.bind(this)), n3.on("copyData", this._handleCopyData.bind(this)), n3.on("notification", this._handleNotification.bind(this));
      }
      _getPassword(n3) {
        const l6 = this.connection;
        if ("function" == typeof this.password) this._Promise.resolve().then(() => this.password()).then((c6) => {
          if (void 0 !== c6) {
            if ("string" != typeof c6) return void l6.emit("error", new TypeError("Password must be a string"));
            this.connectionParameters.password = this.password = c6;
          } else this.connectionParameters.password = this.password = null;
          n3();
        }).catch((n4) => {
          l6.emit("error", n4);
        });
        else if (null !== this.password) n3();
        else try {
          requireLib()(this.connectionParameters, (l7) => {
            void 0 !== l7 && (ig(), this.connectionParameters.password = this.password = l7), n3();
          });
        } catch (n4) {
          this.emit("error", n4);
        }
      }
      _handleAuthCleartextPassword(n3) {
        this._getPassword(() => {
          this.connection.password(this.password);
        });
      }
      _handleAuthMD5Password(n3) {
        this._getPassword(async () => {
          try {
            const l6 = await tg.postgresMd5PasswordHash(this.user, this.password, n3.salt);
            this.connection.password(l6);
          } catch (n4) {
            this.emit("error", n4);
          }
        });
      }
      _handleAuthSASL(n3) {
        this._getPassword(() => {
          try {
            this.saslSession = zm.startSession(n3.mechanisms, this.enableChannelBinding && this.connection.stream), this.connection.sendSASLInitialResponseMessage(this.saslSession.mechanism, this.saslSession.response);
          } catch (n4) {
            this.connection.emit("error", n4);
          }
        });
      }
      async _handleAuthSASLContinue(n3) {
        try {
          await zm.continueSession(this.saslSession, this.password, n3.data, this.enableChannelBinding && this.connection.stream), this.connection.sendSCRAMClientFinalMessage(this.saslSession.response);
        } catch (n4) {
          this.connection.emit("error", n4);
        }
      }
      _handleAuthSASLFinal(n3) {
        try {
          zm.finalizeSession(this.saslSession, n3.data), this.saslSession = null;
        } catch (n4) {
          this.connection.emit("error", n4);
        }
      }
      _handleBackendKeyData(n3) {
        this.processID = n3.processID, this.secretKey = n3.secretKey;
      }
      _handleReadyForQuery(n3) {
        this._connecting && (this._connecting = false, this._connected = true, clearTimeout(this.connectionTimeoutHandle), this._connectionCallback && (this._connectionCallback(null, this), this._connectionCallback = null), this.emit("connect"));
        const l6 = this._getActiveQuery();
        this._activeQuery = null, this.readyForQuery = true, l6 && l6.handleReadyForQuery(this.connection), this._pulseQueryQueue();
      }
      _handleErrorWhileConnecting(n3) {
        if (!this._connectionError) {
          if (this._connectionError = true, clearTimeout(this.connectionTimeoutHandle), this._connectionCallback) return this._connectionCallback(n3);
          this.emit("error", n3);
        }
      }
      _handleErrorEvent(n3) {
        if (this._connecting) return this._handleErrorWhileConnecting(n3);
        this._queryable = false, this._errorAllQueries(n3), this.emit("error", n3);
      }
      _handleErrorMessage(n3) {
        if (this._connecting) return this._handleErrorWhileConnecting(n3);
        const l6 = this._getActiveQuery();
        l6 ? (this._activeQuery = null, l6.handleError(n3, this.connection)) : this._handleErrorEvent(n3);
      }
      _handleRowDescription(n3) {
        const l6 = this._getActiveQuery();
        if (null == l6) {
          const n4 = new Error("Received unexpected rowDescription message from backend.");
          return void this._handleErrorEvent(n4);
        }
        l6.handleRowDescription(n3);
      }
      _handleDataRow(n3) {
        const l6 = this._getActiveQuery();
        if (null == l6) {
          const n4 = new Error("Received unexpected dataRow message from backend.");
          return void this._handleErrorEvent(n4);
        }
        l6.handleDataRow(n3);
      }
      _handlePortalSuspended(n3) {
        const l6 = this._getActiveQuery();
        if (null == l6) {
          const n4 = new Error("Received unexpected portalSuspended message from backend.");
          return void this._handleErrorEvent(n4);
        }
        l6.handlePortalSuspended(this.connection);
      }
      _handleEmptyQuery(n3) {
        const l6 = this._getActiveQuery();
        if (null == l6) {
          const n4 = new Error("Received unexpected emptyQuery message from backend.");
          return void this._handleErrorEvent(n4);
        }
        l6.handleEmptyQuery(this.connection);
      }
      _handleCommandComplete(n3) {
        const l6 = this._getActiveQuery();
        if (null == l6) {
          const n4 = new Error("Received unexpected commandComplete message from backend.");
          return void this._handleErrorEvent(n4);
        }
        l6.handleCommandComplete(n3, this.connection);
      }
      _handleParseComplete() {
        const n3 = this._getActiveQuery();
        if (null == n3) {
          const n4 = new Error("Received unexpected parseComplete message from backend.");
          return void this._handleErrorEvent(n4);
        }
        n3.name && (this.connection.parsedStatements[n3.name] = n3.text);
      }
      _handleCopyInResponse(n3) {
        const l6 = this._getActiveQuery();
        if (null == l6) {
          const n4 = new Error("Received unexpected copyInResponse message from backend.");
          return void this._handleErrorEvent(n4);
        }
        l6.handleCopyInResponse(this.connection);
      }
      _handleCopyData(n3) {
        const l6 = this._getActiveQuery();
        if (null == l6) {
          const n4 = new Error("Received unexpected copyData message from backend.");
          return void this._handleErrorEvent(n4);
        }
        l6.handleCopyData(n3, this.connection);
      }
      _handleNotification(n3) {
        this.emit("notification", n3);
      }
      _handleNotice(n3) {
        this.emit("notice", n3);
      }
      getStartupConf() {
        const n3 = this.connectionParameters, l6 = { user: n3.user, database: n3.database }, c6 = n3.application_name || n3.fallback_application_name;
        return c6 && (l6.application_name = c6), n3.replication && (l6.replication = "" + n3.replication), n3.statement_timeout && (l6.statement_timeout = String(parseInt(n3.statement_timeout, 10))), n3.lock_timeout && (l6.lock_timeout = String(parseInt(n3.lock_timeout, 10))), n3.idle_in_transaction_session_timeout && (l6.idle_in_transaction_session_timeout = String(parseInt(n3.idle_in_transaction_session_timeout, 10))), n3.options && (l6.options = n3.options), l6;
      }
      cancel(n3, l6) {
        if (n3.activeQuery === l6) {
          const l7 = this.connection;
          this.host && 0 === this.host.indexOf("/") ? l7.connect(this.host + "/.s.PGSQL." + this.port) : l7.connect(this.port, this.host), l7.on("connect", function() {
            l7.cancel(n3.processID, n3.secretKey);
          });
        } else -1 !== n3._queryQueue.indexOf(l6) && n3._queryQueue.splice(n3._queryQueue.indexOf(l6), 1);
      }
      setTypeParser(n3, l6, c6) {
        return this._types.setTypeParser(n3, l6, c6);
      }
      getTypeParser(n3, l6) {
        return this._types.getTypeParser(n3, l6);
      }
      escapeIdentifier(n3) {
        return Wm.escapeIdentifier(n3);
      }
      escapeLiteral(n3) {
        return Wm.escapeLiteral(n3);
      }
      _pulseQueryQueue() {
        if (true === this.readyForQuery) {
          this._activeQuery = this._queryQueue.shift();
          const l6 = this._getActiveQuery();
          if (l6) {
            this.readyForQuery = false, this.hasExecuted = true;
            const c6 = l6.submit(this.connection);
            c6 && m2.nextTick(() => {
              l6.handleError(c6, this.connection), this.readyForQuery = true, this._pulseQueryQueue();
            });
          } else this.hasExecuted && (this._activeQuery = null, this.emit("drain"));
        }
      }
      query(l6, c6, u5) {
        let h7, f6, p5, m7, g5;
        if (null == l6) throw new TypeError("Client was passed a null or undefined query");
        return "function" == typeof l6.submit ? (p5 = l6.query_timeout || this.connectionParameters.query_timeout, f6 = h7 = l6, "function" == typeof c6 && (h7.callback = h7.callback || c6)) : (p5 = l6.query_timeout || this.connectionParameters.query_timeout, h7 = new Ym(l6, c6, u5), h7.callback || (f6 = new this._Promise((n3, l7) => {
          h7.callback = (c7, u6) => c7 ? l7(c7) : n3(u6);
        }).catch((n3) => {
          throw Error.captureStackTrace(n3), n3;
        }))), p5 && (g5 = h7.callback, m7 = setTimeout(() => {
          const l7 = new Error("Query read timeout");
          m2.nextTick(() => {
            h7.handleError(l7, this.connection);
          }), g5(l7), h7.callback = () => {
          };
          const c7 = this._queryQueue.indexOf(h7);
          c7 > -1 && this._queryQueue.splice(c7, 1), this._pulseQueryQueue();
        }, p5), h7.callback = (n3, l7) => {
          clearTimeout(m7), g5(n3, l7);
        }), this.binary && !h7.binary && (h7.binary = true), h7._result && !h7._result._types && (h7._result._types = this._types), this._queryable ? this._ending ? (m2.nextTick(() => {
          h7.handleError(new Error("Client was closed and is not queryable"), this.connection);
        }), f6) : (this._queryQueue.push(h7), this._pulseQueryQueue(), f6) : (m2.nextTick(() => {
          h7.handleError(new Error("Client has encountered a connection error and is not queryable"), this.connection);
        }), f6);
      }
      ref() {
        this.connection.ref();
      }
      unref() {
        this.connection.unref();
      }
      end(n3) {
        if (this._ending = true, !this.connection._connecting || this._ended) {
          if (!n3) return this._Promise.resolve();
          n3();
        }
        if (this._getActiveQuery() || !this._queryable ? this.connection.stream.destroy() : this.connection.end(), !n3) return new this._Promise((n4) => {
          this.connection.once("end", n4);
        });
        this.connection.once("end", n3);
      }
      get queryQueue() {
        return ng(), this._queryQueue;
      }
    };
    ag.Query = Ym;
    og = ag;
    lg = getDefaultExportFromNamespaceIfNotNamed(T);
    cg = Gu.EventEmitter;
    NOOP = /* @__PURE__ */ __name(function() {
    }, "NOOP");
    removeWhere = /* @__PURE__ */ __name((n3, l6) => {
      const c6 = n3.findIndex(l6);
      return -1 === c6 ? void 0 : n3.splice(c6, 1)[0];
    }, "removeWhere");
    IdleItem = class {
      static {
        __name(this, "IdleItem");
      }
      constructor(n3, l6, c6) {
        this.client = n3, this.idleListener = l6, this.timeoutId = c6;
      }
    };
    PendingItem = class {
      static {
        __name(this, "PendingItem");
      }
      constructor(n3) {
        this.callback = n3;
      }
    };
    __name(promisify, "promisify");
    ug = class extends cg {
      static {
        __name(this, "ug");
      }
      constructor(n3, l6) {
        super(), this.options = Object.assign({}, n3), null != n3 && "password" in n3 && Object.defineProperty(this.options, "password", { configurable: true, enumerable: false, writable: true, value: n3.password }), null != n3 && n3.ssl && n3.ssl.key && Object.defineProperty(this.options.ssl, "key", { enumerable: false }), this.options.max = this.options.max || this.options.poolSize || 10, this.options.min = this.options.min || 0, this.options.maxUses = this.options.maxUses || 1 / 0, this.options.allowExitOnIdle = this.options.allowExitOnIdle || false, this.options.maxLifetimeSeconds = this.options.maxLifetimeSeconds || 0, this.log = this.options.log || function() {
        }, this.Client = this.options.Client || l6 || lg.Client, this.Promise = this.options.Promise || Ju.Promise, void 0 === this.options.idleTimeoutMillis && (this.options.idleTimeoutMillis = 1e4), this._clients = [], this._idle = [], this._expired = /* @__PURE__ */ new WeakSet(), this._pendingQueue = [], this._endCallback = void 0, this.ending = false, this.ended = false;
      }
      _isFull() {
        return this._clients.length >= this.options.max;
      }
      _isAboveMin() {
        return this._clients.length > this.options.min;
      }
      _pulseQueue() {
        if (this.log("pulse queue"), this.ended) return void this.log("pulse queue ended");
        if (this.ending) return this.log("pulse queue on ending"), this._idle.length && this._idle.slice().map((n4) => {
          this._remove(n4.client);
        }), void (this._clients.length || (this.ended = true, this._endCallback()));
        if (!this._pendingQueue.length) return void this.log("no queued requests");
        if (!this._idle.length && this._isFull()) return;
        const n3 = this._pendingQueue.shift();
        if (this._idle.length) {
          const l6 = this._idle.pop();
          clearTimeout(l6.timeoutId);
          const c6 = l6.client;
          c6.ref && c6.ref();
          const u5 = l6.idleListener;
          return this._acquireClient(c6, n3, u5, false);
        }
        if (!this._isFull()) return this.newClient(n3);
        throw new Error("unexpected condition");
      }
      _remove(n3, l6) {
        const c6 = removeWhere(this._idle, (l7) => l7.client === n3);
        void 0 !== c6 && clearTimeout(c6.timeoutId), this._clients = this._clients.filter((l7) => l7 !== n3);
        const u5 = this;
        n3.end(() => {
          u5.emit("remove", n3), "function" == typeof l6 && l6();
        });
      }
      connect(l6) {
        if (this.ending) {
          const n3 = new Error("Cannot use a pool after calling end on the pool");
          return l6 ? l6(n3) : this.Promise.reject(n3);
        }
        const c6 = promisify(this.Promise, l6), u5 = c6.result;
        if (this._isFull() || this._idle.length) {
          if (this._idle.length && m2.nextTick(() => this._pulseQueue()), !this.options.connectionTimeoutMillis) return this._pendingQueue.push(new PendingItem(c6.callback)), u5;
          const queueCallback = /* @__PURE__ */ __name((n3, l8, u6) => {
            clearTimeout(h7), c6.callback(n3, l8, u6);
          }, "queueCallback"), l7 = new PendingItem(queueCallback), h7 = setTimeout(() => {
            removeWhere(this._pendingQueue, (n3) => n3.callback === queueCallback), l7.timedOut = true, c6.callback(new Error("timeout exceeded when trying to connect"));
          }, this.options.connectionTimeoutMillis);
          return h7.unref && h7.unref(), this._pendingQueue.push(l7), u5;
        }
        return this.newClient(new PendingItem(c6.callback)), u5;
      }
      newClient(n3) {
        const l6 = new this.Client(this.options);
        this._clients.push(l6);
        const c6 = /* @__PURE__ */ (function(n4, l7) {
          return /* @__PURE__ */ __name(function idleListener(c7) {
            c7.client = l7, l7.removeListener("error", idleListener), l7.on("error", () => {
              n4.log("additional client error after disconnection due to error", c7);
            }), n4._remove(l7), n4.emit("error", c7, l7);
          }, "idleListener");
        })(this, l6);
        let u5;
        this.log("checking client timeout");
        let h7 = false;
        this.options.connectionTimeoutMillis && (u5 = setTimeout(() => {
          this.log("ending client due to timeout"), h7 = true, l6.connection ? l6.connection.stream.destroy() : l6.end();
        }, this.options.connectionTimeoutMillis)), this.log("connecting new client"), l6.connect((f6) => {
          if (u5 && clearTimeout(u5), l6.on("error", c6), !f6) {
            if (this.log("new client connected"), 0 !== this.options.maxLifetimeSeconds) {
              const n4 = setTimeout(() => {
                this.log("ending client due to expired lifetime"), this._expired.add(l6);
                -1 !== this._idle.findIndex((n5) => n5.client === l6) && this._acquireClient(l6, new PendingItem((n5, l7, c7) => c7()), c6, false);
              }, 1e3 * this.options.maxLifetimeSeconds);
              n4.unref(), l6.once("end", () => clearTimeout(n4));
            }
            return this._acquireClient(l6, n3, c6, true);
          }
          this.log("client failed to connect", f6), this._clients = this._clients.filter((n4) => n4 !== l6), h7 && (f6 = new Error("Connection terminated due to connection timeout", { cause: f6 })), this._pulseQueue(), n3.timedOut || n3.callback(f6, void 0, NOOP);
        });
      }
      _acquireClient(n3, l6, c6, u5) {
        u5 && this.emit("connect", n3), this.emit("acquire", n3), n3.release = this._releaseOnce(n3, c6), n3.removeListener("error", c6), l6.timedOut ? u5 && this.options.verify ? this.options.verify(n3, n3.release) : n3.release() : u5 && this.options.verify ? this.options.verify(n3, (c7) => {
          if (c7) return n3.release(c7), l6.callback(c7, void 0, NOOP);
          l6.callback(void 0, n3, n3.release);
        }) : l6.callback(void 0, n3, n3.release);
      }
      _releaseOnce(n3, l6) {
        let c6 = false;
        return (u5) => {
          c6 && (function() {
            throw new Error("Release called on client which has already been released to the pool.");
          })(), c6 = true, this._release(n3, l6, u5);
        };
      }
      _release(n3, l6, c6) {
        if (n3.on("error", l6), n3._poolUseCount = (n3._poolUseCount || 0) + 1, this.emit("release", c6, n3), c6 || this.ending || !n3._queryable || n3._ending || n3._poolUseCount >= this.options.maxUses) return n3._poolUseCount >= this.options.maxUses && this.log("remove expended client"), this._remove(n3, this._pulseQueue.bind(this));
        if (this._expired.has(n3)) return this.log("remove expired client"), this._expired.delete(n3), this._remove(n3, this._pulseQueue.bind(this));
        let u5;
        this.options.idleTimeoutMillis && this._isAboveMin() && (u5 = setTimeout(() => {
          this._isAboveMin() && (this.log("remove idle client"), this._remove(n3, this._pulseQueue.bind(this)));
        }, this.options.idleTimeoutMillis), this.options.allowExitOnIdle && u5.unref()), this.options.allowExitOnIdle && n3.unref(), this._idle.push(new IdleItem(n3, l6, u5)), this._pulseQueue();
      }
      query(n3, l6, c6) {
        if ("function" == typeof n3) {
          const l7 = promisify(this.Promise, n3);
          return E(function() {
            return l7.callback(new Error("Passing a function as the first parameter to pool.query is not supported"));
          }), l7.result;
        }
        "function" == typeof l6 && (c6 = l6, l6 = void 0);
        const u5 = promisify(this.Promise, c6);
        return c6 = u5.callback, this.connect((u6, h7) => {
          if (u6) return c6(u6);
          let f6 = false;
          const onError = /* @__PURE__ */ __name((n4) => {
            f6 || (f6 = true, h7.release(n4), c6(n4));
          }, "onError");
          h7.once("error", onError), this.log("dispatching query");
          try {
            h7.query(n3, l6, (n4, l7) => {
              if (this.log("query dispatched"), h7.removeListener("error", onError), !f6) return f6 = true, h7.release(n4), n4 ? c6(n4) : c6(void 0, l7);
            });
          } catch (u7) {
            return h7.release(u7), c6(u7);
          }
        }), u5.result;
      }
      end(n3) {
        if (this.log("ending"), this.ending) {
          const l7 = new Error("Called end on pool more than once");
          return n3 ? n3(l7) : this.Promise.reject(l7);
        }
        this.ending = true;
        const l6 = promisify(this.Promise, n3);
        return this._endCallback = l6.callback, this._pulseQueue(), l6.result;
      }
      get waitingCount() {
        return this._pendingQueue.length;
      }
      get idleCount() {
        return this._idle.length;
      }
      get expiredCount() {
        return this._clients.reduce((n3, l6) => n3 + (this._expired.has(l6) ? 1 : 0), 0);
      }
      get totalCount() {
        return this._clients.length;
      }
    };
    dg = getDefaultExportFromCjs(ug);
    hg = getDefaultExportFromNamespaceIfNotNamed(Object.freeze(Object.defineProperty({ __proto__: null, default: dg }, Symbol.toStringTag, { value: "Module" })));
    yg = { exports: {} };
    wg = { exports: {} };
    __name(requireQuery, "requireQuery");
    __name(requireClient, "requireClient");
    __name(requireNative, "requireNative");
    !(function(l6) {
      const c6 = og, u5 = _d, h7 = Mm, f6 = Ip, p5 = Pd, m7 = hg, g5 = Ud, { DatabaseError: y5 } = lm, { escapeIdentifier: w5, escapeLiteral: b4 } = Pd, poolFactory = /* @__PURE__ */ __name((n3) => class extends m7 {
        constructor(l7) {
          super(l7, n3);
        }
      }, "poolFactory"), PG = /* @__PURE__ */ __name(function(n3) {
        this.defaults = u5, this.Client = n3, this.Query = this.Client.Query, this.Pool = poolFactory(this.Client), this._pools = [], this.Connection = h7, this.types = requirePgTypes(), this.DatabaseError = y5, this.TypeOverrides = g5, this.escapeIdentifier = w5, this.escapeLiteral = b4, this.Result = f6, this.utils = p5;
      }, "PG");
      let v5 = c6, _4 = false;
      try {
        _4 = !!m2.env.NODE_PG_FORCE_NATIVE;
      } catch {
      }
      _4 && (v5 = requireNative()), l6.exports = new PG(v5), Object.defineProperty(l6.exports, "native", { configurable: true, enumerable: false, get() {
        let n3 = null;
        try {
          n3 = new PG(requireNative());
        } catch (n4) {
          if ("MODULE_NOT_FOUND" !== n4.code) throw n4;
        }
        return Object.defineProperty(l6.exports, "native", { value: n3 }), n3;
      } });
    })(zu);
    bg = getDefaultExportFromCjs(zu.exports);
    vg = bg.Client;
    _g = bg.Pool;
    Sg = bg.Connection;
    Eg = bg.types;
    Tg = bg.Query;
    xg = bg.DatabaseError;
    Pg = bg.escapeIdentifier;
    Ag = bg.escapeLiteral;
    Ig = bg.Result;
    Cg = bg.TypeOverrides;
    Ng = bg.defaults;
    __name(makeParseArrayWithTransform, "makeParseArrayWithTransform");
    kg = makeParseArrayWithTransform();
    Og = "@prisma/adapter-pg";
    ({ types: Rg } = bg);
    ({ builtins: Dg, getTypeParser: Mg } = Rg);
    Lg = 19;
    $g = 1561;
    qg = 1e3;
    Fg = 1001;
    Ug = 1014;
    jg = 1002;
    Bg = 651;
    Vg = 1182;
    Qg = 1021;
    Hg = 1022;
    Wg = 1041;
    Jg = 1005;
    zg = 1007;
    Gg = 1016;
    Kg = 3807;
    Yg = 199;
    Zg = 791;
    Xg = 1231;
    ey = 1028;
    ty = 1009;
    ry = 1115;
    ny = 1185;
    iy = 1183;
    sy = 2951;
    ay = 1563;
    oy = 1015;
    ly = 143;
    cy = class _UnsupportedNativeDataType extends Error {
      static {
        __name(this, "_UnsupportedNativeDataType");
      }
      static typeNames = { 16: "bool", 17: "bytea", 18: "char", 19: "name", 20: "int8", 21: "int2", 22: "int2vector", 23: "int4", 24: "regproc", 25: "text", 26: "oid", 27: "tid", 28: "xid", 29: "cid", 30: "oidvector", 32: "pg_ddl_command", 71: "pg_type", 75: "pg_attribute", 81: "pg_proc", 83: "pg_class", 114: "json", 142: "xml", 194: "pg_node_tree", 269: "table_am_handler", 325: "index_am_handler", 600: "point", 601: "lseg", 602: "path", 603: "box", 604: "polygon", 628: "line", 650: "cidr", 700: "float4", 701: "float8", 705: "unknown", 718: "circle", 774: "macaddr8", 790: "money", 829: "macaddr", 869: "inet", 1033: "aclitem", 1042: "bpchar", 1043: "varchar", 1082: "date", 1083: "time", 1114: "timestamp", 1184: "timestamptz", 1186: "interval", 1266: "timetz", 1560: "bit", 1562: "varbit", 1700: "numeric", 1790: "refcursor", 2202: "regprocedure", 2203: "regoper", 2204: "regoperator", 2205: "regclass", 2206: "regtype", 2249: "record", 2275: "cstring", 2276: "any", 2277: "anyarray", 2278: "void", 2279: "trigger", 2280: "language_handler", 2281: "internal", 2283: "anyelement", 2287: "_record", 2776: "anynonarray", 2950: "uuid", 2970: "txid_snapshot", 3115: "fdw_handler", 3220: "pg_lsn", 3310: "tsm_handler", 3361: "pg_ndistinct", 3402: "pg_dependencies", 3500: "anyenum", 3614: "tsvector", 3615: "tsquery", 3642: "gtsvector", 3734: "regconfig", 3769: "regdictionary", 3802: "jsonb", 3831: "anyrange", 3838: "event_trigger", 3904: "int4range", 3906: "numrange", 3908: "tsrange", 3910: "tstzrange", 3912: "daterange", 3926: "int8range", 4072: "jsonpath", 4089: "regnamespace", 4096: "regrole", 4191: "regcollation", 4451: "int4multirange", 4532: "nummultirange", 4533: "tsmultirange", 4534: "tstzmultirange", 4535: "datemultirange", 4536: "int8multirange", 4537: "anymultirange", 4538: "anycompatiblemultirange", 4600: "pg_brin_bloom_summary", 4601: "pg_brin_minmax_multi_summary", 5017: "pg_mcv_list", 5038: "pg_snapshot", 5069: "xid8", 5077: "anycompatible", 5078: "anycompatiblearray", 5079: "anycompatiblenonarray", 5080: "anycompatiblerange" };
      type;
      constructor(n3) {
        super(), this.type = _UnsupportedNativeDataType.typeNames[n3] || "Unknown", this.message = `Unsupported column type ${this.type}`;
      }
    };
    __name(normalize_array, "normalize_array");
    __name(normalize_numeric, "normalize_numeric");
    __name(normalize_date, "normalize_date");
    __name(normalize_timestamp, "normalize_timestamp");
    __name(normalize_timestamptz, "normalize_timestamptz");
    __name(normalize_time, "normalize_time");
    __name(normalize_money, "normalize_money");
    __name(toJson, "toJson");
    uy = Mg(Dg.BYTEA);
    dy = Mg(Fg);
    __name(normalizeBit, "normalizeBit");
    hy = { [Dg.NUMERIC]: normalize_numeric, [Xg]: normalize_array(normalize_numeric), [Dg.TIME]: normalize_time, [iy]: normalize_array(normalize_time), [Dg.TIMETZ]: function(n3) {
      return n3.replace(/[+-]\d{2}(:\d{2})?$/, "");
    }, [Dg.DATE]: normalize_date, [Vg]: normalize_array(normalize_date), [Dg.TIMESTAMP]: normalize_timestamp, [ry]: normalize_array(normalize_timestamp), [Dg.TIMESTAMPTZ]: normalize_timestamptz, [ny]: normalize_array(normalize_timestamptz), [Dg.MONEY]: normalize_money, [Zg]: normalize_array(normalize_money), [Dg.JSON]: toJson, [Yg]: normalize_array(toJson), [Dg.JSONB]: toJson, [Kg]: normalize_array(toJson), [Dg.BYTEA]: function(n3) {
      return uy(n3);
    }, [Fg]: dy, [$g]: normalize_array(normalizeBit), [ay]: normalize_array(normalizeBit), [ly]: normalize_array(function(n3) {
      return n3;
    }) };
    __name(mapArg, "mapArg");
    fy = /* @__PURE__ */ new Set(["UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_CRL", "UNABLE_TO_DECRYPT_CERT_SIGNATURE", "UNABLE_TO_DECRYPT_CRL_SIGNATURE", "UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY", "CERT_SIGNATURE_FAILURE", "CRL_SIGNATURE_FAILURE", "CERT_NOT_YET_VALID", "CERT_HAS_EXPIRED", "CRL_NOT_YET_VALID", "CRL_HAS_EXPIRED", "ERROR_IN_CERT_NOT_BEFORE_FIELD", "ERROR_IN_CERT_NOT_AFTER_FIELD", "ERROR_IN_CRL_LAST_UPDATE_FIELD", "ERROR_IN_CRL_NEXT_UPDATE_FIELD", "DEPTH_ZERO_SELF_SIGNED_CERT", "SELF_SIGNED_CERT_IN_CHAIN", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "UNABLE_TO_VERIFY_LEAF_SIGNATURE", "CERT_CHAIN_TOO_LONG", "CERT_REVOKED", "INVALID_CA", "INVALID_PURPOSE", "CERT_UNTRUSTED", "CERT_REJECTED", "HOSTNAME_MISMATCH", "ERR_TLS_CERT_ALTNAME_FORMAT", "ERR_TLS_CERT_ALTNAME_INVALID"]);
    py = /* @__PURE__ */ new Set(["ENOTFOUND", "ECONNREFUSED", "ECONNRESET", "ETIMEDOUT"]);
    __name(convertDriverError, "convertDriverError");
    __name(mapDriverError, "mapDriverError");
    my = bg.types;
    gy = uu("prisma:driver-adapter:pg");
    yy = class {
      static {
        __name(this, "yy");
      }
      constructor(n3, l6) {
        this.client = n3, this.pgOptions = l6;
      }
      provider = "postgres";
      adapterName = Og;
      async queryRaw(n3) {
        gy("[js::query_raw] %O", n3);
        const { fields: l6, rows: c6 } = await this.performIO(n3), u5 = l6.map((n4) => n4.name);
        let h7 = [];
        try {
          h7 = l6.map((n4) => (function(n5) {
            switch (n5) {
              case Dg.INT2:
              case Dg.INT4:
                return hu;
              case Dg.INT8:
                return fu;
              case Dg.FLOAT4:
                return mu;
              case Dg.FLOAT8:
                return gu;
              case Dg.BOOL:
                return wu;
              case Dg.DATE:
                return Su;
              case Dg.TIME:
              case Dg.TIMETZ:
                return Pu;
              case Dg.TIMESTAMP:
              case Dg.TIMESTAMPTZ:
                return Au;
              case Dg.NUMERIC:
              case Dg.MONEY:
                return yu;
              case Dg.JSON:
              case Dg.JSONB:
                return Iu;
              case Dg.UUID:
                return ku;
              case Dg.OID:
                return fu;
              case Dg.BPCHAR:
              case Dg.TEXT:
              case Dg.VARCHAR:
              case Dg.BIT:
              case Dg.VARBIT:
              case Dg.INET:
              case Dg.CIDR:
              case Dg.XML:
              case Lg:
                return _u;
              case Dg.BYTEA:
                return Cu;
              case Jg:
              case zg:
                return Ru;
              case Qg:
                return Mu;
              case Hg:
                return Lu;
              case Xg:
              case Zg:
                return $u;
              case qg:
                return qu;
              case jg:
                return Fu;
              case Ug:
              case ty:
              case oy:
              case ay:
              case $g:
              case Wg:
              case Bg:
              case ly:
                return Uu;
              case Vg:
                return ju;
              case iy:
                return Bu;
              case ry:
              case ny:
                return Vu;
              case Yg:
              case Kg:
                return Qu;
              case Fg:
                return Hu;
              case sy:
                return Wu;
              case Gg:
              case ey:
                return Du;
              default:
                if (n5 >= 16384) return _u;
                throw new cy(n5);
            }
          })(n4.dataTypeID));
        } catch (n4) {
          if (n4 instanceof cy) throw new du({ kind: "UnsupportedNativeDataType", type: n4.type });
          throw n4;
        }
        const f6 = this.pgOptions?.userDefinedTypeParser;
        if (f6) for (let n4 = 0; n4 < l6.length; n4++) {
          const u6 = l6[n4];
          if (u6.dataTypeID >= 16384 && !Object.hasOwn(hy, u6.dataTypeID)) for (let l7 = 0; l7 < c6.length; l7++) c6[l7][n4] = await f6(u6.dataTypeID, c6[l7][n4], this);
        }
        return { columnNames: u5, columnTypes: h7, rows: c6 };
      }
      async executeRaw(n3) {
        return gy("[js::execute_raw] %O", n3), (await this.performIO(n3)).rowCount ?? 0;
      }
      async performIO(n3) {
        const { sql: l6, args: c6 } = n3, u5 = c6.map((l7, c7) => mapArg(l7, n3.argTypes[c7]));
        try {
          return await this.client.query({ text: l6, values: u5, rowMode: "array", types: { getTypeParser: /* @__PURE__ */ __name((n4, l7) => "text" === l7 && hy[n4] ? hy[n4] : my.getTypeParser(n4, l7), "getTypeParser") } }, u5);
        } catch (n4) {
          this.onError(n4);
        }
      }
      onError(n3) {
        throw gy("Error in performIO: %O", n3), new du(convertDriverError(n3));
      }
    };
    wy = class extends yy {
      static {
        __name(this, "wy");
      }
      constructor(n3, l6, c6, u5) {
        super(n3, c6), this.options = l6, this.pgOptions = c6, this.cleanup = u5;
      }
      async commit() {
        gy("[js::commit]"), this.cleanup?.(), this.client.release();
      }
      async rollback() {
        gy("[js::rollback]"), this.cleanup?.(), this.client.release();
      }
    };
    by = class extends yy {
      static {
        __name(this, "by");
      }
      constructor(n3, l6, c6) {
        super(n3), this.pgOptions = l6, this.release = c6;
      }
      async startTransaction(n3) {
        const l6 = { usePhantomQuery: false };
        gy("%s options: %O", "[js::startTransaction]", l6);
        const c6 = await this.client.connect().catch((n4) => this.onError(n4)), onError = /* @__PURE__ */ __name((n4) => {
          gy(`Error from pool connection: ${n4.message} %O`, n4), this.pgOptions?.onConnectionError?.(n4);
        }, "onError");
        c6.on("error", onError);
        const cleanup = /* @__PURE__ */ __name(() => {
          c6.removeListener("error", onError);
        }, "cleanup");
        try {
          const u5 = new wy(c6, l6, this.pgOptions, cleanup);
          return await u5.executeRaw({ sql: "BEGIN", args: [], argTypes: [] }), n3 && await u5.executeRaw({ sql: `SET TRANSACTION ISOLATION LEVEL ${n3}`, args: [], argTypes: [] }), u5;
        } catch (n4) {
          cleanup(), c6.release(n4), this.onError(n4);
        }
      }
      async executeScript(n3) {
        const l6 = n3.split(";").map((n4) => n4.trim()).filter((n4) => n4.length > 0);
        for (const n4 of l6) try {
          await this.client.query(n4);
        } catch (n5) {
          this.onError(n5);
        }
      }
      getConnectionInfo() {
        return { schemaName: this.pgOptions?.schema, supportsRelationJoins: true };
      }
      async dispose() {
        return this.release?.();
      }
      underlyingDriver() {
        return this.client;
      }
    };
    vy = class {
      static {
        __name(this, "vy");
      }
      constructor(n3, l6) {
        this.options = l6, n3 instanceof bg.Pool ? (this.externalPool = n3, this.config = n3.options) : (this.externalPool = null, this.config = n3);
      }
      provider = "postgres";
      adapterName = Og;
      config;
      externalPool;
      async connect() {
        const n3 = this.externalPool ?? new bg.Pool(this.config), onIdleClientError = /* @__PURE__ */ __name((n4) => {
          gy(`Error from idle pool client: ${n4.message} %O`, n4), this.options?.onPoolError?.(n4);
        }, "onIdleClientError");
        return n3.on("error", onIdleClientError), new by(n3, this.options, async () => {
          this.externalPool ? this.options?.disposeExternalPool ? (await this.externalPool.end(), this.externalPool = null) : this.externalPool.removeListener("error", onIdleClientError) : await n3.end();
        });
      }
      async connectToShadowDb() {
        const n3 = await this.connect(), l6 = `prisma_migrate_shadow_db_${globalThis.crypto.randomUUID()}`;
        await n3.executeScript(`CREATE DATABASE "${l6}"`);
        const c6 = new bg.Pool({ ...this.config, database: l6 });
        return new by(c6, void 0, async () => {
          await n3.executeScript(`DROP DATABASE "${l6}"`), await c6.end();
        });
      }
    };
    __name(usePrisma, "usePrisma");
  }
});

// .output/server/chunks/_/bcrypt.mjs
import { Buffer as n2 } from "node:buffer";
function commonjsRequire(e11) {
  throw new Error('Could not dynamically require "' + e11 + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
function requireNodeGypBuild() {
  if (T2) return d;
  T2 = 1;
  var e11 = pp, n3 = $m, t8 = E2, a6 = "function" == typeof __webpack_require__ ? __non_webpack_require__ : commonjsRequire, s6 = m2.config && m2.config.variables || {}, u5 = !!m2.env.PREBUILDS_ONLY, f6 = m2.versions.modules, c6 = m2.versions && m2.versions.electron || m2.env.ELECTRON_RUN_AS_NODE ? "electron" : m2.versions && m2.versions.nw ? "node-webkit" : "node", l6 = m2.env.npm_config_arch || t8.arch(), m7 = m2.env.npm_config_platform || t8.platform(), p5 = m2.env.LIBC || ((function(r6) {
    return "linux" === r6 && e11.existsSync("/etc/alpine-release");
  })(m7) ? "musl" : "glibc"), S6 = m2.env.ARM_VERSION || ("arm64" === l6 ? "8" : s6.arm_version) || "", I5 = (m2.versions.uv || "").split(".")[0];
  function load(e12) {
    return a6(load.resolve(e12));
  }
  __name(load, "load");
  function readdirSync(r6) {
    try {
      return e11.readdirSync(r6);
    } catch (e12) {
      return [];
    }
  }
  __name(readdirSync, "readdirSync");
  function getFirst(e12, r6) {
    var t9 = readdirSync(e12).filter(r6);
    return t9[0] && n3.join(e12, t9[0]);
  }
  __name(getFirst, "getFirst");
  function matchBuild(e12) {
    return /\.node$/.test(e12);
  }
  __name(matchBuild, "matchBuild");
  function parseTuple(e12) {
    var r6 = e12.split("-");
    if (2 === r6.length) {
      var n4 = r6[0], t9 = r6[1].split("+");
      if (n4 && t9.length && t9.every(Boolean)) return { name: e12, platform: n4, architectures: t9 };
    }
  }
  __name(parseTuple, "parseTuple");
  function matchTuple(e12, r6) {
    return function(n4) {
      return null != n4 && (n4.platform === e12 && n4.architectures.includes(r6));
    };
  }
  __name(matchTuple, "matchTuple");
  function compareTuples(e12, r6) {
    return e12.architectures.length - r6.architectures.length;
  }
  __name(compareTuples, "compareTuples");
  function parseTags(e12) {
    var r6 = e12.split("."), n4 = { file: e12, specificity: 0 };
    if ("node" === r6.pop()) {
      for (var t9 = 0; t9 < r6.length; t9++) {
        var i6 = r6[t9];
        if ("node" === i6 || "electron" === i6 || "node-webkit" === i6) n4.runtime = i6;
        else if ("napi" === i6) n4.napi = true;
        else if ("abi" === i6.slice(0, 3)) n4.abi = i6.slice(3);
        else if ("uv" === i6.slice(0, 2)) n4.uv = i6.slice(2);
        else if ("armv" === i6.slice(0, 4)) n4.armv = i6.slice(4);
        else {
          if ("glibc" !== i6 && "musl" !== i6) continue;
          n4.libc = i6;
        }
        n4.specificity++;
      }
      return n4;
    }
  }
  __name(parseTags, "parseTags");
  function matchTags(e12, r6) {
    return function(n4) {
      return null != n4 && (!(n4.runtime && n4.runtime !== e12 && !(function(e13) {
        return "node" === e13.runtime && e13.napi;
      })(n4)) && (!(n4.abi && n4.abi !== r6 && !n4.napi) && ((!n4.uv || n4.uv === I5) && ((!n4.armv || n4.armv === S6) && (!n4.libc || n4.libc === p5)))));
    };
  }
  __name(matchTags, "matchTags");
  function compareTags(e12) {
    return function(r6, n4) {
      return r6.runtime !== n4.runtime ? r6.runtime === e12 ? -1 : 1 : r6.abi !== n4.abi ? r6.abi ? -1 : 1 : r6.specificity !== n4.specificity ? r6.specificity > n4.specificity ? -1 : 1 : 0;
    };
  }
  __name(compareTags, "compareTags");
  return d = load, load.resolve = load.path = function(e12) {
    e12 = n3.resolve(e12 || ".");
    try {
      var t9 = a6(n3.join(e12, "package.json")).name.toUpperCase().replace(/-/g, "_");
      m2.env[t9 + "_PREBUILD"] && (e12 = m2.env[t9 + "_PREBUILD"]);
    } catch (e13) {
    }
    if (!u5) {
      var i6 = getFirst(n3.join(e12, "build/Release"), matchBuild);
      if (i6) return i6;
      var o4 = getFirst(n3.join(e12, "build/Debug"), matchBuild);
      if (o4) return o4;
    }
    var s7 = resolve(e12);
    if (s7) return s7;
    var E5 = resolve(n3.dirname(m2.execPath));
    if (E5) return E5;
    var d4 = ["platform=" + m7, "arch=" + l6, "runtime=" + c6, "abi=" + f6, "uv=" + I5, S6 ? "armv=" + S6 : "", "libc=" + p5, "node=" + m2.versions.node, m2.versions.electron ? "electron=" + m2.versions.electron : "", "function" == typeof __webpack_require__ ? "webpack=true" : ""].filter(Boolean).join(" ");
    throw new Error("No native build was found for " + d4 + "\n    loaded from: " + e12 + "\n");
    function resolve(e13) {
      var r6 = readdirSync(n3.join(e13, "prebuilds")).map(parseTuple).filter(matchTuple(m7, l6)).sort(compareTuples)[0];
      if (r6) {
        var t10 = n3.join(e13, "prebuilds", r6.name), i7 = readdirSync(t10).map(parseTags).filter(matchTags(c6, f6)).sort(compareTags(c6))[0];
        return i7 ? n3.join(t10, i7.file) : void 0;
      }
    }
    __name(resolve, "resolve");
  }, load.parseTags = parseTags, load.matchTags = matchTags, load.compareTags = compareTags, load.parseTuple = parseTuple, load.matchTuple = matchTuple, load.compareTuples = compareTuples, d;
}
function requirePromises() {
  if (g2) return O3;
  g2 = 1;
  let e11 = Ju.Promise;
  return O3 = { promise: /* @__PURE__ */ __name(function(r6, n3, t8) {
    return Array.isArray(t8) || (t8 = Array.prototype.slice.call(t8)), "function" != typeof r6 ? e11.reject(new Error("fn must be a function")) : new e11((e12, i6) => {
      t8.push((r7, n4) => {
        r7 ? i6(r7) : e12(n4);
      }), r6.apply(n3, t8);
    });
  }, "promise"), reject: /* @__PURE__ */ __name(function(r6) {
    return e11.reject(r6);
  }, "reject"), use: /* @__PURE__ */ __name(function(r6) {
    e11 = r6;
  }, "use") }, O3;
}
var f2, availableParallelism, arch, machine, endianness, cpus, getPriority, c2, homedir, tmpdir, l2, freemem, totalmem, loadavg, uptime, hostname, networkInterfaces, platform, type, release, version, userInfo, m4, E2, p2, d, T2, S3, I2, O3, g2, h3, y2;
var init_bcrypt = __esm({
  ".output/server/chunks/_/bcrypt.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_nitro();
    init_prisma();
    f2 = { UV_UDP_REUSEADDR: 4, dlopen: { RTLD_LAZY: 1, RTLD_NOW: 2, RTLD_GLOBAL: 256, RTLD_LOCAL: 0, RTLD_DEEPBIND: 8 }, errno: { E2BIG: 7, EACCES: 13, EADDRINUSE: 98, EADDRNOTAVAIL: 99, EAFNOSUPPORT: 97, EAGAIN: 11, EALREADY: 114, EBADF: 9, EBADMSG: 74, EBUSY: 16, ECANCELED: 125, ECHILD: 10, ECONNABORTED: 103, ECONNREFUSED: 111, ECONNRESET: 104, EDEADLK: 35, EDESTADDRREQ: 89, EDOM: 33, EDQUOT: 122, EEXIST: 17, EFAULT: 14, EFBIG: 27, EHOSTUNREACH: 113, EIDRM: 43, EILSEQ: 84, EINPROGRESS: 115, EINTR: 4, EINVAL: 22, EIO: 5, EISCONN: 106, EISDIR: 21, ELOOP: 40, EMFILE: 24, EMLINK: 31, EMSGSIZE: 90, EMULTIHOP: 72, ENAMETOOLONG: 36, ENETDOWN: 100, ENETRESET: 102, ENETUNREACH: 101, ENFILE: 23, ENOBUFS: 105, ENODATA: 61, ENODEV: 19, ENOENT: 2, ENOEXEC: 8, ENOLCK: 37, ENOLINK: 67, ENOMEM: 12, ENOMSG: 42, ENOPROTOOPT: 92, ENOSPC: 28, ENOSR: 63, ENOSTR: 60, ENOSYS: 38, ENOTCONN: 107, ENOTDIR: 20, ENOTEMPTY: 39, ENOTSOCK: 88, ENOTSUP: 95, ENOTTY: 25, ENXIO: 6, EOPNOTSUPP: 95, EOVERFLOW: 75, EPERM: 1, EPIPE: 32, EPROTO: 71, EPROTONOSUPPORT: 93, EPROTOTYPE: 91, ERANGE: 34, EROFS: 30, ESPIPE: 29, ESRCH: 3, ESTALE: 116, ETIME: 62, ETIMEDOUT: 110, ETXTBSY: 26, EWOULDBLOCK: 11, EXDEV: 18 }, signals: { SIGHUP: 1, SIGINT: 2, SIGQUIT: 3, SIGILL: 4, SIGTRAP: 5, SIGABRT: 6, SIGIOT: 6, SIGBUS: 7, SIGFPE: 8, SIGKILL: 9, SIGUSR1: 10, SIGSEGV: 11, SIGUSR2: 12, SIGPIPE: 13, SIGALRM: 14, SIGTERM: 15, SIGCHLD: 17, SIGSTKFLT: 16, SIGCONT: 18, SIGSTOP: 19, SIGTSTP: 20, SIGTTIN: 21, SIGTTOU: 22, SIGURG: 23, SIGXCPU: 24, SIGXFSZ: 25, SIGVTALRM: 26, SIGPROF: 27, SIGWINCH: 28, SIGIO: 29, SIGPOLL: 29, SIGPWR: 30, SIGSYS: 31 }, priority: { PRIORITY_LOW: 19, PRIORITY_BELOW_NORMAL: 10, PRIORITY_NORMAL: 0, PRIORITY_ABOVE_NORMAL: -7, PRIORITY_HIGH: -14, PRIORITY_HIGHEST: -20 } };
    availableParallelism = /* @__PURE__ */ __name(() => 8, "availableParallelism");
    arch = /* @__PURE__ */ __name(() => "", "arch");
    machine = /* @__PURE__ */ __name(() => "", "machine");
    endianness = /* @__PURE__ */ __name(() => "LE", "endianness");
    cpus = /* @__PURE__ */ __name(() => {
      const e11 = { model: "", speed: 0, times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 } };
      return Array.from({ length: 8 }, () => e11);
    }, "cpus");
    getPriority = /* @__PURE__ */ __name(() => 0, "getPriority");
    c2 = notImplemented("os.setPriority");
    homedir = /* @__PURE__ */ __name(() => "/", "homedir");
    tmpdir = /* @__PURE__ */ __name(() => "/tmp", "tmpdir");
    l2 = "/dev/null";
    freemem = /* @__PURE__ */ __name(() => 0, "freemem");
    totalmem = /* @__PURE__ */ __name(() => 0, "totalmem");
    loadavg = /* @__PURE__ */ __name(() => [0, 0, 0], "loadavg");
    uptime = /* @__PURE__ */ __name(() => 0, "uptime");
    hostname = /* @__PURE__ */ __name(() => "", "hostname");
    networkInterfaces = /* @__PURE__ */ __name(() => ({ lo0: [{ address: "127.0.0.1", netmask: "255.0.0.0", family: "IPv4", mac: "00:00:00:00:00:00", internal: true, cidr: "127.0.0.1/8" }, { address: "::1", netmask: "ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff", family: "IPv6", mac: "00:00:00:00:00:00", internal: true, cidr: "::1/128", scopeid: 0 }, { address: "fe80::1", netmask: "ffff:ffff:ffff:ffff::", family: "IPv6", mac: "00:00:00:00:00:00", internal: true, cidr: "fe80::1/64", scopeid: 1 }] }), "networkInterfaces");
    platform = /* @__PURE__ */ __name(() => "linux", "platform");
    type = /* @__PURE__ */ __name(() => "Linux", "type");
    release = /* @__PURE__ */ __name(() => "", "release");
    version = /* @__PURE__ */ __name(() => "", "version");
    userInfo = /* @__PURE__ */ __name((e11) => {
      const encode = /* @__PURE__ */ __name((r6) => {
        if (e11?.encoding) {
          const t8 = n2.from(r6);
          return "buffer" === e11.encoding ? t8 : t8.toString(e11.encoding);
        }
        return r6;
      }, "encode");
      return { gid: 1e3, uid: 1e3, homedir: encode("/"), shell: encode("/bin/sh"), username: encode("root") };
    }, "userInfo");
    m4 = { arch, availableParallelism, constants: f2, cpus, EOL: "\n", endianness, devNull: l2, freemem, getPriority, homedir, hostname, loadavg, machine, networkInterfaces, platform, release, setPriority: c2, tmpdir, totalmem, type, uptime, userInfo, version };
    E2 = getDefaultExportFromNamespaceIfNotNamed(Object.freeze(Object.defineProperty({ __proto__: null, EOL: "\n", arch, availableParallelism, constants: f2, cpus, default: m4, devNull: l2, endianness, freemem, getPriority, homedir, hostname, loadavg, machine, networkInterfaces, platform, release, setPriority: c2, tmpdir, totalmem, type, uptime, userInfo, version }, Symbol.toStringTag, { value: "Module" })));
    p2 = { exports: {} };
    __name(commonjsRequire, "commonjsRequire");
    S3 = { exports: {} };
    __name(requireNodeGypBuild, "requireNodeGypBuild");
    I2 = "function" == typeof __webpack_require__ ? __non_webpack_require__ : commonjsRequire;
    "function" == typeof I2.addon ? S3.exports = I2.addon.bind(I2) : S3.exports = requireNodeGypBuild();
    h3 = S3.exports;
    __name(requirePromises, "requirePromises");
    !(function(e11) {
      const t8 = h3($m.resolve(__dirname)), o4 = Id, a6 = requirePromises();
      e11.exports = { genSaltSync: /* @__PURE__ */ __name(function(e12, r6) {
        if (e12) {
          if ("number" != typeof e12) throw new Error("rounds must be a number");
        } else e12 = 10;
        if (r6) {
          if ("b" !== r6 && "a" !== r6) throw new Error('minor must be either "a" or "b"');
        } else r6 = "b";
        return t8.gen_salt_sync(r6, e12, o4.randomBytes(16));
      }, "genSaltSync"), genSalt: /* @__PURE__ */ __name(function genSalt(e12, n3, i6) {
        let s6;
        if ("function" == typeof arguments[0] ? (i6 = arguments[0], e12 = 10, n3 = "b") : "function" == typeof arguments[1] && (i6 = arguments[1], n3 = "b"), !i6) return a6.promise(genSalt, this, [e12, n3]);
        if (e12) {
          if ("number" != typeof e12) return s6 = new Error("rounds must be a number"), m2.nextTick(function() {
            i6(s6);
          });
        } else e12 = 10;
        if (n3) {
          if ("b" !== n3 && "a" !== n3) return s6 = new Error('minor must be either "a" or "b"'), m2.nextTick(function() {
            i6(s6);
          });
        } else n3 = "b";
        o4.randomBytes(16, function(r6, o5) {
          r6 ? i6(r6) : t8.gen_salt(n3, e12, o5, i6);
        });
      }, "genSalt"), hashSync: /* @__PURE__ */ __name(function(r6, i6) {
        if (null == r6 || null == i6) throw new Error("data and salt arguments required");
        if (!("string" == typeof r6 || r6 instanceof n2) || "string" != typeof i6 && "number" != typeof i6) throw new Error("data must be a string or Buffer and salt must either be a salt string or a number of rounds");
        return "number" == typeof i6 && (i6 = e11.exports.genSaltSync(i6)), t8.encrypt_sync(r6, i6);
      }, "hashSync"), hash: /* @__PURE__ */ __name(function hash2(i6, o5, s6) {
        let u5;
        return "function" == typeof i6 ? (u5 = new Error("data must be a string or Buffer and salt must either be a salt string or a number of rounds"), m2.nextTick(function() {
          i6(u5);
        })) : "function" == typeof o5 ? (u5 = new Error("data must be a string or Buffer and salt must either be a salt string or a number of rounds"), m2.nextTick(function() {
          o5(u5);
        })) : s6 && "function" != typeof s6 ? a6.reject(new Error("cb must be a function or null to return a Promise")) : s6 ? null == i6 || null == o5 ? (u5 = new Error("data and salt arguments required"), m2.nextTick(function() {
          s6(u5);
        })) : !("string" == typeof i6 || i6 instanceof n2) || "string" != typeof o5 && "number" != typeof o5 ? (u5 = new Error("data must be a string or Buffer and salt must either be a salt string or a number of rounds"), m2.nextTick(function() {
          s6(u5);
        })) : "number" == typeof o5 ? e11.exports.genSalt(o5, function(e12, r6) {
          return t8.encrypt(i6, r6, s6);
        }) : t8.encrypt(i6, o5, s6) : a6.promise(hash2, this, [i6, o5]);
      }, "hash"), compareSync: /* @__PURE__ */ __name(function(e12, r6) {
        if (null == e12 || null == r6) throw new Error("data and hash arguments required");
        if (!("string" == typeof e12 || e12 instanceof n2) || "string" != typeof r6) throw new Error("data must be a string or Buffer and hash must be a string");
        return t8.compare_sync(e12, r6);
      }, "compareSync"), compare: /* @__PURE__ */ __name(function compare(e12, i6, o5) {
        let s6;
        return "function" == typeof e12 ? (s6 = new Error("data and hash arguments required"), m2.nextTick(function() {
          e12(s6);
        })) : "function" == typeof i6 ? (s6 = new Error("data and hash arguments required"), m2.nextTick(function() {
          i6(s6);
        })) : o5 && "function" != typeof o5 ? a6.reject(new Error("cb must be a function or null to return a Promise")) : o5 ? null == e12 || null == i6 ? (s6 = new Error("data and hash arguments required"), m2.nextTick(function() {
          o5(s6);
        })) : ("string" == typeof e12 || e12 instanceof n2) && "string" == typeof i6 ? t8.compare(e12, i6, o5) : (s6 = new Error("data and hash must be strings"), m2.nextTick(function() {
          o5(s6);
        })) : a6.promise(compare, this, [e12, i6]);
      }, "compare"), getRounds: /* @__PURE__ */ __name(function(e12) {
        if (null == e12) throw new Error("hash argument required");
        if ("string" != typeof e12) throw new Error("hash must be a string");
        return t8.get_rounds(e12);
      }, "getRounds") };
    })(p2);
    y2 = getDefaultExportFromCjs(p2.exports);
  }
});

// .output/server/chunks/routes/api/login.post.mjs
var login_post_exports = {};
__export(login_post_exports, {
  default: () => Qt2
});
import "node:buffer";
import "node:timers";
import "node:events";
import "node:process";
import "cloudflare:workers";
import "node:util";
import "node:crypto";
import "node:dns";
import "node:fs/promises";
import "node:net";
import "node:tls";
import "node:path";
import "node:stream";
import "node:string_decoder";
function encode$2(e11) {
  const t8 = new Uint8Array(e11.length);
  for (let n3 = 0; n3 < e11.length; n3++) {
    const r6 = e11.charCodeAt(n3);
    if (r6 > 127) throw new TypeError("non-ASCII string encountered in encode()");
    t8[n3] = r6;
  }
  return t8;
}
function decode$1(e11) {
  if (Uint8Array.fromBase64) return Uint8Array.fromBase64("string" == typeof e11 ? e11 : i2.decode(e11), { alphabet: "base64url" });
  let t8 = e11;
  t8 instanceof Uint8Array && (t8 = i2.decode(t8)), t8 = t8.replace(/-/g, "+").replace(/_/g, "/");
  try {
    return (function(e12) {
      if (Uint8Array.fromBase64) return Uint8Array.fromBase64(e12);
      const t9 = atob(e12), n3 = new Uint8Array(t9.length);
      for (let e13 = 0; e13 < t9.length; e13++) n3[e13] = t9.charCodeAt(e13);
      return n3;
    })(t8);
  } catch {
    throw new TypeError("The input to be decoded is not correctly encoded.");
  }
}
function encode$1(e11) {
  let t8 = e11;
  return "string" == typeof t8 && (t8 = s2.encode(t8)), Uint8Array.prototype.toBase64 ? t8.toBase64({ alphabet: "base64url", omitPadding: true }) : (function(e12) {
    if (Uint8Array.prototype.toBase64) return e12.toBase64();
    const t9 = [];
    for (let n3 = 0; n3 < e12.length; n3 += 32768) t9.push(String.fromCharCode.apply(null, e12.subarray(n3, n3 + 32768)));
    return btoa(t9.join(""));
  })(t8).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function getHashLength(e11) {
  return parseInt(e11.name.slice(4), 10);
}
function checkSigCryptoKey(e11, t8, n3) {
  switch (t8) {
    case "HS256":
    case "HS384":
    case "HS512": {
      if (!isAlgorithm(e11.algorithm, "HMAC")) throw unusable("HMAC");
      const n4 = parseInt(t8.slice(2), 10);
      if (getHashLength(e11.algorithm.hash) !== n4) throw unusable(`SHA-${n4}`, "algorithm.hash");
      break;
    }
    case "RS256":
    case "RS384":
    case "RS512": {
      if (!isAlgorithm(e11.algorithm, "RSASSA-PKCS1-v1_5")) throw unusable("RSASSA-PKCS1-v1_5");
      const n4 = parseInt(t8.slice(2), 10);
      if (getHashLength(e11.algorithm.hash) !== n4) throw unusable(`SHA-${n4}`, "algorithm.hash");
      break;
    }
    case "PS256":
    case "PS384":
    case "PS512": {
      if (!isAlgorithm(e11.algorithm, "RSA-PSS")) throw unusable("RSA-PSS");
      const n4 = parseInt(t8.slice(2), 10);
      if (getHashLength(e11.algorithm.hash) !== n4) throw unusable(`SHA-${n4}`, "algorithm.hash");
      break;
    }
    case "Ed25519":
    case "EdDSA":
      if (!isAlgorithm(e11.algorithm, "Ed25519")) throw unusable("Ed25519");
      break;
    case "ML-DSA-44":
    case "ML-DSA-65":
    case "ML-DSA-87":
      if (!isAlgorithm(e11.algorithm, t8)) throw unusable(t8);
      break;
    case "ES256":
    case "ES384":
    case "ES512": {
      if (!isAlgorithm(e11.algorithm, "ECDSA")) throw unusable("ECDSA");
      const n4 = (function(e12) {
        switch (e12) {
          case "ES256":
            return "P-256";
          case "ES384":
            return "P-384";
          case "ES512":
            return "P-521";
          default:
            throw new Error("unreachable");
        }
      })(t8);
      if (e11.algorithm.namedCurve !== n4) throw unusable(n4, "algorithm.namedCurve");
      break;
    }
    default:
      throw new TypeError("CryptoKey does not support this operation");
  }
  !(function(e12, t9) {
    if (!e12.usages.includes(t9)) throw new TypeError(`CryptoKey does not support this operation, its usages must include ${t9}.`);
  })(e11, n3);
}
function message(e11, t8, ...n3) {
  if ((n3 = n3.filter(Boolean)).length > 2) {
    const t9 = n3.pop();
    e11 += `one of type ${n3.join(", ")}, or ${t9}.`;
  } else 2 === n3.length ? e11 += `one of type ${n3[0]} or ${n3[1]}.` : e11 += `of type ${n3[0]}.`;
  return null == t8 ? e11 += ` Received ${t8}` : "function" == typeof t8 && t8.name ? e11 += ` Received function ${t8.name}` : "object" == typeof t8 && null != t8 && t8.constructor?.name && (e11 += ` Received an instance of ${t8.constructor.name}`), e11;
}
function isObject$1(e11) {
  if ("object" != typeof (t8 = e11) || null === t8 || "[object Object]" !== Object.prototype.toString.call(e11)) return false;
  var t8;
  if (null === Object.getPrototypeOf(e11)) return true;
  let n3 = e11;
  for (; null !== Object.getPrototypeOf(n3); ) n3 = Object.getPrototypeOf(n3);
  return Object.getPrototypeOf(e11) === n3;
}
async function jwkToKey(e11) {
  if (!e11.alg) throw new TypeError('"alg" argument is required when "jwk.alg" is not present');
  const { algorithm: t8, keyUsages: n3 } = (function(e12) {
    let t9, n4;
    switch (e12.kty) {
      case "AKP":
        switch (e12.alg) {
          case "ML-DSA-44":
          case "ML-DSA-65":
          case "ML-DSA-87":
            t9 = { name: e12.alg }, n4 = e12.priv ? ["sign"] : ["verify"];
            break;
          default:
            throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
        }
        break;
      case "RSA":
        switch (e12.alg) {
          case "PS256":
          case "PS384":
          case "PS512":
            t9 = { name: "RSA-PSS", hash: `SHA-${e12.alg.slice(-3)}` }, n4 = e12.d ? ["sign"] : ["verify"];
            break;
          case "RS256":
          case "RS384":
          case "RS512":
            t9 = { name: "RSASSA-PKCS1-v1_5", hash: `SHA-${e12.alg.slice(-3)}` }, n4 = e12.d ? ["sign"] : ["verify"];
            break;
          case "RSA-OAEP":
          case "RSA-OAEP-256":
          case "RSA-OAEP-384":
          case "RSA-OAEP-512":
            t9 = { name: "RSA-OAEP", hash: `SHA-${parseInt(e12.alg.slice(-3), 10) || 1}` }, n4 = e12.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"];
            break;
          default:
            throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
        }
        break;
      case "EC":
        switch (e12.alg) {
          case "ES256":
            t9 = { name: "ECDSA", namedCurve: "P-256" }, n4 = e12.d ? ["sign"] : ["verify"];
            break;
          case "ES384":
            t9 = { name: "ECDSA", namedCurve: "P-384" }, n4 = e12.d ? ["sign"] : ["verify"];
            break;
          case "ES512":
            t9 = { name: "ECDSA", namedCurve: "P-521" }, n4 = e12.d ? ["sign"] : ["verify"];
            break;
          case "ECDH-ES":
          case "ECDH-ES+A128KW":
          case "ECDH-ES+A192KW":
          case "ECDH-ES+A256KW":
            t9 = { name: "ECDH", namedCurve: e12.crv }, n4 = e12.d ? ["deriveBits"] : [];
            break;
          default:
            throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
        }
        break;
      case "OKP":
        switch (e12.alg) {
          case "Ed25519":
          case "EdDSA":
            t9 = { name: "Ed25519" }, n4 = e12.d ? ["sign"] : ["verify"];
            break;
          case "ECDH-ES":
          case "ECDH-ES+A128KW":
          case "ECDH-ES+A192KW":
          case "ECDH-ES+A256KW":
            t9 = { name: e12.crv }, n4 = e12.d ? ["deriveBits"] : [];
            break;
          default:
            throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
        }
        break;
      default:
        throw new JOSENotSupported('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
    }
    return { algorithm: t9, keyUsages: n4 };
  })(e11), r6 = { ...e11 };
  return "AKP" !== r6.kty && delete r6.alg, delete r6.use, crypto.subtle.importKey("jwk", r6, t8, e11.ext ?? (!e11.d && !e11.priv), e11.key_ops ?? n3);
}
async function normalizeKey(e11, t8) {
  if (e11 instanceof Uint8Array) return e11;
  if (isCryptoKey(e11)) return e11;
  if (isKeyObject(e11)) {
    if ("secret" === e11.type) return e11.export();
    if ("toCryptoKey" in e11 && "function" == typeof e11.toCryptoKey) try {
      return ((e12, t9) => {
        a3 ||= /* @__PURE__ */ new WeakMap();
        let n4 = a3.get(e12);
        if (n4?.[t9]) return n4[t9];
        const r6 = "public" === e12.type, o4 = !!r6;
        let s6;
        if ("x25519" === e12.asymmetricKeyType) {
          switch (t9) {
            case "ECDH-ES":
            case "ECDH-ES+A128KW":
            case "ECDH-ES+A192KW":
            case "ECDH-ES+A256KW":
              break;
            default:
              throw new TypeError("given KeyObject instance cannot be used for this algorithm");
          }
          s6 = e12.toCryptoKey(e12.asymmetricKeyType, o4, r6 ? [] : ["deriveBits"]);
        }
        if ("ed25519" === e12.asymmetricKeyType) {
          if ("EdDSA" !== t9 && "Ed25519" !== t9) throw new TypeError("given KeyObject instance cannot be used for this algorithm");
          s6 = e12.toCryptoKey(e12.asymmetricKeyType, o4, [r6 ? "verify" : "sign"]);
        }
        switch (e12.asymmetricKeyType) {
          case "ml-dsa-44":
          case "ml-dsa-65":
          case "ml-dsa-87":
            if (t9 !== e12.asymmetricKeyType.toUpperCase()) throw new TypeError("given KeyObject instance cannot be used for this algorithm");
            s6 = e12.toCryptoKey(e12.asymmetricKeyType, o4, [r6 ? "verify" : "sign"]);
        }
        if ("rsa" === e12.asymmetricKeyType) {
          let n5;
          switch (t9) {
            case "RSA-OAEP":
              n5 = "SHA-1";
              break;
            case "RS256":
            case "PS256":
            case "RSA-OAEP-256":
              n5 = "SHA-256";
              break;
            case "RS384":
            case "PS384":
            case "RSA-OAEP-384":
              n5 = "SHA-384";
              break;
            case "RS512":
            case "PS512":
            case "RSA-OAEP-512":
              n5 = "SHA-512";
              break;
            default:
              throw new TypeError("given KeyObject instance cannot be used for this algorithm");
          }
          if (t9.startsWith("RSA-OAEP")) return e12.toCryptoKey({ name: "RSA-OAEP", hash: n5 }, o4, r6 ? ["encrypt"] : ["decrypt"]);
          s6 = e12.toCryptoKey({ name: t9.startsWith("PS") ? "RSA-PSS" : "RSASSA-PKCS1-v1_5", hash: n5 }, o4, [r6 ? "verify" : "sign"]);
        }
        if ("ec" === e12.asymmetricKeyType) {
          const n5 = (/* @__PURE__ */ new Map([["prime256v1", "P-256"], ["secp384r1", "P-384"], ["secp521r1", "P-521"]])).get(e12.asymmetricKeyDetails?.namedCurve);
          if (!n5) throw new TypeError("given KeyObject instance cannot be used for this algorithm");
          "ES256" === t9 && "P-256" === n5 && (s6 = e12.toCryptoKey({ name: "ECDSA", namedCurve: n5 }, o4, [r6 ? "verify" : "sign"])), "ES384" === t9 && "P-384" === n5 && (s6 = e12.toCryptoKey({ name: "ECDSA", namedCurve: n5 }, o4, [r6 ? "verify" : "sign"])), "ES512" === t9 && "P-521" === n5 && (s6 = e12.toCryptoKey({ name: "ECDSA", namedCurve: n5 }, o4, [r6 ? "verify" : "sign"])), t9.startsWith("ECDH-ES") && (s6 = e12.toCryptoKey({ name: "ECDH", namedCurve: n5 }, o4, r6 ? [] : ["deriveBits"]));
        }
        if (!s6) throw new TypeError("given KeyObject instance cannot be used for this algorithm");
        return n4 ? n4[t9] = s6 : a3.set(e12, { [t9]: s6 }), s6;
      })(e11, t8);
    } catch (e12) {
      if (e12 instanceof TypeError) throw e12;
    }
    let n3 = e11.export({ format: "jwk" });
    return handleJWK(e11, n3, t8);
  }
  if (isJWK(e11)) return e11.k ? decode$1(e11.k) : handleJWK(e11, e11, t8, true);
  throw new Error("unreachable");
}
function checkKeyType(e11, t8, n3) {
  switch (e11.substring(0, 2)) {
    case "A1":
    case "A2":
    case "di":
    case "HS":
    case "PB":
      ((e12, t9, n4) => {
        if (!(t9 instanceof Uint8Array)) {
          if (isJWK(t9)) {
            if (((e13) => "oct" === e13.kty && "string" == typeof e13.k)(t9) && jwkMatchesOp(e12, t9, n4)) return;
            throw new TypeError('JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present');
          }
          if (!isKeyLike(t9)) throw new TypeError(withAlg(e12, t9, "CryptoKey", "KeyObject", "JSON Web Key", "Uint8Array"));
          if ("secret" !== t9.type) throw new TypeError(`${tag(t9)} instances for symmetric algorithms must be of type "secret"`);
        }
      })(e11, t8, n3);
      break;
    default:
      ((e12, t9, n4) => {
        if (isJWK(t9)) switch (n4) {
          case "decrypt":
          case "sign":
            if (((e13) => "oct" !== e13.kty && ("AKP" === e13.kty && "string" == typeof e13.priv || "string" == typeof e13.d))(t9) && jwkMatchesOp(e12, t9, n4)) return;
            throw new TypeError("JSON Web Key for this operation must be a private JWK");
          case "encrypt":
          case "verify":
            if (((e13) => "oct" !== e13.kty && void 0 === e13.d && void 0 === e13.priv)(t9) && jwkMatchesOp(e12, t9, n4)) return;
            throw new TypeError("JSON Web Key for this operation must be a public JWK");
        }
        if (!isKeyLike(t9)) throw new TypeError(withAlg(e12, t9, "CryptoKey", "KeyObject", "JSON Web Key"));
        if ("secret" === t9.type) throw new TypeError(`${tag(t9)} instances for asymmetric algorithms must not be of type "secret"`);
        if ("public" === t9.type) switch (n4) {
          case "sign":
            throw new TypeError(`${tag(t9)} instances for asymmetric algorithm signing must be of type "private"`);
          case "decrypt":
            throw new TypeError(`${tag(t9)} instances for asymmetric algorithm decryption must be of type "private"`);
        }
        if ("private" === t9.type) switch (n4) {
          case "verify":
            throw new TypeError(`${tag(t9)} instances for asymmetric algorithm verifying must be of type "public"`);
          case "encrypt":
            throw new TypeError(`${tag(t9)} instances for asymmetric algorithm encryption must be of type "public"`);
        }
      })(e11, t8, n3);
  }
}
async function getSigKey(e11, t8, n3) {
  if (t8 instanceof Uint8Array) {
    if (!e11.startsWith("HS")) throw new TypeError(((e12, ...t9) => message("Key must be ", e12, ...t9))(t8, "CryptoKey", "KeyObject", "JSON Web Key"));
    return crypto.subtle.importKey("raw", t8, { hash: `SHA-${e11.slice(-3)}`, name: "HMAC" }, false, [n3]);
  }
  return checkSigCryptoKey(t8, e11, n3), t8;
}
function secs(e11) {
  const t8 = u2.exec(e11);
  if (!t8 || t8[4] && t8[1]) throw new TypeError("Invalid time period format");
  const n3 = parseFloat(t8[2]);
  let r6;
  switch (t8[3].toLowerCase()) {
    case "sec":
    case "secs":
    case "second":
    case "seconds":
    case "s":
      r6 = Math.round(n3);
      break;
    case "minute":
    case "minutes":
    case "min":
    case "mins":
    case "m":
      r6 = Math.round(60 * n3);
      break;
    case "hour":
    case "hours":
    case "hr":
    case "hrs":
    case "h":
      r6 = Math.round(3600 * n3);
      break;
    case "day":
    case "days":
    case "d":
      r6 = Math.round(n3 * c3);
      break;
    case "week":
    case "weeks":
    case "w":
      r6 = Math.round(604800 * n3);
      break;
    default:
      r6 = Math.round(31557600 * n3);
  }
  return "-" === t8[1] || "ago" === t8[4] ? -r6 : r6;
}
function validateInput(e11, t8) {
  if (!Number.isFinite(t8)) throw new TypeError(`Invalid ${e11} input`);
  return t8;
}
async function sign2(e11, t8, n3) {
  const r6 = await getSigKey(e11, t8, "sign");
  !(function(e12, t9) {
    if (e12.startsWith("RS") || e12.startsWith("PS")) {
      const { modulusLength: n4 } = t9.algorithm;
      if ("number" != typeof n4 || n4 < 2048) throw new TypeError(`${e12} requires key modulusLength to be 2048 bits or larger`);
    }
  })(e11, r6);
  const o4 = await crypto.subtle.sign((function(e12, t9) {
    const n4 = `SHA-${e12.slice(-3)}`;
    switch (e12) {
      case "HS256":
      case "HS384":
      case "HS512":
        return { hash: n4, name: "HMAC" };
      case "PS256":
      case "PS384":
      case "PS512":
        return { hash: n4, name: "RSA-PSS", saltLength: parseInt(e12.slice(-3), 10) >> 3 };
      case "RS256":
      case "RS384":
      case "RS512":
        return { hash: n4, name: "RSASSA-PKCS1-v1_5" };
      case "ES256":
      case "ES384":
      case "ES512":
        return { hash: n4, name: "ECDSA", namedCurve: t9.namedCurve };
      case "Ed25519":
      case "EdDSA":
        return { name: "Ed25519" };
      case "ML-DSA-44":
      case "ML-DSA-65":
      case "ML-DSA-87":
        return { name: e12 };
      default:
        throw new JOSENotSupported(`alg ${e12} is not supported either by JOSE or your javascript runtime`);
    }
  })(e11, r6.algorithm), r6, n3);
  return new Uint8Array(o4);
}
function $constructor(e11, t8, n3) {
  function init2(n4, r7) {
    if (n4._zod || Object.defineProperty(n4, "_zod", { value: { def: r7, constr: _4, traits: /* @__PURE__ */ new Set() }, enumerable: false }), n4._zod.traits.has(e11)) return;
    n4._zod.traits.add(e11), t8(n4, r7);
    const o4 = _4.prototype, s6 = Object.keys(o4);
    for (let e12 = 0; e12 < s6.length; e12++) {
      const t9 = s6[e12];
      t9 in n4 || (n4[t9] = o4[t9].bind(n4));
    }
  }
  __name(init2, "init");
  const r6 = n3?.Parent ?? Object;
  class Definition extends r6 {
    static {
      __name(this, "Definition");
    }
  }
  function _4(e12) {
    var t9;
    const r7 = n3?.Parent ? new Definition() : this;
    init2(r7, e12), (t9 = r7._zod).deferred ?? (t9.deferred = []);
    for (const e13 of r7._zod.deferred) e13();
    return r7;
  }
  __name(_4, "_");
  return Object.defineProperty(Definition, "name", { value: e11 }), Object.defineProperty(_4, "init", { value: init2 }), Object.defineProperty(_4, Symbol.hasInstance, { value: /* @__PURE__ */ __name((t9) => !!(n3?.Parent && t9 instanceof n3.Parent) || t9?._zod?.traits?.has(e11), "value") }), Object.defineProperty(_4, "name", { value: e11 }), _4;
}
function config(e11) {
  return d2;
}
function getEnumValues(e11) {
  const t8 = Object.values(e11).filter((e12) => "number" == typeof e12);
  return Object.entries(e11).filter(([e12, n3]) => -1 === t8.indexOf(+e12)).map(([e12, t9]) => t9);
}
function jsonStringifyReplacer(e11, t8) {
  return "bigint" == typeof t8 ? t8.toString() : t8;
}
function cached(e11) {
  return { get value() {
    {
      const t8 = e11();
      return Object.defineProperty(this, "value", { value: t8 }), t8;
    }
  } };
}
function nullish(e11) {
  return null == e11;
}
function cleanRegex(e11) {
  const t8 = e11.startsWith("^") ? 1 : 0, n3 = e11.endsWith("$") ? e11.length - 1 : e11.length;
  return e11.slice(t8, n3);
}
function defineLazy(e11, t8, n3) {
  let r6;
  Object.defineProperty(e11, t8, { get() {
    if (r6 !== p3) return void 0 === r6 && (r6 = p3, r6 = n3()), r6;
  }, set(n4) {
    Object.defineProperty(e11, t8, { value: n4 });
  }, configurable: true });
}
function assignProp(e11, t8, n3) {
  Object.defineProperty(e11, t8, { value: n3, writable: true, enumerable: true, configurable: true });
}
function mergeDefs(...e11) {
  const t8 = {};
  for (const n3 of e11) {
    const e12 = Object.getOwnPropertyDescriptors(n3);
    Object.assign(t8, e12);
  }
  return Object.defineProperties({}, t8);
}
function esc(e11) {
  return JSON.stringify(e11);
}
function isObject(e11) {
  return "object" == typeof e11 && null !== e11 && !Array.isArray(e11);
}
function isPlainObject(e11) {
  if (false === isObject(e11)) return false;
  const t8 = e11.constructor;
  if (void 0 === t8) return true;
  if ("function" != typeof t8) return true;
  const n3 = t8.prototype;
  return false !== isObject(n3) && false !== Object.prototype.hasOwnProperty.call(n3, "isPrototypeOf");
}
function shallowClone(e11) {
  return isPlainObject(e11) ? { ...e11 } : Array.isArray(e11) ? [...e11] : e11;
}
function escapeRegex(e11) {
  return e11.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone2(e11, t8, n3) {
  const r6 = new e11._zod.constr(t8 ?? e11._zod.def);
  return t8 && !n3?.parent || (r6._zod.parent = e11), r6;
}
function normalizeParams(e11) {
  const t8 = e11;
  if (!t8) return {};
  if ("string" == typeof t8) return { error: /* @__PURE__ */ __name(() => t8, "error") };
  if (void 0 !== t8?.message) {
    if (void 0 !== t8?.error) throw new Error("Cannot specify both `message` and `error` params");
    t8.error = t8.message;
  }
  return delete t8.message, "string" == typeof t8.error ? { ...t8, error: /* @__PURE__ */ __name(() => t8.error, "error") } : t8;
}
function aborted(e11, t8 = 0) {
  if (true === e11.aborted) return true;
  for (let n3 = t8; n3 < e11.issues.length; n3++) if (true !== e11.issues[n3]?.continue) return true;
  return false;
}
function prefixIssues(e11, t8) {
  return t8.map((t9) => {
    var n3;
    return (n3 = t9).path ?? (n3.path = []), t9.path.unshift(e11), t9;
  });
}
function unwrapMessage(e11) {
  return "string" == typeof e11 ? e11 : e11?.message;
}
function finalizeIssue(e11, t8, n3) {
  const r6 = { ...e11, path: e11.path ?? [] };
  if (!e11.message) {
    const o4 = unwrapMessage(e11.inst?._zod.def?.error?.(e11)) ?? unwrapMessage(t8?.error?.(e11)) ?? unwrapMessage(n3.customError?.(e11)) ?? unwrapMessage(n3.localeError?.(e11)) ?? "Invalid input";
    r6.message = o4;
  }
  return delete r6.inst, delete r6.continue, t8?.reportInput || delete r6.input, r6;
}
function getLengthableOrigin(e11) {
  return Array.isArray(e11) ? "array" : "string" == typeof e11 ? "string" : "unknown";
}
function issue(...e11) {
  const [t8, n3, r6] = e11;
  return "string" == typeof t8 ? { message: t8, code: "custom", input: n3, inst: r6 } : { ...t8 };
}
function flattenError(e11, t8 = (e12) => e12.message) {
  const n3 = {}, r6 = [];
  for (const o4 of e11.issues) o4.path.length > 0 ? (n3[o4.path[0]] = n3[o4.path[0]] || [], n3[o4.path[0]].push(t8(o4))) : r6.push(t8(o4));
  return { formErrors: r6, fieldErrors: n3 };
}
function timeSource(e11) {
  const t8 = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return "number" == typeof e11.precision ? -1 === e11.precision ? `${t8}` : 0 === e11.precision ? `${t8}:[0-5]\\d` : `${t8}:[0-5]\\d\\.\\d{${e11.precision}}` : `${t8}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function isValidBase64(e11) {
  if ("" === e11) return true;
  if (e11.length % 4 != 0) return false;
  try {
    return atob(e11), true;
  } catch {
    return false;
  }
}
function handleArrayResult(e11, t8, n3) {
  e11.issues.length && t8.issues.push(...prefixIssues(n3, e11.issues)), t8.value[n3] = e11.value;
}
function handlePropertyResult(e11, t8, n3, r6, o4) {
  if (e11.issues.length) {
    if (o4 && !(n3 in r6)) return;
    t8.issues.push(...prefixIssues(n3, e11.issues));
  }
  void 0 === e11.value ? n3 in r6 && (t8.value[n3] = void 0) : t8.value[n3] = e11.value;
}
function normalizeDef(e11) {
  const t8 = Object.keys(e11.shape);
  for (const n4 of t8) if (!e11.shape?.[n4]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${n4}": expected a Zod schema`);
  const n3 = (r6 = e11.shape, Object.keys(r6).filter((e12) => "optional" === r6[e12]._zod.optin && "optional" === r6[e12]._zod.optout));
  var r6;
  return { ...e11, keys: t8, keySet: new Set(t8), numKeys: t8.length, optionalKeys: new Set(n3) };
}
function handleCatchall(e11, t8, n3, r6, o4, s6) {
  const i6 = [], a6 = o4.keySet, c6 = o4.catchall._zod, u5 = c6.def.type, d4 = "optional" === c6.optout;
  for (const o5 in t8) {
    if (a6.has(o5)) continue;
    if ("never" === u5) {
      i6.push(o5);
      continue;
    }
    const s7 = c6.run({ value: t8[o5], issues: [] }, r6);
    s7 instanceof Promise ? e11.push(s7.then((e12) => handlePropertyResult(e12, n3, o5, t8, d4))) : handlePropertyResult(s7, n3, o5, t8, d4);
  }
  return i6.length && n3.issues.push({ code: "unrecognized_keys", keys: i6, input: t8, inst: s6 }), e11.length ? Promise.all(e11).then(() => n3) : n3;
}
function handleUnionResults(e11, t8, n3, r6) {
  for (const n4 of e11) if (0 === n4.issues.length) return t8.value = n4.value, t8;
  const o4 = e11.filter((e12) => !aborted(e12));
  return 1 === o4.length ? (t8.value = o4[0].value, o4[0]) : (t8.issues.push({ code: "invalid_union", input: t8.value, inst: n3, errors: e11.map((e12) => e12.issues.map((e13) => finalizeIssue(e13, r6, config()))) }), t8);
}
function mergeValues(e11, t8) {
  if (e11 === t8) return { valid: true, data: e11 };
  if (e11 instanceof Date && t8 instanceof Date && +e11 === +t8) return { valid: true, data: e11 };
  if (isPlainObject(e11) && isPlainObject(t8)) {
    const n3 = Object.keys(t8), r6 = Object.keys(e11).filter((e12) => -1 !== n3.indexOf(e12)), o4 = { ...e11, ...t8 };
    for (const n4 of r6) {
      const r7 = mergeValues(e11[n4], t8[n4]);
      if (!r7.valid) return { valid: false, mergeErrorPath: [n4, ...r7.mergeErrorPath] };
      o4[n4] = r7.data;
    }
    return { valid: true, data: o4 };
  }
  if (Array.isArray(e11) && Array.isArray(t8)) {
    if (e11.length !== t8.length) return { valid: false, mergeErrorPath: [] };
    const n3 = [];
    for (let r6 = 0; r6 < e11.length; r6++) {
      const o4 = mergeValues(e11[r6], t8[r6]);
      if (!o4.valid) return { valid: false, mergeErrorPath: [r6, ...o4.mergeErrorPath] };
      n3.push(o4.data);
    }
    return { valid: true, data: n3 };
  }
  return { valid: false, mergeErrorPath: [] };
}
function handleIntersectionResults(e11, t8, n3) {
  const r6 = /* @__PURE__ */ new Map();
  let o4;
  for (const n4 of t8.issues) if ("unrecognized_keys" === n4.code) {
    o4 ?? (o4 = n4);
    for (const e12 of n4.keys) r6.has(e12) || r6.set(e12, {}), r6.get(e12).l = true;
  } else e11.issues.push(n4);
  for (const t9 of n3.issues) if ("unrecognized_keys" === t9.code) for (const e12 of t9.keys) r6.has(e12) || r6.set(e12, {}), r6.get(e12).r = true;
  else e11.issues.push(t9);
  const s6 = [...r6].filter(([, e12]) => e12.l && e12.r).map(([e12]) => e12);
  if (s6.length && o4 && e11.issues.push({ ...o4, keys: s6 }), aborted(e11)) return e11;
  const i6 = mergeValues(t8.value, n3.value);
  if (!i6.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(i6.mergeErrorPath)}`);
  return e11.value = i6.data, e11;
}
function handleOptionalResult(e11, t8) {
  return e11.issues.length && void 0 === t8 ? { issues: [], value: void 0 } : e11;
}
function handleDefaultResult(e11, t8) {
  return void 0 === e11.value && (e11.value = t8.defaultValue), e11;
}
function handleNonOptionalResult(e11, t8) {
  return e11.issues.length || void 0 !== e11.value || e11.issues.push({ code: "invalid_type", expected: "nonoptional", input: e11.value, inst: t8 }), e11;
}
function handlePipeResult(e11, t8, n3) {
  return e11.issues.length ? (e11.aborted = true, e11) : t8._zod.run({ value: e11.value, issues: e11.issues }, n3);
}
function handleReadonlyResult(e11) {
  return e11.value = Object.freeze(e11.value), e11;
}
function handleRefineResult(e11, t8, n3, r6) {
  if (!e11) {
    const e12 = { code: "custom", input: n3, inst: r6, path: [...r6._zod.def.path ?? []], continue: !r6._zod.def.abort };
    r6._zod.def.params && (e12.params = r6._zod.def.params), t8.issues.push(issue(e12));
  }
}
function _email(e11, t8) {
  return new e11({ type: "string", format: "email", check: "string_format", abort: false, ...normalizeParams(t8) });
}
function _guid(e11, t8) {
  return new e11({ type: "string", format: "guid", check: "string_format", abort: false, ...normalizeParams(t8) });
}
function _maxLength(e11, t8) {
  return new H3({ check: "max_length", ...normalizeParams(t8), maximum: e11 });
}
function _minLength(e11, t8) {
  return new L3({ check: "min_length", ...normalizeParams(t8), minimum: e11 });
}
function _length(e11, t8) {
  return new W3({ check: "length_equals", ...normalizeParams(t8), length: e11 });
}
function _overwrite(e11) {
  return new Y3({ check: "overwrite", tx: e11 });
}
function _superRefine(e11) {
  const t8 = (function(e12, t9) {
    const n3 = new N3({ check: "custom", ...normalizeParams(t9) });
    return n3._zod.check = e12, n3;
  })((n3) => (n3.addIssue = (e12) => {
    if ("string" == typeof e12) n3.issues.push(issue(e12, n3.value, t8._zod.def));
    else {
      const r6 = e12;
      r6.fatal && (r6.continue = false), r6.code ?? (r6.code = "custom"), r6.input ?? (r6.input = n3.value), r6.inst ?? (r6.inst = t8), r6.continue ?? (r6.continue = !t8._zod.def.abort), n3.issues.push(issue(r6));
    }
  }, e11(n3.value, n3)));
  return t8;
}
function initializeContext(e11) {
  let t8 = e11?.target ?? "draft-2020-12";
  return "draft-4" === t8 && (t8 = "draft-04"), "draft-7" === t8 && (t8 = "draft-07"), { processors: e11.processors ?? {}, metadataRegistry: e11?.metadata ?? Me2, target: t8, unrepresentable: e11?.unrepresentable ?? "throw", override: e11?.override ?? (() => {
  }), io: e11?.io ?? "output", counter: 0, seen: /* @__PURE__ */ new Map(), cycles: e11?.cycles ?? "ref", reused: e11?.reused ?? "inline", external: e11?.external ?? void 0 };
}
function process(e11, t8, n3 = { path: [], schemaPath: [] }) {
  var r6;
  const o4 = e11._zod.def, s6 = t8.seen.get(e11);
  if (s6) {
    s6.count++;
    return n3.schemaPath.includes(e11) && (s6.cycle = n3.path), s6.schema;
  }
  const i6 = { schema: {}, count: 1, cycle: void 0, path: n3.path };
  t8.seen.set(e11, i6);
  const a6 = e11._zod.toJSONSchema?.();
  if (a6) i6.schema = a6;
  else {
    const r7 = { ...n3, schemaPath: [...n3.schemaPath, e11], path: n3.path };
    if (e11._zod.processJSONSchema) e11._zod.processJSONSchema(t8, i6.schema, r7);
    else {
      const n4 = i6.schema, s8 = t8.processors[o4.type];
      if (!s8) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${o4.type}`);
      s8(e11, t8, n4, r7);
    }
    const s7 = e11._zod.parent;
    s7 && (i6.ref || (i6.ref = s7), process(s7, t8, r7), t8.seen.get(s7).isParent = true);
  }
  const c6 = t8.metadataRegistry.get(e11);
  c6 && Object.assign(i6.schema, c6), "input" === t8.io && isTransforming(e11) && (delete i6.schema.examples, delete i6.schema.default), "input" === t8.io && i6.schema._prefault && ((r6 = i6.schema).default ?? (r6.default = i6.schema._prefault)), delete i6.schema._prefault;
  return t8.seen.get(e11).schema;
}
function extractDefs(e11, t8) {
  const n3 = e11.seen.get(t8);
  if (!n3) throw new Error("Unprocessed schema. This is a bug in Zod.");
  const r6 = /* @__PURE__ */ new Map();
  for (const t9 of e11.seen.entries()) {
    const n4 = e11.metadataRegistry.get(t9[0])?.id;
    if (n4) {
      const e12 = r6.get(n4);
      if (e12 && e12 !== t9[0]) throw new Error(`Duplicate schema id "${n4}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      r6.set(n4, t9[0]);
    }
  }
  const extractToDef = /* @__PURE__ */ __name((t9) => {
    if (t9[1].schema.$ref) return;
    const r7 = t9[1], { ref: o4, defId: s6 } = ((t10) => {
      const r8 = "draft-2020-12" === e11.target ? "$defs" : "definitions";
      if (e11.external) {
        const n4 = e11.external.registry.get(t10[0])?.id, o6 = e11.external.uri ?? ((e12) => e12);
        if (n4) return { ref: o6(n4) };
        const s8 = t10[1].defId ?? t10[1].schema.id ?? "schema" + e11.counter++;
        return t10[1].defId = s8, { defId: s8, ref: `${o6("__shared")}#/${r8}/${s8}` };
      }
      if (t10[1] === n3) return { ref: "#" };
      const o5 = `#/${r8}/`, s7 = t10[1].schema.id ?? "__schema" + e11.counter++;
      return { defId: s7, ref: o5 + s7 };
    })(t9);
    r7.def = { ...r7.schema }, s6 && (r7.defId = s6);
    const i6 = r7.schema;
    for (const e12 in i6) delete i6[e12];
    i6.$ref = o4;
  }, "extractToDef");
  if ("throw" === e11.cycles) for (const t9 of e11.seen.entries()) {
    const e12 = t9[1];
    if (e12.cycle) throw new Error(`Cycle detected: #/${e12.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
  }
  for (const n4 of e11.seen.entries()) {
    const r7 = n4[1];
    if (t8 === n4[0]) {
      extractToDef(n4);
      continue;
    }
    if (e11.external) {
      const r8 = e11.external.registry.get(n4[0])?.id;
      if (t8 !== n4[0] && r8) {
        extractToDef(n4);
        continue;
      }
    }
    const o4 = e11.metadataRegistry.get(n4[0])?.id;
    o4 ? extractToDef(n4) : (r7.cycle || r7.count > 1 && "ref" === e11.reused) && extractToDef(n4);
  }
}
function finalize(e11, t8) {
  const n3 = e11.seen.get(t8);
  if (!n3) throw new Error("Unprocessed schema. This is a bug in Zod.");
  const flattenRef = /* @__PURE__ */ __name((t9) => {
    const n4 = e11.seen.get(t9);
    if (null === n4.ref) return;
    const r7 = n4.def ?? n4.schema, o5 = { ...r7 }, s6 = n4.ref;
    if (n4.ref = null, s6) {
      flattenRef(s6);
      const n5 = e11.seen.get(s6), i7 = n5.schema;
      !i7.$ref || "draft-07" !== e11.target && "draft-04" !== e11.target && "openapi-3.0" !== e11.target ? Object.assign(r7, i7) : (r7.allOf = r7.allOf ?? [], r7.allOf.push(i7)), Object.assign(r7, o5);
      if (t9._zod.parent === s6) for (const e12 in r7) "$ref" !== e12 && "allOf" !== e12 && (e12 in o5 || delete r7[e12]);
      if (i7.$ref && n5.def) for (const e12 in r7) "$ref" !== e12 && "allOf" !== e12 && e12 in n5.def && JSON.stringify(r7[e12]) === JSON.stringify(n5.def[e12]) && delete r7[e12];
    }
    const i6 = t9._zod.parent;
    if (i6 && i6 !== s6) {
      flattenRef(i6);
      const t10 = e11.seen.get(i6);
      if (t10?.schema.$ref && (r7.$ref = t10.schema.$ref, t10.def)) for (const e12 in r7) "$ref" !== e12 && "allOf" !== e12 && e12 in t10.def && JSON.stringify(r7[e12]) === JSON.stringify(t10.def[e12]) && delete r7[e12];
    }
    e11.override({ zodSchema: t9, jsonSchema: r7, path: n4.path ?? [] });
  }, "flattenRef");
  for (const t9 of [...e11.seen.entries()].reverse()) flattenRef(t9[0]);
  const r6 = {};
  if ("draft-2020-12" === e11.target ? r6.$schema = "https://json-schema.org/draft/2020-12/schema" : "draft-07" === e11.target ? r6.$schema = "http://json-schema.org/draft-07/schema#" : "draft-04" === e11.target ? r6.$schema = "http://json-schema.org/draft-04/schema#" : e11.target, e11.external?.uri) {
    const n4 = e11.external.registry.get(t8)?.id;
    if (!n4) throw new Error("Schema is missing an `id` property");
    r6.$id = e11.external.uri(n4);
  }
  Object.assign(r6, n3.def ?? n3.schema);
  const o4 = e11.external?.defs ?? {};
  for (const t9 of e11.seen.entries()) {
    const e12 = t9[1];
    e12.def && e12.defId && (o4[e12.defId] = e12.def);
  }
  e11.external || Object.keys(o4).length > 0 && ("draft-2020-12" === e11.target ? r6.$defs = o4 : r6.definitions = o4);
  try {
    const n4 = JSON.parse(JSON.stringify(r6));
    return Object.defineProperty(n4, "~standard", { value: { ...t8["~standard"], jsonSchema: { input: createStandardJSONSchemaMethod(t8, "input", e11.processors), output: createStandardJSONSchemaMethod(t8, "output", e11.processors) } }, enumerable: false, writable: false }), n4;
  } catch (e12) {
    throw new Error("Error converting schema to JSON.");
  }
}
function isTransforming(e11, t8) {
  const n3 = t8 ?? { seen: /* @__PURE__ */ new Set() };
  if (n3.seen.has(e11)) return false;
  n3.seen.add(e11);
  const r6 = e11._zod.def;
  if ("transform" === r6.type) return true;
  if ("array" === r6.type) return isTransforming(r6.element, n3);
  if ("set" === r6.type) return isTransforming(r6.valueType, n3);
  if ("lazy" === r6.type) return isTransforming(r6.getter(), n3);
  if ("promise" === r6.type || "optional" === r6.type || "nonoptional" === r6.type || "nullable" === r6.type || "readonly" === r6.type || "default" === r6.type || "prefault" === r6.type) return isTransforming(r6.innerType, n3);
  if ("intersection" === r6.type) return isTransforming(r6.left, n3) || isTransforming(r6.right, n3);
  if ("record" === r6.type || "map" === r6.type) return isTransforming(r6.keyType, n3) || isTransforming(r6.valueType, n3);
  if ("pipe" === r6.type) return isTransforming(r6.in, n3) || isTransforming(r6.out, n3);
  if ("object" === r6.type) {
    for (const e12 in r6.shape) if (isTransforming(r6.shape[e12], n3)) return true;
    return false;
  }
  if ("union" === r6.type) {
    for (const e12 of r6.options) if (isTransforming(e12, n3)) return true;
    return false;
  }
  if ("tuple" === r6.type) {
    for (const e12 of r6.items) if (isTransforming(e12, n3)) return true;
    return !(!r6.rest || !isTransforming(r6.rest, n3));
  }
  return false;
}
function datetime(e11) {
  return (function(e12, t8) {
    return new e12({ type: "string", format: "datetime", check: "string_format", offset: false, local: false, precision: null, ...normalizeParams(t8) });
  })(Ve2, e11);
}
function date(e11) {
  return (function(e12, t8) {
    return new e12({ type: "string", format: "date", check: "string_format", ...normalizeParams(t8) });
  })(Be2, e11);
}
function time(e11) {
  return (function(e12, t8) {
    return new e12({ type: "string", format: "time", check: "string_format", precision: null, ...normalizeParams(t8) });
  })(qe2, e11);
}
function duration(e11) {
  return (function(e12, t8) {
    return new e12({ type: "string", format: "duration", check: "string_format", ...normalizeParams(t8) });
  })(Ge2, e11);
}
function unknown() {
  return new xt2({ type: "unknown" });
}
function never(e11) {
  return (function(e12, t8) {
    return new e12({ type: "never", ...normalizeParams(t8) });
  })(Ct2, e11);
}
function optional(e11) {
  return new Ht2({ type: "optional", innerType: e11 });
}
function nullable(e11) {
  return new Wt2({ type: "nullable", innerType: e11 });
}
function pipe(e11, t8) {
  return new Bt2({ type: "pipe", in: e11, out: t8 });
}
var s2, i2, JOSEError, JOSENotSupported, JWSInvalid, JWTInvalid, unusable, isAlgorithm, withAlg, isCryptoKey, isKeyObject, isKeyLike, isJWK, a3, handleJWK, tag, jwkMatchesOp, epoch, c3, u2, JWTClaimsBuilder, FlattenedSign, CompactSign, SignJWT, $ZodAsyncError, $ZodEncodeError, d2, p3, l3, f3, h4, initializer$1, m5, y3, _parse, _parseAsync, _safeParse, g3, _safeParseAsync, w3, _encode, _decode, _encodeAsync, _decodeAsync, _safeEncode, _safeDecode, _safeEncodeAsync, _safeDecodeAsync, v3, z3, b2, S4, $3, k3, E3, P3, uuid, O4, A2, T3, j2, R3, x3, C3, Z3, I3, D3, J3, K3, N3, H3, L3, W3, U3, M2, F3, V3, B3, q3, G3, Y3, Doc, X3, Q3, ee3, te3, ne3, re3, oe3, se3, ie3, ae3, ce3, ue3, de3, pe2, le2, fe3, he2, me2, ye2, ge2, we2, ve2, _e3, ze2, be3, Se2, $e2, ke2, Ee2, Pe2, Oe, Ae2, Te2, je2, Re2, xe2, Ce2, Ze2, Ie2, De2, Je2, Ke2, Ne2, He2, Le2, We2, Ue2, $ZodRegistry, Me2, createStandardJSONSchemaMethod, Fe2, optionalProcessor, Ve2, Be2, qe2, Ge2, Ye2, Xe2, Qe2, et2, tt2, nt2, rt2, ot2, st2, it2, at2, ct2, ut2, dt2, pt2, lt2, ft2, ht2, mt2, yt2, gt2, wt2, vt2, _t2, zt2, bt2, St2, $t2, kt2, Et2, Pt2, Ot2, At2, Tt2, jt2, Rt2, xt2, Ct2, Zt2, It2, Dt2, Jt2, Kt2, Nt2, Ht2, Lt2, Wt2, Ut2, Mt2, Ft2, Vt2, Bt2, qt2, Gt2, Yt2, Xt2, Qt2;
var init_login_post = __esm({
  ".output/server/chunks/routes/api/login.post.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_nitro();
    init_prisma();
    init_bcrypt();
    s2 = new TextEncoder();
    i2 = new TextDecoder();
    __name(encode$2, "encode$2");
    __name(decode$1, "decode$1");
    __name(encode$1, "encode$1");
    JOSEError = class extends Error {
      static {
        __name(this, "JOSEError");
      }
      static code = "ERR_JOSE_GENERIC";
      code = "ERR_JOSE_GENERIC";
      constructor(e11, t8) {
        super(e11, t8), this.name = this.constructor.name, Error.captureStackTrace?.(this, this.constructor);
      }
    };
    JOSENotSupported = class extends JOSEError {
      static {
        __name(this, "JOSENotSupported");
      }
      static code = "ERR_JOSE_NOT_SUPPORTED";
      code = "ERR_JOSE_NOT_SUPPORTED";
    };
    JWSInvalid = class extends JOSEError {
      static {
        __name(this, "JWSInvalid");
      }
      static code = "ERR_JWS_INVALID";
      code = "ERR_JWS_INVALID";
    };
    JWTInvalid = class extends JOSEError {
      static {
        __name(this, "JWTInvalid");
      }
      static code = "ERR_JWT_INVALID";
      code = "ERR_JWT_INVALID";
    };
    unusable = /* @__PURE__ */ __name((e11, t8 = "algorithm.name") => new TypeError(`CryptoKey does not support this operation, its ${t8} must be ${e11}`), "unusable");
    isAlgorithm = /* @__PURE__ */ __name((e11, t8) => e11.name === t8, "isAlgorithm");
    __name(getHashLength, "getHashLength");
    __name(checkSigCryptoKey, "checkSigCryptoKey");
    __name(message, "message");
    withAlg = /* @__PURE__ */ __name((e11, t8, ...n3) => message(`Key for the ${e11} algorithm must be `, t8, ...n3), "withAlg");
    isCryptoKey = /* @__PURE__ */ __name((e11) => {
      if ("CryptoKey" === e11?.[Symbol.toStringTag]) return true;
      try {
        return e11 instanceof CryptoKey;
      } catch {
        return false;
      }
    }, "isCryptoKey");
    isKeyObject = /* @__PURE__ */ __name((e11) => "KeyObject" === e11?.[Symbol.toStringTag], "isKeyObject");
    isKeyLike = /* @__PURE__ */ __name((e11) => isCryptoKey(e11) || isKeyObject(e11), "isKeyLike");
    __name(isObject$1, "isObject$1");
    __name(jwkToKey, "jwkToKey");
    isJWK = /* @__PURE__ */ __name((e11) => isObject$1(e11) && "string" == typeof e11.kty, "isJWK");
    handleJWK = /* @__PURE__ */ __name(async (e11, t8, n3, r6 = false) => {
      a3 ||= /* @__PURE__ */ new WeakMap();
      let o4 = a3.get(e11);
      if (o4?.[n3]) return o4[n3];
      const s6 = await jwkToKey({ ...t8, alg: n3 });
      return r6 && Object.freeze(e11), o4 ? o4[n3] = s6 : a3.set(e11, { [n3]: s6 }), s6;
    }, "handleJWK");
    __name(normalizeKey, "normalizeKey");
    tag = /* @__PURE__ */ __name((e11) => e11?.[Symbol.toStringTag], "tag");
    jwkMatchesOp = /* @__PURE__ */ __name((e11, t8, n3) => {
      if (void 0 !== t8.use) {
        let e12;
        switch (n3) {
          case "sign":
          case "verify":
            e12 = "sig";
            break;
          case "encrypt":
          case "decrypt":
            e12 = "enc";
        }
        if (t8.use !== e12) throw new TypeError(`Invalid key for this operation, its "use" must be "${e12}" when present`);
      }
      if (void 0 !== t8.alg && t8.alg !== e11) throw new TypeError(`Invalid key for this operation, its "alg" must be "${e11}" when present`);
      if (Array.isArray(t8.key_ops)) {
        let r6;
        switch (true) {
          case "sign" === n3:
          case "dir" === e11:
          case e11.includes("CBC-HS"):
            r6 = n3;
            break;
          case e11.startsWith("PBES2"):
            r6 = "deriveBits";
            break;
          case /^A\d{3}(?:GCM)?(?:KW)?$/.test(e11):
            r6 = !e11.includes("GCM") && e11.endsWith("KW") ? "unwrapKey" : n3;
            break;
          case "encrypt" === n3:
            r6 = "wrapKey";
            break;
          case "decrypt" === n3:
            r6 = e11.startsWith("RSA") ? "unwrapKey" : "deriveBits";
        }
        if (r6 && false === t8.key_ops?.includes?.(r6)) throw new TypeError(`Invalid key for this operation, its "key_ops" must include "${r6}" when present`);
      }
      return true;
    }, "jwkMatchesOp");
    __name(checkKeyType, "checkKeyType");
    __name(getSigKey, "getSigKey");
    epoch = /* @__PURE__ */ __name((e11) => Math.floor(e11.getTime() / 1e3), "epoch");
    c3 = 86400;
    u2 = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
    __name(secs, "secs");
    __name(validateInput, "validateInput");
    JWTClaimsBuilder = class {
      static {
        __name(this, "JWTClaimsBuilder");
      }
      #e;
      constructor(e11) {
        if (!isObject$1(e11)) throw new TypeError("JWT Claims Set MUST be an object");
        this.#e = structuredClone(e11);
      }
      data() {
        return s2.encode(JSON.stringify(this.#e));
      }
      get iss() {
        return this.#e.iss;
      }
      set iss(e11) {
        this.#e.iss = e11;
      }
      get sub() {
        return this.#e.sub;
      }
      set sub(e11) {
        this.#e.sub = e11;
      }
      get aud() {
        return this.#e.aud;
      }
      set aud(e11) {
        this.#e.aud = e11;
      }
      set jti(e11) {
        this.#e.jti = e11;
      }
      set nbf(e11) {
        "number" == typeof e11 ? this.#e.nbf = validateInput("setNotBefore", e11) : e11 instanceof Date ? this.#e.nbf = validateInput("setNotBefore", epoch(e11)) : this.#e.nbf = epoch(/* @__PURE__ */ new Date()) + secs(e11);
      }
      set exp(e11) {
        "number" == typeof e11 ? this.#e.exp = validateInput("setExpirationTime", e11) : e11 instanceof Date ? this.#e.exp = validateInput("setExpirationTime", epoch(e11)) : this.#e.exp = epoch(/* @__PURE__ */ new Date()) + secs(e11);
      }
      set iat(e11) {
        void 0 === e11 ? this.#e.iat = epoch(/* @__PURE__ */ new Date()) : e11 instanceof Date ? this.#e.iat = validateInput("setIssuedAt", epoch(e11)) : this.#e.iat = validateInput("setIssuedAt", "string" == typeof e11 ? epoch(/* @__PURE__ */ new Date()) + secs(e11) : e11);
      }
    };
    __name(sign2, "sign");
    FlattenedSign = class {
      static {
        __name(this, "FlattenedSign");
      }
      #e;
      #t;
      #n;
      constructor(e11) {
        if (!(e11 instanceof Uint8Array)) throw new TypeError("payload must be an instance of Uint8Array");
        this.#e = e11;
      }
      setProtectedHeader(e11) {
        if (this.#t) throw new TypeError("setProtectedHeader can only be called once");
        return this.#t = e11, this;
      }
      setUnprotectedHeader(e11) {
        if (this.#n) throw new TypeError("setUnprotectedHeader can only be called once");
        return this.#n = e11, this;
      }
      async sign(e11, t8) {
        if (!this.#t && !this.#n) throw new JWSInvalid("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");
        if (!(function(...e12) {
          const t9 = e12.filter(Boolean);
          if (0 === t9.length || 1 === t9.length) return true;
          let n4;
          for (const e13 of t9) {
            const t10 = Object.keys(e13);
            if (n4 && 0 !== n4.size) for (const e14 of t10) {
              if (n4.has(e14)) return false;
              n4.add(e14);
            }
            else n4 = new Set(t10);
          }
          return true;
        })(this.#t, this.#n)) throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
        const n3 = { ...this.#t, ...this.#n }, r6 = (function(e12, t9, n4, r7, o5) {
          if (void 0 !== o5.crit && void 0 === r7?.crit) throw new e12('"crit" (Critical) Header Parameter MUST be integrity protected');
          if (!r7 || void 0 === r7.crit) return /* @__PURE__ */ new Set();
          if (!Array.isArray(r7.crit) || 0 === r7.crit.length || r7.crit.some((e13) => "string" != typeof e13 || 0 === e13.length)) throw new e12('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
          let s7;
          s7 = void 0 !== n4 ? new Map([...Object.entries(n4), ...t9.entries()]) : t9;
          for (const t10 of r7.crit) {
            if (!s7.has(t10)) throw new JOSENotSupported(`Extension Header Parameter "${t10}" is not recognized`);
            if (void 0 === o5[t10]) throw new e12(`Extension Header Parameter "${t10}" is missing`);
            if (s7.get(t10) && void 0 === r7[t10]) throw new e12(`Extension Header Parameter "${t10}" MUST be integrity protected`);
          }
          return new Set(r7.crit);
        })(JWSInvalid, /* @__PURE__ */ new Map([["b64", true]]), t8?.crit, this.#t, n3);
        let o4 = true;
        if (r6.has("b64") && (o4 = this.#t.b64, "boolean" != typeof o4)) throw new JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
        const { alg: s6 } = n3;
        if ("string" != typeof s6 || !s6) throw new JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
        let i6, a6, c6, u5;
        checkKeyType(s6, e11, "sign"), o4 ? (i6 = encode$1(this.#e), a6 = encode$2(i6)) : (a6 = this.#e, i6 = ""), this.#t ? (c6 = encode$1(JSON.stringify(this.#t)), u5 = encode$2(c6)) : (c6 = "", u5 = new Uint8Array());
        const d4 = (function(...e12) {
          const t9 = e12.reduce((e13, { length: t10 }) => e13 + t10, 0), n4 = new Uint8Array(t9);
          let r7 = 0;
          for (const t10 of e12) n4.set(t10, r7), r7 += t10.length;
          return n4;
        })(u5, encode$2("."), a6), p5 = await normalizeKey(e11, s6), l6 = { signature: encode$1(await sign2(s6, p5, d4)), payload: i6 };
        return this.#n && (l6.header = this.#n), this.#t && (l6.protected = c6), l6;
      }
    };
    CompactSign = class {
      static {
        __name(this, "CompactSign");
      }
      #r;
      constructor(e11) {
        this.#r = new FlattenedSign(e11);
      }
      setProtectedHeader(e11) {
        return this.#r.setProtectedHeader(e11), this;
      }
      async sign(e11, t8) {
        const n3 = await this.#r.sign(e11, t8);
        if (void 0 === n3.payload) throw new TypeError("use the flattened module for creating JWS with b64: false");
        return `${n3.protected}.${n3.payload}.${n3.signature}`;
      }
    };
    SignJWT = class {
      static {
        __name(this, "SignJWT");
      }
      #t;
      #o;
      constructor(e11 = {}) {
        this.#o = new JWTClaimsBuilder(e11);
      }
      setIssuer(e11) {
        return this.#o.iss = e11, this;
      }
      setSubject(e11) {
        return this.#o.sub = e11, this;
      }
      setAudience(e11) {
        return this.#o.aud = e11, this;
      }
      setJti(e11) {
        return this.#o.jti = e11, this;
      }
      setNotBefore(e11) {
        return this.#o.nbf = e11, this;
      }
      setExpirationTime(e11) {
        return this.#o.exp = e11, this;
      }
      setIssuedAt(e11) {
        return this.#o.iat = e11, this;
      }
      setProtectedHeader(e11) {
        return this.#t = e11, this;
      }
      async sign(e11, t8) {
        const n3 = new CompactSign(this.#o.data());
        if (n3.setProtectedHeader(this.#t), Array.isArray(this.#t?.crit) && this.#t.crit.includes("b64") && false === this.#t.b64) throw new JWTInvalid("JWTs MUST NOT use unencoded payload");
        return n3.sign(e11, t8);
      }
    };
    __name($constructor, "$constructor");
    $ZodAsyncError = class extends Error {
      static {
        __name(this, "$ZodAsyncError");
      }
      constructor() {
        super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
      }
    };
    $ZodEncodeError = class extends Error {
      static {
        __name(this, "$ZodEncodeError");
      }
      constructor(e11) {
        super(`Encountered unidirectional transform during encode: ${e11}`), this.name = "ZodEncodeError";
      }
    };
    d2 = {};
    __name(config, "config");
    __name(getEnumValues, "getEnumValues");
    __name(jsonStringifyReplacer, "jsonStringifyReplacer");
    __name(cached, "cached");
    __name(nullish, "nullish");
    __name(cleanRegex, "cleanRegex");
    p3 = Symbol("evaluating");
    __name(defineLazy, "defineLazy");
    __name(assignProp, "assignProp");
    __name(mergeDefs, "mergeDefs");
    __name(esc, "esc");
    l3 = "captureStackTrace" in Error ? Error.captureStackTrace : (...e11) => {
    };
    __name(isObject, "isObject");
    f3 = cached(() => {
      if ("undefined" != typeof navigator && "Cloudflare-Workers"?.includes("Cloudflare")) return false;
      try {
        return new Function(""), true;
      } catch (e11) {
        return false;
      }
    });
    __name(isPlainObject, "isPlainObject");
    __name(shallowClone, "shallowClone");
    h4 = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
    __name(escapeRegex, "escapeRegex");
    __name(clone2, "clone");
    __name(normalizeParams, "normalizeParams");
    __name(aborted, "aborted");
    __name(prefixIssues, "prefixIssues");
    __name(unwrapMessage, "unwrapMessage");
    __name(finalizeIssue, "finalizeIssue");
    __name(getLengthableOrigin, "getLengthableOrigin");
    __name(issue, "issue");
    initializer$1 = /* @__PURE__ */ __name((e11, t8) => {
      e11.name = "$ZodError", Object.defineProperty(e11, "_zod", { value: e11._zod, enumerable: false }), Object.defineProperty(e11, "issues", { value: t8, enumerable: false }), e11.message = JSON.stringify(t8, jsonStringifyReplacer, 2), Object.defineProperty(e11, "toString", { value: /* @__PURE__ */ __name(() => e11.message, "value"), enumerable: false });
    }, "initializer$1");
    m5 = $constructor("$ZodError", initializer$1);
    y3 = $constructor("$ZodError", initializer$1, { Parent: Error });
    __name(flattenError, "flattenError");
    _parse = /* @__PURE__ */ __name((e11) => (t8, n3, r6, o4) => {
      const s6 = r6 ? Object.assign(r6, { async: false }) : { async: false }, i6 = t8._zod.run({ value: n3, issues: [] }, s6);
      if (i6 instanceof Promise) throw new $ZodAsyncError();
      if (i6.issues.length) {
        const t9 = new (o4?.Err ?? e11)(i6.issues.map((e12) => finalizeIssue(e12, s6, config())));
        throw l3(t9, o4?.callee), t9;
      }
      return i6.value;
    }, "_parse");
    _parseAsync = /* @__PURE__ */ __name((e11) => async (t8, n3, r6, o4) => {
      const s6 = r6 ? Object.assign(r6, { async: true }) : { async: true };
      let i6 = t8._zod.run({ value: n3, issues: [] }, s6);
      if (i6 instanceof Promise && (i6 = await i6), i6.issues.length) {
        const t9 = new (o4?.Err ?? e11)(i6.issues.map((e12) => finalizeIssue(e12, s6, config())));
        throw l3(t9, o4?.callee), t9;
      }
      return i6.value;
    }, "_parseAsync");
    _safeParse = /* @__PURE__ */ __name((e11) => (t8, n3, r6) => {
      const o4 = r6 ? { ...r6, async: false } : { async: false }, s6 = t8._zod.run({ value: n3, issues: [] }, o4);
      if (s6 instanceof Promise) throw new $ZodAsyncError();
      return s6.issues.length ? { success: false, error: new (e11 ?? m5)(s6.issues.map((e12) => finalizeIssue(e12, o4, config()))) } : { success: true, data: s6.value };
    }, "_safeParse");
    g3 = _safeParse(y3);
    _safeParseAsync = /* @__PURE__ */ __name((e11) => async (t8, n3, r6) => {
      const o4 = r6 ? Object.assign(r6, { async: true }) : { async: true };
      let s6 = t8._zod.run({ value: n3, issues: [] }, o4);
      return s6 instanceof Promise && (s6 = await s6), s6.issues.length ? { success: false, error: new e11(s6.issues.map((e12) => finalizeIssue(e12, o4, config()))) } : { success: true, data: s6.value };
    }, "_safeParseAsync");
    w3 = _safeParseAsync(y3);
    _encode = /* @__PURE__ */ __name((e11) => (t8, n3, r6) => {
      const o4 = r6 ? Object.assign(r6, { direction: "backward" }) : { direction: "backward" };
      return _parse(e11)(t8, n3, o4);
    }, "_encode");
    _decode = /* @__PURE__ */ __name((e11) => (t8, n3, r6) => _parse(e11)(t8, n3, r6), "_decode");
    _encodeAsync = /* @__PURE__ */ __name((e11) => async (t8, n3, r6) => {
      const o4 = r6 ? Object.assign(r6, { direction: "backward" }) : { direction: "backward" };
      return _parseAsync(e11)(t8, n3, o4);
    }, "_encodeAsync");
    _decodeAsync = /* @__PURE__ */ __name((e11) => async (t8, n3, r6) => _parseAsync(e11)(t8, n3, r6), "_decodeAsync");
    _safeEncode = /* @__PURE__ */ __name((e11) => (t8, n3, r6) => {
      const o4 = r6 ? Object.assign(r6, { direction: "backward" }) : { direction: "backward" };
      return _safeParse(e11)(t8, n3, o4);
    }, "_safeEncode");
    _safeDecode = /* @__PURE__ */ __name((e11) => (t8, n3, r6) => _safeParse(e11)(t8, n3, r6), "_safeDecode");
    _safeEncodeAsync = /* @__PURE__ */ __name((e11) => async (t8, n3, r6) => {
      const o4 = r6 ? Object.assign(r6, { direction: "backward" }) : { direction: "backward" };
      return _safeParseAsync(e11)(t8, n3, o4);
    }, "_safeEncodeAsync");
    _safeDecodeAsync = /* @__PURE__ */ __name((e11) => async (t8, n3, r6) => _safeParseAsync(e11)(t8, n3, r6), "_safeDecodeAsync");
    v3 = /^[cC][^\s-]{8,}$/;
    z3 = /^[0-9a-z]+$/;
    b2 = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
    S4 = /^[0-9a-vA-V]{20}$/;
    $3 = /^[A-Za-z0-9]{27}$/;
    k3 = /^[a-zA-Z0-9_-]{21}$/;
    E3 = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
    P3 = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
    uuid = /* @__PURE__ */ __name((e11) => e11 ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e11}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, "uuid");
    O4 = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
    A2 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
    T3 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
    j2 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
    R3 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
    x3 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
    C3 = /^[A-Za-z0-9_-]*$/;
    Z3 = /^\+[1-9]\d{6,14}$/;
    I3 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
    D3 = new RegExp(`^${I3}$`);
    __name(timeSource, "timeSource");
    J3 = /^[^A-Z]*$/;
    K3 = /^[^a-z]*$/;
    N3 = $constructor("$ZodCheck", (e11, t8) => {
      var n3;
      e11._zod ?? (e11._zod = {}), e11._zod.def = t8, (n3 = e11._zod).onattach ?? (n3.onattach = []);
    });
    H3 = $constructor("$ZodCheckMaxLength", (e11, t8) => {
      var n3;
      N3.init(e11, t8), (n3 = e11._zod.def).when ?? (n3.when = (e12) => {
        const t9 = e12.value;
        return !nullish(t9) && void 0 !== t9.length;
      }), e11._zod.onattach.push((e12) => {
        const n4 = e12._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        t8.maximum < n4 && (e12._zod.bag.maximum = t8.maximum);
      }), e11._zod.check = (n4) => {
        const r6 = n4.value;
        if (r6.length <= t8.maximum) return;
        const o4 = getLengthableOrigin(r6);
        n4.issues.push({ origin: o4, code: "too_big", maximum: t8.maximum, inclusive: true, input: r6, inst: e11, continue: !t8.abort });
      };
    });
    L3 = $constructor("$ZodCheckMinLength", (e11, t8) => {
      var n3;
      N3.init(e11, t8), (n3 = e11._zod.def).when ?? (n3.when = (e12) => {
        const t9 = e12.value;
        return !nullish(t9) && void 0 !== t9.length;
      }), e11._zod.onattach.push((e12) => {
        const n4 = e12._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        t8.minimum > n4 && (e12._zod.bag.minimum = t8.minimum);
      }), e11._zod.check = (n4) => {
        const r6 = n4.value;
        if (r6.length >= t8.minimum) return;
        const o4 = getLengthableOrigin(r6);
        n4.issues.push({ origin: o4, code: "too_small", minimum: t8.minimum, inclusive: true, input: r6, inst: e11, continue: !t8.abort });
      };
    });
    W3 = $constructor("$ZodCheckLengthEquals", (e11, t8) => {
      var n3;
      N3.init(e11, t8), (n3 = e11._zod.def).when ?? (n3.when = (e12) => {
        const t9 = e12.value;
        return !nullish(t9) && void 0 !== t9.length;
      }), e11._zod.onattach.push((e12) => {
        const n4 = e12._zod.bag;
        n4.minimum = t8.length, n4.maximum = t8.length, n4.length = t8.length;
      }), e11._zod.check = (n4) => {
        const r6 = n4.value, o4 = r6.length;
        if (o4 === t8.length) return;
        const s6 = getLengthableOrigin(r6), i6 = o4 > t8.length;
        n4.issues.push({ origin: s6, ...i6 ? { code: "too_big", maximum: t8.length } : { code: "too_small", minimum: t8.length }, inclusive: true, exact: true, input: n4.value, inst: e11, continue: !t8.abort });
      };
    });
    U3 = $constructor("$ZodCheckStringFormat", (e11, t8) => {
      var n3, r6;
      N3.init(e11, t8), e11._zod.onattach.push((e12) => {
        const n4 = e12._zod.bag;
        n4.format = t8.format, t8.pattern && (n4.patterns ?? (n4.patterns = /* @__PURE__ */ new Set()), n4.patterns.add(t8.pattern));
      }), t8.pattern ? (n3 = e11._zod).check ?? (n3.check = (n4) => {
        t8.pattern.lastIndex = 0, t8.pattern.test(n4.value) || n4.issues.push({ origin: "string", code: "invalid_format", format: t8.format, input: n4.value, ...t8.pattern ? { pattern: t8.pattern.toString() } : {}, inst: e11, continue: !t8.abort });
      }) : (r6 = e11._zod).check ?? (r6.check = () => {
      });
    });
    M2 = $constructor("$ZodCheckRegex", (e11, t8) => {
      U3.init(e11, t8), e11._zod.check = (n3) => {
        t8.pattern.lastIndex = 0, t8.pattern.test(n3.value) || n3.issues.push({ origin: "string", code: "invalid_format", format: "regex", input: n3.value, pattern: t8.pattern.toString(), inst: e11, continue: !t8.abort });
      };
    });
    F3 = $constructor("$ZodCheckLowerCase", (e11, t8) => {
      t8.pattern ?? (t8.pattern = J3), U3.init(e11, t8);
    });
    V3 = $constructor("$ZodCheckUpperCase", (e11, t8) => {
      t8.pattern ?? (t8.pattern = K3), U3.init(e11, t8);
    });
    B3 = $constructor("$ZodCheckIncludes", (e11, t8) => {
      N3.init(e11, t8);
      const n3 = escapeRegex(t8.includes), r6 = new RegExp("number" == typeof t8.position ? `^.{${t8.position}}${n3}` : n3);
      t8.pattern = r6, e11._zod.onattach.push((e12) => {
        const t9 = e12._zod.bag;
        t9.patterns ?? (t9.patterns = /* @__PURE__ */ new Set()), t9.patterns.add(r6);
      }), e11._zod.check = (n4) => {
        n4.value.includes(t8.includes, t8.position) || n4.issues.push({ origin: "string", code: "invalid_format", format: "includes", includes: t8.includes, input: n4.value, inst: e11, continue: !t8.abort });
      };
    });
    q3 = $constructor("$ZodCheckStartsWith", (e11, t8) => {
      N3.init(e11, t8);
      const n3 = new RegExp(`^${escapeRegex(t8.prefix)}.*`);
      t8.pattern ?? (t8.pattern = n3), e11._zod.onattach.push((e12) => {
        const t9 = e12._zod.bag;
        t9.patterns ?? (t9.patterns = /* @__PURE__ */ new Set()), t9.patterns.add(n3);
      }), e11._zod.check = (n4) => {
        n4.value.startsWith(t8.prefix) || n4.issues.push({ origin: "string", code: "invalid_format", format: "starts_with", prefix: t8.prefix, input: n4.value, inst: e11, continue: !t8.abort });
      };
    });
    G3 = $constructor("$ZodCheckEndsWith", (e11, t8) => {
      N3.init(e11, t8);
      const n3 = new RegExp(`.*${escapeRegex(t8.suffix)}$`);
      t8.pattern ?? (t8.pattern = n3), e11._zod.onattach.push((e12) => {
        const t9 = e12._zod.bag;
        t9.patterns ?? (t9.patterns = /* @__PURE__ */ new Set()), t9.patterns.add(n3);
      }), e11._zod.check = (n4) => {
        n4.value.endsWith(t8.suffix) || n4.issues.push({ origin: "string", code: "invalid_format", format: "ends_with", suffix: t8.suffix, input: n4.value, inst: e11, continue: !t8.abort });
      };
    });
    Y3 = $constructor("$ZodCheckOverwrite", (e11, t8) => {
      N3.init(e11, t8), e11._zod.check = (e12) => {
        e12.value = t8.tx(e12.value);
      };
    });
    Doc = class {
      static {
        __name(this, "Doc");
      }
      constructor(e11 = []) {
        this.content = [], this.indent = 0, this && (this.args = e11);
      }
      indented(e11) {
        this.indent += 1, e11(this), this.indent -= 1;
      }
      write(e11) {
        if ("function" == typeof e11) return e11(this, { execution: "sync" }), void e11(this, { execution: "async" });
        const t8 = e11.split("\n").filter((e12) => e12), n3 = Math.min(...t8.map((e12) => e12.length - e12.trimStart().length)), r6 = t8.map((e12) => e12.slice(n3)).map((e12) => " ".repeat(2 * this.indent) + e12);
        for (const e12 of r6) this.content.push(e12);
      }
      compile() {
        const e11 = Function, t8 = this?.args;
        return new e11(...t8, [...(this?.content ?? [""]).map((e12) => `  ${e12}`)].join("\n"));
      }
    };
    X3 = { major: 4, minor: 3, patch: 6 };
    Q3 = $constructor("$ZodType", (e11, t8) => {
      var n3;
      e11 ?? (e11 = {}), e11._zod.def = t8, e11._zod.bag = e11._zod.bag || {}, e11._zod.version = X3;
      const r6 = [...e11._zod.def.checks ?? []];
      e11._zod.traits.has("$ZodCheck") && r6.unshift(e11);
      for (const t9 of r6) for (const n4 of t9._zod.onattach) n4(e11);
      if (0 === r6.length) (n3 = e11._zod).deferred ?? (n3.deferred = []), e11._zod.deferred?.push(() => {
        e11._zod.run = e11._zod.parse;
      });
      else {
        const runChecks = /* @__PURE__ */ __name((e12, t9, n4) => {
          let r7, o4 = aborted(e12);
          for (const s6 of t9) {
            if (s6._zod.def.when) {
              if (!s6._zod.def.when(e12)) continue;
            } else if (o4) continue;
            const t10 = e12.issues.length, i6 = s6._zod.check(e12);
            if (i6 instanceof Promise && false === n4?.async) throw new $ZodAsyncError();
            if (r7 || i6 instanceof Promise) r7 = (r7 ?? Promise.resolve()).then(async () => {
              await i6;
              e12.issues.length !== t10 && (o4 || (o4 = aborted(e12, t10)));
            });
            else {
              if (e12.issues.length === t10) continue;
              o4 || (o4 = aborted(e12, t10));
            }
          }
          return r7 ? r7.then(() => e12) : e12;
        }, "runChecks"), handleCanaryResult = /* @__PURE__ */ __name((t9, n4, o4) => {
          if (aborted(t9)) return t9.aborted = true, t9;
          const s6 = runChecks(n4, r6, o4);
          if (s6 instanceof Promise) {
            if (false === o4.async) throw new $ZodAsyncError();
            return s6.then((t10) => e11._zod.parse(t10, o4));
          }
          return e11._zod.parse(s6, o4);
        }, "handleCanaryResult");
        e11._zod.run = (t9, n4) => {
          if (n4.skipChecks) return e11._zod.parse(t9, n4);
          if ("backward" === n4.direction) {
            const r7 = e11._zod.parse({ value: t9.value, issues: [] }, { ...n4, skipChecks: true });
            return r7 instanceof Promise ? r7.then((e12) => handleCanaryResult(e12, t9, n4)) : handleCanaryResult(r7, t9, n4);
          }
          const o4 = e11._zod.parse(t9, n4);
          if (o4 instanceof Promise) {
            if (false === n4.async) throw new $ZodAsyncError();
            return o4.then((e12) => runChecks(e12, r6, n4));
          }
          return runChecks(o4, r6, n4);
        };
      }
      defineLazy(e11, "~standard", () => ({ validate: /* @__PURE__ */ __name((t9) => {
        try {
          const n4 = g3(e11, t9);
          return n4.success ? { value: n4.data } : { issues: n4.error?.issues };
        } catch (n4) {
          return w3(e11, t9).then((e12) => e12.success ? { value: e12.data } : { issues: e12.error?.issues });
        }
      }, "validate"), vendor: "zod", version: 1 }));
    });
    ee3 = $constructor("$ZodString", (e11, t8) => {
      var n3;
      Q3.init(e11, t8), e11._zod.pattern = [...e11?._zod.bag?.patterns ?? []].pop() ?? (n3 = e11._zod.bag, new RegExp(`^${n3 ? `[\\s\\S]{${n3?.minimum ?? 0},${n3?.maximum ?? ""}}` : "[\\s\\S]*"}$`)), e11._zod.parse = (n4, r6) => {
        if (t8.coerce) try {
          n4.value = String(n4.value);
        } catch (r7) {
        }
        return "string" == typeof n4.value || n4.issues.push({ expected: "string", code: "invalid_type", input: n4.value, inst: e11 }), n4;
      };
    });
    te3 = $constructor("$ZodStringFormat", (e11, t8) => {
      U3.init(e11, t8), ee3.init(e11, t8);
    });
    ne3 = $constructor("$ZodGUID", (e11, t8) => {
      t8.pattern ?? (t8.pattern = P3), te3.init(e11, t8);
    });
    re3 = $constructor("$ZodUUID", (e11, t8) => {
      if (t8.version) {
        const e12 = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[t8.version];
        if (void 0 === e12) throw new Error(`Invalid UUID version: "${t8.version}"`);
        t8.pattern ?? (t8.pattern = uuid(e12));
      } else t8.pattern ?? (t8.pattern = uuid());
      te3.init(e11, t8);
    });
    oe3 = $constructor("$ZodEmail", (e11, t8) => {
      t8.pattern ?? (t8.pattern = O4), te3.init(e11, t8);
    });
    se3 = $constructor("$ZodURL", (e11, t8) => {
      te3.init(e11, t8), e11._zod.check = (n3) => {
        try {
          const r6 = n3.value.trim(), o4 = new URL(r6);
          return t8.hostname && (t8.hostname.lastIndex = 0, t8.hostname.test(o4.hostname) || n3.issues.push({ code: "invalid_format", format: "url", note: "Invalid hostname", pattern: t8.hostname.source, input: n3.value, inst: e11, continue: !t8.abort })), t8.protocol && (t8.protocol.lastIndex = 0, t8.protocol.test(o4.protocol.endsWith(":") ? o4.protocol.slice(0, -1) : o4.protocol) || n3.issues.push({ code: "invalid_format", format: "url", note: "Invalid protocol", pattern: t8.protocol.source, input: n3.value, inst: e11, continue: !t8.abort })), void (t8.normalize ? n3.value = o4.href : n3.value = r6);
        } catch (r6) {
          n3.issues.push({ code: "invalid_format", format: "url", input: n3.value, inst: e11, continue: !t8.abort });
        }
      };
    });
    ie3 = $constructor("$ZodEmoji", (e11, t8) => {
      t8.pattern ?? (t8.pattern = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), te3.init(e11, t8);
    });
    ae3 = $constructor("$ZodNanoID", (e11, t8) => {
      t8.pattern ?? (t8.pattern = k3), te3.init(e11, t8);
    });
    ce3 = $constructor("$ZodCUID", (e11, t8) => {
      t8.pattern ?? (t8.pattern = v3), te3.init(e11, t8);
    });
    ue3 = $constructor("$ZodCUID2", (e11, t8) => {
      t8.pattern ?? (t8.pattern = z3), te3.init(e11, t8);
    });
    de3 = $constructor("$ZodULID", (e11, t8) => {
      t8.pattern ?? (t8.pattern = b2), te3.init(e11, t8);
    });
    pe2 = $constructor("$ZodXID", (e11, t8) => {
      t8.pattern ?? (t8.pattern = S4), te3.init(e11, t8);
    });
    le2 = $constructor("$ZodKSUID", (e11, t8) => {
      t8.pattern ?? (t8.pattern = $3), te3.init(e11, t8);
    });
    fe3 = $constructor("$ZodISODateTime", (e11, t8) => {
      t8.pattern ?? (t8.pattern = (function(e12) {
        const t9 = timeSource({ precision: e12.precision }), n3 = ["Z"];
        e12.local && n3.push(""), e12.offset && n3.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
        const r6 = `${t9}(?:${n3.join("|")})`;
        return new RegExp(`^${I3}T(?:${r6})$`);
      })(t8)), te3.init(e11, t8);
    });
    he2 = $constructor("$ZodISODate", (e11, t8) => {
      t8.pattern ?? (t8.pattern = D3), te3.init(e11, t8);
    });
    me2 = $constructor("$ZodISOTime", (e11, t8) => {
      t8.pattern ?? (t8.pattern = new RegExp(`^${timeSource(t8)}$`)), te3.init(e11, t8);
    });
    ye2 = $constructor("$ZodISODuration", (e11, t8) => {
      t8.pattern ?? (t8.pattern = E3), te3.init(e11, t8);
    });
    ge2 = $constructor("$ZodIPv4", (e11, t8) => {
      t8.pattern ?? (t8.pattern = A2), te3.init(e11, t8), e11._zod.bag.format = "ipv4";
    });
    we2 = $constructor("$ZodIPv6", (e11, t8) => {
      t8.pattern ?? (t8.pattern = T3), te3.init(e11, t8), e11._zod.bag.format = "ipv6", e11._zod.check = (n3) => {
        try {
          new URL(`http://[${n3.value}]`);
        } catch {
          n3.issues.push({ code: "invalid_format", format: "ipv6", input: n3.value, inst: e11, continue: !t8.abort });
        }
      };
    });
    ve2 = $constructor("$ZodCIDRv4", (e11, t8) => {
      t8.pattern ?? (t8.pattern = j2), te3.init(e11, t8);
    });
    _e3 = $constructor("$ZodCIDRv6", (e11, t8) => {
      t8.pattern ?? (t8.pattern = R3), te3.init(e11, t8), e11._zod.check = (n3) => {
        const r6 = n3.value.split("/");
        try {
          if (2 !== r6.length) throw new Error();
          const [e12, t9] = r6;
          if (!t9) throw new Error();
          const n4 = Number(t9);
          if (`${n4}` !== t9) throw new Error();
          if (n4 < 0 || n4 > 128) throw new Error();
          new URL(`http://[${e12}]`);
        } catch {
          n3.issues.push({ code: "invalid_format", format: "cidrv6", input: n3.value, inst: e11, continue: !t8.abort });
        }
      };
    });
    __name(isValidBase64, "isValidBase64");
    ze2 = $constructor("$ZodBase64", (e11, t8) => {
      t8.pattern ?? (t8.pattern = x3), te3.init(e11, t8), e11._zod.bag.contentEncoding = "base64", e11._zod.check = (n3) => {
        isValidBase64(n3.value) || n3.issues.push({ code: "invalid_format", format: "base64", input: n3.value, inst: e11, continue: !t8.abort });
      };
    });
    be3 = $constructor("$ZodBase64URL", (e11, t8) => {
      t8.pattern ?? (t8.pattern = C3), te3.init(e11, t8), e11._zod.bag.contentEncoding = "base64url", e11._zod.check = (n3) => {
        (function(e12) {
          if (!C3.test(e12)) return false;
          const t9 = e12.replace(/[-_]/g, (e13) => "-" === e13 ? "+" : "/");
          return isValidBase64(t9.padEnd(4 * Math.ceil(t9.length / 4), "="));
        })(n3.value) || n3.issues.push({ code: "invalid_format", format: "base64url", input: n3.value, inst: e11, continue: !t8.abort });
      };
    });
    Se2 = $constructor("$ZodE164", (e11, t8) => {
      t8.pattern ?? (t8.pattern = Z3), te3.init(e11, t8);
    });
    $e2 = $constructor("$ZodJWT", (e11, t8) => {
      te3.init(e11, t8), e11._zod.check = (n3) => {
        (function(e12, t9 = null) {
          try {
            const n4 = e12.split(".");
            if (3 !== n4.length) return false;
            const [r6] = n4;
            if (!r6) return false;
            const o4 = JSON.parse(atob(r6));
            return !("typ" in o4 && "JWT" !== o4?.typ || !o4.alg || t9 && (!("alg" in o4) || o4.alg !== t9));
          } catch {
            return false;
          }
        })(n3.value, t8.alg) || n3.issues.push({ code: "invalid_format", format: "jwt", input: n3.value, inst: e11, continue: !t8.abort });
      };
    });
    ke2 = $constructor("$ZodUnknown", (e11, t8) => {
      Q3.init(e11, t8), e11._zod.parse = (e12) => e12;
    });
    Ee2 = $constructor("$ZodNever", (e11, t8) => {
      Q3.init(e11, t8), e11._zod.parse = (t9, n3) => (t9.issues.push({ expected: "never", code: "invalid_type", input: t9.value, inst: e11 }), t9);
    });
    __name(handleArrayResult, "handleArrayResult");
    Pe2 = $constructor("$ZodArray", (e11, t8) => {
      Q3.init(e11, t8), e11._zod.parse = (n3, r6) => {
        const o4 = n3.value;
        if (!Array.isArray(o4)) return n3.issues.push({ expected: "array", code: "invalid_type", input: o4, inst: e11 }), n3;
        n3.value = Array(o4.length);
        const s6 = [];
        for (let e12 = 0; e12 < o4.length; e12++) {
          const i6 = o4[e12], a6 = t8.element._zod.run({ value: i6, issues: [] }, r6);
          a6 instanceof Promise ? s6.push(a6.then((t9) => handleArrayResult(t9, n3, e12))) : handleArrayResult(a6, n3, e12);
        }
        return s6.length ? Promise.all(s6).then(() => n3) : n3;
      };
    });
    __name(handlePropertyResult, "handlePropertyResult");
    __name(normalizeDef, "normalizeDef");
    __name(handleCatchall, "handleCatchall");
    Oe = $constructor("$ZodObject", (e11, t8) => {
      Q3.init(e11, t8);
      const n3 = Object.getOwnPropertyDescriptor(t8, "shape");
      if (!n3?.get) {
        const e12 = t8.shape;
        Object.defineProperty(t8, "shape", { get: /* @__PURE__ */ __name(() => {
          const n4 = { ...e12 };
          return Object.defineProperty(t8, "shape", { value: n4 }), n4;
        }, "get") });
      }
      const r6 = cached(() => normalizeDef(t8));
      defineLazy(e11._zod, "propValues", () => {
        const e12 = t8.shape, n4 = {};
        for (const t9 in e12) {
          const r7 = e12[t9]._zod;
          if (r7.values) {
            n4[t9] ?? (n4[t9] = /* @__PURE__ */ new Set());
            for (const e13 of r7.values) n4[t9].add(e13);
          }
        }
        return n4;
      });
      const o4 = isObject, s6 = t8.catchall;
      let i6;
      e11._zod.parse = (t9, n4) => {
        i6 ?? (i6 = r6.value);
        const a6 = t9.value;
        if (!o4(a6)) return t9.issues.push({ expected: "object", code: "invalid_type", input: a6, inst: e11 }), t9;
        t9.value = {};
        const c6 = [], u5 = i6.shape;
        for (const e12 of i6.keys) {
          const r7 = u5[e12], o5 = "optional" === r7._zod.optout, s7 = r7._zod.run({ value: a6[e12], issues: [] }, n4);
          s7 instanceof Promise ? c6.push(s7.then((n5) => handlePropertyResult(n5, t9, e12, a6, o5))) : handlePropertyResult(s7, t9, e12, a6, o5);
        }
        return s6 ? handleCatchall(c6, a6, t9, n4, r6.value, e11) : c6.length ? Promise.all(c6).then(() => t9) : t9;
      };
    });
    Ae2 = $constructor("$ZodObjectJIT", (e11, t8) => {
      Oe.init(e11, t8);
      const n3 = e11._zod.parse, r6 = cached(() => normalizeDef(t8));
      let o4;
      const s6 = isObject, i6 = !d2.jitless, a6 = i6 && f3.value, c6 = t8.catchall;
      let u5;
      e11._zod.parse = (d4, p5) => {
        u5 ?? (u5 = r6.value);
        const l6 = d4.value;
        return s6(l6) ? i6 && a6 && false === p5?.async && true !== p5.jitless ? (o4 || (o4 = ((e12) => {
          const t9 = new Doc(["shape", "payload", "ctx"]), n4 = r6.value, parseStr = /* @__PURE__ */ __name((e13) => {
            const t10 = esc(e13);
            return `shape[${t10}]._zod.run({ value: input[${t10}], issues: [] }, ctx)`;
          }, "parseStr");
          t9.write("const input = payload.value;");
          const o5 = /* @__PURE__ */ Object.create(null);
          let s7 = 0;
          for (const e13 of n4.keys) o5[e13] = "key_" + s7++;
          t9.write("const newResult = {};");
          for (const r7 of n4.keys) {
            const n5 = o5[r7], s8 = esc(r7), i8 = e12[r7], a7 = "optional" === i8?._zod?.optout;
            t9.write(`const ${n5} = ${parseStr(r7)};`), a7 ? t9.write(`
        if (${n5}.issues.length) {
          if (${s8} in input) {
            payload.issues = payload.issues.concat(${n5}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${s8}, ...iss.path] : [${s8}]
            })));
          }
        }
        
        if (${n5}.value === undefined) {
          if (${s8} in input) {
            newResult[${s8}] = undefined;
          }
        } else {
          newResult[${s8}] = ${n5}.value;
        }
        
      `) : t9.write(`
        if (${n5}.issues.length) {
          payload.issues = payload.issues.concat(${n5}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${s8}, ...iss.path] : [${s8}]
          })));
        }
        
        if (${n5}.value === undefined) {
          if (${s8} in input) {
            newResult[${s8}] = undefined;
          }
        } else {
          newResult[${s8}] = ${n5}.value;
        }
        
      `);
          }
          t9.write("payload.value = newResult;"), t9.write("return payload;");
          const i7 = t9.compile();
          return (t10, n5) => i7(e12, t10, n5);
        })(t8.shape)), d4 = o4(d4, p5), c6 ? handleCatchall([], l6, d4, p5, u5, e11) : d4) : n3(d4, p5) : (d4.issues.push({ expected: "object", code: "invalid_type", input: l6, inst: e11 }), d4);
      };
    });
    __name(handleUnionResults, "handleUnionResults");
    Te2 = $constructor("$ZodUnion", (e11, t8) => {
      Q3.init(e11, t8), defineLazy(e11._zod, "optin", () => t8.options.some((e12) => "optional" === e12._zod.optin) ? "optional" : void 0), defineLazy(e11._zod, "optout", () => t8.options.some((e12) => "optional" === e12._zod.optout) ? "optional" : void 0), defineLazy(e11._zod, "values", () => {
        if (t8.options.every((e12) => e12._zod.values)) return new Set(t8.options.flatMap((e12) => Array.from(e12._zod.values)));
      }), defineLazy(e11._zod, "pattern", () => {
        if (t8.options.every((e12) => e12._zod.pattern)) {
          const e12 = t8.options.map((e13) => e13._zod.pattern);
          return new RegExp(`^(${e12.map((e13) => cleanRegex(e13.source)).join("|")})$`);
        }
      });
      const n3 = 1 === t8.options.length, r6 = t8.options[0]._zod.run;
      e11._zod.parse = (o4, s6) => {
        if (n3) return r6(o4, s6);
        let i6 = false;
        const a6 = [];
        for (const e12 of t8.options) {
          const t9 = e12._zod.run({ value: o4.value, issues: [] }, s6);
          if (t9 instanceof Promise) a6.push(t9), i6 = true;
          else {
            if (0 === t9.issues.length) return t9;
            a6.push(t9);
          }
        }
        return i6 ? Promise.all(a6).then((t9) => handleUnionResults(t9, o4, e11, s6)) : handleUnionResults(a6, o4, e11, s6);
      };
    });
    je2 = $constructor("$ZodIntersection", (e11, t8) => {
      Q3.init(e11, t8), e11._zod.parse = (e12, n3) => {
        const r6 = e12.value, o4 = t8.left._zod.run({ value: r6, issues: [] }, n3), s6 = t8.right._zod.run({ value: r6, issues: [] }, n3);
        return o4 instanceof Promise || s6 instanceof Promise ? Promise.all([o4, s6]).then(([t9, n4]) => handleIntersectionResults(e12, t9, n4)) : handleIntersectionResults(e12, o4, s6);
      };
    });
    __name(mergeValues, "mergeValues");
    __name(handleIntersectionResults, "handleIntersectionResults");
    Re2 = $constructor("$ZodEnum", (e11, t8) => {
      Q3.init(e11, t8);
      const n3 = getEnumValues(t8.entries), r6 = new Set(n3);
      e11._zod.values = r6, e11._zod.pattern = new RegExp(`^(${n3.filter((e12) => h4.has(typeof e12)).map((e12) => "string" == typeof e12 ? escapeRegex(e12) : e12.toString()).join("|")})$`), e11._zod.parse = (t9, o4) => {
        const s6 = t9.value;
        return r6.has(s6) || t9.issues.push({ code: "invalid_value", values: n3, input: s6, inst: e11 }), t9;
      };
    });
    xe2 = $constructor("$ZodTransform", (e11, t8) => {
      Q3.init(e11, t8), e11._zod.parse = (n3, r6) => {
        if ("backward" === r6.direction) throw new $ZodEncodeError(e11.constructor.name);
        const o4 = t8.transform(n3.value, n3);
        if (r6.async) {
          return (o4 instanceof Promise ? o4 : Promise.resolve(o4)).then((e12) => (n3.value = e12, n3));
        }
        if (o4 instanceof Promise) throw new $ZodAsyncError();
        return n3.value = o4, n3;
      };
    });
    __name(handleOptionalResult, "handleOptionalResult");
    Ce2 = $constructor("$ZodOptional", (e11, t8) => {
      Q3.init(e11, t8), e11._zod.optin = "optional", e11._zod.optout = "optional", defineLazy(e11._zod, "values", () => t8.innerType._zod.values ? /* @__PURE__ */ new Set([...t8.innerType._zod.values, void 0]) : void 0), defineLazy(e11._zod, "pattern", () => {
        const e12 = t8.innerType._zod.pattern;
        return e12 ? new RegExp(`^(${cleanRegex(e12.source)})?$`) : void 0;
      }), e11._zod.parse = (e12, n3) => {
        if ("optional" === t8.innerType._zod.optin) {
          const r6 = t8.innerType._zod.run(e12, n3);
          return r6 instanceof Promise ? r6.then((t9) => handleOptionalResult(t9, e12.value)) : handleOptionalResult(r6, e12.value);
        }
        return void 0 === e12.value ? e12 : t8.innerType._zod.run(e12, n3);
      };
    });
    Ze2 = $constructor("$ZodExactOptional", (e11, t8) => {
      Ce2.init(e11, t8), defineLazy(e11._zod, "values", () => t8.innerType._zod.values), defineLazy(e11._zod, "pattern", () => t8.innerType._zod.pattern), e11._zod.parse = (e12, n3) => t8.innerType._zod.run(e12, n3);
    });
    Ie2 = $constructor("$ZodNullable", (e11, t8) => {
      Q3.init(e11, t8), defineLazy(e11._zod, "optin", () => t8.innerType._zod.optin), defineLazy(e11._zod, "optout", () => t8.innerType._zod.optout), defineLazy(e11._zod, "pattern", () => {
        const e12 = t8.innerType._zod.pattern;
        return e12 ? new RegExp(`^(${cleanRegex(e12.source)}|null)$`) : void 0;
      }), defineLazy(e11._zod, "values", () => t8.innerType._zod.values ? /* @__PURE__ */ new Set([...t8.innerType._zod.values, null]) : void 0), e11._zod.parse = (e12, n3) => null === e12.value ? e12 : t8.innerType._zod.run(e12, n3);
    });
    De2 = $constructor("$ZodDefault", (e11, t8) => {
      Q3.init(e11, t8), e11._zod.optin = "optional", defineLazy(e11._zod, "values", () => t8.innerType._zod.values), e11._zod.parse = (e12, n3) => {
        if ("backward" === n3.direction) return t8.innerType._zod.run(e12, n3);
        if (void 0 === e12.value) return e12.value = t8.defaultValue, e12;
        const r6 = t8.innerType._zod.run(e12, n3);
        return r6 instanceof Promise ? r6.then((e13) => handleDefaultResult(e13, t8)) : handleDefaultResult(r6, t8);
      };
    });
    __name(handleDefaultResult, "handleDefaultResult");
    Je2 = $constructor("$ZodPrefault", (e11, t8) => {
      Q3.init(e11, t8), e11._zod.optin = "optional", defineLazy(e11._zod, "values", () => t8.innerType._zod.values), e11._zod.parse = (e12, n3) => ("backward" === n3.direction || void 0 === e12.value && (e12.value = t8.defaultValue), t8.innerType._zod.run(e12, n3));
    });
    Ke2 = $constructor("$ZodNonOptional", (e11, t8) => {
      Q3.init(e11, t8), defineLazy(e11._zod, "values", () => {
        const e12 = t8.innerType._zod.values;
        return e12 ? new Set([...e12].filter((e13) => void 0 !== e13)) : void 0;
      }), e11._zod.parse = (n3, r6) => {
        const o4 = t8.innerType._zod.run(n3, r6);
        return o4 instanceof Promise ? o4.then((t9) => handleNonOptionalResult(t9, e11)) : handleNonOptionalResult(o4, e11);
      };
    });
    __name(handleNonOptionalResult, "handleNonOptionalResult");
    Ne2 = $constructor("$ZodCatch", (e11, t8) => {
      Q3.init(e11, t8), defineLazy(e11._zod, "optin", () => t8.innerType._zod.optin), defineLazy(e11._zod, "optout", () => t8.innerType._zod.optout), defineLazy(e11._zod, "values", () => t8.innerType._zod.values), e11._zod.parse = (e12, n3) => {
        if ("backward" === n3.direction) return t8.innerType._zod.run(e12, n3);
        const r6 = t8.innerType._zod.run(e12, n3);
        return r6 instanceof Promise ? r6.then((r7) => (e12.value = r7.value, r7.issues.length && (e12.value = t8.catchValue({ ...e12, error: { issues: r7.issues.map((e13) => finalizeIssue(e13, n3, config())) }, input: e12.value }), e12.issues = []), e12)) : (e12.value = r6.value, r6.issues.length && (e12.value = t8.catchValue({ ...e12, error: { issues: r6.issues.map((e13) => finalizeIssue(e13, n3, config())) }, input: e12.value }), e12.issues = []), e12);
      };
    });
    He2 = $constructor("$ZodPipe", (e11, t8) => {
      Q3.init(e11, t8), defineLazy(e11._zod, "values", () => t8.in._zod.values), defineLazy(e11._zod, "optin", () => t8.in._zod.optin), defineLazy(e11._zod, "optout", () => t8.out._zod.optout), defineLazy(e11._zod, "propValues", () => t8.in._zod.propValues), e11._zod.parse = (e12, n3) => {
        if ("backward" === n3.direction) {
          const r7 = t8.out._zod.run(e12, n3);
          return r7 instanceof Promise ? r7.then((e13) => handlePipeResult(e13, t8.in, n3)) : handlePipeResult(r7, t8.in, n3);
        }
        const r6 = t8.in._zod.run(e12, n3);
        return r6 instanceof Promise ? r6.then((e13) => handlePipeResult(e13, t8.out, n3)) : handlePipeResult(r6, t8.out, n3);
      };
    });
    __name(handlePipeResult, "handlePipeResult");
    Le2 = $constructor("$ZodReadonly", (e11, t8) => {
      Q3.init(e11, t8), defineLazy(e11._zod, "propValues", () => t8.innerType._zod.propValues), defineLazy(e11._zod, "values", () => t8.innerType._zod.values), defineLazy(e11._zod, "optin", () => t8.innerType?._zod?.optin), defineLazy(e11._zod, "optout", () => t8.innerType?._zod?.optout), e11._zod.parse = (e12, n3) => {
        if ("backward" === n3.direction) return t8.innerType._zod.run(e12, n3);
        const r6 = t8.innerType._zod.run(e12, n3);
        return r6 instanceof Promise ? r6.then(handleReadonlyResult) : handleReadonlyResult(r6);
      };
    });
    __name(handleReadonlyResult, "handleReadonlyResult");
    We2 = $constructor("$ZodCustom", (e11, t8) => {
      N3.init(e11, t8), Q3.init(e11, t8), e11._zod.parse = (e12, t9) => e12, e11._zod.check = (n3) => {
        const r6 = n3.value, o4 = t8.fn(r6);
        if (o4 instanceof Promise) return o4.then((t9) => handleRefineResult(t9, n3, r6, e11));
        handleRefineResult(o4, n3, r6, e11);
      };
    });
    __name(handleRefineResult, "handleRefineResult");
    $ZodRegistry = class {
      static {
        __name(this, "$ZodRegistry");
      }
      constructor() {
        this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
      }
      add(e11, ...t8) {
        const n3 = t8[0];
        return this._map.set(e11, n3), n3 && "object" == typeof n3 && "id" in n3 && this._idmap.set(n3.id, e11), this;
      }
      clear() {
        return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
      }
      remove(e11) {
        const t8 = this._map.get(e11);
        return t8 && "object" == typeof t8 && "id" in t8 && this._idmap.delete(t8.id), this._map.delete(e11), this;
      }
      get(e11) {
        const t8 = e11._zod.parent;
        if (t8) {
          const n3 = { ...this.get(t8) ?? {} };
          delete n3.id;
          const r6 = { ...n3, ...this._map.get(e11) };
          return Object.keys(r6).length ? r6 : void 0;
        }
        return this._map.get(e11);
      }
      has(e11) {
        return this._map.has(e11);
      }
    };
    (Ue2 = globalThis).__zod_globalRegistry ?? (Ue2.__zod_globalRegistry = new $ZodRegistry());
    Me2 = globalThis.__zod_globalRegistry;
    __name(_email, "_email");
    __name(_guid, "_guid");
    __name(_maxLength, "_maxLength");
    __name(_minLength, "_minLength");
    __name(_length, "_length");
    __name(_overwrite, "_overwrite");
    __name(_superRefine, "_superRefine");
    __name(initializeContext, "initializeContext");
    __name(process, "process");
    __name(extractDefs, "extractDefs");
    __name(finalize, "finalize");
    __name(isTransforming, "isTransforming");
    createStandardJSONSchemaMethod = /* @__PURE__ */ __name((e11, t8, n3 = {}) => (r6) => {
      const { libraryOptions: o4, target: s6 } = r6 ?? {}, i6 = initializeContext({ ...o4 ?? {}, target: s6, io: t8, processors: n3 });
      return process(e11, i6), extractDefs(i6, e11), finalize(i6, e11);
    }, "createStandardJSONSchemaMethod");
    Fe2 = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" };
    optionalProcessor = /* @__PURE__ */ __name((e11, t8, n3, r6) => {
      const o4 = e11._zod.def;
      process(o4.innerType, t8, r6);
      t8.seen.get(e11).ref = o4.innerType;
    }, "optionalProcessor");
    Ve2 = $constructor("ZodISODateTime", (e11, t8) => {
      fe3.init(e11, t8), ft2.init(e11, t8);
    });
    __name(datetime, "datetime");
    Be2 = $constructor("ZodISODate", (e11, t8) => {
      he2.init(e11, t8), ft2.init(e11, t8);
    });
    __name(date, "date");
    qe2 = $constructor("ZodISOTime", (e11, t8) => {
      me2.init(e11, t8), ft2.init(e11, t8);
    });
    __name(time, "time");
    Ge2 = $constructor("ZodISODuration", (e11, t8) => {
      ye2.init(e11, t8), ft2.init(e11, t8);
    });
    __name(duration, "duration");
    Ye2 = $constructor("ZodError", (e11, t8) => {
      m5.init(e11, t8), e11.name = "ZodError", Object.defineProperties(e11, { format: { value: /* @__PURE__ */ __name((t9) => (function(e12, t10 = (e13) => e13.message) {
        const n3 = { _errors: [] }, processError = /* @__PURE__ */ __name((e13) => {
          for (const r6 of e13.issues) if ("invalid_union" === r6.code && r6.errors.length) r6.errors.map((e14) => processError({ issues: e14 }));
          else if ("invalid_key" === r6.code) processError({ issues: r6.issues });
          else if ("invalid_element" === r6.code) processError({ issues: r6.issues });
          else if (0 === r6.path.length) n3._errors.push(t10(r6));
          else {
            let e14 = n3, o4 = 0;
            for (; o4 < r6.path.length; ) {
              const n4 = r6.path[o4];
              o4 === r6.path.length - 1 ? (e14[n4] = e14[n4] || { _errors: [] }, e14[n4]._errors.push(t10(r6))) : e14[n4] = e14[n4] || { _errors: [] }, e14 = e14[n4], o4++;
            }
          }
        }, "processError");
        return processError(e12), n3;
      })(e11, t9), "value") }, flatten: { value: /* @__PURE__ */ __name((t9) => flattenError(e11, t9), "value") }, addIssue: { value: /* @__PURE__ */ __name((t9) => {
        e11.issues.push(t9), e11.message = JSON.stringify(e11.issues, jsonStringifyReplacer, 2);
      }, "value") }, addIssues: { value: /* @__PURE__ */ __name((t9) => {
        e11.issues.push(...t9), e11.message = JSON.stringify(e11.issues, jsonStringifyReplacer, 2);
      }, "value") }, isEmpty: { get: /* @__PURE__ */ __name(() => 0 === e11.issues.length, "get") } });
    }, { Parent: Error });
    Xe2 = _parse(Ye2);
    Qe2 = _parseAsync(Ye2);
    et2 = _safeParse(Ye2);
    tt2 = _safeParseAsync(Ye2);
    nt2 = _encode(Ye2);
    rt2 = _decode(Ye2);
    ot2 = _encodeAsync(Ye2);
    st2 = _decodeAsync(Ye2);
    it2 = _safeEncode(Ye2);
    at2 = _safeDecode(Ye2);
    ct2 = _safeEncodeAsync(Ye2);
    ut2 = _safeDecodeAsync(Ye2);
    dt2 = $constructor("ZodType", (e11, t8) => (Q3.init(e11, t8), Object.assign(e11["~standard"], { jsonSchema: { input: createStandardJSONSchemaMethod(e11, "input"), output: createStandardJSONSchemaMethod(e11, "output") } }), e11.toJSONSchema = /* @__PURE__ */ ((e12, t9 = {}) => (n3) => {
      const r6 = initializeContext({ ...n3, processors: t9 });
      return process(e12, r6), extractDefs(r6, e12), finalize(r6, e12);
    })(e11, {}), e11.def = t8, e11.type = t8.type, Object.defineProperty(e11, "_def", { value: t8 }), e11.check = (...n3) => e11.clone(mergeDefs(t8, { checks: [...t8.checks ?? [], ...n3.map((e12) => "function" == typeof e12 ? { _zod: { check: e12, def: { check: "custom" }, onattach: [] } } : e12)] }), { parent: true }), e11.with = e11.check, e11.clone = (t9, n3) => clone2(e11, t9, n3), e11.brand = () => e11, e11.register = (t9, n3) => (t9.add(e11, n3), e11), e11.parse = (t9, n3) => Xe2(e11, t9, n3, { callee: e11.parse }), e11.safeParse = (t9, n3) => et2(e11, t9, n3), e11.parseAsync = async (t9, n3) => Qe2(e11, t9, n3, { callee: e11.parseAsync }), e11.safeParseAsync = async (t9, n3) => tt2(e11, t9, n3), e11.spa = e11.safeParseAsync, e11.encode = (t9, n3) => nt2(e11, t9, n3), e11.decode = (t9, n3) => rt2(e11, t9, n3), e11.encodeAsync = async (t9, n3) => ot2(e11, t9, n3), e11.decodeAsync = async (t9, n3) => st2(e11, t9, n3), e11.safeEncode = (t9, n3) => it2(e11, t9, n3), e11.safeDecode = (t9, n3) => at2(e11, t9, n3), e11.safeEncodeAsync = async (t9, n3) => ct2(e11, t9, n3), e11.safeDecodeAsync = async (t9, n3) => ut2(e11, t9, n3), e11.refine = (t9, n3) => e11.check((function(e12, t10 = {}) {
      return (function(e13, t11, n4) {
        return new e13({ type: "custom", check: "custom", fn: t11, ...normalizeParams(n4) });
      })(Gt2, e12, t10);
    })(t9, n3)), e11.superRefine = (t9) => e11.check(_superRefine(t9)), e11.overwrite = (t9) => e11.check(_overwrite(t9)), e11.optional = () => optional(e11), e11.exactOptional = () => new Lt2({ type: "optional", innerType: e11 }), e11.nullable = () => nullable(e11), e11.nullish = () => optional(nullable(e11)), e11.nonoptional = (t9) => (function(e12, t10) {
      return new Ft2({ type: "nonoptional", innerType: e12, ...normalizeParams(t10) });
    })(e11, t9), e11.array = () => {
      return (function(e12, t10, n3) {
        return new e12({ type: "array", element: t10, ...normalizeParams(n3) });
      })(Zt2, e11, t9);
      var t9;
    }, e11.or = (t9) => {
      return new Dt2({ type: "union", options: [e11, t9], ...normalizeParams(n3) });
      var n3;
    }, e11.and = (t9) => new Jt2({ type: "intersection", left: e11, right: t9 }), e11.transform = (t9) => pipe(e11, new Nt2({ type: "transform", transform: t9 })), e11.default = (t9) => {
      return n3 = t9, new Ut2({ type: "default", innerType: e11, get defaultValue() {
        return "function" == typeof n3 ? n3() : shallowClone(n3);
      } });
      var n3;
    }, e11.prefault = (t9) => {
      return n3 = t9, new Mt2({ type: "prefault", innerType: e11, get defaultValue() {
        return "function" == typeof n3 ? n3() : shallowClone(n3);
      } });
      var n3;
    }, e11.catch = (t9) => {
      return new Vt2({ type: "catch", innerType: e11, catchValue: "function" == typeof (n3 = t9) ? n3 : () => n3 });
      var n3;
    }, e11.pipe = (t9) => pipe(e11, t9), e11.readonly = () => new qt2({ type: "readonly", innerType: e11 }), e11.describe = (t9) => {
      const n3 = e11.clone();
      return Me2.add(n3, { description: t9 }), n3;
    }, Object.defineProperty(e11, "description", { get: /* @__PURE__ */ __name(() => Me2.get(e11)?.description, "get"), configurable: true }), e11.meta = (...t9) => {
      if (0 === t9.length) return Me2.get(e11);
      const n3 = e11.clone();
      return Me2.add(n3, t9[0]), n3;
    }, e11.isOptional = () => e11.safeParse(void 0).success, e11.isNullable = () => e11.safeParse(null).success, e11.apply = (t9) => t9(e11), e11));
    pt2 = $constructor("_ZodString", (e11, t8) => {
      ee3.init(e11, t8), dt2.init(e11, t8), e11._zod.processJSONSchema = (t9, n4, r6) => ((e12, t10, n5) => {
        const r7 = n5;
        r7.type = "string";
        const { minimum: o4, maximum: s6, format: i6, patterns: a6, contentEncoding: c6 } = e12._zod.bag;
        if ("number" == typeof o4 && (r7.minLength = o4), "number" == typeof s6 && (r7.maxLength = s6), i6 && (r7.format = Fe2[i6] ?? i6, "" === r7.format && delete r7.format, "time" === i6 && delete r7.format), c6 && (r7.contentEncoding = c6), a6 && a6.size > 0) {
          const e13 = [...a6];
          1 === e13.length ? r7.pattern = e13[0].source : e13.length > 1 && (r7.allOf = [...e13.map((e14) => ({ ..."draft-07" === t10.target || "draft-04" === t10.target || "openapi-3.0" === t10.target ? { type: "string" } : {}, pattern: e14.source }))]);
        }
      })(e11, t9, n4);
      const n3 = e11._zod.bag;
      e11.format = n3.format ?? null, e11.minLength = n3.minimum ?? null, e11.maxLength = n3.maximum ?? null, e11.regex = (...t9) => e11.check((function(e12, t10) {
        return new M2({ check: "string_format", format: "regex", ...normalizeParams(t10), pattern: e12 });
      })(...t9)), e11.includes = (...t9) => e11.check((function(e12, t10) {
        return new B3({ check: "string_format", format: "includes", ...normalizeParams(t10), includes: e12 });
      })(...t9)), e11.startsWith = (...t9) => e11.check((function(e12, t10) {
        return new q3({ check: "string_format", format: "starts_with", ...normalizeParams(t10), prefix: e12 });
      })(...t9)), e11.endsWith = (...t9) => e11.check((function(e12, t10) {
        return new G3({ check: "string_format", format: "ends_with", ...normalizeParams(t10), suffix: e12 });
      })(...t9)), e11.min = (...t9) => e11.check(_minLength(...t9)), e11.max = (...t9) => e11.check(_maxLength(...t9)), e11.length = (...t9) => e11.check(_length(...t9)), e11.nonempty = (...t9) => e11.check(_minLength(1, ...t9)), e11.lowercase = (t9) => e11.check((function(e12) {
        return new F3({ check: "string_format", format: "lowercase", ...normalizeParams(e12) });
      })(t9)), e11.uppercase = (t9) => e11.check((function(e12) {
        return new V3({ check: "string_format", format: "uppercase", ...normalizeParams(e12) });
      })(t9)), e11.trim = () => e11.check(_overwrite((e12) => e12.trim())), e11.normalize = (...t9) => e11.check((function(e12) {
        return _overwrite((t10) => t10.normalize(e12));
      })(...t9)), e11.toLowerCase = () => e11.check(_overwrite((e12) => e12.toLowerCase())), e11.toUpperCase = () => e11.check(_overwrite((e12) => e12.toUpperCase())), e11.slugify = () => e11.check(_overwrite((e12) => (function(e13) {
        return e13.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
      })(e12)));
    });
    lt2 = $constructor("ZodString", (e11, t8) => {
      ee3.init(e11, t8), pt2.init(e11, t8), e11.email = (t9) => e11.check(_email(ht2, t9)), e11.url = (t9) => e11.check((function(e12, t10) {
        return new e12({ type: "string", format: "url", check: "string_format", abort: false, ...normalizeParams(t10) });
      })(gt2, t9)), e11.jwt = (t9) => e11.check((function(e12, t10) {
        return new e12({ type: "string", format: "jwt", check: "string_format", abort: false, ...normalizeParams(t10) });
      })(Rt2, t9)), e11.emoji = (t9) => e11.check((function(e12, t10) {
        return new e12({ type: "string", format: "emoji", check: "string_format", abort: false, ...normalizeParams(t10) });
      })(wt2, t9)), e11.guid = (t9) => e11.check(_guid(mt2, t9)), e11.uuid = (t9) => e11.check((function(e12, t10) {
        return new e12({ type: "string", format: "uuid", check: "string_format", abort: false, ...normalizeParams(t10) });
      })(yt2, t9)), e11.uuidv4 = (t9) => e11.check((function(e12, t10) {
        return new e12({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v4", ...normalizeParams(t10) });
      })(yt2, t9)), e11.uuidv6 = (t9) => e11.check((function(e12, t10) {
        return new e12({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v6", ...normalizeParams(t10) });
      })(yt2, t9)), e11.uuidv7 = (t9) => e11.check((function(e12, t10) {
        return new e12({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v7", ...normalizeParams(t10) });
      })(yt2, t9)), e11.nanoid = (t9) => e11.check((function(e12, t10) {
        return new e12({ type: "string", format: "nanoid", check: "string_format", abort: false, ...normalizeParams(t10) });
      })(vt2, t9)), e11.guid = (t9) => e11.check(_guid(mt2, t9)), e11.cuid = (t9) => e11.check((function(e12, t10) {
        return new e12({ type: "string", format: "cuid", check: "string_format", abort: false, ...normalizeParams(t10) });
      })(_t2, t9)), e11.cuid2 = (t9) => e11.check((function(e12, t10) {
        return new e12({ type: "string", format: "cuid2", check: "string_format", abort: false, ...normalizeParams(t10) });
      })(zt2, t9)), e11.ulid = (t9) => e11.check((function(e12, t10) {
        return new e12({ type: "string", format: "ulid", check: "string_format", abort: false, ...normalizeParams(t10) });
      })(bt2, t9)), e11.base64 = (t9) => e11.check((function(e12, t10) {
        return new e12({ type: "string", format: "base64", check: "string_format", abort: false, ...normalizeParams(t10) });
      })(At2, t9)), e11.base64url = (t9) => e11.check((function(e12, t10) {
        return new e12({ type: "string", format: "base64url", check: "string_format", abort: false, ...normalizeParams(t10) });
      })(Tt2, t9)), e11.xid = (t9) => e11.check((function(e12, t10) {
        return new e12({ type: "string", format: "xid", check: "string_format", abort: false, ...normalizeParams(t10) });
      })(St2, t9)), e11.ksuid = (t9) => e11.check((function(e12, t10) {
        return new e12({ type: "string", format: "ksuid", check: "string_format", abort: false, ...normalizeParams(t10) });
      })($t2, t9)), e11.ipv4 = (t9) => e11.check((function(e12, t10) {
        return new e12({ type: "string", format: "ipv4", check: "string_format", abort: false, ...normalizeParams(t10) });
      })(kt2, t9)), e11.ipv6 = (t9) => e11.check((function(e12, t10) {
        return new e12({ type: "string", format: "ipv6", check: "string_format", abort: false, ...normalizeParams(t10) });
      })(Et2, t9)), e11.cidrv4 = (t9) => e11.check((function(e12, t10) {
        return new e12({ type: "string", format: "cidrv4", check: "string_format", abort: false, ...normalizeParams(t10) });
      })(Pt2, t9)), e11.cidrv6 = (t9) => e11.check((function(e12, t10) {
        return new e12({ type: "string", format: "cidrv6", check: "string_format", abort: false, ...normalizeParams(t10) });
      })(Ot2, t9)), e11.e164 = (t9) => e11.check((function(e12, t10) {
        return new e12({ type: "string", format: "e164", check: "string_format", abort: false, ...normalizeParams(t10) });
      })(jt2, t9)), e11.datetime = (t9) => e11.check(datetime(t9)), e11.date = (t9) => e11.check(date(t9)), e11.time = (t9) => e11.check(time(t9)), e11.duration = (t9) => e11.check(duration(t9));
    });
    ft2 = $constructor("ZodStringFormat", (e11, t8) => {
      te3.init(e11, t8), pt2.init(e11, t8);
    });
    ht2 = $constructor("ZodEmail", (e11, t8) => {
      oe3.init(e11, t8), ft2.init(e11, t8);
    });
    mt2 = $constructor("ZodGUID", (e11, t8) => {
      ne3.init(e11, t8), ft2.init(e11, t8);
    });
    yt2 = $constructor("ZodUUID", (e11, t8) => {
      re3.init(e11, t8), ft2.init(e11, t8);
    });
    gt2 = $constructor("ZodURL", (e11, t8) => {
      se3.init(e11, t8), ft2.init(e11, t8);
    });
    wt2 = $constructor("ZodEmoji", (e11, t8) => {
      ie3.init(e11, t8), ft2.init(e11, t8);
    });
    vt2 = $constructor("ZodNanoID", (e11, t8) => {
      ae3.init(e11, t8), ft2.init(e11, t8);
    });
    _t2 = $constructor("ZodCUID", (e11, t8) => {
      ce3.init(e11, t8), ft2.init(e11, t8);
    });
    zt2 = $constructor("ZodCUID2", (e11, t8) => {
      ue3.init(e11, t8), ft2.init(e11, t8);
    });
    bt2 = $constructor("ZodULID", (e11, t8) => {
      de3.init(e11, t8), ft2.init(e11, t8);
    });
    St2 = $constructor("ZodXID", (e11, t8) => {
      pe2.init(e11, t8), ft2.init(e11, t8);
    });
    $t2 = $constructor("ZodKSUID", (e11, t8) => {
      le2.init(e11, t8), ft2.init(e11, t8);
    });
    kt2 = $constructor("ZodIPv4", (e11, t8) => {
      ge2.init(e11, t8), ft2.init(e11, t8);
    });
    Et2 = $constructor("ZodIPv6", (e11, t8) => {
      we2.init(e11, t8), ft2.init(e11, t8);
    });
    Pt2 = $constructor("ZodCIDRv4", (e11, t8) => {
      ve2.init(e11, t8), ft2.init(e11, t8);
    });
    Ot2 = $constructor("ZodCIDRv6", (e11, t8) => {
      _e3.init(e11, t8), ft2.init(e11, t8);
    });
    At2 = $constructor("ZodBase64", (e11, t8) => {
      ze2.init(e11, t8), ft2.init(e11, t8);
    });
    Tt2 = $constructor("ZodBase64URL", (e11, t8) => {
      be3.init(e11, t8), ft2.init(e11, t8);
    });
    jt2 = $constructor("ZodE164", (e11, t8) => {
      Se2.init(e11, t8), ft2.init(e11, t8);
    });
    Rt2 = $constructor("ZodJWT", (e11, t8) => {
      $e2.init(e11, t8), ft2.init(e11, t8);
    });
    xt2 = $constructor("ZodUnknown", (e11, t8) => {
      ke2.init(e11, t8), dt2.init(e11, t8), e11._zod.processJSONSchema = (e12, t9, n3) => {
      };
    });
    __name(unknown, "unknown");
    Ct2 = $constructor("ZodNever", (e11, t8) => {
      Ee2.init(e11, t8), dt2.init(e11, t8), e11._zod.processJSONSchema = (e12, t9, n3) => ((e13, t10, n4) => {
        n4.not = {};
      })(0, 0, t9);
    });
    __name(never, "never");
    Zt2 = $constructor("ZodArray", (e11, t8) => {
      Pe2.init(e11, t8), dt2.init(e11, t8), e11._zod.processJSONSchema = (t9, n3, r6) => ((e12, t10, n4, r7) => {
        const o4 = n4, s6 = e12._zod.def, { minimum: i6, maximum: a6 } = e12._zod.bag;
        "number" == typeof i6 && (o4.minItems = i6), "number" == typeof a6 && (o4.maxItems = a6), o4.type = "array", o4.items = process(s6.element, t10, { ...r7, path: [...r7.path, "items"] });
      })(e11, t9, n3, r6), e11.element = t8.element, e11.min = (t9, n3) => e11.check(_minLength(t9, n3)), e11.nonempty = (t9) => e11.check(_minLength(1, t9)), e11.max = (t9, n3) => e11.check(_maxLength(t9, n3)), e11.length = (t9, n3) => e11.check(_length(t9, n3)), e11.unwrap = () => e11.element;
    });
    It2 = $constructor("ZodObject", (e11, t8) => {
      Ae2.init(e11, t8), dt2.init(e11, t8), e11._zod.processJSONSchema = (t9, n3, r6) => ((e12, t10, n4, r7) => {
        const o4 = n4, s6 = e12._zod.def;
        o4.type = "object", o4.properties = {};
        const i6 = s6.shape;
        for (const e13 in i6) o4.properties[e13] = process(i6[e13], t10, { ...r7, path: [...r7.path, "properties", e13] });
        const a6 = new Set(Object.keys(i6)), c6 = new Set([...a6].filter((e13) => {
          const n5 = s6.shape[e13]._zod;
          return "input" === t10.io ? void 0 === n5.optin : void 0 === n5.optout;
        }));
        c6.size > 0 && (o4.required = Array.from(c6)), "never" === s6.catchall?._zod.def.type ? o4.additionalProperties = false : s6.catchall ? s6.catchall && (o4.additionalProperties = process(s6.catchall, t10, { ...r7, path: [...r7.path, "additionalProperties"] })) : "output" === t10.io && (o4.additionalProperties = false);
      })(e11, t9, n3, r6), defineLazy(e11, "shape", () => t8.shape), e11.keyof = () => (function(e12, t9) {
        const n3 = Array.isArray(e12) ? Object.fromEntries(e12.map((e13) => [e13, e13])) : e12;
        return new Kt2({ type: "enum", entries: n3, ...normalizeParams(t9) });
      })(Object.keys(e11._zod.def.shape)), e11.catchall = (t9) => e11.clone({ ...e11._zod.def, catchall: t9 }), e11.passthrough = () => e11.clone({ ...e11._zod.def, catchall: unknown() }), e11.loose = () => e11.clone({ ...e11._zod.def, catchall: unknown() }), e11.strict = () => e11.clone({ ...e11._zod.def, catchall: never() }), e11.strip = () => e11.clone({ ...e11._zod.def, catchall: void 0 }), e11.extend = (t9) => (function(e12, t10) {
        if (!isPlainObject(t10)) throw new Error("Invalid input to extend: expected a plain object");
        const n3 = e12._zod.def.checks;
        if (n3 && n3.length > 0) {
          const n4 = e12._zod.def.shape;
          for (const e13 in t10) if (void 0 !== Object.getOwnPropertyDescriptor(n4, e13)) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
        }
        const r6 = mergeDefs(e12._zod.def, { get shape() {
          const n4 = { ...e12._zod.def.shape, ...t10 };
          return assignProp(this, "shape", n4), n4;
        } });
        return clone2(e12, r6);
      })(e11, t9), e11.safeExtend = (t9) => (function(e12, t10) {
        if (!isPlainObject(t10)) throw new Error("Invalid input to safeExtend: expected a plain object");
        const n3 = mergeDefs(e12._zod.def, { get shape() {
          const n4 = { ...e12._zod.def.shape, ...t10 };
          return assignProp(this, "shape", n4), n4;
        } });
        return clone2(e12, n3);
      })(e11, t9), e11.merge = (t9) => (function(e12, t10) {
        const n3 = mergeDefs(e12._zod.def, { get shape() {
          const n4 = { ...e12._zod.def.shape, ...t10._zod.def.shape };
          return assignProp(this, "shape", n4), n4;
        }, get catchall() {
          return t10._zod.def.catchall;
        }, checks: [] });
        return clone2(e12, n3);
      })(e11, t9), e11.pick = (t9) => (function(e12, t10) {
        const n3 = e12._zod.def, r6 = n3.checks;
        if (r6 && r6.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
        return clone2(e12, mergeDefs(e12._zod.def, { get shape() {
          const e13 = {};
          for (const r7 in t10) {
            if (!(r7 in n3.shape)) throw new Error(`Unrecognized key: "${r7}"`);
            t10[r7] && (e13[r7] = n3.shape[r7]);
          }
          return assignProp(this, "shape", e13), e13;
        }, checks: [] }));
      })(e11, t9), e11.omit = (t9) => (function(e12, t10) {
        const n3 = e12._zod.def, r6 = n3.checks;
        if (r6 && r6.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
        const o4 = mergeDefs(e12._zod.def, { get shape() {
          const r7 = { ...e12._zod.def.shape };
          for (const e13 in t10) {
            if (!(e13 in n3.shape)) throw new Error(`Unrecognized key: "${e13}"`);
            t10[e13] && delete r7[e13];
          }
          return assignProp(this, "shape", r7), r7;
        }, checks: [] });
        return clone2(e12, o4);
      })(e11, t9), e11.partial = (...t9) => (function(e12, t10, n3) {
        const r6 = t10._zod.def.checks;
        if (r6 && r6.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
        const o4 = mergeDefs(t10._zod.def, { get shape() {
          const r7 = t10._zod.def.shape, o5 = { ...r7 };
          if (n3) for (const t11 in n3) {
            if (!(t11 in r7)) throw new Error(`Unrecognized key: "${t11}"`);
            n3[t11] && (o5[t11] = e12 ? new e12({ type: "optional", innerType: r7[t11] }) : r7[t11]);
          }
          else for (const t11 in r7) o5[t11] = e12 ? new e12({ type: "optional", innerType: r7[t11] }) : r7[t11];
          return assignProp(this, "shape", o5), o5;
        }, checks: [] });
        return clone2(t10, o4);
      })(Ht2, e11, t9[0]), e11.required = (...t9) => (function(e12, t10, n3) {
        const r6 = mergeDefs(t10._zod.def, { get shape() {
          const r7 = t10._zod.def.shape, o4 = { ...r7 };
          if (n3) for (const t11 in n3) {
            if (!(t11 in o4)) throw new Error(`Unrecognized key: "${t11}"`);
            n3[t11] && (o4[t11] = new e12({ type: "nonoptional", innerType: r7[t11] }));
          }
          else for (const t11 in r7) o4[t11] = new e12({ type: "nonoptional", innerType: r7[t11] });
          return assignProp(this, "shape", o4), o4;
        } });
        return clone2(t10, r6);
      })(Ft2, e11, t9[0]);
    });
    Dt2 = $constructor("ZodUnion", (e11, t8) => {
      Te2.init(e11, t8), dt2.init(e11, t8), e11._zod.processJSONSchema = (t9, n3, r6) => ((e12, t10, n4, r7) => {
        const o4 = e12._zod.def, s6 = false === o4.inclusive, i6 = o4.options.map((e13, n5) => process(e13, t10, { ...r7, path: [...r7.path, s6 ? "oneOf" : "anyOf", n5] }));
        s6 ? n4.oneOf = i6 : n4.anyOf = i6;
      })(e11, t9, n3, r6), e11.options = t8.options;
    });
    Jt2 = $constructor("ZodIntersection", (e11, t8) => {
      je2.init(e11, t8), dt2.init(e11, t8), e11._zod.processJSONSchema = (t9, n3, r6) => ((e12, t10, n4, r7) => {
        const o4 = e12._zod.def, s6 = process(o4.left, t10, { ...r7, path: [...r7.path, "allOf", 0] }), i6 = process(o4.right, t10, { ...r7, path: [...r7.path, "allOf", 1] }), isSimpleIntersection = /* @__PURE__ */ __name((e13) => "allOf" in e13 && 1 === Object.keys(e13).length, "isSimpleIntersection"), a6 = [...isSimpleIntersection(s6) ? s6.allOf : [s6], ...isSimpleIntersection(i6) ? i6.allOf : [i6]];
        n4.allOf = a6;
      })(e11, t9, n3, r6);
    });
    Kt2 = $constructor("ZodEnum", (e11, t8) => {
      Re2.init(e11, t8), dt2.init(e11, t8), e11._zod.processJSONSchema = (t9, n4, r6) => ((e12, t10, n5) => {
        const r7 = getEnumValues(e12._zod.def.entries);
        r7.every((e13) => "number" == typeof e13) && (n5.type = "number"), r7.every((e13) => "string" == typeof e13) && (n5.type = "string"), n5.enum = r7;
      })(e11, 0, n4), e11.enum = t8.entries, e11.options = Object.values(t8.entries);
      const n3 = new Set(Object.keys(t8.entries));
      e11.extract = (e12, r6) => {
        const o4 = {};
        for (const r7 of e12) {
          if (!n3.has(r7)) throw new Error(`Key ${r7} not found in enum`);
          o4[r7] = t8.entries[r7];
        }
        return new Kt2({ ...t8, checks: [], ...normalizeParams(r6), entries: o4 });
      }, e11.exclude = (e12, r6) => {
        const o4 = { ...t8.entries };
        for (const t9 of e12) {
          if (!n3.has(t9)) throw new Error(`Key ${t9} not found in enum`);
          delete o4[t9];
        }
        return new Kt2({ ...t8, checks: [], ...normalizeParams(r6), entries: o4 });
      };
    });
    Nt2 = $constructor("ZodTransform", (e11, t8) => {
      xe2.init(e11, t8), dt2.init(e11, t8), e11._zod.processJSONSchema = (e12, t9, n3) => ((e13, t10) => {
        if ("throw" === t10.unrepresentable) throw new Error("Transforms cannot be represented in JSON Schema");
      })(0, e12), e11._zod.parse = (n3, r6) => {
        if ("backward" === r6.direction) throw new $ZodEncodeError(e11.constructor.name);
        n3.addIssue = (r7) => {
          if ("string" == typeof r7) n3.issues.push(issue(r7, n3.value, t8));
          else {
            const t9 = r7;
            t9.fatal && (t9.continue = false), t9.code ?? (t9.code = "custom"), t9.input ?? (t9.input = n3.value), t9.inst ?? (t9.inst = e11), n3.issues.push(issue(t9));
          }
        };
        const o4 = t8.transform(n3.value, n3);
        return o4 instanceof Promise ? o4.then((e12) => (n3.value = e12, n3)) : (n3.value = o4, n3);
      };
    });
    Ht2 = $constructor("ZodOptional", (e11, t8) => {
      Ce2.init(e11, t8), dt2.init(e11, t8), e11._zod.processJSONSchema = (t9, n3, r6) => optionalProcessor(e11, t9, 0, r6), e11.unwrap = () => e11._zod.def.innerType;
    });
    __name(optional, "optional");
    Lt2 = $constructor("ZodExactOptional", (e11, t8) => {
      Ze2.init(e11, t8), dt2.init(e11, t8), e11._zod.processJSONSchema = (t9, n3, r6) => optionalProcessor(e11, t9, 0, r6), e11.unwrap = () => e11._zod.def.innerType;
    });
    Wt2 = $constructor("ZodNullable", (e11, t8) => {
      Ie2.init(e11, t8), dt2.init(e11, t8), e11._zod.processJSONSchema = (t9, n3, r6) => ((e12, t10, n4, r7) => {
        const o4 = e12._zod.def, s6 = process(o4.innerType, t10, r7), i6 = t10.seen.get(e12);
        "openapi-3.0" === t10.target ? (i6.ref = o4.innerType, n4.nullable = true) : n4.anyOf = [s6, { type: "null" }];
      })(e11, t9, n3, r6), e11.unwrap = () => e11._zod.def.innerType;
    });
    __name(nullable, "nullable");
    Ut2 = $constructor("ZodDefault", (e11, t8) => {
      De2.init(e11, t8), dt2.init(e11, t8), e11._zod.processJSONSchema = (t9, n3, r6) => ((e12, t10, n4, r7) => {
        const o4 = e12._zod.def;
        process(o4.innerType, t10, r7), t10.seen.get(e12).ref = o4.innerType, n4.default = JSON.parse(JSON.stringify(o4.defaultValue));
      })(e11, t9, n3, r6), e11.unwrap = () => e11._zod.def.innerType, e11.removeDefault = e11.unwrap;
    });
    Mt2 = $constructor("ZodPrefault", (e11, t8) => {
      Je2.init(e11, t8), dt2.init(e11, t8), e11._zod.processJSONSchema = (t9, n3, r6) => ((e12, t10, n4, r7) => {
        const o4 = e12._zod.def;
        process(o4.innerType, t10, r7), t10.seen.get(e12).ref = o4.innerType, "input" === t10.io && (n4._prefault = JSON.parse(JSON.stringify(o4.defaultValue)));
      })(e11, t9, n3, r6), e11.unwrap = () => e11._zod.def.innerType;
    });
    Ft2 = $constructor("ZodNonOptional", (e11, t8) => {
      Ke2.init(e11, t8), dt2.init(e11, t8), e11._zod.processJSONSchema = (t9, n3, r6) => ((e12, t10, n4, r7) => {
        const o4 = e12._zod.def;
        process(o4.innerType, t10, r7), t10.seen.get(e12).ref = o4.innerType;
      })(e11, t9, 0, r6), e11.unwrap = () => e11._zod.def.innerType;
    });
    Vt2 = $constructor("ZodCatch", (e11, t8) => {
      Ne2.init(e11, t8), dt2.init(e11, t8), e11._zod.processJSONSchema = (t9, n3, r6) => ((e12, t10, n4, r7) => {
        const o4 = e12._zod.def;
        let s6;
        process(o4.innerType, t10, r7), t10.seen.get(e12).ref = o4.innerType;
        try {
          s6 = o4.catchValue(void 0);
        } catch {
          throw new Error("Dynamic catch values are not supported in JSON Schema");
        }
        n4.default = s6;
      })(e11, t9, n3, r6), e11.unwrap = () => e11._zod.def.innerType, e11.removeCatch = e11.unwrap;
    });
    Bt2 = $constructor("ZodPipe", (e11, t8) => {
      He2.init(e11, t8), dt2.init(e11, t8), e11._zod.processJSONSchema = (t9, n3, r6) => ((e12, t10, n4, r7) => {
        const o4 = e12._zod.def, s6 = "input" === t10.io ? "transform" === o4.in._zod.def.type ? o4.out : o4.in : o4.out;
        process(s6, t10, r7), t10.seen.get(e12).ref = s6;
      })(e11, t9, 0, r6), e11.in = t8.in, e11.out = t8.out;
    });
    __name(pipe, "pipe");
    qt2 = $constructor("ZodReadonly", (e11, t8) => {
      Le2.init(e11, t8), dt2.init(e11, t8), e11._zod.processJSONSchema = (t9, n3, r6) => ((e12, t10, n4, r7) => {
        const o4 = e12._zod.def;
        process(o4.innerType, t10, r7), t10.seen.get(e12).ref = o4.innerType, n4.readOnly = true;
      })(e11, t9, n3, r6), e11.unwrap = () => e11._zod.def.innerType;
    });
    Gt2 = $constructor("ZodCustom", (e11, t8) => {
      We2.init(e11, t8), dt2.init(e11, t8), e11._zod.processJSONSchema = (e12, t9, n3) => ((e13, t10) => {
        if ("throw" === t10.unrepresentable) throw new Error("Custom types cannot be represented in JSON Schema");
      })(0, e12);
    });
    Yt2 = (function(e11, t8) {
      const n3 = { type: "object", shape: e11 ?? {}, ...normalizeParams(t8) };
      return new It2(n3);
    })({ email: (Xt2 = "Email is required", _email(ht2, Xt2)), password: (function(e11) {
      return (function(e12, t8) {
        return new e12({ type: "string", ...normalizeParams(t8) });
      })(lt2, e11);
    })().min(1, "Password is required") });
    Qt2 = defineEventHandler(async (e11) => {
      const s6 = await readBody(e11), i6 = Yt2.safeParse(s6);
      if (!i6.success) throw flattenError(i6.error);
      const a6 = await usePrisma.user.findFirstOrThrow({ where: { email: s6.email }, select: { first_name: true, middle_name: true, last_name: true, password: true, permissions: { select: { id: true, name: true } }, roles: { select: { name: true, permissions: { select: { id: true, name: true } } } } } });
      if (!await y2.compare(s6.password, a6.password)) throw { message: "Invalid user credentials" };
      const c6 = new TextEncoder().encode(m2.env.ENC_KEY);
      return { token: await new SignJWT(a6).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("30s").sign(c6) };
    });
  }
});

// .output/server/chunks/routes/api/index.get.mjs
var index_get_exports = {};
__export(index_get_exports, {
  default: () => e6
});
import "node:buffer";
import "node:timers";
import "node:events";
import "node:process";
import "cloudflare:workers";
import "node:util";
import "node:crypto";
import "node:dns";
import "node:fs/promises";
import "node:net";
import "node:tls";
import "node:path";
import "node:stream";
import "node:string_decoder";
var e6;
var init_index_get = __esm({
  ".output/server/chunks/routes/api/index.get.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_nitro();
    init_prisma();
    e6 = defineEventHandler(async () => ({ permissions: await usePrisma.permission.findMany({ select: { id: true, name: true, description: true }, orderBy: { id: "desc" } }) }));
  }
});

// .output/server/chunks/routes/api/index.post.mjs
var index_post_exports = {};
__export(index_post_exports, {
  default: () => e7
});
import "node:buffer";
import "node:timers";
import "node:events";
import "node:process";
import "cloudflare:workers";
import "node:util";
import "node:crypto";
import "node:dns";
import "node:fs/promises";
import "node:net";
import "node:tls";
import "node:path";
import "node:stream";
import "node:string_decoder";
var e7;
var init_index_post = __esm({
  ".output/server/chunks/routes/api/index.post.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_nitro();
    init_prisma();
    e7 = defineEventHandler(async (o4) => {
      const e11 = await readBody(o4);
      return { permission: await usePrisma.permission.create({ data: e11 }) };
    });
  }
});

// .output/server/chunks/routes/api/index.get2.mjs
var index_get2_exports = {};
__export(index_get2_exports, {
  default: () => t2
});
import "node:buffer";
import "node:timers";
import "node:events";
import "node:process";
import "cloudflare:workers";
import "node:util";
import "node:crypto";
import "node:dns";
import "node:fs/promises";
import "node:net";
import "node:tls";
import "node:path";
import "node:stream";
import "node:string_decoder";
var t2;
var init_index_get2 = __esm({
  ".output/server/chunks/routes/api/index.get2.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_nitro();
    init_prisma();
    t2 = defineEventHandler(async (o4) => ({ post: await usePrisma.post.findMany({ orderBy: { id: "asc" } }) }));
  }
});

// .output/server/chunks/_/utils.mjs
async function restore(r6, a6) {
  return await r6.update({ where: { id: a6 }, data: { deleted_at: null } });
}
function useHash() {
  return { verify: /* @__PURE__ */ __name(async function(r6, t8) {
    return await y2.compare(r6, t8);
  }, "verify"), hash: /* @__PURE__ */ __name(async function(r6) {
    return await y2.hash(r6, 10);
  }, "hash") };
}
var init_utils = __esm({
  ".output/server/chunks/_/utils.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_nitro();
    init_bcrypt();
    __name(restore, "restore");
    __name(useHash, "useHash");
    m2.env.ENC_KEY;
  }
});

// .output/server/chunks/routes/api/index.post2.mjs
var index_post2_exports = {};
__export(index_post2_exports, {
  default: () => m6
});
import "node:buffer";
import "node:timers";
import "node:events";
import "node:process";
import "cloudflare:workers";
import "node:util";
import "node:crypto";
import "node:dns";
import "node:fs/promises";
import "node:net";
import "node:tls";
import "node:path";
import "node:stream";
import "node:string_decoder";
var m6;
var init_index_post2 = __esm({
  ".output/server/chunks/routes/api/index.post2.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_nitro();
    init_prisma();
    init_utils();
    init_bcrypt();
    m6 = defineEventHandler(async (o4) => await restore(usePrisma.post, 1));
  }
});

// .output/server/chunks/routes/api/index.get3.mjs
var index_get3_exports = {};
__export(index_get3_exports, {
  default: () => r2
});
import "node:buffer";
import "node:timers";
import "node:events";
import "node:process";
import "cloudflare:workers";
import "node:util";
import "node:crypto";
import "node:dns";
import "node:fs/promises";
import "node:net";
import "node:tls";
import "node:path";
import "node:stream";
import "node:string_decoder";
var r2;
var init_index_get3 = __esm({
  ".output/server/chunks/routes/api/index.get3.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_nitro();
    init_prisma();
    r2 = defineEventHandler(async (o4) => ({ roles: await usePrisma().role.findMany({ select: { id: true, name: true, description: true, permissions: { select: { id: true, name: true, description: true } } }, orderBy: { name: "asc" } }) }));
  }
});

// .output/server/chunks/routes/api/index.post3.mjs
var index_post3_exports = {};
__export(index_post3_exports, {
  default: () => t3
});
import "node:buffer";
import "node:timers";
import "node:events";
import "node:process";
import "cloudflare:workers";
import "node:util";
import "node:crypto";
import "node:dns";
import "node:fs/promises";
import "node:net";
import "node:tls";
import "node:path";
import "node:stream";
import "node:string_decoder";
var t3;
var init_index_post3 = __esm({
  ".output/server/chunks/routes/api/index.post3.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_nitro();
    init_prisma();
    t3 = defineEventHandler(async (e11) => {
      const t8 = await readBody(e11);
      return { role: await usePrisma.role.create({ data: { ...t8, permissions: { create: [{ name: `Create ${t8.name}`, description: "No Description" }, { name: `Read ${t8.name}`, description: "No Description" }, { name: `Update ${t8.name}`, description: "No Description" }, { name: `Delete ${t8.name}`, description: "No Description" }] } } }) };
    });
  }
});

// .output/server/chunks/routes/api/user/_id_.get.mjs
var id_get_exports = {};
__export(id_get_exports, {
  default: () => t4
});
import "node:buffer";
import "node:timers";
import "node:events";
import "node:process";
import "cloudflare:workers";
import "node:util";
import "node:crypto";
import "node:dns";
import "node:fs/promises";
import "node:net";
import "node:tls";
import "node:path";
import "node:stream";
import "node:string_decoder";
var t4;
var init_id_get = __esm({
  ".output/server/chunks/routes/api/user/_id_.get.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_nitro();
    init_prisma();
    t4 = defineEventHandler(async (o4) => {
      const t8 = Number(getRouterParam(o4, "id"));
      if (!t8 || "number" != typeof t8) throw "Please provide a valid ID";
      return { user: await usePrisma.user.findFirst({ where: { id: t8 } }) };
    });
  }
});

// .output/server/chunks/routes/api/user/_id_.put.mjs
var id_put_exports = {};
__export(id_put_exports, {
  default: () => i3
});
import "node:buffer";
import "node:timers";
import "node:events";
import "node:process";
import "cloudflare:workers";
import "node:util";
import "node:crypto";
import "node:dns";
import "node:fs/promises";
import "node:net";
import "node:tls";
import "node:path";
import "node:stream";
import "node:string_decoder";
var i3;
var init_id_put = __esm({
  ".output/server/chunks/routes/api/user/_id_.put.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_nitro();
    init_prisma();
    i3 = defineEventHandler(async (o4) => {
      const i6 = Number(getRouterParam(o4, "id"));
      if (!i6 || "number" != typeof i6) throw "Please provide a valid ID";
      const m7 = await readBody(o4);
      return await usePrisma.user.update({ where: { id: i6 }, data: m7 });
    });
  }
});

// .output/server/chunks/routes/api/index.get4.mjs
var index_get4_exports = {};
__export(index_get4_exports, {
  default: () => t5
});
import "node:buffer";
import "node:events";
import "node:util";
import "node:crypto";
import "node:dns";
import "node:fs/promises";
import "node:net";
import "node:tls";
import "node:path";
import "node:stream";
import "node:string_decoder";
import "node:timers";
import "node:process";
import "cloudflare:workers";
var t5;
var init_index_get4 = __esm({
  ".output/server/chunks/routes/api/index.get4.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_prisma();
    init_nitro();
    t5 = defineEventHandler(async () => {
      const [e11, t8] = await Promise.all([usePrisma.user.findMany({ orderBy: { created_at: "asc" }, include: { posts: { select: { id: true, title: true, created_at: true } }, roles: { select: { name: true } } } }), usePrisma.user.count()]);
      return { users: e11, total: t8 };
    });
  }
});

// .output/server/chunks/routes/api/index.post4.mjs
var index_post4_exports = {};
__export(index_post4_exports, {
  default: () => e8
});
import "node:buffer";
import "node:timers";
import "node:events";
import "node:process";
import "cloudflare:workers";
import "node:util";
import "node:crypto";
import "node:dns";
import "node:fs/promises";
import "node:net";
import "node:tls";
import "node:path";
import "node:stream";
import "node:string_decoder";
var e8;
var init_index_post4 = __esm({
  ".output/server/chunks/routes/api/index.post4.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_nitro();
    init_prisma();
    e8 = defineEventHandler(async (o4) => {
      const e11 = await readBody(o4);
      return { user: await usePrisma.user.create({ data: e11, include: { posts: true } }) };
    });
  }
});

// .output/server/chunks/routes/api/index.put.mjs
var index_put_exports = {};
__export(index_put_exports, {
  default: () => s3
});
import "node:buffer";
import "node:timers";
import "node:events";
import "node:process";
import "cloudflare:workers";
import "node:util";
import "node:crypto";
import "node:dns";
import "node:fs/promises";
import "node:net";
import "node:tls";
import "node:path";
import "node:stream";
import "node:string_decoder";
var s3;
var init_index_put = __esm({
  ".output/server/chunks/routes/api/index.put.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_nitro();
    init_utils();
    init_prisma();
    init_bcrypt();
    s3 = defineEventHandler(async (o4) => {
      const s6 = await readBody(o4);
      s6.password = await useHash().hash(s6.password);
      return { user: await usePrisma.user.update({ data: s6, where: { id: s6.id }, include: { roles: true } }) };
    });
  }
});

// .output/server/chunks/routes/index.mjs
var routes_exports = {};
__export(routes_exports, {
  default: () => t6
});
import "node:buffer";
import "node:timers";
import "node:events";
import "node:process";
import "cloudflare:workers";
var t6;
var init_routes = __esm({
  ".output/server/chunks/routes/index.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_nitro();
    t6 = rr2((e11) => '\n      <meta charset="utf-8">\n      <h1>This is your brand new Nitro project \u{1F680} </h1>\n      <p>Get started by editing the <code>server/routes/index.ts</code> file.</p>\n      <p>Learn more from \u{1F4D6} <a href="https://nitro.build/guide" target="_blank">Nitro Documentation</a></p>\n    ');
  }
});

// .output/server/chunks/routes/roles.mjs
var roles_exports = {};
__export(roles_exports, {
  default: () => r3
});
import "node:buffer";
import "node:timers";
import "node:events";
import "node:process";
import "cloudflare:workers";
import "node:util";
import "node:crypto";
import "node:dns";
import "node:fs/promises";
import "node:net";
import "node:tls";
import "node:path";
import "node:stream";
import "node:string_decoder";
var r3;
var init_roles = __esm({
  ".output/server/chunks/routes/roles.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_nitro();
    init_prisma();
    r3 = defineEventHandler(async (o4) => ({ roles: await usePrisma.role.findMany({ select: { id: true, name: true, description: true, permissions: { select: { id: true, name: true, description: true } } }, orderBy: { name: "asc" } }) }));
  }
});

// .output/server/chunks/routes/test.mjs
var test_exports = {};
__export(test_exports, {
  default: () => r4
});
import "node:buffer";
import "node:timers";
import "node:events";
import "node:process";
import "cloudflare:workers";
var r4;
var init_test = __esm({
  ".output/server/chunks/routes/test.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_nitro();
    r4 = defineEventHandler(() => ({ message: "Congratulations", title: "Nitro Prisma App Working In Cloudflare" }));
  }
});

// .output/server/chunks/routes/ws/post.mjs
var post_exports = {};
__export(post_exports, {
  default: () => e9
});
import "node:buffer";
import "node:timers";
import "node:events";
import "node:process";
import "cloudflare:workers";
var e9;
var init_post = __esm({
  ".output/server/chunks/routes/ws/post.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_nitro();
    e9 = defineWebSocket({ message: /* @__PURE__ */ __name((o4, e11) => {
      console.log(e11.data);
    }, "message") });
  }
});

// .output/server/chunks/_/nitro.mjs
import { Buffer as e10 } from "node:buffer";
import { setImmediate as t7 } from "node:timers";
import { EventEmitter as r5 } from "node:events";
import s4 from "node:process";
import { env as a4 } from "cloudflare:workers";
function createNotImplementedError(e11) {
  return new Error(`[unenv] ${e11} is not implemented yet!`);
}
function notImplemented(e11) {
  return Object.assign(() => {
    throw createNotImplementedError(e11);
  }, { __unenv__: true });
}
function notImplementedAsync(e11) {
  const t8 = notImplemented(e11);
  return t8.__promisify__ = () => notImplemented(e11 + ".__promisify__"), t8.native = t8, t8;
}
function notImplementedClass(e11) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${e11} is not implemented yet!`);
    }
  };
}
function jsonParseTransform(e11, t8) {
  if (!("__proto__" === e11 || "constructor" === e11 && t8 && "object" == typeof t8 && "prototype" in t8)) return t8;
  !(function(e12) {
    console.warn(`[destr] Dropping "${e12}" key to prevent prototype pollution.`);
  })(e11);
}
function destr(e11, t8 = {}) {
  if ("string" != typeof e11) return e11;
  if ('"' === e11[0] && '"' === e11[e11.length - 1] && -1 === e11.indexOf("\\")) return e11.slice(1, -1);
  const r6 = e11.trim();
  if (r6.length <= 9) switch (r6.toLowerCase()) {
    case "true":
      return true;
    case "false":
      return false;
    case "undefined":
      return;
    case "null":
      return null;
    case "nan":
      return Number.NaN;
    case "infinity":
      return Number.POSITIVE_INFINITY;
    case "-infinity":
      return Number.NEGATIVE_INFINITY;
  }
  if (!Rt3.test(e11)) {
    if (t8.strict) throw new SyntaxError("[destr] Invalid JSON");
    return e11;
  }
  try {
    if (_t3.test(e11) || bt3.test(e11)) {
      if (t8.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e11, jsonParseTransform);
    }
    return JSON.parse(e11);
  } catch (r7) {
    if (t8.strict) throw r7;
    return e11;
  }
}
function encodeQueryValue(e11) {
  return (t8 = "string" == typeof e11 ? e11 : JSON.stringify(e11), encodeURI("" + t8).replace(Ht3, "|")).replace(St3, "%2B").replace(It3, "+").replace(xt3, "%23").replace(Et3, "%26").replace(jt3, "`").replace(At3, "^").replace(kt3, "%2F");
  var t8;
}
function encodeQueryKey(e11) {
  return encodeQueryValue(e11).replace(Ct3, "%3D");
}
function decode(e11 = "") {
  try {
    return decodeURIComponent("" + e11);
  } catch {
    return "" + e11;
  }
}
function decodeQueryKey(e11) {
  return decode(e11.replace(St3, " "));
}
function decodeQueryValue(e11) {
  return decode(e11.replace(St3, " "));
}
function parseQuery(e11 = "") {
  const t8 = /* @__PURE__ */ Object.create(null);
  "?" === e11[0] && (e11 = e11.slice(1));
  for (const r6 of e11.split("&")) {
    const e12 = r6.match(/([^=]+)=?(.*)/) || [];
    if (e12.length < 2) continue;
    const s6 = decodeQueryKey(e12[1]);
    if ("__proto__" === s6 || "constructor" === s6) continue;
    const a6 = decodeQueryValue(e12[2] || "");
    void 0 === t8[s6] ? t8[s6] = a6 : Array.isArray(t8[s6]) ? t8[s6].push(a6) : t8[s6] = [t8[s6], a6];
  }
  return t8;
}
function stringifyQuery(e11) {
  return Object.keys(e11).filter((t8) => void 0 !== e11[t8]).map((t8) => {
    return r6 = t8, "number" != typeof (s6 = e11[t8]) && "boolean" != typeof s6 || (s6 = String(s6)), s6 ? Array.isArray(s6) ? s6.map((e12) => `${encodeQueryKey(r6)}=${encodeQueryValue(e12)}`).join("&") : `${encodeQueryKey(r6)}=${encodeQueryValue(s6)}` : encodeQueryKey(r6);
    var r6, s6;
  }).filter(Boolean).join("&");
}
function hasProtocol(e11, t8 = {}) {
  return "boolean" == typeof t8 && (t8 = { acceptRelative: t8 }), t8.strict ? Pt3.test(e11) : Tt3.test(e11) || !!t8.acceptRelative && Ot3.test(e11);
}
function withoutTrailingSlash(e11 = "", t8) {
  return ((function(e12 = "") {
    return e12.endsWith("/");
  })(e11) ? e11.slice(0, -1) : e11) || "/";
}
function withTrailingSlash(e11 = "", t8) {
  return e11.endsWith("/") ? e11 : e11 + "/";
}
function withoutBase(e11, t8) {
  if (isEmptyURL(t8)) return e11;
  const r6 = withoutTrailingSlash(t8);
  if (!e11.startsWith(r6)) return e11;
  const s6 = e11[r6.length];
  if (s6 && "/" !== s6 && "?" !== s6) return e11;
  const a6 = e11.slice(r6.length);
  return "/" === a6[0] ? a6 : "/" + a6;
}
function withQuery(e11, t8) {
  const r6 = parseURL(e11), s6 = { ...parseQuery(r6.search), ...t8 };
  return r6.search = stringifyQuery(s6), (function(e12) {
    const t9 = e12.pathname || "", r7 = e12.search ? (e12.search.startsWith("?") ? "" : "?") + e12.search : "", s7 = e12.hash || "", a6 = e12.auth ? e12.auth + "@" : "", c6 = e12.host || "", d4 = e12.protocol || e12[Nt3] ? (e12.protocol || "") + "//" : "";
    return d4 + a6 + c6 + t9 + r7 + s7;
  })(r6);
}
function getQuery(e11) {
  return parseQuery(parseURL(e11).search);
}
function isEmptyURL(e11) {
  return !e11 || "/" === e11;
}
function joinURL(e11, ...t8) {
  let r6 = e11 || "";
  for (const e12 of t8.filter((e13) => /* @__PURE__ */ (function(e14) {
    return e14 && "/" !== e14;
  })(e13))) if (r6) {
    const t9 = e12.replace(Mt3, "");
    r6 = withTrailingSlash(r6) + t9;
  } else r6 = e12;
  return r6;
}
function parseURL(e11 = "", t8) {
  const r6 = e11.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (r6) {
    const [, e12, t9 = ""] = r6;
    return { protocol: e12.toLowerCase(), pathname: t9, href: e12 + t9, auth: "", host: "", search: "", hash: "" };
  }
  if (!hasProtocol(e11, { acceptRelative: true })) return parsePath(e11);
  const [, s6 = "", a6, c6 = ""] = e11.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, d4 = "", u5 = ""] = c6.match(/([^#/?]*)(.*)?/) || [];
  "file:" === s6 && (u5 = u5.replace(/\/(?=[A-Za-z]:)/, ""));
  const { pathname: h7, search: f6, hash: m7 } = parsePath(u5);
  return { protocol: s6.toLowerCase(), auth: a6 ? a6.slice(0, Math.max(0, a6.length - 1)) : "", host: d4, pathname: h7, search: f6, hash: m7, [Nt3]: !s6 };
}
function parsePath(e11 = "") {
  const [t8 = "", r6 = "", s6 = ""] = (e11.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return { pathname: t8, search: r6, hash: s6 };
}
function createRouter$1(e11 = {}) {
  const t8 = { options: e11, rootNode: createRadixNode(), staticRoutesMap: {} }, normalizeTrailingSlash = /* @__PURE__ */ __name((t9) => e11.strictTrailingSlash ? t9 : t9.replace(/\/$/, "") || "/", "normalizeTrailingSlash");
  if (e11.routes) for (const r6 in e11.routes) insert(t8, normalizeTrailingSlash(r6), e11.routes[r6]);
  return { ctx: t8, lookup: /* @__PURE__ */ __name((e12) => (function(e13, t9) {
    const r6 = e13.staticRoutesMap[t9];
    if (r6) return r6.data;
    const s6 = t9.split("/"), a6 = {};
    let c6 = false, d4 = null, u5 = e13.rootNode, h7 = null;
    for (let e14 = 0; e14 < s6.length; e14++) {
      const t10 = s6[e14];
      null !== u5.wildcardChildNode && (d4 = u5.wildcardChildNode, h7 = s6.slice(e14).join("/"));
      const r7 = u5.children.get(t10);
      if (void 0 === r7) {
        if (u5 && u5.placeholderChildren.length > 1) {
          const t11 = s6.length - e14;
          u5 = u5.placeholderChildren.find((e15) => e15.maxDepth === t11) || null;
        } else u5 = u5.placeholderChildren[0] || null;
        if (!u5) break;
        u5.paramName && (a6[u5.paramName] = t10), c6 = true;
      } else u5 = r7;
    }
    null !== u5 && null !== u5.data || null === d4 || (u5 = d4, a6[u5.paramName || "_"] = h7, c6 = true);
    if (!u5) return null;
    if (c6) return { ...u5.data, params: c6 ? a6 : void 0 };
    return u5.data;
  })(t8, normalizeTrailingSlash(e12)), "lookup"), insert: /* @__PURE__ */ __name((e12, r6) => insert(t8, normalizeTrailingSlash(e12), r6), "insert"), remove: /* @__PURE__ */ __name((e12) => (function(e13, t9) {
    let r6 = false;
    const s6 = t9.split("/");
    let a6 = e13.rootNode;
    for (const e14 of s6) if (a6 = a6.children.get(e14), !a6) return r6;
    if (a6.data) {
      const e14 = s6.at(-1) || "";
      a6.data = null, 0 === Object.keys(a6.children).length && a6.parent && (a6.parent.children.delete(e14), a6.parent.wildcardChildNode = null, a6.parent.placeholderChildren = []), r6 = true;
    }
    return r6;
  })(t8, normalizeTrailingSlash(e12)), "remove") };
}
function insert(e11, t8, r6) {
  let s6 = true;
  const a6 = t8.split("/");
  let c6 = e11.rootNode, d4 = 0;
  const u5 = [c6];
  for (const e12 of a6) {
    let t9;
    if (t9 = c6.children.get(e12)) c6 = t9;
    else {
      const r7 = getNodeType(e12);
      t9 = createRadixNode({ type: r7, parent: c6 }), c6.children.set(e12, t9), r7 === Ut3 ? (t9.paramName = "*" === e12 ? "_" + d4++ : e12.slice(1), c6.placeholderChildren.push(t9), s6 = false) : r7 === qt3 && (c6.wildcardChildNode = t9, t9.paramName = e12.slice(3) || "_", s6 = false), u5.push(t9), c6 = t9;
    }
  }
  for (const [e12, t9] of u5.entries()) t9.maxDepth = Math.max(u5.length - e12, t9.maxDepth || 0);
  return c6.data = r6, true === s6 && (e11.staticRoutesMap[t8] = c6), c6;
}
function createRadixNode(e11 = {}) {
  return { type: e11.type || Bt3, maxDepth: 0, parent: e11.parent || null, children: /* @__PURE__ */ new Map(), data: e11.data || null, paramName: e11.paramName || null, wildcardChildNode: null, placeholderChildren: [] };
}
function getNodeType(e11) {
  return e11.startsWith("**") ? qt3 : ":" === e11[0] || "*" === e11 ? Ut3 : Bt3;
}
function toRouteMatcher(e11) {
  return /* @__PURE__ */ (function(e12, t8) {
    return { ctx: { table: e12 }, matchAll: /* @__PURE__ */ __name((r6) => _matchRoutes(r6, e12, t8), "matchAll") };
  })(_routerNodeToTable("", e11.ctx.rootNode), e11.ctx.options.strictTrailingSlash);
}
function _matchRoutes(e11, t8, r6) {
  true !== r6 && e11.endsWith("/") && (e11 = e11.slice(0, -1) || "/");
  const s6 = [];
  for (const [r7, a7] of _sortRoutesMap(t8.wildcard)) (e11 === r7 || e11.startsWith(r7 + "/")) && s6.push(a7);
  for (const [r7, a7] of _sortRoutesMap(t8.dynamic)) if (e11.startsWith(r7 + "/")) {
    const t9 = "/" + e11.slice(r7.length).split("/").splice(2).join("/");
    s6.push(..._matchRoutes(t9, a7));
  }
  const a6 = t8.static.get(e11);
  return a6 && s6.push(a6), s6.filter(Boolean);
}
function _sortRoutesMap(e11) {
  return [...e11.entries()].sort((e12, t8) => e12[0].length - t8[0].length);
}
function _routerNodeToTable(e11, t8) {
  const r6 = { static: /* @__PURE__ */ new Map(), wildcard: /* @__PURE__ */ new Map(), dynamic: /* @__PURE__ */ new Map() };
  return (/* @__PURE__ */ __name(function _addNode(e12, t9) {
    if (e12) if (t9.type !== Bt3 || e12.includes("*") || e12.includes(":")) {
      if (t9.type === qt3) r6.wildcard.set(e12.replace("/**", ""), t9.data);
      else if (t9.type === Ut3) {
        const s6 = _routerNodeToTable("", t9);
        return t9.data && s6.static.set("/", t9.data), void r6.dynamic.set(e12.replace(/\/\*|\/:\w+/, ""), s6);
      }
    } else t9.data && r6.static.set(e12, t9.data);
    for (const [r7, s6] of t9.children.entries()) _addNode(`${e12}/${r7}`.replace("//", "/"), s6);
  }, "_addNode"))(e11, t8), r6;
}
function isPlainObject2(e11) {
  if (null === e11 || "object" != typeof e11) return false;
  const t8 = Object.getPrototypeOf(e11);
  return (null === t8 || t8 === Object.prototype || null === Object.getPrototypeOf(t8)) && (!(Symbol.iterator in e11) && (!(Symbol.toStringTag in e11) || "[object Module]" === Object.prototype.toString.call(e11)));
}
function _defu(e11, t8, r6 = ".", s6) {
  if (!isPlainObject2(t8)) return _defu(e11, {}, r6, s6);
  const a6 = Object.assign({}, t8);
  for (const t9 in e11) {
    if ("__proto__" === t9 || "constructor" === t9) continue;
    const c6 = e11[t9];
    null != c6 && (s6 && s6(a6, t9, c6, r6) || (Array.isArray(c6) && Array.isArray(a6[t9]) ? a6[t9] = [...c6, ...a6[t9]] : isPlainObject2(c6) && isPlainObject2(a6[t9]) ? a6[t9] = _defu(c6, a6[t9], (r6 ? `${r6}.` : "") + t9.toString(), s6) : a6[t9] = c6));
  }
  return a6;
}
function createDefu(e11) {
  return (...t8) => t8.reduce((t9, r6) => _defu(t9, r6, "", e11), {});
}
function o2(e11) {
  throw new Error(`${e11} is not implemented yet!`);
}
function p4(e11) {
  const t8 = {};
  for (const [r6, s6] of Object.entries(e11)) r6 && (t8[r6] = (Array.isArray(s6) ? s6 : [s6]).filter(Boolean));
  return t8;
}
function v4(e11 = {}) {
  if (e11 instanceof Headers) return e11;
  const t8 = new Headers();
  for (const [r6, s6] of Object.entries(e11)) if (void 0 !== s6) {
    if (Array.isArray(s6)) {
      for (const e12 of s6) t8.append(r6, String(e12));
      continue;
    }
    t8.set(r6, String(s6));
  }
  return t8;
}
async function b3(e11, t8) {
  const r6 = new y4(), s6 = new w4(r6);
  let a6;
  if (r6.url = t8.url?.toString() || "/", !r6.url.startsWith("/")) {
    const e12 = new URL(r6.url);
    a6 = e12.host, r6.url = e12.pathname + e12.search + e12.hash;
  }
  r6.method = t8.method || "GET", r6.headers = (function(e12 = {}) {
    const t9 = new Dt3(), r7 = Array.isArray(e12) || (function(e13) {
      return "function" == typeof e13?.entries;
    })(e12) ? e12 : Object.entries(e12);
    for (const [e13, s7] of r7) if (s7) {
      if (void 0 === t9[e13]) {
        t9[e13] = s7;
        continue;
      }
      t9[e13] = [...Array.isArray(t9[e13]) ? t9[e13] : [t9[e13]], ...Array.isArray(s7) ? s7 : [s7]];
    }
    return t9;
  })(t8.headers || {}), r6.headers.host || (r6.headers.host = t8.host || a6 || "localhost"), r6.connection.encrypted = r6.connection.encrypted || "https" === t8.protocol, r6.body = t8.body || null, r6.__unenv__ = t8.context, await e11(r6, s6);
  let c6 = s6._data;
  (Ft3.has(s6.statusCode) || "HEAD" === r6.method.toUpperCase()) && (c6 = null, delete s6._headers["content-length"]);
  const d4 = { status: s6.statusCode, statusText: s6.statusMessage, headers: s6._headers, body: c6 };
  return r6.destroy(), s6.destroy(), d4;
}
function hasProp(e11, t8) {
  try {
    return t8 in e11;
  } catch {
    return false;
  }
}
function createError(e11) {
  if ("string" == typeof e11) return new H3Error(e11);
  if (isError(e11)) return e11;
  const t8 = new H3Error(e11.message ?? e11.statusMessage ?? "", { cause: e11.cause || e11 });
  if (hasProp(e11, "stack")) try {
    Object.defineProperty(t8, "stack", { get: /* @__PURE__ */ __name(() => e11.stack, "get") });
  } catch {
    try {
      t8.stack = e11.stack;
    } catch {
    }
  }
  if (e11.data && (t8.data = e11.data), e11.statusCode ? t8.statusCode = sanitizeStatusCode(e11.statusCode, t8.statusCode) : e11.status && (t8.statusCode = sanitizeStatusCode(e11.status, t8.statusCode)), e11.statusMessage ? t8.statusMessage = e11.statusMessage : e11.statusText && (t8.statusMessage = e11.statusText), t8.statusMessage) {
    const e12 = t8.statusMessage;
    sanitizeStatusMessage(t8.statusMessage) !== e12 && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.");
  }
  return void 0 !== e11.fatal && (t8.fatal = e11.fatal), void 0 !== e11.unhandled && (t8.unhandled = e11.unhandled), t8;
}
function isError(e11) {
  return true === e11?.constructor?.__h3_error__;
}
function getRouterParam(e11, t8, r6 = {}) {
  const s6 = (function(e12, t9 = {}) {
    let r7 = e12.context.params || {};
    if (t9.decode) {
      r7 = { ...r7 };
      for (const e13 in r7) r7[e13] = decode(r7[e13]);
    }
    return r7;
  })(e11, r6);
  return s6[t8];
}
function getRequestURL(e11, t8 = {}) {
  const r6 = (function(e12, t9 = {}) {
    if (t9.xForwardedHost) {
      const t10 = e12.node.req.headers["x-forwarded-host"], r7 = (t10 || "").split(",").shift()?.trim();
      if (r7) return r7;
    }
    return e12.node.req.headers.host || "localhost";
  })(e11, t8), s6 = (function(e12, t9 = {}) {
    return false !== t9.xForwardedProto && "https" === e12.node.req.headers["x-forwarded-proto"] || e12.node.req.connection?.encrypted ? "https" : "http";
  })(e11, t8), a6 = (e11.node.req.originalUrl || e11.path).replace(/^[/\\]+/g, "/");
  return new URL(a6, `${s6}://${r6}`);
}
function readRawBody(t8, r6 = "utf8") {
  !(function(e11, t9) {
    if (!(function(e12, t10) {
      if ("string" == typeof t10) {
        if (e12.method === t10) return true;
      } else if (t10.includes(e12.method)) return true;
      return false;
    })(e11, t9)) throw createError({ statusCode: 405, statusMessage: "HTTP method is not allowed." });
  })(t8, Vt3);
  const s6 = t8._requestBody || t8.web?.request?.body || t8.node.req[Qt3] || t8.node.req.rawBody || t8.node.req.body;
  if (s6) {
    const t9 = Promise.resolve(s6).then((t10) => e10.isBuffer(t10) ? t10 : "function" == typeof t10.pipeTo ? new Promise((r7, s7) => {
      const a7 = [];
      t10.pipeTo(new WritableStream({ write(e11) {
        a7.push(e11);
      }, close() {
        r7(e10.concat(a7));
      }, abort(e11) {
        s7(e11);
      } })).catch(s7);
    }) : "function" == typeof t10.pipe ? new Promise((r7, s7) => {
      const a7 = [];
      t10.on("data", (e11) => {
        a7.push(e11);
      }).on("end", () => {
        r7(e10.concat(a7));
      }).on("error", s7);
    }) : t10.constructor === Object ? e10.from(JSON.stringify(t10)) : t10 instanceof URLSearchParams ? e10.from(t10.toString()) : t10 instanceof FormData ? new Response(t10).bytes().then((t11) => e10.from(t11)) : e10.from(t10));
    return r6 ? t9.then((e11) => e11.toString(r6)) : t9;
  }
  if (!Number.parseInt(t8.node.req.headers["content-length"] || "") && !/\bchunked\b/i.test(String(t8.node.req.headers["transfer-encoding"] ?? ""))) return Promise.resolve(void 0);
  const a6 = t8.node.req[Qt3] = new Promise((r7, s7) => {
    const a7 = [];
    t8.node.req.on("error", (e11) => {
      s7(e11);
    }).on("data", (e11) => {
      a7.push(e11);
    }).on("end", () => {
      r7(e10.concat(a7));
    });
  });
  return r6 ? a6.then((e11) => e11.toString(r6)) : a6;
}
async function readBody(e11, t8 = {}) {
  const r6 = e11.node.req;
  if (hasProp(r6, Jt3)) return r6[Jt3];
  const s6 = r6.headers["content-type"] || "", a6 = await readRawBody(e11);
  let c6;
  return c6 = "application/json" === s6 ? _parseJSON(a6, t8.strict ?? true) : s6.startsWith("application/x-www-form-urlencoded") ? (function(e12) {
    const t9 = new URLSearchParams(e12), r7 = /* @__PURE__ */ Object.create(null);
    for (const [e13, s7] of t9.entries()) hasProp(r7, e13) ? (Array.isArray(r7[e13]) || (r7[e13] = [r7[e13]]), r7[e13].push(s7)) : r7[e13] = s7;
    return r7;
  })(a6) : s6.startsWith("text/") ? a6 : _parseJSON(a6, t8.strict ?? false), r6[Jt3] = c6, c6;
}
function _parseJSON(e11 = "", t8) {
  if (e11) try {
    return destr(e11, { strict: t8 });
  } catch {
    throw createError({ statusCode: 400, statusMessage: "Bad Request", message: "Invalid JSON body" });
  }
}
function handleCacheHeaders(e11, t8) {
  const r6 = ["public", ...t8.cacheControls || []];
  let s6 = false;
  if (void 0 !== t8.maxAge && r6.push("max-age=" + +t8.maxAge, "s-maxage=" + +t8.maxAge), t8.modifiedTime) {
    const r7 = new Date(t8.modifiedTime), a6 = e11.node.req.headers["if-modified-since"];
    e11.node.res.setHeader("last-modified", r7.toUTCString()), a6 && new Date(a6) >= r7 && (s6 = true);
  }
  if (t8.etag) {
    e11.node.res.setHeader("etag", t8.etag);
    e11.node.req.headers["if-none-match"] === t8.etag && (s6 = true);
  }
  return e11.node.res.setHeader("cache-control", r6.join(", ")), !!s6 && (e11.node.res.statusCode = 304, e11.handled || e11.node.res.end(), true);
}
function sanitizeStatusMessage(e11 = "") {
  return e11.replace(Yt3, "");
}
function sanitizeStatusCode(e11, t8 = 200) {
  return e11 ? ("string" == typeof e11 && (e11 = Number.parseInt(e11, 10)), e11 < 100 || e11 > 999 ? t8 : e11) : t8;
}
function splitCookiesString(e11) {
  if (Array.isArray(e11)) return e11.flatMap((e12) => splitCookiesString(e12));
  if ("string" != typeof e11) return [];
  const t8 = [];
  let r6, s6, a6, c6, d4, u5 = 0;
  const skipWhitespace = /* @__PURE__ */ __name(() => {
    for (; u5 < e11.length && /\s/.test(e11.charAt(u5)); ) u5 += 1;
    return u5 < e11.length;
  }, "skipWhitespace"), notSpecialChar = /* @__PURE__ */ __name(() => (s6 = e11.charAt(u5), "=" !== s6 && ";" !== s6 && "," !== s6), "notSpecialChar");
  for (; u5 < e11.length; ) {
    for (r6 = u5, d4 = false; skipWhitespace(); ) if (s6 = e11.charAt(u5), "," === s6) {
      for (a6 = u5, u5 += 1, skipWhitespace(), c6 = u5; u5 < e11.length && notSpecialChar(); ) u5 += 1;
      u5 < e11.length && "=" === e11.charAt(u5) ? (d4 = true, u5 = c6, t8.push(e11.slice(r6, a6)), r6 = u5) : u5 = a6 + 1;
    } else u5 += 1;
    (!d4 || u5 >= e11.length) && t8.push(e11.slice(r6));
  }
  return t8;
}
function send(e11, t8, r6) {
  return r6 && (function(e12, t9) {
    t9 && 304 !== e12.node.res.statusCode && !e12.node.res.getHeader("content-type") && e12.node.res.setHeader("content-type", t9);
  })(e11, r6), new Promise((r7) => {
    Xt3(() => {
      e11.handled || e11.node.res.end(t8), r7();
    });
  });
}
function setResponseStatus(e11, t8, r6) {
  t8 && (e11.node.res.statusCode = sanitizeStatusCode(t8, e11.node.res.statusCode)), r6 && (e11.node.res.statusMessage = sanitizeStatusMessage(r6));
}
function setResponseHeaders(e11, t8) {
  for (const [r6, s6] of Object.entries(t8)) e11.node.res.setHeader(r6, s6);
}
function sendStream(e11, t8) {
  if (!t8 || "object" != typeof t8) throw new Error("[h3] Invalid stream provided.");
  if (e11.node.res._data = t8, !e11.node.res.socket) return e11._handled = true, Promise.resolve();
  if (hasProp(t8, "pipeTo") && "function" == typeof t8.pipeTo) return t8.pipeTo(new WritableStream({ write(t9) {
    e11.node.res.write(t9);
  } })).then(() => {
    e11.node.res.end();
  });
  if (hasProp(t8, "pipe") && "function" == typeof t8.pipe) return new Promise((r6, s6) => {
    t8.pipe(e11.node.res), t8.on && (t8.on("end", () => {
      e11.node.res.end(), r6();
    }), t8.on("error", (e12) => {
      s6(e12);
    })), e11.node.res.on("close", () => {
      t8.abort && t8.abort();
    });
  });
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(e11, t8) {
  for (const [r6, s6] of t8.headers) "set-cookie" === r6 ? e11.node.res.appendHeader(r6, splitCookiesString(s6)) : e11.node.res.setHeader(r6, s6);
  if (t8.status && (e11.node.res.statusCode = sanitizeStatusCode(t8.status, e11.node.res.statusCode)), t8.statusText && (e11.node.res.statusMessage = sanitizeStatusMessage(t8.statusText)), t8.redirected && e11.node.res.setHeader("location", t8.url), t8.body) return sendStream(e11, t8.body);
  e11.node.res.end();
}
async function proxyRequest(e11, t8, r6 = {}) {
  let s6, a6;
  er2.has(e11.method) && (r6.streamRequest ? (s6 = (function(e12) {
    if (!Vt3.includes(e12.method)) return;
    const t9 = e12.web?.request?.body || e12._requestBody;
    return t9 || (Qt3 in e12.node.req || "rawBody" in e12.node.req || "body" in e12.node.req || "__unenv__" in e12.node.req ? new ReadableStream({ async start(t10) {
      const r7 = await readRawBody(e12, false);
      r7 && t10.enqueue(r7), t10.close();
    } }) : new ReadableStream({ start: /* @__PURE__ */ __name((t10) => {
      e12.node.req.on("data", (e13) => {
        t10.enqueue(e13);
      }), e12.node.req.on("end", () => {
        t10.close();
      }), e12.node.req.on("error", (e13) => {
        t10.error(e13);
      });
    }, "start") }));
  })(e11), a6 = "half") : s6 = await readRawBody(e11, false).catch(() => {
  }));
  const c6 = r6.fetchOptions?.method || e11.method, d4 = (function(e12, ...t9) {
    const r7 = t9.filter(Boolean);
    if (0 === r7.length) return e12;
    const s7 = new Headers(e12);
    for (const e13 of r7) {
      const t10 = Array.isArray(e13) ? e13 : "function" == typeof e13.entries ? e13.entries() : Object.entries(e13);
      for (const [e14, r8] of t10) void 0 !== r8 && s7.set(e14, r8);
    }
    return s7;
  })(getProxyRequestHeaders(e11, { host: t8.startsWith("/") }), r6.fetchOptions?.headers, r6.headers);
  return (async function(e12, t9, r7 = {}) {
    let s7;
    try {
      s7 = await _getFetch(r7.fetch)(t9, { headers: r7.headers, ignoreResponseError: true, ...r7.fetchOptions });
    } catch (e13) {
      throw createError({ status: 502, statusMessage: "Bad Gateway", cause: e13 });
    }
    e12.node.res.statusCode = sanitizeStatusCode(s7.status, e12.node.res.statusCode), e12.node.res.statusMessage = sanitizeStatusMessage(s7.statusText);
    const a7 = [];
    for (const [t10, r8] of s7.headers.entries()) "content-encoding" !== t10 && "content-length" !== t10 && ("set-cookie" !== t10 ? e12.node.res.setHeader(t10, r8) : a7.push(...splitCookiesString(r8)));
    a7.length > 0 && e12.node.res.setHeader("set-cookie", a7.map((e13) => (r7.cookieDomainRewrite && (e13 = rewriteCookieProperty(e13, r7.cookieDomainRewrite, "domain")), r7.cookiePathRewrite && (e13 = rewriteCookieProperty(e13, r7.cookiePathRewrite, "path")), e13)));
    r7.onResponse && await r7.onResponse(e12, s7);
    if (void 0 !== s7._data) return s7._data;
    if (e12.handled) return;
    if (false === r7.sendStream) {
      const t10 = new Uint8Array(await s7.arrayBuffer());
      return e12.node.res.end(t10);
    }
    if (s7.body) for await (const t10 of s7.body) e12.node.res.write(t10);
    return e12.node.res.end();
  })(e11, t8, { ...r6, fetchOptions: { method: c6, body: s6, duplex: a6, ...r6.fetchOptions, headers: d4 } });
}
function getProxyRequestHeaders(e11, t8) {
  const r6 = /* @__PURE__ */ Object.create(null), s6 = (function(e12) {
    const t9 = {};
    for (const r7 in e12.node.req.headers) {
      const s7 = e12.node.req.headers[r7];
      t9[r7] = Array.isArray(s7) ? s7.filter(Boolean).join(", ") : s7;
    }
    return t9;
  })(e11);
  for (const e12 in s6) (!tr2.has(e12) || "host" === e12 && t8?.host) && (r6[e12] = s6[e12]);
  return r6;
}
function fetchWithEvent(e11, t8, r6, s6) {
  return _getFetch(s6?.fetch)(t8, { ...r6, context: r6?.context || e11.context, headers: { ...getProxyRequestHeaders(e11, { host: "string" == typeof t8 && t8.startsWith("/") }), ...r6?.headers } });
}
function _getFetch(e11) {
  if (e11) return e11;
  if (globalThis.fetch) return globalThis.fetch;
  throw new Error("fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js.");
}
function rewriteCookieProperty(e11, t8, r6) {
  const s6 = "string" == typeof t8 ? { "*": t8 } : t8;
  return e11.replace(new RegExp(`(;\\s*${r6}=)([^;]+)`, "gi"), (e12, t9, r7) => {
    let a6;
    if (r7 in s6) a6 = s6[r7];
    else {
      if (!("*" in s6)) return e12;
      a6 = s6["*"];
    }
    return a6 ? t9 + a6 : "";
  });
}
function defineWebSocket(e11) {
  return e11;
}
function isEvent(e11) {
  return hasProp(e11, "__is_event__");
}
function createEvent(e11, t8) {
  return new H3Event(e11, t8);
}
function defineEventHandler(e11) {
  if ("function" == typeof e11) return e11.__is_handler__ = true, e11;
  const t8 = { onRequest: _normalizeArray(e11.onRequest), onBeforeResponse: _normalizeArray(e11.onBeforeResponse) }, _handler = /* @__PURE__ */ __name((r6) => (async function(e12, t9, r7) {
    if (r7.onRequest) {
      for (const t10 of r7.onRequest) if (await t10(e12), e12.handled) return;
    }
    const s6 = await t9(e12), a6 = { body: s6 };
    if (r7.onBeforeResponse) for (const t10 of r7.onBeforeResponse) await t10(e12, a6);
    return a6.body;
  })(r6, e11.handler, t8), "_handler");
  return _handler.__is_handler__ = true, _handler.__resolve__ = e11.handler.__resolve__, _handler.__websocket__ = e11.websocket, _handler;
}
function _normalizeArray(e11) {
  return e11 ? Array.isArray(e11) ? e11 : [e11] : void 0;
}
function isEventHandler(e11) {
  return hasProp(e11, "__is_handler__");
}
function toEventHandler(e11, t8, r6) {
  return isEventHandler(e11) || console.warn("[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.", r6 && "/" !== r6 ? `
     Route: ${r6}` : "", `
     Handler: ${e11}`), e11;
}
function createApp(e11 = {}) {
  const t8 = [], r6 = (function(e12, t9) {
    const r7 = t9.debug ? 2 : void 0;
    return rr2(async (s7) => {
      s7.node.req.originalUrl = s7.node.req.originalUrl || s7.node.req.url || "/";
      const a7 = s7._path || s7.node.req.url || "/";
      let c7;
      t9.onRequest && await t9.onRequest(s7);
      for (const d4 of e12) {
        if (d4.route.length > 1) {
          if (!a7.startsWith(d4.route)) continue;
          c7 = a7.slice(d4.route.length) || "/";
        } else c7 = a7;
        if (d4.match && !d4.match(c7, s7)) continue;
        s7._path = c7, s7.node.req.url = c7;
        const e13 = await d4.handler(s7), u5 = void 0 === e13 ? void 0 : await e13;
        if (void 0 !== u5) {
          const e14 = { body: u5 };
          return t9.onBeforeResponse && (s7._onBeforeResponseCalled = true, await t9.onBeforeResponse(s7, e14)), await handleHandlerResponse(s7, e14.body, r7), void (t9.onAfterResponse && (s7._onAfterResponseCalled = true, await t9.onAfterResponse(s7, e14)));
        }
        if (s7.handled) return void (t9.onAfterResponse && (s7._onAfterResponseCalled = true, await t9.onAfterResponse(s7, void 0)));
      }
      if (!s7.handled) throw createError({ statusCode: 404, statusMessage: `Cannot find any path matching ${s7.path || "/"}.` });
      t9.onAfterResponse && (s7._onAfterResponseCalled = true, await t9.onAfterResponse(s7, void 0));
    });
  })(t8, e11), s6 = /* @__PURE__ */ (function(e12) {
    return async (t9) => {
      let r7;
      for (const s7 of e12) {
        if ("/" === s7.route && !s7.handler.__resolve__) continue;
        if (!t9.startsWith(s7.route)) continue;
        if (r7 = t9.slice(s7.route.length) || "/", s7.match && !s7.match(r7, void 0)) continue;
        let e13 = { route: s7.route, handler: s7.handler };
        if (e13.handler.__resolve__) {
          const t10 = await e13.handler.__resolve__(r7);
          if (!t10) continue;
          e13 = { ...e13, ...t10, route: joinURL(e13.route || "/", t10.route || "/") };
        }
        return e13;
      }
    };
  })(t8);
  r6.__resolve__ = s6;
  const a6 = /* @__PURE__ */ (function(e12) {
    let t9;
    return () => (t9 || (t9 = e12()), t9);
  })(() => {
    return t9 = s6, { ...e11.websocket, async resolve(e12) {
      const r7 = e12.request?.url || e12.url || "/", { pathname: s7 } = "string" == typeof r7 ? parseURL(r7) : r7, a7 = await t9(s7);
      return a7?.handler?.__websocket__ || {};
    } };
    var t9;
  }), c6 = { use: /* @__PURE__ */ __name((e12, t9, r7) => use(c6, e12, t9, r7), "use"), resolve: s6, handler: r6, stack: t8, options: e11, get websocket() {
    return a6();
  } };
  return c6;
}
function use(e11, t8, r6, s6) {
  if (Array.isArray(t8)) for (const a6 of t8) use(e11, a6, r6, s6);
  else if (Array.isArray(r6)) for (const a6 of r6) use(e11, t8, a6, s6);
  else "string" == typeof t8 ? e11.stack.push(normalizeLayer({ ...s6, route: t8, handler: r6 })) : "function" == typeof t8 ? e11.stack.push(normalizeLayer({ ...r6, handler: t8 })) : e11.stack.push(normalizeLayer({ ...t8 }));
  return e11;
}
function normalizeLayer(e11) {
  let t8 = e11.handler;
  return t8.handler && (t8 = t8.handler), e11.lazy ? t8 = lazyEventHandler(t8) : isEventHandler(t8) || (t8 = toEventHandler(t8, 0, e11.route)), { route: withoutTrailingSlash(e11.route), match: e11.match, handler: t8 };
}
function handleHandlerResponse(t8, r6, s6) {
  if (null === r6) return (function(e11, t9) {
    if (e11.handled) return;
    t9 || 200 === e11.node.res.statusCode || (t9 = e11.node.res.statusCode);
    const r7 = sanitizeStatusCode(t9, 204);
    204 === r7 && e11.node.res.removeHeader("content-length"), e11.node.res.writeHead(r7), e11.node.res.end();
  })(t8);
  if (r6) {
    if (a6 = r6, "undefined" != typeof Response && a6 instanceof Response) return sendWebResponse(t8, r6);
    if ((function(e11) {
      if (!e11 || "object" != typeof e11) return false;
      if ("function" == typeof e11.pipe) {
        if ("function" == typeof e11._read) return true;
        if ("function" == typeof e11.abort) return true;
      }
      return "function" == typeof e11.pipeTo;
    })(r6)) return sendStream(t8, r6);
    if (r6.buffer) return send(t8, r6);
    if (r6.arrayBuffer && "function" == typeof r6.arrayBuffer) return r6.arrayBuffer().then((s7) => send(t8, e10.from(s7), r6.type));
    if (r6 instanceof Error) throw createError(r6);
    if ("function" == typeof r6.end) return true;
  }
  var a6;
  const c6 = typeof r6;
  if ("string" === c6) return send(t8, r6, Gt3.html);
  if ("object" === c6 || "boolean" === c6 || "number" === c6) return send(t8, JSON.stringify(r6, void 0, s6), Gt3.json);
  if ("bigint" === c6) return send(t8, r6.toString(), Gt3.json);
  throw createError({ statusCode: 500, statusMessage: `[h3] Cannot send ${c6} as response.` });
}
function toNodeListener(e11) {
  return async function(t8, r6) {
    const s6 = createEvent(t8, r6);
    try {
      await e11.handler(s6);
    } catch (t9) {
      const r7 = createError(t9);
      if (isError(t9) || (r7.unhandled = true), setResponseStatus(s6, r7.statusCode, r7.statusMessage), e11.options.onError && await e11.options.onError(r7, s6), s6.handled) return;
      (r7.unhandled || r7.fatal) && console.error("[h3]", r7.fatal ? "[fatal]" : "[unhandled]", r7), e11.options.onBeforeResponse && !s6._onBeforeResponseCalled && await e11.options.onBeforeResponse(s6, { body: r7 }), await (function(e12, t10, r8) {
        if (e12.handled) return;
        const s7 = isError(t10) ? t10 : createError(t10), a6 = { statusCode: s7.statusCode, statusMessage: s7.statusMessage, stack: [], data: s7.data };
        if (r8 && (a6.stack = (s7.stack || "").split("\n").map((e13) => e13.trim())), e12.handled) return;
        setResponseStatus(e12, Number.parseInt(s7.statusCode), s7.statusMessage), e12.node.res.setHeader("content-type", Gt3.json), e12.node.res.end(JSON.stringify(a6, void 0, 2));
      })(s6, r7, !!e11.options.debug), e11.options.onAfterResponse && !s6._onAfterResponseCalled && await e11.options.onAfterResponse(s6, { body: r7 });
    }
  };
}
function flatHooks(e11, t8 = {}, r6) {
  for (const s6 in e11) {
    const a6 = e11[s6], c6 = r6 ? `${r6}:${s6}` : s6;
    "object" == typeof a6 && null !== a6 ? flatHooks(a6, t8, c6) : "function" == typeof a6 && (t8[c6] = a6);
  }
  return t8;
}
function serialTaskCaller(e11, t8) {
  const r6 = t8.shift(), s6 = sr2(r6);
  return e11.reduce((e12, r7) => e12.then(() => s6.run(() => r7(...t8))), Promise.resolve());
}
function parallelTaskCaller(e11, t8) {
  const r6 = t8.shift(), s6 = sr2(r6);
  return Promise.all(e11.map((e12) => s6.run(() => e12(...t8))));
}
function callEachWith(e11, t8) {
  for (const r6 of [...e11]) r6(t8);
}
function isPayloadMethod(e11 = "GET") {
  return ir2.has(e11.toUpperCase());
}
function resolveFetchOptions(e11, t8, r6, s6) {
  const a6 = (function(e12, t9, r7) {
    if (!t9) return new r7(e12);
    const s7 = new r7(t9);
    if (e12) for (const [t10, a7] of Symbol.iterator in e12 || Array.isArray(e12) ? e12 : new r7(e12)) s7.set(t10, a7);
    return s7;
  })(t8?.headers ?? e11?.headers, r6?.headers, s6);
  let c6;
  return (r6?.query || r6?.params || t8?.params || t8?.query) && (c6 = { ...r6?.params, ...r6?.query, ...t8?.params, ...t8?.query }), { ...r6, ...t8, query: c6, params: c6, headers: a6 };
}
async function callHooks(e11, t8) {
  if (t8) if (Array.isArray(t8)) for (const r6 of t8) await r6(e11);
  else await t8(e11);
}
function createFetch(e11 = {}) {
  const { fetch: t8 = globalThis.fetch, Headers: r6 = globalThis.Headers, AbortController: s6 = globalThis.AbortController } = e11;
  async function onError(e12) {
    const t9 = e12.error && "AbortError" === e12.error.name && !e12.options.timeout || false;
    if (false !== e12.options.retry && !t9) {
      let t10;
      t10 = "number" == typeof e12.options.retry ? e12.options.retry : isPayloadMethod(e12.options.method) ? 0 : 1;
      const r8 = e12.response && e12.response.status || 500;
      if (t10 > 0 && (Array.isArray(e12.options.retryStatusCodes) ? e12.options.retryStatusCodes.includes(r8) : ur2.has(r8))) {
        const r9 = "function" == typeof e12.options.retryDelay ? e12.options.retryDelay(e12) : e12.options.retryDelay || 0;
        return r9 > 0 && await new Promise((e13) => setTimeout(e13, r9)), $fetchRaw(e12.request, { ...e12.options, retry: t10 - 1 });
      }
    }
    const r7 = (function(e13) {
      const t10 = e13.error?.message || e13.error?.toString() || "", r8 = e13.request?.method || e13.options?.method || "GET", s7 = e13.request?.url || String(e13.request) || "/", a6 = `[${r8}] ${JSON.stringify(s7)}`, c6 = e13.response ? `${e13.response.status} ${e13.response.statusText}` : "<no response>", d4 = new FetchError(`${a6}: ${c6}${t10 ? ` ${t10}` : ""}`, e13.error ? { cause: e13.error } : void 0);
      for (const t11 of ["request", "options", "response"]) Object.defineProperty(d4, t11, { get: /* @__PURE__ */ __name(() => e13[t11], "get") });
      for (const [t11, r9] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]]) Object.defineProperty(d4, t11, { get: /* @__PURE__ */ __name(() => e13.response && e13.response[r9], "get") });
      return d4;
    })(e12);
    throw Error.captureStackTrace && Error.captureStackTrace(r7, $fetchRaw), r7;
  }
  __name(onError, "onError");
  const $fetchRaw = /* @__PURE__ */ __name(async function(a6, c6 = {}) {
    const d4 = { request: a6, options: resolveFetchOptions(a6, c6, e11.defaults, r6), response: void 0, error: void 0 };
    if (d4.options.method && (d4.options.method = d4.options.method.toUpperCase()), d4.options.onRequest && (await callHooks(d4, d4.options.onRequest), d4.options.headers instanceof r6 || (d4.options.headers = new r6(d4.options.headers || {}))), "string" == typeof d4.request && (d4.options.baseURL && (d4.request = (function(e12, t9) {
      if (isEmptyURL(t9) || hasProtocol(e12)) return e12;
      const r7 = withoutTrailingSlash(t9);
      if (e12.startsWith(r7)) {
        const t10 = e12[r7.length];
        if (!t10 || "/" === t10 || "?" === t10) return e12;
      }
      return joinURL(r7, e12);
    })(d4.request, d4.options.baseURL)), d4.options.query && (d4.request = withQuery(d4.request, d4.options.query), delete d4.options.query), "query" in d4.options && delete d4.options.query, "params" in d4.options && delete d4.options.params), d4.options.body && isPayloadMethod(d4.options.method)) if ((function(e12) {
      if (void 0 === e12) return false;
      const t9 = typeof e12;
      return "string" === t9 || "number" === t9 || "boolean" === t9 || null === t9 || "object" === t9 && (!!Array.isArray(e12) || !e12.buffer && !(e12 instanceof FormData || e12 instanceof URLSearchParams) && (e12.constructor && "Object" === e12.constructor.name || "function" == typeof e12.toJSON));
    })(d4.options.body)) {
      const e12 = d4.options.headers.get("content-type");
      "string" != typeof d4.options.body && (d4.options.body = "application/x-www-form-urlencoded" === e12 ? new URLSearchParams(d4.options.body).toString() : JSON.stringify(d4.options.body)), e12 || d4.options.headers.set("content-type", "application/json"), d4.options.headers.has("accept") || d4.options.headers.set("accept", "application/json");
    } else ("pipeTo" in d4.options.body && "function" == typeof d4.options.body.pipeTo || "function" == typeof d4.options.body.pipe) && ("duplex" in d4.options || (d4.options.duplex = "half"));
    let u5;
    if (!d4.options.signal && d4.options.timeout) {
      const e12 = new s6();
      u5 = setTimeout(() => {
        const t9 = new Error("[TimeoutError]: The operation was aborted due to timeout");
        t9.name = "TimeoutError", t9.code = 23, e12.abort(t9);
      }, d4.options.timeout), d4.options.signal = e12.signal;
    }
    try {
      d4.response = await t8(d4.request, d4.options);
    } catch (e12) {
      return d4.error = e12, d4.options.onRequestError && await callHooks(d4, d4.options.onRequestError), await onError(d4);
    } finally {
      u5 && clearTimeout(u5);
    }
    if ((d4.response.body || d4.response._bodyInit) && !lr2.has(d4.response.status) && "HEAD" !== d4.options.method) {
      const e12 = (d4.options.parseResponse ? "json" : d4.options.responseType) || (function(e13 = "") {
        if (!e13) return "json";
        const t9 = e13.split(";").shift() || "";
        return dr2.test(t9) ? "json" : "text/event-stream" === t9 ? "stream" : cr2.has(t9) || t9.startsWith("text/") ? "text" : "blob";
      })(d4.response.headers.get("content-type") || "");
      switch (e12) {
        case "json": {
          const e13 = await d4.response.text(), t9 = d4.options.parseResponse || destr;
          d4.response._data = t9(e13);
          break;
        }
        case "stream":
          d4.response._data = d4.response.body || d4.response._bodyInit;
          break;
        default:
          d4.response._data = await d4.response[e12]();
      }
    }
    return d4.options.onResponse && await callHooks(d4, d4.options.onResponse), !d4.options.ignoreResponseError && d4.response.status >= 400 && d4.response.status < 600 ? (d4.options.onResponseError && await callHooks(d4, d4.options.onResponseError), await onError(d4)) : d4.response;
  }, "$fetchRaw"), $fetch = /* @__PURE__ */ __name(async function(e12, t9) {
    return (await $fetchRaw(e12, t9))._data;
  }, "$fetch");
  return $fetch.raw = $fetchRaw, $fetch.native = (...e12) => t8(...e12), $fetch.create = (t9 = {}, r7 = {}) => createFetch({ ...e11, ...r7, defaults: { ...e11.defaults, ...r7.defaults, ...t9 } }), $fetch;
}
function asyncCall(e11, ...t8) {
  try {
    return (r6 = e11(...t8)) && "function" == typeof r6.then ? r6 : Promise.resolve(r6);
  } catch (e12) {
    return Promise.reject(e12);
  }
  var r6;
}
function stringify(e11) {
  if (/* @__PURE__ */ (function(e12) {
    const t8 = typeof e12;
    return null === e12 || "object" !== t8 && "function" !== t8;
  })(e11)) return String(e11);
  if ((function(e12) {
    const t8 = Object.getPrototypeOf(e12);
    return !t8 || t8.isPrototypeOf(Object);
  })(e11) || Array.isArray(e11)) return JSON.stringify(e11);
  if ("function" == typeof e11.toJSON) return stringify(e11.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function serializeRaw(t8) {
  return "string" == typeof t8 ? t8 : yr2 + (function(t9) {
    if (globalThis.Buffer) return e10.from(t9).toString("base64");
    return globalThis.btoa(String.fromCodePoint(...t9));
  })(t8);
}
function deserializeRaw(t8) {
  return "string" != typeof t8 ? t8 : t8.startsWith(yr2) ? (function(t9) {
    if (globalThis.Buffer) return e10.from(t9, "base64");
    return Uint8Array.from(globalThis.atob(t9), (e11) => e11.codePointAt(0));
  })(t8.slice(7)) : t8;
}
function normalizeKey$1(e11) {
  return e11 && e11.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...e11) {
  return normalizeKey$1(e11.join(":"));
}
function normalizeBaseKey(e11) {
  return (e11 = normalizeKey$1(e11)) ? e11 + ":" : "";
}
function watch(e11, t8, r6) {
  return e11.watch ? e11.watch((e12, s6) => t8(e12, r6 + s6)) : () => {
  };
}
async function dispose(e11) {
  "function" == typeof e11.dispose && await asyncCall(e11.dispose);
}
function useStorage(e11 = "") {
  return e11 ? (function(e12, t8) {
    if (!(t8 = normalizeBaseKey(t8))) return e12;
    const r6 = { ...e12 };
    for (const s6 of gr2) r6[s6] = (r7 = "", ...a6) => e12[s6](t8 + r7, ...a6);
    return r6.getKeys = (r7 = "", ...s6) => e12.getKeys(t8 + r7, ...s6).then((e13) => e13.map((e14) => e14.slice(t8.length))), r6.keys = r6.getKeys, r6.getItems = async (r7, s6) => {
      const a6 = r7.map((e13) => "string" == typeof e13 ? t8 + e13 : { ...e13, key: t8 + e13.key });
      return (await e12.getItems(a6, s6)).map((e13) => ({ key: e13.key.slice(t8.length), value: e13.value }));
    }, r6.setItems = async (r7, s6) => {
      const a6 = r7.map((e13) => ({ key: t8 + e13.key, value: e13.value, options: e13.options }));
      return e12.setItems(a6, s6);
    }, r6;
  })(_r2, e11) : _r2;
}
function hash(e11) {
  return (function(e12) {
    return new k4().finalize(e12).toBase64();
  })("string" == typeof e11 ? e11 : (function(e12) {
    const t8 = new Er2();
    return t8.dispatch(e12), t8.buff;
  })(e11)).replace(/[-_]/g, "").slice(0, 10);
}
function defineCachedFunction(e11, t8 = {}) {
  t8 = { name: "_", base: "/cache", swr: true, maxAge: 1, ...t8 };
  const r6 = {}, s6 = t8.group || "nitro/functions", a6 = t8.name || e11.name || "_", c6 = t8.integrity || hash([e11, t8]), d4 = t8.validate || ((e12) => void 0 !== e12.value);
  return async (...u5) => {
    if (await t8.shouldBypassCache?.(...u5)) return e11(...u5);
    const h7 = await (t8.getKey || getKey)(...u5), f6 = await t8.shouldInvalidateCache?.(...u5), m7 = await (async function(e12, u6, h8, f7) {
      const m8 = [t8.base, s6, a6, e12 + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
      let g6 = await useStorage().getItem(m8).catch((e13) => {
        console.error("[cache] Cache read error.", e13), useNitroApp().captureError(e13, { event: f7, tags: ["cache"] });
      }) || {};
      if ("object" != typeof g6) {
        g6 = {};
        const e13 = new Error("Malformed data read from cache.");
        console.error("[cache]", e13), useNitroApp().captureError(e13, { event: f7, tags: ["cache"] });
      }
      const _4 = 1e3 * (t8.maxAge ?? 0);
      _4 && (g6.expires = Date.now() + _4);
      const R5 = h8 || g6.integrity !== c6 || _4 && Date.now() - (g6.mtime || 0) > _4 || false === d4(g6), x5 = R5 ? (async () => {
        const s7 = r6[e12];
        s7 || (void 0 !== g6.value && (t8.staleMaxAge || 0) >= 0 && false === t8.swr && (g6.value = void 0, g6.integrity = void 0, g6.mtime = void 0, g6.expires = void 0), r6[e12] = Promise.resolve(u6()));
        try {
          g6.value = await r6[e12];
        } catch (t9) {
          throw s7 || delete r6[e12], t9;
        }
        if (!s7 && (g6.mtime = Date.now(), g6.integrity = c6, delete r6[e12], false !== d4(g6))) {
          let e13;
          t8.maxAge && !t8.swr && (e13 = { ttl: t8.maxAge });
          const r7 = useStorage().setItem(m8, g6, e13).catch((e14) => {
            console.error("[cache] Cache write error.", e14), useNitroApp().captureError(e14, { event: f7, tags: ["cache"] });
          });
          f7?.waitUntil && f7.waitUntil(r7);
        }
      })() : Promise.resolve();
      return void 0 === g6.value ? await x5 : R5 && f7 && f7.waitUntil && f7.waitUntil(x5), t8.swr && false !== d4(g6) ? (x5.catch((e13) => {
        console.error("[cache] SWR handler error.", e13), useNitroApp().captureError(e13, { event: f7, tags: ["cache"] });
      }), g6) : x5.then(() => g6);
    })(h7, () => e11(...u5), f6, u5[0] && isEvent(u5[0]) ? u5[0] : void 0);
    let g5 = m7.value;
    return t8.transform && (g5 = await t8.transform(m7, ...u5) || g5), g5;
  };
}
function getKey(...e11) {
  return e11.length > 0 ? hash(e11) : "";
}
function escapeKey(e11) {
  return String(e11).replace(/\W/g, "");
}
function cloneWithProxy(e11, t8) {
  return new Proxy(e11, { get: /* @__PURE__ */ __name((e12, r6, s6) => r6 in t8 ? t8[r6] : Reflect.get(e12, r6, s6), "get"), set: /* @__PURE__ */ __name((e12, r6, s6, a6) => r6 in t8 ? (t8[r6] = s6, true) : Reflect.set(e12, r6, s6, a6), "set") });
}
function klona(e11) {
  if ("object" != typeof e11) return e11;
  var t8, r6, s6 = Object.prototype.toString.call(e11);
  if ("[object Object]" === s6) {
    if (e11.constructor !== Object && "function" == typeof e11.constructor) for (t8 in r6 = new e11.constructor(), e11) e11.hasOwnProperty(t8) && r6[t8] !== e11[t8] && (r6[t8] = klona(e11[t8]));
    else for (t8 in r6 = {}, e11) "__proto__" === t8 ? Object.defineProperty(r6, t8, { value: klona(e11[t8]), configurable: true, enumerable: true, writable: true }) : r6[t8] = klona(e11[t8]);
    return r6;
  }
  if ("[object Array]" === s6) {
    for (t8 = e11.length, r6 = Array(t8); t8--; ) r6[t8] = klona(e11[t8]);
    return r6;
  }
  return "[object Set]" === s6 ? (r6 = /* @__PURE__ */ new Set(), e11.forEach(function(e12) {
    r6.add(klona(e12));
  }), r6) : "[object Map]" === s6 ? (r6 = /* @__PURE__ */ new Map(), e11.forEach(function(e12, t9) {
    r6.set(klona(t9), klona(e12));
  }), r6) : "[object Date]" === s6 ? /* @__PURE__ */ new Date(+e11) : "[object RegExp]" === s6 ? ((r6 = new RegExp(e11.source, e11.flags)).lastIndex = e11.lastIndex, r6) : "[object DataView]" === s6 ? new e11.constructor(klona(e11.buffer)) : "[object ArrayBuffer]" === s6 ? e11.slice(0) : "Array]" === s6.slice(-6) ? new e11.constructor(e11) : e11;
}
function isUppercase(e11 = "") {
  if (!Cr2.test(e11)) return e11 !== e11.toLowerCase();
}
function kebabCase(e11, t8) {
  return e11 ? (Array.isArray(e11) ? e11 : (function(e12) {
    const t9 = Sr2, r6 = [];
    if (!e12 || "string" != typeof e12) return r6;
    let s6, a6, c6 = "";
    for (const d4 of e12) {
      const e13 = t9.includes(d4);
      if (true === e13) {
        r6.push(c6), c6 = "", s6 = void 0;
        continue;
      }
      const u5 = isUppercase(d4);
      if (false === a6) {
        if (false === s6 && true === u5) {
          r6.push(c6), c6 = d4, s6 = u5;
          continue;
        }
        if (true === s6 && false === u5 && c6.length > 1) {
          const e14 = c6.at(-1);
          r6.push(c6.slice(0, Math.max(0, c6.length - 1))), c6 = e14 + d4, s6 = u5;
          continue;
        }
      }
      c6 += d4, s6 = u5, a6 = e13;
    }
    return r6.push(c6), r6;
  })(e11)).map((e12) => e12.toLowerCase()).join(t8) : "";
}
function getEnv(e11, t8) {
  const r6 = (s6 = e11, kebabCase(s6 || "", "_")).toUpperCase();
  var s6;
  return destr(m2.env[t8.prefix + r6] ?? m2.env[t8.altPrefix + r6]);
}
function _isObject(e11) {
  return "object" == typeof e11 && !Array.isArray(e11);
}
function _expandFromEnv(e11) {
  return e11.replace(Ar2, (e12, t8) => m2.env[t8] || e12);
}
function useRuntimeConfig(e11) {
  return Ir2;
}
function _deepFreeze(e11) {
  const t8 = Object.getOwnPropertyNames(e11);
  for (const r6 of t8) {
    const t9 = e11[r6];
    t9 && "object" == typeof t9 && _deepFreeze(t9);
  }
  return Object.freeze(e11);
}
function createRouteRulesHandler(e11) {
  return rr2((t8) => {
    const r6 = (function(e12) {
      e12.context._nitro = e12.context._nitro || {}, e12.context._nitro.routeRules || (e12.context._nitro.routeRules = getRouteRulesForPath(withoutBase(e12.path.split("?")[0], useRuntimeConfig().app.baseURL)));
      return e12.context._nitro.routeRules;
    })(t8);
    if (r6.headers && Zt3(t8, r6.headers), r6.redirect) {
      let e12 = r6.redirect.to;
      if (e12.endsWith("/**")) {
        let s6 = t8.path;
        const a6 = r6.redirect._redirectStripBase;
        a6 && (s6 = withoutBase(s6, a6)), e12 = joinURL(e12.slice(0, -3), s6);
      } else if (t8.path.includes("?")) {
        e12 = withQuery(e12, getQuery(t8.path));
      }
      return (function(e13, t9, r7 = 302) {
        return e13.node.res.statusCode = sanitizeStatusCode(r7, e13.node.res.statusCode), e13.node.res.setHeader("location", t9), send(e13, `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${t9.replace(/"/g, "%22")}"></head></html>`, Gt3.html);
      })(t8, e12, r6.redirect.statusCode);
    }
    if (r6.proxy) {
      let s6 = r6.proxy.to;
      if (s6.endsWith("/**")) {
        let e12 = t8.path;
        const a6 = r6.proxy._proxyStripBase;
        a6 && (e12 = withoutBase(e12, a6)), s6 = joinURL(s6.slice(0, -3), e12);
      } else if (t8.path.includes("?")) {
        s6 = withQuery(s6, getQuery(t8.path));
      }
      return proxyRequest(t8, s6, { fetch: e11.localFetch, ...r6.proxy });
    }
  });
}
function getRouteRulesForPath(e11) {
  return zt3({}, ...Pr2.matchAll(e11).reverse());
}
function requestHasBody(e11) {
  return Tr2.test(e11.method);
}
function joinHeaders(e11) {
  return Array.isArray(e11) ? e11.join(", ") : String(e11);
}
function normalizeCookieHeader(e11 = "") {
  return splitCookiesString(joinHeaders(e11));
}
function normalizeCookieHeaders(e11) {
  const t8 = new Headers();
  for (const [r6, s6] of e11) if ("set-cookie" === r6) for (const e12 of normalizeCookieHeader(s6)) t8.append("set-cookie", e12);
  else t8.set(r6, joinHeaders(s6));
  return t8;
}
function defaultHandler(e11, t8, r6) {
  const s6 = e11.unhandled || e11.fatal, a6 = e11.statusCode || 500, c6 = e11.statusMessage || "Server Error", d4 = getRequestURL(t8, { xForwardedHost: true, xForwardedProto: true });
  if (404 === a6) {
    const e12 = "/";
    if (/^\/[^/]/.test(e12) && !d4.pathname.startsWith(e12)) {
      return { status: 302, statusText: "Found", headers: { location: `${e12}${d4.pathname.slice(1)}${d4.search}` }, body: "Redirecting..." };
    }
  }
  if (s6 && !r6?.silent) {
    const r7 = [e11.unhandled && "[unhandled]", e11.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${r7} [${t8.method}] ${d4}
`, e11);
  }
  const u5 = { "content-type": "application/json", "x-content-type-options": "nosniff", "x-frame-options": "DENY", "referrer-policy": "no-referrer", "content-security-policy": "script-src 'none'; frame-ancestors 'none';" };
  setResponseStatus(t8, a6, c6), 404 !== a6 && (function(e12, t9) {
    return e12.node.res.getHeader(t9);
  })(t8, "cache-control") || (u5["cache-control"] = "no-cache");
  return { status: a6, statusText: c6, headers: u5, body: { error: true, url: d4.href, statusCode: a6, statusMessage: c6, message: s6 ? "Server Error" : e11.message, data: s6 ? void 0 : e11.data } };
}
function useNitroApp() {
  return Br2;
}
var ReadStream, WriteStream, c4, Process, d3, u3, _getEnv, h5, f4, m2, g4, _3, R4, x4, E4, C4, S5, j3, H4, I4, P4, T4, O5, M3, N4, B4, q4, U4, z4, $4, L4, K4, W4, D4, F4, Q4, J4, V4, G4, Y4, X4, Z4, ee4, te4, re4, oe4, ne4, se4, ae4, ie4, ce4, de4, ue4, le3, he3, fe4, pe3, me3, ye3, ge3, we3, ve3, _e4, be4, Re3, xe3, Ee3, ke3, Ce3, Se3, Ae3, je3, He3, Ie3, Pe3, Te3, Oe2, Me3, Ne3, Be3, qe3, Ue3, ze3, $e3, Le3, Ke3, We3, De3, Fe3, Qe3, Je3, Ve3, Ge3, Ye3, Xe3, Ze3, et3, tt3, rt3, ot3, nt3, st3, at3, it3, ct3, dt3, ut3, lt3, ht3, ft3, pt3, mt3, yt3, gt3, wt3, vt3, randomUUID, _t3, bt3, Rt3, xt3, Et3, kt3, Ct3, St3, At3, jt3, Ht3, It3, Pt3, Tt3, Ot3, Mt3, Nt3, Bt3, qt3, Ut3, zt3, $t3, i4, Lt3, Kt3, Wt3, A3, y4, w4, Dt3, Ft3, H3Error, Qt3, Jt3, Vt3, Gt3, Yt3, Xt3, Zt3, er2, tr2, H3Event, rr2, lazyEventHandler, or2, nr2, sr2, Hookable, ar, FetchError, ir2, cr2, dr2, ur2, lr2, hr2, fr2, pr2, mr2, yr2, gr2, memory, wr2, normalizeKey2, vr2, _r2, br2, Rr2, xr2, k4, l4, Er2, cachedEventHandler, kr2, Cr2, Sr2, Ar2, jr2, Hr2, Ir2, Pr2, Tr2, Or2, Mr2, Nr2, Br2;
var init_nitro = __esm({
  ".output/server/chunks/_/nitro.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    ReadStream = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(e11) {
        this.fd = e11;
      }
      setRawMode(e11) {
        return this.isRaw = e11, this;
      }
    };
    WriteStream = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(e11) {
        this.fd = e11;
      }
      clearLine(e11, t8) {
        return t8 && t8(), false;
      }
      clearScreenDown(e11) {
        return e11 && e11(), false;
      }
      cursorTo(e11, t8, r6) {
        return r6 && "function" == typeof r6 && r6(), false;
      }
      moveCursor(e11, t8, r6) {
        return r6 && r6(), false;
      }
      getColorDepth(e11) {
        return 1;
      }
      hasColors(e11, t8) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(e11, t8, r6) {
        e11 instanceof Uint8Array && (e11 = new TextDecoder().decode(e11));
        try {
          console.log(e11);
        } catch {
        }
        return r6 && "function" == typeof r6 && r6(), false;
      }
    };
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    __name(notImplementedAsync, "notImplementedAsync");
    __name(notImplementedClass, "notImplementedClass");
    c4 = "22.14.0";
    Process = class _Process extends r5 {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(e11) {
        super(), this.env = e11.env, this.hrtime = e11.hrtime, this.nextTick = e11.nextTick;
        for (const e12 of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(r5.prototype)]) {
          const t8 = this[e12];
          "function" == typeof t8 && (this[e12] = t8.bind(this));
        }
      }
      emitWarning(e11, t8, r6) {
        console.warn(`${r6 ? `[${r6}] ` : ""}${t8 ? `${t8}: ` : ""}${e11}`);
      }
      emit(...e11) {
        return super.emit(...e11);
      }
      listeners(e11) {
        return super.listeners(e11);
      }
      #e;
      #t;
      #r;
      get stdin() {
        return this.#e ??= new ReadStream(0);
      }
      get stdout() {
        return this.#t ??= new WriteStream(1);
      }
      get stderr() {
        return this.#r ??= new WriteStream(2);
      }
      #o = "/";
      chdir(e11) {
        this.#o = e11;
      }
      cwd() {
        return this.#o;
      }
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${c4}`;
      }
      get versions() {
        return { node: c4 };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      ref() {
      }
      unref() {
      }
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      permission = { has: notImplemented("process.permission.has") };
      report = { directory: "", filename: "", signal: "SIGUSR2", compact: false, reportOnFatalError: false, reportOnSignal: false, reportOnUncaughtException: false, getReport: notImplemented("process.report.getReport"), writeReport: notImplemented("process.report.writeReport") };
      finalization = { register: notImplemented("process.finalization.register"), unregister: notImplemented("process.finalization.unregister"), registerBeforeExit: notImplemented("process.finalization.registerBeforeExit") };
      memoryUsage = Object.assign(() => ({ arrayBuffers: 0, rss: 0, external: 0, heapTotal: 0, heapUsed: 0 }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      mainModule = void 0;
      domain = void 0;
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
    d3 = /* @__PURE__ */ Object.create(null);
    u3 = globalThis.process;
    _getEnv = /* @__PURE__ */ __name((e11) => globalThis.__env__ || u3?.env || (e11 ? d3 : globalThis), "_getEnv");
    h5 = new Proxy(d3, { get: /* @__PURE__ */ __name((e11, t8) => _getEnv()[t8] ?? d3[t8], "get"), has: /* @__PURE__ */ __name((e11, t8) => t8 in _getEnv() || t8 in d3, "has"), set: /* @__PURE__ */ __name((e11, t8, r6) => (_getEnv(true)[t8] = r6, true), "set"), deleteProperty: /* @__PURE__ */ __name((e11, t8) => (delete _getEnv(true)[t8], true), "deleteProperty"), ownKeys() {
      const e11 = _getEnv();
      return Object.keys(e11);
    }, getOwnPropertyDescriptor(e11, t8) {
      const r6 = _getEnv();
      if (t8 in r6) return { value: r6[t8], writable: true, enumerable: true, configurable: true };
    } });
    f4 = Object.assign(function(e11) {
      const t8 = Date.now(), r6 = Math.trunc(t8 / 1e3), s6 = t8 % 1e3 * 1e6;
      if (e11) {
        let t9 = r6 - e11[0], a6 = s6 - e11[0];
        return a6 < 0 && (t9 -= 1, a6 = 1e9 + a6), [t9, a6];
      }
      return [r6, s6];
    }, { bigint: /* @__PURE__ */ __name(function() {
      return BigInt(1e6 * Date.now());
    }, "bigint") });
    globalThis.__env__ = a4;
    m2 = new Process({ env: h5, hrtime: f4, nextTick: s4.nextTick });
    for (const e11 of ["exit", "getBuiltinModule", "platform"]) e11 in s4 && (m2[e11] = s4[e11]);
    s4.features && Object.defineProperty(m2, "features", { get: /* @__PURE__ */ __name(() => s4.features, "get") });
    ({ abort: g4, addListener: _3, allowedNodeEnvironmentFlags: R4, hasUncaughtExceptionCaptureCallback: x4, setUncaughtExceptionCaptureCallback: E4, loadEnvFile: C4, sourceMapsEnabled: S5, arch: j3, argv: H4, argv0: I4, chdir: P4, config: T4, connected: O5, constrainedMemory: M3, availableMemory: N4, cpuUsage: B4, cwd: q4, debugPort: U4, dlopen: z4, disconnect: $4, emit: L4, emitWarning: K4, env: W4, eventNames: D4, execArgv: F4, execPath: Q4, exit: J4, finalization: V4, features: G4, getBuiltinModule: Y4, getActiveResourcesInfo: X4, getMaxListeners: Z4, hrtime: ee4, kill: te4, listeners: re4, listenerCount: oe4, memoryUsage: ne4, nextTick: se4, on: ae4, off: ie4, once: ce4, pid: de4, platform: ue4, ppid: le3, prependListener: he3, prependOnceListener: fe4, rawListeners: pe3, release: me3, removeAllListeners: ye3, removeListener: ge3, report: we3, resourceUsage: ve3, setMaxListeners: _e4, setSourceMapsEnabled: be4, stderr: Re3, stdin: xe3, stdout: Ee3, title: ke3, umask: Ce3, uptime: Se3, version: Ae3, versions: je3, domain: He3, initgroups: Ie3, moduleLoadList: Pe3, reallyExit: Te3, openStdin: Oe2, assert: Me3, binding: Ne3, send: Be3, exitCode: qe3, channel: Ue3, getegid: ze3, geteuid: $e3, getgid: Le3, getgroups: Ke3, getuid: We3, setegid: De3, seteuid: Fe3, setgid: Qe3, setgroups: Je3, setuid: Ve3, permission: Ge3, mainModule: Ye3, _events: Xe3, _eventsCount: Ze3, _exiting: et3, _maxListeners: tt3, _debugEnd: rt3, _debugProcess: ot3, _fatalException: nt3, _getActiveHandles: st3, _getActiveRequests: at3, _kill: it3, _preload_modules: ct3, _rawDebug: dt3, _startProfilerIdleNotifier: ut3, _stopProfilerIdleNotifier: lt3, _tickCallback: ht3, _disconnect: ft3, _handleQueue: pt3, _pendingMessage: mt3, _channel: yt3, _send: gt3, _linkedBinding: wt3 } = m2);
    vt3 = globalThis.crypto;
    randomUUID = /* @__PURE__ */ __name(() => vt3.randomUUID(), "randomUUID");
    _t3 = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
    bt3 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
    Rt3 = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
    __name(jsonParseTransform, "jsonParseTransform");
    __name(destr, "destr");
    xt3 = /#/g;
    Et3 = /&/g;
    kt3 = /\//g;
    Ct3 = /=/g;
    St3 = /\+/g;
    At3 = /%5e/gi;
    jt3 = /%60/gi;
    Ht3 = /%7c/gi;
    It3 = /%20/gi;
    __name(encodeQueryValue, "encodeQueryValue");
    __name(encodeQueryKey, "encodeQueryKey");
    __name(decode, "decode");
    __name(decodeQueryKey, "decodeQueryKey");
    __name(decodeQueryValue, "decodeQueryValue");
    __name(parseQuery, "parseQuery");
    __name(stringifyQuery, "stringifyQuery");
    Pt3 = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
    Tt3 = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
    Ot3 = /^([/\\]\s*){2,}[^/\\]/;
    Mt3 = /^\.?\//;
    __name(hasProtocol, "hasProtocol");
    __name(withoutTrailingSlash, "withoutTrailingSlash");
    __name(withTrailingSlash, "withTrailingSlash");
    __name(withoutBase, "withoutBase");
    __name(withQuery, "withQuery");
    __name(getQuery, "getQuery");
    __name(isEmptyURL, "isEmptyURL");
    __name(joinURL, "joinURL");
    Nt3 = Symbol.for("ufo:protocolRelative");
    __name(parseURL, "parseURL");
    __name(parsePath, "parsePath");
    Bt3 = 0;
    qt3 = 1;
    Ut3 = 2;
    __name(createRouter$1, "createRouter$1");
    __name(insert, "insert");
    __name(createRadixNode, "createRadixNode");
    __name(getNodeType, "getNodeType");
    __name(toRouteMatcher, "toRouteMatcher");
    __name(_matchRoutes, "_matchRoutes");
    __name(_sortRoutesMap, "_sortRoutesMap");
    __name(_routerNodeToTable, "_routerNodeToTable");
    __name(isPlainObject2, "isPlainObject");
    __name(_defu, "_defu");
    __name(createDefu, "createDefu");
    zt3 = createDefu();
    $t3 = createDefu((e11, t8, r6) => {
      if (void 0 !== e11[t8] && "function" == typeof r6) return e11[t8] = r6(e11[t8]), true;
    });
    __name(o2, "o");
    i4 = class _i2 extends r5 {
      static {
        __name(this, "i");
      }
      __unenv__ = {};
      readableEncoding = null;
      readableEnded = true;
      readableFlowing = false;
      readableHighWaterMark = 0;
      readableLength = 0;
      readableObjectMode = false;
      readableAborted = false;
      readableDidRead = false;
      closed = false;
      errored = null;
      readable = false;
      destroyed = false;
      static from(e11, t8) {
        return new _i2(t8);
      }
      constructor(e11) {
        super();
      }
      _read(e11) {
      }
      read(e11) {
      }
      setEncoding(e11) {
        return this;
      }
      pause() {
        return this;
      }
      resume() {
        return this;
      }
      isPaused() {
        return true;
      }
      unpipe(e11) {
        return this;
      }
      unshift(e11, t8) {
      }
      wrap(e11) {
        return this;
      }
      push(e11, t8) {
        return false;
      }
      _destroy(e11, t8) {
        this.removeAllListeners();
      }
      destroy(e11) {
        return this.destroyed = true, this._destroy(e11), this;
      }
      pipe(e11, t8) {
        return {};
      }
      compose(e11, t8) {
        throw new Error("Method not implemented.");
      }
      [Symbol.asyncDispose]() {
        return this.destroy(), Promise.resolve();
      }
      async *[Symbol.asyncIterator]() {
        throw o2("Readable.asyncIterator");
      }
      iterator(e11) {
        throw o2("Readable.iterator");
      }
      map(e11, t8) {
        throw o2("Readable.map");
      }
      filter(e11, t8) {
        throw o2("Readable.filter");
      }
      forEach(e11, t8) {
        throw o2("Readable.forEach");
      }
      reduce(e11, t8, r6) {
        throw o2("Readable.reduce");
      }
      find(e11, t8) {
        throw o2("Readable.find");
      }
      findIndex(e11, t8) {
        throw o2("Readable.findIndex");
      }
      some(e11, t8) {
        throw o2("Readable.some");
      }
      toArray(e11) {
        throw o2("Readable.toArray");
      }
      every(e11, t8) {
        throw o2("Readable.every");
      }
      flatMap(e11, t8) {
        throw o2("Readable.flatMap");
      }
      drop(e11, t8) {
        throw o2("Readable.drop");
      }
      take(e11, t8) {
        throw o2("Readable.take");
      }
      asIndexedPairs(e11) {
        throw o2("Readable.asIndexedPairs");
      }
    };
    Lt3 = class extends r5 {
      static {
        __name(this, "Lt");
      }
      __unenv__ = {};
      writable = true;
      writableEnded = false;
      writableFinished = false;
      writableHighWaterMark = 0;
      writableLength = 0;
      writableObjectMode = false;
      writableCorked = 0;
      closed = false;
      errored = null;
      writableNeedDrain = false;
      writableAborted = false;
      destroyed = false;
      _data;
      _encoding = "utf8";
      constructor(e11) {
        super();
      }
      pipe(e11, t8) {
        return {};
      }
      _write(t8, r6, s6) {
        if (this.writableEnded) s6 && s6();
        else {
          if (void 0 === this._data) this._data = t8;
          else {
            const s7 = "string" == typeof this._data ? e10.from(this._data, this._encoding || r6 || "utf8") : this._data, a6 = "string" == typeof t8 ? e10.from(t8, r6 || this._encoding || "utf8") : t8;
            this._data = e10.concat([s7, a6]);
          }
          this._encoding = r6, s6 && s6();
        }
      }
      _writev(e11, t8) {
      }
      _destroy(e11, t8) {
      }
      _final(e11) {
      }
      write(e11, t8, r6) {
        const s6 = "string" == typeof t8 ? this._encoding : "utf8", a6 = "function" == typeof t8 ? t8 : "function" == typeof r6 ? r6 : void 0;
        return this._write(e11, s6, a6), true;
      }
      setDefaultEncoding(e11) {
        return this;
      }
      end(e11, t8, r6) {
        const s6 = "function" == typeof e11 ? e11 : "function" == typeof t8 ? t8 : "function" == typeof r6 ? r6 : void 0;
        if (this.writableEnded) return s6 && s6(), this;
        const a6 = e11 === s6 ? void 0 : e11;
        if (a6) {
          const e12 = t8 === s6 ? void 0 : t8;
          this.write(a6, e12, s6);
        }
        return this.writableEnded = true, this.writableFinished = true, this.emit("close"), this.emit("finish"), this;
      }
      cork() {
      }
      uncork() {
      }
      destroy(e11) {
        return this.destroyed = true, delete this._data, this.removeAllListeners(), this;
      }
      compose(e11, t8) {
        throw new Error("Method not implemented.");
      }
      [Symbol.asyncDispose]() {
        return Promise.resolve();
      }
    };
    Kt3 = class {
      static {
        __name(this, "Kt");
      }
      allowHalfOpen = true;
      _destroy;
      constructor(e11 = new i4(), t8 = new Lt3()) {
        Object.assign(this, e11), Object.assign(this, t8), this._destroy = /* @__PURE__ */ (function(...e12) {
          return function(...t9) {
            for (const r6 of e12) r6(...t9);
          };
        })(e11._destroy, t8._destroy);
      }
    };
    Wt3 = (Object.assign(Kt3.prototype, i4.prototype), Object.assign(Kt3.prototype, Lt3.prototype), Kt3);
    A3 = class extends Wt3 {
      static {
        __name(this, "A");
      }
      __unenv__ = {};
      bufferSize = 0;
      bytesRead = 0;
      bytesWritten = 0;
      connecting = false;
      destroyed = false;
      pending = false;
      localAddress = "";
      localPort = 0;
      remoteAddress = "";
      remoteFamily = "";
      remotePort = 0;
      autoSelectFamilyAttemptedAddresses = [];
      readyState = "readOnly";
      constructor(e11) {
        super();
      }
      write(e11, t8, r6) {
        return false;
      }
      connect(e11, t8, r6) {
        return this;
      }
      end(e11, t8, r6) {
        return this;
      }
      setEncoding(e11) {
        return this;
      }
      pause() {
        return this;
      }
      resume() {
        return this;
      }
      setTimeout(e11, t8) {
        return this;
      }
      setNoDelay(e11) {
        return this;
      }
      setKeepAlive(e11, t8) {
        return this;
      }
      address() {
        return {};
      }
      unref() {
        return this;
      }
      ref() {
        return this;
      }
      destroySoon() {
        this.destroy();
      }
      resetAndDestroy() {
        const e11 = new Error("ERR_SOCKET_CLOSED");
        return e11.code = "ERR_SOCKET_CLOSED", this.destroy(e11), this;
      }
    };
    y4 = class extends i4 {
      static {
        __name(this, "y");
      }
      aborted = false;
      httpVersion = "1.1";
      httpVersionMajor = 1;
      httpVersionMinor = 1;
      complete = true;
      connection;
      socket;
      headers = {};
      trailers = {};
      method = "GET";
      url = "/";
      statusCode = 200;
      statusMessage = "";
      closed = false;
      errored = null;
      readable = false;
      constructor(e11) {
        super(), this.socket = this.connection = e11 || new A3();
      }
      get rawHeaders() {
        const e11 = this.headers, t8 = [];
        for (const r6 in e11) if (Array.isArray(e11[r6])) for (const s6 of e11[r6]) t8.push(r6, s6);
        else t8.push(r6, e11[r6]);
        return t8;
      }
      get rawTrailers() {
        return [];
      }
      setTimeout(e11, t8) {
        return this;
      }
      get headersDistinct() {
        return p4(this.headers);
      }
      get trailersDistinct() {
        return p4(this.trailers);
      }
    };
    __name(p4, "p");
    w4 = class extends Lt3 {
      static {
        __name(this, "w");
      }
      statusCode = 200;
      statusMessage = "";
      upgrading = false;
      chunkedEncoding = false;
      shouldKeepAlive = false;
      useChunkedEncodingByDefault = false;
      sendDate = false;
      finished = false;
      headersSent = false;
      strictContentLength = false;
      connection = null;
      socket = null;
      req;
      _headers = {};
      constructor(e11) {
        super(), this.req = e11;
      }
      assignSocket(e11) {
        e11._httpMessage = this, this.socket = e11, this.connection = e11, this.emit("socket", e11), this._flush();
      }
      _flush() {
        this.flushHeaders();
      }
      detachSocket(e11) {
      }
      writeContinue(e11) {
      }
      writeHead(e11, t8, r6) {
        e11 && (this.statusCode = e11), "string" == typeof t8 && (this.statusMessage = t8, t8 = void 0);
        const s6 = r6 || t8;
        if (s6 && !Array.isArray(s6)) for (const e12 in s6) this.setHeader(e12, s6[e12]);
        return this.headersSent = true, this;
      }
      writeProcessing() {
      }
      setTimeout(e11, t8) {
        return this;
      }
      appendHeader(e11, t8) {
        e11 = e11.toLowerCase();
        const r6 = this._headers[e11], s6 = [...Array.isArray(r6) ? r6 : [r6], ...Array.isArray(t8) ? t8 : [t8]].filter(Boolean);
        return this._headers[e11] = s6.length > 1 ? s6 : s6[0], this;
      }
      setHeader(e11, t8) {
        return this._headers[e11.toLowerCase()] = t8, this;
      }
      setHeaders(e11) {
        for (const [t8, r6] of Object.entries(e11)) this.setHeader(t8, r6);
        return this;
      }
      getHeader(e11) {
        return this._headers[e11.toLowerCase()];
      }
      getHeaders() {
        return this._headers;
      }
      getHeaderNames() {
        return Object.keys(this._headers);
      }
      hasHeader(e11) {
        return e11.toLowerCase() in this._headers;
      }
      removeHeader(e11) {
        delete this._headers[e11.toLowerCase()];
      }
      addTrailers(e11) {
      }
      flushHeaders() {
      }
      writeEarlyHints(e11, t8) {
        "function" == typeof t8 && t8();
      }
    };
    Dt3 = (() => {
      const n3 = /* @__PURE__ */ __name(function() {
      }, "n");
      return n3.prototype = /* @__PURE__ */ Object.create(null), n3;
    })();
    __name(v4, "v");
    Ft3 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    __name(b3, "b");
    __name(hasProp, "hasProp");
    H3Error = class extends Error {
      static {
        __name(this, "H3Error");
      }
      static __h3_error__ = true;
      statusCode = 500;
      fatal = false;
      unhandled = false;
      statusMessage;
      data;
      cause;
      constructor(e11, t8 = {}) {
        super(e11, t8), t8.cause && !this.cause && (this.cause = t8.cause);
      }
      toJSON() {
        const e11 = { message: this.message, statusCode: sanitizeStatusCode(this.statusCode, 500) };
        return this.statusMessage && (e11.statusMessage = sanitizeStatusMessage(this.statusMessage)), void 0 !== this.data && (e11.data = this.data), e11;
      }
    };
    __name(createError, "createError");
    __name(isError, "isError");
    __name(getRouterParam, "getRouterParam");
    __name(getRequestURL, "getRequestURL");
    Qt3 = Symbol.for("h3RawBody");
    Jt3 = Symbol.for("h3ParsedBody");
    Vt3 = ["PATCH", "POST", "PUT", "DELETE"];
    __name(readRawBody, "readRawBody");
    __name(readBody, "readBody");
    __name(_parseJSON, "_parseJSON");
    __name(handleCacheHeaders, "handleCacheHeaders");
    Gt3 = { html: "text/html", json: "application/json" };
    Yt3 = /[^\u0009\u0020-\u007E]/g;
    __name(sanitizeStatusMessage, "sanitizeStatusMessage");
    __name(sanitizeStatusCode, "sanitizeStatusCode");
    __name(splitCookiesString, "splitCookiesString");
    Xt3 = void 0 === t7 ? (e11) => e11() : t7;
    __name(send, "send");
    __name(setResponseStatus, "setResponseStatus");
    __name(setResponseHeaders, "setResponseHeaders");
    Zt3 = setResponseHeaders;
    __name(sendStream, "sendStream");
    __name(sendWebResponse, "sendWebResponse");
    er2 = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
    tr2 = /* @__PURE__ */ new Set(["transfer-encoding", "accept-encoding", "connection", "keep-alive", "upgrade", "expect", "host", "accept"]);
    __name(proxyRequest, "proxyRequest");
    __name(getProxyRequestHeaders, "getProxyRequestHeaders");
    __name(fetchWithEvent, "fetchWithEvent");
    __name(_getFetch, "_getFetch");
    __name(rewriteCookieProperty, "rewriteCookieProperty");
    __name(defineWebSocket, "defineWebSocket");
    H3Event = class {
      static {
        __name(this, "H3Event");
      }
      __is_event__ = true;
      node;
      web;
      context = {};
      _method;
      _path;
      _headers;
      _requestBody;
      _handled = false;
      _onBeforeResponseCalled;
      _onAfterResponseCalled;
      constructor(e11, t8) {
        this.node = { req: e11, res: t8 };
      }
      get method() {
        return this._method || (this._method = (this.node.req.method || "GET").toUpperCase()), this._method;
      }
      get path() {
        return this._path || this.node.req.url || "/";
      }
      get headers() {
        return this._headers || (this._headers = (function(e11) {
          const t8 = new Headers();
          for (const [r6, s6] of Object.entries(e11)) if (Array.isArray(s6)) for (const e12 of s6) t8.append(r6, e12);
          else s6 && t8.set(r6, s6);
          return t8;
        })(this.node.req.headers)), this._headers;
      }
      get handled() {
        return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
      }
      respondWith(e11) {
        return Promise.resolve(e11).then((e12) => sendWebResponse(this, e12));
      }
      toString() {
        return `[${this.method}] ${this.path}`;
      }
      toJSON() {
        return this.toString();
      }
      get req() {
        return this.node.req;
      }
      get res() {
        return this.node.res;
      }
    };
    __name(isEvent, "isEvent");
    __name(createEvent, "createEvent");
    __name(defineEventHandler, "defineEventHandler");
    __name(_normalizeArray, "_normalizeArray");
    rr2 = defineEventHandler;
    __name(isEventHandler, "isEventHandler");
    __name(toEventHandler, "toEventHandler");
    lazyEventHandler = /* @__PURE__ */ __name(function(e11) {
      let t8, r6;
      const resolveHandler = /* @__PURE__ */ __name(() => r6 ? Promise.resolve(r6) : (t8 || (t8 = Promise.resolve(e11()).then((e12) => {
        const t9 = e12.default || e12;
        if ("function" != typeof t9) throw new TypeError("Invalid lazy handler result. It should be a function:", t9);
        return r6 = { handler: toEventHandler(e12.default || e12) }, r6;
      })), t8), "resolveHandler"), s6 = rr2((e12) => r6 ? r6.handler(e12) : resolveHandler().then((t9) => t9.handler(e12)));
      return s6.__resolve__ = resolveHandler, s6;
    }, "lazyEventHandler");
    __name(createApp, "createApp");
    __name(use, "use");
    __name(normalizeLayer, "normalizeLayer");
    __name(handleHandlerResponse, "handleHandlerResponse");
    or2 = ["connect", "delete", "get", "head", "options", "post", "put", "trace", "patch"];
    __name(toNodeListener, "toNodeListener");
    __name(flatHooks, "flatHooks");
    nr2 = { run: /* @__PURE__ */ __name((e11) => e11(), "run") };
    sr2 = void 0 !== console.createTask ? console.createTask : () => nr2;
    __name(serialTaskCaller, "serialTaskCaller");
    __name(parallelTaskCaller, "parallelTaskCaller");
    __name(callEachWith, "callEachWith");
    Hookable = class {
      static {
        __name(this, "Hookable");
      }
      constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
      }
      hook(e11, t8, r6 = {}) {
        if (!e11 || "function" != typeof t8) return () => {
        };
        const s6 = e11;
        let a6;
        for (; this._deprecatedHooks[e11]; ) a6 = this._deprecatedHooks[e11], e11 = a6.to;
        if (a6 && !r6.allowDeprecated) {
          let e12 = a6.message;
          e12 || (e12 = `${s6} hook has been deprecated` + (a6.to ? `, please use ${a6.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(e12) || (console.warn(e12), this._deprecatedMessages.add(e12));
        }
        if (!t8.name) try {
          Object.defineProperty(t8, "name", { get: /* @__PURE__ */ __name(() => "_" + e11.replace(/\W+/g, "_") + "_hook_cb", "get"), configurable: true });
        } catch {
        }
        return this._hooks[e11] = this._hooks[e11] || [], this._hooks[e11].push(t8), () => {
          t8 && (this.removeHook(e11, t8), t8 = void 0);
        };
      }
      hookOnce(e11, t8) {
        let r6, _function = /* @__PURE__ */ __name((...e12) => ("function" == typeof r6 && r6(), r6 = void 0, _function = void 0, t8(...e12)), "_function");
        return r6 = this.hook(e11, _function), r6;
      }
      removeHook(e11, t8) {
        if (this._hooks[e11]) {
          const r6 = this._hooks[e11].indexOf(t8);
          -1 !== r6 && this._hooks[e11].splice(r6, 1), 0 === this._hooks[e11].length && delete this._hooks[e11];
        }
      }
      deprecateHook(e11, t8) {
        this._deprecatedHooks[e11] = "string" == typeof t8 ? { to: t8 } : t8;
        const r6 = this._hooks[e11] || [];
        delete this._hooks[e11];
        for (const t9 of r6) this.hook(e11, t9);
      }
      deprecateHooks(e11) {
        Object.assign(this._deprecatedHooks, e11);
        for (const t8 in e11) this.deprecateHook(t8, e11[t8]);
      }
      addHooks(e11) {
        const t8 = flatHooks(e11), r6 = Object.keys(t8).map((e12) => this.hook(e12, t8[e12]));
        return () => {
          for (const e12 of r6.splice(0, r6.length)) e12();
        };
      }
      removeHooks(e11) {
        const t8 = flatHooks(e11);
        for (const e12 in t8) this.removeHook(e12, t8[e12]);
      }
      removeAllHooks() {
        for (const e11 in this._hooks) delete this._hooks[e11];
      }
      callHook(e11, ...t8) {
        return t8.unshift(e11), this.callHookWith(serialTaskCaller, e11, ...t8);
      }
      callHookParallel(e11, ...t8) {
        return t8.unshift(e11), this.callHookWith(parallelTaskCaller, e11, ...t8);
      }
      callHookWith(e11, t8, ...r6) {
        const s6 = this._before || this._after ? { name: t8, args: r6, context: {} } : void 0;
        this._before && callEachWith(this._before, s6);
        const a6 = e11(t8 in this._hooks ? [...this._hooks[t8]] : [], r6);
        return a6 instanceof Promise ? a6.finally(() => {
          this._after && s6 && callEachWith(this._after, s6);
        }) : (this._after && s6 && callEachWith(this._after, s6), a6);
      }
      beforeEach(e11) {
        return this._before = this._before || [], this._before.push(e11), () => {
          if (void 0 !== this._before) {
            const t8 = this._before.indexOf(e11);
            -1 !== t8 && this._before.splice(t8, 1);
          }
        };
      }
      afterEach(e11) {
        return this._after = this._after || [], this._after.push(e11), () => {
          if (void 0 !== this._after) {
            const t8 = this._after.indexOf(e11);
            -1 !== t8 && this._after.splice(t8, 1);
          }
        };
      }
    };
    ar = globalThis;
    FetchError = class extends Error {
      static {
        __name(this, "FetchError");
      }
      constructor(e11, t8) {
        super(e11, t8), this.name = "FetchError", t8?.cause && !this.cause && (this.cause = t8.cause);
      }
    };
    ir2 = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
    __name(isPayloadMethod, "isPayloadMethod");
    cr2 = /* @__PURE__ */ new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]);
    dr2 = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
    __name(resolveFetchOptions, "resolveFetchOptions");
    __name(callHooks, "callHooks");
    ur2 = /* @__PURE__ */ new Set([408, 409, 425, 429, 500, 502, 503, 504]);
    lr2 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    __name(createFetch, "createFetch");
    hr2 = (function() {
      if ("undefined" != typeof globalThis) return globalThis;
      if ("undefined" != typeof self) return self;
      if (void 0 !== ar) return ar;
      throw new Error("unable to locate global object");
    })();
    fr2 = hr2.fetch ? (...e11) => hr2.fetch(...e11) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!"));
    pr2 = hr2.Headers;
    mr2 = hr2.AbortController;
    __name(asyncCall, "asyncCall");
    __name(stringify, "stringify");
    createFetch({ fetch: fr2, Headers: pr2, AbortController: mr2 });
    yr2 = "base64:";
    __name(serializeRaw, "serializeRaw");
    __name(deserializeRaw, "deserializeRaw");
    gr2 = ["has", "hasItem", "get", "getItem", "getItemRaw", "set", "setItem", "setItemRaw", "del", "remove", "removeItem", "getMeta", "setMeta", "removeMeta", "getKeys", "clear", "mount", "unmount"];
    __name(normalizeKey$1, "normalizeKey$1");
    __name(joinKeys, "joinKeys");
    __name(normalizeBaseKey, "normalizeBaseKey");
    memory = /* @__PURE__ */ __name(() => {
      const e11 = /* @__PURE__ */ new Map();
      return { name: "memory", getInstance: /* @__PURE__ */ __name(() => e11, "getInstance"), hasItem: /* @__PURE__ */ __name((t8) => e11.has(t8), "hasItem"), getItem: /* @__PURE__ */ __name((t8) => e11.get(t8) ?? null, "getItem"), getItemRaw: /* @__PURE__ */ __name((t8) => e11.get(t8) ?? null, "getItemRaw"), setItem(t8, r6) {
        e11.set(t8, r6);
      }, setItemRaw(t8, r6) {
        e11.set(t8, r6);
      }, removeItem(t8) {
        e11.delete(t8);
      }, getKeys: /* @__PURE__ */ __name(() => [...e11.keys()], "getKeys"), clear() {
        e11.clear();
      }, dispose() {
        e11.clear();
      } };
    }, "memory");
    __name(watch, "watch");
    __name(dispose, "dispose");
    wr2 = {};
    normalizeKey2 = /* @__PURE__ */ __name(function(e11) {
      return e11 && e11.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
    }, "normalizeKey");
    vr2 = { getKeys: /* @__PURE__ */ __name(() => Promise.resolve(Object.keys(wr2)), "getKeys"), hasItem: /* @__PURE__ */ __name((e11) => (e11 = normalizeKey2(e11), Promise.resolve(e11 in wr2)), "hasItem"), getItem: /* @__PURE__ */ __name((e11) => (e11 = normalizeKey2(e11), Promise.resolve(wr2[e11] ? wr2[e11].import() : null)), "getItem"), getMeta: /* @__PURE__ */ __name((e11) => (e11 = normalizeKey2(e11), Promise.resolve(wr2[e11] ? wr2[e11].meta : {})), "getMeta") };
    _r2 = (function(e11 = {}) {
      const t8 = { mounts: { "": e11.driver || memory() }, mountpoints: [""], watching: false, watchListeners: [], unwatch: {} }, getMount = /* @__PURE__ */ __name((e12) => {
        for (const r7 of t8.mountpoints) if (e12.startsWith(r7)) return { base: r7, relativeKey: e12.slice(r7.length), driver: t8.mounts[r7] };
        return { base: "", relativeKey: e12, driver: t8.mounts[""] };
      }, "getMount"), getMounts = /* @__PURE__ */ __name((e12, r7) => t8.mountpoints.filter((t9) => t9.startsWith(e12) || r7 && e12.startsWith(t9)).map((r8) => ({ relativeBase: e12.length > r8.length ? e12.slice(r8.length) : void 0, mountpoint: r8, driver: t8.mounts[r8] })), "getMounts"), onChange = /* @__PURE__ */ __name((e12, r7) => {
        if (t8.watching) {
          r7 = normalizeKey$1(r7);
          for (const s6 of t8.watchListeners) s6(e12, r7);
        }
      }, "onChange"), stopWatch = /* @__PURE__ */ __name(async () => {
        if (t8.watching) {
          for (const e12 in t8.unwatch) await t8.unwatch[e12]();
          t8.unwatch = {}, t8.watching = false;
        }
      }, "stopWatch"), runBatch = /* @__PURE__ */ __name((e12, t9, r7) => {
        const s6 = /* @__PURE__ */ new Map(), getBatch = /* @__PURE__ */ __name((e13) => {
          let t10 = s6.get(e13.base);
          return t10 || (t10 = { driver: e13.driver, base: e13.base, items: [] }, s6.set(e13.base, t10)), t10;
        }, "getBatch");
        for (const r8 of e12) {
          const e13 = "string" == typeof r8, s7 = normalizeKey$1(e13 ? r8 : r8.key), a6 = e13 ? void 0 : r8.value, c6 = e13 || !r8.options ? t9 : { ...t9, ...r8.options }, d4 = getMount(s7);
          getBatch(d4).items.push({ key: s7, value: a6, relativeKey: d4.relativeKey, options: c6 });
        }
        return Promise.all([...s6.values()].map((e13) => r7(e13))).then((e13) => e13.flat());
      }, "runBatch"), r6 = { hasItem(e12, t9 = {}) {
        e12 = normalizeKey$1(e12);
        const { relativeKey: r7, driver: s6 } = getMount(e12);
        return asyncCall(s6.hasItem, r7, t9);
      }, getItem(e12, t9 = {}) {
        e12 = normalizeKey$1(e12);
        const { relativeKey: r7, driver: s6 } = getMount(e12);
        return asyncCall(s6.getItem, r7, t9).then((e13) => destr(e13));
      }, getItems: /* @__PURE__ */ __name((e12, t9 = {}) => runBatch(e12, t9, (e13) => e13.driver.getItems ? asyncCall(e13.driver.getItems, e13.items.map((e14) => ({ key: e14.relativeKey, options: e14.options })), t9).then((t10) => t10.map((t11) => ({ key: joinKeys(e13.base, t11.key), value: destr(t11.value) }))) : Promise.all(e13.items.map((t10) => asyncCall(e13.driver.getItem, t10.relativeKey, t10.options).then((e14) => ({ key: t10.key, value: destr(e14) }))))), "getItems"), getItemRaw(e12, t9 = {}) {
        e12 = normalizeKey$1(e12);
        const { relativeKey: r7, driver: s6 } = getMount(e12);
        return s6.getItemRaw ? asyncCall(s6.getItemRaw, r7, t9) : asyncCall(s6.getItem, r7, t9).then((e13) => deserializeRaw(e13));
      }, async setItem(e12, t9, s6 = {}) {
        if (void 0 === t9) return r6.removeItem(e12);
        e12 = normalizeKey$1(e12);
        const { relativeKey: a6, driver: c6 } = getMount(e12);
        c6.setItem && (await asyncCall(c6.setItem, a6, stringify(t9), s6), c6.watch || onChange("update", e12));
      }, async setItems(e12, t9) {
        await runBatch(e12, t9, async (e13) => {
          if (e13.driver.setItems) return asyncCall(e13.driver.setItems, e13.items.map((e14) => ({ key: e14.relativeKey, value: stringify(e14.value), options: e14.options })), t9);
          e13.driver.setItem && await Promise.all(e13.items.map((t10) => asyncCall(e13.driver.setItem, t10.relativeKey, stringify(t10.value), t10.options)));
        });
      }, async setItemRaw(e12, t9, s6 = {}) {
        if (void 0 === t9) return r6.removeItem(e12, s6);
        e12 = normalizeKey$1(e12);
        const { relativeKey: a6, driver: c6 } = getMount(e12);
        if (c6.setItemRaw) await asyncCall(c6.setItemRaw, a6, t9, s6);
        else {
          if (!c6.setItem) return;
          await asyncCall(c6.setItem, a6, serializeRaw(t9), s6);
        }
        c6.watch || onChange("update", e12);
      }, async removeItem(e12, t9 = {}) {
        "boolean" == typeof t9 && (t9 = { removeMeta: t9 }), e12 = normalizeKey$1(e12);
        const { relativeKey: r7, driver: s6 } = getMount(e12);
        s6.removeItem && (await asyncCall(s6.removeItem, r7, t9), (t9.removeMeta || t9.removeMata) && await asyncCall(s6.removeItem, r7 + "$", t9), s6.watch || onChange("remove", e12));
      }, async getMeta(e12, t9 = {}) {
        "boolean" == typeof t9 && (t9 = { nativeOnly: t9 }), e12 = normalizeKey$1(e12);
        const { relativeKey: r7, driver: s6 } = getMount(e12), a6 = /* @__PURE__ */ Object.create(null);
        if (s6.getMeta && Object.assign(a6, await asyncCall(s6.getMeta, r7, t9)), !t9.nativeOnly) {
          const e13 = await asyncCall(s6.getItem, r7 + "$", t9).then((e14) => destr(e14));
          e13 && "object" == typeof e13 && ("string" == typeof e13.atime && (e13.atime = new Date(e13.atime)), "string" == typeof e13.mtime && (e13.mtime = new Date(e13.mtime)), Object.assign(a6, e13));
        }
        return a6;
      }, setMeta(e12, t9, r7 = {}) {
        return this.setItem(e12 + "$", t9, r7);
      }, removeMeta(e12, t9 = {}) {
        return this.removeItem(e12 + "$", t9);
      }, async getKeys(e12, t9 = {}) {
        e12 = normalizeBaseKey(e12);
        const r7 = getMounts(e12, true);
        let s6 = [];
        const a6 = [];
        let c6 = true;
        for (const e13 of r7) {
          e13.driver.flags?.maxDepth || (c6 = false);
          const r8 = await asyncCall(e13.driver.getKeys, e13.relativeBase, t9);
          for (const t10 of r8) {
            const r9 = e13.mountpoint + normalizeKey$1(t10);
            s6.some((e14) => r9.startsWith(e14)) || a6.push(r9);
          }
          s6 = [e13.mountpoint, ...s6.filter((t10) => !t10.startsWith(e13.mountpoint))];
        }
        const d4 = void 0 !== t9.maxDepth && !c6;
        return a6.filter((r8) => (!d4 || (function(e13, t10) {
          if (void 0 === t10) return true;
          let r9 = 0, s7 = e13.indexOf(":");
          for (; s7 > -1; ) r9++, s7 = e13.indexOf(":", s7 + 1);
          return r9 <= t10;
        })(r8, t9.maxDepth)) && (function(e13, t10) {
          return t10 ? e13.startsWith(t10) && "$" !== e13[e13.length - 1] : "$" !== e13[e13.length - 1];
        })(r8, e12));
      }, async clear(e12, t9 = {}) {
        e12 = normalizeBaseKey(e12), await Promise.all(getMounts(e12, false).map(async (e13) => {
          if (e13.driver.clear) return asyncCall(e13.driver.clear, e13.relativeBase, t9);
          if (e13.driver.removeItem) {
            const r7 = await e13.driver.getKeys(e13.relativeBase || "", t9);
            return Promise.all(r7.map((r8) => e13.driver.removeItem(r8, t9)));
          }
        }));
      }, async dispose() {
        await Promise.all(Object.values(t8.mounts).map((e12) => dispose(e12)));
      }, watch: /* @__PURE__ */ __name(async (e12) => (await (async () => {
        if (!t8.watching) {
          t8.watching = true;
          for (const e13 in t8.mounts) t8.unwatch[e13] = await watch(t8.mounts[e13], onChange, e13);
        }
      })(), t8.watchListeners.push(e12), async () => {
        t8.watchListeners = t8.watchListeners.filter((t9) => t9 !== e12), 0 === t8.watchListeners.length && await stopWatch();
      }), "watch"), async unwatch() {
        t8.watchListeners = [], await stopWatch();
      }, mount(e12, s6) {
        if ((e12 = normalizeBaseKey(e12)) && t8.mounts[e12]) throw new Error(`already mounted at ${e12}`);
        return e12 && (t8.mountpoints.push(e12), t8.mountpoints.sort((e13, t9) => t9.length - e13.length)), t8.mounts[e12] = s6, t8.watching && Promise.resolve(watch(s6, onChange, e12)).then((r7) => {
          t8.unwatch[e12] = r7;
        }).catch(console.error), r6;
      }, async unmount(e12, r7 = true) {
        (e12 = normalizeBaseKey(e12)) && t8.mounts[e12] && (t8.watching && e12 in t8.unwatch && (t8.unwatch[e12]?.(), delete t8.unwatch[e12]), r7 && await dispose(t8.mounts[e12]), t8.mountpoints = t8.mountpoints.filter((t9) => t9 !== e12), delete t8.mounts[e12]);
      }, getMount(e12 = "") {
        e12 = normalizeKey$1(e12) + ":";
        const t9 = getMount(e12);
        return { driver: t9.driver, base: t9.base };
      }, getMounts(e12 = "", t9 = {}) {
        e12 = normalizeKey$1(e12);
        return getMounts(e12, t9.parents).map((e13) => ({ driver: e13.driver, base: e13.mountpoint }));
      }, keys: /* @__PURE__ */ __name((e12, t9 = {}) => r6.getKeys(e12, t9), "keys"), get: /* @__PURE__ */ __name((e12, t9 = {}) => r6.getItem(e12, t9), "get"), set: /* @__PURE__ */ __name((e12, t9, s6 = {}) => r6.setItem(e12, t9, s6), "set"), has: /* @__PURE__ */ __name((e12, t9 = {}) => r6.hasItem(e12, t9), "has"), del: /* @__PURE__ */ __name((e12, t9 = {}) => r6.removeItem(e12, t9), "del"), remove: /* @__PURE__ */ __name((e12, t9 = {}) => r6.removeItem(e12, t9), "remove") };
      return r6;
    })({});
    __name(useStorage, "useStorage");
    _r2.mount("/assets", vr2);
    br2 = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225];
    Rr2 = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998];
    xr2 = [];
    k4 = class {
      static {
        __name(this, "k");
      }
      _data = new l4();
      _hash = new l4([...br2]);
      _nDataBytes = 0;
      _minBufferSize = 0;
      finalize(e11) {
        e11 && this._append(e11);
        const t8 = 8 * this._nDataBytes, r6 = 8 * this._data.sigBytes;
        return this._data.words[r6 >>> 5] |= 128 << 24 - r6 % 32, this._data.words[14 + (r6 + 64 >>> 9 << 4)] = Math.floor(t8 / 4294967296), this._data.words[15 + (r6 + 64 >>> 9 << 4)] = t8, this._data.sigBytes = 4 * this._data.words.length, this._process(), this._hash;
      }
      _doProcessBlock(e11, t8) {
        const r6 = this._hash.words;
        let s6 = r6[0], a6 = r6[1], c6 = r6[2], d4 = r6[3], u5 = r6[4], h7 = r6[5], f6 = r6[6], m7 = r6[7];
        for (let r7 = 0; r7 < 64; r7++) {
          if (r7 < 16) xr2[r7] = 0 | e11[t8 + r7];
          else {
            const e12 = xr2[r7 - 15], t9 = (e12 << 25 | e12 >>> 7) ^ (e12 << 14 | e12 >>> 18) ^ e12 >>> 3, s7 = xr2[r7 - 2], a7 = (s7 << 15 | s7 >>> 17) ^ (s7 << 13 | s7 >>> 19) ^ s7 >>> 10;
            xr2[r7] = t9 + xr2[r7 - 7] + a7 + xr2[r7 - 16];
          }
          const g5 = s6 & a6 ^ s6 & c6 ^ a6 & c6, _4 = (s6 << 30 | s6 >>> 2) ^ (s6 << 19 | s6 >>> 13) ^ (s6 << 10 | s6 >>> 22), R5 = m7 + ((u5 << 26 | u5 >>> 6) ^ (u5 << 21 | u5 >>> 11) ^ (u5 << 7 | u5 >>> 25)) + (u5 & h7 ^ ~u5 & f6) + Rr2[r7] + xr2[r7];
          m7 = f6, f6 = h7, h7 = u5, u5 = d4 + R5 | 0, d4 = c6, c6 = a6, a6 = s6, s6 = R5 + (_4 + g5) | 0;
        }
        r6[0] = r6[0] + s6 | 0, r6[1] = r6[1] + a6 | 0, r6[2] = r6[2] + c6 | 0, r6[3] = r6[3] + d4 | 0, r6[4] = r6[4] + u5 | 0, r6[5] = r6[5] + h7 | 0, r6[6] = r6[6] + f6 | 0, r6[7] = r6[7] + m7 | 0;
      }
      _append(e11) {
        "string" == typeof e11 && (e11 = l4.fromUtf8(e11)), this._data.concat(e11), this._nDataBytes += e11.sigBytes;
      }
      _process(e11) {
        let t8, r6 = this._data.sigBytes / 64;
        r6 = e11 ? Math.ceil(r6) : Math.max((0 | r6) - this._minBufferSize, 0);
        const s6 = 16 * r6, a6 = Math.min(4 * s6, this._data.sigBytes);
        if (s6) {
          for (let e12 = 0; e12 < s6; e12 += 16) this._doProcessBlock(this._data.words, e12);
          t8 = this._data.words.splice(0, s6), this._data.sigBytes -= a6;
        }
        return new l4(t8, a6);
      }
    };
    l4 = class _l2 {
      static {
        __name(this, "l");
      }
      words;
      sigBytes;
      constructor(e11, t8) {
        e11 = this.words = e11 || [], this.sigBytes = void 0 === t8 ? 4 * e11.length : t8;
      }
      static fromUtf8(e11) {
        const t8 = unescape(encodeURIComponent(e11)), r6 = t8.length, s6 = [];
        for (let e12 = 0; e12 < r6; e12++) s6[e12 >>> 2] |= (255 & t8.charCodeAt(e12)) << 24 - e12 % 4 * 8;
        return new _l2(s6, r6);
      }
      toBase64() {
        const e11 = [];
        for (let t8 = 0; t8 < this.sigBytes; t8 += 3) {
          const r6 = (this.words[t8 >>> 2] >>> 24 - t8 % 4 * 8 & 255) << 16 | (this.words[t8 + 1 >>> 2] >>> 24 - (t8 + 1) % 4 * 8 & 255) << 8 | this.words[t8 + 2 >>> 2] >>> 24 - (t8 + 2) % 4 * 8 & 255;
          for (let s6 = 0; s6 < 4 && 8 * t8 + 6 * s6 < 8 * this.sigBytes; s6++) e11.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(r6 >>> 6 * (3 - s6) & 63));
        }
        return e11.join("");
      }
      concat(e11) {
        if (this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8, this.words.length = Math.ceil(this.sigBytes / 4), this.sigBytes % 4) for (let t8 = 0; t8 < e11.sigBytes; t8++) {
          const r6 = e11.words[t8 >>> 2] >>> 24 - t8 % 4 * 8 & 255;
          this.words[this.sigBytes + t8 >>> 2] |= r6 << 24 - (this.sigBytes + t8) % 4 * 8;
        }
        else for (let t8 = 0; t8 < e11.sigBytes; t8 += 4) this.words[this.sigBytes + t8 >>> 2] = e11.words[t8 >>> 2];
        this.sigBytes += e11.sigBytes;
      }
    };
    Er2 = (() => {
      class Hasher2 {
        static {
          __name(this, "Hasher2");
        }
        buff = "";
        #n = /* @__PURE__ */ new Map();
        write(e11) {
          this.buff += e11;
        }
        dispatch(e11) {
          return this[null === e11 ? "null" : typeof e11](e11);
        }
        object(t8) {
          if (t8 && "function" == typeof t8.toJSON) return this.object(t8.toJSON());
          const r6 = Object.prototype.toString.call(t8);
          let s6 = "";
          const a6 = r6.length;
          s6 = a6 < 10 ? "unknown:[" + r6 + "]" : r6.slice(8, a6 - 1), s6 = s6.toLowerCase();
          let c6 = null;
          if (void 0 !== (c6 = this.#n.get(t8))) return this.dispatch("[CIRCULAR:" + c6 + "]");
          if (this.#n.set(t8, this.#n.size), void 0 !== e10 && e10.isBuffer && e10.isBuffer(t8)) return this.write("buffer:"), this.write(t8.toString("utf8"));
          if ("object" !== s6 && "function" !== s6 && "asyncfunction" !== s6) this[s6] ? this[s6](t8) : this.unknown(t8, s6);
          else {
            const e11 = Object.keys(t8).sort(), r7 = [];
            this.write("object:" + (e11.length + r7.length) + ":");
            const dispatchForKey = /* @__PURE__ */ __name((e12) => {
              this.dispatch(e12), this.write(":"), this.dispatch(t8[e12]), this.write(",");
            }, "dispatchForKey");
            for (const t9 of e11) dispatchForKey(t9);
            for (const e12 of r7) dispatchForKey(e12);
          }
        }
        array(e11, t8) {
          if (t8 = void 0 !== t8 && t8, this.write("array:" + e11.length + ":"), !t8 || e11.length <= 1) {
            for (const t9 of e11) this.dispatch(t9);
            return;
          }
          const r6 = /* @__PURE__ */ new Map(), s6 = e11.map((e12) => {
            const t9 = new Hasher2();
            t9.dispatch(e12);
            for (const [e13, s7] of t9.#n) r6.set(e13, s7);
            return t9.toString();
          });
          return this.#n = r6, s6.sort(), this.array(s6, false);
        }
        date(e11) {
          return this.write("date:" + e11.toJSON());
        }
        symbol(e11) {
          return this.write("symbol:" + e11.toString());
        }
        unknown(e11, t8) {
          if (this.write(t8), e11) return this.write(":"), e11 && "function" == typeof e11.entries ? this.array([...e11.entries()], true) : void 0;
        }
        error(e11) {
          return this.write("error:" + e11.toString());
        }
        boolean(e11) {
          return this.write("bool:" + e11);
        }
        string(e11) {
          this.write("string:" + e11.length + ":"), this.write(e11);
        }
        function(e11) {
          this.write("fn:"), !(function(e12) {
            if ("function" != typeof e12) return false;
            return "[native code] }" === Function.prototype.toString.call(e12).slice(-15);
          })(e11) ? this.dispatch(e11.toString()) : this.dispatch("[native]");
        }
        number(e11) {
          return this.write("number:" + e11);
        }
        null() {
          return this.write("Null");
        }
        undefined() {
          return this.write("Undefined");
        }
        regexp(e11) {
          return this.write("regex:" + e11.toString());
        }
        arraybuffer(e11) {
          return this.write("arraybuffer:"), this.dispatch(new Uint8Array(e11));
        }
        url(e11) {
          return this.write("url:" + e11.toString());
        }
        map(e11) {
          this.write("map:");
          const t8 = [...e11];
          return this.array(t8, false);
        }
        set(e11) {
          this.write("set:");
          const t8 = [...e11];
          return this.array(t8, false);
        }
        bigint(e11) {
          return this.write("bigint:" + e11.toString());
        }
      }
      for (const e11 of ["uint8array", "uint8clampedarray", "unt8array", "uint16array", "unt16array", "uint32array", "unt32array", "float32array", "float64array"]) Hasher2.prototype[e11] = function(t8) {
        return this.write(e11 + ":"), this.array([...t8], false);
      };
      return Hasher2;
    })();
    __name(hash, "hash");
    __name(defineCachedFunction, "defineCachedFunction");
    __name(getKey, "getKey");
    __name(escapeKey, "escapeKey");
    __name(cloneWithProxy, "cloneWithProxy");
    cachedEventHandler = /* @__PURE__ */ __name(function(e11, t8 = { name: "_", base: "/cache", swr: true, maxAge: 1 }) {
      const r6 = (t8.varies || []).filter(Boolean).map((e12) => e12.toLowerCase()).sort(), s6 = { ...t8, getKey: /* @__PURE__ */ __name(async (e12) => {
        const s7 = await t8.getKey?.(e12);
        if (s7) return escapeKey(s7);
        const a7 = e12.node.req.originalUrl || e12.node.req.url || e12.path;
        let c6;
        try {
          c6 = escapeKey(decodeURI(parseURL(a7).pathname)).slice(0, 16) || "index";
        } catch {
          c6 = "-";
        }
        return [`${c6}.${hash(a7)}`, ...r6.map((t9) => [t9, e12.node.req.headers[t9]]).map(([e13, t9]) => `${escapeKey(e13)}.${hash(t9)}`)].join(":");
      }, "getKey"), validate: /* @__PURE__ */ __name((e12) => !!e12.value && (!(e12.value.code >= 400) && (void 0 !== e12.value.body && ("undefined" !== e12.value.headers.etag && "undefined" !== e12.value.headers["last-modified"]))), "validate"), group: t8.group || "nitro/handlers", integrity: t8.integrity || hash([e11, t8]) }, a6 = (function(e12, t9 = {}) {
        return defineCachedFunction(e12, t9);
      })(async (a7) => {
        const c6 = {};
        for (const e12 of r6) {
          const t9 = a7.node.req.headers[e12];
          void 0 !== t9 && (c6[e12] = t9);
        }
        const d4 = cloneWithProxy(a7.node.req, { headers: c6 }), u5 = {};
        let h7;
        const f6 = createEvent(d4, cloneWithProxy(a7.node.res, { statusCode: 200, writableEnded: false, writableFinished: false, headersSent: false, closed: false, getHeader: /* @__PURE__ */ __name((e12) => u5[e12], "getHeader"), setHeader(e12, t9) {
          return u5[e12] = t9, this;
        }, getHeaderNames: /* @__PURE__ */ __name(() => Object.keys(u5), "getHeaderNames"), hasHeader: /* @__PURE__ */ __name((e12) => e12 in u5, "hasHeader"), removeHeader(e12) {
          delete u5[e12];
        }, getHeaders: /* @__PURE__ */ __name(() => u5, "getHeaders"), end(e12, t9, r7) {
          return "string" == typeof e12 && (h7 = e12), "function" == typeof t9 && t9(), "function" == typeof r7 && r7(), this;
        }, write: /* @__PURE__ */ __name((e12, t9, r7) => ("string" == typeof e12 && (h7 = e12), "function" == typeof t9 && t9(void 0), "function" == typeof r7 && r7(), true), "write"), writeHead(e12, t9) {
          if (this.statusCode = e12, t9) {
            if (Array.isArray(t9) || "string" == typeof t9) throw new TypeError("Raw headers  is not supported.");
            for (const e13 in t9) {
              const r7 = t9[e13];
              void 0 !== r7 && this.setHeader(e13, r7);
            }
          }
          return this;
        } }));
        f6.fetch = (e12, t9) => fetchWithEvent(f6, e12, t9, { fetch: useNitroApp().localFetch }), f6.$fetch = (e12, t9) => fetchWithEvent(f6, e12, t9, { fetch: globalThis.$fetch }), f6.waitUntil = a7.waitUntil, f6.context = a7.context, f6.context.cache = { options: s6 };
        const m7 = await e11(f6) || h7, g5 = f6.node.res.getHeaders();
        g5.etag = String(g5.Etag || g5.etag || `W/"${hash(m7)}"`), g5["last-modified"] = String(g5["Last-Modified"] || g5["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString());
        const _4 = [];
        t8.swr ? (t8.maxAge && _4.push(`s-maxage=${t8.maxAge}`), t8.staleMaxAge ? _4.push(`stale-while-revalidate=${t8.staleMaxAge}`) : _4.push("stale-while-revalidate")) : t8.maxAge && _4.push(`max-age=${t8.maxAge}`), _4.length > 0 && (g5["cache-control"] = _4.join(", "));
        return { code: f6.node.res.statusCode, headers: g5, body: m7 };
      }, s6);
      return defineEventHandler(async (r7) => {
        if (t8.headersOnly) {
          if (handleCacheHeaders(r7, { maxAge: t8.maxAge })) return;
          return e11(r7);
        }
        const s7 = await a6(r7);
        if (r7.node.res.headersSent || r7.node.res.writableEnded) return s7.body;
        if (!handleCacheHeaders(r7, { modifiedTime: new Date(s7.headers["last-modified"]), etag: s7.headers.etag, maxAge: t8.maxAge })) {
          r7.node.res.statusCode = s7.code;
          for (const e12 in s7.headers) {
            const t9 = s7.headers[e12];
            "set-cookie" === e12 ? r7.node.res.appendHeader(e12, splitCookiesString(t9)) : void 0 !== t9 && r7.node.res.setHeader(e12, t9);
          }
          return s7.body;
        }
      });
    }, "cachedEventHandler");
    __name(klona, "klona");
    kr2 = $t3({});
    Cr2 = /\d/;
    Sr2 = ["-", "_", "/", "."];
    __name(isUppercase, "isUppercase");
    __name(kebabCase, "kebabCase");
    __name(getEnv, "getEnv");
    __name(_isObject, "_isObject");
    Ar2 = /\{\{([^{}]*)\}\}/g;
    __name(_expandFromEnv, "_expandFromEnv");
    jr2 = { app: { baseURL: "/" }, nitro: { routeRules: {} } };
    Hr2 = { prefix: "NITRO_", altPrefix: jr2.nitro.envPrefix ?? m2.env.NITRO_ENV_PREFIX ?? "_", envExpansion: jr2.nitro.envExpansion ?? m2.env.NITRO_ENV_EXPANSION ?? false };
    Ir2 = _deepFreeze((/* @__PURE__ */ __name(function applyEnv(e11, t8, r6 = "") {
      for (const s6 in e11) {
        const a6 = r6 ? `${r6}_${s6}` : s6, c6 = getEnv(a6, t8);
        _isObject(e11[s6]) ? _isObject(c6) ? (e11[s6] = { ...e11[s6], ...c6 }, applyEnv(e11[s6], t8, a6)) : void 0 === c6 ? applyEnv(e11[s6], t8, a6) : e11[s6] = c6 ?? e11[s6] : e11[s6] = c6 ?? e11[s6], t8.envExpansion && "string" == typeof e11[s6] && (e11[s6] = _expandFromEnv(e11[s6]));
      }
      return e11;
    }, "applyEnv"))(klona(jr2), Hr2));
    __name(useRuntimeConfig, "useRuntimeConfig");
    __name(_deepFreeze, "_deepFreeze");
    _deepFreeze(klona(kr2)), new Proxy(/* @__PURE__ */ Object.create(null), { get: /* @__PURE__ */ __name((e11, t8) => {
      console.warn("Please use `useRuntimeConfig()` instead of accessing config directly.");
      const r6 = useRuntimeConfig();
      if (t8 in r6) return r6[t8];
    }, "get") });
    Pr2 = toRouteMatcher(createRouter$1({ routes: useRuntimeConfig().nitro.routeRules }));
    __name(createRouteRulesHandler, "createRouteRulesHandler");
    __name(getRouteRulesForPath, "getRouteRulesForPath");
    Tr2 = /post|put|patch/i;
    __name(requestHasBody, "requestHasBody");
    __name(joinHeaders, "joinHeaders");
    __name(normalizeCookieHeader, "normalizeCookieHeader");
    __name(normalizeCookieHeaders, "normalizeCookieHeaders");
    __name(defaultHandler, "defaultHandler");
    Or2 = [function(e11, t8) {
      const r6 = defaultHandler(e11, t8);
      return setResponseHeaders(t8, r6.headers), setResponseStatus(t8, r6.status, r6.statusText), send(t8, JSON.stringify(r6.body, null, 2));
    }];
    Mr2 = [];
    Nr2 = [{ route: "", handler: defineEventHandler(async (e11) => {
      getRequestURL(e11).pathname.startsWith("/api/user");
    }), lazy: false, middleware: true, method: void 0 }, { route: "", handler: defineEventHandler((e11) => {
    }), lazy: false, middleware: true, method: void 0 }, { route: "/api/login", handler: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_login_post(), login_post_exports)), "handler"), lazy: true, middleware: false, method: "post" }, { route: "/api/permission", handler: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_index_get(), index_get_exports)), "handler"), lazy: true, middleware: false, method: "get" }, { route: "/api/permission", handler: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_index_post(), index_post_exports)), "handler"), lazy: true, middleware: false, method: "post" }, { route: "/api/post", handler: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_index_get2(), index_get2_exports)), "handler"), lazy: true, middleware: false, method: "get" }, { route: "/api/post", handler: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_index_post2(), index_post2_exports)), "handler"), lazy: true, middleware: false, method: "post" }, { route: "/api/role", handler: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_index_get3(), index_get3_exports)), "handler"), lazy: true, middleware: false, method: "get" }, { route: "/api/role", handler: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_index_post3(), index_post3_exports)), "handler"), lazy: true, middleware: false, method: "post" }, { route: "/api/user/:id", handler: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_id_get(), id_get_exports)), "handler"), lazy: true, middleware: false, method: "get" }, { route: "/api/user/:id", handler: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_id_put(), id_put_exports)), "handler"), lazy: true, middleware: false, method: "put" }, { route: "/api/user", handler: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_index_get4(), index_get4_exports)), "handler"), lazy: true, middleware: false, method: "get" }, { route: "/api/user", handler: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_index_post4(), index_post4_exports)), "handler"), lazy: true, middleware: false, method: "post" }, { route: "/api/user", handler: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_index_put(), index_put_exports)), "handler"), lazy: true, middleware: false, method: "put" }, { route: "/", handler: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_routes(), routes_exports)), "handler"), lazy: true, middleware: false, method: void 0 }, { route: "/roles", handler: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_roles(), roles_exports)), "handler"), lazy: true, middleware: false, method: void 0 }, { route: "/test", handler: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_test(), test_exports)), "handler"), lazy: true, middleware: false, method: void 0 }, { route: "/ws/post", handler: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_post(), post_exports)), "handler"), lazy: true, middleware: false, method: void 0 }];
    Br2 = (function() {
      const e11 = useRuntimeConfig(), t8 = new Hookable(), captureError = /* @__PURE__ */ __name((e12, r7 = {}) => {
        const s7 = t8.callHookParallel("error", e12, r7).catch((e13) => {
          console.error("Error while capturing another error", e13);
        });
        if (r7.event && isEvent(r7.event)) {
          const t9 = r7.event.context.nitro?.errors;
          t9 && t9.push({ error: e12, context: r7 }), r7.event.waitUntil && r7.event.waitUntil(s7);
        }
      }, "captureError"), r6 = createApp({ debug: destr(false), onError: /* @__PURE__ */ __name((e12, t9) => (captureError(e12, { event: t9, tags: ["request"] }), (async function(e13, t10) {
        for (const r7 of Or2) try {
          if (await r7(e13, t10, { defaultHandler }), t10.handled) return;
        } catch (e14) {
          console.error(e14);
        }
      })(e12, t9)), "onError"), onRequest: /* @__PURE__ */ __name(async (e12) => {
        e12.context.nitro = e12.context.nitro || { errors: [] };
        const t9 = e12.node.req?.__unenv__;
        t9?._platform && (e12.context = { _platform: t9?._platform, ...t9._platform, ...e12.context }), !e12.context.waitUntil && t9?.waitUntil && (e12.context.waitUntil = t9.waitUntil), e12.fetch = (t10, r7) => fetchWithEvent(e12, t10, r7, { fetch: localFetch }), e12.$fetch = (t10, r7) => fetchWithEvent(e12, t10, r7, { fetch: c6 }), e12.waitUntil = (t10) => {
          e12.context.nitro._waitUntilPromises || (e12.context.nitro._waitUntilPromises = []), e12.context.nitro._waitUntilPromises.push(t10), e12.context.waitUntil && e12.context.waitUntil(t10);
        }, e12.captureError = (t10, r7) => {
          captureError(t10, { event: e12, ...r7 });
        }, await Br2.hooks.callHook("request", e12).catch((t10) => {
          captureError(t10, { event: e12, tags: ["request"] });
        });
      }, "onRequest"), onBeforeResponse: /* @__PURE__ */ __name(async (e12, t9) => {
        await Br2.hooks.callHook("beforeResponse", e12, t9).catch((t10) => {
          captureError(t10, { event: e12, tags: ["request", "response"] });
        });
      }, "onBeforeResponse"), onAfterResponse: /* @__PURE__ */ __name(async (e12, t9) => {
        await Br2.hooks.callHook("afterResponse", e12, t9).catch((t10) => {
          captureError(t10, { event: e12, tags: ["request", "response"] });
        });
      }, "onAfterResponse") }), s6 = (function(e12 = {}) {
        const t9 = createRouter$1({}), r7 = {};
        let s7;
        const a7 = {}, addRoute = /* @__PURE__ */ __name((e13, s8, c8) => {
          let d4 = r7[e13];
          if (d4 || (r7[e13] = d4 = { path: e13, handlers: {} }, t9.insert(e13, d4)), Array.isArray(c8)) for (const t10 of c8) addRoute(e13, s8, t10);
          else d4.handlers[c8] = toEventHandler(s8, 0, e13);
          return a7;
        }, "addRoute");
        a7.use = a7.add = (e13, t10, r8) => addRoute(e13, t10, r8 || "all");
        for (const e13 of or2) a7[e13] = (t10, r8) => a7.add(t10, r8, e13);
        const matchHandler = /* @__PURE__ */ __name((e13 = "/", r8 = "get") => {
          const a8 = e13.indexOf("?");
          -1 !== a8 && (e13 = e13.slice(0, Math.max(0, a8)));
          const c8 = t9.lookup(e13);
          if (!c8 || !c8.handlers) return { error: createError({ statusCode: 404, name: "Not Found", statusMessage: `Cannot find any route matching ${e13 || "/"}.` }) };
          let d4 = c8.handlers[r8] || c8.handlers.all;
          if (!d4) {
            s7 || (s7 = toRouteMatcher(t9));
            const a9 = s7.matchAll(e13).reverse();
            for (const e14 of a9) {
              if (e14.handlers[r8]) {
                d4 = e14.handlers[r8], c8.handlers[r8] = c8.handlers[r8] || d4;
                break;
              }
              if (e14.handlers.all) {
                d4 = e14.handlers.all, c8.handlers.all = c8.handlers.all || d4;
                break;
              }
            }
          }
          return d4 ? { matched: c8, handler: d4 } : { error: createError({ statusCode: 405, name: "Method Not Allowed", statusMessage: `Method ${r8} is not allowed on this route.` }) };
        }, "matchHandler"), c7 = e12.preemptive || e12.preemtive;
        return a7.handler = rr2((e13) => {
          const t10 = matchHandler(e13.path, e13.method.toLowerCase());
          if ("error" in t10) {
            if (c7) throw t10.error;
            return;
          }
          e13.context.matchedRoute = t10.matched;
          const r8 = t10.matched.params || {};
          return e13.context.params = r8, Promise.resolve(t10.handler(e13)).then((e14) => void 0 === e14 && c7 ? null : e14);
        }), a7.handler.__resolve__ = async (e13) => {
          e13 = (function(e14 = "") {
            return (function(e15 = "") {
              return e15.startsWith("/");
            })(e14) ? e14 : "/" + e14;
          })(e13);
          const t10 = matchHandler(e13);
          if ("error" in t10) return;
          let r8 = { route: t10.matched.path, handler: t10.handler };
          if (t10.handler.__resolve__) {
            const s8 = await t10.handler.__resolve__(e13);
            if (!s8) return;
            r8 = { ...r8, ...s8 };
          }
          return r8;
        }, a7;
      })({ preemptive: true }), a6 = toNodeListener(r6), localFetch = /* @__PURE__ */ __name((e12, t9) => e12.toString().startsWith("/") ? (async function(e13, t10, r7 = {}) {
        try {
          const s7 = await b3(e13, { url: t10, ...r7 });
          return new Response(s7.body, { status: s7.status, statusText: s7.statusText, headers: v4(s7.headers) });
        } catch (e14) {
          return new Response(e14.toString(), { status: Number.parseInt(e14.statusCode || e14.code) || 500, statusText: e14.statusText });
        }
      })(a6, e12, t9).then((e13) => (function(e14) {
        return e14.headers.has("set-cookie") ? new Response(e14.body, { status: e14.status, statusText: e14.statusText, headers: normalizeCookieHeaders(e14.headers) }) : e14;
      })(e13)) : globalThis.fetch(e12, t9), "localFetch"), c6 = createFetch({ fetch: localFetch, Headers: pr2, defaults: { baseURL: e11.app.baseURL } });
      globalThis.$fetch = c6, r6.use(createRouteRulesHandler({ localFetch }));
      for (const t9 of Nr2) {
        let a7 = t9.lazy ? lazyEventHandler(t9.handler) : t9.handler;
        if (t9.middleware || !t9.route) {
          const s7 = (e11.app.baseURL + (t9.route || "/")).replace(/\/+/g, "/");
          r6.use(s7, a7);
        } else {
          const e12 = getRouteRulesForPath(t9.route.replace(/:\w+|\*\*/g, "_"));
          e12.cache && (a7 = cachedEventHandler(a7, { group: "nitro/routes", ...e12.cache })), s6.use(t9.route, a7, t9.method);
        }
      }
      return r6.use(e11.app.baseURL, s6.handler), { hooks: t8, h3App: r6, router: s6, localCall: /* @__PURE__ */ __name((e12) => b3(a6, e12), "localCall"), localFetch, captureError };
    })();
    __name(useNitroApp, "useNitroApp");
    !(function(e11) {
      for (const t8 of Mr2) try {
        t8(e11);
      } catch (t9) {
        throw e11.captureError(t9, { tags: ["plugin"] }), t9;
      }
    })(Br2);
  }
});

// .wrangler/tmp/bundle-AGHusP/middleware-loader.entry.ts
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/bundle-AGHusP/middleware-insertion-facade.js
init_checked_fetch();
init_modules_watch_stub();

// .output/server/index.mjs
init_checked_fetch();
init_modules_watch_stub();
init_nitro();
import { Buffer as s5 } from "node:buffer";
import { setImmediate as o3, clearImmediate as i5 } from "node:timers";
import "node:events";
import "node:process";
import "cloudflare:workers";
globalThis._importMeta_ = { url: "file:///_entry.js", env: {} };
"global" in globalThis || (globalThis.global = globalThis);
var a5 = globalThis.process;
globalThis.process = a5 ? new Proxy(a5, { get: /* @__PURE__ */ __name((t8, r6, n3) => Reflect.has(t8, r6) ? Reflect.get(t8, r6, n3) : Reflect.get(m2, r6, n3), "get") }) : m2, globalThis.Buffer || (globalThis.Buffer = s5), globalThis.setImmediate || (globalThis.setImmediate = o3), globalThis.clearImmediate || (globalThis.clearImmediate = i5);
var c5 = Symbol.for("nodejs.util.inspect.custom");
function toBufferLike(e11) {
  if (null == e11) return "";
  const t8 = typeof e11;
  return "string" === t8 ? e11 : "number" === t8 || "boolean" === t8 || "bigint" === t8 ? e11.toString() : "function" === t8 || "symbol" === t8 ? "{}" : e11 instanceof Uint8Array || e11 instanceof ArrayBuffer ? e11 : (function(e12) {
    if (null === e12 || "object" != typeof e12) return false;
    const t9 = Object.getPrototypeOf(e12);
    if (null !== t9 && t9 !== Object.prototype && null !== Object.getPrototypeOf(t9)) return false;
    if (Symbol.iterator in e12) return false;
    if (Symbol.toStringTag in e12) return "[object Module]" === Object.prototype.toString.call(e12);
    return true;
  })(e11) ? JSON.stringify(e11) : e11;
}
__name(toBufferLike, "toBufferLike");
var Message = class {
  static {
    __name(this, "Message");
  }
  event;
  peer;
  rawData;
  #e;
  #t;
  #r;
  #n;
  #s;
  #o;
  constructor(e11, t8, r6) {
    this.rawData = e11 || "", this.peer = t8, this.event = r6;
  }
  get id() {
    return this.#e || (this.#e = randomUUID()), this.#e;
  }
  uint8Array() {
    const e11 = this.#t;
    if (e11) return e11;
    const t8 = this.rawData;
    if (t8 instanceof Uint8Array) return this.#t = t8;
    if (t8 instanceof ArrayBuffer || t8 instanceof SharedArrayBuffer) return this.#r = t8, this.#t = new Uint8Array(t8);
    if ("string" == typeof t8) return this.#s = t8, this.#t = new TextEncoder().encode(this.#s);
    if (Symbol.iterator in t8) return this.#t = new Uint8Array(t8);
    if ("number" == typeof t8?.length) return this.#t = new Uint8Array(t8);
    if (t8 instanceof DataView) return this.#t = new Uint8Array(t8.buffer, t8.byteOffset, t8.byteLength);
    throw new TypeError(`Unsupported message type: ${Object.prototype.toString.call(t8)}`);
  }
  arrayBuffer() {
    const e11 = this.#r;
    if (e11) return e11;
    const t8 = this.rawData;
    return t8 instanceof ArrayBuffer || t8 instanceof SharedArrayBuffer ? this.#r = t8 : this.#r = this.uint8Array().buffer;
  }
  blob() {
    const e11 = this.#n;
    if (e11) return e11;
    const t8 = this.rawData;
    return t8 instanceof Blob ? this.#n = t8 : this.#n = new Blob([this.uint8Array()]);
  }
  text() {
    const e11 = this.#s;
    if (e11) return e11;
    const t8 = this.rawData;
    return this.#s = "string" == typeof t8 ? t8 : new TextDecoder().decode(this.uint8Array());
  }
  json() {
    const e11 = this.#o;
    return e11 || (this.#o = JSON.parse(this.text()));
  }
  get data() {
    switch (this.peer?.websocket?.binaryType) {
      case "arraybuffer":
        return this.arrayBuffer();
      case "blob":
        return this.blob();
      case "nodebuffer":
        return globalThis.Buffer ? s5.from(this.uint8Array()) : this.uint8Array();
      case "uint8array":
        return this.uint8Array();
      case "text":
        return this.text();
      default:
        return this.rawData;
    }
  }
  toString() {
    return this.text();
  }
  [Symbol.toPrimitive]() {
    return this.text();
  }
  [c5]() {
    return { data: this.rawData };
  }
};
var Peer = class {
  static {
    __name(this, "Peer");
  }
  _internal;
  _topics;
  _id;
  #i;
  constructor(e11) {
    this._topics = /* @__PURE__ */ new Set(), this._internal = e11;
  }
  get context() {
    return this._internal.context ??= {};
  }
  get id() {
    return this._id || (this._id = randomUUID()), this._id;
  }
  get remoteAddress() {
  }
  get request() {
    return this._internal.request;
  }
  get websocket() {
    if (!this.#i) {
      const e11 = this._internal.ws, t8 = this._internal.request;
      this.#i = t8 ? (function(e12, t9) {
        return new Proxy(e12, { get: /* @__PURE__ */ __name((e13, r6) => {
          const n3 = Reflect.get(e13, r6);
          if (!n3) switch (r6) {
            case "protocol":
              return t9?.headers?.get("sec-websocket-protocol") || "";
            case "extensions":
              return t9?.headers?.get("sec-websocket-extensions") || "";
            case "url":
              return t9?.url?.replace(/^http/, "ws") || void 0;
          }
          return n3;
        }, "get") });
      })(e11, t8) : e11;
    }
    return this.#i;
  }
  get peers() {
    return this._internal.peers || /* @__PURE__ */ new Set();
  }
  get topics() {
    return this._topics;
  }
  terminate() {
    this.close();
  }
  subscribe(e11) {
    this._topics.add(e11);
  }
  unsubscribe(e11) {
    this._topics.delete(e11);
  }
  toString() {
    return this.id;
  }
  [Symbol.toPrimitive]() {
    return this.id;
  }
  [Symbol.toStringTag]() {
    return "WebSocket";
  }
  [c5]() {
    return Object.fromEntries([["id", this.id], ["remoteAddress", this.remoteAddress], ["peers", this.peers], ["webSocket", this.websocket]].filter((e11) => e11[1]));
  }
};
var AdapterHookable = class {
  static {
    __name(this, "AdapterHookable");
  }
  options;
  constructor(e11) {
    this.options = e11 || {};
  }
  callHook(e11, t8, r6) {
    const n3 = this.options.hooks?.[e11], s6 = n3?.(t8, r6), o4 = this.options.resolve?.(t8);
    if (!o4) return s6;
    const i6 = o4 instanceof Promise ? o4.then((t9) => t9?.[e11]) : o4?.[e11];
    return Promise.all([s6, i6]).then(([e12, n4]) => {
      const s7 = n4?.(t8, r6);
      return s7 instanceof Promise ? s7.then((t9) => t9 || e12) : s7 || e12;
    });
  }
  async upgrade(e11) {
    let t8 = e11.context;
    t8 || (t8 = {}, Object.defineProperty(e11, "context", { enumerable: true, value: t8 }));
    try {
      const r6 = await this.callHook("upgrade", e11);
      if (!r6) return { context: t8 };
      if (false === r6.ok) return { context: t8, endResponse: r6 };
      if (r6.headers) return { context: t8, upgradeHeaders: r6.headers };
    } catch (e12) {
      const r6 = e12.response || e12;
      if (r6 instanceof Response) return { context: t8, endResponse: r6 };
      throw e12;
    }
    return { context: t8 };
  }
};
function adapterUtils(e11) {
  return { peers: e11, publish(t8, r6, n3) {
    let s6;
    for (const r7 of e11) if (r7.topics.has(t8)) {
      s6 = r7;
      break;
    }
    s6 && (s6.send(r6, n3), s6.publish(t8, r6, n3));
  } };
}
__name(adapterUtils, "adapterUtils");
var WSError = class extends Error {
  static {
    __name(this, "WSError");
  }
  constructor(...e11) {
    super(...e11), this.name = "WSError";
  }
};
var CloudflarePeer = class extends Peer {
  static {
    __name(this, "CloudflarePeer");
  }
  send(e11) {
    return this._internal.wsServer.send(toBufferLike(e11)), 0;
  }
  publish(e11, t8) {
  }
  close(e11, t8) {
    this._internal.ws.close(e11, t8);
  }
};
var l5 = {};
var u4 = {};
var h6 = ((e11 = {}) => {
  const t8 = new AdapterHookable(e11), r6 = /* @__PURE__ */ new Set();
  return { ...adapterUtils(r6), handleUpgrade: /* @__PURE__ */ __name(async (e12, n3, s6) => {
    const { upgradeHeaders: o4, endResponse: i6, context: a6 } = await t8.upgrade(e12);
    if (i6) return i6;
    const c6 = new WebSocketPair(), l6 = c6[0], u5 = c6[1], h7 = new CloudflarePeer({ ws: l6, peers: r6, wsServer: u5, request: e12, cfEnv: n3, cfCtx: s6, context: a6 });
    return r6.add(h7), u5.accept(), t8.callHook("open", h7), u5.addEventListener("message", (e13) => {
      t8.callHook("message", h7, new Message(e13.data, h7, e13));
    }), u5.addEventListener("error", (e13) => {
      r6.delete(h7), t8.callHook("error", h7, new WSError(e13.error));
    }), u5.addEventListener("close", (e13) => {
      r6.delete(h7), t8.callHook("close", h7, e13);
    }), new Response(null, { status: 101, webSocket: l6, headers: o4 });
  }, "handleUpgrade") };
})(useNitroApp().h3App.websocket);
var f5 = (function(e11) {
  const t8 = useNitroApp();
  return { async fetch(o4, i6, a6) {
    const c6 = {}, l6 = new URL(o4.url);
    if (e11.fetch) {
      const t9 = await e11.fetch(o4, i6, a6, l6, c6);
      if (t9) return t9;
    }
    return (async function(e12, t9, o5, i7 = new URL(e12.url), a7 = useNitroApp(), c7) {
      let l7;
      requestHasBody(e12) && (l7 = s5.from(await e12.arrayBuffer()));
      return globalThis.__env__ = t9, a7.localFetch(i7.pathname + i7.search, { context: { waitUntil: /* @__PURE__ */ __name((e13) => o5.waitUntil(e13), "waitUntil"), _platform: { cf: e12.cf, cloudflare: { request: e12, env: t9, context: o5, url: i7, ...c7 } } }, host: i7.hostname, protocol: i7.protocol, method: e12.method, headers: e12.headers, body: l7 });
    })(o4, i6, a6, l6, t8, c6);
  }, scheduled(e12, r6, n3) {
    globalThis.__env__ = r6, n3.waitUntil(t8.hooks.callHook("cloudflare:scheduled", { controller: e12, env: r6, context: n3 }));
  }, email(e12, r6, n3) {
    globalThis.__env__ = r6, n3.waitUntil(t8.hooks.callHook("cloudflare:email", { message: e12, event: e12, env: r6, context: n3 }));
  }, queue(e12, r6, n3) {
    globalThis.__env__ = r6, n3.waitUntil(t8.hooks.callHook("cloudflare:queue", { batch: e12, event: e12, env: r6, context: n3 }));
  }, tail(e12, r6, n3) {
    globalThis.__env__ = r6, n3.waitUntil(t8.hooks.callHook("cloudflare:tail", { traces: e12, env: r6, context: n3 }));
  }, trace(e12, r6, n3) {
    globalThis.__env__ = r6, n3.waitUntil(t8.hooks.callHook("cloudflare:trace", { traces: e12, env: r6, context: n3 }));
  } };
})({ fetch: /* @__PURE__ */ __name((e11, t8, r6, n3) => t8.ASSETS && (function(e12 = "") {
  if (l5[e12]) return true;
  for (const t9 in u4) if (e12.startsWith(t9)) return true;
  return false;
})(n3.pathname) ? t8.ASSETS.fetch(e11) : "websocket" === e11.headers.get("upgrade") ? h6.handleUpgrade(e11, t8, r6) : void 0, "fetch") });

// ../../../AppData/Local/pnpm-cache/dlx/b9e695ba2d2dc904251c8241b58aca395678c13c8a527d83783e59324265e1db/19c3db68b0c-42a8/node_modules/.pnpm/wrangler@4.63.0/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_checked_fetch();
init_modules_watch_stub();
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e11) {
      console.error("Failed to drain the unused request body.", e11);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../../../AppData/Local/pnpm-cache/dlx/b9e695ba2d2dc904251c8241b58aca395678c13c8a527d83783e59324265e1db/19c3db68b0c-42a8/node_modules/.pnpm/wrangler@4.63.0/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_checked_fetch();
init_modules_watch_stub();
function reduceError(e11) {
  return {
    name: e11?.name,
    message: e11?.message ?? String(e11),
    stack: e11?.stack,
    cause: e11?.cause === void 0 ? void 0 : reduceError(e11.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e11) {
    const error = reduceError(e11);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-AGHusP/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = f5;

// ../../../AppData/Local/pnpm-cache/dlx/b9e695ba2d2dc904251c8241b58aca395678c13c8a527d83783e59324265e1db/19c3db68b0c-42a8/node_modules/.pnpm/wrangler@4.63.0/node_modules/wrangler/templates/middleware/common.ts
init_checked_fetch();
init_modules_watch_stub();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-AGHusP/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type2, init2) {
        if (type2 === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init2.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type2, init2) => {
      if (type2 === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init2.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
