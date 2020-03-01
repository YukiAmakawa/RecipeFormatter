<template lang="pug">
  .CopyText
    //- message-copy.message-copy(@click="copyTexts")
    .message-wrap.flex.flex-middle(@click="copyTexts")
      .icon
        copy-icon
      .copy-text クリップボードにコピー
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
// import MessageCopy from "../molecules/MessageCopy.vue";
import CopyIcon from "../../assets/icons/Orion_copy.svg";
import { PropType } from "vue";
import { Recipe } from "../../components/molecules/RecipeTitle.vue";
import { Hashtag } from "../../components/molecules/HashTagItem.vue";
import { Ingredient } from "../../components/molecules/IngredientItem.vue";
import { Step } from "../../components/molecules/StepItem.vue";
import { Memo } from "../../components/molecules/MemoItem.vue";
export default {
  components: {
    // MessageCopy
    CopyIcon
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
  },
  methods: {
    copyTexts() {
      console.log("called");
      const formattedText = this.$el.querySelector(".formatted-text")
        .textContent;
      navigator.clipboard
        .writeText(formattedText)
        .then(() => {
          console.log("ok");
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.CopyText {
  width: 100%;
  border-top: 1px dashed gray;
  p {
    margin: 2px;
  }
  .message-wrap {
    width: 150px;
    margin-left: auto;
    margin-top: 8px;
    .copy-text {
      margin-left: 5px;
      font-size: 12px;
    }
    .icon {
      width: 14px;
      height: 14px;
    }
  }
}
</style>
