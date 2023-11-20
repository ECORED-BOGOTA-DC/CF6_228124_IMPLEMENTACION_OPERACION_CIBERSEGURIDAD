<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Sistemas de detección y prevención de intrusos IDS/IPS
    .row.align-items-center.mb-5
      .col-md-auto(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img1.jpg', style="width: 190px" ,alt='').m-auto
      .col(data-aos="fade-left")
        p Existe otro tipo de soluciones que complementan la seguridad perimetral de una organización, a partir del análisis del tráfico de la red e identificando accesos no autorizados hacia algún recurso del perímetro. Los IDS (Intrusion Detection System), en español Sistemas de detección de intrusión, son otro tipo de soluciones para el monitoreo de la seguridad perimetral, usada para detectar accesos no autorizados a un equipo o red.
        .cajon.color-secundario.p-4
          p.mb-0 Se presentan algunos aspectos generales y de suma importancia relacionados con los sistemas de detección y prevención de intrusión IDS / IPS. Estúdielos con atención y lleve un registro en su libreta personal de apuntes.
    .tarjeta.tarjeta--azul.mb-5(data-aos="fade-down")
      .p-4
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              p #[b Monitoreo]
              p Los IDS monitorizan el tráfico entrante y lo cotejan con una base de datos actualizada de firmas de ataque conocidas. Este tipo de soluciones se encargan de generar los mensajes de advertencia para que el administrador de la red tome las acciones correspondientes (INCIBE, 2020).
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/img1.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              p #[b Enlace a la red interna]
              p Los IDS para realizar su función de monitoreo deben permanecer enlazados a la red interna, y desde su posición analizar el tráfico confrontando comportamientos con bases de datos de diferentes fuentes para así poder emitir alertas.
              .row
                .col-auto
                  a.boton.color-secundario.indicador__container(@click="modal1 = true")
                    span.text-white Esquema de implementación de un IDS
                    .indicador--click(v-if="mostrarIndicador")
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/img2.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              p #[b Tipos de IDS de acuerdo a funcionalidad]
              p HIDS Host-based Intrusion Detection System: Sistema de detección de intrusiones basado en host, analiza el comportamiento del dispositivo a partir de eventos registrados.
              p NIDS Network-based Intrusion Detection System: Sistema de detección de intrusiones basado en red, se encarga del análisis del tráfico que pasa por la red.
              .row
                .col-auto
                  a.boton.color-secundario.indicador__container(@click="modal2 = true")
                    span.text-white Diferencias entre NIDS y HIDS
                    .indicador--click(v-if="mostrarIndicador")
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/img3.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              p #[b Clasificación de IDS, según métodos de detección]
              p IDS basado en firmas: presentes en NIDS y HIDS, los HIDS analizan las anomalías registradas en eventos de cualquier dispositivo de la red. También analizan sumas de comprobación de paquetes, comparándolos con firmas en bases de datos.
              p IDS basado en anomalías: buscan patrones de acuerdo con actividades identificadas en tráfico de paquetes. Los HIDS analizan eventos, como inicios de sesión no exitosos y reiterativos; los NIDS realizan comparaciones a partir de un comportamiento base.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/img4.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              p #[b IDS más reconocidos]
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/img5.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              p #[b IPS (Sistema de prevención de intrusiones)]
              p Son soluciones que permiten asegurar, de manera preventiva, los recursos de una red de ataques e intrusiones. Realizan análisis en tiempo real de conexiones, cotejan con patrones o comportamientos conocidos y tienen control para denegar paquetes, así como cerrar conexiones sospechosas.
              .row
                .col-auto
                  a.boton.color-secundario.indicador__container(@click="modal3 = true")
                    span.text-white Esquema de implementación de un IPS
                    .indicador--click(v-if="mostrarIndicador")
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/img6.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              p #[b Operación desde la red interna]
              p Los IPS por tener capacidad de denegar paquetes, en caso de corresponder a un comportamiento no autorizado, deben operar desde la red interna, por lo general después del firewall de seguridad perimetral.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/img7.png', style="width: 450px" ,alt='').m-auto
    ModalA(:abrir-modal.sync="modal1")
      .row.justify-content-center
        .col-auto
          figure
            img(src='@/assets/curso/tema3/img1.svg', style="width: 850px" ,alt='').m-auto
    ModalA(:abrir-modal.sync="modal2")
      .row.justify-content-center
        .col-auto
          figure
            img(src='@/assets/curso/tema3/img2.svg', style="width: 850px" ,alt='').m-auto
    ModalA(:abrir-modal.sync="modal3")
      .row.justify-content-center
        .col-auto
          figure
            img(src='@/assets/curso/tema3/img3.svg', style="width: 850px" ,alt='').m-auto
    p(data-aos="fade-right") En la actualidad existen muchas soluciones de tipo UTM, que incorporar estos 2 tipos de soluciones dentro de sus herramientas permitiendo extender la cobertura y control del tráfico que circula en nuestra red.
    Separador
    #t_3_1
    .titulo-segundo.color-acento-contenido
      h2 3.1 Características funcionales de los IDS
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img2.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Tanto los IDS como los IPS cuentan con una serie de características que permiten no solo identificarlos, sino que además, dan la opción de reconocer tareas y funcionalidades que cumplen. Dentro de las características más relevantes de los IDS se pueden enunciar las siguientes:
    .row
      .col-12.bg-c3
        .row.align-items-center
          .col-lg-3.px-0.d-none.d-lg-block(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema3/img8.png', style="width: 280px" ,alt='')
          .col-lg-9(data-aos="fade-left")
            .p-4.p-xl-0
              SlyderF(columnas="col-md-6 col-xl-4")
                .tarjeta.color-acento-botones1.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema3/img4.svg' alt='AvatarTop')
                  p Realiza el análisis del tráfico a partir de la verificación y comparación de patrones contra bases de datos con firmas conocidas de ataques maliciosos.
                .tarjeta.color-acento-botones2.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema3/img5.svg' alt='AvatarTop')
                  p Realiza el monitoreo permanente del tráfico que pasa por la red.
                .tarjeta.color-acento-botones3.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema3/img6.svg' alt='AvatarTop')
                  p Monitorea el comportamiento de los sistemas de información para identificar la intención de algún ataque.
                .tarjeta.color-acento-botones4.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema3/img7.svg' alt='AvatarTop')
                  p Identifica cambios en las configuraciones de los dispositivos o servicios.
                .tarjeta.color-acento-botones5.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema3/img8.svg' alt='AvatarTop')
                  p Requiere la actualización permanente de bases de datos con firmas actualizadas.
                .tarjeta.color-acento-botones5.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema3/img9.svg' alt='AvatarTop')
                  p Emite alertas en gran variedad de sistemas.
    Separador
    #t_3_2
    .titulo-segundo.color-acento-contenido
      h2 3.2 Características de los IPS
    p(data-aos="fade-right") Tanto los IDS como los IPS trabajan de manera conjunta, conformando una segunda línea de seguridad perimetral, complementando así las acciones y funciones de un firewall.
    p.mb-5(data-aos="fade-right") #[b Dentro de las características más relevantes de los OPS se presentan las siguientes:]
    figure(data-aos="fade-left")
      img(src='@/assets/curso/tema3/img9.png', style="width: 1000px" ,alt='1 Complementa a los IDS, identificando y bloqueando conexiones con tráfico sospechoso. 2 Permite descartar paquetes sospechosos. 3 Permite bloquear direcciones sospechosas.').m-auto

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    modal1: false,
    modal2: false,
    modal3: false,
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
