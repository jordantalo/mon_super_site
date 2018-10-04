var webdriverio = require('webdriverio');
var path = require('path');

var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
}
var toUpload = path.join(__dirname, 'index.html')

browser = webdriverio
    .remote(options)
    .init()
        .url('file://' + toUpload)
.getTitle().then( (title) => {
    console.log("titre : " + title)
})
.getText('h1.title').then((title) => {
    console.log("h1 : " + title)
})
.catch(function(err) {
    console.log(err);
    })

.end()
