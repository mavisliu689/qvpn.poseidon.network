<template>
  <div class="view windows">
    <h3 class="title"><img src="../assets/windows-dark.svg" alt=""> Windows</h3>
    <div class="hr"></div>
    <div class="content">
      <div class="wrap">
        <h3><span class="number">1</span>{{ $t('windows-1-title') }}</h3>
        <p class="info">{{ $t('windows-1-1') }}: <a href="https://github.com/2dust/v2rayN/releases/download/3.19/v2rayN-Core.zip" target="_blank"> v2rayN.zip</a></p>
        <br><div class="caution">{{ $t('windows-1-2') }}</div>
      </div>
      <div class="wrap">
        <h3><span class="number">2</span>{{ $t('windows-2-title') }}</h3>
        <p class="info">
          {{ $t('windows-2-1') }}<br>
          {{ $t('windows-2-2') }}
        </p>
        <img :src="`${$t('images.windows-1')}`" alt="">
      </div>
      <div class="wrap">
        <h3><span class="number">3</span>{{ $t('config-1') }}</h3>
        <div class="config">
          <h3>{{ $t('config-2') }}</h3>
          <div class="input" id="copy-input" v-on:click="Copy">
            <div id="copy">{{ $t('config-3') }}</div>
            <div class="input-text">vmess://eyJwb3J0IjoiMzI0NDMiLCJwcyI6IkRpc25leVBsdXNfVVMiLCJ0bHMiOiJub25lIiwiaWQiOiI1MzFkNTBjMS0zODU1LTQ3MDMtOTRkYi1hNWQyM2Y5ZWU2ZDYiLCJhaWQiOiI2NCIsInYiOiIyIiwiaG9zdCI6IiIsInR5cGUiOiJub25lIiwicGF0aCI6IiIsIm5ldCI6InRjcCIsImFkZCI6ImRpc25leXBsdXMuM3EudmMifQ==</div>
          </div>
        </div>
      </div>
      <div class="wrap">
        <h3><span class="number">4</span>{{ $t('windows-4-title') }}</h3>
        <img :src="`${$t('images.windows-2')}`" alt="">
      </div>
      <div class="wrap">
        <h3><span class="number">5</span>{{ $t('windows-5-title') }}</h3>
        <p class="info">{{ $t('windows-5-1') }}</p>
        <img :src="`${$t('images.windows-3')}`" alt="">
      </div>
      <div class="wrap">
        <h3><span class="number">6</span>{{ $t('windows-6-title') }}</h3>
        <img :src="`${$t('images.windows-4')}`" alt="">
      </div>
      <div class="wrap">
        <h3><span class="number">7</span>{{ $t('last-step-title') }}</h3>
        <p class="info">{{ $t('go-to') }} <a href="https: //www.disneyplus.com/home" target="_blank">Disney+</a> {{ $t('last-step-account') }} <br> {{ $t('last-step') }}</p>
        <img src="../assets/macos-4.png" alt="">
      </div>
      <div class="done"><h4>🎉 {{ $t('done') }}</h4></div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'Copy',
  methods: {
    Copy () {
      CopyToClipboard('vmess://eyJwb3J0IjoiMzI0NDMiLCJwcyI6IkRpc25leVBsdXNfVVMiLCJ0bHMiOiJub25lIiwiaWQiOiI1MzFkNTBjMS0zODU1LTQ3MDMtOTRkYi1hNWQyM2Y5ZWU2ZDYiLCJhaWQiOiI2NCIsInYiOiIyIiwiaG9zdCI6IiIsInR5cGUiOiJub25lIiwicGF0aCI6IiIsIm5ldCI6InRjcCIsImFkZCI6ImRpc25leXBsdXMuM3EudmMifQ==', true, 'Copied!')
      $('#copy').html('Copied!')
      setTimeout(function () { $('#copy').html('Tab to copy') }, 1600)

      function CopyToClipboard (value, showNotification, notificationText) {
        var $temp = $('<input>')
        $('body').append($temp)
        $temp.val(value).select()
        document.execCommand('copy')
        $temp.remove()

        if (typeof showNotification === 'undefined') {
          showNotification = true
        }
        if (typeof notificationText === 'undefined') {
          notificationText = 'Copied to clipboard'
        }

        var notificationTag = $('div.copy-notification')
        if (showNotification && notificationTag.length === 0) {
          notificationTag = $('<div/>', { class: 'copy-notification', text: notificationText })
          $('body').append(notificationTag)

          notificationTag.fadeIn(function () {
            setTimeout(function () {
              notificationTag.fadeOut(function () {
                notificationTag.remove()
              })
            }, 800)
          })
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
<style scoped lang="scss">

</style>
