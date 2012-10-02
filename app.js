var app = module.exports = require('appjs');

app.serveFilesFrom('./cloudcmd/');

var appWindow = app.createWindow();

appWindow.on('create', function(){
  console.log("Window Created");
  appWindow.frame.show();
  appWindow.frame.center();
});


appWindow.on('ready', function(){
  console.log("Window Ready");
  appWindow.require = require;
  appWindow.process = process;
  appWindow.module = module;
  appWindow.addEventListener('keydown', function(e){
    if (e.keyIdentifier === 'F12') {
      appWindow.frame.openDevTools();
    }
  });
});

appWindow.on('load',function(){alert();});

appWindow.on('close', function(){
  console.log("Window Closed");
});