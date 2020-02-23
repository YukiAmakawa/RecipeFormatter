<template lang="pug">
  .AppSubTitle
    span.sub-title 【{{title}}】
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
  width: 90px;
  .sub-title {
    font-size: 0.87rem;
  }
}
</style>
