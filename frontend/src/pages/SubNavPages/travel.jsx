import React from 'react'
import { useParams } from 'react-router-dom';
function Travel() {
  const {title} = useParams();
  return (
    <div>travel {title}</div>
  )
}

export default Travel