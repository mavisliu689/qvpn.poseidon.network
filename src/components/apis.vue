<template>
  <div id="apis">
    <img src="@/assets/Try-it.svg" alt="">
    <h3>Put some link in, let me Jelly it!</h3>
    <!-- 輸入url區塊 START -->
    <div class="url-wrap" id="url-status-one">
      <input type="url" name="" id="" placeholder="https://im-the-website-that-get-blocked" v-model="customLink">
      <!-- <button v-on:click="jellyIt">DO IT</button> -->
      <button @click="createReverseProxy()">DO IT</button>
    </div>
    <!-- 輸入url區塊 END -->
    <!-- 生成URL 區塊 START -->
    <div id="url-status-two">
      <div class="url-wrap">
        <input type="url" name="" id="outComeURL" :value="serverName">
        <button id="copyurl" @click="copyURL">COPY</button>
      </div>
      <div class="row">Original URL: <a href="">{{customLink}}</a></div>
      <div class="row" id="rules">You Can Create Other Unblock URL After (30).</div>
      <div class="row">Create Other<a href="">Unblock URL.</a></div>
      <div class="row"><a href="" id="report">Can’t open the link?</a></div>
    </div>
    <!-- 生成URL 區塊 END -->
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'apis',
  props: {
    msg: String
  },
  data () {
    return {
      title: 'Jelly Boo API',
      service: 'v2ray',
      availableService: '',
      customLink: ''
    }
  },
  computed: {
    domains () {
      return this.$store.state.service.domains
    },
    serverName () {
      return this.$store.state.service.serverName
    }
  },
  methods: {
    fetchDomainbyService () {
      return this.$store.dispatch('service/fetchDomainByService', { service: this.service })
    },
    async fetchInitialData () {
      await this.fetchDomainbyService()
    },
    async createReverseProxy () {
      await this.$store.dispatch('service/createReverseProxy', {
        proxyPass: this.customLink,
        serviceName: this.availableService
      })
    },
    copyURL () {
      $('#outComeURL').execCommand('copy')
    }
  },
  created () {
    this.fetchInitialData()
  },
  watch: {
    domains: function (val) {
      val.map(domain => {
        if (domain.domain === 'disney.3qqq.io' && domain.launcher_count > 0) {
          this.availableService = domain.domain
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
