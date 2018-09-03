<template>
  <div class="report-viewer">
    <content-block
      v-for="report in reversedReports"
      v-bind:key="report.id"
      v-bind:report="report"
    ></content-block>
  </div>
</template>

<script>
import ContentBlock from '@/components/ReportViewerContentBlock';
export default {
  name: 'ReportViewer',
  props: [
    'reports',
  ],
  computed: {
    reversedReports () {
      return this.reports.slice().reverse();
    },
  },
  components: {
    ContentBlock,
  },
};
</script>

<style scoped>

</style>
