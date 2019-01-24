<template lang="pug">
div
  .center
    h2 Promise
  ul
    li great for asynchronous code
    li prevents pyramid code and callback hell
  eg-code-block(lang='js').
    const promise = new Promise((resolve) => {
      setTimeout(() => resolve('Hello xbAV!'), 1000);
    });

    promise.then((message) => console.log(message));
</template>
