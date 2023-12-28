<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 14
      h1 Gestión de eventos e información de seguridad SIEM
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema14/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Un SIEM es #[b “una solución híbrida centralizada que engloba la gestión de información de seguridad (Security Information Management) y la gestión de eventos (Security Event Manager)”] (INCIBE, 2020), como se muestra en la siguiente figura:
    .row.justify-content-center.mb-4
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.mb-0 #[b Figura 2.] Funcionalidades de un SIEM
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema14/img1.png', style="width: 950px" ,alt='Imagen que muestra el diagrama de las funcionalidades de un SIEM, el cual consta de: - Compliance - Analytics - Mobile protection - Threat protection - Management - Data protection - Endpoint protection - Network protection').m-auto

    p.mb-5(data-aos="fade-down") Descubra a continuación, los aspectos más importantes sobre la gestión de eventos de información de seguridad SIEM, sus esquemas lógicos, proveedores, entre otros.
    .row.align-items-center
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Esquema lógico de un SIEM")
            .col-12
              p La gráfica muestra cómo a partir de la ingesta o alimentación de fuentes de diferentes sistemas de información consigue realizar un procesamiento y correlación de patrones para generar una vista amigable.
              .row
                .col-auto
                  a.boton.color-secundario.indicador__container(@click="modal1 = true")
                    span.text-white Esquema lógico de un SIEM
                    .indicador--click(v-if="mostrarIndicador")
          .row(numero="2" titulo="Proveedores")
            .col-12
              p En la actualidad hay muchos proveedores para soluciones SIEM y de correlación de eventos. En la imagen conozca una serie de los productos más representativos. Tenga en cuenta que existen soluciones tanto comerciales como de licencia de #[i software libre].
              .row
                .col-auto
                  a.boton.color-secundario.indicador__container(@click="modal2 = true")
                    span.text-white Soluciones SIEM disponibles en el mercado
                    .indicador--click(v-if="mostrarIndicador") 
      .col-lg-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema14/img1.svg', style="width: 250px" ,alt='').m-auto
    ModalA(:abrir-modal.sync="modal1")
      .row.justify-content-center
        .col-auto
          figure
            img(src='@/assets/curso/tema14/img2.svg', style="width: 600px" ,alt='Imagen que muestra un esquema lógico de un SIEM, el cual contiene: 1. Inputs - datos de eventos y datos contexto 2. Outputs - análisis, informes y monitorización').m-auto
    ModalA(:abrir-modal.sync="modal2")
      .row.justify-content-center
        .col-auto
          figure
            img(src='@/assets/curso/tema14/img2.jpg', style="width: 850px" ,alt='Imagen que muestra soluciones SIEM disponibles en el mercado, se pueden apreciar logotipos de diferentes marcas que hacen alusión a estas soluciones.').m-auto

</template>

<script>
export default {
  name: 'Tema14',
  data: () => ({
    modal1: false,
    modal2: false,
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
