<template>
  <q-layout view="lHh Lpr lFf" style="overflow-x: auto; position: relative">
    <q-toolbar class="custom-toolbar">
      <q-toolbar-title>Sumit Joshi</q-toolbar-title>
      <q-btn
        flat
        label="Edu."
        :class="{ active: activeSection === 'eduSection' }"
        @click="scrollTo('eduSection')"
        class="q-ml-md"
      />
      <q-btn
        flat
        label="Experience"
        :class="{ active: activeSection === 'expSection' }"
        @click="scrollTo('expSection')"
        class="q-ml-md"
      />
      <q-btn
        flat
        label="Projects"
        :class="{ active: activeSection === 'projectSection' }"
        @click="scrollTo('projectSection')"
        class="q-ml-md"
      />
      <q-btn
        flat
        label="Skills"
        :class="{ active: activeSection === 'skillsSection' }"
        @click="scrollTo('skillsSection')"
        class="q-ml-md"
      />
      <q-btn flat label="Resume" class="q-ml-md" @click="openResume">
        <font-awesome-icon
          icon="fa-solid fa-up-right-from-square"
          class="q-ml-xs"
        />
      </q-btn>
    </q-toolbar>

    <div class="intro-box" :style="{ zIndex: introZIndex }">
      <h2>Sumit Joshi, <span class="dynamic-text"></span></h2>
      <p>
        Passionate about building efficient solutions, leveraging my skills in
        development, problem solving, and innovation. I thrive on challenges and
        love creating impactful user experiences.
      </p>
      <!-- Socials -->
      <!-- Socials -->
      <div class="socials">
        <a
          href="mailto:sumit@example.com"
          class="icon mail"
          target="_blank"
          aria-label="Email"
        >
          <font-awesome-icon icon="fa-solid fa-envelope" />
        </a>
        <a
          href="https://linkedin.com/in/sumit"
          class="icon linkedin"
          target="_blank"
          aria-label="LinkedIn"
        >
          <font-awesome-icon icon="fa-brands fa-linkedin" />
        </a>
        <a
          href="https://github.com/sumit"
          class="icon github"
          target="_blank"
          aria-label="GitHub"
        >
          <font-awesome-icon icon="fa-brands fa-github" />
        </a>
        <a
          href="https://x.com/sumit"
          class="icon x"
          target="_blank"
          aria-label="Twitter"
        >
          <font-awesome-icon icon="fa-brands fa-twitter" />
        </a>
      </div>
    </div>

    <!-- Scroll Down Indicator -->
    <div class="scroll-arrow">
      <div class="arrow"><font-awesome-icon icon="angle-up" /></div>
      <div class="arrow"><font-awesome-icon icon="angle-up" /></div>
      <div class="arrow"><font-awesome-icon icon="angle-up" /></div>
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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAngleUp,
  faEnvelope,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';

import IconBg from 'src/components/IconBg.vue';
import { ref } from 'vue';

const introZIndex = ref(8); // Default z-index for the intro-box
const isScrolling = ref(false);

// Function to update z-index based on scroll position
const updateZIndexOnScroll = () => {
  const scrollPosition = window.scrollY;

  // Adjust intro-box z-index based on scroll position
  if (scrollPosition === 0) {
    introZIndex.value = 8; // At the top, keep intro-box prominent
  } else {
    introZIndex.value = 5; // Lower the z-index when scrolling down
  }
};

// Listen for toolbar button clicks to lower z-index immediately
const toolbarButtonClicked = () => {
  introZIndex.value = 5;
  isScrolling.value = false;
};

// Attach and detach scroll listener
onMounted(() => {
  window.addEventListener('scroll', updateZIndexOnScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', updateZIndexOnScroll);
});

// Add the icon to the library
library.add(
  faUpRightFromSquare,
  faAngleUp,
  faEnvelope,
  faLinkedin,
  faGithub,
  faTwitter
);
defineOptions({
  name: 'MainLayout',
});

import { onMounted, onUnmounted } from 'vue';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
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

const activeSection = ref('eduSection'); // Default active section
// Function to update the active section on scroll
const updateActiveSection = () => {
  const sections = [
    'eduSection',
    'expSection',
    'projectSection',
    'skillsSection',
  ];
  const scrollPosition = window.scrollY + 110; // Adjust for 100px offset + buffer
  for (const section of sections) {
    const element = document.getElementById(section);
    if (
      element &&
      scrollPosition >= element.offsetTop &&
      scrollPosition < element.offsetTop + element.offsetHeight
    ) {
      activeSection.value = section;
      break;
    }
  }
};

// Attach and detach the scroll listener
onMounted(() => {
  window.addEventListener('scroll', updateActiveSection);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection);
});

// Function to scroll to specific sections
const scrollTo = (section: string) => {
  const target = document.getElementById(section);
  if (target) {
    const offset = 100; // Adjust this value to add a margin
    const topPosition = target.offsetTop - offset;

    // Lower z-index when navigating via toolbar button
    toolbarButtonClicked();

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

const openResume = () => {
  window.open(
    'https://drive.google.com/file/d/1xpWDG0V8L1i56mnAs_azjYug_Y72WpHC/view?usp=sharing',
    '_blank'
  );
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
  background: rgba(51, 184, 255, 0.54); /* Light, semi-transparent background */
  backdrop-filter: blur(10px); /* Apply blur effect to the background */
  color: black; /* Text color */
  padding: 10px;
}

.q-btn {
  color: white; /* Button text color */
}

.q-btn.active {
  font-weight: bold; /* Emphasize active button */
  border-bottom: solid rgb(36, 254, 221) 5px;
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
  transition: z-index 0.3s ease;
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

/* Scroll Arrow */
.scroll-arrow {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  animation: fadeInOut 2s ease-in-out infinite;
  z-index: 1;
}

.scroll-arrow .arrow {
  font-size: 24px;
  color: rgba(255, 255, 255, 0.797);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  animation: rippleGlow 2s infinite ease-in-out;
  z-index: 9999;
}

.scroll-arrow .arrow:nth-child(1) {
  animation-delay: 0s;
}

.scroll-arrow .arrow:nth-child(2) {
  animation-delay: 0.3s;
}

.scroll-arrow .arrow:nth-child(3) {
  animation-delay: 0.6s;
}

/* Animations */
@keyframes rippleGlow {
  0%,
  100% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.socials {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px; /* Spacing between icons */
}

.socials .icon {
  font-size: 24px; /* Adjust icon size */
  color: #ffffff; /* Default icon color */
  text-decoration: none; /* Remove underline */
  transition: transform 0.3s ease, color 0.3s ease;
}

.socials .icon:hover {
  transform: scale(1.2); /* Slightly enlarge icon on hover */
  color: #f0a500; /* Change color on hover */
}

.icon.mail:hover {
  color: #ff4b4b; /* Specific color for email */
}

.icon.linkedin:hover {
  color: #0077b5; /* LinkedIn blue */
}

.icon.github:hover {
  color: #000000; /* GitHub black */
}

.icon.x:hover {
  color: #1da1f2; /* Twitter/X blue */
}
</style>
