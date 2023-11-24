export default {
  global: {
    componenteFormativo: 'Aplicación de estrategias de ciberseguridad',
    descripcionCurso:
      'Con el estudio de este componente el aprendiz estará más y mejor capacitado en el reconocimiento y aplicación de las técnicas y herramientas especializadas de gestión de la seguridad. Podrá afianzar sus conocimientos y habilidades en la implementación de controles y estrategias que garantizan la estabilidad de los pilares de la información en las organizaciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Gestión de acceso',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Pasos técnicos de la gestión de acceso',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de control para gestión de accesos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Características',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: '<i>Firewalls</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sistemas de detección y prevención de intrusos IDS/IPS',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Características funcionales de los IDS',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Características de los IPS',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión unificada de amenazas UTM/XTM',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: '<i>Antimalware</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Detección y respuesta para <i>endpoints</i> (EDR)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Aspectos clave de los EDR',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Tipos de soluciones de seguridad para <i>endpoint</i>',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Características de las soluciones de seguridad',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Cifrado',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Fuga de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Prevención',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Recomendaciones para las organizaciones',
            hash: 't_8_2',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Dispositivos móviles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Riesgos asociados',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo: 'Controles',
            hash: 't_9_2',
          },
        ],
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Guía NIST-SP800-114',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '10.1',
            titulo: 'Aspectos importantes de la guía',
            hash: 't_10_1',
          },
          {
            numero: '10.2',
            titulo: 'Seguridad en el teletrabajo',
            hash: 't_10_2',
          },
        ],
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Infraestructuras críticas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema12',
        numero: '12',
        titulo: 'Mejoras de ciberseguridad en infraestructuras',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema13',
        numero: '13',
        titulo: 'Sistemas de correlacionamiento de <i>logs</i> y monitoreo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema14',
        numero: '14',
        titulo: 'Gestión de eventos e información de seguridad SIEM',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema15',
        numero: '15',
        titulo: 'Parcheado y/o actualización',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/material.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Dispositivos móviles',
      referencia:
        'Organización Internacional de Normalización. (2013). <i>Seguridad de la información, ciberseguridad y protección de la privacidad</i>. ISO 27001.',
      tipo: 'Norma técnica',
      link: 'https://www.iso.org/standard/54534.html',
    },
    {
      tema: 'Guía NIST-SP800-114',
      referencia: 'NIST. (2021). <i>Cybersecurity framework</i>. NIST.',
      tipo: 'Página web',
      link: 'https://www.nist.gov/cyberframework',
    },
  ],
  glosario: [
    {
      termino: 'Auditoría',
      significado:
        'proceso mediante el cual se busca verificar o validar que se esté cumpliendo una condición o la aplicación de un control.',
    },
    {
      termino: 'Control',
      significado:
        'mecanismo de tipo lógico o técnico con el cual se busca regular o establecer restricciones de alguna acción.',
    },
    {
      termino: '<em>Framework</em>',
      significado:
        'es un marco de trabajo que provee los componentes y condiciones necesarias para su aplicación.',
    },
    {
      termino: 'Intrusión',
      significado:
        'acceso no autorizado a un sistema o activo de información sin consentimiento del propietario.',
    },
    {
      termino: 'Log',
      significado:
        'registro secuencial sobre eventos presentados en un sistema de información.',
    },
    {
      termino: '<em>Malware</em>',
      significado:
        'programa dañino que se instala en dispositivos y que puede generar daños o pérdida de información.',
    },
    {
      termino: 'Riesgo',
      significado:
        'es la probabilidad de que una amenaza se materialice generando alguna consecuencia negativa.',
    },
  ],
  referencias: [
    {
      referencia:
        'Audea. (2010). <i>Fuga de información ¿Qué es y cómo se puede prevenir?</i> Audea. ',
      link:
        'https://www.audea.com/fuga-de-informacion-que-es-y-como-se-puede-prevenir/ ',
    },
    {
      referencia: 'Cisco. (2021). <i>¿Qué es un firewall?</i> Cisco. ',
      link:
        'https://www.cisco.com/c/es_mx/products/security/firewalls/what-is-a-firewall.html ',
    },
    {
      referencia:
        'FORTINET. (2021). <i>Administración unificada de amenazas</i>. FORTINET. ',
      link: 'https://www.fortinet.com/lat/products/smallbusiness/utm',
    },
    {
      referencia:
        'Instituto Nacional de Ciberseguridad. (2017). <i>Control de acceso. Políticas de seguridad para la pyme</i>. Incibe',
      link:
        'https://www.incibe.es/sites/default/files/contenidos/politicas/documentos/control-de-acceso.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Ciberseguridad. (2020). <i>¿Qué son y para qué sirven los SIEM, IDS e IPS?</i> Incibe. ',
      link:
        'https://www.incibe.es/protege-tu-empresa/blog/son-y-sirven-los-siem-ids-e-ips',
    },
    {
      referencia:
        'Organización Internacional de Normalización. (2013). <i>Information technology — Security techniques — Information security management systems — Requirements</i>. ISO 27001. ',
      link: 'https://www.iso.org/standard/54534.html',
    },
    {
      referencia:
        'LISA Institute. (2019). <i>¿Qué son las infraestructuras críticas?</i> LISA Institute. ',
      link:
        'https://www.lisainstitute.com/blogs/blog/infraestructuras-criticas',
    },
    {
      referencia:
        'Malwarebytes (2021). <i>Todo acerca del malware</i>. Malwarebytes. ',
      link: 'https://es.malwarebytes.com/malware/#what-is-malware',
    },
    {
      referencia: 'NIST. (2021). <i>Marco de ciberseguridad</i>. NIST. ',
      link: 'https://www.nist.gov/cyberframework',
    },
    {
      referencia:
        'SeguriLatam. (2020). <i>Seguridad en dispositivos móviles: ¿cuáles son las ciberamenazas más peligrosas?</i> SeguriLatam. ',
      link:
        'https://www.segurilatam.com/actualidad/ciberseguridad-seguridad-en-dispositivos-moviles-cuales-son-las-ciberamenazas-mas-peligrosas_20201005.html',
    },
    {
      referencia:
        'Server World. (2020). <i>Apache2: configure SSL/TLS</i>. Server World. ',
      link: 'https://www.server-world.info/en/note?os=Ubuntu_20.04&p=httpd&f=3',
    },
    {
      referencia:
        'Welivesecurity. (2021). <i>Todo sobre cifrado: qué es y cuándo deberías usarlo</i>. Welivesecurity. ',
      link:
        'https://www.welivesecurity.com/la-es/2016/02/09/todo-sobre-cifrado-cuando-usarlo/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Hernando José Peña Hidalgo',
          cargo: 'Experto temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador instruccional',
          centro: 'Centro Agropecuario La Granja - Regional Tolima',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora metodológica y pedagógica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Diseñadora y evaluadora instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Nelly Parra Guarín',
          cargo: 'Adecuadora instruccional',
          centro:
            'Centro de gestión de mercados, Logística y Tecnologías de la información - Regional Distrito Capital',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesora metodológica',
          centro:
            'Centro de gestión de mercados, Logística y Tecnologías de la información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Antonio Vecino Valero',
          cargo: 'Diseño web',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollo Fullstack',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
