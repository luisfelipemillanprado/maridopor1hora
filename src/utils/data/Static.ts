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
        speedPeekCars: [
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
      multipleLinkButtons: {
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
        summary: `Our reputation is backed by thousands of customers around the world`,
        rating: `4.5`,
        reviews: `145.239 Reseñas`,
        buttonText: `maridopor1hora`,
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
