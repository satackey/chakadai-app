<template>
  <div class="progress">
    <span class="base-below"></span>
    <span class="base-satisfied"></span>
    <span
      class="main"
      v-bind:class="{
        'below': isBelow,
        'satisfied': isSatisfied,
        'above': isAbove
      }"
      v-bind:style="mainStyle"
    ></span>
    <span class="gradient"></span>
  </div>
</template>

<script>
export default {
  name: 'ContentProgress',
  props: [
    'value',
  ],
  data () {
    return {
    };
  },
  computed: {
    mainStyle () {
      return {
        '--progress': this.value / 200,
      };
    },
    isBelow () {
      return this.value < 50;
    },
    isSatisfied () {
      // eslint-disable-next-line
      return 50 <= this.value && this.value <= 200;
    },
    isAbove () {
      // eslint-disable-next-line
      return 200 < this.value;
    },
  },
};
</script>

<style scoped>
  .progress {
    display: block;
    width: 100%;
    height: 5px;
    margin: 10px 5px;
    position: relative;
  }

  .below {
    background-color: var(--progress-below-color)
  }

  .base-below {
    display: inline-block;
    width: calc((100% - 45px) * 0.25);
    height: var(--progress-height);
    background-color: var(--progress-below-light-color);
    position: absolute;
    z-index: 0;
  }

  .base-satisfied {
    display: inline-block;
    width: calc((100% - 45px) * 0.75);
    height: var(--progress-height);
    background-color: var(--progress-satisfied-light-color);
    position: absolute;
    left: calc((100% - 45px) * 0.25);
    z-index: 0;
  }

  .satisfied {
    background-color: var(--progress-satisfied-color);
  }

  .above {
    background: var(--progress-above-color);
  }

  .main {
    display: inline-block;
    width: calc((100% - 45px) * var(--progress));
    max-width: 100%;
    height: var(--progress-height);
    position: absolute;
    z-index: 1;
  }

  .gradient {
    display: inline-block;
    width: 45px;
    height: var(--progress-height);
    background: linear-gradient(to right, transparent, #ffffff);
    position: absolute;
    left: calc(100% - 45px);;
    z-index: 2;
  }
</style>
