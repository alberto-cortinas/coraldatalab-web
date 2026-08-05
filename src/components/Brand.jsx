export function Brand({ footer = false }) {
  return (
    <a
      className="brand"
      href="#inicio"
      aria-label={footer ? undefined : 'Coral Data Lab, inicio'}
    >
      <span className="brand__mark" aria-hidden="true">
        <span className="brand__trunk" />
        <i /><i /><i /><i /><i />
      </span>
      <span className="brand__name">
        <span className="brand__coral">CORAL</span>
        <span className="brand__rest">DATA LAB</span>
      </span>
    </a>
  )
}
