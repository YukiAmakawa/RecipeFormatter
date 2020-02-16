<template lang="pug">
  .AppSubTitle
    【{{title}}】
</template>
<script>
export default {
  props: {
    titile: {
      type: [String],
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
