import React from 'react'
import { Button } from './ui/button';
import Logo from './logo';
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaNewspaper } from "react-icons/fa6";
import SubHeader from './subHeader';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/features/authSlice';

function Hearder() {
  const isAuth = useSelector(state=> state.auth.isAuthenticated)
  const username = useSelector(state=> state.auth.user) 
  if(isAuth) 
    {
  console.log(`hum abhi herader.jsx me hai ${isAuth} and username is ${username.username }`)
    }
  // console.log(username)
 const dispatch = useDispatch();
  return (
    <div>
    <header className='h-16 shadow-md bg-white '>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        <div className=''>
          <Link to={"/"} className='flex'>
          <FaNewspaper size="50" color="red"/>
          <h1 className='p-3 text-red-500 font-bold text-lg'>Your News</h1> 
          </Link>
        </div>

        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full pl-5 focus-within:shadow'>
            <input type='text' placeholder='search product here' className='w-full outline-none '></input>
            <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
              <GrSearch/>
            </div>
        </div>

        
        <div className='flex items-center gap-5'>

        < div className='text-3xl text-center cursor-pointer'>
          <FaRegCircleUser/>
           <p className='text-sm text-green-500 font-bold'>{isAuth ? username.username :""}</p>
        </div>

        {/* <div className='text-2xl cursor-pointer relative'>
          <span><FaShoppingCart/></span>
          <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-2'>
            <p className='text-sm'>0</p>
          </div>
        </div> */}

        <div>
           {
           isAuth ? <Link to={"/"}>
           <Button onClick={()=>dispatch(logout())}>Logout</Button>
           </Link>:<Link to={"login"}>
            <Button>Login</Button>
            </Link>
            
           }
        </div>


        </div>

      </div>
      <SubHeader/>
    </header>
   
    </div>
  )
}

export default Hearder;