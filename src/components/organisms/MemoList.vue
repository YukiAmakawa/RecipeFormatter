<template lang="pug">
  .MemoList
    .sub-title-wrap
      app-sub-title(title="備考")
    ul.memo-list
      li(v-for="(memo, index) in memos")
        memo-item(
          :memo="memo"
          :index="index"
          :isLast="isLast(index)"
          @on-change-memo-item="onChangeMemoList($event, index)"
          @on-delete-item="deleteListItem(index)"
          @on-up-item="upListItem(index)"
          @on-down-item="downListItem(index)"
        )
    .icon
      add-icon(@click="addListItem")
</template>
<script lang="ts">
import AppSubTitle from "../atoms/AppSubTitle.vue";
import MemoItem from "../molecules/MemoItem.vue";
import AddIcon from "../../assets/icons/Orion_add-circle.svg";
import { Memo } from "../../components/molecules/MemoItem.vue";
import Vue, { PropType } from "vue";

export default Vue.extend({
  components: {
    AppSubTitle,
    MemoItem,
    AddIcon
  },
  props: {
    memos: {
      type: Array as PropType<Memo[]>,
      default: () => []
    }
  },
  methods: {
    isLast(index: number): boolean {
      return this.memos.length - 1 === index;
    },
    onChangeMemoList(memoItem: Memo, index: number): void {
      this.memoItems[index] = memoItem;
      this.$emit("on-change-memo-list", this.memoItems);
    },
    upListItem(index: number): void {
      this.$emit("on-up-list", {
        item: "memos",
        index: index
      });
    },
    downListItem(index: number): void {
      this.$emit("on-down-list", {
        item: "memos",
        index: index
      });
    },
    deleteListItem(index: number): void {
      this.$emit("delete-list-item", { item: "memos", index: index });
    },
    addListItem(): void {
      this.$emit("add-list-item", { item: "memos" });
    }
  }
});
</script>
<style lang="scss" scoped>
.MemoList {
  width: 100%;
  .memo-list {
    margin-top: 5px;
    width: 316px;
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
