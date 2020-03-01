<template lang="pug">
  .CopyText
    .message-wrap.flex.flex-middle(@click="copyTexts")
      .icon
        copy-icon
      .copy-text クリップボードにコピー
    span.formatted-text
      span.recipe
        span.recipe-name {{recipe.title}}<br>
        span.recipe-description {{recipe.description}}<br><br>
      template.formatted-ingredients 【材料】（{{servingFor}}）<br>
      //- ul.formatted-ingredients-list
      template.ingredient(v-for="ingredient in ingredients")
        span.ing-name-amount {{ingredient.name}} {{ingredient.amount}}<br>
      <br>
      template.formatted-steps 【作り方】<br>
      //- ul.formatted-steps-list
      template.step(v-for="(step, index) in steps")
        template.step-description {{index+1}}. {{step.description}}<br>
      <br>
      template.formatted-steps 【備考】<br>
      //- ul.formatted-hashtags-list
      template.memo(v-for="(memo, index) in memos")
          template.memo-description {{index+1}}. {{memo.description}}<br>
      <br>
      //- ul.formatted-hashtags-list
      template.hashtag(v-for="hashtag in hashtags")
        template.hashtag-title \#{{hashtag.title}} 
      <br>
</template>
<script lang="ts">
import CopyIcon from "../../assets/icons/Orion_copy.svg";
import { PropType } from "vue";
import { Recipe } from "../../components/molecules/RecipeTitle.vue";
import { Hashtag } from "../../components/molecules/HashTagItem.vue";
import { Ingredient } from "../../components/molecules/IngredientItem.vue";
import { Step } from "../../components/molecules/StepItem.vue";
import { Memo } from "../../components/molecules/MemoItem.vue";
export default {
  components: {
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
      const formattedTitle = `【${this.recipe.title}】\r\n${this.recipe.description}`;

      const formattedIngredientTitle = `ー材料（${this.servingFor})ーーーーーー`;
      let formattedIngredientItem = [];
      this.ingredients.forEach(i => {
        formattedIngredientItem += `\r\n${i.name}　${i.amount}`;
      });

      const formattedStepTitle = `ー作り方ーーーーーー`;
      let formattedStepItem = [];
      this.steps.forEach((s, index) => {
        formattedStepItem += `\r\n${index + 1}. ${s.description}`;
      });

      const formattedMemotTitle = `ー備考ーーーーーー`;
      let formattedMemoItem = [];
      this.memos.forEach((m, index) => {
        formattedMemoItem += `\r\n${index + 1}. ${m.description}`;
      });

      let formattedHashtagItem = [];
      this.hashtags.forEach(h => {
        formattedHashtagItem += `#${h.title}`;
      });

      //インスタ上で改行させる為にここで改行している
      const formattedText = `${formattedTitle}


${formattedIngredientTitle}${formattedIngredientItem}


${formattedStepTitle}${formattedStepItem}


${formattedMemotTitle}${formattedMemoItem}


${formattedHashtagItem}`;

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
