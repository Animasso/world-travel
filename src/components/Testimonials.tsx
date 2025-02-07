import { motion } from "motion/react";
import { TestimonialsData } from "../utils/data";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
                {/* Titre */}

                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-Pacifico text-4xl font-bold mb-4 text-gray-900">
                        Testimonials

                    </h2>
                    <p className="text-xl text-gray-800 max-w-2xl mx-auto">
                        We provide unmatched service to our customers
                    </p>

                </motion.div>

                {/* Grille des témoignages */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {TestimonialsData.map((testimonial) => (
                        <TestimonialCard
                            id={testimonial.id}
                            key={testimonial.id}
                            name={testimonial.name}
                            image={testimonial.image}
                            text={testimonial.text}
                            rating={testimonial.rating}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
