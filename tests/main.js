eval(require('fs').readFileSync('tests/datastore.js', 'utf8'));
eval(require('fs').readFileSync('tests/truck.js', 'utf8'));

(function(global) {
  'use strict';
  var App = global.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var myTruck = new Truck('MC1', new DataStore());
  global.myTruck = myTruck;
})(global);

eval(require('fs').readFileSync('tests/test_datastore.js', 'utf8'));
eval(require('fs').readFileSync('tests/test_truck.js', 'utf8'));
