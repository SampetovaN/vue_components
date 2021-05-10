<template>
  <div class="range">
    <div class="range__wrapper">
      <div class="range__field-block">
        <div class="range__field-info">
          <div class="range__field-total">
            <div class="range__value">{{ value }}</div>
          </div>
        </div>
        <div class="range__field">
          <div class="range__input">
            <div class="range__range">
              <div
                class="data"
                :data-value="value"
                data-step-value="1"
                data-max-value="100%"
              ></div>
            </div>
            <div class="range__pin" :style="{ left: valueLeft }"></div>
          </div>
        </div>
      </div>
      <ul class="range__buttons" @click="changeValue">
        <li><button type="button" data-percentage="25%">25%</button></li>
        <li><button type="button" data-percentage="50%">50%</button></li>
        <li><button type="button" data-percentage="75%">75%</button></li>
        <li><button type="button" data-percentage="100%">100%</button></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Range",
  data() {
    return {
      value: "34.5%",
      valueInPx: null
    };
  },
  methods: {
    changeValue(evt) {
      let button = evt.target;
      if (button.tagName === "BUTTON") {
        this.value = button.dataset.percentage;
      }
    }
  },
  computed: {
    valueLeft() {
      return `max(0px, calc(${this.value} - 27px))`;
    }
  }
};
</script>
