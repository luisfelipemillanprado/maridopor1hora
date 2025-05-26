/* ------------------------------------------------------------------------- */
const sd = {
  home: {
    header: {
      stickys: [
        { icon: 'bolt', change: true, key: Math.random() },
        { icon: 'adjustement', change: false, key: Math.random() },
        { icon: 'automatic', change: false, key: Math.random() },
        { icon: 'wifi', change: false, key: Math.random() },
      ],
      slider: {
        quickLookCars: [
          {
            videoUrl:
              'https://storage.googleapis.com/rent-cars-now-bcket/homepage/header/mainslider/mainSlider01.mp4',
            key: Math.random(),
          },
          {
            videoUrl:
              'https://storage.googleapis.com/rent-cars-now-bcket/homepage/header/mainslider/mainSlider02.mp4',
            key: Math.random(),
          },
          {
            videoUrl:
              'https://storage.googleapis.com/rent-cars-now-bcket/homepage/header/mainslider/mainSlider03.mp4',
            key: Math.random(),
          },
        ],
      },
    },
  },
}
export default sd
