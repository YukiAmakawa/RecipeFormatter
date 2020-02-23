<template lang="pug">
  .RecipeTitle
    app-form.title(type="text" placeholder="肉じゃが" v-model="title")
    app-textarea.description(
      placeholder="食卓の定番料理。薄めの優しい味つけです"
      v-model="description"
    )
</template>
<script>
import AppForm from "../atoms/AppForm.vue";
import AppTextarea from "../atoms/AppTextarea.vue";

export default {
  components: {
    AppForm,
    AppTextarea
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
.RecipeTitle {
  width: 100%;
  .title {
    width: 175px;
  }
  .description {
    width: 290px;
    margin-top: 5px;
  }
}
</style>
