import { motion } from "framer-motion";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { destinationsData } from "../utils/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import "swiper/swiper-bundle.css";


const Destinations = () => {

    return (
        <section className="py-20 bg-white" id="destinations">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
                {/* Titre et description */}
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-Pacifico text-4xl font-bold mb-4 text-gray-900">
                        Destinations
                    </h2>
                    <p className="text-xl text-gray-800 max-w-2xl mx-auto">
                        Discover our world's hidden gems
                    </p>
                    <p className="text-xl text-gray-800 max-w-2xl mx-auto">
                        Travel with our exclusive services
                    </p>
                </motion.div>


                <div className="relative">

                    <div className="custom-swiper-prev absolute top-1/2 left-0 z-10 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg cursor-pointer">
                        <ChevronLeft className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="custom-swiper-next absolute top-1/2 right-0 z-10 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg cursor-pointer">
                        <ChevronRight className="w-8 h-8 text-blue-600" />
                    </div>

                    <Swiper
                        modules={[Navigation, Pagination, EffectCoverflow]}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView="auto"
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={{ clickable: true }}
                        navigation={{
                            nextEl: ".custom-swiper-next",
                            prevEl: ".custom-swiper-prev",
                        }}
                        className="mySwiper py-10"
                    >
                        {destinationsData.map((destination, index) => (
                            <SwiperSlide className="py-4 max-w-md" key={index}>

                                <motion.div
                                    whileHover={{ scale: 1.01 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white rounded-lg shadow-lg hover:shadow-xl overflow-hidden"
                                >
                                    <img
                                        className="w-full h-64 object-cover"
                                        src={destination.image}
                                        alt={destination.name}
                                    />
                                    <div className="p-4">
                                        <h3 className="font-Pacifico tracking-widest font-bold text-2xl text-gray-900 mb-2">
                                            {destination.name}
                                        </h3>
                                        <p className="text-gray-700 text-base mb-2">
                                            {destination.description.slice(0, 100) + "..."}
                                        </p>
                                        <p className="font-bold text-gray-900 mb-2">
                                            {destination.price}
                                        </p>
                                        <Link to={`/destination/${destination.id}`} className="w-full block">
                                            <button className="w-full px-6 py-2 bg-blue-500 transition-colors duration-300 text-white rounded-md hover:bg-blue-700">
                                                See More details
                                            </button>
                                        </Link>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Destinations;
