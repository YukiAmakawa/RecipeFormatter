<template lang="pug">
  .IngredientItem
    move-icon
    app-form(type="text" placeholder="じゃがいも" v-model="ingredient.name")
    app-form(type="text" placeholder="2つ" v-model="ingredient.amount")
    close-icon
</template>
<script>
import MoveIcon from "../../assets/icons/Orion_copy.svg";
import CloseIcon from "../../assets/icons/Orion_close.svg";
import AppForm from "../atoms/AppForm.vue";

export default {
  components: {
    MoveIcon,
    CloseIcon,
    AppForm
  },
  props: {
    ingredient: {
      type: Object,
      default: () => {
        return {
          name: "",
          amount: ""
        };
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.IngredientItem {
  width: 100%;
}
</style>
