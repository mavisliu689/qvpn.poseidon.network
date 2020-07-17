<template>
  <div id="apis">
    <img src="@/assets/Try-it.svg" alt="">
    <h3>Put some link in, let me Jelly it!</h3>
    <!-- 輸入url區塊 START -->
    <div class="url-wrap" id="url-status-one">
      <input type="url" name="" id="" placeholder="https://im-the-website-that-get-blocked">
      <!-- <button v-on:click="jellyIt">DO IT</button> -->
      <button>DO IT</button>
    </div>
    <!-- 輸入url區塊 END -->
    <!-- 生成URL 區塊 START -->
    <div id="url-status-two">
      <div class="url-wrap">
        <input type="url" name="" id="outComeURL" value="valueee">
        <button id="copyurl" v-on:click="CopyURL">COPY</button>
      </div>
      <div class="row">Original URL: <a href="">https://im-the-website-that-get-blocked</a></div>
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
      service: 'v2ray'
    }
  },
  computed: {
    domains () {
      return this.$store.state.service.domains
    }
  },
  methods: {
    fetchDomainbyService () {
      return this.$store.dispatch('service/fetchDomainByService', { service: this.service })
    },
    async fetchInitialData () {
      await this.fetchDomainbyService()
    }
  },
  created () {
    this.fetchInitialData()
  },
  CopyURL () {
    $('#outComeURL').execCommand('copy')
  }
}
</script>
<style lang="scss" scoped>

</style>
