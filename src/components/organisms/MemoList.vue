<template lang="pug">
  .MemoList
    .sub-title-wrap
      app-sub-title(title="備考")
    ul.memo-list
      li(v-for="(memo, index) in memos")
        memo-item(
          :memo="memo"
          @on-change-memo-item="onChangeMemoList($event, index)"
          @on-delete-item="onDeleteListItem(index)"
        )
    .icon
      add-icon
</template>
<script lang="ts">
import AppSubTitle from "../atoms/AppSubTitle.vue";
import MemoItem from "../molecules/MemoItem.vue";
import AddIcon from "../../assets/icons/Orion_add-circle.svg";
import { Memo } from "../../components/molecules/MemoItem.vue";

type Data = {
  memoItems: Array<Memo>;
};
type Props = {
  memos: Array<Memo>;
};

export default {
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
  data() {
    return {
      memoItems: this.memos
    };
  },
  methods: {
    onChangeMemoList(memoItem: Memo, index: number) {
      this.memoItems[index] = memoItem;
      this.$emit("on-change-memo-list", this.memoItems);
    },
    onDeleteListItem(index: number) {
      this.$emit("on-delete-list-item", { item: "memos", index: index });
    }
  }
};
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
    margin-right: 3px;
  }
}
</style>
