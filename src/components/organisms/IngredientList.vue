<template lang="pug">
  .IngredientList
    .title-wrap.flex.flex-middle
      app-sub-title.subtitle(title="材料")
      serving-for(:servingFor="servingFor")
    .ingredient-list(v-for="(ingredient, index) in ingredients")
      ingredient-item(:ingredient="ingredient")
    .icon
      add-icon
</template>
<script>
import AppSubTitle from "../atoms/AppSubTitle.vue";
import IngredientItem from "../molecules/IngredientItem.vue";
import ServingFor from "../molecules/ServingFor.vue";
import AddIcon from "../../assets/icons/Orion_add-circle.svg";

export default {
  components: {
    AppSubTitle,
    IngredientItem,
    ServingFor,
    AddIcon
  },
  props: {
    servingFor: {
      type: String,
      default: ""
    },
    ingredients: {
      type: Array,
      default: () => []
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
