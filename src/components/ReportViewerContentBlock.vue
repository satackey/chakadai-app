<template>
  <div>
      <div class="report-date">
        {{ report.date }}
      </div>
      <div class="report-summary">
        <content-progress v-bind:value="report.summary.length"></content-progress>
        {{ report.summary }}
      </div>
      <div class="report-intention">
        <content-progress v-bind:value="report.intention.length"></content-progress>
        {{ report.intention }}
      </div>
      <div class="report-opinion">
        <content-progress v-bind:value="report.opinion.length"></content-progress>
        {{ report.opinion }}
      </div>
  </div>
</template>

<script>
import ContentProgress from '@/components/ContentProgress';

export default {
  name: 'ReportViewerReportBlock',
  props: [
    'report',
  ],
  data () {
    return {

    };
  },
  components: {
    ContentProgress,
  },
};
</script>
