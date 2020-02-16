<template lang="pug">
    .AppForm
      input.text-input(
        :id="id"
        :type="type"
        :placeholder="placeholder"
        v-model="inputText"
        :disabled="disabled"
      )
</template>
<script>
export default {
  props: {
    id: {
      type: [String, Number],
      default: ""
    },
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
      type: [String, Number],
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss" scoped>
.FormText {
  width: 100%;
}
</style>
