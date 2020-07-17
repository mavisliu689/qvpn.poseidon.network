<template>
  <div class="home">
    <h3>👆🏻 {{ $t('home-select') }}</h3>
    <p>{{ $t('home-intro') }}</p>
    <img src="../assets/disney-logo-dark.svg" alt />
    <!-- assets -->
    <div class="images">
      <img src="../assets/windows-1-tw.png" alt />
      <img src="../assets/windows-2-tw.png" alt />
      <img src="../assets/windows-3-tw.png" alt />
      <img src="../assets/windows-4-tw.png" alt />
      <img src="../assets/title-tw.svg" alt />
      <img src="../assets/macos-1-tw.gif" alt />
      <img src="../assets/macos-2-tw.gif" alt />
      <img src="../assets/macos-3-tw.png" alt />
      <img src="../assets/windows-1.png" alt />
      <img src="../assets/windows-2.png" alt />
      <img src="../assets/windows-3.png" alt />
      <img src="../assets/windows-4.png" alt />
      <img src="../assets/title.svg" alt />
      <img src="../assets/macos-1.gif" alt />
      <img src="../assets/macos-2.gif" alt />
      <img src="../assets/macos-2.png" alt />
      <img src="../assets/ios-1.png" alt />
      <img src="../assets/ios-2.png" alt />
      <img src="../assets/ios-3.png" alt />
      <img src="../assets/and-1-tw.png" alt />
      <img src="../assets/and-2-tw.png" alt />
      <img src="../assets/and-3-tw.png" alt />
      <img src="../assets/and-1.png" alt />
      <img src="../assets/and-2.png" alt />
      <img src="../assets/and-3.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Jelly-Boo-for-Disney-Plus',
  props: {
    msg: String
  },
  data () {
    return {
      title: 'Jelly Boo for Disney Plus',
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
  }
}
</script>

<style scoped lang="scss">
h3 {
  font-size: 30px;
}
p {
  opacity: 0.6;
}
#nav {
  .btn {
    color: rgba($color: #fff, $alpha: 0.3);
  }
}
#nav a.router-link-exact-active {
  color: rgba($color: #fff, $alpha: 1);
  &::before {
    opacity: 1 !important;
  }
}
.images {
  display: none;
}
</style>
