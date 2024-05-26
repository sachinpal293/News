import React from 'react'
import { useParams } from 'react-router-dom';
function Health() {
  const {title} = useParams();
  return (
    <div>health {title}</div>
  )
}

export default Health