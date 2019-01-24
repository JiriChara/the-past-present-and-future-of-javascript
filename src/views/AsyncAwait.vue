<template lang="pug">
div
  .center
    h2 Async/Await
  ul
    li makes working with promises easier
    li amazing for working with API requests, kafka, etc..
  eg-code-block(lang='js').
    async function f() {

      const promise = new Promise((resolve) => {
        setTimeout(() => resolve('Hello xbAV!'), 1000);
      });


      let result = await promise;

      console.log(result);
    }

    f();
</template>
