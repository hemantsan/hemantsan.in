const profiles = [
  {
    href: 'https://www.linkedin.com/in/hemant-sankhla/',
    label: 'LinkedIn',
    tag: 'Professional Network',
  },
  {
    href: 'https://stackoverflow.com/users/3903902/hemant',
    label: 'Stack Overflow',
    tag: 'Q&A / Community',
  },
  {
    href: 'https://github.com/hemantsan',
    label: 'GitHub',
    tag: 'Source Code',
  },
]

export default function Profiles() {
  return (
    <div>
      <div className='lo-section-header'>Social Profiles</div>

      {profiles.map(({ href, label, tag }) => (
        <div className='lo-link-row' key={label}>
          <img src='/assets/anim_new.gif' alt='new' style={{ flexShrink: 0 }} />
          <a href={href} target='_blank' rel='noreferrer'>
            {label}
          </a>
          <span className='lo-link-row__tag'>{tag}</span>
        </div>
      ))}

      <div
        style={{
          padding: '7px 14px',
          color: 'var(--lo-text-muted)',
          fontSize: '11px',
          borderTop: '1px solid var(--lo-border-in)',
          background: '#1e1e1e',
        }}
      >
        * Links open in a new browser window
      </div>
    </div>
  )
}
