<template lang="pug">
  .IngredientList
    app-sub-title(title="材料")
    serving-for(:servingFor="servingFor")
    div(v-for="(ingredient, index) in ingredients")
      ingredient-item(:ingredient="ingredient")
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
}
</style>
