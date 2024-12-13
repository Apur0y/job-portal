import React, { useContext } from 'react';
import RegisterIcon from '../../assets/lottie/register.json'
import Lottie from 'lottie-react';
import AuthContext from '../../context/AuthContext';

const Login = () => {

  const {signInUser} = useContext(AuthContext)

     const handleSubmit =(event)=>{
          event.preventDefault()
        const e = event.target;
        const name =e.name.value;
        const email =e.email.value;
        const password =e.password.value;
        const user ={
            name,email,password
        }
        
        signInUser(email,password)

        .then(res=>{
          console.log(res)
        })
        .catch((error)=>{
          console.log("Got a error:", error.message)
        })

     } 

    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    <Lottie className='w-96' animationData={RegisterIcon}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
     
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;