import { useState } from 'react'
import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'
import './styles/global.css'
import './App.css'

function App() {
  const [animation, setAnimation] = useState('dance')

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <h1>🐱 고양이 댄싱 페이지</h1>
        <p className="subtitle">고양이가 신나게 춤을 추고 있어요!</p>
      </div>

      <div key={animation} style={{ perspective: '1000px' }}>
        <DancingCat animation={animation} />
      </div>

      <AnimationControls
        animation={animation}
        onAnimationChange={setAnimation}
      />
    </div>
  )
}

export default App
