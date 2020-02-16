<template lang="pug">
  .MessageCopy
    copy-icon
    span クリップボードにコピー
</template>
<script>
import CopyIcon from "../../assets/icons/Orion_copy.svg";
export default {
  components: {
    CopyIcon
  }
};
</script>
<style lang="scss" scoped>
.MessageCopy {
  width: 100%;
}
</style>
