type TechEntry =
  | { src: string; emoji?: never; name: string; category: string; stars: number }
  | { emoji: string; src?: never; name: string; category: string; stars: number }

const techAll: TechEntry[] = [
  { src: '/assets/js.png',      name: 'JavaScript',   category: 'Frontend',     stars: 5 },
  { src: '/assets/ts.png',      name: 'TypeScript',   category: 'Frontend',     stars: 5 },
  { src: '/assets/react.png',   name: 'ReactJS',      category: 'Frontend',     stars: 5 },
  { src: '/assets/css.png',     name: 'CSS',          category: 'Styling',      stars: 4 },
  { src: '/assets/html.png',    name: 'HTML',         category: 'Frontend',     stars: 5 },
  { src: '/assets/py.png',      name: 'Python',       category: 'Backend / AI', stars: 3 },
  { emoji: '🤖',                name: 'GenAI',        category: 'AI / ML',      stars: 3 },
  { src: '/assets/php.png',     name: 'PHP',          category: 'Backend',      stars: 3 },
  { src: '/assets/laravel.png', name: 'Laravel',      category: 'Backend',      stars: 3 },
  { src: '/assets/mysql.png',   name: 'MySQL',        category: 'Database',     stars: 3 },
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

export default function Tech() {
  return (
    <div>
      {/* Mirrors "Obtained From" section header */}
      <div className='lo-section-header'>Tech Stack</div>

      <table className='lo-table'>
        <thead>
          <tr>
            <th className='lo-table__cell-icon'></th>
            <th style={{ textAlign: 'left' }}>Technology</th>
            <th>Category</th>
            <th>Proficiency</th>
          </tr>
        </thead>
        <tbody>
          {techAll.map(({ src, emoji, name, category, stars }) => (
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
              <td className='lo-table__cell-category'>{category}</td>
              <td className='lo-table__cell-stars'>
                <Stars count={stars} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
