export function Brand({ footer = false, href = '#inicio' }) {
  return (
    <a
      className="brand"
      href={href}
      aria-label={footer ? undefined : 'Coral Data Lab, inicio'}
    >
      <span className="brand__mark" aria-hidden="true" />
      <span className="brand__name">
        <span className="brand__coral">CORAL</span><span className="brand__rest">DATALAB</span>
      </span>
    </a>
  )
}
