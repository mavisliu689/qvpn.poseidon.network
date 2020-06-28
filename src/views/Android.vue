<template>
  <div class="view android">
    <h3 class="title"><img src="../assets/android-dark.svg" alt=""> Android</h3>
    <div class="hr"></div>
    <div class="content">
      <div class="wrap">
        <h3><span class="number">1</span>{{ $t('and-1-title') }}</h3>
        <p class="info">{{ $t('and-1-1') }}: <a href="https://play.google.com/store/apps/details?id=com.v2ray.ang&hl=en" target="_blank">Google Play Store</a></p>
      </div>
      <div class="wrap">
        <h3><span class="number">2</span>{{ $t('and-2-title') }}</h3>
        <img class="s" src="../assets/qrcode.png" alt="">
      </div>
      <div class="wrap">
        <h3><span class="number">3</span>{{ $t('and-3-title') }}</h3>
        <img class="s" :src="`${$t('images.and-1')}`" alt="">
        <img class="s" :src="`${$t('images.and-2')}`" alt="">
      </div>
      <div class="wrap">
        <h3><span class="number">4</span>{{ $t('and-4-title') }}</h3>
        <p class="info">
        </p>
        <img class="s" :src="`${$t('images.and-3')}`" alt="">
      </div>
      <div>
        <h3><span class="number">5</span>{{ $t('and-5-title') }}</h3>
        <div class="caution">{{ $t('and-5-1') }}</div>
        <p class="info">{{ $t('go-to') }} <a href="https://play.google.com/store/apps/details?id=com.disney.disneyplus&hl=en_US" target="_blank">Google Play Store</a> {{ $t('and-5-2') }}<br/>
        {{ $t('last-step') }}</p>
        <img class="s" src="../assets/and-4.png" alt="">
      </div>
      <div class="done"><h4>🎉 {{ $t('done') }}</h4></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Android',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<style lang="scss">
  #nav {
    .btn {
      color: rgba($color: #fff, $alpha: .4);
       &::before {
        opacity: .4 !important;
      }
    }
  }
  #nav a.router-link-exact-active {
    color: rgba($color: #fff, $alpha: 1);
    &::before {
      opacity: 1 !important;
    }
  }
</style>
