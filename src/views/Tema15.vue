<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 15
      h1 Parcheado y/o actualización
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-12.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema15/img1.jpg', style="width: 1100px" ,alt='').m-auto
      .col-lg-9.bg-c4
        .p-4
          p.mb-0 La gestión de las actualizaciones y parcheo de los sistemas de información o de los dispositivos de la organización se convierten en un factor fundamental para garantizar la seguridad de la información, ya que a partir de esta gestión se puede reducir amenazas por desactualización de sistemas y evitar que terceros puedan aprovecharla, como se muestra en la siguiente figura:
    .row.justify-content-center.mb-4
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.mb-0 #[b Figura 2.] Fases para la gestión de parches y/o actualizaciones
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema15/img2.jpg', style="width: 650px" ,alt='').m-auto
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema15/img3.jpg', style="width: 380px" ,alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p Los parches o  actualizaciones son cambios que se aplican a los sistemas de información, sistemas operativos o incluso dispositivos #[i hardware] con los cuales se busca corregir errores, vulnerabilidades o implementar mejoras de los sistemas.
        .cajon.color-primario.p-4
          p.mb-0 Para realizar una adecuada gestión de parches y/o actualizaciones se recomienda seguir metodologías apoyadas en soluciones que faciliten este trabajo. Tenga presentes las fases que se enuncian a continuación:
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        TabsA.color-acento-contenido
          .tarjeta.color-primario.p-4(titulo="Identificación de<br>activos y <i>software</i><br>base")
            .row
              .col-12
                p.mb-0 Mantener un inventario actualizado de los detalles de los activos de información, con el fin de determinar las actualizaciones correspondientes.
          .tarjeta.color-primario.p-4(titulo="Disponibilidad")
            .row
              .col-12
                p.mb-0 Identificar cuál parche específico, requerimientos y orden correspondiente debe aplicarse a cada uno de los sistemas y así evitar daños en sistemas por incompatibilidades.
          .tarjeta.color-primario.p-4(titulo="Aplicabilidad")
            .row
              .col-12
                p.mb-0 Verificar si la actualización es aplicable a cada sistema de información, ya que no siempre los parches son compatibles con todos los dispositivos.
          .tarjeta.color-primario.p-4(titulo="Adquisición")
            .row
              .col-12
                p.mb-0 Se recomienda que los archivos para la actualización o parcheo sean adquiridos a través de medios o fuentes confiables, preferiblemente de las casas productoras.
          .tarjeta.color-primario.p-4(titulo="Validación")
            .row
              .col-12
                p.mb-0 Se recomienda siempre realizar una validación previa y posterior a la actualización, con el fin de prevenir la pérdida de información o el no funcionamiento de dichos sistemas.
          .tarjeta.color-primario.p-4(titulo="Despliegue")
            .row
              .col-12
                p.mb-0 Realizar la programación de despliegue, incorporando los archivos necesarios y documentación sobre el proceso de implementación, así como la resolución de problemas más comunes.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema15/img4.jpg', style="width: 380px" ,alt='').m-auto
    figure(data-aos="fade-right")
      img(src='@/assets/curso/tema15/img1.svg', style="width: 1050px" ,alt='').m-auto

</template>

<script>
export default {
  name: 'Tema15',
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
