var GameView = Backbone.View.extend({
  
  el: $('#main'),
  stage: null,
  player: null,
  baddie: null,
  imagesLoaded: 0,

  initialize: function(){
    var that = this;
    this.on('imagesLoaded', function(ev){
      Main.setupKeys();
      Main.ticker();
    });
    this.render();
  },
  render: function(){
    var canvas = document.getElementById('gameCanvas');
    this.stage = new createjs.Stage(canvas);
    this.createImage(this.model.get('bgUrl'), this.onBackgroundLoaded, 0, 0, 0, 0);
    this.createImage(this.model.get('playerUrl'), this.onPlayerLoaded, this.model.get('playerInitX'), this.model.get('playerInitY'), 0, 0);
    this.createImage(this.model.get('baddieUrl'), this.onBaddieLoaded, this.model.get('baddieInitX'), this.model.get('baddieInitY'), 0, 0);
  },
  createImage: function(url, callback, x, y, regX, regY){
    var img = new Image(),
        that = this;
    img.src = url;
    $(img).load(function() {
      callback(that, img, x, y, regX, regY);
    });
  },
  createBitmap: function(img, x, y, regX, regY) {
    var bmp = new createjs.Bitmap(img),
        that = this;
    bmp.x = x;
    bmp.y = y;
    bmp.regX = regX;
    bmp.regY = regY; 
    that.stage.addChild(bmp);
    that.stage.update();
    return bmp;
  },
  checkImageCount: function(context) {
    context.imagesLoaded++;
    if (context.imagesLoaded === 2) {
      context.trigger('imagesLoaded');
    }
  },
  onBackgroundLoaded: function(context, img, x, y, regX, regY) {
    var bmp = context.createBitmap(img, x, y, regX, regY);
    context.checkImageCount(context);
  },
  onPlayerLoaded: function(context, img, x, y, regX, regY) {
    var bmp = context.createBitmap(img, x, y, regX, regY);
    context.player = bmp;
    context.checkImageCount(context);
  },
  onBaddieLoaded: function(context, img, x, y, regX, regY) {
    var bmp = context.createBitmap(img, x, y, regX, regY);
    context.baddie = bmp;
    context.checkImageCount(context);
  }

});
