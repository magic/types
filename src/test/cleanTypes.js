import {cleanType, cleanTypes} from '../index.js';
import {should as sh} from 'chai';

var should = sh();

describe('magic-types class string cleanup utilities', () => {
  describe('#cleanType()', () => {
    it('should replace array, nodeList and object', () => {
      cleanType('array').should.equal('[object Array]');
      cleanType('nodeList').should.equal('[object NodeList]');
      cleanType('object').should.equal('[object Object]');
    });
    it('should return other strings unchanged', () => {
      cleanType('string').should.equal('string');
      cleanType('anystring').should.equal('anystring');
    });
  });
  
  describe('#cleanTypes()', () => {
    it('should replace array, nodeList and object types in arrays', () => {
      cleanTypes(['array', 'nodeList', 'object'])
        .should
        .deep
        .equal(['[object Array]', '[object NodeList]', '[object Object]'])
      ;
    });
    it('should not replace normal js types in arrays', () => {
      cleanTypes(['string', 'object', 'number'])
        .should
        .deep
        .equal(['string', '[object Object]', 'number'])
      ;
    });
  });
});
