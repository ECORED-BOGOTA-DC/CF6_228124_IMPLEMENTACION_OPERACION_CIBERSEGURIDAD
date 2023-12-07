<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 #[i Antimalware]
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En la actualidad es muy común escuchar del término #[i malware], pero puede no haber una definición clara del mismo; así como tampoco hay claridades unificadas sobre cómo combatirlo y evitar pérdidas o daños en los activos de información.
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p El #[i malware] es un término amplio que describe cualquier programa o código malicioso, dañino para los sistemas. Puede invadir sistemas de información intrusivamente, causando daños, pérdidas de información, si no se está preparado.
        p Existen varios tipos de #[i malware] y tienen un impacto diferente, dependiendo de su funcionamiento:
        figure
          img(src='@/assets/curso/tema5/img2.svg', style="width: 570px" ,alt='Ransomware, Spyware, Adware, Gusanos, Troyanos y Robots.')
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema5/img1.svg', style="width: 450px" ,alt='').m-auto
    p.text-center.mb-5(data-aos="fade-right") #[b Un dispositivo afectado por #[i malware] puede presentar síntomas que anuncian dicha situación de afección por programas maliciosos:]
    SlyderF.mb-5(columnas="col-md-6 col-xl-4")(data-aos="fade-down")
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/img3.svg' alt='AvatarTop')
        p Lentitud del dispositivo.
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/img4.svg' alt='AvatarTop')
        p Falta de espacio en el disco sin causa alguna.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/img5.svg' alt='AvatarTop')
        p Ejecución automática de programas o mensajes emergentes.
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/img6.svg' alt='AvatarTop')
        p Consumo excesivo de recursos (CPU, memoria RAM, tráfico de red, entre otros) sin razón alguna.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/img7.svg' alt='AvatarTop')
        p Otros comportamientos relacionados.
    .cajon.color-secundario.p-4.mb-5(data-aos="fade-right")
      p.mb-0 Como mecanismos de protección y para no sufrir afectaciones por este tipo de programas se recomienda el uso de tecnologías #[i antimalware], que en la actualidad vienen integradas a las soluciones de antivirus como Norton 360, Avast, Mcafee, Kaspersky.  También es posible encontrar soluciones independientes como Malwarebytes.
    .row.mb-5
      .col-12.bg-c3(data-aos="fade-left")
        .p-4
          figure
            img(src='@/assets/curso/tema5/img8.svg', style="width: 1050px" ,alt='Software Antimalware Autónomo: Este tipo de programa antimalware por lo general está enfocado en ciertos tipos de malware y se distribuye de manera independiente sin requerir de otros componentes para su funcionamiento; este tipo de soluciones son muy comunes para la recuperación de sistemas que ya han sido afectados. Paquetes de software de seguridad: Por lo general viene integrado a otras herramientas como antivirus, soluciones corporativas o centralizadas que permiten gestionar la seguridad de los dispositivos de una organización en todo momento. Software antimalware en la nube: Se integra a servicios que se encuentran en la nube y es común encontrarla en servicios de correo electrónico o de alojamiento de archivos. Generalmente cuenta con 2 componentes: El cliente, que se instala en los dispositivos administrados. El servicio web, que se encarga de validar la información reportada por el cliente.').m-auto
    p.mb-5 Las soluciones #[i antimalware] deben de incorporar cacteristicas importantes como:
    .row.mb-4
      .col-lg-8(data-aos="fade-right")
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Protección frente a <i>malware</i>")
            .col-12
              p.mb-0 Debe presentar soporte para asegurar y recuperar recursos afectados por #[i malware], de manera permanente y actualizada.
          .row(numero="2" titulo="Facilidad de uso")
            .col-12
              p.mb-0 Debe proveer una interfaz de fácil uso, que permita al usuario realizar sus actividades de limpieza y recuperación, sin necesidad de contar con una persona especializada.
          .row(numero="3" titulo="Velocidad de verificación")
            .col-12
              p.mb-0 Debe ser rápido en el proceso de revisión, análisis y detección de #[i malware].
          .row(numero="4" titulo="Actualización permanente")
            .col-12
              p.mb-0 Debe proveer actualizaciones tanto de la aplicación como de las bases de datos, de manera permanente y oportuna.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        figure
            img(src='@/assets/curso/tema5/img9.svg', style="width: 450px" ,alt='').m-auto
    .row
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
            img(src='@/assets/curso/tema5/img10.svg', style="width: 450px" ,alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        LineaTiempoD.color-acento-contenido
          .row(numero="5" titulo="Consumo de recursos")
            .col-12
              p.mb-0 Debe presentar un consumo adecuado de los dispositivos controlados, de tal manera que no afecte el desarrollo de las actividades de los usuarios.
          .row(numero="6" titulo="Herramientas adicionales para la gestión de <i>malware</i>")
            .col-12
              p.mb-0 Debe proveer a los usuarios de las herramientas necesarias para el aseguramiento de sus dispositivos e información.
          .row(numero="7" titulo="Compatibilidad con diferentes sistemas")
            .col-12
              p.mb-0 Debe soportar cualquier sistema operativo y ser compatible con la mayoría de aplicaciones informáticas, con el objetivo de reconocer una aplicación afectada de una original.
          .row(numero="8" titulo="Soporte")
            .col-12
              p.mb-0 Debe proveer soporte técnico especializado a los usuarios que cuentan con suscripciones activas.

</template>

<script>
export default {
  name: 'Tema5',
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
