import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import { endpointPath } from '@/config/api';
function News() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const endpoint = endpointPath("in", "sports");


  const handleGetApi = async () => {
    await axios.get(endpoint)
      .then((respose) => {
        console.log(respose)
      })
  }
  useEffect(() => {
    handleGetApi();
  }, [])

  console.log(endpoint)
  const postData = useSelector((state) => state.newsPost.data);
  console.log(postData)

  return (
    <div>News</div>
  )
}

export default News