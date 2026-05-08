export default function Welcome() {
  return (
    <div>
      <img src={'/assets/kitt.gif'} alt='line' className='w-full' />

      <div className='marquee-band'>
        <span className='marquee-inner'>
          &nbsp;&nbsp;&nbsp;*** WELCOME TO HEMANT&apos;S CORNER OF THE
          INTERNET ***&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BEST VIEWED IN INTERNET
          EXPLORER 6.0 AT 800×600 RESOLUTION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***
          DO NOT STEAL MY HTML ***&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SIGN MY
          GUESTBOOK IF YOU LIKE MY SITE!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*** YOU
          ARE VISITOR #004269 ***&nbsp;&nbsp;&nbsp;
        </span>
      </div>

      <div
        className='flex flex-row justify-center items-center'
        style={{ marginTop: '10px', gap: '12px' }}
      >
        <img src={'/assets/hot.gif'} alt='hot' />
        <p className='text-center text-2xl font-bold rainbow-text'>
          Welcome to my website
        </p>
        <img src={'/assets/hot.gif'} alt='hot' />
      </div>

      <div className='relative flex w-full flex-row' style={{ marginTop: '6px' }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className='overflow-hidden flex-1'>
            <img src='/assets/parrot.gif' className='h-16' alt='parrot' />
          </div>
        ))}
      </div>

      <div
        className='blink'
        style={{
          textAlign: 'center',
          padding: '8px 0',
          background: 'linear-gradient(90deg, #ff0000, #ff8800, #ffff00, #00ff00, #00ffff, #8800ff, #ff0000)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontSize: '26px',
          fontWeight: '900',
          letterSpacing: '4px',
        }}
      >
        ★ OPEN TO WORK ★
      </div>

      <img src={'/assets/kitt.gif'} alt='line' className='w-full' />
    </div>
  )
}
