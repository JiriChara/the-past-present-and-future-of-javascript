<template lang="pug">
div
  .center
    h2 Generators
  ul
    li are functions that can be suspended
    li they work with #[b for of] loop
    li great for complex workflows, or state management
      |
      | #[a(href='https://link.medium.com/WjCiMOAbKT') https://link.medium.com/WjCiMOAbKT]
  eg-code-block(lang='js').
    function* generator(i) {
      yield i;
      yield i + 10;
    }

    var gen = generator(10);

    console.log(gen.next().value); // 10

    console.log(gen.next().value); // 20
</template>
