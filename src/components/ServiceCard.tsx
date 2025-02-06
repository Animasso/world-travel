import { motion } from "framer-motion";
import { ServicesType } from "../types/types";


const ServiceCard = ({ id, name, description, icon: Icon, index = 0 }: ServicesType) => {
    return (
        <motion.div
            key={id}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: index * 0.5, duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-white rounded-lg transition-shadow duration-300 shadow-md hover:shadow-lg flex flex-col items-center"
        >
            <Icon className="w-12 h-12 text-blue-700 mb-4" />
            <div className="mt-4 text-gray-800 text-center">
                <h3 className="mb-2 font-bold text-xl font-Pacifico tracking-widest">{name}</h3>
                <p>{description}</p>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
