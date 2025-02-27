import './App.css'
import Intro from './components/intro'
import Learning from './components/learning'
import Profiles from './components/profiles'
import Tech from './components/tech'
import Welcome from './components/welcome'

function App() {
  return (
    <main className='flex justify-center text-white'>
      <div className='flex w-[600px] flex-col gap-y-8'>
        <Welcome />

        <Intro />

        <Tech />

        <Learning />

        <Profiles />
      </div>
    </main>
  )
}

export default App
