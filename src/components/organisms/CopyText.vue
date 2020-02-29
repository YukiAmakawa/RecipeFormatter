<template lang="pug">
  .CopyText
    message-copy.message-copy
    .formatted-text
      p.formatted-title
        .name {{recipe.title}}
      p.formatted-description
        .name {{recipe.description}}
      <br>
      p.formatted-ingredients 【材料】
      span （
      span {{servingFor}}
      span ）
      ul.formatted-ingredients-list
        li.ingredient(v-for="ingredient in ingredients")
          p.name {{ingredient.name}}
          p.amount {{ingredient.amount}}
      <br>
      p.formatted-steps 【作り方】
      ul.formatted-steps-list
        li.step(v-for="(step, index) in steps")
          p.step-description {{step.description}}
      <br>
      ul.formatted-hashtags-list
        li.memo(v-for="(memo, index) in memos")
          p.memo-description {{memo.description}}
      ul.formatted-hashtags-list
        li.hashtag(v-for="hashtag in hashtags")
          p.hashtag-title \#{{hashtag.title}}
</template>
<script lang="ts">
import MessageCopy from "../molecules/MessageCopy.vue";
import { PropType } from "vue";
import { Recipe } from "../../components/molecules/RecipeTitle.vue";
import { Hashtag } from "../../components/molecules/HashTagItem.vue";
import { Ingredient } from "../../components/molecules/IngredientItem.vue";
import { Step } from "../../components/molecules/StepItem.vue";
import { Memo } from "../../components/molecules/MemoItem.vue";
export default {
  components: {
    MessageCopy
  },
  props: {
    recipe: {
      type: Object as PropType<Recipe>,
      default: {}
    },
    ingredients: {
      type: Array as PropType<Ingredient[]>,
      default: () => []
    },
    servingFor: {
      type: String,
      default: ""
    },
    steps: {
      type: Array as PropType<Step[]>,
      default: () => []
    },
    memos: {
      type: Array as PropType<Memo[]>,
      default: () => []
    },
    hashtags: {
      type: Array as PropType<Hashtag[]>,
      default: () => []
    }
  }
};
</script>
<style lang="scss" scoped>
.CopyText {
  width: 100%;
  font-size: 14px;
  p {
    margin: 2px;
  }
}
</style>
