<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 10
      h1 Guía NIST-SP800-114
    .row
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema10/img1.jpg', style="width: 350px" ,alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p Los procesos de ciberseguridad y seguridad de la información cuentan con orientaciones de las políticas internas de las organizaciones, las leyes vigentes de cada país, diferentes  a las normas técnicas internacionales y guías.
        .cajon.color-primario.p-4
          p.mb-0 Por su parte, el Instituto NIST ofrece la guía NIST-SP800-114 para el aseguramiento de actividades realizadas bajo la modalidad de teletrabajo y la adopción de la filosofía BYOD para el desarrollo de las actividades contractuales.
    Separador
    #t_10_1
    .titulo-segundo.color-acento-contenido
      h2 10.1 Aspectos importantes de la guía
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema10/img2.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La guía se encuentra estructurada por secciones que abordan los conceptos y las recomendaciones para la implantación de controles.
    p.mb-5(data-aos="fade-right") Las secciones destacadas de la guía y que ofrecen orientaciones fundamentales para los procesos de seguridad son:
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema10/img1.svg', style="width: 350px" ,alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        ul.lista-ul--separador
          li.d-flex
            i.fas.fa-check-circle(style="color: #8F52F5")
            |
            p.mb-0 #[b La sección 2] proporciona una descripción general del teletrabajo, el acceso remoto y una introducción a los problemas de seguridad relacionados con los dispositivos de teletrabajo.
          li.d-flex
            i.fas.fa-check-circle(style="color: #8F52F5")
            |
            p.mb-0 #[b La sección 3] proporciona pautas sobre cómo proteger la información almacenada o enviada desde o hacia dispositivos de teletrabajo.
          li.d-flex
            i.fas.fa-check-circle(style="color: #8F52F5")
            |
            p.mb-0 #[b La sección 4] presenta recomendaciones para proteger las redes domésticas alámbricas e inalámbricas que se utilizan para el teletrabajo.
          li.d-flex
            i.fas.fa-check-circle(style="color: #8F52F5")
            |
            p.mb-0 #[b La sección 5] trata sobre la protección de las computadoras personales (PC) BYOD, a través de métodos como la aplicación de actualizaciones de software, la instalación y configuración de software antivirus y firewalls personales.
          li.d-flex
            i.fas.fa-check-circle(style="color: #8F52F5")
            |
            p.mb-0 #[b La sección 6] ofrece una descripción general de la protección de dispositivos móviles BYOD.
    p.text-center #[b Si la organización tiene implementado modalidad de teletrabajo, se recomienda tener presente esta guía.]
    Separador
    #t_10_2
    .titulo-segundo.color-acento-contenido
      h2 10.2 Seguridad en el teletrabajo
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-12.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema10/img3.jpg', style="width: 1100px" ,alt='').m-auto
      .col-lg-9.bg-c4
        .p-4
          p.mb-0 Las organizaciones actualmente vienen habilitando las posibilidades para que su personal pueda desarrollar sus actividades sin que necesariamente se encuentren en la sede física, atendiendo, además, la reglamentación legal y laboral, estas deben garantizar que los empleados cuenten con los recursos necesarios para el desarrollo de sus actividades, entre estas se encuentran las condiciones de seguridad.
    p.text-center.mb-5(data-aos="fade-down") #[b Por lo anterior, se sugiere considerar las siguientes recomendaciones adicionales para el desarrollo de actividades bajo la modalidad de teletrabajo.]
    .row.align-items-center
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        .row.mb-4
          .col-lg-4.mb-4.mb-lg-0
            .tarjeta-numerada.color-secundario.shadow.p-4
              .tarjeta-numerada__numero
                .h2 1
              p.mb-0 Uso de equipos adecuados.
          .col-lg-8
            .tarjeta-numerada.color-acento-contenido.shadow.p-4
              .tarjeta-numerada__numero
                .h2 2
              p.mb-0 Garantizar el acceso a la información, de acuerdo con las condiciones y controles de seguridad anteriormente nombrados.
        .row.mb-4
          .col-lg-6.mb-4.mb-lg-0
            .tarjeta-numerada.color-acento-botones.shadow.p-4
              .tarjeta-numerada__numero
                .h2 3
              p.mb-0 Contar con mecanismos de conexión segura, evitando hacer uso de canales abiertos y públicos.
          .col-lg-6
            .tarjeta-numerada.color-acento-contenido.shadow.p-4
              .tarjeta-numerada__numero
                .h2 4
              p.mb-0 Proveer de herramientas actualizadas contra malware.
        .row
          .col-lg-6.mb-4.mb-lg-0
            .tarjeta-numerada.color-secundario.shadow.p-4
              .tarjeta-numerada__numero
                .h2 5
              p.mb-0 Mantener un monitoreo permanente del tráfico de la red donde se encuentran los activos de información.
          .col-lg-6
            .tarjeta-numerada.color-acento-botones.shadow.p-4
              .tarjeta-numerada__numero
                .h2 6
              p.mb-0 Contar con políticas de seguridad implementadas e informadas a todo el personal.
      .col-lg-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema10/img4.jpg', style="width: 350px" ,alt='').m-auto

</template>

<script>
export default {
  name: 'Tema10',
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
