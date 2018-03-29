/* eslint-disable */

// String.includes
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/includes#Polyfill
if (!String.prototype.includes) {
  String.prototype.includes = function includesPolyfill(search, start) {
    if (typeof start !== "number") {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    }
    return this.indexOf(search, start) !== -1;
  };
}

// Element.matches
// https://developer.mozilla.org/en/docs/Web/API/Element/matches#Polyfill
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.matchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector ||
    Element.prototype.webkitMatchesSelector ||
    function matchesPolyfill(s) {
      const matches = (this.document || this.ownerDocument).querySelectorAll(s);
      let i = matches.length;
      while (--i >= 0 && matches.item(i) !== this) {}
      return i > -1;
    };
}
