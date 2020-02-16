<template lang="pug">
  .messageCopy
    
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
