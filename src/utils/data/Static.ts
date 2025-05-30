/* ------------------------------------------------------------------------- */
const sd = {
  home: {
    header: {
      mainTitle: {
        first: `Husband For An Hour`,
        second: `& Repair Solutions.`,
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
        texts: [`Location`, `Services`, `Search`],
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
  },
}
export default sd
