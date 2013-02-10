var GameModel = Backbone.Model.extend({
  defaults: {
    refreshRate:60,
    bgUrl:'img/bg.jpg',
    playerInitX:300,
    playerInitY:450,
    playerMoveAmount:6,
    playerUrl:'img/bah_01.png',
    baddieInitX:500,
    baddieInitY:-500,
    baddieMoveAmount:8,
    baddieUrl:'img/bad_rock_01.png'
  }
});