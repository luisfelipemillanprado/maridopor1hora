/**
 * @description - Static data object containing configuration and content for the application's UI.
 * @property {object} home - Contains data for the home page.
 * @property {object} navbar - Contains data for the navigation bar.
 */
const sd = {
  home: {
    header: {
      mainTitle: {
        first: `Husband for an Hour`,
        second: `& Repair solutions.`,
        third: `Quality Work.`,
      },
      sliders: {
        peekServices: [
          {
            imageUrl: '/images/header/plumber/headermedium-1.webp',
            key: Math.random(),
          },
          {
            imageUrl: '/images/header/carpentry/headermedium-3.webp',
            key: Math.random(),
          },
          {
            imageUrl: '/images/header/maintenance/headermedium-2.webp',
            key: Math.random(),
          },
        ],
      },
      linksButtons: {
        variants: { color: `warning`, key: Math.random() },
        texts: [
          { text: `Ubicación`, icon: `location`, key: Math.random() },
          { text: `Servicios`, icon: `services`, key: Math.random() },
          { text: `Buscar`, icon: `search`, key: Math.random() },
        ],
      },
      metrics: [
        { amount: `400`, text: `Clientes frecuentes`, change: false },
        { amount: `4.3`, text: `Clientes satisfechos`, change: true },
        { amount: `25`, text: `Expertos calificados`, change: false },
      ],
    },
    main: {
      trustBadge: {
        slogan: `La confianza que te respalda.`,
        summary: `Nuestra reputación está respaldada por miles de clientes en todo el mundo.`,
        rating: `5.0`,
        reviews: `145.239 • Excelente`,
        buttonText: `MaridoPor1Hora`,
      },
      secondaryTitles: {
        title: [
          `Obras Completas Destacadas`,
          `Todos Nuestros Servicios`,
          `Aquí, Tus Respuestas`,
          `Somos Tu Mejor Elección`,
          `Unete A Nuestro Equipo`,
          `Testimonios De Clientes`,
        ],
      },
      finishedWorks: {
        imageUrls: [
          { imageUrl: `/images/main/finishedwork/finishedwork01.webp`, key: Math.random() },
          { imageUrl: `/images/main/finishedwork/finishedwork02.webp`, key: Math.random() },
          { imageUrl: `/images/main/finishedwork/finishedwork03.webp`, key: Math.random() },
          { imageUrl: `/images/main/finishedwork/finishedwork04.webp`, key: Math.random() },
          { imageUrl: `/images/main/finishedwork/finishedwork05.webp`, key: Math.random() },
          { imageUrl: `/images/main/finishedwork/finishedwork06.webp`, key: Math.random() },
        ],
        texts: [
          `Electricista.`,
          `Carpintería.`,
          `Limpieza.`,
          `Mantenimiento.`,
          `Muebles.`,
          `Albañilería.`,
        ],
      },
      allOurServices: {
        imageUrls: [
          { imageUrl: `/images/main/services/serviceelectrical02.webp`, key: Math.random() },
          { imageUrl: `/images/main/services/serviceplumbing03.webp`, key: Math.random() },
          { imageUrl: `/images/main/services/servicefurniture04.webp`, key: Math.random() },
          { imageUrl: `/images/main/services/servicemasonry05.webp`, key: Math.random() },
          { imageUrl: `/images/main/services/servicecarpentry06.webp`, key: Math.random() },
          { imageUrl: `/images/main/services/servicecleaning07.webp`, key: Math.random() },
        ],
        name: [
          `Electricista.`,
          `Fontanería.`,
          `Muebles.`,
          `Albañilería.`,
          `Carpintería.`,
          `Limpieza.`,
        ],
        description: [
          `Servicios eléctricos profesionales para necesidades residenciales y comerciales.`,
          `Los mejores y más completos servicios de fontanería, instalación y reparación.`,
          `Técnicos expertos garantizan una instalación rápida, segura y precisa de sus muebles.`,
          `Servicios especializados de albañilería para todo tipo de proyectos de construcción y reparación de viviendas.`,
          `Servicios de excelencia sobre carpintería para su hogar, oficina y otras instalaciones.`,
          `Servicios de limpieza profunda para mantener su espacio impecable y reluciente.`,
        ],
      },
      frequentlyAskedQuestions: {
        questions: [
          {
            question: `¿Los materiales están incluidos en el precio o no?`,
            answer: `La elección es suya: puede proporcionar los materiales o podemos conseguirlos por un costo adicional, sujeto a aprobación.`,
            icon: `more`,
            key: Math.random(),
          },
          {
            question: `¿Cómo puedo programar un servicio?`,
            answer: `Puede reservar por teléfono, WhatsApp o mediante el formulario de nuestra web. Le asignaremos un técnico en 24 horas (o inmediatamente si es una emergencia).`,
            icon: `more`,
            key: Math.random(),
          },
          {
            question: `¿Sirven los fines de semana y días festivos?`,
            answer: `Sí, operamos de lunes a domingo, incluidos festivos, con un recargo del 15% (excepto clientes recurrentes).`,
            icon: `more`,
            key: Math.random(),
          },
          {
            question: `¿Cuanto cuesta el servicio?`,
            answer: `El costo varía según el trabajo y el tiempo requerido. Ofrecemos tarifas por hora (desde 40€-70€/hora) o presupuestos fijos para proyectos complejos.`,
            icon: `more`,
            key: Math.random(),
          },
          {
            question: `¿Qué métodos de pago aceptan?`,
            answer: `Aceptamos efectivo, transferencias, tarjetas (débito/crédito) y aplicaciones de pago como Bizum y otras. El pago se realiza una vez finalizado el servicio.`,
            icon: `more`,
            key: Math.random(),
          },
          {
            question: `¿Ofrecen garantías en el trabajo?`,
            answer: `Si, 30 días para reparaciones y 15 días para montaje (no aplica por mal uso o daños ajenos al servicio).`,
            icon: `more`,
            key: Math.random(),
          },
          {
            question: `¿Tiene promociones para clientes frecuentes?`,
            answer: `¡Sí! Nuestro programa de fidelización incluye un 10% de descuento en el tercer servicio y en el servicio prioritario.`,
            icon: `more`,
            key: Math.random(),
          },
          {
            question: `¿Cómo sé que mi casa está protegida con ustedes?`,
            answer: `Nuestros técnicos están uniformados, identificados y podrán ver sus credenciales al llegar. Además, todos están asegurados.`,
            icon: `more`,
            key: Math.random(),
          },
          {
            question: `¿Ofrecen servicio de emergencia las 24 horas?`,
            answer: `Sí, para emergencias reales (como inundaciones o riesgos eléctricos) tenemos servicio 24 horas al día, 7 días a la semana con un cargo adicional.`,
            icon: `more`,
            key: Math.random(),
          },
        ],
      },
      whyChooseUs: {
        benefits: [
          {
            title: `Mejores precios y descuentos.`,
            description: `Disfruta de tarifas exclusivas y descuentos especiales en todos nuestros servicios para el hogar, con ahorros garantizados en cada contratación que realices.`,
            hrefText: `Conocer más...`,
            href: `#`,
            icon: `discount`,
            key: Math.random(),
          },
          {
            title: `Reembolso en contrataciones.`,
            description: `Recibe un porcentaje de reembolso en cada servicio contratado, acumulable para futuras necesidades y aplicable en cualquier momento dentro del plazo establecido.`,
            hrefText: `Conocer más...`,
            href: `#`,
            icon: `money`,
            key: Math.random(),
          },
          {
            title: `Atención al cliente 24/7.`,
            description: `Contamos con soporte técnico disponible en todo momento para resolver emergencias, consultas y otros, garantizando asistencia inmediata cuando más la necesites.`,
            hrefText: `Conocer más...`,
            href: `#`,
            icon: `clock`,
            key: Math.random(),
          },
          {
            title: `Paquete de bienvenida.`,
            description: `Obtén ventajas exclusivas al registrarte con nosotros, incluyendo un descuento especial en tu primer servicio y beneficios adicionales para empezar a disfrutar.`,
            hrefText: `Conocer más...`,
            href: `#`,
            icon: `gift`,
            key: Math.random(),
          },
          {
            title: `Programa de fidelización.`,
            description: `Acumula puntos con cada servicio contratado y canjéalos por recompensas exclusivas, descuentos especiales y servicios gratuitos periódicamente.`,
            hrefText: `Conocer más...`,
            href: `#`,
            icon: `shield`,
            key: Math.random(),
          },
          {
            title: `Servicio de urgencias.`,
            description: `Solución inmediata para emergencias domésticas con respuesta garantizada en un tiempo récord y técnicos especializados disponibles al instante.`,
            hrefText: `Conocer más...`,
            href: `#`,
            icon: `alert`,
            key: Math.random(),
          },
          {
            title: `Mantenimiento preventivo.`,
            description: `Plan anual de revisiones técnicas periódicas para prevenir problemas y mantener tu hogar en perfecto estado durante todo el año sin preocupaciones.`,
            hrefText: `Conocer más...`,
            href: `#`,
            icon: `work`,
            key: Math.random(),
          },
          {
            title: `Garantía de satisfacción.`,
            description: `Compromiso total con tu satisfacción, ofreciendo soluciones inmediatas y adecuadas, o reembolsos si el servicio no cumple con tus expectativas iniciales.`,
            hrefText: `Conocer más...`,
            href: `#`,
            icon: `badge`,
            key: Math.random(),
          },
        ],
      },
      joinOurTeam: {
        team: [
          {
            imageUrl: `/images/main/team/team01.webp`,
            key: Math.random(),
          },
          {
            imageUrl: `/images/main/team/team02.webp`,
            key: Math.random(),
          },
          {
            imageUrl: `/images/main/team/team03.webp`,
            key: Math.random(),
          },
          {
            imageUrl: `/images/main/team/team04.webp`,
            key: Math.random(),
          },
        ],
        firstText: `MaridoPor1Hora.`,
        secondText: [
          `En esta empresa, nos dedicamos a facilitar la vida a las familias ofreciendo servicios de calidad para el hogar: limpieza, mantenimiento, reparaciones, jardinería, cuidado personal y más... Nuestro compromiso es brindar soluciones prácticas con profesionalismo y empatía.`,
          `Si eres una persona responsable con experiencia en servicios para el hogar y quieres formar parte de un equipo que valora tu trabajo, ¡te estamos buscando!`,
        ],
        joinOurTeamButton: {
          text: `Unase a nuestro equipo`,
          href: `#`,
        },
      },
      navigationLinks: {
        text: [`Mas servicios...`],
        href: [`#`],
        icon: [`arrrowupright`],
      },
      customerTestimonials: {
        testimonials: [
          {
            name: `Adriana Espinosa.`,
            text: `Solucionaron mi emergencia con rapidez, profesionalidad e impecable precisión.`,
            imageUrl: `/images/main/testimonials/testimonial01.webp`,
            key: Math.random(),
          },
          {
            name: `Sergio Javier P.`,
            text: `Dejaron mi hogar reluciente, con atención, paciencia y cuidado excepcional.`,
            imageUrl: `/images/main/testimonials/testimonial02.webp`,
            key: Math.random(),
          },
          {
            name: `Jorge Melendez.`,
            text: `Al principio tenía mis dudas e inseguridades, pero todo salió bien y sin problemas.`,
            imageUrl: `/images/main/testimonials/testimonial03.webp`,
            key: Math.random(),
          },
          {
            name: `Juan Hernandez.`,
            text: `Tenía reservas al contratar, pero el servicio superó todas mis expectativas claramente.`,
            imageUrl: `/images/main/testimonials/testimonial04.webp`,
            key: Math.random(),
          },
        ],
        score: [
          { key: Math.random() },
          { key: Math.random() },
          { key: Math.random() },
          { key: Math.random() },
          { key: Math.random() },
        ],
      },
      somePromotions: {
        promotions: [
          {
            imageUrl: `/images/main/promotions/promotion01.webp`,
            href: `#`,
            key: Math.random(),
          },
          {
            imageUrl: `/images/main/promotions/promotion02.webp`,
            href: `#`,
            key: Math.random(),
          },
          {
            imageUrl: `/images/main/promotions/promotion03.webp`,
            href: `#`,
            key: Math.random(),
          },
          {
            imageUrl: `/images/main/promotions/promotion04.webp`,
            href: `#`,
            key: Math.random(),
          },
          {
            imageUrl: `/images/main/promotions/promotion05.webp`,
            href: `#`,
            key: Math.random(),
          },
          {
            imageUrl: `/images/main/promotions/promotion06.webp`,
            href: `#`,
            key: Math.random(),
          },
          {
            imageUrl: `/images/main/promotions/promotion07.webp`,
            href: `#`,
            key: Math.random(),
          },
        ],
      },
    },
  },
  navbar: {
    avatar: {
      imageUrl: '/images/avatar/Lisachen.webp',
      items: [
        {
          title: `Información`,
          key: `info`,
          description: `Información del usuario`,
          shortcut: '⌘',
        },
        {
          title: `Notificaciones`,
          key: `alert`,
          description: `Todas las notificaciones`,
          shortcut: '⌘',
        },
        { title: `Ajustes`, key: `setting`, description: `Todos los ajustes`, shortcut: '⌘' },
        { title: `Compartir`, key: `link`, description: `Compartir con otros`, shortcut: '⌘' },
        { title: `Subir foto`, key: `upload`, description: `Subir nueva foto`, shortcut: '⌘' },
        {
          title: `Cerrar sesión`,
          key: `logout`,
          description: `Cerrar sesión en la cuenta`,
          shortcut: '⌘',
        },
      ],
    },
    logo: { iconUrl: `/icon/logo.webp` },
    signUpButton: { text: `Regístrate` },
    links: [
      { text: `IrInicio`, key: Math.random() },
      { text: `Servicios`, key: Math.random() },
      { text: `Blog`, key: Math.random() },
      { text: `Proveedores`, key: Math.random() },
    ],
  },
  footer: {
    companyInformation: {
      links: [
        { href: `#`, text: `BLOG`, key: Math.random() },
        { href: `#`, text: `TESTIMONIOS`, key: Math.random() },
        { href: `#`, text: `EQUIPO`, key: Math.random() },
        { href: `#`, text: `ACERCA...`, key: Math.random() },
      ],
    },
    ourTeam: {
      members: [
        {
          imageUrl: `/images/footer/team/ourteam01.webp`,
          name: `John Doe`,
          key: Math.random(),
        },
        {
          imageUrl: `/images/footer/team/ourteam02.webp`,
          name: `Jane Smith`,
          key: Math.random(),
        },
        {
          imageUrl: `/images/footer/team/ourteam03.webp`,
          name: `Alice Johnson`,
          key: Math.random(),
        },
        {
          imageUrl: `/images/footer/team/ourteam04.webp`,
          name: `Bob Brown`,
          key: Math.random(),
        },
        {
          imageUrl: `/images/footer/team/ourteam05.webp`,
          name: `Charlie Davis`,
          key: Math.random(),
        },
        {
          imageUrl: `/images/footer/team/ourteam06.webp`,
          name: `Alice Johnson`,
          key: Math.random(),
        },
        {
          imageUrl: `/images/footer/team/ourteam07.webp`,
          name: `Bob Brown`,
          key: Math.random(),
        },
        {
          imageUrl: `/images/footer/team/ourteam08.webp`,
          name: `Charlie Davis`,
          key: Math.random(),
        },
        {
          imageUrl: `/images/footer/team/ourteam09.webp`,
          name: `Eve White`,
          key: Math.random(),
        },
        {
          imageUrl: `/images/footer/team/ourteam10.webp`,
          name: `John Lee`,
          key: Math.random(),
        },
      ],
    },
    socialNetworks: [
      {
        url: `https://www.facebook.com/share/18v9vJp693/`,
        icon: `facebook`,
        name: `Facebook`,
        key: Math.random(),
      },
      {
        url: `https://twitter.com/MaridoPor1Hora`,
        icon: `twitter`,
        name: `Twitter`,
        key: Math.random(),
      },
      {
        url: `https://www.instagram.com/maridopor1hora`,
        icon: `instagram`,
        name: `Instagram`,
        key: Math.random(),
      },
      {
        url: `https://api.whatsapp.com/send?phone=%2B34607088505&app=facebook&entry_point=page_cta&fbclid=IwY2xjawK6ZSRleHRuA2FlbQIxMABicmlkETFJZGpSY1NYUFRHVUpZcmJYAR6isiuK0Xkp5X60u0wiu0EAWwmEvor3lciKr9Os_Zy-FXA-fR86lamXzAn4gQ_aem_5yIeRp4q3qMelswNhf53MQ`,
        icon: `whatsapp`,
        name: `WhatsApp`,
        key: Math.random(),
      },
      {
        url: `https://youtube.com/MaridoPor1Hora`,
        icon: `youtube`,
        name: `YouTube`,
        key: Math.random(),
      },
    ],
    fourthTitle: [
      { text1: `Estamos para ti. Confía en nosotros.`, text2: `MaridoPor1Hora.` },
      { text1: `Nos puedes encontrar en :`, text2: `Social Networks.` },
    ],
    secondaryDescription: [
      `Ofrecemos mantenimiento, limpieza, reparaciones y mejoras para el hogar con profesionales confiables y soluciones rápidas. Su hogar está en las mejores manos.`,
    ],
    contactUs: [
      { icon: `email`, name: `contacto@maridopor1hora.com`, href: `#`, key: Math.random() },
      { icon: `phone`, name: `+34 607 088 505`, href: `#`, key: Math.random() },
    ],
    termsConditions: { text: `Copyright © 2025 Siatuweb. Todos los derechos reservados.` },
  },
}
export default sd
