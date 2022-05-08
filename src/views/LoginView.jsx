import { useState } from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

const LoginView = () => {

   const [login, setLogin] = useState(false)
  return (
    <div>
        { login
        ? <LoginForm />
        : <RegisterForm />}

    </div>
  )
}

export default LoginView
