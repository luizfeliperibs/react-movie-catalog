import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Components
// Properties
// UseEffects | UseState

const App = () => {
  return (

    <div>

      <Card title="Shrek" rating={5} isCool={true}/> 
      <Card title="The Lion King"/>
      <Card title="Demon Slayer"/>

    </div>

  )
}

const Card = ({title}) => {

  const [count, setCount] = useState(0);

  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`)
  }, [hasLiked]);

  useEffect(() => {
    console.log('Card rendered')
  }, []);

  return (

    <div className="card" onClick={() => setCount((prevState) => prevState + 1)}>

      <h2>{title}</h2>

      <h2>{count || null}</h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
          {hasLiked ? 'Liked' : 'Like'}
      </button>

    </div>
  )
}

export default App