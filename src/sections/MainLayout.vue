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

<main>

    <section class=" d-lg-flex px-5">
        <div class="d-flex cards mb-xm-2">
            <div class="ms-card m-2">
                <img src="../../public/tatami.jpg" alt="">
                <div class="title">L'ACCADEMIA</div>
                <div class="shadow"></div>
            </div>

            <div class="ms-card  m-2">
                <img src="../../public/maestro.webp" alt="">
                <div class="title">IL MAESTRO</div>
                <div class="shadow"></div>
            </div>

        </div>


        <div class="d-flex cards ">
            <div class="ms-card  m-2">
                <img src="../../public/team.webp" alt="">
                <div class="title">I CORSI</div>
                <div class="shadow"></div>
            </div>

            <div class="ms-card  m-2">
                <img src="../../public/sala.jpg" alt="">
                <div class="title">LE SEDI</div>
                <div class="shadow"></div>
            </div>

        </div>
    </section>

    <!--Main Card-->
    <section class="p-5 mt-3">
            <div class="main-card m-2">
                <img src="../../public/team.webp" alt="">
                <div class="title">COMPETITION</div>  
                <div class="shadow"></div>     
            </div>

    </section>

</main>
</template>

<style scoped lang="scss">

.cards{
    .ms-card{
        width: 100%;
        position: relative;
        background-color: rgba(0,0,0,0.5);
    
        img{
            width: 100%;
            height: 80vh;
        }
    }

}

.main-card{
    position: relative;
    img{
        width: 100%;
        height: 100vh;
    }
}

.title{
            color: white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            font-size: 30px;
            z-index: 900;
        }

.shadow{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        }

</style>
