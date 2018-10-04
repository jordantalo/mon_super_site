var webdriverio = require('webdriverio');
var path = require('path');

const expect = require('chai').expect;

var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
}
const browser = webdriverio.remote(options);

let toUpload = path.join(__dirname, 'index.html')

describe('index tests', function() {
    before(function(done) {
        browser.init().url('file://' + toUpload)
            .then(() => {done();})
            .catch((err) => done(err));
      });

      after(function() {
      browser
          .catch((err) => { console.log(err);})
          .end();
      });

    it('page title', function(done) {
        browser.getTitle().then((title) => {
          expect(title).to.equal('Maison page');
          done();
        }).catch((err) => done(err));
    });

    it('h1 title', function(done) {
        browser.getText('h1.title').then((title) => {
          expect(title).to.equal('Enfin du web');
          done();
        }).catch((err) => done(err));
    });

});    
