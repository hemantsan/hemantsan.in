import './App.css'
import Footer from './components/footer'
import Intro from './components/intro'
import Learning from './components/learning'
import Profiles from './components/profiles'
import Tech from './components/tech'
import Welcome from './components/welcome'

function App() {
  return (
    <main className='flex flex-col items-center justify-center text-white'>
      <div className='flex max-w-[600px] flex-col gap-y-8'>
        <Welcome />

        <Intro />

        <Tech />

        <Learning />

        <Profiles />
      </div>

      <Footer />
    </main>
  )
}

export default App
