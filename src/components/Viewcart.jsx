import React from 'react'
import { useParams } from 'react-router-dom'

const Viewcart = () => {
    let d=useParams();
    console.log(d)
  return (
    <div>{d.user}</div>
  )
}

export default Viewcart