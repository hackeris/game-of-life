/**
 * Created by hackeris on 2017/2/18.
 */

function Grid(width, height) {
  this.array = create2DArray(width, height, Cell);
  this.width = width;
  this.height = height;
}

Grid.prototype.randomFill = function (prob) {
  for (var i = 0; i < this.height; i++) {
    for (var j = 0; j < this.width; j++) {
      this.array[i][j].status = Math.random() > prob ? 1 : 0;
    }
  }
};

Grid.prototype.nextGeneration = function () {

  function getNextStatus(map, i, j) {
    function getCellStatus(grid, i, j) {
      if (i < 0 || j < 0 || i >= grid.height || j >= grid.width) {
        return 0;
      }
      return grid.array[i][j].status;
    }

    var neighbors = [[i - 1, j - 1], [i - 1, j], [i - 1, j + 1],
      [i, j - 1], [i, j + 1],
      [i + 1, j - 1], [i + 1, j], [i + 1, j + 1]];
    var neighborsCount = 0;
    for (var idx = 0; idx < neighbors.length; idx++) {
      neighborsCount += getCellStatus(map, neighbors[idx][0], neighbors[idx][1]);
    }
    if (neighborsCount < 2) {
      return 0;
    } else if (neighborsCount == 2) {
      return map.array[i][j].status;
    } else if (neighborsCount == 3) {
      return 1;
    } else {
      return 0;
    }
  }

  var nextStatus = create2DArray(this.width, this.height);
  for (var i = 0; i < this.height; i++) {
    for (var j = 0; j < this.width; j++) {
      nextStatus[i][j] = getNextStatus(this, i, j);
    }
  }

  for (i = 0; i < this.height; i++) {
    for (j = 0; j < this.width; j++) {
      this.array[i][j].status = nextStatus[i][j];
    }
  }
};
