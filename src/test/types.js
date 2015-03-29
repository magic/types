import * as t from '../index.js';
import {should as sh} from 'chai';

var should = sh();

//~ isA isB isD isF isN isO isS
//~ isArray isBoolean isDefault isFunction isNumber isObject isString
//~ isArr isBool isDef isFn isNum isObj isStr
var v = {
  arr    : ['test']
  , bool : {
    t: true
  , f: false
  }
  , func : () => {}
  , float: 9.9
  , int  : 9
  , nil  : null
  , obj  : {test: 'val'}
  , str  : 'someothervalue'
  , undef: undefined
  , date : new Date()
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
      t.test(v.obj, ['object', 'string']).should.be.true;
    });
    
    it('should return false if none of the items in array match', () => {
      t.test(v.obj, ['number', 'string']).should.be.false;
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

    //test not function
  describe('#not()', () => {
    it('should return true for falsy comparisons', () => {
      t.not(v.str, 'object').should.be.true
      t.not(v.obj, 'string').should.be.true
      t.not(v.arr, '[object Object]').should.be.true
    });

    it('should return false for valid comparisons', () => {
      t.not(v.arr, 'array').should.be.false;
      t.not(v.obj, 'object').should.be.false;
      t.not(v.arr, '[object Array]').should.be.false;
    });
  });

  describe('#isArray()', () => {
    it('should always return boolean values', () => {
      //test type of returned value
      t.isA(v.arr).should.be.true;
      t.isA(v.str).should.be.false;
    });

    it('should return true if passed an array', () => {
      t.isA(v.arr).should.be.true;
    });

    it('should return false if passed a string or object', () => {
      t.isA(v.obj).should.be.false;
      t.isA(v.str).should.be.false;
      t.isA(v.undef).should.be.false;
    });
  });
  
  describe('#isBoolean()', () => {
    it('should always return boolean values', () => {
      //test type of returned value
      t.isB( v.bool.t ).should.be.true;
      t.isB( v.str ).should.be.false;
    });
    it('should return true if passed a boolean true/false', () => {
      t.isB(v.bool.t).should.be.true;
      t.isB(v.bool.f).should.be.true;
    });

    it('should return false if passed "true" or "false"', () => {
      t.isB('true').should.be.false;
      t.isB('false').should.be.false;
    });

    it('should return false if passed strings, numbers or undefined', () => {
      t.isB(v.str).should.be.false;
      t.isB(v.int).should.be.false;
      t.isB(v.undef).should.be.false;
    });
  });

  describe('#isDefined()', () => {
     it('should always return boolean values', () => {
      t.isD( v.bool.t ).should.be.true;
      t.isD( v.undef ).should.be.false;
    });

    it('should return true for defined values', () => {
      t.isD(v.str).should.be.true;
      t.isD(v.int).should.be.true;
      t.isD(v.bool.f).should.be.true;
    });
    
    it('should return false for undefined values', () => {
      t.isD(v.undef).should.be.false;
    });
  });


  describe('isFunction', () => {
    it('should always return booleans', () => {
      t.isF(v.func).should.be.true;
      t.isF(v.arr).should.be.false;
    });
    
    it('should return true for functions', () => {
      t.isF(v.func).should.be.true;
    });
    
    it('should return false for non functions', () => {
      t.isF(v.bool.f).should.be.false;
      t.isF(v.bool.t).should.be.false;
      t.isF(v.arr).should.be.false;
    });
  });
  
  describe('#isNumber', () => {
    it('should always return booleans', () => {
      t.isN(v.int).should.be.true;
      t.isN(v.bool.f).should.be.false;
    });

    it('should return true for ints and floats', () => {
      t.isN(v.int).should.be.true;
      t.isN(v.float).should.be.true;
    });
    
    it('should return false for non numbers', () => {
      t.isN(v.str).should.be.false;
      t.isN(v.bool.t).should.be.false;
    });
  });

  describe('#isObject()', () => {
    it('should always return booleans', () => {
      t.isO(v.obj).should.be.true;
      t.isO(v.bool.f).should.be.false;
    });

    it('should return true for objects', () => {
      t.isO(v.obj).should.be.true;
    });
    
    it('should return false for non objects', () => {
      t.isO(v.str).should.be.false;
      t.isO(v.arr).should.be.false;
    });
  });

  describe('#isString()', () => {
    it('should always return booleans', () => {
      t.isS(v.str).should.be.true;
      t.isS(v.bool.f).should.be.false;
    });

    it('should return true for strings', () => {
      t.isS(v.str).should.be.true;
    });
    
    it('should return false for non strings', () => {
      t.isS(v.obj).should.be.false;
      t.isS(v.arr).should.be.false;
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
      t.isTruthy("false").should.be.true;
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
      t.isEmpty(v.bool.t).should.be.false;
    });

    it('should return true for 0, empty strings, arrays and objects', () => {
      t.isEmpty(0).should.be.true;
      t.isEmpty('').should.be.true;
      t.isEmpty({}).should.be.true;
      t.isEmpty([]).should.be.true;
    });
    
    it('should return false for non empty values, including "false"', () => {
      t.isEmpty('false').should.be.false;
      t.isEmpty(v.int).should.be.false;
      t.isEmpty(v.str).should.be.false;
    });
  });

  //browser tests
  if ( typeof document !== 'undefined' && isF(document.querySelectorAll) ) {
    var div = document.createElement('div')
      , mainDiv = div
    ;
    for ( var i = 0; i < 10; i++ ) {
      mainDiv.appendChild(div);
    }
    v.nl = mainDiv.querySelectorAll('div');

    describe('#isNodeList()', () => {
      it('should always return booleans', () => {
        t.isNL(v.nl).should.be.true;
        t.isNL(v.bool.f).should.be.false;
      });

      it('should return true for strings', () => {
        t.isNL(v.nl).should.be.true;
      });
      
      it('should return false for non strings', () => {
        t.isNL(v.obj).should.be.false;
        t.isNL(v.arr).should.be.false;
      });
    });
  }
});
