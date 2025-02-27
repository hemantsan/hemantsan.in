export default function Learning() {
  return (
    <div className='mt-12 flex flex-col items-center justify-center'>
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
        Learning
      </div>

      <div className='mt-8 flex w-full justify-between'>
        <img src='/assets/py.png' alt='react' />
        <img src='/assets/kt.png' alt='tailwind' />
        <img src='/assets/rn.png' alt='next' />
      </div>
    </div>
  )
}
