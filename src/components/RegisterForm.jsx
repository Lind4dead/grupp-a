import { useState } from 'react'

const RegisterForm = () => {

const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    Email: '',
    Password: '',
    RepeatPassword: '',
})

const onChange = e => {
    setFormData(state => ({
        ...state,
        [e.target.name]: e.target.value
    }))
}

  return (
    <div className='container card py-5 rounded-7 shadow p-3 mb-5 bg-body rounded'>
      <h2 className='text-center mb-4'>Register</h2>
      <form className='pe-5 ps-5 d-flex justify-content-center'onSubmit={handleSub}>
        <div className="row ">
          <div className="col-lg-6 col-sm-12 mb-4 " >
            <input value={formData.firstName} onChange={onChange} type="text" id='firstName' name='firstName' className='form-control' placeholder='First Name:'/>
          </div> 
          <div className="col-lg-6 col-sm-12 mb-4" >       
            <input value={formData.lastName} onChange={onChange} type="text" id='lastName' name='lastName' className='form-control' placeholder='Last Name:' />
          </div>
          <div className="col-12 mb-4">
            <input value={formData.email} onChange={onChange} type="email" id='email' name='email' className='form-control' placeholder='Email:' />
          </div>
          <div className="col-lg-6 col-sm-12 mb-4">
            <input value={formData.password} onChange={onChange} type="password" id='password' name='password' className='form-control' placeholder='Password:' />
          </div>
          <div className="col-lg-6 col-sm-12 mb-4">
            <input value={formData.repeatPassword} onChange={onChange} type="repeatPassword" id='repeatPassword' name='repeatPassword' className='form-control' placeholder='Repeat Password:' />
          </div>
       
          <div>
            <button className='mb-4 btn btn-block btn-primary gradient-custom-signUp text-body'>{loading ? 'Loading...' : 'Sign up'}</button>
          </div>
          <p className='text-center'>Already a member? <span onClick={() => setLogin(true)} className='link'>login here</span></p>
          </div>
        </form>
    </div>
  )
}

export default RegisterForm