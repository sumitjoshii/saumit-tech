<template>
  <q-layout view="lHh Lpr lFf" style="overflow-x: auto; position: relative">
    <q-toolbar class="custom-toolbar">
      <q-toolbar-title>Sumit Joshi</q-toolbar-title>
      <q-btn
        flat
        label="About"
        @click="scrollTo('aboutSection')"
        class="q-ml-md"
      />
      <q-btn
        flat
        label="Projects"
        @click="scrollTo('projectSection')"
        class="q-ml-md"
      />
      <q-btn
        flat
        label="Skills"
        @click="scrollTo('skillsSection')"
        class="q-ml-md"
      />
    </q-toolbar>

    <div class="intro-box">
      <h2>Sumit Joshi, <span class="dynamic-text"></span></h2>
      <p>
        Passionate about building efficient solutions, leveraging my skills in
        development, problem solving, and innovation. I thrive on challenges and
        love creating impactful user experiences.
      </p>
    </div>
    <div class="fixbg">
      <IconBg />
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import IconBg from 'src/components/IconBg.vue';

defineOptions({
  name: 'MainLayout',
});

import { onMounted } from 'vue';
onMounted(() => {
  const words = [
    'Developer',
    'Creator',
    'Problem Solver',
    'Tech Enthusiast',
    'Innovator',
  ];
  let i = 0;
  const dynamicTextElement = document.querySelector(
    '.dynamic-text'
  ) as HTMLElement;

  setInterval(() => {
    dynamicTextElement.textContent = words[i];
    i = (i + 1) % words.length;
  }, 2000); // Change word every 2 seconds
});

// Function to scroll to specific sections
const scrollTo = (section: string) => {
  const target = document.getElementById(section);
  if (target) {
    const offset = -600; // Adjust this value to add a margin
    const topPosition = target.offsetTop - offset;

    // Smoothly scroll to the adjusted position
    window.scrollTo({
      top: topPosition,
      behavior: 'smooth',
    });
  } else {
    console.error(`Section with ID '${section}' not found.`);
  }
  console.log(section, ' clicked!');
};
</script>

<style scoped>
.custom-toolbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  width: 80%;
  border-radius: 10px;
  margin: auto;
  margin-top: 10px;
  background: rgba(97, 140, 249, 0.31); /* Light, semi-transparent background */
  backdrop-filter: blur(10px); /* Apply blur effect to the background */
  color: black; /* Text color */
  padding: 10px;
}

.q-btn {
  color: white; /* Button text color */
}

.q-toolbar__title {
  color: aliceblue;
  padding: 10px;
}

.intro-box {
  position: fixed; /* Position it over the content */
  top: 25%; /* Adjust top to make sure it’s not hidden behind toolbar */
  left: 50%;
  transform: translateX(-50%); /* Center horizontally */
  width: 60%;
  max-width: 900px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.2); /* Transparent with light background */
  backdrop-filter: blur(10px); /* Apply blur effect to the background */
  border-radius: 12px;
  color: white;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  font-size: 1.2rem;
  z-index: 5; /* Ensure it stays above background components like IconBg */
}

/* Dynamic text animation */
.dynamic-text {
  font-weight: bold;
  color: #f0a500; /* Highlight color for the dynamic word */
  animation: fadeInOut 2s ease-in-out infinite;
}

/* Animation to change text */
@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.fixbg {
  position: fixed;
}
</style>
