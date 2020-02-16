<template lang="pug">
  .HashTagItem
    span #
    app-form(type="text" placeholder="和食" v-model="hashtag.name")
    close-icon
</template>
<script>
import AppForm from "../atoms/AppForm.vue";

export default {
  components: {
    AppForm
  },
  props: {
    hashtag: {
      type: Object,
      default: () => {
        return {
          name: ""
        };
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.HashTagItem {
  width: 100%;
}
</style>
