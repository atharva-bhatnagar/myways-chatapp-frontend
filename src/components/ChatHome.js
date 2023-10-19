import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ChatHome = ({setLogin,user,login}) => {

    const nav=useNavigate()
    useEffect(()=>{
        if(login===false){
            nav('/login')
        }
    },[])
  return (
    <div className='sec'>
        <h1>ChatApp</h1>
        <h4>welcome {user.name}!</h4>
        <p>Email : {user.email}</p>
        <button onClick={()=>{setLogin(false); nav('/login')}}>Logout</button>
    </div>
  )
}

export default ChatHome