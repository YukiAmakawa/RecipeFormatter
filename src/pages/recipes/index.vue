<template lang="pug">
  .recipes-index
    recipe-title(:title="recipe.title" :description="recipe.description")
    ingredient-list(:ingredients="ingredients")
    step-list(:steps="steps")
    memo-list(:memos="memos")
    hash-tag-list(:hashtags="hashtags")
</template>

<script lang="ts">
import Vue from "vue";
import RecipeTitle from "../../components/organisms/RecipeTitle.vue";
import IngredientList from "../../components/organisms/IngredientList.vue";
import StepList from "../../components/organisms/StepList.vue";
import MemoList from "../../components/organisms/MemoList.vue";
import HashTagList from "../../components/organisms/StepList.vue";
import Hashtag from "../../components/molecules/HashTagItem.vue";
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
    RecipeTitle,
    IngredientList,
    StepList,
    MemoList,
    HashTagList
  },
  data: (): Data => ({
    recipe: {
      title: "",
      description: ""
    },
    ingredients: [],
    steps: [],
    memos: [],
    hashtags: []
  })
});
</script>
