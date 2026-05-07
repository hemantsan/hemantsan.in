const learningItems = [
  { src: '/assets/py.png', label: 'Python' },
  { src: '/assets/kt.png', label: 'Kotlin' },
  { src: '/assets/rn.png', label: 'React Native' },
]

export default function Learning() {
  return (
    <div className='mt-2 flex flex-col items-center justify-center w-full'>
      <div className='win95-window w-full'>
        <div className='win95-titlebar'>
          <span>🚧 LEARNING.EXE — [Under Construction]</span>
          <div style={{ display: 'flex', gap: '3px' }}>
            <button className='win95-btn'>_</button>
            <button className='win95-btn'>□</button>
            <button className='win95-btn'>✕</button>
          </div>
        </div>

        <div className='win95-content'>
          <p
            className='blink'
            style={{
              color: '#ffff00',
              textAlign: 'center',
              fontSize: '13px',
              fontFamily: 'Courier New, monospace',
              letterSpacing: '2px',
              marginBottom: '16px',
            }}
          >
            *** CURRENTLY LEARNING — CHECK BACK SOON ***
          </p>

          <div className='flex w-full justify-around items-end'>
            {learningItems.map(({ src, label }) => (
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
                <span
                  className='blink'
                  style={{
                    color: '#ff2200',
                    fontSize: '10px',
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'bold',
                  }}
                >
                  NEW!
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: '16px',
              border: '1px dashed #808080',
              padding: '6px',
              textAlign: 'center',
            }}
          >
            <span
              style={{
                color: '#808080',
                fontSize: '10px',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              🚧 &nbsp;This section is under construction. Please pardon our
              digital dust.&nbsp; 🚧
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
