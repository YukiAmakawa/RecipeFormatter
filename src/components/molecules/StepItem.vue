<template lang="pug">
  .StepItem
    //- move-icon
    div.flex.flex-middle
      app-textarea.description(
        placeholder="じゃがいもの皮をむき、一口大に切る"
        v-model="step.description"
        @on-change-textarea="onChangeStepItem"
      )
      .icon
        close-icon(@click="onDeleteItem")
</template>
<script lang="ts">
import MoveIcon from "../../assets/icons/Orion_copy.svg";
import CloseIcon from "../../assets/icons/Orion_close.svg";
import AppTextarea from "../atoms/AppTextarea.vue";
import Vue, { PropType } from "vue";
export type Step = {
  description: string;
};

type Data = {
  step: string;
};
type Props = {
  step: string;
};

export default Vue.extend({
  components: {
    MoveIcon,
    CloseIcon,
    AppTextarea
  },
  props: {
    step: Object as PropType<Step>
  },
  data() {
    return {
      stepItem: this.step
    };
  },
  methods: {
    onChangeStepItem() {
      this.$emit("on-change-step-item", this.stepItem);
    },
    onDeleteItem() {
      this.$emit("on-delete-item");
    }
  }
});
</script>
<style lang="scss" scoped>
.StepItem {
  width: 100%;
  .description {
    width: 290px;
  }
  .icon {
    margin-left: 5px;
  }
}
</style>
