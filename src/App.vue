
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Nunito|Open+Sans');


body {
  background-color: #eeeeee;  
  color: #2c3e50;
  
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothsing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-image: radial-gradient(#ddd 10%, transparent 0);
  background-size: 30px 30px;
}

button {
  font-family: 'Nunito', sans-serif;
  font: 800 14px 'Nunito';
  letter-spacing: 0.6px;
}

#app {
  display: flex;
  flex-wrap: wrap; /* Optional. only if you want the items to wrap */
  justify-content: center; /* For horizontal alignment */
  align-items: center; /* For vertical alignment */
  
  text-align: center;  
  
}
</style>