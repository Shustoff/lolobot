// Generated by CoffeeScript 1.6.1
(function() {
  var Helpers;

  Helpers = (function() {

    function Helpers() {}

    Helpers.prototype.lSet = function(n, m) {
      return localStorage.setItem(n, m);
    };

    Helpers.prototype.lGet = function(n) {
      return localStorage.getItem(n);
    };

    Helpers.prototype.lDel = function(n) {
      return localStorage.removeItem(n);
    };

    Helpers.prototype.resetBuilds = function() {
      try {
        localStorage.clear();
        return window.location.reload();
      } catch (error) {
        return alert("Не удалось очистить локальное хранилище:" + error);
      }
    };

    return Helpers;

  })();

}).call(this);
