<template lang="pug">
  .HashTagItem
    div.flex.flex-middle
      span.hash #
      app-form.title(type="text" placeholder="和食" v-model="hashtagItemTitle" @on-change-form="onChangeHashtagItem")
      .icon
        close-icon
</template>
<script lang="ts">
import AppForm from "../atoms/AppForm.vue";
import CloseIcon from "../../assets/icons/Orion_close.svg";
import Vue, { PropType } from "vue";
export type Hashtag = {
  title: string;
};

type Data = {
  hastagItem: Record<string, string>;
};
type Props = {
  hastag: Record<string, string>;
};

export default Vue.extend({
  components: {
    AppForm,
    CloseIcon
  },
  props: {
    hashtag: Object as Vue.PropType<Hashtag>
    // hashtag: String
  },
  data() {
    return {
      hashtagItemTitle: this.hashtag.title
    };
  },
  methods: {
    onChangeHashtagItem(value: string) {
      console.log("item");
      console.log(value);
      this.$emit("on-change-hashtag-item", value);
    }
  }
});
</script>
<style lang="scss" scoped>
.HashTagItem {
  .title {
    width: 175px;
    margin-left: 5px;
  }
  .icon {
    margin-left: 5px;
  }
}
</style>
