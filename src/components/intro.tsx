export default function Intro() {
  return (
    <div className='mt-4 flex flex-col items-center justify-center text-[#00ff00]'>
      <div className='flex gap-x-6'>
        <img src='/assets/fire.gif' className='h-16' alt='fire' />

        <div className='flex flex-col'>
          <h1 className='text-center text-4xl font-bold'>Hemant Sankhla</h1>
          <p className='text-center text-xl font-semibold text-green-400'>
            Frontend Developer
          </p>
        </div>

        <img src='/assets/fire.gif' className='h-16' alt='fire' />
      </div>

      <p className='text-md mt-4 text-center'>
        Hello my name is Hemant Sankhla, I am a Frontend Developer. I primarily
        work with JavaScript/Typescript, ReactJS, HTML and CSS. I am a self
        taught developer and I love my work.
      </p>

      <p className='text-md mt-4 text-center'>
        Consistently trying to learn new things and improve my skills.
      </p>

      <p className='text-md mt-4 text-center'>
        I also have some experience in backend development working with PHP,
        Laravel, Magento, MySql.
      </p>

      <img src='/assets/goku.gif' className='mt-8 h-36' alt='goku' />
    </div>
  )
}
