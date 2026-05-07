export default function Footer() {
  return (
    <div className='mt-8 w-full'>
      <div
        style={{ background: 'url(/assets/footer-bg-fade.png)' }}
        className='h-14 w-full'
      ></div>

      <div
        style={{ background: 'url(/assets/footer-bg.jpg)', textAlign: 'center' }}
        className='w-full pb-6'
      >
        <div className='retro-hr'></div>

        <p
          style={{
            color: '#c8a060',
            fontFamily: 'Arial, sans-serif',
            fontSize: '13px',
            padding: '12px 20px 0',
            lineHeight: '1.6',
          }}
        >
          This website is made in this way on purpose to tribute myself from
          initial days when I started learning web development.
        </p>

        <div
          className='flex justify-center'
          style={{ gap: '12px', marginTop: '14px' }}
        >
          <img src='/assets/notepad.gif' alt='Notepad' />
          <img src='/assets/ie_logo.gif' alt='Internet Explorer' />
        </div>

        <div className='retro-hr' style={{ margin: '14px 0 8px' }}></div>

        <p
          style={{
            color: '#606060',
            fontSize: '10px',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          Best viewed in Internet Explorer 6.0 at 800×600 resolution
        </p>

        <p
          style={{
            color: '#606060',
            fontSize: '10px',
            fontFamily: 'Arial, sans-serif',
            marginTop: '4px',
          }}
        >
          © {new Date().getFullYear()} Hemant Sankhla — All Rights Reserved
        </p>

        <p
          className='blink'
          style={{
            color: '#ff0000',
            fontSize: '10px',
            fontFamily: 'Arial, sans-serif',
            marginTop: '6px',
          }}
        >
          ★ No frames were harmed in the making of this website ★
        </p>
      </div>
    </div>
  )
}
