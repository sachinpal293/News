import React from 'react'
import { useParams } from 'react-router-dom'

function Innovation() {
  const {title} = useParams();
  return (
    <div>innovation {title}</div>
  )
}

export default Innovation