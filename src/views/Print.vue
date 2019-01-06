<template>
  <div>
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
