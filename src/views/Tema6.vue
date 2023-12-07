<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Detección y respuesta para #[i endpoints] (EDR)
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema6/img1.jpg', style="width: 450px" ,alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p En ciertas ocasiones las soluciones no son suficientes para garantizar la seguridad de los activos de información de la organización; a pesar de todos los controles centralizados implementados, aún existe un factor que puede ser el más vulnerable y es el factor humano.
        p.mb-0 Pero, ¿cuál o cuáles podrían ser las medidas apropiadas para superar la inseguridad digital causada por el personal de la organización? Revise una  solución:
    ImagenInfografica.color-acento-contenido(data-aos="fade-down")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema6/img2.jpg', alt='')
      .tarjeta.color-primario1.p-3(x="15%" y="98%" numero="1")
        p.mb-0 El talento humano puede, de cierto modo, ser la puerta de entrada de los diferentes incidentes que pueden presentarse en la organización.
      .tarjeta.color-primario1.p-3(x="51%" y="98%" numero="2")
        p.mb-0 Es justo allí donde se propone otro tipo de soluciones que permiten mejorar la seguridad de los dispositivos de una red.
      .tarjeta.color-primario1.p-3(x="86%" y="98%" numero="3")
        p.mb-0 Se trata de los EDR (Endpoint Detection and Response), en español Detección y Respuesta de #[i Endpoints], los cuales permiten monitorear permanentemente los cambios presentados en los dispositivos.
    Separador
    #t_6_1
    .titulo-segundo.color-acento-contenido
      h2 6.1 Aspectos clave de los EDR
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img3.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Un Endpoint puede ser cualquier dispositivo que se encuentra conectado a la red informática de la organización, por ejemplo, computadores, portátiles, teléfonos, servidores, tablet, etc. La detección y respuesta de Endpoints son aquellas soluciones que permiten detectar y responder ante actividades sospechosas en un dispositivo, de acuerdo con su comportamiento, evitando su reproducción o réplica en otros dispositivos de la organización.
    .row.align-items-center
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema6/img4.jpg', style="width: 450px" ,alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p Las EPP (Endpoint Protection Platform), aquellas plataformas de protección Endpoint, son las soluciones integradas de seguridad que, por lo general, están conformadas por antivirus y antimalware, entre otros, y que operan comparando archivos con bases, si su firma corresponde.
        .cajon.color-primario.p-4
          p.mb-0 Los XDR (Extended Detection and Response), Detección y Respuesta Extendidas, son una solución integral para la respuesta a incidentes, a partir de la recolección de información de los endpoint.
    Separador
    #t_6_2
    .titulo-segundo.color-acento-contenido
      h2 6.2 Tipos de soluciones de seguridad para Endpoint
    .row.align-items-center.mb-5(data-aos="fade-left")
      .col-md-auto.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/tema1/img6.svg', style="width: 90px" ,alt='').m-auto
      .col
        p Las soluciones de seguridad Endpoint permiten mantener bajo permanente monitoreo y control los dispositivos administrados; lo cual favorece realizar acciones a partir de políticas establecidas por el administrador de seguridad. Dependiendo del tipo de Endpoint, estos pueden presentar alertas, reportar a consolas centrales e incluso, aislar un dispositivo de la red cuando se presente una advertencia catalogada como crítica.
        p.mb-0 Entre las soluciones para la gestión de la seguridad de los Endpoint existen los siguientes tipos de solución:
    TabsB.color-primario(data-aos="fade-left")
      .py-4.py-md-5(titulo="EPP" :icono="require('@/assets/curso/tema6/img1.svg')")
        .row.align-items-center
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema6/img5.jpg', style="width: 350px" ,alt='').m-auto
          .col-lg-8
            p Este tipo de soluciones tiene como objetivo prevenir incidentes de seguridad en los dispositivos de la red por #[i malware] o cualquier otra vulnerabilidad, estas soluciones realizan la identificación a partir de los siguientes métodos:
            ul.lista-ul--separador
              li.d-flex
                i.fas.fa-check-circle(style="color: #8F52F5")
                |
                p.mb-0 Análisis de amenazas a partir de la comparación con firmas conocidas.
              li.d-flex
                i.fas.fa-check-circle(style="color: #8F52F5")
                |
                p.mb-0 Bloqueo o acceso desde puertos, servicios o aplicaciones a partir de listas de control de acceso.
              li.d-flex
                i.fas.fa-check-circle(style="color: #8F52F5")
                |
                p.mb-0 Brindar soluciones #[i sandbox] para la ejecución de aplicaciones sospechosas.
              li.d-flex
                i.fas.fa-check-circle(style="color: #8F52F5")
                |
                p.mb-0 Utilizar análisis de comportamiento y #[i machine learning] para el reporte de actividad sospechosa.
      .py-4.py-md-5(titulo="Componentes de trabajo articulado" :icono="require('@/assets/curso/tema6/img2.svg')")
        .row.align-items-center
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema6/img6.jpg', style="width: 350px" ,alt='').m-auto
          .col-lg-8
            p Este tipo de solución cuenta con componentes que permiten trabajar de la mano con el centro de control disponible en la red o en la nube.
      .py-4.py-md-5(titulo="EDR" :icono="require('@/assets/curso/tema6/img3.svg')")
        .row.align-items-center
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema6/img7.jpg', style="width: 350px" ,alt='').m-auto
          .col-lg-8
            p Permiten generar acciones a partir de la detección de un incidente que afecte el dispositivo. Este tipo de reacción se ejecuta a partir de acciones automatizadas como manuales.
            ul.lista-ul--separador
              li.d-flex
                i.fas.fa-check-circle(style="color: #8F52F5")
                |
                p.mb-0 Brindan la información necesaria para el personal de seguridad, para el establecimiento de los indicadores de compromiso.
              li.d-flex
                i.fas.fa-check-circle(style="color: #8F52F5")
                |
                p.mb-0 Presentan alertas sobre incidentes que puedan afectar el dispositivo.
              li.d-flex
                i.fas.fa-check-circle(style="color: #8F52F5")
                |
                p.mb-0 Habilitan soluciones forenses que permiten recuperar información sobre incidentes y así identificar el origen.
              li.d-flex
                i.fas.fa-check-circle(style="color: #8F52F5")
                |
                p.mb-0 Aplican soluciones correctivas de manera autónoma para evitar la multiplicación de incidentes en los demás dispositivos de la organización.
      .py-4.py-md-5(titulo="XDR" :icono="require('@/assets/curso/tema6/img4.svg')")
        .row.align-items-center
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema6/img8.jpg', style="width: 350px" ,alt='').m-auto
          .col-lg-8
            p Se presenta como una solución unificada, enfocada en la gestión de seguridad y respuesta a incidentes, con funciones de correlacionador de eventos, así como de los componentes que intervienen con el dispositivo y con capacidades de interactuar con soluciones de un orden superior como los SIEM, aportando información útil para el establecimiento de una óptica de seguridad global de la organización.
    Separador
    #t_6_3
    .titulo-segundo.color-acento-contenido
      h2 6.3 Características de las soluciones de seguridad
    .row.align-items-center.mb-5(data-aos="fade-left")
      .col-md-auto.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/tema6/img5.svg', style="width: 120px" ,alt='').m-auto
      .col
        p Dentro de las características requeridas por una solución para la detección y respuesta de Endpoints es importante tener presente que deben abordarse los niveles de seguridad para este tipo de dispositivos.
        p.mb-0 A continuación, se muestran los niveles de seguridad para estos dispositivos. Haga la asimilación de ellos y procure llevar registro en su libreta personal de apuntes:
    .row.align-items-center
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        TabsA.color-acento-contenido
          .tarjeta.color-primario.p-4(titulo="Análisis de riesgos<br>y endurecimiento")
            .row
              .col-12
                p.mb-0 Capacidad para realizar un inventario y su correspondiente análisis de riesgos, generar un esquema de actualizaciones, sugiriendo la aplicación de cifrado de la información, estableciendo controles de seguridad en las aplicaciones como al dispositivo en general.
          .tarjeta.color-primario.p-4(titulo="Prevención")
            .row
              .col-12
                p.mb-0 Prever soluciones de seguridad activa, que proteja contra cualquier amenaza que pueda afectar los activos de información administrados, a partir del monitoreo permanente y aprendizaje de los comportamientos identificados, facilitando la defensa ante cualquier comportamiento anómalo presentado desde el Endpoint.
          .tarjeta.color-primario.p-4(titulo="Detección y<br>respuesta")
            .row
              .col-12
                p.mb-0 Brindar un monitoreo permanente que permita identificar, de manera oportuna, amenazas que puedan afectar al dispositivo, aislamiento del mismo, y realizar las acciones necesarias para la limpieza y registro de las acciones adelantadas.
          .tarjeta.color-primario.p-4(titulo="Informes e<br>integración")
            .row
              .col-12
                p.mb-0 Debe brindar las capacidades de integrarse con soluciones y sistemas de monitoreo para una visualización general de los Endpoint de la organización.
          .tarjeta.color-primario.p-4(titulo="Arquitectura para<br>soluciones EDR")
            .row
              .col-12
                p Observe y analice la arquitectura de seguridad sugerida para una solución de Endpoint.
                .row
                  .col-auto
                    a.boton.color-secundario.indicador__container(@click="modal1 = true")
                      span.text-white Arquitectura adaptativa por niveles de seguridad para soluciones EDR
                      .indicador--click(v-if="mostrarIndicador")
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema6/img9.jpg', style="width: 450px" ,alt='').m-auto
    ModalA(:abrir-modal.sync="modal1")
      .row.justify-content-center
        .col-auto
          figure
            img(src='@/assets/curso/tema6/img10.jpg', style="width: 1200px" ,alt='').m-auto

</template>

<script>
export default {
  name: 'Tema6',
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
