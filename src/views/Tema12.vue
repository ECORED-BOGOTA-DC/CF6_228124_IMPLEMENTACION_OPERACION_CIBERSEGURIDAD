<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 12
      h1 Mejoras de ciberseguridad en infraestructuras
    .row.align-items-center
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema12/img1.jpg', style="width: 450px" ,alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p Para la gestión de las infraestructuras críticas, dada su complejidad, es importante contar con un marco que le permita realizar una mejora continua a su nivel de seguridad. El NIST (National Institute of Standards and Technology) en el año 2018 publicó el #[i Framework for Improving Critical Infrastructure Cybersecurity], con el cual busca promover una adecuada gestión de los riesgos de la ciberseguridad en las organizaciones, adoptando las mejores prácticas de ISO, ITU, CIS, NIST, entre otros.
        .tarjeta.color-primario1.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema7/img1.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.text-white.mb-1 #[b Mejoras de ciberseguridad en infraestructuras]
                  p.text-white.text-small.mb-0 Estudie en detalle y profundice en los aspectos más importantes en el proceso de gestión de los riesgos de la ciberseguridad en las organizaciones.
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Anexo_2_MejorasDeCiberseguridadEnInfraestructuras.pdf')" target="_blank")
                    span(style="color: #000 !important") Descargar
                    i.fas.fa-file-download(style="color: #000 !important")

</template>

<script>
export default {
  name: 'Tema12',
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
