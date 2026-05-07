type NavItem = { label: string; active?: boolean }
type NavGroup = { header: string; items: NavItem[] }

const navGroups: NavGroup[] = [
  {
    header: 'Profile',
    items: [
      { label: 'Biography' },
      { label: 'Stats' },
    ],
  },
  {
    header: 'Tech Stack',
    items: [
      { label: 'Primary' },
      { label: 'Backend / AI', active: true },
      { label: 'Learning' },
    ],
  },
  {
    header: 'Social',
    items: [
      { label: 'LinkedIn' },
      { label: 'GitHub' },
      { label: 'Stack Overflow' },
    ],
  },
]

const topLevelItems: string[] = [
  'Crafting Log',
  'Gathering Log',
  'Achievements',
  'Shops',
  'Text Commands',
]

export default function Sidebar() {
  return (
    <div className='lo-sidebar'>
      {navGroups.map(({ header, items }) => (
        <div key={header}>
          <div className='lo-nav-group-header'>
            {header}
            <span className='lo-nav-group-header__arrow'>›</span>
          </div>
          {items.map(({ label, active }) => (
            <div
              key={label}
              className={`lo-nav-item${active ? ' lo-nav-item--active' : ''}`}
            >
              {label}
              {!active && <span className='lo-nav-item__arrow'>›</span>}
            </div>
          ))}
        </div>
      ))}

      {topLevelItems.map((label) => (
        <div key={label} className='lo-nav-group-header'>
          {label}
          <span className='lo-nav-group-header__arrow'>›</span>
        </div>
      ))}
    </div>
  )
}
