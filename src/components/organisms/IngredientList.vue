<template lang="pug">
  .IngredientList
    .title-wrap.flex.flex-middle
      app-sub-title.subtitle(
        title="材料"
        :servingFor="ingredients.servingFor"
        v-model="servingForItem"
        @on-change-serving-for="onChangeServingFor($event)"
      )
    ul.ingredient-list
      li(v-for="(ingredient, index) in ingredientItems" v-model="ingredientItems")
        ingredient-item(
          :ingredient="ingredient"
          :index="index"
          @on-change-ingredient-item="onChangeIngredientList($event, index)"
          @on-delete-item="deleteListItem(index)"
        )
    .icon
      add-icon(@click="addListItem")
</template>
<script lang="ts">
import AppSubTitle from "../atoms/AppSubTitle.vue";
import IngredientItem from "../molecules/IngredientItem.vue";
import AddIcon from "../../assets/icons/Orion_add-circle.svg";
import { Ingredient } from "../../components/molecules/IngredientItem.vue";
import Vue, { PropType } from "vue";
type Data = {
  ingredientItems: Array<Ingredient>;
  servingForItem: string;
};

export default Vue.extend({
  components: {
    AppSubTitle,
    IngredientItem,
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
  data(): Data {
    return {
      ingredientItems: this.ingredients,
      servingForItem: this.servingFor
    };
  },
  methods: {
    onChangeIngredientList(ingredientItem: Ingredient, index: number): void {
      this.ingredientItems[index] = ingredientItem;
      this.$emit("on-change-ingredient-list", this.ingredientItems);
    },
    onChangeServingFor(servingFor: string): void {
      this.$emit("on-change-serving-for", servingFor);
    },
    deleteListItem(index: number): void {
      this.$emit("delete-list-item", { item: "ingredients", index: index });
    },
    addListItem() {
      this.$emit("add-list-item", { item: "ingredients" });
    }
  }
});
</script>
<style lang="scss" scoped>
.IngredientList {
  width: 100%;
  .ingredient-list {
    margin-top: 5px;
    width: 316px;
    li + li {
      margin-top: 5px;
    }
  }
  .icon {
    margin-left: auto;
    margin-right: 3px;
  }
}
</style>
