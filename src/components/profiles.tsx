const profiles = [
  {
    href: 'https://www.linkedin.com/in/hemant-sankhla/',
    label: 'LinkedIn',
  },
  {
    href: 'https://stackoverflow.com/users/3903902/hemant',
    label: 'StackOverFlow',
  },
  {
    href: 'https://github.com/hemantsan',
    label: 'GitHub',
  },
]

export default function Profiles() {
  return (
    <div className='mt-2 flex flex-col items-center justify-center w-full'>
      <div className='win95-window w-full'>
        <div className='win95-titlebar'>
          <span>🌐 SOCIAL_PROFILES.HTM</span>
          <div style={{ display: 'flex', gap: '3px' }}>
            <button className='win95-btn'>_</button>
            <button className='win95-btn'>□</button>
            <button className='win95-btn'>✕</button>
          </div>
        </div>

        <div className='win95-content'>
          <p
            style={{
              color: '#ffff00',
              textAlign: 'center',
              fontSize: '12px',
              fontFamily: 'Courier New, monospace',
              letterSpacing: '2px',
              marginBottom: '16px',
            }}
          >
            ▼ FIND ME ON THE INFORMATION SUPERHIGHWAY ▼
          </p>

          <div className='flex w-full flex-col items-center' style={{ gap: '12px' }}>
            {profiles.map(({ href, label }) => (
              <div key={label} className='flex items-center' style={{ gap: '10px' }}>
                <img src='/assets/anim_new.gif' alt='new' />
                <a
                  href={href}
                  target='_blank'
                  rel='noreferrer'
                  className='retro-link'
                >
                  ◆ {label} ◆
                </a>
                <img src='/assets/anim_new.gif' alt='new' />
              </div>
            ))}
          </div>

          <p
            style={{
              color: '#606060',
              textAlign: 'center',
              fontSize: '10px',
              fontFamily: 'Arial, sans-serif',
              marginTop: '14px',
            }}
          >
            * Links open in a new browser window *
          </p>
        </div>
      </div>
    </div>
  )
}
