<template lang="pug">
  .ServingFor
    span （
    app-form(type="text" placeholder="200g" v-model="servingFor")
    span )
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
}
</style>
