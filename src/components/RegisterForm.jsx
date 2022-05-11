import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { registerUser } from '../store/actions/authActions'

const RegisterForm = ({setLogin}) => {

  const dispatch = useDispatch()
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: ''
  })

  const onChange = e => {
    setFormData(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(registerUser(formData))
  }
  return (
    <div className='container card py-5 rounded-7 shadow p-3 mb-5 bg-body rounded'>
      <h2  className='text-center mb-4'>Bli medlem</h2>
      <form onSubmit={handleSubmit} className='pe-5 ps-5 d-flex justify-content-center'>
        <div className="row">
          <div className="col-lg-6 col-sm-12 mb-4 pe-4" >
            <input value={formData.firstName} onChange={onChange} type="text" id='firstName' name='firstName' className='form-control' placeholder='Förnamn:'/>
          </div> 
          <div className="col-lg-6 col-sm-12 mb-4" >       
            <input value={formData.lastName} onChange={onChange} type="text" id='lastName' name='lastName' className='form-control' placeholder='Efternamn:' />
          </div>
          <div className="col-12 mb-4">
            <input value={formData.email} onChange={onChange} type="email" id='email' name='email' className='form-control' placeholder='Epost:' />
          </div>
          <div className="col-lg-6 col-sm-12 mb-4 pe-4">
            <input value={formData.password} onChange={onChange} type="password" id='password' name='password' className='form-control' placeholder='Lösenord:' />
          </div>
          <div className="col-lg-6 col-sm-12 mb-4 ">
            <input value={formData.repeatPassword} onChange={onChange} type="repeatPassword" id='repeatPassword' name='repeatPassword' className='form-control' placeholder='Upprepa Lösenordet:' />
          </div>
       
          <div>
            <button className='mb-4 btn btn-block btn-primary gradient-custom-signUp text-body'>Registrera</button>
          </div>
          <p className='text-center'>Redan medlem? <span className='login-link' onClick={() => setLogin(true)} >logga in här</span></p>
          </div>
        </form>
    </div>
  )
}

export default RegisterForm