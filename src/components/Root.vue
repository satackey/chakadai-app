<template>
  <div>
    <editor v-on:add="addReport($event)"></editor>
    <report-viewer v-bind:reports="reports"></report-viewer>
  </div>
</template>

<style scoped>

</style>

<script>
import Editor from '@/components/editor';
import ReportViewer from '@/components/ReportViewer';

if (typeof sessionStorage === 'undefined') {
  window.alert('このブラウザでは使えません!');
}

if (localStorage.getItem('chakadaiApp-reports') === null) {
  localStorage.setItem('chakadaiApp-reports', '[]');
}

if (localStorage.getItem('chakadaiApp-editing') === null) {
  localStorage.setItem('chakadaiApp-editing', '{}');
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
  },
  components: {
    Editor,
    ReportViewer,
  },
};
</script>
