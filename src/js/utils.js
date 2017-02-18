/**
 * Created by hackeris on 2017/2/18.
 */

function create2DArray(m, n, cls) {
  var array = [];
  for (var i = 0; i < n; i++) {
    var line = [];
    for (var j = 0; j < m; j++) {
      line.push(cls == undefined ? 0 : new cls());
    }
    array.push(line);
  }
  return array;
}

