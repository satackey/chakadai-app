<template>
  <a
    v-bind:href="fileURL"
    v-bind:download="filename"
  >バックアップをダウンロード</a>
</template>

<script>
export default {
  name: 'Root',
  props: [
    'reports',
  ],
  methods: {
  },
  computed: {
    fileURL () {
      return window.URL.createObjectURL(
        new Blob(
          [
            JSON.stringify(this.reports),
          ],
          {
            type: 'application/json',
          }
        )
      );
    },
    filename () {
      return `chakadai-app_backup-${new Date().toISOString()}.json`;
    },
  },
};
</script>

<style scoped>

</style>
