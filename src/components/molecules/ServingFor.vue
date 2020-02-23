<template lang="pug">
  .ServingFor
    .flex.flex-middle
      span.blacket （
      app-form.servingForm(type="text" placeholder="2人分" v-model="servingFor")
      span.blacket ）
</template>
<script>
import AppForm from "../atoms/AppForm.vue";

export default {
  components: {
    AppForm
  },
  props: {
    servingFor: {
      type: String,
      name: ""
    }
  }
};
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
