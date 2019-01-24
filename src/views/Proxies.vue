<template lang="pug">
div
  .center
    h2 Proxies
  ul
    li is an object used to define custom behavior for fundamental operations
      |
      | (e.g. property lookup, assignment, enumeration, function invocation, etc).
    li great for reactivity pattern (Vue.js will use proxies instead of setters/getters)
    li Ruby's method_missing is now possible with JavaScript
  eg-code-block(lang='js').
    const handler = {
      get(obj, prop) {
        return prop in obj
          ?  obj[prop]
          : '¯\_(ツ)_/¯';
        }
    };

    const p = new Proxy({}, handler);
    p.a = 1;
    p.b = undefined;

    console.log(p.a, p.b); // 1, undefined
    console.log('c' in p, p.c); // false, '¯\_(ツ)_/¯'
</template>
