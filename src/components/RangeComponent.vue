<template>
  <div class="range">
    <div class="range__wrapper">
      <div class="range__field-block">
        <div class="range__field-info">
          <div class="range__field-total">
            <div class="range__value">{{ value }}%</div>
          </div>
        </div>
        <div class="range__field" ref="container">
          <div
            class="range__input"
            :data-value="value"
            :data-step="step"
            :data-min-value="minValue"
            :data-max-value="maxValue"
            tabindex="0"
            role="slider"
            @mousedown="sliderClick"
            @keydown.left.prevent="decrement"
            @keydown.right.prevent="increment"
            ref="slider"
            aria-label="Cлайдер"
          >
            <div
              class="range__pin"
              ref="pin"
              aria-label="Указатель слайдера"
            ></div>
          </div>
        </div>
      </div>
      <ul class="range__buttons" @click="changeValue">
        <li v-for="(val, index) in buttonValues" :key="index">
          <button type="button" :data-percentage="val">{{ val }}%</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Draggabilly from "draggabilly";

export default {
  name: "RangeComponent",
  props: {
    rangeValue: {
      type: String,
      default() {
        return "";
      }
    }
  },
  data() {
    return {
      value: this.rangeValue,
      step: 0.5,
      maxValue: 100,
      minValue: 0,
      buttonValues: [25, 50, 75, 100]
    };
  },
  methods: {
    changeValue(evt) {
      let button = evt.target;
      if (button.tagName === "BUTTON") {
        this.value = button.dataset.percentage;
        this.getValueLeft();
      }
    },
    roundValue(value, step = 0.5) {
      step || (step = 1.0);
      let inv = 1.0 / step;
      return Math.round(value * inv) / inv;
    },
    sliderClick(evt) {
      let sliderPosition = this.$refs.slider.getBoundingClientRect();

      let newValue =
        ((evt.clientX - sliderPosition.left) / sliderPosition.width) * 100;

      this.setValue(newValue, true);
      this.$refs.slider.focus();
    },
    setValue(newValue, isChangeValue) {
      if (newValue === this.value) {
        return;
      }
      this.value = this.roundValue(newValue);
      if (isChangeValue) {
        this.getValueLeft();
      }
    },
    dragMove(evt) {
      let sliderPosition = this.$refs.slider.getBoundingClientRect();
      let newValue = Math.max(
        0,
        Math.min(
          ((evt.clientX - sliderPosition.left) / sliderPosition.width) * 100,
          100
        )
      );
      this.setValue(newValue, false);
    },
    increment() {
      if (this.value === 100) {
        return;
      }
      this.setValue(this.value + this.step, true);
    },

    decrement() {
      if (this.value === 0) {
        return;
      }

      this.setValue(this.value - this.step, true);
    },
    setDraggally() {
      this.draggable = new Draggabilly(this.$refs.pin, {
        containment: this.$refs.container,
        axis: "x"
      });
      this.draggable.on("dragMove", this.dragMove);
    },
    getValueLeft() {
      this.$refs.pin.style.left = `max(0px, calc(${this.value}% - 27px))`;
    },
    onResize() {
      this.getValueLeft();
    }
  },

  mounted() {
    this.setDraggally();
    this.getValueLeft();
    window.addEventListener("resize", this.onResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  }
};
</script>
