<template lang="pug">
  .StepItem
    move-icon
    app-textarea(
      placeholder="じゃがいもの皮をむき、一口大に切る"
      row=2
      v-model="step.description"
    )
    close-icon
</template>
<script>
import MoveIcon from "../../assets/icons/Orion_copy.svg";
import CloseIcon from "../../assets/icons/Orion_close.svg";
import AppTextarea from "../atoms/AppTextarea.vue";

export default {
  components: {
    MoveIcon,
    CloseIcon,
    AppTextarea
  },
  props: {
    step: {
      type: Object,
      default: () => {
        return {
          description: ""
        };
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.StepItem {
  width: 100%;
}
</style>
