import * as t from '../index.js';
import { should } from 'chai';

should();

var v = {
  arr: ['test'],
  bool: {
    t: true,
    f: false,
  },
  func: () => {},
  float: 9.9,
  int: 9,
  nil: null,
  obj: { test: 'val' },
  str: 'someothervalue',
  undef: undefined,
  date: new Date(),
  error: new Error('testerror'),
};

describe('magic-types', () => {
  describe('#test()', () => {
    it('should always return a boolean true/false', () => {
      t.test(v.str, 'string').should.be.true;
      t.test(v.str, 'number').should.be.false;
    });

    it('should return true for valid comparisons', () => {
      t.test(v.obj, 'object').should.be.true;
      t.test(v.str, 'string').should.be.true;
    });

    it('should return false for invalid comparisons', () => {
      t.test(v.obj, 'string').should.be.false;
      t.test(v.str, 'object').should.be.false;
    });

    it('should return true if one type in array matches', () => {
      t.test(v.str, ['object', 'string']).should.be.true;
    });

    it('should return false if none of the items in array match', () => {
      t.test(v.obj, ['number', 'string']).should.be.false;
    });

    it('should return true if one argument after the first typematches', () => {
      t.test(v.str, ['number'], 'string').should.be.true;
      t.test(v.str, 'object', 'string').should.be.true;
    });

    it('should return false if no argument after the first typematches', () => {
      t.test(v.int, ['object'], 'string').should.be.false;
      t.test(v.int, 'object', 'string').should.be.false;
    });
  });

  describe('#is()', () => {
    it('should return true for valid comparisons', () => {
      t.is(v.obj, 'object').should.be.true;
      t.is(v.obj, '[object Object]').should.be.true;
      t.is(v.arr, '[object Array]').should.be.true;
      t.is(v.arr, '[object Array]').should.be.true;
    });

    it('should return false for falsy comparisons', () => {
      t.is(v.str, 'number').should.be.false;
      t.is(v.obj, '[object Array]').should.be.false;
    });
  });

    // test not function
  describe('#not()', () => {
    it('should return true for falsy comparisons', () => {
      t.not(v.str, 'object').should.be.true;
      t.not(v.obj, 'string').should.be.true;
      t.not(v.arr, '[object Object]').should.be.true;
    });

    it('should return false for valid comparisons', () => {
      t.not(v.arr, 'array').should.be.false;
      t.not(v.obj, 'object').should.be.false;
      t.not(v.arr, '[object Array]').should.be.false;
    });
  });

  describe('#isArray()', () => {
    it('should always return boolean values', () => {
      // test type of returned value
      t.isArray(v.arr).should.be.true;
      t.isArray(v.str).should.be.false;
    });

    it('should return true if passed an array', () => {
      t.isArray(v.arr).should.be.true;
    });

    it('should return false if passed a string or object', () => {
      t.isArray(v.obj).should.be.false;
      t.isArray(v.str).should.be.false;
      t.isArray(v.undef).should.be.false;
    });
  });

  describe('#isBoolean()', () => {
    it('should always return boolean values', () => {
      // test type of returned value
      t.isBoolean(v.bool.t).should.be.true;
      t.isBoolean(v.str).should.be.false;
    });
    it('should return true if passed a boolean true/false', () => {
      t.isBoolean(v.bool.t).should.be.true;
      t.isBoolean(v.bool.f).should.be.true;
    });

    it('should return false if passed "true" or "false"', () => {
      t.isBoolean('true').should.be.false;
      t.isBoolean('false').should.be.false;
    });

    it('should return false if passed strings, numbers or undefined', () => {
      t.isBoolean(v.str).should.be.false;
      t.isBoolean(v.int).should.be.false;
      t.isBoolean(v.undef).should.be.false;
    });
  });

  describe('#isDefined()', () => {
    it('should always return boolean values', () => {
      t.isDefined(v.bool.t).should.be.true;
      t.isDefined(v.undef).should.be.false;
    });

    it('should return true for defined values', () => {
      t.isDefined(v.str).should.be.true;
      t.isDefined(v.int).should.be.true;
      t.isDefined(v.bool.f).should.be.true;
    });

    it('should return false for undefined values', () => {
      t.isDefined(v.undef).should.be.false;
    });
  });

  describe('isFunction', () => {
    it('should always return booleans', () => {
      t.isFunction(v.func).should.be.true;
      t.isFunction(v.arr).should.be.false;
    });

    it('should return true for functions', () => {
      t.isFunction(v.func).should.be.true;
    });

    it('should return false for non functions', () => {
      t.isFunction(v.bool.f).should.be.false;
      t.isFunction(v.bool.t).should.be.false;
      t.isFunction(v.arr).should.be.false;
    });
  });

  describe('#isNumber', () => {
    it('should always return booleans', () => {
      t.isNumber(v.int).should.be.true;
      t.isNumber(v.bool.f).should.be.false;
    });

    it('should return true for ints and floats', () => {
      t.isNumber(v.int).should.be.true;
      t.isNumber(v.float).should.be.true;
    });

    it('should return false for non numbers', () => {
      t.isNumber(v.str).should.be.false;
      t.isNumber(v.bool.t).should.be.false;
    });
  });

  describe('#isObject()', () => {
    it('should always return booleans', () => {
      t.isObject(v.obj).should.be.true;
      t.isObject(v.bool.f).should.be.false;
    });

    it('should return true for objects', () => {
      t.isObject(v.obj).should.be.true;
    });

    it('should return false for non objects', () => {
      t.isObject(v.str).should.be.false;
    });
  });

  describe('#isString()', () => {
    it('should always return booleans', () => {
      t.isString(v.str).should.be.true;
      t.isString(v.bool.f).should.be.false;
    });

    it('should return true for strings', () => {
      t.isString(v.str).should.be.true;
    });

    it('should return false for non strings', () => {
      t.isString(v.obj).should.be.false;
      t.isString(v.arr).should.be.false;
    });
  });

  describe('#isDate()', () => {
    it('should always return booleans', () => {
      t.isDate(v.date).should.be.true;
      t.isDate(v.bool.f).should.be.false;
    });

    it('should return true for dates', () => {
      t.isDate(v.date).should.be.true;
    });

    it('should return false for non dates', () => {
      t.isDate(v.obj).should.be.false;
      t.isDate(v.arr).should.be.false;
    });
  });

  describe('#isTruthy()', () => {
    it('should always return booleans', () => {
      t.isTruthy(v.bool.t).should.be.true;
      t.isTruthy(v.bool.f).should.be.false;
    });

    it('should return true for truthy values, including "false"', () => {
      t.isTruthy('false').should.be.true;
      t.isTruthy(v.str).should.be.true;
      t.isTruthy(v.obj).should.be.true;
    });

    it('should return false for falsy values', () => {
      t.isTruthy('').should.be.false;
      t.isTruthy(0).should.be.false;
      t.isTruthy(false).should.be.false;
    });
  });

  describe('#isFalsy()', () => {
    it('should always return booleans', () => {
      t.isFalsy(v.bool.f).should.be.true;
      t.isFalsy(v.bool.t).should.be.false;
    });

    it('should return true for falsy values, including empty arrays and objects', () => {
      t.isFalsy('').should.be.true;
      t.isFalsy(v.bool.f).should.be.true;
      t.isFalsy(0).should.be.true;
      t.isFalsy({}).should.be.true;
      t.isFalsy([]).should.be.true;
    });

    it('should return false for truthy values, including "false"', () => {
      t.isFalsy('false').should.be.false;
      t.isFalsy(v.int).should.be.false;
      t.isFalsy(v.str).should.be.false;
    });
  });

  describe('#isEmpty()', () => {
    it('should always return booleans', () => {
      t.isEmpty('').should.be.true;
      t.isEmpty('false').should.be.false;
    });

    it('should return true for 0, empty strings, arrays and objects', () => {
      t.isEmpty(0).should.be.true;
      t.isEmpty('').should.be.true;
      t.isEmpty({}).should.be.true;
      t.isEmpty([]).should.be.true;
    });

    it('should return false for non empty strings, including "false"', () => {
      t.isEmpty('false').should.be.false;
    });

    it('should return false for non-zero numbers', () => {
      t.isEmpty(v.int).should.be.false;
    });

    it('should return false for non empty objects', () => {
      t.isEmpty(v.bool).should.be.false;
    });
  });

  describe('#isError()', () => {
    it('should always return booleans', () => {
      t.isError(v.error).should.be.true;
      t.isError(v.bool.t).should.be.false;
    });

    it('should return true for javascript Errors', () => {
      t.isError(v.error).should.be.true;
    });

    it('should return false for non errors', () => {
      t.isError('false').should.be.false;
      t.isError(0).should.be.false;
      t.isError(false).should.be.false;
    });
  });

  // browser tests
  if (typeof document !== 'undefined' && t.isFunction(document.querySelectorAll)) {
    const div = document.createElement('div');
    const mainDiv = div;

    for (var i = 0; i < 10; i++) {
      mainDiv.appendChild(div);
    }
    v.nl = mainDiv.querySelectorAll('div');

    describe('#isNodeList()', () => {
      it('should always return booleans', () => {
        t.isNodeList(v.nl).should.be.true;
        t.isNodeList(v.bool.f).should.be.false;
      });

      it('should return true for strings', () => {
        t.isNodeList(v.nl).should.be.true;
      });

      it('should return false for non strings', () => {
        t.isNodeList(v.obj).should.be.false;
        t.isNodeList(v.arr).should.be.false;
      });
    });
  }
});
