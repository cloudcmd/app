var app = module.exports = require('appjs');

app.serveFilesFrom('./cloudcmd1/');

var window = app.createWindow();

window.on('create', function(){
  console.log("Window Created");
  window.frame.show();
  window.frame.center();
});


window.on('ready', function(){
  console.log("Window Ready");
  window.require = require;
  window.process = process;
  window.module = module;
  window.addEventListener('keydown', function(e){
    if (e.keyIdentifier === 'F12') {
      window.frame.openDevTools();
    }
  });
});

window.on('load',function(){alert();});

window.on('close', function(){
  console.log("Window Closed");
});