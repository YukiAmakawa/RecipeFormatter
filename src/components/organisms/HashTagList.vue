<template lang="pug">
  .HashTagList
    .hash-tag-list
      ul(v-for="(hashtag, index) in hashtags")
        hash-tag-item(:hashtag="hashtag" v-model="hashtagItems" @on-change-hashtag-item="onChangeHashtagList")
    .icon
      add-icon
</template>
<script lang="ts">
import HashTagItem from "../molecules/HashTagItem.vue";
import AddIcon from "../../assets/icons/Orion_add-circle.svg";
import { PropType } from "vue";
import { Hashtag } from "../../components/molecules/HashTagItem.vue";
// export type Hashtag = {
//   name: string;
// };
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
    onChangeHashtagList(value: string) {
      console.log("list");
      console.log(value);
      // this.$emit("on-change-hashtag-list", value);
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
