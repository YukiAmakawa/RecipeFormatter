<template lang="pug">
  .AppSubTitle
    span 【
    span {{title}}
    span 】
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
.AppSubTitle {
  width: 100%;
}
</style>
