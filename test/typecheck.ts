import is from '../src/index.js'

const a = is.isArray([], is.isString, is.isNumber)
if (a) {
  // arr should be narrowed to (string | number)[]
  const x: string | number = a[0]
  console.log(x)
}

function _test1() {
  const arr = []
  if (is.isArray(arr, is.isString, is.isNumber)) {
    // arr should be narrowed to (string | number)[]
    const _y: string | number = arr[0]
  }
}

function _test2() {
  const arr = []
  if (is.isArray(arr, is.isNumber)) {
    // arr should be narrowed to number[]
    const _z: number = arr[0]
  }
}
