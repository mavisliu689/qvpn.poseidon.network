<template>
  <ul>
    <!-- <li v-for="locale in locales" :key="locale" :value="locale" @click="switchLocale(locale)">{{ locale }}</li> -->
    <li :key="'en'" :value="'en'" @click="switchLocale('en')" id="en">EN</li>
    <li :key="'zh-tw'" @click="switchLocale('zh-tw')" id="zh">中文</li>
  </ul>
</template>

<script>
export default {
  name: 'LocaleSwitcher',
  data () {
    return {
      locales: [
        'en',
        'zh-tw'
      ]
    }
  },
  methods: {
    switchLocale (locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale
      }
      this.$i18n.locale = locale
      let currentPage = window.location.href.split('/').pop()
      if (currentPage === 'en' || currentPage === 'zh-tw') {
        currentPage = ''
      }
      // this.$router.push({ path: `/${locale}/DisneyPlus/${currentPage}` })
      // this.$router.push({ path: `/${locale}/${currentPage}` })
    },
    mounted () {
      this.currentLanguage = this.$i18n.locale
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  display: flex;
  align-items: center;
  li {
    color: white;
    text-decoration: none;
    list-style-type: none;
    opacity: 0.6;
    margin-right: 0.4rem;
    transition: all 300ms;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
}
.active {
  opacity: 1;
}
</style>
