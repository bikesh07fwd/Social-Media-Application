import React,{useEffect,useState} from 'react'
import logo from '../img/Instagram_text_logo.png'
import './SignIN.css'
import {Link,useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';

export default function SignIN() {

  const navigate = useNavigate()

  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")

  //Toast functions

  const notifyA=(msg)=>{
    toast.error(msg)
  }
  const notifyB = (msg)=>{
    toast.success(msg)
  }

  //for email vaildation
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  

  //for strong password
  const strPass =   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;   


  const postData=()=>{
    if(!emailRegex.test(email)){
        notifyA("Please enter valid email")
        return
    }
    else if(!strPass.test(password)){
        notifyA("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.")
        return
    }

    fetch('http://localhost:5000/signin',{
        method: 'post',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify({
            email:email,
            password:password
        })
    }).then(res=>res.json())
    .then(data=>{
        if(data.error){
            notifyA(data.error)
        }
        else{
            notifyB(data.message)
            navigate('/')
        }
        console.log(data)})
}


  return (
    <div className="signin">
      <div>
        <div className="loginform">
          {/* <img className="signUplogo2" src={logo} /> */}
          <i className='text_logo_signin'>Moments</i>
          <div>
            <input type='text' name='email' placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
          <div>
            <input type='password' name='password' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          </div>
          <input type='submit' id='sbt_btn' onClick={()=>{postData()}} value='Sign In'></input>
        </div>
        <div className='loginform2'>
            Dont't have an account ?
            <Link to='/signup'>
            <span style={{color:"#00AEEF", cursor:"pointer"}}>Sign Up</span>
            </Link>
        </div>
      </div>
      
    </div>
  )
}
