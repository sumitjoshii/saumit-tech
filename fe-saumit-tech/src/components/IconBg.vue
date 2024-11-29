<template>
  <div class="icon-matrix">
    <div class="icon-grid">
      <font-awesome-icon
        v-for="(icon, index) in repeatedIcons"
        :key="index"
        :icon="icon"
        class="icon"
      />
    </div>
  </div>
</template>

<script setup>
import {
  faPython,
  faJs,
  faVuejs,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// List of icons to be used in the grid
const icons = [faPython, faJs, faVuejs, faNodeJs, faReact];

// Create a repeated list of icons to fill the grid
const repeatedIcons = Array.from(
  { length: 400 },
  (_, i) => icons[i % icons.length]
);
</script>

<style scoped>
.icon-matrix {
  z-index: -1;
  background-color: #0a192f; /* Deep dark blue */
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-grid {
  position: fixed;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(100px, 1fr)
  ); /* Define the grid layout */
  grid-auto-rows: 120px;
  gap: 20px;

  /* Make the grid large enough to cover the viewport when rotated */
  width: 200vw;
  height: 200vh;

  /* Rotate the grid */
  transform: rotate(45deg);
  position: absolute;
}

.icon {
  font-size: 1.5rem; /* Icon size */
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-45deg);
}
</style>
