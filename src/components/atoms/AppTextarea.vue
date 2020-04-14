<template lang="pug">
    .AppTextarea
      textarea.text-input(
        :placeholder="placeholder"
        v-model="text"
        :row="rowNum"
        :class="textareaClass"
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
    rowNum: {
      type: String,
      default: "2"
    },
    value: {
      type: String,
      default: ""
    }
  },
  computed: {
    textareaClass(): string {
      return `textarea-${this.rowNum}`;
    },
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
    padding: 3px 8px;
    border-radius: 3px;
    resize: none;
  }
  .textarea-2 {
    height: calc(1.4rem * 2);
  }
  .textarea-3 {
    height: calc(1.4rem * 3);
  }
}
</style>
