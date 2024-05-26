import React, { useState } from 'react'
import loginIcons from "@/assest/assest/signin.gif"
import { Button } from '@/components/ui/button'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import imageTObase64 from '@/helpers/imageTobase64';
import { APIS } from "@/comman/index.js"
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigte = useNavigate();
  const [data, setData] = useState({
    username:"",
    email: "",
    name: "",
    password: "",
    Cpassword: "",
    avatar: ""

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
        avatar: imagePic
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password === data.Cpassword) {
      axios.post('//localhost:8080/api/v1/user/register', {
        username : data.username,
        name: data.name,
        email: data.email,
        password: data.password,
        avatar: data.avatar
      })
        .then(function (response) {
          console.log(response);
          alert("Regisration successfully done!")
          navigte("/login")

        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log("Please check the password")
    }


  }
  console.log(data);



  return (
    <section id='signUp'>
      <div className='mx-auto container p-4'>

        <div className='bg-white p-5  w-full max-w-sm mx-auto'>
          <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
            <div>
              <img src={data.avatar || loginIcons} alt='login icons' />
            </div>
            <form>
              <label >
                <div className='text-xs bg-opacity-80  bg-slate-200 pb-4 pt-2 text-center absolute bottom-0 w-full'>
                  Upload
                </div>
                <input type='file' className='hidden' onChange={handleUploadPic} />
              </label>

            </form>
          </div>
          <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
            <div className='grid'>
              <label>Username : </label>
              <div className='bg-slate-100 p-2'>
                <input
                  type='text'
                  placeholder='enter email'
                  onChange={handleOnChange}
                  value={data.username}
                  name='username'
                  required
                  className='w-full h-full outline-none bg-transparent' />
              </div>
            </div>
            <div className='grid'>
              <label>Email : </label>
              <div className='bg-slate-100 p-2'>
                <input
                  type='email'
                  placeholder='enter email'
                  onChange={handleOnChange}
                  value={data.email}
                  name='email'
                  required
                  className='w-full h-full outline-none bg-transparent' />
              </div>
            </div>
            <div className='grid'>
              <label>FullName : </label>
              <div className='bg-slate-100 p-2'>
                <input
                  type='text'
                  placeholder='enter FullName'
                  onChange={handleOnChange}
                  value={data.name}
                  name='name'
                  required
                  className='w-full h-full outline-none bg-transparent' />
              </div>
            </div>
            <div>
              <label>Password : </label>
              <div className='bg-slate-100 p-2 flex'>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder='enter password'
                  onChange={handleOnChange}
                  value={data.password}
                  name="password"
                  required
                  className='w-full h-full outline-none bg-transparent'
                />
                <div className='cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                  <span>
                    {
                      showPassword ? <FaEye /> : <FaEyeSlash />
                    }
                  </span>
                </div>
              </div>
            </div>
            <div>
              <label>Confirm Password : </label>
              <div className='bg-slate-100 p-2 flex'>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder='Confirm password'
                  onChange={handleOnChange}
                  value={data.Cpassword}
                  name="Cpassword"
                  required
                  className='w-full h-full outline-none bg-transparent'
                />
                <div className='cursor-pointer' onClick={() => setShowConfirmPassword((prev) => !prev)}>
                  <span>
                    {
                      showConfirmPassword ? <FaEye /> : <FaEyeSlash />
                    }
                  </span>
                </div>
              </div>



            </div>
            <Button className="bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110
                    transition-all mx-auto block mt-4">Register</Button>
          </form>
          <p className='my-5'> Already have account ? <Link to={"/login"} className='hover:underline hover:text-red-500'>Sign In</Link></p>
        </div>
      </div>
    </section>
  )
}

export default Register;