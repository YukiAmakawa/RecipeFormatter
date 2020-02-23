<template lang="pug">
  .CopyText
    message-copy.message-copy
    .formatted-text
      p.formatted-title 
        .name 【簡単春巻き】
      <br>
      p.formatted-ingredients 【材料】（2人分）
      ul.formatted-ingredients-list
        li.ingredient
          span.name 春巻きの皮&nbsp;&nbsp;
          span.amount 10枚
        li.ingredient
          span.name 春巻きの皮&nbsp;&nbsp;
          span.amount 10枚
      <br>
      p.formatted-steps 【作り方】
      ul.formatted-steps-list
        li.ingredient
          p.description ①しいたけ、ニラをみじん切りにします。
          p.description ②ごま油を熱して、豚ひき肉に火が通るまで炒めたら、1を入れます。
      <br>
      ul.formatted-hashtags-list
        li.hastag
          p.title #中華
          p.title #料理すきな人とつながりたい
</template>
<script>
import MessageCopy from "../molecules/MessageCopy.vue";
export default {
  components: {
    MessageCopy
  },
  props: {}
};
</script>
<style lang="scss" scoped>
.CopyText {
  width: 100%;
  font-size: 14px;
  p {
    margin: 2px;
  }
}
</style>
