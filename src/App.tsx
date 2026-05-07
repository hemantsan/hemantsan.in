import './App.css'
import Footer from './components/footer'
import Intro from './components/intro'
import Learning from './components/learning'
import Profiles from './components/profiles'
import Sidebar from './components/sidebar'
import Tech from './components/tech'
import Welcome from './components/welcome'

function App() {
  return (
    <div>
      {/* Retro nostalgia strip — above the main UI frame */}
      <Welcome />

      {/* FFXIV Lodestone-style frame */}
      <div className='lo-frame'>
        {/* Global header bar — mirrors "◆ Search Results / Version: Patch 7.5" */}
        <div className='lo-header'>
          <div className='lo-header__left'>
            <span className='lo-header__diamond'>◆</span>
            <span>Hemant Sankhla</span>
          </div>
          <span className='lo-header__version'>Frontend Developer Portfolio</span>
        </div>

        {/* Two-column body */}
        <div className='lo-body'>
          <Sidebar />

          <div className='lo-main'>
            <Intro />
            <Tech />
            <Learning />
            <Profiles />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
