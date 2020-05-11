function arrayWalk(data, f) {
  for(var key in data) {
    f(data[key], key);
  }
}

var arr = [1, 2, 4, 8, 16];
arrayWalk(
  arr,
  function(value, key) {
    console.log(key + ':' + value);
  }
);
