<template>
  <div class="view ios">
    <h3 class="title"><img src="../assets/ios-dark.svg" alt=""> iOS</h3>
    <div class="hr"></div>
    <div class="content">
      <div class="wrap">
        <h3><span class="number">1</span>{{ $t('ios-1-title') }}</h3>
        <p class="info">{{ $t('ios-1-1') }}: <a href="https://apps.apple.com/tw/app/shadowrocket/id932747118" target="_blank">Apple Store</a></p>
      </div>
      <div class="wrap">
        <h3><span class="number">2</span>{{ $t('ios-2-title') }}</h3>
        <img class="s" src="../assets/qrcode.png" alt="">
      </div>
      <div class="wrap">
        <h3><span class="number">3</span>{{ $t('ios-3-title') }}</h3>
        <p class="info">
          {{ $t('ios-3-1') }}<br>
          {{ $t('ios-3-2') }}
        </p>
        <img class="s" :src="`${$t('images.ios-1')}`" alt="">
      </div>
      <div class="wrap">
        <h3><span class="number">4</span>{{ $t('ios-4-title') }}</h3>
        <img class="s" :src="`${$t('images.ios-1')}`" alt="">
      </div>
      <div class="wrap">
        <h3><span class="number">5</span>{{ $t('ios-5-title') }}</h3>
        <img class="s" :src="`${$t('images.ios-1')}`" alt="">
      </div>
      <div class="wrap">
        <h3><span class="number">6</span>{{ $t('ios-6-title') }}</h3>
        <div class="caution">{{ $t('ios-6-1') }}</div>
        <p class="info">{{ $t('go-to') }} <a href="https://apps.apple.com/us/app/disney/id1446075923" target="_blank">Apple Store</a> {{ $t('ios-6-1') }} <br> {{ $t('last-step') }}</p>
        <img class="s" src="../assets/ios-3.png" alt="">
      </div>
      <div class="done"><h4>🎉 {{ $t('done') }}</h4></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'iOS',
  props: {
    msg: String
  },
  data () {
    return {
      title: 'QVPN - iOS'
    }
  }
}
</script>

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
