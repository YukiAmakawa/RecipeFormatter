<template lang="pug">
  .StepItem
    div(v-if="isEdit")
      .wrap-forms.flex
        .index {{index+1}}.
        .wrap-forms.flex
          app-textarea(
            placeholder="じゃがいもの皮をむき、一口大に切る"
            v-model="step.description"
            rowNum=2
          )
    div.flex(v-else)
      .icon.wrap-icons.flex
        i.move-icon(v-show="!isFirst")
          up-icon(@click="onUpItem")
        i.move-icon(v-show="!isLast")
          down-icon(@click="onDownItem")
      .index {{index+1}}.
      .wrap-texts
        p {{step.description}}
      i.icon(v-show="!isFirst")
          close-icon(@click="onDeleteItem")
</template>
<script lang="ts">
import UpIcon from "../../assets/icons/Orion_arrow_up.svg";
import DownIcon from "../../assets/icons/Orion_arrow_down.svg";
import CloseIcon from "../../assets/icons/Orion_close.svg";
import AppTextarea from "../atoms/AppTextarea.vue";
import Vue, { PropType } from "vue";
export type Step = {
  description: string;
};

export default Vue.extend({
  components: {
    UpIcon,
    DownIcon,
    CloseIcon,
    AppTextarea
  },
  props: {
    step: Object as PropType<Step>,
    index: Number,
    isLast: Boolean,
    isEdit: Boolean
  },
  computed: {
    isFirst(): boolean {
      return this.index === 0;
    }
  },
  methods: {
    onDeleteItem(): void {
      this.$emit("on-delete-item");
    },
    onUpItem(): void {
      this.$emit("on-up-item");
    },
    onDownItem(): void {
      this.$emit("on-down-item");
    }
  }
});
</script>
<style lang="scss" scoped>
.StepItem {
  width: 100%;
  .index {
    width: 15px;
    font-size: 12px;
  }
  .wrap-forms {
    width: 100%;
    textarea {
      width: 100%;
    }
  }
  .wrap-texts {
    width: calc(100% - 71px);
    textarea {
      width: 100%;
    }
  }
  .wrap-icons {
    width: 31px;
    .move-icon {
      svg {
        width: 14px;
        height: 20px;
      }
    }
  }
}
</style>
