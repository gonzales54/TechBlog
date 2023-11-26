---
to: src/components/<%= dir %>/<%= h.changeCase.pascal(name) %>/index.ts
---
export { default as <%= h.changeCase.pascal(name) %> } from './components/Container'