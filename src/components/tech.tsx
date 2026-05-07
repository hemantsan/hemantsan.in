const techPrimary = [
  { src: '/assets/js.png', label: 'JavaScript' },
  { src: '/assets/ts.png', label: 'TypeScript' },
  { src: '/assets/react.png', label: 'ReactJS' },
  { src: '/assets/css.png', label: 'CSS' },
]

const techSecondary = [
  { src: '/assets/html.png', label: 'HTML' },
  { src: '/assets/php.png', label: 'PHP' },
  { src: '/assets/laravel.png', label: 'Laravel' },
  { src: '/assets/mysql.png', label: 'MySQL' },
]

export default function Tech() {
  return (
    <div className='mt-2 flex flex-col items-center justify-center w-full'>
      <div className='win95-window w-full'>
        <div className='win95-titlebar'>
          <span>⚙️ TECH_STACK.EXE</span>
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
              marginBottom: '12px',
            }}
          >
            ▶ PRIMARY STACK ◀
          </p>

          <div className='flex w-full justify-between items-end'>
            {techPrimary.map(({ src, label }) => (
              <div
                key={label}
                className='flex flex-col items-center'
                style={{ gap: '6px' }}
              >
                <img src={src} alt={label} style={{ height: '48px', width: '48px' }} />
                <span
                  style={{
                    color: '#00ff00',
                    fontSize: '10px',
                    fontFamily: 'Arial, sans-serif',
                    textAlign: 'center',
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className='retro-hr' style={{ margin: '14px 0' }}></div>

          <p
            style={{
              color: '#ffff00',
              textAlign: 'center',
              fontSize: '12px',
              fontFamily: 'Courier New, monospace',
              letterSpacing: '2px',
              marginBottom: '12px',
            }}
          >
            ▶ BACKEND / SECONDARY ◀
          </p>

          <div className='flex w-full justify-between items-end'>
            {techSecondary.map(({ src, label }) => (
              <div
                key={label}
                className='flex flex-col items-center'
                style={{ gap: '6px' }}
              >
                <img src={src} alt={label} style={{ height: '48px', width: '48px' }} />
                <span
                  style={{
                    color: '#00ff00',
                    fontSize: '10px',
                    fontFamily: 'Arial, sans-serif',
                    textAlign: 'center',
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
