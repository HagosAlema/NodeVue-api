<template>
  <div>
    <div class="login-content">
      <div class="label">
        <label>Name:
          <input type="text"/>
        </label>
      </div>
      <div class="label">
        <label>User name:
          <input type="text"/>
        </label>
      </div>
      <div class="label">
        <label>Email:
          <input type="text"/>
        </label>
      </div>
      <div class="label">
        <label>Password:
          <input type="password"/>
        </label>
      </div>
      <div class="label">
        <label>Confirm Password:
          <input type="password"/>
        </label>
      </div>
      <div class="gender">
        <label>Gender:
          <input type="radio" value="0"/> Male
          <input type="radio" value="1"/> Female
        </label>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
    export default {
        name: "MemberRegistration"
    }
</script>

<style scoped>
  .login-content {margin-left: 10px; justify-content: center; box-shadow: 1px 2px 1px 2px #f2f2f2}
  .login-content .label {display: block;  margin-top: 10px;}
  .login-content .gender {display: block;  margin: 0px 5px 0px 5px}
  .login-content label{display: block;line-height: 30px; font-size: 16px;}
  /*.login-content label{display: block;line-height: 30px; font-size: 24px;  margin: 0px 5px 0px 5px}*/
  .login-content .label label input{font-size: 20px; border: solid 1px #727272; border-radius: 5px;}
</style>
