export default function Profiles() {
  return (
    <div className='mt-6 flex flex-col items-center justify-center'>
      <div
        style={{
          background: 'url(/assets/sprite.png)',
          backgroundPosition: '-960px -1082px',
          width: '328px',
          height: '54px',
          color: '#f2d999',
        }}
        className='flex flex-row items-center justify-center'
      >
        Social Profiles
      </div>

      <div className='mt-8 flex w-full flex-col items-center gap-y-4'>
        <div className='flex gap-x-4'>
          <img src='/assets/anim_new.gif' alt='new' />
          <a
            href='https://github.com/hemantsankhla'
            target='_blank'
            className='text-lg text-[#00ff00] underline hover:bg-amber-400 hover:text-blue-700'
          >
            LinkedIn
          </a>
          <img src='/assets/anim_new.gif' alt='new' />
        </div>

        <div className='flex gap-x-4'>
          <img src='/assets/anim_new.gif' alt='new' />
          <a
            href='https://github.com/hemantsankhla'
            target='_blank'
            className='text-lg text-[#00ff00] underline hover:bg-amber-400 hover:text-blue-700'
          >
            StackOverFlow
          </a>
          <img src='/assets/anim_new.gif' alt='new' />
        </div>

        <div className='flex gap-x-4'>
          <img src='/assets/anim_new.gif' alt='new' />
          <a
            href='https://github.com/hemantsankhla'
            target='_blank'
            className='text-lg text-[#00ff00] underline hover:bg-amber-400 hover:text-blue-700'
          >
            GitHub
          </a>
          <img src='/assets/anim_new.gif' alt='new' />
        </div>
      </div>
    </div>
  )
}
