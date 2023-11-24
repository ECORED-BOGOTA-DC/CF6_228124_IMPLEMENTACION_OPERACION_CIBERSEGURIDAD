<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 11
      h1 Infraestructuras críticas
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema11/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es momento de abordar algunos conceptos importantes en el aseguramiento de infraestructuras críticas, aquellas que se han convertido en industrias de orden principal en el país. Se trata de aquellas “infraestructuras estratégicas que proporcionan servicios esenciales y cuyo funcionamiento es indispensable y no permite soluciones alternativas, por lo que su perturbación o destrucción tendría un grave impacto sobre los servicios esenciales” (LISA Institute, 2020).
    .row.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema11/img2.jpg', style="width: 480px" ,alt='').m-auto
      .col-lg-7(data-aos="fade-left")
        p Un Servicio esencial es aquel
        .bloque-texto-b.color-secundario.p-4.mb-3
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p Servicio necesario para el mantenimiento de las funciones sociales básicas, la salud, la seguridad, el bienestar social y económico de los ciudadanos, o el eficaz funcionamiento de las Instituciones del Estado y las Administraciones Públicas.
            i.fas.fa-quote-right
            p.d-flex.justify-content-end #[b - LISA Institute. (2020).]
        .cajon.color-secundario.p-4
          p.mb-0 Las infraestructuras críticas abordan sectores primordiales para el desarrollo de las regiones. En la siguiente herramienta visualice los diferentes ámbitos de las mismas y profundice en sus aspectos clave:
    ImagenInfografica.color-primario(data-aos="fade-right")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema11/img1.svg', alt='')
      .tarjeta.color-primario1.shadow-sm.p-3(x="12%" y="6%" numero="+")
        p.mb-0 TIC, ya sean infraestructuras críticas en sí mismas como redes de telecomunicaciones, o den servicio de información y comunicaciones a otras infraestructuras críticas.
      .tarjeta.color-primario1.shadow-sm.p-3(x="7%" y="19%" numero="+")
        p.mb-0 Aeropuertos, puertos, instalaciones intermodales, ferrocarriles y redes de transporte público, sistemas de control del tráfico.
      .tarjeta.color-primario1.shadow-sm.p-3(x="1%" y="33%" numero="+")
        p.mb-0 Sector e infraestructura sanitaria.
      .tarjeta.color-primario1.shadow-sm.p-3(x="4%" y="46%" numero="+")
        p.mb-0 Laboratorios que por su idiosincrasia dispongan o produzcan materiales, sustancias o elementos críticos o peligrosos.
      .tarjeta.color-primario1.shadow-sm.p-3(x="1%" y="61%" numero="+")
        p.mb-0 Producción, almacenamiento y transporte de mercancías peligrosas, materiales químicos, etc.
      .tarjeta.color-primario1.shadow-sm.p-3(x="9%" y="78%" numero="+")
        p.mb-0 Producción, almacenamiento y transporte de mercancías peligrosas, materiales nucleares, radiológicos, etc.
      .tarjeta.color-primario1.shadow-sm.p-3(x="89%" y="78%" numero="+")
        p.mb-0 Instalaciones relacionadas con el espacio exterior.
      .tarjeta.color-primario1.shadow-sm.p-3(x="97%" y="61%" numero="+")
        p.mb-0 Producción y distribución.
      .tarjeta.color-primario1.shadow-sm.p-3(x="100%" y="46%" numero="+")
        p.mb-0 Producción, almacenamiento y distribución.
      .tarjeta.color-primario1.shadow-sm.p-3(x="98%" y="33%" numero="+")
        p.mb-0 Servicios básicos, instalaciones, redes de información, principales activos y monumentos del patrimonio nacional.
      .tarjeta.color-primario1.shadow-sm.p-3(x="90%" y="19%" numero="+")
        p.mb-0 Embalses, almacenamiento, tratamiento y redes.
      .tarjeta.color-primario1.shadow-sm.p-3(x="87%" y="6%" numero="+")
        p.mb-0 Entidades bancarias, información, valores e inversiones.

</template>

<script>
export default {
  name: 'Tema11',
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
