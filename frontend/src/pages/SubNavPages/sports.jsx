import React from 'react'
import { useParams } from 'react-router-dom';
function Sports() {
  const {title} = useParams();
  return (
    <div>sports {title}</div>
  )
}

export default Sports