<template lang="pug">
  .IngredientItem
    div(v-if="isEdit")
      .wrap-forms.flex.flex-middle
        app-form.name(type="text" placeholder="じゃがいも" v-model="ingredient.name")
        app-keyboard-option.amount(type="text" placeholder="2" v-model="ingredient.amount")
        app-datalist.unit(type="text" placeholder="個" v-model="ingredient.unit")
    div.flex.flex-middle(v-else)
      .icon.wrap-icons.flex
        i.move-icon(v-show="!isFirst")
          up-icon(@click="onUpItem")
        i.move-icon(v-show="!isLast")
          down-icon(@click="onDownItem")
      .wrap-texts.flex
        p.name {{ingredient.name}}
        p.amount {{ingredient.amount}}
        p.unit {{ingredient.unit}}
      i.icon
        close-icon(@click="onDeleteItem")
</template>
<script lang="ts">
import UpIcon from "../../assets/icons/Orion_arrow_up.svg";
import DownIcon from "../../assets/icons/Orion_arrow_down.svg";
import CloseIcon from "../../assets/icons/Orion_close.svg";
import AppForm from "../atoms/AppForm.vue";
import AppDatalist from "../atoms/AppDatalist.vue";
import AppKeyboardOption from "../atoms/AppKeyboardOption.vue";
import Vue, { PropType } from "vue";
export type Ingredient = {
  name: string;
  amount: string;
  unit: string;
};
export default Vue.extend({
  components: {
    UpIcon,
    DownIcon,
    CloseIcon,
    AppForm,
    AppDatalist,
    AppKeyboardOption
  },
  props: {
    ingredient: Object as PropType<Ingredient>,
    index: Number,
    isLast: Boolean,
    isEdit: Boolean
  },
  computed: {
    isFirst(): boolean {
      return this.index === 0;
    }
  },
  methods: {
    onDeleteItem(): void {
      this.$emit("on-delete-item");
    },
    onUpItem(): void {
      this.$emit("on-up-item");
    },
    onDownItem(): void {
      this.$emit("on-down-item");
    }
  }
});
</script>
<style lang="scss" scoped>
.IngredientItem {
  width: 100%;
  .wrap-icons {
    width: 31px;
  }
  .wrap-forms {
    .name {
      width: 60%;
    }
    .amount {
      width: 25%;
      margin-left: 1%;
    }
    .unit {
      width: 13%;
      margin-left: 1%;
    }
  }
  .wrap-texts {
    width: calc(100% - 55px);
    .name {
      width: 60%;
    }
    .amount {
      width: 19%;
      margin-left: 1%;
    }
    .unit {
      width: 19%;
      margin-left: 1%;
    }
  }
  .move-icon {
    svg {
      width: 14px;
      height: 20px;
    }
  }
}
</style>
