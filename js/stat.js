'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var GAP = 50;
var FONTSIZE = 16;
var TEXT_WIDTH = 20;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var PADDING = 130;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var writeText = function (ctx) {
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.font = 'PT Mono FONTSIZE';
  ctx.fillText('Ура вы победили!', PADDING, BAR_WIDTH);
  ctx.fillText('Список результатов:', PADDING, BAR_WIDTH + FONTSIZE);
};


var getMaxElement = function (timeResults) {
  var maxElement = timeResults[0];
  for (var i = 1; i < timeResults.length; i++) {
    if (timeResults[i] > maxElement) {
      maxElement = timeResults[i];
    }
  }
  return maxElement;
};

var getNamesAndScore = function (ctx, names, times) {
  var playerName = names;
  var maxTime = getMaxElement(times);

  for (var i = 0; i < playerName.length; i++) {
    var fillColor = function () {
      var transparent = Math.random();
      return 'rgba(1,1,255,' + transparent + ')';
    };

    ctx.fillStyle = 'rgba(0, 0, 0, 1';
    ctx.fillText(Math.round(times[i]), PADDING + GAP * i * 2, CLOUD_HEIGHT - (BAR_HEIGHT * times[i] / maxTime) - BAR_WIDTH);

    ctx.fillStyle = 'rgba(0, 0, 0, 1';
    ctx.fillText(playerName[i], PADDING + GAP * i * 2, CLOUD_HEIGHT);
    if (playerName[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = fillColor();
    }

    ctx.fillRect(PADDING + GAP * i * 2, (CLOUD_HEIGHT - TEXT_WIDTH), (BAR_WIDTH), -1 * (BAR_HEIGHT * times[i]) / maxTime);
  }
};


window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, 100, 10, '#fff');
  getMaxElement(times);
  writeText(ctx);
  getNamesAndScore(ctx, names, times);
};
