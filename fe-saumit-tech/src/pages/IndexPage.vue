<template>
  <q-page>
    <div class="scroll-div">
      <h1>Hello Scroll!</h1>
      <div class="about inner-div" id="aboutSection">
        <p>About</p>
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

<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
});
</script>

<style scoped>
.scroll-div {
  position: relative;
  top: 670px;
  z-index: 6;
  background-color: rgb(4, 147, 147);
  height: 3000px;
  width: 60%;
  margin: auto;
  text-align: center;
}

.inner-div {
  height: 500px;
  background-color: black;
  margin-top: 50px;
  color: aliceblue;
}
</style>
