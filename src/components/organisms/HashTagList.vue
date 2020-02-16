<template lang="pug">
  .HashTagList
    div(v-for="(hastag, index) in hastags")
      hash-tag-item(:hashtag="hashtag")
    add-icon
</template>
<script>
import HashTagItem from "../molecules/IngredientItem.vue";
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
