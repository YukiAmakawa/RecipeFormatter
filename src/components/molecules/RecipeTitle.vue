<template lang="pug">
  .RecipeTitle
    app-form.title(
      type="text"
      placeholder="肉じゃが"
      v-model="recipeTitle"
      @on-change-form="onChangeRecipeTitle"
    )
    app-textarea.description(
      placeholder="食卓の定番料理。薄めの優しい味つけです"
      v-model="recipeDescription"
      @on-change-textarea="onChangeRecipeTitle"
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
  },
  data() {
    return {
      recipeTitle: this.title,
      recipeDescription: this.description
    };
  },
  methods: {
    onChangeRecipeTitle() {
      console.log("called");
      this.$emit("on-change-recipe-title", {
        title: this.recipeTitle,
        description: this.recipeDescription
      });
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
