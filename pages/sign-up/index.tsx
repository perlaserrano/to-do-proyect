
import React from 'react'

const SignUp = () => {
  return (
    <div className="main-container">
      <div className="sign-in-container">
        <div className="sign-in-img-container">
          <img src="/images/auth.jpg" alt=""/>
        </div>
        <div className="sign-form-container">
          <h1>Registration Info</h1>
          <form>
            
            <div>
              <input className='sign-in-input' placeholder='First Name' type="text" required/>
            </div>
            <div>
              <input className='sign-in-input' placeholder='Last Name' type="text" required/>
            </div>
            <div>
              <input className='sign-in-input' placeholder='Email' type="email" required/>
            </div>
            <div>
              <input className='sign-in-input' placeholder='Phone Number' type="text" required/>
            </div>
            <div>
              <input className='sign-in-input' placeholder='Password' type="password" required/>
            </div>
            <div>
              <input className='sign-in-input' placeholder='Confirm Password' type="password" required />
            </div>
            <div>
              <button className='btn-primary'>Submit</button>
            </div>

          </form>
            
        </div>
      </div>
    </div>
  )
}

export default SignUp