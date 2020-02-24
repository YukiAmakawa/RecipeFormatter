<template lang="pug">
  .IngredientList
    .title-wrap.flex.flex-middle
      app-sub-title.subtitle(title="材料")
      serving-for(
        :servingFor="servingFor"
        v-model="servingForItem"
        @on-change-serving-for-item="onChangeServingFor($event)"
      )
    .ingredient-list(
      v-for="(ingredient, index) in ingredientItems"
      v-model="ingredientItems"
    )
      ingredient-item(
        :ingredient="ingredient"
        @on-change-ingredient-item="onChangeIngredientList($event, index)"
      )
    .icon
      add-icon
</template>
<script lang="ts">
import AppSubTitle from "../atoms/AppSubTitle.vue";
import IngredientItem from "../molecules/IngredientItem.vue";
import ServingFor from "../molecules/ServingFor.vue";
import AddIcon from "../../assets/icons/Orion_add-circle.svg";
import { PropType } from "vue";
import { Ingredient } from "../../components/molecules/IngredientItem.vue";

type Data = {
  ingredientItems: Array<Ingredient>;
  servingFor: string;
};
type Props = {
  ingredients: Array<Ingredient>;
  servingFor: string;
};

export default {
  components: {
    AppSubTitle,
    IngredientItem,
    ServingFor,
    AddIcon
  },
  props: {
    ingredients: {
      type: Array as PropType<Ingredient[]>,
      default: () => []
    },
    servingFor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      ingredientItems: this.ingredients,
      servingForItem: this.servingFor
    };
  },
  methods: {
    onChangeIngredientList(ingredientItem: Ingredient, index: number) {
      this.ingredientItems[index] = ingredientItem;
      this.$emit("on-change-ingredient-list", this.ingredientItems);
    },
    onChangeServingFor(servingFor: string) {
      this.$emit("on-change-serving-for", servingFor);
    }
  }
};
</script>
<style lang="scss" scoped>
.IngredientList {
  width: 100%;
  .ingredient-list {
    margin-top: 5px;
    width: 316px;
  }
  .icon {
    margin-left: auto;
    margin-right: 3px;
  }
}
</style>
