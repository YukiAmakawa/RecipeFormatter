<template lang="pug">
  .IngredientItem
    div.flex.flex-middle
      .wrap-icons.flex
        i.move-icon(v-if="!isFirst")
          up-icon(@click="onUpItem")
        i.move-icon(v-if="!isLast")
          down-icon(@click="onDownItem")
      .wrap-forms.flex
        app-form.name(type="text" placeholder="じゃがいも" v-model="ingredient.name")
        app-form.amount(type="text" placeholder="2つ" v-model="ingredient.amount")
      i.icon
        close-icon(@click="onDeleteItem")
</template>
<script lang="ts">
import UpIcon from "../../assets/icons/Orion_arrow_up.svg";
import DownIcon from "../../assets/icons/Orion_arrow_down.svg";
import CloseIcon from "../../assets/icons/Orion_close.svg";
import AppForm from "../atoms/AppForm.vue";
import Vue, { PropType } from "vue";
export type Ingredient = {
  name: string;
  amount: string;
};

export default Vue.extend({
  components: {
    UpIcon,
    DownIcon,
    CloseIcon,
    AppForm
  },
  props: {
    ingredient: Object as PropType<Ingredient>,
    index: Number,
    isLast: Boolean
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
    width: calc(100% - 55px);
    .name {
      width: 70%;
    }
    .amount {
      width: 30%;
      margin-left: 7px;
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
