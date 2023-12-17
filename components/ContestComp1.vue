<template>
    <div>
      <br />
      <table border="0">
        <td bgcolor="#FFFFFF">소개딩할사람?</td>
      </table>
      <br />
      <img :src="require('@/assets/1.png')" alt="react" class="Contest1" />
      <br />
      <fieldset>
        <legend>공모전 개요</legend>
        <ul>
          <li>행사 주제: 편리한 공공 생활을 위한 서비스 개발</li>
          <li>참가 자격: 국내 소재 대학 또는 휴학 중인 대학생으로 구성한 팀</li>
          <li>주요 일정: 참가 신청 - 서류심사 및 발표 - 사전교육 - 해커톤 본선</li>
          <li>유의사항1: 참가신청 서류를 허위로 작성하여 제출하는 경우 참가자격 박탈, 시상회수 등 관련규정에 따라 조치될 수 있음</li>
          <li>유의사항2: 신청자격을 증빙할 수 있는 재학증명서 및 휴학증명서 등은 대회참가자에 한해 제출</li>
        </ul>
      </fieldset>
    </div>
  </template>

<style scoped>
/* Scoped style for this component */
#contest {
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
ol {
  font-size: 50px;
}
</style>