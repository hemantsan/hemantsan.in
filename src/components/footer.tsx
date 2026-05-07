export default function Footer() {
  return (
    <div>
      <div
        style={{ background: 'url(/assets/footer-bg-fade.png)', height: '40px', width: '100%' }}
      ></div>

      <div className='lo-footer'>
        <div
          style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '10px' }}
        >
          <img src='/assets/notepad.gif' alt='Notepad' />
          <img src='/assets/ie_logo.gif' alt='Internet Explorer' />
        </div>

        <p>
          This website is made in this way on purpose — a tribute to myself from the initial
          days when I started learning web development.
        </p>

        <p style={{ marginTop: '8px', color: 'var(--lo-text-muted)' }}>
          Best viewed in Internet Explorer 6.0 at 800×600 resolution
        </p>

        <p style={{ marginTop: '4px', color: 'var(--lo-text-muted)' }}>
          © {new Date().getFullYear()} Hemant Sankhla &nbsp;◆&nbsp; All Rights Reserved
        </p>

        <p className='blink' style={{ marginTop: '6px', color: '#3a3a2a', fontSize: '10px' }}>
          ◆ No frames were harmed in the making of this website ◆
        </p>
      </div>

      <img src='/assets/kitt.gif' alt='line' style={{ width: '100%', display: 'block' }} />
    </div>
  )
}
