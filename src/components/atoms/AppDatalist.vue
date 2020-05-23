<template lang="pug">
    .AppDatalist
      div
        input.text-input(
          :type="type"
          :placeholder="placeholder"
          v-model="text"
          @focus="openOptionList"
        )
        .options(v-if="isOptionListShow")
          p(
            v-for="option in filteredOptionList"
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
    // keywords: {
    //   type: Boolean,
    //   default: false
    // }
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
    },
    filteredOptionList(): string[] | [] {
      if (!this.searchWord) return this.optionList;
      return this.optionList.filter(item => {
        return item.includes(this.searchWord);
      });
    }
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
    background: #fffffe;
    font-size: $small;
    line-height: $small;
    padding: 3px 8px;
    border-radius: 3px;
  }
  datalist option {
    width: 100%;
    background: #fffffe;
    font-size: $small;
    line-height: $small;
    padding: 3px 8px;
    border-radius: 3px;
  }
}
</style>
