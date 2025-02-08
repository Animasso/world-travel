import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TestimonialsType } from "../types/types";
import { variants } from "../utils/data";
const TestimonialCard = ({ name, image, text, rating, index }: TestimonialsType & { index: number }) => {

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut", delay: index * 0.3 }}
            variants={variants[index % variants.length]}
            className="w-full max-w-sm bg-white rounded-lg shadow-lg overflow-hidden p-6"
        >
            {/* Image */}
            <div className="relative rounded-full w-24 h-24 mx-auto shadow-2xl">
                <img
                    className="w-full h-full object-cover rounded-full border-none border-blue-500"
                    src={image}
                    alt={name}
                />
            </div>


            <div className="text-center mt-4">
                <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                <p className="mt-2 text-gray-700">{text}</p>
            </div>

            <div className="flex justify-center mt-4">
                {Array.from({ length: rating }).map((_, index) => (
                    <Star key={index} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
            </div>
        </motion.div>
    );
};

export default TestimonialCard;
