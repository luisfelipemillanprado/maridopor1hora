/**
 * @function GraphicsIcon
 * @param props
 * @returns JSX.Element
 */
export const GraphicsIcon = (props: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='5 0 367 91'
    className={props.className}
    style={{ width: '100%', height: '100%' }}
  >
    <defs>
      <linearGradient id='colorUv0' x1='0' x2='0' y1='0' y2='1'>
        <stop offset='10%' stopColor='hsl(var(--heroui-warning))' stopOpacity='0.3' />
        <stop offset='100%' stopColor='hsl(var(--heroui-warning))' stopOpacity='0.1' />
      </linearGradient>
    </defs>
    <path
      fill='url(#colorUv0)'
      fillOpacity='0.6'
      stroke='none'
      d='M5,68.235L41.7,83.412L78.4,50.529L115.1,60.647L151.8,42.941L188.5,58.118L225.2,37.882L261.9,50.529L298.6,27.765L335.3,35.353L372,5L372,91L335.3,91L298.6,91L261.9,91L225.2,91L188.5,91L151.8,91L115.1,91L78.4,91L41.7,91L5,91Z'
    />
    <path
      fill='none'
      stroke='hsl(var(--heroui-warning))'
      strokeWidth={1.5} // Línea más gruesa
      fillOpacity='0.6'
      d='M5,68.235L41.7,83.412L78.4,50.529L115.1,60.647L151.8,42.941L188.5,58.118L225.2,37.882L261.9,50.529L298.6,27.765L335.3,35.353L372,5'
      style={{
        strokeDasharray: 600,
        strokeDashoffset: 600,
        animation: 'drawLine 7s linear 3s 1 normal forwards',
      }}
    />
    <style>
      {`
        @keyframes drawLine {
          0% {
            stroke-dashoffset: 600;
          }
          /* dibujo durante los primeros 5s (5/8 = 62.5%) y mantiene el trazo el resto para crear pausa */
          62.5% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}
    </style>
  </svg>
)
