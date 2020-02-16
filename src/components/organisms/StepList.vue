<template lang="pug">
  .StepList
    app-sub-title(title="作り方")
    div(v-for="(step, index) in steps")
      step-item(:step="step")
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
    steps: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="scss" scoped>
.StepList {
  width: 100%;
}
</style>
