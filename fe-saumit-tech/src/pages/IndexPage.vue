<template>
  <q-page>
    <div class="scroll-div">
      <div class="inner-div" id="eduSection">
        <div class="education">
          <div class="timeline">
            <q-img class="edu-image" src="../assets/images/diploma.png"></q-img>
            <div class="line"></div>
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
          <div class="timeline">
            <div class="company-year">
              <div class="year-1">2021</div>
            </div>

            <div class="line"></div>
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
          <div class="header">Open Source</div>
          <div class="open-company">
            <q-img
              class="open-company-image"
              src="../assets/images/rds-logo.png"
            >
            </q-img>
            <div class="year">2024-present.</div>
            <div class="jd">
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
          <div class="logo python">
            <img
              width="240"
              height="240"
              src="https://img.icons8.com/color/240/python.png"
              alt="python"
            />
          </div>
          <div class="logo django">
            <img
              width="240"
              height="240"
              src="https://img.icons8.com/ios/500/django.png"
              alt="django"
              style="filter: invert(100%) brightness(2)"
            />
          </div>
          <div class="logo vue">
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/100/external-vuejs-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-logo-shadow-tal-revivo.png"
              alt="vue"
            />
          </div>
          <div class="logo js">
            <img
              width="140"
              height="140"
              src="https://img.icons8.com/color/240/javascript--v1.png"
              alt="javascript"
            />
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
          </div>
          <div class="logo git">
            <img
              width="120"
              height="120"
              src="https://img.icons8.com/ios-filled/250/git.png"
              alt="git"
              style="filter: invert(100%) brightness(2)"
            />
          </div>
        </div>
      </div>

      <div class="project inner-div" id="projectSection">
        <div class="all-projects">
          <div class="tourney project-block">
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
                <div>Tech Used</div>
                <div class="logo-sm">
                  <div class="python-sm">
                    <img
                      width="40"
                      height="40"
                      src="https://img.icons8.com/color/240/python.png"
                      alt="python"
                    />
                  </div>
                  <div class="django-sm">
                    <img
                      width="60"
                      height="60"
                      src="https://img.icons8.com/ios/500/django.png"
                      alt="django"
                      style="filter: invert(100%) brightness(2)"
                    />
                  </div>
                  <div class="vue-sm">
                    <img
                      width="40"
                      height="40"
                      src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/100/external-vuejs-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-logo-shadow-tal-revivo.png"
                      alt="vue"
                    />
                  </div>
                  <div class="sql-sm">
                    <img
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
                  @click="openResume"
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
                  @click="openResume"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-up-right-from-square"
                    class="q-ml-xs"
                  />
                </q-btn>
              </div>
            </div>
          </div>
          <div class="todo project-block">
            <div class="image">
              <div>
                <img
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
                  @click="openResume"
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
                  @click="openResume"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-up-right-from-square"
                    class="q-ml-xs"
                  />
                </q-btn>
              </div>
            </div>
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
                <div>Tech Used</div>
                <div class="logo-sm">
                  <div class="python-sm">
                    <img
                      width="40"
                      height="40"
                      src="https://img.icons8.com/color/240/python.png"
                      alt="python"
                    />
                  </div>
                  <div class="django-sm">
                    <img
                      width="60"
                      height="60"
                      src="https://img.icons8.com/ios/500/django.png"
                      alt="django"
                      style="filter: invert(100%) brightness(2)"
                    />
                  </div>
                  <div class="vue-sm">
                    <img
                      width="40"
                      height="40"
                      src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/100/external-vuejs-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-logo-shadow-tal-revivo.png"
                      alt="vue"
                    />
                  </div>
                  <div class="postgres-sm">
                    <img
                      width="60"
                      height="60"
                      src="https://img.icons8.com/ios-filled/250/postgreesql.png"
                      alt="postgreesql"
                      style="filter: invert(100%) brightness(2)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="stock-prediction project-block">
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
                <div>Tech Used</div>
                <div class="logo-sm">
                  <div class="python-sm">
                    <img
                      width="40"
                      height="40"
                      src="https://img.icons8.com/color/240/python.png"
                      alt="python"
                    />
                  </div>
                  <div class="django-sm">
                    <img
                      width="60"
                      height="60"
                      src="https://img.icons8.com/ios/500/django.png"
                      alt="django"
                      style="filter: invert(100%) brightness(2)"
                    />
                  </div>
                  <div class="numpy-sm">
                    <img
                      width="50"
                      height="50"
                      src="https://img.icons8.com/color/240/numpy.png"
                      alt="numpy"
                    />
                  </div>
                  <div class="sql-sm">
                    <img
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
                  @click="openResume"
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
                  @click="openResume"
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

<script setup>
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
});
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

.inner-div {
  height: fit-content;
  border-radius: 30px;
  overflow: hidden;
}

.education {
  background-color: rgb(247, 247, 235);
}

.timeline {
  padding: 20px;
  padding-top: 40px;
  display: flex;
  justify-content: center; /* Ensure even spacing between items */
  align-items: center; /* Vertically center the items */
  width: 800px; /* Make it take the full width of its container */
  min-width: 800px;
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

.line {
  width: 412px;
  height: 5px;
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
  min-width: 1000px;
}

.open-company {
  margin: auto;
  width: fit-content;
  padding: 30px;
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

.jd {
  width: 450px;
  font-family: 'Courier New', Courier, monospace;
  text-align: left;
  font-size: 20px;
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

.logo:hover {
  background-color: aqua;
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
}
.project-desc {
  font-size: 20px;
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
</style>
