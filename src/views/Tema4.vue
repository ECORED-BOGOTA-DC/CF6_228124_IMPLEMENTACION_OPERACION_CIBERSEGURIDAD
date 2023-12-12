<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Gestión unificada de amenazas UTM/XTM
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img1.jpg', style="width: 450px" ,alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p En el reconocimiento de soluciones para la gestión de la seguridad en organizaciones hay que mencionar un tipo de producto que ha venido abarcando un amplio campo, por el hecho de integrar en un solo dispositivo soluciones como las vistas hasta ahora en este componente (#[i firewalls], IDS, IPS).
        p.mb-0 Se trata del UTM (Unified Threat Management) o Gestión unificada de amenazas.  Con ellos están los XTM (Extensible UTM) o UTM Extendido, los cuales cubren las necesidades básicas más comunes, requeridas por las organizaciones en una única solución.
    p.mb-5(data-aos="fade-right") #[b Se presentan los aspectos generales más importantes y definitorios de estos productos (UTM/XTM):]
    .row
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="UTM, Gestión unificada de amenzas")
            .col-12
              p.mb-0 Integra otras soluciones que requieren las empresas; “consolida múltiples funciones de seguridad y redes con un appliance unificado, que protege a las empresas y simplifica la infraestructura”, permitiendo encontrar en una sola solución herramientas como: #[i firewall], IDS/IPS, antivirus, antimalware, filtrado antispam, filtrado web, acceso remoto seguro y una amplia variedad de reportes, simplificando la administración de este tipo de arquitecturas (FORTINET, 2021).
          .row(numero="2" titulo="XTM, por la seguridad perimetral")
            .col-12
              p.mb-0 XTM o UTM extendido permite ampliar capacidades del UTM, agregando en una única solución herramientas de logging, protección de la reputación, correlación de eventos, herramientas para control de acceso a la red, capacidad de gestión de vulnerabilidades, así como capacidad de gestión del ancho de banda de red y control de tráfico, extendiendo así, las capacidades de administrar de una mejor manera la seguridad perimetral.
          .row(numero="3" titulo="Particularidades")
            .col-12
              p.mb-0 Este tipo de soluciones han ganado un campo de aplicación por sus capacidades de ajustarse a casi cualquier tipo de organización, facilitando su implementación y administración. Las diferencias entre este tipo de dispositivos no son tan significativas a simple vista, se requiere de un análisis de las operaciones de análisis que puede realizar para identificar cuál es la más indicada para cada organización.
          .row(numero="4" titulo="Más sobre UTM/XTM")
            .col-12
              p.mb-0 Además de sus funciones de firewall, cuentan con herramientas como sistemas de prevención de intrusiones, antivirus, filtros de URL, red privada virtual (VPN), balanceo de enlaces, informes de seguridad, entre otros; este tipo de soluciones  pueden encontrarse en presentación de hardware como software; este modelo es muy recomendado para pequeñas organizaciones.
          .row(numero="5" titulo="NGFW")
            .col-12
              p.mb-0 Tipo de firewall que incorpora herramientas para el análisis de amenazas recientes, así como malware del que frecuentemente aparecen nuevas versiones y modalidades de ataques. Se recomienda para grandes organizaciones o aquellas que presentan gran cantidad de solicitudes y acceso a través de red. El NGFW, particularmente, puede realizar una inspección avanzada de paquetes y permite establecer políticas para gestionar el acceso seguro a los recursos.
          .row(numero="6" titulo="Características")
            .col-12
              p Los dispositivos UTM/XTM pueden realizar la gestión de la seguridad mediante la administración de tráfico, análisis de malware, control de aplicaciones y gestión de vlan.
              .row
                .col-auto
                  a.boton.color-secundario.indicador__container(@click="modal1 = true")
                    span.text-white Características y funcionalidades de los UTM/XTM
                    .indicador--click(v-if="mostrarIndicador") 
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img1.svg', style="width: 450px" ,alt='').m-auto
    ModalA(:abrir-modal.sync="modal1")
      .row.justify-content-center
        .col-auto
          figure
            img(src='@/assets/curso/tema4/img2.svg', style="width: 900px" ,alt='').m-auto

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    modal1: false,
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
