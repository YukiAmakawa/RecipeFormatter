<template lang="pug">
  .StepList
    .sub-title-wrap
      app-sub-title(title="作り方")
    ul.step-list
      li(v-for="(step, index) in steps")
        step-item(
          :step="step"
          :index="index"
          @on-change-step-item="onChangeStepList($event, index)"
          @on-delete-item="deleteListItem(index)"
        )
    .icon
      add-icon(@click="addListItem")
</template>
<script lang="ts">
import AppSubTitle from "../atoms/AppSubTitle.vue";
import StepItem from "../molecules/StepItem.vue";
import AddIcon from "../../assets/icons/Orion_add-circle.svg";
import { Step } from "../../components/molecules/StepItem.vue";
import Vue, { PropType } from "vue";
type Data = {
  stepItems: Step[];
};

export default Vue.extend({
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
  data(): Data {
    return {
      stepItems: this.steps
    };
  },
  methods: {
    onChangeStepList(stepItem: Step, index: number): void {
      this.stepItems[index] = stepItem;
      this.$emit("on-change-step-list", this.stepItems);
    },
    deleteListItem(index: number): void {
      this.$emit("delete-list-item", { item: "steps", index: index });
    },
    addListItem(): void {
      this.$emit("add-list-item", { item: "steps" });
    }
  }
});
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
    margin-top: 10px;
  }
}
</style>
