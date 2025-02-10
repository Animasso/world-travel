import { motion } from "framer-motion";
import { Earth, Menu, X } from 'lucide-react';
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <nav className="fixed w-full bg-white shadow-md z-50">
            <div className="flex items-center justify-between h-20 px-6 lg:px-10">
                {/* Logo et Titre */}
                <div className="flex items-center space-x-3">
                    <motion.div
                        initial={{ opacity: 0, x: -70, rotate: 0 }}
                        animate={{ opacity: 1, x: 0, rotate: 360 }}
                        transition={{ duration: 1, ease: "linear" }}
                    >
                        <Earth size={30} className="text-blue-700" />
                    </motion.div>
                    <span className="font-Pacifico tracking-wider text-2xl text-blue-700">
                        World Travel
                    </span>
                </div>

                {/* Menu Desktop */}
                <div className="hidden md:flex space-x-8 font-Pacifico text-blue-600 text-lg">
                    {["Home", "Destinations", "Services", "Gallery", "Reservation"].map((item, i) => (
                        <motion.a
                            key={item}
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            whileHover={{ scale: 1.2 }}
                            transition={{ delay: i * 0.2, duration: 0.4, ease: "linear" }}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-blue-800"
                        >
                            {item}
                        </motion.a>
                    ))}
                </div>

                {/* Burger Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <X size={28} className="text-blue-700 cursor-pointer" />
                        ) : (
                            <Menu size={28} className="text-blue-700 cursor-pointer" />
                        )}
                    </button>
                </div>
            </div>

            {/* Menu Mobile */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute left-0 top-full w-full bg-white shadow-lg md:hidden"
                >
                    <div className="flex flex-col items-center py-4 space-y-4 font-Pacifico text-blue-700 text-lg">
                        {["Home", "Destinations", "Services", "Gallery", "Reservation"].map((item, i) => (
                            <motion.a
                                key={item}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ delay: i * 0.2, duration: 0.4, ease: "linear" }}
                                href={`#${item.toLowerCase()}`}
                                className="hover:text-blue-800"
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
