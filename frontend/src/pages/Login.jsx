import React, { useState } from 'react'
import loginIcons from "@/assest/assest/signin.gif"
import { Button } from '@/components/ui/button'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '@/features/authSlice';

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigte = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: "",
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
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('//localhost:8080/api/v1/user/login', {
            email: data.email,
            password: data.password
        })
            .then(function (response) {
                console.log(response.data.data.user)
                // const userdata = {username:response.data.data}
                // console.log(userdata)
                localStorage.setItem("userId", response.data.data?.user._id);
                dispatch(login(response.data.data.user))
                navigte("/")
                console.log(response.statusText);
                console.log(response.data.data.user.name)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    console.log(data);
    return (
        <section id='login'>
            <div className='mx-auto container p-4'>

                <div className='bg-white p-2 py-5 w-full max-w-sm mx-auto'>
                    <div className='w-20 h-20 mx-auto overflow-hidden rounded-full'>
                        <img src={loginIcons} alt='login icons' />
                    </div>
                    <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <label>Email : </label>
                            <div className='bg-slate-100 p-2'>
                                <input
                                    type='email'
                                    placeholder='enter email'
                                    onChange={handleOnChange}
                                    value={data.email}
                                    name='email'
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
                            <Link to={"/forget-password"} className='block w-fit ml-auto hover:underline hover:text-red-500'>
                                Forgot password ?
                            </Link>
                        </div>
                        <Button className="bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110
                    transition-all mx-auto block mt-4">Login</Button>
                    </form>
                    <p className='my-5'> Don't have account ? <Link to={"/sign-up"} className='hover:underline hover:text-red-500'>Sign Up</Link></p>
                </div>
            </div>
        </section>
    )
}

export default Login