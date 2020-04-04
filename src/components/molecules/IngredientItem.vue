<template lang="pug">
  .IngredientItem
    //- move-icon
    div.flex.flex-middle
      .wrap-forms.flex
        app-form.name(type="text" placeholder="じゃがいも" v-model="ingredientItem.name")
        app-form.amount(type="text" placeholder="2つ" v-model="ingredientItem.amount")
      i.icon(v-if="!isFirstItem")
        close-icon(@click="onDeleteItem")
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

export default Vue.extend({
  components: {
    MoveIcon,
    CloseIcon,
    AppForm
  },
  props: {
    ingredient: Object as PropType<Ingredient>,
    index: Number
  },
  data(): Data {
    return {
      ingredientItem: this.ingredient
    };
  },
  computed: {
    isFirstItem(): boolean {
      return this.index === 0;
    }
  },
  methods: {
    onDeleteItem(): void {
      this.$emit("on-delete-item");
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
}
</style>
