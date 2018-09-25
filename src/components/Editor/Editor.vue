<template>
  <div class="editor">
    <input type="date" v-model="date">
    <inputter
      title="内容の要約" v-model="summary"
      v-on:input="changed"
    ></inputter>
    <inputter
      title="筆者の意図" v-model="intention"
      v-on:input="changed"
    ></inputter>
    <inputter
      title="自分の意見" v-model="opinion"
      v-on:input="changed"
    ></inputter>
    <button v-on:click="addReport()">追加</button>
  </div>
</template>

<script>
import Inputter from '@/components/Editor/Inputter';

function formatDate (date) {
  const d = new Date(date);
  let month = String(d.getMonth() + 1);
  let day = String(d.getDate());
  let year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  // eslint-disable-next-line
  return [year, month, day].join('-');
}

export default {
  name: 'Editor',
  props: [
    'editing',
  ],
  data () {
    return {
      date: formatDate(new Date()),
      summary: this.editing.summary,
      intention: this.editing.intention,
      opinion: this.editing.opinion,
    };
  },
  methods: {
    addReport () {
      this.$emit('add', {
        date: this.date,
        summary: this.summary,
        intention: this.intention,
        opinion: this.opinion,
      });
    },
    changed () {
      this.$emit('changed', {
        date: this.date,
        summary: this.summary,
        intention: this.intention,
        opinion: this.opinion,
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
