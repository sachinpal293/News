import React from 'react'
import { useParams } from 'react-router-dom';
function Earth() {
  const {title} = useParams();
  return (
    <div>earth {title}</div>
  )
}

export default Earth