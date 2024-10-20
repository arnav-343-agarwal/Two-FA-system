import React from 'react'
import LoginForm from '../components/LoginForm'
import { useNavigate } from 'react-router-dom'
import { useSession } from '../context/SessionContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const {login} = useSession();
  const handleLoginSuccess = (userData)=>{
    console.log("The logged in userdata : ",userData);
    login(userData);
    if(!userData.isMfaActive){
      navigate("/setup-2fa");
    }
    else{
      navigate("/verify-2fa");
    }
  }
  return (
    <LoginForm onLoginSuccess={handleLoginSuccess} />
  )
}

export default LoginPage