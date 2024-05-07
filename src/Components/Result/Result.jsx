import React from 'react'

const Result= (props) => {
  return (
    <div>
    <h4>statistics</h4>
      <h5>good: {props.good}</h5>
      <h5>neutral: {props.neutral}</h5>
      <h5>bad: {props.bad}</h5>
    </div>
  )
}

export default Result
