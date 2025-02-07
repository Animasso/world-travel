import { motion } from "framer-motion";
import { servicesData } from "../utils/data";
import ServiceCard from "./ServiceCard";

const Services = () => {
    return (
        <section className=" py-20 white-50 " id="services">
            <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
                <motion.div initial={{ opacity: 0, x: -200 }}
                    viewport={{ amount: 0.2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }} className=" text-center mb-16" >
                    <h2 className=" font-Pacifico text-4xl font-bold mb-4 text-gray-900 ">Services</h2>
                    <p className=" text-xl text-gray-800 max-w-2xl mx-auto">We provide unmatched service to our customers</p>
                    <p className=" text-xl text-gray-800 max-w-2xl mx-auto">Travel with our exclusif services</p>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {servicesData.map((service, i) => (
                        <ServiceCard
                            key={service.id}
                            id={service.id}
                            name={service.name}
                            description={service.description}
                            icon={service.icon}
                            index={i}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
