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
      type: [Number],
      default: 2
    }
  }
};
</script>
<style lang="scss" scoped>
.AppTextarea {
  width: 100%;
}
</style>
