function over_img(e, t) {
  var i = "_" + t;
  0 == e.hasClass("on") && e.find("img").length > 0 && ((menuimg = e.find("img")), menuimg.attr("src").indexOf(".jpg") > 0 ? (menuimg_type = ".jpg") : menuimg.attr("src").indexOf(".gif") > 0 ? (menuimg_type = ".gif") : menuimg.attr("src").indexOf(".png") > 0 && (menuimg_type = ".png"), (menuimg_src = menuimg.attr("src").split("_off")[0]), (menuimg_src = menuimg_src.split("_on")[0]), (menuimg_src = menuimg_src.split("_select")[0]), menuimg.attr("src", menuimg_src + i + menuimg_type));
}
function gnbUI() {
  var e = $("#header");
  function t() {
    window;
    var t = window.innerHeight;
    e.find(".allMenu .allMenuCont").css({ height: t - 153 });
  }
  function i() {
    e.find(".allMenu").removeClass("dim"),
      setTimeout(function () {
        TweenMax.to(e.find(".allMenu"), 0.3, {
          x: "-100%",
          onComplete: function () {
            e.find(".allMenu").removeClass("on"), e.find(".allMenu").find(".depth1").removeClass("on"), e.find(".allMenu").find(".dimm").remove(), e.find(".utilMenu .btnCheck").hasClass("on") || $("html").removeClass("closeWrapAll");
          },
        }),
          e.find(".allMenu").find(".allMenuCont").scrollTop(0);
      }, 300);
  }
  e.length <= 0 ||
    (t(),
    $(window).on("resize", function () {
      t();
    }),
    e.find(".btnAllmenu").on("click", function (t) {
      t.preventDefault(),
        e.find(".allMenu").addClass("on"),
        e.find(".allMenu").find(".allMenuCont").after('<div class="dimm"></div>'),
        TweenMax.to(e.find(".allMenu"), 0.3, {
          x: "0%",
          onComplete: function () {
            e.find(".allMenu").addClass("dim"), $("html").addClass("closeWrapAll");
          },
        }),
        $(".allMenu .dimm").on("click touchmove touchend", function (e) {
          e.preventDefault(), i();
        });
    }),
    e.find(".allMenu .btnAllMenuClose").on("click", function (e) {
      e.preventDefault(), i();
    }),
    e.find(".utilMenu .btnRecent").on("click", function (t) {
      t.preventDefault(),
        $(this).addClass("on"),
        e.find(".lyRecent").show(),
        e.find(".lyRecent").not(".none").after('<div class="dim"></div>'),
        e.find(".lyRecent").not(".noRecent").css({ height: window.innerHeight }),
        e
          .find(".lyRecent")
          .not(".noRecent")
          .find(".cont")
          .css({ height: window.innerHeight - e.find(".lyRecent").find(".head").outerHeight(!0) }),
        $("html").addClass("closeWrapAll");
    }),
    e.find(".lyRecent .btnLyClose").on("click", function (t) {
      t.preventDefault(), e.find(".utilMenu .btnRecent").removeClass("on"), e.find(".lyRecent").hide(), e.find(".lyRecent").next(".dim").remove(), $("html").removeClass("closeWrapAll");
    }),
    e.find(".lyRecent .btnExcel").on("click", function (e) {
      e.preventDefault(), $(".lyPopup.excel").stop().fadeIn();
    }),
    e.find(".lyPopup.excel .close").on("click", function (e) {
      e.preventDefault(), $(".lyPopup.excel").stop().fadeOut();
    }));
}
function gfnOpenLayer(e, t) {
  t.addClass("foc"),
    (window.focusBtn = $(".foc")),
    TweenMax.set(e, { position: "fixed", width: "100%", minHeight: "100%", top: 0, opacity: 0, y: 0 }),
    e.show(),
    $("html").addClass("closeWrapAll"),
    TweenMax.to(e, 0.4, {
      opacity: 1,
      y: 0,
      onComplete: function () {
        e.css({ transform: "initial" }), e.find(".layerPopArea").attr("tabIndex", -1).focus(), e.addClass("open"), e.scrollTop(0);
      },
    }),
    e
      .find(".btnLayerClose")
      .off("click.closeEvent")
      .on("click.closeEvent", function (t) {
        t.preventDefault(),
          $(this).closest(e).hide(),
          $(this).closest(e).removeClass("open"),
          $(".layerPop").hasClass("open")
            ? $(".layerPop").each(function (e, t) {
                $(t).hasClass("open") && (e >= 0 ? $("html").addClass("closeWrapAll") : ($("html").removeClass("closeWrapAll"), window.focusBtn && ($(window).scrollTop(window.focusBtn.offset().top), window.focusBtn.focus(), window.focusBtn.removeClass("foc"))));
              })
            : ($("html").removeClass("closeWrapAll"), window.focusBtn && ($(window).scrollTop(window.focusBtn.offset().top), window.focusBtn.focus(), window.focusBtn.removeClass("foc")));
      });
}
function scrollUI() {
  var e;
  (e = $(".btnScrollTop")),
    $("#footer"),
    e.lenght <= 0 ||
      (e.on("click", function (e) {
        e.preventDefault(), $("body, html").stop().animate({ scrollTop: 0 });
      }),
      $(window)
        .on("scroll", function () {
          var t = $("#footer"),
            i = $("#header");
          $(".layerPop").hasClass("open") || ($(this).scrollTop() > i.height() ? e.fadeIn() : e.fadeOut(), $(window).scrollTop() >= $(document).height() - window.innerHeight - t.height() ? e.addClass("nofixed") : e.removeClass("nofixed"));
        })
        .trigger("scroll"));
}
function tabUI() {
  var e;
  (e = $(".tabUI")).length <= 0 ||
    e.each(function (t, i) {
      $(i).find("ul > li").hasClass("on")
        ? $(i)
            .find("ul > li")
            .each(function () {
              var e = $(this).filter(".on").index();
              e >= 0 &&
                ($(i).find("ul > li").eq(e).addClass("on").siblings().removeClass("on"),
                $(i).find("ul > li.on > a").after('<span class="blind">\uc120\ud0dd\ub428</span>'),
                $(".cutomerArea").each(function () {
                  $(this).find(" > .tabsCont").hide().eq(e).show();
                }));
            })
        : ($(i).find("ul > li").eq(0).addClass("on").siblings().removeClass("on"),
          $(i).find("ul > li.on > a").after('<span class="blind">\uc120\ud0dd\ub428</span>'),
          $(".cutomerArea").each(function () {
            $(this).find(" > .tabsCont").hide().eq(0).show();
          })),
        (function (t) {
          $(t)
            .find("ul > li > a")
            .on("click", function (t) {
              t.preventDefault();
              var i = $(this).closest("li").index();
              $(".cutomerArea > .tabsCont").eq(i).length <= 0 ||
                ($(this).closest(e).find("ul > li > span.blind").remove(),
                $(this).after('<span class="blind">\uc120\ud0dd\ub428</span>'),
                $(this).closest(e).find("ul > li").eq(i).addClass("on").siblings().removeClass("on"),
                $(".cutomerArea").each(function () {
                  $(this).find(" > .tabsCont").hide().eq(i).show();
                }),
                $(this).closest(".tabsSelect").length > 0 && $(".tabsSelect ul").scrollLeft($(".tabsSelect ul li.on").offset().left - 20));
            });
        })(i);
    });
}
function menuActive() {
  if ($(".subMenu").length > 0) var e = new FTScroller(document.querySelector(".subMenu"), { scrollingX: !0, scrollingY: !1, scrollResponseBoundary: 0, scrollBoundary: 0, bouncing: !1, scrollbars: !1, alwaysScroll: !0 });
  $(".subMenu ul li.on").length > 0 && (e.scrollLeft = $(".subMenu ul li.on").offset().left), $(".tabsSelect ul li.on").length > 0 && $(".tabsSelect ul").scrollLeft($(".tabsSelect ul li.on").offset().left - 20), $(".hashTag a.on").length > 0 && $(".hashTag").scrollLeft($(".hashTag a.on").offset().left - 20);
}
function closeAllmenu() {
  $("#header").find(".allMenu").removeClass("dim"),
    setTimeout(function () {
      TweenMax.to($("#header").find(".allMenu"), 0.3, {
        x: "-100%",
        onComplete: function () {
          $("#header").find(".allMenu").removeClass("on"), $("#header").find(".allMenu").find(".depth1").removeClass("on"), $("#header").find(".allMenu").find(".dimm").remove(), $("#header").find(".utilMenu .btnCheck").hasClass("on") || $("html").removeClass("closeWrapAll");
        },
      }),
        $("#header").find(".allMenu").find(".allMenuCont").scrollTop(0);
    }, 300);
}
!(function (e, t) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  var i = [],
    n = i.slice,
    r = i.concat,
    a = i.push,
    s = i.indexOf,
    o = {},
    l = o.toString,
    d = o.hasOwnProperty,
    u = {},
    c = "1.11.3",
    p = function (e, t) {
      return new p.fn.init(e, t);
    },
    h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    f = /^-ms-/,
    m = /-([\da-z])/gi,
    v = function (e, t) {
      return t.toUpperCase();
    };
  function g(e) {
    var t = "length" in e && e.length,
      i = p.type(e);
    return "function" !== i && !p.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === i || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
  }
  (p.fn = p.prototype =
    {
      jquery: c,
      constructor: p,
      selector: "",
      length: 0,
      toArray: function () {
        return n.call(this);
      },
      get: function (e) {
        return null != e ? (0 > e ? this[e + this.length] : this[e]) : n.call(this);
      },
      pushStack: function (e) {
        var t = p.merge(this.constructor(), e);
        return (t.prevObject = this), (t.context = this.context), t;
      },
      each: function (e, t) {
        return p.each(this, e, t);
      },
      map: function (e) {
        return this.pushStack(
          p.map(this, function (t, i) {
            return e.call(t, i, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(n.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          i = +e + (0 > e ? t : 0);
        return this.pushStack(i >= 0 && t > i ? [this[i]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: a,
      sort: i.sort,
      splice: i.splice,
    }),
    (p.extend = p.fn.extend =
      function () {
        var e,
          t,
          i,
          n,
          r,
          a,
          s = arguments[0] || {},
          o = 1,
          l = arguments.length,
          d = !1;
        for ("boolean" == typeof s && ((d = s), (s = arguments[o] || {}), o++), "object" == typeof s || p.isFunction(s) || (s = {}), o === l && ((s = this), o--); l > o; o++) if (null != (r = arguments[o])) for (n in r) (e = s[n]), s !== (i = r[n]) && (d && i && (p.isPlainObject(i) || (t = p.isArray(i))) ? (t ? ((t = !1), (a = e && p.isArray(e) ? e : [])) : (a = e && p.isPlainObject(e) ? e : {}), (s[n] = p.extend(d, a, i))) : void 0 !== i && (s[n] = i));
        return s;
      }),
    p.extend({
      expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return "function" === p.type(e);
      },
      isArray:
        Array.isArray ||
        function (e) {
          return "array" === p.type(e);
        },
      isWindow: function (e) {
        return null != e && e == e.window;
      },
      isNumeric: function (e) {
        return !p.isArray(e) && e - parseFloat(e) + 1 >= 0;
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      isPlainObject: function (e) {
        var t;
        if (!e || "object" !== p.type(e) || e.nodeType || p.isWindow(e)) return !1;
        try {
          if (e.constructor && !d.call(e, "constructor") && !d.call(e.constructor.prototype, "isPrototypeOf")) return !1;
        } catch (i) {
          return !1;
        }
        if (u.ownLast) for (t in e) return d.call(e, t);
        for (t in e);
        return void 0 === t || d.call(e, t);
      },
      type: function (e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? o[l.call(e)] || "object" : typeof e;
      },
      globalEval: function (t) {
        t &&
          p.trim(t) &&
          (
            e.execScript ||
            function (t) {
              e.eval.call(e, t);
            }
          )(t);
      },
      camelCase: function (e) {
        return e.replace(f, "ms-").replace(m, v);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t, i) {
        var n = 0,
          r = e.length,
          a = g(e);
        if (i) {
          if (a) for (; r > n && !1 !== t.apply(e[n], i); n++);
          else for (n in e) if (!1 === t.apply(e[n], i)) break;
        } else if (a) for (; r > n && !1 !== t.call(e[n], n, e[n]); n++);
        else for (n in e) if (!1 === t.call(e[n], n, e[n])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(h, "");
      },
      makeArray: function (e, t) {
        var i = t || [];
        return null != e && (g(Object(e)) ? p.merge(i, "string" == typeof e ? [e] : e) : a.call(i, e)), i;
      },
      inArray: function (e, t, i) {
        var n;
        if (t) {
          if (s) return s.call(t, e, i);
          for (n = t.length, i = i ? (0 > i ? Math.max(0, n + i) : i) : 0; n > i; i++) if (i in t && t[i] === e) return i;
        }
        return -1;
      },
      merge: function (e, t) {
        for (var i = +t.length, n = 0, r = e.length; i > n; ) e[r++] = t[n++];
        if (i != i) for (; void 0 !== t[n]; ) e[r++] = t[n++];
        return (e.length = r), e;
      },
      grep: function (e, t, i) {
        for (var n = [], r = 0, a = e.length, s = !i; a > r; r++) !t(e[r], r) !== s && n.push(e[r]);
        return n;
      },
      map: function (e, t, i) {
        var n,
          a = 0,
          s = e.length,
          o = [];
        if (g(e)) for (; s > a; a++) null != (n = t(e[a], a, i)) && o.push(n);
        else for (a in e) null != (n = t(e[a], a, i)) && o.push(n);
        return r.apply([], o);
      },
      guid: 1,
      proxy: function (e, t) {
        var i, r, a;
        return (
          "string" == typeof t && ((a = e[t]), (t = e), (e = a)),
          p.isFunction(e)
            ? ((i = n.call(arguments, 2)),
              ((r = function () {
                return e.apply(t || this, i.concat(n.call(arguments)));
              }).guid = e.guid =
                e.guid || p.guid++),
              r)
            : void 0
        );
      },
      now: function () {
        return +new Date();
      },
      support: u,
    }),
    p.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
      o["[object " + t + "]"] = t.toLowerCase();
    });
  var y = (function (e) {
    var t,
      i,
      n,
      r,
      a,
      s,
      o,
      l,
      d,
      u,
      c,
      p,
      h,
      f,
      m,
      v,
      g,
      y,
      w,
      b = "sizzle" + 1 * new Date(),
      x = e.document,
      _ = 0,
      T = 0,
      S = se(),
      C = se(),
      E = se(),
      M = function (e, t) {
        return e === t && (c = !0), 0;
      },
      P = {}.hasOwnProperty,
      k = [],
      z = k.pop,
      A = k.push,
      O = k.push,
      D = k.slice,
      L = function (e, t) {
        for (var i = 0, n = e.length; n > i; i++) if (e[i] === t) return i;
        return -1;
      },
      I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      N = "[\\x20\\t\\r\\n\\f]",
      R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      B = R.replace("w", "w#"),
      F = "\\[" + N + "*(" + R + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + B + "))|)" + N + "*\\]",
      $ = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
      H = new RegExp(N + "+", "g"),
      X = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g"),
      j = new RegExp("^" + N + "*," + N + "*"),
      Y = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
      q = new RegExp("=" + N + "*([^\\]'\"]*?)" + N + "*\\]", "g"),
      G = new RegExp($),
      W = new RegExp("^" + B + "$"),
      V = { ID: new RegExp("^#(" + R + ")"), CLASS: new RegExp("^\\.(" + R + ")"), TAG: new RegExp("^(" + R.replace("w", "w*") + ")"), ATTR: new RegExp("^" + F), PSEUDO: new RegExp("^" + $), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"), bool: new RegExp("^(?:" + I + ")$", "i"), needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i") },
      U = /^(?:input|select|textarea|button)$/i,
      K = /^h\d$/i,
      Z = /^[^{]+\{\s*\[native \w/,
      Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      J = /[+~]/,
      ee = /'|\\/g,
      te = new RegExp("\\\\([\\da-f]{1,6}" + N + "?|(" + N + ")|.)", "ig"),
      ie = function (e, t, i) {
        var n = "0x" + t - 65536;
        return n != n || i ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
      },
      re = function () {
        p();
      };
    try {
      O.apply((k = D.call(x.childNodes)), x.childNodes);
    } catch (ne) {
      O = {
        apply: k.length
          ? function (e, t) {
              A.apply(e, D.call(t));
            }
          : function (e, t) {
              for (var i = e.length, n = 0; (e[i++] = t[n++]); );
              e.length = i - 1;
            },
      };
    }
    function ae(e, t, n, r) {
      var a, o, d, u, c, f, g, y, _, T;
      if (((t ? t.ownerDocument || t : x) !== h && p(t), (n = n || []), (u = (t = t || h).nodeType), "string" != typeof e || !e || (1 !== u && 9 !== u && 11 !== u))) return n;
      if (!r && m) {
        if (11 !== u && (a = Q.exec(e)))
          if ((d = a[1])) {
            if (9 === u) {
              if (!(o = t.getElementById(d)) || !o.parentNode) return n;
              if (o.id === d) return n.push(o), n;
            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(d)) && w(t, o) && o.id === d) return n.push(o), n;
          } else {
            if (a[2]) return O.apply(n, t.getElementsByTagName(e)), n;
            if ((d = a[3]) && i.getElementsByClassName) return O.apply(n, t.getElementsByClassName(d)), n;
          }
        if (i.qsa && (!v || !v.test(e))) {
          if (((y = g = b), (_ = t), (T = 1 !== u && e), 1 === u && "object" !== t.nodeName.toLowerCase())) {
            for (f = s(e), (g = t.getAttribute("id")) ? (y = g.replace(ee, "\\$&")) : t.setAttribute("id", y), y = "[id='" + y + "'] ", c = f.length; c--; ) f[c] = y + ve(f[c]);
            (_ = (J.test(e) && fe(t.parentNode)) || t), (T = f.join(","));
          }
          if (T)
            try {
              return O.apply(n, _.querySelectorAll(T)), n;
            } catch (S) {
            } finally {
              g || t.removeAttribute("id");
            }
        }
      }
      return l(e.replace(X, "$1"), t, n, r);
    }
    function se() {
      var e = [];
      return function t(i, r) {
        return e.push(i + " ") > n.cacheLength && delete t[e.shift()], (t[i + " "] = r);
      };
    }
    function oe(e) {
      return (e[b] = !0), e;
    }
    function le(e) {
      var t = h.createElement("div");
      try {
        return !!e(t);
      } catch (i) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function de(e, t) {
      for (var i = e.split("|"), r = e.length; r--; ) n.attrHandle[i[r]] = t;
    }
    function ue(e, t) {
      var i = t && e,
        n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
      if (n) return n;
      if (i) for (; (i = i.nextSibling); ) if (i === t) return -1;
      return e ? 1 : -1;
    }
    function ce(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function pe(e) {
      return function (t) {
        var i = t.nodeName.toLowerCase();
        return ("input" === i || "button" === i) && t.type === e;
      };
    }
    function he(e) {
      return oe(function (t) {
        return (
          (t = +t),
          oe(function (i, n) {
            for (var r, a = e([], i.length, t), s = a.length; s--; ) i[(r = a[s])] && (i[r] = !(n[r] = i[r]));
          })
        );
      });
    }
    function fe(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (t in ((i = ae.support = {}),
    (a = ae.isXML =
      function (e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName;
      }),
    (p = ae.setDocument =
      function (e) {
        var t,
          r,
          s = e ? e.ownerDocument || e : x;
        return s !== h && 9 === s.nodeType && s.documentElement
          ? ((h = s),
            (f = s.documentElement),
            (r = s.defaultView) && r !== r.top && (r.addEventListener ? r.addEventListener("unload", re, !1) : r.attachEvent && r.attachEvent("onunload", re)),
            (m = !a(s)),
            (i.attributes = le(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (i.getElementsByTagName = le(function (e) {
              return e.appendChild(s.createComment("")), !e.getElementsByTagName("*").length;
            })),
            (i.getElementsByClassName = Z.test(s.getElementsByClassName)),
            (i.getById = le(function (e) {
              return (f.appendChild(e).id = b), !s.getElementsByName || !s.getElementsByName(b).length;
            })),
            i.getById
              ? ((n.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && m) {
                    var i = t.getElementById(e);
                    return i && i.parentNode ? [i] : [];
                  }
                }),
                (n.filter.ID = function (e) {
                  var t = e.replace(te, ie);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }))
              : (delete n.find.ID,
                (n.filter.ID = function (e) {
                  var t = e.replace(te, ie);
                  return function (e) {
                    var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return i && i.value === t;
                  };
                })),
            (n.find.TAG = i.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0;
                }
              : function (e, t) {
                  var i,
                    n = [],
                    r = 0,
                    a = t.getElementsByTagName(e);
                  if ("*" === e) {
                    for (; (i = a[r++]); ) 1 === i.nodeType && n.push(i);
                    return n;
                  }
                  return a;
                }),
            (n.find.CLASS =
              i.getElementsByClassName &&
              function (e, t) {
                return m ? t.getElementsByClassName(e) : void 0;
              }),
            (g = []),
            (v = []),
            (i.qsa = Z.test(s.querySelectorAll)) &&
              (le(function (e) {
                (f.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\f]' msallowcapture=''><option selected=''></option></select>"), e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + N + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + N + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]");
              }),
              le(function (e) {
                var t = s.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + N + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
              })),
            (i.matchesSelector = Z.test((y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector))) &&
              le(function (e) {
                (i.disconnectedMatch = y.call(e, "div")), y.call(e, "[s!='']:x"), g.push("!=", $);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (g = g.length && new RegExp(g.join("|"))),
            (t = Z.test(f.compareDocumentPosition)),
            (w =
              t || Z.test(f.contains)
                ? function (e, t) {
                    var i = 9 === e.nodeType ? e.documentElement : e,
                      n = t && t.parentNode;
                    return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)));
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (M = t
              ? function (e, t) {
                  if (e === t) return (c = !0), 0;
                  var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!i.sortDetached && t.compareDocumentPosition(e) === n) ? (e === s || (e.ownerDocument === x && w(x, e)) ? -1 : t === s || (t.ownerDocument === x && w(x, t)) ? 1 : u ? L(u, e) - L(u, t) : 0) : 4 & n ? -1 : 1);
                }
              : function (e, t) {
                  if (e === t) return (c = !0), 0;
                  var i,
                    n = 0,
                    r = e.parentNode,
                    a = t.parentNode,
                    o = [e],
                    l = [t];
                  if (!r || !a) return e === s ? -1 : t === s ? 1 : r ? -1 : a ? 1 : u ? L(u, e) - L(u, t) : 0;
                  if (r === a) return ue(e, t);
                  for (i = e; (i = i.parentNode); ) o.unshift(i);
                  for (i = t; (i = i.parentNode); ) l.unshift(i);
                  for (; o[n] === l[n]; ) n++;
                  return n ? ue(o[n], l[n]) : o[n] === x ? -1 : l[n] === x ? 1 : 0;
                }),
            s)
          : h;
      }),
    (ae.matches = function (e, t) {
      return ae(e, null, null, t);
    }),
    (ae.matchesSelector = function (e, t) {
      if (((e.ownerDocument || e) !== h && p(e), (t = t.replace(q, "='$1']")), !(!i.matchesSelector || !m || (g && g.test(t)) || (v && v.test(t)))))
        try {
          var n = y.call(e, t);
          if (n || i.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
        } catch (r) {}
      return ae(t, h, null, [e]).length > 0;
    }),
    (ae.contains = function (e, t) {
      return (e.ownerDocument || e) !== h && p(e), w(e, t);
    }),
    (ae.attr = function (e, t) {
      (e.ownerDocument || e) !== h && p(e);
      var r = n.attrHandle[t.toLowerCase()],
        a = r && P.call(n.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;
      return void 0 !== a ? a : i.attributes || !m ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null;
    }),
    (ae.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (ae.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        a = 0;
      if (((c = !i.detectDuplicates), (u = !i.sortStable && e.slice(0)), e.sort(M), c)) {
        for (; (t = e[a++]); ) t === e[a] && (r = n.push(a));
        for (; r--; ) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (r = ae.getText =
      function (e) {
        var t,
          i = "",
          n = 0,
          a = e.nodeType;
        if (a) {
          if (1 === a || 9 === a || 11 === a) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) i += r(e);
          } else if (3 === a || 4 === a) return e.nodeValue;
        } else for (; (t = e[n++]); ) i += r(t);
        return i;
      }),
    ((n = ae.selectors =
      {
        cacheLength: 50,
        createPseudo: oe,
        match: V,
        attrHandle: {},
        find: {},
        relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
        preFilter: {
          ATTR: function (e) {
            return (e[1] = e[1].replace(te, ie)), (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ie)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
          },
          CHILD: function (e) {
            return (e[1] = e[1].toLowerCase()), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && ae.error(e[0]), e;
          },
          PSEUDO: function (e) {
            var t,
              i = !e[6] && e[2];
            return V.CHILD.test(e[0]) ? null : (e[3] ? (e[2] = e[4] || e[5] || "") : i && G.test(i) && (t = s(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && ((e[0] = e[0].slice(0, t)), (e[2] = i.slice(0, t))), e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ie).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = S[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + N + ")" + e + "(" + N + "|$)")) &&
                S(e, function (e) {
                  return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                }))
            );
          },
          ATTR: function (e, t, i) {
            return function (n) {
              var r = ae.attr(n, e);
              return null == r ? "!=" === t : !t || ((r += ""), "=" === t ? r === i : "!=" === t ? r !== i : "^=" === t ? i && 0 === r.indexOf(i) : "*=" === t ? i && r.indexOf(i) > -1 : "$=" === t ? i && r.slice(-i.length) === i : "~=" === t ? (" " + r.replace(H, " ") + " ").indexOf(i) > -1 : "|=" === t && (r === i || r.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (e, t, i, n, r) {
            var a = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              o = "of-type" === t;
            return 1 === n && 0 === r
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (t, i, l) {
                  var d,
                    u,
                    c,
                    p,
                    h,
                    f,
                    m = a !== s ? "nextSibling" : "previousSibling",
                    v = t.parentNode,
                    g = o && t.nodeName.toLowerCase(),
                    y = !l && !o;
                  if (v) {
                    if (a) {
                      for (; m; ) {
                        for (c = t; (c = c[m]); ) if (o ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
                        f = m = "only" === e && !f && "nextSibling";
                      }
                      return !0;
                    }
                    if (((f = [s ? v.firstChild : v.lastChild]), s && y)) {
                      for (p = (d = (u = v[b] || (v[b] = {}))[e] || [])[0] === _ && d[2], c = (h = d[0] === _ && d[1]) && v.childNodes[h]; (c = (++h && c && c[m]) || (p = h = 0) || f.pop()); )
                        if (1 === c.nodeType && ++p && c === t) {
                          u[e] = [_, h, p];
                          break;
                        }
                    } else if (y && (d = (t[b] || (t[b] = {}))[e]) && d[0] === _) p = d[1];
                    else for (; (c = (++h && c && c[m]) || (p = h = 0) || f.pop()) && ((o ? c.nodeName.toLowerCase() !== g : 1 !== c.nodeType) || !++p || (y && ((c[b] || (c[b] = {}))[e] = [_, p]), c !== t)); );
                    return (p -= r) === n || (p % n == 0 && p / n >= 0);
                  }
                };
          },
          PSEUDO: function (e, t) {
            var i,
              r = n.pseudos[e] || n.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
            return r[b]
              ? r(t)
              : r.length > 1
              ? ((i = [e, e, "", t]),
                n.setFilters.hasOwnProperty(e.toLowerCase())
                  ? oe(function (e, i) {
                      for (var n, a = r(e, t), s = a.length; s--; ) e[(n = L(e, a[s]))] = !(i[n] = a[s]);
                    })
                  : function (e) {
                      return r(e, 0, i);
                    })
              : r;
          },
        },
        pseudos: {
          not: oe(function (e) {
            var t = [],
              i = [],
              n = o(e.replace(X, "$1"));
            return n[b]
              ? oe(function (e, t, i, r) {
                  for (var a, s = n(e, null, r, []), o = e.length; o--; ) (a = s[o]) && (e[o] = !(t[o] = a));
                })
              : function (e, r, a) {
                  return (t[0] = e), n(t, null, a, i), (t[0] = null), !i.pop();
                };
          }),
          has: oe(function (e) {
            return function (t) {
              return ae(e, t).length > 0;
            };
          }),
          contains: oe(function (e) {
            return (
              (e = e.replace(te, ie)),
              function (t) {
                return (t.textContent || t.innerText || r(t)).indexOf(e) > -1;
              }
            );
          }),
          lang: oe(function (e) {
            return (
              W.test(e || "") || ae.error("unsupported lang: " + e),
              (e = e.replace(te, ie).toLowerCase()),
              function (t) {
                var i;
                do {
                  if ((i = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-");
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var i = e.location && e.location.hash;
            return i && i.slice(1) === t.id;
          },
          root: function (e) {
            return e === f;
          },
          focus: function (e) {
            return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
          },
          enabled: function (e) {
            return !1 === e.disabled;
          },
          disabled: function (e) {
            return !0 === e.disabled;
          },
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
          },
          selected: function (e) {
            return !0 === e.selected;
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !n.pseudos.empty(e);
          },
          header: function (e) {
            return K.test(e.nodeName);
          },
          input: function (e) {
            return U.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
          },
          first: he(function () {
            return [0];
          }),
          last: he(function (e, t) {
            return [t - 1];
          }),
          eq: he(function (e, t, i) {
            return [0 > i ? i + t : i];
          }),
          even: he(function (e, t) {
            for (var i = 0; t > i; i += 2) e.push(i);
            return e;
          }),
          odd: he(function (e, t) {
            for (var i = 1; t > i; i += 2) e.push(i);
            return e;
          }),
          lt: he(function (e, t, i) {
            for (var n = 0 > i ? i + t : i; --n >= 0; ) e.push(n);
            return e;
          }),
          gt: he(function (e, t, i) {
            for (var n = 0 > i ? i + t : i; ++n < t; ) e.push(n);
            return e;
          }),
        },
      }).pseudos.nth = n.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      n.pseudos[t] = ce(t);
    for (t in { submit: !0, reset: !0 }) n.pseudos[t] = pe(t);
    function me() {}
    function ve(e) {
      for (var t = 0, i = e.length, n = ""; i > t; t++) n += e[t].value;
      return n;
    }
    function ge(e, t, i) {
      var n = t.dir,
        r = i && "parentNode" === n,
        a = T++;
      return t.first
        ? function (t, i, a) {
            for (; (t = t[n]); ) if (1 === t.nodeType || r) return e(t, i, a);
          }
        : function (t, i, s) {
            var o,
              l,
              d = [_, a];
            if (s) {
              for (; (t = t[n]); ) if ((1 === t.nodeType || r) && e(t, i, s)) return !0;
            } else
              for (; (t = t[n]); )
                if (1 === t.nodeType || r) {
                  if ((o = (l = t[b] || (t[b] = {}))[n]) && o[0] === _ && o[1] === a) return (d[2] = o[2]);
                  if (((l[n] = d), (d[2] = e(t, i, s)))) return !0;
                }
          };
    }
    function ye(e) {
      return e.length > 1
        ? function (t, i, n) {
            for (var r = e.length; r--; ) if (!e[r](t, i, n)) return !1;
            return !0;
          }
        : e[0];
    }
    function we(e, t, i, n, r) {
      for (var a, s = [], o = 0, l = e.length, d = null != t; l > o; o++) (a = e[o]) && (!i || i(a, n, r)) && (s.push(a), d && t.push(o));
      return s;
    }
    function be(e, t, i, n, r, a) {
      return (
        n && !n[b] && (n = be(n)),
        r && !r[b] && (r = be(r, a)),
        oe(function (a, s, o, l) {
          var d,
            u,
            c,
            p = [],
            h = [],
            f = s.length,
            m =
              a ||
              (function (e, t, i) {
                for (var n = 0, r = t.length; r > n; n++) ae(e, t[n], i);
                return i;
              })(t || "*", o.nodeType ? [o] : o, []),
            v = !e || (!a && t) ? m : we(m, p, e, o, l),
            g = i ? (r || (a ? e : f || n) ? [] : s) : v;
          if ((i && i(v, g, o, l), n)) for (d = we(g, h), n(d, [], o, l), u = d.length; u--; ) (c = d[u]) && (g[h[u]] = !(v[h[u]] = c));
          if (a) {
            if (r || e) {
              if (r) {
                for (d = [], u = g.length; u--; ) (c = g[u]) && d.push((v[u] = c));
                r(null, (g = []), d, l);
              }
              for (u = g.length; u--; ) (c = g[u]) && (d = r ? L(a, c) : p[u]) > -1 && (a[d] = !(s[d] = c));
            }
          } else (g = we(g === s ? g.splice(f, g.length) : g)), r ? r(null, s, g, l) : O.apply(s, g);
        })
      );
    }
    function xe(e) {
      for (
        var t,
          i,
          r,
          a = e.length,
          s = n.relative[e[0].type],
          o = s || n.relative[" "],
          l = s ? 1 : 0,
          u = ge(
            function (e) {
              return e === t;
            },
            o,
            !0
          ),
          c = ge(
            function (e) {
              return L(t, e) > -1;
            },
            o,
            !0
          ),
          p = [
            function (e, i, n) {
              var r = (!s && (n || i !== d)) || ((t = i).nodeType ? u(e, i, n) : c(e, i, n));
              return (t = null), r;
            },
          ];
        a > l;
        l++
      )
        if ((i = n.relative[e[l].type])) p = [ge(ye(p), i)];
        else {
          if ((i = n.filter[e[l].type].apply(null, e[l].matches))[b]) {
            for (r = ++l; a > r && !n.relative[e[r].type]; r++);
            return be(l > 1 && ye(p), l > 1 && ve(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(X, "$1"), i, r > l && xe(e.slice(l, r)), a > r && xe((e = e.slice(r))), a > r && ve(e));
          }
          p.push(i);
        }
      return ye(p);
    }
    function _e(e, t) {
      var i = t.length > 0,
        r = e.length > 0,
        a = function (a, s, o, l, u) {
          var c,
            p,
            f,
            m = 0,
            v = "0",
            g = a && [],
            y = [],
            w = d,
            b = a || (r && n.find.TAG("*", u)),
            x = (_ += null == w ? 1 : Math.random() || 0.1),
            T = b.length;
          for (u && (d = s !== h && s); v !== T && null != (c = b[v]); v++) {
            if (r && c) {
              for (p = 0; (f = e[p++]); )
                if (f(c, s, o)) {
                  l.push(c);
                  break;
                }
              u && (_ = x);
            }
            i && ((c = !f && c) && m--, a && g.push(c));
          }
          if (((m += v), i && v !== m)) {
            for (p = 0; (f = t[p++]); ) f(g, y, s, o);
            if (a) {
              if (m > 0) for (; v--; ) g[v] || y[v] || (y[v] = z.call(l));
              y = we(y);
            }
            O.apply(l, y), u && !a && y.length > 0 && m + t.length > 1 && ae.uniqueSort(l);
          }
          return u && ((_ = x), (d = w)), g;
        };
      return i ? oe(a) : a;
    }
    return (
      (me.prototype = n.filters = n.pseudos),
      (n.setFilters = new me()),
      (s = ae.tokenize =
        function (e, t) {
          var i,
            r,
            a,
            s,
            o,
            l,
            d,
            u = C[e + " "];
          if (u) return t ? 0 : u.slice(0);
          for (o = e, l = [], d = n.preFilter; o; ) {
            for (s in ((!i || (r = j.exec(o))) && (r && (o = o.slice(r[0].length) || o), l.push((a = []))), (i = !1), (r = Y.exec(o)) && ((i = r.shift()), a.push({ value: i, type: r[0].replace(X, " ") }), (o = o.slice(i.length))), n.filter)) !(r = V[s].exec(o)) || (d[s] && !(r = d[s](r))) || ((i = r.shift()), a.push({ value: i, type: s, matches: r }), (o = o.slice(i.length)));
            if (!i) break;
          }
          return t ? o.length : o ? ae.error(e) : C(e, l).slice(0);
        }),
      (o = ae.compile =
        function (e, t) {
          var i,
            n = [],
            r = [],
            a = E[e + " "];
          if (!a) {
            for (t || (t = s(e)), i = t.length; i--; ) (a = xe(t[i]))[b] ? n.push(a) : r.push(a);
            (a = E(e, _e(r, n))).selector = e;
          }
          return a;
        }),
      (l = ae.select =
        function (e, t, r, a) {
          var l,
            d,
            u,
            c,
            p,
            h = "function" == typeof e && e,
            f = !a && s((e = h.selector || e));
          if (((r = r || []), 1 === f.length)) {
            if ((d = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = d[0]).type && i.getById && 9 === t.nodeType && m && n.relative[d[1].type]) {
              if (!(t = (n.find.ID(u.matches[0].replace(te, ie), t) || [])[0])) return r;
              h && (t = t.parentNode), (e = e.slice(d.shift().value.length));
            }
            for (l = V.needsContext.test(e) ? 0 : d.length; l-- && !n.relative[(c = (u = d[l]).type)]; )
              if ((p = n.find[c]) && (a = p(u.matches[0].replace(te, ie), (J.test(d[0].type) && fe(t.parentNode)) || t))) {
                if ((d.splice(l, 1), !(e = a.length && ve(d)))) return O.apply(r, a), r;
                break;
              }
          }
          return (h || o(e, f))(a, t, !m, r, (J.test(e) && fe(t.parentNode)) || t), r;
        }),
      (i.sortStable = b.split("").sort(M).join("") === b),
      (i.detectDuplicates = !!c),
      p(),
      (i.sortDetached = le(function (e) {
        return 1 & e.compareDocumentPosition(h.createElement("div"));
      })),
      le(function (e) {
        return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
      }) ||
        de("type|href|height|width", function (e, t, i) {
          return i ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (i.attributes &&
        le(function (e) {
          return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        })) ||
        de("value", function (e, t, i) {
          return i || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue;
        }),
      le(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        de(I, function (e, t, i) {
          var n;
          return i ? void 0 : !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null;
        }),
      ae
    );
  })(e);
  (p.find = y), (p.expr = y.selectors), (p.expr[":"] = p.expr.pseudos), (p.unique = y.uniqueSort), (p.text = y.getText), (p.isXMLDoc = y.isXML), (p.contains = y.contains);
  var w = p.expr.match.needsContext,
    b = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    x = /^.[^:#\[\.,]*$/;
  function _(e, t, i) {
    if (p.isFunction(t))
      return p.grep(e, function (e, n) {
        return !!t.call(e, n, e) !== i;
      });
    if (t.nodeType)
      return p.grep(e, function (e) {
        return (e === t) !== i;
      });
    if ("string" == typeof t) {
      if (x.test(t)) return p.filter(t, e, i);
      t = p.filter(t, e);
    }
    return p.grep(e, function (e) {
      return p.inArray(e, t) >= 0 !== i;
    });
  }
  (p.filter = function (e, t, i) {
    var n = t[0];
    return (
      i && (e = ":not(" + e + ")"),
      1 === t.length && 1 === n.nodeType
        ? p.find.matchesSelector(n, e)
          ? [n]
          : []
        : p.find.matches(
            e,
            p.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    p.fn.extend({
      find: function (e) {
        var t,
          i = [],
          n = this,
          r = n.length;
        if ("string" != typeof e)
          return this.pushStack(
            p(e).filter(function () {
              for (t = 0; r > t; t++) if (p.contains(n[t], this)) return !0;
            })
          );
        for (t = 0; r > t; t++) p.find(e, n[t], i);
        return ((i = this.pushStack(r > 1 ? p.unique(i) : i)).selector = this.selector ? this.selector + " " + e : e), i;
      },
      filter: function (e) {
        return this.pushStack(_(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(_(this, e || [], !0));
      },
      is: function (e) {
        return !!_(this, "string" == typeof e && w.test(e) ? p(e) : e || [], !1).length;
      },
    });
  var T,
    S = e.document,
    C = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  ((p.fn.init = function (e, t) {
    var i, n;
    if (!e) return this;
    if ("string" == typeof e) {
      if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : C.exec(e)) || (!i[1] && t)) return !t || t.jquery ? (t || T).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if ((p.merge(this, p.parseHTML(i[1], (t = t instanceof p ? t[0] : t) && t.nodeType ? t.ownerDocument || t : S, !0)), b.test(i[1]) && p.isPlainObject(t))) for (i in t) p.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      if ((n = S.getElementById(i[2])) && n.parentNode) {
        if (n.id !== i[2]) return T.find(e);
        (this.length = 1), (this[0] = n);
      }
      return (this.context = S), (this.selector = e), this;
    }
    return e.nodeType ? ((this.context = this[0] = e), (this.length = 1), this) : p.isFunction(e) ? (void 0 !== T.ready ? T.ready(e) : e(p)) : (void 0 !== e.selector && ((this.selector = e.selector), (this.context = e.context)), p.makeArray(e, this));
  }).prototype = p.fn),
    (T = p(S));
  var E = /^(?:parents|prev(?:Until|All))/,
    M = { children: !0, contents: !0, next: !0, prev: !0 };
  function P(e, t) {
    do {
      e = e[t];
    } while (e && 1 !== e.nodeType);
    return e;
  }
  p.extend({
    dir: function (e, t, i) {
      for (var n = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === i || 1 !== r.nodeType || !p(r).is(i)); ) 1 === r.nodeType && n.push(r), (r = r[t]);
      return n;
    },
    sibling: function (e, t) {
      for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
      return i;
    },
  }),
    p.fn.extend({
      has: function (e) {
        var t,
          i = p(e, this),
          n = i.length;
        return this.filter(function () {
          for (t = 0; n > t; t++) if (p.contains(this, i[t])) return !0;
        });
      },
      closest: function (e, t) {
        for (var i, n = 0, r = this.length, a = [], s = w.test(e) || "string" != typeof e ? p(e, t || this.context) : 0; r > n; n++)
          for (i = this[n]; i && i !== t; i = i.parentNode)
            if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && p.find.matchesSelector(i, e))) {
              a.push(i);
              break;
            }
        return this.pushStack(a.length > 1 ? p.unique(a) : a);
      },
      index: function (e) {
        return e ? ("string" == typeof e ? p.inArray(this[0], p(e)) : p.inArray(e.jquery ? e[0] : e, this)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function (e, t) {
        return this.pushStack(p.unique(p.merge(this.get(), p(e, t))));
      },
      addBack: function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      },
    }),
    p.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return p.dir(e, "parentNode");
        },
        parentsUntil: function (e, t, i) {
          return p.dir(e, "parentNode", i);
        },
        next: function (e) {
          return P(e, "nextSibling");
        },
        prev: function (e) {
          return P(e, "previousSibling");
        },
        nextAll: function (e) {
          return p.dir(e, "nextSibling");
        },
        prevAll: function (e) {
          return p.dir(e, "previousSibling");
        },
        nextUntil: function (e, t, i) {
          return p.dir(e, "nextSibling", i);
        },
        prevUntil: function (e, t, i) {
          return p.dir(e, "previousSibling", i);
        },
        siblings: function (e) {
          return p.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return p.sibling(e.firstChild);
        },
        contents: function (e) {
          return p.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : p.merge([], e.childNodes);
        },
      },
      function (e, t) {
        p.fn[e] = function (i, n) {
          var r = p.map(this, t, i);
          return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (r = p.filter(n, r)), this.length > 1 && (M[e] || (r = p.unique(r)), E.test(e) && (r = r.reverse())), this.pushStack(r);
        };
      }
    );
  var k,
    z = /\S+/g,
    A = {};
  function O() {
    S.addEventListener ? (S.removeEventListener("DOMContentLoaded", D, !1), e.removeEventListener("load", D, !1)) : (S.detachEvent("onreadystatechange", D), e.detachEvent("onload", D));
  }
  function D() {
    (S.addEventListener || "load" === event.type || "complete" === S.readyState) && (O(), p.ready());
  }
  (p.Callbacks = function (e) {
    e =
      "string" == typeof e
        ? A[e] ||
          (function (e) {
            var t = (A[e] = {});
            return (
              p.each(e.match(z) || [], function (e, i) {
                t[i] = !0;
              }),
              t
            );
          })(e)
        : p.extend({}, e);
    var t,
      i,
      n,
      r,
      a,
      s,
      o = [],
      l = !e.once && [],
      d = function (c) {
        for (i = e.memory && c, n = !0, a = s || 0, s = 0, r = o.length, t = !0; o && r > a; a++)
          if (!1 === o[a].apply(c[0], c[1]) && e.stopOnFalse) {
            i = !1;
            break;
          }
        (t = !1), o && (l ? l.length && d(l.shift()) : i ? (o = []) : u.disable());
      },
      u = {
        add: function () {
          if (o) {
            var n = o.length;
            !(function t(i) {
              p.each(i, function (i, n) {
                var r = p.type(n);
                "function" === r ? (e.unique && u.has(n)) || o.push(n) : n && n.length && "string" !== r && t(n);
              });
            })(arguments),
              t ? (r = o.length) : i && ((s = n), d(i));
          }
          return this;
        },
        remove: function () {
          return (
            o &&
              p.each(arguments, function (e, i) {
                for (var n; (n = p.inArray(i, o, n)) > -1; ) o.splice(n, 1), t && (r >= n && r--, a >= n && a--);
              }),
            this
          );
        },
        has: function (e) {
          return e ? p.inArray(e, o) > -1 : !(!o || !o.length);
        },
        empty: function () {
          return (o = []), (r = 0), this;
        },
        disable: function () {
          return (o = l = i = void 0), this;
        },
        disabled: function () {
          return !o;
        },
        lock: function () {
          return (l = void 0), i || u.disable(), this;
        },
        locked: function () {
          return !l;
        },
        fireWith: function (e, i) {
          return !o || (n && !l) || ((i = [e, (i = i || []).slice ? i.slice() : i]), t ? l.push(i) : d(i)), this;
        },
        fire: function () {
          return u.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!n;
        },
      };
    return u;
  }),
    p.extend({
      Deferred: function (e) {
        var t = [
            ["resolve", "done", p.Callbacks("once memory"), "resolved"],
            ["reject", "fail", p.Callbacks("once memory"), "rejected"],
            ["notify", "progress", p.Callbacks("memory")],
          ],
          i = "pending",
          n = {
            state: function () {
              return i;
            },
            always: function () {
              return r.done(arguments).fail(arguments), this;
            },
            then: function () {
              var e = arguments;
              return p
                .Deferred(function (i) {
                  p.each(t, function (t, a) {
                    var s = p.isFunction(e[t]) && e[t];
                    r[a[1]](function () {
                      var e = s && s.apply(this, arguments);
                      e && p.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[a[0] + "With"](this === n ? i.promise() : this, s ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? p.extend(e, n) : n;
            },
          },
          r = {};
        return (
          (n.pipe = n.then),
          p.each(t, function (e, a) {
            var s = a[2],
              o = a[3];
            (n[a[1]] = s.add),
              o &&
                s.add(
                  function () {
                    i = o;
                  },
                  t[1 ^ e][2].disable,
                  t[2][2].lock
                ),
              (r[a[0]] = function () {
                return r[a[0] + "With"](this === r ? n : this, arguments), this;
              }),
              (r[a[0] + "With"] = s.fireWith);
          }),
          n.promise(r),
          e && e.call(r, r),
          r
        );
      },
      when: function (e) {
        var t,
          i,
          r,
          a = 0,
          s = n.call(arguments),
          o = s.length,
          l = 1 !== o || (e && p.isFunction(e.promise)) ? o : 0,
          d = 1 === l ? e : p.Deferred(),
          u = function (e, i, r) {
            return function (a) {
              (i[e] = this), (r[e] = arguments.length > 1 ? n.call(arguments) : a), r === t ? d.notifyWith(i, r) : --l || d.resolveWith(i, r);
            };
          };
        if (o > 1) for (t = new Array(o), i = new Array(o), r = new Array(o); o > a; a++) s[a] && p.isFunction(s[a].promise) ? s[a].promise().done(u(a, r, s)).fail(d.reject).progress(u(a, i, t)) : --l;
        return l || d.resolveWith(r, s), d.promise();
      },
    }),
    (p.fn.ready = function (e) {
      return p.ready.promise().done(e), this;
    }),
    p.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? p.readyWait++ : p.ready(!0);
      },
      ready: function (e) {
        if (!0 === e ? !--p.readyWait : !p.isReady) {
          if (!S.body) return setTimeout(p.ready);
          (p.isReady = !0), (!0 !== e && --p.readyWait > 0) || (k.resolveWith(S, [p]), p.fn.triggerHandler && (p(S).triggerHandler("ready"), p(S).off("ready")));
        }
      },
    }),
    (p.ready.promise = function (t) {
      if (!k)
        if (((k = p.Deferred()), "complete" === S.readyState)) setTimeout(p.ready);
        else if (S.addEventListener) S.addEventListener("DOMContentLoaded", D, !1), e.addEventListener("load", D, !1);
        else {
          S.attachEvent("onreadystatechange", D), e.attachEvent("onload", D);
          var i = !1;
          try {
            i = null == e.frameElement && S.documentElement;
          } catch (n) {}
          i &&
            i.doScroll &&
            (function t() {
              if (!p.isReady) {
                try {
                  i.doScroll("left");
                } catch (e) {
                  return setTimeout(t, 50);
                }
                O(), p.ready();
              }
            })();
        }
      return k.promise(t);
    });
  var L,
    I = "undefined";
  for (L in p(u)) break;
  (u.ownLast = "0" !== L),
    (u.inlineBlockNeedsLayout = !1),
    p(function () {
      var e, t, i, n;
      (i = S.getElementsByTagName("body")[0]) && i.style && ((t = S.createElement("div")), ((n = S.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"), i.appendChild(n).appendChild(t), typeof t.style.zoom !== I && ((t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"), (u.inlineBlockNeedsLayout = e = 3 === t.offsetWidth), e && (i.style.zoom = 1)), i.removeChild(n));
    }),
    (function () {
      var e = S.createElement("div");
      if (null == u.deleteExpando) {
        u.deleteExpando = !0;
        try {
          delete e.test;
        } catch (t) {
          u.deleteExpando = !1;
        }
      }
      e = null;
    })(),
    (p.acceptData = function (e) {
      var t = p.noData[(e.nodeName + " ").toLowerCase()],
        i = +e.nodeType || 1;
      return (1 === i || 9 === i) && (!t || (!0 !== t && e.getAttribute("classid") === t));
    });
  var N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    R = /([A-Z])/g;
  function B(e, t, i) {
    if (void 0 === i && 1 === e.nodeType) {
      var n = "data-" + t.replace(R, "-$1").toLowerCase();
      if ("string" == typeof (i = e.getAttribute(n))) {
        try {
          i = "true" === i || ("false" !== i && ("null" === i ? null : +i + "" === i ? +i : N.test(i) ? p.parseJSON(i) : i));
        } catch (r) {}
        p.data(e, t, i);
      } else i = void 0;
    }
    return i;
  }
  function F(e) {
    var t;
    for (t in e) if (("data" !== t || !p.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    return !0;
  }
  function $(e, t, n, r) {
    if (p.acceptData(e)) {
      var a,
        s,
        o = p.expando,
        l = e.nodeType,
        d = l ? p.cache : e,
        u = l ? e[o] : e[o] && o;
      if ((u && d[u] && (r || d[u].data)) || void 0 !== n || "string" != typeof t) return u || (u = l ? (e[o] = i.pop() || p.guid++) : o), d[u] || (d[u] = l ? {} : { toJSON: p.noop }), ("object" == typeof t || "function" == typeof t) && (r ? (d[u] = p.extend(d[u], t)) : (d[u].data = p.extend(d[u].data, t))), (s = d[u]), r || (s.data || (s.data = {}), (s = s.data)), void 0 !== n && (s[p.camelCase(t)] = n), "string" == typeof t ? null == (a = s[t]) && (a = s[p.camelCase(t)]) : (a = s), a;
    }
  }
  function H(e, t, i) {
    if (p.acceptData(e)) {
      var n,
        r,
        a = e.nodeType,
        s = a ? p.cache : e,
        o = a ? e[p.expando] : p.expando;
      if (s[o]) {
        if (t && (n = i ? s[o] : s[o].data)) {
          r = (t = p.isArray(t) ? t.concat(p.map(t, p.camelCase)) : t in n || (t = p.camelCase(t)) in n ? [t] : t.split(" ")).length;
          for (; r--; ) delete n[t[r]];
          if (i ? !F(n) : !p.isEmptyObject(n)) return;
        }
        (i || (delete s[o].data, F(s[o]))) && (a ? p.cleanData([e], !0) : u.deleteExpando || s != s.window ? delete s[o] : (s[o] = null));
      }
    }
  }
  p.extend({
    cache: {},
    noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" },
    hasData: function (e) {
      return !!(e = e.nodeType ? p.cache[e[p.expando]] : e[p.expando]) && !F(e);
    },
    data: function (e, t, i) {
      return $(e, t, i);
    },
    removeData: function (e, t) {
      return H(e, t);
    },
    _data: function (e, t, i) {
      return $(e, t, i, !0);
    },
    _removeData: function (e, t) {
      return H(e, t, !0);
    },
  }),
    p.fn.extend({
      data: function (e, t) {
        var i,
          n,
          r,
          a = this[0],
          s = a && a.attributes;
        if (void 0 === e) {
          if (this.length && ((r = p.data(a)), 1 === a.nodeType && !p._data(a, "parsedAttrs"))) {
            for (i = s.length; i--; ) s[i] && 0 === (n = s[i].name).indexOf("data-") && B(a, (n = p.camelCase(n.slice(5))), r[n]);
            p._data(a, "parsedAttrs", !0);
          }
          return r;
        }
        return "object" == typeof e
          ? this.each(function () {
              p.data(this, e);
            })
          : arguments.length > 1
          ? this.each(function () {
              p.data(this, e, t);
            })
          : a
          ? B(a, e, p.data(a, e))
          : void 0;
      },
      removeData: function (e) {
        return this.each(function () {
          p.removeData(this, e);
        });
      },
    }),
    p.extend({
      queue: function (e, t, i) {
        var n;
        return e ? ((n = p._data(e, (t = (t || "fx") + "queue"))), i && (!n || p.isArray(i) ? (n = p._data(e, t, p.makeArray(i))) : n.push(i)), n || []) : void 0;
      },
      dequeue: function (e, t) {
        var i = p.queue(e, (t = t || "fx")),
          n = i.length,
          r = i.shift(),
          a = p._queueHooks(e, t);
        "inprogress" === r && ((r = i.shift()), n--),
          r &&
            ("fx" === t && i.unshift("inprogress"),
            delete a.stop,
            r.call(
              e,
              function () {
                p.dequeue(e, t);
              },
              a
            )),
          !n && a && a.empty.fire();
      },
      _queueHooks: function (e, t) {
        var i = t + "queueHooks";
        return (
          p._data(e, i) ||
          p._data(e, i, {
            empty: p.Callbacks("once memory").add(function () {
              p._removeData(e, t + "queue"), p._removeData(e, i);
            }),
          })
        );
      },
    }),
    p.fn.extend({
      queue: function (e, t) {
        var i = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), i--),
          arguments.length < i
            ? p.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var i = p.queue(this, e, t);
                p._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && p.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          p.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var i,
          n = 1,
          r = p.Deferred(),
          a = this,
          s = this.length,
          o = function () {
            --n || r.resolveWith(a, [a]);
          };
        for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; s--; ) (i = p._data(a[s], e + "queueHooks")) && i.empty && (n++, i.empty.add(o));
        return o(), r.promise(t);
      },
    });
  var X = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    j = ["Top", "Right", "Bottom", "Left"],
    Y = function (e, t) {
      return "none" === p.css((e = t || e), "display") || !p.contains(e.ownerDocument, e);
    },
    q = (p.access = function (e, t, i, n, r, a, s) {
      var o = 0,
        l = e.length,
        d = null == i;
      if ("object" === p.type(i)) for (o in ((r = !0), i)) p.access(e, t, o, i[o], !0, a, s);
      else if (
        void 0 !== n &&
        ((r = !0),
        p.isFunction(n) || (s = !0),
        d &&
          (s
            ? (t.call(e, n), (t = null))
            : ((d = t),
              (t = function (e, t, i) {
                return d.call(p(e), i);
              }))),
        t)
      )
        for (; l > o; o++) t(e[o], i, s ? n : n.call(e[o], o, t(e[o], i)));
      return r ? e : d ? t.call(e) : l ? t(e[0], i) : a;
    }),
    G = /^(?:checkbox|radio)$/i;
  !(function () {
    var e = S.createElement("input"),
      t = S.createElement("div"),
      i = S.createDocumentFragment();
    if (
      ((t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (u.leadingWhitespace = 3 === t.firstChild.nodeType),
      (u.tbody = !t.getElementsByTagName("tbody").length),
      (u.htmlSerialize = !!t.getElementsByTagName("link").length),
      (u.html5Clone = "<:nav></:nav>" !== S.createElement("nav").cloneNode(!0).outerHTML),
      (e.type = "checkbox"),
      (e.checked = !0),
      i.appendChild(e),
      (u.appendChecked = e.checked),
      (t.innerHTML = "<textarea>x</textarea>"),
      (u.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
      i.appendChild(t),
      (t.innerHTML = "<input type='radio' checked='checked' name='t'/>"),
      (u.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (u.noCloneEvent = !0),
      t.attachEvent &&
        (t.attachEvent("onclick", function () {
          u.noCloneEvent = !1;
        }),
        t.cloneNode(!0).click()),
      null == u.deleteExpando)
    ) {
      u.deleteExpando = !0;
      try {
        delete t.test;
      } catch (n) {
        u.deleteExpando = !1;
      }
    }
  })(),
    (function () {
      var t,
        i,
        n = S.createElement("div");
      for (t in { submit: !0, change: !0, focusin: !0 }) (u[t + "Bubbles"] = (i = "on" + t) in e) || (n.setAttribute(i, "t"), (u[t + "Bubbles"] = !1 === n.attributes[i].expando));
      n = null;
    })();
  var W = /^(?:input|select|textarea)$/i,
    V = /^key/,
    U = /^(?:mouse|pointer|contextmenu)|click/,
    K = /^(?:focusinfocus|focusoutblur)$/,
    Z = /^([^.]*)(?:\.(.+)|)$/;
  function Q() {
    return !0;
  }
  function J() {
    return !1;
  }
  function ee() {
    try {
      return S.activeElement;
    } catch (e) {}
  }
  function te(e) {
    var t = ie.split("|"),
      i = e.createDocumentFragment();
    if (i.createElement) for (; t.length; ) i.createElement(t.pop());
    return i;
  }
  (p.event = {
    global: {},
    add: function (e, t, i, n, r) {
      var a,
        s,
        o,
        l,
        d,
        u,
        c,
        h,
        f,
        m,
        v,
        g = p._data(e);
      if (g) {
        for (
          i.handler && ((i = (l = i).handler), (r = l.selector)),
            i.guid || (i.guid = p.guid++),
            (s = g.events) || (s = g.events = {}),
            (u = g.handle) ||
              ((u = g.handle =
                function (e) {
                  return typeof p === I || (e && p.event.triggered === e.type) ? void 0 : p.event.dispatch.apply(u.elem, arguments);
                }).elem = e),
            o = (t = (t || "").match(z) || [""]).length;
          o--;

        )
          (f = v = (a = Z.exec(t[o]) || [])[1]), (m = (a[2] || "").split(".").sort()), f && ((d = p.event.special[f] || {}), (d = p.event.special[(f = (r ? d.delegateType : d.bindType) || f)] || {}), (c = p.extend({ type: f, origType: v, data: n, handler: i, guid: i.guid, selector: r, needsContext: r && p.expr.match.needsContext.test(r), namespace: m.join(".") }, l)), (h = s[f]) || (((h = s[f] = []).delegateCount = 0), (d.setup && !1 !== d.setup.call(e, n, m, u)) || (e.addEventListener ? e.addEventListener(f, u, !1) : e.attachEvent && e.attachEvent("on" + f, u))), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = i.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), (p.event.global[f] = !0));
        e = null;
      }
    },
    remove: function (e, t, i, n, r) {
      var a,
        s,
        o,
        l,
        d,
        u,
        c,
        h,
        f,
        m,
        v,
        g = p.hasData(e) && p._data(e);
      if (g && (u = g.events)) {
        for (d = (t = (t || "").match(z) || [""]).length; d--; )
          if (((f = v = (o = Z.exec(t[d]) || [])[1]), (m = (o[2] || "").split(".").sort()), f)) {
            for (c = p.event.special[f] || {}, h = u[(f = (n ? c.delegateType : c.bindType) || f)] || [], o = o[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = a = h.length; a--; ) (s = h[a]), (!r && v !== s.origType) || (i && i.guid !== s.guid) || (o && !o.test(s.namespace)) || (n && n !== s.selector && ("**" !== n || !s.selector)) || (h.splice(a, 1), s.selector && h.delegateCount--, c.remove && c.remove.call(e, s));
            l && !h.length && ((c.teardown && !1 !== c.teardown.call(e, m, g.handle)) || p.removeEvent(e, f, g.handle), delete u[f]);
          } else for (f in u) p.event.remove(e, f + t[d], i, n, !0);
        p.isEmptyObject(u) && (delete g.handle, p._removeData(e, "events"));
      }
    },
    trigger: function (t, i, n, r) {
      var a,
        s,
        o,
        l,
        u,
        c,
        h,
        f = [n || S],
        m = d.call(t, "type") ? t.type : t,
        v = d.call(t, "namespace") ? t.namespace.split(".") : [];
      if (((o = c = n = n || S), 3 !== n.nodeType && 8 !== n.nodeType && !K.test(m + p.event.triggered) && (m.indexOf(".") >= 0 && ((v = m.split(".")), (m = v.shift()), v.sort()), (s = m.indexOf(":") < 0 && "on" + m), ((t = t[p.expando] ? t : new p.Event(m, "object" == typeof t && t)).isTrigger = r ? 2 : 3), (t.namespace = v.join(".")), (t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null), (t.result = void 0), t.target || (t.target = n), (i = null == i ? [t] : p.makeArray(i, [t])), (u = p.event.special[m] || {}), r || !u.trigger || !1 !== u.trigger.apply(n, i)))) {
        if (!r && !u.noBubble && !p.isWindow(n)) {
          for (K.test((l = u.delegateType || m) + m) || (o = o.parentNode); o; o = o.parentNode) f.push(o), (c = o);
          c === (n.ownerDocument || S) && f.push(c.defaultView || c.parentWindow || e);
        }
        for (h = 0; (o = f[h++]) && !t.isPropagationStopped(); ) (t.type = h > 1 ? l : u.bindType || m), (a = (p._data(o, "events") || {})[t.type] && p._data(o, "handle")) && a.apply(o, i), (a = s && o[s]) && a.apply && p.acceptData(o) && ((t.result = a.apply(o, i)), !1 === t.result && t.preventDefault());
        if (((t.type = m), !r && !t.isDefaultPrevented() && (!u._default || !1 === u._default.apply(f.pop(), i)) && p.acceptData(n) && s && n[m] && !p.isWindow(n))) {
          (c = n[s]) && (n[s] = null), (p.event.triggered = m);
          try {
            n[m]();
          } catch (g) {}
          (p.event.triggered = void 0), c && (n[s] = c);
        }
        return t.result;
      }
    },
    dispatch: function (e) {
      e = p.event.fix(e);
      var t,
        i,
        r,
        a,
        s,
        o = [],
        l = n.call(arguments),
        d = (p._data(this, "events") || {})[e.type] || [],
        u = p.event.special[e.type] || {};
      if (((l[0] = e), (e.delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, e))) {
        for (o = p.event.handlers.call(this, e, d), t = 0; (a = o[t++]) && !e.isPropagationStopped(); ) for (e.currentTarget = a.elem, s = 0; (r = a.handlers[s++]) && !e.isImmediatePropagationStopped(); ) (!e.namespace_re || e.namespace_re.test(r.namespace)) && ((e.handleObj = r), (e.data = r.data), void 0 !== (i = ((p.event.special[r.origType] || {}).handle || r.handler).apply(a.elem, l)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, t) {
      var i,
        n,
        r,
        a,
        s = [],
        o = t.delegateCount,
        l = e.target;
      if (o && l.nodeType && (!e.button || "click" !== e.type))
        for (; l != this; l = l.parentNode || this)
          if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
            for (r = [], a = 0; o > a; a++) void 0 === r[(i = (n = t[a]).selector + " ")] && (r[i] = n.needsContext ? p(i, this).index(l) >= 0 : p.find(i, this, null, [l]).length), r[i] && r.push(n);
            r.length && s.push({ elem: l, handlers: r });
          }
      return o < t.length && s.push({ elem: this, handlers: t.slice(o) }), s;
    },
    fix: function (e) {
      if (e[p.expando]) return e;
      var t,
        i,
        n,
        r = e.type,
        a = e,
        s = this.fixHooks[r];
      for (s || (this.fixHooks[r] = s = U.test(r) ? this.mouseHooks : V.test(r) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, e = new p.Event(a), t = n.length; t--; ) e[(i = n[t])] = a[i];
      return e.target || (e.target = a.srcElement || S), 3 === e.target.nodeType && (e.target = e.target.parentNode), (e.metaKey = !!e.metaKey), s.filter ? s.filter(e, a) : e;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
      },
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function (e, t) {
        var i,
          n,
          r,
          a = t.button,
          s = t.fromElement;
        return null == e.pageX && null != t.clientX && ((i = (n = e.target.ownerDocument || S).body), (e.pageX = t.clientX + (((r = n.documentElement) && r.scrollLeft) || (i && i.scrollLeft) || 0) - ((r && r.clientLeft) || (i && i.clientLeft) || 0)), (e.pageY = t.clientY + ((r && r.scrollTop) || (i && i.scrollTop) || 0) - ((r && r.clientTop) || (i && i.clientTop) || 0))), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e;
      },
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== ee() && this.focus)
            try {
              return this.focus(), !1;
            } catch (e) {}
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === ee() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return p.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0;
        },
        _default: function (e) {
          return p.nodeName(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        },
      },
    },
    simulate: function (e, t, i, n) {
      var r = p.extend(new p.Event(), i, { type: e, isSimulated: !0, originalEvent: {} });
      n ? p.event.trigger(r, null, t) : p.event.dispatch.call(t, r), r.isDefaultPrevented() && i.preventDefault();
    },
  }),
    (p.removeEvent = S.removeEventListener
      ? function (e, t, i) {
          e.removeEventListener && e.removeEventListener(t, i, !1);
        }
      : function (e, t, i) {
          var n = "on" + t;
          e.detachEvent && (typeof e[n] === I && (e[n] = null), e.detachEvent(n, i));
        }),
    (p.Event = function (e, t) {
      return this instanceof p.Event ? (e && e.type ? ((this.originalEvent = e), (this.type = e.type), (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Q : J)) : (this.type = e), t && p.extend(this, t), (this.timeStamp = (e && e.timeStamp) || p.now()), void (this[p.expando] = !0)) : new p.Event(e, t);
    }),
    (p.Event.prototype = {
      isDefaultPrevented: J,
      isPropagationStopped: J,
      isImmediatePropagationStopped: J,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Q), e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Q), e && (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Q), e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation();
      },
    }),
    p.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
      p.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function (e) {
          var i,
            n = this,
            r = e.relatedTarget,
            a = e.handleObj;
          return (!r || (r !== n && !p.contains(n, r))) && ((e.type = a.origType), (i = a.handler.apply(this, arguments)), (e.type = t)), i;
        },
      };
    }),
    u.submitBubbles ||
      (p.event.special.submit = {
        setup: function () {
          return (
            !p.nodeName(this, "form") &&
            void p.event.add(this, "click._submit keypress._submit", function (e) {
              var t = e.target,
                i = p.nodeName(t, "input") || p.nodeName(t, "button") ? t.form : void 0;
              i &&
                !p._data(i, "submitBubbles") &&
                (p.event.add(i, "submit._submit", function (e) {
                  e._submit_bubble = !0;
                }),
                p._data(i, "submitBubbles", !0));
            })
          );
        },
        postDispatch: function (e) {
          e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && p.event.simulate("submit", this.parentNode, e, !0));
        },
        teardown: function () {
          return !p.nodeName(this, "form") && void p.event.remove(this, "._submit");
        },
      }),
    u.changeBubbles ||
      (p.event.special.change = {
        setup: function () {
          return W.test(this.nodeName)
            ? (("checkbox" === this.type || "radio" === this.type) &&
                (p.event.add(this, "propertychange._change", function (e) {
                  "checked" === e.originalEvent.propertyName && (this._just_changed = !0);
                }),
                p.event.add(this, "click._change", function (e) {
                  this._just_changed && !e.isTrigger && (this._just_changed = !1), p.event.simulate("change", this, e, !0);
                })),
              !1)
            : void p.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                W.test(t.nodeName) &&
                  !p._data(t, "changeBubbles") &&
                  (p.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || p.event.simulate("change", this.parentNode, e, !0);
                  }),
                  p._data(t, "changeBubbles", !0));
              });
        },
        handle: function (e) {
          var t = e.target;
          return this !== t || e.isSimulated || e.isTrigger || ("radio" !== t.type && "checkbox" !== t.type) ? e.handleObj.handler.apply(this, arguments) : void 0;
        },
        teardown: function () {
          return p.event.remove(this, "._change"), !W.test(this.nodeName);
        },
      }),
    u.focusinBubbles ||
      p.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var i = function (e) {
          p.event.simulate(t, e.target, p.event.fix(e), !0);
        };
        p.event.special[t] = {
          setup: function () {
            var n = this.ownerDocument || this,
              r = p._data(n, t);
            r || n.addEventListener(e, i, !0), p._data(n, t, (r || 0) + 1);
          },
          teardown: function () {
            var n = this.ownerDocument || this,
              r = p._data(n, t) - 1;
            r ? p._data(n, t, r) : (n.removeEventListener(e, i, !0), p._removeData(n, t));
          },
        };
      }),
    p.fn.extend({
      on: function (e, t, i, n, r) {
        var a, s;
        if ("object" == typeof e) {
          for (a in ("string" != typeof t && ((i = i || t), (t = void 0)), e)) this.on(a, t, i, e[a], r);
          return this;
        }
        if ((null == i && null == n ? ((n = t), (i = t = void 0)) : null == n && ("string" == typeof t ? ((n = i), (i = void 0)) : ((n = i), (i = t), (t = void 0))), !1 === n)) n = J;
        else if (!n) return this;
        return (
          1 === r &&
            ((s = n),
            ((n = function (e) {
              return p().off(e), s.apply(this, arguments);
            }).guid = s.guid || (s.guid = p.guid++))),
          this.each(function () {
            p.event.add(this, e, n, i, t);
          })
        );
      },
      one: function (e, t, i, n) {
        return this.on(e, t, i, n, 1);
      },
      off: function (e, t, i) {
        var n, r;
        if (e && e.preventDefault && e.handleObj) return (n = e.handleObj), p(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
        if ("object" == typeof e) {
          for (r in e) this.off(r, t, e[r]);
          return this;
        }
        return (
          (!1 === t || "function" == typeof t) && ((i = t), (t = void 0)),
          !1 === i && (i = J),
          this.each(function () {
            p.event.remove(this, e, i, t);
          })
        );
      },
      trigger: function (e, t) {
        return this.each(function () {
          p.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var i = this[0];
        return i ? p.event.trigger(e, t, i, !0) : void 0;
      },
    });
  var ie = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    ne = / jQuery\d+="(?:null|\d+)"/g,
    re = new RegExp("<(?:" + ie + ")[\\s/>]", "i"),
    ae = /^\s+/,
    se = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    oe = /<([\w:]+)/,
    le = /<tbody/i,
    de = /<|&#?\w+;/,
    ue = /<(?:script|style|link)/i,
    ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
    pe = /^$|\/(?:java|ecma)script/i,
    he = /^true\/(.*)/,
    fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    me = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: u.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
    ve = te(S).appendChild(S.createElement("div"));
  function ge(e, t) {
    var i,
      n,
      r = 0,
      a = typeof e.getElementsByTagName !== I ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== I ? e.querySelectorAll(t || "*") : void 0;
    if (!a) for (a = [], i = e.childNodes || e; null != (n = i[r]); r++) !t || p.nodeName(n, t) ? a.push(n) : p.merge(a, ge(n, t));
    return void 0 === t || (t && p.nodeName(e, t)) ? p.merge([e], a) : a;
  }
  function ye(e) {
    G.test(e.type) && (e.defaultChecked = e.checked);
  }
  function we(e, t) {
    return p.nodeName(e, "table") && p.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
  }
  function be(e) {
    return (e.type = (null !== p.find.attr(e, "type")) + "/" + e.type), e;
  }
  function xe(e) {
    var t = he.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function _e(e, t) {
    for (var i, n = 0; null != (i = e[n]); n++) p._data(i, "globalEval", !t || p._data(t[n], "globalEval"));
  }
  function Te(e, t) {
    if (1 === t.nodeType && p.hasData(e)) {
      var i,
        n,
        r,
        a = p._data(e),
        s = p._data(t, a),
        o = a.events;
      if (o) for (i in (delete s.handle, (s.events = {}), o)) for (n = 0, r = o[i].length; r > n; n++) p.event.add(t, i, o[i][n]);
      s.data && (s.data = p.extend({}, s.data));
    }
  }
  function Se(e, t) {
    var i, n, r;
    if (1 === t.nodeType) {
      if (((i = t.nodeName.toLowerCase()), !u.noCloneEvent && t[p.expando])) {
        for (n in (r = p._data(t)).events) p.removeEvent(t, n, r.handle);
        t.removeAttribute(p.expando);
      }
      "script" === i && t.text !== e.text ? ((be(t).text = e.text), xe(t)) : "object" === i ? (t.parentNode && (t.outerHTML = e.outerHTML), u.html5Clone && e.innerHTML && !p.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === i && G.test(e.type) ? ((t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value)) : "option" === i ? (t.defaultSelected = t.selected = e.defaultSelected) : ("input" === i || "textarea" === i) && (t.defaultValue = e.defaultValue);
    }
  }
  (me.optgroup = me.option),
    (me.tbody = me.tfoot = me.colgroup = me.caption = me.thead),
    (me.th = me.td),
    p.extend({
      clone: function (e, t, i) {
        var n,
          r,
          a,
          s,
          o,
          l = p.contains(e.ownerDocument, e);
        if ((u.html5Clone || p.isXMLDoc(e) || !re.test("<" + e.nodeName + ">") ? (a = e.cloneNode(!0)) : ((ve.innerHTML = e.outerHTML), ve.removeChild((a = ve.firstChild))), !((u.noCloneEvent && u.noCloneChecked) || (1 !== e.nodeType && 11 !== e.nodeType) || p.isXMLDoc(e)))) for (n = ge(a), o = ge(e), s = 0; null != (r = o[s]); ++s) n[s] && Se(r, n[s]);
        if (t)
          if (i) for (o = o || ge(e), n = n || ge(a), s = 0; null != (r = o[s]); s++) Te(r, n[s]);
          else Te(e, a);
        return (n = ge(a, "script")).length > 0 && _e(n, !l && ge(e, "script")), (n = o = r = null), a;
      },
      buildFragment: function (e, t, i, n) {
        for (var r, a, s, o, l, d, c, h = e.length, f = te(t), m = [], v = 0; h > v; v++)
          if ((a = e[v]) || 0 === a)
            if ("object" === p.type(a)) p.merge(m, a.nodeType ? [a] : a);
            else if (de.test(a)) {
              for (o = o || f.appendChild(t.createElement("div")), l = (oe.exec(a) || ["", ""])[1].toLowerCase(), o.innerHTML = (c = me[l] || me._default)[1] + a.replace(se, "<$1></$2>") + c[2], r = c[0]; r--; ) o = o.lastChild;
              if ((!u.leadingWhitespace && ae.test(a) && m.push(t.createTextNode(ae.exec(a)[0])), !u.tbody)) for (r = (a = "table" !== l || le.test(a) ? ("<table>" !== c[1] || le.test(a) ? 0 : o) : o.firstChild) && a.childNodes.length; r--; ) p.nodeName((d = a.childNodes[r]), "tbody") && !d.childNodes.length && a.removeChild(d);
              for (p.merge(m, o.childNodes), o.textContent = ""; o.firstChild; ) o.removeChild(o.firstChild);
              o = f.lastChild;
            } else m.push(t.createTextNode(a));
        for (o && f.removeChild(o), u.appendChecked || p.grep(ge(m, "input"), ye), v = 0; (a = m[v++]); ) if ((!n || -1 === p.inArray(a, n)) && ((s = p.contains(a.ownerDocument, a)), (o = ge(f.appendChild(a), "script")), s && _e(o), i)) for (r = 0; (a = o[r++]); ) pe.test(a.type || "") && i.push(a);
        return (o = null), f;
      },
      cleanData: function (e, t) {
        for (var n, r, a, s, o = 0, l = p.expando, d = p.cache, c = u.deleteExpando, h = p.event.special; null != (n = e[o]); o++)
          if ((t || p.acceptData(n)) && (s = (a = n[l]) && d[a])) {
            if (s.events) for (r in s.events) h[r] ? p.event.remove(n, r) : p.removeEvent(n, r, s.handle);
            d[a] && (delete d[a], c ? delete n[l] : typeof n.removeAttribute !== I ? n.removeAttribute(l) : (n[l] = null), i.push(a));
          }
      },
    }),
    p.fn.extend({
      text: function (e) {
        return q(
          this,
          function (e) {
            return void 0 === e ? p.text(this) : this.empty().append(((this[0] && this[0].ownerDocument) || S).createTextNode(e));
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (e) {
          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || we(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = we(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      remove: function (e, t) {
        for (var i, n = e ? p.filter(e, this) : this, r = 0; null != (i = n[r]); r++) t || 1 !== i.nodeType || p.cleanData(ge(i)), i.parentNode && (t && p.contains(i.ownerDocument, i) && _e(ge(i, "script")), i.parentNode.removeChild(i));
        return this;
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) {
          for (1 === e.nodeType && p.cleanData(ge(e, !1)); e.firstChild; ) e.removeChild(e.firstChild);
          e.options && p.nodeName(e, "select") && (e.options.length = 0);
        }
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return p.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return q(
          this,
          function (e) {
            var t = this[0] || {},
              i = 0,
              n = this.length;
            if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(ne, "") : void 0;
            if (!("string" != typeof e || ue.test(e) || (!u.htmlSerialize && re.test(e)) || (!u.leadingWhitespace && ae.test(e)) || me[(oe.exec(e) || ["", ""])[1].toLowerCase()])) {
              e = e.replace(se, "<$1></$2>");
              try {
                for (; n > i; i++) 1 === (t = this[i] || {}).nodeType && (p.cleanData(ge(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (r) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = arguments[0];
        return (
          this.domManip(arguments, function (t) {
            (e = this.parentNode), p.cleanData(ge(this)), e && e.replaceChild(t, this);
          }),
          e && (e.length || e.nodeType) ? this : this.remove()
        );
      },
      detach: function (e) {
        return this.remove(e, !0);
      },
      domManip: function (e, t) {
        e = r.apply([], e);
        var i,
          n,
          a,
          s,
          o,
          l,
          d = 0,
          c = this.length,
          h = this,
          f = c - 1,
          m = e[0],
          v = p.isFunction(m);
        if (v || (c > 1 && "string" == typeof m && !u.checkClone && ce.test(m)))
          return this.each(function (i) {
            var n = h.eq(i);
            v && (e[0] = m.call(this, i, n.html())), n.domManip(e, t);
          });
        if (c && ((i = (l = p.buildFragment(e, this[0].ownerDocument, !1, this)).firstChild), 1 === l.childNodes.length && (l = i), i)) {
          for (a = (s = p.map(ge(l, "script"), be)).length; c > d; d++) (n = l), d !== f && ((n = p.clone(n, !0, !0)), a && p.merge(s, ge(n, "script"))), t.call(this[d], n, d);
          if (a) for (o = s[s.length - 1].ownerDocument, p.map(s, xe), d = 0; a > d; d++) pe.test((n = s[d]).type || "") && !p._data(n, "globalEval") && p.contains(o, n) && (n.src ? p._evalUrl && p._evalUrl(n.src) : p.globalEval((n.text || n.textContent || n.innerHTML || "").replace(fe, "")));
          l = i = null;
        }
        return this;
      },
    }),
    p.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
      p.fn[e] = function (e) {
        for (var i, n = 0, r = [], s = p(e), o = s.length - 1; o >= n; n++) (i = n === o ? this : this.clone(!0)), p(s[n])[t](i), a.apply(r, i.get());
        return this.pushStack(r);
      };
    });
  var Ce,
    Ee = {};
  function Me(t, i) {
    var n,
      r = p(i.createElement(t)).appendTo(i.body),
      a = e.getDefaultComputedStyle && (n = e.getDefaultComputedStyle(r[0])) ? n.display : p.css(r[0], "display");
    return r.detach(), a;
  }
  function Pe(e) {
    var t = S,
      i = Ee[e];
    return i || (("none" !== (i = Me(e, t)) && i) || ((t = ((Ce = (Ce || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Ce[0].contentDocument).document).write(), t.close(), (i = Me(e, t)), Ce.detach()), (Ee[e] = i)), i;
  }
  !(function () {
    var e;
    u.shrinkWrapBlocks = function () {
      return null != e ? e : ((e = !1), (i = S.getElementsByTagName("body")[0]) && i.style ? ((t = S.createElement("div")), ((n = S.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"), i.appendChild(n).appendChild(t), typeof t.style.zoom !== I && ((t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"), (t.appendChild(S.createElement("div")).style.width = "5px"), (e = 3 !== t.offsetWidth)), i.removeChild(n), e) : void 0);
      var t, i, n;
    };
  })();
  var ke,
    ze,
    Ae = /^margin/,
    Oe = new RegExp("^(" + X + ")(?!px)[a-z%]+$", "i"),
    De = /^(top|right|bottom|left)$/;
  function Le(e, t) {
    return {
      get: function () {
        var i = e();
        if (null != i) return i ? void delete this.get : (this.get = t).apply(this, arguments);
      },
    };
  }
  e.getComputedStyle
    ? ((ke = function (t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null);
      }),
      (ze = function (e, t, i) {
        var n,
          r,
          a,
          s,
          o = e.style;
        return (s = (i = i || ke(e)) ? i.getPropertyValue(t) || i[t] : void 0), i && ("" !== s || p.contains(e.ownerDocument, e) || (s = p.style(e, t)), Oe.test(s) && Ae.test(t) && ((n = o.width), (r = o.minWidth), (a = o.maxWidth), (o.minWidth = o.maxWidth = o.width = s), (s = i.width), (o.width = n), (o.minWidth = r), (o.maxWidth = a))), void 0 === s ? s : s + "";
      }))
    : S.documentElement.currentStyle &&
      ((ke = function (e) {
        return e.currentStyle;
      }),
      (ze = function (e, t, i) {
        var n,
          r,
          a,
          s,
          o = e.style;
        return null == (s = (i = i || ke(e)) ? i[t] : void 0) && o && o[t] && (s = o[t]), Oe.test(s) && !De.test(t) && ((n = o.left), (a = (r = e.runtimeStyle) && r.left) && (r.left = e.currentStyle.left), (o.left = "fontSize" === t ? "1em" : s), (s = o.pixelLeft + "px"), (o.left = n), a && (r.left = a)), void 0 === s ? s : s + "" || "auto";
      })),
    (function () {
      var t, i, n, r, a, s, o;
      if ((((t = S.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"), (i = (n = t.getElementsByTagName("a")[0]) && n.style))) {
        function l() {
          var t, i, n, l;
          (i = S.getElementsByTagName("body")[0]) && i.style && ((t = S.createElement("div")), ((n = S.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"), i.appendChild(n).appendChild(t), (t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"), (r = a = !1), (o = !0), e.getComputedStyle && ((r = "1%" !== (e.getComputedStyle(t, null) || {}).top), (a = "4px" === (e.getComputedStyle(t, null) || { width: "4px" }).width), ((l = t.appendChild(S.createElement("div"))).style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"), (l.style.marginRight = l.style.width = "0"), (t.style.width = "1px"), (o = !parseFloat((e.getComputedStyle(l, null) || {}).marginRight)), t.removeChild(l)), (t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"), ((l = t.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none"), (s = 0 === l[0].offsetHeight) && ((l[0].style.display = ""), (l[1].style.display = "none"), (s = 0 === l[0].offsetHeight)), i.removeChild(n));
        }
        (i.cssText = "float:left;opacity:.5"),
          (u.opacity = "0.5" === i.opacity),
          (u.cssFloat = !!i.cssFloat),
          (t.style.backgroundClip = "content-box"),
          (t.cloneNode(!0).style.backgroundClip = ""),
          (u.clearCloneStyle = "content-box" === t.style.backgroundClip),
          (u.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing),
          p.extend(u, {
            reliableHiddenOffsets: function () {
              return null == s && l(), s;
            },
            boxSizingReliable: function () {
              return null == a && l(), a;
            },
            pixelPosition: function () {
              return null == r && l(), r;
            },
            reliableMarginRight: function () {
              return null == o && l(), o;
            },
          });
      }
    })(),
    (p.swap = function (e, t, i, n) {
      var r,
        a,
        s = {};
      for (a in t) (s[a] = e.style[a]), (e.style[a] = t[a]);
      for (a in ((r = i.apply(e, n || [])), t)) e.style[a] = s[a];
      return r;
    });
  var Ie = /alpha\([^)]*\)/i,
    Ne = /opacity\s*=\s*([^)]*)/,
    Re = /^(none|table(?!-c[ea]).+)/,
    Be = new RegExp("^(" + X + ")(.*)$", "i"),
    Fe = new RegExp("^([+-])=(" + X + ")", "i"),
    $e = { position: "absolute", visibility: "hidden", display: "block" },
    He = { letterSpacing: "0", fontWeight: "400" },
    Xe = ["Webkit", "O", "Moz", "ms"];
  function je(e, t) {
    if (t in e) return t;
    for (var i = t.charAt(0).toUpperCase() + t.slice(1), n = t, r = Xe.length; r--; ) if ((t = Xe[r] + i) in e) return t;
    return n;
  }
  function Ye(e, t) {
    for (var i, n, r, a = [], s = 0, o = e.length; o > s; s++) (n = e[s]).style && ((a[s] = p._data(n, "olddisplay")), (i = n.style.display), t ? (a[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && Y(n) && (a[s] = p._data(n, "olddisplay", Pe(n.nodeName)))) : ((r = Y(n)), ((i && "none" !== i) || !r) && p._data(n, "olddisplay", r ? i : p.css(n, "display"))));
    for (s = 0; o > s; s++) (n = e[s]).style && ((t && "none" !== n.style.display && "" !== n.style.display) || (n.style.display = t ? a[s] || "" : "none"));
    return e;
  }
  function qe(e, t, i) {
    var n = Be.exec(t);
    return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t;
  }
  function Ge(e, t, i, n, r) {
    for (var a = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > a; a += 2) "margin" === i && (s += p.css(e, i + j[a], !0, r)), n ? ("content" === i && (s -= p.css(e, "padding" + j[a], !0, r)), "margin" !== i && (s -= p.css(e, "border" + j[a] + "Width", !0, r))) : ((s += p.css(e, "padding" + j[a], !0, r)), "padding" !== i && (s += p.css(e, "border" + j[a] + "Width", !0, r)));
    return s;
  }
  function We(e, t, i) {
    var n = !0,
      r = "width" === t ? e.offsetWidth : e.offsetHeight,
      a = ke(e),
      s = u.boxSizing && "border-box" === p.css(e, "boxSizing", !1, a);
    if (0 >= r || null == r) {
      if (((0 > (r = ze(e, t, a)) || null == r) && (r = e.style[t]), Oe.test(r))) return r;
      (n = s && (u.boxSizingReliable() || r === e.style[t])), (r = parseFloat(r) || 0);
    }
    return r + Ge(e, t, i || (s ? "border" : "content"), n, a) + "px";
  }
  function Ve(e, t, i, n, r) {
    return new Ve.prototype.init(e, t, i, n, r);
  }
  p.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var i = ze(e, "opacity");
            return "" === i ? "1" : i;
          }
        },
      },
    },
    cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
    cssProps: { float: u.cssFloat ? "cssFloat" : "styleFloat" },
    style: function (e, t, i, n) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r,
          a,
          s,
          o = p.camelCase(t),
          l = e.style;
        if (((t = p.cssProps[o] || (p.cssProps[o] = je(l, o))), (s = p.cssHooks[t] || p.cssHooks[o]), void 0 === i)) return s && "get" in s && void 0 !== (r = s.get(e, !1, n)) ? r : l[t];
        if (("string" == (a = typeof i) && (r = Fe.exec(i)) && ((i = (r[1] + 1) * r[2] + parseFloat(p.css(e, t))), (a = "number")), null != i && i == i && ("number" !== a || p.cssNumber[o] || (i += "px"), u.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), !s || !("set" in s) || void 0 !== (i = s.set(e, i, n)))))
          try {
            l[t] = i;
          } catch (d) {}
      }
    },
    css: function (e, t, i, n) {
      var r,
        a,
        s,
        o = p.camelCase(t);
      return (t = p.cssProps[o] || (p.cssProps[o] = je(e.style, o))), (s = p.cssHooks[t] || p.cssHooks[o]) && "get" in s && (a = s.get(e, !0, i)), void 0 === a && (a = ze(e, t, n)), "normal" === a && t in He && (a = He[t]), "" === i || i ? ((r = parseFloat(a)), !0 === i || p.isNumeric(r) ? r || 0 : a) : a;
    },
  }),
    p.each(["height", "width"], function (e, t) {
      p.cssHooks[t] = {
        get: function (e, i, n) {
          return i
            ? Re.test(p.css(e, "display")) && 0 === e.offsetWidth
              ? p.swap(e, $e, function () {
                  return We(e, t, n);
                })
              : We(e, t, n)
            : void 0;
        },
        set: function (e, i, n) {
          var r = n && ke(e);
          return qe(0, i, n ? Ge(e, t, n, u.boxSizing && "border-box" === p.css(e, "boxSizing", !1, r), r) : 0);
        },
      };
    }),
    u.opacity ||
      (p.cssHooks.opacity = {
        get: function (e, t) {
          return Ne.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
        },
        set: function (e, t) {
          var i = e.style,
            n = e.currentStyle,
            r = p.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
            a = (n && n.filter) || i.filter || "";
          (i.zoom = 1), ((t >= 1 || "" === t) && "" === p.trim(a.replace(Ie, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === t || (n && !n.filter))) || (i.filter = Ie.test(a) ? a.replace(Ie, r) : a + " " + r);
        },
      }),
    (p.cssHooks.marginRight = Le(u.reliableMarginRight, function (e, t) {
      return t ? p.swap(e, { display: "inline-block" }, ze, [e, "marginRight"]) : void 0;
    })),
    p.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (p.cssHooks[e + t] = {
        expand: function (i) {
          for (var n = 0, r = {}, a = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[e + j[n] + t] = a[n] || a[n - 2] || a[0];
          return r;
        },
      }),
        Ae.test(e) || (p.cssHooks[e + t].set = qe);
    }),
    p.fn.extend({
      css: function (e, t) {
        return q(
          this,
          function (e, t, i) {
            var n,
              r,
              a = {},
              s = 0;
            if (p.isArray(t)) {
              for (n = ke(e), r = t.length; r > s; s++) a[t[s]] = p.css(e, t[s], !1, n);
              return a;
            }
            return void 0 !== i ? p.style(e, t, i) : p.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
      show: function () {
        return Ye(this, !0);
      },
      hide: function () {
        return Ye(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              Y(this) ? p(this).show() : p(this).hide();
            });
      },
    }),
    (p.Tween = Ve),
    ((Ve.prototype = {
      constructor: Ve,
      init: function (e, t, i, n, r, a) {
        (this.elem = e), (this.prop = i), (this.easing = r || "swing"), (this.options = t), (this.start = this.now = this.cur()), (this.end = n), (this.unit = a || (p.cssNumber[i] ? "" : "px"));
      },
      cur: function () {
        var e = Ve.propHooks[this.prop];
        return e && e.get ? e.get(this) : Ve.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          i = Ve.propHooks[this.prop];
        return (this.pos = t = this.options.duration ? p.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e), (this.now = (this.end - this.start) * t + this.start), this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Ve.propHooks._default.set(this), this;
      },
    }).init.prototype = Ve.prototype),
    ((Ve.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return null == e.elem[e.prop] || (e.elem.style && null != e.elem.style[e.prop]) ? ((t = p.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0) : e.elem[e.prop];
        },
        set: function (e) {
          p.fx.step[e.prop] ? p.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[p.cssProps[e.prop]] || p.cssHooks[e.prop]) ? p.style(e.elem, e.prop, e.now + e.unit) : (e.elem[e.prop] = e.now);
        },
      },
    }).scrollTop = Ve.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (p.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
    }),
    (p.fx = Ve.prototype.init),
    (p.fx.step = {});
  var Ue,
    Ke,
    Ze = /^(?:toggle|show|hide)$/,
    Qe = new RegExp("^(?:([+-])=|)(" + X + ")([a-z%]*)$", "i"),
    Je = /queueHooks$/,
    et = [
      function (e, t, i) {
        var n,
          r,
          a,
          s,
          o,
          l,
          d,
          c = this,
          h = {},
          f = e.style,
          m = e.nodeType && Y(e),
          v = p._data(e, "fxshow");
        for (n in (i.queue ||
          (null == (o = p._queueHooks(e, "fx")).unqueued &&
            ((o.unqueued = 0),
            (l = o.empty.fire),
            (o.empty.fire = function () {
              o.unqueued || l();
            })),
          o.unqueued++,
          c.always(function () {
            c.always(function () {
              o.unqueued--, p.queue(e, "fx").length || o.empty.fire();
            });
          })),
        1 === e.nodeType && ("height" in t || "width" in t) && ((i.overflow = [f.overflow, f.overflowX, f.overflowY]), "inline" === ("none" === (d = p.css(e, "display")) ? p._data(e, "olddisplay") || Pe(e.nodeName) : d) && "none" === p.css(e, "float") && (u.inlineBlockNeedsLayout && "inline" !== Pe(e.nodeName) ? (f.zoom = 1) : (f.display = "inline-block"))),
        i.overflow &&
          ((f.overflow = "hidden"),
          u.shrinkWrapBlocks() ||
            c.always(function () {
              (f.overflow = i.overflow[0]), (f.overflowX = i.overflow[1]), (f.overflowY = i.overflow[2]);
            })),
        t))
          if (Ze.exec((r = t[n]))) {
            if ((delete t[n], (a = a || "toggle" === r), r === (m ? "hide" : "show"))) {
              if ("show" !== r || !v || void 0 === v[n]) continue;
              m = !0;
            }
            h[n] = (v && v[n]) || p.style(e, n);
          } else d = void 0;
        if (p.isEmptyObject(h)) "inline" === ("none" === d ? Pe(e.nodeName) : d) && (f.display = d);
        else
          for (n in (v ? "hidden" in v && (m = v.hidden) : (v = p._data(e, "fxshow", {})),
          a && (v.hidden = !m),
          m
            ? p(e).show()
            : c.done(function () {
                p(e).hide();
              }),
          c.done(function () {
            var t;
            for (t in (p._removeData(e, "fxshow"), h)) p.style(e, t, h[t]);
          }),
          h))
            (s = rt(m ? v[n] : 0, n, c)), n in v || ((v[n] = s.start), m && ((s.end = s.start), (s.start = "width" === n || "height" === n ? 1 : 0)));
      },
    ],
    tt = {
      "*": [
        function (e, t) {
          var i = this.createTween(e, t),
            n = i.cur(),
            r = Qe.exec(t),
            a = (r && r[3]) || (p.cssNumber[e] ? "" : "px"),
            s = (p.cssNumber[e] || ("px" !== a && +n)) && Qe.exec(p.css(i.elem, e)),
            o = 1,
            l = 20;
          if (s && s[3] !== a) {
            (a = a || s[3]), (r = r || []), (s = +n || 1);
            do {
              p.style(i.elem, e, (s /= o = o || ".5") + a);
            } while (o !== (o = i.cur() / n) && 1 !== o && --l);
          }
          return r && ((s = i.start = +s || +n || 0), (i.unit = a), (i.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2])), i;
        },
      ],
    };
  function it() {
    return (
      setTimeout(function () {
        Ue = void 0;
      }),
      (Ue = p.now())
    );
  }
  function nt(e, t) {
    var i,
      n = { height: e },
      r = 0;
    for (t = t ? 1 : 0; 4 > r; r += 2 - t) n["margin" + (i = j[r])] = n["padding" + i] = e;
    return t && (n.opacity = n.width = e), n;
  }
  function rt(e, t, i) {
    for (var n, r = (tt[t] || []).concat(tt["*"]), a = 0, s = r.length; s > a; a++) if ((n = r[a].call(i, t, e))) return n;
  }
  function at(e, t, i) {
    var n,
      r,
      a = 0,
      s = et.length,
      o = p.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (r) return !1;
        for (var t = Ue || it(), i = Math.max(0, d.startTime + d.duration - t), n = 1 - (i / d.duration || 0), a = 0, s = d.tweens.length; s > a; a++) d.tweens[a].run(n);
        return o.notifyWith(e, [d, n, i]), 1 > n && s ? i : (o.resolveWith(e, [d]), !1);
      },
      d = o.promise({
        elem: e,
        props: p.extend({}, t),
        opts: p.extend(!0, { specialEasing: {} }, i),
        originalProperties: t,
        originalOptions: i,
        startTime: Ue || it(),
        duration: i.duration,
        tweens: [],
        createTween: function (t, i) {
          var n = p.Tween(e, d.opts, t, i, d.opts.specialEasing[t] || d.opts.easing);
          return d.tweens.push(n), n;
        },
        stop: function (t) {
          var i = 0,
            n = t ? d.tweens.length : 0;
          if (r) return this;
          for (r = !0; n > i; i++) d.tweens[i].run(1);
          return t ? o.resolveWith(e, [d, t]) : o.rejectWith(e, [d, t]), this;
        },
      }),
      u = d.props;
    for (
      (function (e, t) {
        var i, n, r, a, s;
        for (i in e)
          if (((r = t[(n = p.camelCase(i))]), p.isArray((a = e[i])) && ((r = a[1]), (a = e[i] = a[0])), i !== n && ((e[n] = a), delete e[i]), (s = p.cssHooks[n]) && ("expand" in s))) for (i in ((a = s.expand(a)), delete e[n], a)) (i in e) || ((e[i] = a[i]), (t[i] = r));
          else t[n] = r;
      })(u, d.opts.specialEasing);
      s > a;
      a++
    )
      if ((n = et[a].call(d, e, u, d.opts))) return n;
    return p.map(u, rt, d), p.isFunction(d.opts.start) && d.opts.start.call(e, d), p.fx.timer(p.extend(l, { elem: e, anim: d, queue: d.opts.queue })), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always);
  }
  (p.Animation = p.extend(at, {
    tweener: function (e, t) {
      p.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
      for (var i, n = 0, r = e.length; r > n; n++) (tt[(i = e[n])] = tt[i] || []), tt[i].unshift(t);
    },
    prefilter: function (e, t) {
      t ? et.unshift(e) : et.push(e);
    },
  })),
    (p.speed = function (e, t, i) {
      var n = e && "object" == typeof e ? p.extend({}, e) : { complete: i || (!i && t) || (p.isFunction(e) && e), duration: e, easing: (i && t) || (t && !p.isFunction(t) && t) };
      return (
        (n.duration = p.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in p.fx.speeds ? p.fx.speeds[n.duration] : p.fx.speeds._default),
        (null == n.queue || !0 === n.queue) && (n.queue = "fx"),
        (n.old = n.complete),
        (n.complete = function () {
          p.isFunction(n.old) && n.old.call(this), n.queue && p.dequeue(this, n.queue);
        }),
        n
      );
    }),
    p.fn.extend({
      fadeTo: function (e, t, i, n) {
        return this.filter(Y).css("opacity", 0).show().end().animate({ opacity: t }, e, i, n);
      },
      animate: function (e, t, i, n) {
        var r = p.isEmptyObject(e),
          a = p.speed(t, i, n),
          s = function () {
            var t = at(this, p.extend({}, e), a);
            (r || p._data(this, "finish")) && t.stop(!0);
          };
        return (s.finish = s), r || !1 === a.queue ? this.each(s) : this.queue(a.queue, s);
      },
      stop: function (e, t, i) {
        var n = function (e) {
          var t = e.stop;
          delete e.stop, t(i);
        };
        return (
          "string" != typeof e && ((i = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              r = null != e && e + "queueHooks",
              a = p.timers,
              s = p._data(this);
            if (r) s[r] && s[r].stop && n(s[r]);
            else for (r in s) s[r] && s[r].stop && Je.test(r) && n(s[r]);
            for (r = a.length; r--; ) a[r].elem !== this || (null != e && a[r].queue !== e) || (a[r].anim.stop(i), (t = !1), a.splice(r, 1));
            (t || !i) && p.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              i = p._data(this),
              n = i[e + "queue"],
              r = i[e + "queueHooks"],
              a = p.timers,
              s = n ? n.length : 0;
            for (i.finish = !0, p.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = a.length; t--; ) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
            for (t = 0; s > t; t++) n[t] && n[t].finish && n[t].finish.call(this);
            delete i.finish;
          })
        );
      },
    }),
    p.each(["toggle", "show", "hide"], function (e, t) {
      var i = p.fn[t];
      p.fn[t] = function (e, n, r) {
        return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(nt(t, !0), e, n, r);
      };
    }),
    p.each({ slideDown: nt("show"), slideUp: nt("hide"), slideToggle: nt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
      p.fn[e] = function (e, i, n) {
        return this.animate(t, e, i, n);
      };
    }),
    (p.timers = []),
    (p.fx.tick = function () {
      var e,
        t = p.timers,
        i = 0;
      for (Ue = p.now(); i < t.length; i++) (e = t[i])() || t[i] !== e || t.splice(i--, 1);
      t.length || p.fx.stop(), (Ue = void 0);
    }),
    (p.fx.timer = function (e) {
      p.timers.push(e), e() ? p.fx.start() : p.timers.pop();
    }),
    (p.fx.interval = 13),
    (p.fx.start = function () {
      Ke || (Ke = setInterval(p.fx.tick, p.fx.interval));
    }),
    (p.fx.stop = function () {
      clearInterval(Ke), (Ke = null);
    }),
    (p.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (p.fn.delay = function (e, t) {
      return (
        (e = (p.fx && p.fx.speeds[e]) || e),
        this.queue((t = t || "fx"), function (t, i) {
          var n = setTimeout(t, e);
          i.stop = function () {
            clearTimeout(n);
          };
        })
      );
    }),
    (function () {
      var e, t, i, n, r;
      (t = S.createElement("div")).setAttribute("className", "t"), (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"), (n = t.getElementsByTagName("a")[0]), (r = (i = S.createElement("select")).appendChild(S.createElement("option"))), (e = t.getElementsByTagName("input")[0]), (n.style.cssText = "top:1px"), (u.getSetAttribute = "t" !== t.className), (u.style = /top/.test(n.getAttribute("style"))), (u.hrefNormalized = "/a" === n.getAttribute("href")), (u.checkOn = !!e.value), (u.optSelected = r.selected), (u.enctype = !!S.createElement("form").enctype), (i.disabled = !0), (u.optDisabled = !r.disabled), (e = S.createElement("input")).setAttribute("value", ""), (u.input = "" === e.getAttribute("value")), (e.value = "t"), e.setAttribute("type", "radio"), (u.radioValue = "t" === e.value);
    })();
  var st = /\r/g;
  p.fn.extend({
    val: function (e) {
      var t,
        i,
        n,
        r = this[0];
      return arguments.length
        ? ((n = p.isFunction(e)),
          this.each(function (i) {
            var r;
            1 === this.nodeType &&
              (null == (r = n ? e.call(this, i, p(this).val()) : e)
                ? (r = "")
                : "number" == typeof r
                ? (r += "")
                : p.isArray(r) &&
                  (r = p.map(r, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value")) || (this.value = r));
          }))
        : r
        ? (t = p.valHooks[r.type] || p.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(r, "value"))
          ? i
          : "string" == typeof (i = r.value)
          ? i.replace(st, "")
          : null == i
          ? ""
          : i
        : void 0;
    },
  }),
    p.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = p.find.attr(e, "value");
            return null != t ? t : p.trim(p.text(e));
          },
        },
        select: {
          get: function (e) {
            for (var t, i, n = e.options, r = e.selectedIndex, a = "select-one" === e.type || 0 > r, s = a ? null : [], o = a ? r + 1 : n.length, l = 0 > r ? o : a ? r : 0; o > l; l++)
              if (!((!(i = n[l]).selected && l !== r) || (u.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || (i.parentNode.disabled && p.nodeName(i.parentNode, "optgroup")))) {
                if (((t = p(i).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            for (var i, n, r = e.options, a = p.makeArray(t), s = r.length; s--; )
              if (p.inArray(p.valHooks.option.get((n = r[s])), a) >= 0)
                try {
                  n.selected = i = !0;
                } catch (o) {}
              else n.selected = !1;
            return i || (e.selectedIndex = -1), r;
          },
        },
      },
    }),
    p.each(["radio", "checkbox"], function () {
      (p.valHooks[this] = {
        set: function (e, t) {
          return p.isArray(t) ? (e.checked = p.inArray(p(e).val(), t) >= 0) : void 0;
        },
      }),
        u.checkOn ||
          (p.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var ot,
    lt,
    dt = p.expr.attrHandle,
    ut = /^(?:checked|selected)$/i,
    ct = u.getSetAttribute,
    pt = u.input;
  p.fn.extend({
    attr: function (e, t) {
      return q(this, p.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        p.removeAttr(this, e);
      });
    },
  }),
    p.extend({
      attr: function (e, t, i) {
        var n,
          r,
          a = e.nodeType;
        if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === I ? p.prop(e, t, i) : ((1 === a && p.isXMLDoc(e)) || ((t = t.toLowerCase()), (n = p.attrHooks[t] || (p.expr.match.bool.test(t) ? lt : ot))), void 0 === i ? (n && "get" in n && null !== (r = n.get(e, t)) ? r : null == (r = p.find.attr(e, t)) ? void 0 : r) : null !== i ? (n && "set" in n && void 0 !== (r = n.set(e, i, t)) ? r : (e.setAttribute(t, i + ""), i)) : void p.removeAttr(e, t));
      },
      removeAttr: function (e, t) {
        var i,
          n,
          r = 0,
          a = t && t.match(z);
        if (a && 1 === e.nodeType) for (; (i = a[r++]); ) (n = p.propFix[i] || i), p.expr.match.bool.test(i) ? ((pt && ct) || !ut.test(i) ? (e[n] = !1) : (e[p.camelCase("default-" + i)] = e[n] = !1)) : p.attr(e, i, ""), e.removeAttribute(ct ? i : n);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!u.radioValue && "radio" === t && p.nodeName(e, "input")) {
              var i = e.value;
              return e.setAttribute("type", t), i && (e.value = i), t;
            }
          },
        },
      },
    }),
    (lt = {
      set: function (e, t, i) {
        return !1 === t ? p.removeAttr(e, i) : (pt && ct) || !ut.test(i) ? e.setAttribute((!ct && p.propFix[i]) || i, i) : (e[p.camelCase("default-" + i)] = e[i] = !0), i;
      },
    }),
    p.each(p.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var i = dt[t] || p.find.attr;
      dt[t] =
        (pt && ct) || !ut.test(t)
          ? function (e, t, n) {
              var r, a;
              return n || ((a = dt[t]), (dt[t] = r), (r = null != i(e, t, n) ? t.toLowerCase() : null), (dt[t] = a)), r;
            }
          : function (e, t, i) {
              return i ? void 0 : e[p.camelCase("default-" + t)] ? t.toLowerCase() : null;
            };
    }),
    (pt && ct) ||
      (p.attrHooks.value = {
        set: function (e, t, i) {
          return p.nodeName(e, "input") ? void (e.defaultValue = t) : ot && ot.set(e, t, i);
        },
      }),
    ct ||
      ((ot = {
        set: function (e, t, i) {
          var n = e.getAttributeNode(i);
          return n || e.setAttributeNode((n = e.ownerDocument.createAttribute(i))), (n.value = t += ""), "value" === i || t === e.getAttribute(i) ? t : void 0;
        },
      }),
      (dt.id =
        dt.name =
        dt.coords =
          function (e, t, i) {
            var n;
            return i ? void 0 : (n = e.getAttributeNode(t)) && "" !== n.value ? n.value : null;
          }),
      (p.valHooks.button = {
        get: function (e, t) {
          var i = e.getAttributeNode(t);
          return i && i.specified ? i.value : void 0;
        },
        set: ot.set,
      }),
      (p.attrHooks.contenteditable = {
        set: function (e, t, i) {
          ot.set(e, "" !== t && t, i);
        },
      }),
      p.each(["width", "height"], function (e, t) {
        p.attrHooks[t] = {
          set: function (e, i) {
            return "" === i ? (e.setAttribute(t, "auto"), i) : void 0;
          },
        };
      })),
    u.style ||
      (p.attrHooks.style = {
        get: function (e) {
          return e.style.cssText || void 0;
        },
        set: function (e, t) {
          return (e.style.cssText = t + "");
        },
      });
  var ht = /^(?:input|select|textarea|button|object)$/i,
    ft = /^(?:a|area)$/i;
  p.fn.extend({
    prop: function (e, t) {
      return q(this, p.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return (
        (e = p.propFix[e] || e),
        this.each(function () {
          try {
            (this[e] = void 0), delete this[e];
          } catch (t) {}
        })
      );
    },
  }),
    p.extend({
      propFix: { for: "htmlFor", class: "className" },
      prop: function (e, t, i) {
        var n,
          r,
          a = e.nodeType;
        if (e && 3 !== a && 8 !== a && 2 !== a) return (1 !== a || !p.isXMLDoc(e)) && (r = p.propHooks[(t = p.propFix[t] || t)]), void 0 !== i ? (r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : (e[t] = i)) : r && "get" in r && null !== (n = r.get(e, t)) ? n : e[t];
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = p.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : ht.test(e.nodeName) || (ft.test(e.nodeName) && e.href) ? 0 : -1;
          },
        },
      },
    }),
    u.hrefNormalized ||
      p.each(["href", "src"], function (e, t) {
        p.propHooks[t] = {
          get: function (e) {
            return e.getAttribute(t, 4);
          },
        };
      }),
    u.optSelected ||
      (p.propHooks.selected = {
        get: function (e) {
          return null;
        },
      }),
    p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      p.propFix[this.toLowerCase()] = this;
    }),
    u.enctype || (p.propFix.enctype = "encoding");
  var mt = /[\t\r\n\f]/g;
  p.fn.extend({
    addClass: function (e) {
      var t,
        i,
        n,
        r,
        a,
        s,
        o = 0,
        l = this.length,
        d = "string" == typeof e && e;
      if (p.isFunction(e))
        return this.each(function (t) {
          p(this).addClass(e.call(this, t, this.className));
        });
      if (d)
        for (t = (e || "").match(z) || []; l > o; o++)
          if ((n = 1 === (i = this[o]).nodeType && (i.className ? (" " + i.className + " ").replace(mt, " ") : " "))) {
            for (a = 0; (r = t[a++]); ) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
            (s = p.trim(n)), i.className !== s && (i.className = s);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        i,
        n,
        r,
        a,
        s,
        o = 0,
        l = this.length,
        d = 0 === arguments.length || ("string" == typeof e && e);
      if (p.isFunction(e))
        return this.each(function (t) {
          p(this).removeClass(e.call(this, t, this.className));
        });
      if (d)
        for (t = (e || "").match(z) || []; l > o; o++)
          if ((n = 1 === (i = this[o]).nodeType && (i.className ? (" " + i.className + " ").replace(mt, " ") : ""))) {
            for (a = 0; (r = t[a++]); ) for (; n.indexOf(" " + r + " ") >= 0; ) n = n.replace(" " + r + " ", " ");
            (s = e ? p.trim(n) : ""), i.className !== s && (i.className = s);
          }
      return this;
    },
    toggleClass: function (e, t) {
      var i = typeof e;
      return "boolean" == typeof t && "string" === i
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : this.each(
            p.isFunction(e)
              ? function (i) {
                  p(this).toggleClass(e.call(this, i, this.className, t), t);
                }
              : function () {
                  if ("string" === i) for (var t, n = 0, r = p(this), a = e.match(z) || []; (t = a[n++]); ) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                  else (i === I || "boolean" === i) && (this.className && p._data(this, "__className__", this.className), (this.className = this.className || !1 === e ? "" : p._data(this, "__className__") || ""));
                }
          );
    },
    hasClass: function (e) {
      for (var t = " " + e + " ", i = 0, n = this.length; n > i; i++) if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(mt, " ").indexOf(t) >= 0) return !0;
      return !1;
    },
  }),
    p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
      p.fn[t] = function (e, i) {
        return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t);
      };
    }),
    p.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
      bind: function (e, t, i) {
        return this.on(e, null, t, i);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, i, n) {
        return this.on(t, e, i, n);
      },
      undelegate: function (e, t, i) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i);
      },
    });
  var vt = p.now(),
    gt = /\?/,
    yt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  (p.parseJSON = function (t) {
    if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
    var i,
      n = null,
      r = p.trim(t + "");
    return r &&
      !p.trim(
        r.replace(yt, function (e, t, r, a) {
          return i && t && (n = 0), 0 === n ? e : ((i = r || t), (n += !a - !r), "");
        })
      )
      ? Function("return " + r)()
      : p.error("Invalid JSON: " + t);
  }),
    (p.parseXML = function (t) {
      var i;
      if (!t || "string" != typeof t) return null;
      try {
        e.DOMParser ? (i = new DOMParser().parseFromString(t, "text/xml")) : (((i = new ActiveXObject("Microsoft.XMLDOM")).async = "false"), i.loadXML(t));
      } catch (r) {
        i = void 0;
      }
      return (i && i.documentElement && !i.getElementsByTagName("parsererror").length) || p.error("Invalid XML: " + t), i;
    });
  var wt,
    bt,
    xt = /#.*$/,
    _t = /([?&])_=[^&]*/,
    Tt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    St = /^(?:GET|HEAD)$/,
    Ct = /^\/\//,
    Et = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Mt = {},
    Pt = {},
    kt = "*/".concat("*");
  try {
    bt = location.href;
  } catch (Kt) {
    ((bt = S.createElement("a")).href = ""), (bt = bt.href);
  }
  function zt(e) {
    return function (t, i) {
      "string" != typeof t && ((i = t), (t = "*"));
      var n,
        r = 0,
        a = t.toLowerCase().match(z) || [];
      if (p.isFunction(i)) for (; (n = a[r++]); ) "+" === n.charAt(0) ? ((n = n.slice(1) || "*"), (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i);
    };
  }
  function At(e, t, i, n) {
    var r = {},
      a = e === Pt;
    function s(o) {
      var l;
      return (
        (r[o] = !0),
        p.each(e[o] || [], function (e, o) {
          var d = o(t, i, n);
          return "string" != typeof d || a || r[d] ? (a ? !(l = d) : void 0) : (t.dataTypes.unshift(d), s(d), !1);
        }),
        l
      );
    }
    return s(t.dataTypes[0]) || (!r["*"] && s("*"));
  }
  function Ot(e, t) {
    var i,
      n,
      r = p.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    return i && p.extend(!0, e, i), e;
  }
  (wt = Et.exec(bt.toLowerCase()) || []),
    p.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: { url: bt, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": kt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": p.parseJSON, "text xml": p.parseXML }, flatOptions: { url: !0, context: !0 } },
      ajaxSetup: function (e, t) {
        return t ? Ot(Ot(e, p.ajaxSettings), t) : Ot(p.ajaxSettings, e);
      },
      ajaxPrefilter: zt(Mt),
      ajaxTransport: zt(Pt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0));
        var i,
          n,
          r,
          a,
          s,
          o,
          l,
          d,
          u = p.ajaxSetup({}, (t = t || {})),
          c = u.context || u,
          h = u.context && (c.nodeType || c.jquery) ? p(c) : p.event,
          f = p.Deferred(),
          m = p.Callbacks("once memory"),
          v = u.statusCode || {},
          g = {},
          y = {},
          w = 0,
          b = "canceled",
          x = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (2 === w) {
                if (!d) for (d = {}; (t = Tt.exec(a)); ) d[t[1].toLowerCase()] = t[2];
                t = d[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return 2 === w ? a : null;
            },
            setRequestHeader: function (e, t) {
              var i = e.toLowerCase();
              return w || ((e = y[i] = y[i] || e), (g[e] = t)), this;
            },
            overrideMimeType: function (e) {
              return w || (u.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (2 > w) for (t in e) v[t] = [v[t], e[t]];
                else x.always(e[x.status]);
              return this;
            },
            abort: function (e) {
              var t = e || b;
              return l && l.abort(t), T(0, t), this;
            },
          };
        if (
          ((f.promise(x).complete = m.add),
          (x.success = x.done),
          (x.error = x.fail),
          (u.url = ((e || u.url || bt) + "").replace(xt, "").replace(Ct, wt[1] + "//")),
          (u.type = t.method || t.type || u.method || u.type),
          (u.dataTypes = p
            .trim(u.dataType || "*")
            .toLowerCase()
            .match(z) || [""]),
          null == u.crossDomain && ((i = Et.exec(u.url.toLowerCase())), (u.crossDomain = !(!i || (i[1] === wt[1] && i[2] === wt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wt[3] || ("http:" === wt[1] ? "80" : "443")))))),
          u.data && u.processData && "string" != typeof u.data && (u.data = p.param(u.data, u.traditional)),
          At(Mt, u, t, x),
          2 === w)
        )
          return x;
        for (n in ((o = p.event && u.global) && 0 == p.active++ && p.event.trigger("ajaxStart"), (u.type = u.type.toUpperCase()), (u.hasContent = !St.test(u.type)), (r = u.url), u.hasContent || (u.data && ((r = u.url += (gt.test(r) ? "&" : "?") + u.data), delete u.data), !1 === u.cache && (u.url = _t.test(r) ? r.replace(_t, "$1_=" + vt++) : r + (gt.test(r) ? "&" : "?") + "_=" + vt++)), u.ifModified && (p.lastModified[r] && x.setRequestHeader("If-Modified-Since", p.lastModified[r]), p.etag[r] && x.setRequestHeader("If-None-Match", p.etag[r])), ((u.data && u.hasContent && !1 !== u.contentType) || t.contentType) && x.setRequestHeader("Content-Type", u.contentType), x.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + kt + "; q=0.01" : "") : u.accepts["*"]), u.headers)) x.setRequestHeader(n, u.headers[n]);
        if (u.beforeSend && (!1 === u.beforeSend.call(c, x, u) || 2 === w)) return x.abort();
        for (n in ((b = "abort"), { success: 1, error: 1, complete: 1 })) x[n](u[n]);
        if ((l = At(Pt, u, t, x))) {
          (x.readyState = 1),
            o && h.trigger("ajaxSend", [x, u]),
            u.async &&
              u.timeout > 0 &&
              (s = setTimeout(function () {
                x.abort("timeout");
              }, u.timeout));
          try {
            (w = 1), l.send(g, T);
          } catch (_) {
            if (!(2 > w)) throw _;
            T(-1, _);
          }
        } else T(-1, "No Transport");
        function T(e, t, i, n) {
          var d,
            g,
            y,
            b,
            _,
            T = t;
          2 !== w &&
            ((w = 2),
            s && clearTimeout(s),
            (l = void 0),
            (a = n || ""),
            (x.readyState = e > 0 ? 4 : 0),
            (d = (e >= 200 && 300 > e) || 304 === e),
            i &&
              (b = (function (e, t, i) {
                for (var n, r, a, s, o = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (s in o)
                    if (o[s] && o[s].test(r)) {
                      l.unshift(s);
                      break;
                    }
                if (l[0] in i) a = l[0];
                else {
                  for (s in i) {
                    if (!l[0] || e.converters[s + " " + l[0]]) {
                      a = s;
                      break;
                    }
                    n || (n = s);
                  }
                  a = a || n;
                }
                return a ? (a !== l[0] && l.unshift(a), i[a]) : void 0;
              })(u, x, i)),
            (b = (function (e, t, i, n) {
              var r,
                a,
                s,
                o,
                l,
                d = {},
                u = e.dataTypes.slice();
              if (u[1]) for (s in e.converters) d[s.toLowerCase()] = e.converters[s];
              for (a = u.shift(); a; )
                if ((e.responseFields[a] && (i[e.responseFields[a]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = a), (a = u.shift())))
                  if ("*" === a) a = l;
                  else if ("*" !== l && l !== a) {
                    if (!(s = d[l + " " + a] || d["* " + a]))
                      for (r in d)
                        if ((o = r.split(" "))[1] === a && (s = d[l + " " + o[0]] || d["* " + o[0]])) {
                          !0 === s ? (s = d[r]) : !0 !== d[r] && ((a = o[0]), u.unshift(o[1]));
                          break;
                        }
                    if (!0 !== s)
                      if (s && e.throws) t = s(t);
                      else
                        try {
                          t = s(t);
                        } catch (c) {
                          return { state: "parsererror", error: s ? c : "No conversion from " + l + " to " + a };
                        }
                  }
              return { state: "success", data: t };
            })(u, b, x, d)),
            d ? (u.ifModified && ((_ = x.getResponseHeader("Last-Modified")) && (p.lastModified[r] = _), (_ = x.getResponseHeader("etag")) && (p.etag[r] = _)), 204 === e || "HEAD" === u.type ? (T = "nocontent") : 304 === e ? (T = "notmodified") : ((T = b.state), (g = b.data), (d = !(y = b.error)))) : ((y = T), (e || !T) && ((T = "error"), 0 > e && (e = 0))),
            (x.status = e),
            (x.statusText = (t || T) + ""),
            d ? f.resolveWith(c, [g, T, x]) : f.rejectWith(c, [x, T, y]),
            x.statusCode(v),
            (v = void 0),
            o && h.trigger(d ? "ajaxSuccess" : "ajaxError", [x, u, d ? g : y]),
            m.fireWith(c, [x, T]),
            o && (h.trigger("ajaxComplete", [x, u]), --p.active || p.event.trigger("ajaxStop")));
        }
        return x;
      },
      getJSON: function (e, t, i) {
        return p.get(e, t, i, "json");
      },
      getScript: function (e, t) {
        return p.get(e, void 0, t, "script");
      },
    }),
    p.each(["get", "post"], function (e, t) {
      p[t] = function (e, i, n, r) {
        return p.isFunction(i) && ((r = r || n), (n = i), (i = void 0)), p.ajax({ url: e, type: t, dataType: r, data: i, success: n });
      };
    }),
    (p._evalUrl = function (e) {
      return p.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 });
    }),
    p.fn.extend({
      wrapAll: function (e) {
        if (p.isFunction(e))
          return this.each(function (t) {
            p(this).wrapAll(e.call(this, t));
          });
        if (this[0]) {
          var t = p(e, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; ) e = e.firstChild;
                return e;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (e) {
        return this.each(
          p.isFunction(e)
            ? function (t) {
                p(this).wrapInner(e.call(this, t));
              }
            : function () {
                var t = p(this),
                  i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e);
              }
        );
      },
      wrap: function (e) {
        var t = p.isFunction(e);
        return this.each(function (i) {
          p(this).wrapAll(t ? e.call(this, i) : e);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            p.nodeName(this, "body") || p(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (p.expr.filters.hidden = function (e) {
      return (e.offsetWidth <= 0 && e.offsetHeight <= 0) || (!u.reliableHiddenOffsets() && "none" === ((e.style && e.style.display) || p.css(e, "display")));
    }),
    (p.expr.filters.visible = function (e) {
      return !p.expr.filters.hidden(e);
    });
  var Dt = /%20/g,
    Lt = /\[\]$/,
    It = /\r?\n/g,
    Nt = /^(?:submit|button|image|reset|file)$/i,
    Rt = /^(?:input|select|textarea|keygen)/i;
  function Bt(e, t, i, n) {
    var r;
    if (p.isArray(t))
      p.each(t, function (t, r) {
        i || Lt.test(e) ? n(e, r) : Bt(e + "[" + ("object" == typeof r ? t : "") + "]", r, i, n);
      });
    else if (i || "object" !== p.type(t)) n(e, t);
    else for (r in t) Bt(e + "[" + r + "]", t[r], i, n);
  }
  (p.param = function (e, t) {
    var i,
      n = [],
      r = function (e, t) {
        (t = p.isFunction(t) ? t() : null == t ? "" : t), (n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
      };
    if ((void 0 === t && (t = p.ajaxSettings && p.ajaxSettings.traditional), p.isArray(e) || (e.jquery && !p.isPlainObject(e))))
      p.each(e, function () {
        r(this.name, this.value);
      });
    else for (i in e) Bt(i, e[i], t, r);
    return n.join("&").replace(Dt, "+");
  }),
    p.fn.extend({
      serialize: function () {
        return p.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = p.prop(this, "elements");
          return e ? p.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return this.name && !p(this).is(":disabled") && Rt.test(this.nodeName) && !Nt.test(e) && (this.checked || !G.test(e));
          })
          .map(function (e, t) {
            var i = p(this).val();
            return null == i
              ? null
              : p.isArray(i)
              ? p.map(i, function (e) {
                  return { name: t.name, value: e.replace(It, "\r\n") };
                })
              : { name: t.name, value: i.replace(It, "\r\n") };
          })
          .get();
      },
    }),
    (p.ajaxSettings.xhr =
      void 0 !== e.ActiveXObject
        ? function () {
            return (
              (!this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Xt()) ||
              (function () {
                try {
                  return new e.ActiveXObject("Microsoft.XMLHTTP");
                } catch (t) {}
              })()
            );
          }
        : Xt);
  var Ft = 0,
    $t = {},
    Ht = p.ajaxSettings.xhr();
  function Xt() {
    try {
      return new e.XMLHttpRequest();
    } catch (t) {}
  }
  e.attachEvent &&
    e.attachEvent("onunload", function () {
      for (var e in $t) $t[e](void 0, !0);
    }),
    (u.cors = !!Ht && "withCredentials" in Ht),
    (Ht = u.ajax = !!Ht) &&
      p.ajaxTransport(function (e) {
        var t;
        if (!e.crossDomain || u.cors)
          return {
            send: function (i, n) {
              var r,
                a = e.xhr(),
                s = ++Ft;
              if ((a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (r in e.xhrFields) a[r] = e.xhrFields[r];
              for (r in (e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i)) void 0 !== i[r] && a.setRequestHeader(r, i[r] + "");
              a.send((e.hasContent && e.data) || null),
                (t = function (i, r) {
                  var o, l, d;
                  if (t && (r || 4 === a.readyState))
                    if ((delete $t[s], (t = void 0), (a.onreadystatechange = p.noop), r)) 4 !== a.readyState && a.abort();
                    else {
                      (d = {}), (o = a.status), "string" == typeof a.responseText && (d.text = a.responseText);
                      try {
                        l = a.statusText;
                      } catch (u) {
                        l = "";
                      }
                      o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : (o = d.text ? 200 : 404);
                    }
                  d && n(o, l, d, a.getAllResponseHeaders());
                }),
                e.async ? (4 === a.readyState ? setTimeout(t) : (a.onreadystatechange = $t[s] = t)) : t();
            },
            abort: function () {
              t && t(void 0, !0);
            },
          };
      }),
    p.ajaxSetup({
      accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        "text script": function (e) {
          return p.globalEval(e), e;
        },
      },
    }),
    p.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && ((e.type = "GET"), (e.global = !1));
    }),
    p.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var t,
          i = S.head || p("head")[0] || S.documentElement;
        return {
          send: function (n, r) {
            ((t = S.createElement("script")).async = !0),
              e.scriptCharset && (t.charset = e.scriptCharset),
              (t.src = e.url),
              (t.onload = t.onreadystatechange =
                function (e, i) {
                  (i || !t.readyState || /loaded|complete/.test(t.readyState)) && ((t.onload = t.onreadystatechange = null), t.parentNode && t.parentNode.removeChild(t), (t = null), i || r(200, "success"));
                }),
              i.insertBefore(t, i.firstChild);
          },
          abort: function () {
            t && t.onload(void 0, !0);
          },
        };
      }
    });
  var jt = [],
    Yt = /(=)\?(?=&|$)|\?\?/;
  p.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = jt.pop() || p.expando + "_" + vt++;
      return (this[e] = !0), e;
    },
  }),
    p.ajaxPrefilter("json jsonp", function (t, i, n) {
      var r,
        a,
        s,
        o = !1 !== t.jsonp && (Yt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(t.data) && "data");
      return o || "jsonp" === t.dataTypes[0]
        ? ((r = t.jsonpCallback = p.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          o ? (t[o] = t[o].replace(Yt, "$1" + r)) : !1 !== t.jsonp && (t.url += (gt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
          (t.converters["script json"] = function () {
            return s || p.error(r + " was not called"), s[0];
          }),
          (t.dataTypes[0] = "json"),
          (a = e[r]),
          (e[r] = function () {
            s = arguments;
          }),
          n.always(function () {
            (e[r] = a), t[r] && ((t.jsonpCallback = i.jsonpCallback), jt.push(r)), s && p.isFunction(a) && a(s[0]), (s = a = void 0);
          }),
          "script")
        : void 0;
    }),
    (p.parseHTML = function (e, t, i) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && ((i = t), (t = !1)), (t = t || S);
      var n = b.exec(e),
        r = !i && [];
      return n ? [t.createElement(n[1])] : ((n = p.buildFragment([e], t, r)), r && r.length && p(r).remove(), p.merge([], n.childNodes));
    });
  var qt = p.fn.load;
  (p.fn.load = function (e, t, i) {
    if ("string" != typeof e && qt) return qt.apply(this, arguments);
    var n,
      r,
      a,
      s = this,
      o = e.indexOf(" ");
    return (
      o >= 0 && ((n = p.trim(e.slice(o, e.length))), (e = e.slice(0, o))),
      p.isFunction(t) ? ((i = t), (t = void 0)) : t && "object" == typeof t && (a = "POST"),
      s.length > 0 &&
        p
          .ajax({ url: e, type: a, dataType: "html", data: t })
          .done(function (e) {
            (r = arguments), s.html(n ? p("<div>").append(p.parseHTML(e)).find(n) : e);
          })
          .complete(
            i &&
              function (e, t) {
                s.each(i, r || [e.responseText, t, e]);
              }
          ),
      this
    );
  }),
    p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      p.fn[t] = function (e) {
        return this.on(t, e);
      };
    }),
    (p.expr.filters.animated = function (e) {
      return p.grep(p.timers, function (t) {
        return e === t.elem;
      }).length;
    });
  var Gt = e.document.documentElement;
  function Wt(e) {
    return p.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow);
  }
  (p.offset = {
    setOffset: function (e, t, i) {
      var n,
        r,
        a,
        s,
        o,
        l,
        d = p.css(e, "position"),
        u = p(e),
        c = {};
      "static" === d && (e.style.position = "relative"), (o = u.offset()), (a = p.css(e, "top")), (l = p.css(e, "left")), ("absolute" === d || "fixed" === d) && p.inArray("auto", [a, l]) > -1 ? ((s = (n = u.position()).top), (r = n.left)) : ((s = parseFloat(a) || 0), (r = parseFloat(l) || 0)), p.isFunction(t) && (t = t.call(e, i, o)), null != t.top && (c.top = t.top - o.top + s), null != t.left && (c.left = t.left - o.left + r), "using" in t ? t.using.call(e, c) : u.css(c);
    },
  }),
    p.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                p.offset.setOffset(this, e, t);
              });
        var t,
          i,
          n = { top: 0, left: 0 },
          r = this[0],
          a = r && r.ownerDocument;
        return a ? (p.contains((t = a.documentElement), r) ? (typeof r.getBoundingClientRect !== I && (n = r.getBoundingClientRect()), (i = Wt(a)), { top: n.top + (i.pageYOffset || t.scrollTop) - (t.clientTop || 0), left: n.left + (i.pageXOffset || t.scrollLeft) - (t.clientLeft || 0) }) : n) : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            i = { top: 0, left: 0 },
            n = this[0];
          return "fixed" === p.css(n, "position") ? (t = n.getBoundingClientRect()) : ((e = this.offsetParent()), (t = this.offset()), p.nodeName(e[0], "html") || (i = e.offset()), (i.top += p.css(e[0], "borderTopWidth", !0)), (i.left += p.css(e[0], "borderLeftWidth", !0))), { top: t.top - i.top - p.css(n, "marginTop", !0), left: t.left - i.left - p.css(n, "marginLeft", !0) };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (var e = this.offsetParent || Gt; e && !p.nodeName(e, "html") && "static" === p.css(e, "position"); ) e = e.offsetParent;
          return e || Gt;
        });
      },
    }),
    p.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
      var i = /Y/.test(t);
      p.fn[e] = function (n) {
        return q(
          this,
          function (e, n, r) {
            var a = Wt(e);
            return void 0 === r ? (a ? (t in a ? a[t] : a.document.documentElement[n]) : e[n]) : void (a ? a.scrollTo(i ? p(a).scrollLeft() : r, i ? r : p(a).scrollTop()) : (e[n] = r));
          },
          e,
          n,
          arguments.length,
          null
        );
      };
    }),
    p.each(["top", "left"], function (e, t) {
      p.cssHooks[t] = Le(u.pixelPosition, function (e, i) {
        return i ? ((i = ze(e, t)), Oe.test(i) ? p(e).position()[t] + "px" : i) : void 0;
      });
    }),
    p.each({ Height: "height", Width: "width" }, function (e, t) {
      p.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (i, n) {
        p.fn[n] = function (n, r) {
          var a = arguments.length && (i || "boolean" != typeof n),
            s = i || (!0 === n || !0 === r ? "margin" : "border");
          return q(
            this,
            function (t, i, n) {
              var r;
              return p.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? ((r = t.documentElement), Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === n ? p.css(t, i, s) : p.style(t, i, n, s);
            },
            t,
            a ? n : void 0,
            a,
            null
          );
        };
      });
    }),
    (p.fn.size = function () {
      return this.length;
    }),
    (p.fn.andSelf = p.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return p;
      });
  var Vt = e.jQuery,
    Ut = e.$;
  return (
    (p.noConflict = function (t) {
      return e.$ === p && (e.$ = Ut), t && e.jQuery === p && (e.jQuery = Vt), p;
    }),
    typeof t === I && (e.jQuery = e.$ = p),
    p
  );
}),
  function () {
    function e(e) {
      function t(t, i, n, r, a, s) {
        for (; a >= 0 && s > a; a += e) {
          var o = r ? r[a] : a;
          n = i(n, t[o], o, t);
        }
        return n;
      }
      return function (i, n, r, a) {
        n = w(n, a, 4);
        var s = !E(i) && y.keys(i),
          o = (s || i).length,
          l = e > 0 ? 0 : o - 1;
        return arguments.length < 3 && ((r = i[s ? s[l] : l]), (l += e)), t(i, n, r, s, l, o);
      };
    }
    function t(e) {
      return function (t, i, n) {
        i = b(i, n);
        for (var r = C(t), a = e > 0 ? 0 : r - 1; a >= 0 && r > a; a += e) if (i(t[a], a, t)) return a;
        return -1;
      };
    }
    function i(e, t, i) {
      return function (n, r, a) {
        var s = 0,
          o = C(n);
        if ("number" == typeof a) e > 0 ? (s = a >= 0 ? a : Math.max(a + o, s)) : (o = a >= 0 ? Math.min(a + 1, o) : a + o + 1);
        else if (i && a && o) return n[(a = i(n, r))] === r ? a : -1;
        if (r != r) return (a = t(u.call(n, s, o), y.isNaN)) >= 0 ? a + s : -1;
        for (a = e > 0 ? s : o - 1; a >= 0 && o > a; a += e) if (n[a] === r) return a;
        return -1;
      };
    }
    function n(e, t) {
      var i = A.length,
        n = e.constructor,
        r = (y.isFunction(n) && n.prototype) || o,
        a = "constructor";
      for (y.has(e, a) && !y.contains(t, a) && t.push(a); i--; ) (a = A[i]) in e && e[a] !== r[a] && !y.contains(t, a) && t.push(a);
    }
    var r = this,
      a = r._,
      s = Array.prototype,
      o = Object.prototype,
      l = Function.prototype,
      d = s.push,
      u = s.slice,
      c = o.toString,
      p = o.hasOwnProperty,
      h = Array.isArray,
      f = Object.keys,
      m = l.bind,
      v = Object.create,
      g = function () {},
      y = function (e) {
        return e instanceof y ? e : this instanceof y ? void (this._wrapped = e) : new y(e);
      };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = y), (exports._ = y)) : (r._ = y), (y.VERSION = "1.8.3");
    var w = function (e, t, i) {
        if (void 0 === t) return e;
        switch (null == i ? 3 : i) {
          case 1:
            return function (i) {
              return e.call(t, i);
            };
          case 2:
            return function (i, n) {
              return e.call(t, i, n);
            };
          case 3:
            return function (i, n, r) {
              return e.call(t, i, n, r);
            };
          case 4:
            return function (i, n, r, a) {
              return e.call(t, i, n, r, a);
            };
        }
        return function () {
          return e.apply(t, arguments);
        };
      },
      b = function (e, t, i) {
        return null == e ? y.identity : y.isFunction(e) ? w(e, t, i) : y.isObject(e) ? y.matcher(e) : y.property(e);
      };
    y.iteratee = function (e, t) {
      return b(e, t, 1 / 0);
    };
    var x = function (e, t) {
        return function (i) {
          var n = arguments.length;
          if (2 > n || null == i) return i;
          for (var r = 1; n > r; r++)
            for (var a = arguments[r], s = e(a), o = s.length, l = 0; o > l; l++) {
              var d = s[l];
              (t && void 0 !== i[d]) || (i[d] = a[d]);
            }
          return i;
        };
      },
      _ = function (e) {
        if (!y.isObject(e)) return {};
        if (v) return v(e);
        g.prototype = e;
        var t = new g();
        return (g.prototype = null), t;
      },
      T = function (e) {
        return function (t) {
          return null == t ? void 0 : t[e];
        };
      },
      S = Math.pow(2, 53) - 1,
      C = T("length"),
      E = function (e) {
        var t = C(e);
        return "number" == typeof t && t >= 0 && S >= t;
      };
    (y.each = y.forEach =
      function (e, t, i) {
        var n, r;
        if (((t = w(t, i)), E(e))) for (n = 0, r = e.length; r > n; n++) t(e[n], n, e);
        else {
          var a = y.keys(e);
          for (n = 0, r = a.length; r > n; n++) t(e[a[n]], a[n], e);
        }
        return e;
      }),
      (y.map = y.collect =
        function (e, t, i) {
          t = b(t, i);
          for (var n = !E(e) && y.keys(e), r = (n || e).length, a = Array(r), s = 0; r > s; s++) {
            var o = n ? n[s] : s;
            a[s] = t(e[o], o, e);
          }
          return a;
        }),
      (y.reduce = y.foldl = y.inject = e(1)),
      (y.reduceRight = y.foldr = e(-1)),
      (y.find = y.detect =
        function (e, t, i) {
          var n;
          return void 0 !== (n = E(e) ? y.findIndex(e, t, i) : y.findKey(e, t, i)) && -1 !== n ? e[n] : void 0;
        }),
      (y.filter = y.select =
        function (e, t, i) {
          var n = [];
          return (
            (t = b(t, i)),
            y.each(e, function (e, i, r) {
              t(e, i, r) && n.push(e);
            }),
            n
          );
        }),
      (y.reject = function (e, t, i) {
        return y.filter(e, y.negate(b(t)), i);
      }),
      (y.every = y.all =
        function (e, t, i) {
          t = b(t, i);
          for (var n = !E(e) && y.keys(e), r = (n || e).length, a = 0; r > a; a++) {
            var s = n ? n[a] : a;
            if (!t(e[s], s, e)) return !1;
          }
          return !0;
        }),
      (y.some = y.any =
        function (e, t, i) {
          t = b(t, i);
          for (var n = !E(e) && y.keys(e), r = (n || e).length, a = 0; r > a; a++) {
            var s = n ? n[a] : a;
            if (t(e[s], s, e)) return !0;
          }
          return !1;
        }),
      (y.contains =
        y.includes =
        y.include =
          function (e, t, i, n) {
            return E(e) || (e = y.values(e)), ("number" != typeof i || n) && (i = 0), y.indexOf(e, t, i) >= 0;
          }),
      (y.invoke = function (e, t) {
        var i = u.call(arguments, 2),
          n = y.isFunction(t);
        return y.map(e, function (e) {
          var r = n ? t : e[t];
          return null == r ? r : r.apply(e, i);
        });
      }),
      (y.pluck = function (e, t) {
        return y.map(e, y.property(t));
      }),
      (y.where = function (e, t) {
        return y.filter(e, y.matcher(t));
      }),
      (y.findWhere = function (e, t) {
        return y.find(e, y.matcher(t));
      }),
      (y.max = function (e, t, i) {
        var n,
          r,
          a = -1 / 0,
          s = -1 / 0;
        if (null == t && null != e) for (var o = 0, l = (e = E(e) ? e : y.values(e)).length; l > o; o++) (n = e[o]) > a && (a = n);
        else
          (t = b(t, i)),
            y.each(e, function (e, i, n) {
              ((r = t(e, i, n)) > s || (r === -1 / 0 && a === -1 / 0)) && ((a = e), (s = r));
            });
        return a;
      }),
      (y.min = function (e, t, i) {
        var n,
          r,
          a = 1 / 0,
          s = 1 / 0;
        if (null == t && null != e) for (var o = 0, l = (e = E(e) ? e : y.values(e)).length; l > o; o++) a > (n = e[o]) && (a = n);
        else
          (t = b(t, i)),
            y.each(e, function (e, i, n) {
              (r = t(e, i, n)), (s > r || (1 / 0 === r && 1 / 0 === a)) && ((a = e), (s = r));
            });
        return a;
      }),
      (y.shuffle = function (e) {
        for (var t, i = E(e) ? e : y.values(e), n = i.length, r = Array(n), a = 0; n > a; a++) (t = y.random(0, a)) !== a && (r[a] = r[t]), (r[t] = i[a]);
        return r;
      }),
      (y.sample = function (e, t, i) {
        return null == t || i ? (E(e) || (e = y.values(e)), e[y.random(e.length - 1)]) : y.shuffle(e).slice(0, Math.max(0, t));
      }),
      (y.sortBy = function (e, t, i) {
        return (
          (t = b(t, i)),
          y.pluck(
            y
              .map(e, function (e, i, n) {
                return { value: e, index: i, criteria: t(e, i, n) };
              })
              .sort(function (e, t) {
                var i = e.criteria,
                  n = t.criteria;
                if (i !== n) {
                  if (i > n || void 0 === i) return 1;
                  if (n > i || void 0 === n) return -1;
                }
                return e.index - t.index;
              }),
            "value"
          )
        );
      });
    var M = function (e) {
      return function (t, i, n) {
        var r = {};
        return (
          (i = b(i, n)),
          y.each(t, function (n, a) {
            var s = i(n, a, t);
            e(r, n, s);
          }),
          r
        );
      };
    };
    (y.groupBy = M(function (e, t, i) {
      y.has(e, i) ? e[i].push(t) : (e[i] = [t]);
    })),
      (y.indexBy = M(function (e, t, i) {
        e[i] = t;
      })),
      (y.countBy = M(function (e, t, i) {
        y.has(e, i) ? e[i]++ : (e[i] = 1);
      })),
      (y.toArray = function (e) {
        return e ? (y.isArray(e) ? u.call(e) : E(e) ? y.map(e, y.identity) : y.values(e)) : [];
      }),
      (y.size = function (e) {
        return null == e ? 0 : E(e) ? e.length : y.keys(e).length;
      }),
      (y.partition = function (e, t, i) {
        t = b(t, i);
        var n = [],
          r = [];
        return (
          y.each(e, function (e, i, a) {
            (t(e, i, a) ? n : r).push(e);
          }),
          [n, r]
        );
      }),
      (y.first =
        y.head =
        y.take =
          function (e, t, i) {
            return null == e ? void 0 : null == t || i ? e[0] : y.initial(e, e.length - t);
          }),
      (y.initial = function (e, t, i) {
        return u.call(e, 0, Math.max(0, e.length - (null == t || i ? 1 : t)));
      }),
      (y.last = function (e, t, i) {
        return null == e ? void 0 : null == t || i ? e[e.length - 1] : y.rest(e, Math.max(0, e.length - t));
      }),
      (y.rest =
        y.tail =
        y.drop =
          function (e, t, i) {
            return u.call(e, null == t || i ? 1 : t);
          }),
      (y.compact = function (e) {
        return y.filter(e, y.identity);
      });
    var P = function (e, t, i, n) {
      for (var r = [], a = 0, s = n || 0, o = C(e); o > s; s++) {
        var l = e[s];
        if (E(l) && (y.isArray(l) || y.isArguments(l))) {
          t || (l = P(l, t, i));
          var d = 0,
            u = l.length;
          for (r.length += u; u > d; ) r[a++] = l[d++];
        } else i || (r[a++] = l);
      }
      return r;
    };
    (y.flatten = function (e, t) {
      return P(e, t, !1);
    }),
      (y.without = function (e) {
        return y.difference(e, u.call(arguments, 1));
      }),
      (y.uniq = y.unique =
        function (e, t, i, n) {
          y.isBoolean(t) || ((n = i), (i = t), (t = !1)), null != i && (i = b(i, n));
          for (var r = [], a = [], s = 0, o = C(e); o > s; s++) {
            var l = e[s],
              d = i ? i(l, s, e) : l;
            t ? ((s && a === d) || r.push(l), (a = d)) : i ? y.contains(a, d) || (a.push(d), r.push(l)) : y.contains(r, l) || r.push(l);
          }
          return r;
        }),
      (y.union = function () {
        return y.uniq(P(arguments, !0, !0));
      }),
      (y.intersection = function (e) {
        for (var t = [], i = arguments.length, n = 0, r = C(e); r > n; n++) {
          var a = e[n];
          if (!y.contains(t, a)) {
            for (var s = 1; i > s && y.contains(arguments[s], a); s++);
            s === i && t.push(a);
          }
        }
        return t;
      }),
      (y.difference = function (e) {
        var t = P(arguments, !0, !0, 1);
        return y.filter(e, function (e) {
          return !y.contains(t, e);
        });
      }),
      (y.zip = function () {
        return y.unzip(arguments);
      }),
      (y.unzip = function (e) {
        for (var t = (e && y.max(e, C).length) || 0, i = Array(t), n = 0; t > n; n++) i[n] = y.pluck(e, n);
        return i;
      }),
      (y.object = function (e, t) {
        for (var i = {}, n = 0, r = C(e); r > n; n++) t ? (i[e[n]] = t[n]) : (i[e[n][0]] = e[n][1]);
        return i;
      }),
      (y.findIndex = t(1)),
      (y.findLastIndex = t(-1)),
      (y.sortedIndex = function (e, t, i, n) {
        for (var r = (i = b(i, n, 1))(t), a = 0, s = C(e); s > a; ) {
          var o = Math.floor((a + s) / 2);
          i(e[o]) < r ? (a = o + 1) : (s = o);
        }
        return a;
      }),
      (y.indexOf = i(1, y.findIndex, y.sortedIndex)),
      (y.lastIndexOf = i(-1, y.findLastIndex)),
      (y.range = function (e, t, i) {
        null == t && ((t = e || 0), (e = 0)), (i = i || 1);
        for (var n = Math.max(Math.ceil((t - e) / i), 0), r = Array(n), a = 0; n > a; a++, e += i) r[a] = e;
        return r;
      });
    var k = function (e, t, i, n, r) {
      if (!(n instanceof t)) return e.apply(i, r);
      var a = _(e.prototype),
        s = e.apply(a, r);
      return y.isObject(s) ? s : a;
    };
    (y.bind = function (e, t) {
      if (m && e.bind === m) return m.apply(e, u.call(arguments, 1));
      if (!y.isFunction(e)) throw new TypeError("Bind must be called on a function");
      var i = u.call(arguments, 2),
        n = function () {
          return k(e, n, t, this, i.concat(u.call(arguments)));
        };
      return n;
    }),
      (y.partial = function (e) {
        var t = u.call(arguments, 1),
          i = function () {
            for (var n = 0, r = t.length, a = Array(r), s = 0; r > s; s++) a[s] = t[s] === y ? arguments[n++] : t[s];
            for (; n < arguments.length; ) a.push(arguments[n++]);
            return k(e, i, this, this, a);
          };
        return i;
      }),
      (y.bindAll = function (e) {
        var t,
          i,
          n = arguments.length;
        if (1 >= n) throw new Error("bindAll must be passed function names");
        for (t = 1; n > t; t++) e[(i = arguments[t])] = y.bind(e[i], e);
        return e;
      }),
      (y.memoize = function (e, t) {
        var i = function (n) {
          var r = i.cache,
            a = "" + (t ? t.apply(this, arguments) : n);
          return y.has(r, a) || (r[a] = e.apply(this, arguments)), r[a];
        };
        return (i.cache = {}), i;
      }),
      (y.delay = function (e, t) {
        var i = u.call(arguments, 2);
        return setTimeout(function () {
          return e.apply(null, i);
        }, t);
      }),
      (y.defer = y.partial(y.delay, y, 1)),
      (y.throttle = function (e, t, i) {
        var n,
          r,
          a,
          s = null,
          o = 0;
        i || (i = {});
        var l = function () {
          (o = !1 === i.leading ? 0 : y.now()), (s = null), (a = e.apply(n, r)), s || (n = r = null);
        };
        return function () {
          var d = y.now();
          o || !1 !== i.leading || (o = d);
          var u = t - (d - o);
          return (n = this), (r = arguments), 0 >= u || u > t ? (s && (clearTimeout(s), (s = null)), (o = d), (a = e.apply(n, r)), s || (n = r = null)) : s || !1 === i.trailing || (s = setTimeout(l, u)), a;
        };
      }),
      (y.debounce = function (e, t, i) {
        var n,
          r,
          a,
          s,
          o,
          l = function () {
            var d = y.now() - s;
            t > d && d >= 0 ? (n = setTimeout(l, t - d)) : ((n = null), i || ((o = e.apply(a, r)), n || (a = r = null)));
          };
        return function () {
          (a = this), (r = arguments), (s = y.now());
          var d = i && !n;
          return n || (n = setTimeout(l, t)), d && ((o = e.apply(a, r)), (a = r = null)), o;
        };
      }),
      (y.wrap = function (e, t) {
        return y.partial(t, e);
      }),
      (y.negate = function (e) {
        return function () {
          return !e.apply(this, arguments);
        };
      }),
      (y.compose = function () {
        var e = arguments,
          t = e.length - 1;
        return function () {
          for (var i = t, n = e[t].apply(this, arguments); i--; ) n = e[i].call(this, n);
          return n;
        };
      }),
      (y.after = function (e, t) {
        return function () {
          return --e < 1 ? t.apply(this, arguments) : void 0;
        };
      }),
      (y.before = function (e, t) {
        var i;
        return function () {
          return --e > 0 && (i = t.apply(this, arguments)), 1 >= e && (t = null), i;
        };
      }),
      (y.once = y.partial(y.before, 2));
    var z = !{ toString: null }.propertyIsEnumerable("toString"),
      A = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    (y.keys = function (e) {
      if (!y.isObject(e)) return [];
      if (f) return f(e);
      var t = [];
      for (var i in e) y.has(e, i) && t.push(i);
      return z && n(e, t), t;
    }),
      (y.allKeys = function (e) {
        if (!y.isObject(e)) return [];
        var t = [];
        for (var i in e) t.push(i);
        return z && n(e, t), t;
      }),
      (y.values = function (e) {
        for (var t = y.keys(e), i = t.length, n = Array(i), r = 0; i > r; r++) n[r] = e[t[r]];
        return n;
      }),
      (y.mapObject = function (e, t, i) {
        t = b(t, i);
        for (var n, r = y.keys(e), a = r.length, s = {}, o = 0; a > o; o++) s[(n = r[o])] = t(e[n], n, e);
        return s;
      }),
      (y.pairs = function (e) {
        for (var t = y.keys(e), i = t.length, n = Array(i), r = 0; i > r; r++) n[r] = [t[r], e[t[r]]];
        return n;
      }),
      (y.invert = function (e) {
        for (var t = {}, i = y.keys(e), n = 0, r = i.length; r > n; n++) t[e[i[n]]] = i[n];
        return t;
      }),
      (y.functions = y.methods =
        function (e) {
          var t = [];
          for (var i in e) y.isFunction(e[i]) && t.push(i);
          return t.sort();
        }),
      (y.extend = x(y.allKeys)),
      (y.extendOwn = y.assign = x(y.keys)),
      (y.findKey = function (e, t, i) {
        t = b(t, i);
        for (var n, r = y.keys(e), a = 0, s = r.length; s > a; a++) if (t(e[(n = r[a])], n, e)) return n;
      }),
      (y.pick = function (e, t, i) {
        var n,
          r,
          a = {},
          s = e;
        if (null == s) return a;
        y.isFunction(t)
          ? ((r = y.allKeys(s)), (n = w(t, i)))
          : ((r = P(arguments, !1, !1, 1)),
            (n = function (e, t, i) {
              return t in i;
            }),
            (s = Object(s)));
        for (var o = 0, l = r.length; l > o; o++) {
          var d = r[o],
            u = s[d];
          n(u, d, s) && (a[d] = u);
        }
        return a;
      }),
      (y.omit = function (e, t, i) {
        if (y.isFunction(t)) t = y.negate(t);
        else {
          var n = y.map(P(arguments, !1, !1, 1), String);
          t = function (e, t) {
            return !y.contains(n, t);
          };
        }
        return y.pick(e, t, i);
      }),
      (y.defaults = x(y.allKeys, !0)),
      (y.create = function (e, t) {
        var i = _(e);
        return t && y.extendOwn(i, t), i;
      }),
      (y.clone = function (e) {
        return y.isObject(e) ? (y.isArray(e) ? e.slice() : y.extend({}, e)) : e;
      }),
      (y.tap = function (e, t) {
        return t(e), e;
      }),
      (y.isMatch = function (e, t) {
        var i = y.keys(t),
          n = i.length;
        if (null == e) return !n;
        for (var r = Object(e), a = 0; n > a; a++) {
          var s = i[a];
          if (t[s] !== r[s] || !(s in r)) return !1;
        }
        return !0;
      });
    var O = function (e, t, i, n) {
      if (e === t) return 0 !== e || 1 / e == 1 / t;
      if (null == e || null == t) return e === t;
      e instanceof y && (e = e._wrapped), t instanceof y && (t = t._wrapped);
      var r = c.call(e);
      if (r !== c.call(t)) return !1;
      switch (r) {
        case "[object RegExp]":
        case "[object String]":
          return "" + e == "" + t;
        case "[object Number]":
          return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
        case "[object Date]":
        case "[object Boolean]":
          return +e == +t;
      }
      var a = "[object Array]" === r;
      if (!a) {
        if ("object" != typeof e || "object" != typeof t) return !1;
        var s = e.constructor,
          o = t.constructor;
        if (s !== o && !(y.isFunction(s) && s instanceof s && y.isFunction(o) && o instanceof o) && "constructor" in e && "constructor" in t) return !1;
      }
      n = n || [];
      for (var l = (i = i || []).length; l--; ) if (i[l] === e) return n[l] === t;
      if ((i.push(e), n.push(t), a)) {
        if ((l = e.length) !== t.length) return !1;
        for (; l--; ) if (!O(e[l], t[l], i, n)) return !1;
      } else {
        var d,
          u = y.keys(e);
        if (((l = u.length), y.keys(t).length !== l)) return !1;
        for (; l--; ) if (!y.has(t, (d = u[l])) || !O(e[d], t[d], i, n)) return !1;
      }
      return i.pop(), n.pop(), !0;
    };
    (y.isEqual = function (e, t) {
      return O(e, t);
    }),
      (y.isEmpty = function (e) {
        return null == e || (E(e) && (y.isArray(e) || y.isString(e) || y.isArguments(e)) ? 0 === e.length : 0 === y.keys(e).length);
      }),
      (y.isElement = function (e) {
        return !(!e || 1 !== e.nodeType);
      }),
      (y.isArray =
        h ||
        function (e) {
          return "[object Array]" === c.call(e);
        }),
      (y.isObject = function (e) {
        var t = typeof e;
        return "function" === t || ("object" === t && !!e);
      }),
      y.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (e) {
        y["is" + e] = function (t) {
          return c.call(t) === "[object " + e + "]";
        };
      }),
      y.isArguments(arguments) ||
        (y.isArguments = function (e) {
          return y.has(e, "callee");
        }),
      "function" != typeof /./ &&
        "object" != typeof Int8Array &&
        (y.isFunction = function (e) {
          return "function" == typeof e || !1;
        }),
      (y.isFinite = function (e) {
        return isFinite(e) && !isNaN(parseFloat(e));
      }),
      (y.isNaN = function (e) {
        return y.isNumber(e) && e !== +e;
      }),
      (y.isBoolean = function (e) {
        return !0 === e || !1 === e || "[object Boolean]" === c.call(e);
      }),
      (y.isNull = function (e) {
        return null === e;
      }),
      (y.isUndefined = function (e) {
        return void 0 === e;
      }),
      (y.has = function (e, t) {
        return null != e && p.call(e, t);
      }),
      (y.noConflict = function () {
        return (r._ = a), this;
      }),
      (y.identity = function (e) {
        return e;
      }),
      (y.constant = function (e) {
        return function () {
          return e;
        };
      }),
      (y.noop = function () {}),
      (y.property = T),
      (y.propertyOf = function (e) {
        return null == e
          ? function () {}
          : function (t) {
              return e[t];
            };
      }),
      (y.matcher = y.matches =
        function (e) {
          return (
            (e = y.extendOwn({}, e)),
            function (t) {
              return y.isMatch(t, e);
            }
          );
        }),
      (y.times = function (e, t, i) {
        var n = Array(Math.max(0, e));
        t = w(t, i, 1);
        for (var r = 0; e > r; r++) n[r] = t(r);
        return n;
      }),
      (y.random = function (e, t) {
        return null == t && ((t = e), (e = 0)), e + Math.floor(Math.random() * (t - e + 1));
      }),
      (y.now =
        Date.now ||
        function () {
          return new Date().getTime();
        });
    var D = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
      L = y.invert(D),
      I = function (e) {
        var t = function (t) {
            return e[t];
          },
          i = "(?:" + y.keys(e).join("|") + ")",
          n = RegExp(i),
          r = RegExp(i, "g");
        return function (e) {
          return n.test((e = null == e ? "" : "" + e)) ? e.replace(r, t) : e;
        };
      };
    (y.escape = I(D)),
      (y.unescape = I(L)),
      (y.result = function (e, t, i) {
        var n = null == e ? void 0 : e[t];
        return void 0 === n && (n = i), y.isFunction(n) ? n.call(e) : n;
      });
    var N = 0;
    (y.uniqueId = function (e) {
      var t = ++N + "";
      return e ? e + t : t;
    }),
      (y.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g });
    var R = /(.)^/,
      B = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
      F = /\\|'|\r|\n|\u2028|\u2029/g,
      $ = function (e) {
        return "\\" + B[e];
      };
    (y.template = function (e, t, i) {
      !t && i && (t = i), (t = y.defaults({}, t, y.templateSettings));
      var n = RegExp([(t.escape || R).source, (t.interpolate || R).source, (t.evaluate || R).source].join("|") + "|$", "g"),
        r = 0,
        a = "__p+='";
      e.replace(n, function (t, i, n, s, o) {
        return (a += e.slice(r, o).replace(F, $)), (r = o + t.length), i ? (a += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'") : n ? (a += "'+\n((__t=(" + n + "))==null?'':__t)+\n'") : s && (a += "';\n" + s + "\n__p+='"), t;
      }),
        (a += "';\n"),
        t.variable || (a = "with(obj||{}){\n" + a + "}\n"),
        (a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n");
      try {
        var s = new Function(t.variable || "obj", "_", a);
      } catch (o) {
        throw ((o.source = a), o);
      }
      var l = function (e) {
        return s.call(this, e, y);
      };
      return (l.source = "function(" + (t.variable || "obj") + "){\n" + a + "}"), l;
    }),
      (y.chain = function (e) {
        var t = y(e);
        return (t._chain = !0), t;
      });
    var H = function (e, t) {
      return e._chain ? y(t).chain() : t;
    };
    (y.mixin = function (e) {
      y.each(y.functions(e), function (t) {
        var i = (y[t] = e[t]);
        y.prototype[t] = function () {
          var e = [this._wrapped];
          return d.apply(e, arguments), H(this, i.apply(y, e));
        };
      });
    }),
      y.mixin(y),
      y.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
        var t = s[e];
        y.prototype[e] = function () {
          var i = this._wrapped;
          return t.apply(i, arguments), ("shift" !== e && "splice" !== e) || 0 !== i.length || delete i[0], H(this, i);
        };
      }),
      y.each(["concat", "join", "slice"], function (e) {
        var t = s[e];
        y.prototype[e] = function () {
          return H(this, t.apply(this._wrapped, arguments));
        };
      }),
      (y.prototype.value = function () {
        return this._wrapped;
      }),
      (y.prototype.valueOf = y.prototype.toJSON = y.prototype.value),
      (y.prototype.toString = function () {
        return "" + this._wrapped;
      }),
      "function" == typeof define &&
        define.amd &&
        define("underscore", [], function () {
          return y;
        });
  }.call(this);
var FTScroller,
  CubicBezier,
  _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";
  var e, t, i, n, r, a, s, o, l, d, u, c, p, h, f, m;
  _gsScope._gsDefine(
    "TweenMax",
    ["core.Animation", "core.SimpleTimeline", "TweenLite"],
    function (e, t, i) {
      var n = function (e) {
          var t,
            i = [],
            n = e.length;
          for (t = 0; t !== n; i.push(e[t++]));
          return i;
        },
        r = function (e, t, i) {
          var n,
            r,
            a = e.cycle;
          for (n in a) e[n] = "function" == typeof (r = a[n]) ? r.call(t[i], i) : r[i % r.length];
          delete e.cycle;
        },
        a = function (e, t, n) {
          i.call(this, e, t, n), (this._cycle = 0), (this._yoyo = !0 === this.vars.yoyo), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), (this._dirty = !0), (this.render = a.prototype.render);
        },
        s = 1e-10,
        o = i._internals,
        l = o.isSelector,
        d = o.isArray,
        u = (a.prototype = i.to({}, 0.1, {})),
        c = [];
      (a.version = "1.18.2"),
        (u.constructor = a),
        (u.kill()._gc = !1),
        (a.killTweensOf = a.killDelayedCallsTo = i.killTweensOf),
        (a.getTweensOf = i.getTweensOf),
        (a.lagSmoothing = i.lagSmoothing),
        (a.ticker = i.ticker),
        (a.render = i.render),
        (u.invalidate = function () {
          return (this._yoyo = !0 === this.vars.yoyo), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), this._uncache(!0), i.prototype.invalidate.call(this);
        }),
        (u.updateTo = function (e, t) {
          var n,
            r = this.ratio,
            a = this.vars.immediateRender || e.immediateRender;
          for (n in (t && this._startTime < this._timeline._time && ((this._startTime = this._timeline._time), this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), e)) this.vars[n] = e[n];
          if (this._initted || a)
            if (t) (this._initted = !1), a && this.render(0, !0, !0);
            else if ((this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > 0.998)) {
              var s = this._totalTime;
              this.render(0, !0, !1), (this._initted = !1), this.render(s, !0, !1);
            } else if (((this._initted = !1), this._init(), this._time > 0 || a)) for (var o, l = 1 / (1 - r), d = this._firstPT; d; ) (o = d.s + d.c), (d.c *= l), (d.s = o - d.c), (d = d._next);
          return this;
        }),
        (u.render = function (e, t, i) {
          this._initted || (0 === this._duration && this.vars.repeat && this.invalidate());
          var n,
            r,
            a,
            l,
            d,
            u,
            c,
            p,
            h = this._dirty ? this.totalDuration() : this._totalDuration,
            f = this._time,
            m = this._totalTime,
            v = this._cycle,
            g = this._duration,
            y = this._rawPrevTime;
          if ((e >= h - 1e-7 ? ((this._totalTime = h), (this._cycle = this._repeat), this._yoyo && 0 != (1 & this._cycle) ? ((this._time = 0), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0)) : ((this._time = g), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1)), this._reversed || ((n = !0), (r = "onComplete"), (i = i || this._timeline.autoRemoveChildren)), 0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (0 > y || (0 >= e && e >= -1e-7) || (y === s && "isPause" !== this.data)) && y !== e && ((i = !0), y > s && (r = "onReverseComplete")), (this._rawPrevTime = p = !t || e || y === e ? e : s))) : 1e-7 > e ? ((this._totalTime = this._time = this._cycle = 0), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0), (0 !== m || (0 === g && y > 0)) && ((r = "onReverseComplete"), (n = this._reversed)), 0 > e && ((this._active = !1), 0 === g && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), (this._rawPrevTime = p = !t || e || y === e ? e : s))), this._initted || (i = !0)) : ((this._totalTime = this._time = e), 0 !== this._repeat && ((this._cycle = (this._totalTime / (l = g + this._repeatDelay)) >> 0), 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, (this._time = this._totalTime - this._cycle * l), this._yoyo && 0 != (1 & this._cycle) && (this._time = g - this._time), this._time > g ? (this._time = g) : this._time < 0 && (this._time = 0)), this._easeType ? ((d = this._time / g), (1 === (u = this._easeType) || (3 === u && d >= 0.5)) && (d = 1 - d), 3 === u && (d *= 2), 1 === (c = this._easePower) ? (d *= d) : 2 === c ? (d *= d * d) : 3 === c ? (d *= d * d * d) : 4 === c && (d *= d * d * d * d), (this.ratio = 1 === u ? 1 - d : 2 === u ? d : this._time / g < 0.5 ? d / 2 : 1 - d / 2)) : (this.ratio = this._ease.getRatio(this._time / g))), f !== this._time || i || v !== this._cycle)) {
            if (!this._initted) {
              if ((this._init(), !this._initted || this._gc)) return;
              if (!i && this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration))) return (this._time = f), (this._totalTime = m), (this._rawPrevTime = y), (this._cycle = v), o.lazyTweens.push(this), void (this._lazy = [e, t]);
              this._time && !n ? (this.ratio = this._ease.getRatio(this._time / g)) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
            }
            for (!1 !== this._lazy && (this._lazy = !1), this._active || (!this._paused && this._time !== f && e >= 0 && (this._active = !0)), 0 === m && (2 === this._initted && e > 0 && this._init(), this._startAt && (e >= 0 ? this._startAt.render(e, t, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === g) && (t || this._callback("onStart"))), a = this._firstPT; a; ) a.f ? a.t[a.p](a.c * this.ratio + a.s) : (a.t[a.p] = a.c * this.ratio + a.s), (a = a._next);
            this._onUpdate && (0 > e && this._startAt && this._startTime && this._startAt.render(e, t, i), t || ((this._totalTime !== m || n) && this._callback("onUpdate"))), this._cycle !== v && (t || this._gc || (this.vars.onRepeat && this._callback("onRepeat"))), r && (!this._gc || i) && (0 > e && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)), !t && this.vars[r] && this._callback(r), 0 === g && this._rawPrevTime === s && p !== s && (this._rawPrevTime = 0));
          } else m !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate"));
        }),
        (a.to = function (e, t, i) {
          return new a(e, t, i);
        }),
        (a.from = function (e, t, i) {
          return (i.runBackwards = !0), (i.immediateRender = 0 != i.immediateRender), new a(e, t, i);
        }),
        (a.fromTo = function (e, t, i, n) {
          return (n.startAt = i), (n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender), new a(e, t, n);
        }),
        (a.staggerTo = a.allTo =
          function (e, t, s, o, u, p, h) {
            o = o || 0;
            var f,
              m,
              v,
              g,
              y = 0,
              w = [],
              b = function () {
                s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments), u.apply(h || s.callbackScope || this, p || c);
              },
              x = s.cycle,
              _ = s.startAt && s.startAt.cycle;
            for (d(e) || ("string" == typeof e && (e = i.selector(e) || e), l(e) && (e = n(e))), e = e || [], 0 > o && ((e = n(e)).reverse(), (o *= -1)), f = e.length - 1, v = 0; f >= v; v++) {
              for (g in ((m = {}), s)) m[g] = s[g];
              if ((x && r(m, e, v), _)) {
                for (g in ((_ = m.startAt = {}), s.startAt)) _[g] = s.startAt[g];
                r(m.startAt, e, v);
              }
              (m.delay = y + (m.delay || 0)), v === f && u && (m.onComplete = b), (w[v] = new a(e[v], t, m)), (y += o);
            }
            return w;
          }),
        (a.staggerFrom = a.allFrom =
          function (e, t, i, n, r, s, o) {
            return (i.runBackwards = !0), (i.immediateRender = 0 != i.immediateRender), a.staggerTo(e, t, i, n, r, s, o);
          }),
        (a.staggerFromTo = a.allFromTo =
          function (e, t, i, n, r, s, o, l) {
            return (n.startAt = i), (n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender), a.staggerTo(e, t, n, r, s, o, l);
          }),
        (a.delayedCall = function (e, t, i, n, r) {
          return new a(t, 0, { delay: e, onComplete: t, onCompleteParams: i, callbackScope: n, onReverseComplete: t, onReverseCompleteParams: i, immediateRender: !1, useFrames: r, overwrite: 0 });
        }),
        (a.set = function (e, t) {
          return new a(e, 0, t);
        }),
        (a.isTweening = function (e) {
          return i.getTweensOf(e, !0).length > 0;
        });
      var p = function (e, t) {
          for (var n = [], r = 0, a = e._first; a; ) a instanceof i ? (n[r++] = a) : (t && (n[r++] = a), (r = (n = n.concat(p(a, t))).length)), (a = a._next);
          return n;
        },
        h = (a.getAllTweens = function (t) {
          return p(e._rootTimeline, t).concat(p(e._rootFramesTimeline, t));
        });
      (a.killAll = function (e, i, n, r) {
        null == i && (i = !0), null == n && (n = !0);
        var a,
          s,
          o,
          l = h(0 != r),
          d = l.length,
          u = i && n && r;
        for (o = 0; d > o; o++) (s = l[o]), (u || s instanceof t || ((a = s.target === s.vars.onComplete) && n) || (i && !a)) && (e ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1));
      }),
        (a.killChildTweensOf = function (e, t) {
          if (null != e) {
            var r,
              s,
              u,
              c,
              p,
              h = o.tweenLookup;
            if (("string" == typeof e && (e = i.selector(e) || e), l(e) && (e = n(e)), d(e))) for (c = e.length; --c > -1; ) a.killChildTweensOf(e[c], t);
            else {
              for (u in ((r = []), h)) for (s = h[u].target.parentNode; s; ) s === e && (r = r.concat(h[u].tweens)), (s = s.parentNode);
              for (p = r.length, c = 0; p > c; c++) t && r[c].totalTime(r[c].totalDuration()), r[c]._enabled(!1, !1);
            }
          }
        });
      var f = function (e, i, n, r) {
        (i = !1 !== i), (n = !1 !== n);
        for (var a, s, o = h((r = !1 !== r)), l = i && n && r, d = o.length; --d > -1; ) (s = o[d]), (l || s instanceof t || ((a = s.target === s.vars.onComplete) && n) || (i && !a)) && s.paused(e);
      };
      return (
        (a.pauseAll = function (e, t, i) {
          f(!0, e, t, i);
        }),
        (a.resumeAll = function (e, t, i) {
          f(!1, e, t, i);
        }),
        (a.globalTimeScale = function (t) {
          var n = e._rootTimeline,
            r = i.ticker.time;
          return arguments.length ? ((n._startTime = r - ((r - n._startTime) * n._timeScale) / (t = t || s)), ((n = e._rootFramesTimeline)._startTime = (r = i.ticker.frame) - ((r - n._startTime) * n._timeScale) / t), (n._timeScale = e._rootTimeline._timeScale = t), t) : n._timeScale;
        }),
        (u.progress = function (e) {
          return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration();
        }),
        (u.totalProgress = function (e) {
          return arguments.length ? this.totalTime(this.totalDuration() * e, !1) : this._totalTime / this.totalDuration();
        }),
        (u.time = function (e, t) {
          return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 != (1 & this._cycle) ? (e = this._duration - e + this._cycle * (this._duration + this._repeatDelay)) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time;
        }),
        (u.duration = function (t) {
          return arguments.length ? e.prototype.duration.call(this, t) : this._duration;
        }),
        (u.totalDuration = function (e) {
          return arguments.length ? (-1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1))) : (this._dirty && ((this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), (this._dirty = !1)), this._totalDuration);
        }),
        (u.repeat = function (e) {
          return arguments.length ? ((this._repeat = e), this._uncache(!0)) : this._repeat;
        }),
        (u.repeatDelay = function (e) {
          return arguments.length ? ((this._repeatDelay = e), this._uncache(!0)) : this._repeatDelay;
        }),
        (u.yoyo = function (e) {
          return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
        }),
        a
      );
    },
    !0
  ),
    _gsScope._gsDefine(
      "TimelineLite",
      ["core.Animation", "core.SimpleTimeline", "TweenLite"],
      function (e, t, i) {
        var n = function (e) {
            t.call(this, e), (this._labels = {}), (this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren), (this.smoothChildTiming = !0 === this.vars.smoothChildTiming), (this._sortChildren = !0), (this._onUpdate = this.vars.onUpdate);
            var i,
              n,
              r = this.vars;
            for (n in r) l((i = r[n])) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
            l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger);
          },
          r = 1e-10,
          a = i._internals,
          s = (n._internals = {}),
          o = a.isSelector,
          l = a.isArray,
          d = a.lazyTweens,
          u = a.lazyRender,
          c = _gsScope._gsDefine.globals,
          p = function (e) {
            var t,
              i = {};
            for (t in e) i[t] = e[t];
            return i;
          },
          h = function (e, t, i) {
            var n,
              r,
              a = e.cycle;
            for (n in a) e[n] = "function" == typeof (r = a[n]) ? r.call(t[i], i) : r[i % r.length];
            delete e.cycle;
          },
          f = (s.pauseCallback = function () {}),
          m = function (e) {
            var t,
              i = [],
              n = e.length;
            for (t = 0; t !== n; i.push(e[t++]));
            return i;
          },
          v = (n.prototype = new t());
        return (
          (n.version = "1.18.2"),
          (v.constructor = n),
          (v.kill()._gc = v._forcingPlayhead = v._hasPause = !1),
          (v.to = function (e, t, n, r) {
            return t ? this.add(new ((n.repeat && c.TweenMax) || i)(e, t, n), r) : this.set(e, n, r);
          }),
          (v.from = function (e, t, n, r) {
            return this.add(((n.repeat && c.TweenMax) || i).from(e, t, n), r);
          }),
          (v.fromTo = function (e, t, n, r, a) {
            return t ? this.add(((r.repeat && c.TweenMax) || i).fromTo(e, t, n, r), a) : this.set(e, r, a);
          }),
          (v.staggerTo = function (e, t, r, a, s, l, d, u) {
            var c,
              f,
              v = new n({ onComplete: l, onCompleteParams: d, callbackScope: u, smoothChildTiming: this.smoothChildTiming }),
              g = r.cycle;
            for ("string" == typeof e && (e = i.selector(e) || e), o((e = e || [])) && (e = m(e)), 0 > (a = a || 0) && ((e = m(e)).reverse(), (a *= -1)), f = 0; f < e.length; f++) (c = p(r)).startAt && ((c.startAt = p(c.startAt)), c.startAt.cycle && h(c.startAt, e, f)), g && h(c, e, f), v.to(e[f], t, c, f * a);
            return this.add(v, s);
          }),
          (v.staggerFrom = function (e, t, i, n, r, a, s, o) {
            return (i.immediateRender = 0 != i.immediateRender), (i.runBackwards = !0), this.staggerTo(e, t, i, n, r, a, s, o);
          }),
          (v.staggerFromTo = function (e, t, i, n, r, a, s, o, l) {
            return (n.startAt = i), (n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender), this.staggerTo(e, t, n, r, a, s, o, l);
          }),
          (v.call = function (e, t, n, r) {
            return this.add(i.delayedCall(0, e, t, n), r);
          }),
          (v.set = function (e, t, n) {
            return (n = this._parseTimeOrLabel(n, 0, !0)), null == t.immediateRender && (t.immediateRender = n === this._time && !this._paused), this.add(new i(e, 0, t), n);
          }),
          (n.exportRoot = function (e, t) {
            null == (e = e || {}).smoothChildTiming && (e.smoothChildTiming = !0);
            var r,
              a,
              s = new n(e),
              o = s._timeline;
            for (null == t && (t = !0), o._remove(s, !0), s._startTime = 0, s._rawPrevTime = s._time = s._totalTime = o._time, r = o._first; r; ) (a = r._next), (t && r instanceof i && r.target === r.vars.onComplete) || s.add(r, r._startTime - r._delay), (r = a);
            return o.add(s, 0), s;
          }),
          (v.add = function (r, a, s, o) {
            var d, u, c, p, h, f;
            if (("number" != typeof a && (a = this._parseTimeOrLabel(a, 0, !0, r)), !(r instanceof e))) {
              if (r instanceof Array || (r && r.push && l(r))) {
                for (s = s || "normal", o = o || 0, d = a, u = r.length, c = 0; u > c; c++) l((p = r[c])) && (p = new n({ tweens: p })), this.add(p, d), "string" != typeof p && "function" != typeof p && ("sequence" === s ? (d = p._startTime + p.totalDuration() / p._timeScale) : "start" === s && (p._startTime -= p.delay())), (d += o);
                return this._uncache(!0);
              }
              if ("string" == typeof r) return this.addLabel(r, a);
              if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
              r = i.delayedCall(0, r);
            }
            if ((t.prototype.add.call(this, r, a), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())) for (f = (h = this).rawTime() > r._startTime; h._timeline; ) f && h._timeline.smoothChildTiming ? h.totalTime(h._totalTime, !0) : h._gc && h._enabled(!0, !1), (h = h._timeline);
            return this;
          }),
          (v.remove = function (t) {
            if (t instanceof e) {
              this._remove(t, !1);
              var i = (t._timeline = t.vars.useFrames ? e._rootFramesTimeline : e._rootTimeline);
              return (t._startTime = (t._paused ? t._pauseTime : i._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale), this;
            }
            if (t instanceof Array || (t && t.push && l(t))) {
              for (var n = t.length; --n > -1; ) this.remove(t[n]);
              return this;
            }
            return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t);
          }),
          (v._remove = function (e, i) {
            t.prototype._remove.call(this, e, i);
            var n = this._last;
            return n ? this._time > n._startTime + n._totalDuration / n._timeScale && ((this._time = this.duration()), (this._totalTime = this._totalDuration)) : (this._time = this._totalTime = this._duration = this._totalDuration = 0), this;
          }),
          (v.append = function (e, t) {
            return this.add(e, this._parseTimeOrLabel(null, t, !0, e));
          }),
          (v.insert = v.insertMultiple =
            function (e, t, i, n) {
              return this.add(e, t || 0, i, n);
            }),
          (v.appendMultiple = function (e, t, i, n) {
            return this.add(e, this._parseTimeOrLabel(null, t, !0, e), i, n);
          }),
          (v.addLabel = function (e, t) {
            return (this._labels[e] = this._parseTimeOrLabel(t)), this;
          }),
          (v.addPause = function (e, t, n, r) {
            var a = i.delayedCall(0, f, n, r || this);
            return (a.vars.onComplete = a.vars.onReverseComplete = t), (a.data = "isPause"), (this._hasPause = !0), this.add(a, e);
          }),
          (v.removeLabel = function (e) {
            return delete this._labels[e], this;
          }),
          (v.getLabelTime = function (e) {
            return null != this._labels[e] ? this._labels[e] : -1;
          }),
          (v._parseTimeOrLabel = function (t, i, n, r) {
            var a;
            if (r instanceof e && r.timeline === this) this.remove(r);
            else if (r && (r instanceof Array || (r.push && l(r)))) for (a = r.length; --a > -1; ) r[a] instanceof e && r[a].timeline === this && this.remove(r[a]);
            if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof t && null == this._labels[i] ? t - this.duration() : 0, n);
            if (((i = i || 0), "string" != typeof t || (!isNaN(t) && null == this._labels[t]))) null == t && (t = this.duration());
            else {
              if (-1 === (a = t.indexOf("="))) return null == this._labels[t] ? (n ? (this._labels[t] = this.duration() + i) : i) : this._labels[t] + i;
              (i = parseInt(t.charAt(a - 1) + "1", 10) * Number(t.substr(a + 1))), (t = a > 1 ? this._parseTimeOrLabel(t.substr(0, a - 1), 0, n) : this.duration());
            }
            return Number(t) + i;
          }),
          (v.seek = function (e, t) {
            return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), !1 !== t);
          }),
          (v.stop = function () {
            return this.paused(!0);
          }),
          (v.gotoAndPlay = function (e, t) {
            return this.play(e, t);
          }),
          (v.gotoAndStop = function (e, t) {
            return this.pause(e, t);
          }),
          (v.render = function (e, t, i) {
            this._gc && this._enabled(!0, !1);
            var n,
              a,
              s,
              o,
              l,
              c,
              p,
              h = this._dirty ? this.totalDuration() : this._totalDuration,
              f = this._time,
              m = this._startTime,
              v = this._timeScale,
              g = this._paused;
            if (e >= h - 1e-7) (this._totalTime = this._time = h), this._reversed || this._hasPausedChild() || ((a = !0), (o = "onComplete"), (l = !!this._timeline.autoRemoveChildren), 0 === this._duration && ((0 >= e && e >= -1e-7) || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== e && this._first && ((l = !0), this._rawPrevTime > r && (o = "onReverseComplete"))), (this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : r), (e = h + 1e-4);
            else if (1e-7 > e)
              if (((this._totalTime = this._time = 0), (0 !== f || (0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || (0 > e && this._rawPrevTime >= 0)))) && ((o = "onReverseComplete"), (a = this._reversed)), 0 > e)) (this._active = !1), this._timeline.autoRemoveChildren && this._reversed ? ((l = a = !0), (o = "onReverseComplete")) : this._rawPrevTime >= 0 && this._first && (l = !0), (this._rawPrevTime = e);
              else {
                if (((this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : r), 0 === e && a)) for (n = this._first; n && 0 === n._startTime; ) n._duration || (a = !1), (n = n._next);
                (e = 0), this._initted || (l = !0);
              }
            else {
              if (this._hasPause && !this._forcingPlayhead && !t) {
                if (e >= f) for (n = this._first; n && n._startTime <= e && !c; ) n._duration || "isPause" !== n.data || n.ratio || (0 === n._startTime && 0 === this._rawPrevTime) || (c = n), (n = n._next);
                else for (n = this._last; n && n._startTime >= e && !c; ) n._duration || ("isPause" === n.data && n._rawPrevTime > 0 && (c = n)), (n = n._prev);
                c && ((this._time = e = c._startTime), (this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay)));
              }
              this._totalTime = this._time = this._rawPrevTime = e;
            }
            if ((this._time !== f && this._first) || i || l || c) {
              if ((this._initted || (this._initted = !0), this._active || (!this._paused && this._time !== f && e > 0 && (this._active = !0)), 0 === f && this.vars.onStart && 0 !== this._time && (t || this._callback("onStart")), (p = this._time) >= f)) for (n = this._first; n && ((s = n._next), p === this._time && (!this._paused || g)); ) (n._active || (n._startTime <= p && !n._paused && !n._gc)) && (c === n && this.pause(), n.render(n._reversed ? (n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale : (e - n._startTime) * n._timeScale, t, i)), (n = s);
              else
                for (n = this._last; n && ((s = n._prev), p === this._time && (!this._paused || g)); ) {
                  if (n._active || (n._startTime <= f && !n._paused && !n._gc)) {
                    if (c === n) {
                      for (c = n._prev; c && c.endTime() > this._time; ) c.render(c._reversed ? c.totalDuration() - (e - c._startTime) * c._timeScale : (e - c._startTime) * c._timeScale, t, i), (c = c._prev);
                      (c = null), this.pause();
                    }
                    n.render(n._reversed ? (n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale : (e - n._startTime) * n._timeScale, t, i);
                  }
                  n = s;
                }
              this._onUpdate && (t || (d.length && u(), this._callback("onUpdate"))), o && (this._gc || ((m === this._startTime || v !== this._timeScale) && (0 === this._time || h >= this.totalDuration()) && (a && (d.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)), !t && this.vars[o] && this._callback(o))));
            }
          }),
          (v._hasPausedChild = function () {
            for (var e = this._first; e; ) {
              if (e._paused || (e instanceof n && e._hasPausedChild())) return !0;
              e = e._next;
            }
            return !1;
          }),
          (v.getChildren = function (e, t, n, r) {
            r = r || -9999999999;
            for (var a = [], s = this._first, o = 0; s; ) s._startTime < r || (s instanceof i ? !1 !== t && (a[o++] = s) : (!1 !== n && (a[o++] = s), !1 !== e && (o = (a = a.concat(s.getChildren(!0, t, n))).length))), (s = s._next);
            return a;
          }),
          (v.getTweensOf = function (e, t) {
            var n,
              r,
              a = this._gc,
              s = [],
              o = 0;
            for (a && this._enabled(!0, !0), r = (n = i.getTweensOf(e)).length; --r > -1; ) (n[r].timeline === this || (t && this._contains(n[r]))) && (s[o++] = n[r]);
            return a && this._enabled(!1, !0), s;
          }),
          (v.recent = function () {
            return this._recent;
          }),
          (v._contains = function (e) {
            for (var t = e.timeline; t; ) {
              if (t === this) return !0;
              t = t.timeline;
            }
            return !1;
          }),
          (v.shiftChildren = function (e, t, i) {
            i = i || 0;
            for (var n, r = this._first, a = this._labels; r; ) r._startTime >= i && (r._startTime += e), (r = r._next);
            if (t) for (n in a) a[n] >= i && (a[n] += e);
            return this._uncache(!0);
          }),
          (v._kill = function (e, t) {
            if (!e && !t) return this._enabled(!1, !1);
            for (var i = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1; ) i[n]._kill(e, t) && (r = !0);
            return r;
          }),
          (v.clear = function (e) {
            var t = this.getChildren(!1, !0, !0),
              i = t.length;
            for (this._time = this._totalTime = 0; --i > -1; ) t[i]._enabled(!1, !1);
            return !1 !== e && (this._labels = {}), this._uncache(!0);
          }),
          (v.invalidate = function () {
            for (var t = this._first; t; ) t.invalidate(), (t = t._next);
            return e.prototype.invalidate.call(this);
          }),
          (v._enabled = function (e, i) {
            if (e === this._gc) for (var n = this._first; n; ) n._enabled(e, !0), (n = n._next);
            return t.prototype._enabled.call(this, e, i);
          }),
          (v.totalTime = function (t, i, n) {
            this._forcingPlayhead = !0;
            var r = e.prototype.totalTime.apply(this, arguments);
            return (this._forcingPlayhead = !1), r;
          }),
          (v.duration = function (e) {
            return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration);
          }),
          (v.totalDuration = function (e) {
            if (!arguments.length) {
              if (this._dirty) {
                for (var t, i, n = 0, r = this._last, a = 999999999999; r; ) (t = r._prev), r._dirty && r.totalDuration(), r._startTime > a && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : (a = r._startTime), r._startTime < 0 && !r._paused && ((n -= r._startTime), this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), (a = 0)), (i = r._startTime + r._totalDuration / r._timeScale) > n && (n = i), (r = t);
                (this._duration = this._totalDuration = n), (this._dirty = !1);
              }
              return this._totalDuration;
            }
            return e && this.totalDuration() ? this.timeScale(this._totalDuration / e) : this;
          }),
          (v.paused = function (t) {
            if (!t) for (var i = this._first, n = this._time; i; ) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), (i = i._next);
            return e.prototype.paused.apply(this, arguments);
          }),
          (v.usesFrames = function () {
            for (var t = this._timeline; t._timeline; ) t = t._timeline;
            return t === e._rootFramesTimeline;
          }),
          (v.rawTime = function () {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale;
          }),
          n
        );
      },
      !0
    ),
    _gsScope._gsDefine(
      "TimelineMax",
      ["TimelineLite", "TweenLite", "easing.Ease"],
      function (e, t, i) {
        var n = function (t) {
            e.call(this, t), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), (this._cycle = 0), (this._yoyo = !0 === this.vars.yoyo), (this._dirty = !0);
          },
          r = 1e-10,
          a = t._internals,
          s = a.lazyTweens,
          o = a.lazyRender,
          l = new i(null, null, 1, 0),
          d = (n.prototype = new e());
        return (
          (d.constructor = n),
          (d.kill()._gc = !1),
          (n.version = "1.18.2"),
          (d.invalidate = function () {
            return (this._yoyo = !0 === this.vars.yoyo), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), this._uncache(!0), e.prototype.invalidate.call(this);
          }),
          (d.addCallback = function (e, i, n, r) {
            return this.add(t.delayedCall(0, e, n, r), i);
          }),
          (d.removeCallback = function (e, t) {
            if (e)
              if (null == t) this._kill(null, e);
              else for (var i = this.getTweensOf(e, !1), n = i.length, r = this._parseTimeOrLabel(t); --n > -1; ) i[n]._startTime === r && i[n]._enabled(!1, !1);
            return this;
          }),
          (d.removePause = function (t) {
            return this.removeCallback(e._internals.pauseCallback, t);
          }),
          (d.tweenTo = function (e, i) {
            i = i || {};
            var n,
              r,
              a,
              s = { ease: l, useFrames: this.usesFrames(), immediateRender: !1 };
            for (r in i) s[r] = i[r];
            return (
              (s.time = this._parseTimeOrLabel(e)),
              (n = Math.abs(Number(s.time) - this._time) / this._timeScale || 0.001),
              (a = new t(this, n, s)),
              (s.onStart = function () {
                a.target.paused(!0), a.vars.time !== a.target.time() && n === a.duration() && a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale), i.onStart && a._callback("onStart");
              }),
              a
            );
          }),
          (d.tweenFromTo = function (e, t, i) {
            (i = i || {}), (e = this._parseTimeOrLabel(e)), (i.startAt = { onComplete: this.seek, onCompleteParams: [e], callbackScope: this }), (i.immediateRender = !1 !== i.immediateRender);
            var n = this.tweenTo(t, i);
            return n.duration(Math.abs(n.vars.time - e) / this._timeScale || 0.001);
          }),
          (d.render = function (e, t, i) {
            this._gc && this._enabled(!0, !1);
            var n,
              a,
              l,
              d,
              u,
              c,
              p,
              h,
              f = this._dirty ? this.totalDuration() : this._totalDuration,
              m = this._duration,
              v = this._time,
              g = this._totalTime,
              y = this._startTime,
              w = this._timeScale,
              b = this._rawPrevTime,
              x = this._paused,
              _ = this._cycle;
            if (e >= f - 1e-7) this._locked || ((this._totalTime = f), (this._cycle = this._repeat)), this._reversed || this._hasPausedChild() || ((a = !0), (d = "onComplete"), (u = !!this._timeline.autoRemoveChildren), 0 === this._duration && ((0 >= e && e >= -1e-7) || 0 > b || b === r) && b !== e && this._first && ((u = !0), b > r && (d = "onReverseComplete"))), (this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : r), this._yoyo && 0 != (1 & this._cycle) ? (this._time = e = 0) : ((this._time = m), (e = m + 1e-4));
            else if (1e-7 > e)
              if ((this._locked || (this._totalTime = this._cycle = 0), (this._time = 0), (0 !== v || (0 === m && b !== r && (b > 0 || (0 > e && b >= 0)) && !this._locked)) && ((d = "onReverseComplete"), (a = this._reversed)), 0 > e)) (this._active = !1), this._timeline.autoRemoveChildren && this._reversed ? ((u = a = !0), (d = "onReverseComplete")) : b >= 0 && this._first && (u = !0), (this._rawPrevTime = e);
              else {
                if (((this._rawPrevTime = m || !t || e || this._rawPrevTime === e ? e : r), 0 === e && a)) for (n = this._first; n && 0 === n._startTime; ) n._duration || (a = !1), (n = n._next);
                (e = 0), this._initted || (u = !0);
              }
            else if ((0 === m && 0 > b && (u = !0), (this._time = this._rawPrevTime = e), this._locked || ((this._totalTime = e), 0 !== this._repeat && ((this._cycle = (this._totalTime / (c = m + this._repeatDelay)) >> 0), 0 !== this._cycle && this._cycle === this._totalTime / c && this._cycle--, (this._time = this._totalTime - this._cycle * c), this._yoyo && 0 != (1 & this._cycle) && (this._time = m - this._time), this._time > m ? ((this._time = m), (e = m + 1e-4)) : this._time < 0 ? (this._time = e = 0) : (e = this._time))), this._hasPause && !this._forcingPlayhead && !t)) {
              if ((e = this._time) >= v) for (n = this._first; n && n._startTime <= e && !p; ) n._duration || "isPause" !== n.data || n.ratio || (0 === n._startTime && 0 === this._rawPrevTime) || (p = n), (n = n._next);
              else for (n = this._last; n && n._startTime >= e && !p; ) n._duration || ("isPause" === n.data && n._rawPrevTime > 0 && (p = n)), (n = n._prev);
              p && ((this._time = e = p._startTime), (this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay)));
            }
            if (this._cycle !== _ && !this._locked) {
              var T = this._yoyo && 0 != (1 & _),
                S = T === (this._yoyo && 0 != (1 & this._cycle)),
                C = this._totalTime,
                E = this._cycle,
                M = this._rawPrevTime,
                P = this._time;
              if (((this._totalTime = _ * m), this._cycle < _ ? (T = !T) : (this._totalTime += m), (this._time = v), (this._rawPrevTime = 0 === m ? b - 1e-4 : b), (this._cycle = _), (this._locked = !0), this.render((v = T ? 0 : m), t, 0 === m), t || this._gc || (this.vars.onRepeat && this._callback("onRepeat")), v !== this._time)) return;
              if ((S && this.render((v = T ? m + 1e-4 : -1e-4), !0, !1), (this._locked = !1), this._paused && !x)) return;
              (this._time = P), (this._totalTime = C), (this._cycle = E), (this._rawPrevTime = M);
            }
            if ((this._time !== v && this._first) || i || u || p) {
              if ((this._initted || (this._initted = !0), this._active || (!this._paused && this._totalTime !== g && e > 0 && (this._active = !0)), 0 === g && this.vars.onStart && 0 !== this._totalTime && (t || this._callback("onStart")), (h = this._time) >= v)) for (n = this._first; n && ((l = n._next), h === this._time && (!this._paused || x)); ) (n._active || (n._startTime <= this._time && !n._paused && !n._gc)) && (p === n && this.pause(), n.render(n._reversed ? (n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale : (e - n._startTime) * n._timeScale, t, i)), (n = l);
              else
                for (n = this._last; n && ((l = n._prev), h === this._time && (!this._paused || x)); ) {
                  if (n._active || (n._startTime <= v && !n._paused && !n._gc)) {
                    if (p === n) {
                      for (p = n._prev; p && p.endTime() > this._time; ) p.render(p._reversed ? p.totalDuration() - (e - p._startTime) * p._timeScale : (e - p._startTime) * p._timeScale, t, i), (p = p._prev);
                      (p = null), this.pause();
                    }
                    n.render(n._reversed ? (n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale : (e - n._startTime) * n._timeScale, t, i);
                  }
                  n = l;
                }
              this._onUpdate && (t || (s.length && o(), this._callback("onUpdate"))), d && (this._locked || this._gc || ((y === this._startTime || w !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (a && (s.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)), !t && this.vars[d] && this._callback(d))));
            } else g !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate"));
          }),
          (d.getActive = function (e, t, i) {
            null == e && (e = !0), null == t && (t = !0), null == i && (i = !1);
            var n,
              r,
              a = [],
              s = this.getChildren(e, t, i),
              o = 0,
              l = s.length;
            for (n = 0; l > n; n++) (r = s[n]).isActive() && (a[o++] = r);
            return a;
          }),
          (d.getLabelAfter = function (e) {
            e || (0 !== e && (e = this._time));
            var t,
              i = this.getLabelsArray(),
              n = i.length;
            for (t = 0; n > t; t++) if (i[t].time > e) return i[t].name;
            return null;
          }),
          (d.getLabelBefore = function (e) {
            null == e && (e = this._time);
            for (var t = this.getLabelsArray(), i = t.length; --i > -1; ) if (t[i].time < e) return t[i].name;
            return null;
          }),
          (d.getLabelsArray = function () {
            var e,
              t = [],
              i = 0;
            for (e in this._labels) t[i++] = { time: this._labels[e], name: e };
            return (
              t.sort(function (e, t) {
                return e.time - t.time;
              }),
              t
            );
          }),
          (d.progress = function (e, t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration();
          }),
          (d.totalProgress = function (e, t) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration();
          }),
          (d.totalDuration = function (t) {
            return arguments.length ? (-1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this) : (this._dirty && (e.prototype.totalDuration.call(this), (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat)), this._totalDuration);
          }),
          (d.time = function (e, t) {
            return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 != (1 & this._cycle) ? (e = this._duration - e + this._cycle * (this._duration + this._repeatDelay)) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time;
          }),
          (d.repeat = function (e) {
            return arguments.length ? ((this._repeat = e), this._uncache(!0)) : this._repeat;
          }),
          (d.repeatDelay = function (e) {
            return arguments.length ? ((this._repeatDelay = e), this._uncache(!0)) : this._repeatDelay;
          }),
          (d.yoyo = function (e) {
            return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
          }),
          (d.currentLabel = function (e) {
            return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8);
          }),
          n
        );
      },
      !0
    ),
    (e = 180 / Math.PI),
    (t = []),
    (i = []),
    (n = []),
    (r = {}),
    (a = _gsScope._gsDefine.globals),
    (s = function (e, t, i, n) {
      (this.a = e), (this.b = t), (this.c = i), (this.d = n), (this.da = n - e), (this.ca = i - e), (this.ba = t - e);
    }),
    (o = function (e, t, i, n) {
      var r = { a: e },
        a = {},
        s = {},
        o = { c: n },
        l = (e + t) / 2,
        d = (t + i) / 2,
        u = (i + n) / 2,
        c = (l + d) / 2,
        p = (d + u) / 2,
        h = (p - c) / 8;
      return (r.b = l + (e - l) / 4), (a.b = c + h), (r.c = a.a = (r.b + a.b) / 2), (a.c = s.a = (c + p) / 2), (s.b = p - h), (o.b = u + (n - u) / 4), (s.c = o.a = (s.b + o.b) / 2), [r, a, s, o];
    }),
    (l = function (e, r, a, s, l) {
      var d,
        u,
        c,
        p,
        h,
        f,
        m,
        v,
        g,
        y,
        w,
        b,
        x,
        _ = e.length - 1,
        T = 0,
        S = e[0].a;
      for (d = 0; _ > d; d++) (u = (h = e[T]).a), (c = h.d), (p = e[T + 1].d), l ? ((x = (((b = i[d]) + (w = t[d])) * r * 0.25) / (s ? 0.5 : n[d] || 0.5)), (v = c - ((f = c - (c - u) * (s ? 0.5 * r : 0 !== w ? x / w : 0)) + ((((m = c + (p - c) * (s ? 0.5 * r : 0 !== b ? x / b : 0)) - f) * ((3 * w) / (w + b) + 0.5)) / 4 || 0)))) : (v = c - ((f = c - (c - u) * r * 0.5) + (m = c + (p - c) * r * 0.5)) / 2), (m += v), (h.c = g = f += v), (h.b = 0 !== d ? S : (S = h.a + 0.6 * (h.c - h.a))), (h.da = c - u), (h.ca = g - u), (h.ba = S - u), a ? ((y = o(u, S, g, c)), e.splice(T, 1, y[0], y[1], y[2], y[3]), (T += 4)) : T++, (S = m);
      ((h = e[T]).b = S), (h.c = S + 0.4 * (h.d - S)), (h.da = h.d - h.a), (h.ca = h.c - h.a), (h.ba = S - h.a), a && ((y = o(h.a, S, h.c, h.d)), e.splice(T, 1, y[0], y[1], y[2], y[3]));
    }),
    (d = function (e, n, r, a) {
      var o,
        l,
        d,
        u,
        c,
        p,
        h = [];
      if (a) for (l = (e = [a].concat(e)).length; --l > -1; ) "string" == typeof (p = e[l][n]) && "=" === p.charAt(1) && (e[l][n] = a[n] + Number(p.charAt(0) + p.substr(2)));
      if (0 > (o = e.length - 2)) return (h[0] = new s(e[0][n], 0, 0, e[-1 > o ? 0 : 1][n])), h;
      for (l = 0; o > l; l++) (h[l] = new s((d = e[l][n]), 0, 0, (u = e[l + 1][n]))), r && ((c = e[l + 2][n]), (t[l] = (t[l] || 0) + (u - d) * (u - d)), (i[l] = (i[l] || 0) + (c - u) * (c - u)));
      return (h[l] = new s(e[l][n], 0, 0, e[l + 1][n])), h;
    }),
    (u = function (e, a, s, o, u, c) {
      var p,
        h,
        f,
        m,
        v,
        g,
        y,
        w,
        b = {},
        x = [],
        _ = c || e[0];
      for (h in ((u = "string" == typeof u ? "," + u + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"), null == a && (a = 1), e[0])) x.push(h);
      if (e.length > 1) {
        for (w = e[e.length - 1], y = !0, p = x.length; --p > -1; )
          if (((h = x[p]), Math.abs(_[h] - w[h]) > 0.05)) {
            y = !1;
            break;
          }
        y && ((e = e.concat()), c && e.unshift(c), e.push(e[1]), (c = e[e.length - 3]));
      }
      for (t.length = i.length = n.length = 0, p = x.length; --p > -1; ) (r[(h = x[p])] = -1 !== u.indexOf("," + h + ",")), (b[h] = d(e, h, r[h], c));
      for (p = t.length; --p > -1; ) (t[p] = Math.sqrt(t[p])), (i[p] = Math.sqrt(i[p]));
      if (!o) {
        for (p = x.length; --p > -1; ) if (r[h]) for (g = (f = b[x[p]]).length - 1, m = 0; g > m; m++) n[m] = (n[m] || 0) + (v = f[m + 1].da / i[m] + f[m].da / t[m]) * v;
        for (p = n.length; --p > -1; ) n[p] = Math.sqrt(n[p]);
      }
      for (p = x.length, m = s ? 4 : 1; --p > -1; ) l((f = b[(h = x[p])]), a, s, o, r[h]), y && (f.splice(0, m), f.splice(f.length - m, m));
      return b;
    }),
    (c = function (e, t, i) {
      var n,
        r,
        a,
        o,
        l,
        d,
        u,
        c,
        p,
        h,
        f = {},
        m = "cubic" === (t = t || "soft") ? 3 : 2,
        v = "soft" === t,
        g = [];
      if ((v && i && (e = [i].concat(e)), null == e || e.length < m + 1)) throw "invalid Bezier data";
      for (c in e[0]) g.push(c);
      for (l = g.length; --l > -1; ) {
        for (f[(c = g[l])] = o = [], p = 0, u = e.length, d = 0; u > d; d++) (n = null == i ? e[d][c] : "string" == typeof (h = e[d][c]) && "=" === h.charAt(1) ? i[c] + Number(h.charAt(0) + h.substr(2)) : Number(h)), v && d > 1 && u - 1 > d && (o[p++] = (n + o[p - 2]) / 2), (o[p++] = n);
        for (u = p - m + 1, p = 0, d = 0; u > d; d += m) (n = o[d]), (r = o[d + 1]), (a = o[d + 2]), (o[p++] = h = 3 === m ? new s(n, r, a, 2 === m ? 0 : o[d + 3]) : new s(n, (2 * r + n) / 3, (2 * r + a) / 3, a));
        o.length = p;
      }
      return f;
    }),
    (p = function (e, t, i) {
      for (var n, r, a, s, o, l, d, u, c, p, h, f = 1 / i, m = e.length; --m > -1; ) for (s = (p = e[m]).d - (a = p.a), o = p.c - a, l = p.b - a, n = r = 0, u = 1; i >= u; u++) (n = r - (r = ((d = f * u) * d * s + 3 * (c = 1 - d) * (d * o + c * l)) * d)), (t[(h = m * i + u - 1)] = (t[h] || 0) + n * n);
    }),
    (h = function (e, t) {
      var i,
        n,
        r,
        a,
        s = [],
        o = [],
        l = 0,
        d = 0,
        u = (t = t >> 0 || 6) - 1,
        c = [],
        h = [];
      for (i in e) p(e[i], s, t);
      for (r = s.length, n = 0; r > n; n++) (l += Math.sqrt(s[n])), (h[(a = n % t)] = l), a === u && ((d += l), (c[(a = (n / t) >> 0)] = h), (o[a] = d), (l = 0), (h = []));
      return { length: d, lengths: o, segments: c };
    }),
    (f = _gsScope._gsDefine.plugin({
      propName: "bezier",
      priority: -1,
      version: "1.3.4",
      API: 2,
      global: !0,
      init: function (e, t, i) {
        (this._target = e), t instanceof Array && (t = { values: t }), (this._func = {}), (this._round = {}), (this._props = []), (this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10));
        var n,
          r,
          a,
          s,
          o,
          l = t.values || [],
          d = {},
          p = l[0],
          f = t.autoRotate || i.vars.orientToBezier;
        for (n in ((this._autoRotate = f ? (f instanceof Array ? f : [["x", "y", "rotation", !0 === f ? 0 : Number(f) || 0]]) : null), p)) this._props.push(n);
        for (a = this._props.length; --a > -1; ) this._overwriteProps.push((n = this._props[a])), (r = this._func[n] = "function" == typeof e[n]), (d[n] = r ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n])), o || (d[n] !== l[0][n] && (o = d));
        if (((this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? u(l, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, o) : c(l, t.type, d)), (this._segCount = this._beziers[n].length), this._timeRes)) {
          var m = h(this._beziers, this._timeRes);
          (this._length = m.length), (this._lengths = m.lengths), (this._segments = m.segments), (this._l1 = this._li = this._s1 = this._si = 0), (this._l2 = this._lengths[0]), (this._curSeg = this._segments[0]), (this._s2 = this._curSeg[0]), (this._prec = 1 / this._curSeg.length);
        }
        if ((f = this._autoRotate))
          for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), a = f.length; --a > -1; ) {
            for (s = 0; 3 > s; s++) this._func[(n = f[a][s])] = "function" == typeof e[n] && e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)];
            this._initialRotations[a] = this._func[(n = f[a][2])] ? this._func[n].call(this._target) : this._target[n];
          }
        return (this._startRatio = i.vars.runBackwards ? 1 : 0), !0;
      },
      set: function (t) {
        var i,
          n,
          r,
          a,
          s,
          o,
          l,
          d,
          u,
          c,
          p = this._segCount,
          h = this._func,
          f = this._target,
          m = t !== this._startRatio;
        if (this._timeRes) {
          if (((u = this._lengths), (c = this._curSeg), (r = this._li), (t *= this._length) > this._l2 && p - 1 > r)) {
            for (d = p - 1; d > r && (this._l2 = u[++r]) <= t; );
            (this._l1 = u[r - 1]), (this._li = r), (this._curSeg = c = this._segments[r]), (this._s2 = c[(this._s1 = this._si = 0)]);
          } else if (t < this._l1 && r > 0) {
            for (; r > 0 && (this._l1 = u[--r]) >= t; );
            0 === r && t < this._l1 ? (this._l1 = 0) : r++, (this._l2 = u[r]), (this._li = r), (this._curSeg = c = this._segments[r]), (this._s1 = c[(this._si = c.length - 1) - 1] || 0), (this._s2 = c[this._si]);
          }
          if (((i = r), (r = this._si), (t -= this._l1) > this._s2 && r < c.length - 1)) {
            for (d = c.length - 1; d > r && (this._s2 = c[++r]) <= t; );
            (this._s1 = c[r - 1]), (this._si = r);
          } else if (t < this._s1 && r > 0) {
            for (; r > 0 && (this._s1 = c[--r]) >= t; );
            0 === r && t < this._s1 ? (this._s1 = 0) : r++, (this._s2 = c[r]), (this._si = r);
          }
          o = (r + (t - this._s1) / (this._s2 - this._s1)) * this._prec;
        } else o = (t - (i = 0 > t ? 0 : t >= 1 ? p - 1 : (p * t) >> 0) * (1 / p)) * p;
        for (n = 1 - o, r = this._props.length; --r > -1; ) (l = (o * o * (s = this._beziers[(a = this._props[r])][i]).da + 3 * n * (o * s.ca + n * s.ba)) * o + s.a), this._round[a] && (l = Math.round(l)), h[a] ? f[a](l) : (f[a] = l);
        if (this._autoRotate) {
          var v,
            g,
            y,
            w,
            b,
            x,
            _,
            T = this._autoRotate;
          for (r = T.length; --r > -1; ) (a = T[r][2]), (x = T[r][3] || 0), (_ = !0 === T[r][4] ? 1 : e), (v = this._beziers[T[r][1]]), (s = this._beziers[T[r][0]]) && v && ((g = (s = s[i]).a + (s.b - s.a) * o), (g += ((w = s.b + (s.c - s.b) * o) - g) * o), (w += (s.c + (s.d - s.c) * o - w) * o), (y = (v = v[i]).a + (v.b - v.a) * o), (y += ((b = v.b + (v.c - v.b) * o) - y) * o), (b += (v.c + (v.d - v.c) * o - b) * o), (l = m ? Math.atan2(b - y, w - g) * _ + x : this._initialRotations[r]), h[a] ? f[a](l) : (f[a] = l));
        }
      },
    })),
    (m = f.prototype),
    (f.bezierThrough = u),
    (f.cubicToQuadratic = o),
    (f._autoCSS = !0),
    (f.quadraticToCubic = function (e, t, i) {
      return new s(e, (2 * t + e) / 3, (2 * t + i) / 3, i);
    }),
    (f._cssRegister = function () {
      var e = a.CSSPlugin;
      if (e) {
        var t = e._internals,
          i = t._parseToProxy,
          n = t._setPluginRatio,
          r = t.CSSPropTween;
        t._registerComplexSpecialProp("bezier", {
          parser: function (e, t, a, s, o, l) {
            t instanceof Array && (t = { values: t }), (l = new f());
            var d,
              u,
              c,
              p = t.values,
              h = p.length - 1,
              m = [],
              v = {};
            if (0 > h) return o;
            for (d = 0; h >= d; d++) (c = i(e, p[d], s, o, l, h !== d)), (m[d] = c.end);
            for (u in t) v[u] = t[u];
            return (v.values = m), ((o = new r(e, "bezier", 0, 0, c.pt, 2)).data = c), (o.plugin = l), (o.setRatio = n), 0 === v.autoRotate && (v.autoRotate = !0), !v.autoRotate || v.autoRotate instanceof Array || ((d = !0 === v.autoRotate ? 0 : Number(v.autoRotate)), (v.autoRotate = null != c.end.left ? [["left", "top", "rotation", d, !1]] : null != c.end.x && [["x", "y", "rotation", d, !1]])), v.autoRotate && (s._transform || s._enableTransforms(!1), (c.autoRotate = s._target._gsTransform)), l._onInitTween(c.proxy, v, s._tween), o;
          },
        });
      }
    }),
    (m._roundProps = function (e, t) {
      for (var i = this._overwriteProps, n = i.length; --n > -1; ) (e[i[n]] || e.bezier || e.bezierThrough) && (this._round[i[n]] = t);
    }),
    (m._kill = function (e) {
      var t,
        i,
        n = this._props;
      for (t in this._beziers) if (t in e) for (delete this._beziers[t], delete this._func[t], i = n.length; --i > -1; ) n[i] === t && n.splice(i, 1);
      return this._super._kill.call(this, e);
    }),
    _gsScope._gsDefine(
      "plugins.CSSPlugin",
      ["plugins.TweenPlugin", "TweenLite"],
      function (e, t) {
        var i,
          n,
          r,
          a,
          s = function () {
            e.call(this, "css"), (this._overwriteProps.length = 0), (this.setRatio = s.prototype.setRatio);
          },
          o = _gsScope._gsDefine.globals,
          l = {},
          d = (s.prototype = new e("css"));
        (d.constructor = s), (s.version = "1.18.2"), (s.API = 2), (s.defaultTransformPerspective = 0), (s.defaultSkewType = "compensated"), (s.defaultSmoothOrigin = !0), (s.suffixMap = { top: (d = "px"), right: d, bottom: d, left: d, width: d, height: d, fontSize: d, padding: d, margin: d, perspective: d, lineHeight: "" });
        var u,
          c,
          p,
          h,
          f,
          m,
          v = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
          g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
          y = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
          w = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
          b = /(?:\d|\-|\+|=|#|\.)*/g,
          x = /opacity *= *([^)]*)/i,
          _ = /opacity:([^;]*)/i,
          T = /alpha\(opacity *=.+?\)/i,
          S = /^(rgb|hsl)/,
          C = /([A-Z])/g,
          E = /-([a-z])/gi,
          M = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
          P = function (e, t) {
            return t.toUpperCase();
          },
          k = /(?:Left|Right|Width)/i,
          z = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
          A = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
          O = /,(?=[^\)]*(?:\(|$))/gi,
          D = Math.PI / 180,
          L = 180 / Math.PI,
          I = {},
          N = document,
          R = function (e) {
            return N.createElementNS ? N.createElementNS("http://www.w3.org/1999/xhtml", e) : N.createElement(e);
          },
          B = R("div"),
          F = R("img"),
          $ = (s._internals = { _specialProps: l }),
          H = navigator.userAgent,
          X = (function () {
            var e = H.indexOf("Android"),
              t = R("a");
            return (p = -1 !== H.indexOf("Safari") && -1 === H.indexOf("Chrome") && (-1 === e || Number(H.substr(e + 8, 1)) > 3)), (f = p && Number(H.substr(H.indexOf("Version/") + 8, 1)) < 6), (h = -1 !== H.indexOf("Firefox")), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(H) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(H)) && (m = parseFloat(RegExp.$1)), !!t && ((t.style.cssText = "top:1px;opacity:.55;"), /^0.55/.test(t.style.opacity));
          })(),
          j = function (e) {
            return x.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
          },
          Y = function (e) {
            window.console && console.log(e);
          },
          q = "",
          G = "",
          W = function (e, t) {
            var i,
              n,
              r = (t = t || B).style;
            if (void 0 !== r[e]) return e;
            for (e = e.charAt(0).toUpperCase() + e.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + e]; );
            return n >= 0 ? ((q = "-" + (G = 3 === n ? "ms" : i[n]).toLowerCase() + "-"), G + e) : null;
          },
          V = N.defaultView ? N.defaultView.getComputedStyle : function () {},
          U = (s.getStyle = function (e, t, i, n, r) {
            var a;
            return X || "opacity" !== t ? (!n && e.style[t] ? (a = e.style[t]) : (i = i || V(e)) ? (a = i[t] || i.getPropertyValue(t) || i.getPropertyValue(t.replace(C, "-$1").toLowerCase())) : e.currentStyle && (a = e.currentStyle[t]), null == r || (a && "none" !== a && "auto" !== a && "auto auto" !== a) ? a : r) : j(e);
          }),
          K = ($.convertToPixels = function (e, i, n, r, a) {
            if ("px" === r || !r) return n;
            if ("auto" === r || !n) return 0;
            var o,
              l,
              d,
              u = k.test(i),
              c = e,
              p = B.style,
              h = 0 > n;
            if ((h && (n = -n), "%" === r && -1 !== i.indexOf("border"))) o = (n / 100) * (u ? e.clientWidth : e.clientHeight);
            else {
              if (((p.cssText = "border:0 solid red;position:" + U(e, "position") + ";line-height:0;"), "%" !== r && c.appendChild && "v" !== r.charAt(0) && "rem" !== r)) p[u ? "borderLeftWidth" : "borderTopWidth"] = n + r;
              else {
                if (((d = t.ticker.frame), (l = (c = e.parentNode || N.body)._gsCache) && u && l.time === d)) return (l.width * n) / 100;
                p[u ? "width" : "height"] = n + r;
              }
              c.appendChild(B), (o = parseFloat(B[u ? "offsetWidth" : "offsetHeight"])), c.removeChild(B), u && "%" === r && !1 !== s.cacheWidths && (((l = c._gsCache = c._gsCache || {}).time = d), (l.width = (o / n) * 100)), 0 !== o || a || (o = K(e, i, n, r, !0));
            }
            return h ? -o : o;
          }),
          Z = ($.calculateOffset = function (e, t, i) {
            if ("absolute" !== U(e, "position", i)) return 0;
            var n = "left" === t ? "Left" : "Top",
              r = U(e, "margin" + n, i);
            return e["offset" + n] - (K(e, t, parseFloat(r), r.replace(b, "")) || 0);
          }),
          Q = function (e, t) {
            var i,
              n,
              r,
              a = {};
            if ((t = t || V(e, null)))
              if ((i = t.length)) for (; --i > -1; ) (-1 === (r = t[i]).indexOf("-transform") || Ce === r) && (a[r.replace(E, P)] = t.getPropertyValue(r));
              else for (i in t) (-1 === i.indexOf("Transform") || Se === i) && (a[i] = t[i]);
            else if ((t = e.currentStyle || e.style)) for (i in t) "string" == typeof i && void 0 === a[i] && (a[i.replace(E, P)] = t[i]);
            return X || (a.opacity = j(e)), (n = Re(e, t, !1)), (a.rotation = n.rotation), (a.skewX = n.skewX), (a.scaleX = n.scaleX), (a.scaleY = n.scaleY), (a.x = n.x), (a.y = n.y), Me && ((a.z = n.z), (a.rotationX = n.rotationX), (a.rotationY = n.rotationY), (a.scaleZ = n.scaleZ)), a.filters && delete a.filters, a;
          },
          J = function (e, t, i, n, r) {
            var a,
              s,
              o,
              l = {},
              d = e.style;
            for (s in i) "cssText" !== s && "length" !== s && isNaN(s) && (t[s] !== (a = i[s]) || (r && r[s])) && -1 === s.indexOf("Origin") && ("number" == typeof a || "string" == typeof a) && ((l[s] = "auto" !== a || ("left" !== s && "top" !== s) ? (("" !== a && "auto" !== a && "none" !== a) || "string" != typeof t[s] || "" === t[s].replace(w, "") ? a : 0) : Z(e, s)), void 0 !== d[s] && (o = new fe(d, s, d[s], o)));
            if (n) for (s in n) "className" !== s && (l[s] = n[s]);
            return { difs: l, firstMPT: o };
          },
          ee = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
          te = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
          ie = function (e, t, i) {
            var n = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
              r = ee[t],
              a = r.length;
            for (i = i || V(e, null); --a > -1; ) (n -= parseFloat(U(e, "padding" + r[a], i, !0)) || 0), (n -= parseFloat(U(e, "border" + r[a] + "Width", i, !0)) || 0);
            return n;
          },
          ne = function (e, t) {
            if ("contain" === e || "auto" === e || "auto auto" === e) return e + " ";
            (null == e || "" === e) && (e = "0 0");
            var i = e.split(" "),
              n = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : i[0],
              r = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : i[1];
            return null == r ? (r = "center" === n ? "50%" : "0") : "center" === r && (r = "50%"), ("center" === n || (isNaN(parseFloat(n)) && -1 === (n + "").indexOf("="))) && (n = "50%"), (e = n + " " + r + (i.length > 2 ? " " + i[2] : "")), t && ((t.oxp = -1 !== n.indexOf("%")), (t.oyp = -1 !== r.indexOf("%")), (t.oxr = "=" === n.charAt(1)), (t.oyr = "=" === r.charAt(1)), (t.ox = parseFloat(n.replace(w, ""))), (t.oy = parseFloat(r.replace(w, ""))), (t.v = e)), t || e;
          },
          re = function (e, t) {
            return "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t);
          },
          ae = function (e, t) {
            return null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e);
          },
          se = function (e, t, i, n) {
            var r,
              a,
              s,
              o,
              l,
              d = 1e-6;
            return null == e ? (o = t) : "number" == typeof e ? (o = e) : ((r = 360), (a = e.split("_")), (s = ((l = "=" === e.charAt(1)) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(a[0].substr(2)) : parseFloat(a[0])) * (-1 === e.indexOf("rad") ? 1 : L) - (l ? 0 : t)), a.length && (n && (n[i] = t + s), -1 !== e.indexOf("short") && (s %= r) != s % 180 && (s = 0 > s ? s + r : s - r), -1 !== e.indexOf("_cw") && 0 > s ? (s = ((s + 3599999999640) % r) - ((s / r) | 0) * r) : -1 !== e.indexOf("ccw") && s > 0 && (s = ((s - 3599999999640) % r) - ((s / r) | 0) * r)), (o = t + s)), d > o && o > -d && (o = 0), o;
          },
          oe = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] },
          le = function (e, t, i) {
            return (255 * (1 > 6 * (e = 0 > e ? e + 1 : e > 1 ? e - 1 : e) ? t + (i - t) * e * 6 : 0.5 > e ? i : 2 > 3 * e ? t + (i - t) * (2 / 3 - e) * 6 : t) + 0.5) | 0;
          },
          de = (s.parseColor = function (e, t) {
            var i, n, r, a, s, o, l, d, u, c, p;
            if (e)
              if ("number" == typeof e) i = [e >> 16, (e >> 8) & 255, 255 & e];
              else {
                if (("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), oe[e])) i = oe[e];
                else if ("#" === e.charAt(0)) 4 === e.length && ((n = e.charAt(1)), (r = e.charAt(2)), (a = e.charAt(3)), (e = "#" + n + n + r + r + a + a)), (i = [(e = parseInt(e.substr(1), 16)) >> 16, (e >> 8) & 255, 255 & e]);
                else if ("hsl" === e.substr(0, 3))
                  if (((i = p = e.match(v)), t)) {
                    if (-1 !== e.indexOf("=")) return e.match(g);
                  } else (s = (Number(i[0]) % 360) / 360), (o = Number(i[1]) / 100), (n = 2 * (l = Number(i[2]) / 100) - (r = 0.5 >= l ? l * (o + 1) : l + o - l * o)), i.length > 3 && (i[3] = Number(e[3])), (i[0] = le(s + 1 / 3, n, r)), (i[1] = le(s, n, r)), (i[2] = le(s - 1 / 3, n, r));
                else i = e.match(v) || oe.transparent;
                (i[0] = Number(i[0])), (i[1] = Number(i[1])), (i[2] = Number(i[2])), i.length > 3 && (i[3] = Number(i[3]));
              }
            else i = oe.black;
            return t && !p && ((n = i[0] / 255), (r = i[1] / 255), (a = i[2] / 255), (l = ((d = Math.max(n, r, a)) + (u = Math.min(n, r, a))) / 2), d === u ? (s = o = 0) : ((c = d - u), (o = l > 0.5 ? c / (2 - d - u) : c / (d + u)), (s = d === n ? (r - a) / c + (a > r ? 6 : 0) : d === r ? (a - n) / c + 2 : (n - r) / c + 4), (s *= 60)), (i[0] = (s + 0.5) | 0), (i[1] = (100 * o + 0.5) | 0), (i[2] = (100 * l + 0.5) | 0)), i;
          }),
          ue = function (e, t) {
            var i,
              n,
              r,
              a = e.match(ce) || [],
              s = 0,
              o = a.length ? "" : e;
            for (i = 0; i < a.length; i++) (s += (r = e.substr(s, e.indexOf((n = a[i]), s) - s)).length + n.length), 3 === (n = de(n, t)).length && n.push(1), (o += r + (t ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")");
            return o;
          },
          ce = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (d in oe) ce += "|" + d + "\\b";
        (ce = new RegExp(ce + ")", "gi")),
          (s.colorStringFilter = function (e) {
            var t,
              i = e[0] + e[1];
            (ce.lastIndex = 0), ce.test(i) && ((t = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla(")), (e[0] = ue(e[0], t)), (e[1] = ue(e[1], t)));
          }),
          t.defaultStringFilter || (t.defaultStringFilter = s.colorStringFilter);
        var pe = function (e, t, i, n) {
            if (null == e)
              return function (e) {
                return e;
              };
            var r,
              a = t ? (e.match(ce) || [""])[0] : "",
              s = e.split(a).join("").match(y) || [],
              o = e.substr(0, e.indexOf(s[0])),
              l = ")" === e.charAt(e.length - 1) ? ")" : "",
              d = -1 !== e.indexOf(" ") ? " " : ",",
              u = s.length,
              c = u > 0 ? s[0].replace(v, "") : "";
            return u
              ? (r = t
                  ? function (e) {
                      var t, p, h, f;
                      if ("number" == typeof e) e += c;
                      else if (n && O.test(e)) {
                        for (f = e.replace(O, "|").split("|"), h = 0; h < f.length; h++) f[h] = r(f[h]);
                        return f.join(",");
                      }
                      if (((t = (e.match(ce) || [a])[0]), (h = (p = e.split(t).join("").match(y) || []).length), u > h--)) for (; ++h < u; ) p[h] = i ? p[((h - 1) / 2) | 0] : s[h];
                      return o + p.join(d) + d + t + l + (-1 !== e.indexOf("inset") ? " inset" : "");
                    }
                  : function (e) {
                      var t, a, p;
                      if ("number" == typeof e) e += c;
                      else if (n && O.test(e)) {
                        for (a = e.replace(O, "|").split("|"), p = 0; p < a.length; p++) a[p] = r(a[p]);
                        return a.join(",");
                      }
                      if (((p = (t = e.match(y) || []).length), u > p--)) for (; ++p < u; ) t[p] = i ? t[((p - 1) / 2) | 0] : s[p];
                      return o + t.join(d) + l;
                    })
              : function (e) {
                  return e;
                };
          },
          he = function (e) {
            return (
              (e = e.split(",")),
              function (t, i, n, r, a, s, o) {
                var l,
                  d = (i + "").split(" ");
                for (o = {}, l = 0; 4 > l; l++) o[e[l]] = d[l] = d[l] || d[((l - 1) / 2) >> 0];
                return r.parse(t, o, a, s);
              }
            );
          },
          fe =
            (($._setPluginRatio = function (e) {
              this.plugin.setRatio(e);
              for (var t, i, n, r, a, s = this.data, o = s.proxy, l = s.firstMPT, d = 1e-6; l; ) (t = o[l.v]), l.r ? (t = Math.round(t)) : d > t && t > -d && (t = 0), (l.t[l.p] = t), (l = l._next);
              if ((s.autoRotate && (s.autoRotate.rotation = o.rotation), 1 === e || 0 === e))
                for (l = s.firstMPT, a = 1 === e ? "e" : "b"; l; ) {
                  if ((i = l.t).type) {
                    if (1 === i.type) {
                      for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                      i[a] = r;
                    }
                  } else i[a] = i.s + i.xs0;
                  l = l._next;
                }
            }),
            function (e, t, i, n, r) {
              (this.t = e), (this.p = t), (this.v = i), (this.r = r), n && ((n._prev = this), (this._next = n));
            }),
          me =
            (($._parseToProxy = function (e, t, i, n, r, a) {
              var s,
                o,
                l,
                d,
                u,
                c = n,
                p = {},
                h = {},
                f = i._transform,
                m = I;
              for (i._transform = null, I = t, n = u = i.parse(e, t, n, r), I = m, a && ((i._transform = f), c && ((c._prev = null), c._prev && (c._prev._next = null))); n && n !== c; ) {
                if (n.type <= 1 && ((h[(o = n.p)] = n.s + n.c), (p[o] = n.s), a || ((d = new fe(n, "s", o, d, n.r)), (n.c = 0)), 1 === n.type)) for (s = n.l; --s > 0; ) (h[(o = n.p + "_" + (l = "xn" + s))] = n.data[l]), (p[o] = n[l]), a || (d = new fe(n, l, o, d, n.rxp[l]));
                n = n._next;
              }
              return { proxy: p, end: h, firstMPT: d, pt: u };
            }),
            ($.CSSPropTween = function (e, t, n, r, s, o, l, d, u, c, p) {
              (this.t = e), (this.p = t), (this.s = n), (this.c = r), (this.n = l || t), e instanceof me || a.push(this.n), (this.r = d), (this.type = o || 0), u && ((this.pr = u), (i = !0)), (this.b = void 0 === c ? n : c), (this.e = void 0 === p ? n + r : p), s && ((this._next = s), (s._prev = this));
            })),
          ve = function (e, t, i, n, r, a) {
            var s = new me(e, t, i, n - i, r, -1, a);
            return (s.b = i), (s.e = s.xs0 = n), s;
          },
          ge = (s.parseComplex = function (e, t, i, n, r, a, s, o, l, d) {
            (s = new me(e, t, 0, 0, s, d ? 2 : 1, null, !1, o, (i = i || a || ""), n)), (n += "");
            var c,
              p,
              h,
              f,
              m,
              y,
              w,
              b,
              x,
              _,
              T,
              S,
              C,
              E = i.split(", ").join(",").split(" "),
              M = n.split(", ").join(",").split(" "),
              P = E.length,
              k = !1 !== u;
            for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && ((E = E.join(" ").replace(O, ", ").split(" ")), (M = M.join(" ").replace(O, ", ").split(" ")), (P = E.length)), P !== M.length && (P = (E = (a || "").split(" ")).length), s.plugin = l, s.setRatio = d, ce.lastIndex = 0, c = 0; P > c; c++)
              if (((f = E[c]), (m = M[c]), (b = parseFloat(f)) || 0 === b)) s.appendXtra("", b, re(m, b), m.replace(g, ""), k && -1 !== m.indexOf("px"), !0);
              else if (r && ce.test(f))
                (S = "," === m.charAt(m.length - 1) ? ")," : ")"),
                  (C = -1 !== m.indexOf("hsl") && X),
                  (f = de(f, C)),
                  (m = de(m, C)),
                  (x = f.length + m.length > 6) && !X && 0 === m[3]
                    ? ((s["xs" + s.l] += s.l ? " transparent" : "transparent"), (s.e = s.e.split(M[c]).join("transparent")))
                    : (X || (x = !1),
                      C
                        ? s
                            .appendXtra(x ? "hsla(" : "hsl(", f[0], re(m[0], f[0]), ",", !1, !0)
                            .appendXtra("", f[1], re(m[1], f[1]), "%,", !1)
                            .appendXtra("", f[2], re(m[2], f[2]), x ? "%," : "%" + S, !1)
                        : s
                            .appendXtra(x ? "rgba(" : "rgb(", f[0], m[0] - f[0], ",", !0, !0)
                            .appendXtra("", f[1], m[1] - f[1], ",", !0)
                            .appendXtra("", f[2], m[2] - f[2], x ? "," : S, !0),
                      x && s.appendXtra("", (f = f.length < 4 ? 1 : f[3]), (m.length < 4 ? 1 : m[3]) - f, S, !1)),
                  (ce.lastIndex = 0);
              else if ((y = f.match(v))) {
                if (!(w = m.match(g)) || w.length !== y.length) return s;
                for (h = 0, p = 0; p < y.length; p++) (_ = f.indexOf((T = y[p]), h)), s.appendXtra(f.substr(h, _ - h), Number(T), re(w[p], T), "", k && "px" === f.substr(_ + T.length, 2), 0 === p), (h = _ + T.length);
                s["xs" + s.l] += f.substr(h);
              } else s["xs" + s.l] += s.l ? " " + m : m;
            if (-1 !== n.indexOf("=") && s.data) {
              for (S = s.xs0 + s.data.s, c = 1; c < s.l; c++) S += s["xs" + c] + s.data["xn" + c];
              s.e = S + s["xs" + c];
            }
            return s.l || ((s.type = -1), (s.xs0 = s.e)), s.xfirst || s;
          }),
          ye = 9;
        for ((d = me.prototype).l = d.pr = 0; --ye > 0; ) (d["xn" + ye] = 0), (d["xs" + ye] = "");
        (d.xs0 = ""),
          (d._next = d._prev = d.xfirst = d.data = d.plugin = d.setRatio = d.rxp = null),
          (d.appendXtra = function (e, t, i, n, r, a) {
            var s = this,
              o = s.l;
            return (s["xs" + o] += a && o ? " " + e : e || ""), i || 0 === o || s.plugin ? (s.l++, (s.type = s.setRatio ? 2 : 1), (s["xs" + s.l] = n || ""), o > 0 ? ((s.data["xn" + o] = t + i), (s.rxp["xn" + o] = r), (s["xn" + o] = t), s.plugin || ((s.xfirst = new me(s, "xn" + o, t, i, s.xfirst || s, 0, s.n, r, s.pr)), (s.xfirst.xs0 = 0)), s) : ((s.data = { s: t + i }), (s.rxp = {}), (s.s = t), (s.c = i), (s.r = r), s)) : ((s["xs" + o] += t + (n || "")), s);
          });
        var we = function (e, t) {
            (this.p = ((t = t || {}).prefix && W(e)) || e), (l[e] = l[this.p] = this), (this.format = t.formatter || pe(t.defaultValue, t.color, t.collapsible, t.multi)), t.parser && (this.parse = t.parser), (this.clrs = t.color), (this.multi = t.multi), (this.keyword = t.keyword), (this.dflt = t.defaultValue), (this.pr = t.priority || 0);
          },
          be = ($._registerComplexSpecialProp = function (e, t, i) {
            "object" != typeof t && (t = { parser: i });
            var n,
              r = e.split(","),
              a = t.defaultValue;
            for (i = i || [a], n = 0; n < r.length; n++) (t.prefix = 0 === n && t.prefix), (t.defaultValue = i[n] || a), new we(r[n], t);
          }),
          xe = function (e) {
            if (!l[e]) {
              var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
              be(e, {
                parser: function (e, i, n, r, a, s, d) {
                  var u = o.com.greensock.plugins[t];
                  return u ? (u._cssRegister(), l[n].parse(e, i, n, r, a, s, d)) : (Y("Error: " + t + " js file not loaded."), a);
                },
              });
            }
          };
        ((d = we.prototype).parseComplex = function (e, t, i, n, r, a) {
          var s,
            o,
            l,
            d,
            u,
            c,
            p = this.keyword;
          if ((this.multi && (O.test(i) || O.test(t) ? ((o = t.replace(O, "|").split("|")), (l = i.replace(O, "|").split("|"))) : p && ((o = [t]), (l = [i]))), l)) {
            for (d = l.length > o.length ? l.length : o.length, s = 0; d > s; s++) (t = o[s] = o[s] || this.dflt), (i = l[s] = l[s] || this.dflt), p && (u = t.indexOf(p)) !== (c = i.indexOf(p)) && (-1 === c ? (o[s] = o[s].split(p).join("")) : -1 === u && (o[s] += " " + p));
            (t = o.join(", ")), (i = l.join(", "));
          }
          return ge(e, this.p, t, i, this.clrs, this.dflt, n, this.pr, r, a);
        }),
          (d.parse = function (e, t, i, n, a, s, o) {
            return this.parseComplex(e.style, this.format(U(e, this.p, r, !1, this.dflt)), this.format(t), a, s);
          }),
          (s.registerSpecialProp = function (e, t, i) {
            be(e, {
              parser: function (e, n, r, a, s, o, l) {
                var d = new me(e, r, 0, 0, s, 2, r, !1, i);
                return (d.plugin = o), (d.setRatio = t(e, n, a._tween, r)), d;
              },
              priority: i,
            });
          }),
          (s.useSVGTransformAttr = p || h);
        var _e,
          Te = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
          Se = W("transform"),
          Ce = q + "transform",
          Ee = W("transformOrigin"),
          Me = null !== W("perspective"),
          Pe = ($.Transform = function () {
            (this.perspective = parseFloat(s.defaultTransformPerspective) || 0), (this.force3D = !(!1 === s.defaultForce3D || !Me) && (s.defaultForce3D || "auto"));
          }),
          ke = window.SVGElement,
          ze = function (e, t, i) {
            var n,
              r = N.createElementNS("http://www.w3.org/2000/svg", e),
              a = /([a-z])([A-Z])/g;
            for (n in i) r.setAttributeNS(null, n.replace(a, "$1-$2").toLowerCase(), i[n]);
            return t.appendChild(r), r;
          },
          Ae = N.documentElement,
          Oe = (function () {
            var e,
              t,
              i,
              n = m || (/Android/i.test(H) && !window.chrome);
            return N.createElementNS && !n && ((e = ze("svg", Ae)), (i = (t = ze("rect", e, { width: 100, height: 50, x: 100 })).getBoundingClientRect().width), (t.style[Ee] = "50% 50%"), (t.style[Se] = "scaleX(0.5)"), (n = i === t.getBoundingClientRect().width && !(h && Me)), Ae.removeChild(e)), n;
          })(),
          De = function (e, t, i, n, r) {
            var a,
              o,
              l,
              d,
              u,
              c,
              p,
              h,
              f,
              m,
              v,
              g,
              y,
              w,
              b = e._gsTransform,
              x = Ne(e, !0);
            b && ((y = b.xOrigin), (w = b.yOrigin)), (!n || (a = n.split(" ")).length < 2) && ((p = e.getBBox()), (a = [(-1 !== (t = ne(t).split(" "))[0].indexOf("%") ? (parseFloat(t[0]) / 100) * p.width : parseFloat(t[0])) + p.x, (-1 !== t[1].indexOf("%") ? (parseFloat(t[1]) / 100) * p.height : parseFloat(t[1])) + p.y])), (i.xOrigin = d = parseFloat(a[0])), (i.yOrigin = u = parseFloat(a[1])), n && x !== Ie && ((l = d * (-(p = x[1]) / (g = (c = x[0]) * (f = x[3]) - p * (h = x[2]))) + u * (c / g) - (c * (v = x[5]) - p * (m = x[4])) / g), (d = i.xOrigin = a[0] = o = d * (f / g) + u * (-h / g) + (h * v - f * m) / g), (u = i.yOrigin = a[1] = l)), b && (r || (!1 !== r && !1 !== s.defaultSmoothOrigin) ? ((b.xOffset += (o = d - y) * x[0] + (l = u - w) * x[2] - o), (b.yOffset += o * x[1] + l * x[3] - l)) : (b.xOffset = b.yOffset = 0)), e.setAttribute("data-svg-origin", a.join(" "));
          },
          Le = function (e) {
            return !!(ke && "function" == typeof e.getBBox && e.getCTM && (!e.parentNode || (e.parentNode.getBBox && e.parentNode.getCTM)));
          },
          Ie = [1, 0, 0, 1, 0, 0],
          Ne = function (e, t) {
            var i,
              n,
              r,
              a,
              s,
              o = e._gsTransform || new Pe(),
              l = 1e5;
            if ((Se ? (n = U(e, Ce, null, !0)) : e.currentStyle && (n = (n = e.currentStyle.filter.match(z)) && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), o.x || 0, o.y || 0].join(",") : ""), (i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n), (o.svg || (e.getBBox && Le(e))) && (i && -1 !== (e.style[Se] + "").indexOf("matrix") && ((n = e.style[Se]), (i = 0)), (r = e.getAttribute("transform")), i && r && (-1 !== r.indexOf("matrix") ? ((n = r), (i = 0)) : -1 !== r.indexOf("translate") && ((n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")"), (i = 0)))), i)) return Ie;
            for (r = (n || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], ye = r.length; --ye > -1; ) (a = Number(r[ye])), (r[ye] = (s = a - (a |= 0)) ? ((s * l + (0 > s ? -0.5 : 0.5)) | 0) / l + a : a);
            return t && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r;
          },
          Re = ($.getTransform = function (e, i, n, a) {
            if (e._gsTransform && n && !a) return e._gsTransform;
            var o,
              l,
              d,
              u,
              c,
              p,
              h = (n && e._gsTransform) || new Pe(),
              f = h.scaleX < 0,
              m = 2e-5,
              v = 1e5,
              g = (Me && (parseFloat(U(e, Ee, i, !1, "0 0 0").split(" ")[2]) || h.zOrigin)) || 0,
              y = parseFloat(s.defaultTransformPerspective) || 0;
            if (((h.svg = !(!e.getBBox || !Le(e))), h.svg && (De(e, U(e, Ee, r, !1, "50% 50%") + "", h, e.getAttribute("data-svg-origin")), (_e = s.useSVGTransformAttr || Oe)), (o = Ne(e)) !== Ie)) {
              if (16 === o.length) {
                var w,
                  b,
                  x,
                  _,
                  T,
                  S = o[0],
                  C = o[1],
                  E = o[2],
                  M = o[3],
                  P = o[4],
                  k = o[5],
                  z = o[6],
                  A = o[7],
                  O = o[8],
                  D = o[9],
                  I = o[10],
                  N = o[12],
                  R = o[13],
                  B = o[14],
                  F = o[11],
                  $ = Math.atan2(z, I);
                h.zOrigin && ((N = O * (B = -h.zOrigin) - o[12]), (R = D * B - o[13]), (B = I * B + h.zOrigin - o[14])), (h.rotationX = $ * L), $ && ((w = P * (_ = Math.cos(-$)) + O * (T = Math.sin(-$))), (b = k * _ + D * T), (x = z * _ + I * T), (O = P * -T + O * _), (D = k * -T + D * _), (I = z * -T + I * _), (F = A * -T + F * _), (P = w), (k = b), (z = x)), ($ = Math.atan2(-E, I)), (h.rotationY = $ * L), $ && ((b = C * (_ = Math.cos(-$)) - D * (T = Math.sin(-$))), (x = E * _ - I * T), (D = C * T + D * _), (I = E * T + I * _), (F = M * T + F * _), (S = w = S * _ - O * T), (C = b), (E = x)), ($ = Math.atan2(C, S)), (h.rotation = $ * L), $ && ((S = S * (_ = Math.cos(-$)) + P * (T = Math.sin(-$))), (b = C * _ + k * T), (k = C * -T + k * _), (z = E * -T + z * _), (C = b)), h.rotationX && Math.abs(h.rotationX) + Math.abs(h.rotation) > 359.9 && ((h.rotationX = h.rotation = 0), (h.rotationY = 180 - h.rotationY)), (h.scaleX = ((Math.sqrt(S * S + C * C) * v + 0.5) | 0) / v), (h.scaleY = ((Math.sqrt(k * k + D * D) * v + 0.5) | 0) / v), (h.scaleZ = ((Math.sqrt(z * z + I * I) * v + 0.5) | 0) / v), (h.skewX = 0), (h.perspective = F ? 1 / (0 > F ? -F : F) : 0), (h.x = N), (h.y = R), (h.z = B), h.svg && ((h.x -= h.xOrigin - (h.xOrigin * S - h.yOrigin * P)), (h.y -= h.yOrigin - (h.yOrigin * C - h.xOrigin * k)));
              } else if ((!Me || a || !o.length || h.x !== o[4] || h.y !== o[5] || (!h.rotationX && !h.rotationY)) && (void 0 === h.x || "none" !== U(e, "display", i))) {
                var H = o.length >= 6,
                  X = H ? o[0] : 1,
                  j = o[1] || 0,
                  Y = o[2] || 0,
                  q = H ? o[3] : 1;
                (h.x = o[4] || 0), (h.y = o[5] || 0), (d = Math.sqrt(X * X + j * j)), (u = Math.sqrt(q * q + Y * Y)), (c = X || j ? Math.atan2(j, X) * L : h.rotation || 0), (p = Y || q ? Math.atan2(Y, q) * L + c : h.skewX || 0), Math.abs(p) > 90 && Math.abs(p) < 270 && (f ? ((d *= -1), (p += 0 >= c ? 180 : -180), (c += 0 >= c ? 180 : -180)) : ((u *= -1), (p += 0 >= p ? 180 : -180))), (h.scaleX = d), (h.scaleY = u), (h.rotation = c), (h.skewX = p), Me && ((h.rotationX = h.rotationY = h.z = 0), (h.perspective = y), (h.scaleZ = 1)), h.svg && ((h.x -= h.xOrigin - (h.xOrigin * X + h.yOrigin * Y)), (h.y -= h.yOrigin - (h.xOrigin * j + h.yOrigin * q)));
              }
              for (l in ((h.zOrigin = g), h)) h[l] < m && h[l] > -m && (h[l] = 0);
            }
            return (
              n &&
                ((e._gsTransform = h),
                h.svg &&
                  (_e && e.style[Se]
                    ? t.delayedCall(0.001, function () {
                        He(e.style, Se);
                      })
                    : !_e &&
                      e.getAttribute("transform") &&
                      t.delayedCall(0.001, function () {
                        e.removeAttribute("transform");
                      }))),
              h
            );
          }),
          Be = function (e) {
            var t,
              i,
              n = this.data,
              r = -n.rotation * D,
              a = r + n.skewX * D,
              s = 1e5,
              o = ((Math.cos(r) * n.scaleX * s) | 0) / s,
              l = ((Math.sin(r) * n.scaleX * s) | 0) / s,
              d = ((Math.sin(a) * -n.scaleY * s) | 0) / s,
              u = ((Math.cos(a) * n.scaleY * s) | 0) / s,
              c = this.t.style,
              p = this.t.currentStyle;
            if (p) {
              (i = l), (l = -d), (d = -i), (t = p.filter), (c.filter = "");
              var h,
                f,
                v = this.t.offsetWidth,
                g = this.t.offsetHeight,
                y = "absolute" !== p.position,
                w = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + d + ", M22=" + u,
                _ = n.x + (v * n.xPercent) / 100,
                T = n.y + (g * n.yPercent) / 100;
              if ((null != n.ox && ((_ += (h = (n.oxp ? v * n.ox * 0.01 : n.ox) - v / 2) - (h * o + (f = (n.oyp ? g * n.oy * 0.01 : n.oy) - g / 2) * l)), (T += f - (h * d + f * u))), (w += y ? ", Dx=" + ((h = v / 2) - (h * o + (f = g / 2) * l) + _) + ", Dy=" + (f - (h * d + f * u) + T) + ")" : ", sizingMethod='auto expand')"), (c.filter = -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? t.replace(A, w) : w + " " + t), (0 === e || 1 === e) && 1 === o && 0 === l && 0 === d && 1 === u && ((y && -1 === w.indexOf("Dx=0, Dy=0")) || (x.test(t) && 100 !== parseFloat(RegExp.$1)) || (-1 === t.indexOf(t.indexOf("Alpha")) && c.removeAttribute("filter"))), !y)) {
                var S,
                  C,
                  E = 8 > m ? 1 : -1;
                for (h = n.ieOffsetX || 0, f = n.ieOffsetY || 0, n.ieOffsetX = Math.round((v - ((0 > o ? -o : o) * v + (0 > l ? -l : l) * g)) / 2 + _), n.ieOffsetY = Math.round((g - ((0 > u ? -u : u) * g + (0 > d ? -d : d) * v)) / 2 + T), ye = 0; 4 > ye; ye++) (i = -1 !== (S = p[(C = te[ye])]).indexOf("px") ? parseFloat(S) : K(this.t, C, parseFloat(S), S.replace(b, "")) || 0), (c[C] = (n[C] = Math.round(i - (i !== n[C] ? (2 > ye ? -n.ieOffsetX : -n.ieOffsetY) : 2 > ye ? h - n.ieOffsetX : f - n.ieOffsetY) * (0 === ye || 2 === ye ? 1 : E))) + "px");
              }
            }
          },
          Fe =
            ($.set3DTransformRatio =
            $.setTransformRatio =
              function (e) {
                var t,
                  i,
                  n,
                  r,
                  a,
                  s,
                  o,
                  l,
                  d,
                  u,
                  c,
                  p,
                  f,
                  m,
                  v,
                  g,
                  y,
                  w,
                  b,
                  x,
                  _,
                  T,
                  S,
                  C = this.data,
                  E = this.t.style,
                  M = C.rotation,
                  P = C.rotationX,
                  k = C.rotationY,
                  z = C.scaleX,
                  A = C.scaleY,
                  O = C.scaleZ,
                  L = C.x,
                  I = C.y,
                  N = C.z,
                  R = C.svg,
                  B = C.perspective,
                  F = C.force3D;
                if (!((((1 !== e && 0 !== e) || "auto" !== F || (this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime)) && F) || N || B || k || P || 1 !== O) || (_e && R) || !Me) M || C.skewX || R ? ((M *= D), (T = C.skewX * D), (S = 1e5), (t = Math.cos(M) * z), (r = Math.sin(M) * z), (i = Math.sin(M - T) * -A), (a = Math.cos(M - T) * A), T && "simple" === C.skewType && ((y = Math.tan(T)), (i *= y = Math.sqrt(1 + y * y)), (a *= y), C.skewY && ((t *= y), (r *= y))), R && ((L += C.xOrigin - (C.xOrigin * t + C.yOrigin * i) + C.xOffset), (I += C.yOrigin - (C.xOrigin * r + C.yOrigin * a) + C.yOffset), _e && (C.xPercent || C.yPercent) && ((m = this.t.getBBox()), (L += 0.01 * C.xPercent * m.width), (I += 0.01 * C.yPercent * m.height)), (m = 1e-6) > L && L > -m && (L = 0), m > I && I > -m && (I = 0)), (b = ((t * S) | 0) / S + "," + ((r * S) | 0) / S + "," + ((i * S) | 0) / S + "," + ((a * S) | 0) / S + "," + L + "," + I + ")"), R && _e ? this.t.setAttribute("transform", "matrix(" + b) : (E[Se] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + b)) : (E[Se] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + z + ",0,0," + A + "," + L + "," + I + ")");
                else {
                  if ((h && ((m = 1e-4) > z && z > -m && (z = O = 2e-5), m > A && A > -m && (A = O = 2e-5), !B || C.z || C.rotationX || C.rotationY || (B = 0)), M || C.skewX)) (M *= D), (v = t = Math.cos(M)), (g = r = Math.sin(M)), C.skewX && ((M -= C.skewX * D), (v = Math.cos(M)), (g = Math.sin(M)), "simple" === C.skewType && ((y = Math.tan(C.skewX * D)), (v *= y = Math.sqrt(1 + y * y)), (g *= y), C.skewY && ((t *= y), (r *= y)))), (i = -g), (a = v);
                  else {
                    if (!(k || P || 1 !== O || B || R)) return void (E[Se] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) translate3d(" : "translate3d(") + L + "px," + I + "px," + N + "px)" + (1 !== z || 1 !== A ? " scale(" + z + "," + A + ")" : ""));
                    (t = a = 1), (i = r = 0);
                  }
                  (d = 1), (n = s = o = l = u = c = 0), (p = B ? -1 / B : 0), (f = C.zOrigin), (m = 1e-6), (x = ","), (_ = "0"), (M = k * D) && ((v = Math.cos(M)), (o = -(g = Math.sin(M))), (u = p * -g), (n = t * g), (s = r * g), (d = v), (p *= v), (t *= v), (r *= v)), (M = P * D) && ((y = i * (v = Math.cos(M)) + n * (g = Math.sin(M))), (w = a * v + s * g), (l = d * g), (c = p * g), (n = i * -g + n * v), (s = a * -g + s * v), (d *= v), (p *= v), (i = y), (a = w)), 1 !== O && ((n *= O), (s *= O), (d *= O), (p *= O)), 1 !== A && ((i *= A), (a *= A), (l *= A), (c *= A)), 1 !== z && ((t *= z), (r *= z), (o *= z), (u *= z)), (f || R) && (f && ((L += n * -f), (I += s * -f), (N += d * -f + f)), R && ((L += C.xOrigin - (C.xOrigin * t + C.yOrigin * i) + C.xOffset), (I += C.yOrigin - (C.xOrigin * r + C.yOrigin * a) + C.yOffset)), m > L && L > -m && (L = _), m > I && I > -m && (I = _), m > N && N > -m && (N = 0)), (b = C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix3d(" : "matrix3d("), (b += (m > t && t > -m ? _ : t) + x + (m > r && r > -m ? _ : r) + x + (m > o && o > -m ? _ : o)), (b += x + (m > u && u > -m ? _ : u) + x + (m > i && i > -m ? _ : i) + x + (m > a && a > -m ? _ : a)), P || k || 1 !== O ? ((b += x + (m > l && l > -m ? _ : l) + x + (m > c && c > -m ? _ : c) + x + (m > n && n > -m ? _ : n)), (b += x + (m > s && s > -m ? _ : s) + x + (m > d && d > -m ? _ : d) + x + (m > p && p > -m ? _ : p) + x)) : (b += ",0,0,0,0,1,0,"), (E[Se] = b += L + x + I + x + N + x + (B ? 1 + -N / B : 1) + ")");
                }
              });
        ((d = Pe.prototype).x = d.y = d.z = d.skewX = d.skewY = d.rotation = d.rotationX = d.rotationY = d.zOrigin = d.xPercent = d.yPercent = d.xOffset = d.yOffset = 0),
          (d.scaleX = d.scaleY = d.scaleZ = 1),
          be("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function (e, t, i, n, a, o, l) {
              if (n._lastParsedTransform === l) return a;
              n._lastParsedTransform = l;
              var d,
                u,
                c,
                p,
                h,
                f,
                m,
                v,
                g,
                y,
                w = e._gsTransform,
                b = e.style,
                x = 1e-6,
                _ = Te.length,
                T = l,
                S = {},
                C = "transformOrigin";
              if ((l.display ? ((p = U(e, "display")), (b.display = "block"), (d = Re(e, r, !0, l.parseTransform)), (b.display = p)) : (d = Re(e, r, !0, l.parseTransform)), (n._transform = d), "string" == typeof T.transform && Se)) ((p = B.style)[Se] = T.transform), (p.display = "block"), (p.position = "absolute"), N.body.appendChild(B), (u = Re(B, null, !1)), N.body.removeChild(B), u.perspective || (u.perspective = d.perspective), null != T.xPercent && (u.xPercent = ae(T.xPercent, d.xPercent)), null != T.yPercent && (u.yPercent = ae(T.yPercent, d.yPercent));
              else if ("object" == typeof T) {
                if (((u = { scaleX: ae(null != T.scaleX ? T.scaleX : T.scale, d.scaleX), scaleY: ae(null != T.scaleY ? T.scaleY : T.scale, d.scaleY), scaleZ: ae(T.scaleZ, d.scaleZ), x: ae(T.x, d.x), y: ae(T.y, d.y), z: ae(T.z, d.z), xPercent: ae(T.xPercent, d.xPercent), yPercent: ae(T.yPercent, d.yPercent), perspective: ae(T.transformPerspective, d.perspective) }), null != (v = T.directionalRotation)))
                  if ("object" == typeof v) for (p in v) T[p] = v[p];
                  else T.rotation = v;
                "string" == typeof T.x && -1 !== T.x.indexOf("%") && ((u.x = 0), (u.xPercent = ae(T.x, d.xPercent))), "string" == typeof T.y && -1 !== T.y.indexOf("%") && ((u.y = 0), (u.yPercent = ae(T.y, d.yPercent))), (u.rotation = se("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : "rotationZ" in T ? T.rotationZ : d.rotation, d.rotation, "rotation", S)), Me && ((u.rotationX = se("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : d.rotationX || 0, d.rotationX, "rotationX", S)), (u.rotationY = se("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : d.rotationY || 0, d.rotationY, "rotationY", S))), (u.skewX = null == T.skewX ? d.skewX : se(T.skewX, d.skewX)), (u.skewY = null == T.skewY ? d.skewY : se(T.skewY, d.skewY)), (c = u.skewY - d.skewY) && ((u.skewX += c), (u.rotation += c));
              }
              for (Me && null != T.force3D && ((d.force3D = T.force3D), (m = !0)), d.skewType = T.skewType || d.skewType || s.defaultSkewType, (f = d.force3D || d.z || d.rotationX || d.rotationY || u.z || u.rotationX || u.rotationY || u.perspective) || null == T.scale || (u.scaleZ = 1); --_ > -1; ) ((h = u[(i = Te[_])] - d[i]) > x || -x > h || null != T[i] || null != I[i]) && ((m = !0), (a = new me(d, i, d[i], h, a)), i in S && (a.e = S[i]), (a.xs0 = 0), (a.plugin = o), n._overwriteProps.push(a.n));
              return (h = T.transformOrigin), d.svg && (h || T.svgOrigin) && ((g = d.xOffset), (y = d.yOffset), De(e, ne(h), u, T.svgOrigin, T.smoothOrigin), (a = ve(d, "xOrigin", (w ? d : u).xOrigin, u.xOrigin, a, C)), (a = ve(d, "yOrigin", (w ? d : u).yOrigin, u.yOrigin, a, C)), (g !== d.xOffset || y !== d.yOffset) && ((a = ve(d, "xOffset", w ? g : d.xOffset, d.xOffset, a, C)), (a = ve(d, "yOffset", w ? y : d.yOffset, d.yOffset, a, C))), (h = _e ? null : "0px 0px")), (h || (Me && f && d.zOrigin)) && (Se ? ((m = !0), (i = Ee), (h = (h || U(e, i, r, !1, "50% 50%")) + ""), ((a = new me(b, i, 0, 0, a, -1, C)).b = b[i]), (a.plugin = o), Me ? ((p = d.zOrigin), (h = h.split(" ")), (d.zOrigin = (h.length > 2 && (0 === p || "0px" !== h[2]) ? parseFloat(h[2]) : p) || 0), (a.xs0 = a.e = h[0] + " " + (h[1] || "50%") + " 0px"), ((a = new me(d, "zOrigin", 0, 0, a, -1, a.n)).b = p), (a.xs0 = a.e = d.zOrigin)) : (a.xs0 = a.e = h)) : ne(h + "", d)), m && (n._transformType = (d.svg && _e) || (!f && 3 !== this._transformType) ? 2 : 3), a;
            },
            prefix: !0,
          }),
          be("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }),
          be("borderRadius", {
            defaultValue: "0px",
            parser: function (e, t, i, a, s, o) {
              t = this.format(t);
              var l,
                d,
                u,
                c,
                p,
                h,
                f,
                m,
                v,
                g,
                y,
                w,
                b,
                x,
                _,
                T,
                S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                C = e.style;
              for (v = parseFloat(e.offsetWidth), g = parseFloat(e.offsetHeight), l = t.split(" "), d = 0; d < S.length; d++) this.p.indexOf("border") && (S[d] = W(S[d])), -1 !== (p = c = U(e, S[d], r, !1, "0px")).indexOf(" ") && ((c = p.split(" ")), (p = c[0]), (c = c[1])), (h = u = l[d]), (f = parseFloat(p)), (w = p.substr((f + "").length)), (b = "=" === h.charAt(1)) ? ((m = parseInt(h.charAt(0) + "1", 10)), (h = h.substr(2)), (m *= parseFloat(h)), (y = h.substr((m + "").length - (0 > m ? 1 : 0)) || "")) : ((m = parseFloat(h)), (y = h.substr((m + "").length))), "" === y && (y = n[i] || w), y !== w && ((x = K(e, "borderLeft", f, w)), (_ = K(e, "borderTop", f, w)), "%" === y ? ((p = (x / v) * 100 + "%"), (c = (_ / g) * 100 + "%")) : "em" === y ? ((p = x / (T = K(e, "borderLeft", 1, "em")) + "em"), (c = _ / T + "em")) : ((p = x + "px"), (c = _ + "px")), b && ((h = parseFloat(p) + m + y), (u = parseFloat(c) + m + y))), (s = ge(C, S[d], p + " " + c, h + " " + u, !1, "0px", s));
              return s;
            },
            prefix: !0,
            formatter: pe("0px 0px 0px 0px", !1, !0),
          }),
          be("backgroundPosition", {
            defaultValue: "0 0",
            parser: function (e, t, i, n, a, s) {
              var o,
                l,
                d,
                u,
                c,
                p,
                h = "background-position",
                f = r || V(e, null),
                v = this.format((f ? (m ? f.getPropertyValue(h + "-x") + " " + f.getPropertyValue(h + "-y") : f.getPropertyValue(h)) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                g = this.format(t);
              if ((-1 !== v.indexOf("%")) != (-1 !== g.indexOf("%")) && (p = U(e, "backgroundImage").replace(M, "")) && "none" !== p) {
                for (o = v.split(" "), l = g.split(" "), F.setAttribute("src", p), d = 2; --d > -1; ) (u = -1 !== (v = o[d]).indexOf("%")) != (-1 !== l[d].indexOf("%")) && ((c = 0 === d ? e.offsetWidth - F.width : e.offsetHeight - F.height), (o[d] = u ? (parseFloat(v) / 100) * c + "px" : (parseFloat(v) / c) * 100 + "%"));
                v = o.join(" ");
              }
              return this.parseComplex(e.style, v, g, a, s);
            },
            formatter: ne,
          }),
          be("backgroundSize", { defaultValue: "0 0", formatter: ne }),
          be("perspective", { defaultValue: "0px", prefix: !0 }),
          be("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
          be("transformStyle", { prefix: !0 }),
          be("backfaceVisibility", { prefix: !0 }),
          be("userSelect", { prefix: !0 }),
          be("margin", { parser: he("marginTop,marginRight,marginBottom,marginLeft") }),
          be("padding", { parser: he("paddingTop,paddingRight,paddingBottom,paddingLeft") }),
          be("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (e, t, i, n, a, s) {
              var o, l, d;
              return 9 > m ? ((o = "rect(" + (l = e.currentStyle).clipTop + (d = 8 > m ? " " : ",") + l.clipRight + d + l.clipBottom + d + l.clipLeft + ")"), (t = this.format(t).split(",").join(d))) : ((o = this.format(U(e, this.p, r, !1, this.dflt))), (t = this.format(t))), this.parseComplex(e.style, o, t, a, s);
            },
          }),
          be("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }),
          be("autoRound,strictUnits", {
            parser: function (e, t, i, n, r) {
              return r;
            },
          }),
          be("border", {
            defaultValue: "0px solid #000",
            parser: function (e, t, i, n, a, s) {
              return this.parseComplex(e.style, this.format(U(e, "borderTopWidth", r, !1, "0px") + " " + U(e, "borderTopStyle", r, !1, "solid") + " " + U(e, "borderTopColor", r, !1, "#000")), this.format(t), a, s);
            },
            color: !0,
            formatter: function (e) {
              var t = e.split(" ");
              return t[0] + " " + (t[1] || "solid") + " " + (e.match(ce) || ["#000"])[0];
            },
          }),
          be("borderWidth", { parser: he("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }),
          be("float,cssFloat,styleFloat", {
            parser: function (e, t, i, n, r, a) {
              var s = e.style,
                o = "cssFloat" in s ? "cssFloat" : "styleFloat";
              return new me(s, o, 0, 0, r, -1, i, !1, 0, s[o], t);
            },
          });
        var $e = function (e) {
          var t,
            i = this.t,
            n = i.filter || U(this.data, "filter") || "",
            r = (this.s + this.c * e) | 0;
          100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), (t = !U(this.data, "filter"))) : ((i.filter = n.replace(T, "")), (t = !0))), t || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? (0 === r && this.xn1) || (i.filter = n + " alpha(opacity=" + r + ")") : (i.filter = n.replace(x, "opacity=" + r)));
        };
        be("opacity,alpha,autoAlpha", {
          defaultValue: "1",
          parser: function (e, t, i, n, a, s) {
            var o = parseFloat(U(e, "opacity", r, !1, "1")),
              l = e.style,
              d = "autoAlpha" === i;
            return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + o), d && 1 === o && "hidden" === U(e, "visibility", r) && 0 !== t && (o = 0), X ? (a = new me(l, "opacity", o, t - o, a)) : (((a = new me(l, "opacity", 100 * o, 100 * (t - o), a)).xn1 = d ? 1 : 0), (l.zoom = 1), (a.type = 2), (a.b = "alpha(opacity=" + a.s + ")"), (a.e = "alpha(opacity=" + (a.s + a.c) + ")"), (a.data = e), (a.plugin = s), (a.setRatio = $e)), d && (((a = new me(l, "visibility", 0, 0, a, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit")).xs0 = "inherit"), n._overwriteProps.push(a.n), n._overwriteProps.push(i)), a;
          },
        });
        var He = function (e, t) {
            t && (e.removeProperty ? (("ms" === t.substr(0, 2) || "webkit" === t.substr(0, 6)) && (t = "-" + t), e.removeProperty(t.replace(C, "-$1").toLowerCase())) : e.removeAttribute(t));
          },
          Xe = function (e) {
            if (((this.t._gsClassPT = this), 1 === e || 0 === e)) {
              this.t.setAttribute("class", 0 === e ? this.b : this.e);
              for (var t = this.data, i = this.t.style; t; ) t.v ? (i[t.p] = t.v) : He(i, t.p), (t = t._next);
              1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null);
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
          };
        be("className", {
          parser: function (e, t, n, a, s, o, l) {
            var d,
              u,
              c,
              p,
              h,
              f = e.getAttribute("class") || "",
              m = e.style.cssText;
            if ((((s = a._classNamePT = new me(e, n, 0, 0, s, 2)).setRatio = Xe), (s.pr = -11), (i = !0), (s.b = f), (u = Q(e, r)), (c = e._gsClassPT))) {
              for (p = {}, h = c.data; h; ) (p[h.p] = 1), (h = h._next);
              c.setRatio(1);
            }
            return (e._gsClassPT = s), (s.e = "=" !== t.charAt(1) ? t : f.replace(new RegExp("\\s*\\b" + t.substr(2) + "\\b"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : "")), e.setAttribute("class", s.e), (d = J(e, u, Q(e), l, p)), e.setAttribute("class", f), (s.data = d.firstMPT), (e.style.cssText = m), (s.xfirst = a.parse(e, d.difs, s, o));
          },
        });
        var je = function (e) {
          if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
            var t,
              i,
              n,
              r,
              a,
              s = this.t.style,
              o = l.transform.parse;
            if ("all" === this.e) (s.cssText = ""), (r = !0);
            else for (n = (t = this.e.split(" ").join("").split(",")).length; --n > -1; ) l[(i = t[n])] && (l[i].parse === o ? (r = !0) : (i = "transformOrigin" === i ? Ee : l[i].p)), He(s, i);
            r && (He(s, Se), (a = this.t._gsTransform) && (a.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform));
          }
        };
        for (
          be("clearProps", {
            parser: function (e, t, n, r, a) {
              return ((a = new me(e, n, 0, 0, a, 2)).setRatio = je), (a.e = t), (a.pr = -10), (a.data = r._tween), (i = !0), a;
            },
          }),
            d = "bezier,throwProps,physicsProps,physics2D".split(","),
            ye = d.length;
          ye--;

        )
          xe(d[ye]);
        ((d = s.prototype)._firstPT = d._lastParsedTransform = d._transform = null),
          (d._onInitTween = function (e, t, o) {
            if (!e.nodeType) return !1;
            (this._target = e), (this._tween = o), (this._vars = t), (u = t.autoRound), (i = !1), (n = t.suffixMap || s.suffixMap), (r = V(e, "")), (a = this._overwriteProps);
            var d,
              h,
              m,
              v,
              g,
              y,
              w,
              b,
              x,
              T = e.style;
            if ((c && "" === T.zIndex && ("auto" === (d = U(e, "zIndex", r)) || "" === d) && this._addLazySet(T, "zIndex", 0), "string" == typeof t && ((v = T.cssText), (d = Q(e, r)), (T.cssText = v + ";" + t), (d = J(e, d, Q(e)).difs), !X && _.test(t) && (d.opacity = parseFloat(RegExp.$1)), (t = d), (T.cssText = v)), (this._firstPT = h = t.className ? l.className.parse(e, t.className, "className", this, null, null, t) : this.parse(e, t, null)), this._transformType)) {
              for (x = 3 === this._transformType, Se ? p && ((c = !0), "" === T.zIndex && ("auto" === (w = U(e, "zIndex", r)) || "" === w) && this._addLazySet(T, "zIndex", 0), f && this._addLazySet(T, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : (T.zoom = 1), m = h; m && m._next; ) m = m._next;
              (b = new me(e, "transform", 0, 0, null, 2)), this._linkCSSP(b, null, m), (b.setRatio = Se ? Fe : Be), (b.data = this._transform || Re(e, r, !0)), (b.tween = o), (b.pr = -1), a.pop();
            }
            if (i) {
              for (; h; ) {
                for (y = h._next, m = v; m && m.pr > h.pr; ) m = m._next;
                (h._prev = m ? m._prev : g) ? (h._prev._next = h) : (v = h), (h._next = m) ? (m._prev = h) : (g = h), (h = y);
              }
              this._firstPT = v;
            }
            return !0;
          }),
          (d.parse = function (e, t, i, a) {
            var s,
              o,
              d,
              c,
              p,
              h,
              f,
              m,
              v,
              g,
              y = e.style;
            for (s in t) (h = t[s]), (o = l[s]) ? (i = o.parse(e, h, s, this, i, a, t)) : ((p = U(e, s, r) + ""), (v = "string" == typeof h), "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || (v && S.test(h)) ? (v || (h = ((h = de(h)).length > 3 ? "rgba(" : "rgb(") + h.join(",") + ")"), (i = ge(y, s, p, h, !0, "transparent", i, 0, a))) : !v || (-1 === h.indexOf(" ") && -1 === h.indexOf(",")) ? ((f = (d = parseFloat(p)) || 0 === d ? p.substr((d + "").length) : ""), ("" === p || "auto" === p) && ("width" === s || "height" === s ? ((d = ie(e, s, r)), (f = "px")) : "left" === s || "top" === s ? ((d = Z(e, s, r)), (f = "px")) : ((d = "opacity" !== s ? 0 : 1), (f = ""))), (g = v && "=" === h.charAt(1)) ? ((c = parseInt(h.charAt(0) + "1", 10)), (h = h.substr(2)), (c *= parseFloat(h)), (m = h.replace(b, ""))) : ((c = parseFloat(h)), (m = v ? h.replace(b, "") : "")), "" === m && (m = s in n ? n[s] : f), (h = c || 0 === c ? (g ? c + d : c) + m : t[s]), f !== m && "" !== m && (c || 0 === c) && d && ((d = K(e, s, d, f)), "%" === m ? ((d /= K(e, s, 100, "%") / 100), !0 !== t.strictUnits && (p = d + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? (d /= K(e, s, 1, m)) : "px" !== m && ((c = K(e, s, c, m)), (m = "px")), g && (c || 0 === c) && (h = c + d + m)), g && (c += d), (!d && 0 !== d) || (!c && 0 !== c) ? (void 0 !== y[s] && (h || (h + "" != "NaN" && null != h)) ? ((i = new me(y, s, c || d || 0, 0, i, -1, s, !1, 0, p, h)).xs0 = "none" !== h || ("display" !== s && -1 === s.indexOf("Style")) ? h : p) : Y("invalid " + s + " tween value: " + t[s])) : ((i = new me(y, s, d, c - d, i, 0, s, !1 !== u && ("px" === m || "zIndex" === s), 0, p, h)).xs0 = m)) : (i = ge(y, s, p, h, !0, null, i, 0, a))), a && i && !i.plugin && (i.plugin = a);
            return i;
          }),
          (d.setRatio = function (e) {
            var t,
              i,
              n,
              r = this._firstPT,
              a = 1e-6;
            if (1 !== e || (this._tween._time !== this._tween._duration && 0 !== this._tween._time))
              if (e || (this._tween._time !== this._tween._duration && 0 !== this._tween._time) || -1e-6 === this._tween._rawPrevTime)
                for (; r; ) {
                  if (((t = r.c * e + r.s), r.r ? (t = Math.round(t)) : a > t && t > -a && (t = 0), r.type))
                    if (1 === r.type)
                      if (2 === (n = r.l)) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2;
                      else if (3 === n) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                      else if (4 === n) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                      else if (5 === n) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                      else {
                        for (i = r.xs0 + t + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                        r.t[r.p] = i;
                      }
                    else -1 === r.type ? (r.t[r.p] = r.xs0) : r.setRatio && r.setRatio(e);
                  else r.t[r.p] = t + r.xs0;
                  r = r._next;
                }
              else for (; r; ) 2 !== r.type ? (r.t[r.p] = r.b) : r.setRatio(e), (r = r._next);
            else
              for (; r; ) {
                if (2 !== r.type)
                  if (r.r && -1 !== r.type)
                    if (((t = Math.round(r.s + r.c)), r.type)) {
                      if (1 === r.type) {
                        for (n = r.l, i = r.xs0 + t + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                        r.t[r.p] = i;
                      }
                    } else r.t[r.p] = t + r.xs0;
                  else r.t[r.p] = r.e;
                else r.setRatio(e);
                r = r._next;
              }
          }),
          (d._enableTransforms = function (e) {
            (this._transform = this._transform || Re(this._target, r, !0)), (this._transformType = (this._transform.svg && _e) || (!e && 3 !== this._transformType) ? 2 : 3);
          });
        var Ye = function (e) {
          (this.t[this.p] = this.e), this.data._linkCSSP(this, this._next, null, !0);
        };
        (d._addLazySet = function (e, t, i) {
          var n = (this._firstPT = new me(e, t, 0, 0, this._firstPT, 2));
          (n.e = i), (n.setRatio = Ye), (n.data = this);
        }),
          (d._linkCSSP = function (e, t, i, n) {
            return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? (e._prev._next = e._next) : this._firstPT === e && ((this._firstPT = e._next), (n = !0)), i ? (i._next = e) : n || null !== this._firstPT || (this._firstPT = e), (e._next = t), (e._prev = i)), e;
          }),
          (d._kill = function (t) {
            var i,
              n,
              r,
              a = t;
            if (t.autoAlpha || t.alpha) {
              for (n in ((a = {}), t)) a[n] = t[n];
              (a.opacity = 1), a.autoAlpha && (a.visibility = 1);
            }
            return t.className && (i = this._classNamePT) && ((r = i.xfirst) && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), (this._classNamePT = null)), e.prototype._kill.call(this, a);
          });
        var qe = function (e, t, i) {
          var n, r, a, s;
          if (e.slice) for (r = e.length; --r > -1; ) qe(e[r], t, i);
          else for (r = (n = e.childNodes).length; --r > -1; ) (s = (a = n[r]).type), a.style && (t.push(Q(a)), i && i.push(a)), (1 !== s && 9 !== s && 11 !== s) || !a.childNodes.length || qe(a, t, i);
        };
        return (
          (s.cascadeTo = function (e, i, n) {
            var r,
              a,
              s,
              o,
              l = t.to(e, i, n),
              d = [l],
              u = [],
              c = [],
              p = [],
              h = t._internals.reservedProps;
            for (qe((e = l._targets || l.target), u, p), l.render(i, !0, !0), qe(e, c), l.render(0, !0, !0), l._enabled(!0), r = p.length; --r > -1; )
              if ((a = J(p[r], u[r], c[r])).firstMPT) {
                for (s in ((a = a.difs), n)) h[s] && (a[s] = n[s]);
                for (s in ((o = {}), a)) o[s] = u[r][s];
                d.push(t.fromTo(p[r], i, o, a));
              }
            return d;
          }),
          e.activate([s]),
          s
        );
      },
      !0
    ),
    (function () {
      var e = _gsScope._gsDefine.plugin({
          propName: "roundProps",
          version: "1.5",
          priority: -1,
          API: 2,
          init: function (e, t, i) {
            return (this._tween = i), !0;
          },
        }),
        t = function (e) {
          for (; e; ) e.f || e.blob || (e.r = 1), (e = e._next);
        },
        i = e.prototype;
      (i._onInitAllProps = function () {
        for (var e, i, n, r = this._tween, a = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), s = a.length, o = {}, l = r._propLookup.roundProps; --s > -1; ) o[a[s]] = 1;
        for (s = a.length; --s > -1; ) for (e = a[s], i = r._firstPT; i; ) (n = i._next), i.pg ? i.t._roundProps(o, !0) : i.n === e && (2 === i.f && i.t ? t(i.t._firstPT) : (this._add(i.t, e, i.s, i.c), n && (n._prev = i._prev), i._prev ? (i._prev._next = n) : r._firstPT === i && (r._firstPT = n), (i._next = i._prev = null), (r._propLookup[e] = l))), (i = n);
        return !1;
      }),
        (i._add = function (e, t, i, n) {
          this._addTween(e, t, i, i + n, t, !0), this._overwriteProps.push(t);
        });
    })(),
    _gsScope._gsDefine.plugin({
      propName: "attr",
      API: 2,
      version: "0.5.0",
      init: function (e, t, i) {
        var n;
        if ("function" != typeof e.setAttribute) return !1;
        for (n in t) this._addTween(e, "setAttribute", e.getAttribute(n) + "", t[n] + "", n, !1, n), this._overwriteProps.push(n);
        return !0;
      },
    }),
    (_gsScope._gsDefine.plugin({
      propName: "directionalRotation",
      version: "0.2.1",
      API: 2,
      init: function (e, t, i) {
        "object" != typeof t && (t = { rotation: t }), (this.finals = {});
        var n,
          r,
          a,
          s,
          o,
          l = !0 === t.useRadians ? 2 * Math.PI : 360,
          d = 1e-6;
        for (n in t) "useRadians" !== n && ((r = (o = (t[n] + "").split("_"))[0]), (a = parseFloat("function" != typeof e[n] ? e[n] : e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]())), (s = (this.finals[n] = "string" == typeof r && "=" === r.charAt(1) ? a + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0) - a), o.length && (-1 !== (r = o.join("_")).indexOf("short") && (s %= l) != s % (l / 2) && (s = 0 > s ? s + l : s - l), -1 !== r.indexOf("_cw") && 0 > s ? (s = ((s + 9999999999 * l) % l) - ((s / l) | 0) * l) : -1 !== r.indexOf("ccw") && s > 0 && (s = ((s - 9999999999 * l) % l) - ((s / l) | 0) * l)), (s > d || -d > s) && (this._addTween(e, n, a, a + s, n), this._overwriteProps.push(n)));
        return !0;
      },
      set: function (e) {
        var t;
        if (1 !== e) this._super.setRatio.call(this, e);
        else for (t = this._firstPT; t; ) t.f ? t.t[t.p](this.finals[t.p]) : (t.t[t.p] = this.finals[t.p]), (t = t._next);
      },
    })._autoCSS = !0),
    _gsScope._gsDefine(
      "easing.Back",
      ["easing.Ease"],
      function (e) {
        var t,
          i,
          n,
          r = _gsScope.GreenSockGlobals || _gsScope,
          a = 2 * Math.PI,
          s = Math.PI / 2,
          o = r.com.greensock._class,
          l = function (t, i) {
            var n = o("easing." + t, function () {}, !0),
              r = (n.prototype = new e());
            return (r.constructor = n), (r.getRatio = i), n;
          },
          d = e.register || function () {},
          u = function (e, t, i, n, r) {
            var a = o("easing." + e, { easeOut: new t(), easeIn: new i(), easeInOut: new n() }, !0);
            return d(a, e), a;
          },
          c = function (e, t, i) {
            (this.t = e), (this.v = t), i && ((this.next = i), (i.prev = this), (this.c = i.v - t), (this.gap = i.t - e));
          },
          p = function (t, i) {
            var n = o(
                "easing." + t,
                function (e) {
                  (this._p1 = e || 0 === e ? e : 1.70158), (this._p2 = 1.525 * this._p1);
                },
                !0
              ),
              r = (n.prototype = new e());
            return (
              (r.constructor = n),
              (r.getRatio = i),
              (r.config = function (e) {
                return new n(e);
              }),
              n
            );
          },
          h = u(
            "Back",
            p("BackOut", function (e) {
              return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1;
            }),
            p("BackIn", function (e) {
              return e * e * ((this._p1 + 1) * e - this._p1);
            }),
            p("BackInOut", function (e) {
              return (e *= 2) < 1 ? 0.5 * e * e * ((this._p2 + 1) * e - this._p2) : 0.5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2);
            })
          ),
          f = o(
            "easing.SlowMo",
            function (e, t, i) {
              (t = t || 0 === t ? t : 0.7), null == e ? (e = 0.7) : e > 1 && (e = 1), (this._p = 1 !== e ? t : 0), (this._p1 = (1 - e) / 2), (this._p2 = e), (this._p3 = this._p1 + this._p2), (this._calcEnd = !0 === i);
            },
            !0
          ),
          m = (f.prototype = new e());
        return (
          (m.constructor = f),
          (m.getRatio = function (e) {
            var t = e + (0.5 - e) * this._p;
            return e < this._p1 ? (this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t) : e > this._p3 ? (this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e) : this._calcEnd ? 1 : t;
          }),
          (f.ease = new f(0.7, 0.7)),
          (m.config = f.config =
            function (e, t, i) {
              return new f(e, t, i);
            }),
          ((m = (t = o(
            "easing.SteppedEase",
            function (e) {
              (this._p1 = 1 / (e = e || 1)), (this._p2 = e + 1);
            },
            !0
          )).prototype =
            new e()).constructor = t),
          (m.getRatio = function (e) {
            return 0 > e ? (e = 0) : e >= 1 && (e = 0.999999999), ((this._p2 * e) >> 0) * this._p1;
          }),
          (m.config = t.config =
            function (e) {
              return new t(e);
            }),
          (i = o(
            "easing.RoughEase",
            function (t) {
              for (var i, n, r, a, s, o, l = (t = t || {}).taper || "none", d = [], u = 0, p = 0 | (t.points || 20), h = p, f = !1 !== t.randomize, m = !0 === t.clamp, v = t.template instanceof e ? t.template : null, g = "number" == typeof t.strength ? 0.4 * t.strength : 0.4; --h > -1; ) (i = f ? Math.random() : (1 / p) * h), (n = v ? v.getRatio(i) : i), (r = "none" === l ? g : "out" === l ? (a = 1 - i) * a * g : "in" === l ? i * i * g : 0.5 > i ? (a = 2 * i) * a * 0.5 * g : (a = 2 * (1 - i)) * a * 0.5 * g), f ? (n += Math.random() * r - 0.5 * r) : h % 2 ? (n += 0.5 * r) : (n -= 0.5 * r), m && (n > 1 ? (n = 1) : 0 > n && (n = 0)), (d[u++] = { x: i, y: n });
              for (
                d.sort(function (e, t) {
                  return e.x - t.x;
                }),
                  o = new c(1, 1, null),
                  h = p;
                --h > -1;

              )
                o = new c((s = d[h]).x, s.y, o);
              this._prev = new c(0, 0, 0 !== o.t ? o : o.next);
            },
            !0
          )),
          ((m = i.prototype = new e()).constructor = i),
          (m.getRatio = function (e) {
            var t = this._prev;
            if (e > t.t) {
              for (; t.next && e >= t.t; ) t = t.next;
              t = t.prev;
            } else for (; t.prev && e <= t.t; ) t = t.prev;
            return (this._prev = t), t.v + ((e - t.t) / t.gap) * t.c;
          }),
          (m.config = function (e) {
            return new i(e);
          }),
          (i.ease = new i()),
          u(
            "Bounce",
            l("BounceOut", function (e) {
              return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
            }),
            l("BounceIn", function (e) {
              return (e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : 2 / 2.75 > e ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) : 2.5 / 2.75 > e ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
            }),
            l("BounceInOut", function (e) {
              var t = 0.5 > e;
              return (e = 1 / 2.75 > (e = t ? 1 - 2 * e : 2 * e - 1) ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375), t ? 0.5 * (1 - e) : 0.5 * e + 0.5;
            })
          ),
          u(
            "Circ",
            l("CircOut", function (e) {
              return Math.sqrt(1 - (e -= 1) * e);
            }),
            l("CircIn", function (e) {
              return -(Math.sqrt(1 - e * e) - 1);
            }),
            l("CircInOut", function (e) {
              return (e *= 2) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
            })
          ),
          u(
            "Elastic",
            (n = function (t, i, n) {
              var r = o(
                  "easing." + t,
                  function (e, t) {
                    (this._p1 = e >= 1 ? e : 1), (this._p2 = (t || n) / (1 > e ? e : 1)), (this._p3 = (this._p2 / a) * (Math.asin(1 / this._p1) || 0)), (this._p2 = a / this._p2);
                  },
                  !0
                ),
                s = (r.prototype = new e());
              return (
                (s.constructor = r),
                (s.getRatio = i),
                (s.config = function (e, t) {
                  return new r(e, t);
                }),
                r
              );
            })(
              "ElasticOut",
              function (e) {
                return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1;
              },
              0.3
            ),
            n(
              "ElasticIn",
              function (e) {
                return -this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2);
              },
              0.3
            ),
            n(
              "ElasticInOut",
              function (e) {
                return (e *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * -0.5 : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * 0.5 + 1;
              },
              0.45
            )
          ),
          u(
            "Expo",
            l("ExpoOut", function (e) {
              return 1 - Math.pow(2, -10 * e);
            }),
            l("ExpoIn", function (e) {
              return Math.pow(2, 10 * (e - 1)) - 0.001;
            }),
            l("ExpoInOut", function (e) {
              return (e *= 2) < 1 ? 0.5 * Math.pow(2, 10 * (e - 1)) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
            })
          ),
          u(
            "Sine",
            l("SineOut", function (e) {
              return Math.sin(e * s);
            }),
            l("SineIn", function (e) {
              return 1 - Math.cos(e * s);
            }),
            l("SineInOut", function (e) {
              return -0.5 * (Math.cos(Math.PI * e) - 1);
            })
          ),
          o(
            "easing.EaseLookup",
            {
              find: function (t) {
                return e.map[t];
              },
            },
            !0
          ),
          d(r.SlowMo, "SlowMo", "ease,"),
          d(i, "RoughEase", "ease,"),
          d(t, "SteppedEase", "ease,"),
          h
        );
      },
      !0
    );
}),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function (e, t) {
    "use strict";
    var i = (e.GreenSockGlobals = e.GreenSockGlobals || e);
    if (!i.TweenLite) {
      var n,
        r,
        a,
        s,
        o,
        l = function (e) {
          var t,
            n = e.split("."),
            r = i;
          for (t = 0; t < n.length; t++) r[n[t]] = r = r[n[t]] || {};
          return r;
        },
        d = l("com.greensock"),
        u = 1e-10,
        c = function (e) {
          var t,
            i = [],
            n = e.length;
          for (t = 0; t !== n; i.push(e[t++]));
          return i;
        },
        p = function () {},
        h = (function () {
          var e = Object.prototype.toString,
            t = e.call([]);
          return function (i) {
            return null != i && (i instanceof Array || ("object" == typeof i && !!i.push && e.call(i) === t));
          };
        })(),
        f = {},
        m = function (t, n, r, a) {
          (this.sc = f[t] ? f[t].sc : []), (f[t] = this), (this.gsClass = null), (this.func = r);
          var s = [];
          (this.check = function (o) {
            for (var d, u, c, p, h, v = n.length, g = v; --v > -1; ) (d = f[n[v]] || new m(n[v], [])).gsClass ? ((s[v] = d.gsClass), g--) : o && d.sc.push(this);
            if (0 === g && r)
              for (
                c = (u = ("com.greensock." + t).split(".")).pop(),
                  p = l(u.join("."))[c] = this.gsClass = r.apply(r, s),
                  a &&
                    ((i[c] = p),
                    !(h = "undefined" != typeof module && module.exports) && "function" == typeof define && define.amd
                      ? define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + t.split(".").pop(), [], function () {
                          return p;
                        })
                      : "TweenMax" === t && h && (module.exports = p)),
                  v = 0;
                v < this.sc.length;
                v++
              )
                this.sc[v].check();
          }),
            this.check(!0);
        },
        v = (e._gsDefine = function (e, t, i, n) {
          return new m(e, t, i, n);
        }),
        g = (d._class = function (e, t, i) {
          return (
            (t = t || function () {}),
            v(
              e,
              [],
              function () {
                return t;
              },
              i
            ),
            t
          );
        });
      v.globals = i;
      var y = [0, 0, 1, 1],
        w = [],
        b = g(
          "easing.Ease",
          function (e, t, i, n) {
            (this._func = e), (this._type = i || 0), (this._power = n || 0), (this._params = t ? y.concat(t) : y);
          },
          !0
        ),
        x = (b.map = {}),
        _ = (b.register = function (e, t, i, n) {
          for (var r, a, s, o, l = t.split(","), u = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1; ) for (a = l[u], r = n ? g("easing." + a, null, !0) : d.easing[a] || {}, s = c.length; --s > -1; ) x[a + "." + (o = c[s])] = x[o + a] = r[o] = e.getRatio ? e : e[o] || new e();
        });
      for (
        (a = b.prototype)._calcEnd = !1,
          a.getRatio = function (e) {
            if (this._func) return (this._params[0] = e), this._func.apply(null, this._params);
            var t = this._type,
              i = this._power,
              n = 1 === t ? 1 - e : 2 === t ? e : 0.5 > e ? 2 * e : 2 * (1 - e);
            return 1 === i ? (n *= n) : 2 === i ? (n *= n * n) : 3 === i ? (n *= n * n * n) : 4 === i && (n *= n * n * n * n), 1 === t ? 1 - n : 2 === t ? n : 0.5 > e ? n / 2 : 1 - n / 2;
          },
          r = (n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length;
        --r > -1;

      )
        (a = n[r] + ",Power" + r), _(new b(null, null, 1, r), a, "easeOut", !0), _(new b(null, null, 2, r), a, "easeIn" + (0 === r ? ",easeNone" : "")), _(new b(null, null, 3, r), a, "easeInOut");
      (x.linear = d.easing.Linear.easeIn), (x.swing = d.easing.Quad.easeInOut);
      var T = g("events.EventDispatcher", function (e) {
        (this._listeners = {}), (this._eventTarget = e || this);
      });
      ((a = T.prototype).addEventListener = function (e, t, i, n, r) {
        r = r || 0;
        var a,
          l,
          d = this._listeners[e],
          u = 0;
        for (null == d && (this._listeners[e] = d = []), l = d.length; --l > -1; ) (a = d[l]).c === t && a.s === i ? d.splice(l, 1) : 0 === u && a.pr < r && (u = l + 1);
        d.splice(u, 0, { c: t, s: i, up: n, pr: r }), this !== s || o || s.wake();
      }),
        (a.removeEventListener = function (e, t) {
          var i,
            n = this._listeners[e];
          if (n) for (i = n.length; --i > -1; ) if (n[i].c === t) return void n.splice(i, 1);
        }),
        (a.dispatchEvent = function (e) {
          var t,
            i,
            n,
            r = this._listeners[e];
          if (r) for (t = r.length, i = this._eventTarget; --t > -1; ) (n = r[t]) && (n.up ? n.c.call(n.s || i, { type: e, target: i }) : n.c.call(n.s || i));
        });
      var S = e.requestAnimationFrame,
        C = e.cancelAnimationFrame,
        E =
          Date.now ||
          function () {
            return new Date().getTime();
          },
        M = E();
      for (r = (n = ["ms", "moz", "webkit", "o"]).length; --r > -1 && !S; ) (S = e[n[r] + "RequestAnimationFrame"]), (C = e[n[r] + "CancelAnimationFrame"] || e[n[r] + "CancelRequestAnimationFrame"]);
      g("Ticker", function (e, t) {
        var i,
          n,
          r,
          a,
          l,
          d = this,
          c = E(),
          h = !(!1 === t || !S) && "auto",
          f = 500,
          m = 33,
          v = function (e) {
            var t,
              s,
              o = E() - M;
            o > f && (c += o - m), (d.time = ((M += o) - c) / 1e3), (t = d.time - l), (!i || t > 0 || !0 === e) && (d.frame++, (l += t + (t >= a ? 0.004 : a - t)), (s = !0)), !0 !== e && (r = n(v)), s && d.dispatchEvent("tick");
          };
        T.call(d),
          (d.time = d.frame = 0),
          (d.tick = function () {
            v(!0);
          }),
          (d.lagSmoothing = function (e, t) {
            (f = e || 1 / u), (m = Math.min(t, f, 0));
          }),
          (d.sleep = function () {
            null != r && (h && C ? C(r) : clearTimeout(r), (n = p), (r = null), d === s && (o = !1));
          }),
          (d.wake = function (e) {
            null !== r ? d.sleep() : e ? (c += -M + (M = E())) : d.frame > 10 && (M = E() - f + 5),
              (n =
                0 === i
                  ? p
                  : h && S
                  ? S
                  : function (e) {
                      return setTimeout(e, (1e3 * (l - d.time) + 1) | 0);
                    }),
              d === s && (o = !0),
              v(2);
          }),
          (d.fps = function (e) {
            return arguments.length ? ((l = this.time + (a = 1 / ((i = e) || 60))), void d.wake()) : i;
          }),
          (d.useRAF = function (e) {
            return arguments.length ? (d.sleep(), (h = e), void d.fps(i)) : h;
          }),
          d.fps(e),
          setTimeout(function () {
            "auto" === h && d.frame < 5 && "hidden" !== document.visibilityState && d.useRAF(!1);
          }, 1500);
      }),
        ((a = d.Ticker.prototype = new d.events.EventDispatcher()).constructor = d.Ticker);
      var P = g("core.Animation", function (e, t) {
        if (((this.vars = t = t || {}), (this._duration = this._totalDuration = e || 0), (this._delay = Number(t.delay) || 0), (this._timeScale = 1), (this._active = !0 === t.immediateRender), (this.data = t.data), (this._reversed = !0 === t.reversed), G)) {
          o || s.wake();
          var i = this.vars.useFrames ? q : G;
          i.add(this, i._time), this.vars.paused && this.paused(!0);
        }
      });
      (s = P.ticker = new d.Ticker()), ((a = P.prototype)._dirty = a._gc = a._initted = a._paused = !1), (a._totalTime = a._time = 0), (a._rawPrevTime = -1), (a._next = a._last = a._onUpdate = a._timeline = a.timeline = null), (a._paused = !1);
      var k = function () {
        o && E() - M > 2e3 && s.wake(), setTimeout(k, 2e3);
      };
      k(),
        (a.play = function (e, t) {
          return null != e && this.seek(e, t), this.reversed(!1).paused(!1);
        }),
        (a.pause = function (e, t) {
          return null != e && this.seek(e, t), this.paused(!0);
        }),
        (a.resume = function (e, t) {
          return null != e && this.seek(e, t), this.paused(!1);
        }),
        (a.seek = function (e, t) {
          return this.totalTime(Number(e), !1 !== t);
        }),
        (a.restart = function (e, t) {
          return this.reversed(!1)
            .paused(!1)
            .totalTime(e ? -this._delay : 0, !1 !== t, !0);
        }),
        (a.reverse = function (e, t) {
          return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1);
        }),
        (a.render = function (e, t, i) {}),
        (a.invalidate = function () {
          return (this._time = this._totalTime = 0), (this._initted = this._gc = !1), (this._rawPrevTime = -1), (this._gc || !this.timeline) && this._enabled(!0), this;
        }),
        (a.isActive = function () {
          var e,
            t = this._timeline,
            i = this._startTime;
          return !t || (!this._gc && !this._paused && t.isActive() && (e = t.rawTime()) >= i && e < i + this.totalDuration() / this._timeScale);
        }),
        (a._enabled = function (e, t) {
          return o || s.wake(), (this._gc = !e), (this._active = this.isActive()), !0 !== t && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1;
        }),
        (a._kill = function (e, t) {
          return this._enabled(!1, !1);
        }),
        (a.kill = function (e, t) {
          return this._kill(e, t), this;
        }),
        (a._uncache = function (e) {
          for (var t = e ? this : this.timeline; t; ) (t._dirty = !0), (t = t.timeline);
          return this;
        }),
        (a._swapSelfInParams = function (e) {
          for (var t = e.length, i = e.concat(); --t > -1; ) "{self}" === e[t] && (i[t] = this);
          return i;
        }),
        (a._callback = function (e) {
          var t = this.vars;
          t[e].apply(t[e + "Scope"] || t.callbackScope || this, t[e + "Params"] || w);
        }),
        (a.eventCallback = function (e, t, i, n) {
          if ("on" === (e || "").substr(0, 2)) {
            var r = this.vars;
            if (1 === arguments.length) return r[e];
            null == t ? delete r[e] : ((r[e] = t), (r[e + "Params"] = h(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i), (r[e + "Scope"] = n)), "onUpdate" === e && (this._onUpdate = t);
          }
          return this;
        }),
        (a.delay = function (e) {
          return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), (this._delay = e), this) : this._delay;
        }),
        (a.duration = function (e) {
          return arguments.length ? ((this._duration = this._totalDuration = e), this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : ((this._dirty = !1), this._duration);
        }),
        (a.totalDuration = function (e) {
          return (this._dirty = !1), arguments.length ? this.duration(e) : this._totalDuration;
        }),
        (a.time = function (e, t) {
          return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time;
        }),
        (a.totalTime = function (e, t, i) {
          if ((o || s.wake(), !arguments.length)) return this._totalTime;
          if (this._timeline) {
            if ((0 > e && !i && (e += this.totalDuration()), this._timeline.smoothChildTiming)) {
              this._dirty && this.totalDuration();
              var n = this._totalDuration,
                r = this._timeline;
              if ((e > n && !i && (e = n), (this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - e : e) / this._timeScale), r._dirty || this._uncache(!1), r._timeline)) for (; r._timeline; ) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), (r = r._timeline);
            }
            this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && (D.length && V(), this.render(e, t, !1), D.length && V());
          }
          return this;
        }),
        (a.progress = a.totalProgress =
          function (e, t) {
            var i = this.duration();
            return arguments.length ? this.totalTime(i * e, t) : i ? this._time / i : this.ratio;
          }),
        (a.startTime = function (e) {
          return arguments.length ? (e !== this._startTime && ((this._startTime = e), this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime;
        }),
        (a.endTime = function (e) {
          return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale;
        }),
        (a.timeScale = function (e) {
          if (!arguments.length) return this._timeScale;
          if (((e = e || u), this._timeline && this._timeline.smoothChildTiming)) {
            var t = this._pauseTime,
              i = t || 0 === t ? t : this._timeline.totalTime();
            this._startTime = i - ((i - this._startTime) * this._timeScale) / e;
          }
          return (this._timeScale = e), this._uncache(!1);
        }),
        (a.reversed = function (e) {
          return arguments.length ? (e != this._reversed && ((this._reversed = e), this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed;
        }),
        (a.paused = function (e) {
          if (!arguments.length) return this._paused;
          var t,
            i,
            n = this._timeline;
          return e != this._paused && n && (o || e || s.wake(), (i = (t = n.rawTime()) - this._pauseTime), !e && n.smoothChildTiming && ((this._startTime += i), this._uncache(!1)), (this._pauseTime = e ? t : null), (this._paused = e), (this._active = this.isActive()), !e && 0 !== i && this._initted && this.duration() && this.render((t = n.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale), t === this._totalTime, !0)), this._gc && !e && this._enabled(!0, !1), this;
        });
      var z = g("core.SimpleTimeline", function (e) {
        P.call(this, 0, e), (this.autoRemoveChildren = this.smoothChildTiming = !0);
      });
      ((a = z.prototype = new P()).constructor = z),
        (a.kill()._gc = !1),
        (a._first = a._last = a._recent = null),
        (a._sortChildren = !1),
        (a.add = a.insert =
          function (e, t, i, n) {
            var r, a;
            if (((e._startTime = Number(t || 0) + e._delay), e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), (e.timeline = e._timeline = this), e._gc && e._enabled(!0, !0), (r = this._last), this._sortChildren)) for (a = e._startTime; r && r._startTime > a; ) r = r._prev;
            return r ? ((e._next = r._next), (r._next = e)) : ((e._next = this._first), (this._first = e)), e._next ? (e._next._prev = e) : (this._last = e), (e._prev = r), (this._recent = e), this._timeline && this._uncache(!0), this;
          }),
        (a._remove = function (e, t) {
          return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? (e._prev._next = e._next) : this._first === e && (this._first = e._next), e._next ? (e._next._prev = e._prev) : this._last === e && (this._last = e._prev), (e._next = e._prev = e.timeline = null), e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this;
        }),
        (a.render = function (e, t, i) {
          var n,
            r = this._first;
          for (this._totalTime = this._time = this._rawPrevTime = e; r; ) (n = r._next), (r._active || (e >= r._startTime && !r._paused)) && r.render(r._reversed ? (r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale : (e - r._startTime) * r._timeScale, t, i), (r = n);
        }),
        (a.rawTime = function () {
          return o || s.wake(), this._totalTime;
        });
      var A = g(
          "TweenLite",
          function (t, i, n) {
            if ((P.call(this, i, n), (this.render = A.prototype.render), null == t)) throw "Cannot tween a null target.";
            this.target = t = "string" != typeof t ? t : A.selector(t) || t;
            var r,
              a,
              s,
              o = t.jquery || (t.length && t !== e && t[0] && (t[0] === e || (t[0].nodeType && t[0].style && !t.nodeType))),
              l = this.vars.overwrite;
            if (((this._overwrite = l = null == l ? Y[A.defaultOverwrite] : "number" == typeof l ? l >> 0 : Y[l]), (o || t instanceof Array || (t.push && h(t))) && "number" != typeof t[0])) for (this._targets = s = c(t), this._propLookup = [], this._siblings = [], r = 0; r < s.length; r++) (a = s[r]) ? ("string" != typeof a ? (a.length && a !== e && a[0] && (a[0] === e || (a[0].nodeType && a[0].style && !a.nodeType)) ? (s.splice(r--, 1), (this._targets = s = s.concat(c(a)))) : ((this._siblings[r] = U(a, this, !1)), 1 === l && this._siblings[r].length > 1 && Z(a, this, null, 1, this._siblings[r]))) : "string" == typeof (a = s[r--] = A.selector(a)) && s.splice(r + 1, 1)) : s.splice(r--, 1);
            else (this._propLookup = {}), (this._siblings = U(t, this, !1)), 1 === l && this._siblings.length > 1 && Z(t, this, null, 1, this._siblings);
            (this.vars.immediateRender || (0 === i && 0 === this._delay && !1 !== this.vars.immediateRender)) && ((this._time = -u), this.render(-this._delay));
          },
          !0
        ),
        O = function (t) {
          return t && t.length && t !== e && t[0] && (t[0] === e || (t[0].nodeType && t[0].style && !t.nodeType));
        };
      ((a = A.prototype = new P()).constructor = A),
        (a.kill()._gc = !1),
        (a.ratio = 0),
        (a._firstPT = a._targets = a._overwrittenProps = a._startAt = null),
        (a._notifyPluginsOfEnabled = a._lazy = !1),
        (A.version = "1.18.2"),
        (A.defaultEase = a._ease = new b(null, null, 1, 1)),
        (A.defaultOverwrite = "auto"),
        (A.ticker = s),
        (A.autoSleep = 120),
        (A.lagSmoothing = function (e, t) {
          s.lagSmoothing(e, t);
        }),
        (A.selector =
          e.$ ||
          e.jQuery ||
          function (t) {
            var i = e.$ || e.jQuery;
            return i ? ((A.selector = i), i(t)) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t);
          });
      var D = [],
        L = {},
        I = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        N = function (e) {
          for (var t, i = this._firstPT, n = 1e-6; i; ) (t = i.blob ? (e ? this.join("") : this.start) : i.c * e + i.s), i.r ? (t = Math.round(t)) : n > t && t > -n && (t = 0), i.f ? (i.fp ? i.t[i.p](i.fp, t) : i.t[i.p](t)) : (i.t[i.p] = t), (i = i._next);
        },
        R = function (e, t, i, n) {
          var r,
            a,
            s,
            o,
            l,
            d,
            u,
            c = [e, t],
            p = 0,
            h = "",
            f = 0;
          for (c.start = e, i && (i(c), (e = c[0]), (t = c[1])), c.length = 0, r = e.match(I) || [], a = t.match(I) || [], n && ((n._next = null), (n.blob = 1), (c._firstPT = n)), l = a.length, o = 0; l > o; o++) (h += (d = t.substr(p, t.indexOf((u = a[o]), p) - p)) || !o ? d : ","), (p += d.length), f ? (f = (f + 1) % 5) : "rgba(" === d.substr(-5) && (f = 1), u === r[o] || r.length <= o ? (h += u) : (h && (c.push(h), (h = "")), (s = parseFloat(r[o])), c.push(s), (c._firstPT = { _next: c._firstPT, t: c, p: c.length - 1, s: s, c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - s) || 0, f: 0, r: f && 4 > f })), (p += u.length);
          return (h += t.substr(p)) && c.push(h), (c.setRatio = N), c;
        },
        B = function (e, t, i, n, r, a, s, o) {
          var l,
            d = "get" === i ? e[t] : i,
            u = typeof e[t],
            c = "string" == typeof n && "=" === n.charAt(1),
            p = { t: e, p: t, s: d, f: "function" === u, pg: 0, n: r || t, r: a, pr: 0, c: c ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - d || 0 };
          return "number" !== u && ("function" === u && "get" === i && ((l = t.indexOf("set") || "function" != typeof e["get" + t.substr(3)] ? t : "get" + t.substr(3)), (p.s = d = s ? e[l](s) : e[l]())), "string" == typeof d && (s || isNaN(d)) ? ((p.fp = s), (p = { t: R(d, n, o || A.defaultStringFilter, p), p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: r || t, pr: 0 })) : c || ((p.s = parseFloat(d)), (p.c = parseFloat(n) - p.s || 0))), p.c ? ((p._next = this._firstPT) && (p._next._prev = p), (this._firstPT = p), p) : void 0;
        },
        F = (A._internals = { isArray: h, isSelector: O, lazyTweens: D, blobDif: R }),
        $ = (A._plugins = {}),
        H = (F.tweenLookup = {}),
        X = 0,
        j = (F.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1, stringFilter: 1 }),
        Y = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
        q = (P._rootFramesTimeline = new z()),
        G = (P._rootTimeline = new z()),
        W = 30,
        V = (F.lazyRender = function () {
          var e,
            t = D.length;
          for (L = {}; --t > -1; ) (e = D[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0), (e._lazy = !1));
          D.length = 0;
        });
      (G._startTime = s.time),
        (q._startTime = s.frame),
        (G._active = q._active = !0),
        setTimeout(V, 1),
        (P._updateRoot = A.render =
          function () {
            var e, t, i;
            if ((D.length && V(), G.render((s.time - G._startTime) * G._timeScale, !1, !1), q.render((s.frame - q._startTime) * q._timeScale, !1, !1), D.length && V(), s.frame >= W)) {
              for (i in ((W = s.frame + (parseInt(A.autoSleep, 10) || 120)), H)) {
                for (e = (t = H[i].tweens).length; --e > -1; ) t[e]._gc && t.splice(e, 1);
                0 === t.length && delete H[i];
              }
              if ((!(i = G._first) || i._paused) && A.autoSleep && !q._first && 1 === s._listeners.tick.length) {
                for (; i && i._paused; ) i = i._next;
                i || s.sleep();
              }
            }
          }),
        s.addEventListener("tick", P._updateRoot);
      var U = function (e, t, i) {
          var n,
            r,
            a = e._gsTweenID;
          if ((H[a || (e._gsTweenID = a = "t" + X++)] || (H[a] = { target: e, tweens: [] }), t && (((n = H[a].tweens)[(r = n.length)] = t), i))) for (; --r > -1; ) n[r] === t && n.splice(r, 1);
          return H[a].tweens;
        },
        K = function (e, t, i, n) {
          var r,
            a,
            s = e.vars.onOverwrite;
          return s && (r = s(e, t, i, n)), (s = A.onOverwrite) && (a = s(e, t, i, n)), !1 !== r && !1 !== a;
        },
        Z = function (e, t, i, n, r) {
          var a, s, o, l;
          if (1 === n || n >= 4) {
            for (l = r.length, a = 0; l > a; a++)
              if ((o = r[a]) !== t) o._gc || (o._kill(null, e, t) && (s = !0));
              else if (5 === n) break;
            return s;
          }
          var d,
            c = t._startTime + u,
            p = [],
            h = 0,
            f = 0 === t._duration;
          for (a = r.length; --a > -1; ) (o = r[a]) === t || o._gc || o._paused || (o._timeline !== t._timeline ? ((d = d || Q(t, 0, f)), 0 === Q(o, d, f) && (p[h++] = o)) : o._startTime <= c && o._startTime + o.totalDuration() / o._timeScale > c && (((f || !o._initted) && c - o._startTime <= 2e-10) || (p[h++] = o)));
          for (a = h; --a > -1; )
            if (((o = p[a]), 2 === n && o._kill(i, e, t) && (s = !0), 2 !== n || (!o._firstPT && o._initted))) {
              if (2 !== n && !K(o, t)) continue;
              o._enabled(!1, !1) && (s = !0);
            }
          return s;
        },
        Q = function (e, t, i) {
          for (var n = e._timeline, r = n._timeScale, a = e._startTime; n._timeline; ) {
            if (((a += n._startTime), (r *= n._timeScale), n._paused)) return -100;
            n = n._timeline;
          }
          return (a /= r) > t ? a - t : (i && a === t) || (!e._initted && 2 * u > a - t) ? u : (a += e.totalDuration() / e._timeScale / r) > t + u ? 0 : a - t - u;
        };
      (a._init = function () {
        var e,
          t,
          i,
          n,
          r,
          a = this.vars,
          s = this._overwrittenProps,
          o = this._duration,
          l = !!a.immediateRender,
          d = a.ease;
        if (a.startAt) {
          for (n in (this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), (r = {}), a.startAt)) r[n] = a.startAt[n];
          if (((r.overwrite = !1), (r.immediateRender = !0), (r.lazy = l && !1 !== a.lazy), (r.startAt = r.delay = null), (this._startAt = A.to(this.target, 0, r)), l))
            if (this._time > 0) this._startAt = null;
            else if (0 !== o) return;
        } else if (a.runBackwards && 0 !== o)
          if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), (this._startAt = null);
          else {
            for (n in (0 !== this._time && (l = !1), (i = {}), a)) (j[n] && "autoCSS" !== n) || (i[n] = a[n]);
            if (((i.overwrite = 0), (i.data = "isFromStart"), (i.lazy = l && !1 !== a.lazy), (i.immediateRender = l), (this._startAt = A.to(this.target, 0, i)), l)) {
              if (0 === this._time) return;
            } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
          }
        if (((this._ease = d = d ? (d instanceof b ? d : "function" == typeof d ? new b(d, a.easeParams) : x[d] || A.defaultEase) : A.defaultEase), a.easeParams instanceof Array && d.config && (this._ease = d.config.apply(d, a.easeParams)), (this._easeType = this._ease._type), (this._easePower = this._ease._power), (this._firstPT = null), this._targets)) for (e = this._targets.length; --e > -1; ) this._initProps(this._targets[e], (this._propLookup[e] = {}), this._siblings[e], s ? s[e] : null) && (t = !0);
        else t = this._initProps(this.target, this._propLookup, this._siblings, s);
        if ((t && A._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || ("function" != typeof this.target && this._enabled(!1, !1))), a.runBackwards)) for (i = this._firstPT; i; ) (i.s += i.c), (i.c = -i.c), (i = i._next);
        (this._onUpdate = a.onUpdate), (this._initted = !0);
      }),
        (a._initProps = function (t, i, n, r) {
          var a, s, o, l, d, u;
          if (null == t) return !1;
          for (a in (L[t._gsTweenID] && V(),
          this.vars.css ||
            (t.style &&
              t !== e &&
              t.nodeType &&
              $.css &&
              !1 !== this.vars.autoCSS &&
              (function (e, t) {
                var i,
                  n = {};
                for (i in e) j[i] || (i in t && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i) || !(!$[i] || ($[i] && $[i]._autoCSS)) || ((n[i] = e[i]), delete e[i]);
                e.css = n;
              })(this.vars, t)),
          this.vars))
            if (((u = this.vars[a]), j[a])) u && (u instanceof Array || (u.push && h(u))) && -1 !== u.join("").indexOf("{self}") && (this.vars[a] = u = this._swapSelfInParams(u, this));
            else if ($[a] && (l = new $[a]())._onInitTween(t, this.vars[a], this)) {
              for (this._firstPT = d = { _next: this._firstPT, t: l, p: "setRatio", s: 0, c: 1, f: 1, n: a, pg: 1, pr: l._priority }, s = l._overwriteProps.length; --s > -1; ) i[l._overwriteProps[s]] = this._firstPT;
              (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), d._next && (d._next._prev = d);
            } else i[a] = B.call(this, t, a, "get", u, a, 0, null, this.vars.stringFilter);
          return r && this._kill(r, t) ? this._initProps(t, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && Z(t, this, i, this._overwrite, n) ? (this._kill(i, t), this._initProps(t, i, n, r)) : (this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)) && (L[t._gsTweenID] = !0), o);
        }),
        (a.render = function (e, t, i) {
          var n,
            r,
            a,
            s,
            o = this._time,
            l = this._duration,
            d = this._rawPrevTime;
          if (e >= l - 1e-7) (this._totalTime = this._time = l), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || ((n = !0), (r = "onComplete"), (i = i || this._timeline.autoRemoveChildren)), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (0 > d || (0 >= e && e >= -1e-7) || (d === u && "isPause" !== this.data)) && d !== e && ((i = !0), d > u && (r = "onReverseComplete")), (this._rawPrevTime = s = !t || e || d === e ? e : u));
          else if (1e-7 > e) (this._totalTime = this._time = 0), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0), (0 !== o || (0 === l && d > 0)) && ((r = "onReverseComplete"), (n = this._reversed)), 0 > e && ((this._active = !1), 0 === l && (this._initted || !this.vars.lazy || i) && (d >= 0 && (d !== u || "isPause" !== this.data) && (i = !0), (this._rawPrevTime = s = !t || e || d === e ? e : u))), this._initted || (i = !0);
          else if (((this._totalTime = this._time = e), this._easeType)) {
            var c = e / l,
              p = this._easeType,
              h = this._easePower;
            (1 === p || (3 === p && c >= 0.5)) && (c = 1 - c), 3 === p && (c *= 2), 1 === h ? (c *= c) : 2 === h ? (c *= c * c) : 3 === h ? (c *= c * c * c) : 4 === h && (c *= c * c * c * c), (this.ratio = 1 === p ? 1 - c : 2 === p ? c : 0.5 > e / l ? c / 2 : 1 - c / 2);
          } else this.ratio = this._ease.getRatio(e / l);
          if (this._time !== o || i) {
            if (!this._initted) {
              if ((this._init(), !this._initted || this._gc)) return;
              if (!i && this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration))) return (this._time = this._totalTime = o), (this._rawPrevTime = d), D.push(this), void (this._lazy = [e, t]);
              this._time && !n ? (this.ratio = this._ease.getRatio(this._time / l)) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
            }
            for (!1 !== this._lazy && (this._lazy = !1), this._active || (!this._paused && this._time !== o && e >= 0 && (this._active = !0)), 0 === o && (this._startAt && (e >= 0 ? this._startAt.render(e, t, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (t || this._callback("onStart"))), a = this._firstPT; a; ) a.f ? a.t[a.p](a.c * this.ratio + a.s) : (a.t[a.p] = a.c * this.ratio + a.s), (a = a._next);
            this._onUpdate && (0 > e && this._startAt && -1e-4 !== e && this._startAt.render(e, t, i), t || ((this._time !== o || n) && this._callback("onUpdate"))), r && (!this._gc || i) && (0 > e && this._startAt && !this._onUpdate && -1e-4 !== e && this._startAt.render(e, t, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)), !t && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === u && s !== u && (this._rawPrevTime = 0));
          }
        }),
        (a._kill = function (e, t, i) {
          if (("all" === e && (e = null), null == e && (null == t || t === this.target))) return (this._lazy = !1), this._enabled(!1, !1);
          t = "string" != typeof t ? t || this._targets || this.target : A.selector(t) || t;
          var n,
            r,
            a,
            s,
            o,
            l,
            d,
            u,
            c,
            p = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
          if ((h(t) || O(t)) && "number" != typeof t[0]) for (n = t.length; --n > -1; ) this._kill(e, t[n], i) && (l = !0);
          else {
            if (this._targets) {
              for (n = this._targets.length; --n > -1; )
                if (t === this._targets[n]) {
                  (o = this._propLookup[n] || {}), (this._overwrittenProps = this._overwrittenProps || []), (r = this._overwrittenProps[n] = e ? this._overwrittenProps[n] || {} : "all");
                  break;
                }
            } else {
              if (t !== this.target) return !1;
              (o = this._propLookup), (r = this._overwrittenProps = e ? this._overwrittenProps || {} : "all");
            }
            if (o) {
              if (((d = e || o), (u = e !== r && "all" !== r && e !== o && ("object" != typeof e || !e._tempKill)), i && (A.onOverwrite || this.vars.onOverwrite))) {
                for (a in d) o[a] && (c || (c = []), c.push(a));
                if ((c || !e) && !K(this, i, t, c)) return !1;
              }
              for (a in d) (s = o[a]) && (p && (s.f ? s.t[s.p](s.s) : (s.t[s.p] = s.s), (l = !0)), s.pg && s.t._kill(d) && (l = !0), (s.pg && 0 !== s.t._overwriteProps.length) || (s._prev ? (s._prev._next = s._next) : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), (s._next = s._prev = null)), delete o[a]), u && (r[a] = 1);
              !this._firstPT && this._initted && this._enabled(!1, !1);
            }
          }
          return l;
        }),
        (a.invalidate = function () {
          return this._notifyPluginsOfEnabled && A._onPluginEvent("_onDisable", this), (this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null), (this._notifyPluginsOfEnabled = this._active = this._lazy = !1), (this._propLookup = this._targets ? {} : []), P.prototype.invalidate.call(this), this.vars.immediateRender && ((this._time = -u), this.render(-this._delay)), this;
        }),
        (a._enabled = function (e, t) {
          if ((o || s.wake(), e && this._gc)) {
            var i,
              n = this._targets;
            if (n) for (i = n.length; --i > -1; ) this._siblings[i] = U(n[i], this, !0);
            else this._siblings = U(this.target, this, !0);
          }
          return P.prototype._enabled.call(this, e, t), !(!this._notifyPluginsOfEnabled || !this._firstPT) && A._onPluginEvent(e ? "_onEnable" : "_onDisable", this);
        }),
        (A.to = function (e, t, i) {
          return new A(e, t, i);
        }),
        (A.from = function (e, t, i) {
          return (i.runBackwards = !0), (i.immediateRender = 0 != i.immediateRender), new A(e, t, i);
        }),
        (A.fromTo = function (e, t, i, n) {
          return (n.startAt = i), (n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender), new A(e, t, n);
        }),
        (A.delayedCall = function (e, t, i, n, r) {
          return new A(t, 0, { delay: e, onComplete: t, onCompleteParams: i, callbackScope: n, onReverseComplete: t, onReverseCompleteParams: i, immediateRender: !1, lazy: !1, useFrames: r, overwrite: 0 });
        }),
        (A.set = function (e, t) {
          return new A(e, 0, t);
        }),
        (A.getTweensOf = function (e, t) {
          if (null == e) return [];
          var i, n, r, a;
          if (((e = "string" != typeof e ? e : A.selector(e) || e), (h(e) || O(e)) && "number" != typeof e[0])) {
            for (i = e.length, n = []; --i > -1; ) n = n.concat(A.getTweensOf(e[i], t));
            for (i = n.length; --i > -1; ) for (a = n[i], r = i; --r > -1; ) a === n[r] && n.splice(i, 1);
          } else for (i = (n = U(e).concat()).length; --i > -1; ) (n[i]._gc || (t && !n[i].isActive())) && n.splice(i, 1);
          return n;
        }),
        (A.killTweensOf = A.killDelayedCallsTo =
          function (e, t, i) {
            "object" == typeof t && ((i = t), (t = !1));
            for (var n = A.getTweensOf(e, t), r = n.length; --r > -1; ) n[r]._kill(i, e);
          });
      var J = g(
        "plugins.TweenPlugin",
        function (e, t) {
          (this._overwriteProps = (e || "").split(",")), (this._propName = this._overwriteProps[0]), (this._priority = t || 0), (this._super = J.prototype);
        },
        !0
      );
      if (
        ((a = J.prototype),
        (J.version = "1.18.0"),
        (J.API = 2),
        (a._firstPT = null),
        (a._addTween = B),
        (a.setRatio = N),
        (a._kill = function (e) {
          var t,
            i = this._overwriteProps,
            n = this._firstPT;
          if (null != e[this._propName]) this._overwriteProps = [];
          else for (t = i.length; --t > -1; ) null != e[i[t]] && i.splice(t, 1);
          for (; n; ) null != e[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? ((n._prev._next = n._next), (n._prev = null)) : this._firstPT === n && (this._firstPT = n._next)), (n = n._next);
          return !1;
        }),
        (a._roundProps = function (e, t) {
          for (var i = this._firstPT; i; ) (e[this._propName] || (null != i.n && e[i.n.split(this._propName + "_").join("")])) && (i.r = t), (i = i._next);
        }),
        (A._onPluginEvent = function (e, t) {
          var i,
            n,
            r,
            a,
            s,
            o = t._firstPT;
          if ("_onInitAllProps" === e) {
            for (; o; ) {
              for (s = o._next, n = r; n && n.pr > o.pr; ) n = n._next;
              (o._prev = n ? n._prev : a) ? (o._prev._next = o) : (r = o), (o._next = n) ? (n._prev = o) : (a = o), (o = s);
            }
            o = t._firstPT = r;
          }
          for (; o; ) o.pg && "function" == typeof o.t[e] && o.t[e]() && (i = !0), (o = o._next);
          return i;
        }),
        (J.activate = function (e) {
          for (var t = e.length; --t > -1; ) e[t].API === J.API && ($[new e[t]()._propName] = e[t]);
          return !0;
        }),
        (v.plugin = function (e) {
          if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
          var t,
            i = e.propName,
            n = e.priority || 0,
            r = e.overwriteProps,
            a = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_roundProps", initAll: "_onInitAllProps" },
            s = g(
              "plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
              function () {
                J.call(this, i, n), (this._overwriteProps = r || []);
              },
              !0 === e.global
            ),
            o = (s.prototype = new J(i));
          for (t in ((o.constructor = s), (s.API = e.API), a)) "function" == typeof e[t] && (o[a[t]] = e[t]);
          return (s.version = e.version), J.activate([s]), s;
        }),
        (n = e._gsQueue))
      ) {
        for (r = 0; r < n.length; r++) n[r]();
        for (a in f) f[a].func || e.console.log("GSAP encountered missing dependency: com.greensock." + a);
      }
      o = !1;
    }
  })("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window),
  (function () {
    "use strict";
    function e(e) {
      e.fn.swiper = function (t) {
        var i;
        return (
          e(this).each(function () {
            var e = new n(this, t);
            i || (i = e);
          }),
          i
        );
      };
    }
    var t,
      i,
      n = function (e, i) {
        function a(e) {
          return Math.floor(e);
        }
        function s() {
          b.autoplayTimeoutId = setTimeout(function () {
            b.params.loop ? (b.fixLoop(), b._slideNext(), b.emit("onAutoplay", b)) : b.isEnd ? (i.autoplayStopOnLast ? b.stopAutoplay() : (b._slideTo(0), b.emit("onAutoplay", b))) : (b._slideNext(), b.emit("onAutoplay", b));
          }, b.params.autoplay);
        }
        function o(e, i) {
          var n = t(e.target);
          if (!n.is(i))
            if ("string" == typeof i) n = n.parents(i);
            else if (i.nodeType) {
              var r;
              return (
                n.parents().each(function (e, t) {
                  t === i && (r = i);
                }),
                r ? i : void 0
              );
            }
          if (0 !== n.length) return n[0];
        }
        function l(e, t) {
          t = t || {};
          var i = new (window.MutationObserver || window.WebkitMutationObserver)(function (e) {
            e.forEach(function (e) {
              b.onResize(!0), b.emit("onObserverUpdate", b, e);
            });
          });
          i.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), b.observers.push(i);
        }
        function d(e) {
          e.originalEvent && (e = e.originalEvent);
          var t = e.keyCode || e.charCode;
          if (!b.params.allowSwipeToNext && ((b.isHorizontal() && 39 === t) || (!b.isHorizontal() && 40 === t))) return !1;
          if (!b.params.allowSwipeToPrev && ((b.isHorizontal() && 37 === t) || (!b.isHorizontal() && 38 === t))) return !1;
          if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || (document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase())))) {
            if (37 === t || 39 === t || 38 === t || 40 === t) {
              var i = !1;
              if (b.container.parents(".swiper-slide").length > 0 && 0 === b.container.parents(".swiper-slide-active").length) return;
              var n = { left: window.pageXOffset, top: window.pageYOffset },
                r = window.innerWidth,
                a = window.innerHeight,
                s = b.container.offset();
              b.rtl && (s.left = s.left - b.container[0].scrollLeft);
              for (
                var o = [
                    [s.left, s.top],
                    [s.left + b.width, s.top],
                    [s.left, s.top + b.height],
                    [s.left + b.width, s.top + b.height],
                  ],
                  l = 0;
                l < o.length;
                l++
              ) {
                var d = o[l];
                d[0] >= n.left && d[0] <= n.left + r && d[1] >= n.top && d[1] <= n.top + a && (i = !0);
              }
              if (!i) return;
            }
            b.isHorizontal() ? ((37 === t || 39 === t) && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1)), ((39 === t && !b.rtl) || (37 === t && b.rtl)) && b.slideNext(), ((37 === t && !b.rtl) || (39 === t && b.rtl)) && b.slidePrev()) : ((38 === t || 40 === t) && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1)), 40 === t && b.slideNext(), 38 === t && b.slidePrev());
          }
        }
        function u(e) {
          e.originalEvent && (e = e.originalEvent);
          var t = b.mousewheel.event,
            i = 0,
            n = b.rtl ? -1 : 1;
          if ("mousewheel" === t)
            if (b.params.mousewheelForceToAxis)
              if (b.isHorizontal()) {
                if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) return;
                i = e.wheelDeltaX * n;
              } else {
                if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) return;
                i = e.wheelDeltaY;
              }
            else i = Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY) ? -e.wheelDeltaX * n : -e.wheelDeltaY;
          else if ("DOMMouseScroll" === t) i = -e.detail;
          else if ("wheel" === t)
            if (b.params.mousewheelForceToAxis)
              if (b.isHorizontal()) {
                if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;
                i = -e.deltaX * n;
              } else {
                if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;
                i = -e.deltaY;
              }
            else i = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX * n : -e.deltaY;
          if (0 !== i) {
            if ((b.params.mousewheelInvert && (i = -i), b.params.freeMode)) {
              var r = b.getWrapperTranslate() + i * b.params.mousewheelSensitivity,
                a = b.isBeginning,
                s = b.isEnd;
              if (
                (r >= b.minTranslate() && (r = b.minTranslate()),
                r <= b.maxTranslate() && (r = b.maxTranslate()),
                b.setWrapperTransition(0),
                b.setWrapperTranslate(r),
                b.updateProgress(),
                b.updateActiveIndex(),
                ((!a && b.isBeginning) || (!s && b.isEnd)) && b.updateClasses(),
                b.params.freeModeSticky
                  ? (clearTimeout(b.mousewheel.timeout),
                    (b.mousewheel.timeout = setTimeout(function () {
                      b.slideReset();
                    }, 300)))
                  : b.params.lazyLoading && b.lazy && b.lazy.load(),
                0 === r || r === b.maxTranslate())
              )
                return;
            } else {
              if (new window.Date().getTime() - b.mousewheel.lastScrollTime > 60)
                if (0 > i)
                  if ((b.isEnd && !b.params.loop) || b.animating) {
                    if (b.params.mousewheelReleaseOnEdges) return !0;
                  } else b.slideNext();
                else if ((b.isBeginning && !b.params.loop) || b.animating) {
                  if (b.params.mousewheelReleaseOnEdges) return !0;
                } else b.slidePrev();
              b.mousewheel.lastScrollTime = new window.Date().getTime();
            }
            return b.params.autoplay && b.stopAutoplay(), e.preventDefault ? e.preventDefault() : (e.returnValue = !1), !1;
          }
        }
        function c(e, i) {
          e = t(e);
          var n,
            r,
            a,
            s = b.rtl ? -1 : 1;
          (n = e.attr("data-swiper-parallax") || "0"), (r = e.attr("data-swiper-parallax-x")), (a = e.attr("data-swiper-parallax-y")), r || a ? ((r = r || "0"), (a = a || "0")) : b.isHorizontal() ? ((r = n), (a = "0")) : ((a = n), (r = "0")), (r = r.indexOf("%") >= 0 ? parseInt(r, 10) * i * s + "%" : r * i * s + "px"), (a = a.indexOf("%") >= 0 ? parseInt(a, 10) * i + "%" : a * i + "px"), e.transform("translate3d(" + r + ", " + a + ",0px)");
        }
        function p(e) {
          return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e;
        }
        if (!(this instanceof n)) return new n(e, i);
        var h = { direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, autoplay: !1, autoplayDisableOnInteraction: !0, autoplayStopOnLast: !1, iOSEdgeSwipeDetection: !1, iOSEdgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: 0.02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", coverflow: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 }, flip: { slideShadows: !0, limitRotation: !0 }, cube: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 }, fade: { crossFade: !1 }, parallax: !1, scrollbar: null, scrollbarHide: !0, scrollbarDraggable: !1, scrollbarSnapOnRelease: !1, keyboardControl: !1, mousewheelControl: !1, mousewheelReleaseOnEdges: !1, mousewheelInvert: !1, mousewheelForceToAxis: !1, mousewheelSensitivity: 1, hashnav: !1, breakpoints: void 0, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: 0.5, longSwipesMs: 300, followFinger: !0, onlyExternal: !1, threshold: 0, touchMoveStopPropagation: !0, uniqueNavElements: !0, pagination: null, paginationElement: "span", paginationClickable: !1, paginationHide: !1, paginationBulletRender: null, paginationProgressRender: null, paginationFractionRender: null, paginationCustomRender: null, paginationType: "bullets", resistance: !0, resistanceRatio: 0.85, nextButton: null, prevButton: null, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, lazyLoading: !1, lazyLoadingInPrevNext: !1, lazyLoadingInPrevNextAmount: 1, lazyLoadingOnTransitionStart: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, control: void 0, controlInverse: !1, controlBy: "slide", allowSwipeToPrev: !0, allowSwipeToNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", slideClass: "swiper-slide", slideActiveClass: "swiper-slide-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slidePrevClass: "swiper-slide-prev", wrapperClass: "swiper-wrapper", bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", buttonDisabledClass: "swiper-button-disabled", paginationCurrentClass: "swiper-pagination-current", paginationTotalClass: "swiper-pagination-total", paginationHiddenClass: "swiper-pagination-hidden", paginationProgressbarClass: "swiper-pagination-progressbar", observer: !1, observeParents: !1, a11y: !1, prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}", runCallbacksOnInit: !0 },
          f = i && i.virtualTranslate;
        i = i || {};
        var m = {};
        for (var v in i)
          if ("object" != typeof i[v] || null === i[v] || i[v].nodeType || i[v] === window || i[v] === document || (void 0 !== r && i[v] instanceof r) || ("undefined" != typeof jQuery && i[v] instanceof jQuery)) m[v] = i[v];
          else for (var g in ((m[v] = {}), i[v])) m[v][g] = i[v][g];
        for (var y in h)
          if (void 0 === i[y]) i[y] = h[y];
          else if ("object" == typeof i[y]) for (var w in h[y]) void 0 === i[y][w] && (i[y][w] = h[y][w]);
        var b = this;
        if (
          ((b.params = i),
          (b.originalParams = m),
          (b.classNames = []),
          void 0 !== t && void 0 !== r && (t = r),
          (void 0 !== t || (t = void 0 === r ? window.Dom7 || window.Zepto || window.jQuery : r)) &&
            ((b.$ = t),
            (b.currentBreakpoint = void 0),
            (b.getActiveBreakpoint = function () {
              if (!b.params.breakpoints) return !1;
              var e,
                t = !1,
                i = [];
              for (e in b.params.breakpoints) b.params.breakpoints.hasOwnProperty(e) && i.push(e);
              i.sort(function (e, t) {
                return parseInt(e, 10) > parseInt(t, 10);
              });
              for (var n = 0; n < i.length; n++) (e = i[n]) >= window.innerWidth && !t && (t = e);
              return t || "max";
            }),
            (b.setBreakpoint = function () {
              var e = b.getActiveBreakpoint();
              if (e && b.currentBreakpoint !== e) {
                var t = e in b.params.breakpoints ? b.params.breakpoints[e] : b.originalParams,
                  i = b.params.loop && t.slidesPerView !== b.params.slidesPerView;
                for (var n in t) b.params[n] = t[n];
                (b.currentBreakpoint = e), i && b.destroyLoop && b.reLoop(!0);
              }
            }),
            b.params.breakpoints && b.setBreakpoint(),
            (b.container = t(e)),
            0 !== b.container.length))
        ) {
          if (b.container.length > 1) {
            var x = [];
            return (
              b.container.each(function () {
                x.push(new n(this, i));
              }),
              x
            );
          }
          (b.container[0].swiper = b),
            b.container.data("swiper", b),
            b.classNames.push("swiper-container-" + b.params.direction),
            b.params.freeMode && b.classNames.push("swiper-container-free-mode"),
            b.support.flexbox || (b.classNames.push("swiper-container-no-flexbox"), (b.params.slidesPerColumn = 1)),
            b.params.autoHeight && b.classNames.push("swiper-container-autoheight"),
            (b.params.parallax || b.params.watchSlidesVisibility) && (b.params.watchSlidesProgress = !0),
            ["cube", "coverflow", "flip"].indexOf(b.params.effect) >= 0 && (b.support.transforms3d ? ((b.params.watchSlidesProgress = !0), b.classNames.push("swiper-container-3d")) : (b.params.effect = "slide")),
            "slide" !== b.params.effect && b.classNames.push("swiper-container-" + b.params.effect),
            "cube" === b.params.effect && ((b.params.resistanceRatio = 0), (b.params.slidesPerView = 1), (b.params.slidesPerColumn = 1), (b.params.slidesPerGroup = 1), (b.params.centeredSlides = !1), (b.params.spaceBetween = 0), (b.params.virtualTranslate = !0), (b.params.setWrapperSize = !1)),
            ("fade" === b.params.effect || "flip" === b.params.effect) && ((b.params.slidesPerView = 1), (b.params.slidesPerColumn = 1), (b.params.slidesPerGroup = 1), (b.params.watchSlidesProgress = !0), (b.params.spaceBetween = 0), (b.params.setWrapperSize = !1), void 0 === f && (b.params.virtualTranslate = !0)),
            b.params.grabCursor && b.support.touch && (b.params.grabCursor = !1),
            (b.wrapper = b.container.children("." + b.params.wrapperClass)),
            b.params.pagination && ((b.paginationContainer = t(b.params.pagination)), b.params.uniqueNavElements && "string" == typeof b.params.pagination && b.paginationContainer.length > 1 && 1 === b.container.find(b.params.pagination).length && (b.paginationContainer = b.container.find(b.params.pagination)), "bullets" === b.params.paginationType && b.params.paginationClickable ? b.paginationContainer.addClass("swiper-pagination-clickable") : (b.params.paginationClickable = !1), b.paginationContainer.addClass("swiper-pagination-" + b.params.paginationType)),
            (b.params.nextButton || b.params.prevButton) && (b.params.nextButton && ((b.nextButton = t(b.params.nextButton)), b.params.uniqueNavElements && "string" == typeof b.params.nextButton && b.nextButton.length > 1 && 1 === b.container.find(b.params.nextButton).length && (b.nextButton = b.container.find(b.params.nextButton))), b.params.prevButton && ((b.prevButton = t(b.params.prevButton)), b.params.uniqueNavElements && "string" == typeof b.params.prevButton && b.prevButton.length > 1 && 1 === b.container.find(b.params.prevButton).length && (b.prevButton = b.container.find(b.params.prevButton)))),
            (b.isHorizontal = function () {
              return "horizontal" === b.params.direction;
            }),
            (b.rtl = b.isHorizontal() && ("rtl" === b.container[0].dir.toLowerCase() || "rtl" === b.container.css("direction"))),
            b.rtl && b.classNames.push("swiper-container-rtl"),
            b.rtl && (b.wrongRTL = "-webkit-box" === b.wrapper.css("display")),
            b.params.slidesPerColumn > 1 && b.classNames.push("swiper-container-multirow"),
            b.device.android && b.classNames.push("swiper-container-android"),
            b.container.addClass(b.classNames.join(" ")),
            (b.translate = 0),
            (b.progress = 0),
            (b.velocity = 0),
            (b.lockSwipeToNext = function () {
              b.params.allowSwipeToNext = !1;
            }),
            (b.lockSwipeToPrev = function () {
              b.params.allowSwipeToPrev = !1;
            }),
            (b.lockSwipes = function () {
              b.params.allowSwipeToNext = b.params.allowSwipeToPrev = !1;
            }),
            (b.unlockSwipeToNext = function () {
              b.params.allowSwipeToNext = !0;
            }),
            (b.unlockSwipeToPrev = function () {
              b.params.allowSwipeToPrev = !0;
            }),
            (b.unlockSwipes = function () {
              b.params.allowSwipeToNext = b.params.allowSwipeToPrev = !0;
            }),
            b.params.grabCursor && ((b.container[0].style.cursor = "move"), (b.container[0].style.cursor = "-webkit-grab"), (b.container[0].style.cursor = "-moz-grab"), (b.container[0].style.cursor = "grab")),
            (b.imagesToLoad = []),
            (b.imagesLoaded = 0),
            (b.loadImage = function (e, t, i, n, r) {
              function a() {
                r && r();
              }
              var s;
              e.complete && n ? a() : t ? (((s = new window.Image()).onload = a), (s.onerror = a), i && (s.srcset = i), t && (s.src = t)) : a();
            }),
            (b.preloadImages = function () {
              function e() {
                null != b && (void 0 !== b.imagesLoaded && b.imagesLoaded++, b.imagesLoaded === b.imagesToLoad.length && (b.params.updateOnImagesReady && b.update(), b.emit("onImagesReady", b)));
              }
              b.imagesToLoad = b.container.find("img");
              for (var t = 0; t < b.imagesToLoad.length; t++) b.loadImage(b.imagesToLoad[t], b.imagesToLoad[t].currentSrc || b.imagesToLoad[t].getAttribute("src"), b.imagesToLoad[t].srcset || b.imagesToLoad[t].getAttribute("srcset"), !0, e);
            }),
            (b.autoplayTimeoutId = void 0),
            (b.autoplaying = !1),
            (b.autoplayPaused = !1),
            (b.startAutoplay = function () {
              return void 0 === b.autoplayTimeoutId && !!b.params.autoplay && !b.autoplaying && ((b.autoplaying = !0), b.emit("onAutoplayStart", b), void s());
            }),
            (b.stopAutoplay = function (e) {
              b.autoplayTimeoutId && (b.autoplayTimeoutId && clearTimeout(b.autoplayTimeoutId), (b.autoplaying = !1), (b.autoplayTimeoutId = void 0), b.emit("onAutoplayStop", b));
            }),
            (b.pauseAutoplay = function (e) {
              b.autoplayPaused ||
                (b.autoplayTimeoutId && clearTimeout(b.autoplayTimeoutId),
                (b.autoplayPaused = !0),
                0 === e
                  ? ((b.autoplayPaused = !1), s())
                  : b.wrapper.transitionEnd(function () {
                      b && ((b.autoplayPaused = !1), b.autoplaying ? s() : b.stopAutoplay());
                    }));
            }),
            (b.minTranslate = function () {
              return -b.snapGrid[0];
            }),
            (b.maxTranslate = function () {
              return -b.snapGrid[b.snapGrid.length - 1];
            }),
            (b.updateAutoHeight = function () {
              var e = b.slides.eq(b.activeIndex)[0];
              if (void 0 !== e) {
                var t = e.offsetHeight;
                t && b.wrapper.css("height", t + "px");
              }
            }),
            (b.updateContainerSize = function () {
              var e, t;
              (t = void 0 !== b.params.height ? b.params.height : b.container[0].clientHeight), (0 === (e = void 0 !== b.params.width ? b.params.width : b.container[0].clientWidth) && b.isHorizontal()) || (0 === t && !b.isHorizontal()) || ((e = e - parseInt(b.container.css("padding-left"), 10) - parseInt(b.container.css("padding-right"), 10)), (t = t - parseInt(b.container.css("padding-top"), 10) - parseInt(b.container.css("padding-bottom"), 10)), (b.width = e), (b.height = t), (b.size = b.isHorizontal() ? b.width : b.height));
            }),
            (b.updateSlidesSize = function () {
              (b.slides = b.wrapper.children("." + b.params.slideClass)), (b.snapGrid = []), (b.slidesGrid = []), (b.slidesSizesGrid = []);
              var e,
                t = b.params.spaceBetween,
                i = -b.params.slidesOffsetBefore,
                n = 0,
                r = 0;
              if (void 0 !== b.size) {
                var s;
                "string" == typeof t && t.indexOf("%") >= 0 && (t = (parseFloat(t.replace("%", "")) / 100) * b.size), (b.virtualSize = -t), b.slides.css(b.rtl ? { marginLeft: "", marginTop: "" } : { marginRight: "", marginBottom: "" }), b.params.slidesPerColumn > 1 && ((s = Math.floor(b.slides.length / b.params.slidesPerColumn) === b.slides.length / b.params.slidesPerColumn ? b.slides.length : Math.ceil(b.slides.length / b.params.slidesPerColumn) * b.params.slidesPerColumn), "auto" !== b.params.slidesPerView && "row" === b.params.slidesPerColumnFill && (s = Math.max(s, b.params.slidesPerView * b.params.slidesPerColumn)));
                var o,
                  l,
                  d = b.params.slidesPerColumn,
                  u = s / d,
                  c = u - (b.params.slidesPerColumn * u - b.slides.length);
                for (e = 0; e < b.slides.length; e++) {
                  o = 0;
                  var p,
                    h,
                    f,
                    m = b.slides.eq(e);
                  b.params.slidesPerColumn > 1 &&
                    ("column" === b.params.slidesPerColumnFill ? ((f = e - (h = Math.floor(e / d)) * d), (h > c || (h === c && f === d - 1)) && ++f >= d && ((f = 0), h++), m.css({ "-webkit-box-ordinal-group": (p = h + (f * s) / d), "-moz-box-ordinal-group": p, "-ms-flex-order": p, "-webkit-order": p, order: p })) : (h = e - (f = Math.floor(e / u)) * u),
                    m
                      .css({ "margin-top": 0 !== f && b.params.spaceBetween && b.params.spaceBetween + "px" })
                      .attr("data-swiper-column", h)
                      .attr("data-swiper-row", f)),
                    "none" !== m.css("display") && ("auto" === b.params.slidesPerView ? ((o = b.isHorizontal() ? m.outerWidth(!0) : m.outerHeight(!0)), b.params.roundLengths && (o = a(o))) : ((o = (b.size - (b.params.slidesPerView - 1) * t) / b.params.slidesPerView), b.params.roundLengths && (o = a(o)), b.isHorizontal() ? (b.slides[e].style.width = o + "px") : (b.slides[e].style.height = o + "px")), (b.slides[e].swiperSlideSize = o), b.slidesSizesGrid.push(o), b.params.centeredSlides ? ((i = i + o / 2 + n / 2 + t), 0 === e && (i = i - b.size / 2 - t), Math.abs(i) < 0.001 && (i = 0), r % b.params.slidesPerGroup == 0 && b.snapGrid.push(i), b.slidesGrid.push(i)) : (r % b.params.slidesPerGroup == 0 && b.snapGrid.push(i), b.slidesGrid.push(i), (i = i + o + t)), (b.virtualSize += o + t), (n = o), r++);
                }
                if (((b.virtualSize = Math.max(b.virtualSize, b.size) + b.params.slidesOffsetAfter), b.rtl && b.wrongRTL && ("slide" === b.params.effect || "coverflow" === b.params.effect) && b.wrapper.css({ width: b.virtualSize + b.params.spaceBetween + "px" }), (!b.support.flexbox || b.params.setWrapperSize) && (b.isHorizontal() ? b.wrapper.css({ width: b.virtualSize + b.params.spaceBetween + "px" }) : b.wrapper.css({ height: b.virtualSize + b.params.spaceBetween + "px" })), b.params.slidesPerColumn > 1 && ((b.virtualSize = (o + b.params.spaceBetween) * s), (b.virtualSize = Math.ceil(b.virtualSize / b.params.slidesPerColumn) - b.params.spaceBetween), b.wrapper.css({ width: b.virtualSize + b.params.spaceBetween + "px" }), b.params.centeredSlides))) {
                  for (l = [], e = 0; e < b.snapGrid.length; e++) b.snapGrid[e] < b.virtualSize + b.snapGrid[0] && l.push(b.snapGrid[e]);
                  b.snapGrid = l;
                }
                if (!b.params.centeredSlides) {
                  for (l = [], e = 0; e < b.snapGrid.length; e++) b.snapGrid[e] <= b.virtualSize - b.size && l.push(b.snapGrid[e]);
                  (b.snapGrid = l), Math.floor(b.virtualSize - b.size) - Math.floor(b.snapGrid[b.snapGrid.length - 1]) > 1 && b.snapGrid.push(b.virtualSize - b.size);
                }
                0 === b.snapGrid.length && (b.snapGrid = [0]), 0 !== b.params.spaceBetween && (b.isHorizontal() ? b.slides.css(b.rtl ? { marginLeft: t + "px" } : { marginRight: t + "px" }) : b.slides.css({ marginBottom: t + "px" })), b.params.watchSlidesProgress && b.updateSlidesOffset();
              }
            }),
            (b.updateSlidesOffset = function () {
              for (var e = 0; e < b.slides.length; e++) b.slides[e].swiperSlideOffset = b.isHorizontal() ? b.slides[e].offsetLeft : b.slides[e].offsetTop;
            }),
            (b.updateSlidesProgress = function (e) {
              if ((void 0 === e && (e = b.translate || 0), 0 !== b.slides.length)) {
                void 0 === b.slides[0].swiperSlideOffset && b.updateSlidesOffset();
                var t = -e;
                b.rtl && (t = e), b.slides.removeClass(b.params.slideVisibleClass);
                for (var i = 0; i < b.slides.length; i++) {
                  var n = b.slides[i],
                    r = (t - n.swiperSlideOffset) / (n.swiperSlideSize + b.params.spaceBetween);
                  if (b.params.watchSlidesVisibility) {
                    var a = -(t - n.swiperSlideOffset),
                      s = a + b.slidesSizesGrid[i];
                    ((a >= 0 && a < b.size) || (s > 0 && s <= b.size) || (0 >= a && s >= b.size)) && b.slides.eq(i).addClass(b.params.slideVisibleClass);
                  }
                  n.progress = b.rtl ? -r : r;
                }
              }
            }),
            (b.updateProgress = function (e) {
              void 0 === e && (e = b.translate || 0);
              var t = b.maxTranslate() - b.minTranslate(),
                i = b.isBeginning,
                n = b.isEnd;
              0 === t ? ((b.progress = 0), (b.isBeginning = b.isEnd = !0)) : ((b.progress = (e - b.minTranslate()) / t), (b.isBeginning = b.progress <= 0), (b.isEnd = b.progress >= 1)), b.isBeginning && !i && b.emit("onReachBeginning", b), b.isEnd && !n && b.emit("onReachEnd", b), b.params.watchSlidesProgress && b.updateSlidesProgress(e), b.emit("onProgress", b, b.progress);
            }),
            (b.updateActiveIndex = function () {
              var e,
                t,
                i,
                n = b.rtl ? b.translate : -b.translate;
              for (t = 0; t < b.slidesGrid.length; t++) void 0 !== b.slidesGrid[t + 1] ? (n >= b.slidesGrid[t] && n < b.slidesGrid[t + 1] - (b.slidesGrid[t + 1] - b.slidesGrid[t]) / 2 ? (e = t) : n >= b.slidesGrid[t] && n < b.slidesGrid[t + 1] && (e = t + 1)) : n >= b.slidesGrid[t] && (e = t);
              (0 > e || void 0 === e) && (e = 0), (i = Math.floor(e / b.params.slidesPerGroup)) >= b.snapGrid.length && (i = b.snapGrid.length - 1), e !== b.activeIndex && ((b.snapIndex = i), (b.previousIndex = b.activeIndex), (b.activeIndex = e), b.updateClasses());
            }),
            (b.updateClasses = function () {
              b.slides.removeClass(b.params.slideActiveClass + " " + b.params.slideNextClass + " " + b.params.slidePrevClass);
              var e = b.slides.eq(b.activeIndex);
              e.addClass(b.params.slideActiveClass);
              var i = e.next("." + b.params.slideClass).addClass(b.params.slideNextClass);
              b.params.loop && 0 === i.length && b.slides.eq(0).addClass(b.params.slideNextClass);
              var n = e.prev("." + b.params.slideClass).addClass(b.params.slidePrevClass);
              if ((b.params.loop && 0 === n.length && b.slides.eq(-1).addClass(b.params.slidePrevClass), b.paginationContainer && b.paginationContainer.length > 0)) {
                var r,
                  a = b.params.loop ? Math.ceil((b.slides.length - 2 * b.loopedSlides) / b.params.slidesPerGroup) : b.snapGrid.length;
                if (
                  (b.params.loop ? ((r = Math.ceil((b.activeIndex - b.loopedSlides) / b.params.slidesPerGroup)) > b.slides.length - 1 - 2 * b.loopedSlides && (r -= b.slides.length - 2 * b.loopedSlides), r > a - 1 && (r -= a), 0 > r && "bullets" !== b.params.paginationType && (r = a + r)) : (r = void 0 !== b.snapIndex ? b.snapIndex : b.activeIndex || 0),
                  "bullets" === b.params.paginationType &&
                    b.bullets &&
                    b.bullets.length > 0 &&
                    (b.bullets.removeClass(b.params.bulletActiveClass),
                    b.paginationContainer.length > 1
                      ? b.bullets.each(function () {
                          t(this).index() === r && t(this).addClass(b.params.bulletActiveClass);
                        })
                      : b.bullets.eq(r).addClass(b.params.bulletActiveClass)),
                  "fraction" === b.params.paginationType && (b.paginationContainer.find("." + b.params.paginationCurrentClass).text(r + 1), b.paginationContainer.find("." + b.params.paginationTotalClass).text(a)),
                  "progress" === b.params.paginationType)
                ) {
                  var s = (r + 1) / a,
                    o = s,
                    l = 1;
                  b.isHorizontal() || ((l = s), (o = 1)),
                    b.paginationContainer
                      .find("." + b.params.paginationProgressbarClass)
                      .transform("translate3d(0,0,0) scaleX(" + o + ") scaleY(" + l + ")")
                      .transition(b.params.speed);
                }
                "custom" === b.params.paginationType && b.params.paginationCustomRender && (b.paginationContainer.html(b.params.paginationCustomRender(b, r + 1, a)), b.emit("onPaginationRendered", b, b.paginationContainer[0]));
              }
              b.params.loop || (b.params.prevButton && b.prevButton && b.prevButton.length > 0 && (b.isBeginning ? (b.prevButton.addClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.disable(b.prevButton)) : (b.prevButton.removeClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.enable(b.prevButton))), b.params.nextButton && b.nextButton && b.nextButton.length > 0 && (b.isEnd ? (b.nextButton.addClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.disable(b.nextButton)) : (b.nextButton.removeClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.enable(b.nextButton))));
            }),
            (b.updatePagination = function () {
              if (b.params.pagination && b.paginationContainer && b.paginationContainer.length > 0) {
                var e = "";
                if ("bullets" === b.params.paginationType) {
                  for (var t = b.params.loop ? Math.ceil((b.slides.length - 2 * b.loopedSlides) / b.params.slidesPerGroup) : b.snapGrid.length, i = 0; t > i; i++) e += b.params.paginationBulletRender ? b.params.paginationBulletRender(i, b.params.bulletClass) : "<" + b.params.paginationElement + ' class="' + b.params.bulletClass + '"></' + b.params.paginationElement + ">";
                  b.paginationContainer.html(e), (b.bullets = b.paginationContainer.find("." + b.params.bulletClass)), b.params.paginationClickable && b.params.a11y && b.a11y && b.a11y.initPagination();
                }
                "fraction" === b.params.paginationType && ((e = b.params.paginationFractionRender ? b.params.paginationFractionRender(b, b.params.paginationCurrentClass, b.params.paginationTotalClass) : '<span class="' + b.params.paginationCurrentClass + '"></span> / <span class="' + b.params.paginationTotalClass + '"></span>'), b.paginationContainer.html(e)), "progress" === b.params.paginationType && ((e = b.params.paginationProgressRender ? b.params.paginationProgressRender(b, b.params.paginationProgressbarClass) : '<span class="' + b.params.paginationProgressbarClass + '"></span>'), b.paginationContainer.html(e)), "custom" !== b.params.paginationType && b.emit("onPaginationRendered", b, b.paginationContainer[0]);
              }
            }),
            (b.update = function (e) {
              function t() {
                (i = Math.min(Math.max(b.translate, b.maxTranslate()), b.minTranslate())), b.setWrapperTranslate(i), b.updateActiveIndex(), b.updateClasses();
              }
              var i;
              b.updateContainerSize(), b.updateSlidesSize(), b.updateProgress(), b.updatePagination(), b.updateClasses(), b.params.scrollbar && b.scrollbar && b.scrollbar.set(), e ? (b.controller && b.controller.spline && (b.controller.spline = void 0), b.params.freeMode ? (t(), b.params.autoHeight && b.updateAutoHeight()) : b.slideTo(("auto" === b.params.slidesPerView || b.params.slidesPerView > 1) && b.isEnd && !b.params.centeredSlides ? b.slides.length - 1 : b.activeIndex, 0, !1, !0) || t()) : b.params.autoHeight && b.updateAutoHeight();
            }),
            (b.onResize = function (e) {
              b.params.breakpoints && b.setBreakpoint();
              var t = b.params.allowSwipeToPrev,
                i = b.params.allowSwipeToNext;
              (b.params.allowSwipeToPrev = b.params.allowSwipeToNext = !0), b.updateContainerSize(), b.updateSlidesSize(), ("auto" === b.params.slidesPerView || b.params.freeMode || e) && b.updatePagination(), b.params.scrollbar && b.scrollbar && b.scrollbar.set(), b.controller && b.controller.spline && (b.controller.spline = void 0);
              var n = !1;
              if (b.params.freeMode) {
                var r = Math.min(Math.max(b.translate, b.maxTranslate()), b.minTranslate());
                b.setWrapperTranslate(r), b.updateActiveIndex(), b.updateClasses(), b.params.autoHeight && b.updateAutoHeight();
              } else b.updateClasses(), (n = b.slideTo(("auto" === b.params.slidesPerView || b.params.slidesPerView > 1) && b.isEnd && !b.params.centeredSlides ? b.slides.length - 1 : b.activeIndex, 0, !1, !0));
              b.params.lazyLoading && !n && b.lazy && b.lazy.load(), (b.params.allowSwipeToPrev = t), (b.params.allowSwipeToNext = i);
            });
          var _ = ["mousedown", "mousemove", "mouseup"];
          window.navigator.pointerEnabled ? (_ = ["pointerdown", "pointermove", "pointerup"]) : window.navigator.msPointerEnabled && (_ = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
            (b.touchEvents = { start: b.support.touch || !b.params.simulateTouch ? "touchstart" : _[0], move: b.support.touch || !b.params.simulateTouch ? "touchmove" : _[1], end: b.support.touch || !b.params.simulateTouch ? "touchend" : _[2] }),
            (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === b.params.touchEventsTarget ? b.container : b.wrapper).addClass("swiper-wp8-" + b.params.direction),
            (b.initEvents = function (e) {
              var t = e ? "off" : "on",
                n = e ? "removeEventListener" : "addEventListener",
                r = "container" === b.params.touchEventsTarget ? b.container[0] : b.wrapper[0],
                a = b.support.touch ? r : document,
                s = !!b.params.nested;
              b.browser.ie ? (r[n](b.touchEvents.start, b.onTouchStart, !1), a[n](b.touchEvents.move, b.onTouchMove, s), a[n](b.touchEvents.end, b.onTouchEnd, !1)) : (b.support.touch && (r[n](b.touchEvents.start, b.onTouchStart, !1), r[n](b.touchEvents.move, b.onTouchMove, s), r[n](b.touchEvents.end, b.onTouchEnd, !1)), !i.simulateTouch || b.device.ios || b.device.android || (r[n]("mousedown", b.onTouchStart, !1), document[n]("mousemove", b.onTouchMove, s), document[n]("mouseup", b.onTouchEnd, !1))), window[n]("resize", b.onResize), b.params.nextButton && b.nextButton && b.nextButton.length > 0 && (b.nextButton[t]("click", b.onClickNext), b.params.a11y && b.a11y && b.nextButton[t]("keydown", b.a11y.onEnterKey)), b.params.prevButton && b.prevButton && b.prevButton.length > 0 && (b.prevButton[t]("click", b.onClickPrev), b.params.a11y && b.a11y && b.prevButton[t]("keydown", b.a11y.onEnterKey)), b.params.pagination && b.params.paginationClickable && (b.paginationContainer[t]("click", "." + b.params.bulletClass, b.onClickIndex), b.params.a11y && b.a11y && b.paginationContainer[t]("keydown", "." + b.params.bulletClass, b.a11y.onEnterKey)), (b.params.preventClicks || b.params.preventClicksPropagation) && r[n]("click", b.preventClicks, !0);
            }),
            (b.attachEvents = function () {
              b.initEvents();
            }),
            (b.detachEvents = function () {
              b.initEvents(!0);
            }),
            (b.allowClick = !0),
            (b.preventClicks = function (e) {
              b.allowClick || (b.params.preventClicks && e.preventDefault(), b.params.preventClicksPropagation && b.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
            }),
            (b.onClickNext = function (e) {
              e.preventDefault(), (!b.isEnd || b.params.loop) && b.slideNext();
            }),
            (b.onClickPrev = function (e) {
              e.preventDefault(), (!b.isBeginning || b.params.loop) && b.slidePrev();
            }),
            (b.onClickIndex = function (e) {
              e.preventDefault();
              var i = t(this).index() * b.params.slidesPerGroup;
              b.params.loop && (i += b.loopedSlides), b.slideTo(i);
            }),
            (b.updateClickedSlide = function (e) {
              var i = o(e, "." + b.params.slideClass),
                n = !1;
              if (i) for (var r = 0; r < b.slides.length; r++) b.slides[r] === i && (n = !0);
              if (!i || !n) return (b.clickedSlide = void 0), void (b.clickedIndex = void 0);
              if (((b.clickedSlide = i), (b.clickedIndex = t(i).index()), b.params.slideToClickedSlide && void 0 !== b.clickedIndex && b.clickedIndex !== b.activeIndex)) {
                var a,
                  s = b.clickedIndex;
                if (b.params.loop) {
                  if (b.animating) return;
                  (a = t(b.clickedSlide).attr("data-swiper-slide-index")),
                    b.params.centeredSlides
                      ? s < b.loopedSlides - b.params.slidesPerView / 2 || s > b.slides.length - b.loopedSlides + b.params.slidesPerView / 2
                        ? (b.fixLoop(),
                          (s = b.wrapper
                            .children("." + b.params.slideClass + '[data-swiper-slide-index="' + a + '"]:not(.swiper-slide-duplicate)')
                            .eq(0)
                            .index()),
                          setTimeout(function () {
                            b.slideTo(s);
                          }, 0))
                        : b.slideTo(s)
                      : s > b.slides.length - b.params.slidesPerView
                      ? (b.fixLoop(),
                        (s = b.wrapper
                          .children("." + b.params.slideClass + '[data-swiper-slide-index="' + a + '"]:not(.swiper-slide-duplicate)')
                          .eq(0)
                          .index()),
                        setTimeout(function () {
                          b.slideTo(s);
                        }, 0))
                      : b.slideTo(s);
                } else b.slideTo(s);
              }
            });
          var T,
            S,
            C,
            E,
            M,
            P,
            k,
            z,
            A,
            O,
            D,
            L,
            I = "input, select, textarea, button",
            N = Date.now(),
            R = [];
          if (
            ((b.animating = !1),
            (b.touches = { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }),
            (b.onTouchStart = function (e) {
              if ((e.originalEvent && (e = e.originalEvent), (D = "touchstart" === e.type) || !("which" in e) || 3 !== e.which)) {
                if (b.params.noSwiping && o(e, "." + b.params.noSwipingClass)) return void (b.allowClick = !0);
                if (!b.params.swipeHandler || o(e, b.params.swipeHandler)) {
                  var i = (b.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
                    n = (b.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY);
                  if (!(b.device.ios && b.params.iOSEdgeSwipeDetection && i <= b.params.iOSEdgeSwipeThreshold)) {
                    if (((T = !0), (S = !1), (C = !0), (M = void 0), (L = void 0), (b.touches.startX = i), (b.touches.startY = n), (E = Date.now()), (b.allowClick = !0), b.updateContainerSize(), (b.swipeDirection = void 0), b.params.threshold > 0 && (z = !1), "touchstart" !== e.type)) {
                      var r = !0;
                      t(e.target).is(I) && (r = !1), document.activeElement && t(document.activeElement).is(I) && document.activeElement.blur(), r && e.preventDefault();
                    }
                    b.emit("onTouchStart", b, e);
                  }
                }
              }
            }),
            (b.onTouchMove = function (e) {
              if ((e.originalEvent && (e = e.originalEvent), !D || "mousemove" !== e.type)) {
                if (e.preventedByNestedSwiper) return (b.touches.startX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX), void (b.touches.startY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);
                if (b.params.onlyExternal) return (b.allowClick = !1), void (T && ((b.touches.startX = b.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX), (b.touches.startY = b.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY), (E = Date.now())));
                if (D && document.activeElement && e.target === document.activeElement && t(e.target).is(I)) return (S = !0), void (b.allowClick = !1);
                if ((C && b.emit("onTouchMove", b, e), !(e.targetTouches && e.targetTouches.length > 1))) {
                  if (((b.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX), (b.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY), void 0 === M)) {
                    var n = (180 * Math.atan2(Math.abs(b.touches.currentY - b.touches.startY), Math.abs(b.touches.currentX - b.touches.startX))) / Math.PI;
                    M = b.isHorizontal() ? n > b.params.touchAngle : 90 - n > b.params.touchAngle;
                  }
                  if ((M && b.emit("onTouchMoveOpposite", b, e), void 0 === L && b.browser.ieTouch && (b.touches.currentX !== b.touches.startX || b.touches.currentY !== b.touches.startY) && (L = !0), T)) {
                    if (M) return void (T = !1);
                    if (L || !b.browser.ieTouch) {
                      (b.allowClick = !1), b.emit("onSliderMove", b, e), e.preventDefault(), b.params.touchMoveStopPropagation && !b.params.nested && e.stopPropagation(), S || (i.loop && b.fixLoop(), (k = b.getWrapperTranslate()), b.setWrapperTransition(0), b.animating && b.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), b.params.autoplay && b.autoplaying && (b.params.autoplayDisableOnInteraction ? b.stopAutoplay() : b.pauseAutoplay()), (O = !1), b.params.grabCursor && ((b.container[0].style.cursor = "move"), (b.container[0].style.cursor = "-webkit-grabbing"), (b.container[0].style.cursor = "-moz-grabbin"), (b.container[0].style.cursor = "grabbing"))), (S = !0);
                      var r = (b.touches.diff = b.isHorizontal() ? b.touches.currentX - b.touches.startX : b.touches.currentY - b.touches.startY);
                      (r *= b.params.touchRatio), b.rtl && (r = -r), (b.swipeDirection = r > 0 ? "prev" : "next"), (P = r + k);
                      var a = !0;
                      if ((r > 0 && P > b.minTranslate() ? ((a = !1), b.params.resistance && (P = b.minTranslate() - 1 + Math.pow(-b.minTranslate() + k + r, b.params.resistanceRatio))) : 0 > r && P < b.maxTranslate() && ((a = !1), b.params.resistance && (P = b.maxTranslate() + 1 - Math.pow(b.maxTranslate() - k - r, b.params.resistanceRatio))), a && (e.preventedByNestedSwiper = !0), !b.params.allowSwipeToNext && "next" === b.swipeDirection && k > P && (P = k), !b.params.allowSwipeToPrev && "prev" === b.swipeDirection && P > k && (P = k), b.params.followFinger)) {
                        if (b.params.threshold > 0) {
                          if (!(Math.abs(r) > b.params.threshold || z)) return void (P = k);
                          if (!z) return (z = !0), (b.touches.startX = b.touches.currentX), (b.touches.startY = b.touches.currentY), (P = k), void (b.touches.diff = b.isHorizontal() ? b.touches.currentX - b.touches.startX : b.touches.currentY - b.touches.startY);
                        }
                        (b.params.freeMode || b.params.watchSlidesProgress) && b.updateActiveIndex(), b.params.freeMode && (0 === R.length && R.push({ position: b.touches[b.isHorizontal() ? "startX" : "startY"], time: E }), R.push({ position: b.touches[b.isHorizontal() ? "currentX" : "currentY"], time: new window.Date().getTime() })), b.updateProgress(P), b.setWrapperTranslate(P);
                      }
                    }
                  }
                }
              }
            }),
            (b.onTouchEnd = function (e) {
              if ((e.originalEvent && (e = e.originalEvent), C && b.emit("onTouchEnd", b, e), (C = !1), T)) {
                b.params.grabCursor && S && T && ((b.container[0].style.cursor = "move"), (b.container[0].style.cursor = "-webkit-grab"), (b.container[0].style.cursor = "-moz-grab"), (b.container[0].style.cursor = "grab"));
                var i,
                  n = Date.now(),
                  r = n - E;
                if (
                  (b.allowClick &&
                    (b.updateClickedSlide(e),
                    b.emit("onTap", b, e),
                    300 > r &&
                      n - N > 300 &&
                      (A && clearTimeout(A),
                      (A = setTimeout(function () {
                        b && (b.params.paginationHide && b.paginationContainer.length > 0 && !t(e.target).hasClass(b.params.bulletClass) && b.paginationContainer.toggleClass(b.params.paginationHiddenClass), b.emit("onClick", b, e));
                      }, 300))),
                    300 > r && 300 > n - N && (A && clearTimeout(A), b.emit("onDoubleTap", b, e))),
                  (N = Date.now()),
                  setTimeout(function () {
                    b && (b.allowClick = !0);
                  }, 0),
                  !T || !S || !b.swipeDirection || 0 === b.touches.diff || P === k)
                )
                  return void (T = S = !1);
                if (((T = S = !1), (i = b.params.followFinger ? (b.rtl ? b.translate : -b.translate) : -P), b.params.freeMode)) {
                  if (i < -b.minTranslate()) return void b.slideTo(b.activeIndex);
                  if (i > -b.maxTranslate()) return void b.slideTo(b.slides.length < b.snapGrid.length ? b.snapGrid.length - 1 : b.slides.length - 1);
                  if (b.params.freeModeMomentum) {
                    if (R.length > 1) {
                      var a = R.pop(),
                        s = R.pop(),
                        o = a.time - s.time;
                      (b.velocity = (a.position - s.position) / o), (b.velocity = b.velocity / 2), Math.abs(b.velocity) < b.params.freeModeMinimumVelocity && (b.velocity = 0), (o > 150 || new window.Date().getTime() - a.time > 300) && (b.velocity = 0);
                    } else b.velocity = 0;
                    R.length = 0;
                    var l = 1e3 * b.params.freeModeMomentumRatio,
                      d = b.translate + b.velocity * l;
                    b.rtl && (d = -d);
                    var u,
                      c = !1,
                      p = 20 * Math.abs(b.velocity) * b.params.freeModeMomentumBounceRatio;
                    if (d < b.maxTranslate()) b.params.freeModeMomentumBounce ? (d + b.maxTranslate() < -p && (d = b.maxTranslate() - p), (u = b.maxTranslate()), (c = !0), (O = !0)) : (d = b.maxTranslate());
                    else if (d > b.minTranslate()) b.params.freeModeMomentumBounce ? (d - b.minTranslate() > p && (d = b.minTranslate() + p), (u = b.minTranslate()), (c = !0), (O = !0)) : (d = b.minTranslate());
                    else if (b.params.freeModeSticky) {
                      var h,
                        f = 0;
                      for (f = 0; f < b.snapGrid.length; f += 1)
                        if (b.snapGrid[f] > -d) {
                          h = f;
                          break;
                        }
                      (d = Math.abs(b.snapGrid[h] - d) < Math.abs(b.snapGrid[h - 1] - d) || "next" === b.swipeDirection ? b.snapGrid[h] : b.snapGrid[h - 1]), b.rtl || (d = -d);
                    }
                    if (0 !== b.velocity) l = b.rtl ? Math.abs((-d - b.translate) / b.velocity) : Math.abs((d - b.translate) / b.velocity);
                    else if (b.params.freeModeSticky) return void b.slideReset();
                    b.params.freeModeMomentumBounce && c
                      ? (b.updateProgress(u),
                        b.setWrapperTransition(l),
                        b.setWrapperTranslate(d),
                        b.onTransitionStart(),
                        (b.animating = !0),
                        b.wrapper.transitionEnd(function () {
                          b &&
                            O &&
                            (b.emit("onMomentumBounce", b),
                            b.setWrapperTransition(b.params.speed),
                            b.setWrapperTranslate(u),
                            b.wrapper.transitionEnd(function () {
                              b && b.onTransitionEnd();
                            }));
                        }))
                      : b.velocity
                      ? (b.updateProgress(d),
                        b.setWrapperTransition(l),
                        b.setWrapperTranslate(d),
                        b.onTransitionStart(),
                        b.animating ||
                          ((b.animating = !0),
                          b.wrapper.transitionEnd(function () {
                            b && b.onTransitionEnd();
                          })))
                      : b.updateProgress(d),
                      b.updateActiveIndex();
                  }
                  return void ((!b.params.freeModeMomentum || r >= b.params.longSwipesMs) && (b.updateProgress(), b.updateActiveIndex()));
                }
                var m,
                  v = 0,
                  g = b.slidesSizesGrid[0];
                for (m = 0; m < b.slidesGrid.length; m += b.params.slidesPerGroup) void 0 !== b.slidesGrid[m + b.params.slidesPerGroup] ? i >= b.slidesGrid[m] && i < b.slidesGrid[m + b.params.slidesPerGroup] && ((v = m), (g = b.slidesGrid[m + b.params.slidesPerGroup] - b.slidesGrid[m])) : i >= b.slidesGrid[m] && ((v = m), (g = b.slidesGrid[b.slidesGrid.length - 1] - b.slidesGrid[b.slidesGrid.length - 2]));
                var y = (i - b.slidesGrid[v]) / g;
                if (r > b.params.longSwipesMs) {
                  if (!b.params.longSwipes) return void b.slideTo(b.activeIndex);
                  "next" === b.swipeDirection && b.slideTo(y >= b.params.longSwipesRatio ? v + b.params.slidesPerGroup : v), "prev" === b.swipeDirection && b.slideTo(y > 1 - b.params.longSwipesRatio ? v + b.params.slidesPerGroup : v);
                } else {
                  if (!b.params.shortSwipes) return void b.slideTo(b.activeIndex);
                  "next" === b.swipeDirection && b.slideTo(v + b.params.slidesPerGroup), "prev" === b.swipeDirection && b.slideTo(v);
                }
              }
            }),
            (b._slideTo = function (e, t) {
              return b.slideTo(e, t, !0, !0);
            }),
            (b.slideTo = function (e, t, i, n) {
              void 0 === i && (i = !0), void 0 === e && (e = 0), 0 > e && (e = 0), (b.snapIndex = Math.floor(e / b.params.slidesPerGroup)), b.snapIndex >= b.snapGrid.length && (b.snapIndex = b.snapGrid.length - 1);
              var r = -b.snapGrid[b.snapIndex];
              b.params.autoplay && b.autoplaying && (n || !b.params.autoplayDisableOnInteraction ? b.pauseAutoplay(t) : b.stopAutoplay()), b.updateProgress(r);
              for (var a = 0; a < b.slidesGrid.length; a++) -Math.floor(100 * r) >= Math.floor(100 * b.slidesGrid[a]) && (e = a);
              return !(
                (!b.params.allowSwipeToNext && r < b.translate && r < b.minTranslate()) ||
                (!b.params.allowSwipeToPrev && r > b.translate && r > b.maxTranslate() && (b.activeIndex || 0) !== e) ||
                (void 0 === t && (t = b.params.speed),
                (b.previousIndex = b.activeIndex || 0),
                (b.activeIndex = e),
                (b.rtl && -r === b.translate) || (!b.rtl && r === b.translate)
                  ? (b.params.autoHeight && b.updateAutoHeight(), b.updateClasses(), "slide" !== b.params.effect && b.setWrapperTranslate(r), 1)
                  : (b.updateClasses(),
                    b.onTransitionStart(i),
                    0 === t
                      ? (b.setWrapperTranslate(r), b.setWrapperTransition(0), b.onTransitionEnd(i))
                      : (b.setWrapperTranslate(r),
                        b.setWrapperTransition(t),
                        b.animating ||
                          ((b.animating = !0),
                          b.wrapper.transitionEnd(function () {
                            b && b.onTransitionEnd(i);
                          }))),
                    0))
              );
            }),
            (b.onTransitionStart = function (e) {
              void 0 === e && (e = !0), b.params.autoHeight && b.updateAutoHeight(), b.lazy && b.lazy.onTransitionStart(), e && (b.emit("onTransitionStart", b), b.activeIndex !== b.previousIndex && (b.emit("onSlideChangeStart", b), b.emit(b.activeIndex > b.previousIndex ? "onSlideNextStart" : "onSlidePrevStart", b)));
            }),
            (b.onTransitionEnd = function (e) {
              (b.animating = !1), b.setWrapperTransition(0), void 0 === e && (e = !0), b.lazy && b.lazy.onTransitionEnd(), e && (b.emit("onTransitionEnd", b), b.activeIndex !== b.previousIndex && (b.emit("onSlideChangeEnd", b), b.emit(b.activeIndex > b.previousIndex ? "onSlideNextEnd" : "onSlidePrevEnd", b))), b.params.hashnav && b.hashnav && b.hashnav.setHash();
            }),
            (b.slideNext = function (e, t, i) {
              return b.params.loop ? !b.animating && (b.fixLoop(), b.slideTo(b.activeIndex + b.params.slidesPerGroup, t, e, i)) : b.slideTo(b.activeIndex + b.params.slidesPerGroup, t, e, i);
            }),
            (b._slideNext = function (e) {
              return b.slideNext(!0, e, !0);
            }),
            (b.slidePrev = function (e, t, i) {
              return b.params.loop ? !b.animating && (b.fixLoop(), b.slideTo(b.activeIndex - 1, t, e, i)) : b.slideTo(b.activeIndex - 1, t, e, i);
            }),
            (b._slidePrev = function (e) {
              return b.slidePrev(!0, e, !0);
            }),
            (b.slideReset = function (e, t, i) {
              return b.slideTo(b.activeIndex, t, e);
            }),
            (b.setWrapperTransition = function (e, t) {
              b.wrapper.transition(e), "slide" !== b.params.effect && b.effects[b.params.effect] && b.effects[b.params.effect].setTransition(e), b.params.parallax && b.parallax && b.parallax.setTransition(e), b.params.scrollbar && b.scrollbar && b.scrollbar.setTransition(e), b.params.control && b.controller && b.controller.setTransition(e, t), b.emit("onSetTransition", b, e);
            }),
            (b.setWrapperTranslate = function (e, t, i) {
              var n = 0,
                r = 0;
              b.isHorizontal() ? (n = b.rtl ? -e : e) : (r = e), b.params.roundLengths && ((n = a(n)), (r = a(r))), b.params.virtualTranslate || b.wrapper.transform(b.support.transforms3d ? "translate3d(" + n + "px, " + r + "px, 0px)" : "translate(" + n + "px, " + r + "px)"), (b.translate = b.isHorizontal() ? n : r);
              var s = b.maxTranslate() - b.minTranslate();
              (0 === s ? 0 : (e - b.minTranslate()) / s) !== b.progress && b.updateProgress(e), t && b.updateActiveIndex(), "slide" !== b.params.effect && b.effects[b.params.effect] && b.effects[b.params.effect].setTranslate(b.translate), b.params.parallax && b.parallax && b.parallax.setTranslate(b.translate), b.params.scrollbar && b.scrollbar && b.scrollbar.setTranslate(b.translate), b.params.control && b.controller && b.controller.setTranslate(b.translate, i), b.emit("onSetTranslate", b, b.translate);
            }),
            (b.getTranslate = function (e, t) {
              var i, n, r, a;
              return (
                void 0 === t && (t = "x"),
                b.params.virtualTranslate
                  ? b.rtl
                    ? -b.translate
                    : b.translate
                  : ((r = window.getComputedStyle(e, null)),
                    window.WebKitCSSMatrix
                      ? ((n = r.transform || r.webkitTransform).split(",").length > 6 &&
                          (n = n
                            .split(", ")
                            .map(function (e) {
                              return e.replace(",", ".");
                            })
                            .join(", ")),
                        (a = new window.WebKitCSSMatrix("none" === n ? "" : n)))
                      : (i = (a = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(",")),
                    "x" === t && (n = window.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
                    "y" === t && (n = window.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
                    b.rtl && n && (n = -n),
                    n || 0)
              );
            }),
            (b.getWrapperTranslate = function (e) {
              return void 0 === e && (e = b.isHorizontal() ? "x" : "y"), b.getTranslate(b.wrapper[0], e);
            }),
            (b.observers = []),
            (b.initObservers = function () {
              if (b.params.observeParents) for (var e = b.container.parents(), t = 0; t < e.length; t++) l(e[t]);
              l(b.container[0], { childList: !1 }), l(b.wrapper[0], { attributes: !1 });
            }),
            (b.disconnectObservers = function () {
              for (var e = 0; e < b.observers.length; e++) b.observers[e].disconnect();
              b.observers = [];
            }),
            (b.createLoop = function () {
              b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass).remove();
              var e = b.wrapper.children("." + b.params.slideClass);
              "auto" !== b.params.slidesPerView || b.params.loopedSlides || (b.params.loopedSlides = e.length), (b.loopedSlides = parseInt(b.params.loopedSlides || b.params.slidesPerView, 10)), (b.loopedSlides = b.loopedSlides + b.params.loopAdditionalSlides), b.loopedSlides > e.length && (b.loopedSlides = e.length);
              var i,
                n = [],
                r = [];
              for (
                e.each(function (i, a) {
                  var s = t(this);
                  i < b.loopedSlides && r.push(a), i < e.length && i >= e.length - b.loopedSlides && n.push(a), s.attr("data-swiper-slide-index", i);
                }),
                  i = 0;
                i < r.length;
                i++
              )
                b.wrapper.append(t(r[i].cloneNode(!0)).addClass(b.params.slideDuplicateClass));
              for (i = n.length - 1; i >= 0; i--) b.wrapper.prepend(t(n[i].cloneNode(!0)).addClass(b.params.slideDuplicateClass));
            }),
            (b.destroyLoop = function () {
              b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass).remove(), b.slides.removeAttr("data-swiper-slide-index");
            }),
            (b.reLoop = function (e) {
              var t = b.activeIndex - b.loopedSlides;
              b.destroyLoop(), b.createLoop(), b.updateSlidesSize(), e && b.slideTo(t + b.loopedSlides, 0, !1);
            }),
            (b.fixLoop = function () {
              var e;
              b.activeIndex < b.loopedSlides ? ((e = b.slides.length - 3 * b.loopedSlides + b.activeIndex), b.slideTo((e += b.loopedSlides), 0, !1, !0)) : (("auto" === b.params.slidesPerView && b.activeIndex >= 2 * b.loopedSlides) || b.activeIndex > b.slides.length - 2 * b.params.slidesPerView) && ((e = -b.slides.length + b.activeIndex + b.loopedSlides), b.slideTo((e += b.loopedSlides), 0, !1, !0));
            }),
            (b.appendSlide = function (e) {
              if ((b.params.loop && b.destroyLoop(), "object" == typeof e && e.length)) for (var t = 0; t < e.length; t++) e[t] && b.wrapper.append(e[t]);
              else b.wrapper.append(e);
              b.params.loop && b.createLoop(), (b.params.observer && b.support.observer) || b.update(!0);
            }),
            (b.prependSlide = function (e) {
              b.params.loop && b.destroyLoop();
              var t = b.activeIndex + 1;
              if ("object" == typeof e && e.length) {
                for (var i = 0; i < e.length; i++) e[i] && b.wrapper.prepend(e[i]);
                t = b.activeIndex + e.length;
              } else b.wrapper.prepend(e);
              b.params.loop && b.createLoop(), (b.params.observer && b.support.observer) || b.update(!0), b.slideTo(t, 0, !1);
            }),
            (b.removeSlide = function (e) {
              b.params.loop && (b.destroyLoop(), (b.slides = b.wrapper.children("." + b.params.slideClass)));
              var t,
                i = b.activeIndex;
              if ("object" == typeof e && e.length) {
                for (var n = 0; n < e.length; n++) b.slides[(t = e[n])] && b.slides.eq(t).remove(), i > t && i--;
                i = Math.max(i, 0);
              } else b.slides[(t = e)] && b.slides.eq(t).remove(), i > t && i--, (i = Math.max(i, 0));
              b.params.loop && b.createLoop(), (b.params.observer && b.support.observer) || b.update(!0), b.slideTo(b.params.loop ? i + b.loopedSlides : i, 0, !1);
            }),
            (b.removeAllSlides = function () {
              for (var e = [], t = 0; t < b.slides.length; t++) e.push(t);
              b.removeSlide(e);
            }),
            (b.effects = {
              fade: {
                setTranslate: function () {
                  for (var e = 0; e < b.slides.length; e++) {
                    var t = b.slides.eq(e),
                      i = -t[0].swiperSlideOffset;
                    b.params.virtualTranslate || (i -= b.translate);
                    var n = 0;
                    b.isHorizontal() || ((n = i), (i = 0));
                    var r = b.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                    t.css({ opacity: r }).transform("translate3d(" + i + "px, " + n + "px, 0px)");
                  }
                },
                setTransition: function (e) {
                  if ((b.slides.transition(e), b.params.virtualTranslate && 0 !== e)) {
                    var t = !1;
                    b.slides.transitionEnd(function () {
                      if (!t && b) {
                        (t = !0), (b.animating = !1);
                        for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = 0; i < e.length; i++) b.wrapper.trigger(e[i]);
                      }
                    });
                  }
                },
              },
              flip: {
                setTranslate: function () {
                  for (var e = 0; e < b.slides.length; e++) {
                    var i = b.slides.eq(e),
                      n = i[0].progress;
                    b.params.flip.limitRotation && (n = Math.max(Math.min(i[0].progress, 1), -1));
                    var r = -180 * n,
                      a = 0,
                      s = -i[0].swiperSlideOffset,
                      o = 0;
                    if ((b.isHorizontal() ? b.rtl && (r = -r) : ((o = s), (s = 0), (a = -r), (r = 0)), (i[0].style.zIndex = -Math.abs(Math.round(n)) + b.slides.length), b.params.flip.slideShadows)) {
                      var l = b.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                        d = b.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                      0 === l.length && ((l = t('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>')), i.append(l)), 0 === d.length && ((d = t('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>')), i.append(d)), l.length && (l[0].style.opacity = Math.max(-n, 0)), d.length && (d[0].style.opacity = Math.max(n, 0));
                    }
                    i.transform("translate3d(" + s + "px, " + o + "px, 0px) rotateX(" + a + "deg) rotateY(" + r + "deg)");
                  }
                },
                setTransition: function (e) {
                  if ((b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), b.params.virtualTranslate && 0 !== e)) {
                    var i = !1;
                    b.slides.eq(b.activeIndex).transitionEnd(function () {
                      if (!i && b && t(this).hasClass(b.params.slideActiveClass)) {
                        (i = !0), (b.animating = !1);
                        for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < e.length; n++) b.wrapper.trigger(e[n]);
                      }
                    });
                  }
                },
              },
              cube: {
                setTranslate: function () {
                  var e,
                    i = 0;
                  b.params.cube.shadow && (b.isHorizontal() ? (0 === (e = b.wrapper.find(".swiper-cube-shadow")).length && ((e = t('<div class="swiper-cube-shadow"></div>')), b.wrapper.append(e)), e.css({ height: b.width + "px" })) : 0 === (e = b.container.find(".swiper-cube-shadow")).length && ((e = t('<div class="swiper-cube-shadow"></div>')), b.container.append(e)));
                  for (var n = 0; n < b.slides.length; n++) {
                    var r = b.slides.eq(n),
                      a = 90 * n,
                      s = Math.floor(a / 360);
                    b.rtl && ((a = -a), (s = Math.floor(-a / 360)));
                    var o = Math.max(Math.min(r[0].progress, 1), -1),
                      l = 0,
                      d = 0,
                      u = 0;
                    n % 4 == 0 ? ((l = 4 * -s * b.size), (u = 0)) : (n - 1) % 4 == 0 ? ((l = 0), (u = 4 * -s * b.size)) : (n - 2) % 4 == 0 ? ((l = b.size + 4 * s * b.size), (u = b.size)) : (n - 3) % 4 == 0 && ((l = -b.size), (u = 3 * b.size + 4 * b.size * s)), b.rtl && (l = -l), b.isHorizontal() || ((d = l), (l = 0));
                    var c = "rotateX(" + (b.isHorizontal() ? 0 : -a) + "deg) rotateY(" + (b.isHorizontal() ? a : 0) + "deg) translate3d(" + l + "px, " + d + "px, " + u + "px)";
                    if ((1 >= o && o > -1 && ((i = 90 * n + 90 * o), b.rtl && (i = 90 * -n - 90 * o)), r.transform(c), b.params.cube.slideShadows)) {
                      var p = b.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
                        h = b.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                      0 === p.length && ((p = t('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>')), r.append(p)), 0 === h.length && ((h = t('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>')), r.append(h)), p.length && (p[0].style.opacity = Math.max(-o, 0)), h.length && (h[0].style.opacity = Math.max(o, 0));
                    }
                  }
                  if ((b.wrapper.css({ "-webkit-transform-origin": "50% 50% -" + b.size / 2 + "px", "-moz-transform-origin": "50% 50% -" + b.size / 2 + "px", "-ms-transform-origin": "50% 50% -" + b.size / 2 + "px", "transform-origin": "50% 50% -" + b.size / 2 + "px" }), b.params.cube.shadow))
                    if (b.isHorizontal()) e.transform("translate3d(0px, " + (b.width / 2 + b.params.cube.shadowOffset) + "px, " + -b.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + b.params.cube.shadowScale + ")");
                    else {
                      var f = Math.abs(i) - 90 * Math.floor(Math.abs(i) / 90),
                        m = 1.5 - (Math.sin((2 * f * Math.PI) / 360) / 2 + Math.cos((2 * f * Math.PI) / 360) / 2),
                        v = b.params.cube.shadowScale / m;
                      e.transform("scale3d(" + b.params.cube.shadowScale + ", 1, " + v + ") translate3d(0px, " + (b.height / 2 + b.params.cube.shadowOffset) + "px, " + -b.height / 2 / v + "px) rotateX(-90deg)");
                    }
                  b.wrapper.transform("translate3d(0px,0," + (b.isSafari || b.isUiWebView ? -b.size / 2 : 0) + "px) rotateX(" + (b.isHorizontal() ? 0 : i) + "deg) rotateY(" + (b.isHorizontal() ? -i : 0) + "deg)");
                },
                setTransition: function (e) {
                  b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), b.params.cube.shadow && !b.isHorizontal() && b.container.find(".swiper-cube-shadow").transition(e);
                },
              },
              coverflow: {
                setTranslate: function () {
                  for (var e = b.translate, i = b.isHorizontal() ? b.width / 2 - e : b.height / 2 - e, n = b.isHorizontal() ? b.params.coverflow.rotate : -b.params.coverflow.rotate, r = b.params.coverflow.depth, a = 0, s = b.slides.length; s > a; a++) {
                    var o = b.slides.eq(a),
                      l = b.slidesSizesGrid[a],
                      d = ((i - o[0].swiperSlideOffset - l / 2) / l) * b.params.coverflow.modifier,
                      u = b.isHorizontal() ? n * d : 0,
                      c = b.isHorizontal() ? 0 : n * d,
                      p = -r * Math.abs(d),
                      h = b.isHorizontal() ? 0 : b.params.coverflow.stretch * d,
                      f = b.isHorizontal() ? b.params.coverflow.stretch * d : 0;
                    if ((Math.abs(f) < 0.001 && (f = 0), Math.abs(h) < 0.001 && (h = 0), Math.abs(p) < 0.001 && (p = 0), Math.abs(u) < 0.001 && (u = 0), Math.abs(c) < 0.001 && (c = 0), o.transform("translate3d(" + f + "px," + h + "px," + p + "px)  rotateX(" + c + "deg) rotateY(" + u + "deg)"), (o[0].style.zIndex = 1 - Math.abs(Math.round(d))), b.params.coverflow.slideShadows)) {
                      var m = b.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
                        v = b.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                      0 === m.length && ((m = t('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>')), o.append(m)), 0 === v.length && ((v = t('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>')), o.append(v)), m.length && (m[0].style.opacity = d > 0 ? d : 0), v.length && (v[0].style.opacity = -d > 0 ? -d : 0);
                    }
                  }
                  b.browser.ie && (b.wrapper[0].style.perspectiveOrigin = i + "px 50%");
                },
                setTransition: function (e) {
                  b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
                },
              },
            }),
            (b.lazy = {
              initialImageLoaded: !1,
              loadImageInSlide: function (e, i) {
                if (void 0 !== e && (void 0 === i && (i = !0), 0 !== b.slides.length)) {
                  var n = b.slides.eq(e),
                    r = n.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
                  !n.hasClass("swiper-lazy") || n.hasClass("swiper-lazy-loaded") || n.hasClass("swiper-lazy-loading") || (r = r.add(n[0])),
                    0 !== r.length &&
                      r.each(function () {
                        var e = t(this);
                        e.addClass("swiper-lazy-loading");
                        var r = e.attr("data-background"),
                          a = e.attr("data-src"),
                          s = e.attr("data-srcset");
                        b.loadImage(e[0], a || r, s, !1, function () {
                          if ((r ? (e.css("background-image", 'url("' + r + '")'), e.removeAttr("data-background")) : (s && (e.attr("srcset", s), e.removeAttr("data-srcset")), a && (e.attr("src", a), e.removeAttr("data-src"))), e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), n.find(".swiper-lazy-preloader, .preloader").remove(), b.params.loop && i)) {
                            var t = n.attr("data-swiper-slide-index");
                            if (n.hasClass(b.params.slideDuplicateClass)) {
                              var o = b.wrapper.children('[data-swiper-slide-index="' + t + '"]:not(.' + b.params.slideDuplicateClass + ")");
                              b.lazy.loadImageInSlide(o.index(), !1);
                            } else {
                              var l = b.wrapper.children("." + b.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]');
                              b.lazy.loadImageInSlide(l.index(), !1);
                            }
                          }
                          b.emit("onLazyImageReady", b, n[0], e[0]);
                        }),
                          b.emit("onLazyImageLoad", b, n[0], e[0]);
                      });
                }
              },
              load: function () {
                var e;
                if (b.params.watchSlidesVisibility)
                  b.wrapper.children("." + b.params.slideVisibleClass).each(function () {
                    b.lazy.loadImageInSlide(t(this).index());
                  });
                else if (b.params.slidesPerView > 1) for (e = b.activeIndex; e < b.activeIndex + b.params.slidesPerView; e++) b.slides[e] && b.lazy.loadImageInSlide(e);
                else b.lazy.loadImageInSlide(b.activeIndex);
                if (b.params.lazyLoadingInPrevNext)
                  if (b.params.slidesPerView > 1 || (b.params.lazyLoadingInPrevNextAmount && b.params.lazyLoadingInPrevNextAmount > 1)) {
                    var i = b.params.lazyLoadingInPrevNextAmount,
                      n = b.params.slidesPerView,
                      r = Math.min(b.activeIndex + n + Math.max(i, n), b.slides.length),
                      a = Math.max(b.activeIndex - Math.max(n, i), 0);
                    for (e = b.activeIndex + b.params.slidesPerView; r > e; e++) b.slides[e] && b.lazy.loadImageInSlide(e);
                    for (e = a; e < b.activeIndex; e++) b.slides[e] && b.lazy.loadImageInSlide(e);
                  } else {
                    var s = b.wrapper.children("." + b.params.slideNextClass);
                    s.length > 0 && b.lazy.loadImageInSlide(s.index());
                    var o = b.wrapper.children("." + b.params.slidePrevClass);
                    o.length > 0 && b.lazy.loadImageInSlide(o.index());
                  }
              },
              onTransitionStart: function () {
                b.params.lazyLoading && (b.params.lazyLoadingOnTransitionStart || (!b.params.lazyLoadingOnTransitionStart && !b.lazy.initialImageLoaded)) && b.lazy.load();
              },
              onTransitionEnd: function () {
                b.params.lazyLoading && !b.params.lazyLoadingOnTransitionStart && b.lazy.load();
              },
            }),
            (b.scrollbar = {
              isTouched: !1,
              setDragPosition: function (e) {
                var t = b.scrollbar,
                  i = (b.isHorizontal() ? ("touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX) : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - t.track.offset()[b.isHorizontal() ? "left" : "top"] - t.dragSize / 2,
                  n = -b.minTranslate() * t.moveDivider,
                  r = -b.maxTranslate() * t.moveDivider;
                n > i ? (i = n) : i > r && (i = r), b.updateProgress((i = -i / t.moveDivider)), b.setWrapperTranslate(i, !0);
              },
              dragStart: function (e) {
                var t = b.scrollbar;
                (t.isTouched = !0), e.preventDefault(), e.stopPropagation(), t.setDragPosition(e), clearTimeout(t.dragTimeout), t.track.transition(0), b.params.scrollbarHide && t.track.css("opacity", 1), b.wrapper.transition(100), t.drag.transition(100), b.emit("onScrollbarDragStart", b);
              },
              dragMove: function (e) {
                var t = b.scrollbar;
                t.isTouched && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1), t.setDragPosition(e), b.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), b.emit("onScrollbarDragMove", b));
              },
              dragEnd: function (e) {
                var t = b.scrollbar;
                t.isTouched &&
                  ((t.isTouched = !1),
                  b.params.scrollbarHide &&
                    (clearTimeout(t.dragTimeout),
                    (t.dragTimeout = setTimeout(function () {
                      t.track.css("opacity", 0), t.track.transition(400);
                    }, 1e3))),
                  b.emit("onScrollbarDragEnd", b),
                  b.params.scrollbarSnapOnRelease && b.slideReset());
              },
              enableDraggable: function () {
                var e = b.scrollbar,
                  i = b.support.touch ? e.track : document;
                t(e.track).on(b.touchEvents.start, e.dragStart), t(i).on(b.touchEvents.move, e.dragMove), t(i).on(b.touchEvents.end, e.dragEnd);
              },
              disableDraggable: function () {
                var e = b.scrollbar,
                  i = b.support.touch ? e.track : document;
                t(e.track).off(b.touchEvents.start, e.dragStart), t(i).off(b.touchEvents.move, e.dragMove), t(i).off(b.touchEvents.end, e.dragEnd);
              },
              set: function () {
                if (b.params.scrollbar) {
                  var e = b.scrollbar;
                  (e.track = t(b.params.scrollbar)), b.params.uniqueNavElements && "string" == typeof b.params.scrollbar && e.track.length > 1 && 1 === b.container.find(b.params.scrollbar).length && (e.track = b.container.find(b.params.scrollbar)), (e.drag = e.track.find(".swiper-scrollbar-drag")), 0 === e.drag.length && ((e.drag = t('<div class="swiper-scrollbar-drag"></div>')), e.track.append(e.drag)), (e.drag[0].style.width = ""), (e.drag[0].style.height = ""), (e.trackSize = b.isHorizontal() ? e.track[0].offsetWidth : e.track[0].offsetHeight), (e.divider = b.size / b.virtualSize), (e.moveDivider = e.divider * (e.trackSize / b.size)), (e.dragSize = e.trackSize * e.divider), b.isHorizontal() ? (e.drag[0].style.width = e.dragSize + "px") : (e.drag[0].style.height = e.dragSize + "px"), (e.track[0].style.display = e.divider >= 1 ? "none" : ""), b.params.scrollbarHide && (e.track[0].style.opacity = 0);
                }
              },
              setTranslate: function () {
                if (b.params.scrollbar) {
                  var e,
                    t = b.scrollbar,
                    i = t.dragSize;
                  (e = (t.trackSize - t.dragSize) * b.progress),
                    b.rtl && b.isHorizontal() ? ((e = -e) > 0 ? ((i = t.dragSize - e), (e = 0)) : -e + t.dragSize > t.trackSize && (i = t.trackSize + e)) : 0 > e ? ((i = t.dragSize + e), (e = 0)) : e + t.dragSize > t.trackSize && (i = t.trackSize - e),
                    b.isHorizontal() ? (t.drag.transform(b.support.transforms3d ? "translate3d(" + e + "px, 0, 0)" : "translateX(" + e + "px)"), (t.drag[0].style.width = i + "px")) : (t.drag.transform(b.support.transforms3d ? "translate3d(0px, " + e + "px, 0)" : "translateY(" + e + "px)"), (t.drag[0].style.height = i + "px")),
                    b.params.scrollbarHide &&
                      (clearTimeout(t.timeout),
                      (t.track[0].style.opacity = 1),
                      (t.timeout = setTimeout(function () {
                        (t.track[0].style.opacity = 0), t.track.transition(400);
                      }, 1e3)));
                }
              },
              setTransition: function (e) {
                b.params.scrollbar && b.scrollbar.drag.transition(e);
              },
            }),
            (b.controller = {
              LinearSpline: function (e, t) {
                var i, n;
                (this.x = e),
                  (this.y = t),
                  (this.lastIndex = e.length - 1),
                  (this.interpolate = function (e) {
                    return e ? ((n = r(this.x, e)), ((e - this.x[(i = n - 1)]) * (this.y[n] - this.y[i])) / (this.x[n] - this.x[i]) + this.y[i]) : 0;
                  });
                var r = (function () {
                  var e, t, i;
                  return function (n, r) {
                    for (t = -1, e = n.length; e - t > 1; ) n[(i = (e + t) >> 1)] <= r ? (t = i) : (e = i);
                    return e;
                  };
                })();
              },
              getInterpolateFunction: function (e) {
                b.controller.spline || (b.controller.spline = b.params.loop ? new b.controller.LinearSpline(b.slidesGrid, e.slidesGrid) : new b.controller.LinearSpline(b.snapGrid, e.snapGrid));
              },
              setTranslate: function (e, t) {
                function i(t) {
                  (e = t.rtl && "horizontal" === t.params.direction ? -b.translate : b.translate), "slide" === b.params.controlBy && (b.controller.getInterpolateFunction(t), (a = -b.controller.spline.interpolate(-e))), (a && "container" !== b.params.controlBy) || ((r = (t.maxTranslate() - t.minTranslate()) / (b.maxTranslate() - b.minTranslate())), (a = (e - b.minTranslate()) * r + t.minTranslate())), b.params.controlInverse && (a = t.maxTranslate() - a), t.updateProgress(a), t.setWrapperTranslate(a, !1, b), t.updateActiveIndex();
                }
                var r,
                  a,
                  s = b.params.control;
                if (b.isArray(s)) for (var o = 0; o < s.length; o++) s[o] !== t && s[o] instanceof n && i(s[o]);
                else s instanceof n && t !== s && i(s);
              },
              setTransition: function (e, t) {
                function i(t) {
                  t.setWrapperTransition(e, b),
                    0 !== e &&
                      (t.onTransitionStart(),
                      t.wrapper.transitionEnd(function () {
                        a && (t.params.loop && "slide" === b.params.controlBy && t.fixLoop(), t.onTransitionEnd());
                      }));
                }
                var r,
                  a = b.params.control;
                if (b.isArray(a)) for (r = 0; r < a.length; r++) a[r] !== t && a[r] instanceof n && i(a[r]);
                else a instanceof n && t !== a && i(a);
              },
            }),
            (b.hashnav = {
              init: function () {
                if (b.params.hashnav) {
                  b.hashnav.initialized = !0;
                  var e = document.location.hash.replace("#", "");
                  if (e)
                    for (var t = 0, i = b.slides.length; i > t; t++) {
                      var n = b.slides.eq(t);
                      if (n.attr("data-hash") === e && !n.hasClass(b.params.slideDuplicateClass)) {
                        var r = n.index();
                        b.slideTo(r, 0, b.params.runCallbacksOnInit, !0);
                      }
                    }
                }
              },
              setHash: function () {
                b.hashnav.initialized && b.params.hashnav && (document.location.hash = b.slides.eq(b.activeIndex).attr("data-hash") || "");
              },
            }),
            (b.disableKeyboardControl = function () {
              (b.params.keyboardControl = !1), t(document).off("keydown", d);
            }),
            (b.enableKeyboardControl = function () {
              (b.params.keyboardControl = !0), t(document).on("keydown", d);
            }),
            (b.mousewheel = { event: !1, lastScrollTime: new window.Date().getTime() }),
            b.params.mousewheelControl)
          ) {
            try {
              new window.WheelEvent("wheel"), (b.mousewheel.event = "wheel");
            } catch ($) {
              (window.WheelEvent || (b.container[0] && "wheel" in b.container[0])) && (b.mousewheel.event = "wheel");
            }
            !b.mousewheel.event && window, b.mousewheel.event || void 0 === document.onmousewheel || (b.mousewheel.event = "mousewheel"), b.mousewheel.event || (b.mousewheel.event = "DOMMouseScroll");
          }
          for (var B in ((b.disableMousewheelControl = function () {
            return !!b.mousewheel.event && (b.container.off(b.mousewheel.event, u), !0);
          }),
          (b.enableMousewheelControl = function () {
            return !!b.mousewheel.event && (b.container.on(b.mousewheel.event, u), !0);
          }),
          (b.parallax = {
            setTranslate: function () {
              b.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                c(this, b.progress);
              }),
                b.slides.each(function () {
                  var e = t(this);
                  e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                    c(this, Math.min(Math.max(e[0].progress, -1), 1));
                  });
                });
            },
            setTransition: function (e) {
              void 0 === e && (e = b.params.speed),
                b.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                  var i = t(this),
                    n = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
                  0 === e && (n = 0), i.transition(n);
                });
            },
          }),
          (b._plugins = []),
          b.plugins)) {
            var F = b.plugins[B](b, b.params[B]);
            F && b._plugins.push(F);
          }
          return (
            (b.callPlugins = function (e) {
              for (var t = 0; t < b._plugins.length; t++) e in b._plugins[t] && b._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            }),
            (b.emitterEventListeners = {}),
            (b.emit = function (e) {
              var t;
              if ((b.params[e] && b.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), b.emitterEventListeners[e])) for (t = 0; t < b.emitterEventListeners[e].length; t++) b.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
              b.callPlugins && b.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            }),
            (b.on = function (e, t) {
              return (e = p(e)), b.emitterEventListeners[e] || (b.emitterEventListeners[e] = []), b.emitterEventListeners[e].push(t), b;
            }),
            (b.off = function (e, t) {
              var i;
              if (((e = p(e)), void 0 === t)) return (b.emitterEventListeners[e] = []), b;
              if (b.emitterEventListeners[e] && 0 !== b.emitterEventListeners[e].length) {
                for (i = 0; i < b.emitterEventListeners[e].length; i++) b.emitterEventListeners[e][i] === t && b.emitterEventListeners[e].splice(i, 1);
                return b;
              }
            }),
            (b.once = function (e, t) {
              e = p(e);
              var i = function () {
                t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), b.off(e, i);
              };
              return b.on(e, i), b;
            }),
            (b.a11y = {
              makeFocusable: function (e) {
                return e.attr("tabIndex", "0"), e;
              },
              addRole: function (e, t) {
                return e.attr("role", t), e;
              },
              addLabel: function (e, t) {
                return e.attr("aria-label", t), e;
              },
              disable: function (e) {
                return e.attr("aria-disabled", !0), e;
              },
              enable: function (e) {
                return e.attr("aria-disabled", !1), e;
              },
              onEnterKey: function (e) {
                13 === e.keyCode && (t(e.target).is(b.params.nextButton) ? (b.onClickNext(e), b.a11y.notify(b.isEnd ? b.params.lastSlideMessage : b.params.nextSlideMessage)) : t(e.target).is(b.params.prevButton) && (b.onClickPrev(e), b.a11y.notify(b.isBeginning ? b.params.firstSlideMessage : b.params.prevSlideMessage)), t(e.target).is("." + b.params.bulletClass) && t(e.target)[0].click());
              },
              liveRegion: t('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
              notify: function (e) {
                var t = b.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e));
              },
              init: function () {
                b.params.nextButton && b.nextButton && b.nextButton.length > 0 && (b.a11y.makeFocusable(b.nextButton), b.a11y.addRole(b.nextButton, "button"), b.a11y.addLabel(b.nextButton, b.params.nextSlideMessage)), b.params.prevButton && b.prevButton && b.prevButton.length > 0 && (b.a11y.makeFocusable(b.prevButton), b.a11y.addRole(b.prevButton, "button"), b.a11y.addLabel(b.prevButton, b.params.prevSlideMessage)), t(b.container).append(b.a11y.liveRegion);
              },
              initPagination: function () {
                b.params.pagination &&
                  b.params.paginationClickable &&
                  b.bullets &&
                  b.bullets.length &&
                  b.bullets.each(function () {
                    var e = t(this);
                    b.a11y.makeFocusable(e), b.a11y.addRole(e, "button"), b.a11y.addLabel(e, b.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1));
                  });
              },
              destroy: function () {
                b.a11y.liveRegion && b.a11y.liveRegion.length > 0 && b.a11y.liveRegion.remove();
              },
            }),
            (b.init = function () {
              b.params.loop && b.createLoop(), b.updateContainerSize(), b.updateSlidesSize(), b.updatePagination(), b.params.scrollbar && b.scrollbar && (b.scrollbar.set(), b.params.scrollbarDraggable && b.scrollbar.enableDraggable()), "slide" !== b.params.effect && b.effects[b.params.effect] && (b.params.loop || b.updateProgress(), b.effects[b.params.effect].setTranslate()), b.params.loop ? b.slideTo(b.params.initialSlide + b.loopedSlides, 0, b.params.runCallbacksOnInit) : (b.slideTo(b.params.initialSlide, 0, b.params.runCallbacksOnInit), 0 === b.params.initialSlide && (b.parallax && b.params.parallax && b.parallax.setTranslate(), b.lazy && b.params.lazyLoading && (b.lazy.load(), (b.lazy.initialImageLoaded = !0)))), b.attachEvents(), b.params.observer && b.support.observer && b.initObservers(), b.params.preloadImages && !b.params.lazyLoading && b.preloadImages(), b.params.autoplay && b.startAutoplay(), b.params.keyboardControl && b.enableKeyboardControl && b.enableKeyboardControl(), b.params.mousewheelControl && b.enableMousewheelControl && b.enableMousewheelControl(), b.params.hashnav && b.hashnav && b.hashnav.init(), b.params.a11y && b.a11y && b.a11y.init(), b.emit("onInit", b);
            }),
            (b.cleanupStyles = function () {
              b.container.removeClass(b.classNames.join(" ")).removeAttr("style"), b.wrapper.removeAttr("style"), b.slides && b.slides.length && b.slides.removeClass([b.params.slideVisibleClass, b.params.slideActiveClass, b.params.slideNextClass, b.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), b.paginationContainer && b.paginationContainer.length && b.paginationContainer.removeClass(b.params.paginationHiddenClass), b.bullets && b.bullets.length && b.bullets.removeClass(b.params.bulletActiveClass), b.params.prevButton && t(b.params.prevButton).removeClass(b.params.buttonDisabledClass), b.params.nextButton && t(b.params.nextButton).removeClass(b.params.buttonDisabledClass), b.params.scrollbar && b.scrollbar && (b.scrollbar.track && b.scrollbar.track.length && b.scrollbar.track.removeAttr("style"), b.scrollbar.drag && b.scrollbar.drag.length && b.scrollbar.drag.removeAttr("style"));
            }),
            (b.destroy = function (e, t) {
              b.detachEvents(), b.stopAutoplay(), b.params.scrollbar && b.scrollbar && b.params.scrollbarDraggable && b.scrollbar.disableDraggable(), b.params.loop && b.destroyLoop(), t && b.cleanupStyles(), b.disconnectObservers(), b.params.keyboardControl && b.disableKeyboardControl && b.disableKeyboardControl(), b.params.mousewheelControl && b.disableMousewheelControl && b.disableMousewheelControl(), b.params.a11y && b.a11y && b.a11y.destroy(), b.emit("onDestroy"), !1 !== e && (b = null);
            }),
            b.init(),
            b
          );
        }
      };
    n.prototype = {
      isSafari: (function () {
        var e = navigator.userAgent.toLowerCase();
        return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
      })(),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
      isArray: function (e) {
        return "[object Array]" === Object.prototype.toString.apply(e);
      },
      browser: { ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled, ieTouch: (window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1) || (window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1) },
      device: (function () {
        var e = navigator.userAgent,
          t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
          i = e.match(/(iPad).*OS\s([\d_]+)/),
          n = e.match(/(iPod)(.*OS\s([\d_]+))?/),
          r = !i && e.match(/(iPhone\sOS)\s([\d_]+)/);
        return { ios: i || r || n, android: t };
      })(),
      support: {
        touch: (window.Modernizr && !0 === Modernizr.touch) || !!("ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch)),
        transforms3d:
          (window.Modernizr && !0 === Modernizr.csstransforms3d) ||
          (function () {
            var e = document.createElement("div").style;
            return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e;
          })(),
        flexbox: (function () {
          for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i++) if (t[i] in e) return !0;
        })(),
        observer: "MutationObserver" in window || "WebkitMutationObserver" in window,
      },
      plugins: {},
    };
    for (
      var r = (function () {
          var e = function (e) {
              var t = 0;
              for (t = 0; t < e.length; t++) this[t] = e[t];
              return (this.length = e.length), this;
            },
            t = function (t, i) {
              var n = [],
                r = 0;
              if (t && !i && t instanceof e) return t;
              if (t)
                if ("string" == typeof t) {
                  var a,
                    s,
                    o = t.trim();
                  if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                    var l = "div";
                    for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), (0 === o.indexOf("<td") || 0 === o.indexOf("<th")) && (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), (s = document.createElement(l)).innerHTML = t, r = 0; r < s.childNodes.length; r++) n.push(s.childNodes[r]);
                  } else for (a = i || "#" !== t[0] || t.match(/[ .<>:~]/) ? (i || document).querySelectorAll(t) : [document.getElementById(t.split("#")[1])], r = 0; r < a.length; r++) a[r] && n.push(a[r]);
                } else if (t.nodeType || t === window || t === document) n.push(t);
                else if (t.length > 0 && t[0].nodeType) for (r = 0; r < t.length; r++) n.push(t[r]);
              return new e(n);
            };
          return (
            (e.prototype = {
              addClass: function (e) {
                if (void 0 === e) return this;
                for (var t = e.split(" "), i = 0; i < t.length; i++) for (var n = 0; n < this.length; n++) this[n].classList.add(t[i]);
                return this;
              },
              removeClass: function (e) {
                for (var t = e.split(" "), i = 0; i < t.length; i++) for (var n = 0; n < this.length; n++) this[n].classList.remove(t[i]);
                return this;
              },
              hasClass: function (e) {
                return !!this[0] && this[0].classList.contains(e);
              },
              toggleClass: function (e) {
                for (var t = e.split(" "), i = 0; i < t.length; i++) for (var n = 0; n < this.length; n++) this[n].classList.toggle(t[i]);
                return this;
              },
              attr: function (e, t) {
                if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                for (var i = 0; i < this.length; i++)
                  if (2 === arguments.length) this[i].setAttribute(e, t);
                  else for (var n in e) (this[i][n] = e[n]), this[i].setAttribute(n, e[n]);
                return this;
              },
              removeAttr: function (e) {
                for (var t = 0; t < this.length; t++) this[t].removeAttribute(e);
                return this;
              },
              data: function (e, t) {
                if (void 0 !== t) {
                  for (var i = 0; i < this.length; i++) {
                    var n = this[i];
                    n.dom7ElementDataStorage || (n.dom7ElementDataStorage = {}), (n.dom7ElementDataStorage[e] = t);
                  }
                  return this;
                }
                if (this[0]) return this[0].getAttribute("data-" + e) || (this[0].dom7ElementDataStorage && (e in this[0].dom7ElementDataStorage) ? this[0].dom7ElementDataStorage[e] : void 0);
              },
              transform: function (e) {
                for (var t = 0; t < this.length; t++) {
                  var i = this[t].style;
                  i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = e;
                }
                return this;
              },
              transition: function (e) {
                "string" != typeof e && (e += "ms");
                for (var t = 0; t < this.length; t++) {
                  var i = this[t].style;
                  i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = e;
                }
                return this;
              },
              on: function (e, i, n, r) {
                function a(e) {
                  var r = e.target;
                  if (t(r).is(i)) n.call(r, e);
                  else for (var a = t(r).parents(), s = 0; s < a.length; s++) t(a[s]).is(i) && n.call(a[s], e);
                }
                var s,
                  o,
                  l = e.split(" ");
                for (s = 0; s < this.length; s++)
                  if ("function" == typeof i || !1 === i) for ("function" == typeof i && ((n = arguments[1]), (r = arguments[2] || !1)), o = 0; o < l.length; o++) this[s].addEventListener(l[o], n, r);
                  else for (o = 0; o < l.length; o++) this[s].dom7LiveListeners || (this[s].dom7LiveListeners = []), this[s].dom7LiveListeners.push({ listener: n, liveListener: a }), this[s].addEventListener(l[o], a, r);
                return this;
              },
              off: function (e, t, i, n) {
                for (var r = e.split(" "), a = 0; a < r.length; a++)
                  for (var s = 0; s < this.length; s++)
                    if ("function" == typeof t || !1 === t) "function" == typeof t && ((i = arguments[1]), (n = arguments[2] || !1)), this[s].removeEventListener(r[a], i, n);
                    else if (this[s].dom7LiveListeners) for (var o = 0; o < this[s].dom7LiveListeners.length; o++) this[s].dom7LiveListeners[o].listener === i && this[s].removeEventListener(r[a], this[s].dom7LiveListeners[o].liveListener, n);
                return this;
              },
              once: function (e, t, i, n) {
                function r(s) {
                  i(s), a.off(e, t, r, n);
                }
                var a = this;
                "function" == typeof t && ((t = !1), (i = arguments[1]), (n = arguments[2])), a.on(e, t, r, n);
              },
              trigger: function (e, t) {
                for (var i = 0; i < this.length; i++) {
                  var n;
                  try {
                    n = new window.CustomEvent(e, { detail: t, bubbles: !0, cancelable: !0 });
                  } catch (a) {
                    (n = document.createEvent("Event")).initEvent(e, !0, !0), (n.detail = t);
                  }
                  this[i].dispatchEvent(n);
                }
                return this;
              },
              transitionEnd: function (e) {
                function t(a) {
                  if (a.target === this) for (e.call(this, a), i = 0; i < n.length; i++) r.off(n[i], t);
                }
                var i,
                  n = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                  r = this;
                if (e) for (i = 0; i < n.length; i++) r.on(n[i], t);
                return this;
              },
              width: function () {
                return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null;
              },
              outerWidth: function (e) {
                return this.length > 0 ? (e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth) : null;
              },
              height: function () {
                return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null;
              },
              outerHeight: function (e) {
                return this.length > 0 ? (e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight) : null;
              },
              offset: function () {
                if (this.length > 0) {
                  var e = this[0],
                    t = e.getBoundingClientRect(),
                    i = document.body,
                    n = window.pageYOffset || e.scrollTop,
                    r = window.pageXOffset || e.scrollLeft;
                  return { top: t.top + n - (e.clientTop || i.clientTop || 0), left: t.left + r - (e.clientLeft || i.clientLeft || 0) };
                }
                return null;
              },
              css: function (e, t) {
                var i;
                if (1 === arguments.length) {
                  if ("string" != typeof e) {
                    for (i = 0; i < this.length; i++) for (var n in e) this[i].style[n] = e[n];
                    return this;
                  }
                  if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e);
                }
                if (2 === arguments.length && "string" == typeof e) {
                  for (i = 0; i < this.length; i++) this[i].style[e] = t;
                  return this;
                }
                return this;
              },
              each: function (e) {
                for (var t = 0; t < this.length; t++) e.call(this[t], t, this[t]);
                return this;
              },
              html: function (e) {
                if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
                for (var t = 0; t < this.length; t++) this[t].innerHTML = e;
                return this;
              },
              text: function (e) {
                if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                for (var t = 0; t < this.length; t++) this[t].textContent = e;
                return this;
              },
              is: function (i) {
                if (!this[0]) return !1;
                var n, r;
                if ("string" == typeof i) {
                  var a = this[0];
                  if (a === document) return i === document;
                  if (a === window) return i === window;
                  if (a.matches) return a.matches(i);
                  if (a.webkitMatchesSelector) return a.webkitMatchesSelector(i);
                  if (a.mozMatchesSelector) return a.mozMatchesSelector(i);
                  if (a.msMatchesSelector) return a.msMatchesSelector(i);
                  for (n = t(i), r = 0; r < n.length; r++) if (n[r] === this[0]) return !0;
                  return !1;
                }
                if (i === document) return this[0] === document;
                if (i === window) return this[0] === window;
                if (i.nodeType || i instanceof e) {
                  for (n = i.nodeType ? [i] : i, r = 0; r < n.length; r++) if (n[r] === this[0]) return !0;
                  return !1;
                }
                return !1;
              },
              index: function () {
                if (this[0]) {
                  for (var e = this[0], t = 0; null !== (e = e.previousSibling); ) 1 === e.nodeType && t++;
                  return t;
                }
              },
              eq: function (t) {
                if (void 0 === t) return this;
                var i,
                  n = this.length;
                return new e(t > n - 1 ? [] : 0 > t ? (0 > (i = n + t) ? [] : [this[i]]) : [this[t]]);
              },
              append: function (t) {
                var i, n;
                for (i = 0; i < this.length; i++)
                  if ("string" == typeof t) {
                    var r = document.createElement("div");
                    for (r.innerHTML = t; r.firstChild; ) this[i].appendChild(r.firstChild);
                  } else if (t instanceof e) for (n = 0; n < t.length; n++) this[i].appendChild(t[n]);
                  else this[i].appendChild(t);
                return this;
              },
              prepend: function (t) {
                var i, n;
                for (i = 0; i < this.length; i++)
                  if ("string" == typeof t) {
                    var r = document.createElement("div");
                    for (r.innerHTML = t, n = r.childNodes.length - 1; n >= 0; n--) this[i].insertBefore(r.childNodes[n], this[i].childNodes[0]);
                  } else if (t instanceof e) for (n = 0; n < t.length; n++) this[i].insertBefore(t[n], this[i].childNodes[0]);
                  else this[i].insertBefore(t, this[i].childNodes[0]);
                return this;
              },
              insertBefore: function (e) {
                for (var i = t(e), n = 0; n < this.length; n++)
                  if (1 === i.length) i[0].parentNode.insertBefore(this[n], i[0]);
                  else if (i.length > 1) for (var r = 0; r < i.length; r++) i[r].parentNode.insertBefore(this[n].cloneNode(!0), i[r]);
              },
              insertAfter: function (e) {
                for (var i = t(e), n = 0; n < this.length; n++)
                  if (1 === i.length) i[0].parentNode.insertBefore(this[n], i[0].nextSibling);
                  else if (i.length > 1) for (var r = 0; r < i.length; r++) i[r].parentNode.insertBefore(this[n].cloneNode(!0), i[r].nextSibling);
              },
              next: function (i) {
                return new e(this.length > 0 ? (i ? (this[0].nextElementSibling && t(this[0].nextElementSibling).is(i) ? [this[0].nextElementSibling] : []) : this[0].nextElementSibling ? [this[0].nextElementSibling] : []) : []);
              },
              nextAll: function (i) {
                var n = [],
                  r = this[0];
                if (!r) return new e([]);
                for (; r.nextElementSibling; ) {
                  var a = r.nextElementSibling;
                  i ? t(a).is(i) && n.push(a) : n.push(a), (r = a);
                }
                return new e(n);
              },
              prev: function (i) {
                return new e(this.length > 0 ? (i ? (this[0].previousElementSibling && t(this[0].previousElementSibling).is(i) ? [this[0].previousElementSibling] : []) : this[0].previousElementSibling ? [this[0].previousElementSibling] : []) : []);
              },
              prevAll: function (i) {
                var n = [],
                  r = this[0];
                if (!r) return new e([]);
                for (; r.previousElementSibling; ) {
                  var a = r.previousElementSibling;
                  i ? t(a).is(i) && n.push(a) : n.push(a), (r = a);
                }
                return new e(n);
              },
              parent: function (e) {
                for (var i = [], n = 0; n < this.length; n++) e ? t(this[n].parentNode).is(e) && i.push(this[n].parentNode) : i.push(this[n].parentNode);
                return t(t.unique(i));
              },
              parents: function (e) {
                for (var i = [], n = 0; n < this.length; n++) for (var r = this[n].parentNode; r; ) e ? t(r).is(e) && i.push(r) : i.push(r), (r = r.parentNode);
                return t(t.unique(i));
              },
              find: function (t) {
                for (var i = [], n = 0; n < this.length; n++) for (var r = this[n].querySelectorAll(t), a = 0; a < r.length; a++) i.push(r[a]);
                return new e(i);
              },
              children: function (i) {
                for (var n = [], r = 0; r < this.length; r++) for (var a = this[r].childNodes, s = 0; s < a.length; s++) i ? 1 === a[s].nodeType && t(a[s]).is(i) && n.push(a[s]) : 1 === a[s].nodeType && n.push(a[s]);
                return new e(t.unique(n));
              },
              remove: function () {
                for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this;
              },
              add: function () {
                var e,
                  i,
                  n = this;
                for (e = 0; e < arguments.length; e++) {
                  var r = t(arguments[e]);
                  for (i = 0; i < r.length; i++) (n[n.length] = r[i]), n.length++;
                }
                return n;
              },
            }),
            (t.fn = e.prototype),
            (t.unique = function (e) {
              for (var t = [], i = 0; i < e.length; i++) -1 === t.indexOf(e[i]) && t.push(e[i]);
              return t;
            }),
            t
          );
        })(),
        a = ["jQuery", "Zepto", "Dom7"],
        s = 0;
      s < a.length;
      s++
    )
      window[a[s]] && e(window[a[s]]);
    (i = void 0 === r ? window.Dom7 || window.Zepto || window.jQuery : r) &&
      ("transitionEnd" in i.fn ||
        (i.fn.transitionEnd = function (e) {
          function t(a) {
            if (a.target === this) for (e.call(this, a), i = 0; i < n.length; i++) r.off(n[i], t);
          }
          var i,
            n = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
            r = this;
          if (e) for (i = 0; i < n.length; i++) r.on(n[i], t);
          return this;
        }),
      "transform" in i.fn ||
        (i.fn.transform = function (e) {
          for (var t = 0; t < this.length; t++) {
            var i = this[t].style;
            i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = e;
          }
          return this;
        }),
      "transition" in i.fn ||
        (i.fn.transition = function (e) {
          "string" != typeof e && (e += "ms");
          for (var t = 0; t < this.length; t++) {
            var i = this[t].style;
            i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = e;
          }
          return this;
        })),
      (window.Swiper = n);
  })(),
  "undefined" != typeof module
    ? (module.exports = window.Swiper)
    : "function" == typeof define &&
      define.amd &&
      define([], function () {
        "use strict";
        return window.Swiper;
      }),
  (function () {
    "use strict";
    var e, t, i, n, r, a, s, o, l;
    void 0 !== document.createElement("div").style.transform ? ((e = ""), (t = ""), (i = "transform")) : window.opera && "[object Opera]" === Object.prototype.toString.call(window.opera) ? ((e = "-o-"), (t = "O"), (i = "OTransform")) : void 0 !== document.documentElement.style.MozTransform ? ((e = "-moz-"), (t = "Moz"), (i = "MozTransform")) : void 0 !== document.documentElement.style.webkitTransform ? ((e = "-webkit-"), (t = "webkit"), (i = "-webkit-transform")) : "string" == typeof navigator.cpuClass && ((e = "-ms-"), (t = "ms"), (i = "-ms-transform")), "pointerEnabled" in window.navigator ? ((n = !1), (o = window.navigator.pointerEnabled), (r = "setPointerCapture"), (a = "releasePointerCapture"), (s = "lostpointercapture"), (l = "touch")) : "msPointerEnabled" in window.navigator && ((n = !0), (o = window.navigator.msPointerEnabled), (r = "msSetPointerCapture"), (a = "msReleasePointerCapture"), (s = "MSLostPointerCapture"), (l = 2));
    var d = !1,
      u = !o,
      c = !1;
    "hasOwnProperty" in window && (c = !window.hasOwnProperty("ArrayBuffer"));
    var p = window.Selection && window.Selection.prototype.removeAllRanges;
    c || void 0 !== document.createElement("div").style[t + (t ? "P" : "p") + "erspective"] || (c = !0);
    var h = t + (t ? "T" : "t") + "ransform",
      f = t + (t ? "T" : "t") + "ransition",
      m = c ? "translate(" : "translate3d(",
      v = { x: "", y: "0," },
      g = { x: ",0" + (c ? ")" : ",0)"), y: c ? ")" : ",0)" },
      y = 0.998,
      w = 0.01;
    !(function () {
      var t,
        i = document.getElementsByTagName("head")[0] || document.documentElement,
        n = document.createElement("style");
      (n.type = "text/css"), (t = [".ftscroller_container { overflow: hidden; position: relative; max-height: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); -ms-touch-action: none }", ".ftscroller_hwaccelerated { " + (c ? e + "transform-style: preserve-3d;" : e + "transform: translateZ(0);") + " }", ".ftscroller_x, .ftscroller_y { position: relative; min-width: 100%; min-height: 100%; overflow: hidden }", ".ftscroller_x { display: inline-block }", ".ftscroller_scrollbar { pointer-events: none; position: absolute; width: 5px; height: 5px; border: 1px solid rgba(255, 255, 255, 0.3); -webkit-border-radius: 3px; border-radius: 6px; opacity: 0; " + e + "transition: opacity 350ms; z-index: 10; -webkit-box-sizing: content-box; -moz-box-sizing: content-box; box-sizing: content-box }", ".ftscroller_scrollbarx { bottom: 2px; left: 2px }", ".ftscroller_scrollbary { right: 2px; top: 2px }", ".ftscroller_scrollbarinner { height: 100%; background: #000; -webkit-border-radius: 2px; border-radius: 4px / 6px }", ".ftscroller_scrollbar.active { opacity: 0.5; " + e + "transition: none; -o-transition: all 0 none }"]), n.styleSheet ? (n.styleSheet.cssText = t.join("\n")) : n.appendChild(document.createTextNode(t.join("\n"))), i.insertBefore(n, i.firstChild);
    })(),
      ((FTScroller = function (c, b) {
        var x,
          _,
          T,
          S,
          C,
          E,
          M,
          P,
          k,
          z,
          A,
          O,
          D,
          L,
          I,
          N,
          R,
          B,
          F,
          $,
          H,
          X,
          j,
          Y,
          q,
          G,
          W,
          V,
          U,
          K,
          Z,
          Q,
          J,
          ee,
          te,
          ie,
          ne,
          re,
          ae,
          se,
          oe,
          le,
          de,
          ue,
          ce,
          pe,
          he,
          fe,
          me,
          ve,
          ge,
          ye,
          we,
          be,
          xe,
          _e,
          Te,
          Se,
          Ce,
          Ee,
          Me = { scrollbars: !0, scrollingX: !0, scrollingY: !0, scrollBoundary: 1, scrollResponseBoundary: 1, alwaysScroll: !1, contentWidth: void 0, contentHeight: void 0, snapping: !1, snapSizeX: void 0, snapSizeY: void 0, singlePageScrolls: !1, bouncing: !0, flinging: !0, updateOnChanges: !0, updateOnWindowResize: !1, baseAlignments: { x: -1, y: -1 }, windowScrollingActiveFlag: void 0, hwAccelerationClass: "ftscroller_hwaccelerated", enableRequestAnimationFrameSupport: !0, maxFlingDuration: 1e3, disabledInputMethods: { mouse: !1, touch: !1, scroll: !1, pointer: !1, focus: !1 }, scrollingClassName: void 0, flingBezier: new CubicBezier(0.103, 0.389, 0.307, 0.966), bounceDecelerationBezier: new CubicBezier(0, 0.5, 0.5, 1), bounceBezier: new CubicBezier(0.7, 0, 0.9, 0.6), invertScrollWheel: !0 },
          Pe = this,
          ke = c,
          ze = { x: null, y: null },
          Ae = { x: null, y: null },
          Oe = { container: { x: null, y: null }, content: { x: null, y: null, rawX: null, rawY: null }, scrollEnd: { x: null, y: null } },
          De = { x: !1, y: !1, userX: !1, userY: !1 },
          Le = { x: 0, y: 0 },
          Ie = { x: 0, y: 0 },
          Ne = { x: 0, y: 0 },
          Re = !1,
          Be = 0,
          Fe = !1,
          $e = !1,
          He = !1,
          Xe = !1,
          je = { x: 0, y: 0 },
          Ye = { x: 0, y: 0 },
          qe = { x: 0, y: 0 },
          Ge = { x: null, y: null },
          We = !1,
          Ve = [],
          Ue = !1,
          Ke = {},
          Ze = { x: !0, y: !0 },
          Qe = { x: 0, y: 0, t: 0 },
          Je = { x: 0, y: 0 },
          et = [],
          tt = !1,
          it = !1,
          nt = !1,
          rt = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || !1,
          at = window.cancelAnimationFrame || window.cancelRequestAnimationFrame || window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.msCancelAnimationFrame || window.msCancelRequestAnimationFrame || !1,
          st = { scrollstart: [], scroll: [], scrollend: [], segmentwillchange: [], segmentdidchange: [], reachedstart: [], reachedend: [], scrollinteractionend: [] };
        if ("object" == typeof FTScrollerOptions && FTScrollerOptions) for (x in FTScrollerOptions) FTScrollerOptions.hasOwnProperty(x) && Me.hasOwnProperty(x) && (Me[x] = FTScrollerOptions[x]);
        if (b) {
          for (x in b)
            if (b.hasOwnProperty(x)) {
              if ("paginatedSnap" === x) {
                console.warn('FTScroller: "paginatedSnap" is deprecated; converting to "singlePageScrolls"'), (Me.singlePageScrolls = b.paginatedSnap);
                continue;
              }
              Me.hasOwnProperty(x) && (Me[x] = b[x]);
            }
          b.hasOwnProperty("snapSizeX") && !isNaN(b.snapSizeX) && (De.userX = De.x = b.snapSizeX), b.hasOwnProperty("snapSizeY") && !isNaN(b.snapSizeY) && (De.userY = De.y = b.snapSizeY), b.contentWidth && b.contentHeight && (b.updateOnChanges = !1);
        }
        return (
          (Me.scrollResponseBoundary = Math.min(Me.scrollBoundary, Me.scrollResponseBoundary)),
          Me.scrollingX && (Ke.x = !0),
          Me.scrollingY && (Ke.y = !0),
          (at = (rt = Me.enableRequestAnimationFrameSupport && rt) && at),
          (_ = function (e) {
            var t, i;
            for (ae(), ne(), tt && (window.clearTimeout(tt), (tt = !1)), t = 0, i = Ve.length; t < i; t += 1) window.clearTimeout(Ve[t]);
            if (((Ve.length = 0), e && ke)) {
              for (; Ce.firstChild; ) ke.appendChild(Ce.firstChild);
              ke.removeChild(Se);
            }
            for (t in ((ke = null), (Se = null), (Ce = null), (ze.x = null), (ze.y = null), (Ae.x = null), (Ae.y = null), st)) st.hasOwnProperty(t) && (st[t].length = 0);
            d && d === Pe && ((d = !1), Me.windowScrollingActiveFlag && (window[Me.windowScrollingActiveFlag] = !1));
          }),
          (T = function (e, t) {
            (De.userX = e), (De.userY = t), (De.x = e), (De.y = t), (Oe.content.x = Math.ceil(Oe.content.rawX / e) * e), (Oe.content.y = Math.ceil(Oe.content.rawY / t) * t), (Oe.scrollEnd.x = Oe.container.x - Oe.content.x), (Oe.scrollEnd.y = Oe.container.y - Oe.content.y), q(), N(), W(!0);
          }),
          (S = function (e, t, i) {
            var n,
              r,
              a,
              s,
              o = 0,
              l = {};
            for (s in (O(Date.now()), (a = { x: -e, y: -t }), Ke))
              if (Ke.hasOwnProperty(s)) {
                if (!1 === (n = a[s])) continue;
                (n = Math.min(0, Math.max(Oe.scrollEnd[s], n))), Me.snapping && De[s] && (n = Math.round(n / De[s]) * De[s]), !0 === (r = i || 0) && (r = 20 * Math.sqrt(Math.abs(je[s] - n))), V(s, n, r), (l[s] = n), (o = Math.max(o, r));
              }
            (je.x === a.x && je.y === a.y) || ((Ue = !0), Z("scrollstart", U()), Z("scroll", U())),
              o
                ? Ve.push(
                    setTimeout(function () {
                      var e;
                      for (e in l) l.hasOwnProperty(e) && (Ye[e] = l[e]);
                      D();
                    }, o)
                  )
                : D();
          }),
          (C = function (e, t, i) {
            S(parseFloat(e) - je.x, parseFloat(t) - je.y, i);
          }),
          (E = function (e, t, i) {
            (b.contentWidth = e || b.contentWidth), (b.contentHeight = t || b.contentHeight), Y(!!i);
          }),
          (M = function (e, t) {
            return !!st.hasOwnProperty(e) && (st[e].push(t), !0);
          }),
          (P = function (e, t) {
            var i;
            if (!st.hasOwnProperty(e)) return !1;
            for (i = st[e].length; i >= 0; i -= 1) st[e][i] === t && st[e].splice(i, 1);
            return !0;
          }),
          (k = function (e) {
            var t, i;
            for (t in Me.disabledInputMethods) (e[t] = !!e[t]), Me.disabledInputMethods[t] !== e[t] && (i = !0), (Me.disabledInputMethods[t] = e[t]);
            i && se();
          }),
          (z = function (e, t, i, n) {
            var r = Xe;
            return i <= 0 && (i = Date.now()), !((Me.windowScrollingActiveFlag && window[Me.windowScrollingActiveFlag]) || (r ? L() : (We = !1), (Qe.x = e), (Qe.y = t), (Qe.t = i), (qe.x = Ye.x), (qe.y = Ye.y), (et.length = 0), et.push({ x: e, y: t, t: i }), r && A(e, t, i, n, r), 0));
          }),
          (A = function (e, t, i, n, r) {
            var a,
              s,
              o,
              l = !1,
              u = { x: e - Qe.x, y: t - Qe.y };
            if ((i <= 0 && (i = Date.now()), (qe.x = je.x + u.x), (qe.y = je.y + u.y), !$e && (((d && d !== Pe) || (Me.windowScrollingActiveFlag && window[Me.windowScrollingActiveFlag])) && (s = !0), s))) return xe(), (Re = !1), void (He && (ne(), N(!0) || D(!0)));
            if (He) n.preventDefault();
            else {
              if (((o = ee(qe)), !r && (!Ze.x || Math.abs(u.x) < Me.scrollResponseBoundary) && (!Ze.y || Math.abs(u.y) < Me.scrollResponseBoundary))) return;
              if (((Me.bouncing || r || (Ze.x && u.x && o.x < 0) || (Ze.y && u.y && o.y < 0)) && n.preventDefault(), !(Me.bouncing || r || (Ze.x && u.x && !(o.x > 0)) || (Ze.y && u.y && !(o.y > 0))))) return void (We = !0);
              te(), (He = !0), (Ue = !0), (Xe = !0), (l = !0);
            }
            if (($e || (((r && Me.snapping) || (Ze.x && Math.abs(u.x) >= Me.scrollBoundary) || (Ze.y && Math.abs(u.y) >= Me.scrollBoundary)) && (($e = !0), (We = !0), (d = Pe), Me.windowScrollingActiveFlag && (window[Me.windowScrollingActiveFlag] = Pe), Z("scrollstart", U()))), $e && be(), p && window.getSelection().removeAllRanges(), F(), l && (u.x > 0 ? (je.x -= Me.scrollResponseBoundary) : u.x < 0 && (je.x += Me.scrollResponseBoundary), u.y > 0 ? (je.y -= Me.scrollResponseBoundary) : u.y < 0 && (je.y += Me.scrollResponseBoundary), (qe.x = je.x + u.x), (qe.y = je.y + u.y), Me.scrollingClassName && (Se.className += " " + Me.scrollingClassName), Me.scrollbars))) for (a in Ze) Ze.hasOwnProperty(a) && (Ae[a].className += " active");
            et.push({ x: e, y: t, t: i }), et.length > 30 && et.splice(0, 15);
          }),
          (O = function (e, t) {
            return xe(), (Re = !1), ne(), Z("scrollinteractionend", {}), $e ? ((et[et.length - 1].t = e), ($e = !1), (He = !1), (d = !1), Me.windowScrollingActiveFlag && (window[Me.windowScrollingActiveFlag] = !1), t && t.preventDefault(), void (I() || N() || D())) : void (!N(!0) && He && D(!0));
          }),
          (D = function (e) {
            var t, i, n, r, a;
            if (((Xe = !1), (He = !1), Me.scrollingClassName && ((a = new RegExp("(?:^|\\s)" + Me.scrollingClassName + "(?!\\S)", "g")), (Se.className = Se.className.replace(a, ""))), Me.scrollbars)) for (n in Ze) Ze.hasOwnProperty(n) && (Ae[n].className = Ae[n].className.replace(/ ?active/g, ""));
            for (n in ((je.x = Ye.x), (je.y = Ye.y), (r = U()), e || (Z("scroll", r), W(!0)), (r.cancelled = e), Z("scrollend", r), Ze)) Ze.hasOwnProperty(n) && ((ze[n].style[f] = ""), Me.scrollbars && (Ae[n].style[f] = ""));
            for (t = 0, i = Ve.length; t < i; t += 1) window.clearTimeout(Ve[t]);
            Ve.length = 0;
          }),
          (L = function () {
            var e, t, i;
            for (e in ((Xe = !1), G(), Ze)) Ze.hasOwnProperty(e) && V(e, je[e], 16, Me.bounceDecelerationBezier);
            for (W(!1), t = 0, i = Ve.length; t < i; t += 1) window.clearTimeout(Ve[t]);
            Ve.length = 0;
          }),
          (I = function () {
            var e,
              t,
              i,
              n,
              r,
              a,
              s,
              o,
              l,
              d,
              u,
              c,
              p,
              h,
              f,
              m,
              v,
              g,
              b,
              x,
              _,
              T = 0,
              S = !1,
              C = {};
            if (1 === et.length || !Me.flinging || "scrollwheel" === Re) return !1;
            for (t in Ze)
              if (Ze.hasOwnProperty(t)) {
                for (c = 350, u = 0, h = !1, p = !1, g = void 0, m = Me.flingBezier, r = et[et.length - 1], a = et[et.length - 2], e = et.length - 3; e >= 0 && !(r.t - et[e].t > 100); e -= 1) a = et[e];
                if (((i = r.t - a.t) || (i = 16), (n = (r[t] - a[t]) / i), Math.abs(n) < w ? ((s = 0), (o = 0)) : ((s = Math.log(w / Math.abs(n)) / Math.log(y)), (o = (n * (1 - Math.pow(y, s + 1))) / (1 - y))), (l = Math.floor(Ye[t] + o)), Me.bouncing || (0 === Ye[t] && l > 0 ? (l = 0) : Ye[t] === Oe.scrollEnd[t] && l < Ye[t] && (l = Ye[t])), Me.singlePageScrolls && Me.snapping ? ((b = Ie[t] < (b = -Ye[t] / De[t]) ? Math.floor(b) : Math.ceil(b)), l > -(Ie[t] - 1) * De[t] ? (u = l + (Ie[t] - 1) * De[t]) : l < -(Ie[t] + 1) * De[t] ? (u = l + (Ie[t] + 1) * De[t]) : Math.abs(n) > w && ((l = n < 0 ? Math.floor(Ye[t] / De[t]) * De[t] : Math.ceil(Ye[t] / De[t]) * De[t]), (s = Math.min(Me.maxFlingDuration, (s * (l - Ye[t])) / o)))) : Me.snapping && (u = l - Math.round(l / De[t]) * De[t]), l - u > 0 ? ((u = l), (h = !0)) : l - u < Oe.scrollEnd[t] && ((u = l - Oe.scrollEnd[t]), (h = !0)), u && (h && Me.bouncing && o ? ((_ = (o = Math.floor(o)) - (x = l > 0 ? l - Math.max(0, Ye[t]) : l - Math.min(Oe.scrollEnd[t], Ye[t]))), o && s ? (g = (v = m._getCoordinateForT(m.getTForY((o - x) / o, 1 / s), m._p1.x, m._p2.x)) * s) : (v = 0), (f = Math.ceil(x / 8)), Math.abs(f) > Oe.container[t] / 2 && (f = f < 0 ? -Math.floor(Oe.container[t] / 2) : Math.floor(Oe.container[t] / 2)), (p = l > 0 ? 0 : Oe.scrollEnd[t]), 0 === v ? ((l = Ye[t] + _ + f), (d = s /= 6)) : ((d = (v + (1 - v) / 6) * s), K(t, Ye[t] + _ + f, ((1 - v) * s) / 6, Me.bounceDecelerationBezier, g), (m = m.divideAtX(d / s, 1 / s)[0]), (s = d), (l = Ye[t] + _ + f))) : (o < 0 && u < o) || (o > 0 && u > o) ? ((l -= Math.floor(o / 2)), (u -= Math.floor(o / 2)), (c = 50 * Math.sqrt(Math.abs(u))), (p = l - u), (d = 0.97 * (s = 350))) : ((l -= u), o ? ((o < 0 && u < 0) || (o > 0 && u > 0)) && ((v = m._getCoordinateForT(m.getTForY((Math.abs(o) - Math.abs(u)) / Math.abs(o), 1 / s), m._p1.x, m._p2.x)), (m = m.divideAtX(v, 1 / s)[0]), (s = Math.round(s * v))) : (s = c), (u = 0), (c = 0))), l === Ye[t] && !u)) continue;
                (S = !0), V(t, l, s, m, g), u && c && K(t, p, c, Me.bounceBezier, d), (T = Math.max(T, u ? d + c : s)), (C[t] = !1 === p ? l : p);
              }
            return (
              S &&
                T &&
                Ve.push(
                  setTimeout(function () {
                    var e;
                    for (e in C) C.hasOwnProperty(e) && (Ye[e] = C[e]);
                    D();
                  }, T)
                ),
              S
            );
          }),
          (N = function (e) {
            var t,
              i = e ? 100 : 350,
              n = Ye;
            Me.snapping && ((Le = B(n)), (n = R(Le, n))), (n = $(n));
            var r = !1;
            for (t in Ke) Ke.hasOwnProperty(t) && n[t] !== Ye[t] && (r = !0);
            if (!r) return !1;
            for (t in Ke) Ke.hasOwnProperty(t) && V(t, n[t], i);
            return (
              Ve.push(
                setTimeout(function () {
                  (Ye = n), D(e);
                }, i)
              ),
              !0
            );
          }),
          (B = function (e) {
            var t,
              i = { x: 0, y: 0 };
            for (t in Ze) Ze.hasOwnProperty(t) && De[t] && (i[t] = Math.round(e[t] / De[t]));
            return i;
          }),
          (R = function (e, t) {
            var i,
              n = { x: t.x, y: t.y };
            for (i in Ze) Ze.hasOwnProperty(i) && (n[i] = e[i] * De[i]);
            return n;
          }),
          (F = function () {
            var e, t, i;
            for (e in Ze) Ze.hasOwnProperty(e) && ((t = 0), (i = Oe.scrollEnd[e]), Me.singlePageScrolls && Me.snapping && ((t = Math.min(t, -(Ie[e] - 1) * De[e])), (i = Math.max(i, -(Ie[e] + 1) * De[e]))), qe[e] > t ? (qe[e] = t + J(qe[e] - t, e)) : qe[e] < i && (qe[e] = i + J(qe[e] - i, e)));
            rt || ie();
          }),
          ($ = function (e) {
            var t,
              i = { x: e.x, y: e.y };
            for (t in Ze)
              if (Ze.hasOwnProperty(t)) {
                if (e[t] > 0) {
                  i[t] = 0;
                  continue;
                }
                if (e[t] < Oe.scrollEnd[t]) {
                  i[t] = Oe.scrollEnd[t];
                  continue;
                }
              }
            return i;
          }),
          (H = function () {
            var e, t, i;
            if (!X()) {
              for (e = ke.ownerDocument.createDocumentFragment(), t = document.createElement("DIV"), e.appendChild(t), t.innerHTML = FTScroller.prototype.getPrependedHTML(!Me.scrollingX, !Me.scrollingY, Me.hwAccelerationClass) + FTScroller.prototype.getAppendedHTML(!Me.scrollingX, !Me.scrollingY, Me.hwAccelerationClass, Me.scrollbars), i = Se = t.firstElementChild, Me.scrollingX && ((ze.x = Se.firstElementChild), (i = ze.x), Me.scrollbars && (Ae.x = Se.getElementsByClassName("ftscroller_scrollbarx")[0])), Me.scrollingY ? ((ze.y = i.firstElementChild), Me.scrollbars && (Ae.y = Se.getElementsByClassName("ftscroller_scrollbary")[0]), (Ce = ze.y)) : (Ce = ze.x); ke.firstChild; ) Ce.appendChild(ke.firstChild);
              ke.appendChild(Se);
            }
          }),
          (X = function () {
            var e, t, i, n, r, a, s, o, l;
            if ((e = ke.firstElementChild) && -1 !== e.className.indexOf("ftscroller_container")) {
              if (Me.scrollingX) {
                if (!(t = e.firstElementChild) || -1 === t.className.indexOf("ftscroller_x")) return;
                if (((n = t), Me.scrollbars)) {
                  if ((s = e.getElementsByClassName("ftscroller_scrollbarx")))
                    for (o = 0, l = s.length; o < l; o += 1)
                      if (s[o].parentNode === e) {
                        r = s[o];
                        break;
                      }
                  if (!r) return;
                }
              } else n = e;
              if (Me.scrollingY) {
                if (!(i = n.firstElementChild) || -1 === i.className.indexOf("ftscroller_y")) return;
                if (Me.scrollbars) {
                  if ((s = e.getElementsByClassName("ftscroller_scrollbary")))
                    for (o = 0, l = s.length; o < l; o += 1)
                      if (s[o].parentNode === e) {
                        a = s[o];
                        break;
                      }
                  if (!a) return;
                }
              }
              return (Se = e), t && (ze.x = t), i && (ze.y = i), r && (Ae.x = r), a && (Ae.y = a), (Ce = Me.scrollingY ? i : t), !0;
            }
          }),
          (j = function (e) {
            tt && window.clearTimeout(tt),
              e && "resize" === e.type
                ? Y()
                : (tt = setTimeout(function () {
                    Y();
                  }, 100));
          }),
          (Y = function (e) {
            var t, i, n, r;
            if (!Se || !Ce) return !1;
            for (t in (tt && (window.clearTimeout(tt), (tt = !1)), (r = { x: !1, y: !1 }))) r.hasOwnProperty(t) && (0 === Ye[t] ? (r[t] = -1) : Ye[t] <= Oe.scrollEnd[t] ? (r[t] = 1) : 2 * Ye[t] <= Oe.scrollEnd[t] + 5 && 2 * Ye[t] >= Oe.scrollEnd[t] - 5 && (r[t] = 0));
            (i = Se.offsetWidth), (n = Se.offsetHeight);
            var a = b.contentWidth || Ce.offsetWidth,
              s = b.contentHeight || Ce.offsetHeight,
              o = a,
              l = s,
              d = { x: Ye.x, y: Ye.y };
            if ((De.userX || (De.x = i), De.userY || (De.y = n), Me.snapping && ((o = De.userX ? Math.ceil(o / De.userX) * De.userX : Math.ceil(o / De.x) * De.x), (l = De.userY ? Math.ceil(l / De.userY) * De.userY : Math.ceil(l / De.y) * De.y)), Oe.container.x !== i || Oe.container.y !== n || Oe.content.x !== o || Oe.content.y !== l))
              if (((Oe.container.x = i), (Oe.container.y = n), (Oe.content.x = o), (Oe.content.rawX = a), (Oe.content.y = l), (Oe.content.rawY = s), (Oe.scrollEnd.x = i - o), (Oe.scrollEnd.y = n - l), q(), $e)) Ye.x--, Ye.y--, F();
              else {
                for (t in (!e && Me.snapping && (W(), (d = R(Le, Ye))), d))
                  if (d.hasOwnProperty(t)) {
                    if (Oe.container[t] < Oe.content[t] && Ue && Me.baseAlignments[t] !== r[t]) continue;
                    1 === Me.baseAlignments[t] ? (d[t] = Oe.scrollEnd[t]) : 0 === Me.baseAlignments[t] ? (d[t] = Math.floor(Oe.scrollEnd[t] / 2)) : -1 === Me.baseAlignments[t] && (d[t] = 0);
                  }
                (d = $(d)), Me.scrollingX && d.x !== Ye.x && (V("x", d.x, 0), (je.x = d.x)), Me.scrollingY && d.y !== Ye.y && (V("y", d.y, 0), (je.y = d.y));
              }
          }),
          (q = function () {
            Me.scrollbars && (Me.scrollingX && (Ae.x.style.width = Math.max(6, Math.round(Oe.container.x * (Oe.container.x / Oe.content.x) - 4)) + "px"), Me.scrollingY && (Ae.y.style.height = Math.max(6, Math.round(Oe.container.y * (Oe.container.y / Oe.content.y) - 4)) + "px")), (Ze = {}), Me.scrollingX && (Oe.content.x > Oe.container.x || Me.alwaysScroll) && (Ze.x = !0), Me.scrollingY && (Oe.content.y > Oe.container.y || Me.alwaysScroll) && (Ze.y = !0);
          }),
          (G = function () {
            var e, t;
            for (e in Ze) Ze.hasOwnProperty(e) && ((t = window.getComputedStyle(ze[e], null)[i].split(", ")), (je[e] = 6 === t.length ? parseInt(t["y" === e ? 5 : 4], 10) : parseInt(t["y" === e ? 13 : 12], 10)), (Ye[e] = je[e]));
          }),
          (W = function (e) {
            var t,
              i = { x: 0, y: 0 };
            if (Me.snapping) {
              for (t in Ze) Ze.hasOwnProperty(t) && (i[t] = Math.max(0, Math.min(Math.ceil(Oe.content[t] / De[t]) - 1, Math.round(-Ye[t] / De[t]))));
              (i.x === Ne.x && i.y === Ne.y) || ((Ne.x = i.x), (Ne.y = i.y), Z("segmentwillchange", { segmentX: i.x, segmentY: i.y })), e && ((i.x === Ie.x && i.y === Ie.y) || ((Ie.x = i.x), (Ie.y = i.y), Z("segmentdidchange", { segmentX: i.x, segmentY: i.y })));
            }
          }),
          (V = function (t, i, n, r, a) {
            var s,
              o = null;
            return (
              !!ze[t] &&
              (n ? (r || (r = Me.flingBezier), (s = e + "transform " + n + "ms " + r.toString())) : (s = ""),
              (ze[t].style[f] = s),
              Me.scrollbars && (Ae[t].style[f] = s),
              (ze[t].style[h] = m + v[t] + i + "px" + g[t]),
              Me.scrollbars && (Ae[t].style[h] = m + v[t] + (-i * Oe.container[t]) / Oe.content[t] + "px" + g[t]),
              i >= 0 ? (o = "start") : i <= Oe.scrollEnd[t] && (o = "end"),
              o !== Ge[t] &&
                (null !== o &&
                  (n
                    ? Ve.push(
                        setTimeout(function () {
                          Z("reached" + o, { axis: t });
                        }, a || n)
                      )
                    : Z("reached" + o, { axis: t })),
                (Ge[t] = o)),
              void (n || (Ye[t] = i)))
            );
          }),
          (U = function () {
            return { scrollLeft: -Ye.x, scrollTop: -Ye.y };
          }),
          (K = function (e, t, i, n, r) {
            Ve.push(
              setTimeout(function () {
                V(e, t, i, n);
              }, r)
            );
          }),
          (Z = function (e, t) {
            var i, n;
            for (t.srcObject = Te, i = 0, n = st[e].length; i < n; i += 1)
              try {
                st[e][i](t);
              } catch (t) {
                window.console && window.console.error && (t.message ? window.console.error(t.message + " (" + t.sourceURL + ", line " + t.line + ")") : (window.console.error("Error encountered executing FTScroller event listener callback for [" + e + ']. Add a "debugger" statement here to obtain a full backtrace.'), window.console.dir && window.console.dir(t)));
              }
          }),
          (Q = function (e) {
            var t,
              i,
              n = _e(e.target),
              r = _e(Se),
              a = { x: "left", y: "top" },
              s = { x: "right", y: "bottom" },
              o = { x: "width", y: "height" };
            if (!1 === Re) {
              for (i in Ze)
                if (Ze.hasOwnProperty(i)) {
                  if (n[a[i]] >= r[a[i]] && n[s[i]] <= r[s[i]]) continue;
                  if (n[o[i]] > r[o[i]] && n[o[i]] - Math.max(0, r[a[i]] - n[a[i]]) - Math.max(0, n[s[i]] - r[s[i]]) >= r[o[i]] / 2) continue;
                  (t = -Math.round(n[o[i]] / 2 - Ye[i] + n[a[i]] - r[a[i]] - r[o[i]] / 2)), (t = Math.min(0, Math.max(Oe.scrollEnd[i], t))), V(i, t, 0), (je[i] = t);
                }
              Z("scroll", U());
            }
          }),
          (J = function (e, t) {
            if (!Me.bouncing) return 0;
            var i = Math.exp(e / Oe.container[t]);
            return Math.round((0.6 * Oe.container[t] * (i - 1)) / (i + 1));
          }),
          (ee = function (e) {
            var t,
              i,
              n = {};
            for (t in e) e.hasOwnProperty(t) && (n[t] = (i = e[t]) >= 0 ? i : i > Oe.scrollEnd[t] ? -1 : Oe.scrollEnd[t] - i);
            return n;
          }),
          (te = function () {
            rt && (ne(), (nt = rt(ie)));
          }),
          (ie = function e() {
            var t, i;
            for (t in (rt && (nt = rt(e)), Ze)) Ze.hasOwnProperty(t) && qe[t] !== Ye[t] && (V(t, qe[t]), (i = !0));
            $e && i && (Z("scroll", U()), W(!1));
          }),
          (ne = function () {
            !1 !== nt && at && (at(nt), (nt = !1));
          }),
          (se = function () {
            ae(), re();
          }),
          (re = function () {
            var e;
            Se &&
              (o && !Me.disabledInputMethods.pointer ? (n ? (Se.addEventListener("MSPointerDown", he), Se.addEventListener("MSPointerMove", fe), Se.addEventListener("MSPointerUp", me), Se.addEventListener("MSPointerCancel", ve)) : (Se.addEventListener("pointerdown", he), Se.addEventListener("pointermove", fe), Se.addEventListener("pointerup", me), Se.addEventListener("pointercancel", ve))) : (u && !Me.disabledInputMethods.touch && (Se.addEventListener("touchstart", oe), Se.addEventListener("touchmove", le), Se.addEventListener("touchend", de), Se.addEventListener("touchcancel", de)), Me.disabledInputMethods.mouse || Se.addEventListener("mousedown", ue)),
              Me.disabledInputMethods.scroll || (Se.addEventListener("DOMMouseScroll", we), Se.addEventListener("mousewheel", we)),
              (Me.disabledInputMethods.mouse && Me.disabledInputMethods.touch && Me.disabledInputMethods.pointer) || (o ? document.addEventListener("click", ye, !0) : Se.addEventListener("click", ye, !0)),
              Me.disabledInputMethods.focus || Ce.addEventListener("focus", Q),
              Me.updateOnChanges &&
                (Ee || ((e = window.MutationObserver || window.WebKitMutationObserver || window[t + "MutationObserver"]) && (Ee = new e(j))),
                Ee
                  ? Ee.observe(Ce, { childList: !0, characterData: !0, subtree: !0 })
                  : Ce.addEventListener(
                      "DOMSubtreeModified",
                      function (e) {
                        (!e || (e.srcElement !== Ce && -1 === e.srcElement.className.indexOf("ftscroller_"))) && j();
                      },
                      !0
                    ),
                Ce.addEventListener("load", j)),
              Me.updateOnWindowResize && window.addEventListener("resize", j));
          }),
          (ae = function () {
            Se && (Se.removeEventListener("MSPointerDown", he), Se.removeEventListener("MSPointerMove", fe), Se.removeEventListener("MSPointerUp", me), Se.removeEventListener("MSPointerCancel", ve), Se.removeEventListener("pointerdown", he), Se.removeEventListener("pointermove", fe), Se.removeEventListener("pointerup", me), Se.removeEventListener("pointercancel", ve), Se.removeEventListener("touchstart", oe), Se.removeEventListener("touchmove", le), Se.removeEventListener("touchend", de), Se.removeEventListener("touchcancel", de), Se.removeEventListener("mousedown", ue), Se.removeEventListener("DOMMouseScroll", we), Se.removeEventListener("mousewheel", we), Se.removeEventListener("click", ye, !0)), Ce && (Ce.removeEventListener("focus", Q), Ce.removeEventListener("DOMSubtreeModified", j), Ce.removeEventListener("load", j)), Ee && Ee.disconnect(), document.removeEventListener("mousemove", ce), document.removeEventListener("mouseup", pe), document.removeEventListener("click", ye, !0), window.removeEventListener("resize", j);
          }),
          (oe = function (e) {
            var t, i, n;
            if (Re) for (t = 0, i = e.touches.length; t < i; t += 1) e.touches[t].identifier === Re && (Be = t);
            else (Re = (n = e.touches[0]).identifier), (Be = 0), z(n.clientX, n.clientY, e.timeStamp, e);
          }),
          (le = function (e) {
            if (!1 !== Re) {
              var t = e.touches[Be];
              A(t.clientX, t.clientY, e.timeStamp, e);
            }
          }),
          (de = function (e) {
            var t, i;
            if (e.touches) for (t = 0, i = e.touches.length; t < i; t += 1) if (e.touches[t].identifier === Re) return void (Be = t);
            O(e.timeStamp, e);
          }),
          (ue = function (e) {
            (e.button && 2 === e.button) || e.ctrlKey || (Se.setCapture && Se.setCapture(), document.addEventListener("mousemove", ce, !0), document.addEventListener("mouseup", pe, !0), (Re = e.button || 1), (Be = 0), z(e.clientX, e.clientY, e.timeStamp, e));
          }),
          (ce = function (e) {
            Re && A(e.clientX, e.clientY, e.timeStamp, e);
          }),
          (pe = function e(t) {
            (t.button && t.button !== Re) || (document.removeEventListener("mousemove", ce, !0), document.removeEventListener("mouseup", e, !0), Se.releaseCapture && Se.releaseCapture(), O(t.timeStamp, t));
          }),
          (he = function (e) {
            if (!Re || e.isPrimary) {
              if (e.pointerType === l) {
                if (Me.disabledInputMethods.touch) return;
              } else if (Me.disabledInputMethods.mouse) return;
              (Re = e.pointerId), z(e.clientX, e.clientY, e.timeStamp, e);
            }
          }),
          (fe = function (e) {
            Re === e.pointerId && A(e.clientX, e.clientY, e.timeStamp, e);
          }),
          (me = function (e) {
            Re === e.pointerId && O(e.timeStamp, e);
          }),
          (ve = function (e) {
            O(e.timeStamp, e);
          }),
          (ge = function (e) {
            Fe = !1;
          }),
          (ye = function (e) {
            return !We || (e.preventDefault(), e.stopPropagation(), Re || (We = !1), !1);
          }),
          (we = function (e) {
            var t, i;
            if ("scrollwheel" !== Re) {
              if (!1 !== Re) return !0;
              if (((Re = "scrollwheel"), (Je.x = 0), (Je.y = 0), !z(e.clientX, e.clientY, Date.now(), e))) return;
            }
            e.wheelDelta ? (e.wheelDeltaX ? ((t = e.wheelDeltaX / 2), (i = e.wheelDeltaY / 2)) : ((t = 0), (i = e.wheelDelta / 2))) : e.axis && e.axis === e.HORIZONTAL_AXIS ? ((t = -10 * e.detail), (i = 0)) : ((t = 0), (i = -10 * e.detail)),
              (!Me.invertScrollWheel && ((Me.scrollingX && !Me.scrollingY && Math.abs(t) < Math.abs(i)) || (!Me.scrollingX && Me.scrollingY && Math.abs(t) > Math.abs(i)))) ||
                (!Me.invertScrollWheel || Me.scrollingY || t || ((t = i), (i = 0)),
                (Je.x = Math.round(Je.x + t)),
                (Je.y = Math.round(Je.y + i)),
                A(Qe.x + Je.x, Qe.y + Je.y, e.timeStamp, e),
                it && clearTimeout(it),
                (it = setTimeout(function () {
                  xe(), (Re = !1), ($e = !1), (We = !1), (He = !1), (d = !1), Me.windowScrollingActiveFlag && (window[Me.windowScrollingActiveFlag] = !1), ne(), N() || D();
                }, 300)));
          }),
          (be = function () {
            Fe || !1 === Re || "scrollwheel" === Re || (o && (Se[r](Re), Se.addEventListener(s, ge, !1)), (Fe = !0));
          }),
          (xe = function () {
            Fe && (o && (Se.removeEventListener(s, ge, !1), Se[a](Re)), (Fe = !1));
          }),
          (_e = function (e) {
            if (e.getBoundingClientRect) return e.getBoundingClientRect();
            for (var t = 0, i = 0, n = e; n; ) (t = t + n.offsetLeft - n.scrollLeft), (i = i + n.offsetTop - n.scrollTop), (n = n.offsetParent);
            return { left: t, top: i, width: e.offsetWidth, height: e.offsetHeight };
          }),
          H(),
          Y(),
          re(),
          (Te = { destroy: _, setSnapSize: T, scrollTo: S, scrollBy: C, updateDimensions: E, addEventListener: M, removeEventListener: P, setDisabledInputMethods: k }),
          Object.defineProperties &&
            Object.defineProperties(Te, {
              scrollHeight: {
                get: function () {
                  return Oe.content.y;
                },
                set: function (e) {
                  throw new SyntaxError("scrollHeight is currently read-only - ignoring " + e);
                },
              },
              scrollLeft: {
                get: function () {
                  return -Ye.x;
                },
                set: function (e) {
                  return S(e, !1, !1), -Ye.x;
                },
              },
              scrollTop: {
                get: function () {
                  return -Ye.y;
                },
                set: function (e) {
                  return S(!1, e, !1), -Ye.y;
                },
              },
              scrollWidth: {
                get: function () {
                  return Oe.content.x;
                },
                set: function (e) {
                  throw new SyntaxError("scrollWidth is currently read-only - ignoring " + e);
                },
              },
              segmentCount: {
                get: function () {
                  return Me.snapping ? { x: Math.ceil(Oe.content.x / De.x), y: Math.ceil(Oe.content.y / De.y) } : { x: NaN, y: NaN };
                },
                set: function (e) {
                  throw new SyntaxError("segmentCount is currently read-only - ignoring " + e);
                },
              },
              currentSegment: {
                get: function () {
                  return { x: Ne.x, y: Ne.y };
                },
                set: function (e) {
                  throw new SyntaxError("currentSegment is currently read-only - ignoring " + e);
                },
              },
              contentContainerNode: {
                get: function () {
                  return Ce;
                },
                set: function (e) {
                  throw new SyntaxError("contentContainerNode is currently read-only - ignoring " + e);
                },
              },
            }),
          Te
        );
      }).prototype.getPrependedHTML = function (e, t, i) {
        i || (i = "object" == typeof FTScrollerOptions && FTScrollerOptions.hwAccelerationClass ? FTScrollerOptions.hwAccelerationClass : "ftscroller_hwaccelerated");
        var n = '<div class="ftscroller_container">';
        return e || (n += '<div class="ftscroller_x ' + i + '">'), t || (n += '<div class="ftscroller_y ' + i + '">'), n;
      }),
      (FTScroller.prototype.getAppendedHTML = function (e, t, i, n) {
        i || (i = "object" == typeof FTScrollerOptions && FTScrollerOptions.hwAccelerationClass ? FTScrollerOptions.hwAccelerationClass : "ftscroller_hwaccelerated");
        var r = "";
        return e || (r += "</div>"), t || (r += "</div>"), n && (e || (r += '<div class="ftscroller_scrollbar ftscroller_scrollbarx ' + i + '"><div class="ftscroller_scrollbarinner"></div></div>'), t || (r += '<div class="ftscroller_scrollbar ftscroller_scrollbary ' + i + '"><div class="ftscroller_scrollbarinner"></div></div>')), r + "</div>";
      });
  })(),
  (function () {
    "use strict";
    function e(e) {
      return e > 1 ? 1 : e < 0 ? 0 : e;
    }
    ((CubicBezier = function (t, i, n, r) {
      (this._p1 = { x: e(t), y: e(i) }), (this._p2 = { x: e(n), y: e(r) });
    }).prototype._getCoordinateForT = function (e, t, i) {
      var n = 3 * t,
        r = 3 * (i - t) - n;
      return (((1 - n - r) * e + r) * e + n) * e;
    }),
      (CubicBezier.prototype._getCoordinateDerivateForT = function (e, t, i) {
        var n = 3 * t,
          r = 3 * (i - t) - n;
        return (3 * (1 - n - r) * e + 2 * r) * e + n;
      }),
      (CubicBezier.prototype._getTForCoordinate = function (e, t, i, n) {
        if (!isFinite(n) || n <= 0) throw new RangeError('"epsilon" must be a number greater than 0.');
        var r, a, s, o;
        for (r = e, a = 0; a < 8; a += 1) {
          if (((s = this._getCoordinateForT(r, t, i) - e), Math.abs(s) < n)) return r;
          if (((o = this._getCoordinateDerivateForT(r, t, i)), Math.abs(o) < 1e-6)) break;
          r -= s / o;
        }
        var l = 0,
          d = 1;
        if ((r = e) < l) return l;
        if (r > d) return d;
        for (; l < d; ) {
          if (((s = this._getCoordinateForT(r, t, i)), Math.abs(s - e) < n)) return r;
          e > s ? (l = r) : (d = r), (r = 0.5 * (d - l) + l);
        }
        return r;
      }),
      (CubicBezier.prototype.getPointForT = function (e) {
        return 0 === e || 1 === e ? { x: e, y: e } : ((e < 0 || e > 1) && _throwRangeError("t", e), { x: this._getCoordinateForT(e, this._p1.x, this._p2.x), y: this._getCoordinateForT(e, this._p1.y, this._p2.y) });
      }),
      (CubicBezier.prototype.getTForX = function (e, t) {
        return this._getTForCoordinate(e, this._p1.x, this._p2.x, t);
      }),
      (CubicBezier.prototype.getTForY = function (e, t) {
        return this._getTForCoordinate(e, this._p1.y, this._p2.y, t);
      }),
      (CubicBezier.prototype._getAuxPoints = function (e) {
        (e <= 0 || e >= 1) && _throwRangeError("t", e);
        var t = { x: e * this._p1.x, y: e * this._p1.y },
          i = { x: this._p1.x + e * (this._p2.x - this._p1.x), y: this._p1.y + e * (this._p2.y - this._p1.y) },
          n = { x: this._p2.x + e * (1 - this._p2.x), y: this._p2.y + e * (1 - this._p2.y) },
          r = { x: t.x + e * (i.x - t.x), y: t.y + e * (i.y - t.y) },
          a = { x: i.x + e * (n.x - i.x), y: i.y + e * (n.y - i.y) };
        return { i0: t, i1: i, i2: n, j0: r, j1: a, k: { x: r.x + e * (a.x - r.x), y: r.y + e * (a.y - r.y) } };
      }),
      (CubicBezier.prototype.divideAtT = function (e) {
        if (((e < 0 || e > 1) && _throwRangeError("t", e), 0 === e || 1 === e)) {
          var t = [];
          return (t[e] = CubicBezier.linear()), (t[1 - e] = this.clone()), t;
        }
        var i = {},
          n = {},
          r = this._getAuxPoints(e),
          a = r.i0,
          s = r.i2,
          o = r.j0,
          l = r.j1,
          d = r.k,
          u = d.x,
          c = d.y;
        return (i.p1 = { x: a.x / u, y: a.y / c }), (i.p2 = { x: o.x / u, y: o.y / c }), (n.p1 = { x: (l.x - u) / (1 - u), y: (l.y - c) / (1 - c) }), (n.p2 = { x: (s.x - u) / (1 - u), y: (s.y - c) / (1 - c) }), [new CubicBezier(i.p1.x, i.p1.y, i.p2.x, i.p2.y), new CubicBezier(n.p1.x, n.p1.y, n.p2.x, n.p2.y)];
      }),
      (CubicBezier.prototype.divideAtX = function (e, t) {
        (e < 0 || e > 1) && _throwRangeError("x", e);
        var i = this.getTForX(e, t);
        return this.divideAtT(i);
      }),
      (CubicBezier.prototype.divideAtY = function (e, t) {
        (e < 0 || e > 1) && _throwRangeError("y", e);
        var i = this.getTForY(e, t);
        return this.divideAtT(i);
      }),
      (CubicBezier.prototype.clone = function () {
        return new CubicBezier(this._p1.x, this._p1.y, this._p2.x, this._p2.y);
      }),
      (CubicBezier.prototype.toString = function () {
        return "cubic-bezier(" + [this._p1.x, this._p1.y, this._p2.x, this._p2.y].join(", ") + ")";
      }),
      (CubicBezier.linear = function () {
        return new CubicBezier();
      }),
      (CubicBezier.ease = function () {
        return new CubicBezier(0.25, 0.1, 0.25, 1);
      }),
      (CubicBezier.linear = function () {
        return new CubicBezier(0, 0, 1, 1);
      }),
      (CubicBezier.easeIn = function () {
        return new CubicBezier(0.42, 0, 1, 1);
      }),
      (CubicBezier.easeOut = function () {
        return new CubicBezier(0, 0, 0.58, 1);
      }),
      (CubicBezier.easeInOut = function () {
        return new CubicBezier(0.42, 0, 0.58, 1);
      });
  })(),
  "undefined" != typeof define && define.amd
    ? define(function () {
        "use strict";
        return { FTScroller: FTScroller, CubicBezier: CubicBezier };
      })
    : "undefined" != typeof module &&
      module.exports &&
      ((module.exports = function (e, t) {
        "use strict";
        return new FTScroller(e, t);
      }),
      (module.exports.FTScroller = FTScroller),
      (module.exports.CubicBezier = CubicBezier)),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : ((e = e || self).Swiper = t());
  })(this, function () {
    "use strict";
    var e =
        "undefined" == typeof document
          ? {
              body: {},
              addEventListener: function () {},
              removeEventListener: function () {},
              activeElement: { blur: function () {}, nodeName: "" },
              querySelector: function () {
                return null;
              },
              querySelectorAll: function () {
                return [];
              },
              getElementById: function () {
                return null;
              },
              createEvent: function () {
                return { initEvent: function () {} };
              },
              createElement: function () {
                return {
                  children: [],
                  childNodes: [],
                  style: {},
                  setAttribute: function () {},
                  getElementsByTagName: function () {
                    return [];
                  },
                };
              },
              location: { hash: "" },
            }
          : document,
      t =
        "undefined" == typeof window
          ? {
              document: e,
              navigator: { userAgent: "" },
              location: {},
              history: {},
              CustomEvent: function () {
                return this;
              },
              addEventListener: function () {},
              removeEventListener: function () {},
              getComputedStyle: function () {
                return {
                  getPropertyValue: function () {
                    return "";
                  },
                };
              },
              Image: function () {},
              Date: function () {},
              screen: {},
              setTimeout: function () {},
              clearTimeout: function () {},
            }
          : window,
      i = function (e) {
        for (var t = 0; t < e.length; t += 1) this[t] = e[t];
        return (this.length = e.length), this;
      };
    function n(n, r) {
      var a = [],
        s = 0;
      if (n && !r && n instanceof i) return n;
      if (n)
        if ("string" == typeof n) {
          var o,
            l,
            d = n.trim();
          if (0 <= d.indexOf("<") && 0 <= d.indexOf(">")) {
            var u = "div";
            for (0 === d.indexOf("<li") && (u = "ul"), 0 === d.indexOf("<tr") && (u = "tbody"), (0 !== d.indexOf("<td") && 0 !== d.indexOf("<th")) || (u = "tr"), 0 === d.indexOf("<tbody") && (u = "table"), 0 === d.indexOf("<option") && (u = "select"), (l = e.createElement(u)).innerHTML = d, s = 0; s < l.childNodes.length; s += 1) a.push(l.childNodes[s]);
          } else for (o = r || "#" !== n[0] || n.match(/[ .<>:~]/) ? (r || e).querySelectorAll(n.trim()) : [e.getElementById(n.trim().split("#")[1])], s = 0; s < o.length; s += 1) o[s] && a.push(o[s]);
        } else if (n.nodeType || n === t || n === e) a.push(n);
        else if (0 < n.length && n[0].nodeType) for (s = 0; s < n.length; s += 1) a.push(n[s]);
      return new i(a);
    }
    function r(e) {
      for (var t = [], i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);
      return t;
    }
    (n.fn = i.prototype), (n.Class = i), (n.Dom7 = i);
    var a = {
      addClass: function (e) {
        if (void 0 === e) return this;
        for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.add(t[i]);
        return this;
      },
      removeClass: function (e) {
        for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.remove(t[i]);
        return this;
      },
      hasClass: function (e) {
        return !!this[0] && this[0].classList.contains(e);
      },
      toggleClass: function (e) {
        for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.toggle(t[i]);
        return this;
      },
      attr: function (e, t) {
        var i = arguments;
        if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
        for (var n = 0; n < this.length; n += 1)
          if (2 === i.length) this[n].setAttribute(e, t);
          else for (var r in e) (this[n][r] = e[r]), this[n].setAttribute(r, e[r]);
        return this;
      },
      removeAttr: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      data: function (e, t) {
        var i;
        if (void 0 !== t) {
          for (var n = 0; n < this.length; n += 1) (i = this[n]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), (i.dom7ElementDataStorage[e] = t);
          return this;
        }
        if ((i = this[0])) return i.dom7ElementDataStorage && e in i.dom7ElementDataStorage ? i.dom7ElementDataStorage[e] : i.getAttribute("data-" + e) || void 0;
      },
      transform: function (e) {
        for (var t = 0; t < this.length; t += 1) {
          var i = this[t].style;
          (i.webkitTransform = e), (i.transform = e);
        }
        return this;
      },
      transition: function (e) {
        "string" != typeof e && (e += "ms");
        for (var t = 0; t < this.length; t += 1) {
          var i = this[t].style;
          (i.webkitTransitionDuration = e), (i.transitionDuration = e);
        }
        return this;
      },
      on: function () {
        for (var e, t = [], i = arguments.length; i--; ) t[i] = arguments[i];
        var r = t[0],
          a = t[1],
          s = t[2],
          o = t[3];
        function l(e) {
          var t = e.target;
          if (t) {
            var i = e.target.dom7EventData || [];
            if ((i.indexOf(e) < 0 && i.unshift(e), n(t).is(a))) s.apply(t, i);
            else for (var r = n(t).parents(), o = 0; o < r.length; o += 1) n(r[o]).is(a) && s.apply(r[o], i);
          }
        }
        function d(e) {
          var t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t);
        }
        "function" == typeof t[1] && ((r = (e = t)[0]), (s = e[1]), (o = e[2]), (a = void 0)), o || (o = !1);
        for (var u, c = r.split(" "), p = 0; p < this.length; p += 1) {
          var h = this[p];
          if (a)
            for (u = 0; u < c.length; u += 1) {
              var f = c[u];
              h.dom7LiveListeners || (h.dom7LiveListeners = {}), h.dom7LiveListeners[f] || (h.dom7LiveListeners[f] = []), h.dom7LiveListeners[f].push({ listener: s, proxyListener: l }), h.addEventListener(f, l, o);
            }
          else
            for (u = 0; u < c.length; u += 1) {
              var m = c[u];
              h.dom7Listeners || (h.dom7Listeners = {}), h.dom7Listeners[m] || (h.dom7Listeners[m] = []), h.dom7Listeners[m].push({ listener: s, proxyListener: d }), h.addEventListener(m, d, o);
            }
        }
        return this;
      },
      off: function () {
        for (var e, t = [], i = arguments.length; i--; ) t[i] = arguments[i];
        var n = t[0],
          r = t[1],
          a = t[2],
          s = t[3];
        "function" == typeof t[1] && ((n = (e = t)[0]), (a = e[1]), (s = e[2]), (r = void 0)), s || (s = !1);
        for (var o = n.split(" "), l = 0; l < o.length; l += 1)
          for (var d = o[l], u = 0; u < this.length; u += 1) {
            var c = this[u],
              p = void 0;
            if ((!r && c.dom7Listeners ? (p = c.dom7Listeners[d]) : r && c.dom7LiveListeners && (p = c.dom7LiveListeners[d]), p && p.length))
              for (var h = p.length - 1; 0 <= h; h -= 1) {
                var f = p[h];
                (a && f.listener === a) || (a && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === a) ? (c.removeEventListener(d, f.proxyListener, s), p.splice(h, 1)) : a || (c.removeEventListener(d, f.proxyListener, s), p.splice(h, 1));
              }
          }
        return this;
      },
      trigger: function () {
        for (var i = [], n = arguments.length; n--; ) i[n] = arguments[n];
        for (var r = i[0].split(" "), a = i[1], s = 0; s < r.length; s += 1)
          for (var o = r[s], l = 0; l < this.length; l += 1) {
            var d = this[l],
              u = void 0;
            try {
              u = new t.CustomEvent(o, { detail: a, bubbles: !0, cancelable: !0 });
            } catch (i) {
              (u = e.createEvent("Event")).initEvent(o, !0, !0), (u.detail = a);
            }
            (d.dom7EventData = i.filter(function (e, t) {
              return 0 < t;
            })),
              d.dispatchEvent(u),
              (d.dom7EventData = []),
              delete d.dom7EventData;
          }
        return this;
      },
      transitionEnd: function (e) {
        var t,
          i = ["webkitTransitionEnd", "transitionend"],
          n = this;
        function r(a) {
          if (a.target === this) for (e.call(this, a), t = 0; t < i.length; t += 1) n.off(i[t], r);
        }
        if (e) for (t = 0; t < i.length; t += 1) n.on(i[t], r);
        return this;
      },
      outerWidth: function (e) {
        if (0 < this.length) {
          if (e) {
            var t = this.styles();
            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (0 < this.length) {
          if (e) {
            var t = this.styles();
            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      offset: function () {
        if (0 < this.length) {
          var i = this[0],
            n = i.getBoundingClientRect(),
            r = e.body;
          return { top: n.top + (i === t ? t.scrollY : i.scrollTop) - (i.clientTop || r.clientTop || 0), left: n.left + (i === t ? t.scrollX : i.scrollLeft) - (i.clientLeft || r.clientLeft || 0) };
        }
        return null;
      },
      css: function (e, i) {
        var n;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (n = 0; n < this.length; n += 1) for (var r in e) this[n].style[r] = e[r];
            return this;
          }
          if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (n = 0; n < this.length; n += 1) this[n].style[e] = i;
          return this;
        }
        return this;
      },
      each: function (e) {
        if (!e) return this;
        for (var t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
        return this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
        for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (r) {
        var a,
          s,
          o = this[0];
        if (!o || void 0 === r) return !1;
        if ("string" == typeof r) {
          if (o.matches) return o.matches(r);
          if (o.webkitMatchesSelector) return o.webkitMatchesSelector(r);
          if (o.msMatchesSelector) return o.msMatchesSelector(r);
          for (a = n(r), s = 0; s < a.length; s += 1) if (a[s] === o) return !0;
          return !1;
        }
        if (r === e) return o === e;
        if (r === t) return o === t;
        if (r.nodeType || r instanceof i) {
          for (a = r.nodeType ? [r] : r, s = 0; s < a.length; s += 1) if (a[s] === o) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        var e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); ) 1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        var t,
          n = this.length;
        return new i(n - 1 < e ? [] : e < 0 ? ((t = n + e) < 0 ? [] : [this[t]]) : [this[e]]);
      },
      append: function () {
        for (var t, n = [], r = arguments.length; r--; ) n[r] = arguments[r];
        for (var a = 0; a < n.length; a += 1) {
          t = n[a];
          for (var s = 0; s < this.length; s += 1)
            if ("string" == typeof t) {
              var o = e.createElement("div");
              for (o.innerHTML = t; o.firstChild; ) this[s].appendChild(o.firstChild);
            } else if (t instanceof i) for (var l = 0; l < t.length; l += 1) this[s].appendChild(t[l]);
            else this[s].appendChild(t);
        }
        return this;
      },
      prepend: function (t) {
        var n, r;
        for (n = 0; n < this.length; n += 1)
          if ("string" == typeof t) {
            var a = e.createElement("div");
            for (a.innerHTML = t, r = a.childNodes.length - 1; 0 <= r; r -= 1) this[n].insertBefore(a.childNodes[r], this[n].childNodes[0]);
          } else if (t instanceof i) for (r = 0; r < t.length; r += 1) this[n].insertBefore(t[r], this[n].childNodes[0]);
          else this[n].insertBefore(t, this[n].childNodes[0]);
        return this;
      },
      next: function (e) {
        return 0 < this.length ? (e ? (this[0].nextElementSibling && n(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([])) : new i(this[0].nextElementSibling ? [this[0].nextElementSibling] : [])) : new i([]);
      },
      nextAll: function (e) {
        var t = [],
          r = this[0];
        if (!r) return new i([]);
        for (; r.nextElementSibling; ) {
          var a = r.nextElementSibling;
          e ? n(a).is(e) && t.push(a) : t.push(a), (r = a);
        }
        return new i(t);
      },
      prev: function (e) {
        if (0 < this.length) {
          var t = this[0];
          return e ? (t.previousElementSibling && n(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([])) : new i(t.previousElementSibling ? [t.previousElementSibling] : []);
        }
        return new i([]);
      },
      prevAll: function (e) {
        var t = [],
          r = this[0];
        if (!r) return new i([]);
        for (; r.previousElementSibling; ) {
          var a = r.previousElementSibling;
          e ? n(a).is(e) && t.push(a) : t.push(a), (r = a);
        }
        return new i(t);
      },
      parent: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? n(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
        return n(r(t));
      },
      parents: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1) for (var a = this[i].parentNode; a; ) e ? n(a).is(e) && t.push(a) : t.push(a), (a = a.parentNode);
        return n(r(t));
      },
      closest: function (e) {
        var t = this;
        return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        for (var t = [], n = 0; n < this.length; n += 1) for (var r = this[n].querySelectorAll(e), a = 0; a < r.length; a += 1) t.push(r[a]);
        return new i(t);
      },
      children: function (e) {
        for (var t = [], a = 0; a < this.length; a += 1) for (var s = this[a].childNodes, o = 0; o < s.length; o += 1) e ? 1 === s[o].nodeType && n(s[o]).is(e) && t.push(s[o]) : 1 === s[o].nodeType && t.push(s[o]);
        return new i(r(t));
      },
      remove: function () {
        for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
      add: function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        var i, r;
        for (i = 0; i < e.length; i += 1) {
          var a = n(e[i]);
          for (r = 0; r < a.length; r += 1) (this[this.length] = a[r]), (this.length += 1);
        }
        return this;
      },
      styles: function () {
        return this[0] ? t.getComputedStyle(this[0], null) : {};
      },
    };
    Object.keys(a).forEach(function (e) {
      n.fn[e] = a[e];
    });
    var s,
      o,
      l,
      d,
      u = {
        deleteProps: function (e) {
          var t = e;
          Object.keys(t).forEach(function (e) {
            try {
              t[e] = null;
            } catch (e) {}
            try {
              delete t[e];
            } catch (e) {}
          });
        },
        nextTick: function (e, t) {
          return void 0 === t && (t = 0), setTimeout(e, t);
        },
        now: function () {
          return Date.now();
        },
        getTranslate: function (e, i) {
          var n, r, a;
          void 0 === i && (i = "x");
          var s = t.getComputedStyle(e, null);
          return (
            t.WebKitCSSMatrix
              ? (6 < (r = s.transform || s.webkitTransform).split(",").length &&
                  (r = r
                    .split(", ")
                    .map(function (e) {
                      return e.replace(",", ".");
                    })
                    .join(", ")),
                (a = new t.WebKitCSSMatrix("none" === r ? "" : r)))
              : (n = (a = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(",")),
            "x" === i && (r = t.WebKitCSSMatrix ? a.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])),
            "y" === i && (r = t.WebKitCSSMatrix ? a.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])),
            r || 0
          );
        },
        parseUrlQuery: function (e) {
          var i,
            n,
            r,
            a,
            s = {},
            o = e || t.location.href;
          if ("string" == typeof o && o.length)
            for (
              a = (n = (o = -1 < o.indexOf("?") ? o.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
                return "" !== e;
              })).length,
                i = 0;
              i < a;
              i += 1
            )
              (r = n[i].replace(/#\S+/g, "").split("=")), (s[decodeURIComponent(r[0])] = void 0 === r[1] ? void 0 : decodeURIComponent(r[1]) || "");
          return s;
        },
        isObject: function (e) {
          return "object" == typeof e && null !== e && e.constructor && e.constructor === Object;
        },
        extend: function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          for (var i = Object(e[0]), n = 1; n < e.length; n += 1) {
            var r = e[n];
            if (null != r)
              for (var a = Object.keys(Object(r)), s = 0, o = a.length; s < o; s += 1) {
                var l = a[s],
                  d = Object.getOwnPropertyDescriptor(r, l);
                void 0 !== d && d.enumerable && (u.isObject(i[l]) && u.isObject(r[l]) ? u.extend(i[l], r[l]) : !u.isObject(i[l]) && u.isObject(r[l]) ? ((i[l] = {}), u.extend(i[l], r[l])) : (i[l] = r[l]));
              }
          }
          return i;
        },
      },
      c =
        ((l = e.createElement("div")),
        {
          touch: (t.Modernizr && !0 === t.Modernizr.touch) || !!(0 < t.navigator.maxTouchPoints || "ontouchstart" in t || (t.DocumentTouch && e instanceof t.DocumentTouch)),
          pointerEvents: !!(t.navigator.pointerEnabled || t.PointerEvent || ("maxTouchPoints" in t.navigator && 0 < t.navigator.maxTouchPoints)),
          prefixedPointerEvents: !!t.navigator.msPointerEnabled,
          transition: ((o = l.style), "transition" in o || "webkitTransition" in o || "MozTransition" in o),
          transforms3d: (t.Modernizr && !0 === t.Modernizr.csstransforms3d) || ((s = l.style), "webkitPerspective" in s || "MozPerspective" in s || "OPerspective" in s || "MsPerspective" in s || "perspective" in s),
          flexbox: (function () {
            for (var e = l.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1) if (t[i] in e) return !0;
            return !1;
          })(),
          observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
          passiveListener: (function () {
            var e = !1;
            try {
              var i = Object.defineProperty({}, "passive", {
                get: function () {
                  e = !0;
                },
              });
              t.addEventListener("testPassiveListener", null, i);
            } catch (e) {}
            return e;
          })(),
          gestures: "ongesturestart" in t,
        }),
      p = { isIE: !!t.navigator.userAgent.match(/Trident/g) || !!t.navigator.userAgent.match(/MSIE/g), isEdge: !!t.navigator.userAgent.match(/Edge/g), isSafari: ((d = t.navigator.userAgent.toLowerCase()), 0 <= d.indexOf("safari") && d.indexOf("chrome") < 0 && d.indexOf("android") < 0), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent) },
      h = function (e) {
        void 0 === e && (e = {});
        var t = this;
        (t.params = e),
          (t.eventsListeners = {}),
          t.params &&
            t.params.on &&
            Object.keys(t.params.on).forEach(function (e) {
              t.on(e, t.params.on[e]);
            });
      },
      f = { components: { configurable: !0 } };
    (h.prototype.on = function (e, t, i) {
      var n = this;
      if ("function" != typeof t) return n;
      var r = i ? "unshift" : "push";
      return (
        e.split(" ").forEach(function (e) {
          n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][r](t);
        }),
        n
      );
    }),
      (h.prototype.once = function (e, t, i) {
        var n = this;
        if ("function" != typeof t) return n;
        function r() {
          for (var i = [], a = arguments.length; a--; ) i[a] = arguments[a];
          t.apply(n, i), n.off(e, r), r.f7proxy && delete r.f7proxy;
        }
        return (r.f7proxy = t), n.on(e, r, i);
      }),
      (h.prototype.off = function (e, t) {
        var i = this;
        return (
          i.eventsListeners &&
            e.split(" ").forEach(function (e) {
              void 0 === t
                ? (i.eventsListeners[e] = [])
                : i.eventsListeners[e] &&
                  i.eventsListeners[e].length &&
                  i.eventsListeners[e].forEach(function (n, r) {
                    (n === t || (n.f7proxy && n.f7proxy === t)) && i.eventsListeners[e].splice(r, 1);
                  });
            }),
          i
        );
      }),
      (h.prototype.emit = function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        var i,
          n,
          r,
          a = this;
        return (
          a.eventsListeners &&
            ("string" == typeof e[0] || Array.isArray(e[0]) ? ((i = e[0]), (n = e.slice(1, e.length)), (r = a)) : ((i = e[0].events), (n = e[0].data), (r = e[0].context || a)),
            (Array.isArray(i) ? i : i.split(" ")).forEach(function (e) {
              if (a.eventsListeners && a.eventsListeners[e]) {
                var t = [];
                a.eventsListeners[e].forEach(function (e) {
                  t.push(e);
                }),
                  t.forEach(function (e) {
                    e.apply(r, n);
                  });
              }
            })),
          a
        );
      }),
      (h.prototype.useModulesParams = function (e) {
        var t = this;
        t.modules &&
          Object.keys(t.modules).forEach(function (i) {
            var n = t.modules[i];
            n.params && u.extend(e, n.params);
          });
      }),
      (h.prototype.useModules = function (e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules &&
          Object.keys(t.modules).forEach(function (i) {
            var n = t.modules[i],
              r = e[i] || {};
            n.instance &&
              Object.keys(n.instance).forEach(function (e) {
                var i = n.instance[e];
                t[e] = "function" == typeof i ? i.bind(t) : i;
              }),
              n.on &&
                t.on &&
                Object.keys(n.on).forEach(function (e) {
                  t.on(e, n.on[e]);
                }),
              n.create && n.create.bind(t)(r);
          });
      }),
      (f.components.set = function (e) {
        this.use && this.use(e);
      }),
      (h.installModule = function (e) {
        for (var t = [], i = arguments.length - 1; 0 < i--; ) t[i] = arguments[i + 1];
        var n = this;
        n.prototype.modules || (n.prototype.modules = {});
        var r = e.name || Object.keys(n.prototype.modules).length + "_" + u.now();
        return (
          (n.prototype.modules[r] = e).proto &&
            Object.keys(e.proto).forEach(function (t) {
              n.prototype[t] = e.proto[t];
            }),
          e.static &&
            Object.keys(e.static).forEach(function (t) {
              n[t] = e.static[t];
            }),
          e.install && e.install.apply(n, t),
          n
        );
      }),
      (h.use = function (e) {
        for (var t = [], i = arguments.length - 1; 0 < i--; ) t[i] = arguments[i + 1];
        var n = this;
        return Array.isArray(e)
          ? (e.forEach(function (e) {
              return n.installModule(e);
            }),
            n)
          : n.installModule.apply(n, [e].concat(t));
      }),
      Object.defineProperties(h, f);
    var m = {
        updateSize: function () {
          var e,
            t,
            i = this,
            n = i.$el;
          (t = void 0 !== i.params.height ? i.params.height : n[0].clientHeight), (0 === (e = void 0 !== i.params.width ? i.params.width : n[0].clientWidth) && i.isHorizontal()) || (0 === t && i.isVertical()) || ((e = e - parseInt(n.css("padding-left"), 10) - parseInt(n.css("padding-right"), 10)), (t = t - parseInt(n.css("padding-top"), 10) - parseInt(n.css("padding-bottom"), 10)), u.extend(i, { width: e, height: t, size: i.isHorizontal() ? e : t }));
        },
        updateSlides: function () {
          var e = this,
            i = e.params,
            n = e.$wrapperEl,
            r = e.size,
            a = e.rtlTranslate,
            s = e.wrongRTL,
            o = e.virtual && i.virtual.enabled,
            l = o ? e.virtual.slides.length : e.slides.length,
            d = n.children("." + e.params.slideClass),
            p = o ? e.virtual.slides.length : d.length,
            h = [],
            f = [],
            m = [],
            v = i.slidesOffsetBefore;
          "function" == typeof v && (v = i.slidesOffsetBefore.call(e));
          var g = i.slidesOffsetAfter;
          "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
          var y = e.snapGrid.length,
            w = e.snapGrid.length,
            b = i.spaceBetween,
            x = -v,
            _ = 0,
            T = 0;
          if (void 0 !== r) {
            var S, C;
            "string" == typeof b && 0 <= b.indexOf("%") && (b = (parseFloat(b.replace("%", "")) / 100) * r), (e.virtualSize = -b), d.css(a ? { marginLeft: "", marginTop: "" } : { marginRight: "", marginBottom: "" }), 1 < i.slidesPerColumn && ((S = Math.floor(p / i.slidesPerColumn) === p / e.params.slidesPerColumn ? p : Math.ceil(p / i.slidesPerColumn) * i.slidesPerColumn), "auto" !== i.slidesPerView && "row" === i.slidesPerColumnFill && (S = Math.max(S, i.slidesPerView * i.slidesPerColumn)));
            for (var E, M = i.slidesPerColumn, P = S / M, k = Math.floor(p / i.slidesPerColumn), z = 0; z < p; z += 1) {
              C = 0;
              var A = d.eq(z);
              if (1 < i.slidesPerColumn) {
                var O = void 0,
                  D = void 0,
                  L = void 0;
                "column" === i.slidesPerColumnFill ? ((L = z - (D = Math.floor(z / M)) * M), (k < D || (D === k && L === M - 1)) && M <= (L += 1) && ((L = 0), (D += 1)), A.css({ "-webkit-box-ordinal-group": (O = D + (L * S) / M), "-moz-box-ordinal-group": O, "-ms-flex-order": O, "-webkit-order": O, order: O })) : (D = z - (L = Math.floor(z / P)) * P),
                  A.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== L && i.spaceBetween && i.spaceBetween + "px")
                    .attr("data-swiper-column", D)
                    .attr("data-swiper-row", L);
              }
              if ("none" !== A.css("display")) {
                if ("auto" === i.slidesPerView) {
                  var I = t.getComputedStyle(A[0], null),
                    N = A[0].style.transform,
                    R = A[0].style.webkitTransform;
                  if ((N && (A[0].style.transform = "none"), R && (A[0].style.webkitTransform = "none"), i.roundLengths)) C = e.isHorizontal() ? A.outerWidth(!0) : A.outerHeight(!0);
                  else if (e.isHorizontal()) {
                    var B = parseFloat(I.getPropertyValue("width")),
                      F = parseFloat(I.getPropertyValue("padding-left")),
                      $ = parseFloat(I.getPropertyValue("padding-right")),
                      H = parseFloat(I.getPropertyValue("margin-left")),
                      X = parseFloat(I.getPropertyValue("margin-right")),
                      j = I.getPropertyValue("box-sizing");
                    C = j && "border-box" === j ? B + H + X : B + F + $ + H + X;
                  } else {
                    var Y = parseFloat(I.getPropertyValue("height")),
                      q = parseFloat(I.getPropertyValue("padding-top")),
                      G = parseFloat(I.getPropertyValue("padding-bottom")),
                      W = parseFloat(I.getPropertyValue("margin-top")),
                      V = parseFloat(I.getPropertyValue("margin-bottom")),
                      U = I.getPropertyValue("box-sizing");
                    C = U && "border-box" === U ? Y + W + V : Y + q + G + W + V;
                  }
                  N && (A[0].style.transform = N), R && (A[0].style.webkitTransform = R), i.roundLengths && (C = Math.floor(C));
                } else (C = (r - (i.slidesPerView - 1) * b) / i.slidesPerView), i.roundLengths && (C = Math.floor(C)), d[z] && (e.isHorizontal() ? (d[z].style.width = C + "px") : (d[z].style.height = C + "px"));
                d[z] && (d[z].swiperSlideSize = C), m.push(C), i.centeredSlides ? ((x = x + C / 2 + _ / 2 + b), 0 === _ && 0 !== z && (x = x - r / 2 - b), 0 === z && (x = x - r / 2 - b), Math.abs(x) < 0.001 && (x = 0), i.roundLengths && (x = Math.floor(x)), T % i.slidesPerGroup == 0 && h.push(x), f.push(x)) : (i.roundLengths && (x = Math.floor(x)), T % i.slidesPerGroup == 0 && h.push(x), f.push(x), (x = x + C + b)), (e.virtualSize += C + b), (_ = C), (T += 1);
              }
            }
            if (((e.virtualSize = Math.max(e.virtualSize, r) + g), a && s && ("slide" === i.effect || "coverflow" === i.effect) && n.css({ width: e.virtualSize + i.spaceBetween + "px" }), (c.flexbox && !i.setWrapperSize) || (e.isHorizontal() ? n.css({ width: e.virtualSize + i.spaceBetween + "px" }) : n.css({ height: e.virtualSize + i.spaceBetween + "px" })), 1 < i.slidesPerColumn && ((e.virtualSize = (C + i.spaceBetween) * S), (e.virtualSize = Math.ceil(e.virtualSize / i.slidesPerColumn) - i.spaceBetween), e.isHorizontal() ? n.css({ width: e.virtualSize + i.spaceBetween + "px" }) : n.css({ height: e.virtualSize + i.spaceBetween + "px" }), i.centeredSlides))) {
              E = [];
              for (var K = 0; K < h.length; K += 1) {
                var Z = h[K];
                i.roundLengths && (Z = Math.floor(Z)), h[K] < e.virtualSize + h[0] && E.push(Z);
              }
              h = E;
            }
            if (!i.centeredSlides) {
              E = [];
              for (var Q = 0; Q < h.length; Q += 1) {
                var J = h[Q];
                i.roundLengths && (J = Math.floor(J)), h[Q] <= e.virtualSize - r && E.push(J);
              }
              (h = E), 1 < Math.floor(e.virtualSize - r) - Math.floor(h[h.length - 1]) && h.push(e.virtualSize - r);
            }
            if ((0 === h.length && (h = [0]), 0 !== i.spaceBetween && (e.isHorizontal() ? d.css(a ? { marginLeft: b + "px" } : { marginRight: b + "px" }) : d.css({ marginBottom: b + "px" })), i.centerInsufficientSlides)) {
              var ee = 0;
              if (
                (m.forEach(function (e) {
                  ee += e + (i.spaceBetween ? i.spaceBetween : 0);
                }),
                (ee -= i.spaceBetween) < r)
              ) {
                var te = (r - ee) / 2;
                h.forEach(function (e, t) {
                  h[t] = e - te;
                }),
                  f.forEach(function (e, t) {
                    f[t] = e + te;
                  });
              }
            }
            u.extend(e, { slides: d, snapGrid: h, slidesGrid: f, slidesSizesGrid: m }), p !== l && e.emit("slidesLengthChange"), h.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== w && e.emit("slidesGridLengthChange"), (i.watchSlidesProgress || i.watchSlidesVisibility) && e.updateSlidesOffset();
          }
        },
        updateAutoHeight: function (e) {
          var t,
            i = this,
            n = [],
            r = 0;
          if (("number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed), "auto" !== i.params.slidesPerView && 1 < i.params.slidesPerView))
            for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
              var a = i.activeIndex + t;
              if (a > i.slides.length) break;
              n.push(i.slides.eq(a)[0]);
            }
          else n.push(i.slides.eq(i.activeIndex)[0]);
          for (t = 0; t < n.length; t += 1)
            if (void 0 !== n[t]) {
              var s = n[t].offsetHeight;
              r = r < s ? s : r;
            }
          r && i.$wrapperEl.css("height", r + "px");
        },
        updateSlidesOffset: function () {
          for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          var t = this,
            i = t.params,
            r = t.slides,
            a = t.rtlTranslate;
          if (0 !== r.length) {
            void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
            var s = -e;
            a && (s = e), r.removeClass(i.slideVisibleClass), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
            for (var o = 0; o < r.length; o += 1) {
              var l = r[o],
                d = (s + (i.centeredSlides ? t.minTranslate() : 0) - l.swiperSlideOffset) / (l.swiperSlideSize + i.spaceBetween);
              if (i.watchSlidesVisibility) {
                var u = -(s - l.swiperSlideOffset),
                  c = u + t.slidesSizesGrid[o];
                ((0 <= u && u < t.size) || (0 < c && c <= t.size) || (u <= 0 && c >= t.size)) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(o), r.eq(o).addClass(i.slideVisibleClass));
              }
              l.progress = a ? -d : d;
            }
            t.visibleSlides = n(t.visibleSlides);
          }
        },
        updateProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          var t = this,
            i = t.params,
            n = t.maxTranslate() - t.minTranslate(),
            r = t.progress,
            a = t.isBeginning,
            s = t.isEnd,
            o = a,
            l = s;
          0 === n ? (s = a = !(r = 0)) : ((a = (r = (e - t.minTranslate()) / n) <= 0), (s = 1 <= r)), u.extend(t, { progress: r, isBeginning: a, isEnd: s }), (i.watchSlidesProgress || i.watchSlidesVisibility) && t.updateSlidesProgress(e), a && !o && t.emit("reachBeginning toEdge"), s && !l && t.emit("reachEnd toEdge"), ((o && !a) || (l && !s)) && t.emit("fromEdge"), t.emit("progress", r);
        },
        updateSlidesClasses: function () {
          var e,
            t = this,
            i = t.slides,
            n = t.params,
            r = t.$wrapperEl,
            a = t.activeIndex,
            s = t.realIndex,
            o = t.virtual && n.virtual.enabled;
          i.removeClass(n.slideActiveClass + " " + n.slideNextClass + " " + n.slidePrevClass + " " + n.slideDuplicateActiveClass + " " + n.slideDuplicateNextClass + " " + n.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + n.slideClass + '[data-swiper-slide-index="' + a + '"]') : i.eq(a)).addClass(n.slideActiveClass), n.loop && (e.hasClass(n.slideDuplicateClass) ? r.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + s + '"]').addClass(n.slideDuplicateActiveClass) : r.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + s + '"]').addClass(n.slideDuplicateActiveClass));
          var l = e
            .nextAll("." + n.slideClass)
            .eq(0)
            .addClass(n.slideNextClass);
          n.loop && 0 === l.length && (l = i.eq(0)).addClass(n.slideNextClass);
          var d = e
            .prevAll("." + n.slideClass)
            .eq(0)
            .addClass(n.slidePrevClass);
          n.loop && 0 === d.length && (d = i.eq(-1)).addClass(n.slidePrevClass), n.loop && (l.hasClass(n.slideDuplicateClass) ? r.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass) : r.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass), d.hasClass(n.slideDuplicateClass) ? r.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass) : r.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass));
        },
        updateActiveIndex: function (e) {
          var t,
            i = this,
            n = i.rtlTranslate ? i.translate : -i.translate,
            r = i.slidesGrid,
            a = i.snapGrid,
            s = i.params,
            o = i.activeIndex,
            l = i.realIndex,
            d = i.snapIndex,
            c = e;
          if (void 0 === c) {
            for (var p = 0; p < r.length; p += 1) void 0 !== r[p + 1] ? (n >= r[p] && n < r[p + 1] - (r[p + 1] - r[p]) / 2 ? (c = p) : n >= r[p] && n < r[p + 1] && (c = p + 1)) : n >= r[p] && (c = p);
            s.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
          }
          if (((t = 0 <= a.indexOf(n) ? a.indexOf(n) : Math.floor(c / s.slidesPerGroup)) >= a.length && (t = a.length - 1), c !== o)) {
            var h = parseInt(i.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
            u.extend(i, { snapIndex: t, realIndex: h, previousIndex: o, activeIndex: c }), i.emit("activeIndexChange"), i.emit("snapIndexChange"), l !== h && i.emit("realIndexChange"), i.emit("slideChange");
          } else t !== d && ((i.snapIndex = t), i.emit("snapIndexChange"));
        },
        updateClickedSlide: function (e) {
          var t = this,
            i = t.params,
            r = n(e.target).closest("." + i.slideClass)[0],
            a = !1;
          if (r) for (var s = 0; s < t.slides.length; s += 1) t.slides[s] === r && (a = !0);
          if (!r || !a) return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = r), (t.clickedIndex = t.virtual && t.params.virtual.enabled ? parseInt(n(r).attr("data-swiper-slide-index"), 10) : n(r).index()), i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
        },
      },
      v = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          var t = this.rtlTranslate,
            i = this.translate;
          if (this.params.virtualTranslate) return t ? -i : i;
          var n = u.getTranslate(this.$wrapperEl[0], e);
          return t && (n = -n), n || 0;
        },
        setTranslate: function (e, t) {
          var i = this,
            n = i.rtlTranslate,
            r = i.params,
            a = i.$wrapperEl,
            s = i.progress,
            o = 0,
            l = 0;
          i.isHorizontal() ? (o = n ? -e : e) : (l = e), r.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))), r.virtualTranslate || a.transform(c.transforms3d ? "translate3d(" + o + "px, " + l + "px, 0px)" : "translate(" + o + "px, " + l + "px)"), (i.previousTranslate = i.translate), (i.translate = i.isHorizontal() ? o : l);
          var d = i.maxTranslate() - i.minTranslate();
          (0 === d ? 0 : (e - i.minTranslate()) / d) !== s && i.updateProgress(e), i.emit("setTranslate", i.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
      },
      g = {
        slideTo: function (e, t, i, n) {
          void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
          var r = this,
            a = e;
          a < 0 && (a = 0);
          var s = r.params,
            o = r.snapGrid,
            l = r.slidesGrid,
            d = r.previousIndex,
            u = r.activeIndex,
            p = r.rtlTranslate;
          if (r.animating && s.preventInteractionOnTransition) return !1;
          var h = Math.floor(a / s.slidesPerGroup);
          h >= o.length && (h = o.length - 1), (u || s.initialSlide || 0) === (d || 0) && i && r.emit("beforeSlideChangeStart");
          var f,
            m = -o[h];
          if ((r.updateProgress(m), s.normalizeSlideIndex)) for (var v = 0; v < l.length; v += 1) -Math.floor(100 * m) >= Math.floor(100 * l[v]) && (a = v);
          if (r.initialized && a !== u) {
            if (!r.allowSlideNext && m < r.translate && m < r.minTranslate()) return !1;
            if (!r.allowSlidePrev && m > r.translate && m > r.maxTranslate() && (u || 0) !== a) return !1;
          }
          return (
            (f = u < a ? "next" : a < u ? "prev" : "reset"),
            (p && -m === r.translate) || (!p && m === r.translate)
              ? (r.updateActiveIndex(a), s.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== s.effect && r.setTranslate(m), "reset" !== f && (r.transitionStart(i, f), r.transitionEnd(i, f)), !1)
              : (0 !== t && c.transition
                  ? (r.setTransition(t),
                    r.setTranslate(m),
                    r.updateActiveIndex(a),
                    r.updateSlidesClasses(),
                    r.emit("beforeTransitionStart", t, n),
                    r.transitionStart(i, f),
                    r.animating ||
                      ((r.animating = !0),
                      r.onSlideToWrapperTransitionEnd ||
                        (r.onSlideToWrapperTransitionEnd = function (e) {
                          r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), (r.onSlideToWrapperTransitionEnd = null), delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, f));
                        }),
                      r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                      r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)))
                  : (r.setTransition(0), r.setTranslate(m), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, n), r.transitionStart(i, f), r.transitionEnd(i, f)),
                !0)
          );
        },
        slideToLoop: function (e, t, i, n) {
          void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
          var r = e;
          return this.params.loop && (r += this.loopedSlides), this.slideTo(r, t, i, n);
        },
        slideNext: function (e, t, i) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var n = this,
            r = n.params;
          return r.loop ? !n.animating && (n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft), n.slideTo(n.activeIndex + r.slidesPerGroup, e, t, i)) : n.slideTo(n.activeIndex + r.slidesPerGroup, e, t, i);
        },
        slidePrev: function (e, t, i) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var n = this,
            r = n.snapGrid,
            a = n.slidesGrid,
            s = n.rtlTranslate;
          if (n.params.loop) {
            if (n.animating) return !1;
            n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
          }
          function o(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          var l,
            d = o(s ? n.translate : -n.translate),
            u = r.map(function (e) {
              return o(e);
            }),
            c =
              (a.map(function (e) {
                return o(e);
              }),
              u.indexOf(d),
              r[u.indexOf(d) - 1]);
          return void 0 !== c && (l = a.indexOf(c)) < 0 && (l = n.activeIndex - 1), n.slideTo(l, e, t, i);
        },
        slideReset: function (e, t, i) {
          return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i);
        },
        slideToClosest: function (e, t, i) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var n = this,
            r = n.activeIndex,
            a = Math.floor(r / n.params.slidesPerGroup);
          if (a < n.snapGrid.length - 1) {
            var s = n.snapGrid[a];
            (n.snapGrid[a + 1] - s) / 2 < (n.rtlTranslate ? n.translate : -n.translate) - s && (r = n.params.slidesPerGroup);
          }
          return n.slideTo(r, e, t, i);
        },
        slideToClickedSlide: function () {
          var e,
            t = this,
            i = t.params,
            r = t.$wrapperEl,
            a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
            s = t.clickedIndex;
          if (i.loop) {
            if (t.animating) return;
            (e = parseInt(n(t.clickedSlide).attr("data-swiper-slide-index"), 10)),
              i.centeredSlides
                ? s < t.loopedSlides - a / 2 || s > t.slides.length - t.loopedSlides + a / 2
                  ? (t.loopFix(),
                    (s = r
                      .children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")")
                      .eq(0)
                      .index()),
                    u.nextTick(function () {
                      t.slideTo(s);
                    }))
                  : t.slideTo(s)
                : s > t.slides.length - a
                ? (t.loopFix(),
                  (s = r
                    .children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")")
                    .eq(0)
                    .index()),
                  u.nextTick(function () {
                    t.slideTo(s);
                  }))
                : t.slideTo(s);
          } else t.slideTo(s);
        },
      },
      y = {
        loopCreate: function () {
          var t = this,
            i = t.params,
            r = t.$wrapperEl;
          r.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
          var a = r.children("." + i.slideClass);
          if (i.loopFillGroupWithBlank) {
            var s = i.slidesPerGroup - (a.length % i.slidesPerGroup);
            if (s !== i.slidesPerGroup) {
              for (var o = 0; o < s; o += 1) {
                var l = n(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                r.append(l);
              }
              a = r.children("." + i.slideClass);
            }
          }
          "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = a.length), (t.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10)), (t.loopedSlides += i.loopAdditionalSlides), t.loopedSlides > a.length && (t.loopedSlides = a.length);
          var d = [],
            u = [];
          a.each(function (e, i) {
            var r = n(i);
            e < t.loopedSlides && u.push(i), e < a.length && e >= a.length - t.loopedSlides && d.push(i), r.attr("data-swiper-slide-index", e);
          });
          for (var c = 0; c < u.length; c += 1) r.append(n(u[c].cloneNode(!0)).addClass(i.slideDuplicateClass));
          for (var p = d.length - 1; 0 <= p; p -= 1) r.prepend(n(d[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
        },
        loopFix: function () {
          var e,
            t = this,
            i = t.params,
            n = t.activeIndex,
            r = t.slides,
            a = t.loopedSlides,
            s = t.allowSlidePrev,
            o = t.allowSlideNext,
            l = t.snapGrid,
            d = t.rtlTranslate;
          (t.allowSlidePrev = !0), (t.allowSlideNext = !0);
          var u = -l[n] - t.getTranslate();
          n < a ? ((e = r.length - 3 * a + n), t.slideTo((e += a), 0, !1, !0) && 0 !== u && t.setTranslate((d ? -t.translate : t.translate) - u)) : (("auto" === i.slidesPerView && 2 * a <= n) || n >= r.length - a) && ((e = -r.length + n + a), t.slideTo((e += a), 0, !1, !0) && 0 !== u && t.setTranslate((d ? -t.translate : t.translate) - u)), (t.allowSlidePrev = s), (t.allowSlideNext = o);
        },
        loopDestroy: function () {
          var e = this.params,
            t = this.slides;
          this.$wrapperEl.children("." + e.slideClass + "." + e.slideDuplicateClass + ",." + e.slideClass + "." + e.slideBlankClass).remove(), t.removeAttr("data-swiper-slide-index");
        },
      },
      w = {
        setGrabCursor: function (e) {
          if (!(c.touch || !this.params.simulateTouch || (this.params.watchOverflow && this.isLocked))) {
            var t = this.el;
            (t.style.cursor = "move"), (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"), (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"), (t.style.cursor = e ? "grabbing" : "grab");
          }
        },
        unsetGrabCursor: function () {
          c.touch || (this.params.watchOverflow && this.isLocked) || (this.el.style.cursor = "");
        },
      },
      b = {
        appendSlide: function (e) {
          var t = this,
            i = t.$wrapperEl,
            n = t.params;
          if ((n.loop && t.loopDestroy(), "object" == typeof e && "length" in e)) for (var r = 0; r < e.length; r += 1) e[r] && i.append(e[r]);
          else i.append(e);
          n.loop && t.loopCreate(), (n.observer && c.observer) || t.update();
        },
        prependSlide: function (e) {
          var t = this,
            i = t.params,
            n = t.$wrapperEl,
            r = t.activeIndex;
          i.loop && t.loopDestroy();
          var a = r + 1;
          if ("object" == typeof e && "length" in e) {
            for (var s = 0; s < e.length; s += 1) e[s] && n.prepend(e[s]);
            a = r + e.length;
          } else n.prepend(e);
          i.loop && t.loopCreate(), (i.observer && c.observer) || t.update(), t.slideTo(a, 0, !1);
        },
        addSlide: function (e, t) {
          var i = this,
            n = i.$wrapperEl,
            r = i.params,
            a = i.activeIndex;
          r.loop && ((a -= i.loopedSlides), i.loopDestroy(), (i.slides = n.children("." + r.slideClass)));
          var s = i.slides.length;
          if (e <= 0) i.prependSlide(t);
          else if (s <= e) i.appendSlide(t);
          else {
            for (var o = e < a ? a + 1 : a, l = [], d = s - 1; e <= d; d -= 1) {
              var u = i.slides.eq(d);
              u.remove(), l.unshift(u);
            }
            if ("object" == typeof t && "length" in t) {
              for (var p = 0; p < t.length; p += 1) t[p] && n.append(t[p]);
              o = e < a ? a + t.length : a;
            } else n.append(t);
            for (var h = 0; h < l.length; h += 1) n.append(l[h]);
            r.loop && i.loopCreate(), (r.observer && c.observer) || i.update(), i.slideTo(r.loop ? o + i.loopedSlides : o, 0, !1);
          }
        },
        removeSlide: function (e) {
          var t = this,
            i = t.params,
            n = t.$wrapperEl,
            r = t.activeIndex;
          i.loop && ((r -= t.loopedSlides), t.loopDestroy(), (t.slides = n.children("." + i.slideClass)));
          var a,
            s = r;
          if ("object" == typeof e && "length" in e) {
            for (var o = 0; o < e.length; o += 1) t.slides[(a = e[o])] && t.slides.eq(a).remove(), a < s && (s -= 1);
            s = Math.max(s, 0);
          } else t.slides[(a = e)] && t.slides.eq(a).remove(), a < s && (s -= 1), (s = Math.max(s, 0));
          i.loop && t.loopCreate(), (i.observer && c.observer) || t.update(), t.slideTo(i.loop ? s + t.loopedSlides : s, 0, !1);
        },
        removeAllSlides: function () {
          for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
          this.removeSlide(e);
        },
      },
      x = (function () {
        var i = t.navigator.userAgent,
          n = { ios: !1, android: !1, androidChrome: !1, desktop: !1, windows: !1, iphone: !1, ipod: !1, ipad: !1, cordova: t.cordova || t.phonegap, phonegap: t.cordova || t.phonegap },
          r = i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
          a = i.match(/(Android);?[\s\/]+([\d.]+)?/),
          s = i.match(/(iPad).*OS\s([\d_]+)/),
          o = i.match(/(iPod)(.*OS\s([\d_]+))?/),
          l = !s && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if ((r && ((n.os = "windows"), (n.osVersion = r[2]), (n.windows = !0)), a && !r && ((n.os = "android"), (n.osVersion = a[2]), (n.android = !0), (n.androidChrome = 0 <= i.toLowerCase().indexOf("chrome"))), (s || l || o) && ((n.os = "ios"), (n.ios = !0)), l && !o && ((n.osVersion = l[2].replace(/_/g, ".")), (n.iphone = !0)), s && ((n.osVersion = s[2].replace(/_/g, ".")), (n.ipad = !0)), o && ((n.osVersion = o[3] ? o[3].replace(/_/g, ".") : null), (n.iphone = !0)), n.ios && n.osVersion && 0 <= i.indexOf("Version/") && "10" === n.osVersion.split(".")[0] && (n.osVersion = i.toLowerCase().split("version/")[1].split(" ")[0]), (n.desktop = !(n.os || n.android || n.webView)), (n.webView = (l || s || o) && i.match(/.*AppleWebKit(?!.*Safari)/i)), n.os && "ios" === n.os)) {
          var d = n.osVersion.split("."),
            u = e.querySelector('meta[name="viewport"]');
          n.minimalUi = !n.webView && (o || l) && (1 * d[0] == 7 ? 1 <= 1 * d[1] : 7 < 1 * d[0]) && u && 0 <= u.getAttribute("content").indexOf("minimal-ui");
        }
        return (n.pixelRatio = t.devicePixelRatio || 1), n;
      })();
    function _() {
      var e = this,
        t = e.params,
        i = e.el;
      if (!i || 0 !== i.offsetWidth) {
        t.breakpoints && e.setBreakpoint();
        var n = e.allowSlideNext,
          r = e.allowSlidePrev,
          a = e.snapGrid;
        if (((e.allowSlideNext = !0), (e.allowSlidePrev = !0), e.updateSize(), e.updateSlides(), t.freeMode)) {
          var s = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight();
        } else e.updateSlidesClasses(), e.slideTo(("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slides.length - 1 : e.activeIndex, 0, !1, !0);
        (e.allowSlidePrev = r), (e.allowSlideNext = n), e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
      }
    }
    var T = { init: !0, direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, preventInteractionOnTransition: !1, edgeSwipeDetection: !1, edgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: 0.02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", breakpoints: void 0, breakpointsInverse: !1, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: !0, centerInsufficientSlides: !1, watchOverflow: !1, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: 0.5, longSwipesMs: 300, followFinger: !0, allowTouchMove: !0, threshold: 0, touchMoveStopPropagation: !0, touchStartPreventDefault: !0, touchStartForcePreventDefault: !1, touchReleaseOnEdges: !1, uniqueNavElements: !0, resistance: !0, resistanceRatio: 0.85, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, loopFillGroupWithBlank: !1, allowSlidePrev: !0, allowSlideNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: !0, containerModifierClass: "swiper-container-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-invisible-blank", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", runCallbacksOnInit: !0 },
      S = {
        update: m,
        translate: v,
        transition: {
          setTransition: function (e, t) {
            this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            var i = this,
              n = i.activeIndex,
              r = i.previousIndex;
            i.params.autoHeight && i.updateAutoHeight();
            var a = t;
            if ((a || (a = r < n ? "next" : n < r ? "prev" : "reset"), i.emit("transitionStart"), e && n !== r)) {
              if ("reset" === a) return void i.emit("slideResetTransitionStart");
              i.emit("slideChangeTransitionStart"), i.emit("next" === a ? "slideNextTransitionStart" : "slidePrevTransitionStart");
            }
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            var i = this,
              n = i.activeIndex,
              r = i.previousIndex;
            (i.animating = !1), i.setTransition(0);
            var a = t;
            if ((a || (a = r < n ? "next" : n < r ? "prev" : "reset"), i.emit("transitionEnd"), e && n !== r)) {
              if ("reset" === a) return void i.emit("slideResetTransitionEnd");
              i.emit("slideChangeTransitionEnd"), i.emit("next" === a ? "slideNextTransitionEnd" : "slidePrevTransitionEnd");
            }
          },
        },
        slide: g,
        loop: y,
        grabCursor: w,
        manipulation: b,
        events: {
          attachEvents: function () {
            var i = this,
              r = i.params,
              a = i.touchEvents,
              s = i.el,
              o = i.wrapperEl;
            (i.onTouchStart = function (i) {
              var r = this,
                a = r.touchEventsData,
                s = r.params,
                o = r.touches;
              if (!r.animating || !s.preventInteractionOnTransition) {
                var l = i;
                if ((l.originalEvent && (l = l.originalEvent), (a.isTouchEvent = "touchstart" === l.type), (a.isTouchEvent || !("which" in l) || 3 !== l.which) && !((!a.isTouchEvent && "button" in l && 0 < l.button) || (a.isTouched && a.isMoved))))
                  if (s.noSwiping && n(l.target).closest(s.noSwipingSelector ? s.noSwipingSelector : "." + s.noSwipingClass)[0]) r.allowClick = !0;
                  else if (!s.swipeHandler || n(l).closest(s.swipeHandler)[0]) {
                    (o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX), (o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
                    var d = o.currentX,
                      c = o.currentY,
                      p = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
                    if ((!s.edgeSwipeDetection && !s.iOSEdgeSwipeDetection) || !(d <= p || d >= t.screen.width - p)) {
                      if ((u.extend(a, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }), (o.startX = d), (o.startY = c), (a.touchStartTime = u.now()), (r.allowClick = !0), r.updateSize(), (r.swipeDirection = void 0), 0 < s.threshold && (a.allowThresholdMove = !1), "touchstart" !== l.type)) {
                        var h = !0;
                        n(l.target).is(a.formElements) && (h = !1), e.activeElement && n(e.activeElement).is(a.formElements) && e.activeElement !== l.target && e.activeElement.blur(), (s.touchStartForcePreventDefault || (h && r.allowTouchMove && s.touchStartPreventDefault)) && l.preventDefault();
                      }
                      r.emit("touchStart", l);
                    }
                  }
              }
            }.bind(i)),
              (i.onTouchMove = function (t) {
                var i = this,
                  r = i.touchEventsData,
                  a = i.params,
                  s = i.touches,
                  o = i.rtlTranslate,
                  l = t;
                if ((l.originalEvent && (l = l.originalEvent), r.isTouched)) {
                  if (!r.isTouchEvent || "mousemove" !== l.type) {
                    var d = "touchmove" === l.type ? l.targetTouches[0].pageX : l.pageX,
                      c = "touchmove" === l.type ? l.targetTouches[0].pageY : l.pageY;
                    if (l.preventedByNestedSwiper) return (s.startX = d), void (s.startY = c);
                    if (!i.allowTouchMove) return (i.allowClick = !1), void (r.isTouched && (u.extend(s, { startX: d, startY: c, currentX: d, currentY: c }), (r.touchStartTime = u.now())));
                    if (r.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                      if (i.isVertical()) {
                        if ((c < s.startY && i.translate <= i.maxTranslate()) || (c > s.startY && i.translate >= i.minTranslate())) return (r.isTouched = !1), void (r.isMoved = !1);
                      } else if ((d < s.startX && i.translate <= i.maxTranslate()) || (d > s.startX && i.translate >= i.minTranslate())) return;
                    if (r.isTouchEvent && e.activeElement && l.target === e.activeElement && n(l.target).is(r.formElements)) return (r.isMoved = !0), void (i.allowClick = !1);
                    if ((r.allowTouchCallbacks && i.emit("touchMove", l), !(l.targetTouches && 1 < l.targetTouches.length))) {
                      (s.currentX = d), (s.currentY = c);
                      var p,
                        h = s.currentX - s.startX,
                        f = s.currentY - s.startY;
                      if (!(i.params.threshold && Math.sqrt(Math.pow(h, 2) + Math.pow(f, 2)) < i.params.threshold))
                        if ((void 0 === r.isScrolling && ((i.isHorizontal() && s.currentY === s.startY) || (i.isVertical() && s.currentX === s.startX) ? (r.isScrolling = !1) : 25 <= h * h + f * f && ((p = (180 * Math.atan2(Math.abs(f), Math.abs(h))) / Math.PI), (r.isScrolling = i.isHorizontal() ? p > a.touchAngle : 90 - p > a.touchAngle))), r.isScrolling && i.emit("touchMoveOpposite", l), void 0 === r.startMoving && ((s.currentX === s.startX && s.currentY === s.startY) || (r.startMoving = !0)), r.isScrolling)) r.isTouched = !1;
                        else if (r.startMoving) {
                          (i.allowClick = !1), l.preventDefault(), a.touchMoveStopPropagation && !a.nested && l.stopPropagation(), r.isMoved || (a.loop && i.loopFix(), (r.startTranslate = i.getTranslate()), i.setTransition(0), i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"), (r.allowMomentumBounce = !1), !a.grabCursor || (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) || i.setGrabCursor(!0), i.emit("sliderFirstMove", l)), i.emit("sliderMove", l), (r.isMoved = !0);
                          var m = i.isHorizontal() ? h : f;
                          (s.diff = m), (m *= a.touchRatio), o && (m = -m), (i.swipeDirection = 0 < m ? "prev" : "next"), (r.currentTranslate = m + r.startTranslate);
                          var v = !0,
                            g = a.resistanceRatio;
                          if ((a.touchReleaseOnEdges && (g = 0), 0 < m && r.currentTranslate > i.minTranslate() ? ((v = !1), a.resistance && (r.currentTranslate = i.minTranslate() - 1 + Math.pow(-i.minTranslate() + r.startTranslate + m, g))) : m < 0 && r.currentTranslate < i.maxTranslate() && ((v = !1), a.resistance && (r.currentTranslate = i.maxTranslate() + 1 - Math.pow(i.maxTranslate() - r.startTranslate - m, g))), v && (l.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !i.allowSlidePrev && "prev" === i.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), 0 < a.threshold)) {
                            if (!(Math.abs(m) > a.threshold || r.allowThresholdMove)) return void (r.currentTranslate = r.startTranslate);
                            if (!r.allowThresholdMove) return (r.allowThresholdMove = !0), (s.startX = s.currentX), (s.startY = s.currentY), (r.currentTranslate = r.startTranslate), void (s.diff = i.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY);
                          }
                          a.followFinger && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (i.updateActiveIndex(), i.updateSlidesClasses()), a.freeMode && (0 === r.velocities.length && r.velocities.push({ position: s[i.isHorizontal() ? "startX" : "startY"], time: r.touchStartTime }), r.velocities.push({ position: s[i.isHorizontal() ? "currentX" : "currentY"], time: u.now() })), i.updateProgress(r.currentTranslate), i.setTranslate(r.currentTranslate));
                        }
                    }
                  }
                } else r.startMoving && r.isScrolling && i.emit("touchMoveOpposite", l);
              }.bind(i)),
              (i.onTouchEnd = function (e) {
                var t = this,
                  i = t.touchEventsData,
                  n = t.params,
                  r = t.touches,
                  a = t.rtlTranslate,
                  s = t.$wrapperEl,
                  o = t.slidesGrid,
                  l = t.snapGrid,
                  d = e;
                if ((d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), (i.allowTouchCallbacks = !1), !i.isTouched)) return i.isMoved && n.grabCursor && t.setGrabCursor(!1), (i.isMoved = !1), void (i.startMoving = !1);
                n.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                var c,
                  p = u.now(),
                  h = p - i.touchStartTime;
                if (
                  (t.allowClick &&
                    (t.updateClickedSlide(d),
                    t.emit("tap", d),
                    h < 300 &&
                      300 < p - i.lastClickTime &&
                      (i.clickTimeout && clearTimeout(i.clickTimeout),
                      (i.clickTimeout = u.nextTick(function () {
                        t && !t.destroyed && t.emit("click", d);
                      }, 300))),
                    h < 300 && p - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", d))),
                  (i.lastClickTime = u.now()),
                  u.nextTick(function () {
                    t.destroyed || (t.allowClick = !0);
                  }),
                  !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === r.diff || i.currentTranslate === i.startTranslate)
                )
                  return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
                if (((i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1), (c = n.followFinger ? (a ? t.translate : -t.translate) : -i.currentTranslate), n.freeMode)) {
                  if (c < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                  if (c > -t.maxTranslate()) return void t.slideTo(t.slides.length < l.length ? l.length - 1 : t.slides.length - 1);
                  if (n.freeModeMomentum) {
                    if (1 < i.velocities.length) {
                      var f = i.velocities.pop(),
                        m = i.velocities.pop(),
                        v = f.time - m.time;
                      (t.velocity = (f.position - m.position) / v), (t.velocity /= 2), Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0), (150 < v || 300 < u.now() - f.time) && (t.velocity = 0);
                    } else t.velocity = 0;
                    (t.velocity *= n.freeModeMomentumVelocityRatio), (i.velocities.length = 0);
                    var g = 1e3 * n.freeModeMomentumRatio,
                      y = t.translate + t.velocity * g;
                    a && (y = -y);
                    var w,
                      b,
                      x = !1,
                      _ = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
                    if (y < t.maxTranslate()) n.freeModeMomentumBounce ? (y + t.maxTranslate() < -_ && (y = t.maxTranslate() - _), (w = t.maxTranslate()), (x = !0), (i.allowMomentumBounce = !0)) : (y = t.maxTranslate()), n.loop && n.centeredSlides && (b = !0);
                    else if (y > t.minTranslate()) n.freeModeMomentumBounce ? (y - t.minTranslate() > _ && (y = t.minTranslate() + _), (w = t.minTranslate()), (x = !0), (i.allowMomentumBounce = !0)) : (y = t.minTranslate()), n.loop && n.centeredSlides && (b = !0);
                    else if (n.freeModeSticky) {
                      for (var T, S = 0; S < l.length; S += 1)
                        if (l[S] > -y) {
                          T = S;
                          break;
                        }
                      y = -(y = Math.abs(l[T] - y) < Math.abs(l[T - 1] - y) || "next" === t.swipeDirection ? l[T] : l[T - 1]);
                    }
                    if (
                      (b &&
                        t.once("transitionEnd", function () {
                          t.loopFix();
                        }),
                      0 !== t.velocity)
                    )
                      g = a ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity);
                    else if (n.freeModeSticky) return void t.slideToClosest();
                    n.freeModeMomentumBounce && x
                      ? (t.updateProgress(w),
                        t.setTransition(g),
                        t.setTranslate(y),
                        t.transitionStart(!0, t.swipeDirection),
                        (t.animating = !0),
                        s.transitionEnd(function () {
                          t &&
                            !t.destroyed &&
                            i.allowMomentumBounce &&
                            (t.emit("momentumBounce"),
                            t.setTransition(n.speed),
                            t.setTranslate(w),
                            s.transitionEnd(function () {
                              t && !t.destroyed && t.transitionEnd();
                            }));
                        }))
                      : t.velocity
                      ? (t.updateProgress(y),
                        t.setTransition(g),
                        t.setTranslate(y),
                        t.transitionStart(!0, t.swipeDirection),
                        t.animating ||
                          ((t.animating = !0),
                          s.transitionEnd(function () {
                            t && !t.destroyed && t.transitionEnd();
                          })))
                      : t.updateProgress(y),
                      t.updateActiveIndex(),
                      t.updateSlidesClasses();
                  } else if (n.freeModeSticky) return void t.slideToClosest();
                  (!n.freeModeMomentum || h >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
                } else {
                  for (var C = 0, E = t.slidesSizesGrid[0], M = 0; M < o.length; M += n.slidesPerGroup) void 0 !== o[M + n.slidesPerGroup] ? c >= o[M] && c < o[M + n.slidesPerGroup] && (E = o[(C = M) + n.slidesPerGroup] - o[M]) : c >= o[M] && ((C = M), (E = o[o.length - 1] - o[o.length - 2]));
                  var P = (c - o[C]) / E;
                  if (h > n.longSwipesMs) {
                    if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && t.slideTo(P >= n.longSwipesRatio ? C + n.slidesPerGroup : C), "prev" === t.swipeDirection && t.slideTo(P > 1 - n.longSwipesRatio ? C + n.slidesPerGroup : C);
                  } else {
                    if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && t.slideTo(C + n.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(C);
                  }
                }
              }.bind(i)),
              (i.onClick = function (e) {
                this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
              }.bind(i));
            var l = "container" === r.touchEventsTarget ? s : o,
              d = !!r.nested;
            if (c.touch || (!c.pointerEvents && !c.prefixedPointerEvents)) {
              if (c.touch) {
                var p = !("touchstart" !== a.start || !c.passiveListener || !r.passiveListeners) && { passive: !0, capture: !1 };
                l.addEventListener(a.start, i.onTouchStart, p), l.addEventListener(a.move, i.onTouchMove, c.passiveListener ? { passive: !1, capture: d } : d), l.addEventListener(a.end, i.onTouchEnd, p);
              }
              ((r.simulateTouch && !x.ios && !x.android) || (r.simulateTouch && !c.touch && x.ios)) && (l.addEventListener("mousedown", i.onTouchStart, !1), e.addEventListener("mousemove", i.onTouchMove, d), e.addEventListener("mouseup", i.onTouchEnd, !1));
            } else l.addEventListener(a.start, i.onTouchStart, !1), e.addEventListener(a.move, i.onTouchMove, d), e.addEventListener(a.end, i.onTouchEnd, !1);
            (r.preventClicks || r.preventClicksPropagation) && l.addEventListener("click", i.onClick, !0), i.on(x.ios || x.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", _, !0);
          },
          detachEvents: function () {
            var t = this,
              i = t.params,
              n = t.touchEvents,
              r = "container" === i.touchEventsTarget ? t.el : t.wrapperEl,
              a = !!i.nested;
            if (c.touch || (!c.pointerEvents && !c.prefixedPointerEvents)) {
              if (c.touch) {
                var s = !("onTouchStart" !== n.start || !c.passiveListener || !i.passiveListeners) && { passive: !0, capture: !1 };
                r.removeEventListener(n.start, t.onTouchStart, s), r.removeEventListener(n.move, t.onTouchMove, a), r.removeEventListener(n.end, t.onTouchEnd, s);
              }
              ((i.simulateTouch && !x.ios && !x.android) || (i.simulateTouch && !c.touch && x.ios)) && (r.removeEventListener("mousedown", t.onTouchStart, !1), e.removeEventListener("mousemove", t.onTouchMove, a), e.removeEventListener("mouseup", t.onTouchEnd, !1));
            } else r.removeEventListener(n.start, t.onTouchStart, !1), e.removeEventListener(n.move, t.onTouchMove, a), e.removeEventListener(n.end, t.onTouchEnd, !1);
            (i.preventClicks || i.preventClicksPropagation) && r.removeEventListener("click", t.onClick, !0), t.off(x.ios || x.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", _);
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            var e = this,
              t = e.activeIndex,
              i = e.initialized,
              n = e.loopedSlides;
            void 0 === n && (n = 0);
            var r = e.params,
              a = r.breakpoints;
            if (a && (!a || 0 !== Object.keys(a).length)) {
              var s = e.getBreakpoint(a);
              if (s && e.currentBreakpoint !== s) {
                var o = s in a ? a[s] : void 0;
                o &&
                  ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function (e) {
                    var t = o[e];
                    void 0 !== t && (o[e] = "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t) ? ("slidesPerView" === e ? parseFloat(t) : parseInt(t, 10)) : "auto");
                  });
                var l = o || e.originalParams,
                  d = l.direction && l.direction !== r.direction,
                  c = r.loop && (l.slidesPerView !== r.slidesPerView || d);
                d && i && e.changeDirection(), u.extend(e.params, l), u.extend(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }), (e.currentBreakpoint = s), c && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - n + e.loopedSlides, 0, !1)), e.emit("breakpoint", l);
              }
            }
          },
          getBreakpoint: function (e) {
            if (e) {
              var i = !1,
                n = [];
              Object.keys(e).forEach(function (e) {
                n.push(e);
              }),
                n.sort(function (e, t) {
                  return parseInt(e, 10) - parseInt(t, 10);
                });
              for (var r = 0; r < n.length; r += 1) {
                var a = n[r];
                this.params.breakpointsInverse ? a <= t.innerWidth && (i = a) : a >= t.innerWidth && !i && (i = a);
              }
              return i || "max";
            }
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            var e = this,
              t = e.isLocked;
            (e.isLocked = 1 === e.snapGrid.length), (e.allowSlideNext = !e.isLocked), (e.allowSlidePrev = !e.isLocked), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && ((e.isEnd = !1), e.navigation.update());
          },
        },
        classes: {
          addClasses: function () {
            var e = this.classNames,
              t = this.params,
              i = this.rtl,
              n = this.$el,
              r = [];
            r.push("initialized"),
              r.push(t.direction),
              t.freeMode && r.push("free-mode"),
              c.flexbox || r.push("no-flexbox"),
              t.autoHeight && r.push("autoheight"),
              i && r.push("rtl"),
              1 < t.slidesPerColumn && r.push("multirow"),
              x.android && r.push("android"),
              x.ios && r.push("ios"),
              (p.isIE || p.isEdge) && (c.pointerEvents || c.prefixedPointerEvents) && r.push("wp8-" + t.direction),
              r.forEach(function (i) {
                e.push(t.containerModifierClass + i);
              }),
              n.addClass(e.join(" "));
          },
          removeClasses: function () {
            this.$el.removeClass(this.classNames.join(" "));
          },
        },
        images: {
          loadImage: function (e, i, n, r, a, s) {
            var o;
            function l() {
              s && s();
            }
            e.complete && a ? l() : i ? (((o = new t.Image()).onload = l), (o.onerror = l), r && (o.sizes = r), n && (o.srcset = n), i && (o.src = i)) : l();
          },
          preloadImages: function () {
            var e = this;
            function t() {
              null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (var i = 0; i < e.imagesToLoad.length; i += 1) {
              var n = e.imagesToLoad[i];
              e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t);
            }
          },
        },
      },
      C = {},
      E = (function (e) {
        function t() {
          for (var i, r, a, s = [], o = arguments.length; o--; ) s[o] = arguments[o];
          1 === s.length && s[0].constructor && s[0].constructor === Object ? (a = s[0]) : ((r = (i = s)[0]), (a = i[1])),
            a || (a = {}),
            (a = u.extend({}, a)),
            r && !a.el && (a.el = r),
            e.call(this, a),
            Object.keys(S).forEach(function (e) {
              Object.keys(S[e]).forEach(function (i) {
                t.prototype[i] || (t.prototype[i] = S[e][i]);
              });
            });
          var l = this;
          void 0 === l.modules && (l.modules = {}),
            Object.keys(l.modules).forEach(function (e) {
              var t = l.modules[e];
              if (t.params) {
                var i = Object.keys(t.params)[0],
                  n = t.params[i];
                if ("object" != typeof n || null === n) return;
                if (!(i in a) || !("enabled" in n)) return;
                !0 === a[i] && (a[i] = { enabled: !0 }), "object" != typeof a[i] || "enabled" in a[i] || (a[i].enabled = !0), a[i] || (a[i] = { enabled: !1 });
              }
            });
          var d = u.extend({}, T);
          l.useModulesParams(d), (l.params = u.extend({}, d, C, a)), (l.originalParams = u.extend({}, l.params)), (l.passedParams = u.extend({}, a));
          var p = (l.$ = n)(l.params.el);
          if ((r = p[0])) {
            if (1 < p.length) {
              var h = [];
              return (
                p.each(function (e, i) {
                  var n = u.extend({}, a, { el: i });
                  h.push(new t(n));
                }),
                h
              );
            }
            (r.swiper = l), p.data("swiper", l);
            var f,
              m,
              v = p.children("." + l.params.wrapperClass);
            return (
              u.extend(l, {
                $el: p,
                el: r,
                $wrapperEl: v,
                wrapperEl: v[0],
                classNames: [],
                slides: n(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function () {
                  return "horizontal" === l.params.direction;
                },
                isVertical: function () {
                  return "vertical" === l.params.direction;
                },
                rtl: "rtl" === r.dir.toLowerCase() || "rtl" === p.css("direction"),
                rtlTranslate: "horizontal" === l.params.direction && ("rtl" === r.dir.toLowerCase() || "rtl" === p.css("direction")),
                wrongRTL: "-webkit-box" === v.css("display"),
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: l.params.allowSlideNext,
                allowSlidePrev: l.params.allowSlidePrev,
                touchEvents: ((f = ["touchstart", "touchmove", "touchend"]), (m = ["mousedown", "mousemove", "mouseup"]), c.pointerEvents ? (m = ["pointerdown", "pointermove", "pointerup"]) : c.prefixedPointerEvents && (m = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), (l.touchEventsTouch = { start: f[0], move: f[1], end: f[2] }), (l.touchEventsDesktop = { start: m[0], move: m[1], end: m[2] }), c.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
                touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, formElements: "input, select, option, textarea, button, video", lastClickTime: u.now(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 },
                allowClick: !0,
                allowTouchMove: l.params.allowTouchMove,
                touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                imagesToLoad: [],
                imagesLoaded: 0,
              }),
              l.useModules(),
              l.params.init && l.init(),
              l
            );
          }
        }
        e && (t.__proto__ = e);
        var i = { extendedDefaults: { configurable: !0 }, defaults: { configurable: !0 }, Class: { configurable: !0 }, $: { configurable: !0 } };
        return (
          (((t.prototype = Object.create(e && e.prototype)).constructor = t).prototype.slidesPerViewDynamic = function () {
            var e = this,
              t = e.slides,
              i = e.slidesGrid,
              n = e.size,
              r = e.activeIndex,
              a = 1;
            if (e.params.centeredSlides) {
              for (var s, o = t[r].swiperSlideSize, l = r + 1; l < t.length; l += 1) t[l] && !s && ((a += 1), n < (o += t[l].swiperSlideSize) && (s = !0));
              for (var d = r - 1; 0 <= d; d -= 1) t[d] && !s && ((a += 1), n < (o += t[d].swiperSlideSize) && (s = !0));
            } else for (var u = r + 1; u < t.length; u += 1) i[u] - i[r] < n && (a += 1);
            return a;
          }),
          (t.prototype.update = function () {
            var e = this;
            if (e && !e.destroyed) {
              var t = e.snapGrid,
                i = e.params;
              i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (n(), e.params.autoHeight && e.updateAutoHeight()) : e.slideTo(("auto" === e.params.slidesPerView || 1 < e.params.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slides.length - 1 : e.activeIndex, 0, !1, !0) || n(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
            }
            function n() {
              var t = Math.min(Math.max(e.rtlTranslate ? -1 * e.translate : e.translate, e.maxTranslate()), e.minTranslate());
              e.setTranslate(t), e.updateActiveIndex(), e.updateSlidesClasses();
            }
          }),
          (t.prototype.changeDirection = function (e, t) {
            void 0 === t && (t = !0);
            var i = this,
              n = i.params.direction;
            return (
              e || (e = "horizontal" === n ? "vertical" : "horizontal"),
              e === n ||
                ("horizontal" !== e && "vertical" !== e) ||
                ("vertical" === n && (i.$el.removeClass(i.params.containerModifierClass + "vertical wp8-vertical").addClass("" + i.params.containerModifierClass + e), (p.isIE || p.isEdge) && (c.pointerEvents || c.prefixedPointerEvents) && i.$el.addClass(i.params.containerModifierClass + "wp8-" + e)),
                "horizontal" === n && (i.$el.removeClass(i.params.containerModifierClass + "horizontal wp8-horizontal").addClass("" + i.params.containerModifierClass + e), (p.isIE || p.isEdge) && (c.pointerEvents || c.prefixedPointerEvents) && i.$el.addClass(i.params.containerModifierClass + "wp8-" + e)),
                (i.params.direction = e),
                i.slides.each(function (t, i) {
                  "vertical" === e ? (i.style.width = "") : (i.style.height = "");
                }),
                i.emit("changeDirection"),
                t && i.update()),
              i
            );
          }),
          (t.prototype.init = function () {
            var e = this;
            e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.slideTo(e.params.loop ? e.params.initialSlide + e.loopedSlides : e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), (e.initialized = !0), e.emit("init"));
          }),
          (t.prototype.destroy = function (e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            var i = this,
              n = i.params,
              r = i.$el,
              a = i.$wrapperEl,
              s = i.slides;
            return (
              void 0 === i.params ||
                i.destroyed ||
                (i.emit("beforeDestroy"),
                (i.initialized = !1),
                i.detachEvents(),
                n.loop && i.loopDestroy(),
                t && (i.removeClasses(), r.removeAttr("style"), a.removeAttr("style"), s && s.length && s.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),
                i.emit("destroy"),
                Object.keys(i.eventsListeners).forEach(function (e) {
                  i.off(e);
                }),
                !1 !== e && ((i.$el[0].swiper = null), i.$el.data("swiper", null), u.deleteProps(i)),
                (i.destroyed = !0)),
              null
            );
          }),
          (t.extendDefaults = function (e) {
            u.extend(C, e);
          }),
          (i.extendedDefaults.get = function () {
            return C;
          }),
          (i.defaults.get = function () {
            return T;
          }),
          (i.Class.get = function () {
            return e;
          }),
          (i.$.get = function () {
            return n;
          }),
          Object.defineProperties(t, i),
          t
        );
      })(h),
      M = { name: "device", proto: { device: x }, static: { device: x } },
      P = { name: "support", proto: { support: c }, static: { support: c } },
      k = { name: "browser", proto: { browser: p }, static: { browser: p } },
      z = {
        name: "resize",
        create: function () {
          var e = this;
          u.extend(e, {
            resize: {
              resizeHandler: function () {
                e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
              },
              orientationChangeHandler: function () {
                e && !e.destroyed && e.initialized && e.emit("orientationchange");
              },
            },
          });
        },
        on: {
          init: function () {
            t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler);
          },
          destroy: function () {
            t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
          },
        },
      },
      A = {
        func: t.MutationObserver || t.WebkitMutationObserver,
        attach: function (e, i) {
          void 0 === i && (i = {});
          var n = this,
            r = new A.func(function (e) {
              if (1 !== e.length) {
                var i = function () {
                  n.emit("observerUpdate", e[0]);
                };
                t.requestAnimationFrame ? t.requestAnimationFrame(i) : t.setTimeout(i, 0);
              } else n.emit("observerUpdate", e[0]);
            });
          r.observe(e, { attributes: void 0 === i.attributes || i.attributes, childList: void 0 === i.childList || i.childList, characterData: void 0 === i.characterData || i.characterData }), n.observer.observers.push(r);
        },
        init: function () {
          var e = this;
          if (c.observer && e.params.observer) {
            if (e.params.observeParents) for (var t = e.$el.parents(), i = 0; i < t.length; i += 1) e.observer.attach(t[i]);
            e.observer.attach(e.$el[0], { childList: e.params.observeSlideChildren }), e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
          }
        },
        destroy: function () {
          this.observer.observers.forEach(function (e) {
            e.disconnect();
          }),
            (this.observer.observers = []);
        },
      },
      O = {
        name: "observer",
        params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
        create: function () {
          u.extend(this, { observer: { init: A.init.bind(this), attach: A.attach.bind(this), destroy: A.destroy.bind(this), observers: [] } });
        },
        on: {
          init: function () {
            this.observer.init();
          },
          destroy: function () {
            this.observer.destroy();
          },
        },
      },
      D = {
        update: function (e) {
          var t = this,
            i = t.params,
            n = i.slidesPerView,
            r = i.slidesPerGroup,
            a = i.centeredSlides,
            s = t.params.virtual,
            o = s.addSlidesBefore,
            l = s.addSlidesAfter,
            d = t.virtual,
            c = d.from,
            p = d.to,
            h = d.slides,
            f = d.slidesGrid,
            m = d.renderSlide,
            v = d.offset;
          t.updateActiveIndex();
          var g,
            y,
            w,
            b = t.activeIndex || 0;
          (g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"), a ? ((y = Math.floor(n / 2) + r + o), (w = Math.floor(n / 2) + r + l)) : ((y = n + (r - 1) + o), (w = r + l));
          var x = Math.max((b || 0) - w, 0),
            _ = Math.min((b || 0) + y, h.length - 1),
            T = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);
          function S() {
            t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
          }
          if ((u.extend(t.virtual, { from: x, to: _, offset: T, slidesGrid: t.slidesGrid }), c === x && p === _ && !e)) return t.slidesGrid !== f && T !== v && t.slides.css(g, T + "px"), void t.updateProgress();
          if (t.params.virtual.renderExternal)
            return (
              t.params.virtual.renderExternal.call(t, {
                offset: T,
                from: x,
                to: _,
                slides: (function () {
                  for (var e = [], t = x; t <= _; t += 1) e.push(h[t]);
                  return e;
                })(),
              }),
              void S()
            );
          var C = [],
            E = [];
          if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
          else for (var M = c; M <= p; M += 1) (M < x || _ < M) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
          for (var P = 0; P < h.length; P += 1) x <= P && P <= _ && (void 0 === p || e ? E.push(P) : (p < P && E.push(P), P < c && C.push(P)));
          E.forEach(function (e) {
            t.$wrapperEl.append(m(h[e], e));
          }),
            C.sort(function (e, t) {
              return t - e;
            }).forEach(function (e) {
              t.$wrapperEl.prepend(m(h[e], e));
            }),
            t.$wrapperEl.children(".swiper-slide").css(g, T + "px"),
            S();
        },
        renderSlide: function (e, t) {
          var i = this,
            r = i.params.virtual;
          if (r.cache && i.virtual.cache[t]) return i.virtual.cache[t];
          var a = n(r.renderSlide ? r.renderSlide.call(i, e, t) : '<div class="' + i.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
          return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), r.cache && (i.virtual.cache[t] = a), a;
        },
        appendSlide: function (e) {
          if ("object" == typeof e && "length" in e) for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);
          else this.virtual.slides.push(e);
          this.virtual.update(!0);
        },
        prependSlide: function (e) {
          var t = this,
            i = t.activeIndex,
            n = i + 1,
            r = 1;
          if (Array.isArray(e)) {
            for (var a = 0; a < e.length; a += 1) e[a] && t.virtual.slides.unshift(e[a]);
            (n = i + e.length), (r = e.length);
          } else t.virtual.slides.unshift(e);
          if (t.params.virtual.cache) {
            var s = t.virtual.cache,
              o = {};
            Object.keys(s).forEach(function (e) {
              o[parseInt(e, 10) + r] = s[e];
            }),
              (t.virtual.cache = o);
          }
          t.virtual.update(!0), t.slideTo(n, 0);
        },
        removeSlide: function (e) {
          var t = this;
          if (null != e) {
            var i = t.activeIndex;
            if (Array.isArray(e)) for (var n = e.length - 1; 0 <= n; n -= 1) t.virtual.slides.splice(e[n], 1), t.params.virtual.cache && delete t.virtual.cache[e[n]], e[n] < i && (i -= 1), (i = Math.max(i, 0));
            else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < i && (i -= 1), (i = Math.max(i, 0));
            t.virtual.update(!0), t.slideTo(i, 0);
          }
        },
        removeAllSlides: function () {
          var e = this;
          (e.virtual.slides = []), e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0);
        },
      },
      L = {
        name: "virtual",
        params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, addSlidesBefore: 0, addSlidesAfter: 0 } },
        create: function () {
          var e = this;
          u.extend(e, { virtual: { update: D.update.bind(e), appendSlide: D.appendSlide.bind(e), prependSlide: D.prependSlide.bind(e), removeSlide: D.removeSlide.bind(e), removeAllSlides: D.removeAllSlides.bind(e), renderSlide: D.renderSlide.bind(e), slides: e.params.virtual.slides, cache: {} } });
        },
        on: {
          beforeInit: function () {
            var e = this;
            if (e.params.virtual.enabled) {
              e.classNames.push(e.params.containerModifierClass + "virtual");
              var t = { watchSlidesProgress: !0 };
              u.extend(e.params, t), u.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update();
            }
          },
          setTranslate: function () {
            this.params.virtual.enabled && this.virtual.update();
          },
        },
      },
      I = {
        handle: function (i) {
          var n = this,
            r = n.rtlTranslate,
            a = i;
          a.originalEvent && (a = a.originalEvent);
          var s = a.keyCode || a.charCode;
          if (!n.allowSlideNext && ((n.isHorizontal() && 39 === s) || (n.isVertical() && 40 === s))) return !1;
          if (!n.allowSlidePrev && ((n.isHorizontal() && 37 === s) || (n.isVertical() && 38 === s))) return !1;
          if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || (e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase())))) {
            if (n.params.keyboard.onlyInViewport && (37 === s || 39 === s || 38 === s || 40 === s)) {
              var o = !1;
              if (0 < n.$el.parents("." + n.params.slideClass).length && 0 === n.$el.parents("." + n.params.slideActiveClass).length) return;
              var l = t.innerWidth,
                d = t.innerHeight,
                u = n.$el.offset();
              r && (u.left -= n.$el[0].scrollLeft);
              for (
                var c = [
                    [u.left, u.top],
                    [u.left + n.width, u.top],
                    [u.left, u.top + n.height],
                    [u.left + n.width, u.top + n.height],
                  ],
                  p = 0;
                p < c.length;
                p += 1
              ) {
                var h = c[p];
                0 <= h[0] && h[0] <= l && 0 <= h[1] && h[1] <= d && (o = !0);
              }
              if (!o) return;
            }
            n.isHorizontal() ? ((37 !== s && 39 !== s) || (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)), ((39 === s && !r) || (37 === s && r)) && n.slideNext(), ((37 === s && !r) || (39 === s && r)) && n.slidePrev()) : ((38 !== s && 40 !== s) || (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)), 40 === s && n.slideNext(), 38 === s && n.slidePrev()), n.emit("keyPress", s);
          }
        },
        enable: function () {
          this.keyboard.enabled || (n(e).on("keydown", this.keyboard.handle), (this.keyboard.enabled = !0));
        },
        disable: function () {
          this.keyboard.enabled && (n(e).off("keydown", this.keyboard.handle), (this.keyboard.enabled = !1));
        },
      },
      N = {
        name: "keyboard",
        params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
        create: function () {
          u.extend(this, { keyboard: { enabled: !1, enable: I.enable.bind(this), disable: I.disable.bind(this), handle: I.handle.bind(this) } });
        },
        on: {
          init: function () {
            this.params.keyboard.enabled && this.keyboard.enable();
          },
          destroy: function () {
            this.keyboard.enabled && this.keyboard.disable();
          },
        },
      },
      R = {
        lastScrollTime: u.now(),
        event:
          -1 < t.navigator.userAgent.indexOf("firefox")
            ? "DOMMouseScroll"
            : (function () {
                var t = "onwheel",
                  i = t in e;
                if (!i) {
                  var n = e.createElement("div");
                  n.setAttribute(t, "return;"), (i = "function" == typeof n[t]);
                }
                return !i && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (i = e.implementation.hasFeature("Events.wheel", "3.0")), i;
              })()
            ? "wheel"
            : "mousewheel",
        normalize: function (e) {
          var t = 0,
            i = 0,
            n = 0,
            r = 0;
          return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = i), (i = 0)), (n = 10 * t), (r = 10 * i), "deltaY" in e && (r = e.deltaY), "deltaX" in e && (n = e.deltaX), (n || r) && e.deltaMode && (1 === e.deltaMode ? ((n *= 40), (r *= 40)) : ((n *= 800), (r *= 800))), n && !t && (t = n < 1 ? -1 : 1), r && !i && (i = r < 1 ? -1 : 1), { spinX: t, spinY: i, pixelX: n, pixelY: r };
        },
        handleMouseEnter: function () {
          this.mouseEntered = !0;
        },
        handleMouseLeave: function () {
          this.mouseEntered = !1;
        },
        handle: function (e) {
          var i = e,
            n = this,
            r = n.params.mousewheel;
          if (!n.mouseEntered && !r.releaseOnEdges) return !0;
          i.originalEvent && (i = i.originalEvent);
          var a = 0,
            s = n.rtlTranslate ? -1 : 1,
            o = R.normalize(i);
          if (r.forceToAxis)
            if (n.isHorizontal()) {
              if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
              a = o.pixelX * s;
            } else {
              if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
              a = o.pixelY;
            }
          else a = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * s : -o.pixelY;
          if (0 === a) return !0;
          if ((r.invert && (a = -a), n.params.freeMode)) {
            n.params.loop && n.loopFix();
            var l = n.getTranslate() + a * r.sensitivity,
              d = n.isBeginning,
              c = n.isEnd;
            if (
              (l >= n.minTranslate() && (l = n.minTranslate()),
              l <= n.maxTranslate() && (l = n.maxTranslate()),
              n.setTransition(0),
              n.setTranslate(l),
              n.updateProgress(),
              n.updateActiveIndex(),
              n.updateSlidesClasses(),
              ((!d && n.isBeginning) || (!c && n.isEnd)) && n.updateSlidesClasses(),
              n.params.freeModeSticky &&
                (clearTimeout(n.mousewheel.timeout),
                (n.mousewheel.timeout = u.nextTick(function () {
                  n.slideToClosest();
                }, 300))),
              n.emit("scroll", i),
              n.params.autoplay && n.params.autoplayDisableOnInteraction && n.autoplay.stop(),
              l === n.minTranslate() || l === n.maxTranslate())
            )
              return !0;
          } else {
            if (60 < u.now() - n.mousewheel.lastScrollTime)
              if (a < 0)
                if ((n.isEnd && !n.params.loop) || n.animating) {
                  if (r.releaseOnEdges) return !0;
                } else n.slideNext(), n.emit("scroll", i);
              else if ((n.isBeginning && !n.params.loop) || n.animating) {
                if (r.releaseOnEdges) return !0;
              } else n.slidePrev(), n.emit("scroll", i);
            n.mousewheel.lastScrollTime = new t.Date().getTime();
          }
          return i.preventDefault ? i.preventDefault() : (i.returnValue = !1), !1;
        },
        enable: function () {
          var e = this;
          if (!R.event) return !1;
          if (e.mousewheel.enabled) return !1;
          var t = e.$el;
          return "container" !== e.params.mousewheel.eventsTarged && (t = n(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(R.event, e.mousewheel.handle), (e.mousewheel.enabled = !0);
        },
        disable: function () {
          var e = this;
          if (!R.event) return !1;
          if (!e.mousewheel.enabled) return !1;
          var t = e.$el;
          return "container" !== e.params.mousewheel.eventsTarged && (t = n(e.params.mousewheel.eventsTarged)), t.off(R.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1);
        },
      },
      B = {
        update: function () {
          var e = this,
            t = e.params.navigation;
          if (!e.params.loop) {
            var i = e.navigation,
              n = i.$nextEl,
              r = i.$prevEl;
            r && 0 < r.length && (e.isBeginning ? r.addClass(t.disabledClass) : r.removeClass(t.disabledClass), r[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), n && 0 < n.length && (e.isEnd ? n.addClass(t.disabledClass) : n.removeClass(t.disabledClass), n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass));
          }
        },
        onPrevClick: function (e) {
          e.preventDefault(), (this.isBeginning && !this.params.loop) || this.slidePrev();
        },
        onNextClick: function (e) {
          e.preventDefault(), (this.isEnd && !this.params.loop) || this.slideNext();
        },
        init: function () {
          var e,
            t,
            i = this,
            r = i.params.navigation;
          (r.nextEl || r.prevEl) && (r.nextEl && ((e = n(r.nextEl)), i.params.uniqueNavElements && "string" == typeof r.nextEl && 1 < e.length && 1 === i.$el.find(r.nextEl).length && (e = i.$el.find(r.nextEl))), r.prevEl && ((t = n(r.prevEl)), i.params.uniqueNavElements && "string" == typeof r.prevEl && 1 < t.length && 1 === i.$el.find(r.prevEl).length && (t = i.$el.find(r.prevEl))), e && 0 < e.length && e.on("click", i.navigation.onNextClick), t && 0 < t.length && t.on("click", i.navigation.onPrevClick), u.extend(i.navigation, { $nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0] }));
        },
        destroy: function () {
          var e = this,
            t = e.navigation,
            i = t.$nextEl,
            n = t.$prevEl;
          i && i.length && (i.off("click", e.navigation.onNextClick), i.removeClass(e.params.navigation.disabledClass)), n && n.length && (n.off("click", e.navigation.onPrevClick), n.removeClass(e.params.navigation.disabledClass));
        },
      },
      F = {
        update: function () {
          var e = this,
            t = e.rtl,
            i = e.params.pagination;
          if (i.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
            var r,
              a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
              s = e.pagination.$el,
              o = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
            if ((e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides), o - 1 < r && (r -= o), r < 0 && "bullets" !== e.params.paginationType && (r = o + r)) : (r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0), "bullets" === i.type && e.pagination.bullets && 0 < e.pagination.bullets.length)) {
              var l,
                d,
                u,
                c = e.pagination.bullets;
              if ((i.dynamicBullets && ((e.pagination.bulletSize = c.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)), s.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (i.dynamicMainBullets + 4) + "px"), 1 < i.dynamicMainBullets && void 0 !== e.previousIndex && ((e.pagination.dynamicBulletIndex += r - e.previousIndex), e.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1 ? (e.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1) : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), (u = ((d = (l = r - e.pagination.dynamicBulletIndex) + (Math.min(c.length, i.dynamicMainBullets) - 1)) + l) / 2)), c.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev " + i.bulletActiveClass + "-main"), 1 < s.length))
                c.each(function (e, t) {
                  var a = n(t),
                    s = a.index();
                  s === r && a.addClass(i.bulletActiveClass),
                    i.dynamicBullets &&
                      (l <= s && s <= d && a.addClass(i.bulletActiveClass + "-main"),
                      s === l &&
                        a
                          .prev()
                          .addClass(i.bulletActiveClass + "-prev")
                          .prev()
                          .addClass(i.bulletActiveClass + "-prev-prev"),
                      s === d &&
                        a
                          .next()
                          .addClass(i.bulletActiveClass + "-next")
                          .next()
                          .addClass(i.bulletActiveClass + "-next-next"));
                });
              else if ((c.eq(r).addClass(i.bulletActiveClass), i.dynamicBullets)) {
                for (var p = c.eq(l), h = c.eq(d), f = l; f <= d; f += 1) c.eq(f).addClass(i.bulletActiveClass + "-main");
                p
                  .prev()
                  .addClass(i.bulletActiveClass + "-prev")
                  .prev()
                  .addClass(i.bulletActiveClass + "-prev-prev"),
                  h
                    .next()
                    .addClass(i.bulletActiveClass + "-next")
                    .next()
                    .addClass(i.bulletActiveClass + "-next-next");
              }
              if (i.dynamicBullets) {
                var m = Math.min(c.length, i.dynamicMainBullets + 4),
                  v = (e.pagination.bulletSize * m - e.pagination.bulletSize) / 2 - u * e.pagination.bulletSize,
                  g = t ? "right" : "left";
                c.css(e.isHorizontal() ? g : "top", v + "px");
              }
            }
            if (("fraction" === i.type && (s.find("." + i.currentClass).text(i.formatFractionCurrent(r + 1)), s.find("." + i.totalClass).text(i.formatFractionTotal(o))), "progressbar" === i.type)) {
              var y;
              y = i.progressbarOpposite ? (e.isHorizontal() ? "vertical" : "horizontal") : e.isHorizontal() ? "horizontal" : "vertical";
              var w = (r + 1) / o,
                b = 1,
                x = 1;
              "horizontal" === y ? (b = w) : (x = w),
                s
                  .find("." + i.progressbarFillClass)
                  .transform("translate3d(0,0,0) scaleX(" + b + ") scaleY(" + x + ")")
                  .transition(e.params.speed);
            }
            "custom" === i.type && i.renderCustom ? (s.html(i.renderCustom(e, r + 1, o)), e.emit("paginationRender", e, s[0])) : e.emit("paginationUpdate", e, s[0]), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](i.lockClass);
          }
        },
        render: function () {
          var e = this,
            t = e.params.pagination;
          if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
            var i = e.pagination.$el,
              n = "";
            if ("bullets" === t.type) {
              for (var r = e.params.loop ? Math.ceil(((e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length) - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, a = 0; a < r; a += 1) n += t.renderBullet ? t.renderBullet.call(e, a, t.bulletClass) : "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
              i.html(n), (e.pagination.bullets = i.find("." + t.bulletClass));
            }
            "fraction" === t.type && ((n = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>'), i.html(n)), "progressbar" === t.type && ((n = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>'), i.html(n)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]);
          }
        },
        init: function () {
          var e = this,
            t = e.params.pagination;
          if (t.el) {
            var i = n(t.el);
            0 !== i.length &&
              (e.params.uniqueNavElements && "string" == typeof t.el && 1 < i.length && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)),
              "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
              i.addClass(t.modifierClass + t.type),
              "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), (e.pagination.dynamicBulletIndex = 0), t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
              "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass),
              t.clickable &&
                i.on("click", "." + t.bulletClass, function (t) {
                  t.preventDefault();
                  var i = n(this).index() * e.params.slidesPerGroup;
                  e.params.loop && (i += e.loopedSlides), e.slideTo(i);
                }),
              u.extend(e.pagination, { $el: i, el: i[0] }));
          }
        },
        destroy: function () {
          var e = this,
            t = e.params.pagination;
          if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
            var i = e.pagination.$el;
            i.removeClass(t.hiddenClass), i.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && i.off("click", "." + t.bulletClass);
          }
        },
      },
      $ = {
        setTranslate: function () {
          var e = this;
          if (e.params.scrollbar.el && e.scrollbar.el) {
            var t = e.scrollbar,
              i = t.dragSize,
              n = t.trackSize,
              r = t.$dragEl,
              a = t.$el,
              s = e.params.scrollbar,
              o = i,
              l = (n - i) * e.progress;
            e.rtlTranslate ? (0 < (l = -l) ? ((o = i - l), (l = 0)) : n < -l + i && (o = n + l)) : l < 0 ? ((o = i + l), (l = 0)) : n < l + i && (o = n - l),
              e.isHorizontal() ? (r.transform(c.transforms3d ? "translate3d(" + l + "px, 0, 0)" : "translateX(" + l + "px)"), (r[0].style.width = o + "px")) : (r.transform(c.transforms3d ? "translate3d(0px, " + l + "px, 0)" : "translateY(" + l + "px)"), (r[0].style.height = o + "px")),
              s.hide &&
                (clearTimeout(e.scrollbar.timeout),
                (a[0].style.opacity = 1),
                (e.scrollbar.timeout = setTimeout(function () {
                  (a[0].style.opacity = 0), a.transition(400);
                }, 1e3)));
          }
        },
        setTransition: function (e) {
          this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
        },
        updateSize: function () {
          var e = this;
          if (e.params.scrollbar.el && e.scrollbar.el) {
            var t = e.scrollbar,
              i = t.$dragEl,
              n = t.$el;
            (i[0].style.width = ""), (i[0].style.height = "");
            var r,
              a = e.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight,
              s = e.size / e.virtualSize,
              o = s * (a / e.size);
            (r = "auto" === e.params.scrollbar.dragSize ? a * s : parseInt(e.params.scrollbar.dragSize, 10)), e.isHorizontal() ? (i[0].style.width = r + "px") : (i[0].style.height = r + "px"), (n[0].style.display = 1 <= s ? "none" : ""), e.params.scrollbar.hide && (n[0].style.opacity = 0), u.extend(t, { trackSize: a, divider: s, moveDivider: o, dragSize: r }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
          }
        },
        setDragPosition: function (e) {
          var t,
            i = this,
            n = i.scrollbar,
            r = i.rtlTranslate,
            a = n.$el,
            s = n.dragSize,
            o = n.trackSize;
          (t = ((i.isHorizontal() ? ("touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX) : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - a.offset()[i.isHorizontal() ? "left" : "top"] - s / 2) / (o - s)), (t = Math.max(Math.min(t, 1), 0)), r && (t = 1 - t);
          var l = i.minTranslate() + (i.maxTranslate() - i.minTranslate()) * t;
          i.updateProgress(l), i.setTranslate(l), i.updateActiveIndex(), i.updateSlidesClasses();
        },
        onDragStart: function (e) {
          var t = this,
            i = t.params.scrollbar,
            n = t.scrollbar,
            r = t.$wrapperEl,
            a = n.$el,
            s = n.$dragEl;
          (t.scrollbar.isTouched = !0), e.preventDefault(), e.stopPropagation(), r.transition(100), s.transition(100), n.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), a.transition(0), i.hide && a.css("opacity", 1), t.emit("scrollbarDragStart", e);
        },
        onDragMove: function (e) {
          var t = this.scrollbar,
            i = this.$wrapperEl,
            n = t.$el,
            r = t.$dragEl;
          this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1), t.setDragPosition(e), i.transition(0), n.transition(0), r.transition(0), this.emit("scrollbarDragMove", e));
        },
        onDragEnd: function (e) {
          var t = this,
            i = t.params.scrollbar,
            n = t.scrollbar.$el;
          t.scrollbar.isTouched &&
            ((t.scrollbar.isTouched = !1),
            i.hide &&
              (clearTimeout(t.scrollbar.dragTimeout),
              (t.scrollbar.dragTimeout = u.nextTick(function () {
                n.css("opacity", 0), n.transition(400);
              }, 1e3))),
            t.emit("scrollbarDragEnd", e),
            i.snapOnRelease && t.slideToClosest());
        },
        enableDraggable: function () {
          var t = this;
          if (t.params.scrollbar.el) {
            var i = t.touchEventsTouch,
              n = t.touchEventsDesktop,
              r = t.params,
              a = t.scrollbar.$el[0],
              s = !(!c.passiveListener || !r.passiveListeners) && { passive: !1, capture: !1 },
              o = !(!c.passiveListener || !r.passiveListeners) && { passive: !0, capture: !1 };
            c.touch ? (a.addEventListener(i.start, t.scrollbar.onDragStart, s), a.addEventListener(i.move, t.scrollbar.onDragMove, s), a.addEventListener(i.end, t.scrollbar.onDragEnd, o)) : (a.addEventListener(n.start, t.scrollbar.onDragStart, s), e.addEventListener(n.move, t.scrollbar.onDragMove, s), e.addEventListener(n.end, t.scrollbar.onDragEnd, o));
          }
        },
        disableDraggable: function () {
          var t = this;
          if (t.params.scrollbar.el) {
            var i = t.touchEventsTouch,
              n = t.touchEventsDesktop,
              r = t.params,
              a = t.scrollbar.$el[0],
              s = !(!c.passiveListener || !r.passiveListeners) && { passive: !1, capture: !1 },
              o = !(!c.passiveListener || !r.passiveListeners) && { passive: !0, capture: !1 };
            c.touch ? (a.removeEventListener(i.start, t.scrollbar.onDragStart, s), a.removeEventListener(i.move, t.scrollbar.onDragMove, s), a.removeEventListener(i.end, t.scrollbar.onDragEnd, o)) : (a.removeEventListener(n.start, t.scrollbar.onDragStart, s), e.removeEventListener(n.move, t.scrollbar.onDragMove, s), e.removeEventListener(n.end, t.scrollbar.onDragEnd, o));
          }
        },
        init: function () {
          var e = this;
          if (e.params.scrollbar.el) {
            var t = e.scrollbar,
              i = e.$el,
              r = e.params.scrollbar,
              a = n(r.el);
            e.params.uniqueNavElements && "string" == typeof r.el && 1 < a.length && 1 === i.find(r.el).length && (a = i.find(r.el));
            var s = a.find("." + e.params.scrollbar.dragClass);
            0 === s.length && ((s = n('<div class="' + e.params.scrollbar.dragClass + '"></div>')), a.append(s)), u.extend(t, { $el: a, el: a[0], $dragEl: s, dragEl: s[0] }), r.draggable && t.enableDraggable();
          }
        },
        destroy: function () {
          this.scrollbar.disableDraggable();
        },
      },
      H = {
        setTransform: function (e, t) {
          var i = this.rtl,
            r = n(e),
            a = i ? -1 : 1,
            s = r.attr("data-swiper-parallax") || "0",
            o = r.attr("data-swiper-parallax-x"),
            l = r.attr("data-swiper-parallax-y"),
            d = r.attr("data-swiper-parallax-scale"),
            u = r.attr("data-swiper-parallax-opacity");
          if ((o || l ? ((o = o || "0"), (l = l || "0")) : this.isHorizontal() ? ((o = s), (l = "0")) : ((l = s), (o = "0")), (o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t * a + "%" : o * t * a + "px"), (l = 0 <= l.indexOf("%") ? parseInt(l, 10) * t + "%" : l * t + "px"), null != u)) {
            var c = u - (u - 1) * (1 - Math.abs(t));
            r[0].style.opacity = c;
          }
          if (null == d) r.transform("translate3d(" + o + ", " + l + ", 0px)");
          else {
            var p = d - (d - 1) * (1 - Math.abs(t));
            r.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + p + ")");
          }
        },
        setTranslate: function () {
          var e = this,
            t = e.slides,
            i = e.progress,
            r = e.snapGrid;
          e.$el.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, n) {
            e.parallax.setTransform(n, i);
          }),
            t.each(function (t, a) {
              var s = a.progress;
              1 < e.params.slidesPerGroup && "auto" !== e.params.slidesPerView && (s += Math.ceil(t / 2) - i * (r.length - 1)),
                (s = Math.min(Math.max(s, -1), 1)),
                n(a)
                  .find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]")
                  .each(function (t, i) {
                    e.parallax.setTransform(i, s);
                  });
            });
        },
        setTransition: function (e) {
          void 0 === e && (e = this.params.speed),
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
              var r = n(i),
                a = parseInt(r.attr("data-swiper-parallax-duration"), 10) || e;
              0 === e && (a = 0), r.transition(a);
            });
        },
      },
      X = {
        getDistanceBetweenTouches: function (e) {
          if (e.targetTouches.length < 2) return 1;
          var t = e.targetTouches[0].pageY,
            i = e.targetTouches[1].pageY;
          return Math.sqrt(Math.pow(e.targetTouches[1].pageX - e.targetTouches[0].pageX, 2) + Math.pow(i - t, 2));
        },
        onGestureStart: function (e) {
          var t = this,
            i = t.params.zoom,
            r = t.zoom,
            a = r.gesture;
          if (((r.fakeGestureTouched = !1), (r.fakeGestureMoved = !1), !c.gestures)) {
            if ("touchstart" !== e.type || ("touchstart" === e.type && e.targetTouches.length < 2)) return;
            (r.fakeGestureTouched = !0), (a.scaleStart = X.getDistanceBetweenTouches(e));
          }
          (a.$slideEl && a.$slideEl.length) || ((a.$slideEl = n(e.target).closest(".swiper-slide")), 0 === a.$slideEl.length && (a.$slideEl = t.slides.eq(t.activeIndex)), (a.$imageEl = a.$slideEl.find("img, svg, canvas")), (a.$imageWrapEl = a.$imageEl.parent("." + i.containerClass)), (a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio), 0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), (t.zoom.isScaling = !0)) : (a.$imageEl = void 0);
        },
        onGestureChange: function (e) {
          var t = this.params.zoom,
            i = this.zoom,
            n = i.gesture;
          if (!c.gestures) {
            if ("touchmove" !== e.type || ("touchmove" === e.type && e.targetTouches.length < 2)) return;
            (i.fakeGestureMoved = !0), (n.scaleMove = X.getDistanceBetweenTouches(e));
          }
          n.$imageEl && 0 !== n.$imageEl.length && ((i.scale = c.gestures ? e.scale * i.currentScale : (n.scaleMove / n.scaleStart) * i.currentScale), i.scale > n.maxRatio && (i.scale = n.maxRatio - 1 + Math.pow(i.scale - n.maxRatio + 1, 0.5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, 0.5)), n.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"));
        },
        onGestureEnd: function (e) {
          var t = this.params.zoom,
            i = this.zoom,
            n = i.gesture;
          if (!c.gestures) {
            if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
            if ("touchend" !== e.type || ("touchend" === e.type && e.changedTouches.length < 2 && !x.android)) return;
            (i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1);
          }
          n.$imageEl && 0 !== n.$imageEl.length && ((i.scale = Math.max(Math.min(i.scale, n.maxRatio), t.minRatio)), n.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), (i.currentScale = i.scale), (i.isScaling = !1), 1 === i.scale && (n.$slideEl = void 0));
        },
        onTouchStart: function (e) {
          var t = this.zoom,
            i = t.gesture,
            n = t.image;
          i.$imageEl && 0 !== i.$imageEl.length && (n.isTouched || (x.android && e.preventDefault(), (n.isTouched = !0), (n.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX), (n.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
        },
        onTouchMove: function (e) {
          var t = this,
            i = t.zoom,
            n = i.gesture,
            r = i.image,
            a = i.velocity;
          if (n.$imageEl && 0 !== n.$imageEl.length && ((t.allowClick = !1), r.isTouched && n.$slideEl)) {
            r.isMoved || ((r.width = n.$imageEl[0].offsetWidth), (r.height = n.$imageEl[0].offsetHeight), (r.startX = u.getTranslate(n.$imageWrapEl[0], "x") || 0), (r.startY = u.getTranslate(n.$imageWrapEl[0], "y") || 0), (n.slideWidth = n.$slideEl[0].offsetWidth), (n.slideHeight = n.$slideEl[0].offsetHeight), n.$imageWrapEl.transition(0), t.rtl && ((r.startX = -r.startX), (r.startY = -r.startY)));
            var s = r.width * i.scale,
              o = r.height * i.scale;
            if (!(s < n.slideWidth && o < n.slideHeight)) {
              if (((r.minX = Math.min(n.slideWidth / 2 - s / 2, 0)), (r.maxX = -r.minX), (r.minY = Math.min(n.slideHeight / 2 - o / 2, 0)), (r.maxY = -r.minY), (r.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX), (r.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY), !r.isMoved && !i.isScaling)) {
                if (t.isHorizontal() && ((Math.floor(r.minX) === Math.floor(r.startX) && r.touchesCurrent.x < r.touchesStart.x) || (Math.floor(r.maxX) === Math.floor(r.startX) && r.touchesCurrent.x > r.touchesStart.x))) return void (r.isTouched = !1);
                if (!t.isHorizontal() && ((Math.floor(r.minY) === Math.floor(r.startY) && r.touchesCurrent.y < r.touchesStart.y) || (Math.floor(r.maxY) === Math.floor(r.startY) && r.touchesCurrent.y > r.touchesStart.y))) return void (r.isTouched = !1);
              }
              e.preventDefault(), e.stopPropagation(), (r.isMoved = !0), (r.currentX = r.touchesCurrent.x - r.touchesStart.x + r.startX), (r.currentY = r.touchesCurrent.y - r.touchesStart.y + r.startY), r.currentX < r.minX && (r.currentX = r.minX + 1 - Math.pow(r.minX - r.currentX + 1, 0.8)), r.currentX > r.maxX && (r.currentX = r.maxX - 1 + Math.pow(r.currentX - r.maxX + 1, 0.8)), r.currentY < r.minY && (r.currentY = r.minY + 1 - Math.pow(r.minY - r.currentY + 1, 0.8)), r.currentY > r.maxY && (r.currentY = r.maxY - 1 + Math.pow(r.currentY - r.maxY + 1, 0.8)), a.prevPositionX || (a.prevPositionX = r.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = r.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), (a.x = (r.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2), (a.y = (r.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2), Math.abs(r.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(r.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), (a.prevPositionX = r.touchesCurrent.x), (a.prevPositionY = r.touchesCurrent.y), (a.prevTime = Date.now()), n.$imageWrapEl.transform("translate3d(" + r.currentX + "px, " + r.currentY + "px,0)");
            }
          }
        },
        onTouchEnd: function () {
          var e = this.zoom,
            t = e.gesture,
            i = e.image,
            n = e.velocity;
          if (t.$imageEl && 0 !== t.$imageEl.length) {
            if (!i.isTouched || !i.isMoved) return (i.isTouched = !1), void (i.isMoved = !1);
            (i.isTouched = !1), (i.isMoved = !1);
            var r = 300,
              a = 300,
              s = i.currentX + n.x * r,
              o = i.currentY + n.y * a;
            0 !== n.x && (r = Math.abs((s - i.currentX) / n.x)), 0 !== n.y && (a = Math.abs((o - i.currentY) / n.y));
            var l = Math.max(r, a);
            (i.currentX = s), (i.currentY = o);
            var d = i.height * e.scale;
            (i.minX = Math.min(t.slideWidth / 2 - (i.width * e.scale) / 2, 0)), (i.maxX = -i.minX), (i.minY = Math.min(t.slideHeight / 2 - d / 2, 0)), (i.maxY = -i.minY), (i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)), (i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)), t.$imageWrapEl.transition(l).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)");
          }
        },
        onTransitionEnd: function () {
          var e = this.zoom,
            t = e.gesture;
          t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), (e.scale = 1), (e.currentScale = 1), (t.$slideEl = void 0), (t.$imageEl = void 0), (t.$imageWrapEl = void 0));
        },
        toggle: function (e) {
          var t = this.zoom;
          t.scale && 1 !== t.scale ? t.out() : t.in(e);
        },
        in: function (e) {
          var t,
            i,
            r,
            a,
            s,
            o,
            l,
            d,
            u,
            c,
            p,
            h,
            f,
            m = this,
            v = m.zoom,
            g = m.params.zoom,
            y = v.gesture,
            w = v.image;
          y.$slideEl || ((y.$slideEl = m.clickedSlide ? n(m.clickedSlide) : m.slides.eq(m.activeIndex)), (y.$imageEl = y.$slideEl.find("img, svg, canvas")), (y.$imageWrapEl = y.$imageEl.parent("." + g.containerClass))), y.$imageEl && 0 !== y.$imageEl.length && (y.$slideEl.addClass("" + g.zoomedSlideClass), void 0 === w.touchesStart.x && e ? ((t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX), (i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY)) : ((t = w.touchesStart.x), (i = w.touchesStart.y)), (v.scale = y.$imageWrapEl.attr("data-swiper-zoom") || g.maxRatio), (v.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || g.maxRatio), e ? ((h = y.$slideEl[0].offsetWidth), (f = y.$slideEl[0].offsetHeight), (r = y.$slideEl.offset().left + h / 2 - t), (a = y.$slideEl.offset().top + f / 2 - i), (l = y.$imageEl[0].offsetHeight * v.scale), (c = -(d = Math.min(h / 2 - (y.$imageEl[0].offsetWidth * v.scale) / 2, 0))), (p = -(u = Math.min(f / 2 - l / 2, 0))), (s = r * v.scale) < d && (s = d), c < s && (s = c), (o = a * v.scale) < u && (o = u), p < o && (o = p)) : (o = s = 0), y.$imageWrapEl.transition(300).transform("translate3d(" + s + "px, " + o + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + v.scale + ")"));
        },
        out: function () {
          var e = this,
            t = e.zoom,
            i = e.params.zoom,
            r = t.gesture;
          r.$slideEl || ((r.$slideEl = e.clickedSlide ? n(e.clickedSlide) : e.slides.eq(e.activeIndex)), (r.$imageEl = r.$slideEl.find("img, svg, canvas")), (r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass))), r.$imageEl && 0 !== r.$imageEl.length && ((t.scale = 1), (t.currentScale = 1), r.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), r.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), r.$slideEl.removeClass("" + i.zoomedSlideClass), (r.$slideEl = void 0));
        },
        enable: function () {
          var e = this,
            t = e.zoom;
          if (!t.enabled) {
            t.enabled = !0;
            var i = !("touchstart" !== e.touchEvents.start || !c.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 };
            c.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove);
          }
        },
        disable: function () {
          var e = this,
            t = e.zoom;
          if (t.enabled) {
            e.zoom.enabled = !1;
            var i = !("touchstart" !== e.touchEvents.start || !c.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 };
            c.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove);
          }
        },
      },
      j = {
        loadInSlide: function (e, t) {
          void 0 === t && (t = !0);
          var i = this,
            r = i.params.lazy;
          if (void 0 !== e && 0 !== i.slides.length) {
            var a = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
              s = a.find("." + r.elementClass + ":not(." + r.loadedClass + "):not(." + r.loadingClass + ")");
            !a.hasClass(r.elementClass) || a.hasClass(r.loadedClass) || a.hasClass(r.loadingClass) || (s = s.add(a[0])),
              0 !== s.length &&
                s.each(function (e, s) {
                  var o = n(s);
                  o.addClass(r.loadingClass);
                  var l = o.attr("data-background"),
                    d = o.attr("data-src"),
                    u = o.attr("data-srcset"),
                    c = o.attr("data-sizes");
                  i.loadImage(o[0], d || l, u, c, !1, function () {
                    if (null != i && i && (!i || i.params) && !i.destroyed) {
                      if ((l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (u && (o.attr("srcset", u), o.removeAttr("data-srcset")), c && (o.attr("sizes", c), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(r.loadedClass).removeClass(r.loadingClass), a.find("." + r.preloaderClass).remove(), i.params.loop && t)) {
                        var e = a.attr("data-swiper-slide-index");
                        if (a.hasClass(i.params.slideDuplicateClass)) {
                          var n = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                          i.lazy.loadInSlide(n.index(), !1);
                        } else {
                          var s = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                          i.lazy.loadInSlide(s.index(), !1);
                        }
                      }
                      i.emit("lazyImageReady", a[0], o[0]);
                    }
                  }),
                    i.emit("lazyImageLoad", a[0], o[0]);
                });
          }
        },
        load: function () {
          var e = this,
            t = e.$wrapperEl,
            i = e.params,
            r = e.slides,
            a = e.activeIndex,
            s = e.virtual && i.virtual.enabled,
            o = i.lazy,
            l = i.slidesPerView;
          function d(e) {
            if (s) {
              if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
            } else if (r[e]) return !0;
            return !1;
          }
          function u(e) {
            return s ? n(e).attr("data-swiper-slide-index") : n(e).index();
          }
          if (("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility))
            t.children("." + i.slideVisibleClass).each(function (t, i) {
              var r = s ? n(i).attr("data-swiper-slide-index") : n(i).index();
              e.lazy.loadInSlide(r);
            });
          else if (1 < l) for (var c = a; c < a + l; c += 1) d(c) && e.lazy.loadInSlide(c);
          else e.lazy.loadInSlide(a);
          if (o.loadPrevNext)
            if (1 < l || (o.loadPrevNextAmount && 1 < o.loadPrevNextAmount)) {
              for (var p = o.loadPrevNextAmount, h = l, f = Math.min(a + h + Math.max(p, h), r.length), m = Math.max(a - Math.max(h, p), 0), v = a + l; v < f; v += 1) d(v) && e.lazy.loadInSlide(v);
              for (var g = m; g < a; g += 1) d(g) && e.lazy.loadInSlide(g);
            } else {
              var y = t.children("." + i.slideNextClass);
              0 < y.length && e.lazy.loadInSlide(u(y));
              var w = t.children("." + i.slidePrevClass);
              0 < w.length && e.lazy.loadInSlide(u(w));
            }
        },
      },
      Y = {
        LinearSpline: function (e, t) {
          var i, n, r, a, s;
          return (
            (this.x = e),
            (this.y = t),
            (this.lastIndex = e.length - 1),
            (this.interpolate = function (e) {
              return e
                ? ((s = (function (e, t) {
                    for (n = -1, i = e.length; 1 < i - n; ) e[(r = (i + n) >> 1)] <= t ? (n = r) : (i = r);
                    return i;
                  })(this.x, e)),
                  ((e - this.x[(a = s - 1)]) * (this.y[s] - this.y[a])) / (this.x[s] - this.x[a]) + this.y[a])
                : 0;
            }),
            this
          );
        },
        getInterpolateFunction: function (e) {
          var t = this;
          t.controller.spline || (t.controller.spline = t.params.loop ? new Y.LinearSpline(t.slidesGrid, e.slidesGrid) : new Y.LinearSpline(t.snapGrid, e.snapGrid));
        },
        setTranslate: function (e, t) {
          var i,
            n,
            r = this,
            a = r.controller.control;
          function s(e) {
            var t = r.rtlTranslate ? -r.translate : r.translate;
            "slide" === r.params.controller.by && (r.controller.getInterpolateFunction(e), (n = -r.controller.spline.interpolate(-t))), (n && "container" !== r.params.controller.by) || ((i = (e.maxTranslate() - e.minTranslate()) / (r.maxTranslate() - r.minTranslate())), (n = (t - r.minTranslate()) * i + e.minTranslate())), r.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, r), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          if (Array.isArray(a)) for (var o = 0; o < a.length; o += 1) a[o] !== t && a[o] instanceof E && s(a[o]);
          else a instanceof E && t !== a && s(a);
        },
        setTransition: function (e, t) {
          var i,
            n = this,
            r = n.controller.control;
          function a(t) {
            t.setTransition(e, n),
              0 !== e &&
                (t.transitionStart(),
                t.params.autoHeight &&
                  u.nextTick(function () {
                    t.updateAutoHeight();
                  }),
                t.$wrapperEl.transitionEnd(function () {
                  r && (t.params.loop && "slide" === n.params.controller.by && t.loopFix(), t.transitionEnd());
                }));
          }
          if (Array.isArray(r)) for (i = 0; i < r.length; i += 1) r[i] !== t && r[i] instanceof E && a(r[i]);
          else r instanceof E && t !== r && a(r);
        },
      },
      q = {
        makeElFocusable: function (e) {
          return e.attr("tabIndex", "0"), e;
        },
        addElRole: function (e, t) {
          return e.attr("role", t), e;
        },
        addElLabel: function (e, t) {
          return e.attr("aria-label", t), e;
        },
        disableEl: function (e) {
          return e.attr("aria-disabled", !0), e;
        },
        enableEl: function (e) {
          return e.attr("aria-disabled", !1), e;
        },
        onEnterKey: function (e) {
          var t = this,
            i = t.params.a11y;
          if (13 === e.keyCode) {
            var r = n(e.target);
            t.navigation && t.navigation.$nextEl && r.is(t.navigation.$nextEl) && ((t.isEnd && !t.params.loop) || t.slideNext(), t.a11y.notify(t.isEnd ? i.lastSlideMessage : i.nextSlideMessage)), t.navigation && t.navigation.$prevEl && r.is(t.navigation.$prevEl) && ((t.isBeginning && !t.params.loop) || t.slidePrev(), t.a11y.notify(t.isBeginning ? i.firstSlideMessage : i.prevSlideMessage)), t.pagination && r.is("." + t.params.pagination.bulletClass) && r[0].click();
          }
        },
        notify: function (e) {
          var t = this.a11y.liveRegion;
          0 !== t.length && (t.html(""), t.html(e));
        },
        updateNavigation: function () {
          var e = this;
          if (!e.params.loop) {
            var t = e.navigation,
              i = t.$nextEl,
              n = t.$prevEl;
            n && 0 < n.length && (e.isBeginning ? e.a11y.disableEl(n) : e.a11y.enableEl(n)), i && 0 < i.length && (e.isEnd ? e.a11y.disableEl(i) : e.a11y.enableEl(i));
          }
        },
        updatePagination: function () {
          var e = this,
            t = e.params.a11y;
          e.pagination &&
            e.params.pagination.clickable &&
            e.pagination.bullets &&
            e.pagination.bullets.length &&
            e.pagination.bullets.each(function (i, r) {
              var a = n(r);
              e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, t.paginationBulletMessage.replace(/{{index}}/, a.index() + 1));
            });
        },
        init: function () {
          var e = this;
          e.$el.append(e.a11y.liveRegion);
          var t,
            i,
            n = e.params.a11y;
          e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, n.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), i && (e.a11y.makeElFocusable(i), e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, n.prevSlideMessage), i.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey);
        },
        destroy: function () {
          var e,
            t,
            i = this;
          i.a11y.liveRegion && 0 < i.a11y.liveRegion.length && i.a11y.liveRegion.remove(), i.navigation && i.navigation.$nextEl && (e = i.navigation.$nextEl), i.navigation && i.navigation.$prevEl && (t = i.navigation.$prevEl), e && e.off("keydown", i.a11y.onEnterKey), t && t.off("keydown", i.a11y.onEnterKey), i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.$el.off("keydown", "." + i.params.pagination.bulletClass, i.a11y.onEnterKey);
        },
      },
      G = {
        init: function () {
          var e = this;
          if (e.params.history) {
            if (!t.history || !t.history.pushState) return (e.params.history.enabled = !1), void (e.params.hashNavigation.enabled = !0);
            var i = e.history;
            (i.initialized = !0), (i.paths = G.getPathValues()), (i.paths.key || i.paths.value) && (i.scrollToSlide(0, i.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", e.history.setHistoryPopState));
          }
        },
        destroy: function () {
          this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState);
        },
        setHistoryPopState: function () {
          (this.history.paths = G.getPathValues()), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
        },
        getPathValues: function () {
          var e = t.location.pathname
              .slice(1)
              .split("/")
              .filter(function (e) {
                return "" !== e;
              }),
            i = e.length;
          return { key: e[i - 2], value: e[i - 1] };
        },
        setHistory: function (e, i) {
          if (this.history.initialized && this.params.history.enabled) {
            var n = this.slides.eq(i),
              r = G.slugify(n.attr("data-history"));
            t.location.pathname.includes(e) || (r = e + "/" + r);
            var a = t.history.state;
            (a && a.value === r) || (this.params.history.replaceState ? t.history.replaceState({ value: r }, null, r) : t.history.pushState({ value: r }, null, r));
          }
        },
        slugify: function (e) {
          return e
            .toString()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "")
            .replace(/--+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, "");
        },
        scrollToSlide: function (e, t, i) {
          var n = this;
          if (t)
            for (var r = 0, a = n.slides.length; r < a; r += 1) {
              var s = n.slides.eq(r);
              if (G.slugify(s.attr("data-history")) === t && !s.hasClass(n.params.slideDuplicateClass)) {
                var o = s.index();
                n.slideTo(o, e, i);
              }
            }
          else n.slideTo(0, e, i);
        },
      },
      W = {
        onHashCange: function () {
          var t = this,
            i = e.location.hash.replace("#", "");
          if (i !== t.slides.eq(t.activeIndex).attr("data-hash")) {
            var n = t.$wrapperEl.children("." + t.params.slideClass + '[data-hash="' + i + '"]').index();
            if (void 0 === n) return;
            t.slideTo(n);
          }
        },
        setHash: function () {
          var i = this;
          if (i.hashNavigation.initialized && i.params.hashNavigation.enabled)
            if (i.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + i.slides.eq(i.activeIndex).attr("data-hash") || "");
            else {
              var n = i.slides.eq(i.activeIndex),
                r = n.attr("data-hash") || n.attr("data-history");
              e.location.hash = r || "";
            }
        },
        init: function () {
          var i = this;
          if (!(!i.params.hashNavigation.enabled || (i.params.history && i.params.history.enabled))) {
            i.hashNavigation.initialized = !0;
            var r = e.location.hash.replace("#", "");
            if (r)
              for (var a = 0, s = i.slides.length; a < s; a += 1) {
                var o = i.slides.eq(a);
                if ((o.attr("data-hash") || o.attr("data-history")) === r && !o.hasClass(i.params.slideDuplicateClass)) {
                  var l = o.index();
                  i.slideTo(l, 0, i.params.runCallbacksOnInit, !0);
                }
              }
            i.params.hashNavigation.watchState && n(t).on("hashchange", i.hashNavigation.onHashCange);
          }
        },
        destroy: function () {
          this.params.hashNavigation.watchState && n(t).off("hashchange", this.hashNavigation.onHashCange);
        },
      },
      V = {
        run: function () {
          var e = this,
            t = e.slides.eq(e.activeIndex),
            i = e.params.autoplay.delay;
          t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            (e.autoplay.timeout = u.nextTick(function () {
              e.params.autoplay.reverseDirection ? (e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? (e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay"))) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? (e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
            }, i));
        },
        start: function () {
          var e = this;
          return void 0 === e.autoplay.timeout && !e.autoplay.running && ((e.autoplay.running = !0), e.emit("autoplayStart"), e.autoplay.run(), !0);
        },
        stop: function () {
          var e = this;
          return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)), (e.autoplay.running = !1), e.emit("autoplayStop"), !0);
        },
        pause: function (e) {
          var t = this;
          t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), (t.autoplay.paused = !0), 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : ((t.autoplay.paused = !1), t.autoplay.run())));
        },
      },
      U = {
        setTranslate: function () {
          for (var e = this, t = e.slides, i = 0; i < t.length; i += 1) {
            var n = e.slides.eq(i),
              r = -n[0].swiperSlideOffset;
            e.params.virtualTranslate || (r -= e.translate);
            var a = 0;
            e.isHorizontal() || ((a = r), (r = 0));
            var s = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(n[0].progress), 0) : 1 + Math.min(Math.max(n[0].progress, -1), 0);
            n.css({ opacity: s }).transform("translate3d(" + r + "px, " + a + "px, 0px)");
          }
        },
        setTransition: function (e) {
          var t = this,
            i = t.slides,
            n = t.$wrapperEl;
          if ((i.transition(e), t.params.virtualTranslate && 0 !== e)) {
            var r = !1;
            i.transitionEnd(function () {
              if (!r && t && !t.destroyed) {
                (r = !0), (t.animating = !1);
                for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) n.trigger(e[i]);
              }
            });
          }
        },
      },
      K = {
        setTranslate: function () {
          var e,
            t = this,
            i = t.$el,
            r = t.$wrapperEl,
            a = t.slides,
            s = t.width,
            o = t.height,
            l = t.rtlTranslate,
            d = t.size,
            u = t.params.cubeEffect,
            c = t.isHorizontal(),
            h = t.virtual && t.params.virtual.enabled,
            f = 0;
          u.shadow && (c ? (0 === (e = r.find(".swiper-cube-shadow")).length && ((e = n('<div class="swiper-cube-shadow"></div>')), r.append(e)), e.css({ height: s + "px" })) : 0 === (e = i.find(".swiper-cube-shadow")).length && ((e = n('<div class="swiper-cube-shadow"></div>')), i.append(e)));
          for (var m = 0; m < a.length; m += 1) {
            var v = a.eq(m),
              g = m;
            h && (g = parseInt(v.attr("data-swiper-slide-index"), 10));
            var y = 90 * g,
              w = Math.floor(y / 360);
            l && ((y = -y), (w = Math.floor(-y / 360)));
            var b = Math.max(Math.min(v[0].progress, 1), -1),
              x = 0,
              _ = 0,
              T = 0;
            if ((g % 4 == 0 ? ((x = 4 * -w * d), (T = 0)) : (g - 1) % 4 == 0 ? ((x = 0), (T = 4 * -w * d)) : (g - 2) % 4 == 0 ? ((x = d + 4 * w * d), (T = d)) : (g - 3) % 4 == 0 && ((x = -d), (T = 3 * d + 4 * d * w)), l && (x = -x), c || ((_ = x), (x = 0)), b <= 1 && -1 < b && ((f = 90 * g + 90 * b), l && (f = 90 * -g - 90 * b)), v.transform("rotateX(" + (c ? 0 : -y) + "deg) rotateY(" + (c ? y : 0) + "deg) translate3d(" + x + "px, " + _ + "px, " + T + "px)"), u.slideShadows)) {
              var S = v.find(c ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top"),
                C = v.find(c ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
              0 === S.length && ((S = n('<div class="swiper-slide-shadow-' + (c ? "left" : "top") + '"></div>')), v.append(S)), 0 === C.length && ((C = n('<div class="swiper-slide-shadow-' + (c ? "right" : "bottom") + '"></div>')), v.append(C)), S.length && (S[0].style.opacity = Math.max(-b, 0)), C.length && (C[0].style.opacity = Math.max(b, 0));
            }
          }
          if ((r.css({ "-webkit-transform-origin": "50% 50% -" + d / 2 + "px", "-moz-transform-origin": "50% 50% -" + d / 2 + "px", "-ms-transform-origin": "50% 50% -" + d / 2 + "px", "transform-origin": "50% 50% -" + d / 2 + "px" }), u.shadow))
            if (c) e.transform("translate3d(0px, " + (s / 2 + u.shadowOffset) + "px, " + -s / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + u.shadowScale + ")");
            else {
              var E = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                M = 1.5 - (Math.sin((2 * E * Math.PI) / 360) / 2 + Math.cos((2 * E * Math.PI) / 360) / 2),
                P = u.shadowScale / M;
              e.transform("scale3d(" + u.shadowScale + ", 1, " + P + ") translate3d(0px, " + (o / 2 + u.shadowOffset) + "px, " + -o / 2 / P + "px) rotateX(-90deg)");
            }
          r.transform("translate3d(0px,0," + (p.isSafari || p.isUiWebView ? -d / 2 : 0) + "px) rotateX(" + (t.isHorizontal() ? 0 : f) + "deg) rotateY(" + (t.isHorizontal() ? -f : 0) + "deg)");
        },
        setTransition: function (e) {
          var t = this.$el;
          this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
        },
      },
      Z = {
        setTranslate: function () {
          for (var e = this, t = e.slides, i = e.rtlTranslate, r = 0; r < t.length; r += 1) {
            var a = t.eq(r),
              s = a[0].progress;
            e.params.flipEffect.limitRotation && (s = Math.max(Math.min(a[0].progress, 1), -1));
            var o = -180 * s,
              l = 0,
              d = -a[0].swiperSlideOffset,
              u = 0;
            if ((e.isHorizontal() ? i && (o = -o) : ((u = d), (l = -o), (o = d = 0)), (a[0].style.zIndex = -Math.abs(Math.round(s)) + t.length), e.params.flipEffect.slideShadows)) {
              var c = e.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                p = e.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
              0 === c.length && ((c = n('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>')), a.append(c)), 0 === p.length && ((p = n('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>')), a.append(p)), c.length && (c[0].style.opacity = Math.max(-s, 0)), p.length && (p[0].style.opacity = Math.max(s, 0));
            }
            a.transform("translate3d(" + d + "px, " + u + "px, 0px) rotateX(" + l + "deg) rotateY(" + o + "deg)");
          }
        },
        setTransition: function (e) {
          var t = this,
            i = t.slides,
            n = t.activeIndex,
            r = t.$wrapperEl;
          if ((i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e)) {
            var a = !1;
            i.eq(n).transitionEnd(function () {
              if (!a && t && !t.destroyed) {
                (a = !0), (t.animating = !1);
                for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) r.trigger(e[i]);
              }
            });
          }
        },
      },
      Q = {
        setTranslate: function () {
          for (var e = this, t = e.width, i = e.height, r = e.slides, a = e.$wrapperEl, s = e.slidesSizesGrid, o = e.params.coverflowEffect, l = e.isHorizontal(), d = e.translate, u = l ? t / 2 - d : i / 2 - d, p = l ? o.rotate : -o.rotate, h = o.depth, f = 0, m = r.length; f < m; f += 1) {
            var v = r.eq(f),
              g = s[f],
              y = ((u - v[0].swiperSlideOffset - g / 2) / g) * o.modifier,
              w = l ? p * y : 0,
              b = l ? 0 : p * y,
              x = -h * Math.abs(y),
              _ = l ? 0 : o.stretch * y,
              T = l ? o.stretch * y : 0;
            if ((Math.abs(T) < 0.001 && (T = 0), Math.abs(_) < 0.001 && (_ = 0), Math.abs(x) < 0.001 && (x = 0), Math.abs(w) < 0.001 && (w = 0), Math.abs(b) < 0.001 && (b = 0), v.transform("translate3d(" + T + "px," + _ + "px," + x + "px)  rotateX(" + b + "deg) rotateY(" + w + "deg)"), (v[0].style.zIndex = 1 - Math.abs(Math.round(y))), o.slideShadows)) {
              var S = v.find(l ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top"),
                C = v.find(l ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
              0 === S.length && ((S = n('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>')), v.append(S)), 0 === C.length && ((C = n('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>')), v.append(C)), S.length && (S[0].style.opacity = 0 < y ? y : 0), C.length && (C[0].style.opacity = 0 < -y ? -y : 0);
            }
          }
          (c.pointerEvents || c.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = u + "px 50%");
        },
        setTransition: function (e) {
          this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
        },
      },
      J = {
        init: function () {
          var e = this,
            t = e.params.thumbs,
            i = e.constructor;
          t.swiper instanceof i ? ((e.thumbs.swiper = t.swiper), u.extend(e.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), u.extend(e.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 })) : u.isObject(t.swiper) && ((e.thumbs.swiper = new i(u.extend({}, t.swiper, { watchSlidesVisibility: !0, watchSlidesProgress: !0, slideToClickedSlide: !1 }))), (e.thumbs.swiperCreated = !0)), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick);
        },
        onThumbClick: function () {
          var e = this,
            t = e.thumbs.swiper;
          if (t) {
            var i = t.clickedIndex,
              r = t.clickedSlide;
            if (!((r && n(r).hasClass(e.params.thumbs.slideThumbActiveClass)) || null == i)) {
              var a;
              if (((a = t.params.loop ? parseInt(n(t.clickedSlide).attr("data-swiper-slide-index"), 10) : i), e.params.loop)) {
                var s = e.activeIndex;
                e.slides.eq(s).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), (e._clientLeft = e.$wrapperEl[0].clientLeft), (s = e.activeIndex));
                var o = e.slides
                    .eq(s)
                    .prevAll('[data-swiper-slide-index="' + a + '"]')
                    .eq(0)
                    .index(),
                  l = e.slides
                    .eq(s)
                    .nextAll('[data-swiper-slide-index="' + a + '"]')
                    .eq(0)
                    .index();
                a = void 0 === o ? l : void 0 === l ? o : l - s < s - o ? l : o;
              }
              e.slideTo(a);
            }
          }
        },
        update: function (e) {
          var t = this,
            i = t.thumbs.swiper;
          if (i) {
            var n = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView;
            if (t.realIndex !== i.realIndex) {
              var r,
                a = i.activeIndex;
              if (i.params.loop) {
                i.slides.eq(a).hasClass(i.params.slideDuplicateClass) && (i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft), (a = i.activeIndex));
                var s = i.slides
                    .eq(a)
                    .prevAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                    .eq(0)
                    .index(),
                  o = i.slides
                    .eq(a)
                    .nextAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                    .eq(0)
                    .index();
                r = void 0 === s ? o : void 0 === o ? s : o - a == a - s ? a : o - a < a - s ? o : s;
              } else r = t.realIndex;
              i.visibleSlidesIndexes.indexOf(r) < 0 && (i.params.centeredSlides ? (r = a < r ? r - Math.floor(n / 2) + 1 : r + Math.floor(n / 2) - 1) : a < r && (r = r - n + 1), i.slideTo(r, e ? 0 : void 0));
            }
            var l = 1,
              d = t.params.thumbs.slideThumbActiveClass;
            if ((1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView), i.slides.removeClass(d), i.params.loop)) for (var u = 0; u < l; u += 1) i.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + u) + '"]').addClass(d);
            else for (var c = 0; c < l; c += 1) i.slides.eq(t.realIndex + c).addClass(d);
          }
        },
      },
      ee = [
        M,
        P,
        k,
        z,
        O,
        L,
        N,
        {
          name: "mousewheel",
          params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: "container" } },
          create: function () {
            var e = this;
            u.extend(e, { mousewheel: { enabled: !1, enable: R.enable.bind(e), disable: R.disable.bind(e), handle: R.handle.bind(e), handleMouseEnter: R.handleMouseEnter.bind(e), handleMouseLeave: R.handleMouseLeave.bind(e), lastScrollTime: u.now() } });
          },
          on: {
            init: function () {
              this.params.mousewheel.enabled && this.mousewheel.enable();
            },
            destroy: function () {
              this.mousewheel.enabled && this.mousewheel.disable();
            },
          },
        },
        {
          name: "navigation",
          params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } },
          create: function () {
            var e = this;
            u.extend(e, { navigation: { init: B.init.bind(e), update: B.update.bind(e), destroy: B.destroy.bind(e), onNextClick: B.onNextClick.bind(e), onPrevClick: B.onPrevClick.bind(e) } });
          },
          on: {
            init: function () {
              this.navigation.init(), this.navigation.update();
            },
            toEdge: function () {
              this.navigation.update();
            },
            fromEdge: function () {
              this.navigation.update();
            },
            destroy: function () {
              this.navigation.destroy();
            },
            click: function (e) {
              var t,
                i = this,
                r = i.navigation,
                a = r.$nextEl,
                s = r.$prevEl;
              !i.params.navigation.hideOnClick || n(e.target).is(s) || n(e.target).is(a) || (a ? (t = a.hasClass(i.params.navigation.hiddenClass)) : s && (t = s.hasClass(i.params.navigation.hiddenClass)), i.emit(!0 === t ? "navigationShow" : "navigationHide", i), a && a.toggleClass(i.params.navigation.hiddenClass), s && s.toggleClass(i.params.navigation.hiddenClass));
            },
          },
        },
        {
          name: "pagination",
          params: {
            pagination: {
              el: null,
              bulletElement: "span",
              clickable: !1,
              hideOnClick: !1,
              renderBullet: null,
              renderProgressbar: null,
              renderFraction: null,
              renderCustom: null,
              progressbarOpposite: !1,
              type: "bullets",
              dynamicBullets: !1,
              dynamicMainBullets: 1,
              formatFractionCurrent: function (e) {
                return e;
              },
              formatFractionTotal: function (e) {
                return e;
              },
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
              modifierClass: "swiper-pagination-",
              currentClass: "swiper-pagination-current",
              totalClass: "swiper-pagination-total",
              hiddenClass: "swiper-pagination-hidden",
              progressbarFillClass: "swiper-pagination-progressbar-fill",
              progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
              clickableClass: "swiper-pagination-clickable",
              lockClass: "swiper-pagination-lock",
            },
          },
          create: function () {
            var e = this;
            u.extend(e, { pagination: { init: F.init.bind(e), render: F.render.bind(e), update: F.update.bind(e), destroy: F.destroy.bind(e), dynamicBulletIndex: 0 } });
          },
          on: {
            init: function () {
              this.pagination.init(), this.pagination.render(), this.pagination.update();
            },
            activeIndexChange: function () {
              (this.params.loop || void 0 === this.snapIndex) && this.pagination.update();
            },
            snapIndexChange: function () {
              this.params.loop || this.pagination.update();
            },
            slidesLengthChange: function () {
              this.params.loop && (this.pagination.render(), this.pagination.update());
            },
            snapGridLengthChange: function () {
              this.params.loop || (this.pagination.render(), this.pagination.update());
            },
            destroy: function () {
              this.pagination.destroy();
            },
            click: function (e) {
              var t = this;
              t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !n(e.target).hasClass(t.params.pagination.bulletClass) && (!0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t), t.pagination.$el.toggleClass(t.params.pagination.hiddenClass));
            },
          },
        },
        {
          name: "scrollbar",
          params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } },
          create: function () {
            var e = this;
            u.extend(e, { scrollbar: { init: $.init.bind(e), destroy: $.destroy.bind(e), updateSize: $.updateSize.bind(e), setTranslate: $.setTranslate.bind(e), setTransition: $.setTransition.bind(e), enableDraggable: $.enableDraggable.bind(e), disableDraggable: $.disableDraggable.bind(e), setDragPosition: $.setDragPosition.bind(e), onDragStart: $.onDragStart.bind(e), onDragMove: $.onDragMove.bind(e), onDragEnd: $.onDragEnd.bind(e), isTouched: !1, timeout: null, dragTimeout: null } });
          },
          on: {
            init: function () {
              this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate();
            },
            update: function () {
              this.scrollbar.updateSize();
            },
            resize: function () {
              this.scrollbar.updateSize();
            },
            observerUpdate: function () {
              this.scrollbar.updateSize();
            },
            setTranslate: function () {
              this.scrollbar.setTranslate();
            },
            setTransition: function (e) {
              this.scrollbar.setTransition(e);
            },
            destroy: function () {
              this.scrollbar.destroy();
            },
          },
        },
        {
          name: "parallax",
          params: { parallax: { enabled: !1 } },
          create: function () {
            u.extend(this, { parallax: { setTransform: H.setTransform.bind(this), setTranslate: H.setTranslate.bind(this), setTransition: H.setTransition.bind(this) } });
          },
          on: {
            beforeInit: function () {
              this.params.parallax.enabled && ((this.params.watchSlidesProgress = !0), (this.originalParams.watchSlidesProgress = !0));
            },
            init: function () {
              this.params.parallax.enabled && this.parallax.setTranslate();
            },
            setTranslate: function () {
              this.params.parallax.enabled && this.parallax.setTranslate();
            },
            setTransition: function (e) {
              this.params.parallax.enabled && this.parallax.setTransition(e);
            },
          },
        },
        {
          name: "zoom",
          params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } },
          create: function () {
            var e = this,
              t = { enabled: !1, scale: 1, currentScale: 1, isScaling: !1, gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 }, image: { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 } };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (i) {
              t[i] = X[i].bind(e);
            }),
              u.extend(e, { zoom: t });
            var i = 1;
            Object.defineProperty(e.zoom, "scale", {
              get: function () {
                return i;
              },
              set: function (t) {
                i !== t && e.emit("zoomChange", t, e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0, e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0), (i = t);
              },
            });
          },
          on: {
            init: function () {
              this.params.zoom.enabled && this.zoom.enable();
            },
            destroy: function () {
              this.zoom.disable();
            },
            touchStart: function (e) {
              this.zoom.enabled && this.zoom.onTouchStart(e);
            },
            touchEnd: function (e) {
              this.zoom.enabled && this.zoom.onTouchEnd(e);
            },
            doubleTap: function (e) {
              this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e);
            },
            transitionEnd: function () {
              this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd();
            },
          },
        },
        {
          name: "lazy",
          params: { lazy: { enabled: !1, loadPrevNext: !1, loadPrevNextAmount: 1, loadOnTransitionStart: !1, elementClass: "swiper-lazy", loadingClass: "swiper-lazy-loading", loadedClass: "swiper-lazy-loaded", preloaderClass: "swiper-lazy-preloader" } },
          create: function () {
            u.extend(this, { lazy: { initialImageLoaded: !1, load: j.load.bind(this), loadInSlide: j.loadInSlide.bind(this) } });
          },
          on: {
            beforeInit: function () {
              this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1);
            },
            init: function () {
              this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load();
            },
            scroll: function () {
              this.params.freeMode && !this.params.freeModeSticky && this.lazy.load();
            },
            resize: function () {
              this.params.lazy.enabled && this.lazy.load();
            },
            scrollbarDragMove: function () {
              this.params.lazy.enabled && this.lazy.load();
            },
            transitionStart: function () {
              var e = this;
              e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || (!e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded)) && e.lazy.load();
            },
            transitionEnd: function () {
              this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load();
            },
          },
        },
        {
          name: "controller",
          params: { controller: { control: void 0, inverse: !1, by: "slide" } },
          create: function () {
            var e = this;
            u.extend(e, { controller: { control: e.params.controller.control, getInterpolateFunction: Y.getInterpolateFunction.bind(e), setTranslate: Y.setTranslate.bind(e), setTransition: Y.setTransition.bind(e) } });
          },
          on: {
            update: function () {
              this.controller.control && this.controller.spline && ((this.controller.spline = void 0), delete this.controller.spline);
            },
            resize: function () {
              this.controller.control && this.controller.spline && ((this.controller.spline = void 0), delete this.controller.spline);
            },
            observerUpdate: function () {
              this.controller.control && this.controller.spline && ((this.controller.spline = void 0), delete this.controller.spline);
            },
            setTranslate: function (e, t) {
              this.controller.control && this.controller.setTranslate(e, t);
            },
            setTransition: function (e, t) {
              this.controller.control && this.controller.setTransition(e, t);
            },
          },
        },
        {
          name: "a11y",
          params: { a11y: { enabled: !0, notificationClass: "swiper-notification", prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}" } },
          create: function () {
            var e = this;
            u.extend(e, { a11y: { liveRegion: n('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') } }),
              Object.keys(q).forEach(function (t) {
                e.a11y[t] = q[t].bind(e);
              });
          },
          on: {
            init: function () {
              this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation());
            },
            toEdge: function () {
              this.params.a11y.enabled && this.a11y.updateNavigation();
            },
            fromEdge: function () {
              this.params.a11y.enabled && this.a11y.updateNavigation();
            },
            paginationUpdate: function () {
              this.params.a11y.enabled && this.a11y.updatePagination();
            },
            destroy: function () {
              this.params.a11y.enabled && this.a11y.destroy();
            },
          },
        },
        {
          name: "history",
          params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
          create: function () {
            var e = this;
            u.extend(e, { history: { init: G.init.bind(e), setHistory: G.setHistory.bind(e), setHistoryPopState: G.setHistoryPopState.bind(e), scrollToSlide: G.scrollToSlide.bind(e), destroy: G.destroy.bind(e) } });
          },
          on: {
            init: function () {
              this.params.history.enabled && this.history.init();
            },
            destroy: function () {
              this.params.history.enabled && this.history.destroy();
            },
            transitionEnd: function () {
              this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex);
            },
          },
        },
        {
          name: "hash-navigation",
          params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } },
          create: function () {
            var e = this;
            u.extend(e, { hashNavigation: { initialized: !1, init: W.init.bind(e), destroy: W.destroy.bind(e), setHash: W.setHash.bind(e), onHashCange: W.onHashCange.bind(e) } });
          },
          on: {
            init: function () {
              this.params.hashNavigation.enabled && this.hashNavigation.init();
            },
            destroy: function () {
              this.params.hashNavigation.enabled && this.hashNavigation.destroy();
            },
            transitionEnd: function () {
              this.hashNavigation.initialized && this.hashNavigation.setHash();
            },
          },
        },
        {
          name: "autoplay",
          params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } },
          create: function () {
            var e = this;
            u.extend(e, {
              autoplay: {
                running: !1,
                paused: !1,
                run: V.run.bind(e),
                start: V.start.bind(e),
                stop: V.stop.bind(e),
                pause: V.pause.bind(e),
                onTransitionEnd: function (t) {
                  e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), (e.autoplay.paused = !1), e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
                },
              },
            });
          },
          on: {
            init: function () {
              this.params.autoplay.enabled && this.autoplay.start();
            },
            beforeTransitionStart: function (e, t) {
              this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop());
            },
            sliderFirstMove: function () {
              this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause());
            },
            destroy: function () {
              this.autoplay.running && this.autoplay.stop();
            },
          },
        },
        {
          name: "effect-fade",
          params: { fadeEffect: { crossFade: !1 } },
          create: function () {
            u.extend(this, { fadeEffect: { setTranslate: U.setTranslate.bind(this), setTransition: U.setTransition.bind(this) } });
          },
          on: {
            beforeInit: function () {
              var e = this;
              if ("fade" === e.params.effect) {
                e.classNames.push(e.params.containerModifierClass + "fade");
                var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                u.extend(e.params, t), u.extend(e.originalParams, t);
              }
            },
            setTranslate: function () {
              "fade" === this.params.effect && this.fadeEffect.setTranslate();
            },
            setTransition: function (e) {
              "fade" === this.params.effect && this.fadeEffect.setTransition(e);
            },
          },
        },
        {
          name: "effect-cube",
          params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } },
          create: function () {
            u.extend(this, { cubeEffect: { setTranslate: K.setTranslate.bind(this), setTransition: K.setTransition.bind(this) } });
          },
          on: {
            beforeInit: function () {
              var e = this;
              if ("cube" === e.params.effect) {
                e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 };
                u.extend(e.params, t), u.extend(e.originalParams, t);
              }
            },
            setTranslate: function () {
              "cube" === this.params.effect && this.cubeEffect.setTranslate();
            },
            setTransition: function (e) {
              "cube" === this.params.effect && this.cubeEffect.setTransition(e);
            },
          },
        },
        {
          name: "effect-flip",
          params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
          create: function () {
            u.extend(this, { flipEffect: { setTranslate: Z.setTranslate.bind(this), setTransition: Z.setTransition.bind(this) } });
          },
          on: {
            beforeInit: function () {
              var e = this;
              if ("flip" === e.params.effect) {
                e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                u.extend(e.params, t), u.extend(e.originalParams, t);
              }
            },
            setTranslate: function () {
              "flip" === this.params.effect && this.flipEffect.setTranslate();
            },
            setTransition: function (e) {
              "flip" === this.params.effect && this.flipEffect.setTransition(e);
            },
          },
        },
        {
          name: "effect-coverflow",
          params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 } },
          create: function () {
            u.extend(this, { coverflowEffect: { setTranslate: Q.setTranslate.bind(this), setTransition: Q.setTransition.bind(this) } });
          },
          on: {
            beforeInit: function () {
              var e = this;
              "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), (e.params.watchSlidesProgress = !0), (e.originalParams.watchSlidesProgress = !0));
            },
            setTranslate: function () {
              "coverflow" === this.params.effect && this.coverflowEffect.setTranslate();
            },
            setTransition: function (e) {
              "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e);
            },
          },
        },
        {
          name: "thumbs",
          params: { thumbs: { swiper: null, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-container-thumbs" } },
          create: function () {
            u.extend(this, { thumbs: { swiper: null, init: J.init.bind(this), update: J.update.bind(this), onThumbClick: J.onThumbClick.bind(this) } });
          },
          on: {
            beforeInit: function () {
              var e = this.params.thumbs;
              e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
            },
            slideChange: function () {
              this.thumbs.swiper && this.thumbs.update();
            },
            update: function () {
              this.thumbs.swiper && this.thumbs.update();
            },
            resize: function () {
              this.thumbs.swiper && this.thumbs.update();
            },
            observerUpdate: function () {
              this.thumbs.swiper && this.thumbs.update();
            },
            setTransition: function (e) {
              var t = this.thumbs.swiper;
              t && t.setTransition(e);
            },
            beforeDestroy: function () {
              var e = this.thumbs.swiper;
              e && this.thumbs.swiperCreated && e && e.destroy();
            },
          },
        },
      ];
    return void 0 === E.use && ((E.use = E.Class.use), (E.installModule = E.Class.installModule)), E.use(ee), E;
  });
