export default function Intro() {
  return (
    <div>
      {/* Item header — mirrors Wolf Fang icon + name block */}
      <div className='lo-item-header'>
        <div className='lo-item-icon'>
          <img src='/assets/goku.gif' alt='Hemant' />
        </div>

        <div className='lo-item-info'>
          <div className='lo-item-name rainbow-text'>Hemant Sankhla</div>
          <div className='lo-item-subtitle'>Full Stack GenAI Builder</div>
          <div className='lo-item-icons-row'>
            {Array.from({ length: 7 }).map((_, i) => (
              <img key={i} src='/assets/fire.gif' style={{ height: '20px' }} alt='fire' />
            ))}
          </div>
        </div>

        {/* Corner — mirrors the comment/reaction count */}
        <div className='lo-item-corner'>
          <img src='/assets/anim_new.gif' alt='new' />
          <span>Self-Taught</span>
        </div>
      </div>

      {/* Description — mirrors the item lore text */}
      <div className='lo-item-desc'>
        <p className='lo-item-desc__text'>
          Hey, I'm Hemant — a Full Stack GenAI Builder who started out self-taught
          and never really stopped learning. I spend most of my time in JavaScript,
          TypeScript, and React on the frontend, and Node, Python on the backend.
        </p>
        <p className='lo-item-desc__text' style={{ marginTop: '6px' }}>
          Lately I've been deep into AI — RAG pipelines, agentic workflows, and
          wiring up LLMs into real products. I just like building things that work.
        </p>
        <p className='lo-item-desc__type'>Full Stack GenAI Builder · Self-Taught</p>

        <hr className='lo-item-desc__divider' />

        {/* Mirrors "Available for Purchase: No / Sells for 1 gil" */}
        <div className='lo-item-stat'>
          Available for Hire:{' '}
          <span className='lo-item-stat__pos'>Yes</span>
        </div>
        <div className='lo-item-stat'>
          Backend Experience:{' '}
          <span className='lo-item-stat__pos'>Python · Postgres · PHP · NodeJS · MySQL</span>
        </div>
      </div>

      {/* Section header — mirrors "Obtained From" */}
      <div className='lo-section-header'>Profile Details</div>

      {/* Stats table */}
      <table className='lo-table'>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='lo-table__cell-name'>Role</td>
            <td>Full Stack GenAI Builder</td>
          </tr>
          <tr>
            <td className='lo-table__cell-name'>Experience</td>
            <td>
              9 Years
              <div className='lo-table__cell-name-sub'>JavaScript, ReactJS, HTML, CSS</div>
            </td>
          </tr>
          <tr>
            <td className='lo-table__cell-name'>Backend</td>
            <td>
              Python FastAPI · PHP · Laravel
              <div className='lo-table__cell-name-sub'>MySQL · NodeJS · Some Experience</div>
            </td>
          </tr>
          <tr>
            <td className='lo-table__cell-name'>Visitors</td>
            <td>
              <span className='counter-display'>004269</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
