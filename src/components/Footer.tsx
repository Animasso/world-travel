import Facebook from "../assets/facebook.avif";
import Insta from "../assets/insta.avif"
import X from "../assets/x.avif"
import Linkedin from "../assets/link.png"


const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center text-center lg:text-left">
                    {/*Links */}
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                        <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
                        <ul className="list-none space-y-2">
                            <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                            <li><a href="#destinations" className="text-gray-400 hover:text-white">Destinations</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                        <h4 className="text-lg font-semibold mb-4">Social Media</h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-center justify-center lg:justify-start space-x-2">
                                <img src={Facebook} className="w-6 h-6 object-cover" alt="Facebook" />
                                <a href="#facebook" className="text-gray-400 hover:text-white">Facebook</a>
                            </li>
                            <li className="flex items-center justify-center lg:justify-start space-x-2">
                                <img src={X} className="w-6 h-6 object-cover" alt="X (Twitter)" />
                                <a href="#x" className="text-gray-400 hover:text-white">X</a>
                            </li>
                            <li className="flex items-center justify-center lg:justify-start space-x-2">
                                <img src={Insta} className="w-6 h-6 object-cover" alt="Instagram" />
                                <a href="#instagram" className="text-gray-400 hover:text-white">Instagram</a>
                            </li>
                            <li className="flex items-center justify-center lg:justify-start space-x-2">
                                <img src={Linkedin} className="w-6 h-6 object-cover" alt="Linkedin" />
                                <a href="#linkedin" className="text-gray-400 hover:text-white">Linkedin</a>
                            </li>
                        </ul>
                    </div>

                    {/* Legals */}
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                        <h4 className="text-lg font-semibold mb-4">Legal Information</h4>
                        <ul className="list-none space-y-2">
                            <li><a href="#legal" className="text-gray-400 hover:text-white">Legal Notice</a></li>
                            <li><a href="#privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                            <li><a href="#terms" className="text-gray-400 hover:text-white">Terms of Use</a></li>
                        </ul>
                    </div>
                    <div className="w-full px-4 text-lg text-white text-center">
                        &copy; 2025 World Travel. All rights reserved.AsidProd</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
