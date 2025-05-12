import { CheckSquare, Phone, Mail, MapPin, Instagram, Twitter } from "lucide-react"

function Footer(){
    return(
        <footer id="contacts" className="bg-gray-900 text-white">
            <div className="container py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center">
                            <CheckSquare className="h-8 w-8 text-emerald-500" />
                            <span className="ml-2 text-xl font-bold">TaskManagement</span>
                        </div>
                        <p className="mt-4 text-gray-400">
                            Simplify project management and boost productivity with our intuitive task management platform.
                        </p>
                        <div className="mt-6 flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="h-8 w-8"/>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="h-8 w-8"/>
                            </a>
                        </div>
                    </div>
                    <div className="flex-column">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <span className="flex-column space-y-2">
                            <a href="/" className="text-gray-400 hover:text-white transition-colors">
                                Home
                            </a>
                            <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                                Features
                            </a>
                            <a href="#contacts" className="text-gray-400 hover:text-white transition-colors">
                                Contact
                            </a>
                        </span>
                    </div>
                    <div className="flex-column">
                        <h3 className="font-bold text-lg mb-4">Contact Us</h3>
                        <span className="text-gray-400 space-y-4">
                            <a href="mailto:abdullatifmnyamis@gmail.com" className="flex items-center"><Mail className="h-6 w-6 text-emerald-500 flex-shrink-0 mr-3"/>abdullatifmnyamis@gmail.com</a>
                            <a href="tel:+255683208698" className="flex items-center"><Phone className="h-6 w-6 text-emerald-500 flex-shrink-0 mr-3"/>+255683208698</a>
                        </span>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} TaskManagement. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer