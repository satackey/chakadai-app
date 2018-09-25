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
      v-bind:style="progress"
    ></span>
    <span
      class="above-gradient"
      v-bind:style="progress"
    ></span>
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
    progress () {
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
    display: inline-block;
    width: 100%;
    height: 5px;
    position: relative;
    z-index: 0;
  }

  .below {
    background-color: var(--progress-below-color)
  }

  .base-below {
    display: inline-block;
    width: calc((100% - 45px) * 0.25);
    height: 100%;
    background-color: var(--progress-below-light-color);
    position: absolute;
    z-index: 0;
  }

  .base-satisfied {
    display: inline-block;
    width: calc((100% - 45px) * 0.75);
    height: 100%;
    background-color: var(--progress-satisfied-light-color);
    position: absolute;
    left: calc((100% - 45px) * 0.25);
    z-index: 0;
  }

  .satisfied {
    background-color: var(--progress-satisfied-color);
  }

  .above {
    background-color: var(--progress-above-color);
  }

  .main {
    display: inline-block;
    width: calc((100% - 45px) * var(--progress));
    max-width: calc(100% - 45px);
    height: 100%;
    position: absolute;
    z-index: 1;
  }

  .above-gradient {
    position: absolute;
    left: calc(100% - 45px);

    display: inline-block;
    width: calc((100% - 45px) * (var(--progress) - 1));
    max-width: 45px;
    height: 100%;

    background: linear-gradient(to right, var(--progress-above-color), transparent);
    z-index: 1;
  }
</style>
