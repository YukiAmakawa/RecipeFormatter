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
    .icon
      add-icon(@click="addListItem")
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
  width: 217px;
  .hash-tag-list {
    width: 217px;
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
