<template lang="pug">
  .RecipeTitle
    .title-wrap.flex.flex-middle
      span 【
      app-form.title(
        type="text"
        placeholder="肉じゃが"
        v-model="recipeItem.title"
        @input="onChangeRecipeTitle"
      )
      span 】
    app-textarea.description(
      placeholder="野菜もたくさんたべられる定番料理！一晩たつとじゃがいもに味が染みてもっとおいしくなりますよ。お弁当にもぜひどうぞ。"
      v-model="recipeItem.description"
      @input="onChangeRecipeTitle"
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

type Data = {
  recipeItem: {
    recipeTitle: string;
    recipeDescription: string;
  };
};

export default Vue.extend({
  components: {
    AppForm,
    AppTextarea
  },
  props: {
    recipe: {
      type: Object as PropType<Recipe>
    }
  },
  data(): Data {
    return {
      recipeItem: {
        recipeTitle: this.recipe.title,
        recipeDescription: this.recipe.description
      }
    };
  },
  methods: {
    onChangeRecipeTitle(): void {
      this.$emit("on-change-recipe-title", this.recipeItem);
    }
  }
});
</script>
<style lang="scss" scoped>
.RecipeTitle {
  width: 100%;
  .title-wrap {
    span {
      font-size: 18px;
    }
    .title {
      max-width: calc(100% - 50px);
    }
  }
  .description {
    width: 290px;
    margin-top: 5px;
  }
}
</style>
