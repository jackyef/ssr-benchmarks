<template>
  <RecursiveDivs :depth="5" :breadth="11" />
</template>

<script>
import RecursiveDivs from "./RecursiveDivs.vue";

export default {
  components: {
    RecursiveDivs
  }
};
</script>
