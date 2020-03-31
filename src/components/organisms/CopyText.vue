<template lang="pug">
  .CopyText
    transition(name="fade")
      .tool-tip(v-if="showToolTip")
        p.copy-succeed-message コピーしました
    button.message-wrap.flex.flex-middle.end(@click.prevent="copyTexts")
      i.icon
        copy-icon
      span.copy-message クリップボードにコピー
    .formatted-text
      p.default-message(v-if="isNoText") レシピを入力するとコピー用のテキストが表示されます
      span.recipe
        span.recipe-name {{formattedTitle}}<br>
        <br>
        span.recipe-description {{formattedDescription}}<br>
        <br>
      template.formatted-ingredients {{formattedIngredientTitle}}<br>

      template.ingredient(v-for="ingredient in ingredients")
        span.ing-name-amount(v-if="ingredient.name&&ingredient.amount") {{ingredient.name}}  {{ingredient.amount}}<br>
      <br>
      template.formatted-steps {{formattedStepTitle}}<br>

      template.step(v-for="(step, index) in steps")
        template.step-description(v-if="step.description") {{index+1}}. {{step.description}}<br>
      <br>
      template.formatted-steps {{formattedMemotTitle}}<br>

      template.memo(v-for="(memo, index) in memos")
          template.memo-description(v-if="memo.description") {{index+1}}. {{memo.description}}<br>
      <br>

      template.hashtag(v-for="hashtag in hashtags")
        template.hashtag-title(v-if="hashtag.title") \#{{hashtag.title}} 
      <br>
    #hidden-copy-text {{hiddenCopyText}}
</template>
<script lang="ts">
import CopyIcon from "../../assets/icons/Orion_copy.svg";
import { Recipe } from "../../components/molecules/RecipeTitle.vue";
import { Hashtag } from "../../components/molecules/HashTagItem.vue";
import { Step } from "../../components/molecules/StepItem.vue";
import { Memo } from "../../components/molecules/MemoItem.vue";
import Vue, { PropType } from "vue";
import { Ingredient } from "../molecules/IngredientItem.vue";
type Data = {
  showToolTip: boolean;
};
export default Vue.extend({
  components: {
    CopyIcon
  },
  data(): Data {
    return {
      showToolTip: false
    };
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
    isNoText(): boolean {
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
    formattedServingFor(): string {
      return this.servingFor ? `（${this.servingFor})` : "";
    },
    formattedTitle(): string {
      return this.recipe.title ? `【${this.recipe.title}】` : "";
    },
    formattedDescription(): string {
      return this.recipe.description ? `${this.recipe.description}` : "";
    },
    formattedIngredientTitle(): string {
      return this.ingredients[0].name && this.ingredients[0].amount
        ? `ー材料${this.formattedServingFor}ーーーーーー`
        : "";
    },
    formattedIngredientItem(): string {
      return this.ingredients.reduce(
        (accumulator, currentValue) =>
          accumulator + `\r\n${currentValue.name}  ${currentValue.amount}`,
        ""
      );
    },
    formattedStepTitle(): string {
      return this.steps[0].description ? `ー作り方ーーーーーー` : "";
    },
    formattedStepItem(): string {
      return this.steps.reduce((accumulator, currentValue, currentIndex) => {
        const returnValue = !currentValue.description
          ? ""
          : `\r\n${currentIndex + 1}. ${currentValue.description}`;
        return accumulator + returnValue;
      }, "");
    },
    formattedMemotTitle(): string {
      return this.memos[0].description ? `ー備考ーーーーーー` : "";
    },
    formattedMemoItem(): string {
      return this.memos.reduce((accumulator, currentValue, currentIndex) => {
        const returnValue = !currentValue.description
          ? ""
          : `\r\n${currentIndex + 1}. ${currentValue.description}`;
        return accumulator + returnValue;
      }, "");
    },
    formatReturn(): string {
      return `

`;
    },
    formattedHashtagItem(): string {
      if (!this.hashtags[0].title) return "";
      return this.hashtags.reduce(
        (accumulator, currentValue) => accumulator + `#${currentValue.title}`,
        ""
      );
    },
    hiddenCopyText(): string {
      return `${this.formatReturn}${this.formattedTitle}${this.formatReturn}${this.formattedDescription}${this.formatReturn}${this.formattedIngredientTitle}${this.formattedIngredientItem}${this.formatReturn}${this.formattedStepTitle}${this.formattedStepItem}${this.formatReturn}${this.formattedMemotTitle}${this.formattedMemoItem}${this.formatReturn}${this.formattedHashtagItem}`;
    }
  },
  methods: {
    isIOS() {
      const agent = window.navigator.userAgent;
      return agent.indexOf("iPhone") != -1 || agent.indexOf("iPad") != -1;
    },
    copyTexts(): void {
      if (this.isIOS()) {
        const doc: HTMLInputElement = document.getElementById(
          "hidden-copy-text"
        ) as HTMLInputElement;
        const selected = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(doc);
        selected!.removeAllRanges();
        selected!.addRange(range);
        document.execCommand("copy");
      } else {
        const formattedText = `${this.formatReturn}${this.formattedTitle}${this.formatReturn}${this.formattedDescription}${this.formatReturn}${this.formattedIngredientTitle}${this.formattedIngredientItem}${this.formatReturn}${this.formattedStepTitle}${this.formattedStepItem}${this.formatReturn}${this.formattedMemotTitle}${this.formattedMemoItem}${this.formatReturn}${this.formattedHashtagItem}`;
        navigator.clipboard.writeText(formattedText);
      }
      this.showToolTip = true;
      setTimeout(() => {
        this.showToolTip = false;
      }, 1500);
    }
  }
});
</script>
<style lang="scss" scoped>
.CopyText {
  position: relative;
  width: 100%;
  border-top: 1px dashed gray;
  font-size: 12px;

  .message-wrap {
    margin-top: 8px;
    margin-left: auto;
    .copy-message {
      margin-left: 5px;
    }
    .icon {
      width: 14px;
      height: 14px;
    }
  }
  .tool-tip {
    position: absolute;
    top: -15px;
    right: -10px;
    z-index: 10000;
    padding: 5px 10px 4px;
    background: #999;
    border-radius: 3px;
    font-size: 12px;
    text-align: center;
    .copy-succeed-message {
      color: #fefefe;
    }
  }
  .formatted-text {
    background: #fffffe;
    margin-top: 15px;
    padding: 10px 8px;
    font-size: 14px;
    border-radius: 3px;
    .default-message {
      color: gray;
    }
    p {
      margin: 2px;
    }
  }
  #hidden-copy-text {
    position: fixed;
    left: 100vw;
    white-space: pre-wrap;
  }
}
</style>
