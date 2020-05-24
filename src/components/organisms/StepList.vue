<template lang="pug">
  .StepList
    .sub-title-wrap
      app-sub-title(title="作り方")
    ul.step-list
      li(v-for="(step, index) in steps")
        step-item(
          :step="step"
          :index="index"
          :isLast="isLast(index)"
          :isEdit="isEdit"
          @on-change-step-item="onChangeStepList($event, index)"
          @on-delete-item="deleteListItem(index)"
          @on-up-item="upListItem(index)"
          @on-down-item="downListItem(index)"
        )
    .wrap-button.flex.flex-middle.content-center(v-if="isEdit")
      span.switch(@click="toggleEdit") ＋並び替え
      span.add(@click="addListItem") ＋手順を追加
    .wrap-button.flex.flex-middle.content-center(v-else)
      span.switch(@click="toggleEdit") ＋並び替えを完了
</template>
<script lang="ts">
import AppSubTitle from "../atoms/AppSubTitle.vue";
import StepItem from "../molecules/StepItem.vue";
import AddIcon from "../../assets/icons/Orion_add-circle.svg";
import { Step } from "../../components/molecules/StepItem.vue";
import Vue, { PropType } from "vue";
type Data = {
  stepItems: Step[];
  isEdit: boolean;
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
      stepItems: this.steps,
      isEdit: true
    };
  },
  methods: {
    isLast(index: number): boolean {
      return this.steps.length - 1 === index;
    },
    toggleEdit() {
      this.isEdit = !this.isEdit;
    },
    onChangeStepList(stepItem: Step, index: number): void {
      this.stepItems[index] = stepItem;
      this.$emit("on-change-step-list", this.stepItems);
    },
    upListItem(index: number): void {
      this.$emit("on-up-list", {
        item: "steps",
        index: index
      });
    },
    downListItem(index: number): void {
      this.$emit("on-down-list", {
        item: "steps",
        index: index
      });
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
  margin-top: 15px;
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
