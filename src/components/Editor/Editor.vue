<template>
  <div class="editor">
    <input
      type="date"
      v-bind:value="value.date"
      v-on:input="changed('date', $event.target.value)"
    >
    <inputter
      title="内容の要約"
      v-bind:value="value.summary"
      v-on:input="changed('summary', $event)"
    ></inputter>
    <inputter
      title="筆者の意図"
      v-bind:value="value.intention"
      v-on:input="changed('intention', $event)"
    ></inputter>
    <inputter
      title="自分の意見"
      v-bind:value="value.opinion"
      v-on:input="changed('opinion', $event)"
    ></inputter>
    <button v-on:click="addReport()">追加</button>
  </div>
</template>

<script>
import Inputter from '@/components/Editor/Inputter';

export default {
  name: 'Editor',
  props: [
    'value',
  ],

  methods: {
    addReport () {
      this.$emit('add');
    },
    changed (event, value) {
      this.$emit('changed', {
        ...this.value,
        ...{ [event]: value }
      });
    },
  },
  components: {
    Inputter,
  },
};
</script>

<style scoped>
  .editor {
    position: relative;
  }

  .editor-label {
    position: relative;
  }

  .editor-input {
    resize: vertical;
    position: relative;
    width: calc(100% - 45px);
    height: 60px;
    display: inline-block;
  }

  .editor-count {
    position: relative;
    left: 0px;
    display: inline-block;
    width: 30px;
  }
</style>
