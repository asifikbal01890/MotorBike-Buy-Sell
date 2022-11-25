import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../Hooks/useToken';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {logIn , googleLogIn} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, {replace: true});
    }

    const handleLogin = data =>{
        setLoginError('');
        logIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setLoginUserEmail(data.email);
            toast('Login Successfully');
        })
        .catch(error => {
            setLoginError(error.message);
        });
    }

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogIn = () =>{
        setLoginError('');
        googleLogIn(googleProvider)
        .then(result => {
            const user = result.user;
            toast('Login Successfully');
            navigate(from, {replace: true});
            
        })
        .catch(e => setLoginError(e.message));
    }
    return (
        <div className='flex justify-center items-center h-[900px] '>
            <div className='shadow-md w-[385px] px-7 rounded-2xl'>
                <h2 className='text-center text-2xl mt-6 text-primary font-medium'>Login</h2>
              <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control w-full mt-7 mb-2.5">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", { required: "Email Address is required" })} type="email" className="input input-bordered w-full" />
                    {errors.email && <p role="alert" className='text-red-700 '>{errors.email?.message}</p>}
                    </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password",{

                            required: "Password is required",
                            minLength: { value: 6, message: "Passwords must be at least 6 characters" }

                        })} type="password" className="input input-bordered w-full" />
                    {errors.password && <p role="alert" className='text-red-700 '>{errors.password?.message}</p>}
                    <p className='text-[10px] pt-[2px]'>Forgot Password?</p>
                    </div>
                
                <input className='btn btn-primary w-full mt-4' value="Login" type="submit" />
                {loginError && <p className='text-red-700 '>{loginError}</p>}
            </form>
            <p className='text-xs mt-2.5 mb-4'>New to Doctors Portal? <Link className='text-primary' to={'/signUp'}>Create new account</Link> </p>
            <div className="divider">OR</div>
            <button onClick={handleGoogleLogIn} className="btn btn-outline btn-primary w-full mb-6">CONTINUE WITH GOOGLE</button>
          </div>
        </div>
    );
};

export default Login;