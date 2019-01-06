<template>
  <div class="report-viewer">
    <report
      class="report"
      v-for="report in reversedReports"
      v-bind:key="report.id"
      v-bind:report="report"
      v-bind:showDetails="showDetails"
    ></report>
  </div>
</template>

<script>
import Report from '@/components/Viewer/Report';

export default {
  name: 'Viewer',
  props: [
    'reports',
    'showDetails'
  ],
  computed: {
    reversedReports () {
      return this.reports.slice().reverse();
    },
  },
  components: {
    Report,
  },
};
</script>

<style scoped>
  .report {
    margin: 5px;
    background-color: var(--viewer-report-block-bg-color);
    padding:  15px;
  }
</style>
