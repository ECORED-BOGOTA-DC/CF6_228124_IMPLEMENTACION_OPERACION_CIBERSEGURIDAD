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
          p.mb-0 #[b Figura 3.] Fases para la gestión de parches y/o actualizaciones
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema15/img2.jpg', style="width: 650px" ,alt='Imagen que relaciona las fases de la gestión de parches, las cuales son: - Despliegue - Identificación de activos y software base - Disponibilidad - Aplicabilidad - Adquisición - Validación').m-auto
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


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .row.justify-content-center.align-items-center
          .col-10.col-lg-2
            figure
              img(src='@/assets/curso/tema15/img5.svg', alt='Imágen decorativa')
          .col-lg-8
            h4 Recomendaciones para la adecuada gestión de parches y actualizaciones:
            ul.lista-ul--separador
              li.d-flex
                i.fas.fa-check-circle(style="color: #8F52F5")
                | 
                p.mb-0 Buscar información de actualizaciones y descargarlas de sitios oficiales.
              li.d-flex
                i.fas.fa-check-circle(style="color: #8F52F5")
                |
                p.mb-0 Validar las actualizaciones de manera previa y posterior, para verificación de funcionalidad de los sistemas.
              li.d-flex
                i.fas.fa-check-circle(style="color: #8F52F5")
                |
                p.mb-0 Preferiblemente, realizar la instalación en ambiente de pruebas y posterior en producción.
              li.d-flex
                i.fas.fa-check-circle(style="color: #8F52F5")
                |
                p.mb-0 Siempre, mantener las actualizaciones al día de sus sistemas, a excepción de las documentadas por requerimientos técnicos o compatibilidades.

          .col-10.col-lg-2
            figure
              img(src='@/assets/curso/tema15/img6.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .row.justify-content-center.align-items-center
          .col-10.col-lg-2
            figure
              img(src='@/assets/curso/tema15/img7.svg', alt='Imágen decorativa')
          .col-lg-8
            h4 Recomendaciones para la adecuada gestión de parches y actualizaciones:
            ul.lista-ul--separador
              li.d-flex
                i.fas.fa-check-circle(style="color: #DE9F11")
                | 
                p.mb-0 Mantener los sistemas operativos, sistemas de información y aplicaciones de uso diario, actualizadas.
              li.d-flex
                i.fas.fa-check-circle(style="color: #DE9F11")
                |
                p.mb-0 Implemente soluciones para la automatización de actualizaciones generales como, por ejemplo, WSUS para sistemas Microsoft.
              li.d-flex
                i.fas.fa-check-circle(style="color: #DE9F11")
                |
                p.mb-0 Establezca horarios de actualizaciones automáticas que no afecten el desarrollo de las actividades laborales.

          .col-10.col-lg-2
            figure
              img(src='@/assets/curso/tema15/img8.svg', alt='Imágen decorativa')






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
