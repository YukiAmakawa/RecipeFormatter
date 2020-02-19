<template lang="pug">
  .HashTagList
    div(v-for="(hashtag, index) in hashtags")
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
  width: 100%;
}
</style>
