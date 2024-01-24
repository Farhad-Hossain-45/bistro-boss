
import { useForm } from "react-hook-form"
import registerImage from "../../assets/others/authentication2.png"
import { Link } from "react-router-dom";

const Register = () => {
    const {
        register,
        handleSubmit,
        
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <div className=''>

            <div className="hero min-h-screen bg-base-200 login-bg">

                <div style={{ boxShadow: '5px 5px 5px 5px' }} className="hero-content flex-col lg:flex-row-reverse  bg-white login-bg">

                    <div className="text-center lg:text-left">
                        <img src={registerImage} alt="" />
                    </div>

                    <div className="card shrink-0 w-full max-w-sm">
                        <h2 className='text-center text-3xl font-bold'>Register</h2>
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input  {...register("name", { required: true })} type="text" name='name' placeholder="your name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input  {...register("email", { required: true})} type="email" name='email' placeholder="email" className="input input-bordered"  />
                                {errors.name && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {required: true
                                })} name='password' placeholder="password" className="input input-bordered"/>
                                {errors.name && <span className="text-red-600">Password is required</span>}
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#D1A054] text-white">Register</button>
                            </div>
                            <h1 className='text-center text-[#D1A054]'>Already registered?<Link to='/login'> <span className='font-semibold text-lg'>Go to login</span></Link></h1>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;