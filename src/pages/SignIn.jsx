import { useState } from "react"
import { Eye, EyeOff, XCircle } from "lucide-react"
import axios from "axios"

function SignIn(){
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({})
    const [showPassword, setShowPassword] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const validateForm = () => {
        const newErrors = {}
    
        // Email validation
        if (!formData.email.trim()) {
          newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = "Email is invalid"
        }
    
        // Password validation
        if (!formData.password) {
          newErrors.password = "Password is required"
        }
    
        setErrors(newErrors) 
        // If there are no errors, return true
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(validateForm()){
            setIsSubmitting(true)
            try {
                // Send the form data to the server locally
                const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/signin`,formData);                  
                if (response.status === 200) {
                    console.log("Login successful")
                }
            } catch (error) {
                console.error("Error:", error)
                setErrors({ form: error.message });
            } finally {
                setIsSubmitting(false)
            }
        }
    }
    


    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
                
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Sign in to your account</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Don't have an account?{" "}
                        <a href="/signup" className="font-medium text-emerald-600 hover:text-emerald-500">
                            Sign up
                        </a>
                    </p>
                    <p className="text-center">
                        <a href="/" className="font-medium text-sm text-emerald-600 hover:text-emerald-500">
                            Home
                        </a>
                    </p>
                </div>

                {errors.form && (
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <div className="flex">
                    <div className="flex-shrink-0">
                        <XCircle className="h-5 w-5 text-red-400" />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm text-red-700">{errors.form}</p>
                    </div>
                    </div>
                </div>
                )}
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
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
                                errors.email ? "border-red-300" : "border-gray-300"
                                } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm`}
                                placeholder="john.doe@example.com"
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                autoComplete="current-password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className={`appearance-none block w-full px-3 py-2 border ${
                                    errors.password ? "border-red-300" : "border-gray-300"
                                } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm`}
                                placeholder="••••••••"
                                />
                                <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                onClick={() => setShowPassword(!showPassword)}
                                >
                                {showPassword ? (
                                    <EyeOff className="h-5 w-5 text-gray-400" />
                                ) : (
                                    <Eye className="h-5 w-5 text-gray-400" />
                                )}
                                </button>
                            </div>
                            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <a href="#" className="font-medium text-emerald-600 hover:text-emerald-500">
                                Forgot your password?
                            </a>
                        </div>
                    </div>    
                    

                    <div>
                        <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                        {isSubmitting ? (
                            <span className="flex items-center">
                            Signing in...
                            </span>
                        ) : (
                            "Sign in"
                        )}
                        </button>
                    </div>
                </form> 
            </div>
        </div>
    )
}

export default SignIn