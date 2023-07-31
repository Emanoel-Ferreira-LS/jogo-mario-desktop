const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 700,
        resizable: false,
        autoHideMenuBar: true
    });

    
    mainWindow.loadURL(`file://${__dirname}/index.html`)
})