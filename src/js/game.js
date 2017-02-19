/**
 * Created by hackeris on 2017/2/18.
 */

function GameCanvas(id, width, height) {
  this.canvas = document.getElementById(id);
  this.width = width;
  this.height = height;
  this.canvas.width = width;
  this.canvas.height = height;
  this.grid = new Grid(200, 200);
  this.grid.putCells([
      [1, 0, 1],
      [1, 0, 1],
      [1, 1, 1]
    ],
    100, 100);
}

GameCanvas.prototype.step = function () {

  function fillCanvas(canvas, map) {
    var cellWidth = canvas.width / map.width;
    var cellHeight = canvas.height / map.height;

    var context = canvas.getContext('2d');
    context.fillStyle = '#000000';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#ffffff';

    for (var i = 0; i < map.height; i++) {
      for (var j = 0; j < map.width; j++) {
        if (map.array[i][j].status == 1) {
          context.fillRect(i * cellWidth, j * cellHeight, cellWidth, cellHeight);
        }
      }
    }
  }

  this.grid.nextGeneration();
  fillCanvas(this.canvas, this.grid);
};

