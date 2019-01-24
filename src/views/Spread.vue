<template lang="pug">
div
  .center
    h2 Spread Syntax

  eg-code-block(lang='js').
    function sum(x, y, z) {
      return x + y + z;
    }

    const numbers = [1, 2, 3];

    console.log(sum(...numbers)); // 6
</template>
