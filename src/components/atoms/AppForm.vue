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
.FormText {
  width: 100%;
}
</style>
