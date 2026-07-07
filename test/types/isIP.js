import is, { isIp, isIPv4, isIPv6 } from '../../src/index.js'

export default [
  // isIp tests
  { fn: () => isIp('127.0.0.1'), expect: true, info: 'isIp returns true for IPv4 localhost' },
  { fn: () => isIp('192.168.1.1'), expect: true, info: 'isIp returns true for private IPv4' },
  { fn: () => isIp('8.8.8.8'), expect: true, info: 'isIp returns true for public IPv4' },
  { fn: () => isIp('0.0.0.0'), expect: true, info: 'isIp returns true for IPv4 wildcard' },
  { fn: () => isIp('::1'), expect: true, info: 'isIp returns true for IPv6 localhost' },
  { fn: () => isIp('::'), expect: true, info: 'isIp returns true for IPv6 unspecified' },
  {
    fn: () => isIp('2001:4860:4860:0000:0000:0000:0000:8888'),
    expect: true,
    info: 'isIp returns true for full IPv6',
  },
  {
    fn: () => isIp('2001:4860:4860::8888'),
    expect: true,
    info: 'isIp returns true for compressed IPv6',
  },
  { fn: () => isIp('fe80::1'), expect: true, info: 'isIp returns true for IPv6 link-local' },
  { fn: () => isIp(''), expect: false, info: 'isIp returns false for empty string' },
  { fn: () => isIp('not an ip'), expect: false, info: 'isIp returns false for random string' },
  { fn: () => isIp('256.256.256.256'), expect: false, info: 'isIp returns false for invalid IPv4' },
  {
    fn: () => isIp('999.999.999.999'),
    expect: false,
    info: 'isIp returns false for out-of-range IPv4',
  },
  { fn: () => isIp('192.168.1'), expect: false, info: 'isIp returns false for incomplete IPv4' },
  { fn: () => isIp('::gggg'), expect: false, info: 'isIp returns false for invalid IPv6' },
  { fn: () => isIp(null), expect: false, info: 'isIp returns false for null' },
  { fn: () => isIp(undefined), expect: false, info: 'isIp returns false for undefined' },
  { fn: () => isIp(123), expect: false, info: 'isIp returns false for number' },
  { fn: () => isIp({}), expect: false, info: 'isIp returns false for object' },

  // is.ip alias
  { fn: () => is.ip('127.0.0.1'), expect: true, info: 'is.ip alias works for IPv4' },
  { fn: () => is.ip('::1'), expect: true, info: 'is.ip alias works for IPv6' },
  { fn: () => is.ip('invalid'), expect: false, info: 'is.ip alias returns false for invalid' },

  // isIPv4 tests
  { fn: () => isIPv4('127.0.0.1'), expect: true, info: 'isIPv4 returns true for IPv4 localhost' },
  { fn: () => isIPv4('192.168.1.1'), expect: true, info: 'isIPv4 returns true for private IPv4' },
  { fn: () => isIPv4('8.8.8.8'), expect: true, info: 'isIPv4 returns true for public IPv4' },
  { fn: () => isIPv4('0.0.0.0'), expect: true, info: 'isIPv4 returns true for IPv4 wildcard' },
  { fn: () => isIPv4('10.0.0.1'), expect: true, info: 'isIPv4 returns true for class A private' },
  { fn: () => isIPv4('172.16.0.1'), expect: true, info: 'isIPv4 returns true for class B private' },
  { fn: () => isIPv4('::1'), expect: false, info: 'isIPv4 returns false for IPv6 localhost' },
  { fn: () => isIPv4('::'), expect: false, info: 'isIPv4 returns false for IPv6 unspecified' },
  {
    fn: () => isIPv4('2001:4860:4860::8888'),
    expect: false,
    info: 'isIPv4 returns false for IPv6',
  },
  { fn: () => isIPv4(''), expect: false, info: 'isIPv4 returns false for empty string' },
  { fn: () => isIPv4('not an ip'), expect: false, info: 'isIPv4 returns false for random string' },
  {
    fn: () => isIPv4('256.256.256.256'),
    expect: false,
    info: 'isIPv4 returns false for invalid IPv4',
  },

  // is.ipv4 and is.v4 aliases
  { fn: () => is.ipv4('127.0.0.1'), expect: true, info: 'is.ipv4 alias works' },
  { fn: () => is.ipv4('::1'), expect: false, info: 'is.ipv4 alias returns false for IPv6' },
  { fn: () => is.v4('192.168.1.1'), expect: true, info: 'is.v4 alias works' },
  { fn: () => is.v4('::1'), expect: false, info: 'is.v4 alias returns false for IPv6' },

  // isIPv6 tests
  { fn: () => isIPv6('::1'), expect: true, info: 'isIPv6 returns true for IPv6 localhost' },
  { fn: () => isIPv6('::'), expect: true, info: 'isIPv6 returns true for IPv6 unspecified' },
  {
    fn: () => isIPv6('2001:4860:4860:0000:0000:0000:0000:8888'),
    expect: true,
    info: 'isIPv6 returns true for full IPv6',
  },
  {
    fn: () => isIPv6('2001:4860:4860::8888'),
    expect: true,
    info: 'isIPv6 returns true for compressed IPv6',
  },
  { fn: () => isIPv6('fe80::1'), expect: true, info: 'isIPv6 returns true for IPv6 link-local' },
  {
    fn: () => isIPv6('::ffff:192.168.1.1'),
    expect: true,
    info: 'isIPv6 returns true for IPv4-mapped IPv6',
  },
  { fn: () => isIPv6('127.0.0.1'), expect: false, info: 'isIPv6 returns false for IPv4' },
  { fn: () => isIPv6('192.168.1.1'), expect: false, info: 'isIPv6 returns false for private IPv4' },
  { fn: () => isIPv6(''), expect: false, info: 'isIPv6 returns false for empty string' },
  { fn: () => isIPv6('not an ip'), expect: false, info: 'isIPv6 returns false for random string' },
  { fn: () => isIPv6('::gggg'), expect: false, info: 'isIPv6 returns false for invalid IPv6' },

  // is.ipv6 and is.v6 aliases
  { fn: () => is.ipv6('::1'), expect: true, info: 'is.ipv6 alias works' },
  { fn: () => is.ipv6('127.0.0.1'), expect: false, info: 'is.ipv6 alias returns false for IPv4' },
  { fn: () => is.v6('2001:db8::1'), expect: true, info: 'is.v6 alias works' },
  { fn: () => is.v6('192.168.1.1'), expect: false, info: 'is.v6 alias returns false for IPv4' },

  // is.ip.v4 and is.ip.v6 chained methods
  { fn: () => is.ip.v4('127.0.0.1'), expect: true, info: 'is.ip.v4 returns true for IPv4' },
  { fn: () => is.ip.v4('::1'), expect: false, info: 'is.ip.v4 returns false for IPv6' },
  { fn: () => is.ip.v4('invalid'), expect: false, info: 'is.ip.v4 returns false for invalid' },
  { fn: () => is.ip.v6('::1'), expect: true, info: 'is.ip.v6 returns true for IPv6' },
  { fn: () => is.ip.v6('127.0.0.1'), expect: false, info: 'is.ip.v6 returns false for IPv4' },
  { fn: () => is.ip.v6('invalid'), expect: false, info: 'is.ip.v6 returns false for invalid' },

  // ipV4 and ipV6 aliases
  { fn: () => is.ipV4('192.168.1.1'), expect: true, info: 'is.ipV4 alias works' },
  { fn: () => is.ipV4('::1'), expect: false, info: 'is.ipV4 alias returns false for IPv6' },
  { fn: () => is.ipV6('::1'), expect: true, info: 'is.ipV6 alias works' },
  { fn: () => is.ipV6('192.168.1.1'), expect: false, info: 'is.ipV6 alias returns false for IPv4' },
]
