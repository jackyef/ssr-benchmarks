<template>
  <div v-if="depth <= 0">abcdefghij</div>
  <div v-else v-on:click="console.log('clicked')">
    <RecursiveDivs v-for="n in breadth" v-bind:key="n" :depth="depthMin1" :breadth="breadthMin1" />
  </div>
</template>

<script>

export default {
  name: "RecursiveDivs",
  props: ['depth', 'breadth'],
  computed: {
    depthMin1() {
      return this.depth - 1;
    },
    breadthMin1() {
      return this.breadth - 1;
    },
  },
  // created() {
  //   console.log({ depth: this.depth, breadth: this.breadth });
  // },
};
</script>
