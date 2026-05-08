type TechItem =
  | { src: string; emoji?: never; label: string }
  | { emoji: string; src?: never; label: string }

type TechGroup = { title: string; items: TechItem[] }

const techGroups: TechGroup[] = [
  {
    title: 'Frontend',
    items: [
      { src: '/assets/js.png',    label: 'JavaScript' },
      { src: '/assets/ts.png',    label: 'TypeScript' },
      { src: '/assets/react.png', label: 'ReactJS' },
      { src: '/assets/html.png',  label: 'HTML' },
      { src: '/assets/css.png',   label: 'CSS' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { src: '/assets/py.png',  label: 'Python' },
      { src: '/assets/php.png', label: 'PHP' },
      { emoji: '🟩',            label: 'NodeJS' },
    ],
  },
  {
    title: 'Database',
    items: [
      { src: '/assets/mysql.png', label: 'MySQL' },
      { emoji: '🐘',              label: 'Postgres' },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { src: '/assets/laravel.png', label: 'Laravel' },
      { emoji: '🔥',               label: 'Hono' },
      { emoji: '⚡',               label: 'Fastify' },
      { emoji: '🏗️',               label: 'NestJS' },
      { emoji: '🚀',               label: 'FastAPI' },
      { emoji: '🎸',               label: 'Django' },
    ],
  },
  {
    title: 'AI / Tools',
    items: [
      { emoji: '🤖', label: 'Claude (Anthropic)' },
      { emoji: '🖱️', label: 'Cursor Agents' },
      { emoji: '🔍', label: 'RAG' },
      { emoji: '🗄️', label: 'Vector DB' },
      { emoji: '⚙️', label: 'Agentic Workflow' },
    ],
  },
  {
    title: 'Mobile',
    items: [
      { src: '/assets/rn.png', label: 'React Native' },
      { src: '/assets/kt.png', label: 'Kotlin' },
      { emoji: '💙',           label: 'Flutter' },
    ],
  },
]

export default function Tech() {
  return (
    <div className='mt-2 flex flex-col items-center justify-center w-full'>
      <div className='win95-window w-full'>
        <div className='win95-titlebar'>
          <span>⚙️ TECH_STACK.EXE</span>
          <div style={{ display: 'flex', gap: '3px' }}>
            <button className='win95-btn'>_</button>
            <button className='win95-btn'>□</button>
            <button className='win95-btn'>✕</button>
          </div>
        </div>

        <div className='win95-content'>
          {techGroups.map(({ title, items }) => (
            <div key={title} style={{ marginBottom: '16px' }}>
              <p
                style={{
                  color: '#ffff00',
                  textAlign: 'center',
                  fontSize: '12px',
                  fontFamily: 'Courier New, monospace',
                  letterSpacing: '2px',
                  marginBottom: '10px',
                }}
              >
                ▶ {title.toUpperCase()} ◀
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                  justifyContent: 'center',
                }}
              >
                {items.map(({ src, emoji, label }) => (
                  <div
                    key={label}
                    className='flex flex-col items-center'
                    style={{ gap: '4px', minWidth: '48px' }}
                  >
                    {src ? (
                      <img src={src} alt={label} style={{ height: '40px', width: '40px' }} />
                    ) : (
                      <span
                        style={{
                          fontSize: '32px',
                          lineHeight: '40px',
                          width: '40px',
                          textAlign: 'center',
                          display: 'block',
                        }}
                      >
                        {emoji}
                      </span>
                    )}
                    <span
                      style={{
                        color: '#00ff00',
                        fontSize: '9px',
                        fontFamily: 'Arial, sans-serif',
                        textAlign: 'center',
                        maxWidth: '60px',
                        lineHeight: '1.2',
                      }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <div className='retro-hr' style={{ margin: '12px 0 0' }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
