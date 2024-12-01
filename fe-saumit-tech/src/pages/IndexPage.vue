<template>
  <q-page>
    <div class="scroll-div">
      <div class="inner-div" id="eduSection">
        <div class="education">
          <div class="timeline-edu">
            <q-img class="edu-image" src="../assets/images/diploma.png"></q-img>
            <div class="line-edu"></div>
            <q-img class="edu-image" src="../assets/images/degree.png"></q-img>
          </div>
          <div class="institutes">
            <div class="diploma">
              <div class="school">VPM Polytechnic</div>
              <div class="university">Mumbai university</div>
              <div class="specialization">Diploma in Computer Engineering</div>
              <div class="result">80%</div>
              <div class="year">2015 - 2017</div>
            </div>
            <div class="college">
              <div class="school">Thakur College</div>
              <div class="university">Mumbai university</div>
              <div class="specialization">B.E. - Computer Engineering</div>
              <div class="result">7.54 CGPA</div>
              <div class="year">2017 - 2020</div>
            </div>
          </div>
        </div>
      </div>
      <div class="inner-div" id="expSection">
        <div class="experience">
          <div class="header">Professional WorkEx.</div>
          <div class="mobile-ui">
            <div class="timeline-job">
              <div class="company-year">
                <div class="year-1">2021</div>
              </div>

              <div class="line-job"></div>
              <div class="company-year">
                <div class="year-2">2023</div>
              </div>
              <!-- <div class="line"></div>
            <div class="company-year">
              <div class="present">2025</div>
            </div> -->
              <div class="dash-line"></div>
              <div class="dash-line"></div>
              <div class="dash-line"></div>
            </div>
            <div class="company">
              <div class="job-information">
                <q-img
                  class="company-image"
                  src="../assets/images/accenture.png"
                ></q-img>
                <div class="job-title">Associate Software Engineer</div>
                <div class="jd">
                  <div>
                    - Developed automation script in Selenium to reduce testing
                    efforts and increase coverage by 30%.
                  </div>
                  <div>- Led internal testing team.</div>
                </div>
              </div>
              <div class="job-information">
                <q-img
                  class="company-image"
                  src="../assets/images/accenture.png"
                ></q-img>
                <div class="job-title">Software Engineer</div>
                <div class="jd">
                  <div>
                    - Built frontend components for Report Centre Module using
                    Quasar framework
                  </div>
                  <div>
                    - Optimized and tested CRUD APIs in Django Rest Framework.
                  </div>
                  <div>
                    - Implemented Role-Based Access Control for multiple
                    User-Types on customer portal.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="separator"></div>
          <div class="header">Open Source</div>
          <div class="open-company">
            <q-img
              class="open-company-image"
              src="../assets/images/rds-logo.png"
            >
            </q-img>
            <div class="year">2024-present.</div>
            <div class="jd jd-open">
              <div>
                - Implemented User Impersonation feature to help Admin triage
                end-user issues swiftly.
              </div>
              <div>
                - Improved the internal logic for handling user activity to
                enhance UX.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="skills inner-div" id="skillsSection">
        <div class="tech-skills">
          <div class="logo django">
            <img
              class="mobile-ui-skill"
              width="240"
              height="240"
              src="https://img.icons8.com/ios/500/django.png"
              alt="django"
              style="filter: invert(100%) brightness(2)"
            />
            <q-tooltip> Django Web Framework </q-tooltip>
          </div>
          <div class="logo vue">
            <img
              class="mobile-ui-skill"
              width="100"
              height="100"
              src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/100/external-vuejs-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-logo-shadow-tal-revivo.png"
              alt="vue"
            />
            <q-tooltip> VueJs Framework </q-tooltip>
          </div>
          <div class="logo js">
            <img
              class="mobile-ui-skill"
              width="140"
              height="140"
              src="https://img.icons8.com/color/240/javascript--v1.png"
              alt="javascript"
            />
            <q-tooltip> Javascript Programming Language </q-tooltip>
          </div>
          <!-- <div class="logo sql" style="left: 75%; top: 28%">
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/ios-filled/100/sql.png"
              alt="sql"
              style="filter: invert(100%) brightness(2)"
            />
          </div> -->
          <div class="logo aws">
            <img
              class="mobile-ui-skill-aws"
              width="90"
              height="90"
              src="https://img.icons8.com/color/240/amazon-web-services.png"
              alt="aws"
              style="
                background-color: aliceblue;
                border-radius: 30%;
                padding: 4px;
              "
            />
            <q-tooltip> AWS: Cloud Compute</q-tooltip>
          </div>
          <div class="logo git">
            <img
              class="mobile-ui-skill"
              width="120"
              height="120"
              src="https://img.icons8.com/ios-filled/250/git.png"
              alt="git"
              style="filter: invert(100%) brightness(2)"
            />
            <q-tooltip> Git: Version Control</q-tooltip>
          </div>
          <div class="logo postman">
            <img
              class="mobile-ui-skill"
              width="90"
              height="90"
              src="../assets/images/postman.png"
              alt="postman"
            />
            <q-tooltip> Postman Tool </q-tooltip>
          </div>
          <div class="logo python">
            <img
              class="mobile-ui-skill"
              width="240"
              height="240"
              src="https://img.icons8.com/color/240/python.png"
              alt="python"
            />
            <q-tooltip> Python Programming Language </q-tooltip>
          </div>
        </div>
      </div>
      <div class="project inner-div" id="projectSection">
        <div class="all-projects">
          <div class="tourney project-block" data-project="tourney">
            <div class="info">
              <div class="project-name">Tourney! - A Tournament App.</div>
              <div class="project-desc">
                <div>
                  - An app to help schedule and track the matched in a
                  tournament.
                </div>
                <div>
                  - Multiple match formats supported like: Round Robin, Double
                  Round Robin, etc.
                </div>
              </div>
              <div class="tech-used">
                <div>Tech Used:</div>
                <div class="logo-sm">
                  <div class="python-sm">
                    <img
                      class="logo-sm-mob"
                      width="40"
                      height="40"
                      src="https://img.icons8.com/color/240/python.png"
                      alt="python"
                    />
                  </div>
                  <div class="django-sm">
                    <img
                      class="logo-sm-mob"
                      width="60"
                      height="60"
                      src="https://img.icons8.com/ios/500/django.png"
                      alt="django"
                      style="filter: invert(100%) brightness(2)"
                    />
                  </div>
                  <div class="vue-sm">
                    <img
                      class="logo-sm-mob"
                      width="40"
                      height="40"
                      src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/100/external-vuejs-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-logo-shadow-tal-revivo.png"
                      alt="vue"
                    />
                  </div>
                  <div class="sql-sm">
                    <img
                      class="logo-sm-mob"
                      width="60"
                      height="60"
                      src="https://img.icons8.com/ios-filled/100/sql.png"
                      alt="sql"
                      style="filter: invert(100%) brightness(2)"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="image">
              <div>
                <img
                  class="image-project"
                  width="90"
                  height="90"
                  src="../assets/images/tournament.png"
                  alt="aws"
                />
              </div>
              <div class="links">
                <q-btn
                  flat
                  label="Github"
                  class="button-link"
                  @click="openLink('github', $event)"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-up-right-from-square"
                    class="q-ml-xs"
                  />
                </q-btn>
                <q-btn
                  flat
                  label="Site"
                  class="button-link"
                  @click="openLink('site', $event)"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-up-right-from-square"
                    class="q-ml-xs"
                  />
                </q-btn>
              </div>
            </div>
          </div>
          <div class="todo project-block" data-project="todo">
            <div class="image">
              <div>
                <img
                  class="image-project"
                  width="90"
                  height="90"
                  src="../assets/images/todo.png"
                  alt="aws"
                  style="filter: invert(100%) brightness(2)"
                />
              </div>
              <div class="links">
                <q-btn
                  flat
                  label="Github"
                  class="button-link"
                  @click="openLink('github', $event)"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-up-right-from-square"
                    class="q-ml-xs"
                  />
                </q-btn>
                <q-btn
                  flat
                  label="Site"
                  class="button-link"
                  @click="openLink('site', $event)"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-up-right-from-square"
                    class="q-ml-xs"
                  />
                </q-btn>
              </div>
            </div>
            <div class="info">
              <div class="project-name">ToDo App.</div>
              <div class="project-desc">
                <div>
                  - Creating and tracking user tasks through a ToDo list.
                </div>
                <div>- Built on Django/Vue/Quasar Stack</div>
              </div>
              <div class="tech-used">
                <div>Tech Used:</div>
                <div class="logo-sm">
                  <div class="python-sm">
                    <img
                      class="logo-sm-mob"
                      width="40"
                      height="40"
                      src="https://img.icons8.com/color/240/python.png"
                      alt="python"
                    />
                  </div>
                  <div class="django-sm">
                    <img
                      class="logo-sm-mob"
                      width="60"
                      height="60"
                      src="https://img.icons8.com/ios/500/django.png"
                      alt="django"
                      style="filter: invert(100%) brightness(2)"
                    />
                  </div>
                  <div class="vue-sm">
                    <img
                      class="logo-sm-mob"
                      width="40"
                      height="40"
                      src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/100/external-vuejs-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-logo-shadow-tal-revivo.png"
                      alt="vue"
                    />
                  </div>
                  <div class="postgres-sm">
                    <img
                      class="logo-sm-mob"
                      width="50"
                      height="50"
                      src="https://img.icons8.com/ios-filled/250/postgreesql.png"
                      alt="postgreesql"
                      style="filter: invert(100%) brightness(2)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="stock-prediction project-block" data-project="stocks">
            <div class="info">
              <div class="project-name">Stock Price Prediction.</div>
              <div class="project-desc">
                <div>
                  - A Django dashboard assisting investors track, manage and
                  suggest future investments.
                </div>
                <div>
                  - Using ARIMA model on historic data and analyzing market
                  sentiments using TwitterAPI.
                </div>
              </div>
              <div class="tech-used">
                <div>Tech Used:</div>
                <div class="logo-sm">
                  <div class="python-sm">
                    <img
                      class="logo-sm-mob"
                      width="40"
                      height="40"
                      src="https://img.icons8.com/color/240/python.png"
                      alt="python"
                    />
                  </div>
                  <div class="django-sm">
                    <img
                      class="logo-sm-mob"
                      width="60"
                      height="60"
                      src="https://img.icons8.com/ios/500/django.png"
                      alt="django"
                      style="filter: invert(100%) brightness(2)"
                    />
                  </div>
                  <div class="numpy-sm">
                    <img
                      class="logo-sm-mob"
                      width="50"
                      height="50"
                      src="https://img.icons8.com/color/240/numpy.png"
                      alt="numpy"
                    />
                  </div>
                  <div class="sql-sm">
                    <img
                      class="logo-sm-mob"
                      width="60"
                      height="60"
                      src="https://img.icons8.com/ios-filled/100/sql.png"
                      alt="sql"
                      style="filter: invert(100%) brightness(2)"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="image">
              <div>
                <img
                  class="image-project"
                  width="90"
                  height="90"
                  src="https://img.icons8.com/ios-filled/100/stocks.png"
                  alt="stocks"
                  style="filter: invert(100%) brightness(2)"
                />
              </div>
              <div class="links">
                <q-btn
                  flat
                  label="Github"
                  class="button-link"
                  @click="openLink('github', $event)"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-up-right-from-square"
                    class="q-ml-xs"
                  />
                </q-btn>
                <q-btn
                  flat
                  label="Site"
                  class="button-link"
                  @click="openLink('site', $event)"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-up-right-from-square"
                    class="q-ml-xs"
                  />
                </q-btn>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="thank-you">
        <div class="message">Thank You for scrolling!</div>
        <div class="heart-section">
          <button class="heart-button" @click="increaseCount">❤️</button>
          <div class="counter">{{ count }}</div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { ref } from 'vue';

// Counter for the heart clicks
const count = ref(0);

// Function to increase the counter
const increaseCount = () => {
  count.value++;
};
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const logos = document.querySelectorAll('.logo');
        if (entry.isIntersecting) {
          logos.forEach((logo) => logo.classList.add('animate'));
        } else {
          logos.forEach((logo) => logo.classList.remove('animate'));
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  const skillsSection = document.getElementById('skillsSection');
  if (skillsSection) {
    observer.observe(skillsSection);
  } else {
    console.error('Skills section not found!');
  }

  //count++
  count.value++;
});

//Card overlap TBD
// onMounted(() => {
//   const innerDivs = document.querySelectorAll(
//     '.inner-div'
//   ) as NodeListOf<HTMLElement>;

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         const target = entry.target as HTMLElement; // Cast the target to HTMLElement
//         const index = Array.from(innerDivs).indexOf(target);

//         if (entry.isIntersecting) {
//           // Overlap amount based on visibility
//           const overlapAmount = Math.min(
//             500, // Max overlap in px
//             Math.floor(entry.intersectionRatio * 100) // Scale overlap by visibility
//           );

//           console.log('overlap amount: ', overlapAmount);
//           console.log(
//             'Ratio: ',
//             Math.floor(entry.intersectionRatio * 600),
//             '@',
//             entry.intersectionRatio
//           );

//           target.style.transform = `translateY(-${overlapAmount}px)`; // Move element up
//           target.style.zIndex = `${100 - index}`; // Bring overlapping div to the top
//         } else {
//           target.style.transform = 'translateY(0px)'; // Reset transform when not visible
//           target.style.zIndex = '1'; // Reset zIndex when out of view
//         }
//       });
//     },
//     {
//       root: null,
//       threshold: 0.9, // Start the effect when 50% of the element is visible (middle of the viewport)
//     }
//   );

//   innerDivs.forEach((div) => observer.observe(div));
// });

// Define the type for project links
interface ProjectLinks {
  [key: string]: {
    github: string;
    site: string;
  };
}

// Links for each project
const projectLinks: ProjectLinks = {
  tourney: {
    github: 'https://github.com/sumitjoshii/tourney',
    site: 'https://tourney.saumit.tech',
  },
  todo: {
    github: 'https://github.com/sumitjoshii/fs-todo',
    site: 'todo.saumit.tech',
  },
  stocks: {
    github: 'https://github.com/sumitjoshii?tab=repositories',
    site: 'stocks.saumit.tech',
  },
};

// Function to open the link
const openLink = (type: 'github' | 'site', event: Event) => {
  const projectBlock = (event.target as HTMLElement).closest(
    '.project-block'
  ) as HTMLElement;

  if (projectBlock) {
    const project = projectBlock.dataset.project as keyof typeof projectLinks;
    if (project && projectLinks[project] && projectLinks[project][type]) {
      const url = projectLinks[project][type];
      window.open(url, '_blank');
    } else {
      console.error(`Link not found for project: ${project}, type: ${type}`);
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Tiny5&display=swap');
.scroll-div {
  padding-top: 800px;
  position: relative;
  z-index: 6;
  background-color: transparent;
  height: fit-content;
  width: 90%;
  margin: auto;
  text-align: center;
  padding-bottom: 200px;
}

/* ======CARD====== */

.scroll-div {
  padding-top: 800px;
  position: relative;
  z-index: 6;
  background-color: transparent;
  height: fit-content;
  width: 90%;
  margin: auto;
  text-align: center;
  padding-bottom: 200px;
}

.inner-div {
  height: fit-content;
  border-radius: 30px;
  overflow: hidden;
  margin-bottom: 30px; /* For spacing between cards */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Card-like effect */
  transition: transform 0.3s ease; /* Smooth transition for overlap */
  position: relative;
  z-index: 1; /* Maintain stacking order */
  background-color: white; /* Card background */
}

.inner-div:not(:first-child) {
  transform: translateY(0); /* No overlap initially */
}

/* ======Card====== */

.inner-div {
  height: fit-content;
  border-radius: 30px;
  overflow: hidden;
}

.education {
  background-color: rgb(247, 247, 235);
}

.timeline-edu,
.timeline-job {
  padding: 20px;
  padding-top: 40px;
  display: flex;
  justify-content: center; /* Ensure even spacing between items */
  align-items: center; /* Vertically center the items */
  width: 800px; /* Make it take the full width of its container */

  margin: auto;
  box-sizing: border-box; /* Include padding and border in the width calculation */
  font-family: 'Courier New', Courier, monospace;
  font-size: 22px;
  font-weight: bold;
}
.edu-image {
  width: 60px;
  height: 60px;
}

.line-edu,
.line-job {
  width: 412px;
  height: 3px;
  background-color: black;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 5px;
}
.dash-line {
  width: 6px;
  height: 5px;
  background-color: black;
  margin-left: 5px;
}

.institutes {
  display: flex;
  align-items: center;
  width: 1000px;
  margin: auto;
  justify-content: space-around;
  font-family: 'Courier New', Courier, monospace;
  font-size: 22px;
  padding: 20px;
  padding-bottom: 40px;
}

.header {
  font-family: 'Courier New', Courier, monospace;
  font-size: 22px;
  font-weight: bold;
  padding-top: 50px;
}

.experience {
  background-color: rgb(148, 216, 255);
}

.company {
  display: flex;
  justify-content: space-around;
  margin: auto;
  width: 1000px; /* Make it take the full width of its container */
}

.separator {
  width: 60%;
  margin: 50px auto -10px auto;
  height: 1px;
  border-radius: 20px;
  background-color: rgb(1, 4, 86);
}

.open-company {
  margin: auto;
  width: fit-content;

  padding-bottom: 80px;
}

.year {
  font-style: italic;
  font-size: 16px;
  color: rgb(67, 67, 67);
}
.company-image {
  height: 80px;
  width: 150px;
}

.open-company-image {
  width: 100px;
  height: 100px;
}

.job-title {
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  font-size: 22px;
  margin: -5px 0 15px 0;
}

.jd {
  width: 450px;
  font-family: 'Courier New', Courier, monospace;
  text-align: left;
  font-size: 18px;
}

.skills {
  position: relative;
  height: 600px;
  width: 100%;
  overflow: hidden;
  background-color: rgb(0, 15, 73);
  padding-bottom: 100px;
}

.tech-skills {
  position: relative;
  width: 100%;
  height: 100%;
}

.logo {
  position: absolute;
  left: 40%; /* Starting position for all logos */
  top: 25%; /* Behind the Python logo */
  transition: all 1s ease; /* Smooth animation */
}

.logo.python {
  left: 40%; /* Final position (no change for Python) */
  top: 25%;
}

.logo.django.animate {
  left: 25%; /* Target position */
  top: 50%;
}

.logo.vue.animate {
  left: 33%;
  top: 33%;
}

.logo.js.animate {
  left: 59%;
  top: 55%;
}

.logo.aws.animate {
  left: 48%;
  top: 74%;
}

.logo.git.animate {
  left: 58%;
  top: 28%;
}

.logo.postman.animate {
  left: 26%;
  top: 40%;
}

.logo:hover {
  transform: scale(1.08);
}

/* Floating animation (up and down) */
@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

/* Rotating animation */
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(5deg);
  }
  66% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.image {
  margin: auto 0 auto 0;
}

.project {
  height: fit-content;
  margin: auto;
  background-color: rgb(11, 3, 30);
  color: aliceblue;
}

.all-projects {
  margin: auto;
  width: 70%;
}

.project-block {
  display: flex;
  justify-content: space-evenly;
  background-color: black;
  padding: 20px;
  border-radius: 20px;
  margin: 40px;
  box-shadow: 10px 10px 5px rgba(0, 68, 91, 0.883);
}

.project-name {
  font-size: 26px;
  margin: 2px 0 15px 0;
}
.project-desc {
  font-size: 18px;
  text-align: left;
}

.info {
  font-family: 'Courier New', Courier, monospace;
  width: 500px;
}

.tech-used {
  display: flex;
  font-family: 'Courier New', Courier, monospace;
  font-size: 20px;
  align-items: center;
  padding: 20px;
}

.logo-sm {
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: space-evenly;
}

.button-link:hover {
  color: rgb(0, 145, 255);
}

.thank-you {
  background-color: #d2042dc4;
  height: 150px;
  width: 60%;
  margin: 50px auto 50px auto;
  border-radius: 20px;
  align-items: center;

  backdrop-filter: blur(10px);
}

.message {
  color: rgb(248, 235, 219);
  font-size: 50px;
  margin-bottom: 10px;
  font-family: 'Tiny5', sans-serif;
}

.heart-section {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.heart-button {
  background-color: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
  animation: pulse 0.3s;
}

.heart-button:active {
  transform: scale(1.1);
}

.counter {
  font-size: 25px;
  color: rgb(255, 255, 240);
  font-weight: bold;
}

/* Heart pulse animation */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

/* Mobile UI */
@media (max-width: 1111px) {
  .institutes {
    width: auto;
    font-size: 16px;
    padding: 20px;
    padding-bottom: 40px;
  }
  .timeline-edu {
    padding: 20px;
    padding-top: 40px;

    width: auto; /* Make it take the full width of its container */
    margin: auto;
    display: flex;
    justify-content: center;
    font-family: 'Courier New', Courier, monospace;
    font-size: 22px;
    font-weight: bold;
  }
  .line-edu {
    width: 350px;
    height: 3px;

    background-color: black;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 5px;
  }
}

@media (max-width: 490px) {
  .scroll-div {
    padding-top: 930px;
  }
  .institutes {
    width: auto;
    font-size: 16px;
    padding: 20px;
    padding-bottom: 40px;
  }
  .timeline-edu {
    padding: 5px;
    padding-top: 40px;

    width: auto; /* Make it take the full width of its container */
    margin: auto;
    display: flex;
    justify-content: center;
    font-family: 'Courier New', Courier, monospace;
    font-size: 22px;
    font-weight: bold;
  }
  .edu-image {
    width: 40px;
    height: 40px;
  }
  .line-edu {
    width: 115px;
    height: 3px;

    background-color: black;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 5px;
  }
  .year {
    font-size: 12px;
    font-style: italic;
    font-weight: bold;
  }

  .mobile-ui {
    display: flex;
  }
  .timeline-job {
    display: inline;
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    padding: 20px;
    padding-top: 40px;
  }
  .timeline-job {
    display: inline;
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    padding: 20px;
    padding-top: 40px;
    width: auto;
  }
  .line-job {
    width: 5px;
    height: 155px;
    margin: auto;
    background-color: black;
    border-radius: 5px;
  }
  .dash-line {
    width: 5px;
    height: 5px;
    margin: 2px auto 0 auto;
    background-color: black;
    border-radius: 5px;
  }

  .company {
    display: inline;
  }
  .job-information {
    width: auto;
  }
  .company-image {
    margin-left: -15px;
  }
  .job-title {
    font-size: 13px;
    font-weight: bold;
    font-style: italic;
    text-align: left;
  }
  .jd {
    font-size: 12px;
    text-align: left;
    font-weight: bold;
    width: 92%;
  }
  .jd-open {
    font-family: 'Courier New', Courier, monospace;
    width: 70%;
    margin: auto;
    text-align: left;
    font-size: 12px;
  }

  .mobile-ui-skill {
    width: 100px;
    height: 100px;
  }

  .mobile-ui-skill-aws {
    width: 60px;
    height: 60px;
  }

  .logo {
    top: 10%;
    left: 40%;
  }

  .logo.python {
    left: 40%; /* Final position (no change for Python) */
    top: 10%;
  }

  .logo.django.animate {
    left: 25%; /* Target position */
    top: 50%;
  }

  .logo.vue.animate {
    left: 28%;
    top: 33%;
  }

  .logo.js.animate {
    left: 59%;
    top: 55%;
  }

  .logo.aws.animate {
    left: 52%;
    top: 80%;
  }

  .logo.git.animate {
    left: 58%;
    top: 28%;
  }

  .logo.postman.animate {
    left: 20%;
    top: 70%;
  }
  .all-projects {
    width: 90%;
  }
  .project-block {
    display: flex;
    flex-direction: column; /* Ensure the elements are stacked vertically */
  }

  .image {
    order: -1; /* Move the image div to come before the info div */
  }

  .info {
    order: 0; /* Ensure the info div follows the image div */
  }

  .image-project {
    height: 50px;
    width: 50px;
  }

  .all-projects {
    width: 90%;
  }
  .project-block {
    margin: 15px auto 15px auto;
  }

  .info {
    width: auto;
    margin-top: 10px;
  }
  .project-name {
    font-size: 14px;
    font-weight: bold;
    text-decoration: underline;
  }

  .project-desc {
    font-size: 14px;
  }
  .tech-used {
    font-size: 12px;
  }

  .logo-sm-mob {
    width: 30px;
    height: 30px;
  }
  .thank-you {
    width: 80%;
    height: fit-content;
  }
  .message {
    font-size: 30px;
    padding: 5px;
  }
}

@media (max-width: 380px) {
  .scroll-div {
    padding-top: 800px;
  }
  .line-edu {
    width: 90px;

    height: 3px;
  }
  .institutes {
    font-size: 11px;
    font-weight: 900;
  }

  .line-job {
    width: 5px;
    height: 172px;
    margin: auto;
    background-color: black;
    border-radius: 5px;
  }

  .project-block {
    display: flex;
    flex-direction: column; /* Ensure the elements are stacked vertically */
  }

  .image {
    order: -1; /* Move the image div to come before the info div */
  }

  .info {
    order: 0; /* Ensure the info div follows the image div */
  }

  .image-project {
    height: 50px;
    width: 50px;
  }

  .all-projects {
    width: 90%;
  }
}
</style>
