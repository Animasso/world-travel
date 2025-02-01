import { motion } from "framer-motion"; // Correction de l'import
import { Earth } from 'lucide-react';
import { Menu } from 'lucide-react';
const Navbar = () => {
    return (
        <nav className=" fixed w-full  mx-auto px-4 sm:px-6 lg:px-8 z-50 transition-all duration-300">
            <div className="flex items-center justify-around h-20 w-full">

                {/* Logo et Titre */}
                <div className="flex items-center ml-10 whitespace-nowrap
                 flex-1"> {/* Ajout de flex-1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -70, rotate: 0 }}
                        animate={{ opacity: 1, x: 0, rotate: 360 }}
                        transition={{ duration: 1, ease: "linear" }}
                    >
                        <Earth className="h-8 w-8 text-blue-700 mr-2" />
                    </motion.div>
                    <span className="font-Pacifico tracking-wider text-3xl text-blue-700">World Travel</span>
                </div>

                {/* Menu */}
                <div className="hidden mdd:block font-Pacifico text-blue-600 text-xl">
                    <div className="ml-10 flex items-baseline space-x-8">
                        {["Home", "Destinations", "Services", "About", "Contact"].map((item, i) => (
                            <motion.a
                                key={item}
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                whileHover={{ scale: 1.2 }}
                                transition={{ delay: i * 0.5, duration: 0.6, ease: "linear" }}
                                href={`"${item}`}
                                className="  px-3 py-2 rounded-md "
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>

                </div>
                {/* burger button */}
                <Menu className="h-8 w-8 mdd:hidden text-blue-700" />
            </div>
        </nav>
    );
}

export default Navbar;
