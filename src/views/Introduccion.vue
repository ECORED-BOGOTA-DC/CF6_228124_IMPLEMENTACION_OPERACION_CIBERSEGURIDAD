<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el ejercicio de implementación de las estrategias de seguridad se debe partir de los objetivos de seguridad propuestos, así como de la declaración de privacidad, lo cual indica los controles que habrían de ser adoptados en la organización y con ello, garantizar la seguridad de la información.
          br
          br
          | En este componente formativo podrá hacer un recorrido por algunas técnicas y herramientas, según el modelo y los estándares técnicos, que respondan de manera pertinente a la planificación en su organización, a la vez que profundiza en ellas.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
