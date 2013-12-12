var express = require('express');
var app = express();
var path = require('path');
var Config = require('./config.js').Config;
var API = Config.getApiUrl();

var js = [];
var ss = [];

js.push('//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js');
js.push('//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js');
js.push('//ajax.googleapis.com/ajax/libs/angularjs/1.2.4/angular.min.js');
js.push('//cdnjs.cloudflare.com/ajax/libs/flot/0.8.1/jquery.flot.min.js');
js.push('//cdnjs.cloudflare.com/ajax/libs/jquery-resize/1.1/jquery.ba-resize.min.js');
js.push('//cdnjs.cloudflare.com/ajax/libs/jquery-sparklines/2.1.2/jquery.sparkline.min.js');
js.push('//cdnjs.cloudflare.com/ajax/libs/fullcalendar/1.6.4/fullcalendar.min.js');
js.push('//cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.5.1/jquery.nicescroll.min.js');
js.push('//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js');
js.push('//cdnjs.cloudflare.com/ajax/libs/jScrollPane/2.0.14/jquery.jscrollpane.min.js');
js.push('//cdnjs.cloudflare.com/ajax/libs/jScrollPane/2.0.14/jquery.jscrollpane.js');
js.push('js/plus.js');
js.push('js/theme.js');

ss.push('css/plus.css');
ss.push('//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.min.css');
ss.push('//cdnjs.cloudflare.com/ajax/libs/fullcalendar/1.6.4/fullcalendar.min.js');
ss.push('//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css');
ss.push('lib/flags/flags.css');

/** Settings */
app.set('port', Config.Server.PORT);
app.set('user', '');
app.set('envi', 'development');

/** Environment */
app.configure(function() {
  app.set('title', 'MNA|WC - World Cup Web');
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(require('less-middleware')({
    src : __dirname + '/resources'
  }));
  app.use(express.static(path.join(__dirname, 'resources')));
  app.use(express.cookieParser());
});

app.configure('development', function() {

});

app.configure('production', function() {

});

/** Base URL **/
app.get('/', function(req, res) {
  
  res.render('index', {
    js : js,
    api: API,
    stylesheets : ss,
    session : req.session,
    title : 'MoNoApps - World Cup'
  });
});

app.get('/post/groups', function(req, res) {
  res.render('posts/groups', {
    js : js,
    api: API,
    stylesheets : ss,
    session : req.session,
    title : 'MoNoApps - Groups'
  });
});

app.listen(process.env.WC_APP_PORT || Config.Server.PORT, function(){
  console.log('MNA|WC Up on port: ' + Config.Server.PORT);
});
