<template>
  <div>
    <editor
      v-bind:editing="getEditingReport"
      v-on:changed="saveEditingReport"
      v-on:add="addReport($event)"
    ></editor>
    <viewer v-bind:reports="reports"></viewer>
  </div>
</template>

<style scoped>

</style>

<script>
import Editor from '@/components/Editor/Editor';
import Viewer from '@/components/Viewer/Viewer';

if (typeof sessionStorage === 'undefined') {
  window.alert('このブラウザでは使えません!');
}

if (localStorage.getItem('chakadaiApp-reports') === null) {
  localStorage.setItem('chakadaiApp-reports', '[]');
}

if (localStorage.getItem('chakadaiApp-editing') === null) {
  localStorage.setItem('chakadaiApp-editing', JSON.stringify({
    date: '',
    summary: '',
    intention: '',
    opinion: '',
  }));
}

function randStr (len) {
  // https://qiita.com/ryounagaoka/items/4736c225bdd86a74d59c
  // 生成する文字列の長さ
  const l = len;
  // 生成する文字列に含める文字セット
  const c = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const cl = c.length;
  let r = '';
  for (let i = 0; i < l; i++) {
    r += c[Math.floor(Math.random() * cl)];
  }
  return r;
}

export default {
  name: 'Root',
  data () {
    return {
      reports: JSON.parse(localStorage.getItem('chakadaiApp-reports')),
    };
  },
  methods: {
    addReport (report) {
      report.id = randStr(8);
      const reports = JSON.parse(localStorage.getItem('chakadaiApp-reports'));
      reports.push(report);
      localStorage.setItem('chakadaiApp-reports', JSON.stringify(reports));

      this.reports.push(report);
    },
    saveEditingReport (report) {
      report.id = randStr(8);
      localStorage.setItem('chakadaiApp-editing', JSON.stringify(report));
    },
  },
  computed: {
    getEditingReport () {
      return JSON.parse(localStorage.getItem('chakadaiApp-editing'));
    },
  },
  components: {
    Editor,
    Viewer,
  },
};
</script>
