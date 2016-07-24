(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// empty for now.
// define angular module
angular.module("festaspa", ["ngRoute"]).config(function ($routeProvider) {

  $routeProvider.otherwise("/listar-festas");

}).service("convidadoservice", function ($http) {
  this.list = function () {
    return $http({
      url: "convidado/list",
      method: "GET"
    });
  };
  this.find = function (idconvidado) {
    return $http({
      url: "convidado/" + idconvidado,
      method: "GET"
    });
  };
  this.save = function (convidado) {
    return $http({
      url: "convidado/save",
      method: convidado.idconvidado ? "PUT" : "POST",
      data: JSON.stringify(convidado)
    });
  };
  this.del = function (idconvidado) {
    return $http({
      url: "convidado/" + idconvidado,
      method: "DELETE"
    });
  };
}).service("festaservice", function ($http) {
  this.list = function () {
    return $http({
      url: "festa/list",
      method: "GET"
    });
  };
  this.find = function (idfesta) {
    return $http({
      url: "festa/" + idfesta,
      method: "GET"
    });
  };
  this.save = function (festa) {
    return $http({
      url: "festa/save",
      method: festa.idfesta ? "PUT" : "POST",
      data: JSON.stringify(festa)
    });
  };
  this.del = function (idfesta) {
    return $http({
      url: "festa/" + idfesta,
      method: "DELETE"
    });
  };
});
},{}]},{},[1]);
