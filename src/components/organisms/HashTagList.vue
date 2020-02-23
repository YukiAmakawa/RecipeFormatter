<template lang="pug">
  .HashTagList
    .hash-tag-list
      ul(v-for="(hashtag, index) in hashtags")
        hash-tag-item(:hashtag="hashtag")
    .icon
      add-icon
</template>
<script>
import HashTagItem from "../molecules/HashTagItem.vue";
import AddIcon from "../../assets/icons/Orion_add-circle.svg";

export default {
  components: {
    HashTagItem,
    AddIcon
  },
  props: {
    hashtags: {
      type: Array,
      default: () => []
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
