<template lang="pug">
  .recipes-index
    .wrap
      app-logo.app-logo
      recipe-title.recipe-title(:title="recipe.title" :description="recipe.description")
      ingredient-list.ingredient-list(:ingredients="ingredients")
      step-list.step-list(:steps="steps")
      memo-list.memo-list(:memos="memos")
      hash-tag-list.hash-tag-list(:hashtags="hashtags" @on-change-hashtag-list="onChangeHashTagList")
      copy-text.copy-text
</template>

<script lang="ts">
import Vue from "vue";
import AppLogo from "../../components/atoms/AppLogo.vue";
import RecipeTitle from "../../components/molecules/RecipeTitle.vue";
import IngredientList from "../../components/organisms/IngredientList.vue";
import StepList from "../../components/organisms/StepList.vue";
import MemoList from "../../components/organisms/MemoList.vue";
import CopyText from "../../components/organisms/CopyText.vue";
import HashTagList from "../../components/organisms/HashTagList.vue";
import { Hashtag } from "../../components/molecules/HashTagItem.vue";
import { Ingredient } from "../../components/molecules/IngredientItem.vue";
import { Step } from "../../components/molecules/StepItem.vue";

type Recipe = {
  title: string;
  description: string;
};

export type Data = {
  recipe: Recipe;
  ingredients: Ingredient[];
  steps: Step[];
  memos: Step[];
  hashtags: Hashtag[];
};

export default Vue.extend({
  components: {
    AppLogo,
    RecipeTitle,
    IngredientList,
    StepList,
    MemoList,
    HashTagList,
    CopyText
  },
  data: (): Data => ({
    recipe: {
      title: "",
      description: ""
    },
    ingredients: [
      {
        name: "",
        amount: ""
      }
    ],
    steps: [
      {
        description: ""
      }
    ],
    memos: [
      {
        description: ""
      }
    ],
    hashtags: [
      {
        title: ""
      }
    ]
  }),
  methods: {
    onChangeHashTagList(hashtagList: Hashtag[]) {
      this.hashtags = hashtagList;
    }
  }
});
</script>
<style lang="scss">
.recipes-index {
  .recipe-title {
    margin-top: 36px;
  }
  .ingredient-list {
    margin-top: 15px;
  }
  .message-copy {
    margin-top: 20px;
  }
}
</style>
