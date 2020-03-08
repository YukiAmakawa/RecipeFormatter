<template lang="pug">
  .HashTagItem
    div.flex.flex-middle
      span.hash #
      app-form.title(type="text" placeholder="和食" v-model="hashtagItem.title")
      .icon(v-if="!isFirstItem")
        close-icon(@click="onDeleteItem")
</template>
<script lang="ts">
import AppForm from "../atoms/AppForm.vue";
import CloseIcon from "../../assets/icons/Orion_close.svg";
import Vue, { PropType } from "vue";
export type Hashtag = {
  title: string;
};

type Data = {
  hashtagItem: Hashtag;
};

export default Vue.extend({
  components: {
    AppForm,
    CloseIcon
  },
  props: {
    hashtag: Object as Vue.PropType<Hashtag>,
    index: Number
  },
  data(): Data {
    return {
      hashtagItem: this.hashtag
    };
  },
  computed: {
    isFirstItem(): boolean {
      return this.index === 0;
    }
  },
  methods: {
    onDeleteItem(): void {
      this.$emit("on-delete-item");
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
