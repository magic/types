#!/usr/bin/env node
// Prepend `/// <reference types="node" />` to generated .d.ts files that use
// Node.js globals (e.g. `Buffer`) so the declarations are self-contained.
//
// tsc does not emit triple-slash references from .js sources, and the
// declaration-file type check runs with `types: []` (no @types auto-include),
// so a bare `Buffer` reference would otherwise fail with TS2591.
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import path from 'node:path'

const REF = '/// <reference types="node" />\n'

const files = []
const walk = dir => {
  for (const entry of readdirSync(dir)) {
    const p = path.join(dir, entry)
    const s = statSync(p)
    if (s.isDirectory()) {
      walk(p)
    } else if (p.endsWith('.d.ts')) {
      files.push(p)
    }
  }
}
walk('types')

for (const file of files) {
  let src = readFileSync(file, 'utf-8')
  if (src.startsWith(REF)) {
    continue
  }
  if (src.includes(REF)) {
    // reference exists but not on the first line - move it up
    src = REF + src.slice(src.indexOf(REF) + REF.length)
  } else if (!/\bBuffer\b/.test(src)) {
    continue
  } else {
    src = REF + src
  }
  writeFileSync(file, src)
  console.log(`added node reference: ${path.relative(process.cwd(), file)}`)
}
