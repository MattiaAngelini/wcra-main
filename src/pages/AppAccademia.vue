<script>

export default {
  name: 'AppAccademia',

}
</script>


<template>
  <section>
    <h1 class="text-center p-3">Accademia</h1>

    <div class="container d-flex justify-content-center">
      <img class="tatamiPic" src="../../public/tatami.jpg" alt="">
    </div>

    <div class="d-flex justify-content-center align-items-center">
      <div style="width: 60%;" class="text-center">
        <h3>Massimizza il tuo potenziale</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium vitae excepturi error, 
          ùdoloribus ad libero perspiciatis minima, asperiores deserunt, 
          nulla explicabo sunt suscipit non laudantium quis. Nihil ratione iste odio!
        </p>

      </div>
    </div>

    <div class="container  d-flex justify-content-center">
      <video class="videoIntro" muted autoplay>
          <source src="../../public/video.mp4" type="video/mp4">
      </video>
    </div>


    <div class="d-flex justify-content-center align-items-center">

      <div style="width: 60%;" class="d-flex">
        <div style="width: 40%;">
          <h2>IL NOSTRO METODO</h2>
        </div>

      <div style="width: 60%;">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo cumque debitis nobis eaque nemo.
          Eum numquam ex est totam excepturi repellat voluptatem, aliquid harum a necessitatibus quaerat dolorem molestiae nihil
        </p>
      </div>

      </div>
     
    </div>

    <div class="d-flex justify-content-center align-items-center videoEnd">
      <video muted autoplay>
          <source src="../../public/mare.mp4" type="video/mp4">
      </video>

      <h3>Vieni a trovarci ecc...</h3>
    </div>

  </section>

  
</template>
  

<style scoped lang="scss">


section > div {
  min-height: 80vh;

}
.tatamiPic{
  width: 100%;
}

video{
  width: 100%;
}


.videoEnd{
  position: relative;

  h3{
    position: absolute;
    color: white;
    z-index: 900;
  }

}
.videoEnd::after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.8);
}

</style>
