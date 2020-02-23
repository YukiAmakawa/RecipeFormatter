<template lang="pug">
  .MemoList
    .sub-title-wrap
      app-sub-title(title="備考")
    .memo-list(v-for="(memo, index) in memos")
      step-item(:step="memo")
    .icon
      add-icon
</template>
<script>
import AppSubTitle from "../atoms/AppSubTitle.vue";
import StepItem from "../molecules/StepItem.vue";
import AddIcon from "../../assets/icons/Orion_add-circle.svg";

export default {
  components: {
    AppSubTitle,
    StepItem,
    AddIcon
  },
  props: {
    memos: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="scss" scoped>
.MemoList {
  width: 100%;
  .memo-list {
    margin-top: 5px;
    width: 316px;
  }
  .icon {
    margin-left: auto;
    margin-right: 3px;
  }
}
</style>
