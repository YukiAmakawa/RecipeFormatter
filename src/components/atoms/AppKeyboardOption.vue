<template lang="pug">
  .AppFormWithKeyboardOption
    div
      .modal(
        v-if="isOptionListShow"
        @click="closeOptionList"
      )
      input.text-input(
        :type="type"
        :placeholder="placeholder"
        v-model="text"
        @focus="openOptionList"
        id="inputWithKeyboardOption"
        autocomplete="off"
      )
      .keyboard-option(v-if="isOptionListShow")
        .flex.space-between
          p(
            v-for="option in optionList"
            @click="selectOption(option)"
          ) {{option}}
</template>
<script lang="ts">
import Vue from "vue";
type Data = {
  searchWord: string;
  optionList: string[];
  isOptionListShow: boolean;
};
export default Vue.extend({
  props: {
    type: String,
    placeholder: String,
    value: String
  },
  data(): Data {
    return {
      searchWord: this.value,
      optionList: ["大さじ", "小さじ", "約", "各", "少々"],
      isOptionListShow: false
    };
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
    // optionsの数が少ないので、inputの値での絞り込みは一旦なし
    // filteredOptionList(): string[] | [] {
    //   if (!this.searchWord) return this.optionList;
    //   return this.optionList.filter(item => {
    //     return item.includes(this.searchWord);
    //   });
    // }
  },
  methods: {
    openOptionList(): void {
      this.isOptionListShow = true;
      const keyboardOption: HTMLInputElement = document.getElementById(
        "inputWithKeyboardOption"
      ) as HTMLInputElement;
      this.$nextTick(() => keyboardOption.focus());
    },
    closeOptionList(): void {
      this.isOptionListShow = false;
    },
    selectOption(option: string): void {
      this.$emit("input", option + this.text);
      this.closeOptionList();
      const keyboardOption: HTMLInputElement = document.getElementById(
        "inputWithKeyboardOption"
      ) as HTMLInputElement;
      this.$nextTick(() => keyboardOption.focus());
    }
  }
});
</script>
<style lang="scss" scoped>
.AppFormWithKeyboardOption {
  width: 100%;
  .text-input {
    width: 100%;
    z-index: 3;
    background: #fffffe;
    font-size: $small;
    line-height: $small;
    padding: 3px 8px;
    border-radius: 3px;
    position: relative;
  }
  .modal {
    display: flex;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background-color: #f45d48;
  }
  .text-input {
    @include placeholder();
  }
  .keyboard-option {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 5;
    padding: 10px;
    background-color: #f3f3f3;
    p {
      width: calc(100% / 4);
      color: gray;
      font-weight: bold;
      text-align: center;
      padding: 3px;
    }
    p + p {
      border-left: 1px solid #c0c0c0;
    }
  }
}
</style>
