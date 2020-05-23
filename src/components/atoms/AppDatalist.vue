<template lang="pug">
    .AppDatalist
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
        )
        .options(v-if="isOptionListShow")
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
      optionList: ["g", "ml", "l", "個", "本", "少々"],
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
    },
    closeOptionList(): void {
      this.isOptionListShow = false;
    },
    selectOption(option: string): void {
      this.$emit("input", option);
      this.closeOptionList();
    }
  }
});
</script>
<style lang="scss" scoped>
.AppDatalist {
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
  }
  .options {
    position: absolute;
    z-index: 3;
    background: #fffffe;
    font-size: $small;
    line-height: $small;
    padding: 3px 8px;
    border-radius: 2px;
    p {
      padding: 7px 3px;
    }
    p + p {
      border-top: 1px solid #f5f5f5;
    }
  }
}
</style>
