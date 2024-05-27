import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useParams } from 'react-router-dom';
import axios from 'axios';
import { endpointPath } from '@/config/api';
import Card from '@/components/Card';
function News() {
  const {title} = useParams()
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const endpoint = endpointPath("in", "sports");


  const handleGetApi = async () => {
    await axios.get(endpoint)
      .then((respose) => {
        // console.log(respose.data.articles[0])
        setData(respose.data.articles)
      })
  }
  useEffect(() => {
    handleGetApi();
  }, [])

console.log(endpoint)
const postData = useSelector((state) => state.newsPost.data);
  // console.log(postData)

  console.log(data[0])

  return (
    <>
       <div className='conatiner mx-auto'>
         <div className='grid grid-cols-4 gap-4'>
          
          {data.map((elment)=>(
             <Card
             img={elment.image}
             description={elment.description}
             title={elment.title}
             category=""
             newurl={elment.url}
            />
          ))}
          
         </div>
       </div>
    </>
  )
}

export default News