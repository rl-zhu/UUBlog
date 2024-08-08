
import { useNavigate } from 'react-router-dom'
import { useStore } from '@/store/index'
import { observer } from 'mobx-react-lite'
import { useState } from 'react';

function Login() {

    const { loginStore } = useStore()
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isLogin, setIsLogin] = useState(true)

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
        return regex.test(password);
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        if (!validatePassword(value)) {
            setPasswordError(
                "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character. Minimum length is 8."
            );
        } else {
            setPasswordError("");
        }
    };

    const handleLogin = async (e) => {
        if (validatePassword(password)) {
            
            await loginStore.getToken({
                username: username,
                password: password,

            })
            console.log(loginStore.token)
            navigate('/my', { replace: true })

        } else {
            alert("Incorrect username or password. Please try again.");
        }
    };

    const handleRegister = (e) => {
        if (validatePassword(password)) {
            alert("Registered successfully!");
        } else {
            alert("Please check password and try again.");
        }
    };

    return (
        <div className='login-page flex items-center justify-center w-[100vw] h-[100vh]'>

            <div className='relative box_parent flex border-2 border-slate-100 w-[35rem] h-[15rem] rounded-md overflow-hidden'>
                <div className={`login-box  transition-all duration-300 px-[2rem] py-[2rem] items-center justify-center text-white
             ${!isLogin ? 'w-1/6 bg-blue-300 flex items-center' : 'w-5/6 bg-bg-mocha '}
             
            `}
                    onMouseEnter={() => setIsLogin(true)}>
                    {isLogin ? <>
                        <div className="mb-4 flex gap-5 items-center">
                            <label htmlFor="username" className="block text-sm font-[600] text-[1.2rem]">
                                Username:
                            </label>
                            <input
                                type="username"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm
                            text-slate-800
                           "
                            />
                        </div>
                        <div className="mb-4 flex gap-5 items-center">
                            <label htmlFor="password" className="block text-sm font-[600] text-[1.2rem]">
                                Password:
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 
                            text-slate-800 sm:text-sm"
                            />

                        </div>
                        {passwordError &&
                            <div className="text-red-500 text-sm mt-2">{passwordError}</div>
                        }

                        <button
                            className="w-[6rem] bg-slate-600 hover:bg-orange-600  text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </> :
                        <div className="flex flex-col items-center text-center">
                            {'Login'.split('').map((char, index) => (
                                <div key={index}>{char}</div>
                            ))}
                        </div>}

                </div>


                <div
                    onMouseEnter={() => setIsLogin(false)}
                    className={`register-box  transition-all  duration-300 px-[2rem] py-[2rem] 
                    items-center justify-center text-white ${!isLogin ? 'w-5/6 bg-bg-orange ' : 'w-1/6 bg-red-300 flex'}`}
                >
                    {!isLogin ? <>
                        <div className="mb-4 flex gap-5 items-center">
                            <label htmlFor="username" className="block text-sm font-medium font-[600] text-[1.2rem]">
                                Username:
                            </label>
                            <input
                                type="username"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm
                            text-slate-800"
                            />
                        </div>
                        <div className="mb-4 flex gap-5 items-center">
                            <label htmlFor="password" className="block text-sm font-medium font-[600] text-[1.2rem]">
                                Password:
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 
                            sm:text-sm
                            text-slate-800"
                            />

                        </div>
                        {passwordError &&
                            <div className="text-red-500 text-sm mt-2">{passwordError}</div>
                        }
                        <button
                            className="w-[6rem] bg-bg-lmocha hover:bg-bg-mocha  text-white py-2 px-4 rounded-md shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={handleRegister}
                        >
                            Register
                        </button> </> :

                        <div className="flex flex-col items-center">
                            {'Register'.split('').map((char, index) => (
                                <div key={index}>{char}</div>
                            ))}
                        </div>
                    }

                </div>
            </div>

        </div>
    )
}

export default observer(Login) 