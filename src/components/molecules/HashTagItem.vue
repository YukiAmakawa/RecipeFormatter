<template lang="pug">
  .HashTagItem
    span #
    app-form(type="text" placeholder="和食" v-model="hashtag.name")
    close-icon
</template>
<script lang="ts">
import AppForm from "../atoms/AppForm.vue";
import Vue, { PropType } from "vue";
export type Hashtag = {
  name: string;
};

export default Vue.extend({
  components: {
    AppForm
  },
  props: {
    hashtag: Object as PropType<Hashtag>
  }
});
</script>
<style lang="scss" scoped>
.HashTagItem {
  width: 100%;
}
</style>
