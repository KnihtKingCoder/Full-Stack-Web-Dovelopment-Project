import React from 'react';
import {Input} from '../../components';
import {Button} from '../../components';
import Login from './Login';
import { Link ,NavLink, useNavigate} from 'react-router-dom';
import Logo from './components/Logo';

function Signup() {
    const navigate=useNavigate()
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex flex-col items-center justify-center gap-5  w-96'>
            <div className='p-6 border-2 border-gray-300 w-96 '>
                <Logo className='text-center text-4xl p-8 font-serif'/>
                <form>
                    <Input placeholder='Mobile Number or Email' onChange={()=>{}}/>
                    <Input placeholder='Full Name' onChange={()=>{}}/>
                    <Input placeholder='Phone number,username,or email' onChange={()=>{}}/>
                    <Input placeholder='Password' onChange={()=>{}}/>
                    <Button type='submit' children="Sign up" className='w-full bg-blue-500 text-white rounded-sm py-2' onChange={()=>{}}/>
                </form>
            </div>

            <div className='flex items-center gap-2 p-6 border-2 border-gray-300 w-96'>
            <h2 className="text-xl text-gray-500">have an account ?</h2>
        
          <Button children='Login' className='text-xl font-medium text-blue-500' onClick={()=>navigate('/login')}/>
          
            </div>
            </div>
           
           
        </div>
    );
}

export default Signup;