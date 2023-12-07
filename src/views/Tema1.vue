<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Gestión de acceso
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="fade-right")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Es, en dichos mecanismos, en donde la gestión de acceso cobra un gran valor ya que permite controlar y fijar condiciones bajo los cuales un usuario pueda hacer uso de estos activos.
    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido
      h2 1.1 Pasos técnicos de la gestión de acceso
    .row.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img2.jpg', style="width: 450px" ,alt='').m-auto
      .col-lg-7(data-aos="fade-left")
        .row
          .col-12.bg-1
            .p-4
              p.mb-0 De acuerdo con el Instituto Nacional de Ciberseguridad de España, un objetivo de este control es #[b “establecer quién, cómo y cuándo puede acceder a los activos de información de la empresa y registrar convenientemente dichos accesos” (Incibe, 2017)]; esto indica el establecimiento de controles que permitan una adecuada gestión de los permisos de los usuarios u otros sistemas de información para interactuar con los activos de una organización. En la siguiente figura, se pueden observar los pasos que se llevan a cabo para el control de gestión de acceso.
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.mb-0 #[b Figura 1.] Pasos de un control de gestión de acceso
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img1.svg', style="width: 950px" ,alt='').m-auto
          figcaption.mt-5 Nota. Adaptado de ICHI.PRO - Introducción a la gestión de identidades y accesos.
    .cajon.color-primario.p-4.mb-5(data-aos="fade-down")
      p.mb-0 Durante el acceso a los sistemas de información se deben llevar a cabo una serie de pasos técnicos, los cuales deben  valorarse para gestionar una adecuada autorización y acceso a los recursos requeridos; a saber:
    .row.justify-content-center(data-aos="fade-left")
      .col-8.col-lg.m-2.bg-c2.shadow-sm
        .p-4
          figure.mb-3
            img(src='@/assets/curso/tema1/img2.svg', style="width: 70px" ,alt='')
          p.mb-4 #[b Identificación]
          p.mb-0 Permite identificar particularmente un usuario o un sistema con un identificador único y diferenciarlo de otros.
      .col-8.col-lg.m-2.bg-c2.shadow-sm
        .p-4
          figure.mb-3
            img(src='@/assets/curso/tema1/img3.svg', style="width: 70px" ,alt='')
          p.mb-4 #[b Autenticación]
          p.mb-0 Permite validar que el usuario o sistema que intenta acceder a un recurso es quien dice ser, mediante la validación de un mecanismo, por ejemplo, contraseña, pin, token o cualquier otro mecanismo asociado.
      .col-8.col-lg.m-2.bg-c2.shadow-sm
        .p-4
          figure.mb-3
            img(src='@/assets/curso/tema1/img4.svg', style="width: 70px" ,alt='')
          p.mb-4 #[b Autorización]
          p.mb-0 Consiste en el permiso específico sobre el recurso al cual desea acceder, por ejemplo, un rol en una tabla de una base de datos.
      .col-8.col-lg.m-2.bg-c2.shadow-sm
        .p-4
          figure.mb-3
            img(src='@/assets/curso/tema1/img5.svg', style="width: 70px" ,alt='')
          p.mb-4 #[b Importante]
          p.mb-0 Como factor fundamental de este control se debe considerar contar con mecanismos de auditoría que registren y/o alerten sobre accesos no permitidos, no autorizados o fallidos.
    Separador
    #t_1_2
    .titulo-segundo.color-acento-contenido
      h2 1.2 Tipos de control para gestión de accesos
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img3.jpg', style="width: 450px" ,alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p El control para la gestión de los accesos puede ser abordado desde diferentes frentes de gestión o con distintas técnicas de control. La aplicación de dichos controles de gestión de accesos es un factor de garantía de la seguridad de la información en la organización; pero no solo de esta, sino, además, de los activos de información, las personas, la infraestructura, entre otros.
        p.mb-0 Identifique, a continuación, algunos de las más comunes y funcionales controles:
    .tarjeta.tarjeta--azul.mb-5(data-aos="fade-down")
      .p-4
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              p #[b Por complejidad del control]
              ul.lista-ul--separador
                li.d-flex
                  i.fas.fa-check-circle(style="color: #FFB206")
                  |
                  p.mb-0 #[b Básicos]: su implementación no requiere de mayor esfuerzo, ni ajustes en los sistemas de información; pueden abordarse con capacitaciones y controles básicos.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #FFB206")
                  |
                  p.mb-0 #[b Avanzados]: requieren de herramientas avanzadas y establecimiento de políticas y controles.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema1/img1.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              p #[b Controles según tipos de accesos]
              p En los tipos de accesos a sistemas de información se consideran estos controles:
              ul.lista-ul--separador
                li.d-flex
                  i.fas.fa-check-circle(style="color: #FFB206")
                  |
                  p.mb-0 Control para la gestión de usuario.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #FFB206")
                  |
                  p.mb-0 Control de accesos a dispositivos.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #FFB206")
                  |
                  p.mb-0 Control de acceso a sistemas de información y activos.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #FFB206")
                  |
                  p.mb-0 Control de acceso a recursos de red.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema1/img2.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Control para la gestión de usuario]
              ul.lista-ul--separador
                li.d-flex
                  i.fas.fa-check-circle(style="color: #FFB206")
                  |
                  p.mb-0 Política para gestión de usuarios (activación, actualización y desactivación).
                li.d-flex
                  i.fas.fa-check-circle(style="color: #FFB206")
                  |
                  p.mb-0 Controles para creación de usuarios nuevos.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #FFB206")
                  |
                  p.mb-0 Controles para la actualización de usuarios nuevos.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #FFB206")
                  |
                  p.mb-0 Controles para la desactivación de usuarios nuevos.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #FFB206")
                  |
                  p.mb-0 Controles para gestionar los permisos sobre los recursos.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #FFB206")
                  |
                  p.mb-0 Controles para gestión de contraseñas de usuarios.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #FFB206")
                  |
                  p.mb-0 Controles que permitan auditar los permisos de los usuarios sobre los recursos.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema1/img3.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              p #[b Control de accesos a dispositivos]
              p Controles para conexión desde dispositivos autorizados, controles para identificación y autenticación de usuarios a través de dispositivos autorizados, controles para gestión de contraseñas, controles para uso de recursos de dispositivos invitados, controles para control de horarios y tiempo de uso de dispositivos.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema1/img4.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              p #[b Control de acceso a los sistemas de información y activos]
              ul.lista-ul--separador
                li.d-flex
                  i.fas.fa-check-circle(style="color: #FFB206")
                  |
                  p.mb-0 Controles para el acceso a los sistemas de información.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #FFB206")
                  |
                  p.mb-0 Restricción de acceso a sistemas de información críticos o importantes.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema1/img5.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              p #[b Control de acceso a recursos de red]
              p Política para acceso a servicios compartidos a través de la red, controles para autenticación de conexiones foráneas, controles de identificación de dispositivos de red, controles de endurecimiento y restricción al acceso de puertos de servicios de red, controles para la interconexión con otras redes, controles para la gestión enrutamiento y tráfico a través de red.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema1/img6.png', style="width: 450px" ,alt='').m-auto
    .cajon.color-secundario.p-4(data-aos="fade-right")
      p.mb-0 Como es evidente, hay una amplia variedad de controles que deben ser tenidos en cuenta, de acuerdo a las necesidades y recursos de cada organización y con los cuales se busca mantener una adecuada gestión de la gestión de usuarios.
    Separador
    #t_1_3
    .titulo-segundo.color-acento-contenido
      h2 1.3 Características
    .row.align-items-center.mb-5(data-aos="fade-left")
      .col-md-auto.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/tema1/img6.svg', style="width: 90px" ,alt='').m-auto
      .col
        p La implementación de los controles para la gestión del acceso debe contemplar ciertas condiciones que eleven la complejidad y dificulten el acceso no autorizado a los activos de información de la organización.
        p.mb-0 #[b Algunos ejemplos se presentan a continuación:]
    .row.align-items-center
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        TabsA.color-acento-contenido
          .tarjeta.color-primario.p-4(titulo="Privilegio mínimo")
            p.mb-0 Toda autorización de acceso debe darse de acuerdo con las necesidades de cada rol, por ejemplo, no hacer uso de credenciales de DBA en un usuario de conexión a través de una página web.
          .tarjeta.color-primario.p-4(titulo="Usuarios por<br>defecto")
            p.mb-0 Reducir el uso de usuarios que vienen por defecto en los sistemas operativos o aplicaciones, ya que estos son utilizados en ataques de fuerza bruta.
          .tarjeta.color-primario.p-4(titulo="Actualización de<br>credenciales")
            p.mb-0 Establecer los controles que requieran la actualización de contraseñas periódicamente.
          .tarjeta.color-primario.p-4(titulo="Uso de credenciales<br>complejas")
            p.mb-0 Promover a través de controles el uso de contraseñas seguras.
          .tarjeta.color-primario.p-4(titulo="Almacenamiento de<br>credenciales seguro")
            p.mb-0 Toda la información relacionada con información de usuarios debe almacenarse de manera segura, haciendo uso de algoritmos de cifrado unidireccional y bajo, con algún mecanismo de cifrado de base de datos.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img4.jpg', style="width: 450px" ,alt='').m-auto

</template>

<script>
export default {
  name: 'Tema1',
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
