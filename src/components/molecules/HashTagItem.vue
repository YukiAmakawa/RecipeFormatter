<template lang="pug">
  .HashTagItem
    div.flex.flex-middle
      span.hash #
      app-form.title(type="text" placeholder="和食" v-model="hashtag.name")
      .icon
        close-icon
</template>
<script lang="ts">
import AppForm from "../atoms/AppForm.vue";
import CloseIcon from "../../assets/icons/Orion_close.svg";
import Vue, { PropType } from "vue";
export type Hashtag = {
  name: string;
};

export default Vue.extend({
  components: {
    AppForm,
    CloseIcon
  },
  props: {
    hashtag: Object as PropType<Hashtag>
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
