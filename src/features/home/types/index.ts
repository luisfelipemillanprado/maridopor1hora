// Type para los items Sticky
export type Sticky = {
  icon: string
  change: boolean
  key: number
}

// Type para los items de video
export type VideoUrlItem = {
  videoUrl: string
  key: number
}

// Props para el componente HomeHeader
export type HomeHeaderProps = {
  stickys: Sticky[]
  videoUrls: VideoUrlItem[]
}

// Puedes agregar aquí más types/interfaces según los vayas necesitando para otros componentes del feature
