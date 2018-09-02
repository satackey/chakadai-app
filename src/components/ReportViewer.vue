<template>
  <div class="Report-viewer">
    <div
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
    </div>
  </div>
</template>

<script>
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
};
</script>

<style scoped>

</style>
