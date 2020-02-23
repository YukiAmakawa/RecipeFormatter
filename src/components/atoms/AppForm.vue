<template lang="pug">
    .AppForm
      input.text-input(
        :type="type"
        :placeholder="placeholder"
        v-model="inputText"
        :disabled="disabled"
      )
</template>
<script lang="ts">
export default {
  props: {
    type: {
      type: String,
      default: ""
      // validator: type => ["text", "password", "number"].includes(type)
    },
    placeholder: {
      type: [String, Number],
      default: ""
    },
    value: {
      type: [String],
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
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
.AppForm {
  width: 100%;
  .text-input {
    width: 100%;
    font-size: 0.87rem;
    line-height: 0.87rem;
    border: 1px solid rgba(0, 0, 0, 0.15);
    padding: 3px 8px;
    border-radius: 3px;
    &:focus {
      border: 1px solid rgba(0, 0, 0, 0.15);
    }
  }
}
</style>
