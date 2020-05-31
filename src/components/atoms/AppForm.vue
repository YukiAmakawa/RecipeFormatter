<template lang="pug">
  .AppForm
    input.text-input(
      :type="type"
      :placeholder="placeholder"
      v-model="text"
      :disabled="disabled"
    )
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    text: {
      get(): string {
        return this.value;
      },
      set(value: string): void {
        this.$emit("input", value);
      }
    }
  }
});
</script>
<style lang="scss" scoped>
.AppForm {
  width: 100%;
  .text-input {
    width: 100%;
    background: #fffffe;
    font-size: $small;
    line-height: $small;
    padding: 3px 8px;
    border-radius: 3px;
    @include placeholder();
  }
}
</style>
