<template lang="pug">
    .AppTextarea
      textarea.text-input(
        :placeholder="placeholder"
        v-model="text"
        :row="row"
        @change="onChangeTextarea(value)"
      )
</template>
<script lang="ts">
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
    text: {
      get(): string {
        return this.value;
      },
      set(value: string) {
        this.$emit("input", value);
      }
    }
  },
  methods: {
    onChangeTextarea(value: string) {
      this.$emit("on-change-textarea", value);
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
