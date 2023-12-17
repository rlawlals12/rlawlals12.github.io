<template>
    <div>
      <br />
      <table border="0">
        <td bgcolor="#FFFFFF">오늘의 패션 추천 홈페이지</td>
      </table>
      <br />
      <img :src="projectImage" alt="vue" class="Project3" />
      <br />
      <fieldset>
        <legend>프로젝트 개요</legend>
        <p style="font-size: 50px">
          이 프로젝트의 목표는 사용자에게 매일의 패션 아이디어를 제공하는 웹 애플리케이션을
          개발하는 것이다. OOTD(Outfit of the Day) 추천은 날씨, 계절, 사용자의 선호도 등을
          고려하여 사용자에게 맞춤형 아이디어를 제공할 것이다. 이 웹은 Vue.js를 사용하여 개발될
          것이며, 사용자들이 패션 아이디어를 찾고 공유할 수 있는 플랫폼을 제공할 것이다.
        </p>
      </fieldset>
      <br />
  
      <fieldset>
        <legend>주요 기능</legend>
        <ul style="font-size: 50px">
          <li>홈페이지: 오늘의 OOTD 아이디어를 표시, 사용자가 탐색할 수 있는 인기 있는 스타일 표시</li>
          <li>OOTD 추천: 날씨, 계절, 사용자의 스타일 선호도 등을 고려하여 맞춤형 OOTD 추천 제공</li>
          <li>사용자 OOTD 공유: 사용자가 자신의 OOTD를 공유하고 다른 사용자와 공유할 수 있는 기능 제공</li>
          <li>사용자 프로필: 사용자는 프로필을 설정하고 저장한 OOTD를 관리 가능</li>
          <li>리뷰 및 평가: 사용자들이 OOTD를 리뷰하고 평가할 수 있도록 하는 시스템</li>
        </ul>
      </fieldset>
    </div>
  </template>
  
  <script>
  import projectImage from "../assets/6.png";
  
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