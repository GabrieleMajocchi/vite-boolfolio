<script>
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'AppVue',
  components: {
    AppHeader,
  },
}
</script>

<template>
    <header>
      <AppHeader/>
    </header>
    
    <main>
      <router-view>
      </router-view>
    </main>

</template>

<style lang="scss" scoped>
  @use './styles/partials/mixing.scss' as *;
  @use './styles/partials/variables.scss' as *;
  @import './styles/general.scss';
</style>