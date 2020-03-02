<template lang="pug">
  .StepList
    .sub-title-wrap
      app-sub-title(title="作り方")
    ul.step-list
      li(v-for="(step, index) in steps")
        step-item(
          :step="step"
          @on-change-step-item="onChangeStepList($event, index)"
        )
    .icon
      add-icon
</template>
<script lang="ts">
import AppSubTitle from "../atoms/AppSubTitle.vue";
import StepItem from "../molecules/StepItem.vue";
import AddIcon from "../../assets/icons/Orion_add-circle.svg";
import { Step } from "../../components/molecules/StepItem.vue";

type Data = {
  stepItems: Array<Step>;
};
type Props = {
  steps: Array<Step>;
};

export default {
  components: {
    AppSubTitle,
    StepItem,
    AddIcon
  },
  props: {
    steps: {
      type: Array as PropType<Step[]>,
      default: () => []
    }
  },
  data() {
    return {
      stepItems: this.steps
    };
  },
  methods: {
    onChangeStepList(stepItem: Hashtag, index: number) {
      this.stepItems[index] = stepItem;
      this.$emit("on-change-step-list", this.stepItems);
    }
  }
};
</script>
<style lang="scss" scoped>
.StepList {
  width: 100%;
  .step-list {
    margin-top: 5px;
    li + li {
      margin-top: 5px;
    }
  }
  .icon {
    margin-left: auto;
    margin-right: 3px;
  }
}
</style>
