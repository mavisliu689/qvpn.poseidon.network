<template>
  <div id="app">
    <a href="https://github.com/poseidon-network/qlauncher-linux" target="_blank" id="note">
     💝 {{ $t('note') }} <div class="btn">{{ $t('note-btn') }} 🎁</div>
    </a>
    <div id="junbo">
      <LocaleSwitcher />
      <img :src="`${$t('images.title')}`" alt="" class="title">
      <a href="#nav" class="purple-btn" id="scroll" v-smooth-scroll>{{ $t('intro-btn') }}</a>
      <span class="poweredby">⚡ by Poseidon-Network</span>
      <img src="./assets/blob-p.svg" alt="" class="blob-p">
      <img src="./assets/blob-g.svg" alt="" class="blob-g">
    </div>
    <div id="nav">
      <h2>Choose Your Device</h2>
      <router-link class="btn" data-icon="1" to="/DisneyPlus/MacOS"><span>MacOS</span></router-link>
      <router-link class="btn" data-icon="2" to="/DisneyPlus/Windows"><span>Windows</span></router-link>
      <router-link class="btn" data-icon="3" to="/DisneyPlus/iOS"><span>iOS</span></router-link>
      <router-link class="btn" data-icon="4" to="/DisneyPlus/android"><span>Android</span></router-link>
    </div>
    <router-view/>
    <div class="giveaway">
      <h3>{{ $t('footer-title') }}</h3>
      <h4>{{ $t('footer-dis') }}</h4>
      <a href="" class="purple-btn" id="telegram" v-on:click="telegramURL">{{ $t('footer-btn') }}</a>
      <div class="bg-elements">
        <span class="triangle triangle-1"></span>
        <span class="triangle triangle-2 grey"></span>
        <span class="circle circle-1"></span>
        <span class="circle circle-2"></span>
        <span class="circle circle-outline circle-3"></span>
        <span class="circle circle-outline circle-4"></span>
        <span class="circle circle-half grey"></span>
      </div>
    </div>
    <footer>
      Powered by <a target="_blank" href="">Poseidon-Network</a>
    </footer>
  </div>
</template>

<script>
import LocaleSwitcher from '@/components/LocaleSwitcher.vue'
import $ from 'jquery'
import vueSmoothScroll from 'vue2-smooth-scroll'
import Vue from 'vue'

Vue.use(vueSmoothScroll)

export default {
  name: 'APP',
  components: {
    LocaleSwitcher
  },
  methods: {
    telegramURL () {
      if (window.navigator.language === 'zh-CN' || window.navigator.language === 'zh-TW') {
        $('#telegram').attr('href', 'https://t.me/QQQ_Poseidon_zh')
        window.location.href = 'https://t.me/QQQ_Poseidon_zh'
      } else {
        $('#telegram').attr('href', 'https://t.me/QQQ_Poseidon_En')
        window.location.href = 'https://t.me/QQQ_Poseidon_En'
      }
    }
  }
}
</script>

<style lang="scss">
@import './style.scss';
#nav a.router-link-exact-active {
  color: rgba($color: #fff, $alpha: 1);
  &::before {
    opacity: 1 !important;
  }
}
html,body {
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', sans-serif, Helvetica, Arial, sans-serif;
  overflow-x: hidden;
  background: $light-bg;
}
.view {
  background: $light-bg;
}
.purple-btn {
  background: $purple-dra;
  border-radius: 6px;
  max-width: 300px;
  margin: auto;
  padding: 25px 48px;
  color: white;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: .2px;
  font-weight: 15px;
  margin-top: 4rem;
  z-index: 2;
  transition: all 300ms;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px) scale(1.08);
  }
}
#note {
  background: radial-gradient(80.01% 440.45% at 3.16% 0%, #6688FF 0%, #9440FF 100%);
  color: white;
  padding: .8rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: .2px;
  .btn {
    background: white;
    color: #9144FF;
    font-weight: 600;
    font-size: 13px;
    padding: .3rem .5rem .4rem .5rem;
    border-radius: 3px;
    margin-left: 1rem;
    @include breakpoint($tablet) {
      margin-left: 0rem;
      margin-top: .4rem;
    }
  }
  @include breakpoint($tablet) {
    padding-top: .4rem;
    padding-bottom: .6rem;
  }
  &:hover {
    .btn {
      animation: shake 250ms linear;
      animation-iteration-count: 2;
    }
  }
}
#junbo {
  background: $dark;
  display: flex;
  flex-direction: column;
  padding-top: 6rem;
  padding-bottom: 14rem;
  position: relative;
  overflow: hidden;
  .poweredby {
    font-size: 12px;
    margin-top: 1rem;
    z-index: 2;
  }
  @include breakpoint($small) {
    padding-bottom: 10rem;
  }
  .title {
    z-index: 2;
    @include breakpoint($tablet) {
      max-width: 90%;
      margin: auto;
    }
  }
  .blob-p,.blob-g {
    position: absolute;
  }
  .blob-p {
    top: 160px;
    right: -2rem;
  }
  .blob-g {
    top: 0;
    left: -50px;
  }
}
#app {
  text-align: center;
  color: #2c3e50;
  @include breakpoint($tablet) {
  }
}

#nav {
  padding: 30px;
  margin: auto;
  margin-top: -12rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 85%;
  max-width: 1440px;
  h2 {
    color: white;
    width: 100%;
    margin-bottom: 3rem;
    z-index: 2;
    @include breakpoint($small) {
      font-size: 16px;
      margin-bottom: 1rem;
    }
  }
  .btn {
    width: 16%;
    background: $purple-dra;
    border-radius: 45px 45px 45px 5px;
    color: rgba($color: #fff, $alpha: 1);
    padding: 3rem 2rem;
    text-decoration: none;
    font-weight: 500;
    font-size: 20px;
    min-width: 200px;
    margin-bottom: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 300ms;
    span {
      margin-left: 12%;
    }
    @for $i from 1 through 4 {
      &[data-icon="#{$i}"] {
        &::before {
          content: url('./assets/icon-#{$i}.svg');
          left: 10%;
          position: absolute;
          opacity: 1;
          @include breakpoint($tablet) {
            left: 5%;
            transform: scale(.5);
          }
          @include breakpoint($small) {
            left: 5%;
            transform: scale(.4);
          }
        }
      }
      &:hover {
        box-shadow: 0px 0px 25px rgba(118, 51, 204, 0.5);
        transform: translateY(-6px);
        @include breakpoint($tablet) {
          box-shadow: none;
          transform: translateY(0);
        }
      }
    }
    @include breakpoint($tablet) {
      width: 45%;
      min-width: 150px;
      padding: 2rem 0rem;
      border-radius: 30px 30px 30px 5px;
      font-size: 15px;
    }
    @include breakpoint($small) {
      width: 48%;
      min-width: 80px;
      padding: 1.2rem 0rem;
      border-radius: 20px 20px 20px 5px;
      font-size: 15px;
      span {
        transform: scale(.8);
      }
    }
  }
  @include breakpoint($tablet) {
    width: 90%;
    padding: 30px 0;
  }
  @include breakpoint($small) {
    width: 95%;
    padding: 30px 0 0px 0;
    margin-top: -10rem;
  }
}

.giveaway {
  background: white;
  width: 100%;
  margin: auto;
  padding: 7rem 0 8rem 0;
  position: relative;
  h3 {
    position: relative;
    font-size: 30px;
    font-weight: 600;
    background: $purple-to-blue;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
    z-index: 5;
  }
  h4{
    position: relative;
    font-size: 18px;
    margin: 2rem 0 3rem 0;
    z-index: 5;
  }
  @include breakpoint($tablet) {
    h3 {
      font-size: 24px;
    }
    h4 {
      font-size: 15px;
    }
  }
  .purple-btn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    max-width: 240px;
    margin: auto;
    padding: 18px 36px;
    z-index: 2;
    transition: all 300ms;
    &::before {
      content: url('./assets/telegram.svg');
      margin-right: 1rem;
    }
    @include breakpoint($tablet) {
      max-width: 75%;
      padding: 12px 36px;
      &:hover {
        transform: none;
      }
    }
  }
  .bg-elements {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
  .triangle {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 18px 32px 18px;
    position: absolute;
    &-1 {
      border-color: transparent transparent #ffd874 transparent;
      top: 15%;
      right: 20%;
      animation: rotate2 4s infinite linear;
    }
    &-2 {
      border-color: transparent transparent #f0f0f0 transparent;
      top: 50%;
      left: 15%;
      animation: rotate2 15s infinite linear;
    }
  }
  .circle {
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    position: absolute;
    @include breakpoint($tablet) {
      width: 20px;
      height: 20px;
    }
    &-1 {
      background: #FF7495;
      top: 20%;
      left: 20%;
      animation: ttob 2s infinite;
      @include breakpoint($tablet) {
        top: 10%;
        left: 10%;
      }
    }
    &-2 {
      background: #f0f0f0;
      bottom: 12%;
      right: 33%;
    }
    &-outline {
      border: 5px solid #406AFF;
      box-sizing: border-box;
      &.circle-3 {
        border-color: #FF7495;
        bottom: 40%;
        right: 15%;
        transition: all 300ms;
        animation: ltor 2s infinite;
        @include breakpoint($tablet) {
          display: none;
        }
      }
      &.circle-4 {
        width: 26px;
        height: 26px;
        bottom: 20%;
        left: 24%;
        animation: rotate3 3s infinite linear;
        transform-origin: top left;
        @include breakpoint($tablet) {
          bottom: 10%;
          left: 14%;
        }
      }
    }
    &-half {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
      background: #F0F0F0;
      height: 20px;
      width: 35px;
      top: 58%;
      right: 26%;
      opacity: .6;
      transform: rotate(135deg);
      animation: rotate 3s infinite;
    }
  }
  &.grey {
    background: #F0F0F0;
  }
}

footer {
  background: $dark;
  font-size: 12px;
  color: #888;
  padding: 1rem;
  a {
    color: $green;
    text-decoration: none;
  }
}
</style>
