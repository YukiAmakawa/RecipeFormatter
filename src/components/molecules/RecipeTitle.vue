<template lang="pug">
  .RecipeTitle
    app-form.title(
      type="text"
      placeholder="肉じゃが"
      v-model="recipeItem.title"
      @on-change-form="onChangeRecipeTitle"
    )
    app-textarea.description(
      placeholder="食卓の定番料理。薄めの優しい味つけです"
      v-model="recipeItem.description"
      @on-change-textarea="onChangeRecipeTitle"
    )
</template>
<script lang="ts">
import AppForm from "../atoms/AppForm.vue";
import AppTextarea from "../atoms/AppTextarea.vue";
import Vue, { PropType } from "vue";
export type Recipe = {
  title: string;
  description: string;
};

export default Vue.extend({
  components: {
    AppForm,
    AppTextarea
  },
  props: {
    recipe: Object as PropType<Recipe>
  },
  data() {
    return {
      recipeItem: {
        title: this.title,
        description: this.description
      }
    };
  },
  methods: {
    onChangeRecipeTitle() {
      console.log("called");
      this.$emit("on-change-recipe-title", this.recipeItem);
    }
  }
});
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
