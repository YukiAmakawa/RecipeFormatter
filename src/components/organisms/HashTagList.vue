<template lang="pug">
  .HashTagList
    ul.hash-tag-list
      li(v-for="(hashtag, index) in hashtags" v-model="hashtagItems")
        hash-tag-item.hash-tag-item(
          :hashtag="hashtag"
          :index="index"
          @on-change-hashtag-item="onChangeHashtagList($event, index)"
          @on-delete-item="deleteListItem(index)"
        )
    .wrap-button.flex.flex-middle.content-center
      span.add(@click="addListItem") ＋ハッシュタグを追加
</template>
<script lang="ts">
import HashTagItem from "../molecules/HashTagItem.vue";
import AddIcon from "../../assets/icons/Orion_add-circle.svg";
import { Hashtag } from "../../components/molecules/HashTagItem.vue";
import Vue, { PropType } from "vue";
type Data = {
  hashtagItems: Hashtag[];
};

export default Vue.extend({
  components: {
    HashTagItem,
    AddIcon
  },
  props: {
    hashtags: {
      type: Array as PropType<Hashtag[]>,
      default: () => []
    }
  },
  data(): Data {
    return {
      hashtagItems: this.hashtags
    };
  },
  methods: {
    onChangeHashtagList(hashtagItem: Hashtag, index: number): void {
      this.hashtagItems[index] = hashtagItem;
      this.$emit("on-change-hashtag-list", this.hashtagItems);
    },
    deleteListItem(index: number): void {
      this.$emit("delete-list-item", { item: "hashtags", index: index });
    },
    addListItem(): void {
      this.$emit("add-list-item", { item: "hashtags" });
    }
  }
});
</script>
<style lang="scss" scoped>
.HashTagList {
  margin-top: 15px;
  margin-left: auto;
  .hash-tag-list {
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
