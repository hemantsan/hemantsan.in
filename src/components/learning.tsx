const learningItems = [
  { src: '/assets/py.png', name: 'Python',       category: 'Backend / AI', note: 'In Progress' },
  { src: '/assets/kt.png', name: 'Kotlin',        category: 'Mobile',       note: 'In Progress' },
  { src: '/assets/rn.png', name: 'React Native',  category: 'Mobile',       note: 'In Progress' },
]

export default function Learning() {
  return (
    <div>
      <div className='lo-section-header'>Currently Learning</div>

      <table className='lo-table'>
        <thead>
          <tr>
            <th className='lo-table__cell-icon'></th>
            <th style={{ textAlign: 'left' }}>Technology</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {learningItems.map(({ src, name, category, note }) => (
            <tr key={name}>
              <td className='lo-table__cell-icon'>
                <div className='lo-icon-box'>
                  <img src={src} alt={name} />
                </div>
              </td>
              <td className='lo-table__cell-name'>{name}</td>
              <td className='lo-table__cell-category'>{category}</td>
              <td
                className='lo-table__cell-stars'
                style={{ color: 'var(--lo-green)', fontSize: '12px' }}
              >
                {note}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        style={{
          padding: '8px 14px',
          color: 'var(--lo-text-dim)',
          fontSize: '11px',
          borderTop: '1px solid var(--lo-border-in)',
          background: '#1e1e1e',
        }}
      >
        🚧 This section is under construction. Check back soon.
      </div>
    </div>
  )
}
