<template lang="pug">
  .MemoItem
    //- move-icon
    div.flex
      span.index {{index+1}}.
      .flex.flex-middle
        app-textarea.description(
          placeholder="じゃがいもの下茹では電子レンジで代用できます"
          v-model="memo.description"
        )
        i.icon(v-if="!isFirstItem")
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
  memoItem: Memo;
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
  data(): Data {
    return {
      memoItem: this.memo
    };
  },
  computed: {
    isFirstItem(): boolean {
      return this.index === 0;
    }
  },
  methods: {
    onDeleteItem(): void {
      this.$emit("on-delete-item");
    }
  }
});
</script>
<style lang="scss" scoped>
.MemoItem {
  width: 100%;
  .description {
    width: 265px;
    margin-left: 10px;
  }
}
</style>
