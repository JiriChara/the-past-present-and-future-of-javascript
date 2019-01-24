<template lang="pug">
div
  .center
    h2 Destructuring Assignment

  eg-code-block(lang='js').
    const [a, b, ...rest] = [10, 20, 30, 40, 50];
    const {a: foo, b: bar, ...objRest} = { a: 10, b: 20, c: 30, d: 40 };
    console.log(a); // 10
    console.log(b); // 20
    console.log(rest); // [30, 40, 50];
    console.log(foo); // 10
    console.log(bar); // 20
    console.log(objRest); // { c: 30, d: 40 }
</template>
