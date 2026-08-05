export function Brand({ footer = false }) {
  return (
    <a
      className="brand"
      href="#inicio"
      aria-label={footer ? undefined : 'Coral Data Lab, inicio'}
    >
      <span className="brand__mark" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span>Coral Data Lab</span>
    </a>
  )
}
