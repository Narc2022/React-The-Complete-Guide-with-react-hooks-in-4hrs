import React,{useEffect} from 'react'
let renderCountB = 0
const CompB = () => {
    useEffect(() => {
      renderCountB++
    })
    
  return (
    <div>{renderCountB}</div>
  )
}

export default CompB