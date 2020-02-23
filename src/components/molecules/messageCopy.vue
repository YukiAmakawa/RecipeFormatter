<template lang="pug">
  .MessageCopy
    .message-wrap.flex.flex-middle
      .icon
        copy-icon
      .copy-text クリップボードにコピー
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
  border-top: 1px dashed gray;
  .message-wrap {
    width: 150px;
    margin-left: auto;
    margin-top: 8px;
    .copy-text {
      margin-left: 5px;
      font-size: 12px;
    }
    .icon {
      width: 14px;
      height: 14px;
    }
  }
}
</style>
