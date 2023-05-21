/*! For license information please see main.bd0c8215.js.LICENSE.txt */
!(function () {
  var e = {
      110: function (e, t, n) {
        var r = n(309),
          a = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          o = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0,
          },
          l = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0,
          },
          i = {}
        function u(e) {
          return r.isMemo(e) ? l : i[e.$$typeof] || a
        }
        ;(i[r.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (i[r.Memo] = l)
        var s = Object.defineProperty,
          c = Object.getOwnPropertyNames,
          f = Object.getOwnPropertySymbols,
          d = Object.getOwnPropertyDescriptor,
          p = Object.getPrototypeOf,
          m = Object.prototype
        e.exports = function e(t, n, r) {
          if ('string' !== typeof n) {
            if (m) {
              var a = p(n)
              a && a !== m && e(t, a, r)
            }
            var l = c(n)
            f && (l = l.concat(f(n)))
            for (var i = u(t), h = u(n), v = 0; v < l.length; ++v) {
              var g = l[v]
              if (!o[g] && (!r || !r[g]) && (!h || !h[g]) && (!i || !i[g])) {
                var y = d(n, g)
                try {
                  s(t, g, y)
                } catch (b) {}
              }
            }
          }
          return t
        }
      },
      746: function (e, t) {
        var n = 'function' === typeof Symbol && Symbol.for,
          r = n ? Symbol.for('react.element') : 60103,
          a = n ? Symbol.for('react.portal') : 60106,
          o = n ? Symbol.for('react.fragment') : 60107,
          l = n ? Symbol.for('react.strict_mode') : 60108,
          i = n ? Symbol.for('react.profiler') : 60114,
          u = n ? Symbol.for('react.provider') : 60109,
          s = n ? Symbol.for('react.context') : 60110,
          c = n ? Symbol.for('react.async_mode') : 60111,
          f = n ? Symbol.for('react.concurrent_mode') : 60111,
          d = n ? Symbol.for('react.forward_ref') : 60112,
          p = n ? Symbol.for('react.suspense') : 60113,
          m = n ? Symbol.for('react.suspense_list') : 60120,
          h = n ? Symbol.for('react.memo') : 60115,
          v = n ? Symbol.for('react.lazy') : 60116,
          g = n ? Symbol.for('react.block') : 60121,
          y = n ? Symbol.for('react.fundamental') : 60117,
          b = n ? Symbol.for('react.responder') : 60118,
          x = n ? Symbol.for('react.scope') : 60119
        function w(e) {
          if ('object' === typeof e && null !== e) {
            var t = e.$$typeof
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case c:
                  case f:
                  case o:
                  case i:
                  case l:
                  case p:
                    return e
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case s:
                      case d:
                      case v:
                      case h:
                      case u:
                        return e
                      default:
                        return t
                    }
                }
              case a:
                return t
            }
          }
        }
        function C(e) {
          return w(e) === f
        }
        ;(t.AsyncMode = c),
          (t.ConcurrentMode = f),
          (t.ContextConsumer = s),
          (t.ContextProvider = u),
          (t.Element = r),
          (t.ForwardRef = d),
          (t.Fragment = o),
          (t.Lazy = v),
          (t.Memo = h),
          (t.Portal = a),
          (t.Profiler = i),
          (t.StrictMode = l),
          (t.Suspense = p),
          (t.isAsyncMode = function (e) {
            return C(e) || w(e) === c
          }),
          (t.isConcurrentMode = C),
          (t.isContextConsumer = function (e) {
            return w(e) === s
          }),
          (t.isContextProvider = function (e) {
            return w(e) === u
          }),
          (t.isElement = function (e) {
            return 'object' === typeof e && null !== e && e.$$typeof === r
          }),
          (t.isForwardRef = function (e) {
            return w(e) === d
          }),
          (t.isFragment = function (e) {
            return w(e) === o
          }),
          (t.isLazy = function (e) {
            return w(e) === v
          }),
          (t.isMemo = function (e) {
            return w(e) === h
          }),
          (t.isPortal = function (e) {
            return w(e) === a
          }),
          (t.isProfiler = function (e) {
            return w(e) === i
          }),
          (t.isStrictMode = function (e) {
            return w(e) === l
          }),
          (t.isSuspense = function (e) {
            return w(e) === p
          }),
          (t.isValidElementType = function (e) {
            return (
              'string' === typeof e ||
              'function' === typeof e ||
              e === o ||
              e === f ||
              e === i ||
              e === l ||
              e === p ||
              e === m ||
              ('object' === typeof e &&
                null !== e &&
                (e.$$typeof === v ||
                  e.$$typeof === h ||
                  e.$$typeof === u ||
                  e.$$typeof === s ||
                  e.$$typeof === d ||
                  e.$$typeof === y ||
                  e.$$typeof === b ||
                  e.$$typeof === x ||
                  e.$$typeof === g))
            )
          }),
          (t.typeOf = w)
      },
      309: function (e, t, n) {
        e.exports = n(746)
      },
      463: function (e, t, n) {
        var r = n(791),
          a = n(296)
        function o(e) {
          for (
            var t =
                'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += '&args[]=' + encodeURIComponent(arguments[n])
          return (
            'Minified React error #' +
            e +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
          )
        }
        var l = new Set(),
          i = {}
        function u(e, t) {
          s(e, t), s(e + 'Capture', t)
        }
        function s(e, t) {
          for (i[e] = t, e = 0; e < t.length; e++) l.add(t[e])
        }
        var c = !(
            'undefined' === typeof window ||
            'undefined' === typeof window.document ||
            'undefined' === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          m = {}
        function h(e, t, n, r, a, o, l) {
          ;(this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = l)
        }
        var v = {}
        'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
          .split(' ')
          .forEach(function (e) {
            v[e] = new h(e, 0, !1, e, null, !1, !1)
          }),
          [
            ['acceptCharset', 'accept-charset'],
            ['className', 'class'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
          ].forEach(function (e) {
            var t = e[0]
            v[t] = new h(t, 1, !1, e[1], null, !1, !1)
          }),
          ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
            function (e) {
              v[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1)
            },
          ),
          [
            'autoReverse',
            'externalResourcesRequired',
            'focusable',
            'preserveAlpha',
          ].forEach(function (e) {
            v[e] = new h(e, 2, !1, e, null, !1, !1)
          }),
          'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
            .split(' ')
            .forEach(function (e) {
              v[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1)
            }),
          ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
            v[e] = new h(e, 3, !0, e, null, !1, !1)
          }),
          ['capture', 'download'].forEach(function (e) {
            v[e] = new h(e, 4, !1, e, null, !1, !1)
          }),
          ['cols', 'rows', 'size', 'span'].forEach(function (e) {
            v[e] = new h(e, 6, !1, e, null, !1, !1)
          }),
          ['rowSpan', 'start'].forEach(function (e) {
            v[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1)
          })
        var g = /[\-:]([a-z])/g
        function y(e) {
          return e[1].toUpperCase()
        }
        function b(e, t, n, r) {
          var a = v.hasOwnProperty(t) ? v[t] : null
          ;(null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ('o' !== t[0] && 'O' !== t[0]) ||
              ('n' !== t[1] && 'N' !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                'undefined' === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1
                  switch (typeof t) {
                    case 'function':
                    case 'symbol':
                      return !0
                    case 'boolean':
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : 'data-' !== (e = e.toLowerCase().slice(0, 5)) &&
                            'aria-' !== e)
                      )
                    default:
                      return !1
                  }
                })(e, t, n, r)
              )
                return !0
              if (r) return !1
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t
                  case 4:
                    return !1 === t
                  case 5:
                    return isNaN(t)
                  case 6:
                    return isNaN(t) || 1 > t
                }
              return !1
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(m, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (m[e] = !0) : ((p[e] = !0), !1)))
                  )
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && '' : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ''
                        : '' + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
        }
        'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
          .split(' ')
          .forEach(function (e) {
            var t = e.replace(g, y)
            v[t] = new h(t, 1, !1, e, null, !1, !1)
          }),
          'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
            .split(' ')
            .forEach(function (e) {
              var t = e.replace(g, y)
              v[t] = new h(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
            }),
          ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
            var t = e.replace(g, y)
            v[t] = new h(
              t,
              1,
              !1,
              e,
              'http://www.w3.org/XML/1998/namespace',
              !1,
              !1,
            )
          }),
          ['tabIndex', 'crossOrigin'].forEach(function (e) {
            v[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1)
          }),
          (v.xlinkHref = new h(
            'xlinkHref',
            1,
            !1,
            'xlink:href',
            'http://www.w3.org/1999/xlink',
            !0,
            !1,
          )),
          ['src', 'href', 'action', 'formAction'].forEach(function (e) {
            v[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0)
          })
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for('react.element'),
          C = Symbol.for('react.portal'),
          k = Symbol.for('react.fragment'),
          S = Symbol.for('react.strict_mode'),
          E = Symbol.for('react.profiler'),
          j = Symbol.for('react.provider'),
          N = Symbol.for('react.context'),
          P = Symbol.for('react.forward_ref'),
          O = Symbol.for('react.suspense'),
          L = Symbol.for('react.suspense_list'),
          T = Symbol.for('react.memo'),
          M = Symbol.for('react.lazy')
        Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode')
        var A = Symbol.for('react.offscreen')
        Symbol.for('react.legacy_hidden'),
          Symbol.for('react.cache'),
          Symbol.for('react.tracing_marker')
        var _ = Symbol.iterator
        function R(e) {
          return null === e || 'object' !== typeof e
            ? null
            : 'function' === typeof (e = (_ && e[_]) || e['@@iterator'])
            ? e
            : null
        }
        var z,
          F = Object.assign
        function I(e) {
          if (void 0 === z)
            try {
              throw Error()
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/)
              z = (t && t[1]) || ''
            }
          return '\n' + z + e
        }
        var B = !1
        function D(e, t) {
          if (!e || B) return ''
          B = !0
          var n = Error.prepareStackTrace
          Error.prepareStackTrace = void 0
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error()
                }),
                Object.defineProperty(t.prototype, 'props', {
                  set: function () {
                    throw Error()
                  },
                }),
                'object' === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, [])
                } catch (s) {
                  var r = s
                }
                Reflect.construct(e, [], t)
              } else {
                try {
                  t.call()
                } catch (s) {
                  r = s
                }
                e.call(t.prototype)
              }
            else {
              try {
                throw Error()
              } catch (s) {
                r = s
              }
              e()
            }
          } catch (s) {
            if (s && r && 'string' === typeof s.stack) {
              for (
                var a = s.stack.split('\n'),
                  o = r.stack.split('\n'),
                  l = a.length - 1,
                  i = o.length - 1;
                1 <= l && 0 <= i && a[l] !== o[i];

              )
                i--
              for (; 1 <= l && 0 <= i; l--, i--)
                if (a[l] !== o[i]) {
                  if (1 !== l || 1 !== i)
                    do {
                      if ((l--, 0 > --i || a[l] !== o[i])) {
                        var u = '\n' + a[l].replace(' at new ', ' at ')
                        return (
                          e.displayName &&
                            u.includes('<anonymous>') &&
                            (u = u.replace('<anonymous>', e.displayName)),
                          u
                        )
                      }
                    } while (1 <= l && 0 <= i)
                  break
                }
            }
          } finally {
            ;(B = !1), (Error.prepareStackTrace = n)
          }
          return (e = e ? e.displayName || e.name : '') ? I(e) : ''
        }
        function H(e) {
          switch (e.tag) {
            case 5:
              return I(e.type)
            case 16:
              return I('Lazy')
            case 13:
              return I('Suspense')
            case 19:
              return I('SuspenseList')
            case 0:
            case 2:
            case 15:
              return (e = D(e.type, !1))
            case 11:
              return (e = D(e.type.render, !1))
            case 1:
              return (e = D(e.type, !0))
            default:
              return ''
          }
        }
        function W(e) {
          if (null == e) return null
          if ('function' === typeof e) return e.displayName || e.name || null
          if ('string' === typeof e) return e
          switch (e) {
            case k:
              return 'Fragment'
            case C:
              return 'Portal'
            case E:
              return 'Profiler'
            case S:
              return 'StrictMode'
            case O:
              return 'Suspense'
            case L:
              return 'SuspenseList'
          }
          if ('object' === typeof e)
            switch (e.$$typeof) {
              case N:
                return (e.displayName || 'Context') + '.Consumer'
              case j:
                return (e._context.displayName || 'Context') + '.Provider'
              case P:
                var t = e.render
                return (
                  (e = e.displayName) ||
                    (e =
                      '' !== (e = t.displayName || t.name || '')
                        ? 'ForwardRef(' + e + ')'
                        : 'ForwardRef'),
                  e
                )
              case T:
                return null !== (t = e.displayName || null)
                  ? t
                  : W(e.type) || 'Memo'
              case M:
                ;(t = e._payload), (e = e._init)
                try {
                  return W(e(t))
                } catch (n) {}
            }
          return null
        }
        function U(e) {
          var t = e.type
          switch (e.tag) {
            case 24:
              return 'Cache'
            case 9:
              return (t.displayName || 'Context') + '.Consumer'
            case 10:
              return (t._context.displayName || 'Context') + '.Provider'
            case 18:
              return 'DehydratedFragment'
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ''),
                t.displayName ||
                  ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
              )
            case 7:
              return 'Fragment'
            case 5:
              return t
            case 4:
              return 'Portal'
            case 3:
              return 'Root'
            case 6:
              return 'Text'
            case 16:
              return W(t)
            case 8:
              return t === S ? 'StrictMode' : 'Mode'
            case 22:
              return 'Offscreen'
            case 12:
              return 'Profiler'
            case 21:
              return 'Scope'
            case 13:
              return 'Suspense'
            case 19:
              return 'SuspenseList'
            case 25:
              return 'TracingMarker'
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ('function' === typeof t)
                return t.displayName || t.name || null
              if ('string' === typeof t) return t
          }
          return null
        }
        function V(e) {
          switch (typeof e) {
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
            case 'object':
              return e
            default:
              return ''
          }
        }
        function Q(e) {
          var t = e.type
          return (
            (e = e.nodeName) &&
            'input' === e.toLowerCase() &&
            ('checkbox' === t || 'radio' === t)
          )
        }
        function K(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = Q(e) ? 'checked' : 'value',
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = '' + e[t]
              if (
                !e.hasOwnProperty(t) &&
                'undefined' !== typeof n &&
                'function' === typeof n.get &&
                'function' === typeof n.set
              ) {
                var a = n.get,
                  o = n.set
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this)
                    },
                    set: function (e) {
                      ;(r = '' + e), o.call(this, e)
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r
                    },
                    setValue: function (e) {
                      r = '' + e
                    },
                    stopTracking: function () {
                      ;(e._valueTracker = null), delete e[t]
                    },
                  }
                )
              }
            })(e))
        }
        function q(e) {
          if (!e) return !1
          var t = e._valueTracker
          if (!t) return !0
          var n = t.getValue(),
            r = ''
          return (
            e && (r = Q(e) ? (e.checked ? 'true' : 'false') : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          )
        }
        function Y(e) {
          if (
            'undefined' ===
            typeof (e =
              e || ('undefined' !== typeof document ? document : void 0))
          )
            return null
          try {
            return e.activeElement || e.body
          } catch (t) {
            return e.body
          }
        }
        function X(e, t) {
          var n = t.checked
          return F({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          })
        }
        function Z(e, t) {
          var n = null == t.defaultValue ? '' : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked
          ;(n = V(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                'checkbox' === t.type || 'radio' === t.type
                  ? null != t.checked
                  : null != t.value,
            })
        }
        function J(e, t) {
          null != (t = t.checked) && b(e, 'checked', t, !1)
        }
        function $(e, t) {
          J(e, t)
          var n = V(t.value),
            r = t.type
          if (null != n)
            'number' === r
              ? ((0 === n && '' === e.value) || e.value != n) &&
                (e.value = '' + n)
              : e.value !== '' + n && (e.value = '' + n)
          else if ('submit' === r || 'reset' === r)
            return void e.removeAttribute('value')
          t.hasOwnProperty('value')
            ? ee(e, t.type, n)
            : t.hasOwnProperty('defaultValue') &&
              ee(e, t.type, V(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked)
        }
        function G(e, t, n) {
          if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
            var r = t.type
            if (
              !(
                ('submit' !== r && 'reset' !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return
            ;(t = '' + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t)
          }
          '' !== (n = e.name) && (e.name = ''),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            '' !== n && (e.name = n)
        }
        function ee(e, t, n) {
          ;('number' === t && Y(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = '' + e._wrapperState.initialValue)
              : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
        }
        var te = Array.isArray
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {}
            for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0)
          } else {
            for (n = '' + V(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                )
              null !== t || e[a].disabled || (t = e[a])
            }
            null !== t && (t.selected = !0)
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91))
          return F({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: '' + e._wrapperState.initialValue,
          })
        }
        function ae(e, t) {
          var n = t.value
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92))
              if (te(n)) {
                if (1 < n.length) throw Error(o(93))
                n = n[0]
              }
              t = n
            }
            null == t && (t = ''), (n = t)
          }
          e._wrapperState = { initialValue: V(n) }
        }
        function oe(e, t) {
          var n = V(t.value),
            r = V(t.defaultValue)
          null != n &&
            ((n = '' + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = '' + r)
        }
        function le(e) {
          var t = e.textContent
          t === e._wrapperState.initialValue &&
            '' !== t &&
            null !== t &&
            (e.value = t)
        }
        function ie(e) {
          switch (e) {
            case 'svg':
              return 'http://www.w3.org/2000/svg'
            case 'math':
              return 'http://www.w3.org/1998/Math/MathML'
            default:
              return 'http://www.w3.org/1999/xhtml'
          }
        }
        function ue(e, t) {
          return null == e || 'http://www.w3.org/1999/xhtml' === e
            ? ie(t)
            : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
            ? 'http://www.w3.org/1999/xhtml'
            : e
        }
        var se,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                'http://www.w3.org/2000/svg' !== e.namespaceURI ||
                'innerHTML' in e
              )
                e.innerHTML = t
              else {
                for (
                  (se = se || document.createElement('div')).innerHTML =
                    '<svg>' + t.valueOf().toString() + '</svg>',
                    t = se.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild)
                for (; t.firstChild; ) e.appendChild(t.firstChild)
              }
            }),
            'undefined' !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t)
                  })
                }
              : ce)
        function de(e, t) {
          if (t) {
            var n = e.firstChild
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t)
          }
          e.textContent = t
        }
        var pe = {
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
          me = ['Webkit', 'ms', 'Moz', 'O']
        function he(e, t, n) {
          return null == t || 'boolean' === typeof t || '' === t
            ? ''
            : n ||
              'number' !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ('' + t).trim()
            : t + 'px'
        }
        function ve(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf('--'),
                a = he(n, t[n], r)
              'float' === n && (n = 'cssFloat'),
                r ? e.setProperty(n, a) : (e[n] = a)
            }
        }
        Object.keys(pe).forEach(function (e) {
          me.forEach(function (t) {
            ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e])
          })
        })
        var ge = F(
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
          },
        )
        function ye(e, t) {
          if (t) {
            if (
              ge[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e))
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60))
              if (
                'object' !== typeof t.dangerouslySetInnerHTML ||
                !('__html' in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61))
            }
            if (null != t.style && 'object' !== typeof t.style)
              throw Error(o(62))
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf('-')) return 'string' === typeof t.is
          switch (e) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
              return !1
            default:
              return !0
          }
        }
        var xe = null
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          )
        }
        var Ce = null,
          ke = null,
          Se = null
        function Ee(e) {
          if ((e = ba(e))) {
            if ('function' !== typeof Ce) throw Error(o(280))
            var t = e.stateNode
            t && ((t = wa(t)), Ce(e.stateNode, e.type, t))
          }
        }
        function je(e) {
          ke ? (Se ? Se.push(e) : (Se = [e])) : (ke = e)
        }
        function Ne() {
          if (ke) {
            var e = ke,
              t = Se
            if (((Se = ke = null), Ee(e), t))
              for (e = 0; e < t.length; e++) Ee(t[e])
          }
        }
        function Pe(e, t) {
          return e(t)
        }
        function Oe() {}
        var Le = !1
        function Te(e, t, n) {
          if (Le) return e(t, n)
          Le = !0
          try {
            return Pe(e, t, n)
          } finally {
            ;(Le = !1), (null !== ke || null !== Se) && (Oe(), Ne())
          }
        }
        function Me(e, t) {
          var n = e.stateNode
          if (null === n) return null
          var r = wa(n)
          if (null === r) return null
          n = r[t]
          switch (t) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
              ;(r = !r.disabled) ||
                (r = !(
                  'button' === (e = e.type) ||
                  'input' === e ||
                  'select' === e ||
                  'textarea' === e
                )),
                (e = !r)
              break
            default:
              e = !1
          }
          if (e) return null
          if (n && 'function' !== typeof n) throw Error(o(231, t, typeof n))
          return n
        }
        var Ae = !1
        if (c)
          try {
            var _e = {}
            Object.defineProperty(_e, 'passive', {
              get: function () {
                Ae = !0
              },
            }),
              window.addEventListener('test', _e, _e),
              window.removeEventListener('test', _e, _e)
          } catch (ce) {
            Ae = !1
          }
        function Re(e, t, n, r, a, o, l, i, u) {
          var s = Array.prototype.slice.call(arguments, 3)
          try {
            t.apply(n, s)
          } catch (c) {
            this.onError(c)
          }
        }
        var ze = !1,
          Fe = null,
          Ie = !1,
          Be = null,
          De = {
            onError: function (e) {
              ;(ze = !0), (Fe = e)
            },
          }
        function He(e, t, n, r, a, o, l, i, u) {
          ;(ze = !1), (Fe = null), Re.apply(De, arguments)
        }
        function We(e) {
          var t = e,
            n = e
          if (e.alternate) for (; t.return; ) t = t.return
          else {
            e = t
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return)
            } while (e)
          }
          return 3 === t.tag ? n : null
        }
        function Ue(e) {
          if (13 === e.tag) {
            var t = e.memoizedState
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated
          }
          return null
        }
        function Ve(e) {
          if (We(e) !== e) throw Error(o(188))
        }
        function Qe(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate
              if (!t) {
                if (null === (t = We(e))) throw Error(o(188))
                return t !== e ? null : e
              }
              for (var n = e, r = t; ; ) {
                var a = n.return
                if (null === a) break
                var l = a.alternate
                if (null === l) {
                  if (null !== (r = a.return)) {
                    n = r
                    continue
                  }
                  break
                }
                if (a.child === l.child) {
                  for (l = a.child; l; ) {
                    if (l === n) return Ve(a), e
                    if (l === r) return Ve(a), t
                    l = l.sibling
                  }
                  throw Error(o(188))
                }
                if (n.return !== r.return) (n = a), (r = l)
                else {
                  for (var i = !1, u = a.child; u; ) {
                    if (u === n) {
                      ;(i = !0), (n = a), (r = l)
                      break
                    }
                    if (u === r) {
                      ;(i = !0), (r = a), (n = l)
                      break
                    }
                    u = u.sibling
                  }
                  if (!i) {
                    for (u = l.child; u; ) {
                      if (u === n) {
                        ;(i = !0), (n = l), (r = a)
                        break
                      }
                      if (u === r) {
                        ;(i = !0), (r = l), (n = a)
                        break
                      }
                      u = u.sibling
                    }
                    if (!i) throw Error(o(189))
                  }
                }
                if (n.alternate !== r) throw Error(o(190))
              }
              if (3 !== n.tag) throw Error(o(188))
              return n.stateNode.current === n ? e : t
            })(e))
            ? Ke(e)
            : null
        }
        function Ke(e) {
          if (5 === e.tag || 6 === e.tag) return e
          for (e = e.child; null !== e; ) {
            var t = Ke(e)
            if (null !== t) return t
            e = e.sibling
          }
          return null
        }
        var qe = a.unstable_scheduleCallback,
          Ye = a.unstable_cancelCallback,
          Xe = a.unstable_shouldYield,
          Ze = a.unstable_requestPaint,
          Je = a.unstable_now,
          $e = a.unstable_getCurrentPriorityLevel,
          Ge = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null
        var lt = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((it(e) / ut) | 0)) | 0
              },
          it = Math.log,
          ut = Math.LN2
        var st = 64,
          ct = 4194304
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1
            case 2:
              return 2
            case 4:
              return 4
            case 8:
              return 8
            case 16:
              return 16
            case 32:
              return 32
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
              return 4194240 & e
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e
            case 134217728:
              return 134217728
            case 268435456:
              return 268435456
            case 536870912:
              return 536870912
            case 1073741824:
              return 1073741824
            default:
              return e
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes
          if (0 === n) return 0
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            l = 268435455 & n
          if (0 !== l) {
            var i = l & ~a
            0 !== i ? (r = ft(i)) : 0 !== (o &= l) && (r = ft(o))
          } else 0 !== (l = n & ~a) ? (r = ft(l)) : 0 !== o && (r = ft(o))
          if (0 === r) return 0
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - lt(t))), (r |= e[n]), (t &= ~a)
          return r
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250
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
              return t + 5e3
            default:
              return -1
          }
        }
        function mt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0
        }
        function ht() {
          var e = st
          return 0 === (4194240 & (st <<= 1)) && (st = 64), e
        }
        function vt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e)
          return t
        }
        function gt(e, t, n) {
          ;(e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - lt(t))] = n)
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t)
          for (e = e.entanglements; n; ) {
            var r = 31 - lt(n),
              a = 1 << r
            ;(a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a)
          }
        }
        var bt = 0
        function xt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1
        }
        var wt,
          Ct,
          kt,
          St,
          Et,
          jt = !1,
          Nt = [],
          Pt = null,
          Ot = null,
          Lt = null,
          Tt = new Map(),
          Mt = new Map(),
          At = [],
          _t =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
              ' ',
            )
        function Rt(e, t) {
          switch (e) {
            case 'focusin':
            case 'focusout':
              Pt = null
              break
            case 'dragenter':
            case 'dragleave':
              Ot = null
              break
            case 'mouseover':
            case 'mouseout':
              Lt = null
              break
            case 'pointerover':
            case 'pointerout':
              Tt.delete(t.pointerId)
              break
            case 'gotpointercapture':
            case 'lostpointercapture':
              Mt.delete(t.pointerId)
          }
        }
        function zt(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && Ct(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e)
        }
        function Ft(e) {
          var t = ya(e.target)
          if (null !== t) {
            var n = We(t)
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ue(n)))
                  return (
                    (e.blockedOn = t),
                    void Et(e.priority, function () {
                      kt(n)
                    })
                  )
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null)
          }
          e.blockedOn = null
        }
        function It(e) {
          if (null !== e.blockedOn) return !1
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Xt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
            if (null !== n)
              return null !== (t = ba(n)) && Ct(t), (e.blockedOn = n), !1
            var r = new (n = e.nativeEvent).constructor(n.type, n)
            ;(xe = r), n.target.dispatchEvent(r), (xe = null), t.shift()
          }
          return !0
        }
        function Bt(e, t, n) {
          It(e) && n.delete(t)
        }
        function Dt() {
          ;(jt = !1),
            null !== Pt && It(Pt) && (Pt = null),
            null !== Ot && It(Ot) && (Ot = null),
            null !== Lt && It(Lt) && (Lt = null),
            Tt.forEach(Bt),
            Mt.forEach(Bt)
        }
        function Ht(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            jt ||
              ((jt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Dt)))
        }
        function Wt(e) {
          function t(t) {
            return Ht(t, e)
          }
          if (0 < Nt.length) {
            Ht(Nt[0], e)
            for (var n = 1; n < Nt.length; n++) {
              var r = Nt[n]
              r.blockedOn === e && (r.blockedOn = null)
            }
          }
          for (
            null !== Pt && Ht(Pt, e),
              null !== Ot && Ht(Ot, e),
              null !== Lt && Ht(Lt, e),
              Tt.forEach(t),
              Mt.forEach(t),
              n = 0;
            n < At.length;
            n++
          )
            (r = At[n]).blockedOn === e && (r.blockedOn = null)
          for (; 0 < At.length && null === (n = At[0]).blockedOn; )
            Ft(n), null === n.blockedOn && At.shift()
        }
        var Ut = x.ReactCurrentBatchConfig,
          Vt = !0
        function Qt(e, t, n, r) {
          var a = bt,
            o = Ut.transition
          Ut.transition = null
          try {
            ;(bt = 1), qt(e, t, n, r)
          } finally {
            ;(bt = a), (Ut.transition = o)
          }
        }
        function Kt(e, t, n, r) {
          var a = bt,
            o = Ut.transition
          Ut.transition = null
          try {
            ;(bt = 4), qt(e, t, n, r)
          } finally {
            ;(bt = a), (Ut.transition = o)
          }
        }
        function qt(e, t, n, r) {
          if (Vt) {
            var a = Xt(e, t, n, r)
            if (null === a) Vr(e, t, r, Yt, n), Rt(e, r)
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case 'focusin':
                    return (Pt = zt(Pt, e, t, n, r, a)), !0
                  case 'dragenter':
                    return (Ot = zt(Ot, e, t, n, r, a)), !0
                  case 'mouseover':
                    return (Lt = zt(Lt, e, t, n, r, a)), !0
                  case 'pointerover':
                    var o = a.pointerId
                    return Tt.set(o, zt(Tt.get(o) || null, e, t, n, r, a)), !0
                  case 'gotpointercapture':
                    return (
                      (o = a.pointerId),
                      Mt.set(o, zt(Mt.get(o) || null, e, t, n, r, a)),
                      !0
                    )
                }
                return !1
              })(a, e, t, n, r)
            )
              r.stopPropagation()
            else if ((Rt(e, r), 4 & t && -1 < _t.indexOf(e))) {
              for (; null !== a; ) {
                var o = ba(a)
                if (
                  (null !== o && wt(o),
                  null === (o = Xt(e, t, n, r)) && Vr(e, t, r, Yt, n),
                  o === a)
                )
                  break
                a = o
              }
              null !== a && r.stopPropagation()
            } else Vr(e, t, r, null, n)
          }
        }
        var Yt = null
        function Xt(e, t, n, r) {
          if (((Yt = null), null !== (e = ya((e = we(r))))))
            if (null === (t = We(e))) e = null
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ue(t))) return e
              e = null
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null
              e = null
            } else t !== e && (e = null)
          return (Yt = e), null
        }
        function Zt(e) {
          switch (e) {
            case 'cancel':
            case 'click':
            case 'close':
            case 'contextmenu':
            case 'copy':
            case 'cut':
            case 'auxclick':
            case 'dblclick':
            case 'dragend':
            case 'dragstart':
            case 'drop':
            case 'focusin':
            case 'focusout':
            case 'input':
            case 'invalid':
            case 'keydown':
            case 'keypress':
            case 'keyup':
            case 'mousedown':
            case 'mouseup':
            case 'paste':
            case 'pause':
            case 'play':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerup':
            case 'ratechange':
            case 'reset':
            case 'resize':
            case 'seeked':
            case 'submit':
            case 'touchcancel':
            case 'touchend':
            case 'touchstart':
            case 'volumechange':
            case 'change':
            case 'selectionchange':
            case 'textInput':
            case 'compositionstart':
            case 'compositionend':
            case 'compositionupdate':
            case 'beforeblur':
            case 'afterblur':
            case 'beforeinput':
            case 'blur':
            case 'fullscreenchange':
            case 'focus':
            case 'hashchange':
            case 'popstate':
            case 'select':
            case 'selectstart':
              return 1
            case 'drag':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'mousemove':
            case 'mouseout':
            case 'mouseover':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'scroll':
            case 'toggle':
            case 'touchmove':
            case 'wheel':
            case 'mouseenter':
            case 'mouseleave':
            case 'pointerenter':
            case 'pointerleave':
              return 4
            case 'message':
              switch ($e()) {
                case Ge:
                  return 1
                case et:
                  return 4
                case tt:
                case nt:
                  return 16
                case rt:
                  return 536870912
                default:
                  return 16
              }
            default:
              return 16
          }
        }
        var Jt = null,
          $t = null,
          Gt = null
        function en() {
          if (Gt) return Gt
          var e,
            t,
            n = $t,
            r = n.length,
            a = 'value' in Jt ? Jt.value : Jt.textContent,
            o = a.length
          for (e = 0; e < r && n[e] === a[e]; e++);
          var l = r - e
          for (t = 1; t <= l && n[r - t] === a[o - t]; t++);
          return (Gt = a.slice(e, 1 < t ? 1 - t : void 0))
        }
        function tn(e) {
          var t = e.keyCode
          return (
            'charCode' in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          )
        }
        function nn() {
          return !0
        }
        function rn() {
          return !1
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var l in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(a) : a[l]))
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            )
          }
          return (
            F(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0
                var e = this.nativeEvent
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : 'unknown' !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn))
              },
              stopPropagation: function () {
                var e = this.nativeEvent
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : 'unknown' !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn))
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          )
        }
        var on,
          ln,
          un,
          sn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(sn),
          fn = F({}, sn, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = F({}, fn, {
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
            getModifierState: En,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget
            },
            movementX: function (e) {
              return 'movementX' in e
                ? e.movementX
                : (e !== un &&
                    (un && 'mousemove' === e.type
                      ? ((on = e.screenX - un.screenX),
                        (ln = e.screenY - un.screenY))
                      : (ln = on = 0),
                    (un = e)),
                  on)
            },
            movementY: function (e) {
              return 'movementY' in e ? e.movementY : ln
            },
          }),
          mn = an(pn),
          hn = an(F({}, pn, { dataTransfer: 0 })),
          vn = an(F({}, fn, { relatedTarget: 0 })),
          gn = an(
            F({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          yn = F({}, sn, {
            clipboardData: function (e) {
              return 'clipboardData' in e
                ? e.clipboardData
                : window.clipboardData
            },
          }),
          bn = an(yn),
          xn = an(F({}, sn, { data: 0 })),
          wn = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
          },
          Cn = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
          },
          kn = {
            Alt: 'altKey',
            Control: 'ctrlKey',
            Meta: 'metaKey',
            Shift: 'shiftKey',
          }
        function Sn(e) {
          var t = this.nativeEvent
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = kn[e]) && !!t[e]
        }
        function En() {
          return Sn
        }
        var jn = F({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key
                if ('Unidentified' !== t) return t
              }
              return 'keypress' === e.type
                ? 13 === (e = tn(e))
                  ? 'Enter'
                  : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                ? Cn[e.keyCode] || 'Unidentified'
                : ''
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: En,
            charCode: function (e) {
              return 'keypress' === e.type ? tn(e) : 0
            },
            keyCode: function (e) {
              return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0
            },
            which: function (e) {
              return 'keypress' === e.type
                ? tn(e)
                : 'keydown' === e.type || 'keyup' === e.type
                ? e.keyCode
                : 0
            },
          }),
          Nn = an(jn),
          Pn = an(
            F({}, pn, {
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
          ),
          On = an(
            F({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: En,
            }),
          ),
          Ln = an(
            F({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          Tn = F({}, pn, {
            deltaX: function (e) {
              return 'deltaX' in e
                ? e.deltaX
                : 'wheelDeltaX' in e
                ? -e.wheelDeltaX
                : 0
            },
            deltaY: function (e) {
              return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                ? -e.wheelDeltaY
                : 'wheelDelta' in e
                ? -e.wheelDelta
                : 0
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Mn = an(Tn),
          An = [9, 13, 27, 32],
          _n = c && 'CompositionEvent' in window,
          Rn = null
        c && 'documentMode' in document && (Rn = document.documentMode)
        var zn = c && 'TextEvent' in window && !Rn,
          Fn = c && (!_n || (Rn && 8 < Rn && 11 >= Rn)),
          In = String.fromCharCode(32),
          Bn = !1
        function Dn(e, t) {
          switch (e) {
            case 'keyup':
              return -1 !== An.indexOf(t.keyCode)
            case 'keydown':
              return 229 !== t.keyCode
            case 'keypress':
            case 'mousedown':
            case 'focusout':
              return !0
            default:
              return !1
          }
        }
        function Hn(e) {
          return 'object' === typeof (e = e.detail) && 'data' in e
            ? e.data
            : null
        }
        var Wn = !1
        var Un = {
          color: !0,
          date: !0,
          datetime: !0,
          'datetime-local': !0,
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
        }
        function Vn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase()
          return 'input' === t ? !!Un[e.type] : 'textarea' === t
        }
        function Qn(e, t, n, r) {
          je(r),
            0 < (t = Kr(t, 'onChange')).length &&
              ((n = new cn('onChange', 'change', null, n, r)),
              e.push({ event: n, listeners: t }))
        }
        var Kn = null,
          qn = null
        function Yn(e) {
          Ir(e, 0)
        }
        function Xn(e) {
          if (q(xa(e))) return e
        }
        function Zn(e, t) {
          if ('change' === e) return t
        }
        var Jn = !1
        if (c) {
          var $n
          if (c) {
            var Gn = 'oninput' in document
            if (!Gn) {
              var er = document.createElement('div')
              er.setAttribute('oninput', 'return;'),
                (Gn = 'function' === typeof er.oninput)
            }
            $n = Gn
          } else $n = !1
          Jn = $n && (!document.documentMode || 9 < document.documentMode)
        }
        function tr() {
          Kn && (Kn.detachEvent('onpropertychange', nr), (qn = Kn = null))
        }
        function nr(e) {
          if ('value' === e.propertyName && Xn(qn)) {
            var t = []
            Qn(t, qn, e, we(e)), Te(Yn, t)
          }
        }
        function rr(e, t, n) {
          'focusin' === e
            ? (tr(), (qn = n), (Kn = t).attachEvent('onpropertychange', nr))
            : 'focusout' === e && tr()
        }
        function ar(e) {
          if ('selectionchange' === e || 'keyup' === e || 'keydown' === e)
            return Xn(qn)
        }
        function or(e, t) {
          if ('click' === e) return Xn(t)
        }
        function lr(e, t) {
          if ('input' === e || 'change' === e) return Xn(t)
        }
        var ir =
          'function' === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                )
              }
        function ur(e, t) {
          if (ir(e, t)) return !0
          if (
            'object' !== typeof e ||
            null === e ||
            'object' !== typeof t ||
            null === t
          )
            return !1
          var n = Object.keys(e),
            r = Object.keys(t)
          if (n.length !== r.length) return !1
          for (r = 0; r < n.length; r++) {
            var a = n[r]
            if (!f.call(t, a) || !ir(e[a], t[a])) return !1
          }
          return !0
        }
        function sr(e) {
          for (; e && e.firstChild; ) e = e.firstChild
          return e
        }
        function cr(e, t) {
          var n,
            r = sr(e)
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e }
              e = n
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling
                  break e
                }
                r = r.parentNode
              }
              r = void 0
            }
            r = sr(r)
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : 'contains' in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          )
        }
        function dr() {
          for (var e = window, t = Y(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = 'string' === typeof t.contentWindow.location.href
            } catch (r) {
              n = !1
            }
            if (!n) break
            t = Y((e = t.contentWindow).document)
          }
          return t
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase()
          return (
            t &&
            (('input' === t &&
              ('text' === e.type ||
                'search' === e.type ||
                'tel' === e.type ||
                'url' === e.type ||
                'password' === e.type)) ||
              'textarea' === t ||
              'true' === e.contentEditable)
          )
        }
        function mr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                'selectionStart' in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length))
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection()
                var a = n.textContent.length,
                  o = Math.min(r.start, a)
                ;(r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = cr(n, o))
                var l = cr(n, r)
                a &&
                  l &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== l.node ||
                    e.focusOffset !== l.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(l.node, l.offset))
                    : (t.setEnd(l.node, l.offset), e.addRange(t)))
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
            for (
              'function' === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top)
          }
        }
        var hr = c && 'documentMode' in document && 11 >= document.documentMode,
          vr = null,
          gr = null,
          yr = null,
          br = !1
        function xr(e, t, n) {
          var r =
            n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument
          br ||
            null == vr ||
            vr !== Y(r) ||
            ('selectionStart' in (r = vr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && ur(yr, r)) ||
              ((yr = r),
              0 < (r = Kr(gr, 'onSelect')).length &&
                ((t = new cn('onSelect', 'select', null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = vr))))
        }
        function wr(e, t) {
          var n = {}
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n['Webkit' + e] = 'webkit' + t),
            (n['Moz' + e] = 'moz' + t),
            n
          )
        }
        var Cr = {
            animationend: wr('Animation', 'AnimationEnd'),
            animationiteration: wr('Animation', 'AnimationIteration'),
            animationstart: wr('Animation', 'AnimationStart'),
            transitionend: wr('Transition', 'TransitionEnd'),
          },
          kr = {},
          Sr = {}
        function Er(e) {
          if (kr[e]) return kr[e]
          if (!Cr[e]) return e
          var t,
            n = Cr[e]
          for (t in n) if (n.hasOwnProperty(t) && t in Sr) return (kr[e] = n[t])
          return e
        }
        c &&
          ((Sr = document.createElement('div').style),
          'AnimationEvent' in window ||
            (delete Cr.animationend.animation,
            delete Cr.animationiteration.animation,
            delete Cr.animationstart.animation),
          'TransitionEvent' in window || delete Cr.transitionend.transition)
        var jr = Er('animationend'),
          Nr = Er('animationiteration'),
          Pr = Er('animationstart'),
          Or = Er('transitionend'),
          Lr = new Map(),
          Tr =
            'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
              ' ',
            )
        function Mr(e, t) {
          Lr.set(e, t), u(t, [e])
        }
        for (var Ar = 0; Ar < Tr.length; Ar++) {
          var _r = Tr[Ar]
          Mr(_r.toLowerCase(), 'on' + (_r[0].toUpperCase() + _r.slice(1)))
        }
        Mr(jr, 'onAnimationEnd'),
          Mr(Nr, 'onAnimationIteration'),
          Mr(Pr, 'onAnimationStart'),
          Mr('dblclick', 'onDoubleClick'),
          Mr('focusin', 'onFocus'),
          Mr('focusout', 'onBlur'),
          Mr(Or, 'onTransitionEnd'),
          s('onMouseEnter', ['mouseout', 'mouseover']),
          s('onMouseLeave', ['mouseout', 'mouseover']),
          s('onPointerEnter', ['pointerout', 'pointerover']),
          s('onPointerLeave', ['pointerout', 'pointerover']),
          u(
            'onChange',
            'change click focusin focusout input keydown keyup selectionchange'.split(
              ' ',
            ),
          ),
          u(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
              ' ',
            ),
          ),
          u('onBeforeInput', [
            'compositionend',
            'keypress',
            'textInput',
            'paste',
          ]),
          u(
            'onCompositionEnd',
            'compositionend focusout keydown keypress keyup mousedown'.split(
              ' ',
            ),
          ),
          u(
            'onCompositionStart',
            'compositionstart focusout keydown keypress keyup mousedown'.split(
              ' ',
            ),
          ),
          u(
            'onCompositionUpdate',
            'compositionupdate focusout keydown keypress keyup mousedown'.split(
              ' ',
            ),
          )
        var Rr =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
              ' ',
            ),
          zr = new Set(
            'cancel close invalid load scroll toggle'.split(' ').concat(Rr),
          )
        function Fr(e, t, n) {
          var r = e.type || 'unknown-event'
          ;(e.currentTarget = n),
            (function (e, t, n, r, a, l, i, u, s) {
              if ((He.apply(this, arguments), ze)) {
                if (!ze) throw Error(o(198))
                var c = Fe
                ;(ze = !1), (Fe = null), Ie || ((Ie = !0), (Be = c))
              }
            })(r, t, void 0, e),
            (e.currentTarget = null)
        }
        function Ir(e, t) {
          t = 0 !== (4 & t)
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event
            r = r.listeners
            e: {
              var o = void 0
              if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                  var i = r[l],
                    u = i.instance,
                    s = i.currentTarget
                  if (((i = i.listener), u !== o && a.isPropagationStopped()))
                    break e
                  Fr(a, i, s), (o = u)
                }
              else
                for (l = 0; l < r.length; l++) {
                  if (
                    ((u = (i = r[l]).instance),
                    (s = i.currentTarget),
                    (i = i.listener),
                    u !== o && a.isPropagationStopped())
                  )
                    break e
                  Fr(a, i, s), (o = u)
                }
            }
          }
          if (Ie) throw ((e = Be), (Ie = !1), (Be = null), e)
        }
        function Br(e, t) {
          var n = t[ha]
          void 0 === n && (n = t[ha] = new Set())
          var r = e + '__bubble'
          n.has(r) || (Ur(t, e, 2, !1), n.add(r))
        }
        function Dr(e, t, n) {
          var r = 0
          t && (r |= 4), Ur(n, e, r, t)
        }
        var Hr = '_reactListening' + Math.random().toString(36).slice(2)
        function Wr(e) {
          if (!e[Hr]) {
            ;(e[Hr] = !0),
              l.forEach(function (t) {
                'selectionchange' !== t &&
                  (zr.has(t) || Dr(t, !1, e), Dr(t, !0, e))
              })
            var t = 9 === e.nodeType ? e : e.ownerDocument
            null === t || t[Hr] || ((t[Hr] = !0), Dr('selectionchange', !1, t))
          }
        }
        function Ur(e, t, n, r) {
          switch (Zt(t)) {
            case 1:
              var a = Qt
              break
            case 4:
              a = Kt
              break
            default:
              a = qt
          }
          ;(n = a.bind(null, t, n, e)),
            (a = void 0),
            !Ae ||
              ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1)
        }
        function Vr(e, t, n, r, a) {
          var o = r
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return
              var l = r.tag
              if (3 === l || 4 === l) {
                var i = r.stateNode.containerInfo
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break
                if (4 === l)
                  for (l = r.return; null !== l; ) {
                    var u = l.tag
                    if (
                      (3 === u || 4 === u) &&
                      ((u = l.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return
                    l = l.return
                  }
                for (; null !== i; ) {
                  if (null === (l = ya(i))) return
                  if (5 === (u = l.tag) || 6 === u) {
                    r = o = l
                    continue e
                  }
                  i = i.parentNode
                }
              }
              r = r.return
            }
          Te(function () {
            var r = o,
              a = we(n),
              l = []
            e: {
              var i = Lr.get(e)
              if (void 0 !== i) {
                var u = cn,
                  s = e
                switch (e) {
                  case 'keypress':
                    if (0 === tn(n)) break e
                  case 'keydown':
                  case 'keyup':
                    u = Nn
                    break
                  case 'focusin':
                    ;(s = 'focus'), (u = vn)
                    break
                  case 'focusout':
                    ;(s = 'blur'), (u = vn)
                    break
                  case 'beforeblur':
                  case 'afterblur':
                    u = vn
                    break
                  case 'click':
                    if (2 === n.button) break e
                  case 'auxclick':
                  case 'dblclick':
                  case 'mousedown':
                  case 'mousemove':
                  case 'mouseup':
                  case 'mouseout':
                  case 'mouseover':
                  case 'contextmenu':
                    u = mn
                    break
                  case 'drag':
                  case 'dragend':
                  case 'dragenter':
                  case 'dragexit':
                  case 'dragleave':
                  case 'dragover':
                  case 'dragstart':
                  case 'drop':
                    u = hn
                    break
                  case 'touchcancel':
                  case 'touchend':
                  case 'touchmove':
                  case 'touchstart':
                    u = On
                    break
                  case jr:
                  case Nr:
                  case Pr:
                    u = gn
                    break
                  case Or:
                    u = Ln
                    break
                  case 'scroll':
                    u = dn
                    break
                  case 'wheel':
                    u = Mn
                    break
                  case 'copy':
                  case 'cut':
                  case 'paste':
                    u = bn
                    break
                  case 'gotpointercapture':
                  case 'lostpointercapture':
                  case 'pointercancel':
                  case 'pointerdown':
                  case 'pointermove':
                  case 'pointerout':
                  case 'pointerover':
                  case 'pointerup':
                    u = Pn
                }
                var c = 0 !== (4 & t),
                  f = !c && 'scroll' === e,
                  d = c ? (null !== i ? i + 'Capture' : null) : i
                c = []
                for (var p, m = r; null !== m; ) {
                  var h = (p = m).stateNode
                  if (
                    (5 === p.tag &&
                      null !== h &&
                      ((p = h),
                      null !== d &&
                        null != (h = Me(m, d)) &&
                        c.push(Qr(m, h, p))),
                    f)
                  )
                    break
                  m = m.return
                }
                0 < c.length &&
                  ((i = new u(i, s, null, n, a)),
                  l.push({ event: i, listeners: c }))
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = 'mouseout' === e || 'pointerout' === e),
                (!(i = 'mouseover' === e || 'pointerover' === e) ||
                  n === xe ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!ya(s) && !s[ma])) &&
                  (u || i) &&
                  ((i =
                    a.window === a
                      ? a
                      : (i = a.ownerDocument)
                      ? i.defaultView || i.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? ya(s)
                          : null) &&
                        (s !== (f = We(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = mn),
                  (h = 'onMouseLeave'),
                  (d = 'onMouseEnter'),
                  (m = 'mouse'),
                  ('pointerout' !== e && 'pointerover' !== e) ||
                    ((c = Pn),
                    (h = 'onPointerLeave'),
                    (d = 'onPointerEnter'),
                    (m = 'pointer')),
                  (f = null == u ? i : xa(u)),
                  (p = null == s ? i : xa(s)),
                  ((i = new c(h, m + 'leave', u, n, a)).target = f),
                  (i.relatedTarget = p),
                  (h = null),
                  ya(a) === r &&
                    (((c = new c(d, m + 'enter', s, n, a)).target = p),
                    (c.relatedTarget = f),
                    (h = c)),
                  (f = h),
                  u && s)
                )
                  e: {
                    for (d = s, m = 0, p = c = u; p; p = qr(p)) m++
                    for (p = 0, h = d; h; h = qr(h)) p++
                    for (; 0 < m - p; ) (c = qr(c)), m--
                    for (; 0 < p - m; ) (d = qr(d)), p--
                    for (; m--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e
                      ;(c = qr(c)), (d = qr(d))
                    }
                    c = null
                  }
                else c = null
                null !== u && Yr(l, i, u, c, !1),
                  null !== s && null !== f && Yr(l, f, s, c, !0)
              }
              if (
                'select' ===
                  (u =
                    (i = r ? xa(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ('input' === u && 'file' === i.type)
              )
                var v = Zn
              else if (Vn(i))
                if (Jn) v = lr
                else {
                  v = ar
                  var g = rr
                }
              else
                (u = i.nodeName) &&
                  'input' === u.toLowerCase() &&
                  ('checkbox' === i.type || 'radio' === i.type) &&
                  (v = or)
              switch (
                (v && (v = v(e, r))
                  ? Qn(l, v, n, a)
                  : (g && g(e, i, r),
                    'focusout' === e &&
                      (g = i._wrapperState) &&
                      g.controlled &&
                      'number' === i.type &&
                      ee(i, 'number', i.value)),
                (g = r ? xa(r) : window),
                e)
              ) {
                case 'focusin':
                  ;(Vn(g) || 'true' === g.contentEditable) &&
                    ((vr = g), (gr = r), (yr = null))
                  break
                case 'focusout':
                  yr = gr = vr = null
                  break
                case 'mousedown':
                  br = !0
                  break
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                  ;(br = !1), xr(l, n, a)
                  break
                case 'selectionchange':
                  if (hr) break
                case 'keydown':
                case 'keyup':
                  xr(l, n, a)
              }
              var y
              if (_n)
                e: {
                  switch (e) {
                    case 'compositionstart':
                      var b = 'onCompositionStart'
                      break e
                    case 'compositionend':
                      b = 'onCompositionEnd'
                      break e
                    case 'compositionupdate':
                      b = 'onCompositionUpdate'
                      break e
                  }
                  b = void 0
                }
              else
                Wn
                  ? Dn(e, n) && (b = 'onCompositionEnd')
                  : 'keydown' === e &&
                    229 === n.keyCode &&
                    (b = 'onCompositionStart')
              b &&
                (Fn &&
                  'ko' !== n.locale &&
                  (Wn || 'onCompositionStart' !== b
                    ? 'onCompositionEnd' === b && Wn && (y = en())
                    : (($t = 'value' in (Jt = a) ? Jt.value : Jt.textContent),
                      (Wn = !0))),
                0 < (g = Kr(r, b)).length &&
                  ((b = new xn(b, e, null, n, a)),
                  l.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Hn(n)) && (b.data = y))),
                (y = zn
                  ? (function (e, t) {
                      switch (e) {
                        case 'compositionend':
                          return Hn(t)
                        case 'keypress':
                          return 32 !== t.which ? null : ((Bn = !0), In)
                        case 'textInput':
                          return (e = t.data) === In && Bn ? null : e
                        default:
                          return null
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Wn)
                        return 'compositionend' === e || (!_n && Dn(e, t))
                          ? ((e = en()), (Gt = $t = Jt = null), (Wn = !1), e)
                          : null
                      switch (e) {
                        case 'paste':
                        default:
                          return null
                        case 'keypress':
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char
                            if (t.which) return String.fromCharCode(t.which)
                          }
                          return null
                        case 'compositionend':
                          return Fn && 'ko' !== t.locale ? null : t.data
                      }
                    })(e, n)) &&
                  0 < (r = Kr(r, 'onBeforeInput')).length &&
                  ((a = new xn('onBeforeInput', 'beforeinput', null, n, a)),
                  l.push({ event: a, listeners: r }),
                  (a.data = y))
            }
            Ir(l, t)
          })
        }
        function Qr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n }
        }
        function Kr(e, t) {
          for (var n = t + 'Capture', r = []; null !== e; ) {
            var a = e,
              o = a.stateNode
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Me(e, n)) && r.unshift(Qr(e, o, a)),
              null != (o = Me(e, t)) && r.push(Qr(e, o, a))),
              (e = e.return)
          }
          return r
        }
        function qr(e) {
          if (null === e) return null
          do {
            e = e.return
          } while (e && 5 !== e.tag)
          return e || null
        }
        function Yr(e, t, n, r, a) {
          for (var o = t._reactName, l = []; null !== n && n !== r; ) {
            var i = n,
              u = i.alternate,
              s = i.stateNode
            if (null !== u && u === r) break
            5 === i.tag &&
              null !== s &&
              ((i = s),
              a
                ? null != (u = Me(n, o)) && l.unshift(Qr(n, u, i))
                : a || (null != (u = Me(n, o)) && l.push(Qr(n, u, i)))),
              (n = n.return)
          }
          0 !== l.length && e.push({ event: t, listeners: l })
        }
        var Xr = /\r\n?/g,
          Zr = /\u0000|\uFFFD/g
        function Jr(e) {
          return ('string' === typeof e ? e : '' + e)
            .replace(Xr, '\n')
            .replace(Zr, '')
        }
        function $r(e, t, n) {
          if (((t = Jr(t)), Jr(e) !== t && n)) throw Error(o(425))
        }
        function Gr() {}
        var ea = null,
          ta = null
        function na(e, t) {
          return (
            'textarea' === e ||
            'noscript' === e ||
            'string' === typeof t.children ||
            'number' === typeof t.children ||
            ('object' === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          )
        }
        var ra = 'function' === typeof setTimeout ? setTimeout : void 0,
          aa = 'function' === typeof clearTimeout ? clearTimeout : void 0,
          oa = 'function' === typeof Promise ? Promise : void 0,
          la =
            'function' === typeof queueMicrotask
              ? queueMicrotask
              : 'undefined' !== typeof oa
              ? function (e) {
                  return oa.resolve(null).then(e).catch(ia)
                }
              : ra
        function ia(e) {
          setTimeout(function () {
            throw e
          })
        }
        function ua(e, t) {
          var n = t,
            r = 0
          do {
            var a = n.nextSibling
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ('/$' === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Wt(t)
                r--
              } else ('$' !== n && '$?' !== n && '$!' !== n) || r++
            n = a
          } while (n)
          Wt(t)
        }
        function sa(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType
            if (1 === t || 3 === t) break
            if (8 === t) {
              if ('$' === (t = e.data) || '$!' === t || '$?' === t) break
              if ('/$' === t) return null
            }
          }
          return e
        }
        function ca(e) {
          e = e.previousSibling
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data
              if ('$' === n || '$!' === n || '$?' === n) {
                if (0 === t) return e
                t--
              } else '/$' === n && t++
            }
            e = e.previousSibling
          }
          return null
        }
        var fa = Math.random().toString(36).slice(2),
          da = '__reactFiber$' + fa,
          pa = '__reactProps$' + fa,
          ma = '__reactContainer$' + fa,
          ha = '__reactEvents$' + fa,
          va = '__reactListeners$' + fa,
          ga = '__reactHandles$' + fa
        function ya(e) {
          var t = e[da]
          if (t) return t
          for (var n = e.parentNode; n; ) {
            if ((t = n[ma] || n[da])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[da])) return n
                  e = ca(e)
                }
              return t
            }
            n = (e = n).parentNode
          }
          return null
        }
        function ba(e) {
          return !(e = e[da] || e[ma]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e
        }
        function xa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode
          throw Error(o(33))
        }
        function wa(e) {
          return e[pa] || null
        }
        var Ca = [],
          ka = -1
        function Sa(e) {
          return { current: e }
        }
        function Ea(e) {
          0 > ka || ((e.current = Ca[ka]), (Ca[ka] = null), ka--)
        }
        function ja(e, t) {
          ka++, (Ca[ka] = e.current), (e.current = t)
        }
        var Na = {},
          Pa = Sa(Na),
          Oa = Sa(!1),
          La = Na
        function Ta(e, t) {
          var n = e.type.contextTypes
          if (!n) return Na
          var r = e.stateNode
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext
          var a,
            o = {}
          for (a in n) o[a] = t[a]
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          )
        }
        function Ma(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e
        }
        function Aa() {
          Ea(Oa), Ea(Pa)
        }
        function _a(e, t, n) {
          if (Pa.current !== Na) throw Error(o(168))
          ja(Pa, t), ja(Oa, n)
        }
        function Ra(e, t, n) {
          var r = e.stateNode
          if (
            ((t = t.childContextTypes), 'function' !== typeof r.getChildContext)
          )
            return n
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, U(e) || 'Unknown', a))
          return F({}, n, r)
        }
        function za(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Na),
            (La = Pa.current),
            ja(Pa, e),
            ja(Oa, Oa.current),
            !0
          )
        }
        function Fa(e, t, n) {
          var r = e.stateNode
          if (!r) throw Error(o(169))
          n
            ? ((e = Ra(e, t, La)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ea(Oa),
              Ea(Pa),
              ja(Pa, e))
            : Ea(Oa),
            ja(Oa, n)
        }
        var Ia = null,
          Ba = !1,
          Da = !1
        function Ha(e) {
          null === Ia ? (Ia = [e]) : Ia.push(e)
        }
        function Wa() {
          if (!Da && null !== Ia) {
            Da = !0
            var e = 0,
              t = bt
            try {
              var n = Ia
              for (bt = 1; e < n.length; e++) {
                var r = n[e]
                do {
                  r = r(!0)
                } while (null !== r)
              }
              ;(Ia = null), (Ba = !1)
            } catch (a) {
              throw (null !== Ia && (Ia = Ia.slice(e + 1)), qe(Ge, Wa), a)
            } finally {
              ;(bt = t), (Da = !1)
            }
          }
          return null
        }
        var Ua = [],
          Va = 0,
          Qa = null,
          Ka = 0,
          qa = [],
          Ya = 0,
          Xa = null,
          Za = 1,
          Ja = ''
        function $a(e, t) {
          ;(Ua[Va++] = Ka), (Ua[Va++] = Qa), (Qa = e), (Ka = t)
        }
        function Ga(e, t, n) {
          ;(qa[Ya++] = Za), (qa[Ya++] = Ja), (qa[Ya++] = Xa), (Xa = e)
          var r = Za
          e = Ja
          var a = 32 - lt(r) - 1
          ;(r &= ~(1 << a)), (n += 1)
          var o = 32 - lt(t) + a
          if (30 < o) {
            var l = a - (a % 5)
            ;(o = (r & ((1 << l) - 1)).toString(32)),
              (r >>= l),
              (a -= l),
              (Za = (1 << (32 - lt(t) + a)) | (n << a) | r),
              (Ja = o + e)
          } else (Za = (1 << o) | (n << a) | r), (Ja = e)
        }
        function eo(e) {
          null !== e.return && ($a(e, 1), Ga(e, 1, 0))
        }
        function to(e) {
          for (; e === Qa; )
            (Qa = Ua[--Va]), (Ua[Va] = null), (Ka = Ua[--Va]), (Ua[Va] = null)
          for (; e === Xa; )
            (Xa = qa[--Ya]),
              (qa[Ya] = null),
              (Ja = qa[--Ya]),
              (qa[Ya] = null),
              (Za = qa[--Ya]),
              (qa[Ya] = null)
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null
        function lo(e, t) {
          var n = Ms(5, null, null, 0)
          ;(n.elementType = 'DELETED'),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n)
        }
        function io(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (no = e), (ro = sa(t.firstChild)), !0)
              )
            case 6:
              return (
                null !==
                  (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              )
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Xa ? { id: Za, overflow: Ja } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Ms(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              )
            default:
              return !1
          }
        }
        function uo(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags)
        }
        function so(e) {
          if (ao) {
            var t = ro
            if (t) {
              var n = t
              if (!io(e, t)) {
                if (uo(e)) throw Error(o(418))
                t = sa(n.nextSibling)
                var r = no
                t && io(e, t)
                  ? lo(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e))
              }
            } else {
              if (uo(e)) throw Error(o(418))
              ;(e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e)
            }
          }
        }
        function co(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return
          no = e
        }
        function fo(e) {
          if (e !== no) return !1
          if (!ao) return co(e), (ao = !0), !1
          var t
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                'head' !== (t = e.type) &&
                'body' !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (uo(e)) throw (po(), Error(o(418)))
            for (; t; ) lo(e, t), (t = sa(t.nextSibling))
          }
          if ((co(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317))
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data
                  if ('/$' === n) {
                    if (0 === t) {
                      ro = sa(e.nextSibling)
                      break e
                    }
                    t--
                  } else ('$' !== n && '$!' !== n && '$?' !== n) || t++
                }
                e = e.nextSibling
              }
              ro = null
            }
          } else ro = no ? sa(e.stateNode.nextSibling) : null
          return !0
        }
        function po() {
          for (var e = ro; e; ) e = sa(e.nextSibling)
        }
        function mo() {
          ;(ro = no = null), (ao = !1)
        }
        function ho(e) {
          null === oo ? (oo = [e]) : oo.push(e)
        }
        var vo = x.ReactCurrentBatchConfig
        function go(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = F({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n])
            return t
          }
          return t
        }
        var yo = Sa(null),
          bo = null,
          xo = null,
          wo = null
        function Co() {
          wo = xo = bo = null
        }
        function ko(e) {
          var t = yo.current
          Ea(yo), (e._currentValue = t)
        }
        function So(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break
            e = e.return
          }
        }
        function Eo(e, t) {
          ;(bo = e),
            (wo = xo = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (xi = !0), (e.firstContext = null))
        }
        function jo(e) {
          var t = e._currentValue
          if (wo !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === xo)
            ) {
              if (null === bo) throw Error(o(308))
              ;(xo = e), (bo.dependencies = { lanes: 0, firstContext: e })
            } else xo = xo.next = e
          return t
        }
        var No = null
        function Po(e) {
          null === No ? (No = [e]) : No.push(e)
        }
        function Oo(e, t, n, r) {
          var a = t.interleaved
          return (
            null === a
              ? ((n.next = n), Po(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Lo(e, r)
          )
        }
        function Lo(e, t) {
          e.lanes |= t
          var n = e.alternate
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return)
          return 3 === n.tag ? n.stateNode : null
        }
        var To = !1
        function Mo(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          }
        }
        function Ao(e, t) {
          ;(e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              })
        }
        function _o(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          }
        }
        function Ro(e, t, n) {
          var r = e.updateQueue
          if (null === r) return null
          if (((r = r.shared), 0 !== (2 & Ou))) {
            var a = r.pending
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Lo(e, n)
            )
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Po(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Lo(e, n)
          )
        }
        function zo(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes
            ;(n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n)
          }
        }
        function Fo(e, t) {
          var n = e.updateQueue,
            r = e.alternate
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var l = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                }
                null === o ? (a = o = l) : (o = o.next = l), (n = n.next)
              } while (null !== n)
              null === o ? (a = o = t) : (o = o.next = t)
            } else a = o = t
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            )
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t)
        }
        function Io(e, t, n, r) {
          var a = e.updateQueue
          To = !1
          var o = a.firstBaseUpdate,
            l = a.lastBaseUpdate,
            i = a.shared.pending
          if (null !== i) {
            a.shared.pending = null
            var u = i,
              s = u.next
            ;(u.next = null), null === l ? (o = s) : (l.next = s), (l = u)
            var c = e.alternate
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== l &&
              (null === i ? (c.firstBaseUpdate = s) : (i.next = s),
              (c.lastBaseUpdate = u))
          }
          if (null !== o) {
            var f = a.baseState
            for (l = 0, c = s = u = null, i = o; ; ) {
              var d = i.lane,
                p = i.eventTime
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    })
                e: {
                  var m = e,
                    h = i
                  switch (((d = t), (p = n), h.tag)) {
                    case 1:
                      if ('function' === typeof (m = h.payload)) {
                        f = m.call(p, f, d)
                        break e
                      }
                      f = m
                      break e
                    case 3:
                      m.flags = (-65537 & m.flags) | 128
                    case 0:
                      if (
                        null ===
                          (d =
                            'function' === typeof (m = h.payload)
                              ? m.call(p, f, d)
                              : m) ||
                        void 0 === d
                      )
                        break e
                      f = F({}, f, d)
                      break e
                    case 2:
                      To = !0
                  }
                }
                null !== i.callback &&
                  0 !== i.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [i]) : d.push(i))
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
                  (l |= d)
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break
                ;(i = (d = i).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null)
              }
            }
            if (
              (null === c && (u = f),
              (a.baseState = u),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t
              do {
                ;(l |= a.lane), (a = a.next)
              } while (a !== t)
            } else null === o && (a.shared.lanes = 0)
            ;(Fu |= l), (e.lanes = l), (e.memoizedState = f)
          }
        }
        function Bo(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback
              if (null !== a) {
                if (((r.callback = null), (r = n), 'function' !== typeof a))
                  throw Error(o(191, a))
                a.call(r)
              }
            }
        }
        var Do = new r.Component().refs
        function Ho(e, t, n, r) {
          ;(n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : F({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n)
        }
        var Wo = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && We(e) === e
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals
            var r = ts(),
              a = ns(e),
              o = _o(r, a)
            ;(o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Ro(e, o, a)) && (rs(t, e, a, r), zo(t, e, a))
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals
            var r = ts(),
              a = ns(e),
              o = _o(r, a)
            ;(o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Ro(e, o, a)) && (rs(t, e, a, r), zo(t, e, a))
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals
            var n = ts(),
              r = ns(e),
              a = _o(n, r)
            ;(a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Ro(e, a, r)) && (rs(t, e, r, n), zo(t, e, r))
          },
        }
        function Uo(e, t, n, r, a, o, l) {
          return 'function' === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, l)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ur(n, r) ||
                !ur(a, o)
        }
        function Vo(e, t, n) {
          var r = !1,
            a = Na,
            o = t.contextType
          return (
            'object' === typeof o && null !== o
              ? (o = jo(o))
              : ((a = Ma(t) ? La : Pa.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Ta(e, a)
                  : Na)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Wo),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          )
        }
        function Qo(e, t, n, r) {
          ;(e = t.state),
            'function' === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            'function' === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Wo.enqueueReplaceState(t, t.state, null)
        }
        function Ko(e, t, n, r) {
          var a = e.stateNode
          ;(a.props = n), (a.state = e.memoizedState), (a.refs = Do), Mo(e)
          var o = t.contextType
          'object' === typeof o && null !== o
            ? (a.context = jo(o))
            : ((o = Ma(t) ? La : Pa.current), (a.context = Ta(e, o))),
            (a.state = e.memoizedState),
            'function' === typeof (o = t.getDerivedStateFromProps) &&
              (Ho(e, t, o, n), (a.state = e.memoizedState)),
            'function' === typeof t.getDerivedStateFromProps ||
              'function' === typeof a.getSnapshotBeforeUpdate ||
              ('function' !== typeof a.UNSAFE_componentWillMount &&
                'function' !== typeof a.componentWillMount) ||
              ((t = a.state),
              'function' === typeof a.componentWillMount &&
                a.componentWillMount(),
              'function' === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Wo.enqueueReplaceState(a, a.state, null),
              Io(e, n, a, r),
              (a.state = e.memoizedState)),
            'function' === typeof a.componentDidMount && (e.flags |= 4194308)
        }
        function qo(e, t, n) {
          if (
            null !== (e = n.ref) &&
            'function' !== typeof e &&
            'object' !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309))
                var r = n.stateNode
              }
              if (!r) throw Error(o(147, e))
              var a = r,
                l = '' + e
              return null !== t &&
                null !== t.ref &&
                'function' === typeof t.ref &&
                t.ref._stringRef === l
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs
                    t === Do && (t = a.refs = {}),
                      null === e ? delete t[l] : (t[l] = e)
                  }),
                  (t._stringRef = l),
                  t)
            }
            if ('string' !== typeof e) throw Error(o(284))
            if (!n._owner) throw Error(o(290, e))
          }
          return e
        }
        function Yo(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                '[object Object]' === e
                  ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                  : e,
              ),
            ))
          )
        }
        function Xo(e) {
          return (0, e._init)(e._payload)
        }
        function Zo(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n)
            }
          }
          function n(n, r) {
            if (!e) return null
            for (; null !== r; ) t(n, r), (r = r.sibling)
            return null
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling)
            return e
          }
          function a(e, t) {
            return ((e = _s(e, t)).index = 0), (e.sibling = null), e
          }
          function l(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            )
          }
          function i(t) {
            return e && null === t.alternate && (t.flags |= 2), t
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Is(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t)
          }
          function s(e, t, n, r) {
            var o = n.type
            return o === k
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === o ||
                  ('object' === typeof o &&
                    null !== o &&
                    o.$$typeof === M &&
                    Xo(o) === t.type))
              ? (((r = a(t, n.props)).ref = qo(e, t, n)), (r.return = e), r)
              : (((r = Rs(n.type, n.key, n.props, null, e.mode, r)).ref = qo(
                  e,
                  t,
                  n,
                )),
                (r.return = e),
                r)
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Bs(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t)
          }
          function f(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = zs(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t)
          }
          function d(e, t, n) {
            if (('string' === typeof t && '' !== t) || 'number' === typeof t)
              return ((t = Is('' + t, e.mode, n)).return = e), t
            if ('object' === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = Rs(t.type, t.key, t.props, null, e.mode, n)).ref = qo(
                      e,
                      null,
                      t,
                    )),
                    (n.return = e),
                    n
                  )
                case C:
                  return ((t = Bs(t, e.mode, n)).return = e), t
                case M:
                  return d(e, (0, t._init)(t._payload), n)
              }
              if (te(t) || R(t))
                return ((t = zs(t, e.mode, n, null)).return = e), t
              Yo(e, t)
            }
            return null
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null
            if (('string' === typeof n && '' !== n) || 'number' === typeof n)
              return null !== a ? null : u(e, t, '' + n, r)
            if ('object' === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === a ? s(e, t, n, r) : null
                case C:
                  return n.key === a ? c(e, t, n, r) : null
                case M:
                  return p(e, t, (a = n._init)(n._payload), r)
              }
              if (te(n) || R(n)) return null !== a ? null : f(e, t, n, r, null)
              Yo(e, n)
            }
            return null
          }
          function m(e, t, n, r, a) {
            if (('string' === typeof r && '' !== r) || 'number' === typeof r)
              return u(t, (e = e.get(n) || null), '' + r, a)
            if ('object' === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  )
                case C:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  )
                case M:
                  return m(e, t, n, (0, r._init)(r._payload), a)
              }
              if (te(r) || R(r)) return f(t, (e = e.get(n) || null), r, a, null)
              Yo(t, r)
            }
            return null
          }
          function h(a, o, i, u) {
            for (
              var s = null, c = null, f = o, h = (o = 0), v = null;
              null !== f && h < i.length;
              h++
            ) {
              f.index > h ? ((v = f), (f = null)) : (v = f.sibling)
              var g = p(a, f, i[h], u)
              if (null === g) {
                null === f && (f = v)
                break
              }
              e && f && null === g.alternate && t(a, f),
                (o = l(g, o, h)),
                null === c ? (s = g) : (c.sibling = g),
                (c = g),
                (f = v)
            }
            if (h === i.length) return n(a, f), ao && $a(a, h), s
            if (null === f) {
              for (; h < i.length; h++)
                null !== (f = d(a, i[h], u)) &&
                  ((o = l(f, o, h)),
                  null === c ? (s = f) : (c.sibling = f),
                  (c = f))
              return ao && $a(a, h), s
            }
            for (f = r(a, f); h < i.length; h++)
              null !== (v = m(f, a, h, i[h], u)) &&
                (e &&
                  null !== v.alternate &&
                  f.delete(null === v.key ? h : v.key),
                (o = l(v, o, h)),
                null === c ? (s = v) : (c.sibling = v),
                (c = v))
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e)
                }),
              ao && $a(a, h),
              s
            )
          }
          function v(a, i, u, s) {
            var c = R(u)
            if ('function' !== typeof c) throw Error(o(150))
            if (null == (u = c.call(u))) throw Error(o(151))
            for (
              var f = (c = null), h = i, v = (i = 0), g = null, y = u.next();
              null !== h && !y.done;
              v++, y = u.next()
            ) {
              h.index > v ? ((g = h), (h = null)) : (g = h.sibling)
              var b = p(a, h, y.value, s)
              if (null === b) {
                null === h && (h = g)
                break
              }
              e && h && null === b.alternate && t(a, h),
                (i = l(b, i, v)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (h = g)
            }
            if (y.done) return n(a, h), ao && $a(a, v), c
            if (null === h) {
              for (; !y.done; v++, y = u.next())
                null !== (y = d(a, y.value, s)) &&
                  ((i = l(y, i, v)),
                  null === f ? (c = y) : (f.sibling = y),
                  (f = y))
              return ao && $a(a, v), c
            }
            for (h = r(a, h); !y.done; v++, y = u.next())
              null !== (y = m(h, a, v, y.value, s)) &&
                (e &&
                  null !== y.alternate &&
                  h.delete(null === y.key ? v : y.key),
                (i = l(y, i, v)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y))
            return (
              e &&
                h.forEach(function (e) {
                  return t(a, e)
                }),
              ao && $a(a, v),
              c
            )
          }
          return function e(r, o, l, u) {
            if (
              ('object' === typeof l &&
                null !== l &&
                l.type === k &&
                null === l.key &&
                (l = l.props.children),
              'object' === typeof l && null !== l)
            ) {
              switch (l.$$typeof) {
                case w:
                  e: {
                    for (var s = l.key, c = o; null !== c; ) {
                      if (c.key === s) {
                        if ((s = l.type) === k) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((o = a(c, l.props.children)).return = r),
                              (r = o)
                            break e
                          }
                        } else if (
                          c.elementType === s ||
                          ('object' === typeof s &&
                            null !== s &&
                            s.$$typeof === M &&
                            Xo(s) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((o = a(c, l.props)).ref = qo(r, c, l)),
                            (o.return = r),
                            (r = o)
                          break e
                        }
                        n(r, c)
                        break
                      }
                      t(r, c), (c = c.sibling)
                    }
                    l.type === k
                      ? (((o = zs(l.props.children, r.mode, u, l.key)).return =
                          r),
                        (r = o))
                      : (((u = Rs(
                          l.type,
                          l.key,
                          l.props,
                          null,
                          r.mode,
                          u,
                        )).ref = qo(r, o, l)),
                        (u.return = r),
                        (r = u))
                  }
                  return i(r)
                case C:
                  e: {
                    for (c = l.key; null !== o; ) {
                      if (o.key === c) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === l.containerInfo &&
                          o.stateNode.implementation === l.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = a(o, l.children || [])).return = r),
                            (r = o)
                          break e
                        }
                        n(r, o)
                        break
                      }
                      t(r, o), (o = o.sibling)
                    }
                    ;((o = Bs(l, r.mode, u)).return = r), (r = o)
                  }
                  return i(r)
                case M:
                  return e(r, o, (c = l._init)(l._payload), u)
              }
              if (te(l)) return h(r, o, l, u)
              if (R(l)) return v(r, o, l, u)
              Yo(r, l)
            }
            return ('string' === typeof l && '' !== l) || 'number' === typeof l
              ? ((l = '' + l),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, l)).return = r), (r = o))
                  : (n(r, o), ((o = Is(l, r.mode, u)).return = r), (r = o)),
                i(r))
              : n(r, o)
          }
        }
        var Jo = Zo(!0),
          $o = Zo(!1),
          Go = {},
          el = Sa(Go),
          tl = Sa(Go),
          nl = Sa(Go)
        function rl(e) {
          if (e === Go) throw Error(o(174))
          return e
        }
        function al(e, t) {
          switch ((ja(nl, t), ja(tl, e), ja(el, Go), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, '')
              break
            default:
              t = ue(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName),
              )
          }
          Ea(el), ja(el, t)
        }
        function ol() {
          Ea(el), Ea(tl), Ea(nl)
        }
        function ll(e) {
          rl(nl.current)
          var t = rl(el.current),
            n = ue(t, e.type)
          t !== n && (ja(tl, e), ja(el, n))
        }
        function il(e) {
          tl.current === e && (Ea(el), Ea(tl))
        }
        var ul = Sa(0)
        function sl(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  '$?' === n.data ||
                  '$!' === n.data)
              )
                return t
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t
            } else if (null !== t.child) {
              ;(t.child.return = t), (t = t.child)
              continue
            }
            if (t === e) break
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null
              t = t.return
            }
            ;(t.sibling.return = t.return), (t = t.sibling)
          }
          return null
        }
        var cl = []
        function fl() {
          for (var e = 0; e < cl.length; e++)
            cl[e]._workInProgressVersionPrimary = null
          cl.length = 0
        }
        var dl = x.ReactCurrentDispatcher,
          pl = x.ReactCurrentBatchConfig,
          ml = 0,
          hl = null,
          vl = null,
          gl = null,
          yl = !1,
          bl = !1,
          xl = 0,
          wl = 0
        function Cl() {
          throw Error(o(321))
        }
        function kl(e, t) {
          if (null === t) return !1
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ir(e[n], t[n])) return !1
          return !0
        }
        function Sl(e, t, n, r, a, l) {
          if (
            ((ml = l),
            (hl = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (dl.current = null === e || null === e.memoizedState ? ii : ui),
            (e = n(r, a)),
            bl)
          ) {
            l = 0
            do {
              if (((bl = !1), (xl = 0), 25 <= l)) throw Error(o(301))
              ;(l += 1),
                (gl = vl = null),
                (t.updateQueue = null),
                (dl.current = si),
                (e = n(r, a))
            } while (bl)
          }
          if (
            ((dl.current = li),
            (t = null !== vl && null !== vl.next),
            (ml = 0),
            (gl = vl = hl = null),
            (yl = !1),
            t)
          )
            throw Error(o(300))
          return e
        }
        function El() {
          var e = 0 !== xl
          return (xl = 0), e
        }
        function jl() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          }
          return (
            null === gl ? (hl.memoizedState = gl = e) : (gl = gl.next = e), gl
          )
        }
        function Nl() {
          if (null === vl) {
            var e = hl.alternate
            e = null !== e ? e.memoizedState : null
          } else e = vl.next
          var t = null === gl ? hl.memoizedState : gl.next
          if (null !== t) (gl = t), (vl = e)
          else {
            if (null === e) throw Error(o(310))
            ;(e = {
              memoizedState: (vl = e).memoizedState,
              baseState: vl.baseState,
              baseQueue: vl.baseQueue,
              queue: vl.queue,
              next: null,
            }),
              null === gl ? (hl.memoizedState = gl = e) : (gl = gl.next = e)
          }
          return gl
        }
        function Pl(e, t) {
          return 'function' === typeof t ? t(e) : t
        }
        function Ol(e) {
          var t = Nl(),
            n = t.queue
          if (null === n) throw Error(o(311))
          n.lastRenderedReducer = e
          var r = vl,
            a = r.baseQueue,
            l = n.pending
          if (null !== l) {
            if (null !== a) {
              var i = a.next
              ;(a.next = l.next), (l.next = i)
            }
            ;(r.baseQueue = a = l), (n.pending = null)
          }
          if (null !== a) {
            ;(l = a.next), (r = r.baseState)
            var u = (i = null),
              s = null,
              c = l
            do {
              var f = c.lane
              if ((ml & f) === f)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action))
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                }
                null === s ? ((u = s = d), (i = r)) : (s = s.next = d),
                  (hl.lanes |= f),
                  (Fu |= f)
              }
              c = c.next
            } while (null !== c && c !== l)
            null === s ? (i = r) : (s.next = u),
              ir(r, t.memoizedState) || (xi = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = s),
              (n.lastRenderedState = r)
          }
          if (null !== (e = n.interleaved)) {
            a = e
            do {
              ;(l = a.lane), (hl.lanes |= l), (Fu |= l), (a = a.next)
            } while (a !== e)
          } else null === a && (n.lanes = 0)
          return [t.memoizedState, n.dispatch]
        }
        function Ll(e) {
          var t = Nl(),
            n = t.queue
          if (null === n) throw Error(o(311))
          n.lastRenderedReducer = e
          var r = n.dispatch,
            a = n.pending,
            l = t.memoizedState
          if (null !== a) {
            n.pending = null
            var i = (a = a.next)
            do {
              ;(l = e(l, i.action)), (i = i.next)
            } while (i !== a)
            ir(l, t.memoizedState) || (xi = !0),
              (t.memoizedState = l),
              null === t.baseQueue && (t.baseState = l),
              (n.lastRenderedState = l)
          }
          return [l, r]
        }
        function Tl() {}
        function Ml(e, t) {
          var n = hl,
            r = Nl(),
            a = t(),
            l = !ir(r.memoizedState, a)
          if (
            (l && ((r.memoizedState = a), (xi = !0)),
            (r = r.queue),
            Vl(Rl.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              l ||
              (null !== gl && 1 & gl.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Bl(9, _l.bind(null, n, r, a, t), void 0, null),
              null === Lu)
            )
              throw Error(o(349))
            0 !== (30 & ml) || Al(n, t, a)
          }
          return a
        }
        function Al(e, t, n) {
          ;(e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = hl.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (hl.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e)
        }
        function _l(e, t, n, r) {
          ;(t.value = n), (t.getSnapshot = r), zl(t) && Fl(e)
        }
        function Rl(e, t, n) {
          return n(function () {
            zl(t) && Fl(e)
          })
        }
        function zl(e) {
          var t = e.getSnapshot
          e = e.value
          try {
            var n = t()
            return !ir(e, n)
          } catch (r) {
            return !0
          }
        }
        function Fl(e) {
          var t = Lo(e, 1)
          null !== t && rs(t, e, 1, -1)
        }
        function Il(e) {
          var t = jl()
          return (
            'function' === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Pl,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = ni.bind(null, hl, e)),
            [t.memoizedState, e]
          )
        }
        function Bl(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = hl.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (hl.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          )
        }
        function Dl() {
          return Nl().memoizedState
        }
        function Hl(e, t, n, r) {
          var a = jl()
          ;(hl.flags |= e),
            (a.memoizedState = Bl(1 | t, n, void 0, void 0 === r ? null : r))
        }
        function Wl(e, t, n, r) {
          var a = Nl()
          r = void 0 === r ? null : r
          var o = void 0
          if (null !== vl) {
            var l = vl.memoizedState
            if (((o = l.destroy), null !== r && kl(r, l.deps)))
              return void (a.memoizedState = Bl(t, n, o, r))
          }
          ;(hl.flags |= e), (a.memoizedState = Bl(1 | t, n, o, r))
        }
        function Ul(e, t) {
          return Hl(8390656, 8, e, t)
        }
        function Vl(e, t) {
          return Wl(2048, 8, e, t)
        }
        function Ql(e, t) {
          return Wl(4, 2, e, t)
        }
        function Kl(e, t) {
          return Wl(4, 4, e, t)
        }
        function ql(e, t) {
          return 'function' === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null)
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null
              })
            : void 0
        }
        function Yl(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Wl(4, 4, ql.bind(null, t, e), n)
          )
        }
        function Xl() {}
        function Zl(e, t) {
          var n = Nl()
          t = void 0 === t ? null : t
          var r = n.memoizedState
          return null !== r && null !== t && kl(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e)
        }
        function Jl(e, t) {
          var n = Nl()
          t = void 0 === t ? null : t
          var r = n.memoizedState
          return null !== r && null !== t && kl(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e)
        }
        function $l(e, t, n) {
          return 0 === (21 & ml)
            ? (e.baseState && ((e.baseState = !1), (xi = !0)),
              (e.memoizedState = n))
            : (ir(n, t) ||
                ((n = ht()), (hl.lanes |= n), (Fu |= n), (e.baseState = !0)),
              t)
        }
        function Gl(e, t) {
          var n = bt
          ;(bt = 0 !== n && 4 > n ? n : 4), e(!0)
          var r = pl.transition
          pl.transition = {}
          try {
            e(!1), t()
          } finally {
            ;(bt = n), (pl.transition = r)
          }
        }
        function ei() {
          return Nl().memoizedState
        }
        function ti(e, t, n) {
          var r = ns(e)
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            ri(e))
          )
            ai(t, n)
          else if (null !== (n = Oo(e, t, n, r))) {
            rs(n, e, r, ts()), oi(n, t, r)
          }
        }
        function ni(e, t, n) {
          var r = ns(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }
          if (ri(e)) ai(t, a)
          else {
            var o = e.alternate
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  i = o(l, n)
                if (((a.hasEagerState = !0), (a.eagerState = i), ir(i, l))) {
                  var u = t.interleaved
                  return (
                    null === u
                      ? ((a.next = a), Po(t))
                      : ((a.next = u.next), (u.next = a)),
                    void (t.interleaved = a)
                  )
                }
              } catch (s) {}
            null !== (n = Oo(e, t, a, r)) &&
              (rs(n, e, r, (a = ts())), oi(n, t, r))
          }
        }
        function ri(e) {
          var t = e.alternate
          return e === hl || (null !== t && t === hl)
        }
        function ai(e, t) {
          bl = yl = !0
          var n = e.pending
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t)
        }
        function oi(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes
            ;(n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n)
          }
        }
        var li = {
            readContext: jo,
            useCallback: Cl,
            useContext: Cl,
            useEffect: Cl,
            useImperativeHandle: Cl,
            useInsertionEffect: Cl,
            useLayoutEffect: Cl,
            useMemo: Cl,
            useReducer: Cl,
            useRef: Cl,
            useState: Cl,
            useDebugValue: Cl,
            useDeferredValue: Cl,
            useTransition: Cl,
            useMutableSource: Cl,
            useSyncExternalStore: Cl,
            useId: Cl,
            unstable_isNewReconciler: !1,
          },
          ii = {
            readContext: jo,
            useCallback: function (e, t) {
              return (jl().memoizedState = [e, void 0 === t ? null : t]), e
            },
            useContext: jo,
            useEffect: Ul,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Hl(4194308, 4, ql.bind(null, t, e), n)
              )
            },
            useLayoutEffect: function (e, t) {
              return Hl(4194308, 4, e, t)
            },
            useInsertionEffect: function (e, t) {
              return Hl(4, 2, e, t)
            },
            useMemo: function (e, t) {
              var n = jl()
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              )
            },
            useReducer: function (e, t, n) {
              var r = jl()
              return (
                (t = void 0 !== n ? n(t) : t),
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
                (e = e.dispatch = ti.bind(null, hl, e)),
                [r.memoizedState, e]
              )
            },
            useRef: function (e) {
              return (e = { current: e }), (jl().memoizedState = e)
            },
            useState: Il,
            useDebugValue: Xl,
            useDeferredValue: function (e) {
              return (jl().memoizedState = e)
            },
            useTransition: function () {
              var e = Il(!1),
                t = e[0]
              return (e = Gl.bind(null, e[1])), (jl().memoizedState = e), [t, e]
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = hl,
                a = jl()
              if (ao) {
                if (void 0 === n) throw Error(o(407))
                n = n()
              } else {
                if (((n = t()), null === Lu)) throw Error(o(349))
                0 !== (30 & ml) || Al(r, t, n)
              }
              a.memoizedState = n
              var l = { value: n, getSnapshot: t }
              return (
                (a.queue = l),
                Ul(Rl.bind(null, r, l, e), [e]),
                (r.flags |= 2048),
                Bl(9, _l.bind(null, r, l, n, t), void 0, null),
                n
              )
            },
            useId: function () {
              var e = jl(),
                t = Lu.identifierPrefix
              if (ao) {
                var n = Ja
                ;(t =
                  ':' +
                  t +
                  'R' +
                  (n = (Za & ~(1 << (32 - lt(Za) - 1))).toString(32) + n)),
                  0 < (n = xl++) && (t += 'H' + n.toString(32)),
                  (t += ':')
              } else t = ':' + t + 'r' + (n = wl++).toString(32) + ':'
              return (e.memoizedState = t)
            },
            unstable_isNewReconciler: !1,
          },
          ui = {
            readContext: jo,
            useCallback: Zl,
            useContext: jo,
            useEffect: Vl,
            useImperativeHandle: Yl,
            useInsertionEffect: Ql,
            useLayoutEffect: Kl,
            useMemo: Jl,
            useReducer: Ol,
            useRef: Dl,
            useState: function () {
              return Ol(Pl)
            },
            useDebugValue: Xl,
            useDeferredValue: function (e) {
              return $l(Nl(), vl.memoizedState, e)
            },
            useTransition: function () {
              return [Ol(Pl)[0], Nl().memoizedState]
            },
            useMutableSource: Tl,
            useSyncExternalStore: Ml,
            useId: ei,
            unstable_isNewReconciler: !1,
          },
          si = {
            readContext: jo,
            useCallback: Zl,
            useContext: jo,
            useEffect: Vl,
            useImperativeHandle: Yl,
            useInsertionEffect: Ql,
            useLayoutEffect: Kl,
            useMemo: Jl,
            useReducer: Ll,
            useRef: Dl,
            useState: function () {
              return Ll(Pl)
            },
            useDebugValue: Xl,
            useDeferredValue: function (e) {
              var t = Nl()
              return null === vl
                ? (t.memoizedState = e)
                : $l(t, vl.memoizedState, e)
            },
            useTransition: function () {
              return [Ll(Pl)[0], Nl().memoizedState]
            },
            useMutableSource: Tl,
            useSyncExternalStore: Ml,
            useId: ei,
            unstable_isNewReconciler: !1,
          }
        function ci(e, t) {
          try {
            var n = '',
              r = t
            do {
              ;(n += H(r)), (r = r.return)
            } while (r)
            var a = n
          } catch (o) {
            a = '\nError generating stack: ' + o.message + '\n' + o.stack
          }
          return { value: e, source: t, stack: a, digest: null }
        }
        function fi(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          }
        }
        function di(e, t) {
          try {
            console.error(t.value)
          } catch (n) {
            setTimeout(function () {
              throw n
            })
          }
        }
        var pi = 'function' === typeof WeakMap ? WeakMap : Map
        function mi(e, t, n) {
          ;((n = _o(-1, n)).tag = 3), (n.payload = { element: null })
          var r = t.value
          return (
            (n.callback = function () {
              Qu || ((Qu = !0), (Ku = r)), di(0, t)
            }),
            n
          )
        }
        function hi(e, t, n) {
          ;(n = _o(-1, n)).tag = 3
          var r = e.type.getDerivedStateFromError
          if ('function' === typeof r) {
            var a = t.value
            ;(n.payload = function () {
              return r(a)
            }),
              (n.callback = function () {
                di(0, t)
              })
          }
          var o = e.stateNode
          return (
            null !== o &&
              'function' === typeof o.componentDidCatch &&
              (n.callback = function () {
                di(0, t),
                  'function' !== typeof r &&
                    (null === qu ? (qu = new Set([this])) : qu.add(this))
                var e = t.stack
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : '',
                })
              }),
            n
          )
        }
        function vi(e, t, n) {
          var r = e.pingCache
          if (null === r) {
            r = e.pingCache = new pi()
            var a = new Set()
            r.set(t, a)
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a))
          a.has(n) || (a.add(n), (e = js.bind(null, e, t, n)), t.then(e, e))
        }
        function gi(e) {
          do {
            var t
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e
            e = e.return
          } while (null !== e)
          return null
        }
        function yi(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = _o(-1, 1)).tag = 2), Ro(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e)
        }
        var bi = x.ReactCurrentOwner,
          xi = !1
        function wi(e, t, n, r) {
          t.child = null === e ? $o(t, null, n, r) : Jo(t, e.child, n, r)
        }
        function Ci(e, t, n, r, a) {
          n = n.render
          var o = t.ref
          return (
            Eo(t, a),
            (r = Sl(e, t, n, r, o, a)),
            (n = El()),
            null === e || xi
              ? (ao && n && eo(t), (t.flags |= 1), wi(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Qi(e, t, a))
          )
        }
        function ki(e, t, n, r, a) {
          if (null === e) {
            var o = n.type
            return 'function' !== typeof o ||
              As(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Rs(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), Si(e, t, o, r, a))
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var l = o.memoizedProps
            if (
              (n = null !== (n = n.compare) ? n : ur)(l, r) &&
              e.ref === t.ref
            )
              return Qi(e, t, a)
          }
          return (
            (t.flags |= 1),
            ((e = _s(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          )
        }
        function Si(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps
            if (ur(o, r) && e.ref === t.ref) {
              if (((xi = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Qi(e, t, a)
              0 !== (131072 & e.flags) && (xi = !0)
            }
          }
          return Ni(e, t, n, r, a)
        }
        function Ei(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null
          if ('hidden' === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                ja(_u, Au),
                (Au |= n)
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  ja(_u, Au),
                  (Au |= e),
                  null
                )
              ;(t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                ja(_u, Au),
                (Au |= r)
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              ja(_u, Au),
              (Au |= r)
          return wi(e, t, a, n), t.child
        }
        function ji(e, t) {
          var n = t.ref
          ;((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152))
        }
        function Ni(e, t, n, r, a) {
          var o = Ma(n) ? La : Pa.current
          return (
            (o = Ta(t, o)),
            Eo(t, a),
            (n = Sl(e, t, n, r, o, a)),
            (r = El()),
            null === e || xi
              ? (ao && r && eo(t), (t.flags |= 1), wi(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Qi(e, t, a))
          )
        }
        function Pi(e, t, n, r, a) {
          if (Ma(n)) {
            var o = !0
            za(t)
          } else o = !1
          if ((Eo(t, a), null === t.stateNode))
            Vi(e, t), Vo(t, n, r), Ko(t, n, r, a), (r = !0)
          else if (null === e) {
            var l = t.stateNode,
              i = t.memoizedProps
            l.props = i
            var u = l.context,
              s = n.contextType
            'object' === typeof s && null !== s
              ? (s = jo(s))
              : (s = Ta(t, (s = Ma(n) ? La : Pa.current)))
            var c = n.getDerivedStateFromProps,
              f =
                'function' === typeof c ||
                'function' === typeof l.getSnapshotBeforeUpdate
            f ||
              ('function' !== typeof l.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof l.componentWillReceiveProps) ||
              ((i !== r || u !== s) && Qo(t, l, r, s)),
              (To = !1)
            var d = t.memoizedState
            ;(l.state = d),
              Io(t, r, l, a),
              (u = t.memoizedState),
              i !== r || d !== u || Oa.current || To
                ? ('function' === typeof c &&
                    (Ho(t, n, c, r), (u = t.memoizedState)),
                  (i = To || Uo(t, n, i, r, d, u, s))
                    ? (f ||
                        ('function' !== typeof l.UNSAFE_componentWillMount &&
                          'function' !== typeof l.componentWillMount) ||
                        ('function' === typeof l.componentWillMount &&
                          l.componentWillMount(),
                        'function' === typeof l.UNSAFE_componentWillMount &&
                          l.UNSAFE_componentWillMount()),
                      'function' === typeof l.componentDidMount &&
                        (t.flags |= 4194308))
                    : ('function' === typeof l.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (l.props = r),
                  (l.state = u),
                  (l.context = s),
                  (r = i))
                : ('function' === typeof l.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1))
          } else {
            ;(l = t.stateNode),
              Ao(e, t),
              (i = t.memoizedProps),
              (s = t.type === t.elementType ? i : go(t.type, i)),
              (l.props = s),
              (f = t.pendingProps),
              (d = l.context),
              'object' === typeof (u = n.contextType) && null !== u
                ? (u = jo(u))
                : (u = Ta(t, (u = Ma(n) ? La : Pa.current)))
            var p = n.getDerivedStateFromProps
            ;(c =
              'function' === typeof p ||
              'function' === typeof l.getSnapshotBeforeUpdate) ||
              ('function' !== typeof l.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof l.componentWillReceiveProps) ||
              ((i !== f || d !== u) && Qo(t, l, r, u)),
              (To = !1),
              (d = t.memoizedState),
              (l.state = d),
              Io(t, r, l, a)
            var m = t.memoizedState
            i !== f || d !== m || Oa.current || To
              ? ('function' === typeof p &&
                  (Ho(t, n, p, r), (m = t.memoizedState)),
                (s = To || Uo(t, n, s, r, d, m, u) || !1)
                  ? (c ||
                      ('function' !== typeof l.UNSAFE_componentWillUpdate &&
                        'function' !== typeof l.componentWillUpdate) ||
                      ('function' === typeof l.componentWillUpdate &&
                        l.componentWillUpdate(r, m, u),
                      'function' === typeof l.UNSAFE_componentWillUpdate &&
                        l.UNSAFE_componentWillUpdate(r, m, u)),
                    'function' === typeof l.componentDidUpdate &&
                      (t.flags |= 4),
                    'function' === typeof l.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ('function' !== typeof l.componentDidUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    'function' !== typeof l.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = m)),
                (l.props = r),
                (l.state = m),
                (l.context = u),
                (r = s))
              : ('function' !== typeof l.componentDidUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                'function' !== typeof l.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1))
          }
          return Oi(e, t, n, r, o, a)
        }
        function Oi(e, t, n, r, a, o) {
          ji(e, t)
          var l = 0 !== (128 & t.flags)
          if (!r && !l) return a && Fa(t, n, !1), Qi(e, t, o)
          ;(r = t.stateNode), (bi.current = t)
          var i =
            l && 'function' !== typeof n.getDerivedStateFromError
              ? null
              : r.render()
          return (
            (t.flags |= 1),
            null !== e && l
              ? ((t.child = Jo(t, e.child, null, o)),
                (t.child = Jo(t, null, i, o)))
              : wi(e, t, i, o),
            (t.memoizedState = r.state),
            a && Fa(t, n, !0),
            t.child
          )
        }
        function Li(e) {
          var t = e.stateNode
          t.pendingContext
            ? _a(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && _a(0, t.context, !1),
            al(e, t.containerInfo)
        }
        function Ti(e, t, n, r, a) {
          return mo(), ho(a), (t.flags |= 256), wi(e, t, n, r), t.child
        }
        var Mi,
          Ai,
          _i,
          Ri,
          zi = { dehydrated: null, treeContext: null, retryLane: 0 }
        function Fi(e) {
          return { baseLanes: e, cachePool: null, transitions: null }
        }
        function Ii(e, t, n) {
          var r,
            a = t.pendingProps,
            l = ul.current,
            i = !1,
            u = 0 !== (128 & t.flags)
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & l)),
            r
              ? ((i = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (l |= 1),
            ja(ul, 1 & l),
            null === e)
          )
            return (
              so(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : '$!' === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((u = a.children),
                  (e = a.fallback),
                  i
                    ? ((a = t.mode),
                      (i = t.child),
                      (u = { mode: 'hidden', children: u }),
                      0 === (1 & a) && null !== i
                        ? ((i.childLanes = 0), (i.pendingProps = u))
                        : (i = Fs(u, a, 0, null)),
                      (e = zs(e, a, n, null)),
                      (i.return = t),
                      (e.return = t),
                      (i.sibling = e),
                      (t.child = i),
                      (t.child.memoizedState = Fi(n)),
                      (t.memoizedState = zi),
                      e)
                    : Bi(t, u))
            )
          if (null !== (l = e.memoizedState) && null !== (r = l.dehydrated))
            return (function (e, t, n, r, a, l, i) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Di(e, t, i, (r = fi(Error(o(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((l = r.fallback),
                    (a = t.mode),
                    (r = Fs(
                      { mode: 'visible', children: r.children },
                      a,
                      0,
                      null,
                    )),
                    ((l = zs(l, a, i, null)).flags |= 2),
                    (r.return = t),
                    (l.return = t),
                    (r.sibling = l),
                    (t.child = r),
                    0 !== (1 & t.mode) && Jo(t, e.child, null, i),
                    (t.child.memoizedState = Fi(i)),
                    (t.memoizedState = zi),
                    l)
              if (0 === (1 & t.mode)) return Di(e, t, i, null)
              if ('$!' === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset)) var u = r.dgst
                return (
                  (r = u), Di(e, t, i, (r = fi((l = Error(o(419))), r, void 0)))
                )
              }
              if (((u = 0 !== (i & e.childLanes)), xi || u)) {
                if (null !== (r = Lu)) {
                  switch (i & -i) {
                    case 4:
                      a = 2
                      break
                    case 16:
                      a = 8
                      break
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
                      a = 32
                      break
                    case 536870912:
                      a = 268435456
                      break
                    default:
                      a = 0
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | i)) ? 0 : a) &&
                    a !== l.retryLane &&
                    ((l.retryLane = a), Lo(e, a), rs(r, e, a, -1))
                }
                return vs(), Di(e, t, i, (r = fi(Error(o(421)))))
              }
              return '$?' === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Ps.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = l.treeContext),
                  (ro = sa(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((qa[Ya++] = Za),
                    (qa[Ya++] = Ja),
                    (qa[Ya++] = Xa),
                    (Za = e.id),
                    (Ja = e.overflow),
                    (Xa = t)),
                  (t = Bi(t, r.children)),
                  (t.flags |= 4096),
                  t)
            })(e, t, u, a, r, l, n)
          if (i) {
            ;(i = a.fallback), (u = t.mode), (r = (l = e.child).sibling)
            var s = { mode: 'hidden', children: a.children }
            return (
              0 === (1 & u) && t.child !== l
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = s),
                  (t.deletions = null))
                : ((a = _s(l, s)).subtreeFlags = 14680064 & l.subtreeFlags),
              null !== r
                ? (i = _s(r, i))
                : ((i = zs(i, u, n, null)).flags |= 2),
              (i.return = t),
              (a.return = t),
              (a.sibling = i),
              (t.child = a),
              (a = i),
              (i = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Fi(n)
                  : {
                      baseLanes: u.baseLanes | n,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (i.memoizedState = u),
              (i.childLanes = e.childLanes & ~n),
              (t.memoizedState = zi),
              a
            )
          }
          return (
            (e = (i = e.child).sibling),
            (a = _s(i, { mode: 'visible', children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          )
        }
        function Bi(e, t) {
          return (
            ((t = Fs(
              { mode: 'visible', children: t },
              e.mode,
              0,
              null,
            )).return = e),
            (e.child = t)
          )
        }
        function Di(e, t, n, r) {
          return (
            null !== r && ho(r),
            Jo(t, e.child, null, n),
            ((e = Bi(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          )
        }
        function Hi(e, t, n) {
          e.lanes |= t
          var r = e.alternate
          null !== r && (r.lanes |= t), So(e.return, t, n)
        }
        function Wi(e, t, n, r, a) {
          var o = e.memoizedState
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a))
        }
        function Ui(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail
          if ((wi(e, t, r.children, n), 0 !== (2 & (r = ul.current))))
            (r = (1 & r) | 2), (t.flags |= 128)
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Hi(e, n, t)
                else if (19 === e.tag) Hi(e, n, t)
                else if (null !== e.child) {
                  ;(e.child.return = e), (e = e.child)
                  continue
                }
                if (e === t) break
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e
                  e = e.return
                }
                ;(e.sibling.return = e.return), (e = e.sibling)
              }
            r &= 1
          }
          if ((ja(ul, r), 0 === (1 & t.mode))) t.memoizedState = null
          else
            switch (a) {
              case 'forwards':
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === sl(e) && (a = n),
                    (n = n.sibling)
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Wi(t, !1, a, n, o)
                break
              case 'backwards':
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === sl(e)) {
                    t.child = a
                    break
                  }
                  ;(e = a.sibling), (a.sibling = n), (n = a), (a = e)
                }
                Wi(t, !0, n, null, o)
                break
              case 'together':
                Wi(t, !1, null, null, void 0)
                break
              default:
                t.memoizedState = null
            }
          return t.child
        }
        function Vi(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
        }
        function Qi(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Fu |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null
          if (null !== e && t.child !== e.child) throw Error(o(153))
          if (null !== t.child) {
            for (
              n = _s((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = _s(e, e.pendingProps)).return = t)
            n.sibling = null
          }
          return t.child
        }
        function Ki(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case 'hidden':
                t = e.tail
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling)
                null === n ? (e.tail = null) : (n.sibling = null)
                break
              case 'collapsed':
                n = e.tail
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling)
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null)
            }
        }
        function qi(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling)
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling)
          return (e.subtreeFlags |= r), (e.childLanes = n), t
        }
        function Yi(e, t, n) {
          var r = t.pendingProps
          switch ((to(t), t.tag)) {
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
              return qi(t), null
            case 1:
            case 17:
              return Ma(t.type) && Aa(), qi(t), null
            case 3:
              return (
                (r = t.stateNode),
                ol(),
                Ea(Oa),
                Ea(Pa),
                fl(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (is(oo), (oo = null)))),
                Ai(e, t),
                qi(t),
                null
              )
            case 5:
              il(t)
              var a = rl(nl.current)
              if (((n = t.type), null !== e && null != t.stateNode))
                _i(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166))
                  return qi(t), null
                }
                if (((e = rl(el.current)), fo(t))) {
                  ;(r = t.stateNode), (n = t.type)
                  var l = t.memoizedProps
                  switch (
                    ((r[da] = t), (r[pa] = l), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case 'dialog':
                      Br('cancel', r), Br('close', r)
                      break
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      Br('load', r)
                      break
                    case 'video':
                    case 'audio':
                      for (a = 0; a < Rr.length; a++) Br(Rr[a], r)
                      break
                    case 'source':
                      Br('error', r)
                      break
                    case 'img':
                    case 'image':
                    case 'link':
                      Br('error', r), Br('load', r)
                      break
                    case 'details':
                      Br('toggle', r)
                      break
                    case 'input':
                      Z(r, l), Br('invalid', r)
                      break
                    case 'select':
                      ;(r._wrapperState = { wasMultiple: !!l.multiple }),
                        Br('invalid', r)
                      break
                    case 'textarea':
                      ae(r, l), Br('invalid', r)
                  }
                  for (var u in (ye(n, l), (a = null), l))
                    if (l.hasOwnProperty(u)) {
                      var s = l[u]
                      'children' === u
                        ? 'string' === typeof s
                          ? r.textContent !== s &&
                            (!0 !== l.suppressHydrationWarning &&
                              $r(r.textContent, s, e),
                            (a = ['children', s]))
                          : 'number' === typeof s &&
                            r.textContent !== '' + s &&
                            (!0 !== l.suppressHydrationWarning &&
                              $r(r.textContent, s, e),
                            (a = ['children', '' + s]))
                        : i.hasOwnProperty(u) &&
                          null != s &&
                          'onScroll' === u &&
                          Br('scroll', r)
                    }
                  switch (n) {
                    case 'input':
                      K(r), G(r, l, !0)
                      break
                    case 'textarea':
                      K(r), le(r)
                      break
                    case 'select':
                    case 'option':
                      break
                    default:
                      'function' === typeof l.onClick && (r.onclick = Gr)
                  }
                  ;(r = a), (t.updateQueue = r), null !== r && (t.flags |= 4)
                } else {
                  ;(u = 9 === a.nodeType ? a : a.ownerDocument),
                    'http://www.w3.org/1999/xhtml' === e && (e = ie(n)),
                    'http://www.w3.org/1999/xhtml' === e
                      ? 'script' === n
                        ? (((e = u.createElement('div')).innerHTML =
                            '<script></script>'),
                          (e = e.removeChild(e.firstChild)))
                        : 'string' === typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          'select' === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[da] = t),
                    (e[pa] = r),
                    Mi(e, t, !1, !1),
                    (t.stateNode = e)
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case 'dialog':
                        Br('cancel', e), Br('close', e), (a = r)
                        break
                      case 'iframe':
                      case 'object':
                      case 'embed':
                        Br('load', e), (a = r)
                        break
                      case 'video':
                      case 'audio':
                        for (a = 0; a < Rr.length; a++) Br(Rr[a], e)
                        a = r
                        break
                      case 'source':
                        Br('error', e), (a = r)
                        break
                      case 'img':
                      case 'image':
                      case 'link':
                        Br('error', e), Br('load', e), (a = r)
                        break
                      case 'details':
                        Br('toggle', e), (a = r)
                        break
                      case 'input':
                        Z(e, r), (a = X(e, r)), Br('invalid', e)
                        break
                      case 'option':
                      default:
                        a = r
                        break
                      case 'select':
                        ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = F({}, r, { value: void 0 })),
                          Br('invalid', e)
                        break
                      case 'textarea':
                        ae(e, r), (a = re(e, r)), Br('invalid', e)
                    }
                    for (l in (ye(n, a), (s = a)))
                      if (s.hasOwnProperty(l)) {
                        var c = s[l]
                        'style' === l
                          ? ve(e, c)
                          : 'dangerouslySetInnerHTML' === l
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : 'children' === l
                          ? 'string' === typeof c
                            ? ('textarea' !== n || '' !== c) && de(e, c)
                            : 'number' === typeof c && de(e, '' + c)
                          : 'suppressContentEditableWarning' !== l &&
                            'suppressHydrationWarning' !== l &&
                            'autoFocus' !== l &&
                            (i.hasOwnProperty(l)
                              ? null != c && 'onScroll' === l && Br('scroll', e)
                              : null != c && b(e, l, c, u))
                      }
                    switch (n) {
                      case 'input':
                        K(e), G(e, r, !1)
                        break
                      case 'textarea':
                        K(e), le(e)
                        break
                      case 'option':
                        null != r.value &&
                          e.setAttribute('value', '' + V(r.value))
                        break
                      case 'select':
                        ;(e.multiple = !!r.multiple),
                          null != (l = r.value)
                            ? ne(e, !!r.multiple, l, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0)
                        break
                      default:
                        'function' === typeof a.onClick && (e.onclick = Gr)
                    }
                    switch (n) {
                      case 'button':
                      case 'input':
                      case 'select':
                      case 'textarea':
                        r = !!r.autoFocus
                        break e
                      case 'img':
                        r = !0
                        break e
                      default:
                        r = !1
                    }
                  }
                  r && (t.flags |= 4)
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
              }
              return qi(t), null
            case 6:
              if (e && null != t.stateNode) Ri(e, t, e.memoizedProps, r)
              else {
                if ('string' !== typeof r && null === t.stateNode)
                  throw Error(o(166))
                if (((n = rl(nl.current)), rl(el.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (l = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        $r(r.nodeValue, n, 0 !== (1 & e.mode))
                        break
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          $r(r.nodeValue, n, 0 !== (1 & e.mode))
                    }
                  l && (t.flags |= 4)
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r,
                  ))[da] = t),
                    (t.stateNode = r)
              }
              return qi(t), null
            case 13:
              if (
                (Ea(ul),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ao &&
                  null !== ro &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  po(), mo(), (t.flags |= 98560), (l = !1)
                else if (((l = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!l) throw Error(o(318))
                    if (
                      !(l =
                        null !== (l = t.memoizedState) ? l.dehydrated : null)
                    )
                      throw Error(o(317))
                    l[da] = t
                  } else
                    mo(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4)
                  qi(t), (l = !1)
                } else null !== oo && (is(oo), (oo = null)), (l = !0)
                if (!l) return 65536 & t.flags ? t : null
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & ul.current)
                        ? 0 === Ru && (Ru = 3)
                        : vs())),
                  null !== t.updateQueue && (t.flags |= 4),
                  qi(t),
                  null)
            case 4:
              return (
                ol(),
                Ai(e, t),
                null === e && Wr(t.stateNode.containerInfo),
                qi(t),
                null
              )
            case 10:
              return ko(t.type._context), qi(t), null
            case 19:
              if ((Ea(ul), null === (l = t.memoizedState))) return qi(t), null
              if (((r = 0 !== (128 & t.flags)), null === (u = l.rendering)))
                if (r) Ki(l, !1)
                else {
                  if (0 !== Ru || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = sl(e))) {
                        for (
                          t.flags |= 128,
                            Ki(l, !1),
                            null !== (r = u.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((l = n).flags &= 14680066),
                            null === (u = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.subtreeFlags = 0),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = u.childLanes),
                                (l.lanes = u.lanes),
                                (l.child = u.child),
                                (l.subtreeFlags = 0),
                                (l.deletions = null),
                                (l.memoizedProps = u.memoizedProps),
                                (l.memoizedState = u.memoizedState),
                                (l.updateQueue = u.updateQueue),
                                (l.type = u.type),
                                (e = u.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling)
                        return ja(ul, (1 & ul.current) | 2), t.child
                      }
                      e = e.sibling
                    }
                  null !== l.tail &&
                    Je() > Uu &&
                    ((t.flags |= 128), (r = !0), Ki(l, !1), (t.lanes = 4194304))
                }
              else {
                if (!r)
                  if (null !== (e = sl(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Ki(l, !0),
                      null === l.tail &&
                        'hidden' === l.tailMode &&
                        !u.alternate &&
                        !ao)
                    )
                      return qi(t), null
                  } else
                    2 * Je() - l.renderingStartTime > Uu &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Ki(l, !1),
                      (t.lanes = 4194304))
                l.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = l.last) ? (n.sibling = u) : (t.child = u),
                    (l.last = u))
              }
              return null !== l.tail
                ? ((t = l.tail),
                  (l.rendering = t),
                  (l.tail = t.sibling),
                  (l.renderingStartTime = Je()),
                  (t.sibling = null),
                  (n = ul.current),
                  ja(ul, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (qi(t), null)
            case 22:
            case 23:
              return (
                ds(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Au) &&
                    (qi(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : qi(t),
                null
              )
            case 24:
            case 25:
              return null
          }
          throw Error(o(156, t.tag))
        }
        function Xi(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Ma(t.type) && Aa(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              )
            case 3:
              return (
                ol(),
                Ea(Oa),
                Ea(Pa),
                fl(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              )
            case 5:
              return il(t), null
            case 13:
              if (
                (Ea(ul),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340))
                mo()
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null
            case 19:
              return Ea(ul), null
            case 4:
              return ol(), null
            case 10:
              return ko(t.type._context), null
            case 22:
            case 23:
              return ds(), null
            default:
              return null
          }
        }
        ;(Mi = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode)
            else if (4 !== n.tag && null !== n.child) {
              ;(n.child.return = n), (n = n.child)
              continue
            }
            if (n === t) break
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return
              n = n.return
            }
            ;(n.sibling.return = n.return), (n = n.sibling)
          }
        }),
          (Ai = function () {}),
          (_i = function (e, t, n, r) {
            var a = e.memoizedProps
            if (a !== r) {
              ;(e = t.stateNode), rl(el.current)
              var o,
                l = null
              switch (n) {
                case 'input':
                  ;(a = X(e, a)), (r = X(e, r)), (l = [])
                  break
                case 'select':
                  ;(a = F({}, a, { value: void 0 })),
                    (r = F({}, r, { value: void 0 })),
                    (l = [])
                  break
                case 'textarea':
                  ;(a = re(e, a)), (r = re(e, r)), (l = [])
                  break
                default:
                  'function' !== typeof a.onClick &&
                    'function' === typeof r.onClick &&
                    (e.onclick = Gr)
              }
              for (c in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ('style' === c) {
                    var u = a[c]
                    for (o in u)
                      u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''))
                  } else
                    'dangerouslySetInnerHTML' !== c &&
                      'children' !== c &&
                      'suppressContentEditableWarning' !== c &&
                      'suppressHydrationWarning' !== c &&
                      'autoFocus' !== c &&
                      (i.hasOwnProperty(c)
                        ? l || (l = [])
                        : (l = l || []).push(c, null))
              for (c in r) {
                var s = r[c]
                if (
                  ((u = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                )
                  if ('style' === c)
                    if (u) {
                      for (o in u)
                        !u.hasOwnProperty(o) ||
                          (s && s.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ''))
                      for (o in s)
                        s.hasOwnProperty(o) &&
                          u[o] !== s[o] &&
                          (n || (n = {}), (n[o] = s[o]))
                    } else n || (l || (l = []), l.push(c, n)), (n = s)
                  else
                    'dangerouslySetInnerHTML' === c
                      ? ((s = s ? s.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != s && u !== s && (l = l || []).push(c, s))
                      : 'children' === c
                      ? ('string' !== typeof s && 'number' !== typeof s) ||
                        (l = l || []).push(c, '' + s)
                      : 'suppressContentEditableWarning' !== c &&
                        'suppressHydrationWarning' !== c &&
                        (i.hasOwnProperty(c)
                          ? (null != s && 'onScroll' === c && Br('scroll', e),
                            l || u === s || (l = []))
                          : (l = l || []).push(c, s))
              }
              n && (l = l || []).push('style', n)
              var c = l
              ;(t.updateQueue = c) && (t.flags |= 4)
            }
          }),
          (Ri = function (e, t, n, r) {
            n !== r && (t.flags |= 4)
          })
        var Zi = !1,
          Ji = !1,
          $i = 'function' === typeof WeakSet ? WeakSet : Set,
          Gi = null
        function eu(e, t) {
          var n = e.ref
          if (null !== n)
            if ('function' === typeof n)
              try {
                n(null)
              } catch (r) {
                Es(e, t, r)
              }
            else n.current = null
        }
        function tu(e, t, n) {
          try {
            n()
          } catch (r) {
            Es(e, t, r)
          }
        }
        var nu = !1
        function ru(e, t, n) {
          var r = t.updateQueue
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next)
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy
                ;(a.destroy = void 0), void 0 !== o && tu(t, n, o)
              }
              a = a.next
            } while (a !== r)
          }
        }
        function au(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next)
            do {
              if ((n.tag & e) === e) {
                var r = n.create
                n.destroy = r()
              }
              n = n.next
            } while (n !== t)
          }
        }
        function ou(e) {
          var t = e.ref
          if (null !== t) {
            var n = e.stateNode
            e.tag, (e = n), 'function' === typeof t ? t(e) : (t.current = e)
          }
        }
        function lu(e) {
          var t = e.alternate
          null !== t && ((e.alternate = null), lu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da],
              delete t[pa],
              delete t[ha],
              delete t[va],
              delete t[ga]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null)
        }
        function iu(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag
        }
        function uu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || iu(e.return)) return null
              e = e.return
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e
              if (null === e.child || 4 === e.tag) continue e
              ;(e.child.return = e), (e = e.child)
            }
            if (!(2 & e.flags)) return e.stateNode
          }
        }
        function su(e, t, n) {
          var r = e.tag
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Gr))
          else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e; )
              su(e, t, n), (e = e.sibling)
        }
        function cu(e, t, n) {
          var r = e.tag
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
          else if (4 !== r && null !== (e = e.child))
            for (cu(e, t, n), e = e.sibling; null !== e; )
              cu(e, t, n), (e = e.sibling)
        }
        var fu = null,
          du = !1
        function pu(e, t, n) {
          for (n = n.child; null !== n; ) mu(e, t, n), (n = n.sibling)
        }
        function mu(e, t, n) {
          if (ot && 'function' === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n)
            } catch (i) {}
          switch (n.tag) {
            case 5:
              Ji || eu(n, t)
            case 6:
              var r = fu,
                a = du
              ;(fu = null),
                pu(e, t, n),
                (du = a),
                null !== (fu = r) &&
                  (du
                    ? ((e = fu),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : fu.removeChild(n.stateNode))
              break
            case 18:
              null !== fu &&
                (du
                  ? ((e = fu),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? ua(e.parentNode, n)
                      : 1 === e.nodeType && ua(e, n),
                    Wt(e))
                  : ua(fu, n.stateNode))
              break
            case 4:
              ;(r = fu),
                (a = du),
                (fu = n.stateNode.containerInfo),
                (du = !0),
                pu(e, t, n),
                (fu = r),
                (du = a)
              break
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Ji &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next
                do {
                  var o = a,
                    l = o.destroy
                  ;(o = o.tag),
                    void 0 !== l &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      tu(n, t, l),
                    (a = a.next)
                } while (a !== r)
              }
              pu(e, t, n)
              break
            case 1:
              if (
                !Ji &&
                (eu(n, t),
                'function' === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  ;(r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount()
                } catch (i) {
                  Es(n, t, i)
                }
              pu(e, t, n)
              break
            case 21:
              pu(e, t, n)
              break
            case 22:
              1 & n.mode
                ? ((Ji = (r = Ji) || null !== n.memoizedState),
                  pu(e, t, n),
                  (Ji = r))
                : pu(e, t, n)
              break
            default:
              pu(e, t, n)
          }
        }
        function hu(e) {
          var t = e.updateQueue
          if (null !== t) {
            e.updateQueue = null
            var n = e.stateNode
            null === n && (n = e.stateNode = new $i()),
              t.forEach(function (t) {
                var r = Os.bind(null, e, t)
                n.has(t) || (n.add(t), t.then(r, r))
              })
          }
        }
        function vu(e, t) {
          var n = t.deletions
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r]
              try {
                var l = e,
                  i = t,
                  u = i
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      ;(fu = u.stateNode), (du = !1)
                      break e
                    case 3:
                    case 4:
                      ;(fu = u.stateNode.containerInfo), (du = !0)
                      break e
                  }
                  u = u.return
                }
                if (null === fu) throw Error(o(160))
                mu(l, i, a), (fu = null), (du = !1)
                var s = a.alternate
                null !== s && (s.return = null), (a.return = null)
              } catch (c) {
                Es(a, t, c)
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gu(t, e), (t = t.sibling)
        }
        function gu(e, t) {
          var n = e.alternate,
            r = e.flags
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((vu(t, e), yu(e), 4 & r)) {
                try {
                  ru(3, e, e.return), au(3, e)
                } catch (v) {
                  Es(e, e.return, v)
                }
                try {
                  ru(5, e, e.return)
                } catch (v) {
                  Es(e, e.return, v)
                }
              }
              break
            case 1:
              vu(t, e), yu(e), 512 & r && null !== n && eu(n, n.return)
              break
            case 5:
              if (
                (vu(t, e),
                yu(e),
                512 & r && null !== n && eu(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode
                try {
                  de(a, '')
                } catch (v) {
                  Es(e, e.return, v)
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var l = e.memoizedProps,
                  i = null !== n ? n.memoizedProps : l,
                  u = e.type,
                  s = e.updateQueue
                if (((e.updateQueue = null), null !== s))
                  try {
                    'input' === u &&
                      'radio' === l.type &&
                      null != l.name &&
                      J(a, l),
                      be(u, i)
                    var c = be(u, l)
                    for (i = 0; i < s.length; i += 2) {
                      var f = s[i],
                        d = s[i + 1]
                      'style' === f
                        ? ve(a, d)
                        : 'dangerouslySetInnerHTML' === f
                        ? fe(a, d)
                        : 'children' === f
                        ? de(a, d)
                        : b(a, f, d, c)
                    }
                    switch (u) {
                      case 'input':
                        $(a, l)
                        break
                      case 'textarea':
                        oe(a, l)
                        break
                      case 'select':
                        var p = a._wrapperState.wasMultiple
                        a._wrapperState.wasMultiple = !!l.multiple
                        var m = l.value
                        null != m
                          ? ne(a, !!l.multiple, m, !1)
                          : p !== !!l.multiple &&
                            (null != l.defaultValue
                              ? ne(a, !!l.multiple, l.defaultValue, !0)
                              : ne(a, !!l.multiple, l.multiple ? [] : '', !1))
                    }
                    a[pa] = l
                  } catch (v) {
                    Es(e, e.return, v)
                  }
              }
              break
            case 6:
              if ((vu(t, e), yu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162))
                ;(a = e.stateNode), (l = e.memoizedProps)
                try {
                  a.nodeValue = l
                } catch (v) {
                  Es(e, e.return, v)
                }
              }
              break
            case 3:
              if (
                (vu(t, e),
                yu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Wt(t.containerInfo)
                } catch (v) {
                  Es(e, e.return, v)
                }
              break
            case 4:
            default:
              vu(t, e), yu(e)
              break
            case 13:
              vu(t, e),
                yu(e),
                8192 & (a = e.child).flags &&
                  ((l = null !== a.memoizedState),
                  (a.stateNode.isHidden = l),
                  !l ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Wu = Je())),
                4 & r && hu(e)
              break
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Ji = (c = Ji) || f), vu(t, e), (Ji = c))
                  : vu(t, e),
                yu(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Gi = e, f = e.child; null !== f; ) {
                    for (d = Gi = f; null !== Gi; ) {
                      switch (((m = (p = Gi).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ru(4, p, p.return)
                          break
                        case 1:
                          eu(p, p.return)
                          var h = p.stateNode
                          if ('function' === typeof h.componentWillUnmount) {
                            ;(r = p), (n = p.return)
                            try {
                              ;(t = r),
                                (h.props = t.memoizedProps),
                                (h.state = t.memoizedState),
                                h.componentWillUnmount()
                            } catch (v) {
                              Es(r, n, v)
                            }
                          }
                          break
                        case 5:
                          eu(p, p.return)
                          break
                        case 22:
                          if (null !== p.memoizedState) {
                            Cu(d)
                            continue
                          }
                      }
                      null !== m ? ((m.return = p), (Gi = m)) : Cu(d)
                    }
                    f = f.sibling
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d
                      try {
                        ;(a = d.stateNode),
                          c
                            ? 'function' === typeof (l = a.style).setProperty
                              ? l.setProperty('display', 'none', 'important')
                              : (l.display = 'none')
                            : ((u = d.stateNode),
                              (i =
                                void 0 !== (s = d.memoizedProps.style) &&
                                null !== s &&
                                s.hasOwnProperty('display')
                                  ? s.display
                                  : null),
                              (u.style.display = he('display', i)))
                      } catch (v) {
                        Es(e, e.return, v)
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? '' : d.memoizedProps
                      } catch (v) {
                        Es(e, e.return, v)
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    ;(d.child.return = d), (d = d.child)
                    continue
                  }
                  if (d === e) break
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e
                    f === d && (f = null), (d = d.return)
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling)
                }
              }
              break
            case 19:
              vu(t, e), yu(e), 4 & r && hu(e)
            case 21:
          }
        }
        function yu(e) {
          var t = e.flags
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (iu(n)) {
                    var r = n
                    break e
                  }
                  n = n.return
                }
                throw Error(o(160))
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode
                  32 & r.flags && (de(a, ''), (r.flags &= -33)), cu(e, uu(e), a)
                  break
                case 3:
                case 4:
                  var l = r.stateNode.containerInfo
                  su(e, uu(e), l)
                  break
                default:
                  throw Error(o(161))
              }
            } catch (i) {
              Es(e, e.return, i)
            }
            e.flags &= -3
          }
          4096 & t && (e.flags &= -4097)
        }
        function bu(e, t, n) {
          ;(Gi = e), xu(e, t, n)
        }
        function xu(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Gi; ) {
            var a = Gi,
              o = a.child
            if (22 === a.tag && r) {
              var l = null !== a.memoizedState || Zi
              if (!l) {
                var i = a.alternate,
                  u = (null !== i && null !== i.memoizedState) || Ji
                i = Zi
                var s = Ji
                if (((Zi = l), (Ji = u) && !s))
                  for (Gi = a; null !== Gi; )
                    (u = (l = Gi).child),
                      22 === l.tag && null !== l.memoizedState
                        ? ku(a)
                        : null !== u
                        ? ((u.return = l), (Gi = u))
                        : ku(a)
                for (; null !== o; ) (Gi = o), xu(o, t, n), (o = o.sibling)
                ;(Gi = a), (Zi = i), (Ji = s)
              }
              wu(e)
            } else
              0 !== (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (Gi = o))
                : wu(e)
          }
        }
        function wu(e) {
          for (; null !== Gi; ) {
            var t = Gi
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ji || au(5, t)
                      break
                    case 1:
                      var r = t.stateNode
                      if (4 & t.flags && !Ji)
                        if (null === n) r.componentDidMount()
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : go(t.type, n.memoizedProps)
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate,
                          )
                        }
                      var l = t.updateQueue
                      null !== l && Bo(t, l, r)
                      break
                    case 3:
                      var i = t.updateQueue
                      if (null !== i) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode
                          }
                        Bo(t, i, n)
                      }
                      break
                    case 5:
                      var u = t.stateNode
                      if (null === n && 4 & t.flags) {
                        n = u
                        var s = t.memoizedProps
                        switch (t.type) {
                          case 'button':
                          case 'input':
                          case 'select':
                          case 'textarea':
                            s.autoFocus && n.focus()
                            break
                          case 'img':
                            s.src && (n.src = s.src)
                        }
                      }
                      break
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate
                        if (null !== c) {
                          var f = c.memoizedState
                          if (null !== f) {
                            var d = f.dehydrated
                            null !== d && Wt(d)
                          }
                        }
                      }
                      break
                    default:
                      throw Error(o(163))
                  }
                Ji || (512 & t.flags && ou(t))
              } catch (p) {
                Es(t, t.return, p)
              }
            }
            if (t === e) {
              Gi = null
              break
            }
            if (null !== (n = t.sibling)) {
              ;(n.return = t.return), (Gi = n)
              break
            }
            Gi = t.return
          }
        }
        function Cu(e) {
          for (; null !== Gi; ) {
            var t = Gi
            if (t === e) {
              Gi = null
              break
            }
            var n = t.sibling
            if (null !== n) {
              ;(n.return = t.return), (Gi = n)
              break
            }
            Gi = t.return
          }
        }
        function ku(e) {
          for (; null !== Gi; ) {
            var t = Gi
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return
                  try {
                    au(4, t)
                  } catch (u) {
                    Es(t, n, u)
                  }
                  break
                case 1:
                  var r = t.stateNode
                  if ('function' === typeof r.componentDidMount) {
                    var a = t.return
                    try {
                      r.componentDidMount()
                    } catch (u) {
                      Es(t, a, u)
                    }
                  }
                  var o = t.return
                  try {
                    ou(t)
                  } catch (u) {
                    Es(t, o, u)
                  }
                  break
                case 5:
                  var l = t.return
                  try {
                    ou(t)
                  } catch (u) {
                    Es(t, l, u)
                  }
              }
            } catch (u) {
              Es(t, t.return, u)
            }
            if (t === e) {
              Gi = null
              break
            }
            var i = t.sibling
            if (null !== i) {
              ;(i.return = t.return), (Gi = i)
              break
            }
            Gi = t.return
          }
        }
        var Su,
          Eu = Math.ceil,
          ju = x.ReactCurrentDispatcher,
          Nu = x.ReactCurrentOwner,
          Pu = x.ReactCurrentBatchConfig,
          Ou = 0,
          Lu = null,
          Tu = null,
          Mu = 0,
          Au = 0,
          _u = Sa(0),
          Ru = 0,
          zu = null,
          Fu = 0,
          Iu = 0,
          Bu = 0,
          Du = null,
          Hu = null,
          Wu = 0,
          Uu = 1 / 0,
          Vu = null,
          Qu = !1,
          Ku = null,
          qu = null,
          Yu = !1,
          Xu = null,
          Zu = 0,
          Ju = 0,
          $u = null,
          Gu = -1,
          es = 0
        function ts() {
          return 0 !== (6 & Ou) ? Je() : -1 !== Gu ? Gu : (Gu = Je())
        }
        function ns(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ou) && 0 !== Mu
            ? Mu & -Mu
            : null !== vo.transition
            ? (0 === es && (es = ht()), es)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Zt(e.type))
        }
        function rs(e, t, n, r) {
          if (50 < Ju) throw ((Ju = 0), ($u = null), Error(o(185)))
          gt(e, n, r),
            (0 !== (2 & Ou) && e === Lu) ||
              (e === Lu && (0 === (2 & Ou) && (Iu |= n), 4 === Ru && us(e, Mu)),
              as(e, r),
              1 === n &&
                0 === Ou &&
                0 === (1 & t.mode) &&
                ((Uu = Je() + 500), Ba && Wa()))
        }
        function as(e, t) {
          var n = e.callbackNode
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var l = 31 - lt(o),
                i = 1 << l,
                u = a[l]
              ;-1 === u
                ? (0 !== (i & n) && 0 === (i & r)) || (a[l] = pt(i, t))
                : u <= t && (e.expiredLanes |= i),
                (o &= ~i)
            }
          })(e, t)
          var r = dt(e, e === Lu ? Mu : 0)
          if (0 === r)
            null !== n && Ye(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0)
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ye(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    ;(Ba = !0), Ha(e)
                  })(ss.bind(null, e))
                : Ha(ss.bind(null, e)),
                la(function () {
                  0 === (6 & Ou) && Wa()
                }),
                (n = null)
            else {
              switch (xt(r)) {
                case 1:
                  n = Ge
                  break
                case 4:
                  n = et
                  break
                case 16:
                default:
                  n = tt
                  break
                case 536870912:
                  n = rt
              }
              n = Ls(n, os.bind(null, e))
            }
            ;(e.callbackPriority = t), (e.callbackNode = n)
          }
        }
        function os(e, t) {
          if (((Gu = -1), (es = 0), 0 !== (6 & Ou))) throw Error(o(327))
          var n = e.callbackNode
          if (ks() && e.callbackNode !== n) return null
          var r = dt(e, e === Lu ? Mu : 0)
          if (0 === r) return null
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gs(e, r)
          else {
            t = r
            var a = Ou
            Ou |= 2
            var l = hs()
            for (
              (Lu === e && Mu === t) ||
              ((Vu = null), (Uu = Je() + 500), ps(e, t));
              ;

            )
              try {
                bs()
                break
              } catch (u) {
                ms(e, u)
              }
            Co(),
              (ju.current = l),
              (Ou = a),
              null !== Tu ? (t = 0) : ((Lu = null), (Mu = 0), (t = Ru))
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = mt(e)) && ((r = a), (t = ls(e, a))),
              1 === t)
            )
              throw ((n = zu), ps(e, 0), us(e, r), as(e, Je()), n)
            if (6 === t) us(e, r)
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot
                            a = a.value
                            try {
                              if (!ir(o(), a)) return !1
                            } catch (i) {
                              return !1
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n)
                      else {
                        if (t === e) break
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0
                          t = t.return
                        }
                        ;(t.sibling.return = t.return), (t = t.sibling)
                      }
                    }
                    return !0
                  })(a) &&
                  (2 === (t = gs(e, r)) &&
                    0 !== (l = mt(e)) &&
                    ((r = l), (t = ls(e, l))),
                  1 === t))
              )
                throw ((n = zu), ps(e, 0), us(e, r), as(e, Je()), n)
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345))
                case 2:
                case 5:
                  Cs(e, Hu, Vu)
                  break
                case 3:
                  if (
                    (us(e, r),
                    (130023424 & r) === r && 10 < (t = Wu + 500 - Je()))
                  ) {
                    if (0 !== dt(e, 0)) break
                    if (((a = e.suspendedLanes) & r) !== r) {
                      ts(), (e.pingedLanes |= e.suspendedLanes & a)
                      break
                    }
                    e.timeoutHandle = ra(Cs.bind(null, e, Hu, Vu), t)
                    break
                  }
                  Cs(e, Hu, Vu)
                  break
                case 4:
                  if ((us(e, r), (4194240 & r) === r)) break
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var i = 31 - lt(r)
                    ;(l = 1 << i), (i = t[i]) > a && (a = i), (r &= ~l)
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Je() - r)
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
                          : 1960 * Eu(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(Cs.bind(null, e, Hu, Vu), r)
                    break
                  }
                  Cs(e, Hu, Vu)
                  break
                default:
                  throw Error(o(329))
              }
            }
          }
          return as(e, Je()), e.callbackNode === n ? os.bind(null, e) : null
        }
        function ls(e, t) {
          var n = Du
          return (
            e.current.memoizedState.isDehydrated && (ps(e, t).flags |= 256),
            2 !== (e = gs(e, t)) && ((t = Hu), (Hu = n), null !== t && is(t)),
            e
          )
        }
        function is(e) {
          null === Hu ? (Hu = e) : Hu.push.apply(Hu, e)
        }
        function us(e, t) {
          for (
            t &= ~Bu,
              t &= ~Iu,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - lt(t),
              r = 1 << n
            ;(e[n] = -1), (t &= ~r)
          }
        }
        function ss(e) {
          if (0 !== (6 & Ou)) throw Error(o(327))
          ks()
          var t = dt(e, 0)
          if (0 === (1 & t)) return as(e, Je()), null
          var n = gs(e, t)
          if (0 !== e.tag && 2 === n) {
            var r = mt(e)
            0 !== r && ((t = r), (n = ls(e, r)))
          }
          if (1 === n) throw ((n = zu), ps(e, 0), us(e, t), as(e, Je()), n)
          if (6 === n) throw Error(o(345))
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Cs(e, Hu, Vu),
            as(e, Je()),
            null
          )
        }
        function cs(e, t) {
          var n = Ou
          Ou |= 1
          try {
            return e(t)
          } finally {
            0 === (Ou = n) && ((Uu = Je() + 500), Ba && Wa())
          }
        }
        function fs(e) {
          null !== Xu && 0 === Xu.tag && 0 === (6 & Ou) && ks()
          var t = Ou
          Ou |= 1
          var n = Pu.transition,
            r = bt
          try {
            if (((Pu.transition = null), (bt = 1), e)) return e()
          } finally {
            ;(bt = r), (Pu.transition = n), 0 === (6 & (Ou = t)) && Wa()
          }
        }
        function ds() {
          ;(Au = _u.current), Ea(_u)
        }
        function ps(e, t) {
          ;(e.finishedWork = null), (e.finishedLanes = 0)
          var n = e.timeoutHandle
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Tu))
            for (n = Tu.return; null !== n; ) {
              var r = n
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Aa()
                  break
                case 3:
                  ol(), Ea(Oa), Ea(Pa), fl()
                  break
                case 5:
                  il(r)
                  break
                case 4:
                  ol()
                  break
                case 13:
                case 19:
                  Ea(ul)
                  break
                case 10:
                  ko(r.type._context)
                  break
                case 22:
                case 23:
                  ds()
              }
              n = n.return
            }
          if (
            ((Lu = e),
            (Tu = e = _s(e.current, null)),
            (Mu = Au = t),
            (Ru = 0),
            (zu = null),
            (Bu = Iu = Fu = 0),
            (Hu = Du = null),
            null !== No)
          ) {
            for (t = 0; t < No.length; t++)
              if (null !== (r = (n = No[t]).interleaved)) {
                n.interleaved = null
                var a = r.next,
                  o = n.pending
                if (null !== o) {
                  var l = o.next
                  ;(o.next = a), (r.next = l)
                }
                n.pending = r
              }
            No = null
          }
          return e
        }
        function ms(e, t) {
          for (;;) {
            var n = Tu
            try {
              if ((Co(), (dl.current = li), yl)) {
                for (var r = hl.memoizedState; null !== r; ) {
                  var a = r.queue
                  null !== a && (a.pending = null), (r = r.next)
                }
                yl = !1
              }
              if (
                ((ml = 0),
                (gl = vl = hl = null),
                (bl = !1),
                (xl = 0),
                (Nu.current = null),
                null === n || null === n.return)
              ) {
                ;(Ru = 1), (zu = t), (Tu = null)
                break
              }
              e: {
                var l = e,
                  i = n.return,
                  u = n,
                  s = t
                if (
                  ((t = Mu),
                  (u.flags |= 32768),
                  null !== s &&
                    'object' === typeof s &&
                    'function' === typeof s.then)
                ) {
                  var c = s,
                    f = u,
                    d = f.tag
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null))
                  }
                  var m = gi(i)
                  if (null !== m) {
                    ;(m.flags &= -257),
                      yi(m, i, u, 0, t),
                      1 & m.mode && vi(l, c, t),
                      (s = c)
                    var h = (t = m).updateQueue
                    if (null === h) {
                      var v = new Set()
                      v.add(s), (t.updateQueue = v)
                    } else h.add(s)
                    break e
                  }
                  if (0 === (1 & t)) {
                    vi(l, c, t), vs()
                    break e
                  }
                  s = Error(o(426))
                } else if (ao && 1 & u.mode) {
                  var g = gi(i)
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      yi(g, i, u, 0, t),
                      ho(ci(s, u))
                    break e
                  }
                }
                ;(l = s = ci(s, u)),
                  4 !== Ru && (Ru = 2),
                  null === Du ? (Du = [l]) : Du.push(l),
                  (l = i)
                do {
                  switch (l.tag) {
                    case 3:
                      ;(l.flags |= 65536),
                        (t &= -t),
                        (l.lanes |= t),
                        Fo(l, mi(0, s, t))
                      break e
                    case 1:
                      u = s
                      var y = l.type,
                        b = l.stateNode
                      if (
                        0 === (128 & l.flags) &&
                        ('function' === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            'function' === typeof b.componentDidCatch &&
                            (null === qu || !qu.has(b))))
                      ) {
                        ;(l.flags |= 65536),
                          (t &= -t),
                          (l.lanes |= t),
                          Fo(l, hi(l, u, t))
                        break e
                      }
                  }
                  l = l.return
                } while (null !== l)
              }
              ws(n)
            } catch (x) {
              ;(t = x), Tu === n && null !== n && (Tu = n = n.return)
              continue
            }
            break
          }
        }
        function hs() {
          var e = ju.current
          return (ju.current = li), null === e ? li : e
        }
        function vs() {
          ;(0 !== Ru && 3 !== Ru && 2 !== Ru) || (Ru = 4),
            null === Lu ||
              (0 === (268435455 & Fu) && 0 === (268435455 & Iu)) ||
              us(Lu, Mu)
        }
        function gs(e, t) {
          var n = Ou
          Ou |= 2
          var r = hs()
          for ((Lu === e && Mu === t) || ((Vu = null), ps(e, t)); ; )
            try {
              ys()
              break
            } catch (a) {
              ms(e, a)
            }
          if ((Co(), (Ou = n), (ju.current = r), null !== Tu))
            throw Error(o(261))
          return (Lu = null), (Mu = 0), Ru
        }
        function ys() {
          for (; null !== Tu; ) xs(Tu)
        }
        function bs() {
          for (; null !== Tu && !Xe(); ) xs(Tu)
        }
        function xs(e) {
          var t = Su(e.alternate, e, Au)
          ;(e.memoizedProps = e.pendingProps),
            null === t ? ws(e) : (Tu = t),
            (Nu.current = null)
        }
        function ws(e) {
          var t = e
          do {
            var n = t.alternate
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Yi(n, t, Au))) return void (Tu = n)
            } else {
              if (null !== (n = Xi(n, t)))
                return (n.flags &= 32767), void (Tu = n)
              if (null === e) return (Ru = 6), void (Tu = null)
              ;(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
            }
            if (null !== (t = t.sibling)) return void (Tu = t)
            Tu = t = e
          } while (null !== t)
          0 === Ru && (Ru = 5)
        }
        function Cs(e, t, n) {
          var r = bt,
            a = Pu.transition
          try {
            ;(Pu.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  ks()
                } while (null !== Xu)
                if (0 !== (6 & Ou)) throw Error(o(327))
                n = e.finishedWork
                var a = e.finishedLanes
                if (null === n) return null
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177))
                ;(e.callbackNode = null), (e.callbackPriority = 0)
                var l = n.lanes | n.childLanes
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t
                    ;(e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements)
                    var r = e.eventTimes
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - lt(n),
                        o = 1 << a
                      ;(t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o)
                    }
                  })(e, l),
                  e === Lu && ((Tu = Lu = null), (Mu = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Yu ||
                    ((Yu = !0),
                    Ls(tt, function () {
                      return ks(), null
                    })),
                  (l = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || l)
                ) {
                  ;(l = Pu.transition), (Pu.transition = null)
                  var i = bt
                  bt = 1
                  var u = Ou
                  ;(Ou |= 4),
                    (Nu.current = null),
                    (function (e, t) {
                      if (((ea = Vt), pr((e = dr())))) {
                        if ('selectionStart' in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          }
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection()
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode
                              var a = r.anchorOffset,
                                l = r.focusNode
                              r = r.focusOffset
                              try {
                                n.nodeType, l.nodeType
                              } catch (w) {
                                n = null
                                break e
                              }
                              var i = 0,
                                u = -1,
                                s = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null
                              t: for (;;) {
                                for (
                                  var m;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (u = i + a),
                                    d !== l ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (s = i + r),
                                    3 === d.nodeType &&
                                      (i += d.nodeValue.length),
                                    null !== (m = d.firstChild);

                                )
                                  (p = d), (d = m)
                                for (;;) {
                                  if (d === e) break t
                                  if (
                                    (p === n && ++c === a && (u = i),
                                    p === l && ++f === r && (s = i),
                                    null !== (m = d.nextSibling))
                                  )
                                    break
                                  p = (d = p).parentNode
                                }
                                d = m
                              }
                              n =
                                -1 === u || -1 === s
                                  ? null
                                  : { start: u, end: s }
                            } else n = null
                          }
                        n = n || { start: 0, end: 0 }
                      } else n = null
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Vt = !1,
                          Gi = t;
                        null !== Gi;

                      )
                        if (
                          ((e = (t = Gi).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Gi = e)
                        else
                          for (; null !== Gi; ) {
                            t = Gi
                            try {
                              var h = t.alternate
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break
                                  case 1:
                                    if (null !== h) {
                                      var v = h.memoizedProps,
                                        g = h.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? v
                                            : go(t.type, v),
                                          g,
                                        )
                                      y.__reactInternalSnapshotBeforeUpdate = b
                                    }
                                    break
                                  case 3:
                                    var x = t.stateNode.containerInfo
                                    1 === x.nodeType
                                      ? (x.textContent = '')
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement)
                                    break
                                  default:
                                    throw Error(o(163))
                                }
                            } catch (w) {
                              Es(t, t.return, w)
                            }
                            if (null !== (e = t.sibling)) {
                              ;(e.return = t.return), (Gi = e)
                              break
                            }
                            Gi = t.return
                          }
                      ;(h = nu), (nu = !1)
                    })(e, n),
                    gu(n, e),
                    mr(ta),
                    (Vt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    bu(n, e, a),
                    Ze(),
                    (Ou = u),
                    (bt = i),
                    (Pu.transition = l)
                } else e.current = n
                if (
                  (Yu && ((Yu = !1), (Xu = e), (Zu = a)),
                  (l = e.pendingLanes),
                  0 === l && (qu = null),
                  (function (e) {
                    if (ot && 'function' === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags),
                        )
                      } catch (t) {}
                  })(n.stateNode),
                  as(e, Je()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest })
                if (Qu) throw ((Qu = !1), (e = Ku), (Ku = null), e)
                0 !== (1 & Zu) && 0 !== e.tag && ks(),
                  (l = e.pendingLanes),
                  0 !== (1 & l)
                    ? e === $u
                      ? Ju++
                      : ((Ju = 0), ($u = e))
                    : (Ju = 0),
                  Wa()
              })(e, t, n, r)
          } finally {
            ;(Pu.transition = a), (bt = r)
          }
          return null
        }
        function ks() {
          if (null !== Xu) {
            var e = xt(Zu),
              t = Pu.transition,
              n = bt
            try {
              if (((Pu.transition = null), (bt = 16 > e ? 16 : e), null === Xu))
                var r = !1
              else {
                if (((e = Xu), (Xu = null), (Zu = 0), 0 !== (6 & Ou)))
                  throw Error(o(331))
                var a = Ou
                for (Ou |= 4, Gi = e.current; null !== Gi; ) {
                  var l = Gi,
                    i = l.child
                  if (0 !== (16 & Gi.flags)) {
                    var u = l.deletions
                    if (null !== u) {
                      for (var s = 0; s < u.length; s++) {
                        var c = u[s]
                        for (Gi = c; null !== Gi; ) {
                          var f = Gi
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(8, f, l)
                          }
                          var d = f.child
                          if (null !== d) (d.return = f), (Gi = d)
                          else
                            for (; null !== Gi; ) {
                              var p = (f = Gi).sibling,
                                m = f.return
                              if ((lu(f), f === c)) {
                                Gi = null
                                break
                              }
                              if (null !== p) {
                                ;(p.return = m), (Gi = p)
                                break
                              }
                              Gi = m
                            }
                        }
                      }
                      var h = l.alternate
                      if (null !== h) {
                        var v = h.child
                        if (null !== v) {
                          h.child = null
                          do {
                            var g = v.sibling
                            ;(v.sibling = null), (v = g)
                          } while (null !== v)
                        }
                      }
                      Gi = l
                    }
                  }
                  if (0 !== (2064 & l.subtreeFlags) && null !== i)
                    (i.return = l), (Gi = i)
                  else
                    for (; null !== Gi; ) {
                      if (0 !== (2048 & (l = Gi).flags))
                        switch (l.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ru(9, l, l.return)
                        }
                      var y = l.sibling
                      if (null !== y) {
                        ;(y.return = l.return), (Gi = y)
                        break
                      }
                      Gi = l.return
                    }
                }
                var b = e.current
                for (Gi = b; null !== Gi; ) {
                  var x = (i = Gi).child
                  if (0 !== (2064 & i.subtreeFlags) && null !== x)
                    (x.return = i), (Gi = x)
                  else
                    for (i = b; null !== Gi; ) {
                      if (0 !== (2048 & (u = Gi).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              au(9, u)
                          }
                        } catch (C) {
                          Es(u, u.return, C)
                        }
                      if (u === i) {
                        Gi = null
                        break
                      }
                      var w = u.sibling
                      if (null !== w) {
                        ;(w.return = u.return), (Gi = w)
                        break
                      }
                      Gi = u.return
                    }
                }
                if (
                  ((Ou = a),
                  Wa(),
                  ot && 'function' === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e)
                  } catch (C) {}
                r = !0
              }
              return r
            } finally {
              ;(bt = n), (Pu.transition = t)
            }
          }
          return !1
        }
        function Ss(e, t, n) {
          ;(e = Ro(e, (t = mi(0, (t = ci(n, t)), 1)), 1)),
            (t = ts()),
            null !== e && (gt(e, 1, t), as(e, t))
        }
        function Es(e, t, n) {
          if (3 === e.tag) Ss(e, e, n)
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Ss(t, e, n)
                break
              }
              if (1 === t.tag) {
                var r = t.stateNode
                if (
                  'function' === typeof t.type.getDerivedStateFromError ||
                  ('function' === typeof r.componentDidCatch &&
                    (null === qu || !qu.has(r)))
                ) {
                  ;(t = Ro(t, (e = hi(t, (e = ci(n, e)), 1)), 1)),
                    (e = ts()),
                    null !== t && (gt(t, 1, e), as(t, e))
                  break
                }
              }
              t = t.return
            }
        }
        function js(e, t, n) {
          var r = e.pingCache
          null !== r && r.delete(t),
            (t = ts()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Lu === e &&
              (Mu & n) === n &&
              (4 === Ru ||
              (3 === Ru && (130023424 & Mu) === Mu && 500 > Je() - Wu)
                ? ps(e, 0)
                : (Bu |= n)),
            as(e, t)
        }
        function Ns(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)))
          var n = ts()
          null !== (e = Lo(e, t)) && (gt(e, t, n), as(e, n))
        }
        function Ps(e) {
          var t = e.memoizedState,
            n = 0
          null !== t && (n = t.retryLane), Ns(e, n)
        }
        function Os(e, t) {
          var n = 0
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState
              null !== a && (n = a.retryLane)
              break
            case 19:
              r = e.stateNode
              break
            default:
              throw Error(o(314))
          }
          null !== r && r.delete(t), Ns(e, n)
        }
        function Ls(e, t) {
          return qe(e, t)
        }
        function Ts(e, t, n, r) {
          ;(this.tag = e),
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
            (this.alternate = null)
        }
        function Ms(e, t, n, r) {
          return new Ts(e, t, n, r)
        }
        function As(e) {
          return !(!(e = e.prototype) || !e.isReactComponent)
        }
        function _s(e, t) {
          var n = e.alternate
          return (
            null === n
              ? (((n = Ms(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          )
        }
        function Rs(e, t, n, r, a, l) {
          var i = 2
          if (((r = e), 'function' === typeof e)) As(e) && (i = 1)
          else if ('string' === typeof e) i = 5
          else
            e: switch (e) {
              case k:
                return zs(n.children, a, l, t)
              case S:
                ;(i = 8), (a |= 8)
                break
              case E:
                return (
                  ((e = Ms(12, n, t, 2 | a)).elementType = E), (e.lanes = l), e
                )
              case O:
                return ((e = Ms(13, n, t, a)).elementType = O), (e.lanes = l), e
              case L:
                return ((e = Ms(19, n, t, a)).elementType = L), (e.lanes = l), e
              case A:
                return Fs(n, a, l, t)
              default:
                if ('object' === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case j:
                      i = 10
                      break e
                    case N:
                      i = 9
                      break e
                    case P:
                      i = 11
                      break e
                    case T:
                      i = 14
                      break e
                    case M:
                      ;(i = 16), (r = null)
                      break e
                  }
                throw Error(o(130, null == e ? e : typeof e, ''))
            }
          return (
            ((t = Ms(i, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = l),
            t
          )
        }
        function zs(e, t, n, r) {
          return ((e = Ms(7, e, r, t)).lanes = n), e
        }
        function Fs(e, t, n, r) {
          return (
            ((e = Ms(22, e, r, t)).elementType = A),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          )
        }
        function Is(e, t, n) {
          return ((e = Ms(6, e, null, t)).lanes = n), e
        }
        function Bs(e, t, n) {
          return (
            ((t = Ms(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t,
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          )
        }
        function Ds(e, t, n, r, a) {
          ;(this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = vt(0)),
            (this.expirationTimes = vt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = vt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null)
        }
        function Hs(e, t, n, r, a, o, l, i, u) {
          return (
            (e = new Ds(e, t, n, i, u)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Ms(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Mo(o),
            e
          )
        }
        function Ws(e) {
          if (!e) return Na
          e: {
            if (We((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170))
            var t = e
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context
                  break e
                case 1:
                  if (Ma(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext
                    break e
                  }
              }
              t = t.return
            } while (null !== t)
            throw Error(o(171))
          }
          if (1 === e.tag) {
            var n = e.type
            if (Ma(n)) return Ra(e, n, t)
          }
          return t
        }
        function Us(e, t, n, r, a, o, l, i, u) {
          return (
            ((e = Hs(n, r, !0, e, 0, o, 0, i, u)).context = Ws(null)),
            (n = e.current),
            ((o = _o((r = ts()), (a = ns(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Ro(n, o, a),
            (e.current.lanes = a),
            gt(e, a, r),
            as(e, r),
            e
          )
        }
        function Vs(e, t, n, r) {
          var a = t.current,
            o = ts(),
            l = ns(a)
          return (
            (n = Ws(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = _o(o, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Ro(a, t, l)) && (rs(e, a, l, o), zo(e, a, l)),
            l
          )
        }
        function Qs(e) {
          return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
        }
        function Ks(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane
            e.retryLane = 0 !== n && n < t ? n : t
          }
        }
        function qs(e, t) {
          Ks(e, t), (e = e.alternate) && Ks(e, t)
        }
        Su = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Oa.current) xi = !0
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (xi = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Li(t), mo()
                        break
                      case 5:
                        ll(t)
                        break
                      case 1:
                        Ma(t.type) && za(t)
                        break
                      case 4:
                        al(t, t.stateNode.containerInfo)
                        break
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value
                        ja(yo, r._currentValue), (r._currentValue = a)
                        break
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (ja(ul, 1 & ul.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Ii(e, t, n)
                            : (ja(ul, 1 & ul.current),
                              null !== (e = Qi(e, t, n)) ? e.sibling : null)
                        ja(ul, 1 & ul.current)
                        break
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Ui(e, t, n)
                          t.flags |= 128
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          ja(ul, ul.current),
                          r)
                        )
                          break
                        return null
                      case 22:
                      case 23:
                        return (t.lanes = 0), Ei(e, t, n)
                    }
                    return Qi(e, t, n)
                  })(e, t, n)
                )
              xi = 0 !== (131072 & e.flags)
            }
          else (xi = !1), ao && 0 !== (1048576 & t.flags) && Ga(t, Ka, t.index)
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type
              Vi(e, t), (e = t.pendingProps)
              var a = Ta(t, Pa.current)
              Eo(t, n), (a = Sl(null, t, r, e, a, n))
              var l = El()
              return (
                (t.flags |= 1),
                'object' === typeof a &&
                null !== a &&
                'function' === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ma(r) ? ((l = !0), za(t)) : (l = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Mo(t),
                    (a.updater = Wo),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Ko(t, r, e, n),
                    (t = Oi(null, t, r, !0, l, n)))
                  : ((t.tag = 0),
                    ao && l && eo(t),
                    wi(null, t, a, n),
                    (t = t.child)),
                t
              )
            case 16:
              r = t.elementType
              e: {
                switch (
                  (Vi(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ('function' === typeof e) return As(e) ? 1 : 0
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === P) return 11
                        if (e === T) return 14
                      }
                      return 2
                    })(r)),
                  (e = go(r, e)),
                  a)
                ) {
                  case 0:
                    t = Ni(null, t, r, e, n)
                    break e
                  case 1:
                    t = Pi(null, t, r, e, n)
                    break e
                  case 11:
                    t = Ci(null, t, r, e, n)
                    break e
                  case 14:
                    t = ki(null, t, r, go(r.type, e), n)
                    break e
                }
                throw Error(o(306, r, ''))
              }
              return t
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ni(e, t, r, (a = t.elementType === r ? a : go(r, a)), n)
              )
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Pi(e, t, r, (a = t.elementType === r ? a : go(r, a)), n)
              )
            case 3:
              e: {
                if ((Li(t), null === e)) throw Error(o(387))
                ;(r = t.pendingProps),
                  (a = (l = t.memoizedState).element),
                  Ao(e, t),
                  Io(t, r, null, n)
                var i = t.memoizedState
                if (((r = i.element), l.isDehydrated)) {
                  if (
                    ((l = {
                      element: r,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions,
                    }),
                    (t.updateQueue.baseState = l),
                    (t.memoizedState = l),
                    256 & t.flags)
                  ) {
                    t = Ti(e, t, r, n, (a = ci(Error(o(423)), t)))
                    break e
                  }
                  if (r !== a) {
                    t = Ti(e, t, r, n, (a = ci(Error(o(424)), t)))
                    break e
                  }
                  for (
                    ro = sa(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = $o(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling)
                } else {
                  if ((mo(), r === a)) {
                    t = Qi(e, t, n)
                    break e
                  }
                  wi(e, t, r, n)
                }
                t = t.child
              }
              return t
            case 5:
              return (
                ll(t),
                null === e && so(t),
                (r = t.type),
                (a = t.pendingProps),
                (l = null !== e ? e.memoizedProps : null),
                (i = a.children),
                na(r, a)
                  ? (i = null)
                  : null !== l && na(r, l) && (t.flags |= 32),
                ji(e, t),
                wi(e, t, i, n),
                t.child
              )
            case 6:
              return null === e && so(t), null
            case 13:
              return Ii(e, t, n)
            case 4:
              return (
                al(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Jo(t, null, r, n)) : wi(e, t, r, n),
                t.child
              )
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ci(e, t, r, (a = t.elementType === r ? a : go(r, a)), n)
              )
            case 7:
              return wi(e, t, t.pendingProps, n), t.child
            case 8:
            case 12:
              return wi(e, t, t.pendingProps.children, n), t.child
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (l = t.memoizedProps),
                  (i = a.value),
                  ja(yo, r._currentValue),
                  (r._currentValue = i),
                  null !== l)
                )
                  if (ir(l.value, i)) {
                    if (l.children === a.children && !Oa.current) {
                      t = Qi(e, t, n)
                      break e
                    }
                  } else
                    for (
                      null !== (l = t.child) && (l.return = t);
                      null !== l;

                    ) {
                      var u = l.dependencies
                      if (null !== u) {
                        i = l.child
                        for (var s = u.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === l.tag) {
                              ;(s = _o(-1, n & -n)).tag = 2
                              var c = l.updateQueue
                              if (null !== c) {
                                var f = (c = c.shared).pending
                                null === f
                                  ? (s.next = s)
                                  : ((s.next = f.next), (f.next = s)),
                                  (c.pending = s)
                              }
                            }
                            ;(l.lanes |= n),
                              null !== (s = l.alternate) && (s.lanes |= n),
                              So(l.return, n, t),
                              (u.lanes |= n)
                            break
                          }
                          s = s.next
                        }
                      } else if (10 === l.tag)
                        i = l.type === t.type ? null : l.child
                      else if (18 === l.tag) {
                        if (null === (i = l.return)) throw Error(o(341))
                        ;(i.lanes |= n),
                          null !== (u = i.alternate) && (u.lanes |= n),
                          So(i, n, t),
                          (i = l.sibling)
                      } else i = l.child
                      if (null !== i) i.return = l
                      else
                        for (i = l; null !== i; ) {
                          if (i === t) {
                            i = null
                            break
                          }
                          if (null !== (l = i.sibling)) {
                            ;(l.return = i.return), (i = l)
                            break
                          }
                          i = i.return
                        }
                      l = i
                    }
                wi(e, t, a.children, n), (t = t.child)
              }
              return t
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Eo(t, n),
                (r = r((a = jo(a)))),
                (t.flags |= 1),
                wi(e, t, r, n),
                t.child
              )
            case 14:
              return (
                (a = go((r = t.type), t.pendingProps)),
                ki(e, t, r, (a = go(r.type, a)), n)
              )
            case 15:
              return Si(e, t, t.type, t.pendingProps, n)
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : go(r, a)),
                Vi(e, t),
                (t.tag = 1),
                Ma(r) ? ((e = !0), za(t)) : (e = !1),
                Eo(t, n),
                Vo(t, r, a),
                Ko(t, r, a, n),
                Oi(null, t, r, !0, e, n)
              )
            case 19:
              return Ui(e, t, n)
            case 22:
              return Ei(e, t, n)
          }
          throw Error(o(156, t.tag))
        }
        var Ys =
          'function' === typeof reportError
            ? reportError
            : function (e) {
                console.error(e)
              }
        function Xs(e) {
          this._internalRoot = e
        }
        function Zs(e) {
          this._internalRoot = e
        }
        function Js(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          )
        }
        function $s(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                ' react-mount-point-unstable ' !== e.nodeValue))
          )
        }
        function Gs() {}
        function ec(e, t, n, r, a) {
          var o = n._reactRootContainer
          if (o) {
            var l = o
            if ('function' === typeof a) {
              var i = a
              a = function () {
                var e = Qs(l)
                i.call(e)
              }
            }
            Vs(t, l, e, a)
          } else
            l = (function (e, t, n, r, a) {
              if (a) {
                if ('function' === typeof r) {
                  var o = r
                  r = function () {
                    var e = Qs(l)
                    o.call(e)
                  }
                }
                var l = Us(t, r, e, 0, null, !1, 0, '', Gs)
                return (
                  (e._reactRootContainer = l),
                  (e[ma] = l.current),
                  Wr(8 === e.nodeType ? e.parentNode : e),
                  fs(),
                  l
                )
              }
              for (; (a = e.lastChild); ) e.removeChild(a)
              if ('function' === typeof r) {
                var i = r
                r = function () {
                  var e = Qs(u)
                  i.call(e)
                }
              }
              var u = Hs(e, 0, !1, null, 0, !1, 0, '', Gs)
              return (
                (e._reactRootContainer = u),
                (e[ma] = u.current),
                Wr(8 === e.nodeType ? e.parentNode : e),
                fs(function () {
                  Vs(t, u, n, r)
                }),
                u
              )
            })(n, t, e, a, r)
          return Qs(l)
        }
        ;(Zs.prototype.render = Xs.prototype.render =
          function (e) {
            var t = this._internalRoot
            if (null === t) throw Error(o(409))
            Vs(e, t, null, null)
          }),
          (Zs.prototype.unmount = Xs.prototype.unmount =
            function () {
              var e = this._internalRoot
              if (null !== e) {
                this._internalRoot = null
                var t = e.containerInfo
                fs(function () {
                  Vs(null, e, null, null)
                }),
                  (t[ma] = null)
              }
            }),
          (Zs.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = St()
              e = { blockedOn: null, target: e, priority: t }
              for (
                var n = 0;
                n < At.length && 0 !== t && t < At[n].priority;
                n++
              );
              At.splice(n, 0, e), 0 === n && Ft(e)
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes)
                  0 !== n &&
                    (yt(t, 1 | n),
                    as(t, Je()),
                    0 === (6 & Ou) && ((Uu = Je() + 500), Wa()))
                }
                break
              case 13:
                fs(function () {
                  var t = Lo(e, 1)
                  if (null !== t) {
                    var n = ts()
                    rs(t, e, 1, n)
                  }
                }),
                  qs(e, 1)
            }
          }),
          (Ct = function (e) {
            if (13 === e.tag) {
              var t = Lo(e, 134217728)
              if (null !== t) rs(t, e, 134217728, ts())
              qs(e, 134217728)
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = ns(e),
                n = Lo(e, t)
              if (null !== n) rs(n, e, t, ts())
              qs(e, t)
            }
          }),
          (St = function () {
            return bt
          }),
          (Et = function (e, t) {
            var n = bt
            try {
              return (bt = e), t()
            } finally {
              bt = n
            }
          }),
          (Ce = function (e, t, n) {
            switch (t) {
              case 'input':
                if (($(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode
                  for (
                    n = n.querySelectorAll(
                      'input[name=' +
                        JSON.stringify('' + t) +
                        '][type="radio"]',
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t]
                    if (r !== e && r.form === e.form) {
                      var a = wa(r)
                      if (!a) throw Error(o(90))
                      q(r), $(r, a)
                    }
                  }
                }
                break
              case 'textarea':
                oe(e, n)
                break
              case 'select':
                null != (t = n.value) && ne(e, !!n.multiple, t, !1)
            }
          }),
          (Pe = cs),
          (Oe = fs)
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ba, xa, wa, je, Ne, cs],
          },
          nc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: '18.2.0',
            rendererPackageName: 'react-dom',
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Qe(e)) ? null : e.stateNode
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
          }
        if ('undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              ;(at = ac.inject(rc)), (ot = ac)
            } catch (ce) {}
        }
        ;(t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null
            if (!Js(t)) throw Error(o(200))
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null
              return {
                $$typeof: C,
                key: null == r ? null : '' + r,
                children: e,
                containerInfo: t,
                implementation: n,
              }
            })(e, t, null, n)
          }),
          (t.createRoot = function (e, t) {
            if (!Js(e)) throw Error(o(299))
            var n = !1,
              r = '',
              a = Ys
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Hs(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ma] = t.current),
              Wr(8 === e.nodeType ? e.parentNode : e),
              new Xs(t)
            )
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null
            if (1 === e.nodeType) return e
            var t = e._reactInternals
            if (void 0 === t) {
              if ('function' === typeof e.render) throw Error(o(188))
              throw ((e = Object.keys(e).join(',')), Error(o(268, e)))
            }
            return (e = null === (e = Qe(t)) ? null : e.stateNode)
          }),
          (t.flushSync = function (e) {
            return fs(e)
          }),
          (t.hydrate = function (e, t, n) {
            if (!$s(t)) throw Error(o(200))
            return ec(null, e, t, !0, n)
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Js(e)) throw Error(o(405))
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              l = '',
              i = Ys
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (l = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
              (t = Us(t, null, e, 1, null != n ? n : null, a, 0, l, i)),
              (e[ma] = t.current),
              Wr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a)
            return new Zs(t)
          }),
          (t.render = function (e, t, n) {
            if (!$s(t)) throw Error(o(200))
            return ec(null, e, t, !1, n)
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!$s(e)) throw Error(o(40))
            return (
              !!e._reactRootContainer &&
              (fs(function () {
                ec(null, null, e, !1, function () {
                  ;(e._reactRootContainer = null), (e[ma] = null)
                })
              }),
              !0)
            )
          }),
          (t.unstable_batchedUpdates = cs),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!$s(n)) throw Error(o(200))
            if (null == e || void 0 === e._reactInternals) throw Error(o(38))
            return ec(e, t, n, !1, r)
          }),
          (t.version = '18.2.0-next-9e3b772b8-20220608')
      },
      250: function (e, t, n) {
        var r = n(164)
        ;(t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot)
      },
      164: function (e, t, n) {
        !(function e() {
          if (
            'undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            'function' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
            } catch (t) {
              console.error(t)
            }
        })(),
          (e.exports = n(463))
      },
      459: function (e, t) {
        var n,
          r = Symbol.for('react.element'),
          a = Symbol.for('react.portal'),
          o = Symbol.for('react.fragment'),
          l = Symbol.for('react.strict_mode'),
          i = Symbol.for('react.profiler'),
          u = Symbol.for('react.provider'),
          s = Symbol.for('react.context'),
          c = Symbol.for('react.server_context'),
          f = Symbol.for('react.forward_ref'),
          d = Symbol.for('react.suspense'),
          p = Symbol.for('react.suspense_list'),
          m = Symbol.for('react.memo'),
          h = Symbol.for('react.lazy'),
          v = Symbol.for('react.offscreen')
        function g(e) {
          if ('object' === typeof e && null !== e) {
            var t = e.$$typeof
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case o:
                  case i:
                  case l:
                  case d:
                  case p:
                    return e
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case c:
                      case s:
                      case f:
                      case h:
                      case m:
                      case u:
                        return e
                      default:
                        return t
                    }
                }
              case a:
                return t
            }
          }
        }
        n = Symbol.for('react.module.reference')
      },
      900: function (e, t, n) {
        n(459)
      },
      374: function (e, t, n) {
        var r = n(791),
          a = Symbol.for('react.element'),
          o = Symbol.for('react.fragment'),
          l = Object.prototype.hasOwnProperty,
          i =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 }
        function s(e, t, n) {
          var r,
            o = {},
            s = null,
            c = null
          for (r in (void 0 !== n && (s = '' + n),
          void 0 !== t.key && (s = '' + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            l.call(t, r) && !u.hasOwnProperty(r) && (o[r] = t[r])
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r])
          return {
            $$typeof: a,
            type: e,
            key: s,
            ref: c,
            props: o,
            _owner: i.current,
          }
        }
        ;(t.Fragment = o), (t.jsx = s), (t.jsxs = s)
      },
      117: function (e, t) {
        var n = Symbol.for('react.element'),
          r = Symbol.for('react.portal'),
          a = Symbol.for('react.fragment'),
          o = Symbol.for('react.strict_mode'),
          l = Symbol.for('react.profiler'),
          i = Symbol.for('react.provider'),
          u = Symbol.for('react.context'),
          s = Symbol.for('react.forward_ref'),
          c = Symbol.for('react.suspense'),
          f = Symbol.for('react.memo'),
          d = Symbol.for('react.lazy'),
          p = Symbol.iterator
        var m = {
            isMounted: function () {
              return !1
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = Object.assign,
          v = {}
        function g(e, t, n) {
          ;(this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || m)
        }
        function y() {}
        function b(e, t, n) {
          ;(this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || m)
        }
        ;(g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ('object' !== typeof e && 'function' !== typeof e && null != e)
              throw Error(
                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
              )
            this.updater.enqueueSetState(this, e, t, 'setState')
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
          }),
          (y.prototype = g.prototype)
        var x = (b.prototype = new y())
        ;(x.constructor = b), h(x, g.prototype), (x.isPureReactComponent = !0)
        var w = Array.isArray,
          C = Object.prototype.hasOwnProperty,
          k = { current: null },
          S = { key: !0, ref: !0, __self: !0, __source: !0 }
        function E(e, t, r) {
          var a,
            o = {},
            l = null,
            i = null
          if (null != t)
            for (a in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (l = '' + t.key),
            t))
              C.call(t, a) && !S.hasOwnProperty(a) && (o[a] = t[a])
          var u = arguments.length - 2
          if (1 === u) o.children = r
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2]
            o.children = s
          }
          if (e && e.defaultProps)
            for (a in (u = e.defaultProps)) void 0 === o[a] && (o[a] = u[a])
          return {
            $$typeof: n,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: k.current,
          }
        }
        function j(e) {
          return 'object' === typeof e && null !== e && e.$$typeof === n
        }
        var N = /\/+/g
        function P(e, t) {
          return 'object' === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { '=': '=0', ':': '=2' }
                return (
                  '$' +
                  e.replace(/[=:]/g, function (e) {
                    return t[e]
                  })
                )
              })('' + e.key)
            : t.toString(36)
        }
        function O(e, t, a, o, l) {
          var i = typeof e
          ;('undefined' !== i && 'boolean' !== i) || (e = null)
          var u = !1
          if (null === e) u = !0
          else
            switch (i) {
              case 'string':
              case 'number':
                u = !0
                break
              case 'object':
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0
                }
            }
          if (u)
            return (
              (l = l((u = e))),
              (e = '' === o ? '.' + P(u, 0) : o),
              w(l)
                ? ((a = ''),
                  null != e && (a = e.replace(N, '$&/') + '/'),
                  O(l, t, a, '', function (e) {
                    return e
                  }))
                : null != l &&
                  (j(l) &&
                    (l = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      }
                    })(
                      l,
                      a +
                        (!l.key || (u && u.key === l.key)
                          ? ''
                          : ('' + l.key).replace(N, '$&/') + '/') +
                        e,
                    )),
                  t.push(l)),
              1
            )
          if (((u = 0), (o = '' === o ? '.' : o + ':'), w(e)))
            for (var s = 0; s < e.length; s++) {
              var c = o + P((i = e[s]), s)
              u += O(i, t, a, c, l)
            }
          else if (
            ((c = (function (e) {
              return null === e || 'object' !== typeof e
                ? null
                : 'function' === typeof (e = (p && e[p]) || e['@@iterator'])
                ? e
                : null
            })(e)),
            'function' === typeof c)
          )
            for (e = c.call(e), s = 0; !(i = e.next()).done; )
              u += O((i = i.value), t, a, (c = o + P(i, s++)), l)
          else if ('object' === i)
            throw (
              ((t = String(e)),
              Error(
                'Objects are not valid as a React child (found: ' +
                  ('[object Object]' === t
                    ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                    : t) +
                  '). If you meant to render a collection of children, use an array instead.',
              ))
            )
          return u
        }
        function L(e, t, n) {
          if (null == e) return e
          var r = [],
            a = 0
          return (
            O(e, r, '', '', function (e) {
              return t.call(n, e, a++)
            }),
            r
          )
        }
        function T(e) {
          if (-1 === e._status) {
            var t = e._result
            ;(t = t()).then(
              function (t) {
                ;(0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t))
              },
              function (t) {
                ;(0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t))
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = t))
          }
          if (1 === e._status) return e._result.default
          throw e._result
        }
        var M = { current: null },
          A = { transition: null },
          _ = {
            ReactCurrentDispatcher: M,
            ReactCurrentBatchConfig: A,
            ReactCurrentOwner: k,
          }
        ;(t.Children = {
          map: L,
          forEach: function (e, t, n) {
            L(
              e,
              function () {
                t.apply(this, arguments)
              },
              n,
            )
          },
          count: function (e) {
            var t = 0
            return (
              L(e, function () {
                t++
              }),
              t
            )
          },
          toArray: function (e) {
            return (
              L(e, function (e) {
                return e
              }) || []
            )
          },
          only: function (e) {
            if (!j(e))
              throw Error(
                'React.Children.only expected to receive a single React element child.',
              )
            return e
          },
        }),
          (t.Component = g),
          (t.Fragment = a),
          (t.Profiler = l),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                'React.cloneElement(...): The argument must be a React element, but you passed ' +
                  e +
                  '.',
              )
            var a = h({}, e.props),
              o = e.key,
              l = e.ref,
              i = e._owner
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (i = k.current)),
                void 0 !== t.key && (o = '' + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps
              for (s in t)
                C.call(t, s) &&
                  !S.hasOwnProperty(s) &&
                  (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s])
            }
            var s = arguments.length - 2
            if (1 === s) a.children = r
            else if (1 < s) {
              u = Array(s)
              for (var c = 0; c < s; c++) u[c] = arguments[c + 2]
              a.children = u
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: l,
              props: a,
              _owner: i,
            }
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            )
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e)
            return (t.type = e), t
          }),
          (t.createRef = function () {
            return { current: null }
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e }
          }),
          (t.isValidElement = j),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: T,
            }
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t }
          }),
          (t.startTransition = function (e) {
            var t = A.transition
            A.transition = {}
            try {
              e()
            } finally {
              A.transition = t
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              'act(...) is not supported in production builds of React.',
            )
          }),
          (t.useCallback = function (e, t) {
            return M.current.useCallback(e, t)
          }),
          (t.useContext = function (e) {
            return M.current.useContext(e)
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return M.current.useDeferredValue(e)
          }),
          (t.useEffect = function (e, t) {
            return M.current.useEffect(e, t)
          }),
          (t.useId = function () {
            return M.current.useId()
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return M.current.useImperativeHandle(e, t, n)
          }),
          (t.useInsertionEffect = function (e, t) {
            return M.current.useInsertionEffect(e, t)
          }),
          (t.useLayoutEffect = function (e, t) {
            return M.current.useLayoutEffect(e, t)
          }),
          (t.useMemo = function (e, t) {
            return M.current.useMemo(e, t)
          }),
          (t.useReducer = function (e, t, n) {
            return M.current.useReducer(e, t, n)
          }),
          (t.useRef = function (e) {
            return M.current.useRef(e)
          }),
          (t.useState = function (e) {
            return M.current.useState(e)
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return M.current.useSyncExternalStore(e, t, n)
          }),
          (t.useTransition = function () {
            return M.current.useTransition()
          }),
          (t.version = '18.2.0')
      },
      791: function (e, t, n) {
        e.exports = n(117)
      },
      184: function (e, t, n) {
        e.exports = n(374)
      },
      813: function (e, t) {
        function n(e, t) {
          var n = e.length
          e.push(t)
          for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r]
            if (!(0 < o(a, t))) break
            ;(e[r] = t), (e[n] = a), (n = r)
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0]
        }
        function a(e) {
          if (0 === e.length) return null
          var t = e[0],
            n = e.pop()
          if (n !== t) {
            e[0] = n
            for (var r = 0, a = e.length, l = a >>> 1; r < l; ) {
              var i = 2 * (r + 1) - 1,
                u = e[i],
                s = i + 1,
                c = e[s]
              if (0 > o(u, n))
                s < a && 0 > o(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[i] = n), (r = i))
              else {
                if (!(s < a && 0 > o(c, n))) break
                ;(e[r] = c), (e[s] = n), (r = s)
              }
            }
          }
          return t
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex
          return 0 !== n ? n : e.id - t.id
        }
        if (
          'object' === typeof performance &&
          'function' === typeof performance.now
        ) {
          var l = performance
          t.unstable_now = function () {
            return l.now()
          }
        } else {
          var i = Date,
            u = i.now()
          t.unstable_now = function () {
            return i.now() - u
          }
        }
        var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          m = !1,
          h = !1,
          v = !1,
          g = 'function' === typeof setTimeout ? setTimeout : null,
          y = 'function' === typeof clearTimeout ? clearTimeout : null,
          b = 'undefined' !== typeof setImmediate ? setImmediate : null
        function x(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c)
            else {
              if (!(t.startTime <= e)) break
              a(c), (t.sortIndex = t.expirationTime), n(s, t)
            }
            t = r(c)
          }
        }
        function w(e) {
          if (((v = !1), x(e), !h))
            if (null !== r(s)) (h = !0), A(C)
            else {
              var t = r(c)
              null !== t && _(w, t.startTime - e)
            }
        }
        function C(e, n) {
          ;(h = !1), v && ((v = !1), y(j), (j = -1)), (m = !0)
          var o = p
          try {
            for (
              x(n), d = r(s);
              null !== d && (!(d.expirationTime > n) || (e && !O()));

            ) {
              var l = d.callback
              if ('function' === typeof l) {
                ;(d.callback = null), (p = d.priorityLevel)
                var i = l(d.expirationTime <= n)
                ;(n = t.unstable_now()),
                  'function' === typeof i
                    ? (d.callback = i)
                    : d === r(s) && a(s),
                  x(n)
              } else a(s)
              d = r(s)
            }
            if (null !== d) var u = !0
            else {
              var f = r(c)
              null !== f && _(w, f.startTime - n), (u = !1)
            }
            return u
          } finally {
            ;(d = null), (p = o), (m = !1)
          }
        }
        'undefined' !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling)
        var k,
          S = !1,
          E = null,
          j = -1,
          N = 5,
          P = -1
        function O() {
          return !(t.unstable_now() - P < N)
        }
        function L() {
          if (null !== E) {
            var e = t.unstable_now()
            P = e
            var n = !0
            try {
              n = E(!0, e)
            } finally {
              n ? k() : ((S = !1), (E = null))
            }
          } else S = !1
        }
        if ('function' === typeof b)
          k = function () {
            b(L)
          }
        else if ('undefined' !== typeof MessageChannel) {
          var T = new MessageChannel(),
            M = T.port2
          ;(T.port1.onmessage = L),
            (k = function () {
              M.postMessage(null)
            })
        } else
          k = function () {
            g(L, 0)
          }
        function A(e) {
          ;(E = e), S || ((S = !0), k())
        }
        function _(e, n) {
          j = g(function () {
            e(t.unstable_now())
          }, n)
        }
        ;(t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null
          }),
          (t.unstable_continueExecution = function () {
            h || m || ((h = !0), A(C))
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (N = 0 < e ? Math.floor(1e3 / e) : 5)
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s)
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3
                break
              default:
                t = p
            }
            var n = p
            p = t
            try {
              return e()
            } finally {
              p = n
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break
              default:
                e = 3
            }
            var n = p
            p = e
            try {
              return t()
            } finally {
              p = n
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var l = t.unstable_now()
            switch (
              ('object' === typeof o && null !== o
                ? (o = 'number' === typeof (o = o.delay) && 0 < o ? l + o : l)
                : (o = l),
              e)
            ) {
              case 1:
                var i = -1
                break
              case 2:
                i = 250
                break
              case 5:
                i = 1073741823
                break
              case 4:
                i = 1e4
                break
              default:
                i = 5e3
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (i = o + i),
                sortIndex: -1,
              }),
              o > l
                ? ((e.sortIndex = o),
                  n(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (v ? (y(j), (j = -1)) : (v = !0), _(w, o - l)))
                : ((e.sortIndex = i), n(s, e), h || m || ((h = !0), A(C))),
              e
            )
          }),
          (t.unstable_shouldYield = O),
          (t.unstable_wrapCallback = function (e) {
            var t = p
            return function () {
              var n = p
              p = t
              try {
                return e.apply(this, arguments)
              } finally {
                p = n
              }
            }
          })
      },
      296: function (e, t, n) {
        e.exports = n(813)
      },
      561: function (e, t, n) {
        var r = n(791)
        var a =
            'function' === typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e === 1 / t)) ||
                    (e !== e && t !== t)
                  )
                },
          o = r.useState,
          l = r.useEffect,
          i = r.useLayoutEffect,
          u = r.useDebugValue
        function s(e) {
          var t = e.getSnapshot
          e = e.value
          try {
            var n = t()
            return !a(e, n)
          } catch (r) {
            return !0
          }
        }
        var c =
          'undefined' === typeof window ||
          'undefined' === typeof window.document ||
          'undefined' === typeof window.document.createElement
            ? function (e, t) {
                return t()
              }
            : function (e, t) {
                var n = t(),
                  r = o({ inst: { value: n, getSnapshot: t } }),
                  a = r[0].inst,
                  c = r[1]
                return (
                  i(
                    function () {
                      ;(a.value = n),
                        (a.getSnapshot = t),
                        s(a) && c({ inst: a })
                    },
                    [e, n, t],
                  ),
                  l(
                    function () {
                      return (
                        s(a) && c({ inst: a }),
                        e(function () {
                          s(a) && c({ inst: a })
                        })
                      )
                    },
                    [e],
                  ),
                  u(n),
                  n
                )
              }
        t.useSyncExternalStore =
          void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : c
      },
      595: function (e, t, n) {
        var r = n(791),
          a = n(248)
        var o =
            'function' === typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e === 1 / t)) ||
                    (e !== e && t !== t)
                  )
                },
          l = a.useSyncExternalStore,
          i = r.useRef,
          u = r.useEffect,
          s = r.useMemo,
          c = r.useDebugValue
        t.useSyncExternalStoreWithSelector = function (e, t, n, r, a) {
          var f = i(null)
          if (null === f.current) {
            var d = { hasValue: !1, value: null }
            f.current = d
          } else d = f.current
          f = s(
            function () {
              function e(e) {
                if (!u) {
                  if (
                    ((u = !0), (l = e), (e = r(e)), void 0 !== a && d.hasValue)
                  ) {
                    var t = d.value
                    if (a(t, e)) return (i = t)
                  }
                  return (i = e)
                }
                if (((t = i), o(l, e))) return t
                var n = r(e)
                return void 0 !== a && a(t, n) ? t : ((l = e), (i = n))
              }
              var l,
                i,
                u = !1,
                s = void 0 === n ? null : n
              return [
                function () {
                  return e(t())
                },
                null === s
                  ? void 0
                  : function () {
                      return e(s())
                    },
              ]
            },
            [t, n, r, a],
          )
          var p = l(e, f[0], f[1])
          return (
            u(
              function () {
                ;(d.hasValue = !0), (d.value = p)
              },
              [p],
            ),
            c(p),
            p
          )
        }
      },
      248: function (e, t, n) {
        e.exports = n(561)
      },
      327: function (e, t, n) {
        e.exports = n(595)
      },
    },
    t = {}
  function n(r) {
    var a = t[r]
    if (void 0 !== a) return a.exports
    var o = (t[r] = { exports: {} })
    return e[r](o, o.exports, n), o.exports
  }
  !(function () {
    var e,
      t = Object.getPrototypeOf
        ? function (e) {
            return Object.getPrototypeOf(e)
          }
        : function (e) {
            return e.__proto__
          }
    n.t = function (r, a) {
      if ((1 & a && (r = this(r)), 8 & a)) return r
      if ('object' === typeof r && r) {
        if (4 & a && r.__esModule) return r
        if (16 & a && 'function' === typeof r.then) return r
      }
      var o = Object.create(null)
      n.r(o)
      var l = {}
      e = e || [null, t({}), t([]), t(t)]
      for (var i = 2 & a && r; 'object' == typeof i && !~e.indexOf(i); i = t(i))
        Object.getOwnPropertyNames(i).forEach(function (e) {
          l[e] = function () {
            return r[e]
          }
        })
      return (
        (l.default = function () {
          return r
        }),
        n.d(o, l),
        o
      )
    }
  })(),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
    }),
    (n.g = (function () {
      if ('object' === typeof globalThis) return globalThis
      try {
        return this || new Function('return this')()
      } catch (e) {
        if ('object' === typeof window) return window
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (n.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (n.p = '/stavmatic/'),
    (function () {
      var e,
        t = n(791),
        r = n.t(t, 2),
        a = n(250)
      function o(e) {
        if (Array.isArray(e)) return e
      }
      function l(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function i(e, t) {
        if (e) {
          if ('string' === typeof e) return l(e, t)
          var n = Object.prototype.toString.call(e).slice(8, -1)
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? l(e, t)
              : void 0
          )
        }
      }
      function u() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        )
      }
      function s(e, t) {
        return (
          o(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator']
            if (null != n) {
              var r,
                a,
                o,
                l,
                i = [],
                u = !0,
                s = !1
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return
                  u = !1
                } else
                  for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (i.push(r.value), i.length !== t);
                    u = !0
                  );
              } catch (c) {
                ;(s = !0), (a = c)
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((l = n.return()), Object(l) !== l)
                  )
                    return
                } finally {
                  if (s) throw a
                }
              }
              return i
            }
          })(e, t) ||
          i(e, t) ||
          u()
        )
      }
      function c(e) {
        if (
          ('undefined' !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e['@@iterator']
        )
          return Array.from(e)
      }
      function f(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return l(e)
          })(e) ||
          c(e) ||
          i(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            )
          })()
        )
      }
      function d(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function')
      }
      function p(e) {
        return (
          (p =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          p(e)
        )
      }
      function m(e) {
        var t = (function (e, t) {
          if ('object' !== p(e) || null === e) return e
          var n = e[Symbol.toPrimitive]
          if (void 0 !== n) {
            var r = n.call(e, t || 'default')
            if ('object' !== p(r)) return r
            throw new TypeError('@@toPrimitive must return a primitive value.')
          }
          return ('string' === t ? String : Number)(e)
        })(e, 'string')
        return 'symbol' === p(t) ? t : String(t)
      }
      function h(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, m(r.key), r)
        }
      }
      function v(e, t, n) {
        return (
          t && h(e.prototype, t),
          n && h(e, n),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          e
        )
      }
      function g(e, t) {
        return (
          (g = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e
              }),
          g(e, t)
        )
      }
      function y(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function',
          )
        ;(e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          t && g(e, t)
      }
      function b(e) {
        return (
          (b = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
              }),
          b(e)
        )
      }
      function x() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1
        if (Reflect.construct.sham) return !1
        if ('function' === typeof Proxy) return !0
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            ),
            !0
          )
        } catch (e) {
          return !1
        }
      }
      function w(e, t) {
        if (t && ('object' === p(t) || 'function' === typeof t)) return t
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined',
          )
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            )
          return e
        })(e)
      }
      function C(e) {
        var t = x()
        return function () {
          var n,
            r = b(e)
          if (t) {
            var a = b(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return w(this, n)
        }
      }
      function k(e, t, n) {
        return (
          (k = x()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null]
                r.push.apply(r, t)
                var a = new (Function.bind.apply(e, r))()
                return n && g(a, n.prototype), a
              }),
          k.apply(null, arguments)
        )
      }
      function S(e) {
        var t = 'function' === typeof Map ? new Map() : void 0
        return (
          (S = function (e) {
            if (
              null === e ||
              !(function (e) {
                return -1 !== Function.toString.call(e).indexOf('[native code]')
              })(e)
            )
              return e
            if ('function' !== typeof e)
              throw new TypeError(
                'Super expression must either be null or a function',
              )
            if ('undefined' !== typeof t) {
              if (t.has(e)) return t.get(e)
              t.set(e, n)
            }
            function n() {
              return k(e, arguments, b(this).constructor)
            }
            return (
              (n.prototype = Object.create(e.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              g(n, e)
            )
          }),
          S(e)
        )
      }
      function E() {
        return (
          (E = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
              }),
          E.apply(this, arguments)
        )
      }
      !(function (e) {
        ;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
      })(e || (e = {}))
      var j,
        N = 'popstate'
      function P(e, t) {
        if (!1 === e || null === e || 'undefined' === typeof e)
          throw new Error(t)
      }
      function O(e, t) {
        if (!e) {
          'undefined' !== typeof console && console.warn(t)
          try {
            throw new Error(t)
          } catch (n) {}
        }
      }
      function L(e, t) {
        return { usr: e.state, key: e.key, idx: t }
      }
      function T(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          E(
            {
              pathname: 'string' === typeof e ? e : e.pathname,
              search: '',
              hash: '',
            },
            'string' === typeof t ? A(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            },
          )
        )
      }
      function M(e) {
        var t = e.pathname,
          n = void 0 === t ? '/' : t,
          r = e.search,
          a = void 0 === r ? '' : r,
          o = e.hash,
          l = void 0 === o ? '' : o
        return (
          a && '?' !== a && (n += '?' === a.charAt(0) ? a : '?' + a),
          l && '#' !== l && (n += '#' === l.charAt(0) ? l : '#' + l),
          n
        )
      }
      function A(e) {
        var t = {}
        if (e) {
          var n = e.indexOf('#')
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)))
          var r = e.indexOf('?')
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e)
        }
        return t
      }
      function _(t, n, r, a) {
        void 0 === a && (a = {})
        var o = a,
          l = o.window,
          i = void 0 === l ? document.defaultView : l,
          u = o.v5Compat,
          s = void 0 !== u && u,
          c = i.history,
          f = e.Pop,
          d = null,
          p = m()
        function m() {
          return (c.state || { idx: null }).idx
        }
        function h() {
          f = e.Pop
          var t = m(),
            n = null == t ? null : t - p
          ;(p = t), d && d({ action: f, location: g.location, delta: n })
        }
        function v(e) {
          var t =
              'null' !== i.location.origin
                ? i.location.origin
                : i.location.href,
            n = 'string' === typeof e ? e : M(e)
          return (
            P(
              t,
              'No window.location.(origin|href) available to create URL for href: ' +
                n,
            ),
            new URL(n, t)
          )
        }
        null == p && ((p = 0), c.replaceState(E({}, c.state, { idx: p }), ''))
        var g = {
          get action() {
            return f
          },
          get location() {
            return t(i, c)
          },
          listen: function (e) {
            if (d) throw new Error('A history only accepts one active listener')
            return (
              i.addEventListener(N, h),
              (d = e),
              function () {
                i.removeEventListener(N, h), (d = null)
              }
            )
          },
          createHref: function (e) {
            return n(i, e)
          },
          createURL: v,
          encodeLocation: function (e) {
            var t = v(e)
            return { pathname: t.pathname, search: t.search, hash: t.hash }
          },
          push: function (t, n) {
            f = e.Push
            var a = T(g.location, t, n)
            r && r(a, t)
            var o = L(a, (p = m() + 1)),
              l = g.createHref(a)
            try {
              c.pushState(o, '', l)
            } catch (u) {
              i.location.assign(l)
            }
            s && d && d({ action: f, location: g.location, delta: 1 })
          },
          replace: function (t, n) {
            f = e.Replace
            var a = T(g.location, t, n)
            r && r(a, t)
            var o = L(a, (p = m())),
              l = g.createHref(a)
            c.replaceState(o, '', l),
              s && d && d({ action: f, location: g.location, delta: 0 })
          },
          go: function (e) {
            return c.go(e)
          },
        }
        return g
      }
      !(function (e) {
        ;(e.data = 'data'),
          (e.deferred = 'deferred'),
          (e.redirect = 'redirect'),
          (e.error = 'error')
      })(j || (j = {}))
      new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children'])
      function R(e, t, n) {
        void 0 === n && (n = '/')
        var r = X(('string' === typeof t ? A(t) : t).pathname || '/', n)
        if (null == r) return null
        var a = z(e)
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var n =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, n) {
                      return e === t[n]
                    })
                  return n ? e[e.length - 1] - t[t.length - 1] : 0
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex
                  }),
                )
          })
        })(a)
        for (var o = null, l = 0; null == o && l < a.length; ++l)
          o = K(a[l], Y(r))
        return o
      }
      function z(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = '')
        var a = function (e, a, o) {
          var l = {
            relativePath: void 0 === o ? e.path || '' : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          }
          l.relativePath.startsWith('/') &&
            (P(
              l.relativePath.startsWith(r),
              'Absolute route path "' +
                l.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
            ),
            (l.relativePath = l.relativePath.slice(r.length)))
          var i = G([r, l.relativePath]),
            u = n.concat(l)
          e.children &&
            e.children.length > 0 &&
            (P(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                i +
                '".',
            ),
            z(e.children, t, u, i)),
            (null != e.path || e.index) &&
              t.push({ path: i, score: Q(i, e.index), routesMeta: u })
        }
        return (
          e.forEach(function (e, t) {
            var n
            if ('' !== e.path && null != (n = e.path) && n.includes('?')) {
              var r,
                o = (function (e, t) {
                  var n =
                    ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
                    e['@@iterator']
                  if (!n) {
                    if (
                      Array.isArray(e) ||
                      (n = i(e)) ||
                      (t && e && 'number' === typeof e.length)
                    ) {
                      n && (e = n)
                      var r = 0,
                        a = function () {}
                      return {
                        s: a,
                        n: function () {
                          return r >= e.length
                            ? { done: !0 }
                            : { done: !1, value: e[r++] }
                        },
                        e: function (e) {
                          throw e
                        },
                        f: a,
                      }
                    }
                    throw new TypeError(
                      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    )
                  }
                  var o,
                    l = !0,
                    u = !1
                  return {
                    s: function () {
                      n = n.call(e)
                    },
                    n: function () {
                      var e = n.next()
                      return (l = e.done), e
                    },
                    e: function (e) {
                      ;(u = !0), (o = e)
                    },
                    f: function () {
                      try {
                        l || null == n.return || n.return()
                      } finally {
                        if (u) throw o
                      }
                    },
                  }
                })(F(e.path))
              try {
                for (o.s(); !(r = o.n()).done; ) {
                  var l = r.value
                  a(e, t, l)
                }
              } catch (u) {
                o.e(u)
              } finally {
                o.f()
              }
            } else a(e, t)
          }),
          t
        )
      }
      function F(e) {
        var t = e.split('/')
        if (0 === t.length) return []
        var n,
          r = o((n = t)) || c(n) || i(n) || u(),
          a = r[0],
          l = r.slice(1),
          s = a.endsWith('?'),
          d = a.replace(/\?$/, '')
        if (0 === l.length) return s ? [d, ''] : [d]
        var p = F(l.join('/')),
          m = []
        return (
          m.push.apply(
            m,
            f(
              p.map(function (e) {
                return '' === e ? d : [d, e].join('/')
              }),
            ),
          ),
          s && m.push.apply(m, f(p)),
          m.map(function (t) {
            return e.startsWith('/') && '' === t ? '/' : t
          })
        )
      }
      var I = /^:\w+$/,
        B = 3,
        D = 2,
        H = 1,
        W = 10,
        U = -2,
        V = function (e) {
          return '*' === e
        }
      function Q(e, t) {
        var n = e.split('/'),
          r = n.length
        return (
          n.some(V) && (r += U),
          t && (r += D),
          n
            .filter(function (e) {
              return !V(e)
            })
            .reduce(function (e, t) {
              return e + (I.test(t) ? B : '' === t ? H : W)
            }, r)
        )
      }
      function K(e, t) {
        for (
          var n = e.routesMeta, r = {}, a = '/', o = [], l = 0;
          l < n.length;
          ++l
        ) {
          var i = n[l],
            u = l === n.length - 1,
            s = '/' === a ? t : t.slice(a.length) || '/',
            c = q(
              { path: i.relativePath, caseSensitive: i.caseSensitive, end: u },
              s,
            )
          if (!c) return null
          Object.assign(r, c.params)
          var f = i.route
          o.push({
            params: r,
            pathname: G([a, c.pathname]),
            pathnameBase: ee(G([a, c.pathnameBase])),
            route: f,
          }),
            '/' !== c.pathnameBase && (a = G([a, c.pathnameBase]))
        }
        return o
      }
      function q(e, t) {
        'string' === typeof e && (e = { path: e, caseSensitive: !1, end: !0 })
        var n = (function (e, t, n) {
            void 0 === t && (t = !1)
            void 0 === n && (n = !0)
            O(
              '*' === e || !e.endsWith('*') || e.endsWith('/*'),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, '/*') +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, '/*') +
                '".',
            )
            var r = [],
              a =
                '^' +
                e
                  .replace(/\/*\*?$/, '')
                  .replace(/^\/*/, '/')
                  .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
                  .replace(/\/:(\w+)/g, function (e, t) {
                    return r.push(t), '/([^\\/]+)'
                  })
            e.endsWith('*')
              ? (r.push('*'),
                (a += '*' === e || '/*' === e ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
              : n
              ? (a += '\\/*$')
              : '' !== e && '/' !== e && (a += '(?:(?=\\/|$))')
            var o = new RegExp(a, t ? void 0 : 'i')
            return [o, r]
          })(e.path, e.caseSensitive, e.end),
          r = s(n, 2),
          a = r[0],
          o = r[1],
          l = t.match(a)
        if (!l) return null
        var i = l[0],
          u = i.replace(/(.)\/+$/, '$1'),
          c = l.slice(1)
        return {
          params: o.reduce(function (e, t, n) {
            if ('*' === t) {
              var r = c[n] || ''
              u = i.slice(0, i.length - r.length).replace(/(.)\/+$/, '$1')
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e)
                } catch (n) {
                  return (
                    O(
                      !1,
                      'The value for the URL param "' +
                        t +
                        '" will not be decoded because the string "' +
                        e +
                        '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                        n +
                        ').',
                    ),
                    e
                  )
                }
              })(c[n] || '', t)),
              e
            )
          }, {}),
          pathname: i,
          pathnameBase: u,
          pattern: e,
        }
      }
      function Y(e) {
        try {
          return decodeURI(e)
        } catch (t) {
          return (
            O(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ').',
            ),
            e
          )
        }
      }
      function X(e, t) {
        if ('/' === t) return e
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
        var n = t.endsWith('/') ? t.length - 1 : t.length,
          r = e.charAt(n)
        return r && '/' !== r ? null : e.slice(n) || '/'
      }
      function Z(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          '` field [' +
          JSON.stringify(r) +
          '].  Please separate it out to the `to.' +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        )
      }
      function J(e) {
        return e.filter(function (e, t) {
          return 0 === t || (e.route.path && e.route.path.length > 0)
        })
      }
      function $(e, t, n, r) {
        var a
        void 0 === r && (r = !1),
          'string' === typeof e
            ? (a = A(e))
            : (P(
                !(a = E({}, e)).pathname || !a.pathname.includes('?'),
                Z('?', 'pathname', 'search', a),
              ),
              P(
                !a.pathname || !a.pathname.includes('#'),
                Z('#', 'pathname', 'hash', a),
              ),
              P(
                !a.search || !a.search.includes('#'),
                Z('#', 'search', 'hash', a),
              ))
        var o,
          l = '' === e || '' === a.pathname,
          i = l ? '/' : a.pathname
        if (r || null == i) o = n
        else {
          var u = t.length - 1
          if (i.startsWith('..')) {
            for (var s = i.split('/'); '..' === s[0]; ) s.shift(), (u -= 1)
            a.pathname = s.join('/')
          }
          o = u >= 0 ? t[u] : '/'
        }
        var c = (function (e, t) {
            void 0 === t && (t = '/')
            var n = 'string' === typeof e ? A(e) : e,
              r = n.pathname,
              a = n.search,
              o = void 0 === a ? '' : a,
              l = n.hash,
              i = void 0 === l ? '' : l,
              u = r
                ? r.startsWith('/')
                  ? r
                  : (function (e, t) {
                      var n = t.replace(/\/+$/, '').split('/')
                      return (
                        e.split('/').forEach(function (e) {
                          '..' === e
                            ? n.length > 1 && n.pop()
                            : '.' !== e && n.push(e)
                        }),
                        n.length > 1 ? n.join('/') : '/'
                      )
                    })(r, t)
                : t
            return { pathname: u, search: te(o), hash: ne(i) }
          })(a, o),
          f = i && '/' !== i && i.endsWith('/'),
          d = (l || '.' === i) && n.endsWith('/')
        return c.pathname.endsWith('/') || (!f && !d) || (c.pathname += '/'), c
      }
      var G = function (e) {
          return e.join('/').replace(/\/\/+/g, '/')
        },
        ee = function (e) {
          return e.replace(/\/+$/, '').replace(/^\/*/, '/')
        },
        te = function (e) {
          return e && '?' !== e ? (e.startsWith('?') ? e : '?' + e) : ''
        },
        ne = function (e) {
          return e && '#' !== e ? (e.startsWith('#') ? e : '#' + e) : ''
        },
        re = (function (e) {
          y(n, e)
          var t = C(n)
          function n() {
            return d(this, n), t.apply(this, arguments)
          }
          return v(n)
        })(S(Error))
      function ae(e) {
        return (
          null != e &&
          'number' === typeof e.status &&
          'string' === typeof e.statusText &&
          'boolean' === typeof e.internal &&
          'data' in e
        )
      }
      var oe = ['post', 'put', 'patch', 'delete'],
        le = (new Set(oe), ['get'].concat(oe))
      new Set(le),
        new Set([301, 302, 303, 307, 308]),
        new Set([307, 308]),
        'undefined' !== typeof window &&
          'undefined' !== typeof window.document &&
          window.document.createElement
      Symbol('deferred')
      var ie =
          'function' === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                )
              },
        ue = t.useState,
        se = t.useEffect,
        ce = t.useLayoutEffect,
        fe = t.useDebugValue
      function de(e) {
        var t = e.getSnapshot,
          n = e.value
        try {
          var r = t()
          return !ie(n, r)
        } catch (a) {
          return !0
        }
      }
      'undefined' === typeof window ||
        'undefined' === typeof window.document ||
        window.document.createElement,
        r.useSyncExternalStore
      var pe = t.createContext(null)
      var me = t.createContext(null)
      var he = t.createContext(null)
      var ve = t.createContext(null)
      var ge = t.createContext(null)
      var ye = t.createContext({ outlet: null, matches: [] })
      var be = t.createContext(null)
      function xe() {
        return (
          (xe = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
              }),
          xe.apply(this, arguments)
        )
      }
      function we() {
        return null != t.useContext(ge)
      }
      function Ce() {
        return we() || P(!1), t.useContext(ge).location
      }
      function ke() {
        we() || P(!1)
        var e = t.useContext(ve),
          n = e.basename,
          r = e.navigator,
          a = t.useContext(ye).matches,
          o = Ce().pathname,
          l = JSON.stringify(
            J(a).map(function (e) {
              return e.pathnameBase
            }),
          ),
          i = t.useRef(!1)
        return (
          t.useEffect(function () {
            i.current = !0
          }),
          t.useCallback(
            function (e, t) {
              if ((void 0 === t && (t = {}), i.current))
                if ('number' !== typeof e) {
                  var a = $(e, JSON.parse(l), o, 'path' === t.relative)
                  '/' !== n &&
                    (a.pathname = '/' === a.pathname ? n : G([n, a.pathname])),
                    (t.replace ? r.replace : r.push)(a, t.state, t)
                } else r.go(e)
            },
            [n, r, l, o],
          )
        )
      }
      function Se(e, n) {
        var r = (void 0 === n ? {} : n).relative,
          a = t.useContext(ye).matches,
          o = Ce().pathname,
          l = JSON.stringify(
            J(a).map(function (e) {
              return e.pathnameBase
            }),
          )
        return t.useMemo(
          function () {
            return $(e, JSON.parse(l), o, 'path' === r)
          },
          [e, l, o, r],
        )
      }
      function Ee() {
        var e = (function () {
            var e,
              n = t.useContext(be),
              r = Te(Ne.UseRouteError),
              a = Me(Ne.UseRouteError)
            if (n) return n
            return null == (e = r.errors) ? void 0 : e[a]
          })(),
          n = ae(e)
            ? e.status + ' ' + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          a = 'rgba(200,200,200, 0.5)',
          o = { padding: '0.5rem', backgroundColor: a }
        return t.createElement(
          t.Fragment,
          null,
          t.createElement('h2', null, 'Unexpected Application Error!'),
          t.createElement('h3', { style: { fontStyle: 'italic' } }, n),
          r ? t.createElement('pre', { style: o }, r) : null,
          null,
        )
      }
      var je,
        Ne,
        Pe = (function (e) {
          y(r, e)
          var n = C(r)
          function r(e) {
            var t
            return (
              d(this, r),
              ((t = n.call(this, e)).state = {
                location: e.location,
                error: e.error,
              }),
              t
            )
          }
          return (
            v(
              r,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, t) {
                    console.error(
                      'React Router caught the following error during render',
                      e,
                      t,
                    )
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return this.state.error
                      ? t.createElement(
                          ye.Provider,
                          { value: this.props.routeContext },
                          t.createElement(be.Provider, {
                            value: this.state.error,
                            children: this.props.component,
                          }),
                        )
                      : this.props.children
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromError',
                  value: function (e) {
                    return { error: e }
                  },
                },
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    return t.location !== e.location
                      ? { error: e.error, location: e.location }
                      : { error: e.error || t.error, location: t.location }
                  },
                },
              ],
            ),
            r
          )
        })(t.Component)
      function Oe(e) {
        var n = e.routeContext,
          r = e.match,
          a = e.children,
          o = t.useContext(pe)
        return (
          o &&
            o.static &&
            o.staticContext &&
            (r.route.errorElement || r.route.ErrorBoundary) &&
            (o.staticContext._deepestRenderedBoundaryId = r.route.id),
          t.createElement(ye.Provider, { value: n }, a)
        )
      }
      function Le(e, n, r) {
        if ((void 0 === n && (n = []), null == e)) {
          if (null == r || !r.errors) return null
          e = r.matches
        }
        var a = e,
          o = null == r ? void 0 : r.errors
        if (null != o) {
          var l = a.findIndex(function (e) {
            return e.route.id && (null == o ? void 0 : o[e.route.id])
          })
          l >= 0 || P(!1), (a = a.slice(0, Math.min(a.length, l + 1)))
        }
        return a.reduceRight(function (e, l, i) {
          var u = l.route.id ? (null == o ? void 0 : o[l.route.id]) : null,
            s = null
          r &&
            (s = l.route.ErrorBoundary
              ? t.createElement(l.route.ErrorBoundary, null)
              : l.route.errorElement
              ? l.route.errorElement
              : t.createElement(Ee, null))
          var c = n.concat(a.slice(0, i + 1)),
            f = function () {
              var n = e
              return (
                u
                  ? (n = s)
                  : l.route.Component
                  ? (n = t.createElement(l.route.Component, null))
                  : l.route.element && (n = l.route.element),
                t.createElement(Oe, {
                  match: l,
                  routeContext: { outlet: e, matches: c },
                  children: n,
                })
              )
            }
          return r && (l.route.ErrorBoundary || l.route.errorElement || 0 === i)
            ? t.createElement(Pe, {
                location: r.location,
                component: s,
                error: u,
                children: f(),
                routeContext: { outlet: null, matches: c },
              })
            : f()
        }, null)
      }
      function Te(e) {
        var n = t.useContext(me)
        return n || P(!1), n
      }
      function Me(e) {
        var n = (function (e) {
            var n = t.useContext(ye)
            return n || P(!1), n
          })(),
          r = n.matches[n.matches.length - 1]
        return r.route.id || P(!1), r.route.id
      }
      !(function (e) {
        ;(e.UseBlocker = 'useBlocker'), (e.UseRevalidator = 'useRevalidator')
      })(je || (je = {})),
        (function (e) {
          ;(e.UseBlocker = 'useBlocker'),
            (e.UseLoaderData = 'useLoaderData'),
            (e.UseActionData = 'useActionData'),
            (e.UseRouteError = 'useRouteError'),
            (e.UseNavigation = 'useNavigation'),
            (e.UseRouteLoaderData = 'useRouteLoaderData'),
            (e.UseMatches = 'useMatches'),
            (e.UseRevalidator = 'useRevalidator')
        })(Ne || (Ne = {}))
      var Ae
      function _e(e) {
        var n = e.to,
          r = e.replace,
          a = e.state,
          o = e.relative
        we() || P(!1)
        var l = t.useContext(me),
          i = ke()
        return (
          t.useEffect(function () {
            ;(l && 'idle' !== l.navigation.state) ||
              i(n, { replace: r, state: a, relative: o })
          }),
          null
        )
      }
      function Re(e) {
        P(!1)
      }
      function ze(n) {
        var r = n.basename,
          a = void 0 === r ? '/' : r,
          o = n.children,
          l = void 0 === o ? null : o,
          i = n.location,
          u = n.navigationType,
          s = void 0 === u ? e.Pop : u,
          c = n.navigator,
          f = n.static,
          d = void 0 !== f && f
        we() && P(!1)
        var p = a.replace(/^\/*/, '/'),
          m = t.useMemo(
            function () {
              return { basename: p, navigator: c, static: d }
            },
            [p, c, d],
          )
        'string' === typeof i && (i = A(i))
        var h = i,
          v = h.pathname,
          g = void 0 === v ? '/' : v,
          y = h.search,
          b = void 0 === y ? '' : y,
          x = h.hash,
          w = void 0 === x ? '' : x,
          C = h.state,
          k = void 0 === C ? null : C,
          S = h.key,
          E = void 0 === S ? 'default' : S,
          j = t.useMemo(
            function () {
              var e = X(g, p)
              return null == e
                ? null
                : {
                    location: {
                      pathname: e,
                      search: b,
                      hash: w,
                      state: k,
                      key: E,
                    },
                    navigationType: s,
                  }
            },
            [p, g, b, w, k, E, s],
          )
        return null == j
          ? null
          : t.createElement(
              ve.Provider,
              { value: m },
              t.createElement(ge.Provider, { children: l, value: j }),
            )
      }
      function Fe(n) {
        var r = n.children,
          a = n.location,
          o = t.useContext(pe)
        return (function (n, r) {
          we() || P(!1)
          var a,
            o = t.useContext(ve).navigator,
            l = t.useContext(me),
            i = t.useContext(ye).matches,
            u = i[i.length - 1],
            s = u ? u.params : {},
            c = (u && u.pathname, u ? u.pathnameBase : '/'),
            f = (u && u.route, Ce())
          if (r) {
            var d,
              p = 'string' === typeof r ? A(r) : r
            '/' === c ||
              (null == (d = p.pathname) ? void 0 : d.startsWith(c)) ||
              P(!1),
              (a = p)
          } else a = f
          var m = a.pathname || '/',
            h = R(n, { pathname: '/' === c ? m : m.slice(c.length) || '/' }),
            v = Le(
              h &&
                h.map(function (e) {
                  return Object.assign({}, e, {
                    params: Object.assign({}, s, e.params),
                    pathname: G([
                      c,
                      o.encodeLocation
                        ? o.encodeLocation(e.pathname).pathname
                        : e.pathname,
                    ]),
                    pathnameBase:
                      '/' === e.pathnameBase
                        ? c
                        : G([
                            c,
                            o.encodeLocation
                              ? o.encodeLocation(e.pathnameBase).pathname
                              : e.pathnameBase,
                          ]),
                  })
                }),
              i,
              l || void 0,
            )
          return r && v
            ? t.createElement(
                ge.Provider,
                {
                  value: {
                    location: xe(
                      {
                        pathname: '/',
                        search: '',
                        hash: '',
                        state: null,
                        key: 'default',
                      },
                      a,
                    ),
                    navigationType: e.Pop,
                  },
                },
                v,
              )
            : v
        })(o && !r ? o.router.routes : Be(r), a)
      }
      !(function (e) {
        ;(e[(e.pending = 0)] = 'pending'),
          (e[(e.success = 1)] = 'success'),
          (e[(e.error = 2)] = 'error')
      })(Ae || (Ae = {}))
      var Ie = new Promise(function () {})
      t.Component
      function Be(e, n) {
        void 0 === n && (n = [])
        var r = []
        return (
          t.Children.forEach(e, function (e, a) {
            if (t.isValidElement(e)) {
              var o = [].concat(f(n), [a])
              if (e.type !== t.Fragment) {
                e.type !== Re && P(!1),
                  e.props.index && e.props.children && P(!1)
                var l = {
                  id: e.props.id || o.join('-'),
                  caseSensitive: e.props.caseSensitive,
                  element: e.props.element,
                  Component: e.props.Component,
                  index: e.props.index,
                  path: e.props.path,
                  loader: e.props.loader,
                  action: e.props.action,
                  errorElement: e.props.errorElement,
                  ErrorBoundary: e.props.ErrorBoundary,
                  hasErrorBoundary:
                    null != e.props.ErrorBoundary ||
                    null != e.props.errorElement,
                  shouldRevalidate: e.props.shouldRevalidate,
                  handle: e.props.handle,
                  lazy: e.props.lazy,
                }
                e.props.children && (l.children = Be(e.props.children, o)),
                  r.push(l)
              } else r.push.apply(r, Be(e.props.children, o))
            }
          }),
          r
        )
      }
      function De() {
        return (
          (De = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
              }),
          De.apply(this, arguments)
        )
      }
      function He(e, t) {
        if (null == e) return {}
        var n,
          r,
          a = {},
          o = Object.keys(e)
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n])
        return a
      }
      var We = [
          'onClick',
          'relative',
          'reloadDocument',
          'replace',
          'state',
          'target',
          'to',
          'preventScrollReset',
        ],
        Ue = [
          'aria-current',
          'caseSensitive',
          'className',
          'end',
          'style',
          'to',
          'children',
        ]
      function Ve(e) {
        var n,
          r = e.basename,
          a = e.children,
          o = e.window,
          l = t.useRef()
        null == l.current &&
          (l.current =
            (void 0 === (n = { window: o, v5Compat: !0 }) && (n = {}),
            _(
              function (e, t) {
                var n = e.location
                return T(
                  '',
                  { pathname: n.pathname, search: n.search, hash: n.hash },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || 'default',
                )
              },
              function (e, t) {
                return 'string' === typeof t ? t : M(t)
              },
              null,
              n,
            )))
        var i = l.current,
          u = s(t.useState({ action: i.action, location: i.location }), 2),
          c = u[0],
          f = u[1]
        return (
          t.useLayoutEffect(
            function () {
              return i.listen(f)
            },
            [i],
          ),
          t.createElement(ze, {
            basename: r,
            children: a,
            location: c.location,
            navigationType: c.action,
            navigator: i,
          })
        )
      }
      var Qe =
          'undefined' !== typeof window &&
          'undefined' !== typeof window.document &&
          'undefined' !== typeof window.document.createElement,
        Ke = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        qe = t.forwardRef(function (e, n) {
          var r,
            a = e.onClick,
            o = e.relative,
            l = e.reloadDocument,
            i = e.replace,
            u = e.state,
            s = e.target,
            c = e.to,
            f = e.preventScrollReset,
            d = He(e, We),
            p = t.useContext(ve).basename,
            m = !1
          if ('string' === typeof c && Ke.test(c) && ((r = c), Qe)) {
            var h = new URL(window.location.href),
              v = c.startsWith('//') ? new URL(h.protocol + c) : new URL(c),
              g = X(v.pathname, p)
            v.origin === h.origin && null != g
              ? (c = g + v.search + v.hash)
              : (m = !0)
          }
          var y = (function (e, n) {
              var r = (void 0 === n ? {} : n).relative
              we() || P(!1)
              var a = t.useContext(ve),
                o = a.basename,
                l = a.navigator,
                i = Se(e, { relative: r }),
                u = i.hash,
                s = i.pathname,
                c = i.search,
                f = s
              return (
                '/' !== o && (f = '/' === s ? o : G([o, s])),
                l.createHref({ pathname: f, search: c, hash: u })
              )
            })(c, { relative: o }),
            b = (function (e, n) {
              var r = void 0 === n ? {} : n,
                a = r.target,
                o = r.replace,
                l = r.state,
                i = r.preventScrollReset,
                u = r.relative,
                s = ke(),
                c = Ce(),
                f = Se(e, { relative: u })
              return t.useCallback(
                function (t) {
                  if (
                    (function (e, t) {
                      return (
                        0 === e.button &&
                        (!t || '_self' === t) &&
                        !(function (e) {
                          return !!(
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          )
                        })(e)
                      )
                    })(t, a)
                  ) {
                    t.preventDefault()
                    var n = void 0 !== o ? o : M(c) === M(f)
                    s(e, {
                      replace: n,
                      state: l,
                      preventScrollReset: i,
                      relative: u,
                    })
                  }
                },
                [c, s, f, o, l, a, e, i, u],
              )
            })(c, {
              replace: i,
              state: u,
              target: s,
              preventScrollReset: f,
              relative: o,
            })
          return t.createElement(
            'a',
            De({}, d, {
              href: r || y,
              onClick:
                m || l
                  ? a
                  : function (e) {
                      a && a(e), e.defaultPrevented || b(e)
                    },
              ref: n,
              target: s,
            }),
          )
        })
      var Ye = t.forwardRef(function (e, n) {
        var r = e['aria-current'],
          a = void 0 === r ? 'page' : r,
          o = e.caseSensitive,
          l = void 0 !== o && o,
          i = e.className,
          u = void 0 === i ? '' : i,
          s = e.end,
          c = void 0 !== s && s,
          f = e.style,
          d = e.to,
          p = e.children,
          m = He(e, Ue),
          h = Se(d, { relative: m.relative }),
          v = Ce(),
          g = t.useContext(me),
          y = t.useContext(ve).navigator,
          b = y.encodeLocation ? y.encodeLocation(h).pathname : h.pathname,
          x = v.pathname,
          w =
            g && g.navigation && g.navigation.location
              ? g.navigation.location.pathname
              : null
        l ||
          ((x = x.toLowerCase()),
          (w = w ? w.toLowerCase() : null),
          (b = b.toLowerCase()))
        var C,
          k = x === b || (!c && x.startsWith(b) && '/' === x.charAt(b.length)),
          S =
            null != w &&
            (w === b || (!c && w.startsWith(b) && '/' === w.charAt(b.length))),
          E = k ? a : void 0
        C =
          'function' === typeof u
            ? u({ isActive: k, isPending: S })
            : [u, k ? 'active' : null, S ? 'pending' : null]
                .filter(Boolean)
                .join(' ')
        var j = 'function' === typeof f ? f({ isActive: k, isPending: S }) : f
        return t.createElement(
          qe,
          De({}, m, {
            'aria-current': E,
            className: C,
            ref: n,
            style: j,
            to: d,
          }),
          'function' === typeof p ? p({ isActive: k, isPending: S }) : p,
        )
      })
      var Xe, Ze
      ;(function (e) {
        ;(e.UseScrollRestoration = 'useScrollRestoration'),
          (e.UseSubmitImpl = 'useSubmitImpl'),
          (e.UseFetcher = 'useFetcher')
      })(Xe || (Xe = {})),
        (function (e) {
          ;(e.UseFetchers = 'useFetchers'),
            (e.UseScrollRestoration = 'useScrollRestoration')
        })(Ze || (Ze = {}))
      var Je =
        n.p + 'static/media/logoWhite.0f65610e379692ec85358ef864fadcad.svg'
      var $e =
        n.p + 'static/media/facebookLogo.04ac2ef3f442e256d82ea026f8999d89.svg'
      var Ge = n.p + 'static/media/vkLogo.ffbb51bfab5a0ca24b30ad2f7ad56fc6.svg'
      var et =
        n.p + 'static/media/telegramLOgo.f1a24ac7aad7805f0b37665ebbc105ea.svg'
      var tt = n(184),
        nt = function () {
          var e = s((0, t.useState)(!1), 2),
            n = e[0],
            r = e[1],
            a = (function () {
              var e = s((0, t.useState)(!0), 2),
                n = e[0],
                r = e[1],
                a = (0, t.useRef)(null),
                o = function (e) {
                  a.current && !a.current.contains(e.target) && r(!n)
                }
              return (
                (0, t.useEffect)(function () {
                  return (
                    document.addEventListener('click', o),
                    function () {
                      document.removeEventListener('click', o)
                    }
                  )
                }),
                [a, n]
              )
            })(),
            o = s(a, 2),
            l = o[0],
            i = o[1],
            u = s((0, t.useState)(null), 2),
            c = u[0],
            f = u[1]
          ;(0, t.useEffect)(
            function () {
              !1 === i && r(!1)
            },
            [i],
          ),
            (0, t.useEffect)(function () {
              'dark' === window.localStorage.theme ? f('dark') : f('light')
            }, []),
            (0, t.useEffect)(
              function () {
                'dark' === c
                  ? (document.documentElement.classList.add('dark'),
                    (window.localStorage.theme = 'dark'))
                  : document.documentElement.classList.remove('dark')
              },
              [c],
            )
          return (0, tt.jsxs)('div', {
            className: 'relative',
            children: [
              (0, tt.jsx)('svg', {
                ref: l,
                onClick: function () {
                  return r(!n)
                },
                className: 'cursor-pointer',
                width: '22',
                height: '22',
                viewBox: '0 0 22 22',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                children: (0, tt.jsx)('path', {
                  d: 'M21 12.375V9.625L19.5 9.125C19 8.875 18.5 8.5 18.25 8C18 7.5 18 6.875 18.25 6.25L18.875 4.875L17 3L15.625 3.625C15.125 3.875 14.5 3.875 13.875 3.625C13.375 3.375 12.875 3 12.75 2.375L12.375 1H9.625L9.125 2.5C9 3 8.5 3.5 8 3.625C7.5 3.875 6.875 3.875 6.25 3.625L4.875 3L3 4.875L3.625 6.25C3.875 6.75 3.875 7.375 3.625 8C3.5 8.5 3 9 2.5 9.125L1 9.625V12.375L2.5 12.875C3 13.125 3.5 13.5 3.75 14C4 14.5 4 15.125 3.75 15.75L3.125 17.125L5 19L6.375 18.375C6.875 18.125 7.5 18.125 8.125 18.375C8.625 18.625 9.125 19 9.25 19.625L9.625 21H12.375L12.875 19.5C13.125 19 13.5 18.5 14 18.25C14.5 18 15.125 18 15.625 18.25L17 18.875L18.875 17L18.25 15.625C18 15.125 18 14.5 18.25 13.875C18.5 13.375 18.875 12.875 19.5 12.75L21 12.375ZM11 14.125C9.25 14.125 7.875 12.75 7.875 11C7.875 9.25 9.25 7.875 11 7.875C12.75 7.875 14.125 9.25 14.125 11C14.125 12.75 12.75 14.125 11 14.125Z',
                  stroke: '#929EAA',
                  strokeWidth: '1.5',
                  strokeMiterlimit: '10',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
              }),
              (0, tt.jsx)('div', {
                className: ''.concat(
                  n ? 'scale-100' : 'scale-0',
                  ' bg-white dark:bg-dMBlue top-[105%] duration-150 rounded-md p-2 absolute right-0',
                ),
                children: (0, tt.jsxs)('button', {
                  className:
                    'flex gap-x-[20px] dark:text-dMWhite text-darkBlue whitespace-nowrap items-center',
                  onClick: function () {
                    f('dark' === c ? 'light' : 'dark'),
                      (window.localStorage.theme = 'light')
                  },
                  children: [
                    'dark' === c
                      ? '\u0422\u0451\u043c\u043d\u044b\u0439'
                      : '\u0421\u0432\u0435\u0442\u043b\u044b\u0439',
                    ' \u0440\u0435\u0436\u0438\u043c',
                    (0, tt.jsx)('span', {
                      className:
                        'w-[20px] h-[20px] rounded-[50%] bg-[#E1E3E6] dark:bg-dMBlackBlueBg',
                    }),
                  ],
                }),
              }),
            ],
          })
        }
      var rt =
        n.p + 'static/media/basketball.5347408ba36502f6ac1f005f3577eaee.svg'
      var at =
        n.p + 'static/media/cybersport.ac93f75be4694b911dff9817afcbc623.svg'
      var ot =
        n.p + 'static/media/football.30025727bb56aead4123747b20a054ef.svg'
      var lt =
        n.p + 'static/media/handball.7d9f785d797057d79f03ba9a4abe3e93.svg'
      var it = n.p + 'static/media/hokey.29090fb5c11f64cc0b88ac72a731f411.svg'
      var ut = n.p + 'static/media/tennis.d9cb4b2816d55f68d93dc89977c71e01.svg'
      var st =
          n.p + 'static/media/voleyball.96f63b323840c2913e81d0d23b168f90.svg',
        ct = function () {
          return (0, tt.jsxs)('div', {
            className: 'cursor-pointer mr-4 flex items-center gap-x-1',
            children: [
              (0, tt.jsx)('span', {
                className: 'sm:hidden',
                children: '\u0418\u0441\u043a\u0430\u0442\u044c ',
              }),
              (0, tt.jsxs)('svg', {
                width: '20',
                height: '24',
                viewBox: '0 0 20 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                children: [
                  (0, tt.jsx)('path', {
                    d: 'M7.21014 16.7525C3.04099 15.6353 0.56683 11.35 1.68395 7.18082C2.80107 3.01168 7.08644 0.537518 11.2556 1.65464C15.4247 2.77176 17.8989 7.05713 16.7818 11.2263C15.6647 15.3954 11.3793 17.8696 7.21014 16.7525Z',
                    stroke: '#929EAA',
                    strokeWidth: '1.5',
                  }),
                  (0, tt.jsx)('path', {
                    d: 'M13.5898 15.5782L18.9997 22.7911',
                    stroke: '#929EAA',
                    strokeWidth: '1.5',
                  }),
                ],
              }),
            ],
          })
        }
      function ft() {
        var e = (0, t.useRef)(),
          n = s((0, t.useState)(!1), 2),
          r = n[0],
          a = n[1],
          o = (function () {
            var e = s((0, t.useState)(!1), 2),
              n = e[0],
              r = e[1],
              a = (0, t.useRef)(null),
              o = function () {
                return r(!0)
              },
              l = function () {
                return r(!1)
              }
            return (
              (0, t.useEffect)(
                function () {
                  if (a.current) {
                    var e = a.current
                    return (
                      e.addEventListener('mouseover', o),
                      e.addEventListener('mouseout', l),
                      e.addEventListener('click', !0 === n ? l : o),
                      function () {
                        e.removeEventListener('mouseover', o),
                          e.removeEventListener('mouseout', l),
                          e.removeEventListener('click', l)
                      }
                    )
                  }
                },
                [n],
              ),
              [a, n]
            )
          })(),
          l = s(o, 2),
          i = l[0],
          u = l[1],
          c = s((0, t.useState)(!1), 2),
          f = c[0],
          d = c[1],
          p = [
            { l: $e, alt: 'facebook' },
            { l: Ge, alt: 'vk' },
            { l: et, alt: 'telegram' },
          ],
          m = [
            {
              name: '\u043d\u043e\u0432\u043e\u0441\u0442\u0438',
              path: '/news',
            },
            { name: '\u0441\u0442\u0430\u0442\u044c\u0438', path: '/posts' },
          ],
          h = s((0, t.useState)([]), 2),
          v = h[0],
          g = h[1],
          y = s((0, t.useState)([]), 2),
          b = y[0],
          x = y[1],
          w = [
            {
              name: '\u0424\u0423\u0422\u0411\u041e\u041b',
              path: '/football',
              logo: ot,
            },
            {
              name: '\u0425\u041e\u041a\u041a\u0415\u0419',
              path: '/hokey',
              logo: it,
            },
            {
              name: '\u0412\u041e\u041b\u0415\u0419\u0411\u041e\u041b',
              path: '/voleyball',
              logo: st,
            },
            {
              name: '\u0411\u0410\u0421\u041a\u0415\u0422\u0411\u041e\u041b',
              path: '/basketball',
              logo: rt,
            },
            {
              name: '\u0422\u0415\u041d\u041d\u0418\u0421',
              path: '/tennis',
              logo: ut,
            },
            {
              name: '\u0413\u0410\u041d\u0414\u0411\u041e\u041b',
              path: '/handball',
              logo: lt,
            },
            {
              name: '\u041a\u0418\u0411\u0415\u0420\u0421\u041f\u041e\u0420\u0422',
              path: '/cybersport',
              logo: at,
            },
          ],
          C = [
            {
              name: 'Life \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b',
              path: '/live',
            },
            {
              name: '\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430',
              path: '/statistics',
            },
            {
              name: '\u041f\u0440\u043e\u0433\u043d\u043e\u0437\u044b',
              path: '/prognosis',
            },
            {
              name: '\u0442\u043e\u043f \u0441\u0435\u0440\u0438\u0439',
              path: '/top',
            },
            {
              name: '\u0431\u0443\u043a\u043c\u0435\u043a\u0435\u0440\u044b',
              path: '/bookmakers',
            },
          ]
        return (
          (0, t.useEffect)(function () {
            function t() {
              var t = Math.floor(e.current.offsetWidth / 140)
              g(w.slice(t, w.length)), x(w.slice(0, t))
            }
            return (
              window.addEventListener('load', t),
              window.addEventListener('resize', t),
              function () {
                window.removeEventListener('resize', t),
                  window.removeEventListener('load', t)
              }
            )
          }),
          (0, tt.jsxs)('nav', {
            className: 'dark:text-dMWhite text-white ',
            children: [
              (0, tt.jsx)('div', {
                className: 'py-3 relative bg-blue dark:bg-dMBlue',
                children: (0, tt.jsxs)('div', {
                  className: 'container',
                  children: [
                    (0, tt.jsx)('p', {
                      className: 'text-xs pb-5',
                      children:
                        '\u0424\u0443\u0442\u0431\u043e\u043b - \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043e\u043d\u043b\u0430\u0439\u043d \u0438 \u0441\u0447\u0435\u0442 \u043c\u0430\u0442\u0447\u0435\u0439',
                    }),
                    (0, tt.jsxs)('div', {
                      className:
                        'font-[600] uppercase text-sm flex justify-between items-center gap-x-8',
                      children: [
                        (0, tt.jsx)(Ye, {
                          to: '/',
                          children: (0, tt.jsx)('img', {
                            src: Je,
                            alt: 'stavmatic',
                          }),
                        }),
                        (0, tt.jsxs)('div', {
                          className: 'md:hidden items-center flex gap-x-6 ',
                          children: [
                            C.map(function (e) {
                              return (0,
                              tt.jsx)(Ye, { to: e.path, children: e.name }, e.path)
                            }),
                            (0, tt.jsxs)('div', {
                              className:
                                'cursor-pointer flex relative items-center gap-x-2',
                              ref: i,
                              children: [
                                '\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f',
                                (0, tt.jsx)('svg', {
                                  className: ''.concat(
                                    u ? 'rotate-180' : 'rotate-0',
                                    ' duration-150',
                                  ),
                                  width: '10',
                                  height: '7',
                                  viewBox: '0 0 10 7',
                                  fill: 'none',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  children: (0, tt.jsx)('path', {
                                    d: 'M9 1L5 5L1 1',
                                    stroke: 'white',
                                    strokeWidth: '1.5',
                                  }),
                                }),
                                (0, tt.jsx)('div', {
                                  className: ''.concat(
                                    u ? 'scale-100' : 'scale-0',
                                    ' duration-150 absolute bottom-[-65px] right-0 gap-y-2 rounded-md bg-white text-dMBlue dark:bg-dMBlackBlue dark:text-white px-3 py-2 flex flex-col',
                                  ),
                                  children: m.map(function (e) {
                                    return (0,
                                    tt.jsx)(Ye, { to: e.path, children: e.name }, e.path)
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, tt.jsx)('div', {
                          className: 'md:hidden flex gap-x-3 ml-auto',
                          children: p.map(function (e) {
                            return (0,
                            tt.jsx)('a', { href: '/', children: (0, tt.jsx)('img', { className: 'w-full min-w-[20px]', src: e.l, alt: e.alt }) }, e.l)
                          }),
                        }),
                        (0, tt.jsxs)('button', {
                          onClick: function () {
                            return a(!r)
                          },
                          type: 'button',
                          className:
                            'inline-flex items-center p-2 ml-3 text-sm text-white ring-1 ring-white dark:ring-gray-500 dark:text-gray-500 rounded-lg mdR:hidden',
                          children: [
                            (0, tt.jsx)('span', {
                              className: 'sr-only',
                              children: 'Open main menu',
                            }),
                            (0, tt.jsx)('svg', {
                              className: 'w-6 h-6',
                              'aria-hidden': 'true',
                              fill: 'currentColor',
                              viewBox: '0 0 20 20',
                              xmlns: 'http://www.w3.org/2000/svg',
                              children: (0, tt.jsx)('path', {
                                fillRule: 'evenodd',
                                d: 'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z',
                                clipRule: 'evenodd',
                              }),
                            }),
                          ],
                        }),
                        (0, tt.jsxs)('div', {
                          className: ''.concat(
                            r
                              ? 'scale-100 translate-y-0'
                              : 'scale-0 translate-y-[-100%]',
                            ' bg-blue mdR:hidden z-50 justify-center flex flex-col gap-y-8 duration-150 dark:bg-dMBlue py-3 w-full text-center absolute left-0 top-[100%]',
                          ),
                          children: [
                            C.map(function (e) {
                              return (0,
                              tt.jsx)(Ye, { to: e.path, children: e.name }, e.path)
                            }),
                            m.map(function (e) {
                              return (0,
                              tt.jsx)(Ye, { to: e.path, children: e.name }, e.path)
                            }),
                            (0, tt.jsx)('div', {
                              className: 'flex justify-center gap-x-3',
                              children: p.map(function (e) {
                                return (0,
                                tt.jsx)('a', { href: '/', children: (0, tt.jsx)('img', { src: e.l, alt: e.alt }) }, e.l)
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, tt.jsx)('div', {
                className: 'bg-darkWhite py-3 dark:bg-dMBlackBlueBg',
                children: (0, tt.jsxs)('div', {
                  className:
                    'text-darkBlue font-bold uppercase sm:text-xs text-sm dark:text-dMWhite container flex justify-between',
                  children: [
                    (0, tt.jsxs)(Ye, {
                      to: '/favorite',
                      className:
                        'flex sm:gap-x-1 sm:mr-0 items-center md:mr-5 gap-x-2 uppercase mr-10',
                      children: [
                        (0, tt.jsx)('svg', {
                          width: '20',
                          height: '20',
                          viewBox: '0 0 20 20',
                          fill: 'none',
                          xmlns: 'http://www.w3.org/2000/svg',
                          children: (0, tt.jsx)('path', {
                            d: 'M19.4692 7.1379L13.3209 6.19873L10.5651 0.328749C10.3593 -0.109583 9.6401 -0.109583 9.43427 0.328749L6.67927 6.19873L0.530956 7.1379C0.0259576 7.2154 -0.175709 7.82956 0.178457 8.19206L4.64511 12.7704L3.58928 19.2429C3.50512 19.757 4.05428 20.1429 4.50845 19.8904L10.0001 16.8554L15.4918 19.8912C15.9417 20.1412 16.4959 19.7629 16.4109 19.2437L15.3551 12.7712L19.8217 8.19289C20.1759 7.82956 19.9734 7.2154 19.4692 7.1379Z',
                            fill: '#4A66CD',
                          }),
                        }),
                        '\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435',
                      ],
                    }),
                    (0, tt.jsx)('div', {
                      ref: e,
                      className:
                        'flex gap-x-3 md:mr-3 w-full mr-10 md:justify-center md:gap-x-5 justify-between',
                      children: b.map(function (e) {
                        return (0,
                        tt.jsxs)(Ye, { className: 'flex items-center gap-x-2', to: e.path, children: [(0, tt.jsx)('img', { src: e.logo, alt: e.name }), e.name] }, e.path)
                      }),
                    }),
                    (0, tt.jsxs)('div', {
                      className: ''.concat(
                        v.length ? 'flex' : 'hidden',
                        ' relative ',
                      ),
                      children: [
                        (0, tt.jsxs)('button', {
                          className: 'flex mr-3 items-center gap-x-2',
                          onClick: function () {
                            return d(!f)
                          },
                          children: [
                            '\u0414\u0440\u0443\u0433\u0438\u0435',
                            (0, tt.jsx)('svg', {
                              className: ''.concat(
                                f ? 'rotate-180' : 'rotate-0',
                                ' duration-200',
                              ),
                              width: '11',
                              height: '7',
                              viewBox: '0 0 11 7',
                              fill: 'none',
                              xmlns: 'http://www.w3.org/2000/svg',
                              children: (0, tt.jsx)('path', {
                                className:
                                  'stroke-[#0C0A48] dark:stroke-[#E9E9F3]',
                                d: 'M9.5 1L5.5 5L1.5 1',
                                strokeWidth: '1.5',
                              }),
                            }),
                          ],
                        }),
                        (0, tt.jsx)('div', {
                          className: ''.concat(
                            f ? 'scale-100' : 'scale-0',
                            ' duration-100 sm:right-[-140%] bg-white gap-3 flex-wrap w-[300px] h-max flex items-start dark:bg-dMBlue rounded-md px-4 py-2 right-[0%] top-[110%] absolute',
                          ),
                          children: v.map(function (e) {
                            return (0,
                            tt.jsxs)(Ye, { className: 'flex items-center w-[45%] gap-x-2', to: e.path, children: [(0, tt.jsx)('img', { src: e.logo, alt: e.name }), e.name] }, e.path)
                          }),
                        }),
                      ],
                    }),
                    (0, tt.jsx)(ct, {}),
                    (0, tt.jsxs)('div', {
                      className:
                        'cursor-pointer flex mr-4 items-center gap-x-1',
                      children: [
                        (0, tt.jsx)('span', {
                          className: 'sm:hidden',
                          children: '\u0412\u043e\u0439\u0442\u0438',
                        }),
                        (0, tt.jsxs)('svg', {
                          width: '24',
                          height: '24',
                          viewBox: '0 0 24 24',
                          fill: 'none',
                          xmlns: 'http://www.w3.org/2000/svg',
                          children: [
                            (0, tt.jsx)('path', {
                              d: 'M8 5.59849V2H22V22H8V18.4015',
                              stroke: '#929EAA',
                              strokeWidth: '1.5',
                            }),
                            (0, tt.jsx)('path', {
                              d: 'M1 12H15',
                              stroke: '#929EAA',
                              strokeWidth: '1.5',
                            }),
                            (0, tt.jsx)('path', {
                              d: 'M12 8L16 12L12 16',
                              stroke: '#929EAA',
                              strokeWidth: '1.5',
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, tt.jsx)(nt, {}),
                  ],
                }),
              }),
            ],
          })
        )
      }
      var dt = n(248),
        pt = n(327),
        mt = n(164)
      var ht = function (e) {
          e()
        },
        vt = function () {
          return ht
        },
        gt = (0, t.createContext)(null)
      function yt() {
        return (0, t.useContext)(gt)
      }
      var bt = function () {
          throw new Error('uSES not initialized!')
        },
        xt = bt,
        wt = function (e, t) {
          return e === t
        }
      function Ct() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gt,
          n =
            e === gt
              ? yt
              : function () {
                  return (0, t.useContext)(e)
                }
        return function (e) {
          var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wt
          var a = n(),
            o = a.store,
            l = a.subscription,
            i = a.getServerState,
            u = xt(l.addNestedSub, o.getState, i || o.getState, e, r)
          return (0, t.useDebugValue)(u), u
        }
      }
      var kt = Ct()
      n(110), n(900)
      var St = {
        notify: function () {},
        get: function () {
          return []
        },
      }
      function Et(e, t) {
        var n,
          r = St
        function a() {
          l.onStateChange && l.onStateChange()
        }
        function o() {
          n ||
            ((n = t ? t.addNestedSub(a) : e.subscribe(a)),
            (r = (function () {
              var e = vt(),
                t = null,
                n = null
              return {
                clear: function () {
                  ;(t = null), (n = null)
                },
                notify: function () {
                  e(function () {
                    for (var e = t; e; ) e.callback(), (e = e.next)
                  })
                },
                get: function () {
                  for (var e = [], n = t; n; ) e.push(n), (n = n.next)
                  return e
                },
                subscribe: function (e) {
                  var r = !0,
                    a = (n = { callback: e, next: null, prev: n })
                  return (
                    a.prev ? (a.prev.next = a) : (t = a),
                    function () {
                      r &&
                        null !== t &&
                        ((r = !1),
                        a.next ? (a.next.prev = a.prev) : (n = a.prev),
                        a.prev ? (a.prev.next = a.next) : (t = a.next))
                    }
                  )
                },
              }
            })()))
        }
        var l = {
          addNestedSub: function (e) {
            return o(), r.subscribe(e)
          },
          notifyNestedSubs: function () {
            r.notify()
          },
          handleChangeWrapper: a,
          isSubscribed: function () {
            return Boolean(n)
          },
          trySubscribe: o,
          tryUnsubscribe: function () {
            n && (n(), (n = void 0), r.clear(), (r = St))
          },
          getListeners: function () {
            return r
          },
        }
        return l
      }
      var jt = !(
        'undefined' === typeof window ||
        'undefined' === typeof window.document ||
        'undefined' === typeof window.document.createElement
      )
        ? t.useLayoutEffect
        : t.useEffect
      var Nt = function (e) {
        var n = e.store,
          r = e.context,
          a = e.children,
          o = e.serverState,
          l = (0, t.useMemo)(
            function () {
              var e = Et(n)
              return {
                store: n,
                subscription: e,
                getServerState: o
                  ? function () {
                      return o
                    }
                  : void 0,
              }
            },
            [n, o],
          ),
          i = (0, t.useMemo)(
            function () {
              return n.getState()
            },
            [n],
          )
        jt(
          function () {
            var e = l.subscription
            return (
              (e.onStateChange = e.notifyNestedSubs),
              e.trySubscribe(),
              i !== n.getState() && e.notifyNestedSubs(),
              function () {
                e.tryUnsubscribe(), (e.onStateChange = void 0)
              }
            )
          },
          [l, i],
        )
        var u = r || gt
        return t.createElement(u.Provider, { value: l }, a)
      }
      function Pt() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gt,
          n =
            e === gt
              ? yt
              : function () {
                  return (0, t.useContext)(e)
                }
        return function () {
          return n().store
        }
      }
      var Ot = Pt()
      function Lt() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gt,
          t = e === gt ? Ot : Pt(e)
        return function () {
          return t().dispatch
        }
      }
      var Tt,
        Mt = Lt()
      !(function (e) {
        xt = e
      })(pt.useSyncExternalStoreWithSelector),
        (function (e) {
          e
        })(dt.useSyncExternalStore),
        (Tt = mt.unstable_batchedUpdates),
        (ht = Tt)
      var At = n.p + 'static/media/premLig.fcbf8223c54ed8e4513d95edece91e84.svg'
      var _t = n.p + 'static/media/Lig1.389c6bd0483c05fd25568fe268ac3dd9.svg'
      var Rt = n.p + 'static/media/deFlag.650031831de9a03c387b19534eec9f22.svg'
      var zt = n.p + 'static/media/EredLig.1ad34e95953f1b1126bfb965258edbe8.svg'
      var Ft = n.p + 'static/media/LaLiga.c03f85038d1944dfe363e613ea88a074.svg'
      var It =
        n.p + 'static/media/PlanetLig.aa84c443d9154ccdecfecbcf711ba728.svg'
      var Bt =
        n.p + 'static/media/starBlue.a7feb79c9d1b3d83057aacba03cb429a.svg'
      var Dt =
        n.p + 'static/media/starBlueEmpty.7c6c912590c20d31c7967efdf482e53a.svg'
      function Ht(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r]
        throw Error(
          '[Immer] minified error nr: ' +
            e +
            (n.length
              ? ' ' +
                n
                  .map(function (e) {
                    return "'" + e + "'"
                  })
                  .join(',')
              : '') +
            '. Find the full error at: https://bit.ly/3cXEKWf',
        )
      }
      function Wt(e) {
        return !!e && !!e[Mn]
      }
      function Ut(e) {
        var t
        return (
          !!e &&
          ((function (e) {
            if (!e || 'object' != typeof e) return !1
            var t = Object.getPrototypeOf(e)
            if (null === t) return !0
            var n =
              Object.hasOwnProperty.call(t, 'constructor') && t.constructor
            return (
              n === Object ||
              ('function' == typeof n && Function.toString.call(n) === An)
            )
          })(e) ||
            Array.isArray(e) ||
            !!e[Tn] ||
            !!(null === (t = e.constructor) || void 0 === t ? void 0 : t[Tn]) ||
            Zt(e) ||
            Jt(e))
        )
      }
      function Vt(e, t, n) {
        void 0 === n && (n = !1),
          0 === Qt(e)
            ? (n ? Object.keys : _n)(e).forEach(function (r) {
                ;(n && 'symbol' == typeof r) || t(r, e[r], e)
              })
            : e.forEach(function (n, r) {
                return t(r, n, e)
              })
      }
      function Qt(e) {
        var t = e[Mn]
        return t
          ? t.i > 3
            ? t.i - 4
            : t.i
          : Array.isArray(e)
          ? 1
          : Zt(e)
          ? 2
          : Jt(e)
          ? 3
          : 0
      }
      function Kt(e, t) {
        return 2 === Qt(e)
          ? e.has(t)
          : Object.prototype.hasOwnProperty.call(e, t)
      }
      function qt(e, t) {
        return 2 === Qt(e) ? e.get(t) : e[t]
      }
      function Yt(e, t, n) {
        var r = Qt(e)
        2 === r ? e.set(t, n) : 3 === r ? e.add(n) : (e[t] = n)
      }
      function Xt(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
      }
      function Zt(e) {
        return Nn && e instanceof Map
      }
      function Jt(e) {
        return Pn && e instanceof Set
      }
      function $t(e) {
        return e.o || e.t
      }
      function Gt(e) {
        if (Array.isArray(e)) return Array.prototype.slice.call(e)
        var t = Rn(e)
        delete t[Mn]
        for (var n = _n(t), r = 0; r < n.length; r++) {
          var a = n[r],
            o = t[a]
          !1 === o.writable && ((o.writable = !0), (o.configurable = !0)),
            (o.get || o.set) &&
              (t[a] = {
                configurable: !0,
                writable: !0,
                enumerable: o.enumerable,
                value: e[a],
              })
        }
        return Object.create(Object.getPrototypeOf(e), t)
      }
      function en(e, t) {
        return (
          void 0 === t && (t = !1),
          nn(e) ||
            Wt(e) ||
            !Ut(e) ||
            (Qt(e) > 1 && (e.set = e.add = e.clear = e.delete = tn),
            Object.freeze(e),
            t &&
              Vt(
                e,
                function (e, t) {
                  return en(t, !0)
                },
                !0,
              )),
          e
        )
      }
      function tn() {
        Ht(2)
      }
      function nn(e) {
        return null == e || 'object' != typeof e || Object.isFrozen(e)
      }
      function rn(e) {
        var t = zn[e]
        return t || Ht(18, e), t
      }
      function an(e, t) {
        zn[e] || (zn[e] = t)
      }
      function on() {
        return En
      }
      function ln(e, t) {
        t && (rn('Patches'), (e.u = []), (e.s = []), (e.v = t))
      }
      function un(e) {
        sn(e), e.p.forEach(fn), (e.p = null)
      }
      function sn(e) {
        e === En && (En = e.l)
      }
      function cn(e) {
        return (En = { p: [], l: En, h: e, m: !0, _: 0 })
      }
      function fn(e) {
        var t = e[Mn]
        0 === t.i || 1 === t.i ? t.j() : (t.g = !0)
      }
      function dn(e, t) {
        t._ = t.p.length
        var n = t.p[0],
          r = void 0 !== e && e !== n
        return (
          t.h.O || rn('ES5').S(t, e, r),
          r
            ? (n[Mn].P && (un(t), Ht(4)),
              Ut(e) && ((e = pn(t, e)), t.l || hn(t, e)),
              t.u && rn('Patches').M(n[Mn].t, e, t.u, t.s))
            : (e = pn(t, n, [])),
          un(t),
          t.u && t.v(t.u, t.s),
          e !== Ln ? e : void 0
        )
      }
      function pn(e, t, n) {
        if (nn(t)) return t
        var r = t[Mn]
        if (!r)
          return (
            Vt(
              t,
              function (a, o) {
                return mn(e, r, t, a, o, n)
              },
              !0,
            ),
            t
          )
        if (r.A !== e) return t
        if (!r.P) return hn(e, r.t, !0), r.t
        if (!r.I) {
          ;(r.I = !0), r.A._--
          var a = 4 === r.i || 5 === r.i ? (r.o = Gt(r.k)) : r.o,
            o = a,
            l = !1
          3 === r.i && ((o = new Set(a)), a.clear(), (l = !0)),
            Vt(o, function (t, o) {
              return mn(e, r, a, t, o, n, l)
            }),
            hn(e, a, !1),
            n && e.u && rn('Patches').N(r, n, e.u, e.s)
        }
        return r.o
      }
      function mn(e, t, n, r, a, o, l) {
        if (Wt(a)) {
          var i = pn(
            e,
            a,
            o && t && 3 !== t.i && !Kt(t.R, r) ? o.concat(r) : void 0,
          )
          if ((Yt(n, r, i), !Wt(i))) return
          e.m = !1
        } else l && n.add(a)
        if (Ut(a) && !nn(a)) {
          if (!e.h.D && e._ < 1) return
          pn(e, a), (t && t.A.l) || hn(e, a)
        }
      }
      function hn(e, t, n) {
        void 0 === n && (n = !1), !e.l && e.h.D && e.m && en(t, n)
      }
      function vn(e, t) {
        var n = e[Mn]
        return (n ? $t(n) : e)[t]
      }
      function gn(e, t) {
        if (t in e)
          for (var n = Object.getPrototypeOf(e); n; ) {
            var r = Object.getOwnPropertyDescriptor(n, t)
            if (r) return r
            n = Object.getPrototypeOf(n)
          }
      }
      function yn(e) {
        e.P || ((e.P = !0), e.l && yn(e.l))
      }
      function bn(e) {
        e.o || (e.o = Gt(e.t))
      }
      function xn(e, t, n) {
        var r = Zt(t)
          ? rn('MapSet').F(t, n)
          : Jt(t)
          ? rn('MapSet').T(t, n)
          : e.O
          ? (function (e, t) {
              var n = Array.isArray(e),
                r = {
                  i: n ? 1 : 0,
                  A: t ? t.A : on(),
                  P: !1,
                  I: !1,
                  R: {},
                  l: t,
                  t: e,
                  k: null,
                  o: null,
                  j: null,
                  C: !1,
                },
                a = r,
                o = Fn
              n && ((a = [r]), (o = In))
              var l = Proxy.revocable(a, o),
                i = l.revoke,
                u = l.proxy
              return (r.k = u), (r.j = i), u
            })(t, n)
          : rn('ES5').J(t, n)
        return (n ? n.A : on()).p.push(r), r
      }
      function wn(e) {
        return (
          Wt(e) || Ht(22, e),
          (function e(t) {
            if (!Ut(t)) return t
            var n,
              r = t[Mn],
              a = Qt(t)
            if (r) {
              if (!r.P && (r.i < 4 || !rn('ES5').K(r))) return r.t
              ;(r.I = !0), (n = Cn(t, a)), (r.I = !1)
            } else n = Cn(t, a)
            return (
              Vt(n, function (t, a) {
                ;(r && qt(r.t, t) === a) || Yt(n, t, e(a))
              }),
              3 === a ? new Set(n) : n
            )
          })(e)
        )
      }
      function Cn(e, t) {
        switch (t) {
          case 2:
            return new Map(e)
          case 3:
            return Array.from(e)
        }
        return Gt(e)
      }
      function kn() {
        function e(e, t) {
          var n = a[e]
          return (
            n
              ? (n.enumerable = t)
              : (a[e] = n =
                  {
                    configurable: !0,
                    enumerable: t,
                    get: function () {
                      var t = this[Mn]
                      return Fn.get(t, e)
                    },
                    set: function (t) {
                      var n = this[Mn]
                      Fn.set(n, e, t)
                    },
                  }),
            n
          )
        }
        function t(e) {
          for (var t = e.length - 1; t >= 0; t--) {
            var a = e[t][Mn]
            if (!a.P)
              switch (a.i) {
                case 5:
                  r(a) && yn(a)
                  break
                case 4:
                  n(a) && yn(a)
              }
          }
        }
        function n(e) {
          for (var t = e.t, n = e.k, r = _n(n), a = r.length - 1; a >= 0; a--) {
            var o = r[a]
            if (o !== Mn) {
              var l = t[o]
              if (void 0 === l && !Kt(t, o)) return !0
              var i = n[o],
                u = i && i[Mn]
              if (u ? u.t !== l : !Xt(i, l)) return !0
            }
          }
          var s = !!t[Mn]
          return r.length !== _n(t).length + (s ? 0 : 1)
        }
        function r(e) {
          var t = e.k
          if (t.length !== e.t.length) return !0
          var n = Object.getOwnPropertyDescriptor(t, t.length - 1)
          if (n && !n.get) return !0
          for (var r = 0; r < t.length; r++) if (!t.hasOwnProperty(r)) return !0
          return !1
        }
        var a = {}
        an('ES5', {
          J: function (t, n) {
            var r = Array.isArray(t),
              a = (function (t, n) {
                if (t) {
                  for (var r = Array(n.length), a = 0; a < n.length; a++)
                    Object.defineProperty(r, '' + a, e(a, !0))
                  return r
                }
                var o = Rn(n)
                delete o[Mn]
                for (var l = _n(o), i = 0; i < l.length; i++) {
                  var u = l[i]
                  o[u] = e(u, t || !!o[u].enumerable)
                }
                return Object.create(Object.getPrototypeOf(n), o)
              })(r, t),
              o = {
                i: r ? 5 : 4,
                A: n ? n.A : on(),
                P: !1,
                I: !1,
                R: {},
                l: n,
                t: t,
                k: a,
                o: null,
                g: !1,
                C: !1,
              }
            return Object.defineProperty(a, Mn, { value: o, writable: !0 }), a
          },
          S: function (e, n, a) {
            a
              ? Wt(n) && n[Mn].A === e && t(e.p)
              : (e.u &&
                  (function e(t) {
                    if (t && 'object' == typeof t) {
                      var n = t[Mn]
                      if (n) {
                        var a = n.t,
                          o = n.k,
                          l = n.R,
                          i = n.i
                        if (4 === i)
                          Vt(o, function (t) {
                            t !== Mn &&
                              (void 0 !== a[t] || Kt(a, t)
                                ? l[t] || e(o[t])
                                : ((l[t] = !0), yn(n)))
                          }),
                            Vt(a, function (e) {
                              void 0 !== o[e] ||
                                Kt(o, e) ||
                                ((l[e] = !1), yn(n))
                            })
                        else if (5 === i) {
                          if (
                            (r(n) && (yn(n), (l.length = !0)),
                            o.length < a.length)
                          )
                            for (var u = o.length; u < a.length; u++) l[u] = !1
                          else
                            for (var s = a.length; s < o.length; s++) l[s] = !0
                          for (
                            var c = Math.min(o.length, a.length), f = 0;
                            f < c;
                            f++
                          )
                            o.hasOwnProperty(f) || (l[f] = !0),
                              void 0 === l[f] && e(o[f])
                        }
                      }
                    }
                  })(e.p[0]),
                t(e.p))
          },
          K: function (e) {
            return 4 === e.i ? n(e) : r(e)
          },
        })
      }
      var Sn,
        En,
        jn = 'undefined' != typeof Symbol && 'symbol' == typeof Symbol('x'),
        Nn = 'undefined' != typeof Map,
        Pn = 'undefined' != typeof Set,
        On =
          'undefined' != typeof Proxy &&
          void 0 !== Proxy.revocable &&
          'undefined' != typeof Reflect,
        Ln = jn
          ? Symbol.for('immer-nothing')
          : (((Sn = {})['immer-nothing'] = !0), Sn),
        Tn = jn ? Symbol.for('immer-draftable') : '__$immer_draftable',
        Mn = jn ? Symbol.for('immer-state') : '__$immer_state',
        An =
          ('undefined' != typeof Symbol && Symbol.iterator,
          '' + Object.prototype.constructor),
        _n =
          'undefined' != typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(
                  Object.getOwnPropertySymbols(e),
                )
              }
            : Object.getOwnPropertyNames,
        Rn =
          Object.getOwnPropertyDescriptors ||
          function (e) {
            var t = {}
            return (
              _n(e).forEach(function (n) {
                t[n] = Object.getOwnPropertyDescriptor(e, n)
              }),
              t
            )
          },
        zn = {},
        Fn = {
          get: function (e, t) {
            if (t === Mn) return e
            var n = $t(e)
            if (!Kt(n, t))
              return (function (e, t, n) {
                var r,
                  a = gn(t, n)
                return a
                  ? 'value' in a
                    ? a.value
                    : null === (r = a.get) || void 0 === r
                    ? void 0
                    : r.call(e.k)
                  : void 0
              })(e, n, t)
            var r = n[t]
            return e.I || !Ut(r)
              ? r
              : r === vn(e.t, t)
              ? (bn(e), (e.o[t] = xn(e.A.h, r, e)))
              : r
          },
          has: function (e, t) {
            return t in $t(e)
          },
          ownKeys: function (e) {
            return Reflect.ownKeys($t(e))
          },
          set: function (e, t, n) {
            var r = gn($t(e), t)
            if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0
            if (!e.P) {
              var a = vn($t(e), t),
                o = null == a ? void 0 : a[Mn]
              if (o && o.t === n) return (e.o[t] = n), (e.R[t] = !1), !0
              if (Xt(n, a) && (void 0 !== n || Kt(e.t, t))) return !0
              bn(e), yn(e)
            }
            return (
              (e.o[t] === n && (void 0 !== n || t in e.o)) ||
                (Number.isNaN(n) && Number.isNaN(e.o[t])) ||
                ((e.o[t] = n), (e.R[t] = !0)),
              !0
            )
          },
          deleteProperty: function (e, t) {
            return (
              void 0 !== vn(e.t, t) || t in e.t
                ? ((e.R[t] = !1), bn(e), yn(e))
                : delete e.R[t],
              e.o && delete e.o[t],
              !0
            )
          },
          getOwnPropertyDescriptor: function (e, t) {
            var n = $t(e),
              r = Reflect.getOwnPropertyDescriptor(n, t)
            return r
              ? {
                  writable: !0,
                  configurable: 1 !== e.i || 'length' !== t,
                  enumerable: r.enumerable,
                  value: n[t],
                }
              : r
          },
          defineProperty: function () {
            Ht(11)
          },
          getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e.t)
          },
          setPrototypeOf: function () {
            Ht(12)
          },
        },
        In = {}
      Vt(Fn, function (e, t) {
        In[e] = function () {
          return (arguments[0] = arguments[0][0]), t.apply(this, arguments)
        }
      }),
        (In.deleteProperty = function (e, t) {
          return In.set.call(this, e, t, void 0)
        }),
        (In.set = function (e, t, n) {
          return Fn.set.call(this, e[0], t, n, e[0])
        })
      var Bn = (function () {
          function e(e) {
            var t = this
            ;(this.O = On),
              (this.D = !0),
              (this.produce = function (e, n, r) {
                if ('function' == typeof e && 'function' != typeof n) {
                  var a = n
                  n = e
                  var o = t
                  return function (e) {
                    var t = this
                    void 0 === e && (e = a)
                    for (
                      var r = arguments.length,
                        l = Array(r > 1 ? r - 1 : 0),
                        i = 1;
                      i < r;
                      i++
                    )
                      l[i - 1] = arguments[i]
                    return o.produce(e, function (e) {
                      var r
                      return (r = n).call.apply(r, [t, e].concat(l))
                    })
                  }
                }
                var l
                if (
                  ('function' != typeof n && Ht(6),
                  void 0 !== r && 'function' != typeof r && Ht(7),
                  Ut(e))
                ) {
                  var i = cn(t),
                    u = xn(t, e, void 0),
                    s = !0
                  try {
                    ;(l = n(u)), (s = !1)
                  } finally {
                    s ? un(i) : sn(i)
                  }
                  return 'undefined' != typeof Promise && l instanceof Promise
                    ? l.then(
                        function (e) {
                          return ln(i, r), dn(e, i)
                        },
                        function (e) {
                          throw (un(i), e)
                        },
                      )
                    : (ln(i, r), dn(l, i))
                }
                if (!e || 'object' != typeof e) {
                  if (
                    (void 0 === (l = n(e)) && (l = e),
                    l === Ln && (l = void 0),
                    t.D && en(l, !0),
                    r)
                  ) {
                    var c = [],
                      f = []
                    rn('Patches').M(e, l, c, f), r(c, f)
                  }
                  return l
                }
                Ht(21, e)
              }),
              (this.produceWithPatches = function (e, n) {
                if ('function' == typeof e)
                  return function (n) {
                    for (
                      var r = arguments.length,
                        a = Array(r > 1 ? r - 1 : 0),
                        o = 1;
                      o < r;
                      o++
                    )
                      a[o - 1] = arguments[o]
                    return t.produceWithPatches(n, function (t) {
                      return e.apply(void 0, [t].concat(a))
                    })
                  }
                var r,
                  a,
                  o = t.produce(e, n, function (e, t) {
                    ;(r = e), (a = t)
                  })
                return 'undefined' != typeof Promise && o instanceof Promise
                  ? o.then(function (e) {
                      return [e, r, a]
                    })
                  : [o, r, a]
              }),
              'boolean' == typeof (null == e ? void 0 : e.useProxies) &&
                this.setUseProxies(e.useProxies),
              'boolean' == typeof (null == e ? void 0 : e.autoFreeze) &&
                this.setAutoFreeze(e.autoFreeze)
          }
          var t = e.prototype
          return (
            (t.createDraft = function (e) {
              Ut(e) || Ht(8), Wt(e) && (e = wn(e))
              var t = cn(this),
                n = xn(this, e, void 0)
              return (n[Mn].C = !0), sn(t), n
            }),
            (t.finishDraft = function (e, t) {
              var n = (e && e[Mn]).A
              return ln(n, t), dn(void 0, n)
            }),
            (t.setAutoFreeze = function (e) {
              this.D = e
            }),
            (t.setUseProxies = function (e) {
              e && !On && Ht(20), (this.O = e)
            }),
            (t.applyPatches = function (e, t) {
              var n
              for (n = t.length - 1; n >= 0; n--) {
                var r = t[n]
                if (0 === r.path.length && 'replace' === r.op) {
                  e = r.value
                  break
                }
              }
              n > -1 && (t = t.slice(n + 1))
              var a = rn('Patches').$
              return Wt(e)
                ? a(e, t)
                : this.produce(e, function (e) {
                    return a(e, t)
                  })
            }),
            e
          )
        })(),
        Dn = new Bn(),
        Hn = Dn.produce,
        Wn =
          (Dn.produceWithPatches.bind(Dn),
          Dn.setAutoFreeze.bind(Dn),
          Dn.setUseProxies.bind(Dn),
          Dn.applyPatches.bind(Dn),
          Dn.createDraft.bind(Dn),
          Dn.finishDraft.bind(Dn),
          Hn)
      function Un(e, t, n) {
        return (
          (t = m(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }
      function Vn(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function Qn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Vn(Object(n), !0).forEach(function (t) {
                Un(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Vn(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                )
              })
        }
        return e
      }
      function Kn(e) {
        return (
          'Minified Redux error #' +
          e +
          '; visit https://redux.js.org/Errors?code=' +
          e +
          ' for the full message or use the non-minified dev environment for full errors. '
        )
      }
      var qn =
          ('function' === typeof Symbol && Symbol.observable) || '@@observable',
        Yn = function () {
          return Math.random().toString(36).substring(7).split('').join('.')
        },
        Xn = {
          INIT: '@@redux/INIT' + Yn(),
          REPLACE: '@@redux/REPLACE' + Yn(),
          PROBE_UNKNOWN_ACTION: function () {
            return '@@redux/PROBE_UNKNOWN_ACTION' + Yn()
          },
        }
      function Zn(e) {
        if ('object' !== typeof e || null === e) return !1
        for (var t = e; null !== Object.getPrototypeOf(t); )
          t = Object.getPrototypeOf(t)
        return Object.getPrototypeOf(e) === t
      }
      function Jn(e, t, n) {
        var r
        if (
          ('function' === typeof t && 'function' === typeof n) ||
          ('function' === typeof n && 'function' === typeof arguments[3])
        )
          throw new Error(Kn(0))
        if (
          ('function' === typeof t &&
            'undefined' === typeof n &&
            ((n = t), (t = void 0)),
          'undefined' !== typeof n)
        ) {
          if ('function' !== typeof n) throw new Error(Kn(1))
          return n(Jn)(e, t)
        }
        if ('function' !== typeof e) throw new Error(Kn(2))
        var a = e,
          o = t,
          l = [],
          i = l,
          u = !1
        function s() {
          i === l && (i = l.slice())
        }
        function c() {
          if (u) throw new Error(Kn(3))
          return o
        }
        function f(e) {
          if ('function' !== typeof e) throw new Error(Kn(4))
          if (u) throw new Error(Kn(5))
          var t = !0
          return (
            s(),
            i.push(e),
            function () {
              if (t) {
                if (u) throw new Error(Kn(6))
                ;(t = !1), s()
                var n = i.indexOf(e)
                i.splice(n, 1), (l = null)
              }
            }
          )
        }
        function d(e) {
          if (!Zn(e)) throw new Error(Kn(7))
          if ('undefined' === typeof e.type) throw new Error(Kn(8))
          if (u) throw new Error(Kn(9))
          try {
            ;(u = !0), (o = a(o, e))
          } finally {
            u = !1
          }
          for (var t = (l = i), n = 0; n < t.length; n++) {
            ;(0, t[n])()
          }
          return e
        }
        return (
          d({ type: Xn.INIT }),
          ((r = {
            dispatch: d,
            subscribe: f,
            getState: c,
            replaceReducer: function (e) {
              if ('function' !== typeof e) throw new Error(Kn(10))
              ;(a = e), d({ type: Xn.REPLACE })
            },
          })[qn] = function () {
            var e,
              t = f
            return (
              ((e = {
                subscribe: function (e) {
                  if ('object' !== typeof e || null === e)
                    throw new Error(Kn(11))
                  function n() {
                    e.next && e.next(c())
                  }
                  return n(), { unsubscribe: t(n) }
                },
              })[qn] = function () {
                return this
              }),
              e
            )
          }),
          r
        )
      }
      function $n(e) {
        for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
          var a = t[r]
          0, 'function' === typeof e[a] && (n[a] = e[a])
        }
        var o,
          l = Object.keys(n)
        try {
          !(function (e) {
            Object.keys(e).forEach(function (t) {
              var n = e[t]
              if ('undefined' === typeof n(void 0, { type: Xn.INIT }))
                throw new Error(Kn(12))
              if (
                'undefined' ===
                typeof n(void 0, { type: Xn.PROBE_UNKNOWN_ACTION() })
              )
                throw new Error(Kn(13))
            })
          })(n)
        } catch (i) {
          o = i
        }
        return function (e, t) {
          if ((void 0 === e && (e = {}), o)) throw o
          for (var r = !1, a = {}, i = 0; i < l.length; i++) {
            var u = l[i],
              s = n[u],
              c = e[u],
              f = s(c, t)
            if ('undefined' === typeof f) {
              t && t.type
              throw new Error(Kn(14))
            }
            ;(a[u] = f), (r = r || f !== c)
          }
          return (r = r || l.length !== Object.keys(e).length) ? a : e
        }
      }
      function Gn() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n]
        return 0 === t.length
          ? function (e) {
              return e
            }
          : 1 === t.length
          ? t[0]
          : t.reduce(function (e, t) {
              return function () {
                return e(t.apply(void 0, arguments))
              }
            })
      }
      function er() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n]
        return function (e) {
          return function () {
            var n = e.apply(void 0, arguments),
              r = function () {
                throw new Error(Kn(15))
              },
              a = {
                getState: n.getState,
                dispatch: function () {
                  return r.apply(void 0, arguments)
                },
              },
              o = t.map(function (e) {
                return e(a)
              })
            return (
              (r = Gn.apply(void 0, o)(n.dispatch)),
              Qn(Qn({}, n), {}, { dispatch: r })
            )
          }
        }
      }
      function tr(e) {
        return function (t) {
          var n = t.dispatch,
            r = t.getState
          return function (t) {
            return function (a) {
              return 'function' === typeof a ? a(n, r, e) : t(a)
            }
          }
        }
      }
      var nr = tr()
      nr.withExtraArgument = tr
      var rr = nr,
        ar = (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }),
              e(t, n)
            )
          }
          return function (t, n) {
            if ('function' !== typeof n && null !== n)
              throw new TypeError(
                'Class extends value ' +
                  String(n) +
                  ' is not a constructor or null',
              )
            function r() {
              this.constructor = t
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        or = function (e, t) {
          var n,
            r,
            a,
            o,
            l = {
              label: 0,
              sent: function () {
                if (1 & a[0]) throw a[1]
                return a[1]
              },
              trys: [],
              ops: [],
            }
          return (
            (o = { next: i(0), throw: i(1), return: i(2) }),
            'function' === typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this
              }),
            o
          )
          function i(o) {
            return function (i) {
              return (function (o) {
                if (n) throw new TypeError('Generator is already executing.')
                for (; l; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (a =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((a = r.return) && a.call(r), 0)
                            : r.next) &&
                        !(a = a.call(r, o[1])).done)
                    )
                      return a
                    switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                      case 0:
                      case 1:
                        a = o
                        break
                      case 4:
                        return l.label++, { value: o[1], done: !1 }
                      case 5:
                        l.label++, (r = o[1]), (o = [0])
                        continue
                      case 7:
                        ;(o = l.ops.pop()), l.trys.pop()
                        continue
                      default:
                        if (
                          !(a = (a = l.trys).length > 0 && a[a.length - 1]) &&
                          (6 === o[0] || 2 === o[0])
                        ) {
                          l = 0
                          continue
                        }
                        if (
                          3 === o[0] &&
                          (!a || (o[1] > a[0] && o[1] < a[3]))
                        ) {
                          l.label = o[1]
                          break
                        }
                        if (6 === o[0] && l.label < a[1]) {
                          ;(l.label = a[1]), (a = o)
                          break
                        }
                        if (a && l.label < a[2]) {
                          ;(l.label = a[2]), l.ops.push(o)
                          break
                        }
                        a[2] && l.ops.pop(), l.trys.pop()
                        continue
                    }
                    o = t.call(e, l)
                  } catch (i) {
                    ;(o = [6, i]), (r = 0)
                  } finally {
                    n = a = 0
                  }
                if (5 & o[0]) throw o[1]
                return { value: o[0] ? o[1] : void 0, done: !0 }
              })([o, i])
            }
          }
        },
        lr = function (e, t) {
          for (var n = 0, r = t.length, a = e.length; n < r; n++, a++)
            e[a] = t[n]
          return e
        },
        ir = Object.defineProperty,
        ur = Object.defineProperties,
        sr = Object.getOwnPropertyDescriptors,
        cr = Object.getOwnPropertySymbols,
        fr = Object.prototype.hasOwnProperty,
        dr = Object.prototype.propertyIsEnumerable,
        pr = function (e, t, n) {
          return t in e
            ? ir(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n)
        },
        mr = function (e, t) {
          for (var n in t || (t = {})) fr.call(t, n) && pr(e, n, t[n])
          if (cr)
            for (var r = 0, a = cr(t); r < a.length; r++) {
              n = a[r]
              dr.call(t, n) && pr(e, n, t[n])
            }
          return e
        },
        hr = function (e, t) {
          return ur(e, sr(t))
        },
        vr = function (e, t, n) {
          return new Promise(function (r, a) {
            var o = function (e) {
                try {
                  i(n.next(e))
                } catch (t) {
                  a(t)
                }
              },
              l = function (e) {
                try {
                  i(n.throw(e))
                } catch (t) {
                  a(t)
                }
              },
              i = function (e) {
                return e.done ? r(e.value) : Promise.resolve(e.value).then(o, l)
              }
            i((n = n.apply(e, t)).next())
          })
        },
        gr =
          'undefined' !== typeof window &&
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            : function () {
                if (0 !== arguments.length)
                  return 'object' === typeof arguments[0]
                    ? Gn
                    : Gn.apply(null, arguments)
              }
      'undefined' !== typeof window &&
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__
      function yr(e) {
        if ('object' !== typeof e || null === e) return !1
        var t = Object.getPrototypeOf(e)
        if (null === t) return !0
        for (var n = t; null !== Object.getPrototypeOf(n); )
          n = Object.getPrototypeOf(n)
        return t === n
      }
      var br = (function (e) {
          function t() {
            for (var n = [], r = 0; r < arguments.length; r++)
              n[r] = arguments[r]
            var a = e.apply(this, n) || this
            return Object.setPrototypeOf(a, t.prototype), a
          }
          return (
            ar(t, e),
            Object.defineProperty(t, Symbol.species, {
              get: function () {
                return t
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.concat = function () {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n]
              return e.prototype.concat.apply(this, t)
            }),
            (t.prototype.prepend = function () {
              for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n]
              return 1 === e.length && Array.isArray(e[0])
                ? new (t.bind.apply(t, lr([void 0], e[0].concat(this))))()
                : new (t.bind.apply(t, lr([void 0], e.concat(this))))()
            }),
            t
          )
        })(Array),
        xr = (function (e) {
          function t() {
            for (var n = [], r = 0; r < arguments.length; r++)
              n[r] = arguments[r]
            var a = e.apply(this, n) || this
            return Object.setPrototypeOf(a, t.prototype), a
          }
          return (
            ar(t, e),
            Object.defineProperty(t, Symbol.species, {
              get: function () {
                return t
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.concat = function () {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n]
              return e.prototype.concat.apply(this, t)
            }),
            (t.prototype.prepend = function () {
              for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n]
              return 1 === e.length && Array.isArray(e[0])
                ? new (t.bind.apply(t, lr([void 0], e[0].concat(this))))()
                : new (t.bind.apply(t, lr([void 0], e.concat(this))))()
            }),
            t
          )
        })(Array)
      function wr(e) {
        return Ut(e) ? Wn(e, function () {}) : e
      }
      function Cr() {
        return function (e) {
          return (function (e) {
            void 0 === e && (e = {})
            var t = e.thunk,
              n = void 0 === t || t,
              r = (e.immutableCheck, e.serializableCheck, new br())
            n &&
              (!(function (e) {
                return 'boolean' === typeof e
              })(n)
                ? r.push(rr.withExtraArgument(n.extraArgument))
                : r.push(rr))
            0
            return r
          })(e)
        }
      }
      function kr(e, t) {
        function n() {
          for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r]
          if (t) {
            var a = t.apply(void 0, n)
            if (!a) throw new Error('prepareAction did not return an object')
            return mr(
              mr(
                { type: e, payload: a.payload },
                'meta' in a && { meta: a.meta },
              ),
              'error' in a && { error: a.error },
            )
          }
          return { type: e, payload: n[0] }
        }
        return (
          (n.toString = function () {
            return '' + e
          }),
          (n.type = e),
          (n.match = function (t) {
            return t.type === e
          }),
          n
        )
      }
      function Sr(e) {
        var t,
          n = {},
          r = [],
          a = {
            addCase: function (e, t) {
              var r = 'string' === typeof e ? e : e.type
              if (r in n)
                throw new Error(
                  'addCase cannot be called with two reducers for the same action type',
                )
              return (n[r] = t), a
            },
            addMatcher: function (e, t) {
              return r.push({ matcher: e, reducer: t }), a
            },
            addDefaultCase: function (e) {
              return (t = e), a
            },
          }
        return e(a), [n, r, t]
      }
      function Er(e) {
        var t = e.name
        if (!t) throw new Error('`name` is a required option for createSlice')
        var n,
          r =
            'function' == typeof e.initialState
              ? e.initialState
              : wr(e.initialState),
          a = e.reducers || {},
          o = Object.keys(a),
          l = {},
          i = {},
          u = {}
        function s() {
          var t =
              'function' === typeof e.extraReducers
                ? Sr(e.extraReducers)
                : [e.extraReducers],
            n = t[0],
            a = void 0 === n ? {} : n,
            o = t[1],
            l = void 0 === o ? [] : o,
            u = t[2],
            s = void 0 === u ? void 0 : u,
            c = mr(mr({}, a), i)
          return (function (e, t, n, r) {
            void 0 === n && (n = [])
            var a,
              o = 'function' === typeof t ? Sr(t) : [t, n, r],
              l = o[0],
              i = o[1],
              u = o[2]
            if (
              (function (e) {
                return 'function' === typeof e
              })(e)
            )
              a = function () {
                return wr(e())
              }
            else {
              var s = wr(e)
              a = function () {
                return s
              }
            }
            function c(e, t) {
              void 0 === e && (e = a())
              var n = lr(
                [l[t.type]],
                i
                  .filter(function (e) {
                    return (0, e.matcher)(t)
                  })
                  .map(function (e) {
                    return e.reducer
                  }),
              )
              return (
                0 ===
                  n.filter(function (e) {
                    return !!e
                  }).length && (n = [u]),
                n.reduce(function (e, n) {
                  if (n) {
                    var r
                    if (Wt(e)) return void 0 === (r = n(e, t)) ? e : r
                    if (Ut(e))
                      return Wn(e, function (e) {
                        return n(e, t)
                      })
                    if (void 0 === (r = n(e, t))) {
                      if (null === e) return e
                      throw Error(
                        'A case reducer on a non-draftable value must not return undefined',
                      )
                    }
                    return r
                  }
                  return e
                }, e)
              )
            }
            return (c.getInitialState = a), c
          })(r, function (e) {
            for (var t in c) e.addCase(t, c[t])
            for (var n = 0, r = l; n < r.length; n++) {
              var a = r[n]
              e.addMatcher(a.matcher, a.reducer)
            }
            s && e.addDefaultCase(s)
          })
        }
        return (
          o.forEach(function (e) {
            var n,
              r,
              o = a[e],
              s = t + '/' + e
            'reducer' in o ? ((n = o.reducer), (r = o.prepare)) : (n = o),
              (l[e] = n),
              (i[s] = n),
              (u[e] = r ? kr(s, r) : kr(s))
          }),
          {
            name: t,
            reducer: function (e, t) {
              return n || (n = s()), n(e, t)
            },
            actions: u,
            caseReducers: l,
            getInitialState: function () {
              return n || (n = s()), n.getInitialState()
            },
          }
        )
      }
      var jr = function (e) {
          void 0 === e && (e = 21)
          for (var t = '', n = e; n--; )
            t +=
              'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'[
                (64 * Math.random()) | 0
              ]
          return t
        },
        Nr = ['name', 'message', 'stack', 'code'],
        Pr = function (e, t) {
          ;(this.payload = e), (this.meta = t)
        },
        Or = function (e, t) {
          ;(this.payload = e), (this.meta = t)
        },
        Lr = function (e) {
          if ('object' === typeof e && null !== e) {
            for (var t = {}, n = 0, r = Nr; n < r.length; n++) {
              var a = r[n]
              'string' === typeof e[a] && (t[a] = e[a])
            }
            return t
          }
          return { message: String(e) }
        }
      !(function () {
        function e(e, t, n) {
          var r = kr(e + '/fulfilled', function (e, t, n, r) {
              return {
                payload: e,
                meta: hr(mr({}, r || {}), {
                  arg: n,
                  requestId: t,
                  requestStatus: 'fulfilled',
                }),
              }
            }),
            a = kr(e + '/pending', function (e, t, n) {
              return {
                payload: void 0,
                meta: hr(mr({}, n || {}), {
                  arg: t,
                  requestId: e,
                  requestStatus: 'pending',
                }),
              }
            }),
            o = kr(e + '/rejected', function (e, t, r, a, o) {
              return {
                payload: a,
                error: ((n && n.serializeError) || Lr)(e || 'Rejected'),
                meta: hr(mr({}, o || {}), {
                  arg: r,
                  requestId: t,
                  rejectedWithValue: !!a,
                  requestStatus: 'rejected',
                  aborted: 'AbortError' === (null == e ? void 0 : e.name),
                  condition: 'ConditionError' === (null == e ? void 0 : e.name),
                }),
              }
            }),
            l =
              'undefined' !== typeof AbortController
                ? AbortController
                : (function () {
                    function e() {
                      this.signal = {
                        aborted: !1,
                        addEventListener: function () {},
                        dispatchEvent: function () {
                          return !1
                        },
                        onabort: function () {},
                        removeEventListener: function () {},
                        reason: void 0,
                        throwIfAborted: function () {},
                      }
                    }
                    return (
                      (e.prototype.abort = function () {
                        0
                      }),
                      e
                    )
                  })()
          return Object.assign(
            function (e) {
              return function (i, u, s) {
                var c,
                  f = (null == n ? void 0 : n.idGenerator)
                    ? n.idGenerator(e)
                    : jr(),
                  d = new l()
                function p(e) {
                  ;(c = e), d.abort()
                }
                var m = (function () {
                  return vr(this, null, function () {
                    var l, m, h, v, g, y
                    return or(this, function (b) {
                      switch (b.label) {
                        case 0:
                          return (
                            b.trys.push([0, 4, , 5]),
                            (v =
                              null == (l = null == n ? void 0 : n.condition)
                                ? void 0
                                : l.call(n, e, { getState: u, extra: s })),
                            null === (x = v) ||
                            'object' !== typeof x ||
                            'function' !== typeof x.then
                              ? [3, 2]
                              : [4, v]
                          )
                        case 1:
                          ;(v = b.sent()), (b.label = 2)
                        case 2:
                          if (!1 === v || d.signal.aborted)
                            throw {
                              name: 'ConditionError',
                              message:
                                'Aborted due to condition callback returning false.',
                            }
                          return (
                            !0,
                            (g = new Promise(function (e, t) {
                              return d.signal.addEventListener(
                                'abort',
                                function () {
                                  return t({
                                    name: 'AbortError',
                                    message: c || 'Aborted',
                                  })
                                },
                              )
                            })),
                            i(
                              a(
                                f,
                                e,
                                null ==
                                  (m = null == n ? void 0 : n.getPendingMeta)
                                  ? void 0
                                  : m.call(
                                      n,
                                      { requestId: f, arg: e },
                                      { getState: u, extra: s },
                                    ),
                              ),
                            ),
                            [
                              4,
                              Promise.race([
                                g,
                                Promise.resolve(
                                  t(e, {
                                    dispatch: i,
                                    getState: u,
                                    extra: s,
                                    requestId: f,
                                    signal: d.signal,
                                    abort: p,
                                    rejectWithValue: function (e, t) {
                                      return new Pr(e, t)
                                    },
                                    fulfillWithValue: function (e, t) {
                                      return new Or(e, t)
                                    },
                                  }),
                                ).then(function (t) {
                                  if (t instanceof Pr) throw t
                                  return t instanceof Or
                                    ? r(t.payload, f, e, t.meta)
                                    : r(t, f, e)
                                }),
                              ]),
                            ]
                          )
                        case 3:
                          return (h = b.sent()), [3, 5]
                        case 4:
                          return (
                            (y = b.sent()),
                            (h =
                              y instanceof Pr
                                ? o(null, f, e, y.payload, y.meta)
                                : o(y, f, e)),
                            [3, 5]
                          )
                        case 5:
                          return (
                            (n &&
                              !n.dispatchConditionRejection &&
                              o.match(h) &&
                              h.meta.condition) ||
                              i(h),
                            [2, h]
                          )
                      }
                      var x
                    })
                  })
                })()
                return Object.assign(m, {
                  abort: p,
                  requestId: f,
                  arg: e,
                  unwrap: function () {
                    return m.then(Tr)
                  },
                })
              }
            },
            { pending: a, rejected: o, fulfilled: r, typePrefix: e },
          )
        }
        e.withTypes = function () {
          return e
        }
      })()
      function Tr(e) {
        if (e.meta && e.meta.rejectedWithValue) throw e.payload
        if (e.error) throw e.error
        return e.payload
      }
      Object.assign
      var Mr = 'listenerMiddleware'
      kr(Mr + '/add'), kr(Mr + '/removeAll'), kr(Mr + '/remove')
      'function' === typeof queueMicrotask &&
        queueMicrotask.bind(
          'undefined' !== typeof window
            ? window
            : 'undefined' !== typeof n.g
            ? n.g
            : globalThis,
        )
      var Ar,
        _r = function (e) {
          return function (t) {
            setTimeout(t, e)
          }
        }
      'undefined' !== typeof window && window.requestAnimationFrame
        ? window.requestAnimationFrame
        : _r(10)
      kn()
      var Rr = Er({
          name: 'myTeams',
          initialState: {
            teams: [{ name: 'Deutschland', flag: Rt }],
            loading: !1,
          },
          reducers: {
            addTeam: function (e, t) {
              e.teams.push(t), (window.localStorage.teams = e.teams)
            },
            deleteTeam: function (e, t) {
              ;(e.teams = e.teams.map(function (e) {
                return e !== t
              })),
                (window.localStorage.teams = e.teams)
            },
            loadTeams: function (e) {
              e.teams = window.localStorage.teams
            },
          },
        }),
        zr = Rr.actions,
        Fr = (zr.addTeam, zr.deleteTeam, zr.loadTeams, Rr.reducer),
        Ir = function () {
          Mt()
          var e = s((0, t.useState)(null), 2),
            n = e[0],
            r = e[1],
            a = kt(function (e) {
              return e.countries
            }).countries,
            o = kt(function (e) {
              return e.myTeams
            }).teams,
            l = [
              { path: '/league/', name: 'Premier league', icon: At },
              { path: '/league/', name: 'Ligue 1', icon: _t },
              { path: '/league/', name: 'Bundesliga', icon: Rt },
              { path: '/league/', name: 'Eredivisie', icon: zt },
              { path: '/league/', name: 'LaLiga', icon: Ft },
              { path: '/league/', name: 'Africa Cup Of Nations', icon: It },
              { path: '/league/', name: 'Euro', icon: It },
              { path: '/league/', name: 'Champions League', icon: It },
              { path: '/league/', name: 'Europa League', icon: It },
            ]
          return (0, tt.jsxs)('div', {
            className:
              'sm:hidden border dark:text-dMWhite text-darkBlue text-xs border-darkWhite dark:border-[#2F3340] py-2 px-4 rounded-[4px] w-max',
            children: [
              (0, tt.jsxs)('div', {
                children: [
                  (0, tt.jsx)('h1', {
                    className:
                      'uppercase dark:text-dMLightBlue text-blue font-semibold text-sm',
                    children:
                      '\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u041b\u0438\u0433\u0438',
                  }),
                  (0, tt.jsx)('span', {
                    className:
                      'h-[1px] dark:bg-[#2F3340] block my-2 bg-[#E4E7EC]',
                  }),
                  (0, tt.jsx)('ul', {
                    children: l.map(function (e) {
                      return (0,
                      tt.jsxs)(Ye, { className: 'mb-3 flex items-center justify-start gap-x-2', children: [(0, tt.jsx)('img', { src: e.icon, alt: 'icon' }), e.name] }, e.name)
                    }),
                  }),
                ],
              }),
              (0, tt.jsxs)('div', {
                className: 'mt-8',
                children: [
                  (0, tt.jsxs)('h1', {
                    className:
                      'flex gap-x-2 uppercase dark:text-dMLightBlue text-blue font-semibold text-sm',
                    children: [
                      (0, tt.jsx)('img', { src: Bt, alt: 'Yes' }),
                      ' \u041c\u043e\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u044b',
                    ],
                  }),
                  (0, tt.jsx)('span', {
                    className:
                      'h-[1px] block my-2 dark:bg-[#2F3340] bg-[#E4E7EC]',
                  }),
                  (0, tt.jsx)('ul', {
                    children:
                      null === o || void 0 === o
                        ? void 0
                        : o.map(function (e) {
                            return (0,
                            tt.jsxs)('li', { className: 'flex items-center justify-start gap-x-2', children: [(0, tt.jsx)('img', { src: e.flag, className: 'min-h-5', alt: 'icon' }), e.name] }, e.name)
                          }),
                  }),
                ],
              }),
              (0, tt.jsxs)('div', {
                className: 'mt-8 mb-20',
                children: [
                  (0, tt.jsx)('h1', {
                    className:
                      'flex gap-x-2 uppercase dark:text-dMLightBlue text-blue font-semibold text-sm',
                    children: '\u0421\u0442\u0440\u0430\u043d\u044b',
                  }),
                  (0, tt.jsx)('span', {
                    className:
                      'h-[1px] block my-2 dark:bg-[#2F3340] bg-[#E4E7EC]',
                  }),
                  (0, tt.jsx)('ul', {
                    children:
                      null === a || void 0 === a
                        ? void 0
                        : a.map(function (e) {
                            return (0, tt.jsxs)(
                              'li',
                              {
                                children: [
                                  e.open,
                                  (0, tt.jsx)('div', {
                                    onClick: function () {
                                      return r(e.name)
                                    },
                                    className: 'cursor-pointer',
                                    children: e.name,
                                  }),
                                  (0, tt.jsx)('ul', {
                                    className: ''.concat(
                                      n === e.name ? 'block' : 'hidden',
                                      ' ml-4',
                                    ),
                                    children: e.leagues.map(function (e) {
                                      return (0,
                                      tt.jsxs)('li', { className: 'flex items-center gap-x-1', children: [e.name, ' ', (0, tt.jsx)('img', { src: e.fav ? Bt : Dt, alt: 'fav' })] }, e.name)
                                    }),
                                  }),
                                ],
                              },
                              e.name,
                            )
                          }),
                  }),
                ],
              }),
            ],
          })
        }
      var Br =
        n.p + 'static/media/italineIcon.6cae8668e49c1f40256e8fbce4b60d4e.svg'
      var Dr =
          n.p + 'static/media/interIcon.d1d852cfa71dc1f074ed3d955922db71.svg',
        Hr = function (e) {
          return (0, tt.jsx)('button', {
            onClick: e.click,
            className: ''
              .concat(e.class, ' rounded-md bg-blue ')
              .concat(
                e.small ? 'p-2' : 'py-[10px] px-6',
                ' text-white uppercase font-bold text-sm sm:text-sx md:px-3 md:py-[5px]',
              ),
            children: e.path
              ? (0, tt.jsx)(Ye, { to: e.path, children: e.text })
              : e.text,
          })
        }
      var Wr = n.p + 'static/media/coefTop.b4bf373228de26fcaf60cb8f16735537.svg'
      var Ur = n.p + 'static/media/coefUp.0a38e10b60694e48f4e5bc074e130653.svg',
        Vr = function () {
          var e = [
              {
                country: '\u0418\u0442\u0430\u043b\u0438\u044f Cefs',
                isOpen: !1,
                icon: Br,
                league: '\u0421\u0435\u0440\u0438\u044f \u0430',
                fav: !1,
                matches: [
                  {
                    date: '2023-05-10',
                    live: !0,
                    time: '16:00',
                    fav: !0,
                    teamOne: {
                      name: '\u0418\u043d\u0442\u0435\u0440',
                      goals: 0,
                      icon: Dr,
                      coef: [
                        { num: '3.95', type: 'top' },
                        { num: '2.95', type: 'up' },
                        { num: '1.95', type: 'up' },
                      ],
                    },
                    teamTwo: {
                      name: '\u0414\u0438\u043d\u0430\u043c\u043e',
                      goals: 7,
                      icon: Dr,
                      coef: [
                        { num: '4', type: 'top' },
                        { num: '2.95', type: 'up' },
                        { num: '1.95', type: 'up' },
                      ],
                    },
                  },
                  {
                    date: '2023-05-10',
                    time: '16:00',
                    live: !0,
                    fav: !0,
                    teamOne: {
                      name: '\u0418\u043d\u0442\u0435\u0440',
                      goals: 0,
                      icon: Dr,
                      coef: [
                        { num: '3.95', type: 'top' },
                        { num: '2.95', type: 'up' },
                        { num: '1.95', type: 'up' },
                      ],
                    },
                    teamTwo: {
                      name: '\u0414\u0438\u043d\u0430\u043c\u043e',
                      goals: 7,
                      icon: Dr,
                      coef: [
                        { num: '3.95', type: 'top' },
                        { num: '2.95', type: 'up' },
                        { num: '1.95', type: 'up' },
                      ],
                    },
                  },
                  {
                    time: '12:00',
                    date: '2023-05-11',
                    fav: !0,
                    teamOne: { name: 'Hamburg Towers', goals: 51, icon: Dr },
                    teamTwo: { name: 'HNT', goals: 52, icon: Dr },
                  },
                ],
              },
              {
                country: '\u0413\u0435\u0440\u043c\u0430\u043d\u0438\u044f 45',
                isOpen: !1,
                icon: Br,
                league: '\u0421\u0435\u0440\u0438\u044f G',
                fav: !1,
                matches: [
                  {
                    date: 'end',
                    time: '\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d',
                    fav: !0,
                    teamOne: {
                      name: '\u0418\u043d\u0442\u0435\u0440',
                      goals: 0,
                      icon: Dr,
                    },
                    teamTwo: {
                      name: '\u0414\u0438\u043d\u0430\u043c\u043e',
                      goals: 7,
                      icon: Dr,
                    },
                  },
                  {
                    date: '2023-05-12',
                    time: '16:00',
                    fav: !0,
                    teamOne: {
                      name: '\u0418\u043d\u0442\u0435\u0440',
                      goals: 0,
                      icon: Dr,
                    },
                    teamTwo: {
                      name: '\u0414\u0438\u043d\u0430\u043c\u043e',
                      goals: 7,
                      icon: Dr,
                    },
                  },
                  {
                    time: '12:00',
                    date: '2023-05-11',
                    fav: !0,
                    teamOne: { name: 'Hamburg Towers', goals: 51, icon: Dr },
                    teamTwo: { name: 'HNT', goals: 52, icon: Dr },
                  },
                ],
              },
              {
                country: 'HNT',
                isOpen: !1,
                icon: Br,
                league: '\u0421\u0435\u0440\u0438\u044f G',
                fav: !1,
                matches: [
                  {
                    date: '2023-05-10',
                    time: '16:00',
                    live: !0,
                    fav: !0,
                    teamOne: {
                      name: '\u0418\u043d\u0442\u0435\u0440',
                      goals: 0,
                      icon: Dr,
                      coef: [
                        { num: '3.95', type: 'top' },
                        { num: '2.95', type: 'up' },
                        { num: '1.95', type: 'up' },
                      ],
                    },
                    teamTwo: {
                      name: '\u0414\u0438\u043d\u0430\u043c\u043e',
                      goals: 7,
                      icon: Dr,
                      coef: [
                        { num: '3.95', type: 'top' },
                        { num: '2.95', type: 'up' },
                        { num: '1.95', type: 'up' },
                      ],
                    },
                  },
                  {
                    date: '2023-05-12',
                    time: '16:00',
                    fav: !0,
                    teamOne: {
                      name: '\u0418\u043d\u0442\u0435\u0440',
                      goals: 0,
                      icon: Dr,
                      coef: [
                        { num: '3.95', type: 'top' },
                        { num: '2.95', type: 'up' },
                        { num: '1.95', type: 'up' },
                      ],
                    },
                    teamTwo: {
                      name: '\u0414\u0438\u043d\u0430\u043c\u043e',
                      goals: 7,
                      icon: Dr,
                      coef: [
                        { num: '3.95', type: 'top' },
                        { num: '2.95', type: 'up' },
                        { num: '1.95', type: 'up' },
                      ],
                    },
                  },
                  {
                    time: '12:00',
                    date: '2023-05-11',
                    fav: !0,
                    teamOne: { name: 'Hamburg Towers', goals: 51, icon: Dr },
                    teamTwo: { name: 'HNT', goals: 52, icon: Dr },
                  },
                ],
              },
              {
                country: '\u0413\u0435\u0440\u043c\u0430\u043d\u0438\u044f 12',
                isOpen: !1,
                icon: Br,
                league: '\u0421\u0435\u0440\u0438\u044f G',
                fav: !1,
                matches: [
                  {
                    date: '2023-05-10',
                    time: '16:00',
                    fav: !0,
                    teamOne: {
                      name: '\u0418\u043d\u0442\u0435\u0440',
                      goals: 0,
                      icon: Dr,
                      coef: [
                        { num: '3.95', type: 'top' },
                        { num: '2.95', type: 'up' },
                        { num: '1.95', type: 'up' },
                      ],
                    },
                    teamTwo: {
                      name: '\u0414\u0438\u043d\u0430\u043c\u043e',
                      goals: 7,
                      icon: Dr,
                      coef: [
                        { num: '3.95', type: 'top' },
                        { num: '2.95', type: 'up' },
                        { num: '1.95', type: 'up' },
                      ],
                    },
                  },
                  {
                    date: '2023-05-12',
                    time: '16:00',
                    fav: !0,
                    teamOne: {
                      name: '\u0418\u043d\u0442\u0435\u0440',
                      goals: 0,
                      icon: Dr,
                    },
                    teamTwo: {
                      name: '\u0414\u0438\u043d\u0430\u043c\u043e',
                      goals: 7,
                      icon: Dr,
                    },
                  },
                  {
                    time: '12:00',
                    date: '2023-05-11',
                    fav: !0,
                    teamOne: { name: 'Hamburg Towers', goals: 51, icon: Dr },
                    teamTwo: { name: 'HNT', goals: 52, icon: Dr },
                  },
                ],
              },
              {
                country: '\u0413\u0435\u0440\u043c\u0430\u043d\u0438\u044f',
                isOpen: !1,
                icon: Br,
                league: '\u0421\u0435\u0440\u0438\u044f G',
                fav: !1,
                matches: [
                  {
                    date: 'live',
                    fav: !0,
                    teamOne: {
                      name: '\u0418\u043d\u0442\u0435\u0440',
                      goals: 0,
                      icon: Dr,
                      coef: [
                        { num: '3.95', type: 'top' },
                        { num: '2.95', type: 'up' },
                        { num: '1.95', type: 'up' },
                      ],
                    },
                    teamTwo: {
                      name: '\u0414\u0438\u043d\u0430\u043c\u043e',
                      goals: 7,
                      icon: Dr,
                      coef: [
                        { num: '3.95', type: 'top' },
                        { num: '2.95', type: 'up' },
                        { num: '1.95', type: 'up' },
                      ],
                    },
                  },
                  {
                    date: '2023-05-12',
                    time: '16:00',
                    fav: !0,
                    teamOne: {
                      name: '\u0418\u043d\u0442\u0435\u0440',
                      goals: 0,
                      icon: Dr,
                    },
                    teamTwo: {
                      name: '\u0414\u0438\u043d\u0430\u043c\u043e',
                      goals: 7,
                      icon: Dr,
                    },
                  },
                  {
                    time: '12:00',
                    date: '2023-05-11',
                    fav: !0,
                    teamOne: {
                      name: 'Hamburg Towers',
                      goals: 51,
                      icon: Dr,
                      coef: [
                        { num: '3.95', type: 'top' },
                        { num: '2.95', type: 'up' },
                        { num: '1.95', type: 'up' },
                      ],
                    },
                    teamTwo: {
                      name: 'HNT',
                      goals: 52,
                      icon: Dr,
                      coef: [
                        { num: '3.95', type: 'top' },
                        { num: '2.95', type: 'up' },
                        { num: '1.95', type: 'up' },
                      ],
                    },
                  },
                ],
              },
              {
                country: '\u0413\u0435\u0440\u043c\u0430\u043d\u0438\u044f',
                isOpen: !1,
                icon: Br,
                league: '\u0421\u0435\u0440\u0438\u044f G',
                fav: !1,
                matches: [
                  {
                    date: '2023-05-10',
                    time: '16:00',
                    fav: !0,
                    coef: [
                      { num: '3.95', type: 'top' },
                      { num: '2.95', type: 'up' },
                      { num: '1.95', type: 'up' },
                    ],
                    teamOne: {
                      name: '\u0418\u043d\u0442\u0435\u0440',
                      goals: 0,
                      icon: Dr,
                    },
                    teamTwo: {
                      name: '\u0414\u0438\u043d\u0430\u043c\u043e',
                      goals: 7,
                      icon: Dr,
                    },
                  },
                  {
                    date: '2023-05-12',
                    time: '16:00',
                    fav: !0,
                    coef: [
                      { num: '3.95', type: 'top' },
                      { num: '2.95', type: 'up' },
                      { num: '1.95', type: 'up' },
                    ],
                    teamOne: {
                      name: '\u0418\u043d\u0442\u0435\u0440',
                      goals: 0,
                      icon: Dr,
                    },
                    teamTwo: {
                      name: '\u0414\u0438\u043d\u0430\u043c\u043e',
                      goals: 7,
                      icon: Dr,
                    },
                  },
                  {
                    time: '12:00',
                    date: '2023-05-11',
                    fav: !0,
                    teamOne: { name: 'Hamburg Towers', goals: 51, icon: Dr },
                    teamTwo: { name: 'HNT', goals: 52, icon: Dr },
                  },
                ],
              },
              {
                country: '\u0413\u0435\u0440\u043c\u0430\u043d\u0438\u044f',
                isOpen: !1,
                icon: Br,
                league: '\u0421\u0435\u0440\u0438\u044f G',
                fav: !1,
                matches: [
                  {
                    date: '2023-05-10',
                    time: '16:00',
                    fav: !0,
                    teamOne: {
                      name: '\u0418\u043d\u0442\u0435\u0440',
                      goals: 0,
                      icon: Dr,
                    },
                    teamTwo: {
                      name: '\u0414\u0438\u043d\u0430\u043c\u043e',
                      goals: 7,
                      icon: Dr,
                    },
                  },
                  {
                    date: '2023-05-12',
                    time: '16:00',
                    fav: !0,
                    teamOne: {
                      name: '\u0418\u043d\u0442\u0435\u0440',
                      goals: 0,
                      icon: Dr,
                    },
                    teamTwo: {
                      name: '\u0414\u0438\u043d\u0430\u043c\u043e',
                      goals: 7,
                      icon: Dr,
                    },
                  },
                  {
                    time: '12:00',
                    date: '2023-05-11',
                    fav: !0,
                    teamOne: { name: 'Hamburg Towers', goals: 51, icon: Dr },
                    teamTwo: { name: 'HNT', goals: 52, icon: Dr },
                  },
                ],
              },
            ],
            n = [
              {
                name: '\u0418\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u043e\u043f',
                teams: [
                  { icon: Dr, rate: '5', name: 'HNT' },
                  {
                    icon: Dr,
                    rate: '5',
                    name: '\u0418\u043d\u0442\u0435\u0440',
                  },
                  { icon: Dr, rate: '5', name: 'Hamburg Towers' },
                  { icon: Dr, rate: '5', name: 'gogi' },
                  { icon: Dr, rate: '5', name: 'Dinamo' },
                  { icon: Dr, rate: '5', name: 'Io' },
                  { icon: Dr, rate: '5', name: 'Earth Spirit' },
                ],
              },
              {
                name: '\u0423\u0433\u043b\u043e\u0432\u044b\u0435',
                teams: [
                  { icon: Dr, rate: '5', name: 'HNT' },
                  {
                    icon: Dr,
                    rate: '5',
                    name: '\u0418\u043d\u0442\u0435\u0440',
                  },
                  { icon: Dr, rate: '5', name: 'Hamburg Towers' },
                  { icon: Dr, rate: '5', name: 'gogi' },
                  { icon: Dr, rate: '5', name: 'Dinamo' },
                  { icon: Dr, rate: '5', name: 'Io' },
                  { icon: Dr, rate: '5', name: 'Earth Spirit' },
                ],
              },
              {
                name: '\u0416\u0435\u043b\u0442\u044b\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438',
                teams: [
                  { icon: Br, rate: '5', name: 'HNT' },
                  {
                    icon: Br,
                    rate: '5',
                    name: '\u0418\u043d\u0442\u0435\u0440',
                  },
                  { icon: Br, rate: '5', name: 'Hamburg Towers' },
                  { icon: Br, rate: '5', name: 'gogi' },
                  { icon: Br, rate: '5', name: 'Dinamo' },
                  { icon: Br, rate: '5', name: 'Io' },
                  { icon: Br, rate: '5', name: 'Earth Spirit' },
                ],
              },
              {
                name: '\u0444\u043e\u043b\u044b',
                teams: [
                  { icon: Br, rate: '5', name: 'HNT' },
                  {
                    icon: Br,
                    rate: '5',
                    name: '\u0418\u043d\u0442\u0435\u0440',
                  },
                  { icon: Br, rate: '5', name: 'Hamburg Towers' },
                  { icon: Br, rate: '5', name: 'gogi' },
                  { icon: Br, rate: '5', name: 'Dinamo' },
                  { icon: Br, rate: '5', name: 'Io' },
                  { icon: Br, rate: '5', name: 'Earth Spirit' },
                ],
              },
            ],
            r = s((0, t.useState)(!1), 2),
            a = r[0],
            o = r[1],
            l = s((0, t.useState)(''), 2),
            i = l[0],
            u = l[1],
            c = (0, t.useRef)(null),
            d = s((0, t.useState)([]), 2),
            p = d[0],
            m = d[1]
          return (
            (0, t.useEffect)(
              function () {
                m(
                  i
                    ? e.filter(function (e) {
                        return (e.matches = e.matches.filter(function (e) {
                          return e.date === i
                        }))
                      })
                    : e,
                )
              },
              [i],
            ),
            (0, tt.jsxs)('div', {
              className: 'w-full',
              children: [
                (0, tt.jsxs)('div', {
                  className:
                    'flex flex-wrap justify-between  gap-y-2 gap-x-1 items-center',
                  children: [
                    (0, tt.jsxs)('div', {
                      className: 'overflow-auto flex space-x-2 ',
                      children: [
                        (0, tt.jsx)(Hr, {
                          text: '\u0432\u0441\u0435',
                          small: !0,
                          click: function () {
                            return u(null)
                          },
                        }),
                        (0, tt.jsx)(Hr, {
                          text: 'LIVE',
                          small: !0,
                          click: function () {
                            return u('live')
                          },
                        }),
                        (0, tt.jsx)(Hr, {
                          text: '\u041f\u0440\u0435\u043c\u0430\u0442\u0447',
                          small: !0,
                        }),
                        (0, tt.jsx)(Hr, {
                          text: '\u0437\u0410\u0412\u0415\u0420\u0428\u0415\u041d\u041d\u042b\u0415',
                          small: !0,
                          click: function () {
                            return u('end')
                          },
                        }),
                        (0, tt.jsx)(Hr, {
                          text: '\u041a\u044d\u0444\u044b',
                          small: !0,
                          class: 'sm:hidden',
                          click: function () {
                            return o(!a)
                          },
                        }),
                      ],
                    }),
                    (0, tt.jsxs)('label', {
                      className: 'sm:w-full relative',
                      children: [
                        (0, tt.jsx)('input', {
                          type: 'date',
                          onChange: function (e) {
                            u(e.target.value)
                          },
                          ref: c,
                          className:
                            'rounded-[4px] sm:w-full z-50 border border-gray px-3 py-[2px] dark:bg-dMBlackBlueBg dark:text-dMWhite',
                        }),
                        (0, tt.jsxs)('svg', {
                          className:
                            'absolute right-2 top-1/2 translate-y-[-50%]',
                          width: '20',
                          height: '20',
                          viewBox: '0 0 20 20',
                          fill: 'none',
                          xmlns: 'http://www.w3.org/2000/svg',
                          children: [
                            (0, tt.jsx)('path', {
                              d: 'M14.1667 1.6665V5.83317',
                              stroke: '#929EAA',
                              strokeWidth: '1.5',
                            }),
                            (0, tt.jsx)('path', {
                              d: 'M6.29639 1.6665V5.83317',
                              stroke: '#929EAA',
                              strokeWidth: '1.5',
                            }),
                            (0, tt.jsx)('rect', {
                              x: '2.41675',
                              y: '4.26855',
                              width: '15.1667',
                              height: '13.3148',
                              rx: '1.25',
                              stroke: '#929EAA',
                              strokeWidth: '1.5',
                            }),
                            (0, tt.jsx)('circle', {
                              cx: '10.0001',
                              cy: '8.14809',
                              r: '0.5',
                              stroke: '#929EAA',
                              strokeWidth: '0.851851',
                            }),
                            (0, tt.jsx)('circle', {
                              cx: '13.7038',
                              cy: '8.14809',
                              r: '0.5',
                              stroke: '#929EAA',
                              strokeWidth: '0.851851',
                            }),
                            (0, tt.jsx)('circle', {
                              cx: '10.0001',
                              cy: '11.3888',
                              r: '0.5',
                              stroke: '#929EAA',
                              strokeWidth: '0.851851',
                            }),
                            (0, tt.jsx)('mask', {
                              id: 'path-7-inside-1_2739_39167',
                              fill: 'white',
                              children: (0, tt.jsx)('ellipse', {
                                cx: '6.29629',
                                cy: '11.3888',
                                rx: '0.925926',
                                ry: '0.925926',
                              }),
                            }),
                            (0, tt.jsx)('path', {
                              d: 'M6.22221 11.3888C6.22221 11.3479 6.25538 11.3147 6.29629 11.3147V13.3147C7.35995 13.3147 8.22221 12.4525 8.22221 11.3888H6.22221ZM6.29629 11.3147C6.3372 11.3147 6.37036 11.3479 6.37036 11.3888H4.37036C4.37036 12.4525 5.23263 13.3147 6.29629 13.3147V11.3147ZM6.37036 11.3888C6.37036 11.4297 6.3372 11.4629 6.29629 11.4629V9.46289C5.23263 9.46289 4.37036 10.3252 4.37036 11.3888H6.37036ZM6.29629 11.4629C6.25538 11.4629 6.22221 11.4297 6.22221 11.3888H8.22221C8.22221 10.3252 7.35995 9.46289 6.29629 9.46289V11.4629Z',
                              fill: '#929EAA',
                              mask: 'url(#path-7-inside-1_2739_39167)',
                            }),
                            (0, tt.jsx)('circle', {
                              cx: '13.7038',
                              cy: '11.3888',
                              r: '0.5',
                              stroke: '#929EAA',
                              strokeWidth: '0.851851',
                            }),
                            (0, tt.jsx)('circle', {
                              cx: '10.0001',
                              cy: '14.6295',
                              r: '0.5',
                              stroke: '#929EAA',
                              strokeWidth: '0.851851',
                            }),
                            (0, tt.jsx)('mask', {
                              id: 'path-11-inside-2_2739_39167',
                              fill: 'white',
                              children: (0, tt.jsx)('ellipse', {
                                cx: '6.29629',
                                cy: '14.6295',
                                rx: '0.925926',
                                ry: '0.925926',
                              }),
                            }),
                            (0, tt.jsx)('path', {
                              d: 'M6.22221 14.6295C6.22221 14.5886 6.25538 14.5555 6.29629 14.5555V16.5555C7.35995 16.5555 8.22221 15.6932 8.22221 14.6295H6.22221ZM6.29629 14.5555C6.3372 14.5555 6.37036 14.5886 6.37036 14.6295H4.37036C4.37036 15.6932 5.23263 16.5555 6.29629 16.5555V14.5555ZM6.37036 14.6295C6.37036 14.6704 6.3372 14.7036 6.29629 14.7036V12.7036C5.23263 12.7036 4.37036 13.5659 4.37036 14.6295H6.37036ZM6.29629 14.7036C6.25538 14.7036 6.22221 14.6704 6.22221 14.6295H8.22221C8.22221 13.5659 7.35995 12.7036 6.29629 12.7036V14.7036Z',
                              fill: '#929EAA',
                              mask: 'url(#path-11-inside-2_2739_39167)',
                            }),
                            (0, tt.jsx)('circle', {
                              cx: '13.7038',
                              cy: '14.6295',
                              r: '0.5',
                              stroke: '#929EAA',
                              strokeWidth: '0.851851',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, tt.jsx)('ul', {
                  className: 'text-darkBlue dark:text-dMWhite ',
                  children:
                    p.length > 0
                      ? p.map(function (e, t) {
                          return e.matches.length
                            ? (0, tt.jsxs)(
                                'li',
                                {
                                  className: ''.concat(
                                    e.matches.length ? 'block' : 'hidden',
                                    ' mt-3',
                                  ),
                                  children: [
                                    (0, tt.jsxs)('div', {
                                      className:
                                        'cursor-pointer rounded-[4px] bg-blueLight  dark:bg-dMBlue flex items-center gap-x-2 py-2 px-3',
                                      onClick: function () {
                                        ;(e.isOpen = !e.isOpen), m(f(p))
                                      },
                                      children: [
                                        (0, tt.jsx)('div', {
                                          onClick: function (e) {
                                            return e.stopPropagation()
                                          },
                                          children: (0, tt.jsx)('img', {
                                            src: e.fav ? Bt : Dt,
                                            className: 'z-auto',
                                            onClick: function () {
                                              ;(e.fav = !e.fav), m(f(p))
                                            },
                                            alt: 'fav',
                                          }),
                                        }),
                                        (0, tt.jsx)('img', {
                                          src: e.icon,
                                          alt: 'flag',
                                        }),
                                        (0, tt.jsxs)('p', {
                                          className:
                                            'font-bold text-sm uppercase',
                                          children: [e.country, ': ', e.league],
                                        }),
                                        a
                                          ? (0, tt.jsxs)('div', {
                                              className:
                                                'text-sm font-bold ml-auto  space-x-14 mr-[10px]',
                                              children: [
                                                (0, tt.jsx)('span', {
                                                  children: '1',
                                                }),
                                                (0, tt.jsx)('span', {
                                                  children: 'X',
                                                }),
                                                (0, tt.jsx)('span', {
                                                  children: '2',
                                                }),
                                              ],
                                            })
                                          : null,
                                        (0, tt.jsx)('svg', {
                                          className: ''
                                            .concat(
                                              e.isOpen
                                                ? 'rotate-0'
                                                : 'rotate-180',
                                              ' ',
                                            )
                                            .concat(
                                              a ? '' : 'ml-auto',
                                              ' duration-200',
                                            ),
                                          width: '10',
                                          height: '7',
                                          viewBox: '0 0 10 7',
                                          fill: 'none',
                                          xmlns: 'http://www.w3.org/2000/svg',
                                          children: (0, tt.jsx)('path', {
                                            d: 'M9 6L5 2L1 6',
                                            className:
                                              'stroke-[#627080] dark:stroke-[#E9E9F3]',
                                            strokeWidth: '1.5',
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, tt.jsx)('ul', {
                                      className: ''.concat(
                                        e.isOpen ? 'block' : 'hidden',
                                      ),
                                      children: e.matches.map(function (t, n) {
                                        return (0, tt.jsxs)(
                                          'li',
                                          {
                                            className: ''.concat(
                                              e.matches.length === n + 1
                                                ? 'border-0'
                                                : 'border-b',
                                              ' dark:border-[#2F3340] border-[#E4E7EC] flex items-center mx-2 py-2',
                                            ),
                                            children: [
                                              (0, tt.jsx)('img', {
                                                src: t.fav ? Bt : Dt,
                                                className:
                                                  ' cursor-pointer z-50',
                                                onClick: function () {
                                                  ;(t.fav = !t.fav), m(f(p))
                                                },
                                                alt: 'fav',
                                              }),
                                              (0, tt.jsx)('p', {
                                                className:
                                                  'ml-5 mr-10 sm:ml-1 sm:mr-4',
                                                children: t.time,
                                              }),
                                              (0, tt.jsxs)('ul', {
                                                className: 'w-full '
                                                  .concat(
                                                    a || 'live' === t.date
                                                      ? 'mr-[2%]'
                                                      : 'mr-[7.5%]',
                                                    ' ',
                                                  )
                                                  .concat(
                                                    a
                                                      ? 'border-0 '
                                                      : 'border-r pr-5',
                                                    '  dark:border-[#2F3340] border-[#E4E7EC]',
                                                  ),
                                                children: [
                                                  (0, tt.jsxs)('li', {
                                                    className:
                                                      'flex items-center',
                                                    children: [
                                                      (0, tt.jsx)('img', {
                                                        src: t.teamOne.icon,
                                                        alt: 'icon',
                                                      }),
                                                      (0, tt.jsx)('p', {
                                                        className:
                                                          'ml-2 md:ml-1',
                                                        children:
                                                          t.teamOne.name,
                                                      }),
                                                      a && t.teamOne.coef
                                                        ? (0, tt.jsx)('div', {
                                                            className:
                                                              'sm:hidden flex ml-auto gap-x-4',
                                                            children:
                                                              t.teamOne.coef.map(
                                                                function (
                                                                  e,
                                                                  t,
                                                                ) {
                                                                  return (0,
                                                                  tt.jsxs)(
                                                                    'p',
                                                                    {
                                                                      className:
                                                                        'flex gap-x-1 items-center',
                                                                      children:
                                                                        [
                                                                          (0,
                                                                          tt.jsx)(
                                                                            'img',
                                                                            {
                                                                              src:
                                                                                'top' ===
                                                                                e.type
                                                                                  ? Wr
                                                                                  : Ur,
                                                                              alt: e.type,
                                                                            },
                                                                          ),
                                                                          ' ',
                                                                          e.num,
                                                                        ],
                                                                    },
                                                                    t,
                                                                  )
                                                                },
                                                              ),
                                                          })
                                                        : (0, tt.jsx)('p', {
                                                            className:
                                                              'ml-auto',
                                                            children:
                                                              t.teamOne.goals,
                                                          }),
                                                    ],
                                                  }),
                                                  (0, tt.jsxs)('li', {
                                                    className:
                                                      'flex items-center mt-2',
                                                    children: [
                                                      (0, tt.jsx)('img', {
                                                        src: t.teamTwo.icon,
                                                        alt: 'icon',
                                                      }),
                                                      (0, tt.jsx)('p', {
                                                        className:
                                                          'ml-2 md:ml-1',
                                                        children:
                                                          t.teamTwo.name,
                                                      }),
                                                      (0, tt.jsx)('p', {
                                                        className: 'ml-auto',
                                                        children:
                                                          t.teamTwo.goals,
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              'live' === t.date
                                                ? (0, tt.jsx)('div', {
                                                    className: 'mr-[2%]',
                                                    children: 'LIVE',
                                                  })
                                                : null,
                                            ],
                                          },
                                          t.teamOne.name + t.teamTwo.name + n,
                                        )
                                      }),
                                    }),
                                  ],
                                },
                                e.country + t,
                              )
                            : null
                        })
                      : (0, tt.jsx)('p', {
                          className:
                            'text-3xl uppercase mt-3 text-center text-bold text-darkBlue dark:text-dMWhite',
                          children:
                            '\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e',
                        }),
                }),
                (0, tt.jsxs)('div', {
                  className: 'mx-auto sm:max-w-full max-w-[90%] my-12',
                  children: [
                    (0, tt.jsx)('h1', {
                      className:
                        'text-darkBlue dark:text-dMWhite max-w-[300px] sm:text-base font-bold text-2xl',
                      children:
                        '\u0411\u0443\u043a\u043c\u0435\u043a\u0435\u0440\u0441\u043a\u0430\u044f \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f Stavmatic',
                    }),
                    (0, tt.jsx)('p', {
                      className:
                        'mt-4 dark:text-dMGray sm:mt-2 text-gray text-xs',
                      children:
                        '\u041f\u0440\u043e\u0435\u043a\u0442 Betonmobile \u043d\u0430\u0446\u0435\u043b\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0438 \u0434\u043e\u043b\u0433\u043e\u0441\u0440\u043e\u0447\u043d\u043e\u0435 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c\u0438. \u041d\u0438\u043a\u0442\u043e \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0434\u0430\u0442\u044c \u043f\u0440\u043e\u0433\u043d\u043e\u0437 \u0441 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0435\u0439, \u043d\u043e \u0435\u0441\u043b\u0438 \u0433\u0440\u0430\u043c\u043e\u0442\u043d\u043e \u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u044c \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u044f\u043c \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u0430, \u0442\u043e \u043f\u043e \u0438\u0442\u043e\u0433\u0443 \u043c\u0435\u0441\u044f\u0446\u0430 \u0441 \u0432\u044b\u0441\u043e\u043a\u043e\u0439 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c\u044e \u0431\u0435\u0442\u0442\u043e\u0440 \u043e\u043a\u0430\u0436\u0435\u0442\u0441\u044f \u0432 \u043f\u043b\u044e\u0441\u0435. \u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 \u0442\u0440\u0443\u0434\u0438\u0442\u0441\u044f \u0446\u0435\u043b\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430, \u0441\u0447\u0438\u0442\u0430\u044e\u0449\u0430\u044f \u0441\u0432\u043e\u0435\u0439 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u043e\u0431\u044f\u0437\u0430\u043d\u043d\u043e\u0441\u0442\u044c\u044e, \u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043e\u0431\u0437\u043e\u0440\u044b \u043c\u0430\u0442\u0447\u0435\u0439... \u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c',
                    }),
                  ],
                }),
                (0, tt.jsxs)('div', {
                  children: [
                    (0, tt.jsx)('h1', {
                      className:
                        'text-darkBlue dark:text-dMWhite sm:text-base font-bold text-2xl',
                      children:
                        '\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0422\u041e\u041f-\u043a\u043e\u043c\u0430\u043d\u0434',
                    }),
                    (0, tt.jsx)('div', {
                      className: 'flex flex-wrap mt-4 gap-6',
                      children: n.map(function (e) {
                        return (0, tt.jsxs)(
                          'ul',
                          {
                            className: 'md:w-full w-[45%]',
                            children: [
                              (0, tt.jsx)('li', {
                                className:
                                  'text-black dark:text-dMWhite  dark:bg-dMBlue uppercase font-semibold text-sm py-2 px-20 bg-blueLight rounded-[4px] text-center',
                                children: e.name,
                              }),
                              e.teams.map(function (e) {
                                return (0,
                                tt.jsxs)('li', { className: 'text-sm px-3 mt-2 dark:text-dMWhite text-darkBlue flex items-center  gap-x-2', children: [(0, tt.jsx)('img', { src: e.icon, alt: 'icon' }), (0, tt.jsx)('p', { children: e.name }), (0, tt.jsx)('p', { className: 'ml-auto', children: e.rate })] }, e.name)
                              }),
                            ],
                          },
                          e.name,
                        )
                      }),
                    }),
                  ],
                }),
              ],
            })
          )
        }
      var Qr = n.p + 'static/media/IXbET.f954cdd14e8ae1b244c4ce1675f14453.svg',
        Kr =
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAABjCAYAAAAhBD14AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABebSURBVHgB7Z1/bFTXlcfP+CdgsE2TQLawNgnbH4HYKatdyWRD05UStiGwSiW0SWqkdvkjsHX/oGkSN0TLH3RLAk2baFVY4A+aqribVZBKhZNUCVLTwBqk1S7FLm5WKQS7pOVXwMbY+MfY0/u9M2d85/m98ZuZ98bz5p2PNLI977777jz7fn3OufedEyHFkl+9siQ2i35ME/QFilAtCYJQ/ETIP2IeXidChyMx+tb5ld86H9FiVUGnttQ11W68cwVVl1WSIAjBZiQWpaHxKI1ORGlwYkx9P0ajsXGKxibIb+6tWkBzSsr19+Pqel1Dl9U4xikbMPb3rp+nn1z6TZ8SrRVlsdn0yra6B2s3/sUKEgQheERjMRoYH6Eb0REtSvg+H8JkR92smqRYgdJICS2dNZ9+N3SVsqFK9fXobZ9Rgjta+8aV7h+XKTfwsfV3LCNBEILBkLI6BpQ4wfoYGB+lEWVFFQJ3VsylO8vnTnl/XmmlOlZFF0cHKVvW3PZZeuNq9xfK8IO4gYJQuMC96xsbphtKnGbSekpHRUkpfbqi2vH4InXsWnQ4a9ewqrQccbHaMhIEoaCAi9cXvaUEakR9HS5IgTKB23fPnDuoLBJJ2yYX15ARwRKEAoCtqOvRYS1UQWJR5TyqjJRO2w6u4fyyWfozZosIliDMEBCpq6O34gHzgIkUc3v5HNu4lRN3KyvrN4OX9OphNohgCUIeKQaRYhC3WlRZndE5cA1hkfUO91M2iGAJgs8gJvXJ2GAg3b10fHb2ba5cQSuwyOKLCJnfCxEsQfAJWFEXR2/qrQeFHjjPFFhJ5n6rTLlLuYanBy9SpohgCYKHwJq6pETq0tjNohMpRruCFZm5glYqdR/z6OPRgYzOE8ESBA9gayqXFbCggC0MXoCNpleiQxntzRLBEoQcuDo2pF/FFJtKh9stDG5AAL6+soY+vHXN9TkiWIKQIWFw++zwwhW0Mr9sNlWXVroWfBEsQXBJWIWK8coVtJJJAL4gBQtPnV8YvaG/LlM3ye2zjhdGbugXyOQ887rdQ1emvJ9NX0LxEHahAl66glYQgHf7cLRvgoXJ3/g//+F4fHFlNR3/641Tztl+/tf0zvWz+nsGgvHyZ1brr3acvHGBXv3DSf3VBFkotvxlk76WG3DdZ37/ju2xTPsSgo8IVRw/XEEr6P/K2K1pd8D7JlhW8ZgOWEZPnDmUtJDYomGrZ83pNtr/uXW0+lNLU85759pZeur/jyR/xnksdoeudOtxvNXYnJGFhESGq29bmrw+rpFtX0LwEKFKxS9X0MTtDnjfBKt7MO5aQWC2LXlw2vawkCBWEAMIU1P1Yv0+3oMgob9nzr5Dx6s3JgUDx2CRAasVBoHBMbTBeejTLcuq7khenz8D9wnxWr9A8ocVIyJUU/HTFbSCHfBXR4d0vi8nSsgn2MLCxIcbZfdiICoQA7Ct/sEUsUC715etT1pO3I6vgXPRZv/n16W4jHDhXl66Wn8PkTFdzGxoqpkUUKH4gFB1qsDvxyp2KmIVB67gwvJ5lE/qZ9WkPe6bYHHwGtYKJjlEAwJjJxwsbhAlO+tFv5/Iiop+mEOX4+LFomgFlhFbY6bQCQKDDZ+/HbxMPSP9IlQWFqu4UrocV36AFDTY5uCELy4h3DcWJrtg+JbFTTqAbbYHy9L4yhA+3dZYxePvTYvMStO8xTqYfmE4N8soKY41i0kIPiMT4/TR8PXQbPjMFKSNwWsmQF54/BOxwxfBMt0miAqsI6gmvtcrehdO6j8Ujm2xuKVbgeNjpoWWPG+W83nJ4H2aP0wdWFeidrI/LqxaYCOTxyBWGDsKdaQTR6HwkTjV9MQD4DO3Go6HqiGWeILAii+CxRaVjj8tX58iRBArWF0H/nRKu2yFIAAQM3M7A9xH04WE6MEihGUoBBe4f+eUVTWSZV7xsIA9UfkKtDuBR3bwXKZ1m4MvggXLyWllEJMeYqW3KyhXEILlxgqybnfg7/UmU7h71dOcl8YvxjEIKywsCCpva0D/OCZ7r4INrKqPhq+F4sHkXMnHnis3wMq7s7xqSjYHX4LusLCcAuzA6t7xz+n2brG7Zsa5+HuOgdlhBv+dgDDpwH3CteRtDehfxCrY8OqfiJU7FheAWDHI5gDhMvFcsCBC2ACKl93KHCyeZJA9ISK8AsibNO3OYTEzayiyO3noaretOOL6/H66YDn6X3Li1aRbiH1b+BkvfA4heMDt+2Doqqz+ZcBMBtrtYCvLxHOXkK0VDq7DpeKtCrB2nvkwLgqwXFiwcA7iWRAriMW26INTzuH9VqbwIAh+4OKppEhiL5ZprfGmUohcOkvJySXksQnu0Jt0lejjd5brvjchOPDmcD+8EVhZF8cGk7GsSH3HK7HzK7eQl1gfswH4MObP+IAQHAZ/4Gs621LamI/ZALtHc2BFmQFz85Eevq418O8E94UNp7KbPTPwe8PvT4QqnGDe4bE1P0QLq4VYLPmnM2/4E8NikTDdNxYiWF84ZooVwAe2npN05xLnWMUKoD2OsbWGc/DizaZ+3UQhle0f/VrEKsTgd++UOCBX4KZiMQD4YmFZMbc5uBEPM82L23PM8yBWCB6KO5c/EO8Twg3mW+ff/gv5Aaysv/nf/fnJh5XpXiuOg2VKtucJgpA7flrYvBjg27OEgiAInhITwRIEIUCIYAmCEBhEsARBCAwiWIIgBAYRLEEQAoMIliAIgUEESxCEwCCCJQhCYJBS9ULBwAkTnUCCR7vd1PyEg07maFT/tsPpMS+zb7txOF3b7BfPs/LjYXZtM7m23fX4mDWpwHR9umkTFESwhIJh9fyl9PJfrXY8bpeZAxlsrQ/Sc01K62SEoOBheDvQL+dvQ+JGPFBvBemPuNYlAzHAmK2PhHEqcBNrpfNkW9UO7c1rWz8rQAk8ZBFBJhQ8n2tXPd2uT6dsJegjaPneRLCEgkNX2e6fzD4LYbJLuc0TGBMPhUJ07rWFy5JFT8yK4LqfhNUE4eFEkRAap1RCZjtkCuGyceYkZzEwx7Dx0yu0kEIwkQ7cBNbXgT9a3kuTMdcNbvu0CmAQKwYVvGD19w9SX99Nqq2dSzU1VRRkenou6a+96ivKvT2wqpGEqUCszGy1EASrYLHQcO41BgkdORURJ5JkOHsHJrPZv5Ngme3wFZkIuAYBxIgTQ1qtIVRggiUH0TKz3gJrMWAvcNtnMdTmLPige2fnWbp32ddp949+TkGl7eBRWrxovf4ceK15pJU2PfVDErKHc6NZ3S7ANSSt+dPYwsq2erdZExOw0FmtKK5krjPpzp86Bogev4TMEJfQZ3p7L9HmTT+gVasaqHnDw/q9uvqF1NiwlITsSSc+ZiVxu3OyCTSzwOB6ZoAc2Llf/J41doQ4mhkfQ38QPKvoQeis8SmnBQmMy9oW7rB1XNY2SLoIazBIeC5YbQffpWPvd9E3vvkYNTberV261mf3qUm6gLa+sEG3aT9yQr/MNnt+dJiOHevUbt/adSuTk9sOiMBu1b6r85xte+4P1hmwHt+srJsGdd3G++7W7cDO72/SX3f8W5vuv3nDQxn16cSO7x2kurqF9NYvd6lzz1G/cm8bG5dOcW9x33BPcB2MrUXdG5xn3lOMkc/jz7DuH1fqMa/6YkPKeFqf26euNUh79z+tf8a9bfvpUf3ZIJhbX2hO9h9k7OIwTqtiXBXJbexG16I0KpRDqLhOAGABsabyTgesNAgFjxP9w92FuJjuK8ZorSJllsQzMYu0pMPaRmJYCdra3o0LgnrpiaJ+Bi3f/IqecHt2x8UJExAT6JEvt+qJvHbtSvV+F7W3n9CTDYJmhdsjDoT+ERcy21uP96n3cby35zI9/0Jzcnx1xxYqcbhJ9WryQkg6u87pY7VqfPgZ47PrE5ZSnxKVzZt+mNKnE+gLwrhcuYK9iRgWBOM/X9+mxwe+o8Rlt7on+JnvD8bccWK3/jl+D4/qa7Fg4TOs6m3Qwtbe3qFfa9fdr49jvOgDYwUQwief2K6P6d/J+510/5EOLaI8hqBhpty2WhIsWLpepQGn0ba6dk7ocnWJ4L+OE1mqM+G6ejuDWtmzExduY4LzrW15ldF8H99bg+ROtQa4+Md0+JXCOJ94HsPCpAFvqgkH2tXE4El27NjpxNdOPZnwPiwQTOS3f7lTWQPfpjO/e00da6QdOw7a9s/t9+57mv5bTeiOk/FJvXvP4ZTjL+3apI+b/XHQm4EgoA2sJZzzjZbH9M9vqbHwOOOf4USyT0xynMd9wiJKB87D+RDj33a/pscNcV7z5ef0ubASWazi196lhQnnuY3bQVTRV+fpuPUHQQJscbW27tP3qCPRP6wuthiDCk9ubGkwLSq2WoA1cM+i4NYa4ipKeHF1JhPu37TC+FqIn2nLZyC95ZOsRRBAa2cm8NzCwsTAZGbXCRYGRAzCBbempmaufp9XyDoTbt0RNanxYjChrAIDMPnRnicjvr/wx8lVIvQHWlomrbNH1zVp8cGrvj5+Xr1yUWHpgIaGu3W/jQ1xa6M+4SrBAuNr6p+V0EAQ+br6ekokYKXBgjJ5fmuzdoHxOdB2565Nies+HLeYVCAeovR+QsS/2jzpzrW0fIVe/F6btrLYjQawxPj+meB+v0jx9qu+2Kj7BrjvEERcB4LJnxftBwbfpiCjy8ipgDvEAjEh3n6gtzQotwnHTCts212Tq4xYvWNYMJIC48K1YnBNtOcYkt7WkCh+oseghM4qclpQE9fHtfm6dvU43WL2ycCKtPZpbcOLA0HCF5fwARVPiU/Kd/WEiYtHTE8oxLLAqoRgsYXSa4hTXd0Cam5+yNF6qamd63htu3NqE5McLl4umGPUoqnGiLHgBYEygXBwO+t4OXaE7Ro8ppraqpS+7ejqsv+jxr3EC/cbAod7D0E3+7ETuqCjBUFZJrCyePMox5nMIDZX8ebv7VbnIBzWOJIbsKUCMSiIFFtaEItXz560FSHTAmT3EK5atiuX1j4ZCNEUwbK00XvHRLAm/+Pv3v2L5M8A//l/pl6YsDyhYc10qom78/ubkxMMMZhYjLTlwm4Zg4A13tPB48TE37FDBcrPX9KuDvqDsEAoGxLxGe4j23iNFtlj8Rgc92mOEZiWkN142dICXRwvU0LG53clLENzvPWWoPibb+9Ktp9X9UjKMf4ngWA7WLuuKTH2ePtjxyfvIy+EcHC/UMDkcaoW7lSVh1fYknGrNBOfd4hb4TJyDNpkUgUIAonXdGNw02e6a6PIMF5Muvti8sD/HaBiwZd9WBAoTM4u5RZiUmDScGwLLhuLFcBqHCbQ5qd+oGMvsBIQ4F6jXnagPUAbtIWb9CLctEj8OAfBn1BBZrhycK3aLCKZKex+ok+MEf3i+n+3siXF6ko3XnwenIvx4nzcF7xwXzA2BMkRU8IxBPTjn2UDuQVuJMA9QX9r18bvN34PeuGg55LuF8exzQJB+9raYG/ENZnuGcJ8UAhjKHZ824eFQDaEgq0rjm1xwJ2BGPQoawVL7thQCXCcYz5WuD0mN09stN+acMlwDZyLbQ9YGePje/d9m7IFfSJYvkOJH48RooCFArZgnDDHa34+Hg/uC/rBWBEc5/cQ4M/EIky5vxZh3rp1g46/Qazw0iKm3HQ32zKKAY53OYkJ3sfxTN1BIf/kpZCqWzjIXl/vbn8Q2iM+VeNgKUx3PBsyHWMm40E8qy+x1SIbtOWk/km89fZOW2uS+/f6ngAppCoAP7UEf2MFtdM904k6XftsJ75ffU53LkQkGyGBG6k3nmJRI43rm23/glAoSAK/IgBbSLCCuHZtk3YvBaFYkWcJiwCsUG7NIEAvCEFFLCxBEAKDCJYgCIFBBEsQhMAggiUIQmAQwRI8wS5PkyB4jQiW4An8cLEQXqwpqf1ABEvwBCShEysrvDhVNvKawAgWsiNgN3ch0TPNg89hApkKUCkmH/9lhcKBi9jid++UmtpLArNx9MiRDp15gdMAe43eLd55zvUDwch+gAo4yCLqxyNAQQR/sPs/t4684uORAfp4NHzZDypLSmlRRTXdXj6HhFQCY2EhfcqZ7p/4VpsQYlVoFlxYicZi9NFwXyjFCoxMjNO54et0evAiXR0bImESXwQLSeRggcAiQh4oXbChN9V9QhoUVH6xO84P8yJH1JOPb9diAgvIzPOOc/H8HK61JpEbC+CaOMfummiDY2Z7vt7Bg0d1ri70yznReZx25zB/UNfgMehKNWlyvPOY8fXJJ76r30PyQfN63K43pO4mJusHQ1foylhu2WGLARGuqfgiWMgagAkZi8QSCexi8aozCQGB+GCCI3MAksvh6/1NLcnJjuPIDYU88MirBasKx9rbJ3O+IwFd67P7dW52ZNeEWCCnFNKn4BwkD9xsFCtF4rwd2qVcqa8JMeTsnOgj/lqoy2Wxi/fijrj4xUtoPaTPsSYWbH1ucgy6Os3j2x3vC8b85OPfpbolC/SDyuC4Eqseq7CqdmGMjw1NjNEHt67or8IkIlyT+BbDQjZNJI4DiAthoh/8aTznOPIxoTINJ/dDgYR2XYSigzZwcYnqubrCC2Od1PF+J2sH9vRc1lYJJ/5D32ZhiEchVC2PpSTcg2ChfUPjUt0e55sxrIPKokKiPYicHqeKn7U+uzfFinpp51PJdC7oJ51gAeR+D0vivEzAROwd6Vfu4AQJ9rBwwVUOa4zLN8FCgQYTVK55M1F9BqKBwgy6fFbvxaTYmLCYpcMsBKqLPaQptID+YLXArcPX48e60rpd8bqEN5NixddAKTKAY/xZGORgn67sVzEUL/WasAbXs4WFa05JBc0pDVfClbwF3WsNMYFQLV/2NeVi/VyLlVlyyy/gEiIHO8eLULRhOtJV5xFyJ+zB9VypUKuJYcM3ebYWm4iXoY8LAGJBzc0Pp+Rt5wo7fqCLkqprnul+bbKKjBoPKvs4wdV3zGo3+jwleI33ebvXyCw/Np2FVizASvjw1icSr8qS6tJKKotEKGz4ZmH9rO1oMsgOcUDAnN0rlM0yJyYEzM9VMbaUOJCNa2M10QpElscMYYMbqVc8E+9hnFh9dLu1Au3trmOCWN+ePYf1NTCu7yQWAooZCa7nTlj3aPkmWF9VAfFH/qFVb65EIPp5FYDnYDOC8bBUFi9ar19YFfTTJYTAoPwXqtZgPHANG+5LrUiDgDosp+X3fF1X3AG6rLxadcR7GCeqPr/+X//q+rp6IaG9I20bnSk0Rvoay+/5Gt2bZe3EoIDg+gdDV7WFJWTPvJA+BuVL1Ryszu3d+7R2CdNVismlAk02uKkagzbWY7lUs7Hrz6kdKOYiERJc9wa4g5+fczuFjbxUzUk3yfP9SIubqjF2x3OpNuP2vGKvZoPgumwG9YbaslkUVnwRrPq6BSQIQILr3jO/fDaFFV8Ey9zwKYQX/ZiNCq5LvMo7sJWhMhK+7QyMlPkSfGFgfERZVtdk57rHfKo0vNYVEMESPOfS6E3qGeknwXvml4c3fgVEsARPkZVA/yiNlNC80nBndRXBEjxDVgL9pTrkYgVEsIScwTOBv1crgTdU3Erwj/kh3s7AiGAJOSErgfkjrLvbTUSwhKzB3irssRKx8h+4g2HezsCIYAlZcT06rGJW12XbQp6YV1pBggiWkAWybSH/SM3HOCJYQkbItoX8g93tYd/OwIhgCa7pHe6ni2M3ScgvVSXiDjIlJTRBN6KyHC2kB3usRKxmBtnOQEmNKqmIjdOBP50iQXACq4GyIXTmCMp2BuzHG/BpL96hK91UFRulsgWxgb5/v9BRi6De+juWSXBPmMLoRJSEmWFOSXkgtjNAqFDJB1tcsAXjrtnzPRk3LCsYVEqjaFHsJkW+dPz5X41T2Zc+KamiQRKxEhwIX72DwiBGhY/T34YHY0fIqpKidPvETRVwH/uFesX+uax84tTCiRu1JAg2jETKaCImijUTVMaiatIWpmpNKKUaVVZULM3fRqlqVa7CTjn/9cSoT92KLSXv/f1L52Nj4yvUNQ+TINgwIebVjFGoYjWmhAr/yGLT/G2Mq0+AdtFs690ooVIm3Hux6MQKaNWfAUusg7yUVgJfAAAAAElFTkSuQmCC',
        qr = function () {
          var e = [
              { icon: Qr, name: '1x Bet' },
              { icon: Qr, name: 'Parimatch' },
              { icon: Qr, name: 'Parimatch2' },
            ],
            n = [
              { href: '/', img: Kr },
              { href: '/', img: Kr },
            ],
            r = [
              {
                text: '\u0410\u041f\u041b, \u041b\u0430 \u041b\u0438\u0433\u0430 \u0438 \u0447\u0435\u043c\u043f\u0438\u043e\u043d\u0430\u0442 \u0410\u0432\u0441\u0442\u0440\u0430\u043b\u0438\u0438. \u0413\u0430\u0439\u0434 \u043e \u0442\u043e\u043c, \u043d\u0430 \u0447\u0442\u043e \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0432 \u043f\u0440\u0430\u0437\u0434\u043d\u0438\u043a\u0438',
                date: '06 \u041d\u043e\u044f\u0431\u0440\u044f 15:59',
                type: 'buk',
              },
              {
                text: '\u0424\u0438\u043d\u043b\u044f\u043d\u0434\u0438\u044f \u2014 \u0420\u043e\u0441\u0441\u0438\u044f, \u041a\u0430\u043d\u0430\u0434\u0430 \u2014 \u0421\u0428\u0410. \u041a\u0442\u043e \u0432\u043e\u0437\u044c\u043c\u0435\u0442 \u043c\u0435\u0434\u0430\u043b\u0438 \u041c\u0427\u041c \u043f\u043e \u0445\u043e\u043a\u043a\u0435\u044e?',
                date: '07 \u041d\u043e\u044f\u0431\u0440\u044f 15:59',
                type: 'sport',
              },
              {
                text: '\u0418\u0433\u0440\u043e\u043a "\u0410\u0442\u043b\u0435\u0442\u0438\u043a\u043e" \u0437\u0430\u0431\u0430\u043d\u0435\u043d \u0437\u0430 \u0441\u0442\u0430\u0432\u043a\u0438 \u043d\u0430 10 \u043d\u0435\u0434\u0435\u043b\u044c. \u0415\u0433\u043e \u043e\u0431\u0432\u0438\u043d\u0438\u043b\u0438 \u0432 \u043f\u0430\u0440\u0438 \u043d\u0430 \u0441\u0432\u043e\u0439 \u0436\u0435 \u0442\u0440\u0430\u043d\u0441\u0444\u0435\u0440',
                date: '09 \u041d\u043e\u044f\u0431\u0440\u044f 15:59',
                type: 'sport',
              },
            ],
            a = s((0, t.useState)([]), 2),
            o = a[0],
            l = a[1],
            i = s((0, t.useState)(null), 2),
            u = i[0],
            c = i[1]
          return (
            (0, t.useEffect)(
              function () {
                l(
                  u
                    ? r.filter(function (e) {
                        return e.type === u
                      })
                    : r,
                )
              },
              [u],
            ),
            (0, tt.jsxs)('div', {
              className: 'md:hidden max-w-[300px] ml-auto',
              children: [
                (0, tt.jsxs)('div', {
                  children: [
                    (0, tt.jsx)('h1', {
                      className:
                        'font-bold text-sm mb-3 tracking-wider dark:text-dMWhite  text-darkBlue uppercase',
                      children:
                        '\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u0431\u0443\u043a\u043c\u0435\u043a\u0435\u0440\u0441\u043a\u0438\u0445 \u043a\u043e\u043d\u0442\u043e\u0440',
                    }),
                    (0, tt.jsxs)('ul', {
                      className:
                        'w-full rounded-[4px] border dark:border-[#2F3340] border-[#E4E7EC] p-3',
                      children: [
                        e.map(function (e, t) {
                          return (0,
                          tt.jsxs)('li', { className: 'flex items-center py-1', children: [(0, tt.jsx)('img', { src: e.icon, alt: 'img' }), (0, tt.jsx)('p', { className: 'text-gray dark:text-dMGray ml-2', children: e.name }), (0, tt.jsx)('button', { className: 'ml-auto dark:bg-[#455AA8] p-4 rounded-[4px] bg-blueLight', children: (0, tt.jsx)('svg', { width: '7', height: '10', viewBox: '0 0 7 10', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, tt.jsx)('path', { d: 'M1 1L5 5L1 9', className: 'dark:stroke-dMWhite stroke-blue', strokeWidth: '1.5' }) }) })] }, e.name + t)
                        }),
                        (0, tt.jsx)('button', {
                          className:
                            'rounded-md  py-[10px] mt-4 px-6 w-full text-blue uppercase border dark:border-[#5F657B] border-blueLight font-bold text-sm sm:text-sx md:px-3 md:py-[5px]',
                          children: (0, tt.jsx)(Ye, {
                            to: '/rate',
                            children:
                              '\u0412\u0435\u0441\u044c \u0440\u0435\u0439\u0442\u0438\u043d\u0433',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, tt.jsxs)('div', {
                  children: [
                    (0, tt.jsx)('h1', {
                      className:
                        'mt-5 dark:text-dMWhite font-bold text-sm mb-3 tracking-wider text-darkBlue uppercase',
                      children: '\u0411\u043e\u043d\u0443\u0441\u044b',
                    }),
                    (0, tt.jsx)('ul', {
                      children: n.map(function (e, t) {
                        return (0,
                        tt.jsx)('li', { children: (0, tt.jsx)('a', { href: e.href, children: (0, tt.jsx)('img', { src: e.img, className: 'mb-3', alt: 'img' }) }) }, t)
                      }),
                    }),
                  ],
                }),
                (0, tt.jsxs)('div', {
                  children: [
                    (0, tt.jsx)('h1', {
                      className:
                        'mt-5 dark:text-dMLightBlue dark:text-dMWhite font-bold text-sm mb-3 tracking-wider text-darkBlue uppercase',
                      children: '\u041d\u043e\u0432\u043e\u0441\u0442\u0438',
                    }),
                    (0, tt.jsx)('div', {
                      className: 'mb-2 ',
                      children: [
                        { name: '\u0412\u0441\u0435', type: null },
                        {
                          name: '\u0431\u0443\u043a\u043c\u0435\u043a\u0435\u0440\u043e\u0432',
                          type: 'buk',
                        },
                        {
                          name: '\u0441\u043f\u043e\u0440\u0442\u0430',
                          type: 'sport',
                        },
                      ].map(function (e) {
                        return (0, tt.jsx)(
                          'button',
                          {
                            className: ''.concat(
                              e.type === u
                                ? 'dark:bg-[#455AA8] text-blue dark:text-dMWhite bg-blueLight'
                                : 'dark:text-dMWhite text-darkBlue',
                              ' rounded-[4px]  py-2 px-3  uppercase text-sm font-semibold',
                            ),
                            onClick: function () {
                              return c(e.type)
                            },
                            children: e.name,
                          },
                          e.type,
                        )
                      }),
                    }),
                    (0, tt.jsxs)('ul', {
                      className:
                        'drop-shadow w-full rounded-[4px] border dark:border-[#2F3340] border-[#E4E7EC] ',
                      children: [
                        o.map(function (e, t) {
                          return (0,
                          tt.jsxs)('li', { className: 'py-[10px] '.concat(t + 1 === o.length ? 'border-0' : 'border-b', '  px-[18px]  dark:border-[#2F3340] border-[#E4E7EC]'), children: [(0, tt.jsx)('p', { className: 'text-darkBlue dark:text-dMWhite text-sm ', children: e.text }), (0, tt.jsx)('p', { className: 'text-gray dark:text-dMGray text-xs', children: e.date })] }, e.text)
                        }),
                        (0, tt.jsx)('div', {
                          className: 'text-center',
                          children: (0, tt.jsx)('button', {
                            className:
                              'rounded-md w-[90%] mb-[18px]  py-[10px]  mt-4 px-6  text-blue uppercase border dark:border-[#5F657B] border-blueLight font-bold text-sm sm:text-sx md:px-3 md:py-[5px]',
                            children: (0, tt.jsx)(Ye, {
                              to: '/news',
                              children:
                                '\u0412\u0441\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438',
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          )
        }
      var Yr = [
        {
          path: '/',
          Component: function () {
            return (0, tt.jsxs)('div', {
              className: 'container ',
              children: [
                (0, tt.jsxs)('div', {
                  className:
                    'flex flex-wrap md:text-xs justify-start gap-x-1 text-blue dark:text-dMWhite my-3',
                  children: [
                    (0, tt.jsx)(Ye, {
                      to: '/football',
                      children: '\u0424\u0443\u0442\u0431\u043e\u043b,',
                    }),
                    (0, tt.jsx)(Ye, {
                      to: '/basketball',
                      children:
                        '\u0411\u0430\u0441\u043a\u0435\u0442\u0431\u043e\u043b,',
                    }),
                    (0, tt.jsx)(Ye, {
                      to: '/hokey',
                      children: '\u0425\u043e\u043a\u043a\u0435\u0439,',
                    }),
                    (0, tt.jsx)(Ye, {
                      to: '/tennis',
                      children: '\u0422\u0435\u043d\u043d\u0438\u0441,',
                    }),
                    (0, tt.jsx)(Ye, {
                      to: '/voleyball',
                      children:
                        '\u0412\u043e\u043b\u0435\u0439\u0431\u043e\u043b,',
                    }),
                    (0, tt.jsx)(Ye, {
                      to: '/handball',
                      children: '\u0413\u0430\u043d\u0434\u0431\u043e\u043b.',
                    }),
                    (0, tt.jsx)(Ye, {
                      to: '/',
                      children:
                        '\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043c\u0430\u0442\u0447\u0435\u0439.',
                    }),
                    (0, tt.jsx)(Ye, {
                      to: '/statistics',
                      children:
                        '\u0421\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u0430\u044f \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430.',
                    }),
                  ],
                }),
                (0, tt.jsxs)('div', {
                  className: 'flex justify-between gap-x-5',
                  children: [
                    (0, tt.jsx)(Ir, {}),
                    (0, tt.jsx)(Vr, {}),
                    (0, tt.jsx)(qr, {}),
                  ],
                }),
              ],
            })
          },
        },
        {
          path: '/info/:type',
          Component: function () {
            return [
              {
                name: '\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u041a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438',
                text: '\u041d\u0430\u0441\u0442\u043e\u044f\u0449\u0430\u044f \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 (\u0434\u0430\u043b\u0435\u0435 \u2013 \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430\u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438) \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0438 \u0432\u0441\u0435\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0441\u0430\u0439\u0442 \u0421\u0442\u0430\u0432\u043a\u0438\u041f\u0440\u043e\u0433\u043d\u043e\u0437\u044b,(\u0434\u0430\u043b\u0435\u0435 \u2013 \u0421\u0430\u0439\u0442) \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0439 \u043d\u0430 \u0434\u043e\u043c\u0435\u043d\u043d\u043e\u043c \u0438\u043c\u0435\u043d\u0438 stavkiprognozy.ru, \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043e \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0430\u0439\u0442\u0430 stavkiprognozy.ru, \u0435\u0433\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c \u0438 \u0435\u0433\u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432.',
                paragraphs: [
                  {
                    name: '1. \u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0442\u0435\u0440\u043c\u0438\u043d\u043e\u0432',
                    text: '1.1 \u0412 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0439 \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0435 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0442\u0435\u0440\u043c\u0438\u043d\u044b:1.1.1. \xab\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u0441\u0430\u0439\u0442\u0430\xbb (\u0434\u0430\u043b\u0435\u0435 \u2013 \u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f) \u2013 \u0443\u043f\u043e\u043b\u043d\u043e\u043c\u043e\u0447\u0435\u043d\u043d\u044b\u0435 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438 \u043d\u0430\u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0430\u0439\u0442\u043e\u043c \u0421\u0442\u0430\u0432\u043a\u0438\u041f\u0440\u043e\u0433\u043d\u043e\u0437\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0443\u044e\u0442 \u0438 (\u0438\u043b\u0438) \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u044e\u0442 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443\u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0446\u0435\u043b\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u0441\u043e\u0441\u0442\u0430\u0432\u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u043f\u043e\u0434\u043b\u0435\u0436\u0430\u0449\u0438\u0445 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435, \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f (\u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438), \u0441\u043e\u0432\u0435\u0440\u0448\u0430\u0435\u043c\u044b\u0435 \u0441\u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438.1.1.2. \xab\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435\xbb - \u043b\u044e\u0431\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f, \u043e\u0442\u043d\u043e\u0441\u044f\u0449\u0430\u044f\u0441\u044f \u043a \u043f\u0440\u044f\u043c\u043e \u0438\u043b\u0438 \u043a\u043e\u0441\u0432\u0435\u043d\u043d\u043e\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u043c\u0443, \u0438\u043b\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u043c\u043e\u043c\u0443 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u043c\u0443 \u043b\u0438\u0446\u0443 (\u0441\u0443\u0431\u044a\u0435\u043a\u0442\u0443 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445).1.1.3. \xab\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445\xbb - \u043b\u044e\u0431\u043e\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 (\u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f) \u0438\u043b\u0438 \u0441\u043e\u0432\u043e\u043a\u0443\u043f\u043d\u043e\u0441\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439(\u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439), \u0441\u043e\u0432\u0435\u0440\u0448\u0430\u0435\u043c\u044b\u0445 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u043b\u0438 \u0431\u0435\u0437 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0442\u0430\u043a\u0438\u0445\u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0441 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u0441\u0431\u043e\u0440, \u0437\u0430\u043f\u0438\u0441\u044c, \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044e, \u043d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u0438\u0435,\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435, \u0443\u0442\u043e\u0447\u043d\u0435\u043d\u0438\u0435 (\u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435, \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435), \u0438\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u0435, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435, \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0443(\u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435, \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435, \u0434\u043e\u0441\u0442\u0443\u043f), \u043e\u0431\u0435\u0437\u043b\u0438\u0447\u0438\u0432\u0430\u043d\u0438\u0435, \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435, \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435,\u0443\u043d\u0438\u0447\u0442\u043e\u0436\u0435\u043d\u0438\u0435 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445.1.1.4. \xab\u041a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445\xbb - \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0434\u043b\u044f \u0441\u043e\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u043c\u0438\u043b\u0438 \u0438\u043d\u044b\u043c \u043f\u043e\u043b\u0443\u0447\u0438\u0432\u0448\u0438\u043c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0434\u0430\u043d\u043d\u044b\u043c \u043b\u0438\u0446\u043e\u043c \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u0435 \u043d\u0435 \u0434\u043e\u043f\u0443\u0441\u043a\u0430\u0442\u044c \u0438\u0445\u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0431\u0435\u0437 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u044f \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u0430 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u043b\u0438 \u043d\u0430\u043b\u0438\u0447\u0438\u044f \u0438\u043d\u043e\u0433\u043e \u0437\u0430\u043a\u043e\u043d\u043d\u043e\u0433\u043e\u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u044f.1.1.5. \xab\u0421\u0430\u0439\u0442 \u0421\u0442\u0430\u0432\u043a\u0438\u041f\u0440\u043e\u0433\u043d\u043e\u0437\u044b\xbb - \u044d\u0442\u043e \u0441\u043e\u0432\u043e\u043a\u0443\u043f\u043d\u043e\u0441\u0442\u044c \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u043c\u0435\u0436\u0434\u0443 \u0441\u043e\u0431\u043e\u0439 \u0432\u0435\u0431-\u0441\u0442\u0440\u0430\u043d\u0438\u0446, \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u043d\u044b\u0445\u0432 \u0441\u0435\u0442\u0438 \u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442 \u043f\u043e \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u043c\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 (URL): stavkiprognozy.ru.1.1.6. \xab\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441\u0430\u0439\u0442\u0430 \u0421\u0442\u0430\u0432\u043a\u0438\u041f\u0440\u043e\u0433\u043d\u043e\u0437\u044b\xbb (\u0434\u0430\u043b\u0435\u0435 \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c) \u2013 \u043b\u0438\u0446\u043e, \u0438\u043c\u0435\u044e\u0449\u0435\u0435 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0441\u0430\u0439\u0442\u0443\u0421\u0442\u0430\u0432\u043a\u0438\u041f\u0440\u043e\u0433\u043d\u043e\u0437\u044b, \u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043e\u043c \u0441\u0435\u0442\u0438 \u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442 \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0435\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e, \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b \u0438 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b\u0441\u0430\u0439\u0442\u0430 \u0421\u0442\u0430\u0432\u043a\u0438\u041f\u0440\u043e\u0433\u043d\u043e\u0437\u044b.1.1.7. \xabCookies\xbb \u2014 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442 \u0434\u0430\u043d\u043d\u044b\u0445, \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c \u0438 \u0445\u0440\u0430\u043d\u0438\u043c\u044b\u0439 \u043d\u0430\u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u0435\u0431-\u043a\u043b\u0438\u0435\u043d\u0442 \u0438\u043b\u0438 \u0432\u0435\u0431-\u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043a\u0430\u0436\u0434\u044b\u0439 \u0440\u0430\u0437 \u043f\u0435\u0440\u0435\u0441\u044b\u043b\u0430\u0435\u0442 \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u0432 HTTP-\u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u043f\u0440\u0438 \u043f\u043e\u043f\u044b\u0442\u043a\u0435 \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u0441\u0430\u0439\u0442\u0430.1.1.8. \xabIP-\u0430\u0434\u0440\u0435\u0441\xbb \u2014 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0435\u0442\u0435\u0432\u043e\u0439 \u0430\u0434\u0440\u0435\u0441 \u0443\u0437\u043b\u0430 \u0432 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u043d\u043e\u0439 \u0441\u0435\u0442\u0438, \u0447\u0435\u0440\u0435\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043d\u0430 \u0421\u0430\u0439\u0442.',
                  },
                  {
                    name: '2. \u041e\u0431\u0449\u0438\u0435 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f',
                    text: '2.1. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0430\u0439\u0442\u0430 \u0421\u0442\u0430\u0432\u043a\u0438\u041f\u0440\u043e\u0433\u043d\u043e\u0437\u044b \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u0441 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0439 \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u043e\u0439\u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u043c\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.2.2. \u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u043d\u0435\u0441\u043e\u0433\u043b\u0430\u0441\u0438\u044f \u0441 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u043c\u0438 \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d\u043f\u0440\u0435\u043a\u0440\u0430\u0442\u0438\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0430\u0439\u0442\u0430 \u0421\u0442\u0430\u0432\u043a\u0438\u041f\u0440\u043e\u0433\u043d\u043e\u0437\u044b.2.3. \u041d\u0430\u0441\u0442\u043e\u044f\u0449\u0430\u044f \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043a \u0441\u0430\u0439\u0442\u0443 \u0421\u0442\u0430\u0432\u043a\u0438\u041f\u0440\u043e\u0433\u043d\u043e\u0437\u044b. \u0421\u0430\u0439\u0442 \u043d\u0435\u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442 \u0438 \u043d\u0435 \u043d\u0435\u0441\u0435\u0442 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0437\u0430 \u0441\u0430\u0439\u0442\u044b \u0442\u0440\u0435\u0442\u044c\u0438\u0445 \u043b\u0438\u0446, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043c\u043e\u0436\u0435\u0442\u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0430\u043c, \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u043c \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 \u0421\u0442\u0430\u0432\u043a\u0438\u041f\u0440\u043e\u0433\u043d\u043e\u0437\u044b.2.4. \u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043d\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u043d\u043e\u0441\u0442\u044c \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0445 \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c.',
                  },
                  {
                    name: '3. \u041f\u0440\u0435\u0434\u043c\u0435\u0442 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438',
                    text: '3.1. \u041d\u0430\u0441\u0442\u043e\u044f\u0449\u0430\u044f \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430 \u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u043d\u0435\u0440\u0430\u0437\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044e \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044e \u0440\u0435\u0436\u0438\u043c\u0430 \u0437\u0430\u0449\u0438\u0442\u044b \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445,\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435\u0421\u0442\u0430\u0432\u043a\u0438\u041f\u0440\u043e\u0433\u043d\u043e\u0437\u044b \u0438\u043b\u0438 \u043f\u0440\u0438 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0435 \u043d\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u0443\u044e e-mail \u0440\u0430\u0441\u0441\u044b\u043b\u043a\u0443.3.2. \u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435, \u0440\u0430\u0437\u0440\u0435\u0448\u0451\u043d\u043d\u044b\u0435 \u043a \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0439 \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0438\u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438, \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c \u043f\u0443\u0442\u0451\u043c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0444\u043e\u0440\u043c \u043d\u0430 \u0441\u0430\u0439\u0442\u0435\u0421\u0442\u0430\u0432\u043a\u0438\u041f\u0440\u043e\u0433\u043d\u043e\u0437\u044b \u0438 \u0432\u043a\u043b\u044e\u0447\u0430\u044e\u0442 \u0432 \u0441\u0435\u0431\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e:3.2.1. \u0444\u0430\u043c\u0438\u043b\u0438\u044e, \u0438\u043c\u044f, \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f;3.2.2. \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f;3.2.3. \u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b (e-mail)3.2.4. \u043c\u0435\u0441\u0442\u043e \u0436\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f (\u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438)3.2.5. \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e (\u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438)3.3. \u0421\u0430\u0439\u0442 \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u0414\u0430\u043d\u043d\u044b\u0435, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u044e\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u043e\u0441\u0435\u0449\u0435\u043d\u0438\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446:- IP \u0430\u0434\u0440\u0435\u0441;- \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0438\u0437 cookies;- \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435- \u0432\u0440\u0435\u043c\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430;- \u0440\u0435\u0444\u0435\u0440\u0435\u0440 (\u0430\u0434\u0440\u0435\u0441 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b).3.3.1. \u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 cookies \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0432\u043b\u0435\u0447\u044c \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0447\u0430\u0441\u0442\u044f\u043c \u0441\u0430\u0439\u0442\u0430 , \u0442\u0440\u0435\u0431\u0443\u044e\u0449\u0438\u043c\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438.3.3.2. \u0421\u0430\u0439\u0442 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442 \u0441\u0431\u043e\u0440 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0438 \u043e\u0431 IP-\u0430\u0434\u0440\u0435\u0441\u0430\u0445 \u0441\u0432\u043e\u0438\u0445 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u0435\u0439. \u0414\u0430\u043d\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0441 \u0446\u0435\u043b\u044c\u044e \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u044f, \u0432\u044b\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u0438 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043f\u0440\u043e\u0431\u043b\u0435\u043c.3.4. \u041b\u044e\u0431\u0430\u044f \u0438\u043d\u0430\u044f \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043d\u0435\u043e\u0433\u043e\u0432\u043e\u0440\u0435\u043d\u043d\u0430\u044f \u0432\u044b\u0448\u0435 (\u0438\u0441\u0442\u043e\u0440\u0438\u044f \u043f\u043e\u0441\u0435\u0449\u0435\u043d\u0438\u044f,\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u044b, \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0438 \u0442.\u0434.) \u043f\u043e\u0434\u043b\u0435\u0436\u0438\u0442 \u043d\u0430\u0434\u0435\u0436\u043d\u043e\u043c\u0443 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044e \u0438\u043d\u0435\u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u044e, \u0437\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043d\u044b\u0445 \u0432 \u043f.\u043f. 5.2. \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0439 \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0438\u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438.',
                  },
                ],
              },
            ].map(function (e) {
              return (0, tt.jsxs)(
                'div',
                {
                  className: 'container text-darkBlue dark:text-dMWhite',
                  children: [
                    (0, tt.jsx)('h1', {
                      className: 'font-bold sm:text-2xl  text-5xl mt-10',
                      children: e.name,
                    }),
                    (0, tt.jsx)('p', {
                      className: 'text-sm sm:text-xs my-10 md:my-8 sm:my-5',
                      children: e.text,
                    }),
                    e.paragraphs.map(function (e) {
                      return (0,
                      tt.jsxs)('div', { children: [(0, tt.jsx)('h3', { className: 'font-bold sm:text-xl text-3xl', children: e.name }), (0, tt.jsx)('p', { className: 'text-sm sm:text-xs my-2', children: e.text })] }, e.name)
                    }),
                  ],
                },
                e.name,
              )
            })
          },
        },
        {
          path: '/match/:match',
          Component: function () {
            return (0, tt.jsx)('div', {})
          },
        },
      ]
      function Xr() {
        return (0, tt.jsxs)(Fe, {
          children: [
            Yr.map(function (e) {
              var t = e.path,
                n = e.Component
              return (0,
              tt.jsx)(Re, { path: t, element: (0, tt.jsx)(n, {}) }, t)
            }),
            (0, tt.jsx)(Re, {
              path: '*',
              element: (0, tt.jsx)(_e, { to: '/' }),
            }),
          ],
        })
      }
      var Zr = function () {
        return (0, tt.jsx)('footer', {
          className:
            'bg-[#F1F3F5] dark:bg-dMBlue pb-8 mt-16 dark:border-[#5F657B]  border-t border-[#E4E7EC]',
          children: (0, tt.jsxs)('div', {
            className: 'container text-sm md:text-xs',
            children: [
              (0, tt.jsxs)('div', {
                className: 'py-12 flex md:flex-wrap justify-between gap-x-4',
                children: [
                  (0, tt.jsxs)('div', {
                    className: 'max-w-[280px]',
                    children: [
                      (0, tt.jsxs)('svg', {
                        width: '200',
                        height: '40',
                        viewBox: '0 0 200 40',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: [
                          (0, tt.jsx)('path', {
                            fillRule: 'evenodd',
                            clipRule: 'evenodd',
                            d: 'M21.1471 1.66464C20.726 0.959588 21.2316 0.0245249 22.0484 0.110509C25.6925 0.494158 29.0441 1.85956 31.8338 3.93735C32.5792 4.49257 32.1084 5.61581 31.183 5.70224C30.9654 5.72256 30.7787 5.74704 30.6228 5.77297C30.3639 5.81604 30.0952 5.78771 29.8544 5.68325C28.7821 5.21808 26.5043 4.55417 23.1311 4.28739C22.7757 4.25928 22.4583 4.04943 22.2947 3.73265C21.8903 2.94953 21.4986 2.25308 21.1471 1.66464ZM36.3746 11.2639C36.3309 11.0589 36.2225 10.873 36.0658 10.7337C34.0296 8.92332 31.8918 7.20327 30.5851 6.19449C30.3287 5.99652 29.9919 5.93722 29.6873 6.04748C28.6771 6.41314 26.8426 7.17878 24.3817 8.43314C24.3683 8.43995 24.3619 8.45573 24.367 8.46983C25.1331 10.6041 25.6455 12.3769 25.972 13.7052C26.1875 14.582 25.2284 15.1298 24.5221 14.5673C23.305 13.5979 21.8077 12.4608 20.2849 11.4138C19.9552 11.1871 19.5207 11.1835 19.1896 11.408C16.5359 13.2071 14.695 15.0185 13.788 16.0898C13.7231 16.1663 13.6716 16.2521 13.6351 16.3456C13.157 17.5721 12.426 20.204 12.1773 23.6429C12.1485 24.0419 12.3688 24.4167 12.7299 24.5888C14.3981 25.3842 16.1315 26.1123 17.5796 26.6817C18.4199 27.0121 18.425 28.1165 17.5579 28.3683C16.2443 28.7497 14.4529 29.1924 12.2214 29.596C12.2067 29.5987 12.1962 29.6121 12.197 29.6271C12.3455 32.4687 12.6108 34.4753 12.8006 35.5079C12.8509 35.7815 13.0218 36.0149 13.2665 36.1472C14.4036 36.7622 16.4262 37.688 19.2262 38.5961C19.4256 38.6607 19.6404 38.6596 19.8393 38.5936C22.4258 37.7352 24.9849 36.7436 26.5117 36.1164C26.8115 35.9933 27.0313 35.7311 27.0881 35.412C27.2765 34.3537 27.5304 32.3832 27.6744 29.6271C27.6751 29.6121 27.6647 29.5987 27.65 29.596C25.4185 29.1924 23.6271 28.7497 22.3135 28.3683C21.4464 28.1165 21.4515 27.0121 22.2918 26.6817C23.7399 26.1123 25.4733 25.3842 27.1415 24.5888C27.5026 24.4167 27.7229 24.0418 27.694 23.6427C27.6066 22.4335 27.4595 21.3241 27.2848 20.3404C27.0984 19.2911 28.6066 18.3453 29.3672 19.0919C30.0542 19.7662 30.7638 20.4869 31.4362 21.2087C31.772 21.5693 32.3188 21.6421 32.7307 21.3717C33.8229 20.6547 34.7458 20.0341 35.4738 19.5365C36.1589 19.0682 37.0037 19.5678 36.7991 20.3721C36.4959 21.5645 35.9606 23.1544 35.0792 25.0445C34.9334 25.357 34.9531 25.7231 35.1306 26.0188C35.5773 26.7631 35.9577 27.475 36.268 28.1061C36.6417 28.866 37.7496 28.9402 38.0996 28.1691C39.2389 25.6595 39.8733 22.8722 39.8733 19.9367C39.8733 18.9426 39.8006 17.9654 39.6601 17.0103C39.572 16.4112 38.6368 16.5228 38.3012 17.0269C37.9401 17.5694 37.2156 17.0539 37.1618 16.4045C37.0548 15.1115 36.8223 13.3646 36.3746 11.2639ZM12.6212 35.9717C12.5501 35.8034 12.4374 35.6572 12.295 35.5427C11.319 34.7572 9.73533 33.1669 7.98117 30.6166C7.77912 30.3229 7.43897 30.1532 7.08284 30.17C6.22613 30.2102 5.4465 30.2198 4.77366 30.2109C3.95187 30.2001 3.40034 31.1069 3.88857 31.768C5.91335 34.5099 8.62402 36.7143 11.7672 38.1281C12.5962 38.501 13.3574 37.5867 12.9735 36.7628C12.8357 36.4669 12.7172 36.199 12.6212 35.9717ZM1.77286 28.1672C2.12283 28.9383 3.23048 28.8643 3.60421 28.1044C3.91439 27.4738 4.29445 26.7625 4.74079 26.0188C4.91826 25.7231 4.93799 25.3571 4.79222 25.0445C3.40713 22.0744 2.87676 19.8455 2.75845 18.7353C2.73652 18.5296 2.66595 18.3312 2.54246 18.1651C2.36167 17.922 2.15229 17.6295 1.9285 17.3014C1.41538 16.5493 0.234449 16.7364 0.130739 17.641C0.044379 18.3943 0 19.1603 0 19.9367C0 22.8715 0.634136 25.6582 1.77286 28.1672ZM2.80563 17.9465C2.80315 18.2528 2.95721 18.5357 3.20752 18.7121C3.96875 19.2486 5.31935 20.176 7.14075 21.3717C7.55262 21.6421 8.09933 21.5693 8.43515 21.2088C10.1035 19.4177 12.0002 17.6346 13.2159 16.5456C13.3781 16.4003 13.4892 16.2071 13.5334 15.9939C13.8627 14.4072 14.4724 11.7932 15.2102 9.38446C15.3546 8.91337 15.1442 8.40343 14.7041 8.18194C13.5371 7.59459 12.5382 7.10561 11.7433 6.72392C10.9951 6.36471 11.0054 5.3834 11.8042 5.15838C12.9885 4.82477 14.6331 4.49341 16.7106 4.31171C17.0542 4.28166 17.3613 4.08155 17.5287 3.77999C18.4707 2.08257 19.438 0.753992 19.9833 0.0990779C20.0161 0.0596631 19.988 0 19.9367 0C15.3306 0 11.0894 1.56201 7.71378 4.18521C7.08963 4.67023 8.14024 5.62987 8.92676 5.70853C9.60476 5.77633 9.1418 6.43811 8.6075 6.86097C7.32323 7.87734 5.61812 9.27625 3.97886 10.7337C3.82221 10.873 3.71379 11.0588 3.6701 11.2638C3.00657 14.3771 2.81562 16.7135 2.80563 17.9465ZM27.8961 38.2211C27.0451 38.5921 26.306 37.6277 26.6839 36.7797C26.7535 36.6235 26.8105 36.4841 26.8562 36.3622C26.9484 36.1168 27.1072 35.8989 27.3178 35.7428C28.2564 35.0475 29.9712 33.4066 31.89 30.617C32.092 30.3232 32.4324 30.1532 32.7886 30.17C33.646 30.2102 34.4262 30.2198 35.0994 30.2109C35.9212 30.2 36.4729 31.107 35.9846 31.7682C33.9149 34.5708 31.1286 36.812 27.8961 38.2211Z',
                            fill: '#4A66CD',
                          }),
                          (0, tt.jsx)('path', {
                            d: 'M58.9426 28.1365C56.8772 28.1365 55.156 27.6621 53.779 26.7131C52.4021 25.7455 51.574 24.4243 51.2949 22.7497H55.3421C55.677 24.1266 56.9144 24.8151 59.0543 24.8151C60.7848 24.8151 61.65 24.3964 61.65 23.5591C61.65 23.4474 61.6314 23.3451 61.5942 23.2521C61.5756 23.159 61.5291 23.0753 61.4546 23.0009C61.3988 22.9264 61.3337 22.8613 61.2593 22.8055C61.1848 22.731 61.0732 22.6659 60.9243 22.6101C60.7941 22.5543 60.6731 22.5078 60.5615 22.4705C60.4498 22.4333 60.2824 22.3868 60.0591 22.331C59.8544 22.2752 59.6683 22.2286 59.5009 22.1914C59.352 22.1542 59.138 22.1077 58.8589 22.0519C58.5798 21.9961 58.3379 21.9402 58.1332 21.8844C55.8445 21.3448 54.2442 20.7586 53.3324 20.126C52.4393 19.4747 51.9927 18.5071 51.9927 17.2232C51.9927 15.623 52.5975 14.3763 53.8069 13.4831C55.035 12.5713 56.6725 12.1154 58.7193 12.1154C60.7662 12.1154 62.3571 12.562 63.4922 13.4552C64.6272 14.3297 65.3343 15.5206 65.6134 17.0278H61.5663C61.2314 15.9858 60.2359 15.4648 58.5798 15.4648C56.8679 15.4648 56.0119 15.8928 56.0119 16.7487C56.0119 17.0837 56.1887 17.3256 56.5423 17.4744C56.8958 17.6233 57.6959 17.8373 58.9426 18.1164C60.1893 18.3955 61.1755 18.656 61.9012 18.8979C62.6269 19.1212 63.3154 19.4189 63.9667 19.7911C64.6179 20.1632 65.0831 20.6098 65.3622 21.1308C65.6414 21.6518 65.7809 22.2845 65.7809 23.0288C65.7809 24.6848 65.1389 25.9502 63.855 26.8247C62.5711 27.6993 60.9336 28.1365 58.9426 28.1365Z',
                            fill: '#0C0A48',
                          }),
                          (0, tt.jsx)('path', {
                            d: 'M79.7867 23.6707L80.4566 26.9084C79.9914 27.2248 79.3215 27.5132 78.447 27.7737C77.591 28.0156 76.7351 28.1365 75.8791 28.1365C74.2231 28.1365 72.8461 27.6155 71.7483 26.5735C70.669 25.5315 70.1294 23.9685 70.1294 21.8844V16.2184H67.3941V12.4504H70.1294V9.12892L74.1207 8.26367V12.4504H79.8146V16.2184H74.1207V21.6611C74.1207 23.5033 74.9395 24.4243 76.5769 24.4243C77.3026 24.4243 78.3726 24.1731 79.7867 23.6707Z',
                            fill: '#0C0A48',
                          }),
                          (0, tt.jsx)('path', {
                            d: 'M93.7437 12.4504H97.735L97.7071 27.8016H93.7158V25.7362C92.5435 27.3364 90.9433 28.1365 88.915 28.1365C86.8868 28.1365 85.2121 27.3922 83.891 25.9036C82.5699 24.3964 81.9093 22.4705 81.9093 20.126C81.9093 17.7814 82.5699 15.8649 83.891 14.3763C85.2308 12.869 86.8961 12.1154 88.8871 12.1154C90.934 12.1154 92.5528 12.9435 93.7437 14.5995V12.4504ZM89.8082 24.3406C90.9433 24.3406 91.8829 23.9498 92.6273 23.1683C93.3716 22.3868 93.7437 21.3727 93.7437 20.126C93.7437 18.8793 93.3716 17.8652 92.6273 17.0837C91.8829 16.3021 90.9433 15.9114 89.8082 15.9114C88.6731 15.9114 87.7428 16.3021 87.0171 17.0837C86.2914 17.8652 85.9285 18.8793 85.9285 20.126C85.9285 21.3727 86.2914 22.3868 87.0171 23.1683C87.7614 23.9498 88.6918 24.3406 89.8082 24.3406Z',
                            fill: '#0C0A48',
                          }),
                          (0, tt.jsx)('path', {
                            d: 'M111.02 12.4504H115.262L109.987 27.8016H105.214L99.9392 12.4504H104.182L107.587 23.4754L111.02 12.4504Z',
                            fill: '#0C0A48',
                          }),
                          (0, tt.jsx)('path', {
                            d: 'M135.827 12.1154C137.464 12.1154 138.758 12.6457 139.707 13.7063C140.656 14.767 141.13 16.2277 141.13 18.0884V27.8016H137.139V18.9537C137.139 17.9489 136.925 17.1952 136.497 16.6928C136.087 16.1718 135.417 15.9113 134.487 15.9113C133.445 15.9113 132.654 16.2463 132.115 16.9161C131.575 17.5674 131.305 18.5071 131.305 19.7352V27.8016H127.314V18.9537C127.314 17.9489 127.1 17.1952 126.672 16.6928C126.263 16.1718 125.593 15.9113 124.662 15.9113C123.62 15.9113 122.82 16.2463 122.262 16.9161C121.722 17.5674 121.452 18.5071 121.452 19.7352L121.48 27.8016H117.461V12.4503H121.48V14.4878C122.597 12.9062 124.113 12.1154 126.03 12.1154C128.263 12.1154 129.817 13.083 130.691 15.0182C131.882 13.083 133.594 12.1154 135.827 12.1154Z',
                            fill: '#4A66CD',
                          }),
                          (0, tt.jsx)('path', {
                            d: 'M155.645 12.4503H159.636L159.608 27.8016H155.617V25.7361C154.445 27.3364 152.844 28.1365 150.816 28.1365C148.788 28.1365 147.113 27.3922 145.792 25.9036C144.471 24.3964 143.81 22.4705 143.81 20.1259C143.81 17.7814 144.471 15.8648 145.792 14.3762C147.132 12.869 148.797 12.1154 150.788 12.1154C152.835 12.1154 154.454 12.9434 155.645 14.5995V12.4503ZM151.709 24.3406C152.844 24.3406 153.784 23.9498 154.528 23.1683C155.273 22.3868 155.645 21.3726 155.645 20.1259C155.645 18.8792 155.273 17.8651 154.528 17.0836C153.784 16.3021 152.844 15.9113 151.709 15.9113C150.574 15.9113 149.644 16.3021 148.918 17.0836C148.192 17.8651 147.83 18.8792 147.83 20.1259C147.83 21.3726 148.192 22.3868 148.918 23.1683C149.662 23.9498 150.593 24.3406 151.709 24.3406Z',
                            fill: '#4A66CD',
                          }),
                          (0, tt.jsx)('path', {
                            d: 'M174.233 23.6707L174.903 26.9084C174.438 27.2247 173.768 27.5131 172.893 27.7736C172.037 28.0155 171.181 28.1365 170.325 28.1365C168.669 28.1365 167.292 27.6155 166.194 26.5735C165.115 25.5314 164.576 23.9684 164.576 21.8844V16.2184H161.84V12.4503H164.576V9.12887L168.567 8.26362V12.4503H174.261V16.2184H168.567V21.6611C168.567 23.5032 169.386 24.4243 171.023 24.4243C171.749 24.4243 172.819 24.1731 174.233 23.6707Z',
                            fill: '#4A66CD',
                          }),
                          (0, tt.jsx)('path', {
                            d: 'M179.518 5.36084C180.244 5.36084 180.839 5.58413 181.305 6.03071C181.77 6.45869 182.002 7.01691 182.002 7.70539C182.002 8.39387 181.77 8.9614 181.305 9.40798C180.839 9.85456 180.244 10.0779 179.518 10.0779C178.811 10.0779 178.216 9.85456 177.732 9.40798C177.267 8.9614 177.034 8.39387 177.034 7.70539C177.034 7.03552 177.267 6.47729 177.732 6.03071C178.216 5.58413 178.811 5.36084 179.518 5.36084ZM177.509 27.8016V12.4503H181.5V27.8016H177.509Z',
                            fill: '#4A66CD',
                          }),
                          (0, tt.jsx)('path', {
                            d: 'M192.324 28.1365C190.036 28.1365 188.128 27.3736 186.603 25.8478C185.095 24.3219 184.342 22.4147 184.342 20.1259C184.342 17.8372 185.095 15.9299 186.603 14.4041C188.128 12.8783 190.045 12.1154 192.352 12.1154C194.288 12.1154 195.971 12.6736 197.404 13.7901C198.856 14.8879 199.721 16.3858 200 18.2838H195.897C195.674 17.4837 195.236 16.8696 194.585 16.4416C193.953 16.0137 193.208 15.7997 192.352 15.7997C191.143 15.7997 190.175 16.1997 189.45 16.9999C188.724 17.8 188.37 18.842 188.389 20.1259C188.37 21.4099 188.724 22.4519 189.45 23.252C190.194 24.0521 191.152 24.4522 192.324 24.4522C193.18 24.4522 193.934 24.2382 194.585 23.8102C195.236 23.3823 195.674 22.7589 195.897 21.9402H200C199.702 23.894 198.828 25.4198 197.376 26.5176C195.944 27.5969 194.26 28.1365 192.324 28.1365Z',
                            fill: '#4A66CD',
                          }),
                        ],
                      }),
                      (0, tt.jsx)('p', {
                        className: 'text-gray mt-2',
                        children:
                          '\u0415\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u044b\u0435 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u044b \u043d\u0430 \u0441\u043f\u043e\u0440\u0442 \u0431\u0435\u0437 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0438 \u043a\u0430\u043a\u0438\u0445-\u043b\u0438\u0431\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043f\u043b\u0430\u0442\u0435\u0436\u0435\u0439.',
                      }),
                    ],
                  }),
                  (0, tt.jsxs)('div', {
                    className:
                      'flex sm:flex-col md:my-5 md:flex-wrap justify-between gap-x-16 text-blue text-sm sm:text-xs',
                    children: [
                      (0, tt.jsxs)('ul', {
                        children: [
                          (0, tt.jsx)('li', {
                            className:
                              'text-darkBlue uppercase font-bold dark:text-dMWhite sm:mt-2',
                            children: 'Stavmatic.com',
                          }),
                          (0, tt.jsx)('li', {
                            children: (0, tt.jsx)(Ye, {
                              children:
                                '\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430',
                            }),
                          }),
                          (0, tt.jsx)('li', {
                            children: (0, tt.jsx)(Ye, {
                              children:
                                '\u041f\u0440\u043e\u0433\u043d\u043e\u0437\u044b',
                            }),
                          }),
                          (0, tt.jsx)('li', {
                            children: (0, tt.jsx)(Ye, {
                              children:
                                '\u0411\u0443\u043a\u043c\u0435\u043a\u0435\u0440\u0441\u043a\u0438\u0435 \u043a\u043e\u043d\u0442\u043e\u0440\u044b',
                            }),
                          }),
                          (0, tt.jsx)('li', {
                            children: (0, tt.jsx)(Ye, {
                              children:
                                '\u0421\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u044b\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438',
                            }),
                          }),
                          (0, tt.jsx)('li', {
                            children: (0, tt.jsx)(Ye, {
                              children:
                                '\u041e\u0431\u0443\u0447\u0430\u044e\u0449\u0438\u0435 \u0441\u0442\u0430\u0442\u044c\u0438',
                            }),
                          }),
                          (0, tt.jsx)('li', {
                            children: (0, tt.jsx)(Ye, {
                              to: '/info/confidentiality',
                              children:
                                '\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438',
                            }),
                          }),
                          (0, tt.jsx)('li', {
                            children: (0, tt.jsx)(Ye, {
                              children:
                                '\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0435 \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435',
                            }),
                          }),
                          (0, tt.jsx)('li', {
                            children: (0, tt.jsx)(Ye, {
                              children:
                                '\u0412\u0430\u043a\u0430\u043d\u0441\u0438\u0438',
                            }),
                          }),
                          (0, tt.jsx)('li', {
                            children: (0, tt.jsx)(Ye, {
                              children:
                                '\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b',
                            }),
                          }),
                        ],
                      }),
                      (0, tt.jsxs)('ul', {
                        children: [
                          (0, tt.jsx)('li', {
                            className:
                              'text-darkBlue uppercase dark:text-dMWhite font-bold sm:mt-2',
                            children:
                              '\u0431\u0443\u043a\u043c\u0435\u043a\u0435\u0440\u044b',
                          }),
                          (0, tt.jsx)('li', {
                            children: (0, tt.jsx)(Ye, {
                              children:
                                '\u0412\u0438\u043d\u043b\u0430\u0439\u043d',
                            }),
                          }),
                          (0, tt.jsx)('li', {
                            children: (0, tt.jsx)(Ye, {
                              children:
                                '\u041f\u0430\u0440\u0438\u043c\u0430\u0442\u0447',
                            }),
                          }),
                          (0, tt.jsx)('li', {
                            children: (0, tt.jsx)(Ye, {
                              children: '\u041b\u0435\u043e\u043d',
                            }),
                          }),
                          (0, tt.jsx)('li', {
                            children: (0, tt.jsx)(Ye, {
                              children: '\u0411\u0435\u0442\u0411\u0443\u043c',
                            }),
                          }),
                          (0, tt.jsx)('li', {
                            children: (0, tt.jsx)(Ye, {
                              children:
                                '\u041b\u0438\u0433\u0430 \u0421\u0442\u0430\u0432\u043e\u043a',
                            }),
                          }),
                        ],
                      }),
                      (0, tt.jsxs)('ul', {
                        children: [
                          (0, tt.jsx)('li', {
                            className:
                              'text-darkBlue uppercase dark:text-dMWhite font-bold sm:mt-2',
                            children:
                              '\u041f\u0440\u043e\u0433\u043d\u043e\u0437\u044b',
                          }),
                          (0, tt.jsx)('li', {
                            children: (0, tt.jsx)(Ye, {
                              children:
                                '\u0412\u0441\u0435 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u044b',
                            }),
                          }),
                          (0, tt.jsx)('li', {
                            children: (0, tt.jsx)(Ye, {
                              children:
                                '\u041f\u0440\u043e\u0433\u043d\u043e\u0437\u044b \u043d\u0430 \u0444\u0443\u0442\u0431\u043e\u043b',
                            }),
                          }),
                          (0, tt.jsx)('li', {
                            children: (0, tt.jsx)(Ye, {
                              children:
                                '\u041f\u0440\u043e\u0433\u043d\u043e\u0437\u044b \u043d\u0430 \u0445\u043e\u043a\u043a\u0435\u0439',
                            }),
                          }),
                          (0, tt.jsx)('li', {
                            children: (0, tt.jsx)(Ye, {
                              children:
                                '\u041f\u0440\u043e\u0433\u043d\u043e\u0437\u044b \u043d\u0430 \u0432\u043e\u043b\u0435\u0439\u0431\u043e\u043b',
                            }),
                          }),
                          (0, tt.jsx)('li', {
                            children: (0, tt.jsx)(Ye, {
                              children:
                                '\u041f\u0440\u043e\u0433\u043d\u043e\u0437\u044b \u043d\u0430 \u0442\u0435\u043d\u043d\u0438\u0441',
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, tt.jsxs)('div', {
                    children: [
                      (0, tt.jsx)(Hr, {
                        path: '/',
                        text: '\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c',
                      }),
                      (0, tt.jsxs)('div', {
                        className: 'flex items-center my-5 justify-around',
                        children: [
                          (0, tt.jsx)('a', {
                            href: '#',
                            children: (0, tt.jsxs)('svg', {
                              width: '32',
                              height: '32',
                              viewBox: '0 0 32 32',
                              fill: 'none',
                              xmlns: 'http://www.w3.org/2000/svg',
                              children: [
                                (0, tt.jsx)('path', {
                                  fillRule: 'evenodd',
                                  clipRule: 'evenodd',
                                  d: 'M15.9775 0.88916C7.49017 0.88916 0.609863 7.65807 0.609863 16.0079C0.609863 24.3577 7.49017 31.1266 15.9775 31.1266C24.4647 31.1266 31.345 24.3577 31.345 16.0079C31.345 7.65807 24.4647 0.88916 15.9775 0.88916Z',
                                  fill: '#1DADEB',
                                }),
                                (0, tt.jsx)('path', {
                                  d: 'M15.5173 13.1779L15.5494 13.7011L15.012 13.637C13.0556 13.3914 11.3465 12.5587 9.89542 11.1601L9.18589 10.4661L9.00323 10.9786C8.6162 12.1209 8.86339 13.3273 9.66964 14.1387C10.0996 14.5871 10.0029 14.6512 9.2612 14.3844C9.00323 14.2989 8.77745 14.2349 8.7559 14.2669C8.68074 14.3417 8.93871 15.3133 9.14292 15.6975C9.42246 16.2314 9.99215 16.7545 10.6156 17.0642L11.1423 17.3097L10.5189 17.3203C9.91683 17.3203 9.89542 17.331 9.9598 17.5553C10.1748 18.2492 11.024 18.986 11.97 19.3062L12.6364 19.5305L12.0559 19.872C11.1961 20.3631 10.1856 20.6407 9.17511 20.662C8.69136 20.6727 8.2937 20.7155 8.2937 20.7475C8.2937 20.8542 9.60511 21.4521 10.3684 21.687C12.6579 22.3809 15.3774 22.082 17.4198 20.897C18.871 20.0536 20.3222 18.3773 20.9993 16.7545C21.3647 15.8896 21.7304 14.3096 21.7304 13.5515C21.7304 13.0604 21.7626 12.9964 22.3644 12.4092C22.7194 12.0676 23.0524 11.6939 23.1169 11.5872C23.2245 11.3843 23.2137 11.3843 22.6656 11.5657C21.7518 11.8861 21.6229 11.8434 22.0744 11.3629C22.4076 11.0212 22.6656 10.2845 22.6656 10.1031C22.6656 10.1031 22.644 10.2418 22.4613 10.3379C22.2678 10.4448 21.8378 10.6048 21.5154 10.7009L20.9349 10.8825L20.4082 10.5301C20.1179 10.3379 19.7094 10.1245 19.4945 10.0604C18.9462 9.91091 18.1078 9.93231 17.6134 10.1031C16.2697 10.5836 15.4204 11.822 15.5173 13.1779Z',
                                  fill: 'white',
                                }),
                              ],
                            }),
                          }),
                          (0, tt.jsx)('a', {
                            href: '#',
                            children: (0, tt.jsxs)('svg', {
                              width: '33',
                              height: '32',
                              viewBox: '0 0 33 32',
                              fill: 'none',
                              xmlns: 'http://www.w3.org/2000/svg',
                              children: [
                                (0, tt.jsxs)('g', {
                                  clipPath: 'url(#clip0_678_468)',
                                  children: [
                                    (0, tt.jsx)('path', {
                                      fillRule: 'evenodd',
                                      clipRule: 'evenodd',
                                      d: 'M15.5789 0.889404C7.09149 0.889404 0.211182 7.65831 0.211182 16.0081C0.211182 24.358 7.09149 31.1268 15.5789 31.1268C24.066 31.1268 30.9463 24.358 30.9463 16.0081C30.9463 7.65831 24.066 0.889404 15.5789 0.889404Z',
                                      fill: '#4469B0',
                                    }),
                                    (0, tt.jsx)('path', {
                                      d: 'M16.6678 24.3937V16.1682H18.9758L19.2817 13.3337H16.6678L16.6716 11.9151C16.6716 11.1758 16.743 10.7797 17.8225 10.7797H19.2653V7.94482H16.9569C14.1845 7.94482 13.2085 9.31983 13.2085 11.6323V13.334H11.4802V16.1686H13.2085V24.3937H16.6678Z',
                                      fill: 'white',
                                    }),
                                  ],
                                }),
                                (0, tt.jsx)('defs', {
                                  children: (0, tt.jsx)('clipPath', {
                                    id: 'clip0_678_468',
                                    children: (0, tt.jsx)('rect', {
                                      width: '32',
                                      height: '32',
                                      fill: 'white',
                                      transform: 'translate(0.211182)',
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, tt.jsx)('a', {
                            href: '#',
                            children: (0, tt.jsxs)('svg', {
                              width: '31',
                              height: '32',
                              viewBox: '0 0 31 32',
                              fill: 'none',
                              xmlns: 'http://www.w3.org/2000/svg',
                              children: [
                                (0, tt.jsx)('mask', {
                                  id: 'mask0_678_482',
                                  maskUnits: 'userSpaceOnUse',
                                  x: '0',
                                  y: '0',
                                  width: '31',
                                  height: '32',
                                  children: (0, tt.jsx)('path', {
                                    d: 'M0.211182 0.888672H30.3598V31.125H0.211182V0.888672Z',
                                    fill: 'white',
                                  }),
                                }),
                                (0, tt.jsx)('g', {
                                  mask: 'url(#mask0_678_482)',
                                  children: (0, tt.jsx)('path', {
                                    fillRule: 'evenodd',
                                    clipRule: 'evenodd',
                                    d: 'M15.2853 31.1251C23.6105 31.1251 30.3597 24.3571 30.3597 16.0069C30.3597 7.65845 23.6105 0.888672 15.2853 0.888672C6.96021 0.888672 0.210938 7.65845 0.210938 16.0069C0.210938 24.3571 6.96021 31.1251 15.2853 31.1251Z',
                                    fill: 'url(#paint0_linear_678_482)',
                                  }),
                                }),
                                (0, tt.jsx)('rect', {
                                  x: '7.96118',
                                  y: '8.75',
                                  width: '14.5',
                                  height: '14.5',
                                  rx: '4.25',
                                  stroke: 'white',
                                  strokeWidth: '1.5',
                                }),
                                (0, tt.jsx)('circle', {
                                  cx: '15.2113',
                                  cy: '16.0001',
                                  r: '3.06308',
                                  stroke: 'white',
                                  strokeWidth: '1.5',
                                }),
                                (0, tt.jsx)('circle', {
                                  cx: '19.1457',
                                  cy: '12.0653',
                                  r: '1.1215',
                                  fill: 'white',
                                }),
                                (0, tt.jsx)('defs', {
                                  children: (0, tt.jsxs)('linearGradient', {
                                    id: 'paint0_linear_678_482',
                                    x1: '26.2111',
                                    y1: '5.00006',
                                    x2: '7.21106',
                                    y2: '28.0001',
                                    gradientUnits: 'userSpaceOnUse',
                                    children: [
                                      (0, tt.jsx)('stop', {
                                        stopColor: '#A23AAD',
                                      }),
                                      (0, tt.jsx)('stop', {
                                        offset: '0.5',
                                        stopColor: '#D53375',
                                      }),
                                      (0, tt.jsx)('stop', {
                                        offset: '1',
                                        stopColor: '#F29754',
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, tt.jsx)('a', {
                            href: '#',
                            children: (0, tt.jsxs)('svg', {
                              width: '33',
                              height: '32',
                              viewBox: '0 0 33 32',
                              fill: 'none',
                              xmlns: 'http://www.w3.org/2000/svg',
                              children: [
                                (0, tt.jsx)('circle', {
                                  cx: '16.7891',
                                  cy: '16',
                                  r: '16',
                                  fill: '#4C77A6',
                                }),
                                (0, tt.jsx)('path', {
                                  d: 'M17.7574 21.8284C18.2649 21.8284 18.4724 21.4901 18.4666 21.0659C18.4407 19.4684 19.0616 18.6084 20.1824 19.7292C21.4224 20.9692 21.6791 21.8284 23.1849 21.8284H25.8516C26.5249 21.8284 26.7899 21.6117 26.7899 21.2717C26.7899 20.5526 25.6057 19.2834 24.6024 18.3517C23.1974 17.0476 23.1316 17.0167 24.3416 15.4467C25.8424 13.4976 27.8057 11.0001 26.0691 11.0001H22.7516C22.1082 11.0001 22.0616 11.3626 21.8324 11.9026C21.0032 13.8584 19.4274 16.3917 18.8291 16.0042C18.2032 15.6001 18.4899 13.9992 18.5374 11.6201C18.5499 10.9917 18.5466 10.5609 17.5866 10.3376C17.0624 10.2167 16.5524 10.1667 16.0791 10.1667C14.1849 10.1667 12.8782 10.9609 13.6207 11.0992C14.9299 11.3434 14.8041 14.1759 14.4991 15.3992C13.9674 17.5292 11.9691 13.7126 11.1366 11.8117C10.9357 11.3551 10.8741 11.0001 10.1574 11.0001H7.4449C7.0349 11.0001 6.78906 11.1334 6.78906 11.4301C6.78906 11.9317 9.25573 17.0301 11.6107 19.5717C13.9074 22.0509 16.1774 21.8284 17.7574 21.8284Z',
                                  fill: 'white',
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, tt.jsx)('p', {
                        className: 'text-blue text-sm sm:text-xs text-center',
                        children: 'hello@stavmatic.com',
                      }),
                    ],
                  }),
                ],
              }),
              (0, tt.jsxs)('div', {
                className:
                  'text-lightGray text-sm md:text-xs sm:flex-wrap flex justify-between items-center',
                children: [
                  (0, tt.jsx)('div', {
                    children: '\xa9 2013-2020 Stavmatic.com',
                  }),
                  (0, tt.jsxs)('div', {
                    className: 'flex gap-x-5  md:gap-x-3 items-center',
                    children: [
                      (0, tt.jsxs)('svg', {
                        className: 'h-8 sm:h-24',
                        viewBox: '0 0 32 32',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: [
                          (0, tt.jsx)('path', {
                            d: 'M12.6335 9.81818V20H11.4006V11.1108H11.3409L8.85511 12.7614V11.5085L11.4006 9.81818H12.6335ZM18.8232 20.1392C18.1404 20.1392 17.5372 20.0182 17.0135 19.7763C16.4931 19.531 16.0871 19.1946 15.7955 18.767C15.5038 18.3362 15.3596 17.8456 15.3629 17.2955C15.3596 16.8646 15.4441 16.4669 15.6165 16.1023C15.7888 15.7344 16.0241 15.4278 16.3224 15.1825C16.6241 14.9339 16.9605 14.7765 17.3317 14.7102V14.6506C16.8445 14.5246 16.4567 14.2512 16.1683 13.8303C15.88 13.406 15.7375 12.9238 15.7408 12.3835C15.7375 11.8665 15.8684 11.4041 16.1335 10.9964C16.3987 10.5888 16.7633 10.2673 17.2273 10.032C17.6946 9.79664 18.2266 9.67898 18.8232 9.67898C19.4131 9.67898 19.9401 9.79664 20.4041 10.032C20.8681 10.2673 21.2327 10.5888 21.4979 10.9964C21.7663 11.4041 21.9022 11.8665 21.9055 12.3835C21.9022 12.9238 21.7547 13.406 21.4631 13.8303C21.1747 14.2512 20.7919 14.5246 20.3146 14.6506V14.7102C20.6825 14.7765 21.014 14.9339 21.3089 15.1825C21.6039 15.4278 21.8393 15.7344 22.0149 16.1023C22.1906 16.4669 22.2801 16.8646 22.2834 17.2955C22.2801 17.8456 22.1309 18.3362 21.8359 18.767C21.5443 19.1946 21.1383 19.531 20.6179 19.7763C20.1009 20.0182 19.5026 20.1392 18.8232 20.1392ZM18.8232 19.0455C19.2839 19.0455 19.6816 18.9709 20.0163 18.8217C20.3511 18.6726 20.6096 18.4621 20.7919 18.1903C20.9742 17.9186 21.067 17.6004 21.0703 17.2358C21.067 16.8513 20.9676 16.5116 20.772 16.2166C20.5765 15.9216 20.3097 15.6896 19.9716 15.5206C19.6368 15.3516 19.254 15.267 18.8232 15.267C18.389 15.267 18.0012 15.3516 17.6598 15.5206C17.3217 15.6896 17.0549 15.9216 16.8594 16.2166C16.6671 16.5116 16.5727 16.8513 16.576 17.2358C16.5727 17.6004 16.6605 17.9186 16.8395 18.1903C17.0218 18.4621 17.282 18.6726 17.62 18.8217C17.9581 18.9709 18.3591 19.0455 18.8232 19.0455ZM18.8232 14.2131C19.1877 14.2131 19.5109 14.1402 19.7926 13.9943C20.0777 13.8485 20.3014 13.6446 20.4638 13.3828C20.6262 13.121 20.709 12.8144 20.7124 12.4631C20.709 12.1184 20.6278 11.8184 20.4688 11.5632C20.3097 11.3047 20.0893 11.1058 19.8075 10.9666C19.5258 10.8241 19.1977 10.7528 18.8232 10.7528C18.442 10.7528 18.1089 10.8241 17.8239 10.9666C17.5388 11.1058 17.3184 11.3047 17.1626 11.5632C17.0069 11.8184 16.9306 12.1184 16.9339 12.4631C16.9306 12.8144 17.0085 13.121 17.1676 13.3828C17.33 13.6446 17.5537 13.8485 17.8388 13.9943C18.1238 14.1402 18.4519 14.2131 18.8232 14.2131Z',
                            fill: '#627080',
                          }),
                          (0, tt.jsx)('circle', {
                            cx: '16',
                            cy: '16',
                            r: '15.5',
                            stroke: '#CDD1D6',
                          }),
                        ],
                      }),
                      '\u0414\u043b\u044f \u043b\u0438\u0446 \u0441\u0442\u0430\u0440\u0448\u0435 18 \u043b\u0435\u0442. \u041d\u0430 \u0441\u0430\u0439\u0442\u0435 \u043d\u0435 \u043f\u0440\u043e\u0432\u043e\u0434\u044f\u0442\u0441\u044f \u0438\u0433\u0440\u044b \u043d\u0430 \u0434\u0435\u043d\u0435\u0436\u043d\u044b\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430, \u0432\u0441\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043d\u043e\u0441\u0438\u0442 \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440.',
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      }
      var Jr = function () {
          return (0, tt.jsxs)(tt.Fragment, {
            children: [
              (0, tt.jsx)(ft, {}),
              (0, tt.jsx)(Xr, {}),
              (0, tt.jsx)(Zr, {}),
            ],
          })
        },
        $r = (function (e) {
          var t,
            n = Cr(),
            r = e || {},
            a = r.reducer,
            o = void 0 === a ? void 0 : a,
            l = r.middleware,
            i = void 0 === l ? n() : l,
            u = r.devTools,
            s = void 0 === u || u,
            c = r.preloadedState,
            f = void 0 === c ? void 0 : c,
            d = r.enhancers,
            p = void 0 === d ? void 0 : d
          if ('function' === typeof o) t = o
          else {
            if (!yr(o))
              throw new Error(
                '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers',
              )
            t = $n(o)
          }
          var m = i
          'function' === typeof m && (m = m(n))
          var h = er.apply(void 0, m),
            v = Gn
          s && (v = gr(mr({ trace: !1 }, 'object' === typeof s && s)))
          var g = new xr(h),
            y = g
          return (
            Array.isArray(p)
              ? (y = lr([h], p))
              : 'function' === typeof p && (y = p(g)),
            Jn(t, f, v.apply(void 0, y))
          )
        })({
          reducer: {
            myTeams: Fr,
            countries: Er({
              name: 'countries',
              initialState: {
                countries: [
                  {
                    name: 'Deutschland',
                    leagues: [
                      { name: '\u041b\u0438\u0433\u0430 2', fav: !0 },
                      {
                        name: '\u041f\u0435\u0440\u0432\u044b\u0439 \u0434\u0438\u0432\u0438\u0437\u0438\u043e\u043d',
                        fav: !1,
                      },
                    ],
                  },
                  {
                    name: 'Italien',
                    leagues: [
                      { name: '\u041b\u0438\u0433\u0430 2', fav: !0 },
                      {
                        name: '\u041f\u0435\u0440\u0432\u044b\u0439 \u0434\u0438\u0432\u0438\u0437\u0438\u043e\u043d',
                        fav: !1,
                      },
                    ],
                  },
                ],
                loading: !1,
              },
              reducers: {},
            }).reducer,
          },
        })
      a.createRoot(document.getElementById('root')).render(
        (0, tt.jsx)(Ve, {
          basename: '/stavmatic',
          children: (0, tt.jsx)(Nt, {
            store: $r,
            children: (0, tt.jsx)(Jr, {}),
          }),
        }),
      )
    })()
})()
//# sourceMappingURL=main.bd0c8215.js.map
