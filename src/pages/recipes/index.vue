<template lang="pug">
  .recipes-index
    .wrap
      app-logo.app-logo
      recipe-title.recipe-title(
        :recipe="recipe"
        @on-change-recipe-title="onChangeRecipeTitle"
      )
      ingredient-list.ingredient-list(
        :ingredients="ingredients.ingredientsList"
        :servingFor="ingredients.servingFor"
        @on-change-ingredient-list="onChangeIngredientList"
        @on-change-serving-for="onChangeServingFor"
      )
      step-list.step-list(
        :steps="steps"
        @on-change-step-list="onChangeStepList"
        )
      memo-list.memo-list(
        :memos="memos"
        @on-change-memo-list="onChangeMemoList"
      )
      hash-tag-list.hash-tag-list(:hashtags="hashtags" @on-change-hashtag-list="onChangeHashTagList")
      copy-text.copy-text(
        :recipe="recipe"
        :ingredients="ingredients.ingredientsList"
        :servingFor="ingredients.servingFor"
        :steps="steps"
        :memos="memos"
        :hashtags="hashtags"
      )
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
import { Recipe } from "../../components/molecules/RecipeTitle.vue";
import { Hashtag } from "../../components/molecules/HashTagItem.vue";
import { Ingredient } from "../../components/molecules/IngredientItem.vue";
import { Step } from "../../components/molecules/StepItem.vue";
import { Memo } from "../../components/molecules/MemoItem.vue";

type IngredientList = {
  ingredientsList: Ingredient[];
  servingFor: string;
};

type StepList = {
  stepList: Step[];
};

type MemoList = {
  memoList: Memo[];
};

export type Data = {
  recipe: Recipe;
  ingredients: IngredientList;
  steps: Step[];
  memos: Memo[];
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
    ingredients: {
      ingredientsList: [
        {
          name: "",
          amount: ""
        }
      ],
      servingFor: ""
    },
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
    onChangeRecipeTitle(recipeTitle: Recipe) {
      console.log(recipeTitle);
      this.recipe = recipeTitle;
    },
    onChangeHashTagList(hashtagList: Hashtag[]) {
      this.hashtags = hashtagList;
    },
    onChangeIngredientList(ingredientList: Ingredient[]) {
      this.ingredients.ingredientsList = ingredientList;
    },
    onChangeServingFor(servingFor: string) {
      this.ingredients.servingFor = servingFor;
    },
    onChangeStepList(stepList: Step[]) {
      this.steps = stepList;
    },
    onChangeMemoList(memoList: Memo[]) {
      this.memos = memoList;
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
