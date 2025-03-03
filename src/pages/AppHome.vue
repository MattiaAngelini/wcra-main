<script>
import AnimatedSection from '../components/AnimatedSection.vue';
import MainLayout from '../sections/MainLayout.vue';

export default {
  name: 'AppHome',

  components: {
    AnimatedSection,
    MainLayout
  }
}
</script>

<template>
      <AnimatedSection>
        <MainLayout></MainLayout>
      </AnimatedSection>
</template>

<style scoped lang="scss">




</style>
