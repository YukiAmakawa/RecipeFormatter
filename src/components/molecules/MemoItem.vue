<template lang="pug">
  .MemoItem
    div.flex
      .wrap-icons.flex
        i.move-icon(v-if="!isFirst")
          up-icon(@click="onUpItem")
        i.move-icon(v-if="!isLast")
          down-icon(@click="onDownItem")
      span.index {{index+1}}.
      .wrap-forms.flex
        app-textarea.description(
          placeholder="じゃがいもの下茹では電子レンジで代用できます"
          v-model="memo.description"
          rowNum=3
        )
      i.icon(v-if="!isFirst")
          close-icon(@click="onDeleteItem")
</template>
<script lang="ts">
import UpIcon from "../../assets/icons/Orion_arrow_up.svg";
import DownIcon from "../../assets/icons/Orion_arrow_down.svg";
import CloseIcon from "../../assets/icons/Orion_close.svg";
import AppTextarea from "../atoms/AppTextarea.vue";
import Vue, { PropType } from "vue";
export type Memo = {
  description: string;
};

type Data = {
  memoItem: Memo;
};

export default Vue.extend({
  components: {
    UpIcon,
    DownIcon,
    CloseIcon,
    AppTextarea
  },
  props: {
    memo: Object as PropType<Memo>,
    index: Number,
    isLast: Boolean
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
.MemoItem {
  width: 100%;
  .wrap-icons {
    width: 31px;
  }
  .index {
    width: 15px;
    font-size: 12px;
  }
  .wrap-forms {
    width: calc(100% - 70px);
    textarea {
      width: 100%;
    }
  }
  .move-icon {
    svg {
      width: 14px;
      height: 20px;
    }
  }
}
</style>
