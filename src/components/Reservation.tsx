import { BedSingle, CalendarDays, ClipboardMinus, Plane, User } from "lucide-react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reservationSchema } from "../utils/validation";
import toast from 'react-hot-toast';
import * as z from "zod";


type ReservationFormType = z.infer<typeof reservationSchema>;

const Reservation = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ReservationFormType>({
        resolver: zodResolver(reservationSchema),
    });


    const onSubmit = (data: ReservationFormType) => {
        console.log("Données valides :", data);
        toast.success("We have successfully registered your reservation")
        setTimeout(() => reset(), 500);
    };

    return (
        <section className="py-20  bg-white" id="reservation">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    viewport={{ amount: 0.2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-Pacifico text-4xl font-bold mb-4 text-gray-900">Reservation</h2>
                    <p className="text-xl text-gray-800 max-w-2xl mx-auto">
                        Book your trips with ease and peace of mind.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -200 }}
                    viewport={{ amount: 0.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-3xl mx-auto "
                >
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-50 rounded-lg shadow-2xl p-8 ">
                        {/* Destination */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700">
                                <div className="flex items-center space-x-2">
                                    <Plane className="w-5 h-5 text-blue-600" />
                                    <span>Destination</span>
                                </div>
                            </label>
                            <select
                                {...register("destination")}
                                className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="">Select your destination</option>
                                <option value="Maldives">Maldives</option>
                                <option value="New York">New York</option>
                                <option value="Dubai">Dubai</option>
                                <option value="Seychelles">Seychelles</option>
                                <option value="Bali">Bali</option>
                            </select>
                            {errors.destination && <p className="text-red-500 text-sm">{errors.destination.message}</p>}
                        </div>

                        {/* Depature Date */}
                        <div className="mt-4">
                            <label className="block text-sm font-bold text-gray-700">
                                <div className="flex items-center space-x-2">
                                    <CalendarDays className="w-5 h-5 text-blue-600" />
                                    <span>Departure date</span>
                                </div>
                            </label>
                            <input
                                type="date"
                                {...register("startDate")}
                                className="mt-2 w-full px-4 py-2 border rounded-lg"
                            />
                            {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate.message}</p>}
                        </div>

                        {/* Return Date */}
                        <div className="mt-4">
                            <label className="block text-sm font-bold text-gray-700">
                                <div className="flex items-center space-x-2">
                                    <CalendarDays className="w-5 h-5 text-blue-600" />
                                    <span>Return date</span>
                                </div>

                            </label>
                            <input
                                type="date"
                                {...register("returnDate")}
                                className="mt-2 w-full px-4 py-2 border rounded-lg"
                            />
                            {errors.returnDate && <p className="text-red-500 text-sm">{errors.returnDate.message}</p>}
                        </div>

                        {/* Travelers number */}
                        <div className="mt-4">
                            <label className="block text-sm font-bold text-gray-700">
                                <div className="flex items-center space-x-2">
                                    <User className="w-5 h-5 text-blue-600" />
                                    <span> Number of travelers</span>
                                </div>

                            </label>
                            <input
                                type="number"
                                {...register("travelers")}
                                className="mt-2 w-full px-4 py-2 border rounded-lg"
                            />
                            {errors.travelers && <p className="text-red-500 text-sm">{errors.travelers.message}</p>}
                        </div>

                        {/* Chamber type */}
                        <div className="mt-4">
                            <label className="block text-sm font-bold text-gray-700">
                                <div className="flex items-center space-x-2">
                                    <BedSingle className="w-5 h-5 text-blue-600" />
                                    <span> Type of Chamber</span>
                                </div>
                            </label>
                            <select
                                {...register("roomType")}
                                className="mt-2 w-full px-4 py-2 border rounded-lg"
                            >
                                <option value="standard">Standard</option>
                                <option value="single">Single</option>
                                <option value="double">Double</option>
                                <option value="suite">Suite</option>
                            </select>
                            {errors.roomType && <p className="text-red-500 text-sm">{errors.roomType.message}</p>}
                        </div>

                        {/* Spécial Request */}
                        <div className="mt-4">
                            <label className="block text-sm font-bold text-gray-700">
                                <div className="flex items-center space-x-2">
                                    <ClipboardMinus className="w-5 h-5 text-blue-600" />
                                    <span> Spécial Request</span>
                                </div>
                            </label>
                            <textarea
                                {...register("specialRequest")}
                                className="mt-2 w-full px-4 py-2 border rounded-lg"
                            ></textarea>
                            {errors.specialRequest && <p className="text-red-500 text-sm">{errors.specialRequest.message}</p>}
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-2 px-4 rounded-md mt-4 
                                ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700 text-white"}
                            `}
                        >
                            {isSubmitting ? "Reservation en cours..." : "Reserve"}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Reservation;
