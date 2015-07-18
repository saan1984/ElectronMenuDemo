var Menu = require('menu'),
    app = require('app'),
    BrowserWindow = require('browser-window');
module.exports = {
    //Developing Menu using buildFromTemplate Method
    developMenus: function () {
        var myMenu = Menu.buildFromTemplate([
            {
                label: 'Development',
                submenu: [{
                    label: 'Toggle DevTools',
                    accelerator: 'Alt+CmdOrCtrl+I',
                    click: function () {
                        BrowserWindow.getFocusedWindow().toggleDevTools();
                    }
                }, {
                    label: 'Quit',
                    accelerator: 'CmdOrCtrl+Q',
                    click: function () {
                        app.quit();
                    }
                }]
            }]);
        Menu.setApplicationMenu(myMenu);
    }
};