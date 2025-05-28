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
      sliders: {
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
        speedPeekCars: [
          {
            imageUrl:
              'https://storage.googleapis.com/rent-cars-now-bcket/dashboard/allcars/teslas/cybertruck2024/imagegallery/cybertruck032024.webp',
            key: Math.random(),
          },
          {
            imageUrl:
              'https://storage.googleapis.com/rent-cars-now-bcket/dashboard/allcars/mercedesbenz/mercedesbenz2020/imagegallery/mercedesbenz012020.webp',
            key: Math.random(),
          },
          {
            imageUrl:
              'https://storage.googleapis.com/rent-cars-now-bcket/dashboard/allcars/mercedesbenz/mercedesbenz2020/imagegallery/mercedesbenz102020.webp',
            key: Math.random(),
          },
          {
            imageUrl:
              'https://storage.googleapis.com/rent-cars-now-bcket/dashboard/allcars/teslas/teslaRoadster2021/imagegallery/teslaRoadster042021.webp',
            key: Math.random(),
          },
          {
            imageUrl:
              'https://storage.googleapis.com/rent-cars-now-bcket/dashboard/allcars/bmw/bmw4series30i2025/imagegallery/bmw4series30i022025.webp',
            key: Math.random(),
          },
          {
            imageUrl:
              'https://storage.googleapis.com/rent-cars-now-bcket/dashboard/allcars/bmw/bmw4series30i2025/imagegallery/bmw4series30i072025.webp',
            key: Math.random(),
          },
        ],
      },
    },
  },
}
export default sd
