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
    height: 48px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    padding: 3px 8px;
    border-radius: 3px;
    resize: none;
    &:focus {
      outline: 1px solid rgba(0, 0, 0, 0.15);
    }
  }
}
</style>
