import {useState} from 'react'


const LoginForm = ({setLogin}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const onChange = e => {
    setFormData(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }
  
  return (
    <div className='container py-3 rounded-7 shadow  mb-5 bg-body rounded'>
      <h2 className='text-center mb-4'>Logga in</h2>
      <form className='d-flex justify-content-center'>
        <div className="row">
          <div className="col-12 mb-4 ">
            <input value={formData.email} onChange={onChange} type="email" id='email' name='email' className='form-control' placeholder='Epost:' />
          </div>
          <div className="col-12 mb-4 ">
            <input value={formData.password} onChange={onChange} type="password" id='password' name='password' className='form-control' placeholder='Lösenord:' />
          </div>
          <div>
            <button className='btn mb-4 btn btn-block btn-primary gradient-custom-signUp text-body'>Logga in</button>
          </div>
          <p className='text-center'>Har du inget konto? <span className='login-link' onClick={() => setLogin(false)}>Bli medlem</span></p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm