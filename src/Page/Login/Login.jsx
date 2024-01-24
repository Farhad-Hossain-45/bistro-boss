import { Link } from 'react-router-dom';
import LoginImage from '../../assets/others/authentication2.png'
import './Login.css'

const Login = () => {
    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const formValue = {email,password}
        console.log(formValue)
    }
    return (
        <div className=''>
            
            <div className="hero min-h-screen bg-base-200 login-bg">

                <div style={{ boxShadow: '5px 5px 5px 5px' }} className="hero-content flex-col lg:flex-row  bg-white login-bg">

                    <div className="text-center lg:text-left">
                        <img src={LoginImage} alt="" />
                    </div>

                    <div className="card shrink-0 w-full max-w-sm">
                    <h2 className='text-center text-3xl font-bold'>Login</h2>
                        <form className="card-body" onSubmit={handleLogin}>
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
                                <button className="btn bg-[#D1A054] text-white">Login</button>
                            </div>
                            <h1 className='text-center text-[#D1A054] mt-2'>New here? <Link to='/register'><span className='font-semibold text-lg'>Create a New Account</span></Link></h1>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;