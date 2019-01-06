<template>
  <div>
    <div v-if="isReportEmpty">何もありません</div>
    <viewer
      v-bind:reports="reports"
      v-bind:showDetails="false"></viewer>
  </div>
</template>

<script>
import Viewer from '@/components/Viewer/Viewer'

export default {
  name: 'Root',
  data () {
    return {
      reports: []
    }
  },
  mounted () {
    this.reports = JSON.parse(localStorage.getItem('chakadaiApp-reports')) || []
  },
  computed: {
    isReportEmpty () {
      return this.reports.length === 0
    }
  },
  watch: {
    reports (reports) {
      localStorage.setItem('chakadaiApp-reports', JSON.stringify(reports))
    }
  },
  components: {
    Viewer
  }
}
</script>
