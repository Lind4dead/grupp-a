import {useState} from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

const LoginView = () => {

  const [login, setLogin] = useState(true)
   
  return (
    <div className='login-view'>
      { login
      ? <LoginForm setLogin={setLogin} />
      : <RegisterForm setLogin={setLogin} />
      }
    </div>
  )
}

export default LoginView
