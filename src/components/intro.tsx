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
                *** Full Stack GenAI Builder ***
              </p>
            </div>
            <img src='/assets/fire.gif' className='h-16' alt='fire' />
          </div>

          <div className='retro-hr' style={{ margin: '14px 0' }}></div>

          <div className='flex justify-center' style={{ gap: '4px', marginBottom: '12px' }}>
            {Array.from({ length: 7 }).map((_, i) => (
              <img key={i} src='/assets/fire.gif' style={{ height: '20px' }} alt='fire' />
            ))}
          </div>

          <p className='text-center' style={{ fontSize: '14px', lineHeight: '1.7' }}>
            Hey, I'm Hemant — a Full Stack GenAI Builder who started out self-taught
            and never really stopped learning. I spend most of my time in JavaScript,
            TypeScript, and React on the frontend, and Node, Python on the backend.
          </p>

          <p
            className='text-center'
            style={{ fontSize: '14px', lineHeight: '1.7', marginTop: '10px' }}
          >
            Lately I've been deep into AI — RAG pipelines, agentic workflows, and
            wiring up LLMs into real products. I just like building things that work.
          </p>

          <p
            className='text-center'
            style={{ fontSize: '14px', lineHeight: '1.7', marginTop: '10px' }}
          >
            9 years of experience · Available for Hire:{' '}
            <span style={{ color: '#00ff00', fontWeight: 'bold' }}>Yes</span>
          </p>

          <p
            className='text-center'
            style={{ fontSize: '14px', lineHeight: '1.7', marginTop: '10px' }}
          >
            Backend: Python FastAPI · PHP · Laravel · NodeJS · MySQL · Postgres
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
