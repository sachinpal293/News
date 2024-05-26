import React, { useState } from 'react'
import imageTObase64 from '@/helpers/imageTobase64';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
function BePatner() {

  const [isUser, setIsUser] = useState(true)
  const [nav, setNav] = useState("article")
  const [data, setData] = useState({
    title: "",
    description: "",
    img: "",
    category: "",
    data: "",
    url:""
  })
  


  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleUploadPic = async (e) => {
    const file = e.target.files[0];

    const imagePic = await imageTObase64(file);
    setData((prev) => {
      return {
        ...prev,
        img: imagePic
      }
    })
  }

  console.log(data)
  console.log(nav)
  return (
    <>
      {
        isUser ?
          <div className='conatiner bg-slate-300 mx-10'>
            <div className=' mx-auto container'>
              <form className='pt-6 flex flex-col gap-2' >
                <div className='grid'>
                  <label>Title : </label>
                  <div className='bg-slate-100 p-2'>
                    <input
                      type='text'
                      placeholder='Enter the title of the post'
                      onChange={handleOnChange}
                      value={data.title}
                      name='title'
                      required
                      className='w-full h-full outline-none bg-transparent' />
                  </div>
                </div>
                <div className='grid'>
                  <label>Description : </label>
                  <div className='bg-slate-100 p-2'>
                    <input
                      type='text'
                      placeholder='Enter the description of the post'
                      onChange={handleOnChange}
                      value={data.description}
                      name='description'
                      required
                      className='w-full h-full outline-none bg-transparent' />
                  </div>
                </div>
                <div className='grid'>
                  <label> Write Article: </label>
                  <div className='bg-slate-100 p-2'>
                    <textarea
                      type='text'
                      placeholder='Write Your Article '
                      onChange={handleOnChange}
                      value={data.data}
                      name='data'
                      required
                      className='w-full h-full outline-none bg-transparent' >
                    </textarea>
                  </div>
                </div>
                <div>
                  <label>Choose Category :</label>
                  <select name='category' value={data.category} onChange={handleOnChange}>
                    <option >Select Category</option>
                    <option value="sports">sports</option>
                    <option value="technology">Technology</option>
                    <option value="Business">Business</option>
                    <option value="travel">Travel</option>
                    <option value="earth">Earth</option>
                    <option value="health">Health</option>
                  </select>

                </div>
                <div className='flex flex-row'>
                  <label >
                    <div className='bg-red-600 text-white px-6 py-2 '>
                      Upload
                    </div>
                    <input type='file' className='hidden' onChange={handleUploadPic} />

                  </label>
                  <img src={data.img} className='mx-5' width="100px" height="100px" />
                </div>

                <Button className="bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110
                    transition-all mx-auto block mt-4 mb-4">Submit</Button>
              </form>
            </div>
          </div> :
          <div className='container'>
            <div className='flex flex-row '>
              <Button className="mx-5" value="Video" onClick={(e) => { setNav(e.target.value) }}>Video Post</Button>
              <Button className="" value="article" onClick={(e) => setNav(e.target.value)}>Articles</Button>
            </div>
            {
              nav==="article"? 
              <div className='conatiner bg-slate-300 mx-10 mt-2'>
              <div className=' mx-auto container'>
                <form className='pt-6 flex flex-col gap-2' >
                  <div className='grid'>
                    <label>Title : </label>
                    <div className='bg-slate-100 p-2'>
                      <input
                        type='text'
                        placeholder='Enter the title of the post'
                        onChange={handleOnChange}
                        value={data.title}
                        name='title'
                        required
                        className='w-full h-full outline-none bg-transparent' />
                    </div>
                  </div>
                  <div className='grid'>
                    <label>Description : </label>
                    <div className='bg-slate-100 p-2'>
                      <input
                        type='text'
                        placeholder='Enter the description of the post'
                        onChange={handleOnChange}
                        value={data.description}
                        name='description'
                        required
                        className='w-full h-full outline-none bg-transparent' />
                    </div>
                  </div>
                  <div className='grid'>
                    <label>Video Link : </label>
                    <div className='bg-slate-100 p-2'>
                      <input
                        type='text'
                        placeholder='Enter the description of the post'
                        onChange={handleOnChange}
                        value={data.url}
                        name='url'
                        required
                        className='w-full h-full outline-none bg-transparent' />
                    </div>
                  </div>
                  <div className='grid'>
                    <label> Write Article: </label>
                    <div className='bg-slate-100 p-2'>
                      <textarea
                        type='text'
                        placeholder='Write Your Article '
                        onChange={handleOnChange}
                        value={data.data}
                        name='data'
                        required
                        className='w-full h-full outline-none bg-transparent' >
                      </textarea>
                    </div>
                  </div>
                  <div>
                    <label>Choose Category :</label>
                    <select name='category' value={data.category} onChange={handleOnChange}>
                      <option >Select Category</option>
                      <option value="sports">sports</option>
                      <option value="technology">Technology</option>
                      <option value="Business">Business</option>
                      <option value="travel">Travel</option>
                      <option value="earth">Earth</option>
                      <option value="health">Health</option>
                    </select>

                  </div>
                  <div className='flex flex-row'>
                    <label >
                      <div className='bg-red-600 text-white px-6 py-2 '>
                        Upload
                      </div>
                      <input type='file' className='hidden' onChange={handleUploadPic} />

                    </label>
                    <img src={data.img} className='mx-5' width="100px" height="100px" />
                  </div>

                  <Button className="bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110
                    transition-all mx-auto block mt-4 mb-4">Submit</Button>
                </form>
              </div>
            </div>:
            <div className='conatiner bg-slate-300 mx-10 mt-2'>
            <div className=' mx-auto container'>
              <form className='pt-6 flex flex-col gap-2' >
                <div className='grid'>
                  <label>Title : </label>
                  <div className='bg-slate-100 p-2'>
                    <input
                      type='text'
                      placeholder='Enter the title of the post'
                      onChange={handleOnChange}
                      value={data.title}
                      name='title'
                      required
                      className='w-full h-full outline-none bg-transparent' />
                  </div>
                </div>
                <div className='grid'>
                  <label>Description : </label>
                  <div className='bg-slate-100 p-2'>
                    <input
                      type='text'
                      placeholder='Enter the description of the post'
                      onChange={handleOnChange}
                      value={data.description}
                      name='description'
                      required
                      className='w-full h-full outline-none bg-transparent' />
                  </div>
                </div>
                <div className='grid'>
                  <label>Video Link : </label>
                  <div className='bg-slate-100 p-2'>
                    <input
                      type='text'
                      placeholder='Enter the description of the post'
                      onChange={handleOnChange}
                      value={data.url}
                      name='url'
                      required
                      className='w-full h-full outline-none bg-transparent' />
                  </div>
                </div>
                <div className='grid'>
                  <label> Thumbnail: </label>
                  <div className='bg-slate-100 p-2'>
                    <input
                      type='text'
                      placeholder='Write Your Article '
                      onChange={handleOnChange}
                      value={data.thumnail}
                      name='thumbnail'
                      required
                      className='w-full h-full outline-none bg-transparent' />
                  </div>
                </div>
                <div>
                  <label>Choose Category :</label>
                  <select name='category' value={data.category} onChange={handleOnChange}>
                    <option >Select Category</option>
                    <option value="sports">sports</option>
                    <option value="technology">Technology</option>
                    <option value="Business">Business</option>
                    <option value="travel">Travel</option>
                    <option value="earth">Earth</option>
                    <option value="health">Health</option>
                  </select>

                </div>
                <Button className="bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110
                  transition-all mx-auto block mt-4 mb-4">Submit</Button>
              </form>
            </div>
          </div>
            }
          </div>
      }
    </>
  )
}

export default BePatner