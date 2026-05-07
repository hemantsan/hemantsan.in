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
          <div className='lo-item-subtitle'>Frontend Developer</div>
          <div className='lo-item-icons-row'>
            <img src='/assets/fire.gif' style={{ height: '20px' }} alt='fire' />
            <img src='/assets/fire.gif' style={{ height: '20px' }} alt='fire' />
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
          Hello, my name is Hemant Sankhla. I am a Frontend Developer primarily
          working with JavaScript / TypeScript, ReactJS, HTML and CSS. I am a
          self-taught developer and I love my work.
        </p>
        <p className='lo-item-desc__text' style={{ marginTop: '6px' }}>
          Consistently trying to learn new things and improve my skills.
        </p>
        <p className='lo-item-desc__type'>Frontend Developer · Self-Taught</p>

        <hr className='lo-item-desc__divider' />

        {/* Mirrors "Available for Purchase: No / Sells for 1 gil" */}
        <div className='lo-item-stat'>
          Available for Hire:{' '}
          <span className='lo-item-stat__pos'>Yes</span>
        </div>
        <div className='lo-item-stat'>
          Backend Experience:{' '}
          <span className='lo-item-stat__pos'>PHP · Laravel · MySQL</span>
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
            <td>Frontend Developer</td>
          </tr>
          <tr>
            <td className='lo-table__cell-name'>Experience</td>
            <td>
              Self-Taught
              <div className='lo-table__cell-name-sub'>JavaScript, ReactJS, HTML, CSS</div>
            </td>
          </tr>
          <tr>
            <td className='lo-table__cell-name'>Backend</td>
            <td>
              PHP · Laravel · Magento
              <div className='lo-table__cell-name-sub'>MySQL · Some Experience</div>
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
