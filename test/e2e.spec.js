const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;

let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(8888);

const url = 'http://localhost:8888';


describe('express', () => {
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('should have the correct page title', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('h1').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('🎞 Movie Finder');
      })
  );
});
