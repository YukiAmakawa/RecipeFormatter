<template lang="pug">
  .IngredientItem
    //- move-icon
    div.flex.flex-middle
      .wrap-forms.flex
        app-form.name(type="text" placeholder="じゃがいも" v-model="ingredientItem.name" @on-change-form="onChangeIngredientItem($event, 'name')")
        app-form.amount(type="text" placeholder="2つ" v-model="ingredientItem.amount" @on-change-form="onChangeIngredientItem($event, 'amount')")
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

type Data = {
  ingredientItem: Ingredient;
};
type Props = {
  ingredient: Ingredient;
};

export default Vue.extend({
  components: {
    MoveIcon,
    CloseIcon,
    AppForm
  },
  props: {
    ingredient: Object as PropType<Ingredient>
  },
  data() {
    return {
      ingredientItem: this.ingredient
    };
  },
  methods: {
    onChangeIngredientItem(value: string, prop: string) {
      this.ingredientItem.prop = value;
      this.$emit("on-change-hashtag-item", this.ingredientItem);
    }
  }
});
</script>
<style lang="scss" scoped>
.IngredientItem {
  width: 100%;
  .wrap-forms {
    width: 290px;
    .name {
      width: 175px;
    }
    .amount {
      width: 108px;
      margin-left: 7px;
    }
  }
  .icon {
    margin-left: 5px;
  }
}
</style>
