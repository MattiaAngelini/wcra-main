<script>

export default {
  name: 'AppFooter',
}
</script>

<template>

    <footer class="footer px-5 pb-5">   
      <div class="d-flex justify-content-between m-2">
        <router-link :to="{ name: 'contatti' }">CONTATTACI</router-link>

        <div>W.C.R.A. © 2025</div>
      </div>
     
    </footer>
   
</template>

<style scoped lang="scss">



</style>
