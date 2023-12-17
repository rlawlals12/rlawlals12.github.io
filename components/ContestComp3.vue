<template>
    <div>
      <br />
      <table border="0">
        <td bgcolor="#FFFFFF">배리어프리 앱 개발 콘테스트</td>
      </table>
      <br />
      <img :src="require('@/assets/3.png')" alt="react" class="Contest1" />
      <br />
      <fieldset>
        <legend>공모전 개요</legend>
        <ul>
          <li>응모분야: 장애인 및 사회취약계층 편의를 증진할 수 있는 앱 아이디어 공모 및 제약</li>
          <li>응모자격: 대학(원)생 중 사회취약계층 편의 증진 관련 앱 개발 가능 팀</li>
          <li>응모방법: 배리어프리 앱개발 콘테스트 홈페이지에서 신청</li>
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