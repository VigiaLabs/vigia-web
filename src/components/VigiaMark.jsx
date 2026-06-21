// VIGIA emblem — a winged "V" inside crossed atomic orbits. Monochrome line art
// (inherits color via currentColor) to match the brand logo. This is a faithful
// approximation; drop in the final vector asset when ready.
export default function VigiaMark({ size = 30, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      className={className}
      role="img"
      aria-label="VIGIA"
    >
      <g strokeLinecap="round" strokeLinejoin="round">
        {/* atomic orbits */}
        <g strokeWidth="2.2">
          <ellipse cx="60" cy="56" rx="16" ry="48" />
          <ellipse cx="60" cy="56" rx="16" ry="48" transform="rotate(60 60 56)" />
          <ellipse cx="60" cy="56" rx="16" ry="48" transform="rotate(120 60 56)" />
          <ellipse cx="60" cy="64" rx="50" ry="13" />
        </g>
        {/* winged V */}
        <path d="M40 46 L60 84 L80 46" strokeWidth="3.4" />
        {/* wings */}
        <g strokeWidth="2">
          <path d="M28 54 L42 49" />
          <path d="M31 59 L43 54.5" />
          <path d="M34.5 63.5 L44.5 60" />
          <path d="M92 54 L78 49" />
          <path d="M89 59 L77 54.5" />
          <path d="M85.5 63.5 L75.5 60" />
        </g>
      </g>
    </svg>
  )
}
