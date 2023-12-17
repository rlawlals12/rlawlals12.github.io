<template>
    <div>
      <br />
      <table border="0">
        <td bgcolor="#FFFFFF">데이트 코스 추천 홈페이지</td>
      </table>
      <br />
      <img :src="projectImage" alt="vue" class="Project2" />
      <br />
      <fieldset>
        <legend>프로젝트 개요</legend>
        <p style="font-size: 50px">
          이 프로젝트의 목표는 사용자에게 지역 및 관심사에 맞는 데이트 코스를
          추천해주는 웹 어플리케이션을 개발하는 것이다. 데이트 코스 추천은 장소,
          음식, 활동 등을 포함하며, 사용자가 원하는 조건과 관심사를 기반으로 맞춤형
          추천을 제공할 것이다. 이 웹은 Vue.js를 사용하여 개발될 것이며, 사용자들이
          흥미로운 데이트 아이디어를 찾고 공유할 수 있는 플랫폼을 제공할 것이다.
        </p>
      </fieldset>
      <br />
  
      <fieldset>
        <legend>주요 기능</legend>
        <ul style="font-size: 50px">
          <li>홈페이지: 데이트 코스 추천 카드 표시, 인기 있는 데이트 장소 및 활동 표시</li>
          <li>데이트 코스 추천: 사용자 관심사, 예산, 위치 등을 기반으로 맞춤형 데이트 추천 제공</li>
          <li>사용자 데이트 아이디어 공유: 사용자가 자신의 데이트 아이디어를 공유하고 다른 사용자와 공유할 수 있는 기능 제공</li>
          <li>사용자 프로필: 사용자는 프로필을 설정하고 저장한 데이트 코스를 관리 가능</li>
          <li>리뷰 및 평가: 사용자들이 데이트 코스를 리뷰하고 평가할 수 있도록 하는 시스템</li>
        </ul>
      </fieldset>
    </div>
  </template>
  
  <script>
  import projectImage from "../assets/5.png";
  
  
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