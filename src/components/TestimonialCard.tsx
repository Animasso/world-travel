import { Star } from "lucide-react";
import { TestimonialsType } from "../types/types";

const TestimonialCard = ({ name, image, text, rating }: TestimonialsType) => {
    return (
        <div className="w-full max-w-sm bg-white rounded-lg shadow-lg overflow-hidden p-6">

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
        </div>
    );
};

export default TestimonialCard;
