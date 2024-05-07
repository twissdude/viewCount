import { useState } from 'react'
import Headers from '../Header/Header'
import Button from '../Button/Button'
import Result from '../Result/Result'
import './App.css'


function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodValue = (newValue) => {
    setGood(newValue)
  }

  const neutralValue = (newValue) => {
    setNeutral(newValue)
  }

  const badValue = (newValue) => {
    setBad(newValue)
  }

  return (
  <div className="container">
    <Headers />
    <div className="cover">
    <Button handleClick={()=> goodValue(good + 1)} text="good" />
    <Button handleClick={()=> neutralValue(neutral + 1)} text="neutral" />
    <Button handleClick={()=> badValue(bad + 1)} text="bad" />
    </div>
      <Result good={good} neutral={neutral} bad={bad} />
  </div>
  )
}

export default App
