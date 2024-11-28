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
      <div class="project inner-div" id="projectSection">
        <p>Project</p>
      </div>
      <div class="skills inner-div" id="skillsSection">
        <p>Skills</p>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
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
  background-color: aliceblue;
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
</style>
