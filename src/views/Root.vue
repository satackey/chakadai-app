<template>
  <div>
    <editor
      v-bind:value="this.editingReport"
      v-on:changed="saveEditingReport"
      v-on:add="addReport()"
    ></editor>
    <downloader
      v-bind:reports="reports"
    ></downloader>
    <br>
    <router-link to="/print">印刷</router-link>
    <viewer v-bind:reports="reports"></viewer>
  </div>
</template>

<style scoped>

</style>

<script>
import Editor from '@/components/Editor/Editor';
import Downloader from '@/components/Downloader/Downloader';
import Viewer from '@/components/Viewer/Viewer';

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

if (typeof sessionStorage === 'undefined') {
  window.alert('このブラウザでは使えません!');
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
      editingReport: {
        date: formatDate(new Date()),
        summary: '',
        intention: '',
        opinion: '',
      },
      reports: []
    };
  },
  methods: {
    addReport () {
      this.reports.push({
        ...this.editingReport,
        ...{ id: randStr(8) }
      });
      this.editingReport = {
        date: formatDate(new Date()),
        summary: '',
        intention: '',
        opinion: '',
      };
    },
    saveEditingReport (report) {
      this.editingReport = report;
    },
  },
  mounted () {
    this.editingReport = {
      ...this.editingReport,
      ...JSON.parse(localStorage.getItem('chakadaiApp-editing'))
    }
    this.reports = JSON.parse(localStorage.getItem('chakadaiApp-reports')) || [];
  },
  watch: {
    editingReport (report) {
      localStorage.setItem('chakadaiApp-editing', JSON.stringify(report));
    },
    reports (reports) {
      localStorage.setItem('chakadaiApp-reports', JSON.stringify(reports));
    }
  },
  components: {
    Editor,
    Downloader,
    Viewer,
  },
};
</script>
