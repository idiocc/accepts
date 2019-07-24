#!/usr/bin/env node
'use strict';
const http = require('http');
const path = require('path');             
const n = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
function q(a) {
  return a.split(",").map((b, c) => {
    var e = n.exec(b.trim());
    if (e) {
      b = e[1];
      var g = 1;
      if (e[2]) {
        e = e[2].split(";");
        for (let h = 0; h < e.length; h++) {
          const d = e[h].trim().split("=");
          if ("q" == d[0]) {
            g = parseFloat(d[1]);
            break;
          }
        }
      }
      c = {charset:b, q:g, c};
    } else {
      c = null;
    }
    if (c) {
      return c;
    }
  }).filter(Boolean);
}
function r(a, b) {
  const c = q(void 0 === a ? "*" : a || "");
  if (!b) {
    return c.filter(t).sort(u).map(v);
  }
  const e = b.map((g, h) => {
    {
      let k = {a:-1, q:0, b:0};
      for (let f = 0; f < c.length; f++) {
        a: {
          var d = c[f];
          let l = 0;
          if (d.charset.toLowerCase() === g.toLowerCase()) {
            l |= 1;
          } else {
            if ("*" != d.charset) {
              d = null;
              break a;
            }
          }
          d = {c:h, b:l, a:d.c, q:d.q};
        }
        d && 0 > (k.b - d.b || k.q - d.q || k.a - d.a) && (k = d);
      }
      g = k;
    }
    return g;
  });
  return e.filter(t).sort(u).map(g => b[e.indexOf(g)]);
}
function u(a, b) {
  return b.q - a.q || b.b - a.b || a.a - b.a || a.c - b.c || 0;
}
function v(a) {
  return a.charset;
}
function t(a) {
  return 0 < a.q;
}
;const w = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
function x(a) {
  a = a.split(",");
  for (var b = !1, c = 1, e = 0, g = 0; e < a.length; e++) {
    var h = e;
    var d = w.exec(a[e].trim());
    if (d) {
      var k = d[1], f = 1;
      if (d[2]) {
        d = d[2].split(";");
        for (var l = 0; l < d.length; l++) {
          var m = d[l].trim().split("=");
          if ("q" == m[0]) {
            f = parseFloat(m[1]);
            break;
          }
        }
      }
      h = {encoding:k, q:f, c:h};
    } else {
      h = null;
    }
    h && (a[g++] = h, b = b || y("identity", h, void 0), c = Math.min(c, h.q || 1));
  }
  b || (a[g++] = {encoding:"identity", q:c, c:e});
  a.length = g;
  return a;
}
function y(a, b, c) {
  var e = 0;
  if (b.encoding.toLowerCase() === a.toLowerCase()) {
    e |= 1;
  } else {
    if ("*" !== b.encoding) {
      return null;
    }
  }
  return {c, a:b.c, q:b.q, b:e};
}
function z(a, b) {
  var c = x(a || "");
  if (!b) {
    return c.filter(A).sort(B).map(C);
  }
  var e = b.map(function(g, h) {
    for (var d = {a:-1, q:0, b:0}, k = 0; k < c.length; k++) {
      var f = y(g, c[k], h);
      f && 0 > (d.b - f.b || d.q - f.q || d.a - f.a) && (d = f);
    }
    return d;
  });
  return e.filter(A).sort(B).map(function(g) {
    return b[e.indexOf(g)];
  });
}
function B(a, b) {
  return b.q - a.q || b.b - a.b || a.a - b.a || a.c - b.c || 0;
}
function C(a) {
  return a.encoding;
}
function A(a) {
  return 0 < a.q;
}
;const D = /^\s*([^\s\-;]+)(?:-([^\s;]+))?\s*(?:;(.*))?$/;
function E(a) {
  a = a.split(",");
  for (var b = 0, c = 0; b < a.length; b++) {
    var e = F(a[b].trim(), b);
    e && (a[c++] = e);
  }
  a.length = c;
  return a;
}
function F(a, b) {
  var c = D.exec(a);
  if (!c) {
    return null;
  }
  a = c[1];
  var e = c[2], g = a;
  e && (g += "-" + e);
  var h = 1;
  if (c[3]) {
    c = c[3].split(";");
    for (var d = 0; d < c.length; d++) {
      var k = c[d].split("=");
      "q" == k[0] && (h = parseFloat(k[1]));
    }
  }
  return {prefix:a, j:e, q:h, c:b, g};
}
function G(a, b) {
  var c = E(void 0 === a ? "*" : a || "");
  if (!b) {
    return c.filter(H).sort(I).map(J);
  }
  var e = b.map(function(g, h) {
    for (var d = {a:-1, q:0, b:0}, k = 0; k < c.length; k++) {
      a: {
        var f = c[k];
        var l = h, m = F(g, void 0);
        if (m) {
          var p = 0;
          if (f.g.toLowerCase() === m.g.toLowerCase()) {
            p |= 4;
          } else {
            if (f.prefix.toLowerCase() === m.g.toLowerCase()) {
              p |= 2;
            } else {
              if (f.g.toLowerCase() === m.prefix.toLowerCase()) {
                p |= 1;
              } else {
                if ("*" !== f.g) {
                  f = null;
                  break a;
                }
              }
            }
          }
          f = {c:l, a:f.c, q:f.q, b:p};
        } else {
          f = null;
        }
      }
      f && 0 > (d.b - f.b || d.q - f.q || d.a - f.a) && (d = f);
    }
    return d;
  });
  return e.filter(H).sort(I).map(function(g) {
    return b[e.indexOf(g)];
  });
}
function I(a, b) {
  return b.q - a.q || b.b - a.b || a.a - b.a || a.c - b.c || 0;
}
function J(a) {
  return a.g;
}
function H(a) {
  return 0 < a.q;
}
;const K = /^\s*([^s/;]+)\/([^;\s]+)\s*(?:;(.*))?$/;
function L(a) {
  a = a.split(",");
  for (var b = 1, c = 0; b < a.length; b++) {
    0 == M(a[c]) % 2 ? a[++c] = a[b] : a[c] += "," + a[b];
  }
  a.length = c + 1;
  for (c = b = 0; b < a.length; b++) {
    var e = N(a[b].trim(), b);
    e && (a[c++] = e);
  }
  a.length = c;
  return a;
}
function N(a, b) {
  var c = K.exec(a);
  if (!c) {
    return null;
  }
  a = Object.create(null);
  var e = 1, g = c[2], h = c[1];
  if (c[3]) {
    c = c[3].split(";");
    for (var d = 1, k = 0; d < c.length; d++) {
      0 == M(c[k]) % 2 ? c[++k] = c[d] : c[k] += ";" + c[d];
    }
    c.length = k + 1;
    for (d = 0; d < c.length; d++) {
      c[d] = c[d].trim();
    }
    c = c.map(O);
    for (d = 0; d < c.length; d++) {
      var f = c[d];
      k = f[0].toLowerCase();
      f = (f = f[1]) && '"' === f[0] && '"' === f[f.length - 1] ? f.substr(1, f.length - 2) : f;
      if ("q" === k) {
        e = parseFloat(f);
        break;
      }
      a[k] = f;
    }
  }
  return {type:h, i:g, h:a, q:e, c:b};
}
function P(a, b, c) {
  var e = N(a, void 0);
  a = 0;
  if (!e) {
    return null;
  }
  if (b.type.toLowerCase() == e.type.toLowerCase()) {
    a |= 4;
  } else {
    if ("*" != b.type) {
      return null;
    }
  }
  if (b.i.toLowerCase() == e.i.toLowerCase()) {
    a |= 2;
  } else {
    if ("*" != b.i) {
      return null;
    }
  }
  var g = Object.keys(b.h);
  if (0 < g.length) {
    if (g.every(function(h) {
      return "*" == b.h[h] || (b.h[h] || "").toLowerCase() == (e.h[h] || "").toLowerCase();
    })) {
      a |= 1;
    } else {
      return null;
    }
  }
  return {c, a:b.c, q:b.q, b:a};
}
function Q(a, b) {
  var c = L(void 0 === a ? "*/*" : a || "");
  if (!b) {
    return c.filter(R).sort(S).map(T);
  }
  var e = b.map(function(g, h) {
    for (var d = {a:-1, q:0, b:0}, k = 0; k < c.length; k++) {
      var f = P(g, c[k], h);
      f && 0 > (d.b - f.b || d.q - f.q || d.a - f.a) && (d = f);
    }
    return d;
  });
  return e.filter(R).sort(S).map(function(g) {
    return b[e.indexOf(g)];
  });
}
function S(a, b) {
  return b.q - a.q || b.b - a.b || a.a - b.a || a.c - b.c || 0;
}
function T(a) {
  return a.type + "/" + a.i;
}
function R(a) {
  return 0 < a.q;
}
function M(a) {
  for (var b = 0, c = 0; -1 !== (c = a.indexOf('"', c));) {
    b++, c++;
  }
  return b;
}
function O(a) {
  var b = a.indexOf("=");
  if (-1 === b) {
    var c = a;
  } else {
    c = a.substr(0, b);
    var e = a.substr(b + 1);
  }
  return [c, e];
}
;/*
 MIT
 Copyright(c) 2012 Federico Romero
 Copyright(c) 2012-2014 Isaac Z. Schlueter
 Copyright(c) 2015 Douglas Christopher Wilson
 https://npmjs.org/negotiator
*/
class U {
  constructor(a) {
    this.request = a;
    this.headers = this.request.headers;
  }
  charset(a) {
    return (a = this.charsets(a)) && a[0];
  }
  charsets(a) {
    return r(this.headers["accept-charset"], a);
  }
  encoding(a) {
    return (a = this.encodings(a)) && a[0];
  }
  encodings(a) {
    return z(this.headers["accept-encoding"], a);
  }
  language(a) {
    return (a = this.languages(a)) && a[0];
  }
  languages(a) {
    return G(this.headers["accept-language"], a);
  }
  mediaType(a) {
    return (a = this.mediaTypes(a)) && a[0];
  }
  mediaTypes(a) {
    return Q(this.headers.accept, a);
  }
}
;const {extname:V} = path;
/*
 MIT
 Copyright (c) 2014 Jonathan Ong <me@jongleberry.com>
 Copyright (c) 2015 Douglas Christopher Wilson <doug@somethingdoug.com>
 https://npmjs.com/package/mime-types
*/
const W = require("mime-db"), X = Object.create(null), Y = Object.create(null);
Z();
function Z() {
  const a = ["nginx", "apache", void 0, "iana"];
  Object.keys(W).forEach(b => {
    const c = W[b], e = c.extensions;
    if (e && e.length) {
      X[b] = e;
      for (let g = 0; g < e.length; g++) {
        const h = e[g];
        if (Y[h]) {
          const d = a.indexOf(W[Y[h]].source), k = a.indexOf(c.source);
          if ("application/octet-stream" != Y[h] && (d > k || d == k && "application/" == Y[h].substr(0, 12))) {
            continue;
          }
        }
        Y[h] = b;
      }
    }
  });
}
;/*
 MIT
 Copyright(c) 2014 Jonathan Ong
 Copyright(c) 2015 Douglas Christopher Wilson
 https://npmjs.org/accepts
*/
class aa {
  constructor(a) {
    this.headers = a.headers;
    this.f = new U(a);
  }
  types(a, ...b) {
    a && !Array.isArray(a) && (a = [a, ...b]);
    if (!a || 0 == a.length) {
      return this.f.mediaTypes();
    }
    if (!this.headers.accept) {
      return a[0];
    }
    b = a.map(ba);
    var c = this.f.mediaTypes(b.filter(ca));
    [c] = c;
    return c ? a[b.indexOf(c)] : !1;
  }
  get type() {
    return this.types;
  }
  encodings(a, ...b) {
    a && !Array.isArray(a) && (a = [a, ...b]);
    return a && 0 != a.length ? this.f.encodings(a)[0] || !1 : this.f.encodings();
  }
  get encoding() {
    return this.encodings;
  }
  charsets(a, ...b) {
    a && !Array.isArray(a) && (a = [a, ...b]);
    return a && 0 != a.length ? this.f.charsets(a)[0] || !1 : this.f.charsets();
  }
  get charset() {
    return this.charsets;
  }
  languages(a, ...b) {
    a && !Array.isArray(a) && (a = [a, ...b]);
    return a && 0 != a.length ? this.f.languages(a)[0] || !1 : this.f.languages();
  }
  get lang() {
    return this.languages;
  }
  get langs() {
    return this.languages;
  }
  get language() {
    return this.languages;
  }
}
function ba(a) {
  -1 == a.indexOf("/") && (a = a && "string" == typeof a ? (a = V("x." + a).toLowerCase().substr(1)) ? Y[a] || !1 : !1 : !1);
  return a;
}
function ca(a) {
  return "string" == typeof a;
}
;module.exports = aa;


//# sourceMappingURL=accepts.js.map