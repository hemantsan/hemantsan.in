export default function Intro() {
  return (
    <div className='mt-4 flex flex-col items-center justify-center w-full'>
      <div className='win95-window w-full'>
        <div className='win95-titlebar'>
          <span>💻 HEMANT.EXE — [Running]</span>
          <div style={{ display: 'flex', gap: '3px' }}>
            <button className='win95-btn'>_</button>
            <button className='win95-btn'>□</button>
            <button className='win95-btn'>✕</button>
          </div>
        </div>

        <div className='win95-content'>
          <div
            className='flex items-center justify-center'
            style={{ gap: '16px' }}
          >
            <img src='/assets/fire.gif' className='h-16' alt='fire' />
            <div className='flex flex-col items-center'>
              <h1 className='text-center text-4xl font-bold rainbow-text'>
                Hemant Sankhla
              </h1>
              <p
                className='text-center text-xl font-semibold blink'
                style={{ color: '#00ffff', marginTop: '4px' }}
              >
                *** Frontend Developer ***
              </p>
            </div>
            <img src='/assets/fire.gif' className='h-16' alt='fire' />
          </div>

          <div className='retro-hr' style={{ margin: '14px 0' }}></div>

          <p className='text-center' style={{ fontSize: '14px', lineHeight: '1.7' }}>
            Hello my name is Hemant Sankhla, I am a Frontend Developer. I
            primarily work with JavaScript/Typescript, ReactJS, HTML and CSS. I
            am a self taught developer and I love my work.
          </p>

          <p
            className='text-center'
            style={{ fontSize: '14px', lineHeight: '1.7', marginTop: '10px' }}
          >
            Consistently trying to learn new things and improve my skills.
          </p>

          <p
            className='text-center'
            style={{ fontSize: '14px', lineHeight: '1.7', marginTop: '10px' }}
          >
            I also have some experience in backend development working with PHP,
            Laravel, Magento, MySql.
          </p>

          <div
            className='flex justify-center'
            style={{ marginTop: '16px' }}
          >
            <img src='/assets/goku.gif' className='h-36' alt='goku' />
          </div>

          <div className='retro-hr' style={{ margin: '14px 0' }}></div>

          <div className='flex flex-col items-center' style={{ gap: '4px' }}>
            <span
              style={{
                color: '#ffff00',
                fontSize: '11px',
                fontFamily: 'Arial, sans-serif',
                letterSpacing: '2px',
              }}
            >
              YOU ARE VISITOR #
            </span>
            <span className='counter-display'>004269</span>
            <span
              className='blink'
              style={{
                color: '#ff0000',
                fontSize: '11px',
                fontFamily: 'Arial, sans-serif',
                marginTop: '4px',
              }}
            >
              ★ THANK YOU FOR VISITING ★
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
