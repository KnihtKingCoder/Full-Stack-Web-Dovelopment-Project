import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Button, Input, Logo } from '../../components';


function Login() {
    const navigate=useNavigate();
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex flex-col items-center justify-center gap-5  w-96'>
            <div className=' p-6 border-2 border-gray-300 w-96'>
                <Logo className='text-center text-4xl p-10 font-serif'/>
                <form>
                    <Input placeholder='Phone number,username,or email' onChange={()=>{}}/>
                    <Input placeholder='Password' onChange={()=>{}}/>
                    <Button width='w-full' height='h-10'  type='submit' children="Log in" className='w-full bg-blue-500 text-white rounded-sm py-2' onChange={()=>{}}/>
                </form>
          
            </div>
            <div className='flex items-center gap-2 p-6 border-2 border-gray-300 w-96'>
            <h2 className="text-xl text-gray-500">Don't have an account ?</h2>
           <Button children='Sign up' className='text-xl font-medium text-blue-500' onClick={()=>navigate('/signup')}/>
           
            </div>
            </div>
           
            
        </div>
    );
}

export default Login;