import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Components

const App = () => {
  return (

    <div>

      <h2>Hello World!</h2>

      <Card title="Shrek" rating={5} isCool={true} actors={[{name: "Di Caprio"}]}/> 
      <Card title="The Lion King" rating={3} isCool={false}/>
      <Card title="Demon Slayer" rating={5} isCool={true}/>

    </div>

  )
}

const Card = ({title}) => {
  return (
    <div>

      <h2>{title}</h2>

    </div>
  )
}

export default App