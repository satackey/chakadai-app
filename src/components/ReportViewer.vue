<template>
  <div class="report-viewer">
    <content-block
      v-for="report in reversedReports"
      v-bind:key="report.id"
      v-bind:report="report"
    ></content-block>
    <!-- <div
      class="previous-report"
      v-for="report in reversedReports"
      v-bind:key="report.id"
    >
      <div class="report-date">
        {{ report.date }}
      </div>
      <div class="report-summary">
        {{ report.summary }}
      </div>
      <div class="report-intention">
        {{ report.intention }}
      </div>
      <div class="report-opinion">
        {{ report.opinion }}
      </div>
    </div> -->
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
