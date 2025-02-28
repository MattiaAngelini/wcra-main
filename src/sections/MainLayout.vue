<script>
import { currentWindow } from '../assets/styles/partials/breakpoint.js';
export default {
  name: 'Hero',

  data(){
        return{
            sizeWindow: currentWindow(window.innerWidth),       
        }
    },
}
</script>

<template>

    <section class=" d-lg-flex p-3">

        <div class="d-flex cards">
            <div class="ms-card">
                <img src="../../public/tatami.jpg" alt="">
            </div>

            <div class="ms-card">
                <img src="../../public/maestro.webp" alt="">
            </div>

        </div>
        

        <div class="d-flex cards">
            <div class="ms-card">
                <img src="../../public/team.webp" alt="">
            </div>

            <div class="ms-card">
                <img src="../../public/sala.jpg" alt="">
            </div>

        </div>
        

    </section>

</template>

<style scoped lang="scss">

section{
    max-height: 100vh;
}

.cards{
    width: 100%;
    
}

.ms-card{
    width: 100%;

    img{
        width: 100%;
        height: 80vh;
        padding: 1%;
    }

}


</style>
