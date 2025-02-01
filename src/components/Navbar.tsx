import { motion } from "motion/react"
import { Earth } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className=" fixed w-full z-50 transition-all duration-300">
            <div className=" flex items-center justify-between h-20">
                <motion.div className="flex items-center ml-7">
                    <motion.div initial={{ opacity: 0, x: -50, rotate: 0 }}
                        animate={{ opacity: 1, x: 0, rotate: 360 }}
                        transition={{ duration: 0.6, ease: "linear" }}  >
                        <Earth className="h-8 w-8 text-blue-700" />

                    </motion.div>
                    <span className=" font-Pacifico tracking-wider text-3xl text-blue-700">World Travel</span>
                </motion.div>
            </div>
        </nav>
    )
}

export default Navbar