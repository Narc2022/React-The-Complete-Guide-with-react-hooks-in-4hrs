import React,{useEffect} from 'react'

let renderCount = 1
const CompA = () => {
    useEffect(() => {
      renderCount++
    })
    
  return (
    <div>
          <h1>ComponentA : render {renderCount}</h1>
    </div>
  )
}

export default CompA