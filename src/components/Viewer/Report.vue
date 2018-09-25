<template>
  <div>
    <div class="date">
      {{ report.date }}
    </div>
    <div
      class="paragraphs"
      v-for="paragraph in paragraphs"
      v-bind:key="paragraph.label"
    >
      <div class="info">
        <div class="label">
          {{ paragraph.label }}
        </div>
        <div class="details">
          <content-progress
            class="content-progress"
            v-bind:value="paragraph.content.length"
          ></content-progress>
          <div class="count">
            {{ paragraph.content.length }}
          </div>
        </div>
      </div>
      <div
        class="content"
        v-text="paragraph.content"
      >
        <!-- {{ paragraph.content }} -->
      </div>
    </div>
  </div>
</template>

<script>
import ContentProgress from '@/components/Common/ContentProgress';

export default {
  name: 'Report',
  props: [
    'report',
  ],
  data () {
    return {

    };
  },
  computed: {
    paragraphs () {
      return [
        {
          label: '内容の要約',
          content: this.report.summary,
        },
        {
          label: '筆者の意図',
          content: this.report.intention,
        },
        {
          label: '自分の意見',
          content: this.report.opinion,
        },
      ];
    },
  },
  components: {
    ContentProgress,
  },
};
</script>

<style scoped>
  .date, .label {
    color: #616161;
  }
  .info {
    position: relative;
    height: 25px;
  }

  .label {
    display: block;
    position: absolute;
    width: 90px;
    height: 100%;
  }

  .details {
    display: block;
    position: absolute;
    width: calc(100% - 90px);
    height: 100%;
    right: 0;
  }

  .content-progress {
    margin-top: auto;
    margin-bottom: auto;
    z-index: 0;
  }

  .count {
    position: absolute;
    margin-right: 0;
    margin-left: auto;
    display: block;
    width: 45px;
    top: 0;
    right: 0;
    text-align: right;
    z-index: 1;
  }

  .content {
    position: relative;
    width: calc(100% - 30px);
    top: 0;
    left: 20px;
    height: auto;
    word-wrap: break-word;
    white-space: pre-wrap;
  }
</style>
