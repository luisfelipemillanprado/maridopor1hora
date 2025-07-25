/**
 * @description - Static data object containing configuration and content for the application's UI.
 * @property {object} home - Contains data for the home page.
 * @property {object} navbar - Contains data for the navigation bar.
 */
const sd = {
  home: {
    header: {
      mainTitle: {
        first: `Conectándote con los mejores`,
        second: `servicios, y a los mejores precios.`,
      },
      sliders: {
        peekServices: [
          {
            imageUrl: `/images/header/multipleservices/multipleservices05.webp`,
            key: Math.random(),
          },
          {
            imageUrl: `/images/header/multipleservices/multipleservices06.webp`,
            key: Math.random(),
          },
          {
            imageUrl: `/images/header/multipleservices/multipleservices07.webp`,
            key: Math.random(),
          },
          {
            imageUrl: `/images/header/multipleservices/multipleservices01.webp`,
            key: Math.random(),
          },
          {
            imageUrl: `/images/header/multipleservices/multipleservices03.webp`,
            key: Math.random(),
          },
          {
            imageUrl: `/images/header/multipleservices/multipleservices04.webp`,
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
          { text: `Únetenos`, icon: `team`, key: Math.random() },
        ],
      },
      metrics: [
        {
          amount: `400`,
          icon: `frequent`,
          text: `Clientes frecuentes`,
          description: `Garantía de excelencia avalada por familias.`,
          change: false,
          key: Math.random(),
        },
        {
          amount: `4.3`,
          icon: `satisfied`,
          text: `Clientes satisfechos`,
          description: `Su felicidad en el hogar, es nuestra meta.`,
          change: true,
          key: Math.random(),
        },
        {
          amount: `25`,
          icon: `qualified`,
          text: `Expertos calificados`,
          description: `Soluciones expertas para cada hogar.`,
          change: false,
          key: Math.random(),
        },
      ],
      popularServices: {
        services: [
          { text: `Limpieza`, icon: `clear`, href: `#`, key: Math.random() },
          { text: `Electricista`, icon: `electrician`, href: `#`, key: Math.random() },
          { text: `Fontanería`, icon: `plumbing`, href: `#`, key: Math.random() },
          { text: `Clima`, icon: `airconditioner`, href: `#`, key: Math.random() },
          { text: `Muebles`, icon: `furniture`, href: `#`, key: Math.random() },
        ],
      },
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
          `Obras Completas Destacadas.`,
          `Todos Nuestros Servicios.`,
          `Aquí, Tus Respuestas.`,
          `Somos Tu Mejor Elección.`,
          `Unete A Nuestro Equipo.`,
          `Testimonios De Clientes.`,
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
        texts: [`Electricista.`, `Carpintería.`, `Limpieza.`, `Mantenimiento.`, `Muebles.`, `Albañilería.`],
        ratings: [4.5, 4.5, 4.8, 4.6, 4.5, 4.7],
        teams: [
          {
            workers: [
              { src: `/images/footer/team/team01.webp`, key: Math.random() },
              { src: `/images/footer/team/team02.webp`, key: Math.random() },
              { src: `/images/footer/team/team03.webp`, key: Math.random() },
              { src: `/images/footer/team/team04.webp`, key: Math.random() },
              { src: `/images/footer/team/team05.webp`, key: Math.random() },
              { src: `/images/footer/team/team06.webp`, key: Math.random() },
            ],
            maxCount: 5,
            totalCount: 6,
          },
          {
            workers: [
              { src: `/images/footer/team/team10.webp`, key: Math.random() },
              { src: `/images/footer/team/team09.webp`, key: Math.random() },
              { src: `/images/footer/team/team08.webp`, key: Math.random() },
              { src: `/images/footer/team/team07.webp`, key: Math.random() },
              { src: `/images/footer/team/team08.webp`, key: Math.random() },
              { src: `/images/footer/team/team09.webp`, key: Math.random() },
            ],
            maxCount: 4,
            totalCount: 7,
          },
          {
            workers: [
              { src: `/images/footer/team/team01.webp`, key: Math.random() },
              { src: `/images/footer/team/team02.webp`, key: Math.random() },
              { src: `/images/footer/team/team03.webp`, key: Math.random() },
              { src: `/images/footer/team/team04.webp`, key: Math.random() },
              { src: `/images/footer/team/team05.webp`, key: Math.random() },
              { src: `/images/footer/team/team06.webp`, key: Math.random() },
            ],
            maxCount: 5,
            totalCount: 6,
          },
          {
            workers: [
              { src: `/images/footer/team/team07.webp`, key: Math.random() },
              { src: `/images/footer/team/team01.webp`, key: Math.random() },
              { src: `/images/footer/team/team02.webp`, key: Math.random() },
              { src: `/images/footer/team/team05.webp`, key: Math.random() },
              { src: `/images/footer/team/team08.webp`, key: Math.random() },
              { src: `/images/footer/team/team03.webp`, key: Math.random() },
            ],
            maxCount: 4,
            totalCount: 5,
          },
          {
            workers: [
              { src: `/images/footer/team/team03.webp`, key: Math.random() },
              { src: `/images/footer/team/team07.webp`, key: Math.random() },
              { src: `/images/footer/team/team05.webp`, key: Math.random() },
              { src: `/images/footer/team/team09.webp`, key: Math.random() },
              { src: `/images/footer/team/team04.webp`, key: Math.random() },
              { src: `/images/footer/team/team02.webp`, key: Math.random() },
            ],
            maxCount: 4,
            totalCount: 6,
          },
          {
            workers: [
              { src: `/images/footer/team/team03.webp`, key: Math.random() },
              { src: `/images/footer/team/team06.webp`, key: Math.random() },
              { src: `/images/footer/team/team05.webp`, key: Math.random() },
              { src: `/images/footer/team/team08.webp`, key: Math.random() },
              { src: `/images/footer/team/team04.webp`, key: Math.random() },
              { src: `/images/footer/team/team01.webp`, key: Math.random() },
            ],
            maxCount: 5,
            totalCount: 5,
          },
        ],
      },
      allOurServices: {
        imageUrls: [
          { imageUrl: `/images/main/services/serviceelectrical01.webp`, key: Math.random() },
          { imageUrl: `/images/main/services/serviceplumbing02.webp`, key: Math.random() },
          { imageUrl: `/images/main/services/serviceclimax03.webp`, key: Math.random() },
          { imageUrl: `/images/main/services/servicemasonry05.webp`, key: Math.random() },
          { imageUrl: `/images/main/services/servicecarpentry04.webp`, key: Math.random() },
          { imageUrl: `/images/main/services/servicecleaning06.webp`, key: Math.random() },
        ],
        name: [`Electricista.`, `Fontanería.`, `Climatización.`, `Albañilería.`, `Carpintería.`, `Limpieza.`],
        description: [
          `Servicios eléctricos profesionales para hogares y negocios. Garantizamos soluciones seguras, eficientes y personalizadas.`,
          `Fontanería experta: instalación, reparación y mantenimiento. Soluciones rápidas y duraderas para tu hogar.`,
          `Instalación profesional de muebles. Montaje rápido, seguro y preciso para hogares, oficinas, locales comerciales u otros.`,
          `Albañilería especializada en construcción, reformas y reparaciones. Trabajos de calidad con materiales resistentes.`,
          `Carpintería de alta calidad: muebles a medida, puertas y ventanas para hogares, oficinas y proyectos personalizados.`,
          `Limpieza profunda y mantenimiento de espacios. Dejamos tu hogar o negocio impecable, higiénico y libre de bacterias.`,
        ],
      },
      frequentlyAskedQuestions: {
        questions: [
          {
            question: `¿Los materiales están incluidos en el precio o no?`,
            answer: `La elección es suya: los materiales no están incluidos, pero podemos conseguirlos por un costo adicional, sujeto a aprobación.`,
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
            answer: `El costo varía según el trabajo y el tiempo requerido. Ofrecemos tarifas por hora (desde 45€-75€/hora) o presupuestos fijos para proyectos complejos.`,
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
        href: [`/dashboard`],
        icon: [`arrowupright`],
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
            text: `Tenía reservas al contratar, pero el servicio superó todas mis expectativas.`,
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
      introduction: {
        text: [
          `En Marido por una Hora, nos enorgullece ofrecer un servicio de calidad, pero no lo decimos
          solo nosotros. Descubre lo que nuestros clientes tienen que decir sobre sus experiencias
          con nosotros. Sus opiniones nos ayudan a seguir mejorando y a brindar soluciones rápidas y
          efectivas para el hogar. ¡Lee las valoraciones y únete a la familia de clientes
          satisfechos!`,
        ],
      },
      advertisingFlyer: {
        title: `Aprovecha nuestras ofertas.`,
        text: `Compara precios y contrata nuestros servicios donde quiera que estés. Rápido y fácil.`,
        buttonText: `¡Reserva ya..!`,
        imageUrl: `/images/main/flyer/flyer.webp`,
        href: `#`,
      },
      receiveNotifications: {
        title: `Recibe ofertas exclusivas.`,
        text: `Registra tu correo electrónico para recibir promociones exclusivas de MaridoPor1Hora.`,
        buttonText: `¡Regístrate aquí..!`,
        placeholder: [`name: juan`, `ejemplo@gmail.com`],
        type: [`text`, `email`],
        name: [`name`, `email`],
      },
      certifications: {
        imageUrls: [
          { imageUrl: `/icon/certification01.svg`, key: Math.random() },
          { imageUrl: `/icon/certification02.svg`, key: Math.random() },
          { imageUrl: `/icon/certification03.svg`, key: Math.random() },
          { imageUrl: `/icon/certification04.svg`, key: Math.random() },
          { imageUrl: `/icon/certification05.svg`, key: Math.random() },
        ],
      },
    },
  },
  dashboard: {
    mainTitles: {
      titles: [`Encuentra todos tus servicios aquí.`],
    },
    secondaryTitles: {
      title: [
        `Servicios Más Solicitados.`,
        `Limpieza, Control De Plagas.`,
        `Servicios De Fontanería.`,
        `Servicios De Electricista.`,
        `Servicios De Albañilería.`,
        `Servicios De Carpintería.`,
        `Servicios De Climatización.`,
      ],
    },
    searchService: {
      placeholder: [`tipo de servicio a buscar...`],
      type: [`text`],
      name: [`search`],
      buttonText: `Buscar`,
      labelPlacement: `inside`,
      label: `Tipo de servicio`,
      serviceType: [
        { key: `electrician`, label: `Electricista` },
        { key: `airconditioning`, label: `Climatización` },
        { key: `plumbing`, label: `Fontanería` },
        { key: `masonry`, label: `Albañilería` },
        { key: `carpentry`, label: `Carpintería` },
        { key: `cleaning`, label: `Limpieza` },
      ],
    },
    typesOfServices: {
      imageUrls: [
        {
          name: `Electricista`,
          imageUrl: `/images/main/services/serviceelectrical01.webp`,
          key: Math.random(),
        },
        {
          name: `Fontanería`,
          imageUrl: `/images/main/services/serviceplumbing02.webp`,
          key: Math.random(),
        },
        {
          name: `Climatizar`,
          imageUrl: `/images/main/services/serviceclimax03.webp`,
          key: Math.random(),
        },
        {
          name: `Albañilería`,
          imageUrl: `/images/main/services/servicemasonry05.webp`,
          key: Math.random(),
        },
        {
          name: `Carpintería`,
          imageUrl: `/images/main/services/servicecarpentry04.webp`,
          key: Math.random(),
        },
        {
          name: `Limpieza`,
          imageUrl: `/images/main/services/servicecleaning06.webp`,
          key: Math.random(),
        },
        {
          name: `Pladur`,
          imageUrl: `/images/main/services/serviceplasterboard08.webp`,
          key: Math.random(),
        },
        {
          name: `Manitas`,
          imageUrl: `/images/main/services/servicehandyman07.webp`,
          key: Math.random(),
        },
      ],
    },
    mostBookedServices: {
      bookedServices: [
        {
          text: `Mantenimiento de aire-acondicionado.`,
          imageUrl: `/images/main/bookedservice/bookedservice05.webp`,
          price: `80-200 €/tratamiento`,
          rating: 4.5,
          key: Math.random(),
        },
        {
          text: `Limpieza básica (o premium) del hogar.`,
          imageUrl: `/images/main/bookedservice/bookedservice08.webp`,
          price: `10-15 €/hora`,
          rating: 4.5,
          key: Math.random(),
        },
        {
          text: `Control de plagas (chinches y otros).`,
          imageUrl: `/images/main/bookedservice/bookedservice01.webp`,
          price: `150-300 €/tratamiento`,
          rating: 4.5,
          key: Math.random(),
        },
        {
          text: `Fontanería y reparaciones urgentes.`,
          imageUrl: `/images/main/bookedservice/bookedservice02.webp`,
          price: `25-100 €/hora`,
          rating: 4.5,
          key: Math.random(),
        },
        {
          text: `Montaje de muebles y sistemas IKEA.`,
          imageUrl: `/images/main/services/servicecarpentry04.webp`,
          price: `150-300 €/tratamiento`,
          rating: 4.5,
          key: Math.random(),
        },
        {
          text: `Pintura del hogar (completa o parcial).`,
          imageUrl: `/images/main/bookedservice/bookedservice09.webp`,
          price: `	4-25 €/m² tratamiento`,
          rating: 4.5,
          key: Math.random(),
        },
        {
          text: `Limpieza de alfombras y muebles.`,
          imageUrl: `/images/main/bookedservice/bookedservice07.webp`,
          price: `	15-100 €/tratamiento`,
          rating: 4.5,
          key: Math.random(),
        },
        {
          text: `Lavandería y tintorería a domicilio.`,
          imageUrl: `/images/main/bookedservice/bookedservice06.webp`,
          price: `	10-125 €/tratamiento`,
          rating: 4.5,
          key: Math.random(),
        },
        {
          text: `Limpieza de cristales y ventanas.`,
          imageUrl: `/images/main/bookedservice/bookedservice03.webp`,
          price: `	80-350 €/tratamiento`,
          rating: 4.5,
          key: Math.random(),
        },
      ],
    },
    detailsServices: {
      cleaningPestControl: [
        {
          text: `Limpieza de paredes, techos y ventanas.`,
          imageUrl: `/images/main/cleaningpestcontrol/cleaningpestcontrol05.webp`,
          key: Math.random(),
        },
        {
          text: `Limpieza profunda de cocina.`,
          imageUrl: `/images/main/cleaningpestcontrol/cleaningpestcontrol01.webp`,
          key: Math.random(),
        },
        {
          text: `Limpieza completa del hogar.`,
          imageUrl: `/images/main/cleaningpestcontrol/cleaningpestcontrol03.webp`,
          key: Math.random(),
        },
        {
          text: `Lavado de alfombras, tapicerías y cortinas.`,
          imageUrl: `/images/main/cleaningpestcontrol/cleaningpestcontrol02.webp`,
          key: Math.random(),
        },
        {
          text: `Limpieza profunda de baños.`,
          imageUrl: `/images/main/cleaningpestcontrol/cleaningpestcontrol04.webp`,
          key: Math.random(),
        },
        {
          text: `Control de plagas (roedores e insectos).`,
          imageUrl: `/images/main/cleaningpestcontrol/cleaningpestcontrol06.webp`,
          key: Math.random(),
        },
        {
          text: `Limpieza post-obra o post-mudanza.`,
          imageUrl: `/images/main/cleaningpestcontrol/cleaningpestcontrol07.webp`,
          key: Math.random(),
        },
      ],
      plumbing: [
        {
          text: `Montaje de sistemas de calefacción y ACS.`,
          imageUrl: `/images/main/plumbing/plumbing02.webp`,
          key: Math.random(),
        },
        {
          text: `Cambio de cisternas, inodoros, bidés.`,
          imageUrl: `/images/main/plumbing/plumbing01.webp`,
          key: Math.random(),
        },
        {
          text: `Recambio de tuberías rotas.`,
          imageUrl: `/images/main/plumbing/plumbing03.webp`,
          key: Math.random(),
        },
        {
          text: `Sellado de juntas y conexiones.`,
          imageUrl: `/images/main/plumbing/plumbing04.webp`,
          key: Math.random(),
        },
        {
          text: `Reemplazo de válvulas y grifos defectuosos.`,
          imageUrl: `/images/main/plumbing/plumbing05.webp`,
          key: Math.random(),
        },
        {
          text: `Colocación de lavavajillas y lavadoras.`,
          imageUrl: `/images/main/plumbing/plumbing06.webp`,
          key: Math.random(),
        },
        {
          text: `Colocación de mamparas y duchas.`,
          imageUrl: `/images/main/plumbing/plumbing07.webp`,
          key: Math.random(),
        },
        {
          text: `Eliminación de atascos en tuberías.`,
          imageUrl: `/images/main/plumbing/plumbing08.webp`,
          key: Math.random(),
        },
      ],
      electrician: [
        {
          text: `Instalación y reparación de luminarias.`,
          imageUrl: `/images/main/electrician/electrician03.webp`,
          key: Math.random(),
        },
        {
          text: `Instalación de sistemas de vigilancia.`,
          imageUrl: `/images/main/electrician/electrician01.webp`,
          key: Math.random(),
        },
        {
          text: `Detección y reparación de cortocircuitos.`,
          imageUrl: `/images/main/electrician/electrician02.webp`,
          key: Math.random(),
        },
        {
          text: `Instalación de sistemas de domótica.`,
          imageUrl: `/images/main/electrician/electrician04.webp`,
          key: Math.random(),
        },
        {
          text: `Instalación de sensores de humo y gas.`,
          imageUrl: `/images/main/electrician/electrician05.webp`,
          key: Math.random(),
        },
        {
          text: `Instalación de paneles de interruptores.`,
          imageUrl: `/images/main/electrician/electrician06.webp`,
          key: Math.random(),
        },
        {
          text: `Instalación de timbres inteligentes.`,
          imageUrl: `/images/main/electrician/electrician07.webp`,
          key: Math.random(),
        },
        {
          text: `Sustitución de mecanismos eléctricos.`,
          imageUrl: `/images/main/electrician/electrician08.webp`,
          key: Math.random(),
        },
        {
          text: `Inspección eléctrica de la vivienda.`,
          imageUrl: `/images/main/electrician/electrician09.webp`,
          key: Math.random(),
        },
      ],
      masonry: [
        {
          text: `Colocación de azulejos y baldosas.`,
          imageUrl: `/images/main/masonry/masonry01.webp`,
          key: Math.random(),
        },
        {
          text: `Construcción de muros perimetrales.`,
          imageUrl: `/images/main/masonry/masonry02.webp`,
          key: Math.random(),
        },
        {
          text: `Construcción de escaleras interiores.`,
          imageUrl: `/images/main/masonry/masonry03.webp`,
          key: Math.random(),
        },
        {
          text: `Acabados decorativos, modernos y duraderos.`,
          imageUrl: `/images/main/masonry/masonry04.webp`,
          key: Math.random(),
        },
        {
          text: `Pavimentación de patios, terrazas y jardines.`,
          imageUrl: `/images/main/masonry/masonry05.webp`,
          key: Math.random(),
        },
        {
          text: `Rehabilitación de revestimientos de exteriores.`,
          imageUrl: `/images/main/masonry/masonry06.webp`,
          key: Math.random(),
        },
        {
          text: `Cerramiento o cerco de terrazas de lujo.`,
          imageUrl: `/images/main/masonry/masonry07.webp`,
          key: Math.random(),
        },
        {
          text: `Preparación de paredes para acabados decorativos.`,
          imageUrl: `/images/main/masonry/masonry08.webp`,
          key: Math.random(),
        },
        {
          text: `Reparación de techos, paredes y suelos.`,
          imageUrl: `/images/main/masonry/masonry09.webp`,
          key: Math.random(),
        },
      ],
      carpentry: [
        {
          text: `Carpintería de muebles de cocina a medida.`,
          imageUrl: `/images/main/carpentry/carpentry01.webp`,
          key: Math.random(),
        },
        {
          text: `Colocación de parquet laminado o flotante.`,
          imageUrl: `/images/main/carpentry/carpentry03.webp`,
          key: Math.random(),
        },
        {
          text: `Renovación sin cambiar de suelos antiguos.`,
          imageUrl: `/images/main/carpentry/carpentry02.webp`,
          key: Math.random(),
        },
        {
          text: `Cambio o reparación de puertas interiores.`,
          imageUrl: `/images/main/carpentry/carpentry08.webp`,
          key: Math.random(),
        },
        {
          text: `Cambio o reparación de ventanas de PVC o aluminio.`,
          imageUrl: `/images/main/carpentry/carpentry04.webp`,
          key: Math.random(),
        },
        {
          text: `Montaje de muebles de Ikea o similares`,
          imageUrl: `/images/main/carpentry/carpentry06.webp`,
          key: Math.random(),
        },
        {
          text: `Armarios y vestidores modernos empotrados.`,
          imageUrl: `/images/main/carpentry/carpentry05.webp`,
          key: Math.random(),
        },
        {
          text: `Carpintería de estanterías y librerías a medida.`,
          imageUrl: `/images/main/carpentry/carpentry07.webp`,
          key: Math.random(),
        },
      ],
      airConditioning: [
        {
          text: `Instalación de sistemas de extracción de aire.`,
          imageUrl: `/images/main/airconditioning/airconditioning02.webp`,
          key: Math.random(),
        },
        {
          text: `Mantenimiento periódico de sistemas de compresores.`,
          imageUrl: `/images/main/airconditioning/airconditioning01.webp`,
          key: Math.random(),
        },
        {
          text: `Desinstalación y retirada de equipos de aire acondicionado.`,
          imageUrl: `/images/main/airconditioning/airconditioning03.webp`,
          key: Math.random(),
        },
        {
          text: `Instalación de equipos de aire acondicionado.`,
          imageUrl: `/images/main/airconditioning/airconditioning04.webp`,
          key: Math.random(),
        },
        {
          text: `Reparación de sistemas de aire acondicionado.`,
          imageUrl: `/images/main/airconditioning/airconditioning05.webp`,
          key: Math.random(),
        },
        {
          text: `Reparación de sistemas de aire acondicionado.`,
          imageUrl: `/images/main/airconditioning/airconditioning06.webp`,
          key: Math.random(),
        },
        {
          text: `Reparación de sistemas de aire acondicionado.`,
          imageUrl: `/images/main/airconditioning/airconditioning07.webp`,
          key: Math.random(),
        },
      ],
    },
  },
  navbar: {
    avatar: {
      imageUrl: '/images/avatar/Lisachen.webp',
      items: [
        {
          title: `Información.`,
          key: `info`,
          description: `Información del usuario.`,
          shortcut: '⌘',
        },
        {
          title: `Notificaciones.`,
          key: `alert`,
          description: `Todas las notificaciones.`,
          shortcut: '⌘',
        },
        { title: `Ajustes.`, key: `setting`, description: `Todos los ajustes.`, shortcut: '⌘' },
        { title: `Compartir.`, key: `link`, description: `Compartir con otros.`, shortcut: '⌘' },
        { title: `Subir foto.`, key: `upload`, description: `Subir nueva foto.`, shortcut: '⌘' },
        {
          title: `Cerrar sesión.`,
          key: `logout`,
          description: `Cerrar sesión.`,
          shortcut: '⌘',
        },
      ],
    },
    logo: { iconUrl: `/icon/logo.webp` },
    signUpButton: { text: `Regístrate` },
    links: [
      { text: `Inicio`, href: `#`, key: Math.random() },
      { text: `Servicios`, href: `#`, key: Math.random() },
      { text: `Blog`, href: `#`, key: Math.random() },
      { text: `Proveedores`, href: `#`, key: Math.random() },
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
          imageUrl: `/images/footer/team/team01.webp`,
          name: `John Doe`,
          key: Math.random(),
        },
        {
          imageUrl: `/images/footer/team/team02.webp`,
          name: `Jane Smith`,
          key: Math.random(),
        },
        {
          imageUrl: `/images/footer/team/team03.webp`,
          name: `Alice Johnson`,
          key: Math.random(),
        },
        {
          imageUrl: `/images/footer/team/team04.webp`,
          name: `Bob Brown`,
          key: Math.random(),
        },
        {
          imageUrl: `/images/footer/team/team05.webp`,
          name: `Charlie Davis`,
          key: Math.random(),
        },
        {
          imageUrl: `/images/footer/team/team06.webp`,
          name: `Alice Johnson`,
          key: Math.random(),
        },
        {
          imageUrl: `/images/footer/team/team07.webp`,
          name: `Bob Brown`,
          key: Math.random(),
        },
        {
          imageUrl: `/images/footer/team/team08.webp`,
          name: `Charlie Davis`,
          key: Math.random(),
        },
        {
          imageUrl: `/images/footer/team/team09.webp`,
          name: `Eve White`,
          key: Math.random(),
        },
        {
          imageUrl: `/images/footer/team/team10.webp`,
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
      { text1: `Nos puedes encontrar acá:`, text2: `Social Networks.` },
    ],
    otherLinks: {
      titles: [`Compañía`, `Clientes`, `Afiliados`],
      links: [
        { text: `Política de privacidad`, href: `#`, key: Math.random() },
        { text: `Relaciones con inversores`, href: `#`, key: Math.random() },
        { text: `Mejores precios garantizados`, href: `#`, key: Math.random() },
        { text: `Términos y condiciones`, href: `#`, key: Math.random() },
        { text: `Todos los proveedores`, href: `#`, key: Math.random() },
        { text: `Todos los profesionales`, href: `#`, key: Math.random() },
        { text: `Preguntas fecuentes`, href: `#`, key: Math.random() },
        { text: `Gestiona mi reserva`, href: `#`, key: Math.random() },
        { text: `Contáctanos`, href: `#`, key: Math.random() },
        { text: `Tarifas de los servicios`, href: `#`, key: Math.random() },
        { text: `Testimonios de clientes`, href: `#`, key: Math.random() },
        { text: `Promociones especiales`, href: `#`, key: Math.random() },
        { text: `Sobre maridopor1hora`, href: `#`, key: Math.random() },
      ],
    },
    secondaryDescription: [
      `Ofrecemos mantenimiento, limpieza, reparaciones y mejoras para el hogar con profesionales confiables y soluciones rápidas. Su hogar está en las mejores manos.`,
    ],
    contactUs: [
      { icon: `email`, name: `contacto@maridopor1hora.com`, href: `#`, key: Math.random() },
      { icon: `phone`, name: `+34 607 088 505`, href: `#`, key: Math.random() },
    ],
    termsConditions: { text: `Copyright © 2025 Siatuweb. Todos los derechos reservados.` },
  },
  contactFloatButton: {
    imageUrl: `/icon/whatsapp.webp`,
    href: `https://api.whatsapp.com/send?phone=%2B34607088505&app=facebook&entry_point=page_cta&fbclid=IwY2xjawK6ZSRleHRuA2FlbQIxMABicmlkETFJZGpSY1NYUFRHVUpZcmJYAR6isiuK0Xkp5X60u0wiu0EAWwmEvor3lciKr9Os_Zy-FXA-fR86lamXzAn4gQ_aem_5yIeRp4q3qMelswNhf53MQ`,
  },
}
export default sd
