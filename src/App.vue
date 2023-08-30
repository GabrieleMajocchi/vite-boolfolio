<script>
import AppMain from './components/AppMain.vue';
export default {
  name: 'AppVue',
  components: {
    AppMain,
  },
}
</script>

<template>
  <div class="page">
    <AppMain/>
  </div>
</template>

<style lang="scss" scoped>
  @use './styles/partials/mixing.scss' as *;
  @use './styles/partials/variables.scss' as *;
  @import './styles/general.scss';
</style>