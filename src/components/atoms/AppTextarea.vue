<template lang="pug">
    .AppTextarea
      textarea.text-input(
        :placeholder="placeholder"
        v-model="text"
        :row="row"
      )
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    row: {
      type: Number,
      default: 2
    },
    value: {
      type: String,
      default: ""
    }
  },
  computed: {
    text: {
      get(): string {
        return this.value;
      },
      set(value: string) {
        this.$emit("input", value);
      }
    }
  }
});
</script>
<style lang="scss" scoped>
.AppTextarea {
  width: 100%;
  .text-input {
    width: 100%;
    background: #fffffe;
    height: 48px;
    padding: 3px 8px;
    border-radius: 3px;
    resize: none;
  }
}
</style>
