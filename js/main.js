var Main = (function($){

  // game model
  var gameModel = new GameModel();

  // game view
  var gameView = new GameView( { model: gameModel } );

  // key binding
  var setupKeys = function() {
    var moveAmount = gameModel.get('playerMoveAmount');

    $(document).keydown(function(e){
      switch(e.keyCode){
        case 65: // left (a)
          gameView.player.x -= moveAmount;
          break;
        case 68: // right (d)
          gameView.player.x += moveAmount;
          break;
      }
    });
  }

  var ticker = function() {
    createjs.Ticker.setFPS(gameModel.get('refreshRate'));
    createjs.Ticker.useRAF = true;
    createjs.Ticker.addListener(Main);  // look for "tick" function in Main
  }

  var tick = function(dt, paused) {
    gameView.stage.update();
    gameView.baddie.y += 3;

    // hit test
    if ( (gameView.baddie.y > gameView.player.y) && (gameView.baddie.x > gameView.player.x+40) && (gameView.baddie.y < gameView.player.y+40) && (gameView.baddie.x < gameView.player.x+80) ) {
      alert('hit');
    }
  }

  return {
    setupKeys : setupKeys,
    ticker : ticker,
    tick : tick
  }

})(jQuery);
