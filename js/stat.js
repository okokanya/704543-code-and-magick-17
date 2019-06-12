'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var gap = 50;
var fontSize = 16;
var FONT_GAP = 15;
var TEXT_WIDTH = 20;
var BAR_WIDTH = 40;
var barHeight = 150;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx, names, times) {

  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, 100, 10, '#fff');

  var getMaxElement = function(arr) {
    var maxElement = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    console.log(maxElement)
    return maxElement;
  };
  var maxTime = getMaxElement(times);


  var playerName = names;
  for (var i = 0; i < playerName.length; i++) {
    var fillColor = function () {
      var transparent = Math.random();
      console.log(transparent);
      return 'rgba(1,1,255,' + transparent + ')'
    }

    ctx.fillStyle = '#000';
    ctx.font = 'PT Mono 16'
    ctx.fillText('Ура вы победили!', 130, BAR_WIDTH);
    ctx.fillText('Список результатов:', 130, BAR_WIDTH + fontSize);

    ctx.fillStyle = 'black';
    ctx.fillText(Math.round(times[i]), 130+gap*i*2, CLOUD_HEIGHT - (barHeight * times[i] / maxTime)-BAR_WIDTH);

    ctx.fillStyle = '#000';
    ctx.fillText(playerName[i], 130+gap*i*2, CLOUD_HEIGHT);
    if (playerName[i] == 'Вы') {
      ctx.fillStyle = 'red' 
    } else {
      ctx.fillStyle = fillColor();
    }

    ctx.fillRect(130+gap*i*2,(CLOUD_HEIGHT - TEXT_WIDTH), (BAR_WIDTH), -1*(barHeight * times[i]) / maxTime);
  }
};
