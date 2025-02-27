// import { hotGif, lineGif } from '../lib/images'

export default function Welcome() {
  return (
    <div>
      <img src={'/assets/kitt.gif'} alt='line' className='w-full' />

      <div className='flex flex-row justify-center'>
        <img src={'/assets/hot.gif'} alt='line' />

        <p className='text-center text-2xl font-semibold text-yellow-300'>
          Welcome to my website
        </p>

        <img src={'/assets/hot.gif'} alt='line' />
      </div>

      <div className='relative flex w-full flex-row'>
        <div className='overflow-hidden'>
          <img src='/assets/parrot.gif' className='h-16' alt='fire' />
        </div>
        <div className='overflow-hidden'>
          <img src='/assets/parrot.gif' className='h-16' alt='fire' />
        </div>
        <div className='overflow-hidden'>
          <img src='/assets/parrot.gif' className='h-16' alt='fire' />
        </div>
        <div className='overflow-hidden'>
          <img src='/assets/parrot.gif' className='h-16' alt='fire' />
        </div>
        <div className='overflow-hidden'>
          <img src='/assets/parrot.gif' className='h-16' alt='fire' />
        </div>
        <div className='overflow-hidden'>
          <img src='/assets/parrot.gif' className='h-16' alt='fire' />
        </div>
        <div className='overflow-hidden'>
          <img src='/assets/parrot.gif' className='h-16' alt='fire' />
        </div>
        <div className='overflow-hidden'>
          <img src='/assets/parrot.gif' className='h-16' alt='fire' />
        </div>
        <div className='overflow-hidden'>
          <img src='/assets/parrot.gif' className='h-16' alt='fire' />
        </div>
        <div className='overflow-hidden'>
          <img src='/assets/parrot.gif' className='h-16' alt='fire' />
        </div>
      </div>

      <img src={'/assets/kitt.gif'} alt='line' className='w-full' />
    </div>
  )
}
