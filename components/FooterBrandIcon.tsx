type FooterBrandIconProps = {
  className?: string
}

/**
 * Footer mark from `Client Resources/Logos/SVG/2tonedicon-inverse.svg`,
 * served as `public/images/2tonedicon-inverse.svg`.
 */
export function FooterBrandIcon({ className }: FooterBrandIconProps) {
  return (
    <img
      src="/images/2tonedicon-inverse.svg"
      alt=""
      width={837}
      height={688}
      className={`h-auto w-auto max-w-full shrink-0 self-start object-contain object-left ${className ?? ""}`}
      decoding="async"
      aria-hidden
    />
  )
}
