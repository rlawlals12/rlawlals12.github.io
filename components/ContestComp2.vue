<template>
    <div>
      <br />
      <table border="0">
        <td bgcolor="#FFFFFF">K-HACKATHON3</td>
      </table>
      <br />
      <img :src="require('@/assets/2.png')" alt="react" class="Contest1" />
      <br />
      <fieldset>
        <legend>공모전 개요</legend>
        <ul>
          <li>주제: 전국 대학생 앱 개발 챌린지</li>
          <li>참가대상: 전국의 대학생/대학원생 누구나</li>
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