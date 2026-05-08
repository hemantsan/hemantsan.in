type TechEntry =
  | { src: string; emoji?: never; name: string; stars: number }
  | { emoji: string; src?: never; name: string; stars: number }

type TechGroup = {
  label: string
  items: TechEntry[]
}

const techGroups: TechGroup[] = [
  {
    label: 'Frontend',
    items: [
      { src: '/assets/js.png',    name: 'JavaScript', stars: 5 },
      { src: '/assets/ts.png',    name: 'TypeScript', stars: 5 },
      { src: '/assets/react.png', name: 'ReactJS',    stars: 5 },
      { src: '/assets/html.png',  name: 'HTML',       stars: 5 },
      { src: '/assets/css.png',   name: 'CSS',        stars: 4 },
    ],
  },
  {
    label: 'Backend',
    items: [
      { src: '/assets/py.png',  name: 'Python',  stars: 3 },
      { src: '/assets/php.png', name: 'PHP',     stars: 3 },
      { emoji: '🟩',            name: 'NodeJS',  stars: 3 },
    ],
  },
  {
    label: 'Frameworks',
    items: [
      { emoji: '🔥', name: 'Hono',    stars: 3 },
      { emoji: '⚡', name: 'Fastify', stars: 3 },
      { emoji: '🏗️', name: 'NestJS',  stars: 3 },
      { emoji: '🚀', name: 'FastAPI', stars: 3 },
      { emoji: '🎸', name: 'Django',  stars: 3 },
      { src: '/assets/laravel.png', name: 'Laravel', stars: 3 },
    ],
  },
  {
    label: 'Database',
    items: [
      { src: '/assets/mysql.png', name: 'MySQL', stars: 3 },
    ],
  },
  {
    label: 'AI / Tools',
    items: [
      { emoji: '🤖', name: 'Claude (Anthropic)', stars: 4 },
      { emoji: '🖱️', name: 'Cursor Agents',      stars: 4 },
      { emoji: '🔍', name: 'RAG',                stars: 3 },
      { emoji: '🗄️', name: 'Vector DB',          stars: 3 },
      { emoji: '⚙️', name: 'Agentic Workflow',   stars: 3 },
    ],
  },
  {
    label: 'Mobile',
    items: [
      { src: '/assets/rn.png', name: 'React Native', stars: 2 },
      { src: '/assets/kt.png', name: 'Kotlin',       stars: 2 },
      { emoji: '💙',           name: 'Flutter',      stars: 2 },
    ],
  },
]

const MAX_STARS = 5

function Stars({ count }: { count: number }) {
  return (
    <span>
      <span className='lo-stars'>{'★'.repeat(count)}</span>
      <span className='lo-stars__empty'>{'★'.repeat(MAX_STARS - count)}</span>
    </span>
  )
}

const totalEntries = techGroups.reduce((sum, g) => sum + g.items.length, 0)

export default function Tech() {
  return (
    <div>
      <div className='lo-section-header'>Tech Stack</div>

      <table className='lo-table'>
        <thead>
          <tr>
            <th className='lo-table__cell-icon'></th>
            <th style={{ textAlign: 'left' }}>Technology</th>
            <th>Group</th>
            <th>Proficiency</th>
          </tr>
        </thead>
        <tbody>
          {techGroups.map(({ label, items }) => (
            <>
              {/* Group sub-header row — mirrors FFXIV category divider */}
              <tr key={`group-${label}`}>
                <td
                  colSpan={4}
                  style={{
                    background: '#1a1a18',
                    color: 'var(--lo-text-dim)',
                    fontSize: '11px',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    padding: '5px 14px',
                    borderBottom: '1px solid var(--lo-border-in)',
                    borderTop: '1px solid var(--lo-border)',
                  }}
                >
                  {label}
                </td>
              </tr>

              {items.map(({ src, emoji, name, stars }) => (
                <tr key={name}>
                  <td className='lo-table__cell-icon'>
                    <div className='lo-icon-box'>
                      {src ? (
                        <img src={src} alt={name} />
                      ) : (
                        <span className='lo-icon-box--emoji'>{emoji}</span>
                      )}
                    </div>
                  </td>
                  <td className='lo-table__cell-name'>{name}</td>
                  <td className='lo-table__cell-category'>{label}</td>
                  <td className='lo-table__cell-stars'>
                    <Stars count={stars} />
                  </td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>

      <div
        style={{
          padding: '6px 14px',
          background: '#1e1e1e',
          borderTop: '1px solid var(--lo-border-in)',
          color: 'var(--lo-text-muted)',
          fontSize: '11px',
        }}
      >
        {totalEntries} technologies across {techGroups.length} groups
      </div>
    </div>
  )
}
