<script>
import AnimatedSection from '../components/AnimatedSection.vue';
import AppFooter from '../components/AppFooter.vue';
import AppHeader from '../components/AppHeader.vue';
import MainLayout from '../sections/MainLayout.vue';

export default {
  name: 'AppHome',

  components: {
    AnimatedSection,
    AppHeader,
    AppFooter,
    MainLayout
  }
}
</script>

<template>
  
      <AppHeader class="header"></AppHeader> 
      <AnimatedSection>
        <MainLayout></MainLayout>
      </AnimatedSection>

        <!-- <AnimatedSection>
          <AppFooter></AppFooter>
        </AnimatedSection> -->
        
</template>

<style scoped lang="scss">




</style>
