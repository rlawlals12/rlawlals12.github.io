<template>
    <div>
      <br />
      <table border="0">
        <td bgcolor="#FFFFFF">바르셀로나 홈페이지</td>
      </table>
      <br />
      <img :src="projectImage" alt="vue" class="Project1" />
      <br />
      <fieldset>
        <legend>프로젝트 개요</legend>
        <p style="font-size: 50px">
          이 프로젝트의 목표는 바르셀로나 축구 클럽에 대한 팬페이지를 개발하여,
          바르셀로나 팬들에게 클럽에 대한 정보, 뉴스, 비디오, 사진, 일정 등을
          제공하는 웹 어플리케이션을 제작하는 것이다. 이 웹은 Vue.js를 사용하여
          개발될 것이며, 사용자에게 바르셀로나에 대한 정보를 제공하고, 팬들
          간의 상호작용을 촉진할 것이다.
        </p>
      </fieldset>
      <br />
      <fieldset>
        <legend>주요 기능</legend>
        <ul style="font-size: 50px">
          <li>홈페이지: 바르셀로나 FC에 대한 개요, 최신 뉴스, 사진, 비디오 플레이어 표시</li>
          <li>뉴스 섹션: 최신 뉴스 기사 표시, 뉴스를 클릭하면 자세한 내용 표시</li>
          <li>일정 및 결과: 바르셀로나 FC의 경기 일정과 결과 표시</li>
          <li>팀 소개: 팀 멤버 소개, 감독 정보, 역사, 엠블럼 등을 표시</li>
          <li>팬 포럼: 팬들 간의 토론을 위한 포럼 구현</li>
        </ul>
      </fieldset>
    </div>
  </template>
  
  <script>
  import projectImage from "../assets/4.png";
  
  export default {
    data() {
      return {
        projectImage,
      };
    },
    // You can add any component options or lifecycle hooks if needed
  };
  </script>

<style scoped>
/* Scoped style for this component */
#project {
  margin-left: 500px;
}

img {
  width: 1200px;
  height: 800px;
}

fieldset {
  width: 2000px;
  margin-left: 50px;
  font-size: 1.5em;
}

ul,
li {
  font-size: 50px; /* Remove quotes around the value */
}
</style>