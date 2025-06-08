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
          { text: `Location`, icon: `location`, key: Math.random() },
          { text: `Services`, icon: `services`, key: Math.random() },
          { text: `Search`, icon: `search`, key: Math.random() },
        ],
      },
      metrics: [
        { amount: `18`, text: `Years of experience`, change: false },
        { amount: `4.3`, text: `Satisfied customers`, change: true },
        { amount: `25`, text: `Qualified experts`, change: false },
      ],
    },
    main: {
      trustBadge: {
        slogan: `The confidence that supports you.`,
        summary: `Our reputation is backed by thousands of customers around the world.`,
        rating: `5.0`,
        reviews: `145.239 • Excelent`,
        buttonText: `MaridoPor1Hora`,
      },
      secondaryTitles: {
        title: [
          `Featured Completed Works`,
          `All Our Customer Services`,
          `Here're, Your Answers`,
          `Join Our Team`,
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
        texts: [`Electrical`, `Carpentry`, `Cleaning`, `Maintenance`, `Furniture`, `Masonry`],
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
        name: [`Electrical.`, `Plumbing.`, `Furniture.`, `Masonry.`, `Carpentry.`, `Cleaning.`],
        description: [
          `Professional electrical services for residential and commercial needs.`,
          `All the best and most comprehensive plumbing services, installation and repair.`,
          `Expert technicians guarantee fast, safe, and accurate installation of your furniture.`,
          `Specialized masonry services for all types of home construction and repair projects.`,
          `Expert carpentry services for your home or office and other facilities.`,
          `Deep cleaning services to keep your space spotless and sparkling clean.`,
        ],
      },
      frequentlyAskedQuestions: {
        questions: [
          {
            question: `Are the materials included in the price or not?`,
            answer: `It's your choice: you can provide the materials, or we can source them for you at an additional cost, subject to approval.`,
            icon: `more`,
            key: Math.random(),
          },
          {
            question: `How can I schedule a service?`,
            answer: `You can book by phone, WhatsApp, or using the form on our website. We'll assign a technician within 24 hours (or immediately if it's an emergency).`,
            icon: `more`,
            key: Math.random(),
          },
          {
            question: `Do you serve on weekends and holidays?`,
            answer: `Yes, we operate Monday through Sunday, including holidays, with a 15% surcharge (except for returning customers).`,
            icon: `more`,
            key: Math.random(),
          },
          {
            question: `How much does the service cost?`,
            answer: `Cost varies depending on the job and time required. We offer hourly rates (starting at $XX/hour) or fixed quotes for complex projects.`,
            icon: `more`,
            key: Math.random(),
          },
          {
            question: `What payment methods do you accept?`,
            answer: `We accept cash, transfers, cards (debit/credit), and payment apps like Bizum. Payment is made after the service is completed.`,
            icon: `more`,
            key: Math.random(),
          },
          {
            question: `Do you offer a guarantee on the work?`,
            answer: `Yes: 30 days for repairs and 15 days for assembly (does not apply for misuse or damage unrelated to the service).`,
            icon: `more`,
            key: Math.random(),
          },
          {
            question: `Do you have promotions for frequent customers?`,
            answer: `¡Yes! Our loyalty program includes a 10% discount on the third service and priority service.`,
            icon: `more`,
            key: Math.random(),
          },
          {
            question: `How do I know my home is protected with you?`,
            answer: `Our technicians are uniformed, identified, and you can see their credentials upon arrival. Plus, they're all insured.`,
            icon: `more`,
            key: Math.random(),
          },
          {
            question: `Do you provide full time emergency service?`,
            answer: `Yes, for real emergencies (such as flooding or electrical hazards) we have 24/7 service with an additional charge.`,
            icon: `more`,
            key: Math.random(),
          },
        ],
      },
      joinOurTeam: {},
    },
  },
  navbar: {
    avatar: {
      imageUrl: '/images/avatar/Lisachen.webp',
      items: [
        { title: `Information`, key: 'info', description: `User information`, shortcut: '⌘' },
        { title: `Notifications`, key: 'alert', description: `All notifications`, shortcut: '⌘' },
        { title: `Settings`, key: 'setting', description: `All settings`, shortcut: '⌘' },
        { title: `Share`, key: 'link', description: `Share with others`, shortcut: '⌘' },
        { title: `Upload photo`, key: 'upload', description: `Upload new photo`, shortcut: '⌘' },
        { title: `Log out`, key: 'logout', description: `Log out account`, shortcut: '⌘' },
      ],
    },
    logo: { iconUrl: `/icon/logo.webp` },
    signUpButton: { text: `Sign Up` },
    links: [
      { text: `GoHome`, key: Math.random() },
      { text: `Categories`, key: Math.random() },
      { text: `Services`, key: Math.random() },
      { text: `Blogs`, key: Math.random() },
      { text: `Suppliers`, key: Math.random() },
    ],
  },
  footer: {
    companyInformation: {
      links: [
        { href: '#', text: 'BLOG', key: Math.random() },
        { href: '#', text: 'TESTIMONIALS', key: Math.random() },
        { href: '#', text: 'TEAM', key: Math.random() },
        { href: '#', text: 'ABOUT', key: Math.random() },
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
        url: `https://facebook.com/MaridoPor1Hora`,
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
        url: `https://instagram.com/MaridoPor1Hora`,
        icon: `instagram`,
        name: `Instagram`,
        key: Math.random(),
      },
      {
        url: `https://whatsapp.com/MaridoPor1Hora`,
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
      { text1: `We're here for you. Trust us.`, text2: `MaridoPor1Hora.` },
      { text1: `You can find us at.`, text2: `Social Networks.` },
    ],
    secondaryDescription: [
      `We offer home maintenance, cleaning, repairs, and improvements with reliable professionals and fast solutions. Your home is in the best hands.`,
    ],
    contactUs: [
      { icon: `email`, name: `contacto@maridopor1hora.es`, href: `#`, key: Math.random() },
      { icon: `phone`, name: `+34 675 01 23 32`, href: `#`, key: Math.random() },
    ],
    termsConditions: { text: `Copyright © 2020 Siatuweb. All rights reserved.` },
  },
}
export default sd
