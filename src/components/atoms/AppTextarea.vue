<template lang="pug">
    .AppTextarea
      textarea.text-input(
        :placeholder="placeholder"
        v-model="inputText"
        :row="row"
      )
</template>
<script>
export default {
  props: {
    placeholder: {
      type: [String, Number],
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
    inputText: {
      get() {
        return this.value;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.AppTextarea {
  width: 100%;
  .text-input {
    width: 100%;
    font-size: 0.87rem;
    line-height: calc(0.87rem * row);
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
