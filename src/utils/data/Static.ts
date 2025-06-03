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
        title: [`Featured completed works`, `All our customer services`],
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
          `Técnicos expertos que garantizan una instalación rápida, segura y precisa.`,
          `Specialized masonry services for all types of home construction and repair projects.`,
          `Expert carpentry services for your home or office and other facilities.`,
          `Deep cleaning services to keep your space spotless and sparkling clean.`,
        ],
      },
    },
  },
  navbar: {
    avatar: {
      imageUrl: '/images/avatar/Lisachen.webp',
      content: ``,
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
  },
}
export default sd
