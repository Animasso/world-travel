import { motion } from "framer-motion";
import HeroImage from "../assets/hero.jpg";
import { MoveRight } from "lucide-react";

const Hero = () => {
    return (
        <div className="relative h-screen">
            {/* Image  */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${HeroImage})` }}
            >
                <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>

            {/*  Hero */}
            <div className="relative z-10 h-full flex items-center justify-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    className="w-full max-w-4xl mx-auto px-6 sm:px-8"
                >
                    <h1 className="font-Pacifico tracking-widest text-4xl font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl">
                        A trip in all seasons
                    </h1>
                    <p className="mt-4 text-base font-bold text-gray-300 sm:text-lg md:text-xl">
                        Discover the best destinations and the best prices in the world
                    </p>
                    <div className=" flex justify-self-center">
                        <motion.button whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }} className="mt-6 w-full flex space-x-3 items-center sm:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-7 rounded-lg focus:outline-none cursor-pointer">
                            <span>Discover our offers</span><MoveRight size={15} />
                        </motion.button>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
