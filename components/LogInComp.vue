<template>
    <div>
      <template v-if="loggedIn">
        <Resume />
      </template>
      <template v-else>
        <div>
          <h3 align="center">로그인</h3>
          <table align="center" width="30%">
            <tr>
              <td width="50%">아이디</td>
              <td>
                <input type="text" size="20" v-model="id" />
              </td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td>
                <input type="password" size="20" v-model="pwd" />
              </td>
            </tr>
          </table>
          <button @click="handleLogin">로그인</button>
        </div>
      </template>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  
  export default {
    data() {
      return {
        id: ref(''),
        pwd: ref(''),
        loggedIn: ref(false),
      };
    },
    methods: {
      changeId(e) {
        this.id = e.target.value;
      },
      changePwd(e) {
        this.pwd = e.target.value;
      },
      handleLogin() {
        // 로그인 자격 증명을 유효성 검사합니다.
        if (this.id === 'rlawlals' && this.pwd === '0830') {
          this.loggedIn = true;
        } else {
          // 실패한 로그인을 처리합니다.
          alert('유효하지 않은 자격 증명입니다. 다시 시도하세요.');
        }
      },
    },
  };
  </script>