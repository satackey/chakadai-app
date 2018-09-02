<template>
  <div class="input-block">
    <div class="label">{{ title }}</div>
    <content-progress v-bind:value="value.length"></content-progress>
    <textarea
      class="input"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    ></textarea>
    <span
      class="count"
      v-bind:class="{
        'length-below': isBelow,
        'length-satisfied': isSatisfied,
        'length-above': isAbove,
      }"
    >{{ value.length }}</span>
  </div>
</template>

<script>
import ContentProgress from '@/components/ContentProgress';

export default {
  name: 'EditorInputBlock',
  props: [
    'title',
    'value',
  ],
  data () {
    return {

    };
  },
  methods: {
  },
  computed: {
    isBelow () {
      return this.value.length < 50;
    },
    isSatisfied () {
      // eslint-disable-next-line
      return 50 <= this.value.length && this.value.length <= 200;
    },
    isAbove () {
      // eslint-disable-next-line
      return 200 < this.value.length;
    },
  },
  components: {
    ContentProgress,
  },
};
</script>

<style scoped>
  .label {
    position: relative;
  }

  .input {
    resize: vertical;
    position: relative;
    width: calc(100% - 45px);
    height: 60px;
    display: inline-block;
  }

  .count {
    position: relative;
    left: 0px;
    display: inline-block;
    width: 30px;
  }

  .length-below {
    color: var(--progress-below-color);
  }

  .length-satisfied {
    color: var(--progress-satisfied-color);
  }

  .length-above {
    color: var(--progress-above-color);
  }
</style>
