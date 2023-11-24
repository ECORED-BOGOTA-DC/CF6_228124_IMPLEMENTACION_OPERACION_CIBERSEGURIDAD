<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 13
      h1 Sistemas de correlacionamiento de #[i logs] y monitoreo
    .row.align-items-center.mb-5
      .col-12.col-lg-auto.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema13/img1.svg', style="width: 250px" ,alt='').m-auto
      .col(data-aos="fade-left")
        p Los sistemas para el correlacionamiento de logs y monitoreo de la actividad que pasa sobre las redes y dispositivos permiten una visión actualizada del nivel de seguridad de los controles implementados. Mantener una vista del estado de la seguridad de una red requiere de herramientas que permitan representar fácilmente la información consolidada.
        .cajon.color-secundario.p-4
          p.mb-0 Tal información de monitoreo proviene de los activos de información y de los controles implementados, los cuales son los encargados de reportar las acciones realizadas.
    p.text-center.mb-5(data-aos="fade-up") #[b Estos son algunos conceptos y datos clave a tener en cuenta:]
    .tarjeta.tarjeta--azul(data-aos="fade-left")
      .p-4
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              p #[b Correlacionados de eventos / SIEM]
              p Estas soluciones especializadas brindan la capacidad de crear centros de monitoreo a partir de las fuentes de información recolectadas como, por ejemplo, registro de un servidor web, registros de auditoría de un servicio LDAP, etc.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema13/img1.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              p #[b Sensor]
              p Mecanismos encargados de monitorear el comportamiento de un servicio o de un dispositivo, permitiendo recolectar la información sobre algún comportamiento irregular, por ejemplo, un sensor para monitoreo de servicio web.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema13/img2.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              p #[b IDS/IPS]
              p Estos sensores pueden ser IDS, IPS, sistemas de monitoreo, como, por ejemplo, Snort, Suricata, etc.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema13/img3.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              p #[b Dashboard]
              p También llamados tablero de control, es una herramienta visual que representa mediante gráficas el estado actual de la red o puede presentar las alertas a las que se debe prestar atención.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema13/img4.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              p #[b Registro log]
              p Es un historial de registros de eventos ordenados en orden cronológico y almacenan la información de diferentes eventos como, por ejemplo, del sistema operativo, servicio o registro de autenticación desde una aplicación.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema13/img5.png', style="width: 450px" ,alt='').m-auto

</template>

<script>
export default {
  name: 'Tema13',
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
