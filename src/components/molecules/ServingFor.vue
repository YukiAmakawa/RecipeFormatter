<template lang="pug">
  .ServingFor
    .flex.flex-middle
      span.blacket （
      app-form.servingForm(
        type="text"
        placeholder="2人分"
        v-model="servingForItem"
        @input="onChangeServingForItem"
      )
      span.blacket ）
</template>
<script lang="ts">
import AppForm from "../atoms/AppForm.vue";
import Vue from "vue";
type Data = {
  servingForItem: string;
};

export default Vue.extend({
  components: {
    AppForm
  },
  props: {
    servingFor: {
      type: String
    }
  },
  data(): Data {
    return {
      servingForItem: this.servingFor
    };
  },
  methods: {
    onChangeServingForItem(): void {
      this.$emit("on-change-serving-for-item", this.servingForItem);
    }
  }
});
</script>
<style lang="scss" scoped>
.ServingFor {
  width: 100%;
  .blacket {
    font-size: 18px;
  }
  .servingForm {
    width: 108px;
    margin: 0 6px;
  }
}
</style>
