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
        @on-change-serving-for="onChangeServingFor",
        @delete-list-item="deleteListItem"
        @on-up-ingredient-list="upListItem"
        @on-down-ingredient-list="downListItem"
        @add-list-item="addListItem"
      )
      step-list.step-list(
        :steps="steps"
        @on-change-step-list="onChangeStepList"
        @delete-list-item="deleteListItem"
        @add-list-item="addListItem"
        )
      memo-list.memo-list(
        :memos="memos"
        @on-change-memo-list="onChangeMemoList"
        @delete-list-item="deleteListItem"
        @add-list-item="addListItem"
      )
      hash-tag-list.hash-tag-list(
        :hashtags="hashtags"
        @on-change-hashtag-list="onChangeHashTagList"
        @delete-list-item="deleteListItem"
        @add-list-item="addListItem"
      )
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

type Key = string;
export type Data = {
  [key in Key]: any;
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
    onChangeRecipeTitle(recipeTitle: Recipe): void {
      this.recipe = recipeTitle;
    },
    onChangeHashTagList(hashtagList: Hashtag[]): void {
      this.hashtags = hashtagList;
    },
    onChangeIngredientList(ingredientList: Ingredient[]): void {
      this.ingredients.ingredientsList = ingredientList;
    },
    onChangeServingFor(servingFor: string): void {
      this.ingredients.servingFor = servingFor;
    },
    onChangeStepList(stepList: Step[]): void {
      this.steps = stepList;
    },
    onChangeMemoList(memoList: Memo[]): void {
      this.memos = memoList;
    },
    upListItem({ item, index }: { item: string; index: number }): void {
      if (item === "ingredients") {
        this.ingredients.ingredientsList.splice(
          index - 1,
          2,
          this.ingredients.ingredientsList[index],
          this.ingredients.ingredientsList[index - 1]
        );
      } else {
        const array = this[item];
        array.splice(index - 1, 2, array[index], array[index - 1]);
      }
    },
    downListItem({ item, index }: { item: string; index: number }): void {
      console.log(item, index);
      if (item === "ingredients") {
        this.ingredients.ingredientsList.splice(
          index,
          2,
          this.ingredients.ingredientsList[index + 1],
          this.ingredients.ingredientsList[index]
        );
        this.ingredients.splice();
      } else {
        const array = this[item];
        array.splice(index, 2, array[index + 1], array[index]);
      }
    },
    deleteListItem({ item, index }: { item: string; index: number }): void {
      if (!confirm("削除してよろしいですか？")) return;
      if (item === "ingredients") {
        this.ingredients.ingredientsList.splice(index, 1);
      } else {
        this[item].splice(index, 1);
      }
    },
    addListItem({ item }: { item: string }): void {
      switch (item) {
        case "ingredients":
          this.ingredients.ingredientsList.push({ name: "", amount: "" });
          break;
        case "steps":
          this.steps.push({ description: "" });
          break;
        case "memos":
          this.memos.push({ description: "" });
          break;
        case "hashtags":
          this.hashtags.push({ title: "" });
          break;
      }
    }
  }
});
</script>
<style lang="scss">
.recipes-index {
  font-size: $small;
  .recipe-title {
    margin-top: 36px;
  }
  .ingredient-list {
    margin-top: 15px;
  }
  .copy-text {
    margin-top: 20px;
  }
}
</style>
