export default function Welcome() {
  return (
    <div>
      <img src='/assets/kitt.gif' alt='line' style={{ width: '100%', display: 'block' }} />

      <div className='marquee-band'>
        <span className='marquee-inner'>
          &nbsp;&nbsp;&nbsp;◆ WELCOME TO HEMANT&apos;S LODESTONE &nbsp;—&nbsp;
          BEST VIEWED IN INTERNET EXPLORER 6.0 AT 800×600 &nbsp;—&nbsp;
          ◆ DO NOT STEAL MY HTML &nbsp;—&nbsp; VISITOR #004269
          &nbsp;&nbsp;&nbsp;
        </span>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          overflow: 'hidden',
          background: '#0e0e0a',
          borderBottom: '1px solid #2a2a1a',
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} style={{ flex: 1, overflow: 'hidden' }}>
            <img src='/assets/parrot.gif' style={{ height: '48px' }} alt='parrot' />
          </div>
        ))}
      </div>
    </div>
  )
}
