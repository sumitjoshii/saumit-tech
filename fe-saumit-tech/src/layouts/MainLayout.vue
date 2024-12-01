<template>
  <q-layout view="lHh Lpr lFf" style="overflow-x: auto; position: relative">
    <q-toolbar class="custom-toolbar">
      <q-btn
        flat
        class="q-toolbar-title-btn"
        :class="{ active: activeSection === 'top' }"
        @click="scrollToTop"
      >
        <q-toolbar-title>Sumit Joshi</q-toolbar-title>
      </q-btn>
      <!-- Header Button -->
      <div class="header-buttons">
        <q-btn
          flat
          label="Education"
          :class="{ active: activeSection === 'eduSection' }"
          @click="scrollTo('eduSection')"
          class="section-button"
        />
        <q-btn
          flat
          label="Experience"
          :class="{ active: activeSection === 'expSection' }"
          @click="scrollTo('expSection')"
          class="section-button"
        />

        <q-btn
          flat
          label="Skills"
          :class="{ active: activeSection === 'skillsSection' }"
          @click="scrollTo('skillsSection')"
          class="section-button"
        />
        <q-btn
          flat
          label="Projects"
          :class="{ active: activeSection === 'projectSection' }"
          @click="scrollTo('projectSection')"
          class="section-button"
        />
        <q-btn
          flat
          label="Resume"
          @click="openResume"
          class="section-button"
          style="align-items: center"
        >
          <font-awesome-icon
            class="q-pa-xs"
            icon="fa-solid fa-up-right-from-square"
          />
        </q-btn>
      </div>
    </q-toolbar>

    <div class="intro-box" :style="{ zIndex: introZIndex }">
      <h2 class="name">Sumit Joshi, <span class="dynamic-text"></span></h2>
      <p class="virtues">
        Passionate about building efficient solutions, leveraging my skills in
        development, problem solving, and innovation. I thrive on challenges and
        love creating impactful user experiences.
      </p>
      <!-- Socials -->
      <div class="socials">
        <a
          href="mailto:sumit.jsvp@gmail.com"
          class="icon mail"
          target="_blank"
          aria-label="Email"
        >
          <font-awesome-icon icon="fa-solid fa-envelope" />
        </a>
        <a
          href="https://www.linkedin.com/in/sumit-joshi1/"
          class="icon linkedin"
          target="_blank"
          aria-label="LinkedIn"
        >
          <font-awesome-icon icon="fa-brands fa-linkedin" />
        </a>
        <a
          href="https://github.com/SumitJoshii"
          class="icon github"
          target="_blank"
          aria-label="GitHub"
        >
          <font-awesome-icon icon="fa-brands fa-github" />
        </a>
        <a
          href="https://x.com/sumitjoshiix"
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
  } else if (scrollPosition > 10 && scrollPosition < 600) {
    introZIndex.value = 5; // Lower the z-index when scrolling down
  } else if (scrollPosition > 600) {
    introZIndex.value = 0; // Lower the z-index when scrolling down
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

const activeSection = ref('top'); // Default active section
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  console.log('Scrolled to top');
};
// Function to update the active section on scroll
const updateActiveSection = () => {
  const sections = [
    'top',
    'eduSection',
    'expSection',
    'projectSection',
    'skillsSection',
  ];
  const scrollPosition = window.scrollY + 150; // Adjust for 100px offset + buffer
  for (const section of sections) {
    const element = document.getElementById(section);
    if (window.scrollY <= 120) {
      activeSection.value = 'top';
      console.log('Top active!');
    }
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
  border-bottom: solid rgb(188, 254, 244) 5px;
}

.q-toolbar__title {
  color: aliceblue;
  padding: 10px;
}

.header-buttons {
  display: flex;
  align-items: center;
  margin-left: auto;
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
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px; /* Spacing between icons */
}

.socials .icon {
  font-size: 30px; /* Adjust icon size */
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

/* Mobile UI */
@media (max-width: 980px) {
  .custom-toolbar {
    width: 100%; /* Make toolbar narrower */
    margin-top: 5px;
    padding: 8px; /* Adjust padding */
    font-size: 0.9rem; /* Reduce font size */
  }

  .intro-box {
    top: 20%; /* Adjust positioning for smaller screens */
    width: 85%; /* Increase width to fit mobile screens */
    padding: 30px; /* Reduce padding */
    font-size: 1rem; /* Reduce font size */
  }

  .scroll-arrow .arrow {
    font-size: 20px; /* Adjust arrow size */
  }

  .socials {
    gap: 15px; /* Reduce spacing between icons */
  }

  .socials .icon {
    font-size: 25px; /* Adjust icon size */
  }

  .fixbg {
    background-size: cover; /* Ensure background scales properly */
  }
}

@media (max-width: 800px) {
  .section-button {
    font-size: 12px;
    padding: 0;
    margin-left: 25px;
  }
  .q-toolbar__title {
    font-size: 15px;
    padding: 0;
  }
}

@media (max-width: 570px) {
  .section-button {
    font-size: 12px;
    padding: 0;
    margin-left: 10px;
  }

  .name {
    font-size: 25px;
  }
}

@media (max-width: 490px) {
  .q-toolbar__title {
    font-size: 15px;
    padding: 2px;
  }

  .q-btn.q-toolbar-title-btn {
    padding: 0px; /* Remove padding */
  }
  .section-button {
    font-size: 9px;
    padding: 0;
    width: fit-content;
  }

  .header-buttons {
    margin-left: auto;
  }
  .intro-box {
    width: 90%;
  }
  .name {
    font-size: 25px;
    position: absolute;
    font-weight: bold;
  }

  .virtues {
    padding-top: 90px;
    font-size: 22px;
  }
}

@media (max-width: 390px) {
  .q-toolbar__title {
    font-size: 10px;
    padding: 2px;
  }

  .name {
    font-size: 25px;
    line-height: normal;
    position: absolute;
  }

  .virtues {
    font-size: 18px;
    padding-top: 90px;
  }
}
</style>
