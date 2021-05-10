<template>
  <Navigation />
  <main>
    <RangeComponent />
  </main>
</template>

<script>
import Navigation from "@/components/Navigation";
import RangeComponent from "@/components/RangeComponent";
export default {
  name: "Range",
  components: { Navigation, RangeComponent }
};
</script>
