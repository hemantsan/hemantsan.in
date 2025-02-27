export default function Footer() {
  return (
    <div className='mt-8 w-full'>
      <div
        style={{ background: 'url(/assets/footer-bg-fade.png)' }}
        className='h-14 w-full'
      ></div>
      <div
        style={{ background: 'url(/assets/footer-bg.jpg)' }}
        className='w-full pb-4'
      >
        <div className='text=[#6e494b] flex justify-center'>
          This website is made in this way on purpose to tribute myself from
          initial days when i started learning web development.
        </div>

        <div className='mt-6 flex justify-center gap-x-4'>
          <img src='/assets/notepad.gif' alt='footer-logo' />
          <img src='/assets/ie_logo.gif' alt='footer-logo' />
        </div>
      </div>
    </div>
  )
}
