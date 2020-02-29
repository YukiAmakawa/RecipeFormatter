<template lang="pug">
  .HashTagList
    .hash-tag-list
      ul(v-for="(hashtag, index) in hashtags" v-model="hashtagItems")
        hash-tag-item(:hashtag="hashtag" @on-change-hashtag-item="onChangeHashtagList($event, index)")
    .icon
      add-icon
</template>
<script lang="ts">
import HashTagItem from "../molecules/HashTagItem.vue";
import AddIcon from "../../assets/icons/Orion_add-circle.svg";
import { PropType } from "vue";
import { Hashtag } from "../../components/molecules/HashTagItem.vue";
type Data = {
  hastagItems: Array<Hashtag>;
};
type Props = {
  hastags: Array<Hashtag>;
};

export default {
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
  data() {
    return {
      hashtagItems: this.hashtags
    };
  },
  methods: {
    onChangeHashtagList(hashtagItem: Hashtag, index: number) {
      this.hashtagItems[index] = hashtagItem;
      this.$emit("on-change-hashtag-list", this.hashtagItems);
    }
  }
};
</script>
<style lang="scss" scoped>
.HashTagList {
  width: 217px;
  .hash-tag-list {
    width: 217px;
  }
  .icon {
    margin-left: auto;
    margin-right: 3px;
  }
}
</style>
