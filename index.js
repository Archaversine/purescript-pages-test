// output/Data.Functor/index.js
var map = function(dict) {
  return dict.map;
};

// output/Control.Apply/index.js
var apply = function(dict) {
  return dict.apply;
};

// output/Control.Applicative/index.js
var pure = function(dict) {
  return dict.pure;
};
var liftA1 = function(dictApplicative) {
  var apply2 = apply(dictApplicative.Apply0());
  var pure1 = pure(dictApplicative);
  return function(f) {
    return function(a) {
      return apply2(pure1(f))(a);
    };
  };
};

// output/Data.Bounded/foreign.js
var topChar = String.fromCharCode(65535);
var bottomChar = String.fromCharCode(0);
var topNumber = Number.POSITIVE_INFINITY;
var bottomNumber = Number.NEGATIVE_INFINITY;

// output/Data.Maybe/index.js
var Nothing = /* @__PURE__ */ function() {
  function Nothing2() {
  }
  ;
  Nothing2.value = new Nothing2();
  return Nothing2;
}();
var Just = /* @__PURE__ */ function() {
  function Just2(value0) {
    this.value0 = value0;
  }
  ;
  Just2.create = function(value0) {
    return new Just2(value0);
  };
  return Just2;
}();

// output/Effect.Console/foreign.js
var log = function(s) {
  return function() {
    console.log(s);
  };
};

// output/Web.DOM.Document/foreign.js
var getEffProp = function(name14) {
  return function(doc) {
    return function() {
      return doc[name14];
    };
  };
};
var url = getEffProp("URL");
var documentURI = getEffProp("documentURI");
var origin = getEffProp("origin");
var compatMode = getEffProp("compatMode");
var characterSet = getEffProp("characterSet");
var contentType = getEffProp("contentType");
var _documentElement = getEffProp("documentElement");

// output/Data.Nullable/foreign.js
function nullable(a, r, f) {
  return a == null ? r : f(a);
}

// output/Data.Nullable/index.js
var toMaybe = function(n) {
  return nullable(n, Nothing.value, Just.create);
};

// output/Effect/foreign.js
var pureE = function(a) {
  return function() {
    return a;
  };
};
var bindE = function(a) {
  return function(f) {
    return function() {
      return f(a())();
    };
  };
};

// output/Control.Bind/index.js
var bind = function(dict) {
  return dict.bind;
};

// output/Control.Monad/index.js
var ap = function(dictMonad) {
  var bind2 = bind(dictMonad.Bind1());
  var pure2 = pure(dictMonad.Applicative0());
  return function(f) {
    return function(a) {
      return bind2(f)(function(f$prime) {
        return bind2(a)(function(a$prime) {
          return pure2(f$prime(a$prime));
        });
      });
    };
  };
};

// output/Effect/index.js
var $runtime_lazy = function(name14, moduleName, init) {
  var state2 = 0;
  var val;
  return function(lineNumber) {
    if (state2 === 2)
      return val;
    if (state2 === 1)
      throw new ReferenceError(name14 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
    state2 = 1;
    val = init();
    state2 = 2;
    return val;
  };
};
var monadEffect = {
  Applicative0: function() {
    return applicativeEffect;
  },
  Bind1: function() {
    return bindEffect;
  }
};
var bindEffect = {
  bind: bindE,
  Apply0: function() {
    return $lazy_applyEffect(0);
  }
};
var applicativeEffect = {
  pure: pureE,
  Apply0: function() {
    return $lazy_applyEffect(0);
  }
};
var $lazy_functorEffect = /* @__PURE__ */ $runtime_lazy("functorEffect", "Effect", function() {
  return {
    map: liftA1(applicativeEffect)
  };
});
var $lazy_applyEffect = /* @__PURE__ */ $runtime_lazy("applyEffect", "Effect", function() {
  return {
    apply: ap(monadEffect),
    Functor0: function() {
      return $lazy_functorEffect(0);
    }
  };
});
var functorEffect = /* @__PURE__ */ $lazy_functorEffect(20);

// output/Unsafe.Coerce/foreign.js
var unsafeCoerce2 = function(x) {
  return x;
};

// output/Web.DOM.Document/index.js
var toNonElementParentNode = unsafeCoerce2;

// output/Web.DOM.Element/foreign.js
var getProp = function(name14) {
  return function(doctype) {
    return doctype[name14];
  };
};
var _namespaceURI = getProp("namespaceURI");
var _prefix = getProp("prefix");
var localName = getProp("localName");
var tagName = getProp("tagName");

// output/Web.DOM.ParentNode/foreign.js
var getEffProp2 = function(name14) {
  return function(node) {
    return function() {
      return node[name14];
    };
  };
};
var children = getEffProp2("children");
var _firstElementChild = getEffProp2("firstElementChild");
var _lastElementChild = getEffProp2("lastElementChild");
var childElementCount = getEffProp2("childElementCount");

// output/Web.DOM.Element/index.js
var toNode = unsafeCoerce2;

// output/Web.DOM.Node/foreign.js
var getEffProp3 = function(name14) {
  return function(node) {
    return function() {
      return node[name14];
    };
  };
};
var baseURI = getEffProp3("baseURI");
var _ownerDocument = getEffProp3("ownerDocument");
var _parentNode = getEffProp3("parentNode");
var _parentElement = getEffProp3("parentElement");
var childNodes = getEffProp3("childNodes");
var _firstChild = getEffProp3("firstChild");
var _lastChild = getEffProp3("lastChild");
var _previousSibling = getEffProp3("previousSibling");
var _nextSibling = getEffProp3("nextSibling");
var _nodeValue = getEffProp3("nodeValue");
var textContent = getEffProp3("textContent");
function setTextContent(value12) {
  return function(node) {
    return function() {
      node.textContent = value12;
    };
  };
}

// output/Data.Traversable/foreign.js
var traverseArrayImpl = function() {
  function array1(a) {
    return [a];
  }
  function array2(a) {
    return function(b) {
      return [a, b];
    };
  }
  function array3(a) {
    return function(b) {
      return function(c) {
        return [a, b, c];
      };
    };
  }
  function concat2(xs) {
    return function(ys) {
      return xs.concat(ys);
    };
  }
  return function(apply2) {
    return function(map3) {
      return function(pure2) {
        return function(f) {
          return function(array) {
            function go2(bot, top2) {
              switch (top2 - bot) {
                case 0:
                  return pure2([]);
                case 1:
                  return map3(array1)(f(array[bot]));
                case 2:
                  return apply2(map3(array2)(f(array[bot])))(f(array[bot + 1]));
                case 3:
                  return apply2(apply2(map3(array3)(f(array[bot])))(f(array[bot + 1])))(f(array[bot + 2]));
                default:
                  var pivot = bot + Math.floor((top2 - bot) / 4) * 2;
                  return apply2(map3(concat2)(go2(bot, pivot)))(go2(pivot, top2));
              }
            }
            return go2(0, array.length);
          };
        };
      };
    };
  };
}();

// output/Web.DOM.NonElementParentNode/foreign.js
function _getElementById(id2) {
  return function(node) {
    return function() {
      return node.getElementById(id2);
    };
  };
}

// output/Web.DOM.NonElementParentNode/index.js
var map2 = /* @__PURE__ */ map(functorEffect);
var getElementById = function(eid) {
  var $2 = map2(toMaybe);
  var $3 = _getElementById(eid);
  return function($4) {
    return $2($3($4));
  };
};

// output/Web.HTML/foreign.js
var windowImpl = function() {
  return window;
};

// output/Web.HTML.HTMLDocument/index.js
var toDocument = unsafeCoerce2;

// output/Web.HTML.Window/foreign.js
function document(window2) {
  return function() {
    return window2.document;
  };
}

// output/Main/index.js
var main = function __do() {
  var win = windowImpl();
  var doc = document(win)();
  var elem2 = getElementById("target-elem")(toNonElementParentNode(toDocument(doc)))();
  if (elem2 instanceof Nothing) {
    return log("Error: no target element")();
  }
  ;
  if (elem2 instanceof Just) {
    return setTextContent("Modified from Purescript!")(toNode(elem2.value0))();
  }
  ;
  throw new Error("Failed pattern match at Main (line 25, column 3 - line 27, column 68): " + [elem2.constructor.name]);
};
export {
  main
};
