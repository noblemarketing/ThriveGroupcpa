type NavbarLogoProps = {
  className?: string
}

/**
 * Thrive Group CPA wordmark from `Client Resources/Logos/SVG/2tonedlogo.svg`,
 * served as `public/images/2tonedlogo.svg`.
 */
export function NavbarLogo({ className }: NavbarLogoProps) {
  return (
    <img
      src="/images/2tonedlogo.svg"
      alt="Thrive Group CPA"
      width={248}
      height={72}
      className={`h-auto w-auto max-w-full object-contain object-left ${className ?? ""}`}
      decoding="async"
    />
  )
}
