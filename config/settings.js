var settings = {
  title      : "广西民族大学“梦圆中国·美在民大”摄影大赛",
  host       : 'http://localhost:3000',
  prefix     : 'pic-vote',
  port       : process.env.NODE_PORT || 3000,
  init: function(app){
    app.set('view engine', 'jade');
    app.locals.title = this.title;
    app.locals.root = [this.host, this.prefix].join('/');
    // app.locals.path = this.path;
    app.locals.url = function (){
      return app.locals.root + '/' + Array.prototype.join.call(arguments, '/');
    };
  }
};

module.exports = settings;
