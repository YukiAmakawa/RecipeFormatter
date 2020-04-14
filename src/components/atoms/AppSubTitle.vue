<template lang="pug">
  .AppSubTitle
    .subtitle-wrap.flex.flex-middle
      span.sub-title ー{{title}}
      .serving-form.flex.flex-middle(v-if="title === '材料'")
        span.blacket （
        app-form.servingForm(
          type="text"
          placeholder="2人分"
          v-model="servingForItem"
          @input="onChangeServingFor"
        )
        span.blacket ）
      span ーーーーーー
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
    title: {
      type: String,
      default: ""
    },
    servingFor: {
      type: String,
      default: ""
    }
  },
  data(): Data {
    return {
      servingForItem: this.servingFor
    };
  },
  methods: {
    onChangeServingFor(servingForItem: string): void {
      this.$emit("on-change-serving-for", servingForItem);
    }
  }
});
</script>
<style lang="scss" scoped>
.AppSubTitle {
  .subtitle-wrap {
    .serving-form {
      width: 150px;
      .blacket {
        font-size: $default;
      }
    }
  }
}
</style>
