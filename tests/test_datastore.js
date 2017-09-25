var ds = new App.DataStore();
console.log('var ds = new App.DataStore();');
ds.add('m@bond.com', 'tea');
console.log('ds.add(\'m@bond.com\', \'tea\');')
ds.add('james@bond.com', 'eshpressho');
console.log('ds.add(\'james@bond.com\', \'eshpressho\');')
ds.getAll();
console.log('ds.getAll();')
ds.remove('james@bond.com');
console.log('ds.remove(\'james@bond.com\');')
ds.getAll();
console.log('ds.getAll();')
ds.get('m@bond.com');
console.log('ds.get(\'m@bond.com\');')
ds.get('james@bond.com');
console.log('ds.get(\'james@bond.com\');')
