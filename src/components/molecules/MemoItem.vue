<template lang="pug">
  .MemoItem
    //- move-icon
    div.flex.flex-middle
      app-textarea.description(
        placeholder="じゃがいもの下茹では電子レンジで代用できます"
        v-model="memo.description"
        @on-change-textarea="onChangeMemoItem"
      )
      .icon(v-if="!isFirstItem")
        close-icon(@click="onDeleteItem")
</template>
<script lang="ts">
import MoveIcon from "../../assets/icons/Orion_copy.svg";
import CloseIcon from "../../assets/icons/Orion_close.svg";
import AppTextarea from "../atoms/AppTextarea.vue";
import Vue, { PropType } from "vue";
export type Memo = {
  description: string;
};

type Data = {
  memo: string;
};
type Props = {
  memo: string;
  index: number;
};

export default Vue.extend({
  components: {
    MoveIcon,
    CloseIcon,
    AppTextarea
  },
  props: {
    memo: Object as PropType<Memo>,
    index: Number
  },
  data() {
    return {
      MemoItem: this.memo
    };
  },
  computed: {
    isFirstItem() {
      return this.index === 0;
    }
  },
  methods: {
    onChangeMemoItem() {
      this.$emit("on-change-memo-item", this.MemoItem);
    },
    onDeleteItem() {
      this.$emit("on-delete-item");
    }
  }
});
</script>
<style lang="scss" scoped>
.MemoItem {
  width: 100%;
  .description {
    width: 290px;
  }
  .icon {
    margin-left: 5px;
  }
}
</style>
