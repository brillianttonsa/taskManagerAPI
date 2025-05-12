import { useState } from "react";
import { Eye, EyeOff, CheckCircle, XCircle } from "lucide-react";
import axios from "axios";

function SignUp() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {}
    
        // Username validation
        if (!formData.username.trim()) {
          newErrors.username = "Username is required"
        } else if (formData.username.length < 3) {
          newErrors.username = "Username must be at least 3 characters"
        }
    
        // Email validation
        if (!formData.email.trim()) {
          newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = "Email is invalid"
        }
    
        // Password validation
        if (!formData.password) {
          newErrors.password = "Password is required"
        } else if (formData.password.length < 8) {
          newErrors.password = "Password must be at least 8 characters"
        }
    
        // Confirm password validation
        if (!formData.confirmPassword) {
          newErrors.confirmPassword = "Please confirm your password"
        } else if (formData.password !== formData.confirmPassword) {
          newErrors.confirmPassword = "Passwords do not match"
        }
    
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
      }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()){
            setIsSubmitting(true);
            setErrors({});
            
            try {
                const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/signup`,formData);
                console.log(response.data);
                setSubmitSuccess(true);
                setFormData({
                    username: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                });
            } catch (error) {
                console.log(error);
                setErrors(error.response?.data || { form: "An unexpected error occurred" });
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div id="signup" className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
                <div>
                    <h2 className="text-center text-2xl font-bold text-gray-900">
                        Create your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <a href="/signin" className="text-emerald-600 hover:text-emerald-500 font-medium">
                            Sign in
                        </a>
                    </p>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        <a href="/" className="text-emerald-600 hover:text-emerald-500 font-medium">Home</a>
                    </p>
                </div>

                {error.form && (
                    <div className="bg-red-50 border-l-4 border-red-400 p-4">
                        <div className="flex">
                            <XCircle className="h-5 w-5 text-red-400" />
                            <p className="ml-3 text-sm text-red-700">{error.form}</p>
                        </div>
                    </div>
                )}

                {submitSuccess && (
                    <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 my-4">
                        <div className="flex">
                            <CheckCircle className="h-5 w-5 text-emerald-400" />
                            <p className="ml-3 text-sm text-emerald-700">Account created successfully!</p>
                        </div>
                    </div>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            autoComplete="username"
                            required
                            value={formData.username}
                            onChange={handleChange}
                            className={`mt-1 appearance-none block w-full px-3 py-2 border ${
                            error.username ? "border-red-300" : "border-gray-300"
                            } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm`}
                            placeholder="BrilliantTonsa"
                        />
                        {error.username && <p className="text-sm text-red-600">{error.username}</p>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className={`mt-1 appearance-none block w-full px-3 py-2 border ${
                            error.email ? "border-red-300" : "border-gray-300"
                            } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm`}
                            placeholder="taskmanager@gmail.com"
                        />
                        {error.email && <p className="text-sm text-red-600">{error.email}</p>}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                required
                                autoComplete="new-password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`appearance-none block w-full px-3 py-2 border ${
                                    error.password ? "border-red-300" : "border-gray-300"
                                } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm`}
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-2 flex items-center"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? (
                                    <EyeOff className="h-5 w-5 text-gray-400" />
                                ) : (
                                    <Eye className="h-5 w-5 text-gray-400" />
                                )}
                            </button>
                        </div>
                        {error.password && <p className="text-sm text-red-600">{error.password}</p>}
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                required
                                autoComplete="new-password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={`appearance-none block w-full px-3 py-2 border ${
                                error.confirmPassword ? "border-red-300" : "border-gray-300"
                                } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm`}
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-2 flex items-center"
                                onClick={() => setShowConfirmPassword((prev) => !prev)}
                            >
                                {showConfirmPassword ? (
                                    <EyeOff className="h-5 w-5 text-gray-400" />
                                ) : (
                                    <Eye className="h-5 w-5 text-gray-400" />
                                )}
                            </button>
                        </div>
                        {error.confirmPassword && (
                            <p className="text-sm text-red-600">{error.confirmPassword}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="button-primary"
                    >
                        {isSubmitting ? (
                            <span className="flex items-center">
                                <svg
                                    className="animate-spin h-5 w-5 mr-2 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v8H4z"
                                    />
                                </svg>
                                Creating...
                            </span>
                        ) : (
                            "Sign up"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
