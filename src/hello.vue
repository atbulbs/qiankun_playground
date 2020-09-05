<template lang="pug">
div
  .hello {{ computedMsg }}
  #micro
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class HelloComponent extends Vue {
  msg = "";

  mounted() {
    this.greet();
  }

  get computedMsg() {
    return "我是主应用, " + this.msg;
  }

  greet() {
    this.msg = "typeScirpt_webpack_vue !";
  }
}
</script>

<style lang="stylus" scoped>
.hello {
  width: 375px;
  text-align: center;
}
</style>
