export default function Tech() {
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
        Tech Stack
      </div>

      <div className='mt-8 flex w-full justify-between'>
        <img src='/assets/js.png' alt='react' />
        <img src='/assets/ts.png' alt='tailwind' />
        <img src='/assets/react.png' alt='next' />
        <img src='/assets/css.png' alt='typescript' />
      </div>

      <div className='mt-8 flex w-full justify-between'>
        <img src='/assets/html.png' alt='typescript' />
        <img src='/assets/php.png' alt='typescript' />
        <img src='/assets/laravel.png' alt='typescript' className='h-12 w-12' />
        <img src='/assets/mysql.png' alt='typescript' />
      </div>
    </div>
  )
}
