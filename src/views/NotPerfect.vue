<template lang="pug">
div
  .center
    h2 JavaScript Is Not Pefect..
  eg-code-block(lang='js').
    /* ¯\_(ツ)_/¯ */

    '2' == 2 // true

    '2' === 2 // false

    [] == ![] // true

    +[] == +![] // true

    0 >= null // true

    typeof null // 'object'
    null instanceof Object // false

    9999999999999999 // 10000000000000000
    0.1 + 0.2 == 0.3 // false
    1 / 0 // Infinity
    1 / -0 // -Infinity
  p #[a(href='https://wtfjs.com') https://wtfjs.com]
</template>
