<template>
  <div class="login-box">
    <div class="signin-header">
      <h1>Reembolso Azul :)</h1>
    </div>

    <div class="content">
      <form class="form-signin" @submit.prevent="login">
        <label for="inputEmail" class="sr-only">Email</label>
        <input v-model="email" type="email" id="inputEmail" class="form-control" required autofocus>
        <label class="control-label sr-only" for="inputPassword">Senha</label>
        <input v-model="password"  type="password" id="inputPassword" class="form-control" required>
        <button class="btn btn-lg btn-primary btn-block" type="submit">LOGIN</button>
      </form>

      <div class="form-buttons">
        <a class="button" href="/">ESQUECI MINHA SENHA</a>
        <a class="button" href="/">QUERO ME CADASTRAR</a>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'LoginScreen',
  data () {
    return {
    }
  }
}
</script>


<style lang="scss" scoped>
@import '../scss/settings/color';
@import '../scss/components/container.mixin';


.login-box {
  display: flex;
  flex-wrap: wrap; 
  justify-content: center; 
  align-items: center; 
  
  position: absolute;
  
  top: 16%;
  width: 50%;
  max-width: 500px;

  background-color: white;

  @include container();

  .signin-header {
    margin-bottom: auto; 
    width: 100%; 

    background-color: $color-primary;
    color: white;
  }
      // margin-bottom: auto;

  .content {
    width: 100%;
    padding: 6% 0 6% 0;

    form {
      top: 0px;
      // width: 100%;
      padding: 0 14% 0 14%;

      label {
        text-align: left;
        display: block;
        margin-bottom: 0px;
        color: #777;
        font-size: 0.8em;
      }

      input {
        width: 100%;
        margin-bottom: 2em;

        font-size: 16px;
        font-weight: 800;
        color: #555;
        line-height: 24px;

        border-width: 0px 0px 2px 0px;
        border-color: $color-primary;
        
      }
      input:focus {
        box-shadow: inset 0px -17px 9px -17px #91c8ff;
      }
      
      textarea:focus, input:focus{
        outline: none;
      }

      button {
        width: 100%;
        color: white;
        background-color: $color-primary;
        
        border-width: 0px;
        border-radius: 2px;
        font-weight: 800;
        
        padding: 0.4em;

        line-height: 2em;    

        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);
      }

    }

    .form-buttons {
      margin: 2em;
      // width: 100%;
      margin: 8% 0 0% 0;
      
      a {
        margin: 5%;
        font-size: 14px;
        text-align: center;
        letter-spacing: 0.5px;
        text-decoration: none;
        font-weight: 800;
      }
    }
  }
}
</style>
