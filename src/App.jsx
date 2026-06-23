import { useState } from 'react'
import VanguardPanelSolutionsWebsite from './pages/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <VanguardPanelSolutionsWebsite/>
    </>
  )
}

export default App
