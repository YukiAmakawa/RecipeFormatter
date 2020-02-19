<template lang="pug">
  .MemoList
    app-sub-title(title="備考")
    div(v-for="(memo, index) in memos")
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
}
</style>
