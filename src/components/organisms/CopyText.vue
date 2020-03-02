<template lang="pug">
  .CopyText
    .message-wrap.flex.flex-middle.end(@click="copyTexts")
      .icon
        copy-icon
      p.copy-message クリップボードにコピー
    div.formatted-text
      p.default-message(v-if="isNoText") レシピを入力するとコピー用のテキストが表示されます
      span.recipe
        span.recipe-name {{formattedTitle}}<br>
        <br>
        span.recipe-description {{formattedDescription}}<br>
        <br>
      template.formatted-ingredients {{formattedIngredientTitle}}<br>
      //- ul.formatted-ingredients-list
      template.ingredient(v-for="ingredient in ingredients")
        span.ing-name-amount(v-if="ingredient.name&&ingredient.amount") {{ingredient.name}}  {{ingredient.amount}}<br>
      <br>
      template.formatted-steps {{formattedStepTitle}}<br>
      //- ul.formatted-steps-list
      template.step(v-for="(step, index) in steps")
        template.step-description(v-if="step.description") {{index+1}}. {{step.description}}<br>
      <br>
      template.formatted-steps {{formattedMemotTitle}}<br>
      //- ul.formatted-hashtags-list
      template.memo(v-for="(memo, index) in memos")
          template.memo-description(v-if="memo.description") {{index+1}}. {{memo.description}}<br>
      <br>
      //- ul.formatted-hashtags-list
      template.hashtag(v-for="hashtag in hashtags")
        template.hashtag-title(v-if="hashtag.title") \#{{hashtag.title}} 
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
  computed: {
    isNoText() {
      return (
        !this.recipe.title &&
        !this.recipe.description &&
        !this.ingredients[0].name &&
        !this.servingFor &&
        !this.steps[0].description &&
        !this.memos[0].description &&
        !this.hashtags[0].title
      );
    },
    formattedServingFor() {
      return this.servingFor ? `（${this.servingFor})` : "";
    },
    formattedTitle() {
      return this.recipe.title ? `【${this.recipe.title}】` : "";
    },
    formattedDescription() {
      return this.recipe.description ? `${this.recipe.description}` : "";
    },
    formattedIngredientTitle() {
      return this.ingredients[0].name && this.ingredients[0].amount
        ? `ー材料${this.formattedServingFor}ーーーーーー`
        : "";
    },
    formattedIngredientItem() {
      let formattedIngredientItem = [];
      this.ingredients.forEach(i => {
        if (!i.name || !i.amount) return;
        formattedIngredientItem += `\r\n${i.name}  ${i.amount}`;
      });
      return formattedIngredientItem;
    },
    formattedStepTitle() {
      return this.steps[0].description ? `ー作り方ーーーーーー` : "";
    },
    formattedStepItem() {
      let formattedStepItem = [];
      this.steps.forEach((s, index) => {
        if (!s.description) return;
        formattedStepItem += `\r\n${index + 1}. ${s.description}`;
      });
      return formattedStepItem;
    },
    formattedMemotTitle() {
      return this.memos[0].description ? `ー備考ーーーーーー` : "";
    },
    formattedMemoItem() {
      let formattedMemoItem = [];
      this.memos.forEach((m, index) => {
        if (!m.description) return;
        formattedMemoItem += `\r\n${index + 1}. ${m.description}`;
      });
      return formattedMemoItem;
    },
    formatReturn() {
      return `

`;
    },
    formattedHashtagItem() {
      let formattedHashtagItem = [];
      this.hashtags.forEach(h => {
        if (!h.title) return;
        formattedHashtagItem += `#${h.title}`;
      });
      return formattedHashtagItem;
    }
  },
  methods: {
    copyTexts() {
      const formattedText = `${this.formatReturn}${this.formattedTitle}${this.formatReturn}${this.formattedDescription}${this.formatReturn}${this.formattedIngredientTitle}${this.formattedIngredientItem}${this.formatReturn}${this.formattedStepTitle}${this.formattedStepItem}${this.formatReturn}${this.formattedMemotTitle}${this.formattedMemoItem}${this.formatReturn}${this.formattedHashtagItem}`;

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
  font-size: 12px;

  .message-wrap {
    margin-top: 8px;
    .copy-message {
      margin-left: 5px;
    }
    .icon {
      width: 14px;
      height: 14px;
    }
  }
  .formatted-text {
    margin-top: 15px;
    font-size: 14px;
    .default-message {
      color: gray;
    }
    p {
      margin: 2px;
    }
  }
}
</style>
