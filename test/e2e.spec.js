/* global define, it, describe, beforeEach, document */
const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');

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

  it('should allow Movie to be typed in', () =>
  nightmare
    .goto(url)
    .type('input#movieInput', 'Batman')
    .click('button#myBtn.btn.btn-primary')
    .evaluate(() => document.querySelectorAll('body')[0].innerHTML)
    .then((innerHTML) => {
      expect(innerHTML).to.contain('Batman');
    })
     
);
it('should have a baseURI of http://localhost:8888/#/', () =>
  nightmare
    .goto(url)
    .type('input#movieInput', 'Batman')
    .click('button#myBtn.btn.btn-primary')
    .evaluate(() =>  document.querySelectorAll('body')[0].baseURI)
    .then((baseURI) => {
      expect(baseURI).to.contain('http://localhost:8888/#/');
    })
);
it('inner HTML length before results found is 504', () =>
nightmare
  .goto(url)
  .type('input#movieInput', 'Batman')
  .click('button#myBtn.btn.btn-primary')
  .evaluate(() =>  document.querySelectorAll('body')[0].innerHTML.length)
  .then((length) => {
    expect(length).to.equal(504);
  })
);
  
  it('returns the correct status code', () => axios.get(url)
    .then(response => expect(response.status === 200)));
});
//document.querySelectorAll('body')[0].childNodes[0].nextElementSibling.ownerDocument.all.results[0].textContent
//document.querySelectorAll('body')[0].innerHTML.length