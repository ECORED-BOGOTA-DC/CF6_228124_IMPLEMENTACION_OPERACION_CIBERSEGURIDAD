<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Cifrado
    .row.align-items-center
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema7/img1.jpg', style="width: 450px" ,alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p Los controles de cifrado de información se han convertido en un elemento de gran importancia para la gestión de la seguridad de la información, ya que permite proteger la privacidad de la misma al evitar que esta sea interpretada por personas no autorizadas.
        .tarjeta.color-primario1.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema7/img1.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.text-white.mb-1 #[b Cifrado]
                  p.text-white.text-small.mb-0 Para profundizar en los aspectos conceptuales, operativos y funcionales del “cifrado”, correspondiente a este componente formativo, estudie atentamente  el contenido.
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Anexo_1_Cifrado.pdf')" target="_blank")
                    span(style="color: #000 !important") Descargar
                    i.fas.fa-file-download(style="color: #000 !important")


</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
