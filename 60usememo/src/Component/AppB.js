import React,{useState,useMemo} from 'react'
import CompB from './CompB'

const AppB = () => {
    const[countB,setCountB] = useState(0)
    const countAppB = props => {
       setCountB(countB+1)
    }
    const countuseMemo = useMemo(() => {
        return <CompB />
    }, [])
  return (<>
      <h1>{countB}</h1>
      <button onClick={countAppB}>incrementB</button>
      {countuseMemo}
    </>
  )
}

export default AppB;