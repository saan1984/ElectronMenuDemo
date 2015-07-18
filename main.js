var application = require('app'),
    BrowserWindow = require('browser-window'),
    MyMenu = require('./js/my-menu');
application.on('ready', function() {
    var mainWindow = new BrowserWindow({
        width: 600,
        height: 300,
        center:true,
        title:"Electron custom Menu",
    });
    mainWindow.loadUrl('file://' + __dirname + '/main.html');
    MyMenu.developMenus();
    mainWindow.openDevTools();
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});