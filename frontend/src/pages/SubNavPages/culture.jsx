import { VideoAdd } from '@/features/video/videoAdd'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
function Culture() {
  const {title} = useParams();
  return (
    <>
     <div>Culture {title}</div>
    </>
  )
}

export default Culture