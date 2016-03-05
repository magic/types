import { cleanType, cleanTypes } from '../index.js';
import { should } from 'chai';

should();

describe('magic-types class string cleanup utilities', () => {
  describe('#cleanType()', () => {
    it('should replace object with [object Object]', () => {
      cleanType('object').should.equal('[object Object]');
    });

    it('should replace nodeList with [object NodeList]', () => {
      cleanType('nodeList').should.equal('[object NodeList]');
      cleanType('NodeList').should.equal('[object NodeList]');
      cleanType('nodelist').should.equal('[object NodeList]');
    });

    it('should replace array with [object Array]', () => {
      cleanType('array').should.equal('[object Array]');
    });

    it('should return other strings unchanged', () => {
      cleanType('string').should.equal('string');
      cleanType('anystring').should.equal('anystring');
    });
  });

  describe('#cleanTypes()', () => {
    it('should replace array, nodeList and object types in arrays', () => {
      cleanTypes(['array', 'nodeList', 'object'])
        .should.deep
        .equal(['[object Array]', '[object NodeList]', '[object Object]']);
    });

    it('should not replace normal js types in arrays', () => {
      cleanTypes(['string', 'object', 'number'])
        .should.deep
        .equal(['string', '[object Object]', 'number']);
    });
  });
});
