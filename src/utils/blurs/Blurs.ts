/**
 * @description - A base64-encoded WebP image used as a placeholder blur effect.
 * This data URL can be used as a low-quality image placeholder (LQIP) for image loading,
 * providing a blurred preview while the full-resolution image loads.
 * @remarks - The image is encoded in WebP format and embedded directly as a data URL.
 * @example - ``` tsx <img src={blurUrl} alt="Blurred placeholder" />
 * ```
 */
const blurUrl = `data:image/webp;base64,UklGRooCAABXRUJQVlA4WAoAAAAgAAAAXAAAXAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggnAAAAPAGAJ0BKl0AXQA+7WiuVCmlKaMkczsZMB2JaQb45o7gSJkA2yz47RlwD6hagXqx3GOy/J7lCLSg27e+nRbJgyAA/tmrUm9NkaunbXiC2ltXfewAli+dcilD57z8jSoEBHrTkyceObzEmlM1xh7qYeb0sp8UKXj/8LieWZ/CN6p8vxB+BmEUYwlXpBdVDz6Bl7lE/c9SNgYShgAAAA==`

/**
 * @description - An object containing URLs or references to various blur effects.
 * @property avatarBlurUrl - The URL or reference for the avatar blur effect.
 */
const blurEffects = {
  blurUrl,
}
export default blurEffects
