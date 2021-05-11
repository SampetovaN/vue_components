<template>
  <Navigation />
  <main>
    <RangeComponent :rangeValue="value" />
  </main>
</template>

<script>
import Navigation from "@/components/Navigation";
import RangeComponent from "@/components/RangeComponent";
export default {
  name: "Range",
  data() {
    return {
      value: "34.5"
    };
  },
  components: { Navigation, RangeComponent }
};
</script>
