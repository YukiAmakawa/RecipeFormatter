<template lang="pug">
  .IngredientItem
    //- move-icon
    app-form(type="text" placeholder="じゃがいも" v-model="ingredient.name")
    app-form(type="text" placeholder="2つ" v-model="ingredient.amount")
    .icon
      close-icon
</template>
<script lang="ts">
import MoveIcon from "../../assets/icons/Orion_copy.svg";
import CloseIcon from "../../assets/icons/Orion_close.svg";
import AppForm from "../atoms/AppForm.vue";
import Vue, { PropType } from "vue";
export type Ingredient = {
  name: string;
  amount: string;
};

export default Vue.extend({
  components: {
    MoveIcon,
    CloseIcon,
    AppForm
  },
  props: {
    ingredient: Object as PropType<Ingredient>
  }
});
</script>
<style lang="scss" scoped>
.IngredientItem {
  width: 100%;
}
</style>
