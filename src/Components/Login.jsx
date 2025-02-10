import React, { useContext, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
    const emailRef = useRef();
    const { userLogin, setUser, handleSignInWithGoogle, loading, setLoading } =
        useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setLoading(true);
        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success("You have logged in successfully!");
                const redirectPath = location.state?.from?.pathname || "/";
                navigate(redirectPath, { replace: true });

                
            })
            .catch((err) => {
                toast.error(err.message || "Failed to log in. Please try again.");
                setLoading(false);
            });
    };

    const loginWithGoogle = () => {
        setLoading(true);
        handleSignInWithGoogle()
            .then((result) => {
                const user = result.user;
                setUser(user);
                 toast.success("You have logged in successfully");
                const redirectPath = location.state?.from?.pathname || "/";
                navigate(redirectPath, { replace: true });

                setLoading(false);
            })
            .catch((err) => {
                toast.error(err.message || "Failed to log in with Google. Please try again.");
                setLoading(false);
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-indigo-50 max-w-screen-2xl mx-auto">
            <Toaster />
            <div className="w-full max-w-md bg-indigo-600 shadow-lg rounded-lg p-8">
                <h2 className="text-3xl font-bold text-center text-white mb-6">
                    Login to EchoBoard
                </h2>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-white"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            ref={emailRef}
                            id="email"
                            name="email"
                            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-white"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 transition font-medium"
                    >
                        Login
                    </button>

                </form>
                <div className="flex justify-between items-center mt-4 text-sm text-white">
                   
                    <Link to="/auth/register" className="hover:underline">
                        Register
                    </Link>
                </div>
                <div className="divider my-6 text-white">OR</div>
                <button
                    onClick={loginWithGoogle}
                    className="w-full flex items-center justify-center py-2 text-indigo-600 bg-white rounded-lg hover:bg-gray-200 transition font-medium"
                >
                    <FcGoogle className="mr-2 text-lg" />
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default Login;
