<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Fuga de información
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-12.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema8/img1.jpg', style="width: 1100px" ,alt='').m-auto
      .col-lg-9.bg-c4
        .p-4
          p.mb-0 La pérdida de información en una organización puede presentarse por varios factores. Esta pérdida y otros riesgos, sea en el nivel que sea, pueden ser mitigados y según la eficiencia en la aplicación de los controles y soluciones, podrían llegar a tener una mínima posibilidad de ocurrencia.
    p.text-center.mb-5 #[b Preste mucha atención a las generalidades que, a continuación, se muestran sobre la fuga de información en las organizaciones:]
    .row.bg-c5
      .col-12
        .p-5
          .row.justify-content-center
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")(data-aos="fade-down")
                .row.align-items-center
                  .col-lg-8.mb-4.mb-lg-0
                    p #[b ¿Qué es la fuga de información?]
                    p.mb-0 “Incidente, interno o externo, intencional o no, que pone en poder de una persona ajena a la organización información confidencial y que solo debería estar disponible para integrantes de la misma”. Cualquier vulnerabilidad que ponga en riesgo un activo de información de la organización debe ser abordado y controlado. La Norma ISO 27001 en su Anexo A, establece tales controles.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema8/img1.svg', style="width: 350px" ,alt='').m-auto
                .row.align-items-center
                  .col-lg-4.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema8/img2.svg', style="width: 350px" ,alt='').m-auto
                  .col-lg-8
                    p.txt-c1 #[b ¿Por qué ocurre la fuga de información?]
                    p.txt-c1.mb-0 Diversos aspectos pueden desencadenar en fuga o pérdida de información. El robo de información o extracción no autorizada de la misma, el uso de dispositivos no autorizados como computadores personales, teléfonos móviles no autorizados para el tratamiento y transporte de información; cuando estos son extraviados u olvidados la información queda a merced de terceros.
                .row.align-items-center
                  .col-lg-8.mb-4.mb-lg-0
                    p #[b Equipos móviles y removibles en la fuga]
                    p.mb-0 Los dispositivos móviles facilitan la movilidad de información de manera rápida, por ello se considera de vital importancia el control de estos para la gestión de la información de la organización. Por otra parte, el uso de dispositivos removibles facilita la extracción de información y son un foco de infección; esto puede acarrear la pérdida de información por infección con programas dañinos.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema8/img3.svg', style="width: 350px" ,alt='').m-auto
                .row.align-items-center
                  .col-lg-4.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema8/img4.svg', style="width: 350px" ,alt='').m-auto
                  .col-lg-8
                    p.txt-c1 #[b Acceso a sitios peligrosos]
                    p.txt-c1.mb-0 Pone en riesgo la información gestionada desde el dispositivo en el momento que este sea infectado, por ejemplo, con un #[i ransomware]. También el uso de aplicaciones no autorizadas arriesga la información, ya que posibilita el intercambio, envío o daño de información, por ejemplo, aplicaciones de información compartida como en Internet como Dropbox, Google Drive, Onedrive, Wetransfer.
                .row.align-items-center
                  .col-lg-8.mb-4.mb-lg-0
                    p #[b Tratamiento indebido de información]
                    p.mb-0 Causa de pérdida de la información, y está relacionada con una manipulación inadecuada de la información y de los equipos, por ejemplo, un empleado es desprendido de sus labores y él, en señal de rechazo, puede borrarla, ocultarla, alterarla o extraerla para fines de beneficio propio.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema8/img5.svg', style="width: 350px" ,alt='').m-auto
                .row.align-items-center
                  .col-lg-4.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema8/img6.svg', style="width: 350px" ,alt='').m-auto
                  .col-lg-8
                    p.txt-c1 #[b Eventos accidentales]
                    p.txt-c1.mb-0 Además de estas causas mencionadas y que pueden llevar a la pérdida o robo de información, puede haber otros eventos de riesgo, de tipo accidental, dados por un indebido manejo o tratamiento, o provocados por algún empleado en desacuerdo con la organización, por ejemplo.
    Separador
    #t_8_1
    .titulo-segundo.color-acento-contenido
      h2 8.1 Prevención
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema8/img2.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Que la organización conozca sus activos de información se considera el primer paso para tomar decisiones y acciones que prevengan incidentes relacionados con la fuga o pérdida de información.
    p.text-center.mb-5 #[b Para un proceso de conocimiento de activos pertinente se hacen las siguientes recomendaciones:]
    .row.mb-5
      .col-12.bg-c3
        .row.align-items-center
          .col-lg-3.px-0.d-none.d-lg-block(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema8/img1.png', style="width: 280px" ,alt='')
          .col-lg-9(data-aos="fade-left")
            .p-4.p-xl-0
              SlyderF(columnas="col-md-6 col-xl-4")
                .tarjeta.color-acento-botones1.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema8/img7.svg' alt='AvatarTop')
                  p Identificar los activos de la información que gestiona.
                .tarjeta.color-acento-botones2.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema8/img8.svg' alt='AvatarTop')
                  p Clasificar los activos de la información de acuerdo con su criticidad e importancia para la organización.
                .tarjeta.color-acento-botones3.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema8/img9.svg' alt='AvatarTop')
                  p Identificar el grado de seguridad actual, es decir, identificar los riesgos a los que está expuesto el activo de información.
                .tarjeta.color-acento-botones4.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema8/img10.svg' alt='AvatarTop')
                  p Implementar los controles que permitan mejorar la seguridad del activo de información.
    .row.justify-content-center.align-items-center
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p A partir de este ejercicio, se pueden establecer los controles necesarios, entre los cuales destacan:
        ul.lista-ul--separador
          li.d-flex
            i.fas.fa-check-circle(style="color: #8F52F5")
            |
            p.mb-0 Cifrado de información confidencial corporativa.
          li.d-flex
            i.fas.fa-check-circle(style="color: #8F52F5")
            |
            p.mb-0 Instalación, configuración y actualización de #[i firewall].
          li.d-flex
            i.fas.fa-check-circle(style="color: #8F52F5")
            |
            p.mb-0 Actualización permanente de aplicaciones.
      .col-lg-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema8/img11.svg', style="width: 350px" ,alt='').m-auto
    Separador
    #t_8_2
    .titulo-segundo.color-acento-contenido
      h2 8.2 Recomendaciones para las organizaciones
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema8/img3.jpg', style="width: 350px" ,alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p A las organizaciones en el marco del tratamiento de los riesgos por fuga o pérdida de información, y con mayor razón si se trata de organizaciones grandes  o con gran nivel de administración de información se les recomienda el manejo de sistemas de prevención de pérdida de datos o DLP, así como la aplicación de controles orientados a la gestión del ciclo de vida de la información o ILM (Information Lifecycle Management).
        .cajon.color-primario.p-4
          p.mb-0 Estas son algunas recomendaciones adicionales para las organizaciones, referente al  tratamiento y control de la fuga o robo de información:
    ImagenInfografica.color-acento-contenido(data-aos="fade-right")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema8/img12.svg', alt='')
      .tarjeta.color-primario1.shadow-sm.p-3(x="20.5%" y="5%" numero="+")
        p.mb-0 Desde luego, toda organización ha de adoptar herramientas de control de los dispositivos externos de almacenamiento, removibles y en línea, para evitar fugas de información.
      .tarjeta.color-primario2.shadow-sm.p-3(x="53.5%" y="8%" numero="+")
        p.mb-0 Estos controles se relacionan con «la forma» en que se maneja o se trata la información. Por lo que se recomienda prevenir malas prácticas como compartir contraseñas o activos confidenciales, o hacer uso de contraseñas que son de conocimiento general. Esto conlleva a que se cuente con políticas de seguridad apoyadas en acciones de concienciación a todo el personal.
      .tarjeta.color-primario3.shadow-sm.p-3(x="89.5%" y="8%" numero="+")
        p.mb-0 Todos los empleados  y proveedores deben cumplir con las políticas de seguridad; las cuales, en el caso de proveedores,  se deben comunicar y aceptar mediante la firma de acuerdos de confidencialidad y de nivel de servicio (SLA) para proveedores.

</template>

<script>
export default {
  name: 'Tema8',
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
