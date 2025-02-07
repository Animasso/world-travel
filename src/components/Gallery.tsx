import { galleryData } from "../utils/data"
import { motion } from "framer-motion"
const Gallery = () => {
    return (
        <section id="gallery" className=" py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
                <motion.div initial={{ opacity: 0, y: -200 }}
                    viewport={{ amount: 0.3 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }} className="text-center mb-16" >
                    <h2 className=" font-Pacifico text-4xl font-bold mb-4 text-gray-900 ">Gallery</h2>
                    <p className=" text-xl text-gray-800 max-w-2xl mx-auto">Our amazing gallery showcases our most memorable experiences</p>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {galleryData.map((image, i) => (
                        <motion.div

                            initial={{ opacity: 0, y: 20, scale: 0.7 }}
                            transition={{ duration: 0.4, ease: "easeInOut", delay: i * 0.5 }}
                            viewport={{ amount: 0.2 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            key={image.title} className="relative group overflow-hidden rounded-lg shadow-xl" >
                            <img className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500 ease-in-out" src={image.url} alt={image.title} />
                            <div className="absolute inset-0 opacity-0  bg-black bg-opacity-50 group-hover:opacity-50 transition-opacity duration-500 flex items-center justify-center " >
                                <h3 className=" text-xl font-extrabold tracking-widest text-white text-center">{image.title}</h3>
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>

        </section>
    )
}

export default Gallery