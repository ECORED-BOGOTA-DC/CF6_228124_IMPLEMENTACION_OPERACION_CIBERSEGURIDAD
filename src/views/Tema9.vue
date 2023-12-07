<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 9
      h1 Dispositivos móviles
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema9/img1.jpg', style="width: 350px" ,alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p Dentro de la Norma ISO 27001 - Anexo A, se establecen los lineamientos de controles para el uso de dispositivos móviles, en función de las consideraciones de seguridad. En este punto del componente formativo podrá ahondar en aspectos y elementos de suma importancia en lo referente a seguridad de la información y los dispositivos móviles.
        p.mb-0 Para contextualizar sobre la seguridad de dispositivos móviles es importante tener presente los siguientes términos:
    .row.justify-content-center(data-aos="fade-left")
      .col-8.col-lg.m-2.bg-c2.shadow-sm
        .p-4
          figure.mb-3
            img(src='@/assets/curso/tema9/img1.svg', style="width: 70px" ,alt='')
          p.mb-4 #[b Terminal]
          p.mb-0 Se conoce a cualquier dispositivo móvil que permite registrar y consultar información.
      .col-8.col-lg.m-2.bg-c2.shadow-sm
        .p-4
          figure.mb-3
            img(src='@/assets/curso/tema9/img2.svg', style="width: 70px" ,alt='')
          p.mb-4 #[b #[i Smartphone]]
          p.mb-0 Teléfono inteligente que cuenta con funciones avanzadas para utilizar aplicaciones y gestionar información, estos dispositivos están compuestos por un sistema operativo, aplicaciones e información.
      .col-8.col-lg.m-2.bg-c2.shadow-sm
        .p-4
          figure.mb-3
            img(src='@/assets/curso/tema9/img3.svg', style="width: 70px" ,alt='')
          p.mb-4 #[b Byod (#[i Bring Your Own Device])]
          p.mb-0 Es una tendencia por la cual optan algunas organizaciones, permitiendo que sus trabajadores utilicen sus dispositivos personales para el desarrollo de actividades laborales.
      .col-8.col-lg.m-2.bg-c2.shadow-sm
        .p-4
          figure.mb-3
            img(src='@/assets/curso/tema9/img4.svg', style="width: 70px" ,alt='')
          p.mb-4 #[b Política de seguridad]
          p.mb-0 Son controles lógicos que se aplican a dispositivos, con el objetivo de controlar acciones o capacidades de un dispositivo móvil.
    Separador
    #t_9_1
    .titulo-segundo.color-acento-contenido
      h2 9.1 Riesgos asociados
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-12.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema9/img2.jpg', style="width: 1100px" ,alt='').m-auto
      .col-lg-9.bg-c4
        .p-4
          p.mb-0 Son muchas las amenazas de seguridad de información que en la actualidad podrían afectar negativamente los activos de información en las organizaciones y a las cuales están expuestas, especialmente, por el uso de dispositivos móviles sin control. El uso generalizado de los mismos y la necesidad de conexión a distintas redes de información favorecen esta situación.
    p.mb-5 #[b Entre los riesgos y amenazas más comunes y recurrentes se encuentran:]
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        TabsA.color-acento-contenido
          .tarjeta.color-primario.p-4(titulo="Aplicaciones<br>maliciosas")
            .row
              .col-12
                p.mb-0 Mediante las cuales se pueden instalar app maliciosas que pueden presentar algún tipo de filtración de dato o daño, tanto en los dispositivos como en la información.
          .tarjeta.color-primario.p-4(titulo="Vulnerabilidades en<br>los dispositivos")
            .row
              .col-12
                p.mb-0 Algunas marcas o modelos no cuentan con los componentes necesarios para un sistema seguro, lo que se considera una debilidad que puede ser aprovechada por terceros para robar información.
          .tarjeta.color-primario.p-4(titulo="<i>Phishing</i>")
            .row
              .col-12
                p.mb-0 Esta es una de las vulnerabilidades más comunes, con la cual buscan capturar usuarios incautos para robar información, cuentas, entre otras o acceder a información de sistemas bancarios o de redes sociales, para luego pedir algún rescate.
          .tarjeta.color-primario.p-4(titulo="Ataques basados<br>en la red")
            .row
              .col-12
                p.mb-0 Problemas de #[i malware] en dispositivos, los cuales pueden tomar el control y realizar acciones no requeridas, por ejemplo, envío masivo de mensajes a los contactos o publicación autónoma en las redes sociales.
          .tarjeta.color-primario.p-4(titulo="Ataques<br><i>Man-in-the-Middle</i>")
            .row
              .col-12
                p.mb-0 Teniendo presente la cantidad de información que circula en las redes hoy, este tipo de ataque permite intervenir el tráfico para capturar la información que por ellas transitan.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema9/img3.jpg', style="width: 450px" ,alt='').m-auto
    .cajon.color-primario.p-4
      p.mb-0 Adicional a estas amenazas se pueden sumar las causadas por pérdida o robo de dispositivos, lo que estaría enlazado a la cantidad de información y contenido, y si esta se encontraba cifrada o no.
    Separador
    #t_9_2
    .titulo-segundo.color-acento-contenido
      h2 9.2 Controles
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema9/img4.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 De acuerdo con el control 6.2.1 de la Norma ISO 27001 Anexo A, se deben de establecer políticas que establezcan las medidas para la seguridad de la información gestionada a través de dispositivos móviles, y adoptar los controles necesarios para su administración.
    p.text-center.mb-0(data-aos="fade-left") #[b Por ejemplo, se han de aplicar controles para configurar dispositivos móviles, procurando contar con un nivel básico de seguridad en los mismos.]

</template>

<script>
export default {
  name: 'Tema9',
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
