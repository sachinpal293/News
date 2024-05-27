import React ,{useState, useEffect}from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { endpointPath } from '@/config/api.js';
function Election() {
  const data = useSelector(state=>state.newsPost)
  console.log(data.data)
  const {title} = useParams();
  // const [articles, setArticles] = useState([]);
  const [Edata, setData] = useState([]);
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

  return (
    <>
     {/* <div className='w-3/5  mx-52 mt-12'>
        <h2 className='font-bold'>{title || data.data.title}</h2>
        <h2>{data.data.description}</h2>
        <img  className="mx-auto"src={data.data.img} width="100%" height="400px"/>
        <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Recusandae assumenda velit eum, repudiandae ad blanditiis totam tempore
          dolores architecto voluptatibus, est, temporibus nostrum aut distinctio a 
          vero suscipit perspiciatis officia?</p>
     </div> */}
     <div className='conatiner mx-auto'>
         <div className='grid grid-cols-4 gap-4'>
          
          {Edata.map((elment)=>(
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

export default Election